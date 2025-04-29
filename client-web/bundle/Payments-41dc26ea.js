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
                b = n(436117),
                _ = n(922281),
                g = n(736063),
                k = n(782642),
                Z = n(445664),
                P = n(312771),
                v = n(696445),
                C = n(392046),
                w = n(226332),
                A = n(727384),
                T = n(844685),
                S = n(165822);
            const x = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: i }) => {
                    const l = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(T.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: i }), a.createElement(S.Z, { "aria-label": i, containerStyle: l.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
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
                                        updater: A.QE,
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
                    const { paymentMethods: t, refetchStatus: n } = (0, w.Z)(),
                        { permissions: i } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        o = (0, c.hC)("payments_cards_as_payment_method_enabled"),
                        [m, g] = a.useState(null),
                        v = (0, k.p)(),
                        [T, S] = O(),
                        x = i?.includes(b.d.DeletePaymentMethod),
                        D = i?.includes(b.d.CreatePaymentMethod),
                        I = a.useCallback(
                            (e) => () => {
                                l.push(s.VN, { redirectPath: s.iE.bankAccounts, paymentMethodId: e });
                            },
                            [l],
                        ),
                        M = a.useCallback(
                            (e) => () => {
                                g(e);
                            },
                            [g],
                        ),
                        R = a.useCallback(() => {
                            m &&
                                T({ paymentMethodId: m })
                                    .then(() => {
                                        g(null), v({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        v({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [v, m, T]),
                        z = a.createElement(
                            d.Z,
                            { style: u.ZP.setting },
                            t?.map((e) => {
                                const t = (0, A.Ou)(e),
                                    n = t?.id;
                                return t && n ? a.createElement(C.Z, { account: t, handleRemove: x ? M(n) : void 0, key: n, onClick: e?.core?.details?.status === _.D.LoginRequired && D ? I(n) : void 0 }) : null;
                            }),
                            a.createElement(p.ZP, { disabled: !D, icon: a.createElement(f.default, null), link: D ? H : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: F } }, "Add bank account")),
                            o ? a.createElement(p.ZP, { disabled: !D, icon: a.createElement(f.default, null), link: D ? B : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: F } }, "Add card")) : null,
                        );
                    return a.createElement(a.Fragment, null, n === P.iF.LOADING ? a.createElement(h.Z, null) : a.createElement(L, { content: z, title: "Linked accounts" }), m ? a.createElement(E.Z, { confirmButtonDisabled: S, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => g(null), onConfirm: R, text: "Your account will be removed from X" }) : null);
                },
                N = { context: "PaymentsSettingsExternalAccounts" };
            function U(e) {
                return a.createElement(g.H, { errorConfig: N }, a.createElement(z, e));
            }
            const V = (0, v.R)(a.memo(U), { permissionsAllOf: [b.d.GetAccounts, b.d.GetPaymentMethod], permissionsAnyOf: null });
            var Y = n(392237),
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
                                    const i = parseFloat(r),
                                        l = i >= 0 ? (0, A.p2)({ amount: i, currency: a?.amount?.currency }) : null;
                                    return l && e.limits.push(t.amountLabel({ formattedAmount: l })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            i = a.createElement(
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
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: K.limitRoot, testID: e.key }, a.createElement(L, { content: i, title: e.title })) : null;
                    });
                },
                K = Y.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
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
                            const n = `${(0, A.Qu)(t.start_date).getFullYear()}`,
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
                                          const n = (0, A.Qu)(e),
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
            function ie(e) {
                return a.createElement(g.H, { errorConfig: re }, a.createElement(ae, e));
            }
            const le = (0, v.R)(a.memo(ie), { permissionsAllOf: [b.d.GetDocuments], permissionsAnyOf: null });
            var oe = n(160144);
            const ce = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                se = (e) => {
                    const { fetchCount: t, permissions: n, roles: i } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        o = n?.includes(b.d.VerifyIdentity),
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
                    return a.createElement(a.Fragment, null, a.createElement(L, { content: a.createElement(oe.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: pe.infoRoot, title: "Basic information" }), m && a.createElement(L, { content: h, title: "Identity information" }));
                },
                me = { context: "PaymentsSettingsPersonal" };
            function ue(e) {
                return a.createElement(g.H, { errorConfig: me }, a.createElement(se, e));
            }
            const de = (0, v.R)(a.memo(ue), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null }),
                pe = Y.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 * e.scaleMultiplier }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
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
                        { handlePreferencesChange: r, preferences: i } = (0, he.Z)(),
                        l = t?.includes(b.d.UpdatePin),
                        o = !(0, A.aY)(t),
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
                        _ = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!i.enable_card_payments, disabled: o, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, c ? a.createElement(L, { content: h, rightControl: l ? a.createElement(y.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to enter your PIN to proceed.", title: "PIN required" }) : null, a.createElement(L, { content: E, title: "Enhanced privacy" }), m ? a.createElement(L, { content: f, title: "Bill pay" }) : null, p ? a.createElement(L, { content: _, title: "Card payments" }) : null);
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
                        b = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(i.Z, { style: n.root, withWideContainer: !0 }, a.createElement(o.Z, { isPillLink: !0, links: f }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: de, exact: !0, key: s.iE.personal, path: s.iE.personal }), a.createElement(r.Route, { component: V, exact: !0, key: s.iE.bankAccounts, path: s.iE.bankAccounts }), a.createElement(r.Route, { component: ke, exact: !0, key: s.iE.securityPrivacy, path: s.iE.securityPrivacy }), a.createElement(r.Route, { component: j, exact: !0, key: s.iE.limits, path: s.iE.limits }), a.createElement(r.Route, { component: le, exact: !0, key: s.iE.monthlyStatements, path: s.iE.monthlyStatements })))), [n.root, f]),
                        _ = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(s.Sr);
                            e ? t.push(s.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: Ze }, a.createElement(l.Z, { backLocation: s.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: _, primaryContent: b, sidebarContent: null, title: "Settings" }));
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
            n.r(t), n.d(t, { default: () => M });
            n(136728);
            var a = n(202784),
                r = n(325686),
                i = n(107267),
                l = n(154003),
                o = n(731708),
                c = n(661810),
                s = n(880428),
                m = n(357818),
                u = n(980407),
                d = n(736063),
                p = n(514639),
                y = n(293115),
                h = n(634455),
                E = n(477922),
                f = n(615954),
                b = n(89319),
                _ = n(448518),
                g = n(655750),
                k = n(48646),
                Z = n(847211),
                P = n(972758),
                v = n(749286),
                C = n(467734),
                w = n(464978),
                A = n(743080),
                T = n(727384);
            const S = { page: "money", section: "transaction-details" },
                x = [p.uv, p.r0, p.IN, p.HM, p.Jv],
                L = (e) => {
                    const { history: t } = e,
                        n = (0, i.useParams)().transactionId,
                        d = (0, A.jh)(),
                        { get_transaction_by_id: L } = (0, w.Z)(n || ""),
                        { __id: D, amount_local_micro: I, challenge_id: M, created_at: R, currency: O, description: F, details: H, id: B, product_code: z, reason_code: N, transaction_status: U, transaction_type: V } = L ?? {},
                        Y = H?.receiver_results?.result,
                        q = H?.sender_results?.result,
                        $ = H?.payment_method,
                        W = H?.merchant_details,
                        X = H?.reference_transaction_id,
                        K = (0, C.Z)({ senderId: q?.rest_id }),
                        G = (0, A.JU)(),
                        Q = z === s.x.Interest,
                        j = Q && V === m.x.Deposit,
                        J = Q && V === m.x.Transfer,
                        ee = V === m.x.Deposit,
                        te = V === m.x.Withdraw,
                        ne = z === s.x.Transfer && !(ee || te),
                        ae = Q || "User" !== Y?.__typename || "User" !== q?.__typename ? null : K ? Y : q,
                        re = (0, T.zx)({ referenceTransactionId: X, transactionType: V }),
                        ie = (0, T.qU)({ transactionType: V, productCode: z }),
                        le = ee || te || ie ? (0, T.Ou)($) : null,
                        oe = ae?.legacy?.screen_name,
                        ce = (0, T.Q1)({ status: U, transactionType: V, isViewerSender: K, createdAt: R, productCode: z, description: F, reasonCode: N }),
                        se = q?.legacy?.screen_name,
                        me = Y?.legacy?.screen_name,
                        ue = ee ? le : null,
                        de = te ? le : null,
                        pe = (0, T.Bl)({ status: U }),
                        ye = (0, T._T)({ status: U }),
                        he = "/notifications" === t.location.state?.previousPath && !j && (pe || ye),
                        Ee = (0, T.EQ)({ productCode: z, transactionType: V }),
                        fe = (0, T.zK)({ transactionType: V, productCode: z, merchantDetails: W, amountType: ce.amountType }),
                        be = Ee || ie,
                        _e = (0, T.pQ)({ productCode: z, transactionType: V, account: le }),
                        ge = a.useMemo(() => (n ? a.createElement(b.Z, { reportedHandle: oe, transactionId: n }) : null), [n, oe]),
                        ke = (0, T.XT)({ status: U, transactionType: V, isViewerSender: K }) || he,
                        Ze = a.useCallback(() => {
                            x.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(p.gp) : t.goBack();
                        }, [t]),
                        Pe = ke ? a.createElement(r.Z, { style: d.footer }, B ? a.createElement(r.Z, { style: A.YP.actions }, a.createElement(_.Z, { amount: I, challengeId: M, currency: O, isViewerSender: K, receiverScreenName: me, recordId: D, senderScreenName: se, status: U, transactionId: B, transactionType: V })) : null, he ? a.createElement(l.ZP, { link: p.gp, size: G, style: A.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(y.nO, { namespace: S }, a.createElement(u.Z, { bottomBar: Pe, history: t, onBackClick: Ze, rightControl: ge, withoutBottomBarMobile: !0 }, a.createElement(r.Z, { style: d.container }, a.createElement(r.Z, { style: A.YP.content }, ae ? a.createElement(v.Z, { avatarWithLink: !0, user: ae, usernameWithLink: !0 }) : _e ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(E.KR, { size: "xJumbo", type: _e.iconType, uri: _e.uri }), a.createElement(P.Z, { size: "title4", title: _e.title })) : fe ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(E.G7, { size: "xJumbo", type: fe.type, uri: fe.logo }), a.createElement(f.Z, { name: fe.name, size: "title4" })) : null, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, ce.createdAt), a.createElement(r.Z, { style: [A.YP.gap, A.YP.marginTop] }, I ? a.createElement(h.Z, { amount: I, currency: O, hasCompleted: ye, type: ce.amountType }) : null, ne && ce.description ? a.createElement(k.Z, { color: "gray700", note: ce.description }) : null), a.createElement(c.Z, { spacing: "space12" }), a.createElement(g.Z, { description: ce.status, title: "Status" }), ue && a.createElement(g.Z, { description: a.createElement(Z.Z, { account: ue, testId: "source" }), title: "Source" }), de && a.createElement(g.Z, { description: a.createElement(Z.Z, { account: de, testId: "destination" }), title: "Destination" }), re ? a.createElement(g.Z, { description: a.createElement(o.ZP, { color: "text", link: re }, X), title: "Original transaction" }) : null, J && R ? a.createElement(g.Z, { description: (0, T.nV)(R), title: "Period" }) : null, fe && le && le.issuedCardAccountName ? a.createElement(g.Z, { description: a.createElement(Z.Z, { account: le, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, a.createElement(g.Z, { description: B, title: "Transaction ID" }), be && F && a.createElement(g.Z, { description: F, title: "On statement as" })))));
                },
                D = { context: "TRANSACTION_DETAIL" },
                I = (e) => a.createElement(d.H, { errorConfig: D }, a.createElement(L, e)),
                M = a.memo(I);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.3fc5a79a.js.map
