"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-49827288"],
    {
        513048: (e, t, n) => {
            n.r(t), n.d(t, { DisableOutgoingPaymentsScreen: () => E, default: () => C, styles: () => _ });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                c = n(731708),
                s = n(154003),
                l = n(167630),
                i = n(392237),
                m = n(637919),
                u = n(980407),
                d = n(652904),
                p = n(736063),
                h = n(514639),
                y = n(293115),
                f = n(24568),
                g = n(743080);
            const b = { page: "money", section: "disable-transfers" },
                E = (e) => {
                    const t = (0, g.jh)();
                    return a.createElement(d.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(m.default, { style: _.icon }), a.createElement(r.Z, { style: _.textContainer }, a.createElement(c.ZP, { size: "title3", weight: "medium" }, "Are you sure you would like to disable all outgoing payments?"), a.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, "This may impact bill payments or any automatic transfers that have been set up. You will still be able to receive payments to your account."))));
                },
                P = () => {
                    const e = (0, g.jh)(),
                        t = (0, o.useHistory)(),
                        { handlePreferencesChange: n, isInProgress: c, refetch: i } = (0, f.Z)(),
                        m = a.useCallback(() => {
                            n("enable_bill_pay", !1), i(), t.replace(h.l_);
                        }, [n, t, i]),
                        u = a.useCallback(() => t.replace(h.l_), [t]);
                    return a.createElement(r.Z, { style: e.footer }, a.createElement(r.Z, { style: g.ZP.actionButtons }, a.createElement(s.ZP, { onClick: u, size: "large", style: g.ZP.button, type: "primaryOutlined" }, c ? a.createElement(l.Z, null) : "Cancel"), a.createElement(s.ZP, { onClick: m, size: "large", style: g.ZP.button, type: "primaryFilled" }, c ? a.createElement(l.Z, null) : "Confirm")));
                },
                Z = { context: "DISABLE_TRANSFERS" },
                k = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.replace(h.l_), [t]);
                    return a.createElement(p.H, { errorConfig: Z }, a.createElement(u.Z, { backButtonType: "close", bottomBar: a.createElement(P, null), history: t, onBackClick: n }, a.createElement(y.nO, { namespace: b }, a.createElement(p.H, { errorConfig: Z }, a.createElement(E, e)))));
                },
                _ = i.default.create((e) => ({ icon: { width: e.spaces.space40, height: e.spaces.space40, fill: e.colors.text }, textContainer: { flex: 1, gap: e.spaces.space16 }, controls: { flex: 1, alignItems: "space-evenly", flexDirection: "row", gap: e.spaces.space12 } })),
                C = a.memo(k);
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
                m = n(514639),
                u = n(445664),
                d = n(827309);
            const p = s().j24c37b2,
                h = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                y = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state?.errors,
                        s = c?.[0]?.id,
                        l = s ? h[s] : null,
                        i = r.useCallback(() => {
                            a.replace(n ? m.gp : "/");
                        }, [a, n]);
                    return r.createElement(d.Z, { actionLabel: p, headline: e, history: a, onAction: i, onClose: i, subtext: l ?? t, supportUrl: m.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, u.Z)({ fetchKey: "Payments" });
                    return r.createElement(y, (0, a.Z)({}, e, { isActive: t }));
                },
                g = { context: "PAYMENTS_ERROR" },
                b = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(y, (0, a.Z)({}, e, { isActive: !1 })) }), [e]);
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
                m = n(43429),
                u = n(226332),
                d = n(436117);
            const p = Object.freeze({ [m.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: "Confirm withdrawal", successTitle: ({ formattedAmount: e }) => `Your ${e} withdrawal successfully scheduled.` }, [m.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: "Confirm deposit", successTitle: ({ formattedAmount: e }) => `Your ${e} deposit successfully scheduled.` } }),
                h = Object.freeze({ [m.Rz.debit]: d.d.CreateWithdrawal, [m.Rz.credit]: d.d.CreateDeposit });
            n(136728);
            var y = n(325686),
                f = n(731708),
                g = n(154003),
                b = n(167630),
                E = n(980407),
                P = n(445664),
                Z = n(634455),
                k = n(413713),
                _ = n(655750),
                C = n(743080),
                w = n(727384),
                I = n(392237),
                v = n(212145),
                A = n(922281),
                M = n(125363),
                S = n(919022),
                T = n(392046),
                x = n(671738);
            const D = ({ accountId: e, addAccountLink: t, addBankCardLink: n, amountWithFees: r, methodConfigs: o, onSelectAccount: c, paymentMethods: s, transferDirection: l }) => {
                    const i = (0, M.v9)(S.ZP.selectViewerUser),
                        u = l === m.Rz.debit,
                        { path: d } = p[l],
                        h = a.useMemo(() => {
                            const e = r?.feeAmount,
                                t = r?.currency;
                            return e && "0" !== e ? (0, w.vw)({ amount: e, currency: t }) : void 0;
                        }, [r]),
                        f = a.useMemo(() => `/i/money/${d}`, [d]),
                        g = a.useCallback(
                            (e) => {
                                const t = s?.find((t) => t.rest_id === e);
                                t && c && c(t);
                            },
                            [c, s],
                        ),
                        b = a.useCallback((r, i) => a.createElement(y.Z, { style: z.flexColumn, testID: i }, (r.type === m.dX.bank || r.type === m.dX.card) && s && c && t ? a.createElement(x.Z, { accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: h, methodConfigs: o, onSelectAccountId: g, paymentMethods: s, selectedAccount: r, transferDirection: l }) : a.createElement(T.Z, { account: r })), [e, t, n, h, o, c, g, s, l]),
                        E = s?.find((t) => t.rest_id === e),
                        P = (0, w.xe)({ method: E, methodConfigs: o, transferDirection: l }),
                        Z = i ? { accountName: { name: i.name, screenName: i.screen_name }, avatar: { uri: i.profile_image_url_https }, accountType: "My Balance", type: m.dX.x } : null,
                        _ = u ? Z : P,
                        C = u ? P : Z,
                        I = E?.core?.details?.status === A.D.LoginRequired;
                    return a.createElement(a.Fragment, null, _ ? b(_, "sender") : null, _ && C ? a.createElement(v.default, { style: z.arrow }) : null, C ? b(C, "receiver") : null, I ? a.createElement(k.ZP, { errors: [{ error_code: A.D.LoginRequired }], linkState: { redirectPath: f, paymentMethodId: e }, opts: { counterPartyScreenName: u ? C?.accountName.screenName : _?.accountName.screenName } }) : null);
                },
                z = I.default.create((e) => ({ flexColumn: { flexDirection: "column", gap: e.spaces.space8 }, arrow: { alignSelf: "flex-start", marginStart: e.spaces.space12, height: e.spaces.space28, color: e.colors.gray400 } })),
                B = a.memo(D);
            var F = n(236706),
                R = (n(585488), n(351743)),
                L = n.n(R),
                N = n(726426),
                W = n.n(N);
            const H = F.Z,
                O = () => {
                    const e = a.useMemo(() => W()(), []),
                        [t, n] = L()(H);
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
                                        updater: w.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            var q = n(848739);
            const V = ({ count: e }) => `Funds will be available in up to ${e} business days`,
                j = ({ account: e, methodConfigs: t, transferDirection: n }) => {
                    const a = (0, w.xe)({ method: e, methodConfigs: t, transferDirection: n }),
                        r = a?.config?.processingTime?.processing_time_type === q.l.RealTime,
                        o = a?.config?.processingTime?.max_duration_in_business_days ?? c.UJ;
                    return { settleText: r ? "Funds will be available instantly" : V({ count: o }), details: a };
                };
            const Y = n(220474).Z,
                $ = () => {
                    const e = a.useMemo(() => W()(), []),
                        [t, n] = L()(Y);
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
                                        updater: w.qQ,
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
                        u = (0, r.useHistory)(),
                        d = (0, C.jh)(),
                        [h, I] = a.useState(null),
                        [v, A] = O(),
                        [M, S] = $(),
                        { roles: T } = (0, P.Z)({ fetchKey: "Payments" }),
                        x = A || S,
                        { confirmTitle: D, path: z } = p[s],
                        F = `/i/money/${z}`,
                        R = o?.find((t) => t.rest_id === e),
                        L = a.useCallback(() => {
                            I(null);
                        }, []),
                        { baseAmount: N, currency: W, feeAmount: H, totalAmount: q } = t,
                        V = a.useMemo(() => ({ paymentMethodId: e, redirectPath: F, redirectState: { accountId: e, amountWithFees: t, step: m.ah.reviewPane }, closePath: c.gp }), [e, t, F]),
                        Y = a.useCallback(() => {
                            i.scribe({ page: "money", section: z, component: "review-transfer", element: "confirm", action: "click" }), L();
                            (s === m.Rz.credit ? v : M)({ amount: N, accountId: e, currency: W })
                                .then((n) => {
                                    const { challengeId: a, status: r, transactionId: o } = n;
                                    (0, w.i7)({ status: r }) ? a && u.push(c.vw, { challengeId: a, redirectPath: F, redirectState: { accountId: e, amountWithFees: t, step: m.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : u.replace(F, { step: m.ah.successPane, amountWithFees: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, k.XE)({ errors: e, roles: T });
                                    t ? u.replace(t, V) : I(e);
                                });
                        }, [i, z, L, s, v, M, N, e, W, u, F, t, T, V]),
                        U = a.useCallback(() => {
                            i.scribe({ page: "money", section: z, component: "review-transfer", element: "cancel", action: "click" });
                        }, [i, z]),
                        { settleText: K } = j({ account: R, methodConfigs: n, transferDirection: s }),
                        Q = (0, w.y4)({ feeAmount: H, totalAmount: q, baseAmount: N }),
                        X = a.createElement(y.Z, { style: d.footer }, a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, K), a.createElement(_.Z, { description: a.createElement(Z.Z, { amount: N, currency: W, size: "body", weight: "normal" }), title: "Amount" }), H && a.createElement(_.Z, { description: "0" === H ? "Free" : a.createElement(Z.Z, { amount: H, currency: W, size: "body", weight: "normal" }), title: "Fee" }), Q && q && "0" !== q && a.createElement(_.Z, { description: a.createElement(Z.Z, { amount: q, currency: W, size: "body", weight: "normal" }), title: "Total deducted from your account" }), h ? a.createElement(k.ZP, { errors: h, linkState: V, roles: T }) : null, a.createElement(y.Z, { style: C.ZP.actionButtons }, a.createElement(g.ZP, { link: c.gp, onPress: U, size: "large", style: C.ZP.button, type: "primaryOutlined" }, "Cancel"), a.createElement(g.ZP, { disabled: x, onPress: Y, size: "large", style: C.ZP.button, type: "primaryFilled" }, x ? a.createElement(b.Z, null) : "Confirm")));
                    return a.createElement(E.Z, { backButtonType: "back", bottomBar: X, history: u, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: C.ZP.title, weight: "heavy" }, D), a.createElement(B, { accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, transferDirection: s })));
                },
                K = a.memo(U);
            var Q = n(666536),
                X = n(952793),
                J = n(984067),
                G = n(106545),
                ee = n(934265);
            const te = "Usd",
                ne = ({ methodConfigs: e, paymentMethods: t, transferDirection: n }) => {
                    const o = (0, l.z)(),
                        s = (0, r.useHistory)(),
                        u = (0, C.jh)(),
                        b = s.location?.state,
                        [Z, k] = a.useState(""),
                        [_, I] = a.useState({ baseAmount: "", currency: te }),
                        [v, M] = a.useState(!0),
                        [S, T] = a.useState(!0),
                        x = (0, X.hC)("payments_cards_as_payment_method_enabled"),
                        { permissions: D, roles: z } = (0, P.Z)({ fetchKey: "Payments" }),
                        { balance: F } = (0, ee.Z)(),
                        [R] = (0, G.Z)(),
                        L = t?.[0],
                        [N, W] = a.useState(L),
                        H = N?.rest_id,
                        O = n === m.Rz.debit,
                        { label: q, path: V } = p[n],
                        Y = a.useMemo(() => !Z || !_.baseAmount || !v || !H || N?.core?.details?.status !== A.D.Active || S, [H, Z, _.baseAmount, S, v, N?.core?.details?.status]),
                        $ = a.useMemo(() => ({ ...b, step: m.ah.reviewPane, accountId: H, amountWithFees: _ }), [H, _, b]),
                        U = `/i/money/${V}`,
                        K = a.useMemo(() => ({ pathname: U, state: $ }), [U, $]),
                        ne = (0, w.DO)({ roles: z, permissions: D, actionPermission: h[n] }),
                        { settleText: ae } = j({ account: N, methodConfigs: e, transferDirection: n }),
                        re = a.useCallback(
                            ({ newAccount: e, newAmount: t }) => {
                                if (e && t) {
                                    const a = (0, w.Dc)(t),
                                        r = (0, w.V9)(e),
                                        o = a.toString(),
                                        c = n === m.Rz.debit ? r.debitMethod : void 0,
                                        s = n === m.Rz.credit ? r.creditMethod : void 0;
                                    s || c
                                        ? R({ amount: o, currency: te, debitMethod: c, creditMethod: s })
                                              .then((e) => {
                                                  I(e);
                                              })
                                              .catch(() => {
                                                  I({ baseAmount: o, currency: te });
                                              })
                                              .finally(() => {
                                                  T(!1);
                                              })
                                        : (I({ baseAmount: o, currency: te }), T(!1));
                                }
                            },
                            [R, n],
                        ),
                        oe = a.useMemo(() => (0, Q.Z)((e) => re(e), 500), [re]),
                        ce = a.useCallback(
                            (e) => {
                                k(e), T(!0), oe({ newAmount: e, newAccount: N });
                            },
                            [oe, N],
                        ),
                        se = a.useCallback(
                            (e) => {
                                W(e), re({ newAmount: Z, newAccount: e });
                            },
                            [Z, re],
                        ),
                        le = a.useCallback(() => {
                            o.scribe({ page: "money", section: V, element: "transfer", action: "click" }), ne ? s.push(ne, { redirectPath: U, redirectState: $, closePath: c.gp }) : s.push(K);
                        }, [o, s, V, U, K, $, ne]),
                        ie = a.useCallback(() => {
                            s.push(c.gp);
                        }, [s]),
                        me = a.createElement(y.Z, { style: u.footer }, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, ae), a.createElement(g.ZP, { disabled: Y, onPress: le, size: "large", type: "primaryFilled" }, q)),
                        ue = a.useMemo(() => ({ redirectPath: U }), [U]),
                        de = a.useMemo(() => ({ pathname: c.ac, state: ue }), [ue]),
                        pe = a.useMemo(() => ({ pathname: c.UA, state: ue }), [ue]),
                        he = D?.includes(d.d.CreatePaymentMethod),
                        ye = x && he;
                    return H ? a.createElement(E.Z, { backButtonType: "close", bottomBar: me, history: s, onBackClick: ie, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: u.container }, a.createElement(f.ZP, { align: "center", size: "title2", style: C.ZP.title, weight: "heavy" }, O ? q : "Deposit"), a.createElement(J.Z, { amount: Z, balance: F, isValid: v, label: "Enter amount", min: "1", name: "amount", setAmount: ce, setIsValid: M, validateBalance: O }), a.createElement(B, { accountId: H, addAccountLink: de, addBankCardLink: ye ? pe : void 0, amountWithFees: _, methodConfigs: e, onSelectAccount: se, paymentMethods: t, transferDirection: n }))) : a.createElement(i.Z, { to: ye ? pe : he ? de : ne ? { pathname: ne, state: { redirectPath: U, closePath: c.gp } } : c.gp });
                },
                ae = a.memo(ne),
                re = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, requestId: s, transferDirection: i }) => {
                    const m = (0, l.z)(),
                        u = (0, r.useHistory)(),
                        d = (0, C.jh)(),
                        { path: h, successTitle: b } = p[i],
                        P = o?.find((t) => t.rest_id === e),
                        { settleText: Z } = j({ account: P, methodConfigs: n, transferDirection: i }),
                        { baseAmount: k, currency: _ } = t,
                        I = b({ formattedAmount: (0, w.vw)({ amount: k, currency: _ }) }),
                        v = a.useCallback(() => {
                            m.scribe({ page: "money", section: h, component: "transfer-success", element: "done", action: "click" });
                        }, [m, h]),
                        A = a.useCallback(() => {
                            u.push(c.gp);
                        }, [u]),
                        M = a.createElement(y.Z, { style: d.footer }, a.createElement(g.ZP, { link: `${c.bR}/${s}`, onPress: v, size: "large", style: C.ZP.button, type: "primaryFilled" }, "Done"));
                    return a.createElement(E.Z, { backButtonType: "close", bottomBar: M, history: u, onBackClick: A, withoutBottomBarMobile: !0 }, a.createElement(y.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: C.ZP.title, weight: "heavy" }, I), a.createElement(f.ZP, null, Z)));
                },
                oe = a.memo(re),
                ce = { context: "PaymentsExternalAccountTransfer" },
                se = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        n = (0, r.useHistory)(),
                        { methodConfigs: o } = (0, s.Z)(),
                        d = n.location?.state,
                        h = d?.step,
                        y = d?.accountId,
                        f = d?.requestId,
                        g = d?.amountWithFees,
                        { path: b } = p[e],
                        { usablePaymentMethods: E } = (0, u.Z)();
                    return (
                        a.useEffect(() => {
                            t && t.scribe({ page: "money", section: b, component: h, action: "impression" });
                        }, [t, h, b]),
                        g && y ? (h === m.ah.reviewPane ? a.createElement(K, { accountId: y, amountWithFees: g, methodConfigs: o, paymentMethods: E, transferDirection: e }) : h === m.ah.successPane && f ? a.createElement(oe, { accountId: y, amountWithFees: g, methodConfigs: o, paymentMethods: E, requestId: f, transferDirection: e }) : a.createElement(i.Z, { to: c.gp })) : a.createElement(ae, { methodConfigs: o, paymentMethods: E, transferDirection: e })
                    );
                };
            function le(e) {
                return a.createElement(o.H, { errorConfig: ce }, a.createElement(se, e));
            }
            const ie = a.memo(le);
        },
        743843: (e, t, n) => {
            n.r(t), n.d(t, { default: () => K });
            var a = n(202784),
                r = n(107267),
                o = n(360871),
                c = n(40567),
                s = n(167630),
                l = n(392237),
                i = n(676145),
                m = n(515510),
                u = n(782642),
                d = n(998564),
                p = n(514639),
                h = n(615027),
                y = n(99387),
                f = n(597897),
                g = n(325686),
                b = n(10622),
                E = n.n(b),
                P = (n(585488), n(437429)),
                Z = n.n(P),
                k = n(731708),
                _ = n(922281),
                C = n(736063),
                w = n(725516),
                I = n(827309),
                v = n(43429),
                A = n(743080);
            const M = f.Z,
                S = ({ paymentMethodId: e, redirectPath: t }) => {
                    const n = (0, r.useHistory)(),
                        o = Z()(),
                        c = (0, w.z)(),
                        l = (0, u.p)();
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
                                          E()(e, M, { payment_method_id: t }, { fetchPolicy: "network-only" })
                                              .toPromise()
                                              .then((e) => e?.get_payment_method?.core?.details?.status)
                                              .catch(() => null))({ environment: o, paymentMethodId: e })
                                          .then((e) => {
                                              e && e === _.D.Active && (clearInterval(s), n.replace(t ?? p.gp));
                                          })
                                          .catch(() => {
                                              i(s);
                                          }));
                            };
                            r();
                            const s = setInterval(r, v.Ln);
                            return () => clearInterval(s);
                        }, [c, o, i, n, e, t]),
                        a.createElement(I.Z, { headline: "Verifying your bank account", subtext: a.createElement(g.Z, { style: T.container }, a.createElement(k.ZP, null, "This may take a few seconds."), a.createElement(s.Z, { style: A.ZP.poller })) })
                    );
                },
                T = l.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = { context: "PaymentMethodPoller" },
                D = (e) => a.createElement(C.H, { errorConfig: x }, a.createElement(S, e)),
                z = a.memo(D);
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
                        [_, C] = W(),
                        [w, I] = O(),
                        v = (0, u.p)(),
                        A = window.location.href,
                        M = A?.includes("oauth_state_id="),
                        S = t.location?.query?.token,
                        T = t.location?.state,
                        { linkType: x = p.P_.linkExternalAccount, token: D, redirectPath: B = p.gp, targetRole: F = m.N.KycDocumentsVerified, closePath: R, paymentMethodId: L } = T || {},
                        N = e ?? D ?? S ?? E,
                        H = a.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(q), x)) {
                                    case p.P_.onboarding:
                                    case p.P_.upgradeToKycDocumentsVerified:
                                    case p.P_.verifyPaymentMethod:
                                        L &&
                                            w({ paymentMethodId: L })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: V });
                                                });
                                        break;
                                    case p.P_.linkExternalAccount:
                                        e &&
                                            _({ publicToken: e, metadata: JSON.stringify(t) })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: V });
                                                });
                                }
                            },
                            [x, w, L, v, _],
                        ),
                        j = a.useCallback(() => {
                            b(!0);
                        }, []),
                        Y = a.useCallback(() => {
                            f(!0);
                        }, []),
                        U = a.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) k(!0);
                        }, []),
                        K = { token: N, onSuccess: H, onLoad: Y, onEvent: U, onExit: j, ...(M ? { receivedRedirectUri: A } : null) },
                        { open: Q, ready: X } = (0, c.usePlaidLink)(K);
                    if (
                        (a.useEffect(() => {
                            M &&
                                d.Yh.get(q)?.then((e) => {
                                    e && (0, i.Z)(e) && P(e);
                                });
                        }, [M]),
                        a.useEffect(() => {
                            M || d.Yh.set(q, N);
                        }, [M, N]),
                        a.useEffect(() => {
                            N && X && Q();
                        }, [N, X, Q]),
                        !N)
                    )
                        return M ? a.createElement(s.Z, { style: $.loadingStyle }) : a.createElement(h.Z, { to: "/" });
                    if (!l || !X) return a.createElement(s.Z, { style: $.loadingStyle });
                    switch (x) {
                        case p.P_.onboarding:
                            return Z ? (n ? a.createElement(y.default, { linkType: x }) : a.createElement(h.Z, { to: B })) : null;
                        case p.P_.linkExternalAccount:
                            return C ? a.createElement(s.Z, { style: $.loadingStyle }) : n ? a.createElement(h.Z, { to: B }) : g ? a.createElement(h.Z, { to: R ?? B }) : null;
                        case p.P_.upgradeToKycDocumentsVerified:
                            return Z && n ? a.createElement(y.default, { linkType: x, redirectPath: B, targetRole: F }) : g ? a.createElement(h.Z, { to: B }) : null;
                        case p.P_.verifyPaymentMethod:
                            return I ? a.createElement(s.Z, { style: $.loadingStyle }) : n && L ? a.createElement(z, { paymentMethodId: L, redirectPath: B }) : n || g ? a.createElement(h.Z, { to: B }) : null;
                        default:
                            return null;
                    }
                },
                Y = a.memo(j),
                $ = l.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                U = (e) => {
                    const t = (0, r.useHistory)();
                    t.location;
                    return o.L.Plaid, a.createElement(Y, e);
                },
                K = a.memo(U);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-49827288.e4ae641a.js.map
