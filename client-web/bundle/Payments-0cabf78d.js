"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-0cabf78d"],
    {
        991911: (e, t, a) => {
            a.d(t, { Z: () => G });
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
                y = a(731708),
                h = a(154003),
                f = a(167630),
                b = a(980407),
                E = a(445664),
                k = a(413713),
                P = a(743080),
                g = a(727384),
                _ = a(392237),
                Z = a(922281),
                w = a(125363),
                I = a(919022),
                C = a(392046),
                v = a(671738),
                M = a(226332);
            const S = ({ accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccount: r, transferDirection: o }) => {
                    const c = (0, w.v9)(I.ZP.selectViewerUser),
                        { usablePaymentMethods: s } = (0, M.Z)(),
                        { path: l } = u[o],
                        m = n.useMemo(() => `/i/money/${l}`, [l]),
                        d = n.useCallback(
                            (e) => {
                                const t = s?.find((t) => t.rest_id === e);
                                t && r && r(t);
                            },
                            [r, s],
                        ),
                        h = n.useCallback((o, c, l) => n.createElement(p.Z, { style: T.flexColumn, testID: l }, n.createElement(y.ZP, null, c), (o.type === i.dX.bank || o.type === i.dX.card) && s && r && t ? n.createElement(v.Z, { accountId: e, addAccountLink: t, addBankCardLink: a, onSelectAccountId: d, paymentMethods: s, selectedAccount: o }) : n.createElement(C.Z, { account: o })), [e, t, a, r, d, s]),
                        f = s?.find((t) => t.rest_id === e),
                        b = (0, g.Ou)(f),
                        E = c ? { accountName: { name: c.name, screenName: c.screen_name }, avatar: { uri: c.profile_image_url_https }, accountType: "X account", type: i.dX.x } : null,
                        P = o === i.Rz.debit,
                        _ = P ? E : b,
                        S = P ? b : E,
                        D = f?.core?.details?.status === Z.D.LoginRequired;
                    return n.createElement(n.Fragment, null, _ ? h(_, "From:", "sender") : null, S ? h(S, "To:", "receiver") : null, D ? n.createElement(k.ZP, { errors: [{ error_code: Z.D.LoginRequired }], linkState: { redirectPath: m, paymentMethodId: e } }) : null);
                },
                T = _.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 } })),
                D = n.memo(S);
            var A = a(236706),
                z = (a(585488), a(351743)),
                x = a.n(z),
                B = a(726426),
                L = a.n(B);
            const R = A.Z,
                q = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = x()(R);
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
                                        updater: g.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                };
            const H = a(220474).Z,
                $ = () => {
                    const e = n.useMemo(() => L()(), []),
                        [t, a] = x()(H);
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
                                        updater: g.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                F = ({ accountId: e, amount: t, transferDirection: a }) => {
                    const o = (0, s.z)(),
                        l = (0, r.useHistory)(),
                        m = (0, P.jh)(),
                        d = (0, g.Dc)(t),
                        [_, Z] = n.useState(null),
                        [w, I] = q(),
                        [C, v] = $(),
                        { roles: M } = (0, E.Z)({ fetchKey: "Payments" }),
                        S = I || v,
                        { confirmTitle: T, path: A } = u[a],
                        z = `/i/money/${A}`,
                        x = T({ formattedAmount: (0, g.p2)({ amount: d }) }),
                        B = n.useCallback(() => {
                            Z(null);
                        }, []),
                        L = n.useMemo(() => ({ paymentMethodId: e, redirectPath: z, redirectState: { accountId: e, amount: t, step: i.ah.reviewPane }, closePath: c.gp }), [e, t, z]),
                        R = n.useCallback(() => {
                            o.scribe({ page: "money", section: A, component: "review-transfer", element: "confirm", action: "click" }), B();
                            (a === i.Rz.credit ? w : C)({ amount: d.toString(), accountId: e })
                                .then((a) => {
                                    const { challengeId: n, status: r, transactionId: o } = a;
                                    (0, g.i7)({ status: r }) ? n && l.push(c.vw, { challengeId: n, redirectPath: z, redirectState: { accountId: e, amount: t, step: i.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : l.replace(z, { step: i.ah.successPane, amount: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, k.XE)({ errors: e, roles: M });
                                    t ? l.replace(t, L) : Z(e);
                                });
                        }, [o, A, B, a, w, C, d, e, l, z, t, M, L]),
                        H = n.useCallback(() => {
                            o.scribe({ page: "money", section: A, component: "review-transfer", element: "cancel", action: "click" });
                        }, [o, A]),
                        F = n.createElement(p.Z, { style: m.footer }, _ ? n.createElement(k.ZP, { errors: _, linkState: L, roles: M }) : null, n.createElement(y.ZP, { size: "subtext2" }, "Please note that while transfers typically take 3 business days to complete, they may complete sooner or take longer based on a number of factors, including, for example, confirmations from your external bank. Funds may not be available in your account until the transfer is complete."), n.createElement(p.Z, { style: P.ZP.actionButtons }, n.createElement(h.ZP, { link: c.gp, onPress: H, size: "large", style: P.ZP.button, type: "primaryOutlined" }, "Cancel"), n.createElement(h.ZP, { disabled: S, onPress: R, size: "large", style: P.ZP.button, type: "primaryFilled" }, S ? n.createElement(f.Z, null) : "Confirm")));
                    return n.createElement(b.Z, { backButtonType: "back", bottomBar: F, history: l, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: m.container }, n.createElement(y.ZP, { size: "title2", style: P.ZP.title, weight: "heavy" }, x), n.createElement(D, { accountId: e, transferDirection: a })));
                },
                O = n.memo(F);
            var V = a(952793),
                N = a(984067),
                U = a(934265);
            const j = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        a = (0, r.useHistory)(),
                        o = (0, P.jh)(),
                        f = a.location?.state,
                        [k, _] = n.useState(""),
                        [w, I] = n.useState(!0),
                        C = (0, V.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: v, roles: S } = (0, E.Z)({ fetchKey: "Payments" }),
                        { usablePaymentMethods: T } = (0, M.Z)(),
                        { balance: A } = (0, U.Z)(),
                        z = T?.[0],
                        [x, B] = n.useState(z),
                        L = x?.rest_id,
                        R = e === i.Rz.debit,
                        { label: q, path: H } = u[e],
                        $ = !k || !w || !L || x?.core?.details?.status !== Z.D.Active,
                        F = n.useMemo(() => ({ ...f, step: i.ah.reviewPane, amount: k, accountId: L }), [L, k, f]),
                        O = `/i/money/${H}`,
                        j = n.useMemo(() => ({ pathname: O, state: F }), [O, F]),
                        K = (0, g.DO)({ roles: S, permissions: v, actionPermission: d[e] }),
                        X = n.useCallback(() => {
                            t.scribe({ page: "money", section: H, element: "transfer", action: "click" }), K ? a.push(K, { redirectPath: O, redirectState: F, closePath: c.gp }) : a.push(j);
                        }, [t, a, H, O, j, F, K]),
                        Q = n.useCallback(() => {
                            a.push(c.gp);
                        }, [a]),
                        Y = n.createElement(p.Z, { style: o.footer }, n.createElement(h.ZP, { disabled: $, onPress: X, size: "large", type: "primaryFilled" }, q)),
                        W = n.useMemo(() => ({ redirectPath: O }), [O]),
                        G = n.useMemo(() => ({ pathname: c.ac, state: W }), [W]),
                        J = n.useMemo(() => ({ pathname: c.UA, state: W }), [W]),
                        ee = v?.includes(m.d.CreatePaymentMethod),
                        te = C && ee;
                    return L ? n.createElement(b.Z, { backButtonType: "close", bottomBar: Y, history: a, onBackClick: Q, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: o.container }, n.createElement(y.ZP, { align: "center", size: "title2", style: P.ZP.title, weight: "heavy" }, R ? q : "Deposit"), n.createElement(N.Z, { amount: k, balance: A, isValid: w, label: "Enter amount", min: "1", name: "amount", setAmount: _, setIsValid: I, validateBalance: R }), n.createElement(D, { accountId: L, addAccountLink: G, addBankCardLink: te ? J : void 0, onSelectAccount: B, transferDirection: e }))) : n.createElement(l.Z, { to: te ? J : ee ? G : K ? { pathname: K, state: { redirectPath: O, closePath: c.gp } } : c.gp });
                },
                K = n.memo(j),
                X = ({ amount: e, requestId: t, transferDirection: a }) => {
                    const o = (0, s.z)(),
                        l = (0, r.useHistory)(),
                        i = (0, P.jh)(),
                        m = (0, g.Dc)(e),
                        { path: d, successTitle: f } = u[a],
                        E = f({ formattedAmount: (0, g.p2)({ amount: m }) }),
                        k = n.useCallback(() => {
                            o.scribe({ page: "money", section: d, component: "transfer-success", element: "done", action: "click" });
                        }, [o, d]),
                        _ = n.useCallback(() => {
                            l.push(c.gp);
                        }, [l]),
                        Z = n.createElement(p.Z, { style: i.footer }, n.createElement(h.ZP, { link: `${c.bR}/${t}`, onPress: k, size: "large", style: P.ZP.button, type: "primaryFilled" }, "Done"));
                    return n.createElement(b.Z, { backButtonType: "close", bottomBar: Z, history: l, onBackClick: _, withoutBottomBarMobile: !0 }, n.createElement(p.Z, { style: i.container }, n.createElement(y.ZP, { size: "title2", style: P.ZP.title, weight: "heavy" }, E), n.createElement(y.ZP, null, "Transfers may take up to 3 business days to complete. \n\nFunds may not be available in your account until the transfer is complete.")));
                },
                Q = n.memo(X),
                Y = { context: "PaymentsExternalAccountTransfer" },
                W = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        a = (0, r.useHistory)(),
                        m = a.location?.state,
                        d = m?.step,
                        p = m?.amount,
                        y = m?.accountId,
                        h = m?.requestId,
                        { path: f } = u[e];
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: f, component: d, action: "impression" });
                        }, [t, d, f]),
                        n.createElement(o.H, { errorConfig: Y }, p && y ? (d === i.ah.reviewPane ? n.createElement(O, { accountId: y, amount: p, transferDirection: e }) : d === i.ah.successPane && h ? n.createElement(Q, { amount: p, requestId: h, transferDirection: e }) : n.createElement(l.Z, { to: c.gp })) : n.createElement(K, { transferDirection: e }))
                    );
                },
                G = n.memo(W);
        },
        743843: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Q });
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
                y = a(615027),
                h = a(99387),
                f = a(597897),
                b = a(325686),
                E = a(10622),
                k = a.n(E),
                P = (a(585488), a(437429)),
                g = a.n(P),
                _ = a(529356),
                Z = a(731708),
                w = a(922281),
                I = a(736063),
                C = a(725516),
                v = a(43429),
                M = a(743080);
            const S = f.Z,
                T = ({ paymentMethodId: e, redirectPath: t }) => {
                    const a = (0, r.useHistory)(),
                        o = g()(),
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
                                          k()(e, S, { payment_method_id: t }, { fetchPolicy: "network-only" })
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
                        n.createElement(_.Z, { graphicDisplayMode: "illustration", graphicStyle: M.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: n.createElement(b.Z, { style: D.container }, n.createElement(Z.ZP, null, "This may take a few seconds."), n.createElement(s.Z, { style: D.activityIndicator })) })
                    );
                },
                D = l.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                A = { context: "PaymentMethodPoller" },
                z = (e) => n.createElement(I.H, { errorConfig: A }, n.createElement(T, e)),
                x = n.memo(z);
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
            const F = a(652730).Z,
                O = () => {
                    const [e, t] = R()(F);
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
                V = "xpaymentsLinkToken",
                N = "Something went wrong. Please try again later.",
                U = ({ linkToken: e }) => {
                    const t = (0, r.useHistory)(),
                        [a, o] = n.useState(!1),
                        [l, f] = n.useState(!1),
                        [b, E] = n.useState(!1),
                        [k, P] = n.useState(null),
                        [g, _] = n.useState(!1),
                        [Z, w] = $(),
                        [I, C] = O(),
                        v = (0, u.p)(),
                        M = window.location.href,
                        S = M?.includes("oauth_state_id="),
                        T = t.location?.query?.token,
                        D = t.location?.state,
                        { linkType: A = p.P_.linkExternalAccount, token: z, redirectPath: B = p.gp, targetRole: L = m.N.KycDocumentsVerified, closePath: R, paymentMethodId: q } = D || {},
                        H = e ?? z ?? T ?? k,
                        F = n.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(V), A)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        q &&
                                            I({ paymentMethodId: q })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    E(!0), v({ text: N });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            Z({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    E(!0), v({ text: N });
                                                });
                                }
                            },
                            [A, I, q, v, Z],
                        ),
                        U = n.useCallback(() => {
                            E(!0);
                        }, []),
                        j = n.useCallback(() => {
                            f(!0);
                        }, []),
                        X = n.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) _(!0);
                        }, []),
                        Q = { token: H, onSuccess: F, onLoad: j, onEvent: X, onExit: U, ...(S ? { receivedRedirectUri: M } : null) },
                        { open: Y, ready: W } = (0, c.usePlaidLink)(Q);
                    if (
                        (n.useEffect(() => {
                            S &&
                                d.Yh.get(V)?.then((e) => {
                                    e && (0, i.Z)(e) && P(e);
                                });
                        }, [S]),
                        n.useEffect(() => {
                            S || d.Yh.set(V, H);
                        }, [S, H]),
                        n.useEffect(() => {
                            H && W && Y();
                        }, [H, W, Y]),
                        !H)
                    )
                        return S ? n.createElement(s.Z, { style: K.loadingStyle }) : n.createElement(y.Z, { to: "/" });
                    if (!l || !W) return n.createElement(s.Z, { style: K.loadingStyle });
                    switch (A) {
                        case p.P_.onboarding:
                            return g ? (a ? n.createElement(h.default, { linkType: A }) : n.createElement(y.Z, { to: B })) : null;
                        case p.P_.linkExternalAccount:
                            return w ? n.createElement(s.Z, { style: K.loadingStyle }) : a ? n.createElement(y.Z, { to: B }) : b ? n.createElement(y.Z, { to: R ?? B }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return g && a ? n.createElement(h.default, { linkType: A, redirectPath: B, targetRole: L }) : b ? n.createElement(y.Z, { to: B }) : null;
                        case p.P_.verifyPaymentMethod:
                            return C ? n.createElement(s.Z, { style: K.loadingStyle }) : a && q ? n.createElement(x, { paymentMethodId: q, redirectPath: B }) : a || b ? n.createElement(y.Z, { to: B }) : null;
                        default:
                            return null;
                    }
                },
                j = n.memo(U),
                K = l.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                X = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return o.L.Plaid, n.createElement(j, e);
                },
                Q = n.memo(X);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-0cabf78d.ed0c2d5a.js.map
