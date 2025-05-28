"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2a1eb2b7"],
    {
        743080: (e, t, n) => {
            n.d(t, { JU: () => c, YP: () => p, ZP: () => u, dE: () => d, jh: () => o });
            var a = n(392237),
                s = n(708852),
                i = n(655352);
            const r = a.default.create((e) => ({
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
                    action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.spaces.space16, textAlign: "center", fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium },
                    actionNarrow: { flex: "40%", borderRadius: e.spaces.space16, fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium },
                    actionWide: { flex: 1, borderRadius: e.spaces.space16, fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium },
                    column: { flexDirection: "column", gap: e.spaces.space12 },
                    rowSpaceBetween: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-between", alignItems: "center" },
                    icon: { height: e.spaces.space32, width: e.spaces.space32, alignSelf: "center", color: e.colors.text },
                })),
                c = () => ((0, i.ZP)() ? "medium" : "small"),
                o = () => {
                    const e = (0, s.D2)(),
                        t = e ? r.modalPaddingWide : r.paddingSmall,
                        n = e ? r.paddingWide : r.paddingSmall;
                    return { container: [r.container, t], footer: [r.footer, t], root: [r.root, n], tile: [e ? r.tile : r.tileNarrow], tileList: [e ? r.tileList : r.tileListNarrow], pivotTileContainer: [r.actionsContainer, e ? null : r.actionsContainerNarrow], pivotTile: [r.action, e ? r.actionWide : r.actionNarrow] };
                },
                d = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space12, flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                p = a.default.create((e) => ({ content: { flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space8 }, description: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, actions: { flexDirection: "column", gap: e.spaces.space12 }, gap: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, arrow: { alignSelf: "center", color: e.colors.gray400, height: e.spaces.space28 } })),
                u = r;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => Se, BR: () => Te, Bj: () => xt, Bl: () => Ne, DK: () => ke, DO: () => pt, Dc: () => H, EQ: () => $e, FW: () => ut, Fs: () => tt, GU: () => oe, Gl: () => Ve, Gs: () => nt, H_: () => Xe, Ix: () => bt, J$: () => Ye, M9: () => Pe, MO: () => dt, Oc: () => Je, Ou: () => Oe, Q1: () => he, QE: () => Ke, Qu: () => mt, Se: () => Qe, So: () => st, T3: () => Ae, T7: () => Pt, Tp: () => ve, Ts: () => Ee, UM: () => De, UV: () => ft, V9: () => je, XT: () => Ie, _T: () => Ue, aY: () => at, ab: () => ct, bI: () => et, cI: () => ye, dN: () => Q, fq: () => Ct, gh: () => lt, gx: () => G, i7: () => Re, iv: () => rt, jm: () => it, lD: () => ce, lw: () => ee, nV: () => X, p2: () => L, p6: () => we, pQ: () => Y, qK: () => J, qQ: () => He, qU: () => _e, qc: () => ht, uG: () => gt, uN: () => Le, ve: () => Ze, vw: () => Z, wu: () => yt, xe: () => qe, y4: () => Tt, yH: () => ot, zK: () => Me, zx: () => te });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(617374),
                s = n.n(a),
                i = n(53647),
                r = n.n(i),
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
                b = n(87877),
                R = n(922281),
                x = n(880428),
                C = n(582456),
                P = n(810088),
                T = n(357818),
                v = n(539660),
                S = n(724983),
                D = n(297679),
                A = n(217995),
                k = n(183276),
                I = n(703325),
                N = n(215285),
                U = n(258074),
                V = n(97882),
                z = n(514639),
                W = n(441484),
                O = n(43429);
            const j = "Interest Payout",
                q = "Deposit",
                _ = "Withdrawal",
                $ = "ATM withdrawal",
                M = "Awaiting approval",
                B = "Redeemed Cash Back",
                F = u().d0a77c9b,
                K = u().g727ddcf,
                E = u().da44942d,
                L = ({ amount: e, currency: t }) => {
                    const n = Q({ amount: e, formatter: 1e6 });
                    return (0, V.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                Z = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return L({ amount: n, currency: t });
                },
                H = (e) => {
                    const t = new (s())(e);
                    return new (s())(t.toFixed(2, s().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
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
                if (t === x.O.Interest) return { title: j, iconType: O.Ms.interest };
                if (t === x.O.Cashback) return { title: B, iconType: O.Ms.cashback };
                const a = t === x.O.Banking;
                switch (n) {
                    case T.x.AtmWithdrawal:
                        return { title: $, iconType: O.Ms.atm };
                    case T.x.Deposit:
                        return a ? void 0 : { title: q, iconType: O.Ms.deposit, uri: e?.avatar?.uri };
                    case T.x.Withdraw:
                        return a ? void 0 : { title: _, iconType: O.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function J({ accountName: e, createdAt: t, description: n, productCode: a, statusLabel: s, transactionType: i }) {
                const r = a === x.O.Banking;
                if (a === x.O.Interest) return X(t);
                if (a === x.O.Cashback) return s;
                switch (i) {
                    case T.x.Transfer:
                        return n ? `For "${n}"` : s;
                    case T.x.Deposit:
                        return r ? "Direct Deposit" : e ? `From ${e}` : "";
                    case T.x.Withdraw:
                        return r ? "Payment" : e ? `To ${e}` : "";
                    case T.x.Refund:
                        return "Refund";
                    case T.x.Reverse:
                        return "Reversed payment";
                    case T.x.Payment:
                        return "Card purchase";
                    case T.x.AtmWithdrawal:
                        return s;
                    default:
                        return "";
                }
            }
            function ee({ amount: e, currency: t, description: n, status: a }) {
                const s = Z({ amount: e, currency: t });
                switch (a) {
                    case P.g.AwaitingRequestAcceptance:
                    case P.g.RequestVerificationRequired:
                        return n ? `Requested ${s} for "${n}"` : `Requested ${s}`;
                    case P.g.PendingRecipientAcceptance:
                        return n ? `Sent ${s} for "${n}"` : `Sent ${s}`;
                    case P.g.AwaitingUnrecognizedConfirmation:
                        return n ? `Card purchase of ${s} for "${n}"` : `Card purchase of ${s}`;
                    default:
                        return;
                }
            }
            const te = ({ referenceTransactionId: e, transactionType: t }) => ([T.x.Refund, T.x.Reverse].includes(t) && e ? `${z.bR}/${e}` : null);
            function ne({ productCode: e, transactionType: t }) {
                if (e === x.O.Interest) return j;
                const n = e === x.O.Banking;
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
                se = Object.freeze({ [v.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [v.P.InReview]: "Under review", [v.P.RejectedByUnsupportedRegion]: "Unsupported region", [v.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [v.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [v.P.UnrecognizedActivityConfirmed]: "Declined", [v.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                ie = Object.freeze({ [P.g.PendingRecipientAcceptance]: M, [P.g.PendingRecipientOnboarding]: M, [P.g.PendingRecipientAction]: M }),
                re = Object.freeze({ [P.g.AwaitingRequestAcceptance]: M, [P.g.PendingRequestAcceptance]: M, [P.g.RequestVerificationRequired]: M });
            function ce({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? se[t] : void 0,
                    s = n ? (e ? re[n] : ie[n]) : void 0,
                    i = n ? ae[n] : void 0;
                return a ?? s ?? i ?? "";
            }
            function oe({ isViewerSender: e, productCode: t, transactionType: n }) {
                if (t === x.O.Cashback) return O.NU.credit;
                switch (n) {
                    case T.x.Deposit:
                        return O.NU.credit;
                    case T.x.Withdraw:
                    case T.x.Payment:
                    case T.x.AtmWithdrawal:
                        return O.NU.debit;
                    case T.x.Refund:
                        return O.NU.credit;
                    default:
                        return e ? O.NU.debit : O.NU.credit;
                }
            }
            const de = Object.freeze({ [g.t.Checking]: "Checking", [g.t.Savings]: "Savings" }),
                pe = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ue = Object.freeze({ [m.l.Charge]: "Charge", [m.l.Combo]: "Combo", [m.l.Debit]: "Debit", [m.l.Credit]: "Credit", [m.l.DeferredDebit]: "DeferredDebit", [m.l.Prepaid]: "Prepaid" }),
                le = Object.freeze({ [f.U.AmericanExpress]: "American Express", [f.U.Mastercard]: "Mastercard", [f.U.Visa]: "Visa" }),
                ge = Object.freeze({ [R.D.LoginRequired]: "Login required", [R.D.Invalid]: "Invalid", [R.D.Pending]: "Pending", [R.D.Revoked]: "Revoked", [R.D.Canceled]: "Canceled", [R.D.Inactive]: "Inactive" });
            function fe({ status: e }) {
                return (e ? ge[e] : "") ?? "";
            }
            const me = Object.freeze({ [C.y.Online]: "Online", [C.y.Chip]: "Chip", [C.y.Contactless]: "Contactless", [C.y.KeyedIn]: "Keyed In", [C.y.Swipe]: "Swipe" });
            function ye({ method: e }) {
                return (e ? me[e] : "") ?? "";
            }
            const he = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, reasonCode: s, status: i, transactionType: r }) => {
                return { amountType: r ? oe({ transactionType: r, isViewerSender: n, productCode: a }) : void 0, type: r ? ne({ transactionType: r, productCode: a }) : void 0, status: i ? ce({ status: i, reasonCode: s, isViewerSender: n }) : void 0, createdAt: ((c = e), c ? F(new Date(parseInt(c, 10))) : ""), description: t };
                var c;
            };
            function we(e) {
                const t = e ? parseInt(e, 10) : null;
                return t ? E(new Date(t)) : "";
            }
            function be({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientAcceptance;
            }
            function Re({ status: e }) {
                return e === P.g.VerificationRequired || e === P.g.RequestVerificationRequired || e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function xe({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.AwaitingRequestAcceptance;
            }
            function Ce({ status: e, transactionType: t }) {
                return t === T.x.Transfer && e === P.g.PendingRecipientOnboarding;
            }
            const Pe = ({ isViewerSender: e, status: t, transactionType: n }) => (be({ status: t, transactionType: n }) || Ce({ status: t, transactionType: n })) && !e;
            function Te({ isViewerSender: e, status: t, transactionType: n }) {
                return be({ status: t, transactionType: n }) && !e;
            }
            function ve({ isViewerSender: e, status: t, transactionType: n }) {
                return (be({ status: t, transactionType: n }) || Ce({ status: t, transactionType: n })) && e;
            }
            function Se({ status: e }) {
                return e === P.g.AwaitingUnrecognizedConfirmation;
            }
            function De({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (xe({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === P.g.RequestVerificationRequired && e && n === T.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function Ae({ isViewerSender: e, status: t, transactionType: n }) {
                return xe({ status: t, transactionType: n }) && !e;
            }
            function ke(e) {
                return De(e) || Te(e) || Se({ status: e.status });
            }
            function Ie(e) {
                return ke(e) || Ae(e) || ve(e);
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
            const ze = (e) => (e ? `data:image/png;base64,${e}` : ""),
                We = Object.freeze({ [f.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [f.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [f.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                Oe = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: s, bank_account_type: i, bank_name: r, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: p, logo: u, status: l } = a,
                        g = c ? le[c] : "",
                        f = c ? We[c] : "";
                    return i && s ? { accountName: { name: `${de[i]} (...${s})` }, avatar: { shape: "square", uri: ze(u) }, id: n, accountType: r, type: O.dX.bank, label: fe({ status: l }) } : d && o ? { accountName: { name: `${ue[d]} (...${o})` }, avatar: { shape: "square", uri: f }, id: n, accountType: r, brandName: g, type: O.dX.card, label: fe({ status: l }), issuedCardAccountName: !p || (p !== w.W.IssuedCardTypePhysical && p !== w.W.IssuedCardTypeVirtual) ? void 0 : `${pe[p]} (...${o})` } : null;
                },
                je = (e) => {
                    const t = e?.core?.supported_transfer_methods,
                        n = t?.push_transfer_methods?.[0],
                        a = t?.pull_transfer_methods?.[0];
                    return { debitMethod: n, creditMethod: a };
                },
                qe = ({ method: e, methodConfigs: t, transferDirection: n }) => {
                    const a = Oe(e),
                        { creditMethod: s, debitMethod: i } = je(e),
                        r = n === O.Rz.debit && i ? t.debitMethodConfigs?.get(i) : n === O.Rz.credit && s ? t.creditMethodConfigs?.get(s) : null;
                    return a ? { ...a, config: r, debitMethod: i, creditMethod: s } : null;
                },
                _e = ({ productCode: e, transactionType: t }) => e === x.O.Issuing && (t === T.x.Payment || t === T.x.Refund || t === T.x.AtmWithdrawal),
                $e = ({ productCode: e, transactionType: t }) => e === x.O.Banking && (t === T.x.Deposit || t === T.x.Withdraw),
                Me = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const s = a === T.x.AtmWithdrawal,
                        i = _e({ productCode: n, transactionType: a });
                    return ($e({ productCode: n, transactionType: a }) || i) && t ? { ...t, type: s ? O.wC.atm : i ? O.wC.card : e === O.NU.credit ? O.wC.bankDeposit : O.wC.bankWithdraw } : void 0;
                },
                Be = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        s = t ? a.getLinkedRecords(t) : null;
                    s && s.length > 0 ? s.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                Fe = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Ke = (e) => {
                    const t = (0, c.getStorageKey)(I.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Be({ store: e, key: t, handleEmptyList: !0 });
                },
                Ee = (e) => {
                    const t = (0, c.getStorageKey)(I.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                    Be({ store: e, key: t, handleEmptyList: !0 });
                },
                Le = (e) => {
                    r()(e, (e) => {
                        Ee(e);
                    });
                },
                Ze = (e) => {
                    r()(e, (e) => {
                        Ke(e);
                    });
                },
                He = (e) => {
                    const t = (0, c.getStorageKey)(U.Z.fragment.selections[0], { search_filter_id: O.$W });
                    Fe(e, t);
                    const n = (0, c.getStorageKey)(S.Z.fragment.selections[0], {});
                    Be({ store: e, key: n });
                    const a = (0, c.getStorageKey)(D.Z.fragment.selections[0], {});
                    Fe(e, a), Ge(e);
                },
                Ge = (e) => {
                    const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], {});
                    Be({ store: e, key: t });
                },
                Qe = (e, t) => {
                    r()(e, (e) => {
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
                    if ((Re({ status: a }) || (He(e), Ge(e)), n && a)) {
                        const s = e.get(n);
                        s && (s.setValue(a, "transaction_status"), s.setValue(t, "reason_code"));
                    }
                },
                Ye = (e) => {
                    r()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(A.Z.fragment.selections[0], {});
                            Fe(e, t);
                        })(e),
                            He(e),
                            Ge(e);
                    });
                },
                Je = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], {});
                    Fe(e, t);
                },
                et = () => l.ZP.isMobileOS(),
                tt = ({ permission: e, permissions: t }) => !!t?.includes(e),
                nt = (e) => tt({ permissions: e, permission: y.d.VerifyIdentity }),
                at = (e) => tt({ permissions: e, permission: y.d.UpdateCustomerPreferences }),
                st = ({ roles: e }) => !!e?.includes(h.N.Ineligible),
                it = ({ roles: e }) => !!e?.includes(h.N.PendingBalanceAutoClaim),
                rt = ({ roles: e }) => !!e?.includes(h.N.RestrictedGeolocationUsState) || !!e?.includes(h.N.RestrictedOnboardingUsState),
                ct = ({ roles: e }) => !!e?.includes(h.N.KycFailed) || !!e?.includes(h.N.PendingReview),
                ot = ({ roles: e }) => !!e?.includes(h.N.PendingKycUnverifiedLimitExceeded),
                dt = ({ permissions: e }) => tt({ permissions: e, permission: y.d.RequestTransfer }),
                pt = ({ actionPermission: e, permissions: t, roles: n }) => (nt(t) && !tt({ permissions: t, permission: e }) ? ut({ roles: n }) : null),
                ut = ({ roles: e }) => {
                    const t = e?.includes(h.N.PendingSelfieVerification) || e?.includes(h.N.KycDocumentsVerified),
                        n = e?.includes(h.N.KycPendingDocumentUpload) || e?.includes(h.N.KycVerified);
                    return t ? z.AU.selfie.verifyIdentityPath : n ? z.AU.tier3.verifyIdentityPath : z.AU.tier2.verifyIdentityPath;
                },
                lt = () => {
                    if (l.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [o.default.ThemePaletteNames.light]: "light", [o.default.ThemePaletteNames.dark]: "dim", [o.default.ThemePaletteNames.darker]: "dark", [o.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                gt = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: s, xPaymentsSession: i }) => {
                    if (!n || !i || !a) return null;
                    const r = new URL(`${n}${e}`);
                    if ((r.searchParams.set("sessionId", i), r.searchParams.set("providerToken", a), r.searchParams.set("theme", s), t)) for (const [e, n] of t) r.searchParams.set(e, n);
                    return r.href;
                },
                ft = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= Q({ amount: n });
                },
                mt = (e) => new Date(e.year, e.month - 1, e.day),
                yt = ({ challengeId: e, status: t }) => (Re({ status: t }) && e ? z.vw : null),
                ht = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((Ye(n), e)) {
                        case z.kW.auth:
                            W.Z.closeChallenge();
                            break;
                        case z.kW.preference:
                            ((e) => {
                                r()(e, (e) => {
                                    Je(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                wt = { [z.kW.forgotPin]: z.jR, [z.kW.changeCardPin]: z.SR },
                bt = ({ challengeInitiator: e }) => (e ? wt[e] : void 0) ?? z.vw,
                Rt = (e) => parseInt(e, 10) / 100,
                xt = ({ apy: e }) => `${Rt(e).toFixed(2)}% APY`,
                Ct = ({ rate: e }) => `${Rt(e)}% Everywhere`,
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.aceef8ea.js.map
