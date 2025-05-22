"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            var n = a(202784),
                r = a(107267),
                l = a(992942),
                o = a(529356),
                c = a(332920),
                s = a.n(c),
                i = a(198433),
                u = a(736063),
                m = a(514639),
                d = a(445664);
            const p = s().j24c37b2,
                y = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: a } = (0, d.Z)({ fetchKey: "Payments" }),
                        c = n.useCallback(() => {
                            t.replace(a ? m.gp : "/");
                        }, [t, a]),
                        s = n.useCallback(({ style: e }) => n.createElement(l.Z, { "aria-label": "", source: i, style: e }), []);
                    return n.createElement(o.Z, { actionLabel: p, enableMaskForDismiss: !0, graphic: s, graphicDisplayMode: "illustration", headline: "Your account is under review", isFullHeightOnMobile: !0, onAction: c, onClose: c, subtext: "We are reviewing your account. Please check back later.", supportUrl: m.N6 });
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
                o = a(782642),
                c = a(514639),
                s = a(725516),
                i = a(160144);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, s.z)(),
                        l = (0, o.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const u = n.useCallback(
                        (e) => {
                            const { message: a } = e.data;
                            switch (a) {
                                case i.T.success:
                                    t.replace(c.iE.securityPrivacy), l({ text: "You PIN has been successfuly changed." });
                                    break;
                                case i.T.forgotPin:
                                    t.push(c.jR, { challengeInitiator: c.kW.forgotPin });
                            }
                        },
                        [t, l],
                    );
                    return n.createElement(i.Z, { eventCallback: u, linkType: c.P_.updatePin });
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
                o = a(529356),
                c = a(198433),
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
                        m = n.useCallback(({ style: e }) => n.createElement(l.Z, { "aria-label": "", source: c, style: e }), []);
                    return n.createElement(o.Z, { actionLabel: "Contact support", enableMaskForDismiss: !0, graphic: m, graphicDisplayMode: "illustration", headline: "We were unable to verify your identity", isFullHeightOnMobile: !0, onAction: s, onClose: u, subtext: "Please reach out to customer support for further assistance." });
                },
                m = { context: "PAYMENTS_NOT_AVAILABLE" },
                d = (e) => n.createElement(s.H, { errorConfig: m }, n.createElement(u, e)),
                p = n.memo(d);
        },
        162827: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                r = a(805322);
            const l = (e) => n.createElement(r.Z, e),
                o = n.memo(l);
        },
        516813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var n = a(202784),
                r = a(107267),
                l = a(736063),
                o = a(514639),
                c = a(725516),
                s = a(160144);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, c.z)(),
                        l = (0, r.useParams)(),
                        i = o.Kc[l.tier ?? o.Kc.tier2],
                        u = t.location?.state,
                        m = u?.redirectPath,
                        d = u?.closePath,
                        p = u?.redirectState,
                        y = u?.requestedField,
                        h = u?.challengeId,
                        f = u?.challengeInitiator,
                        { linkType: g } = o.AU[i];
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
            a.r(t), a.d(t, { default: () => v });
            var n = a(202784),
                r = a(107267),
                l = a(736063),
                o = a(725516),
                c = (a(136728), a(325686)),
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
                Z = () => {
                    const e = (0, o.z)(),
                        t = (0, d.p)(),
                        a = (0, r.useHistory)(),
                        l = (0, h.jh)(),
                        f = a.location?.state?.redirectPath,
                        g = a.location?.state?.paymentMethodId,
                        [b, E] = k(),
                        Z = n.useCallback(() => {
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
                        x = n.useCallback(() => {
                            a.push(f ?? p.gp);
                        }, [a, f]),
                        C = n.createElement(c.Z, { style: l.footer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(s.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(i.ZP, { disabled: E, onPress: Z, size: "large", type: "primaryFilled" }, E ? n.createElement(u.Z, null) : "Continue"));
                    return n.createElement(m.Z, { backButtonType: "close", bottomBar: C, history: a, onBackClick: x, withoutBottomBarMobile: !0 }, n.createElement(c.Z, { style: l.container }, n.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                x = n.memo(Z),
                C = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, o.z)(),
                        l = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: l, action: "impression" });
                        }, [a, l]),
                        n.createElement(x, null)
                    );
                },
                w = { context: "VerifyPaymentMethod" };
            function P(e) {
                return n.createElement(l.H, { errorConfig: w }, n.createElement(C, e));
            }
            const v = n.memo(P);
        },
        152837: (e, t, a) => {
            a.r(t), a.d(t, { VerifyYourIdentityScreen: () => k, default: () => w, styles: () => C });
            var n = a(202784),
                r = a(325686),
                l = a(530525),
                o = a(439592),
                c = a(731708),
                s = a(154003),
                i = a(392237),
                u = a(468670),
                m = a(812140),
                d = a(553771),
                p = a(994600),
                y = a(980407),
                h = a(652904),
                f = a(736063),
                g = a(293115),
                b = a(743080);
            const E = { page: "money", section: "setup-direct-deposit" },
                k = (e) => {
                    const t = (0, b.jh)();
                    return n.createElement(h.Z, null, n.createElement(r.Z, { style: t.container }, n.createElement(r.Z, { style: C.headerContainer }, n.createElement(r.Z, { style: C.iconContainer }, n.createElement(l.Z, { "aria-label": "Verify your identity icon", aspectMode: o.Z.SQUARE, image: p })), n.createElement(r.Z, { style: C.titleContainer }, n.createElement(c.ZP, { color: "text", size: "title1" }, "Verify your identity"), n.createElement(c.ZP, { color: "gray800", size: "body", weight: "normal" }, "Unlock the full benefits of X Money by confirming who you are."))), n.createElement(r.Z, { style: C.benefitsContainer }, n.createElement(r.Z, { style: C.benefitRow }, n.createElement(u.default, { style: C.benefitIcon }), n.createElement(r.Z, { style: C.benefitContent }, n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "medium" }, "Military grade encryption"), n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), n.createElement(r.Z, { style: C.benefitRow }, n.createElement(m.default, { style: C.benefitIcon }), n.createElement(r.Z, { style: C.benefitContent }, n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "medium" }, "Unlock your account"), n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), n.createElement(r.Z, { style: C.benefitRow }, n.createElement(d.default, { style: C.benefitIcon }), n.createElement(r.Z, { style: C.benefitContent }, n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "medium" }, "Unlock your account"), n.createElement(c.ZP, { size: "body", style: C.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                Z = { context: "VERIFY_YOUR_IDENTITY" },
                x = (e) => {
                    const { history: t } = e,
                        a = (0, b.jh)(),
                        l = n.useCallback(() => t.goBack(), [t]),
                        o = n.createElement(r.Z, { style: a.footer }, n.createElement(s.ZP, { backgroundColor: "whiteOnColor", color: "alwaysBlack", onClick: l }, "Let's do it"), n.createElement(c.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                    return n.createElement(y.Z, { backButtonType: "close", bottomBar: o, history: t, onBackClick: l }, n.createElement(g.nO, { namespace: E }, n.createElement(f.H, { errorConfig: Z }, n.createElement(k, e))));
                },
                C = i.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16, gap: e.spaces.space40, marginTop: e.spaces.space24 }, headerContainer: { gap: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                w = n.memo(x);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                o = a(952428),
                c = a(823161),
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
                Z = ({ account: e, calculatedFee: t, handleRemove: a, isDisabled: p, isSelected: Z, onClick: C, withChevron: w, withInteractiveStyling: P }) => {
                    const v = e.id,
                        I = e.config,
                        { Icon: _, fees: D, settleTimeMessage: T } = I ?? {},
                        M = !p && (P ?? !!C),
                        z = r.useCallback(() => {
                            v && !p && C?.(v);
                        }, [v, C, p]),
                        S = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), a?.();
                            },
                            [a],
                        );
                    return r.createElement(o.Z, { onClick: M ? z : void 0, withInteractiveStyling: M }, r.createElement(l.Z, { style: x.account }, e.type === g.dX.x ? r.createElement(c.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(b.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(l.Z, { style: x.accountName }, r.createElement(s.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== g.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === g.dX.x ? r.createElement(u.Z, e.accountName) : I ? r.createElement(l.Z, { style: x.row }, r.createElement(i.ZP, { color: "gray700" }, _ ? r.createElement(_, { style: x.icon }) : null, T), D ? r.createElement(E.Z, { calculatedFee: t, fees: D }) : null) : e.type === g.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === g.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(m.ZP, { style: x.decoration, type: "warning" }, e.label) : null, Z ? r.createElement(y.default, { style: [x.decoration, x.selected] }) : null, a ? r.createElement(d.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(h.default, null), onClick: S, size: "small", style: x.decoration, testID: "btn-remove", type: "destructiveText" }) : null, w ? r.createElement(f.default, { style: x.decoration }) : null));
                },
                x = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 }, icon: { marginEnd: e.spaces.space4, alignSelf: "center" } })),
                C = r.memo(Z);
        },
        978167: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(165822),
                l = a(392237),
                o = a(782642),
                c = a(514639),
                s = a(445664),
                i = a(160144),
                u = a(743080);
            const m = ({ ariaLabel: e = "Account details container" }) => {
                    const { id: t } = (0, s.Z)({ fetchKey: "Payments" }),
                        a = (0, u.jh)(),
                        l = (0, o.p)(),
                        m = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case i.T.accountNumbercopiedToClipboard:
                                        l({ text: "Account number copied to clipboard." });
                                        break;
                                    case i.T.routingNumbercopiedToClipboard:
                                        l({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [l],
                        );
                    return n.createElement(r.Z, { "aria-label": e, containerStyle: a.tile, stackLayoutUpperStyle: d.routing, upper: t ? n.createElement(i.Z, { eventCallback: m, linkType: c.P_.accountRouting, payload: { customerId: t } }) : void 0, withInteractiveStyling: !1 });
                },
                d = l.default.create((e) => ({ routing: { height: 150 * e.scaleMultiplier } })),
                p = n.memo(m);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(932525),
                r = a(202784),
                l = a(325686),
                o = (a(585488), a(277660)),
                c = a.n(o),
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
                b = ({ data: e, fetchNext: t, type: a, withTile: n }) => {
                    const o = (0, d.jh)(),
                        b = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(y.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(p.Z, { itemRef: a, key: a.__id, supportLink: e }) : null), [e, t]))({ supportLink: (0, m.b)({}), type: a }),
                        E = e?.get_payments_customer_actions,
                        { items: k } = c()(h, E) ?? { items: [] },
                        Z = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: g, items: k, onNearEnd: t, renderer: b, role: "list", withoutHeadroom: !0 });
                    return k.length > 0 ? r.createElement(l.Z, null, "transaction" === a ? r.createElement(l.Z, { style: d.ZP.header }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, f)) : null, n ? r.createElement(i.Z, { "aria-label": f, containerStyle: o.tile, stackLayoutUpperStyle: d.ZP.upper, upper: Z, withInteractiveStyling: !1 }) : Z) : null;
                },
                E = r.memo(b);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                o = a(392237),
                c = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = c.NU.balance, shouldCenterAlign: a = !1, currency: o, size: i = "title1", weight: u = "bold", hasCompleted: d = !1, style: p }) {
                const y = parseFloat(e),
                    h = n.useMemo(
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
                            })({ type: t, amount: y, hasCompleted: d }),
                        [t, y, d],
                    ),
                    f = n.useMemo(() => ((e) => (e === c.NU.credit ? "+" : ""))(t), [t]),
                    g = n.useMemo(() => (0, s.vw)({ amount: e, currency: o }), [e, o]);
                return n.createElement(r.Z, { style: [a ? m.alignCenter : void 0, ...([p] ?? 0)] }, n.createElement(l.ZP, { color: h, size: i, weight: u }, `${f}${g}`));
            }
            const u = n.memo(i),
                m = o.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                o = a(731708),
                c = a(855488),
                s = a(392237),
                i = a(97882),
                u = a(727384);
            const m = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, i.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(l.Z, { style: h.currency }, r.createElement(o.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: a, max: l = "9999999", min: o = "0", setAmount: s, setIsValid: i, validateBalance: p, ...y }) {
                const { available_amount_local_micro: f, currency: g } = t ?? {},
                    b = parseFloat(f),
                    E = f ? (0, u.p2)({ amount: b, currency: g }) : null,
                    k = (0, u.dN)({ amount: b }),
                    Z = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                a = parseFloat(o),
                                n = parseFloat(l);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= a && t <= n && (!p || t <= k);
                        },
                        [k, l, o, p],
                    ),
                    x = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (s(t), i(Z(t)));
                        },
                        [s, i, Z],
                    ),
                    C = r.useCallback(
                        ({ target: e }) => {
                            x(e.value);
                        },
                        [x],
                    ),
                    w = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            x(t);
                        },
                        [x],
                    ),
                    P = !a && p && parseFloat(e) > k ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    c.Z,
                    (0, n.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: P,
                            helperText: E ? m({ amount: E }) : void 0,
                            invalid: !a,
                            max: l,
                            min: o,
                            onChange: C,
                            onKeyPress: (e) => {
                                ("-" !== e.key && "e" !== e.key && "E" !== e.key) || e.preventDefault();
                            },
                            onPaste: w,
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
            a.d(t, { G7: () => C, KR: () => w, qn: () => v });
            var n = a(807896),
                r = a(202784),
                l = a(45843),
                o = a(325686),
                c = a(392237),
                s = a(684008),
                i = a(72591),
                u = a(297896),
                m = a(748138),
                d = a(913315),
                p = a(734767),
                y = a(286555),
                h = a(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                g = { [f.small]: { width: c.default.theme.spacesPx.space16, height: c.default.theme.spacesPx.space16 }, [f.xLarge]: { width: c.default.theme.spacesPx.space40, height: c.default.theme.spacesPx.space40 }, [f.xxxLarge]: { width: c.default.theme.spaces.space56, height: c.default.theme.spaces.space56 }, [f.xJumbo]: { width: c.default.theme.spaces.space80, height: c.default.theme.spaces.space80 } },
                b = { [f.small]: { width: c.default.theme.spacesPx.space8, height: c.default.theme.spacesPx.space8 }, [f.xLarge]: { width: c.default.theme.spacesPx.space20, height: c.default.theme.spacesPx.space20 }, [f.xxxLarge]: { width: c.default.theme.spaces.space28, height: c.default.theme.spaces.space28 }, [f.xJumbo]: { width: c.default.theme.spaces.space40, height: c.default.theme.spaces.space40 } },
                E = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(l.Z, { source: { uri: a }, style: [I.rounded, I.logo, g[t]] }) : r.createElement(o.Z, { style: [g[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, b[t]] }))),
                k = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: s.default })),
                Z = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: u.default, [h.wC.card]: s.default, [h.wC.atm]: m.default },
                x = { [h.Ms.atm]: m.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: u.default, [h.Ms.interest]: d.default, [h.Ms.cashback]: p.default },
                C = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(E, (0, n.Z)({}, a, { Icon: Z[t] }));
                },
                w = ({ type: e, ...t }) => r.createElement(E, (0, n.Z)({}, t, { Icon: x[e] })),
                P = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: y.default })),
                v = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(P, t) : e === h.dX.card ? r.createElement(k, t) : null),
                I = c.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        819404: (e, t, a) => {
            a.d(t, { Z: () => z });
            var n = a(415706),
                r = a(991744),
                l = a(202784),
                o = a(325686),
                c = (a(585488), a(351743)),
                s = a.n(c),
                i = a(731708),
                u = a(174326),
                m = a(680665),
                d = a(392237),
                p = a(535338),
                y = a(952428),
                h = a(154003),
                f = a(530525),
                g = a(439592),
                b = a(837020),
                E = a(656805),
                k = a(287688),
                Z = a(994600),
                x = a(988600),
                C = a(514639);
            function w({ __typename: e }) {
                switch (e) {
                    case "XPaymentsCustomerTaskDestinationDirectDeposit":
                        return C.Hf;
                    case "XPaymentsCustomerTaskDestinationBillPay":
                        return C.rE;
                    case "XPaymentsCustomerTaskDestinationIdVerification":
                        return C.wG;
                    default:
                        return "";
                }
            }
            const P = ({ destination: e, icon: t, onClose: a, subtitle: n, title: r }) => {
                    const [c, s] = l.useState(!1),
                        u = `${r} Icon`,
                        m = l.useCallback(
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
                                        return Z;
                                    case "DirectDeposit":
                                        return k;
                                    case "BillPay":
                                        return E;
                                    case "AccountLinking":
                                        return x;
                                    default:
                                        return null;
                                }
                            return a || "";
                        })(t);
                    return l.createElement(y.Z, { link: w(e), style: [v.container, c && v.dismissing] }, l.createElement(o.Z, { style: v.contentWrapper }, l.createElement(h.ZP, { borderColor: "transparent", icon: l.createElement(b.default, { style: v.closeButtonIcon }), onClick: m, size: "smallCompact", style: v.closeButton }), l.createElement(o.Z, { style: v.content }, d && l.createElement(o.Z, { style: v.icon32 }, l.createElement(f.Z, { "aria-label": u, aspectMode: g.Z.SQUARE, image: d })), l.createElement(o.Z, { style: v.textContainer }, l.createElement(i.ZP, { align: "left", color: "text", size: "subtext1", style: { overflow: "hidden" }, weight: "medium" }, r), l.createElement(i.ZP, { align: "left", color: "gray800", size: "subtext1", weight: "normal" }, n)))));
                },
                v = d.default.create((e) => ({ icon32: { height: e.spaces.space32, width: e.spaces.space32 }, container: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer", flexGrow: 1, width: "280px" }, contentWrapper: { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }, closeButton: { position: "absolute", top: "-12px", end: "-8px", zIndex: 1 }, closeButtonIcon: { fill: e.colors.gray800, height: e.spaces.space20, width: e.spaces.space20 }, content: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%", height: "100%" }, icon: { width: e.spaces.space32, height: e.spaces.space32, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, backgroundSize: "cover", backgroundPosition: "center" }, textContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, overflow: "hidden" }, dismissing: { transform: "translateX(-100%)", opacity: 0 } })),
                I = l.memo(P),
                _ = r.Z,
                D = n.Z,
                T = () => {
                    const [e, t] = l.useState(0),
                        a = (0, p.p)(_, {}).get_payments_customer_tasks.items,
                        [n, r] = l.useState(a),
                        [c] = s()(D);
                    const d = l.useCallback(
                        (e) => {
                            c({
                                variables: { taskId: e, safetyLevel: "XPayments" },
                                onCompleted: () => {
                                    r((t) => t.filter((t) => t.id !== e));
                                },
                            });
                        },
                        [c],
                    );
                    return 0 === n.length
                        ? null
                        : l.createElement(
                              o.Z,
                              { style: M.carouselContainer },
                              l.createElement(i.ZP, null, "Things you should know"),
                              l.createElement(
                                  o.Z,
                                  null,
                                  l.createElement(
                                      u.Z,
                                      {
                                          "aria-label": "Customer tasks carousel",
                                          childrenStyle: M.carouselChildrenStyle,
                                          onVisibleRangeChange: ({ index: e, intersectionRatio: a }) => {
                                              return (n = e), void (1 === a && t(n));
                                              var n;
                                          },
                                          showNavButtonsOnHover: !1,
                                      },
                                      n.map((e) => l.createElement(I, { destination: e.destination, icon: e.icon, id: e.id, key: e.id, onClose: () => d(e.id), subtitle: e.subtitle, title: e.title })),
                                  ),
                                  l.createElement(m.ZP, { count: n.length, max: 10, selectedIndex: e }),
                              ),
                          );
                },
                M = d.default.create((e) => ({ carouselChildrenStyle: { marginEnd: e.spaces.space8 }, carouselContainer: { marginBottom: e.spaces.space80, gap: e.spaces.space16 } })),
                z = l.memo(T);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.2f8c44aa.js.map
