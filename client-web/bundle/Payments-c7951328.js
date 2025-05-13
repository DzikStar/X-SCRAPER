"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            var a = n(202784),
                r = n(107267),
                c = n(992942),
                s = n(529356),
                o = n(674132),
                l = n.n(o),
                i = n(198433),
                m = n(736063),
                u = n(514639),
                d = n(445664);
            const p = l().j24c37b2,
                y = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: n } = (0, d.Z)({ fetchKey: "Payments" }),
                        o = a.useCallback(() => {
                            t.replace(n ? u.gp : "/");
                        }, [t, n]),
                        l = a.useCallback(({ style: e }) => a.createElement(c.Z, { "aria-label": "", source: i, style: e }), []);
                    return a.createElement(s.Z, { actionLabel: p, enableMaskForDismiss: !0, graphic: l, graphicDisplayMode: "illustration", headline: "Your account is under review", isFullHeightOnMobile: !0, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: u.N6 });
                },
                h = { context: "PAYMENTS_REVIEW" },
                g = (e) => a.createElement(m.H, { errorConfig: h }, a.createElement(y, e)),
                f = a.memo(g);
        },
        923509: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            n(136728);
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(782642),
                o = n(514639),
                l = n(725516),
                i = n(160144);
            const m = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, l.z)(),
                        c = (0, s.p)();
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [n]);
                    const m = a.useCallback(
                        (e) => {
                            const { message: n } = e.data;
                            switch (n) {
                                case i.T.success:
                                    t.replace(o.iE.securityPrivacy), c({ text: "You PIN has been successfuly changed." });
                                    break;
                                case i.T.forgotPin:
                                    t.push(o.jR, { challengeInitiator: o.kW.forgotPin });
                            }
                        },
                        [t, c],
                    );
                    return a.createElement(i.Z, { eventCallback: m, linkType: o.P_.updatePin });
                },
                u = { context: "UpdatePin" };
            function d(e) {
                return a.createElement(c.H, { errorConfig: u }, a.createElement(m, e));
            }
            const p = a.memo(d);
        },
        162827: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                r = n(805322);
            const c = (e) => a.createElement(r.Z, e),
                s = a.memo(c);
        },
        516813: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(514639),
                o = n(725516),
                l = n(160144);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, o.z)(),
                        c = (0, r.useParams)(),
                        i = s.Kc[c.tier ?? s.Kc.tier2],
                        m = t.location?.state,
                        u = m?.redirectPath,
                        d = m?.closePath,
                        p = m?.redirectState,
                        y = m?.requestedField,
                        h = m?.challengeId,
                        g = m?.challengeInitiator,
                        { linkType: f } = s.AU[i];
                    return (
                        a.useEffect(() => {
                            n && i && n.scribe({ page: "money", section: "verify-identity", component: i, action: "impression" });
                        }, [n, i]),
                        a.createElement(l.Z, { additionalParams: y ? [{ key: "requestedField", value: y }] : void 0, challengeId: h, challengeInitiator: g, closePath: d, linkType: f, redirectPath: u, redirectState: p })
                    );
                },
                m = { context: "VerifyIdentity" };
            function u(e) {
                return a.createElement(c.H, { errorConfig: m }, a.createElement(i, e));
            }
            const d = a.memo(u);
        },
        891053: (e, t, n) => {
            n.r(t), n.d(t, { default: () => w });
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(725516),
                o = (n(136728), n(325686)),
                l = n(731708),
                i = n(154003),
                m = n(167630),
                u = n(980407),
                d = n(782642),
                p = n(514639),
                y = n(43429),
                h = n(743080),
                g = n(388768),
                f = (n(585488), n(351743)),
                E = n.n(f);
            const k = g.Z,
                I = () => {
                    const [e, t] = E()(k);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.create_item_update_session?.linking_token?.token,
                                                c = e?.create_item_update_session?.provider;
                                            r ? n({ token: r, provider: c }) : a(t);
                                        },
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                b = () => {
                    const e = (0, s.z)(),
                        t = (0, d.p)(),
                        n = (0, r.useHistory)(),
                        c = (0, h.jh)(),
                        g = n.location?.state?.redirectPath,
                        f = n.location?.state?.paymentMethodId,
                        [E, k] = I(),
                        b = a.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                f &&
                                    E({ paymentMethodId: f })
                                        .then(({ provider: t, token: a }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const r = { token: a, provider: t, linkType: p.P_.verifyPaymentMethod, redirectPath: g, paymentMethodId: f };
                                            n.push(p.MW, r);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, E, n, f, g]),
                        P = a.useCallback(() => {
                            n.push(g ?? p.gp);
                        }, [n, g]),
                        Z = a.createElement(o.Z, { style: c.footer }, a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(l.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(i.ZP, { disabled: k, onPress: b, size: "large", type: "primaryFilled" }, k ? a.createElement(m.Z, null) : "Continue"));
                    return a.createElement(u.Z, { backButtonType: "close", bottomBar: Z, history: n, onBackClick: P, withoutBottomBarMobile: !0 }, a.createElement(o.Z, { style: c.container }, a.createElement(l.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), a.createElement(l.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                P = a.memo(b),
                Z = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.z)(),
                        c = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "verify-payment-method", component: c, action: "impression" });
                        }, [n, c]),
                        a.createElement(P, null)
                    );
                },
                v = { context: "VerifyPaymentMethod" };
            function x(e) {
                return a.createElement(c.H, { errorConfig: v }, a.createElement(Z, e));
            }
            const w = a.memo(x);
        },
        777530: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(807896),
                r = n(202784),
                c = n(325686),
                s = n(952428),
                o = n(823161),
                l = n(470397),
                i = n(731708),
                m = n(366635),
                u = n(868634),
                d = n(154003),
                p = n(392237),
                y = n(293723),
                h = n(607127),
                g = n(487552),
                f = n(43429),
                E = n(477922),
                k = n(674132),
                I = n.n(k),
                b = n(727384);
            const P = ({ fees: e }) => {
                    const t = e.percentage_micro,
                        n = e.fixed_minimum_amount?.local_micro,
                        a = t ? (0, b.dN)({ amount: t, formatter: 1e5 }) : null,
                        c = n && "0" !== n ? (0, b.vw)({ amount: n, currency: e.fixed_minimum_amount?.currency }) : null,
                        s = r.useMemo(() => ({ percent: a, fixedFee: c }), [c, a]);
                    return r.createElement(i.ZP, { color: "gray700" }, a && c ? r.createElement(I().I18NFormatMessage, { $i18n: "bd9265e3" }, s.percent, s.fixedFee) : "(Free)");
                },
                Z = r.memo(P),
                v = "Remove linked account",
                x = ({ account: e, handleRemove: t, isDisabled: n, isSelected: p, onClick: k, withChevron: I, withInteractiveStyling: b }) => {
                    const P = e.id,
                        x = e.config,
                        { Icon: C, fees: S, settleTimeMessage: z } = x ?? {},
                        _ = !n && (b ?? !!k),
                        A = r.useCallback(() => {
                            P && !n && k?.(P);
                        }, [P, k, n]),
                        N = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), t?.();
                            },
                            [t],
                        );
                    return r.createElement(s.Z, { onClick: _ ? A : void 0, withInteractiveStyling: _ }, r.createElement(c.Z, { style: w.account }, e.type === f.dX.x ? r.createElement(o.default, (0, a.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(E.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(c.Z, { style: w.accountName }, r.createElement(l.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== f.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === f.dX.x ? r.createElement(m.Z, e.accountName) : x ? r.createElement(c.Z, { style: w.row }, r.createElement(i.ZP, { color: "gray700" }, C ? r.createElement(C, { style: w.icon }) : null, z), S ? r.createElement(Z, { fees: S }) : null) : e.type === f.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === f.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(u.ZP, { style: w.decoration, type: "warning" }, e.label) : null, p ? r.createElement(y.default, { style: [w.decoration, w.selected] }) : null, t ? r.createElement(d.ZP, { "aria-label": v, hoverLabel: { label: v }, icon: r.createElement(h.default, null), onClick: N, size: "small", style: w.decoration, testID: "btn-remove", type: "destructiveText" }) : null, I ? r.createElement(g.default, { style: w.decoration }) : null));
                },
                w = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center" } })),
                C = r.memo(x);
        },
        803263: (e, t, n) => {
            n.d(t, { Z: () => M });
            var a = n(932525),
                r = n(202784),
                c = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                l = n(731708),
                i = n(165822),
                m = n(965245),
                u = n(137882),
                d = n(743080),
                p = n(882956),
                y = n(952428),
                h = n(909377),
                g = n(154003),
                f = n(211971),
                E = n(711223),
                k = n(642317),
                I = n(80361),
                b = n(976352),
                P = n(988291),
                Z = n(829464),
                v = n(727828),
                x = n(514639);
            const w = "Verify",
                C = p.Z,
                S = Object.freeze({ [P.S.Alert]: "danger", [P.S.Info]: "primary", [P.S.Warning]: "warning" }),
                z = Object.freeze({ [P.S.Alert]: f.default, [P.S.Info]: E.default, [P.S.Warning]: f.default }),
                _ = ({ itemRef: e, supportLink: t }) => {
                    const n = o()(C, e),
                        a = n.topics?.includes(Z.h.Premium),
                        s = n.topics?.includes(Z.h.Interest),
                        i = n.level === P.S.Info,
                        m = (({ action: e, supportLink: t, url: n }) => {
                            switch (e) {
                                case b.C.ContactSupport:
                                    return { label: "Contact support", link: n ?? t };
                                case b.C.LearnMore:
                                    return { label: "Learn More", link: n ?? x.N6 };
                                case b.C.KycVerification:
                                    return { label: w, link: { pathname: x.AU.tier2.verifyIdentityPath, state: { closePath: x.gp } } };
                                case b.C.KycDocumentUpload:
                                    return { label: w, link: { pathname: x.AU.tier3.verifyIdentityPath, state: { closePath: x.gp } } };
                                case b.C.SelfieVerification:
                                    return { label: w, link: { pathname: x.AU.selfie.verifyIdentityPath, state: { closePath: x.gp } } };
                                case b.C.Deposit:
                                    return { label: "Add money", link: x.IN };
                                case b.C.SetupPasskey:
                                    return { label: "Setup", link: "https://x.com/i/flow/passkey_registration" };
                                default:
                                    return;
                            }
                        })({ action: n.call_to_action, supportLink: t, url: n.call_to_action_url }),
                        u = (i ? (a ? "primary" : s ? "success" : void 0) : void 0) ?? S[n.level],
                        p = a ? k.default : s ? I.default : z[n.level];
                    return r.createElement(y.Z, { key: n.title, style: d.dE.listItem, withInteractiveStyling: !1 }, r.createElement(h.Z, { Icon: p, color: u, size: "xLarge" }), r.createElement(c.Z, { style: d.dE.listItemFlex }, r.createElement(c.Z, { style: d.dE.listItemContent }, r.createElement(c.Z, { style: d.dE.listItemFlex }, r.createElement(l.ZP, null, n.title), r.createElement(l.ZP, { color: "gray700" }, n.subtitle)), a ? r.createElement(v.Z, { variant: "MoneyInterest" }) : m ? r.createElement(g.ZP, { link: m.link, size: "small", type: "secondaryFilled" }, m.label) : null)));
                },
                A = r.memo(_);
            var N = n(519901);
            const T = a.Z,
                D = "Action needed",
                L = ({ __id: e }) => e,
                R = ({ data: e, fetchNext: t, type: n }) => {
                    const a = (0, d.jh)(),
                        s = (({ supportLink: e, type: t }) => r.useCallback((n) => ("transaction" === t && "XPaymentsTransaction" === n.__typename ? r.createElement(N.Z, { itemRef: n, key: n.__id }) : "notice" === t && "XPaymentsCustomerNotice" === n.__typename ? r.createElement(A, { itemRef: n, key: n.__id, supportLink: e }) : null), [e, t]))({ supportLink: (0, u.b)({}), type: n }),
                        p = e?.get_payments_customer_actions,
                        { items: y } = o()(T, p) ?? { items: [] },
                        h = r.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: L, items: y, onNearEnd: t, renderer: s, role: "list", withoutHeadroom: !0 });
                    return y.length > 0 ? r.createElement(c.Z, null, "transaction" === n ? r.createElement(c.Z, { style: d.ZP.header }, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, D)) : null, r.createElement(i.Z, { "aria-label": D, containerStyle: a.tile, stackLayoutUpperStyle: d.ZP.upper, upper: h, withInteractiveStyling: !1 })) : null;
                },
                M = r.memo(R);
        },
        634455: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                c = n(731708),
                s = n(392237),
                o = n(43429),
                l = n(727384);
            function i({ amount: e, type: t = o.NU.balance, shouldCenterAlign: n = !1, currency: s, size: i = "title1", weight: m = "bold", hasCompleted: d = !1 }) {
                const p = parseFloat(e),
                    y = a.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, type: n }) => {
                                const a = e < 0;
                                switch (n) {
                                    case o.NU.credit:
                                    case o.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return a ? "red500" : "text";
                                }
                            })({ type: t, amount: p, hasCompleted: d }),
                        [t, p, d],
                    ),
                    h = a.useMemo(() => ((e) => (e === o.NU.credit ? "+" : ""))(t), [t]),
                    g = a.useMemo(() => (0, l.vw)({ amount: e, currency: s }), [e, s]);
                return a.createElement(r.Z, { style: n ? u.alignCenter : void 0 }, a.createElement(c.ZP, { color: y, size: i, weight: m }, `${h}${g}`));
            }
            const m = a.memo(i),
                u = s.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(807896),
                r = n(202784),
                c = n(325686),
                s = n(731708),
                o = n(855488),
                l = n(392237),
                i = n(97882),
                m = n(727384);
            const u = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, i.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(c.Z, { style: h.currency }, r.createElement(s.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: n, max: c = "9999999", min: s = "0", setAmount: l, setIsValid: i, validateBalance: p, ...y }) {
                const { available_amount_local_micro: g, currency: f } = t ?? {},
                    E = parseFloat(g),
                    k = g ? (0, m.p2)({ amount: E, currency: f }) : null,
                    I = (0, m.dN)({ amount: E }),
                    b = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                n = parseFloat(s),
                                a = parseFloat(c);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= n && t <= a && (!p || t <= I);
                        },
                        [I, c, s, p],
                    ),
                    P = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (l(t), i(b(t)));
                        },
                        [l, i, b],
                    ),
                    Z = r.useCallback(
                        ({ target: e }) => {
                            P(e.value);
                        },
                        [P],
                    ),
                    v = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            P(t);
                        },
                        [P],
                    ),
                    x = !n && p && parseFloat(e) > I ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    o.Z,
                    (0, a.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: x,
                            helperText: k ? u({ amount: k }) : void 0,
                            invalid: !n,
                            max: c,
                            min: s,
                            onChange: Z,
                            onKeyPress: (e) => {
                                ("-" !== e.key && "e" !== e.key && "E" !== e.key) || e.preventDefault();
                            },
                            onPaste: v,
                            style: h.amountInput,
                            testID: "amount",
                            type: "number",
                            value: e,
                        },
                        y,
                    ),
                );
            }
            const y = r.memo(p),
                h = l.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { paddingHorizontal: "0" } }));
        },
        477922: (e, t, n) => {
            n.d(t, { G7: () => Z, KR: () => v, qn: () => w });
            var a = n(807896),
                r = n(202784),
                c = n(45843),
                s = n(325686),
                o = n(392237),
                l = n(684008),
                i = n(72591),
                m = n(297896),
                u = n(748138),
                d = n(913315),
                p = n(734767),
                y = n(286555),
                h = n(43429);
            const g = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                f = { [g.small]: { width: o.default.theme.spacesPx.space16, height: o.default.theme.spacesPx.space16 }, [g.xLarge]: { width: o.default.theme.spacesPx.space40, height: o.default.theme.spacesPx.space40 }, [g.xxxLarge]: { width: o.default.theme.spaces.space56, height: o.default.theme.spaces.space56 }, [g.xJumbo]: { width: o.default.theme.spaces.space80, height: o.default.theme.spaces.space80 } },
                E = { [g.small]: { width: o.default.theme.spacesPx.space8, height: o.default.theme.spacesPx.space8 }, [g.xLarge]: { width: o.default.theme.spacesPx.space20, height: o.default.theme.spacesPx.space20 }, [g.xxxLarge]: { width: o.default.theme.spaces.space28, height: o.default.theme.spaces.space28 }, [g.xJumbo]: { width: o.default.theme.spaces.space40, height: o.default.theme.spaces.space40 } },
                k = ({ Icon: e, size: t, uri: n }) => (n ? r.createElement(c.Z, { source: { uri: n }, style: [C.rounded, C.logo, f[t]] }) : r.createElement(s.Z, { style: [f[t], C.rounded, C.iconContainer] }, r.createElement(e, { style: [C.logo, E[t]] }))),
                I = (e) => r.createElement(k, (0, a.Z)({}, e, { Icon: l.default })),
                b = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: m.default, [h.wC.card]: l.default, [h.wC.atm]: u.default },
                P = { [h.Ms.atm]: u.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: m.default, [h.Ms.interest]: d.default, [h.Ms.cashback]: p.default },
                Z = (e) => {
                    const { type: t, ...n } = e;
                    return r.createElement(k, (0, a.Z)({}, n, { Icon: b[t] }));
                },
                v = ({ type: e, ...t }) => r.createElement(k, (0, a.Z)({}, t, { Icon: P[e] })),
                x = (e) => r.createElement(k, (0, a.Z)({}, e, { Icon: y.default })),
                w = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(x, t) : e === h.dX.card ? r.createElement(I, t) : null),
                C = o.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        575123: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                c = n(154003),
                s = n(692165),
                o = n(698891),
                l = n(514639),
                i = n(743080);
            const m = "Help Center",
                u = "Settings",
                d = { pathname: l.N6, external: !0, openInSameFrame: !1 },
                p = () => a.createElement(r.Z, { style: i.ZP.actionButtons }, a.createElement(c.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: a.createElement(s.default, null), link: d, pullRight: !0, type: "primaryText" }), a.createElement(c.ZP, { "aria-label": u, hoverLabel: { label: u }, icon: a.createElement(o.default, null), link: l.Sr, pullRight: !0, type: "primaryText" })),
                y = a.memo(p);
        },
        615954: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(470397),
                c = n(731708),
                s = n(392237),
                o = n(191796);
            const l = ({ name: e, size: t, website: n }) => a.createElement(r.Z, null, e && a.createElement(c.ZP, { size: t, style: i.merchantName, weight: "medium" }, e), n ? a.createElement(c.ZP, { link: { pathname: `https://${n}`, external: !0 }, size: t, weight: "medium" }, "Website", a.createElement(o.default, null)) : null),
                i = s.default.create((e) => ({ merchantName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(l);
        },
        86320: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(470397),
                c = n(731708);
            const s = ({ account: e, size: t, weight: n = "medium" }) => a.createElement(r.Z, null, e.accountType && a.createElement(c.ZP, { size: t, style: o.bankName, weight: n }, e.accountType), a.createElement(c.ZP, { size: t, style: o.bankName, weight: n }, e.accountName.name)),
                o = n(392237).default.create((e) => ({ bankName: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                l = a.memo(s);
        },
        671738: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                c = n(154003),
                s = n(30899),
                o = n(392237),
                l = n(379327),
                i = n(727384),
                m = n(777530);
            const u = ({ accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: s, methodConfigs: o, onSelectAccountId: u, paymentMethods: d, transferDirection: y }) => {
                    const h = a.useCallback(
                        (e) => () => {
                            u(e), s();
                        },
                        [s, u],
                    );
                    return a.createElement(
                        r.Z,
                        { style: p.popoverContent },
                        d?.map((t) => {
                            const n = (0, i.xe)({ method: t, methodConfigs: o, transferDirection: y });
                            return n && n.id ? a.createElement(m.Z, { account: n, isSelected: e === n.id, key: n.id, onClick: h(n.id) }) : null;
                        }),
                        a.createElement(c.ZP, { icon: a.createElement(l.default, null), link: t }, "Add bank account"),
                        n ? a.createElement(c.ZP, { icon: a.createElement(l.default, null), link: n }, "Add card") : null,
                    );
                },
                d = ({ accountId: e, addAccountLink: t, addBankCardLink: n, methodConfigs: r, onSelectAccountId: c, paymentMethods: o, selectedAccount: l, transferDirection: i }) => {
                    const d = a.useCallback((s) => a.createElement(u, { accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: s, methodConfigs: r, onSelectAccountId: c, paymentMethods: o, transferDirection: i }), [e, t, n, r, c, o, i]);
                    return a.createElement(s.Z, { renderContent: d, withArrow: !0 }, a.createElement(m.Z, { account: l, withChevron: !0, withInteractiveStyling: !0 }));
                },
                p = o.default.create((e) => ({ popoverContent: { margin: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, maxHeight: "280px" } })),
                y = a.memo(d);
        },
        413713: (e, t, n) => {
            n.d(t, { XE: () => d, ZP: () => h, kJ: () => p });
            var a = n(202784),
                r = n(40610),
                c = n(514639),
                s = n(727384);
            const o = "Review limits",
                l = ({ type: e }) => `This action would exceed your ${e} limits. We need to verify your identify to continue.`,
                i = ({ type: e }) => `This action would exceed your ${e} limits. Please review your limits and try again later.`,
                m = Object.freeze({
                    InsufficientFunds: { message: "Your account balance is insufficient to make this transfer. Please fund your account and then try again.", action: { link: c.IN, label: "Deposit" } },
                    InvalidReceiver: { message: "You cannot transfer to this account at this time. Please try again later." },
                    InvalidSender: { message: "You cannot request from this account at this time. Please try again later." },
                    IdempotencyKeyConflict: { message: "You might be attempting a duplicate payment. Please check before trying again!", action: { link: c.gp, label: "View account" } },
                    BankIssue: { message: "There was an issue with your bank while processing your transfer. Please try again." },
                    LoginRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: c.VN, label: "Verify" } },
                    PaymentMethodLinkRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: c.VN, label: "Verify" } },
                    InsufficientBalance: { message: "Your bank account balance is insufficient. Please check your balance and try again." },
                    TwoFactorAuthRequired: { message: "You need to setup two-factor authentication before you can proceed.", action: { link: c.z$, label: "Setup" } },
                    VolumeLimitExceeded7DaySend: { message: i({ type: "weekly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded30DaySend: { message: i({ type: "monthly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded7Day: { message: i({ type: "weekly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded30Day: { message: i({ type: "monthly" }), action: { link: c.iE.limits, label: o } },
                    AdditionalKycRequiredVolumeLimitExceeded7DaySend: { message: l({ type: "weekly" }), action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredVolumeLimitExceeded30DaySend: { message: l({ type: "monthly" }), action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredTotalVolumeLimitExceeded: { message: "This action would exceed your limits. We need to verify your identify to continue.", action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    Velocity: { message: "You have temporarily exceeded your limits. Please try again later." },
                    Default: { message: "Something went wrong. Please try again later." },
                }),
                u = ["AdditionalKycRequiredVolumeLimitExceeded7DaySend", "AdditionalKycRequiredVolumeLimitExceeded30DaySend", "AdditionalKycRequiredTotalVolumeLimitExceeded"],
                d = ({ errors: e, roles: t }) => (!!e?.find((e) => u.includes(e.error_code)) ? (0, s.FW)({ roles: t }) : null),
                p = ({ errors: e }) => {
                    const t = e.find((e) => ((e) => !!m[e])(e.error_code));
                    return m[t?.error_code ?? "Default"];
                },
                y = ({ errors: e, linkState: t, roles: n }) => {
                    const c = p({ errors: e }),
                        s = c?.action,
                        o = d({ errors: e, roles: n }) ?? s?.link,
                        l = s && o ? { ...s, link: { pathname: o, state: t } } : void 0;
                    return a.createElement(r.Z.Danger, { action: l, text: c.message, withIcon: !0 });
                },
                h = a.memo(y);
        },
        19804: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                c = n(165822),
                s = n(731708),
                o = n(58399),
                l = n(743080);
            const i = ({ Icon: e, disabled: t, link: n, onClick: i, subtitle: m, title: u }) => {
                    const d = (0, l.jh)(),
                        p = !!i || !!n;
                    return a.createElement(c.Z, { "aria-label": u, containerStyle: d.tile, disabled: t, link: n, onClick: i, stackLayoutUpperStyle: l.ZP.upper, upper: a.createElement(r.Z, { style: l.ZP.rowSpaceBetween }, a.createElement(r.Z, { style: l.ZP.row }, e ? a.createElement(e, { style: l.ZP.icon }) : null, a.createElement(r.Z, null, a.createElement(s.ZP, null, u), m ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, m) : null)), p ? a.createElement(o.default, { style: l.ZP.centeredIcon }) : null), withInteractiveStyling: p });
                },
                m = a.memo(i);
        },
        89319: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(247056),
                c = n(149170),
                s = n(774426),
                o = n(736063),
                l = n(725516),
                i = n(137882),
                m = n(692165);
            const u = ({ link: e, scribeAction: t, transactionId: n }) => ({
                text: "Get support",
                onClick: () => {
                    t({ element: "get-support", action: "click" });
                },
                Icon: m.default,
                link: e,
            });
            var d = n(415506);
            const p = ({ link: e, scribeAction: t, transactionId: n }) => ({
                    Icon: d.default,
                    text: "Report payment",
                    onClick: () => {
                        t({ element: "report-payment", action: "click" });
                    },
                    link: e,
                }),
                y = { context: "PaymentsActionMenu" },
                h = ({ onOpen: e, reportedHandle: t, transactionId: n }) => {
                    const o = (0, l.z)(),
                        m = (0, i.b)({ txId: n }),
                        d = (0, i.v)({ txId: n, reportedHandle: t }),
                        y = a.useCallback(
                            ({ action: e, element: t }) => {
                                o.scribe({ element: t, action: e });
                            },
                            [o],
                        ),
                        h = a.useMemo(() => [p({ transactionId: n, scribeAction: y, link: d }), u({ transactionId: n, scribeAction: y, link: m })], [d, y, m, n]),
                        g = a.useCallback((e) => a.createElement(s.default, { actionItems: h, onClose: e }), [h]);
                    return a.createElement(r.Z, { Icon: c.default, onClick: e, renderActionMenu: g, testID: "transaction-action-menu" });
                };
            function g(e) {
                return a.createElement(o.H, { errorConfig: y }, a.createElement(h, e));
            }
            const f = a.memo(g);
        },
        448518: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(202784),
                r = n(727384),
                c = (n(136728), n(107267)),
                s = n(154003),
                o = n(167630),
                l = n(436117),
                i = n(736063),
                m = n(782642),
                u = n(514639),
                d = n(445664),
                p = n(725516),
                y = n(607929),
                h = n(413713);
            const g = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: i, size: g, transactionId: f, type: E }) => {
                    const [k, I] = (0, y.bf)(),
                        { permissions: b, roles: P } = (0, d.Z)({ fetchKey: "Payments" }),
                        Z = (0, r.Fs)({ permissions: b, permission: l.d.ClaimTransfer }),
                        v = (0, p.z)(),
                        x = (0, c.useHistory)(),
                        w = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    k({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && i ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: i }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? x.push(l, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: n }) : (o && w({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: P });
                                            t ? x.replace(t, { redirectPath: `${u.bR}/${f}`, closePath: u.gp }) : w({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [w, e, v, k, x, t, n, P, i, f],
                        ),
                        S = I || !Z;
                    return a.createElement(s.ZP, { disabled: S, onPress: C, size: g ?? "medium", type: E }, I ? a.createElement(o.Z, { size: "small" }) : "Accept");
                },
                f = { context: "PaymentsAcceptTransfer" };
            function E(e) {
                return a.createElement(i.H, { errorConfig: f }, a.createElement(g, e));
            }
            const k = a.memo(E);
            var I = n(202241);
            const b = ({ amount: e, onSuccess: t, recordId: n, size: i, transactionId: y, type: g }) => {
                    const [f, E] = (0, I.yA)(),
                        { permissions: k, roles: b } = (0, d.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: k, permission: l.d.ConfirmUnrecognizedPayment }),
                        Z = (0, p.z)(),
                        v = (0, c.useHistory)(),
                        x = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    f({ transactionId: y, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? v.push(l, { challengeId: a, challengeInitiator: u.kW.confirmUnrecognisedPayment, successMessage: o, recordId: n }) : (o && x({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: b });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${y}`, closePath: u.gp }) : x({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, f, y, n, e, t, x, b, v],
                        ),
                        C = E || !P;
                    return a.createElement(s.ZP, { disabled: C, onPress: w, size: i ?? "medium", type: g }, E ? a.createElement(o.Z, { size: "small" }) : "Approve");
                },
                P = { context: "PaymentsPayRequest" };
            function Z(e) {
                return a.createElement(i.H, { errorConfig: P }, a.createElement(b, e));
            }
            const v = a.memo(Z);
            var x = n(604347);
            const w = ({ amount: e, onSuccess: t, recordId: n, size: i, transactionId: y, userScreenName: g }) => {
                    const [f, E] = (0, x.Z)(),
                        { permissions: k, roles: I } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: l.d.CancelRequestTransfer }),
                        P = (0, p.z)(),
                        Z = (0, c.useHistory)(),
                        v = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    f({ transactionId: y, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? Z.push(l, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: I });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${y}`, closePath: u.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, y, n, e, g, t, v, I, Z],
                        ),
                        C = E || !b;
                    return a.createElement(s.ZP, { disabled: C, onPress: w, size: i ?? "medium", type: "primaryOutlined" }, E ? a.createElement(o.Z, { size: "small" }) : "Cancel request");
                },
                C = { context: "PaymentsCancelRequest" };
            function S(e) {
                return a.createElement(i.H, { errorConfig: C }, a.createElement(w, e));
            }
            const z = a.memo(S);
            var _ = n(500386);
            const A = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: i, size: y, transactionId: g }) => {
                    const [f, E] = (0, _.Z)(),
                        { permissions: k, roles: I } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: l.d.CancelTransfer }),
                        P = (0, p.z)(),
                        Z = (0, c.useHistory)(),
                        v = (0, m.p)(),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    f({ transactionId: g, recordId: i })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? Z.push(l, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: i }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: I });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${g}`, closePath: u.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, e, P, f, Z, t, i, I, n, g],
                        ),
                        w = E || !b;
                    return a.createElement(s.ZP, { disabled: w, onPress: x, size: y ?? "medium", type: "primaryOutlined" }, E ? a.createElement(o.Z, { size: "small" }) : "Cancel transaction");
                },
                N = { context: "PaymentsCancelTransfer" };
            function T(e) {
                return a.createElement(i.H, { errorConfig: N }, a.createElement(A, e));
            }
            const D = a.memo(T);
            var L = n(891414);
            const R = ({ amount: e, onSuccess: t, recordId: n, size: i, transactionId: y, userScreenName: g }) => {
                    const [f, E] = (0, L.C7)(),
                        { permissions: k, roles: I } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: l.d.RespondToRequestTransfer }),
                        P = (0, p.z)(),
                        Z = (0, c.useHistory)(),
                        v = (0, m.p)(),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    f({ transactionId: y, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? Z.push(l, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: I });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${y}`, closePath: u.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, y, n, e, g, t, v, I, Z],
                        ),
                        w = E || !b;
                    return a.createElement(s.ZP, { disabled: w, onPress: x, size: i ?? "medium", type: "primaryOutlined" }, E ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                M = { context: "PaymentsDeclineRequest" };
            function F(e) {
                return a.createElement(i.H, { errorConfig: M }, a.createElement(R, e));
            }
            const $ = a.memo(F),
                V = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: i, size: g, transactionId: f }) => {
                    const [E, k] = (0, y.C7)(),
                        I = (0, p.z)(),
                        b = (0, c.useHistory)(),
                        P = (0, m.p)(),
                        { permissions: Z, roles: v } = (0, d.Z)({ fetchKey: "Payments" }),
                        x = (0, r.Fs)({ permissions: Z, permission: l.d.ClaimTransfer }),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    I.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    E({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && i ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: i }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? b.push(l, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && P({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: v });
                                            t ? b.replace(t, { redirectPath: `${u.bR}/${f}`, closePath: u.gp }) : P({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, e, I, E, b, t, n, v, i, f],
                        ),
                        C = k || !x;
                    return a.createElement(s.ZP, { disabled: C, onPress: w, size: g ?? "medium", type: "primaryOutlined" }, k ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                H = { context: "PaymentsDeclineTransfer" };
            function q(e) {
                return a.createElement(i.H, { errorConfig: H }, a.createElement(V, e));
            }
            const K = a.memo(q),
                U = ({ amount: e, onSuccess: t, recordId: n, size: i, transactionId: y, type: g, userScreenName: f }) => {
                    const [E, k] = (0, L.iP)(),
                        { permissions: I, roles: b } = (0, d.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: I, permission: l.d.RespondToRequestTransfer }),
                        Z = (0, p.z)(),
                        v = (0, c.useHistory)(),
                        x = (0, m.p)(),
                        w = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "review-request", element: "pay", action: "click" }),
                                    E({ transactionId: y, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && f ? (({ formattedAmount: e, userScreenName: t }) => `You sent ${e} to @${t}.`)({ formattedAmount: e, userScreenName: f }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? v.push(l, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && x({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: b });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${y}`, closePath: u.gp }) : x({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, E, y, n, e, f, t, x, b, v],
                        ),
                        C = k || !P;
                    return a.createElement(s.ZP, { disabled: C, onPress: w, size: i ?? "medium", type: g }, k ? a.createElement(o.Z, { size: "small" }) : "Pay");
                },
                W = { context: "PaymentsPayRequest" };
            function Y(e) {
                return a.createElement(i.H, { errorConfig: W }, a.createElement(U, e));
            }
            const B = a.memo(Y),
                X = ({ amount: e, onSuccess: t, recordId: n, size: i, transactionId: y }) => {
                    const [g, f] = (0, I.F8)(),
                        { permissions: E, roles: k } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: E, permission: l.d.ConfirmUnrecognizedPayment }),
                        P = (0, p.z)(),
                        Z = (0, c.useHistory)(),
                        v = (0, m.p)(),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    g({ transactionId: y, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null,
                                                l = (0, r.wu)({ status: c, challengeId: a });
                                            l ? Z.push(l, { challengeId: a, challengeInitiator: u.kW.confirmUnrecognisedPayment, successMessage: o, recordId: n }) : (o && v({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: k });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${y}`, closePath: u.gp }) : v({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, g, y, n, e, t, v, k, Z],
                        ),
                        w = f || !b;
                    return a.createElement(s.ZP, { disabled: w, onPress: x, size: i ?? "medium", type: "destructiveFilled" }, f ? a.createElement(o.Z, { size: "small" }) : "I did not make this purchase");
                },
                O = { context: "PaymentsRejectPayment" };
            function j(e) {
                return a.createElement(i.H, { errorConfig: O }, a.createElement(X, e));
            }
            const J = a.memo(j),
                G = ({ size: e, transactionId: t, type: n }) => {
                    const { permissions: c } = (0, d.Z)({ fetchKey: "Payments" }),
                        o = !(0, r.Fs)({ permissions: c, permission: l.d.ConfirmUnrecognizedPayment });
                    return a.createElement(s.ZP, { disabled: o, link: o ? void 0 : `${u.bR}/${t}`, size: e ?? "medium", type: n }, "Review");
                },
                Q = { context: "PaymentsReviewButton" };
            function ee(e) {
                return a.createElement(i.H, { errorConfig: Q }, a.createElement(G, e));
            }
            const te = a.memo(ee);
            function ne({ amount: e, challengeId: t, currency: n, isViewerSender: c, onSuccess: s, receiverScreenName: o, recordId: l, senderScreenName: i, status: m, transactionId: u, transactionType: d, withPrimaryOnly: p }) {
                const y = e ? (0, r.vw)({ amount: e, currency: n }) : null,
                    h = (0, r.BR)({ status: m, transactionType: d, isViewerSender: c }),
                    g = (0, r.Tp)({ status: m, transactionType: d, isViewerSender: c }),
                    f = (0, r.UM)({ status: m, transactionType: d, isViewerSender: c }),
                    E = (0, r.T3)({ status: m, transactionType: d, isViewerSender: c }),
                    I = (0, r.BC)({ status: m }),
                    b = a.useMemo(() => (g ? a.createElement(D, { amount: y, key: "CancelTransfer", onSuccess: s, receiverScreenName: o, recordId: l, transactionId: u }) : null), [g, y, s, o, l, u]),
                    P = a.useMemo(() => (E ? a.createElement(z, { amount: y, key: "CancelRequest", recordId: l, transactionId: u, userScreenName: i }) : null), [E, y, l, i, u]),
                    Z = a.useMemo(() => (f ? a.createElement(B, { amount: y, key: "PayRequest", onSuccess: s, recordId: l, size: p ? "small" : "medium", transactionId: u, type: p ? "secondaryFilled" : "primaryFilled", userScreenName: o }) : null), [f, y, s, o, l, u, p]),
                    x = a.useMemo(() => (f ? a.createElement($, { amount: y, key: "DeclineRequest", recordId: l, transactionId: u, userScreenName: o }) : null), [f, y, o, l, u]),
                    w = a.useMemo(() => (h ? a.createElement(k, { amount: y, key: "AcceptTransfer", onSuccess: s, recordId: l, senderScreenName: i, size: p ? "small" : "medium", transactionId: u, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [h, y, s, l, i, u, p]),
                    C = a.useMemo(() => (h ? a.createElement(K, { amount: y, key: "DeclineTransfer", recordId: l, senderScreenName: i, transactionId: u }) : null), [h, y, l, i, u]),
                    S = a.useMemo(() => (I ? a.createElement(v, { amount: y, key: "ApprovePayment", onSuccess: s, recordId: l, size: p ? "small" : "medium", transactionId: u, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [I, y, s, l, u, p]),
                    _ = a.useMemo(() => (I ? a.createElement(J, { amount: y, key: "RejectPayment", onSuccess: s, recordId: l, transactionId: u }) : null), [I, y, s, l, u]),
                    A = a.useMemo(() => (I ? a.createElement(te, { key: "ReviewPayment", size: p ? "small" : "medium", transactionId: u, type: p ? "secondaryFilled" : "primaryFilled" }) : null), [I, u, p]),
                    N = a.useMemo(() => [...(p ? [Z, w, A] : [b, P, Z, x, w, C, _, S])], [w, S, P, b, x, C, Z, _, A, p]);
                return a.createElement(a.Fragment, null, N);
            }
            const ae = a.memo(ne);
        },
        519901: (e, t, n) => {
            n.d(t, { Z: () => S });
            var a = n(515207),
                r = n(202784),
                c = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                l = n(952428),
                i = n(823161),
                m = n(731708),
                u = n(966886),
                d = n(880428),
                p = n(357818),
                y = n(514639),
                h = n(412876),
                g = n(553660),
                f = n(467734),
                E = n(743080),
                k = n(727384),
                I = n(634455),
                b = n(477922),
                P = n(615954),
                Z = n(86320),
                v = n(448518),
                x = n(972758);
            const w = a.Z,
                C = ({ itemRef: e }) => {
                    const t = o()(w, e),
                        { __id: n, amount_local_micro: a, challenge_id: s, created_at: C, currency: S, description: z, details: _, id: A, product_code: N, reason_code: T, transaction_status: D, transaction_type: L } = t,
                        R = N === d.x.Interest,
                        M = _.receiver_results?.result,
                        F = _.sender_results?.result,
                        $ = _.payment_method,
                        V = _.merchant_details,
                        H = (0, f.Z)({ senderId: F?.rest_id }),
                        q = (0, k.GU)({ transactionType: L, isViewerSender: H, productCode: N }),
                        K = R || "User" !== M?.__typename || "User" !== F?.__typename ? null : H ? M : F,
                        U = (0, k.zK)({ transactionType: L, productCode: N, merchantDetails: V, amountType: q }),
                        W = L === p.x.Deposit || L === p.x.Withdraw ? (0, k.Ou)($) : null,
                        Y = (0, k.lD)({ status: D, reasonCode: T, isViewerSender: H }),
                        B = (0, k.qK)({ transactionType: L, description: z, productCode: N, accountName: W ? (W.accountType ? `${W.accountType} ${W.accountName.name}` : `${W.accountName.name}`) : "", createdAt: C, statusLabel: Y }),
                        X = (0, k._T)({ status: D }),
                        O = (0, k.Gl)({ status: D }),
                        j = F?.legacy?.screen_name,
                        J = M?.legacy?.screen_name,
                        G = (0, k.DK)({ isViewerSender: H, status: D, transactionType: L }),
                        Q = (0, k.pQ)({ productCode: N, transactionType: L, account: W });
                    return r.createElement(l.Z, { key: A, link: `${y.bR}/${A}`, style: E.dE.listItem }, Q ? r.createElement(b.KR, { size: "xLarge", type: Q.iconType, uri: Q.uri }) : K ? r.createElement(h.Z, { size: "xLarge", user: K }) : U ? r.createElement(b.G7, { size: "xLarge", type: U.type, uri: U.logo }) : r.createElement(i.default, { size: "xLarge" }), r.createElement(c.Z, { style: E.dE.listItemFlex, testID: `transaction-item-${A}` }, r.createElement(c.Z, { style: E.dE.listItemContent }, r.createElement(c.Z, { style: E.dE.listItemFlex }, Q ? r.createElement(x.Z, { title: Q.title }) : K ? r.createElement(g.Z, { user: K, weight: "medium" }) : U ? r.createElement(P.Z, { name: U.name, website: U.website }) : W ? r.createElement(Z.Z, { account: W }) : r.createElement(m.ZP, null, "This account is unavailable"), G && a ? r.createElement(m.ZP, { color: "gray700" }, (0, k.lw)({ status: D, description: z, amount: a, currency: S })) : O ? r.createElement(m.ZP, { color: "gray700" }, Y) : B ? r.createElement(m.ZP, { color: "gray700" }, B) : null), G ? r.createElement(v.Z, { amount: a, challengeId: s, currency: S, isViewerSender: H, receiverScreenName: J, recordId: n, senderScreenName: j, status: D, transactionId: A, transactionType: L, withPrimaryOnly: !0 }) : r.createElement(c.Z, { style: E.dE.alignEnd }, r.createElement(I.Z, { amount: a, currency: S, hasCompleted: X, size: "body", type: q, weight: "normal" }), r.createElement(u.Z, { style: E.dE.alignEnd, timestamp: parseInt(C, 10) })))));
                },
                S = r.memo(C);
        },
        655750: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                c = n(731708);
            function s({ color: e, description: t, title: n }) {
                return t ? a.createElement(r.Z, { style: o.root }, a.createElement(c.ZP, { color: e }, t), a.createElement(c.ZP, { color: "gray700", size: "subtext2" }, n)) : null;
            }
            const o = n(392237).default.create((e) => ({ root: { paddingVertical: e.spaces.space4, gap: e.spaces.space4 } })),
                l = a.memo(s);
        },
        578719: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(860648),
                r = n(202784),
                c = (n(585488), n(277660)),
                s = n.n(c),
                o = n(731708),
                l = n(392237),
                i = n(965245),
                m = n(519901);
            const u = a.Z,
                d = ({ id: e }) => e,
                p = ({ emptyStateDescription: e, fetchNext: t, slice: n }) => {
                    const { items: a } = s()(u, n),
                        c = r.useCallback((e) => r.createElement(m.Z, { itemRef: e, key: e.id }), []);
                    return a && a.length ? r.createElement(i.Z, { assumedItemHeight: 64, cacheKey: "transactionsList", footer: null, identityFunction: d, items: a, onNearEnd: t, renderer: c, role: "list", withoutHeadroom: !0 }) : r.createElement(o.ZP, { align: "center", color: "gray700", size: "body", style: y.emptyState }, e);
                },
                y = l.default.create((e) => ({ emptyState: { marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space32 } })),
                h = r.memo(p);
        },
        48646: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                c = n(731708),
                s = n(392237);
            function o({ color: e, note: t, shouldCenterAlign: n = !1, size: s = "body", weight: o }) {
                return t ? a.createElement(r.Z, { style: n && i.alignCenter }, a.createElement(c.ZP, { color: e, size: s, weight: o }, `For "${t}"`)) : null;
            }
            const l = a.memo(o),
                i = s.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
        },
        847211: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                c = n(743080),
                s = n(477922),
                o = n(731708);
            const l = ({ account: e, size: t, weight: n }) => a.createElement(o.ZP, { size: t, style: i.name, weight: n }, e.issuedCardAccountName),
                i = n(392237).default.create((e) => ({ name: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                m = a.memo(l);
            var u = n(86320);
            function d({ account: e, isIssued: t, testId: n }) {
                return a.createElement(r.Z, { style: c.YP.description, testID: n }, e ? (t ? a.createElement(a.Fragment, null, a.createElement(s.qn, { size: "small", type: e.type, uri: e?.avatar?.uri }), a.createElement(m, { account: e, weight: "normal" })) : a.createElement(u.Z, { account: e, weight: "normal" })) : null);
            }
            const p = a.memo(d);
        },
        972758: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(731708);
            const c = ({ size: e, title: t }) => a.createElement(r.ZP, { size: e, style: s.title, weight: "medium" }, t),
                s = n(392237).default.create((e) => ({ title: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(c);
        },
        749286: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(771469),
                r = n(202784),
                c = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                l = n(392237),
                i = n(412876),
                m = n(553660);
            const u = a.Z,
                d = ({ avatarWithLink: e, user: t, usernameWithLink: n, withCenterAlign: a }) => {
                    const s = o()(u, t);
                    return r.createElement(c.Z, { style: [p.root, a ? p.alignCenter : null] }, r.createElement(i.Z, { size: "custom", style: p.userAvatar, user: s, withLink: e }), r.createElement(m.Z, { style: a && p.alignCenter, user: s, withLink: e, withStackedLayout: a }));
                },
                p = l.default.create((e) => ({ alignCenter: { alignItems: "center" }, root: { gap: e.spaces.space8 }, marginTop: { marginTop: e.spaces.space16 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                y = r.memo(d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.41ca8b3a.js.map
