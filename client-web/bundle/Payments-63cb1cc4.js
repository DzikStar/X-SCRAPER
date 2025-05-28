"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-63cb1cc4"],
    {
        930196: (e, t, a) => {
            a.d(t, { d: () => p });
            var r = a(202784),
                n = a(437429),
                l = a.n(n),
                c = a(57074),
                o = a.n(c),
                s = a(10622),
                i = a.n(s),
                u = a(71620),
                d = a(312771),
                m = a(535338);
            function p(e, t, a) {
                const n = o()(t),
                    c = o()(a),
                    s = l()(),
                    p = (0, u.po)(),
                    [g, h] = r.useState(null),
                    [f, y] = r.useState(!1),
                    b = (0, m.p)(e, t, a),
                    E = r.useCallback(() => {
                        if (!f)
                            return (
                                y(!0),
                                i()(s, e, n, { networkCacheConfig: c?.networkCacheConfig, fetchPolicy: "network-only" })
                                    .toPromise()
                                    .then((e) => (y(!1), e))
                                    .catch((e) => {
                                        p(e), y(!1), h(e);
                                    })
                            );
                    }, [s, p, e, f, n, c]);
                return r.useMemo(() => (g ? { data: b, refetch: E, refetchStatus: d.ZP.FAILED, refetchError: g } : { data: b, refetch: E, refetchStatus: f ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [b, g, f, E]);
            }
        },
        127218: (e, t, a) => {
            a.d(t, { C: () => y });
            var r = a(202784),
                n = a(614983),
                l = a.n(n),
                c = a(437429),
                o = a.n(c),
                s = a(57074),
                i = a.n(s),
                u = a(10622),
                d = a.n(u),
                m = a(585488),
                p = a(71620),
                g = a(163889),
                h = a(312771),
                f = a(535338);
            function y(e, t, a) {
                const [n, c] = r.useState(!1),
                    [s, u] = r.useState(null),
                    y = o()(),
                    b = i()(t),
                    E = (0, p.po)(),
                    P = (0, f.p)(e, b, a);
                return r.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    l()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: a, previous_cursor: r } =
                            (function (e, t) {
                                try {
                                    l()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let a = e;
                                    for (const e of t) l()(!!a, "The provided path is invalid."), l()("string" == typeof e, "Unexpected value for path!"), (a = a?.[e]);
                                    return a;
                                } catch (e) {
                                    return void (0, g.ZP)(e.message);
                                }
                            })(P, t) || {},
                        o = (t) => {
                            n ||
                                (c(!0),
                                d()(y, e, { ...b, cursor: t }).subscribe({
                                    complete: () => {
                                        c(!1);
                                    },
                                    error: (e) => {
                                        c(!1), u(e), E(e);
                                    },
                                }));
                        },
                        i = () => {
                            a && o(a);
                        },
                        p = () => {
                            r && o(r);
                        },
                        f = () => {
                            o(void 0);
                        };
                    return s ? { subsequentFetchStatus: h.ZP.FAILED, error: s, fetchNext: i, fetchPrevious: p, refetch: f, data: P, hasNext: Boolean(a), hasPrevious: Boolean(r) } : { subsequentFetchStatus: n ? h.ZP.LOADING : h.ZP.NONE, error: void 0, fetchNext: i, fetchPrevious: p, refetch: f, data: P, hasNext: Boolean(a), hasPrevious: Boolean(r) };
                }, [e, P, n, s, y, b, E]);
            }
        },
        351190: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var r = a(202784),
                n = a(325686),
                l = a(107267),
                c = a(154003),
                o = a(167630),
                s = a(731708),
                i = a(661810),
                u = a(392237),
                d = a(406727),
                m = a(436117),
                p = a(980407),
                g = a(736063),
                h = a(514639),
                f = a(445664),
                y = a(293115),
                b = a(978167),
                E = a(634455),
                P = a(934265),
                C = a(24568),
                Z = a(743080),
                k = a(727384);
            const x = { page: "money", section: "account" },
                v = "Unlock Full Account",
                _ = `${v} - Account details`,
                I = (e) => {
                    const { permissions: t } = (0, f.Z)({ fetchKey: "Payments" }),
                        { balance: a, interest: u } = (0, P.Z)(),
                        g = (0, Z.jh)(),
                        y = (0, l.useHistory)(),
                        x = (0, k.Gs)(t),
                        { handlePreferencesChange: I, isInProgress: w, preferences: S, refetch: T } = (0, C.Z)(),
                        D = r.useMemo(() => S.enable_bill_pay, [S]),
                        A = r.useMemo(() => t?.includes(m.d.CreateWithdrawal) || t?.includes(m.d.CreateDeposit), [t]),
                        W = r.useCallback(() => {
                            I("enable_bill_pay", !0), T();
                        }, [I, T]),
                        z = r.useCallback(() => {
                            y.replace(h.C2);
                        }, [y]),
                        F = t?.includes(m.d.CreateDeposit),
                        L = r.useCallback(() => y.goBack(), [y]),
                        M = F ? r.createElement(n.Z, { style: g.footer }, D ? r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "red500", disabled: w, fontWeight: "normal", onClick: z, size: "xLarge" }, w ? r.createElement(o.Z, null) : "Disable Outgoing Payments") : r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", disabled: w, fontWeight: "normal", onClick: W, size: "xLarge" }, w ? r.createElement(o.Z, null) : "Enable Outgoing Payments"), r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", link: h.IN, size: "xLarge" }, "Deposit funds")) : !A && x ? r.createElement(n.Z, { style: g.footer }, r.createElement(c.ZP, { backgroundColor: "gray0", borderColor: "transparent", color: "text", fontWeight: "normal", icon: r.createElement(d.default, null), link: { pathname: h.AU.tier2.verifyIdentityPath, state: { closePath: h.l_, redirectPath: h.l_ } }, size: "xLarge" }, v)) : null;
                    return r.createElement(p.Z, { backButtonType: "close", bottomBar: M, history: y, onBackClick: L }, r.createElement(n.Z, { style: g.container }, r.createElement(n.Z, { style: N.accountContainer }, r.createElement(n.Z, { style: N.balanceContainer, testID: "account-balance" }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, "Balance"), r.createElement(n.Z, null, a ? r.createElement(E.Z, { amount: a.available_amount_local_micro, size: "title0", style: N.veritcalPadding }) : null)), u ? r.createElement(n.Z, { style: N.interest }, u.apy && r.createElement(n.Z, { style: N.flexGap }, r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Current interest rate"), r.createElement(s.ZP, { size: "subtext1", weight: "medium" }, (0, k.Bj)({ apy: u.apy }))), r.createElement(n.Z, { style: N.flexGap }, r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Total interest earned"), r.createElement(E.Z, { amount: u.earned.local_micro, currency: u.pending.currency, size: "subtext1", weight: "medium" })), u.pending && r.createElement(n.Z, { style: N.flexGap }, r.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Pending interest"), r.createElement(E.Z, { amount: u.pending.local_micro, currency: u.pending.currency, size: "subtext1", weight: "medium" }))) : null, A ? r.createElement(r.Fragment, null, r.createElement(i.Z, { spacing: "space8" }), r.createElement(n.Z, { style: N.flexCol, testID: "account-details" }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, "Account details"), r.createElement(b.Z, { ariaLabel: _ }))) : null)));
                },
                w = { context: "ACCOUNT_DETAILS" },
                S = (e) => r.createElement(y.nO, { namespace: x }, r.createElement(g.H, { errorConfig: w }, r.createElement(I, e))),
                N = u.default.create((e) => ({ flexGap: { flexDirection: "row", justifyContent: "space-between" }, icon: { color: e.colors.text }, flexCol: { flexDirection: "column", gap: e.spaces.space24, flexShrink: 1 }, padding: { padding: e.spaces.space8 }, interest: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, veritcalPadding: { paddingVertical: e.spaces.space16 }, accountContainer: { flex: 1, gap: e.spaces.space24 }, balanceContainer: { flex: 1, gap: e.spaces.space16 } })),
                T = r.memo(S);
        },
        99387: (e, t, a) => {
            a.r(t), a.d(t, { default: () => S });
            var r = a(202784),
                n = a(325686),
                l = a(437429),
                c = a.n(l),
                o = a(107267),
                s = a(731708),
                i = a(167630),
                u = a(515510),
                d = a(736063),
                m = a(782642),
                p = a(514639),
                g = a(445664),
                h = a(698478),
                f = a(725516),
                y = a(827309),
                b = a(43429),
                E = a(743080),
                P = a(727384);
            const C = "Verifying your identity",
                Z = "This may take a few seconds.",
                k = "Something went wrong. Please try again later.",
                x = "Updating your profile",
                v = { [p.P_.onboarding]: { headline: "Setting up your account" }, [p.P_.upgradeToKycVerified]: { headline: C, targetRole: u.N.KycVerified, challengeCompleteMessage: b.q9.completeKyc }, [p.P_.upgradeToKycDocumentsVerified]: { headline: C, targetRole: u.N.KycDocumentsVerified, challengeCompleteMessage: b.q9.completeDocv }, [p.P_.selfieVerification]: { headline: C, targetRole: u.N.SelfieVerified, challengeCompleteMessage: b.q9.completeSelfie }, [p.P_.autoclaim]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.checkPendingTransactions]: { headline: "Processing your transactions", errorMessage: "We're still processing your transactions. We'll notify you once they are complete.", subtext: "It may take up to 3 business days for the funds to be settled" }, [p.P_.updateName]: { headline: x }, [p.P_.updateAddress]: { headline: x } },
                _ = ({ challengeId: e, challengeInitiator: t, errorRedirectPath: a, linkType: l, redirectPath: u, redirectState: d, targetRole: C }) => {
                    const x = (0, o.useHistory)(),
                        _ = c()(),
                        I = (0, f.z)(),
                        w = (0, m.p)(),
                        { headline: S, errorMessage: N = k, targetRole: T, subtext: D = Z, challengeCompleteMessage: A } = v[l],
                        W = C ?? T,
                        z = r.useMemo(() => r.createElement(n.Z, { style: { width: "100%" } }, r.createElement(s.ZP, null, D), r.createElement(i.Z, { style: E.ZP.poller })), [D]);
                    r.useEffect(() => {
                        I.scribe({ page: "payments-poller", section: "polling", action: "impression" });
                    }, [I]);
                    const F = r.useCallback(
                        (e) => {
                            clearInterval(e), x.replace(a ?? p.gp), w({ text: N });
                        },
                        [x, a, w, N],
                    );
                    return (
                        r.useEffect(() => {
                            let a = 0;
                            const r = () => {
                                a >= b.wG
                                    ? (I.scribe({ page: "payments-poller", section: "polling", action: "failure" }), F(n))
                                    : ((a += 1),
                                      (0, g.v)({ environment: _ })
                                          .then((a) => {
                                              const { permissions: r, roles: c } = a ?? {},
                                                  o = (0, P.jm)({ roles: c }),
                                                  s = (0, P.iv)({ roles: c }),
                                                  i = (0, h.rW)({ redirectPath: s ? p.Xy : o ? p.wD : u, permissions: r, roles: c });
                                              switch (l) {
                                                  case p.P_.onboarding:
                                                      r && c && i && (clearInterval(n), x.replace(i));
                                                      break;
                                                  case p.P_.selfieVerification:
                                                  case p.P_.upgradeToKycVerified:
                                                  case p.P_.upgradeToKycDocumentsVerified:
                                                      if (c && c.includes(W)) {
                                                          clearInterval(n), (0, P.J$)(_);
                                                          const a = (0, P.yH)({ roles: c });
                                                          s ? x.replace(p.Xy) : e && A ? x.replace((0, P.Ix)({ challengeInitiator: t }), { redirectPath: u, redirectState: d, challengeId: e, message: A }) : a ? x.replace(p.Am) : o ? x.replace(p.wD) : x.replace(u ?? p.gp, d);
                                                      }
                                                      (0, P.ab)({ roles: c }) && (clearInterval(n), (0, P.J$)(_), x.replace(p.gp));
                                                      break;
                                                  case p.P_.autoclaim:
                                                      c && !(0, P.jm)({ roles: c }) && (clearInterval(n), x.replace(u ?? p.gp, d));
                                                      break;
                                                  case p.P_.checkPendingTransactions:
                                                      c && !(0, P.yH)({ roles: c }) && (clearInterval(n), x.replace(u ?? p.gp, d));
                                                      break;
                                                  case p.P_.updateName:
                                                  case p.P_.updateAddress:
                                                      r && c && (clearInterval(n), (0, P.J$)(_), x.replace(s ? p.Xy : (u ?? p.iE.personal), d));
                                              }
                                          })
                                          .catch(() => {
                                              F(n);
                                          }));
                            };
                            r();
                            const n = setInterval(r, b.Ln);
                            return () => clearInterval(n);
                        }, [I, _, F, x, l, u, W, d, e, t, A]),
                        r.createElement(y.Z, { headline: S, subtext: z })
                    );
                },
                I = { context: "PaymentsAccountsPoller" },
                w = (e) => r.createElement(d.H, { errorConfig: I }, r.createElement(_, e)),
                S = r.memo(w);
        },
        496743: (e, t, a) => {
            a.r(t), a.d(t, { default: () => V });
            var r = a(202784),
                n = a(108362),
                l = a(252021),
                c = a(736063),
                o = a(514639),
                s = a(293115),
                i = a(575123),
                u = a(452275),
                d = a(743080),
                m = a(807896),
                p = a(256179),
                g = a(325686),
                h = (a(585488), a(500200)),
                f = a(731708),
                y = a(392237),
                b = a(684008),
                E = a(488746),
                P = a(41065),
                C = a(311687),
                Z = a(671830),
                k = a(507651),
                x = a(847347),
                v = a(578719),
                _ = a(43429),
                I = a(412100),
                w = a(825941);
            const S = p.Z,
                N = { [Z.W.CreditCardBack]: b.default, [Z.W.FollowArrows]: E.default, [Z.W.PeopleStroke]: P.default, [Z.W.Clock]: C.default },
                T = (e) => {
                    const { selectedFilter: t, withHeader: a } = e,
                        { data: n, fetchNext: l } = (0, w.Z)({ searchFilterId: t }),
                        c = n?.get_transactions;
                    return r.createElement(r.Fragment, null, c ? r.createElement(g.Z, null, a ? r.createElement(g.Z, { style: d.ZP.header }, r.createElement(f.ZP, { size: "headline2", weight: "bold" }, "All Transactions")) : null, r.createElement(v.Z, { emptyStateDescription: "Once you have some activity, it will show up here.", fetchNext: l, slice: c })) : null);
                },
                D = (e) => {
                    const { data: t, fetchNext: a, hasPendingTransactions: n } = (0, I.Z)();
                    return r.createElement(r.Fragment, null, n ? r.createElement(x.Z, { data: t, fetchNext: a, type: "transaction" }) : null, r.createElement(T, (0, m.Z)({}, e, { withHeader: n })));
                },
                A = y.default.create(() => ({ tabStrip: { width: "100%", fontWeight: 400 } })),
                W = { context: "TRANSACTIONS_LIST" },
                z = (e) => {
                    const t = e.location.query?.filter?.toString() || _.$W,
                        [a, n] = r.useState(t),
                        l = (0, h.useLazyLoadQuery)(S),
                        o = (l.get_payments_transaction_search_filters?.filter(({ details: e }) => !!e?.title).map(({ details: e, rest_id: t }) => ({ id: t, title: e?.title || "", icon: e?.icon })) || []).map(({ icon: t, id: r, title: l }) => ({ key: r, label: l, Icon: t ? N[t] : void 0, to: { pathname: e.location.pathname, query: { filter: r } }, isActive: () => a === r, onClick: () => n(r) })),
                        s = a === _.$W;
                    return r.createElement(r.Fragment, null, o.length && r.createElement(k.Z, { isCompact: !0, isPillLink: !0, isRoundedRect: !0, links: o, style: A.tabStrip }), r.createElement(c.H, { errorConfig: W }, s ? r.createElement(D, (0, m.Z)({}, e, { selectedFilter: a })) : r.createElement(T, (0, m.Z)({}, e, { selectedFilter: a }))));
                },
                F = r.memo(z),
                L = { page: "money", section: "balance" },
                M = "Money",
                B = { context: "ACCOUNT_ACTIVITY" },
                O = (e) => {
                    const { history: t } = e,
                        a = (0, d.jh)(),
                        m = r.useCallback(() => r.createElement(r.Fragment, null, r.createElement(n.Z, { style: a.root, withWideContainer: !0 }, r.createElement(c.H, { errorConfig: B }, r.createElement(u.Z, null), r.createElement(c.H, { errorConfig: B }, r.createElement(F, e))))), [a.root, e]),
                        p = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(s.nO, { namespace: L }, r.createElement(l.Z, { backLocation: o.gp, documentTitle: M, history: t, isFullWidth: !0, onBackClick: p, primaryContent: m(), rightControl: r.createElement(i.Z, null), sidebarContent: null, title: M }));
                },
                V = r.memo(O);
        },
        829376: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(807896),
                n = a(202784),
                l = a(43429),
                c = a(554337);
            const o = (e) => n.createElement(c.Z, (0, r.Z)({}, e, { transferDirection: l.Rz.credit })),
                s = n.memo(o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-63cb1cc4.363392da.js.map
