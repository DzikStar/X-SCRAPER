"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(514639),
                l = a(445664),
                s = a(827309);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: a } = (0, l.Z)({ fetchKey: "Payments" }),
                        o = n.useCallback(() => {
                            t.replace(a ? c.gp : "/");
                        }, [t, a]);
                    return n.createElement(s.Z, { actionLabel: "Got it", headline: "Your account is under review", history: t, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: c.N6 });
                },
                u = { context: "PAYMENTS_REVIEW" },
                m = (e) => n.createElement(o.H, { errorConfig: u }, n.createElement(i, e)),
                d = n.memo(m);
        },
        923509: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            a(136728);
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(782642),
                l = a(514639),
                s = a(725516),
                i = a(160144);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, s.z)(),
                        o = (0, c.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const u = n.useCallback(
                        (e) => {
                            const { message: a } = e.data;
                            switch (a) {
                                case i.T.success:
                                    t.replace(l.iE.securityPrivacy), o({ text: "You PIN has been successfuly changed." });
                                    break;
                                case i.T.forgotPin:
                                    t.push(l.jR, { challengeInitiator: l.kW.forgotPin });
                            }
                        },
                        [t, o],
                    );
                    return n.createElement(i.Z, { eventCallback: u, linkType: l.P_.updatePin });
                },
                m = { context: "UpdatePin" };
            function d(e) {
                return n.createElement(o.H, { errorConfig: m }, n.createElement(u, e));
            }
            const p = n.memo(d);
        },
        261423: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(827309),
                l = a(137882);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, l.b)({}),
                        o = n.useCallback(() => {
                            window.open(a, "_blank");
                        }, [a]),
                        s = n.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return n.createElement(c.Z, { actionLabel: "Contact support", headline: "We were unable to verify your identity", history: t, onAction: o, onClose: s, subtext: "Please reach out to customer support for further assistance." });
                },
                i = { context: "PAYMENTS_VERIFICATION_FAILED" },
                u = (e) => n.createElement(o.H, { errorConfig: i }, n.createElement(s, e)),
                m = n.memo(u);
        },
        162827: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(805322);
            const o = (e) => n.createElement(r.Z, e),
                c = n.memo(o);
        },
        516813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(514639),
                l = a(725516),
                s = a(160144);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, l.z)(),
                        o = (0, r.useParams)(),
                        i = c.Kc[o.tier ?? c.Kc.tier2],
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
                return n.createElement(o.H, { errorConfig: u }, n.createElement(i, e));
            }
            const d = n.memo(m);
        },
        891053: (e, t, a) => {
            a.r(t), a.d(t, { default: () => v });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(725516),
                l = (a(136728), a(325686)),
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
                x = () => {
                    const [e, t] = b()(E);
                    return [
                        n.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.create_item_update_session?.linking_token?.token,
                                                o = e?.create_item_update_session?.provider;
                                            r ? a({ token: r, provider: o }) : n(t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                k = () => {
                    const e = (0, c.z)(),
                        t = (0, d.p)(),
                        a = (0, r.useHistory)(),
                        o = (0, h.jh)(),
                        f = a.location?.state?.redirectPath,
                        g = a.location?.state?.paymentMethodId,
                        [b, E] = x(),
                        k = n.useCallback(() => {
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
                        C = n.createElement(l.Z, { style: o.footer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(s.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(i.ZP, { disabled: E, onPress: k, size: "large", type: "primaryFilled" }, E ? n.createElement(u.Z, null) : "Continue"));
                    return n.createElement(m.Z, { backButtonType: "close", bottomBar: C, history: a, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(l.Z, { style: o.container }, n.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                Z = n.memo(k),
                C = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, c.z)(),
                        o = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: o, action: "impression" });
                        }, [a, o]),
                        n.createElement(Z, null)
                    );
                },
                P = { context: "VerifyPaymentMethod" };
            function w(e) {
                return n.createElement(o.H, { errorConfig: P }, n.createElement(C, e));
            }
            const v = n.memo(w);
        },
        152837: (e, t, a) => {
            a.r(t), a.d(t, { VerifyYourIdentityScreen: () => Z, default: () => I, styles: () => v });
            var n = a(202784),
                r = a(325686),
                o = a(530525),
                c = a(439592),
                l = a(731708),
                s = a(154003),
                i = a(392237),
                u = a(468670),
                m = a(812140),
                d = a(553771),
                p = a(994600),
                y = a(980407),
                h = a(652904),
                f = a(736063),
                g = a(445664),
                b = a(293115),
                E = a(743080),
                x = a(727384);
            const k = { page: "money", section: "setup-direct-deposit" },
                Z = (e) => {
                    const t = (0, E.jh)();
                    return n.createElement(h.Z, null, n.createElement(r.Z, { style: t.container }, n.createElement(r.Z, { style: v.headerContainer }, n.createElement(r.Z, { style: v.iconContainer }, n.createElement(o.Z, { "aria-label": "Verify your identity icon", aspectMode: c.Z.SQUARE, image: p })), n.createElement(r.Z, { style: v.titleContainer }, n.createElement(l.ZP, { color: "text", size: "title1", weight: "bold" }, "Verify your identity"), n.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, "Unlock the full benefits of X Money by confirming who you are."))), n.createElement(r.Z, { style: v.benefitsContainer }, n.createElement(r.Z, { style: v.benefitRow }, n.createElement(u.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Military grade encryption"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(m.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(d.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                C = { context: "VERIFY_YOUR_IDENTITY" },
                P = () => {
                    const e = (0, E.jh)(),
                        { roles: t } = (0, g.Z)({ fetchKey: "Payments" });
                    return n.createElement(r.Z, { style: e.footer }, n.createElement(s.ZP, { link: (0, x.FW)({ roles: t }), type: "primaryFilled" }, "Let's do it"), n.createElement(l.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                w = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(f.H, { errorConfig: C }, n.createElement(y.Z, { backButtonType: "close", bottomBar: n.createElement(P, null), history: t, onBackClick: a, withoutBottomBarMobile: !0 }, n.createElement(b.nO, { namespace: k }, n.createElement(f.H, { errorConfig: C }, n.createElement(Z, e)))));
                },
                v = i.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24, marginTop: e.spaces.space40, marginBottom: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                I = n.memo(w);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                c = a(952428),
                l = a(823161),
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
            const x = "Remove linked account",
                k = ({ account: e, calculatedFee: t, handleRemove: a, isDisabled: p, isSelected: k, onClick: C, withChevron: P, withInteractiveStyling: w }) => {
                    const v = e.id,
                        I = e.config,
                        { Icon: _, fees: T, settleTimeMessage: S } = I ?? {},
                        D = !p && (w ?? !!C),
                        z = r.useCallback(() => {
                            v && !p && C?.(v);
                        }, [v, C, p]),
                        L = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), a?.();
                            },
                            [a],
                        );
                    return r.createElement(c.Z, { onClick: D ? z : void 0, withInteractiveStyling: D }, r.createElement(o.Z, { style: Z.account }, e.type === g.dX.x ? r.createElement(l.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(b.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(o.Z, { style: Z.accountName }, r.createElement(s.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== g.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === g.dX.x ? r.createElement(u.Z, e.accountName) : I ? r.createElement(o.Z, { style: Z.row }, r.createElement(i.ZP, { color: "gray700" }, _ ? r.createElement(_, { style: Z.icon }) : null, S), T ? r.createElement(E.Z, { calculatedFee: t, fees: T }) : null) : e.type === g.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === g.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(m.ZP, { style: Z.decoration, type: "warning" }, e.label) : null, k ? r.createElement(y.default, { style: [Z.decoration, Z.selected] }) : null, a ? r.createElement(d.ZP, { "aria-label": x, hoverLabel: { label: x }, icon: r.createElement(h.default, null), onClick: L, size: "small", style: Z.decoration, testID: "btn-remove", type: "destructiveText" }) : null, P ? r.createElement(f.default, { style: Z.decoration }) : null));
                },
                Z = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center" } })),
                C = r.memo(k);
        },
        978167: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(165822),
                o = a(392237),
                c = a(782642),
                l = a(514639),
                s = a(445664),
                i = a(160144);
            const u = ({ ariaLabel: e = "Account details container", variant: t }) => {
                    const { id: a } = (0, s.Z)({ fetchKey: "Payments" }),
                        o = (0, c.p)(),
                        u = n.useCallback(
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
                    return n.createElement(r.Z, { "aria-label": e, containerStyle: m.container, stackLayoutUpperStyle: "xl" === t ? m.routingXl : m.routing, upper: a ? n.createElement(i.Z, { eventCallback: u, linkType: l.P_.accountRouting, payload: { customerId: a, variant: t } }) : void 0, withInteractiveStyling: !1 });
                },
                m = o.default.create((e) => ({ routing: { height: e.spaces.space80 }, routingXl: { height: 150 }, container: { padding: 0 } })),
                d = n.memo(u);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(932525),
                r = a(202784),
                o = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                s = a(165822),
                i = a(731708),
                u = a(392237),
                m = a(965245),
                d = a(137882),
                p = a(743080),
                y = a(743250),
                h = a(519901);
            const f = n.Z,
                g = "Action required",
                b = ({ __id: e }) => e,
                E = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(h.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(s.Z, { "aria-label": g, containerStyle: x.noticeTile, stackLayoutUpperStyle: p.ZP.upper, upper: r.createElement(y.Z, { itemRef: a, key: a.__id, supportLink: e }), withInteractiveStyling: !1 }) : null), [e, t]))({ supportLink: (0, d.b)({}), type: a }),
                        c = e?.get_payments_customer_actions,
                        { items: u } = l()(f, c) ?? { items: [] },
                        E = r.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: b, items: u, onNearEnd: t, renderer: n, role: "list", withoutHeadroom: !0 });
                    return u.length > 0 ? r.createElement(o.Z, { style: "notice" === a ? x.noticeContainer : void 0 }, "transaction" === a ? r.createElement(o.Z, { style: p.ZP.header }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, g)) : null, E) : null;
                },
                x = u.default.create((e) => ({ noticeTile: { backgroundColor: e.colors.gray0, marginTop: e.spaces.space8 }, noticeContainer: { marginTop: `-${e.spaces.space8}` } })),
                k = r.memo(E);
        },
        370347: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                o = a(953035),
                c = a(743080);
            const l = (e) => {
                    const t = (0, c.jh)();
                    return r.createElement(o.Z, (0, n.Z)({}, e, { containerStyle: t.pivotTile, iconColor: "text", interactiveStyles: c.LR, isCompact: !0, textStyle: c.ZP.actionText, withInteractiveStyling: !0 }));
                },
                s = r.memo(l);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                c = a(392237),
                l = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = l.NU.balance, shouldCenterAlign: a = !1, currency: c, size: i = "title1", weight: u = "bold", hasCompleted: d = !1, style: p }) {
                const y = parseFloat(e),
                    h = n.useMemo(
                        () =>
                            (({ amount: e, hasCompleted: t, type: a }) => {
                                const n = e < 0;
                                switch (a) {
                                    case l.NU.credit:
                                    case l.NU.debit:
                                        return t ? "text" : "gray500";
                                    default:
                                        return n ? "red500" : "text";
                                }
                            })({ type: t, amount: y, hasCompleted: d }),
                        [t, y, d],
                    ),
                    f = n.useMemo(() => ((e) => (e === l.NU.credit ? "+" : ""))(t), [t]),
                    g = n.useMemo(() => (0, s.vw)({ amount: e, currency: c }), [e, c]);
                return n.createElement(r.Z, { style: [a ? m.alignCenter : void 0, ...([p] ?? 0)] }, n.createElement(o.ZP, { color: h, size: "title0" === i ? void 0 : i, style: "title0" === i ? { fontSize: "48px" } : {}, weight: u }, `${f}${g}`));
            }
            const u = n.memo(i),
                m = c.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                c = a(731708),
                l = a(855488),
                s = a(392237),
                i = a(97882),
                u = a(727384);
            const m = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, i.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(o.Z, { style: h.currency }, r.createElement(c.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: a, max: o = "9999999", min: c = "0", setAmount: s, setIsValid: i, validateBalance: p, ...y }) {
                const { available_amount_local_micro: f, currency: g } = t ?? {},
                    b = parseFloat(f),
                    E = f ? (0, u.p2)({ amount: b, currency: g }) : null,
                    x = (0, u.dN)({ amount: b }),
                    k = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                a = parseFloat(c),
                                n = parseFloat(o);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= a && t <= n && (!p || t <= x);
                        },
                        [x, o, c, p],
                    ),
                    Z = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (s(t), i(k(t)));
                        },
                        [s, i, k],
                    ),
                    C = r.useCallback(
                        ({ target: e }) => {
                            Z(e.value);
                        },
                        [Z],
                    ),
                    P = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            Z(t);
                        },
                        [Z],
                    ),
                    w = !a && p && parseFloat(e) > x ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    l.Z,
                    (0, n.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: w,
                            helperText: E ? m({ amount: E }) : void 0,
                            invalid: !a,
                            max: o,
                            min: c,
                            onChange: C,
                            onKeyPress: (e) => {
                                ("-" !== e.key && "e" !== e.key && "E" !== e.key) || e.preventDefault();
                            },
                            onPaste: P,
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
            a.d(t, { G7: () => C, KR: () => P, qn: () => v });
            var n = a(807896),
                r = a(202784),
                o = a(45843),
                c = a(325686),
                l = a(392237),
                s = a(684008),
                i = a(72591),
                u = a(297896),
                m = a(748138),
                d = a(913315),
                p = a(734767),
                y = a(286555),
                h = a(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxLarge: "xxLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                g = { [f.small]: { width: l.default.theme.spacesPx.space16, height: l.default.theme.spacesPx.space16 }, [f.xLarge]: { width: l.default.theme.spacesPx.space40, height: l.default.theme.spacesPx.space40 }, [f.xxLarge]: { width: l.default.theme.spacesPx.space48, height: l.default.theme.spacesPx.space48 }, [f.xxxLarge]: { width: l.default.theme.spaces.space56, height: l.default.theme.spaces.space56 }, [f.xJumbo]: { width: l.default.theme.spaces.space80, height: l.default.theme.spaces.space80 } },
                b = { [f.small]: { width: l.default.theme.spacesPx.space8, height: l.default.theme.spacesPx.space8 }, [f.xLarge]: { width: l.default.theme.spacesPx.space20, height: l.default.theme.spacesPx.space20 }, [f.xxLarge]: { width: l.default.theme.spacesPx.space24, height: l.default.theme.spacesPx.space24 }, [f.xxxLarge]: { width: l.default.theme.spaces.space28, height: l.default.theme.spaces.space28 }, [f.xJumbo]: { width: l.default.theme.spaces.space40, height: l.default.theme.spaces.space40 } },
                E = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(o.Z, { source: { uri: a }, style: [I.rounded, I.logo, g[t]] }) : r.createElement(c.Z, { style: [g[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, b[t]] }))),
                x = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: s.default })),
                k = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: u.default, [h.wC.card]: s.default, [h.wC.atm]: m.default },
                Z = { [h.Ms.atm]: m.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: u.default, [h.Ms.interest]: d.default, [h.Ms.cashback]: p.default },
                C = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(E, (0, n.Z)({}, a, { Icon: k[t] }));
                },
                P = ({ type: e, ...t }) => r.createElement(E, (0, n.Z)({}, t, { Icon: Z[e] })),
                w = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: y.default })),
                v = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(w, t) : e === h.dX.card ? r.createElement(x, t) : null),
                I = l.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        819404: (e, t, a) => {
            a.d(t, { Z: () => z });
            var n = a(415706),
                r = a(991744),
                o = a(202784),
                c = a(325686),
                l = (a(585488), a(351743)),
                s = a.n(l),
                i = a(731708),
                u = a(174326),
                m = a(680665),
                d = a(392237),
                p = a(535338),
                y = a(952428),
                h = a(154003),
                f = a(530525),
                g = a(439592),
                b = a(823406),
                E = a(656805),
                x = a(287688),
                k = a(994600),
                Z = a(988600),
                C = a(514639);
            function P({ __typename: e }) {
                switch (e) {
                    case "XPaymentsCustomerTaskDestinationDirectDeposit":
                        return C.Hf;
                    case "XPaymentsCustomerTaskDestinationBillPay":
                        return C.rE;
                    case "XPaymentsCustomerTaskDestinationIdVerification":
                        return C.wG;
                    case "XPaymentsCustomerTaskDestinationAccountLinking":
                        return C.iE.bankAccounts;
                    default:
                        return "";
                }
            }
            const w = ({ destination: e, icon: t, onClose: a, subtitle: n, title: r }) => {
                    const [l, s] = o.useState(!1),
                        u = `${r} Icon`,
                        m = o.useCallback(
                            (e) => {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    s(!0),
                                    setTimeout(() => {
                                        a();
                                    }, 300);
                            },
                            [a],
                        ),
                        d = (function ({ __typename: e, icon_type: t, image_url: a }) {
                            if ("XPaymentsCustomerTaskPredefinedIcon" === e)
                                switch (t) {
                                    case "IdVerification":
                                        return k;
                                    case "DirectDeposit":
                                        return x;
                                    case "BillPay":
                                        return E;
                                    case "AccountLinking":
                                        return Z;
                                    default:
                                        return null;
                                }
                            return a || "";
                        })(t);
                    return o.createElement(y.Z, { link: P(e), style: [v.container, l && v.dismissing] }, o.createElement(c.Z, { style: v.contentWrapper }, o.createElement(h.ZP, { borderColor: "transparent", icon: o.createElement(b.default, { style: v.closeButtonIcon }), onClick: m, size: "smallCompact", style: v.closeButton }), o.createElement(c.Z, { style: v.content }, d && o.createElement(c.Z, { style: v.icon32 }, o.createElement(f.Z, { "aria-label": u, aspectMode: g.Z.SQUARE, image: d })), o.createElement(c.Z, { style: v.textContainer }, o.createElement(i.ZP, { align: "left", color: "text", size: "subtext1", style: { overflow: "hidden" }, weight: "medium" }, r), o.createElement(i.ZP, { align: "left", color: "gray800", size: "subtext1", weight: "normal" }, n)))));
                },
                v = d.default.create((e) => ({ icon32: { height: e.spaces.space32, width: e.spaces.space32 }, container: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer", flexGrow: 1, width: "280px" }, contentWrapper: { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }, closeButton: { position: "absolute", top: "-12px", end: "-8px" }, closeButtonIcon: { fill: e.colors.gray900, height: e.spaces.space20, width: e.spaces.space20 }, content: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%", height: "100%" }, icon: { width: e.spaces.space32, height: e.spaces.space32, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, backgroundSize: "cover", backgroundPosition: "center" }, textContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, overflow: "hidden" }, dismissing: { transform: "translateX(-100%)", opacity: 0 } })),
                I = o.memo(w),
                _ = r.Z,
                T = n.Z,
                S = () => {
                    const [e, t] = o.useState(0),
                        a = (0, p.p)(_, {}).get_payments_customer_tasks.items,
                        [n, r] = o.useState(a),
                        [l] = s()(T);
                    const d = o.useCallback(
                        (e) => {
                            l({
                                variables: { taskId: e, safetyLevel: "XPayments" },
                                onCompleted: () => {
                                    r((t) => t.filter((t) => t.id !== e));
                                },
                            });
                        },
                        [l],
                    );
                    return 0 === n.length
                        ? null
                        : o.createElement(
                              c.Z,
                              { style: D.carouselContainer },
                              o.createElement(i.ZP, null, "Things you should know"),
                              o.createElement(
                                  c.Z,
                                  { style: D.carouselOuterWrapper },
                                  o.createElement(
                                      c.Z,
                                      { style: D.carouselInnerWrapper },
                                      o.createElement(
                                          u.Z,
                                          {
                                              "aria-label": "Customer tasks carousel",
                                              childrenStyle: D.carouselChildrenStyle,
                                              onVisibleRangeChange: ({ index: e, intersectionRatio: a }) => {
                                                  return (n = e), void (1 === a && t(n));
                                                  var n;
                                              },
                                              showNavButtonsOnHover: !1,
                                          },
                                          n.map((e) => o.createElement(I, { destination: e.destination, icon: e.icon, id: e.id, key: e.id, onClose: () => d(e.id), subtitle: e.subtitle, title: e.title })),
                                      ),
                                  ),
                                  o.createElement(m.ZP, { count: n.length, max: 10, selectedIndex: e }),
                              ),
                          );
                },
                D = d.default.create((e) => ({ carouselChildrenStyle: { marginEnd: e.spaces.space8 }, carouselContainer: { marginBottom: e.spaces.space80, gap: e.spaces.space16 }, carouselOuterWrapper: { width: "100%" }, carouselInnerWrapper: { position: "relative", width: "100%" } })),
                z = o.memo(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.b889fc8a.js.map
