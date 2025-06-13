"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2a1eb2b7"],
    {
        743080: (e, t, n) => {
            n.d(t, { JU: () => c, YC: () => f, YP: () => l, ZP: () => m, dE: () => p, jh: () => d, mR: () => u, sw: () => g });
            var a = n(392237),
                r = n(708852),
                s = n(58881),
                i = n(655352);
            const o = a.default.create((e) => ({
                    container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space24 },
                    spaceBetweenRow: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
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
                    settingsScreenContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, gap: e.spaces.space16, marginBottom: 200 * e.scaleMultiplier },
                })),
                c = () => ((0, i.ZP)() ? "medium" : "small"),
                d = () => {
                    const e = (0, r.D2)(),
                        t = e ? o.modalPaddingWide : o.paddingSmall,
                        n = e ? o.paddingWide : o.paddingSmall;
                    return { container: [o.container, t], footer: [o.footer, t], root: [o.root, n], tile: [e ? o.tile : o.tileNarrow], tileList: [e ? o.tileList : o.tileListNarrow], pivotTileContainer: [o.actionsContainer, e ? null : o.actionsContainerNarrow], pivotTile: [o.action, e ? o.actionWide : o.actionNarrow] };
                },
                p = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space12, flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                l = a.default.create((e) => ({ content: { flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space8 }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, actions: { flexDirection: "column", gap: e.spaces.space12 }, gap: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, arrow: { alignSelf: "center", color: e.colors.gray400, height: e.spaces.space28 } })),
                u = a.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, middle: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center", height: e.spaces.space16, width: e.spaces.space16 } })),
                g = () => s.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.primary, customFocusBackgroundColor: a.default.theme.colors.gray100, customHoverBackgroundColor: a.default.theme.colors.gray100, customPressedBackgroundColor: a.default.theme.colors.gray50 }),
                f = () => s.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.primary, customFocusBackgroundColor: a.default.theme.colors.gray100, customHoverBackgroundColor: a.default.theme.colors.gray100, customPressedBackgroundColor: a.default.theme.colors.gray50, customFocusRingColor: a.default.theme.colors.transparent }),
                m = o;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => Ae, BR: () => Se, Bj: () => Dt, Bl: () => Oe, DK: () => Ve, DO: () => mt, Dc: () => Q, EQ: () => Ke, FW: () => yt, Fs: () => it, GU: () => pe, Gl: () => Be, Gs: () => ot, H_: () => nt, Ix: () => Tt, J$: () => at, M9: () => De, MO: () => ft, Mw: () => Je, NG: () => _e, Oc: () => rt, Ou: () => qe, Q1: () => be, QE: () => Ze, Qu: () => bt, Se: () => tt, So: () => dt, T3: () => Ne, T7: () => kt, Tp: () => ke, Ts: () => Ge, UM: () => Ie, UV: () => Ct, V9: () => Me, XT: () => Ue, _T: () => ze, aY: () => ct, ab: () => ut, bI: () => st, dN: () => Y, fq: () => St, gh: () => ht, gx: () => X, i7: () => Pe, iv: () => lt, jm: () => pt, lD: () => de, lw: () => ne, nV: () => J, p2: () => Z, p6: () => xe, pQ: () => ee, qK: () => te, qQ: () => Ye, qU: () => Fe, qc: () => Rt, uG: () => wt, uN: () => Qe, ve: () => Xe, vw: () => G, wg: () => Ce, wu: () => xt, xe: () => $e, y4: () => At, yH: () => gt, zK: () => Ee, zx: () => ae });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(617374),
                r = n.n(a),
                s = n(53647),
                i = n.n(s),
                o = n(108475),
                c = n(157396),
                d = n(392237),
                p = n(111677),
                l = n.n(p),
                u = n(323265),
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
                P = n(115571),
                T = n(810088),
                v = n(357818),
                D = n(539660),
                S = n(724983),
                k = n(297679),
                A = n(942512),
                I = n(217995),
                N = n(183276),
                V = n(703325),
                U = n(215285),
                O = n(258074),
                z = n(97882),
                B = n(514639),
                j = n(441484),
                W = n(43429);
            const q = "Interest Payout",
                M = "Deposit",
                _ = "Withdrawal",
                $ = "ATM withdrawal",
                F = "Awaiting approval",
                K = "Redeemed Cash Back",
                E = l().d0a77c9b,
                H = l().g727ddcf,
                L = l().da44942d,
                Z = ({ amount: e, currency: t }) => {
                    const n = Y({ amount: e, formatter: 1e6 });
                    return (0, z.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                G = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return Z({ amount: n, currency: t });
                },
                Q = (e) => {
                    const t = new (r())(e);
                    return new (r())(t.toFixed(2, r().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                X = (e) => {
                    const t = parseFloat(e);
                    return Y({ amount: t });
                },
                Y = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function J(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), H(t);
            }
            function ee({ account: e, productCode: t, transactionType: n }) {
                if (t === x.O.Interest) return { title: q, iconType: W.Ms.interest };
                if (t === x.O.Cashback) return { title: K, iconType: W.Ms.cashback };
                const a = t === x.O.Banking;
                switch (n) {
                    case v.x.AtmWithdrawal:
                        return { title: $, iconType: W.Ms.atm };
                    case v.x.Deposit:
                        return a ? void 0 : { title: M, iconType: W.Ms.deposit, uri: e?.avatar?.uri };
                    case v.x.Withdraw:
                        return a ? void 0 : { title: _, iconType: W.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function te({ accountName: e, createdAt: t, description: n, productCode: a, statusLabel: r, transactionType: s }) {
                const i = a === x.O.Banking;
                if (a === x.O.Interest) return J(t);
                if (a === x.O.Cashback) return r;
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
            function ne({ amount: e, currency: t, description: n, status: a }) {
                const r = G({ amount: e, currency: t });
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
            const ae = ({ referenceTransactionId: e, transactionType: t }) => ([v.x.Refund, v.x.Reverse].includes(t) && e ? `${B.bR}/${e}` : null);
            function re({ productCode: e, transactionType: t }) {
                if (e === x.O.Interest) return q;
                const n = e === x.O.Banking;
                switch (t) {
                    case v.x.Transfer:
                        return "Peer-to-peer transfer";
                    case v.x.Deposit:
                        return n ? "Direct Deposit" : M;
                    case v.x.Withdraw:
                        return n ? "Payment" : _;
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
            const se = Object.freeze({ [T.g.Cancelled]: "Cancelled", [T.g.Failed]: "Failed", [T.g.Expired]: "Expired", [T.g.Pending]: "Pending", [T.g.Hold]: "Pending", [T.g.AuthorizationOpen]: "Pending", [T.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [T.g.PendingReview]: "Under review", [T.g.PendingRecipientAction]: "Pending", [T.g.PendingRecipientOnboarding]: "Pending", [T.g.AwaitingRequestAcceptance]: "Pending", [T.g.PendingRecipientAcceptance]: "Pending", [T.g.PinVerificationRequired]: "Pending", [T.g.RequestVerificationRequired]: "Pending", [T.g.VerificationRequired]: "Pending", [T.g.RejectedByRecipient]: "Rejected", [T.g.RequestRejected]: "Rejected", [T.g.Settled]: "Completed", [T.g.SoftSettled]: "Completed", [T.g.AuthorizationClosed]: "Completed", [T.g.PendingFundingTransactionSettlement]: "Pending", [T.g.CreditedAwaitingSettlement]: "Pending" }),
                ie = Object.freeze({ [D.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [D.P.InReview]: "Under review", [D.P.RejectedByUnsupportedRegion]: "Unsupported region", [D.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [D.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [D.P.UnrecognizedActivityConfirmed]: "Declined", [D.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                oe = Object.freeze({ [T.g.PendingRecipientAcceptance]: F, [T.g.PendingRecipientOnboarding]: F, [T.g.PendingRecipientAction]: F }),
                ce = Object.freeze({ [T.g.AwaitingRequestAcceptance]: F, [T.g.PendingRequestAcceptance]: F, [T.g.RequestVerificationRequired]: F });
            function de({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? ie[t] : void 0,
                    r = n ? (e ? ce[n] : oe[n]) : void 0,
                    s = n ? se[n] : void 0;
                return a ?? r ?? s ?? "";
            }
            function pe({ isViewerSender: e, productCode: t, transactionType: n }) {
                if (t === x.O.Cashback) return W.NU.credit;
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
            const le = Object.freeze({ [g.t.Checking]: "Checking", [g.t.Savings]: "Savings" }),
                ue = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ge = Object.freeze({ [m.l.Charge]: "Charge", [m.l.Combo]: "Combo", [m.l.Debit]: "Debit", [m.l.Credit]: "Credit", [m.l.DeferredDebit]: "DeferredDebit", [m.l.Prepaid]: "Prepaid" }),
                fe = Object.freeze({ [f.U.AmericanExpress]: "American Express", [f.U.Mastercard]: "Mastercard", [f.U.Visa]: "Visa" }),
                me = Object.freeze({ [b.D.LoginRequired]: "Login required", [b.D.Invalid]: "Invalid", [b.D.Pending]: "Pending", [b.D.Revoked]: "Revoked", [b.D.Canceled]: "Canceled", [b.D.Inactive]: "Inactive" });
            function ye({ status: e }) {
                return (e ? me[e] : "") ?? "";
            }
            const he = Object.freeze({ [R.y.Online]: "Online", [R.y.Chip]: "Chip", [R.y.Contactless]: "Contactless", [R.y.KeyedIn]: "Keyed In", [R.y.Swipe]: "Swipe" }),
                we = Object.freeze({ [P.B.Ach]: "Bank Transfer (ACH)", [P.B.Aft]: "Funds Transfer (AFT)", [P.B.Oct]: "Instant Payment (OCT)", [P.B.Wire]: "Wire Transfer", [P.B.ProviderBankTransfer]: "Third-Party Bank Transfer" });
            function Ce({ method: e, rail: t }) {
                const n = e ? he[e] : "",
                    a = t ? we[t] : "";
                return n || a || "";
            }
            const be = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, reasonCode: r, status: s, transactionType: i }) => {
                return { amountType: i ? pe({ transactionType: i, isViewerSender: n, productCode: a }) : void 0, type: i ? re({ transactionType: i, productCode: a }) : void 0, status: s ? de({ status: s, reasonCode: r, isViewerSender: n }) : void 0, createdAt: ((o = e), o ? E(new Date(parseInt(o, 10))) : ""), description: t };
                var o;
            };
            function xe(e) {
                const t = e ? parseInt(e, 10) : null;
                return t ? L(new Date(t)) : "";
            }
            function Re({ status: e, transactionType: t }) {
                return t === v.x.Transfer && e === T.g.PendingRecipientAcceptance;
            }
            function Pe({ status: e }) {
                return e === T.g.VerificationRequired || e === T.g.RequestVerificationRequired || e === T.g.AwaitingUnrecognizedConfirmation;
            }
            function Te({ status: e, transactionType: t }) {
                return t === v.x.Transfer && e === T.g.AwaitingRequestAcceptance;
            }
            function ve({ status: e, transactionType: t }) {
                return t === v.x.Transfer && e === T.g.PendingRecipientOnboarding;
            }
            const De = ({ isViewerSender: e, status: t, transactionType: n }) => (Re({ status: t, transactionType: n }) || ve({ status: t, transactionType: n })) && !e;
            function Se({ isViewerSender: e, status: t, transactionType: n }) {
                return Re({ status: t, transactionType: n }) && !e;
            }
            function ke({ isViewerSender: e, status: t, transactionType: n }) {
                return (Re({ status: t, transactionType: n }) || ve({ status: t, transactionType: n })) && e;
            }
            function Ae({ status: e }) {
                return e === T.g.AwaitingUnrecognizedConfirmation;
            }
            function Ie({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (Te({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === T.g.RequestVerificationRequired && e && n === v.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function Ne({ isViewerSender: e, status: t, transactionType: n }) {
                return Te({ status: t, transactionType: n }) && !e;
            }
            function Ve(e) {
                return Ie(e) || Se(e) || Ae({ status: e.status });
            }
            function Ue(e) {
                return Ve(e) || Ne(e) || ke(e);
            }
            function Oe({ status: e }) {
                return [T.g.Cancelled, T.g.Failed, T.g.Expired, T.g.RejectedByRecipient, T.g.RequestRejected].includes(e);
            }
            function ze({ status: e }) {
                return [T.g.Settled, T.g.SoftSettled, T.g.AuthorizationClosed].includes(e);
            }
            function Be({ status: e }) {
                return !ze({ status: e });
            }
            const je = (e) => (e ? `data:image/png;base64,${e}` : ""),
                We = Object.freeze({ [f.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [f.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [f.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                qe = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: s, bank_name: i, card_brand: o, card_number_mask: c, card_type: d, issued_card_type: p, logo: l, status: u } = a,
                        g = o ? fe[o] : "",
                        f = o ? We[o] : "";
                    return s ? { accountName: { name: r ? `${le[s]} (...${r})` : `${le[s]}` }, avatar: { shape: "square", uri: je(l) }, id: n, accountType: i, type: W.dX.bank, label: ye({ status: u }) } : d && c ? { accountName: { name: `${ge[d]} (...${c})` }, avatar: { shape: "square", uri: f }, id: n, accountType: i, brandName: g, type: W.dX.card, label: ye({ status: u }), issuedCardAccountName: !p || (p !== w.W.IssuedCardTypePhysical && p !== w.W.IssuedCardTypeVirtual) ? void 0 : `${ue[p]} (...${c})` } : null;
                },
                Me = (e) => {
                    const t = e?.core?.supported_transfer_methods,
                        n = t?.push_transfer_methods?.[0],
                        a = t?.pull_transfer_methods?.[0];
                    return { debitMethod: n, creditMethod: a };
                },
                _e = ({ creditMethod: e, debitMethod: t, methodConfigs: n, transferDirection: a }) => (a === W.Rz.debit && t ? n.debitMethodConfigs?.get(t) : a === W.Rz.credit && e ? n.creditMethodConfigs?.get(e) : null),
                $e = ({ method: e, methodConfigs: t, transferDirection: n }) => {
                    const a = qe(e),
                        { creditMethod: r, debitMethod: s } = Me(e),
                        i = n === W.Rz.debit && s ? t.debitMethodConfigs?.get(s) : n === W.Rz.credit && r ? t.creditMethodConfigs?.get(r) : null;
                    return a ? { ...a, config: i, debitMethod: s, creditMethod: r } : null;
                },
                Fe = ({ productCode: e, transactionType: t }) => e === x.O.Issuing && (t === v.x.Payment || t === v.x.Refund || t === v.x.AtmWithdrawal),
                Ke = ({ productCode: e, transactionType: t }) => e === x.O.Banking && (t === v.x.Deposit || t === v.x.Withdraw),
                Ee = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const r = a === v.x.AtmWithdrawal,
                        s = Fe({ productCode: n, transactionType: a });
                    return (Ke({ productCode: n, transactionType: a }) || s) && t ? { ...t, type: r ? W.wC.atm : s ? W.wC.card : e === W.NU.credit ? W.wC.bankDeposit : W.wC.bankWithdraw } : void 0;
                },
                He = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        r = t ? a.getLinkedRecords(t) : null;
                    r && r.length > 0 ? r.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                Le = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Ze = (e) => {
                    const t = (0, o.getStorageKey)(V.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    He({ store: e, key: t, handleEmptyList: !0 });
                },
                Ge = (e) => {
                    const t = (0, o.getStorageKey)(V.Z.fragment.selections[0], { filter: C.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                    He({ store: e, key: t, handleEmptyList: !0 });
                },
                Qe = (e) => {
                    i()(e, (e) => {
                        Ge(e);
                    });
                },
                Xe = (e) => {
                    i()(e, (e) => {
                        Ze(e);
                    });
                },
                Ye = (e) => {
                    const t = (0, o.getStorageKey)(O.Z.fragment.selections[0], { search_filter_id: W.$W });
                    Le(e, t);
                    const n = (0, o.getStorageKey)(S.Z.fragment.selections[0], {});
                    He({ store: e, key: n });
                    const a = (0, o.getStorageKey)(k.Z.fragment.selections[0], {});
                    Le(e, a), et(e);
                },
                Je = (e) => {
                    const t = (0, o.getStorageKey)(A.Z.fragment.selections[0], { count: 10, safetyLevel: "XPayments" });
                    Le(e, t);
                },
                et = (e) => {
                    const t = (0, o.getStorageKey)(N.Z.fragment.selections[0], {});
                    He({ store: e, key: t });
                },
                tt = (e, t) => {
                    i()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const n = e.get(t);
                                n && n.invalidateRecord();
                            })(e, t),
                            Ye(e),
                            et(e);
                    });
                },
                nt = (e, { reasonCode: t, recordId: n, status: a }) => {
                    if ((Pe({ status: a }) || (Ye(e), et(e)), n && a)) {
                        const r = e.get(n);
                        r && (r.setValue(a, "transaction_status"), r.setValue(t, "reason_code"));
                    }
                },
                at = (e) => {
                    i()(e, (e) => {
                        ((e) => {
                            const t = (0, o.getStorageKey)(I.Z.fragment.selections[0], {});
                            Le(e, t);
                        })(e),
                            Ye(e),
                            et(e);
                    });
                },
                rt = (e) => {
                    const t = (0, o.getStorageKey)(U.Z.fragment.selections[0], {});
                    Le(e, t);
                },
                st = () => u.ZP.isMobileOS(),
                it = ({ permission: e, permissions: t }) => !!t?.includes(e),
                ot = (e) => it({ permissions: e, permission: y.d.VerifyIdentity }),
                ct = (e) => it({ permissions: e, permission: y.d.UpdateCustomerPreferences }),
                dt = ({ roles: e }) => !!e?.includes(h.N.Ineligible),
                pt = ({ roles: e }) => !!e?.includes(h.N.PendingBalanceAutoClaim),
                lt = ({ roles: e }) => !!e?.includes(h.N.RestrictedGeolocationUsState) || !!e?.includes(h.N.RestrictedOnboardingUsState),
                ut = ({ roles: e }) => !!e?.includes(h.N.KycFailed) || !!e?.includes(h.N.PendingReview),
                gt = ({ roles: e }) => !!e?.includes(h.N.PendingKycUnverifiedLimitExceeded),
                ft = ({ permissions: e }) => it({ permissions: e, permission: y.d.RequestTransfer }),
                mt = ({ actionPermission: e, permissions: t, roles: n }) => (ot(t) && !it({ permissions: t, permission: e }) ? yt({ roles: n }) : null),
                yt = ({ roles: e }) => {
                    const t = e?.includes(h.N.PendingSelfieVerification) || e?.includes(h.N.KycDocumentsVerified),
                        n = e?.includes(h.N.KycPendingDocumentUpload) || e?.includes(h.N.KycVerified);
                    return t ? B.AU.selfie.verifyIdentityPath : n ? B.AU.tier3.verifyIdentityPath : B.AU.tier2.verifyIdentityPath;
                },
                ht = () => {
                    if (u.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [c.default.ThemePaletteNames.light]: "light", [c.default.ThemePaletteNames.dark]: "dim", [c.default.ThemePaletteNames.darker]: "dark", [c.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                wt = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: r, xPaymentsSession: s }) => {
                    if (!n || !s || !a) return null;
                    const i = new URL(`${n}${e}`);
                    if ((i.searchParams.set("sessionId", s), i.searchParams.set("providerToken", a), i.searchParams.set("theme", r), t)) for (const [e, n] of t) i.searchParams.set(e, n);
                    return i.href;
                },
                Ct = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= Y({ amount: n });
                },
                bt = (e) => new Date(e.year, e.month - 1, e.day),
                xt = ({ challengeId: e, status: t }) => (Pe({ status: t }) && e ? B.vw : null),
                Rt = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((at(n), e)) {
                        case B.kW.auth:
                            j.Z.closeChallenge();
                            break;
                        case B.kW.preference:
                            ((e) => {
                                i()(e, (e) => {
                                    rt(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                Pt = { [B.kW.forgotPin]: B.jR, [B.kW.changeCardPin]: B.SR },
                Tt = ({ challengeInitiator: e }) => (e ? Pt[e] : void 0) ?? B.vw,
                vt = (e) => parseInt(e, 10) / 100,
                Dt = ({ apy: e }) => `${vt(e).toFixed(2)}% APY`,
                St = ({ rate: e }) => `${vt(e)}% Everywhere`,
                kt = (e) => {
                    const t = e?.address,
                        n = t?.postal_code;
                    if (t && n) {
                        const e = [];
                        return t.street && e.push(t.street), t.street2 && e.push(t.street2), t.city && e.push(t.city), t.region && e.push(t.region), `${e.join(", ")} ${n}`;
                    }
                },
                At = ({ baseAmount: e, feeAmount: t, totalAmount: n }) => !!t && "0" !== t && n !== e;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.f03cd21a.js.map
