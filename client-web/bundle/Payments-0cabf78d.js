"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-0cabf78d"],
    {
        164317: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(202784),
                o = n(107267),
                r = n(736063),
                c = n(514639),
                s = n(351990),
                i = n(725516),
                l = n(615027),
                m = n(43429),
                d = n(226332),
                u = n(436117);
            const p = Object.freeze({ [m.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} withdrawal?`, successTitle: ({ formattedAmount: e }) => `Your ${e} withdrawal successfully scheduled.` }, [m.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: ({ formattedAmount: e }) => `Confirm ${e} deposit?`, successTitle: ({ formattedAmount: e }) => `Your ${e} deposit successfully scheduled.` } }),
                h = Object.freeze({ [m.Rz.debit]: u.d.CreateWithdrawal, [m.Rz.credit]: u.d.CreateDeposit });
            n(136728);
            var y = n(325686),
                f = n(731708),
                g = n(154003),
                b = n(167630),
                E = n(980407),
                _ = n(445664),
                P = n(413713),
                k = n(743080),
                Z = n(727384),
                C = n(392237),
                w = n(212145),
                I = n(922281),
                v = n(125363),
                M = n(919022),
                D = n(777530),
                S = n(671738);
            const T = ({ accountId: e, addAccountLink: t, addBankCardLink: n, methodConfigs: o, onSelectAccount: r, paymentMethods: c, transferDirection: s }) => {
                    const i = (0, v.v9)(M.ZP.selectViewerUser),
                        l = s === m.Rz.debit,
                        { path: d } = p[s],
                        u = a.useMemo(() => `/i/money/${d}`, [d]),
                        h = a.useCallback(
                            (e) => {
                                const t = c?.find((t) => t.rest_id === e);
                                t && r && r(t);
                            },
                            [r, c],
                        ),
                        f = a.useCallback((i, l) => a.createElement(y.Z, { style: x.flexColumn, testID: l }, (i.type === m.dX.bank || i.type === m.dX.card) && c && r && t ? a.createElement(S.Z, { accountId: e, addAccountLink: t, addBankCardLink: n, methodConfigs: o, onSelectAccountId: h, paymentMethods: c, selectedAccount: i, transferDirection: s }) : a.createElement(D.Z, { account: i })), [e, t, n, o, r, h, c, s]),
                        g = c?.find((t) => t.rest_id === e),
                        b = (0, Z.xe)({ method: g, methodConfigs: o, transferDirection: s }),
                        E = i ? { accountName: { name: i.name, screenName: i.screen_name }, avatar: { uri: i.profile_image_url_https }, accountType: "My Balance", type: m.dX.x } : null,
                        _ = l ? E : b,
                        k = l ? b : E,
                        C = g?.core?.details?.status === I.D.LoginRequired;
                    return a.createElement(a.Fragment, null, _ ? f(_, "sender") : null, _ && k ? a.createElement(w.default, { style: x.arrow }) : null, k ? f(k, "receiver") : null, C ? a.createElement(P.ZP, { errors: [{ error_code: I.D.LoginRequired }], linkState: { redirectPath: u, paymentMethodId: e } }) : null);
                },
                x = C.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 }, arrow: { alignSelf: "flex-start", marginStart: e.spaces.space12, height: e.spaces.space28, color: e.colors.gray400 } })),
                z = a.memo(T);
            var A = n(236706),
                B = (n(585488), n(351743)),
                R = n.n(B),
                L = n(726426),
                q = n.n(L);
            const $ = A.Z,
                H = () => {
                    const e = a.useMemo(() => q()(), []),
                        [t, n] = R()($);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a }) =>
                                new Promise((o, r) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_deposit?.id,
                                                a = e?.create_deposit?.transaction_status,
                                                c = e?.create_deposit?.challenge_id,
                                                s = e?.create_deposit?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: c }) : r(s || t);
                                        },
                                        updater: Z.qQ,
                                        onError: r,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const V = n(220474).Z,
                F = () => {
                    const e = a.useMemo(() => q()(), []),
                        [t, n] = R()(V);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a }) =>
                                new Promise((o, r) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_withdrawal?.id,
                                                a = e?.create_withdrawal?.challenge_id,
                                                c = e?.create_withdrawal?.transaction_status,
                                                s = e?.create_withdrawal?.errors;
                                            n ? o({ transactionId: n, challengeId: a, status: c }) : r(s || t);
                                        },
                                        updater: Z.qQ,
                                        onError: r,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            var O = n(848739);
            const U = ({ account: e, methodConfigs: t, transferDirection: n }) => {
                    const a = (0, Z.xe)({ method: e, methodConfigs: t, transferDirection: n }),
                        o = a?.config?.processingTime?.processing_time_type === O.l.RealTime,
                        r = a?.config?.processingTime?.max_duration_in_business_days ?? c.UJ;
                    return o ? "Funds will be available instantly" : (({ count: e }) => `Funds will be available in up to ${e} business days`)({ count: r });
                },
                N = ({ accountId: e, amount: t, methodConfigs: n, paymentMethods: r, transferDirection: s }) => {
                    const l = (0, i.z)(),
                        d = (0, o.useHistory)(),
                        u = (0, k.jh)(),
                        h = (0, Z.Dc)(t),
                        [C, w] = a.useState(null),
                        [I, v] = H(),
                        [M, D] = F(),
                        { roles: S } = (0, _.Z)({ fetchKey: "Payments" }),
                        T = v || D,
                        { confirmTitle: x, path: A } = p[s],
                        B = `/i/money/${A}`,
                        R = r?.find((t) => t.rest_id === e),
                        L = x({ formattedAmount: (0, Z.p2)({ amount: h }) }),
                        q = a.useCallback(() => {
                            w(null);
                        }, []),
                        $ = a.useMemo(() => ({ paymentMethodId: e, redirectPath: B, redirectState: { accountId: e, amount: t, step: m.ah.reviewPane }, closePath: c.gp }), [e, t, B]),
                        V = a.useCallback(() => {
                            l.scribe({ page: "money", section: A, component: "review-transfer", element: "confirm", action: "click" }), q();
                            (s === m.Rz.credit ? I : M)({ amount: h.toString(), accountId: e })
                                .then((n) => {
                                    const { challengeId: a, status: o, transactionId: r } = n;
                                    (0, Z.i7)({ status: o }) ? a && d.push(c.vw, { challengeId: a, redirectPath: B, redirectState: { accountId: e, amount: t, step: m.ah.successPane, requestId: r }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : d.replace(B, { step: m.ah.successPane, amount: t, accountId: e, requestId: r });
                                })
                                .catch((e) => {
                                    const t = (0, P.XE)({ errors: e, roles: S });
                                    t ? d.replace(t, $) : w(e);
                                });
                        }, [l, A, q, s, I, M, h, e, d, B, t, S, $]),
                        O = a.useCallback(() => {
                            l.scribe({ page: "money", section: A, component: "review-transfer", element: "cancel", action: "click" });
                        }, [l, A]),
                        N = U({ account: R, methodConfigs: n, transferDirection: s }),
                        Y = a.createElement(y.Z, { style: u.footer }, C ? a.createElement(P.ZP, { errors: C, linkState: $, roles: S }) : null, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, N), a.createElement(y.Z, { style: k.ZP.actionButtons }, a.createElement(g.ZP, { link: c.gp, onPress: O, size: "large", style: k.ZP.button, type: "primaryOutlined" }, "Cancel"), a.createElement(g.ZP, { disabled: T, onPress: V, size: "large", style: k.ZP.button, type: "primaryFilled" }, T ? a.createElement(b.Z, null) : "Confirm")));
                    return a.createElement(E.Z, { backButtonType: "back", bottomBar: Y, history: d, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: u.container }, a.createElement(f.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, L), a.createElement(z, { accountId: e, methodConfigs: n, paymentMethods: r, transferDirection: s })));
                },
                Y = a.memo(N);
            var j = n(952793),
                K = n(984067),
                Q = n(934265);
            const X = ({ methodConfigs: e, paymentMethods: t, transferDirection: n }) => {
                    const r = (0, i.z)(),
                        s = (0, o.useHistory)(),
                        d = (0, k.jh)(),
                        b = s.location?.state,
                        [P, C] = a.useState(""),
                        [w, v] = a.useState(!0),
                        M = (0, j.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: D, roles: S } = (0, _.Z)({ fetchKey: "Payments" }),
                        { balance: T } = (0, Q.Z)(),
                        x = t?.[0],
                        [A, B] = a.useState(x),
                        R = A?.rest_id,
                        L = n === m.Rz.debit,
                        { label: q, path: $ } = p[n],
                        H = !P || !w || !R || A?.core?.details?.status !== I.D.Active,
                        V = a.useMemo(() => ({ ...b, step: m.ah.reviewPane, amount: P, accountId: R }), [R, P, b]),
                        F = `/i/money/${$}`,
                        O = a.useMemo(() => ({ pathname: F, state: V }), [F, V]),
                        N = (0, Z.DO)({ roles: S, permissions: D, actionPermission: h[n] }),
                        Y = a.useCallback(() => {
                            r.scribe({ page: "money", section: $, element: "transfer", action: "click" }), N ? s.push(N, { redirectPath: F, redirectState: V, closePath: c.gp }) : s.push(O);
                        }, [r, s, $, F, O, V, N]),
                        X = a.useCallback(() => {
                            s.push(c.gp);
                        }, [s]),
                        W = U({ account: A, methodConfigs: e, transferDirection: n }),
                        J = a.createElement(y.Z, { style: d.footer }, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, W), a.createElement(g.ZP, { disabled: H, onPress: Y, size: "large", type: "primaryFilled" }, q)),
                        G = a.useMemo(() => ({ redirectPath: F }), [F]),
                        ee = a.useMemo(() => ({ pathname: c.ac, state: G }), [G]),
                        te = a.useMemo(() => ({ pathname: c.UA, state: G }), [G]),
                        ne = D?.includes(u.d.CreatePaymentMethod),
                        ae = M && ne;
                    return R ? a.createElement(E.Z, { backButtonType: "close", bottomBar: J, history: s, onBackClick: X, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: d.container }, a.createElement(f.ZP, { align: "center", size: "title2", style: k.ZP.title, weight: "heavy" }, L ? q : "Deposit"), a.createElement(K.Z, { amount: P, balance: T, isValid: w, label: "Enter amount", min: "1", name: "amount", setAmount: C, setIsValid: v, validateBalance: L }), a.createElement(z, { accountId: R, addAccountLink: ee, addBankCardLink: ae ? te : void 0, methodConfigs: e, onSelectAccount: B, paymentMethods: t, transferDirection: n }))) : a.createElement(l.Z, { to: ae ? te : ne ? ee : N ? { pathname: N, state: { redirectPath: F, closePath: c.gp } } : c.gp });
                },
                W = a.memo(X),
                J = ({ accountId: e, amount: t, methodConfigs: n, paymentMethods: r, requestId: s, transferDirection: l }) => {
                    const m = (0, i.z)(),
                        d = (0, o.useHistory)(),
                        u = (0, k.jh)(),
                        h = (0, Z.Dc)(t),
                        { path: b, successTitle: _ } = p[l],
                        P = r?.find((t) => t.rest_id === e),
                        C = U({ account: P, methodConfigs: n, transferDirection: l }),
                        w = _({ formattedAmount: (0, Z.p2)({ amount: h }) }),
                        I = a.useCallback(() => {
                            m.scribe({ page: "money", section: b, component: "transfer-success", element: "done", action: "click" });
                        }, [m, b]),
                        v = a.useCallback(() => {
                            d.push(c.gp);
                        }, [d]),
                        M = a.createElement(y.Z, { style: u.footer }, a.createElement(g.ZP, { link: `${c.bR}/${s}`, onPress: I, size: "large", style: k.ZP.button, type: "primaryFilled" }, "Done"));
                    return a.createElement(E.Z, { backButtonType: "close", bottomBar: M, history: d, onBackClick: v, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: u.container }, a.createElement(f.ZP, { size: "title2", style: k.ZP.title, weight: "heavy" }, w), a.createElement(f.ZP, null, C)));
                },
                G = a.memo(J),
                ee = { context: "PaymentsExternalAccountTransfer" },
                te = ({ transferDirection: e }) => {
                    const t = (0, i.z)(),
                        n = (0, o.useHistory)(),
                        { methodConfigs: r } = (0, s.Z)(),
                        u = n.location?.state,
                        h = u?.step,
                        y = u?.amount,
                        f = u?.accountId,
                        g = u?.requestId,
                        { path: b } = p[e],
                        { usablePaymentMethods: E } = (0, d.Z)();
                    return (
                        a.useEffect(() => {
                            t && t.scribe({ page: "money", section: b, component: h, action: "impression" });
                        }, [t, h, b]),
                        y && f ? (h === m.ah.reviewPane ? a.createElement(Y, { accountId: f, amount: y, methodConfigs: r, paymentMethods: E, transferDirection: e }) : h === m.ah.successPane && g ? a.createElement(G, { accountId: f, amount: y, methodConfigs: r, paymentMethods: E, requestId: g, transferDirection: e }) : a.createElement(l.Z, { to: c.gp })) : a.createElement(W, { methodConfigs: r, paymentMethods: E, transferDirection: e })
                    );
                };
            function ne(e) {
                return a.createElement(r.H, { errorConfig: ee }, a.createElement(te, e));
            }
            const ae = a.memo(ne);
        },
        743843: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Q });
            var a = n(202784),
                o = n(107267),
                r = n(360871),
                c = n(40567),
                s = n(167630),
                i = n(392237),
                l = n(676145),
                m = n(515510),
                d = n(782642),
                u = n(998564),
                p = n(514639),
                h = n(615027),
                y = n(99387),
                f = n(597897),
                g = n(325686),
                b = n(10622),
                E = n.n(b),
                _ = (n(585488), n(437429)),
                P = n.n(_),
                k = n(529356),
                Z = n(731708),
                C = n(922281),
                w = n(736063),
                I = n(725516),
                v = n(43429),
                M = n(743080);
            const D = f.Z,
                S = ({ paymentMethodId: e, redirectPath: t }) => {
                    const n = (0, o.useHistory)(),
                        r = P()(),
                        c = (0, I.z)(),
                        i = (0, d.p)();
                    a.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const l = a.useCallback(
                        (e) => {
                            clearInterval(e), n.replace(t ?? p.gp), i({ text: "Something went wrong. Please try again later." });
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
                                          E()(e, D, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: r, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === C.D.Active && (clearInterval(s), n.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              l(s);
                                          }));
                            };
                            o();
                            const s = setInterval(o, v.Ln);
                            return () => clearInterval(s);
                        }, [c, r, l, n, e, t]),
                        a.createElement(k.Z, { graphicDisplayMode: "illustration", graphicStyle: M.ir, headline: "Verifying your bank account", onAction: () => {}, subtext: a.createElement(g.Z, { style: T.container }, a.createElement(Z.ZP, null, "This may take a few seconds."), a.createElement(s.Z, { style: T.activityIndicator })) })
                    );
                },
                T = i.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = { context: "PaymentMethodPoller" },
                z = (e) => a.createElement(w.H, { errorConfig: x }, a.createElement(S, e)),
                A = a.memo(z);
            var B = n(144098),
                R = n(351743),
                L = n.n(R),
                q = n(727384);
            const $ = B.Z,
                H = () => {
                    const [e, t] = L()($);
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
                                        updater: q.QE,
                                        onError: o,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const V = n(652730).Z,
                F = () => {
                    const [e, t] = L()(V);
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
                                        updater: q.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                O = "xpaymentsLinkToken",
                U = "Something went wrong. Please try again later.",
                N = ({ linkToken: e }) => {
                    const t = (0, o.useHistory)(),
                        [n, r] = a.useState(!1),
                        [i, f] = a.useState(!1),
                        [g, b] = a.useState(!1),
                        [E, _] = a.useState(null),
                        [P, k] = a.useState(!1),
                        [Z, C] = H(),
                        [w, I] = F(),
                        v = (0, d.p)(),
                        M = window.location.href,
                        D = M?.includes("oauth_state_id="),
                        S = t.location?.query?.token,
                        T = t.location?.state,
                        { linkType: x = p.P_.linkExternalAccount, token: z, redirectPath: B = p.gp, targetRole: R = m.N.KycDocumentsVerified, closePath: L, paymentMethodId: q } = T || {},
                        $ = e ?? z ?? S ?? E,
                        V = a.useCallback(
                            (e, t) => {
                                switch ((u.Yh.delete(O), x)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        q &&
                                            w({ paymentMethodId: q })
                                                .then(() => {
                                                    r(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: U });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            Z({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    r(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: U });
                                                });
                                }
                            },
                            [x, w, q, v, Z],
                        ),
                        N = a.useCallback(() => {
                            b(!0);
                        }, []),
                        Y = a.useCallback(() => {
                            f(!0);
                        }, []),
                        K = a.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) k(!0);
                        }, []),
                        Q = { token: $, onSuccess: V, onLoad: Y, onEvent: K, onExit: N, ...(D ? { receivedRedirectUri: M } : null) },
                        { open: X, ready: W } = (0, c.usePlaidLink)(Q);
                    if (
                        (a.useEffect(() => {
                            D &&
                                u.Yh.get(O)?.then((e) => {
                                    e && (0, l.Z)(e) && _(e);
                                });
                        }, [D]),
                        a.useEffect(() => {
                            D || u.Yh.set(O, $);
                        }, [D, $]),
                        a.useEffect(() => {
                            $ && W && X();
                        }, [$, W, X]),
                        !$)
                    )
                        return D ? a.createElement(s.Z, { style: j.loadingStyle }) : a.createElement(h.Z, { to: "/" });
                    if (!i || !W) return a.createElement(s.Z, { style: j.loadingStyle });
                    switch (x) {
                        case p.P_.onboarding:
                            return P ? (n ? a.createElement(y.default, { linkType: x }) : a.createElement(h.Z, { to: B })) : null;
                        case p.P_.linkExternalAccount:
                            return C ? a.createElement(s.Z, { style: j.loadingStyle }) : n ? a.createElement(h.Z, { to: B }) : g ? a.createElement(h.Z, { to: L ?? B }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return P && n ? a.createElement(y.default, { linkType: x, redirectPath: B, targetRole: R }) : g ? a.createElement(h.Z, { to: B }) : null;
                        case p.P_.verifyPaymentMethod:
                            return I ? a.createElement(s.Z, { style: j.loadingStyle }) : n && q ? a.createElement(A, { paymentMethodId: q, redirectPath: B }) : n || g ? a.createElement(h.Z, { to: B }) : null;
                        default:
                            return null;
                    }
                },
                Y = a.memo(N),
                j = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                K = (e) => {
                    const t = (0, o.useHistory)();
                    t.location;
                    return r.L.Plaid, a.createElement(Y, e);
                },
                Q = a.memo(K);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-0cabf78d.345bb71a.js.map
