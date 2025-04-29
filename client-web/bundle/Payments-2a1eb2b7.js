"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2a1eb2b7"],
    {
        743080: (e, t, n) => {
            n.d(t, { JU: () => c, ZP: () => p, dE: () => u, ir: () => d, jh: () => o });
            var a = n(392237),
                i = n(708852),
                r = n(655352);
            const s = a.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space16 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, paddingSmall: { paddingHorizontal: e.spaces.space16 }, paddingNone: { paddingHorizontal: 0 }, title: { marginBottom: e.spaces.space8 }, content: { flexDirection: "column", gap: e.spaces.space16 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, footer: { gap: e.spaces.space16, paddingVertical: e.spaces.space16 }, actionButtons: { flexDirection: "row", gap: e.spaces.space16 }, button: { flexGrow: 1 }, root: { padding: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, paddingBottom: e.spaces.space40 }, actions: { flexDirection: "row", flexWrap: "wrap" }, tile: { backgroundColor: e.colors.gray0, padding: e.spaces.space24 }, tileNarrow: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, upper: { borderRadius: "none", height: "auto" }, pinHidden: { display: "none" }, pinIframe: { width: "100%", paddingTop: "0px", alignSelf: "center" }, setting: { margin: e.spaces.space8, flexDirection: "column", gap: e.spaces.space16 }, settingHeader: { paddingHorizontal: e.spaces.space2, gap: e.spaces.space8 }, spinner: { alignSelf: "center", flex: 1 }, actionsContainer: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-evenly" }, actionsContainerNarrow: { flexWrap: "wrap" }, action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, textAlign: "center" }, actionNarrow: { flex: "40%" }, actionWide: { flex: 1 }, row: { flexDirection: "row", gap: e.spaces.space16 }, icon: { height: e.spaces.space32, width: e.spaces.space32, alignSelf: "center", color: e.colors.text } })),
                c = () => ((0, r.ZP)() ? "medium" : "small"),
                o = () => {
                    const e = (0, i.D2)(),
                        t = e ? s.paddingWide : s.paddingNarrow,
                        n = e ? s.paddingWide : s.paddingSmall;
                    return { container: [s.container, t], footer: [s.footer, t], root: [s.root, n], tile: [e ? s.tile : s.tileNarrow], pivotTileContainer: [s.actionsContainer, e ? null : s.actionsContainerNarrow], pivotTile: [s.action, e ? s.actionWide : s.actionNarrow] };
                },
                d = { width: 194, height: 146 },
                u = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space12, gap: e.spaces.space8, flexDirection: "row", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", gap: e.spaces.space8, display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                p = s;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => Re, BR: () => we, Bj: () => dt, Bl: () => Te, DK: () => Ce, DO: () => et, Dc: () => M, EQ: () => Ue, FW: () => tt, Fs: () => Me, GU: () => ie, Gl: () => De, Gs: () => Ze, H_: () => Fe, Ix: () => ot, J$: () => Be, M9: () => ye, MO: () => Ye, Oc: () => Ee, Ou: () => ke, Q1: () => pe, QE: () => Oe, Qu: () => rt, Se: () => _e, So: () => Le, T3: () => Pe, Tp: () => he, UM: () => xe, UV: () => it, XT: () => be, _T: () => ve, aY: () => He, ab: () => Xe, bI: () => Ke, dN: () => Z, gh: () => nt, gx: () => Je, i7: () => ge, iv: () => Qe, jm: () => Ge, lD: () => ae, lw: () => Q, nV: () => H, p2: () => E, pQ: () => L, qK: () => G, qQ: () => ze, qU: () => Ne, qc: () => ct, uG: () => at, uN: () => We, ve: () => je, vw: () => K, wu: () => st, zK: () => Ie, zx: () => X });
            n(543673), n(240753), n(128399);
            var a = n(617374),
                i = n.n(a),
                r = n(53647),
                s = n.n(r),
                c = n(108475),
                o = n(157396),
                d = n(392237),
                u = n(674132),
                p = n.n(u),
                l = n(323265),
                g = n(683799),
                f = n(492646),
                m = n(929512),
                y = n(436117),
                w = n(515510),
                h = n(642004),
                R = n(87877),
                x = n(922281),
                P = n(880428),
                C = n(810088),
                b = n(357818),
                T = n(539660),
                v = n(724983),
                D = n(297679),
                A = n(217995),
                S = n(183276),
                k = n(703325),
                N = n(215285),
                U = n(258074),
                I = n(97882),
                V = n(514639),
                q = n(441484),
                O = n(43429);
            const W = "Interest Payout",
                j = "Deposit",
                z = "Withdrawal",
                $ = "ATM withdrawal",
                _ = "Awaiting approval",
                F = p().d0a77c9b,
                B = p().g727ddcf,
                E = ({ amount: e, currency: t }) => {
                    const n = Z({ amount: e, formatter: 1e6 });
                    return (0, I.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                K = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return E({ amount: n, currency: t });
                },
                M = (e) => {
                    const t = new (i())(e);
                    return new (i())(t.toFixed(2, i().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                Z = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function H(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), B(t);
            }
            function L({ account: e, productCode: t, transactionType: n }) {
                if (t === P.O.Interest) return { title: W, iconType: O.Ms.interest };
                const a = t === P.O.Banking;
                switch (n) {
                    case b.x.AtmWithdrawal:
                        return { title: $, iconType: O.Ms.atm };
                    case b.x.Deposit:
                        return a ? void 0 : { title: j, iconType: O.Ms.deposit, uri: e?.avatar?.uri };
                    case b.x.Withdraw:
                        return a ? void 0 : { title: z, iconType: O.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function G({ accountName: e, createdAt: t, description: n, productCode: a, transactionType: i }) {
                const r = a === P.O.Banking;
                if (a === P.O.Interest) return H(t);
                switch (i) {
                    case b.x.Transfer:
                        return n ? `For "${n}"` : "";
                    case b.x.Deposit:
                        return r ? "Direct Deposit" : e ? `From ${e}` : "";
                    case b.x.Withdraw:
                        return r ? "Payment" : e ? `To ${e}` : "";
                    case b.x.Refund:
                        return "Refund";
                    case b.x.Reverse:
                        return "Reversed payment";
                    case b.x.Payment:
                        return "Card purchase";
                    case b.x.AtmWithdrawal:
                        return "Completed";
                    default:
                        return "";
                }
            }
            function Q({ amount: e, currency: t, description: n, status: a }) {
                const i = K({ amount: e, currency: t });
                switch (a) {
                    case C.g.AwaitingRequestAcceptance:
                    case C.g.RequestVerificationRequired:
                        return n ? `Requested ${i} for "${n}"` : `Requested ${i}`;
                    case C.g.PendingRecipientAcceptance:
                        return n ? `Sent ${i} for "${n}"` : `Sent ${i}`;
                    case C.g.AwaitingUnrecognizedConfirmation:
                        return n ? `Card purchase of ${i} for "${n}"` : `Card purchase of ${i}`;
                    default:
                        return;
                }
            }
            const X = ({ referenceTransactionId: e, transactionType: t }) => ([b.x.Refund, b.x.Reverse].includes(t) && e ? `${V.bR}/${e}` : null);
            function J({ productCode: e, transactionType: t }) {
                if (e === P.O.Interest) return W;
                const n = e === P.O.Banking;
                switch (t) {
                    case b.x.Transfer:
                        return "Peer-to-peer transfer";
                    case b.x.Deposit:
                        return n ? "Direct Deposit" : j;
                    case b.x.Withdraw:
                        return n ? "Payment" : z;
                    case b.x.Refund:
                        return "Refund";
                    case b.x.Reverse:
                        return "Reversed payment";
                    case b.x.Payment:
                        return "Card purchase";
                    case b.x.AtmWithdrawal:
                        return $;
                    default:
                        return "";
                }
            }
            const Y = Object.freeze({ [C.g.Cancelled]: "Cancelled", [C.g.Failed]: "Failed", [C.g.Expired]: "Expired", [C.g.Pending]: "Pending", [C.g.Hold]: "Pending", [C.g.AuthorizationOpen]: "Pending", [C.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [C.g.PendingReview]: "Under review", [C.g.PendingRecipientAction]: "Pending", [C.g.PendingRecipientOnboarding]: "Pending", [C.g.AwaitingRequestAcceptance]: "Pending", [C.g.PendingRecipientAcceptance]: "Pending", [C.g.PinVerificationRequired]: "Pending", [C.g.RequestVerificationRequired]: "Pending", [C.g.VerificationRequired]: "Pending", [C.g.RejectedByRecipient]: "Rejected", [C.g.RequestRejected]: "Rejected", [C.g.Settled]: "Completed", [C.g.SoftSettled]: "Completed", [C.g.AuthorizationClosed]: "Completed" }),
                ee = Object.freeze({ [T.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [T.P.InReview]: "Under review", [T.P.RejectedByUnsupportedRegion]: "Unsupported region", [T.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [T.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [T.P.UnrecognizedActivityConfirmed]: "Awaiting retry", [T.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                te = Object.freeze({ [C.g.PendingRecipientAcceptance]: _, [C.g.PendingRecipientOnboarding]: _, [C.g.PendingRecipientAction]: _ }),
                ne = Object.freeze({ [C.g.AwaitingRequestAcceptance]: _, [C.g.PendingRequestAcceptance]: _, [C.g.RequestVerificationRequired]: _ });
            function ae({ isViewerSender: e, reasonCode: t, status: n }) {
                const a = t ? ee[t] : void 0,
                    i = n ? (e ? ne[n] : te[n]) : void 0,
                    r = n ? Y[n] : void 0;
                return a ?? i ?? r ?? "";
            }
            function ie({ isViewerSender: e, transactionType: t }) {
                switch (t) {
                    case b.x.Deposit:
                        return O.NU.credit;
                    case b.x.Withdraw:
                    case b.x.Payment:
                    case b.x.AtmWithdrawal:
                        return O.NU.debit;
                    case b.x.Refund:
                        return O.NU.credit;
                    default:
                        return e ? O.NU.debit : O.NU.credit;
                }
            }
            const re = Object.freeze({ [g.t.Checking]: "Checking", [g.t.Savings]: "Savings" }),
                se = Object.freeze({ [h.W.IssuedCardTypePhysical]: "Physical Card", [h.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ce = Object.freeze({ [m.l.Charge]: "Charge", [m.l.Combo]: "Combo", [m.l.Debit]: "Debit", [m.l.Credit]: "Credit", [m.l.DeferredDebit]: "DeferredDebit", [m.l.Prepaid]: "Prepaid" }),
                oe = Object.freeze({ [f.U.AmericanExpress]: "American Express", [f.U.Mastercard]: "Mastercard", [f.U.Visa]: "Visa" }),
                de = Object.freeze({ [x.D.LoginRequired]: "Login required", [x.D.Invalid]: "Invalid", [x.D.Pending]: "Pending", [x.D.Revoked]: "Revoked", [x.D.Canceled]: "Canceled", [x.D.Inactive]: "Inactive" });
            function ue({ status: e }) {
                return (e ? de[e] : "") ?? "";
            }
            const pe = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, reasonCode: i, status: r, transactionType: s }) => ({ amountType: s ? ie({ transactionType: s, isViewerSender: n }) : void 0, type: s ? J({ transactionType: s, productCode: a }) : void 0, status: r ? ae({ status: r, reasonCode: i, isViewerSender: n }) : void 0, createdAt: F(new Date(parseInt(e, 10))), description: t });
            function le({ status: e, transactionType: t }) {
                return t === b.x.Transfer && e === C.g.PendingRecipientAcceptance;
            }
            function ge({ status: e }) {
                return e === C.g.VerificationRequired || e === C.g.RequestVerificationRequired || e === C.g.AwaitingUnrecognizedConfirmation;
            }
            function fe({ status: e, transactionType: t }) {
                return t === b.x.Transfer && e === C.g.AwaitingRequestAcceptance;
            }
            function me({ status: e, transactionType: t }) {
                return t === b.x.Transfer && e === C.g.PendingRecipientOnboarding;
            }
            const ye = ({ isViewerSender: e, status: t, transactionType: n }) => (le({ status: t, transactionType: n }) || me({ status: t, transactionType: n })) && !e;
            function we({ isViewerSender: e, status: t, transactionType: n }) {
                return le({ status: t, transactionType: n }) && !e;
            }
            function he({ isViewerSender: e, status: t, transactionType: n }) {
                return (le({ status: t, transactionType: n }) || me({ status: t, transactionType: n })) && e;
            }
            function Re({ status: e }) {
                return e === C.g.AwaitingUnrecognizedConfirmation;
            }
            function xe({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (fe({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === C.g.RequestVerificationRequired && e && n === b.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function Pe({ isViewerSender: e, status: t, transactionType: n }) {
                return fe({ status: t, transactionType: n }) && !e;
            }
            function Ce(e) {
                return xe(e) || we(e) || Re({ status: e.status });
            }
            function be(e) {
                return Ce(e) || Pe(e) || he(e);
            }
            function Te({ status: e }) {
                return [C.g.Cancelled, C.g.Failed, C.g.Expired, C.g.RejectedByRecipient, C.g.RequestRejected].includes(e);
            }
            function ve({ status: e }) {
                return [C.g.Settled, C.g.SoftSettled, C.g.AuthorizationClosed].includes(e);
            }
            function De({ status: e }) {
                return !ve({ status: e });
            }
            const Ae = (e) => (e ? `data:image/png;base64,${e}` : ""),
                Se = Object.freeze({ [f.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [f.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [f.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                ke = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: i, bank_account_type: r, bank_name: s, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: u, logo: p, status: l } = a,
                        g = c ? oe[c] : "",
                        f = c ? Se[c] : "";
                    return r && i ? { accountName: { name: `${re[r]} (...${i})` }, avatar: { shape: "square", uri: Ae(p) }, id: n, accountType: s, type: O.dX.bank, label: ue({ status: l }) } : d && o ? { accountName: { name: `${ce[d]} (...${o})` }, avatar: { shape: "square", uri: f }, id: n, accountType: s, brandName: g, type: O.dX.card, label: ue({ status: l }), issuedCardAccountName: !u || (u !== h.W.IssuedCardTypePhysical && u !== h.W.IssuedCardTypeVirtual) ? void 0 : `${se[u]} (...${o})` } : null;
                },
                Ne = ({ productCode: e, transactionType: t }) => e === P.O.Issuing && (t === b.x.Payment || t === b.x.Refund || t === b.x.AtmWithdrawal),
                Ue = ({ productCode: e, transactionType: t }) => e === P.O.Banking && (t === b.x.Deposit || t === b.x.Withdraw),
                Ie = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const i = a === b.x.AtmWithdrawal,
                        r = Ne({ productCode: n, transactionType: a });
                    return (Ue({ productCode: n, transactionType: a }) || r) && t ? { ...t, type: i ? O.wC.atm : r ? O.wC.card : e === O.NU.credit ? O.wC.bankDeposit : O.wC.bankWithdraw } : void 0;
                },
                Ve = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        i = t ? a.getLinkedRecords(t) : null;
                    i && i.length > 0 ? i.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                qe = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Oe = (e) => {
                    const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], { filter: R.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Ve({ store: e, key: t, handleEmptyList: !0 });
                },
                We = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], { filter: R.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                            Ve({ store: e, key: t, handleEmptyList: !0 });
                        })(e);
                    });
                },
                je = (e) => {
                    s()(e, (e) => {
                        Oe(e);
                    });
                },
                ze = (e) => {
                    const t = (0, c.getStorageKey)(U.Z.fragment.selections[0], { search_filter_id: O.$W });
                    qe(e, t);
                    const n = (0, c.getStorageKey)(v.Z.fragment.selections[0], {});
                    Ve({ store: e, key: n });
                    const a = (0, c.getStorageKey)(D.Z.fragment.selections[0], {});
                    qe(e, a);
                },
                $e = (e) => {
                    const t = (0, c.getStorageKey)(S.Z.fragment.selections[0], {});
                    Ve({ store: e, key: t });
                },
                _e = (e, t) => {
                    s()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const n = e.get(t);
                                n && n.invalidateRecord();
                            })(e, t),
                            ze(e),
                            $e(e);
                    });
                },
                Fe = (e, { reasonCode: t, recordId: n, status: a }) => {
                    if ((ge({ status: a }) || (ze(e), $e(e)), n && a)) {
                        const i = e.get(n);
                        i && (i.setValue(a, "transaction_status"), i.setValue(t, "reason_code"));
                    }
                },
                Be = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(A.Z.fragment.selections[0], {});
                            qe(e, t);
                        })(e),
                            ze(e),
                            $e(e);
                    });
                },
                Ee = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], {});
                    qe(e, t);
                },
                Ke = () => l.ZP.isMobileOS(),
                Me = ({ permission: e, permissions: t }) => !!t?.includes(e),
                Ze = (e) => Me({ permissions: e, permission: y.d.VerifyIdentity }),
                He = (e) => Me({ permissions: e, permission: y.d.UpdateCustomerPreferences }),
                Le = ({ roles: e }) => !!e?.includes(w.N.Ineligible),
                Ge = ({ roles: e }) => !!e?.includes(w.N.PendingBalanceAutoClaim),
                Qe = ({ roles: e }) => !!e?.includes(w.N.RestrictedGeolocationUsState) || !!e?.includes(w.N.RestrictedOnboardingUsState),
                Xe = ({ roles: e }) => !!e?.includes(w.N.KycFailed) || !!e?.includes(w.N.PendingReview),
                Je = ({ roles: e }) => !!e?.includes(w.N.PendingKycUnverifiedLimitExceeded),
                Ye = ({ permissions: e }) => Me({ permissions: e, permission: y.d.RequestTransfer }),
                et = ({ actionPermission: e, permissions: t, roles: n }) => (Ze(t) && !Me({ permissions: t, permission: e }) ? tt({ roles: n }) : null),
                tt = ({ roles: e }) => {
                    const t = e?.includes(w.N.PendingSelfieVerification) || e?.includes(w.N.KycDocumentsVerified),
                        n = e?.includes(w.N.KycPendingDocumentUpload) || e?.includes(w.N.KycVerified);
                    return t ? V.AU.selfie.verifyIdentityPath : n ? V.AU.tier3.verifyIdentityPath : V.AU.tier2.verifyIdentityPath;
                },
                nt = () => {
                    if (l.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [o.default.ThemePaletteNames.light]: "light", [o.default.ThemePaletteNames.dark]: "dim", [o.default.ThemePaletteNames.darker]: "dark", [o.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                at = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: i, xPaymentsSession: r }) => {
                    if (!n || !r || !a) return null;
                    const s = new URL(`${n}${e}`);
                    if ((s.searchParams.set("sessionId", r), s.searchParams.set("providerToken", a), s.searchParams.set("theme", i), t)) for (const [e, n] of t) s.searchParams.set(e, n);
                    return s.href;
                },
                it = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= Z({ amount: n });
                },
                rt = (e) => new Date(e.year, e.month - 1, e.day),
                st = ({ challengeId: e, status: t }) => (ge({ status: t }) && e ? V.vw : null),
                ct = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((Be(n), e)) {
                        case V.kW.auth:
                            q.Z.closeChallenge();
                            break;
                        case V.kW.preference:
                            ((e) => {
                                s()(e, (e) => {
                                    Ee(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                ot = ({ challengeInitiator: e }) => (e === V.kW.forgotPin ? V.jR : V.vw),
                dt = ({ apy: e }) => `${parseInt(e, 10) / 100}% APY`;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2a1eb2b7.9ff316ca.js.map
