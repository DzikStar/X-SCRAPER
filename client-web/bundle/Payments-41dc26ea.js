"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-41dc26ea"],
    {
        207162: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => he, default: () => ge, participantQuery: () => ye });
            var a = n(120721),
                r = n(202784),
                o = (n(585488), n(107267)),
                l = n(736063),
                s = n(725516),
                i = n(43429),
                c = n(73863),
                m = n(514639),
                u = n(535338),
                d = n(615027),
                p = (n(136728), n(325686)),
                y = n(154003),
                h = n(167630),
                E = n(731708),
                b = n(392237),
                g = n(980407),
                f = n(782642),
                _ = n(445664),
                Z = n(984067),
                P = n(413499),
                C = n(413713),
                k = n(749286),
                w = n(934265),
                v = n(743080),
                S = n(727384),
                x = n(436117);
            const A = Object.freeze({ [i.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [i.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                T = Object.freeze({ [i.Rz.debit]: x.d.CreateTransfer, [i.Rz.credit]: x.d.RequestTransfer });
            var D = n(181234),
                I = n(351743),
                B = n.n(I),
                M = n(726426),
                R = n.n(M);
            const L = D.Z,
                z = () => {
                    const e = r.useMemo(() => R()(), []),
                        [t, n] = B()(L);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, l) => {
                                    t({
                                        variables: { amount_local_micro: n, sender_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.request_transfer?.id,
                                                a = e?.request_transfer?.transaction_status,
                                                r = e?.request_transfer?.challenge_id,
                                                s = e?.request_transfer?.errors;
                                            n ? o({ transactionId: n, challengeId: r, status: a }) : l(s || t);
                                        },
                                        updater: S.qQ,
                                        onError: l,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const O = n(787560).Z,
                U = () => {
                    const e = r.useMemo(() => R()(), []),
                        [t, n] = B()(O);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, l) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.id,
                                                a = e?.create_transfer?.transaction_status,
                                                r = e?.create_transfer?.challenge_id,
                                                s = e?.create_transfer?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: r }) : l(s || t);
                                        },
                                        updater: S.qQ,
                                        onError: l,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                H = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, s.z)(),
                        l = (0, o.useHistory)(),
                        c = (0, v.jh)(),
                        b = (0, u.p)(ye, { user_id: n }).user.result,
                        { balance: x } = (0, w.Z)(),
                        { permissions: D, roles: I } = (0, _.Z)({ fetchKey: "Payments" }),
                        B = (0, S.MO)({ permissions: D }),
                        M = "User" === b?.__typename,
                        R = l.location?.state,
                        L = l.location.pathname,
                        [O, H] = r.useState(e ?? ""),
                        [X, F] = r.useState(!0),
                        [$, q] = r.useState(""),
                        [Y, V] = r.useState(null),
                        [W, Q] = U(),
                        [j, K] = z(),
                        G = r.useMemo(() => ({ ...R, userId: n, step: i.cX.reviewPane, amount: O }), [O, R, n]),
                        J = (0, f.p)(),
                        ee = r.useCallback(() => {
                            V(null);
                        }, []),
                        te = r.useMemo(() => ({ closePath: m.gp, redirectPath: L, redirectState: { userId: n, userScreenName: b?.core?.screen_name, amount: O, step: i.cX.reviewPane, transferDirection: t } }), [L, n, O, t, b]),
                        ne = r.useCallback((e) => {
                            q(e.target.value);
                        }, []),
                        ae = r.useCallback(
                            (e) => () => {
                                const t = T[e],
                                    r = (0, S.DO)({ roles: I, permissions: D, actionPermission: t }),
                                    o = { ...G, transferDirection: e };
                                if ((a.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) l.push(r, { redirectPath: L, redirectState: o, closePath: m.gp });
                                else {
                                    ee();
                                    const t = (0, S.Dc)(O),
                                        a = (0, S.p2)({ amount: t }),
                                        { successMessage: r } = A[e],
                                        o = r({ formattedAmount: a });
                                    (e === i.Rz.credit ? j : W)({ amount: t.toString(), description: $, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: a } = e,
                                                r = a ? `${m.bR}/${a}` : m.bR;
                                            (0, S.i7)({ status: n }) ? t && l.push(m.vw, { challengeId: t, redirectPath: r, closePath: m.gp, successMessage: o, challengeInitiator: m.kW.transaction }) : (J({ text: o }), l.replace(r));
                                        })
                                        .catch((e) => {
                                            const t = (0, C.XE)({ errors: e, roles: I });
                                            t ? l.replace(t, te) : V(e);
                                        });
                                }
                            },
                            [I, D, G, a, l, L, ee, O, j, W, $, n, J, te],
                        ),
                        re = Q || K || !O || !X,
                        oe = !x?.available_amount_local_micro || !O || (0, S.UV)({ balanceAmountMicro: x.available_amount_local_micro, amount: O }),
                        le = re || !B,
                        se = re || !oe,
                        ie = t ? A[t]?.title : null,
                        ce = t === i.Rz.debit,
                        me = r.createElement(y.ZP, { disabled: le, onPress: ae(i.Rz.credit), size: "large", style: v.ZP.button, type: "primaryFilled" }, K ? r.createElement(h.Z, null) : "Request"),
                        ue = r.createElement(y.ZP, { disabled: se, onPress: ae(i.Rz.debit), size: "large", style: v.ZP.button, type: "primaryFilled" }, Q ? r.createElement(h.Z, null) : "Send Payment"),
                        de = r.createElement(p.Z, { style: c.footer }, Y ? r.createElement(C.ZP, { errors: Y, linkState: te, opts: { counterPartyScreenName: b?.core?.screen_name }, roles: I }) : null);
                    return M ? r.createElement(g.Z, { backButtonType: "back", bottomBar: Y ? de : void 0, history: l, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: c.container }, r.createElement(E.ZP, { align: "left", size: "title4", weight: "bold" }, ie ?? "Send or Request"), b && r.createElement(k.Z, { user: b, withCenterAlign: !0 }), r.createElement(Z.Z, { amount: O, balance: x, isValid: X, label: "Enter amount", name: "amount", setAmount: H, setIsValid: F, validateBalance: ce }), r.createElement(P.Z, { maxLength: i.w8, onChange: ne, placeholder: "Optionally add a note", placeholderTextColor: N.placeholder.color, value: $ }), r.createElement(p.Z, { style: v.ZP.actionButtons }, t ? r.createElement(r.Fragment, null, ce ? ue : t === i.Rz.credit ? me : null) : r.createElement(r.Fragment, null, me, ue)))) : r.createElement(d.Z, { to: m.gp });
                },
                N = b.default.create((e) => ({ placeholder: { color: e.colors.gray400 } })),
                X = r.memo(H),
                F = c.Z,
                $ = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, u.p)(F, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(X, { transferDirection: t, userId: a }) : r.createElement(d.Z, { to: m.gp });
                },
                q = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                Y = (e) => r.createElement(l.H, { errorConfig: q }, r.createElement($, e)),
                V = r.memo(Y);
            var W = n(874088),
                Q = n(339110),
                j = n(125363),
                K = n(919022),
                G = n(724983),
                J = n(114084);
            const ee = G.Z,
                te = ({ onItemClick: e, viewerUserId: t }) => {
                    const n = (0, u.p)(ee, {}),
                        a = n?.get_payments_recent_participants?.slice(0, 5),
                        o = r.useCallback(
                            (t, n) => () => {
                                e(t, n);
                            },
                            [e],
                        );
                    return a && a.length > 0
                        ? r.createElement(
                              p.Z,
                              { style: re.root },
                              r.createElement(E.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  p.Z,
                                  null,
                                  a.map((e) => e && r.createElement(J.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: o(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                ne = { context: "RECENT_RECEIPIENTS" },
                ae = (e) => r.createElement(l.H, { errorConfig: ne }, r.createElement(te, e)),
                re = b.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                oe = r.memo(ae);
            var le = n(429371);
            const se = (e) => `x.com${m.HM}/${e}`,
                ie = ({ message: e, screenName: t }) => r.createElement(p.Z, { style: ce.root }, r.createElement(le.Z, { dimension: 90, link: se(t) }), r.createElement(E.ZP, { color: "gray700" }, e)),
                ce = b.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                me = r.memo(ie),
                ue = [Q.my.PaymentsUsers],
                de = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, v.jh)(),
                        l = n.location?.state,
                        c = n.location?.pathname,
                        u = (0, j.v9)(K.ZP.selectViewerUser),
                        d = u?.id_str,
                        y = u?.screen_name,
                        h = e ? A[e] : {},
                        { scanMessage: b, title: f } = h,
                        _ = r.useCallback((e) => e === d, [d]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: c, state: { ...l, step: i.cX.reviewPane, userId: e } });
                            },
                            [t, n, c, l],
                        ),
                        P = r.useCallback(
                            (e) => {
                                if (e.type === Q.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        C = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        k = r.useCallback(() => {
                            n.push(m.gp);
                        }, [n]);
                    return r.createElement(g.Z, { backButtonType: "close", history: n, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: a.container }, r.createElement(E.ZP, { align: "left", size: "title4", style: v.ZP.title, weight: "bold" }, f ?? "Send or Request"), r.createElement(p.Z, { style: v.ZP.content }, r.createElement(W.default, { alwaysOpen: !0, filter: ue, getItemIsDisabled: (e) => e.type === Q.El.User && (_(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => P(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: Q._4.Unknown, testID: "typeaheadInput" }), b && y ? r.createElement(me, { message: b, screenName: y }) : null, r.createElement(oe, { onItemClick: C, viewerUserId: d }))));
                },
                pe = r.memo(de),
                ye = a.Z,
                he = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.z)(),
                        a = (0, o.useParams)().screenName,
                        l = t.location?.state,
                        c = l?.step,
                        m = l?.userId,
                        u = l?.amount,
                        d = e.transferDirection ?? l?.transferDirection;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: c, component: d, action: "impression" });
                        }, [n, c, d]),
                        c === i.cX.reviewPane && m ? r.createElement(X, { amount: u, transferDirection: d, userId: m }) : a ? r.createElement(V, { screenName: a, transferDirection: d }) : r.createElement(pe, { transferDirection: d })
                    );
                },
                Ee = { context: "PaymentsP2PTransfer" };
            function be(e) {
                return r.createElement(l.H, { errorConfig: Ee }, r.createElement(he, e));
            }
            const ge = r.memo(be);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(207162);
            const s = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                i = r.memo(s);
        },
        956110: (e, t, n) => {
            n.r(t), n.d(t, { PayYourBillsScreen: () => C, default: () => x, styles: () => S });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                l = n(530525),
                s = n(439592),
                i = n(731708),
                c = n(154003),
                m = n(167630),
                u = n(392237),
                d = n(656805),
                p = n(980407),
                y = n(652904),
                h = n(736063),
                E = n(293115),
                b = n(978167),
                g = n(24568),
                f = n(743080);
            const _ = { page: "money", section: "pay-your-bills" },
                Z = "Pay your bills",
                P = `${Z} - Account Details`,
                C = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: S.headerContainer }, a.createElement(r.Z, { style: S.iconContainer }, a.createElement(l.Z, { "aria-label": "Pay your bills icon", aspectMode: s.Z.SQUARE, image: d })), a.createElement(r.Z, { style: S.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: S.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" }))));
                },
                k = { context: "PAY_YOUR_BILLS" },
                w = () => {
                    const e = (0, o.useHistory)(),
                        { handlePreferencesChange: t, isInProgress: n, preferences: l } = (0, g.Z)(),
                        s = (0, f.jh)(),
                        [u, d] = a.useState(l.enable_bill_pay),
                        p = a.useMemo(() => (u ? "Done" : "Enable"), [u]),
                        y = a.useCallback(() => {
                            u ? e.goBack() : (d(!0), t("enable_bill_pay", !0));
                        }, [t, e, u]);
                    return a.createElement(r.Z, { style: s.footer }, a.createElement(c.ZP, { disabled: n, onClick: y, type: "primaryFilled" }, p), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, n ? a.createElement(m.Z, null) : "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                v = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(h.H, { errorConfig: k }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(w, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: _ }, a.createElement(h.H, { errorConfig: k }, a.createElement(C, e)))));
                },
                S = u.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24, marginBottom: e.spaces.space40 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { marginBottom: e.spaces.space24 } })),
                x = a.memo(v);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                l = n(514639),
                s = n(725516),
                i = n(160144);
            const c = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.z)(),
                        o = t.location?.state?.redirectPath,
                        c = t.location?.state?.redirectState,
                        m = t.location?.state?.closePath,
                        u = t.location?.state?.field,
                        d = a.useMemo(() => {
                            switch (u) {
                                case "name":
                                    return l.P_.updateName;
                                case "address":
                                    return l.P_.updateAddress;
                                default:
                                    return;
                            }
                        }, [u]);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "personal-update", action: "impression" });
                        }, [n]),
                        a.createElement(i.Z, { additionalParams: u ? [{ key: "what", value: u }] : void 0, closePath: m, linkType: d, redirectPath: o, redirectState: c })
                    );
                },
                m = { context: "PersonalUpdate" };
            function u(e) {
                return a.createElement(o.H, { errorConfig: m }, a.createElement(c, e));
            }
            const d = a.memo(u);
        },
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(207162);
            const s = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: o.Rz.credit })),
                i = r.memo(s);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                o = n(514639),
                l = n(445664),
                s = n(615027);
            const i = { context: "PaymentsRouterSwitch" },
                c = { type: "CustomRetry", content: () => a.createElement(s.Z, { to: o.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, l.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(s.Z, { to: t });
                },
                u = (e) => a.createElement(r.N, { errorConfig: i, fallback: c }, a.createElement(m, e)),
                d = a.memo(u);
        },
        826908: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Ue });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(222718),
                l = n(952793),
                s = n(514639),
                i = n(293115),
                c = n(615027),
                m = n(221716),
                u = n(261906),
                d = n(722610);
            const p = "Security & Privacy",
                y = "Personal information",
                h = "Limits",
                E = "Monthly Statements";
            var b = n(325686),
                g = n(731708),
                f = n(167630),
                _ = n(190286),
                Z = n(392237),
                P = n(436117),
                C = n(922281),
                k = n(736063),
                w = n(782642),
                v = n(445664),
                S = n(312771),
                x = n(696445),
                A = n(392046),
                T = n(600568),
                D = n(295747),
                I = n(221554),
                B = n(226332),
                M = n(743080),
                R = n(727384),
                L = n(195816),
                z = (n(585488), n(351743)),
                O = n.n(z);
            const U = L.Z,
                H = () => {
                    const [e, t] = O()(U);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            t ? a(t) : n();
                                        },
                                        updater: R.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                N = "Link a bank account",
                X = "Link a card",
                F = { pathname: s.ac, state: { redirectPath: s.iE.bankAccounts } },
                $ = { pathname: s.UA, state: { redirectPath: s.iE.bankAccounts } },
                q = () => {
                    const { paymentMethods: e, refetchStatus: t } = (0, B.Z)(),
                        { permissions: n } = (0, v.Z)({ fetchKey: "Payments" }),
                        o = (0, r.useHistory)(),
                        [l, i] = a.useState(null),
                        [c, m] = a.useState(null),
                        u = (0, w.p)(),
                        [d, p] = H(),
                        y = n?.includes(P.d.DeletePaymentMethod),
                        h = n?.includes(P.d.CreatePaymentMethod),
                        E = a.useCallback(
                            (e) => () => {
                                o.push(s.VN, { redirectPath: s.iE.bankAccounts, paymentMethodId: e });
                            },
                            [o],
                        ),
                        Z = a.useCallback(
                            (e) => () => {
                                m(e);
                            },
                            [m],
                        ),
                        k = a.useCallback(
                            (e) => () => {
                                i(e), m(null);
                            },
                            [i],
                        ),
                        x = a.useCallback(() => {
                            m(null);
                        }, []),
                        L = a.useCallback(() => {
                            l &&
                                d({ paymentMethodId: l })
                                    .then(() => {
                                        i(null), u({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        u({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [u, l, d]),
                        z = e?.filter((e) => "XPaymentsBankAccountPaymentMethod" === e?.core?.details?.__typename) || [],
                        O = e?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [],
                        U = ({ accounts: e, sectionTitle: t, showAddButton: n, type: r }) =>
                            a.createElement(
                                b.Z,
                                { style: V.accountSection },
                                a.createElement(g.ZP, { color: "gray700", size: "body", weight: "medium" }, t),
                                e?.map((e) => {
                                    const t = (0, R.Ou)(e),
                                        n = t?.id;
                                    return t && n ? a.createElement(A.Z, { account: t, handleExpand: Z(t), key: n, onClick: e?.core?.details?.status === C.D.LoginRequired && h ? E(n) : void 0 }) : null;
                                }),
                                n ? a.createElement(D.Z, { disabled: !h, label: "XPaymentsBankAccountPaymentMethod" === r ? N : X, link: h ? ("XPaymentsBankAccountPaymentMethod" === r ? F : $) : void 0, name: "XPaymentsBankAccountPaymentMethod" === r ? N : X, variant: "row" }) : null,
                            ),
                        q = a.createElement(b.Z, { style: V.accountSection }, (z.length > 0 || h) && U({ accounts: z, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts", showAddButton: !!h }), (O.length > 0 || h) && U({ accounts: O, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards", showAddButton: !!h }));
                    return a.createElement(I.Z, { title: "Linked accounts" }, a.createElement(b.Z, { style: M.ZP.settingsScreenContainer }, t === S.iF.LOADING ? a.createElement(f.Z, null) : a.createElement(b.Z, { style: M.ZP.settingsScreenContainer }, q), c ? a.createElement(T.Z, { account: c, onDone: x, onRemove: y && c.id ? k(c.id) : void 0 }) : null, l ? a.createElement(_.Z, { confirmButtonDisabled: p, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => i(null), onConfirm: L, text: "Your account will be removed from X" }) : null));
                },
                Y = { context: "PaymentsSettingsExternalAccounts" },
                V = Z.default.create((e) => ({ container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function W(e) {
                return a.createElement(k.H, { errorConfig: Y }, a.createElement(q, e));
            }
            const Q = (0, x.R)(a.memo(W), { permissionsAllOf: [P.d.GetAccounts, P.d.GetPaymentMethod], permissionsAnyOf: null });
            var j = n(443781),
                K = n(889738),
                G = n(844685),
                J = n(165822);
            const ee = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: o }) => {
                    const l = (0, M.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(G.Z, { rightControl: n, style: M.ZP.settingHeader, subtext: r, text: o }), a.createElement(J.Z, { "aria-label": o, containerStyle: l.tile, stackLayoutUpperStyle: t ?? M.ZP.upper, upper: e, withInteractiveStyling: !1 }));
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
                    const { featureSwitches: t } = (0, j.QZ)(),
                        { limits: n } = (0, K.Z)(),
                        r = ae.map((e) => {
                            const r = e.content.reduce(
                                    (e, t) => {
                                        const a = n?.find((e) => e.limit_type === t.limit_type),
                                            r = a?.amount?.local_micro;
                                        "-1" === r && (e.isUnlimited = !0);
                                        const o = parseFloat(r),
                                            l = o >= 0 ? (0, R.p2)({ amount: o, currency: a?.amount?.currency }) : null,
                                            s = a?.used?.local_micro ? (0, R.vw)({ amount: a?.used?.local_micro, currency: a?.used?.currency }) : null;
                                        return l && e.limits.push({ label: t.amountLabel({ formattedAmount: l }), usage: s ? ne({ usedAmount: s }) : null }), e;
                                    },
                                    { limits: [], isUnlimited: !1 },
                                ),
                                o = a.createElement(
                                    b.Z,
                                    { style: M.ZP.setting },
                                    a.createElement(
                                        b.Z,
                                        { style: oe.content },
                                        r.limits.length > 0
                                            ? a.createElement(
                                                  b.Z,
                                                  { style: oe.limit },
                                                  r.limits.map(({ label: e, usage: t }, n) => a.createElement(g.ZP, { color: "gray700", key: n }, e, t ? a.createElement(g.ZP, { color: "gray700", style: oe.usage }, t) : null)),
                                              )
                                            : r.isUnlimited
                                              ? a.createElement(g.ZP, { color: "gray700" }, "Unlimited")
                                              : null,
                                    ),
                                );
                            return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(b.Z, { key: e.key, style: oe.limitRoot, testID: e.key }, a.createElement(te, { content: o, title: e.title })) : null;
                        });
                    return a.createElement(I.Z, { title: h }, a.createElement(b.Z, { style: M.ZP.settingsScreenContainer }, r));
                },
                oe = Z.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, usage: { marginStart: e.spaces.space4 } })),
                le = { context: "PaymentsSettingsLimits" };
            function se(e) {
                return a.createElement(k.H, { errorConfig: le }, a.createElement(re, e));
            }
            const ie = (0, x.R)(a.memo(se), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null });
            var ce = n(779610),
                me = n(457311),
                ue = n(191796),
                de = n(463963),
                pe = n(698478),
                ye = n(348340);
            const he = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, ye.Z)({ type: de.E.DocumentTypeMonthlyStatement }),
                        [o, l] = a.useState(),
                        s = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, pe.x5)(t) ? (l(a), n()?.then((0, ye.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        i = a.useCallback((e) => () => (o === e && r === S.ZP.LOADING ? a.createElement(f.Z, { size: "small" }) : a.createElement(ue.default, { style: M.ZP.centeredIcon })), [o, r]);
                    return a.createElement(
                        I.Z,
                        { title: E },
                        a.createElement(
                            b.Z,
                            { style: M.ZP.settingsScreenContainer },
                            t && t.length > 0
                                ? t.map(({ documents: e, year: t }) => {
                                      const n = a.createElement(
                                          b.Z,
                                          { style: M.ZP.setting },
                                          e.map((e) => {
                                              const { start_date: n, url: r } = e;
                                              if (!r) return;
                                              const o = (0, R.Qu)(n),
                                                  l = o.getMonth(),
                                                  c = `${t}-${l}`;
                                              return a.createElement(ce.Z, { key: c, label: o.toLocaleString("default", { month: "long" }), onPress: s(e, c), renderRightContent: i(c), styleOverride: M.ZP.cursor, withoutArrow: !0 });
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
                return a.createElement(k.H, { errorConfig: Ee }, a.createElement(he, e));
            }
            const ge = (0, x.R)(a.memo(be), { permissionsAllOf: [P.d.GetDocuments], permissionsAnyOf: null });
            var fe = n(154003),
                _e = n(160144);
            const Ze = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                Pe = (e) => {
                    const { fetchCount: t, permissions: n, roles: o } = (0, v.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        i = n?.includes(P.d.VerifyIdentity),
                        c = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case _e.T.edit:
                                        if (!o?.includes("KycVerified")) return void l.push(s.AU.tier2.verifyIdentityPath, { redirectPath: s.iE.personal, closePath: s.iE.personal, requestedField: t });
                                        l.push(s.f0, { field: t });
                                        break;
                                    case _e.T.failure:
                                        l.replace(s.gp);
                                }
                            },
                            [l, o],
                        ),
                        m = a.useMemo(() => o?.includes("KycVerified"), [o]),
                        u = a.useMemo(() => {
                            const e = o?.includes("KycDocumentsVerified");
                            return a.createElement(b.Z, { style: [M.ZP.setting, ve.idVerificationContent] }, a.createElement(g.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(fe.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(fe.ZP, { disabled: !i, link: i ? Ze : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [i, o]);
                    return a.createElement(I.Z, { title: y }, a.createElement(b.Z, { style: M.ZP.settingsScreenContainer }, a.createElement(te, { content: a.createElement(_e.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: ve.infoRoot, title: "Basic information" }), m && a.createElement(te, { content: u, title: "Identity information" })));
                },
                Ce = { context: "PaymentsSettingsPersonal" };
            function ke(e) {
                return a.createElement(k.H, { errorConfig: Ce }, a.createElement(Pe, e));
            }
            const we = (0, x.R)(a.memo(ke), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                ve = Z.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var Se = n(954110),
                xe = n(24568);
            const Ae = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                Te = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                De = (e) => {
                    const { permissions: t } = (0, v.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, j.QZ)(),
                        { handlePreferencesChange: r, preferences: o } = (0, xe.Z)(),
                        l = t?.includes(P.d.UpdatePin),
                        i = !(0, R.aY)(t),
                        c = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        u = n.isTrue("payments_card_spend_enabled"),
                        d = a.createElement(
                            b.Z,
                            { style: M.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                b.Z,
                                null,
                                Ae.map(({ feature: e, helpText: t, label: l, name: s }) => (!e || n.isTrue(e) ? a.createElement(Se.Z, { checked: !!o[s], disabled: i, helpText: t, key: s, label: l, name: s, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        y = a.createElement(
                            b.Z,
                            { style: M.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                b.Z,
                                null,
                                Te.map(({ feature: e, helpText: t, label: l, name: s }) => (!e || n.isTrue(e) ? a.createElement(Se.Z, { checked: !!o[s], disabled: i, helpText: t, key: s, label: l, name: s, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        h = a.createElement(b.Z, { style: M.ZP.setting }, a.createElement(Se.Z, { checked: !!o.enable_bill_pay, disabled: i, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        E = a.createElement(b.Z, { style: M.ZP.setting }, a.createElement(Se.Z, { checked: !!o.enable_card_payments, disabled: i, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(I.Z, { title: p }, a.createElement(b.Z, { style: M.ZP.settingsScreenContainer }, c ? a.createElement(te, { content: d, rightControl: l ? a.createElement(g.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(te, { content: y, title: "Enhanced privacy" }), m ? a.createElement(te, { content: h, title: "Bill pay" }) : null, u ? a.createElement(te, { content: E, title: "Card payments" }) : null));
                },
                Ie = { context: "PaymentsSettingsSecurityPrivacy" };
            function Be(e) {
                return a.createElement(k.H, { errorConfig: Ie }, a.createElement(De, e));
            }
            const Me = (0, x.R)(a.memo(Be), { permissionsAllOf: [P.d.GetAccounts], permissionsAnyOf: null }),
                Re = { page: "money", section: "settings" },
                Le = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        c = (0, l.hC)("payments_pin_enabled"),
                        m = (0, l.hC)("payments_account_details_enabled"),
                        b = c || m,
                        g = (0, l.hC)("payments_settings_documents_enabled"),
                        f = a.useCallback(() => {
                            t.push(s.gp);
                        }, [t]),
                        _ = a.useMemo(() => [{ path: s.iE.personal, label: y }, { path: s.iE.bankAccounts, label: "Linked accounts" }, { path: s.iE.limits, label: h }, b ? { path: s.iE.securityPrivacy, label: p } : null, g ? { path: s.iE.monthlyStatements, label: E } : null], [b, g]);
                    return a.createElement(
                        i.nO,
                        { namespace: Re },
                        a.createElement(
                            o.Z,
                            { onBackClick: f, screenType: "root", showBackButtonOnRoot: !0, title: "Money Settings" },
                            a.createElement(
                                d.Z,
                                null,
                                _.map((e, t) => e && a.createElement(u.Z, { isActive: n.pathname === e.path, isFirst: 0 === t, isLast: t === _.length - 1, key: e.path, label: e.label, link: e.path })),
                            ),
                        ),
                    );
                },
                ze = () => a.createElement(c.Z, { to: s.iE.personal }),
                Oe = (e) => {
                    const t = (0, l.hC)("payments_pin_enabled"),
                        n = (0, l.hC)("payments_account_details_enabled"),
                        o = t || n,
                        i = (0, l.hC)("payments_settings_documents_enabled");
                    return a.createElement(m.Z, { perColumnScroll: !0, rootComponent: Le, rootDetailContent: ze }, a.createElement(r.Route, { component: we, exact: !0, key: "money_settings_personal", path: s.iE.personal }), a.createElement(r.Route, { component: Q, exact: !0, key: "money_settings_bank_accounts", path: s.iE.bankAccounts }), a.createElement(r.Route, { component: ie, exact: !0, key: "money_settings_limits", path: s.iE.limits }), i && a.createElement(r.Route, { component: ge, exact: !0, key: "money_settings_monthly_statements", path: s.iE.monthlyStatements }), o && a.createElement(r.Route, { component: Me, exact: !0, key: "money_settings_security_privacy", path: s.iE.securityPrivacy }));
                },
                Ue = a.memo(Oe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => C, default: () => S, styles: () => v });
            var a = n(202784),
                r = n(325686),
                o = n(530525),
                l = n(439592),
                s = n(731708),
                i = n(154003),
                c = n(392237),
                m = n(515510),
                u = n(287688),
                d = n(980407),
                p = n(652904),
                y = n(736063),
                h = n(445664),
                E = n(293115),
                b = n(978167),
                g = n(934265),
                f = n(743080);
            const _ = { page: "money", section: "setup-direct-deposit" },
                Z = "Set up Direct Deposit",
                P = `${Z} - Account details`,
                C = (e) => {
                    const t = (0, f.jh)(),
                        { interest: n } = (0, g.Z)(),
                        { roles: i } = (0, h.Z)({ fetchKey: "Payments" }),
                        c = i?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = c && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: v.headerContainer }, a.createElement(r.Z, { style: v.iconContainer }, a.createElement(o.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: l.Z.SQUARE, image: u })), a.createElement(r.Z, { style: v.titleContainer }, a.createElement(s.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(s.ZP, { color: "gray800", size: "body", weight: "normal" }, "Give the details below to your employer, or use them in your HR / payroll software."))), a.createElement(r.Z, { style: v.accountDetailsContainers }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: v.premiumBannerWrapper }, a.createElement(r.Z, { style: v.premiumBannerBackground }), a.createElement(r.Z, { style: v.premiumBannerContent }, a.createElement(s.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(s.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                k = { context: "SETUP_DIRECT_DEPOSIT" },
                w = (e) => {
                    const { history: t } = e,
                        n = (0, f.jh)(),
                        o = a.useCallback(() => t.goBack(), [t]),
                        l = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        c = a.createElement(r.Z, { style: n.footer }, a.createElement(i.ZP, { onClick: l, type: "primaryFilled" }, "Done"), a.createElement(s.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: c, history: t, onBackClick: o, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: _ }, a.createElement(y.H, { errorConfig: k }, a.createElement(C, e))));
                },
                v = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                S = a.memo(w);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                l = n(154003),
                s = n(731708),
                i = n(661810),
                c = n(568320),
                m = n(880428),
                u = n(357818),
                d = n(980407),
                p = n(736063),
                y = n(514639),
                h = n(293115),
                E = n(634455),
                b = n(477922),
                g = n(615954),
                f = n(89319),
                _ = n(448518),
                Z = n(655750),
                P = n(48646),
                C = n(150855),
                k = n(972758),
                w = n(749286),
                v = n(467734),
                S = n(464978),
                x = n(743080),
                A = n(727384);
            const T = { page: "money", section: "transaction-details" },
                D = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                I = "Amount",
                B = (e) => {
                    const { history: t } = e,
                        n = (0, o.useParams)().transactionId,
                        p = (0, x.jh)(),
                        { get_transaction_by_id: B } = (0, S.Z)(n || ""),
                        { __id: M, amount_local_micro: R, authorization_method: L, availability_date: z, base_amount_micro: O, challenge_id: U, created_at: H, currency: N, description: X, details: F, id: $, product_code: q, reason_code: Y, total_fees_micro: V, transaction_rail: W, transaction_status: Q, transaction_type: j } = B ?? {},
                        K = F?.receiver_results?.result,
                        G = F?.sender_results?.result,
                        J = F?.merchant_details?.merchant_results?.result,
                        ee = F?.payment_method,
                        te = F?.merchant_details,
                        ne = F?.reference_transaction_id,
                        ae = (0, v.Z)({ senderId: G?.rest_id }),
                        re = (0, A.p6)(z),
                        oe = (0, x.JU)(),
                        le = (0, A.y4)({ feeAmount: V, totalAmount: R, baseAmount: O }),
                        se = q === m.x.Interest,
                        ie = se && j === u.x.Deposit,
                        ce = se && j === u.x.Transfer,
                        me = j === u.x.Deposit,
                        ue = j === u.x.Withdraw,
                        de = q === m.x.Transfer && !(me || ue),
                        pe = se || "User" !== K?.__typename || "User" !== G?.__typename ? null : ae ? K : G,
                        ye = (0, A.zx)({ referenceTransactionId: ne, transactionType: j }),
                        he = (0, A.qU)({ transactionType: j, productCode: q }),
                        Ee = me || ue || he ? (0, A.Ou)(ee) : null,
                        be = pe?.core?.screen_name,
                        ge = (0, A.Q1)({ status: Q, transactionType: j, isViewerSender: ae, createdAt: H, productCode: q, description: X, reasonCode: Y }),
                        fe = G?.core?.screen_name,
                        _e = K?.core?.screen_name,
                        Ze = me ? Ee : null,
                        Pe = ue ? Ee : null,
                        Ce = (0, A.Bl)({ status: Q }),
                        ke = (0, A._T)({ status: Q }),
                        we = "/notifications" === t.location.state?.previousPath && !ie && (Ce || ke),
                        ve = (0, A.EQ)({ productCode: q, transactionType: j }),
                        Se = (0, A.zK)({ transactionType: j, productCode: q, merchantDetails: te, amountType: ge.amountType }),
                        xe = Se && Se.location && (0, A.T7)(Se.location),
                        Ae = (0, A.wg)({ method: L, rail: W }),
                        Te = ve || he,
                        De = (0, A.pQ)({ productCode: q, transactionType: j, account: Ee }),
                        Ie = a.useMemo(() => (n ? a.createElement(f.Z, { reportedHandle: be, transactionId: n }) : null), [n, be]),
                        Be = (0, A.XT)({ status: Q, transactionType: j, isViewerSender: ae }) || we,
                        Me = a.useCallback(() => {
                            D.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Re = Be ? a.createElement(r.Z, { style: p.footer }, $ ? a.createElement(r.Z, { style: x.YP.actions }, a.createElement(_.Z, { amount: R, challengeId: U, currency: N, isViewerSender: ae, receiverScreenName: _e, recordId: M, senderScreenName: fe, status: Q, transactionId: $, transactionType: j })) : null, we ? a.createElement(l.ZP, { link: y.gp, size: oe, style: x.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        h.nO,
                        { namespace: T },
                        a.createElement(
                            d.Z,
                            { bottomBar: Re, history: t, onBackClick: Me, rightControl: Ie, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: x.YP.content },
                                    De ? a.createElement(r.Z, { style: x.YP.gap }, a.createElement(b.KR, { size: "xJumbo", type: De.iconType, uri: De.uri }), a.createElement(k.Z, { size: "title4", title: De.title })) : pe ? a.createElement(w.Z, { avatarWithLink: !0, user: pe, usernameWithLink: !0 }) : Se ? (J && "User" === J.__typename ? a.createElement(w.Z, { avatarWithLink: !0, user: J, usernameWithLink: !0 }) : a.createElement(r.Z, { style: x.YP.gap }, a.createElement(b.G7, { size: "xJumbo", type: Se.type, uri: Se.logo }), a.createElement(g.Z, { name: Se.name, size: "title4" }))) : null,
                                    a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, ge.createdAt),
                                    a.createElement(r.Z, { style: [x.YP.gap, x.YP.marginTop] }, R ? a.createElement(E.Z, { amount: R, currency: N, hasCompleted: ke, type: ge.amountType }) : null, de ? (ge.description ? a.createElement(P.Z, { color: "gray700", note: ge.description }) : null) : a.createElement(s.ZP, { color: "gray700" }, le ? "Total" : I)),
                                    a.createElement(i.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: x.ZP.rowSpaceBetween }, a.createElement(Z.Z, { description: ge.status, title: "Status" }), re ? a.createElement(a.Fragment, null, a.createElement(c.default, { style: x.YP.arrow }), a.createElement(Z.Z, { description: re, title: "Funds available on" })) : null),
                                    le && V && "0" !== V && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: V, currency: N, size: "body", weight: "normal" }), title: "Fee" }),
                                    le && O && "0" !== O && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: O, currency: N, size: "body", weight: "normal" }), title: I }),
                                    Ze && a.createElement(Z.Z, { description: a.createElement(C.Z, { account: Ze, testId: "source" }), title: "Source" }),
                                    Pe && a.createElement(Z.Z, { description: a.createElement(C.Z, { account: Pe, testId: "destination" }), title: "Destination" }),
                                    ye ? a.createElement(Z.Z, { description: a.createElement(s.ZP, { color: "text", link: ye }, ne), title: "Original transaction" }) : null,
                                    ce && H ? a.createElement(Z.Z, { description: (0, A.nV)(H), title: "Period" }) : null,
                                    Se && Ee && Ee.issuedCardAccountName ? a.createElement(Z.Z, { description: a.createElement(C.Z, { account: Ee, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Ae ? a.createElement(Z.Z, { description: Ae, title: "Mode" }) : null,
                                    xe ? a.createElement(Z.Z, { description: xe, title: "Location" }) : null,
                                    a.createElement(Z.Z, { description: $, title: "Transaction ID" }),
                                    Te && X && a.createElement(Z.Z, { description: X, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                M = { context: "TRANSACTION_DETAIL" },
                R = (e) => a.createElement(p.H, { errorConfig: M }, a.createElement(B, e)),
                L = a.memo(R);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(554337);
            const s = (e) => r.createElement(l.Z, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                i = r.memo(s);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                l = n(514639),
                s = n(445664),
                i = n(827309),
                c = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, c.Z)(),
                        { isActive: o } = (0, s.Z)({ fetchKey: "Payments" }),
                        d = n && l.g7[n],
                        p = a.useCallback(() => {
                            t.replace(o ? l.gp : "/");
                        }, [t, o]),
                        { actionLabel: y, defaultSubtext: h, subtext: E } = o ? u.active : u.nonActive;
                    return a.createElement(i.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? E({ region: d }) : h, supportUrl: l.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(o.H, { errorConfig: p }, a.createElement(d, e)),
                h = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.4058a3aa.js.map
