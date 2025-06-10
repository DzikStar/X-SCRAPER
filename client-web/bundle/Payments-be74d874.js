"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-be74d874"],
    {
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(231509);
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
                A = n(312771),
                T = n(696445),
                x = n(392046),
                S = n(600568),
                D = n(295747),
                B = n(221554),
                L = n(226332),
                I = n(743080),
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
                V = "Link a card",
                $ = { pathname: i.ac, state: { redirectPath: i.iE.bankAccounts } },
                F = { pathname: i.UA, state: { redirectPath: i.iE.bankAccounts } },
                N = () => {
                    const { paymentMethods: e, refetchStatus: t } = (0, L.Z)(),
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
                        T = a.useCallback(() => {
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
                                n ? a.createElement(D.Z, { disabled: !h, label: "XPaymentsBankAccountPaymentMethod" === r ? U : V, link: h ? ("XPaymentsBankAccountPaymentMethod" === r ? $ : F) : void 0, name: "XPaymentsBankAccountPaymentMethod" === r ? U : V, variant: "row" }) : null,
                            ),
                        N = a.createElement(g.Z, { style: W.accountSection }, (z.length > 0 || h) && H({ accounts: z, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts", showAddButton: !!h }), (O.length > 0 || h) && H({ accounts: O, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards", showAddButton: !!h }));
                    return a.createElement(B.Z, { title: "Linked accounts" }, a.createElement(g.Z, { style: I.ZP.settingsScreenContainer }, t === A.iF.LOADING ? a.createElement(_.Z, null) : a.createElement(g.Z, { style: I.ZP.settingsScreenContainer }, N), s ? a.createElement(S.Z, { account: s, onDone: T, onRemove: y && s.id ? C(s.id) : void 0 }) : null, o ? a.createElement(f.Z, { confirmButtonDisabled: p, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => c(null), onConfirm: R, text: "Your account will be removed from X" }) : null));
                },
                Y = { context: "PaymentsSettingsExternalAccounts" },
                W = Z.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function G(e) {
                return a.createElement(C.H, { errorConfig: Y }, a.createElement(N, e));
            }
            const K = (0, T.R)(a.memo(G), { permissionsAllOf: [P.d.GetAccounts, P.d.GetPaymentMethod], permissionsAnyOf: null });
            var q = n(443781),
                Q = n(889738),
                j = n(844685),
                J = n(165822);
            const ee = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: l }) => {
                    const o = (0, I.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(j.Z, { rightControl: n, style: I.ZP.settingHeader, subtext: r, text: l }), a.createElement(J.Z, { "aria-label": l, containerStyle: o.tile, stackLayoutUpperStyle: t ?? I.ZP.upper, upper: e, withInteractiveStyling: !1 }));
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
                                    { style: I.ZP.setting },
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
                    return a.createElement(B.Z, { title: h }, a.createElement(g.Z, { style: I.ZP.settingsScreenContainer }, r));
                },
                le = Z.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, usage: { marginStart: e.spaces.space4 } })),
                oe = { context: "PaymentsSettingsLimits" };
            function ie(e) {
                return a.createElement(C.H, { errorConfig: oe }, a.createElement(re, e));
            }
            const ce = (0, T.R)(a.memo(ie), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null });
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
                        c = a.useCallback((e) => () => (l === e && r === A.ZP.LOADING ? a.createElement(_.Z, { size: "small" }) : a.createElement(ue.default, { style: I.ZP.centeredIcon })), [l, r]);
                    return a.createElement(
                        B.Z,
                        { title: E },
                        a.createElement(
                            g.Z,
                            { style: I.ZP.settingsScreenContainer },
                            t && t.length > 0
                                ? t.map(({ documents: e, year: t }) => {
                                      const n = a.createElement(
                                          g.Z,
                                          { style: I.ZP.setting },
                                          e.map((e) => {
                                              const { start_date: n, url: r } = e;
                                              if (!r) return;
                                              const l = (0, M.Qu)(n),
                                                  o = l.getMonth(),
                                                  s = `${t}-${o}`;
                                              return a.createElement(se.Z, { key: s, label: l.toLocaleString("default", { month: "long" }), onPress: i(e, s), renderRightContent: c(s), styleOverride: I.ZP.cursor, withoutArrow: !0 });
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
            const be = (0, T.R)(a.memo(ge), { permissionsAllOf: [P.d.GetDocuments], permissionsAnyOf: null });
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
                            return a.createElement(g.Z, { style: [I.ZP.setting, we.idVerificationContent] }, a.createElement(b.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(_e.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(_e.ZP, { disabled: !c, link: c ? Ze : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [c, l]);
                    return a.createElement(B.Z, { title: y }, a.createElement(g.Z, { style: I.ZP.settingsScreenContainer }, a.createElement(te, { content: a.createElement(fe.Z, { eventCallback: s, key: t, linkType: i.P_.personal }), contentStyle: we.infoRoot, title: "Basic information" }), m && a.createElement(te, { content: u, title: "Identity information" })));
                },
                ke = { context: "PaymentsSettingsPersonal" };
            function Ce(e) {
                return a.createElement(C.H, { errorConfig: ke }, a.createElement(Pe, e));
            }
            const ve = (0, T.R)(a.memo(Ce), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                we = Z.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var Ae = n(954110),
                Te = n(24568);
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
                        { handlePreferencesChange: r, preferences: l } = (0, Te.Z)(),
                        o = t?.includes(P.d.UpdatePin),
                        c = !(0, M.aY)(t),
                        s = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        u = n.isTrue("payments_card_spend_enabled"),
                        d = a.createElement(
                            g.Z,
                            { style: I.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                g.Z,
                                null,
                                xe.map(({ feature: e, helpText: t, label: o, name: i }) => (!e || n.isTrue(e) ? a.createElement(Ae.Z, { checked: !!l[i], disabled: c, helpText: t, key: i, label: o, name: i, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        y = a.createElement(
                            g.Z,
                            { style: I.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                g.Z,
                                null,
                                Se.map(({ feature: e, helpText: t, label: o, name: i }) => (!e || n.isTrue(e) ? a.createElement(Ae.Z, { checked: !!l[i], disabled: c, helpText: t, key: i, label: o, name: i, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        h = a.createElement(g.Z, { style: I.ZP.setting }, a.createElement(Ae.Z, { checked: !!l.enable_bill_pay, disabled: c, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        E = a.createElement(g.Z, { style: I.ZP.setting }, a.createElement(Ae.Z, { checked: !!l.enable_card_payments, disabled: c, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(B.Z, { title: p }, a.createElement(g.Z, { style: I.ZP.settingsScreenContainer }, s ? a.createElement(te, { content: d, rightControl: o ? a.createElement(b.ZP, { link: i.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(te, { content: y, title: "Enhanced privacy" }), m ? a.createElement(te, { content: h, title: "Bill pay" }) : null, u ? a.createElement(te, { content: E, title: "Card payments" }) : null));
                },
                Be = { context: "PaymentsSettingsSecurityPrivacy" };
            function Le(e) {
                return a.createElement(C.H, { errorConfig: Be }, a.createElement(De, e));
            }
            const Ie = (0, T.R)(a.memo(Le), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
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
                    return a.createElement(m.Z, { perColumnScroll: !0, rootComponent: Re, rootDetailContent: ze }, a.createElement(r.Route, { component: ve, exact: !0, key: "money_settings_personal", path: i.iE.personal }), a.createElement(r.Route, { component: K, exact: !0, key: "money_settings_bank_accounts", path: i.iE.bankAccounts }), a.createElement(r.Route, { component: ce, exact: !0, key: "money_settings_limits", path: i.iE.limits }), c && a.createElement(r.Route, { component: be, exact: !0, key: "money_settings_monthly_statements", path: i.iE.monthlyStatements }), l && a.createElement(r.Route, { component: Ie, exact: !0, key: "money_settings_security_privacy", path: i.iE.securityPrivacy }));
                },
                He = a.memo(Oe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => k, default: () => A, styles: () => w });
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
                A = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => R });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                o = n(154003),
                i = n(731708),
                c = n(661810),
                s = n(568320),
                m = n(880428),
                u = n(357818),
                d = n(980407),
                p = n(736063),
                y = n(514639),
                h = n(293115),
                E = n(634455),
                g = n(477922),
                b = n(615954),
                _ = n(89319),
                f = n(448518),
                Z = n(655750),
                P = n(48646),
                k = n(150855),
                C = n(972758),
                v = n(749286),
                w = n(467734),
                A = n(464978),
                T = n(743080),
                x = n(727384);
            const S = { page: "money", section: "transaction-details" },
                D = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                B = "Amount",
                L = (e) => {
                    const { history: t } = e,
                        n = (0, l.useParams)().transactionId,
                        p = (0, T.jh)(),
                        { get_transaction_by_id: L } = (0, A.Z)(n || ""),
                        { __id: I, amount_local_micro: M, authorization_method: R, availability_date: z, base_amount_micro: O, challenge_id: H, created_at: X, currency: U, description: V, details: $, id: F, product_code: N, reason_code: Y, total_fees_micro: W, transaction_rail: G, transaction_status: K, transaction_type: q } = L ?? {},
                        Q = $?.receiver_results?.result,
                        j = $?.sender_results?.result,
                        J = $?.merchant_details?.merchant_results?.result,
                        ee = $?.payment_method,
                        te = $?.merchant_details,
                        ne = $?.reference_transaction_id,
                        ae = (0, w.Z)({ senderId: j?.rest_id }),
                        re = (0, x.p6)(z),
                        le = (0, T.JU)(),
                        oe = (0, x.y4)({ feeAmount: W, totalAmount: M, baseAmount: O }),
                        ie = N === m.x.Interest,
                        ce = ie && q === u.x.Deposit,
                        se = ie && q === u.x.Transfer,
                        me = q === u.x.Deposit,
                        ue = q === u.x.Withdraw,
                        de = N === m.x.Transfer && !(me || ue),
                        pe = ie || "User" !== Q?.__typename || "User" !== j?.__typename ? null : ae ? Q : j,
                        ye = (0, x.zx)({ referenceTransactionId: ne, transactionType: q }),
                        he = (0, x.qU)({ transactionType: q, productCode: N }),
                        Ee = me || ue || he ? (0, x.Ou)(ee) : null,
                        ge = pe?.core?.screen_name,
                        be = (0, x.Q1)({ status: K, transactionType: q, isViewerSender: ae, createdAt: X, productCode: N, description: V, reasonCode: Y }),
                        _e = j?.core?.screen_name,
                        fe = Q?.core?.screen_name,
                        Ze = me ? Ee : null,
                        Pe = ue ? Ee : null,
                        ke = (0, x.Bl)({ status: K }),
                        Ce = (0, x._T)({ status: K }),
                        ve = "/notifications" === t.location.state?.previousPath && !ce && (ke || Ce),
                        we = (0, x.EQ)({ productCode: N, transactionType: q }),
                        Ae = (0, x.zK)({ transactionType: q, productCode: N, merchantDetails: te, amountType: be.amountType }),
                        Te = Ae && Ae.location && (0, x.T7)(Ae.location),
                        xe = (0, x.wg)({ method: R, rail: G }),
                        Se = we || he,
                        De = (0, x.pQ)({ productCode: N, transactionType: q, account: Ee }),
                        Be = a.useMemo(() => (n ? a.createElement(_.Z, { reportedHandle: ge, transactionId: n }) : null), [n, ge]),
                        Le = (0, x.XT)({ status: K, transactionType: q, isViewerSender: ae }) || ve,
                        Ie = a.useCallback(() => {
                            D.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Me = Le ? a.createElement(r.Z, { style: p.footer }, F ? a.createElement(r.Z, { style: T.YP.actions }, a.createElement(f.Z, { amount: M, challengeId: H, currency: U, isViewerSender: ae, receiverScreenName: fe, recordId: I, senderScreenName: _e, status: K, transactionId: F, transactionType: q })) : null, ve ? a.createElement(o.ZP, { link: y.gp, size: le, style: T.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        h.nO,
                        { namespace: S },
                        a.createElement(
                            d.Z,
                            { bottomBar: Me, history: t, onBackClick: Ie, rightControl: Be, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: T.YP.content },
                                    De ? a.createElement(r.Z, { style: T.YP.gap }, a.createElement(g.KR, { size: "xJumbo", type: De.iconType, uri: De.uri }), a.createElement(C.Z, { size: "title4", title: De.title })) : pe ? a.createElement(v.Z, { avatarWithLink: !0, user: pe, usernameWithLink: !0 }) : Ae ? (J && "User" === J.__typename ? a.createElement(v.Z, { avatarWithLink: !0, user: J, usernameWithLink: !0 }) : a.createElement(r.Z, { style: T.YP.gap }, a.createElement(g.G7, { size: "xJumbo", type: Ae.type, uri: Ae.logo }), a.createElement(b.Z, { name: Ae.name, size: "title4" }))) : null,
                                    a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, be.createdAt),
                                    a.createElement(r.Z, { style: [T.YP.gap, T.YP.marginTop] }, M ? a.createElement(E.Z, { amount: M, currency: U, hasCompleted: Ce, type: be.amountType }) : null, de ? (be.description ? a.createElement(P.Z, { color: "gray700", note: be.description }) : null) : a.createElement(i.ZP, { color: "gray700" }, oe ? "Total" : B)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: T.ZP.rowSpaceBetween }, a.createElement(Z.Z, { description: be.status, title: "Status" }), re ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: T.YP.arrow }), a.createElement(Z.Z, { description: re, title: "Funds available on" })) : null),
                                    oe && W && "0" !== W && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: W, currency: U, size: "body", weight: "normal" }), title: "Fee" }),
                                    oe && O && "0" !== O && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: O, currency: U, size: "body", weight: "normal" }), title: B }),
                                    Ze && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: Ze, testId: "source" }), title: "Source" }),
                                    Pe && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: Pe, testId: "destination" }), title: "Destination" }),
                                    ye ? a.createElement(Z.Z, { description: a.createElement(i.ZP, { color: "text", link: ye }, ne), title: "Original transaction" }) : null,
                                    se && X ? a.createElement(Z.Z, { description: (0, x.nV)(X), title: "Period" }) : null,
                                    Ae && Ee && Ee.issuedCardAccountName ? a.createElement(Z.Z, { description: a.createElement(k.Z, { account: Ee, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    xe ? a.createElement(Z.Z, { description: xe, title: "Mode" }) : null,
                                    Te ? a.createElement(Z.Z, { description: Te, title: "Location" }) : null,
                                    a.createElement(Z.Z, { description: F, title: "Transaction ID" }),
                                    Se && V && a.createElement(Z.Z, { description: V, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                I = { context: "TRANSACTION_DETAIL" },
                M = (e) => a.createElement(p.H, { errorConfig: I }, a.createElement(L, e)),
                R = a.memo(M);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-be74d874.00718b6a.js.map
