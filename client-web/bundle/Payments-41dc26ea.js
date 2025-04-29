"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-41dc26ea"],
    {
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                i = n(43429),
                l = n(207162);
            const o = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: i.Rz.debit })),
                c = r.memo(o);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                i = n(736063),
                l = n(514639),
                o = n(725516),
                c = n(160144);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, o.z)(),
                        i = t.location?.state?.redirectPath,
                        s = t.location?.state?.redirectState,
                        m = t.location?.state?.field,
                        u = a.useMemo(() => {
                            switch (m) {
                                case "name":
                                    return l.P_.updateName;
                                case "address":
                                    return l.P_.updateAddress;
                                default:
                                    return;
                            }
                        }, [m]);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "personal-update", action: "impression" });
                        }, [n]),
                        a.createElement(c.Z, { additionalParams: m ? [{ key: "what", value: m }] : void 0, linkType: u, redirectPath: i, redirectState: s })
                    );
                },
                m = { context: "PersonalUpdate" };
            function u(e) {
                return a.createElement(i.H, { errorConfig: m }, a.createElement(s, e));
            }
            const d = a.memo(u);
        },
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                i = n(43429),
                l = n(207162);
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
        826908: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ve });
            n(136728);
            var a = n(202784),
                r = n(107267),
                i = n(108362),
                l = n(252021),
                o = n(507651),
                c = n(952793),
                s = n(514639),
                m = n(293115),
                u = n(743080);
            var d = n(325686),
                p = n(154003),
                y = n(731708),
                h = n(167630),
                E = n(190286),
                f = n(379327),
                g = n(436117),
                b = n(922281),
                _ = n(736063),
                k = n(782642),
                Z = n(445664),
                P = n(312771),
                v = n(696445),
                w = n(392046),
                C = n(226332),
                T = n(727384),
                A = n(844685),
                S = n(165822);
            const x = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: i }) => {
                    const l = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(A.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: i }), a.createElement(S.Z, { "aria-label": i, containerStyle: l.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                D = a.memo(x);
            var L = n(195816),
                I = (n(585488), n(351743)),
                M = n.n(I);
            const R = L.Z,
                O = () => {
                    const [e, t] = M()(R);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            t ? a(t) : n();
                                        },
                                        updater: T.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                F = "You cannot link an account at this time.",
                H = { pathname: s.ac, state: { redirectPath: s.iE.bankAccounts } },
                B = { pathname: s.UA, state: { redirectPath: s.iE.bankAccounts } },
                z = (e) => {
                    const { paymentMethods: t, refetchStatus: n } = (0, C.Z)(),
                        { permissions: i } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        o = (0, c.hC)("payments_cards_as_payment_method_enabled"),
                        [m, _] = a.useState(null),
                        v = (0, k.p)(),
                        [A, S] = O(),
                        x = i?.includes(g.d.DeletePaymentMethod),
                        L = i?.includes(g.d.CreatePaymentMethod),
                        I = a.useCallback(
                            (e) => () => {
                                l.push(s.VN, { redirectPath: s.iE.bankAccounts, paymentMethodId: e });
                            },
                            [l],
                        ),
                        M = a.useCallback(
                            (e) => () => {
                                _(e);
                            },
                            [_],
                        ),
                        R = a.useCallback(() => {
                            m &&
                                A({ paymentMethodId: m })
                                    .then(() => {
                                        _(null), v({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        v({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [v, m, A]),
                        z = a.createElement(
                            d.Z,
                            { style: u.ZP.setting },
                            t?.map((e) => {
                                const t = (0, T.Ou)(e),
                                    n = t?.id;
                                return t && n ? a.createElement(w.Z, { account: t, handleRemove: x ? M(n) : void 0, key: n, onClick: e?.core?.details?.status === b.D.LoginRequired && L ? I(n) : void 0 }) : null;
                            }),
                            a.createElement(p.ZP, { disabled: !L, icon: a.createElement(f.default, null), link: L ? H : void 0 }, a.createElement(y.ZP, { hoverLabel: L ? void 0 : { label: F } }, "Add bank account")),
                            o ? a.createElement(p.ZP, { disabled: !L, icon: a.createElement(f.default, null), link: L ? B : void 0 }, a.createElement(y.ZP, { hoverLabel: L ? void 0 : { label: F } }, "Add card")) : null,
                        );
                    return a.createElement(a.Fragment, null, n === P.iF.LOADING ? a.createElement(h.Z, null) : a.createElement(D, { content: z, title: "Linked accounts" }), m ? a.createElement(E.Z, { confirmButtonDisabled: S, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => _(null), onConfirm: R, text: "Your account will be removed from X" }) : null);
                },
                N = { context: "PaymentsSettingsExternalAccounts" };
            function U(e) {
                return a.createElement(_.H, { errorConfig: N }, a.createElement(z, e));
            }
            const V = (0, v.R)(a.memo(U), { permissionsAllOf: [g.d.GetAccounts, g.d.GetPaymentMethod], permissionsAnyOf: null });
            var q = n(392237),
                $ = n(443781),
                W = n(889738);
            const X = [
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
                K = (e) => {
                    const { featureSwitches: t } = (0, $.QZ)(),
                        { limits: n } = (0, W.Z)();
                    return X.map((e) => {
                        const r = e.content.reduce(
                                (e, t) => {
                                    const a = n?.find((e) => e.limit_type === t.limit_type),
                                        r = a?.amount?.local_micro;
                                    "-1" === r && (e.isUnlimited = !0);
                                    const i = parseFloat(r),
                                        l = i >= 0 ? (0, T.p2)({ amount: i, currency: a?.amount?.currency }) : null;
                                    return l && e.limits.push(t.amountLabel({ formattedAmount: l })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            i = a.createElement(
                                d.Z,
                                { style: u.ZP.setting },
                                a.createElement(
                                    d.Z,
                                    { style: Y.content },
                                    r.limits.length > 0
                                        ? a.createElement(
                                              d.Z,
                                              { style: Y.limit },
                                              r.limits.map((e) => a.createElement(y.ZP, { color: "gray700", key: e }, e)),
                                          )
                                        : r.isUnlimited
                                          ? a.createElement(y.ZP, { color: "gray700" }, "Unlimited")
                                          : null,
                                ),
                            );
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: Y.limitRoot, testID: e.key }, a.createElement(D, { content: i, title: e.title })) : null;
                    });
                },
                Y = q.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
                G = { context: "PaymentsSettingsLimits" };
            function Q(e) {
                return a.createElement(_.H, { errorConfig: G }, a.createElement(K, e));
            }
            const j = (0, v.R)(a.memo(Q), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null });
            var J = n(779610),
                ee = n(457311),
                te = n(463963),
                ne = n(348340);
            const ae = (e) => {
                    const { documents: t } = (0, ne.Z)({ type: te.E.DocumentTypeMonthlyStatement }),
                        n = t?.reduce((e, t) => {
                            const n = `${(0, T.Qu)(t.start_date).getFullYear()}`,
                                a = e[n];
                            return a ? a.push(t) : (e[n] = [t]), e;
                        }, {});
                    return a.createElement(
                        a.Fragment,
                        null,
                        n
                            ? Object.entries(n).map(([e, t]) => {
                                  const n = a.createElement(
                                      d.Z,
                                      { style: u.ZP.setting },
                                      t.map(({ start_date: e, url: t }) => {
                                          if (!t) return;
                                          const n = (0, T.Qu)(e),
                                              r = n.getMonth();
                                          return a.createElement(J.Z, { key: r, label: n.toLocaleString("default", { month: "long" }), link: { external: !0, pathname: t, openInSameFrame: !1 } });
                                      }),
                                  );
                                  return a.createElement(D, { content: n, key: e, title: e });
                              })
                            : a.createElement(ee.Z, { message: "You do not have any monthly statements yet." }),
                    );
                },
                re = { context: "PaymentsSettingsMonthlyStatements" };
            function ie(e) {
                return a.createElement(_.H, { errorConfig: re }, a.createElement(ae, e));
            }
            const le = (0, v.R)(a.memo(ie), { permissionsAllOf: [g.d.GetDocuments], permissionsAnyOf: null });
            var oe = n(160144);
            const ce = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                se = (e) => {
                    const { fetchCount: t, permissions: n, roles: i } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        o = n?.includes(g.d.VerifyIdentity),
                        c = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case oe.T.edit:
                                        if (!i?.includes("KycVerified")) return void l.push(s.AU.tier2.verifyIdentityPath, { redirectPath: s.iE.personal, closePath: s.iE.personal, requestedField: t });
                                        l.push(s.f0, { field: t });
                                        break;
                                    case oe.T.failure:
                                        l.replace(s.gp);
                                }
                            },
                            [l, i],
                        ),
                        m = a.useMemo(() => i?.includes("KycVerified"), [i]),
                        h = a.useMemo(() => {
                            const e = i?.includes("KycDocumentsVerified");
                            return a.createElement(d.Z, { style: [u.ZP.setting, pe.idVerificationContent] }, a.createElement(y.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(p.ZP, { disabled: !o, link: o ? ce : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [o, i]);
                    return a.createElement(a.Fragment, null, a.createElement(D, { content: a.createElement(oe.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: pe.infoRoot, title: "Basic information" }), m && a.createElement(D, { content: h, title: "Identity information" }));
                },
                me = { context: "PaymentsSettingsPersonal" };
            function ue(e) {
                return a.createElement(_.H, { errorConfig: me }, a.createElement(se, e));
            }
            const de = (0, v.R)(a.memo(ue), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                pe = q.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 * e.scaleMultiplier }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var ye = n(954110),
                he = n(24568);
            const Ee = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                fe = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                ge = (e) => {
                    const { permissions: t } = (0, Z.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, $.QZ)(),
                        { handlePreferencesChange: r, preferences: i } = (0, he.Z)(),
                        l = t?.includes(g.d.UpdatePin),
                        o = !(0, T.aY)(t),
                        c = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        p = n.isTrue("payments_card_spend_enabled"),
                        h = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                Ee.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!i[c], disabled: o, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        E = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                fe.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!i[c], disabled: o, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        f = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!i.enable_bill_pay, disabled: o, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        b = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!i.enable_card_payments, disabled: o, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, c ? a.createElement(D, { content: h, rightControl: l ? a.createElement(y.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to enter your PIN to proceed.", title: "PIN required" }) : null, a.createElement(D, { content: E, title: "Enhanced privacy" }), m ? a.createElement(D, { content: f, title: "Bill pay" }) : null, p ? a.createElement(D, { content: b, title: "Card payments" }) : null);
                },
                be = { context: "PaymentsSettingsSecurityPrivacy" };
            function _e(e) {
                return a.createElement(_.H, { errorConfig: be }, a.createElement(ge, e));
            }
            const ke = (0, v.R)(a.memo(_e), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                Ze = { page: "money", section: "settings" },
                Pe = (e) => {
                    const { history: t } = e,
                        n = (0, u.jh)(),
                        d = (0, r.useLocation)(),
                        p = (0, c.hC)("payments_pin_enabled"),
                        y = (0, c.hC)("payments_account_details_enabled"),
                        h = p || y,
                        E = (0, c.hC)("payments_settings_documents_enabled"),
                        f = a.useMemo(() => [{ to: { pathname: s.iE.personal }, key: s.iE.personal, label: "Personal", isActive: () => d.pathname === s.iE.personal }, { to: { pathname: s.iE.bankAccounts }, key: s.iE.bankAccounts, label: "Linked accounts", isActive: () => d.pathname === s.iE.bankAccounts }, { to: { pathname: s.iE.limits }, key: s.iE.limits, label: "Limits", isActive: () => d.pathname === s.iE.limits }, h ? { to: { pathname: s.iE.securityPrivacy }, key: s.iE.securityPrivacy, label: "Security & Privacy", isActive: () => d.pathname === s.iE.securityPrivacy } : null, E ? { to: { pathname: s.iE.monthlyStatements }, key: s.iE.monthlyStatements, label: "Monthly statements", isActive: () => d.pathname === s.iE.monthlyStatements } : null], [d.pathname, h, E]),
                        g = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(i.Z, { style: n.root, withWideContainer: !0 }, a.createElement(o.Z, { isPillLink: !0, links: f }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: de, exact: !0, key: s.iE.personal, path: s.iE.personal }), a.createElement(r.Route, { component: V, exact: !0, key: s.iE.bankAccounts, path: s.iE.bankAccounts }), a.createElement(r.Route, { component: ke, exact: !0, key: s.iE.securityPrivacy, path: s.iE.securityPrivacy }), a.createElement(r.Route, { component: j, exact: !0, key: s.iE.limits, path: s.iE.limits }), a.createElement(r.Route, { component: le, exact: !0, key: s.iE.monthlyStatements, path: s.iE.monthlyStatements })))), [n.root, f]),
                        b = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(s.Sr);
                            e ? t.push(s.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: Ze }, a.createElement(l.Z, { backLocation: s.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: b, primaryContent: g, sidebarContent: null, title: "Settings" }));
                },
                ve = a.memo(Pe);
        },
        372195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            n(136728);
            var a = n(202784),
                r = n(107267),
                i = n(529356),
                l = n(514639);
            const o = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        o = n.state?.setupTwoFactorAuthReturnPath || l.gp,
                        c = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-security-key-enrollment", query: { return_path: o } });
                        }, [t, o]),
                        s = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-auth-app-enrollment", query: { return_path: o } });
                        }, [t, o]),
                        m = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(i.Z, { actionLabel: "Setup Authenticator app", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "Two-factor authentication is required", isFullHeightOnMobile: !0, onAction: s, onClose: m, onSecondaryAction: c, secondaryActionLabel: "Setup Security key", secondaryActionType: "primaryFilled", subtext: "Enable two-factor authentication using an authentication app or a security key to unlock peer-to-peer transfers and external bank account withdrawals and deposits." });
                },
                c = a.memo(o);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => F });
            n(136728);
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                l = n(154003),
                o = n(731708),
                c = n(661810),
                s = n(392237),
                m = n(880428),
                u = n(357818),
                d = n(980407),
                p = n(736063),
                y = n(514639),
                h = n(293115),
                E = n(634455),
                f = n(477922),
                g = n(749122),
                b = n(615954),
                _ = n(86320),
                k = n(89319),
                Z = n(448518),
                P = n(655750),
                v = n(48646),
                w = n(972758),
                C = n(749286),
                T = n(467734),
                A = n(464978),
                S = n(743080),
                x = n(727384);
            const D = (e, t, n) => a.createElement(r.Z, { style: H.description, testID: t }, e ? (n ? a.createElement(a.Fragment, null, a.createElement(f.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), a.createElement(g.Z, { account: e, weight: "normal" })) : a.createElement(_.Z, { account: e, weight: "normal" })) : null),
                L = { page: "money", section: "transaction-details" },
                I = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                M = (e) => {
                    const { history: t } = e,
                        n = (0, i.useParams)().transactionId,
                        s = (0, S.jh)(),
                        { get_transaction_by_id: p } = (0, A.Z)(n || ""),
                        { __id: g, amount_local_micro: _, challenge_id: M, created_at: R, currency: O, description: F, details: B, id: z, product_code: N, reason_code: U, transaction_status: V, transaction_type: q } = p ?? {},
                        $ = B?.receiver_results?.result,
                        W = B?.sender_results?.result,
                        X = B?.payment_method,
                        K = B?.merchant_details,
                        Y = B?.reference_transaction_id,
                        G = (0, T.Z)({ senderId: W?.rest_id }),
                        Q = (0, S.JU)(),
                        j = N === m.x.Interest,
                        J = j && q === u.x.Deposit,
                        ee = j && q === u.x.Transfer,
                        te = q === u.x.Deposit,
                        ne = q === u.x.Withdraw,
                        ae = N === m.x.Transfer && !(te || ne),
                        re = j || "User" !== $?.__typename || "User" !== W?.__typename ? null : G ? $ : W,
                        ie = (0, x.zx)({ referenceTransactionId: Y, transactionType: q }),
                        le = (0, x.qU)({ transactionType: q, productCode: N }),
                        oe = te || ne || le ? (0, x.Ou)(X) : null,
                        ce = re?.legacy?.screen_name,
                        se = (0, x.Q1)({ status: V, transactionType: q, isViewerSender: G, createdAt: R, productCode: N, description: F, reasonCode: U }),
                        me = W?.legacy?.screen_name,
                        ue = $?.legacy?.screen_name,
                        de = te ? oe : null,
                        pe = ne ? oe : null,
                        ye = (0, x.Bl)({ status: V }),
                        he = (0, x._T)({ status: V }),
                        Ee = "/notifications" === t.location.state?.previousPath && !J && (ye || he),
                        fe = (0, x.EQ)({ productCode: N, transactionType: q }),
                        ge = (0, x.zK)({ transactionType: q, productCode: N, merchantDetails: K, amountType: se.amountType }),
                        be = fe || le,
                        _e = (0, x.pQ)({ productCode: N, transactionType: q, account: oe }),
                        ke = a.useMemo(() => (n ? a.createElement(k.Z, { reportedHandle: ce, transactionId: n }) : null), [n, ce]),
                        Ze = (0, x.XT)({ status: V, transactionType: q, isViewerSender: G }) || Ee,
                        Pe = a.useCallback(() => {
                            I.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        ve = Ze ? a.createElement(r.Z, { style: s.footer }, z ? a.createElement(r.Z, { style: H.actions }, a.createElement(Z.Z, { amount: _, challengeId: M, currency: O, isViewerSender: G, receiverScreenName: ue, recordId: g, senderScreenName: me, status: V, transactionId: z, transactionType: q })) : null, Ee ? a.createElement(l.ZP, { link: y.gp, size: Q, style: S.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(h.nO, { namespace: L }, a.createElement(d.Z, { bottomBar: ve, history: t, onBackClick: Pe, rightControl: ke, withoutBottomBarMobile: !0 }, a.createElement(r.Z, { style: s.container }, a.createElement(r.Z, { style: H.content }, re ? a.createElement(C.Z, { avatarWithLink: !0, user: re, usernameWithLink: !0 }) : _e ? a.createElement(r.Z, { style: H.gap }, a.createElement(f.KR, { size: "xJumbo", type: _e.iconType, uri: _e.uri }), a.createElement(w.Z, { size: "title4", title: _e.title })) : ge ? a.createElement(r.Z, { style: H.gap }, a.createElement(f.G7, { size: "xJumbo", type: ge.type, uri: ge.logo }), a.createElement(b.Z, { name: ge.name, size: "title4" })) : null, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, se.createdAt), a.createElement(r.Z, { style: [H.gap, H.marginTop] }, _ ? a.createElement(E.Z, { amount: _, currency: O, hasCompleted: he, type: se.amountType }) : null, ae && se.description ? a.createElement(v.Z, { color: "gray700", note: se.description }) : null), a.createElement(c.Z, { spacing: "space12" }), a.createElement(P.Z, { description: se.status, title: "Status" }), de && a.createElement(P.Z, { description: D(de, "source", !1), title: "Source" }), pe && a.createElement(P.Z, { description: D(pe, "destination", !1), title: "Destination" }), ie ? a.createElement(P.Z, { description: a.createElement(o.ZP, { color: "text", link: ie }, Y), title: "Original transaction" }) : null, ee && R ? a.createElement(P.Z, { description: (0, x.nV)(R), title: "Period" }) : null, ge && oe && oe.issuedCardAccountName ? a.createElement(P.Z, { description: D(oe, "issuedCard", !0), title: "Card used" }) : null, a.createElement(P.Z, { description: z, title: "Transaction ID" }), be && F && a.createElement(P.Z, { description: F, title: "On statement as" })))));
                },
                R = { context: "TRANSACTION_DETAIL" },
                O = (e) => a.createElement(p.H, { errorConfig: R }, a.createElement(M, e)),
                F = a.memo(O),
                H = s.default.create((e) => ({ content: { flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space8 }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, actions: { flexDirection: "column", gap: e.spaces.space12 }, gap: { gap: e.spaces.space12 }, marginTop: { marginTop: e.spaces.space16 } }));
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                i = n(43429),
                l = n(991911);
            const o = (e) => r.createElement(l.Z, (0, a.Z)({}, e, { transferDirection: i.Rz.debit })),
                c = r.memo(o);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => E });
            var a = n(202784),
                r = n(107267),
                i = n(992942),
                l = n(529356),
                o = n(198433),
                c = n(736063),
                s = n(514639),
                m = n(557159);
            const u = ({ region: e }) => `X Money is not available in ${e}`,
                d = ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`,
                p = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, m.Z)(),
                        c = n && s.g7[n],
                        p = a.useCallback(() => {
                            t.replace(s.gp);
                        }, [t]),
                        y = a.useCallback(({ style: e }) => a.createElement(i.Z, { "aria-label": "", source: o, style: e }), []);
                    return a.createElement(l.Z, { actionLabel: "View balance", enableMaskForDismiss: !0, graphic: y, graphicDisplayMode: "illustration", headline: c ? u({ region: c }) : "X Money is not available", isFullHeightOnMobile: !0, onAction: p, onClose: p, subtext: c ? d({ region: c }) : "You can still view your balance, but actions are currently disabled until X Money becomes available in your state", supportUrl: s.N6 });
                },
                y = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                h = (e) => a.createElement(c.H, { errorConfig: y }, a.createElement(p, e)),
                E = a.memo(h);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.a9d1e02a.js.map
