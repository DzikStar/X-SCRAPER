"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-a665aad7"],
    {
        896449: (e, t, n) => {
            n.d(t, { XL: () => F, ZP: () => U });
            n(136728);
            var r = n(202784),
                o = n(325686),
                a = n(822399),
                s = n(525754),
                c = n(530732),
                i = n(731708),
                l = n(811176),
                d = n(992942),
                u = n(868634),
                m = n(247056),
                p = n(138099),
                g = n(154003),
                h = n(58881),
                y = n(392237),
                E = n(111677),
                P = n.n(E),
                b = n(379327),
                f = n(250195),
                C = n(401388),
                Z = n(347720),
                _ = n(203421),
                k = n(200904),
                w = n(192731),
                S = n(202205),
                v = n(668214),
                T = n(852657);
            const I = (e) => e.quickPromote.paymentMethods,
                x = (0, v.Z)()
                    .propsFromState(() => ({ paymentMethods: I, selectedPaymentMethod: T.DY }))
                    .propsFromActions(() => ({ setSelectedPaymentMethod: T.$L, deletePaymentMethod: T.gp }))
                    .withAnalytics(S.EP),
                D = P().de43b660,
                A = P().hb4773a0,
                q = P().aa2a3dd4,
                L = P().b1c5b63c,
                M = P().affb5878,
                B = P().cfd2f35e,
                N = (e, t, n, o) => e.map((e) => ({ label: r.createElement(F, { deletePaymentMethodHandler: n, id: e.id, imgSrcUrl: e.imgSrcUrl, isSelected: t === e.id, lastFourDigits: e.lastFourDigits, status: e.cardStatus }), value: e.id, containerStyle: [H.paymentMethodRadioContainer, H.bottomBorder, o] })),
                F = (e) => {
                    const t = e.deletePaymentMethodHandler
                        ? (t) =>
                              r.createElement(l.Z, {
                                  items: [
                                      {
                                          Icon: f.default,
                                          text: q,
                                          onClick: () => {
                                              t(), e.deletePaymentMethodHandler && e.deletePaymentMethodHandler(e.id);
                                          },
                                          isEmphasized: !0,
                                          disabled: e.isSelected,
                                      },
                                  ],
                                  onCloseRequested: t,
                              })
                        : void 0;
                    return r.createElement(o.Z, { style: H.paymentMethod }, r.createElement(o.Z, { style: [H.descriptionItemContainer, e.paymentDescriptionStyle] }, e.imgSrcUrl ? r.createElement(o.Z, { style: H.cardImageContainer }, r.createElement(d.Z, { source: e.imgSrcUrl, style: H.cardImage })) : r.createElement(i.ZP, { size: "body" }, "Card"), r.createElement(o.Z, { style: H.descriptionContainer }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, `${L} ${e.lastFourDigits}`)), ("Expired" === e.status || "Invalid" === e.status) && r.createElement(o.Z, { style: H.statusBadgeContainer }, r.createElement(u.ZP, { style: H.expiredBadge }, r.createElement(i.ZP, { size: "subtext3", style: H.expiredBadge, weight: "bold" }, e.status)))), e.deletePaymentMethodHandler && r.createElement(m.Z, { renderActionMenu: t }));
                },
                R = (e) => {
                    const { cancelDeletePaymentMethodHandler: t, confirmDeletePaymentMethodHandler: n } = e;
                    return r.createElement(p.Z, { onMaskClick: t, type: "bottom", withMask: !0 }, r.createElement(o.Z, { style: H.deleteCardConfirmContainer }, r.createElement(g.ZP, { icon: r.createElement(f.default, null), onPress: n, style: H.modalButton, type: "destructiveOutlined" }, M), r.createElement(g.ZP, { onPress: t, style: H.modalButton, type: "primaryOutlined" }, B)));
                },
                O = h.Z.generate({ backgroundColor: y.default.theme.colors.transparent, color: y.default.theme.colors.primary, insetFocusRing: !0 }),
                H = y.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, paymentMethod: { flexDirection: "row", justifyContent: "space-between" }, descriptionItemContainer: { backgroundColor: e.colors.cellBackground, paddingVertical: e.spaces.space8, marginStart: e.spaces.space12 }, statusBadgeContainer: { margin: e.spaces.space2 }, descriptionContainer: { margin: e.spaces.space2 }, paymentMethodRadioContainer: { flexDirection: "row-reverse", paddingVertical: e.spaces.space8, marginStart: `-${e.spaces.space24}` }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, deleteCardConfirmContainer: { justifyContent: "flex-end", padding: e.spaces.space8 }, titleContainer: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space20, paddingStart: e.spaces.space20 }, addPaymentMethodContainer: { backgroundColor: e.colors.cellBackground }, addPaymentMethodInteractiveContainer: { flexDirection: "row", minHeight: e.spaces.space48, paddingVertical: e.spaces.space16 }, plusIcon: { color: e.colors.primary, marginEnd: e.spaces.space16 }, expiredBadge: { backgroundColor: e.colors.red50, color: e.colors.red900 }, cardImageContainer: { height: "20px", flexDirection: "row", width: "32px", margin: e.spaces.space2 }, cardImage: { resizeMode: "contain", flex: 1 }, modalButton: { margin: e.spaces.space8 } })),
                U = x((e) => {
                    const {
                        analytics: t,
                        deletePaymentMethod: n,
                        history: l,
                        match: {
                            params: { quickPromotePlatform: d, screenName: u, statusId: m },
                        },
                        paymentMethods: p,
                        selectedPaymentMethod: g,
                        setSelectedPaymentMethod: h,
                    } = e;
                    (0, _.d)(S.MN.PaymentSelect);
                    const y = g ? g.id : "",
                        [E, P] = r.useState(!1),
                        [f, v] = r.useState(null),
                        T = (e, n) => {
                            if ((0, C.Z)(p)) return;
                            const r = p.find((e) => e.id === n) || null;
                            (r && "Invalid" === r.cardStatus) ||
                                (P(!0),
                                h(n)
                                    .catch((e) => {
                                        (0, S.hq)(t)(S.Ur.paymentMethodChanged(e));
                                    })
                                    .finally(() => {
                                        P(!1);
                                    }),
                                (0, S.hq)(t)(S.Ur.paymentMethodChanged()));
                        };
                    return (
                        r.useEffect(() => {
                            (0, S.hq)(t)(S.Ur.paymentSelectPageLoad());
                        }, [t]),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                o.Z,
                                { style: H.qpContainer, testID: w.Z.paymentMethodSelect },
                                E ? r.createElement(a.Z, { indeterminate: !0 }) : null,
                                r.createElement(k.ZP, null, r.createElement(Z.Y, { title: D })),
                                (0, k.$_)((e) => r.createElement(s.Z, { disabled: E, name: D, onChange: T, options: N(p, y, (e) => v(e), e), value: y })),
                                (0, k.$_)((e) => r.createElement(o.Z, { style: H.addPaymentMethodContainer }, r.createElement(c.Z, { disabled: E, interactive: E, interactiveStyles: O, onPress: () => l.push(`${(0, S.WS)(u, m, d, S.MN.Payment)}?isAddingPayment=true`), style: [H.addPaymentMethodInteractiveContainer, e] }, r.createElement(b.default, { style: H.plusIcon }), r.createElement(i.ZP, { align: "left", color: "primary" }, A)))),
                                f &&
                                    r.createElement(R, {
                                        cancelDeletePaymentMethodHandler: () => v(null),
                                        confirmDeletePaymentMethodHandler: () => {
                                            f &&
                                                (v(null),
                                                P(!0),
                                                n(f)
                                                    .catch((e) => {
                                                        (0, S.hq)(t)(S.Ur.paymentMethodDeleted(e));
                                                    })
                                                    .finally(() => {
                                                        P(!1);
                                                    }),
                                                (0, S.hq)(t)(S.Ur.paymentMethodDeleted()));
                                        },
                                    }),
                            ),
                        )
                    );
                });
        },
        200904: (e, t, n) => {
            n.d(t, { $_: () => l, FR: () => i, ZP: () => u });
            var r = n(202784),
                o = n(325686),
                a = n(67369),
                s = n(537392),
                c = n(392237);
            const i = (e) =>
                    r.createElement(s.ZP, null, ({ windowWidth: t }) => {
                        const n = t < c.default.theme.breakpoints.small;
                        return e(n ? "space32" : "space80");
                    }),
                l = (e) =>
                    r.createElement(s.ZP, null, ({ windowWidth: t }) => {
                        const n = t < c.default.theme.breakpoints.small;
                        return e(n ? d.mobileContainer : d.webContainer);
                    }),
                d = c.default.create((e) => ({ webContainer: { paddingHorizontal: e.spaces.space80 }, mobileContainer: { paddingHorizontal: e.spaces.space32 } })),
                u = ({ children: e }) => {
                    const t = (0, a.yu)() ? d.mobileContainer : d.webContainer;
                    return r.createElement(o.Z, { style: t }, e);
                };
        },
        430996: (e, t, n) => {
            n.d(t, { Y: () => I, Z: () => D });
            var r = n(202784),
                o = n(200904),
                a = n(202205),
                s = n(668214),
                c = n(852657);
            const i = (e) => e.quickPromote.targeting.contextualKeywords,
                l = (0, s.Z)()
                    .propsFromState(() => ({ contextualKeywords: i }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP),
                d = (0, s.Z)()
                    .propsFromState(() => ({ contextualKeywords: i }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: c.ch }))
                    .withAnalytics(a.EP);
            var u = n(325686),
                m = n(370006),
                p = n(786998),
                g = n(392237),
                h = n(192731);
            function y({ children: e, onBack: t }) {
                const n = r.useMemo(() => r.createElement(m.Z, { onClick: t }), [t]);
                return r.createElement(u.Z, { style: E.qpContainer, testID: h.Z.targetingKeywordsScreen }, r.createElement(p.Z, { leftControl: n, style: E.appBar, title: "Select some keywords" }), e);
            }
            const E = g.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var P = n(855488),
                b = n(111677),
                f = n.n(b),
                C = n(187669),
                Z = n(203421),
                _ = n(599190),
                k = n(973014);
            function w({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: o }) {
                const a = r.useCallback(() => o(e.filter((e, n) => n !== t)), [e, t, o]),
                    s = r.useMemo(() => ({ disabled: !1, mode: _.D.Remove, onSecondaryClick: a }), [a]);
                return r.createElement(k.Z, { secondaryAction: s, style: S.withMarginEnd, text: n });
            }
            const S = g.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                v = f().fe26420a;
            function T({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: o }) {
                const [s, c] = r.useState(""),
                    i = r.useCallback((e) => {
                        const t = e.target.value;
                        c(t);
                    }, []),
                    l = r.useCallback(
                        (e) => {
                            switch (e.key) {
                                case ",":
                                case "Enter": {
                                    e.preventDefault();
                                    const n = s.trim(),
                                        r = t.some((e) => e.toLowerCase() === n.toLowerCase());
                                    "" === n || r || (o(t.concat(n)), c(""));
                                    break;
                                }
                            }
                        },
                        [t, s, o],
                    );
                return (
                    (0, C.q)(() => () => {
                        (0, a.hq)(e)(a.Ur.setTargetingKeywords(t.join(",")));
                    }),
                    (0, C.q)(() => {
                        o(n);
                    }),
                    (0, Z.d)(a.MN.TargetingKeywords),
                    r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(u.Z, { style: x.selectionGroupContainer }, r.createElement(P.Z, { editable: t.length < 200, label: v, name: "keywords", onChange: i, onKeyDown: l, style: x.noSpacing, testID: h.Z.targetingKeywordsInput, value: s })),
                        r.createElement(
                            u.Z,
                            { style: x.row },
                            t.map((e, n) => r.createElement(w, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: o })),
                        ),
                    )
                );
            }
            const I = d(T),
                x = g.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const D = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: s, location: c, match: i, setTargetedContextualKeywords: l } = e,
                    d = r.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: r } = i.params;
                        (0, a.Mi)(s, c)(n, r, e, t);
                    }, [s, c, i.params]),
                    u = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return r.createElement(y, { onBack: d }, r.createElement(o.ZP, null, r.createElement(T, u)));
            });
        },
        322828: (e, t, n) => {
            n.r(t), n.d(t, { QuickPromoteScreen: () => On, default: () => Un });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(107267),
                s = n(782261),
                c = n(420740),
                i = n(786998),
                l = n(370006),
                d = n(154003),
                u = n(392237),
                m = n(111677),
                p = n.n(m),
                g = n(143778),
                h = n(290402),
                y = n(980407),
                E = n(443781),
                P = n(702001),
                b = n(427266),
                f = n(441408),
                C = n(315032),
                Z = n(312771),
                _ = n(364753),
                k = n(649038),
                w = n(71620),
                S = n(668214),
                v = n(852657),
                T = n(836255),
                I = n(202205);
            const x = (e, t) => t.match.params.statusId,
                D = (e, t) => T.Z.selectHydrated(e, x(0, t)),
                A = (e, t) => (0, Z.h1)(T.Z.selectFetchStatus(e, x(0, t)), e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus, e.quickPromote.couponsFetchStatus),
                q = (e, t) => e.quickPromote.promoteStatus,
                L = (e, t) => e.quickPromote.promoteErrorCode,
                M = (e, t) => e.quickPromote.account.campaigns,
                B = (0, S.Z)()
                    .propsFromState(() => ({ statusId: x, fetchStatus: A, tweet: D, campaigns: M, promoteFetchStatus: q, promoteErrorCode: L }))
                    .propsFromActions((e) => ({
                        clearPersistedRedirectBackState: () => (0, v.oE)(),
                        createLocalApiErrorHandler: (0, w.zr)("QUICK_PROMOTE_SCREEN"),
                        fetchTweetIfNeeded: T.Z.fetchOneIfNeeded,
                        fetchCurrentTargetingLocationIfNeeded: v.yW,
                        fetchAvailableBudgetsIfNeeded: v.WS,
                        fetchAdsAccountDataIfNeeded: v.Ek,
                        fetchQuickPromoteEligibilityIfNeeded: v.E6,
                        fetchCouponsIfNeeded: v.fN,
                        handleFirstLoad: () =>
                            ((e) => {
                                const { analytics: t, history: n, location: r, match: o } = e,
                                    { quickPromotePlatform: a, quickPromoteScreenName: s, screenName: c, statusId: i } = o.params,
                                    l = { pa_signup_complete: r.query.pa_signup_complete || "" };
                                return (0, v.Jk)(c, i, a, s, n, l, t);
                            })(e),
                        setObjective: v.mS,
                        setPromoteFetchStatus: v.Ik,
                    }))
                    .withAnalytics(I.EP);
            var N = n(581505),
                F = n(661345),
                R = n(107456),
                O = n(782947),
                H = n(40610),
                U = n(347720),
                z = n(203421),
                j = n(200904),
                G = n(752500),
                W = n(192731);
            const K = (e, t) => e.quickPromote.objective,
                V = (e, t) => T.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                Q = (0, S.Z)()
                    .propsFromState(() => ({ selectedObjective: K, tweet: V }))
                    .propsFromActions(() => ({ setObjective: v.mS }))
                    .withAnalytics(I.EP);
            var $ = n(772750),
                Y = n(835152);
            const X = p().fcc839b6,
                J = (p().b679a538, p().cb19a2f0),
                ee = p().a2d37164,
                te = p().cefad302,
                ne = p().b614fad0,
                re = u.default.create((e) => ({ titleContainer: { paddingBottom: e.spaces.space28 }, qpContainer: { flex: 1, overflowY: "auto" } })),
                [oe, ae] = [
                    { label: (0, G.WF)(C.CH.Engagements), value: C.CH.Engagements, description: J, illustration: r.createElement($.i, null), testID: W.Z.getObjective(C.CH.Engagements) },
                    { label: (0, G.WF)(C.CH.WebsiteClicks), value: C.CH.WebsiteClicks, description: ee, illustration: r.createElement(Y.T, null), testID: W.Z.getObjective(C.CH.WebsiteClicks) },
                ];
            const se = Q((e) => {
                    const { analytics: t, selectedObjective: n, setObjective: a, tweet: c } = e,
                        i = c ? s.Z.getOriginalTweet(c) : c,
                        l = null != i?.entities?.media?.length && i?.entities?.media?.length > 0,
                        d = 1 === i?.entities?.urls?.length;
                    r.useEffect(() => {
                        (0, I.hq)(t)(I.Ur.goalSelectionPageLoad());
                    }, []);
                    const u = r.useMemo(
                            () =>
                                (function ({ selectedObjective: e, tweetContainsLinks: t, tweetHasMedia: n }) {
                                    const o = [oe, { ...ae, disabled: !t, disabledInlineCallout: t ? void 0 : r.createElement(H.Z.Danger, { headline: ne, text: te, withIcon: !0 }) }];
                                    return o;
                                })({ tweetHasMedia: l, tweetContainsLinks: d, selectedObjective: n }),
                            [l, d, n],
                        ),
                        m = r.useCallback(
                            (e, n) => {
                                a(n), (0, I.hq)(t)(I.Ur.setPromoteGoal(n));
                            },
                            [t, a],
                        );
                    return r.createElement(o.Z, { style: re.qpContainer, testID: W.Z.objectiveScreen }, r.createElement(z.O, { screenType: I.MN.Objective }), r.createElement(j.ZP, null, r.createElement(U.Y, { style: re.titleContainer, title: X }), r.createElement(O.Z, { name: "objective-picker", onChange: m, options: u, value: n })));
                }),
                ce = se;
            var ie = n(653970);
            const le = n.p + "followers_icon.80e5851a.png";
            var de = n(6885);
            function ue(e) {
                new Image().src = e;
            }
            function me() {
                return ue(ie), ue(le), ue(de), r.createElement(r.Fragment, null);
            }
            n(136728), n(543673), n(240753), n(128399);
            var pe = n(614983),
                ge = n.n(pe),
                he = n(362075),
                ye = n(163889),
                Ee = n(942893),
                Pe = n(704279),
                be = n(813604);
            const fe = (e, t) => t.match.params.statusId,
                Ce = (e, t) => T.Z.selectHydrated(e, fe(0, t)),
                Ze = (e, t) => T.Z.selectFetchStatus(e, fe(0, t)),
                _e = (e, t) => e.quickPromote.account.adsAccount,
                ke = (e, t) => e.quickPromote.account.selectedFundingInstrument,
                we = (0, S.Z)()
                    .propsFromState(() => ({ fetchStatus: Ze, tweet: Ce, adsAccount: _e, fundingInstrument: ke, selectedPaymentMethod: v.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, w.zr)("QUICK_PROMOTE_PAYMENT_SCREEN"), fetchTweetIfNeeded: T.Z.fetchOneIfNeeded, scribeAction: Pe.n, savePlatformRedirectBackState: () => (0, be.oE)(e.match.params.quickPromotePlatform), fetchAdsAccountDataIfNeeded: be.Ek }))
                    .withAnalytics(I.EP);
            class Se extends r.PureComponent {
                componentDidMount() {
                    const { adsAccount: e, analytics: t, fundingInstrument: n, match: r, savePlatformRedirectBackState: o } = this.props,
                        { quickPromotePlatform: a, statusId: s } = r.params;
                    o();
                    const c = ve(this.props),
                        i = (0, I.lg)(a, e, s, n, c, this.context.featureSwitches);
                    c && (0, I.hq)(t)(I.Ur.paymentPageLoadAddingCard()), (0, I.hq)(t)(I.Ur.paymentPageLoad(i.url)), i.isSameHost || window.location.assign(i.url);
                }
                render() {
                    const { adsAccount: e, fundingInstrument: t, match: n } = this.props,
                        o = ve(this.props),
                        { quickPromotePlatform: a, statusId: c } = n.params,
                        i = (0, I.lg)(a, e, c, t, o, this.context.featureSwitches);
                    return i.isSameHost
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(z.O, { screenType: I.MN.Payment }),
                              r.createElement(he.Z, {
                                  dangerouslyDisableSandbox: !0,
                                  onMessage:
                                      ((l = this.props),
                                      (d = this.context),
                                      (e) => {
                                          const { analytics: t, tweet: n } = l,
                                              r = ve(l);
                                          if (e && "quick_promote" === e.name)
                                              if ("scribe" === e.type) {
                                                  const r = (n && s.Z.getOriginalTweet(n)) || void 0,
                                                      o = r ? [Ee.Z.getTweetItem(r)] : [],
                                                      a = e.scribeData || {},
                                                      c = "string" == typeof a.component ? a.component : "quick_promote",
                                                      i = "string" == typeof a.uiEvent ? a.uiEvent : "";
                                                  t.scribe({ component: c, action: i, data: { items: o } });
                                              } else if ("navigation" === e.type || "cardAdded" === e.type) {
                                                  const { createLocalApiErrorHandler: e, fetchAdsAccountDataIfNeeded: n, history: o, match: a } = l,
                                                      { quickPromotePlatform: s, screenName: c, statusId: i } = a.params;
                                                  ge()(!!d.viewerUserId, "viewerUserId must be defined"), n(d.viewerUserId, t, !0).catch(e()), o.push(`/${c}/status/${i}/${s}/${r ? I.MN.PaymentSelect : I.MN.BudgetSelect}`);
                                              }
                                      }),
                                  reportError: ye.ZP,
                                  src: i.url,
                                  style: Te.iframe,
                                  title: "Payment Form",
                              }),
                          )
                        : null;
                    var l, d;
                }
            }
            function ve(e) {
                const t = (function (e, t) {
                    const {
                        location: { search: n },
                    } = e;
                    return new URLSearchParams(n).get(t);
                })(e, "isAddingPayment");
                return !!t && "true" === t;
            }
            Se.contextType = E.rC;
            const Te = u.default.create((e) => ({ iframe: { flexGrow: 1, paddingTop: 0 } })),
                Ie = we(Se);
            var xe = n(896449),
                De = n(834324),
                Ae = n(224162),
                qe = n(779610),
                Le = n(731708),
                Me = n(696591),
                Be = n(847016),
                Ne = n(390387);
            const Fe = (e) => e.quickPromote.objective,
                Re = (e, t) => e.quickPromote.targeting.targetedLocations,
                Oe = (e, t) => e.quickPromote.targeting.ageBucket,
                He = (e, t) => e.quickPromote.targeting.gender,
                Ue = (e, t) => e.quickPromote.targeting.keywords,
                ze = (e, t) => e.quickPromote.budget.dailyBudget,
                je = (e, t) => e.quickPromote.budget.durationDays,
                Ge = (e) => e.quickPromote.budget.currency || "USD",
                We = (e) => e.quickPromote.account.selectedFundingInstrument,
                Ke = (e) => e.quickPromote.account.adsAccount,
                Ve = (e) => e.quickPromote.promoteStatus,
                Qe = (e) => e.quickPromote.promoteErrorCode,
                $e = (e) => e.quickPromote.coupons,
                Ye = (e) => e.quickPromote.enrollCouponErrorCode,
                Xe =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: r, screenName: o, statusId: a } = t.params,
                            s = (0, I.WS)(o, a, r, I.MN.Done);
                        return (0, v.kb)({ history: e, statusId: a, nextPath: s, analytics: n });
                    },
                Je = (0, S.Z)()
                    .propsFromState(() => ({ objective: Fe, targetedLocations: Re, ageBucket: Oe, gender: He, keywords: Ue, dailyBudget: ze, durationDays: je, lang: Ne.VT, country: v.QE, currency: Ge, fundingInstrument: We, adsAccount: Ke, promoteStatus: Ve, promoteErrorCode: Qe, coupons: $e, enrollCouponErrorCode: Ye, selectedPaymentMethod: v.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, w.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, v.oE)(), createPromotion: Xe(e), enrollCoupon: v.br }))
                    .withAnalytics(I.EP),
                et = p().db443ae2,
                tt = p().a96f811e,
                nt = p().b069d89c,
                rt = p().fbd44e96,
                ot = p().e36bce64,
                at = p().c602f5b8,
                st = p().ia83756c,
                ct = p().cc217a04,
                it = p().c602f5b8,
                lt = p().g4f2b588,
                dt = p().i41612da,
                ut = p().cdae1af0,
                mt = p().ed8bb5a0,
                pt = p().fc640c20,
                gt = p().be2dc078,
                ht = p().iaefd4de,
                yt = p().e5e42640,
                Et = p().e85dfd66,
                Pt = p().ef4602ec,
                bt = p().a4db098c,
                ft = p().ef7e3916;
            class Ct extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getPaymentDescription = (e, t) => {
                            const { adsAccount: n } = this.props;
                            return n && n.timezone && n.country_code ? (e ? ut : t ? pt : mt) : t ? ht : gt;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, I.hq)(e)(I.Ur.promotionClick()), t(e);
                        }),
                        (this._handleEnrollCoupon = () => {
                            const { analytics: e, coupons: t, enrollCoupon: n, fundingInstrument: r } = this.props,
                                o = this._getCouponErrorMessage();
                            r && t?.eligible_coupon && !o && n(e);
                        }),
                        (this._getPromoteErrorMessage = () => {
                            const { promoteErrorCode: e, promoteStatus: t } = this.props;
                            if (!e) return t === Z.ZP.LOADED ? Et : null;
                            switch (e) {
                                case "MissingFundingInstrument":
                                case "InvalidPaymentMethod":
                                    return ft;
                                case "CampaignCreationFailed":
                                case "PromotionIneligible":
                                    return bt;
                                default:
                                    return Pt;
                            }
                        }),
                        (this._getCouponErrorMessage = () => {
                            const { enrollCouponErrorCode: e } = this.props;
                            return e ? yt : null;
                        }),
                        (this._getCouponVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const r = e?.existing_balance.length ? e.existing_balance.find((e) => e.currency_code === t) : null,
                                o = !!r?.total_amount && r.total_amount > 0,
                                a = !!e?.eligible_coupon,
                                s = !(!e?.pending_coupon?.credit_amount || !e?.pending_coupon.spend_amount),
                                c = s || "ConditionalCouponExperiment" === e?.eligible_coupon_experiment ? "conditionalCoupon" : o || a ? "standardCoupon" : void 0,
                                i = this._getCouponErrorMessage();
                            return { existingCouponBalance: r, hasCouponCredit: o, isEligibleForCoupon: a, showCouponTerms: (s || o || a) && !i, couponType: c, couponErrorMessage: i };
                        }),
                        (this._getCouponCalloutVariables = ({ coupons: e, currency: t, lang: n }) => {
                            const { enrollCouponErrorCode: r } = this.props,
                                o = "ConditionalCouponExperiment" === e?.eligible_coupon_experiment && e?.eligible_coupon?.credit_amount && e?.eligible_coupon?.spend_amount && !r,
                                a = e?.pending_coupon?.credit_amount && e?.pending_coupon.spend_amount,
                                s = o && e?.eligible_coupon?.credit_amount ? e.eligible_coupon.credit_amount : e?.pending_coupon?.credit_amount,
                                c = o && e?.eligible_coupon?.spend_amount ? e?.eligible_coupon?.spend_amount : e?.pending_coupon?.spend_amount,
                                i = o ? "eligibleCoupon" : "pendingCoupon";
                            return { showCouponCallout: o || a, couponCalloutText: (0, G.sV)({ calloutType: i, couponAmount: s || 0, spendAmount: c || 0, currency: t, lang: n }) };
                        });
                }
                componentDidMount() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fundingInstrument: n } = this.props;
                    t();
                    const r = !!n;
                    (0, I.hq)(e)(I.Ur.reviewPageLoad({ hasFundingInstrument: r })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: n, coupons: a, currency: s, dailyBudget: c, durationDays: i, fundingInstrument: l, gender: u, keywords: m, lang: g, match: h, objective: y, promoteStatus: E, selectedPaymentMethod: P, targetedLocations: b } = this.props,
                        f = e?.needs_vat,
                        Z = e?.isCanWriteBilling ?? !0,
                        _ = (0, G.n9)(C.gT[t]),
                        k = (0, G.WF)(y),
                        w = m.length ? (0, G.R9)({ locations: b.map(({ localized_name: e }) => e), formattedAge: _, gender: (0, G.nW)(u), keywords: m }) : (0, G.HB)({ locations: b.map(({ localized_name: e }) => e), formattedAge: _, gender: (0, G.nW)(u) }),
                        { couponErrorMessage: S, couponType: T, existingCouponBalance: x, hasCouponCredit: D, isEligibleForCoupon: A, showCouponTerms: q } = this._getCouponVariables({ coupons: a, currency: s, lang: g }),
                        L = (0, G.Wl)({ dailyBudgetNum: c, durationDays: i, lang: g, currency: s }),
                        M = D ? "" : (0, G.Sy)({ amount: c * i, lang: g, currency: s }),
                        { quickPromotePlatform: B, screenName: N, statusId: F } = h.params,
                        R = this._getPromoteErrorMessage(),
                        O = !!l,
                        { couponCalloutText: H, showCouponCallout: K } = this._getCouponCalloutVariables({ coupons: a, currency: s, lang: g });
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(z.O, { screenType: I.MN.Review }),
                        r.createElement(
                            o.Z,
                            { style: Zt.qpContainer, testID: W.Z.reviewScreen },
                            r.createElement(
                                j.ZP,
                                null,
                                R && r.createElement(o.Z, { style: Zt.gutter }, r.createElement(De.Z, { text: R, type: "danger" })),
                                S && r.createElement(o.Z, { style: Zt.gutter }, r.createElement(De.Z, { text: S, type: "warning" })),
                                r.createElement(U.Y, { title: et }),
                                r.createElement(Be.t, { description: k, descriptionTestID: W.Z.reviewObjectiveDescription, label: tt, withBottomBorder: !1 }),
                                r.createElement(Be.t, { description: w, descriptionTestID: W.Z.reviewTargetingDescription, label: nt, withBottomBorder: !1 }),
                                r.createElement(Ae.RD.Consumer, null, ({ direction: e }) => r.createElement(Be.t, { children: K && r.createElement(De.Z, { style: Zt.couponCallout, text: H }), description: L, descriptionDir: e, descriptionTestID: W.Z.reviewBudgetAndDurationDescription, label: rt, withBottomBorder: !1 })),
                            ),
                            (0, j.FR)((e) => r.createElement(qe.Z, { description: Z && "CREDIT_CARD" === l?.type && P && !f ? r.createElement(xe.XL, { id: P.id, imgSrcUrl: P.imgSrcUrl, lastFourDigits: P.lastFourDigits, paymentDescriptionStyle: Zt.paymentDescription, status: P.cardStatus }) : l && !f ? l.description : r.createElement(Le.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(O, A)), label: r.createElement(Le.ZP, { weight: "bold" }, ot), link: Z ? (!l || f ? (0, I.WS)(N, F, B, I.MN.Payment) : "CREDIT_CARD" === l?.type ? (0, I.WS)(N, F, B, I.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: W.Z.reviewPaymentPivot })),
                        ),
                        r.createElement(
                            o.Z,
                            { style: Zt.bottomElements },
                            r.createElement(
                                j.ZP,
                                null,
                                r.createElement(
                                    Be.t,
                                    { description: M, descriptionTestID: W.Z.reviewPromotionTotalDescription, label: at, withBottomBorder: !1 },
                                    D
                                        ? (function ({ balance: e, currency: t, lang: n, subtotal: a }) {
                                              const s = (0, G.Sy)({ amount: a, currency: t, lang: n }),
                                                  c = (0, G.Sy)({ amount: Math.min(a, e), currency: t, lang: n }),
                                                  i = (0, G.Sy)({ amount: Math.max(0, a - e), currency: t, lang: n }),
                                                  l = e > a ? (0, G.Sy)({ amount: e - a, currency: t, lang: n }) : null;
                                              return r.createElement(r.Fragment, null, r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Le.ZP, { color: "gray700", size: "subtext2" }, st), r.createElement(Le.ZP, { color: "gray700", size: "subtext2" }, s)), r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Le.ZP, { color: "blue500", size: "subtext2" }, ct), r.createElement(Le.ZP, { color: "blue500", size: "subtext2" }, "-", c)), r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Le.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, it), r.createElement(Le.ZP, { color: "gray700", size: "subtext2", testID: W.Z.reviewPromotionTotalDescription, weight: "bold" }, i)), l && r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Le.ZP, { color: "gray700", size: "subtext2" }, lt), r.createElement(Le.ZP, { color: "gray700", size: "subtext2" }, l)));
                                          })({ subtotal: c * i, balance: x?.total_amount || 0, currency: s, lang: g })
                                        : null,
                                ),
                                r.createElement(
                                    Me.Z,
                                    { align: "left", style: Zt.terms },
                                    (function (e, t, n, o) {
                                        return n ? r.createElement(p().I18NFormatMessage, { $i18n: "fc2dfb3f" }, r.createElement(Le.ZP, { link: (0, I.s0)(e) }, p().c1134966), r.createElement(Le.ZP, { link: (0, I.bx)(t, o) }, p().he45cc43)) : r.createElement(p().I18NFormatMessage, { $i18n: "fcf4b2a5" }, r.createElement(Le.ZP, { link: (0, I.s0)(e) }, p().c9439a82));
                                    })(n, g, q, T),
                                ),
                                r.createElement(d.ZP, { disabled: !l || f || v.LK.includes(E), onPress: this._handlePromote, size: "xLarge", testID: W.Z.reviewButton, type: "primaryFilled" }, dt),
                            ),
                        ),
                    );
                }
            }
            Ct.contextType = E.rC;
            const Zt = u.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, couponCallout: { marginTop: e.spaces.space12 }, childContainer: { paddingHorizontal: 0 }, terms: { textAlign: "start", color: e.colors.gray700, fontSize: e.fontSizes.subtext3, paddingBottom: e.spaces.space24 }, gutter: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" }, paymentDescription: { flexDirection: "row", marginStart: void 0, marginVertical: void 0, backgroundColor: void 0 } })),
                _t = Je(Ct);
            var kt = n(976145),
                wt = n(84679),
                St = n(933277),
                vt = n(161821),
                Tt = n(908478);
            const It = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                xt = (e, t) => e.quickPromote.targeting.targetedLocations,
                Dt = (e, t) => e.quickPromote.targeting.gender,
                At = (e, t) => e.quickPromote.targeting.ageBucket,
                qt = (e, t) => e.quickPromote.targeting.keywords,
                Lt = (e, t) => e.quickPromote.objective,
                Mt = (e, t) => T.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                Bt = (0, S.Z)()
                    .propsFromState(() => ({ lang: Ne.VT, isHousingAndUrbanDevelopmentLimitations: It, targetedLocations: xt, selectedGender: Dt, selectedAgeBucket: At, selectedKeywords: qt, objective: Lt, tweet: Mt }))
                    .propsFromActions(() => ({ setObjective: v.mS, setTargetedAgeBucket: v.l$ }))
                    .withAnalytics(I.EP),
                Nt = p().c672105a,
                Ft = p().e1efbeae,
                Rt = p().c6ff7c10,
                Ot = p().b555fb46,
                Ht = p().a8d0108e,
                Ut = p().j2c03e12,
                zt = ["18", "21", "25", "35", "50"],
                jt = [void 0, void 0, "24", "34", "49", "54"],
                Gt = (0, St.Z)((0, vt.Z)(C.gT), (e) => e.maxAge || "over"),
                Wt = jt.length;
            function Kt(e, t) {
                if (e && t) return C.E4[e]?.[t];
            }
            class Vt extends r.PureComponent {
                componentDidMount() {
                    const { analytics: e, setObjective: t, tweet: n } = this.props;
                    (0, I.hq)(e)(I.Ur.targetingPageLoad());
                    const r = n ? s.Z.getOriginalTweet(n) : n;
                    t(1 === r?.entities?.urls?.length ? C.CH.WebsiteClicks : C.CH.Engagements);
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: n, objective: a, selectedAgeBucket: s, selectedGender: c, selectedKeywords: i, targetedLocations: l } = this.props,
                        { featureSwitches: d } = this.context,
                        u = d.isTrue("responsive_web_qp_keyword_targeting_enabled") && a === C.CH.WebsiteClicks,
                        { quickPromotePlatform: m, screenName: p, statusId: g } = n.params,
                        h = (0, G.Un)({ numLocations: l.length }),
                        { maxAge: y, minAge: E } = C.gT[s],
                        P = Qt(s),
                        b = y || Ut;
                    return r.createElement(
                        o.Z,
                        { style: Xt.qpContainer, testID: W.Z.targetingScreen },
                        r.createElement(z.O, { screenType: I.MN.Targeting }),
                        r.createElement(j.ZP, null, r.createElement(U.Y, { callout: e ? r.createElement(Yt, { lang: t }) : void 0, style: Xt.titleContainer, title: Nt })),
                        (0, j.FR)((t) => {
                            return r.createElement(
                                o.Z,
                                { style: Xt.targetingContainer },
                                r.createElement(qe.Z, { description: (0, kt.Z)(l.map(({ localized_name: e }) => e)), label: r.createElement(Le.ZP, { weight: "bold" }, h), link: (0, I.WS)(p, g, m, I.MN.TargetingLocation), paddingHorizontal: t, testID: W.Z.targetingLocationPivot }),
                                r.createElement(
                                    j.ZP,
                                    null,
                                    r.createElement(
                                        Be.t,
                                        { label: Ft, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        r.createElement(wt.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: Ot,
                                            endThumbAccessibilityLabelValueText: `"${b}"`,
                                            endThumbLabel: b,
                                            max: Wt,
                                            min: 0,
                                            onChange:
                                                ((n = this.props),
                                                ([e, t], r) => {
                                                    const { analytics: o, selectedAgeBucket: a, setTargetedAgeBucket: s } = n,
                                                        c = Qt(a);
                                                    if (!(0, Tt.Z)(c, [e, t]))
                                                        if (r) {
                                                            const r = zt[e];
                                                            if (!r) return;
                                                            const a = t === Wt ? "over" : jt[t],
                                                                c = Kt(r, a);
                                                            if (c) (0, I.hq)(o)(I.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const e = Object.keys(C.E4[r])[0];
                                                                $t({ minAge: r, maxAge: e, props: n });
                                                            }
                                                        } else {
                                                            const r = t === Wt ? "over" : jt[t];
                                                            if (!r) return;
                                                            const a = zt[e],
                                                                c = Kt(a, r);
                                                            if (c) (0, I.hq)(o)(I.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const { minAge: e } = Gt[r].slice(-1)[0];
                                                                $t({ minAge: e, maxAge: r, props: n });
                                                            }
                                                        }
                                                }),
                                            startThumbAccessibilityLabel: Rt,
                                            startThumbAccessibilityLabelValueText: `"${E}"`,
                                            startThumbLabel: E,
                                            value: P,
                                        }),
                                    ),
                                ),
                                r.createElement(qe.Z, { description: (0, G.nW)(c), disabled: e, label: r.createElement(Le.ZP, { weight: "bold" }, Ht), link: (0, I.WS)(p, g, m, I.MN.TargetingGender), paddingHorizontal: t, testID: W.Z.targetingGenderPivot }),
                                u && r.createElement(qe.Z, { description: (0, kt.Z)(i), label: r.createElement(Le.ZP, { weight: "bold" }, "Keywords"), link: (0, I.WS)(p, g, m, I.MN.TargetingKeywords), paddingHorizontal: t, testID: W.Z.targetingKeywordsPivot }),
                            );
                            var n;
                        }),
                    );
                }
            }
            function Qt(e) {
                const { maxAge: t, minAge: n } = C.gT[e];
                return [zt.indexOf(n), t ? jt.indexOf(t) : Wt];
            }
            function $t({ maxAge: e, minAge: t, props: n }) {
                const { analytics: r, setTargetedAgeBucket: o } = n,
                    a = C.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, I.hq)(r)(I.Ur.setTargetingAgeBucket(a)), o(a);
            }
            function Yt({ lang: e }) {
                const t = (0, I.C0)(e),
                    n = r.useMemo(() => ({ termsLink: r.createElement(Le.ZP, { link: t }) }), [t]);
                return r.createElement(De.Z, { text: r.createElement(p().I18NFormatMessage, { $i18n: "f54ad505" }, r.cloneElement(n.termsLink, null, p().d4e01892)) });
            }
            Vt.contextType = E.rC;
            const Xt = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                Jt = Bt(Vt);
            var en = n(449479);
            const tn = (e, t) => e.quickPromote.targeting.gender,
                nn = (e, t) => e.quickPromote.account.campaigns,
                rn = (0, S.Z)()
                    .propsFromState(() => ({ selectedGender: tn, campaigns: nn }))
                    .propsFromActions(() => ({ setTargetedGender: v.A_ }))
                    .withAnalytics(I.EP),
                on = [C.Y0.Any, C.Y0.Female, C.Y0.Male].map((e) => ({ label: (0, G.nW)(e), value: e, testID: W.Z.getTargetingGender(e) })),
                an = p().df8d4fa0,
                sn = ({ children: e, onBack: t }) => {
                    const n = r.useMemo(() => r.createElement(l.Z, { onClick: t }), [t]);
                    return r.createElement(o.Z, { style: cn.qpContainer, testID: W.Z.targetingGenderScreen }, r.createElement(i.Z, { leftControl: n, style: cn.appBar, title: an }), e);
                },
                cn = u.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                ln = rn(({ analytics: e, selectedGender: t, setTargetedGender: n, ...a }) => {
                    const s = r.useCallback(() => {
                            const { history: e, location: t, match: n } = a,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: s, statusId: c } = n.params;
                            (0, I.Mi)(e, t)(s, c, r, o);
                        }, [a]),
                        c = r.useCallback(
                            (t, r) => {
                                n(r), (0, I.hq)(e)(I.Ur.setTargetingGender(r)), s();
                            },
                            [e, n, s],
                        );
                    return (0, z.d)(I.MN.TargetingGender), r.createElement(sn, { onBack: s }, r.createElement(j.ZP, null, r.createElement(o.Z, { style: cn.selectionGroupContainer }, r.createElement(en.Z, { name: "gender", onChange: c, options: on, value: t }))));
                }),
                dn = ln;
            var un = n(430996),
                mn = n(879113),
                pn = n(954110),
                gn = n(67369),
                hn = n(371344),
                yn = n(956272),
                En = n(370751),
                Pn = n(326399);
            const bn = (e, t) => {
                    const n = Cn(e, t);
                    return e.ads.typeahead.targetingLocation[n];
                },
                fn = (e, t) => {
                    const n = Cn(e, t);
                    return e.ads.typeahead.targetingLocation[n]?.fetchStatus;
                },
                Cn = (e, t) => e.quickPromote.targeting.locationQuery,
                Zn = (e, t) => e.quickPromote.targeting.targetedLocations,
                _n = (e, t) => e.quickPromote.account.campaigns,
                kn = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                wn = (0, S.Z)()
                    .propsFromState(() => ({ targetingLocationQuery: Cn, targetingLocations: bn, targetedLocations: Zn, fetchStatus: fn, userCountry: Ne.GG, campaigns: _n, isHousingAndUrbanDevelopmentLimitations: kn }))
                    .propsFromActions(() => ({ setTargetedLocations: v.hI, setAndFetchTargetingLocationQuery: v.sN, setTargetingLocationQuery: v.zu, createLocalApiErrorHandler: (0, w.zr)("QUICK_PROMOTE_TARGETING_LOCATION_SCREEN") }))
                    .withAnalytics(I.EP),
                Sn = p().cc642518,
                vn = p().i0e8c3c6,
                Tn = p().deaf5b16,
                In = p().f69ad048,
                xn = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
                Dn = Object.freeze({ [I.cU.CurrentCountryMatch]: 0, [I.cU.Match]: 1, [I.cU.NoMatch]: 2 });
            class An extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: null }),
                        (this._renderSearch = () => {
                            const { fetchStatus: e, targetingLocationQuery: t } = this.props;
                            return r.createElement(qn, { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t }, r.createElement(o.Z, { style: Ln.border }, r.createElement(j.ZP, null, r.createElement(Le.ZP, { style: Ln.headingText, weight: "heavy" }, vn))), r.createElement(mn.Z, { fetchStatus: e, render: this._renderSearchList, retryMessage: Tn }));
                        }),
                        (this._handleClear = () => {
                            const { setTargetingLocationQuery: e } = this.props;
                            e("");
                        }),
                        (this._renderSearchList = () => {
                            const { targetedLocations: e } = this.props,
                                t = (0, En.Z)(e.map(({ targeting_value: e }) => e)),
                                n = this._getTargetingLocationOptions();
                            return r.createElement(
                                o.Z,
                                { style: Ln.overflow },
                                r.createElement(
                                    j.ZP,
                                    null,
                                    n.map(({ localized_name: e, location_type: n, targeting_value: o }) => r.createElement(pn.Z, { checked: t.has(o), helpText: (0, G.sA)(n), key: o, label: e, name: o, onChange: this._handleSearchSelect, testID: W.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._getTargetingLocationOptions = () => {
                            const { isHousingAndUrbanDevelopmentLimitations: e, targetingLocationQuery: t, targetingLocations: n, userCountry: r } = this.props,
                                o = n?.result?.[0]?.locations ?? [],
                                a = (0, I.Jy)(r || "US"),
                                s = o.filter(({ country_code: n, localized_name: r, location_type: o }) => {
                                    if (e && "POSTAL_CODES" === o) return !1;
                                    return a(r, n, t) !== I.cU.NoMatch;
                                });
                            return (0, Pn.Z)(
                                s,
                                [
                                    ({ country_code: e, localized_name: n }) => {
                                        const r = a(n, e, t);
                                        return Dn[r];
                                    },
                                    ({ localized_name: e, location_type: t }) =>
                                        xn[t] ??
                                        (((e) => {
                                            (0, ye.ZP)(`Quick Promote: Unknown location type: ${e}. Expected one of {${Object.keys(xn).join(", ")}}`);
                                        })(t) ||
                                            Object.keys(xn).length),
                                    ({ localized_name: e }) => e,
                                ],
                                "asc",
                            );
                        }),
                        (this._handleSearchSelect = (e, t) => {
                            const { analytics: n, setTargetedLocations: r, setTargetingLocationQuery: o } = this.props;
                            if (t) {
                                this.setState({ errorMessage: null });
                                const t = this._getTargetingLocationOptions().find(({ targeting_value: t }) => t === e);
                                t ? ((0, I.hq)(n)(I.Ur.setTargetingLocation({ id: t.targeting_value, locationType: t.location_type, countryCode: t.country_code })), r([t]), this._handleGoBack()) : (0, ye.ZP)(`Quick Promote: could not find "${e}" in list of targeting options`);
                            } else (0, I.hq)(n)(I.Ur.targetingLocationInvalid()), this.setState({ errorMessage: In });
                            o("");
                        }),
                        (this._renderSelected = () => {
                            const { targetedLocations: e, targetingLocationQuery: t } = this.props,
                                { errorMessage: n } = this.state;
                            return r.createElement(
                                qn,
                                { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t },
                                r.createElement(o.Z, null, n && r.createElement(j.ZP, null, r.createElement(o.Z, { style: Ln.gutterVertical }, r.createElement(De.Z, { text: n, type: "danger" }))), r.createElement(o.Z, { style: Ln.border }, r.createElement(j.ZP, null, r.createElement(Le.ZP, { style: Ln.headingText, weight: "heavy" }, (0, G.Un)({ numLocations: e.length }))))),
                                r.createElement(
                                    j.ZP,
                                    null,
                                    e.map(({ localized_name: e, location_type: t, targeting_value: n }) => r.createElement(pn.Z, { checked: !0, helpText: (0, G.sA)(t), key: n, label: e, name: n, onChange: this._handleSearchSelect, testID: W.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._handleGoBack = () => {
                            const { history: e, location: t, match: n } = this.props,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: a, statusId: s } = n.params;
                            (0, I.Mi)(e, t)(a, s, r, o);
                        }),
                        (this._handleTargetingLocationChange = (e) => {
                            const t = e.target.value,
                                { analytics: n, createLocalApiErrorHandler: r, setAndFetchTargetingLocationQuery: o } = this.props;
                            (0, I.hq)(n)(I.Ur.targetingLocationSearch(t)), o(t).catch(r());
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, I.hq)(e)(I.Ur.targetingLocationPageLoad());
                }
                componentWillUnmount() {
                    this._handleClear();
                }
                render() {
                    const { targetingLocationQuery: e } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(z.O, { screenType: I.MN.TargetingLocation }), e ? this._renderSearch() : this._renderSelected());
                }
            }
            An.contextType = E.rC;
            const qn = ({ children: e, onBack: t, onChange: n, onClear: a, targetingLocationQuery: s }) => {
                    const c = (0, gn.Zz)();
                    return r.createElement(o.Z, { style: Ln.qpContainer, testID: W.Z.targetingLocationScreen }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { onClick: t }), middleControl: r.createElement(o.Z, { style: c ? Ln.mobileInputContainer : Ln.inputContainer }, r.createElement(hn.Z, { Icon: yn.default, autoFocus: !0, name: "locationTargetingInput", onChange: n, onClear: a, placeholder: Sn, style: Ln.input, testID: W.Z.targetingLocationSearch, value: s, withClearButton: !0 })) }), e);
                },
                Ln = u.default.create((e) => ({ qpContainer: { flex: 1 }, inputContainer: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space64 }, mobileInputContainer: { paddingEnd: e.spaces.space16 }, input: { marginVertical: e.spaces.space12 }, border: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, headingText: { fontSize: e.fontSizes.headline1, paddingVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, overflow: { flexGrow: 1, flexShrink: 1, flexBasis: "200px", overflowY: "auto" } })),
                Mn = wn(An),
                Bn = p().d948b978,
                Nn = p().cfcdb4a2,
                Fn = p().h1fcb36c,
                Rn = p().c1df579e;
            class On extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isLoaded: !1 }),
                        (this._getRetweetOrTweet = () => {
                            const { tweet: e } = this.props;
                            return e ? s.Z.getOriginalTweet(e) : e;
                        }),
                        (this._render = () => {
                            const { history: e } = this.props,
                                t = this._getRetweetOrTweet();
                            return !t || (t && t.user.id_str !== this.context.viewerUserId) ? r.createElement(y.Z, { history: e, onBackClick: this._handleGoBack, title: Fn }, r.createElement(c.Z, { onRetry: null, title: Bn })) : this._renderPage();
                        }),
                        (this._renderHeader = g.Z),
                        (this._renderPage = () => {
                            const { match: e, promoteErrorCode: t, promoteFetchStatus: n } = this.props,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: a, statusId: s } = e.params,
                                c = (e) => (0, I.WS)(a, s, r, e);
                            switch (o) {
                                case "intro":
                                case "done":
                                    return this._renderSplashPage();
                                case "objective": {
                                    const e = c(I.MN.Targeting);
                                    return this._renderProgressPage(I.D_.Objective, e);
                                }
                                case "targeting": {
                                    const e = c(I.MN.BudgetSelect);
                                    return this._renderProgressPage(I.D_.Targeting, e);
                                }
                                case "budget_select": {
                                    const e = [Z.ZP.LOADING, Z.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? I.D_.Finish : I.D_.BudgetSelect);
                                }
                                case "review": {
                                    const e = [Z.ZP.LOADING, Z.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? I.D_.Finish : I.D_.Review);
                                }
                                case "payment":
                                    return this._renderProgressPage(I.D_.BudgetSelect);
                                case "targeting_location":
                                case "targeting_gender":
                                case "targeting_keywords":
                                    return this._renderPopupPage();
                                case "payment_select":
                                    return this._renderNavigationPage();
                                default:
                                    throw (0, b.q8)(o);
                            }
                        }),
                        (this._renderProgressPage = (e, t) => {
                            const { history: n, match: a } = this.props,
                                { quickPromoteScreenName: s } = a.params;
                            return r.createElement(y.Z, { documentTitle: Fn, history: n, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, backButtonType: "targeting" === s ? "close" : "back", onClick: this._handleGoBack, testID: W.Z.backButton }) }), r.createElement(o.Z, { style: Hn.noScrollView }, this._renderRoutes(), t && r.createElement(j.ZP, null, r.createElement(d.ZP, { link: t, size: "xLarge", style: Hn.nextButton, testID: W.Z.nextButton, type: "primaryFilled" }, Rn))));
                        }),
                        (this._renderNavigationPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: Fn, history: e, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, onClick: this._handleGoBack, testID: W.Z.backButton }) }), r.createElement(o.Z, { style: Hn.noScrollView }, this._renderRoutes()));
                        }),
                        (this._renderPopupPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: Fn, history: e, renderHeader: this._renderHeader }, this._renderRoutes());
                        }),
                        (this._renderSplashPage = () => this._renderRoutes()),
                        (this._renderRoutes = () => {
                            const { match: e } = this.props,
                                { quickPromoteScreenName: t } = e.params;
                            switch (t) {
                                case "intro":
                                    return r.createElement(a.Route, { component: F.Z });
                                case "objective":
                                    return r.createElement(a.Route, { component: ce });
                                case "targeting":
                                    return r.createElement(a.Route, { component: Jt });
                                case "targeting_location":
                                    return r.createElement(a.Route, { component: Mn });
                                case "targeting_gender":
                                    return r.createElement(a.Route, { component: dn });
                                case "targeting_keywords":
                                    return r.createElement(a.Route, { component: un.Z });
                                case "budget_select":
                                    return r.createElement(a.Route, { component: k.ZP });
                                case "review":
                                    return r.createElement(a.Route, { component: _t });
                                case "payment":
                                    return r.createElement(a.Route, { component: Ie });
                                case "payment_select":
                                    return r.createElement(a.Route, { component: xe.ZP });
                                case "done":
                                    return r.createElement(a.Route, { component: N.ZP });
                                default:
                                    throw (0, b.q8)(t);
                            }
                        }),
                        (this._handleGoBack = () => {
                            const { analytics: e, history: t, location: n, match: r } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: a, screenName: s, statusId: c } = r.params;
                            (0, I.hq)(e)(I.Ur.back(a)), (0, I.Mi)(t, n)(s, c, o, a);
                        }),
                        (this._handleRequestRetry = () => {
                            const { analytics: e, match: t } = this.props,
                                { quickPromoteScreenName: n } = t.params;
                            (0, I.hq)(e)(I.Ur.reload(n)), window.location.reload();
                        });
                }
                componentDidMount() {
                    const { analytics: e, createLocalApiErrorHandler: t, fetchAdsAccountDataIfNeeded: n, fetchAvailableBudgetsIfNeeded: r, fetchCouponsIfNeeded: o, fetchCurrentTargetingLocationIfNeeded: a, fetchQuickPromoteEligibilityIfNeeded: c, fetchTweetIfNeeded: i, match: l, promoteFetchStatus: d, setObjective: u, setPromoteFetchStatus: m, statusId: p, tweet: g } = this.props,
                        { quickPromoteScreenName: h } = l.params,
                        y = this.context.viewerUserId;
                    if (!y) return Promise.resolve();
                    if ((Z.ZP.LOADED === d && h !== I.MN.Done && m(Z.ZP.NONE), this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled"))) {
                        const e = g ? s.Z.getOriginalTweet(g) : g;
                        u(1 === e?.entities?.urls?.length ? C.CH.WebsiteClicks : C.CH.Engagements);
                    }
                    return (0, f.zk)(
                        "initial-load",
                        Promise.all([i(p), a(), n(y, e), o(e), c({ statusId: p })])
                            .then(() => r())
                            .then(() => {
                                const { handleFirstLoad: e } = this.props;
                                return e();
                            }),
                    )
                        .catch((n) => {
                            t(P.c)(n), (0, I.hq)(e)(I.Ur.pageLoadFail(n.message));
                        })
                        .finally(() => {
                            this.setState({ isLoaded: !0 });
                        });
                }
                render() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fetchStatus: n, history: o, match: a } = this.props,
                        s = [I.MN.Done];
                    if (!this.context.viewerUserId) return this._render();
                    const c = (0, Z.h1)(n, this.state.isLoaded ? Z.ZP.LOADED : Z.ZP.LOADING);
                    if (c === Z.ZP.NONE) throw new Error("Quick Promote: should never have none state");
                    return c !== Z.ZP.LOADED ? r.createElement(y.Z, { documentTitle: Fn, history: o, renderHeader: this._renderHeader }, r.createElement(R.s, null), r.createElement(me, null), r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: Nn })) : (t(), r.createElement(_.Z, { analytics: e, clearPersistedRedirectBackState: t, history: o, qpRouteParams: a.params, screensAllowedToNavigate: s }, r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: Nn })));
                }
            }
            On.contextType = E.rC;
            const Hn = u.default.create((e) => ({ noScrollView: { overflowX: "hidden", flex: 1 }, nextButton: { marginBottom: e.spaces.space48, marginTop: e.spaces.space12 } })),
                Un = B(On);
        },
        653970: (e, t, n) => {
            e.exports = n.p + "engagements_icon.14baf75a.png";
        },
        6885: (e, t, n) => {
            e.exports = n.p + "website_clicks_icon.82f641fa.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-a665aad7.cf6c617a.js.map
