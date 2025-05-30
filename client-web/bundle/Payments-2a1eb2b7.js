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
                    label: { paddingVertical: e.spaces.space4, height: "unset" },
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
                g = n(991744),
                f = n(683799),
                m = n(492646),
                y = n(929512),
                h = n(436117),
                w = n(515510),
                C = n(642004),
                b = n(87877),
                x = n(922281),
                R = n(880428),
                P = n(582456),
                T = n(810088),
                v = n(357818),
                D = n(539660),
                S = n(724983),
                k = n(297679),
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
                if (t === R.O.Interest) return { title: q, iconType: W.Ms.interest };
                if (t === R.O.Cashback) return { title: F, iconType: W.Ms.cashback };
                const a = t === R.O.Banking;
                switch (n) {
                    case v.x.AtmWithdrawal:
                        return { title: $, iconType: W.Ms.atm };
                    case v.x.Deposit:
                        return a ? void 0 : { title: _, iconType: W.Ms.deposit, uri: e?.avatar?.uri };
                    case v.x.Withdraw:
                        return a ? void 0 : { title: M, iconType: W.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function ee({ accountName: e, createdAt: t, description: n, productCode: a, statusLabel: r, transactionType: s }) {
                const i = a === R.O.Banking;
                if (a === R.O.Interest) return Y(t);
                if (a === R.O.Cashback) return r;
                switch (s) {
                    case v.x.Transfer:
                        return n ? `For "${n}"` : r;
                    case v.x.Deposit:
                        return i ? "Direct Deposit" : e ? `From ${e}` : "";
                    case v.x.Withdraw:
                        return i ? "Payment" : e ? `To ${e}` : "";
                    case v.x.Refund:
                        return "Refund";
                    case v.x.Reverse:
                        return "Reversed payment";
                    case v.x.Payment:
                        return "Card purchase";
                    case v.x.AtmWithdrawal:
                        return r;
                    default:
                        return "";
                }
            }
            function te({ amount: e, currency: t, description: n, status: a }) {
                const r = H({ amount: e, currency: t });
                switch (a) {
                    case T.g.AwaitingRequestAcceptance:
                    case T.g.RequestVerificationRequired:
                        return n ? `Requested ${r} for "${n}"` : `Requested ${r}`;
                    case T.g.PendingRecipientAcceptance:
                        return n ? `Sent ${r} for "${n}"` : `Sent ${r}`;
                    case T.g.AwaitingUnrecognizedConfirmation:
                        return n ? `Card purchase of ${r} for "${n}"` : `Card purchase of ${r}`;
                    default:
                        return;
                }
            }
            const ne = ({ referenceTransactionId: e, transactionType: t }) => ([v.x.Refund, v.x.Reverse].includes(t) && e ? `${z.bR}/${e}` : null);
            function ae({ productCode: e, transactionType: t }) {
                if (e === R.O.Interest) return q;
                const n = e === R.O.Banking;
                switch (t) {
                    case v.x.Transfer:
                        return "Peer-to-peer transfer";
                    case v.x.Deposit:
                        return n ? "Direct Deposit" : _;
                    case v.x.Withdraw:
                        return n ? "Payment" : M;
                    case v.x.Refund:
                        return "Refund";
                    case v.x.Reverse:
                        return "Reversed payment";
                    case v.x.Payment:
                        return "Card purchase";
                    case v.x.AtmWithdrawal:
                        return $;
                    default:
                        return "";
                }
            }
            const re = Object.freeze({ [T.g.Cancelled]: "Cancelled", [T.g.Failed]: "Failed", [T.g.Expired]: "Expired", [T.g.Pending]: "Pending", [T.g.Hold]: "Pending", [T.g.AuthorizationOpen]: "Pending", [T.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [T.g.PendingReview]: "Under review", [T.g.PendingRecipientAction]: "Pending", [T.g.PendingRecipientOnboarding]: "Pending", [T.g.AwaitingRequestAcceptance]: "Pending", [T.g.PendingRecipientAcceptance]: "Pending", [T.g.PinVerificationRequired]: "Pending", [T.g.RequestVerificationRequired]: "Pending", [T.g.VerificationRequired]: "Pending", [T.g.RejectedByRecipient]: "Rejected", [T.g.RequestRejected]: "Rejected", [T.g.Settled]: "Completed", [T.g.SoftSettled]: "Completed", [T.g.AuthorizationClosed]: "Completed" }),
                se = Object.freeze({ [D.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [D.P.InReview]: "Under review", [D.P.RejectedByUnsupportedRegion]: "Unsupported region", [D.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [D.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [D.P.UnrecognizedActivityConfirmed]: "Declined", [D.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                ie = Object.freeze({ [T.g.PendingRecipientAcceptance]: B, [T.g.PendingRecipientOnboarding]: B, [T.g.PendingRecipientAction]: B }),
                ce = Object.freeze({ [T.g.AwaitingRequestAcceptance]: B, [T.g.PendingRequestAcceptance]: B, [T.g.RequestVerificationRequired]: B });
            function oe({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? se[t] : void 0,
                    r = n ? (e ? ce[n] : ie[n]) : void 0,
                    s = n ? re[n] : void 0;
                return a ?? r ?? s ?? "";
            }
            function de({ isViewerSender: e, productCode: t, transactionType: n }) {
                if (t === R.O.Cashback) return W.NU.credit;
                switch (n) {
                    case v.x.Deposit:
                        return W.NU.credit;
                    case v.x.Withdraw:
                    case v.x.Payment:
                    case v.x.AtmWithdrawal:
                        return W.NU.debit;
                    case v.x.Refund:
                        return W.NU.credit;
                    default:
                        return e ? W.NU.debit : W.NU.credit;
                }
            }
            const pe = Object.freeze({ [f.t.Checking]: "Checking", [f.t.Savings]: "Savings" }),
                ue = Object.freeze({ [C.W.IssuedCardTypePhysical]: "Physical Card", [C.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                le = Object.freeze({ [y.l.Charge]: "Charge", [y.l.Combo]: "Combo", [y.l.Debit]: "Debit", [y.l.Credit]: "Credit", [y.l.DeferredDebit]: "DeferredDebit", [y.l.Prepaid]: "Prepaid" }),
                ge = Object.freeze({ [m.U.AmericanExpress]: "American Express", [m.U.Mastercard]: "Mastercard", [m.U.Visa]: "Visa" }),
                fe = Object.freeze({ [x.D.LoginRequired]: "Login required", [x.D.Invalid]: "Invalid", [x.D.Pending]: "Pending", [x.D.Revoked]: "Revoked", [x.D.Canceled]: "Canceled", [x.D.Inactive]: "Inactive" });
            function me({ status: e }) {
                return (e ? fe[e] : "") ?? "";
            }
            const ye = Object.freeze({ [P.y.Online]: "Online", [P.y.Chip]: "Chip", [P.y.Contactless]: "Contactless", [P.y.KeyedIn]: "Keyed In", [P.y.Swipe]: "Swipe" });
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
                return t === v.x.Transfer && e === T.g.PendingRecipientAcceptance;
            }
            function xe({ status: e }) {
                return e === T.g.VerificationRequired || e === T.g.RequestVerificationRequired || e === T.g.AwaitingUnrecognizedConfirmation;
            }
            function Re({ status: e, transactionType: t }) {
                return t === v.x.Transfer && e === T.g.AwaitingRequestAcceptance;
            }
            function Pe({ status: e, transactionType: t }) {
                return t === v.x.Transfer && e === T.g.PendingRecipientOnboarding;
            }
            const Te = ({ isViewerSender: e, status: t, transactionType: n }) => (be({ status: t, transactionType: n }) || Pe({ status: t, transactionType: n })) && !e;
            function ve({ isViewerSender: e, status: t, transactionType: n }) {
                return be({ status: t, transactionType: n }) && !e;
            }
            function De({ isViewerSender: e, status: t, transactionType: n }) {
                return (be({ status: t, transactionType: n }) || Pe({ status: t, transactionType: n })) && e;
            }
            function Se({ status: e }) {
                return e === T.g.AwaitingUnrecognizedConfirmation;
            }
            function ke({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (Re({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === T.g.RequestVerificationRequired && e && n === v.x.Transfer;
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
                return [T.g.Cancelled, T.g.Failed, T.g.Expired, T.g.RejectedByRecipient, T.g.RequestRejected].includes(e);
            }
            function Ve({ status: e }) {
                return [T.g.Settled, T.g.SoftSettled, T.g.AuthorizationClosed].includes(e);
            }
            function Oe({ status: e }) {
                return !Ve({ status: e });
            }
            const ze = (e) => (e ? `data:image/png;base64,${e}` : ""),
                je = Object.freeze({ [m.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [m.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [m.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                We = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: s, bank_name: i, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: p, logo: u, status: l } = a,
                        g = c ? ge[c] : "",
                        f = c ? je[c] : "";
                    return s ? { accountName: { name: r ? `${pe[s]} (...${r})` : `${pe[s]}` }, avatar: { shape: "square", uri: ze(u) }, id: n, accountType: i, type: W.dX.bank, label: me({ status: l }) } : d && o ? { accountName: { name: `${le[d]} (...${o})` }, avatar: { shape: "square", uri: f }, id: n, accountType: i, brandName: g, type: W.dX.card, label: me({ status: l }), issuedCardAccountName: !p || (p !== C.W.IssuedCardTypePhysical && p !== C.W.IssuedCardTypeVirtual) ? void 0 : `${ue[p]} (...${o})` } : null;
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
                $e = ({ productCode: e, transactionType: t }) => e === R.O.Issuing && (t === v.x.Payment || t === v.x.Refund || t === v.x.AtmWithdrawal),
                Be = ({ productCode: e, transactionType: t }) => e === R.O.Banking && (t === v.x.Deposit || t === v.x.Withdraw),
                Fe = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const r = a === v.x.AtmWithdrawal,
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
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Ke({ store: e, key: t, handleEmptyList: !0 });
                },
                Ze = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
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
                    const n = (0, c.getStorageKey)(S.Z.fragment.selections[0], {});
                    Ke({ store: e, key: n });
                    const a = (0, c.getStorageKey)(k.Z.fragment.selections[0], {});
                    Le(e, a), Ye(e);
                },
                Xe = (e) => {
                    const t = (0, c.getStorageKey)(g.Z.fragment.selections[0], { count: 10, safetyLevel: "XPayments" });
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
                st = (e) => rt({ permissions: e, permission: h.d.VerifyIdentity }),
                it = (e) => rt({ permissions: e, permission: h.d.UpdateCustomerPreferences }),
                ct = ({ roles: e }) => !!e?.includes(w.N.Ineligible),
                ot = ({ roles: e }) => !!e?.includes(w.N.PendingBalanceAutoClaim),
                dt = ({ roles: e }) => !!e?.includes(w.N.RestrictedGeolocationUsState) || !!e?.includes(w.N.RestrictedOnboardingUsState),
                pt = ({ roles: e }) => !!e?.includes(w.N.KycFailed) || !!e?.includes(w.N.PendingReview),
                ut = ({ roles: e }) => !!e?.includes(w.N.PendingKycUnverifiedLimitExceeded),
                lt = ({ permissions: e }) => rt({ permissions: e, permission: h.d.RequestTransfer }),
                gt = ({ actionPermission: e, permissions: t, roles: n }) => (st(t) && !rt({ permissions: t, permission: e }) ? ft({ roles: n }) : null),
                ft = ({ roles: e }) => {
                    const t = e?.includes(w.N.PendingSelfieVerification) || e?.includes(w.N.KycDocumentsVerified),
                        n = e?.includes(w.N.KycPendingDocumentUpload) || e?.includes(w.N.KycVerified);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.1844b94a.js.map
