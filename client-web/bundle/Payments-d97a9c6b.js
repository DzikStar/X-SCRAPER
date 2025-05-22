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
                o = n(698891),
                i = n(514639),
                l = n(743080);
            const m = "Help Center",
                d = "Settings",
                u = { pathname: i.N6, external: !0, openInSameFrame: !1 },
                y = () => a.createElement(r.Z, { style: l.ZP.actionButtons }, a.createElement(s.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: a.createElement(c.default, null), link: u, pullRight: !0, type: "primaryText" }), a.createElement(s.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: a.createElement(o.default, null), link: i.Sr, pullRight: !0, type: "primaryText" })),
                p = a.memo(y);
        },
        615954: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(470397),
                s = n(731708),
                c = n(392237),
                o = n(191796);
            const i = ({ name: e, size: t, website: n }) => a.createElement(r.Z, null, e && a.createElement(s.ZP, { size: t, style: l.merchantName, weight: "medium" }, e), n ? a.createElement(s.ZP, { link: { pathname: `https://${n}`, external: !0 }, size: t, weight: "medium" }, "Website", a.createElement(o.default, null)) : null),
                l = c.default.create((e) => ({ merchantName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(i);
        },
        743250: (e, t, n) => {
            n.d(t, { Z: () => z });
            var a = n(882956),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                o = n.n(c),
                i = n(952428),
                l = n(909377),
                m = n(731708),
                d = n(154003),
                u = n(392237),
                y = n(211971),
                p = n(711223),
                g = n(642317),
                h = n(80361),
                f = n(976352),
                I = n(988291),
                E = n(829464),
                k = n(727828),
                P = n(514639),
                b = n(743080);
            const Z = "Verify",
                v = a.Z,
                w = Object.freeze({ [I.S.Alert]: "danger", [I.S.Info]: "primary", [I.S.Warning]: "warning" }),
                S = Object.freeze({ [I.S.Alert]: y.default, [I.S.Info]: p.default, [I.S.Warning]: y.default }),
                C = ({ itemRef: e, supportLink: t }) => {
                    const n = o()(v, e),
                        a = n.topics?.includes(E.h.Premium),
                        c = n.topics?.includes(E.h.Interest),
                        u = n.level === I.S.Info,
                        y = (({ action: e, supportLink: t, url: n }) => {
                            switch (e) {
                                case f.C.ContactSupport:
                                    return { label: "Contact support", link: n ?? t };
                                case f.C.LearnMore:
                                    return { label: "Learn More", link: n ?? P.N6 };
                                case f.C.KycVerification:
                                    return { label: Z, link: { pathname: P.AU.tier2.verifyIdentityPath, state: { closePath: P.gp } } };
                                case f.C.KycDocumentUpload:
                                    return { label: Z, link: { pathname: P.AU.tier3.verifyIdentityPath, state: { closePath: P.gp } } };
                                case f.C.SelfieVerification:
                                    return { label: Z, link: { pathname: P.AU.selfie.verifyIdentityPath, state: { closePath: P.gp } } };
                                case f.C.Deposit:
                                    return { label: "Add money", link: P.IN };
                                case f.C.SetupPasskey:
                                    return { label: "Setup", link: "https://x.com/i/flow/passkey_registration" };
                                default:
                                    return;
                            }
                        })({ action: n.call_to_action, supportLink: t, url: n.call_to_action_url }),
                        p = (u ? (a ? "primary" : c ? "success" : void 0) : void 0) ?? w[n.level],
                        C = a ? g.default : c ? h.default : S[n.level];
                    return r.createElement(i.Z, { key: n.title, style: b.dE.unpaddedListItem, withInteractiveStyling: !1 }, r.createElement(s.Z, { style: x.contentContainer }, r.createElement(s.Z, { style: x.noticeContainer }, r.createElement(l.Z, { Icon: C, color: p, size: "xLarge" }), r.createElement(s.Z, { style: x.noticeTextContainer }, r.createElement(m.ZP, { color: "text", size: "subtext2", weight: "medium" }, n.title), r.createElement(m.ZP, { color: "gray800", size: "subtext2", weight: "normal" }, n.subtitle))), r.createElement(s.Z, null, a ? r.createElement(k.Z, { variant: "MoneyInterest" }) : y ? r.createElement(d.ZP, { link: y.link, size: "small", type: "secondaryFilled" }, y.label) : null)));
                },
                x = u.default.create((e) => ({ contentContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, noticeContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, noticeTextContainer: { display: "flex", flexDirection: "col", gap: e.spaces.space4 } })),
                z = r.memo(C);
        },
        86320: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(470397),
                s = n(731708);
            const c = ({ account: e, size: t, weight: n = "medium" }) => a.createElement(r.Z, null, e.accountType && a.createElement(s.ZP, { size: t, style: o.bankName, weight: n }, e.accountType), a.createElement(s.ZP, { size: t, style: o.bankName, weight: n }, e.accountName.name)),
                o = n(392237).default.create((e) => ({ bankName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                i = a.memo(c);
        },
        671738: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                c = n(30899),
                o = n(392237),
                i = n(379327),
                l = n(727384),
                m = n(392046);
            const d = ({ accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: c, methodConfigs: o, onSelectAccountId: d, paymentMethods: u, transferDirection: p }) => {
                    const g = a.useCallback(
                        (e) => () => {
                            d(e), c();
                        },
                        [c, d],
                    );
                    return a.createElement(
                        r.Z,
                        { style: y.popoverContent },
                        u?.map((t) => {
                            const n = (0, l.xe)({ method: t, methodConfigs: o, transferDirection: p });
                            return n && n.id ? a.createElement(m.Z, { account: n, isSelected: e === n.id, key: n.id, onClick: g(n.id) }) : null;
                        }),
                        a.createElement(s.ZP, { icon: a.createElement(i.default, null), link: t }, "Add bank account"),
                        n ? a.createElement(s.ZP, { icon: a.createElement(i.default, null), link: n }, "Add card") : null,
                    );
                },
                u = ({ accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: r, methodConfigs: s, onSelectAccountId: o, paymentMethods: i, selectedAccount: l, transferDirection: u }) => {
                    const p = a.useCallback((r) => a.createElement(d, { accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: r, methodConfigs: s, onSelectAccountId: o, paymentMethods: i, transferDirection: u }), [e, t, n, s, o, i, u]);
                    return a.createElement(c.Z, { contentStyle: y.contentStyle, renderContent: p, withArrow: !0 }, a.createElement(m.Z, { account: l, calculatedFee: r, withChevron: !0, withInteractiveStyling: !0 }));
                },
                y = o.default.create((e) => ({ popoverContent: { margin: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16 }, contentStyle: { maxHeight: 360, maxWidth: 400 } })),
                p = a.memo(u);
        },
        413713: (e, t, n) => {
            n.d(t, { XE: () => u, ZP: () => g, kJ: () => y });
            var a = n(202784),
                r = n(40610),
                s = n(514639),
                c = n(727384);
            const o = "Review limits",
                i = ({ type: e }) => `This action would exceed your ${e} limits. We need to verify your identify to continue.`,
                l = ({ type: e }) => `This action would exceed your ${e} limits. Please review your limits and try again later.`,
                m = Object.freeze({
                    InsufficientFunds: { message: "Your account balance is insufficient to make this transfer. Please fund your account and then try again.", action: { link: s.IN, label: "Deposit" } },
                    InvalidReceiver: { message: "Transfers to this account are unavailable right now. Please try again later." },
                    InvalidReceiverCurrentState: { message: "Transfers to this account are unavailable right now. Please try again later." },
                    InvalidReceiverPreferences: { message: "This account blocked this type of transaction.", getMessage: ({ counterPartyScreenName: e }) => (e ? `@${e}` : "This account") + " blocked this type of transaction." },
                    InvalidSender: { message: "Requests to this account are unavailable right now. Please try again later." },
                    InvalidSenderCurrentState: { message: "Requests to this account are unavailable right now. Please try again later." },
                    InvalidSenderPreferences: { message: "This account blocked this type of transaction.", getMessage: ({ counterPartyScreenName: e }) => (e ? `@${e}` : "This account") + " blocked this type of transaction." },
                    IdempotencyKeyConflict: { message: "You might be attempting a duplicate payment. Please check before trying again!", action: { link: s.gp, label: "View account" } },
                    BankIssue: { message: "There was an issue with your bank while processing your transfer. Please try again." },
                    LoginRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: s.VN, label: "Verify" } },
                    PaymentMethodLinkRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: s.VN, label: "Verify" } },
                    InsufficientBalance: { message: "Your bank account balance is insufficient. Please check your balance and try again." },
                    TwoFactorAuthRequired: { message: "You need to setup two-factor authentication before you can proceed.", action: { link: s.z$, label: "Setup" } },
                    VolumeLimitExceeded7DaySend: { message: l({ type: "weekly" }), action: { link: s.iE.limits, label: o } },
                    VolumeLimitExceeded30DaySend: { message: l({ type: "monthly" }), action: { link: s.iE.limits, label: o } },
                    VolumeLimitExceeded7Day: { message: l({ type: "weekly" }), action: { link: s.iE.limits, label: o } },
                    VolumeLimitExceeded30Day: { message: l({ type: "monthly" }), action: { link: s.iE.limits, label: o } },
                    AdditionalKycRequiredVolumeLimitExceeded7DaySend: { message: i({ type: "weekly" }), action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredVolumeLimitExceeded30DaySend: { message: i({ type: "monthly" }), action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredTotalVolumeLimitExceeded: { message: "This action would exceed your limits. We need to verify your identify to continue.", action: { link: s.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    Velocity: { message: "You have temporarily exceeded your limits. Please try again later." },
                    Default: { message: "Something went wrong. Please try again later." },
                }),
                d = ["AdditionalKycRequiredVolumeLimitExceeded7DaySend", "AdditionalKycRequiredVolumeLimitExceeded30DaySend", "AdditionalKycRequiredTotalVolumeLimitExceeded"],
                u = ({ errors: e, roles: t }) => (!!e?.find((e) => d.includes(e.error_code)) ? (0, c.FW)({ roles: t }) : null),
                y = ({ errors: e, opts: t }) => {
                    const n = e.find((e) => ((e) => !!m[e])(e.error_code));
                    return m[n?.error_code ?? "Default"];
                },
                p = ({ errors: e, linkState: t, opts: n, roles: s }) => {
                    const c = y({ errors: e, opts: n }),
                        o = c?.action,
                        i = u({ errors: e, roles: s }) ?? o?.link,
                        l = o && i ? { ...o, link: { pathname: i, state: t } } : void 0,
                        m = c.getMessage && n ? c.getMessage(n) : c.message;
                    return a.createElement(r.Z.Danger, { action: l, text: m, withIcon: !0 });
                },
                g = a.memo(p);
        },
        19804: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                s = n(165822),
                c = n(731708),
                o = n(58399),
                i = n(743080);
            const l = ({ Icon: e, disabled: t, link: n, onClick: l, subtitle: m, title: d }) => {
                    const u = (0, i.jh)(),
                        y = !!l || !!n;
                    return a.createElement(s.Z, { "aria-label": d, containerStyle: u.tile, disabled: t, link: n, onClick: l, stackLayoutUpperStyle: i.ZP.upper, upper: a.createElement(r.Z, { style: i.ZP.rowSpaceBetween }, a.createElement(r.Z, { style: i.ZP.row }, e ? a.createElement(e, { style: i.ZP.icon }) : null, a.createElement(r.Z, null, a.createElement(c.ZP, null, d), m ? a.createElement(c.ZP, { color: "gray700", size: "subtext2" }, m) : null)), y ? a.createElement(o.default, { style: i.ZP.centeredIcon }) : null), withInteractiveStyling: y });
                },
                m = a.memo(l);
        },
        89319: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(247056),
                s = n(149170),
                c = n(774426),
                o = n(736063),
                i = n(725516),
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
                g = ({ onOpen: e, reportedHandle: t, transactionId: n }) => {
                    const o = (0, i.z)(),
                        m = (0, l.b)({ txId: n }),
                        u = (0, l.v)({ txId: n, reportedHandle: t }),
                        p = a.useCallback(
                            ({ action: e, element: t }) => {
                                o.scribe({ element: t, action: e });
                            },
                            [o],
                        ),
                        g = a.useMemo(() => [y({ transactionId: n, scribeAction: p, link: u }), d({ transactionId: n, scribeAction: p, link: m })], [u, p, m, n]),
                        h = a.useCallback((e) => a.createElement(c.default, { actionItems: g, onClose: e }), [g]);
                    return a.createElement(r.Z, { Icon: s.default, onClick: e, renderActionMenu: h, testID: "transaction-action-menu" });
                };
            function h(e) {
                return a.createElement(o.H, { errorConfig: p }, a.createElement(g, e));
            }
            const f = a.memo(h);
        },
        448518: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(202784),
                r = n(727384),
                s = (n(136728), n(107267)),
                c = n(154003),
                o = n(167630),
                i = n(436117),
                l = n(736063),
                m = n(782642),
                d = n(514639),
                u = n(445664),
                y = n(725516),
                p = n(607929),
                g = n(413713);
            const h = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: h, transactionId: f, type: I }) => {
                    const [E, k] = (0, p.bf)(),
                        { permissions: P, roles: b } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, r.Fs)({ permissions: P, permission: i.d.ClaimTransfer }),
                        v = (0, y.z)(),
                        w = (0, s.useHistory)(),
                        S = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    E({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? w.push(i, { challengeId: a, successMessage: o, challengeInitiator: d.kW.transaction, recordId: n }) : (o && S({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: b });
                                            t ? w.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : S({ text: (0, g.kJ)({ errors: e, opts: { counterPartyScreenName: l } }).message });
                                        });
                            },
                            [S, e, v, E, w, t, n, b, l, f],
                        ),
                        x = k || !Z;
                    return a.createElement(c.ZP, { disabled: x, onPress: C, size: h ?? "medium", type: I }, k ? a.createElement(o.Z, { size: "small" }) : "Accept");
                },
                f = { context: "PaymentsAcceptTransfer" };
            function I(e) {
                return a.createElement(l.H, { errorConfig: f }, a.createElement(h, e));
            }
            const E = a.memo(I);
            var k = n(202241);
            const P = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: h }) => {
                    const [f, I] = (0, k.yA)(),
                        { permissions: E, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: i.d.ConfirmUnrecognizedPayment }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? v.push(i, { challengeId: a, challengeInitiator: d.kW.confirmUnrecognisedPayment, successMessage: o, recordId: n }) : (o && w({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: P });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, f, p, n, e, t, w, P, v],
                        ),
                        C = I || !b;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: h }, I ? a.createElement(o.Z, { size: "small" }) : "Approve");
                },
                b = { context: "PaymentsPayRequest" };
            function Z(e) {
                return a.createElement(l.H, { errorConfig: b }, a.createElement(P, e));
            }
            const v = a.memo(Z);
            var w = n(604347);
            const S = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: h }) => {
                    const [f, I] = (0, w.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: i.d.CancelRequestTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && h ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: h }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, successMessage: o, challengeInitiator: d.kW.transaction, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, f, p, n, e, h, t, v, k, Z],
                        ),
                        C = I || !P;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(o.Z, { size: "small" }) : "Cancel request");
                },
                C = { context: "PaymentsCancelRequest" };
            function x(e) {
                return a.createElement(l.H, { errorConfig: C }, a.createElement(S, e));
            }
            const z = a.memo(x);
            var A = n(500386);
            const T = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: l, size: p, transactionId: h }) => {
                    const [f, I] = (0, A.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: i.d.CancelTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    f({ transactionId: h, recordId: l })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, successMessage: o, challengeInitiator: d.kW.transaction, recordId: l }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${h}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, e, b, f, Z, t, l, k, n, h],
                        ),
                        S = I || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: p ?? "medium", type: "primaryOutlined" }, I ? a.createElement(o.Z, { size: "small" }) : "Cancel transaction");
                },
                N = { context: "PaymentsCancelTransfer" };
            function R(e) {
                return a.createElement(l.H, { errorConfig: N }, a.createElement(T, e));
            }
            const $ = a.memo(R);
            var D = n(891414);
            const _ = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: h }) => {
                    const [f, I] = (0, D.C7)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: i.d.RespondToRequestTransfer }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && h ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: h }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, f, p, n, e, h, t, v, k, Z],
                        ),
                        S = I || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                L = { context: "PaymentsDeclineRequest" };
            function F(e) {
                return a.createElement(l.H, { errorConfig: L }, a.createElement(_, e));
            }
            const M = a.memo(F),
                V = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: h, transactionId: f }) => {
                    const [I, E] = (0, p.C7)(),
                        k = (0, y.z)(),
                        P = (0, s.useHistory)(),
                        b = (0, m.p)(),
                        { permissions: Z, roles: v } = (0, u.Z)({ fetchKey: "Payments" }),
                        w = (0, r.Fs)({ permissions: Z, permission: i.d.ClaimTransfer }),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    k.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    I({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? P.push(i, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && b({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: v });
                                            t ? P.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : b({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, e, k, I, P, t, n, v, l, f],
                        ),
                        C = E || !w;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: h ?? "medium", type: "primaryOutlined" }, E ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                q = { context: "PaymentsDeclineTransfer" };
            function H(e) {
                return a.createElement(l.H, { errorConfig: q }, a.createElement(V, e));
            }
            const K = a.memo(H),
                W = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: h, userScreenName: f }) => {
                    const [I, E] = (0, D.iP)(),
                        { permissions: k, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: i.d.RespondToRequestTransfer }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "review-request", element: "pay", action: "click" }),
                                    I({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e && f ? (({ formattedAmount: e, userScreenName: t }) => `You sent ${e} to @${t}.`)({ formattedAmount: e, userScreenName: f }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? v.push(i, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: o, recordId: n }) : (o && w({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: P });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, I, p, n, e, f, t, w, P, v],
                        ),
                        C = E || !b;
                    return a.createElement(c.ZP, { disabled: C, onPress: S, size: l ?? "medium", type: h }, E ? a.createElement(o.Z, { size: "small" }) : "Pay");
                },
                U = { context: "PaymentsPayRequest" };
            function Y(e) {
                return a.createElement(l.H, { errorConfig: U }, a.createElement(W, e));
            }
            const O = a.memo(Y),
                B = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p }) => {
                    const [h, f] = (0, k.F8)(),
                        { permissions: I, roles: E } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: I, permission: i.d.ConfirmUnrecognizedPayment }),
                        b = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    b.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    h({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null,
                                                i = (0, r.wu)({ status: s, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, challengeInitiator: d.kW.confirmUnrecognisedPayment, successMessage: o, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: E });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [b, h, p, n, e, t, v, E, Z],
                        ),
                        S = f || !P;
                    return a.createElement(c.ZP, { disabled: S, onPress: w, size: l ?? "medium", type: "destructiveFilled" }, f ? a.createElement(o.Z, { size: "small" }) : "I did not make this purchase");
                },
                J = { context: "PaymentsRejectPayment" };
            function X(e) {
                return a.createElement(l.H, { errorConfig: J }, a.createElement(B, e));
            }
            const j = a.memo(X),
                G = ({ size: e, transactionId: t, type: n }) => {
                    const { permissions: s } = (0, u.Z)({ fetchKey: "Payments" }),
                        o = !(0, r.Fs)({ permissions: s, permission: i.d.ConfirmUnrecognizedPayment });
                    return a.createElement(c.ZP, { disabled: o, link: o ? void 0 : `${d.bR}/${t}`, size: e ?? "medium", type: n }, "Review");
                },
                Q = { context: "PaymentsReviewButton" };
            function ee(e) {
                return a.createElement(l.H, { errorConfig: Q }, a.createElement(G, e));
            }
            const te = a.memo(ee);
            function ne({ amount: e, challengeId: t, currency: n, isViewerSender: s, onSuccess: c, receiverScreenName: o, recordId: i, senderScreenName: l, status: m, transactionId: d, transactionType: u, withPrimaryOnly: y }) {
                const p = e ? (0, r.vw)({ amount: e, currency: n }) : null,
                    g = (0, r.BR)({ status: m, transactionType: u, isViewerSender: s }),
                    h = (0, r.Tp)({ status: m, transactionType: u, isViewerSender: s }),
                    f = (0, r.UM)({ status: m, transactionType: u, isViewerSender: s }),
                    I = (0, r.T3)({ status: m, transactionType: u, isViewerSender: s }),
                    k = (0, r.BC)({ status: m }),
                    P = a.useMemo(() => (h ? a.createElement($, { amount: p, key: "CancelTransfer", onSuccess: c, receiverScreenName: o, recordId: i, transactionId: d }) : null), [h, p, c, o, i, d]),
                    b = a.useMemo(() => (I ? a.createElement(z, { amount: p, key: "CancelRequest", recordId: i, transactionId: d, userScreenName: l }) : null), [I, p, i, l, d]),
                    Z = a.useMemo(() => (f ? a.createElement(O, { amount: p, key: "PayRequest", onSuccess: c, recordId: i, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled", userScreenName: o }) : null), [f, p, c, o, i, d, y]),
                    w = a.useMemo(() => (f ? a.createElement(M, { amount: p, key: "DeclineRequest", recordId: i, transactionId: d, userScreenName: o }) : null), [f, p, o, i, d]),
                    S = a.useMemo(() => (g ? a.createElement(E, { amount: p, key: "AcceptTransfer", onSuccess: c, recordId: i, senderScreenName: l, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [g, p, c, i, l, d, y]),
                    C = a.useMemo(() => (g ? a.createElement(K, { amount: p, key: "DeclineTransfer", recordId: i, senderScreenName: l, transactionId: d }) : null), [g, p, i, l, d]),
                    x = a.useMemo(() => (k ? a.createElement(v, { amount: p, key: "ApprovePayment", onSuccess: c, recordId: i, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, p, c, i, d, y]),
                    A = a.useMemo(() => (k ? a.createElement(j, { amount: p, key: "RejectPayment", onSuccess: c, recordId: i, transactionId: d }) : null), [k, p, c, i, d]),
                    T = a.useMemo(() => (k ? a.createElement(te, { key: "ReviewPayment", size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, d, y]),
                    N = a.useMemo(() => [...(y ? [Z, S, T] : [P, b, Z, w, S, C, A, x])], [S, x, b, P, w, C, Z, A, T, y]);
                return a.createElement(a.Fragment, null, N);
            }
            const ae = a.memo(ne);
        },
        770585: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(731708),
                s = n(332920),
                c = n.n(s),
                o = n(727384);
            const i = ({ calculatedFee: e, fees: t }) => {
                    const n = t.percentage_micro,
                        s = t.fixed_minimum_amount?.local_micro,
                        i = n ? (0, o.dN)({ amount: n, formatter: 1e5 }) : null,
                        l = s && "0" !== s ? (0, o.vw)({ amount: s, currency: t.fixed_minimum_amount?.currency }) : null,
                        m = a.useMemo(() => ({ percent: i, fixedFee: l }), [l, i]);
                    return a.createElement(r.ZP, { color: "gray700" }, i && l ? (e ? a.createElement(c().I18NFormatMessage, { $i18n: "gfc900b9" }, e) : a.createElement(c().I18NFormatMessage, { $i18n: "bd9265e3" }, m.percent, m.fixedFee)) : "(Free)");
                },
                l = a.memo(i);
        },
        519901: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(515207),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                o = n.n(c),
                i = n(952428),
                l = n(823161),
                m = n(731708),
                d = n(966886),
                u = n(880428),
                y = n(357818),
                p = n(514639),
                g = n(412876),
                h = n(553660),
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
                    const t = o()(S, e),
                        { __id: n, amount_local_micro: a, challenge_id: c, created_at: C, currency: x, description: z, details: A, id: T, product_code: N, reason_code: R, transaction_status: $, transaction_type: D } = t,
                        _ = N === u.x.Interest,
                        L = A.receiver_results?.result,
                        F = A.sender_results?.result,
                        M = A.payment_method,
                        V = A.merchant_details,
                        q = (0, f.Z)({ senderId: F?.rest_id }),
                        H = (0, E.GU)({ transactionType: D, isViewerSender: q, productCode: N }),
                        K = _ || "User" !== L?.__typename || "User" !== F?.__typename ? null : q ? L : F,
                        W = (0, E.zK)({ transactionType: D, productCode: N, merchantDetails: V, amountType: H }),
                        U = D === y.x.Deposit || D === y.x.Withdraw ? (0, E.Ou)(M) : null,
                        Y = (0, E.lD)({ status: $, reasonCode: R, isViewerSender: q }),
                        O = (0, E.qK)({ transactionType: D, description: z, productCode: N, accountName: U ? (U.accountType ? `${U.accountType} ${U.accountName.name}` : `${U.accountName.name}`) : "", createdAt: C, statusLabel: Y }),
                        B = (0, E._T)({ status: $ }),
                        J = (0, E.Gl)({ status: $ }),
                        X = F?.core?.screen_name,
                        j = L?.core?.screen_name,
                        G = (0, E.DK)({ isViewerSender: q, status: $, transactionType: D }),
                        Q = (0, E.pQ)({ productCode: N, transactionType: D, account: U });
                    return r.createElement(i.Z, { key: T, link: `${p.bR}/${T}`, style: I.dE.listItem }, Q ? r.createElement(P.KR, { size: "xLarge", type: Q.iconType, uri: Q.uri }) : K ? r.createElement(g.Z, { size: "xLarge", user: K }) : W ? r.createElement(P.G7, { size: "xLarge", type: W.type, uri: W.logo }) : r.createElement(l.default, { size: "xLarge" }), r.createElement(s.Z, { style: I.dE.listItemFlex, testID: `transaction-item-${T}` }, r.createElement(s.Z, { style: I.dE.listItemContent }, r.createElement(s.Z, { style: I.dE.listItemFlex }, Q ? r.createElement(w.Z, { title: Q.title }) : K ? r.createElement(h.Z, { user: K, weight: "medium" }) : W ? r.createElement(b.Z, { name: W.name, website: W.website }) : U ? r.createElement(Z.Z, { account: U }) : r.createElement(m.ZP, null, "This account is unavailable"), G && a ? r.createElement(m.ZP, { color: "gray700" }, (0, E.lw)({ status: $, description: z, amount: a, currency: x })) : J ? r.createElement(m.ZP, { color: "gray700" }, Y) : O ? r.createElement(m.ZP, { color: "gray700" }, O) : null), G ? r.createElement(v.Z, { amount: a, challengeId: c, currency: x, isViewerSender: q, receiverScreenName: j, recordId: n, senderScreenName: X, status: $, transactionId: T, transactionType: D, withPrimaryOnly: !0 }) : r.createElement(s.Z, { style: I.dE.alignEnd }, r.createElement(k.Z, { amount: a, currency: x, hasCompleted: B, size: "body", type: H, weight: "normal" }), r.createElement(d.Z, { style: I.dE.alignEnd, timestamp: parseInt(C, 10) })))));
                },
                x = r.memo(C);
        },
        655750: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(325686),
                s = n(731708);
            function c({ color: e, description: t, title: n }) {
                return t ? a.createElement(r.Z, { style: o.root }, a.createElement(s.ZP, { color: e }, t), a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n)) : null;
            }
            const o = n(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                i = a.memo(c);
        },
        578719: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(860648),
                r = n(202784),
                s = (n(585488), n(277660)),
                c = n.n(s),
                o = n(731708),
                i = n(392237),
                l = n(965245),
                m = n(519901);
            const d = a.Z,
                u = ({ id: e }) => e,
                y = ({ emptyStateDescription: e, fetchNext: t, slice: n }) => {
                    const { items: a } = c()(d, n),
                        s = r.useCallback((e) => r.createElement(m.Z, { itemRef: e, key: e.id }), []);
                    return a && a.length ? r.createElement(l.Z, { assumedItemHeight: 64, cacheKey: "transactionsList", footer: null, identityFunction: u, items: a, onNearEnd: t, renderer: s, role: "list", withoutHeadroom: !0 }) : r.createElement(o.ZP, { align: "center", color: "gray700", size: "body", style: p.emptyState }, e);
                },
                p = i.default.create((e) => ({ emptyState: { marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space32 } })),
                g = r.memo(y);
        },
        48646: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(325686),
                s = n(731708),
                c = n(392237);
            function o({ color: e, note: t, shouldCenterAlign: n = !1, size: c = "body", weight: o }) {
                return t ? a.createElement(r.Z, { style: n && l.alignCenter }, a.createElement(s.ZP, { color: e, size: c, weight: o }, `For "${t}"`)) : null;
            }
            const i = a.memo(o),
                l = c.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        847211: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(743080),
                c = n(477922),
                o = n(731708);
            const i = ({ account: e, size: t, weight: n }) => a.createElement(o.ZP, { size: t, style: l.name, weight: n }, e.issuedCardAccountName),
                l = n(392237).default.create((e) => ({ name: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(i);
            var d = n(86320);
            function u({ account: e, isIssued: t, testId: n }) {
                return a.createElement(r.Z, { style: s.YP.description, testID: n }, e ? (t ? a.createElement(a.Fragment, null, a.createElement(c.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), a.createElement(m, { account: e, weight: "normal" })) : a.createElement(d.Z, { account: e, weight: "normal" })) : null);
            }
            const y = a.memo(u);
        },
        972758: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(731708);
            const s = ({ size: e, title: t }) => a.createElement(r.ZP, { size: e, style: c.title, weight: "medium" }, t),
                c = n(392237).default.create((e) => ({ title: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(s);
        },
        749286: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(771469),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                o = n.n(c),
                i = n(392237),
                l = n(412876),
                m = n(553660);
            const d = a.Z,
                u = ({ avatarWithLink: e, user: t, usernameWithLink: n, withCenterAlign: a }) => {
                    const c = o()(d, t);
                    return r.createElement(s.Z, { style: [y.root, a ? y.alignCenter : null] }, r.createElement(l.Z, { size: "custom", style: y.userAvatar, user: c, withLink: e }), r.createElement(m.Z, { style: a && y.alignCenter, user: c, withLink: e, withStackedLayout: a }));
                },
                y = i.default.create((e) => ({ alignCenter: { alignItems: "center" }, root: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                p = r.memo(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d97a9c6b.85e0c36a.js.map
