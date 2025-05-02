"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-b8e4b837"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x });
            var n = a(202784),
                r = a(325686),
                c = a(731708),
                l = a(661810),
                i = a(165822),
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
                C = a(743080),
                Z = a(727384);
            const P = { page: "money", section: "account" },
                _ = "Verify your identity",
                v = (e) => {
                    const { id: t, permissions: a } = (0, g.Z)({ fetchKey: "Payments" }),
                        { balance: s, interest: u } = (0, k.Z)(),
                        p = (0, y.p)(),
                        f = (0, C.jh)(),
                        P = (0, Z.Gs)(a),
                        v = n.useMemo(() => a?.includes(m.d.CreateWithdrawal) || a?.includes(m.d.CreateDeposit), [a]),
                        I = a?.includes(m.d.CreateDeposit),
                        w = n.useCallback(
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
                        n.createElement(r.Z, { style: f.container }, n.createElement(r.Z, { style: S.flexCol, testID: "account-balance" }, n.createElement(c.ZP, { size: "headline2", weight: "bold" }, "Balance"), n.createElement(r.Z, null, s ? n.createElement(E.Z, { amount: s.available_amount_local_micro }) : null)), u ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: S.interest }, u.apy && n.createElement(r.Z, { style: S.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Current interest rate"), n.createElement(c.ZP, null, (0, Z.Bj)({ apy: u.apy }))), n.createElement(r.Z, { style: S.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Total interest earned"), n.createElement(E.Z, { amount: u.earned.local_micro, currency: u.pending.currency, size: "body", weight: "normal" })), u.pending && n.createElement(r.Z, { style: S.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Pending interest"), n.createElement(E.Z, { amount: u.pending.local_micro, currency: u.pending.currency, size: "body", weight: "normal" }))), n.createElement(l.Z, { spacing: "space8" })) : null, v ? n.createElement(r.Z, { style: S.flexCol, testID: "account-details" }, n.createElement(c.ZP, { size: "headline2", weight: "bold" }, "Account details"), n.createElement(i.Z, { "aria-label": _, containerStyle: f.tile, stackLayoutUpperStyle: S.routing, upper: t ? n.createElement(b.Z, { eventCallback: w, linkType: h.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 })) : P ? n.createElement(r.Z, { style: S.flexCol }, n.createElement(c.ZP, { size: "headline1", weight: "bold" }, "Verification needed"), n.createElement(c.ZP, { color: "gray700" }, "Verify your identity to unlock your account and routing numbers for secure payments."), n.createElement(o.ZP, { link: { pathname: h.AU.tier2.verifyIdentityPath, state: { closePath: h.l_, redirectPath: h.l_ } }, type: "primaryFilled" }, _)) : null),
                        I ? n.createElement(r.Z, { style: f.footer }, n.createElement(o.ZP, { icon: n.createElement(d.default, null), link: h.IN, type: "secondaryFilled" }, "Deposit funds")) : null,
                    );
                },
                I = { context: "ACCOUNT_DETAILS" },
                w = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(u.Z, { backButtonType: "close", history: t, onBackClick: a }, n.createElement(f.nO, { namespace: P }, n.createElement(p.H, { errorConfig: I }, n.createElement(v, e))));
                },
                S = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                x = n.memo(w);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var n = a(202784),
                r = a(325686),
                c = a(437429),
                l = a.n(c),
                i = a(107267),
                o = a(392237),
                s = a(731708),
                d = a(167630),
                m = a(529356),
                u = a(515510),
                p = a(736063),
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
                _ = "Something went wrong. Please try again later.",
                v = "Updating your profile",
                I = { [h.P_.onboarding]: { headline: "Setting up your account" }, [h.P_.upgradeToKycVerified]: { headline: Z, targetRole: u.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [h.P_.upgradeToKycDocumentsVerified]: { headline: Z, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [h.P_.selfieVerification]: { headline: Z, targetRole: u.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [h.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.updateName]: { headline: v }, [h.P_.updateAddress]: { headline: v } },
                w = o.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                S = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: c, redirectPath: o, redirectState: u, targetRole: p }) => {
                    const Z = (0, i.useHistory)(),
                        v = l()(),
                        S = (0, E.z)(),
                        x = (0, y.p)(),
                        { headline: T, errorMessage: A = _, targetRole: R, subtext: B = P, challengeCompleteMessage: D } = I[c],
                        L = p ?? R,
                        F = n.useMemo(() => n.createElement(r.Z, { style: { width: "100%" } }, n.createElement(s.ZP, null, B), n.createElement(d.Z, { style: w.activityIndicator })), [B]);
                    n.useEffect(() => {
                        S.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [S]);
                    const M = n.useCallback(
                        (e) => {
                            clearInterval(e), Z.replace(a ?? h.gp), x({ text: A });
                        },
                        [Z, a, x, A],
                    );
                    return (
                        n.useEffect(() => {
                            let a = 0;
                            const n = () => {
                                a >= b.wG
                                    ? (S.scribe({ page: "payments-poller", section: "polling", action: "failure" }), M(r))
                                    : ((a += 1),
                                      (0, g.v)({ environment: v })
                                          .then((a) => {
                                              const { permissions: n, roles: l } = a ?? {},
                                                  i = (0, C.jm)({ roles: l }),
                                                  s = (0, C.iv)({ roles: l }),
                                                  d = (0, f.rW)({ redirectPath: s ? h.Xy : i ? h.wD : o, permissions: n, roles: l });
                                              switch (c) {
                                                  case h.P_.onboarding:
                                                      n && l && d && (clearInterval(r), Z.replace(d));
                                                      break;
                                                  case h.P_.selfieVerification:
                                                  case h.P_.upgradeToKycVerified:
                                                  case h.P_.upgradeToKycDocumentsVerified:
                                                      if (l && l.includes(L)) {
                                                          clearInterval(r), (0, C.J$)(v);
                                                          const a = (0, C.yH)({ roles: l });
                                                          s ? Z.replace(h.Xy) : e && D ? Z.replace((0, C.Ix)({ challengeInitiator: t }), { redirectPath: o, redirectState: u, challengeId: e, message: D }) : a ? Z.replace(h.Am) : i ? Z.replace(h.wD) : Z.replace(o ?? h.gp, u);
                                                      }
                                                      (0, C.ab)({ roles: l }) && (clearInterval(r), (0, C.J$)(v), Z.replace(h.gp));
                                                      break;
                                                  case h.P_.autoclaim:
                                                      l && !(0, C.jm)({ roles: l }) && (clearInterval(r), Z.replace(o ?? h.gp, u));
                                                      break;
                                                  case h.P_.checkPendingTransactions:
                                                      l && !(0, C.yH)({ roles: l }) && (clearInterval(r), Z.replace(o ?? h.gp, u));
                                                      break;
                                                  case h.P_.updateName:
                                                  case h.P_.updateAddress:
                                                      n && l && (clearInterval(r), (0, C.J$)(v), Z.replace(s ? h.Xy : h.iE.personal));
                                              }
                                          })
                                          .catch(() => {
                                              M(r);
                                          }));
                            };
                            n();
                            const r = setInterval(n, b.Ln);
                            return () => clearInterval(r);
                        }, [S, v, M, Z, c, o, L, u, e, t, D]),
                        n.createElement(m.Z, { graphicDisplayMode: "illustration", graphicStyle: k.ir, headline: T, onAction: () => {}, subtext: F })
                    );
                },
                x = { context: "PaymentsAccountsPoller" },
                T = (e) => n.createElement(p.H, { errorConfig: x }, n.createElement(S, e)),
                A = n.memo(T);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => j });
            var n = a(202784),
                r = a(108362),
                c = a(252021),
                l = a(736063),
                i = a(514639),
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
                _ = a(507651),
                v = a(847347),
                I = a(578719),
                w = a(43429),
                S = a(412100),
                x = a(825941);
            const T = p.Z,
                A = { [P.W.CreditCardBack]: b.default, [P.W.FollowArrows]: k.default, [P.W.PeopleStroke]: C.default, [P.W.Clock]: Z.default },
                R = (e) => {
                    const t = (0, m.jh)(),
                        { selectedFilter: a, withHeader: r } = e,
                        { data: c, fetchNext: l } = (0, x.Z)({ searchFilterId: a }),
                        i = c?.get_transactions;
                    return n.createElement(n.Fragment, null, i ? n.createElement(y.Z, null, r ? n.createElement(y.Z, { style: m.ZP.header }, n.createElement(g.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, n.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: m.ZP.upper, upper: n.createElement(I.Z, { emptyStateDescription: "You have not made any transactions yet.", fetchNext: l, slice: i }), withInteractiveStyling: !1 })) : null);
                },
                B = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, S.Z)();
                    return n.createElement(n.Fragment, null, r ? n.createElement(v.Z, { data: t, fetchNext: a, type: "transaction" }) : null, n.createElement(R, (0, u.Z)({}, e, { withHeader: r })));
                },
                D = E.default.create(() => ({ tabStrip: { width: "100%" } })),
                L = { context: "TRANSACTIONS_LIST" },
                F = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, r] = n.useState(t),
                        c = (0, h.useLazyLoadQuery)(T),
                        i = (c.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: n, title: c }) => ({ key: n, label: c, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: n } }, isActive: () => a === n, onClick: () => r(n) })),
                        o = a === w.$W;
                    return n.createElement(n.Fragment, null, i.length && n.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: i, style: D.tabStrip }), n.createElement(l.H, { errorConfig: L }, o ? n.createElement(B, (0, u.Z)({}, e, { selectedFilter: a })) : n.createElement(R, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                M = n.memo(F),
                H = { page: "money", section: "balance" },
                z = "Money",
                N = { context: "ACCOUNT_ACTIVITY" },
                W = (e) => {
                    const { history: t } = e,
                        a = (0, m.jh)(),
                        u = n.useCallback(() => n.createElement(n.Fragment, null, n.createElement(r.Z, { style: a.root, withWideContainer: !0 }, n.createElement(l.H, { errorConfig: N }, n.createElement(d.Z, null), n.createElement(l.H, { errorConfig: N }, n.createElement(M, e))))), [a.root, e]),
                        p = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(o.nO, { namespace: H }, n.createElement(c.Z, { backLocation: i.gp, documentTitle: z, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: n.createElement(s.Z, null), sidebarContent: null, title: z }));
                },
                j = n.memo(W);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(807896),
                r = a(202784),
                c = a(43429),
                l = a(991911);
            const i = (e) => r.createElement(l.Z, (0, n.Z)({}, e, { transferDirection: c.Rz.credit })),
                o = r.memo(i);
        },
        244170: (e, t, a) => {
            a.r(t), a.d(t, { AuthenticatePayment: () => J, default: () => ee });
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                l = a(514639),
                i = a(725516),
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
                _ = a(782642),
                v = a(445664),
                I = a(413713),
                w = a(626278),
                S = (a(585488), a(351743)),
                x = a.n(S),
                T = a(39431);
            const A = w.Z,
                R = ({ decision: e }) => {
                    const [t, a] = x()(A);
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
                B = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, c] = R({ decision: T._.ThreeDsAuthenticationResponseAllow }),
                        { permissions: l } = (0, v.Z)({ fetchKey: "Payments" }),
                        o = (0, k.Fs)({ permissions: l, permission: P.d.RespondToThreedsAuthentication }),
                        s = (0, i.z)(),
                        d = (0, _.p)(),
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
                        u = c || !o;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "primaryFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "Approve");
                },
                D = { context: "PaymentsAcceptPaymentAuth" };
            function L(e) {
                return n.createElement(c.H, { errorConfig: D }, n.createElement(B, e));
            }
            const F = n.memo(L),
                M = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, c] = R({ decision: T._.ThreeDsAuthenticationResponseDeny }),
                        { permissions: l } = (0, v.Z)({ fetchKey: "Payments" }),
                        o = (0, k.Fs)({ permissions: l, permission: P.d.RespondToThreedsAuthentication }),
                        s = (0, i.z)(),
                        d = (0, _.p)(),
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
                        u = c || !o;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "destructiveFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "I did not make this purchase");
                },
                H = { context: "PaymentsRejectPaymentAuth" };
            function z(e) {
                return n.createElement(c.H, { errorConfig: H }, n.createElement(M, e));
            }
            const N = n.memo(z);
            var W = a(461461),
                j = a(712696),
                V = a.n(j);
            const U = W.Z,
                K = () => V()(U, {}, { fetchPolicy: "network-only" }),
                O = { page: "money", section: "authenticate-payment" },
                Y = ({ authenticationId: e }) => {
                    const t = (0, b.jh)(),
                        a = K(),
                        c = a?.get_active_three_ds_authentications?.three_ds_authentications,
                        i = c?.find((t) => t.id === e),
                        C = (0, r.useHistory)(),
                        Z = n.useCallback(() => {
                            C.goBack();
                        }, [C]);
                    if (!c && !i) return n.createElement(o.Z, { to: l.gp });
                    const { amount: P, merchant_details: _, payment_method: v } = i ?? {},
                        I = (0, k.Ou)(v),
                        w = P ? (0, k.vw)({ amount: P.local_micro, currency: P.currency }) : null,
                        S = n.createElement(s.Z, { style: t.footer }, n.createElement(s.Z, { style: b.YP.actions }, n.createElement(N, { amount: w, authenticationId: e, key: "RejectPaymentAuth", onSuccess: Z }), n.createElement(F, { amount: w, authenticationId: e, key: "AcceptPaymentAuth", onSuccess: Z })));
                    return n.createElement(u.nO, { namespace: O }, n.createElement(m.Z, { bottomBar: S, history: C, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(s.Z, { style: t.container }, n.createElement(s.Z, { style: b.YP.content }, _ ? n.createElement(s.Z, { style: b.YP.gap }, n.createElement(y.G7, { size: "xJumbo", type: E.wC.card, uri: _.logo }), n.createElement(h.Z, { name: _.name, size: "title4" })) : null, n.createElement(s.Z, { style: [b.YP.gap, b.YP.marginTop] }, P ? n.createElement(p.Z, { amount: P.local_micro, currency: P.currency, hasCompleted: !1, type: E.NU.debit }) : null), n.createElement(d.Z, { spacing: "space12" }), n.createElement(g.Z, { description: "Verification requested by merchant", title: "Status" }), I && I.issuedCardAccountName ? n.createElement(g.Z, { description: n.createElement(f.Z, { account: I, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, n.createElement(g.Z, { description: "Online", title: "Location" }), n.createElement(g.Z, { description: e, title: "Authentication ID" })))));
                },
                $ = { context: "AUTHENTICATE_PANE" },
                q = (e) => n.createElement(c.H, { errorConfig: $ }, n.createElement(Y, e)),
                G = n.memo(q),
                J = (e) => {
                    const t = (0, i.z)(),
                        a = (0, r.useParams)().authenticationId;
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "authenticate-payment", action: "impression" });
                        }, [t]),
                        a ? n.createElement(G, { authenticationId: a }) : n.createElement(o.Z, { to: l.gp })
                    );
                },
                X = { context: "AuthenticatePayment" };
            function Q(e) {
                return n.createElement(c.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => M, fetchCardStatus: () => A });
            var n = a(807896),
                r = a(655729),
                c = a(202784),
                l = a(400752),
                i = a(325686),
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
                k = a(736063),
                C = a(782642),
                Z = a(514639),
                P = a(725516),
                _ = a(615027),
                v = a(43429),
                I = a(743080),
                w = a(727384),
                S = a(224058);
            const x = { [f.T.BankCardLinkingSessionRejectionReasonCardAlreadyExists]: "This card already exists.", [f.T.BankCardLinkingSessionRejectionReasonInaccurateCardDetails]: "Please verify the card details entered and try again.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard]: "We were unable to verify the card details entered.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress]: "We were unable to verify the address associated with the card.", [f.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName]: "We were unable to verify the name associated with the card.", [f.T.BankCardLinkingSessionRejectionReasonUnsupportedCardType]: "We do not support this card at this time.", [f.T.BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry]: "We do not support this card at this time.", [f.T.BankCardLinkingSessionRejectionReasonUnusableCard]: "We were unable to verify the card details entered." },
                T = r.Z,
                A = ({ cardLinkId: e, environment: t }) =>
                    s()(t, T, { id: e }, { fetchPolicy: "network-only" })
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
                        l = (0, P.z)(),
                        o = (0, C.p)();
                    c.useEffect(() => {
                        l.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [l]);
                    const s = c.useCallback(
                        (e, r) => {
                            clearInterval(e), o({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? Z.gp);
                        },
                        [t, n, a, o],
                    );
                    return (
                        c.useEffect(() => {
                            let c = 0;
                            const i = () => {
                                c >= v.wG
                                    ? (l.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), s(o))
                                    : ((c += 1),
                                      A({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: c, status: l } = e ?? {};
                                              switch (l) {
                                                  case E.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(o), (0, w.ve)(r), t(), n.replace(a ?? Z.gp);
                                                      break;
                                                  case E.G.BankCardLinkingSessionStatusRejected:
                                                      s(o, c ? x[c] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              s(o);
                                          }));
                            };
                            i();
                            const o = setInterval(i, v.Ln);
                            return () => clearInterval(o);
                        }, [l, r, s, n, e, a, t]),
                        c.createElement(p.Z, { graphicDisplayMode: "illustration", graphicStyle: I.ir, headline: "Verifying your card", onAction: () => {}, subtext: c.createElement(i.Z, { style: D.container }, c.createElement(y.ZP, null, "This may take a few seconds."), c.createElement(h.Z, { style: D.activityIndicator })) })
                    );
                },
                B = () => {
                    const e = (0, l.Dv)(b.lZ),
                        [t, a] = c.useState();
                    c.useEffect(() => {
                        e.get(S.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = c.useCallback(() => {
                        e.delete(S.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? c.createElement(R, (0, n.Z)({}, t, { onComplete: r })) : c.createElement(_.Z, { to: Z.gp })) : c.createElement(h.Z, { style: D.activityIndicator });
                },
                D = g.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                L = { context: "BankCardPoller" },
                F = (e) => c.createElement(k.H, { errorConfig: L }, c.createElement(B, null)),
                M = c.memo(F);
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
                c = a(325686),
                l = a(107267),
                i = a(731708),
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
            const _ = b.Z,
                v = { light: Z.M.BankCardLinkingSessionThemeLight, dim: Z.M.BankCardLinkingSessionThemeDimmed, dark: Z.M.BankCardLinkingSessionThemeDark },
                I = () => {
                    const [e] = C()(_),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: v[(0, P.gh)()] ?? Z.M.BankCardLinkingSessionThemeLight },
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
                x = (e) => {
                    const t = (0, r.Dv)(m.lZ),
                        a = I(),
                        d = (0, l.useHistory)(),
                        [p, b] = n.useState(!1),
                        k = (0, f.jh)(),
                        C = d.location?.state,
                        Z = C?.redirectPath,
                        P = (0, y.JY)("payments_crb_iframe_delay_msecs", 0),
                        _ = n.useMemo(() => ({ pathname: h.ac, state: C ?? {} }), [C]),
                        v = n.createElement(c.Z, { style: k.footer }, n.createElement(i.ZP, { align: "center", color: "text", link: _ }, "Use a bank account")),
                        x = n.useCallback(() => {
                            P
                                ? setTimeout(() => {
                                      b(!0);
                                  }, P)
                                : b(!0),
                                a?.id && t.set(E.a, { redirectPath: Z, cardLinkId: a.id });
                        }, [P, Z, a, t]),
                        T = n.useCallback(() => {
                            Z === h.iE.bankAccounts ? d.push(h.iE.bankAccounts) : d.push(h.gp);
                        }, [d, Z]);
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: v, history: d, onBackClick: T, withoutBottomBarMobile: !0 }, n.createElement(g.nO, { namespace: S }, n.createElement(c.Z, { style: k.container }, n.createElement(i.ZP, { align: "center", size: "title2", style: f.ZP.title, weight: "heavy" }, w), !p && n.createElement(o.Z, { style: f.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(s.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: x, src: a.iframe_url, style: p ? B.iframe : B.hide, title: w }) : null)));
                },
                T = { context: "BANK_CARD" },
                A = (e) => n.createElement(p.H, { errorConfig: T }, n.createElement(x, e)),
                R = n.memo(A),
                B = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", flex: 1 }, hide: { display: "none" } }));
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var n = a(202784),
                r = a(437429),
                c = a.n(r),
                l = a(107267),
                i = a(736063),
                o = a(514639),
                s = a(725516),
                d = a(160144),
                m = a(727384);
            const u = (e) => {
                    const t = (0, s.z)(),
                        a = (0, l.useHistory)(),
                        r = c()(),
                        i = a.location?.state?.skipTerms;
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
                    return n.createElement(d.Z, { additionalParams: i ? [{ key: "skipTerms", value: i }] : void 0, eventCallback: u, linkType: o.P_.cardOnboarding });
                },
                p = { context: "CardOnboard" };
            function y(e) {
                return n.createElement(i.H, { errorConfig: p }, n.createElement(u, e));
            }
            const h = n.memo(y);
        },
        90402: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Oe });
            var n = a(202784),
                r = a(325686),
                c = a(992942),
                l = a(154003),
                i = a(167630),
                o = a(165822),
                s = a(731708),
                d = a(953035),
                m = a(392237),
                u = a(108362),
                p = a(161335),
                y = a(177826),
                h = a(468670),
                g = a(777217),
                f = a(861420),
                E = a(436117),
                b = a(252021),
                k = a(736063),
                C = a(514639),
                Z = a(445664),
                P = a(293115),
                _ = a(615027),
                v = a(575123),
                I = a(452275),
                w = a(226595),
                S = a(24568),
                x = a(743080),
                T = a(727384),
                A = (a(136728), a(107267)),
                R = a(868634),
                B = a(190286),
                D = a(734767),
                L = a(782642),
                F = a(725516),
                M = a(634455),
                H = a(413713),
                z = a(934265),
                N = a(898673),
                W = (a(585488), a(351743)),
                j = a.n(W),
                V = a(726426),
                U = a.n(V);
            const K = N.Z,
                O = () => {
                    const e = n.useMemo(() => U()(), []),
                        [t, a] = j()(K);
                    return [
                        n.useCallback(
                            ({ amount: a }) =>
                                new Promise((n, r) => {
                                    t({
                                        variables: { amount_local_micro: a, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.redeem_cashback?.transaction?.id,
                                                c = e?.redeem_cashback?.transaction?.transaction_status,
                                                l = e?.redeem_cashback?.transaction?.challenge_id,
                                                i = e?.redeem_cashback?.errors;
                                            a && c ? n({ transactionId: a, status: c, challengeId: l }) : r(i || t);
                                        },
                                        onError: r,
                                        updater: (e, t) => {
                                            const a = t?.redeem_cashback?.transaction?.transaction_status,
                                                n = t?.redeem_cashback?.transaction?.reason_code;
                                            (0, T.H_)(e, { status: a, reasonCode: n });
                                        },
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                Y = "Cash Back",
                $ = (e) => `${e} will be transferred to your balance. Keep spending to earn more cash back.`,
                q = ({ cashbackRate: e }) => {
                    const t = (0, F.z)(),
                        a = (0, x.jh)(),
                        c = (0, L.p)(),
                        i = (0, A.useHistory)(),
                        [d, m] = n.useState(!1),
                        { permissions: u, roles: p } = (0, Z.Z)({ fetchKey: "Payments" }),
                        y = !(0, T.Fs)({ permissions: u, permission: E.d.RedeemCashback }),
                        [h, g] = O(),
                        { cashback: f } = (0, z.Z)(),
                        b = f?.available_amount_local_micro;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-cashback", action: "impression" });
                    }, [t]);
                    const k = b ? (0, T.vw)({ amount: b, currency: f?.currency }) : "",
                        P = n.useCallback(() => {
                            b &&
                                (t.scribe({ page: "money", section: "card-cashback", element: "redeem", action: "click" }),
                                h({ amount: b })
                                    .then(({ challengeId: e, status: t, transactionId: a }) => {
                                        const n = k ? (({ formattedAmount: e }) => `You redeemed ${e} cash back successfully.`)({ formattedAmount: k }) : null,
                                            r = (0, T.wu)({ status: t, challengeId: e });
                                        r ? i.push(r, { challengeId: e, successMessage: n, challengeInitiator: C.kW.transaction, recordId: a }) : (m(!1), n && c({ text: n }));
                                    })
                                    .catch((e) => {
                                        const t = (0, H.XE)({ errors: e, roles: p });
                                        t ? i.replace(t, { redirectPath: C.Tb, closePath: C.Tb }) : c({ text: (0, H.kJ)({ errors: e }).message });
                                    }));
                        }, [b, t, h, k, i, c, p]),
                        _ = !b || (0, T.gx)(b) <= 0,
                        v = n.useCallback(() => {
                            m(!0);
                        }, []),
                        I = n.useCallback(() => {
                            m(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { "aria-label": Y, containerStyle: a.tile, stackLayoutUpperStyle: x.ZP.upper, upper: n.createElement(r.Z, { style: x.ZP.column }, n.createElement(r.Z, { style: x.ZP.rowSpaceBetween }, n.createElement(s.ZP, { color: "gray700" }, Y), e && n.createElement(R.ZP, { background: "white" }, (0, T.fq)({ rate: e }))), b ? n.createElement(M.Z, { amount: b }) : null, _ ? null : n.createElement(l.ZP, { disabled: y, onClick: v, type: "primaryOutlined" }, "Redeem for cash")), withInteractiveStyling: !1 }), d ? n.createElement(B.Z, { Icon: D.default, cancelButtonLabel: "Not now", confirmButtonDisabled: g, confirmButtonLabel: "Confirm", confirmButtonType: "primary", headline: "Redeem for cash?", iconStyle: x.ZP.alignStart, onCancel: I, onConfirm: P, text: $(k), withCancelButton: !0 }) : null);
                },
                G = { context: "ShippingStatus" };
            function J(e) {
                return n.createElement(k.H, { errorConfig: G }, n.createElement(q, e));
            }
            const X = n.memo(J),
                Q = { front: "https://pbs.twimg.com/static/money/mock-card-landscape-front.jpg", back: "https://pbs.twimg.com/static/money/mock-card-landscape-back.jpg" };
            var ee = a(674132),
                te = a.n(ee),
                ae = a(684779),
                ne = a(717160),
                re = a(711223),
                ce = a(58399),
                le = a(633806);
            const ie = a(914507).Z,
                oe = () => {
                    const [e, t] = j()(ie);
                    return [
                        n.useCallback(
                            ({ cardId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.activate_issued_card?.errors,
                                                c = e?.activate_issued_card?.challenge_id;
                                            c ? a({ challengeId: c }) : n(r || t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            var se = a(526274),
                de = a(353391),
                me = a.n(de),
                ue = a(482924);
            const pe = se.Z,
                ye = ({ paymentMethodId: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, ue.A)(pe, { payment_method_id: e }),
                        r = t?.get_payment_method?.__id ?? "get_payment_method";
                    return (
                        me()([r], () => {
                            a();
                        }),
                        { data: t, refetchStatus: n }
                    );
                },
                he = te().jade381b,
                ge = ({ card: e, disabled: t }) => {
                    const a = (0, F.z)(),
                        c = (0, x.jh)(),
                        l = (0, L.p)(),
                        i = (0, A.useHistory)(),
                        d = e.rest_id,
                        [m, u] = oe(),
                        { data: p } = ye({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const y = n.useCallback(() => {
                            a.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                m({ cardId: d })
                                    .then(({ challengeId: e }) => {
                                        e && i.push(C.vw, { challengeId: e, challengeInitiator: C.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        l({ text: (0, H.kJ)({ errors: e }).message });
                                    });
                        }, [a, m, d, i, l]),
                        {
                            Icon: h,
                            action: g,
                            disabled: f,
                            subtitle: E,
                            title: b,
                        } = n.useMemo(() => {
                            const e = p?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis,
                                n = a ? new Date(parseInt(a, 10)) : void 0,
                                r = !!n && n < new Date();
                            switch (t) {
                                case le.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: n ? ((c = he(n)), `Card arrived on ${c}`) : null, Icon: ae.default, action: y, disabled: u };
                                case le.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: "Activate your card once its arrived", Icon: ne.default, action: r ? y : void 0, disabled: u };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: re.default };
                            }
                            var c;
                        }, [p?.get_payment_method?.shipping, u, y]);
                    return n.createElement(o.Z, { "aria-label": b, containerStyle: c.tile, disabled: t || f, onClick: g, stackLayoutUpperStyle: x.ZP.upper, upper: n.createElement(r.Z, { style: x.ZP.rowSpaceBetween }, n.createElement(r.Z, { style: x.ZP.row }, n.createElement(h, { style: x.ZP.icon }), n.createElement(r.Z, null, n.createElement(s.ZP, null, b), E ? n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, E) : null)), g ? n.createElement(ce.default, { style: x.ZP.centeredIcon }) : null), withInteractiveStyling: !!g });
                },
                fe = { context: "ShippingStatus" };
            function Ee(e) {
                return n.createElement(k.H, { errorConfig: fe }, n.createElement(ge, e));
            }
            const be = n.memo(Ee);
            var ke = a(866432),
                Ce = a(497366),
                Ze = a(776588),
                Pe = a(883229),
                _e = a(943914),
                ve = a(412450),
                Ie = a(529438);
            const we = a(456221).Z,
                Se = () => {
                    const [e, t] = j()(we),
                        a = (0, A.useHistory)();
                    return [
                        n.useCallback(
                            ({ cardId: t, nonce: n }) =>
                                new Promise((r, c) => {
                                    e({
                                        variables: { cardId: t, nonce: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_payment_method_session?.errors,
                                                l = e?.create_payment_method_session?.session?.provider_token,
                                                i = e?.create_payment_method_session?.challenge_id;
                                            i ? a.push(C.vw, { challengeId: i, challengeInitiator: C.kW.viewCardDetails, closePath: C.gp }) : l ? r(l) : c(n || t);
                                        },
                                        onError: c,
                                    });
                                }),
                            [e, a],
                        ),
                        t,
                    ];
                },
                xe = ({ cardId: e }) => {
                    const t = (0, ke.useStripe)(),
                        [a, r] = n.useState();
                    return (
                        n.useEffect(() => {
                            t &&
                                t.createEphemeralKeyNonce({ issuingCard: e }).then(({ nonce: e }) => {
                                    r(e);
                                });
                        }, [e, t]),
                        a
                    );
                },
                Te = { type: "CustomRetry", content: () => null },
                Ae = [
                    { domId: "card-number", key: "issuingCardNumberDisplay", label: "Card Number", skeletonWidth: 200, wordPercentWidths: [15, 15, 15, 15] },
                    { key: "name", label: "Cardholder Name" },
                    { domId: "card-expiry", key: "issuingCardExpiryDisplay", label: "EXP", skeletonWidth: 40 },
                    { domId: "card-cvc", label: "CVV", key: "issuingCardCvcDisplay", skeletonWidth: 28 },
                ],
                Re = ({ cardId: e, isLoading: t, refetch: a, setIsLoading: c }) => {
                    const [l, i] = n.useState(!1),
                        o = (0, ke.useStripe)(),
                        d = n.useMemo(() => o?.elements?.({ fonts: [{ family: "ProtoMono", src: `url(${C.gF})` }] }), [o]),
                        [u] = Se(),
                        p = xe({ cardId: e });
                    n.useEffect(() => {
                        (async () => {
                            if (!p || !d || l) return;
                            const t = await u({ cardId: e, nonce: p });
                            Ae.forEach(({ domId: a, key: n }) => {
                                if (a) {
                                    d.create(n, { issuingCard: e, nonce: p, ephemeralKeySecret: t, style: { base: { color: "#000000", fontFamily: "ProtoMono", fontSize: `${m.default.theme.fontSizesPx.headline2}px` } } }).mount(`#${a}`);
                                }
                            }),
                                i(!0),
                                setTimeout(() => {
                                    c(!1);
                                }, 800);
                        })();
                    }, [d, e, u, a, p, c, l]);
                    const y = (0, Ie.Z)();
                    return n.createElement(
                        r.Z,
                        { style: De.cardDetails },
                        Ae.map((e) => n.createElement(r.Z, { key: e.key, style: De.element }, n.createElement(s.ZP, { color: "gray500", size: "subtext2", style: De.fontFamily }, e.label), e.domId ? n.createElement(n.Fragment, null, t ? n.createElement(Ze.Z, { color: "gray700", lineHeightPx: 20, maxWidthPx: e.skeletonWidth, withBorderRadius: !0, wordHeightPx: 1, wordPercentWidths: e.wordPercentWidths ?? [100], wordSpacingPx: 12 }) : null, n.createElement(r.Z, { id: e.domId, style: t ? De.hide : null })) : n.createElement(s.ZP, { color: "alwaysBlack", size: "headline2", style: De.fontFamily }, y))),
                    );
                },
                Be = (e) => {
                    const { stripePKey: t } = (0, ve.Z)(),
                        a = n.useMemo(() => (0, Ce.loadStripe)(t), [t]);
                    return n.createElement(ke.Elements, { stripe: a }, n.createElement(Re, e));
                },
                De = m.default.create((e) => ({ cardDetails: { position: "absolute", top: e.spaces.space32, start: e.spaces.space16, end: e.spaces.space16 }, element: { display: "flex", flexDirection: "column", gap: e.spaces.space4, marginBottom: e.spaces.space8 }, hide: { display: "none" }, fontFamily: { fontFamily: "ProtoMono" } })),
                Le = { context: "STRIPE_ELEMENTS" },
                Fe = (e) => n.createElement(Pe.N, { errorConfig: Le, fallback: Te }, n.createElement(_e.B, { fallback: null }, n.createElement(Be, e))),
                Me = n.memo(Fe),
                He = { page: "money", section: "cards" },
                ze = "Money",
                Ne = "Your card is locked",
                We = "Card",
                je = (e) => {
                    const t = (0, x.jh)(),
                        { fetchCount: a, permissions: m } = (0, Z.Z)({ fetchKey: "Payments" }),
                        [u, b] = n.useState(!1),
                        [k, P] = n.useState(!1),
                        { activeVirtualCards: v, cards: I, cashbackRate: A, inactivePhysicalCards: R } = (0, w.Z)(),
                        { handleDeferredPreferencesChange: B, isInProgress: D, preferences: L } = (0, S.Z)(),
                        F = n.useCallback(() => {
                            B("enable_card_payments", !1);
                        }, [B]),
                        M = n.useCallback(() => {
                            B("enable_card_payments", !0);
                        }, [B]),
                        H = !(0, T.aY)(m),
                        z = !(0, T.Fs)({ permissions: m, permission: E.d.RequestIssuedCard }),
                        N = !L.enable_card_payments,
                        W = v?.[0]?.core?.details_provider_reference?.id,
                        j = n.useCallback(() => {
                            P(!0), b(!0);
                        }, []),
                        V = n.useCallback(() => {
                            P(!1), b(!1);
                        }, []);
                    return n.createElement(
                        n.Fragment,
                        null,
                        I && I?.length > 0
                            ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(r.Z, { style: Ve.imageContainer }, n.createElement(r.Z, { style: [Ve.card, k ? Ve.flipped : null] }, n.createElement(r.Z, { style: k ? Ve.cardBack : null }, n.createElement(c.Z, { ariaLabel: We, source: Q.front, style: [Ve.image, k ? Ve.hide : null] }), n.createElement(c.Z, { ariaLabel: We, source: Q.back, style: [Ve.image, k ? null : Ve.hide] }), k && W ? n.createElement(Me, { cardId: W, isLoading: u, refetch: a, setIsLoading: b }) : null, W ? n.createElement(l.ZP, { disabled: u, fontWeight: "normal", icon: u ? void 0 : k ? n.createElement(p.default, null) : n.createElement(y.default, null), onClick: k ? V : j, size: "xSmall", style: Ve.showDetailsButton, type: "onMediaWhiteFilled" }, u ? n.createElement(i.Z, { size: "small", style: Ve.loader }) : k ? "Hide card details" : "Show card details") : null))),
                                  R && R?.length > 0 ? n.createElement(be, { card: R[0], disabled: z }) : null,
                                  n.createElement(X, { cashbackRate: A }),
                                  N ? n.createElement(o.Z, { "aria-label": Ne, containerStyle: t.tile, stackLayoutUpperStyle: x.ZP.upper, upper: n.createElement(r.Z, { style: x.ZP.row }, n.createElement(h.default, { style: x.ZP.icon }), n.createElement(r.Z, null, n.createElement(s.ZP, null, Ne), n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, "Future transactions would be declined."))), withInteractiveStyling: !1 }) : null,
                                  n.createElement(r.Z, { style: t.pivotTileContainer }, N ? n.createElement(d.Z, { containerStyle: t.pivotTile, disabled: H, icon: g.default, iconColor: "text", isCompact: !0, isLoading: D, onClick: M, text: "Unlock card", withInteractiveStyling: !0 }) : n.createElement(d.Z, { containerStyle: t.pivotTile, disabled: H, icon: h.default, iconColor: "text", isCompact: !0, isLoading: D, onClick: F, text: "Lock card", withInteractiveStyling: !0 }), n.createElement(d.Z, { containerStyle: t.pivotTile, disabled: z, icon: f.default, iconColor: "text", isCompact: !0, link: z ? void 0 : C.SR, text: "Change pin", withInteractiveStyling: !0 })),
                              )
                            : n.createElement(_.Z, { to: C.lf }),
                    );
                },
                Ve = m.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, end: e.spaces.space8, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto", perspective: "1000px", perspectiveOrigin: "center" }, card: { position: "relative", transformStyle: "preserve-3d", transition: "transform 0.4s ease-out" }, cardBack: { transform: "rotateX(180deg)", transformStyle: "preserve-3d" }, flipped: { transform: "rotateX(180deg)" }, loader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space2 }, hide: { display: "none" } })),
                Ue = { context: "ACCOUNT_CARDS" },
                Ke = (e) => {
                    const { history: t } = e,
                        a = (0, x.jh)(),
                        r = n.useCallback(() => n.createElement(u.Z, { style: a.root, withWideContainer: !0 }, n.createElement(k.H, { errorConfig: Ue }, n.createElement(I.Z, null), n.createElement(k.H, { errorConfig: Ue }, n.createElement(je, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(P.nO, { namespace: He }, n.createElement(b.Z, { backLocation: C.gp, documentTitle: ze, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(v.Z, null), sidebarContent: null, title: ze }));
                },
                Oe = n.memo(Ke);
        },
        67356: (e, t, a) => {
            a.r(t), a.d(t, { default: () => k });
            var n = a(807896),
                r = a(202784),
                c = a(107267),
                l = a(529356),
                i = a(674132),
                o = a.n(i),
                s = a(883229),
                d = a(943914),
                m = a(514639),
                u = a(445664),
                p = a(743080);
            const y = o().j24c37b2,
                h = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                g = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: a }) => {
                    const n = (0, c.useHistory)(),
                        i = n.location?.state?.errors,
                        o = i?.[0]?.id,
                        s = o ? h[o] : null,
                        d = r.useCallback(() => {
                            n.replace(a ? m.gp : "/");
                        }, [n, a]);
                    return r.createElement(l.Z, { actionLabel: y, enableMaskForDismiss: !0, graphicDisplayMode: "illustration", graphicStyle: p.ir, headline: e, isFullHeightOnMobile: !0, onAction: d, onClose: d, subtext: s ?? t, supportUrl: m.N6 });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.4802757a.js.map
