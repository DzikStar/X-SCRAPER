"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-be74d874"],
    {
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                i = n(43429),
                l = n(747995);
            const o = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: i.Rz.credit })),
                c = r.memo(o);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                i = n(514639),
                l = n(445664),
                o = n(615027);
            const c = { context: "PaymentsRouterSwitch" },
                s = { type: "CustomRetry", content: () => a.createElement(o.Z, { to: i.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, l.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(o.Z, { to: t });
                },
                u = (e) => a.createElement(r.N, { errorConfig: c, fallback: s }, a.createElement(m, e)),
                d = a.memo(u);
        },
        238078: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Ve });
            n(136728);
            var a = n(202784),
                r = n(107267),
                i = n(222718),
                l = n(952793),
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
            var g = n(325686),
                b = n(731708),
                f = n(167630),
                Z = n(190286),
                _ = n(392237),
                P = n(436117),
                C = n(922281),
                k = n(736063),
                v = n(782642),
                S = n(445664),
                w = n(312771),
                A = n(696445),
                x = n(392046),
                D = n(600568),
                T = n(295747),
                I = n(221554),
                B = n(226332),
                L = n(743080),
                M = n(727384),
                R = n(195816),
                z = (n(585488), n(351743)),
                O = n.n(z);
            const V = R.Z,
                X = () => {
                    const [e, t] = O()(V);
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
                F = "Link a bank account",
                H = "Link a card",
                U = { pathname: o.ac, state: { redirectPath: o.iE.bankAccounts } },
                Y = { pathname: o.UA, state: { redirectPath: o.iE.bankAccounts } },
                $ = () => {
                    const { paymentMethods: e, refetchStatus: t } = (0, B.Z)(),
                        { permissions: n } = (0, S.Z)({ fetchKey: "Payments" }),
                        i = (0, r.useHistory)(),
                        [l, c] = a.useState(null),
                        [s, m] = a.useState(null),
                        u = (0, v.p)(),
                        [d, p] = X(),
                        y = n?.includes(P.d.DeletePaymentMethod),
                        h = n?.includes(P.d.CreatePaymentMethod),
                        E = a.useCallback(
                            (e) => () => {
                                m(null), i.push(o.VN, { redirectPath: o.iE.bankAccounts, paymentMethodId: e });
                            },
                            [i],
                        ),
                        _ = a.useCallback(
                            (e) => () => {
                                m(e);
                            },
                            [m],
                        ),
                        k = a.useCallback(
                            (e) => () => {
                                c(e), m(null);
                            },
                            [c],
                        ),
                        A = a.useCallback(() => {
                            m(null);
                        }, []),
                        R = a.useCallback(() => {
                            l &&
                                d({ paymentMethodId: l })
                                    .then(() => {
                                        c(null), u({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        u({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [u, l, d]),
                        z = e?.filter((e) => "XPaymentsBankAccountPaymentMethod" === e?.core?.details?.__typename) || [],
                        O = e?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [],
                        V = ({ accounts: e, sectionTitle: t, type: n }) =>
                            a.createElement(
                                g.Z,
                                { style: W.accountSection },
                                a.createElement(b.ZP, { color: "gray700", size: "body", weight: "medium" }, t),
                                (e || []).map((e) => {
                                    const t = (0, M.Ou)(e),
                                        n = t?.id;
                                    return t && n ? a.createElement(x.Z, { account: t, handleExpand: _(t), key: n }) : null;
                                }),
                                a.createElement(T.Z, { disabled: !h, label: "XPaymentsBankAccountPaymentMethod" === n ? F : H, link: "XPaymentsBankAccountPaymentMethod" === n ? U : Y, name: "XPaymentsBankAccountPaymentMethod" === n ? F : H, variant: "row" }),
                            ),
                        $ = a.createElement(g.Z, { style: W.accountSection }, V({ accounts: z, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts" }), V({ accounts: O, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards" }));
                    return a.createElement(I.Z, { title: "Linked accounts" }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, t === w.iF.LOADING ? a.createElement(f.Z, null) : a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, $), s ? a.createElement(D.Z, { account: s, onDone: A, onRemove: y && s.id ? k(s.id) : void 0, onVerify: s.id && s?.status === C.D.LoginRequired && h ? E(s.id) : void 0 }) : null, l ? a.createElement(Z.Z, { confirmButtonDisabled: p, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => c(null), onConfirm: R, text: "Your account will be removed from X" }) : null));
                },
                N = { context: "PaymentsSettingsExternalAccounts" },
                W = _.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function K(e) {
                return a.createElement(k.H, { errorConfig: N }, a.createElement($, e));
            }
            const G = (0, A.R)(a.memo(K), { permissionsAllOf: [P.d.GetAccounts, P.d.GetPaymentMethod], permissionsAnyOf: null });
            var Q = n(443781),
                j = n(889738),
                J = n(844685),
                q = n(165822);
            const ee = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: i }) => {
                    const l = (0, L.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(J.Z, { rightControl: n, style: L.ZP.settingHeader, subtext: r, text: i }), a.createElement(q.Z, { "aria-label": i, containerStyle: l.tile, stackLayoutUpperStyle: t ?? L.ZP.upper, upper: e, withInteractiveStyling: !1 }));
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
                    const { featureSwitches: t } = (0, Q.QZ)(),
                        { limits: n } = (0, j.Z)(),
                        r = ae.map((e) => {
                            const r = e.content.reduce(
                                    (e, t) => {
                                        const a = n?.find((e) => e.limit_type === t.limit_type),
                                            r = a?.amount?.local_micro;
                                        "-1" === r && (e.isUnlimited = !0);
                                        const i = parseFloat(r),
                                            l = i >= 0 ? (0, M.p2)({ amount: i, currency: a?.amount?.currency }) : null,
                                            o = a?.used?.local_micro ? (0, M.vw)({ amount: a?.used?.local_micro, currency: a?.used?.currency }) : null;
                                        return l && e.limits.push({ label: t.amountLabel({ formattedAmount: l }), usage: o ? ne({ usedAmount: o }) : null }), e;
                                    },
                                    { limits: [], isUnlimited: !1 },
                                ),
                                i = a.createElement(
                                    g.Z,
                                    { style: L.ZP.setting },
                                    a.createElement(
                                        g.Z,
                                        { style: ie.content },
                                        r.limits.length > 0
                                            ? a.createElement(
                                                  g.Z,
                                                  { style: ie.limit },
                                                  r.limits.map(({ label: e, usage: t }, n) => a.createElement(b.ZP, { color: "gray700", key: n }, e, t ? a.createElement(b.ZP, { color: "gray700", style: ie.usage }, t) : null)),
                                              )
                                            : r.isUnlimited
                                              ? a.createElement(b.ZP, { color: "gray700" }, "Unlimited")
                                              : null,
                                    ),
                                );
                            return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(g.Z, { key: e.key, style: ie.limitRoot, testID: e.key }, a.createElement(te, { content: i, title: e.title })) : null;
                        });
                    return a.createElement(I.Z, { title: h }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, r));
                },
                ie = _.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, usage: { marginStart: e.spaces.space4 } })),
                le = { context: "PaymentsSettingsLimits" };
            function oe(e) {
                return a.createElement(k.H, { errorConfig: le }, a.createElement(re, e));
            }
            const ce = (0, A.R)(a.memo(oe), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null });
            var se = n(779610),
                me = n(457311),
                ue = n(191796),
                de = n(463963),
                pe = n(698478),
                ye = n(348340);
            const he = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, ye.Z)({ type: de.E.DocumentTypeMonthlyStatement }),
                        [i, l] = a.useState(),
                        o = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, pe.x5)(t) ? (l(a), n()?.then((0, ye.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        c = a.useCallback((e) => () => (i === e && r === w.ZP.LOADING ? a.createElement(f.Z, { size: "small" }) : a.createElement(ue.default, { style: L.ZP.centeredIcon })), [i, r]);
                    return a.createElement(
                        I.Z,
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
                                              const i = (0, M.Qu)(n),
                                                  l = i.getMonth(),
                                                  s = `${t}-${l}`;
                                              return a.createElement(se.Z, { key: s, label: i.toLocaleString("default", { month: "long" }), onPress: o(e, s), renderRightContent: c(s), styleOverride: L.ZP.cursor, withoutArrow: !0 });
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
                return a.createElement(k.H, { errorConfig: Ee }, a.createElement(he, e));
            }
            const be = (0, A.R)(a.memo(ge), { permissionsAllOf: [P.d.GetDocuments], permissionsAnyOf: null });
            var fe = n(154003),
                Ze = n(160144);
            const _e = { pathname: o.AU.tier3.verifyIdentityPath, state: { redirectPath: o.iE.personal, closePath: o.iE.personal } },
                Pe = (e) => {
                    const { fetchCount: t, permissions: n, roles: i } = (0, S.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        c = n?.includes(P.d.VerifyIdentity),
                        s = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case Ze.T.edit:
                                        if (!i?.includes("KycVerified")) return void l.push(o.AU.tier2.verifyIdentityPath, { redirectPath: o.iE.personal, closePath: o.iE.personal, requestedField: t });
                                        l.push(o.f0, { field: t });
                                        break;
                                    case Ze.T.failure:
                                        l.replace(o.gp);
                                }
                            },
                            [l, i],
                        ),
                        m = a.useMemo(() => i?.includes("KycVerified"), [i]),
                        u = a.useMemo(() => {
                            const e = i?.includes("KycDocumentsVerified");
                            return a.createElement(g.Z, { style: [L.ZP.setting, Se.idVerificationContent] }, a.createElement(b.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(fe.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(fe.ZP, { disabled: !c, link: c ? _e : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [c, i]);
                    return a.createElement(I.Z, { title: y }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, a.createElement(te, { content: a.createElement(Ze.Z, { eventCallback: s, key: t, linkType: o.P_.personal }), contentStyle: Se.infoRoot, title: "Basic information" }), m && a.createElement(te, { content: u, title: "Identity information" })));
                },
                Ce = { context: "PaymentsSettingsPersonal" };
            function ke(e) {
                return a.createElement(k.H, { errorConfig: Ce }, a.createElement(Pe, e));
            }
            const ve = (0, A.R)(a.memo(ke), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                Se = _.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var we = n(954110),
                Ae = n(24568);
            const xe = ({ handlePreferencesChange: e, permissions: t, preference: n, preferenceData: r, rightControl: i, testID: l }) => {
                    const o = !(0, M.aY)(t),
                        c = a.useMemo(() => (r && r.items ? r.items : []), [r]),
                        s = a.useMemo(
                            () =>
                                a.createElement(
                                    g.Z,
                                    { style: L.ZP.setting, testID: l },
                                    a.createElement(
                                        g.Z,
                                        null,
                                        c.filter(({ value: e }) => "XPaymentsCustomerPreferencesItemBoolValue" === e.__typename).map(({ description: t, item_id: r, title: i, value: l }) => a.createElement(we.Z, { checked: Boolean(l.value), disabled: o, helpText: t || void 0, key: i, label: i, name: r, onChange: (t, a) => e({ itemId: t, preference: n, type: "XPaymentsCustomerPreferencesItemBoolValue", value: a }), withBackground: !1, withPaddingHorizontal: !1 })),
                                    ),
                                ),
                            [e, o, c, n, l],
                        );
                    return c.length <= 0 ? a.createElement(a.Fragment, null) : a.createElement(te, { content: s, rightControl: i, subtext: r?.description || void 0, title: r?.title || "" });
                },
                De = a.memo(xe),
                Te = (e) => {
                    const { permissions: t } = (0, S.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, Q.QZ)(),
                        { handlePreferencesChange: r, preferences: i } = (0, Ae.Z)(),
                        l = t?.includes(P.d.UpdatePin),
                        c = !(0, M.aY)(t),
                        s = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        u = n.isTrue("payments_card_spend_enabled"),
                        d = a.useMemo(() => (null != i?.enable_bill_pay ? a.createElement(g.Z, { style: L.ZP.setting }, a.createElement(we.Z, { checked: Boolean(i.enable_bill_pay), disabled: c, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: (e, t) => r({ itemId: e, preference: "enable_bill_pay", type: "XPaymentsCustomerPreferencesItemBoolValue", value: t }), withBackground: !1, withPaddingHorizontal: !1 })) : null), [r, c, i]),
                        y = a.useMemo(() => (null != i?.enable_card_payments ? a.createElement(g.Z, { style: L.ZP.setting }, a.createElement(we.Z, { checked: Boolean(i.enable_card_payments), disabled: c, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: (e, t) => r({ itemId: e, preference: "enable_card_payments", type: "XPaymentsCustomerPreferencesItemBoolValue", value: t }), withBackground: !1, withPaddingHorizontal: !1 })) : null), [r, c, i]);
                    return a.createElement(I.Z, { title: p }, a.createElement(g.Z, { style: L.ZP.settingsScreenContainer }, s && a.createElement(De, { handlePreferencesChange: r, permissions: t, preference: "security", preferenceData: i?.security, rightControl: l ? a.createElement(b.ZP, { link: o.Fm }, "Change PIN") : null, testID: "pin-settings" }), a.createElement(De, { handlePreferencesChange: r, permissions: t, preference: "privacy", preferenceData: i?.privacy, testID: "privacy-settings" }), m && d && a.createElement(te, { content: d, title: "Bill pay" }), u && y && a.createElement(te, { content: y, title: "Card payments" })));
                },
                Ie = { context: "PaymentsSettingsSecurityPrivacy" };
            function Be(e) {
                return a.createElement(k.H, { errorConfig: Ie }, a.createElement(Te, e));
            }
            const Le = (0, A.R)(a.memo(Be), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                Me = { page: "money", section: "settings" },
                Re = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        s = (0, l.hC)("payments_pin_enabled"),
                        m = (0, l.hC)("payments_account_details_enabled"),
                        g = s || m,
                        b = (0, l.hC)("payments_settings_documents_enabled"),
                        f = a.useCallback(() => {
                            t.push(o.gp);
                        }, [t]),
                        Z = a.useMemo(() => [{ path: o.iE.personal, label: y }, { path: o.iE.bankAccounts, label: "Linked accounts" }, { path: o.iE.limits, label: h }, g ? { path: o.iE.securityPrivacy, label: p } : null, b ? { path: o.iE.monthlyStatements, label: E } : null], [g, b]);
                    return a.createElement(
                        c.nO,
                        { namespace: Me },
                        a.createElement(
                            i.Z,
                            { onBackClick: f, screenType: "root", showBackButtonOnRoot: !0, title: "Money Settings" },
                            a.createElement(
                                d.Z,
                                null,
                                Z.map((e, t) => e && a.createElement(u.Z, { isActive: n.pathname === e.path, isFirst: 0 === t, isLast: t === Z.length - 1, key: e.path, label: e.label, link: e.path })),
                            ),
                        ),
                    );
                },
                ze = () => a.createElement(s.Z, { to: o.iE.personal }),
                Oe = (e) => {
                    const t = (0, l.hC)("payments_pin_enabled"),
                        n = (0, l.hC)("payments_account_details_enabled"),
                        i = t || n,
                        c = (0, l.hC)("payments_settings_documents_enabled");
                    return a.createElement(m.Z, { perColumnScroll: !0, rootComponent: Re, rootDetailContent: ze }, a.createElement(r.Route, { component: ve, exact: !0, key: "money_settings_personal", path: o.iE.personal }), a.createElement(r.Route, { component: G, exact: !0, key: "money_settings_bank_accounts", path: o.iE.bankAccounts }), a.createElement(r.Route, { component: ce, exact: !0, key: "money_settings_limits", path: o.iE.limits }), c && a.createElement(r.Route, { component: be, exact: !0, key: "money_settings_monthly_statements", path: o.iE.monthlyStatements }), i && a.createElement(r.Route, { component: Le, exact: !0, key: "money_settings_security_privacy", path: o.iE.securityPrivacy }));
                },
                Ve = a.memo(Oe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => C, default: () => w, styles: () => S });
            var a = n(202784),
                r = n(325686),
                i = n(530525),
                l = n(439592),
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
                g = n(978167),
                b = n(934265),
                f = n(743080);
            const Z = { page: "money", section: "setup-direct-deposit" },
                _ = "Set up Direct Deposit",
                P = `${_} - Account details`,
                C = (e) => {
                    const t = (0, f.jh)(),
                        { interest: n } = (0, b.Z)(),
                        { roles: c } = (0, h.Z)({ fetchKey: "Payments" }),
                        s = c?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = s && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: S.headerContainer }, a.createElement(r.Z, { style: S.iconContainer }, a.createElement(i.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: l.Z.SQUARE, image: u })), a.createElement(r.Z, { style: S.titleContainer }, a.createElement(o.ZP, { color: "text", size: "title1", weight: "bold" }, _), a.createElement(o.ZP, { color: "gray800", size: "body", weight: "normal" }, "Provide the details below to your employer or use them in your HR/payroll software to set up direct deposit."))), a.createElement(r.Z, { style: S.accountDetailsContainers }, a.createElement(g.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: S.premiumBannerWrapper }, a.createElement(r.Z, { style: S.premiumBannerBackground }), a.createElement(r.Z, { style: S.premiumBannerContent }, a.createElement(o.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(o.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                k = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, f.jh)(),
                        i = a.useCallback(() => t.goBack(), [t]),
                        l = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        s = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { onClick: l, type: "primaryFilled" }, "Done"), a.createElement(o.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Payments LLC is a financial technology company, and not a bank. Funds are held at Cross River Bank, Member FDIC, and are eligible for pass through FDIC insurance if certain conditions are satisfied."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: s, history: t, onBackClick: i, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: Z }, a.createElement(y.H, { errorConfig: k }, a.createElement(C, e))));
                },
                S = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                w = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => X });
            n(136728);
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                l = n(154003),
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
                g = n(514639),
                b = n(293115),
                f = n(634455),
                Z = n(477922),
                _ = n(615954),
                P = n(89319),
                C = n(448518),
                k = n(655750),
                v = n(48646),
                S = n(150855),
                w = n(972758),
                A = n(749286),
                x = n(236086),
                D = n(467734),
                T = n(464978),
                I = n(743080),
                B = n(727384);
            const L = { page: "money", section: "transaction-details" },
                M = [g.uv, g.r0, g.IN, g.HM, g.Jv],
                R = "Amount",
                z = (e) => {
                    const { history: t } = e,
                        n = (0, i.useParams)().transactionId,
                        E = (0, I.jh)(),
                        { get_transaction_by_id: z } = (0, T.Z)(n || ""),
                        { __id: O, amount_local_micro: V, authorization_method: X, availability_date: F, base_amount_micro: H, challenge_id: U, created_at: Y, currency: $, description: N, details: W, id: K, product_code: G, reason_code: Q, total_fees_micro: j, transaction_rail: J, transaction_status: q, transaction_type: ee } = z ?? {},
                        te = W?.receiver_results?.result,
                        ne = W?.sender_results?.result,
                        ae = W?.merchant_details?.merchant_results?.result,
                        re = W?.payment_method,
                        ie = W?.merchant_details,
                        le = W?.reference_transaction_id,
                        oe = (0, D.Z)({ senderId: ne?.rest_id }),
                        ce = (0, B.p6)(F),
                        se = (0, I.JU)(),
                        me = (0, B.y4)({ feeAmount: j, totalAmount: V, baseAmount: H }),
                        ue = G === d.x.Interest,
                        de = ue && ee === p.x.Deposit,
                        pe = ue && ee === p.x.Transfer,
                        ye = ee === p.x.Deposit,
                        he = ee === p.x.Withdraw,
                        Ee = G === d.x.Transfer && !(ye || he),
                        ge = ue || "User" !== te?.__typename || "User" !== ne?.__typename ? null : oe ? te : ne,
                        be = (0, B.zx)({ referenceTransactionId: le, transactionType: ee }),
                        fe = (0, B.qU)({ transactionType: ee, productCode: G }),
                        Ze = ye || he || fe ? (0, B.Ou)(re) : null,
                        _e = ge?.core?.screen_name,
                        Pe = (0, B.Q1)({ status: q, transactionType: ee, isViewerSender: oe, createdAt: Y, productCode: G, description: N, reasonCode: Q }),
                        Ce = ne?.core?.screen_name,
                        ke = te?.core?.screen_name,
                        ve = ye ? Ze : null,
                        Se = he ? Ze : null,
                        we = (0, B.Bl)({ status: q }),
                        Ae = (0, B._T)({ status: q }),
                        xe = "/notifications" === t.location.state?.previousPath && !de && (we || Ae),
                        De = (0, B.EQ)({ productCode: G, transactionType: ee }),
                        Te = (0, B.zK)({ transactionType: ee, productCode: G, merchantDetails: ie, amountType: Pe.amountType }),
                        Ie = Te && Te.location && (0, B.T7)(Te.location),
                        Be = (0, B.wg)({ method: X, rail: J }),
                        Le = De || fe,
                        Me = (0, B.pQ)({ productCode: G, transactionType: ee, account: Ze }),
                        Re = a.useMemo(() => (n ? a.createElement(P.Z, { reportedHandle: _e, transactionId: n }) : null), [n, _e]),
                        ze = Ze && Ze.id && Q === y.P.RejectedCardInactive && Ze.status === u.D.Inactive && Ze.issuedCardType === m.W.IssuedCardTypePhysical,
                        Oe = (0, B.XT)({ status: q, transactionType: ee, isViewerSender: oe }) || xe || ze,
                        Ve = a.useCallback(() => {
                            M.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(g.gp) : t.goBack();
                        }, [t]),
                        Xe = Oe ? a.createElement(r.Z, { style: E.footer }, K ? a.createElement(r.Z, { style: I.YP.actions }, Ze?.id && ze && a.createElement(x.Z, { cardId: Ze.id, fromFailedTransaction: !0 }), a.createElement(C.Z, { amount: V, challengeId: U, currency: $, isViewerSender: oe, receiverScreenName: ke, recordId: O, senderScreenName: Ce, status: q, transactionId: K, transactionType: ee })) : null, xe ? a.createElement(l.ZP, { link: g.gp, size: se, style: I.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        b.nO,
                        { namespace: L },
                        a.createElement(
                            h.Z,
                            { bottomBar: Xe, history: t, onBackClick: Ve, rightControl: Re, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: E.container },
                                a.createElement(
                                    r.Z,
                                    { style: I.YP.content },
                                    Me ? a.createElement(r.Z, { style: I.YP.gap }, a.createElement(Z.KR, { size: "xJumbo", type: Me.iconType, uri: Me.uri }), a.createElement(w.Z, { size: "title4", title: Me.title })) : ge ? a.createElement(A.Z, { avatarWithLink: !0, user: ge, usernameWithLink: !0 }) : Te ? (ae && "User" === ae.__typename ? a.createElement(A.Z, { avatarWithLink: !0, user: ae, usernameWithLink: !0 }) : a.createElement(r.Z, { style: I.YP.gap }, a.createElement(Z.G7, { size: "xJumbo", type: Te.type, uri: Te.logo }), a.createElement(_.Z, { name: Te.name, size: "title4" }))) : null,
                                    a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, Pe.createdAt),
                                    a.createElement(r.Z, { style: [I.YP.gap, I.YP.marginTop] }, V ? a.createElement(f.Z, { amount: V, currency: $, hasCompleted: Ae, hasFailed: we, type: Pe.amountType }) : null, Ee ? (Pe.description ? a.createElement(v.Z, { color: "gray700", note: Pe.description }) : null) : a.createElement(o.ZP, { color: "gray700" }, me ? "Total" : R)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: I.ZP.rowSpaceBetween }, a.createElement(k.Z, { description: Pe.status, title: "Status" }), ce ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: I.YP.arrow }), a.createElement(k.Z, { description: ce, title: "Funds available on" })) : null),
                                    me && j && "0" !== j && a.createElement(k.Z, { description: a.createElement(f.Z, { amount: j, currency: $, size: "body", weight: "normal" }), title: "Fee" }),
                                    me && H && "0" !== H && a.createElement(k.Z, { description: a.createElement(f.Z, { amount: H, currency: $, size: "body", weight: "normal" }), title: R }),
                                    ve && a.createElement(k.Z, { description: a.createElement(S.Z, { account: ve, testId: "source" }), title: "Source" }),
                                    Se && a.createElement(k.Z, { description: a.createElement(S.Z, { account: Se, testId: "destination" }), title: "Destination" }),
                                    be ? a.createElement(k.Z, { description: a.createElement(o.ZP, { color: "text", link: be }, le), title: "Original transaction" }) : null,
                                    pe && Y ? a.createElement(k.Z, { description: (0, B.nV)(Y), title: "Period" }) : null,
                                    Te && Ze && Ze.issuedCardAccountName ? a.createElement(k.Z, { description: a.createElement(S.Z, { account: Ze, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Be ? a.createElement(k.Z, { description: Be, title: "Mode" }) : null,
                                    Ie ? a.createElement(k.Z, { description: Ie, title: "Location" }) : null,
                                    a.createElement(k.Z, { description: K, title: "Transaction ID" }),
                                    Le && N && a.createElement(k.Z, { description: N, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                O = { context: "TRANSACTION_DETAIL" },
                V = (e) => a.createElement(E.H, { errorConfig: O }, a.createElement(z, e)),
                X = a.memo(V);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                i = n(43429),
                l = n(554337);
            const o = (e) => r.createElement(l.Z, (0, a.Z)({}, e, { transferDirection: i.Rz.debit })),
                c = r.memo(o);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                r = n(107267),
                i = n(736063),
                l = n(514639),
                o = n(445664),
                c = n(827309),
                s = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.Z)(),
                        { isActive: i } = (0, o.Z)({ fetchKey: "Payments" }),
                        d = n && l.g7[n],
                        p = a.useCallback(() => {
                            t.replace(i ? l.gp : "/");
                        }, [t, i]),
                        { actionLabel: y, defaultSubtext: h, subtext: E } = i ? u.active : u.nonActive;
                    return a.createElement(c.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? E({ region: d }) : h, supportUrl: l.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(i.H, { errorConfig: p }, a.createElement(d, e)),
                h = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-be74d874.4456f1da.js.map
