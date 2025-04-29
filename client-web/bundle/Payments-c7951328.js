"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, a) => {
            a.r(t), a.d(t, { default: () => f });
            var n = a(202784),
                r = a(107267),
                c = a(992942),
                l = a(529356),
                o = a(674132),
                s = a.n(o),
                i = a(198433),
                u = a(736063),
                d = a(514639),
                m = a(445664);
            const p = s().j24c37b2,
                h = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: a } = (0, m.Z)({ fetchKey: "Payments" }),
                        o = n.useCallback(() => {
                            t.replace(a ? d.gp : "/");
                        }, [t, a]),
                        s = n.useCallback(({ style: e }) => n.createElement(c.Z, { "aria-label": "", source: i, style: e }), []);
                    return n.createElement(l.Z, { actionLabel: p, enableMaskForDismiss: !0, graphic: s, graphicDisplayMode: "illustration", headline: "Your account is under review", isFullHeightOnMobile: !0, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: d.N6 });
                },
                y = { context: "PAYMENTS_REVIEW" },
                g = (e) => n.createElement(u.H, { errorConfig: y }, n.createElement(h, e)),
                f = n.memo(g);
        },
        923509: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            a(136728);
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                l = a(782642),
                o = a(514639),
                s = a(725516),
                i = a(160144);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, s.z)(),
                        c = (0, l.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const u = n.useCallback(
                        (e) => {
                            const { message: a } = e.data;
                            switch (a) {
                                case i.T.success:
                                    t.replace(o.iE.securityPrivacy), c({ text: "You PIN has been successfuly changed." });
                                    break;
                                case i.T.forgotPin:
                                    t.push(o.jR, { challengeInitiator: o.kW.forgotPin });
                            }
                        },
                        [t, c],
                    );
                    return n.createElement(i.Z, { eventCallback: u, linkType: o.P_.updatePin });
                },
                d = { context: "UpdatePin" };
            function m(e) {
                return n.createElement(c.H, { errorConfig: d }, n.createElement(u, e));
            }
            const p = n.memo(m);
        },
        162827: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x });
            a(136728);
            var n = a(202784),
                r = a(437429),
                c = a.n(r),
                l = a(107267),
                o = a(555950),
                s = a(736063),
                i = a(782642),
                u = a(514639),
                d = a(441484),
                m = a(725516),
                p = a(43429),
                h = a(193364),
                y = a(160144),
                g = a(727384);
            const f = { [u.kW.forgotPin]: "You PIN has been successfuly changed.", [u.kW.changeCardPin]: "You PIN has been successfuly changed." },
                b = { [u.kW.forgotPin]: u.P_.forgotPin, [u.kW.changeCardPin]: u.P_.changeCardPin },
                k = [u.kW.forgotPin, u.kW.changeCardPin],
                P = (e) => {
                    const t = (0, l.useHistory)(),
                        a = (0, m.z)(),
                        r = (0, i.p)(),
                        s = e.challengeInitiator,
                        P = t.location?.state,
                        { challengeId: E, challengeInitiator: v, closePath: x, message: C, recordId: Z, redirectPath: I, redirectState: w, successMessage: _ } = P ?? {},
                        [S, T] = n.useState(E),
                        M = s ?? v,
                        [N, z] = n.useState(C ?? p.q9.initiate),
                        [L, W] = n.useState(),
                        [F, H] = n.useState(!1),
                        D = c()(),
                        R = M === u.kW.auth,
                        A = (M ? b[M] : void 0) ?? u.P_.challenge,
                        U = k.includes(M),
                        q = (M ? f[M] : void 0) ?? _,
                        B = n.useCallback((e) => {
                            W(e.loginRequestId), z(p.q9.complete2fa), H(!1);
                        }, []),
                        V = n.useCallback(
                            (e) => {
                                const { authStatus: a, challengeId: n, message: c } = e.data;
                                switch (c) {
                                    case y.T.success:
                                        R && 1 === a && d.Z.updateSessionStatus(o.c.Active), Z ? (0, g.Se)(D, Z) : M === u.kW.activateCard ? (0, g.uN)(D) : (0, g.J$)(D), I ? t.replace(I, w) : t.goBack(), q && r({ text: q });
                                        break;
                                    case y.T.docvChallenge:
                                        t.replace(u.AU.tier3.verifyIdentityPath, { ...P, challengeInitiator: M });
                                        break;
                                    case y.T.kycChallenge:
                                        t.replace(u.AU.tier2.verifyIdentityPath, { ...P, challengeInitiator: M });
                                        break;
                                    case y.T.selfieChallenge:
                                        t.replace(u.AU.selfie.verifyIdentityPath, { ...P, challengeInitiator: M });
                                        break;
                                    case y.T.twoFactorChallenge:
                                        T(n), H(!0);
                                        break;
                                    case y.T.forgotPin:
                                        t.push(u.jR, { challengeInitiator: u.kW.forgotPin });
                                        break;
                                    case y.T.invalidChallenge:
                                        R && d.Z.fetchNewSession();
                                        break;
                                    case y.T.close:
                                        (0, g.qc)({ environment: D, closePath: x, challengeInitiator: M, history: t });
                                }
                            },
                            [R, Z, I, q, t, P, D, M, x, w, r],
                        );
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "verify-challenge", action: "impression" });
                    }, [a]),
                        n.useEffect(
                            () => (
                                M === u.kW.auth && d.Z.loadChallenge(),
                                () => {
                                    M === u.kW.auth && d.Z.closeChallenge();
                                }
                            ),
                            [M],
                        );
                    const j = R;
                    return n.createElement(n.Fragment, null, S && F ? n.createElement(h.Z, { challengeId: S, isNonModalScreen: j, onSuccess: B }) : null, S || U ? n.createElement(y.Z, { closePath: x, eventCallback: V, isBackgroundHidden: F, isNonModalScreen: j, linkType: A, payload: { challengeId: S, loginRequestId: L, message: N }, redirectPath: I, redirectState: w }) : null);
                },
                E = { context: "VerifyChallenge" };
            function v(e) {
                return n.createElement(s.H, { errorConfig: E }, n.createElement(P, e));
            }
            const x = n.memo(v);
        },
        516813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                l = a(514639),
                o = a(725516),
                s = a(160144);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, o.z)(),
                        c = (0, r.useParams)(),
                        i = l.Kc[c.tier ?? l.Kc.tier2],
                        u = t.location?.state,
                        d = u?.redirectPath,
                        m = u?.closePath,
                        p = u?.redirectState,
                        h = u?.requestedField,
                        y = u?.challengeId,
                        g = u?.challengeInitiator,
                        { linkType: f } = l.AU[i];
                    return (
                        n.useEffect(() => {
                            a && i && a.scribe({ page: "money", section: "verify-identity", component: i, action: "impression" });
                        }, [a, i]),
                        n.createElement(s.Z, { additionalParams: h ? [{ key: "requestedField", value: h }] : void 0, challengeId: y, challengeInitiator: g, closePath: m, linkType: f, redirectPath: d, redirectState: p })
                    );
                },
                u = { context: "VerifyIdentity" };
            function d(e) {
                return n.createElement(c.H, { errorConfig: u }, n.createElement(i, e));
            }
            const m = n.memo(d);
        },
        891053: (e, t, a) => {
            a.r(t), a.d(t, { default: () => I });
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                l = a(725516),
                o = (a(136728), a(325686)),
                s = a(731708),
                i = a(154003),
                u = a(167630),
                d = a(980407),
                m = a(782642),
                p = a(514639),
                h = a(43429),
                y = a(743080),
                g = a(388768),
                f = (a(585488), a(351743)),
                b = a.n(f);
            const k = g.Z,
                P = () => {
                    const [e, t] = b()(k);
                    return [
                        n.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.create_item_update_session?.linking_token?.token,
                                                c = e?.create_item_update_session?.provider;
                                            r ? a({ token: r, provider: c }) : n(t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                E = () => {
                    const e = (0, l.z)(),
                        t = (0, m.p)(),
                        a = (0, r.useHistory)(),
                        c = (0, y.jh)(),
                        g = a.location?.state?.redirectPath,
                        f = a.location?.state?.paymentMethodId,
                        [b, k] = P(),
                        E = n.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                f &&
                                    b({ paymentMethodId: f })
                                        .then(({ provider: t, token: n }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const r = { token: n, provider: t, linkType: p.P_.verifyPaymentMethod, redirectPath: g, paymentMethodId: f };
                                            a.push(p.MW, r);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, b, a, f, g]),
                        v = n.useCallback(() => {
                            a.push(g ?? p.gp);
                        }, [a, g]),
                        x = n.createElement(o.Z, { style: c.footer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(s.ZP, { color: "text", link: h.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(i.ZP, { disabled: k, onPress: E, size: "large", type: "primaryFilled" }, k ? n.createElement(u.Z, null) : "Continue"));
                    return n.createElement(d.Z, { backButtonType: "close", bottomBar: x, history: a, onBackClick: v, withoutBottomBarMobile: !0 }, n.createElement(o.Z, { style: c.container }, n.createElement(s.ZP, { size: "title2", style: y.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                v = n.memo(E),
                x = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, l.z)(),
                        c = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: c, action: "impression" });
                        }, [a, c]),
                        n.createElement(v, null)
                    );
                },
                C = { context: "VerifyPaymentMethod" };
            function Z(e) {
                return n.createElement(c.H, { errorConfig: C }, n.createElement(x, e));
            }
            const I = n.memo(Z);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(807896),
                r = a(202784),
                c = a(325686),
                l = a(952428),
                o = a(823161),
                s = a(731708),
                i = a(366635),
                u = a(868634),
                d = a(154003),
                m = a(392237),
                p = a(293723),
                h = a(607127),
                y = a(487552),
                g = a(43429),
                f = a(477922);
            const b = "Remove linked account",
                k = ({ account: e, handleRemove: t, isDisabled: a, isSelected: m, onClick: k, withChevron: E, withInteractiveStyling: v }) => {
                    const x = e.id,
                        C = !a && (v ?? !!k),
                        Z = r.useCallback(() => {
                            x && !a && k?.(x);
                        }, [x, k, a]),
                        I = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), t?.();
                            },
                            [t],
                        );
                    return r.createElement(l.Z, { onClick: C ? Z : void 0, withInteractiveStyling: C }, r.createElement(c.Z, { style: P.account }, e.type === g.dX.x ? r.createElement(o.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(f.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(c.Z, { style: P.accountName }, r.createElement(s.ZP, { color: "gray700" }, e.accountType ?? e.brandName), e.type === g.dX.x ? r.createElement(i.Z, e.accountName) : r.createElement(s.ZP, null, e.accountName.name)), e.label ? r.createElement(u.ZP, { style: P.decoration, type: "warning" }, e.label) : null, m ? r.createElement(p.default, { style: [P.decoration, P.selected] }) : null, t ? r.createElement(d.ZP, { "aria-label": b, hoverLabel: { label: b }, icon: r.createElement(h.default, null), onClick: I, size: "small", style: P.decoration, testID: "btn-remove", type: "destructiveText" }) : null, E ? r.createElement(y.default, { style: P.decoration }) : null));
                },
                P = m.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 } })),
                E = r.memo(k);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(932525),
                r = a(202784),
                c = a(325686),
                l = (a(585488), a(277660)),
                o = a.n(l),
                s = a(731708),
                i = a(165822),
                u = a(965245),
                d = a(137882),
                m = a(743080),
                p = a(743250),
                h = a(519901);
            const y = n.Z,
                g = "Action needed",
                f = ({ __id: e }) => e,
                b = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (0, m.jh)(),
                        l = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(h.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(p.Z, { itemRef: a, key: a.__id, supportLink: e }) : null), [e, t]))({ supportLink: (0, d.b)({}), type: a }),
                        b = e?.get_payments_customer_actions,
                        { items: k } = o()(y, b) ?? { items: [] },
                        P = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: f, items: k, onNearEnd: t, renderer: l, role: "list", withoutHeadroom: !0 });
                    return k.length > 0 ? r.createElement(c.Z, null, "transaction" === a ? r.createElement(c.Z, { style: m.ZP.header }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, g)) : null, r.createElement(i.Z, { "aria-label": g, containerStyle: n.tile, stackLayoutUpperStyle: m.ZP.upper, upper: P, withInteractiveStyling: !1 })) : null;
                },
                k = r.memo(b);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                c = a(731708),
                l = a(392237),
                o = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = o.NU.balance, shouldCenterAlign: a = !1, currency: l, size: i = "title1", weight: u = "bold", hasCompleted: m = !1 }) {
                const p = parseFloat(e),
                    h = n.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, type: a }) => {
                                const n = e < 0;
                                switch (a) {
                                    case o.NU.credit:
                                    case o.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return n ? "red500" : "text";
                                }
                            })({ type: t, amount: p, hasCompleted: m }),
                        [t, p, m],
                    ),
                    y = n.useMemo(() => ((e) => (e === o.NU.credit ? "+" : ""))(t), [t]),
                    g = n.useMemo(() => (0, s.vw)({ amount: e, currency: l }), [e, l]);
                return n.createElement(r.Z, { style: a ? d.alignCenter : void 0 }, n.createElement(c.ZP, { color: h, size: i, weight: u }, `${y}${g}`));
            }
            const u = n.memo(i),
                d = l.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(807896),
                r = a(202784),
                c = a(325686),
                l = a(731708),
                o = a(855488),
                s = a(392237),
                i = a(97882),
                u = a(727384);
            const d = ({ amount: e }) => `Your available balance: ${e}`,
                m = () => {
                    const e = (0, i.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(c.Z, { style: y.currency }, r.createElement(l.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: a, max: c = "9999999", min: l = "0", setAmount: s, setIsValid: i, validateBalance: p, ...h }) {
                const { available_amount_local_micro: g, currency: f } = t ?? {},
                    b = parseFloat(g),
                    k = g ? (0, u.p2)({ amount: b, currency: f }) : null,
                    P = (0, u.dN)({ amount: b }),
                    E = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                a = parseFloat(l),
                                n = parseFloat(c);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= a && t <= n && (!p || t <= P);
                        },
                        [P, c, l, p],
                    ),
                    v = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (s(t), i(E(t)));
                        },
                        [s, i, E],
                    ),
                    x = r.useCallback(
                        ({ target: e }) => {
                            v(e.value);
                        },
                        [v],
                    ),
                    C = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            v(t);
                        },
                        [v],
                    ),
                    Z = !a && p && parseFloat(e) > P ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    o.Z,
                    (0, n.Z)(
                        {
                            Icon: m,
                            autoFocus: !0,
                            errorText: Z,
                            helperText: k ? d({ amount: k }) : void 0,
                            invalid: !a,
                            max: c,
                            min: l,
                            onChange: x,
                            onKeyPress: (e) => {
                                ("-" !== e.key && "e" !== e.key && "E" !== e.key) || e.preventDefault();
                            },
                            onPaste: C,
                            style: y.amountInput,
                            testID: "amount",
                            type: "number",
                            value: e,
                        },
                        h,
                    ),
                );
            }
            const h = r.memo(p),
                y = s.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { paddingHorizontal: "0" } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => v, KR: () => x, qn: () => Z });
            var n = a(807896),
                r = a(202784),
                c = a(45843),
                l = a(325686),
                o = a(392237),
                s = a(684008),
                i = a(72591),
                u = a(297896),
                d = a(748138),
                m = a(913315),
                p = a(286555),
                h = a(43429);
            const y = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                g = { [y.small]: { width: o.default.theme.spacesPx.space16, height: o.default.theme.spacesPx.space16 }, [y.xLarge]: { width: o.default.theme.spacesPx.space40, height: o.default.theme.spacesPx.space40 }, [y.xxxLarge]: { width: o.default.theme.spaces.space56, height: o.default.theme.spaces.space56 }, [y.xJumbo]: { width: o.default.theme.spaces.space80, height: o.default.theme.spaces.space80 } },
                f = { [y.small]: { width: o.default.theme.spacesPx.space8, height: o.default.theme.spacesPx.space8 }, [y.xLarge]: { width: o.default.theme.spacesPx.space20, height: o.default.theme.spacesPx.space20 }, [y.xxxLarge]: { width: o.default.theme.spaces.space28, height: o.default.theme.spaces.space28 }, [y.xJumbo]: { width: o.default.theme.spaces.space40, height: o.default.theme.spaces.space40 } },
                b = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(c.Z, { source: { uri: a }, style: [I.rounded, I.logo, g[t]] }) : r.createElement(l.Z, { style: [g[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, f[t]] }))),
                k = (e) => r.createElement(b, (0, n.Z)({}, e, { Icon: s.default })),
                P = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: u.default, [h.wC.card]: s.default, [h.wC.atm]: d.default },
                E = { [h.Ms.atm]: d.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: u.default, [h.Ms.interest]: m.default },
                v = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(b, (0, n.Z)({}, a, { Icon: P[t] }));
                },
                x = ({ type: e, ...t }) => r.createElement(b, (0, n.Z)({}, t, { Icon: E[e] })),
                C = (e) => r.createElement(b, (0, n.Z)({}, e, { Icon: p.default })),
                Z = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(C, t) : e === h.dX.card ? r.createElement(k, t) : null),
                I = o.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.94805c0a.js.map
