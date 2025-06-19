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
                k = n(445664),
                _ = n(698478),
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
                        { permissions: f } = (0, k.Z)({ fetchKey: "Payments" }),
                        { data: C, fetchNext: B, hasNotices: T } = (0, A.Z)(),
                        q = (0, R.Gs)(f),
                        N = (0, _.nK)(f),
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
            n.r(t), n.d(t, { LinkAccount: () => P, default: () => _ });
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
            function k(e) {
                return a.createElement(o.H, { errorConfig: Z }, a.createElement(P, e));
            }
            const _ = a.memo(k);
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
                k = a.createElement(h.ZP, { color: "text", link: g.Rj, size: "subtext2" }, "USA Patriot Act Notice"),
                _ = a.createElement(h.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", f, ", ", P, ",", " ", Z, " and ", k, "."),
                C = Object.freeze({ [b.default]: { redirectPath: () => l.gp, buttonText: E, disclaimer: _ }, [b.autoclaim]: { redirectPath: () => l.gp, buttonText: E, disclaimer: _ }, [b.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${l.bR}/${e}` : l.gp), buttonText: E, disclaimer: _ } });
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
                        s = (0, i.hC)("payments_qr_onboarding_mobile_link_enabled") ? l.hv : l.sM;
                    return a.createElement(a.Fragment, null, a.createElement(h.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(h.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(A.Z, null, a.createElement(w.Z, { style: $.qrcode }, a.createElement(D.Z, { dimension: 200 * c.default.theme.scaleMultiplier, link: U({ user: r, path: s }) }))) : null);
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
                        k = P?.inviteTransactionId,
                        _ = (0, y.jm)({ roles: E }),
                        v = (0, y.So)({ roles: E }),
                        w = _ ? b.autoclaim : k ? b.invite : b.default,
                        I = C[w].redirectPath({ inviteTransactionId: k }),
                        x = a.useMemo(() => !(g && !v) || g.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [g, v]),
                        S = { pathname: l.Js, state: { requirements: v ? null : g } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const z = h === l.Js ? S : h;
                    return c ? (z ? a.createElement(m.Z, { to: z }) : s || (f && !x) ? (Z === ue ? a.createElement(d.Z, { errorPath: l.EA, linkType: l.P_.onboarding, redirectPath: I }) : f ? a.createElement(he, { inviteTransactionId: k, onboardingType: w }) : a.createElement(de, { inviteTransactionId: k, onboardingType: w, redirectPath: I })) : a.createElement(m.Z, { to: S })) : a.createElement(o.Z, { style: fe.loadingStyle });
                },
                be = { context: "PaymentsOnboarding" };
            function Ee(e) {
                return a.createElement(s.H, { errorConfig: be }, a.createElement(ge, e));
            }
            const fe = c.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                Pe = a.memo(Ee);
        },
        747995: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => ze, default: () => Ae, participantQuery: () => Se });
            var a = n(120721),
                r = n(202784),
                o = (n(585488), n(107267)),
                c = n(736063),
                s = n(725516),
                i = n(43429),
                l = (n(136728), n(325686)),
                u = n(731708),
                m = n(154003),
                d = n(167630),
                p = n(392237),
                y = n(80361),
                h = n(980407),
                g = n(514639),
                b = n(445664),
                E = n(412450),
                f = n(535338),
                P = n(615027),
                Z = n(281838),
                k = n(671738),
                _ = n(413713),
                C = n(934265),
                v = n(226332),
                w = n(743080),
                I = n(727384),
                x = n(436117);
            const S = Object.freeze({ [i.Rz.debit]: { label: "Send", title: "Send" }, [i.Rz.credit]: { label: "Request", title: "Request", scanMessage: "Let others scan your QR Code to pay you." } }),
                z = Object.freeze({ [i.Rz.debit]: x.d.CreateTransfer, [i.Rz.credit]: x.d.RequestTransfer });
            var B = n(787560),
                T = n(351743),
                A = n.n(T),
                D = n(726426),
                M = n.n(D),
                R = n(569309);
            const q = B.Z,
                N = () => {
                    const e = r.useMemo(() => M()(), []),
                        [t, n] = A()(q);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, fundedAmount: r, fundingAccountId: o, userId: c }) =>
                                new Promise((s, i) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: c, description: a, currency: "Usd", idempotency_key: e, additional_funding_source: o && r ? { payment_method_id: o, amount: { local_micro: r, currency: R.v.Usd } } : void 0 },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.transaction,
                                                a = e?.create_transfer?.id,
                                                r = e?.create_transfer?.transaction_status,
                                                o = e?.create_transfer?.challenge_id,
                                                c = e?.create_transfer?.errors;
                                            n ? s({ transactionId: n.id, status: n.transaction_status, challengeId: n.challenge_id }) : a ? s({ transactionId: a, status: r, challengeId: o }) : i(c || t);
                                        },
                                        updater: I.qQ,
                                        onError: i,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                H = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state,
                        p = a.location.pathname,
                        x = (0, s.z)(),
                        S = (0, w.jh)(),
                        { methodConfigs: B } = (0, E.Z)(),
                        { balance: T } = (0, C.Z)(),
                        { permissions: A, roles: D } = (0, b.Z)({ fetchKey: "Payments" }),
                        M = (0, f.p)(Se, { user_id: n }).user.result,
                        R = "User" === M?.__typename,
                        { usablePaymentMethods: q } = (0, v.Z)(),
                        H = r.useMemo(() => q?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [], [q]),
                        [O, F] = N(),
                        [$, L] = r.useState(H?.[0]),
                        [X, j] = r.useState(null),
                        W = r.useMemo(() => ({ ...c, userId: n, step: i.cX.fundingPane, amount: e }), [e, c, n]),
                        Y = r.useMemo(() => ({ closePath: g.gp, redirectPath: p, redirectState: { userId: n, userScreenName: M?.core?.screen_name, amount: e, step: i.cX.reviewPane, transferDirection: t } }), [p, n, e, t, M]),
                        V = r.useCallback(() => {
                            j(null);
                        }, []),
                        Q = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        J = r.useCallback(() => {
                            if (!T || !e) return 0;
                            const t = parseFloat(T?.available_amount_local_micro);
                            return (0, I.Dc)(e) - t;
                        }, [e, T]),
                        K = r.useMemo(() => {
                            const e = J();
                            return (0, I.p2)({ amount: e });
                        }, [J]),
                        G = r.useCallback(() => {
                            if (!$ || !$.rest_id) return;
                            const t = i.Rz.debit,
                                r = z[t],
                                o = (0, I.DO)({ roles: D, permissions: A, actionPermission: r }),
                                s = { ...W, transferDirection: t };
                            if ((x.scribe({ page: "money", section: "p2p-transfer-funded", component: t, action: "click" }), o)) a.push(o, { redirectPath: p, redirectState: s, closePath: g.gp });
                            else {
                                V();
                                const t = (0, I.Dc)(e),
                                    r = t - parseFloat(T?.available_amount_local_micro);
                                O({ amount: t.toString(), description: c?.description || "", userId: n, fundedAmount: r.toString(), fundingAccountId: $?.rest_id })
                                    .then((e) => {
                                        const { challengeId: t, status: n, transactionId: r } = e;
                                        (0, I.i7)({ status: n }) ? t && a.push(g.vw, { challengeId: t, redirectPath: p, redirectState: { ...s, step: i.cX.statusPane, transactionId: r }, closePath: g.gp, challengeInitiator: g.kW.transaction }) : a.replace({ pathname: p, state: { ...s, step: i.cX.statusPane, transactionId: r } });
                                    })
                                    .catch((e) => {
                                        const t = (0, _.XE)({ errors: e, roles: D });
                                        t ? a.replace(t, Y) : j(e);
                                    });
                            }
                        }, [$, e, x, T?.available_amount_local_micro, p, c?.description, O, a, Y, A, V, D, W, n]),
                        ee = r.useCallback(() => {
                            x.scribe({ page: "money", section: "p2p-transfer-funding", element: "cancel", action: "click" }), a.goBack();
                        }, [x, a]),
                        te = H?.[0],
                        ne = i.Rz.credit,
                        ae = te ? (0, I.xe)({ method: te, methodConfigs: B, transferDirection: ne }) : null,
                        re = r.useMemo(() => F || !e || !ae || !!X, [F, e, ae, X]),
                        oe = r.useCallback(
                            (e) => {
                                L(e);
                            },
                            [L],
                        ),
                        ce = r.useCallback(
                            (e) => {
                                const t = q?.find((t) => t.rest_id === e);
                                t && oe && oe(t);
                            },
                            [oe, q],
                        ),
                        se = r.useMemo(() => ({ redirectPath: p, redirectState: W }), [p, W]),
                        ie = r.useMemo(() => ({ pathname: "/i/money/link-card", state: se }), [se]);
                    return R ? r.createElement(h.Z, { backButtonType: "back", bottomBar: X ? r.createElement(l.Z, { style: S.footer }, r.createElement(_.ZP, { errors: X, linkState: Y, opts: { counterPartyScreenName: M?.core?.screen_name }, roles: D })) : null, history: a, onBackClick: Q, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: S.container }, r.createElement(l.Z, { style: U.fundingContainer }, r.createElement(y.default, { style: U.fundingIcon }), r.createElement(u.ZP, { color: "text", size: "headline1", weight: "normal" }, "Your balance isn't high enough to cover this payment"), r.createElement(u.ZP, { color: "gray700", size: "headline2", weight: "normal" }, `Deposit the remaining ${K} to complete it`), ae ? r.createElement(k.Z, { accountId: te?.rest_id, addBankCardLink: ie, methodConfigs: B, onSelectAccountId: ce, paymentMethods: H, selectedAccount: ae, transferDirection: ne }) : r.createElement(Z.Z, { link: ie, methodConfigs: B, transferDirection: ne, variant: "tile" })), r.createElement(l.Z, { style: w.ZP.actionButtons }, r.createElement(m.ZP, { disabled: F, onPress: ee, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Not Now"), r.createElement(m.ZP, { disabled: re, onPress: G, size: "large", style: w.ZP.button, type: "primaryFilled" }, F ? r.createElement(d.Z, null) : ((e) => `Deposit ${e}`)(K))))) : r.createElement(P.Z, { to: g.gp });
                },
                U = p.default.create((e) => ({ fundingContainer: { flex: 1, gap: e.spaces.space20 }, fundingIcon: { height: e.spaces.space40, width: e.spaces.space40 } })),
                O = r.memo(H);
            var F = n(73863),
                $ = n(952793),
                L = n(984067),
                X = n(413499),
                j = n(749286);
            const W = n(181234).Z,
                Y = () => {
                    const e = r.useMemo(() => M()(), []),
                        [t, n] = A()(W);
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
                                        updater: I.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                V = "Send Payment",
                Q = "Request",
                J = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state,
                        p = a.location.pathname,
                        y = (0, $.hC)("payments_transfer_funding_sources_enabled"),
                        E = (0, s.z)(),
                        Z = (0, w.jh)(),
                        { balance: k } = (0, C.Z)(),
                        { permissions: v, roles: x } = (0, b.Z)({ fetchKey: "Payments" }),
                        B = (0, I.MO)({ permissions: v }),
                        T = (0, f.p)(Se, { user_id: n }).user.result,
                        A = "User" === T?.__typename,
                        [D, M] = N(),
                        [R, q] = Y(),
                        [H, U] = r.useState(e ?? ""),
                        [O, F] = r.useState(!0),
                        [W, J] = r.useState(""),
                        [G, ee] = r.useState(null),
                        te = r.useMemo(() => ({ ...c, userId: n, step: i.cX.reviewPane, amount: H, description: W }), [H, c, n, W]),
                        ne = r.useMemo(() => ({ closePath: g.gp, redirectPath: p, redirectState: { userId: n, userScreenName: T?.core?.screen_name, amount: H, step: i.cX.reviewPane, transferDirection: t } }), [p, n, H, t, T]),
                        ae = r.useCallback(() => {
                            ee(null);
                        }, []),
                        re = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        oe = r.useCallback((e) => {
                            J(e.target.value);
                        }, []),
                        ce = r.useMemo(() => !k?.available_amount_local_micro || !H || (0, I.UV)({ balanceAmountMicro: k.available_amount_local_micro, amount: H }), [k, H]),
                        se = r.useCallback(
                            (e) => () => {
                                if (e === i.Rz.debit && !ce && y) return void a.push({ pathname: p, state: { ...te, step: i.cX.fundingPane, transferDirection: e } });
                                const t = z[e],
                                    r = (0, I.DO)({ roles: x, permissions: v, actionPermission: t }),
                                    o = { ...te, transferDirection: e };
                                if ((E.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) a.push(r, { redirectPath: p, redirectState: o, closePath: g.gp });
                                else {
                                    ae();
                                    const t = (0, I.Dc)(H);
                                    (e === i.Rz.credit ? R : D)({ amount: t.toString(), description: W, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: r } = e;
                                            (0, I.i7)({ status: n }) ? t && a.push(g.vw, { challengeId: t, redirectPath: p, redirectState: { ...o, step: i.cX.statusPane, transactionId: r }, closePath: g.gp, challengeInitiator: g.kW.transaction }) : a.replace({ pathname: p, state: { ...o, step: i.cX.statusPane, transactionId: r } });
                                        })
                                        .catch((e) => {
                                            const t = (0, _.XE)({ errors: e, roles: x });
                                            t ? a.replace(t, ne) : ee(e);
                                        });
                                }
                            },
                            [ce, y, x, v, te, E, a, p, ae, H, R, D, W, n, ne],
                        ),
                        ie = r.useMemo(() => M || q, [M, q]),
                        le = r.useMemo(() => ie || !H || !O || !!G, [ie, H, O, G]),
                        ue = le || (!y && !ce),
                        me = le || !B,
                        de = t ? S[t]?.title : null;
                    return A ? r.createElement(h.Z, { backButtonType: "back", bottomBar: G ? r.createElement(l.Z, { style: Z.footer }, r.createElement(_.ZP, { errors: G, linkState: ne, opts: { counterPartyScreenName: T?.core?.screen_name }, roles: x })) : null, history: a, onBackClick: re, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: Z.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, de ?? "Send or Request"), T && r.createElement(j.Z, { user: T, withCenterAlign: !0 }), r.createElement(L.Z, { amount: H, balance: k, isValid: O, label: "Enter amount", name: "amount", setAmount: U, setIsValid: F, validateBalance: t === i.Rz.debit && !y }), r.createElement(X.Z, { maxLength: i.w8, onChange: oe, placeholder: "Optionally add a note", placeholderTextColor: K.placeholder.color, value: W }), r.createElement(l.Z, { style: w.ZP.actionButtons }, t ? r.createElement(m.ZP, { disabled: t === i.Rz.credit ? me : le, onPress: se(t === i.Rz.credit ? i.Rz.credit : i.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, M || q ? r.createElement(d.Z, null) : t === i.Rz.credit ? Q : V) : r.createElement(r.Fragment, null, r.createElement(m.ZP, { disabled: me, onPress: se(i.Rz.credit), size: "large", style: w.ZP.button, type: "primaryOutlined" }, q ? r.createElement(d.Z, null) : Q), r.createElement(m.ZP, { disabled: ue, onPress: se(i.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, M ? r.createElement(d.Z, null) : V))))) : r.createElement(P.Z, { to: g.gp });
                },
                K = p.default.create((e) => ({ placeholder: { color: e.colors.gray400 } })),
                G = r.memo(J),
                ee = F.Z,
                te = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, f.p)(ee, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(G, { transferDirection: t, userId: a }) : r.createElement(P.Z, { to: g.gp });
                },
                ne = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                ae = (e) => r.createElement(c.H, { errorConfig: ne }, r.createElement(te, e)),
                re = r.memo(ae);
            var oe = n(874088),
                ce = n(339110),
                se = n(125363),
                ie = n(919022),
                le = n(724983),
                ue = n(114084);
            const me = le.Z,
                de = ({ onItemClick: e, viewerUserId: t }) => {
                    const n = (0, f.p)(me, {}),
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
                              { style: he.root },
                              r.createElement(u.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  l.Z,
                                  null,
                                  a.map((e) => e && r.createElement(ue.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: o(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                pe = { context: "RECENT_RECEIPIENTS" },
                ye = (e) => r.createElement(c.H, { errorConfig: pe }, r.createElement(de, e)),
                he = p.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                ge = r.memo(ye);
            var be = n(429371);
            const Ee = (e) => `x.com${g.HM}/${e}`,
                fe = ({ message: e, screenName: t }) => r.createElement(l.Z, { style: Pe.root }, r.createElement(be.Z, { dimension: 90 * p.default.theme.scaleMultiplier, link: Ee(t) }), r.createElement(u.ZP, { color: "gray700" }, e)),
                Pe = p.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                Ze = r.memo(fe),
                ke = [ce.my.PaymentsUsers],
                _e = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, w.jh)(),
                        c = n.location?.state,
                        m = n.location?.pathname,
                        d = (0, se.v9)(ie.ZP.selectViewerUser),
                        p = d?.id_str,
                        y = d?.screen_name,
                        b = e ? S[e] : {},
                        { scanMessage: E, title: f } = b,
                        P = r.useCallback((e) => e === p, [p]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: m, state: { ...c, step: i.cX.reviewPane, userId: e } });
                            },
                            [t, n, m, c],
                        ),
                        k = r.useCallback(
                            (e) => {
                                if (e.type === ce.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        _ = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        C = r.useCallback(() => {
                            n.push(g.gp);
                        }, [n]);
                    return r.createElement(h.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: a.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, f ?? "Send or Request"), r.createElement(l.Z, { style: w.ZP.content }, r.createElement(oe.default, { alwaysOpen: !0, filter: ke, getItemIsDisabled: (e) => e.type === ce.El.User && (P(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => k(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: ce._4.Unknown, testID: "typeaheadInput" }), E && y ? r.createElement(Ze, { message: E, screenName: y }) : null, r.createElement(ge, { onItemClick: _, viewerUserId: p }))));
                },
                Ce = r.memo(_e);
            var ve = n(293723);
            const we = ({ amount: e, transactionId: t, transferDirection: n }) => {
                    const a = (0, o.useHistory)(),
                        c = (0, s.z)(),
                        d = (0, w.jh)(),
                        p = n === i.Rz.credit,
                        y = r.useMemo(() => ((e, t) => `Your ${e} ${t ? "request" : "payment"} was sent successfully`)((0, I.p2)({ amount: 1e3 * parseFloat(e) * 1e3 }), p), [e, p]),
                        b = r.useCallback(() => {
                            c.scribe({ page: "money", section: "p2p-transfer-status", element: "view-details", action: "click" }), t && a.replace(`${g.bR}/${t}`);
                        }, [c, a, t]),
                        E = r.useCallback(() => {
                            c.scribe({ page: "money", section: "p2p-transfer-status", element: "done", action: "click" }), a.replace(g.gp);
                        }, [c, a]),
                        f = r.useCallback(() => {
                            a.replace(g.gp);
                        }, [a]);
                    return (
                        r.useEffect(() => {
                            c && c.scribe({ page: "money", section: "p2p-transfer-status", action: "impression" });
                        }, [c]),
                        r.createElement(h.Z, { backButtonType: "close", history: a, onBackClick: f }, r.createElement(l.Z, { style: d.container }, r.createElement(l.Z, { style: Ie.contentContainer }, r.createElement(l.Z, { style: Ie.content }, r.createElement(ve.default, { style: Ie.checkmarkIcon }), r.createElement(u.ZP, { align: "left", size: "title4", weight: "bold" }, y)), r.createElement(l.Z, { style: Ie.buttonContainer }, r.createElement(m.ZP, { onPress: b, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "View Transaction Details"), r.createElement(m.ZP, { onPress: E, size: "large", style: w.ZP.button, type: "primaryFilled" }, "Done")))))
                    );
                },
                Ie = p.default.create((e) => ({ contentContainer: { flex: 1, gap: e.spaces.space64 }, content: { flex: 1, gap: e.spaces.space32 }, checkmarkIcon: { color: e.colors.text, width: e.spaces.space40, height: e.spaces.space40 }, buttonContainer: { flexDirection: "column", gap: e.spaces.space16, width: "100%" } })),
                xe = r.memo(we),
                Se = a.Z,
                ze = (e) => {
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
                        l === i.cX.statusPane && u && m && d ? r.createElement(xe, { amount: m, transactionId: p, transferDirection: d, userId: u }) : l === i.cX.fundingPane && u && m ? r.createElement(O, { amount: m, transferDirection: d, userId: u }) : l === i.cX.reviewPane && u ? r.createElement(G, { amount: m, transferDirection: d, userId: u }) : a ? r.createElement(re, { screenName: a, transferDirection: d }) : r.createElement(Ce, { transferDirection: d })
                    );
                },
                Be = { context: "PaymentsP2PTransfer" };
            function Te(e) {
                return r.createElement(c.H, { errorConfig: Be }, r.createElement(ze, e));
            }
            const Ae = r.memo(Te);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                c = n(747995);
            const s = (e) => r.createElement(c.default, (0, a.Z)({}, e, { transferDirection: o.Rz.debit })),
                i = r.memo(s);
        },
        956110: (e, t, n) => {
            n.r(t), n.d(t, { PayYourBillsScreen: () => _, default: () => x, styles: () => I });
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
                k = `${Z} - Account Details`,
                _ = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: I.headerContainer }, a.createElement(r.Z, { style: I.iconContainer }, a.createElement(c.Z, { "aria-label": "Pay your bills icon", aspectMode: s.Z.SQUARE, image: d })), a.createElement(r.Z, { style: I.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: I.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: k, variant: "xl" }))));
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
                    return a.createElement(h.H, { errorConfig: C }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(v, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(g.nO, { namespace: P }, a.createElement(h.H, { errorConfig: C }, a.createElement(_, e)))));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.be93ef4a.js.map
