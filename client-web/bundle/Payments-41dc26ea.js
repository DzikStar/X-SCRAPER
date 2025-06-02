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
                i = n(725516),
                c = n(43429),
                s = n(73863),
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
                k = n(413713),
                C = n(749286),
                v = n(934265),
                w = n(743080),
                A = n(727384),
                S = n(436117);
            const x = Object.freeze({ [c.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [c.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                T = Object.freeze({ [c.Rz.debit]: S.d.CreateTransfer, [c.Rz.credit]: S.d.RequestTransfer });
            var D = n(181234),
                I = n(351743),
                B = n.n(I),
                M = n(726426),
                R = n.n(M);
            const z = D.Z,
                L = () => {
                    const e = r.useMemo(() => R()(), []),
                        [t, n] = B()(z);
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
                                                i = e?.request_transfer?.errors;
                                            n ? o({ transactionId: n, challengeId: r, status: a }) : l(i || t);
                                        },
                                        updater: A.qQ,
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
                                                i = e?.create_transfer?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: r }) : l(i || t);
                                        },
                                        updater: A.qQ,
                                        onError: l,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                H = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, i.z)(),
                        l = (0, o.useHistory)(),
                        s = (0, w.jh)(),
                        b = (0, u.p)(ye, { user_id: n }).user.result,
                        { balance: S } = (0, v.Z)(),
                        { permissions: D, roles: I } = (0, _.Z)({ fetchKey: "Payments" }),
                        B = (0, A.MO)({ permissions: D }),
                        M = "User" === b?.__typename,
                        R = l.location?.state,
                        z = l.location.pathname,
                        [O, H] = r.useState(e ?? ""),
                        [F, X] = r.useState(!0),
                        [V, q] = r.useState(""),
                        [Y, $] = r.useState(null),
                        [W, j] = U(),
                        [Q, K] = L(),
                        G = r.useMemo(() => ({ ...R, userId: n, step: c.cX.reviewPane, amount: O }), [O, R, n]),
                        J = (0, f.p)(),
                        ee = r.useCallback(() => {
                            $(null);
                        }, []),
                        te = r.useMemo(() => ({ closePath: m.gp, redirectPath: z, redirectState: { userId: n, userScreenName: b?.core?.screen_name, amount: O, step: c.cX.reviewPane, transferDirection: t } }), [z, n, O, t, b]),
                        ne = r.useCallback((e) => {
                            q(e.target.value);
                        }, []),
                        ae = r.useCallback(
                            (e) => () => {
                                const t = T[e],
                                    r = (0, A.DO)({ roles: I, permissions: D, actionPermission: t }),
                                    o = { ...G, transferDirection: e };
                                if ((a.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) l.push(r, { redirectPath: z, redirectState: o, closePath: m.gp });
                                else {
                                    ee();
                                    const t = (0, A.Dc)(O),
                                        a = (0, A.p2)({ amount: t }),
                                        { successMessage: r } = x[e],
                                        o = r({ formattedAmount: a });
                                    (e === c.Rz.credit ? Q : W)({ amount: t.toString(), description: V, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: a } = e,
                                                r = a ? `${m.bR}/${a}` : m.bR;
                                            (0, A.i7)({ status: n }) ? t && l.push(m.vw, { challengeId: t, redirectPath: r, closePath: m.gp, successMessage: o, challengeInitiator: m.kW.transaction }) : (J({ text: o }), l.replace(r));
                                        })
                                        .catch((e) => {
                                            const t = (0, k.XE)({ errors: e, roles: I });
                                            t ? l.replace(t, te) : $(e);
                                        });
                                }
                            },
                            [I, D, G, a, l, z, ee, O, Q, W, V, n, J, te],
                        ),
                        re = j || K || !O || !F,
                        oe = !S?.available_amount_local_micro || !O || (0, A.UV)({ balanceAmountMicro: S.available_amount_local_micro, amount: O }),
                        le = re || !B,
                        ie = re || !oe,
                        ce = t ? x[t]?.title : null,
                        se = t === c.Rz.debit,
                        me = r.createElement(y.ZP, { disabled: le, onPress: ae(c.Rz.credit), size: "large", style: w.ZP.button, type: "primaryFilled" }, K ? r.createElement(h.Z, null) : "Request"),
                        ue = r.createElement(y.ZP, { disabled: ie, onPress: ae(c.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, j ? r.createElement(h.Z, null) : "Send Payment"),
                        de = r.createElement(p.Z, { style: s.footer }, Y ? r.createElement(k.ZP, { errors: Y, linkState: te, opts: { counterPartyScreenName: b?.core?.screen_name }, roles: I }) : null);
                    return M ? r.createElement(g.Z, { backButtonType: "back", bottomBar: Y ? de : void 0, history: l, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: s.container }, r.createElement(E.ZP, { align: "left", size: "title4", weight: "bold" }, ce ?? "Send or Request"), b && r.createElement(C.Z, { user: b, withCenterAlign: !0 }), r.createElement(Z.Z, { amount: O, balance: S, isValid: F, label: "Enter amount", name: "amount", setAmount: H, setIsValid: X, validateBalance: se }), r.createElement(P.Z, { maxLength: c.w8, onChange: ne, placeholder: "Optionally add a note", placeholderTextColor: N.placeholder.color, value: V }), r.createElement(p.Z, { style: w.ZP.actionButtons }, t ? r.createElement(r.Fragment, null, se ? ue : t === c.Rz.credit ? me : null) : r.createElement(r.Fragment, null, me, ue)))) : r.createElement(d.Z, { to: m.gp });
                },
                N = b.default.create((e) => ({ placeholder: { color: e.colors.gray400 } })),
                F = r.memo(H),
                X = s.Z,
                V = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, u.p)(X, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(F, { transferDirection: t, userId: a }) : r.createElement(d.Z, { to: m.gp });
                },
                q = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                Y = (e) => r.createElement(l.H, { errorConfig: q }, r.createElement(V, e)),
                $ = r.memo(Y);
            var W = n(874088),
                j = n(339110),
                Q = n(125363),
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
            const ie = (e) => `x.com${m.HM}/${e}`,
                ce = ({ message: e, screenName: t }) => r.createElement(p.Z, { style: se.root }, r.createElement(le.Z, { dimension: 90, link: ie(t) }), r.createElement(E.ZP, { color: "gray700" }, e)),
                se = b.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                me = r.memo(ce),
                ue = [j.my.PaymentsUsers],
                de = ({ transferDirection: e }) => {
                    const t = (0, i.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, w.jh)(),
                        l = n.location?.state,
                        s = n.location?.pathname,
                        u = (0, Q.v9)(K.ZP.selectViewerUser),
                        d = u?.id_str,
                        y = u?.screen_name,
                        h = e ? x[e] : {},
                        { scanMessage: b, title: f } = h,
                        _ = r.useCallback((e) => e === d, [d]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: s, state: { ...l, step: c.cX.reviewPane, userId: e } });
                            },
                            [t, n, s, l],
                        ),
                        P = r.useCallback(
                            (e) => {
                                if (e.type === j.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        k = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        C = r.useCallback(() => {
                            n.push(m.gp);
                        }, [n]);
                    return r.createElement(g.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: a.container }, r.createElement(E.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, f ?? "Send or Request"), r.createElement(p.Z, { style: w.ZP.content }, r.createElement(W.default, { alwaysOpen: !0, filter: ue, getItemIsDisabled: (e) => e.type === j.El.User && (_(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => P(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: j._4.Unknown, testID: "typeaheadInput" }), b && y ? r.createElement(me, { message: b, screenName: y }) : null, r.createElement(oe, { onItemClick: k, viewerUserId: d }))));
                },
                pe = r.memo(de),
                ye = a.Z,
                he = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, i.z)(),
                        a = (0, o.useParams)().screenName,
                        l = t.location?.state,
                        s = l?.step,
                        m = l?.userId,
                        u = l?.amount,
                        d = e.transferDirection ?? l?.transferDirection;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: s, component: d, action: "impression" });
                        }, [n, s, d]),
                        s === c.cX.reviewPane && m ? r.createElement(F, { amount: u, transferDirection: d, userId: m }) : a ? r.createElement($, { screenName: a, transferDirection: d }) : r.createElement(pe, { transferDirection: d })
                    );
                },
                Ee = { context: "PaymentsP2PTransfer" };
            function be(e) {
                return r.createElement(l.H, { errorConfig: Ee }, r.createElement(he, e));
            }
            const ge = r.memo(be);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(207162);
            const i = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                c = r.memo(i);
        },
        956110: (e, t, n) => {
            n.r(t), n.d(t, { PayYourBillsScreen: () => k, default: () => S, styles: () => A });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                l = n(530525),
                i = n(439592),
                c = n(731708),
                s = n(154003),
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
                k = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: A.headerContainer }, a.createElement(r.Z, { style: A.iconContainer }, a.createElement(l.Z, { "aria-label": "Pay your bills icon", aspectMode: i.Z.SQUARE, image: d })), a.createElement(r.Z, { style: A.titleContainer }, a.createElement(c.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(c.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: A.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" }))));
                },
                C = { context: "PAY_YOUR_BILLS" },
                v = () => {
                    const e = (0, o.useHistory)(),
                        { handlePreferencesChange: t, isInProgress: n, preferences: l } = (0, g.Z)(),
                        i = (0, f.jh)(),
                        [u, d] = a.useState(l.enable_bill_pay),
                        p = a.useMemo(() => (u ? "Done" : "Enable"), [u]),
                        y = a.useCallback(() => {
                            u ? e.goBack() : (d(!0), t("enable_bill_pay", !0));
                        }, [t, e, u]);
                    return a.createElement(r.Z, { style: i.footer }, a.createElement(s.ZP, { disabled: n, onClick: y, type: "primaryFilled" }, p), a.createElement(c.ZP, { align: "center", color: "gray700", size: "subtext2" }, n ? a.createElement(m.Z, null) : "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                w = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(h.H, { errorConfig: C }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(v, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: _ }, a.createElement(h.H, { errorConfig: C }, a.createElement(k, e)))));
                },
                A = u.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24, marginBottom: e.spaces.space40 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { marginBottom: e.spaces.space24 } })),
                S = a.memo(w);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                l = n(514639),
                i = n(725516),
                c = n(160144);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, i.z)(),
                        o = t.location?.state?.redirectPath,
                        s = t.location?.state?.redirectState,
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
                        a.createElement(c.Z, { additionalParams: u ? [{ key: "what", value: u }] : void 0, closePath: m, linkType: d, redirectPath: o, redirectState: s })
                    );
                },
                m = { context: "PersonalUpdate" };
            function u(e) {
                return a.createElement(o.H, { errorConfig: m }, a.createElement(s, e));
            }
            const d = a.memo(u);
        },
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(207162);
            const i = (e) => r.createElement(l.default, (0, a.Z)({}, e, { transferDirection: o.Rz.credit })),
                c = r.memo(i);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                o = n(514639),
                l = n(445664),
                i = n(615027);
            const c = { context: "PaymentsRouterSwitch" },
                s = { type: "CustomRetry", content: () => a.createElement(i.Z, { to: o.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, l.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(i.Z, { to: t });
                },
                u = (e) => a.createElement(r.N, { errorConfig: c, fallback: s }, a.createElement(m, e)),
                d = a.memo(u);
        },
        826908: (e, t, n) => {
            n.r(t), n.d(t, { default: () => xe });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(108362),
                l = n(252021),
                i = n(507651),
                c = n(952793),
                s = n(514639),
                m = n(293115),
                u = n(743080);
            var d = n(325686),
                p = n(731708),
                y = n(167630),
                h = n(190286),
                E = n(392237),
                b = n(436117),
                g = n(922281),
                f = n(736063),
                _ = n(782642),
                Z = n(445664),
                P = n(312771),
                k = n(696445),
                C = n(392046),
                v = n(600568),
                w = n(295747),
                A = n(226332),
                S = n(727384),
                x = n(195816),
                T = (n(585488), n(351743)),
                D = n.n(T);
            const I = x.Z,
                B = () => {
                    const [e, t] = D()(I);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            t ? a(t) : n();
                                        },
                                        updater: S.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                M = "Add Bank Account",
                R = "Add Debit Card",
                z = { pathname: s.ac, state: { redirectPath: s.iE.bankAccounts } },
                L = { pathname: s.UA, state: { redirectPath: s.iE.bankAccounts } },
                O = (e) => {
                    const { paymentMethods: t, refetchStatus: n } = (0, A.Z)(),
                        { permissions: o } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        [i, c] = a.useState(null),
                        [m, u] = a.useState(null),
                        E = (0, _.p)(),
                        [f, k] = B(),
                        x = o?.includes(b.d.DeletePaymentMethod),
                        T = o?.includes(b.d.CreatePaymentMethod),
                        D = a.useCallback(
                            (e) => () => {
                                l.push(s.VN, { redirectPath: s.iE.bankAccounts, paymentMethodId: e });
                            },
                            [l],
                        ),
                        I = a.useCallback(
                            (e) => () => {
                                u(e);
                            },
                            [u],
                        ),
                        O = a.useCallback(
                            (e) => () => {
                                c(e), u(null);
                            },
                            [c],
                        ),
                        U = a.useCallback(() => {
                            u(null);
                        }, []),
                        N = a.useCallback(() => {
                            i &&
                                f({ paymentMethodId: i })
                                    .then(() => {
                                        c(null), E({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        E({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [E, i, f]),
                        F = t?.filter((e) => "XPaymentsBankAccountPaymentMethod" === e?.core?.details?.__typename) || [],
                        X = t?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [],
                        V = ({ accounts: e, sectionTitle: t, showAddButton: n, type: r }) =>
                            a.createElement(
                                d.Z,
                                { style: H.accountSection },
                                a.createElement(p.ZP, { color: "gray700", size: "body", weight: "medium" }, t),
                                e?.map((e) => {
                                    const t = (0, S.Ou)(e),
                                        n = t?.id;
                                    return t && n ? a.createElement(C.Z, { account: t, handleExpand: I(t), key: n, onClick: e?.core?.details?.status === g.D.LoginRequired && T ? D(n) : void 0 }) : null;
                                }),
                                n ? a.createElement(w.Z, { disabled: !T, label: "XPaymentsBankAccountPaymentMethod" === r ? M : R, link: T ? ("XPaymentsBankAccountPaymentMethod" === r ? z : L) : void 0, name: "XPaymentsBankAccountPaymentMethod" === r ? M : R, variant: "row" }) : null,
                            ),
                        q = a.createElement(d.Z, { style: H.accountSection }, (F.length > 0 || T) && V({ accounts: F, type: "XPaymentsBankAccountPaymentMethod", sectionTitle: "Bank Accounts", showAddButton: !!T }), (X.length > 0 || T) && V({ accounts: X, type: "XPaymentsCreditCardPaymentMethod", sectionTitle: "Debit Cards", showAddButton: !!T }));
                    return a.createElement(a.Fragment, null, n === P.iF.LOADING ? a.createElement(y.Z, null) : a.createElement(d.Z, { style: H.screenContainer }, a.createElement(p.ZP, { size: "headline1", weight: "heavy" }, "Linked accounts"), q), m ? a.createElement(v.Z, { account: m, onDone: U, onRemove: x && m.id ? O(m.id) : void 0 }) : null, i ? a.createElement(h.Z, { confirmButtonDisabled: k, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => c(null), onConfirm: N, text: "Your account will be removed from X" }) : null);
                },
                U = { context: "PaymentsSettingsExternalAccounts" },
                H = E.default.create((e) => ({ screenContainer: { paddingHorizontal: e.spaces.space2, paddingVertical: e.componentDimensions.gutterVertical, gap: e.spaces.space24 }, container: { backgroundColor: e.colors.transparent }, accountSection: { gap: e.spaces.space24 } }));
            function N(e) {
                return a.createElement(f.H, { errorConfig: U }, a.createElement(O, e));
            }
            const F = (0, k.R)(a.memo(N), { permissionsAllOf: [b.d.GetAccounts, b.d.GetPaymentMethod], permissionsAnyOf: null });
            var X = n(443781),
                V = n(889738),
                q = n(844685),
                Y = n(165822);
            const $ = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: o }) => {
                    const l = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(q.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: o }), a.createElement(Y.Z, { "aria-label": o, containerStyle: l.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                W = a.memo($),
                j = [
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
                Q = (e) => {
                    const { featureSwitches: t } = (0, X.QZ)(),
                        { limits: n } = (0, V.Z)();
                    return j.map((e) => {
                        const r = e.content.reduce(
                                (e, t) => {
                                    const a = n?.find((e) => e.limit_type === t.limit_type),
                                        r = a?.amount?.local_micro;
                                    "-1" === r && (e.isUnlimited = !0);
                                    const o = parseFloat(r),
                                        l = o >= 0 ? (0, S.p2)({ amount: o, currency: a?.amount?.currency }) : null;
                                    return l && e.limits.push(t.amountLabel({ formattedAmount: l })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            o = a.createElement(
                                d.Z,
                                { style: u.ZP.setting },
                                a.createElement(
                                    d.Z,
                                    { style: K.content },
                                    r.limits.length > 0
                                        ? a.createElement(
                                              d.Z,
                                              { style: K.limit },
                                              r.limits.map((e) => a.createElement(p.ZP, { color: "gray700", key: e }, e)),
                                          )
                                        : r.isUnlimited
                                          ? a.createElement(p.ZP, { color: "gray700" }, "Unlimited")
                                          : null,
                                ),
                            );
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: K.limitRoot, testID: e.key }, a.createElement(W, { content: o, title: e.title })) : null;
                    });
                },
                K = E.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
                G = { context: "PaymentsSettingsLimits" };
            function J(e) {
                return a.createElement(f.H, { errorConfig: G }, a.createElement(Q, e));
            }
            const ee = (0, k.R)(a.memo(J), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null });
            var te = n(779610),
                ne = n(457311),
                ae = n(191796),
                re = n(463963),
                oe = n(698478),
                le = n(348340);
            const ie = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, le.Z)({ type: re.E.DocumentTypeMonthlyStatement }),
                        [o, l] = a.useState(),
                        i = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, oe.x5)(t) ? (l(a), n()?.then((0, le.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        c = a.useCallback((e) => () => (o === e && r === P.ZP.LOADING ? a.createElement(y.Z, { size: "small" }) : a.createElement(ae.default, { style: u.ZP.centeredIcon })), [o, r]);
                    return a.createElement(
                        a.Fragment,
                        null,
                        t && t.length > 0
                            ? t.map(({ documents: e, year: t }) => {
                                  const n = a.createElement(
                                      d.Z,
                                      { style: u.ZP.setting },
                                      e.map((e) => {
                                          const { start_date: n, url: r } = e;
                                          if (!r) return;
                                          const o = (0, S.Qu)(n),
                                              l = o.getMonth(),
                                              s = `${t}-${l}`;
                                          return a.createElement(te.Z, { key: s, label: o.toLocaleString("default", { month: "long" }), onPress: i(e, s), renderRightContent: c(s), styleOverride: u.ZP.cursor, withoutArrow: !0 });
                                      }),
                                  );
                                  return a.createElement(W, { content: n, key: t, title: t });
                              })
                            : a.createElement(ne.Z, { message: "You do not have any monthly statements yet." }),
                    );
                },
                ce = { context: "PaymentsSettingsMonthlyStatements" };
            function se(e) {
                return a.createElement(f.H, { errorConfig: ce }, a.createElement(ie, e));
            }
            const me = (0, k.R)(a.memo(se), { permissionsAllOf: [b.d.GetDocuments], permissionsAnyOf: null });
            var ue = n(154003),
                de = n(160144);
            const pe = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                ye = (e) => {
                    const { fetchCount: t, permissions: n, roles: o } = (0, Z.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        i = n?.includes(b.d.VerifyIdentity),
                        c = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case de.T.edit:
                                        if (!o?.includes("KycVerified")) return void l.push(s.AU.tier2.verifyIdentityPath, { redirectPath: s.iE.personal, closePath: s.iE.personal, requestedField: t });
                                        l.push(s.f0, { field: t });
                                        break;
                                    case de.T.failure:
                                        l.replace(s.gp);
                                }
                            },
                            [l, o],
                        ),
                        m = a.useMemo(() => o?.includes("KycVerified"), [o]),
                        y = a.useMemo(() => {
                            const e = o?.includes("KycDocumentsVerified");
                            return a.createElement(d.Z, { style: [u.ZP.setting, ge.idVerificationContent] }, a.createElement(p.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(ue.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(ue.ZP, { disabled: !i, link: i ? pe : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [i, o]);
                    return a.createElement(a.Fragment, null, a.createElement(W, { content: a.createElement(de.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: ge.infoRoot, title: "Basic information" }), m && a.createElement(W, { content: y, title: "Identity information" }));
                },
                he = { context: "PaymentsSettingsPersonal" };
            function Ee(e) {
                return a.createElement(f.H, { errorConfig: he }, a.createElement(ye, e));
            }
            const be = (0, k.R)(a.memo(Ee), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null }),
                ge = E.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var fe = n(954110),
                _e = n(24568);
            const Ze = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                Pe = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                ke = (e) => {
                    const { permissions: t } = (0, Z.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, X.QZ)(),
                        { handlePreferencesChange: r, preferences: o } = (0, _e.Z)(),
                        l = t?.includes(b.d.UpdatePin),
                        i = !(0, S.aY)(t),
                        c = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        y = n.isTrue("payments_card_spend_enabled"),
                        h = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                Ze.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(fe.Z, { checked: !!o[c], disabled: i, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        E = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                Pe.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(fe.Z, { checked: !!o[c], disabled: i, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        g = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(fe.Z, { checked: !!o.enable_bill_pay, disabled: i, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        f = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(fe.Z, { checked: !!o.enable_card_payments, disabled: i, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, c ? a.createElement(W, { content: h, rightControl: l ? a.createElement(p.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(W, { content: E, title: "Enhanced privacy" }), m ? a.createElement(W, { content: g, title: "Bill pay" }) : null, y ? a.createElement(W, { content: f, title: "Card payments" }) : null);
                },
                Ce = { context: "PaymentsSettingsSecurityPrivacy" };
            function ve(e) {
                return a.createElement(f.H, { errorConfig: Ce }, a.createElement(ke, e));
            }
            const we = (0, k.R)(a.memo(ve), { permissionsAllOf: [b.d.GetAccounts], permissionsAnyOf: null }),
                Ae = { page: "money", section: "settings" },
                Se = (e) => {
                    const { history: t } = e,
                        n = (0, u.jh)(),
                        d = (0, r.useLocation)(),
                        p = (0, c.hC)("payments_pin_enabled"),
                        y = (0, c.hC)("payments_account_details_enabled"),
                        h = p || y,
                        E = (0, c.hC)("payments_settings_documents_enabled"),
                        b = a.useMemo(() => [{ to: { pathname: s.iE.personal }, key: s.iE.personal, label: "Personal", isActive: () => d.pathname === s.iE.personal }, { to: { pathname: s.iE.bankAccounts }, key: s.iE.bankAccounts, label: "Linked accounts", isActive: () => d.pathname === s.iE.bankAccounts }, { to: { pathname: s.iE.limits }, key: s.iE.limits, label: "Limits", isActive: () => d.pathname === s.iE.limits }, h ? { to: { pathname: s.iE.securityPrivacy }, key: s.iE.securityPrivacy, label: "Security & Privacy", isActive: () => d.pathname === s.iE.securityPrivacy } : null, E ? { to: { pathname: s.iE.monthlyStatements }, key: s.iE.monthlyStatements, label: "Monthly statements", isActive: () => d.pathname === s.iE.monthlyStatements } : null], [d.pathname, h, E]),
                        g = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(o.Z, { style: n.root, withWideContainer: !0 }, a.createElement(i.Z, { isPillLink: !0, links: b }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: be, exact: !0, key: s.iE.personal, path: s.iE.personal }), a.createElement(r.Route, { component: F, exact: !0, key: s.iE.bankAccounts, path: s.iE.bankAccounts }), a.createElement(r.Route, { component: we, exact: !0, key: s.iE.securityPrivacy, path: s.iE.securityPrivacy }), a.createElement(r.Route, { component: ee, exact: !0, key: s.iE.limits, path: s.iE.limits }), a.createElement(r.Route, { component: me, exact: !0, key: s.iE.monthlyStatements, path: s.iE.monthlyStatements })))), [n.root, b]),
                        f = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(s.Sr);
                            e ? t.push(s.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: Ae }, a.createElement(l.Z, { backLocation: s.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: f, primaryContent: g, sidebarContent: null, title: "Settings" }));
                },
                xe = a.memo(Se);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => k, default: () => A, styles: () => w });
            var a = n(202784),
                r = n(325686),
                o = n(530525),
                l = n(439592),
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
                b = n(978167),
                g = n(934265),
                f = n(743080);
            const _ = { page: "money", section: "setup-direct-deposit" },
                Z = "Set up Direct Deposit",
                P = `${Z} - Account details`,
                k = (e) => {
                    const t = (0, f.jh)(),
                        { interest: n } = (0, g.Z)(),
                        { roles: c } = (0, h.Z)({ fetchKey: "Payments" }),
                        s = c?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = s && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.iconContainer }, a.createElement(o.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: l.Z.SQUARE, image: u })), a.createElement(r.Z, { style: w.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Give the details below to your employer, or use them in your HR / payroll software."))), a.createElement(r.Z, { style: w.accountDetailsContainers }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: w.premiumBannerWrapper }, a.createElement(r.Z, { style: w.premiumBannerBackground }), a.createElement(r.Z, { style: w.premiumBannerContent }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(i.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                C = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, f.jh)(),
                        o = a.useCallback(() => t.goBack(), [t]),
                        l = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        s = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { onClick: l, type: "primaryFilled" }, "Done"), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: s, history: t, onBackClick: o, withoutBottomBarMobile: !0 }, a.createElement(E.nO, { namespace: _ }, a.createElement(y.H, { errorConfig: C }, a.createElement(k, e))));
                },
                w = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                A = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => z });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                l = n(154003),
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
                b = n(477922),
                g = n(615954),
                f = n(89319),
                _ = n(448518),
                Z = n(655750),
                P = n(48646),
                k = n(150855),
                C = n(972758),
                v = n(749286),
                w = n(467734),
                A = n(464978),
                S = n(743080),
                x = n(727384);
            const T = { page: "money", section: "transaction-details" },
                D = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                I = "Amount",
                B = (e) => {
                    const { history: t } = e,
                        n = (0, o.useParams)().transactionId,
                        p = (0, S.jh)(),
                        { get_transaction_by_id: B } = (0, A.Z)(n || ""),
                        { __id: M, amount_local_micro: R, authorization_method: z, availability_date: L, base_amount_micro: O, challenge_id: U, created_at: H, currency: N, description: F, details: X, id: V, product_code: q, reason_code: Y, total_fees_micro: $, transaction_status: W, transaction_type: j } = B ?? {},
                        Q = X?.receiver_results?.result,
                        K = X?.sender_results?.result,
                        G = X?.merchant_details?.merchant_results?.result,
                        J = X?.payment_method,
                        ee = X?.merchant_details,
                        te = X?.reference_transaction_id,
                        ne = (0, w.Z)({ senderId: K?.rest_id }),
                        ae = (0, x.p6)(L),
                        re = (0, S.JU)(),
                        oe = (0, x.y4)({ feeAmount: $, totalAmount: R, baseAmount: O }),
                        le = q === m.x.Interest,
                        ie = le && j === u.x.Deposit,
                        ce = le && j === u.x.Transfer,
                        se = j === u.x.Deposit,
                        me = j === u.x.Withdraw,
                        ue = q === m.x.Transfer && !(se || me),
                        de = le || "User" !== Q?.__typename || "User" !== K?.__typename ? null : ne ? Q : K,
                        pe = (0, x.zx)({ referenceTransactionId: te, transactionType: j }),
                        ye = (0, x.qU)({ transactionType: j, productCode: q }),
                        he = se || me || ye ? (0, x.Ou)(J) : null,
                        Ee = de?.core?.screen_name,
                        be = (0, x.Q1)({ status: W, transactionType: j, isViewerSender: ne, createdAt: H, productCode: q, description: F, reasonCode: Y }),
                        ge = K?.core?.screen_name,
                        fe = Q?.core?.screen_name,
                        _e = se ? he : null,
                        Ze = me ? he : null,
                        Pe = (0, x.Bl)({ status: W }),
                        ke = (0, x._T)({ status: W }),
                        Ce = "/notifications" === t.location.state?.previousPath && !ie && (Pe || ke),
                        ve = (0, x.EQ)({ productCode: q, transactionType: j }),
                        we = (0, x.zK)({ transactionType: j, productCode: q, merchantDetails: ee, amountType: be.amountType }),
                        Ae = we && we.location && (0, x.T7)(we.location),
                        Se = (0, x.cI)({ method: z }),
                        xe = ve || ye,
                        Te = (0, x.pQ)({ productCode: q, transactionType: j, account: he }),
                        De = a.useMemo(() => (n ? a.createElement(f.Z, { reportedHandle: Ee, transactionId: n }) : null), [n, Ee]),
                        Ie = (0, x.XT)({ status: W, transactionType: j, isViewerSender: ne }) || Ce,
                        Be = a.useCallback(() => {
                            D.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Me = Ie ? a.createElement(r.Z, { style: p.footer }, V ? a.createElement(r.Z, { style: S.YP.actions }, a.createElement(_.Z, { amount: R, challengeId: U, currency: N, isViewerSender: ne, receiverScreenName: fe, recordId: M, senderScreenName: ge, status: W, transactionId: V, transactionType: j })) : null, Ce ? a.createElement(l.ZP, { link: y.gp, size: re, style: S.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        h.nO,
                        { namespace: T },
                        a.createElement(
                            d.Z,
                            { bottomBar: Me, history: t, onBackClick: Be, rightControl: De, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: S.YP.content },
                                    Te ? a.createElement(r.Z, { style: S.YP.gap }, a.createElement(b.KR, { size: "xJumbo", type: Te.iconType, uri: Te.uri }), a.createElement(C.Z, { size: "title4", title: Te.title })) : de ? a.createElement(v.Z, { avatarWithLink: !0, user: de, usernameWithLink: !0 }) : we ? (G && "User" === G.__typename ? a.createElement(v.Z, { avatarWithLink: !0, user: G, usernameWithLink: !0 }) : a.createElement(r.Z, { style: S.YP.gap }, a.createElement(b.G7, { size: "xJumbo", type: we.type, uri: we.logo }), a.createElement(g.Z, { name: we.name, size: "title4" }))) : null,
                                    a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, be.createdAt),
                                    a.createElement(r.Z, { style: [S.YP.gap, S.YP.marginTop] }, R ? a.createElement(E.Z, { amount: R, currency: N, hasCompleted: ke, type: be.amountType }) : null, ue ? (be.description ? a.createElement(P.Z, { color: "gray700", note: be.description }) : null) : a.createElement(i.ZP, { color: "gray700" }, oe ? "Total" : I)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: S.ZP.rowSpaceBetween }, a.createElement(Z.Z, { description: be.status, title: "Status" }), ae ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: S.YP.arrow }), a.createElement(Z.Z, { description: ae, title: "Funds available on" })) : null),
                                    oe && $ && "0" !== $ && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: $, currency: N, size: "body", weight: "normal" }), title: "Fee" }),
                                    oe && O && "0" !== O && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: O, currency: N, size: "body", weight: "normal" }), title: I }),
                                    _e && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: _e, testId: "source" }), title: "Source" }),
                                    Ze && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: Ze, testId: "destination" }), title: "Destination" }),
                                    pe ? a.createElement(Z.Z, { description: a.createElement(i.ZP, { color: "text", link: pe }, te), title: "Original transaction" }) : null,
                                    ce && H ? a.createElement(Z.Z, { description: (0, x.nV)(H), title: "Period" }) : null,
                                    we && he && he.issuedCardAccountName ? a.createElement(Z.Z, { description: a.createElement(k.Z, { account: he, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Se ? a.createElement(Z.Z, { description: Se, title: "Mode" }) : null,
                                    Ae ? a.createElement(Z.Z, { description: Ae, title: "Location" }) : null,
                                    a.createElement(Z.Z, { description: V, title: "Transaction ID" }),
                                    xe && F && a.createElement(Z.Z, { description: F, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                M = { context: "TRANSACTION_DETAIL" },
                R = (e) => a.createElement(p.H, { errorConfig: M }, a.createElement(B, e)),
                z = a.memo(R);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                l = n(554337);
            const i = (e) => r.createElement(l.Z, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                c = r.memo(i);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                l = n(514639),
                i = n(445664),
                c = n(827309),
                s = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.Z)(),
                        { isActive: o } = (0, i.Z)({ fetchKey: "Payments" }),
                        d = n && l.g7[n],
                        p = a.useCallback(() => {
                            t.replace(o ? l.gp : "/");
                        }, [t, o]),
                        { actionLabel: y, defaultSubtext: h, subtext: E } = o ? u.active : u.nonActive;
                    return a.createElement(c.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? E({ region: d }) : h, supportUrl: l.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(o.H, { errorConfig: p }, a.createElement(d, e)),
                h = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.678b14aa.js.map
