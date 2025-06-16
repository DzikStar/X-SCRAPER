"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6cc66b21"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => W });
            var r = a(202784),
                l = a(325686),
                n = a(107267),
                c = a(154003),
                o = a(167630),
                i = a(731708),
                s = a(661810),
                m = a(392237),
                d = a(406727),
                u = a(436117),
                p = a(980407),
                g = a(736063),
                y = a(514639),
                h = a(445664),
                f = a(293115),
                b = a(978167),
                E = a(634455),
                C = a(934265),
                P = a(24568),
                Z = a(743080),
                k = a(727384);
            const _ = { page: "money", section: "account" },
                x = "Unlock Full Account",
                w = `${x} - Account details`,
                I = (e) => {
                    const { permissions: t } = (0, h.Z)({ fetchKey: "Payments" }),
                        { balance: a, interest: m } = (0, C.Z)(),
                        g = (0, Z.jh)(),
                        f = (0, n.useHistory)(),
                        _ = (0, k.Gs)(t),
                        { handlePreferencesChange: I, isInProgress: v, preferences: T, refetch: W } = (0, P.Z)(),
                        z = r.useMemo(() => T.enable_bill_pay, [T]),
                        A = r.useMemo(() => t?.includes(u.d.CreateWithdrawal) || t?.includes(u.d.CreateDeposit), [t]),
                        S = r.useCallback(() => {
                            I("enable_bill_pay", !0), W();
                        }, [I, W]),
                        N = r.useCallback(() => {
                            f.replace(y.C2);
                        }, [f]),
                        F = t?.includes(u.d.CreateDeposit),
                        L = r.useCallback(() => f.goBack(), [f]),
                        V = F ? r.createElement(l.Z, { style: g.footer }, z ? r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "red500", disabled: v, fontWeight: "normal", onClick: N, size: "xLarge" }, v ? r.createElement(o.Z, null) : "Disable Outgoing Payments") : r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", disabled: v, fontWeight: "normal", onClick: S, size: "xLarge" }, v ? r.createElement(o.Z, null) : "Enable Outgoing Payments"), r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", link: y.IN, size: "xLarge" }, "Deposit funds")) : !A && _ ? r.createElement(l.Z, { style: g.footer }, r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", icon: r.createElement(d.default, null), link: { pathname: y.AU.tier2.verifyIdentityPath, state: { closePath: y.l_, redirectPath: y.l_ } }, size: "xLarge" }, x)) : null;
                    return r.createElement(p.Z, { backButtonType: "close", bottomBar: V, history: f, onBackClick: L }, r.createElement(l.Z, { style: g.container }, r.createElement(l.Z, { style: D.accountContainer }, r.createElement(l.Z, { style: D.balanceContainer, testID: "account-balance" }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, "Balance"), r.createElement(l.Z, null, a ? r.createElement(E.Z, { amount: a.available_amount_local_micro, size: "title0", style: D.veritcalPadding }) : null)), m ? r.createElement(l.Z, { style: D.interest }, m.apy && r.createElement(l.Z, { style: D.flexGap }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, "Current interest rate"), r.createElement(i.ZP, { size: "subtext1", weight: "medium" }, (0, k.Bj)({ apy: m.apy }))), r.createElement(l.Z, { style: D.flexGap }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, "Total interest earned"), r.createElement(E.Z, { amount: m.earned.local_micro, currency: m.pending.currency, size: "subtext1", weight: "medium" })), m.pending && r.createElement(l.Z, { style: D.flexGap }, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, "Pending interest"), r.createElement(E.Z, { amount: m.pending.local_micro, currency: m.pending.currency, size: "subtext1", weight: "medium" }))) : null, A ? r.createElement(r.Fragment, null, r.createElement(s.Z, { spacing: "space8" }), r.createElement(l.Z, { style: D.flexCol, testID: "account-details" }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, "Account details"), r.createElement(b.Z, { ariaLabel: w }))) : null)));
                },
                v = { context: "ACCOUNT_DETAILS" },
                T = (e) => r.createElement(f.nO, { namespace: _ }, r.createElement(g.H, { errorConfig: v }, r.createElement(I, e))),
                D = m.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space24, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, interest: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, veritcalPadding: { paddingVertical: e.spaces.space16 }, accountContainer: { flex: 1, gap: e.spaces.space24 }, balanceContainer: { flex: 1, gap: e.spaces.space16 } })),
                W = r.memo(T);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var r = a(202784),
                l = a(325686),
                n = a(437429),
                c = a.n(n),
                o = a(107267),
                i = a(731708),
                s = a(167630),
                m = a(515510),
                d = a(736063),
                u = a(782642),
                p = a(514639),
                g = a(445664),
                y = a(698478),
                h = a(725516),
                f = a(827309),
                b = a(43429),
                E = a(743080),
                C = a(727384);
            const P = "Verifying your identity",
                Z = "This may take a few seconds.",
                k = "Something went wrong. Please try again later.",
                _ = "Updating your profile",
                x = { [p.P_.onboarding]: { headline: "Setting up your account" }, [p.P_.upgradeToKycVerified]: { headline: P, targetRole: m.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [p.P_.upgradeToKycDocumentsVerified]: { headline: P, targetRole: m.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [p.P_.selfieVerification]: { headline: P, targetRole: m.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [p.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.updateName]: { headline: _ }, [p.P_.updateAddress]: { headline: _ } },
                w = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: n, redirectPath: m, redirectState: d, targetRole: P }) => {
                    const _ = (0, o.useHistory)(),
                        w = c()(),
                        I = (0, h.z)(),
                        v = (0, u.p)(),
                        { headline: T, errorMessage: D = k, targetRole: W, subtext: z = Z, challengeCompleteMessage: A } = x[n],
                        S = P ?? W,
                        N = r.useMemo(() => r.createElement(l.Z, { style: { width: "100%" } }, r.createElement(i.ZP, null, z), r.createElement(s.Z, { style: E.ZP.poller })), [z]);
                    r.useEffect(() => {
                        I.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [I]);
                    const F = r.useCallback(
                        (e) => {
                            clearInterval(e), _.replace(a ?? p.gp), v({ text: D });
                        },
                        [_, a, v, D],
                    );
                    return (
                        r.useEffect(() => {
                            let a = 0;
                            const r = () => {
                                a >= b.wG
                                    ? (I.scribe({ page: "payments-poller", section: "polling", action: "failure" }), F(l))
                                    : ((a += 1),
                                      (0, g.v)({ environment: w })
                                          .then((a) => {
                                              const { permissions: r, roles: c } = a ?? {},
                                                  o = (0, C.jm)({ roles: c }),
                                                  i = (0, C.iv)({ roles: c }),
                                                  s = (0, y.rW)({ redirectPath: i ? p.Xy : o ? p.wD : m, permissions: r, roles: c });
                                              switch (n) {
                                                  case p.P_.onboarding:
                                                      r && c && s && (clearInterval(l), _.replace(s));
                                                      break;
                                                  case p.P_.selfieVerification:
                                                  case p.P_.upgradeToKycVerified:
                                                  case p.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(S)) {
                                                          clearInterval(l), (0, C.J$)(w);
                                                          const a = (0, C.yH)({ roles: c });
                                                          i ? _.replace(p.Xy) : e && A ? _.replace((0, C.Ix)({ challengeInitiator: t }), { redirectPath: m, redirectState: d, challengeId: e, message: A }) : a ? _.replace(p.Am) : o ? _.replace(p.wD) : _.replace(m ?? p.gp, d);
                                                      }
                                                      (0, C.ab)({ roles: c }) && (clearInterval(l), (0, C.J$)(w), _.replace(p.gp));
                                                      break;
                                                  case p.P_.autoclaim:
                                                      c && !(0, C.jm)({ roles: c }) && (clearInterval(l), _.replace(m ?? p.gp, d));
                                                      break;
                                                  case p.P_.checkPendingTransactions:
                                                      c && !(0, C.yH)({ roles: c }) && (clearInterval(l), _.replace(m ?? p.gp, d));
                                                      break;
                                                  case p.P_.updateName:
                                                  case p.P_.updateAddress:
                                                      r && c && (clearInterval(l), (0, C.J$)(w), _.replace(i ? p.Xy : (m ?? p.iE.personal), d));
                                              }
                                          })
                                          .catch(() => {
                                              F(l);
                                          }));
                            };
                            r();
                            const l = setInterval(r, b.Ln);
                            return () => clearInterval(l);
                        }, [I, w, F, _, n, m, S, d, e, t, A]),
                        r.createElement(f.Z, { headline: T, subtext: N })
                    );
                },
                I = { context: "PaymentsAccountsPoller" },
                v = (e) => r.createElement(d.H, { errorConfig: I }, r.createElement(w, e)),
                T = r.memo(v);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            var r = a(202784),
                l = a(108362),
                n = a(252021),
                c = a(736063),
                o = a(514639),
                i = a(293115),
                s = a(920113),
                m = a(452275),
                d = a(743080),
                u = a(807896),
                p = a(256179),
                g = a(325686),
                y = (a(585488), a(500200)),
                h = a(731708),
                f = a(392237),
                b = a(684008),
                E = a(488746),
                C = a(41065),
                P = a(311687),
                Z = a(671830),
                k = a(507651),
                _ = a(847347),
                x = a(578719),
                w = a(43429),
                I = a(412100),
                v = a(825941);
            const T = p.Z,
                D = { [Z.W.CreditCardBack]: b.default, [Z.W.FollowArrows]: E.default, [Z.W.PeopleStroke]: C.default, [Z.W.Clock]: P.default },
                W = (e) => {
                    const { selectedFilter: t, withHeader: a } = e,
                        { data: l, fetchNext: n } = (0, v.Z)({ searchFilterId: t }),
                        c = l?.get_transactions;
                    return r.createElement(r.Fragment, null, c ? r.createElement(g.Z, null, a ? r.createElement(g.Z, { style: d.ZP.header }, r.createElement(h.ZP, { size: "headline2", weight: "bold" }, "All Transactions")) : null, r.createElement(x.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: n, slice: c })) : null);
                },
                z = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: l } = (0, I.Z)();
                    return r.createElement(r.Fragment, null, l ? r.createElement(_.Z, { data: t, fetchNext: a, type: "transaction" }) : null, r.createElement(W, (0, u.Z)({}, e, { withHeader: l })));
                },
                A = f.default.create(() => ({ tabStrip: { width: "100%" } })),
                S = { context: "TRANSACTIONS_LIST" },
                N = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, l] = r.useState(t),
                        n = (0, y.useLazyLoadQuery)(T),
                        o = (n.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: r, title: n }) => ({ key: r, label: n, Icon: t ? D[t] : void 0, to: { pathname: e.location.pathname, query: { filter: r } }, isActive: () => a === r, onClick: () => l(r) })),
                        i = a === w.$W;
                    return r.createElement(r.Fragment, null, o.length && r.createElement(k.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: o, style: A.tabStrip }), r.createElement(c.H, { errorConfig: S }, i ? r.createElement(z, (0, u.Z)({}, e, { selectedFilter: a })) : r.createElement(W, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                F = r.memo(N),
                L = { page: "money", section: "balance" },
                V = "Money",
                H = { context: "ACCOUNT_ACTIVITY" },
                M = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        u = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: a.root, withWideContainer: !0 }, r.createElement(c.H, { errorConfig: H }, r.createElement(m.Z, null), r.createElement(c.H, { errorConfig: H }, r.createElement(F, e))))), [a.root, e]),
                        p = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(i.nO, { namespace: L }, r.createElement(n.Z, { backLocation: o.gp, documentTitle: V, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: r.createElement(s.Z, null), sidebarContent: null, title: V }));
                },
                R = r.memo(M);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(807896),
                l = a(202784),
                n = a(43429),
                c = a(554337);
            const o = (e) => l.createElement(c.Z, (0, r.Z)({}, e, { transferDirection: n.Rz.credit })),
                i = l.memo(o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6cc66b21.d93deefa.js.map
