"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-b8e4b837"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                c = a(661810),
                l = a(165822),
                o = a(154003),
                s = a(392237),
                d = a(72591),
                m = a(436117),
                u = a(980407),
                p = a(736063),
                y = a(782642),
                h = a(514639),
                g = a(445664),
                f = a(293115),
                E = a(634455),
                b = a(160144),
                k = a(934265),
                C = a(57335),
                Z = a(743080),
                P = a(727384);
            const v = { page: "money", section: "account" },
                _ = "Verify your identity",
                I = (e) => {
                    const { id: t, permissions: a } = (0, g.Z)({ fetchKey: "Payments" }),
                        { balance: s } = (0, k.Z)(),
                        { interest: u } = (0, C.Z)(),
                        p = (0, y.p)(),
                        f = (0, Z.jh)(),
                        v = (0, P.Gs)(a),
                        I = n.useMemo(() => a?.includes(m.d.CreateWithdrawal) || a?.includes(m.d.CreateDeposit), [a]),
                        w = a?.includes(m.d.CreateDeposit),
                        S = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case b.T.accountNumbercopiedToClipboard:
                                        p({ text: "Account number copied to clipboard." });
                                        break;
                                    case b.T.routingNumbercopiedToClipboard:
                                        p({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [p],
                        );
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { style: f.container }, n.createElement(r.Z, { style: T.flexCol, testID: "account-balance" }, n.createElement(i.ZP, { size: "headline2", weight: "bold" }, "Balance"), n.createElement(r.Z, null, s ? n.createElement(E.Z, { amount: s.available_amount_local_micro }) : null)), u ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: T.interest }, u.apy && n.createElement(r.Z, { style: T.flexGap }, n.createElement(i.ZP, { color: "gray700" }, "Current interest rate"), n.createElement(i.ZP, null, (0, P.Bj)({ apy: u.apy }))), n.createElement(r.Z, { style: T.flexGap }, n.createElement(i.ZP, { color: "gray700" }, "Total interest earned"), n.createElement(E.Z, { amount: u.earned.local_micro, currency: u.pending.currency, size: "body", weight: "normal" })), u.pending && n.createElement(r.Z, { style: T.flexGap }, n.createElement(i.ZP, { color: "gray700" }, "Pending interest"), n.createElement(E.Z, { amount: u.pending.local_micro, currency: u.pending.currency, size: "body", weight: "normal" }))), n.createElement(c.Z, { spacing: "space8" })) : null, I ? n.createElement(r.Z, { style: T.flexCol, testID: "account-details" }, n.createElement(i.ZP, { size: "headline2", weight: "bold" }, "Account details"), n.createElement(l.Z, { "aria-label": _, containerStyle: f.tile, stackLayoutUpperStyle: T.routing, upper: t ? n.createElement(b.Z, { eventCallback: S, linkType: h.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 })) : v ? n.createElement(r.Z, { style: T.flexCol }, n.createElement(i.ZP, { size: "headline1", weight: "bold" }, "Verification needed"), n.createElement(i.ZP, { color: "gray700" }, "Verify your identity to unlock your account and routing numbers for secure payments."), n.createElement(o.ZP, { link: { pathname: h.AU.tier2.verifyIdentityPath, state: { closePath: h.l_, redirectPath: h.l_ } }, type: "primaryFilled" }, _)) : null),
                        w ? n.createElement(r.Z, { style: f.footer }, n.createElement(o.ZP, { icon: n.createElement(d.default, null), link: h.IN, type: "secondaryFilled" }, "Deposit funds")) : null,
                    );
                },
                w = { context: "ACCOUNT_DETAILS" },
                S = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(u.Z, { backButtonType: "close", history: t, onBackClick: a }, n.createElement(f.nO, { namespace: v }, n.createElement(p.H, { errorConfig: w }, n.createElement(I, e))));
                },
                T = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                x = n.memo(S);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var n = a(202784),
                r = a(325686),
                i = a(437429),
                c = a.n(i),
                l = a(107267),
                o = a(392237),
                s = a(731708),
                d = a(167630),
                m = a(529356),
                u = a(515510),
                p = a(883229),
                y = a(782642),
                h = a(514639),
                g = a(445664),
                f = a(698478),
                E = a(725516),
                b = a(43429),
                k = a(743080),
                C = a(727384);
            const Z = "Verifying your identity",
                P = "This may take a few seconds.",
                v = "Something went wrong. Please try again later.",
                _ = "Updating your profile",
                I = { [h.P_.onboarding]: { headline: "Setting up your account" }, [h.P_.upgradeToKycVerified]: { headline: Z, targetRole: u.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [h.P_.upgradeToKycDocumentsVerified]: { headline: Z, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [h.P_.selfieVerification]: { headline: Z, targetRole: u.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [h.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.updateName]: { headline: _ }, [h.P_.updateAddress]: { headline: _ } },
                w = o.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                S = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: i, redirectPath: o, redirectState: u, targetRole: p }) => {
                    const Z = (0, l.useHistory)(),
                        _ = c()(),
                        S = (0, E.z)(),
                        T = (0, y.p)(),
                        { headline: x, errorMessage: A = v, targetRole: R, subtext: D = P, challengeCompleteMessage: B } = I[i],
                        L = p ?? R,
                        M = n.useMemo(() => n.createElement(r.Z, { style: { width: "100%" } }, n.createElement(s.ZP, null, D), n.createElement(d.Z, { style: w.activityIndicator })), [D]);
                    n.useEffect(() => {
                        S.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [S]);
                    const j = n.useCallback(
                        (e) => {
                            clearInterval(e), Z.replace(a ?? h.gp), T({ text: A });
                        },
                        [Z, a, T, A],
                    );
                    return (
                        n.useEffect(() => {
                            let a = 0;
                            const n = () => {
                                a >= b.wG
                                    ? (S.scribe({ page: "payments-poller", section: "polling", action: "failure" }), j(r))
                                    : ((a += 1),
                                      (0, g.v)({ environment: _ })
                                          .then((a) => {
                                              const { permissions: n, roles: c } = a ?? {},
                                                  l = (0, C.jm)({ roles: c }),
                                                  s = (0, C.iv)({ roles: c }),
                                                  d = (0, f.rW)({ redirectPath: s ? h.Xy : l ? h.wD : o, permissions: n, roles: c });
                                              switch (i) {
                                                  case h.P_.onboarding:
                                                      n && c && d && (clearInterval(r), Z.replace(d));
                                                      break;
                                                  case h.P_.selfieVerification:
                                                  case h.P_.upgradeToKycVerified:
                                                  case h.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(L)) {
                                                          clearInterval(r), (0, C.J$)(_);
                                                          const a = (0, C.gx)({ roles: c });
                                                          s ? Z.replace(h.Xy) : e && B ? Z.replace((0, C.Ix)({ challengeInitiator: t }), { redirectPath: o, redirectState: u, challengeId: e, message: B }) : a ? Z.replace(h.Am) : l ? Z.replace(h.wD) : Z.replace(o ?? h.gp, u);
                                                      }
                                                      (0, C.ab)({ roles: c }) && (clearInterval(r), (0, C.J$)(_), Z.replace(h.gp));
                                                      break;
                                                  case h.P_.autoclaim:
                                                      c && !(0, C.jm)({ roles: c }) && (clearInterval(r), Z.replace(o ?? h.gp, u));
                                                      break;
                                                  case h.P_.checkPendingTransactions:
                                                      c && !(0, C.gx)({ roles: c }) && (clearInterval(r), Z.replace(o ?? h.gp, u));
                                                      break;
                                                  case h.P_.updateName:
                                                  case h.P_.updateAddress:
                                                      n && c && (clearInterval(r), (0, C.J$)(_), Z.replace(s ? h.Xy : h.iE.personal));
                                              }
                                          })
                                          .catch(() => {
                                              j(r);
                                          }));
                            };
                            n();
                            const r = setInterval(n, b.Ln);
                            return () => clearInterval(r);
                        }, [S, _, j, Z, i, o, L, u, e, t, B]),
                        n.createElement(m.Z, { graphicDisplayMode: "illustration", graphicStyle: k.ir, headline: x, onAction: () => {}, subtext: M })
                    );
                },
                T = { context: "PaymentsAccountsPoller" },
                x = (e) => n.createElement(p.N, { errorConfig: T }, n.createElement(S, e)),
                A = n.memo(x);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => W });
            var n = a(202784),
                r = a(108362),
                i = a(252021),
                c = a(736063),
                l = a(514639),
                o = a(293115),
                s = a(575123),
                d = a(452275),
                m = a(743080),
                u = a(807896),
                p = a(256179),
                y = a(325686),
                h = (a(585488), a(500200)),
                g = a(731708),
                f = a(165822),
                E = a(392237),
                b = a(684008),
                k = a(488746),
                C = a(41065),
                Z = a(311687),
                P = a(671830),
                v = a(507651),
                _ = a(847347),
                I = a(578719),
                w = a(43429),
                S = a(412100),
                T = a(825941);
            const x = p.Z,
                A = { [P.W.CreditCardBack]: b.default, [P.W.FollowArrows]: k.default, [P.W.PeopleStroke]: C.default, [P.W.Clock]: Z.default },
                R = (e) => {
                    const t = (0, m.jh)(),
                        { selectedFilter: a, withHeader: r } = e,
                        { data: i, fetchNext: c } = (0, T.Z)({ searchFilterId: a }),
                        l = i?.get_transactions;
                    return n.createElement(n.Fragment, null, l ? n.createElement(y.Z, null, r ? n.createElement(y.Z, { style: m.ZP.header }, n.createElement(g.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, n.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: m.ZP.upper, upper: n.createElement(I.Z, { emptyStateDescription: "You have not made any transactions yet.", fetchNext: c, slice: l }), withInteractiveStyling: !1 })) : null);
                },
                D = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, S.Z)();
                    return n.createElement(n.Fragment, null, r ? n.createElement(_.Z, { data: t, fetchNext: a, type: "transaction" }) : null, n.createElement(R, (0, u.Z)({}, e, { withHeader: r })));
                },
                B = E.default.create(() => ({ tabStrip: { width: "100%" } })),
                L = { context: "TRANSACTIONS_LIST" },
                M = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, r] = n.useState(t),
                        i = (0, h.useLazyLoadQuery)(x),
                        l = (i.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: n, title: i }) => ({ key: n, label: i, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: n } }, isActive: () => a === n, onClick: () => r(n) })),
                        o = a === w.$W;
                    return n.createElement(n.Fragment, null, l.length && n.createElement(v.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: l, style: B.tabStrip }), n.createElement(c.H, { errorConfig: L }, o ? n.createElement(D, (0, u.Z)({}, e, { selectedFilter: a })) : n.createElement(R, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                j = n.memo(M),
                N = { page: "money", section: "balance" },
                F = "Money",
                z = { context: "ACCOUNT_ACTIVITY" },
                H = (e) => {
                    const { history: t } = e,
                        a = (0, m.jh)(),
                        u = n.useCallback(() => n.createElement(n.Fragment, null, n.createElement(r.Z, { style: a.root, withWideContainer: !0 }, n.createElement(c.H, { errorConfig: z }, n.createElement(d.Z, null), n.createElement(c.H, { errorConfig: z }, n.createElement(j, e))))), [a.root, e]),
                        p = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(o.nO, { namespace: N }, n.createElement(i.Z, { backLocation: l.gp, documentTitle: F, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: n.createElement(s.Z, null), sidebarContent: null, title: F }));
                },
                W = n.memo(H);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(807896),
                r = a(202784),
                i = a(43429),
                c = a(991911);
            const l = (e) => r.createElement(c.Z, (0, n.Z)({}, e, { transferDirection: i.Rz.credit })),
                o = r.memo(l);
        },
        244170: (e, t, a) => {
            a.r(t), a.d(t, { AuthenticatePayment: () => J, default: () => ee });
            var n = a(202784),
                r = a(107267),
                i = a(736063),
                c = a(514639),
                l = a(725516),
                o = a(615027),
                s = a(325686),
                d = a(661810),
                m = a(980407),
                u = a(293115),
                p = a(634455),
                y = a(477922),
                h = a(615954),
                g = a(655750),
                f = a(847211),
                E = a(43429),
                b = a(743080),
                k = a(727384),
                C = a(154003),
                Z = a(167630),
                P = a(436117),
                v = a(782642),
                _ = a(445664),
                I = a(413713),
                w = a(626278),
                S = (a(585488), a(351743)),
                T = a.n(S),
                x = a(39431);
            const A = w.Z,
                R = ({ decision: e }) => {
                    const [t, a] = T()(A);
                    return [
                        n.useCallback(
                            ({ authenticationId: a }) =>
                                new Promise((n, r) => {
                                    t({
                                        variables: { authentication_id: a, decision: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.respond_to_three_ds_authentication?.errors;
                                            a ? r(a) : n();
                                        },
                                        onError: r,
                                    });
                                }),
                            [t, e],
                        ),
                        a,
                    ];
                },
                D = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, i] = R({ decision: x._.ThreeDsAuthenticationResponseAllow }),
                        { permissions: c } = (0, _.Z)({ fetchKey: "Payments" }),
                        o = (0, k.Fs)({ permissions: c, permission: P.d.RespondToThreedsAuthentication }),
                        s = (0, l.z)(),
                        d = (0, v.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    s.scribe({ page: "money", section: "3ds", element: "approve", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [s, r, t, e, a, d],
                        ),
                        u = i || !o;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "primaryFilled" }, i ? n.createElement(Z.Z, { size: "small" }) : "Approve");
                },
                B = { context: "PaymentsAcceptPaymentAuth" };
            function L(e) {
                return n.createElement(i.H, { errorConfig: B }, n.createElement(D, e));
            }
            const M = n.memo(L),
                j = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, i] = R({ decision: x._.ThreeDsAuthenticationResponseDeny }),
                        { permissions: c } = (0, _.Z)({ fetchKey: "Payments" }),
                        o = (0, k.Fs)({ permissions: c, permission: P.d.RespondToThreedsAuthentication }),
                        s = (0, l.z)(),
                        d = (0, v.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    s.scribe({ page: "money", section: "3ds", element: "decline", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [s, r, t, e, a, d],
                        ),
                        u = i || !o;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "destructiveFilled" }, i ? n.createElement(Z.Z, { size: "small" }) : "I did not make this purchase");
                },
                N = { context: "PaymentsRejectPaymentAuth" };
            function F(e) {
                return n.createElement(i.H, { errorConfig: N }, n.createElement(j, e));
            }
            const z = n.memo(F);
            var H = a(461461),
                W = a(712696),
                U = a.n(W);
            const V = H.Z,
                O = () => U()(V, {}, { fetchPolicy: "network-only" }),
                Y = { page: "money", section: "authenticate-payment" },
                K = ({ authenticationId: e }) => {
                    const t = (0, b.jh)(),
                        a = O(),
                        i = a?.get_active_three_ds_authentications?.three_ds_authentications,
                        l = i?.find((t) => t.id === e),
                        C = (0, r.useHistory)(),
                        Z = n.useCallback(() => {
                            C.goBack();
                        }, [C]);
                    if (!i && !l) return n.createElement(o.Z, { to: c.gp });
                    const { amount: P, merchant_details: v, payment_method: _ } = l ?? {},
                        I = (0, k.Ou)(_),
                        w = P ? (0, k.vw)({ amount: P.local_micro, currency: P.currency }) : null,
                        S = n.createElement(s.Z, { style: t.footer }, n.createElement(s.Z, { style: b.YP.actions }, n.createElement(z, { amount: w, authenticationId: e, key: "RejectPaymentAuth", onSuccess: Z }), n.createElement(M, { amount: w, authenticationId: e, key: "AcceptPaymentAuth", onSuccess: Z })));
                    return n.createElement(u.nO, { namespace: Y }, n.createElement(m.Z, { bottomBar: S, history: C, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(s.Z, { style: t.container }, n.createElement(s.Z, { style: b.YP.content }, v ? n.createElement(s.Z, { style: b.YP.gap }, n.createElement(y.G7, { size: "xJumbo", type: E.wC.card, uri: v.logo }), n.createElement(h.Z, { name: v.name, size: "title4" })) : null, n.createElement(s.Z, { style: [b.YP.gap, b.YP.marginTop] }, P ? n.createElement(p.Z, { amount: P.local_micro, currency: P.currency, hasCompleted: !1, type: E.NU.debit }) : null), n.createElement(d.Z, { spacing: "space12" }), n.createElement(g.Z, { description: "Verification requested by merchant", title: "Status" }), I && I.issuedCardAccountName ? n.createElement(g.Z, { description: n.createElement(f.Z, { account: I, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, n.createElement(g.Z, { description: "Online", title: "Location" }), n.createElement(g.Z, { description: e, title: "Authentication ID" })))));
                },
                G = { context: "AUTHENTICATE_PANE" },
                $ = (e) => n.createElement(i.H, { errorConfig: G }, n.createElement(K, e)),
                q = n.memo($),
                J = (e) => {
                    const t = (0, l.z)(),
                        a = (0, r.useParams)().authenticationId;
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "authenticate-payment", action: "impression" });
                        }, [t]),
                        a ? n.createElement(q, { authenticationId: a }) : n.createElement(o.Z, { to: c.gp })
                    );
                },
                X = { context: "AuthenticatePayment" };
            function Q(e) {
                return n.createElement(i.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => j, fetchCardStatus: () => A });
            var n = a(807896),
                r = a(655729),
                i = a(202784),
                c = a(400752),
                l = a(325686),
                o = a(10622),
                s = a.n(o),
                d = (a(585488), a(437429)),
                m = a.n(d),
                u = a(107267),
                p = a(529356),
                y = a(731708),
                h = a(167630),
                g = a(392237),
                f = a(605446),
                E = a(622769),
                b = a(420182),
                k = a(883229),
                C = a(782642),
                Z = a(514639),
                P = a(725516),
                v = a(615027),
                _ = a(43429),
                I = a(743080),
                w = a(727384),
                S = a(224058);
            const T = { [f.T.BankCardLinkingSessionRejectionReasonCardAlreadyExists]: "This card already exists.", [f.T.BankCardLinkingSessionRejectionReasonInaccurateCardDetails]: "Please verify the card details entered and try again.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard]: "We were unable to verify the card details entered.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress]: "We were unable to verify the address associated with the card.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName]: "We were unable to verify the name associated with the card.", [f.T.BankCardLinkingSessionRejectionReasonUnsupportedCardType]: "We do not support this card at this time.", [f.T.BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry]: "We do not support this card at this time.", [f.T.BankCardLinkingSessionRejectionReasonUnusableCard]: "We were unable to verify the card details entered." },
                x = r.Z,
                A = ({ cardLinkId: e, environment: t }) =>
                    s()(t, x, { id: e }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.get_bank_card_linking_session?.status,
                                a = e?.get_bank_card_linking_session?.rejection_reason;
                            return { status: t, rejectionReason: a };
                        })
                        .catch(() => null),
                R = ({ cardLinkId: e, onComplete: t, redirectPath: a }) => {
                    const n = (0, u.useHistory)(),
                        r = m()(),
                        c = (0, P.z)(),
                        o = (0, C.p)();
                    i.useEffect(() => {
                        c.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const s = i.useCallback(
                        (e, r) => {
                            clearInterval(e), o({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? Z.gp);
                        },
                        [t, n, a, o],
                    );
                    return (
                        i.useEffect(() => {
                            let i = 0;
                            const l = () => {
                                i >= _.wG
                                    ? (c.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), s(o))
                                    : ((i += 1),
                                      A({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: i, status: c } = e ?? {};
                                              switch (c) {
                                                  case E.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(o), (0, w.ve)(r), t(), n.replace(a ?? Z.gp);
                                                      break;
                                                  case E.G.BankCardLinkingSessionStatusRejected:
                                                      s(o, i ? T[i] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              s(o);
                                          }));
                            };
                            l();
                            const o = setInterval(l, _.Ln);
                            return () => clearInterval(o);
                        }, [c, r, s, n, e, a, t]),
                        i.createElement(p.Z, { graphicDisplayMode: "illustration", graphicStyle: I.ir, headline: "Verifying your card", onAction: () => {}, subtext: i.createElement(l.Z, { style: B.container }, i.createElement(y.ZP, null, "This may take a few seconds."), i.createElement(h.Z, { style: B.activityIndicator })) })
                    );
                },
                D = () => {
                    const e = (0, c.Dv)(b.lZ),
                        [t, a] = i.useState();
                    i.useEffect(() => {
                        e.get(S.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = i.useCallback(() => {
                        e.delete(S.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? i.createElement(R, (0, n.Z)({}, t, { onComplete: r })) : i.createElement(v.Z, { to: Z.gp })) : i.createElement(h.Z, { style: B.activityIndicator });
                },
                B = g.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                L = { context: "BankCardPoller" },
                M = (e) => i.createElement(k.N, { errorConfig: L }, i.createElement(D, null)),
                j = i.memo(M);
        },
        224058: (e, t, a) => {
            a.d(t, { a: () => n });
            const n = "rweb.money.bankCardPolling";
        },
        578453: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            a(136728);
            var n = a(202784),
                r = a(400752),
                i = a(325686),
                c = a(107267),
                l = a(731708),
                o = a(167630),
                s = a(362075),
                d = a(392237),
                m = a(420182),
                u = a(980407),
                p = a(736063),
                y = a(952793),
                h = a(514639),
                g = a(293115),
                f = a(743080),
                E = a(224058),
                b = a(986092),
                k = (a(585488), a(351743)),
                C = a.n(k),
                Z = a(234107),
                P = a(727384);
            const v = b.Z,
                _ = { light: Z.M.BankCardLinkingSessionThemeLight, dim: Z.M.BankCardLinkingSessionThemeDimmed, dark: Z.M.BankCardLinkingSessionThemeDark },
                I = () => {
                    const [e] = C()(v),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: _[(0, P.gh)()] ?? Z.M.BankCardLinkingSessionThemeLight },
                                onCompleted: (e, t) => {
                                    const n = e?.create_bank_card_linking_session;
                                    a(n);
                                },
                            });
                        }, [e]),
                        t
                    );
                },
                w = "Add a debit card",
                S = { page: "money", section: "bank-card" },
                T = (e) => {
                    const t = (0, r.Dv)(m.lZ),
                        a = I(),
                        d = (0, c.useHistory)(),
                        [p, b] = n.useState(!1),
                        k = (0, f.jh)(),
                        C = d.location?.state,
                        Z = C?.redirectPath,
                        P = (0, y.JY)("payments_crb_iframe_delay_msecs", 0),
                        v = n.useMemo(() => ({ pathname: h.ac, state: C ?? {} }), [C]),
                        _ = n.createElement(i.Z, { style: k.footer }, n.createElement(l.ZP, { align: "center", color: "text", link: v }, "Use a bank account")),
                        T = n.useCallback(() => {
                            P
                                ? setTimeout(() => {
                                      b(!0);
                                  }, P)
                                : b(!0),
                                a?.id && t.set(E.a, { redirectPath: Z, cardLinkId: a.id });
                        }, [P, Z, a, t]),
                        x = n.useCallback(() => {
                            Z === h.iE.bankAccounts ? d.push(h.iE.bankAccounts) : d.push(h.gp);
                        }, [d, Z]);
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: _, history: d, onBackClick: x, withoutBottomBarMobile: !0 }, n.createElement(g.nO, { namespace: S }, n.createElement(i.Z, { style: k.container }, n.createElement(l.ZP, { align: "center", size: "title2", style: f.ZP.title, weight: "heavy" }, w), !p && n.createElement(o.Z, { style: f.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(s.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: T, src: a.iframe_url, style: p ? D.iframe : D.hide, title: w }) : null)));
                },
                x = { context: "BANK_CARD" },
                A = (e) => n.createElement(p.H, { errorConfig: x }, n.createElement(T, e)),
                R = n.memo(A),
                D = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", flex: 1 }, hide: { display: "none" } }));
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var n = a(202784),
                r = a(437429),
                i = a.n(r),
                c = a(107267),
                l = a(736063),
                o = a(514639),
                s = a(725516),
                d = a(160144),
                m = a(727384);
            const u = (e) => {
                    const t = (0, s.z)(),
                        a = (0, c.useHistory)(),
                        r = i()(),
                        l = a.location?.state?.skipTerms;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-onboard", action: "impression" });
                    }, [t]);
                    const u = n.useCallback(
                        (e) => {
                            const { errors: t, message: n } = e.data;
                            switch (n) {
                                case d.T.success:
                                    (0, m.uN)(r), a.replace(o.Tb);
                                    break;
                                case d.T.failure:
                                    a.replace(o.D$, { errors: t });
                                    break;
                                case d.T.kyc:
                                    a.replace(o.AU.tier2.verifyIdentityPath, { redirectPath: o.lf, requestedField: o.q3.address, closePath: o.gp });
                                    break;
                                case d.T.stepUpDocv:
                                    a.replace(o.AU.tier3.verifyIdentityPath, { redirectPath: o.lf, closePath: o.gp });
                            }
                        },
                        [r, a],
                    );
                    return n.createElement(d.Z, { additionalParams: l ? [{ key: "skipTerms", value: l }] : void 0, eventCallback: u, linkType: o.P_.cardOnboarding });
                },
                p = { context: "CardOnboard" };
            function y(e) {
                return n.createElement(l.H, { errorConfig: p }, n.createElement(u, e));
            }
            const h = n.memo(y);
        },
        900592: (e, t, a) => {
            a.r(t), a.d(t, { default: () => de });
            var n = a(202784),
                r = a(325686),
                i = a(992942),
                c = a(154003),
                l = a(165822),
                o = a(731708),
                s = a(953035),
                d = a(392237),
                m = a(108362),
                u = a(177826),
                p = a(468670),
                y = a(777217),
                h = a(861420),
                g = a(692165),
                f = a(436117),
                E = a(252021),
                b = a(736063),
                k = a(514639),
                C = a(445664),
                Z = a(293115),
                P = a(615027),
                v = a(575123),
                _ = a(452275),
                I = a(226595),
                w = a(24568),
                S = a(743080),
                T = a(727384);
            const x = { front: "https://pbs.twimg.com/static/money/mock-card-landscape-front.jpg", back: "https://pbs.twimg.com/static/money/mock-card-landscape-back.jpg" };
            a(136728);
            var A = a(107267),
                R = a(674132),
                D = a.n(R),
                B = a(684779),
                L = a(717160),
                M = a(711223),
                j = a(633806),
                N = a(782642),
                F = a(725516),
                z = a(413713),
                H = a(914507),
                W = (a(585488), a(351743)),
                U = a.n(W);
            const V = H.Z,
                O = () => {
                    const [e, t] = U()(V);
                    return [
                        n.useCallback(
                            ({ cardId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.activate_issued_card?.errors,
                                                i = e?.activate_issued_card?.challenge_id;
                                            i ? a({ challengeId: i }) : n(r || t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            var Y = a(526274),
                K = a(353391),
                G = a.n(K),
                $ = a(482924);
            const q = Y.Z,
                J = ({ paymentMethodId: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, $.A)(q, { payment_method_id: e }),
                        r = t?.get_payment_method?.__id ?? "get_payment_method";
                    return (
                        G()([r], () => {
                            a();
                        }),
                        { data: t, refetchStatus: n }
                    );
                },
                X = D().jade381b,
                Q = ({ card: e, disabled: t }) => {
                    const a = (0, F.z)(),
                        i = (0, S.jh)(),
                        c = (0, N.p)(),
                        s = (0, A.useHistory)(),
                        d = e.rest_id,
                        [m, u] = O(),
                        { data: p } = J({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const y = n.useCallback(() => {
                            a.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                m({ cardId: d })
                                    .then(({ challengeId: e }) => {
                                        e && s.push(k.vw, { challengeId: e, challengeInitiator: k.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        c({ text: (0, z.kJ)({ errors: e }).message });
                                    });
                        }, [a, m, d, s, c]),
                        {
                            Icon: h,
                            action: g,
                            disabled: f,
                            subtitle: E,
                            title: b,
                        } = n.useMemo(() => {
                            const e = p?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis;
                            switch (t) {
                                case j.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: a ? ((n = X(new Date(parseInt(a, 10)))), `Card arrived on ${n}`) : null, Icon: B.default, action: y, disabled: u };
                                case j.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: "Activate your card once its arrived", Icon: L.default };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: M.default };
                            }
                            var n;
                        }, [p?.get_payment_method?.shipping, u, y]);
                    return n.createElement(l.Z, { "aria-label": b, containerStyle: i.tile, disabled: t || f, onClick: g, stackLayoutUpperStyle: S.ZP.upper, upper: n.createElement(r.Z, { style: S.ZP.row }, n.createElement(h, { style: S.ZP.icon }), n.createElement(r.Z, null, n.createElement(o.ZP, null, b), E ? n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, E) : null)), withInteractiveStyling: !!g });
                },
                ee = { context: "ShippingStatus" };
            function te(e) {
                return n.createElement(b.H, { errorConfig: ee }, n.createElement(Q, e));
            }
            const ae = n.memo(te),
                ne = { page: "money", section: "cards" },
                re = "Money",
                ie = "Your card is locked",
                ce = (e) => {
                    const t = (0, S.jh)(),
                        { permissions: a } = (0, C.Z)({ fetchKey: "Payments" }),
                        { cards: d, inactivePhysicalCards: m } = (0, I.Z)(),
                        { handleDeferredPreferencesChange: E, isInProgress: b, preferences: Z } = (0, w.Z)(),
                        v = n.useCallback(() => {
                            E("enable_card_payments", !1);
                        }, [E]),
                        _ = n.useCallback(() => {
                            E("enable_card_payments", !0);
                        }, [E]),
                        A = !(0, T.aY)(a),
                        R = !(0, T.Fs)({ permissions: a, permission: f.d.RequestIssuedCard }),
                        D = !Z.enable_card_payments;
                    return n.createElement(n.Fragment, null, d && d?.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: le.imageContainer }, n.createElement(i.Z, { ariaLabel: "Card", source: x.front, style: le.image }), n.createElement(c.ZP, { fontWeight: "normal", icon: n.createElement(u.default, null), onClick: () => {}, size: "xSmall", style: le.showDetailsButton, type: "onMediaText" }, "Show card details")), m && m?.length > 0 ? n.createElement(ae, { card: m[0], disabled: R }) : null, D ? n.createElement(l.Z, { "aria-label": ie, containerStyle: t.tile, stackLayoutUpperStyle: S.ZP.upper, upper: n.createElement(r.Z, { style: S.ZP.row }, n.createElement(p.default, { style: S.ZP.icon }), n.createElement(r.Z, null, n.createElement(o.ZP, null, ie), n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, "Future transactions would be declined."))), withInteractiveStyling: !1 }) : null, n.createElement(r.Z, { style: t.pivotTileContainer }, D ? n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: A, icon: y.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: _, text: "Unlock card", withInteractiveStyling: !0 }) : n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: A, icon: p.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: v, text: "Lock card", withInteractiveStyling: !0 }), n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: R, icon: h.default, iconColor: "text", isCompact: !0, link: R ? void 0 : k.SR, text: "Change pin", withInteractiveStyling: !0 }), n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: R, icon: g.default, iconColor: "text", isCompact: !0, link: R ? void 0 : k.dI, text: "Get card help", withInteractiveStyling: !0 }))) : n.createElement(P.Z, { to: k.lf }));
                },
                le = d.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, start: e.spaces.space8, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto" } })),
                oe = { context: "ACCOUNT_CARDS" },
                se = (e) => {
                    const { history: t } = e,
                        a = (0, S.jh)(),
                        r = n.useCallback(() => n.createElement(m.Z, { style: a.root, withWideContainer: !0 }, n.createElement(b.H, { errorConfig: oe }, n.createElement(_.Z, null), n.createElement(b.H, { errorConfig: oe }, n.createElement(ce, e)))), [a.root, e]),
                        i = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(Z.nO, { namespace: ne }, n.createElement(E.Z, { backLocation: k.gp, documentTitle: re, history: t, isFullWidth: !0, onBackClick: i, primaryContent: r(), rightControl: n.createElement(v.Z, null), sidebarContent: null, title: re }));
                },
                de = n.memo(se);
        },
        67356: (e, t, a) => {
            a.r(t), a.d(t, { default: () => k });
            var n = a(807896),
                r = a(202784),
                i = a(107267),
                c = a(529356),
                l = a(674132),
                o = a.n(l),
                s = a(883229),
                d = a(943914),
                m = a(514639),
                u = a(445664),
                p = a(743080);
            const y = o().j24c37b2,
                h = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                g = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: a }) => {
                    const n = (0, i.useHistory)(),
                        l = n.location?.state?.errors,
                        o = l?.[0]?.id,
                        s = o ? h[o] : null,
                        d = r.useCallback(() => {
                            n.replace(a ? m.gp : "/");
                        }, [n, a]);
                    return r.createElement(c.Z, { actionLabel: y, enableMaskForDismiss: !0, graphicDisplayMode: "illustration", graphicStyle: p.ir, headline: e, isFullHeightOnMobile: !0, onAction: d, onClose: d, subtext: s ?? t, supportUrl: m.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, u.Z)({ fetchKey: "Payments" });
                    return r.createElement(g, (0, n.Z)({}, e, { isActive: t }));
                },
                E = { context: "PAYMENTS_ERROR" },
                b = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(g, (0, n.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(s.N, { errorConfig: E, fallback: t }, r.createElement(d.B, null, r.createElement(f, e)));
                },
                k = r.memo(b);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.0043040a.js.map
