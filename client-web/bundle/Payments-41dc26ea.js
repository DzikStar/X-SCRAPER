"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-41dc26ea"],
    {
        207162: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => Ee, default: () => ge, participantQuery: () => ye });
            var a = n(120721),
                r = n(202784),
                l = (n(585488), n(107267)),
                o = n(736063),
                i = n(725516),
                s = n(43429),
                c = n(73863),
                m = n(514639),
                u = n(535338),
                d = n(615027),
                p = (n(136728), n(325686)),
                y = n(154003),
                E = n(167630),
                h = n(731708),
                b = n(855488),
                g = n(392237),
                f = n(980407),
                _ = n(782642),
                Z = n(445664),
                P = n(984067),
                k = n(413713),
                C = n(749286),
                v = n(934265),
                w = n(743080),
                S = n(727384),
                x = n(436117);
            const A = Object.freeze({ [s.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [s.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                I = Object.freeze({ [s.Rz.debit]: x.d.CreateTransfer, [s.Rz.credit]: x.d.RequestTransfer });
            var T = n(181234),
                D = n(351743),
                R = n.n(D),
                B = n(726426),
                M = n.n(B);
            const z = T.Z,
                L = () => {
                    const e = r.useMemo(() => M()(), []),
                        [t, n] = R()(z);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((l, o) => {
                                    t({
                                        variables: { amount_local_micro: n, sender_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.request_transfer?.id,
                                                a = e?.request_transfer?.transaction_status,
                                                r = e?.request_transfer?.challenge_id,
                                                i = e?.request_transfer?.errors;
                                            n ? l({ transactionId: n, challengeId: r, status: a }) : o(i || t);
                                        },
                                        updater: S.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const O = n(787560).Z,
                H = () => {
                    const e = r.useMemo(() => M()(), []),
                        [t, n] = R()(O);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((l, o) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.id,
                                                a = e?.create_transfer?.transaction_status,
                                                r = e?.create_transfer?.challenge_id,
                                                i = e?.create_transfer?.errors;
                                            n ? l({ transactionId: n, status: a, challengeId: r }) : o(i || t);
                                        },
                                        updater: S.qQ,
                                        onError: o,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                U = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, i.z)(),
                        o = (0, l.useHistory)(),
                        c = (0, w.jh)(),
                        g = (0, u.p)(ye, { user_id: n }).user.result,
                        { balance: x } = (0, v.Z)(),
                        { permissions: T, roles: D } = (0, Z.Z)({ fetchKey: "Payments" }),
                        R = (0, S.MO)({ permissions: T }),
                        B = "User" === g?.__typename,
                        M = o.location?.state,
                        z = o.location.pathname,
                        [O, U] = r.useState(e ?? ""),
                        [F, Y] = r.useState(!0),
                        [q, $] = r.useState(""),
                        [V, X] = r.useState(null),
                        [W, j] = H(),
                        [Q, K] = L(),
                        G = r.useMemo(() => ({ ...M, userId: n, step: s.cX.reviewPane, amount: O }), [O, M, n]),
                        J = (0, _.p)(),
                        ee = r.useCallback(() => {
                            X(null);
                        }, []),
                        te = r.useMemo(() => ({ closePath: m.gp, redirectPath: z, redirectState: { userId: n, userScreenName: g?.core?.screen_name, amount: O, step: s.cX.reviewPane, transferDirection: t } }), [z, n, O, t, g]),
                        ne = r.useCallback((e) => {
                            $(e.target.value);
                        }, []),
                        ae = r.useCallback(
                            (e) => () => {
                                const t = I[e],
                                    r = (0, S.DO)({ roles: D, permissions: T, actionPermission: t }),
                                    l = { ...G, transferDirection: e };
                                if ((a.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) o.push(r, { redirectPath: z, redirectState: l, closePath: m.gp });
                                else {
                                    ee();
                                    const t = (0, S.Dc)(O),
                                        a = (0, S.p2)({ amount: t }),
                                        { successMessage: r } = A[e],
                                        l = r({ formattedAmount: a });
                                    (e === s.Rz.credit ? Q : W)({ amount: t.toString(), description: q, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: a } = e,
                                                r = a ? `${m.bR}/${a}` : m.bR;
                                            (0, S.i7)({ status: n }) ? t && o.push(m.vw, { challengeId: t, redirectPath: r, closePath: m.gp, successMessage: l, challengeInitiator: m.kW.transaction }) : (J({ text: l }), o.replace(r));
                                        })
                                        .catch((e) => {
                                            const t = (0, k.XE)({ errors: e, roles: D });
                                            t ? o.replace(t, te) : X(e);
                                        });
                                }
                            },
                            [D, T, G, a, o, z, ee, O, Q, W, q, n, J, te],
                        ),
                        re = j || K || !O || !F,
                        le = !x?.available_amount_local_micro || !O || (0, S.UV)({ balanceAmountMicro: x.available_amount_local_micro, amount: O }),
                        oe = re || !R,
                        ie = re || !le,
                        se = r.useCallback(() => {
                            a.scribe({ page: "money", section: "p2p-transfer", element: "cancel", action: "click" });
                        }, [a]),
                        ce = t ? A[t]?.title : null,
                        me = t === s.Rz.debit,
                        ue = r.createElement(y.ZP, { disabled: oe, onPress: ae(s.Rz.credit), size: "large", style: w.ZP.button, type: "primaryFilled" }, K ? r.createElement(E.Z, null) : "Request"),
                        de = r.createElement(y.ZP, { disabled: ie, onPress: ae(s.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, j ? r.createElement(E.Z, null) : "Send"),
                        pe = r.createElement(p.Z, { style: c.footer }, V ? r.createElement(k.ZP, { errors: V, linkState: te, opts: { counterPartyScreenName: g?.core?.screen_name }, roles: D }) : null, r.createElement(p.Z, { style: w.ZP.actionButtons }, t ? r.createElement(r.Fragment, null, r.createElement(y.ZP, { link: m.gp, onPress: se, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Cancel"), me ? de : t === s.Rz.credit ? ue : null) : r.createElement(r.Fragment, null, ue, de)));
                    return B ? r.createElement(f.Z, { backButtonType: "back", bottomBar: pe, history: o, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: c.container }, r.createElement(h.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, ce ?? "Send or Request"), g && r.createElement(C.Z, { user: g, withCenterAlign: !0 }), r.createElement(P.Z, { amount: O, balance: x, isValid: F, label: "Enter amount", name: "amount", setAmount: U, setIsValid: Y, validateBalance: me }), r.createElement(b.Z, { label: "Optionally add a note", maxLength: s.w8, name: "description", onChange: ne, style: N.input, testID: "description", value: q }))) : r.createElement(d.Z, { to: m.gp });
                },
                N = g.default.create((e) => ({ input: { paddingHorizontal: "0px" } })),
                F = r.memo(U),
                Y = c.Z,
                q = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, u.p)(Y, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(F, { transferDirection: t, userId: a }) : r.createElement(d.Z, { to: m.gp });
                },
                $ = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                V = (e) => r.createElement(o.H, { errorConfig: $ }, r.createElement(q, e)),
                X = r.memo(V);
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
                        l = r.useCallback(
                            (t, n) => () => {
                                e(t, n);
                            },
                            [e],
                        );
                    return a && a.length > 0
                        ? r.createElement(
                              p.Z,
                              { style: re.root },
                              r.createElement(h.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  p.Z,
                                  null,
                                  a.map((e) => e && r.createElement(J.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: l(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                ne = { context: "RECENT_RECEIPIENTS" },
                ae = (e) => r.createElement(o.H, { errorConfig: ne }, r.createElement(te, e)),
                re = g.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                le = r.memo(ae);
            var oe = n(429371);
            const ie = (e) => `x.com${m.HM}/${e}`,
                se = ({ message: e, screenName: t }) => r.createElement(p.Z, { style: ce.root }, r.createElement(oe.Z, { dimension: 90, link: ie(t) }), r.createElement(h.ZP, { color: "gray700" }, e)),
                ce = g.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                me = r.memo(se),
                ue = [j.my.PaymentsUsers],
                de = ({ transferDirection: e }) => {
                    const t = (0, i.z)(),
                        n = (0, l.useHistory)(),
                        a = (0, w.jh)(),
                        o = n.location?.state,
                        c = n.location?.pathname,
                        u = (0, Q.v9)(K.ZP.selectViewerUser),
                        d = u?.id_str,
                        y = u?.screen_name,
                        E = e ? A[e] : {},
                        { scanMessage: b, title: g } = E,
                        _ = r.useCallback((e) => e === d, [d]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: c, state: { ...o, step: s.cX.reviewPane, userId: e } });
                            },
                            [t, n, c, o],
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
                    return r.createElement(f.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: a.container }, r.createElement(h.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, g ?? "Send or Request"), r.createElement(p.Z, { style: w.ZP.content }, r.createElement(W.default, { alwaysOpen: !0, filter: ue, getItemIsDisabled: (e) => e.type === j.El.User && (_(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => P(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: j._4.Unknown, testID: "typeaheadInput" }), b && y ? r.createElement(me, { message: b, screenName: y }) : null, r.createElement(le, { onItemClick: k, viewerUserId: d }))));
                },
                pe = r.memo(de),
                ye = a.Z,
                Ee = (e) => {
                    const t = (0, l.useHistory)(),
                        n = (0, i.z)(),
                        a = (0, l.useParams)().screenName,
                        o = t.location?.state,
                        c = o?.step,
                        m = o?.userId,
                        u = o?.amount,
                        d = e.transferDirection ?? o?.transferDirection;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: c, component: d, action: "impression" });
                        }, [n, c, d]),
                        c === s.cX.reviewPane && m ? r.createElement(F, { amount: u, transferDirection: d, userId: m }) : a ? r.createElement(X, { screenName: a, transferDirection: d }) : r.createElement(pe, { transferDirection: d })
                    );
                },
                he = { context: "PaymentsP2PTransfer" };
            function be(e) {
                return r.createElement(o.H, { errorConfig: he }, r.createElement(Ee, e));
            }
            const ge = r.memo(be);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(207162);
            const i = (e) => r.createElement(o.default, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                s = r.memo(i);
        },
        956110: (e, t, n) => {
            n.r(t), n.d(t, { PayYourBillsScreen: () => k, default: () => x, styles: () => S });
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                o = n(530525),
                i = n(439592),
                s = n(731708),
                c = n(154003),
                m = n(167630),
                u = n(392237),
                d = n(656805),
                p = n(980407),
                y = n(652904),
                E = n(736063),
                h = n(293115),
                b = n(978167),
                g = n(24568),
                f = n(743080);
            const _ = { page: "money", section: "pay-your-bills" },
                Z = "Pay your bills",
                P = `${Z} - Account Details`,
                k = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: S.headerContainer }, a.createElement(r.Z, { style: S.iconContainer }, a.createElement(o.Z, { "aria-label": "Pay your bills icon", aspectMode: i.Z.SQUARE, image: d })), a.createElement(r.Z, { style: S.titleContainer }, a.createElement(s.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(s.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: S.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" }))));
                },
                C = { context: "PAY_YOUR_BILLS" },
                v = () => {
                    const e = (0, l.useHistory)(),
                        { handlePreferencesChange: t, isInProgress: n, preferences: o } = (0, g.Z)(),
                        i = (0, f.jh)(),
                        [u, d] = a.useState(o.enable_bill_pay),
                        p = a.useMemo(() => (u ? "Done" : "Enable"), [u]),
                        y = a.useCallback(() => {
                            u ? e.goBack() : (d(!0), t("enable_bill_pay", !0));
                        }, [t, e, u]);
                    return a.createElement(r.Z, { style: i.footer }, a.createElement(c.ZP, { disabled: n, onClick: y, type: "primaryFilled" }, p), a.createElement(s.ZP, { align: "center", color: "gray700", size: "subtext2" }, n ? a.createElement(m.Z, null) : "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                w = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(E.H, { errorConfig: C }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(v, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(h.nO, { namespace: _ }, a.createElement(E.H, { errorConfig: C }, a.createElement(k, e)))));
                },
                S = u.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24, marginBottom: e.spaces.space40 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { marginBottom: e.spaces.space24 } })),
                x = a.memo(w);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                l = n(736063),
                o = n(514639),
                i = n(725516),
                s = n(160144);
            const c = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, i.z)(),
                        l = t.location?.state?.redirectPath,
                        c = t.location?.state?.redirectState,
                        m = t.location?.state?.closePath,
                        u = t.location?.state?.field,
                        d = a.useMemo(() => {
                            switch (u) {
                                case "name":
                                    return o.P_.updateName;
                                case "address":
                                    return o.P_.updateAddress;
                                default:
                                    return;
                            }
                        }, [u]);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "personal-update", action: "impression" });
                        }, [n]),
                        a.createElement(s.Z, { additionalParams: u ? [{ key: "what", value: u }] : void 0, closePath: m, linkType: d, redirectPath: l, redirectState: c })
                    );
                },
                m = { context: "PersonalUpdate" };
            function u(e) {
                return a.createElement(l.H, { errorConfig: m }, a.createElement(c, e));
            }
            const d = a.memo(u);
        },
        989583: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(207162);
            const i = (e) => r.createElement(o.default, (0, a.Z)({}, e, { transferDirection: l.Rz.credit })),
                s = r.memo(i);
        },
        736857: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(883229),
                l = n(514639),
                o = n(445664),
                i = n(615027);
            const s = { context: "PaymentsRouterSwitch" },
                c = { type: "CustomRetry", content: () => a.createElement(i.Z, { to: l.Cz }) },
                m = (e) => {
                    const { paymentsRedirectPath: t } = (0, o.Z)({ fetchKey: "PaymentsSwitcher" });
                    return a.createElement(i.Z, { to: t });
                },
                u = (e) => a.createElement(r.N, { errorConfig: s, fallback: c }, a.createElement(m, e)),
                d = a.memo(u);
        },
        826908: (e, t, n) => {
            n.r(t), n.d(t, { default: () => we });
            n(136728);
            var a = n(202784),
                r = n(107267),
                l = n(108362),
                o = n(252021),
                i = n(507651),
                s = n(952793),
                c = n(514639),
                m = n(293115),
                u = n(743080);
            var d = n(325686),
                p = n(154003),
                y = n(731708),
                E = n(167630),
                h = n(190286),
                b = n(379327),
                g = n(436117),
                f = n(922281),
                _ = n(736063),
                Z = n(782642),
                P = n(445664),
                k = n(312771),
                C = n(696445),
                v = n(392046),
                w = n(226332),
                S = n(727384),
                x = n(844685),
                A = n(165822);
            const I = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: l }) => {
                    const o = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(x.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: l }), a.createElement(A.Z, { "aria-label": l, containerStyle: o.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                T = a.memo(I);
            var D = n(195816),
                R = (n(585488), n(351743)),
                B = n.n(R);
            const M = D.Z,
                z = () => {
                    const [e, t] = B()(M);
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
                L = "You cannot link an account at this time.",
                O = { pathname: c.ac, state: { redirectPath: c.iE.bankAccounts } },
                H = { pathname: c.UA, state: { redirectPath: c.iE.bankAccounts } },
                U = (e) => {
                    const { paymentMethods: t, refetchStatus: n } = (0, w.Z)(),
                        { permissions: l } = (0, P.Z)({ fetchKey: "Payments" }),
                        o = (0, r.useHistory)(),
                        i = (0, s.hC)("payments_cards_as_payment_method_enabled"),
                        [m, _] = a.useState(null),
                        C = (0, Z.p)(),
                        [x, A] = z(),
                        I = l?.includes(g.d.DeletePaymentMethod),
                        D = l?.includes(g.d.CreatePaymentMethod),
                        R = a.useCallback(
                            (e) => () => {
                                o.push(c.VN, { redirectPath: c.iE.bankAccounts, paymentMethodId: e });
                            },
                            [o],
                        ),
                        B = a.useCallback(
                            (e) => () => {
                                _(e);
                            },
                            [_],
                        ),
                        M = a.useCallback(() => {
                            m &&
                                x({ paymentMethodId: m })
                                    .then(() => {
                                        _(null), C({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        C({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [C, m, x]),
                        U = a.createElement(
                            d.Z,
                            { style: u.ZP.setting },
                            t?.map((e) => {
                                const t = (0, S.Ou)(e),
                                    n = t?.id;
                                return t && n ? a.createElement(v.Z, { account: t, handleRemove: I ? B(n) : void 0, key: n, onClick: e?.core?.details?.status === f.D.LoginRequired && D ? R(n) : void 0 }) : null;
                            }),
                            a.createElement(p.ZP, { disabled: !D, icon: a.createElement(b.default, null), link: D ? O : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: L } }, "Add bank account")),
                            i ? a.createElement(p.ZP, { disabled: !D, icon: a.createElement(b.default, null), link: D ? H : void 0 }, a.createElement(y.ZP, { hoverLabel: D ? void 0 : { label: L } }, "Add card")) : null,
                        );
                    return a.createElement(a.Fragment, null, n === k.iF.LOADING ? a.createElement(E.Z, null) : a.createElement(T, { content: U, title: "Linked accounts" }), m ? a.createElement(h.Z, { confirmButtonDisabled: A, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => _(null), onConfirm: M, text: "Your account will be removed from X" }) : null);
                },
                N = { context: "PaymentsSettingsExternalAccounts" };
            function F(e) {
                return a.createElement(_.H, { errorConfig: N }, a.createElement(U, e));
            }
            const Y = (0, C.R)(a.memo(F), { permissionsAllOf: [g.d.GetAccounts, g.d.GetPaymentMethod], permissionsAnyOf: null });
            var q = n(392237),
                $ = n(443781),
                V = n(889738);
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
                W = (e) => {
                    const { featureSwitches: t } = (0, $.QZ)(),
                        { limits: n } = (0, V.Z)();
                    return X.map((e) => {
                        const r = e.content.reduce(
                                (e, t) => {
                                    const a = n?.find((e) => e.limit_type === t.limit_type),
                                        r = a?.amount?.local_micro;
                                    "-1" === r && (e.isUnlimited = !0);
                                    const l = parseFloat(r),
                                        o = l >= 0 ? (0, S.p2)({ amount: l, currency: a?.amount?.currency }) : null;
                                    return o && e.limits.push(t.amountLabel({ formattedAmount: o })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            l = a.createElement(
                                d.Z,
                                { style: u.ZP.setting },
                                a.createElement(
                                    d.Z,
                                    { style: j.content },
                                    r.limits.length > 0
                                        ? a.createElement(
                                              d.Z,
                                              { style: j.limit },
                                              r.limits.map((e) => a.createElement(y.ZP, { color: "gray700", key: e }, e)),
                                          )
                                        : r.isUnlimited
                                          ? a.createElement(y.ZP, { color: "gray700" }, "Unlimited")
                                          : null,
                                ),
                            );
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: j.limitRoot, testID: e.key }, a.createElement(T, { content: l, title: e.title })) : null;
                    });
                },
                j = q.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
                Q = { context: "PaymentsSettingsLimits" };
            function K(e) {
                return a.createElement(_.H, { errorConfig: Q }, a.createElement(W, e));
            }
            const G = (0, C.R)(a.memo(K), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null });
            var J = n(779610),
                ee = n(457311),
                te = n(191796),
                ne = n(463963),
                ae = n(698478),
                re = n(348340);
            const le = (e) => {
                    const { formattedDocuments: t, refetch: n, refetchStatus: r } = (0, re.Z)({ type: ne.E.DocumentTypeMonthlyStatement }),
                        [l, o] = a.useState(),
                        i = a.useCallback(
                            ({ url: e, url_expiry_time_millis: t }, a) =>
                                () => {
                                    e && t && !(0, ae.x5)(t) ? (o(a), n()?.then((0, re.b)(a))) : window.open(e, "_blank");
                                },
                            [n],
                        ),
                        s = a.useCallback((e) => () => (l === e && r === k.ZP.LOADING ? a.createElement(E.Z, { size: "small" }) : a.createElement(te.default, { style: u.ZP.centeredIcon })), [l, r]);
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
                                          const l = (0, S.Qu)(n),
                                              o = l.getMonth(),
                                              c = `${t}-${o}`;
                                          return a.createElement(J.Z, { key: c, label: l.toLocaleString("default", { month: "long" }), onPress: i(e, c), renderRightContent: s(c), styleOverride: u.ZP.cursor, withoutArrow: !0 });
                                      }),
                                  );
                                  return a.createElement(T, { content: n, key: t, title: t });
                              })
                            : a.createElement(ee.Z, { message: "You do not have any monthly statements yet." }),
                    );
                },
                oe = { context: "PaymentsSettingsMonthlyStatements" };
            function ie(e) {
                return a.createElement(_.H, { errorConfig: oe }, a.createElement(le, e));
            }
            const se = (0, C.R)(a.memo(ie), { permissionsAllOf: [g.d.GetDocuments], permissionsAnyOf: null });
            var ce = n(160144);
            const me = { pathname: c.AU.tier3.verifyIdentityPath, state: { redirectPath: c.iE.personal, closePath: c.iE.personal } },
                ue = (e) => {
                    const { fetchCount: t, permissions: n, roles: l } = (0, P.Z)({ fetchKey: "Payments" }),
                        o = (0, r.useHistory)(),
                        i = n?.includes(g.d.VerifyIdentity),
                        s = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case ce.T.edit:
                                        if (!l?.includes("KycVerified")) return void o.push(c.AU.tier2.verifyIdentityPath, { redirectPath: c.iE.personal, closePath: c.iE.personal, requestedField: t });
                                        o.push(c.f0, { field: t });
                                        break;
                                    case ce.T.failure:
                                        o.replace(c.gp);
                                }
                            },
                            [o, l],
                        ),
                        m = a.useMemo(() => l?.includes("KycVerified"), [l]),
                        E = a.useMemo(() => {
                            const e = l?.includes("KycDocumentsVerified");
                            return a.createElement(d.Z, { style: [u.ZP.setting, Ee.idVerificationContent] }, a.createElement(y.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(p.ZP, { disabled: !i, link: i ? me : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [i, l]);
                    return a.createElement(a.Fragment, null, a.createElement(T, { content: a.createElement(ce.Z, { eventCallback: s, key: t, linkType: c.P_.personal }), contentStyle: Ee.infoRoot, title: "Basic information" }), m && a.createElement(T, { content: E, title: "Identity information" }));
                },
                de = { context: "PaymentsSettingsPersonal" };
            function pe(e) {
                return a.createElement(_.H, { errorConfig: de }, a.createElement(ue, e));
            }
            const ye = (0, C.R)(a.memo(pe), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                Ee = q.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var he = n(954110),
                be = n(24568);
            const ge = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                fe = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                _e = (e) => {
                    const { permissions: t } = (0, P.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, $.QZ)(),
                        { handlePreferencesChange: r, preferences: l } = (0, be.Z)(),
                        o = t?.includes(g.d.UpdatePin),
                        i = !(0, S.aY)(t),
                        s = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        p = n.isTrue("payments_card_spend_enabled"),
                        E = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                ge.map(({ feature: e, helpText: t, label: o, name: s }) => (!e || n.isTrue(e) ? a.createElement(he.Z, { checked: !!l[s], disabled: i, helpText: t, key: s, label: o, name: s, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        h = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                fe.map(({ feature: e, helpText: t, label: o, name: s }) => (!e || n.isTrue(e) ? a.createElement(he.Z, { checked: !!l[s], disabled: i, helpText: t, key: s, label: o, name: s, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        b = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(he.Z, { checked: !!l.enable_bill_pay, disabled: i, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        f = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(he.Z, { checked: !!l.enable_card_payments, disabled: i, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, s ? a.createElement(T, { content: E, rightControl: o ? a.createElement(y.ZP, { link: c.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(T, { content: h, title: "Enhanced privacy" }), m ? a.createElement(T, { content: b, title: "Bill pay" }) : null, p ? a.createElement(T, { content: f, title: "Card payments" }) : null);
                },
                Ze = { context: "PaymentsSettingsSecurityPrivacy" };
            function Pe(e) {
                return a.createElement(_.H, { errorConfig: Ze }, a.createElement(_e, e));
            }
            const ke = (0, C.R)(a.memo(Pe), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                Ce = { page: "money", section: "settings" },
                ve = (e) => {
                    const { history: t } = e,
                        n = (0, u.jh)(),
                        d = (0, r.useLocation)(),
                        p = (0, s.hC)("payments_pin_enabled"),
                        y = (0, s.hC)("payments_account_details_enabled"),
                        E = p || y,
                        h = (0, s.hC)("payments_settings_documents_enabled"),
                        b = a.useMemo(() => [{ to: { pathname: c.iE.personal }, key: c.iE.personal, label: "Personal", isActive: () => d.pathname === c.iE.personal }, { to: { pathname: c.iE.bankAccounts }, key: c.iE.bankAccounts, label: "Linked accounts", isActive: () => d.pathname === c.iE.bankAccounts }, { to: { pathname: c.iE.limits }, key: c.iE.limits, label: "Limits", isActive: () => d.pathname === c.iE.limits }, E ? { to: { pathname: c.iE.securityPrivacy }, key: c.iE.securityPrivacy, label: "Security & Privacy", isActive: () => d.pathname === c.iE.securityPrivacy } : null, h ? { to: { pathname: c.iE.monthlyStatements }, key: c.iE.monthlyStatements, label: "Monthly statements", isActive: () => d.pathname === c.iE.monthlyStatements } : null], [d.pathname, E, h]),
                        g = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(l.Z, { style: n.root, withWideContainer: !0 }, a.createElement(i.Z, { isPillLink: !0, links: b }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: ye, exact: !0, key: c.iE.personal, path: c.iE.personal }), a.createElement(r.Route, { component: Y, exact: !0, key: c.iE.bankAccounts, path: c.iE.bankAccounts }), a.createElement(r.Route, { component: ke, exact: !0, key: c.iE.securityPrivacy, path: c.iE.securityPrivacy }), a.createElement(r.Route, { component: G, exact: !0, key: c.iE.limits, path: c.iE.limits }), a.createElement(r.Route, { component: se, exact: !0, key: c.iE.monthlyStatements, path: c.iE.monthlyStatements })))), [n.root, b]),
                        f = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(c.Sr);
                            e ? t.push(c.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: Ce }, a.createElement(o.Z, { backLocation: c.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: f, primaryContent: g, sidebarContent: null, title: "Settings" }));
                },
                we = a.memo(ve);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => k, default: () => S, styles: () => w });
            var a = n(202784),
                r = n(325686),
                l = n(530525),
                o = n(439592),
                i = n(731708),
                s = n(154003),
                c = n(392237),
                m = n(515510),
                u = n(287688),
                d = n(980407),
                p = n(652904),
                y = n(736063),
                E = n(445664),
                h = n(293115),
                b = n(978167),
                g = n(934265),
                f = n(743080);
            const _ = { page: "money", section: "setup-direct-deposit" },
                Z = "Set up Direct Deposit",
                P = `${Z} - Account details`,
                k = (e) => {
                    const t = (0, f.jh)(),
                        { interest: n } = (0, g.Z)(),
                        { roles: s } = (0, E.Z)({ fetchKey: "Payments" }),
                        c = s?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = c && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.iconContainer }, a.createElement(l.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: o.Z.SQUARE, image: u })), a.createElement(r.Z, { style: w.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Give the details below to your employer, or use them in your HR / payroll software."))), a.createElement(r.Z, { style: w.accountDetailsContainers }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" })), y && a.createElement(r.Z, { style: w.premiumBannerWrapper }, a.createElement(r.Z, { style: w.premiumBannerBackground }), a.createElement(r.Z, { style: w.premiumBannerContent }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(i.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                C = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, f.jh)(),
                        l = a.useCallback(() => t.goBack(), [t]),
                        o = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        c = a.createElement(r.Z, { style: n.footer }, a.createElement(s.ZP, { onClick: o, type: "primaryFilled" }, "Done"), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: c, history: t, onBackClick: l, withoutBottomBarMobile: !0 }, a.createElement(h.nO, { namespace: _ }, a.createElement(y.H, { errorConfig: C }, a.createElement(k, e))));
                },
                w = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, premiumBannerWrapper: { position: "relative", paddingVertical: e.spaces.space20 }, premiumBannerBackground: { position: "absolute", top: 0, start: -32, end: -32, bottom: 0, padding: e.spaces.space20, border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", zIndex: -1 }, premiumBannerContent: { display: "flex", flexDirection: "column", gap: e.spaces.space8, position: "relative", zIndex: 1 }, accountDetailsContainers: { marginTop: e.spaces.space40, marginBottom: e.spaces.space24 } })),
                S = a.memo(v);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => z });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(107267),
                o = n(154003),
                i = n(731708),
                s = n(661810),
                c = n(568320),
                m = n(880428),
                u = n(357818),
                d = n(980407),
                p = n(736063),
                y = n(514639),
                E = n(293115),
                h = n(634455),
                b = n(477922),
                g = n(615954),
                f = n(89319),
                _ = n(448518),
                Z = n(655750),
                P = n(48646),
                k = n(847211),
                C = n(972758),
                v = n(749286),
                w = n(467734),
                S = n(464978),
                x = n(743080),
                A = n(727384);
            const I = { page: "money", section: "transaction-details" },
                T = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                D = "Amount",
                R = (e) => {
                    const { history: t } = e,
                        n = (0, l.useParams)().transactionId,
                        p = (0, x.jh)(),
                        { get_transaction_by_id: R } = (0, S.Z)(n || ""),
                        { __id: B, amount_local_micro: M, authorization_method: z, availability_date: L, base_amount_micro: O, challenge_id: H, created_at: U, currency: N, description: F, details: Y, id: q, product_code: $, reason_code: V, total_fees_micro: X, transaction_status: W, transaction_type: j } = R ?? {},
                        Q = Y?.receiver_results?.result,
                        K = Y?.sender_results?.result,
                        G = Y?.payment_method,
                        J = Y?.merchant_details,
                        ee = Y?.reference_transaction_id,
                        te = (0, w.Z)({ senderId: K?.rest_id }),
                        ne = (0, A.p6)(L),
                        ae = (0, x.JU)(),
                        re = (0, A.y4)({ feeAmount: X, totalAmount: M, baseAmount: O }),
                        le = $ === m.x.Interest,
                        oe = le && j === u.x.Deposit,
                        ie = le && j === u.x.Transfer,
                        se = j === u.x.Deposit,
                        ce = j === u.x.Withdraw,
                        me = $ === m.x.Transfer && !(se || ce),
                        ue = le || "User" !== Q?.__typename || "User" !== K?.__typename ? null : te ? Q : K,
                        de = (0, A.zx)({ referenceTransactionId: ee, transactionType: j }),
                        pe = (0, A.qU)({ transactionType: j, productCode: $ }),
                        ye = se || ce || pe ? (0, A.Ou)(G) : null,
                        Ee = ue?.core?.screen_name,
                        he = (0, A.Q1)({ status: W, transactionType: j, isViewerSender: te, createdAt: U, productCode: $, description: F, reasonCode: V }),
                        be = K?.core?.screen_name,
                        ge = Q?.core?.screen_name,
                        fe = se ? ye : null,
                        _e = ce ? ye : null,
                        Ze = (0, A.Bl)({ status: W }),
                        Pe = (0, A._T)({ status: W }),
                        ke = "/notifications" === t.location.state?.previousPath && !oe && (Ze || Pe),
                        Ce = (0, A.EQ)({ productCode: $, transactionType: j }),
                        ve = (0, A.zK)({ transactionType: j, productCode: $, merchantDetails: J, amountType: he.amountType }),
                        we = ve && ve.location && (0, A.T7)(ve.location),
                        Se = (0, A.cI)({ method: z }),
                        xe = Ce || pe,
                        Ae = (0, A.pQ)({ productCode: $, transactionType: j, account: ye }),
                        Ie = a.useMemo(() => (n ? a.createElement(f.Z, { reportedHandle: Ee, transactionId: n }) : null), [n, Ee]),
                        Te = (0, A.XT)({ status: W, transactionType: j, isViewerSender: te }) || ke,
                        De = a.useCallback(() => {
                            T.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Re = Te ? a.createElement(r.Z, { style: p.footer }, q ? a.createElement(r.Z, { style: x.YP.actions }, a.createElement(_.Z, { amount: M, challengeId: H, currency: N, isViewerSender: te, receiverScreenName: ge, recordId: B, senderScreenName: be, status: W, transactionId: q, transactionType: j })) : null, ke ? a.createElement(o.ZP, { link: y.gp, size: ae, style: x.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        E.nO,
                        { namespace: I },
                        a.createElement(
                            d.Z,
                            { bottomBar: Re, history: t, onBackClick: De, rightControl: Ie, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: x.YP.content },
                                    Ae ? a.createElement(r.Z, { style: x.YP.gap }, a.createElement(b.KR, { size: "xJumbo", type: Ae.iconType, uri: Ae.uri }), a.createElement(C.Z, { size: "title4", title: Ae.title })) : ue ? a.createElement(v.Z, { avatarWithLink: !0, user: ue, usernameWithLink: !0 }) : ve ? a.createElement(r.Z, { style: x.YP.gap }, a.createElement(b.G7, { size: "xJumbo", type: ve.type, uri: ve.logo }), a.createElement(g.Z, { name: ve.name, size: "title4" })) : null,
                                    a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, he.createdAt),
                                    a.createElement(r.Z, { style: [x.YP.gap, x.YP.marginTop] }, M ? a.createElement(h.Z, { amount: M, currency: N, hasCompleted: Pe, type: he.amountType }) : null, me ? (he.description ? a.createElement(P.Z, { color: "gray700", note: he.description }) : null) : a.createElement(i.ZP, { color: "gray700" }, re ? "Total" : D)),
                                    a.createElement(s.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: x.ZP.rowSpaceBetween }, a.createElement(Z.Z, { description: he.status, title: "Status" }), ne ? a.createElement(a.Fragment, null, a.createElement(c.default, { style: x.YP.arrow }), a.createElement(Z.Z, { description: ne, title: "Funds available on" })) : null),
                                    re && X && "0" !== X && a.createElement(Z.Z, { description: a.createElement(h.Z, { amount: X, currency: N, size: "body", weight: "normal" }), title: "Fee" }),
                                    re && O && "0" !== O && a.createElement(Z.Z, { description: a.createElement(h.Z, { amount: O, currency: N, size: "body", weight: "normal" }), title: D }),
                                    fe && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: fe, testId: "source" }), title: "Source" }),
                                    _e && a.createElement(Z.Z, { description: a.createElement(k.Z, { account: _e, testId: "destination" }), title: "Destination" }),
                                    de ? a.createElement(Z.Z, { description: a.createElement(i.ZP, { color: "text", link: de }, ee), title: "Original transaction" }) : null,
                                    ie && U ? a.createElement(Z.Z, { description: (0, A.nV)(U), title: "Period" }) : null,
                                    ve && ye && ye.issuedCardAccountName ? a.createElement(Z.Z, { description: a.createElement(k.Z, { account: ye, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    Se ? a.createElement(Z.Z, { description: Se, title: "Mode" }) : null,
                                    we ? a.createElement(Z.Z, { description: we, title: "Location" }) : null,
                                    a.createElement(Z.Z, { description: q, title: "Transaction ID" }),
                                    xe && F && a.createElement(Z.Z, { description: F, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                B = { context: "TRANSACTION_DETAIL" },
                M = (e) => a.createElement(p.H, { errorConfig: B }, a.createElement(R, e)),
                z = a.memo(M);
        },
        586298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(807896),
                r = n(202784),
                l = n(43429),
                o = n(554337);
            const i = (e) => r.createElement(o.Z, (0, a.Z)({}, e, { transferDirection: l.Rz.debit })),
                s = r.memo(i);
        },
        855874: (e, t, n) => {
            n.r(t), n.d(t, { default: () => E });
            var a = n(202784),
                r = n(107267),
                l = n(736063),
                o = n(514639),
                i = n(445664),
                s = n(827309),
                c = n(557159);
            const m = ({ region: e }) => `X Money is not available in ${e}`,
                u = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state." }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                d = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, c.Z)(),
                        { isActive: l } = (0, i.Z)({ fetchKey: "Payments" }),
                        d = n && o.g7[n],
                        p = a.useCallback(() => {
                            t.replace(l ? o.gp : "/");
                        }, [t, l]),
                        { actionLabel: y, defaultSubtext: E, subtext: h } = l ? u.active : u.nonActive;
                    return a.createElement(s.Z, { actionLabel: y, headline: d ? m({ region: d }) : "X Money is not available", history: t, onAction: p, onClose: p, subtext: d ? h({ region: d }) : E, supportUrl: o.N6 });
                },
                p = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                y = (e) => a.createElement(l.H, { errorConfig: p }, a.createElement(d, e)),
                E = a.memo(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.f443345a.js.map
