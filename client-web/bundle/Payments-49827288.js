"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-49827288"],
    {
        513048: (e, t, n) => {
            n.r(t), n.d(t, { DisableOutgoingPaymentsScreen: () => E, default: () => w, styles: () => C });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                c = n(731708),
                s = n(154003),
                l = n(167630),
                i = n(392237),
                u = n(637919),
                m = n(980407),
                d = n(652904),
                p = n(736063),
                y = n(514639),
                h = n(293115),
                f = n(24568),
                g = n(743080);
            const b = { page: "money", section: "disable-transfers" },
                E = (e) => {
                    const t = (0, g.jh)();
                    return a.createElement(d.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(u.default, { style: C.icon }), a.createElement(r.Z, { style: C.textContainer }, a.createElement(c.ZP, { size: "title3", weight: "medium" }, "Are you sure you would like to disable all outgoing payments?"), a.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, "This may impact bill payments or any automatic transfers that have been set up. You will still be able to receive payments to your account."))));
                },
                P = () => {
                    const e = (0, g.jh)(),
                        t = (0, o.useHistory)(),
                        { handlePreferencesChange: n, isInProgress: c, refetch: i } = (0, f.Z)(),
                        u = a.useCallback(() => {
                            n("enable_bill_pay", !1), i(), t.replace(y.l_);
                        }, [n, t, i]),
                        m = a.useCallback(() => t.replace(y.l_), [t]);
                    return a.createElement(r.Z, { style: e.footer }, a.createElement(r.Z, { style: g.ZP.actionButtons }, a.createElement(s.ZP, { onClick: m, size: "large", style: g.ZP.button, type: "primaryOutlined" }, c ? a.createElement(l.Z, null) : "Cancel"), a.createElement(s.ZP, { onClick: u, size: "large", style: g.ZP.button, type: "primaryFilled" }, c ? a.createElement(l.Z, null) : "Confirm")));
                },
                Z = { context: "DISABLE_TRANSFERS" },
                k = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.replace(y.l_), [t]);
                    return a.createElement(p.H, { errorConfig: Z }, a.createElement(m.Z, { backButtonType: "close", bottomBar: a.createElement(P, null), history: t, onBackClick: n }, a.createElement(h.nO, { namespace: b }, a.createElement(p.H, { errorConfig: Z }, a.createElement(E, e)))));
                },
                C = i.default.create((e) => ({ icon: { width: e.spaces.space40, height: e.spaces.space40, fill: e.colors.text }, textContainer: { flex: 1, gap: e.spaces.space16 }, controls: { flex: 1, alignItems: "space-evenly", flexDirection: "row", gap: e.spaces.space12 } })),
                w = a.memo(k);
        },
        67356: (e, t, n) => {
            n.r(t), n.d(t, { default: () => E });
            var a = n(807896),
                r = n(202784),
                o = n(107267),
                c = n(111677),
                s = n.n(c),
                l = n(883229),
                i = n(943914),
                u = n(514639),
                m = n(445664),
                d = n(827309);
            const p = s().j24c37b2,
                y = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                h = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state?.errors,
                        s = c?.[0]?.id,
                        l = s ? y[s] : null,
                        i = r.useCallback(() => {
                            a.replace(n ? u.gp : "/");
                        }, [a, n]);
                    return r.createElement(d.Z, { actionLabel: p, headline: e, history: a, onAction: i, onClose: i, subtext: l ?? t, supportUrl: u.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, m.Z)({ fetchKey: "Payments" });
                    return r.createElement(h, (0, a.Z)({}, e, { isActive: t }));
                },
                g = { context: "PAYMENTS_ERROR" },
                b = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(h, (0, a.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(l.N, { errorConfig: g, fallback: t }, r.createElement(i.B, null, r.createElement(f, e)));
                },
                E = r.memo(b);
        },
        554337: (e, t, n) => {
            n.d(t, { Z: () => ie });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(514639),
                s = n(412450),
                l = n(725516),
                i = n(615027),
                u = n(43429),
                m = n(226332),
                d = n(436117);
            const p = Object.freeze({ [u.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: "Confirm withdrawal", successTitle: ({ formattedAmount: e }) => `Your ${e} withdrawal successfully scheduled.`, linkAccountTitle: "How would you like to withdraw your funds?" }, [u.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: "Confirm deposit", successTitle: ({ formattedAmount: e }) => `Your ${e} deposit successfully scheduled.`, linkAccountTitle: "Choose a funding source", linkAccountSubtitle: "Funds are secure, insured, and will instantly start earning interest" } }),
                y = Object.freeze({ [u.Rz.debit]: d.d.CreateWithdrawal, [u.Rz.credit]: d.d.CreateDeposit });
            n(136728);
            var h = n(325686),
                f = n(731708),
                g = n(154003),
                b = n(167630),
                E = n(980407),
                P = n(445664),
                Z = n(634455),
                k = n(413713),
                C = n(655750),
                w = n(934265),
                _ = n(743080),
                I = n(727384),
                v = n(392237),
                A = n(212145),
                T = n(922281),
                M = n(125363),
                D = n(919022),
                x = n(392046),
                S = n(671738);
            const z = ({ accountId: e, addAccountLink: t, addBankCardLink: n, amountWithFees: r, balance: o, methodConfigs: c, onSelectAccount: s, paymentMethods: l, transferDirection: i }) => {
                    const m = (0, M.v9)(D.ZP.selectViewerUser),
                        d = i === u.Rz.debit,
                        { path: y } = p[i],
                        f = a.useMemo(() => {
                            const e = r?.feeAmount,
                                t = r?.currency;
                            return e && "0" !== e ? (0, I.vw)({ amount: e, currency: t }) : void 0;
                        }, [r]),
                        g = a.useMemo(() => `/i/money/${y}`, [y]),
                        b = a.useCallback(
                            (e) => {
                                const t = l?.find((t) => t.rest_id === e);
                                t && s && s(t);
                            },
                            [s, l],
                        ),
                        E = a.useCallback((r, m) => a.createElement(h.Z, { style: B.flexColumn, testID: m }, (r.type === u.dX.bank || r.type === u.dX.card) && l && s && t && n ? a.createElement(S.Z, { accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: f, methodConfigs: c, onSelectAccountId: b, paymentMethods: l, selectedAccount: r, transferDirection: i }) : a.createElement(x.Z, { account: r, balance: o, transferDirection: i })), [e, t, n, f, c, s, b, l, i, o]),
                        P = l?.find((t) => t.rest_id === e),
                        Z = (0, I.xe)({ method: P, methodConfigs: c, transferDirection: i }),
                        C = m ? { accountName: { name: m.name, screenName: m.screen_name }, avatar: { uri: m.profile_image_url_https }, accountType: "My Balance", type: u.dX.x } : null,
                        w = d ? C : Z,
                        _ = d ? Z : C,
                        v = P?.core?.details?.status === T.D.LoginRequired;
                    return a.createElement(a.Fragment, null, w ? E(w, "sender") : null, w && _ ? a.createElement(A.default, { style: B.arrow }) : null, _ ? E(_, "receiver") : null, v ? a.createElement(k.ZP, { errors: [{ error_code: T.D.LoginRequired }], linkState: { redirectPath: g, paymentMethodId: e }, opts: { counterPartyScreenName: d ? _?.accountName.screenName : w?.accountName.screenName } }) : null);
                },
                B = v.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 }, arrow: { alignSelf: "flex-start", marginStart: e.spaces.space12, height: e.spaces.space28, color: e.colors.gray400 } })),
                F = a.memo(z);
            var R = n(236706),
                L = (n(585488), n(351743)),
                N = n.n(L),
                W = n(726426),
                H = n.n(W);
            const O = R.Z,
                q = () => {
                    const e = a.useMemo(() => H()(), []),
                        [t, n] = N()(O);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a, currency: r }) =>
                                new Promise((o, c) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: r, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_deposit?.id,
                                                a = e?.create_deposit?.transaction_status,
                                                r = e?.create_deposit?.challenge_id,
                                                s = e?.create_deposit?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: r }) : c(s || t);
                                        },
                                        updater: I.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            var V = n(848739);
            const j = ({ count: e }) => `Funds will be available in up to ${e} business days`,
                Y = ({ account: e, methodConfigs: t, transferDirection: n }) => {
                    const a = (0, I.xe)({ method: e, methodConfigs: t, transferDirection: n }),
                        r = a?.config?.processingTime?.processing_time_type === V.l.RealTime,
                        o = a?.config?.processingTime?.max_duration_in_business_days ?? c.UJ;
                    return { settleText: r ? "Funds will be available instantly" : j({ count: o }), details: a };
                };
            const $ = n(220474).Z,
                K = () => {
                    const e = a.useMemo(() => H()(), []),
                        [t, n] = N()($);
                    return [
                        a.useCallback(
                            ({ accountId: n, amount: a, currency: r }) =>
                                new Promise((o, c) => {
                                    t({
                                        variables: { amount_local_micro: a, payment_method_id: n, currency: r, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_withdrawal?.id,
                                                a = e?.create_withdrawal?.challenge_id,
                                                r = e?.create_withdrawal?.transaction_status,
                                                s = e?.create_withdrawal?.errors;
                                            n ? o({ transactionId: n, challengeId: a, status: r }) : c(s || t);
                                        },
                                        updater: I.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                U = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, transferDirection: s }) => {
                    const i = (0, l.z)(),
                        m = (0, r.useHistory)(),
                        d = (0, _.jh)(),
                        [y, v] = a.useState(null),
                        [A, T] = q(),
                        [M, D] = K(),
                        { roles: x } = (0, P.Z)({ fetchKey: "Payments" }),
                        S = T || D,
                        { confirmTitle: z, path: B } = p[s],
                        R = `/i/money/${B}`,
                        L = o?.find((t) => t.rest_id === e),
                        N = a.useCallback(() => {
                            v(null);
                        }, []),
                        { baseAmount: W, currency: H, feeAmount: O, totalAmount: V } = t,
                        { balance: j } = (0, w.Z)(),
                        $ = a.useMemo(() => ({ paymentMethodId: e, redirectPath: R, redirectState: { accountId: e, amountWithFees: t, step: u.ah.reviewPane }, closePath: c.gp }), [e, t, R]),
                        U = a.useCallback(() => {
                            i.scribe({ page: "money", section: B, component: "review-transfer", element: "confirm", action: "click" }), N();
                            (s === u.Rz.credit ? A : M)({ amount: W, accountId: e, currency: H })
                                .then((n) => {
                                    const { challengeId: a, status: r, transactionId: o } = n;
                                    (0, I.i7)({ status: r }) ? a && m.push(c.vw, { challengeId: a, redirectPath: R, redirectState: { accountId: e, amountWithFees: t, step: u.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : m.replace(R, { step: u.ah.successPane, amountWithFees: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, k.XE)({ errors: e, roles: x });
                                    t ? m.replace(t, $) : v(e);
                                });
                        }, [i, B, N, s, A, M, W, e, H, m, R, t, x, $]),
                        Q = a.useCallback(() => {
                            i.scribe({ page: "money", section: B, component: "review-transfer", element: "cancel", action: "click" });
                        }, [i, B]),
                        { settleText: X } = Y({ account: L, methodConfigs: n, transferDirection: s }),
                        J = (0, I.y4)({ feeAmount: O, totalAmount: V, baseAmount: W }),
                        G = a.createElement(h.Z, { style: d.footer }, a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, X), a.createElement(C.Z, { description: a.createElement(Z.Z, { amount: W, currency: H, size: "body", weight: "normal" }), title: "Amount" }), O && a.createElement(C.Z, { description: "0" === O ? "Free" : a.createElement(Z.Z, { amount: O, currency: H, size: "body", weight: "normal" }), title: "Fee" }), J && V && "0" !== V && a.createElement(C.Z, { description: a.createElement(Z.Z, { amount: V, currency: H, size: "body", weight: "normal" }), title: "Total deducted from your account" }), y ? a.createElement(k.ZP, { errors: y, linkState: $, roles: x }) : null, a.createElement(h.Z, { style: _.ZP.actionButtons }, a.createElement(g.ZP, { link: c.gp, onPress: Q, size: "large", style: _.ZP.button, type: "primaryOutlined" }, "Cancel"), a.createElement(g.ZP, { disabled: S, onPress: U, size: "large", style: _.ZP.button, type: "primaryFilled" }, S ? a.createElement(b.Z, null) : "Confirm")));
                    return a.createElement(E.Z, { backButtonType: "back", bottomBar: G, history: m, withoutBottomBarMobile: !0 }, a.createElement(h.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: _.ZP.title, weight: "heavy" }, z), a.createElement(F, { accountId: e, amountWithFees: t, balance: j, methodConfigs: n, paymentMethods: o, transferDirection: s })));
                },
                Q = a.memo(U);
            var X = n(189305),
                J = n(281838),
                G = n(984067),
                ee = n(601463),
                te = n(423475);
            const ne = ({ methodConfigs: e, paymentMethods: t, transferDirection: n }) => {
                    const o = (0, l.z)(),
                        s = (0, r.useHistory)(),
                        m = (0, _.jh)(),
                        b = s.location?.state,
                        [Z, k] = a.useState(""),
                        [C, v] = a.useState(!0),
                        { permissions: A, roles: M } = (0, P.Z)({ fetchKey: "Payments" }),
                        { balance: D } = (0, w.Z)(),
                        { amountWithFees: x, calculateFee: S, debouncedCalculateFee: z, feeCalcInProgress: B } = (0, te.Z)(n),
                        R = t?.[0],
                        [L, N] = a.useState(R),
                        W = L?.rest_id,
                        H = n === u.Rz.debit,
                        { label: O, linkAccountSubtitle: q, linkAccountTitle: V, path: j } = p[n],
                        $ = a.useMemo(() => !Z || !x.baseAmount || !C || !W || L?.core?.details?.status !== T.D.Active || B, [W, Z, x.baseAmount, B, C, L?.core?.details?.status]),
                        K = a.useMemo(() => ({ ...b, step: u.ah.reviewPane, accountId: W, amountWithFees: x }), [W, x, b]),
                        U = `/i/money/${j}`,
                        Q = a.useMemo(() => ({ pathname: U, state: K }), [U, K]),
                        ne = (0, I.DO)({ roles: M, permissions: A, actionPermission: y[n] }),
                        { settleText: ae } = Y({ account: L, methodConfigs: e, transferDirection: n }),
                        re = a.useCallback(
                            (e) => {
                                k(e), z({ newAmount: e, newAccount: L });
                            },
                            [z, L],
                        ),
                        oe = a.useCallback(
                            (e) => {
                                N(e), S({ newAmount: Z, newAccount: e });
                            },
                            [Z, S],
                        ),
                        ce = a.useCallback(() => {
                            o.scribe({ page: "money", section: j, element: "transfer", action: "click" }), ne ? s.push(ne, { redirectPath: U, redirectState: K, closePath: c.gp }) : s.push(Q);
                        }, [o, s, j, U, Q, K, ne]),
                        se = a.useCallback(() => {
                            s.push(c.gp);
                        }, [s]),
                        le = a.useMemo(() => ({ redirectPath: U }), [U]),
                        ie = a.useMemo(() => ({ pathname: c.ac, state: le }), [le]),
                        ue = a.useMemo(() => ({ pathname: c.UA, state: le }), [le]),
                        me = A?.includes(d.d.CreatePaymentMethod);
                    return W ? a.createElement(E.Z, { backButtonType: "close", bottomBar: a.createElement(h.Z, { style: m.footer }, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, ae), a.createElement(g.ZP, { disabled: $, onPress: ce, size: "large", type: "primaryFilled" }, O)), history: s, onBackClick: se, withoutBottomBarMobile: !0 }, a.createElement(h.Z, { style: m.container }, a.createElement(f.ZP, { align: "left", size: "title4", style: _.ZP.title, weight: "bold" }, O), a.createElement(G.Z, { amount: Z, balance: D, isValid: C, label: "Enter amount", min: "1", name: "amount", setAmount: re, setIsValid: v, validateBalance: H }), a.createElement(F, { accountId: W, addAccountLink: ie, addBankCardLink: ue, amountWithFees: x, balance: D, methodConfigs: e, onSelectAccount: oe, paymentMethods: t, transferDirection: n }))) : me ? a.createElement(E.Z, { backButtonType: "close", history: s, onBackClick: se }, a.createElement(h.Z, { style: m.container }, a.createElement(f.ZP, { align: "left", size: "title4", style: _.ZP.title, weight: "bold" }, V), q && a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, q)), a.createElement(h.Z, { style: m.footer }, a.createElement(J.Z, { label: "Debit Card", link: ue, methodConfigs: e, transferDirection: n, variant: "tile" }), a.createElement(X.Z, { label: "Bank Account", link: ie, methodConfigs: e, transferDirection: n, variant: "tile" }), H ? null : a.createElement(ee.Z, null))) : a.createElement(i.Z, { to: ne ? { pathname: ne, state: { redirectPath: U, closePath: c.gp } } : c.gp });
                },
                ae = a.memo(ne),
                re = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, requestId: s, transferDirection: i }) => {
                    const m = (0, l.z)(),
                        d = (0, r.useHistory)(),
                        y = (0, _.jh)(),
                        { refetch: b } = (0, w.Z)(),
                        { path: P, successTitle: Z } = p[i],
                        k = o?.find((t) => t.rest_id === e),
                        { settleText: C } = Y({ account: k, methodConfigs: n, transferDirection: i }),
                        { baseAmount: v, currency: A } = t,
                        T = Z({ formattedAmount: (0, I.vw)({ amount: v, currency: A }) }),
                        M = a.useCallback(() => {
                            i === u.Rz.credit && b();
                        }, [b, i]),
                        D = a.useCallback(() => {
                            M(), d.push(c.gp);
                        }, [d, M]),
                        x = a.useCallback(() => {
                            m.scribe({ page: "money", section: P, component: "transfer-success", element: "view-details", action: "click" }), M(), s && d.push(`${c.bR}/${s}`);
                        }, [m, d, M, P, s]),
                        S = a.useCallback(() => {
                            m.scribe({ page: "money", section: P, component: "transfer-success", element: "done", action: "click" }), M(), d.push(c.gp);
                        }, [m, d, M, P]),
                        z = a.createElement(h.Z, { style: y.footer }, a.createElement(g.ZP, { onPress: x, size: "large", style: _.ZP.button, type: "primaryOutlined" }, "View Transaction Details"), a.createElement(g.ZP, { onPress: S, size: "large", style: _.ZP.button, type: "primaryFilled" }, "Done"));
                    return a.createElement(E.Z, { backButtonType: "close", bottomBar: z, history: d, onBackClick: D, withoutBottomBarMobile: !0 }, a.createElement(h.Z, { style: y.container }, a.createElement(f.ZP, { size: "title2", style: _.ZP.title, weight: "heavy" }, T), a.createElement(f.ZP, null, C)));
                },
                oe = a.memo(re),
                ce = { context: "PaymentsExternalAccountTransfer" },
                se = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        n = (0, r.useHistory)(),
                        { methodConfigs: o } = (0, s.Z)(),
                        d = n.location?.state,
                        y = d?.step,
                        h = d?.accountId,
                        f = d?.requestId,
                        g = d?.amountWithFees,
                        { path: b } = p[e],
                        { usablePaymentMethods: E } = (0, m.Z)();
                    return (
                        a.useEffect(() => {
                            t && t.scribe({ page: "money", section: b, component: y, action: "impression" });
                        }, [t, y, b]),
                        g && h ? (y === u.ah.reviewPane ? a.createElement(Q, { accountId: h, amountWithFees: g, methodConfigs: o, paymentMethods: E, transferDirection: e }) : y === u.ah.successPane && f ? a.createElement(oe, { accountId: h, amountWithFees: g, methodConfigs: o, paymentMethods: E, requestId: f, transferDirection: e }) : a.createElement(i.Z, { to: c.gp })) : a.createElement(ae, { methodConfigs: o, paymentMethods: E, transferDirection: e })
                    );
                };
            function le(e) {
                return a.createElement(o.H, { errorConfig: ce }, a.createElement(se, e));
            }
            const ie = a.memo(le);
        },
        743843: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var a = n(202784),
                r = n(107267),
                o = n(360871),
                c = n(40567),
                s = n(167630),
                l = n(392237),
                i = n(676145),
                u = n(515510),
                m = n(782642),
                d = n(998564),
                p = n(514639),
                y = n(615027),
                h = n(99387),
                f = n(597897),
                g = n(325686),
                b = n(10622),
                E = n.n(b),
                P = (n(585488), n(437429)),
                Z = n.n(P),
                k = n(731708),
                C = n(922281),
                w = n(736063),
                _ = n(725516),
                I = n(827309),
                v = n(43429),
                A = n(743080);
            const T = f.Z,
                M = ({ paymentMethodId: e, redirectPath: t }) => {
                    const n = (0, r.useHistory)(),
                        o = Z()(),
                        c = (0, _.z)(),
                        l = (0, m.p)();
                    a.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const i = a.useCallback(
                        (e) => {
                            clearInterval(e), n.replace(t ?? p.gp), l({ text: "Something went wrong. Please try again later." });
                        },
                        [n, t, l],
                    );
                    return (
                        a.useEffect(() => {
                            let a = 0;
                            const r = () => {
                                a >= v.wG
                                    ? (c.scribe({ page: "payment-method-poller", section: "polling", action: "failure" }), i(s))
                                    : ((a += 1),
                                      (({ environment: e, paymentMethodId: t }) =>
                                          E()(e, T, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: o, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === C.D.Active && (clearInterval(s), n.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              i(s);
                                          }));
                            };
                            r();
                            const s = setInterval(r, v.Ln);
                            return () => clearInterval(s);
                        }, [c, o, i, n, e, t]),
                        a.createElement(I.Z, { headline: "Verifying your bank account", subtext: a.createElement(g.Z, { style: D.container }, a.createElement(k.ZP, null, "This may take a few seconds."), a.createElement(s.Z, { style: A.ZP.poller })) })
                    );
                },
                D = l.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = { context: "PaymentMethodPoller" },
                S = (e) => a.createElement(w.H, { errorConfig: x }, a.createElement(M, e)),
                z = a.memo(S);
            var B = n(144098),
                F = n(351743),
                R = n.n(F),
                L = n(727384);
            const N = B.Z,
                W = () => {
                    const [e, t] = R()(N);
                    return [
                        a.useCallback(
                            ({ metadata: t, publicToken: n }) =>
                                new Promise((a, r) => {
                                    e({
                                        variables: { public_token: n, metadata: t },
                                        onCompleted: (e, t) => {
                                            const n = e?.exchange_public_token?.payment_methods;
                                            n ? a() : r(t);
                                        },
                                        updater: L.QE,
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            const H = n(652730).Z,
                O = () => {
                    const [e, t] = R()(H);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.payment_method_link_update_complete?.errors;
                                            r || t ? a(t ?? r) : n();
                                        },
                                        updater: L.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                q = "xpaymentsLinkToken",
                V = "Something went wrong. Please try again later.",
                j = ({ linkToken: e }) => {
                    const t = (0, r.useHistory)(),
                        [n, o] = a.useState(!1),
                        [l, f] = a.useState(!1),
                        [g, b] = a.useState(!1),
                        [E, P] = a.useState(null),
                        [Z, k] = a.useState(!1),
                        [C, w] = W(),
                        [_, I] = O(),
                        v = (0, m.p)(),
                        A = window.location.href,
                        T = A?.includes("oauth_state_id="),
                        M = t.location?.query?.token,
                        D = t.location?.state,
                        { linkType: x = p.P_.linkExternalAccount, token: S, redirectPath: B = p.gp, targetRole: F = u.N.KycDocumentsVerified, closePath: R, paymentMethodId: L } = D || {},
                        N = e ?? S ?? M ?? E,
                        H = a.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(q), x)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        L &&
                                            _({ paymentMethodId: L })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: V });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            C({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: V });
                                                });
                                }
                            },
                            [x, _, L, v, C],
                        ),
                        j = a.useCallback(() => {
                            b(!0);
                        }, []),
                        Y = a.useCallback(() => {
                            f(!0);
                        }, []),
                        K = a.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) k(!0);
                        }, []),
                        U = { token: N, onSuccess: H, onLoad: Y, onEvent: K, onExit: j, ...(T ? { receivedRedirectUri: A } : null) },
                        { open: Q, ready: X } = (0, c.usePlaidLink)(U);
                    if (
                        (a.useEffect(() => {
                            T &&
                                d.Yh.get(q)?.then((e) => {
                                    e && (0, i.Z)(e) && P(e);
                                });
                        }, [T]),
                        a.useEffect(() => {
                            T || d.Yh.set(q, N);
                        }, [T, N]),
                        a.useEffect(() => {
                            N && X && Q();
                        }, [N, X, Q]),
                        !N)
                    )
                        return T ? a.createElement(s.Z, { style: $.loadingStyle }) : a.createElement(y.Z, { to: "/" });
                    if (!l || !X) return a.createElement(s.Z, { style: $.loadingStyle });
                    switch (x) {
                        case p.P_.onboarding:
                            return Z ? (n ? a.createElement(h.default, { linkType: x }) : a.createElement(y.Z, { to: B })) : null;
                        case p.P_.linkExternalAccount:
                            return w ? a.createElement(s.Z, { style: $.loadingStyle }) : n ? a.createElement(y.Z, { to: B }) : g ? a.createElement(y.Z, { to: R ?? B }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return Z && n ? a.createElement(h.default, { linkType: x, redirectPath: B, targetRole: F }) : g ? a.createElement(y.Z, { to: B }) : null;
                        case p.P_.verifyPaymentMethod:
                            return I ? a.createElement(s.Z, { style: $.loadingStyle }) : n && L ? a.createElement(z, { paymentMethodId: L, redirectPath: B }) : n || g ? a.createElement(y.Z, { to: B }) : null;
                        default:
                            return null;
                    }
                },
                Y = a.memo(j),
                $ = l.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                K = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return o.L.Plaid, a.createElement(Y, e);
                },
                U = a.memo(K);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-49827288.f2c959ea.js.map
