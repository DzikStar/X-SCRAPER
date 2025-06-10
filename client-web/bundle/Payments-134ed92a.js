"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-134ed92a"],
    {
        89319: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                s = n(247056),
                a = n(149170),
                c = n(774426),
                o = n(736063),
                i = n(725516),
                l = n(137882),
                m = n(692165);
            const d = ({ link: e, scribeAction: t, transactionId: n }) => ({
                text: "Get support",
                onClick: () => {
                    t({ element: "get-support", action: "click" });
                },
                Icon: m.default,
                link: e,
            });
            var u = n(415506);
            const p = ({ link: e, scribeAction: t, transactionId: n }) => ({
                    Icon: u.default,
                    text: "Report payment",
                    onClick: () => {
                        t({ element: "report-payment", action: "click" });
                    },
                    link: e,
                }),
                y = { context: "PaymentsActionMenu" },
                I = ({ onOpen: e, reportedHandle: t, transactionId: n }) => {
                    const o = (0, i.z)(),
                        m = (0, l.b)({ txId: n }),
                        u = (0, l.v)({ txId: n, reportedHandle: t }),
                        y = r.useCallback(
                            ({ action: e, element: t }) => {
                                o.scribe({ element: t, action: e });
                            },
                            [o],
                        ),
                        I = r.useMemo(() => [p({ transactionId: n, scribeAction: y, link: u }), d({ transactionId: n, scribeAction: y, link: m })], [u, y, m, n]),
                        g = r.useCallback((e) => r.createElement(c.default, { actionItems: I, onClose: e }), [I]);
                    return r.createElement(s.Z, { Icon: a.default, onClick: e, renderActionMenu: g, testID: "transaction-action-menu" });
                };
            function g(e) {
                return r.createElement(o.H, { errorConfig: y }, r.createElement(I, e));
            }
            const h = r.memo(g);
        },
        448518: (e, t, n) => {
            n.d(t, { Z: () => re });
            var r = n(202784),
                s = n(727384),
                a = (n(136728), n(107267)),
                c = n(154003),
                o = n(167630),
                i = n(436117),
                l = n(736063),
                m = n(782642),
                d = n(514639),
                u = n(445664),
                p = n(725516),
                y = n(607929),
                I = n(413713);
            const g = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: h, type: E }) => {
                    const [f, P] = (0, y.bf)(),
                        { permissions: Z, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, s.Fs)({ permissions: Z, permission: i.d.ClaimTransfer }),
                        z = (0, p.z)(),
                        C = (0, a.useHistory)(),
                        S = (0, m.p)(),
                        w = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    z.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    f({ transactionId: h, recordId: n })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? C.push(i, { challengeId: r, successMessage: o, challengeInitiator: d.kW.transaction, recordId: n }) : (o && S({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: k });
                                            t ? C.replace(t, { redirectPath: `${d.bR}/${h}`, closePath: d.gp }) : S({ text: (0, I.kJ)({ errors: e, opts: { counterPartyScreenName: l } }).message });
                                        });
                            },
                            [S, e, z, f, C, t, n, k, l, h],
                        ),
                        x = P || !b;
                    return r.createElement(c.ZP, { disabled: x, onPress: w, size: g ?? "medium", type: E }, P ? r.createElement(o.Z, { size: "small" }) : "Accept");
                },
                h = { context: "PaymentsAcceptTransfer" };
            function E(e) {
                return r.createElement(l.H, { errorConfig: h }, r.createElement(g, e));
            }
            const f = r.memo(E);
            var P = n(202241);
            const Z = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: y, type: g }) => {
                    const [h, E] = (0, P.yA)(),
                        { permissions: f, roles: Z } = (0, u.Z)({ fetchKey: "Payments" }),
                        k = (0, s.Fs)({ permissions: f, permission: i.d.ConfirmUnrecognizedPayment }),
                        b = (0, p.z)(),
                        z = (0, a.useHistory)(),
                        C = (0, m.p)(),
                        S = r.useCallback(
                            (e) => {
                                e && e.preventDefault(),
                                    b.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    h({ transactionId: y, recordId: n })
                                        .then(({ challengeId: e, status: r, transactionId: a }) => {
                                            const c = (0, s.wu)({ status: r, challengeId: e });
                                            c ? z.push(c, { challengeId: e, challengeInitiator: d.kW.confirmUnrecognisedPayment, recordId: n }) : t?.();
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: Z });
                                            t ? z.replace(t, { redirectPath: `${d.bR}/${y}`, closePath: d.gp }) : C({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, h, y, n, t, C, Z, z],
                        ),
                        w = E || !k;
                    return r.createElement(c.ZP, { disabled: w, onPress: S, size: l ?? "medium", type: g }, E ? r.createElement(o.Z, { size: "small" }) : "Yes, it was me");
                },
                k = { context: "PaymentsPayRequest" };
            function b(e) {
                return r.createElement(l.H, { errorConfig: k }, r.createElement(Z, e));
            }
            const z = r.memo(b);
            var C = n(604347);
            const S = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: y, userScreenName: g }) => {
                    const [h, E] = (0, C.Z)(),
                        { permissions: f, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, s.Fs)({ permissions: f, permission: i.d.CancelRequestTransfer }),
                        k = (0, p.z)(),
                        b = (0, a.useHistory)(),
                        z = (0, m.p)(),
                        S = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    k.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    h({ transactionId: y, recordId: n })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? b.push(i, { challengeId: r, successMessage: o, challengeInitiator: d.kW.transaction, recordId: n }) : (o && z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: P });
                                            t ? b.replace(t, { redirectPath: `${d.bR}/${y}`, closePath: d.gp }) : z({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [k, h, y, n, e, g, t, z, P, b],
                        ),
                        w = E || !Z;
                    return r.createElement(c.ZP, { disabled: w, onPress: S, size: l ?? "medium", type: "primaryOutlined" }, E ? r.createElement(o.Z, { size: "small" }) : "Cancel request");
                },
                w = { context: "PaymentsCancelRequest" };
            function x(e) {
                return r.createElement(l.H, { errorConfig: w }, r.createElement(S, e));
            }
            const v = r.memo(x);
            var $ = n(500386);
            const _ = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: l, size: y, transactionId: g }) => {
                    const [h, E] = (0, $.Z)(),
                        { permissions: f, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, s.Fs)({ permissions: f, permission: i.d.CancelTransfer }),
                        k = (0, p.z)(),
                        b = (0, a.useHistory)(),
                        z = (0, m.p)(),
                        C = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    k.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    h({ transactionId: g, recordId: l })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? b.push(i, { challengeId: r, successMessage: o, challengeInitiator: d.kW.transaction, recordId: l }) : (o && z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: P });
                                            t ? b.replace(t, { redirectPath: `${d.bR}/${g}`, closePath: d.gp }) : z({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [z, e, k, h, b, t, l, P, n, g],
                        ),
                        S = E || !Z;
                    return r.createElement(c.ZP, { disabled: S, onPress: C, size: y ?? "medium", type: "primaryOutlined" }, E ? r.createElement(o.Z, { size: "small" }) : "Cancel transaction");
                },
                N = { context: "PaymentsCancelTransfer" };
            function F(e) {
                return r.createElement(l.H, { errorConfig: N }, r.createElement(_, e));
            }
            const T = r.memo(F);
            var R = n(891414);
            const A = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: y, userScreenName: g }) => {
                    const [h, E] = (0, R.C7)(),
                        { permissions: f, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, s.Fs)({ permissions: f, permission: i.d.RespondToRequestTransfer }),
                        k = (0, p.z)(),
                        b = (0, a.useHistory)(),
                        z = (0, m.p)(),
                        C = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    k.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    h({ transactionId: y, recordId: n })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? b.push(i, { challengeId: r, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: P });
                                            t ? b.replace(t, { redirectPath: `${d.bR}/${y}`, closePath: d.gp }) : z({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [k, h, y, n, e, g, t, z, P, b],
                        ),
                        S = E || !Z;
                    return r.createElement(c.ZP, { disabled: S, onPress: C, size: l ?? "medium", type: "primaryOutlined" }, E ? r.createElement(o.Z, { size: "small" }) : "Decline");
                },
                H = { context: "PaymentsDeclineRequest" };
            function M(e) {
                return r.createElement(l.H, { errorConfig: H }, r.createElement(A, e));
            }
            const D = r.memo(M),
                q = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: h }) => {
                    const [E, f] = (0, y.C7)(),
                        P = (0, p.z)(),
                        Z = (0, a.useHistory)(),
                        k = (0, m.p)(),
                        { permissions: b, roles: z } = (0, u.Z)({ fetchKey: "Payments" }),
                        C = (0, s.Fs)({ permissions: b, permission: i.d.ClaimTransfer }),
                        S = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    P.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    E({ transactionId: h, recordId: n })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? Z.push(i, { challengeId: r, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && k({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: z });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${h}`, closePath: d.gp }) : k({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [k, e, P, E, Z, t, n, z, l, h],
                        ),
                        w = f || !C;
                    return r.createElement(c.ZP, { disabled: w, onPress: S, size: g ?? "medium", type: "primaryOutlined" }, f ? r.createElement(o.Z, { size: "small" }) : "Decline");
                },
                K = { context: "PaymentsDeclineTransfer" };
            function L(e) {
                return r.createElement(l.H, { errorConfig: K }, r.createElement(q, e));
            }
            const U = r.memo(L),
                V = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: y, type: g, userScreenName: h }) => {
                    const [E, f] = (0, R.iP)(),
                        { permissions: P, roles: Z } = (0, u.Z)({ fetchKey: "Payments" }),
                        k = (0, s.Fs)({ permissions: P, permission: i.d.RespondToRequestTransfer }),
                        b = (0, p.z)(),
                        z = (0, a.useHistory)(),
                        C = (0, m.p)(),
                        S = r.useCallback(
                            (r) => {
                                r && r.preventDefault(),
                                    b.scribe({ page: "money", section: "review-request", element: "pay", action: "click" }),
                                    E({ transactionId: y, recordId: n })
                                        .then(({ challengeId: r, status: a, transactionId: c }) => {
                                            const o = e && h ? (({ formattedAmount: e, userScreenName: t }) => `You sent ${e} to @${t}.`)({ formattedAmount: e, userScreenName: h }) : null,
                                                i = (0, s.wu)({ status: a, challengeId: r });
                                            i ? z.push(i, { challengeId: r, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && C({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: Z });
                                            t ? z.replace(t, { redirectPath: `${d.bR}/${y}`, closePath: d.gp }) : C({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, E, y, n, e, h, t, C, Z, z],
                        ),
                        w = f || !k;
                    return r.createElement(c.ZP, { disabled: w, onPress: S, size: l ?? "medium", type: g }, f ? r.createElement(o.Z, { size: "small" }) : "Pay");
                },
                W = { context: "PaymentsPayRequest" };
            function O(e) {
                return r.createElement(l.H, { errorConfig: W }, r.createElement(V, e));
            }
            const J = r.memo(O),
                X = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: y }) => {
                    const [g, h] = (0, P.F8)(),
                        { permissions: E, roles: f } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, s.Fs)({ permissions: E, permission: i.d.ConfirmUnrecognizedPayment }),
                        k = (0, p.z)(),
                        b = (0, a.useHistory)(),
                        z = (0, m.p)(),
                        C = r.useCallback(
                            (e) => {
                                e && e.preventDefault(),
                                    k.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    g({ transactionId: y, recordId: n })
                                        .then(({ challengeId: e, status: r, transactionId: a }) => {
                                            const c = (0, s.wu)({ status: r, challengeId: e });
                                            c ? b.push(c, { challengeId: e, challengeInitiator: d.kW.confirmUnrecognisedPayment, recordId: n }) : t?.();
                                        })
                                        .catch((e) => {
                                            const t = (0, I.XE)({ errors: e, roles: f });
                                            t ? b.replace(t, { redirectPath: `${d.bR}/${y}`, closePath: d.gp }) : z({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [k, g, y, n, t, z, f, b],
                        ),
                        S = h || !Z;
                    return r.createElement(c.ZP, { disabled: S, onPress: C, size: l ?? "medium", type: "destructiveFilled" }, h ? r.createElement(o.Z, { size: "small" }) : "I did not make this purchase");
                },
                Y = { context: "PaymentsRejectPayment" };
            function B(e) {
                return r.createElement(l.H, { errorConfig: Y }, r.createElement(X, e));
            }
            const G = r.memo(B),
                j = ({ size: e, transactionId: t, type: n }) => {
                    const { permissions: a } = (0, u.Z)({ fetchKey: "Payments" }),
                        o = !(0, s.Fs)({ permissions: a, permission: i.d.ConfirmUnrecognizedPayment });
                    return r.createElement(c.ZP, { disabled: o, link: o ? void 0 : `${d.bR}/${t}`, size: e ?? "medium", type: n }, "Review");
                },
                Q = { context: "PaymentsReviewButton" };
            function ee(e) {
                return r.createElement(l.H, { errorConfig: Q }, r.createElement(j, e));
            }
            const te = r.memo(ee);
            function ne({ amount: e, challengeId: t, currency: n, isViewerSender: a, onSuccess: c, receiverScreenName: o, recordId: i, senderScreenName: l, status: m, transactionId: d, transactionType: u, withPrimaryOnly: p }) {
                const y = e ? (0, s.vw)({ amount: e, currency: n }) : null,
                    I = (0, s.BR)({ status: m, transactionType: u, isViewerSender: a }),
                    g = (0, s.Tp)({ status: m, transactionType: u, isViewerSender: a }),
                    h = (0, s.UM)({ status: m, transactionType: u, isViewerSender: a }),
                    E = (0, s.T3)({ status: m, transactionType: u, isViewerSender: a }),
                    P = (0, s.BC)({ status: m }),
                    Z = r.useMemo(() => (g ? r.createElement(T, { amount: y, key: "CancelTransfer", onSuccess: c, receiverScreenName: o, recordId: i, transactionId: d }) : null), [g, y, c, o, i, d]),
                    k = r.useMemo(() => (E ? r.createElement(v, { amount: y, key: "CancelRequest", recordId: i, transactionId: d, userScreenName: l }) : null), [E, y, i, l, d]),
                    b = r.useMemo(() => (h ? r.createElement(J, { amount: y, key: "PayRequest", onSuccess: c, recordId: i, size: p ? "small" : "medium", transactionId: d, type: p ? "secondaryFilled" : "primaryFilled", userScreenName: o }) : null), [h, y, c, o, i, d, p]),
                    C = r.useMemo(() => (h ? r.createElement(D, { amount: y, key: "DeclineRequest", recordId: i, transactionId: d, userScreenName: o }) : null), [h, y, o, i, d]),
                    S = r.useMemo(() => (I ? r.createElement(f, { amount: y, key: "AcceptTransfer", onSuccess: c, recordId: i, senderScreenName: l, size: p ? "small" : "medium", transactionId: d, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [I, y, c, i, l, d, p]),
                    w = r.useMemo(() => (I ? r.createElement(U, { amount: y, key: "DeclineTransfer", recordId: i, senderScreenName: l, transactionId: d }) : null), [I, y, i, l, d]),
                    x = r.useMemo(() => (P ? r.createElement(z, { amount: y, key: "ApprovePayment", onSuccess: c, recordId: i, size: p ? "small" : "medium", transactionId: d, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [P, y, c, i, d, p]),
                    $ = r.useMemo(() => (P ? r.createElement(G, { amount: y, key: "RejectPayment", onSuccess: c, recordId: i, transactionId: d }) : null), [P, y, c, i, d]),
                    _ = r.useMemo(() => (P ? r.createElement(te, { key: "ReviewPayment", size: p ? "small" : "medium", transactionId: d, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [P, d, p]),
                    N = r.useMemo(() => [...(p ? [b, S, _] : [Z, k, b, C, S, w, $, x])], [S, x, k, Z, C, w, b, $, _, p]);
                return r.createElement(r.Fragment, null, N);
            }
            const re = r.memo(ne);
        },
        770585: (e, t, n) => {
            n.d(t, { C: () => d, Z: () => u });
            var r = n(202784),
                s = n(731708),
                a = n(111677),
                c = n.n(a),
                o = n(727384);
            const i = "Free",
                l = (e) => {
                    const t = e.percentage_micro,
                        n = e.fixed_minimum_amount?.local_micro;
                    return { percent: t ? (0, o.dN)({ amount: t, formatter: 1e4 }) : null, fixedFee: n && "0" !== n ? (0, o.vw)({ amount: n, currency: e.fixed_minimum_amount?.currency }) : null };
                },
                m = ({ calculatedFee: e, fees: t }) => {
                    const { fixedFee: n, percent: a } = l(t);
                    return r.createElement(s.ZP, { color: "gray700" }, a && n ? (e ? r.createElement(c().I18NFormatMessage, { $i18n: "gfc900b9" }, e) : r.createElement(c().I18NFormatMessage, { $i18n: "bd9265e3" }, a, n)) : `(${i})`);
                },
                d = ({ calculatedFee: e, fees: t }) => {
                    const { fixedFee: n, percent: a } = l(t);
                    return r.createElement(s.ZP, { color: "gray700" }, a && n ? r.createElement(c().I18NFormatMessage, { $i18n: "b5648ffb" }, a, n) : i);
                },
                u = r.memo(m);
        },
        519901: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(515207),
                s = n(202784),
                a = n(325686),
                c = (n(585488), n(277660)),
                o = n.n(c),
                i = n(952428),
                l = n(823161),
                m = n(731708),
                d = n(966886),
                u = n(880428),
                p = n(357818),
                y = n(514639),
                I = n(412876),
                g = n(553660),
                h = n(467734),
                E = n(743080),
                f = n(727384),
                P = n(634455),
                Z = n(477922),
                k = n(615954),
                b = n(86320),
                z = n(448518),
                C = n(972758);
            const S = r.Z,
                w = ({ itemRef: e }) => {
                    const t = o()(S, e),
                        { __id: n, amount_local_micro: r, challenge_id: c, created_at: w, currency: x, description: v, details: $, id: _, product_code: N, reason_code: F, transaction_status: T, transaction_type: R } = t,
                        A = N === u.x.Interest,
                        H = $.receiver_results?.result,
                        M = $.sender_results?.result,
                        D = $.merchant_details?.merchant_results?.result,
                        q = $.payment_method,
                        K = $.merchant_details,
                        L = (0, h.Z)({ senderId: M?.rest_id }),
                        U = (0, f.GU)({ transactionType: R, isViewerSender: L, productCode: N }),
                        V = A || "User" !== H?.__typename || "User" !== M?.__typename ? null : L ? H : M,
                        W = (0, f.zK)({ transactionType: R, productCode: N, merchantDetails: K, amountType: U }),
                        O = R === p.x.Deposit || R === p.x.Withdraw ? (0, f.Ou)(q) : null,
                        J = (0, f.lD)({ status: T, reasonCode: F, isViewerSender: L }),
                        X = (0, f.qK)({ transactionType: R, description: v, productCode: N, accountName: O ? (O.accountType ? `${O.accountType} ${O.accountName.name}` : `${O.accountName.name}`) : "", createdAt: w, statusLabel: J }),
                        Y = (0, f._T)({ status: T }),
                        B = (0, f.Gl)({ status: T }),
                        G = M?.core?.screen_name,
                        j = H?.core?.screen_name,
                        Q = (0, f.DK)({ isViewerSender: L, status: T, transactionType: R }),
                        ee = (0, f.pQ)({ productCode: N, transactionType: R, account: O });
                    return s.createElement(i.Z, { key: _, link: `${y.bR}/${_}`, style: [E.dE.listItem, { justifyContent: "space-between" }] }, ee ? s.createElement(Z.KR, { size: "xxLarge", type: ee.iconType, uri: ee.uri }) : V ? s.createElement(I.Z, { size: "xxLarge", user: V }) : W ? (D && "User" === D.__typename ? s.createElement(I.Z, { size: "xxLarge", user: D }) : s.createElement(Z.G7, { size: "xxLarge", type: W.type, uri: W.logo })) : s.createElement(l.default, { size: "xxLarge" }), s.createElement(a.Z, { style: E.dE.listItemFlex, testID: `transaction-item-${_}` }, s.createElement(a.Z, { style: E.dE.listItemContent }, s.createElement(a.Z, { style: E.dE.listItemFlex }, ee ? s.createElement(C.Z, { title: ee.title }) : V ? s.createElement(g.Z, { user: V, weight: "medium" }) : W ? (D && "User" === D.__typename ? s.createElement(g.Z, { user: D, weight: "medium" }) : s.createElement(k.Z, { name: W.name, website: W.website })) : O ? s.createElement(b.Z, { account: O }) : s.createElement(m.ZP, null, "This account is unavailable"), Q && r ? s.createElement(m.ZP, { color: "gray700" }, (0, f.lw)({ status: T, description: v, amount: r, currency: x })) : B ? s.createElement(m.ZP, { color: "gray700" }, J) : X ? s.createElement(m.ZP, { color: "gray700" }, X) : null), Q ? s.createElement(z.Z, { amount: r, challengeId: c, currency: x, isViewerSender: L, receiverScreenName: j, recordId: n, senderScreenName: G, status: T, transactionId: _, transactionType: R, withPrimaryOnly: !0 }) : s.createElement(a.Z, { style: E.dE.alignEnd }, s.createElement(P.Z, { amount: r, currency: x, hasCompleted: Y, size: "body", type: U, weight: "normal" }), s.createElement(d.Z, { style: E.dE.alignEnd, timestamp: parseInt(w, 10) })))));
                },
                x = s.memo(w);
        },
        655750: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                s = n(325686),
                a = n(731708);
            function c({ color: e, description: t, title: n }) {
                return t ? r.createElement(s.Z, { style: o.root }, r.createElement(a.ZP, { color: e }, t), r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, n)) : null;
            }
            const o = n(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                i = r.memo(c);
        },
        578719: (e, t, n) => {
            n.d(t, { Z: () => I });
            var r = n(860648),
                s = n(202784),
                a = (n(585488), n(277660)),
                c = n.n(a),
                o = n(731708),
                i = n(392237),
                l = n(965245),
                m = n(519901);
            const d = r.Z,
                u = ({ id: e }) => e,
                p = ({ emptyStateDescription: e, fetchNext: t, slice: n }) => {
                    const { items: r } = c()(d, n),
                        a = s.useCallback((e) => s.createElement(m.Z, { itemRef: e, key: e.id }), []);
                    return r && r.length ? s.createElement(l.Z, { assumedItemHeight: 64, cacheKey: "transactionsList", footer: null, identityFunction: u, items: r, onNearEnd: t, renderer: a, role: "list", withoutHeadroom: !0 }) : s.createElement(o.ZP, { align: "center", color: "gray700", size: "body", style: y.emptyState }, e);
                },
                y = i.default.create((e) => ({ emptyState: { marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space32 } })),
                I = s.memo(p);
        },
        48646: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                s = n(325686),
                a = n(731708),
                c = n(392237);
            function o({ color: e, note: t, shouldCenterAlign: n = !1, size: c = "body", weight: o }) {
                return t ? r.createElement(s.Z, { style: n && l.alignCenter }, r.createElement(a.ZP, { color: e, size: c, weight: o }, `For "${t}"`)) : null;
            }
            const i = r.memo(o),
                l = c.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        150855: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                s = n(325686),
                a = n(743080),
                c = n(477922),
                o = n(749122),
                i = n(86320);
            function l({ account: e, isIssued: t, testId: n }) {
                return r.createElement(s.Z, { style: a.YP.description, testID: n }, e ? (t ? r.createElement(r.Fragment, null, r.createElement(c.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), r.createElement(o.Z, { account: e, weight: "normal" })) : r.createElement(i.Z, { account: e, weight: "normal" })) : null);
            }
            const m = r.memo(l);
        },
        972758: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                s = n(731708);
            const a = ({ size: e, title: t }) => r.createElement(s.ZP, { size: e, style: c.title, weight: "medium" }, t),
                c = n(392237).default.create((e) => ({ title: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = r.memo(a);
        },
        749286: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(771469),
                s = n(202784),
                a = n(325686),
                c = (n(585488), n(277660)),
                o = n.n(c),
                i = n(392237),
                l = n(412876),
                m = n(553660);
            const d = r.Z,
                u = ({ avatarWithLink: e, user: t, usernameWithLink: n, withCenterAlign: r }) => {
                    const c = o()(d, t);
                    return s.createElement(a.Z, { style: [p.root, r ? p.alignCenter : null] }, s.createElement(l.Z, { size: "custom", style: p.userAvatar, user: c, withLink: e }), s.createElement(m.Z, { style: [...(r ? [p.alignCenter] : []), p.headlineFont], user: c, withLink: e, withStackedLayout: r }));
                },
                p = i.default.create((e) => ({ alignCenter: { alignItems: "center" }, headlineFont: { fontSize: e.fontSizes.headline1 }, root: { gap: e.spaces.space16 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: e.spaces.space72, height: "auto" } })),
                y = s.memo(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-134ed92a.ba65df1a.js.map
