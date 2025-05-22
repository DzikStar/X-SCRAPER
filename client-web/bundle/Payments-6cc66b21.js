"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6cc66b21"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var l = a(202784),
                n = a(325686),
                r = a(731708),
                c = a(661810),
                i = a(154003),
                o = a(392237),
                s = a(72591),
                m = a(406727),
                d = a(436117),
                u = a(980407),
                p = a(736063),
                y = a(514639),
                g = a(445664),
                h = a(293115),
                f = a(978167),
                E = a(634455),
                Z = a(934265),
                P = a(743080),
                b = a(727384);
            const C = { page: "money", section: "account" },
                _ = "Unlock Account Number",
                k = `${_} - Account details`,
                w = (e) => {
                    const { permissions: t } = (0, g.Z)({ fetchKey: "Payments" }),
                        { balance: a, interest: o } = (0, Z.Z)(),
                        u = (0, P.jh)(),
                        p = (0, b.Gs)(t),
                        h = l.useMemo(() => t?.includes(d.d.CreateWithdrawal) || t?.includes(d.d.CreateDeposit), [t]),
                        C = t?.includes(d.d.CreateDeposit);
                    return l.createElement(l.Fragment, null, l.createElement(n.Z, { style: u.container }, l.createElement(n.Z, { style: x.flexCol, testID: "account-balance" }, l.createElement(r.ZP, { size: "headline2", weight: "bold" }, "Balance"), l.createElement(n.Z, null, a ? l.createElement(E.Z, { amount: a.available_amount_local_micro }) : null)), o ? l.createElement(n.Z, { style: x.interest }, o.apy && l.createElement(n.Z, { style: x.flexGap }, l.createElement(r.ZP, { color: "gray700" }, "Current interest rate"), l.createElement(r.ZP, null, (0, b.Bj)({ apy: o.apy }))), l.createElement(n.Z, { style: x.flexGap }, l.createElement(r.ZP, { color: "gray700" }, "Total interest earned"), l.createElement(E.Z, { amount: o.earned.local_micro, currency: o.pending.currency, size: "body", weight: "normal" })), o.pending && l.createElement(n.Z, { style: x.flexGap }, l.createElement(r.ZP, { color: "gray700" }, "Pending interest"), l.createElement(E.Z, { amount: o.pending.local_micro, currency: o.pending.currency, size: "body", weight: "normal" }))) : null, h ? l.createElement(l.Fragment, null, l.createElement(c.Z, { spacing: "space8" }), l.createElement(n.Z, { style: x.flexCol, testID: "account-details" }, l.createElement(r.ZP, { size: "headline2", weight: "bold" }, "Account details"), l.createElement(f.Z, { ariaLabel: k }))) : null), C ? l.createElement(n.Z, { style: u.footer }, l.createElement(i.ZP, { icon: l.createElement(s.default, null), link: y.IN, type: "secondaryFilled" }, "Deposit funds")) : !h && p ? l.createElement(n.Z, { style: u.footer }, l.createElement(i.ZP, { icon: l.createElement(m.default, null), link: { pathname: y.AU.tier2.verifyIdentityPath, state: { closePath: y.l_, redirectPath: y.l_ } }, type: "secondaryFilled" }, _)) : null);
                },
                I = { context: "ACCOUNT_DETAILS" },
                v = (e) => {
                    const { history: t } = e,
                        a = l.useCallback(() => t.goBack(), [t]);
                    return l.createElement(u.Z, { backButtonType: "close", history: t, onBackClick: a }, l.createElement(h.nO, { namespace: C }, l.createElement(p.H, { errorConfig: I }, l.createElement(w, e))));
                },
                x = o.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                T = l.memo(v);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            var l = a(202784),
                n = a(325686),
                r = a(437429),
                c = a.n(r),
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
                Z = a(43429),
                P = a(743080),
                b = a(727384);
            const C = "Verifying your identity",
                _ = "This may take a few seconds.",
                k = "Something went wrong. Please try again later.",
                w = "Updating your profile",
                I = { [g.P_.onboarding]: { headline: "Setting up your account" }, [g.P_.upgradeToKycVerified]: { headline: C, targetRole: u.N.KycVerified, challengeCompleteMessage: Z.q9.completeKyc }, [g.P_.upgradeToKycDocumentsVerified]: { headline: C, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: Z.q9.completeDocv }, [g.P_.selfieVerification]: { headline: C, targetRole: u.N.SelfieVerified, challengeCompleteMessage: Z.q9.completeSelfie }, [g.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [g.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [g.P_.updateName]: { headline: w }, [g.P_.updateAddress]: { headline: w } },
                v = o.default.create((e) => ({ margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: r, redirectPath: o, redirectState: u, targetRole: p }) => {
                    const C = (0, i.useHistory)(),
                        w = c()(),
                        x = (0, E.z)(),
                        T = (0, y.p)(),
                        { headline: A, errorMessage: D = k, targetRole: S, subtext: N = _, challengeCompleteMessage: F } = I[r],
                        W = p ?? S,
                        M = l.useMemo(() => l.createElement(n.Z, { style: { width: "100%" } }, l.createElement(s.ZP, null, N), l.createElement(m.Z, { style: v.activityIndicator })), [N]);
                    l.useEffect(() => {
                        x.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [x]);
                    const V = l.useCallback(
                        (e) => {
                            clearInterval(e), C.replace(a ?? g.gp), T({ text: D });
                        },
                        [C, a, T, D],
                    );
                    return (
                        l.useEffect(() => {
                            let a = 0;
                            const l = () => {
                                a >= Z.wG
                                    ? (x.scribe({ page: "payments-poller", section: "polling", action: "failure" }), V(n))
                                    : ((a += 1),
                                      (0, h.v)({ environment: w })
                                          .then((a) => {
                                              const { permissions: l, roles: c } = a ?? {},
                                                  i = (0, b.jm)({ roles: c }),
                                                  s = (0, b.iv)({ roles: c }),
                                                  m = (0, f.rW)({ redirectPath: s ? g.Xy : i ? g.wD : o, permissions: l, roles: c });
                                              switch (r) {
                                                  case g.P_.onboarding:
                                                      l && c && m && (clearInterval(n), C.replace(m));
                                                      break;
                                                  case g.P_.selfieVerification:
                                                  case g.P_.upgradeToKycVerified:
                                                  case g.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(W)) {
                                                          clearInterval(n), (0, b.J$)(w);
                                                          const a = (0, b.yH)({ roles: c });
                                                          s ? C.replace(g.Xy) : e && F ? C.replace((0, b.Ix)({ challengeInitiator: t }), { redirectPath: o, redirectState: u, challengeId: e, message: F }) : a ? C.replace(g.Am) : i ? C.replace(g.wD) : C.replace(o ?? g.gp, u);
                                                      }
                                                      (0, b.ab)({ roles: c }) && (clearInterval(n), (0, b.J$)(w), C.replace(g.gp));
                                                      break;
                                                  case g.P_.autoclaim:
                                                      c && !(0, b.jm)({ roles: c }) && (clearInterval(n), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.checkPendingTransactions:
                                                      c && !(0, b.yH)({ roles: c }) && (clearInterval(n), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.updateName:
                                                  case g.P_.updateAddress:
                                                      l && c && (clearInterval(n), (0, b.J$)(w), C.replace(s ? g.Xy : (o ?? g.iE.personal), u));
                                              }
                                          })
                                          .catch(() => {
                                              V(n);
                                          }));
                            };
                            l();
                            const n = setInterval(l, Z.Ln);
                            return () => clearInterval(n);
                        }, [x, w, V, C, r, o, W, u, e, t, F]),
                        l.createElement(d.Z, { graphicDisplayMode: "illustration", graphicStyle: P.ir, headline: A, onAction: () => {}, subtext: M })
                    );
                },
                T = { context: "PaymentsAccountsPoller" },
                A = (e) => l.createElement(p.H, { errorConfig: T }, l.createElement(x, e)),
                D = l.memo(A);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => z });
            var l = a(202784),
                n = a(108362),
                r = a(252021),
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
                f = a(392237),
                E = a(684008),
                Z = a(488746),
                P = a(41065),
                b = a(311687),
                C = a(671830),
                _ = a(507651),
                k = a(847347),
                w = a(578719),
                I = a(43429),
                v = a(412100),
                x = a(825941);
            const T = p.Z,
                A = { [C.W.CreditCardBack]: E.default, [C.W.FollowArrows]: Z.default, [C.W.PeopleStroke]: P.default, [C.W.Clock]: b.default },
                D = (e) => {
                    const { selectedFilter: t, withHeader: a } = e,
                        { data: n, fetchNext: r } = (0, x.Z)({ searchFilterId: t }),
                        c = n?.get_transactions;
                    return l.createElement(l.Fragment, null, c ? l.createElement(y.Z, null, a ? l.createElement(y.Z, { style: d.ZP.header }, l.createElement(h.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, l.createElement(w.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: r, slice: c })) : null);
                },
                S = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: n } = (0, v.Z)();
                    return l.createElement(l.Fragment, null, n ? l.createElement(k.Z, { data: t, fetchNext: a, type: "transaction" }) : null, l.createElement(D, (0, u.Z)({}, e, { withHeader: n })));
                },
                N = f.default.create(() => ({ tabStrip: { width: "100%" } })),
                F = { context: "TRANSACTIONS_LIST" },
                W = (e) => {
                    const t = e.location.query?.filter?.toString() || I.$W,
                        [a, n] = l.useState(t),
                        r = (0, g.useLazyLoadQuery)(T),
                        i = (r.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: l, title: r }) => ({ key: l, label: r, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: l } }, isActive: () => a === l, onClick: () => n(l) })),
                        o = a === I.$W;
                    return l.createElement(l.Fragment, null, i.length && l.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: i, style: N.tabStrip }), l.createElement(c.H, { errorConfig: F }, o ? l.createElement(S, (0, u.Z)({}, e, { selectedFilter: a })) : l.createElement(D, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                M = l.memo(W),
                V = { page: "money", section: "balance" },
                H = "Money",
                R = { context: "ACCOUNT_ACTIVITY" },
                B = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        u = l.useCallback(() => l.createElement(l.Fragment, null, l.createElement(n.Z, { style: a.root, withWideContainer: !0 }, l.createElement(c.H, { errorConfig: R }, l.createElement(m.Z, null), l.createElement(c.H, { errorConfig: R }, l.createElement(M, e))))), [a.root, e]),
                        p = l.useCallback(() => t.goBack(), [t]);
                    return l.createElement(o.nO, { namespace: V }, l.createElement(r.Z, { backLocation: i.gp, documentTitle: H, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: l.createElement(s.Z, null), sidebarContent: null, title: H }));
                },
                z = l.memo(B);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var l = a(807896),
                n = a(202784),
                r = a(43429),
                c = a(554337);
            const i = (e) => n.createElement(c.Z, (0, l.Z)({}, e, { transferDirection: r.Rz.credit })),
                o = n.memo(i);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6cc66b21.420f84fa.js.map
