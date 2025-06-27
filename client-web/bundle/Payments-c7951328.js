"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var r = n(202784),
                a = n(107267),
                o = n(736063),
                i = n(514639),
                c = n(445664),
                s = n(827309);
            const l = (e) => {
                    const t = (0, a.useHistory)(),
                        { isActive: n } = (0, c.Z)({ fetchKey: "Payments" }),
                        o = r.useCallback(() => {
                            t.replace(n ? i.gp : "/");
                        }, [t, n]);
                    return r.createElement(s.Z, { actionLabel: "Got it", headline: "Your account is under review", history: t, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: i.N6 });
                },
                m = { context: "PAYMENTS_REVIEW" },
                y = (e) => r.createElement(o.H, { errorConfig: m }, r.createElement(l, e)),
                u = r.memo(y);
        },
        896240: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var r = n(202784),
                a = n(437429),
                o = n.n(a),
                i = n(108362),
                c = n(252021),
                s = n(293115),
                l = n(805322),
                m = n(743080),
                y = n(727384);
            const u = { page: "money", section: "unlock" },
                d = "Money",
                p = (e) => {
                    const { history: t } = e,
                        n = (0, m.jh)(),
                        a = t.location?.state,
                        { challengeInitiator: p, closePath: h } = a ?? {},
                        f = e.challengeInitiator ?? p,
                        E = r.useCallback(() => r.createElement(i.Z, { style: n.root, withWideContainer: !0 }, r.createElement(l.Z, e)), [n.root, e]),
                        b = o()(),
                        g = r.useCallback(() => {
                            (0, y.qc)({ environment: b, closePath: h, challengeInitiator: f, history: t });
                        }, [f, h, b, t]);
                    return r.createElement(s.nO, { namespace: u }, r.createElement(c.Z, { documentTitle: d, history: t, isFullWidth: !0, onBackClick: g, primaryContent: E(), sidebarContent: null, title: d }));
                },
                h = r.memo(p);
        },
        923509: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            n(136728);
            var r = n(202784),
                a = n(107267),
                o = n(736063),
                i = n(782642),
                c = n(514639),
                s = n(725516),
                l = n(160144);
            const m = (e) => {
                    const t = (0, a.useHistory)(),
                        n = (0, s.z)(),
                        o = (0, i.p)();
                    r.useEffect(() => {
                        n && n.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [n]);
                    const m = r.useCallback(
                        (e) => {
                            const { message: n } = e.data;
                            switch (n) {
                                case l.T.success:
                                    t.replace(c.iE.securityPrivacy), o({ text: "You PIN has been successfuly changed." });
                                    break;
                                case l.T.forgotPin:
                                    t.push(c.jR, { challengeInitiator: c.kW.forgotPin });
                            }
                        },
                        [t, o],
                    );
                    return r.createElement(l.Z, { eventCallback: m, linkType: c.P_.updatePin });
                },
                y = { context: "UpdatePin" };
            function u(e) {
                return r.createElement(o.H, { errorConfig: y }, r.createElement(m, e));
            }
            const d = r.memo(u);
        },
        261423: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var r = n(202784),
                a = n(107267),
                o = n(736063),
                i = n(827309),
                c = n(137882);
            const s = (e) => {
                    const t = (0, a.useHistory)(),
                        n = (0, c.bR)({}),
                        o = r.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        s = r.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return r.createElement(i.Z, { actionLabel: "Contact support", headline: "We were unable to verify your identity", history: t, onAction: o, onClose: s, subtext: "Please reach out to customer support for further assistance." });
                },
                l = { context: "PAYMENTS_VERIFICATION_FAILED" },
                m = (e) => r.createElement(o.H, { errorConfig: l }, r.createElement(s, e)),
                y = r.memo(m);
        },
        162827: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var r = n(202784),
                a = n(805322);
            const o = (e) => r.createElement(a.Z, e),
                i = r.memo(o);
        },
        516813: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            n(136728);
            var r = n(202784),
                a = n(107267),
                o = n(736063),
                i = n(514639),
                c = n(445664),
                s = n(725516),
                l = n(160144);
            const m = (e) => {
                    const t = (0, a.useHistory)(),
                        n = (0, s.z)(),
                        o = (0, a.useParams)(),
                        { isActive: m } = (0, c.Z)({ fetchKey: "Payments" }),
                        y = i.Kc[o.tier ?? i.Kc.tier2],
                        u = t.location?.state,
                        d = u?.redirectPath,
                        p = u?.closePath ?? (m ? i.gp : "/"),
                        h = u?.redirectState,
                        f = u?.requestedField,
                        E = u?.challengeId,
                        b = u?.challengeInitiator,
                        g = u?.skipTerms,
                        { linkType: k } = i.AU[y];
                    r.useEffect(() => {
                        n && y && n.scribe({ page: "money", section: "verify-identity", component: y, action: "impression" });
                    }, [n, y]);
                    const C = r.useMemo(() => {
                        const e = [];
                        return f && e.push({ key: "requestedField", value: f }), g && e.push({ key: "skipTerms", value: g }), e.length > 0 ? e : void 0;
                    }, [f, g]);
                    return r.createElement(l.Z, { additionalParams: C, challengeId: E, challengeInitiator: b, closePath: p, linkType: k, redirectPath: d, redirectState: h });
                },
                y = { context: "VerifyIdentity" };
            function u(e) {
                return r.createElement(o.H, { errorConfig: y }, r.createElement(m, e));
            }
            const d = r.memo(u);
        },
        891053: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var r = n(202784),
                a = n(107267),
                o = n(736063),
                i = n(725516),
                c = (n(136728), n(325686)),
                s = n(731708),
                l = n(154003),
                m = n(167630),
                y = n(980407),
                u = n(782642),
                d = n(514639),
                p = n(43429),
                h = n(743080),
                f = n(388768),
                E = (n(585488), n(351743)),
                b = n.n(E);
            const g = f.Z,
                k = () => {
                    const [e, t] = b()(g);
                    return [
                        r.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const a = e?.create_item_update_session?.linking_token?.token,
                                                o = e?.create_item_update_session?.provider;
                                            a ? n({ token: a, provider: o }) : r(t);
                                        },
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                C = () => {
                    const e = (0, i.z)(),
                        t = (0, u.p)(),
                        n = (0, a.useHistory)(),
                        o = (0, h.jh)(),
                        f = n.location?.state?.redirectPath,
                        E = n.location?.state?.paymentMethodId,
                        [b, g] = k(),
                        C = r.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                E &&
                                    b({ paymentMethodId: E })
                                        .then(({ provider: t, token: r }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const a = { token: r, provider: t, linkType: d.P_.verifyPaymentMethod, redirectPath: f, paymentMethodId: E };
                                            n.push(d.MW, a);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, b, n, E, f]),
                        P = r.useCallback(() => {
                            n.push(f ?? d.gp);
                        }, [n, f]),
                        Z = r.createElement(c.Z, { style: o.footer }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", r.createElement(s.ZP, { color: "text", link: p.uc, size: "subtext2" }, "Terms & Conditions")), r.createElement(l.ZP, { disabled: g, onPress: C, size: "large", type: "primaryFilled" }, g ? r.createElement(m.Z, null) : "Continue"));
                    return r.createElement(y.Z, { backButtonType: "close", bottomBar: Z, history: n, onBackClick: P, withoutBottomBarMobile: !0 }, r.createElement(c.Z, { style: o.container }, r.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), r.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                P = r.memo(C),
                Z = (e) => {
                    const t = (0, a.useHistory)(),
                        n = (0, i.z)(),
                        o = t.location?.state?.step;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "verify-payment-method", component: o, action: "impression" });
                        }, [n, o]),
                        r.createElement(P, null)
                    );
                },
                w = { context: "VerifyPaymentMethod" };
            function v(e) {
                return r.createElement(o.H, { errorConfig: w }, r.createElement(Z, e));
            }
            const I = r.memo(v);
        },
        152837: (e, t, n) => {
            n.r(t), n.d(t, { VerifyYourIdentityScreen: () => P, default: () => x, styles: () => I });
            var r = n(202784),
                a = n(325686),
                o = n(530525),
                i = n(439592),
                c = n(731708),
                s = n(154003),
                l = n(392237),
                m = n(468670),
                y = n(812140),
                u = n(553771),
                d = n(994600),
                p = n(980407),
                h = n(652904),
                f = n(736063),
                E = n(445664),
                b = n(293115),
                g = n(743080),
                k = n(727384);
            const C = { page: "money", section: "setup-direct-deposit" },
                P = (e) => {
                    const t = (0, g.jh)();
                    return r.createElement(h.Z, null, r.createElement(a.Z, { style: t.container }, r.createElement(a.Z, { style: I.headerContainer }, r.createElement(a.Z, { style: I.iconContainer }, r.createElement(o.Z, { "aria-label": "Verify your identity icon", aspectMode: i.Z.SQUARE, image: d })), r.createElement(a.Z, { style: I.titleContainer }, r.createElement(c.ZP, { color: "text", size: "title1", weight: "bold" }, "Verify your identity"), r.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, "Unlock access to the full benefits of X Money."))), r.createElement(a.Z, { style: I.benefitsContainer }, r.createElement(a.Z, { style: I.benefitRow }, r.createElement(m.default, { style: I.benefitIcon }), r.createElement(a.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Military grade encryption"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), r.createElement(a.Z, { style: I.benefitRow }, r.createElement(y.default, { style: I.benefitIcon }), r.createElement(a.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Unlock your account"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), r.createElement(a.Z, { style: I.benefitRow }, r.createElement(u.default, { style: I.benefitIcon }), r.createElement(a.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Unlock your account"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                Z = { context: "VERIFY_YOUR_IDENTITY" },
                w = () => {
                    const e = (0, g.jh)(),
                        { roles: t } = (0, E.Z)({ fetchKey: "Payments" });
                    return r.createElement(a.Z, { style: e.footer }, r.createElement(s.ZP, { link: (0, k.FW)({ roles: t }), type: "primaryFilled" }, "Let's do it"), r.createElement(c.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Payments LLC is a financial technology company, and not a bank. Funds are held at Cross River Bank, Member FDIC, and are eligible for pass through FDIC insurance if certain conditions are satisfied."));
                },
                v = (e) => {
                    const { history: t } = e,
                        n = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(f.H, { errorConfig: Z }, r.createElement(p.Z, { backButtonType: "close", bottomBar: r.createElement(w, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, r.createElement(b.nO, { namespace: C }, r.createElement(f.H, { errorConfig: Z }, r.createElement(P, e)))));
                },
                I = l.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24, marginTop: e.spaces.space40, marginBottom: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                x = r.memo(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.849ea46a.js.map
