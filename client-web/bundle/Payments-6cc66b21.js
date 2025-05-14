"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6cc66b21"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var r = a(202784),
                n = a(325686),
                l = a(731708),
                c = a(661810),
                i = a(165822),
                o = a(154003),
                s = a(392237),
                m = a(72591),
                d = a(436117),
                u = a(980407),
                p = a(736063),
                y = a(782642),
                g = a(514639),
                h = a(445664),
                f = a(293115),
                E = a(634455),
                b = a(160144),
                Z = a(934265),
                P = a(743080),
                C = a(727384);
            const k = { page: "money", section: "account" },
                _ = "Verify your identity",
                w = (e) => {
                    const { id: t, permissions: a } = (0, h.Z)({ fetchKey: "Payments" }),
                        { balance: s, interest: u } = (0, Z.Z)(),
                        p = (0, y.p)(),
                        f = (0, P.jh)(),
                        k = (0, C.Gs)(a),
                        w = r.useMemo(() => a?.includes(d.d.CreateWithdrawal) || a?.includes(d.d.CreateDeposit), [a]),
                        v = a?.includes(d.d.CreateDeposit),
                        I = r.useCallback(
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
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(n.Z, { style: f.container }, r.createElement(n.Z, { style: x.flexCol, testID: "account-balance" }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, "Balance"), r.createElement(n.Z, null, s ? r.createElement(E.Z, { amount: s.available_amount_local_micro }) : null)), u ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: x.interest }, u.apy && r.createElement(n.Z, { style: x.flexGap }, r.createElement(l.ZP, { color: "gray700" }, "Current interest rate"), r.createElement(l.ZP, null, (0, C.Bj)({ apy: u.apy }))), r.createElement(n.Z, { style: x.flexGap }, r.createElement(l.ZP, { color: "gray700" }, "Total interest earned"), r.createElement(E.Z, { amount: u.earned.local_micro, currency: u.pending.currency, size: "body", weight: "normal" })), u.pending && r.createElement(n.Z, { style: x.flexGap }, r.createElement(l.ZP, { color: "gray700" }, "Pending interest"), r.createElement(E.Z, { amount: u.pending.local_micro, currency: u.pending.currency, size: "body", weight: "normal" }))), r.createElement(c.Z, { spacing: "space8" })) : null, w ? r.createElement(n.Z, { style: x.flexCol, testID: "account-details" }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, "Account details"), r.createElement(i.Z, { "aria-label": _, containerStyle: f.tile, stackLayoutUpperStyle: x.routing, upper: t ? r.createElement(b.Z, { eventCallback: I, linkType: g.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 })) : k ? r.createElement(n.Z, { style: x.flexCol }, r.createElement(l.ZP, { size: "headline1", weight: "bold" }, "Verification needed"), r.createElement(l.ZP, { color: "gray700" }, "Verify your identity to unlock your account and routing numbers for secure payments."), r.createElement(o.ZP, { link: { pathname: g.AU.tier2.verifyIdentityPath, state: { closePath: g.l_, redirectPath: g.l_ } }, type: "primaryFilled" }, _)) : null),
                        v ? r.createElement(n.Z, { style: f.footer }, r.createElement(o.ZP, { icon: r.createElement(m.default, null), link: g.IN, type: "secondaryFilled" }, "Deposit funds")) : null,
                    );
                },
                v = { context: "ACCOUNT_DETAILS" },
                I = (e) => {
                    const { history: t } = e,
                        a = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(u.Z, { backButtonType: "close", history: t, onBackClick: a }, r.createElement(f.nO, { namespace: k }, r.createElement(p.H, { errorConfig: v }, r.createElement(w, e))));
                },
                x = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                T = r.memo(I);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var r = a(202784),
                n = a(325686),
                l = a(437429),
                c = a.n(l),
                i = a(107267),
                o = a(392237),
                s = a(731708),
                m = a(167630),
                d = a(529356),
                u = a(515510),
                p = a(736063),
                y = a(782642),
                g = a(514639),
                h = a(445664),
                f = a(698478),
                E = a(725516),
                b = a(43429),
                Z = a(743080),
                P = a(727384);
            const C = "Verifying your identity",
                k = "This may take a few seconds.",
                _ = "Something went wrong. Please try again later.",
                w = "Updating your profile",
                v = { [g.P_.onboarding]: { headline: "Setting up your account" }, [g.P_.upgradeToKycVerified]: { headline: C, targetRole: u.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [g.P_.upgradeToKycDocumentsVerified]: { headline: C, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [g.P_.selfieVerification]: { headline: C, targetRole: u.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [g.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [g.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [g.P_.updateName]: { headline: w }, [g.P_.updateAddress]: { headline: w } },
                I = o.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: l, redirectPath: o, redirectState: u, targetRole: p }) => {
                    const C = (0, i.useHistory)(),
                        w = c()(),
                        x = (0, E.z)(),
                        T = (0, y.p)(),
                        { headline: S, errorMessage: A = _, targetRole: D, subtext: N = k, challengeCompleteMessage: F } = v[l],
                        V = p ?? D,
                        W = r.useMemo(() => r.createElement(n.Z, { style: { width: "100%" } }, r.createElement(s.ZP, null, N), r.createElement(m.Z, { style: I.activityIndicator })), [N]);
                    r.useEffect(() => {
                        x.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [x]);
                    const M = r.useCallback(
                        (e) => {
                            clearInterval(e), C.replace(a ?? g.gp), T({ text: A });
                        },
                        [C, a, T, A],
                    );
                    return (
                        r.useEffect(() => {
                            let a = 0;
                            const r = () => {
                                a >= b.wG
                                    ? (x.scribe({ page: "payments-poller", section: "polling", action: "failure" }), M(n))
                                    : ((a += 1),
                                      (0, h.v)({ environment: w })
                                          .then((a) => {
                                              const { permissions: r, roles: c } = a ?? {},
                                                  i = (0, P.jm)({ roles: c }),
                                                  s = (0, P.iv)({ roles: c }),
                                                  m = (0, f.rW)({ redirectPath: s ? g.Xy : i ? g.wD : o, permissions: r, roles: c });
                                              switch (l) {
                                                  case g.P_.onboarding:
                                                      r && c && m && (clearInterval(n), C.replace(m));
                                                      break;
                                                  case g.P_.selfieVerification:
                                                  case g.P_.upgradeToKycVerified:
                                                  case g.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(V)) {
                                                          clearInterval(n), (0, P.J$)(w);
                                                          const a = (0, P.yH)({ roles: c });
                                                          s ? C.replace(g.Xy) : e && F ? C.replace((0, P.Ix)({ challengeInitiator: t }), { redirectPath: o, redirectState: u, challengeId: e, message: F }) : a ? C.replace(g.Am) : i ? C.replace(g.wD) : C.replace(o ?? g.gp, u);
                                                      }
                                                      (0, P.ab)({ roles: c }) && (clearInterval(n), (0, P.J$)(w), C.replace(g.gp));
                                                      break;
                                                  case g.P_.autoclaim:
                                                      c && !(0, P.jm)({ roles: c }) && (clearInterval(n), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.checkPendingTransactions:
                                                      c && !(0, P.yH)({ roles: c }) && (clearInterval(n), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.updateName:
                                                  case g.P_.updateAddress:
                                                      r && c && (clearInterval(n), (0, P.J$)(w), C.replace(s ? g.Xy : (o ?? g.iE.personal), u));
                                              }
                                          })
                                          .catch(() => {
                                              M(n);
                                          }));
                            };
                            r();
                            const n = setInterval(r, b.Ln);
                            return () => clearInterval(n);
                        }, [x, w, M, C, l, o, V, u, e, t, F]),
                        r.createElement(d.Z, { graphicDisplayMode: "illustration", graphicStyle: Z.ir, headline: S, onAction: () => {}, subtext: W })
                    );
                },
                T = { context: "PaymentsAccountsPoller" },
                S = (e) => r.createElement(p.H, { errorConfig: T }, r.createElement(x, e)),
                A = r.memo(S);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => L });
            var r = a(202784),
                n = a(108362),
                l = a(252021),
                c = a(736063),
                i = a(514639),
                o = a(293115),
                s = a(575123),
                m = a(452275),
                d = a(743080),
                u = a(807896),
                p = a(256179),
                y = a(325686),
                g = (a(585488), a(500200)),
                h = a(731708),
                f = a(165822),
                E = a(392237),
                b = a(684008),
                Z = a(488746),
                P = a(41065),
                C = a(311687),
                k = a(671830),
                _ = a(507651),
                w = a(803263),
                v = a(578719),
                I = a(43429),
                x = a(412100),
                T = a(825941);
            const S = p.Z,
                A = { [k.W.CreditCardBack]: b.default, [k.W.FollowArrows]: Z.default, [k.W.PeopleStroke]: P.default, [k.W.Clock]: C.default },
                D = (e) => {
                    const t = (0, d.jh)(),
                        { selectedFilter: a, withHeader: n } = e,
                        { data: l, fetchNext: c } = (0, T.Z)({ searchFilterId: a }),
                        i = l?.get_transactions;
                    return r.createElement(r.Fragment, null, i ? r.createElement(y.Z, null, n ? r.createElement(y.Z, { style: d.ZP.header }, r.createElement(h.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, r.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: d.ZP.upper, upper: r.createElement(v.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: c, slice: i }), withInteractiveStyling: !1 })) : null);
                },
                N = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: n } = (0, x.Z)();
                    return r.createElement(r.Fragment, null, n ? r.createElement(w.Z, { data: t, fetchNext: a, type: "transaction" }) : null, r.createElement(D, (0, u.Z)({}, e, { withHeader: n })));
                },
                F = E.default.create(() => ({ tabStrip: { width: "100%" } })),
                V = { context: "TRANSACTIONS_LIST" },
                W = (e) => {
                    const t = e.location.query?.filter?.toString() || I.$W,
                        [a, n] = r.useState(t),
                        l = (0, g.useLazyLoadQuery)(S),
                        i = (l.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: r, title: l }) => ({ key: r, label: l, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: r } }, isActive: () => a === r, onClick: () => n(r) })),
                        o = a === I.$W;
                    return r.createElement(r.Fragment, null, i.length && r.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: i, style: F.tabStrip }), r.createElement(c.H, { errorConfig: V }, o ? r.createElement(N, (0, u.Z)({}, e, { selectedFilter: a })) : r.createElement(D, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                M = r.memo(W),
                R = { page: "money", section: "balance" },
                H = "Money",
                z = { context: "ACCOUNT_ACTIVITY" },
                B = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        u = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(n.Z, { style: a.root, withWideContainer: !0 }, r.createElement(c.H, { errorConfig: z }, r.createElement(m.Z, null), r.createElement(c.H, { errorConfig: z }, r.createElement(M, e))))), [a.root, e]),
                        p = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(o.nO, { namespace: R }, r.createElement(l.Z, { backLocation: i.gp, documentTitle: H, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: r.createElement(s.Z, null), sidebarContent: null, title: H }));
                },
                L = r.memo(B);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(807896),
                n = a(202784),
                l = a(43429),
                c = a(164317);
            const i = (e) => n.createElement(c.Z, (0, r.Z)({}, e, { transferDirection: l.Rz.credit })),
                o = n.memo(i);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6cc66b21.8e7ac44a.js.map
