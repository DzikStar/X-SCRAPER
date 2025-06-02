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
                y = n(736063),
                h = n(514639),
                p = n(293115),
                f = n(24568),
                g = n(743080);
            const b = { page: "money", section: "disable-transfers" },
                E = (e) => {
                    const t = (0, g.jh)();
                    return a.createElement(d.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(u.default, { style: C.icon }), a.createElement(r.Z, { style: C.textContainer }, a.createElement(c.ZP, { size: "title3", weight: "medium" }, "Are you sure you would like to disable all outgoing payments?"), a.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, "This may impact bill payments or any automatic transfers that have been set up. You will still be able to receive payments to your account."))));
                },
                k = () => {
                    const e = (0, g.jh)(),
                        t = (0, o.useHistory)(),
                        { handlePreferencesChange: n, isInProgress: c, refetch: i } = (0, f.Z)(),
                        u = a.useCallback(() => {
                            n("enable_bill_pay", !1), i(), t.replace(h.l_);
                        }, [n, t, i]),
                        m = a.useCallback(() => t.replace(h.l_), [t]);
                    return a.createElement(r.Z, { style: e.footer }, a.createElement(r.Z, { style: g.ZP.actionButtons }, a.createElement(s.ZP, { onClick: m, size: "large", style: g.ZP.button, type: "primaryOutlined" }, c ? a.createElement(l.Z, null) : "Cancel"), a.createElement(s.ZP, { onClick: u, size: "large", style: g.ZP.button, type: "primaryFilled" }, c ? a.createElement(l.Z, null) : "Confirm")));
                },
                Z = { context: "DISABLE_TRANSFERS" },
                P = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.replace(h.l_), [t]);
                    return a.createElement(y.H, { errorConfig: Z }, a.createElement(m.Z, { backButtonType: "close", bottomBar: a.createElement(k, null), history: t, onBackClick: n }, a.createElement(p.nO, { namespace: b }, a.createElement(y.H, { errorConfig: Z }, a.createElement(E, e)))));
                },
                C = i.default.create((e) => ({ icon: { width: e.spaces.space40, height: e.spaces.space40, fill: e.colors.text }, textContainer: { flex: 1, gap: e.spaces.space16 }, controls: { flex: 1, alignItems: "space-evenly", flexDirection: "row", gap: e.spaces.space12 } })),
                w = a.memo(P);
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
            const y = s().j24c37b2,
                h = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                p = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state?.errors,
                        s = c?.[0]?.id,
                        l = s ? h[s] : null,
                        i = r.useCallback(() => {
                            a.replace(n ? u.gp : "/");
                        }, [a, n]);
                    return r.createElement(d.Z, { actionLabel: y, headline: e, history: a, onAction: i, onClose: i, subtext: l ?? t, supportUrl: u.N6 });
                },
                f = (e) => {
                    const { isActive: t } = (0, m.Z)({ fetchKey: "Payments" });
                    return r.createElement(p, (0, a.Z)({}, e, { isActive: t }));
                },
                g = { context: "PAYMENTS_ERROR" },
                b = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(p, (0, a.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(l.N, { errorConfig: g, fallback: t }, r.createElement(i.B, null, r.createElement(f, e)));
                },
                E = r.memo(b);
        },
        554337: (e, t, n) => {
            n.d(t, { Z: () => me });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(514639),
                s = n(351990),
                l = n(725516),
                i = n(615027),
                u = n(43429),
                m = n(226332),
                d = n(436117);
            const y = Object.freeze({ [u.Rz.debit]: { path: "withdraw", label: "Withdraw", confirmTitle: "Confirm withdrawal", successTitle: ({ formattedAmount: e }) => `Your ${e} withdrawal successfully scheduled.`, linkAccountTitle: "How would you like to withdraw your funds?" }, [u.Rz.credit]: { path: "deposit", label: "Deposit", confirmTitle: "Confirm deposit", successTitle: ({ formattedAmount: e }) => `Your ${e} deposit successfully scheduled.`, linkAccountTitle: "Choose a funding source", linkAccountSubtitle: "Funds are secure, insured, and will instantly start earning interest" } }),
                h = Object.freeze({ [u.Rz.debit]: d.d.CreateWithdrawal, [u.Rz.credit]: d.d.CreateDeposit });
            n(136728);
            var p = n(325686),
                f = n(731708),
                g = n(154003),
                b = n(167630),
                E = n(980407),
                k = n(445664),
                Z = n(634455),
                P = n(413713),
                C = n(655750),
                w = n(743080),
                _ = n(727384),
                I = n(392237),
                v = n(212145),
                A = n(922281),
                M = n(125363),
                T = n(919022),
                S = n(392046),
                x = n(671738);
            const D = ({ accountId: e, addAccountLink: t, addBankCardLink: n, amountWithFees: r, methodConfigs: o, onSelectAccount: c, paymentMethods: s, transferDirection: l }) => {
                    const i = (0, M.v9)(T.ZP.selectViewerUser),
                        m = l === u.Rz.debit,
                        { path: d } = y[l],
                        h = a.useMemo(() => {
                            const e = r?.feeAmount,
                                t = r?.currency;
                            return e && "0" !== e ? (0, _.vw)({ amount: e, currency: t }) : void 0;
                        }, [r]),
                        f = a.useMemo(() => `/i/money/${d}`, [d]),
                        g = a.useCallback(
                            (e) => {
                                const t = s?.find((t) => t.rest_id === e);
                                t && c && c(t);
                            },
                            [c, s],
                        ),
                        b = a.useCallback((r, i) => a.createElement(p.Z, { style: z.flexColumn, testID: i }, (r.type === u.dX.bank || r.type === u.dX.card) && s && c && t && n ? a.createElement(x.Z, { accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: h, methodConfigs: o, onSelectAccountId: g, paymentMethods: s, selectedAccount: r, transferDirection: l }) : a.createElement(S.Z, { account: r })), [e, t, n, h, o, c, g, s, l]),
                        E = s?.find((t) => t.rest_id === e),
                        k = (0, _.xe)({ method: E, methodConfigs: o, transferDirection: l }),
                        Z = i ? { accountName: { name: i.name, screenName: i.screen_name }, avatar: { uri: i.profile_image_url_https }, accountType: "My Balance", type: u.dX.x } : null,
                        C = m ? Z : k,
                        w = m ? k : Z,
                        I = E?.core?.details?.status === A.D.LoginRequired;
                    return a.createElement(a.Fragment, null, C ? b(C, "sender") : null, C && w ? a.createElement(v.default, { style: z.arrow }) : null, w ? b(w, "receiver") : null, I ? a.createElement(P.ZP, { errors: [{ error_code: A.D.LoginRequired }], linkState: { redirectPath: f, paymentMethodId: e }, opts: { counterPartyScreenName: m ? w?.accountName.screenName : C?.accountName.screenName } }) : null);
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
                                        updater: _.qQ,
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
                    const a = (0, _.xe)({ method: e, methodConfigs: t, transferDirection: n }),
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
                                        updater: _.qQ,
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
                        d = (0, w.jh)(),
                        [h, I] = a.useState(null),
                        [v, A] = O(),
                        [M, T] = $(),
                        { roles: S } = (0, k.Z)({ fetchKey: "Payments" }),
                        x = A || T,
                        { confirmTitle: D, path: z } = y[s],
                        F = `/i/money/${z}`,
                        R = o?.find((t) => t.rest_id === e),
                        L = a.useCallback(() => {
                            I(null);
                        }, []),
                        { baseAmount: N, currency: W, feeAmount: H, totalAmount: q } = t,
                        V = a.useMemo(() => ({ paymentMethodId: e, redirectPath: F, redirectState: { accountId: e, amountWithFees: t, step: u.ah.reviewPane }, closePath: c.gp }), [e, t, F]),
                        Y = a.useCallback(() => {
                            i.scribe({ page: "money", section: z, component: "review-transfer", element: "confirm", action: "click" }), L();
                            (s === u.Rz.credit ? v : M)({ amount: N, accountId: e, currency: W })
                                .then((n) => {
                                    const { challengeId: a, status: r, transactionId: o } = n;
                                    (0, _.i7)({ status: r }) ? a && m.push(c.vw, { challengeId: a, redirectPath: F, redirectState: { accountId: e, amountWithFees: t, step: u.ah.successPane, requestId: o }, closePath: c.gp, challengeInitiator: c.kW.transaction }) : m.replace(F, { step: u.ah.successPane, amountWithFees: t, accountId: e, requestId: o });
                                })
                                .catch((e) => {
                                    const t = (0, P.XE)({ errors: e, roles: S });
                                    t ? m.replace(t, V) : I(e);
                                });
                        }, [i, z, L, s, v, M, N, e, W, m, F, t, S, V]),
                        U = a.useCallback(() => {
                            i.scribe({ page: "money", section: z, component: "review-transfer", element: "cancel", action: "click" });
                        }, [i, z]),
                        { settleText: K } = j({ account: R, methodConfigs: n, transferDirection: s }),
                        Q = (0, _.y4)({ feeAmount: H, totalAmount: q, baseAmount: N }),
                        X = a.createElement(p.Z, { style: d.footer }, a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, K), a.createElement(C.Z, { description: a.createElement(Z.Z, { amount: N, currency: W, size: "body", weight: "normal" }), title: "Amount" }), H && a.createElement(C.Z, { description: "0" === H ? "Free" : a.createElement(Z.Z, { amount: H, currency: W, size: "body", weight: "normal" }), title: "Fee" }), Q && q && "0" !== q && a.createElement(C.Z, { description: a.createElement(Z.Z, { amount: q, currency: W, size: "body", weight: "normal" }), title: "Total deducted from your account" }), h ? a.createElement(P.ZP, { errors: h, linkState: V, roles: S }) : null, a.createElement(p.Z, { style: w.ZP.actionButtons }, a.createElement(g.ZP, { link: c.gp, onPress: U, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Cancel"), a.createElement(g.ZP, { disabled: x, onPress: Y, size: "large", style: w.ZP.button, type: "primaryFilled" }, x ? a.createElement(b.Z, null) : "Confirm")));
                    return a.createElement(E.Z, { backButtonType: "back", bottomBar: X, history: m, withoutBottomBarMobile: !0 }, a.createElement(p.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: w.ZP.title, weight: "heavy" }, D), a.createElement(B, { accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, transferDirection: s })));
                },
                K = a.memo(U);
            var Q = n(666536),
                X = n(189305),
                J = n(281838),
                G = n(984067),
                ee = n(601463),
                te = n(106545),
                ne = n(934265);
            const ae = "Usd",
                re = ({ methodConfigs: e, paymentMethods: t, transferDirection: n }) => {
                    const o = (0, l.z)(),
                        s = (0, r.useHistory)(),
                        m = (0, w.jh)(),
                        b = s.location?.state,
                        [Z, P] = a.useState(""),
                        [C, I] = a.useState({ baseAmount: "", currency: ae }),
                        [v, M] = a.useState(!0),
                        [T, S] = a.useState(!0),
                        { permissions: x, roles: D } = (0, k.Z)({ fetchKey: "Payments" }),
                        { balance: z } = (0, ne.Z)(),
                        [F] = (0, te.Z)(),
                        R = t?.[0],
                        [L, N] = a.useState(R),
                        W = L?.rest_id,
                        H = n === u.Rz.debit,
                        { label: O, linkAccountSubtitle: q, linkAccountTitle: V, path: Y } = y[n],
                        $ = a.useMemo(() => !Z || !C.baseAmount || !v || !W || L?.core?.details?.status !== A.D.Active || T, [W, Z, C.baseAmount, T, v, L?.core?.details?.status]),
                        U = a.useMemo(() => ({ ...b, step: u.ah.reviewPane, accountId: W, amountWithFees: C }), [W, C, b]),
                        K = `/i/money/${Y}`,
                        re = a.useMemo(() => ({ pathname: K, state: U }), [K, U]),
                        oe = (0, _.DO)({ roles: D, permissions: x, actionPermission: h[n] }),
                        { settleText: ce } = j({ account: L, methodConfigs: e, transferDirection: n }),
                        se = a.useCallback(
                            ({ newAccount: e, newAmount: t }) => {
                                if (e && t) {
                                    const a = (0, _.Dc)(t),
                                        r = (0, _.V9)(e),
                                        o = a.toString(),
                                        c = n === u.Rz.debit ? r.debitMethod : void 0,
                                        s = n === u.Rz.credit ? r.creditMethod : void 0;
                                    s || c
                                        ? F({ amount: o, currency: ae, debitMethod: c, creditMethod: s })
                                              .then((e) => {
                                                  I(e);
                                              })
                                              .catch(() => {
                                                  I({ baseAmount: o, currency: ae });
                                              })
                                              .finally(() => {
                                                  S(!1);
                                              })
                                        : (I({ baseAmount: o, currency: ae }), S(!1));
                                }
                            },
                            [F, n],
                        ),
                        le = a.useMemo(() => (0, Q.Z)((e) => se(e), 500), [se]),
                        ie = a.useCallback(
                            (e) => {
                                P(e), S(!0), le({ newAmount: e, newAccount: L });
                            },
                            [le, L],
                        ),
                        ue = a.useCallback(
                            (e) => {
                                N(e), se({ newAmount: Z, newAccount: e });
                            },
                            [Z, se],
                        ),
                        me = a.useCallback(() => {
                            o.scribe({ page: "money", section: Y, element: "transfer", action: "click" }), oe ? s.push(oe, { redirectPath: K, redirectState: U, closePath: c.gp }) : s.push(re);
                        }, [o, s, Y, K, re, U, oe]),
                        de = a.useCallback(() => {
                            s.push(c.gp);
                        }, [s]),
                        ye = a.useMemo(() => ({ redirectPath: K }), [K]),
                        he = a.useMemo(() => ({ pathname: c.ac, state: ye }), [ye]),
                        pe = a.useMemo(() => ({ pathname: c.UA, state: ye }), [ye]),
                        fe = x?.includes(d.d.CreatePaymentMethod);
                    return W ? a.createElement(E.Z, { backButtonType: "close", bottomBar: a.createElement(p.Z, { style: m.footer }, a.createElement(f.ZP, { align: "center", color: "gray700", size: "subtext2" }, ce), a.createElement(g.ZP, { disabled: $, onPress: me, size: "large", type: "primaryFilled" }, O)), history: s, onBackClick: de, withoutBottomBarMobile: !0 }, a.createElement(p.Z, { style: m.container }, a.createElement(f.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, O), a.createElement(G.Z, { amount: Z, balance: z, isValid: v, label: "Enter amount", min: "1", name: "amount", setAmount: ie, setIsValid: M, validateBalance: H }), a.createElement(B, { accountId: W, addAccountLink: he, addBankCardLink: pe, amountWithFees: C, methodConfigs: e, onSelectAccount: ue, paymentMethods: t, transferDirection: n }))) : fe ? a.createElement(E.Z, { backButtonType: "close", history: s, onBackClick: de }, a.createElement(p.Z, { style: m.container }, a.createElement(f.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, V), q && a.createElement(f.ZP, { color: "gray700", size: "subtext1" }, q)), a.createElement(p.Z, { style: m.footer }, a.createElement(J.Z, { label: "Debit Card", link: pe, methodConfigs: e, transferDirection: n, variant: "tile" }), a.createElement(X.Z, { label: "Bank Account", link: he, methodConfigs: e, transferDirection: n, variant: "tile" }), H ? null : a.createElement(ee.Z, null))) : a.createElement(i.Z, { to: oe ? { pathname: oe, state: { redirectPath: K, closePath: c.gp } } : c.gp });
                },
                oe = a.memo(re),
                ce = ({ accountId: e, amountWithFees: t, methodConfigs: n, paymentMethods: o, requestId: s, transferDirection: i }) => {
                    const u = (0, l.z)(),
                        m = (0, r.useHistory)(),
                        d = (0, w.jh)(),
                        { path: h, successTitle: b } = y[i],
                        k = o?.find((t) => t.rest_id === e),
                        { settleText: Z } = j({ account: k, methodConfigs: n, transferDirection: i }),
                        { baseAmount: P, currency: C } = t,
                        I = b({ formattedAmount: (0, _.vw)({ amount: P, currency: C }) }),
                        v = a.useCallback(() => {
                            u.scribe({ page: "money", section: h, component: "transfer-success", element: "done", action: "click" });
                        }, [u, h]),
                        A = a.useCallback(() => {
                            m.push(c.gp);
                        }, [m]),
                        M = a.createElement(p.Z, { style: d.footer }, a.createElement(g.ZP, { link: `${c.bR}/${s}`, onPress: v, size: "large", style: w.ZP.button, type: "primaryFilled" }, "Done"));
                    return a.createElement(E.Z, { backButtonType: "close", bottomBar: M, history: m, onBackClick: A, withoutBottomBarMobile: !0 }, a.createElement(p.Z, { style: d.container }, a.createElement(f.ZP, { size: "title2", style: w.ZP.title, weight: "heavy" }, I), a.createElement(f.ZP, null, Z)));
                },
                se = a.memo(ce),
                le = { context: "PaymentsExternalAccountTransfer" },
                ie = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        n = (0, r.useHistory)(),
                        { methodConfigs: o } = (0, s.Z)(),
                        d = n.location?.state,
                        h = d?.step,
                        p = d?.accountId,
                        f = d?.requestId,
                        g = d?.amountWithFees,
                        { path: b } = y[e],
                        { usablePaymentMethods: E } = (0, m.Z)();
                    return (
                        a.useEffect(() => {
                            t && t.scribe({ page: "money", section: b, component: h, action: "impression" });
                        }, [t, h, b]),
                        g && p ? (h === u.ah.reviewPane ? a.createElement(K, { accountId: p, amountWithFees: g, methodConfigs: o, paymentMethods: E, transferDirection: e }) : h === u.ah.successPane && f ? a.createElement(se, { accountId: p, amountWithFees: g, methodConfigs: o, paymentMethods: E, requestId: f, transferDirection: e }) : a.createElement(i.Z, { to: c.gp })) : a.createElement(oe, { methodConfigs: o, paymentMethods: E, transferDirection: e })
                    );
                };
            function ue(e) {
                return a.createElement(o.H, { errorConfig: le }, a.createElement(ie, e));
            }
            const me = a.memo(ue);
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
                u = n(515510),
                m = n(782642),
                d = n(998564),
                y = n(514639),
                h = n(615027),
                p = n(99387),
                f = n(597897),
                g = n(325686),
                b = n(10622),
                E = n.n(b),
                k = (n(585488), n(437429)),
                Z = n.n(k),
                P = n(731708),
                C = n(922281),
                w = n(736063),
                _ = n(725516),
                I = n(827309),
                v = n(43429),
                A = n(743080);
            const M = f.Z,
                T = ({ paymentMethodId: e, redirectPath: t }) => {
                    const n = (0, r.useHistory)(),
                        o = Z()(),
                        c = (0, _.z)(),
                        l = (0, m.p)();
                    a.useEffect(() => {
                        c.scribe({ page: "payment-method-poller", section: "polling", action: "impression" });
                    }, [c]);
                    const i = a.useCallback(
                        (e) => {
                            clearInterval(e), n.replace(t ?? y.gp), l({ text: "Something went wrong. Please try again later." });
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
                                              e && e === C.D.Active && (clearInterval(s), n.replace(t ?? y.gp));
                                          })
                                          .catch(() => {
                                              i(s);
                                          }));
                            };
                            r();
                            const s = setInterval(r, v.Ln);
                            return () => clearInterval(s);
                        }, [c, o, i, n, e, t]),
                        a.createElement(I.Z, { headline: "Verifying your bank account", subtext: a.createElement(g.Z, { style: S.container }, a.createElement(P.ZP, null, "This may take a few seconds."), a.createElement(s.Z, { style: A.ZP.poller })) })
                    );
                },
                S = l.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                x = { context: "PaymentMethodPoller" },
                D = (e) => a.createElement(w.H, { errorConfig: x }, a.createElement(T, e)),
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
                        [E, k] = a.useState(null),
                        [Z, P] = a.useState(!1),
                        [C, w] = W(),
                        [_, I] = O(),
                        v = (0, m.p)(),
                        A = window.location.href,
                        M = A?.includes("oauth_state_id="),
                        T = t.location?.query?.token,
                        S = t.location?.state,
                        { linkType: x = y.P_.linkExternalAccount, token: D, redirectPath: B = y.gp, targetRole: F = u.N.KycDocumentsVerified, closePath: R, paymentMethodId: L } = S || {},
                        N = e ?? D ?? T ?? E,
                        H = a.useCallback(
                            (e, t) => {
                                switch ((d.Yh.delete(q), x)) {
                                    case y.P_.onboarding:
                                    case y.P_.upgradeToKycDocumentsVerified:
                                    case y.P_.verifyPaymentMethod:
                                        L &&
                                            _({ paymentMethodId: L })
                                                .then(() => {
                                                    o(!0);
                                                })
                                                .catch(() => {
                                                    b(!0), v({ text: V });
                                                });
                                        break;
                                    case y.P_.linkExternalAccount:
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
                        U = a.useCallback((e, t) => {
                            if ("IDENTITY_VERIFICATION_CLOSE_UI" === e) P(!0);
                        }, []),
                        K = { token: N, onSuccess: H, onLoad: Y, onEvent: U, onExit: j, ...(M ? { receivedRedirectUri: A } : null) },
                        { open: Q, ready: X } = (0, c.usePlaidLink)(K);
                    if (
                        (a.useEffect(() => {
                            M &&
                                d.Yh.get(q)?.then((e) => {
                                    e && (0, i.Z)(e) && k(e);
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
                        case y.P_.onboarding:
                            return Z ? (n ? a.createElement(p.default, { linkType: x }) : a.createElement(h.Z, { to: B })) : null;
                        case y.P_.linkExternalAccount:
                            return w ? a.createElement(s.Z, { style: $.loadingStyle }) : n ? a.createElement(h.Z, { to: B }) : g ? a.createElement(h.Z, { to: R ?? B }) : null;
                        case y.P_.upgradeToKycDocumentsVerified:
                            return Z && n ? a.createElement(p.default, { linkType: x, redirectPath: B, targetRole: F }) : g ? a.createElement(h.Z, { to: B }) : null;
                        case y.P_.verifyPaymentMethod:
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-49827288.17e9844a.js.map
