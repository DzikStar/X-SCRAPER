"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Payments~bundle.PaymentReceipt-8ed0fac5"],
    {
        97882: (e, t, a) => {
            a.d(t, { T: () => i, x: () => s });
            var n = a(674132),
                r = a.n(n);
            const i = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                s = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const s = r ? e : parseInt(e, 10) / a,
                        o = i[t]?.(s);
                    return n ? c(o) : o;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        412450: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(990312),
                r = (a(585488), a(712696)),
                i = a.n(r),
                s = a(514639);
            const c = n.Z,
                o = { "payments-dev.x.com": s.Re.development, "money-dev.x.com": s.Re.development, "payments-staging.x.com": s.Re.staging, "money-staging.x.com": s.Re.staging, "money.x.com": s.Re.production, "payments-prod.x.com": s.Re.production },
                d = () => {
                    const e = i()(c, {}),
                        t = e?.get_payments_client_config,
                        a = t?.payments_web_host,
                        n = t?.sardine_api_subdomain,
                        r = "https://";
                    return { environment: (a ? o[a] : null) ?? s.Re.production, paymentsOrigin: a ? `${r}${a}` : null, sardineClientID: t?.sardine_client_id, sardineSdkUrl: n ? `https://${n}/assets/loader.min.js` : null, sardineEnvironment: t?.sardine_environment, sardinePixelSubdomain: t?.sardine_pixel_subdomain, sardineApiSubdomain: n, reportUrl: t?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: t?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: t?.socure_public_key, forwardWithSdkUrl: a ? `${r}${a}/${s.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: t?.stripe_issuing_publishable_key };
                };
        },
        482924: (e, t, a) => {
            a.d(t, { A: () => m });
            var n = a(202784),
                r = a(437429),
                i = a.n(r),
                s = a(57074),
                c = a.n(s),
                o = a(10622),
                d = a.n(o),
                l = a(71620),
                u = a(312771),
                p = a(535338);
            function m(e, t, a) {
                const r = c()(t),
                    s = c()(a),
                    o = i()(),
                    m = (0, l.po)(),
                    [g, f] = n.useState(null),
                    [h, y] = n.useState(!1),
                    w = n.useCallback(() => {
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
                    b = (0, p.p)(e, t, a);
                return n.useMemo(() => (g ? { data: b, refetch: w, refetchStatus: u.ZP.FAILED, refetchError: g } : { data: b, refetch: w, refetchStatus: h ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [b, g, h, w]);
            }
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                s = a(392237),
                c = a(43429),
                o = a(727384);
            function d({ amount: e, type: t = c.NU.balance, shouldCenterAlign: a = !1, currency: s, size: d = "title1", weight: l = "bold", hasCompleted: p = !1, showGreenCredit: m }) {
                const g = parseFloat(e),
                    f = n.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, showGreenCredit: a, type: n }) => {
                                const r = e < 0;
                                switch (n) {
                                    case c.NU.credit:
                                        return t ? (a ? "green500" : "text") : "gray500";
                                    case c.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return r ? "red500" : "text";
                                }
                            })({ type: t, amount: g, hasCompleted: p, showGreenCredit: m }),
                        [t, g, p, m],
                    ),
                    h = n.useMemo(
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
                    y = n.useMemo(() => (0, o.vw)({ amount: e, currency: s }), [e, s]);
                return n.createElement(r.Z, { style: a ? u.alignCenter : void 0 }, n.createElement(i.ZP, { color: f, size: d, weight: l }, `${h}${y}`));
            }
            const l = n.memo(d),
                u = s.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => R, KR: () => C, qn: () => D });
            var n = a(807896),
                r = a(202784),
                i = a(45843),
                s = a(325686),
                c = a(392237),
                o = a(684008),
                d = a(72591),
                l = a(297896),
                u = a(748138),
                p = a(913315),
                m = a(286555),
                g = a(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                h = { [f.small]: { width: c.default.theme.spacesPx.space16, height: c.default.theme.spacesPx.space16 }, [f.xLarge]: { width: c.default.theme.spacesPx.space40, height: c.default.theme.spacesPx.space40 }, [f.xxxLarge]: { width: c.default.theme.spaces.space56, height: c.default.theme.spaces.space56 }, [f.xJumbo]: { width: c.default.theme.spaces.space80, height: c.default.theme.spaces.space80 } },
                y = { [f.small]: { width: c.default.theme.spacesPx.space8, height: c.default.theme.spacesPx.space8 }, [f.xLarge]: { width: c.default.theme.spacesPx.space20, height: c.default.theme.spacesPx.space20 }, [f.xxxLarge]: { width: c.default.theme.spaces.space28, height: c.default.theme.spaces.space28 }, [f.xJumbo]: { width: c.default.theme.spaces.space40, height: c.default.theme.spaces.space40 } },
                w = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(i.Z, { source: { uri: a }, style: [T.rounded, T.logo, h[t]] }) : r.createElement(s.Z, { style: [h[t], T.rounded, T.iconContainer] }, r.createElement(e, { style: [T.logo, y[t]] }))),
                b = (e) => r.createElement(w, (0, n.Z)({}, e, { Icon: o.default })),
                x = { [g.wC.bankDeposit]: d.default, [g.wC.bankWithdraw]: l.default, [g.wC.card]: o.default, [g.wC.atm]: u.default },
                P = { [g.Ms.atm]: u.default, [g.Ms.deposit]: d.default, [g.Ms.withdraw]: l.default, [g.Ms.interest]: p.default },
                R = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(w, (0, n.Z)({}, a, { Icon: x[t] }));
                },
                C = ({ type: e, ...t }) => r.createElement(w, (0, n.Z)({}, t, { Icon: P[e] })),
                v = (e) => r.createElement(w, (0, n.Z)({}, e, { Icon: m.default })),
                D = ({ type: e, ...t }) => (e === g.dX.bank ? r.createElement(v, t) : e === g.dX.card ? r.createElement(b, t) : null),
                T = c.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        615954: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                r = a(470397),
                i = a(731708),
                s = a(392237),
                c = a(191796);
            const o = ({ name: e, size: t, website: a }) => n.createElement(r.Z, null, e && n.createElement(i.ZP, { size: t, style: d.merchantName, weight: "medium" }, e), a ? n.createElement(i.ZP, { link: { pathname: `https://${a}`, external: !0 }, size: t, weight: "medium" }, "Website", n.createElement(c.default, null)) : null),
                d = s.default.create((e) => ({ merchantName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                l = n.memo(o);
        },
        86320: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                r = a(470397),
                i = a(731708);
            const s = ({ account: e, size: t, weight: a = "medium" }) => n.createElement(r.Z, null, e.accountType && n.createElement(i.ZP, { size: t, style: c.bankName, weight: a }, e.accountType), n.createElement(i.ZP, { size: t, style: c.bankName, weight: a }, e.accountName.name)),
                c = a(392237).default.create((e) => ({ bankName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = n.memo(s);
        },
        655750: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                r = a(325686),
                i = a(731708);
            function s({ color: e, description: t, title: a }) {
                return t ? n.createElement(r.Z, { style: c.root }, n.createElement(i.ZP, { color: e }, t), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, a)) : null;
            }
            const c = a(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                o = n.memo(s);
        },
        48646: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                s = a(392237);
            function c({ color: e, note: t, shouldCenterAlign: a = !1, size: s = "body", weight: c }) {
                return t ? n.createElement(r.Z, { style: a && d.alignCenter }, n.createElement(i.ZP, { color: e, size: s, weight: c }, `For "${t}"`)) : null;
            }
            const o = n.memo(c),
                d = s.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        749286: (e, t, a) => {
            a.d(t, { Z: () => g });
            var n = a(771469),
                r = a(202784),
                i = a(325686),
                s = (a(585488), a(277660)),
                c = a.n(s),
                o = a(392237),
                d = a(412876),
                l = a(553660);
            const u = n.Z,
                p = ({ avatarWithLink: e, user: t, usernameWithLink: a, withCenterAlign: n }) => {
                    const s = c()(u, t);
                    return r.createElement(i.Z, { style: [m.root, n ? m.alignCenter : null] }, r.createElement(d.Z, { size: "custom", style: m.userAvatar, user: s, withLink: e }), r.createElement(l.Z, { style: n && m.alignCenter, user: s, withLink: e, withStackedLayout: n }));
                },
                m = o.default.create((e) => ({ alignCenter: { alignItems: "center" }, root: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                g = r.memo(p);
        },
        43429: (e, t, a) => {
            a.d(t, { $W: () => r, DH: () => h, Ln: () => p, Ms: () => b, NU: () => w, Rz: () => s, Vq: () => o, ah: () => c, cX: () => d, dX: () => u, hv: () => f, ic: () => n, q9: () => y, uc: () => g, w8: () => i, wC: () => l, wG: () => m });
            a(202784);
            const n = 25,
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
        467734: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(125363),
                r = a(390387);
            const i = ({ senderId: e }) => (0, n.v9)(r._h) === e;
        },
        554853: (e, t, a) => {
            a.d(t, { b: () => r, v: () => i });
            a(543673), a(240753), a(128399);
            var n = a(412450);
            const r = ({ txId: e }) => {
                    const { supportUrl: t } = (0, n.Z)(),
                        a = new URL(t);
                    return e && a.searchParams.set("tx_id", e), a.href;
                },
                i = ({ reportedHandle: e, txId: t }) => {
                    const { reportUrl: a } = (0, n.Z)(),
                        r = new URL(a);
                    return t && r.searchParams.set("tx_id", t), e && r.searchParams.set("tx_reported_handle", `@${e}`), r.href;
                };
        },
        464978: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(192828),
                r = (a(585488), a(353391)),
                i = a.n(r),
                s = a(482924);
            const c = n.Z,
                o = (e) => {
                    const { data: t, refetch: a } = (0, s.A)(c, { transaction_id: e }),
                        n = t.get_transaction_by_id?.__id ?? "get_transaction_by_id";
                    return (
                        i()([n], () => {
                            a();
                        }),
                        t
                    );
                };
        },
        743080: (e, t, a) => {
            a.d(t, { JU: () => c, ZP: () => u, dE: () => l, ir: () => d, jh: () => o });
            var n = a(392237),
                r = a(708852),
                i = a(655352);
            const s = n.default.create((e) => ({ container: { display: "flex", flexDirection: "column", flexGrow: 1, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space16, gap: e.spaces.space16 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, paddingSmall: { paddingHorizontal: e.spaces.space16 }, paddingNone: { paddingHorizontal: 0 }, title: { marginBottom: e.spaces.space8 }, content: { flexDirection: "column", gap: e.spaces.space16 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, footer: { gap: e.spaces.space16, paddingVertical: e.spaces.space16 }, actionButtons: { flexDirection: "row", gap: e.spaces.space16 }, button: { flexGrow: 1 }, root: { padding: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, paddingBottom: e.spaces.space40 }, actions: { flexDirection: "row", flexWrap: "wrap" }, tile: { backgroundColor: e.colors.gray0, padding: e.spaces.space24 }, tileNarrow: { backgroundColor: e.colors.gray0, padding: e.spaces.space16 }, upper: { borderRadius: "none", height: "auto" }, pinHidden: { display: "none" }, pinIframe: { width: "100%", paddingTop: "0px", alignSelf: "center" }, setting: { margin: e.spaces.space8, flexDirection: "column", gap: e.spaces.space16 }, settingHeader: { paddingHorizontal: e.spaces.space2, gap: e.spaces.space8 }, spinner: { alignSelf: "center", flex: 1 }, actionsContainer: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-evenly" }, actionsContainerNarrow: { flexWrap: "wrap" }, action: { backgroundColor: e.colors.gray0, padding: e.spaces.space16, textAlign: "center" }, actionNarrow: { flex: "40%" }, actionWide: { flex: 1 }, row: { flexDirection: "row", gap: e.spaces.space16 }, icon: { height: e.spaces.space32, width: e.spaces.space32, alignSelf: "center", color: e.colors.text } })),
                c = () => ((0, i.ZP)() ? "medium" : "small"),
                o = () => {
                    const e = (0, r.D2)(),
                        t = e ? s.paddingWide : s.paddingNarrow,
                        a = e ? s.paddingWide : s.paddingSmall;
                    return { container: [s.container, t], footer: [s.footer, t], root: [s.root, a], tile: [e ? s.tile : s.tileNarrow], pivotTileContainer: [s.actionsContainer, e ? null : s.actionsContainerNarrow], pivotTile: [s.action, e ? s.actionWide : s.actionNarrow] };
                },
                d = { width: 194, height: 146 },
                l = n.default.create((e) => ({ listItem: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space12, gap: e.spaces.space8, flexDirection: "row", borderRadius: e.borderRadii.large }, listItemContent: { alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", gap: e.spaces.space8, display: "flex", flex: 1 }, listItemFlex: { flex: 1 }, alignEnd: { textAlign: "end", alignSelf: "end" } })),
                u = s;
        },
        727384: (e, t, a) => {
            a.d(t, { BC: () => be, BR: () => ye, Bj: () => dt, Bl: () => ve, DK: () => Re, DO: () => et, Dc: () => M, EQ: () => Ue, FW: () => tt, Fs: () => Me, GU: () => re, Gl: () => Te, Gs: () => Be, H_: () => $e, Ix: () => ot, J$: () => Ke, M9: () => he, MO: () => Ye, Oc: () => Le, Ou: () => Se, Q1: () => ue, QE: () => Ee, Qu: () => it, Se: () => Ve, So: () => Ge, T3: () => Pe, Tp: () => we, UM: () => xe, UV: () => rt, XT: () => Ce, _T: () => De, aY: () => Fe, ab: () => Qe, bI: () => qe, dN: () => B, gh: () => at, gx: () => Je, i7: () => me, iv: () => Xe, jm: () => He, lD: () => ne, lw: () => X, nV: () => F, p2: () => L, pQ: () => G, qK: () => H, qQ: () => je, qU: () => Ne, qc: () => ct, uG: () => nt, uN: () => ze, ve: () => Oe, vw: () => q, wu: () => st, zK: () => Ze, zx: () => Q });
            a(543673), a(240753), a(128399);
            var n = a(617374),
                r = a.n(n),
                i = a(53647),
                s = a.n(i),
                c = a(108475),
                o = a(157396),
                d = a(392237),
                l = a(674132),
                u = a.n(l),
                p = a(323265),
                m = a(683799),
                g = a(492646),
                f = a(929512),
                h = a(436117),
                y = a(515510),
                w = a(642004),
                b = a(87877),
                x = a(922281),
                P = a(880428),
                R = a(810088),
                C = a(357818),
                v = a(539660),
                D = a(724983),
                T = a(297679),
                A = a(217995),
                k = a(183276),
                S = a(703325),
                N = a(215285),
                U = a(258074),
                Z = a(97882),
                _ = a(514639),
                I = a(441484),
                E = a(43429);
            const z = "Interest Payout",
                O = "Deposit",
                j = "Withdrawal",
                W = "ATM withdrawal",
                V = "Awaiting approval",
                $ = u().d0a77c9b,
                K = u().g727ddcf,
                L = ({ amount: e, currency: t }) => {
                    const a = B({ amount: e, formatter: 1e6 });
                    return (0, Z.x)({ currencyCode: t?.toUpperCase(), amount: a, formatter: 1, strictAmount: !0, removeTrailingZeros: !0 });
                },
                q = ({ amount: e, currency: t }) => {
                    const a = parseFloat(e);
                    return L({ amount: a, currency: t });
                },
                M = (e) => {
                    const t = new (r())(e);
                    return new (r())(t.toFixed(2, r().ROUND_DOWN)).times(1e6).toDecimalPlaces(0).toNumber();
                },
                B = ({ amount: e, formatter: t = 1e6 }) => e / t;
            function F(e) {
                const t = new Date(parseInt(e, 10));
                return t.setDate(0), K(t);
            }
            function G({ account: e, productCode: t, transactionType: a }) {
                if (t === P.O.Interest) return { title: z, iconType: E.Ms.interest };
                const n = t === P.O.Banking;
                switch (a) {
                    case C.x.AtmWithdrawal:
                        return { title: W, iconType: E.Ms.atm };
                    case C.x.Deposit:
                        return n ? void 0 : { title: O, iconType: E.Ms.deposit, uri: e?.avatar?.uri };
                    case C.x.Withdraw:
                        return n ? void 0 : { title: j, iconType: E.Ms.withdraw, uri: e?.avatar?.uri };
                    default:
                        return;
                }
            }
            function H({ accountName: e, createdAt: t, description: a, productCode: n, transactionType: r }) {
                const i = n === P.O.Banking;
                if (n === P.O.Interest) return F(t);
                switch (r) {
                    case C.x.Transfer:
                        return a ? `For "${a}"` : "";
                    case C.x.Deposit:
                        return i ? "Direct Deposit" : e ? `From ${e}` : "";
                    case C.x.Withdraw:
                        return i ? "Payment" : e ? `To ${e}` : "";
                    case C.x.Refund:
                        return "Refund";
                    case C.x.Reverse:
                        return "Reversed payment";
                    case C.x.Payment:
                        return "Card purchase";
                    case C.x.AtmWithdrawal:
                        return "Completed";
                    default:
                        return "";
                }
            }
            function X({ amount: e, currency: t, description: a, status: n }) {
                const r = q({ amount: e, currency: t });
                switch (n) {
                    case R.g.AwaitingRequestAcceptance:
                    case R.g.RequestVerificationRequired:
                        return a ? `Requested ${r} for "${a}"` : `Requested ${r}`;
                    case R.g.PendingRecipientAcceptance:
                        return a ? `Sent ${r} for "${a}"` : `Sent ${r}`;
                    case R.g.AwaitingUnrecognizedConfirmation:
                        return a ? `Card purchase of ${r} for "${a}"` : `Card purchase of ${r}`;
                    default:
                        return;
                }
            }
            const Q = ({ referenceTransactionId: e, transactionType: t }) => ([C.x.Refund, C.x.Reverse].includes(t) && e ? `${_.bR}/${e}` : null);
            function J({ productCode: e, transactionType: t }) {
                if (e === P.O.Interest) return z;
                const a = e === P.O.Banking;
                switch (t) {
                    case C.x.Transfer:
                        return "Peer-to-peer transfer";
                    case C.x.Deposit:
                        return a ? "Direct Deposit" : O;
                    case C.x.Withdraw:
                        return a ? "Payment" : j;
                    case C.x.Refund:
                        return "Refund";
                    case C.x.Reverse:
                        return "Reversed payment";
                    case C.x.Payment:
                        return "Card purchase";
                    case C.x.AtmWithdrawal:
                        return W;
                    default:
                        return "";
                }
            }
            const Y = Object.freeze({ [R.g.Cancelled]: "Cancelled", [R.g.Failed]: "Failed", [R.g.Expired]: "Expired", [R.g.Pending]: "Pending", [R.g.Hold]: "Pending", [R.g.AuthorizationOpen]: "Pending", [R.g.AwaitingUnrecognizedConfirmation]: "Awaiting approval", [R.g.PendingReview]: "Under review", [R.g.PendingRecipientAction]: "Pending", [R.g.PendingRecipientOnboarding]: "Pending", [R.g.AwaitingRequestAcceptance]: "Pending", [R.g.PendingRecipientAcceptance]: "Pending", [R.g.PinVerificationRequired]: "Pending", [R.g.RequestVerificationRequired]: "Pending", [R.g.VerificationRequired]: "Pending", [R.g.RejectedByRecipient]: "Rejected", [R.g.RequestRejected]: "Rejected", [R.g.Settled]: "Completed", [R.g.SoftSettled]: "Completed", [R.g.AuthorizationClosed]: "Completed" }),
                ee = Object.freeze({ [v.P.RejectedLimitsExceeded]: "Declined due to exceeded limits", [v.P.InReview]: "Under review", [v.P.RejectedByUnsupportedRegion]: "Unsupported region", [v.P.RejectedNotSufficientFunds]: "Declined due to insufficient funds", [v.P.RejectedCardPaymentsDisabled]: "Flagged as suspicious", [v.P.UnrecognizedActivityConfirmed]: "Awaiting retry", [v.P.UnrecognizedActivityRejected]: "Flagged as suspicious" }),
                te = Object.freeze({ [R.g.PendingRecipientAcceptance]: V, [R.g.PendingRecipientOnboarding]: V, [R.g.PendingRecipientAction]: V }),
                ae = Object.freeze({ [R.g.AwaitingRequestAcceptance]: V, [R.g.PendingRequestAcceptance]: V, [R.g.RequestVerificationRequired]: V });
            function ne({ isViewerSender: e, reasonCode: t, status: a }) {
                const n = t ? ee[t] : void 0,
                    r = a ? (e ? ae[a] : te[a]) : void 0,
                    i = a ? Y[a] : void 0;
                return n ?? r ?? i ?? "";
            }
            function re({ isViewerSender: e, transactionType: t }) {
                switch (t) {
                    case C.x.Deposit:
                        return E.NU.credit;
                    case C.x.Withdraw:
                    case C.x.Payment:
                    case C.x.AtmWithdrawal:
                        return E.NU.debit;
                    case C.x.Refund:
                        return E.NU.credit;
                    default:
                        return e ? E.NU.debit : E.NU.credit;
                }
            }
            const ie = Object.freeze({ [m.t.Checking]: "Checking", [m.t.Savings]: "Savings" }),
                se = Object.freeze({ [w.W.IssuedCardTypePhysical]: "Physical Card", [w.W.IssuedCardTypeVirtual]: "Virtual Card" }),
                ce = Object.freeze({ [f.l.Charge]: "Charge", [f.l.Combo]: "Combo", [f.l.Debit]: "Debit", [f.l.Credit]: "Credit", [f.l.DeferredDebit]: "DeferredDebit", [f.l.Prepaid]: "Prepaid" }),
                oe = Object.freeze({ [g.U.AmericanExpress]: "American Express", [g.U.Mastercard]: "Mastercard", [g.U.Visa]: "Visa" }),
                de = Object.freeze({ [x.D.LoginRequired]: "Login required", [x.D.Invalid]: "Invalid", [x.D.Pending]: "Pending", [x.D.Revoked]: "Revoked", [x.D.Canceled]: "Canceled", [x.D.Inactive]: "Inactive" });
            function le({ status: e }) {
                return (e ? de[e] : "") ?? "";
            }
            const ue = ({ createdAt: e, description: t, isViewerSender: a, productCode: n, reasonCode: r, status: i, transactionType: s }) => ({ amountType: s ? re({ transactionType: s, isViewerSender: a }) : void 0, type: s ? J({ transactionType: s, productCode: n }) : void 0, status: i ? ne({ status: i, reasonCode: r, isViewerSender: a }) : void 0, createdAt: $(new Date(parseInt(e, 10))), description: t });
            function pe({ status: e, transactionType: t }) {
                return t === C.x.Transfer && e === R.g.PendingRecipientAcceptance;
            }
            function me({ status: e }) {
                return e === R.g.VerificationRequired || e === R.g.RequestVerificationRequired || e === R.g.AwaitingUnrecognizedConfirmation;
            }
            function ge({ status: e, transactionType: t }) {
                return t === C.x.Transfer && e === R.g.AwaitingRequestAcceptance;
            }
            function fe({ status: e, transactionType: t }) {
                return t === C.x.Transfer && e === R.g.PendingRecipientOnboarding;
            }
            const he = ({ isViewerSender: e, status: t, transactionType: a }) => (pe({ status: t, transactionType: a }) || fe({ status: t, transactionType: a })) && !e;
            function ye({ isViewerSender: e, status: t, transactionType: a }) {
                return pe({ status: t, transactionType: a }) && !e;
            }
            function we({ isViewerSender: e, status: t, transactionType: a }) {
                return (pe({ status: t, transactionType: a }) || fe({ status: t, transactionType: a })) && e;
            }
            function be({ status: e }) {
                return e === R.g.AwaitingUnrecognizedConfirmation;
            }
            function xe({ isViewerSender: e, status: t, transactionType: a }) {
                return (
                    (ge({ status: t, transactionType: a }) && e) ||
                    (function ({ isViewerSender: e, status: t, transactionType: a }) {
                        return t === R.g.RequestVerificationRequired && e && a === C.x.Transfer;
                    })({ isViewerSender: e, status: t, transactionType: a })
                );
            }
            function Pe({ isViewerSender: e, status: t, transactionType: a }) {
                return ge({ status: t, transactionType: a }) && !e;
            }
            function Re(e) {
                return xe(e) || ye(e) || be({ status: e.status });
            }
            function Ce(e) {
                return Re(e) || Pe(e) || we(e);
            }
            function ve({ status: e }) {
                return [R.g.Cancelled, R.g.Failed, R.g.Expired, R.g.RejectedByRecipient, R.g.RequestRejected].includes(e);
            }
            function De({ status: e }) {
                return [R.g.Settled, R.g.SoftSettled, R.g.AuthorizationClosed].includes(e);
            }
            function Te({ status: e }) {
                return !De({ status: e });
            }
            const Ae = (e) => (e ? `data:image/png;base64,${e}` : ""),
                ke = Object.freeze({ [g.U.AmericanExpress]: "https://abs.twimg.com/responsive-web/client-web/payment-method-amex.b2cd046a.svg", [g.U.Mastercard]: "https://abs.twimg.com/responsive-web/client-web/payment-method-mastercard.f126316a.svg", [g.U.Visa]: "https://abs.twimg.com/responsive-web/client-web/payment-method-visa.c768170a.svg" }),
                Se = (e) => {
                    if (!e) return null;
                    const { core: t, rest_id: a } = e,
                        n = t?.details ?? {},
                        { account_number_mask: r, bank_account_type: i, bank_name: s, card_brand: c, card_number_mask: o, card_type: d, issued_card_type: l, logo: u, status: p } = n,
                        m = c ? oe[c] : "",
                        g = c ? ke[c] : "";
                    return i && r ? { accountName: { name: `${ie[i]} (...${r})` }, avatar: { shape: "square", uri: Ae(u) }, id: a, accountType: s, type: E.dX.bank, label: le({ status: p }) } : d && o ? { accountName: { name: `${ce[d]} (...${o})` }, avatar: { shape: "square", uri: g }, id: a, accountType: s, brandName: m, type: E.dX.card, label: le({ status: p }), issuedCardAccountName: !l || (l !== w.W.IssuedCardTypePhysical && l !== w.W.IssuedCardTypeVirtual) ? void 0 : `${se[l]} (...${o})` } : null;
                },
                Ne = ({ productCode: e, transactionType: t }) => e === P.O.Issuing && (t === C.x.Payment || t === C.x.Refund || t === C.x.AtmWithdrawal),
                Ue = ({ productCode: e, transactionType: t }) => e === P.O.Banking && (t === C.x.Deposit || t === C.x.Withdraw),
                Ze = ({ amountType: e, merchantDetails: t, productCode: a, transactionType: n }) => {
                    const r = n === C.x.AtmWithdrawal,
                        i = Ne({ productCode: a, transactionType: n });
                    return (Ue({ productCode: a, transactionType: n }) || i) && t ? { ...t, type: r ? E.wC.atm : i ? E.wC.card : e === E.NU.credit ? E.wC.bankDeposit : E.wC.bankWithdraw } : void 0;
                },
                _e = ({ handleEmptyList: e, key: t, store: a }) => {
                    const n = a.getRoot(),
                        r = t ? n.getLinkedRecords(t) : null;
                    r && r.length > 0 ? r.forEach((e) => e?.invalidateRecord?.()) : e && n.invalidateRecord();
                },
                Ie = (e, t) => {
                    const a = e.getRoot(),
                        n = t && a.getLinkedRecord(t);
                    n && n.invalidateRecord();
                },
                Ee = (e) => {
                    const t = (0, c.getStorageKey)(S.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterFunding, withIssuedSpend: !1 });
                    _e({ store: e, key: t, handleEmptyList: !0 });
                },
                ze = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(S.Z.fragment.selections[0], { filter: b.U.PaymentMethodFilterSpending, withIssuedSpend: !0 });
                            _e({ store: e, key: t, handleEmptyList: !0 });
                        })(e);
                    });
                },
                Oe = (e) => {
                    s()(e, (e) => {
                        Ee(e);
                    });
                },
                je = (e) => {
                    const t = (0, c.getStorageKey)(U.Z.fragment.selections[0], { search_filter_id: E.$W });
                    Ie(e, t);
                    const a = (0, c.getStorageKey)(D.Z.fragment.selections[0], {});
                    _e({ store: e, key: a });
                    const n = (0, c.getStorageKey)(T.Z.fragment.selections[0], {});
                    Ie(e, n);
                },
                We = (e) => {
                    const t = (0, c.getStorageKey)(k.Z.fragment.selections[0], {});
                    _e({ store: e, key: t });
                },
                Ve = (e, t) => {
                    s()(e, (e) => {
                        t &&
                            ((e, t) => {
                                const a = e.get(t);
                                a && a.invalidateRecord();
                            })(e, t),
                            je(e),
                            We(e);
                    });
                },
                $e = (e, { reasonCode: t, recordId: a, status: n }) => {
                    if ((me({ status: n }) || (je(e), We(e)), a && n)) {
                        const r = e.get(a);
                        r && (r.setValue(n, "transaction_status"), r.setValue(t, "reason_code"));
                    }
                },
                Ke = (e) => {
                    s()(e, (e) => {
                        ((e) => {
                            const t = (0, c.getStorageKey)(A.Z.fragment.selections[0], {});
                            Ie(e, t);
                        })(e),
                            je(e),
                            We(e);
                    });
                },
                Le = (e) => {
                    const t = (0, c.getStorageKey)(N.Z.fragment.selections[0], {});
                    Ie(e, t);
                },
                qe = () => p.ZP.isMobileOS(),
                Me = ({ permission: e, permissions: t }) => !!t?.includes(e),
                Be = (e) => Me({ permissions: e, permission: h.d.VerifyIdentity }),
                Fe = (e) => Me({ permissions: e, permission: h.d.UpdateCustomerPreferences }),
                Ge = ({ roles: e }) => !!e?.includes(y.N.Ineligible),
                He = ({ roles: e }) => !!e?.includes(y.N.PendingBalanceAutoClaim),
                Xe = ({ roles: e }) => !!e?.includes(y.N.RestrictedGeolocationUsState) || !!e?.includes(y.N.RestrictedOnboardingUsState),
                Qe = ({ roles: e }) => !!e?.includes(y.N.KycFailed) || !!e?.includes(y.N.PendingReview),
                Je = ({ roles: e }) => !!e?.includes(y.N.PendingKycUnverifiedLimitExceeded),
                Ye = ({ permissions: e }) => Me({ permissions: e, permission: h.d.RequestTransfer }),
                et = ({ actionPermission: e, permissions: t, roles: a }) => (Be(t) && !Me({ permissions: t, permission: e }) ? tt({ roles: a }) : null),
                tt = ({ roles: e }) => {
                    const t = e?.includes(y.N.PendingSelfieVerification) || e?.includes(y.N.KycDocumentsVerified),
                        a = e?.includes(y.N.KycPendingDocumentUpload) || e?.includes(y.N.KycVerified);
                    return t ? _.AU.selfie.verifyIdentityPath : a ? _.AU.tier3.verifyIdentityPath : _.AU.tier2.verifyIdentityPath;
                },
                at = () => {
                    if (p.ZP.isTwitterApp()) return window?.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                    return { [o.default.ThemePaletteNames.light]: "light", [o.default.ThemePaletteNames.dark]: "dim", [o.default.ThemePaletteNames.darker]: "dark", [o.default.ThemePaletteNames.business]: "dark" }[d.default.theme.paletteName] || "light";
                },
                nt = ({ basePath: e, moreSearchParams: t, paymentsOrigin: a, providerToken: n, theme: r, xPaymentsSession: i }) => {
                    if (!a || !i || !n) return null;
                    const s = new URL(`${a}${e}`);
                    if ((s.searchParams.set("sessionId", i), s.searchParams.set("providerToken", n), s.searchParams.set("theme", r), t)) for (const [e, a] of t) s.searchParams.set(e, a);
                    return s.href;
                },
                rt = ({ amount: e, balanceAmountMicro: t }) => {
                    const a = parseFloat(t);
                    return parseFloat(e) <= B({ amount: a });
                },
                it = (e) => new Date(e.year, e.month - 1, e.day),
                st = ({ challengeId: e, status: t }) => (me({ status: t }) && e ? _.vw : null),
                ct = ({ challengeInitiator: e, closePath: t, environment: a, history: n }) => {
                    switch ((Ke(a), e)) {
                        case _.kW.auth:
                            I.Z.closeChallenge();
                            break;
                        case _.kW.preference:
                            ((e) => {
                                s()(e, (e) => {
                                    Le(e);
                                });
                            })(a);
                    }
                    t ? n.replace(t) : n.goBack();
                },
                ot = ({ challengeInitiator: e }) => (e === _.kW.forgotPin ? _.jR : _.vw),
                dt = ({ apy: e }) => `${parseInt(e, 10) / 100}% APY`;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Payments~bundle.PaymentReceipt-8ed0fac5.9c5901da.js.map
