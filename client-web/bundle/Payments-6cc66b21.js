"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6cc66b21"],
    {
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => S });
            var l = a(202784),
                r = a(325686),
                n = a(731708),
                c = a(661810),
                i = a(165822),
                o = a(154003),
                s = a(392237),
                m = a(72591),
                d = a(406727),
                u = a(436117),
                p = a(980407),
                y = a(736063),
                g = a(782642),
                h = a(514639),
                f = a(445664),
                E = a(293115),
                b = a(634455),
                Z = a(160144),
                P = a(934265),
                C = a(743080),
                k = a(727384);
            const _ = { page: "money", section: "account" },
                w = "Account details",
                v = (e) => {
                    const { id: t, permissions: a } = (0, f.Z)({ fetchKey: "Payments" }),
                        { balance: s, interest: p } = (0, P.Z)(),
                        y = (0, g.p)(),
                        E = (0, C.jh)(),
                        _ = (0, k.Gs)(a),
                        v = l.useMemo(() => a?.includes(u.d.CreateWithdrawal) || a?.includes(u.d.CreateDeposit), [a]),
                        I = a?.includes(u.d.CreateDeposit),
                        x = l.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case Z.T.accountNumbercopiedToClipboard:
                                        y({ text: "Account number copied to clipboard." });
                                        break;
                                    case Z.T.routingNumbercopiedToClipboard:
                                        y({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [y],
                        );
                    return l.createElement(l.Fragment, null, l.createElement(r.Z, { style: E.container }, l.createElement(r.Z, { style: T.flexCol, testID: "account-balance" }, l.createElement(n.ZP, { size: "headline2", weight: "bold" }, "Balance"), l.createElement(r.Z, null, s ? l.createElement(b.Z, { amount: s.available_amount_local_micro }) : null)), p ? l.createElement(r.Z, { style: T.interest }, p.apy && l.createElement(r.Z, { style: T.flexGap }, l.createElement(n.ZP, { color: "gray700" }, "Current interest rate"), l.createElement(n.ZP, null, (0, k.Bj)({ apy: p.apy }))), l.createElement(r.Z, { style: T.flexGap }, l.createElement(n.ZP, { color: "gray700" }, "Total interest earned"), l.createElement(b.Z, { amount: p.earned.local_micro, currency: p.pending.currency, size: "body", weight: "normal" })), p.pending && l.createElement(r.Z, { style: T.flexGap }, l.createElement(n.ZP, { color: "gray700" }, "Pending interest"), l.createElement(b.Z, { amount: p.pending.local_micro, currency: p.pending.currency, size: "body", weight: "normal" }))) : null, v ? l.createElement(l.Fragment, null, l.createElement(c.Z, { spacing: "space8" }), l.createElement(r.Z, { style: T.flexCol, testID: "account-details" }, l.createElement(n.ZP, { size: "headline2", weight: "bold" }, w), l.createElement(i.Z, { "aria-label": w, containerStyle: E.tile, stackLayoutUpperStyle: T.routing, upper: t ? l.createElement(Z.Z, { eventCallback: x, linkType: h.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 }))) : null), I ? l.createElement(r.Z, { style: E.footer }, l.createElement(o.ZP, { icon: l.createElement(m.default, null), link: h.IN, type: "secondaryFilled" }, "Deposit funds")) : !v && _ ? l.createElement(r.Z, { style: E.footer }, l.createElement(o.ZP, { icon: l.createElement(d.default, null), link: { pathname: h.AU.tier2.verifyIdentityPath, state: { closePath: h.l_, redirectPath: h.l_ } }, type: "secondaryFilled" }, "Unlock Account Number")) : null);
                },
                I = { context: "ACCOUNT_DETAILS" },
                x = (e) => {
                    const { history: t } = e,
                        a = l.useCallback(() => t.goBack(), [t]);
                    return l.createElement(p.Z, { backButtonType: "close", history: t, onBackClick: a }, l.createElement(E.nO, { namespace: _ }, l.createElement(y.H, { errorConfig: I }, l.createElement(v, e))));
                },
                T = s.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space12, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, routing: { height: 150 * e.scaleMultiplier }, interest: { flexDirection: "column", gap: e.spaces.space12 } })),
                S = l.memo(x);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            var l = a(202784),
                r = a(325686),
                n = a(437429),
                c = a.n(n),
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
                x = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: n, redirectPath: o, redirectState: u, targetRole: p }) => {
                    const C = (0, i.useHistory)(),
                        w = c()(),
                        x = (0, E.z)(),
                        T = (0, y.p)(),
                        { headline: S, errorMessage: A = _, targetRole: D, subtext: N = k, challengeCompleteMessage: F } = v[n],
                        W = p ?? D,
                        M = l.useMemo(() => l.createElement(r.Z, { style: { width: "100%" } }, l.createElement(s.ZP, null, N), l.createElement(m.Z, { style: I.activityIndicator })), [N]);
                    l.useEffect(() => {
                        x.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [x]);
                    const R = l.useCallback(
                        (e) => {
                            clearInterval(e), C.replace(a ?? g.gp), T({ text: A });
                        },
                        [C, a, T, A],
                    );
                    return (
                        l.useEffect(() => {
                            let a = 0;
                            const l = () => {
                                a >= b.wG
                                    ? (x.scribe({ page: "payments-poller", section: "polling", action: "failure" }), R(r))
                                    : ((a += 1),
                                      (0, h.v)({ environment: w })
                                          .then((a) => {
                                              const { permissions: l, roles: c } = a ?? {},
                                                  i = (0, P.jm)({ roles: c }),
                                                  s = (0, P.iv)({ roles: c }),
                                                  m = (0, f.rW)({ redirectPath: s ? g.Xy : i ? g.wD : o, permissions: l, roles: c });
                                              switch (n) {
                                                  case g.P_.onboarding:
                                                      l && c && m && (clearInterval(r), C.replace(m));
                                                      break;
                                                  case g.P_.selfieVerification:
                                                  case g.P_.upgradeToKycVerified:
                                                  case g.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(W)) {
                                                          clearInterval(r), (0, P.J$)(w);
                                                          const a = (0, P.yH)({ roles: c });
                                                          s ? C.replace(g.Xy) : e && F ? C.replace((0, P.Ix)({ challengeInitiator: t }), { redirectPath: o, redirectState: u, challengeId: e, message: F }) : a ? C.replace(g.Am) : i ? C.replace(g.wD) : C.replace(o ?? g.gp, u);
                                                      }
                                                      (0, P.ab)({ roles: c }) && (clearInterval(r), (0, P.J$)(w), C.replace(g.gp));
                                                      break;
                                                  case g.P_.autoclaim:
                                                      c && !(0, P.jm)({ roles: c }) && (clearInterval(r), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.checkPendingTransactions:
                                                      c && !(0, P.yH)({ roles: c }) && (clearInterval(r), C.replace(o ?? g.gp, u));
                                                      break;
                                                  case g.P_.updateName:
                                                  case g.P_.updateAddress:
                                                      l && c && (clearInterval(r), (0, P.J$)(w), C.replace(s ? g.Xy : (o ?? g.iE.personal), u));
                                              }
                                          })
                                          .catch(() => {
                                              R(r);
                                          }));
                            };
                            l();
                            const r = setInterval(l, b.Ln);
                            return () => clearInterval(r);
                        }, [x, w, R, C, n, o, W, u, e, t, F]),
                        l.createElement(d.Z, { graphicDisplayMode: "illustration", graphicStyle: Z.ir, headline: S, onAction: () => {}, subtext: M })
                    );
                },
                T = { context: "PaymentsAccountsPoller" },
                S = (e) => l.createElement(p.H, { errorConfig: T }, l.createElement(x, e)),
                A = l.memo(S);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => z });
            var l = a(202784),
                r = a(108362),
                n = a(252021),
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
                w = a(847347),
                v = a(578719),
                I = a(43429),
                x = a(412100),
                T = a(825941);
            const S = p.Z,
                A = { [k.W.CreditCardBack]: b.default, [k.W.FollowArrows]: Z.default, [k.W.PeopleStroke]: P.default, [k.W.Clock]: C.default },
                D = (e) => {
                    const t = (0, d.jh)(),
                        { selectedFilter: a, withHeader: r } = e,
                        { data: n, fetchNext: c } = (0, T.Z)({ searchFilterId: a }),
                        i = n?.get_transactions;
                    return l.createElement(l.Fragment, null, i ? l.createElement(y.Z, null, r ? l.createElement(y.Z, { style: d.ZP.header }, l.createElement(h.ZP, { size: "headline2", weight: "bold" }, "All transactions")) : null, l.createElement(f.Z, { "aria-label": "Activity", containerStyle: t.tile, stackLayoutUpperStyle: d.ZP.upper, upper: l.createElement(v.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: c, slice: i }), withInteractiveStyling: !1 })) : null);
                },
                N = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: r } = (0, x.Z)();
                    return l.createElement(l.Fragment, null, r ? l.createElement(w.Z, { data: t, fetchNext: a, type: "transaction" }) : null, l.createElement(D, (0, u.Z)({}, e, { withHeader: r })));
                },
                F = E.default.create(() => ({ tabStrip: { width: "100%" } })),
                W = { context: "TRANSACTIONS_LIST" },
                M = (e) => {
                    const t = e.location.query?.filter?.toString() || I.$W,
                        [a, r] = l.useState(t),
                        n = (0, g.useLazyLoadQuery)(S),
                        i = (n.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: l, title: n }) => ({ key: l, label: n, Icon: t ? A[t] : void 0, to: { pathname: e.location.pathname, query: { filter: l } }, isActive: () => a === l, onClick: () => r(l) })),
                        o = a === I.$W;
                    return l.createElement(l.Fragment, null, i.length && l.createElement(_.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: i, style: F.tabStrip }), l.createElement(c.H, { errorConfig: W }, o ? l.createElement(N, (0, u.Z)({}, e, { selectedFilter: a })) : l.createElement(D, (0, u.Z)({}, e, { selectedFilter: a }))));
                },
                R = l.memo(M),
                V = { page: "money", section: "balance" },
                H = "Money",
                B = { context: "ACCOUNT_ACTIVITY" },
                L = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        u = l.useCallback(() => l.createElement(l.Fragment, null, l.createElement(r.Z, { style: a.root, withWideContainer: !0 }, l.createElement(c.H, { errorConfig: B }, l.createElement(m.Z, null), l.createElement(c.H, { errorConfig: B }, l.createElement(R, e))))), [a.root, e]),
                        p = l.useCallback(() => t.goBack(), [t]);
                    return l.createElement(o.nO, { namespace: V }, l.createElement(n.Z, { backLocation: i.gp, documentTitle: H, history: t, isFullWidth: !0, onBackClick: p, primaryContent: u(), rightControl: l.createElement(s.Z, null), sidebarContent: null, title: H }));
                },
                z = l.memo(L);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var l = a(807896),
                r = a(202784),
                n = a(43429),
                c = a(554337);
            const i = (e) => r.createElement(c.Z, (0, l.Z)({}, e, { transferDirection: n.Rz.credit })),
                o = r.memo(i);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6cc66b21.c5e10c0a.js.map
