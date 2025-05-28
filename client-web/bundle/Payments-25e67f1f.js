"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var a = n(202784),
                o = n(325686),
                i = n(952428),
                r = n(731708),
                c = n(868634),
                l = n(167630),
                s = n(165822),
                u = n(953035),
                m = n(392237),
                d = n(108362),
                p = n(58399),
                y = n(2840),
                g = n(913408),
                h = n(72591),
                b = n(297896),
                E = n(436117),
                k = n(252021),
                f = n(736063),
                v = n(952793),
                Z = n(514639),
                C = n(445664),
                P = n(698478),
                _ = n(293115),
                x = n(312771),
                w = n(847347),
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
                    const { balance: t, interest: n, refetchStatus: m } = (0, z.Z)(),
                        d = (0, v.hC)("payments_tasks_carousel_enabled"),
                        k = (0, q.jh)(),
                        { permissions: f } = (0, C.Z)({ fetchKey: "Payments" }),
                        { data: _, fetchNext: S, hasNotices: I } = (0, B.Z)(),
                        N = (0, H.Gs)(f),
                        L = (0, P.nK)(f),
                        F = N || f?.includes(E.d.CreateDeposit),
                        $ = N || f?.includes(E.d.CreateWithdrawal),
                        j = a.createElement(i.Z, { link: Z.l_, style: q.ZP.column, testID: "account-balance" }, a.createElement(o.Z, { style: q.ZP.rowSpaceBetween }, a.createElement(r.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, M), n?.apy && a.createElement(c.ZP, { background: "green0", style: W.apyLabel, type: "bestValue" }, a.createElement(r.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, H.Bj)({ apy: n.apy })))), m === x.iF.LOADING ? a.createElement(l.Z, { style: W.balanceLoader }) : t ? a.createElement(T.Z, { amount: t.available_amount_local_micro, size: "title0", style: W.veritcalPadding }) : null, a.createElement(o.Z, { style: W.centeredRow }, a.createElement(r.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(p.default, { style: W.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": M, containerStyle: k.tile, stackLayoutUpperStyle: q.ZP.upper, upper: j, withInteractiveStyling: !1 }), I ? a.createElement(w.Z, { data: _, fetchNext: S, type: "notice" }) : null, a.createElement(o.Z, { style: k.pivotTileContainer }, a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !L, icon: y.default, iconColor: "text", isCompact: !0, link: L ? Z.HM : void 0, text: "Send", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !L, icon: g.default, iconColor: "text", isCompact: !0, link: L ? Z.Jv : void 0, text: "Request", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: [k.pivotTile], disabled: !F, icon: h.default, iconColor: "text", isCompact: !0, link: F ? Z.IN : void 0, text: "Deposit", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !$, icon: b.default, iconColor: "text", isCompact: !0, link: $ ? Z.r0 : void 0, text: "Withdraw", withInteractiveStyling: !0 })), d && a.createElement(A.Z, null));
                },
                $ = { context: "ACCOUNT_BALANCE" },
                W = m.default.create((e) => ({ balanceLoader: { minHeight: e.spaces.space72 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, apyLabel: { paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                j = (e) => {
                    const { history: t } = e,
                        n = (0, q.jh)(),
                        o = a.useCallback(() => a.createElement(d.Z, { style: n.root, withWideContainer: !0 }, a.createElement(f.H, { errorConfig: $ }, a.createElement(I.Z, null), a.createElement(f.H, { errorConfig: $ }, a.createElement(F, e)))), [n.root, e]),
                        i = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(_.nO, { namespace: N }, a.createElement(k.Z, { documentTitle: L, history: t, isFullWidth: !0, onBackClick: i, primaryContent: o(), rightControl: a.createElement(S.Z, null), sidebarContent: null, title: L }));
                },
                U = a.memo(j);
        },
        135099: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => T, default: () => I });
            var a = n(202784),
                o = n(107267),
                i = n(736063),
                r = n(725516),
                c = n(43429),
                l = n(167630),
                s = n(392237),
                u = n(782642),
                m = n(514639),
                d = n(413713),
                p = n(59815),
                y = (n(585488), n(351743)),
                g = n.n(y);
            const h = p.Z,
                b = () => {
                    const [e, t] = g()(h);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth" },
                                        onCompleted: (e) => {
                                            const a = e?.create_financial_institution_linking_session?.linking_token?.token,
                                                o = e?.create_financial_institution_linking_session?.provider,
                                                i = e?.create_financial_institution_linking_session?.errors,
                                                r = e?.create_financial_institution_linking_session?.challenge_id;
                                            r ? t({ challengeId: r }) : a && o ? t({ token: a, provider: o }) : n(i);
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
                    const e = (0, r.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        i = n.location?.state,
                        c = i?.redirectPath,
                        [s] = b(),
                        p = a.useMemo(() => (c === m.iE.bankAccounts ? m.iE.bankAccounts : m.gp), [c]);
                    return (
                        a.useEffect(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                s()
                                    .then(({ challengeId: t, provider: a, token: o }) => {
                                        if (t) n.replace(m.vw, { closePath: p, challengeId: t, challengeInitiator: m.kW.addBankAccount, redirectPath: m.ac, redirectState: i });
                                        else if (a && o) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...i, token: o, provider: a, linkType: m.P_.linkExternalAccount, closePath: p };
                                            n.replace(m.MW, t);
                                        }
                                    })
                                    .catch((a) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: a ? (0, d.kJ)({ errors: a }).message : "Something went wrong. Please try again later." }), n.replace(p);
                                    });
                        }, [t, e, p, i, s, n, c]),
                        a.createElement(l.Z, { style: k.loadingStyle })
                    );
                },
                k = s.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                f = a.memo(E);
            n(136728);
            var v = n(325686),
                Z = n(731708),
                C = n(154003),
                P = n(980407),
                _ = n(743080);
            const x = () => {
                    const e = (0, r.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        i = (0, _.jh)(),
                        s = n.location?.state,
                        p = s?.redirectPath,
                        [y, g] = b(),
                        h = a.useCallback(() => {
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
                    return a.createElement(P.Z, { backButtonType: "close", history: n, onBackClick: E }, a.createElement(v.Z, { style: i.container }, a.createElement(Z.ZP, { size: "title2", style: _.ZP.title, weight: "heavy" }, "Link a bank account"), a.createElement(Z.ZP, null, "You need to link your bank account before you can continue.")), a.createElement(v.Z, { style: i.footer }, a.createElement(Z.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(Z.ZP, { color: "text", link: c.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(C.ZP, { disabled: g, onPress: h, size: "large", type: "primaryFilled" }, g ? a.createElement(l.Z, null) : "Continue")));
                },
                w = a.memo(x),
                T = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, r.z)(),
                        i = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: i, action: "impression" });
                        }, [n, i]),
                        i === c.Vq.termsPane ? a.createElement(w, null) : a.createElement(f, null)
                    );
                },
                A = { context: "LinkAccount" };
            function S(e) {
                return a.createElement(i.H, { errorConfig: A }, a.createElement(T, e));
            }
            const I = a.memo(S);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var a = n(202784),
                o = n(107267),
                i = n(111677),
                r = n.n(i),
                c = n(827309);
            const l = r().j24c37b2,
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
                i = n(736063),
                r = n(827309),
                c = n(137882);
            const l = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, c.b)({}),
                        i = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        l = a.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return a.createElement(r.Z, { actionLabel: "Contact support", headline: "We cannot open your account at this time", history: t, onAction: i, onClose: l, subtext: "Please reach out to customer support for further assistance." });
                },
                s = { context: "PAYMENTS_NOT_AVAILABLE" },
                u = (e) => a.createElement(i.H, { errorConfig: s }, a.createElement(l, e)),
                m = a.memo(u);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            n(875640);
            var a = n(202784),
                o = n(325686),
                i = n(107267),
                r = n(731708),
                c = n(124964),
                l = n(392237),
                s = n(111677),
                u = n.n(s),
                m = n(293723),
                d = n(263272),
                p = n(171463),
                y = n(514639),
                g = n(827309);
            const h = u().j24c37b2,
                b = { [p.a.Age]: { description: "Be at least 18 years old" }, [p.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [p.a.Geography]: { description: "Be a resident of the United States of America" }, [p.a.TwoFactorAuth]: { description: "Secure your account with a passkey", cta: { label: "Setup", destination: y.ul } }, [p.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [p.a.Safety]: { description: "Your X account is in good standing" }, [p.a.Allowlist]: { description: "Your account is allowed" } },
                E = (e) => {
                    const t = (0, i.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        l = t.location?.state?.requirements;
                    return a.createElement(
                        g.Z,
                        { actionLabel: h, headline: "You’re not yet eligible", history: t, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: y.N6 },
                        l
                            ? a.createElement(
                                  o.Z,
                                  { style: k.requirements },
                                  l?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          i = b[n];
                                      return i ? a.createElement(o.Z, { key: n, style: k.item }, a.createElement(r.ZP, { style: k.label, weight: "bold" }, i.description, i.cta && !t ? a.createElement(a.Fragment, null, a.createElement(c.Z, { style: k.middot }), a.createElement(r.ZP, { link: i.cta.destination }, i.cta.label)) : null), t ? a.createElement(m.default, { style: k.iconChecked }) : a.createElement(d.default, { style: k.iconUnchecked })) : null;
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
                i = n(167630),
                r = n(392237),
                c = n(736063),
                l = n(952793),
                s = n(514639),
                u = n(725516),
                m = n(615027),
                d = n(160144),
                p = n(629015),
                y = n(727384),
                g = n(731708),
                h = n(43429);
            const b = Object.freeze({ default: "default", invite: "invite", autoclaim: "autoclaim" }),
                E = "Continue",
                k = a.createElement(g.ZP, { color: "text", link: h.uc, size: "subtext2" }, "Terms & Conditions"),
                f = a.createElement(g.ZP, { color: "text", link: h.hv, size: "subtext2" }, "Privacy Policy"),
                v = a.createElement(g.ZP, { color: "text", link: h.DH, size: "subtext2" }, "Short Form Disclosure"),
                Z = a.createElement(g.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", k, ", ", f, " ", "and ", v, "."),
                C = Object.freeze({ [b.default]: { redirectPath: () => s.gp, buttonText: E, disclaimer: Z }, [b.autoclaim]: { redirectPath: () => s.gp, buttonText: E, disclaimer: Z }, [b.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${s.bR}/${e}` : s.gp), buttonText: E, disclaimer: Z } });
            n(136728);
            var P = n(300583),
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
                        i = (0, l.hC)("payments_qr_onboarding_enabled"),
                        r = (0, l.hC)("payments_qr_onboarding_mobile_link_enabled") ? s.hv : s.sM;
                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement($, null)), n, a.createElement(g.ZP, { color: "gray700", size: "body" }, i ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), i ? a.createElement(B.Z, null, a.createElement(_.Z, { style: j.qrcode }, a.createElement(z.Z, { dimension: 200, link: F({ user: o, path: r }) }))) : null);
                },
                j = r.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
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
                ie = a.memo(oe),
                re = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === b.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(ie, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(K, null) : a.createElement(U, null));
                },
                ce = a.memo(re),
                le = P.Z,
                se = "setupPayments",
                ue = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const r = (0, o.useHistory)(),
                        c = (0, u.z)(),
                        l = (0, I.jh)(),
                        s = C[t],
                        [m, d] = w()(le),
                        p = r.location?.state,
                        y = s.buttonText,
                        g = s.disclaimer,
                        h = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: se }, query: r?.location?.query }), [p, r?.location?.query]),
                        b = a.useCallback(() => {
                            c.scribe({ page: "money", section: "onboarding", element: "agreeTerms", action: "click" }),
                                m({
                                    variables: {},
                                    onCompleted: () => {
                                        r.push(h());
                                    },
                                    onError: () => {
                                        r.push(h());
                                    },
                                });
                        }, [c, m, r, h]),
                        E = a.useCallback(() => {
                            r.push("/");
                        }, [r]),
                        k = d,
                        f = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(T.ZP, { disabled: k, onPress: b, size: "large", type: "primaryFilled" }, k ? a.createElement(i.Z, null) : y)), [k, b, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: r, onBackClick: E }, a.createElement(_.Z, { style: l.container }, a.createElement(A.default, { style: I.ZP.illustration }), a.createElement(ce, { inviteTransactionId: e, onboardingType: t })), a.createElement(_.Z, { style: l.footer }, a.createElement(_.Z, { style: I.ZP.row }, g), f));
                },
                me = a.memo(ue),
                de = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, o.useHistory)(),
                        i = (0, I.jh)(),
                        r = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(S.Z, { backButtonType: "close", history: n, onBackClick: r }, a.createElement(_.Z, { style: [i.container, pe.qrPadding] }, a.createElement(ce, { inviteTransactionId: e, onboardingType: t })));
                },
                pe = r.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { minHeight: 420 } })),
                ye = a.memo(de),
                ge = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: r, isEligible: c, paymentsRedirectPath: g, requirements: h, roles: E } = (0, p.Z)(),
                        k = (0, l.hC)("payments_qr_onboarding_enabled"),
                        f = t.location?.state,
                        v = f?.step,
                        Z = f?.inviteTransactionId,
                        P = (0, y.jm)({ roles: E }),
                        _ = (0, y.So)({ roles: E }),
                        x = P ? b.autoclaim : Z ? b.invite : b.default,
                        w = C[x].redirectPath({ inviteTransactionId: Z }),
                        T = a.useMemo(() => !(h && !_) || h.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [h, _]),
                        A = { pathname: s.Js, state: { requirements: _ ? null : h } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: v, action: "impression" });
                    }, [n, v]);
                    const S = g === s.Js ? A : g;
                    return r ? (S ? a.createElement(m.Z, { to: S }) : c || (k && !T) ? (v === se ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: w }) : k ? a.createElement(ye, { inviteTransactionId: Z, onboardingType: x }) : a.createElement(me, { inviteTransactionId: Z, onboardingType: x, redirectPath: w })) : a.createElement(m.Z, { to: A })) : a.createElement(i.Z, { style: Ee.loadingStyle });
                },
                he = { context: "PaymentsOnboarding" };
            function be(e) {
                return a.createElement(c.H, { errorConfig: he }, a.createElement(ge, e));
            }
            const Ee = r.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                ke = a.memo(be);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.5f0440ea.js.map
