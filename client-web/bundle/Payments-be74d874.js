"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-be74d874"],
    {
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(747995);
            const i = (e) => r.createElement(o.default, (0, a.Z)({}, e, { transferDirection: l.Rz.credit })),
                c = r.memo(i);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                l = n(514639),
                o = n(445664),
                i = n(615027);
            const c = { context: "PaymentsRouterSwitch" },
                s = { type: "CustomRetry", content: () => a.createElement(i.Z, { to: l.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, o.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(i.Z, { to: t });
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
                o = n(952793),
                i = n(514639),
                c = n(293115),
                s = n(615027),
                m = n(221716),
                u = n(261906),
                d = n(722610);
            const p = "Security & Privacy",
                y = "Personal information",
                h = "Limits",
                E = "Monthly Statements";
            var g = n(325686),
                b = n(731708),
                _ = n(167630),
                f = n(190286),
                Z = n(392237),
                P = n(436117),
                k = n(922281),
                C = n(736063),
                v = n(782642),
                w = n(445664),
                T = n(312771),
                A = n(696445),
                x = n(392046),
                S = n(600568),
                D = n(295747),
                B = n(221554),
                I = n(226332),
                L = n(743080),
                M = n(727384),
                R = n(195816),
                z = (n(585488), n(351743)),
                O = n.n(z);
            const H = R.Z,
                X = () => {
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
                U = "Link a bank account",
                F = "Link a card",
                V = { pathname: i.ac, state: { redirectPath: i.iE.bankAccounts } },
                $ = { pathname: i.UA, state: { redirectPath: i.iE.bankAccounts } },
                N = () => {
                    const { paymentMethods: e, refetchStatus: t } = (0, I.Z)(),
                        { permissions: n } = (0, w.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        [o, c] = a.useState(null),
                        [s, m] = a.useState(null),
                        u = (0, v.p)(),
                        [d, p] = X(),
                        y = n?.includes(P.d.DeletePaymentMethod),
                        h = n?.includes(P.d.CreatePaymentMethod),
                        E = a.useCallback(
                            (e) => () => {
                                l.push(i.VN, { redirectPath: i.iE.bankAccounts, paymentMethodId: e });
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
                        A = a.useCallback(() => {
                            m(null);
                        }, []),
                        R = a.useCallback(() => {
                            o &&
                                d({ paymentMethodId: o })
                                    .then(() => {
                                        c(null), u({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        u({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [u, o, d]),
                        z = e?.filter((e) => "XPaymentsBankAccountPaymentMethod" === e?.core?.details?.__typename) || [],
                        O = e?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [],
                        H = ({ accounts: e, sectionTitle: t, showAddButton: n, type: r }) =>
                            a.createElement(
                                g.Z,
                                { style: W.accountSection },
                                a.createElement(b.ZP, { color: "gray700", size: "body", weight: "medium" }, t),
                                e?.map((e) => {
                                    const t = (0, M.Ou)(e),
                                        n = t?.id;
                                    return t && n ? a.createElement(x.Z, { account: t, handleExpand: Z(t), key: n, onClick: e?.core?.details?.status === k.D.LoginRequired && h ? E(n) : void 0 }) : null;
                                }),
                                n ? a.createElement(D.Z, { disabled: !h, label: "XPaymentsBankAccountPaymentMethod" === r ? U : F, link: h ? ("XPaymentsBankAccountPaymentMethod" === r ? V : $) : void 0, name: "XPaymentsBankAccountPaymentMethod" === r ? U : F, variant: "row" }) : null,
                            ),
                        N = a.createElement(g.Z, { style: W.accountSection }, (z.length > 0 || h) && H({ accounts: z, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts", showAddButton: !!h }), (O.length > 0 || h) && H({ accounts: O, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards", showAddButton: !!h }));
                    return a.createElement(B.Z, { title: "Linked accounts" }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, t === T.iF.LOADING ? a.createElement(_.Z, null) : a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, N), s ? a.createElement(S.Z, { account: s, onDone: A, onRemove: y && s.id ? C(s.id) : void 0 }) : null, o ? a.createElement(f.Z, { confirmButtonDisabled: p, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => c(null), onConfirm: R, text: "Your account will be removed from X" }) : null));
                },
                Y = { context: "PaymentsSettingsExternalAccounts" },
                W = Z.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function G(e) {
                return a.createElement(C.H, { errorConfig: Y }, a.createElement(N, e));
            }
            const K = (0, A.R)(a.memo(G), { permissionsAllOf: [P.d.GetAccounts, P.d.GetPaymentMethod], permissionsAnyOf: null });
            var q = n(443781),
                Q = n(889738),
                j = n(844685),
                J = n(165822);
            const ee = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: l }) => {
                    const o = (0, L.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(j.Z, { rightControl: n, style: L.ZP.settingHeader, subtext: r, text: l }), a.createElement(J.Z, { "aria-label": l, containerStyle: o.tile, stackLayoutUpperStyle: t ?? L.ZP.upper, upper: e, withInteractiveStyling: !1 }));
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
                    const { featureSwitches: t } = (0, q.QZ)(),
                        { limits: n } = (0, Q.Z)(),
                        r = ae.map((e) => {
                            const r = e.content.reduce(
                                    (e, t) => {
                                        const a = n?.find((e) => e.limit_type === t.limit_type),
                                            r = a?.amount?.local_micro;
                                        "-1" === r && (e.isUnlimited = !0);
                                        const l = parseFloat(r),
                                            o = l >= 0 ? (0, M.p2)({ amount: l, currency: a?.amount?.currency }) : null,
                                            i = a?.used?.local_micro ? (0, M.vw)({ amount: a?.used?.local_micro, currency: a?.used?.currency }) : null;
                                        return o && e.limits.push({ label: t.amountLabel({ formattedAmount: o }), usage: i ? ne({ usedAmount: i }) : null }), e;
                                    },
                                    { limits: [], isUnlimited: !1 },
                                ),
                                l = a.createElement(
                                    g.Z,
                                    { style: L.ZP.setting },
                                    a.createElement(
                                        g.Z,
                                        { style: le.content },
                                        r.limits.length > 0
                                            ? a.createElement(
                                                  g.Z,
                                                  { style: le.limit },
                                                  r.limits.map(({ label: e, usage: t }, n) => a.createElement(b.ZP, { color: "gray700", key: n }, e, t ? a.createElement(b.ZP, { color: "gray700", style: le.usage }, t) : null)),
                                              )
                                            : r.isUnlimited
                                              ? a.createElement(b.ZP, { color: "gray700" }, "Unlimited")
                                              : null,
                                    ),
                                );
                            return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(g.Z, { key: e.key, style: le.limitRoot, testID: e.key }, a.createElement(te, { content: l, title: e.title })) : null;
                        });
                    return a.createElement(B.Z, { title: h }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, r));
                },
                le = Z.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, usage: { marginStart: e.spaces.space4 } })),
                oe = { context: "PaymentsSettingsLimits" };
            function ie(e) {
                return a.createElement(C.H, { errorConfig: oe }, a.createElement(re, e));
            }
            const ce = (0, A.R)(a.memo(ie), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null });
            var se = n(779610),
                me = n(457311),
                ue = n(191796),
                de = n(463963),
                pe = n(698478),
                ye = n(348340);
            const he = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, ye.Z)({ type: de.E.DocumentTypeMonthlyStatement }),
                        [l, o] = a.useState(),
                        i = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, pe.x5)(t) ? (o(a), n()?.then((0, ye.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        c = a.useCallback((e) => () => (l === e && r === T.ZP.LOADING ? a.createElement(_.Z, { size: "small" }) : a.createElement(ue.default, { style: L.ZP.centeredIcon })), [l, r]);
                    return a.createElement(
                        B.Z,
                        { title: E },
                        a.createElement(
                            g.Z,
                            { style: L.ZP.settingsScreenContainer },
                            t && t.length > 0
                                ? t.map(({ documents: e, year: t }) => {
                                      const n = a.createElement(
                                          g.Z,
                                          { style: L.ZP.setting },
                                          e.map((e) => {
                                              const { start_date: n, url: r } = e;
                                              if (!r) return;
                                              const l = (0, M.Qu)(n),
                                                  o = l.getMonth(),
                                                  s = `${t}-${o}`;
                                              return a.createElement(se.Z, { key: s, label: l.toLocaleString("default", { month: "long" }), onPress: i(e, s), renderRightContent: c(s), styleOverride: L.ZP.cursor, withoutArrow: !0 });
                                          }),
                                      );
                                      return a.createElement(te, { content: n, key: t, title: t });
                                  })
                                : a.createElement(me.Z, { message: "You do not have any monthly statements yet." }),
                        ),
                    );
                },
                Ee = { context: "PaymentsSettingsMonthlyStatements" };
            function ge(e) {
                return a.createElement(C.H, { errorConfig: Ee }, a.createElement(he, e));
            }
            const be = (0, A.R)(a.memo(ge), { permissionsAllOf: [P.d.GetDocuments], permissionsAnyOf: null });
            var _e = n(154003),
                fe = n(160144);
            const Ze = { pathname: i.AU.tier3.verifyIdentityPath, state: { redirectPath: i.iE.personal, closePath: i.iE.personal } },
                Pe = (e) => {
                    const { fetchCount: t, permissions: n, roles: l } = (0, w.Z)({ fetchKey: "Payments" }),
                        o = (0, r.useHistory)(),
                        c = n?.includes(P.d.VerifyIdentity),
                        s = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case fe.T.edit:
                                        if (!l?.includes("KycVerified")) return void o.push(i.AU.tier2.verifyIdentityPath, { redirectPath: i.iE.personal, closePath: i.iE.personal, requestedField: t });
                                        o.push(i.f0, { field: t });
                                        break;
                                    case fe.T.failure:
                                        o.replace(i.gp);
                                }
                            },
                            [o, l],
                        ),
                        m = a.useMemo(() => l?.includes("KycVerified"), [l]),
                        u = a.useMemo(() => {
                            const e = l?.includes("KycDocumentsVerified");
                            return a.createElement(g.Z, { style: [L.ZP.setting, we.idVerificationContent] }, a.createElement(b.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(_e.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(_e.ZP, { disabled: !c, link: c ? Ze : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [c, l]);
                    return a.createElement(B.Z, { title: y }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, a.createElement(te, { content: a.createElement(fe.Z, { eventCallback: s, key: t, linkType: i.P_.personal }), contentStyle: we.infoRoot, title: "Basic information" }), m && a.createElement(te, { content: u, title: "Identity information" })));
                },
                ke = { context: "PaymentsSettingsPersonal" };
            function Ce(e) {
                return a.createElement(C.H, { errorConfig: ke }, a.createElement(Pe, e));
            }
            const ve = (0, A.R)(a.memo(Ce), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                we = Z.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var Te = n(954110),
                Ae = n(24568);
            const xe = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                Se = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                De = (e) => {
                    const { permissions: t } = (0, w.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, q.QZ)(),
                        { handlePreferencesChange: r, preferences: l } = (0, Ae.Z)(),
                        o = t?.includes(P.d.UpdatePin),
                        c = !(0, M.aY)(t),
                        s = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        u = n.isTrue("payments_card_spend_enabled"),
                        d = a.createElement(
                            g.Z,
                            { style: L.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                g.Z,
                                null,
                                xe.map(({ feature: e, helpText: t, label: o, name: i }) => (!e || n.isTrue(e) ? a.createElement(Te.Z, { checked: !!l[i], disabled: c, helpText: t, key: i, label: o, name: i, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        y = a.createElement(
                            g.Z,
                            { style: L.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                g.Z,
                                null,
                                Se.map(({ feature: e, helpText: t, label: o, name: i }) => (!e || n.isTrue(e) ? a.createElement(Te.Z, { checked: !!l[i], disabled: c, helpText: t, key: i, label: o, name: i, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        h = a.createElement(g.Z, { style: L.ZP.setting }, a.createElement(Te.Z, { checked: !!l.enable_bill_pay, disabled: c, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        E = a.createElement(g.Z, { style: L.ZP.setting }, a.createElement(Te.Z, { checked: !!l.enable_card_payments, disabled: c, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(B.Z, { title: p }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, s ? a.createElement(te, { content: d, rightControl: o ? a.createElement(b.ZP, { link: i.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(te, { content: y, title: "Enhanced privacy" }), m ? a.createElement(te, { content: h, title: "Bill pay" }) : null, u ? a.createElement(te, { content: E, title: "Card payments" }) : null));
                },
                Be = { context: "PaymentsSettingsSecurityPrivacy" };
            function Ie(e) {
                return a.createElement(C.H, { errorConfig: Be }, a.createElement(De, e));
            }
            const Le = (0, A.R)(a.memo(Ie), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                Me = { page: "money", section: "settings" },
                Re = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        s = (0, o.hC)("payments_pin_enabled"),
                        m = (0, o.hC)("payments_account_details_enabled"),
                        g = s || m,
                        b = (0, o.hC)("payments_settings_documents_enabled"),
                        _ = a.useCallback(() => {
                            t.push(i.gp);
                        }, [t]),
                        f = a.useMemo(() => [{ path: i.iE.personal, label: y }, { path: i.iE.bankAccounts, label: "Linked accounts" }, { path: i.iE.limits, label: h }, g ? { path: i.iE.securityPrivacy, label: p } : null, b ? { path: i.iE.monthlyStatements, label: E } : null], [g, b]);
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
                ze = () => a.createElement(s.Z, { to: i.iE.personal }),
                Oe = (e) => {
                    const t = (0, o.hC)("payments_pin_enabled"),
                        n = (0, o.hC)("payments_account_details_enabled"),
                        l = t || n,
                        c = (0, o.hC)("payments_settings_documents_enabled");
                    return a.createElement(m.Z, { perColumnScroll: !0, rootComponent: Re, rootDetailContent: ze }, a.createElement(r.Route, { component: ve, exact: !0, key: "money_settings_personal", path: i.iE.personal }), a.createElement(r.Route, { component: K, exact: !0, key: "money_settings_bank_accounts", path: i.iE.bankAccounts }), a.createElement(r.Route, { component: ce, exact: !0, key: "money_settings_limits", path: i.iE.limits }), c && a.createElement(r.Route, { component: be, exact: !0, key: "money_settings_monthly_statements", path: i.iE.monthlyStatements }), l && a.createElement(r.Route, { component: Le, exact: !0, key: "money_settings_security_privacy", path: i.iE.securityPrivacy }));
                },
                He = a.memo(Oe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => k, default: () => T, styles: () => w });
            var a = n(202784),
                r = n(325686),
                l = n(530525),
                o = n(439592),
                i = n(731708),
                c = n(154003),
                s = n(392237),
                m = n(515510),
                u = n(287688),
                d = n(980407),
                p = n(652904),
                y = n(736063),
                h = n(445664),
                E = n(293115),
                g = n(978167),
                b = n(934265),
                _ = n(743080);
            const f = { page: "money", section: "setup-direct-deposit" },
                Z = "Set up Direct Deposit",
                P = `${Z} - Account details`,
                k = (e) => {
                    const t = (0, _.jh)(),
                        { interest: n } = (0, b.Z)(),
                        { roles: c } = (0, h.Z)({ fetchKey: "Payments" }),
                        s = c?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = s && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.iconContainer }, a.createElement(l.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: o.Z.SQUARE, image: u })), a.createElement(r.Z, { style: w.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Give the details below to your employer, or use them in your HR / payroll software."))), a.createElement(r.Z, { style: w.accountDetailsContainers }, a.createElement(g.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: w.premiumBannerWrapper }, a.createElement(r.Z, { style: w.premiumBannerBackground }), a.createElement(r.Z, { style: w.premiumBannerContent }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(i.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                C = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, _.jh)(),
                        l = a.useCallback(() => t.goBack(), [t]),
                        o = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        s = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { onClick: o, type: "primaryFilled" }, "Done"), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: s, history: t, onBackClick: l, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: f }, a.createElement(y.H, { errorConfig: C }, a.createElement(k, e))));
                },
                w = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                T = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => X });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                o = n(154003),
                i = n(731708),
                c = n(661810),
                s = n(568320),
                m = n(642004),
                u = n(922281),
                d = n(880428),
                p = n(357818),
                y = n(539660),
                h = n(980407),
                E = n(736063),
                g = n(514639),
                b = n(293115),
                _ = n(634455),
                f = n(477922),
                Z = n(615954),
                P = n(89319),
                k = n(448518),
                C = n(655750),
                v = n(48646),
                w = n(150855),
                T = n(972758),
                A = n(749286),
                x = n(236086),
                S = n(467734),
                D = n(464978),
                B = n(743080),
                I = n(727384);
            const L = { page: "money", section: "transaction-details" },
                M = [g.uv, g.r0, g.IN, g.HM, g.Jv],
                R = "Amount",
                z = (e) => {
                    const { history: t } = e,
                        n = (0, l.useParams)().transactionId,
                        E = (0, B.jh)(),
                        { get_transaction_by_id: z } = (0, D.Z)(n || ""),
                        { __id: O, amount_local_micro: H, authorization_method: X, availability_date: U, base_amount_micro: F, challenge_id: V, created_at: $, currency: N, description: Y, details: W, id: G, product_code: K, reason_code: q, total_fees_micro: Q, transaction_rail: j, transaction_status: J, transaction_type: ee } = z ?? {},
                        te = W?.receiver_results?.result,
                        ne = W?.sender_results?.result,
                        ae = W?.merchant_details?.merchant_results?.result,
                        re = W?.payment_method,
                        le = W?.merchant_details,
                        oe = W?.reference_transaction_id,
                        ie = (0, S.Z)({ senderId: ne?.rest_id }),
                        ce = (0, I.p6)(U),
                        se = (0, B.JU)(),
                        me = (0, I.y4)({ feeAmount: Q, totalAmount: H, baseAmount: F }),
                        ue = K === d.x.Interest,
                        de = ue && ee === p.x.Deposit,
                        pe = ue && ee === p.x.Transfer,
                        ye = ee === p.x.Deposit,
                        he = ee === p.x.Withdraw,
                        Ee = K === d.x.Transfer && !(ye || he),
                        ge = ue || "User" !== te?.__typename || "User" !== ne?.__typename ? null : ie ? te : ne,
                        be = (0, I.zx)({ referenceTransactionId: oe, transactionType: ee }),
                        _e = (0, I.qU)({ transactionType: ee, productCode: K }),
                        fe = ye || he || _e ? (0, I.Ou)(re) : null,
                        Ze = ge?.core?.screen_name,
                        Pe = (0, I.Q1)({ status: J, transactionType: ee, isViewerSender: ie, createdAt: $, productCode: K, description: Y, reasonCode: q }),
                        ke = ne?.core?.screen_name,
                        Ce = te?.core?.screen_name,
                        ve = ye ? fe : null,
                        we = he ? fe : null,
                        Te = (0, I.Bl)({ status: J }),
                        Ae = (0, I._T)({ status: J }),
                        xe = "/notifications" === t.location.state?.previousPath && !de && (Te || Ae),
                        Se = (0, I.EQ)({ productCode: K, transactionType: ee }),
                        De = (0, I.zK)({ transactionType: ee, productCode: K, merchantDetails: le, amountType: Pe.amountType }),
                        Be = De && De.location && (0, I.T7)(De.location),
                        Ie = (0, I.wg)({ method: X, rail: j }),
                        Le = Se || _e,
                        Me = (0, I.pQ)({ productCode: K, transactionType: ee, account: fe }),
                        Re = a.useMemo(() => (n ? a.createElement(P.Z, { reportedHandle: Ze, transactionId: n }) : null), [n, Ze]),
                        ze = fe && fe.id && q === y.P.RejectedCardInactive && fe.status === u.D.Inactive && fe.issuedCardType === m.W.IssuedCardTypePhysical,
                        Oe = (0, I.XT)({ status: J, transactionType: ee, isViewerSender: ie }) || xe || ze,
                        He = a.useCallback(() => {
                            M.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(g.gp) : t.goBack();
                        }, [t]),
                        Xe = Oe ? a.createElement(r.Z, { style: E.footer }, G ? a.createElement(r.Z, { style: B.YP.actions }, fe?.id && ze && a.createElement(x.Z, { cardId: fe.id, fromFailedTransaction: !0 }), a.createElement(k.Z, { amount: H, challengeId: V, currency: N, isViewerSender: ie, receiverScreenName: Ce, recordId: O, senderScreenName: ke, status: J, transactionId: G, transactionType: ee })) : null, xe ? a.createElement(o.ZP, { link: g.gp, size: se, style: B.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        b.nO,
                        { namespace: L },
                        a.createElement(
                            h.Z,
                            { bottomBar: Xe, history: t, onBackClick: He, rightControl: Re, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: E.container },
                                a.createElement(
                                    r.Z,
                                    { style: B.YP.content },
                                    Me ? a.createElement(r.Z, { style: B.YP.gap }, a.createElement(f.KR, { size: "xJumbo", type: Me.iconType, uri: Me.uri }), a.createElement(T.Z, { size: "title4", title: Me.title })) : ge ? a.createElement(A.Z, { avatarWithLink: !0, user: ge, usernameWithLink: !0 }) : De ? (ae && "User" === ae.__typename ? a.createElement(A.Z, { avatarWithLink: !0, user: ae, usernameWithLink: !0 }) : a.createElement(r.Z, { style: B.YP.gap }, a.createElement(f.G7, { size: "xJumbo", type: De.type, uri: De.logo }), a.createElement(Z.Z, { name: De.name, size: "title4" }))) : null,
                                    a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, Pe.createdAt),
                                    a.createElement(r.Z, { style: [B.YP.gap, B.YP.marginTop] }, H ? a.createElement(_.Z, { amount: H, currency: N, hasCompleted: Ae, type: Pe.amountType }) : null, Ee ? (Pe.description ? a.createElement(v.Z, { color: "gray700", note: Pe.description }) : null) : a.createElement(i.ZP, { color: "gray700" }, me ? "Total" : R)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: B.ZP.rowSpaceBetween }, a.createElement(C.Z, { description: Pe.status, title: "Status" }), ce ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: B.YP.arrow }), a.createElement(C.Z, { description: ce, title: "Funds available on" })) : null),
                                    me && Q && "0" !== Q && a.createElement(C.Z, { description: a.createElement(_.Z, { amount: Q, currency: N, size: "body", weight: "normal" }), title: "Fee" }),
                                    me && F && "0" !== F && a.createElement(C.Z, { description: a.createElement(_.Z, { amount: F, currency: N, size: "body", weight: "normal" }), title: R }),
                                    ve && a.createElement(C.Z, { description: a.createElement(w.Z, { account: ve, testId: "source" }), title: "Source" }),
                                    we && a.createElement(C.Z, { description: a.createElement(w.Z, { account: we, testId: "destination" }), title: "Destination" }),
                                    be ? a.createElement(C.Z, { description: a.createElement(i.ZP, { color: "text", link: be }, oe), title: "Original transaction" }) : null,
                                    pe && $ ? a.createElement(C.Z, { description: (0, I.nV)($), title: "Period" }) : null,
                                    De && fe && fe.issuedCardAccountName ? a.createElement(C.Z, { description: a.createElement(w.Z, { account: fe, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Ie ? a.createElement(C.Z, { description: Ie, title: "Mode" }) : null,
                                    Be ? a.createElement(C.Z, { description: Be, title: "Location" }) : null,
                                    a.createElement(C.Z, { description: G, title: "Transaction ID" }),
                                    Le && Y && a.createElement(C.Z, { description: Y, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                O = { context: "TRANSACTION_DETAIL" },
                H = (e) => a.createElement(E.H, { errorConfig: O }, a.createElement(z, e)),
                X = a.memo(H);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(554337);
            const i = (e) => r.createElement(o.Z, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                c = r.memo(i);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                r = n(107267),
                l = n(736063),
                o = n(514639),
                i = n(445664),
                c = n(827309),
                s = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.Z)(),
                        { isActive: l } = (0, i.Z)({ fetchKey: "Payments" }),
                        d = n && o.g7[n],
                        p = a.useCallback(() => {
                            t.replace(l ? o.gp : "/");
                        }, [t, l]),
                        { actionLabel: y, defaultSubtext: h, subtext: E } = l ? u.active : u.nonActive;
                    return a.createElement(c.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? E({ region: d }) : h, supportUrl: o.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(l.H, { errorConfig: p }, a.createElement(d, e)),
                h = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-be74d874.269dbb4a.js.map
