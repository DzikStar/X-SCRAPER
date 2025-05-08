"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-41dc26ea"],
    {
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                i = n(207162);
            const o = (e) => r.createElement(i.default, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                c = r.memo(o);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                l = n(736063),
                i = n(514639),
                o = n(725516),
                c = n(160144);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, o.z)(),
                        l = t.location?.state?.redirectPath,
                        s = t.location?.state?.redirectState,
                        m = t.location?.state?.closePath,
                        u = t.location?.state?.field,
                        d = a.useMemo(() => {
                            switch (u) {
                                case "name":
                                    return i.P_.updateName;
                                case "address":
                                    return i.P_.updateAddress;
                                default:
                                    return;
                            }
                        }, [u]);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "personal-update", action: "impression" });
                        }, [n]),
                        a.createElement(c.Z, { additionalParams: u ? [{ key: "what", value: u }] : void 0, closePath: m, linkType: d, redirectPath: l, redirectState: s })
                    );
                },
                m = { context: "PersonalUpdate" };
            function u(e) {
                return a.createElement(l.H, { errorConfig: m }, a.createElement(s, e));
            }
            const d = a.memo(u);
        },
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                i = n(207162);
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
            n.r(t), n.d(t, { default: () => ve });
            n(136728);
            var a = n(202784),
                r = n(107267),
                l = n(108362),
                i = n(252021),
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
                b = n(436117),
                _ = n(922281),
                g = n(736063),
                k = n(782642),
                Z = n(445664),
                P = n(312771),
                v = n(696445),
                w = n(392046),
                C = n(226332),
                T = n(727384),
                A = n(844685),
                S = n(165822);
            const x = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: l }) => {
                    const i = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(A.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: l }), a.createElement(S.Z, { "aria-label": l, containerStyle: i.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                L = a.memo(x);
            var D = n(195816),
                I = (n(585488), n(351743)),
                M = n.n(I);
            const R = D.Z,
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
                        { permissions: l } = (0, Z.Z)({ fetchKey: "Payments" }),
                        i = (0, r.useHistory)(),
                        o = (0, c.hC)("payments_cards_as_payment_method_enabled"),
                        [m, g] = a.useState(null),
                        v = (0, k.p)(),
                        [A, S] = O(),
                        x = l?.includes(b.d.DeletePaymentMethod),
                        D = l?.includes(b.d.CreatePaymentMethod),
                        I = a.useCallback(
                            (e) => () => {
                                i.push(s.VN, { redirectPath: s.iE.bankAccounts, paymentMethodId: e });
                            },
                            [i],
                        ),
                        M = a.useCallback(
                            (e) => () => {
                                g(e);
                            },
                            [g],
                        ),
                        R = a.useCallback(() => {
                            m &&
                                A({ paymentMethodId: m })
                                    .then(() => {
                                        g(null), v({ text: "You account was successfully removed!" });
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
                                return t && n ? a.createElement(w.Z, { account: t, handleRemove: x ? M(n) : void 0, key: n, onClick: e?.core?.details?.status === _.D.LoginRequired && D ? I(n) : void 0 }) : null;
                            }),
                            a.createElement(p.ZP, { disabled: !D, icon: a.createElement(f.default, null), link: D ? H : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: F } }, "Add bank account")),
                            o ? a.createElement(p.ZP, { disabled: !D, icon: a.createElement(f.default, null), link: D ? B : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: F } }, "Add card")) : null,
                        );
                    return a.createElement(a.Fragment, null, n === P.iF.LOADING ? a.createElement(h.Z, null) : a.createElement(L, { content: z, title: "Linked accounts" }), m ? a.createElement(E.Z, { confirmButtonDisabled: S, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => g(null), onConfirm: R, text: "Your account will be removed from X" }) : null);
                },
                U = { context: "PaymentsSettingsExternalAccounts" };
            function V(e) {
                return a.createElement(g.H, { errorConfig: U }, a.createElement(z, e));
            }
            const Y = (0, v.R)(a.memo(V), { permissionsAllOf: [b.d.GetAccounts, b.d.GetPaymentMethod], permissionsAnyOf: null });
            var N = n(392237),
                q = n(443781),
                $ = n(889738);
            const W = [
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
                X = (e) => {
                    const { featureSwitches: t } = (0, q.QZ)(),
                        { limits: n } = (0, $.Z)();
                    return W.map((e) => {
                        const r = e.content.reduce(
                                (e, t) => {
                                    const a = n?.find((e) => e.limit_type === t.limit_type),
                                        r = a?.amount?.local_micro;
                                    "-1" === r && (e.isUnlimited = !0);
                                    const l = parseFloat(r),
                                        i = l >= 0 ? (0, T.p2)({ amount: l, currency: a?.amount?.currency }) : null;
                                    return i && e.limits.push(t.amountLabel({ formattedAmount: i })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            l = a.createElement(
                                d.Z,
                                { style: u.ZP.setting },
                                a.createElement(
                                    d.Z,
                                    { style: K.content },
                                    r.limits.length > 0
                                        ? a.createElement(
                                              d.Z,
                                              { style: K.limit },
                                              r.limits.map((e) => a.createElement(y.ZP, { color: "gray700", key: e }, e)),
                                          )
                                        : r.isUnlimited
                                          ? a.createElement(y.ZP, { color: "gray700" }, "Unlimited")
                                          : null,
                                ),
                            );
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: K.limitRoot, testID: e.key }, a.createElement(L, { content: l, title: e.title })) : null;
                    });
                },
                K = N.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
                G = { context: "PaymentsSettingsLimits" };
            function Q(e) {
                return a.createElement(g.H, { errorConfig: G }, a.createElement(X, e));
            }
            const j = (0, v.R)(a.memo(Q), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null });
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
                                  return a.createElement(L, { content: n, key: e, title: e });
                              })
                            : a.createElement(ee.Z, { message: "You do not have any monthly statements yet." }),
                    );
                },
                re = { context: "PaymentsSettingsMonthlyStatements" };
            function le(e) {
                return a.createElement(g.H, { errorConfig: re }, a.createElement(ae, e));
            }
            const ie = (0, v.R)(a.memo(le), { permissionsAllOf: [b.d.GetDocuments], permissionsAnyOf: null });
            var oe = n(160144);
            const ce = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                se = (e) => {
                    const { fetchCount: t, permissions: n, roles: l } = (0, Z.Z)({ fetchKey: "Payments" }),
                        i = (0, r.useHistory)(),
                        o = n?.includes(b.d.VerifyIdentity),
                        c = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case oe.T.edit:
                                        if (!l?.includes("KycVerified")) return void i.push(s.AU.tier2.verifyIdentityPath, { redirectPath: s.iE.personal, closePath: s.iE.personal, requestedField: t });
                                        i.push(s.f0, { field: t });
                                        break;
                                    case oe.T.failure:
                                        i.replace(s.gp);
                                }
                            },
                            [i, l],
                        ),
                        m = a.useMemo(() => l?.includes("KycVerified"), [l]),
                        h = a.useMemo(() => {
                            const e = l?.includes("KycDocumentsVerified");
                            return a.createElement(d.Z, { style: [u.ZP.setting, pe.idVerificationContent] }, a.createElement(y.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(p.ZP, { disabled: !o, link: o ? ce : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [o, l]);
                    return a.createElement(a.Fragment, null, a.createElement(L, { content: a.createElement(oe.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: pe.infoRoot, title: "Basic information" }), m && a.createElement(L, { content: h, title: "Identity information" }));
                },
                me = { context: "PaymentsSettingsPersonal" };
            function ue(e) {
                return a.createElement(g.H, { errorConfig: me }, a.createElement(se, e));
            }
            const de = (0, v.R)(a.memo(ue), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null }),
                pe = N.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 * e.scaleMultiplier }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
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
                be = (e) => {
                    const { permissions: t } = (0, Z.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, q.QZ)(),
                        { handlePreferencesChange: r, preferences: l } = (0, he.Z)(),
                        i = t?.includes(b.d.UpdatePin),
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
                                Ee.map(({ feature: e, helpText: t, label: i, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!l[c], disabled: o, helpText: t, key: c, label: i, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        E = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                fe.map(({ feature: e, helpText: t, label: i, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!l[c], disabled: o, helpText: t, key: c, label: i, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        f = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!l.enable_bill_pay, disabled: o, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        _ = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!l.enable_card_payments, disabled: o, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, c ? a.createElement(L, { content: h, rightControl: i ? a.createElement(y.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(L, { content: E, title: "Enhanced privacy" }), m ? a.createElement(L, { content: f, title: "Bill pay" }) : null, p ? a.createElement(L, { content: _, title: "Card payments" }) : null);
                },
                _e = { context: "PaymentsSettingsSecurityPrivacy" };
            function ge(e) {
                return a.createElement(g.H, { errorConfig: _e }, a.createElement(be, e));
            }
            const ke = (0, v.R)(a.memo(ge), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null }),
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
                        b = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(l.Z, { style: n.root, withWideContainer: !0 }, a.createElement(o.Z, { isPillLink: !0, links: f }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: de, exact: !0, key: s.iE.personal, path: s.iE.personal }), a.createElement(r.Route, { component: Y, exact: !0, key: s.iE.bankAccounts, path: s.iE.bankAccounts }), a.createElement(r.Route, { component: ke, exact: !0, key: s.iE.securityPrivacy, path: s.iE.securityPrivacy }), a.createElement(r.Route, { component: j, exact: !0, key: s.iE.limits, path: s.iE.limits }), a.createElement(r.Route, { component: ie, exact: !0, key: s.iE.monthlyStatements, path: s.iE.monthlyStatements })))), [n.root, f]),
                        _ = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(s.Sr);
                            e ? t.push(s.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: Ze }, a.createElement(i.Z, { backLocation: s.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: _, primaryContent: b, sidebarContent: null, title: "Settings" }));
                },
                ve = a.memo(Pe);
        },
        372195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            n(136728);
            var a = n(202784),
                r = n(107267),
                l = n(529356),
                i = n(514639);
            const o = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        o = n.state?.setupTwoFactorAuthReturnPath || i.gp,
                        c = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-security-key-enrollment", query: { return_path: o } });
                        }, [t, o]),
                        s = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-auth-app-enrollment", query: { return_path: o } });
                        }, [t, o]),
                        m = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(l.Z, { actionLabel: "Setup Authenticator app", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "Two-factor authentication is required", isFullHeightOnMobile: !0, onAction: s, onClose: m, onSecondaryAction: c, secondaryActionLabel: "Setup Security key", secondaryActionType: "primaryFilled", subtext: "Enable two-factor authentication using an authentication app or a security key to unlock peer-to-peer transfers and external bank account withdrawals and deposits." });
                },
                c = a.memo(o);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => R });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                i = n(154003),
                o = n(731708),
                c = n(661810),
                s = n(568320),
                m = n(880428),
                u = n(357818),
                d = n(980407),
                p = n(736063),
                y = n(514639),
                h = n(293115),
                E = n(634455),
                f = n(477922),
                b = n(615954),
                _ = n(89319),
                g = n(448518),
                k = n(655750),
                Z = n(48646),
                P = n(847211),
                v = n(972758),
                w = n(749286),
                C = n(467734),
                T = n(464978),
                A = n(743080),
                S = n(727384);
            const x = { page: "money", section: "transaction-details" },
                L = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                D = (e) => {
                    const { history: t } = e,
                        n = (0, l.useParams)().transactionId,
                        p = (0, A.jh)(),
                        { get_transaction_by_id: D } = (0, T.Z)(n || ""),
                        { __id: I, amount_local_micro: M, availability_date: R, challenge_id: O, created_at: F, currency: H, description: B, details: z, id: U, product_code: V, reason_code: Y, transaction_status: N, transaction_type: q } = D ?? {},
                        $ = z?.receiver_results?.result,
                        W = z?.sender_results?.result,
                        X = z?.payment_method,
                        K = z?.merchant_details,
                        G = z?.reference_transaction_id,
                        Q = (0, C.Z)({ senderId: W?.rest_id }),
                        j = (0, S.p6)(R),
                        J = (0, A.JU)(),
                        ee = V === m.x.Interest,
                        te = ee && q === u.x.Deposit,
                        ne = ee && q === u.x.Transfer,
                        ae = q === u.x.Deposit,
                        re = q === u.x.Withdraw,
                        le = V === m.x.Transfer && !(ae || re),
                        ie = ee || "User" !== $?.__typename || "User" !== W?.__typename ? null : Q ? $ : W,
                        oe = (0, S.zx)({ referenceTransactionId: G, transactionType: q }),
                        ce = (0, S.qU)({ transactionType: q, productCode: V }),
                        se = ae || re || ce ? (0, S.Ou)(X) : null,
                        me = ie?.legacy?.screen_name,
                        ue = (0, S.Q1)({ status: N, transactionType: q, isViewerSender: Q, createdAt: F, productCode: V, description: B, reasonCode: Y }),
                        de = W?.legacy?.screen_name,
                        pe = $?.legacy?.screen_name,
                        ye = ae ? se : null,
                        he = re ? se : null,
                        Ee = (0, S.Bl)({ status: N }),
                        fe = (0, S._T)({ status: N }),
                        be = "/notifications" === t.location.state?.previousPath && !te && (Ee || fe),
                        _e = (0, S.EQ)({ productCode: V, transactionType: q }),
                        ge = (0, S.zK)({ transactionType: q, productCode: V, merchantDetails: K, amountType: ue.amountType }),
                        ke = ge && ge.location && (0, S.T7)(ge.location),
                        Ze = _e || ce,
                        Pe = (0, S.pQ)({ productCode: V, transactionType: q, account: se }),
                        ve = a.useMemo(() => (n ? a.createElement(_.Z, { reportedHandle: me, transactionId: n }) : null), [n, me]),
                        we = (0, S.XT)({ status: N, transactionType: q, isViewerSender: Q }) || be,
                        Ce = a.useCallback(() => {
                            L.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Te = we ? a.createElement(r.Z, { style: p.footer }, U ? a.createElement(r.Z, { style: A.YP.actions }, a.createElement(g.Z, { amount: M, challengeId: O, currency: H, isViewerSender: Q, receiverScreenName: pe, recordId: I, senderScreenName: de, status: N, transactionId: U, transactionType: q })) : null, be ? a.createElement(i.ZP, { link: y.gp, size: J, style: A.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        h.nO,
                        { namespace: x },
                        a.createElement(
                            d.Z,
                            { bottomBar: Te, history: t, onBackClick: Ce, rightControl: ve, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: A.YP.content },
                                    Pe ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(f.KR, { size: "xJumbo", type: Pe.iconType, uri: Pe.uri }), a.createElement(v.Z, { size: "title4", title: Pe.title })) : ie ? a.createElement(w.Z, { avatarWithLink: !0, user: ie, usernameWithLink: !0 }) : ge ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(f.G7, { size: "xJumbo", type: ge.type, uri: ge.logo }), a.createElement(b.Z, { name: ge.name, size: "title4" })) : null,
                                    a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, ue.createdAt),
                                    a.createElement(r.Z, { style: [A.YP.gap, A.YP.marginTop] }, M ? a.createElement(E.Z, { amount: M, currency: H, hasCompleted: fe, type: ue.amountType }) : null, le && ue.description ? a.createElement(Z.Z, { color: "gray700", note: ue.description }) : null),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: A.ZP.rowSpaceBetween }, a.createElement(k.Z, { description: ue.status, title: "Status" }), j ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: A.YP.arrow }), a.createElement(k.Z, { description: j, title: "Funds available on" })) : null),
                                    ye && a.createElement(k.Z, { description: a.createElement(P.Z, { account: ye, testId: "source" }), title: "Source" }),
                                    he && a.createElement(k.Z, { description: a.createElement(P.Z, { account: he, testId: "destination" }), title: "Destination" }),
                                    oe ? a.createElement(k.Z, { description: a.createElement(o.ZP, { color: "text", link: oe }, G), title: "Original transaction" }) : null,
                                    ne && F ? a.createElement(k.Z, { description: (0, S.nV)(F), title: "Period" }) : null,
                                    ge && se && se.issuedCardAccountName ? a.createElement(k.Z, { description: a.createElement(P.Z, { account: se, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    ke ? a.createElement(k.Z, { description: ke, title: "Location" }) : null,
                                    a.createElement(k.Z, { description: U, title: "Transaction ID" }),
                                    Ze && B && a.createElement(k.Z, { description: B, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                I = { context: "TRANSACTION_DETAIL" },
                M = (e) => a.createElement(p.H, { errorConfig: I }, a.createElement(D, e)),
                R = a.memo(M);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                i = n(991911);
            const o = (e) => r.createElement(i.Z, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                c = r.memo(o);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => E });
            var a = n(202784),
                r = n(107267),
                l = n(992942),
                i = n(529356),
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
                        y = a.useCallback(({ style: e }) => a.createElement(l.Z, { "aria-label": "", source: o, style: e }), []);
                    return a.createElement(i.Z, { actionLabel: "View balance", enableMaskForDismiss: !0, graphic: y, graphicDisplayMode: "illustration", headline: c ? u({ region: c }) : "X Money is not available", isFullHeightOnMobile: !0, onAction: p, onClose: p, subtext: c ? d({ region: c }) : "You can still view your balance, but actions are currently disabled until X Money becomes available in your state", supportUrl: s.N6 });
                },
                y = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                h = (e) => a.createElement(c.H, { errorConfig: y }, a.createElement(p, e)),
                E = a.memo(h);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.4af568ba.js.map
