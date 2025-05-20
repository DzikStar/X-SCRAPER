"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            var n = a(202784),
                r = a(107267),
                l = a(992942),
                c = a(529356),
                o = a(332920),
                s = a.n(o),
                i = a(198433),
                u = a(736063),
                m = a(514639),
                d = a(445664);
            const p = s().j24c37b2,
                y = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: a } = (0, d.Z)({ fetchKey: "Payments" }),
                        o = n.useCallback(() => {
                            t.replace(a ? m.gp : "/");
                        }, [t, a]),
                        s = n.useCallback(({ style: e }) => n.createElement(l.Z, { "aria-label": "", source: i, style: e }), []);
                    return n.createElement(c.Z, { actionLabel: p, enableMaskForDismiss: !0, graphic: s, graphicDisplayMode: "illustration", headline: "Your account is under review", isFullHeightOnMobile: !0, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: m.N6 });
                },
                h = { context: "PAYMENTS_REVIEW" },
                f = (e) => n.createElement(u.H, { errorConfig: h }, n.createElement(y, e)),
                g = n.memo(f);
        },
        923509: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            a(136728);
            var n = a(202784),
                r = a(107267),
                l = a(736063),
                c = a(782642),
                o = a(514639),
                s = a(725516),
                i = a(160144);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, s.z)(),
                        l = (0, c.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const u = n.useCallback(
                        (e) => {
                            const { message: a } = e.data;
                            switch (a) {
                                case i.T.success:
                                    t.replace(o.iE.securityPrivacy), l({ text: "You PIN has been successfuly changed." });
                                    break;
                                case i.T.forgotPin:
                                    t.push(o.jR, { challengeInitiator: o.kW.forgotPin });
                            }
                        },
                        [t, l],
                    );
                    return n.createElement(i.Z, { eventCallback: u, linkType: o.P_.updatePin });
                },
                m = { context: "UpdatePin" };
            function d(e) {
                return n.createElement(l.H, { errorConfig: m }, n.createElement(u, e));
            }
            const p = n.memo(d);
        },
        261423: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            var n = a(202784),
                r = a(107267),
                l = a(992942),
                c = a(529356),
                o = a(198433),
                s = a(736063),
                i = a(137882);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, i.b)({}),
                        s = n.useCallback(() => {
                            window.open(a, "_blank");
                        }, [a]),
                        u = n.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        m = n.useCallback(({ style: e }) => n.createElement(l.Z, { "aria-label": "", source: o, style: e }), []);
                    return n.createElement(c.Z, { actionLabel: "Contact support", enableMaskForDismiss: !0, graphic: m, graphicDisplayMode: "illustration", headline: "We were unable to verify your identity", isFullHeightOnMobile: !0, onAction: s, onClose: u, subtext: "Please reach out to customer support for further assistance." });
                },
                m = { context: "PAYMENTS_NOT_AVAILABLE" },
                d = (e) => n.createElement(s.H, { errorConfig: m }, n.createElement(u, e)),
                p = n.memo(d);
        },
        162827: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(805322);
            const l = (e) => n.createElement(r.Z, e),
                c = n.memo(l);
        },
        516813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var n = a(202784),
                r = a(107267),
                l = a(736063),
                c = a(514639),
                o = a(725516),
                s = a(160144);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, o.z)(),
                        l = (0, r.useParams)(),
                        i = c.Kc[l.tier ?? c.Kc.tier2],
                        u = t.location?.state,
                        m = u?.redirectPath,
                        d = u?.closePath,
                        p = u?.redirectState,
                        y = u?.requestedField,
                        h = u?.challengeId,
                        f = u?.challengeInitiator,
                        { linkType: g } = c.AU[i];
                    return (
                        n.useEffect(() => {
                            a && i && a.scribe({ page: "money", section: "verify-identity", component: i, action: "impression" });
                        }, [a, i]),
                        n.createElement(s.Z, { additionalParams: y ? [{ key: "requestedField", value: y }] : void 0, challengeId: h, challengeInitiator: f, closePath: d, linkType: g, redirectPath: m, redirectState: p })
                    );
                },
                u = { context: "VerifyIdentity" };
            function m(e) {
                return n.createElement(l.H, { errorConfig: u }, n.createElement(i, e));
            }
            const d = n.memo(m);
        },
        891053: (e, t, a) => {
            a.r(t), a.d(t, { default: () => w });
            var n = a(202784),
                r = a(107267),
                l = a(736063),
                c = a(725516),
                o = (a(136728), a(325686)),
                s = a(731708),
                i = a(154003),
                u = a(167630),
                m = a(980407),
                d = a(782642),
                p = a(514639),
                y = a(43429),
                h = a(743080),
                f = a(388768),
                g = (a(585488), a(351743)),
                b = a.n(g);
            const E = f.Z,
                k = () => {
                    const [e, t] = b()(E);
                    return [
                        n.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.create_item_update_session?.linking_token?.token,
                                                l = e?.create_item_update_session?.provider;
                                            r ? a({ token: r, provider: l }) : n(t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                x = () => {
                    const e = (0, c.z)(),
                        t = (0, d.p)(),
                        a = (0, r.useHistory)(),
                        l = (0, h.jh)(),
                        f = a.location?.state?.redirectPath,
                        g = a.location?.state?.paymentMethodId,
                        [b, E] = k(),
                        x = n.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                g &&
                                    b({ paymentMethodId: g })
                                        .then(({ provider: t, token: n }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const r = { token: n, provider: t, linkType: p.P_.verifyPaymentMethod, redirectPath: f, paymentMethodId: g };
                                            a.push(p.MW, r);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, b, a, g, f]),
                        Z = n.useCallback(() => {
                            a.push(f ?? p.gp);
                        }, [a, f]),
                        P = n.createElement(o.Z, { style: l.footer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(s.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(i.ZP, { disabled: E, onPress: x, size: "large", type: "primaryFilled" }, E ? n.createElement(u.Z, null) : "Continue"));
                    return n.createElement(m.Z, { backButtonType: "close", bottomBar: P, history: a, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(o.Z, { style: l.container }, n.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                Z = n.memo(x),
                P = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, c.z)(),
                        l = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: l, action: "impression" });
                        }, [a, l]),
                        n.createElement(Z, null)
                    );
                },
                v = { context: "VerifyPaymentMethod" };
            function C(e) {
                return n.createElement(l.H, { errorConfig: v }, n.createElement(P, e));
            }
            const w = n.memo(C);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                c = a(952428),
                o = a(823161),
                s = a(470397),
                i = a(731708),
                u = a(366635),
                m = a(868634),
                d = a(154003),
                p = a(392237),
                y = a(293723),
                h = a(607127),
                f = a(487552),
                g = a(43429),
                b = a(477922),
                E = a(770585);
            const k = "Remove linked account",
                x = ({ account: e, calculatedFee: t, handleRemove: a, isDisabled: p, isSelected: x, onClick: P, withChevron: v, withInteractiveStyling: C }) => {
                    const w = e.id,
                        _ = e.config,
                        { Icon: I, fees: M, settleTimeMessage: L } = _ ?? {},
                        N = !p && (C ?? !!P),
                        T = r.useCallback(() => {
                            w && !p && P?.(w);
                        }, [w, P, p]),
                        F = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), a?.();
                            },
                            [a],
                        );
                    return r.createElement(c.Z, { onClick: N ? T : void 0, withInteractiveStyling: N }, r.createElement(l.Z, { style: Z.account }, e.type === g.dX.x ? r.createElement(o.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(b.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(l.Z, { style: Z.accountName }, r.createElement(s.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== g.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === g.dX.x ? r.createElement(u.Z, e.accountName) : _ ? r.createElement(l.Z, { style: Z.row }, r.createElement(i.ZP, { color: "gray700" }, I ? r.createElement(I, { style: Z.icon }) : null, L), M ? r.createElement(E.Z, { calculatedFee: t, fees: M }) : null) : e.type === g.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === g.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(m.ZP, { style: Z.decoration, type: "warning" }, e.label) : null, x ? r.createElement(y.default, { style: [Z.decoration, Z.selected] }) : null, a ? r.createElement(d.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(h.default, null), onClick: F, size: "small", style: Z.decoration, testID: "btn-remove", type: "destructiveText" }) : null, v ? r.createElement(f.default, { style: Z.decoration }) : null));
                },
                Z = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center" } })),
                P = r.memo(x);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(932525),
                r = a(202784),
                l = a(325686),
                c = (a(585488), a(277660)),
                o = a.n(c),
                s = a(731708),
                i = a(165822),
                u = a(965245),
                m = a(137882),
                d = a(743080),
                p = a(743250),
                y = a(519901);
            const h = n.Z,
                f = "Action needed",
                g = ({ __id: e }) => e,
                b = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (0, d.jh)(),
                        c = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(y.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(p.Z, { itemRef: a, key: a.__id, supportLink: e }) : null), [e, t]))({ supportLink: (0, m.b)({}), type: a }),
                        b = e?.get_payments_customer_actions,
                        { items: E } = o()(h, b) ?? { items: [] },
                        k = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: g, items: E, onNearEnd: t, renderer: c, role: "list", withoutHeadroom: !0 });
                    return E.length > 0 ? r.createElement(l.Z, null, "transaction" === a ? r.createElement(l.Z, { style: d.ZP.header }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, f)) : null, r.createElement(i.Z, { "aria-label": f, containerStyle: n.tile, stackLayoutUpperStyle: d.ZP.upper, upper: k, withInteractiveStyling: !1 })) : null;
                },
                E = r.memo(b);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                c = a(392237),
                o = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = o.NU.balance, shouldCenterAlign: a = !1, currency: c, size: i = "title1", weight: u = "bold", hasCompleted: d = !1 }) {
                const p = parseFloat(e),
                    y = n.useMemo(
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
                            })({ type: t, amount: p, hasCompleted: d }),
                        [t, p, d],
                    ),
                    h = n.useMemo(() => ((e) => (e === o.NU.credit ? "+" : ""))(t), [t]),
                    f = n.useMemo(() => (0, s.vw)({ amount: e, currency: c }), [e, c]);
                return n.createElement(r.Z, { style: a ? m.alignCenter : void 0 }, n.createElement(l.ZP, { color: y, size: i, weight: u }, `${h}${f}`));
            }
            const u = n.memo(i),
                m = c.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                c = a(731708),
                o = a(855488),
                s = a(392237),
                i = a(97882),
                u = a(727384);
            const m = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, i.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(l.Z, { style: h.currency }, r.createElement(c.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: a, max: l = "9999999", min: c = "0", setAmount: s, setIsValid: i, validateBalance: p, ...y }) {
                const { available_amount_local_micro: f, currency: g } = t ?? {},
                    b = parseFloat(f),
                    E = f ? (0, u.p2)({ amount: b, currency: g }) : null,
                    k = (0, u.dN)({ amount: b }),
                    x = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                a = parseFloat(c),
                                n = parseFloat(l);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= a && t <= n && (!p || t <= k);
                        },
                        [k, l, c, p],
                    ),
                    Z = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (s(t), i(x(t)));
                        },
                        [s, i, x],
                    ),
                    P = r.useCallback(
                        ({ target: e }) => {
                            Z(e.value);
                        },
                        [Z],
                    ),
                    v = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            Z(t);
                        },
                        [Z],
                    ),
                    C = !a && p && parseFloat(e) > k ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    o.Z,
                    (0, n.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: C,
                            helperText: E ? m({ amount: E }) : void 0,
                            invalid: !a,
                            max: l,
                            min: c,
                            onChange: P,
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
                h = s.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { paddingHorizontal: "0" } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => P, KR: () => v, qn: () => w });
            var n = a(807896),
                r = a(202784),
                l = a(45843),
                c = a(325686),
                o = a(392237),
                s = a(684008),
                i = a(72591),
                u = a(297896),
                m = a(748138),
                d = a(913315),
                p = a(734767),
                y = a(286555),
                h = a(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                g = { [f.small]: { width: o.default.theme.spacesPx.space16, height: o.default.theme.spacesPx.space16 }, [f.xLarge]: { width: o.default.theme.spacesPx.space40, height: o.default.theme.spacesPx.space40 }, [f.xxxLarge]: { width: o.default.theme.spaces.space56, height: o.default.theme.spaces.space56 }, [f.xJumbo]: { width: o.default.theme.spaces.space80, height: o.default.theme.spaces.space80 } },
                b = { [f.small]: { width: o.default.theme.spacesPx.space8, height: o.default.theme.spacesPx.space8 }, [f.xLarge]: { width: o.default.theme.spacesPx.space20, height: o.default.theme.spacesPx.space20 }, [f.xxxLarge]: { width: o.default.theme.spaces.space28, height: o.default.theme.spaces.space28 }, [f.xJumbo]: { width: o.default.theme.spaces.space40, height: o.default.theme.spaces.space40 } },
                E = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(l.Z, { source: { uri: a }, style: [_.rounded, _.logo, g[t]] }) : r.createElement(c.Z, { style: [g[t], _.rounded, _.iconContainer] }, r.createElement(e, { style: [_.logo, b[t]] }))),
                k = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: s.default })),
                x = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: u.default, [h.wC.card]: s.default, [h.wC.atm]: m.default },
                Z = { [h.Ms.atm]: m.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: u.default, [h.Ms.interest]: d.default, [h.Ms.cashback]: p.default },
                P = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(E, (0, n.Z)({}, a, { Icon: x[t] }));
                },
                v = ({ type: e, ...t }) => r.createElement(E, (0, n.Z)({}, t, { Icon: Z[e] })),
                C = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: y.default })),
                w = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(C, t) : e === h.dX.card ? r.createElement(k, t) : null),
                _ = o.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.4e0d465a.js.map
