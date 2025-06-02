"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => D });
            var a = n(202784),
                r = n(325686),
                o = n(952428),
                i = n(731708),
                l = n(868634),
                c = n(167630),
                s = n(165822),
                u = n(392237),
                m = n(108362),
                d = n(58399),
                p = n(2840),
                y = n(913408),
                b = n(72591),
                g = n(297896),
                h = n(436117),
                E = n(252021),
                f = n(736063),
                k = n(952793),
                Z = n(514639),
                v = n(445664),
                _ = n(698478),
                C = n(293115),
                P = n(312771),
                x = n(847347),
                w = n(370347),
                T = n(634455),
                A = n(819404),
                S = n(601463),
                I = n(575123),
                q = n(452275),
                B = n(412100),
                H = n(934265),
                z = n(743080),
                N = n(727384);
            const M = { page: "money", section: "balance" },
                L = "Money",
                $ = "Balance",
                F = (e) => {
                    const { balance: t, interest: n, refetchStatus: u } = (0, H.Z)(),
                        m = (0, k.hC)("payments_tasks_carousel_enabled"),
                        E = (0, z.jh)(),
                        { permissions: f } = (0, v.Z)({ fetchKey: "Payments" }),
                        { data: C, fetchNext: I, hasNotices: q } = (0, B.Z)(),
                        M = (0, N.Gs)(f),
                        L = (0, _.nK)(f),
                        F = M || f?.includes(h.d.CreateDeposit),
                        U = M || f?.includes(h.d.CreateWithdrawal),
                        W = a.createElement(o.Z, { link: Z.l_, style: z.ZP.column, testID: "account-balance" }, a.createElement(r.Z, { style: z.ZP.rowSpaceBetween }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, $), n?.apy && a.createElement(l.ZP, { background: "green0", style: z.ZP.label, type: "bestValue" }, a.createElement(i.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, N.Bj)({ apy: n.apy })))), u === P.iF.LOADING ? a.createElement(c.Z, { style: j.balanceLoader }) : t ? a.createElement(T.Z, { amount: t.available_amount_local_micro, size: "title0", style: j.veritcalPadding }) : null, a.createElement(r.Z, { style: j.centeredRow }, a.createElement(i.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(d.default, { style: j.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": $, containerStyle: E.tile, stackLayoutUpperStyle: z.ZP.upper, upper: W, withInteractiveStyling: !1 }), q ? a.createElement(x.Z, { data: C, fetchNext: I, type: "notice" }) : null, a.createElement(r.Z, { style: E.pivotTileContainer }, a.createElement(w.Z, { disabled: !L, icon: p.default, link: L ? Z.HM : void 0, text: "Send" }), a.createElement(w.Z, { disabled: !L, icon: y.default, link: L ? Z.Jv : void 0, text: "Request" }), a.createElement(w.Z, { disabled: !F, icon: b.default, link: F ? Z.IN : void 0, text: "Deposit" }), a.createElement(w.Z, { disabled: !U, icon: g.default, link: U ? Z.r0 : void 0, text: "Withdraw" })), m && a.createElement(A.Z, null), a.createElement(S.Z, null));
                },
                U = { context: "ACCOUNT_BALANCE" },
                j = u.default.create((e) => ({ balanceLoader: { minHeight: e.spaces.space72 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                W = (e) => {
                    const { history: t } = e,
                        n = (0, z.jh)(),
                        r = a.useCallback(() => a.createElement(m.Z, { style: n.root, withWideContainer: !0 }, a.createElement(f.H, { errorConfig: U }, a.createElement(q.Z, null), a.createElement(f.H, { errorConfig: U }, a.createElement(F, e)))), [n.root, e]),
                        o = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(C.nO, { namespace: M }, a.createElement(E.Z, { documentTitle: L, history: t, isFullWidth: !0, onBackClick: o, primaryContent: r(), rightControl: a.createElement(I.Z, null), sidebarContent: null, title: L }));
                },
                D = a.memo(W);
        },
        708186: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => k, default: () => _ });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                i = n(725516),
                l = n(167630),
                c = n(392237),
                s = n(782642),
                u = n(514639),
                m = n(413713),
                d = n(59815),
                p = (n(585488), n(351743)),
                y = n.n(p);
            const b = d.Z,
                g = () => {
                    const [e, t] = y()(b);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth" },
                                        onCompleted: (e) => {
                                            const a = e?.create_financial_institution_linking_session?.linking_token?.token,
                                                r = e?.create_financial_institution_linking_session?.provider,
                                                o = e?.create_financial_institution_linking_session?.errors,
                                                i = e?.create_financial_institution_linking_session?.challenge_id;
                                            i ? t({ challengeId: i }) : a && r ? t({ token: a, provider: r }) : n(o);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                h = () => {
                    const e = (0, i.z)(),
                        t = (0, s.p)(),
                        n = (0, r.useHistory)(),
                        o = n.location?.state,
                        c = o?.redirectPath,
                        [d] = g(),
                        p = a.useMemo(() => (c === u.iE.bankAccounts ? u.iE.bankAccounts : u.gp), [c]);
                    return (
                        a.useEffect(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                d()
                                    .then(({ challengeId: t, provider: a, token: r }) => {
                                        if (t) n.replace(u.vw, { closePath: p, challengeId: t, challengeInitiator: u.kW.addBankAccount, redirectPath: u.ac, redirectState: o });
                                        else if (a && r) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...o, token: r, provider: a, linkType: u.P_.linkExternalAccount, closePath: p };
                                            n.replace(u.MW, t);
                                        }
                                    })
                                    .catch((a) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: a ? (0, m.kJ)({ errors: a }).message : "Something went wrong. Please try again later." }), n.replace(p);
                                    });
                        }, [t, e, p, o, d, n, c]),
                        a.createElement(l.Z, { style: E.loadingStyle })
                    );
                },
                E = c.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                f = a.memo(h),
                k = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, i.z)(),
                        o = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: o, action: "impression" });
                        }, [n, o]),
                        a.createElement(f, null)
                    );
                },
                Z = { context: "LinkAccount" };
            function v(e) {
                return a.createElement(o.H, { errorConfig: Z }, a.createElement(k, e));
            }
            const _ = a.memo(v);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var a = n(202784),
                r = n(107267),
                o = n(111677),
                i = n.n(o),
                l = n(827309);
            const c = i().j24c37b2,
                s = (e) => {
                    const t = (0, r.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(l.Z, { actionLabel: c, headline: "Access denied", history: t, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                u = a.memo(s);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                i = n(827309),
                l = n(137882);
            const c = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, l.b)({}),
                        o = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        c = a.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return a.createElement(i.Z, { actionLabel: "Contact support", headline: "We cannot open your account at this time", history: t, onAction: o, onClose: c, subtext: "Please reach out to customer support for further assistance." });
                },
                s = { context: "PAYMENTS_NOT_AVAILABLE" },
                u = (e) => a.createElement(o.H, { errorConfig: s }, a.createElement(c, e)),
                m = a.memo(u);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            n(875640);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                i = n(731708),
                l = n(124964),
                c = n(392237),
                s = n(111677),
                u = n.n(s),
                m = n(293723),
                d = n(263272),
                p = n(171463),
                y = n(514639),
                b = n(827309);
            const g = u().j24c37b2,
                h = { [p.a.Age]: { description: "Be at least 18 years old" }, [p.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [p.a.Geography]: { description: "Be a resident of the United States of America" }, [p.a.TwoFactorAuth]: { description: "Secure your account with a passkey", cta: { label: "Setup", destination: y.ul } }, [p.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [p.a.Safety]: { description: "Your X account is in good standing" }, [p.a.Allowlist]: { description: "Your account is allowed" } },
                E = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        c = t.location?.state?.requirements;
                    return a.createElement(
                        b.Z,
                        { actionLabel: g, headline: "You’re not yet eligible", history: t, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: y.N6 },
                        c
                            ? a.createElement(
                                  r.Z,
                                  { style: f.requirements },
                                  c?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          o = h[n];
                                      return o ? a.createElement(r.Z, { key: n, style: f.item }, a.createElement(i.ZP, { style: f.label, weight: "bold" }, o.description, o.cta && !t ? a.createElement(a.Fragment, null, a.createElement(l.Z, { style: f.middot }), a.createElement(i.ZP, { link: o.cta.destination }, o.cta.label)) : null), t ? a.createElement(m.default, { style: f.iconChecked }) : a.createElement(d.default, { style: f.iconUnchecked })) : null;
                                  }),
                              )
                            : null,
                    );
                },
                f = c.default.create((e) => ({ requirements: { gap: e.spaces.space24, marginBottom: e.spaces.space32 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, middot: { color: e.colors.text } })),
                k = a.memo(E);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => fe });
            var a = n(202784),
                r = n(107267),
                o = n(167630),
                i = n(392237),
                l = n(736063),
                c = n(952793),
                s = n(514639),
                u = n(725516),
                m = n(615027),
                d = n(160144),
                p = n(629015),
                y = n(727384),
                b = n(731708),
                g = n(43429);
            const h = Object.freeze({ default: "default", invite: "invite", autoclaim: "autoclaim" }),
                E = "Continue",
                f = a.createElement(b.ZP, { color: "text", link: g.uc, size: "subtext2" }, "Terms & Conditions"),
                k = a.createElement(b.ZP, { color: "text", link: g.hv, size: "subtext2" }, "Privacy Policy"),
                Z = a.createElement(b.ZP, { color: "text", link: g.DH, size: "subtext2" }, "Short Form Disclosure"),
                v = a.createElement(b.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", f, ", ", k, " ", "and ", Z, "."),
                _ = Object.freeze({ [h.default]: { redirectPath: () => s.gp, buttonText: E, disclaimer: v }, [h.autoclaim]: { redirectPath: () => s.gp, buttonText: E, disclaimer: v }, [h.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${s.bR}/${e}` : s.gp), buttonText: E, disclaimer: v } });
            n(136728);
            var C = n(300583),
                P = n(325686),
                x = (n(585488), n(351743)),
                w = n.n(x),
                T = n(154003),
                A = n(760286),
                S = n(980407),
                I = n(743080),
                q = n(691533),
                B = n(429371),
                H = n(125363),
                z = n(919022);
            const N = "Continue before the payment expires.",
                M = ({ invitationCount: e }) => !!e && e > 1,
                L = ({ invitationCount: e }) => (M({ invitationCount: e }) ? "Continue before the payments expire." : N),
                $ = ({ path: e, user: t }) => {
                    const n = `x.com${e}`,
                        a = t?.id_str,
                        r = t?.screen_name;
                    return a && r ? `${n}?user_id=${a}&screen_name=${r}` : a ? `${n}?user_id=${a}` : n;
                },
                F = () => {
                    const e = (0, H.v9)(z.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                U = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const r = (0, H.v9)(z.ZP.selectViewerUser),
                        o = (0, c.hC)("payments_qr_onboarding_enabled"),
                        i = (0, c.hC)("payments_qr_onboarding_mobile_link_enabled") ? s.hv : s.sM;
                    return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(F, null)), n, a.createElement(b.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(q.Z, null, a.createElement(P.Z, { style: j.qrcode }, a.createElement(B.Z, { dimension: 200, link: $({ user: r, path: i }) }))) : null);
                },
                j = i.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                W = a.memo(U);
            var D = n(883229),
                O = n(943914),
                R = n(329923);
            const Y = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                J = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                V = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, R.Z)();
                    return e ? a.createElement(W, { description: L({ invitationCount: t }), title: Y({ formattedAmount: e }) }) : a.createElement(W, null);
                },
                X = { context: "PaymentsPendingBalance" },
                G = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(W, null), type: "CustomRetry" }), []);
                    return a.createElement(D.N, { errorConfig: X, fallback: e }, a.createElement(O.B, null, a.createElement(V, null)));
                },
                K = a.memo(G);
            var Q = n(807896),
                ee = n(190940);
            const te = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ne = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, r] = (0, ee.Z)(e);
                    return n && r
                        ? a.createElement(
                              W,
                              (0, Q.Z)(
                                  { description: N, title: te(r) },
                                  t
                                      ? (() => {
                                            const { formattedAmount: e, invitationCount: t } = (0, R.Z)(),
                                                n = M({ invitationCount: t });
                                            return { subtitle: e && n ? a.createElement(b.ZP, { color: "gray700", size: "body" }, J({ formattedAmount: e })) : void 0, description: L({ invitationCount: t }) };
                                        })()
                                      : void 0,
                              ),
                          )
                        : t
                          ? a.createElement(K, null)
                          : a.createElement(W, null);
                },
                ae = { context: "PaymentsTransactionInvite" },
                re = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(W, null), type: "CustomRetry" }), []);
                    return a.createElement(D.N, { errorConfig: ae, fallback: t }, a.createElement(O.B, null, a.createElement(ne, e)));
                },
                oe = a.memo(re),
                ie = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === h.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(oe, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(K, null) : a.createElement(W, null));
                },
                le = a.memo(ie),
                ce = C.Z,
                se = "setupPayments",
                ue = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const i = (0, r.useHistory)(),
                        l = (0, u.z)(),
                        c = (0, I.jh)(),
                        s = _[t],
                        [m, d] = w()(ce),
                        p = i.location?.state,
                        y = s.buttonText,
                        b = s.disclaimer,
                        g = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: se }, query: i?.location?.query }), [p, i?.location?.query]),
                        h = a.useCallback(() => {
                            l.scribe({ page: "money", section: "onboarding", element: "agreeTerms", action: "click" }),
                                m({
                                    variables: {},
                                    onCompleted: () => {
                                        i.push(g());
                                    },
                                    onError: () => {
                                        i.push(g());
                                    },
                                });
                        }, [l, m, i, g]),
                        E = a.useCallback(() => {
                            i.push("/");
                        }, [i]),
                        f = d,
                        k = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(T.ZP, { disabled: f, onPress: h, size: "large", type: "primaryFilled" }, f ? a.createElement(o.Z, null) : y)), [f, h, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: i, onBackClick: E }, a.createElement(P.Z, { style: c.container }, a.createElement(A.default, { style: I.ZP.illustration }), a.createElement(le, { inviteTransactionId: e, onboardingType: t })), a.createElement(P.Z, { style: c.footer }, a.createElement(P.Z, { style: I.ZP.row }, b), k));
                },
                me = a.memo(ue),
                de = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, r.useHistory)(),
                        o = (0, I.jh)(),
                        i = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(S.Z, { backButtonType: "close", history: n, onBackClick: i }, a.createElement(P.Z, { style: [o.container, pe.qrPadding] }, a.createElement(le, { inviteTransactionId: e, onboardingType: t })));
                },
                pe = i.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { minHeight: 420 } })),
                ye = a.memo(de),
                be = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: i, isEligible: l, paymentsRedirectPath: b, requirements: g, roles: E } = (0, p.Z)(),
                        f = (0, c.hC)("payments_qr_onboarding_enabled"),
                        k = t.location?.state,
                        Z = k?.step,
                        v = k?.inviteTransactionId,
                        C = (0, y.jm)({ roles: E }),
                        P = (0, y.So)({ roles: E }),
                        x = C ? h.autoclaim : v ? h.invite : h.default,
                        w = _[x].redirectPath({ inviteTransactionId: v }),
                        T = a.useMemo(() => !(g && !P) || g.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [g, P]),
                        A = { pathname: s.Js, state: { requirements: P ? null : g } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const S = b === s.Js ? A : b;
                    return i ? (S ? a.createElement(m.Z, { to: S }) : l || (f && !T) ? (Z === se ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: w }) : f ? a.createElement(ye, { inviteTransactionId: v, onboardingType: x }) : a.createElement(me, { inviteTransactionId: v, onboardingType: x, redirectPath: w })) : a.createElement(m.Z, { to: A })) : a.createElement(o.Z, { style: Ee.loadingStyle });
                },
                ge = { context: "PaymentsOnboarding" };
            function he(e) {
                return a.createElement(l.H, { errorConfig: ge }, a.createElement(be, e));
            }
            const Ee = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                fe = a.memo(he);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.86dbf85a.js.map
