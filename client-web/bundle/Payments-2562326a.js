"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2562326a"],
    {
        412100: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(297679),
                s = (n(585488), n(353391)),
                a = n.n(s),
                c = n(312771),
                o = n(127218),
                i = n(43429);
            const d = r.Z,
                _ = () => {
                    const { data: e, fetchNext: t, refetch: n, subsequentFetchStatus: r } = (0, o.C)(d, { count: i.ic }),
                        s = e?.get_payments_customer_actions?.__id ?? "useActionableItemsQuery_TransactionActions_slice";
                    return (
                        a()([s], () => {
                            n();
                        }),
                        { data: e, refetch: n, isRefreshing: r === c.ZP.LOADING, fetchNext: t, hasNotices: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsCustomerNotice" === e?.__typename), hasPendingTransactions: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsTransaction" === e?.__typename) }
                    );
                };
        },
        500386: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(663090),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(727384);
            const i = r.Z,
                d = () => {
                    const [e, t] = c()(i);
                    return [
                        s.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((r, s) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_transfer?.id,
                                                a = e?.cancel_transfer?.challenge_id,
                                                c = e?.cancel_transfer?.transaction_status,
                                                o = e?.cancel_transfer?.errors;
                                            n && c ? r({ transactionId: n, status: c, challengeId: a }) : s(o || t);
                                        },
                                        updater: (e, n) => {
                                            const r = n?.cancel_transfer?.transaction_status,
                                                s = n?.cancel_transfer?.reason_code;
                                            (0, o.H_)(e, { status: r, recordId: t, reasonCode: s });
                                        },
                                        onError: s,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        604347: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(597785),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(727384);
            const i = r.Z,
                d = () => {
                    const [e, t] = c()(i);
                    return [
                        s.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((r, s) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_request_transfer?.id,
                                                a = e?.cancel_request_transfer?.transaction_status,
                                                c = e?.cancel_request_transfer?.challenge_id,
                                                o = e?.cancel_request_transfer?.errors;
                                            n && a ? r({ transactionId: n, status: a, challengeId: c }) : s(o || t);
                                        },
                                        updater: (e, n) => {
                                            const r = n?.cancel_request_transfer?.transaction_status,
                                                s = n?.cancel_request_transfer?.reason_code;
                                            (0, o.H_)(e, { status: r, recordId: t, reasonCode: s });
                                        },
                                        onError: s,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        607929: (e, t, n) => {
            n.d(t, { C7: () => u, bf: () => l });
            var r = n(990563),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(402229),
                i = n(727384);
            const d = r.Z,
                _ = ({ decision: e }) => {
                    const [t, n] = c()(d);
                    return [
                        s.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((s, a) => {
                                    t({
                                        variables: { transfer_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.claim_transfer?.id,
                                                r = e?.claim_transfer?.transaction_status,
                                                c = e?.claim_transfer?.challenge_id,
                                                o = e?.claim_transfer?.errors;
                                            n && r ? s({ transactionId: n, status: r, challengeId: c }) : a(o || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.claim_transfer?.transaction_status,
                                                s = t?.claim_transfer?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: n, reasonCode: s });
                                        },
                                        onError: a,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                l = () => _({ decision: o.R.ClaimTransferDecisionAccept }),
                u = () => _({ decision: o.R.ClaimTransferDecisionReject });
        },
        202241: (e, t, n) => {
            n.d(t, { F8: () => u, yA: () => l });
            var r = n(708154),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(402311),
                i = n(727384);
            const d = r.Z,
                _ = ({ decision: e }) => {
                    const [t, n] = c()(d);
                    return [
                        s.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((s, a) => {
                                    t({
                                        variables: { transaction_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.confirm_unrecognized_payment?.transaction,
                                                r = n?.id,
                                                c = n?.transaction_status,
                                                o = e?.confirm_unrecognized_payment?.errors,
                                                i = e?.confirm_unrecognized_payment?.challenge_id;
                                            r && c ? s({ transactionId: r, status: c, challengeId: i }) : a(o || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.confirm_unrecognized_payment?.transaction,
                                                s = r?.transaction_status,
                                                a = r?.reason_code;
                                            (0, i.H_)(e, { status: s, recordId: n, reasonCode: a });
                                        },
                                        onError: a,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                l = () => _({ decision: o.n.UnrecognizedPaymentDecisionAccept }),
                u = () => _({ decision: o.n.UnrecognizedPaymentDecisionReject });
        },
        226595: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(642004),
                s = n(87877),
                a = n(922281),
                c = n(226332);
            const o = () => {
                const { paymentMethods: e } = (0, c.Z)(s.U.PaymentMethodFilterSpending),
                    t = e?.filter((e) => e.core?.details?.issued_card_type === r.W.IssuedCardTypePhysical);
                return { cards: e, virtualCards: e?.filter((e) => e.core?.details?.issued_card_type === r.W.IssuedCardTypeVirtual), physicalCards: t, inactivePhysicalCards: t?.filter((e) => e.core?.details?.status === a.D.Inactive) };
            };
        },
        629015: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(40969),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(952793),
                i = n(441484),
                d = n(698478);
            const _ = r.Z,
                l = () => {
                    const e = (0, o.hC)("payments_enabled"),
                        [t, n] = s.useState(),
                        [r, a] = s.useState(!1),
                        [l, u] = c()(_);
                    s.useEffect(() => {
                        l({
                            variables: {},
                            onCompleted: (e) => {
                                !!e?.check_transfers_eligibility?.eligible && i.Z.fetchNewSession
                                    ? i.Z.fetchNewSession().finally(() => {
                                          n(e);
                                      })
                                    : n(e);
                            },
                            onError: () => {
                                a(!0);
                            },
                        });
                    }, [l]);
                    const f = t?.check_transfers_eligibility,
                        m = !!f?.eligible,
                        { permissions: p, requirements: h, roles: y } = f ?? {};
                    return { isEligible: e && m, hasLoaded: !u && (!!t || r), requirements: h, roles: y, permissions: p, paymentsRedirectPath: (0, d.rW)({ roles: y, permissions: p }) };
                };
        },
        934265: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(183276),
                s = (n(585488), n(353391)),
                a = n.n(s),
                c = n(940211),
                o = n(482924);
            const i = r.Z,
                d = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, o.A)(i, {}, { fetchPolicy: "store-and-network" }),
                        r = e.get_accounts?.find((e) => e.identifier === c.b.UserMain),
                        s = r?.__id ?? "get_accounts";
                    return (
                        a()([s], () => {
                            t();
                        }),
                        { balance: r?.balance, refetch: t, refetchStatus: n }
                    );
                };
        },
        348340: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(576751),
                s = (n(585488), n(482924));
            const a = r.Z,
                c = ({ type: e }) => {
                    const { data: t } = (0, s.A)(a, { document_type: e }),
                        n = t?.get_payments_documents;
                    return { documents: n };
                };
        },
        57335: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(710555),
                s = (n(585488), n(940211)),
                a = n(482924);
            const c = r.Z,
                o = () => {
                    const { data: e } = (0, a.A)(c, {}, { fetchPolicy: "store-and-network" }),
                        t = e.get_accounts?.find((e) => e.identifier === s.b.UserInterest);
                    return { id: t?.id, interest: t?.interest_details };
                };
        },
        329923: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(204133),
                s = (n(585488), n(712696)),
                a = n.n(s),
                c = n(727384);
            const o = r.Z,
                i = () => {
                    const e = a()(o, {}),
                        t = e?.get_payments_invitation_details,
                        n = t?.invitation_amount_local_micro,
                        r = t?.currency,
                        s = t?.invitation_count,
                        i = n ? (0, c.vw)({ amount: n, currency: r }) : null;
                    return { invitationCount: s ? parseInt(s, 10) : null, formattedAmount: i };
                };
        },
        889738: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(924592),
                s = (n(585488), n(482924));
            const a = r.Z,
                c = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, s.A)(a, {}),
                        r = e?.get_customer?.limits;
                    return { limits: r, refetch: t, refetchStatus: n };
                };
        },
        226332: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(703325),
                s = (n(585488), n(353391)),
                a = n.n(s),
                c = n(87877),
                o = n(922281),
                i = n(482924);
            const d = r.Z,
                _ = (e) => {
                    const { data: t, refetch: n, refetchStatus: r } = (0, i.A)(d, { filter: e ?? c.U.PaymentMethodFilterFunding, withIssuedSpend: e === c.U.PaymentMethodFilterSpending }),
                        s = t?.get_payment_methods_v2,
                        _ = s?.filter((e) => e.core?.details?.status === o.D.Active),
                        l = s?.filter((e) => e.core?.details?.status === o.D.Active || e.core?.details?.status === o.D.LoginRequired),
                        u = s?.[0]?.__id ?? t?.__id;
                    return (
                        a()([u], () => {
                            n();
                        }),
                        { paymentMethods: s, activePaymentMethods: _, usablePaymentMethods: l, refetchStatus: r }
                    );
                };
        },
        24568: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var r = n(215285),
                s = n(202784),
                a = (n(585488), n(353391)),
                c = n.n(a),
                o = n(107267),
                i = n(782642),
                d = n(514639),
                _ = n(312771),
                l = n(482924),
                u = n(746523),
                f = n(351743),
                m = n.n(f),
                p = n(727384);
            const h = u.Z,
                y = () => {
                    const [e, t] = m()(h);
                    return [
                        s.useCallback(
                            ({ preferences: t }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { preferences: t },
                                        onCompleted: (e, t) => {
                                            const s = e?.update_customer_preferences?.errors,
                                                a = e?.update_customer_preferences?.challenge_id;
                                            s ? r(s) : n({ challengeId: a });
                                        },
                                        updater: p.Oc,
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                g = "Your setting has been successfully updated!",
                b = r.Z,
                v = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, l.A)(b, {}),
                        r = (0, o.useHistory)(),
                        a = (0, i.p)(),
                        u = e?.get_customer?.preferences,
                        f = s.useMemo(() => ({ require_pin_to_create_transactions: !!u?.require_pin_to_create_transactions, require_pin_to_unlock: !!u?.require_pin_to_unlock, enable_bill_pay: !!u?.enable_bill_pay, require_pin_to_link_payment_method: !!u?.require_pin_to_link_payment_method, only_receive_transfer_from_following: !!u?.only_receive_transfer_from_following, only_allow_request_from_following: !!u?.only_allow_request_from_following, enable_card_payments: !!u?.enable_card_payments }), [u]),
                        [m, p] = s.useState(f),
                        [h, v] = y(),
                        I = s.useCallback(
                            (e, t) => {
                                h({ preferences: { ...m, [e]: t } })
                                    .then(({ challengeId: e }) => {
                                        e ? r.push(d.vw, { challengeId: e, successMessage: g, challengeInitiator: d.kW.preference }) : a({ text: g });
                                    })
                                    .catch(() => {
                                        a({ text: "Something went wrong. Please try again later." }), p((n) => ({ ...n, [e]: !t }));
                                    });
                            },
                            [a, h, r, m],
                        ),
                        C = s.useCallback(
                            (e, t) => {
                                p((n) => ({ ...n, [e]: t })), I(e, t);
                            },
                            [I],
                        ),
                        Z = s.useCallback(
                            (e, t) => {
                                I(e, t);
                            },
                            [I],
                        ),
                        P = e?.get_customer?.__id ?? "get_customer";
                    return (
                        s.useEffect(() => {
                            n !== _.iF.LOADING && p(f);
                        }, [f, n]),
                        c()([P], () => {
                            t();
                        }),
                        { preferences: m, refetch: t, refetchStatus: n, handlePreferencesChange: C, handleDeferredPreferencesChange: Z, isInProgress: v }
                    );
                };
        },
        557159: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(177405),
                s = (n(585488), n(482924));
            const a = r.Z,
                c = () => {
                    const { data: e } = (0, s.A)(a, {}),
                        t = e?.get_customer?.region;
                    return t;
                };
        },
        190940: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(727384),
                s = n(467734),
                a = n(464978);
            const c = (e) => {
                const { get_transaction_by_id: t } = (0, a.Z)(e),
                    { amount_local_micro: n, currency: c, details: o, transaction_status: i, transaction_type: d } = t ?? {},
                    _ = o?.sender_results?.result,
                    l = _?.legacy?.name ?? "",
                    u = parseFloat(n),
                    f = n ? (0, r.p2)({ amount: u, currency: c }) : null,
                    m = (0, s.Z)({ senderId: _?.rest_id });
                return [(0, r.M9)({ status: i, transactionType: d, isViewerSender: m }), l && f ? { name: l, formattedAmount: f } : null];
            };
        },
        825941: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(258074),
                s = (n(585488), n(353391)),
                a = n.n(s),
                c = n(127218),
                o = n(43429);
            const i = r.Z,
                d = (e) => {
                    const t = { count: o.ic };
                    e?.searchFilterId && (t.search_filter_id = e?.searchFilterId);
                    const { data: n, fetchNext: r, refetch: s } = (0, c.C)(i, t, { fetchPolicy: "store-and-network" }),
                        d = n?.get_transactions?.__id ?? "usePaymentsTransactionsListQuery_TransactionList_slice";
                    return (
                        a()([d], () => {
                            s();
                        }),
                        { data: n, fetchNext: r, refetch: s }
                    );
                };
        },
        891414: (e, t, n) => {
            n.d(t, { C7: () => u, iP: () => l });
            var r = n(922524),
                s = n(202784),
                a = (n(585488), n(351743)),
                c = n.n(a),
                o = n(364539),
                i = n(727384);
            const d = r.Z,
                _ = ({ decision: e }) => {
                    const [t, n] = c()(d);
                    return [
                        s.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((s, a) => {
                                    t({
                                        variables: { transfer_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.respond_to_request_transfer?.id,
                                                r = e?.respond_to_request_transfer?.transaction_status,
                                                c = e?.respond_to_request_transfer?.errors,
                                                o = e?.respond_to_request_transfer?.challenge_id;
                                            n && r ? s({ transactionId: n, status: r, challengeId: o }) : a(c || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.respond_to_request_transfer?.transaction_status,
                                                s = t?.respond_to_request_transfer?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: n, reasonCode: s });
                                        },
                                        onError: a,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                l = () => _({ decision: o.m.RequestTransferDecisionAccept }),
                u = () => _({ decision: o.m.RequestTransferDecisionReject });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2562326a.5ad12b9a.js.map
