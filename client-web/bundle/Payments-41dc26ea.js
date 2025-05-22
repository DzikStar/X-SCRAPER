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
                b = n(855488),
                g = n(392237),
                f = n(980407),
                _ = n(782642),
                Z = n(445664),
                k = n(984067),
                P = n(413713),
                C = n(749286),
                v = n(934265),
                w = n(743080),
                x = n(727384),
                A = n(436117);
            const S = Object.freeze({ [c.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [c.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                D = Object.freeze({ [c.Rz.debit]: A.d.CreateTransfer, [c.Rz.credit]: A.d.RequestTransfer });
            var T = n(181234),
                I = n(351743),
                R = n.n(I),
                M = n(726426),
                L = n.n(M);
            const B = T.Z,
                z = () => {
                    const e = r.useMemo(() => L()(), []),
                        [t, n] = R()(B);
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
                                        updater: x.qQ,
                                        onError: l,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const O = n(787560).Z,
                H = () => {
                    const e = r.useMemo(() => L()(), []),
                        [t, n] = R()(O);
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
                                        updater: x.qQ,
                                        onError: l,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                F = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, i.z)(),
                        l = (0, o.useHistory)(),
                        s = (0, w.jh)(),
                        g = (0, u.p)(ye, { user_id: n }).user.result,
                        { balance: A } = (0, v.Z)(),
                        { permissions: T, roles: I } = (0, Z.Z)({ fetchKey: "Payments" }),
                        R = (0, x.MO)({ permissions: T }),
                        M = "User" === g?.__typename,
                        L = l.location?.state,
                        B = l.location.pathname,
                        [O, F] = r.useState(e ?? ""),
                        [N, q] = r.useState(!0),
                        [Y, $] = r.useState(""),
                        [V, X] = r.useState(null),
                        [j, W] = H(),
                        [Q, K] = z(),
                        G = r.useMemo(() => ({ ...L, userId: n, step: c.cX.reviewPane, amount: O }), [O, L, n]),
                        J = (0, _.p)(),
                        ee = r.useCallback(() => {
                            X(null);
                        }, []),
                        te = r.useMemo(() => ({ closePath: m.gp, redirectPath: B, redirectState: { userId: n, amount: O, step: c.cX.reviewPane, transferDirection: t } }), [B, n, O, t]),
                        ne = r.useCallback((e) => {
                            $(e.target.value);
                        }, []),
                        ae = r.useCallback(
                            (e) => () => {
                                const t = D[e],
                                    r = (0, x.DO)({ roles: I, permissions: T, actionPermission: t }),
                                    o = { ...G, transferDirection: e };
                                if ((a.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) l.push(r, { redirectPath: B, redirectState: o, closePath: m.gp });
                                else {
                                    ee();
                                    const t = (0, x.Dc)(O),
                                        a = (0, x.p2)({ amount: t }),
                                        { successMessage: r } = S[e],
                                        o = r({ formattedAmount: a });
                                    (e === c.Rz.credit ? Q : j)({ amount: t.toString(), description: Y, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: a } = e,
                                                r = a ? `${m.bR}/${a}` : m.bR;
                                            (0, x.i7)({ status: n }) ? t && l.push(m.vw, { challengeId: t, redirectPath: r, closePath: m.gp, successMessage: o, challengeInitiator: m.kW.transaction }) : (J({ text: o }), l.replace(r));
                                        })
                                        .catch((e) => {
                                            const t = (0, P.XE)({ errors: e, roles: I });
                                            t ? l.replace(t, te) : X(e);
                                        });
                                }
                            },
                            [I, T, G, a, l, B, ee, O, Q, j, Y, n, J, te],
                        ),
                        re = W || K || !O || !N,
                        oe = !A?.available_amount_local_micro || !O || (0, x.UV)({ balanceAmountMicro: A.available_amount_local_micro, amount: O }),
                        le = re || !R,
                        ie = re || !oe,
                        ce = r.useCallback(() => {
                            a.scribe({ page: "money", section: "p2p-transfer", element: "cancel", action: "click" });
                        }, [a]),
                        se = t ? S[t]?.title : null,
                        me = t === c.Rz.debit,
                        ue = r.createElement(y.ZP, { disabled: le, onPress: ae(c.Rz.credit), size: "large", style: w.ZP.button, type: "primaryFilled" }, K ? r.createElement(h.Z, null) : "Request"),
                        de = r.createElement(y.ZP, { disabled: ie, onPress: ae(c.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, W ? r.createElement(h.Z, null) : "Send"),
                        pe = r.createElement(p.Z, { style: s.footer }, V ? r.createElement(P.ZP, { errors: V, linkState: te, roles: I }) : null, r.createElement(p.Z, { style: w.ZP.actionButtons }, t ? r.createElement(r.Fragment, null, r.createElement(y.ZP, { link: m.gp, onPress: ce, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Cancel"), me ? de : t === c.Rz.credit ? ue : null) : r.createElement(r.Fragment, null, ue, de)));
                    return M ? r.createElement(f.Z, { backButtonType: "back", bottomBar: pe, history: l, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: s.container }, r.createElement(E.ZP, { align: "center", size: "title2", style: w.ZP.title, weight: "heavy" }, se ?? "Send or Request"), g && r.createElement(C.Z, { user: g, withCenterAlign: !0 }), r.createElement(k.Z, { amount: O, balance: A, isValid: N, label: "Enter amount", name: "amount", setAmount: F, setIsValid: q, validateBalance: me }), r.createElement(b.Z, { label: "Optionally add a note", maxLength: c.w8, name: "description", onChange: ne, style: U.input, testID: "description", value: Y }))) : r.createElement(d.Z, { to: m.gp });
                },
                U = g.default.create((e) => ({ input: { paddingHorizontal: "0" } })),
                N = r.memo(F),
                q = s.Z,
                Y = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, u.p)(q, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(N, { transferDirection: t, userId: a }) : r.createElement(d.Z, { to: m.gp });
                },
                $ = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                V = (e) => r.createElement(l.H, { errorConfig: $ }, r.createElement(Y, e)),
                X = r.memo(V);
            var j = n(874088),
                W = n(339110),
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
                re = g.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                oe = r.memo(ae);
            var le = n(429371);
            const ie = (e) => `x.com${m.HM}/${e}`,
                ce = ({ message: e, screenName: t }) => r.createElement(p.Z, { style: se.root }, r.createElement(le.Z, { dimension: 90, link: ie(t) }), r.createElement(E.ZP, { color: "gray700" }, e)),
                se = g.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                me = r.memo(ce),
                ue = [W.my.PaymentsUsers],
                de = ({ transferDirection: e }) => {
                    const t = (0, i.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, w.jh)(),
                        l = n.location?.state,
                        s = n.location?.pathname,
                        u = (0, Q.v9)(K.ZP.selectViewerUser),
                        d = u?.id_str,
                        y = u?.screen_name,
                        h = e ? S[e] : {},
                        { scanMessage: b, title: g } = h,
                        _ = r.useCallback((e) => e === d, [d]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: s, state: { ...l, step: c.cX.reviewPane, userId: e } });
                            },
                            [t, n, s, l],
                        ),
                        k = r.useCallback(
                            (e) => {
                                if (e.type === W.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        P = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        C = r.useCallback(() => {
                            n.push(m.gp);
                        }, [n]);
                    return r.createElement(f.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: a.container }, r.createElement(E.ZP, { align: "center", size: "title2", style: w.ZP.title, weight: "heavy" }, g ?? "Send or Request"), r.createElement(p.Z, { style: w.ZP.content }, r.createElement(j.default, { alwaysOpen: !0, filter: ue, getItemIsDisabled: (e) => e.type === W.El.User && (_(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => k(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: W._4.Unknown, testID: "typeaheadInput" }), b && y ? r.createElement(me, { message: b, screenName: y }) : null, r.createElement(oe, { onItemClick: P, viewerUserId: d }))));
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
                        s === c.cX.reviewPane && m ? r.createElement(N, { amount: u, transferDirection: d, userId: m }) : a ? r.createElement(X, { screenName: a, transferDirection: d }) : r.createElement(pe, { transferDirection: d })
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
            n.r(t), n.d(t, { PayYourBillsScreen: () => _, default: () => C, styles: () => P });
            var a = n(202784),
                r = n(325686),
                o = n(530525),
                l = n(439592),
                i = n(731708),
                c = n(154003),
                s = n(392237),
                m = n(656805),
                u = n(980407),
                d = n(652904),
                p = n(736063),
                y = n(293115),
                h = n(978167),
                E = n(743080);
            const b = { page: "money", section: "pay-your-bills" },
                g = "Pay your bills",
                f = `${g} - Account Details`,
                _ = (e) => {
                    const t = (0, E.jh)();
                    return a.createElement(d.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: P.headerContainer }, a.createElement(r.Z, { style: P.iconContainer }, a.createElement(o.Z, { "aria-label": "Pay your bills icon", aspectMode: l.Z.SQUARE, image: m })), a.createElement(r.Z, { style: P.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1" }, g), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(h.Z, { ariaLabel: f })));
                },
                Z = { context: "PAY_YOUR_BILLS" },
                k = (e) => {
                    const { history: t } = e,
                        n = (0, E.jh)(),
                        o = a.useCallback(() => t.goBack(), [t]),
                        l = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { backgroundColor: "whiteOnColor", color: "alwaysBlack", onClick: o }, "Enable"), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(u.Z, { backButtonType: "close", bottomBar: l, history: t, onBackClick: o }, a.createElement(y.nO, { namespace: b }, a.createElement(p.H, { errorConfig: Z }, a.createElement(_, e))));
                },
                P = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, gap: e.spaces.space40, marginTop: e.spaces.space24 }, headerContainer: { gap: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24 }, accountDetailRow: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountNumberContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.borderRadii.medium } })),
                C = a.memo(k);
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
            n.r(t), n.d(t, { default: () => Ce });
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
                p = n(154003),
                y = n(731708),
                h = n(167630),
                E = n(190286),
                b = n(379327),
                g = n(436117),
                f = n(922281),
                _ = n(736063),
                Z = n(782642),
                k = n(445664),
                P = n(312771),
                C = n(696445),
                v = n(392046),
                w = n(226332),
                x = n(727384),
                A = n(844685),
                S = n(165822);
            const D = ({ content: e, contentStyle: t, rightControl: n, subtext: r, title: o }) => {
                    const l = (0, u.jh)();
                    return a.createElement(a.Fragment, null, a.createElement(A.Z, { rightControl: n, style: u.ZP.settingHeader, subtext: r, text: o }), a.createElement(S.Z, { "aria-label": o, containerStyle: l.tile, stackLayoutUpperStyle: t ?? u.ZP.upper, upper: e, withInteractiveStyling: !1 }));
                },
                T = a.memo(D);
            var I = n(195816),
                R = (n(585488), n(351743)),
                M = n.n(R);
            const L = I.Z,
                B = () => {
                    const [e, t] = M()(L);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            t ? a(t) : n();
                                        },
                                        updater: x.QE,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                z = "You cannot link an account at this time.",
                O = { pathname: s.ac, state: { redirectPath: s.iE.bankAccounts } },
                H = { pathname: s.UA, state: { redirectPath: s.iE.bankAccounts } },
                F = (e) => {
                    const { paymentMethods: t, refetchStatus: n } = (0, w.Z)(),
                        { permissions: o } = (0, k.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        i = (0, c.hC)("payments_cards_as_payment_method_enabled"),
                        [m, _] = a.useState(null),
                        C = (0, Z.p)(),
                        [A, S] = B(),
                        D = o?.includes(g.d.DeletePaymentMethod),
                        I = o?.includes(g.d.CreatePaymentMethod),
                        R = a.useCallback(
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
                        L = a.useCallback(() => {
                            m &&
                                A({ paymentMethodId: m })
                                    .then(() => {
                                        _(null), C({ text: "You account was successfully removed!" });
                                    })
                                    .catch(() => {
                                        C({ text: "Something went wrong. Please try again later." });
                                    });
                        }, [C, m, A]),
                        F = a.createElement(
                            d.Z,
                            { style: u.ZP.setting },
                            t?.map((e) => {
                                const t = (0, x.Ou)(e),
                                    n = t?.id;
                                return t && n ? a.createElement(v.Z, { account: t, handleRemove: D ? M(n) : void 0, key: n, onClick: e?.core?.details?.status === f.D.LoginRequired && I ? R(n) : void 0 }) : null;
                            }),
                            a.createElement(p.ZP, { disabled: !I, icon: a.createElement(b.default, null), link: I ? O : void 0 }, a.createElement(y.ZP, { hoverLabel: I ? void 0 : { label: z } }, "Add bank account")),
                            i ? a.createElement(p.ZP, { disabled: !I, icon: a.createElement(b.default, null), link: I ? H : void 0 }, a.createElement(y.ZP, { hoverLabel: I ? void 0 : { label: z } }, "Add card")) : null,
                        );
                    return a.createElement(a.Fragment, null, n === P.iF.LOADING ? a.createElement(h.Z, null) : a.createElement(T, { content: F, title: "Linked accounts" }), m ? a.createElement(E.Z, { confirmButtonDisabled: S, confirmButtonLabel: "Remove", confirmButtonType: "destructiveFilled", headline: "Remove linked account?", onCancel: () => _(null), onConfirm: L, text: "Your account will be removed from X" }) : null);
                },
                U = { context: "PaymentsSettingsExternalAccounts" };
            function N(e) {
                return a.createElement(_.H, { errorConfig: U }, a.createElement(F, e));
            }
            const q = (0, C.R)(a.memo(N), { permissionsAllOf: [g.d.GetAccounts, g.d.GetPaymentMethod], permissionsAnyOf: null });
            var Y = n(392237),
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
                j = (e) => {
                    const { featureSwitches: t } = (0, $.QZ)(),
                        { limits: n } = (0, V.Z)();
                    return X.map((e) => {
                        const r = e.content.reduce(
                                (e, t) => {
                                    const a = n?.find((e) => e.limit_type === t.limit_type),
                                        r = a?.amount?.local_micro;
                                    "-1" === r && (e.isUnlimited = !0);
                                    const o = parseFloat(r),
                                        l = o >= 0 ? (0, x.p2)({ amount: o, currency: a?.amount?.currency }) : null;
                                    return l && e.limits.push(t.amountLabel({ formattedAmount: l })), e;
                                },
                                { limits: [], isUnlimited: !1 },
                            ),
                            o = a.createElement(
                                d.Z,
                                { style: u.ZP.setting },
                                a.createElement(
                                    d.Z,
                                    { style: W.content },
                                    r.limits.length > 0
                                        ? a.createElement(
                                              d.Z,
                                              { style: W.limit },
                                              r.limits.map((e) => a.createElement(y.ZP, { color: "gray700", key: e }, e)),
                                          )
                                        : r.isUnlimited
                                          ? a.createElement(y.ZP, { color: "gray700" }, "Unlimited")
                                          : null,
                                ),
                            );
                        return (!e.feature || t.isTrue(e.feature)) && (r.limits.length > 0 || r.isUnlimited) ? a.createElement(d.Z, { key: e.key, style: W.limitRoot, testID: e.key }, a.createElement(T, { content: o, title: e.title })) : null;
                    });
                },
                W = Y.default.create((e) => ({ limitRoot: { flexDirection: "column", gap: e.spaces.space8 }, limit: { flexDirection: "column", gap: e.spaces.space4 }, content: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } })),
                Q = { context: "PaymentsSettingsLimits" };
            function K(e) {
                return a.createElement(_.H, { errorConfig: Q }, a.createElement(j, e));
            }
            const G = (0, C.R)(a.memo(K), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null });
            n(901951);
            var J = n(779610),
                ee = n(457311),
                te = n(463963),
                ne = n(348340);
            const ae = (e) => {
                    const { documents: t } = (0, ne.Z)({ type: te.E.DocumentTypeMonthlyStatement }),
                        n = t?.reduce((e, t) => {
                            const n = `${(0, x.Qu)(t.start_date).getFullYear()}`,
                                a = e[n];
                            return a ? a.unshift(t) : (e[n] = [t]), e;
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
                                          const n = (0, x.Qu)(e),
                                              r = n.getMonth();
                                          return a.createElement(J.Z, { key: r, label: n.toLocaleString("default", { month: "long" }), link: { external: !0, pathname: t, openInSameFrame: !1 } });
                                      }),
                                  );
                                  return a.createElement(T, { content: n, key: e, title: e });
                              })
                            : a.createElement(ee.Z, { message: "You do not have any monthly statements yet." }),
                    );
                },
                re = { context: "PaymentsSettingsMonthlyStatements" };
            function oe(e) {
                return a.createElement(_.H, { errorConfig: re }, a.createElement(ae, e));
            }
            const le = (0, C.R)(a.memo(oe), { permissionsAllOf: [g.d.GetDocuments], permissionsAnyOf: null });
            var ie = n(160144);
            const ce = { pathname: s.AU.tier3.verifyIdentityPath, state: { redirectPath: s.iE.personal, closePath: s.iE.personal } },
                se = (e) => {
                    const { fetchCount: t, permissions: n, roles: o } = (0, k.Z)({ fetchKey: "Payments" }),
                        l = (0, r.useHistory)(),
                        i = n?.includes(g.d.VerifyIdentity),
                        c = a.useCallback(
                            (e) => {
                                const { field: t, message: n } = e.data;
                                switch (n) {
                                    case ie.T.edit:
                                        if (!o?.includes("KycVerified")) return void l.push(s.AU.tier2.verifyIdentityPath, { redirectPath: s.iE.personal, closePath: s.iE.personal, requestedField: t });
                                        l.push(s.f0, { field: t });
                                        break;
                                    case ie.T.failure:
                                        l.replace(s.gp);
                                }
                            },
                            [l, o],
                        ),
                        m = a.useMemo(() => o?.includes("KycVerified"), [o]),
                        h = a.useMemo(() => {
                            const e = o?.includes("KycDocumentsVerified");
                            return a.createElement(d.Z, { style: [u.ZP.setting, pe.idVerificationContent] }, a.createElement(y.ZP, { weight: "bold" }, "ID verification"), e ? a.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "green500", color: "green500" }, "Verified") : a.createElement(p.ZP, { disabled: !i, link: i ? ce : void 0, type: "primaryOutlined" }, "Verify identity"));
                        }, [i, o]);
                    return a.createElement(a.Fragment, null, a.createElement(T, { content: a.createElement(ie.Z, { eventCallback: c, key: t, linkType: s.P_.personal }), contentStyle: pe.infoRoot, title: "Basic information" }), m && a.createElement(T, { content: h, title: "Identity information" }));
                },
                me = { context: "PaymentsSettingsPersonal" };
            function ue(e) {
                return a.createElement(_.H, { errorConfig: me }, a.createElement(se, e));
            }
            const de = (0, C.R)(a.memo(ue), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                pe = Y.default.create((e) => ({ spinner: { alignSelf: "center", height: "100%" }, hide: { display: "none" }, personalContent: { width: "100%", paddingTop: "0px", alignSelf: "center", height: "100%" }, infoRoot: { height: 250 * e.scaleMultiplier }, idVerificationContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }));
            var ye = n(954110),
                he = n(24568);
            const Ee = [
                    { name: "require_pin_to_create_transactions", label: "Transfers", helpText: "To execute a payment from your account." },
                    { name: "require_pin_to_unlock", feature: "payments_pin_login_enabled", label: "Logging In", helpText: "To access your balance and other features related to X Money." },
                    { name: "require_pin_to_link_payment_method", feature: "payments_pin_link_payment_methods_enabled", label: "Payment Methods", helpText: "To link a new card or bank account in order to fund your account." },
                ],
                be = [
                    { name: "only_receive_transfer_from_following", label: "Transfers", helpText: "Only people you follow can send you money on X." },
                    { name: "only_allow_request_from_following", label: "Requests", helpText: "Only people you follow can request money from you on X." },
                ],
                ge = (e) => {
                    const { permissions: t } = (0, k.Z)({ fetchKey: "Payments" }),
                        { featureSwitches: n } = (0, $.QZ)(),
                        { handlePreferencesChange: r, preferences: o } = (0, he.Z)(),
                        l = t?.includes(g.d.UpdatePin),
                        i = !(0, x.aY)(t),
                        c = n.isTrue("payments_pin_enabled"),
                        m = n.isTrue("payments_account_details_enabled"),
                        p = n.isTrue("payments_card_spend_enabled"),
                        h = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "pin-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                Ee.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!o[c], disabled: i, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        E = a.createElement(
                            d.Z,
                            { style: u.ZP.setting, testID: "privacy-settings" },
                            a.createElement(
                                d.Z,
                                null,
                                be.map(({ feature: e, helpText: t, label: l, name: c }) => (!e || n.isTrue(e) ? a.createElement(ye.Z, { checked: !!o[c], disabled: i, helpText: t, key: c, label: l, name: c, onChange: r, withBackground: !1, withPaddingHorizontal: !1 }) : null)),
                            ),
                        ),
                        b = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!o.enable_bill_pay, disabled: i, label: "Allow external accounts and services to pull money using your account information.", name: "enable_bill_pay", onChange: r, withBackground: !1, withPaddingHorizontal: !1 })),
                        f = a.createElement(d.Z, { style: u.ZP.setting }, a.createElement(ye.Z, { checked: !!o.enable_card_payments, disabled: i, label: "Allow payments using your X card.", name: "enable_card_payments", onChange: r, withBackground: !1, withPaddingHorizontal: !1 }));
                    return a.createElement(a.Fragment, null, c ? a.createElement(T, { content: h, rightControl: l ? a.createElement(y.ZP, { link: s.Fm }, "Change PIN") : null, subtext: "For enhanced security, the following actions will require you to use your credentials (PIN or Passkeys) to proceed.", title: "Enhanced security" }) : null, a.createElement(T, { content: E, title: "Enhanced privacy" }), m ? a.createElement(T, { content: b, title: "Bill pay" }) : null, p ? a.createElement(T, { content: f, title: "Card payments" }) : null);
                },
                fe = { context: "PaymentsSettingsSecurityPrivacy" };
            function _e(e) {
                return a.createElement(_.H, { errorConfig: fe }, a.createElement(ge, e));
            }
            const Ze = (0, C.R)(a.memo(_e), { permissionsAllOf: [g.d.GetAccounts], permissionsAnyOf: null }),
                ke = { page: "money", section: "settings" },
                Pe = (e) => {
                    const { history: t } = e,
                        n = (0, u.jh)(),
                        d = (0, r.useLocation)(),
                        p = (0, c.hC)("payments_pin_enabled"),
                        y = (0, c.hC)("payments_account_details_enabled"),
                        h = p || y,
                        E = (0, c.hC)("payments_settings_documents_enabled"),
                        b = a.useMemo(() => [{ to: { pathname: s.iE.personal }, key: s.iE.personal, label: "Personal", isActive: () => d.pathname === s.iE.personal }, { to: { pathname: s.iE.bankAccounts }, key: s.iE.bankAccounts, label: "Linked accounts", isActive: () => d.pathname === s.iE.bankAccounts }, { to: { pathname: s.iE.limits }, key: s.iE.limits, label: "Limits", isActive: () => d.pathname === s.iE.limits }, h ? { to: { pathname: s.iE.securityPrivacy }, key: s.iE.securityPrivacy, label: "Security & Privacy", isActive: () => d.pathname === s.iE.securityPrivacy } : null, E ? { to: { pathname: s.iE.monthlyStatements }, key: s.iE.monthlyStatements, label: "Monthly statements", isActive: () => d.pathname === s.iE.monthlyStatements } : null], [d.pathname, h, E]),
                        g = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(o.Z, { style: n.root, withWideContainer: !0 }, a.createElement(i.Z, { isPillLink: !0, links: b }), a.createElement(r.Switch, null, a.createElement(r.Route, { component: de, exact: !0, key: s.iE.personal, path: s.iE.personal }), a.createElement(r.Route, { component: q, exact: !0, key: s.iE.bankAccounts, path: s.iE.bankAccounts }), a.createElement(r.Route, { component: Ze, exact: !0, key: s.iE.securityPrivacy, path: s.iE.securityPrivacy }), a.createElement(r.Route, { component: G, exact: !0, key: s.iE.limits, path: s.iE.limits }), a.createElement(r.Route, { component: le, exact: !0, key: s.iE.monthlyStatements, path: s.iE.monthlyStatements })))), [n.root, b]),
                        f = a.useCallback(() => {
                            const e = t.location.state?.previousPath?.startsWith(s.Sr);
                            e ? t.push(s.gp) : t.goBack();
                        }, [t]);
                    return a.createElement(m.nO, { namespace: ke }, a.createElement(l.Z, { backLocation: s.gp, documentTitle: "Money", history: t, isFullWidth: !0, onBackClick: f, primaryContent: g, sidebarContent: null, title: "Settings" }));
                },
                Ce = a.memo(Pe);
        },
        671369: (e, t, n) => {
            n.r(t), n.d(t, { SetupDirectDepositScreen: () => P, default: () => x, styles: () => w });
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
                k = `${Z} - Account details`,
                P = (e) => {
                    const t = (0, f.jh)(),
                        { interest: n } = (0, g.Z)(),
                        { roles: c } = (0, h.Z)({ fetchKey: "Payments" }),
                        s = c?.includes(m.N.BoostedApy);
                    let d = "";
                    if (n) {
                        d = `You'll earn ${(parseInt(n.apy, 10) / 100).toFixed(2)}% APY on all deposits`;
                    }
                    const y = s && n && n.apy;
                    return a.createElement(p.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.iconContainer }, a.createElement(o.Z, { "aria-label": "Set up Direct Deposit icon", aspectMode: l.Z.SQUARE, image: u })), a.createElement(r.Z, { style: w.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Give the details below to your employer, or use them in your HR / payroll software."))), a.createElement(b.Z, { ariaLabel: k }), y && a.createElement(r.Z, { style: w.premiumBannerContainer }, a.createElement(r.Z, { style: w.premiumBannerContent }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "normal" }, "Thanks for being a Premium+ member"), a.createElement(i.ZP, { color: "text", size: "headline2", weight: "medium" }, d)))));
                },
                C = { context: "SETUP_DIRECT_DEPOSIT" },
                v = (e) => {
                    const { history: t } = e,
                        n = (0, f.jh)(),
                        o = a.useCallback(() => t.goBack(), [t]),
                        l = a.createElement(r.Z, { style: n.footer }, a.createElement(c.ZP, { backgroundColor: "whiteOnColor", color: "alwaysBlack", onClick: o }, "Done"), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return a.createElement(d.Z, { backButtonType: "close", bottomBar: l, history: t, onBackClick: o }, a.createElement(E.nO, { namespace: _ }, a.createElement(y.H, { errorConfig: C }, a.createElement(P, e))));
                },
                w = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, gap: e.spaces.space40, marginTop: e.spaces.space24 }, headerContainer: { gap: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24 }, accountDetailRow: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountNumberContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.borderRadii.medium }, premiumBannerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, padding: e.spaces.space20, marginStart: -65, marginEnd: -65, backgroundColor: e.colors.gray0, position: "relative", border: "1px solid", borderImage: "linear-gradient(to right,#684D20,#C69E5D,#5F533A) 1 0 1 0", marginTop: e.spaces.space40 }, premiumBannerContent: { paddingHorizontal: e.spaces.space32 } })),
                x = a.memo(v);
        },
        372195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(529356),
                l = n(514639);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, r.useLocation)(),
                        i = n.state?.setupTwoFactorAuthReturnPath || l.gp,
                        c = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-security-key-enrollment", query: { return_path: i } });
                        }, [t, i]),
                        s = a.useCallback(() => {
                            t.push({ pathname: "/i/flow/two-factor-auth-app-enrollment", query: { return_path: i } });
                        }, [t, i]),
                        m = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(o.Z, { actionLabel: "Setup Authenticator app", enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "Two-factor authentication is required", isFullHeightOnMobile: !0, onAction: s, onClose: m, onSecondaryAction: c, secondaryActionLabel: "Setup Security key", secondaryActionType: "primaryFilled", subtext: "Enable two-factor authentication using an authentication app or a security key to unlock peer-to-peer transfers and external bank account withdrawals and deposits." });
                },
                c = a.memo(i);
        },
        446985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => B });
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
                k = n(48646),
                P = n(847211),
                C = n(972758),
                v = n(749286),
                w = n(467734),
                x = n(464978),
                A = n(743080),
                S = n(727384);
            const D = { page: "money", section: "transaction-details" },
                T = [y.uv, y.r0, y.IN, y.HM, y.Jv],
                I = "Amount",
                R = (e) => {
                    const { history: t } = e,
                        n = (0, o.useParams)().transactionId,
                        p = (0, A.jh)(),
                        { get_transaction_by_id: R } = (0, x.Z)(n || ""),
                        { __id: M, amount_local_micro: L, availability_date: B, base_amount_micro: z, challenge_id: O, created_at: H, currency: F, description: U, details: N, id: q, product_code: Y, reason_code: $, total_fees_micro: V, transaction_status: X, transaction_type: j } = R ?? {},
                        W = N?.receiver_results?.result,
                        Q = N?.sender_results?.result,
                        K = N?.payment_method,
                        G = N?.merchant_details,
                        J = N?.reference_transaction_id,
                        ee = (0, w.Z)({ senderId: Q?.rest_id }),
                        te = (0, S.p6)(B),
                        ne = (0, A.JU)(),
                        ae = (0, S.y4)({ feeAmount: V, totalAmount: L, baseAmount: z }),
                        re = Y === m.x.Interest,
                        oe = re && j === u.x.Deposit,
                        le = re && j === u.x.Transfer,
                        ie = j === u.x.Deposit,
                        ce = j === u.x.Withdraw,
                        se = Y === m.x.Transfer && !(ie || ce),
                        me = re || "User" !== W?.__typename || "User" !== Q?.__typename ? null : ee ? W : Q,
                        ue = (0, S.zx)({ referenceTransactionId: J, transactionType: j }),
                        de = (0, S.qU)({ transactionType: j, productCode: Y }),
                        pe = ie || ce || de ? (0, S.Ou)(K) : null,
                        ye = me?.core?.screen_name,
                        he = (0, S.Q1)({ status: X, transactionType: j, isViewerSender: ee, createdAt: H, productCode: Y, description: U, reasonCode: $ }),
                        Ee = Q?.core?.screen_name,
                        be = W?.core?.screen_name,
                        ge = ie ? pe : null,
                        fe = ce ? pe : null,
                        _e = (0, S.Bl)({ status: X }),
                        Ze = (0, S._T)({ status: X }),
                        ke = "/notifications" === t.location.state?.previousPath && !oe && (_e || Ze),
                        Pe = (0, S.EQ)({ productCode: Y, transactionType: j }),
                        Ce = (0, S.zK)({ transactionType: j, productCode: Y, merchantDetails: G, amountType: he.amountType }),
                        ve = Ce && Ce.location && (0, S.T7)(Ce.location),
                        we = Pe || de,
                        xe = (0, S.pQ)({ productCode: Y, transactionType: j, account: pe }),
                        Ae = a.useMemo(() => (n ? a.createElement(f.Z, { reportedHandle: ye, transactionId: n }) : null), [n, ye]),
                        Se = (0, S.XT)({ status: X, transactionType: j, isViewerSender: ee }) || ke,
                        De = a.useCallback(() => {
                            T.some((e) => t.location.state?.previousPath?.startsWith(e)) ? t.push(y.gp) : t.goBack();
                        }, [t]),
                        Te = Se ? a.createElement(r.Z, { style: p.footer }, q ? a.createElement(r.Z, { style: A.YP.actions }, a.createElement(_.Z, { amount: L, challengeId: O, currency: F, isViewerSender: ee, receiverScreenName: be, recordId: M, senderScreenName: Ee, status: X, transactionId: q, transactionType: j })) : null, ke ? a.createElement(l.ZP, { link: y.gp, size: ne, style: A.ZP.button, type: "primaryFilled" }, "View balance") : null) : void 0;
                    return a.createElement(
                        h.nO,
                        { namespace: D },
                        a.createElement(
                            d.Z,
                            { bottomBar: Te, history: t, onBackClick: De, rightControl: Ae, withoutBottomBarMobile: !0 },
                            a.createElement(
                                r.Z,
                                { style: p.container },
                                a.createElement(
                                    r.Z,
                                    { style: A.YP.content },
                                    xe ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(b.KR, { size: "xJumbo", type: xe.iconType, uri: xe.uri }), a.createElement(C.Z, { size: "title4", title: xe.title })) : me ? a.createElement(v.Z, { avatarWithLink: !0, user: me, usernameWithLink: !0 }) : Ce ? a.createElement(r.Z, { style: A.YP.gap }, a.createElement(b.G7, { size: "xJumbo", type: Ce.type, uri: Ce.logo }), a.createElement(g.Z, { name: Ce.name, size: "title4" })) : null,
                                    a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, he.createdAt),
                                    a.createElement(r.Z, { style: [A.YP.gap, A.YP.marginTop] }, L ? a.createElement(E.Z, { amount: L, currency: F, hasCompleted: Ze, type: he.amountType }) : null, se ? (he.description ? a.createElement(k.Z, { color: "gray700", note: he.description }) : null) : a.createElement(i.ZP, { color: "gray700" }, ae ? "Total" : I)),
                                    a.createElement(c.Z, { spacing: "space12" }),
                                    a.createElement(r.Z, { style: A.ZP.rowSpaceBetween }, a.createElement(Z.Z, { description: he.status, title: "Status" }), te ? a.createElement(a.Fragment, null, a.createElement(s.default, { style: A.YP.arrow }), a.createElement(Z.Z, { description: te, title: "Funds available on" })) : null),
                                    ae && V && "0" !== V && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: V, currency: F, size: "body", weight: "normal" }), title: "Fee" }),
                                    ae && z && "0" !== z && a.createElement(Z.Z, { description: a.createElement(E.Z, { amount: z, currency: F, size: "body", weight: "normal" }), title: I }),
                                    ge && a.createElement(Z.Z, { description: a.createElement(P.Z, { account: ge, testId: "source" }), title: "Source" }),
                                    fe && a.createElement(Z.Z, { description: a.createElement(P.Z, { account: fe, testId: "destination" }), title: "Destination" }),
                                    ue ? a.createElement(Z.Z, { description: a.createElement(i.ZP, { color: "text", link: ue }, J), title: "Original transaction" }) : null,
                                    le && H ? a.createElement(Z.Z, { description: (0, S.nV)(H), title: "Period" }) : null,
                                    Ce && pe && pe.issuedCardAccountName ? a.createElement(Z.Z, { description: a.createElement(P.Z, { account: pe, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null,
                                    ve ? a.createElement(Z.Z, { description: ve, title: "Location" }) : null,
                                    a.createElement(Z.Z, { description: q, title: "Transaction ID" }),
                                    we && U && a.createElement(Z.Z, { description: U, title: "On statement as" }),
                                ),
                            ),
                        ),
                    );
                },
                M = { context: "TRANSACTION_DETAIL" },
                L = (e) => a.createElement(p.H, { errorConfig: M }, a.createElement(R, e)),
                B = a.memo(L);
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
            n.r(t), n.d(t, { default: () => b });
            var a = n(202784),
                r = n(107267),
                o = n(992942),
                l = n(529356),
                i = n(198433),
                c = n(736063),
                s = n(514639),
                m = n(445664),
                u = n(557159);
            const d = ({ region: e }) => `X Money is not available in ${e}`,
                p = { active: { actionLabel: "View balance", subtext: ({ region: e }) => `You can still view your balance, but actions are currently disabled until X Money becomes available in ${e}.`, defaultSubtext: "You can still view your balance, but actions are currently disabled until X Money becomes available in your state" }, nonActive: { actionLabel: "Got it", subtext: ({ region: e }) => `We’re not able to complete your identity verification until X Money becomes available in ${e}.`, defaultSubtext: "We’re not able to complete your identity verification until X Money becomes available in your state" } },
                y = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, u.Z)(),
                        { isActive: c } = (0, m.Z)({ fetchKey: "Payments" }),
                        y = n && s.g7[n],
                        h = a.useCallback(() => {
                            t.replace(c ? s.gp : "/");
                        }, [t, c]),
                        E = a.useCallback(({ style: e }) => a.createElement(o.Z, { "aria-label": "", source: i, style: e }), []),
                        { actionLabel: b, defaultSubtext: g, subtext: f } = c ? p.active : p.nonActive;
                    return a.createElement(l.Z, { actionLabel: b, enableMaskForDismiss: !0, graphic: E, graphicDisplayMode: "illustration", headline: y ? d({ region: y }) : "X Money is not available", isFullHeightOnMobile: !0, onAction: h, onClose: h, subtext: y ? f({ region: y }) : g, supportUrl: s.N6 });
                },
                h = { context: "PAYMENTS_STATE_NOT_AVAILABLE" },
                E = (e) => a.createElement(c.H, { errorConfig: h }, a.createElement(y, e)),
                b = a.memo(E);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-41dc26ea.2417636a.js.map
