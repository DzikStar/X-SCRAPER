"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2a1eb2b7"],
    {
        743080: (e, t, n) => {
            n.d(t, { JU: () => c, LR: () => l, YP: () => u, ZP: () => g, dE: () => p, jh: () => d });
            var a = n(392237),
                r = n(708852),
                s = n(58881),
                i = n(655352);
            const o = a.default.create((e) => ({
                    container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space16 },
                    paddingWide: { paddingHorizontal: e.spaces.space72 },
                    modalPaddingWide: { paddingHorizontal: e.spaces.space32 },
                    paddingSmall: { paddingHorizontal: e.spaces.space16 },
                    paddingNone: { paddingHorizontal: 0 },
                    title: { marginBottom: e.spaces.space8 },
                    content: { flexDirection: "column", gap: e.spaces.space16 },
                    header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8, marginVertical: e.spaces.space12 },
                    footer: { gap: e.spaces.space16, paddingTop: e.spaces.space24, paddingBottom: e.spaces.space40 },
                    actionButtons: { flexDirection: "row", gap: e.spaces.space16 },
                    button: { flexGrow: 1 },
                    root: { flexDirection: "column", gap: e.spaces.space16, paddingBottom: e.spaces.space40 },
                    actions: { flexDirection: "row", flexWrap: "wrap" },
                    tile: { backgroundColor: e.colors.gray0, padding: e.spaces.space20, borderRadius: e.spaces.space16 },
                    tileList: { backgroundColor: e.colors.gray0, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space12 },
                    tileNarrow: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.spaces.space16 },
                    tileListNarrow: { backgroundColor: e.colors.gray0, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderRadius: e.spaces.space16 },
                    upper: { borderRadius: "none", height: "auto" },
                    pinHidden: { display: "none" },
                    pinIframe: { width: "100%", paddingTop: "0px", alignSelf: "center" },
                    setting: { margin: e.spaces.space8, flexDirection: "column", gap: e.spaces.space16 },
                    settingHeader: { paddingHorizontal: e.spaces.space2, gap: e.spaces.space8 },
                    spinner: { alignSelf: "center", justifySelf: "center", flex: 1 },
                    poller: { marginTop: e.spaces.space48 },
                    centeredIcon: { alignSelf: "center", color: e.colors.text },
                    alignStart: { alignSelf: "start" },
                    gap: { gap: e.spaces.space8 },
                    cursor: { cursor: "pointer" },
                    illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text },
                    learnMoreLink: { color: e.colors.link, marginTop: e.spaces.space12, marginStart: e.spaces.space4 },
                    row: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" },
                    actionsContainer: { flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-evenly" },
                    actionsContainerNarrow: { flexWrap: "wrap" },
                    actionText: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium },
                    action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.spaces.space16, textAlign: "center" },
                    actionNarrow: { flex: "40%" },
                    actionWide: { flex: 1 },
                    column: { flexDirection: "column", gap: e.spaces.space12 },
                    rowSpaceBetween: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-between", alignItems: "center" },
                    icon: { height: e.spaces.space32, width: e.spaces.space32, alignSelf: "center", color: e.colors.text },
                })),
                c = () => ((0, i.ZP)() ? "medium" : "small"),
                d = () => {
                    const e = (0, r.D2)(),
                        t = e ? o.modalPaddingWide : o.paddingSmall,
                        n = e ? o.paddingWide : o.paddingSmall;
                    return { container: [o.container, t], footer: [o.footer, t], root: [o.root, n], tile: [e ? o.tile : o.tileNarrow], tileList: [e ? o.tileList : o.tileListNarrow], pivotTileContainer: [o.actionsContainer, e ? null : o.actionsContainerNarrow], pivotTile: [o.action, e ? o.actionWide : o.actionNarrow] };
                },
                p = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space12, flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                u = a.default.create((e) => ({ content: { flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space8 }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, actions: { flexDirection: "column", gap: e.spaces.space12 }, gap: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, arrow: { alignSelf: "center", color: e.colors.gray400, height: e.spaces.space28 } })),
                l = s.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.primary, customFocusBackgroundColor: a.default.theme.colors.gray100, customHoverBackgroundColor: a.default.theme.colors.gray100, customPressedBackgroundColor: a.default.theme.colors.gray50 }),
                g = o;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => Se, BR: () => Te, Bj: () => Rt, Bl: () => Ne, DK: () => Ae, DO: () => pt, Dc: () => H, EQ: () => $e, FW: () => ut, Fs: () => tt, GU: () => ce, Gl: () => Ve, Gs: () => nt, H_: () => Xe, Ix: () => Ct, J$: () => Ye, M9: () => Pe, MO: () => dt, Oc: () => Je, Ou: () => We, Q1: () => he, QE: () => Ke, Qu: () => mt, Se: () => Qe, So: () => rt, T3: () => ke, T7: () => Pt, Tp: () => ve, Ts: () => Le, UM: () => De, UV: () => ft, V9: () => je, XT: () => Ie, _T: () => Ue, aY: () => at, ab: () => ot, bI: () => et, cI: () => ye, dN: () => Q, fq: () => xt, gh: () => lt, gx: () => G, i7: () => be, iv: () => it, jm: () => st, lD: () => oe, lw: () => ee, nV: () => X, p2: () => E, p6: () => we, pQ: () => Y, qK: () => J, qQ: () => He, qU: () => _e, qc: () => ht, uG: () => gt, uN: () => Ee, ve: () => Ze, vw: () => Z, wu: () => yt, xe: () => qe, y4: () => Tt, yH: () => ct, zK: () => Me, zx: () => te });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(617374),
                r = n.n(a),
                s = n(53647),
                i = n.n(s),
                o = n(108475),
                c = n(157396),
                d = n(392237),
                p = n(111677),
                u = n.n(p),
                l = n(323265),
                g = n(683799),
                f = n(492646),
                m = n(929512),
                y = n(436117),
                h = n(515510),
                w = n(642004),
                C = n(87877),
                b = n(922281),
                R = n(880428),
                x = n(582456),
                P = n(810088),
                T = n(357818),
                v = n(539660),
                S = n(724983),
                D = n(297679),
                k = n(217995),
                A = n(183276),
                I = n(703325),
                N = n(215285),
                U = n(258074),
                V = n(97882),
                O = n(514639),
                z = n(441484),
                W = n(43429);
            const j = "Interest Payout",
                q = "Deposit",
                _ = "Withdrawal",
                $ = "ATM withdrawal",
                M = "Awaiting approval",
                B = "Redeemed Cash Back",
                F = u().d0a77c9b,
                K = u().g727ddcf,
                L = u().da44942d,
                E = ({ amount: e, currency: t }) => {
                    const n = Q({ amount: e, formatter: 1e6 });
                    return (0, V.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                Z = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return E({ amount: n, currency: t });
                },
                H = (e) => {
                    const t = new (r())(e);
                    return new (r())(t.toFixed(2, r().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                G = (e) => {
                    const t = parseFloat(e);
                    return Q({ amount: t });
                },
                Q = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function X(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), K(t);
            }
            function Y({ account: e, productCode: t, transactionType: n }) {
                if (t === R.O.Interest) return { title: j, iconType: W.Ms.interest };
                if (t === R.O.Cashback) return { title: B, iconType: W.Ms.cashback };
                const a = t === R.O.Banking;
                switch (n) {
                    case T.x.AtmWithdrawal:
                        return { title: $, iconType: W.Ms.atm };
                    case T.x.Deposit:
                        return a ? void 0 : { title: q, iconType: W.Ms.deposit, uri: e?.avatar?.uri };
                    case T.x.Withdraw:
                        return a ? void 0 : { title: _, iconType: W.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function J({ accountName: e, createdAt: t, description: n, productCode: a, statusLabel: r, transactionType: s }) {
                const i = a === R.O.Banking;
                if (a === R.O.Interest) return X(t);
                if (a === R.O.Cashback) return r;
                switch (s) {
                    case T.x.Transfer:
                        return n ? `For "${n}"` : r;
                    case T.x.Deposit:
                        return i ? "Direct Deposit" : e ? `From ${e}` : "";
                    case T.x.Withdraw:
                        return i ? "Payment" : e ? `To ${e}` : "";
                    case T.x.Refund:
                        return "Refund";
                    case T.x.Reverse:
                        return "Reversed payment";
                    case T.x.Payment:
                        return "Card purchase";
                    case T.x.AtmWithdrawal:
                        return r;
                    default:
                        return "";
                }
            }
            function ee({ amount: e, currency: t, description: n, status: a }) {
                const r = Z({ amount: e, currency: t });
                switch (a) {
                    case P.g.AwaitingRequestAcceptance:
                    case P.g.RequestVerificationRequired:
                        return n ? `Requested ${r} for "${n}"` : `Requested ${r}`;
                    case P.g.PendingRecipientAcceptance:
                        return n ? `Sent ${r} for "${n}"` : `Sent ${r}`;
                    case P.g.AwaitingUnrecognizedConfirmation:
                        return n ? `Card purchase of ${r} for "${n}"` : `Card purchase of ${r}`;
                    default:
                        return;
                }
            }
            const te = ({ referenceTransactionId: e, transactionType: t }) => ([T.x.Refund, T.x.Reverse].includes(t) && e ? `${O.bR}/${e}` : null);
            function ne({ productCode: e, transactionType: t }) {
                if (e === R.O.Interest) return j;
                const n = e === R.O.Banking;
                switch (t) {
                    case T.x.Transfer:
                        return "Peer-to-peer transfer";
                    case T.x.Deposit:
                        return n ? "Direct Deposit" : q;
                    case T.x.Withdraw:
                        return n ? "Payment" : _;
                    case T.x.Refund:
                        return "Refund";
                    case T.x.Reverse:
                        return "Reversed payment";
                    case T.x.Payment:
                        return "Card purchase";
                    case T.x.AtmWithdrawal:
                        return $;
                    default:
                        return "";
                }
            }
            const ae = Object.freeze({ [P.g.Cancelled]: "Cancelled", [P.g.Failed]: "Failed", [P.g.Expired]: "Expired", [P.g.Pending]: "Pending", [P.g.Hold]: "Pending", [P.g.AuthorizationOpen]: "Pending", [P.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [P.g.PendingReview]: "Under review", [P.g.PendingRecipientAction]: "Pending", [P.g.PendingRecipientOnboarding]: "Pending", [P.g.AwaitingRequestAcceptance]: "Pending", [P.g.PendingRecipientAcceptance]: "Pending", [P.g.PinVerificationRequired]: "Pending", [P.g.RequestVerificationRequired]: "Pending", [P.g.VerificationRequired]: "Pending", [P.g.RejectedByRecipient]: "Rejected", [P.g.RequestRejected]: "Rejected", [P.g.Settled]: "Completed", [P.g.SoftSettled]: "Completed", [P.g.AuthorizationClosed]: "Completed" }),
                re = Object.freeze({ [v.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [v.P.InReview]: "Under review", [v.P.RejectedByUnsupportedRegion]: "Unsupported region", [v.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [v.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [v.P.UnrecognizedActivityConfirmed]: "Declined", [v.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                se = Object.freeze({ [P.g.PendingRecipientAcceptance]: M, [P.g.PendingRecipientOnboarding]: M, [P.g.PendingRecipientAction]: M }),
                ie = Object.freeze({ [P.g.AwaitingRequestAcceptance]: M, [P.g.PendingRequestAcceptance]: M, [P.g.RequestVerificationRequired]: M });
            function oe({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? re[t] : void 0,
                    r = n ? (e ? ie[n] : se[n]) : void 0,
                    s = n ? ae[n] : void 0;
                return a ?? r ?? s ?? "";
            }
            function ce({ isViewerSender: e, productCode: t, transactionType: n }) {
                if (t === R.O.Cashback) return W.NU.credit;
                switch (n) {
                    case T.x.Deposit:
                        return W.NU.credit;
                    case T.x.Withdraw:
                    case T.x.Payment:
                    case T.x.AtmWithdrawal:
                        return W.NU.debit;
                    case T.x.Refund:
                        return W.NU.credit;
                    default:
                        return e ? W.NU.debit : W.NU.credit;
                }
            }
            const de = Object.freeze({ [g.t.Checking]: "Checking", [g.t.Savings]: "Savings" }),
                pe = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ue = Object.freeze({ [m.l.Charge]: "Charge", [m.l.Combo]: "Combo", [m.l.Debit]: "Debit", [m.l.Credit]: "Credit", [m.l.DeferredDebit]: "DeferredDebit", [m.l.Prepaid]: "Prepaid" }),
                le = Object.freeze({ [f.U.AmericanExpress]: "American Express", [f.U.Mastercard]: "Mastercard", [f.U.Visa]: "Visa" }),
                ge = Object.freeze({ [b.D.LoginRequired]: "Login required", [b.D.Invalid]: "Invalid", [b.D.Pending]: "Pending", [b.D.Revoked]: "Revoked", [b.D.Canceled]: "Canceled", [b.D.Inactive]: "Inactive" });
            function fe({ status: e }) {
                return (e ? ge[e] : "") ?? "";
            }
            const me = Object.freeze({ [x.y.Online]: "Online", [x.y.Chip]: "Chip", [x.y.Contactless]: "Contactless", [x.y.KeyedIn]: "Keyed In", [x.y.Swipe]: "Swipe" });
            function ye({ method: e }) {
                return (e ? me[e] : "") ?? "";
            }
            const he = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, reasonCode: r, status: s, transactionType: i }) => {
                return { amountType: i ? ce({ transactionType: i, isViewerSender: n, productCode: a }) : void 0, type: i ? ne({ transactionType: i, productCode: a }) : void 0, status: s ? oe({ status: s, reasonCode: r, isViewerSender: n }) : void 0, createdAt: ((o = e), o ? F(new Date(parseInt(o, 10))) : ""), description: t };
                var o;
            };
            function we(e) {
                const t = e ? parseInt(e, 10) : null;
                return t ? L(new Date(t)) : "";
            }
            function Ce({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientAcceptance;
            }
            function be({ status: e }) {
                return e === P.g.VerificationRequired || e === P.g.RequestVerificationRequired || e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function Re({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.AwaitingRequestAcceptance;
            }
            function xe({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientOnboarding;
            }
            const Pe = ({ isViewerSender: e, status: t, transactionType: n }) => (Ce({ status: t, transactionType: n }) || xe({ status: t, transactionType: n })) && !e;
            function Te({ isViewerSender: e, status: t, transactionType: n }) {
                return Ce({ status: t, transactionType: n }) && !e;
            }
            function ve({ isViewerSender: e, status: t, transactionType: n }) {
                return (Ce({ status: t, transactionType: n }) || xe({ status: t, transactionType: n })) && e;
            }
            function Se({ status: e }) {
                return e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function De({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (Re({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === P.g.RequestVerificationRequired && e && n === T.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function ke({ isViewerSender: e, status: t, transactionType: n }) {
                return Re({ status: t, transactionType: n }) && !e;
            }
            function Ae(e) {
                return De(e) || Te(e) || Se({ status: e.status });
            }
            function Ie(e) {
                return Ae(e) || ke(e) || ve(e);
            }
            function Ne({ status: e }) {
                return [P.g.Cancelled, P.g.Failed, P.g.Expired, P.g.RejectedByRecipient, P.g.RequestRejected].includes(e);
            }
            function Ue({ status: e }) {
                return [P.g.Settled, P.g.SoftSettled, P.g.AuthorizationClosed].includes(e);
            }
            function Ve({ status: e }) {
                return !Ue({ status: e });
            }
            const Oe = (e) => (e ? `data:image/png;base64,${e}` : ""),
                ze = Object.freeze({ [f.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [f.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [f.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                We = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: s, bank_name: i, card_brand: o, card_number_mask: c, card_type: d, issued_card_type: p, logo: u, status: l } = a,
                        g = o ? le[o] : "",
                        f = o ? ze[o] : "";
                    return s && r ? { accountName: { name: `${de[s]} (...${r})` }, avatar: { shape: "square", uri: Oe(u) }, id: n, accountType: i, type: W.dX.bank, label: fe({ status: l }) } : d && c ? { accountName: { name: `${ue[d]} (...${c})` }, avatar: { shape: "square", uri: f }, id: n, accountType: i, brandName: g, type: W.dX.card, label: fe({ status: l }), issuedCardAccountName: !p || (p !== w.W.IssuedCardTypePhysical && p !== w.W.IssuedCardTypeVirtual) ? void 0 : `${pe[p]} (...${c})` } : null;
                },
                je = (e) => {
                    const t = e?.core?.supported_transfer_methods,
                        n = t?.push_transfer_methods?.[0],
                        a = t?.pull_transfer_methods?.[0];
                    return { debitMethod: n, creditMethod: a };
                },
                qe = ({ method: e, methodConfigs: t, transferDirection: n }) => {
                    const a = We(e),
                        { creditMethod: r, debitMethod: s } = je(e),
                        i = n === W.Rz.debit && s ? t.debitMethodConfigs?.get(s) : n === W.Rz.credit && r ? t.creditMethodConfigs?.get(r) : null;
                    return a ? { ...a, config: i, debitMethod: s, creditMethod: r } : null;
                },
                _e = ({ productCode: e, transactionType: t }) => e === R.O.Issuing && (t === T.x.Payment || t === T.x.Refund || t === T.x.AtmWithdrawal),
                $e = ({ productCode: e, transactionType: t }) => e === R.O.Banking && (t === T.x.Deposit || t === T.x.Withdraw),
                Me = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const r = a === T.x.AtmWithdrawal,
                        s = _e({ productCode: n, transactionType: a });
                    return ($e({ productCode: n, transactionType: a }) || s) && t ? { ...t, type: r ? W.wC.atm : s ? W.wC.card : e === W.NU.credit ? W.wC.bankDeposit : W.wC.bankWithdraw } : void 0;
                },
                Be = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        r = t ? a.getLinkedRecords(t) : null;
                    r && r.length > 0 ? r.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                Fe = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Ke = (e) => {
                    const t = (0, o.getStorageKey)(I.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Be({ store: e, key: t, handleEmptyList: !0 });
                },
                Le = (e) => {
                    const t = (0, o.getStorageKey)(I.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                    Be({ store: e, key: t, handleEmptyList: !0 });
                },
                Ee = (e) => {
                    i()(e, (e) => {
                        Le(e);
                    });
                },
                Ze = (e) => {
                    i()(e, (e) => {
                        Ke(e);
                    });
                },
                He = (e) => {
                    const t = (0, o.getStorageKey)(U.Z.fragment.selections[0], { search_filter_id: W.$W });
                    Fe(e, t);
                    const n = (0, o.getStorageKey)(S.Z.fragment.selections[0], {});
                    Be({ store: e, key: n });
                    const a = (0, o.getStorageKey)(D.Z.fragment.selections[0], {});
                    Fe(e, a), Ge(e);
                },
                Ge = (e) => {
                    const t = (0, o.getStorageKey)(A.Z.fragment.selections[0], {});
                    Be({ store: e, key: t });
                },
                Qe = (e, t) => {
                    i()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const n = e.get(t);
                                n && n.invalidateRecord();
                            })(e, t),
                            He(e),
                            Ge(e);
                    });
                },
                Xe = (e, { reasonCode: t, recordId: n, status: a }) => {
                    if ((be({ status: a }) || (He(e), Ge(e)), n && a)) {
                        const r = e.get(n);
                        r && (r.setValue(a, "transaction_status"), r.setValue(t, "reason_code"));
                    }
                },
                Ye = (e) => {
                    i()(e, (e) => {
                        ((e) => {
                            const t = (0, o.getStorageKey)(k.Z.fragment.selections[0], {});
                            Fe(e, t);
                        })(e),
                            He(e),
                            Ge(e);
                    });
                },
                Je = (e) => {
                    const t = (0, o.getStorageKey)(N.Z.fragment.selections[0], {});
                    Fe(e, t);
                },
                et = () => l.ZP.isMobileOS(),
                tt = ({ permission: e, permissions: t }) => !!t?.includes(e),
                nt = (e) => tt({ permissions: e, permission: y.d.VerifyIdentity }),
                at = (e) => tt({ permissions: e, permission: y.d.UpdateCustomerPreferences }),
                rt = ({ roles: e }) => !!e?.includes(h.N.Ineligible),
                st = ({ roles: e }) => !!e?.includes(h.N.PendingBalanceAutoClaim),
                it = ({ roles: e }) => !!e?.includes(h.N.RestrictedGeolocationUsState) || !!e?.includes(h.N.RestrictedOnboardingUsState),
                ot = ({ roles: e }) => !!e?.includes(h.N.KycFailed) || !!e?.includes(h.N.PendingReview),
                ct = ({ roles: e }) => !!e?.includes(h.N.PendingKycUnverifiedLimitExceeded),
                dt = ({ permissions: e }) => tt({ permissions: e, permission: y.d.RequestTransfer }),
                pt = ({ actionPermission: e, permissions: t, roles: n }) => (nt(t) && !tt({ permissions: t, permission: e }) ? ut({ roles: n }) : null),
                ut = ({ roles: e }) => {
                    const t = e?.includes(h.N.PendingSelfieVerification) || e?.includes(h.N.KycDocumentsVerified),
                        n = e?.includes(h.N.KycPendingDocumentUpload) || e?.includes(h.N.KycVerified);
                    return t ? O.AU.selfie.verifyIdentityPath : n ? O.AU.tier3.verifyIdentityPath : O.AU.tier2.verifyIdentityPath;
                },
                lt = () => {
                    if (l.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [c.default.ThemePaletteNames.light]: "light", [c.default.ThemePaletteNames.dark]: "dim", [c.default.ThemePaletteNames.darker]: "dark", [c.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                gt = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: r, xPaymentsSession: s }) => {
                    if (!n || !s || !a) return null;
                    const i = new URL(`${n}${e}`);
                    if ((i.searchParams.set("sessionId", s), i.searchParams.set("providerToken", a), i.searchParams.set("theme", r), t)) for (const [e, n] of t) i.searchParams.set(e, n);
                    return i.href;
                },
                ft = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= Q({ amount: n });
                },
                mt = (e) => new Date(e.year, e.month - 1, e.day),
                yt = ({ challengeId: e, status: t }) => (be({ status: t }) && e ? O.vw : null),
                ht = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((Ye(n), e)) {
                        case O.kW.auth:
                            z.Z.closeChallenge();
                            break;
                        case O.kW.preference:
                            ((e) => {
                                i()(e, (e) => {
                                    Je(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                wt = { [O.kW.forgotPin]: O.jR, [O.kW.changeCardPin]: O.SR },
                Ct = ({ challengeInitiator: e }) => (e ? wt[e] : void 0) ?? O.vw,
                bt = (e) => parseInt(e, 10) / 100,
                Rt = ({ apy: e }) => `${bt(e).toFixed(2)}% APY`,
                xt = ({ rate: e }) => `${bt(e)}% Everywhere`,
                Pt = (e) => {
                    const t = e?.address,
                        n = t?.postal_code;
                    if (t && n) {
                        const e = [];
                        return t.street && e.push(t.street), t.street2 && e.push(t.street2), t.city && e.push(t.city), t.region && e.push(t.region), `${e.join(", ")} ${n}`;
                    }
                },
                Tt = ({ baseAmount: e, feeAmount: t, totalAmount: n }) => !!t && "0" !== t && n !== e;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.a6fff18a.js.map
