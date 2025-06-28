"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-be74d874"],
    {
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                i = n(747995);
            const o = (e) => r.createElement(i.default, (0, a.Z)({}, e, { transferDirection: l.Rz.credit })),
                c = r.memo(o);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                l = n(514639),
                i = n(445664),
                o = n(615027);
            const c = { context: "PaymentsRouterSwitch" },
                s = { type: "CustomRetry", content: () => a.createElement(o.Z, { to: l.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, i.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(o.Z, { to: t });
                },
                u = (e) => a.createElement(r.N, { errorConfig: c, fallback: s }, a.createElement(m, e)),
                d = a.memo(u);
        },
        826908: (e, t, n) => {
            n.r(t), n.d(t, { default: () => He });
            n(136728);
            var a = n(202784),
                r = n(107267),
                l = n(222718),
                i = n(952793),
                o = n(514639),
                c = n(293115),
                s = n(615027),
                m = n(221716),
                u = n(261906),
                d = n(722610);
            const p = "Security & Privacy",
                y = "Personal information",
                h = "Limits",
                E = "Monthly Statements";
            var b = n(325686),
                g = n(731708),
                _ = n(167630),
                f = n(190286),
                Z = n(392237),
                P = n(436117),
                k = n(922281),
                C = n(736063),
                v = n(782642),
                w = n(445664),
                T = n(312771),
                x = n(696445),
                S = n(392046),
                A = n(600568),
                D = n(295747),
                I = n(221554),
                L = n(226332),
                B = n(743080),
                M = n(727384),
                R = n(195816),
                z = (n(585488), n(351743)),
                O = n.n(z);
            const H = R.Z,
                F = () => {
                    const [e, t] = O()(H);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            t ? a(t) : n();
                                        },
                                        updater: M.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                X = "Link a bank account",
                U = "Link a card",
                V = { pathname: o.ac, state: { redirectPath: o.iE.bankAccounts } },
                $ = { pathname: o.UA, state: { redirectPath: o.iE.bankAccounts } },
                N = () => {
                    const { paymentMethods: e, refetchStatus: t } = (0, L.Z)(),
                        { permissions: n } = (0, w.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        [i, c] = a.useState(null),
                        [s, m] = a.useState(null),
                        u = (0, v.p)(),
                        [d, p] = F(),
                        y = n?.includes(P.d.DeletePaymentMethod),
                        h = n?.includes(P.d.CreatePaymentMethod),
                        E = a.useCallback(
                            (e) => () => {
                                m(null), l.push(o.VN, { redirectPath: o.iE.bankAccounts, paymentMethodId: e });
                            },
                            [l],
                        ),
                        Z = a.useCallback(
                            (e) => () => {
                                m(e);
                            },
                            [m],
                        ),
                        C = a.useCallback(
                            (e) => () => {
                                c(e), m(null);
                            },
                            [c],
                        ),
                        x = a.useCallback(() => {
                            m(null);
                        }, []),
                        R = a.useCallback(() => {
                            i &&
                                d({ paymentMethodId: i })
                                    .then(() => {
                                        c(null), u({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        u({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [u, i, d]),
                        z = e?.filter((e) => "XPaymentsBankAccountPaymentMethod" === e?.core?.details?.__typename) || [],
                        O = e?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [],
                        H = ({ accounts: e, sectionTitle: t, type: n }) =>
                            a.createElement(
                                b.Z,
                                { style: W.accountSection },
                                a.createElement(g.ZP, { color: "gray700", size: "body", weight: "medium" }, t),
                                (e || []).map((e) => {
                                    const t = (0, M.Ou)(e),
                                        n = t?.id;
                                    return t && n ? a.createElement(S.Z, { account: t, handleExpand: Z(t), key: n }) : null;
                                }),
                                a.createElement(D.Z, { disabled: !h, label: "XPaymentsBankAccountPaymentMethod" === n ? X : U, link: "XPaymentsBankAccountPaymentMethod" === n ? V : $, name: "XPaymentsBankAccountPaymentMethod" === n ? X : U, variant: "row" }),
                            ),
                        N = a.createElement(b.Z, { style: W.accountSection }, H({ accounts: z, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts" }), H({ accounts: O, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards" }));
                    return a.createElement(I.Z, { title: "Linked accounts" }, a.createElement(b.Z, { style: B.ZP.settingsScreenContainer }, t === T.iF.LOADING ? a.createElement(_.Z, null) : a.createElement(b.Z, { style: B.ZP.settingsScreenContainer }, N), s ? a.createElement(A.Z, { account: s, onDone: x, onRemove: y && s.id ? C(s.id) : void 0, onVerify: s.id && s?.status === k.D.LoginRequired && h ? E(s.id) : void 0 }) : null, i ? a.createElement(f.Z, { confirmButtonDisabled: p, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => c(null), onConfirm: R, text: "Your account will be removed from X" }) : null));
                },
                Y = { context: "PaymentsSettingsExternalAccounts" },
                W = Z.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function K(e) {
                return a.createElement(C.H, { errorConfig: Y }, a.createElement(N, e));
            }
            const q = (0, x.R)(a.memo(K), { permissionsAllOf: [P.d.GetAccounts, P.d.GetPaymentMethod], permissionsAnyOf: null });
            var G = n(443781),
                Q = n(889738),
                j = n(844685),
                J = n(165822);
            const ee = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: l }) => {
                    const i = (0, B.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(j.Z, { rightControl: n, style: B.ZP.settingHeader, subtext: r, text: l }), a.createElement(J.Z, { "aria-label": l, containerStyle: i.tile, stackLayoutUpperStyle: t ?? B.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                te = a.memo(ee),
                ne = ({ usedAmount: e }) => `(${e} used)`,
                ae = [
                    {
                        key: "payment_limits_send",
                        title: "Send",
                        content: [
                            { limit_type: "SevenDayTransferSendLimit", amountLabel: ({ formattedAmount: e }) => `${e} per week` },
                            { limit_type: "ThirtyDayTransferSendLimit", amountLabel: ({ formattedAmount: e }) => `${e} per month` },
                        ],
                    },
                    {
                        key: "payment_limits_receive",
                        title: "Receive",
                        content: [
                            { limit_type: "SevenDayTransferReceiveLimit", amountLabel: ({ formattedAmount: e }) => `${e} per week` },
                            { limit_type: "ThirtyDayTransferReceiveLimit", amountLabel: ({ formattedAmount: e }) => `${e} per month` },
                        ],
                    },
                    {
                        key: "payment_limits_deposit",
                        title: "Deposit",
                        content: [
                            { limit_type: "SevenDayDepositLimit", amountLabel: ({ formattedAmount: e }) => `${e} per week` },
                            { limit_type: "ThirtyDayDepositLimit", amountLabel: ({ formattedAmount: e }) => `${e} per month` },
                        ],
                    },
                    {
                        key: "payment_limits_withdraw",
                        title: "Withdraw",
                        content: [
                            { limit_type: "SevenDayWithdrawalLimit", amountLabel: ({ formattedAmount: e }) => `${e} per week` },
                            { limit_type: "ThirtyDayWithdrawalLimit", amountLabel: ({ formattedAmount: e }) => `${e} per month` },
                        ],
                    },
                    { key: "payment_limits_card_spend", title: "Card Spend", feature: "payments_card_spend_enabled", content: [{ limit_type: "DailyCardSpend", amountLabel: ({ formattedAmount: e }) => `${e} per day` }] },
                ],
                re = (e) => {
                    const { featureSwitches: t } = (0, G.QZ)(),
                        { limits: n } = (0, Q.Z)(),
                        r = ae.map((e) => {
                            const r = e.content.reduce(
                                    (e, t) => {
                                        const a = n?.find((e) => e.limit_type === t.limit_type),
                                            r = a?.amount?.local_micro;
                                        "-1" === r && (e.isUnlimited = !0);
                                        const l = parseFloat(r),
                                            i = l >= 0 ? (0, M.p2)({ amount: l, currency: a?.amount?.currency }) : null,
                                            o = a?.used?.local_micro ? (0, M.vw)({ amount: a?.used?.local_micro, currency: a?.used?.currency }) : null;
                                        return i && e.limits.push({ label: t.amountLabel({ formattedAmount: i }), usage: o ? ne({ usedAmount: o }) : null }), e;
                                    },
                                    { limits: [], isUnlimited: !1 },
                                ),
                                l = a.createElement(
                                    b.Z,
                                    { style: B.ZP.setting },
                                    a.createElement(
                                        b.Z,
                                        { style: le.content },
                                        r.limits.length > 0
                                            ? a.createElement(
                                                  b.Z,
                                                  { style: le.limit },
                                                  r.limits.map(({ label: e, usage: t }, n) => a.createElement(g.ZP, { color: "gray700", key: n }, e, t ? a.createElement(g.ZP, { color: "gray700", style: le.usage }, t) : null)),
                                              )
                                            : r.isUnlimited
                                              ? a.createElement(g.ZP, { color: "gray700" }, "Unlimited")
                                              : null,
                                    ),
                                );
                            return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(b.Z, { key: e.key, style: le.limitRoot, testID: e.key }, a.createElement(te, { content: l, title: e.title })) : null;
                        });
                    return a.createElement(I.Z, { title: h }, a.createElement(b.Z, { style: B.ZP.settingsScreenContainer }, r));
                },
                le = Z.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, usage: { marginStart: e.spaces.space4 } })),
                ie = { context: "PaymentsSettingsLimits" };
            function oe(e) {
                return a.createElement(C.H, { errorConfig: ie }, a.createElement(re, e));
            }
            const ce = (0, x.R)(a.memo(oe), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null });
            var se = n(779610),
                me = n(457311),
                ue = n(191796),
                de = n(463963),
                pe = n(698478),
                ye = n(348340);
            const he = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, ye.Z)({ type: de.E.DocumentTypeMonthlyStatement }),
                        [l, i] = a.useState(),
                        o = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, pe.x5)(t) ? (i(a), n()?.then((0, ye.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        c = a.useCallback((e) => () => (l === e && r === T.ZP.LOADING ? a.createElement(_.Z, { size: "small" }) : a.createElement(ue.default, { style: B.ZP.centeredIcon })), [l, r]);
                    return a.createElement(
                        I.Z,
                        { title: E },
                        a.createElement(
                            b.Z,
                            { style: B.ZP.settingsScreenContainer },
                            t && t.length > 0
                                ? t.map(({ documents: e, year: t }) => {
                                      const n = a.createElement(
                                          b.Z,
                                          { style: B.ZP.setting },
                                          e.map((e) => {
                                              const { start_date: n, url: r } = e;
                                              if (!r) return;
                                              const l = (0, M.Qu)(n),
                                                  i = l.getMonth(),
                                                  s = `${t}-${i}`;
                                              return a.createElement(se.Z, { key: s, label: l.toLocaleString("default", { month: "long" }), onPress: o(e, s), renderRightContent: c(s), styleOverride: B.ZP.cursor, withoutArrow: !0 });
                                          }),
                                      );
                                      return a.createElement(te, { content: n, key: t, title: t });
                                  })
                                : a.createElement(me.Z, { message: "You do not have any monthly statements yet." }),
                        ),
                    );
                },
                Ee = { context: "PaymentsSettingsMonthlyStatements" };
            function be(e) {
                return a.createElement(C.H, { errorConfig: Ee }, a.createElement(he, e));
            }
            const ge = (0, x.R)(a.memo(be), { permissionsAllOf: [P.d.GetDocuments], permissionsAnyOf: null });
            var _e = n(154003),
                fe = n(160144);
            const Ze = { pathname: o.AU.tier3.verifyIdentityPath, state: { redirectPath: o.iE.personal, closePath: o.iE.personal } },
                Pe = (e) => {
                    const { fetchCount: t, permissions: n, roles: l } = (0, w.Z)({ fetchKey: "Payments" }),
                        i = (0, r.useHistory)(),
                        c = n?.includes(P.d.VerifyIdentity),
                        s = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case fe.T.edit:
                                        if (!l?.includes("KycVerified")) return void i.push(o.AU.tier2.verifyIdentityPath, { redirectPath: o.iE.personal, closePath: o.iE.personal, requestedField: t });
                                        i.push(o.f0, { field: t });
                                        break;
                                    case fe.T.failure:
                                        i.replace(o.gp);
                                }
                            },
                            [i, l],
                        ),
                        m = a.useMemo(() => l?.includes("KycVerified"), [l]),
                        u = a.useMemo(() => {
                            const e = l?.includes("KycDocumentsVerified");
                            return a.createElement(b.Z, { style: [B.ZP.setting, we.idVerificationContent] }, a.createElement(g.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(_e.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(_e.ZP, { disabled: !c, link: c ? Ze : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [c, l]);
                    return a.createElement(I.Z, { title: y }, a.createElement(b.Z, { style: B.ZP.settingsScreenContainer }, a.createElement(te, { content: a.createElement(fe.Z, { eventCallback: s, key: t, linkType: o.P_.personal }), contentStyle: we.infoRoot, title: "Basic information" }), m && a.createElement(te, { content: u, title: "Identity information" })));
                },
                ke = { context: "PaymentsSettingsPersonal" };
            function Ce(e) {
                return a.createElement(C.H, { errorConfig: ke }, a.createElement(Pe, e));
            }
            const ve = (0, x.R)(a.memo(Ce), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                we = Z.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var Te = n(954110),
                xe = n(24568);
            const Se = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                Ae = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                De = (e) => {
                    const { permissions: t } = (0, w.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, G.QZ)(),
                        { handlePreferencesChange: r, preferences: l } = (0, xe.Z)(),
                        i = t?.includes(P.d.UpdatePin),
                        c = !(0, M.aY)(t),
                        s = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        u = n.isTrue("payments_card_spend_enabled"),
                        d = a.createElement(
                            b.Z,
                            { style: B.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                b.Z,
                                null,
                                Se.map(({ feature: e, helpText: t, label: i, name: o }) => (!e || n.isTrue(e) ? a.createElement(Te.Z, { checked: !!l[o], disabled: c, helpText: t, key: o, label: i, name: o, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        y = a.createElement(
                            b.Z,
                            { style: B.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                b.Z,
                                null,
                                Ae.map(({ feature: e, helpText: t, label: i, name: o }) => (!e || n.isTrue(e) ? a.createElement(Te.Z, { checked: !!l[o], disabled: c, helpText: t, key: o, label: i, name: o, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        h = a.createElement(b.Z, { style: B.ZP.setting }, a.createElement(Te.Z, { checked: !!l.enable_bill_pay, disabled: c, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        E = a.createElement(b.Z, { style: B.ZP.setting }, a.createElement(Te.Z, { checked: !!l.enable_card_payments, disabled: c, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(I.Z, { title: p }, a.createElement(b.Z, { style: B.ZP.settingsScreenContainer }, s ? a.createElement(te, { content: d, rightControl: i ? a.createElement(g.ZP, { link: o.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(te, { content: y, title: "Enhanced privacy" }), m ? a.createElement(te, { content: h, title: "Bill pay" }) : null, u ? a.createElement(te, { content: E, title: "Card payments" }) : null));
                },
                Ie = { context: "PaymentsSettingsSecurityPrivacy" };
            function Le(e) {
                return a.createElement(C.H, { errorConfig: Ie }, a.createElement(De, e));
            }
            const Be = (0, x.R)(a.memo(Le), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                Me = { page: "money", section: "settings" },
                Re = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        s = (0, i.hC)("payments_pin_enabled"),
                        m = (0, i.hC)("payments_account_details_enabled"),
                        b = s || m,
                        g = (0, i.hC)("payments_settings_documents_enabled"),
                        _ = a.useCallback(() => {
                            t.push(o.gp);
                        }, [t]),
                        f = a.useMemo(() => [{ path: o.iE.personal, label: y }, { path: o.iE.bankAccounts, label: "Linked accounts" }, { path: o.iE.limits, label: h }, b ? { path: o.iE.securityPrivacy, label: p } : null, g ? { path: o.iE.monthlyStatements, label: E } : null], [b, g]);
                    return a.createElement(
                        c.nO,
                        { namespace: Me },
                        a.createElement(
                            l.Z,
                            { onBackClick: _, screenType: "root", showBackButtonOnRoot: !0, title: "Money Settings" },
                            a.createElement(
                                d.Z,
                                null,
                                f.map((e, t) => e && a.createElement(u.Z, { isActive: n.pathname === e.path, isFirst: 0 === t, isLast: t === f.length - 1, key: e.path, label: e.label, link: e.path })),
                            ),
                        ),
                    );
                },
                ze = () => a.createElement(s.Z, { to: o.iE.personal }),
                Oe = (e) => {
                    const t = (0, i.hC)("payments_pin_enabled"),
                        n = (0, i.hC)("payments_account_details_enabled"),
                        l = t || n,
                        c = (0, i.hC)("payments_settings_documents_enabled");
                    return a.createElement(m.Z, { perColumnScroll: !0, rootComponent: Re, rootDetailContent: ze }, a.createElement(r.Route, { component: ve, exact: !0, key: "money_settings_personal", path: o.iE.personal }), a.createElement(r.Route, { component: q, exact: !0, key: "money_settings_bank_accounts", path: o.iE.bankAccounts }), a.createElement(r.Route, { component: ce, exact: !0, key: "money_settings_limits", path: o.iE.limits }), c && a.createElement(r.Route, { component: ge, exact: !0, key: "money_settings_monthly_statements", path: o.iE.monthlyStatements }), l && a.createElement(r.Route, { component: Be, exact: !0, key: "money_settings_security_privacy", path: o.iE.securityPrivacy }));
                },
                He = a.memo(Oe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => k, default: () => T, styles: () => w });
            var a = n(202784),
                r = n(325686),
                l = n(530525),
                i = n(439592),
                o = n(731708),
                c = n(154003),
                s = n(392237),
                m = n(515510),
                u = n(287688),
                d = n(980407),
                p = n(652904),
                y = n(736063),
                h = n(445664),
                E = n(293115),
                b = n(978167),
                g = n(934265),
                _ = n(743080);
            const f = { page: "money", section: "setup-direct-deposit" },
                Z = "Set up Direct Deposit",
                P = `${Z} - Account details`,
                k = (e) => {
                    const t = (0, _.jh)(),
                        { interest: n } = (0, g.Z)(),
                        { roles: c } = (0, h.Z)({ fetchKey: "Payments" }),
                        s = c?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = s && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.iconContainer }, a.createElement(l.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: i.Z.SQUARE, image: u })), a.createElement(r.Z, { style: w.titleContainer }, a.createElement(o.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(o.ZP, { color: "gray800", size: "body", weight: "normal" }, "Provide the details below to your employer or use them in your HR/payroll software to set up direct deposit."))), a.createElement(r.Z, { style: w.accountDetailsContainers }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: w.premiumBannerWrapper }, a.createElement(r.Z, { style: w.premiumBannerBackground }), a.createElement(r.Z, { style: w.premiumBannerContent }, a.createElement(o.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(o.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                C = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, _.jh)(),
                        l = a.useCallback(() => t.goBack(), [t]),
                        i = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        s = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { onClick: i, type: "primaryFilled" }, "Done"), a.createElement(o.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Payments LLC is a financial technology company, and not a bank. Funds are held at Cross River Bank, Member FDIC, and are eligible for pass through FDIC insurance if certain conditions are satisfied."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: s, history: t, onBackClick: l, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: f }, a.createElement(y.H, { errorConfig: C }, a.createElement(k, e))));
                },
                w = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                T = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                i = n(154003),
                o = n(731708),
                c = n(661810),
                s = n(568320),
                m = n(642004),
                u = n(922281),
                d = n(880428),
                p = n(357818),
                y = n(539660),
                h = n(980407),
                E = n(736063),
                b = n(514639),
                g = n(293115),
                _ = n(634455),
                f = n(477922),
                Z = n(615954),
                P = n(89319),
                k = n(448518),
                C = n(655750),
                v = n(48646),
                w = n(150855),
                T = n(972758),
                x = n(749286),
                S = n(236086),
                A = n(467734),
                D = n(464978),
                I = n(743080),
                L = n(727384);
            const B = { page: "money", section: "transaction-details" },
                M = [b.uv, b.r0, b.IN, b.HM, b.Jv],
                R = "Amount",
                z = (e) => {
                    const { history: t } = e,
                        n = (0, l.useParams)().transactionId,
                        E = (0, I.jh)(),
                        { get_transaction_by_id: z } = (0, D.Z)(n || ""),
                        { __id: O, amount_local_micro: H, authorization_method: F, availability_date: X, base_amount_micro: U, challenge_id: V, created_at: $, currency: N, description: Y, details: W, id: K, product_code: q, reason_code: G, total_fees_micro: Q, transaction_rail: j, transaction_status: J, transaction_type: ee } = z ?? {},
                        te = W?.receiver_results?.result,
                        ne = W?.sender_results?.result,
                        ae = W?.merchant_details?.merchant_results?.result,
                        re = W?.payment_method,
                        le = W?.merchant_details,
                        ie = W?.reference_transaction_id,
                        oe = (0, A.Z)({ senderId: ne?.rest_id }),
                        ce = (0, L.p6)(X),
                        se = (0, I.JU)(),
                        me = (0, L.y4)({ feeAmount: Q, totalAmount: H, baseAmount: U }),
                        ue = q === d.x.Interest,
                        de = ue && ee === p.x.Deposit,
                        pe = ue && ee === p.x.Transfer,
                        ye = ee === p.x.Deposit,
                        he = ee === p.x.Withdraw,
                        Ee = q === d.x.Transfer && !(ye || he),
                        be = ue || "User" !== te?.__typename || "User" !== ne?.__typename ? null : oe ? te : ne,
                        ge = (0, L.zx)({ referenceTransactionId: ie, transactionType: ee }),
                        _e = (0, L.qU)({ transactionType: ee, productCode: q }),
                        fe = ye || he || _e ? (0, L.Ou)(re) : null,
                        Ze = be?.core?.screen_name,
                        Pe = (0, L.Q1)({ status: J, transactionType: ee, isViewerSender: oe, createdAt: $, productCode: q, description: Y, reasonCode: G }),
                        ke = ne?.core?.screen_name,
                        Ce = te?.core?.screen_name,
                        ve = ye ? fe : null,
                        we = he ? fe : null,
                        Te = (0, L.Bl)({ status: J }),
                        xe = (0, L._T)({ status: J }),
                        Se = "/notifications" === t.location.state?.previousPath && !de && (Te || xe),
                        Ae = (0, L.EQ)({ productCode: q, transactionType: ee }),
                        De = (0, L.zK)({ transactionType: ee, productCode: q, merchantDetails: le, amountType: Pe.amountType }),
                        Ie = De && De.location && (0, L.T7)(De.location),
                        Le = (0, L.wg)({ method: F, rail: j }),
                        Be = Ae || _e,
                        Me = (0, L.pQ)({ productCode: q, transactionType: ee, account: fe }),
                        Re = a.useMemo(() => (n ? a.createElement(P.Z, { reportedHandle: Ze, transactionId: n }) : null), [n, Ze]),
                        ze = fe && fe.id && G === y.P.RejectedCardInactive && fe.status === u.D.Inactive && fe.issuedCardType === m.W.IssuedCardTypePhysical,
                        Oe = (0, L.XT)({ status: J, transactionType: ee, isViewerSender: oe }) || Se || ze,
                        He = a.useCallback(() => {
                            M.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(b.gp) : t.goBack();
                        }, [t]),
                        Fe = Oe ? a.createElement(r.Z, { style: E.footer }, K ? a.createElement(r.Z, { style: I.YP.actions }, fe?.id && ze && a.createElement(S.Z, { cardId: fe.id, fromFailedTransaction: !0 }), a.createElement(k.Z, { amount: H, challengeId: V, currency: N, isViewerSender: oe, receiverScreenName: Ce, recordId: O, senderScreenName: ke, status: J, transactionId: K, transactionType: ee })) : null, Se ? a.createElement(i.ZP, { link: b.gp, size: se, style: I.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        g.nO,
                        { namespace: B },
                        a.createElement(
                            h.Z,
                            { bottomBar: Fe, history: t, onBackClick: He, rightControl: Re, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: E.container },
                                a.createElement(
                                    r.Z,
                                    { style: I.YP.content },
                                    Me ? a.createElement(r.Z, { style: I.YP.gap }, a.createElement(f.KR, { size: "xJumbo", type: Me.iconType, uri: Me.uri }), a.createElement(T.Z, { size: "title4", title: Me.title })) : be ? a.createElement(x.Z, { avatarWithLink: !0, user: be, usernameWithLink: !0 }) : De ? (ae && "User" === ae.__typename ? a.createElement(x.Z, { avatarWithLink: !0, user: ae, usernameWithLink: !0 }) : a.createElement(r.Z, { style: I.YP.gap }, a.createElement(f.G7, { size: "xJumbo", type: De.type, uri: De.logo }), a.createElement(Z.Z, { name: De.name, size: "title4" }))) : null,
                                    a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, Pe.createdAt),
                                    a.createElement(r.Z, { style: [I.YP.gap, I.YP.marginTop] }, H ? a.createElement(_.Z, { amount: H, currency: N, hasCompleted: xe, hasFailed: Te, type: Pe.amountType }) : null, Ee ? (Pe.description ? a.createElement(v.Z, { color: "gray700", note: Pe.description }) : null) : a.createElement(o.ZP, { color: "gray700" }, me ? "Total" : R)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: I.ZP.rowSpaceBetween }, a.createElement(C.Z, { description: Pe.status, title: "Status" }), ce ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: I.YP.arrow }), a.createElement(C.Z, { description: ce, title: "Funds available on" })) : null),
                                    me && Q && "0" !== Q && a.createElement(C.Z, { description: a.createElement(_.Z, { amount: Q, currency: N, size: "body", weight: "normal" }), title: "Fee" }),
                                    me && U && "0" !== U && a.createElement(C.Z, { description: a.createElement(_.Z, { amount: U, currency: N, size: "body", weight: "normal" }), title: R }),
                                    ve && a.createElement(C.Z, { description: a.createElement(w.Z, { account: ve, testId: "source" }), title: "Source" }),
                                    we && a.createElement(C.Z, { description: a.createElement(w.Z, { account: we, testId: "destination" }), title: "Destination" }),
                                    ge ? a.createElement(C.Z, { description: a.createElement(o.ZP, { color: "text", link: ge }, ie), title: "Original transaction" }) : null,
                                    pe && $ ? a.createElement(C.Z, { description: (0, L.nV)($), title: "Period" }) : null,
                                    De && fe && fe.issuedCardAccountName ? a.createElement(C.Z, { description: a.createElement(w.Z, { account: fe, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Le ? a.createElement(C.Z, { description: Le, title: "Mode" }) : null,
                                    Ie ? a.createElement(C.Z, { description: Ie, title: "Location" }) : null,
                                    a.createElement(C.Z, { description: K, title: "Transaction ID" }),
                                    Be && Y && a.createElement(C.Z, { description: Y, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                O = { context: "TRANSACTION_DETAIL" },
                H = (e) => a.createElement(E.H, { errorConfig: O }, a.createElement(z, e)),
                F = a.memo(H);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                i = n(554337);
            const o = (e) => r.createElement(i.Z, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                c = r.memo(o);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                r = n(107267),
                l = n(736063),
                i = n(514639),
                o = n(445664),
                c = n(827309),
                s = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.Z)(),
                        { isActive: l } = (0, o.Z)({ fetchKey: "Payments" }),
                        d = n && i.g7[n],
                        p = a.useCallback(() => {
                            t.replace(l ? i.gp : "/");
                        }, [t, l]),
                        { actionLabel: y, defaultSubtext: h, subtext: E } = l ? u.active : u.nonActive;
                    return a.createElement(c.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? E({ region: d }) : h, supportUrl: i.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(l.H, { errorConfig: p }, a.createElement(d, e)),
                h = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-be74d874.00d4481a.js.map
