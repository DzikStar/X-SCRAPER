"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Payments~bundle.PaymentReceipt-8ed0fac5"],
    {
        97882: (e, t, n) => {
            n.d(t, { T: () => i, x: () => s });
            var a = n(674132),
                r = n.n(a);
            const i = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                s = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: a = !1, strictAmount: r = !1 }) => {
                    const s = r ? e : parseInt(e, 10) / n,
                        o = i[t]?.(s);
                    return a ? c(o) : o;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        412450: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(990312),
                r = (n(585488), n(712696)),
                i = n.n(r),
                s = n(514639);
            const c = a.Z,
                o = { "payments-dev.x.com": s.Re.development, "money-dev.x.com": s.Re.development, "payments-staging.x.com": s.Re.staging, "money-staging.x.com": s.Re.staging, "money.x.com": s.Re.production, "payments-prod.x.com": s.Re.production },
                d = () => {
                    const e = i()(c, {}),
                        t = e?.get_payments_client_config,
                        n = t?.payments_web_host,
                        a = t?.sardine_api_subdomain,
                        r = "https://";
                    return { environment: (n ? o[n] : null) ?? s.Re.production, paymentsOrigin: n ? `${r}${n}` : null, sardineClientID: t?.sardine_client_id, sardineSdkUrl: a ? `https://${a}/assets/loader.min.js` : null, sardineEnvironment: t?.sardine_environment, sardinePixelSubdomain: t?.sardine_pixel_subdomain, sardineApiSubdomain: a, reportUrl: t?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: t?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: t?.socure_public_key, forwardWithSdkUrl: n ? `${r}${n}/${s.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: t?.stripe_issuing_publishable_key };
                };
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => m });
            var a = n(202784),
                r = n(437429),
                i = n.n(r),
                s = n(57074),
                c = n.n(s),
                o = n(10622),
                d = n.n(o),
                l = n(71620),
                u = n(312771),
                p = n(535338);
            function m(e, t, n) {
                const r = c()(t),
                    s = c()(n),
                    o = i()(),
                    m = (0, l.po)(),
                    [g, f] = a.useState(null),
                    [h, y] = a.useState(!1),
                    w = a.useCallback(() => {
                        h ||
                            (y(!0),
                            d()(o, e, r, { networkCacheConfig: s?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    y(!1);
                                },
                                error: (e) => {
                                    m(e), y(!1), f(e);
                                },
                            }));
                    }, [o, m, e, h, r, s]),
                    b = (0, p.p)(e, t, n);
                return a.useMemo(() => (g ? { data: b, refetch: w, refetchStatus: u.ZP.FAILED, refetchError: g } : { data: b, refetch: w, refetchStatus: h ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [b, g, h, w]);
            }
        },
        634455: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                i = n(731708),
                s = n(392237),
                c = n(43429),
                o = n(727384);
            function d({ amount: e, type: t = c.NU.balance, shouldCenterAlign: n = !1, currency: s, size: d = "title1", weight: l = "bold", hasCompleted: p = !1, showGreenCredit: m }) {
                const g = parseFloat(e),
                    f = a.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, showGreenCredit: n, type: a }) => {
                                const r = e < 0;
                                switch (a) {
                                    case c.NU.credit:
                                        return t ? (n ? "green500" : "text") : "gray500";
                                    case c.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return r ? "red500" : "text";
                                }
                            })({ type: t, amount: g, hasCompleted: p, showGreenCredit: m }),
                        [t, g, p, m],
                    ),
                    h = a.useMemo(
                        () =>
                            ((e) => {
                                switch (e) {
                                    case c.NU.credit:
                                        return "+";
                                    case c.NU.debit:
                                        return "-";
                                    default:
                                        return "";
                                }
                            })(t),
                        [t],
                    ),
                    y = a.useMemo(() => (0, o.vw)({ amount: e, currency: s }), [e, s]);
                return a.createElement(r.Z, { style: n ? u.alignCenter : void 0 }, a.createElement(i.ZP, { color: f, size: d, weight: l }, `${h}${y}`));
            }
            const l = a.memo(d),
                u = s.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        477922: (e, t, n) => {
            n.d(t, { G7: () => C, KR: () => R, qn: () => T });
            var a = n(807896),
                r = n(202784),
                i = n(45843),
                s = n(325686),
                c = n(392237),
                o = n(684008),
                d = n(72591),
                l = n(297896),
                u = n(748138),
                p = n(913315),
                m = n(286555),
                g = n(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                h = { [f.small]: { width: c.default.theme.spacesPx.space16, height: c.default.theme.spacesPx.space16 }, [f.xLarge]: { width: c.default.theme.spacesPx.space40, height: c.default.theme.spacesPx.space40 }, [f.xxxLarge]: { width: c.default.theme.spaces.space56, height: c.default.theme.spaces.space56 }, [f.xJumbo]: { width: c.default.theme.spaces.space80, height: c.default.theme.spaces.space80 } },
                y = { [f.small]: { width: c.default.theme.spacesPx.space8, height: c.default.theme.spacesPx.space8 }, [f.xLarge]: { width: c.default.theme.spacesPx.space20, height: c.default.theme.spacesPx.space20 }, [f.xxxLarge]: { width: c.default.theme.spaces.space28, height: c.default.theme.spaces.space28 }, [f.xJumbo]: { width: c.default.theme.spaces.space40, height: c.default.theme.spaces.space40 } },
                w = ({ Icon: e, size: t, uri: n }) => (n ? r.createElement(i.Z, { source: { uri: n }, style: [D.rounded, D.logo, h[t]] }) : r.createElement(s.Z, { style: [h[t], D.rounded, D.iconContainer] }, r.createElement(e, { style: [D.logo, y[t]] }))),
                b = (e) => r.createElement(w, (0, a.Z)({}, e, { Icon: o.default })),
                x = { [g.wC.bankDeposit]: d.default, [g.wC.bankWithdraw]: l.default, [g.wC.card]: o.default, [g.wC.atm]: u.default },
                P = { [g.Ms.atm]: u.default, [g.Ms.deposit]: d.default, [g.Ms.withdraw]: l.default, [g.Ms.interest]: p.default },
                C = (e) => {
                    const { type: t, ...n } = e;
                    return r.createElement(w, (0, a.Z)({}, n, { Icon: x[t] }));
                },
                R = ({ type: e, ...t }) => r.createElement(w, (0, a.Z)({}, t, { Icon: P[e] })),
                v = (e) => r.createElement(w, (0, a.Z)({}, e, { Icon: m.default })),
                T = ({ type: e, ...t }) => (e === g.dX.bank ? r.createElement(v, t) : e === g.dX.card ? r.createElement(b, t) : null),
                D = c.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        615954: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(470397),
                i = n(731708),
                s = n(392237),
                c = n(191796);
            const o = ({ name: e, size: t, website: n }) => a.createElement(r.Z, null, e && a.createElement(i.ZP, { size: t, style: d.merchantName, weight: "medium" }, e), n ? a.createElement(i.ZP, { link: { pathname: `https://${n}`, external: !0 }, size: t, weight: "medium" }, "Website", a.createElement(c.default, null)) : null),
                d = s.default.create((e) => ({ merchantName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                l = a.memo(o);
        },
        86320: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(470397),
                i = n(731708);
            const s = ({ account: e, size: t, weight: n = "medium" }) => a.createElement(r.Z, null, e.accountType && a.createElement(i.ZP, { size: t, style: c.bankName, weight: n }, e.accountType), a.createElement(i.ZP, { size: t, style: c.bankName, weight: n }, e.accountName.name)),
                c = n(392237).default.create((e) => ({ bankName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(s);
        },
        655750: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(325686),
                i = n(731708);
            function s({ color: e, description: t, title: n }) {
                return t ? a.createElement(r.Z, { style: c.root }, a.createElement(i.ZP, { color: e }, t), a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, n)) : null;
            }
            const c = n(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                o = a.memo(s);
        },
        48646: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(325686),
                i = n(731708),
                s = n(392237);
            function c({ color: e, note: t, shouldCenterAlign: n = !1, size: s = "body", weight: c }) {
                return t ? a.createElement(r.Z, { style: n && d.alignCenter }, a.createElement(i.ZP, { color: e, size: s, weight: c }, `For "${t}"`)) : null;
            }
            const o = a.memo(c),
                d = s.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        473149: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(40610),
                i = n(810088),
                s = n(539660),
                c = n(514639);
            const o = "This transaction has been rejected.",
                d = "This transaction is pending until the recipient accepts it.",
                l = Object.freeze({ [s.P.RejectedByManualReview]: { message: o, Component: r.Z.Attention }, [s.P.RejectedByAutoReview]: { message: o, Component: r.Z.Attention }, [s.P.InReview]: { message: "This transaction is currently under review as part of our routine security checks. During this time, the transaction is paused. We aim to complete reviews quickly and will update you once it's resolved.", Component: r.Z.Attention }, [s.P.RejectedLimitsExceeded]: { message: "This exceeds your account’s limits. Please review your limits or try a lower amount.", Component: r.Z.Attention, action: { link: c.iE.limits, label: "Review limits" } }, [s.P.RejectedByUnsupportedRegion]: { message: "This transaction has been rejected as we don’t support this region yet.", Component: r.Z.Attention }, [s.P.RejectedNotSufficientFunds]: { message: "Your balance is insufficient. Please fund your account and try again.", Component: r.Z.Attention }, [s.P.UnrecognizedActivityConfirmed]: { message: "Thanks for confirming your purchase. Please give it another try, and it should work smoothly now.", Component: r.Z.Primary }, [s.P.UnrecognizedActivityRejected]: { message: "For your protection, we've stopped this transaction due to unusual activity.", Component: r.Z.Attention }, [i.g.PendingRecipientAcceptance]: { sender: d, Component: r.Z.Primary }, [i.g.PendingRecipientOnboarding]: { sender: d, Component: r.Z.Primary }, [i.g.PendingRecipientAction]: { sender: d, Component: r.Z.Primary }, [i.g.RejectedByRecipient]: { sender: "This transaction has been rejected by the recipient.", Component: r.Z.Attention }, [i.g.RequestRejected]: { receiver: "This request has been rejected by the recipient.", Component: r.Z.Attention }, [i.g.AwaitingRequestAcceptance]: { receiver: "This request is pending until it's approved by the recipient.", Component: r.Z.Primary } }),
                u = (e) => {
                    const { isViewerSender: t, reasonCode: n, status: r } = e,
                        i = l[n] ?? l[r],
                        s = t ? i?.sender : i?.receiver,
                        c = i?.message ?? s,
                        o = i?.Component;
                    return o && c ? a.createElement(o, { action: i.action, testID: "transaction-reason", text: c }) : null;
                };
        },
        749286: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(771469),
                r = n(202784),
                i = n(325686),
                s = (n(585488), n(277660)),
                c = n.n(s),
                o = n(392237),
                d = n(412876),
                l = n(553660);
            const u = a.Z,
                p = ({ avatarWithLink: e, user: t, usernameWithLink: n, withCenterAlign: a }) => {
                    const s = c()(u, t);
                    return r.createElement(i.Z, { style: [m.root, a ? m.alignCenter : null] }, r.createElement(d.Z, { size: "custom", style: m.userAvatar, user: s, withLink: e }), r.createElement(l.Z, { style: a && m.alignCenter, user: s, withLink: e, withStackedLayout: a }));
                },
                m = o.default.create((e) => ({ alignCenter: { alignItems: "center" }, root: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                g = r.memo(p);
        },
        43429: (e, t, n) => {
            n.d(t, { $W: () => r, DH: () => h, Ln: () => p, Ms: () => b, NU: () => w, Rz: () => s, Vq: () => o, ah: () => c, cX: () => d, dX: () => u, hv: () => f, ic: () => a, q9: () => y, uc: () => g, w8: () => i, wC: () => l, wG: () => m });
            n(202784);
            const a = 25,
                r = "xpayments-preset-all",
                i = (Object.freeze({ onboarding: "onboarding", upgradeToKycDocumentsVerified: "upgradeToKycDocumentsVerified" }), 280),
                s = Object.freeze({ credit: "credit", debit: "debit" }),
                c = (Object.freeze({ XPayments: "XPayments" }), Object.freeze({ reviewPane: "reviewPane", amountPane: "amountPane", successPane: "successPane" })),
                o = Object.freeze({ termsPane: "termsPane" }),
                d = Object.freeze({ reviewPane: "reviewPane", participantPane: "participantPane" }),
                l = Object.freeze({ bankDeposit: "bankDeposit", bankWithdraw: "bankWithdraw", card: "card", atm: "atm" }),
                u = Object.freeze({ bank: "bank", card: "card", x: "x" }),
                p = 4e3,
                m = 4,
                g = "https://money.x.com/articles/terms-and-conditions",
                f = "https://money.x.com/articles/privacy-policy",
                h = "https://money.x.com/articles/short-form-disclosure",
                y = Object.freeze({ initiate: "initiate-challenge", complete2fa: "2fa-complete-challenge", completeKyc: "kyc-complete-challenge", completeDocv: "docv-complete-challenge", completeSelfie: "selfie-complete-challenge" }),
                w = Object.freeze({ balance: "balance", credit: "credit", debit: "debit" }),
                b = Object.freeze({ interest: "interest", deposit: "deposit", withdraw: "withdraw", atm: "atm" });
        },
        467734: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(125363),
                r = n(390387);
            const i = ({ senderId: e }) => (0, a.v9)(r._h) === e;
        },
        137882: (e, t, n) => {
            n.d(t, { b: () => r, v: () => i });
            n(543673), n(240753), n(128399);
            var a = n(412450);
            const r = ({ txId: e }) => {
                    const { supportUrl: t } = (0, a.Z)(),
                        n = new URL(t);
                    return e && n.searchParams.set("tx_id", e), n.href;
                },
                i = ({ reportedHandle: e, txId: t }) => {
                    const { reportUrl: n } = (0, a.Z)(),
                        r = new URL(n);
                    return t && r.searchParams.set("tx_id", t), e && r.searchParams.set("tx_reported_handle", `@${e}`), r.href;
                };
        },
        464978: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(192828),
                r = (n(585488), n(353391)),
                i = n.n(r),
                s = n(482924);
            const c = a.Z,
                o = (e) => {
                    const { data: t, refetch: n } = (0, s.A)(c, { transaction_id: e }),
                        a = t.get_transaction_by_id?.__id ?? "get_transaction_by_id";
                    return (
                        i()([a], () => {
                            n();
                        }),
                        t
                    );
                };
        },
        743080: (e, t, n) => {
            n.d(t, { JU: () => c, ZP: () => u, dE: () => l, ir: () => d, jh: () => o });
            var a = n(392237),
                r = n(708852),
                i = n(655352);
            const s = a.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space16 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, paddingSmall: { paddingHorizontal: e.spaces.space16 }, paddingNone: { paddingHorizontal: 0 }, title: { marginBottom: e.spaces.space8 }, content: { flexDirection: "column", gap: e.spaces.space16 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, footer: { gap: e.spaces.space16, paddingVertical: e.spaces.space16 }, actionButtons: { flexDirection: "row", gap: e.spaces.space16 }, button: { flexGrow: 1 }, root: { padding: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, paddingBottom: e.spaces.space40 }, actions: { flexDirection: "row", flexWrap: "wrap" }, tile: { backgroundColor: e.colors.gray0, padding: e.spaces.space24 }, tileNarrow: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, upper: { borderRadius: "none", height: "auto" }, pinHidden: { display: "none" }, pinIframe: { width: "100%", paddingTop: "0px", alignSelf: "center" }, setting: { margin: e.spaces.space8, flexDirection: "column", gap: e.spaces.space16 }, settingHeader: { paddingHorizontal: e.spaces.space2, gap: e.spaces.space8 }, spinner: { alignSelf: "center", flex: 1 }, actionsContainer: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-evenly" }, actionsContainerNarrow: { flexWrap: "wrap" }, action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, textAlign: "center" }, actionNarrow: { flex: "40%" }, actionWide: { flex: 1 }, row: { flexDirection: "row", gap: e.spaces.space16 }, icon: { height: e.spaces.space32, width: e.spaces.space32, alignSelf: "center", color: e.colors.text } })),
                c = () => ((0, i.ZP)() ? "medium" : "small"),
                o = () => {
                    const e = (0, r.D2)(),
                        t = e ? s.paddingWide : s.paddingNarrow,
                        n = e ? s.paddingWide : s.paddingSmall;
                    return { container: [s.container, t], footer: [s.footer, t], root: [s.root, n], tile: [e ? s.tile : s.tileNarrow], pivotTileContainer: [s.actionsContainer, e ? null : s.actionsContainerNarrow], pivotTile: [s.action, e ? s.actionWide : s.actionNarrow] };
                },
                d = { width: 194, height: 146 },
                l = a.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space12, gap: e.spaces.space8, flexDirection: "row", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", gap: e.spaces.space8, display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                u = s;
        },
        727384: (e, t, n) => {
            n.d(t, { BC: () => ge, BR: () => pe, Bj: () => at, Bl: () => we, DK: () => ye, DO: () => Ge, Dc: () => q, EQ: () => Te, FW: () => He, Fs: () => We, GU: () => J, Gl: () => xe, Gs: () => Ve, H_: () => Ee, Ix: () => nt, J$: () => je, M9: () => ue, MO: () => Fe, Oc: () => ze, Ou: () => Re, Q1: () => se, QE: () => Ze, Qu: () => Je, Se: () => Ue, So: () => Ke, T3: () => he, Tp: () => me, UM: () => fe, UV: () => Ye, _T: () => be, aY: () => $e, ab: () => Me, bI: () => Oe, dN: () => L, gh: () => Xe, gx: () => Be, i7: () => oe, iv: () => Le, jm: () => qe, lD: () => Y, lw: () => G, nV: () => M, p2: () => $, pQ: () => B, qK: () => F, qQ: () => Ie, qU: () => ve, qc: () => tt, uG: () => Qe, uN: () => Se, ve: () => Ne, vw: () => K, wu: () => et, zK: () => De, zx: () => H });
            n(543673), n(240753), n(128399);
            var a = n(617374),
                r = n.n(a),
                i = n(53647),
                s = n.n(i),
                c = n(108475),
                o = n(157396),
                d = n(392237),
                l = n(674132),
                u = n.n(l),
                p = n(323265),
                m = n(683799),
                g = n(492646),
                f = n(929512),
                h = n(436117),
                y = n(515510),
                w = n(642004),
                b = n(87877),
                x = n(922281),
                P = n(880428),
                C = n(810088),
                R = n(357818),
                v = n(724983),
                T = n(297679),
                D = n(217995),
                A = n(183276),
                k = n(703325),
                Z = n(215285),
                S = n(258074),
                N = n(97882),
                I = n(514639),
                _ = n(441484),
                U = n(43429);
            const E = "Interest Payout",
                j = "Deposit",
                z = "Withdrawal",
                O = "ATM withdrawal",
                W = u().d0a77c9b,
                V = u().g727ddcf,
                $ = ({ amount: e, currency: t }) => {
                    const n = L({ amount: e, formatter: 1e6 });
                    return (0, N.x)({ currencyCode: t?.toUpperCase(), amount: n, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                K = ({ amount: e, currency: t }) => {
                    const n = parseFloat(e);
                    return $({ amount: n, currency: t });
                },
                q = (e) => {
                    const t = new (r())(e);
                    return new (r())(t.toFixed(2, r().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                L = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function M(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), V(t);
            }
            function B({ productCode: e, transactionType: t }) {
                if (e === P.O.Interest) return { title: E, iconType: U.Ms.interest };
                const n = e === P.O.Banking;
                switch (t) {
                    case R.x.AtmWithdrawal:
                        return { title: O, iconType: U.Ms.atm };
                    case R.x.Deposit:
                        return n ? void 0 : { title: j, iconType: U.Ms.deposit };
                    case R.x.Withdraw:
                        return n ? void 0 : { title: z, iconType: U.Ms.withdraw };
                    default:
                        return;
                }
            }
            function F({ accountName: e, createdAt: t, description: n, productCode: a, transactionType: r }) {
                const i = a === P.O.Banking;
                if (a === P.O.Interest) return M(t);
                switch (r) {
                    case R.x.Transfer:
                        return n ? `For "${n}"` : "";
                    case R.x.Deposit:
                        return i ? "Direct Deposit" : e ? `From ${e}` : "";
                    case R.x.Withdraw:
                        return i ? "Payment" : e ? `To ${e}` : "";
                    case R.x.Refund:
                        return "Refund";
                    case R.x.Reverse:
                        return "Reversed payment";
                    case R.x.Payment:
                        return "Card purchase";
                    case R.x.AtmWithdrawal:
                        return "Completed";
                    default:
                        return "";
                }
            }
            function G({ amount: e, currency: t, description: n, status: a }) {
                const r = K({ amount: e, currency: t });
                switch (a) {
                    case C.g.AwaitingRequestAcceptance:
                    case C.g.RequestVerificationRequired:
                        return n ? `Requested ${r} for "${n}"` : `Requested ${r}`;
                    case C.g.PendingRecipientAcceptance:
                        return n ? `Sent ${r} for "${n}"` : `Sent ${r}`;
                    case C.g.AwaitingUnrecognizedConfirmation:
                        return n ? `Card purchase of ${r} for "${n}"` : `Card purchase of ${r}`;
                    default:
                        return;
                }
            }
            const H = ({ referenceTransactionId: e, transactionType: t }) => ([R.x.Refund, R.x.Reverse].includes(t) && e ? `${I.bR}/${e}` : null);
            function X({ productCode: e, transactionType: t }) {
                if (e === P.O.Interest) return E;
                const n = e === P.O.Banking;
                switch (t) {
                    case R.x.Transfer:
                        return "Peer-to-peer transfer";
                    case R.x.Deposit:
                        return n ? "Direct Deposit" : j;
                    case R.x.Withdraw:
                        return n ? "Payment" : z;
                    case R.x.Refund:
                        return "Refund";
                    case R.x.Reverse:
                        return "Reversed payment";
                    case R.x.Payment:
                        return "Card purchase";
                    case R.x.AtmWithdrawal:
                        return O;
                    default:
                        return "";
                }
            }
            const Q = Object.freeze({ [C.g.Cancelled]: "Cancelled", [C.g.Failed]: "Failed", [C.g.Expired]: "Expired", [C.g.Pending]: "Pending", [C.g.Hold]: "Pending", [C.g.AuthorizationOpen]: "Pending", [C.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [C.g.PendingReview]: "Pending", [C.g.PendingRecipientAction]: "Pending", [C.g.PendingRecipientOnboarding]: "Pending", [C.g.AwaitingRequestAcceptance]: "Pending", [C.g.PendingRecipientAcceptance]: "Pending", [C.g.PinVerificationRequired]: "Pending", [C.g.RequestVerificationRequired]: "Pending", [C.g.VerificationRequired]: "Pending", [C.g.RejectedByRecipient]: "Rejected", [C.g.RequestRejected]: "Rejected", [C.g.Settled]: "Completed", [C.g.SoftSettled]: "Completed", [C.g.AuthorizationClosed]: "Completed" });
            function Y({ status: e }) {
                return Q[e] ?? "";
            }
            function J({ isViewerSender: e, transactionType: t }) {
                switch (t) {
                    case R.x.Deposit:
                        return U.NU.credit;
                    case R.x.Withdraw:
                    case R.x.Payment:
                    case R.x.AtmWithdrawal:
                        return U.NU.debit;
                    case R.x.Refund:
                        return U.NU.credit;
                    default:
                        return e ? U.NU.debit : U.NU.credit;
                }
            }
            const ee = Object.freeze({ [m.t.Checking]: "Checking", [m.t.Savings]: "Savings" }),
                te = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ne = Object.freeze({ [f.l.Charge]: "Charge", [f.l.Combo]: "Combo", [f.l.Debit]: "Debit", [f.l.Credit]: "Credit", [f.l.DeferredDebit]: "DeferredDebit", [f.l.Prepaid]: "Prepaid" }),
                ae = Object.freeze({ [g.U.AmericanExpress]: "American Express", [g.U.Mastercard]: "Mastercard", [g.U.Visa]: "Visa" }),
                re = Object.freeze({ [x.D.LoginRequired]: "Login required", [x.D.Invalid]: "Invalid", [x.D.Pending]: "Pending", [x.D.Revoked]: "Revoked", [x.D.Canceled]: "Canceled", [x.D.Inactive]: "Inactive" });
            function ie({ status: e }) {
                return (e ? re[e] : "") ?? "";
            }
            const se = ({ createdAt: e, description: t, isViewerSender: n, productCode: a, status: r, transactionType: i }) => ({ amountType: i ? J({ transactionType: i, isViewerSender: n }) : void 0, type: i ? X({ transactionType: i, productCode: a }) : void 0, status: r ? Y({ status: r }) : void 0, createdAt: W(new Date(parseInt(e, 10))), description: t });
            function ce({ status: e, transactionType: t }) {
                return t === R.x.Transfer && e === C.g.PendingRecipientAcceptance;
            }
            function oe({ status: e }) {
                return e === C.g.VerificationRequired || e === C.g.RequestVerificationRequired || e === C.g.AwaitingUnrecognizedConfirmation;
            }
            function de({ status: e, transactionType: t }) {
                return t === R.x.Transfer && e === C.g.AwaitingRequestAcceptance;
            }
            function le({ status: e, transactionType: t }) {
                return t === R.x.Transfer && e === C.g.PendingRecipientOnboarding;
            }
            const ue = ({ isViewerSender: e, status: t, transactionType: n }) => (ce({ status: t, transactionType: n }) || le({ status: t, transactionType: n })) && !e;
            function pe({ isViewerSender: e, status: t, transactionType: n }) {
                return ce({ status: t, transactionType: n }) && !e;
            }
            function me({ isViewerSender: e, status: t, transactionType: n }) {
                return (ce({ status: t, transactionType: n }) || le({ status: t, transactionType: n })) && e;
            }
            function ge({ status: e }) {
                return e === C.g.AwaitingUnrecognizedConfirmation;
            }
            function fe({ isViewerSender: e, status: t, transactionType: n }) {
                return (
                    (de({ status: t, transactionType: n }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: n }) {
                        return t === C.g.RequestVerificationRequired && e && n === R.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: n })
                );
            }
            function he({ isViewerSender: e, status: t, transactionType: n }) {
                return de({ status: t, transactionType: n }) && !e;
            }
            function ye(e) {
                return fe(e) || pe(e) || ge({ status: e.status });
            }
            function we({ status: e }) {
                return [C.g.Cancelled, C.g.Failed, C.g.Expired, C.g.RejectedByRecipient, C.g.RequestRejected].includes(e);
            }
            function be({ status: e }) {
                return [C.g.Settled, C.g.SoftSettled, C.g.AuthorizationClosed].includes(e);
            }
            function xe({ status: e }) {
                return we({ status: e });
            }
            const Pe = (e) => (e ? `data:image/png;base64,${e}` : ""),
                Ce = Object.freeze({ [g.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [g.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [g.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                Re = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: n } = e,
                        a = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: i, bank_name: s, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: l, logo: u, status: p } = a,
                        m = c ? ae[c] : "",
                        g = c ? Ce[c] : "";
                    return i && r ? { accountName: { name: `${ee[i]} (...${r})` }, avatar: { shape: "square", uri: Pe(u) }, id: n, accountType: s, type: U.dX.bank, label: ie({ status: p }) } : d && o ? { accountName: { name: `${ne[d]} (...${o})` }, avatar: { shape: "square", uri: g }, id: n, accountType: s ?? m, type: U.dX.card, label: ie({ status: p }), issuedCardAccountName: !l || (l !== w.W.IssuedCardTypePhysical && l !== w.W.IssuedCardTypeVirtual) ? void 0 : `${te[l]} (...${o})` } : null;
                },
                ve = ({ productCode: e, transactionType: t }) => e === P.O.Issuing && (t === R.x.Payment || t === R.x.Refund || t === R.x.AtmWithdrawal),
                Te = ({ productCode: e, transactionType: t }) => e === P.O.Banking && (t === R.x.Deposit || t === R.x.Withdraw),
                De = ({ amountType: e, merchantDetails: t, productCode: n, transactionType: a }) => {
                    const r = a === R.x.AtmWithdrawal,
                        i = ve({ productCode: n, transactionType: a });
                    return (Te({ productCode: n, transactionType: a }) || i) && t ? { ...t, type: r ? U.wC.atm : i ? U.wC.card : e === U.NU.credit ? U.wC.bankDeposit : U.wC.bankWithdraw } : void 0;
                },
                Ae = ({ handleEmptyList: e, key: t, store: n }) => {
                    const a = n.getRoot(),
                        r = t ? a.getLinkedRecords(t) : null;
                    r && r.length > 0 ? r.forEach((e) => e?.invalidateRecord?.()) : e && a.invalidateRecord();
                },
                ke = (e, t) => {
                    const n = e.getRoot(),
                        a = t && n.getLinkedRecord(t);
                    a && a.invalidateRecord();
                },
                Ze = (e) => {
                    const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    Ae({ store: e, key: t, handleEmptyList: !0 });
                },
                Se = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                            Ae({ store: e, key: t, handleEmptyList: !0 });
                        })(e);
                    });
                },
                Ne = (e) => {
                    s()(e, (e) => {
                        Ze(e);
                    });
                },
                Ie = (e) => {
                    const t = (0, c.getStorageKey)(S.Z.fragment.selections[0], { search_filter_id: U.$W });
                    ke(e, t);
                    const n = (0, c.getStorageKey)(v.Z.fragment.selections[0], {});
                    Ae({ store: e, key: n });
                    const a = (0, c.getStorageKey)(T.Z.fragment.selections[0], {});
                    ke(e, a);
                },
                _e = (e) => {
                    const t = (0, c.getStorageKey)(A.Z.fragment.selections[0], {});
                    Ae({ store: e, key: t });
                },
                Ue = (e, t) => {
                    s()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const n = e.get(t);
                                n && n.invalidateRecord();
                            })(e, t),
                            Ie(e),
                            _e(e);
                    });
                },
                Ee = (e, { reasonCode: t, recordId: n, status: a }) => {
                    if ((oe({ status: a }) || (Ie(e), _e(e)), n && a)) {
                        const r = e.get(n);
                        r && (r.setValue(a, "transaction_status"), r.setValue(t, "reason_code"));
                    }
                },
                je = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(D.Z.fragment.selections[0], {});
                            ke(e, t);
                        })(e),
                            Ie(e),
                            _e(e);
                    });
                },
                ze = (e) => {
                    const t = (0, c.getStorageKey)(Z.Z.fragment.selections[0], {});
                    ke(e, t);
                },
                Oe = () => p.ZP.isMobileOS(),
                We = ({ permission: e, permissions: t }) => !!t?.includes(e),
                Ve = (e) => We({ permissions: e, permission: h.d.VerifyIdentity }),
                $e = (e) => We({ permissions: e, permission: h.d.UpdateCustomerPreferences }),
                Ke = ({ roles: e }) => !!e?.includes(y.N.Ineligible),
                qe = ({ roles: e }) => !!e?.includes(y.N.PendingBalanceAutoClaim),
                Le = ({ roles: e }) => !!e?.includes(y.N.RestrictedGeolocationUsState) || !!e?.includes(y.N.RestrictedOnboardingUsState),
                Me = ({ roles: e }) => !!e?.includes(y.N.KycFailed) || !!e?.includes(y.N.PendingReview),
                Be = ({ roles: e }) => !!e?.includes(y.N.PendingKycUnverifiedLimitExceeded),
                Fe = ({ permissions: e }) => We({ permissions: e, permission: h.d.RequestTransfer }),
                Ge = ({ actionPermission: e, permissions: t, roles: n }) => (Ve(t) && !We({ permissions: t, permission: e }) ? He({ roles: n }) : null),
                He = ({ roles: e }) => {
                    const t = e?.includes(y.N.PendingSelfieVerification) || e?.includes(y.N.KycDocumentsVerified),
                        n = e?.includes(y.N.KycPendingDocumentUpload) || e?.includes(y.N.KycVerified);
                    return t ? I.AU.selfie.verifyIdentityPath : n ? I.AU.tier3.verifyIdentityPath : I.AU.tier2.verifyIdentityPath;
                },
                Xe = () => {
                    if (p.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [o.default.ThemePaletteNames.light]: "light", [o.default.ThemePaletteNames.dark]: "dim", [o.default.ThemePaletteNames.darker]: "dark", [o.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                Qe = ({ basePath: e, moreSearchParams: t, paymentsOrigin: n, providerToken: a, theme: r, xPaymentsSession: i }) => {
                    if (!n || !i || !a) return null;
                    const s = new URL(`${n}${e}`);
                    if ((s.searchParams.set("sessionId", i), s.searchParams.set("providerToken", a), s.searchParams.set("theme", r), t)) for (const [e, n] of t) s.searchParams.set(e, n);
                    return s.href;
                },
                Ye = ({ amount: e, balanceAmountMicro: t }) => {
                    const n = parseFloat(t);
                    return parseFloat(e) <= L({ amount: n });
                },
                Je = (e) => new Date(e.year, e.month - 1, e.day),
                et = ({ challengeId: e, status: t }) => (oe({ status: t }) && e ? I.vw : null),
                tt = ({ challengeInitiator: e, closePath: t, environment: n, history: a }) => {
                    switch ((je(n), e)) {
                        case I.kW.auth:
                            _.Z.closeChallenge();
                            break;
                        case I.kW.preference:
                            ((e) => {
                                s()(e, (e) => {
                                    ze(e);
                                });
                            })(n);
                    }
                    t ? a.replace(t) : a.goBack();
                },
                nt = ({ challengeInitiator: e }) => (e === I.kW.forgotPin ? I.jR : I.vw),
                at = ({ apy: e }) => `${parseInt(e, 10) / 100}% APY`;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Payments~bundle.PaymentReceipt-8ed0fac5.b5cf2c3a.js.map
