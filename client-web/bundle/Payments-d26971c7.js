"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d26971c7"],
    {
        392046: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(952428),
                c = a(823161),
                s = a(470397),
                i = a(731708),
                d = a(366635),
                u = a(868634),
                m = a(154003),
                p = a(392237),
                h = a(293723),
                y = a(58399),
                g = a(607127),
                f = a(487552),
                b = a(43429),
                x = a(743080),
                C = a(634455),
                E = a(477922),
                Z = a(770585);
            const k = "Remove linked account",
                w = ({ account: e, balance: t, calculatedFee: a, handleExpand: p, handleRemove: w, isDisabled: P, isSelected: I, onClick: D, transferDirection: T, withChevron: _, withInteractiveStyling: S }) => {
                    const R = e.id,
                        L = e.config,
                        { Icon: M, fees: z, settleTimeMessage: X } = L ?? {},
                        F = !P && (S ?? !(!D && !p)),
                        N = r.useCallback(() => {
                            p ? p() : R && !P && D?.(R);
                        }, [R, D, p, P]),
                        A = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), w?.();
                            },
                            [w],
                        );
                    return r.createElement(l.Z, { onClick: F ? N : void 0, withInteractiveStyling: F && !p }, r.createElement(o.Z, { style: x.mR.container }, e.type === b.dX.x ? r.createElement(c.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(E.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(o.Z, { style: x.mR.middle }, r.createElement(s.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== b.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === b.dX.x ? (T && "credit" !== T && t ? r.createElement(C.Z, { amount: t.available_amount_local_micro, colorOverride: "gray700", currency: t.currency, size: "body", weight: "normal" }) : r.createElement(d.Z, (0, n.Z)({ color: "gray700", weight: "normal", withName: !1 }, e.accountName))) : L ? r.createElement(o.Z, { style: x.mR.row }, r.createElement(i.ZP, { color: "gray700" }, M ? r.createElement(M, { style: x.mR.icon }) : null, X), z ? r.createElement(Z.Z, { calculatedFee: a, fees: z }) : null) : e.type === b.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === b.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(u.ZP, { style: v.decoration, type: "warning" }, e.label) : null, I ? r.createElement(h.default, { style: [v.decoration, v.selected] }) : null, p ? r.createElement(y.default, { style: v.decoration }) : w ? r.createElement(m.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(g.default, null), onClick: A, size: "small", style: v.decoration, testID: "btn-remove", type: "destructiveText" }) : null, _ ? r.createElement(f.default, { style: v.decoration }) : null));
                },
                v = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space16, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 } })),
                P = r.memo(w);
        },
        600568: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                o = a(138099),
                l = a(154003),
                c = a(392237),
                s = a(392046);
            const i = ({ account: e, onDone: t, onRemove: a, onVerify: c }) => n.createElement(o.Z, { onMaskClick: t, type: "bottom", withMask: !0 }, n.createElement(r.Z, { style: d.container }, n.createElement(r.Z, { style: d.accountContainer }, n.createElement(s.Z, { account: e, withInteractiveStyling: !1 })), n.createElement(r.Z, { style: d.buttonContainer }, c ? n.createElement(l.ZP, { onPress: c, size: "large", style: d.button, type: "primaryFilled" }, "Verify account") : null, a ? n.createElement(l.ZP, { onPress: a, size: "large", style: d.button, type: "destructiveFilled" }, "Unlink account") : null, n.createElement(l.ZP, { onPress: t, size: "large", style: d.button, type: "primaryOutlined" }, "Done")))),
                d = c.default.create((e) => ({ container: { padding: e.spaces.space16, gap: e.spaces.space24 }, accountContainer: { paddingVertical: e.spaces.space16 }, buttonContainer: { gap: e.spaces.space12 }, button: { width: "100%" } })),
                u = n.memo(i);
        },
        978167: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(165822),
                o = a(392237),
                l = a(782642),
                c = a(514639),
                s = a(445664),
                i = a(160144);
            const d = ({ ariaLabel: e = "Account details container", variant: t }) => {
                    const { id: a } = (0, s.Z)({ fetchKey: "Payments" }),
                        o = (0, l.p)(),
                        d = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case i.T.accountNumbercopiedToClipboard:
                                        o({ text: "Account number copied to clipboard." });
                                        break;
                                    case i.T.routingNumbercopiedToClipboard:
                                        o({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [o],
                        );
                    return n.createElement(r.Z, { "aria-label": e, containerStyle: u.container, stackLayoutUpperStyle: "xl" === t ? u.routingXl : u.routing, upper: a ? n.createElement(i.Z, { eventCallback: d, linkType: c.P_.accountRouting, payload: { customerId: a, variant: t } }) : void 0, withInteractiveStyling: !1 });
                },
                u = o.default.create((e) => ({ routing: { height: e.spaces.space80 }, routingXl: { height: 150 }, container: { padding: 0 } })),
                m = n.memo(d);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(932525),
                r = a(202784),
                o = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                s = a(165822),
                i = a(731708),
                d = a(392237),
                u = a(965245),
                m = a(137882),
                p = a(743080),
                h = a(743250),
                y = a(519901);
            const g = n.Z,
                f = "Action required",
                b = ({ __id: e }) => e,
                x = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(y.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(s.Z, { "aria-label": f, containerStyle: C.noticeTile, stackLayoutUpperStyle: p.ZP.upper, upper: r.createElement(h.Z, { itemRef: a, key: a.__id, supportLink: e }), withInteractiveStyling: !1 }) : null), [e, t]))({ supportLink: (0, m.bR)({}), type: a }),
                        l = e?.get_payments_customer_actions,
                        { items: d } = c()(g, l) ?? { items: [] },
                        x = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: b, items: d, onNearEnd: t, renderer: n, role: "list", withoutHeadroom: !0 });
                    return d.length > 0 ? r.createElement(o.Z, { style: "notice" === a ? C.noticeContainer : void 0 }, "transaction" === a ? r.createElement(o.Z, { style: p.ZP.header }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, f)) : null, x) : null;
                },
                C = d.default.create((e) => ({ noticeTile: { backgroundColor: e.colors.gray0, marginTop: e.spaces.space8 }, noticeContainer: { marginTop: `-${e.spaces.space8}` } })),
                E = r.memo(x);
        },
        370347: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                o = a(953035),
                l = a(743080);
            const c = (e) => {
                    const t = (0, l.jh)(),
                        a = (0, l.sw)();
                    return r.createElement(o.Z, (0, n.Z)({}, e, { containerStyle: t.pivotTile, iconColor: "text", interactiveStyles: a, isCompact: !0, textStyle: l.ZP.actionText, withInteractiveStyling: !0 }));
                },
                s = r.memo(c);
        },
        189305: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(807896),
                r = a(202784),
                o = a(286555),
                l = a(295747),
                c = a(335091),
                s = a(805693);
            const i = (e) => r.createElement(l.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: c.R.Ach, debitMethod: s.t.Ach, label: "Link a bank account", name: "add-bank-account" }, e)),
                d = r.memo(i);
        },
        281838: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(807896),
                r = a(202784),
                o = a(684008),
                l = a(295747),
                c = a(335091),
                s = a(805693);
            const i = (e) => r.createElement(l.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: c.R.Aft, debitMethod: s.t.Oct, label: "Link a card", name: "add-card" }, e)),
                d = r.memo(i);
        },
        295747: (e, t, a) => {
            a.d(t, { Z: () => x });
            var n = a(202784),
                r = a(325686),
                o = a(952428),
                l = a(731708),
                c = a(392237),
                s = a(379327),
                i = a(58399),
                d = a(43429),
                u = a(743080),
                m = a(727384),
                p = a(477922),
                h = a(442880),
                y = a(19804),
                g = a(770585);
            const f = ({ MethodIcon: e, creditMethod: t, debitMethod: a, disabled: c = !1, label: f, link: x, methodConfigs: C, name: E, transferDirection: Z, variant: k }) => {
                    const w = Z && C ? (0, m.NG)({ transferDirection: Z, methodConfigs: C, debitMethod: a, creditMethod: t }) : void 0,
                        { Icon: v, fees: P, processingTime: I, settleTimeMessage: D } = w ?? {};
                    return "tile" === k ? n.createElement(y.Z, { Icon: e, decoration: n.createElement(h.Z, { processingTime: I }), link: x, subtitle: Z === d.Rz.debit && P ? n.createElement(g.C, { fees: P }) : null, title: f }) : "row" === k ? n.createElement(o.Z, { disabled: c, link: x, style: b.addPaymentMethodButtonContainer, withInteractiveStyling: !1 }, n.createElement(r.Z, { style: b.addPaymentMethodIconTextContainer }, n.createElement(p.zU, { Icon: s.default, size: "xxxLarge" }), n.createElement(l.ZP, { size: "subtext1", weight: "medium" }, f)), n.createElement(i.default, { style: b.addPaymentMethodButtonChevron })) : n.createElement(o.Z, { "aria-label": f, key: E, link: x, withInteractiveStyling: !0 }, n.createElement(r.Z, { style: u.mR.container }, n.createElement(p.zU, { Icon: s.default, size: "xxxLarge" }), n.createElement(r.Z, { style: u.mR.middle }, n.createElement(l.ZP, null, f), w ? n.createElement(r.Z, { style: u.mR.row }, n.createElement(l.ZP, { color: "gray700" }, v ? n.createElement(v, { style: u.mR.icon }) : null, D), P ? n.createElement(g.Z, { fees: P }) : null) : null)));
                },
                b = c.default.create((e) => ({ addPaymentMethodButtonContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: e.spaces.space16 }, addPaymentMethodIconTextContainer: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, addPaymentMethodButtonChevron: { width: e.spaces.space24, height: e.spaces.space24, fill: e.colors.gray700 } })),
                x = n.memo(f);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                l = a(392237),
                c = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = c.NU.balance, shouldCenterAlign: a = !1, currency: l, size: i = "title1", weight: d = "bold", hasCompleted: m = !1, style: p, colorOverride: h, hasFailed: y }) {
                const g = parseFloat(e),
                    f = n.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, type: a }) => {
                                const n = e < 0;
                                switch (a) {
                                    case c.NU.credit:
                                    case c.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return n ? "red500" : "text";
                                }
                            })({ type: t, amount: g, hasCompleted: m }),
                        [t, g, m],
                    ),
                    b = n.useMemo(() => ((e) => (e === c.NU.credit ? "+" : ""))(t), [t]),
                    x = n.useMemo(() => (0, s.vw)({ amount: e, currency: l }), [e, l]);
                return n.createElement(r.Z, { style: [a ? u.alignCenter : void 0, ...([p] ?? 0)] }, n.createElement(o.ZP, { color: h || f, size: i, style: y && u.strike, weight: d }, `${b}${x}`));
            }
            const d = n.memo(i),
                u = l.default.create((e) => ({ alignCenter: { alignItems: "center" }, strike: { textDecorationLine: "line-through" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                r = a(325686),
                o = a(3348),
                l = a(731708),
                c = a(392237),
                s = a(97882),
                i = a(727384);
            const d = (e) => {
                    const t = e.split("."),
                        a = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return void 0 !== t[1] ? `${a}.${t[1]}` : a;
                },
                u = () => (0, s.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim(),
                m = (e) => {
                    const t = u();
                    return e.replace(new RegExp(`[${t},]`, "g"), "");
                };
            function p({ amount: e, balance: t, isValid: a, max: c = "9999999", min: s = "0", setAmount: p, setIsValid: h, validateBalance: g, ...f }) {
                const [b, x] = n.useState(!1),
                    { available_amount_local_micro: C, currency: E } = t ?? {},
                    Z = parseFloat(C),
                    k = (C && (0, i.p2)({ amount: Z, currency: E }), (0, i.dN)({ amount: Z })),
                    w = n.useCallback(
                        (e) => {
                            const t = m(e),
                                a = parseFloat(t),
                                n = parseFloat(s),
                                r = parseFloat(c);
                            return /^\d*(\.\d{1,2})?$/.test(t) && a > 0 && a >= n && a <= r && !(g && a > k);
                        },
                        [c, s, g, k],
                    ),
                    v = n.useCallback(
                        (e) => {
                            let t = m(e);
                            t = t.replace(/[^0-9.]/g, "");
                            if ((t.match(/\./g) || []).length > 1) {
                                const e = t.indexOf(".");
                                t = t.substring(0, e + 1) + t.substring(e + 1).replace(/\./g, "");
                            }
                            const a = t.indexOf(".");
                            -1 !== a && t.length > a + 3 && (t = t.substring(0, a + 3));
                            const n = parseFloat(t),
                                r = parseFloat(c);
                            (!isNaN(n) && n > r) || ((n >= 0 || "" === t || "." === t) && (p(t), h(w(t))));
                        },
                        [p, h, w, c],
                    ),
                    P = n.useCallback(
                        ({ target: e }) => {
                            v(e.value);
                        },
                        [v],
                    ),
                    I = n.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            v(t);
                        },
                        [v],
                    ),
                    D = n.useCallback(() => {
                        x(!0);
                    }, []),
                    T = n.useCallback(() => {
                        x(!1);
                    }, []),
                    _ = n.useCallback(
                        () =>
                            !a && e
                                ? (function (e, t, a, n, r) {
                                      const o = m(e),
                                          l = parseFloat(o),
                                          c = parseFloat(t),
                                          s = parseFloat(a);
                                      return l <= 0 ? "Amount must be greater than $0" : l < c ? `Amount must be at least $${d(t)}` : l > s ? `Amount cannot exceed $${d(a)}` : n && l > r ? "Your balance is insufficient for this transfer." : null;
                                  })(e, s, c, g, k)
                                : null,
                        [a, e, s, c, g, k],
                    )(),
                    S = ((e) => {
                        if (!e || "" === e) return "";
                        const t = m(e);
                        return "" === t ? "" : `${u()}${d(t)}`;
                    })(e);
                return n.createElement(
                    r.Z,
                    null,
                    n.createElement(
                        r.Z,
                        { style: [y.amountInputContainer, _ ? y.amountInputContainerError : null] },
                        n.createElement(o.Z, {
                            autoFocus: !0,
                            invalid: !a,
                            max: c,
                            min: s,
                            onBlur: T,
                            onChange: P,
                            onFocus: D,
                            onKeyDown: (e) => {
                                -1 !== [8, 9, 27, 13, 46].indexOf(e.keyCode) || (65 === e.keyCode && !0 === e.ctrlKey) || (67 === e.keyCode && !0 === e.ctrlKey) || (86 === e.keyCode && !0 === e.ctrlKey) || (88 === e.keyCode && !0 === e.ctrlKey) || ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && 190 !== e.keyCode && 110 !== e.keyCode && e.preventDefault());
                            },
                            onPaste: I,
                            placeholder: `${u()}0`,
                            placeholderTextColor: y.placeholder.color,
                            style: [y.amountInput, b && y.amountInputFocused],
                            testID: "amount-input",
                            type: "text",
                            value: S,
                        }),
                    ),
                    n.createElement(r.Z, { style: y.errorContainer }, _ && n.createElement(l.ZP, { style: y.errorText }, _)),
                );
            }
            const h = n.memo(p),
                y = c.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { padding: e.spaces.space24, width: "100%", height: "120px", textAlign: "center", fontSize: "64px", fontWeight: e.fontWeights.bold, color: e.colors.text, backgroundColor: "transparent", border: "none", letterSpacing: "-0.05px" }, amountInputContainer: { borderWidth: e.spaces.space1, borderColor: e.colors.gray200, borderRadius: e.spaces.space12 }, amountInputContainerError: { borderColor: e.colors.red500 }, placeholder: { color: e.colors.gray400 }, errorContainer: { justifyContent: "flex-start" }, errorText: { color: e.colors.red500, fontSize: e.fontSizes.subtext3 }, amountInputFocused: { outlineColor: e.colors.gray200, borderRadius: e.spaces.space12 } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => k, KR: () => w, qn: () => P, zU: () => x });
            var n = a(807896),
                r = a(202784),
                o = a(45843),
                l = a(325686),
                c = a(392237),
                s = a(684008),
                i = a(72591),
                d = a(297896),
                u = a(748138),
                m = a(913315),
                p = a(734767),
                h = a(286555),
                y = a(43429);
            const g = Object.freeze({ small: "small", xLarge: "xLarge", xxLarge: "xxLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                f = { [g.small]: { width: c.default.theme.spacesPx.space16, height: c.default.theme.spacesPx.space16 }, [g.xLarge]: { width: c.default.theme.spacesPx.space40, height: c.default.theme.spacesPx.space40 }, [g.xxLarge]: { width: c.default.theme.spacesPx.space48, height: c.default.theme.spacesPx.space48 }, [g.xxxLarge]: { width: c.default.theme.spaces.space56, height: c.default.theme.spaces.space56 }, [g.xJumbo]: { width: c.default.theme.spaces.space80, height: c.default.theme.spaces.space80 } },
                b = { [g.small]: { width: c.default.theme.spacesPx.space8, height: c.default.theme.spacesPx.space8 }, [g.xLarge]: { width: c.default.theme.spacesPx.space20, height: c.default.theme.spacesPx.space20 }, [g.xxLarge]: { width: c.default.theme.spacesPx.space24, height: c.default.theme.spacesPx.space24 }, [g.xxxLarge]: { width: c.default.theme.spaces.space28, height: c.default.theme.spaces.space28 }, [g.xJumbo]: { width: c.default.theme.spaces.space40, height: c.default.theme.spaces.space40 } },
                x = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(o.Z, { source: { uri: a }, style: [I.rounded, I.logo, f[t]] }) : r.createElement(l.Z, { style: [f[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, b[t]] }))),
                C = (e) => r.createElement(x, (0, n.Z)({}, e, { Icon: s.default })),
                E = { [y.wC.bankDeposit]: i.default, [y.wC.bankWithdraw]: d.default, [y.wC.card]: s.default, [y.wC.atm]: u.default },
                Z = { [y.Ms.atm]: u.default, [y.Ms.deposit]: i.default, [y.Ms.withdraw]: d.default, [y.Ms.interest]: m.default, [y.Ms.cashback]: p.default },
                k = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(x, (0, n.Z)({}, a, { Icon: E[t] }));
                },
                w = ({ type: e, ...t }) => r.createElement(x, (0, n.Z)({}, t, { Icon: Z[e] })),
                v = (e) => r.createElement(x, (0, n.Z)({}, e, { Icon: h.default })),
                P = ({ type: e, ...t }) => (e === y.dX.bank ? r.createElement(v, t) : e === y.dX.card ? r.createElement(C, t) : null),
                I = c.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        819404: (e, t, a) => {
            a.d(t, { Z: () => R });
            var n = a(415706),
                r = a(202784),
                o = a(325686),
                l = (a(585488), a(351743)),
                c = a.n(l),
                s = a(731708),
                i = a(174326),
                d = a(680665),
                u = a(392237),
                m = a(856228),
                p = a(727384),
                h = a(952428),
                y = a(154003),
                g = a(530525),
                f = a(439592),
                b = a(823406),
                x = a(656805),
                C = a(287688),
                E = a(994600),
                Z = a(988600),
                k = a(530159),
                w = a(514639);
            function v({ __typename: e }) {
                switch (e) {
                    case "XPaymentsCustomerTaskDestinationDirectDeposit":
                        return w.Hf;
                    case "XPaymentsCustomerTaskDestinationBillPay":
                        return w.rE;
                    case "XPaymentsCustomerTaskDestinationIdVerification":
                        return w.wG;
                    case "XPaymentsCustomerTaskDestinationAccountLinking":
                        return w.iE.bankAccounts;
                    case "XPaymentsCustomerTaskDestinationXCard":
                        return w.Tb;
                    default:
                        return "";
                }
            }
            const P = ({ destination: e, icon: t, onClose: a, subtitle: n, title: l }) => {
                    const [c, i] = r.useState(!1),
                        d = `${l} Icon`,
                        u = r.useCallback(
                            (e) => {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    i(!0),
                                    setTimeout(() => {
                                        a();
                                    }, 300);
                            },
                            [a],
                        ),
                        m = (function (e) {
                            if ("XPaymentsCustomerTaskPredefinedIcon" === e.__typename && e.icon_type)
                                switch (e.icon_type) {
                                    case "IdVerification":
                                        return E;
                                    case "DirectDeposit":
                                        return C;
                                    case "BillPay":
                                        return x;
                                    case "AccountLinking":
                                        return Z;
                                    case "XCard":
                                        return k;
                                    default:
                                        return null;
                                }
                            return "XPaymentsCustomerTaskRemoteImageIcon" === e.__typename && e.image_url ? e.image_url : null;
                        })(t);
                    return r.createElement(h.Z, { link: v(e), style: [I.container, c && I.dismissing] }, r.createElement(o.Z, { style: I.contentWrapper }, r.createElement(y.ZP, { borderColor: "transparent", icon: r.createElement(b.default, { style: I.closeButtonIcon }), onClick: u, size: "smallCompact", style: I.closeButton }), r.createElement(o.Z, { style: I.content }, m && r.createElement(o.Z, { style: I.icon32 }, r.createElement(g.Z, { "aria-label": d, aspectMode: f.Z.SQUARE, image: m })), r.createElement(o.Z, { style: I.textContainer }, r.createElement(s.ZP, { align: "left", color: "text", size: "subtext1", style: { overflow: "hidden" }, weight: "medium" }, l), r.createElement(s.ZP, { align: "left", color: "gray800", size: "subtext1", weight: "normal" }, n)))));
                },
                I = u.default.create((e) => ({ icon32: { height: e.spaces.space32, width: e.spaces.space32 }, container: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer", flexGrow: 1, width: "280px", maxHeight: "fit-content", overflow: "hidden", transition: "transform 300ms ease, opacity 300ms ease, width 300ms ease, margin 300ms ease" }, contentWrapper: { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }, closeButton: { position: "absolute", top: "-12px", end: "-8px" }, closeButtonIcon: { fill: e.colors.gray900, height: e.spaces.space20, width: e.spaces.space20 }, content: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%", height: "100%" }, icon: { width: e.spaces.space32, height: e.spaces.space32, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, backgroundSize: "cover", backgroundPosition: "center" }, textContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, overflow: "hidden" }, dismissing: { transform: "translateX(-100%)", opacity: 0, width: 0, marginEnd: 0, paddingHorizontal: 0, height: 0 } })),
                D = r.memo(P),
                T = n.Z,
                _ = () => {
                    const [e, t] = r.useState(0),
                        [a, n] = r.useState(!1),
                        { customerTasks: l, setCustomerTasks: u } = (0, m.Z)(),
                        [h] = c()(T);
                    const y = r.useCallback(
                        (e) => {
                            const t = 1 === l.length;
                            t && n(!0),
                                h({
                                    variables: { taskId: e, safetyLevel: "XPayments" },
                                    onCompleted: () => {
                                        t
                                            ? setTimeout(() => {
                                                  u((t) => t.filter((t) => t.id !== e));
                                              }, 350)
                                            : u((t) => t.filter((t) => t.id !== e));
                                    },
                                    updater: p.Mw,
                                });
                        },
                        [l.length, h, u],
                    );
                    return 0 !== l.length || a
                        ? r.createElement(
                              o.Z,
                              { style: [S.carouselContainer, a && S.carouselDismissing] },
                              r.createElement(s.ZP, null, "Things you should know"),
                              r.createElement(
                                  o.Z,
                                  { style: S.carouselOuterWrapper },
                                  r.createElement(
                                      o.Z,
                                      { style: S.carouselInnerWrapper },
                                      r.createElement(
                                          i.Z,
                                          {
                                              "aria-label": "Customer tasks carousel",
                                              childrenStyle: S.carouselChildrenStyle,
                                              onVisibleRangeChange: ({ index: e, intersectionRatio: a }) => {
                                                  return (n = e), void (1 === a && t(n));
                                                  var n;
                                              },
                                              showNavButtonsOnHover: !1,
                                              updateObserverWithChildren: !0,
                                              withShadow: !0,
                                          },
                                          l.map((e) => r.createElement(D, { destination: e.destination, icon: e.icon, id: e.id, key: e.id, onClose: () => y(e.id), subtitle: e.subtitle, title: e.title })),
                                      ),
                                  ),
                                  r.createElement(d.ZP, { count: l.length, max: 10, selectedIndex: e }),
                              ),
                          )
                        : null;
                },
                S = u.default.create((e) => ({ carouselChildrenStyle: { marginEnd: e.spaces.space8 }, carouselContainer: { gap: e.spaces.space16, transition: "opacity 350ms ease, margin 350ms ease, gap 350ms ease, height 350ms ease" }, carouselDismissing: { opacity: 0, height: 0 }, carouselOuterWrapper: { width: "100%" }, carouselInnerWrapper: { position: "relative", width: "100%", maxHeight: "fit-content" } })),
                R = r.memo(_);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d26971c7.711d906a.js.map
