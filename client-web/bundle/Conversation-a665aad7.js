"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-a665aad7"],
    {
        896449: (e, t, n) => {
            n.d(t, { XL: () => R, ZP: () => U });
            n(136728);
            var r = n(202784),
                o = n(325686),
                a = n(822399),
                s = n(525754),
                c = n(530732),
                i = n(731708),
                l = n(811176),
                d = n(992942),
                m = n(868634),
                u = n(247056),
                p = n(138099),
                g = n(154003),
                h = n(58881),
                y = n(392237),
                E = n(111677),
                P = n.n(E),
                b = n(379327),
                f = n(250195),
                C = n(401388),
                w = n(347720),
                Z = n(203421),
                k = n(200904),
                _ = n(192731),
                v = n(202205),
                S = n(668214),
                x = n(852657);
            const D = (e) => e.quickPromote.paymentMethods,
                I = (0, S.Z)()
                    .propsFromState(() => ({ paymentMethods: D, selectedPaymentMethod: x.DY }))
                    .propsFromActions(() => ({ setSelectedPaymentMethod: x.$L, deletePaymentMethod: x.gp }))
                    .withAnalytics(v.EP),
                T = P().de43b660,
                q = P().hb4773a0,
                A = P().aa2a3dd4,
                M = P().b1c5b63c,
                B = P().affb5878,
                N = P().cfd2f35e,
                F = (e, t, n, o) => e.map((e) => ({ label: r.createElement(R, { deletePaymentMethodHandler: n, id: e.id, imgSrcUrl: e.imgSrcUrl, isSelected: t === e.id, lastFourDigits: e.lastFourDigits, status: e.cardStatus }), value: e.id, containerStyle: [O.paymentMethodRadioContainer, O.bottomBorder, o] })),
                R = (e) => {
                    const t = e.deletePaymentMethodHandler
                        ? (t) =>
                              r.createElement(l.Z, {
                                  items: [
                                      {
                                          Icon: f.default,
                                          text: A,
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
                    return r.createElement(o.Z, { style: O.paymentMethod }, r.createElement(o.Z, { style: [O.descriptionItemContainer, e.paymentDescriptionStyle] }, e.imgSrcUrl ? r.createElement(o.Z, { style: O.cardImageContainer }, r.createElement(d.Z, { source: e.imgSrcUrl, style: O.cardImage })) : r.createElement(i.ZP, { size: "body" }, "Card"), r.createElement(o.Z, { style: O.descriptionContainer }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, `${M} ${e.lastFourDigits}`)), ("Expired" === e.status || "Invalid" === e.status) && r.createElement(o.Z, { style: O.statusBadgeContainer }, r.createElement(m.ZP, { style: O.expiredBadge }, r.createElement(i.ZP, { size: "subtext3", style: O.expiredBadge, weight: "bold" }, e.status)))), e.deletePaymentMethodHandler && r.createElement(u.Z, { renderActionMenu: t }));
                },
                H = (e) => {
                    const { cancelDeletePaymentMethodHandler: t, confirmDeletePaymentMethodHandler: n } = e;
                    return r.createElement(p.Z, { onMaskClick: t, type: "bottom", withMask: !0 }, r.createElement(o.Z, { style: O.deleteCardConfirmContainer }, r.createElement(g.ZP, { icon: r.createElement(f.default, null), onPress: n, style: O.modalButton, type: "destructiveOutlined" }, B), r.createElement(g.ZP, { onPress: t, style: O.modalButton, type: "primaryOutlined" }, N)));
                },
                L = h.Z.generate({ backgroundColor: y.default.theme.colors.transparent, color: y.default.theme.colors.primary, insetFocusRing: !0 }),
                O = y.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, paymentMethod: { flexDirection: "row", justifyContent: "space-between" }, descriptionItemContainer: { backgroundColor: e.colors.cellBackground, paddingVertical: e.spaces.space8, marginStart: e.spaces.space12 }, statusBadgeContainer: { margin: e.spaces.space2 }, descriptionContainer: { margin: e.spaces.space2 }, paymentMethodRadioContainer: { flexDirection: "row-reverse", paddingVertical: e.spaces.space8, marginStart: `-${e.spaces.space24}` }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, deleteCardConfirmContainer: { justifyContent: "flex-end", padding: e.spaces.space8 }, titleContainer: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space20, paddingStart: e.spaces.space20 }, addPaymentMethodContainer: { backgroundColor: e.colors.cellBackground }, addPaymentMethodInteractiveContainer: { flexDirection: "row", minHeight: e.spaces.space48, paddingVertical: e.spaces.space16 }, plusIcon: { color: e.colors.primary, marginEnd: e.spaces.space16 }, expiredBadge: { backgroundColor: e.colors.red50, color: e.colors.red900 }, cardImageContainer: { height: "20px", flexDirection: "row", width: "32px", margin: e.spaces.space2 }, cardImage: { resizeMode: "contain", flex: 1 }, modalButton: { margin: e.spaces.space8 } })),
                U = I((e) => {
                    const {
                        analytics: t,
                        deletePaymentMethod: n,
                        history: l,
                        match: {
                            params: { quickPromotePlatform: d, screenName: m, statusId: u },
                        },
                        paymentMethods: p,
                        selectedPaymentMethod: g,
                        setSelectedPaymentMethod: h,
                    } = e;
                    (0, Z.d)(v.MN.PaymentSelect);
                    const y = g ? g.id : "",
                        [E, P] = r.useState(!1),
                        [f, S] = r.useState(null),
                        x = (e, n) => {
                            if ((0, C.Z)(p)) return;
                            const r = p.find((e) => e.id === n) || null;
                            (r && "Invalid" === r.cardStatus) ||
                                (P(!0),
                                h(n)
                                    .catch((e) => {
                                        (0, v.hq)(t)(v.Ur.paymentMethodChanged(e));
                                    })
                                    .finally(() => {
                                        P(!1);
                                    }),
                                (0, v.hq)(t)(v.Ur.paymentMethodChanged()));
                        };
                    return (
                        r.useEffect(() => {
                            (0, v.hq)(t)(v.Ur.paymentSelectPageLoad());
                        }, [t]),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                o.Z,
                                { style: O.qpContainer, testID: _.Z.paymentMethodSelect },
                                E ? r.createElement(a.Z, { indeterminate: !0 }) : null,
                                r.createElement(k.ZP, null, r.createElement(w.Y, { title: T })),
                                (0, k.$_)((e) => r.createElement(s.Z, { disabled: E, name: T, onChange: x, options: F(p, y, (e) => S(e), e), value: y })),
                                (0, k.$_)((e) => r.createElement(o.Z, { style: O.addPaymentMethodContainer }, r.createElement(c.Z, { disabled: E, interactive: E, interactiveStyles: L, onPress: () => l.push(`${(0, v.WS)(m, u, d, v.MN.Payment)}?isAddingPayment=true`), style: [O.addPaymentMethodInteractiveContainer, e] }, r.createElement(b.default, { style: O.plusIcon }), r.createElement(i.ZP, { align: "left", color: "primary" }, q)))),
                                f &&
                                    r.createElement(H, {
                                        cancelDeletePaymentMethodHandler: () => S(null),
                                        confirmDeletePaymentMethodHandler: () => {
                                            f &&
                                                (S(null),
                                                P(!0),
                                                n(f)
                                                    .catch((e) => {
                                                        (0, v.hq)(t)(v.Ur.paymentMethodDeleted(e));
                                                    })
                                                    .finally(() => {
                                                        P(!1);
                                                    }),
                                                (0, v.hq)(t)(v.Ur.paymentMethodDeleted()));
                                        },
                                    }),
                            ),
                        )
                    );
                });
        },
        200904: (e, t, n) => {
            n.d(t, { $_: () => l, FR: () => i, ZP: () => m });
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
                m = ({ children: e }) => {
                    const t = (0, a.yu)() ? d.mobileContainer : d.webContainer;
                    return r.createElement(o.Z, { style: t }, e);
                };
        },
        430996: (e, t, n) => {
            n.d(t, { Y: () => D, Z: () => T });
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
            var m = n(325686),
                u = n(370006),
                p = n(786998),
                g = n(392237),
                h = n(192731);
            function y({ children: e, onBack: t }) {
                const n = r.useMemo(() => r.createElement(u.Z, { onClick: t }), [t]);
                return r.createElement(m.Z, { style: E.qpContainer, testID: h.Z.targetingKeywordsScreen }, r.createElement(p.Z, { leftControl: n, style: E.appBar, title: "Select some keywords" }), e);
            }
            const E = g.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var P = n(855488),
                b = n(111677),
                f = n.n(b),
                C = n(187669),
                w = n(203421),
                Z = n(599190),
                k = n(973014);
            function _({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: o }) {
                const a = r.useCallback(() => o(e.filter((e, n) => n !== t)), [e, t, o]),
                    s = r.useMemo(() => ({ disabled: !1, mode: Z.D.Remove, onSecondaryClick: a }), [a]);
                return r.createElement(k.Z, { secondaryAction: s, style: v.withMarginEnd, text: n });
            }
            const v = g.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                S = f().fe26420a;
            function x({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: o }) {
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
                    (0, w.d)(a.MN.TargetingKeywords),
                    r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(m.Z, { style: I.selectionGroupContainer }, r.createElement(P.Z, { editable: t.length < 200, label: S, name: "keywords", onChange: i, onKeyDown: l, style: I.noSpacing, testID: h.Z.targetingKeywordsInput, value: s })),
                        r.createElement(
                            m.Z,
                            { style: I.row },
                            t.map((e, n) => r.createElement(_, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: o })),
                        ),
                    )
                );
            }
            const D = d(x),
                I = g.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const T = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: s, location: c, match: i, setTargetedContextualKeywords: l } = e,
                    d = r.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: r } = i.params;
                        (0, a.Mi)(s, c)(n, r, e, t);
                    }, [s, c, i.params]),
                    m = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return r.createElement(y, { onBack: d }, r.createElement(o.ZP, null, r.createElement(x, m)));
            });
        },
        892664: (e, t, n) => {
            n.r(t), n.d(t, { QuickPromoteScreen: () => En, default: () => bn });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(107267),
                s = n(782261),
                c = n(420740),
                i = n(786998),
                l = n(370006),
                d = n(154003),
                m = n(392237),
                u = n(111677),
                p = n.n(u),
                g = n(143778),
                h = n(290402),
                y = n(980407),
                E = n(443781),
                P = n(702001),
                b = n(427266),
                f = n(441408),
                C = n(315032),
                w = n(312771),
                Z = n(364753),
                k = n(649038),
                _ = n(71620),
                v = n(668214),
                S = n(852657),
                x = n(836255),
                D = n(202205);
            const I = (e, t) => t.match.params.statusId,
                T = (e, t) => x.Z.selectHydrated(e, I(0, t)),
                q = (e, t) => (0, w.h1)(x.Z.selectFetchStatus(e, I(0, t)), e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus, e.quickPromote.couponsFetchStatus),
                A = (e, t) => e.quickPromote.promoteStatus,
                M = (e, t) => e.quickPromote.promoteErrorCode,
                B = (e, t) => e.quickPromote.account.campaigns,
                N = (0, v.Z)()
                    .propsFromState(() => ({ statusId: I, fetchStatus: q, tweet: T, campaigns: B, promoteFetchStatus: A, promoteErrorCode: M }))
                    .propsFromActions((e) => ({
                        clearPersistedRedirectBackState: () => (0, S.oE)(),
                        createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_SCREEN"),
                        fetchTweetIfNeeded: x.Z.fetchOneIfNeeded,
                        fetchCurrentTargetingLocationIfNeeded: S.yW,
                        fetchAvailableBudgetsIfNeeded: S.WS,
                        fetchAdsAccountDataIfNeeded: S.Ek,
                        fetchQuickPromoteEligibilityIfNeeded: S.E6,
                        fetchCouponsIfNeeded: S.fN,
                        handleFirstLoad: () =>
                            ((e) => {
                                const { analytics: t, history: n, location: r, match: o } = e,
                                    { quickPromotePlatform: a, quickPromoteScreenName: s, screenName: c, statusId: i } = o.params,
                                    l = { pa_signup_complete: r.query.pa_signup_complete || "" };
                                return (0, S.Jk)(c, i, a, s, n, l, t);
                            })(e),
                        setObjective: S.mS,
                        setPromoteFetchStatus: S.Ik,
                    }))
                    .withAnalytics(D.EP);
            var F = n(581505),
                R = n(661345),
                H = n(107456),
                L = n(782947),
                O = n(40610),
                U = n(347720),
                z = n(203421),
                j = n(200904),
                W = n(752500),
                K = n(192731);
            const G = (e, t) => e.quickPromote.objective,
                $ = (e, t) => x.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                V = (0, v.Z)()
                    .propsFromState(() => ({ selectedObjective: G, tweet: $ }))
                    .propsFromActions(() => ({ setObjective: S.mS }))
                    .withAnalytics(D.EP);
            var Y = n(772750),
                Q = n(835152);
            const X = p().fcc839b6,
                J = (p().b679a538, p().cb19a2f0),
                ee = p().a2d37164,
                te = p().cefad302,
                ne = p().b614fad0,
                re = m.default.create((e) => ({ titleContainer: { paddingBottom: e.spaces.space28 }, qpContainer: { flex: 1, overflowY: "auto" } })),
                [oe, ae] = [
                    { label: (0, W.WF)(C.CH.Engagements), value: C.CH.Engagements, description: J, illustration: r.createElement(Y.i, null), testID: K.Z.getObjective(C.CH.Engagements) },
                    { label: (0, W.WF)(C.CH.WebsiteClicks), value: C.CH.WebsiteClicks, description: ee, illustration: r.createElement(Q.T, null), testID: K.Z.getObjective(C.CH.WebsiteClicks) },
                ];
            const se = V((e) => {
                    const { analytics: t, selectedObjective: n, setObjective: a, tweet: c } = e,
                        i = c ? s.Z.getOriginalTweet(c) : c,
                        l = null != i?.entities?.media?.length && i?.entities?.media?.length > 0,
                        d = 1 === i?.entities?.urls?.length;
                    r.useEffect(() => {
                        (0, D.hq)(t)(D.Ur.goalSelectionPageLoad());
                    }, []);
                    const m = r.useMemo(
                            () =>
                                (function ({ selectedObjective: e, tweetContainsLinks: t, tweetHasMedia: n }) {
                                    const o = [oe, { ...ae, disabled: !t, disabledInlineCallout: t ? void 0 : r.createElement(O.Z.Danger, { headline: ne, text: te, withIcon: !0 }) }];
                                    return o;
                                })({ tweetHasMedia: l, tweetContainsLinks: d, selectedObjective: n }),
                            [l, d, n],
                        ),
                        u = r.useCallback(
                            (e, n) => {
                                a(n), (0, D.hq)(t)(D.Ur.setPromoteGoal(n));
                            },
                            [t, a],
                        );
                    return r.createElement(o.Z, { style: re.qpContainer, testID: K.Z.objectiveScreen }, r.createElement(z.O, { screenType: D.MN.Objective }), r.createElement(j.ZP, null, r.createElement(U.Y, { style: re.titleContainer, title: X }), r.createElement(L.Z, { name: "objective-picker", onChange: u, options: m, value: n })));
                }),
                ce = se;
            var ie = n(653970);
            const le = n.p + "followers_icon.80e5851a.png";
            var de = n(6885);
            function me(e) {
                new Image().src = e;
            }
            function ue() {
                return me(ie), me(le), me(de), r.createElement(r.Fragment, null);
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
                Ce = (e, t) => x.Z.selectHydrated(e, fe(0, t)),
                we = (e, t) => x.Z.selectFetchStatus(e, fe(0, t)),
                Ze = (e, t) => e.quickPromote.account.adsAccount,
                ke = (e, t) => e.quickPromote.account.selectedFundingInstrument,
                _e = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: we, tweet: Ce, adsAccount: Ze, fundingInstrument: ke, selectedPaymentMethod: S.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_PAYMENT_SCREEN"), fetchTweetIfNeeded: x.Z.fetchOneIfNeeded, scribeAction: Pe.n, savePlatformRedirectBackState: () => (0, be.oE)(e.match.params.quickPromotePlatform), fetchAdsAccountDataIfNeeded: be.Ek }))
                    .withAnalytics(D.EP);
            class ve extends r.PureComponent {
                componentDidMount() {
                    const { adsAccount: e, analytics: t, fundingInstrument: n, match: r, savePlatformRedirectBackState: o } = this.props,
                        { quickPromotePlatform: a, statusId: s } = r.params;
                    o();
                    const c = Se(this.props),
                        i = (0, D.lg)(a, e, s, n, c, this.context.featureSwitches);
                    c && (0, D.hq)(t)(D.Ur.paymentPageLoadAddingCard()), (0, D.hq)(t)(D.Ur.paymentPageLoad(i.url)), i.isSameHost || window.location.assign(i.url);
                }
                render() {
                    const { adsAccount: e, fundingInstrument: t, match: n } = this.props,
                        o = Se(this.props),
                        { quickPromotePlatform: a, statusId: c } = n.params,
                        i = (0, D.lg)(a, e, c, t, o, this.context.featureSwitches);
                    return i.isSameHost
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(z.O, { screenType: D.MN.Payment }),
                              r.createElement(he.Z, {
                                  dangerouslyDisableSandbox: !0,
                                  onMessage:
                                      ((l = this.props),
                                      (d = this.context),
                                      (e) => {
                                          const { analytics: t, tweet: n } = l,
                                              r = Se(l);
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
                                                  ge()(!!d.viewerUserId, "viewerUserId must be defined"), n(d.viewerUserId, t, !0).catch(e()), o.push(`/${c}/status/${i}/${s}/${r ? D.MN.PaymentSelect : D.MN.BudgetSelect}`);
                                              }
                                      }),
                                  reportError: ye.ZP,
                                  src: i.url,
                                  style: xe.iframe,
                                  title: "Payment Form",
                              }),
                          )
                        : null;
                    var l, d;
                }
            }
            function Se(e) {
                const t = (function (e, t) {
                    const {
                        location: { search: n },
                    } = e;
                    return new URLSearchParams(n).get(t);
                })(e, "isAddingPayment");
                return !!t && "true" === t;
            }
            ve.contextType = E.rC;
            const xe = m.default.create((e) => ({ iframe: { flexGrow: 1, paddingTop: 0 } })),
                De = _e(ve);
            var Ie = n(896449),
                Te = n(834324),
                qe = n(224162),
                Ae = n(779610),
                Me = n(731708),
                Be = n(696591),
                Ne = n(847016),
                Fe = n(390387);
            const Re = (e) => e.quickPromote.objective,
                He = (e, t) => e.quickPromote.targeting.targetedLocations,
                Le = (e, t) => e.quickPromote.targeting.ageBucket,
                Oe = (e, t) => e.quickPromote.targeting.gender,
                Ue = (e, t) => e.quickPromote.targeting.keywords,
                ze = (e, t) => e.quickPromote.budget.dailyBudget,
                je = (e, t) => e.quickPromote.budget.durationDays,
                We = (e) => e.quickPromote.budget.currency || "USD",
                Ke = (e) => e.quickPromote.account.selectedFundingInstrument,
                Ge = (e) => e.quickPromote.account.adsAccount,
                $e = (e) => e.quickPromote.promoteStatus,
                Ve = (e) => e.quickPromote.promoteErrorCode,
                Ye = (e) => e.quickPromote.coupons,
                Qe = (e) => e.quickPromote.enrollCouponErrorCode,
                Xe =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: r, screenName: o, statusId: a } = t.params,
                            s = (0, D.WS)(o, a, r, D.MN.Done);
                        return (0, S.kb)({ history: e, statusId: a, nextPath: s, analytics: n });
                    },
                Je = (0, v.Z)()
                    .propsFromState(() => ({ objective: Re, targetedLocations: He, ageBucket: Le, gender: Oe, keywords: Ue, dailyBudget: ze, durationDays: je, lang: Fe.VT, country: S.QE, currency: We, fundingInstrument: Ke, adsAccount: Ge, promoteStatus: $e, promoteErrorCode: Ve, coupons: Ye, enrollCouponErrorCode: Qe, selectedPaymentMethod: S.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, S.oE)(), createPromotion: Xe(e), enrollCoupon: S.br }))
                    .withAnalytics(D.EP),
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
                mt = p().cdae1af0,
                ut = p().ed8bb5a0,
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
                            return n && n.timezone && n.country_code ? (e ? mt : t ? pt : ut) : t ? ht : gt;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, D.hq)(e)(D.Ur.promotionClick()), t(e);
                        }),
                        (this._handleEnrollCoupon = () => {
                            const { analytics: e, coupons: t, enrollCoupon: n, fundingInstrument: r } = this.props,
                                o = this._getCouponErrorMessage();
                            r && t?.eligible_coupon && !o && n(e);
                        }),
                        (this._getPromoteErrorMessage = () => {
                            const { promoteErrorCode: e, promoteStatus: t } = this.props;
                            if (!e) return t === w.ZP.LOADED ? Et : null;
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
                            return { showCouponCallout: o || a, couponCalloutText: (0, W.sV)({ calloutType: i, couponAmount: s || 0, spendAmount: c || 0, currency: t, lang: n }) };
                        });
                }
                componentDidMount() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fundingInstrument: n } = this.props;
                    t();
                    const r = !!n;
                    (0, D.hq)(e)(D.Ur.reviewPageLoad({ hasFundingInstrument: r })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: n, coupons: a, currency: s, dailyBudget: c, durationDays: i, fundingInstrument: l, gender: m, keywords: u, lang: g, match: h, objective: y, promoteStatus: E, selectedPaymentMethod: P, targetedLocations: b } = this.props,
                        f = e?.needs_vat,
                        w = e?.isCanWriteBilling ?? !0,
                        Z = (0, W.n9)(C.gT[t]),
                        k = (0, W.WF)(y),
                        _ = u.length ? (0, W.R9)({ locations: b.map(({ localized_name: e }) => e), formattedAge: Z, gender: (0, W.nW)(m), keywords: u }) : (0, W.HB)({ locations: b.map(({ localized_name: e }) => e), formattedAge: Z, gender: (0, W.nW)(m) }),
                        { couponErrorMessage: v, couponType: x, existingCouponBalance: I, hasCouponCredit: T, isEligibleForCoupon: q, showCouponTerms: A } = this._getCouponVariables({ coupons: a, currency: s, lang: g }),
                        M = (0, W.Wl)({ dailyBudgetNum: c, durationDays: i, lang: g, currency: s }),
                        B = T ? "" : (0, W.Sy)({ amount: c * i, lang: g, currency: s }),
                        { quickPromotePlatform: N, screenName: F, statusId: R } = h.params,
                        H = this._getPromoteErrorMessage(),
                        L = !!l,
                        { couponCalloutText: O, showCouponCallout: G } = this._getCouponCalloutVariables({ coupons: a, currency: s, lang: g });
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(z.O, { screenType: D.MN.Review }),
                        r.createElement(
                            o.Z,
                            { style: wt.qpContainer, testID: K.Z.reviewScreen },
                            r.createElement(
                                j.ZP,
                                null,
                                H && r.createElement(o.Z, { style: wt.gutter }, r.createElement(Te.Z, { text: H, type: "danger" })),
                                v && r.createElement(o.Z, { style: wt.gutter }, r.createElement(Te.Z, { text: v, type: "warning" })),
                                r.createElement(U.Y, { title: et }),
                                r.createElement(Ne.t, { description: k, descriptionTestID: K.Z.reviewObjectiveDescription, label: tt, withBottomBorder: !1 }),
                                r.createElement(Ne.t, { description: _, descriptionTestID: K.Z.reviewTargetingDescription, label: nt, withBottomBorder: !1 }),
                                r.createElement(qe.RD.Consumer, null, ({ direction: e }) => r.createElement(Ne.t, { children: G && r.createElement(Te.Z, { style: wt.couponCallout, text: O }), description: M, descriptionDir: e, descriptionTestID: K.Z.reviewBudgetAndDurationDescription, label: rt, withBottomBorder: !1 })),
                            ),
                            (0, j.FR)((e) => r.createElement(Ae.Z, { description: w && "CREDIT_CARD" === l?.type && P && !f ? r.createElement(Ie.XL, { id: P.id, imgSrcUrl: P.imgSrcUrl, lastFourDigits: P.lastFourDigits, paymentDescriptionStyle: wt.paymentDescription, status: P.cardStatus }) : l && !f ? l.description : r.createElement(Me.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(L, q)), label: r.createElement(Me.ZP, { weight: "bold" }, ot), link: w ? (!l || f ? (0, D.WS)(F, R, N, D.MN.Payment) : "CREDIT_CARD" === l?.type ? (0, D.WS)(F, R, N, D.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: K.Z.reviewPaymentPivot })),
                        ),
                        r.createElement(
                            o.Z,
                            { style: wt.bottomElements },
                            r.createElement(
                                j.ZP,
                                null,
                                r.createElement(
                                    Ne.t,
                                    { description: B, descriptionTestID: K.Z.reviewPromotionTotalDescription, label: at, withBottomBorder: !1 },
                                    T
                                        ? (function ({ balance: e, currency: t, lang: n, subtotal: a }) {
                                              const s = (0, W.Sy)({ amount: a, currency: t, lang: n }),
                                                  c = (0, W.Sy)({ amount: Math.min(a, e), currency: t, lang: n }),
                                                  i = (0, W.Sy)({ amount: Math.max(0, a - e), currency: t, lang: n }),
                                                  l = e > a ? (0, W.Sy)({ amount: e - a, currency: t, lang: n }) : null;
                                              return r.createElement(r.Fragment, null, r.createElement(o.Z, { style: wt.promotionTotalRow }, r.createElement(Me.ZP, { color: "gray700", size: "subtext2" }, st), r.createElement(Me.ZP, { color: "gray700", size: "subtext2" }, s)), r.createElement(o.Z, { style: wt.promotionTotalRow }, r.createElement(Me.ZP, { color: "blue500", size: "subtext2" }, ct), r.createElement(Me.ZP, { color: "blue500", size: "subtext2" }, "-", c)), r.createElement(o.Z, { style: wt.promotionTotalRow }, r.createElement(Me.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, it), r.createElement(Me.ZP, { color: "gray700", size: "subtext2", testID: K.Z.reviewPromotionTotalDescription, weight: "bold" }, i)), l && r.createElement(o.Z, { style: wt.promotionTotalRow }, r.createElement(Me.ZP, { color: "gray700", size: "subtext2" }, lt), r.createElement(Me.ZP, { color: "gray700", size: "subtext2" }, l)));
                                          })({ subtotal: c * i, balance: I?.total_amount || 0, currency: s, lang: g })
                                        : null,
                                ),
                                r.createElement(
                                    Be.Z,
                                    { align: "left", style: wt.terms },
                                    (function (e, t, n, o) {
                                        return n ? r.createElement(p().I18NFormatMessage, { $i18n: "fc2dfb3f" }, r.createElement(Me.ZP, { link: (0, D.s0)(e) }, p().c1134966), r.createElement(Me.ZP, { link: (0, D.bx)(t, o) }, p().he45cc43)) : r.createElement(p().I18NFormatMessage, { $i18n: "fcf4b2a5" }, r.createElement(Me.ZP, { link: (0, D.s0)(e) }, p().c9439a82));
                                    })(n, g, A, x),
                                ),
                                r.createElement(d.ZP, { disabled: !l || f || S.LK.includes(E), onPress: this._handlePromote, size: "xLarge", testID: K.Z.reviewButton, type: "primaryFilled" }, dt),
                            ),
                        ),
                    );
                }
            }
            Ct.contextType = E.rC;
            const wt = m.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, couponCallout: { marginTop: e.spaces.space12 }, childContainer: { paddingHorizontal: 0 }, terms: { textAlign: "start", color: e.colors.gray700, fontSize: e.fontSizes.subtext3, paddingBottom: e.spaces.space24 }, gutter: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" }, paymentDescription: { flexDirection: "row", marginStart: void 0, marginVertical: void 0, backgroundColor: void 0 } })),
                Zt = Je(Ct);
            var kt = n(976145),
                _t = n(84679),
                vt = n(933277),
                St = n(161821),
                xt = n(908478);
            const Dt = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                It = (e, t) => e.quickPromote.targeting.targetedLocations,
                Tt = (e, t) => e.quickPromote.targeting.gender,
                qt = (e, t) => e.quickPromote.targeting.ageBucket,
                At = (e, t) => e.quickPromote.targeting.keywords,
                Mt = (e, t) => e.quickPromote.objective,
                Bt = (e, t) => x.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                Nt = (0, v.Z)()
                    .propsFromState(() => ({ lang: Fe.VT, isHousingAndUrbanDevelopmentLimitations: Dt, targetedLocations: It, selectedGender: Tt, selectedAgeBucket: qt, selectedKeywords: At, objective: Mt, tweet: Bt }))
                    .propsFromActions(() => ({ setObjective: S.mS, setTargetedAgeBucket: S.l$ }))
                    .withAnalytics(D.EP),
                Ft = p().c672105a,
                Rt = p().e1efbeae,
                Ht = p().c6ff7c10,
                Lt = p().b555fb46,
                Ot = p().a8d0108e,
                Ut = p().j2c03e12,
                zt = ["18", "21", "25", "35", "50"],
                jt = [void 0, void 0, "24", "34", "49", "54"],
                Wt = (0, vt.Z)((0, St.Z)(C.gT), (e) => e.maxAge || "over"),
                Kt = jt.length;
            function Gt(e, t) {
                if (e && t) return C.E4[e]?.[t];
            }
            class $t extends r.PureComponent {
                componentDidMount() {
                    const { analytics: e, setObjective: t, tweet: n } = this.props;
                    (0, D.hq)(e)(D.Ur.targetingPageLoad());
                    const r = n ? s.Z.getOriginalTweet(n) : n;
                    t(1 === r?.entities?.urls?.length ? C.CH.WebsiteClicks : C.CH.Engagements);
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: n, objective: a, selectedAgeBucket: s, selectedGender: c, selectedKeywords: i, targetedLocations: l } = this.props,
                        { featureSwitches: d } = this.context,
                        m = d.isTrue("responsive_web_qp_keyword_targeting_enabled") && a === C.CH.WebsiteClicks,
                        { quickPromotePlatform: u, screenName: p, statusId: g } = n.params,
                        h = (0, W.Un)({ numLocations: l.length }),
                        { maxAge: y, minAge: E } = C.gT[s],
                        P = Vt(s),
                        b = y || Ut;
                    return r.createElement(
                        o.Z,
                        { style: Xt.qpContainer, testID: K.Z.targetingScreen },
                        r.createElement(z.O, { screenType: D.MN.Targeting }),
                        r.createElement(j.ZP, null, r.createElement(U.Y, { callout: e ? r.createElement(Qt, { lang: t }) : void 0, style: Xt.titleContainer, title: Ft })),
                        (0, j.FR)((t) => {
                            return r.createElement(
                                o.Z,
                                { style: Xt.targetingContainer },
                                r.createElement(Ae.Z, { description: (0, kt.Z)(l.map(({ localized_name: e }) => e)), label: r.createElement(Me.ZP, { weight: "bold" }, h), link: (0, D.WS)(p, g, u, D.MN.TargetingLocation), paddingHorizontal: t, testID: K.Z.targetingLocationPivot }),
                                r.createElement(
                                    j.ZP,
                                    null,
                                    r.createElement(
                                        Ne.t,
                                        { label: Rt, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        r.createElement(_t.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: Lt,
                                            endThumbAccessibilityLabelValueText: `"${b}"`,
                                            endThumbLabel: b,
                                            max: Kt,
                                            min: 0,
                                            onChange:
                                                ((n = this.props),
                                                ([e, t], r) => {
                                                    const { analytics: o, selectedAgeBucket: a, setTargetedAgeBucket: s } = n,
                                                        c = Vt(a);
                                                    if (!(0, xt.Z)(c, [e, t]))
                                                        if (r) {
                                                            const r = zt[e];
                                                            if (!r) return;
                                                            const a = t === Kt ? "over" : jt[t],
                                                                c = Gt(r, a);
                                                            if (c) (0, D.hq)(o)(D.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const e = Object.keys(C.E4[r])[0];
                                                                Yt({ minAge: r, maxAge: e, props: n });
                                                            }
                                                        } else {
                                                            const r = t === Kt ? "over" : jt[t];
                                                            if (!r) return;
                                                            const a = zt[e],
                                                                c = Gt(a, r);
                                                            if (c) (0, D.hq)(o)(D.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const { minAge: e } = Wt[r].slice(-1)[0];
                                                                Yt({ minAge: e, maxAge: r, props: n });
                                                            }
                                                        }
                                                }),
                                            startThumbAccessibilityLabel: Ht,
                                            startThumbAccessibilityLabelValueText: `"${E}"`,
                                            startThumbLabel: E,
                                            value: P,
                                        }),
                                    ),
                                ),
                                r.createElement(Ae.Z, { description: (0, W.nW)(c), disabled: e, label: r.createElement(Me.ZP, { weight: "bold" }, Ot), link: (0, D.WS)(p, g, u, D.MN.TargetingGender), paddingHorizontal: t, testID: K.Z.targetingGenderPivot }),
                                m && r.createElement(Ae.Z, { description: (0, kt.Z)(i), label: r.createElement(Me.ZP, { weight: "bold" }, "Keywords"), link: (0, D.WS)(p, g, u, D.MN.TargetingKeywords), paddingHorizontal: t, testID: K.Z.targetingKeywordsPivot }),
                            );
                            var n;
                        }),
                    );
                }
            }
            function Vt(e) {
                const { maxAge: t, minAge: n } = C.gT[e];
                return [zt.indexOf(n), t ? jt.indexOf(t) : Kt];
            }
            function Yt({ maxAge: e, minAge: t, props: n }) {
                const { analytics: r, setTargetedAgeBucket: o } = n,
                    a = C.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, D.hq)(r)(D.Ur.setTargetingAgeBucket(a)), o(a);
            }
            function Qt({ lang: e }) {
                const t = (0, D.C0)(e),
                    n = r.useMemo(() => ({ termsLink: r.createElement(Me.ZP, { link: t }) }), [t]);
                return r.createElement(Te.Z, { text: r.createElement(p().I18NFormatMessage, { $i18n: "f54ad505" }, r.cloneElement(n.termsLink, null, p().d4e01892)) });
            }
            $t.contextType = E.rC;
            const Xt = m.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                Jt = Nt($t);
            var en = n(449479);
            const tn = (e, t) => e.quickPromote.targeting.gender,
                nn = (e, t) => e.quickPromote.account.campaigns,
                rn = (0, v.Z)()
                    .propsFromState(() => ({ selectedGender: tn, campaigns: nn }))
                    .propsFromActions(() => ({ setTargetedGender: S.A_ }))
                    .withAnalytics(D.EP),
                on = [C.Y0.Any, C.Y0.Female, C.Y0.Male].map((e) => ({ label: (0, W.nW)(e), value: e, testID: K.Z.getTargetingGender(e) })),
                an = p().df8d4fa0,
                sn = ({ children: e, onBack: t }) => {
                    const n = r.useMemo(() => r.createElement(l.Z, { onClick: t }), [t]);
                    return r.createElement(o.Z, { style: cn.qpContainer, testID: K.Z.targetingGenderScreen }, r.createElement(i.Z, { leftControl: n, style: cn.appBar, title: an }), e);
                },
                cn = m.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                ln = rn(({ analytics: e, selectedGender: t, setTargetedGender: n, ...a }) => {
                    const s = r.useCallback(() => {
                            const { history: e, location: t, match: n } = a,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: s, statusId: c } = n.params;
                            (0, D.Mi)(e, t)(s, c, r, o);
                        }, [a]),
                        c = r.useCallback(
                            (t, r) => {
                                n(r), (0, D.hq)(e)(D.Ur.setTargetingGender(r)), s();
                            },
                            [e, n, s],
                        );
                    return (0, z.d)(D.MN.TargetingGender), r.createElement(sn, { onBack: s }, r.createElement(j.ZP, null, r.createElement(o.Z, { style: cn.selectionGroupContainer }, r.createElement(en.Z, { name: "gender", onChange: c, options: on, value: t }))));
                }),
                dn = ln;
            var mn = n(430996),
                un = n(489601);
            const pn = p().d948b978,
                gn = p().cfcdb4a2,
                hn = p().h1fcb36c,
                yn = p().c1df579e;
            class En extends r.PureComponent {
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
                            return !t || (t && t.user.id_str !== this.context.viewerUserId) ? r.createElement(y.Z, { history: e, onBackClick: this._handleGoBack, title: hn }, r.createElement(c.Z, { onRetry: null, title: pn })) : this._renderPage();
                        }),
                        (this._renderHeader = g.Z),
                        (this._renderPage = () => {
                            const { match: e, promoteErrorCode: t, promoteFetchStatus: n } = this.props,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: a, statusId: s } = e.params,
                                c = (e) => (0, D.WS)(a, s, r, e);
                            switch (o) {
                                case "intro":
                                case "done":
                                    return this._renderSplashPage();
                                case "objective": {
                                    const e = c(D.MN.Targeting);
                                    return this._renderProgressPage(D.D_.Objective, e);
                                }
                                case "targeting": {
                                    const e = c(D.MN.BudgetSelect);
                                    return this._renderProgressPage(D.D_.Targeting, e);
                                }
                                case "budget_select": {
                                    const e = [w.ZP.LOADING, w.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? D.D_.Finish : D.D_.BudgetSelect);
                                }
                                case "review": {
                                    const e = [w.ZP.LOADING, w.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? D.D_.Finish : D.D_.Review);
                                }
                                case "payment":
                                    return this._renderProgressPage(D.D_.BudgetSelect);
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
                            return r.createElement(y.Z, { documentTitle: hn, history: n, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, backButtonType: "targeting" === s ? "close" : "back", onClick: this._handleGoBack, testID: K.Z.backButton }) }), r.createElement(o.Z, { style: Pn.noScrollView }, this._renderRoutes(), t && r.createElement(j.ZP, null, r.createElement(d.ZP, { link: t, size: "xLarge", style: Pn.nextButton, testID: K.Z.nextButton, type: "primaryFilled" }, yn))));
                        }),
                        (this._renderNavigationPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: hn, history: e, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, onClick: this._handleGoBack, testID: K.Z.backButton }) }), r.createElement(o.Z, { style: Pn.noScrollView }, this._renderRoutes()));
                        }),
                        (this._renderPopupPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: hn, history: e, renderHeader: this._renderHeader }, this._renderRoutes());
                        }),
                        (this._renderSplashPage = () => this._renderRoutes()),
                        (this._renderRoutes = () => {
                            const { match: e } = this.props,
                                { quickPromoteScreenName: t } = e.params;
                            switch (t) {
                                case "intro":
                                    return r.createElement(a.Route, { component: R.Z });
                                case "objective":
                                    return r.createElement(a.Route, { component: ce });
                                case "targeting":
                                    return r.createElement(a.Route, { component: Jt });
                                case "targeting_location":
                                    return r.createElement(a.Route, { component: un.Z });
                                case "targeting_gender":
                                    return r.createElement(a.Route, { component: dn });
                                case "targeting_keywords":
                                    return r.createElement(a.Route, { component: mn.Z });
                                case "budget_select":
                                    return r.createElement(a.Route, { component: k.ZP });
                                case "review":
                                    return r.createElement(a.Route, { component: Zt });
                                case "payment":
                                    return r.createElement(a.Route, { component: De });
                                case "payment_select":
                                    return r.createElement(a.Route, { component: Ie.ZP });
                                case "done":
                                    return r.createElement(a.Route, { component: F.ZP });
                                default:
                                    throw (0, b.q8)(t);
                            }
                        }),
                        (this._handleGoBack = () => {
                            const { analytics: e, history: t, location: n, match: r } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: a, screenName: s, statusId: c } = r.params;
                            (0, D.hq)(e)(D.Ur.back(a)), (0, D.Mi)(t, n)(s, c, o, a);
                        }),
                        (this._handleRequestRetry = () => {
                            const { analytics: e, match: t } = this.props,
                                { quickPromoteScreenName: n } = t.params;
                            (0, D.hq)(e)(D.Ur.reload(n)), window.location.reload();
                        });
                }
                componentDidMount() {
                    const { analytics: e, createLocalApiErrorHandler: t, fetchAdsAccountDataIfNeeded: n, fetchAvailableBudgetsIfNeeded: r, fetchCouponsIfNeeded: o, fetchCurrentTargetingLocationIfNeeded: a, fetchQuickPromoteEligibilityIfNeeded: c, fetchTweetIfNeeded: i, match: l, promoteFetchStatus: d, setObjective: m, setPromoteFetchStatus: u, statusId: p, tweet: g } = this.props,
                        { quickPromoteScreenName: h } = l.params,
                        y = this.context.viewerUserId;
                    if (!y) return Promise.resolve();
                    if ((w.ZP.LOADED === d && h !== D.MN.Done && u(w.ZP.NONE), this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled"))) {
                        const e = g ? s.Z.getOriginalTweet(g) : g;
                        m(1 === e?.entities?.urls?.length ? C.CH.WebsiteClicks : C.CH.Engagements);
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
                            t(P.c)(n), (0, D.hq)(e)(D.Ur.pageLoadFail(n.message));
                        })
                        .finally(() => {
                            this.setState({ isLoaded: !0 });
                        });
                }
                render() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fetchStatus: n, history: o, match: a } = this.props,
                        s = [D.MN.Done];
                    if (!this.context.viewerUserId) return this._render();
                    const c = (0, w.h1)(n, this.state.isLoaded ? w.ZP.LOADED : w.ZP.LOADING);
                    if (c === w.ZP.NONE) throw new Error("Quick Promote: should never have none state");
                    return c !== w.ZP.LOADED ? r.createElement(y.Z, { documentTitle: hn, history: o, renderHeader: this._renderHeader }, r.createElement(H.s, null), r.createElement(ue, null), r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: gn })) : (t(), r.createElement(Z.Z, { analytics: e, clearPersistedRedirectBackState: t, history: o, qpRouteParams: a.params, screensAllowedToNavigate: s }, r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: gn })));
                }
            }
            En.contextType = E.rC;
            const Pn = m.default.create((e) => ({ noScrollView: { overflowX: "hidden", flex: 1 }, nextButton: { marginBottom: e.spaces.space48, marginTop: e.spaces.space12 } })),
                bn = N(En);
        },
        653970: (e, t, n) => {
            e.exports = n.p + "engagements_icon.14baf75a.png";
        },
        6885: (e, t, n) => {
            e.exports = n.p + "website_clicks_icon.82f641fa.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-a665aad7.8ed1eb0a.js.map
