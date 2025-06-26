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
                w = n(347720),
                Z = n(203421),
                k = n(200904),
                _ = n(192731),
                v = n(202205),
                S = n(668214),
                D = n(852657);
            const x = (e) => e.quickPromote.paymentMethods,
                I = (0, S.Z)()
                    .propsFromState(() => ({ paymentMethods: x, selectedPaymentMethod: D.DY }))
                    .propsFromActions(() => ({ setSelectedPaymentMethod: D.$L, deletePaymentMethod: D.gp }))
                    .withAnalytics(v.EP),
                q = P().de43b660,
                T = P().hb4773a0,
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
                    return r.createElement(o.Z, { style: O.paymentMethod }, r.createElement(o.Z, { style: [O.descriptionItemContainer, e.paymentDescriptionStyle] }, e.imgSrcUrl ? r.createElement(o.Z, { style: O.cardImageContainer }, r.createElement(d.Z, { source: e.imgSrcUrl, style: O.cardImage })) : r.createElement(i.ZP, { size: "body" }, "Card"), r.createElement(o.Z, { style: O.descriptionContainer }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, `${M} ${e.lastFourDigits}`)), ("Expired" === e.status || "Invalid" === e.status) && r.createElement(o.Z, { style: O.statusBadgeContainer }, r.createElement(u.ZP, { style: O.expiredBadge }, r.createElement(i.ZP, { size: "subtext3", style: O.expiredBadge, weight: "bold" }, e.status)))), e.deletePaymentMethodHandler && r.createElement(m.Z, { renderActionMenu: t }));
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
                            params: { quickPromotePlatform: d, screenName: u, statusId: m },
                        },
                        paymentMethods: p,
                        selectedPaymentMethod: g,
                        setSelectedPaymentMethod: h,
                    } = e;
                    (0, Z.d)(v.MN.PaymentSelect);
                    const y = g ? g.id : "",
                        [E, P] = r.useState(!1),
                        [f, S] = r.useState(null),
                        D = (e, n) => {
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
                                r.createElement(k.ZP, null, r.createElement(w.Y, { title: q })),
                                (0, k.$_)((e) => r.createElement(s.Z, { disabled: E, name: q, onChange: D, options: F(p, y, (e) => S(e), e), value: y })),
                                (0, k.$_)((e) => r.createElement(o.Z, { style: O.addPaymentMethodContainer }, r.createElement(c.Z, { disabled: E, interactive: E, interactiveStyles: L, onPress: () => l.push(`${(0, v.WS)(u, m, d, v.MN.Payment)}?isAddingPayment=true`), style: [O.addPaymentMethodInteractiveContainer, e] }, r.createElement(b.default, { style: O.plusIcon }), r.createElement(i.ZP, { align: "left", color: "primary" }, T)))),
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
            n.d(t, { Y: () => x, Z: () => q });
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
            function D({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: o }) {
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
                        r.createElement(u.Z, { style: I.selectionGroupContainer }, r.createElement(P.Z, { editable: t.length < 200, label: S, name: "keywords", onChange: i, onKeyDown: l, style: I.noSpacing, testID: h.Z.targetingKeywordsInput, value: s })),
                        r.createElement(
                            u.Z,
                            { style: I.row },
                            t.map((e, n) => r.createElement(_, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: o })),
                        ),
                    )
                );
            }
            const x = d(D),
                I = g.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const q = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: s, location: c, match: i, setTargetedContextualKeywords: l } = e,
                    d = r.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: r } = i.params;
                        (0, a.Mi)(s, c)(n, r, e, t);
                    }, [s, c, i.params]),
                    u = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return r.createElement(y, { onBack: d }, r.createElement(o.ZP, null, r.createElement(D, u)));
            });
        },
        929175: (e, t, n) => {
            n.r(t), n.d(t, { QuickPromoteScreen: () => Pn, default: () => fn });
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
                w = n(312771),
                Z = n(364753),
                k = n(649038),
                _ = n(71620),
                v = n(668214),
                S = n(852657),
                D = n(836255),
                x = n(202205);
            const I = (e, t) => t.match.params.statusId,
                q = (e, t) => D.Z.selectHydrated(e, I(0, t)),
                T = (e, t) => (0, w.h1)(D.Z.selectFetchStatus(e, I(0, t)), e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus, e.quickPromote.couponsFetchStatus),
                A = (e, t) => e.quickPromote.promoteStatus,
                M = (e, t) => e.quickPromote.promoteErrorCode,
                B = (e, t) => e.quickPromote.account.campaigns,
                N = (0, v.Z)()
                    .propsFromState(() => ({ statusId: I, fetchStatus: T, tweet: q, campaigns: B, promoteFetchStatus: A, promoteErrorCode: M }))
                    .propsFromActions((e) => ({
                        clearPersistedRedirectBackState: () => (0, S.oE)(),
                        createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_SCREEN"),
                        fetchTweetIfNeeded: D.Z.fetchOneIfNeeded,
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
                    .withAnalytics(x.EP);
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
                $ = (e, t) => D.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                V = (0, v.Z)()
                    .propsFromState(() => ({ selectedObjective: G, tweet: $ }))
                    .propsFromActions(() => ({ setObjective: S.mS }))
                    .withAnalytics(x.EP);
            var Y = n(772750),
                Q = n(992942);
            const X = n.p + "website_clicks_icon.82f641fa.png";
            function J() {
                return r.createElement(Q.Z, { "aria-label": "", source: X, style: u.default.absoluteFill });
            }
            const ee = p().fcc839b6,
                te = (p().b679a538, p().cb19a2f0),
                ne = p().a2d37164,
                re = p().cefad302,
                oe = p().b614fad0,
                ae = u.default.create((e) => ({ titleContainer: { paddingBottom: e.spaces.space28 }, qpContainer: { flex: 1, overflowY: "auto" } })),
                [se, ce] = [
                    { label: (0, W.WF)(C.CH.Engagements), value: C.CH.Engagements, description: te, illustration: r.createElement(Y.i, null), testID: K.Z.getObjective(C.CH.Engagements) },
                    { label: (0, W.WF)(C.CH.WebsiteClicks), value: C.CH.WebsiteClicks, description: ne, illustration: r.createElement(J, null), testID: K.Z.getObjective(C.CH.WebsiteClicks) },
                ];
            const ie = V((e) => {
                    const { analytics: t, selectedObjective: n, setObjective: a, tweet: c } = e,
                        i = c ? s.Z.getOriginalTweet(c) : c,
                        l = null != i?.entities?.media?.length && i?.entities?.media?.length > 0,
                        d = 1 === i?.entities?.urls?.length;
                    r.useEffect(() => {
                        (0, x.hq)(t)(x.Ur.goalSelectionPageLoad());
                    }, []);
                    const u = r.useMemo(
                            () =>
                                (function ({ selectedObjective: e, tweetContainsLinks: t, tweetHasMedia: n }) {
                                    const o = [se, { ...ce, disabled: !t, disabledInlineCallout: t ? void 0 : r.createElement(O.Z.Danger, { headline: oe, text: re, withIcon: !0 }) }];
                                    return o;
                                })({ tweetHasMedia: l, tweetContainsLinks: d, selectedObjective: n }),
                            [l, d, n],
                        ),
                        m = r.useCallback(
                            (e, n) => {
                                a(n), (0, x.hq)(t)(x.Ur.setPromoteGoal(n));
                            },
                            [t, a],
                        );
                    return r.createElement(o.Z, { style: ae.qpContainer, testID: K.Z.objectiveScreen }, r.createElement(z.O, { screenType: x.MN.Objective }), r.createElement(j.ZP, null, r.createElement(U.Y, { style: ae.titleContainer, title: ee }), r.createElement(L.Z, { name: "objective-picker", onChange: m, options: u, value: n })));
                }),
                le = ie;
            var de = n(653970);
            const ue = n.p + "followers_icon.80e5851a.png";
            function me(e) {
                new Image().src = e;
            }
            function pe() {
                return me(de), me(ue), me(X), r.createElement(r.Fragment, null);
            }
            n(136728), n(543673), n(240753), n(128399);
            var ge = n(614983),
                he = n.n(ge),
                ye = n(362075),
                Ee = n(163889),
                Pe = n(942893),
                be = n(704279),
                fe = n(813604);
            const Ce = (e, t) => t.match.params.statusId,
                we = (e, t) => D.Z.selectHydrated(e, Ce(0, t)),
                Ze = (e, t) => D.Z.selectFetchStatus(e, Ce(0, t)),
                ke = (e, t) => e.quickPromote.account.adsAccount,
                _e = (e, t) => e.quickPromote.account.selectedFundingInstrument,
                ve = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: Ze, tweet: we, adsAccount: ke, fundingInstrument: _e, selectedPaymentMethod: S.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_PAYMENT_SCREEN"), fetchTweetIfNeeded: D.Z.fetchOneIfNeeded, scribeAction: be.n, savePlatformRedirectBackState: () => (0, fe.oE)(e.match.params.quickPromotePlatform), fetchAdsAccountDataIfNeeded: fe.Ek }))
                    .withAnalytics(x.EP);
            class Se extends r.PureComponent {
                componentDidMount() {
                    const { adsAccount: e, analytics: t, fundingInstrument: n, match: r, savePlatformRedirectBackState: o } = this.props,
                        { quickPromotePlatform: a, statusId: s } = r.params;
                    o();
                    const c = De(this.props),
                        i = (0, x.lg)(a, e, s, n, c, this.context.featureSwitches);
                    c && (0, x.hq)(t)(x.Ur.paymentPageLoadAddingCard()), (0, x.hq)(t)(x.Ur.paymentPageLoad(i.url)), i.isSameHost || window.location.assign(i.url);
                }
                render() {
                    const { adsAccount: e, fundingInstrument: t, match: n } = this.props,
                        o = De(this.props),
                        { quickPromotePlatform: a, statusId: c } = n.params,
                        i = (0, x.lg)(a, e, c, t, o, this.context.featureSwitches);
                    return i.isSameHost
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(z.O, { screenType: x.MN.Payment }),
                              r.createElement(ye.Z, {
                                  dangerouslyDisableSandbox: !0,
                                  onMessage:
                                      ((l = this.props),
                                      (d = this.context),
                                      (e) => {
                                          const { analytics: t, tweet: n } = l,
                                              r = De(l);
                                          if (e && "quick_promote" === e.name)
                                              if ("scribe" === e.type) {
                                                  const r = (n && s.Z.getOriginalTweet(n)) || void 0,
                                                      o = r ? [Pe.Z.getTweetItem(r)] : [],
                                                      a = e.scribeData || {},
                                                      c = "string" == typeof a.component ? a.component : "quick_promote",
                                                      i = "string" == typeof a.uiEvent ? a.uiEvent : "";
                                                  t.scribe({ component: c, action: i, data: { items: o } });
                                              } else if ("navigation" === e.type || "cardAdded" === e.type) {
                                                  const { createLocalApiErrorHandler: e, fetchAdsAccountDataIfNeeded: n, history: o, match: a } = l,
                                                      { quickPromotePlatform: s, screenName: c, statusId: i } = a.params;
                                                  he()(!!d.viewerUserId, "viewerUserId must be defined"), n(d.viewerUserId, t, !0).catch(e()), o.push(`/${c}/status/${i}/${s}/${r ? x.MN.PaymentSelect : x.MN.BudgetSelect}`);
                                              }
                                      }),
                                  reportError: Ee.ZP,
                                  src: i.url,
                                  style: xe.iframe,
                                  title: "Payment Form",
                              }),
                          )
                        : null;
                    var l, d;
                }
            }
            function De(e) {
                const t = (function (e, t) {
                    const {
                        location: { search: n },
                    } = e;
                    return new URLSearchParams(n).get(t);
                })(e, "isAddingPayment");
                return !!t && "true" === t;
            }
            Se.contextType = E.rC;
            const xe = u.default.create((e) => ({ iframe: { flexGrow: 1, paddingTop: 0 } })),
                Ie = ve(Se);
            var qe = n(896449),
                Te = n(834324),
                Ae = n(224162),
                Me = n(779610),
                Be = n(731708),
                Ne = n(696591),
                Fe = n(847016),
                Re = n(390387);
            const He = (e) => e.quickPromote.objective,
                Le = (e, t) => e.quickPromote.targeting.targetedLocations,
                Oe = (e, t) => e.quickPromote.targeting.ageBucket,
                Ue = (e, t) => e.quickPromote.targeting.gender,
                ze = (e, t) => e.quickPromote.targeting.keywords,
                je = (e, t) => e.quickPromote.budget.dailyBudget,
                We = (e, t) => e.quickPromote.budget.durationDays,
                Ke = (e) => e.quickPromote.budget.currency || "USD",
                Ge = (e) => e.quickPromote.account.selectedFundingInstrument,
                $e = (e) => e.quickPromote.account.adsAccount,
                Ve = (e) => e.quickPromote.promoteStatus,
                Ye = (e) => e.quickPromote.promoteErrorCode,
                Qe = (e) => e.quickPromote.coupons,
                Xe = (e) => e.quickPromote.enrollCouponErrorCode,
                Je =
                    ({ history: e, match: t }) =>
                    (n) => {
                        const { quickPromotePlatform: r, screenName: o, statusId: a } = t.params,
                            s = (0, x.WS)(o, a, r, x.MN.Done);
                        return (0, S.kb)({ history: e, statusId: a, nextPath: s, analytics: n });
                    },
                et = (0, v.Z)()
                    .propsFromState(() => ({ objective: He, targetedLocations: Le, ageBucket: Oe, gender: Ue, keywords: ze, dailyBudget: je, durationDays: We, lang: Re.VT, country: S.QE, currency: Ke, fundingInstrument: Ge, adsAccount: $e, promoteStatus: Ve, promoteErrorCode: Ye, coupons: Qe, enrollCouponErrorCode: Xe, selectedPaymentMethod: S.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, _.zr)("QUICK_PROMOTE_REVIEW_SCREEN"), clearPersistedRedirectBackState: () => (0, S.oE)(), createPromotion: Je(e), enrollCoupon: S.br }))
                    .withAnalytics(x.EP),
                tt = p().db443ae2,
                nt = p().a96f811e,
                rt = p().b069d89c,
                ot = p().fbd44e96,
                at = p().e36bce64,
                st = p().c602f5b8,
                ct = p().ia83756c,
                it = p().cc217a04,
                lt = p().c602f5b8,
                dt = p().g4f2b588,
                ut = p().i41612da,
                mt = p().cdae1af0,
                pt = p().ed8bb5a0,
                gt = p().fc640c20,
                ht = p().be2dc078,
                yt = p().iaefd4de,
                Et = p().e5e42640,
                Pt = p().e85dfd66,
                bt = p().ef4602ec,
                ft = p().a4db098c,
                Ct = p().ef7e3916;
            class wt extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getPaymentDescription = (e, t) => {
                            const { adsAccount: n } = this.props;
                            return n && n.timezone && n.country_code ? (e ? mt : t ? gt : pt) : t ? yt : ht;
                        }),
                        (this._handlePromote = () => {
                            const { analytics: e, createPromotion: t } = this.props;
                            (0, x.hq)(e)(x.Ur.promotionClick()), t(e);
                        }),
                        (this._handleEnrollCoupon = () => {
                            const { analytics: e, coupons: t, enrollCoupon: n, fundingInstrument: r } = this.props,
                                o = this._getCouponErrorMessage();
                            r && t?.eligible_coupon && !o && n(e);
                        }),
                        (this._getPromoteErrorMessage = () => {
                            const { promoteErrorCode: e, promoteStatus: t } = this.props;
                            if (!e) return t === w.ZP.LOADED ? Pt : null;
                            switch (e) {
                                case "MissingFundingInstrument":
                                case "InvalidPaymentMethod":
                                    return Ct;
                                case "CampaignCreationFailed":
                                case "PromotionIneligible":
                                    return ft;
                                default:
                                    return bt;
                            }
                        }),
                        (this._getCouponErrorMessage = () => {
                            const { enrollCouponErrorCode: e } = this.props;
                            return e ? Et : null;
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
                    (0, x.hq)(e)(x.Ur.reviewPageLoad({ hasFundingInstrument: r })), this._handleEnrollCoupon();
                }
                render() {
                    const { adsAccount: e, ageBucket: t, country: n, coupons: a, currency: s, dailyBudget: c, durationDays: i, fundingInstrument: l, gender: u, keywords: m, lang: g, match: h, objective: y, promoteStatus: E, selectedPaymentMethod: P, targetedLocations: b } = this.props,
                        f = e?.needs_vat,
                        w = e?.isCanWriteBilling ?? !0,
                        Z = (0, W.n9)(C.gT[t]),
                        k = (0, W.WF)(y),
                        _ = m.length ? (0, W.R9)({ locations: b.map(({ localized_name: e }) => e), formattedAge: Z, gender: (0, W.nW)(u), keywords: m }) : (0, W.HB)({ locations: b.map(({ localized_name: e }) => e), formattedAge: Z, gender: (0, W.nW)(u) }),
                        { couponErrorMessage: v, couponType: D, existingCouponBalance: I, hasCouponCredit: q, isEligibleForCoupon: T, showCouponTerms: A } = this._getCouponVariables({ coupons: a, currency: s, lang: g }),
                        M = (0, W.Wl)({ dailyBudgetNum: c, durationDays: i, lang: g, currency: s }),
                        B = q ? "" : (0, W.Sy)({ amount: c * i, lang: g, currency: s }),
                        { quickPromotePlatform: N, screenName: F, statusId: R } = h.params,
                        H = this._getPromoteErrorMessage(),
                        L = !!l,
                        { couponCalloutText: O, showCouponCallout: G } = this._getCouponCalloutVariables({ coupons: a, currency: s, lang: g });
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(z.O, { screenType: x.MN.Review }),
                        r.createElement(
                            o.Z,
                            { style: Zt.qpContainer, testID: K.Z.reviewScreen },
                            r.createElement(
                                j.ZP,
                                null,
                                H && r.createElement(o.Z, { style: Zt.gutter }, r.createElement(Te.Z, { text: H, type: "danger" })),
                                v && r.createElement(o.Z, { style: Zt.gutter }, r.createElement(Te.Z, { text: v, type: "warning" })),
                                r.createElement(U.Y, { title: tt }),
                                r.createElement(Fe.t, { description: k, descriptionTestID: K.Z.reviewObjectiveDescription, label: nt, withBottomBorder: !1 }),
                                r.createElement(Fe.t, { description: _, descriptionTestID: K.Z.reviewTargetingDescription, label: rt, withBottomBorder: !1 }),
                                r.createElement(Ae.RD.Consumer, null, ({ direction: e }) => r.createElement(Fe.t, { children: G && r.createElement(Te.Z, { style: Zt.couponCallout, text: O }), description: M, descriptionDir: e, descriptionTestID: K.Z.reviewBudgetAndDurationDescription, label: ot, withBottomBorder: !1 })),
                            ),
                            (0, j.FR)((e) => r.createElement(Me.Z, { description: w && "CREDIT_CARD" === l?.type && P && !f ? r.createElement(qe.XL, { id: P.id, imgSrcUrl: P.imgSrcUrl, lastFourDigits: P.lastFourDigits, paymentDescriptionStyle: Zt.paymentDescription, status: P.cardStatus }) : l && !f ? l.description : r.createElement(Be.ZP, { color: "primary", size: "subtext2" }, this._getPaymentDescription(L, T)), label: r.createElement(Be.ZP, { weight: "bold" }, at), link: w ? (!l || f ? (0, x.WS)(F, R, N, x.MN.Payment) : "CREDIT_CARD" === l?.type ? (0, x.WS)(F, R, N, x.MN.PaymentSelect) : void 0) : void 0, paddingHorizontal: e, testID: K.Z.reviewPaymentPivot })),
                        ),
                        r.createElement(
                            o.Z,
                            { style: Zt.bottomElements },
                            r.createElement(
                                j.ZP,
                                null,
                                r.createElement(
                                    Fe.t,
                                    { description: B, descriptionTestID: K.Z.reviewPromotionTotalDescription, label: st, withBottomBorder: !1 },
                                    q
                                        ? (function ({ balance: e, currency: t, lang: n, subtotal: a }) {
                                              const s = (0, W.Sy)({ amount: a, currency: t, lang: n }),
                                                  c = (0, W.Sy)({ amount: Math.min(a, e), currency: t, lang: n }),
                                                  i = (0, W.Sy)({ amount: Math.max(0, a - e), currency: t, lang: n }),
                                                  l = e > a ? (0, W.Sy)({ amount: e - a, currency: t, lang: n }) : null;
                                              return r.createElement(r.Fragment, null, r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Be.ZP, { color: "gray700", size: "subtext2" }, ct), r.createElement(Be.ZP, { color: "gray700", size: "subtext2" }, s)), r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Be.ZP, { color: "blue500", size: "subtext2" }, it), r.createElement(Be.ZP, { color: "blue500", size: "subtext2" }, "-", c)), r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Be.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, lt), r.createElement(Be.ZP, { color: "gray700", size: "subtext2", testID: K.Z.reviewPromotionTotalDescription, weight: "bold" }, i)), l && r.createElement(o.Z, { style: Zt.promotionTotalRow }, r.createElement(Be.ZP, { color: "gray700", size: "subtext2" }, dt), r.createElement(Be.ZP, { color: "gray700", size: "subtext2" }, l)));
                                          })({ subtotal: c * i, balance: I?.total_amount || 0, currency: s, lang: g })
                                        : null,
                                ),
                                r.createElement(
                                    Ne.Z,
                                    { align: "left", style: Zt.terms },
                                    (function (e, t, n, o) {
                                        return n ? r.createElement(p().I18NFormatMessage, { $i18n: "fc2dfb3f" }, r.createElement(Be.ZP, { link: (0, x.s0)(e) }, p().c1134966), r.createElement(Be.ZP, { link: (0, x.bx)(t, o) }, p().he45cc43)) : r.createElement(p().I18NFormatMessage, { $i18n: "fcf4b2a5" }, r.createElement(Be.ZP, { link: (0, x.s0)(e) }, p().c9439a82));
                                    })(n, g, A, D),
                                ),
                                r.createElement(d.ZP, { disabled: !l || f || S.LK.includes(E), onPress: this._handlePromote, size: "xLarge", testID: K.Z.reviewButton, type: "primaryFilled" }, ut),
                            ),
                        ),
                    );
                }
            }
            wt.contextType = E.rC;
            const Zt = u.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, couponCallout: { marginTop: e.spaces.space12 }, childContainer: { paddingHorizontal: 0 }, terms: { textAlign: "start", color: e.colors.gray700, fontSize: e.fontSizes.subtext3, paddingBottom: e.spaces.space24 }, gutter: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: "space-between", flexDirection: "row" }, paymentDescription: { flexDirection: "row", marginStart: void 0, marginVertical: void 0, backgroundColor: void 0 } })),
                kt = et(wt);
            var _t = n(976145),
                vt = n(84679),
                St = n(933277),
                Dt = n(161821),
                xt = n(908478);
            const It = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                qt = (e, t) => e.quickPromote.targeting.targetedLocations,
                Tt = (e, t) => e.quickPromote.targeting.gender,
                At = (e, t) => e.quickPromote.targeting.ageBucket,
                Mt = (e, t) => e.quickPromote.targeting.keywords,
                Bt = (e, t) => e.quickPromote.objective,
                Nt = (e, t) => D.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                Ft = (0, v.Z)()
                    .propsFromState(() => ({ lang: Re.VT, isHousingAndUrbanDevelopmentLimitations: It, targetedLocations: qt, selectedGender: Tt, selectedAgeBucket: At, selectedKeywords: Mt, objective: Bt, tweet: Nt }))
                    .propsFromActions(() => ({ setObjective: S.mS, setTargetedAgeBucket: S.l$ }))
                    .withAnalytics(x.EP),
                Rt = p().c672105a,
                Ht = p().e1efbeae,
                Lt = p().c6ff7c10,
                Ot = p().b555fb46,
                Ut = p().a8d0108e,
                zt = p().j2c03e12,
                jt = ["18", "21", "25", "35", "50"],
                Wt = [void 0, void 0, "24", "34", "49", "54"],
                Kt = (0, St.Z)((0, Dt.Z)(C.gT), (e) => e.maxAge || "over"),
                Gt = Wt.length;
            function $t(e, t) {
                if (e && t) return C.E4[e]?.[t];
            }
            class Vt extends r.PureComponent {
                componentDidMount() {
                    const { analytics: e, setObjective: t, tweet: n } = this.props;
                    (0, x.hq)(e)(x.Ur.targetingPageLoad());
                    const r = n ? s.Z.getOriginalTweet(n) : n;
                    t(1 === r?.entities?.urls?.length ? C.CH.WebsiteClicks : C.CH.Engagements);
                }
                render() {
                    const { isHousingAndUrbanDevelopmentLimitations: e, lang: t, match: n, objective: a, selectedAgeBucket: s, selectedGender: c, selectedKeywords: i, targetedLocations: l } = this.props,
                        { featureSwitches: d } = this.context,
                        u = d.isTrue("responsive_web_qp_keyword_targeting_enabled") && a === C.CH.WebsiteClicks,
                        { quickPromotePlatform: m, screenName: p, statusId: g } = n.params,
                        h = (0, W.Un)({ numLocations: l.length }),
                        { maxAge: y, minAge: E } = C.gT[s],
                        P = Yt(s),
                        b = y || zt;
                    return r.createElement(
                        o.Z,
                        { style: Jt.qpContainer, testID: K.Z.targetingScreen },
                        r.createElement(z.O, { screenType: x.MN.Targeting }),
                        r.createElement(j.ZP, null, r.createElement(U.Y, { callout: e ? r.createElement(Xt, { lang: t }) : void 0, style: Jt.titleContainer, title: Rt })),
                        (0, j.FR)((t) => {
                            return r.createElement(
                                o.Z,
                                { style: Jt.targetingContainer },
                                r.createElement(Me.Z, { description: (0, _t.Z)(l.map(({ localized_name: e }) => e)), label: r.createElement(Be.ZP, { weight: "bold" }, h), link: (0, x.WS)(p, g, m, x.MN.TargetingLocation), paddingHorizontal: t, testID: K.Z.targetingLocationPivot }),
                                r.createElement(
                                    j.ZP,
                                    null,
                                    r.createElement(
                                        Fe.t,
                                        { label: Ht, withBottomBorder: !1, withDisabledText: e, withPaddingHorizontal: !1 },
                                        r.createElement(vt.Z, {
                                            disabled: e,
                                            endThumbAccessibilityLabel: Ot,
                                            endThumbAccessibilityLabelValueText: `"${b}"`,
                                            endThumbLabel: b,
                                            max: Gt,
                                            min: 0,
                                            onChange:
                                                ((n = this.props),
                                                ([e, t], r) => {
                                                    const { analytics: o, selectedAgeBucket: a, setTargetedAgeBucket: s } = n,
                                                        c = Yt(a);
                                                    if (!(0, xt.Z)(c, [e, t]))
                                                        if (r) {
                                                            const r = jt[e];
                                                            if (!r) return;
                                                            const a = t === Gt ? "over" : Wt[t],
                                                                c = $t(r, a);
                                                            if (c) (0, x.hq)(o)(x.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const e = Object.keys(C.E4[r])[0];
                                                                Qt({ minAge: r, maxAge: e, props: n });
                                                            }
                                                        } else {
                                                            const r = t === Gt ? "over" : Wt[t];
                                                            if (!r) return;
                                                            const a = jt[e],
                                                                c = $t(a, r);
                                                            if (c) (0, x.hq)(o)(x.Ur.setTargetingAgeBucket(c)), s(c);
                                                            else {
                                                                const { minAge: e } = Kt[r].slice(-1)[0];
                                                                Qt({ minAge: e, maxAge: r, props: n });
                                                            }
                                                        }
                                                }),
                                            startThumbAccessibilityLabel: Lt,
                                            startThumbAccessibilityLabelValueText: `"${E}"`,
                                            startThumbLabel: E,
                                            value: P,
                                        }),
                                    ),
                                ),
                                r.createElement(Me.Z, { description: (0, W.nW)(c), disabled: e, label: r.createElement(Be.ZP, { weight: "bold" }, Ut), link: (0, x.WS)(p, g, m, x.MN.TargetingGender), paddingHorizontal: t, testID: K.Z.targetingGenderPivot }),
                                u && r.createElement(Me.Z, { description: (0, _t.Z)(i), label: r.createElement(Be.ZP, { weight: "bold" }, "Keywords"), link: (0, x.WS)(p, g, m, x.MN.TargetingKeywords), paddingHorizontal: t, testID: K.Z.targetingKeywordsPivot }),
                            );
                            var n;
                        }),
                    );
                }
            }
            function Yt(e) {
                const { maxAge: t, minAge: n } = C.gT[e];
                return [jt.indexOf(n), t ? Wt.indexOf(t) : Gt];
            }
            function Qt({ maxAge: e, minAge: t, props: n }) {
                const { analytics: r, setTargetedAgeBucket: o } = n,
                    a = C.E4[t][e || "over"];
                if (!a) throw new Error(`Age bucket not found for minAge: "${t}", maxAge: "${e || "<empty>"}"`);
                (0, x.hq)(r)(x.Ur.setTargetingAgeBucket(a)), o(a);
            }
            function Xt({ lang: e }) {
                const t = (0, x.C0)(e),
                    n = r.useMemo(() => ({ termsLink: r.createElement(Be.ZP, { link: t }) }), [t]);
                return r.createElement(Te.Z, { text: r.createElement(p().I18NFormatMessage, { $i18n: "f54ad505" }, r.cloneElement(n.termsLink, null, p().d4e01892)) });
            }
            Vt.contextType = E.rC;
            const Jt = u.default.create((e) => ({ qpContainer: { flex: 1, overflowY: "visible" }, titleContainer: { paddingBottom: e.spaces.space16 }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 } })),
                en = Ft(Vt);
            var tn = n(449479);
            const nn = (e, t) => e.quickPromote.targeting.gender,
                rn = (e, t) => e.quickPromote.account.campaigns,
                on = (0, v.Z)()
                    .propsFromState(() => ({ selectedGender: nn, campaigns: rn }))
                    .propsFromActions(() => ({ setTargetedGender: S.A_ }))
                    .withAnalytics(x.EP),
                an = [C.Y0.Any, C.Y0.Female, C.Y0.Male].map((e) => ({ label: (0, W.nW)(e), value: e, testID: K.Z.getTargetingGender(e) })),
                sn = p().df8d4fa0,
                cn = ({ children: e, onBack: t }) => {
                    const n = r.useMemo(() => r.createElement(l.Z, { onClick: t }), [t]);
                    return r.createElement(o.Z, { style: ln.qpContainer, testID: K.Z.targetingGenderScreen }, r.createElement(i.Z, { leftControl: n, style: ln.appBar, title: sn }), e);
                },
                ln = u.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, selectionGroupContainer: { paddingTop: e.spaces.space16 } })),
                dn = on(({ analytics: e, selectedGender: t, setTargetedGender: n, ...a }) => {
                    const s = r.useCallback(() => {
                            const { history: e, location: t, match: n } = a,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: s, statusId: c } = n.params;
                            (0, x.Mi)(e, t)(s, c, r, o);
                        }, [a]),
                        c = r.useCallback(
                            (t, r) => {
                                n(r), (0, x.hq)(e)(x.Ur.setTargetingGender(r)), s();
                            },
                            [e, n, s],
                        );
                    return (0, z.d)(x.MN.TargetingGender), r.createElement(cn, { onBack: s }, r.createElement(j.ZP, null, r.createElement(o.Z, { style: ln.selectionGroupContainer }, r.createElement(tn.Z, { name: "gender", onChange: c, options: an, value: t }))));
                }),
                un = dn;
            var mn = n(430996),
                pn = n(489601);
            const gn = p().d948b978,
                hn = p().cfcdb4a2,
                yn = p().h1fcb36c,
                En = p().c1df579e;
            class Pn extends r.PureComponent {
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
                            return !t || (t && t.user.id_str !== this.context.viewerUserId) ? r.createElement(y.Z, { history: e, onBackClick: this._handleGoBack, title: yn }, r.createElement(c.Z, { onRetry: null, title: gn })) : this._renderPage();
                        }),
                        (this._renderHeader = g.Z),
                        (this._renderPage = () => {
                            const { match: e, promoteErrorCode: t, promoteFetchStatus: n } = this.props,
                                { quickPromotePlatform: r, quickPromoteScreenName: o, screenName: a, statusId: s } = e.params,
                                c = (e) => (0, x.WS)(a, s, r, e);
                            switch (o) {
                                case "intro":
                                case "done":
                                    return this._renderSplashPage();
                                case "objective": {
                                    const e = c(x.MN.Targeting);
                                    return this._renderProgressPage(x.D_.Objective, e);
                                }
                                case "targeting": {
                                    const e = c(x.MN.BudgetSelect);
                                    return this._renderProgressPage(x.D_.Targeting, e);
                                }
                                case "budget_select": {
                                    const e = [w.ZP.LOADING, w.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? x.D_.Finish : x.D_.BudgetSelect);
                                }
                                case "review": {
                                    const e = [w.ZP.LOADING, w.ZP.LOADED].includes(n) && !t;
                                    return this._renderProgressPage(e ? x.D_.Finish : x.D_.Review);
                                }
                                case "payment":
                                    return this._renderProgressPage(x.D_.BudgetSelect);
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
                            return r.createElement(y.Z, { documentTitle: yn, history: n, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, backButtonType: "targeting" === s ? "close" : "back", onClick: this._handleGoBack, testID: K.Z.backButton }) }), r.createElement(o.Z, { style: bn.noScrollView }, this._renderRoutes(), t && r.createElement(j.ZP, null, r.createElement(d.ZP, { link: t, size: "xLarge", style: bn.nextButton, testID: K.Z.nextButton, type: "primaryFilled" }, En))));
                        }),
                        (this._renderNavigationPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: yn, history: e, renderHeader: this._renderHeader }, r.createElement(i.Z, { leftControl: r.createElement(l.Z, { autofocus: !0, onClick: this._handleGoBack, testID: K.Z.backButton }) }), r.createElement(o.Z, { style: bn.noScrollView }, this._renderRoutes()));
                        }),
                        (this._renderPopupPage = () => {
                            const { history: e } = this.props;
                            return r.createElement(y.Z, { documentTitle: yn, history: e, renderHeader: this._renderHeader }, this._renderRoutes());
                        }),
                        (this._renderSplashPage = () => this._renderRoutes()),
                        (this._renderRoutes = () => {
                            const { match: e } = this.props,
                                { quickPromoteScreenName: t } = e.params;
                            switch (t) {
                                case "intro":
                                    return r.createElement(a.Route, { component: R.Z });
                                case "objective":
                                    return r.createElement(a.Route, { component: le });
                                case "targeting":
                                    return r.createElement(a.Route, { component: en });
                                case "targeting_location":
                                    return r.createElement(a.Route, { component: pn.Z });
                                case "targeting_gender":
                                    return r.createElement(a.Route, { component: un });
                                case "targeting_keywords":
                                    return r.createElement(a.Route, { component: mn.Z });
                                case "budget_select":
                                    return r.createElement(a.Route, { component: k.ZP });
                                case "review":
                                    return r.createElement(a.Route, { component: kt });
                                case "payment":
                                    return r.createElement(a.Route, { component: Ie });
                                case "payment_select":
                                    return r.createElement(a.Route, { component: qe.ZP });
                                case "done":
                                    return r.createElement(a.Route, { component: F.ZP });
                                default:
                                    throw (0, b.q8)(t);
                            }
                        }),
                        (this._handleGoBack = () => {
                            const { analytics: e, history: t, location: n, match: r } = this.props,
                                { quickPromotePlatform: o, quickPromoteScreenName: a, screenName: s, statusId: c } = r.params;
                            (0, x.hq)(e)(x.Ur.back(a)), (0, x.Mi)(t, n)(s, c, o, a);
                        }),
                        (this._handleRequestRetry = () => {
                            const { analytics: e, match: t } = this.props,
                                { quickPromoteScreenName: n } = t.params;
                            (0, x.hq)(e)(x.Ur.reload(n)), window.location.reload();
                        });
                }
                componentDidMount() {
                    const { analytics: e, createLocalApiErrorHandler: t, fetchAdsAccountDataIfNeeded: n, fetchAvailableBudgetsIfNeeded: r, fetchCouponsIfNeeded: o, fetchCurrentTargetingLocationIfNeeded: a, fetchQuickPromoteEligibilityIfNeeded: c, fetchTweetIfNeeded: i, match: l, promoteFetchStatus: d, setObjective: u, setPromoteFetchStatus: m, statusId: p, tweet: g } = this.props,
                        { quickPromoteScreenName: h } = l.params,
                        y = this.context.viewerUserId;
                    if (!y) return Promise.resolve();
                    if ((w.ZP.LOADED === d && h !== x.MN.Done && m(w.ZP.NONE), this.context.featureSwitches.isTrue("responsive_web_qp_skip_objective_enabled"))) {
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
                            t(P.c)(n), (0, x.hq)(e)(x.Ur.pageLoadFail(n.message));
                        })
                        .finally(() => {
                            this.setState({ isLoaded: !0 });
                        });
                }
                render() {
                    const { analytics: e, clearPersistedRedirectBackState: t, fetchStatus: n, history: o, match: a } = this.props,
                        s = [x.MN.Done];
                    if (!this.context.viewerUserId) return this._render();
                    const c = (0, w.h1)(n, this.state.isLoaded ? w.ZP.LOADED : w.ZP.LOADING);
                    if (c === w.ZP.NONE) throw new Error("Quick Promote: should never have none state");
                    return c !== w.ZP.LOADED ? r.createElement(y.Z, { documentTitle: yn, history: o, renderHeader: this._renderHeader }, r.createElement(H.s, null), r.createElement(pe, null), r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: hn })) : (t(), r.createElement(Z.Z, { analytics: e, clearPersistedRedirectBackState: t, history: o, qpRouteParams: a.params, screensAllowedToNavigate: s }, r.createElement(h.Z, { fetchStatus: c, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: hn })));
                }
            }
            Pn.contextType = E.rC;
            const bn = u.default.create((e) => ({ noScrollView: { overflowX: "hidden", flex: 1 }, nextButton: { marginBottom: e.spaces.space48, marginTop: e.spaces.space12 } })),
                fn = N(Pn);
        },
        653970: (e, t, n) => {
            e.exports = n.p + "engagements_icon.14baf75a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-a665aad7.a8b14e0a.js.map
