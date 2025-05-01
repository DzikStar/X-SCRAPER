"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d97a9c6b"],
    {
        575123: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                c = n(692165),
                i = n(698891),
                o = n(514639),
                l = n(743080);
            const m = "Help Center",
                d = "Settings",
                u = { pathname: o.N6, external: !0, openInSameFrame: !1 },
                y = () => a.createElement(r.Z, { style: l.ZP.actionButtons }, a.createElement(s.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: a.createElement(c.default, null), link: u, pullRight: !0, type: "primaryText" }), a.createElement(s.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: a.createElement(i.default, null), link: o.Sr, pullRight: !0, type: "primaryText" })),
                p = a.memo(y);
        },
        615954: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(470397),
                s = n(731708),
                c = n(392237),
                i = n(191796);
            const o = ({ name: e, size: t, website: n }) => a.createElement(r.Z, null, e && a.createElement(s.ZP, { size: t, style: l.merchantName, weight: "medium" }, e), n ? a.createElement(s.ZP, { link: { pathname: `https://${n}`, external: !0 }, size: t, weight: "medium" }, "Website", a.createElement(i.default, null)) : null),
                l = c.default.create((e) => ({ merchantName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(o);
        },
        743250: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(882956),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                i = n.n(c),
                o = n(952428),
                l = n(909377),
                m = n(731708),
                d = n(154003),
                u = n(211971),
                y = n(711223),
                p = n(642317),
                h = n(80361),
                g = n(976352),
                f = n(988291),
                I = n(829464),
                E = n(727828),
                k = n(514639),
                P = n(743080);
            const b = "Verify",
                Z = a.Z,
                v = Object.freeze({ [f.S.Alert]: "danger", [f.S.Info]: "primary", [f.S.Warning]: "warning" }),
                w = Object.freeze({ [f.S.Alert]: u.default, [f.S.Info]: y.default, [f.S.Warning]: u.default }),
                S = ({ itemRef: e, supportLink: t }) => {
                    const n = i()(Z, e),
                        a = n.topics?.includes(I.h.Premium),
                        c = n.topics?.includes(I.h.Interest),
                        u = n.level === f.S.Info,
                        y = (({ action: e, supportLink: t, url: n }) => {
                            switch (e) {
                                case g.C.ContactSupport:
                                    return { label: "Contact support", link: n ?? t };
                                case g.C.LearnMore:
                                    return { label: "Learn More", link: n ?? k.N6 };
                                case g.C.KycVerification:
                                    return { label: b, link: { pathname: k.AU.tier2.verifyIdentityPath, state: { closePath: k.gp } } };
                                case g.C.KycDocumentUpload:
                                    return { label: b, link: { pathname: k.AU.tier3.verifyIdentityPath, state: { closePath: k.gp } } };
                                case g.C.SelfieVerification:
                                    return { label: b, link: { pathname: k.AU.selfie.verifyIdentityPath, state: { closePath: k.gp } } };
                                case g.C.Deposit:
                                    return { label: "Add money", link: k.IN };
                                case g.C.SetupPasskey:
                                    return { label: "Setup", link: "https://x.com/i/flow/passkey_registration" };
                                default:
                                    return;
                            }
                        })({ action: n.call_to_action, supportLink: t, url: n.call_to_action_url }),
                        S = (u ? (a ? "primary" : c ? "success" : void 0) : void 0) ?? v[n.level],
                        C = a ? p.default : c ? h.default : w[n.level];
                    return r.createElement(o.Z, { key: n.title, style: P.dE.listItem, withInteractiveStyling: !1 }, r.createElement(l.Z, { Icon: C, color: S, size: "xLarge" }), r.createElement(s.Z, { style: P.dE.listItemFlex }, r.createElement(s.Z, { style: P.dE.listItemContent }, r.createElement(s.Z, { style: P.dE.listItemFlex }, r.createElement(m.ZP, null, n.title), r.createElement(m.ZP, { color: "gray700" }, n.subtitle)), a ? r.createElement(E.Z, { variant: "MoneyInterest" }) : y ? r.createElement(d.ZP, { link: y.link, size: "small", type: "secondaryFilled" }, y.label) : null)));
                },
                C = r.memo(S);
        },
        86320: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(470397),
                s = n(731708);
            const c = ({ account: e, size: t, weight: n = "medium" }) => a.createElement(r.Z, null, e.accountType && a.createElement(s.ZP, { size: t, style: i.bankName, weight: n }, e.accountType), a.createElement(s.ZP, { size: t, style: i.bankName, weight: n }, e.accountName.name)),
                i = n(392237).default.create((e) => ({ bankName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(c);
        },
        671738: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                c = n(30899),
                i = n(392237),
                o = n(379327),
                l = n(727384),
                m = n(392046);
            const d = ({ accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: c, onSelectAccountId: i, paymentMethods: d }) => {
                    const u = a.useCallback(
                        (e) => () => {
                            i(e), c();
                        },
                        [c, i],
                    );
                    return a.createElement(
                        r.Z,
                        { style: y.popoverContent },
                        d?.map((t) => {
                            const n = (0, l.Ou)(t);
                            return n && n.id ? a.createElement(m.Z, { account: n, isSelected: e === n.id, key: n.id, onClick: u(n.id) }) : null;
                        }),
                        a.createElement(s.ZP, { icon: a.createElement(o.default, null), link: t }, "Add bank account"),
                        n ? a.createElement(s.ZP, { icon: a.createElement(o.default, null), link: n }, "Add card") : null,
                    );
                },
                u = ({ accountId: e, addAccountLink: t, addBankCardLink: n, onSelectAccountId: r, paymentMethods: s, selectedAccount: i }) => {
                    const o = a.useCallback((c) => a.createElement(d, { accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: c, onSelectAccountId: r, paymentMethods: s }), [e, t, n, r, s]);
                    return a.createElement(c.Z, { renderContent: o, withArrow: !0 }, a.createElement(m.Z, { account: i, withChevron: !0, withInteractiveStyling: !0 }));
                },
                y = i.default.create((e) => ({ popoverContent: { margin: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, maxHeight: "280px" } })),
                p = a.memo(u);
        },
        413713: (e, t, n) => {
            n.d(t, { XE: () => u, ZP: () => h, kJ: () => y });
            var a = n(202784),
                r = n(40610),
                s = n(514639),
                c = n(727384);
            const i = "Review limits",
                o = ({ type: e }) => `This action would exceed your ${e} limits. We need to verify your identify to continue.`,
                l = ({ type: e }) => `This action would exceed your ${e} limits. Please review your limits and try again later.`,
                m = Object.freeze({
                    InsufficientFunds: { message: "Your account balance is insufficient to make this transfer. Please fund your account and then try again.", action: { link: s.IN, label: "Deposit" } },
                    InvalidReceiver: { message: "You cannot transfer to this account at this time. Please try again later." },
                    InvalidSender: { message: "You cannot request from this account at this time. Please try again later." },
                    IdempotencyKeyConflict: { message: "You might be attempting a duplicate payment. Please check before trying again!", action: { link: s.gp, label: "View account" } },
                    BankIssue: { message: "There was an issue with your bank while processing your transfer. Please try again." },
                    LoginRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: s.VN, label: "Verify" } },
                    PaymentMethodLinkRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: s.VN, label: "Verify" } },
                    InsufficientBalance: { message: "Your bank account balance is insufficient. Please check your balance and try again." },
                    TwoFactorAuthRequired: { message: "You need to setup two-factor authentication before you can proceed.", action: { link: s.z$, label: "Setup" } },
                    VolumeLimitExceeded7DaySend: { message: l({ type: "weekly" }), action: { link: s.iE.limits, label: i } },
                    VolumeLimitExceeded30DaySend: { message: l({ type: "monthly" }), action: { link: s.iE.limits, label: i } },
                    VolumeLimitExceeded7Day: { message: l({ type: "weekly" }), action: { link: s.iE.limits, label: i } },
                    VolumeLimitExceeded30Day: { message: l({ type: "monthly" }), action: { link: s.iE.limits, label: i } },
                    AdditionalKycRequiredVolumeLimitExceeded7DaySend: { message: o({ type: "weekly" }), action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredVolumeLimitExceeded30DaySend: { message: o({ type: "monthly" }), action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredTotalVolumeLimitExceeded: { message: "This action would exceed your limits. We need to verify your identify to continue.", action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    Velocity: { message: "You have temporarily exceeded your limits. Please try again later." },
                    Default: { message: "Something went wrong. Please try again later." },
                }),
                d = ["AdditionalKycRequiredVolumeLimitExceeded7DaySend", "AdditionalKycRequiredVolumeLimitExceeded30DaySend", "AdditionalKycRequiredTotalVolumeLimitExceeded"],
                u = ({ errors: e, roles: t }) => (!!e?.find((e) => d.includes(e.error_code)) ? (0, c.FW)({ roles: t }) : null),
                y = ({ errors: e }) => {
                    const t = e.find((e) => ((e) => !!m[e])(e.error_code));
                    return m[t?.error_code ?? "Default"];
                },
                p = ({ errors: e, linkState: t, roles: n }) => {
                    const s = y({ errors: e }),
                        c = s?.action,
                        i = u({ errors: e, roles: n }) ?? c?.link,
                        o = c && i ? { ...c, link: { pathname: i, state: t } } : void 0;
                    return a.createElement(r.Z.Danger, { action: o, text: s.message, withIcon: !0 });
                },
                h = a.memo(p);
        },
        89319: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(247056),
                s = n(149170),
                c = n(774426),
                i = n(736063),
                o = n(725516),
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
            const y = ({ link: e, scribeAction: t, transactionId: n }) => ({
                    Icon: u.default,
                    text: "Report payment",
                    onClick: () => {
                        t({ element: "report-payment", action: "click" });
                    },
                    link: e,
                }),
                p = { context: "PaymentsActionMenu" },
                h = ({ onOpen: e, reportedHandle: t, transactionId: n }) => {
                    const i = (0, o.z)(),
                        m = (0, l.b)({ txId: n }),
                        u = (0, l.v)({ txId: n, reportedHandle: t }),
                        p = a.useCallback(
                            ({ action: e, element: t }) => {
                                i.scribe({ element: t, action: e });
                            },
                            [i],
                        ),
                        h = a.useMemo(() => [y({ transactionId: n, scribeAction: p, link: u }), d({ transactionId: n, scribeAction: p, link: m })], [u, p, m, n]),
                        g = a.useCallback((e) => a.createElement(c.default, { actionItems: h, onClose: e }), [h]);
                    return a.createElement(r.Z, { Icon: s.default, onClick: e, renderActionMenu: g, testID: "transaction-action-menu" });
                };
            function g(e) {
                return a.createElement(i.H, { errorConfig: p }, a.createElement(h, e));
            }
            const f = a.memo(g);
        },
        448518: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(202784),
                r = n(727384),
                s = (n(136728), n(107267)),
                c = n(154003),
                i = n(167630),
                o = n(436117),
                l = n(736063),
                m = n(782642),
                d = n(514639),
                u = n(445664),
                y = n(725516),
                p = n(607929),
                h = n(413713);
            const g = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: f, type: I }) => {
                    const [E, k] = (0, p.bf)(),
                        { permissions: P, roles: b } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, r.Fs)({ permissions: P, permission: o.d.ClaimTransfer }),
                        v = (0, y.z)(),
                        w = (0, s.useHistory)(),
                        S = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    E({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? w.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: n }) : (i && S({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: b });
                                            t ? w.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : S({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [S, e, v, E, w, t, n, b, l, f],
                        ),
                        x = k || !Z;
                    return a.createElement(c.ZP, { disabled: x, onPress: C, size: g ?? "medium", type: I }, k ? a.createElement(i.Z, { size: "small" }) : "Accept");
                },
                f = { context: "PaymentsAcceptTransfer" };
            function I(e) {
                return a.createElement(l.H, { errorConfig: f }, a.createElement(g, e));
            }
            const E = a.memo(I);
            var k = n(202241);
            const P = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: g }) => {
                    const [f, I] = (0, k.yA)(),
                        { permissions: E, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: o.d.ConfirmUnrecognizedPayment }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? v.push(o, { challengeId: a, challengeInitiator: d.kW.confirmUnrecognisedPayment, successMessage: i, recordId: n }) : (i && w({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: P });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, f, p, n, e, t, w, P, v],
                        ),
                        C = I || !b;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: g }, I ? a.createElement(i.Z, { size: "small" }) : "Approve");
                },
                b = { context: "PaymentsPayRequest" };
            function Z(e) {
                return a.createElement(l.H, { errorConfig: b }, a.createElement(P, e));
            }
            const v = a.memo(Z);
            var w = n(604347);
            const S = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: g }) => {
                    const [f, I] = (0, w.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: o.d.CancelRequestTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: n }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, f, p, n, e, g, t, v, k, Z],
                        ),
                        C = I || !P;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Cancel request");
                },
                C = { context: "PaymentsCancelRequest" };
            function x(e) {
                return a.createElement(l.H, { errorConfig: C }, a.createElement(S, e));
            }
            const z = a.memo(x);
            var A = n(500386);
            const N = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: l, size: p, transactionId: g }) => {
                    const [f, I] = (0, A.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: o.d.CancelTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    f({ transactionId: g, recordId: l })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: l }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${g}`, closePath: d.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, e, b, f, Z, t, l, k, n, g],
                        ),
                        S = I || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: p ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Cancel transaction");
                },
                R = { context: "PaymentsCancelTransfer" };
            function T(e) {
                return a.createElement(l.H, { errorConfig: R }, a.createElement(N, e));
            }
            const $ = a.memo(T);
            var D = n(891414);
            const _ = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: g }) => {
                    const [f, I] = (0, D.C7)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: o.d.RespondToRequestTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: i, recordId: n }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, f, p, n, e, g, t, v, k, Z],
                        ),
                        S = I || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Decline");
                },
                L = { context: "PaymentsDeclineRequest" };
            function V(e) {
                return a.createElement(l.H, { errorConfig: L }, a.createElement(_, e));
            }
            const F = a.memo(V),
                q = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: f }) => {
                    const [I, E] = (0, p.C7)(),
                        k = (0, y.z)(),
                        P = (0, s.useHistory)(),
                        b = (0, m.p)(),
                        { permissions: Z, roles: v } = (0, u.Z)({ fetchKey: "Payments" }),
                        w = (0, r.Fs)({ permissions: Z, permission: o.d.ClaimTransfer }),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    k.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    I({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? P.push(o, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: i, recordId: n }) : (i && b({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: v });
                                            t ? P.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : b({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, e, k, I, P, t, n, v, l, f],
                        ),
                        C = E || !w;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: g ?? "medium", type: "primaryOutlined" }, E ? a.createElement(i.Z, { size: "small" }) : "Decline");
                },
                M = { context: "PaymentsDeclineTransfer" };
            function H(e) {
                return a.createElement(l.H, { errorConfig: M }, a.createElement(q, e));
            }
            const K = a.memo(H),
                W = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: g, userScreenName: f }) => {
                    const [I, E] = (0, D.iP)(),
                        { permissions: k, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: o.d.RespondToRequestTransfer }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "review-request", element: "pay", action: "click" }),
                                    I({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && f ? (({ formattedAmount: e, userScreenName: t }) => `You sent ${e} to @${t}.`)({ formattedAmount: e, userScreenName: f }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? v.push(o, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: i, recordId: n }) : (i && w({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: P });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, I, p, n, e, f, t, w, P, v],
                        ),
                        C = E || !b;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: g }, E ? a.createElement(i.Z, { size: "small" }) : "Pay");
                },
                Y = { context: "PaymentsPayRequest" };
            function O(e) {
                return a.createElement(l.H, { errorConfig: Y }, a.createElement(W, e));
            }
            const U = a.memo(O),
                B = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p }) => {
                    const [g, f] = (0, k.F8)(),
                        { permissions: I, roles: E } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: I, permission: o.d.ConfirmUnrecognizedPayment }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    g({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, challengeInitiator: d.kW.confirmUnrecognisedPayment, successMessage: i, recordId: n }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: E });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, g, p, n, e, t, v, E, Z],
                        ),
                        S = f || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: l ?? "medium", type: "destructiveFilled" }, f ? a.createElement(i.Z, { size: "small" }) : "I did not make this purchase");
                },
                J = { context: "PaymentsRejectPayment" };
            function X(e) {
                return a.createElement(l.H, { errorConfig: J }, a.createElement(B, e));
            }
            const j = a.memo(X),
                G = ({ size: e, transactionId: t, type: n }) => {
                    const { permissions: s } = (0, u.Z)({ fetchKey: "Payments" }),
                        i = !(0, r.Fs)({ permissions: s, permission: o.d.ConfirmUnrecognizedPayment });
                    return a.createElement(c.ZP, { disabled: i, link: i ? void 0 : `${d.bR}/${t}`, size: e ?? "medium", type: n }, "Review");
                },
                Q = { context: "PaymentsReviewButton" };
            function ee(e) {
                return a.createElement(l.H, { errorConfig: Q }, a.createElement(G, e));
            }
            const te = a.memo(ee);
            function ne({ amount: e, challengeId: t, currency: n, isViewerSender: s, onSuccess: c, receiverScreenName: i, recordId: o, senderScreenName: l, status: m, transactionId: d, transactionType: u, withPrimaryOnly: y }) {
                const p = e ? (0, r.vw)({ amount: e, currency: n }) : null,
                    h = (0, r.BR)({ status: m, transactionType: u, isViewerSender: s }),
                    g = (0, r.Tp)({ status: m, transactionType: u, isViewerSender: s }),
                    f = (0, r.UM)({ status: m, transactionType: u, isViewerSender: s }),
                    I = (0, r.T3)({ status: m, transactionType: u, isViewerSender: s }),
                    k = (0, r.BC)({ status: m }),
                    P = a.useMemo(() => (g ? a.createElement($, { amount: p, key: "CancelTransfer", onSuccess: c, receiverScreenName: i, recordId: o, transactionId: d }) : null), [g, p, c, i, o, d]),
                    b = a.useMemo(() => (I ? a.createElement(z, { amount: p, key: "CancelRequest", recordId: o, transactionId: d, userScreenName: l }) : null), [I, p, o, l, d]),
                    Z = a.useMemo(() => (f ? a.createElement(U, { amount: p, key: "PayRequest", onSuccess: c, recordId: o, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled", userScreenName: i }) : null), [f, p, c, i, o, d, y]),
                    w = a.useMemo(() => (f ? a.createElement(F, { amount: p, key: "DeclineRequest", recordId: o, transactionId: d, userScreenName: i }) : null), [f, p, i, o, d]),
                    S = a.useMemo(() => (h ? a.createElement(E, { amount: p, key: "AcceptTransfer", onSuccess: c, recordId: o, senderScreenName: l, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [h, p, c, o, l, d, y]),
                    C = a.useMemo(() => (h ? a.createElement(K, { amount: p, key: "DeclineTransfer", recordId: o, senderScreenName: l, transactionId: d }) : null), [h, p, o, l, d]),
                    x = a.useMemo(() => (k ? a.createElement(v, { amount: p, key: "ApprovePayment", onSuccess: c, recordId: o, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, p, c, o, d, y]),
                    A = a.useMemo(() => (k ? a.createElement(j, { amount: p, key: "RejectPayment", onSuccess: c, recordId: o, transactionId: d }) : null), [k, p, c, o, d]),
                    N = a.useMemo(() => (k ? a.createElement(te, { key: "ReviewPayment", size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, d, y]),
                    R = a.useMemo(() => [...(y ? [Z, S, N] : [P, b, Z, w, S, C, A, x])], [S, x, b, P, w, C, Z, A, N, y]);
                return a.createElement(a.Fragment, null, R);
            }
            const ae = a.memo(ne);
        },
        519901: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(515207),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                i = n.n(c),
                o = n(952428),
                l = n(823161),
                m = n(731708),
                d = n(966886),
                u = n(880428),
                y = n(357818),
                p = n(514639),
                h = n(412876),
                g = n(553660),
                f = n(467734),
                I = n(743080),
                E = n(727384),
                k = n(634455),
                P = n(477922),
                b = n(615954),
                Z = n(86320),
                v = n(448518),
                w = n(972758);
            const S = a.Z,
                C = ({ itemRef: e }) => {
                    const t = i()(S, e),
                        { __id: n, amount_local_micro: a, challenge_id: c, created_at: C, currency: x, description: z, details: A, id: N, product_code: R, reason_code: T, transaction_status: $, transaction_type: D } = t,
                        _ = R === u.x.Interest,
                        L = A.receiver_results?.result,
                        V = A.sender_results?.result,
                        F = A.payment_method,
                        q = A.merchant_details,
                        M = (0, f.Z)({ senderId: V?.rest_id }),
                        H = (0, E.GU)({ transactionType: D, isViewerSender: M }),
                        K = _ || "User" !== L?.__typename || "User" !== V?.__typename ? null : M ? L : V,
                        W = (0, E.zK)({ transactionType: D, productCode: R, merchantDetails: q, amountType: H }),
                        Y = D === y.x.Deposit || D === y.x.Withdraw ? (0, E.Ou)(F) : null,
                        O = (0, E.qK)({ transactionType: D, description: z, productCode: R, accountName: Y ? (Y.accountType ? `${Y.accountType} ${Y.accountName.name}` : `${Y.accountName.name}`) : "", createdAt: C }),
                        U = (0, E.lD)({ status: $, reasonCode: T, isViewerSender: M }),
                        B = (0, E._T)({ status: $ }),
                        J = (0, E.Gl)({ status: $ }),
                        X = V?.legacy?.screen_name,
                        j = L?.legacy?.screen_name,
                        G = (0, E.DK)({ isViewerSender: M, status: $, transactionType: D }),
                        Q = (0, E.pQ)({ productCode: R, transactionType: D, account: Y });
                    return r.createElement(o.Z, { key: N, link: `${p.bR}/${N}`, style: I.dE.listItem }, K ? r.createElement(h.Z, { size: "xLarge", user: K }) : Q ? r.createElement(P.KR, { size: "xLarge", type: Q.iconType, uri: Q.uri }) : W ? r.createElement(P.G7, { size: "xLarge", type: W.type, uri: W.logo }) : r.createElement(l.default, { size: "xLarge" }), r.createElement(s.Z, { style: I.dE.listItemFlex, testID: `transaction-item-${N}` }, r.createElement(s.Z, { style: I.dE.listItemContent }, r.createElement(s.Z, { style: I.dE.listItemFlex }, K ? r.createElement(g.Z, { user: K, weight: "medium" }) : Q ? r.createElement(w.Z, { title: Q.title }) : W ? r.createElement(b.Z, { name: W.name, website: W.website }) : Y ? r.createElement(Z.Z, { account: Y }) : r.createElement(m.ZP, null, "This account is unavailable"), G && a ? r.createElement(m.ZP, { color: "gray700" }, (0, E.lw)({ status: $, description: z, amount: a, currency: x })) : J ? r.createElement(m.ZP, { color: "gray700" }, U) : O ? r.createElement(m.ZP, { color: "gray700" }, O) : null), G ? r.createElement(v.Z, { amount: a, challengeId: c, currency: x, isViewerSender: M, receiverScreenName: j, recordId: n, senderScreenName: X, status: $, transactionId: N, transactionType: D, withPrimaryOnly: !0 }) : r.createElement(s.Z, { style: I.dE.alignEnd }, r.createElement(k.Z, { amount: a, currency: x, hasCompleted: B, size: "body", type: H, weight: "normal" }), r.createElement(d.Z, { style: I.dE.alignEnd, timestamp: parseInt(C, 10) })))));
                },
                x = r.memo(C);
        },
        655750: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(325686),
                s = n(731708);
            function c({ color: e, description: t, title: n }) {
                return t ? a.createElement(r.Z, { style: i.root }, a.createElement(s.ZP, { color: e }, t), a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n)) : null;
            }
            const i = n(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                o = a.memo(c);
        },
        578719: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(860648),
                r = n(202784),
                s = (n(585488), n(277660)),
                c = n.n(s),
                i = n(731708),
                o = n(392237),
                l = n(965245),
                m = n(519901);
            const d = a.Z,
                u = ({ id: e }) => e,
                y = ({ emptyStateDescription: e, fetchNext: t, slice: n }) => {
                    const { items: a } = c()(d, n),
                        s = r.useCallback((e) => r.createElement(m.Z, { itemRef: e, key: e.id }), []);
                    return a && a.length ? r.createElement(l.Z, { assumedItemHeight: 64, cacheKey: "transactionsList", footer: null, identityFunction: u, items: a, onNearEnd: t, renderer: s, role: "list", withoutHeadroom: !0 }) : r.createElement(i.ZP, { align: "center", color: "gray700", size: "body", style: p.emptyState }, e);
                },
                p = o.default.create((e) => ({ emptyState: { marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space32 } })),
                h = r.memo(y);
        },
        48646: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(325686),
                s = n(731708),
                c = n(392237);
            function i({ color: e, note: t, shouldCenterAlign: n = !1, size: c = "body", weight: i }) {
                return t ? a.createElement(r.Z, { style: n && l.alignCenter }, a.createElement(s.ZP, { color: e, size: c, weight: i }, `For "${t}"`)) : null;
            }
            const o = a.memo(i),
                l = c.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        847211: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(743080),
                c = n(477922),
                i = n(731708);
            const o = ({ account: e, size: t, weight: n }) => a.createElement(i.ZP, { size: t, style: l.name, weight: n }, e.issuedCardAccountName),
                l = n(392237).default.create((e) => ({ name: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(o);
            var d = n(86320);
            function u({ account: e, isIssued: t, testId: n }) {
                return a.createElement(r.Z, { style: s.YP.description, testID: n }, e ? (t ? a.createElement(a.Fragment, null, a.createElement(c.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), a.createElement(m, { account: e, weight: "normal" })) : a.createElement(d.Z, { account: e, weight: "normal" })) : null);
            }
            const y = a.memo(u);
        },
        972758: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(731708);
            const s = ({ size: e, title: t }) => a.createElement(r.ZP, { size: e, style: c.title, weight: "medium" }, t),
                c = n(392237).default.create((e) => ({ title: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                i = a.memo(s);
        },
        749286: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(771469),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                i = n.n(c),
                o = n(392237),
                l = n(412876),
                m = n(553660);
            const d = a.Z,
                u = ({ avatarWithLink: e, user: t, usernameWithLink: n, withCenterAlign: a }) => {
                    const c = i()(d, t);
                    return r.createElement(s.Z, { style: [y.root, a ? y.alignCenter : null] }, r.createElement(l.Z, { size: "custom", style: y.userAvatar, user: c, withLink: e }), r.createElement(m.Z, { style: a && y.alignCenter, user: c, withLink: e, withStackedLayout: a }));
                },
                y = o.default.create((e) => ({ alignCenter: { alignItems: "center" }, root: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                p = r.memo(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d97a9c6b.901cf5da.js.map
