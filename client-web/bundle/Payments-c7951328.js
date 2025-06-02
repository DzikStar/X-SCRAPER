"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
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
                d = { context: "PAYMENTS_REVIEW" },
                u = (e) => n.createElement(o.H, { errorConfig: d }, n.createElement(i, e)),
                m = n.memo(u);
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
            const d = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, s.z)(),
                        o = (0, c.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const d = n.useCallback(
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
                    return n.createElement(i.Z, { eventCallback: d, linkType: l.P_.updatePin });
                },
                u = { context: "UpdatePin" };
            function m(e) {
                return n.createElement(o.H, { errorConfig: u }, n.createElement(d, e));
            }
            const p = n.memo(m);
        },
        261423: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
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
                d = (e) => n.createElement(o.H, { errorConfig: i }, n.createElement(s, e)),
                u = n.memo(d);
        },
        162827: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(805322);
            const o = (e) => n.createElement(r.Z, e),
                c = n.memo(o);
        },
        516813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
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
                        d = t.location?.state,
                        u = d?.redirectPath,
                        m = d?.closePath,
                        p = d?.redirectState,
                        y = d?.requestedField,
                        h = d?.challengeId,
                        g = d?.challengeInitiator,
                        { linkType: f } = c.AU[i];
                    return (
                        n.useEffect(() => {
                            a && i && a.scribe({ page: "money", section: "verify-identity", component: i, action: "impression" });
                        }, [a, i]),
                        n.createElement(s.Z, { additionalParams: y ? [{ key: "requestedField", value: y }] : void 0, challengeId: h, challengeInitiator: g, closePath: m, linkType: f, redirectPath: u, redirectState: p })
                    );
                },
                d = { context: "VerifyIdentity" };
            function u(e) {
                return n.createElement(o.H, { errorConfig: d }, n.createElement(i, e));
            }
            const m = n.memo(u);
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
                d = a(167630),
                u = a(980407),
                m = a(782642),
                p = a(514639),
                y = a(43429),
                h = a(743080),
                g = a(388768),
                f = (a(585488), a(351743)),
                b = a.n(f);
            const E = g.Z,
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
                C = () => {
                    const e = (0, c.z)(),
                        t = (0, m.p)(),
                        a = (0, r.useHistory)(),
                        o = (0, h.jh)(),
                        g = a.location?.state?.redirectPath,
                        f = a.location?.state?.paymentMethodId,
                        [b, E] = x(),
                        C = n.useCallback(() => {
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
                        k = n.useCallback(() => {
                            a.push(g ?? p.gp);
                        }, [a, g]),
                        Z = n.createElement(l.Z, { style: o.footer }, n.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(s.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(i.ZP, { disabled: E, onPress: C, size: "large", type: "primaryFilled" }, E ? n.createElement(d.Z, null) : "Continue"));
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: Z, history: a, onBackClick: k, withoutBottomBarMobile: !0 }, n.createElement(l.Z, { style: o.container }, n.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                k = n.memo(C),
                Z = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, c.z)(),
                        o = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: o, action: "impression" });
                        }, [a, o]),
                        n.createElement(k, null)
                    );
                },
                w = { context: "VerifyPaymentMethod" };
            function P(e) {
                return n.createElement(o.H, { errorConfig: w }, n.createElement(Z, e));
            }
            const v = n.memo(P);
        },
        152837: (e, t, a) => {
            a.r(t), a.d(t, { VerifyYourIdentityScreen: () => k, default: () => I, styles: () => v });
            var n = a(202784),
                r = a(325686),
                o = a(530525),
                c = a(439592),
                l = a(731708),
                s = a(154003),
                i = a(392237),
                d = a(468670),
                u = a(812140),
                m = a(553771),
                p = a(994600),
                y = a(980407),
                h = a(652904),
                g = a(736063),
                f = a(445664),
                b = a(293115),
                E = a(743080),
                x = a(727384);
            const C = { page: "money", section: "setup-direct-deposit" },
                k = (e) => {
                    const t = (0, E.jh)();
                    return n.createElement(h.Z, null, n.createElement(r.Z, { style: t.container }, n.createElement(r.Z, { style: v.headerContainer }, n.createElement(r.Z, { style: v.iconContainer }, n.createElement(o.Z, { "aria-label": "Verify your identity icon", aspectMode: c.Z.SQUARE, image: p })), n.createElement(r.Z, { style: v.titleContainer }, n.createElement(l.ZP, { color: "text", size: "title1", weight: "bold" }, "Verify your identity"), n.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, "Unlock the full benefits of X Money by confirming who you are."))), n.createElement(r.Z, { style: v.benefitsContainer }, n.createElement(r.Z, { style: v.benefitRow }, n.createElement(d.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Military grade encryption"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(u.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(m.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                Z = { context: "VERIFY_YOUR_IDENTITY" },
                w = () => {
                    const e = (0, E.jh)(),
                        { roles: t } = (0, f.Z)({ fetchKey: "Payments" });
                    return n.createElement(r.Z, { style: e.footer }, n.createElement(s.ZP, { link: (0, x.FW)({ roles: t }), type: "primaryFilled" }, "Let's do it"), n.createElement(l.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                P = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(g.H, { errorConfig: Z }, n.createElement(y.Z, { backButtonType: "close", bottomBar: n.createElement(w, null), history: t, onBackClick: a, withoutBottomBarMobile: !0 }, n.createElement(b.nO, { namespace: C }, n.createElement(g.H, { errorConfig: Z }, n.createElement(k, e)))));
                },
                v = i.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24, marginTop: e.spaces.space40, marginBottom: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                I = n.memo(P);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                c = a(952428),
                l = a(823161),
                s = a(470397),
                i = a(731708),
                d = a(366635),
                u = a(868634),
                m = a(154003),
                p = a(392237),
                y = a(293723),
                h = a(58399),
                g = a(607127),
                f = a(487552),
                b = a(43429),
                E = a(743080),
                x = a(477922),
                C = a(770585);
            const k = "Remove linked account",
                Z = ({ account: e, calculatedFee: t, handleExpand: a, handleRemove: p, isDisabled: Z, isSelected: P, onClick: v, withChevron: I, withInteractiveStyling: T }) => {
                    const _ = e.id,
                        M = e.config,
                        { Icon: R, fees: S, settleTimeMessage: z } = M ?? {},
                        D = !Z && (T ?? !(!v && !a)),
                        L = r.useCallback(() => {
                            a ? a() : _ && !Z && v?.(_);
                        }, [_, v, a, Z]),
                        B = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), p?.();
                            },
                            [p],
                        );
                    return r.createElement(c.Z, { onClick: D ? L : void 0, withInteractiveStyling: D && !a }, r.createElement(o.Z, { style: E.mR.container }, e.type === b.dX.x ? r.createElement(l.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(x.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(o.Z, { style: E.mR.middle }, r.createElement(s.Z, null, r.createElement(i.ZP, null, e.accountType ?? e.brandName), e.type !== b.dX.x ? r.createElement(i.ZP, null, e.accountName.name) : null), e.type === b.dX.x ? r.createElement(d.Z, e.accountName) : M ? r.createElement(o.Z, { style: E.mR.row }, r.createElement(i.ZP, { color: "gray700" }, R ? r.createElement(R, { style: E.mR.icon }) : null, z), S ? r.createElement(C.Z, { calculatedFee: t, fees: S }) : null) : e.type === b.dX.card ? r.createElement(i.ZP, { color: "gray700" }, "Debit Card") : e.type === b.dX.bank ? r.createElement(i.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(u.ZP, { style: w.decoration, type: "warning" }, e.label) : null, P ? r.createElement(y.default, { style: [w.decoration, w.selected] }) : null, a ? r.createElement(h.default, { style: w.decoration }) : p ? r.createElement(m.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(g.default, null), onClick: B, size: "small", style: w.decoration, testID: "btn-remove", type: "destructiveText" }) : null, I ? r.createElement(f.default, { style: w.decoration }) : null));
                },
                w = p.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space16, display: "flex" }, row: { gap: e.spaces.space4, flexDirection: "row" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 } })),
                P = r.memo(Z);
        },
        600568: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(325686),
                o = a(138099),
                c = a(154003),
                l = a(392237),
                s = a(392046);
            const i = ({ account: e, onDone: t, onRemove: a }) => n.createElement(o.Z, { onMaskClick: t, type: "bottom", withMask: !0 }, n.createElement(r.Z, { style: d.container }, n.createElement(r.Z, { style: d.accountContainer }, n.createElement(s.Z, { account: e, withInteractiveStyling: !1 })), n.createElement(r.Z, { style: d.buttonContainer }, a ? n.createElement(c.ZP, { onPress: a, size: "large", style: d.button, type: "destructiveFilled" }, "Unlink account") : null, n.createElement(c.ZP, { onPress: t, size: "large", style: d.button, type: "primaryOutlined" }, "Done")))),
                d = l.default.create((e) => ({ container: { padding: e.spaces.space16, gap: e.spaces.space24 }, accountContainer: { paddingVertical: e.spaces.space16 }, buttonContainer: { gap: e.spaces.space12 }, button: { width: "100%" } })),
                u = n.memo(i);
        },
        978167: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(165822),
                o = a(392237),
                c = a(782642),
                l = a(514639),
                s = a(445664),
                i = a(160144);
            const d = ({ ariaLabel: e = "Account details container", variant: t }) => {
                    const { id: a } = (0, s.Z)({ fetchKey: "Payments" }),
                        o = (0, c.p)(),
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
                    return n.createElement(r.Z, { "aria-label": e, containerStyle: u.container, stackLayoutUpperStyle: "xl" === t ? u.routingXl : u.routing, upper: a ? n.createElement(i.Z, { eventCallback: d, linkType: l.P_.accountRouting, payload: { customerId: a, variant: t } }) : void 0, withInteractiveStyling: !1 });
                },
                u = o.default.create((e) => ({ routing: { height: e.spaces.space80 }, routingXl: { height: 150 }, container: { padding: 0 } })),
                m = n.memo(d);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(932525),
                r = a(202784),
                o = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                s = a(165822),
                i = a(731708),
                d = a(392237),
                u = a(965245),
                m = a(137882),
                p = a(743080),
                y = a(743250),
                h = a(519901);
            const g = n.Z,
                f = "Action required",
                b = ({ __id: e }) => e,
                E = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(h.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(s.Z, { "aria-label": f, containerStyle: x.noticeTile, stackLayoutUpperStyle: p.ZP.upper, upper: r.createElement(y.Z, { itemRef: a, key: a.__id, supportLink: e }), withInteractiveStyling: !1 }) : null), [e, t]))({ supportLink: (0, m.b)({}), type: a }),
                        c = e?.get_payments_customer_actions,
                        { items: d } = l()(g, c) ?? { items: [] },
                        E = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: b, items: d, onNearEnd: t, renderer: n, role: "list", withoutHeadroom: !0 });
                    return d.length > 0 ? r.createElement(o.Z, { style: "notice" === a ? x.noticeContainer : void 0 }, "transaction" === a ? r.createElement(o.Z, { style: p.ZP.header }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, f)) : null, E) : null;
                },
                x = d.default.create((e) => ({ noticeTile: { backgroundColor: e.colors.gray0, marginTop: e.spaces.space8 }, noticeContainer: { marginTop: `-${e.spaces.space8}` } })),
                C = r.memo(E);
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
        189305: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(807896),
                r = a(202784),
                o = a(286555),
                c = a(295747),
                l = a(335091),
                s = a(805693);
            const i = (e) => r.createElement(c.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: l.R.Ach, debitMethod: s.t.Ach, label: "Link a bank account", name: "add-bank-account" }, e)),
                d = r.memo(i);
        },
        281838: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(807896),
                r = a(202784),
                o = a(684008),
                c = a(295747),
                l = a(335091),
                s = a(805693);
            const i = (e) => r.createElement(c.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: l.R.Aft, debitMethod: s.t.Oct, label: "Link a card", name: "add-card" }, e)),
                d = r.memo(i);
        },
        295747: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(202784),
                r = a(325686),
                o = a(952428),
                c = a(731708),
                l = a(392237),
                s = a(379327),
                i = a(58399),
                d = a(43429),
                u = a(743080),
                m = a(727384),
                p = a(477922),
                y = a(442880),
                h = a(19804),
                g = a(770585);
            const f = ({ MethodIcon: e, creditMethod: t, debitMethod: a, disabled: l = !1, label: f, link: E, methodConfigs: x, name: C, transferDirection: k, variant: Z }) => {
                    const w = k && x ? (0, m.NG)({ transferDirection: k, methodConfigs: x, debitMethod: a, creditMethod: t }) : void 0,
                        { Icon: P, fees: v, processingTime: I, settleTimeMessage: T } = w ?? {};
                    return "tile" === Z ? n.createElement(h.Z, { Icon: e, decoration: n.createElement(y.Z, { processingTime: I }), link: E, subtitle: k === d.Rz.debit && v ? n.createElement(g.C, { fees: v }) : null, title: f }) : "row" === Z ? n.createElement(o.Z, { disabled: l, link: E, style: b.addPaymentMethodButtonContainer, withInteractiveStyling: !1 }, n.createElement(r.Z, { style: b.addPaymentMethodIconTextContainer }, n.createElement(p.zU, { Icon: s.default, size: "xxxLarge" }), n.createElement(c.ZP, { size: "subtext1", weight: "medium" }, f)), n.createElement(i.default, { style: b.addPaymentMethodButtonChevron })) : n.createElement(o.Z, { "aria-label": f, key: C, link: E, withInteractiveStyling: !0 }, n.createElement(r.Z, { style: u.mR.container }, n.createElement(p.zU, { Icon: s.default, size: "xxxLarge" }), n.createElement(r.Z, { style: u.mR.middle }, n.createElement(c.ZP, null, f), w ? n.createElement(r.Z, { style: u.mR.row }, n.createElement(c.ZP, { color: "gray700" }, P ? n.createElement(P, { style: u.mR.icon }) : null, T), v ? n.createElement(g.Z, { fees: v }) : null) : null)));
                },
                b = l.default.create((e) => ({ addPaymentMethodButtonContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: e.spaces.space16 }, addPaymentMethodIconTextContainer: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space16 }, addPaymentMethodButtonChevron: { width: e.spaces.space24, height: e.spaces.space24, fill: e.colors.gray700 } })),
                E = n.memo(f);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                c = a(392237),
                l = a(43429),
                s = a(727384);
            function i({ amount: e, type: t = l.NU.balance, shouldCenterAlign: a = !1, currency: c, size: i = "title1", weight: d = "bold", hasCompleted: m = !1, style: p }) {
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
                            })({ type: t, amount: y, hasCompleted: m }),
                        [t, y, m],
                    ),
                    g = n.useMemo(() => ((e) => (e === l.NU.credit ? "+" : ""))(t), [t]),
                    f = n.useMemo(() => (0, s.vw)({ amount: e, currency: c }), [e, c]);
                return n.createElement(r.Z, { style: [a ? u.alignCenter : void 0, ...([p] ?? 0)] }, n.createElement(o.ZP, { color: h, size: "title0" === i ? void 0 : i, style: "title0" === i ? { fontSize: "48px" } : {}, weight: d }, `${g}${f}`));
            }
            const d = n.memo(i),
                u = c.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                r = a(325686),
                o = a(3348),
                c = a(731708),
                l = a(392237),
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
            function p({ amount: e, balance: t, isValid: a, max: l = "9999999", min: s = "0", setAmount: p, setIsValid: y, validateBalance: g, ...f }) {
                const [b, E] = n.useState(!1),
                    { available_amount_local_micro: x, currency: C } = t ?? {},
                    k = parseFloat(x),
                    Z = (x && (0, i.p2)({ amount: k, currency: C }), (0, i.dN)({ amount: k })),
                    w = n.useCallback(
                        (e) => {
                            const t = m(e),
                                a = parseFloat(t),
                                n = parseFloat(s),
                                r = parseFloat(l);
                            return /^\d*(\.\d{1,2})?$/.test(t) && a > 0 && a >= n && a <= r && (!g || a <= Z);
                        },
                        [Z, l, s, g],
                    ),
                    P = n.useCallback(
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
                                r = parseFloat(l);
                            (!isNaN(n) && n > r) || ((n >= 0 || "" === t || "." === t) && (p(t), y(w(t))));
                        },
                        [p, y, w, l],
                    ),
                    v = n.useCallback(
                        ({ target: e }) => {
                            P(e.value);
                        },
                        [P],
                    ),
                    I = n.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            P(t);
                        },
                        [P],
                    ),
                    T = n.useCallback(() => {
                        E(!0);
                    }, []),
                    _ = n.useCallback(() => {
                        E(!1);
                    }, []),
                    M = n.useCallback(
                        () =>
                            !a && e
                                ? (function (e, t, a, n, r) {
                                      const o = m(e),
                                          c = parseFloat(o),
                                          l = parseFloat(t),
                                          s = parseFloat(a);
                                      return c <= 0 ? "Amount must be greater than $0" : c < l ? `Amount must be at least $${d(t)}` : c > s ? `Amount cannot exceed $${d(a)}` : n && c > r ? "Your balance is insufficient for this transfer." : null;
                                  })(e, s, l, g, Z)
                                : null,
                        [a, e, s, l, g, Z],
                    )(),
                    R = ((e) => {
                        if (!e || "" === e) return "";
                        const t = m(e);
                        return "" === t ? "" : `${u()}${d(t)}`;
                    })(e);
                return n.createElement(
                    r.Z,
                    null,
                    n.createElement(
                        r.Z,
                        { style: [h.amountInputContainer, M ? h.amountInputContainerError : null] },
                        n.createElement(o.Z, {
                            autoFocus: !0,
                            invalid: !a,
                            max: l,
                            min: s,
                            onBlur: _,
                            onChange: v,
                            onFocus: T,
                            onKeyDown: (e) => {
                                -1 !== [8, 9, 27, 13, 46].indexOf(e.keyCode) || (65 === e.keyCode && !0 === e.ctrlKey) || (67 === e.keyCode && !0 === e.ctrlKey) || (86 === e.keyCode && !0 === e.ctrlKey) || (88 === e.keyCode && !0 === e.ctrlKey) || ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && 190 !== e.keyCode && 110 !== e.keyCode && e.preventDefault());
                            },
                            onPaste: I,
                            placeholder: `${u()}0`,
                            placeholderTextColor: h.placeholder.color,
                            style: [h.amountInput, b && h.amountInputFocused],
                            testID: "amount-input",
                            type: "text",
                            value: R,
                        }),
                    ),
                    n.createElement(r.Z, { style: h.errorContainer }, M && n.createElement(c.ZP, { style: h.errorText }, M)),
                );
            }
            const y = n.memo(p),
                h = l.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { padding: e.spaces.space24, width: "100%", height: "120px", textAlign: "center", fontSize: "64px", fontWeight: e.fontWeights.bold, color: e.colors.text, backgroundColor: "transparent", border: "none", letterSpacing: "-0.05px" }, amountInputContainer: { borderWidth: e.spaces.space1, borderColor: e.colors.gray200, borderRadius: e.spaces.space12 }, amountInputContainerError: { borderColor: e.colors.red500 }, placeholder: { color: e.colors.gray400 }, errorContainer: { justifyContent: "flex-start" }, errorText: { color: e.colors.red500, fontSize: e.fontSizes.subtext3 }, amountInputFocused: { outlineColor: e.colors.gray200, borderRadius: e.spaces.space12 } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => Z, KR: () => w, qn: () => v, zU: () => E });
            var n = a(807896),
                r = a(202784),
                o = a(45843),
                c = a(325686),
                l = a(392237),
                s = a(684008),
                i = a(72591),
                d = a(297896),
                u = a(748138),
                m = a(913315),
                p = a(734767),
                y = a(286555),
                h = a(43429);
            const g = Object.freeze({ small: "small", xLarge: "xLarge", xxLarge: "xxLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                f = { [g.small]: { width: l.default.theme.spacesPx.space16, height: l.default.theme.spacesPx.space16 }, [g.xLarge]: { width: l.default.theme.spacesPx.space40, height: l.default.theme.spacesPx.space40 }, [g.xxLarge]: { width: l.default.theme.spacesPx.space48, height: l.default.theme.spacesPx.space48 }, [g.xxxLarge]: { width: l.default.theme.spaces.space56, height: l.default.theme.spaces.space56 }, [g.xJumbo]: { width: l.default.theme.spaces.space80, height: l.default.theme.spaces.space80 } },
                b = { [g.small]: { width: l.default.theme.spacesPx.space8, height: l.default.theme.spacesPx.space8 }, [g.xLarge]: { width: l.default.theme.spacesPx.space20, height: l.default.theme.spacesPx.space20 }, [g.xxLarge]: { width: l.default.theme.spacesPx.space24, height: l.default.theme.spacesPx.space24 }, [g.xxxLarge]: { width: l.default.theme.spaces.space28, height: l.default.theme.spaces.space28 }, [g.xJumbo]: { width: l.default.theme.spaces.space40, height: l.default.theme.spaces.space40 } },
                E = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(o.Z, { source: { uri: a }, style: [I.rounded, I.logo, f[t]] }) : r.createElement(c.Z, { style: [f[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, b[t]] }))),
                x = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: s.default })),
                C = { [h.wC.bankDeposit]: i.default, [h.wC.bankWithdraw]: d.default, [h.wC.card]: s.default, [h.wC.atm]: u.default },
                k = { [h.Ms.atm]: u.default, [h.Ms.deposit]: i.default, [h.Ms.withdraw]: d.default, [h.Ms.interest]: m.default, [h.Ms.cashback]: p.default },
                Z = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(E, (0, n.Z)({}, a, { Icon: C[t] }));
                },
                w = ({ type: e, ...t }) => r.createElement(E, (0, n.Z)({}, t, { Icon: k[e] })),
                P = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: y.default })),
                v = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(P, t) : e === h.dX.card ? r.createElement(x, t) : null),
                I = l.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        819404: (e, t, a) => {
            a.d(t, { Z: () => D });
            var n = a(415706),
                r = a(991744),
                o = a(202784),
                c = a(325686),
                l = (a(585488), a(351743)),
                s = a.n(l),
                i = a(731708),
                d = a(174326),
                u = a(680665),
                m = a(392237),
                p = a(535338),
                y = a(727384),
                h = a(952428),
                g = a(154003),
                f = a(530525),
                b = a(439592),
                E = a(823406),
                x = a(656805),
                C = a(287688),
                k = a(994600),
                Z = a(988600),
                w = a(530159),
                P = a(514639);
            function v({ __typename: e }) {
                switch (e) {
                    case "XPaymentsCustomerTaskDestinationDirectDeposit":
                        return P.Hf;
                    case "XPaymentsCustomerTaskDestinationBillPay":
                        return P.rE;
                    case "XPaymentsCustomerTaskDestinationIdVerification":
                        return P.wG;
                    case "XPaymentsCustomerTaskDestinationAccountLinking":
                        return P.iE.bankAccounts;
                    case "XPaymentsCustomerTaskDestinationXCard":
                        return P.Tb;
                    default:
                        return "";
                }
            }
            const I = ({ destination: e, icon: t, onClose: a, subtitle: n, title: r }) => {
                    const [l, s] = o.useState(!1),
                        d = `${r} Icon`,
                        u = o.useCallback(
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
                        m = (function ({ __typename: e, icon_type: t, image_url: a }) {
                            if ("XPaymentsCustomerTaskPredefinedIcon" === e)
                                switch (t) {
                                    case "IdVerification":
                                        return k;
                                    case "DirectDeposit":
                                        return C;
                                    case "BillPay":
                                        return x;
                                    case "AccountLinking":
                                        return Z;
                                    case "XCard":
                                        return w;
                                    default:
                                        return null;
                                }
                            return a || "";
                        })(t);
                    return o.createElement(h.Z, { link: v(e), style: [T.container, l && T.dismissing] }, o.createElement(c.Z, { style: T.contentWrapper }, o.createElement(g.ZP, { borderColor: "transparent", icon: o.createElement(E.default, { style: T.closeButtonIcon }), onClick: u, size: "smallCompact", style: T.closeButton }), o.createElement(c.Z, { style: T.content }, m && o.createElement(c.Z, { style: T.icon32 }, o.createElement(f.Z, { "aria-label": d, aspectMode: b.Z.SQUARE, image: m })), o.createElement(c.Z, { style: T.textContainer }, o.createElement(i.ZP, { align: "left", color: "text", size: "subtext1", style: { overflow: "hidden" }, weight: "medium" }, r), o.createElement(i.ZP, { align: "left", color: "gray800", size: "subtext1", weight: "normal" }, n)))));
                },
                T = m.default.create((e) => ({ icon32: { height: e.spaces.space32, width: e.spaces.space32 }, container: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer", flexGrow: 1, width: "280px" }, contentWrapper: { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }, closeButton: { position: "absolute", top: "-12px", end: "-8px" }, closeButtonIcon: { fill: e.colors.gray900, height: e.spaces.space20, width: e.spaces.space20 }, content: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%", height: "100%" }, icon: { width: e.spaces.space32, height: e.spaces.space32, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, backgroundSize: "cover", backgroundPosition: "center" }, textContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, overflow: "hidden" }, dismissing: { transform: "translateX(-100%)", opacity: 0 } })),
                _ = o.memo(I),
                M = r.Z,
                R = n.Z,
                S = () => {
                    const [e, t] = o.useState(0),
                        a = (0, p.p)(M, {}, { fetchKey: "money-customer-tasks" }).get_payments_customer_tasks.items,
                        [n, r] = o.useState(a),
                        [l] = s()(R);
                    const m = o.useCallback(
                        (e) => {
                            l({
                                variables: { taskId: e, safetyLevel: "XPayments" },
                                onCompleted: () => {
                                    r((t) => t.filter((t) => t.id !== e));
                                },
                                updater: y.Mw,
                            });
                        },
                        [l],
                    );
                    return 0 === n.length
                        ? null
                        : o.createElement(
                              c.Z,
                              { style: z.carouselContainer },
                              o.createElement(i.ZP, null, "Things you should know"),
                              o.createElement(
                                  c.Z,
                                  { style: z.carouselOuterWrapper },
                                  o.createElement(
                                      c.Z,
                                      { style: z.carouselInnerWrapper },
                                      o.createElement(
                                          d.Z,
                                          {
                                              "aria-label": "Customer tasks carousel",
                                              childrenStyle: z.carouselChildrenStyle,
                                              onVisibleRangeChange: ({ index: e, intersectionRatio: a }) => {
                                                  return (n = e), void (1 === a && t(n));
                                                  var n;
                                              },
                                              showNavButtonsOnHover: !1,
                                              withShadow: !0,
                                          },
                                          n.map((e) => o.createElement(_, { destination: e.destination, icon: e.icon, id: e.id, key: e.id, onClose: () => m(e.id), subtitle: e.subtitle, title: e.title })),
                                      ),
                                  ),
                                  o.createElement(u.ZP, { count: n.length, max: 10, selectedIndex: e }),
                              ),
                          );
                },
                z = m.default.create((e) => ({ carouselChildrenStyle: { marginEnd: e.spaces.space8 }, carouselContainer: { gap: e.spaces.space16 }, carouselOuterWrapper: { width: "100%" }, carouselInnerWrapper: { position: "relative", width: "100%" } })),
                D = o.memo(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.95e8f4aa.js.map
