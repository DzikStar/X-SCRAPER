"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var r = n(202784),
                o = n(107267),
                a = n(736063),
                i = n(514639),
                c = n(445664),
                s = n(827309);
            const l = (e) => {
                    const t = (0, o.useHistory)(),
                        { isActive: n } = (0, c.Z)({ fetchKey: "Payments" }),
                        a = r.useCallback(() => {
                            t.replace(n ? i.gp : "/");
                        }, [t, n]);
                    return r.createElement(s.Z, { actionLabel: "Got it", headline: "Your account is under review", history: t, onAction: a, onClose: a, subtext: "We are reviewing your account. Please check back later.", supportUrl: i.N6 });
                },
                m = { context: "PAYMENTS_REVIEW" },
                y = (e) => r.createElement(a.H, { errorConfig: m }, r.createElement(l, e)),
                u = r.memo(y);
        },
        896240: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var r = n(202784),
                o = n(437429),
                a = n.n(o),
                i = n(108362),
                c = n(252021),
                s = n(293115),
                l = n(805322),
                m = n(743080),
                y = n(727384);
            const u = { page: "money", section: "unlock" },
                p = "Money",
                d = (e) => {
                    const { history: t } = e,
                        n = (0, m.jh)(),
                        o = t.location?.state,
                        { challengeInitiator: d, closePath: h } = o ?? {},
                        f = e.challengeInitiator ?? d,
                        E = r.useCallback(() => r.createElement(i.Z, { style: n.root, withWideContainer: !0 }, r.createElement(l.Z, e)), [n.root, e]),
                        b = a()(),
                        g = r.useCallback(() => {
                            (0, y.qc)({ environment: b, closePath: h, challengeInitiator: f, history: t });
                        }, [f, h, b, t]);
                    return r.createElement(s.nO, { namespace: u }, r.createElement(c.Z, { documentTitle: p, history: t, isFullWidth: !0, onBackClick: g, primaryContent: E(), sidebarContent: null, title: p }));
                },
                h = r.memo(d);
        },
        923509: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            n(136728);
            var r = n(202784),
                o = n(107267),
                a = n(736063),
                i = n(782642),
                c = n(514639),
                s = n(725516),
                l = n(160144);
            const m = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.z)(),
                        a = (0, i.p)();
                    r.useEffect(() => {
                        n && n.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [n]);
                    const m = r.useCallback(
                        (e) => {
                            const { message: n } = e.data;
                            switch (n) {
                                case l.T.success:
                                    t.replace(c.iE.securityPrivacy), a({ text: "You PIN has been successfuly changed." });
                                    break;
                                case l.T.forgotPin:
                                    t.push(c.jR, { challengeInitiator: c.kW.forgotPin });
                            }
                        },
                        [t, a],
                    );
                    return r.createElement(l.Z, { eventCallback: m, linkType: c.P_.updatePin });
                },
                y = { context: "UpdatePin" };
            function u(e) {
                return r.createElement(a.H, { errorConfig: y }, r.createElement(m, e));
            }
            const p = r.memo(u);
        },
        261423: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var r = n(202784),
                o = n(107267),
                a = n(736063),
                i = n(827309),
                c = n(137882);
            const s = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, c.bR)({}),
                        a = r.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        s = r.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return r.createElement(i.Z, { actionLabel: "Contact support", headline: "We were unable to verify your identity", history: t, onAction: a, onClose: s, subtext: "Please reach out to customer support for further assistance." });
                },
                l = { context: "PAYMENTS_VERIFICATION_FAILED" },
                m = (e) => r.createElement(a.H, { errorConfig: l }, r.createElement(s, e)),
                y = r.memo(m);
        },
        162827: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var r = n(202784),
                o = n(805322);
            const a = (e) => r.createElement(o.Z, e),
                i = r.memo(a);
        },
        516813: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            n(136728);
            var r = n(202784),
                o = n(107267),
                a = n(736063),
                i = n(514639),
                c = n(445664),
                s = n(725516),
                l = n(160144);
            const m = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.z)(),
                        a = (0, o.useParams)(),
                        { isActive: m } = (0, c.Z)({ fetchKey: "Payments" }),
                        y = i.Kc[a.tier ?? i.Kc.tier2],
                        u = t.location?.state,
                        p = u?.redirectPath,
                        d = u?.closePath ?? (m ? i.gp : "/"),
                        h = u?.redirectState,
                        f = u?.requestedField,
                        E = u?.challengeId,
                        b = u?.challengeInitiator,
                        g = u?.skipTerms,
                        { linkType: k } = i.AU[y];
                    r.useEffect(() => {
                        n && y && n.scribe({ page: "money", section: "verify-identity", component: y, action: "impression" });
                    }, [n, y]);
                    const P = r.useMemo(() => {
                        const e = [];
                        return f && e.push({ key: "requestedField", value: f }), g && e.push({ key: "skipTerms", value: g }), e.length > 0 ? e : void 0;
                    }, [f, g]);
                    return r.createElement(l.Z, { additionalParams: P, challengeId: E, challengeInitiator: b, closePath: d, linkType: k, redirectPath: p, redirectState: h });
                },
                y = { context: "VerifyIdentity" };
            function u(e) {
                return r.createElement(a.H, { errorConfig: y }, r.createElement(m, e));
            }
            const p = r.memo(u);
        },
        891053: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var r = n(202784),
                o = n(107267),
                a = n(736063),
                i = n(725516),
                c = (n(136728), n(325686)),
                s = n(731708),
                l = n(154003),
                m = n(167630),
                y = n(980407),
                u = n(782642),
                p = n(514639),
                d = n(43429),
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
                                            const o = e?.create_item_update_session?.linking_token?.token,
                                                a = e?.create_item_update_session?.provider;
                                            o ? n({ token: o, provider: a }) : r(t);
                                        },
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                P = () => {
                    const e = (0, i.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        a = (0, h.jh)(),
                        f = n.location?.state?.redirectPath,
                        E = n.location?.state?.paymentMethodId,
                        [b, g] = k(),
                        P = r.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                E &&
                                    b({ paymentMethodId: E })
                                        .then(({ provider: t, token: r }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const o = { token: r, provider: t, linkType: p.P_.verifyPaymentMethod, redirectPath: f, paymentMethodId: E };
                                            n.push(p.MW, o);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, b, n, E, f]),
                        C = r.useCallback(() => {
                            n.push(f ?? p.gp);
                        }, [n, f]),
                        Z = r.createElement(c.Z, { style: a.footer }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", r.createElement(s.ZP, { color: "text", link: d.uc, size: "subtext2" }, "Terms & Conditions")), r.createElement(l.ZP, { disabled: g, onPress: P, size: "large", type: "primaryFilled" }, g ? r.createElement(m.Z, null) : "Continue"));
                    return r.createElement(y.Z, { backButtonType: "close", bottomBar: Z, history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(c.Z, { style: a.container }, r.createElement(s.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), r.createElement(s.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                C = r.memo(P),
                Z = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, i.z)(),
                        a = t.location?.state?.step;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "verify-payment-method", component: a, action: "impression" });
                        }, [n, a]),
                        r.createElement(C, null)
                    );
                },
                w = { context: "VerifyPaymentMethod" };
            function v(e) {
                return r.createElement(a.H, { errorConfig: w }, r.createElement(Z, e));
            }
            const I = r.memo(v);
        },
        152837: (e, t, n) => {
            n.r(t), n.d(t, { VerifyYourIdentityScreen: () => C, default: () => x, styles: () => I });
            var r = n(202784),
                o = n(325686),
                a = n(530525),
                i = n(439592),
                c = n(731708),
                s = n(154003),
                l = n(392237),
                m = n(468670),
                y = n(812140),
                u = n(553771),
                p = n(994600),
                d = n(980407),
                h = n(652904),
                f = n(736063),
                E = n(445664),
                b = n(293115),
                g = n(743080),
                k = n(727384);
            const P = { page: "money", section: "setup-direct-deposit" },
                C = (e) => {
                    const t = (0, g.jh)();
                    return r.createElement(h.Z, null, r.createElement(o.Z, { style: t.container }, r.createElement(o.Z, { style: I.headerContainer }, r.createElement(o.Z, { style: I.iconContainer }, r.createElement(a.Z, { "aria-label": "Verify your identity icon", aspectMode: i.Z.SQUARE, image: p })), r.createElement(o.Z, { style: I.titleContainer }, r.createElement(c.ZP, { color: "text", size: "title1", weight: "bold" }, "Verify your identity"), r.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, "Unlock the full benefits of X Money by confirming who you are."))), r.createElement(o.Z, { style: I.benefitsContainer }, r.createElement(o.Z, { style: I.benefitRow }, r.createElement(m.default, { style: I.benefitIcon }), r.createElement(o.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Military grade encryption"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Your personal information is safe and secure with X"))), r.createElement(o.Z, { style: I.benefitRow }, r.createElement(y.default, { style: I.benefitIcon }), r.createElement(o.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Unlock your account"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Deposit your paycheck and pay bills"))), r.createElement(o.Z, { style: I.benefitRow }, r.createElement(u.default, { style: I.benefitIcon }), r.createElement(o.Z, { style: I.benefitContent }, r.createElement(c.ZP, { size: "body", style: I.shrink, weight: "medium" }, "Unlock your account"), r.createElement(c.ZP, { color: "gray700", size: "body", style: I.shrink, weight: "normal" }, "Unlock higher daily and weekly limits"))))));
                },
                Z = { context: "VERIFY_YOUR_IDENTITY" },
                w = () => {
                    const e = (0, g.jh)(),
                        { roles: t } = (0, E.Z)({ fetchKey: "Payments" });
                    return r.createElement(o.Z, { style: e.footer }, r.createElement(s.ZP, { link: (0, k.FW)({ roles: t }), type: "primaryFilled" }, "Let's do it"), r.createElement(c.ZP, { align: "center", color: "gray700", size: "subtext2" }, "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                v = (e) => {
                    const { history: t } = e,
                        n = r.useCallback(() => t.goBack(), [t]);
                    return r.createElement(f.H, { errorConfig: Z }, r.createElement(d.Z, { backButtonType: "close", bottomBar: r.createElement(w, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, r.createElement(b.nO, { namespace: P }, r.createElement(f.H, { errorConfig: Z }, r.createElement(C, e)))));
                },
                I = l.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, benefitsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space24, marginTop: e.spaces.space40, marginBottom: e.spaces.space24 }, benefitRow: { display: "flex", flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, benefitIcon: { height: e.spaces.space32, width: e.spaces.space32, fill: e.colors.white }, benefitContent: { display: "flex", flex: 1, flexWrap: "wrap" }, shrink: { flexShrink: 1 } })),
                x = r.memo(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.096d19fa.js.map
