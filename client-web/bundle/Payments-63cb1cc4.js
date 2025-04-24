"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-63cb1cc4"],
    {
        127218: (e, t, a) => {
            a.d(t, { C: () => f });
            var n = a(202784),
                r = a(614983),
                o = a.n(r),
                c = a(437429),
                l = a.n(c),
                i = a(57074),
                s = a.n(i),
                d = a(10622),
                u = a.n(d),
                m = a(585488),
                p = a(71620),
                h = a(163889),
                y = a(312771),
                g = a(535338);
            function f(e, t, a) {
                const [r, c] = n.useState(!1),
                    [i, d] = n.useState(null),
                    f = l()(),
                    b = s()(t),
                    E = (0, p.po)(),
                    k = (0, g.p)(e, b, a);
                return n.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    o()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: a, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    o()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let a = e;
                                    for (const e of t) o()(!!a, "The provided path is invalid."), o()("string" == typeof e, "Unexpected value for path!"), (a = a?.[e]);
                                    return a;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(k, t) || {},
                        l = (t) => {
                            r ||
                                (c(!0),
                                u()(f, e, { ...b, cursor: t }).subscribe({
                                    complete: () => {
                                        c(!1);
                                    },
                                    error: (e) => {
                                        c(!1), d(e), E(e);
                                    },
                                }));
                        },
                        s = () => {
                            a && l(a);
                        },
                        p = () => {
                            n && l(n);
                        },
                        g = () => {
                            l(void 0);
                        };
                    return i ? { subsequentFetchStatus: y.ZP.FAILED, error: i, fetchNext: s, fetchPrevious: p, refetch: g, data: k, hasNext: Boolean(a), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? y.ZP.LOADING : y.ZP.NONE, error: void 0, fetchNext: s, fetchPrevious: p, refetch: g, data: k, hasNext: Boolean(a), hasPrevious: Boolean(n) };
                }, [e, k, r, i, f, b, E]);
            }
        },
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                c = a(661810),
                l = a(165822),
                i = a(154003),
                s = a(392237),
                d = a(72591),
                u = a(436117),
                m = a(980407),
                p = a(736063),
                h = a(782642),
                y = a(514639),
                g = a(445664),
                f = a(293115),
                b = a(634455),
                E = a(160144),
                k = a(934265),
                P = a(57335),
                Z = a(743080),
                C = a(727384);
            const _ = { page: "money", section: "account" },
                v = "Verify your identity",
                I = (e) => {
                    const { id: t, permissions: a } = (0, g.Z)({ fetchKey: "Payments" }),
                        { balance: s } = (0, k.Z)(),
                        { interest: m } = (0, P.Z)(),
                        p = (0, h.p)(),
                        f = (0, Z.jh)(),
                        _ = (0, C.Gs)(a),
                        I = n.useMemo(() => a?.includes(u.d.CreateWithdrawal) || a?.includes(u.d.CreateDeposit), [a]),
                        w = a?.includes(u.d.CreateDeposit),
                        S = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case E.T.accountNumbercopiedToClipboard:
                                        p({ text: "Account number copied to clipboard." });
                                        break;
                                    case E.T.routingNumbercopiedToClipboard:
                                        p({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [p],
                        );
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { style: f.container }, n.createElement(r.Z, { style: T.flexCol, testID: "account-balance" }, n.createElement(o.ZP, { size: "headline2", weight: "bold" }, "Balance"), n.createElement(r.Z, null, s ? n.createElement(b.Z, { amount: s.available_amount_local_micro }) : null)), m ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: T.interest }, m.apy && n.createElement(r.Z, { style: T.flexGap }, n.createElement(o.ZP, { color: "gray700" }, "Current interest rate"), n.createElement(o.ZP, null, (0, C.Bj)({ apy: m.apy }))), n.createElement(r.Z, { style: T.flexGap }, n.createElement(o.ZP, { color: "gray700" }, "Total interest earned"), n.createElement(b.Z, { amount: m.earned.local_micro, currency: m.pending.currency, size: "body", weight: "normal" })), m.pending && n.createElement(r.Z, { style: T.flexGap }, n.createElement(o.ZP, { color: "gray700" }, "Pending interest"), n.createElement(b.Z, { amount: m.pending.local_micro, currency: m.pending.currency, size: "body", weight: "normal" }))), n.createElement(c.Z, { spacing: "space8" })) : null, I ? n.createElement(r.Z, { style: T.flexCol, testID: "account-details" }, n.createElement(o.ZP, { size: "headline2", weight: "bold" }, "Account details"), n.createElement(l.Z, { "aria-label": v, containerStyle: f.tile, stackLayoutUpperStyle: T.routing, upper: t ? n.createElement(E.Z, { eventCallback: S, linkType: y.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 })) : _ ? n.createElement(r.Z, { style: T.flexCol }, n.createElement(o.ZP, { size: "headline1", weight: "bold" }, "Verification needed"), n.createElement(o.ZP, { color: "gray700" }, "Verify your identity to unlock your account and routing numbers for secure payments."), n.createElement(i.ZP, { link: { pathname: y.AU.tier2.verifyIdentityPath, state: { closePath: y.l_, redirectPath: y.l_ } }, type: "primaryFilled" }, v)) : null),
                        w ? n.createElement(r.Z, { style: f.footer }, n.createElement(i.ZP, { icon: n.createElement(d.default, null), link: y.IN, type: "secondaryFilled" }, "Deposit funds")) : null,
                    );
                },
                w = { context: "ACCOUNT_DETAILS" },
                S = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(m.Z, { backButtonType: "close", history: t, onBackClick: a }, n.createElement(f.nO, { namespace: _ }, n.createElement(p.H, { errorConfig: w }, n.createElement(I, e))));
                },
                T = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                x = n.memo(S);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var n = a(202784),
                r = a(325686),
                o = a(437429),
                c = a.n(o),
                l = a(107267),
                i = a(392237),
                s = a(731708),
                d = a(167630),
                u = a(529356),
                m = a(515510),
                p = a(883229),
                h = a(782642),
                y = a(514639),
                g = a(445664),
                f = a(698478),
                b = a(725516),
                E = a(43429),
                k = a(743080),
                P = a(727384);
            const Z = "Verifying your identity",
                C = "This may take a few seconds.",
                _ = "Something went wrong. Please try again later.",
                v = "Updating your profile",
                I = { [y.P_.onboarding]: { headline: "Setting up your account" }, [y.P_.upgradeToKycVerified]: { headline: Z, targetRole: m.N.KycVerified, challengeCompleteMessage: E.q9.completeKyc }, [y.P_.upgradeToKycDocumentsVerified]: { headline: Z, targetRole: m.N.KycDocumentsVerified, challengeCompleteMessage: E.q9.completeDocv }, [y.P_.selfieVerification]: { headline: Z, targetRole: m.N.SelfieVerified, challengeCompleteMessage: E.q9.completeSelfie }, [y.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [y.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [y.P_.updateName]: { headline: v }, [y.P_.updateAddress]: { headline: v } },
                w = i.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                S = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: o, redirectPath: i, redirectState: m, targetRole: p }) => {
                    const Z = (0, l.useHistory)(),
                        v = c()(),
                        S = (0, b.z)(),
                        T = (0, h.p)(),
                        { headline: x, errorMessage: A = _, targetRole: D, subtext: M = C, challengeCompleteMessage: B } = I[o],
                        R = p ?? D,
                        L = n.useMemo(() => n.createElement(r.Z, { style: { width: "100%" } }, n.createElement(s.ZP, null, M), n.createElement(d.Z, { style: w.activityIndicator })), [M]);
                    n.useEffect(() => {
                        S.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [S]);
                    const z = n.useCallback(
                        (e) => {
                            clearInterval(e), Z.replace(a ?? y.gp), T({ text: A });
                        },
                        [Z, a, T, A],
                    );
                    return (
                        n.useEffect(() => {
                            let a = 0;
                            const n = () => {
                                a >= E.wG
                                    ? (S.scribe({ page: "payments-poller", section: "polling", action: "failure" }), z(r))
                                    : ((a += 1),
                                      (0, g.v)({ environment: v })
                                          .then((a) => {
                                              const { permissions: n, roles: c } = a ?? {},
                                                  l = (0, P.jm)({ roles: c }),
                                                  s = (0, P.iv)({ roles: c }),
                                                  d = (0, f.rW)({ redirectPath: s ? y.Xy : l ? y.wD : i, permissions: n, roles: c });
                                              switch (o) {
                                                  case y.P_.onboarding:
                                                      n && c && d && (clearInterval(r), Z.replace(d));
                                                      break;
                                                  case y.P_.selfieVerification:
                                                  case y.P_.upgradeToKycVerified:
                                                  case y.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(R)) {
                                                          clearInterval(r), (0, P.J$)(v);
                                                          const a = (0, P.gx)({ roles: c });
                                                          s ? Z.replace(y.Xy) : e && B ? Z.replace((0, P.Ix)({ challengeInitiator: t }), { redirectPath: i, redirectState: m, challengeId: e, message: B }) : a ? Z.replace(y.Am) : l ? Z.replace(y.wD) : Z.replace(i ?? y.gp, m);
                                                      }
                                                      (0, P.ab)({ roles: c }) && (clearInterval(r), (0, P.J$)(v), Z.replace(y.gp));
                                                      break;
                                                  case y.P_.autoclaim:
                                                      c && !(0, P.jm)({ roles: c }) && (clearInterval(r), Z.replace(i ?? y.gp, m));
                                                      break;
                                                  case y.P_.checkPendingTransactions:
                                                      c && !(0, P.gx)({ roles: c }) && (clearInterval(r), Z.replace(i ?? y.gp, m));
                                                      break;
                                                  case y.P_.updateName:
                                                  case y.P_.updateAddress:
                                                      n && c && (clearInterval(r), (0, P.J$)(v), Z.replace(s ? y.Xy : y.iE.personal));
                                              }
                                          })
                                          .catch(() => {
                                              z(r);
                                          }));
                            };
                            n();
                            const r = setInterval(n, E.Ln);
                            return () => clearInterval(r);
                        }, [S, v, z, Z, o, i, R, m, e, t, B]),
                        n.createElement(u.Z, { graphicDisplayMode: "illustration", graphicStyle: k.ir, headline: x, onAction: () => {}, subtext: L })
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
                o = a(252021),
                c = a(736063),
                l = a(514639),
                i = a(293115),
                s = a(575123),
                d = a(452275),
                u = a(743080),
                m = a(807896),
                p = a(256179),
                h = a(325686),
                y = (a(585488), a(500200)),
                g = a(731708),
                f = a(165822),
                b = a(392237),
                E = a(684008),
                k = a(488746),
                P = a(41065),
                Z = a(311687),
                C = a(671830),
                _ = a(507651),
                v = a(803263),
                I = a(578719),
                w = a(43429),
                S = a(412100),
                T = a(825941);
            const x = p.Z,
                A = { [C.W.CreditCardBack]: E.default, [C.W.FollowArrows]: k.default, [C.W.PeopleStroke]: P.default, [C.W.Clock]: Z.default },
                D = (e) => {
                    const t = (0, u.jh)(),
                        { selectedFilter: a, withHeader: r } = e,
                        { data: o, fetchNext: c } = (0, T.Z)({ searchFilterId: a }),
                        l = o?.get_transactions;
                    return n.createElement(n.Fragment, null, l ? n.createElement(h.Z, null, r ? n.createElement(h.Z, { style: u.ZP.header }, n.createElement(g.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, n.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: u.ZP.upper, upper: n.createElement(I.Z, { emptyStateDescription: "You have not made any transactions yet.", fetchNext: c, slice: l }), withInteractiveStyling: !1 })) : null);
                },
                M = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, S.Z)();
                    return n.createElement(n.Fragment, null, r ? n.createElement(v.Z, { data: t, fetchNext: a, type: "transaction" }) : null, n.createElement(D, (0, m.Z)({}, e, { withHeader: r })));
                },
                B = b.default.create(() => ({ tabStrip: { width: "100%" } })),
                R = { context: "TRANSACTIONS_LIST" },
                L = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, r] = n.useState(t),
                        o = (0, y.useLazyLoadQuery)(x),
                        l = (o.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: n, title: o }) => ({ key: n, label: o, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: n } }, isActive: () => a === n, onClick: () => r(n) })),
                        i = a === w.$W;
                    return n.createElement(n.Fragment, null, l.length && n.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: l, style: B.tabStrip }), n.createElement(c.H, { errorConfig: R }, i ? n.createElement(M, (0, m.Z)({}, e, { selectedFilter: a })) : n.createElement(D, (0, m.Z)({}, e, { selectedFilter: a }))));
                },
                z = n.memo(L),
                N = { page: "money", section: "balance" },
                F = "Money",
                j = { context: "ACCOUNT_ACTIVITY" },
                H = (e) => {
                    const { history: t } = e,
                        a = (0, u.jh)(),
                        m = n.useCallback(() => n.createElement(n.Fragment, null, n.createElement(r.Z, { style: a.root, withWideContainer: !0 }, n.createElement(c.H, { errorConfig: j }, n.createElement(d.Z, null), n.createElement(c.H, { errorConfig: j }, n.createElement(z, e))))), [a.root, e]),
                        p = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(i.nO, { namespace: N }, n.createElement(o.Z, { backLocation: l.gp, documentTitle: F, history: t, isFullWidth: !0, onBackClick: p, primaryContent: m(), rightControl: n.createElement(s.Z, null), sidebarContent: null, title: F }));
                },
                V = n.memo(H);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(43429),
                c = a(991911);
            const l = (e) => r.createElement(c.Z, (0, n.Z)({}, e, { transferDirection: o.Rz.credit })),
                i = r.memo(l);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => z, fetchCardStatus: () => A });
            var n = a(807896),
                r = a(655729),
                o = a(202784),
                c = a(400752),
                l = a(325686),
                i = a(10622),
                s = a.n(i),
                d = (a(585488), a(437429)),
                u = a.n(d),
                m = a(107267),
                p = a(529356),
                h = a(731708),
                y = a(167630),
                g = a(392237),
                f = a(605446),
                b = a(622769),
                E = a(420182),
                k = a(883229),
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
                    const n = (0, m.useHistory)(),
                        r = u()(),
                        c = (0, C.z)(),
                        i = (0, P.p)();
                    o.useEffect(() => {
                        c.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const s = o.useCallback(
                        (e, r) => {
                            clearInterval(e), i({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? Z.gp);
                        },
                        [t, n, a, i],
                    );
                    return (
                        o.useEffect(() => {
                            let o = 0;
                            const l = () => {
                                o >= v.wG
                                    ? (c.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), s(i))
                                    : ((o += 1),
                                      A({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: o, status: c } = e ?? {};
                                              switch (c) {
                                                  case b.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(i), (0, w.ve)(r), t(), n.replace(a ?? Z.gp);
                                                      break;
                                                  case b.G.BankCardLinkingSessionStatusRejected:
                                                      s(i, o ? T[o] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              s(i);
                                          }));
                            };
                            l();
                            const i = setInterval(l, v.Ln);
                            return () => clearInterval(i);
                        }, [c, r, s, n, e, a, t]),
                        o.createElement(p.Z, { graphicDisplayMode: "illustration", graphicStyle: I.ir, headline: "Verifying your card", onAction: () => {}, subtext: o.createElement(l.Z, { style: B.container }, o.createElement(h.ZP, null, "This may take a few seconds."), o.createElement(y.Z, { style: B.activityIndicator })) })
                    );
                },
                M = () => {
                    const e = (0, c.Dv)(E.lZ),
                        [t, a] = o.useState();
                    o.useEffect(() => {
                        e.get(S.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = o.useCallback(() => {
                        e.delete(S.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? o.createElement(D, (0, n.Z)({}, t, { onComplete: r })) : o.createElement(_.Z, { to: Z.gp })) : o.createElement(y.Z, { style: B.activityIndicator });
                },
                B = g.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                R = { context: "BankCardPoller" },
                L = (e) => o.createElement(k.N, { errorConfig: R }, o.createElement(M, null)),
                z = o.memo(L);
        },
        224058: (e, t, a) => {
            a.d(t, { a: () => n });
            const n = "rweb.money.bankCardPolling";
        },
        578453: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            a(136728);
            var n = a(202784),
                r = a(400752),
                o = a(325686),
                c = a(107267),
                l = a(731708),
                i = a(167630),
                s = a(362075),
                d = a(392237),
                u = a(420182),
                m = a(980407),
                p = a(736063),
                h = a(514639),
                y = a(293115),
                g = a(743080),
                f = a(224058),
                b = a(986092),
                E = (a(585488), a(351743)),
                k = a.n(E),
                P = a(234107),
                Z = a(727384);
            const C = b.Z,
                _ = { light: P.M.BankCardLinkingSessionThemeLight, dim: P.M.BankCardLinkingSessionThemeDimmed, dark: P.M.BankCardLinkingSessionThemeDark },
                v = () => {
                    const [e] = k()(C),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: _[(0, Z.gh)()] ?? P.M.BankCardLinkingSessionThemeLight },
                                onCompleted: (e, t) => {
                                    const n = e?.create_bank_card_linking_session;
                                    a(n);
                                },
                            });
                        }, [e]),
                        t
                    );
                },
                I = "Add a debit card",
                w = { page: "money", section: "bank-card" },
                S = (e) => {
                    const t = (0, r.Dv)(u.lZ),
                        a = v(),
                        d = (0, c.useHistory)(),
                        [p, b] = n.useState(!1),
                        E = (0, g.jh)(),
                        k = d.location?.state,
                        P = k?.redirectPath,
                        Z = n.useMemo(() => ({ pathname: h.ac, state: k ?? {} }), [k]),
                        C = n.createElement(o.Z, { style: E.footer }, n.createElement(l.ZP, { align: "center", color: "text", link: Z }, "Use a bank account")),
                        _ = n.useCallback(() => {
                            b(!0), a?.id && t.set(f.a, { redirectPath: P, cardLinkId: a.id });
                        }, [P, a, t]),
                        S = n.useCallback(() => {
                            P === h.iE.bankAccounts ? d.push(h.iE.bankAccounts) : d.push(h.gp);
                        }, [d, P]);
                    return n.createElement(m.Z, { backButtonType: "close", bottomBar: C, history: d, onBackClick: S, withoutBottomBarMobile: !0 }, n.createElement(y.nO, { namespace: w }, n.createElement(o.Z, { style: E.container }, n.createElement(l.ZP, { align: "center", size: "title2", style: g.ZP.title, weight: "heavy" }, I), !p && n.createElement(i.Z, { style: g.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(s.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: _, src: a.iframe_url, style: p ? D.iframe : D.hide, title: I }) : null)));
                },
                T = { context: "BANK_CARD" },
                x = (e) => n.createElement(p.H, { errorConfig: T }, n.createElement(S, e)),
                A = n.memo(x),
                D = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", flex: 1 }, hide: { display: "none" } }));
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
            var n = a(202784),
                r = a(736063),
                o = a(514639),
                c = a(725516),
                l = a(160144);
            const i = (e) => {
                    const t = (0, c.z)();
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "card-onboard", action: "impression" });
                        }, [t]),
                        n.createElement(l.Z, { linkType: o.P_.cardOnboarding, redirectPath: o.Tb })
                    );
                },
                s = { context: "CardOnboard" };
            function d(e) {
                return n.createElement(r.H, { errorConfig: s }, n.createElement(i, e));
            }
            const u = n.memo(d);
        },
        900592: (e, t, a) => {
            a.r(t), a.d(t, { default: () => se });
            var n = a(202784),
                r = a(325686),
                o = a(992942),
                c = a(154003),
                l = a(165822),
                i = a(731708),
                s = a(953035),
                d = a(392237),
                u = a(108362),
                m = a(177826),
                p = a(468670),
                h = a(777217),
                y = a(861420),
                g = a(436117),
                f = a(252021),
                b = a(736063),
                E = a(514639),
                k = a(445664),
                P = a(293115),
                Z = a(615027),
                C = a(575123),
                _ = a(452275),
                v = a(226595),
                I = a(24568),
                w = a(743080),
                S = a(727384);
            const T = { front: "https://pbs.twimg.com/static/money/mock-card.png?v=1", back: "https://pbs.twimg.com/static/money/mock-card.png?v=1" };
            a(136728);
            var x = a(107267),
                A = a(674132),
                D = a.n(A),
                M = a(684779),
                B = a(717160),
                R = a(711223),
                L = a(633806),
                z = a(782642),
                N = a(725516),
                F = a(413713),
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
                                                o = e?.activate_issued_card?.challenge_id;
                                            o ? a({ challengeId: o }) : n(r || t);
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
            const G = O.Z,
                Y = ({ paymentMethodId: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, K.A)(G, { payment_method_id: e }),
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
                    const a = (0, N.z)(),
                        o = (0, w.jh)(),
                        c = (0, z.p)(),
                        s = (0, x.useHistory)(),
                        d = e.rest_id,
                        [u, m] = U(),
                        { data: p } = Y({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const h = n.useCallback(() => {
                            a.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                u({ cardId: d })
                                    .then(({ challengeId: e }) => {
                                        e && s.push(E.vw, { challengeId: e, challengeInitiator: E.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        c({ text: (0, F.kJ)({ errors: e }).message });
                                    });
                        }, [a, u, d, s, c]),
                        {
                            Icon: y,
                            action: g,
                            disabled: f,
                            subtitle: b,
                            title: k,
                        } = n.useMemo(() => {
                            const e = p?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis;
                            switch (t) {
                                case L.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: a ? ((n = X(new Date(parseInt(a, 10)))), `Card arrived on ${n}`) : null, Icon: M.default, action: h, disabled: m };
                                case L.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: "Activate your card once its arrived", Icon: B.default };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: R.default };
                            }
                            var n;
                        }, [p?.get_payment_method?.shipping, m, h]);
                    return n.createElement(l.Z, { "aria-label": k, containerStyle: o.tile, disabled: t || f, onClick: g, stackLayoutUpperStyle: w.ZP.upper, upper: n.createElement(r.Z, { style: w.ZP.row }, n.createElement(y, { style: w.ZP.icon }), n.createElement(r.Z, null, n.createElement(i.ZP, null, k), b ? n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, b) : null)), withInteractiveStyling: !!g });
                },
                Q = { context: "ShippingStatus" };
            function ee(e) {
                return n.createElement(b.H, { errorConfig: Q }, n.createElement(J, e));
            }
            const te = n.memo(ee),
                ae = { page: "money", section: "cards" },
                ne = "Money",
                re = "Your card is locked",
                oe = (e) => {
                    const t = (0, w.jh)(),
                        { permissions: a } = (0, k.Z)({ fetchKey: "Payments" }),
                        { cards: d, inactivePhysicalCards: u } = (0, v.Z)(),
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
                    return n.createElement(n.Fragment, null, d && d?.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: ce.imageContainer }, n.createElement(o.Z, { ariaLabel: "Card", source: T.front, style: ce.image }), n.createElement(c.ZP, { fontWeight: "normal", icon: n.createElement(m.default, null), onClick: () => {}, size: "xSmall", style: ce.showDetailsButton, type: "onMediaText" }, "Show card details")), u && u?.length > 0 ? n.createElement(te, { card: u[0], disabled: A }) : null, D ? n.createElement(l.Z, { "aria-label": re, containerStyle: t.tile, stackLayoutUpperStyle: w.ZP.upper, upper: n.createElement(r.Z, { style: w.ZP.row }, n.createElement(p.default, { style: w.ZP.icon }), n.createElement(r.Z, null, n.createElement(i.ZP, null, re), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, "Future transactions would be declined."))), withInteractiveStyling: !1 }) : null, n.createElement(r.Z, { style: t.pivotTileContainer }, D ? n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: x, icon: h.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: _, text: "Unlock card", withInteractiveStyling: !0 }) : n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: x, icon: p.default, iconColor: "text", isCompact: !0, isLoading: b, onClick: C, text: "Lock card", withInteractiveStyling: !0 }), n.createElement(s.Z, { containerStyle: t.pivotTile, disabled: A, icon: y.default, iconColor: "text", isCompact: !0, link: A ? void 0 : E.SR, text: "Change pin", withInteractiveStyling: !0 }))) : n.createElement(Z.Z, { to: E.lf }));
                },
                ce = d.default.create((e) => ({ image: { width: 230 * e.scaleMultiplier, height: 350 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, start: e.spaces.space8, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto" } })),
                le = { context: "ACCOUNT_CARDS" },
                ie = (e) => {
                    const { history: t } = e,
                        a = (0, w.jh)(),
                        r = n.useCallback(() => n.createElement(u.Z, { style: a.root, withWideContainer: !0 }, n.createElement(b.H, { errorConfig: le }, n.createElement(_.Z, null), n.createElement(b.H, { errorConfig: le }, n.createElement(oe, e)))), [a.root, e]),
                        o = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(P.nO, { namespace: ae }, n.createElement(f.Z, { backLocation: E.gp, documentTitle: ne, history: t, isFullWidth: !0, onBackClick: o, primaryContent: r(), rightControl: n.createElement(C.Z, null), sidebarContent: null, title: ne }));
                },
                se = n.memo(ie);
        },
        67356: (e, t, a) => {
            a.r(t), a.d(t, { default: () => k });
            var n = a(807896),
                r = a(202784),
                o = a(107267),
                c = a(529356),
                l = a(674132),
                i = a.n(l),
                s = a(883229),
                d = a(943914),
                u = a(514639),
                m = a(445664),
                p = a(743080);
            const h = i().j24c37b2,
                y = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                g = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: a }) => {
                    const n = (0, o.useHistory)(),
                        l = n.location?.state?.errors,
                        i = l?.[0]?.id,
                        s = i ? y[i] : null,
                        d = r.useCallback(() => {
                            n.replace(a ? u.gp : "/");
                        }, [n, a]);
                    return r.createElement(c.Z, { actionLabel: h, enableMaskForDismiss: !0, graphicDisplayMode: "illustration", graphicStyle: p.ir, headline: e, isFullHeightOnMobile: !0, onAction: d, onClose: d, subtext: s ?? t, supportUrl: u.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, m.Z)({ fetchKey: "Payments" });
                    return r.createElement(g, (0, n.Z)({}, e, { isActive: t }));
                },
                b = { context: "PAYMENTS_ERROR" },
                E = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(g, (0, n.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(s.N, { errorConfig: b, fallback: t }, r.createElement(d.B, null, r.createElement(f, e)));
                },
                k = r.memo(E);
        },
        991911: (e, t, a) => {
            a.d(t, { Z: () => J });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(514639),
                l = a(725516),
                i = a(615027),
                s = a(43429),
                d = a(436117);
            const u = Object.freeze({ [s.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} withdrawal?`, successTitle: ({ formattedAmount: e }) => `${e} withdrawal successfully scheduled.` }, [s.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} deposit?`, successTitle: ({ formattedAmount: e }) => `${e} deposit successfully scheduled.` } }),
                m = Object.freeze({ [s.Rz.debit]: d.d.CreateWithdrawal, [s.Rz.credit]: d.d.CreateDeposit });
            a(136728);
            var p = a(325686),
                h = a(731708),
                y = a(154003),
                g = a(167630),
                f = a(980407),
                b = a(445664),
                E = a(413713),
                k = a(743080),
                P = a(727384),
                Z = a(392237),
                C = a(922281),
                _ = a(125363),
                v = a(919022),
                I = a(392046),
                w = a(671738),
                S = a(226332);
            const T = ({ accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccount: r, transferDirection: o }) => {
                    const c = (0, _.v9)(v.ZP.selectViewerUser),
                        { usablePaymentMethods: l } = (0, S.Z)(),
                        { path: i } = u[o],
                        d = n.useMemo(() => `/i/money/${i}`, [i]),
                        m = n.useCallback(
                            (e) => {
                                const t = l?.find((t) => t.rest_id === e);
                                t && r && r(t);
                            },
                            [r, l],
                        ),
                        y = n.useCallback((o, c, i) => n.createElement(p.Z, { style: x.flexColumn, testID: i }, n.createElement(h.ZP, null, c), (o.type === s.dX.bank || o.type === s.dX.card) && l && r && t ? n.createElement(w.Z, { accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccountId: m, paymentMethods: l, selectedAccount: o }) : n.createElement(I.Z, { account: o })), [e, t, a, r, m, l]),
                        g = l?.find((t) => t.rest_id === e),
                        f = (0, P.Ou)(g),
                        b = c ? { accountName: { name: c.name, screenName: c.screen_name }, avatar: { uri: c.profile_image_url_https }, accountType: "X account", type: s.dX.x } : null,
                        k = o === s.Rz.debit,
                        Z = k ? b : f,
                        T = k ? f : b,
                        A = g?.core?.details?.status === C.D.LoginRequired;
                    return n.createElement(n.Fragment, null, Z ? y(Z, "From:", "sender") : null, T ? y(T, "To:", "receiver") : null, A ? n.createElement(E.ZP, { errors: [{ error_code: C.D.LoginRequired }], linkState: { redirectPath: d, paymentMethodId: e } }) : null);
                },
                x = Z.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 } })),
                A = n.memo(T);
            var D = a(236706),
                M = (a(585488), a(351743)),
                B = a.n(M),
                R = a(726426),
                L = a.n(R);
            const z = D.Z,
                N = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = B()(z);
                    return [
                        n.useCallback(
                            ({ accountId: a, amount: n }) =>
                                new Promise((r, o) => {
                                    t({
                                        variables: { amount_local_micro: n, payment_method_id: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.create_deposit?.id,
                                                n = e?.create_deposit?.transaction_status,
                                                c = e?.create_deposit?.challenge_id,
                                                l = e?.create_deposit?.errors;
                                            a ? r({ transactionId: a, status: n, challengeId: c }) : o(l || t);
                                        },
                                        updater: P.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                };
            const F = a(220474).Z,
                j = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = B()(F);
                    return [
                        n.useCallback(
                            ({ accountId: a, amount: n }) =>
                                new Promise((r, o) => {
                                    t({
                                        variables: { amount_local_micro: n, payment_method_id: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.create_withdrawal?.id,
                                                n = e?.create_withdrawal?.challenge_id,
                                                c = e?.create_withdrawal?.transaction_status,
                                                l = e?.create_withdrawal?.errors;
                                            a ? r({ transactionId: a, challengeId: n, status: c }) : o(l || t);
                                        },
                                        updater: P.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                H = ({ accountId: e, amount: t, transferDirection: a }) => {
                    const o = (0, l.z)(),
                        i = (0, r.useHistory)(),
                        d = (0, k.jh)(),
                        m = (0, P.Dc)(t),
                        [Z, C] = n.useState(null),
                        [_, v] = N(),
                        [I, w] = j(),
                        { roles: S } = (0, b.Z)({ fetchKey: "Payments" }),
                        T = v || w,
                        { confirmTitle: x, path: D } = u[a],
                        M = `/i/money/${D}`,
                        B = x({ formattedAmount: (0, P.p2)({ amount: m }) }),
                        R = n.useCallback(() => {
                            C(null);
                        }, []),
                        L = n.useMemo(() => ({ paymentMethodId: e, redirectPath: M, redirectState: { accountId: e, amount: t, step: s.ah.reviewPane }, closePath: c.gp }), [e, t, M]),
                        z = n.useCallback(() => {
                            o.scribe({ page: "money", section: D, component: "review-transfer", element: "confirm", action: "click" }), R();
                            (a === s.Rz.credit ? _ : I)({ amount: m.toString(), accountId: e })
                                .then((a) => {
                                    const { challengeId: n, status: r, transactionId: o } = a;
                                    (0, P.i7)({ status: r }) ? n && i.push(c.vw, { challengeId: n, redirectPath: M, redirectState: { accountId: e, amount: t, step: s.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : i.replace(M, { step: s.ah.successPane, amount: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, E.XE)({ errors: e, roles: S });
                                    t ? i.replace(t, L) : C(e);
                                });
                        }, [o, D, R, a, _, I, m, e, i, M, t, S, L]),
                        F = n.useCallback(() => {
                            o.scribe({ page: "money", section: D, component: "review-transfer", element: "cancel", action: "click" });
                        }, [o, D]),
                        H = n.createElement(p.Z, { style: d.footer }, Z ? n.createElement(E.ZP, { errors: Z, linkState: L, roles: S }) : null, n.createElement(h.ZP, { size: "subtext2" }, "Please note that while transfers typically take 3 business days to complete, they may complete sooner or take longer based on a number of factors, including, for example, confirmations from your external bank. Funds may not be available in your account until the transfer is complete."), n.createElement(p.Z, { style: k.ZP.actionButtons }, n.createElement(y.ZP, { link: c.gp, onPress: F, size: "large", style: k.ZP.button, type: "primaryOutlined" }, "Cancel"), n.createElement(y.ZP, { disabled: T, onPress: z, size: "large", style: k.ZP.button, type: "primaryFilled" }, T ? n.createElement(g.Z, null) : "Confirm")));
                    return n.createElement(f.Z, { backButtonType: "back", bottomBar: H, history: i, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: d.container }, n.createElement(h.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, B), n.createElement(A, { accountId: e, transferDirection: a })));
                },
                V = n.memo(H);
            var W = a(952793),
                U = a(984067),
                O = a(934265);
            const q = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        a = (0, r.useHistory)(),
                        o = (0, k.jh)(),
                        g = a.location?.state,
                        [E, Z] = n.useState(""),
                        [_, v] = n.useState(!0),
                        I = (0, W.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: w, roles: T } = (0, b.Z)({ fetchKey: "Payments" }),
                        { usablePaymentMethods: x } = (0, S.Z)(),
                        { balance: D } = (0, O.Z)(),
                        M = x?.[0],
                        [B, R] = n.useState(M),
                        L = B?.rest_id,
                        z = e === s.Rz.debit,
                        { label: N, path: F } = u[e],
                        j = !E || !_ || !L || B?.core?.details?.status !== C.D.Active,
                        H = n.useMemo(() => ({ ...g, step: s.ah.reviewPane, amount: E, accountId: L }), [L, E, g]),
                        V = `/i/money/${F}`,
                        q = n.useMemo(() => ({ pathname: V, state: H }), [V, H]),
                        $ = (0, P.DO)({ roles: T, permissions: w, actionPermission: m[e] }),
                        K = n.useCallback(() => {
                            t.scribe({ page: "money", section: F, element: "transfer", action: "click" }), $ ? a.push($, { redirectPath: V, redirectState: H, closePath: c.gp }) : a.push(q);
                        }, [t, a, F, V, q, H, $]),
                        G = n.useCallback(() => {
                            a.push(c.gp);
                        }, [a]),
                        Y = n.createElement(p.Z, { style: o.footer }, n.createElement(y.ZP, { disabled: j, onPress: K, size: "large", type: "primaryFilled" }, N)),
                        X = n.useMemo(() => ({ redirectPath: V }), [V]),
                        J = n.useMemo(() => ({ pathname: c.ac, state: X }), [X]),
                        Q = n.useMemo(() => ({ pathname: c.UA, state: X }), [X]),
                        ee = w?.includes(d.d.CreatePaymentMethod),
                        te = I && ee;
                    return L ? n.createElement(f.Z, { backButtonType: "close", bottomBar: Y, history: a, onBackClick: G, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: o.container }, n.createElement(h.ZP, { align: "center", size: "title2", style: k.ZP.title, weight: "heavy" }, z ? N : "Deposit"), n.createElement(U.Z, { amount: E, balance: D, isValid: _, label: "Enter amount", min: "1", name: "amount", setAmount: Z, setIsValid: v, validateBalance: z }), n.createElement(A, { accountId: L, addAccountLink: J, addBankCardLink: te ? Q : void 0, onSelectAccount: R, transferDirection: e }))) : n.createElement(i.Z, { to: te ? Q : ee ? J : $ ? { pathname: $, state: { redirectPath: V, closePath: c.gp } } : c.gp });
                },
                $ = n.memo(q),
                K = ({ amount: e, requestId: t, transferDirection: a }) => {
                    const o = (0, l.z)(),
                        i = (0, r.useHistory)(),
                        s = (0, k.jh)(),
                        d = (0, P.Dc)(e),
                        { path: m, successTitle: g } = u[a],
                        b = g({ formattedAmount: (0, P.p2)({ amount: d }) }),
                        E = n.useCallback(() => {
                            o.scribe({ page: "money", section: m, component: "transfer-success", element: "done", action: "click" });
                        }, [o, m]),
                        Z = n.useCallback(() => {
                            i.push(c.gp);
                        }, [i]),
                        C = n.createElement(p.Z, { style: s.footer }, n.createElement(y.ZP, { link: `${c.bR}/${t}`, onPress: E, size: "large", style: k.ZP.button, type: "primaryFilled" }, "Done"));
                    return n.createElement(f.Z, { backButtonType: "close", bottomBar: C, history: i, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: s.container }, n.createElement(h.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, b), n.createElement(h.ZP, null, "Transfers may take up to 3 business days to complete. \n\nFunds may not be available in your account until the transfer is complete.")));
                },
                G = n.memo(K),
                Y = { context: "PaymentsExternalAccountTransfer" },
                X = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        a = (0, r.useHistory)(),
                        d = a.location?.state,
                        m = d?.step,
                        p = d?.amount,
                        h = d?.accountId,
                        y = d?.requestId,
                        { path: g } = u[e];
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: g, component: m, action: "impression" });
                        }, [t, m, g]),
                        n.createElement(o.H, { errorConfig: Y }, p && h ? (m === s.ah.reviewPane ? n.createElement(V, { accountId: h, amount: p, transferDirection: e }) : m === s.ah.successPane && y ? n.createElement(G, { amount: p, requestId: y, transferDirection: e }) : n.createElement(i.Z, { to: c.gp })) : n.createElement($, { transferDirection: e }))
                    );
                },
                J = n.memo(X);
        },
        743843: (e, t, a) => {
            a.r(t), a.d(t, { default: () => G });
            var n = a(202784),
                r = a(107267),
                o = a(360871),
                c = a(40567),
                l = a(167630),
                i = a(392237),
                s = a(676145),
                d = a(515510),
                u = a(782642),
                m = a(998564),
                p = a(514639),
                h = a(615027),
                y = a(99387),
                g = a(597897),
                f = a(325686),
                b = a(10622),
                E = a.n(b),
                k = (a(585488), a(437429)),
                P = a.n(k),
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
                        o = P()(),
                        c = (0, I.z)(),
                        i = (0, u.p)();
                    n.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
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
                                    ? (c.scribe({ page: "payment-method-poller", section: "polling", action: "failure" }), s(l))
                                    : ((n += 1),
                                      (({ environment: e, paymentMethodId: t }) =>
                                          E()(e, T, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: o, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === _.D.Active && (clearInterval(l), a.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              s(l);
                                          }));
                            };
                            r();
                            const l = setInterval(r, w.Ln);
                            return () => clearInterval(l);
                        }, [c, o, s, a, e, t]),
                        n.createElement(Z.Z, { graphicDisplayMode: "illustration", graphicStyle: S.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: n.createElement(f.Z, { style: A.container }, n.createElement(C.ZP, null, "This may take a few seconds."), n.createElement(l.Z, { style: A.activityIndicator })) })
                    );
                },
                A = i.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                D = { context: "PaymentMethodPoller" },
                M = (e) => n.createElement(v.N, { errorConfig: D }, n.createElement(x, e)),
                B = n.memo(M);
            var R = a(144098),
                L = a(351743),
                z = a.n(L),
                N = a(727384);
            const F = R.Z,
                j = () => {
                    const [e, t] = z()(F);
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
                                        updater: N.QE,
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
                                        updater: N.QE,
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
                        [a, o] = n.useState(!1),
                        [i, g] = n.useState(!1),
                        [f, b] = n.useState(!1),
                        [E, k] = n.useState(null),
                        [P, Z] = n.useState(!1),
                        [C, _] = j(),
                        [v, I] = V(),
                        w = (0, u.p)(),
                        S = window.location.href,
                        T = S?.includes("oauth_state_id="),
                        x = t.location?.query?.token,
                        A = t.location?.state,
                        { linkType: D = p.P_.linkExternalAccount, token: M, redirectPath: R = p.gp, targetRole: L = d.N.KycDocumentsVerified, closePath: z, paymentMethodId: N } = A || {},
                        F = e ?? M ?? x ?? E,
                        H = n.useCallback(
                            (e, t) => {
                                switch ((m.Yh.delete(W), D)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        N &&
                                            v({ paymentMethodId: N })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), w({ text: U });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            C({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), w({ text: U });
                                                });
                                }
                            },
                            [D, v, N, w, C],
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
                        G = { token: F, onSuccess: H, onLoad: q, onEvent: K, onExit: O, ...(T ? { receivedRedirectUri: S } : null) },
                        { open: Y, ready: X } = (0, c.usePlaidLink)(G);
                    if (
                        (n.useEffect(() => {
                            T &&
                                m.Yh.get(W)?.then((e) => {
                                    e && (0, s.Z)(e) && k(e);
                                });
                        }, [T]),
                        n.useEffect(() => {
                            T || m.Yh.set(W, F);
                        }, [T, F]),
                        n.useEffect(() => {
                            F && X && Y();
                        }, [F, X, Y]),
                        !F)
                    )
                        return T ? n.createElement(l.Z, { style: $.loadingStyle }) : n.createElement(h.Z, { to: "/" });
                    if (!i || !X) return n.createElement(l.Z, { style: $.loadingStyle });
                    switch (D) {
                        case p.P_.onboarding:
                            return P ? (a ? n.createElement(y.default, { linkType: D }) : n.createElement(h.Z, { to: R })) : null;
                        case p.P_.linkExternalAccount:
                            return _ ? n.createElement(l.Z, { style: $.loadingStyle }) : a ? n.createElement(h.Z, { to: R }) : f ? n.createElement(h.Z, { to: z ?? R }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return P && a ? n.createElement(y.default, { linkType: D, redirectPath: R, targetRole: L }) : f ? n.createElement(h.Z, { to: R }) : null;
                        case p.P_.verifyPaymentMethod:
                            return I ? n.createElement(l.Z, { style: $.loadingStyle }) : a && N ? n.createElement(B, { paymentMethodId: N, redirectPath: R }) : a || f ? n.createElement(h.Z, { to: R }) : null;
                        default:
                            return null;
                    }
                },
                q = n.memo(O),
                $ = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                K = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return o.L.Plaid, n.createElement(q, e);
                },
                G = n.memo(K);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-63cb1cc4.1720a9fa.js.map
