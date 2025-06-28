"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6cc66b21"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            var l = a(202784),
                r = a(325686),
                n = a(107267),
                c = a(154003),
                o = a(167630),
                s = a(731708),
                i = a(661810),
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
                    const { permissions: t, roles: a } = (0, h.Z)({ fetchKey: "Payments" }),
                        { balance: m, interest: g } = (0, C.Z)(),
                        f = (0, Z.jh)(),
                        _ = (0, n.useHistory)(),
                        I = (0, k.Gs)(t),
                        { handlePreferencesChange: v, isInProgress: T, preferences: D, refetch: z } = (0, P.Z)(),
                        S = l.useMemo(() => D.enable_bill_pay, [D]),
                        A = l.useMemo(() => t?.includes(u.d.CreateWithdrawal) || t?.includes(u.d.CreateDeposit), [t]),
                        N = l.useCallback(() => {
                            v("enable_bill_pay", !0), z();
                        }, [v, z]),
                        F = l.useCallback(() => {
                            _.replace(y.C2);
                        }, [_]),
                        L = t?.includes(u.d.CreateDeposit),
                        V = l.useCallback(() => _.goBack(), [_]),
                        H = L ? l.createElement(r.Z, { style: f.footer }, S ? l.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "red500", disabled: T, fontWeight: "normal", onClick: F, size: "xLarge" }, T ? l.createElement(o.Z, null) : "Disable Outgoing Payments") : l.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", disabled: T, fontWeight: "normal", onClick: N, size: "xLarge" }, T ? l.createElement(o.Z, null) : "Enable Outgoing Payments"), l.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", link: y.IN, size: "xLarge" }, "Deposit funds")) : !A && I ? l.createElement(r.Z, { style: f.footer }, l.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", icon: l.createElement(d.default, null), link: { pathname: (0, k.FW)({ roles: a }), state: { closePath: y.l_, redirectPath: y.l_ } }, size: "xLarge" }, x)) : null;
                    return l.createElement(p.Z, { backButtonType: "close", bottomBar: H, history: _, onBackClick: V }, l.createElement(r.Z, { style: f.container }, l.createElement(r.Z, { style: W.accountContainer }, l.createElement(r.Z, { style: W.balanceContainer, testID: "account-balance" }, l.createElement(s.ZP, { size: "headline2", weight: "bold" }, "Balance"), l.createElement(r.Z, null, m ? l.createElement(E.Z, { amount: m.available_amount_local_micro, size: "title0", style: W.veritcalPadding }) : null)), g ? l.createElement(r.Z, { style: W.interest }, g.apy && l.createElement(r.Z, { style: W.flexGap }, l.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Current interest rate"), l.createElement(s.ZP, { size: "subtext1", weight: "medium" }, (0, k.Bj)({ apy: g.apy }))), l.createElement(r.Z, { style: W.flexGap }, l.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Total interest earned"), l.createElement(E.Z, { amount: g.earned.local_micro, currency: g.pending.currency, size: "subtext1", weight: "medium" })), g.pending && l.createElement(r.Z, { style: W.flexGap }, l.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Pending interest"), l.createElement(E.Z, { amount: g.pending.local_micro, currency: g.pending.currency, size: "subtext1", weight: "medium" }))) : null, A ? l.createElement(l.Fragment, null, l.createElement(i.Z, { spacing: "space8" }), l.createElement(r.Z, { style: W.flexCol, testID: "account-details" }, l.createElement(s.ZP, { size: "headline2", weight: "bold" }, "Account details"), l.createElement(b.Z, { ariaLabel: w }))) : null)));
                },
                v = { context: "ACCOUNT_DETAILS" },
                T = (e) => l.createElement(f.nO, { namespace: _ }, l.createElement(g.H, { errorConfig: v }, l.createElement(I, e))),
                W = m.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space24, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, interest: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, veritcalPadding: { paddingVertical: e.spaces.space2 }, accountContainer: { flex: 1, gap: e.spaces.space24 }, balanceContainer: { flex: 1, gap: e.spaces.space16 } })),
                D = l.memo(T);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var l = a(202784),
                r = a(325686),
                n = a(437429),
                c = a.n(n),
                o = a(107267),
                s = a(731708),
                i = a(167630),
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
                x = { [p.P_.onboarding]: { headline: "Setting up your account" }, [p.P_.upgradeToKycVerified]: { headline: P, targetRole: m.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [p.P_.upgradeToKycDocumentsVerified]: { headline: P, targetRole: m.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [p.P_.selfieVerification]: { headline: P, targetRole: m.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [p.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.updateName]: { headline: _ }, [p.P_.updateAddress]: { headline: _ }, [p.P_.questions]: { headline: "Checking your account status" } },
                w = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: n, redirectPath: m, redirectState: d, targetRole: P }) => {
                    const _ = (0, o.useHistory)(),
                        w = c()(),
                        I = (0, h.z)(),
                        v = (0, u.p)(),
                        { headline: T, errorMessage: W = k, targetRole: D, subtext: z = Z, challengeCompleteMessage: S } = x[n],
                        A = P ?? D,
                        N = l.useMemo(() => l.createElement(r.Z, { style: { width: "100%" } }, l.createElement(s.ZP, null, z), l.createElement(i.Z, { style: E.ZP.poller })), [z]);
                    l.useEffect(() => {
                        I.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [I]);
                    const F = l.useCallback(
                        (e) => {
                            clearInterval(e), _.replace(a ?? p.gp), v({ text: W });
                        },
                        [_, a, v, W],
                    );
                    return (
                        l.useEffect(() => {
                            let a = 0;
                            const l = () => {
                                a >= b.wG
                                    ? (I.scribe({ page: "payments-poller", section: "polling", action: "failure" }), F(r))
                                    : ((a += 1),
                                      (0, g.v)({ environment: w })
                                          .then((a) => {
                                              const { permissions: l, roles: c } = a ?? {},
                                                  o = (0, C.jm)({ roles: c }),
                                                  s = (0, C.iv)({ roles: c }),
                                                  i = (0, y.rW)({ redirectPath: s ? p.Xy : o ? p.wD : m, permissions: l, roles: c });
                                              switch (n) {
                                                  case p.P_.onboarding:
                                                      l && c && i && (clearInterval(r), _.replace(i));
                                                      break;
                                                  case p.P_.selfieVerification:
                                                  case p.P_.upgradeToKycVerified:
                                                  case p.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(A)) {
                                                          clearInterval(r), (0, C.J$)(w);
                                                          const a = (0, C.yH)({ roles: c });
                                                          s ? _.replace(p.Xy) : e && S ? _.replace((0, C.Ix)({ challengeInitiator: t }), { redirectPath: m, redirectState: d, challengeId: e, message: S, challengeInitiator: t }) : a ? _.replace(p.Am) : o ? _.replace(p.wD) : _.replace(m ?? p.gp, d);
                                                      }
                                                      (0, C.ab)({ roles: c }) && (clearInterval(r), (0, C.J$)(w), _.replace(p.gp));
                                                      break;
                                                  case p.P_.autoclaim:
                                                      c && !(0, C.jm)({ roles: c }) && (clearInterval(r), _.replace(m ?? p.gp, d));
                                                      break;
                                                  case p.P_.checkPendingTransactions:
                                                      c && !(0, C.yH)({ roles: c }) && (clearInterval(r), _.replace(m ?? p.gp, d));
                                                      break;
                                                  case p.P_.updateName:
                                                  case p.P_.updateAddress:
                                                      l && c && (clearInterval(r), (0, C.J$)(w), _.replace(s ? p.Xy : (m ?? p.iE.personal), d));
                                                      break;
                                                  case p.P_.questions:
                                                      clearInterval(r), (0, C.J$)(w), _.replace(m ?? p.gp, d);
                                              }
                                          })
                                          .catch(() => {
                                              F(r);
                                          }));
                            };
                            l();
                            const r = setInterval(l, b.Ln);
                            return () => clearInterval(r);
                        }, [I, w, F, _, n, m, A, d, e, t, S]),
                        l.createElement(f.Z, { headline: T, subtext: N })
                    );
                },
                I = { context: "PaymentsAccountsPoller" },
                v = (e) => l.createElement(d.H, { errorConfig: I }, l.createElement(w, e)),
                T = l.memo(v);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            var l = a(202784),
                r = a(108362),
                n = a(252021),
                c = a(736063),
                o = a(514639),
                s = a(293115),
                i = a(920113),
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
                W = { [Z.W.CreditCardBack]: b.default, [Z.W.FollowArrows]: E.default, [Z.W.PeopleStroke]: C.default, [Z.W.Clock]: P.default },
                D = (e) => {
                    const { selectedFilter: t, withHeader: a } = e,
                        { data: r, fetchNext: n } = (0, v.Z)({ searchFilterId: t }),
                        c = r?.get_transactions;
                    return l.createElement(l.Fragment, null, c ? l.createElement(g.Z, null, a ? l.createElement(g.Z, { style: d.ZP.header }, l.createElement(h.ZP, { size: "headline2", weight: "bold" }, "All Transactions")) : null, l.createElement(x.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: n, slice: c })) : null);
                },
                z = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, I.Z)();
                    return l.createElement(l.Fragment, null, r ? l.createElement(_.Z, { data: t, fetchNext: a, type: "transaction" }) : null, l.createElement(D, (0, u.Z)({}, e, { withHeader: r })));
                },
                S = f.default.create(() => ({ tabStrip: { width: "100%" } })),
                A = { context: "TRANSACTIONS_LIST" },
                N = (e) => {
                    const t = e.location.query?.filter?.toString() || w.$W,
                        [a, r] = l.useState(t),
                        n = (0, y.useLazyLoadQuery)(T),
                        o = (n.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: l, title: n }) => ({ key: l, label: n, Icon: t ? W[t] : void 0, to: { pathname: e.location.pathname, query: { filter: l } }, isActive: () => a === l, onClick: () => r(l) })),
                        s = a === w.$W;
                    return l.createElement(l.Fragment, null, o.length && l.createElement(k.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: o, style: S.tabStrip }), l.createElement(c.H, { errorConfig: A }, s ? l.createElement(z, (0, u.Z)({}, e, { selectedFilter: a })) : l.createElement(D, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                F = l.memo(N),
                L = { page: "money", section: "balance" },
                V = "Money",
                H = { context: "ACCOUNT_ACTIVITY" },
                M = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        u = l.useCallback(() => l.createElement(l.Fragment, null, l.createElement(r.Z, { style: a.root, withWideContainer: !0 }, l.createElement(c.H, { errorConfig: H }, l.createElement(m.Z, null), l.createElement(c.H, { errorConfig: H }, l.createElement(F, e))))), [a.root, e]),
                        p = l.useCallback(() => t.goBack(), [t]);
                    return l.createElement(s.nO, { namespace: L }, l.createElement(n.Z, { backLocation: o.gp, documentTitle: V, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: l.createElement(i.Z, null), sidebarContent: null, title: V }));
                },
                R = l.memo(M);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var l = a(807896),
                r = a(202784),
                n = a(43429),
                c = a(554337);
            const o = (e) => r.createElement(c.Z, (0, l.Z)({}, e, { transferDirection: n.Rz.credit })),
                s = r.memo(o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6cc66b21.60dd49ca.js.map
