"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-0cabf78d"],
    {
        554337: (e, t, n) => {
            n.d(t, { Z: () => le });
            var a = n(202784),
                o = n(107267),
                r = n(736063),
                c = n(514639),
                s = n(412450),
                i = n(725516),
                l = n(615027),
                m = n(43429),
                u = n(226332),
                d = n(436117);
            const h = Object.freeze({ [m.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: "Confirm withdrawal", successTitle: ({ formattedAmount: e }) => `Your ${e} withdrawal successfully scheduled.` }, [m.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: "Confirm deposit", successTitle: ({ formattedAmount: e }) => `Your ${e} deposit successfully scheduled.` } }),
                p = Object.freeze({ [m.Rz.debit]: d.d.CreateWithdrawal, [m.Rz.credit]: d.d.CreateDeposit });
            n(136728);
            var y = n(325686),
                f = n(731708),
                g = n(154003),
                b = n(167630),
                E = n(980407),
                k = n(445664),
                P = n(634455),
                _ = n(413713),
                Z = n(655750),
                w = n(743080),
                C = n(727384),
                I = n(392237),
                v = n(212145),
                M = n(922281),
                A = n(125363),
                T = n(919022),
                D = n(392046),
                S = n(671738);
            const z = ({ accountId: e, addAccountLink: t, addBankCardLink: n, amountWithFees: o, methodConfigs: r, onSelectAccount: c, paymentMethods: s, transferDirection: i }) => {
                    const l = (0, A.v9)(T.ZP.selectViewerUser),
                        u = i === m.Rz.debit,
                        { path: d } = h[i],
                        p = a.useMemo(() => {
                            const e = o?.feeAmount,
                                t = o?.currency;
                            return e && "0" !== e ? (0, C.vw)({ amount: e, currency: t }) : void 0;
                        }, [o]),
                        f = a.useMemo(() => `/i/money/${d}`, [d]),
                        g = a.useCallback(
                            (e) => {
                                const t = s?.find((t) => t.rest_id === e);
                                t && c && c(t);
                            },
                            [c, s],
                        ),
                        b = a.useCallback((o, l) => a.createElement(y.Z, { style: x.flexColumn, testID: l }, (o.type === m.dX.bank || o.type === m.dX.card) && s && c && t ? a.createElement(S.Z, { accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: p, methodConfigs: r, onSelectAccountId: g, paymentMethods: s, selectedAccount: o, transferDirection: i }) : a.createElement(D.Z, { account: o })), [e, t, n, p, r, c, g, s, i]),
                        E = s?.find((t) => t.rest_id === e),
                        k = (0, C.xe)({ method: E, methodConfigs: r, transferDirection: i }),
                        P = l ? { accountName: { name: l.name, screenName: l.screen_name }, avatar: { uri: l.profile_image_url_https }, accountType: "My Balance", type: m.dX.x } : null,
                        Z = u ? P : k,
                        w = u ? k : P,
                        I = E?.core?.details?.status === M.D.LoginRequired;
                    return a.createElement(a.Fragment, null, Z ? b(Z, "sender") : null, Z && w ? a.createElement(v.default, { style: x.arrow }) : null, w ? b(w, "receiver") : null, I ? a.createElement(_.ZP, { errors: [{ error_code: M.D.LoginRequired }], linkState: { redirectPath: f, paymentMethodId: e }, opts: { counterPartyScreenName: u ? w?.accountName.screenName : Z?.accountName.screenName } }) : null);
                },
                x = I.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 }, arrow: { alignSelf: "flex-start", marginStart: e.spaces.space12, height: e.spaces.space28, color: e.colors.gray400 } })),
                F = a.memo(z);
            var B = n(236706),
                R = (n(585488), n(351743)),
                W = n.n(R),
                L = n(726426),
                N = n.n(L);
            const q = B.Z,
                H = () => {
                    const e = a.useMemo(() => N()(), []),
                        [t, n] = W()(q);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a, currency: o }) =>
                                new Promise((r, c) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: o, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_deposit?.id,
                                                a = e?.create_deposit?.transaction_status,
                                                o = e?.create_deposit?.challenge_id,
                                                s = e?.create_deposit?.errors;
                                            n ? r({ transactionId: n, status: a, challengeId: o }) : c(s || t);
                                        },
                                        updater: C.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            var V = n(848739);
            const $ = ({ count: e }) => `Funds will be available in up to ${e} business days`,
                O = ({ account: e, methodConfigs: t, transferDirection: n }) => {
                    const a = (0, C.xe)({ method: e, methodConfigs: t, transferDirection: n }),
                        o = a?.config?.processingTime?.processing_time_type === V.l.RealTime,
                        r = a?.config?.processingTime?.max_duration_in_business_days ?? c.UJ;
                    return { settleText: o ? "Funds will be available instantly" : $({ count: r }), details: a };
                };
            const U = n(220474).Z,
                Y = () => {
                    const e = a.useMemo(() => N()(), []),
                        [t, n] = W()(U);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a, currency: o }) =>
                                new Promise((r, c) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: o, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_withdrawal?.id,
                                                a = e?.create_withdrawal?.challenge_id,
                                                o = e?.create_withdrawal?.transaction_status,
                                                s = e?.create_withdrawal?.errors;
                                            n ? r({ transactionId: n, challengeId: a, status: o }) : c(s || t);
                                        },
                                        updater: C.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                j = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: r, transferDirection: s }) => {
                    const l = (0, i.z)(),
                        u = (0, o.useHistory)(),
                        d = (0, w.jh)(),
                        [p, I] = a.useState(null),
                        [v, M] = H(),
                        [A, T] = Y(),
                        { roles: D } = (0, k.Z)({ fetchKey: "Payments" }),
                        S = M || T,
                        { confirmTitle: z, path: x } = h[s],
                        B = `/i/money/${x}`,
                        R = r?.find((t) => t.rest_id === e),
                        W = a.useCallback(() => {
                            I(null);
                        }, []),
                        { baseAmount: L, currency: N, feeAmount: q, totalAmount: V } = t,
                        $ = a.useMemo(() => ({ paymentMethodId: e, redirectPath: B, redirectState: { accountId: e, amountWithFees: t, step: m.ah.reviewPane }, closePath: c.gp }), [e, t, B]),
                        U = a.useCallback(() => {
                            l.scribe({ page: "money", section: x, component: "review-transfer", element: "confirm", action: "click" }), W();
                            (s === m.Rz.credit ? v : A)({ amount: L, accountId: e, currency: N })
                                .then((n) => {
                                    const { challengeId: a, status: o, transactionId: r } = n;
                                    (0, C.i7)({ status: o }) ? a && u.push(c.vw, { challengeId: a, redirectPath: B, redirectState: { accountId: e, amountWithFees: t, step: m.ah.successPane, requestId: r }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : u.replace(B, { step: m.ah.successPane, amountWithFees: t, accountId: e, requestId: r });
                                })
                                .catch((e) => {
                                    const t = (0, _.XE)({ errors: e, roles: D });
                                    t ? u.replace(t, $) : I(e);
                                });
                        }, [l, x, W, s, v, A, L, e, N, u, B, t, D, $]),
                        j = a.useCallback(() => {
                            l.scribe({ page: "money", section: x, component: "review-transfer", element: "cancel", action: "click" });
                        }, [l, x]),
                        { settleText: K } = O({ account: R, methodConfigs: n, transferDirection: s }),
                        Q = (0, C.y4)({ feeAmount: q, totalAmount: V, baseAmount: L }),
                        X = a.createElement(y.Z, { style: d.footer }, a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, K), a.createElement(Z.Z, { description: a.createElement(P.Z, { amount: L, currency: N, size: "body", weight: "normal" }), title: "Amount" }), q && a.createElement(Z.Z, { description: "0" === q ? "Free" : a.createElement(P.Z, { amount: q, currency: N, size: "body", weight: "normal" }), title: "Fee" }), Q && V && "0" !== V && a.createElement(Z.Z, { description: a.createElement(P.Z, { amount: V, currency: N, size: "body", weight: "normal" }), title: "Total deducted from your account" }), p ? a.createElement(_.ZP, { errors: p, linkState: $, roles: D }) : null, a.createElement(y.Z, { style: w.ZP.actionButtons }, a.createElement(g.ZP, { link: c.gp, onPress: j, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Cancel"), a.createElement(g.ZP, { disabled: S, onPress: U, size: "large", style: w.ZP.button, type: "primaryFilled" }, S ? a.createElement(b.Z, null) : "Confirm")));
                    return a.createElement(E.Z, { backButtonType: "back", bottomBar: X, history: u, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: w.ZP.title, weight: "heavy" }, z), a.createElement(F, { accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: r, transferDirection: s })));
                },
                K = a.memo(j);
            var Q = n(666536),
                X = n(952793),
                J = n(984067),
                G = n(106545),
                ee = n(934265);
            const te = "Usd",
                ne = ({ methodConfigs: e, paymentMethods: t, transferDirection: n }) => {
                    const r = (0, i.z)(),
                        s = (0, o.useHistory)(),
                        u = (0, w.jh)(),
                        b = s.location?.state,
                        [P, _] = a.useState(""),
                        [Z, I] = a.useState({ baseAmount: "", currency: te }),
                        [v, A] = a.useState(!0),
                        [T, D] = a.useState(!0),
                        S = (0, X.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: z, roles: x } = (0, k.Z)({ fetchKey: "Payments" }),
                        { balance: B } = (0, ee.Z)(),
                        [R] = (0, G.Z)(),
                        W = t?.[0],
                        [L, N] = a.useState(W),
                        q = L?.rest_id,
                        H = n === m.Rz.debit,
                        { label: V, path: $ } = h[n],
                        U = a.useMemo(() => !P || !Z.baseAmount || !v || !q || L?.core?.details?.status !== M.D.Active || T, [q, P, Z.baseAmount, T, v, L?.core?.details?.status]),
                        Y = a.useMemo(() => ({ ...b, step: m.ah.reviewPane, accountId: q, amountWithFees: Z }), [q, Z, b]),
                        j = `/i/money/${$}`,
                        K = a.useMemo(() => ({ pathname: j, state: Y }), [j, Y]),
                        ne = (0, C.DO)({ roles: x, permissions: z, actionPermission: p[n] }),
                        { settleText: ae } = O({ account: L, methodConfigs: e, transferDirection: n }),
                        oe = a.useCallback(
                            ({ newAccount: e, newAmount: t }) => {
                                if (e && t) {
                                    const a = (0, C.Dc)(t),
                                        o = (0, C.V9)(e),
                                        r = a.toString(),
                                        c = n === m.Rz.debit ? o.debitMethod : void 0,
                                        s = n === m.Rz.credit ? o.creditMethod : void 0;
                                    s || c
                                        ? R({ amount: r, currency: te, debitMethod: c, creditMethod: s })
                                              .then((e) => {
                                                  I(e);
                                              })
                                              .catch(() => {
                                                  I({ baseAmount: r, currency: te });
                                              })
                                              .finally(() => {
                                                  D(!1);
                                              })
                                        : (I({ baseAmount: r, currency: te }), D(!1));
                                }
                            },
                            [R, n],
                        ),
                        re = a.useMemo(() => (0, Q.Z)((e) => oe(e), 500), [oe]),
                        ce = a.useCallback(
                            (e) => {
                                _(e), D(!0), re({ newAmount: e, newAccount: L });
                            },
                            [re, L],
                        ),
                        se = a.useCallback(
                            (e) => {
                                N(e), oe({ newAmount: P, newAccount: e });
                            },
                            [P, oe],
                        ),
                        ie = a.useCallback(() => {
                            r.scribe({ page: "money", section: $, element: "transfer", action: "click" }), ne ? s.push(ne, { redirectPath: j, redirectState: Y, closePath: c.gp }) : s.push(K);
                        }, [r, s, $, j, K, Y, ne]),
                        le = a.useCallback(() => {
                            s.push(c.gp);
                        }, [s]),
                        me = a.createElement(y.Z, { style: u.footer }, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, ae), a.createElement(g.ZP, { disabled: U, onPress: ie, size: "large", type: "primaryFilled" }, V)),
                        ue = a.useMemo(() => ({ redirectPath: j }), [j]),
                        de = a.useMemo(() => ({ pathname: c.ac, state: ue }), [ue]),
                        he = a.useMemo(() => ({ pathname: c.UA, state: ue }), [ue]),
                        pe = z?.includes(d.d.CreatePaymentMethod),
                        ye = S && pe;
                    return q ? a.createElement(E.Z, { backButtonType: "close", bottomBar: me, history: s, onBackClick: le, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: u.container }, a.createElement(f.ZP, { align: "center", size: "title2", style: w.ZP.title, weight: "heavy" }, H ? V : "Deposit"), a.createElement(J.Z, { amount: P, balance: B, isValid: v, label: "Enter amount", min: "1", name: "amount", setAmount: ce, setIsValid: A, validateBalance: H }), a.createElement(F, { accountId: q, addAccountLink: de, addBankCardLink: ye ? he : void 0, amountWithFees: Z, methodConfigs: e, onSelectAccount: se, paymentMethods: t, transferDirection: n }))) : a.createElement(l.Z, { to: ye ? he : pe ? de : ne ? { pathname: ne, state: { redirectPath: j, closePath: c.gp } } : c.gp });
                },
                ae = a.memo(ne),
                oe = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: r, requestId: s, transferDirection: l }) => {
                    const m = (0, i.z)(),
                        u = (0, o.useHistory)(),
                        d = (0, w.jh)(),
                        { path: p, successTitle: b } = h[l],
                        k = r?.find((t) => t.rest_id === e),
                        { settleText: P } = O({ account: k, methodConfigs: n, transferDirection: l }),
                        { baseAmount: _, currency: Z } = t,
                        I = b({ formattedAmount: (0, C.vw)({ amount: _, currency: Z }) }),
                        v = a.useCallback(() => {
                            m.scribe({ page: "money", section: p, component: "transfer-success", element: "done", action: "click" });
                        }, [m, p]),
                        M = a.useCallback(() => {
                            u.push(c.gp);
                        }, [u]),
                        A = a.createElement(y.Z, { style: d.footer }, a.createElement(g.ZP, { link: `${c.bR}/${s}`, onPress: v, size: "large", style: w.ZP.button, type: "primaryFilled" }, "Done"));
                    return a.createElement(E.Z, { backButtonType: "close", bottomBar: A, history: u, onBackClick: M, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: w.ZP.title, weight: "heavy" }, I), a.createElement(f.ZP, null, P)));
                },
                re = a.memo(oe),
                ce = { context: "PaymentsExternalAccountTransfer" },
                se = ({ transferDirection: e }) => {
                    const t = (0, i.z)(),
                        n = (0, o.useHistory)(),
                        { methodConfigs: r } = (0, s.Z)(),
                        d = n.location?.state,
                        p = d?.step,
                        y = d?.accountId,
                        f = d?.requestId,
                        g = d?.amountWithFees,
                        { path: b } = h[e],
                        { usablePaymentMethods: E } = (0, u.Z)();
                    return (
                        a.useEffect(() => {
                            t && t.scribe({ page: "money", section: b, component: p, action: "impression" });
                        }, [t, p, b]),
                        g && y ? (p === m.ah.reviewPane ? a.createElement(K, { accountId: y, amountWithFees: g, methodConfigs: r, paymentMethods: E, transferDirection: e }) : p === m.ah.successPane && f ? a.createElement(re, { accountId: y, amountWithFees: g, methodConfigs: r, paymentMethods: E, requestId: f, transferDirection: e }) : a.createElement(l.Z, { to: c.gp })) : a.createElement(ae, { methodConfigs: r, paymentMethods: E, transferDirection: e })
                    );
                };
            function ie(e) {
                return a.createElement(r.H, { errorConfig: ce }, a.createElement(se, e));
            }
            const le = a.memo(ie);
        },
        743843: (e, t, n) => {
            n.r(t), n.d(t, { default: () => K });
            var a = n(202784),
                o = n(107267),
                r = n(360871),
                c = n(40567),
                s = n(167630),
                i = n(392237),
                l = n(676145),
                m = n(515510),
                u = n(782642),
                d = n(998564),
                h = n(514639),
                p = n(615027),
                y = n(99387),
                f = n(597897),
                g = n(325686),
                b = n(10622),
                E = n.n(b),
                k = (n(585488), n(437429)),
                P = n.n(k),
                _ = n(529356),
                Z = n(731708),
                w = n(922281),
                C = n(736063),
                I = n(725516),
                v = n(43429),
                M = n(743080);
            const A = f.Z,
                T = ({ paymentMethodId: e, redirectPath: t }) => {
                    const n = (0, o.useHistory)(),
                        r = P()(),
                        c = (0, I.z)(),
                        i = (0, u.p)();
                    a.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const l = a.useCallback(
                        (e) => {
                            clearInterval(e), n.replace(t ?? h.gp), i({ text: "Something went wrong. Please try again later." });
                        },
                        [n, t, i],
                    );
                    return (
                        a.useEffect(() => {
                            let a = 0;
                            const o = () => {
                                a >= v.wG
                                    ? (c.scribe({ page: "payment-method-poller", section: "polling", action: "failure" }), l(s))
                                    : ((a += 1),
                                      (({ environment: e, paymentMethodId: t }) =>
                                          E()(e, A, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: r, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === w.D.Active && (clearInterval(s), n.replace(t ?? h.gp));
                                          })
                                          .catch(() => {
                                              l(s);
                                          }));
                            };
                            o();
                            const s = setInterval(o, v.Ln);
                            return () => clearInterval(s);
                        }, [c, r, l, n, e, t]),
                        a.createElement(_.Z, { graphicDisplayMode: "illustration", graphicStyle: M.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: a.createElement(g.Z, { style: D.container }, a.createElement(Z.ZP, null, "This may take a few seconds."), a.createElement(s.Z, { style: D.activityIndicator })) })
                    );
                },
                D = i.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                S = { context: "PaymentMethodPoller" },
                z = (e) => a.createElement(C.H, { errorConfig: S }, a.createElement(T, e)),
                x = a.memo(z);
            var F = n(144098),
                B = n(351743),
                R = n.n(B),
                W = n(727384);
            const L = F.Z,
                N = () => {
                    const [e, t] = R()(L);
                    return [
                        a.useCallback(
                            ({ metadata: t, publicToken: n }) =>
                                new Promise((a, o) => {
                                    e({
                                        variables: { public_token: n, metadata: t },
                                        onCompleted: (e, t) => {
                                            const n = e?.exchange_public_token?.payment_methods;
                                            n ? a() : o(t);
                                        },
                                        updater: W.QE,
                                        onError: o,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const q = n(652730).Z,
                H = () => {
                    const [e, t] = R()(q);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const o = e?.payment_method_link_update_complete?.errors;
                                            o || t ? a(t ?? o) : n();
                                        },
                                        updater: W.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                V = "xpaymentsLinkToken",
                $ = "Something went wrong. Please try again later.",
                O = ({ linkToken: e }) => {
                    const t = (0, o.useHistory)(),
                        [n, r] = a.useState(!1),
                        [i, f] = a.useState(!1),
                        [g, b] = a.useState(!1),
                        [E, k] = a.useState(null),
                        [P, _] = a.useState(!1),
                        [Z, w] = N(),
                        [C, I] = H(),
                        v = (0, u.p)(),
                        M = window.location.href,
                        A = M?.includes("oauth_state_id="),
                        T = t.location?.query?.token,
                        D = t.location?.state,
                        { linkType: S = h.P_.linkExternalAccount, token: z, redirectPath: F = h.gp, targetRole: B = m.N.KycDocumentsVerified, closePath: R, paymentMethodId: W } = D || {},
                        L = e ?? z ?? T ?? E,
                        q = a.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(V), S)) {
                                    case h.P_.onboarding:
                                    case h.P_.upgradeToKycDocumentsVerified:
                                    case h.P_.verifyPaymentMethod:
                                        W &&
                                            C({ paymentMethodId: W })
                                                .then(() => {
                                                    r(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: $ });
                                                });
                                        break;
                                    case h.P_.linkExternalAccount:
                                        e &&
                                            Z({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    r(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: $ });
                                                });
                                }
                            },
                            [S, C, W, v, Z],
                        ),
                        O = a.useCallback(() => {
                            b(!0);
                        }, []),
                        U = a.useCallback(() => {
                            f(!0);
                        }, []),
                        j = a.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) _(!0);
                        }, []),
                        K = { token: L, onSuccess: q, onLoad: U, onEvent: j, onExit: O, ...(A ? { receivedRedirectUri: M } : null) },
                        { open: Q, ready: X } = (0, c.usePlaidLink)(K);
                    if (
                        (a.useEffect(() => {
                            A &&
                                d.Yh.get(V)?.then((e) => {
                                    e && (0, l.Z)(e) && k(e);
                                });
                        }, [A]),
                        a.useEffect(() => {
                            A || d.Yh.set(V, L);
                        }, [A, L]),
                        a.useEffect(() => {
                            L && X && Q();
                        }, [L, X, Q]),
                        !L)
                    )
                        return A ? a.createElement(s.Z, { style: Y.loadingStyle }) : a.createElement(p.Z, { to: "/" });
                    if (!i || !X) return a.createElement(s.Z, { style: Y.loadingStyle });
                    switch (S) {
                        case h.P_.onboarding:
                            return P ? (n ? a.createElement(y.default, { linkType: S }) : a.createElement(p.Z, { to: F })) : null;
                        case h.P_.linkExternalAccount:
                            return w ? a.createElement(s.Z, { style: Y.loadingStyle }) : n ? a.createElement(p.Z, { to: F }) : g ? a.createElement(p.Z, { to: R ?? F }) : null;
                        case h.P_.upgradeToKycDocumentsVerified:
                            return P && n ? a.createElement(y.default, { linkType: S, redirectPath: F, targetRole: B }) : g ? a.createElement(p.Z, { to: F }) : null;
                        case h.P_.verifyPaymentMethod:
                            return I ? a.createElement(s.Z, { style: Y.loadingStyle }) : n && W ? a.createElement(x, { paymentMethodId: W, redirectPath: F }) : n || g ? a.createElement(p.Z, { to: F }) : null;
                        default:
                            return null;
                    }
                },
                U = a.memo(O),
                Y = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                j = (e) => {
                    const t = (0, o.useHistory)();
                    t.location;
                    return r.L.Plaid, a.createElement(U, e);
                },
                K = a.memo(j);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-0cabf78d.9fe78f0a.js.map
