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
                i = a(827309);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: a } = (0, l.Z)({ fetchKey: "Payments" }),
                        o = n.useCallback(() => {
                            t.replace(a ? c.gp : "/");
                        }, [t, a]);
                    return n.createElement(i.Z, { actionLabel: "Got it", headline: "Your account is under review", history: t, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: c.N6 });
                },
                m = { context: "PAYMENTS_REVIEW" },
                u = (e) => n.createElement(o.H, { errorConfig: m }, n.createElement(s, e)),
                d = n.memo(u);
        },
        923509: (e, t, a) => {
            a.r(t), a.d(t, { default: () => p });
            a(136728);
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(782642),
                l = a(514639),
                i = a(725516),
                s = a(160144);
            const m = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, i.z)(),
                        o = (0, c.p)();
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [a]);
                    const m = n.useCallback(
                        (e) => {
                            const { message: a } = e.data;
                            switch (a) {
                                case s.T.success:
                                    t.replace(l.iE.securityPrivacy), o({ text: "You PIN has been successfuly changed." });
                                    break;
                                case s.T.forgotPin:
                                    t.push(l.jR, { challengeInitiator: l.kW.forgotPin });
                            }
                        },
                        [t, o],
                    );
                    return n.createElement(s.Z, { eventCallback: m, linkType: l.P_.updatePin });
                },
                u = { context: "UpdatePin" };
            function d(e) {
                return n.createElement(o.H, { errorConfig: u }, n.createElement(m, e));
            }
            const p = n.memo(d);
        },
        261423: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(827309),
                l = a(137882);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, l.b)({}),
                        o = n.useCallback(() => {
                            window.open(a, "_blank");
                        }, [a]),
                        i = n.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return n.createElement(c.Z, { actionLabel: "Contact support", headline: "We were unable to verify your identity", history: t, onAction: o, onClose: i, subtext: "Please reach out to customer support for further assistance." });
                },
                s = { context: "PAYMENTS_VERIFICATION_FAILED" },
                m = (e) => n.createElement(o.H, { errorConfig: s }, n.createElement(i, e)),
                u = n.memo(m);
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
                i = a(160144);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, l.z)(),
                        o = (0, r.useParams)(),
                        s = c.Kc[o.tier ?? c.Kc.tier2],
                        m = t.location?.state,
                        u = m?.redirectPath,
                        d = m?.closePath,
                        p = m?.redirectState,
                        y = m?.requestedField,
                        h = m?.challengeId,
                        f = m?.challengeInitiator,
                        { linkType: g } = c.AU[s];
                    return (
                        n.useEffect(() => {
                            a && s && a.scribe({ page: "money", section: "verify-identity", component: s, action: "impression" });
                        }, [a, s]),
                        n.createElement(i.Z, { additionalParams: y ? [{ key: "requestedField", value: y }] : void 0, challengeId: h, challengeInitiator: f, closePath: d, linkType: g, redirectPath: u, redirectState: p })
                    );
                },
                m = { context: "VerifyIdentity" };
            function u(e) {
                return n.createElement(o.H, { errorConfig: m }, n.createElement(s, e));
            }
            const d = n.memo(u);
        },
        891053: (e, t, a) => {
            a.r(t), a.d(t, { default: () => v });
            var n = a(202784),
                r = a(107267),
                o = a(736063),
                c = a(725516),
                l = (a(136728), a(325686)),
                i = a(731708),
                s = a(154003),
                m = a(167630),
                u = a(980407),
                d = a(782642),
                p = a(514639),
                y = a(43429),
                h = a(743080),
                f = a(388768),
                g = (a(585488), a(351743)),
                b = a.n(g);
            const E = f.Z,
                Z = () => {
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
                        [b, E] = Z(),
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
                        x = n.useCallback(() => {
                            a.push(f ?? p.gp);
                        }, [a, f]),
                        C = n.createElement(l.Z, { style: o.footer }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", n.createElement(i.ZP, { color: "text", link: y.uc, size: "subtext2" }, "Terms & Conditions")), n.createElement(s.ZP, { disabled: E, onPress: k, size: "large", type: "primaryFilled" }, E ? n.createElement(m.Z, null) : "Continue"));
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: C, history: a, onBackClick: x, withoutBottomBarMobile: !0 }, n.createElement(l.Z, { style: o.container }, n.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), n.createElement(i.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                x = n.memo(k),
                C = (e) => {
                    const t = (0, r.useHistory)(),
                        a = (0, c.z)(),
                        o = t.location?.state?.step;
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "verify-payment-method", component: o, action: "impression" });
                        }, [a, o]),
                        n.createElement(x, null)
                    );
                },
                P = { context: "VerifyPaymentMethod" };
            function w(e) {
                return n.createElement(o.H, { errorConfig: P }, n.createElement(C, e));
            }
            const v = n.memo(w);
        },
        152837: (e, t, a) => {
            a.r(t), a.d(t, { VerifyYourIdentityScreen: () => x, default: () => I, styles: () => v });
            var n = a(202784),
                r = a(325686),
                o = a(530525),
                c = a(439592),
                l = a(731708),
                i = a(154003),
                s = a(392237),
                m = a(468670),
                u = a(812140),
                d = a(553771),
                p = a(994600),
                y = a(980407),
                h = a(652904),
                f = a(736063),
                g = a(445664),
                b = a(293115),
                E = a(743080),
                Z = a(727384);
            const k = { page: "money", section: "setup-direct-deposit" },
                x = (e) => {
                    const t = (0, E.jh)();
                    return n.createElement(h.Z, null, n.createElement(r.Z, { style: t.container }, n.createElement(r.Z, { style: v.headerContainer }, n.createElement(r.Z, { style: v.iconContainer }, n.createElement(o.Z, { "aria-label": "Verify your identity icon", aspectMode: c.Z.SQUARE, image: p })), n.createElement(r.Z, { style: v.titleContainer }, n.createElement(l.ZP, { color: "text", size: "title1", weight: "bold" }, "Verify your identity"), n.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, "Unlock the full benefits of X Money by confirming who you are."))), n.createElement(r.Z, { style: v.benefitsContainer }, n.createElement(r.Z, { style: v.benefitRow }, n.createElement(m.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Military grade encryption"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(u.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), n.createElement(r.Z, { style: v.benefitRow }, n.createElement(d.default, { style: v.benefitIcon }), n.createElement(r.Z, { style: v.benefitContent }, n.createElement(l.ZP, { size: "body", style: v.shrink, weight: "medium" }, "Unlock your account"), n.createElement(l.ZP, { color: "gray700", size: "body", style: v.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                C = { context: "VERIFY_YOUR_IDENTITY" },
                P = () => {
                    const e = (0, E.jh)(),
                        { roles: t } = (0, g.Z)({ fetchKey: "Payments" });
                    return n.createElement(r.Z, { style: e.footer }, n.createElement(i.ZP, { link: (0, Z.FW)({ roles: t }), type: "primaryFilled" }, "Let's do it"), n.createElement(l.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                w = (e) => {
                    const { history: t } = e,
                        a = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(f.H, { errorConfig: C }, n.createElement(y.Z, { backButtonType: "close", bottomBar: n.createElement(P, null), history: t, onBackClick: a, withoutBottomBarMobile: !0 }, n.createElement(b.nO, { namespace: k }, n.createElement(f.H, { errorConfig: C }, n.createElement(x, e)))));
                },
                v = s.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24, marginTop: e.spaces.space40, marginBottom: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                I = n.memo(w);
        },
        392046: (e, t, a) => {
            a.d(t, { Z: () => P });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                c = a(952428),
                l = a(823161),
                i = a(470397),
                s = a(731708),
                m = a(366635),
                u = a(868634),
                d = a(154003),
                p = a(392237),
                y = a(293723),
                h = a(607127),
                f = a(487552),
                g = a(43429),
                b = a(743080),
                E = a(477922),
                Z = a(770585);
            const k = "Remove linked account",
                x = ({ account: e, calculatedFee: t, handleRemove: a, isDisabled: p, isSelected: x, onClick: P, withChevron: w, withInteractiveStyling: v }) => {
                    const I = e.id,
                        _ = e.config,
                        { Icon: T, fees: M, settleTimeMessage: R } = _ ?? {},
                        S = !p && (v ?? !!P),
                        z = r.useCallback(() => {
                            I && !p && P?.(I);
                        }, [I, P, p]),
                        L = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), a?.();
                            },
                            [a],
                        );
                    return r.createElement(c.Z, { onClick: S ? z : void 0, withInteractiveStyling: S }, r.createElement(o.Z, { style: b.mR.container }, e.type === g.dX.x ? r.createElement(l.default, (0, n.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(E.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(o.Z, { style: b.mR.middle }, r.createElement(i.Z, null, r.createElement(s.ZP, null, e.accountType ?? e.brandName), e.type !== g.dX.x ? r.createElement(s.ZP, null, e.accountName.name) : null), e.type === g.dX.x ? r.createElement(m.Z, e.accountName) : _ ? r.createElement(o.Z, { style: b.mR.row }, r.createElement(s.ZP, { color: "gray700" }, T ? r.createElement(T, { style: b.mR.icon }) : null, R), M ? r.createElement(Z.Z, { calculatedFee: t, fees: M }) : null) : e.type === g.dX.card ? r.createElement(s.ZP, { color: "gray700" }, "Debit Card") : e.type === g.dX.bank ? r.createElement(s.ZP, { color: "gray700" }, "Bank Account") : null), e.label ? r.createElement(u.ZP, { style: C.decoration, type: "warning" }, e.label) : null, x ? r.createElement(y.default, { style: [C.decoration, C.selected] }) : null, a ? r.createElement(d.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(h.default, null), onClick: L, size: "small", style: C.decoration, testID: "btn-remove", type: "destructiveText" }) : null, w ? r.createElement(f.default, { style: C.decoration }) : null));
                },
                C = p.default.create((e) => ({ decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 } })),
                P = r.memo(x);
        },
        978167: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(165822),
                o = a(392237),
                c = a(782642),
                l = a(514639),
                i = a(445664),
                s = a(160144);
            const m = ({ ariaLabel: e = "Account details container", variant: t }) => {
                    const { id: a } = (0, i.Z)({ fetchKey: "Payments" }),
                        o = (0, c.p)(),
                        m = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case s.T.accountNumbercopiedToClipboard:
                                        o({ text: "Account number copied to clipboard." });
                                        break;
                                    case s.T.routingNumbercopiedToClipboard:
                                        o({ text: "Routing number copied to clipboard." });
                                }
                            },
                            [o],
                        );
                    return n.createElement(r.Z, { "aria-label": e, containerStyle: u.container, stackLayoutUpperStyle: "xl" === t ? u.routingXl : u.routing, upper: a ? n.createElement(s.Z, { eventCallback: m, linkType: l.P_.accountRouting, payload: { customerId: a, variant: t } }) : void 0, withInteractiveStyling: !1 });
                },
                u = o.default.create((e) => ({ routing: { height: e.spaces.space80 }, routingXl: { height: 150 }, container: { padding: 0 } })),
                d = n.memo(m);
        },
        847347: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(932525),
                r = a(202784),
                o = a(325686),
                c = (a(585488), a(277660)),
                l = a.n(c),
                i = a(165822),
                s = a(731708),
                m = a(392237),
                u = a(965245),
                d = a(137882),
                p = a(743080),
                y = a(743250),
                h = a(519901);
            const f = n.Z,
                g = "Action required",
                b = ({ __id: e }) => e,
                E = ({ data: e, fetchNext: t, type: a }) => {
                    const n = (({ supportLink: e, type: t }) => r.useCallback((a) => ("transaction" === t && "XPaymentsTransaction" === a.__typename ? r.createElement(h.Z, { itemRef: a, key: a.__id }) : "notice" === t && "XPaymentsCustomerNotice" === a.__typename ? r.createElement(i.Z, { "aria-label": g, containerStyle: Z.noticeTile, stackLayoutUpperStyle: p.ZP.upper, upper: r.createElement(y.Z, { itemRef: a, key: a.__id, supportLink: e }), withInteractiveStyling: !1 }) : null), [e, t]))({ supportLink: (0, d.b)({}), type: a }),
                        c = e?.get_payments_customer_actions,
                        { items: m } = l()(f, c) ?? { items: [] },
                        E = r.createElement(u.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: b, items: m, onNearEnd: t, renderer: n, role: "list", withoutHeadroom: !0 });
                    return m.length > 0 ? r.createElement(o.Z, { style: "notice" === a ? Z.noticeContainer : void 0 }, "transaction" === a ? r.createElement(o.Z, { style: p.ZP.header }, r.createElement(s.ZP, { size: "headline2", weight: "bold" }, g)) : null, E) : null;
                },
                Z = m.default.create((e) => ({ noticeTile: { backgroundColor: e.colors.gray0, marginTop: e.spaces.space8 }, noticeContainer: { marginTop: `-${e.spaces.space8}` } })),
                k = r.memo(E);
        },
        370347: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(953035),
                c = a(743080);
            const l = (e) => {
                    const t = (0, c.jh)();
                    return r.createElement(o.Z, (0, n.Z)({}, e, { containerStyle: t.pivotTile, iconColor: "text", interactiveStyles: c.LR, isCompact: !0, textStyle: c.ZP.actionText, withInteractiveStyling: !0 }));
                },
                i = r.memo(l);
        },
        189305: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(807896),
                r = a(202784),
                o = a(286555),
                c = a(295747),
                l = a(335091),
                i = a(805693);
            const s = (e) => r.createElement(c.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: l.R.Ach, debitMethod: i.t.Ach, label: "Link a bank account", name: "add-bank-account" }, e)),
                m = r.memo(s);
        },
        281838: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(807896),
                r = a(202784),
                o = a(684008),
                c = a(295747),
                l = a(335091),
                i = a(805693);
            const s = (e) => r.createElement(c.Z, (0, n.Z)({ MethodIcon: o.default, creditMethod: l.R.Aft, debitMethod: i.t.Oct, label: "Link a card", name: "add-card" }, e)),
                m = r.memo(s);
        },
        295747: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                r = a(325686),
                o = a(952428),
                c = a(731708),
                l = a(379327),
                i = a(43429),
                s = a(743080),
                m = a(727384),
                u = a(477922),
                d = a(442880),
                p = a(19804),
                y = a(770585);
            const h = ({ MethodIcon: e, creditMethod: t, debitMethod: a, label: h, link: f, methodConfigs: g, name: b, transferDirection: E, variant: Z }) => {
                    const k = (0, m.NG)({ transferDirection: E, methodConfigs: g, debitMethod: a, creditMethod: t }),
                        { Icon: x, fees: C, processingTime: P, settleTimeMessage: w } = k ?? {};
                    return "tile" === Z ? n.createElement(p.Z, { Icon: e, decoration: n.createElement(d.Z, { processingTime: P }), link: f, subtitle: E === i.Rz.debit && C ? n.createElement(y.C, { fees: C }) : null, title: h }) : n.createElement(o.Z, { "aria-label": h, key: b, link: f, withInteractiveStyling: !0 }, n.createElement(r.Z, { style: s.mR.container }, n.createElement(u.zU, { Icon: l.default, size: "xxxLarge" }), n.createElement(r.Z, { style: s.mR.middle }, n.createElement(c.ZP, null, h), k ? n.createElement(r.Z, { style: s.mR.row }, n.createElement(c.ZP, { color: "gray700" }, x ? n.createElement(x, { style: s.mR.icon }) : null, w), C ? n.createElement(y.Z, { fees: C }) : null) : null)));
                },
                f = n.memo(h);
        },
        634455: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                c = a(392237),
                l = a(43429),
                i = a(727384);
            function s({ amount: e, type: t = l.NU.balance, shouldCenterAlign: a = !1, currency: c, size: s = "title1", weight: m = "bold", hasCompleted: d = !1, style: p }) {
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
                    g = n.useMemo(() => (0, i.vw)({ amount: e, currency: c }), [e, c]);
                return n.createElement(r.Z, { style: [a ? u.alignCenter : void 0, ...([p] ?? 0)] }, n.createElement(o.ZP, { color: h, size: "title0" === s ? void 0 : s, style: "title0" === s ? { fontSize: "48px" } : {}, weight: m }, `${f}${g}`));
            }
            const m = n.memo(s),
                u = c.default.create((e) => ({ alignCenter: { alignItems: "center" } }));
        },
        984067: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                c = a(731708),
                l = a(855488),
                i = a(392237),
                s = a(97882),
                m = a(727384);
            const u = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, s.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(o.Z, { style: h.currency }, r.createElement(c.ZP, null, e));
                };
            function p({ amount: e, balance: t, isValid: a, max: o = "9999999", min: c = "0", setAmount: i, setIsValid: s, validateBalance: p, ...y }) {
                const { available_amount_local_micro: f, currency: g } = t ?? {},
                    b = parseFloat(f),
                    E = f ? (0, m.p2)({ amount: b, currency: g }) : null,
                    Z = (0, m.dN)({ amount: b }),
                    k = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                a = parseFloat(c),
                                n = parseFloat(o);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= a && t <= n && (!p || t <= Z);
                        },
                        [Z, o, c, p],
                    ),
                    x = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (i(t), s(k(t)));
                        },
                        [i, s, k],
                    ),
                    C = r.useCallback(
                        ({ target: e }) => {
                            x(e.value);
                        },
                        [x],
                    ),
                    P = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            x(t);
                        },
                        [x],
                    ),
                    w = !a && p && parseFloat(e) > Z ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    l.Z,
                    (0, n.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: w,
                            helperText: E ? u({ amount: E }) : void 0,
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
                h = i.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { paddingHorizontal: "0" } }));
        },
        477922: (e, t, a) => {
            a.d(t, { G7: () => C, KR: () => P, qn: () => v, zU: () => E });
            var n = a(807896),
                r = a(202784),
                o = a(45843),
                c = a(325686),
                l = a(392237),
                i = a(684008),
                s = a(72591),
                m = a(297896),
                u = a(748138),
                d = a(913315),
                p = a(734767),
                y = a(286555),
                h = a(43429);
            const f = Object.freeze({ small: "small", xLarge: "xLarge", xxLarge: "xxLarge", xxxLarge: "xxxLarge", xJumbo: "xJumbo" }),
                g = { [f.small]: { width: l.default.theme.spacesPx.space16, height: l.default.theme.spacesPx.space16 }, [f.xLarge]: { width: l.default.theme.spacesPx.space40, height: l.default.theme.spacesPx.space40 }, [f.xxLarge]: { width: l.default.theme.spacesPx.space48, height: l.default.theme.spacesPx.space48 }, [f.xxxLarge]: { width: l.default.theme.spaces.space56, height: l.default.theme.spaces.space56 }, [f.xJumbo]: { width: l.default.theme.spaces.space80, height: l.default.theme.spaces.space80 } },
                b = { [f.small]: { width: l.default.theme.spacesPx.space8, height: l.default.theme.spacesPx.space8 }, [f.xLarge]: { width: l.default.theme.spacesPx.space20, height: l.default.theme.spacesPx.space20 }, [f.xxLarge]: { width: l.default.theme.spacesPx.space24, height: l.default.theme.spacesPx.space24 }, [f.xxxLarge]: { width: l.default.theme.spaces.space28, height: l.default.theme.spaces.space28 }, [f.xJumbo]: { width: l.default.theme.spaces.space40, height: l.default.theme.spaces.space40 } },
                E = ({ Icon: e, size: t, uri: a }) => (a ? r.createElement(o.Z, { source: { uri: a }, style: [I.rounded, I.logo, g[t]] }) : r.createElement(c.Z, { style: [g[t], I.rounded, I.iconContainer] }, r.createElement(e, { style: [I.logo, b[t]] }))),
                Z = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: i.default })),
                k = { [h.wC.bankDeposit]: s.default, [h.wC.bankWithdraw]: m.default, [h.wC.card]: i.default, [h.wC.atm]: u.default },
                x = { [h.Ms.atm]: u.default, [h.Ms.deposit]: s.default, [h.Ms.withdraw]: m.default, [h.Ms.interest]: d.default, [h.Ms.cashback]: p.default },
                C = (e) => {
                    const { type: t, ...a } = e;
                    return r.createElement(E, (0, n.Z)({}, a, { Icon: k[t] }));
                },
                P = ({ type: e, ...t }) => r.createElement(E, (0, n.Z)({}, t, { Icon: x[e] })),
                w = (e) => r.createElement(E, (0, n.Z)({}, e, { Icon: y.default })),
                v = ({ type: e, ...t }) => (e === h.dX.bank ? r.createElement(w, t) : e === h.dX.card ? r.createElement(Z, t) : null),
                I = l.default.create((e) => ({ logo: { color: e.colors.text, flexShrink: 0 }, rounded: { borderRadius: e.borderRadii.infinite }, iconContainer: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, justifyContent: "center", alignItems: "center" } }));
        },
        819404: (e, t, a) => {
            a.d(t, { Z: () => z });
            var n = a(415706),
                r = a(991744),
                o = a(202784),
                c = a(325686),
                l = (a(585488), a(351743)),
                i = a.n(l),
                s = a(731708),
                m = a(174326),
                u = a(680665),
                d = a(392237),
                p = a(535338),
                y = a(727384),
                h = a(952428),
                f = a(154003),
                g = a(530525),
                b = a(439592),
                E = a(823406),
                Z = a(656805),
                k = a(287688),
                x = a(994600),
                C = a(988600),
                P = a(514639);
            function w({ __typename: e }) {
                switch (e) {
                    case "XPaymentsCustomerTaskDestinationDirectDeposit":
                        return P.Hf;
                    case "XPaymentsCustomerTaskDestinationBillPay":
                        return P.rE;
                    case "XPaymentsCustomerTaskDestinationIdVerification":
                        return P.wG;
                    case "XPaymentsCustomerTaskDestinationAccountLinking":
                        return P.iE.bankAccounts;
                    default:
                        return "";
                }
            }
            const v = ({ destination: e, icon: t, onClose: a, subtitle: n, title: r }) => {
                    const [l, i] = o.useState(!1),
                        m = `${r} Icon`,
                        u = o.useCallback(
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
                        d = (function ({ __typename: e, icon_type: t, image_url: a }) {
                            if ("XPaymentsCustomerTaskPredefinedIcon" === e)
                                switch (t) {
                                    case "IdVerification":
                                        return x;
                                    case "DirectDeposit":
                                        return k;
                                    case "BillPay":
                                        return Z;
                                    case "AccountLinking":
                                        return C;
                                    default:
                                        return null;
                                }
                            return a || "";
                        })(t);
                    return o.createElement(h.Z, { link: w(e), style: [I.container, l && I.dismissing] }, o.createElement(c.Z, { style: I.contentWrapper }, o.createElement(f.ZP, { borderColor: "transparent", icon: o.createElement(E.default, { style: I.closeButtonIcon }), onClick: u, size: "smallCompact", style: I.closeButton }), o.createElement(c.Z, { style: I.content }, d && o.createElement(c.Z, { style: I.icon32 }, o.createElement(g.Z, { "aria-label": m, aspectMode: b.Z.SQUARE, image: d })), o.createElement(c.Z, { style: I.textContainer }, o.createElement(s.ZP, { align: "left", color: "text", size: "subtext1", style: { overflow: "hidden" }, weight: "medium" }, r), o.createElement(s.ZP, { align: "left", color: "gray800", size: "subtext1", weight: "normal" }, n)))));
                },
                I = d.default.create((e) => ({ icon32: { height: e.spaces.space32, width: e.spaces.space32 }, container: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer", flexGrow: 1, width: "280px" }, contentWrapper: { position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }, closeButton: { position: "absolute", top: "-12px", end: "-8px" }, closeButtonIcon: { fill: e.colors.gray900, height: e.spaces.space20, width: e.spaces.space20 }, content: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%", height: "100%" }, icon: { width: e.spaces.space32, height: e.spaces.space32, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, backgroundSize: "cover", backgroundPosition: "center" }, textContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, overflow: "hidden" }, dismissing: { transform: "translateX(-100%)", opacity: 0 } })),
                _ = o.memo(v),
                T = r.Z,
                M = n.Z,
                R = () => {
                    const [e, t] = o.useState(0),
                        a = (0, p.p)(T, {}, { fetchKey: "money-customer-tasks" }).get_payments_customer_tasks.items,
                        [n, r] = o.useState(a),
                        [l] = i()(M);
                    const d = o.useCallback(
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
                              { style: S.carouselContainer },
                              o.createElement(s.ZP, null, "Things you should know"),
                              o.createElement(
                                  c.Z,
                                  { style: S.carouselOuterWrapper },
                                  o.createElement(
                                      c.Z,
                                      { style: S.carouselInnerWrapper },
                                      o.createElement(
                                          m.Z,
                                          {
                                              "aria-label": "Customer tasks carousel",
                                              childrenStyle: S.carouselChildrenStyle,
                                              onVisibleRangeChange: ({ index: e, intersectionRatio: a }) => {
                                                  return (n = e), void (1 === a && t(n));
                                                  var n;
                                              },
                                              showNavButtonsOnHover: !1,
                                              withShadow: !0,
                                          },
                                          n.map((e) => o.createElement(_, { destination: e.destination, icon: e.icon, id: e.id, key: e.id, onClose: () => d(e.id), subtitle: e.subtitle, title: e.title })),
                                      ),
                                  ),
                                  o.createElement(u.ZP, { count: n.length, max: 10, selectedIndex: e }),
                              ),
                          );
                },
                S = d.default.create((e) => ({ carouselChildrenStyle: { marginEnd: e.spaces.space8 }, carouselContainer: { marginBottom: e.spaces.space80, gap: e.spaces.space16 }, carouselOuterWrapper: { width: "100%" }, carouselInnerWrapper: { position: "relative", width: "100%" } })),
                z = o.memo(R);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.0b4dcf5a.js.map
