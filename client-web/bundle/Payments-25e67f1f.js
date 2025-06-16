"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var a = n(202784),
                r = n(325686),
                o = n(952428),
                c = n(731708),
                s = n(868634),
                i = n(167630),
                l = n(165822),
                u = n(392237),
                m = n(108362),
                d = n(58399),
                p = n(2840),
                y = n(913408),
                h = n(72591),
                g = n(297896),
                b = n(436117),
                E = n(252021),
                f = n(736063),
                P = n(952793),
                Z = n(514639),
                _ = n(445664),
                k = n(698478),
                C = n(293115),
                v = n(312771),
                w = n(847347),
                I = n(370347),
                x = n(634455),
                S = n(819404),
                z = n(601463),
                B = n(920113),
                T = n(452275),
                A = n(412100),
                D = n(934265),
                M = n(743080),
                R = n(727384);
            const q = { page: "money", section: "balance" },
                N = "Money",
                H = "Balance",
                U = (e) => {
                    const { balance: t, interest: n, refetchStatus: u } = (0, D.Z)(),
                        m = (0, P.hC)("payments_tasks_carousel_enabled"),
                        E = (0, M.jh)(),
                        { permissions: f } = (0, _.Z)({ fetchKey: "Payments" }),
                        { data: C, fetchNext: B, hasNotices: T } = (0, A.Z)(),
                        q = (0, R.Gs)(f),
                        N = (0, k.nK)(f),
                        U = q || f?.includes(b.d.CreateDeposit),
                        O = q || f?.includes(b.d.CreateWithdrawal),
                        $ = a.createElement(o.Z, { link: Z.l_, style: M.ZP.column, testID: "account-balance" }, a.createElement(r.Z, { style: M.ZP.rowSpaceBetween }, a.createElement(c.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, H), n?.apy && a.createElement(s.ZP, { background: "green0", style: M.ZP.label, type: "bestValue" }, a.createElement(c.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, R.Bj)({ apy: n.apy })))), u === v.iF.LOADING ? a.createElement(i.Z, { style: F.balanceLoader }) : t ? a.createElement(x.Z, { amount: t.available_amount_local_micro, size: "title0", style: F.veritcalPadding }) : null, a.createElement(r.Z, { style: F.centeredRow }, a.createElement(c.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(d.default, { style: F.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { "aria-label": H, containerStyle: E.tile, stackLayoutUpperStyle: M.ZP.upper, upper: $, withInteractiveStyling: !1 }), T ? a.createElement(w.Z, { data: C, fetchNext: B, type: "notice" }) : null, a.createElement(r.Z, { style: E.pivotTileContainer }, a.createElement(I.Z, { disabled: !N, icon: p.default, link: N ? Z.HM : void 0, text: "Send" }), a.createElement(I.Z, { disabled: !N, icon: y.default, link: N ? Z.Jv : void 0, text: "Request" }), a.createElement(I.Z, { disabled: !U, icon: h.default, link: U ? Z.IN : void 0, text: "Deposit" }), a.createElement(I.Z, { disabled: !O, icon: g.default, link: O ? Z.r0 : void 0, text: "Withdraw" })), m && a.createElement(S.Z, null), a.createElement(z.Z, null));
                },
                O = { context: "ACCOUNT_BALANCE" },
                F = u.default.create((e) => ({ balanceLoader: { minHeight: e.spaces.space72 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                $ = (e) => {
                    const { history: t } = e,
                        n = (0, M.jh)(),
                        r = a.useCallback(() => a.createElement(m.Z, { style: n.root, withWideContainer: !0 }, a.createElement(f.H, { errorConfig: O }, a.createElement(T.Z, null), a.createElement(f.H, { errorConfig: O }, a.createElement(U, e)))), [n.root, e]),
                        o = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(C.nO, { namespace: q }, a.createElement(E.Z, { documentTitle: N, history: t, isFullWidth: !0, onBackClick: o, primaryContent: r(), rightControl: a.createElement(B.Z, null), sidebarContent: null, title: N }));
                },
                L = a.memo($);
        },
        708186: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => P, default: () => k });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(725516),
                s = n(167630),
                i = n(392237),
                l = n(782642),
                u = n(514639),
                m = n(413713),
                d = n(59815),
                p = (n(585488), n(351743)),
                y = n.n(p);
            const h = d.Z,
                g = () => {
                    const [e, t] = y()(h);
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
                                                c = e?.create_financial_institution_linking_session?.challenge_id;
                                            c ? t({ challengeId: c }) : a && r ? t({ token: a, provider: r }) : n(o);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                b = () => {
                    const e = (0, c.z)(),
                        t = (0, l.p)(),
                        n = (0, r.useHistory)(),
                        o = n.location?.state,
                        i = o?.redirectPath,
                        [d] = g(),
                        p = a.useMemo(() => (i === u.iE.bankAccounts ? u.iE.bankAccounts : u.gp), [i]);
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
                        }, [t, e, p, o, d, n, i]),
                        a.createElement(s.Z, { style: E.loadingStyle })
                    );
                },
                E = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                f = a.memo(b),
                P = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, c.z)(),
                        o = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: o, action: "impression" });
                        }, [n, o]),
                        a.createElement(f, null)
                    );
                },
                Z = { context: "LinkAccount" };
            function _(e) {
                return a.createElement(o.H, { errorConfig: Z }, a.createElement(P, e));
            }
            const k = a.memo(_);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var a = n(202784),
                r = n(107267),
                o = n(111677),
                c = n.n(o),
                s = n(827309);
            const i = c().j24c37b2,
                l = (e) => {
                    const t = (0, r.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]);
                    return a.createElement(s.Z, { actionLabel: i, headline: "Access denied", history: t, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                u = a.memo(l);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(827309),
                s = n(137882);
            const i = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.bR)({}),
                        o = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        i = a.useCallback(() => {
                            t.replace("/");
                        }, [t]);
                    return a.createElement(c.Z, { actionLabel: "Contact support", headline: "We cannot open your account at this time", history: t, onAction: o, onClose: i, subtext: "Please reach out to customer support for further assistance." });
                },
                l = { context: "PAYMENTS_NOT_AVAILABLE" },
                u = (e) => a.createElement(o.H, { errorConfig: l }, a.createElement(i, e)),
                m = a.memo(u);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => P });
            n(875640);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                c = n(731708),
                s = n(124964),
                i = n(392237),
                l = n(111677),
                u = n.n(l),
                m = n(293723),
                d = n(263272),
                p = n(171463),
                y = n(514639),
                h = n(827309);
            const g = u().j24c37b2,
                b = { [p.a.Age]: { description: "Be at least 18 years old" }, [p.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [p.a.Geography]: { description: "Be a resident of the United States of America" }, [p.a.TwoFactorAuth]: { description: "Secure your account with a passkey", cta: { label: "Setup", destination: y.ul } }, [p.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [p.a.Safety]: { description: "Your X account is in good standing" }, [p.a.Allowlist]: { description: "Your account is allowed" } },
                E = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        i = t.location?.state?.requirements;
                    return a.createElement(
                        h.Z,
                        { actionLabel: g, headline: "You’re not yet eligible", history: t, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: y.N6 },
                        i
                            ? a.createElement(
                                  r.Z,
                                  { style: f.requirements },
                                  i?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          o = b[n];
                                      return o ? a.createElement(r.Z, { key: n, style: f.item }, a.createElement(c.ZP, { style: f.label, weight: "bold" }, o.description, o.cta && !t ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: f.middot }), a.createElement(c.ZP, { link: o.cta.destination }, o.cta.label)) : null), t ? a.createElement(m.default, { style: f.iconChecked }) : a.createElement(d.default, { style: f.iconUnchecked })) : null;
                                  }),
                              )
                            : null,
                    );
                },
                f = i.default.create((e) => ({ requirements: { gap: e.spaces.space24, marginBottom: e.spaces.space32 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, middot: { color: e.colors.text } })),
                P = a.memo(E);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Pe });
            var a = n(202784),
                r = n(107267),
                o = n(167630),
                c = n(392237),
                s = n(736063),
                i = n(952793),
                l = n(514639),
                u = n(725516),
                m = n(615027),
                d = n(160144),
                p = n(629015),
                y = n(727384),
                h = n(731708),
                g = n(43429);
            const b = Object.freeze({ default: "default", invite: "invite", autoclaim: "autoclaim" }),
                E = "Continue",
                f = a.createElement(h.ZP, { color: "text", link: g.uc, size: "subtext2" }, "Terms & Conditions"),
                P = a.createElement(h.ZP, { color: "text", link: g.hv, size: "subtext2" }, "Privacy Policy"),
                Z = a.createElement(h.ZP, { color: "text", link: g.DH, size: "subtext2" }, "Short Form Disclosure"),
                _ = a.createElement(h.ZP, { color: "text", link: g.Rj, size: "subtext2" }, "USA Patriot Act Notice"),
                k = a.createElement(h.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", f, ", ", P, ",", " ", Z, " and ", _, "."),
                C = Object.freeze({ [b.default]: { redirectPath: () => l.gp, buttonText: E, disclaimer: k }, [b.autoclaim]: { redirectPath: () => l.gp, buttonText: E, disclaimer: k }, [b.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${l.bR}/${e}` : l.gp), buttonText: E, disclaimer: k } });
            n(136728);
            var v = n(300583),
                w = n(325686),
                I = (n(585488), n(351743)),
                x = n.n(I),
                S = n(154003),
                z = n(760286),
                B = n(980407),
                T = n(743080),
                A = n(691533),
                D = n(429371),
                M = n(125363),
                R = n(919022);
            const q = "Continue before the payment expires.",
                N = ({ invitationCount: e }) => !!e && e > 1,
                H = ({ invitationCount: e }) => (N({ invitationCount: e }) ? "Continue before the payments expire." : q),
                U = ({ path: e, user: t }) => {
                    const n = `x.com${e}`,
                        a = t?.id_str,
                        r = t?.screen_name;
                    return a && r ? `${n}?user_id=${a}&screen_name=${r}` : a ? `${n}?user_id=${a}` : n;
                },
                O = () => {
                    const e = (0, M.v9)(R.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                F = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const r = (0, M.v9)(R.ZP.selectViewerUser),
                        o = (0, i.hC)("payments_qr_onboarding_enabled"),
                        c = (0, i.hC)("payments_qr_onboarding_mobile_link_enabled") ? l.hv : l.sM;
                    return a.createElement(a.Fragment, null, a.createElement(h.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(h.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(A.Z, null, a.createElement(w.Z, { style: $.qrcode }, a.createElement(D.Z, { dimension: 200, link: U({ user: r, path: c }) }))) : null);
                },
                $ = c.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                L = a.memo(F);
            var X = n(883229),
                j = n(943914),
                W = n(329923);
            const Y = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                V = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                Q = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, W.Z)();
                    return e ? a.createElement(L, { description: H({ invitationCount: t }), title: Y({ formattedAmount: e }) }) : a.createElement(L, null);
                },
                J = { context: "PaymentsPendingBalance" },
                K = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(L, null), type: "CustomRetry" }), []);
                    return a.createElement(X.N, { errorConfig: J, fallback: e }, a.createElement(j.B, null, a.createElement(Q, null)));
                },
                G = a.memo(K);
            var ee = n(807896),
                te = n(190940);
            const ne = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ae = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, r] = (0, te.Z)(e);
                    return n && r
                        ? a.createElement(
                              L,
                              (0, ee.Z)(
                                  { description: q, title: ne(r) },
                                  t
                                      ? (() => {
                                            const { formattedAmount: e, invitationCount: t } = (0, W.Z)(),
                                                n = N({ invitationCount: t });
                                            return { subtitle: e && n ? a.createElement(h.ZP, { color: "gray700", size: "body" }, V({ formattedAmount: e })) : void 0, description: H({ invitationCount: t }) };
                                        })()
                                      : void 0,
                              ),
                          )
                        : t
                          ? a.createElement(G, null)
                          : a.createElement(L, null);
                },
                re = { context: "PaymentsTransactionInvite" },
                oe = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(L, null), type: "CustomRetry" }), []);
                    return a.createElement(X.N, { errorConfig: re, fallback: t }, a.createElement(j.B, null, a.createElement(ae, e)));
                },
                ce = a.memo(oe),
                se = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === b.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(ce, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(G, null) : a.createElement(L, null));
                },
                ie = a.memo(se),
                le = v.Z,
                ue = "setupPayments",
                me = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const c = (0, r.useHistory)(),
                        s = (0, u.z)(),
                        i = (0, T.jh)(),
                        l = C[t],
                        [m, d] = x()(le),
                        p = c.location?.state,
                        y = l.buttonText,
                        h = l.disclaimer,
                        g = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: ue }, query: c?.location?.query }), [p, c?.location?.query]),
                        b = a.useCallback(() => {
                            s.scribe({ page: "money", section: "onboarding", element: "agreeTerms", action: "click" }),
                                m({
                                    variables: {},
                                    onCompleted: () => {
                                        c.push(g());
                                    },
                                    onError: () => {
                                        c.push(g());
                                    },
                                });
                        }, [s, m, c, g]),
                        E = a.useCallback(() => {
                            c.push("/");
                        }, [c]),
                        f = d,
                        P = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(S.ZP, { disabled: f, onPress: b, size: "large", type: "primaryFilled" }, f ? a.createElement(o.Z, null) : y)), [f, b, y]);
                    return a.createElement(B.Z, { backButtonType: "close", history: c, onBackClick: E }, a.createElement(w.Z, { style: i.container }, a.createElement(z.default, { style: T.ZP.illustration }), a.createElement(ie, { inviteTransactionId: e, onboardingType: t })), a.createElement(w.Z, { style: i.footer }, a.createElement(w.Z, { style: T.ZP.row }, h), P));
                },
                de = a.memo(me),
                pe = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, r.useHistory)(),
                        o = (0, T.jh)(),
                        c = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(B.Z, { backButtonType: "close", history: n, onBackClick: c }, a.createElement(w.Z, { style: [o.container, ye.qrPadding] }, a.createElement(ie, { inviteTransactionId: e, onboardingType: t })));
                },
                ye = c.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { minHeight: 420 } })),
                he = a.memo(pe),
                ge = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: c, isEligible: s, paymentsRedirectPath: h, requirements: g, roles: E } = (0, p.Z)(),
                        f = (0, i.hC)("payments_qr_onboarding_enabled"),
                        P = t.location?.state,
                        Z = P?.step,
                        _ = P?.inviteTransactionId,
                        k = (0, y.jm)({ roles: E }),
                        v = (0, y.So)({ roles: E }),
                        w = k ? b.autoclaim : _ ? b.invite : b.default,
                        I = C[w].redirectPath({ inviteTransactionId: _ }),
                        x = a.useMemo(() => !(g && !v) || g.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [g, v]),
                        S = { pathname: l.Js, state: { requirements: v ? null : g } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const z = h === l.Js ? S : h;
                    return c ? (z ? a.createElement(m.Z, { to: z }) : s || (f && !x) ? (Z === ue ? a.createElement(d.Z, { errorPath: l.EA, linkType: l.P_.onboarding, redirectPath: I }) : f ? a.createElement(he, { inviteTransactionId: _, onboardingType: w }) : a.createElement(de, { inviteTransactionId: _, onboardingType: w, redirectPath: I })) : a.createElement(m.Z, { to: S })) : a.createElement(o.Z, { style: fe.loadingStyle });
                },
                be = { context: "PaymentsOnboarding" };
            function Ee(e) {
                return a.createElement(s.H, { errorConfig: be }, a.createElement(ge, e));
            }
            const fe = c.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                Pe = a.memo(Ee);
        },
        541170: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => Te, default: () => Me, participantQuery: () => Be });
            var a = n(120721),
                r = n(202784),
                o = (n(585488), n(107267)),
                c = n(736063),
                s = n(725516),
                i = n(43429),
                l = (n(136728), n(325686)),
                u = n(731708),
                m = n(154003),
                d = n(392237),
                p = n(80361),
                y = n(980407),
                h = n(514639),
                g = n(445664),
                b = n(351990),
                E = n(535338),
                f = n(615027),
                P = n(281838),
                Z = n(671738),
                _ = n(413713),
                k = n(934265),
                C = n(226332),
                v = n(743080),
                w = n(727384),
                I = n(436117);
            const x = Object.freeze({ [i.Rz.debit]: { label: "Send", title: "Send" }, [i.Rz.credit]: { label: "Request", title: "Request", scanMessage: "Let others scan your QR Code to pay you." } }),
                S = Object.freeze({ [i.Rz.debit]: I.d.CreateTransfer, [i.Rz.credit]: I.d.RequestTransfer });
            var z = n(400364),
                B = n(351743),
                T = n.n(B),
                A = n(726426),
                D = n.n(A),
                M = n(569309);
            const R = z.Z,
                q = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = T()(R);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, fundedAmount: r, fundingAccountId: o, userId: c }) =>
                                new Promise((s, i) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: c, description: a, currency: M.v.Usd, idempotency_key: e, additional_funding_source: { payment_method_id: o, amount: { local_micro: r, currency: M.v.Usd } } },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.transaction,
                                                a = e?.create_transfer?.errors;
                                            if (n) {
                                                const { challenge_id: e, id: t, transaction_status: a } = n;
                                                s({ transactionId: t, status: a, challengeId: e });
                                            } else i(a || t);
                                        },
                                        updater: w.qQ,
                                        onError: i,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                N = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state,
                        d = a.location.pathname,
                        I = (0, s.z)(),
                        x = (0, v.jh)(),
                        { methodConfigs: z } = (0, b.Z)(),
                        { balance: B } = (0, k.Z)(),
                        { permissions: T, roles: A } = (0, g.Z)({ fetchKey: "Payments" }),
                        D = (0, E.p)(Be, { user_id: n }).user.result,
                        M = "User" === D?.__typename,
                        { usablePaymentMethods: R } = (0, C.Z)(),
                        N = r.useMemo(() => R?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [], [R]),
                        [U, O] = q(),
                        [F, $] = r.useState(N?.[0]),
                        [L, X] = r.useState(null),
                        j = r.useMemo(() => ({ ...c, userId: n, step: i.cX.fundingPane, amount: e }), [e, c, n]),
                        W = r.useMemo(() => ({ closePath: h.gp, redirectPath: d, redirectState: { userId: n, userScreenName: D?.core?.screen_name, amount: e, step: i.cX.reviewPane, transferDirection: t } }), [d, n, e, t, D]),
                        Y = r.useCallback(() => {
                            X(null);
                        }, []),
                        V = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        Q = r.useCallback(() => {
                            if (!B || !e) return 0;
                            const t = parseFloat(B?.available_amount_local_micro);
                            return (0, w.Dc)(e) - t;
                        }, [e, B]),
                        J = r.useMemo(() => {
                            const e = Q();
                            return (0, w.p2)({ amount: e });
                        }, [Q]),
                        K = r.useCallback(() => {
                            if (!F || !F.rest_id) return;
                            const t = i.Rz.debit,
                                r = S[t],
                                o = (0, w.DO)({ roles: A, permissions: T, actionPermission: r }),
                                s = { ...j, transferDirection: t };
                            if ((I.scribe({ page: "money", section: "p2p-transfer-funded", component: t, action: "click" }), o)) a.push(o, { redirectPath: d, redirectState: s, closePath: h.gp });
                            else {
                                Y();
                                const t = (0, w.Dc)(e),
                                    r = t - parseFloat(B?.available_amount_local_micro);
                                U({ amount: t.toString(), description: c?.description || "", userId: n, fundedAmount: r.toString(), fundingAccountId: F?.rest_id })
                                    .then((e) => {
                                        const { challengeId: t, status: n, transactionId: r } = e;
                                        (0, w.i7)({ status: n }) ? t && a.push(h.vw, { challengeId: t, redirectPath: d, redirectState: { ...s, step: i.cX.statusPane, transactionId: r }, closePath: h.gp, challengeInitiator: h.kW.transaction }) : a.replace({ pathname: d, state: { ...s, step: i.cX.statusPane, transactionId: r } });
                                    })
                                    .catch((e) => {
                                        const t = (0, _.XE)({ errors: e, roles: A });
                                        t ? a.replace(t, W) : X(e);
                                    });
                            }
                        }, [F, e, I, B?.available_amount_local_micro, d, c?.description, U, a, W, T, Y, A, j, n]),
                        G = r.useCallback(() => {
                            I.scribe({ page: "money", section: "p2p-transfer-funding", element: "cancel", action: "click" }), a.goBack();
                        }, [I, a]),
                        ee = N?.[0],
                        te = i.Rz.credit,
                        ne = ee ? (0, w.xe)({ method: ee, methodConfigs: z, transferDirection: te }) : null,
                        ae = r.useMemo(() => O || !e || !ne || !!L, [O, e, ne, L]),
                        re = r.useCallback(
                            (e) => {
                                $(e);
                            },
                            [$],
                        ),
                        oe = r.useCallback(
                            (e) => {
                                const t = R?.find((t) => t.rest_id === e);
                                t && re && re(t);
                            },
                            [re, R],
                        ),
                        ce = r.useMemo(() => ({ redirectPath: d, redirectState: j }), [d, j]),
                        se = r.useMemo(() => ({ pathname: "/i/money/link-card", state: ce }), [ce]);
                    return M ? r.createElement(y.Z, { backButtonType: "back", bottomBar: L ? r.createElement(l.Z, { style: x.footer }, r.createElement(_.ZP, { errors: L, linkState: W, opts: { counterPartyScreenName: D?.core?.screen_name }, roles: A })) : null, history: a, onBackClick: V, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: x.container }, r.createElement(l.Z, { style: H.fundingContainer }, r.createElement(p.default, { style: H.fundingIcon }), r.createElement(u.ZP, { color: "text", size: "headline1", weight: "normal" }, "Your balance isn't high enough to cover this payment"), r.createElement(u.ZP, { color: "gray700", size: "headline2", weight: "normal" }, `Deposit the remaining ${J} to complete it`), ne ? r.createElement(Z.Z, { accountId: ee?.rest_id, addBankCardLink: se, methodConfigs: z, onSelectAccountId: oe, paymentMethods: N, selectedAccount: ne, transferDirection: te }) : r.createElement(P.Z, { link: se, methodConfigs: z, transferDirection: te, variant: "tile" })), r.createElement(l.Z, { style: v.ZP.actionButtons }, r.createElement(m.ZP, { onPress: G, size: "large", style: v.ZP.button, type: "primaryOutlined" }, "Not Now"), r.createElement(m.ZP, { disabled: ae, onPress: K, size: "large", style: v.ZP.button, type: "primaryFilled" }, ((e) => `Deposit ${e}`)(J))))) : r.createElement(f.Z, { to: h.gp });
                },
                H = d.default.create((e) => ({ fundingContainer: { flex: 1, gap: e.spaces.space20 }, fundingIcon: { height: e.spaces.space40, width: e.spaces.space40 } })),
                U = r.memo(N);
            var O = n(73863),
                F = n(167630),
                $ = n(952793),
                L = n(984067),
                X = n(413499),
                j = n(749286);
            const W = n(181234).Z,
                Y = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = T()(W);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, c) => {
                                    t({
                                        variables: { amount_local_micro: n, sender_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.request_transfer?.id,
                                                a = e?.request_transfer?.transaction_status,
                                                r = e?.request_transfer?.challenge_id,
                                                s = e?.request_transfer?.errors;
                                            n ? o({ transactionId: n, challengeId: r, status: a }) : c(s || t);
                                        },
                                        updater: w.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const V = n(787560).Z,
                Q = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = T()(V);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, c) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.id,
                                                a = e?.create_transfer?.transaction_status,
                                                r = e?.create_transfer?.challenge_id,
                                                s = e?.create_transfer?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: r }) : c(s || t);
                                        },
                                        updater: w.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                J = "Send Payment",
                K = "Request",
                G = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state,
                        d = a.location.pathname,
                        p = (0, $.hC)("payments_transfer_funding_sources_enabled"),
                        b = (0, s.z)(),
                        P = (0, v.jh)(),
                        { balance: Z } = (0, k.Z)(),
                        { permissions: C, roles: I } = (0, g.Z)({ fetchKey: "Payments" }),
                        z = (0, w.MO)({ permissions: C }),
                        B = (0, E.p)(Be, { user_id: n }).user.result,
                        T = "User" === B?.__typename,
                        [A, D] = Q(),
                        [M, R] = Y(),
                        [q, N] = r.useState(e ?? ""),
                        [H, U] = r.useState(!0),
                        [O, W] = r.useState(""),
                        [V, G] = r.useState(null),
                        te = r.useMemo(() => ({ ...c, userId: n, step: i.cX.reviewPane, amount: q, description: O }), [q, c, n, O]),
                        ne = r.useMemo(() => ({ closePath: h.gp, redirectPath: d, redirectState: { userId: n, userScreenName: B?.core?.screen_name, amount: q, step: i.cX.reviewPane, transferDirection: t } }), [d, n, q, t, B]),
                        ae = r.useCallback(() => {
                            G(null);
                        }, []),
                        re = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        oe = r.useCallback((e) => {
                            W(e.target.value);
                        }, []),
                        ce = r.useMemo(() => !Z?.available_amount_local_micro || !q || (0, w.UV)({ balanceAmountMicro: Z.available_amount_local_micro, amount: q }), [Z, q]),
                        se = r.useCallback(
                            (e) => () => {
                                if (e === i.Rz.debit && !ce && p) return void a.push({ pathname: d, state: { ...te, step: i.cX.fundingPane, transferDirection: e } });
                                const t = S[e],
                                    r = (0, w.DO)({ roles: I, permissions: C, actionPermission: t }),
                                    o = { ...te, transferDirection: e };
                                if ((b.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) a.push(r, { redirectPath: d, redirectState: o, closePath: h.gp });
                                else {
                                    ae();
                                    const t = (0, w.Dc)(q);
                                    (e === i.Rz.credit ? M : A)({ amount: t.toString(), description: O, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: r } = e;
                                            (0, w.i7)({ status: n }) ? t && a.push(h.vw, { challengeId: t, redirectPath: d, redirectState: { ...o, step: i.cX.statusPane, transactionId: r }, closePath: h.gp, challengeInitiator: h.kW.transaction }) : a.replace({ pathname: d, state: { ...o, step: i.cX.statusPane, transactionId: r } });
                                        })
                                        .catch((e) => {
                                            const t = (0, _.XE)({ errors: e, roles: I });
                                            t ? a.replace(t, ne) : G(e);
                                        });
                                }
                            },
                            [ce, p, I, C, te, b, a, d, ae, q, M, A, O, n, ne],
                        ),
                        ie = r.useMemo(() => D || R, [D, R]),
                        le = r.useMemo(() => ie || !q || !H || !!V, [ie, q, H, V]),
                        ue = le || (!p && !ce),
                        me = le || !z,
                        de = t ? x[t]?.title : null;
                    return T ? r.createElement(y.Z, { backButtonType: "back", bottomBar: V ? r.createElement(l.Z, { style: P.footer }, r.createElement(_.ZP, { errors: V, linkState: ne, opts: { counterPartyScreenName: B?.core?.screen_name }, roles: I })) : null, history: a, onBackClick: re, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: P.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: v.ZP.title, weight: "bold" }, de ?? "Send or Request"), B && r.createElement(j.Z, { user: B, withCenterAlign: !0 }), r.createElement(L.Z, { amount: q, balance: Z, isValid: H, label: "Enter amount", name: "amount", setAmount: N, setIsValid: U, validateBalance: t === i.Rz.debit && !p }), r.createElement(X.Z, { maxLength: i.w8, onChange: oe, placeholder: "Optionally add a note", placeholderTextColor: ee.placeholder.color, value: O }), r.createElement(l.Z, { style: v.ZP.actionButtons }, t ? r.createElement(m.ZP, { disabled: t === i.Rz.credit ? me : le, onPress: se(t === i.Rz.credit ? i.Rz.credit : i.Rz.debit), size: "large", style: v.ZP.button, type: "primaryFilled" }, D || R ? r.createElement(F.Z, null) : t === i.Rz.credit ? K : J) : r.createElement(r.Fragment, null, r.createElement(m.ZP, { disabled: me, onPress: se(i.Rz.credit), size: "large", style: v.ZP.button, type: "primaryOutlined" }, R ? r.createElement(F.Z, null) : K), r.createElement(m.ZP, { disabled: ue, onPress: se(i.Rz.debit), size: "large", style: v.ZP.button, type: "primaryFilled" }, D ? r.createElement(F.Z, null) : J))))) : r.createElement(f.Z, { to: h.gp });
                },
                ee = d.default.create((e) => ({ placeholder: { color: e.colors.gray400 } })),
                te = r.memo(G),
                ne = O.Z,
                ae = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, E.p)(ne, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(te, { transferDirection: t, userId: a }) : r.createElement(f.Z, { to: h.gp });
                },
                re = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                oe = (e) => r.createElement(c.H, { errorConfig: re }, r.createElement(ae, e)),
                ce = r.memo(oe);
            var se = n(874088),
                ie = n(339110),
                le = n(125363),
                ue = n(919022),
                me = n(724983),
                de = n(114084);
            const pe = me.Z,
                ye = ({ onItemClick: e, viewerUserId: t }) => {
                    const n = (0, E.p)(pe, {}),
                        a = n?.get_payments_recent_participants?.slice(0, 5),
                        o = r.useCallback(
                            (t, n) => () => {
                                e(t, n);
                            },
                            [e],
                        );
                    return a && a.length > 0
                        ? r.createElement(
                              l.Z,
                              { style: be.root },
                              r.createElement(u.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  l.Z,
                                  null,
                                  a.map((e) => e && r.createElement(de.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: o(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                he = { context: "RECENT_RECEIPIENTS" },
                ge = (e) => r.createElement(c.H, { errorConfig: he }, r.createElement(ye, e)),
                be = d.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                Ee = r.memo(ge);
            var fe = n(429371);
            const Pe = (e) => `x.com${h.HM}/${e}`,
                Ze = ({ message: e, screenName: t }) => r.createElement(l.Z, { style: _e.root }, r.createElement(fe.Z, { dimension: 90, link: Pe(t) }), r.createElement(u.ZP, { color: "gray700" }, e)),
                _e = d.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                ke = r.memo(Ze),
                Ce = [ie.my.PaymentsUsers],
                ve = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, v.jh)(),
                        c = n.location?.state,
                        m = n.location?.pathname,
                        d = (0, le.v9)(ue.ZP.selectViewerUser),
                        p = d?.id_str,
                        g = d?.screen_name,
                        b = e ? x[e] : {},
                        { scanMessage: E, title: f } = b,
                        P = r.useCallback((e) => e === p, [p]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: m, state: { ...c, step: i.cX.reviewPane, userId: e } });
                            },
                            [t, n, m, c],
                        ),
                        _ = r.useCallback(
                            (e) => {
                                if (e.type === ie.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        k = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        C = r.useCallback(() => {
                            n.push(h.gp);
                        }, [n]);
                    return r.createElement(y.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: a.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: v.ZP.title, weight: "bold" }, f ?? "Send or Request"), r.createElement(l.Z, { style: v.ZP.content }, r.createElement(se.default, { alwaysOpen: !0, filter: Ce, getItemIsDisabled: (e) => e.type === ie.El.User && (P(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => _(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: ie._4.Unknown, testID: "typeaheadInput" }), E && g ? r.createElement(ke, { message: E, screenName: g }) : null, r.createElement(Ee, { onItemClick: k, viewerUserId: p }))));
                },
                we = r.memo(ve);
            var Ie = n(293723);
            const xe = ({ amount: e, transactionId: t, transferDirection: n }) => {
                    const a = (0, o.useHistory)(),
                        c = (0, s.z)(),
                        d = (0, v.jh)(),
                        p = n === i.Rz.credit,
                        g = r.useMemo(() => ((e, t) => `Your ${e} ${t ? "request" : "payment"} was sent successfully`)((0, w.p2)({ amount: 1e3 * parseFloat(e) * 1e3 }), p), [e, p]),
                        b = r.useCallback(() => {
                            c.scribe({ page: "money", section: "p2p-transfer-status", element: "view-details", action: "click" }), t && a.replace(`${h.bR}/${t}`);
                        }, [c, a, t]),
                        E = r.useCallback(() => {
                            c.scribe({ page: "money", section: "p2p-transfer-status", element: "done", action: "click" }), a.replace(h.gp);
                        }, [c, a]),
                        f = r.useCallback(() => {
                            a.replace(h.gp);
                        }, [a]);
                    return (
                        r.useEffect(() => {
                            c && c.scribe({ page: "money", section: "p2p-transfer-status", action: "impression" });
                        }, [c]),
                        r.createElement(y.Z, { backButtonType: "close", history: a, onBackClick: f }, r.createElement(l.Z, { style: d.container }, r.createElement(l.Z, { style: Se.contentContainer }, r.createElement(l.Z, { style: Se.content }, r.createElement(Ie.default, { style: Se.checkmarkIcon }), r.createElement(u.ZP, { align: "left", size: "title4", weight: "bold" }, g)), r.createElement(l.Z, { style: Se.buttonContainer }, r.createElement(m.ZP, { onPress: b, size: "large", style: v.ZP.button, type: "primaryOutlined" }, "View Transaction Details"), r.createElement(m.ZP, { onPress: E, size: "large", style: v.ZP.button, type: "primaryFilled" }, "Done")))))
                    );
                },
                Se = d.default.create((e) => ({ contentContainer: { flex: 1, gap: e.spaces.space64 }, content: { flex: 1, gap: e.spaces.space32 }, checkmarkIcon: { color: e.colors.text, width: e.spaces.space40, height: e.spaces.space40 }, buttonContainer: { flexDirection: "column", gap: e.spaces.space16, width: "100%" } })),
                ze = r.memo(xe),
                Be = a.Z,
                Te = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.z)(),
                        a = (0, o.useParams)().screenName,
                        c = t.location?.state,
                        l = c?.step,
                        u = c?.userId,
                        m = c?.amount,
                        d = e.transferDirection ?? c?.transferDirection,
                        p = c?.transactionId;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: l, component: d, action: "impression" });
                        }, [n, l, d]),
                        l === i.cX.statusPane && u && m && d ? r.createElement(ze, { amount: m, transactionId: p, transferDirection: d, userId: u }) : l === i.cX.fundingPane && u && m ? r.createElement(U, { amount: m, transferDirection: d, userId: u }) : l === i.cX.reviewPane && u ? r.createElement(te, { amount: m, transferDirection: d, userId: u }) : a ? r.createElement(ce, { screenName: a, transferDirection: d }) : r.createElement(we, { transferDirection: d })
                    );
                },
                Ae = { context: "PaymentsP2PTransfer" };
            function De(e) {
                return r.createElement(c.H, { errorConfig: Ae }, r.createElement(Te, e));
            }
            const Me = r.memo(De);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                c = n(541170);
            const s = (e) => r.createElement(c.default, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                i = r.memo(s);
        },
        956110: (e, t, n) => {
            n.r(t), n.d(t, { PayYourBillsScreen: () => k, default: () => x, styles: () => I });
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                c = n(530525),
                s = n(439592),
                i = n(731708),
                l = n(154003),
                u = n(167630),
                m = n(392237),
                d = n(656805),
                p = n(980407),
                y = n(652904),
                h = n(736063),
                g = n(293115),
                b = n(978167),
                E = n(24568),
                f = n(743080);
            const P = { page: "money", section: "pay-your-bills" },
                Z = "Pay your bills",
                _ = `${Z} - Account Details`,
                k = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: I.headerContainer }, a.createElement(r.Z, { style: I.iconContainer }, a.createElement(c.Z, { "aria-label": "Pay your bills icon", aspectMode: s.Z.SQUARE, image: d })), a.createElement(r.Z, { style: I.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: I.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: _, variant: "xl" }))));
                },
                C = { context: "PAY_YOUR_BILLS" },
                v = () => {
                    const e = (0, o.useHistory)(),
                        { handlePreferencesChange: t, isInProgress: n, preferences: c } = (0, E.Z)(),
                        s = (0, f.jh)(),
                        [m, d] = a.useState(c.enable_bill_pay),
                        p = a.useMemo(() => (m ? "Done" : "Enable"), [m]),
                        y = a.useCallback(() => {
                            m ? e.goBack() : (d(!0), t("enable_bill_pay", !0));
                        }, [t, e, m]);
                    return a.createElement(r.Z, { style: s.footer }, a.createElement(l.ZP, { disabled: n, onClick: y, type: "primaryFilled" }, p), a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2" }, n ? a.createElement(u.Z, null) : "X Money is a financial technology company, and not a bank. Bank accounts are held at Cross River Bank, Member FDIC."));
                },
                w = (e) => {
                    const { history: t } = e,
                        n = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(h.H, { errorConfig: C }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(v, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(g.nO, { namespace: P }, a.createElement(h.H, { errorConfig: C }, a.createElement(k, e)))));
                },
                I = m.default.create((e) => ({ headerContainer: { gap: e.spaces.space24, marginTop: e.spaces.space24, marginBottom: e.spaces.space40 }, iconContainer: { height: e.spaces.space64, width: e.spaces.space64 }, titleContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, accountDetailsContainer: { marginBottom: e.spaces.space24 } })),
                x = a.memo(w);
        },
        944775: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(514639),
                s = n(725516),
                i = n(160144);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.z)(),
                        o = t.location?.state?.redirectPath,
                        l = t.location?.state?.redirectState,
                        u = t.location?.state?.closePath,
                        m = t.location?.state?.field,
                        d = a.useMemo(() => {
                            switch (m) {
                                case "name":
                                    return c.P_.updateName;
                                case "address":
                                    return c.P_.updateAddress;
                                default:
                                    return;
                            }
                        }, [m]);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "personal-update", action: "impression" });
                        }, [n]),
                        a.createElement(i.Z, { additionalParams: m ? [{ key: "what", value: m }] : void 0, closePath: u, linkType: d, redirectPath: o, redirectState: l })
                    );
                },
                u = { context: "PersonalUpdate" };
            function m(e) {
                return a.createElement(o.H, { errorConfig: u }, a.createElement(l, e));
            }
            const d = a.memo(m);
        },
        777527: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                c = n(514639),
                s = n(725516),
                i = n(160144);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.z)(),
                        o = t.location?.state,
                        l = o?.redirectPath,
                        u = o?.closePath ?? c.gp,
                        m = o?.redirectState;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "questions", action: "impression" });
                        }, [n]),
                        a.createElement(i.Z, { closePath: u, linkType: c.P_.questions, redirectPath: l, redirectState: m })
                    );
                },
                u = { context: "PaymentsQuestions" };
            function m(e) {
                return a.createElement(o.H, { errorConfig: u }, a.createElement(l, e));
            }
            const d = a.memo(m);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.e52a551a.js.map
