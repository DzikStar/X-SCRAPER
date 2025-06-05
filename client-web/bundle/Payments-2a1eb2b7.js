"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2a1eb2b7"],
    {
        743080: (e, t, n) => {
            n.d(t, { JU: () => o, LR: () => g, YP: () => u, ZP: () => f, dE: () => p, jh: () => d, mR: () => l });
            var a = n(392237),
                r = n(708852),
                s = n(58881),
                i = n(655352);
            const c = a.default.create((e) => ({
                    container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space24 },
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
                    label: { paddingVertical: e.spaces.space4, height: "unset" },
                    actionsContainer: { flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-evenly" },
                    actionsContainerNarrow: { flexWrap: "wrap" },
                    actionText: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium },
                    action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.spaces.space16, textAlign: "center" },
                    actionNarrow: { flex: "40%" },
                    actionWide: { flex: 1 },
                    column: { flexDirection: "column", gap: e.spaces.space12 },
                    rowSpaceBetween: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-between", alignItems: "center" },
                    icon: { height: e.spaces.space24, width: e.spaces.space24, alignSelf: "center", color: e.colors.text },
                })),
                o = () => ((0, i.ZP)() ? "medium" : "small"),
                d = () => {
                    const e = (0, r.D2)(),
                        t = e ? c.modalPaddingWide : c.paddingSmall,
                        n = e ? c.paddingWide : c.paddingSmall;
                    return { container: [c.container, t], footer: [c.footer, t], root: [c.root, n], tile: [e ? c.tile : c.tileNarrow], tileList: [e ? c.tileList : c.tileListNarrow], pivotTileContainer: [c.actionsContainer, e ? null : c.actionsContainerNarrow], pivotTile: [c.action, e ? c.actionWide : c.actionNarrow] };
                },
                p = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space12, flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                u = a.default.create((e) => ({ content: { flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space8 }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, actions: { flexDirection: "column", gap: e.spaces.space12 }, gap: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, arrow: { alignSelf: "center", color: e.colors.gray400, height: e.spaces.space28 } })),
                l = a.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, middle: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center", height: e.spaces.space16, width: e.spaces.space16 } })),
                g = s.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.primary, customFocusBackgroundColor: a.default.theme.colors.gray100, customHoverBackgroundColor: a.default.theme.colors.gray100, customPressedBackgroundColor: a.default.theme.colors.gray50 }),
                f = c;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => Se, BR: () => ve, Bj: () => Tt, Bl: () => Ue, DK: () => Ie, DO: () => gt, Dc: () => G, EQ: () => Be, FW: () => ft, Fs: () => rt, GU: () => de, Gl: () => Oe, Gs: () => st, H_: () => et, Ix: () => Rt, J$: () => tt, M9: () => Te, MO: () => lt, Mw: () => Xe, NG: () => _e, Oc: () => nt, Ou: () => We, Q1: () => we, QE: () => Ee, Qu: () => wt, Se: () => Je, So: () => ct, T3: () => Ae, T7: () => Dt, Tp: () => De, Ts: () => Ze, UM: () => ke, UV: () => ht, V9: () => qe, XT: () => Ne, _T: () => Ve, aY: () => it, ab: () => pt, bI: () => at, cI: () => he, dN: () => X, fq: () => vt, gh: () => mt, gx: () => Q, i7: () => xe, iv: () => dt, jm: () => ot, lD: () => oe, lw: () => te, nV: () => Y, p2: () => Z, p6: () => Ce, pQ: () => J, qK: () => ee, qQ: () => Qe, qU: () => $e, qc: () => bt, uG: () => yt, uN: () => He, ve: () => Ge, vw: () => H, wu: () => Ct, xe: () => Me, y4: () => St, yH: () => ut, zK: () => Fe, zx: () => ne });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(617374),
                r = n.n(a),
                s = n(53647),
                i = n.n(s),
                c = n(108475),
                o = n(157396),
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
                x = n(880428),
                R = n(582456),
                P = n(810088),
                T = n(357818),
                v = n(539660),
                D = n(724983),
                S = n(297679),
                k = n(942512),
                A = n(217995),
                I = n(183276),
                N = n(703325),
                U = n(215285),
                V = n(258074),
                O = n(97882),
                z = n(514639),
                j = n(441484),
                W = n(43429);
            const q = "Interest Payout",
                _ = "Deposit",
                M = "Withdrawal",
                $ = "ATM withdrawal",
                B = "Awaiting approval",
                F = "Redeemed Cash Back",
                K = u().d0a77c9b,
                L = u().g727ddcf,
                E = u().da44942d,
                Z = ({ amount: e, currency: t }) => {
                    const n = X({ amount: e, formatter: 1e6 });
                    return (0, O.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                H = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return Z({ amount: n, currency: t });
                },
                G = (e) => {
                    const t = new (r())(e);
                    return new (r())(t.toFixed(2, r().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                Q = (e) => {
                    const t = parseFloat(e);
                    return X({ amount: t });
                },
                X = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function Y(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), L(t);
            }
            function J({ account: e, productCode: t, transactionType: n }) {
                if (t === x.O.Interest) return { title: q, iconType: W.Ms.interest };
                if (t === x.O.Cashback) return { title: F, iconType: W.Ms.cashback };
                const a = t === x.O.Banking;
                switch (n) {
                    case T.x.AtmWithdrawal:
                        return { title: $, iconType: W.Ms.atm };
                    case T.x.Deposit:
                        return a ? void 0 : { title: _, iconType: W.Ms.deposit, uri: e?.avatar?.uri };
                    case T.x.Withdraw:
                        return a ? void 0 : { title: M, iconType: W.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function ee({ accountName: e, createdAt: t, description: n, productCode: a, statusLabel: r, transactionType: s }) {
                const i = a === x.O.Banking;
                if (a === x.O.Interest) return Y(t);
                if (a === x.O.Cashback) return r;
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
            function te({ amount: e, currency: t, description: n, status: a }) {
                const r = H({ amount: e, currency: t });
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
            const ne = ({ referenceTransactionId: e, transactionType: t }) => ([T.x.Refund, T.x.Reverse].includes(t) && e ? `${z.bR}/${e}` : null);
            function ae({ productCode: e, transactionType: t }) {
                if (e === x.O.Interest) return q;
                const n = e === x.O.Banking;
                switch (t) {
                    case T.x.Transfer:
                        return "Peer-to-peer transfer";
                    case T.x.Deposit:
                        return n ? "Direct Deposit" : _;
                    case T.x.Withdraw:
                        return n ? "Payment" : M;
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
            const re = Object.freeze({ [P.g.Cancelled]: "Cancelled", [P.g.Failed]: "Failed", [P.g.Expired]: "Expired", [P.g.Pending]: "Pending", [P.g.Hold]: "Pending", [P.g.AuthorizationOpen]: "Pending", [P.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [P.g.PendingReview]: "Under review", [P.g.PendingRecipientAction]: "Pending", [P.g.PendingRecipientOnboarding]: "Pending", [P.g.AwaitingRequestAcceptance]: "Pending", [P.g.PendingRecipientAcceptance]: "Pending", [P.g.PinVerificationRequired]: "Pending", [P.g.RequestVerificationRequired]: "Pending", [P.g.VerificationRequired]: "Pending", [P.g.RejectedByRecipient]: "Rejected", [P.g.RequestRejected]: "Rejected", [P.g.Settled]: "Completed", [P.g.SoftSettled]: "Completed", [P.g.AuthorizationClosed]: "Completed" }),
                se = Object.freeze({ [v.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [v.P.InReview]: "Under review", [v.P.RejectedByUnsupportedRegion]: "Unsupported region", [v.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [v.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [v.P.UnrecognizedActivityConfirmed]: "Declined", [v.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                ie = Object.freeze({ [P.g.PendingRecipientAcceptance]: B, [P.g.PendingRecipientOnboarding]: B, [P.g.PendingRecipientAction]: B }),
                ce = Object.freeze({ [P.g.AwaitingRequestAcceptance]: B, [P.g.PendingRequestAcceptance]: B, [P.g.RequestVerificationRequired]: B });
            function oe({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? se[t] : void 0,
                    r = n ? (e ? ce[n] : ie[n]) : void 0,
                    s = n ? re[n] : void 0;
                return a ?? r ?? s ?? "";
            }
            function de({ isViewerSender: e, productCode: t, transactionType: n }) {
                if (t === x.O.Cashback) return W.NU.credit;
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
            const pe = Object.freeze({ [g.t.Checking]: "Checking", [g.t.Savings]: "Savings" }),
                ue = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                le = Object.freeze({ [m.l.Charge]: "Charge", [m.l.Combo]: "Combo", [m.l.Debit]: "Debit", [m.l.Credit]: "Credit", [m.l.DeferredDebit]: "DeferredDebit", [m.l.Prepaid]: "Prepaid" }),
                ge = Object.freeze({ [f.U.AmericanExpress]: "American Express", [f.U.Mastercard]: "Mastercard", [f.U.Visa]: "Visa" }),
                fe = Object.freeze({ [b.D.LoginRequired]: "Login required", [b.D.Invalid]: "Invalid", [b.D.Pending]: "Pending", [b.D.Revoked]: "Revoked", [b.D.Canceled]: "Canceled", [b.D.Inactive]: "Inactive" });
            function me({ status: e }) {
                return (e ? fe[e] : "") ?? "";
            }
            const ye = Object.freeze({ [R.y.Online]: "Online", [R.y.Chip]: "Chip", [R.y.Contactless]: "Contactless", [R.y.KeyedIn]: "Keyed In", [R.y.Swipe]: "Swipe" });
            function he({ method: e }) {
                return (e ? ye[e] : "") ?? "";
            }
            const we = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, reasonCode: r, status: s, transactionType: i }) => {
                return { amountType: i ? de({ transactionType: i, isViewerSender: n, productCode: a }) : void 0, type: i ? ae({ transactionType: i, productCode: a }) : void 0, status: s ? oe({ status: s, reasonCode: r, isViewerSender: n }) : void 0, createdAt: ((c = e), c ? K(new Date(parseInt(c, 10))) : ""), description: t };
                var c;
            };
            function Ce(e) {
                const t = e ? parseInt(e, 10) : null;
                return t ? E(new Date(t)) : "";
            }
            function be({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientAcceptance;
            }
            function xe({ status: e }) {
                return e === P.g.VerificationRequired || e === P.g.RequestVerificationRequired || e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function Re({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.AwaitingRequestAcceptance;
            }
            function Pe({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientOnboarding;
            }
            const Te = ({ isViewerSender: e, status: t, transactionType: n }) => (be({ status: t, transactionType: n }) || Pe({ status: t, transactionType: n })) && !e;
            function ve({ isViewerSender: e, status: t, transactionType: n }) {
                return be({ status: t, transactionType: n }) && !e;
            }
            function De({ isViewerSender: e, status: t, transactionType: n }) {
                return (be({ status: t, transactionType: n }) || Pe({ status: t, transactionType: n })) && e;
            }
            function Se({ status: e }) {
                return e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function ke({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (Re({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === P.g.RequestVerificationRequired && e && n === T.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function Ae({ isViewerSender: e, status: t, transactionType: n }) {
                return Re({ status: t, transactionType: n }) && !e;
            }
            function Ie(e) {
                return ke(e) || ve(e) || Se({ status: e.status });
            }
            function Ne(e) {
                return Ie(e) || Ae(e) || De(e);
            }
            function Ue({ status: e }) {
                return [P.g.Cancelled, P.g.Failed, P.g.Expired, P.g.RejectedByRecipient, P.g.RequestRejected].includes(e);
            }
            function Ve({ status: e }) {
                return [P.g.Settled, P.g.SoftSettled, P.g.AuthorizationClosed].includes(e);
            }
            function Oe({ status: e }) {
                return !Ve({ status: e });
            }
            const ze = (e) => (e ? `data:image/png;base64,${e}` : ""),
                je = Object.freeze({ [f.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [f.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [f.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                We = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: s, bank_name: i, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: p, logo: u, status: l } = a,
                        g = c ? ge[c] : "",
                        f = c ? je[c] : "";
                    return s ? { accountName: { name: r ? `${pe[s]} (...${r})` : `${pe[s]}` }, avatar: { shape: "square", uri: ze(u) }, id: n, accountType: i, type: W.dX.bank, label: me({ status: l }) } : d && o ? { accountName: { name: `${le[d]} (...${o})` }, avatar: { shape: "square", uri: f }, id: n, accountType: i, brandName: g, type: W.dX.card, label: me({ status: l }), issuedCardAccountName: !p || (p !== w.W.IssuedCardTypePhysical && p !== w.W.IssuedCardTypeVirtual) ? void 0 : `${ue[p]} (...${o})` } : null;
                },
                qe = (e) => {
                    const t = e?.core?.supported_transfer_methods,
                        n = t?.push_transfer_methods?.[0],
                        a = t?.pull_transfer_methods?.[0];
                    return { debitMethod: n, creditMethod: a };
                },
                _e = ({ creditMethod: e, debitMethod: t, methodConfigs: n, transferDirection: a }) => (a === W.Rz.debit && t ? n.debitMethodConfigs?.get(t) : a === W.Rz.credit && e ? n.creditMethodConfigs?.get(e) : null),
                Me = ({ method: e, methodConfigs: t, transferDirection: n }) => {
                    const a = We(e),
                        { creditMethod: r, debitMethod: s } = qe(e),
                        i = n === W.Rz.debit && s ? t.debitMethodConfigs?.get(s) : n === W.Rz.credit && r ? t.creditMethodConfigs?.get(r) : null;
                    return a ? { ...a, config: i, debitMethod: s, creditMethod: r } : null;
                },
                $e = ({ productCode: e, transactionType: t }) => e === x.O.Issuing && (t === T.x.Payment || t === T.x.Refund || t === T.x.AtmWithdrawal),
                Be = ({ productCode: e, transactionType: t }) => e === x.O.Banking && (t === T.x.Deposit || t === T.x.Withdraw),
                Fe = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const r = a === T.x.AtmWithdrawal,
                        s = $e({ productCode: n, transactionType: a });
                    return (Be({ productCode: n, transactionType: a }) || s) && t ? { ...t, type: r ? W.wC.atm : s ? W.wC.card : e === W.NU.credit ? W.wC.bankDeposit : W.wC.bankWithdraw } : void 0;
                },
                Ke = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        r = t ? a.getLinkedRecords(t) : null;
                    r && r.length > 0 ? r.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                Le = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Ee = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Ke({ store: e, key: t, handleEmptyList: !0 });
                },
                Ze = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                    Ke({ store: e, key: t, handleEmptyList: !0 });
                },
                He = (e) => {
                    i()(e, (e) => {
                        Ze(e);
                    });
                },
                Ge = (e) => {
                    i()(e, (e) => {
                        Ee(e);
                    });
                },
                Qe = (e) => {
                    const t = (0, c.getStorageKey)(V.Z.fragment.selections[0], { search_filter_id: W.$W });
                    Le(e, t);
                    const n = (0, c.getStorageKey)(D.Z.fragment.selections[0], {});
                    Ke({ store: e, key: n });
                    const a = (0, c.getStorageKey)(S.Z.fragment.selections[0], {});
                    Le(e, a), Ye(e);
                },
                Xe = (e) => {
                    const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], { count: 10, safetyLevel: "XPayments" });
                    Le(e, t);
                },
                Ye = (e) => {
                    const t = (0, c.getStorageKey)(I.Z.fragment.selections[0], {});
                    Ke({ store: e, key: t });
                },
                Je = (e, t) => {
                    i()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const n = e.get(t);
                                n && n.invalidateRecord();
                            })(e, t),
                            Qe(e),
                            Ye(e);
                    });
                },
                et = (e, { reasonCode: t, recordId: n, status: a }) => {
                    if ((xe({ status: a }) || (Qe(e), Ye(e)), n && a)) {
                        const r = e.get(n);
                        r && (r.setValue(a, "transaction_status"), r.setValue(t, "reason_code"));
                    }
                },
                tt = (e) => {
                    i()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(A.Z.fragment.selections[0], {});
                            Le(e, t);
                        })(e),
                            Qe(e),
                            Ye(e);
                    });
                },
                nt = (e) => {
                    const t = (0, c.getStorageKey)(U.Z.fragment.selections[0], {});
                    Le(e, t);
                },
                at = () => l.ZP.isMobileOS(),
                rt = ({ permission: e, permissions: t }) => !!t?.includes(e),
                st = (e) => rt({ permissions: e, permission: y.d.VerifyIdentity }),
                it = (e) => rt({ permissions: e, permission: y.d.UpdateCustomerPreferences }),
                ct = ({ roles: e }) => !!e?.includes(h.N.Ineligible),
                ot = ({ roles: e }) => !!e?.includes(h.N.PendingBalanceAutoClaim),
                dt = ({ roles: e }) => !!e?.includes(h.N.RestrictedGeolocationUsState) || !!e?.includes(h.N.RestrictedOnboardingUsState),
                pt = ({ roles: e }) => !!e?.includes(h.N.KycFailed) || !!e?.includes(h.N.PendingReview),
                ut = ({ roles: e }) => !!e?.includes(h.N.PendingKycUnverifiedLimitExceeded),
                lt = ({ permissions: e }) => rt({ permissions: e, permission: y.d.RequestTransfer }),
                gt = ({ actionPermission: e, permissions: t, roles: n }) => (st(t) && !rt({ permissions: t, permission: e }) ? ft({ roles: n }) : null),
                ft = ({ roles: e }) => {
                    const t = e?.includes(h.N.PendingSelfieVerification) || e?.includes(h.N.KycDocumentsVerified),
                        n = e?.includes(h.N.KycPendingDocumentUpload) || e?.includes(h.N.KycVerified);
                    return t ? z.AU.selfie.verifyIdentityPath : n ? z.AU.tier3.verifyIdentityPath : z.AU.tier2.verifyIdentityPath;
                },
                mt = () => {
                    if (l.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [o.default.ThemePaletteNames.light]: "light", [o.default.ThemePaletteNames.dark]: "dim", [o.default.ThemePaletteNames.darker]: "dark", [o.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                yt = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: r, xPaymentsSession: s }) => {
                    if (!n || !s || !a) return null;
                    const i = new URL(`${n}${e}`);
                    if ((i.searchParams.set("sessionId", s), i.searchParams.set("providerToken", a), i.searchParams.set("theme", r), t)) for (const [e, n] of t) i.searchParams.set(e, n);
                    return i.href;
                },
                ht = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= X({ amount: n });
                },
                wt = (e) => new Date(e.year, e.month - 1, e.day),
                Ct = ({ challengeId: e, status: t }) => (xe({ status: t }) && e ? z.vw : null),
                bt = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((tt(n), e)) {
                        case z.kW.auth:
                            j.Z.closeChallenge();
                            break;
                        case z.kW.preference:
                            ((e) => {
                                i()(e, (e) => {
                                    nt(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                xt = { [z.kW.forgotPin]: z.jR, [z.kW.changeCardPin]: z.SR },
                Rt = ({ challengeInitiator: e }) => (e ? xt[e] : void 0) ?? z.vw,
                Pt = (e) => parseInt(e, 10) / 100,
                Tt = ({ apy: e }) => `${Pt(e).toFixed(2)}% APY`,
                vt = ({ rate: e }) => `${Pt(e)}% Everywhere`,
                Dt = (e) => {
                    const t = e?.address,
                        n = t?.postal_code;
                    if (t && n) {
                        const e = [];
                        return t.street && e.push(t.street), t.street2 && e.push(t.street2), t.city && e.push(t.city), t.region && e.push(t.region), `${e.join(", ")} ${n}`;
                    }
                },
                St = ({ baseAmount: e, feeAmount: t, totalAmount: n }) => !!t && "0" !== t && n !== e;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.6a29ca1a.js.map
