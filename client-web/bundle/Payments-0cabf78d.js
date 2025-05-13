"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-0cabf78d"],
    {
        991911: (e, t, a) => {
            a.d(t, { Z: () => ee });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(514639),
                s = a(725516),
                l = a(615027),
                i = a(43429),
                m = a(436117);
            const u = Object.freeze({ [i.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} withdrawal?`, successTitle: ({ formattedAmount: e }) => `${e} withdrawal successfully scheduled.` }, [i.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} deposit?`, successTitle: ({ formattedAmount: e }) => `${e} deposit successfully scheduled.` } }),
                d = Object.freeze({ [i.Rz.debit]: m.d.CreateWithdrawal, [i.Rz.credit]: m.d.CreateDeposit });
            a(136728);
            var p = a(325686),
                h = a(731708),
                y = a(154003),
                f = a(167630),
                b = a(980407),
                g = a(445664),
                E = a(413713),
                k = a(743080),
                P = a(727384),
                _ = a(392237),
                Z = a(212145),
                w = a(922281),
                I = a(969564),
                C = a(125363),
                v = a(919022),
                S = a(777530),
                D = a(671738),
                M = a(226332);
            const T = ({ accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccount: r, transferDirection: o }) => {
                    const c = (0, C.v9)(v.ZP.selectViewerUser),
                        { usablePaymentMethods: s } = (0, M.Z)(),
                        { methodConfigs: l } = (0, I.Z)(),
                        m = o === i.Rz.debit,
                        { path: d } = u[o],
                        h = n.useMemo(() => `/i/money/${d}`, [d]),
                        y = n.useCallback(
                            (e) => {
                                const t = s?.find((t) => t.rest_id === e);
                                t && r && r(t);
                            },
                            [r, s],
                        ),
                        f = n.useCallback((c, m) => n.createElement(p.Z, { style: A.flexColumn, testID: m }, (c.type === i.dX.bank || c.type === i.dX.card) && s && r && t ? n.createElement(D.Z, { accountId: e, addAccountLink: t, addBankCardLink: a, methodConfigs: l, onSelectAccountId: y, paymentMethods: s, selectedAccount: c, transferDirection: o }) : n.createElement(S.Z, { account: c })), [e, t, a, l, r, y, s, o]),
                        b = s?.find((t) => t.rest_id === e),
                        g = (0, P.xe)({ method: b, methodConfigs: l, transferDirection: o }),
                        k = c ? { accountName: { name: c.name, screenName: c.screen_name }, avatar: { uri: c.profile_image_url_https }, accountType: "My Balance", type: i.dX.x } : null,
                        _ = m ? k : g,
                        T = m ? g : k,
                        x = b?.core?.details?.status === w.D.LoginRequired;
                    return n.createElement(n.Fragment, null, _ ? f(_, "sender") : null, _ && T ? n.createElement(Z.default, { style: A.arrow }) : null, T ? f(T, "receiver") : null, x ? n.createElement(E.ZP, { errors: [{ error_code: w.D.LoginRequired }], linkState: { redirectPath: h, paymentMethodId: e } }) : null);
                },
                A = _.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 }, arrow: { alignSelf: "flex-start", marginStart: e.spaces.space12, height: e.spaces.space28, color: e.colors.gray400 } })),
                x = n.memo(T);
            var z = a(236706),
                B = (a(585488), a(351743)),
                L = a.n(B),
                R = a(726426),
                q = a.n(R);
            const H = z.Z,
                $ = () => {
                    const e = n.useMemo(() => q()(), []),
                        [t, a] = L()(H);
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
                                                s = e?.create_deposit?.errors;
                                            a ? r({ transactionId: a, status: n, challengeId: c }) : o(s || t);
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
            const V = a(220474).Z,
                F = () => {
                    const e = n.useMemo(() => q()(), []),
                        [t, a] = L()(V);
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
                                                s = e?.create_withdrawal?.errors;
                                            a ? r({ transactionId: a, challengeId: n, status: c }) : o(s || t);
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
                O = ({ accountId: e, amount: t, transferDirection: a }) => {
                    const o = (0, s.z)(),
                        l = (0, r.useHistory)(),
                        m = (0, k.jh)(),
                        d = (0, P.Dc)(t),
                        [_, Z] = n.useState(null),
                        [w, I] = $(),
                        [C, v] = F(),
                        { roles: S } = (0, g.Z)({ fetchKey: "Payments" }),
                        D = I || v,
                        { confirmTitle: M, path: T } = u[a],
                        A = `/i/money/${T}`,
                        z = M({ formattedAmount: (0, P.p2)({ amount: d }) }),
                        B = n.useCallback(() => {
                            Z(null);
                        }, []),
                        L = n.useMemo(() => ({ paymentMethodId: e, redirectPath: A, redirectState: { accountId: e, amount: t, step: i.ah.reviewPane }, closePath: c.gp }), [e, t, A]),
                        R = n.useCallback(() => {
                            o.scribe({ page: "money", section: T, component: "review-transfer", element: "confirm", action: "click" }), B();
                            (a === i.Rz.credit ? w : C)({ amount: d.toString(), accountId: e })
                                .then((a) => {
                                    const { challengeId: n, status: r, transactionId: o } = a;
                                    (0, P.i7)({ status: r }) ? n && l.push(c.vw, { challengeId: n, redirectPath: A, redirectState: { accountId: e, amount: t, step: i.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : l.replace(A, { step: i.ah.successPane, amount: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, E.XE)({ errors: e, roles: S });
                                    t ? l.replace(t, L) : Z(e);
                                });
                        }, [o, T, B, a, w, C, d, e, l, A, t, S, L]),
                        q = n.useCallback(() => {
                            o.scribe({ page: "money", section: T, component: "review-transfer", element: "cancel", action: "click" });
                        }, [o, T]),
                        H = n.createElement(p.Z, { style: m.footer }, _ ? n.createElement(E.ZP, { errors: _, linkState: L, roles: S }) : null, n.createElement(h.ZP, { size: "subtext2" }, "Please note that while transfers typically take 3 business days to complete, they may complete sooner or take longer based on a number of factors, including, for example, confirmations from your external bank. Funds may not be available in your account until the transfer is complete."), n.createElement(p.Z, { style: k.ZP.actionButtons }, n.createElement(y.ZP, { link: c.gp, onPress: q, size: "large", style: k.ZP.button, type: "primaryOutlined" }, "Cancel"), n.createElement(y.ZP, { disabled: D, onPress: R, size: "large", style: k.ZP.button, type: "primaryFilled" }, D ? n.createElement(f.Z, null) : "Confirm")));
                    return n.createElement(b.Z, { backButtonType: "back", bottomBar: H, history: l, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: m.container }, n.createElement(h.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, z), n.createElement(x, { accountId: e, transferDirection: a })));
                },
                N = n.memo(O);
            var U = a(952793),
                j = a(984067),
                K = a(934265);
            const Q = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        a = (0, r.useHistory)(),
                        o = (0, k.jh)(),
                        f = a.location?.state,
                        [E, _] = n.useState(""),
                        [Z, I] = n.useState(!0),
                        C = (0, U.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: v, roles: S } = (0, g.Z)({ fetchKey: "Payments" }),
                        { usablePaymentMethods: D } = (0, M.Z)(),
                        { balance: T } = (0, K.Z)(),
                        A = D?.[0],
                        [z, B] = n.useState(A),
                        L = z?.rest_id,
                        R = e === i.Rz.debit,
                        { label: q, path: H } = u[e],
                        $ = !E || !Z || !L || z?.core?.details?.status !== w.D.Active,
                        V = n.useMemo(() => ({ ...f, step: i.ah.reviewPane, amount: E, accountId: L }), [L, E, f]),
                        F = `/i/money/${H}`,
                        O = n.useMemo(() => ({ pathname: F, state: V }), [F, V]),
                        N = (0, P.DO)({ roles: S, permissions: v, actionPermission: d[e] }),
                        Q = n.useCallback(() => {
                            t.scribe({ page: "money", section: H, element: "transfer", action: "click" }), N ? a.push(N, { redirectPath: F, redirectState: V, closePath: c.gp }) : a.push(O);
                        }, [t, a, H, F, O, V, N]),
                        X = n.useCallback(() => {
                            a.push(c.gp);
                        }, [a]),
                        Y = n.createElement(p.Z, { style: o.footer }, n.createElement(y.ZP, { disabled: $, onPress: Q, size: "large", type: "primaryFilled" }, q)),
                        W = n.useMemo(() => ({ redirectPath: F }), [F]),
                        G = n.useMemo(() => ({ pathname: c.ac, state: W }), [W]),
                        J = n.useMemo(() => ({ pathname: c.UA, state: W }), [W]),
                        ee = v?.includes(m.d.CreatePaymentMethod),
                        te = C && ee;
                    return L ? n.createElement(b.Z, { backButtonType: "close", bottomBar: Y, history: a, onBackClick: X, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: o.container }, n.createElement(h.ZP, { align: "center", size: "title2", style: k.ZP.title, weight: "heavy" }, R ? q : "Deposit"), n.createElement(j.Z, { amount: E, balance: T, isValid: Z, label: "Enter amount", min: "1", name: "amount", setAmount: _, setIsValid: I, validateBalance: R }), n.createElement(x, { accountId: L, addAccountLink: G, addBankCardLink: te ? J : void 0, onSelectAccount: B, transferDirection: e }))) : n.createElement(l.Z, { to: te ? J : ee ? G : N ? { pathname: N, state: { redirectPath: F, closePath: c.gp } } : c.gp });
                },
                X = n.memo(Q),
                Y = ({ amount: e, requestId: t, transferDirection: a }) => {
                    const o = (0, s.z)(),
                        l = (0, r.useHistory)(),
                        i = (0, k.jh)(),
                        m = (0, P.Dc)(e),
                        { path: d, successTitle: f } = u[a],
                        g = f({ formattedAmount: (0, P.p2)({ amount: m }) }),
                        E = n.useCallback(() => {
                            o.scribe({ page: "money", section: d, component: "transfer-success", element: "done", action: "click" });
                        }, [o, d]),
                        _ = n.useCallback(() => {
                            l.push(c.gp);
                        }, [l]),
                        Z = n.createElement(p.Z, { style: i.footer }, n.createElement(y.ZP, { link: `${c.bR}/${t}`, onPress: E, size: "large", style: k.ZP.button, type: "primaryFilled" }, "Done"));
                    return n.createElement(b.Z, { backButtonType: "close", bottomBar: Z, history: l, onBackClick: _, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: i.container }, n.createElement(h.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, g), n.createElement(h.ZP, null, "Transfers may take up to 3 business days to complete. \n\nFunds may not be available in your account until the transfer is complete.")));
                },
                W = n.memo(Y),
                G = { context: "PaymentsExternalAccountTransfer" },
                J = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        a = (0, r.useHistory)(),
                        m = a.location?.state,
                        d = m?.step,
                        p = m?.amount,
                        h = m?.accountId,
                        y = m?.requestId,
                        { path: f } = u[e];
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: f, component: d, action: "impression" });
                        }, [t, d, f]),
                        n.createElement(o.H, { errorConfig: G }, p && h ? (d === i.ah.reviewPane ? n.createElement(N, { accountId: h, amount: p, transferDirection: e }) : d === i.ah.successPane && y ? n.createElement(W, { amount: p, requestId: y, transferDirection: e }) : n.createElement(l.Z, { to: c.gp })) : n.createElement(X, { transferDirection: e }))
                    );
                },
                ee = n.memo(J);
        },
        743843: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var n = a(202784),
                r = a(107267),
                o = a(360871),
                c = a(40567),
                s = a(167630),
                l = a(392237),
                i = a(676145),
                m = a(515510),
                u = a(782642),
                d = a(998564),
                p = a(514639),
                h = a(615027),
                y = a(99387),
                f = a(597897),
                b = a(325686),
                g = a(10622),
                E = a.n(g),
                k = (a(585488), a(437429)),
                P = a.n(k),
                _ = a(529356),
                Z = a(731708),
                w = a(922281),
                I = a(736063),
                C = a(725516),
                v = a(43429),
                S = a(743080);
            const D = f.Z,
                M = ({ paymentMethodId: e, redirectPath: t }) => {
                    const a = (0, r.useHistory)(),
                        o = P()(),
                        c = (0, C.z)(),
                        l = (0, u.p)();
                    n.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const i = n.useCallback(
                        (e) => {
                            clearInterval(e), a.replace(t ?? p.gp), l({ text: "Something went wrong. Please try again later." });
                        },
                        [a, t, l],
                    );
                    return (
                        n.useEffect(() => {
                            let n = 0;
                            const r = () => {
                                n >= v.wG
                                    ? (c.scribe({ page: "payment-method-poller", section: "polling", action: "failure" }), i(s))
                                    : ((n += 1),
                                      (({ environment: e, paymentMethodId: t }) =>
                                          E()(e, D, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: o, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === w.D.Active && (clearInterval(s), a.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              i(s);
                                          }));
                            };
                            r();
                            const s = setInterval(r, v.Ln);
                            return () => clearInterval(s);
                        }, [c, o, i, a, e, t]),
                        n.createElement(_.Z, { graphicDisplayMode: "illustration", graphicStyle: S.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: n.createElement(b.Z, { style: T.container }, n.createElement(Z.ZP, null, "This may take a few seconds."), n.createElement(s.Z, { style: T.activityIndicator })) })
                    );
                },
                T = l.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                A = { context: "PaymentMethodPoller" },
                x = (e) => n.createElement(I.H, { errorConfig: A }, n.createElement(M, e)),
                z = n.memo(x);
            var B = a(144098),
                L = a(351743),
                R = a.n(L),
                q = a(727384);
            const H = B.Z,
                $ = () => {
                    const [e, t] = R()(H);
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
                                        updater: q.QE,
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const V = a(652730).Z,
                F = () => {
                    const [e, t] = R()(V);
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
                                        updater: q.QE,
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                O = "xpaymentsLinkToken",
                N = "Something went wrong. Please try again later.",
                U = ({ linkToken: e }) => {
                    const t = (0, r.useHistory)(),
                        [a, o] = n.useState(!1),
                        [l, f] = n.useState(!1),
                        [b, g] = n.useState(!1),
                        [E, k] = n.useState(null),
                        [P, _] = n.useState(!1),
                        [Z, w] = $(),
                        [I, C] = F(),
                        v = (0, u.p)(),
                        S = window.location.href,
                        D = S?.includes("oauth_state_id="),
                        M = t.location?.query?.token,
                        T = t.location?.state,
                        { linkType: A = p.P_.linkExternalAccount, token: x, redirectPath: B = p.gp, targetRole: L = m.N.KycDocumentsVerified, closePath: R, paymentMethodId: q } = T || {},
                        H = e ?? x ?? M ?? E,
                        V = n.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(O), A)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        q &&
                                            I({ paymentMethodId: q })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    g(!0), v({ text: N });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            Z({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    g(!0), v({ text: N });
                                                });
                                }
                            },
                            [A, I, q, v, Z],
                        ),
                        U = n.useCallback(() => {
                            g(!0);
                        }, []),
                        j = n.useCallback(() => {
                            f(!0);
                        }, []),
                        Q = n.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) _(!0);
                        }, []),
                        X = { token: H, onSuccess: V, onLoad: j, onEvent: Q, onExit: U, ...(D ? { receivedRedirectUri: S } : null) },
                        { open: Y, ready: W } = (0, c.usePlaidLink)(X);
                    if (
                        (n.useEffect(() => {
                            D &&
                                d.Yh.get(O)?.then((e) => {
                                    e && (0, i.Z)(e) && k(e);
                                });
                        }, [D]),
                        n.useEffect(() => {
                            D || d.Yh.set(O, H);
                        }, [D, H]),
                        n.useEffect(() => {
                            H && W && Y();
                        }, [H, W, Y]),
                        !H)
                    )
                        return D ? n.createElement(s.Z, { style: K.loadingStyle }) : n.createElement(h.Z, { to: "/" });
                    if (!l || !W) return n.createElement(s.Z, { style: K.loadingStyle });
                    switch (A) {
                        case p.P_.onboarding:
                            return P ? (a ? n.createElement(y.default, { linkType: A }) : n.createElement(h.Z, { to: B })) : null;
                        case p.P_.linkExternalAccount:
                            return w ? n.createElement(s.Z, { style: K.loadingStyle }) : a ? n.createElement(h.Z, { to: B }) : b ? n.createElement(h.Z, { to: R ?? B }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return P && a ? n.createElement(y.default, { linkType: A, redirectPath: B, targetRole: L }) : b ? n.createElement(h.Z, { to: B }) : null;
                        case p.P_.verifyPaymentMethod:
                            return C ? n.createElement(s.Z, { style: K.loadingStyle }) : a && q ? n.createElement(z, { paymentMethodId: q, redirectPath: B }) : a || b ? n.createElement(h.Z, { to: B }) : null;
                        default:
                            return null;
                    }
                },
                j = n.memo(U),
                K = l.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                Q = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return o.L.Plaid, n.createElement(j, e);
                },
                X = n.memo(Q);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-0cabf78d.f15b355a.js.map
