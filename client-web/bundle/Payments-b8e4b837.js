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
                o = a(165822),
                i = a(154003),
                s = a(392237),
                d = a(72591),
                m = a(436117),
                u = a(980407),
                p = a(736063),
                y = a(782642),
                h = a(514639),
                g = a(445664),
                f = a(293115),
                b = a(634455),
                k = a(160144),
                E = a(934265),
                P = a(57335),
                Z = a(743080),
                C = a(727384);
            const _ = { page: "money", section: "account" },
                v = "Verify your identity",
                I = (e) => {
                    const { id: t, permissions: a } = (0, g.Z)({ fetchKey: "Payments" }),
                        { balance: s } = (0, E.Z)(),
                        { interest: u } = (0, P.Z)(),
                        p = (0, y.p)(),
                        f = (0, Z.jh)(),
                        _ = (0, C.Gs)(a),
                        I = n.useMemo(() => a?.includes(m.d.CreateWithdrawal) || a?.includes(m.d.CreateDeposit), [a]),
                        w = a?.includes(m.d.CreateDeposit),
                        S = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case k.T.accountNumbercopiedToClipboard:
                                        p({ text: "Account number copied to clipboard." });
                                        break;
                                    case k.T.routingNumbercopiedToClipboard:
                                        p({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [p],
                        );
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { style: f.container }, n.createElement(r.Z, { style: T.flexCol, testID: "account-balance" }, n.createElement(c.ZP, { size: "headline2", weight: "bold" }, "Balance"), n.createElement(r.Z, null, s ? n.createElement(b.Z, { amount: s.available_amount_local_micro }) : null)), u ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: T.interest }, u.apy && n.createElement(r.Z, { style: T.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Current interest rate"), n.createElement(c.ZP, null, (0, C.Bj)({ apy: u.apy }))), n.createElement(r.Z, { style: T.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Total interest earned"), n.createElement(b.Z, { amount: u.earned.local_micro, currency: u.pending.currency, size: "body", weight: "normal" })), u.pending && n.createElement(r.Z, { style: T.flexGap }, n.createElement(c.ZP, { color: "gray700" }, "Pending interest"), n.createElement(b.Z, { amount: u.pending.local_micro, currency: u.pending.currency, size: "body", weight: "normal" }))), n.createElement(l.Z, { spacing: "space8" })) : null, I ? n.createElement(r.Z, { style: T.flexCol, testID: "account-details" }, n.createElement(c.ZP, { size: "headline2", weight: "bold" }, "Account details"), n.createElement(o.Z, { "aria-label": v, containerStyle: f.tile, stackLayoutUpperStyle: T.routing, upper: t ? n.createElement(k.Z, { eventCallback: S, linkType: h.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 })) : _ ? n.createElement(r.Z, { style: T.flexCol }, n.createElement(c.ZP, { size: "headline1", weight: "bold" }, "Verification needed"), n.createElement(c.ZP, { color: "gray700" }, "Verify your identity to unlock your account and routing numbers for secure payments."), n.createElement(i.ZP, { link: { pathname: h.AU.tier2.verifyIdentityPath, state: { closePath: h.l_, redirectPath: h.l_ } }, type: "primaryFilled" }, v)) : null),
                        w ? n.createElement(r.Z, { style: f.footer }, n.createElement(i.ZP, { icon: n.createElement(d.default, null), link: h.IN, type: "secondaryFilled" }, "Deposit funds")) : null,
                    );
                },
                w = { context: "ACCOUNT_DETAILS" },
                S = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(u.Z, { backButtonType: "close", history: t, onBackClick: a }, n.createElement(f.nO, { namespace: _ }, n.createElement(p.H, { errorConfig: w }, n.createElement(I, e))));
                },
                T = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                x = n.memo(S);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var n = a(202784),
                r = a(325686),
                c = a(437429),
                l = a.n(c),
                o = a(107267),
                i = a(392237),
                s = a(731708),
                d = a(167630),
                m = a(529356),
                u = a(515510),
                p = a(883229),
                y = a(782642),
                h = a(514639),
                g = a(445664),
                f = a(698478),
                b = a(725516),
                k = a(43429),
                E = a(743080),
                P = a(727384);
            const Z = "Verifying your identity",
                C = "This may take a few seconds.",
                _ = "Something went wrong. Please try again later.",
                v = "Updating your profile",
                I = { [h.P_.onboarding]: { headline: "Setting up your account" }, [h.P_.upgradeToKycVerified]: { headline: Z, targetRole: u.N.KycVerified, challengeCompleteMessage: k.q9.completeKyc }, [h.P_.upgradeToKycDocumentsVerified]: { headline: Z, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: k.q9.completeDocv }, [h.P_.selfieVerification]: { headline: Z, targetRole: u.N.SelfieVerified, challengeCompleteMessage: k.q9.completeSelfie }, [h.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [h.P_.updateName]: { headline: v }, [h.P_.updateAddress]: { headline: v } },
                w = i.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                S = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: c, redirectPath: i, redirectState: u, targetRole: p }) => {
                    const Z = (0, o.useHistory)(),
                        v = l()(),
                        S = (0, b.z)(),
                        T = (0, y.p)(),
                        { headline: x, errorMessage: A = _, targetRole: D, subtext: M = C, challengeCompleteMessage: B } = I[c],
                        R = p ?? D,
                        L = n.useMemo(() => n.createElement(r.Z, { style: { width: "100%" } }, n.createElement(s.ZP, null, M), n.createElement(d.Z, { style: w.activityIndicator })), [M]);
                    n.useEffect(() => {
                        S.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [S]);
                    const z = n.useCallback(
                        (e) => {
                            clearInterval(e), Z.replace(a ?? h.gp), T({ text: A });
                        },
                        [Z, a, T, A],
                    );
                    return (
                        n.useEffect(() => {
                            let a = 0;
                            const n = () => {
                                a >= k.wG
                                    ? (S.scribe({ page: "payments-poller", section: "polling", action: "failure" }), z(r))
                                    : ((a += 1),
                                      (0, g.v)({ environment: v })
                                          .then((a) => {
                                              const { permissions: n, roles: l } = a ?? {},
                                                  o = (0, P.jm)({ roles: l }),
                                                  s = (0, P.iv)({ roles: l }),
                                                  d = (0, f.rW)({ redirectPath: s ? h.Xy : o ? h.wD : i, permissions: n, roles: l });
                                              switch (c) {
                                                  case h.P_.onboarding:
                                                      n && l && d && (clearInterval(r), Z.replace(d));
                                                      break;
                                                  case h.P_.selfieVerification:
                                                  case h.P_.upgradeToKycVerified:
                                                  case h.P_.upgradeToKycDocumentsVerified:
                                                      if (l && l.includes(R)) {
                                                          clearInterval(r), (0, P.J$)(v);
                                                          const a = (0, P.gx)({ roles: l });
                                                          s ? Z.replace(h.Xy) : e && B ? Z.replace((0, P.Ix)({ challengeInitiator: t }), { redirectPath: i, redirectState: u, challengeId: e, message: B }) : a ? Z.replace(h.Am) : o ? Z.replace(h.wD) : Z.replace(i ?? h.gp, u);
                                                      }
                                                      (0, P.ab)({ roles: l }) && (clearInterval(r), (0, P.J$)(v), Z.replace(h.gp));
                                                      break;
                                                  case h.P_.autoclaim:
                                                      l && !(0, P.jm)({ roles: l }) && (clearInterval(r), Z.replace(i ?? h.gp, u));
                                                      break;
                                                  case h.P_.checkPendingTransactions:
                                                      l && !(0, P.gx)({ roles: l }) && (clearInterval(r), Z.replace(i ?? h.gp, u));
                                                      break;
                                                  case h.P_.updateName:
                                                  case h.P_.updateAddress:
                                                      n && l && (clearInterval(r), (0, P.J$)(v), Z.replace(s ? h.Xy : h.iE.personal));
                                              }
                                          })
                                          .catch(() => {
                                              z(r);
                                          }));
                            };
                            n();
                            const r = setInterval(n, k.Ln);
                            return () => clearInterval(r);
                        }, [S, v, z, Z, c, i, R, u, e, t, B]),
                        n.createElement(m.Z, { graphicDisplayMode: "illustration", graphicStyle: E.ir, headline: x, onAction: () => {}, subtext: L })
                    );
                },
                T = { context: "PaymentsAccountsPoller" },
                x = (e) => n.createElement(p.N, { errorConfig: T }, n.createElement(S, e)),
                A = n.memo(x);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => V });
            var n = a(202784),
                r = a(108362),
                c = a(252021),
                l = a(736063),
                o = a(514639),
                i = a(293115),
                s = a(575123),
                d = a(452275),
                m = a(743080),
                u = a(807896),
                p = a(256179),
                y = a(325686),
                h = (a(585488), a(500200)),
                g = a(731708),
                f = a(165822),
                b = a(392237),
                k = a(684008),
                E = a(488746),
                P = a(41065),
                Z = a(311687),
                C = a(671830),
                _ = a(507651),
                v = a(847347),
                I = a(578719),
                w = a(43429),
                S = a(412100),
                T = a(825941);
            const x = p.Z,
                A = { [C.W.CreditCardBack]: k.default, [C.W.FollowArrows]: E.default, [C.W.PeopleStroke]: P.default, [C.W.Clock]: Z.default },
                D = (e) => {
                    const t = (0, m.jh)(),
                        { selectedFilter: a, withHeader: r } = e,
                        { data: c, fetchNext: l } = (0, T.Z)({ searchFilterId: a }),
                        o = c?.get_transactions;
                    return n.createElement(n.Fragment, null, o ? n.createElement(y.Z, null, r ? n.createElement(y.Z, { style: m.ZP.header }, n.createElement(g.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, n.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: m.ZP.upper, upper: n.createElement(I.Z, { emptyStateDescription: "You have not made any transactions yet.", fetchNext: l, slice: o }), withInteractiveStyling: !1 })) : null);
                },
                M = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, S.Z)();
                    return n.createElement(n.Fragment, null, r ? n.createElement(v.Z, { data: t, fetchNext: a, type: "transaction" }) : null, n.createElement(D, (0, u.Z)({}, e, { withHeader: r })));
                },
                B = b.default.create(() => ({ tabStrip: { width: "100%" } })),
                R = { context: "TRANSACTIONS_LIST" },
                L = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, r] = n.useState(t),
                        c = (0, h.useLazyLoadQuery)(x),
                        o = (c.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: n, title: c }) => ({ key: n, label: c, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: n } }, isActive: () => a === n, onClick: () => r(n) })),
                        i = a === w.$W;
                    return n.createElement(n.Fragment, null, o.length && n.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: o, style: B.tabStrip }), n.createElement(l.H, { errorConfig: R }, i ? n.createElement(M, (0, u.Z)({}, e, { selectedFilter: a })) : n.createElement(D, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                z = n.memo(L),
                F = { page: "money", section: "balance" },
                N = "Money",
                j = { context: "ACCOUNT_ACTIVITY" },
                H = (e) => {
                    const { history: t } = e,
                        a = (0, m.jh)(),
                        u = n.useCallback(() => n.createElement(n.Fragment, null, n.createElement(r.Z, { style: a.root, withWideContainer: !0 }, n.createElement(l.H, { errorConfig: j }, n.createElement(d.Z, null), n.createElement(l.H, { errorConfig: j }, n.createElement(z, e))))), [a.root, e]),
                        p = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(i.nO, { namespace: F }, n.createElement(c.Z, { backLocation: o.gp, documentTitle: N, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: n.createElement(s.Z, null), sidebarContent: null, title: N }));
                },
                V = n.memo(H);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var n = a(807896),
                r = a(202784),
                c = a(43429),
                l = a(991911);
            const o = (e) => r.createElement(l.Z, (0, n.Z)({}, e, { transferDirection: c.Rz.credit })),
                i = r.memo(o);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => z, fetchCardStatus: () => A });
            var n = a(807896),
                r = a(655729),
                c = a(202784),
                l = a(400752),
                o = a(325686),
                i = a(10622),
                s = a.n(i),
                d = (a(585488), a(437429)),
                m = a.n(d),
                u = a(107267),
                p = a(529356),
                y = a(731708),
                h = a(167630),
                g = a(392237),
                f = a(605446),
                b = a(622769),
                k = a(420182),
                E = a(883229),
                P = a(782642),
                Z = a(514639),
                C = a(725516),
                _ = a(615027),
                v = a(43429),
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
                D = ({ cardLinkId: e, onComplete: t, redirectPath: a }) => {
                    const n = (0, u.useHistory)(),
                        r = m()(),
                        l = (0, C.z)(),
                        i = (0, P.p)();
                    c.useEffect(() => {
                        l.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [l]);
                    const s = c.useCallback(
                        (e, r) => {
                            clearInterval(e), i({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? Z.gp);
                        },
                        [t, n, a, i],
                    );
                    return (
                        c.useEffect(() => {
                            let c = 0;
                            const o = () => {
                                c >= v.wG
                                    ? (l.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), s(i))
                                    : ((c += 1),
                                      A({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: c, status: l } = e ?? {};
                                              switch (l) {
                                                  case b.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(i), (0, w.ve)(r), t(), n.replace(a ?? Z.gp);
                                                      break;
                                                  case b.G.BankCardLinkingSessionStatusRejected:
                                                      s(i, c ? T[c] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              s(i);
                                          }));
                            };
                            o();
                            const i = setInterval(o, v.Ln);
                            return () => clearInterval(i);
                        }, [l, r, s, n, e, a, t]),
                        c.createElement(p.Z, { graphicDisplayMode: "illustration", graphicStyle: I.ir, headline: "Verifying your card", onAction: () => {}, subtext: c.createElement(o.Z, { style: B.container }, c.createElement(y.ZP, null, "This may take a few seconds."), c.createElement(h.Z, { style: B.activityIndicator })) })
                    );
                },
                M = () => {
                    const e = (0, l.Dv)(k.lZ),
                        [t, a] = c.useState();
                    c.useEffect(() => {
                        e.get(S.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = c.useCallback(() => {
                        e.delete(S.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? c.createElement(D, (0, n.Z)({}, t, { onComplete: r })) : c.createElement(_.Z, { to: Z.gp })) : c.createElement(h.Z, { style: B.activityIndicator });
                },
                B = g.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                R = { context: "BankCardPoller" },
                L = (e) => c.createElement(E.N, { errorConfig: R }, c.createElement(M, null)),
                z = c.memo(L);
        },
        224058: (e, t, a) => {
            a.d(t, { a: () => n });
            const n = "rweb.money.bankCardPolling";
        },
        578453: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            a(136728);
            var n = a(202784),
                r = a(400752),
                c = a(325686),
                l = a(107267),
                o = a(731708),
                i = a(167630),
                s = a(362075),
                d = a(392237),
                m = a(420182),
                u = a(980407),
                p = a(736063),
                y = a(952793),
                h = a(514639),
                g = a(293115),
                f = a(743080),
                b = a(224058),
                k = a(986092),
                E = (a(585488), a(351743)),
                P = a.n(E),
                Z = a(234107),
                C = a(727384);
            const _ = k.Z,
                v = { light: Z.M.BankCardLinkingSessionThemeLight, dim: Z.M.BankCardLinkingSessionThemeDimmed, dark: Z.M.BankCardLinkingSessionThemeDark },
                I = () => {
                    const [e] = P()(_),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: v[(0, C.gh)()] ?? Z.M.BankCardLinkingSessionThemeLight },
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
                        d = (0, l.useHistory)(),
                        [p, k] = n.useState(!1),
                        E = (0, f.jh)(),
                        P = d.location?.state,
                        Z = P?.redirectPath,
                        C = (0, y.JY)("payments_crb_iframe_delay_msecs", 0),
                        _ = n.useMemo(() => ({ pathname: h.ac, state: P ?? {} }), [P]),
                        v = n.createElement(c.Z, { style: E.footer }, n.createElement(o.ZP, { align: "center", color: "text", link: _ }, "Use a bank account")),
                        T = n.useCallback(() => {
                            C
                                ? setTimeout(() => {
                                      k(!0);
                                  }, C)
                                : k(!0),
                                a?.id && t.set(b.a, { redirectPath: Z, cardLinkId: a.id });
                        }, [C, Z, a, t]),
                        x = n.useCallback(() => {
                            Z === h.iE.bankAccounts ? d.push(h.iE.bankAccounts) : d.push(h.gp);
                        }, [d, Z]);
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: v, history: d, onBackClick: x, withoutBottomBarMobile: !0 }, n.createElement(g.nO, { namespace: S }, n.createElement(c.Z, { style: E.container }, n.createElement(o.ZP, { align: "center", size: "title2", style: f.ZP.title, weight: "heavy" }, w), !p && n.createElement(i.Z, { style: f.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(s.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: T, src: a.iframe_url, style: p ? M.iframe : M.hide, title: w }) : null)));
                },
                x = { context: "BANK_CARD" },
                A = (e) => n.createElement(p.H, { errorConfig: x }, n.createElement(T, e)),
                D = n.memo(A),
                M = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", flex: 1 }, hide: { display: "none" } }));
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var n = a(202784),
                r = a(437429),
                c = a.n(r),
                l = a(107267),
                o = a(736063),
                i = a(514639),
                s = a(725516),
                d = a(160144),
                m = a(727384);
            const u = (e) => {
                    const t = (0, s.z)(),
                        a = (0, l.useHistory)(),
                        r = c()(),
                        o = a.location?.state?.skipTerms;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-onboard", action: "impression" });
                    }, [t]);
                    const u = n.useCallback(
                        (e) => {
                            const { errors: t, message: n } = e.data;
                            switch (n) {
                                case d.T.success:
                                    (0, m.uN)(r), a.replace(i.Tb);
                                    break;
                                case d.T.failure:
                                    a.replace(i.D$, { errors: t });
                                    break;
                                case d.T.kyc:
                                    a.replace(i.AU.tier2.verifyIdentityPath, { redirectPath: i.lf, requestedField: i.q3.address });
                                    break;
                                case d.T.stepUpDocv:
                                    a.replace(i.AU.tier3.verifyIdentityPath, { redirectPath: i.lf });
                            }
                        },
                        [r, a],
                    );
                    return n.createElement(d.Z, { additionalParams: o ? [{ key: "skipTerms", value: o }] : void 0, eventCallback: u, linkType: i.P_.cardOnboarding });
                },
                p = { context: "CardOnboard" };
            function y(e) {
                return n.createElement(o.H, { errorConfig: p }, n.createElement(u, e));
            }
            const h = n.memo(y);
        },
        900592: (e, t, a) => {
            a.r(t), a.d(t, { default: () => se });
            var n = a(202784),
                r = a(325686),
                c = a(992942),
                l = a(154003),
                o = a(165822),
                i = a(731708),
                s = a(953035),
                d = a(392237),
                m = a(108362),
                u = a(177826),
                p = a(468670),
                y = a(777217),
                h = a(861420),
                g = a(436117),
                f = a(252021),
                b = a(736063),
                k = a(514639),
                E = a(445664),
                P = a(293115),
                Z = a(615027),
                C = a(575123),
                _ = a(452275),
                v = a(226595),
                I = a(24568),
                w = a(743080),
                S = a(727384);
            const T = { front: "https://pbs.twimg.com/static/money/mock-card-landscape-front.jpg", back: "https://pbs.twimg.com/static/money/mock-card-landscape-back.jpg" };
            a(136728);
            var x = a(107267),
                A = a(674132),
                D = a.n(A),
                M = a(684779),
                B = a(717160),
                R = a(711223),
                L = a(633806),
                z = a(782642),
                F = a(725516),
                N = a(413713),
                j = a(914507),
                H = (a(585488), a(351743)),
                V = a.n(H);
            const W = j.Z,
                U = () => {
                    const [e, t] = V()(W);
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
            var O = a(526274),
                q = a(353391),
                $ = a.n(q),
                K = a(482924);
            const Y = O.Z,
                G = ({ paymentMethodId: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, K.A)(Y, { payment_method_id: e }),
                        r = t?.get_payment_method?.__id ?? "get_payment_method";
                    return (
                        $()([r], () => {
                            a();
                        }),
                        { data: t, refetchStatus: n }
                    );
                },
                X = D().jade381b,
                J = ({ card: e, disabled: t }) => {
                    const a = (0, F.z)(),
                        c = (0, w.jh)(),
                        l = (0, z.p)(),
                        s = (0, x.useHistory)(),
                        d = e.rest_id,
                        [m, u] = U(),
                        { data: p } = G({ paymentMethodId: e.rest_id });
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
                                        l({ text: (0, N.kJ)({ errors: e }).message });
                                    });
                        }, [a, m, d, s, l]),
                        {
                            Icon: h,
                            action: g,
                            disabled: f,
                            subtitle: b,
                            title: E,
                        } = n.useMemo(() => {
                            const e = p?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis;
                            switch (t) {
                                case L.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: a ? ((n = X(new Date(parseInt(a, 10)))), `Card arrived on ${n}`) : null, Icon: M.default, action: y, disabled: u };
                                case L.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: "Activate your card once its arrived", Icon: B.default };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: R.default };
                            }
                            var n;
                        }, [p?.get_payment_method?.shipping, u, y]);
                    return n.createElement(o.Z, { "aria-label": E, containerStyle: c.tile, disabled: t || f, onClick: g, stackLayoutUpperStyle: w.ZP.upper, upper: n.createElement(r.Z, { style: w.ZP.row }, n.createElement(h, { style: w.ZP.icon }), n.createElement(r.Z, null, n.createElement(i.ZP, null, E), b ? n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, b) : null)), withInteractiveStyling: !!g });
                },
                Q = { context: "ShippingStatus" };
            function ee(e) {
                return n.createElement(b.H, { errorConfig: Q }, n.createElement(J, e));
            }
            const te = n.memo(ee),
                ae = { page: "money", section: "cards" },
                ne = "Money",
                re = "Your card is locked",
                ce = (e) => {
                    const t = (0, w.jh)(),
                        { permissions: a } = (0, E.Z)({ fetchKey: "Payments" }),
                        { cards: d, inactivePhysicalCards: m } = (0, v.Z)(),
                        { handleDeferredPreferencesChange: f, isInProgress: b, preferences: P } = (0, I.Z)(),
                        C = n.useCallback(() => {
                            f("enable_card_payments", !1);
                        }, [f]),
                        _ = n.useCallback(() => {
                            f("enable_card_payments", !0);
                        }, [f]),
                        x = !(0, S.aY)(a),
                        A = !(0, S.Fs)({ permissions: a, permission: g.d.RequestIssuedCard }),
                        D = !P.enable_card_payments;
                    return n.createElement(n.Fragment, null, d && d?.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: le.imageContainer }, n.createElement(c.Z, { ariaLabel: "Card", source: T.front, style: le.image }), n.createElement(l.ZP, { fontWeight: "normal", icon: n.createElement(u.default, null), onClick: () => {}, size: "xSmall", style: le.showDetailsButton, type: "onMediaText" }, "Show card details")), m && m?.length > 0 ? n.createElement(te, { card: m[0], disabled: A }) : null, D ? n.createElement(o.Z, { "aria-label": re, containerStyle: t.tile, stackLayoutUpperStyle: w.ZP.upper, upper: n.createElement(r.Z, { style: w.ZP.row }, n.createElement(p.default, { style: w.ZP.icon }), n.createElement(r.Z, null, n.createElement(i.ZP, null, re), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, "Future transactions would be declined."))), withInteractiveStyling: !1 }) : null, n.createElement(r.Z, { style: t.pivotTileContainer }, D ? n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: x, icon: y.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: _, text: "Unlock card", withInteractiveStyling: !0 }) : n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: x, icon: p.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: C, text: "Lock card", withInteractiveStyling: !0 }), n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: A, icon: h.default, iconColor: "text", isCompact: !0, link: A ? void 0 : k.SR, text: "Change pin", withInteractiveStyling: !0 }))) : n.createElement(Z.Z, { to: k.lf }));
                },
                le = d.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, start: e.spaces.space8, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto" } })),
                oe = { context: "ACCOUNT_CARDS" },
                ie = (e) => {
                    const { history: t } = e,
                        a = (0, w.jh)(),
                        r = n.useCallback(() => n.createElement(m.Z, { style: a.root, withWideContainer: !0 }, n.createElement(b.H, { errorConfig: oe }, n.createElement(_.Z, null), n.createElement(b.H, { errorConfig: oe }, n.createElement(ce, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(P.nO, { namespace: ae }, n.createElement(f.Z, { backLocation: k.gp, documentTitle: ne, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(C.Z, null), sidebarContent: null, title: ne }));
                },
                se = n.memo(ie);
        },
        67356: (e, t, a) => {
            a.r(t), a.d(t, { default: () => E });
            var n = a(807896),
                r = a(202784),
                c = a(107267),
                l = a(529356),
                o = a(674132),
                i = a.n(o),
                s = a(883229),
                d = a(943914),
                m = a(514639),
                u = a(445664),
                p = a(743080);
            const y = i().j24c37b2,
                h = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                g = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: a }) => {
                    const n = (0, c.useHistory)(),
                        o = n.location?.state?.errors,
                        i = o?.[0]?.id,
                        s = i ? h[i] : null,
                        d = r.useCallback(() => {
                            n.replace(a ? m.gp : "/");
                        }, [n, a]);
                    return r.createElement(l.Z, { actionLabel: y, enableMaskForDismiss: !0, graphicDisplayMode: "illustration", graphicStyle: p.ir, headline: e, isFullHeightOnMobile: !0, onAction: d, onClose: d, subtext: s ?? t, supportUrl: m.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, u.Z)({ fetchKey: "Payments" });
                    return r.createElement(g, (0, n.Z)({}, e, { isActive: t }));
                },
                b = { context: "PAYMENTS_ERROR" },
                k = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(g, (0, n.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(s.N, { errorConfig: b, fallback: t }, r.createElement(d.B, null, r.createElement(f, e)));
                },
                E = r.memo(k);
        },
        991911: (e, t, a) => {
            a.d(t, { Z: () => J });
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                l = a(514639),
                o = a(725516),
                i = a(615027),
                s = a(43429),
                d = a(436117);
            const m = Object.freeze({ [s.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} withdrawal?`, successTitle: ({ formattedAmount: e }) => `${e} withdrawal successfully scheduled.` }, [s.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} deposit?`, successTitle: ({ formattedAmount: e }) => `${e} deposit successfully scheduled.` } }),
                u = Object.freeze({ [s.Rz.debit]: d.d.CreateWithdrawal, [s.Rz.credit]: d.d.CreateDeposit });
            a(136728);
            var p = a(325686),
                y = a(731708),
                h = a(154003),
                g = a(167630),
                f = a(980407),
                b = a(445664),
                k = a(413713),
                E = a(743080),
                P = a(727384),
                Z = a(392237),
                C = a(922281),
                _ = a(125363),
                v = a(919022),
                I = a(392046),
                w = a(671738),
                S = a(226332);
            const T = ({ accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccount: r, transferDirection: c }) => {
                    const l = (0, _.v9)(v.ZP.selectViewerUser),
                        { usablePaymentMethods: o } = (0, S.Z)(),
                        { path: i } = m[c],
                        d = n.useMemo(() => `/i/money/${i}`, [i]),
                        u = n.useCallback(
                            (e) => {
                                const t = o?.find((t) => t.rest_id === e);
                                t && r && r(t);
                            },
                            [r, o],
                        ),
                        h = n.useCallback((c, l, i) => n.createElement(p.Z, { style: x.flexColumn, testID: i }, n.createElement(y.ZP, null, l), (c.type === s.dX.bank || c.type === s.dX.card) && o && r && t ? n.createElement(w.Z, { accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccountId: u, paymentMethods: o, selectedAccount: c }) : n.createElement(I.Z, { account: c })), [e, t, a, r, u, o]),
                        g = o?.find((t) => t.rest_id === e),
                        f = (0, P.Ou)(g),
                        b = l ? { accountName: { name: l.name, screenName: l.screen_name }, avatar: { uri: l.profile_image_url_https }, accountType: "X account", type: s.dX.x } : null,
                        E = c === s.Rz.debit,
                        Z = E ? b : f,
                        T = E ? f : b,
                        A = g?.core?.details?.status === C.D.LoginRequired;
                    return n.createElement(n.Fragment, null, Z ? h(Z, "From:", "sender") : null, T ? h(T, "To:", "receiver") : null, A ? n.createElement(k.ZP, { errors: [{ error_code: C.D.LoginRequired }], linkState: { redirectPath: d, paymentMethodId: e } }) : null);
                },
                x = Z.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 } })),
                A = n.memo(T);
            var D = a(236706),
                M = (a(585488), a(351743)),
                B = a.n(M),
                R = a(726426),
                L = a.n(R);
            const z = D.Z,
                F = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = B()(z);
                    return [
                        n.useCallback(
                            ({ accountId: a, amount: n }) =>
                                new Promise((r, c) => {
                                    t({
                                        variables: { amount_local_micro: n, payment_method_id: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.create_deposit?.id,
                                                n = e?.create_deposit?.transaction_status,
                                                l = e?.create_deposit?.challenge_id,
                                                o = e?.create_deposit?.errors;
                                            a ? r({ transactionId: a, status: n, challengeId: l }) : c(o || t);
                                        },
                                        updater: P.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                };
            const N = a(220474).Z,
                j = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = B()(N);
                    return [
                        n.useCallback(
                            ({ accountId: a, amount: n }) =>
                                new Promise((r, c) => {
                                    t({
                                        variables: { amount_local_micro: n, payment_method_id: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.create_withdrawal?.id,
                                                n = e?.create_withdrawal?.challenge_id,
                                                l = e?.create_withdrawal?.transaction_status,
                                                o = e?.create_withdrawal?.errors;
                                            a ? r({ transactionId: a, challengeId: n, status: l }) : c(o || t);
                                        },
                                        updater: P.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                H = ({ accountId: e, amount: t, transferDirection: a }) => {
                    const c = (0, o.z)(),
                        i = (0, r.useHistory)(),
                        d = (0, E.jh)(),
                        u = (0, P.Dc)(t),
                        [Z, C] = n.useState(null),
                        [_, v] = F(),
                        [I, w] = j(),
                        { roles: S } = (0, b.Z)({ fetchKey: "Payments" }),
                        T = v || w,
                        { confirmTitle: x, path: D } = m[a],
                        M = `/i/money/${D}`,
                        B = x({ formattedAmount: (0, P.p2)({ amount: u }) }),
                        R = n.useCallback(() => {
                            C(null);
                        }, []),
                        L = n.useMemo(() => ({ paymentMethodId: e, redirectPath: M, redirectState: { accountId: e, amount: t, step: s.ah.reviewPane }, closePath: l.gp }), [e, t, M]),
                        z = n.useCallback(() => {
                            c.scribe({ page: "money", section: D, component: "review-transfer", element: "confirm", action: "click" }), R();
                            (a === s.Rz.credit ? _ : I)({ amount: u.toString(), accountId: e })
                                .then((a) => {
                                    const { challengeId: n, status: r, transactionId: c } = a;
                                    (0, P.i7)({ status: r }) ? n && i.push(l.vw, { challengeId: n, redirectPath: M, redirectState: { accountId: e, amount: t, step: s.ah.successPane, requestId: c }, closePath: l.gp, challengeInitiator: l.kW.transaction }) : i.replace(M, { step: s.ah.successPane, amount: t, accountId: e, requestId: c });
                                })
                                .catch((e) => {
                                    const t = (0, k.XE)({ errors: e, roles: S });
                                    t ? i.replace(t, L) : C(e);
                                });
                        }, [c, D, R, a, _, I, u, e, i, M, t, S, L]),
                        N = n.useCallback(() => {
                            c.scribe({ page: "money", section: D, component: "review-transfer", element: "cancel", action: "click" });
                        }, [c, D]),
                        H = n.createElement(p.Z, { style: d.footer }, Z ? n.createElement(k.ZP, { errors: Z, linkState: L, roles: S }) : null, n.createElement(y.ZP, { size: "subtext2" }, "Please note that while transfers typically take 3 business days to complete, they may complete sooner or take longer based on a number of factors, including, for example, confirmations from your external bank. Funds may not be available in your account until the transfer is complete."), n.createElement(p.Z, { style: E.ZP.actionButtons }, n.createElement(h.ZP, { link: l.gp, onPress: N, size: "large", style: E.ZP.button, type: "primaryOutlined" }, "Cancel"), n.createElement(h.ZP, { disabled: T, onPress: z, size: "large", style: E.ZP.button, type: "primaryFilled" }, T ? n.createElement(g.Z, null) : "Confirm")));
                    return n.createElement(f.Z, { backButtonType: "back", bottomBar: H, history: i, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: d.container }, n.createElement(y.ZP, { size: "title2", style: E.ZP.title, weight: "heavy" }, B), n.createElement(A, { accountId: e, transferDirection: a })));
                },
                V = n.memo(H);
            var W = a(952793),
                U = a(984067),
                O = a(934265);
            const q = ({ transferDirection: e }) => {
                    const t = (0, o.z)(),
                        a = (0, r.useHistory)(),
                        c = (0, E.jh)(),
                        g = a.location?.state,
                        [k, Z] = n.useState(""),
                        [_, v] = n.useState(!0),
                        I = (0, W.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: w, roles: T } = (0, b.Z)({ fetchKey: "Payments" }),
                        { usablePaymentMethods: x } = (0, S.Z)(),
                        { balance: D } = (0, O.Z)(),
                        M = x?.[0],
                        [B, R] = n.useState(M),
                        L = B?.rest_id,
                        z = e === s.Rz.debit,
                        { label: F, path: N } = m[e],
                        j = !k || !_ || !L || B?.core?.details?.status !== C.D.Active,
                        H = n.useMemo(() => ({ ...g, step: s.ah.reviewPane, amount: k, accountId: L }), [L, k, g]),
                        V = `/i/money/${N}`,
                        q = n.useMemo(() => ({ pathname: V, state: H }), [V, H]),
                        $ = (0, P.DO)({ roles: T, permissions: w, actionPermission: u[e] }),
                        K = n.useCallback(() => {
                            t.scribe({ page: "money", section: N, element: "transfer", action: "click" }), $ ? a.push($, { redirectPath: V, redirectState: H, closePath: l.gp }) : a.push(q);
                        }, [t, a, N, V, q, H, $]),
                        Y = n.useCallback(() => {
                            a.push(l.gp);
                        }, [a]),
                        G = n.createElement(p.Z, { style: c.footer }, n.createElement(h.ZP, { disabled: j, onPress: K, size: "large", type: "primaryFilled" }, F)),
                        X = n.useMemo(() => ({ redirectPath: V }), [V]),
                        J = n.useMemo(() => ({ pathname: l.ac, state: X }), [X]),
                        Q = n.useMemo(() => ({ pathname: l.UA, state: X }), [X]),
                        ee = w?.includes(d.d.CreatePaymentMethod),
                        te = I && ee;
                    return L ? n.createElement(f.Z, { backButtonType: "close", bottomBar: G, history: a, onBackClick: Y, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: c.container }, n.createElement(y.ZP, { align: "center", size: "title2", style: E.ZP.title, weight: "heavy" }, z ? F : "Deposit"), n.createElement(U.Z, { amount: k, balance: D, isValid: _, label: "Enter amount", min: "1", name: "amount", setAmount: Z, setIsValid: v, validateBalance: z }), n.createElement(A, { accountId: L, addAccountLink: J, addBankCardLink: te ? Q : void 0, onSelectAccount: R, transferDirection: e }))) : n.createElement(i.Z, { to: te ? Q : ee ? J : $ ? { pathname: $, state: { redirectPath: V, closePath: l.gp } } : l.gp });
                },
                $ = n.memo(q),
                K = ({ amount: e, requestId: t, transferDirection: a }) => {
                    const c = (0, o.z)(),
                        i = (0, r.useHistory)(),
                        s = (0, E.jh)(),
                        d = (0, P.Dc)(e),
                        { path: u, successTitle: g } = m[a],
                        b = g({ formattedAmount: (0, P.p2)({ amount: d }) }),
                        k = n.useCallback(() => {
                            c.scribe({ page: "money", section: u, component: "transfer-success", element: "done", action: "click" });
                        }, [c, u]),
                        Z = n.useCallback(() => {
                            i.push(l.gp);
                        }, [i]),
                        C = n.createElement(p.Z, { style: s.footer }, n.createElement(h.ZP, { link: `${l.bR}/${t}`, onPress: k, size: "large", style: E.ZP.button, type: "primaryFilled" }, "Done"));
                    return n.createElement(f.Z, { backButtonType: "close", bottomBar: C, history: i, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: s.container }, n.createElement(y.ZP, { size: "title2", style: E.ZP.title, weight: "heavy" }, b), n.createElement(y.ZP, null, "Transfers may take up to 3 business days to complete. \n\nFunds may not be available in your account until the transfer is complete.")));
                },
                Y = n.memo(K),
                G = { context: "PaymentsExternalAccountTransfer" },
                X = ({ transferDirection: e }) => {
                    const t = (0, o.z)(),
                        a = (0, r.useHistory)(),
                        d = a.location?.state,
                        u = d?.step,
                        p = d?.amount,
                        y = d?.accountId,
                        h = d?.requestId,
                        { path: g } = m[e];
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: g, component: u, action: "impression" });
                        }, [t, u, g]),
                        n.createElement(c.H, { errorConfig: G }, p && y ? (u === s.ah.reviewPane ? n.createElement(V, { accountId: y, amount: p, transferDirection: e }) : u === s.ah.successPane && h ? n.createElement(Y, { amount: p, requestId: h, transferDirection: e }) : n.createElement(i.Z, { to: l.gp })) : n.createElement($, { transferDirection: e }))
                    );
                },
                J = n.memo(X);
        },
        743843: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Y });
            var n = a(202784),
                r = a(107267),
                c = a(360871),
                l = a(40567),
                o = a(167630),
                i = a(392237),
                s = a(676145),
                d = a(515510),
                m = a(782642),
                u = a(998564),
                p = a(514639),
                y = a(615027),
                h = a(99387),
                g = a(597897),
                f = a(325686),
                b = a(10622),
                k = a.n(b),
                E = (a(585488), a(437429)),
                P = a.n(E),
                Z = a(529356),
                C = a(731708),
                _ = a(922281),
                v = a(883229),
                I = a(725516),
                w = a(43429),
                S = a(743080);
            const T = g.Z,
                x = ({ paymentMethodId: e, redirectPath: t }) => {
                    const a = (0, r.useHistory)(),
                        c = P()(),
                        l = (0, I.z)(),
                        i = (0, m.p)();
                    n.useEffect(() => {
                        l.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [l]);
                    const s = n.useCallback(
                        (e) => {
                            clearInterval(e), a.replace(t ?? p.gp), i({ text: "Something went wrong. Please try again later." });
                        },
                        [a, t, i],
                    );
                    return (
                        n.useEffect(() => {
                            let n = 0;
                            const r = () => {
                                n >= w.wG
                                    ? (l.scribe({ page: "payment-method-poller", section: "polling", action: "failure" }), s(o))
                                    : ((n += 1),
                                      (({ environment: e, paymentMethodId: t }) =>
                                          k()(e, T, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: c, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === _.D.Active && (clearInterval(o), a.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              s(o);
                                          }));
                            };
                            r();
                            const o = setInterval(r, w.Ln);
                            return () => clearInterval(o);
                        }, [l, c, s, a, e, t]),
                        n.createElement(Z.Z, { graphicDisplayMode: "illustration", graphicStyle: S.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: n.createElement(f.Z, { style: A.container }, n.createElement(C.ZP, null, "This may take a few seconds."), n.createElement(o.Z, { style: A.activityIndicator })) })
                    );
                },
                A = i.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                D = { context: "PaymentMethodPoller" },
                M = (e) => n.createElement(v.N, { errorConfig: D }, n.createElement(x, e)),
                B = n.memo(M);
            var R = a(144098),
                L = a(351743),
                z = a.n(L),
                F = a(727384);
            const N = R.Z,
                j = () => {
                    const [e, t] = z()(N);
                    return [
                        n.useCallback(
                            ({ metadata: t, publicToken: a }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { public_token: a, metadata: t },
                                        onCompleted: (e, t) => {
                                            const a = e?.exchange_public_token?.payment_methods;
                                            a ? n() : r(t);
                                        },
                                        updater: F.QE,
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const H = a(652730).Z,
                V = () => {
                    const [e, t] = z()(H);
                    return [
                        n.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.payment_method_link_update_complete?.errors;
                                            r || t ? n(t ?? r) : a();
                                        },
                                        updater: F.QE,
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                W = "xpaymentsLinkToken",
                U = "Something went wrong. Please try again later.",
                O = ({ linkToken: e }) => {
                    const t = (0, r.useHistory)(),
                        [a, c] = n.useState(!1),
                        [i, g] = n.useState(!1),
                        [f, b] = n.useState(!1),
                        [k, E] = n.useState(null),
                        [P, Z] = n.useState(!1),
                        [C, _] = j(),
                        [v, I] = V(),
                        w = (0, m.p)(),
                        S = window.location.href,
                        T = S?.includes("oauth_state_id="),
                        x = t.location?.query?.token,
                        A = t.location?.state,
                        { linkType: D = p.P_.linkExternalAccount, token: M, redirectPath: R = p.gp, targetRole: L = d.N.KycDocumentsVerified, closePath: z, paymentMethodId: F } = A || {},
                        N = e ?? M ?? x ?? k,
                        H = n.useCallback(
                            (e, t) => {
                                switch ((u.Yh.delete(W), D)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        F &&
                                            v({ paymentMethodId: F })
                                                .then(() => {
                                                    c(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), w({ text: U });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            C({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    c(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), w({ text: U });
                                                });
                                }
                            },
                            [D, v, F, w, C],
                        ),
                        O = n.useCallback(() => {
                            b(!0);
                        }, []),
                        q = n.useCallback(() => {
                            g(!0);
                        }, []),
                        K = n.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) Z(!0);
                        }, []),
                        Y = { token: N, onSuccess: H, onLoad: q, onEvent: K, onExit: O, ...(T ? { receivedRedirectUri: S } : null) },
                        { open: G, ready: X } = (0, l.usePlaidLink)(Y);
                    if (
                        (n.useEffect(() => {
                            T &&
                                u.Yh.get(W)?.then((e) => {
                                    e && (0, s.Z)(e) && E(e);
                                });
                        }, [T]),
                        n.useEffect(() => {
                            T || u.Yh.set(W, N);
                        }, [T, N]),
                        n.useEffect(() => {
                            N && X && G();
                        }, [N, X, G]),
                        !N)
                    )
                        return T ? n.createElement(o.Z, { style: $.loadingStyle }) : n.createElement(y.Z, { to: "/" });
                    if (!i || !X) return n.createElement(o.Z, { style: $.loadingStyle });
                    switch (D) {
                        case p.P_.onboarding:
                            return P ? (a ? n.createElement(h.default, { linkType: D }) : n.createElement(y.Z, { to: R })) : null;
                        case p.P_.linkExternalAccount:
                            return _ ? n.createElement(o.Z, { style: $.loadingStyle }) : a ? n.createElement(y.Z, { to: R }) : f ? n.createElement(y.Z, { to: z ?? R }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return P && a ? n.createElement(h.default, { linkType: D, redirectPath: R, targetRole: L }) : f ? n.createElement(y.Z, { to: R }) : null;
                        case p.P_.verifyPaymentMethod:
                            return I ? n.createElement(o.Z, { style: $.loadingStyle }) : a && F ? n.createElement(B, { paymentMethodId: F, redirectPath: R }) : a || f ? n.createElement(y.Z, { to: R }) : null;
                        default:
                            return null;
                    }
                },
                q = n.memo(O),
                $ = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                K = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return c.L.Plaid, n.createElement(q, e);
                },
                Y = n.memo(K);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.4ae8a39a.js.map
