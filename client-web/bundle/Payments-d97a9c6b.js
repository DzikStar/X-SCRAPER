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
                i = n(19197),
                o = n(514639),
                l = n(743080);
            const m = "Help Center",
                d = "Settings",
                u = { pathname: o.N6, external: !0, openInSameFrame: !1 },
                y = () => a.createElement(r.Z, { style: l.ZP.actionButtons }, a.createElement(s.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: a.createElement(c.default, null), link: u, pullRight: !0, type: "primaryText" }), a.createElement(s.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: a.createElement(i.default, null), link: o.Sr, pullRight: !0, type: "primaryText" })),
                p = a.memo(y);
        },
        827309: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(731708),
                c = n(154003),
                i = n(392237),
                o = n(760286),
                l = n(980407),
                m = n(743080);
            const d = ({ actionLabel: e, children: t, headline: n, history: i, onAction: d, onClose: y, subtext: p, supportUrl: g }) => {
                    const h = (0, m.jh)();
                    return a.createElement(l.Z, { backButtonType: y ? "close" : void 0, hideBackButton: !y, history: i, onBackClick: y, withoutBottomBarMobile: !0 }, a.createElement(r.Z, { style: h.container }, a.createElement(o.default, { style: m.ZP.illustration }), a.createElement(s.ZP, { size: "title1", weight: "bold" }, n), a.createElement(s.ZP, { color: "gray700", size: "subtext1" }, p, g ? a.createElement(a.Fragment, null, a.createElement(s.ZP, { link: g, size: "body", style: m.ZP.learnMoreLink }, "Learn more")) : null), a.createElement(r.Z, { style: u.content }, t)), d ? a.createElement(r.Z, { style: h.footer }, a.createElement(c.ZP, { onPress: d, size: "large", type: "primaryFilled" }, e)) : null);
                },
                u = i.default.create((e) => ({ content: { marginTop: e.spaces.space32 } })),
                y = a.memo(d);
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
            n.d(t, { Z: () => z });
            var a = n(882956),
                r = n(202784),
                s = n(325686),
                c = (n(585488), n(277660)),
                i = n.n(c),
                o = n(952428),
                l = n(909377),
                m = n(731708),
                d = n(392237),
                u = n(211971),
                y = n(711223),
                p = n(642317),
                g = n(80361),
                h = n(14284),
                f = n(58399),
                I = n(976352),
                E = n(988291),
                k = n(829464),
                b = n(727828),
                P = n(514639);
            const Z = "Verify",
                v = a.Z,
                w = Object.freeze({ [E.S.Alert]: "danger", [E.S.Info]: "primary", [E.S.Warning]: "warning" }),
                x = Object.freeze({ [E.S.Alert]: u.default, [E.S.Info]: y.default, [E.S.Warning]: u.default }),
                C = ({ itemRef: e, supportLink: t }) => {
                    const n = i()(v, e),
                        a = n.topics?.includes(k.h.Premium),
                        c = n.topics?.includes(k.h.Interest),
                        d = n.topics?.includes(k.h.Geography),
                        u = n.level === E.S.Info,
                        y = (({ action: e, supportLink: t, url: n }) => {
                            switch (e) {
                                case I.C.ContactSupport:
                                    return { label: "Contact support", link: n ?? t };
                                case I.C.LearnMore:
                                    return { label: "Learn More", link: n ?? P.N6 };
                                case I.C.KycVerification:
                                    return { label: Z, link: { pathname: P.AU.tier2.verifyIdentityPath, state: { closePath: P.gp } } };
                                case I.C.KycDocumentUpload:
                                    return { label: Z, link: { pathname: P.AU.tier3.verifyIdentityPath, state: { closePath: P.gp } } };
                                case I.C.SelfieVerification:
                                    return { label: Z, link: { pathname: P.AU.selfie.verifyIdentityPath, state: { closePath: P.gp } } };
                                case I.C.Deposit:
                                    return { label: "Add money", link: P.IN };
                                case I.C.SetupPasskey:
                                    return { label: "Setup", link: P.ul };
                                default:
                                    return;
                            }
                        })({ action: n.call_to_action, supportLink: t, url: n.call_to_action_url }),
                        C = (u ? (a ? "primary" : c ? "success" : void 0) : void 0) ?? w[n.level],
                        z = a ? p.default : c ? g.default : d ? h.default : x[n.level];
                    return r.createElement(o.Z, { key: n.title, link: !a && y ? y.link : void 0, style: [S.noticeListItem, !a && y && S.pointer], withInteractiveStyling: !1 }, r.createElement(s.Z, { style: S.contentContainer }, r.createElement(s.Z, { style: S.noticeContainer }, r.createElement(l.Z, { Icon: z, color: C, size: "xLarge" }), r.createElement(s.Z, { style: S.noticeTextContainer }, r.createElement(m.ZP, { color: "text", size: "subtext2", weight: "medium" }, n.title), r.createElement(m.ZP, { color: "gray800", size: "subtext2", weight: "normal" }, n.subtitle))), a ? r.createElement(b.Z, { variant: "MoneyInterest" }) : y ? r.createElement(f.default, { style: S.icon }) : null));
                },
                S = d.default.create((e) => ({ contentContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }, noticeContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, noticeTextContainer: { display: "flex", flexDirection: "col", gap: e.spaces.space4 }, noticeListItem: { gap: e.spaces.space8, flex: 1, flexDirection: "row", borderRadius: e.borderRadii.large, alignItems: "center", paddingVertical: e.spaces.space8 }, pointer: { cursor: "pointer" }, icon: { color: e.colors.gray700 } })),
                z = r.memo(C);
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
                s = n(30899),
                c = n(392237),
                i = n(727384),
                o = n(392046),
                l = n(189305),
                m = n(281838);
            const d = ({ accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: s, methodConfigs: c, onSelectAccountId: d, paymentMethods: u, transferDirection: p }) => {
                    const g = a.useCallback(
                        (e) => () => {
                            d(e), s();
                        },
                        [s, d],
                    );
                    return a.createElement(
                        r.Z,
                        { style: y.popoverContent },
                        u?.map((t) => {
                            const n = (0, i.xe)({ method: t, methodConfigs: c, transferDirection: p });
                            return n && n.id ? a.createElement(o.Z, { account: n, isSelected: e === n.id, key: n.id, onClick: g(n.id) }) : null;
                        }),
                        a.createElement(m.Z, { link: n, methodConfigs: c, transferDirection: p, variant: "link" }),
                        a.createElement(l.Z, { link: t, methodConfigs: c, transferDirection: p, variant: "link" }),
                    );
                },
                u = ({ accountId: e, addAccountLink: t, addBankCardLink: n, calculatedFee: r, methodConfigs: c, onSelectAccountId: i, paymentMethods: l, selectedAccount: m, transferDirection: u }) => {
                    const p = a.useCallback((r) => a.createElement(d, { accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: r, methodConfigs: c, onSelectAccountId: i, paymentMethods: l, transferDirection: u }), [e, t, n, c, i, l, u]);
                    return a.createElement(s.Z, { contentStyle: y.contentStyle, renderContent: p, withArrow: !0 }, a.createElement(o.Z, { account: m, calculatedFee: r, withChevron: !0, withInteractiveStyling: !0 }));
                },
                y = c.default.create((e) => ({ popoverContent: { margin: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16 }, contentStyle: { maxHeight: 360, maxWidth: 400 } })),
                p = a.memo(u);
        },
        413713: (e, t, n) => {
            n.d(t, { XE: () => u, ZP: () => g, kJ: () => y });
            var a = n(202784),
                r = n(40610),
                s = n(514639),
                c = n(727384);
            const i = "Review limits",
                o = ({ type: e }) => `This action would exceed your ${e} limits. We need to verify your identify to continue.`,
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
                    TwoFactorAuthRequired: { message: "You need to setup a passkey before you can proceed.", action: { link: s.ul, label: "Setup" } },
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
                y = ({ errors: e, opts: t }) => {
                    const n = e.find((e) => ((e) => !!m[e])(e.error_code));
                    return m[n?.error_code ?? "Default"];
                },
                p = ({ errors: e, linkState: t, opts: n, roles: s }) => {
                    const c = y({ errors: e, opts: n }),
                        i = c?.action,
                        o = u({ errors: e, roles: s }) ?? i?.link,
                        l = i && o ? { ...i, link: { pathname: o, state: t } } : void 0,
                        m = c.getMessage && n ? c.getMessage(n) : c.message;
                    return a.createElement(r.Z.Danger, { action: l, text: m, withIcon: !0 });
                },
                g = a.memo(p);
        },
        442880: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(868634),
                s = n(731708),
                c = n(453333),
                i = n(848739),
                o = n(514639),
                l = n(743080);
            const m = ({ processingTime: e }) => {
                    const t = e?.processing_time_type === i.l.RealTime,
                        n = e?.max_duration_in_business_days ?? o.UJ,
                        m = t ? "Instant" : (({ count: e }) => `${e} - ${e + 2} Days`)({ count: n });
                    return a.createElement(r.ZP, { background: t ? "green0" : "gray50", style: l.ZP.label, type: t ? "bestValue" : void 0 }, a.createElement(s.ZP, { color: t ? "green500" : "gray900", size: "subtext1", weight: "medium" }, t ? a.createElement(c.default, { style: l.mR.icon }) : null, m));
                },
                d = a.memo(m);
        },
        19804: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(325686),
                s = n(165822),
                c = n(731708),
                i = n(392237),
                o = n(58399),
                l = n(743080);
            const m = ({ Icon: e, decoration: t, disabled: n, link: i, onClick: m, subtitle: u, title: y }) => {
                    const p = (0, l.jh)(),
                        g = !!m || !!i;
                    return a.createElement(s.Z, { "aria-label": y, containerStyle: p.tile, disabled: n, interactiveStyles: l.LR, link: i, onClick: m, stackLayoutUpperStyle: l.ZP.upper, upper: a.createElement(r.Z, { style: l.ZP.rowSpaceBetween }, a.createElement(r.Z, { style: l.ZP.row }, e ? a.createElement(e, { style: l.ZP.icon }) : null, a.createElement(r.Z, { style: d.textContainer }, a.createElement(c.ZP, { size: "subtext2", weight: "medium" }, y), u ? a.createElement(c.ZP, { color: "gray700", size: "subtext2", weight: "normal" }, u) : null)), t || (g ? a.createElement(o.default, { style: l.ZP.centeredIcon }) : null)), withInteractiveStyling: g });
                },
                d = i.default.create((e) => ({ textContainer: { flex: 1, gap: e.spaces.space4 } })),
                u = a.memo(m);
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
                g = ({ onOpen: e, reportedHandle: t, transactionId: n }) => {
                    const i = (0, o.z)(),
                        m = (0, l.b)({ txId: n }),
                        u = (0, l.v)({ txId: n, reportedHandle: t }),
                        p = a.useCallback(
                            ({ action: e, element: t }) => {
                                i.scribe({ element: t, action: e });
                            },
                            [i],
                        ),
                        g = a.useMemo(() => [y({ transactionId: n, scribeAction: p, link: u }), d({ transactionId: n, scribeAction: p, link: m })], [u, p, m, n]),
                        h = a.useCallback((e) => a.createElement(c.default, { actionItems: g, onClose: e }), [g]);
                    return a.createElement(r.Z, { Icon: s.default, onClick: e, renderActionMenu: h, testID: "transaction-action-menu" });
                };
            function h(e) {
                return a.createElement(i.H, { errorConfig: p }, a.createElement(g, e));
            }
            const f = a.memo(h);
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
                g = n(413713);
            const h = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: h, transactionId: f, type: I }) => {
                    const [E, k] = (0, p.bf)(),
                        { permissions: b, roles: P } = (0, u.Z)({ fetchKey: "Payments" }),
                        Z = (0, r.Fs)({ permissions: b, permission: o.d.ClaimTransfer }),
                        v = (0, y.z)(),
                        w = (0, s.useHistory)(),
                        x = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    E({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? w.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: n }) : (i && x({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: P });
                                            t ? w.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : x({ text: (0, g.kJ)({ errors: e, opts: { counterPartyScreenName: l } }).message });
                                        });
                            },
                            [x, e, v, E, w, t, n, P, l, f],
                        ),
                        S = k || !Z;
                    return a.createElement(c.ZP, { disabled: S, onPress: C, size: h ?? "medium", type: I }, k ? a.createElement(i.Z, { size: "small" }) : "Accept");
                },
                f = { context: "PaymentsAcceptTransfer" };
            function I(e) {
                return a.createElement(l.H, { errorConfig: f }, a.createElement(h, e));
            }
            const E = a.memo(I);
            var k = n(202241);
            const b = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: h }) => {
                    const [f, I] = (0, k.yA)(),
                        { permissions: E, roles: b } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: o.d.ConfirmUnrecognizedPayment }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        x = a.useCallback(
                            (e) => {
                                e && e.preventDefault(),
                                    Z.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: e, status: a, transactionId: s }) => {
                                            const c = (0, r.wu)({ status: a, challengeId: e });
                                            c ? v.push(c, { challengeId: e, challengeInitiator: d.kW.confirmUnrecognisedPayment, recordId: n }) : t?.();
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: b });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, f, p, n, t, w, b, v],
                        ),
                        C = I || !P;
                    return a.createElement(c.ZP, { disabled: C, onPress: x, size: l ?? "medium", type: h }, I ? a.createElement(i.Z, { size: "small" }) : "Yes, it was me");
                },
                P = { context: "PaymentsPayRequest" };
            function Z(e) {
                return a.createElement(l.H, { errorConfig: P }, a.createElement(b, e));
            }
            const v = a.memo(Z);
            var w = n(604347);
            const x = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: h }) => {
                    const [f, I] = (0, w.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: o.d.CancelRequestTransfer }),
                        P = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && h ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: h }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: n }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, p, n, e, h, t, v, k, Z],
                        ),
                        C = I || !b;
                    return a.createElement(c.ZP, { disabled: C, onPress: x, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Cancel request");
                },
                C = { context: "PaymentsCancelRequest" };
            function S(e) {
                return a.createElement(l.H, { errorConfig: C }, a.createElement(x, e));
            }
            const z = a.memo(S);
            var T = n(500386);
            const A = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: l, size: p, transactionId: h }) => {
                    const [f, I] = (0, T.Z)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: o.d.CancelTransfer }),
                        P = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    f({ transactionId: h, recordId: l })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, successMessage: i, challengeInitiator: d.kW.transaction, recordId: l }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${h}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, e, P, f, Z, t, l, k, n, h],
                        ),
                        x = I || !b;
                    return a.createElement(c.ZP, { disabled: x, onPress: w, size: p ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Cancel transaction");
                },
                R = { context: "PaymentsCancelTransfer" };
            function N(e) {
                return a.createElement(l.H, { errorConfig: R }, a.createElement(A, e));
            }
            const D = a.memo(N);
            var $ = n(891414);
            const _ = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: h }) => {
                    const [f, I] = (0, $.C7)(),
                        { permissions: E, roles: k } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: o.d.RespondToRequestTransfer }),
                        P = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && h ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: h }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? Z.push(o, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: i, recordId: n }) : (i && v({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, p, n, e, h, t, v, k, Z],
                        ),
                        x = I || !b;
                    return a.createElement(c.ZP, { disabled: x, onPress: w, size: l ?? "medium", type: "primaryOutlined" }, I ? a.createElement(i.Z, { size: "small" }) : "Decline");
                },
                F = { context: "PaymentsDeclineRequest" };
            function L(e) {
                return a.createElement(l.H, { errorConfig: F }, a.createElement(_, e));
            }
            const M = a.memo(L),
                V = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: h, transactionId: f }) => {
                    const [I, E] = (0, p.C7)(),
                        k = (0, y.z)(),
                        b = (0, s.useHistory)(),
                        P = (0, m.p)(),
                        { permissions: Z, roles: v } = (0, u.Z)({ fetchKey: "Payments" }),
                        w = (0, r.Fs)({ permissions: Z, permission: o.d.ClaimTransfer }),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    k.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    I({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: s, transactionId: c }) => {
                                            const i = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                o = (0, r.wu)({ status: s, challengeId: a });
                                            o ? b.push(o, { challengeId: a, challengeInitiator: d.kW.transaction, successMessage: i, recordId: n }) : (i && P({ text: i }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: v });
                                            t ? b.replace(t, { redirectPath: `${d.bR}/${f}`, closePath: d.gp }) : P({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, e, k, I, b, t, n, v, l, f],
                        ),
                        C = E || !w;
                    return a.createElement(c.ZP, { disabled: C, onPress: x, size: h ?? "medium", type: "primaryOutlined" }, E ? a.createElement(i.Z, { size: "small" }) : "Decline");
                },
                q = { context: "PaymentsDeclineTransfer" };
            function H(e) {
                return a.createElement(l.H, { errorConfig: q }, a.createElement(V, e));
            }
            const K = a.memo(H),
                U = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: h, userScreenName: f }) => {
                    const [I, E] = (0, $.iP)(),
                        { permissions: k, roles: b } = (0, u.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: k, permission: o.d.RespondToRequestTransfer }),
                        Z = (0, y.z)(),
                        v = (0, s.useHistory)(),
                        w = (0, m.p)(),
                        x = a.useCallback(
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
                                            const t = (0, g.XE)({ errors: e, roles: b });
                                            t ? v.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : w({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, I, p, n, e, f, t, w, b, v],
                        ),
                        C = E || !P;
                    return a.createElement(c.ZP, { disabled: C, onPress: x, size: l ?? "medium", type: h }, E ? a.createElement(i.Z, { size: "small" }) : "Pay");
                },
                W = { context: "PaymentsPayRequest" };
            function B(e) {
                return a.createElement(l.H, { errorConfig: W }, a.createElement(U, e));
            }
            const O = a.memo(B),
                Y = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p }) => {
                    const [h, f] = (0, k.F8)(),
                        { permissions: I, roles: E } = (0, u.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: I, permission: o.d.ConfirmUnrecognizedPayment }),
                        P = (0, y.z)(),
                        Z = (0, s.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (e) => {
                                e && e.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    h({ transactionId: p, recordId: n })
                                        .then(({ challengeId: e, status: a, transactionId: s }) => {
                                            const c = (0, r.wu)({ status: a, challengeId: e });
                                            c ? Z.push(c, { challengeId: e, challengeInitiator: d.kW.confirmUnrecognisedPayment, recordId: n }) : t?.();
                                        })
                                        .catch((e) => {
                                            const t = (0, g.XE)({ errors: e, roles: E });
                                            t ? Z.replace(t, { redirectPath: `${d.bR}/${p}`, closePath: d.gp }) : v({ text: (0, g.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, h, p, n, t, v, E, Z],
                        ),
                        x = f || !b;
                    return a.createElement(c.ZP, { disabled: x, onPress: w, size: l ?? "medium", type: "destructiveFilled" }, f ? a.createElement(i.Z, { size: "small" }) : "I did not make this purchase");
                },
                J = { context: "PaymentsRejectPayment" };
            function j(e) {
                return a.createElement(l.H, { errorConfig: J }, a.createElement(Y, e));
            }
            const X = a.memo(j),
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
                    g = (0, r.BR)({ status: m, transactionType: u, isViewerSender: s }),
                    h = (0, r.Tp)({ status: m, transactionType: u, isViewerSender: s }),
                    f = (0, r.UM)({ status: m, transactionType: u, isViewerSender: s }),
                    I = (0, r.T3)({ status: m, transactionType: u, isViewerSender: s }),
                    k = (0, r.BC)({ status: m }),
                    b = a.useMemo(() => (h ? a.createElement(D, { amount: p, key: "CancelTransfer", onSuccess: c, receiverScreenName: i, recordId: o, transactionId: d }) : null), [h, p, c, i, o, d]),
                    P = a.useMemo(() => (I ? a.createElement(z, { amount: p, key: "CancelRequest", recordId: o, transactionId: d, userScreenName: l }) : null), [I, p, o, l, d]),
                    Z = a.useMemo(() => (f ? a.createElement(O, { amount: p, key: "PayRequest", onSuccess: c, recordId: o, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled", userScreenName: i }) : null), [f, p, c, i, o, d, y]),
                    w = a.useMemo(() => (f ? a.createElement(M, { amount: p, key: "DeclineRequest", recordId: o, transactionId: d, userScreenName: i }) : null), [f, p, i, o, d]),
                    x = a.useMemo(() => (g ? a.createElement(E, { amount: p, key: "AcceptTransfer", onSuccess: c, recordId: o, senderScreenName: l, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [g, p, c, o, l, d, y]),
                    C = a.useMemo(() => (g ? a.createElement(K, { amount: p, key: "DeclineTransfer", recordId: o, senderScreenName: l, transactionId: d }) : null), [g, p, o, l, d]),
                    S = a.useMemo(() => (k ? a.createElement(v, { amount: p, key: "ApprovePayment", onSuccess: c, recordId: o, size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, p, c, o, d, y]),
                    T = a.useMemo(() => (k ? a.createElement(X, { amount: p, key: "RejectPayment", onSuccess: c, recordId: o, transactionId: d }) : null), [k, p, c, o, d]),
                    A = a.useMemo(() => (k ? a.createElement(te, { key: "ReviewPayment", size: y ? "small" : "medium", transactionId: d, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [k, d, y]),
                    R = a.useMemo(() => [...(y ? [Z, x, A] : [b, P, Z, w, x, C, T, S])], [x, S, P, b, w, C, Z, T, A, y]);
                return a.createElement(a.Fragment, null, R);
            }
            const ae = a.memo(ne);
        },
        770585: (e, t, n) => {
            n.d(t, { C: () => d, Z: () => u });
            var a = n(202784),
                r = n(731708),
                s = n(111677),
                c = n.n(s),
                i = n(727384);
            const o = "Free",
                l = (e) => {
                    const t = e.percentage_micro,
                        n = e.fixed_minimum_amount?.local_micro;
                    return { percent: t ? (0, i.dN)({ amount: t, formatter: 1e4 }) : null, fixedFee: n && "0" !== n ? (0, i.vw)({ amount: n, currency: e.fixed_minimum_amount?.currency }) : null };
                },
                m = ({ calculatedFee: e, fees: t }) => {
                    const { fixedFee: n, percent: s } = l(t);
                    return a.createElement(r.ZP, { color: "gray700" }, s && n ? (e ? a.createElement(c().I18NFormatMessage, { $i18n: "gfc900b9" }, e) : a.createElement(c().I18NFormatMessage, { $i18n: "bd9265e3" }, s, n)) : `(${o})`);
                },
                d = ({ calculatedFee: e, fees: t }) => {
                    const { fixedFee: n, percent: s } = l(t);
                    return a.createElement(r.ZP, { color: "gray700" }, s && n ? a.createElement(c().I18NFormatMessage, { $i18n: "b5648ffb" }, s, n) : o);
                },
                u = a.memo(m);
        },
        519901: (e, t, n) => {
            n.d(t, { Z: () => S });
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
                g = n(412876),
                h = n(553660),
                f = n(467734),
                I = n(743080),
                E = n(727384),
                k = n(634455),
                b = n(477922),
                P = n(615954),
                Z = n(86320),
                v = n(448518),
                w = n(972758);
            const x = a.Z,
                C = ({ itemRef: e }) => {
                    const t = i()(x, e),
                        { __id: n, amount_local_micro: a, challenge_id: c, created_at: C, currency: S, description: z, details: T, id: A, product_code: R, reason_code: N, transaction_status: D, transaction_type: $ } = t,
                        _ = R === u.x.Interest,
                        F = T.receiver_results?.result,
                        L = T.sender_results?.result,
                        M = T.payment_method,
                        V = T.merchant_details,
                        q = (0, f.Z)({ senderId: L?.rest_id }),
                        H = (0, E.GU)({ transactionType: $, isViewerSender: q, productCode: R }),
                        K = _ || "User" !== F?.__typename || "User" !== L?.__typename ? null : q ? F : L,
                        U = (0, E.zK)({ transactionType: $, productCode: R, merchantDetails: V, amountType: H }),
                        W = $ === y.x.Deposit || $ === y.x.Withdraw ? (0, E.Ou)(M) : null,
                        B = (0, E.lD)({ status: D, reasonCode: N, isViewerSender: q }),
                        O = (0, E.qK)({ transactionType: $, description: z, productCode: R, accountName: W ? (W.accountType ? `${W.accountType} ${W.accountName.name}` : `${W.accountName.name}`) : "", createdAt: C, statusLabel: B }),
                        Y = (0, E._T)({ status: D }),
                        J = (0, E.Gl)({ status: D }),
                        j = L?.core?.screen_name,
                        X = F?.core?.screen_name,
                        G = (0, E.DK)({ isViewerSender: q, status: D, transactionType: $ }),
                        Q = (0, E.pQ)({ productCode: R, transactionType: $, account: W });
                    return r.createElement(o.Z, { key: A, link: `${p.bR}/${A}`, style: [I.dE.listItem, { justifyContent: "space-between" }] }, Q ? r.createElement(b.KR, { size: "xxLarge", type: Q.iconType, uri: Q.uri }) : K ? r.createElement(g.Z, { size: "xxLarge", user: K }) : U ? r.createElement(b.G7, { size: "xxLarge", type: U.type, uri: U.logo }) : r.createElement(l.default, { size: "xxLarge" }), r.createElement(s.Z, { style: I.dE.listItemFlex, testID: `transaction-item-${A}` }, r.createElement(s.Z, { style: I.dE.listItemContent }, r.createElement(s.Z, { style: I.dE.listItemFlex }, Q ? r.createElement(w.Z, { title: Q.title }) : K ? r.createElement(h.Z, { user: K, weight: "medium" }) : U ? r.createElement(P.Z, { name: U.name, website: U.website }) : W ? r.createElement(Z.Z, { account: W }) : r.createElement(m.ZP, null, "This account is unavailable"), G && a ? r.createElement(m.ZP, { color: "gray700" }, (0, E.lw)({ status: D, description: z, amount: a, currency: S })) : J ? r.createElement(m.ZP, { color: "gray700" }, B) : O ? r.createElement(m.ZP, { color: "gray700" }, O) : null), G ? r.createElement(v.Z, { amount: a, challengeId: c, currency: S, isViewerSender: q, receiverScreenName: X, recordId: n, senderScreenName: j, status: D, transactionId: A, transactionType: $, withPrimaryOnly: !0 }) : r.createElement(s.Z, { style: I.dE.alignEnd }, r.createElement(k.Z, { amount: a, currency: S, hasCompleted: Y, size: "body", type: H, weight: "normal" }), r.createElement(d.Z, { style: I.dE.alignEnd, timestamp: parseInt(C, 10) })))));
                },
                S = r.memo(C);
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
            n.d(t, { Z: () => g });
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
                g = r.memo(y);
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
                    return r.createElement(s.Z, { style: [y.root, a ? y.alignCenter : null] }, r.createElement(l.Z, { size: "custom", style: y.userAvatar, user: c, withLink: e }), r.createElement(m.Z, { style: [...(a ? [y.alignCenter] : []), y.headlineFont], user: c, withLink: e, withStackedLayout: a }));
                },
                y = o.default.create((e) => ({ alignCenter: { alignItems: "center" }, headlineFont: { fontSize: e.fontSizes.headline1 }, root: { gap: e.spaces.space16 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: e.spaces.space72, height: "auto" } })),
                p = r.memo(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d97a9c6b.da91d78a.js.map
