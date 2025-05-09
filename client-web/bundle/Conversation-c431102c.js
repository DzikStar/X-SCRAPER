"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-c431102c"],
    {
        318069: (e, t, a) => {
            a.d(t, { J: () => s });
            var n = a(202784),
                r = a(173324);
            const o = a.p + "followers_icon.80e5851a.png";
            var i = a(634171);
            function c(e) {
                new Image().src = e;
            }
            function s() {
                return c(r), c(o), c(i), n.createElement(n.Fragment, null);
            }
        },
        210081: (e, t, a) => {
            a.d(t, { ZP: () => q });
            var n = a(202784),
                r = a(325686),
                o = a(782261),
                i = a(782947),
                c = a(392237),
                s = a(40610),
                l = a(674132),
                d = a.n(l),
                u = a(347720),
                m = a(315032),
                g = a(934878),
                p = a(953884),
                h = a(144528),
                y = a(457637),
                f = a(363895),
                b = a(668214),
                E = a(852657),
                C = a(836255);
            const P = (e, t) => e.quickPromote.objective,
                S = (e, t) => C.Z.selectHydrated(e, ((e, t) => t.match.params.statusId)(0, t)),
                Z = (0, b.Z)()
                    .propsFromState(() => ({ selectedObjective: P, tweet: S }))
                    .propsFromActions(() => ({ setObjective: E.mS }))
                    .withAnalytics(f.EP);
            var w = a(992942),
                k = a(173324);
            function v() {
                return n.createElement(w.Z, { "aria-label": "", source: k, style: c.default.absoluteFill });
            }
            var I = a(829077);
            const L = d().fcc839b6,
                x = (d().b679a538, d().cb19a2f0),
                T = d().a2d37164,
                _ = d().cefad302,
                M = d().b614fad0,
                A = c.default.create((e) => ({ titleContainer: { paddingBottom: e.spaces.space28 }, qpContainer: { flex: 1, overflowY: "auto" } })),
                [D, B] = [
                    { label: (0, h.WF)(m.CH.Engagements), value: m.CH.Engagements, description: x, illustration: n.createElement(v, null), testID: y.Z.getObjective(m.CH.Engagements) },
                    { label: (0, h.WF)(m.CH.WebsiteClicks), value: m.CH.WebsiteClicks, description: T, illustration: n.createElement(I.T, null), testID: y.Z.getObjective(m.CH.WebsiteClicks) },
                ];
            const q = Z((e) => {
                const { analytics: t, selectedObjective: a, setObjective: c, tweet: l } = e,
                    d = l ? o.Z.getOriginalTweet(l) : l,
                    m = null != d?.entities?.media?.length && d?.entities?.media?.length > 0,
                    h = 1 === d?.entities?.urls?.length;
                n.useEffect(() => {
                    (0, f.hq)(t)(f.Ur.goalSelectionPageLoad());
                }, []);
                const b = n.useMemo(
                        () =>
                            (function ({ selectedObjective: e, tweetContainsLinks: t, tweetHasMedia: a }) {
                                const r = [D, { ...B, disabled: !t, disabledInlineCallout: t ? void 0 : n.createElement(s.Z.Danger, { headline: M, text: _, withIcon: !0 }) }];
                                return r;
                            })({ tweetHasMedia: m, tweetContainsLinks: h, selectedObjective: a }),
                        [m, h, a],
                    ),
                    E = n.useCallback(
                        (e, a) => {
                            c(a), (0, f.hq)(t)(f.Ur.setPromoteGoal(a));
                        },
                        [t, c],
                    );
                return n.createElement(r.Z, { style: A.qpContainer, testID: y.Z.objectiveScreen }, n.createElement(g.O, { screenType: f.MN.Objective }), n.createElement(p.ZP, null, n.createElement(u.Y, { style: A.titleContainer, title: L }), n.createElement(i.Z, { name: "objective-picker", onChange: E, options: b, value: a })));
            });
        },
        695823: (e, t, a) => {
            a.d(t, { ZP: () => x });
            a(136728), a(543673), a(240753), a(128399);
            var n = a(202784),
                r = a(614983),
                o = a.n(r),
                i = a(362075),
                c = a(782261),
                s = a(392237),
                l = a(443781),
                d = a(163889),
                u = a(942893),
                m = a(934878),
                g = a(363895),
                p = a(71620),
                h = a(668214),
                y = a(704279),
                f = a(852657),
                b = a(813604),
                E = a(836255);
            const C = (e, t) => t.match.params.statusId,
                P = (e, t) => E.Z.selectHydrated(e, C(0, t)),
                S = (e, t) => E.Z.selectFetchStatus(e, C(0, t)),
                Z = (e, t) => e.quickPromote.account.adsAccount,
                w = (e, t) => e.quickPromote.account.selectedFundingInstrument,
                k = (0, h.Z)()
                    .propsFromState(() => ({ fetchStatus: S, tweet: P, adsAccount: Z, fundingInstrument: w, selectedPaymentMethod: f.DY }))
                    .propsFromActions((e) => ({ createLocalApiErrorHandler: (0, p.zr)("QUICK_PROMOTE_PAYMENT_SCREEN"), fetchTweetIfNeeded: E.Z.fetchOneIfNeeded, scribeAction: y.n, savePlatformRedirectBackState: () => (0, b.oE)(e.match.params.quickPromotePlatform), fetchAdsAccountDataIfNeeded: b.Ek }))
                    .withAnalytics(g.EP);
            class v extends n.PureComponent {
                componentDidMount() {
                    const { adsAccount: e, analytics: t, fundingInstrument: a, match: n, savePlatformRedirectBackState: r } = this.props,
                        { quickPromotePlatform: o, statusId: i } = n.params;
                    r();
                    const c = I(this.props),
                        s = (0, g.lg)(o, e, i, a, c);
                    c && (0, g.hq)(t)(g.Ur.paymentPageLoadAddingCard()), (0, g.hq)(t)(g.Ur.paymentPageLoad(s.url)), s.isSameHost || window.location.assign(s.url);
                }
                render() {
                    const { adsAccount: e, fundingInstrument: t, match: a } = this.props,
                        r = I(this.props),
                        { quickPromotePlatform: s, statusId: l } = a.params,
                        p = (0, g.lg)(s, e, l, t, r);
                    return p.isSameHost
                        ? n.createElement(
                              n.Fragment,
                              null,
                              n.createElement(m.O, { screenType: g.MN.Payment }),
                              n.createElement(i.Z, {
                                  dangerouslyDisableSandbox: !0,
                                  onMessage:
                                      ((h = this.props),
                                      (y = this.context),
                                      (e) => {
                                          const { analytics: t, tweet: a } = h,
                                              n = I(h);
                                          if (e && "quick_promote" === e.name)
                                              if ("scribe" === e.type) {
                                                  const n = (a && c.Z.getOriginalTweet(a)) || void 0,
                                                      r = n ? [u.Z.getTweetItem(n)] : [],
                                                      o = e.scribeData || {},
                                                      i = "string" == typeof o.component ? o.component : "quick_promote",
                                                      s = "string" == typeof o.uiEvent ? o.uiEvent : "";
                                                  t.scribe({ component: i, action: s, data: { items: r } });
                                              } else if ("navigation" === e.type) {
                                                  const { createLocalApiErrorHandler: e, fetchAdsAccountDataIfNeeded: a, history: r, match: i } = h,
                                                      { quickPromotePlatform: c, screenName: s, statusId: l } = i.params;
                                                  o()(!!y.viewerUserId, "viewerUserId must be defined"), a(y.viewerUserId, t, !0).catch(e()), r.push(`/${s}/status/${l}/${c}/${n ? g.MN.PaymentSelect : g.MN.Review}`);
                                              }
                                      }),
                                  reportError: d.ZP,
                                  src: p.url,
                                  style: L.iframe,
                                  title: "Payment Form",
                              }),
                          )
                        : null;
                    var h, y;
                }
            }
            function I(e) {
                const t = (function (e, t) {
                    const {
                        location: { search: a },
                    } = e;
                    return new URLSearchParams(a).get(t);
                })(e, "isAddingPayment");
                return !!t && "true" === t;
            }
            v.contextType = l.rC;
            const L = s.default.create((e) => ({ iframe: { flexGrow: 1, paddingTop: 0 } })),
                x = k(v);
        },
        728300: (e, t, a) => {
            a.d(t, { XL: () => H, ZP: () => N });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(822399),
                i = a(525754),
                c = a(530732),
                s = a(731708),
                l = a(811176),
                d = a(992942),
                u = a(868634),
                m = a(247056),
                g = a(138099),
                p = a(154003),
                h = a(58881),
                y = a(392237),
                f = a(674132),
                b = a.n(f),
                E = a(379327),
                C = a(250195),
                P = a(401388),
                S = a(347720),
                Z = a(934878),
                w = a(953884),
                k = a(457637),
                v = a(363895),
                I = a(668214),
                L = a(852657);
            const x = (e) => e.quickPromote.paymentMethods,
                T = (0, I.Z)()
                    .propsFromState(() => ({ paymentMethods: x, selectedPaymentMethod: L.DY }))
                    .propsFromActions(() => ({ setSelectedPaymentMethod: L.$L, deletePaymentMethod: L.gp }))
                    .withAnalytics(v.EP),
                _ = b().de43b660,
                M = b().hb4773a0,
                A = b().aa2a3dd4,
                D = b().b1c5b63c,
                B = b().affb5878,
                q = b().cfd2f35e,
                F = (e, t, a, r) => e.map((e) => ({ label: n.createElement(H, { deletePaymentMethodHandler: a, id: e.id, imgSrcUrl: e.imgSrcUrl, isSelected: t === e.id, lastFourDigits: e.lastFourDigits, status: e.cardStatus }), value: e.id, containerStyle: [O.paymentMethodRadioContainer, O.bottomBorder, r] })),
                H = (e) => {
                    const t = e.deletePaymentMethodHandler
                        ? (t) =>
                              n.createElement(l.Z, {
                                  items: [
                                      {
                                          Icon: C.default,
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
                    return n.createElement(r.Z, { style: O.paymentMethod }, n.createElement(r.Z, { style: [O.descriptionItemContainer, e.paymentDescriptionStyle] }, e.imgSrcUrl ? n.createElement(r.Z, { style: O.cardImageContainer }, n.createElement(d.Z, { source: e.imgSrcUrl, style: O.cardImage })) : n.createElement(s.ZP, { size: "body" }, "Card"), n.createElement(r.Z, { style: O.descriptionContainer }, n.createElement(s.ZP, { color: "gray700", size: "subtext1" }, `${D} ${e.lastFourDigits}`)), ("Expired" === e.status || "Invalid" === e.status) && n.createElement(r.Z, { style: O.statusBadgeContainer }, n.createElement(u.ZP, { style: O.expiredBadge }, n.createElement(s.ZP, { size: "subtext3", style: O.expiredBadge, weight: "bold" }, e.status)))), e.deletePaymentMethodHandler && n.createElement(m.Z, { renderActionMenu: t }));
                },
                U = (e) => {
                    const { cancelDeletePaymentMethodHandler: t, confirmDeletePaymentMethodHandler: a } = e;
                    return n.createElement(g.Z, { onMaskClick: t, type: "bottom", withMask: !0 }, n.createElement(r.Z, { style: O.deleteCardConfirmContainer }, n.createElement(p.ZP, { icon: n.createElement(C.default, null), onPress: a, style: O.modalButton, type: "destructiveOutlined" }, B), n.createElement(p.ZP, { onPress: t, style: O.modalButton, type: "primaryOutlined" }, q)));
                },
                z = h.Z.generate({ backgroundColor: y.default.theme.colors.transparent, color: y.default.theme.colors.primary, insetFocusRing: !0 }),
                O = y.default.create((e) => ({ qpContainer: { flex: 1, overflow: "auto" }, paymentMethod: { flexDirection: "row", justifyContent: "space-between" }, descriptionItemContainer: { backgroundColor: e.colors.cellBackground, paddingVertical: e.spaces.space8, marginStart: e.spaces.space12 }, statusBadgeContainer: { margin: e.spaces.space2 }, descriptionContainer: { margin: e.spaces.space2 }, paymentMethodRadioContainer: { flexDirection: "row-reverse", paddingVertical: e.spaces.space8, marginStart: `-${e.spaces.space24}` }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, deleteCardConfirmContainer: { justifyContent: "flex-end", padding: e.spaces.space8 }, titleContainer: { paddingTop: e.spaces.space32, paddingBottom: e.spaces.space20, paddingStart: e.spaces.space20 }, addPaymentMethodContainer: { backgroundColor: e.colors.cellBackground }, addPaymentMethodInteractiveContainer: { flexDirection: "row", minHeight: e.spaces.space48, paddingVertical: e.spaces.space16 }, plusIcon: { color: e.colors.primary, marginEnd: e.spaces.space16 }, expiredBadge: { backgroundColor: e.colors.red50, color: e.colors.red900 }, cardImageContainer: { height: "20px", flexDirection: "row", width: "32px", margin: e.spaces.space2 }, cardImage: { resizeMode: "contain", flex: 1 }, modalButton: { margin: e.spaces.space8 } })),
                N = T((e) => {
                    const {
                        analytics: t,
                        deletePaymentMethod: a,
                        history: l,
                        match: {
                            params: { quickPromotePlatform: d, screenName: u, statusId: m },
                        },
                        paymentMethods: g,
                        selectedPaymentMethod: p,
                        setSelectedPaymentMethod: h,
                    } = e;
                    (0, Z.d)(v.MN.PaymentSelect);
                    const y = p ? p.id : "",
                        [f, b] = n.useState(!1),
                        [C, I] = n.useState(null),
                        L = (e, a) => {
                            if ((0, P.Z)(g)) return;
                            const n = g.find((e) => e.id === a) || null;
                            (n && "Invalid" === n.cardStatus) ||
                                (b(!0),
                                h(a)
                                    .catch((e) => {
                                        (0, v.hq)(t)(v.Ur.paymentMethodChanged(e));
                                    })
                                    .finally(() => {
                                        b(!1);
                                    }),
                                (0, v.hq)(t)(v.Ur.paymentMethodChanged()));
                        };
                    return (
                        n.useEffect(() => {
                            (0, v.hq)(t)(v.Ur.paymentSelectPageLoad());
                        }, [t]),
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                                r.Z,
                                { style: O.qpContainer, testID: k.Z.paymentMethodSelect },
                                f ? n.createElement(o.Z, { indeterminate: !0 }) : null,
                                n.createElement(w.ZP, null, n.createElement(S.Y, { title: _ })),
                                (0, w.$_)((e) => n.createElement(i.Z, { disabled: f, name: _, onChange: L, options: F(g, y, (e) => I(e), e), value: y })),
                                (0, w.$_)((e) => n.createElement(r.Z, { style: O.addPaymentMethodContainer }, n.createElement(c.Z, { disabled: f, interactive: f, interactiveStyles: z, onPress: () => l.push(`${(0, v.WS)(u, m, d, v.MN.Payment)}?isAddingPayment=true`), style: [O.addPaymentMethodInteractiveContainer, e] }, n.createElement(E.default, { style: O.plusIcon }), n.createElement(s.ZP, { align: "left", color: "primary" }, M)))),
                                C &&
                                    n.createElement(U, {
                                        cancelDeletePaymentMethodHandler: () => I(null),
                                        confirmDeletePaymentMethodHandler: () => {
                                            C &&
                                                (I(null),
                                                b(!0),
                                                a(C)
                                                    .catch((e) => {
                                                        (0, v.hq)(t)(v.Ur.paymentMethodDeleted(e));
                                                    })
                                                    .finally(() => {
                                                        b(!1);
                                                    }),
                                                (0, v.hq)(t)(v.Ur.paymentMethodDeleted()));
                                        },
                                    }),
                            ),
                        )
                    );
                });
        },
        953884: (e, t, a) => {
            a.d(t, { $_: () => l, FR: () => s, ZP: () => u });
            var n = a(202784),
                r = a(325686),
                o = a(67369),
                i = a(537392),
                c = a(392237);
            const s = (e) =>
                    n.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const a = t < c.default.theme.breakpoints.small;
                        return e(a ? "space32" : "space80");
                    }),
                l = (e) =>
                    n.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const a = t < c.default.theme.breakpoints.small;
                        return e(a ? d.mobileContainer : d.webContainer);
                    }),
                d = c.default.create((e) => ({ webContainer: { paddingHorizontal: e.spaces.space80 }, mobileContainer: { paddingHorizontal: e.spaces.space32 } })),
                u = ({ children: e }) => {
                    const t = (0, o.yu)() ? d.mobileContainer : d.webContainer;
                    return n.createElement(r.Z, { style: t }, e);
                };
        },
        817414: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Ve });
            var n = a(202784),
                r = a(325686),
                o = a(107267),
                i = a(688715),
                c = a(67369),
                s = a(362075),
                l = a(731708),
                d = a(154003),
                u = a(138099),
                m = a(786998),
                g = a(370006),
                p = a(879113),
                h = a(392237),
                y = a(674132),
                f = a.n(y),
                b = a(757700),
                E = a(443781),
                C = a(163889),
                P = a(315032),
                S = a(363895),
                Z = a(943245),
                w = a(125363),
                k = a(71620),
                v = a(668214),
                I = a(813604);
            const L = (0, v.Z)()
                    .propsFromState(() => ({}))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("QUICK_PROMOTE_BUDGET_SELECT_SCREEN"), fetchBoostForecastedReachForBudgetIfNeeded: I.Lm }))
                    .withAnalytics(),
                x = f().h7c29de6,
                T = f().hd435bf1;
            function _(e) {
                const t = Math.floor(Math.log10(e)),
                    a = Math.pow(10, t),
                    n = e / a;
                let r;
                return (r = 1 === Math.floor(n) ? (Math.round(10 * n) / 10) * a : 0.5 * Math.round(n / 0.5) * a), r;
            }
            const M = L(function (e) {
                const { analytics: t, audienceHigh: a, audienceLow: r, budget: o, createLocalApiErrorHandler: i, fetchBoostForecastedReachForBudgetIfNeeded: c } = e;
                n.useEffect(() => {
                    c(o, t).catch(i());
                }, [t, o, i, c]);
                const s = _(r),
                    d = _(a),
                    u = f().cf8abf59(s),
                    m = f().cf8abf59(d);
                return n.createElement(n.Fragment, null, n.createElement(l.ZP, { color: "gray900", size: "subtext1", weight: "bold" }, x), n.createElement(l.ZP, { color: "gray900", size: "subtext1" }, T({ audienceLow: u, audienceHigh: m })));
            });
            var A = a(807896),
                D = a(896632),
                B = a(352924),
                q = a(868634),
                F = a(952428),
                H = a(516951);
            const U = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": a, checked: o, description: i, disabled: c, endContent: s, horizontal: d, illustration: u, label: m, name: g, onChange: p, pillText: h, pillType: y, reverseLabels: f, secondaryDescription: b, switchStyle: E, testID: C }) => {
                    const P = B.b(),
                        S = B.b(),
                        Z = B.b(),
                        w = n.createElement(l.ZP, { color: E ? (o ? "text" : "gray700") : "text", id: P, role: "label", size: E ? "subtext1" : "headline2", testID: "headline-label", weight: "bold" }, m),
                        k = !!i && n.createElement(l.ZP, { color: "gray700", id: S, size: "subtext1", style: h ? z.descriptionWithPill : z.description, testID: "description-label" }, i),
                        v = n.createElement(l.ZP, { color: "gray700", role: "label", size: "subtext2", style: z.description }, b),
                        I = h ? n.createElement(q.ZP, { style: z.marginStart8, type: y }, h) : null,
                        L = n.createElement(n.Fragment, null, n.createElement(r.Z, { style: z.row }, f ? k : w, I), n.createElement(r.Z, { style: [z.row, f && z.marginTop4] }, f ? w : k), b ? v : null),
                        x = (a ? 100 / a : 100) + "%",
                        T = E ? [z.padding4, z.borderRadiusInfinite, o ? z.backgroundDefault : z.backgroundGrey] : [z.padding16, z.boxShadow, z.borderRadiusLarge, o ? z.checked : null, z.backgroundDefault];
                    return n.createElement(F.Z, { disabled: c, style: [z.root, ...T, d ? { maxWidth: x, ...z.grow } : null, 1 === t || d ? null : z.withMarginTop, t !== a && d && z.withMarginEnd, !c && z.interactive], testID: C, withInteractiveStyling: !E }, !!u && n.createElement(r.Z, { style: z.iconContainer, testID: "illustration" }, u), n.createElement(r.Z, { style: [z.labelContainer, E && z.alignCenter] }, L), !!s && n.createElement(r.Z, { style: z.endContentContainer, testID: "endContent" }, s), n.createElement("input", { "aria-describedby": `${S} ${Z}`, "aria-label": e, "aria-labelledby": P, "aria-posinset": t, "aria-setsize": a, checked: o, disabled: c, name: g, onChange: o ? H.Z : p, style: O, type: "radio" }));
                },
                z = h.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.elevatedBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding4: { padding: e.spaces.space4 }, boxShadow: { boxShadow: "0px 2px 12px rgba(15, 20, 25, 0.12)" }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 2 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column", flex: 3 }, row: { flexDirection: "row", alignItems: "center" }, marginStart8: { marginStart: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 } })),
                O = { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                N = (e) => {
                    const t = n.useCallback(({ value: e, ...t }) => n.createElement(U, (0, A.Z)({}, t, { key: e })), []);
                    return n.createElement(D.Z, (0, A.Z)({}, e, { renderSelector: t }));
                };
            var R = a(852657),
                j = a(390387);
            function Q(e) {
                return e.quickPromote.budget.availableBudgets ?? [];
            }
            function W(e) {
                return e.quickPromote.budget.currency ?? "USD";
            }
            function $(e) {
                return e.quickPromote.budget.dailyBudget;
            }
            const G = (e) => (t) => {
                    const a = (0, R.WK)(t)(e);
                    return e.ads.typeahead.forecastAudience[a]?.result?.estimatedImpressions;
                },
                V = (0, v.Z)()
                    .propsFromState(() => ({ availableBudgets: Q, currency: W, dailyBudget: $, getAudience: G, language: j.VT }))
                    .propsFromActions(() => ({ setDailyBudget: R.p_ }))
                    .withAnalytics(),
                Y = f().i3656b52;
            function K(e, t, a) {
                return e.toLocaleString((0, Z.It)(t), { currency: a, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 });
            }
            const J = V(function (e) {
                    const { availableBudgets: t, currency: a, dailyBudget: o, getAudience: i, language: c, setDailyBudget: s } = e,
                        d = (0, w.v9)((e) => e),
                        [u, m] = n.useState([]),
                        g = n.useMemo(() => [t[3], t[5], t[6], t[8]].filter(Boolean), [t]);
                    n.useEffect(() => {
                        const e = (e) => i(e) || { high: 0, low: 0 };
                        (() => {
                            const t = g.map((t) => ({ budget: t, ...e(t) }));
                            m(t);
                        })();
                    }, [g, i, d.ads.typeahead.forecastAudience]);
                    const p = n.useMemo(
                        () =>
                            (function (e) {
                                const t = [...e];
                                for (let e = 1; e < t.length; e++) {
                                    const a = t[e],
                                        n = t[e - 1];
                                    if (a.high > 0 && a.low < n.high) {
                                        const e = (a.low + n.high) / 2;
                                        (a.low = e), (n.high = e);
                                    }
                                }
                                return t;
                            })(u).map((e) => ({ label: K(e.budget, c, a), value: e.budget, endContent: n.createElement(M, { audienceHigh: e.high, audienceLow: e.low, budget: e.budget }) })),
                        [u, a, c],
                    );
                    return n.createElement(
                        r.Z,
                        { style: X.tileRadioPadding },
                        n.createElement(l.ZP, { style: X.radioTextSpacing }, Y),
                        n.createElement(N, {
                            name: "budget-select",
                            onChange: function (e, t) {
                                s(t);
                            },
                            options: p,
                            value: o,
                        }),
                    );
                }),
                X = h.default.create((e) => ({ radioTextSpacing: { marginBottom: e.spaces.space8 }, tileRadioPadding: { marginVertical: e.spaces.space16 } }));
            var ee = a(919022),
                te = a(312771);
            const ae = (e, t) => t.match.params.statusId,
                ne = (e) => (0, te.h1)(e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus),
                re = (e) => e.quickPromote.account.adsAccount,
                oe = (e) => e.quickPromote.account.selectedFundingInstrument,
                ie = (0, v.Z)()
                    .propsFromState(() => ({ adsAccount: re, fetchStatus: ne, fundingInstrument: oe, statusId: ae, viewerUser: ee.ZP.selectViewerUser }))
                    .propsFromActions((e) => ({
                        createLocalApiErrorHandler: (0, k.zr)("QUICK_PROMOTE_SCREEN"),
                        createPromotion: R.kb,
                        fetchCurrentTargetingLocationIfNeeded: R.yW,
                        fetchAvailableBudgetsIfNeeded: R.WS,
                        fetchAdsAccountDataIfNeeded: R.Ek,
                        fetchQuickPromoteEligibilityIfNeeded: R.E6,
                        handleFirstLoad: () =>
                            ((e) => {
                                const { history: t, match: a } = e,
                                    { screenName: n, statusId: r } = a.params;
                                return (0, I.tN)(n, r, t);
                            })(e),
                        resetState: R.oA,
                        setBudgetDuration: R.g_,
                        setTargetedAgeBucket: R.l$,
                    }))
                    .withAnalytics(S.EP);
            var ce = a(779610),
                se = a(976145),
                le = a(934878),
                de = a(144528),
                ue = a(457637),
                me = a(954110),
                ge = a(834324),
                pe = a(371344),
                he = a(956272),
                ye = a(370751),
                fe = a(326399);
            const be = (e, t) => {
                    const a = Ce(e, t);
                    return e.ads.typeahead.targetingLocation[a];
                },
                Ee = (e, t) => {
                    const a = Ce(e, t);
                    return e.ads.typeahead.targetingLocation[a]?.fetchStatus;
                },
                Ce = (e, t) => e.quickPromote.targeting.locationQuery,
                Pe = (e, t) => e.quickPromote.targeting.targetedLocations,
                Se = (e, t) => e.quickPromote.account.campaigns,
                Ze = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                we = (0, v.Z)()
                    .propsFromState(() => ({ targetingLocationQuery: Ce, targetingLocations: be, targetedLocations: Pe, fetchStatus: Ee, userCountry: j.GG, campaigns: Se, isHousingAndUrbanDevelopmentLimitations: Ze }))
                    .propsFromActions(() => ({ setTargetedLocations: R.hI, setAndFetchTargetingLocationQuery: R.sN, setTargetingLocationQuery: R.zu, createLocalApiErrorHandler: (0, k.zr)("QUICK_PROMOTE_TARGETING_LOCATION_SCREEN") }))
                    .withAnalytics(S.EP),
                ke = f().cc642518,
                ve = f().i0e8c3c6,
                Ie = f().deaf5b16,
                Le = f().f69ad048,
                xe = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
                Te = Object.freeze({ [S.cU.CurrentCountryMatch]: 0, [S.cU.Match]: 1, [S.cU.NoMatch]: 2 });
            class _e extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: null }),
                        (this._renderSearch = () => {
                            const { fetchStatus: e, targetingLocationQuery: t } = this.props;
                            return n.createElement(Me, { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t }, n.createElement(r.Z, { style: Ae.border }, n.createElement(l.ZP, { style: Ae.headingText, weight: "heavy" }, ve)), n.createElement(p.Z, { fetchStatus: e, render: this._renderSearchList, retryMessage: Ie }));
                        }),
                        (this._handleClear = () => {
                            const { setTargetingLocationQuery: e } = this.props;
                            e("");
                        }),
                        (this._renderSearchList = () => {
                            const { targetedLocations: e } = this.props,
                                t = (0, ye.Z)(e.map(({ targeting_value: e }) => e)),
                                a = this._getTargetingLocationOptions();
                            return n.createElement(
                                r.Z,
                                { style: Ae.overflow },
                                n.createElement(
                                    r.Z,
                                    { style: Ae.optionsContainer },
                                    a.map(({ localized_name: e, location_type: a, targeting_value: r }) => n.createElement(me.Z, { checked: t.has(r), helpText: (0, de.sA)(a), key: r, label: e, name: r, onChange: this._handleSearchSelect, testID: ue.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._getTargetingLocationOptions = () => {
                            const { isHousingAndUrbanDevelopmentLimitations: e, targetingLocationQuery: t, targetingLocations: a, userCountry: n } = this.props,
                                r = a?.result?.[0]?.locations ?? [],
                                o = (0, S.Jy)(n || "US"),
                                i = r.filter(({ country_code: a, localized_name: n, location_type: r }) => {
                                    if (e && "POSTAL_CODES" === r) return !1;
                                    return o(n, a, t) !== S.cU.NoMatch;
                                });
                            return (0, fe.Z)(
                                i,
                                [
                                    ({ country_code: e, localized_name: a }) => {
                                        const n = o(a, e, t);
                                        return Te[n];
                                    },
                                    ({ localized_name: e, location_type: t }) =>
                                        xe[t] ??
                                        (((e) => {
                                            (0, C.ZP)(`Quick Promote: Unknown location type: ${e}. Expected one of {${Object.keys(xe).join(", ")}}`);
                                        })(t) ||
                                            Object.keys(xe).length),
                                    ({ localized_name: e }) => e,
                                ],
                                "asc",
                            );
                        }),
                        (this._handleSearchSelect = (e, t) => {
                            const { analytics: a, setTargetedLocations: n, setTargetingLocationQuery: r } = this.props;
                            if (t) {
                                this.setState({ errorMessage: null });
                                const t = this._getTargetingLocationOptions().find(({ targeting_value: t }) => t === e);
                                t ? ((0, S.hq)(a)(S.Ur.setTargetingLocation({ id: t.targeting_value, locationType: t.location_type, countryCode: t.country_code })), n([t]), this._handleGoBack()) : (0, C.ZP)(`Quick Promote: could not find "${e}" in list of targeting options`);
                            } else (0, S.hq)(a)(S.Ur.targetingLocationInvalid()), this.setState({ errorMessage: Le });
                            r("");
                        }),
                        (this._renderSelected = () => {
                            const { targetedLocations: e, targetingLocationQuery: t } = this.props,
                                { errorMessage: a } = this.state;
                            return n.createElement(
                                Me,
                                { onBack: this._handleGoBack, onChange: this._handleTargetingLocationChange, onClear: this._handleClear, targetingLocationQuery: t },
                                n.createElement(r.Z, null, a && n.createElement(r.Z, { style: Ae.gutterVertical }, n.createElement(ge.Z, { text: a, type: "danger" })), n.createElement(r.Z, { style: Ae.border }, n.createElement(l.ZP, { style: Ae.headingText, weight: "heavy" }, (0, de.Un)({ numLocations: e.length })))),
                                n.createElement(
                                    r.Z,
                                    { style: Ae.optionsContainer },
                                    e.map(({ localized_name: e, location_type: t, targeting_value: a }) => n.createElement(me.Z, { checked: !0, helpText: (0, de.sA)(t), key: a, label: e, name: a, onChange: this._handleSearchSelect, testID: ue.Z.targetingLocationItem, withPaddingHorizontal: !1 })),
                                ),
                            );
                        }),
                        (this._handleGoBack = () => {
                            this.props.onBack();
                        }),
                        (this._handleTargetingLocationChange = (e) => {
                            const t = e.target.value,
                                { analytics: a, createLocalApiErrorHandler: n, setAndFetchTargetingLocationQuery: r } = this.props;
                            (0, S.hq)(a)(S.Ur.targetingLocationSearch(t)), r(t).catch(n());
                        });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, S.hq)(e)(S.Ur.targetingLocationPageLoad());
                }
                componentWillUnmount() {
                    this._handleClear();
                }
                render() {
                    const { targetingLocationQuery: e } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(le.O, { screenType: S.MN.TargetingLocation }), e ? this._renderSearch() : this._renderSelected());
                }
            }
            _e.contextType = E.rC;
            const Me = ({ children: e, onBack: t, onChange: a, onClear: o, targetingLocationQuery: i }) => n.createElement(r.Z, { style: Ae.qpContainer, testID: ue.Z.targetingLocationScreen }, n.createElement(m.Z, { leftControl: n.createElement(g.Z, { onClick: t }), middleControl: n.createElement(pe.Z, { Icon: he.default, autoFocus: !0, name: "locationTargetingInput", onChange: a, onClear: o, placeholder: ke, style: Ae.input, testID: ue.Z.targetingLocationSearch, value: i, withClearButton: !0 }) }), e),
                Ae = h.default.create((e) => ({ qpContainer: { flex: 1, paddingTop: e.spaces.space8 }, input: { marginVertical: e.spaces.space12 }, border: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, headingText: { fontSize: e.fontSizes.headline1, paddingVertical: e.componentDimensions.gutterVertical }, gutterVertical: { paddingVertical: e.componentDimensions.gutterVertical }, overflow: { flexGrow: 1, flexShrink: 1, flexBasis: "455px", overflowY: "auto" }, optionsContainer: { paddingHorizontal: e.spaces.space16 } })),
                De = we(_e),
                Be = (e, t) => e.quickPromote.account.adsAccount?.isHousingAndUrbanDevelopmentLimitations ?? !1,
                qe = (e, t) => e.quickPromote.targeting.targetedLocations,
                Fe = (e, t) => e.quickPromote.targeting.gender,
                He = (e, t) => e.quickPromote.targeting.ageBucket,
                Ue = (e, t) => e.quickPromote.targeting.keywords,
                ze = (e, t) => e.quickPromote.objective,
                Oe = (0, v.Z)()
                    .propsFromState(() => ({ lang: j.VT, isHousingAndUrbanDevelopmentLimitations: Be, targetedLocations: qe, selectedGender: Fe, selectedAgeBucket: He, selectedKeywords: Ue, objective: ze }))
                    .propsFromActions(() => ({ setTargetedAgeBucket: R.l$ }))
                    .withAnalytics(S.EP);
            class Ne extends n.PureComponent {
                componentDidMount() {
                    const { analytics: e } = this.props;
                    (0, S.hq)(e)(S.Ur.targetingPageLoad());
                }
                render() {
                    const { inLocationScreen: e, setInLocationScreen: t, targetedLocations: a } = this.props,
                        o = (0, de.Un)({ numLocations: a.length });
                    return n.createElement(r.Z, { style: Re.qpContainer, testID: ue.Z.targetingScreen }, n.createElement(le.O, { screenType: S.MN.Targeting }), n.createElement(r.Z, { style: Re.targetingContainer }, e ? n.createElement(De, { onBack: () => t(!1) }) : n.createElement(ce.Z, { description: (0, se.Z)(a.map(({ localized_name: e }) => e)), label: n.createElement(l.ZP, { weight: "bold" }, o), onPress: () => t(!0), styleOverride: Re.locationPivot, testID: ue.Z.targetingLocationPivot })));
                }
            }
            Ne.contextType = E.rC;
            const Re = h.default.create((e) => ({ qpContainer: { overflowY: "visible" }, targetingContainer: { flexDirection: "column", gap: e.spaces.space16 }, locationPivot: { cursor: "pointer", boxShadow: "0px 2px 12px rgba(15, 20, 25, 0.12)", borderRadius: e.borderRadii.large, backgroundColor: e.colors.elevatedBackground } })),
                je = Oe(Ne),
                Qe = f().f11264ac,
                We = f().j619ec94,
                $e = f().h1fcb36c,
                Ge = f().g61ac32a;
            const Ve = ie(function (e) {
                    const { analytics: t, createLocalApiErrorHandler: a, fetchAdsAccountDataIfNeeded: h, fetchAvailableBudgetsIfNeeded: y, fetchCurrentTargetingLocationIfNeeded: Z, fetchQuickPromoteEligibilityIfNeeded: w, handleFirstLoad: k, resetState: v, setBudgetDuration: I, setTargetedAgeBucket: L, statusId: x } = e,
                        [T, _] = n.useState("main"),
                        [M, A] = n.useState(!1),
                        D = (0, o.useHistory)(),
                        { featureSwitches: B, viewerUserId: q } = (0, E.QZ)(),
                        F = (0, c.Mv)(),
                        H = B.isTrue("responsive_web_qp_new_payment_enabled"),
                        U = n.useCallback(() => {
                            q &&
                                Promise.all([h(q, t), Z(), w({ statusId: x })])
                                    .then(() => {
                                        y().catch(a());
                                    })
                                    .then(() => k())
                                    .catch(a());
                        }, [t, a, h, y, Z, w, k, x, q]);
                    if (
                        (n.useEffect(() => {
                            v(), U();
                        }, [U, v]),
                        n.useEffect(() => {
                            I(1), L(P.s.AGE_OVER_18);
                        }, [I, L]),
                        !q)
                    )
                        return null;
                    function z() {
                        _("payment");
                    }
                    function O(e) {
                        q && e && "quick_promote" === e.name && ("close" === e.type && _("main"), "cardAdded" === e.type && (h(q, t, !0), _("main")));
                    }
                    function N() {
                        const a = e.viewerUser?.screen_name;
                        if (!a) return;
                        (0, S.hq)(t)(S.Ur.boostCreationClick());
                        const n = (0, S.gC)(a, x);
                        e.createPromotion({ analytics: t, fromComposer: !0, history: D, statusId: x, nextPath: n });
                    }
                    function R() {
                        D.goBack();
                    }
                    const j = F ? Ye.mobileTitleContainer : Ye.titleContainer,
                        Q = F ? b.CA[b.Cg.full] : Ye.modalFixed,
                        W = F ? Ye.mobileAppBar : Ye.appBar,
                        $ = "payment" === T ? [j, Ye.fullHeight] : j;
                    return n.createElement(
                        u.Z,
                        { onMaskClick: R, style: Q, type: "full", withMask: !0 },
                        n.createElement(m.Z, { middleControl: n.createElement(l.ZP, { align: "left", "aria-level": 1, role: "heading", size: "title4", weight: "heavy" }, $e), rightControl: F && n.createElement(g.Z, { backButtonType: "close", onClick: R }), style: W }),
                        n.createElement(
                            r.Z,
                            { style: $ },
                            n.createElement(p.Z, {
                                fetchStatus: e.fetchStatus,
                                onRequestRetry: U,
                                render: function () {
                                    const { adsAccount: t, fundingInstrument: a, statusId: o } = e;
                                    if ("payment" === T) {
                                        const e = H ? ((c = t?.id), (0, i.ju)(`https://x.com/i/payments/${parseInt(c, 10).toString(36)}/quick-promote/new`)) : (0, S.lg)("quick_promote", t, o, a, !1).url;
                                        return n.createElement(s.Z, { allowForms: !0, onMessage: O, reportError: C.ZP, src: e, style: Ye.iframe, title: "Payment Form" });
                                    }
                                    var c;
                                    return n.createElement(n.Fragment, null, n.createElement(je, { fetchStatus: e.fetchStatus, inLocationScreen: M, setInLocationScreen: A, statusId: e.statusId }), !M && n.createElement(r.Z, { style: Ye.spendContainer }, n.createElement(l.ZP, { style: Ye.targetingText }, Ge), n.createElement(J, null), n.createElement(r.Z, { style: Ye.bottomElements }, !e.fundingInstrument || e.adsAccount?.needs_vat ? n.createElement(d.ZP, { onPress: z, size: "xLarge", type: "primaryFilled" }, Qe) : n.createElement(d.ZP, { onPress: N, size: "xLarge", type: "primaryFilled" }, We)), n.createElement(l.ZP, { color: "gray700", style: Ye.adsDisclaimer }, n.createElement(f().I18NFormatMessage, { $i18n: "ff2f533f" }, n.createElement(l.ZP, { link: (0, i.ju)("https://legal.x.com/ads-terms/us.html") }, f().fd22cfe0)))));
                                },
                            }),
                        ),
                    );
                }),
                Ye = h.default.create((e) => ({ modalFixed: { height: 728 }, titleContainer: { paddingHorizontal: e.spaces.space80, paddingBottom: e.spaces.space12 }, mobileTitleContainer: { paddingHorizontal: e.spaces.space24, paddingBottom: e.spaces.space56, height: "100%" }, fullHeight: { height: "100%" }, appBar: { paddingHorizontal: e.spaces.space64, marginBottom: e.spaces.space4 }, mobileAppBar: { paddingHorizontal: e.spaces.space8 }, targetingText: { flex: 1, paddingTop: e.spaces.space4, paddingStart: e.spaces.space4, fontSize: e.fontSizes.subtext1, fontWeight: e.fontWeights.light, marginBottom: 50 }, spendContainer: { flex: 1 }, bottomElements: { marginVertical: e.spaces.space12 }, iframe: { flexGrow: 1, paddingTop: 0 }, adsDisclaimer: { fontSize: e.fontSizes.subtext2 }, radioTextSpacing: { paddingTop: e.spaces.space8, marginBottom: e.spaces.space8 } }));
        },
        173324: (e, t, a) => {
            e.exports = a.p + "engagements_icon.14baf75a.png";
        },
        634171: (e, t, a) => {
            e.exports = a.p + "website_clicks_icon.82f641fa.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-c431102c.e5bf2f0a.js.map
