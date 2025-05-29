"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var a = n(202784),
                o = n(325686),
                r = n(952428),
                i = n(731708),
                c = n(868634),
                l = n(167630),
                s = n(165822),
                u = n(392237),
                m = n(108362),
                d = n(58399),
                p = n(2840),
                y = n(913408),
                g = n(72591),
                b = n(297896),
                h = n(436117),
                E = n(252021),
                k = n(736063),
                f = n(952793),
                Z = n(514639),
                v = n(445664),
                P = n(698478),
                C = n(293115),
                _ = n(312771),
                x = n(847347),
                w = n(370347),
                T = n(634455),
                A = n(819404),
                S = n(575123),
                I = n(452275),
                B = n(412100),
                z = n(934265),
                q = n(743080),
                H = n(727384);
            const N = { page: "money", section: "balance" },
                L = "Money",
                M = "Balance",
                F = (e) => {
                    const { balance: t, interest: n, refetchStatus: u } = (0, z.Z)(),
                        m = (0, f.hC)("payments_tasks_carousel_enabled"),
                        E = (0, q.jh)(),
                        { permissions: k } = (0, v.Z)({ fetchKey: "Payments" }),
                        { data: C, fetchNext: S, hasNotices: I } = (0, B.Z)(),
                        N = (0, H.Gs)(k),
                        L = (0, P.nK)(k),
                        F = N || k?.includes(h.d.CreateDeposit),
                        $ = N || k?.includes(h.d.CreateWithdrawal),
                        j = a.createElement(r.Z, { link: Z.l_, style: q.ZP.column, testID: "account-balance" }, a.createElement(o.Z, { style: q.ZP.rowSpaceBetween }, a.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, M), n?.apy && a.createElement(c.ZP, { background: "green0", style: W.apyLabel, type: "bestValue" }, a.createElement(i.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, H.Bj)({ apy: n.apy })))), u === _.iF.LOADING ? a.createElement(l.Z, { style: W.balanceLoader }) : t ? a.createElement(T.Z, { amount: t.available_amount_local_micro, size: "title0", style: W.veritcalPadding }) : null, a.createElement(o.Z, { style: W.centeredRow }, a.createElement(i.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(d.default, { style: W.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": M, containerStyle: E.tile, stackLayoutUpperStyle: q.ZP.upper, upper: j, withInteractiveStyling: !1 }), I ? a.createElement(x.Z, { data: C, fetchNext: S, type: "notice" }) : null, a.createElement(o.Z, { style: E.pivotTileContainer }, a.createElement(w.Z, { disabled: !L, icon: p.default, link: L ? Z.HM : void 0, text: "Send" }), a.createElement(w.Z, { disabled: !L, icon: y.default, link: L ? Z.Jv : void 0, text: "Request" }), a.createElement(w.Z, { disabled: !F, icon: g.default, link: F ? Z.IN : void 0, text: "Deposit" }), a.createElement(w.Z, { disabled: !$, icon: b.default, link: $ ? Z.r0 : void 0, text: "Withdraw" })), m && a.createElement(A.Z, null));
                },
                $ = { context: "ACCOUNT_BALANCE" },
                W = u.default.create((e) => ({ balanceLoader: { minHeight: e.spaces.space72 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, apyLabel: { paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                j = (e) => {
                    const { history: t } = e,
                        n = (0, q.jh)(),
                        o = a.useCallback(() => a.createElement(m.Z, { style: n.root, withWideContainer: !0 }, a.createElement(k.H, { errorConfig: $ }, a.createElement(I.Z, null), a.createElement(k.H, { errorConfig: $ }, a.createElement(F, e)))), [n.root, e]),
                        r = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(C.nO, { namespace: N }, a.createElement(E.Z, { documentTitle: L, history: t, isFullWidth: !0, onBackClick: r, primaryContent: o(), rightControl: a.createElement(S.Z, null), sidebarContent: null, title: L }));
                },
                U = a.memo(j);
        },
        135099: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => T, default: () => I });
            var a = n(202784),
                o = n(107267),
                r = n(736063),
                i = n(725516),
                c = n(43429),
                l = n(167630),
                s = n(392237),
                u = n(782642),
                m = n(514639),
                d = n(413713),
                p = n(59815),
                y = (n(585488), n(351743)),
                g = n.n(y);
            const b = p.Z,
                h = () => {
                    const [e, t] = g()(b);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth" },
                                        onCompleted: (e) => {
                                            const a = e?.create_financial_institution_linking_session?.linking_token?.token,
                                                o = e?.create_financial_institution_linking_session?.provider,
                                                r = e?.create_financial_institution_linking_session?.errors,
                                                i = e?.create_financial_institution_linking_session?.challenge_id;
                                            i ? t({ challengeId: i }) : a && o ? t({ token: a, provider: o }) : n(r);
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
                    const e = (0, i.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        r = n.location?.state,
                        c = r?.redirectPath,
                        [s] = h(),
                        p = a.useMemo(() => (c === m.iE.bankAccounts ? m.iE.bankAccounts : m.gp), [c]);
                    return (
                        a.useEffect(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                s()
                                    .then(({ challengeId: t, provider: a, token: o }) => {
                                        if (t) n.replace(m.vw, { closePath: p, challengeId: t, challengeInitiator: m.kW.addBankAccount, redirectPath: m.ac, redirectState: r });
                                        else if (a && o) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...r, token: o, provider: a, linkType: m.P_.linkExternalAccount, closePath: p };
                                            n.replace(m.MW, t);
                                        }
                                    })
                                    .catch((a) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: a ? (0, d.kJ)({ errors: a }).message : "Something went wrong. Please try again later." }), n.replace(p);
                                    });
                        }, [t, e, p, r, s, n, c]),
                        a.createElement(l.Z, { style: k.loadingStyle })
                    );
                },
                k = s.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                f = a.memo(E);
            n(136728);
            var Z = n(325686),
                v = n(731708),
                P = n(154003),
                C = n(980407),
                _ = n(743080);
            const x = () => {
                    const e = (0, i.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        r = (0, _.jh)(),
                        s = n.location?.state,
                        p = s?.redirectPath,
                        [y, g] = h(),
                        b = a.useCallback(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                y()
                                    .then(({ challengeId: t, provider: a, token: o }) => {
                                        if (t) n.replace(m.vw, { challengeId: t, challengeInitiator: m.kW.addBankAccount, redirectPath: m.ac, redirectState: { ...s } });
                                        else if (a && o) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...s, token: o, provider: a, linkType: m.P_.linkExternalAccount };
                                            n.push(m.MW, t);
                                        }
                                    })
                                    .catch((n) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: n ? (0, d.kJ)({ errors: n }).message : "Something went wrong. Please try again later." });
                                    });
                        }, [t, e, s, y, n]),
                        E = a.useCallback(() => {
                            p === m.iE.bankAccounts ? n.push(m.iE.bankAccounts) : n.push(m.gp);
                        }, [n, p]);
                    return a.createElement(C.Z, { backButtonType: "close", history: n, onBackClick: E }, a.createElement(Z.Z, { style: r.container }, a.createElement(v.ZP, { size: "title2", style: _.ZP.title, weight: "heavy" }, "Link a bank account"), a.createElement(v.ZP, null, "You need to link your bank account before you can continue.")), a.createElement(Z.Z, { style: r.footer }, a.createElement(v.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(v.ZP, { color: "text", link: c.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(P.ZP, { disabled: g, onPress: b, size: "large", type: "primaryFilled" }, g ? a.createElement(l.Z, null) : "Continue")));
                },
                w = a.memo(x),
                T = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, i.z)(),
                        r = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: r, action: "impression" });
                        }, [n, r]),
                        r === c.Vq.termsPane ? a.createElement(w, null) : a.createElement(f, null)
                    );
                },
                A = { context: "LinkAccount" };
            function S(e) {
                return a.createElement(r.H, { errorConfig: A }, a.createElement(T, e));
            }
            const I = a.memo(S);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var a = n(202784),
                o = n(107267),
                r = n(111677),
                i = n.n(r),
                c = n(827309);
            const l = i().j24c37b2,
                s = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(c.Z, { actionLabel: l, headline: "Access denied", history: t, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                u = a.memo(s);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var a = n(202784),
                o = n(107267),
                r = n(736063),
                i = n(827309),
                c = n(137882);
            const l = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, c.b)({}),
                        r = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        l = a.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return a.createElement(i.Z, { actionLabel: "Contact support", headline: "We cannot open your account at this time", history: t, onAction: r, onClose: l, subtext: "Please reach out to customer support for further assistance." });
                },
                s = { context: "PAYMENTS_NOT_AVAILABLE" },
                u = (e) => a.createElement(r.H, { errorConfig: s }, a.createElement(l, e)),
                m = a.memo(u);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            n(875640);
            var a = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(731708),
                c = n(124964),
                l = n(392237),
                s = n(111677),
                u = n.n(s),
                m = n(293723),
                d = n(263272),
                p = n(171463),
                y = n(514639),
                g = n(827309);
            const b = u().j24c37b2,
                h = { [p.a.Age]: { description: "Be at least 18 years old" }, [p.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [p.a.Geography]: { description: "Be a resident of the United States of America" }, [p.a.TwoFactorAuth]: { description: "Secure your account with a passkey", cta: { label: "Setup", destination: y.ul } }, [p.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [p.a.Safety]: { description: "Your X account is in good standing" }, [p.a.Allowlist]: { description: "Your account is allowed" } },
                E = (e) => {
                    const t = (0, r.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        l = t.location?.state?.requirements;
                    return a.createElement(
                        g.Z,
                        { actionLabel: b, headline: "You’re not yet eligible", history: t, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: y.N6 },
                        l
                            ? a.createElement(
                                  o.Z,
                                  { style: k.requirements },
                                  l?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          r = h[n];
                                      return r ? a.createElement(o.Z, { key: n, style: k.item }, a.createElement(i.ZP, { style: k.label, weight: "bold" }, r.description, r.cta && !t ? a.createElement(a.Fragment, null, a.createElement(c.Z, { style: k.middot }), a.createElement(i.ZP, { link: r.cta.destination }, r.cta.label)) : null), t ? a.createElement(m.default, { style: k.iconChecked }) : a.createElement(d.default, { style: k.iconUnchecked })) : null;
                                  }),
                              )
                            : null,
                    );
                },
                k = l.default.create((e) => ({ requirements: { gap: e.spaces.space24, marginBottom: e.spaces.space32 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, middot: { color: e.colors.text } })),
                f = a.memo(E);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ke });
            var a = n(202784),
                o = n(107267),
                r = n(167630),
                i = n(392237),
                c = n(736063),
                l = n(952793),
                s = n(514639),
                u = n(725516),
                m = n(615027),
                d = n(160144),
                p = n(629015),
                y = n(727384),
                g = n(731708),
                b = n(43429);
            const h = Object.freeze({ default: "default", invite: "invite", autoclaim: "autoclaim" }),
                E = "Continue",
                k = a.createElement(g.ZP, { color: "text", link: b.uc, size: "subtext2" }, "Terms & Conditions"),
                f = a.createElement(g.ZP, { color: "text", link: b.hv, size: "subtext2" }, "Privacy Policy"),
                Z = a.createElement(g.ZP, { color: "text", link: b.DH, size: "subtext2" }, "Short Form Disclosure"),
                v = a.createElement(g.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", k, ", ", f, " ", "and ", Z, "."),
                P = Object.freeze({ [h.default]: { redirectPath: () => s.gp, buttonText: E, disclaimer: v }, [h.autoclaim]: { redirectPath: () => s.gp, buttonText: E, disclaimer: v }, [h.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${s.bR}/${e}` : s.gp), buttonText: E, disclaimer: v } });
            n(136728);
            var C = n(300583),
                _ = n(325686),
                x = (n(585488), n(351743)),
                w = n.n(x),
                T = n(154003),
                A = n(760286),
                S = n(980407),
                I = n(743080),
                B = n(691533),
                z = n(429371),
                q = n(125363),
                H = n(919022);
            const N = "Continue before the payment expires.",
                L = ({ invitationCount: e }) => !!e && e > 1,
                M = ({ invitationCount: e }) => (L({ invitationCount: e }) ? "Continue before the payments expire." : N),
                F = ({ path: e, user: t }) => {
                    const n = `x.com${e}`,
                        a = t?.id_str,
                        o = t?.screen_name;
                    return a && o ? `${n}?user_id=${a}&screen_name=${o}` : a ? `${n}?user_id=${a}` : n;
                },
                $ = () => {
                    const e = (0, q.v9)(H.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                W = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const o = (0, q.v9)(H.ZP.selectViewerUser),
                        r = (0, l.hC)("payments_qr_onboarding_enabled"),
                        i = (0, l.hC)("payments_qr_onboarding_mobile_link_enabled") ? s.hv : s.sM;
                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement($, null)), n, a.createElement(g.ZP, { color: "gray700", size: "body" }, r ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), r ? a.createElement(B.Z, null, a.createElement(_.Z, { style: j.qrcode }, a.createElement(z.Z, { dimension: 200, link: F({ user: o, path: i }) }))) : null);
                },
                j = i.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                U = a.memo(W);
            var D = n(883229),
                O = n(943914),
                R = n(329923);
            const Y = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                J = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                V = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, R.Z)();
                    return e ? a.createElement(U, { description: M({ invitationCount: t }), title: Y({ formattedAmount: e }) }) : a.createElement(U, null);
                },
                X = { context: "PaymentsPendingBalance" },
                G = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(U, null), type: "CustomRetry" }), []);
                    return a.createElement(D.N, { errorConfig: X, fallback: e }, a.createElement(O.B, null, a.createElement(V, null)));
                },
                K = a.memo(G);
            var Q = n(807896),
                ee = n(190940);
            const te = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ne = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, o] = (0, ee.Z)(e);
                    return n && o
                        ? a.createElement(
                              U,
                              (0, Q.Z)(
                                  { description: N, title: te(o) },
                                  t
                                      ? (() => {
                                            const { formattedAmount: e, invitationCount: t } = (0, R.Z)(),
                                                n = L({ invitationCount: t });
                                            return { subtitle: e && n ? a.createElement(g.ZP, { color: "gray700", size: "body" }, J({ formattedAmount: e })) : void 0, description: M({ invitationCount: t }) };
                                        })()
                                      : void 0,
                              ),
                          )
                        : t
                          ? a.createElement(K, null)
                          : a.createElement(U, null);
                },
                ae = { context: "PaymentsTransactionInvite" },
                oe = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(U, null), type: "CustomRetry" }), []);
                    return a.createElement(D.N, { errorConfig: ae, fallback: t }, a.createElement(O.B, null, a.createElement(ne, e)));
                },
                re = a.memo(oe),
                ie = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === h.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(re, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(K, null) : a.createElement(U, null));
                },
                ce = a.memo(ie),
                le = C.Z,
                se = "setupPayments",
                ue = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const i = (0, o.useHistory)(),
                        c = (0, u.z)(),
                        l = (0, I.jh)(),
                        s = P[t],
                        [m, d] = w()(le),
                        p = i.location?.state,
                        y = s.buttonText,
                        g = s.disclaimer,
                        b = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: se }, query: i?.location?.query }), [p, i?.location?.query]),
                        h = a.useCallback(() => {
                            c.scribe({ page: "money", section: "onboarding", element: "agreeTerms", action: "click" }),
                                m({
                                    variables: {},
                                    onCompleted: () => {
                                        i.push(b());
                                    },
                                    onError: () => {
                                        i.push(b());
                                    },
                                });
                        }, [c, m, i, b]),
                        E = a.useCallback(() => {
                            i.push("/");
                        }, [i]),
                        k = d,
                        f = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(T.ZP, { disabled: k, onPress: h, size: "large", type: "primaryFilled" }, k ? a.createElement(r.Z, null) : y)), [k, h, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: i, onBackClick: E }, a.createElement(_.Z, { style: l.container }, a.createElement(A.default, { style: I.ZP.illustration }), a.createElement(ce, { inviteTransactionId: e, onboardingType: t })), a.createElement(_.Z, { style: l.footer }, a.createElement(_.Z, { style: I.ZP.row }, g), f));
                },
                me = a.memo(ue),
                de = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, o.useHistory)(),
                        r = (0, I.jh)(),
                        i = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(S.Z, { backButtonType: "close", history: n, onBackClick: i }, a.createElement(_.Z, { style: [r.container, pe.qrPadding] }, a.createElement(ce, { inviteTransactionId: e, onboardingType: t })));
                },
                pe = i.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { minHeight: 420 } })),
                ye = a.memo(de),
                ge = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: i, isEligible: c, paymentsRedirectPath: g, requirements: b, roles: E } = (0, p.Z)(),
                        k = (0, l.hC)("payments_qr_onboarding_enabled"),
                        f = t.location?.state,
                        Z = f?.step,
                        v = f?.inviteTransactionId,
                        C = (0, y.jm)({ roles: E }),
                        _ = (0, y.So)({ roles: E }),
                        x = C ? h.autoclaim : v ? h.invite : h.default,
                        w = P[x].redirectPath({ inviteTransactionId: v }),
                        T = a.useMemo(() => !(b && !_) || b.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [b, _]),
                        A = { pathname: s.Js, state: { requirements: _ ? null : b } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const S = g === s.Js ? A : g;
                    return i ? (S ? a.createElement(m.Z, { to: S }) : c || (k && !T) ? (Z === se ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: w }) : k ? a.createElement(ye, { inviteTransactionId: v, onboardingType: x }) : a.createElement(me, { inviteTransactionId: v, onboardingType: x, redirectPath: w })) : a.createElement(m.Z, { to: A })) : a.createElement(r.Z, { style: Ee.loadingStyle });
                },
                be = { context: "PaymentsOnboarding" };
            function he(e) {
                return a.createElement(c.H, { errorConfig: be }, a.createElement(ge, e));
            }
            const Ee = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                ke = a.memo(he);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.a9f1c05a.js.map
