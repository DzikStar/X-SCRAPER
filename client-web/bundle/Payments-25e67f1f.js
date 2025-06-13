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
                _ = n(952793),
                Z = n(514639),
                P = n(445664),
                k = n(698478),
                C = n(293115),
                v = n(312771),
                w = n(847347),
                I = n(370347),
                x = n(634455),
                S = n(819404),
                A = n(601463),
                z = n(575123),
                M = n(452275),
                B = n(412100),
                T = n(934265),
                D = n(743080),
                R = n(727384);
            const q = { page: "money", section: "balance" },
                N = "Money",
                H = "Balance",
                U = (e) => {
                    const { balance: t, interest: n, refetchStatus: u } = (0, T.Z)(),
                        m = (0, _.hC)("payments_tasks_carousel_enabled"),
                        E = (0, D.jh)(),
                        { permissions: f } = (0, P.Z)({ fetchKey: "Payments" }),
                        { data: C, fetchNext: z, hasNotices: M } = (0, B.Z)(),
                        q = (0, R.Gs)(f),
                        N = (0, k.nK)(f),
                        U = q || f?.includes(b.d.CreateDeposit),
                        O = q || f?.includes(b.d.CreateWithdrawal),
                        F = a.createElement(o.Z, { link: Z.l_, style: D.ZP.column, testID: "account-balance" }, a.createElement(r.Z, { style: D.ZP.rowSpaceBetween }, a.createElement(c.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, H), n?.apy && a.createElement(s.ZP, { background: "green0", style: D.ZP.label, type: "bestValue" }, a.createElement(c.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, R.Bj)({ apy: n.apy })))), u === v.iF.LOADING ? a.createElement(i.Z, { style: $.balanceLoader }) : t ? a.createElement(x.Z, { amount: t.available_amount_local_micro, size: "title0", style: $.veritcalPadding }) : null, a.createElement(r.Z, { style: $.centeredRow }, a.createElement(c.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(d.default, { style: $.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { "aria-label": H, containerStyle: E.tile, stackLayoutUpperStyle: D.ZP.upper, upper: F, withInteractiveStyling: !1 }), M ? a.createElement(w.Z, { data: C, fetchNext: z, type: "notice" }) : null, a.createElement(r.Z, { style: E.pivotTileContainer }, a.createElement(I.Z, { disabled: !N, icon: p.default, link: N ? Z.HM : void 0, text: "Send" }), a.createElement(I.Z, { disabled: !N, icon: y.default, link: N ? Z.Jv : void 0, text: "Request" }), a.createElement(I.Z, { disabled: !U, icon: h.default, link: U ? Z.IN : void 0, text: "Deposit" }), a.createElement(I.Z, { disabled: !O, icon: g.default, link: O ? Z.r0 : void 0, text: "Withdraw" })), m && a.createElement(S.Z, null), a.createElement(A.Z, null));
                },
                O = { context: "ACCOUNT_BALANCE" },
                $ = u.default.create((e) => ({ balanceLoader: { minHeight: e.spaces.space72 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                F = (e) => {
                    const { history: t } = e,
                        n = (0, D.jh)(),
                        r = a.useCallback(() => a.createElement(m.Z, { style: n.root, withWideContainer: !0 }, a.createElement(f.H, { errorConfig: O }, a.createElement(M.Z, null), a.createElement(f.H, { errorConfig: O }, a.createElement(U, e)))), [n.root, e]),
                        o = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(C.nO, { namespace: q }, a.createElement(E.Z, { documentTitle: N, history: t, isFullWidth: !0, onBackClick: o, primaryContent: r(), rightControl: a.createElement(z.Z, null), sidebarContent: null, title: N }));
                },
                L = a.memo(F);
        },
        708186: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => _, default: () => k });
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
                _ = (e) => {
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
            function P(e) {
                return a.createElement(o.H, { errorConfig: Z }, a.createElement(_, e));
            }
            const k = a.memo(P);
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
                        n = (0, s.b)({}),
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
            n.r(t), n.d(t, { default: () => _ });
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
                _ = a.memo(E);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => _e });
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
                _ = a.createElement(h.ZP, { color: "text", link: g.hv, size: "subtext2" }, "Privacy Policy"),
                Z = a.createElement(h.ZP, { color: "text", link: g.DH, size: "subtext2" }, "Short Form Disclosure"),
                P = a.createElement(h.ZP, { color: "text", link: g.Rj, size: "subtext2" }, "USA Patriot Act Notice"),
                k = a.createElement(h.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", E, "', you agree to the ", f, ", ", _, ",", " ", Z, " and ", P, "."),
                C = Object.freeze({ [b.default]: { redirectPath: () => l.gp, buttonText: E, disclaimer: k }, [b.autoclaim]: { redirectPath: () => l.gp, buttonText: E, disclaimer: k }, [b.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${l.bR}/${e}` : l.gp), buttonText: E, disclaimer: k } });
            n(136728);
            var v = n(300583),
                w = n(325686),
                I = (n(585488), n(351743)),
                x = n.n(I),
                S = n(154003),
                A = n(760286),
                z = n(980407),
                M = n(743080),
                B = n(691533),
                T = n(429371),
                D = n(125363),
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
                    const e = (0, D.v9)(R.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                $ = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const r = (0, D.v9)(R.ZP.selectViewerUser),
                        o = (0, i.hC)("payments_qr_onboarding_enabled"),
                        c = (0, i.hC)("payments_qr_onboarding_mobile_link_enabled") ? l.hv : l.sM;
                    return a.createElement(a.Fragment, null, a.createElement(h.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(h.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(B.Z, null, a.createElement(w.Z, { style: F.qrcode }, a.createElement(T.Z, { dimension: 200, link: U({ user: r, path: c }) }))) : null);
                },
                F = c.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                L = a.memo($);
            var j = n(883229),
                X = n(943914),
                Y = n(329923);
            const W = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                V = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                Q = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, Y.Z)();
                    return e ? a.createElement(L, { description: H({ invitationCount: t }), title: W({ formattedAmount: e }) }) : a.createElement(L, null);
                },
                J = { context: "PaymentsPendingBalance" },
                K = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(L, null), type: "CustomRetry" }), []);
                    return a.createElement(j.N, { errorConfig: J, fallback: e }, a.createElement(X.B, null, a.createElement(Q, null)));
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
                                            const { formattedAmount: e, invitationCount: t } = (0, Y.Z)(),
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
                    return a.createElement(j.N, { errorConfig: re, fallback: t }, a.createElement(X.B, null, a.createElement(ae, e)));
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
                        i = (0, M.jh)(),
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
                        _ = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(S.ZP, { disabled: f, onPress: b, size: "large", type: "primaryFilled" }, f ? a.createElement(o.Z, null) : y)), [f, b, y]);
                    return a.createElement(z.Z, { backButtonType: "close", history: c, onBackClick: E }, a.createElement(w.Z, { style: i.container }, a.createElement(A.default, { style: M.ZP.illustration }), a.createElement(ie, { inviteTransactionId: e, onboardingType: t })), a.createElement(w.Z, { style: i.footer }, a.createElement(w.Z, { style: M.ZP.row }, h), _));
                },
                de = a.memo(me),
                pe = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, r.useHistory)(),
                        o = (0, M.jh)(),
                        c = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(z.Z, { backButtonType: "close", history: n, onBackClick: c }, a.createElement(w.Z, { style: [o.container, ye.qrPadding] }, a.createElement(ie, { inviteTransactionId: e, onboardingType: t })));
                },
                ye = c.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { minHeight: 420 } })),
                he = a.memo(pe),
                ge = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: c, isEligible: s, paymentsRedirectPath: h, requirements: g, roles: E } = (0, p.Z)(),
                        f = (0, i.hC)("payments_qr_onboarding_enabled"),
                        _ = t.location?.state,
                        Z = _?.step,
                        P = _?.inviteTransactionId,
                        k = (0, y.jm)({ roles: E }),
                        v = (0, y.So)({ roles: E }),
                        w = k ? b.autoclaim : P ? b.invite : b.default,
                        I = C[w].redirectPath({ inviteTransactionId: P }),
                        x = a.useMemo(() => !(g && !v) || g.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [g, v]),
                        S = { pathname: l.Js, state: { requirements: v ? null : g } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const A = h === l.Js ? S : h;
                    return c ? (A ? a.createElement(m.Z, { to: A }) : s || (f && !x) ? (Z === ue ? a.createElement(d.Z, { errorPath: l.EA, linkType: l.P_.onboarding, redirectPath: I }) : f ? a.createElement(he, { inviteTransactionId: P, onboardingType: w }) : a.createElement(de, { inviteTransactionId: P, onboardingType: w, redirectPath: I })) : a.createElement(m.Z, { to: S })) : a.createElement(o.Z, { style: fe.loadingStyle });
                },
                be = { context: "PaymentsOnboarding" };
            function Ee(e) {
                return a.createElement(s.H, { errorConfig: be }, a.createElement(ge, e));
            }
            const fe = c.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                _e = a.memo(Ee);
        },
        231509: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => Se, default: () => Me, participantQuery: () => xe });
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
                h = n(782642),
                g = n(514639),
                b = n(445664),
                E = n(412450),
                f = n(535338),
                _ = n(615027),
                Z = n(281838),
                P = n(671738),
                k = n(413713),
                C = n(934265),
                v = n(226332),
                w = n(743080),
                I = n(727384),
                x = n(436117);
            const S = Object.freeze({ [i.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [i.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                A = Object.freeze({ [i.Rz.debit]: x.d.CreateTransfer, [i.Rz.credit]: x.d.RequestTransfer });
            var z = n(400364),
                M = n(351743),
                B = n.n(M),
                T = n(726426),
                D = n.n(T),
                R = n(569309);
            const q = z.Z,
                N = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = B()(q);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, fundedAmount: r, fundingAccountId: o, userId: c }) =>
                                new Promise((s, i) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: c, description: a, currency: R.v.Usd, idempotency_key: e, additional_funding_source: { payment_method_id: o, amount: { local_micro: r, currency: R.v.Usd } } },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.transaction,
                                                a = e?.create_transfer?.errors;
                                            if (n) {
                                                const { challenge_id: e, id: t, transaction_status: a } = n;
                                                s({ transactionId: t, status: a, challengeId: e });
                                            } else i(a || t);
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
                        d = a.location.pathname,
                        x = (0, s.z)(),
                        z = (0, w.jh)(),
                        { methodConfigs: M } = (0, E.Z)(),
                        { balance: B } = (0, C.Z)(),
                        { permissions: T, roles: D } = (0, b.Z)({ fetchKey: "Payments" }),
                        R = (0, h.p)(),
                        q = (0, f.p)(xe, { user_id: n }).user.result,
                        H = "User" === q?.__typename,
                        { usablePaymentMethods: O } = (0, v.Z)(),
                        $ = r.useMemo(() => O?.filter((e) => "XPaymentsCreditCardPaymentMethod" === e?.core?.details?.__typename) || [], [O]),
                        [F, L] = N(),
                        [j, X] = r.useState($?.[0]),
                        [Y, W] = r.useState(null),
                        V = r.useMemo(() => ({ ...c, userId: n, step: i.cX.fundingPane, amount: e }), [e, c, n]),
                        Q = r.useMemo(() => ({ closePath: g.gp, redirectPath: d, redirectState: { userId: n, userScreenName: q?.core?.screen_name, amount: e, step: i.cX.reviewPane, transferDirection: t } }), [d, n, e, t, q]),
                        J = r.useCallback(() => {
                            W(null);
                        }, []),
                        K = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        G = r.useCallback(() => {
                            if (!B || !e) return 0;
                            const t = parseFloat(B?.available_amount_local_micro);
                            return (0, I.Dc)(e) - t;
                        }, [e, B]),
                        ee = r.useMemo(() => {
                            const e = G();
                            return (0, I.p2)({ amount: e });
                        }, [G]),
                        te = r.useCallback(() => {
                            if (!j || !j.rest_id) return;
                            const t = i.Rz.debit,
                                r = A[t],
                                o = (0, I.DO)({ roles: D, permissions: T, actionPermission: r }),
                                s = { ...V, transferDirection: t };
                            if ((x.scribe({ page: "money", section: "p2p-transfer-funded", component: t, action: "click" }), o)) a.push(o, { redirectPath: d, redirectState: s, closePath: g.gp });
                            else {
                                J();
                                const r = (0, I.Dc)(e),
                                    o = r - parseFloat(B?.available_amount_local_micro),
                                    s = (0, I.p2)({ amount: r }),
                                    { successMessage: i } = S[t],
                                    l = i({ formattedAmount: s });
                                F({ amount: r.toString(), description: c?.description || "", userId: n, fundedAmount: o.toString(), fundingAccountId: j?.rest_id })
                                    .then((e) => {
                                        const { challengeId: t, status: n, transactionId: r } = e,
                                            o = r ? `${g.bR}/${r}` : g.bR;
                                        (0, I.i7)({ status: n }) ? t && a.push(g.vw, { challengeId: t, redirectPath: o, closePath: g.gp, successMessage: l, challengeInitiator: g.kW.transaction }) : (R({ text: l }), a.replace(o));
                                    })
                                    .catch((e) => {
                                        const t = (0, k.XE)({ errors: e, roles: D });
                                        t ? a.replace(t, Q) : W(e);
                                    });
                            }
                        }, [j, R, e, x, B?.available_amount_local_micro, d, c?.description, F, a, Q, T, J, D, V, n]),
                        ne = r.useCallback(() => {
                            x.scribe({ page: "money", section: "p2p-transfer-funding", element: "cancel", action: "click" }), a.goBack();
                        }, [x, a]),
                        ae = $?.[0],
                        re = i.Rz.credit,
                        oe = ae ? (0, I.xe)({ method: ae, methodConfigs: M, transferDirection: re }) : null,
                        ce = r.useMemo(() => L || !e || !oe || !!Y, [L, e, oe, Y]),
                        se = r.useCallback(
                            (e) => {
                                X(e);
                            },
                            [X],
                        ),
                        ie = r.useCallback(
                            (e) => {
                                const t = O?.find((t) => t.rest_id === e);
                                t && se && se(t);
                            },
                            [se, O],
                        ),
                        le = r.useMemo(() => ({ redirectPath: d, redirectState: V }), [d, V]),
                        ue = r.useMemo(() => ({ pathname: "/i/money/link-card", state: le }), [le]);
                    return H ? r.createElement(y.Z, { backButtonType: "back", bottomBar: Y ? r.createElement(l.Z, { style: z.footer }, r.createElement(k.ZP, { errors: Y, linkState: Q, opts: { counterPartyScreenName: q?.core?.screen_name }, roles: D })) : null, history: a, onBackClick: K, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: z.container }, r.createElement(l.Z, { style: U.fundingContainer }, r.createElement(p.default, { style: U.fundingIcon }), r.createElement(u.ZP, { color: "text", size: "headline1", weight: "normal" }, "Your balance isn't high enough to cover this payment"), r.createElement(u.ZP, { color: "gray700", size: "headline2", weight: "normal" }, `Deposit the remaining ${ee} to complete it`), oe ? r.createElement(P.Z, { accountId: ae?.rest_id, addBankCardLink: ue, methodConfigs: M, onSelectAccountId: ie, paymentMethods: $, selectedAccount: oe, transferDirection: re }) : r.createElement(Z.Z, { link: ue, methodConfigs: M, transferDirection: re, variant: "tile" })), r.createElement(l.Z, { style: w.ZP.actionButtons }, r.createElement(m.ZP, { onPress: ne, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Not Now"), r.createElement(m.ZP, { disabled: ce, onPress: te, size: "large", style: w.ZP.button, type: "primaryFilled" }, ((e) => `Deposit ${e}`)(ee))))) : r.createElement(_.Z, { to: g.gp });
                },
                U = d.default.create((e) => ({ fundingContainer: { flex: 1, gap: e.spaces.space20 }, fundingIcon: { height: e.spaces.space40, width: e.spaces.space40 } })),
                O = r.memo(H);
            var $ = n(73863),
                F = n(167630),
                L = n(952793),
                j = n(984067),
                X = n(413499),
                Y = n(749286);
            const W = n(181234).Z,
                V = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = B()(W);
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
                };
            const Q = n(787560).Z,
                J = () => {
                    const e = r.useMemo(() => D()(), []),
                        [t, n] = B()(Q);
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
                                        updater: I.qQ,
                                        onError: c,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                K = "Send Payment",
                G = "Request",
                ee = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, o.useHistory)(),
                        c = a.location?.state,
                        d = a.location.pathname,
                        p = (0, L.hC)("payments_transfer_funding_sources_enabled"),
                        E = (0, s.z)(),
                        Z = (0, w.jh)(),
                        { balance: P } = (0, C.Z)(),
                        { permissions: v, roles: x } = (0, b.Z)({ fetchKey: "Payments" }),
                        z = (0, I.MO)({ permissions: v }),
                        M = (0, h.p)(),
                        B = (0, f.p)(xe, { user_id: n }).user.result,
                        T = "User" === B?.__typename,
                        [D, R] = J(),
                        [q, N] = V(),
                        [H, U] = r.useState(e ?? ""),
                        [O, $] = r.useState(!0),
                        [W, Q] = r.useState(""),
                        [ee, ne] = r.useState(null),
                        ae = r.useMemo(() => ({ ...c, userId: n, step: i.cX.reviewPane, amount: H, description: W }), [H, c, n, W]),
                        re = r.useMemo(() => ({ closePath: g.gp, redirectPath: d, redirectState: { userId: n, userScreenName: B?.core?.screen_name, amount: H, step: i.cX.reviewPane, transferDirection: t } }), [d, n, H, t, B]),
                        oe = r.useCallback(() => {
                            ne(null);
                        }, []),
                        ce = r.useCallback(() => {
                            a.goBack();
                        }, [a]),
                        se = r.useCallback((e) => {
                            Q(e.target.value);
                        }, []),
                        ie = r.useMemo(() => !P?.available_amount_local_micro || !H || (0, I.UV)({ balanceAmountMicro: P.available_amount_local_micro, amount: H }), [P, H]),
                        le = r.useCallback(
                            (e) => () => {
                                if (e === i.Rz.debit && !ie && p) return void a.push({ pathname: d, state: { ...ae, step: i.cX.fundingPane, transferDirection: e } });
                                const t = A[e],
                                    r = (0, I.DO)({ roles: x, permissions: v, actionPermission: t }),
                                    o = { ...ae, transferDirection: e };
                                if ((E.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) a.push(r, { redirectPath: d, redirectState: o, closePath: g.gp });
                                else {
                                    oe();
                                    const t = (0, I.Dc)(H),
                                        r = (0, I.p2)({ amount: t }),
                                        { successMessage: o } = S[e],
                                        c = o({ formattedAmount: r });
                                    (e === i.Rz.credit ? q : D)({ amount: t.toString(), description: W, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: r } = e,
                                                o = r ? `${g.bR}/${r}` : g.bR;
                                            (0, I.i7)({ status: n }) ? t && a.push(g.vw, { challengeId: t, redirectPath: o, closePath: g.gp, successMessage: c, challengeInitiator: g.kW.transaction }) : (M({ text: c }), a.replace(o));
                                        })
                                        .catch((e) => {
                                            const t = (0, k.XE)({ errors: e, roles: x });
                                            t ? a.replace(t, re) : ne(e);
                                        });
                                }
                            },
                            [x, v, ae, E, a, d, oe, H, q, D, W, n, M, re, ie, p],
                        ),
                        ue = r.useMemo(() => R || N, [R, N]),
                        me = r.useMemo(() => ue || !H || !O || !!ee, [ue, H, O, ee]),
                        de = me || (!p && !ie),
                        pe = me || !z,
                        ye = t ? S[t]?.title : null;
                    return T ? r.createElement(y.Z, { backButtonType: "back", bottomBar: ee ? r.createElement(l.Z, { style: Z.footer }, r.createElement(k.ZP, { errors: ee, linkState: re, opts: { counterPartyScreenName: B?.core?.screen_name }, roles: x })) : null, history: a, onBackClick: ce, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: Z.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, ye ?? "Send or Request"), B && r.createElement(Y.Z, { user: B, withCenterAlign: !0 }), r.createElement(j.Z, { amount: H, balance: P, isValid: O, label: "Enter amount", name: "amount", setAmount: U, setIsValid: $, validateBalance: t === i.Rz.debit && !p }), r.createElement(X.Z, { maxLength: i.w8, onChange: se, placeholder: "Optionally add a note", placeholderTextColor: te.placeholder.color, value: W }), r.createElement(l.Z, { style: w.ZP.actionButtons }, t ? r.createElement(m.ZP, { disabled: t === i.Rz.credit ? pe : me, onPress: le(t === i.Rz.credit ? i.Rz.credit : i.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, R || N ? r.createElement(F.Z, null) : t === i.Rz.credit ? G : K) : r.createElement(r.Fragment, null, r.createElement(m.ZP, { disabled: pe, onPress: le(i.Rz.credit), size: "large", style: w.ZP.button, type: "primaryOutlined" }, N ? r.createElement(F.Z, null) : G), r.createElement(m.ZP, { disabled: de, onPress: le(i.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, R ? r.createElement(F.Z, null) : K))))) : r.createElement(_.Z, { to: g.gp });
                },
                te = d.default.create((e) => ({ placeholder: { color: e.colors.gray400 } })),
                ne = r.memo(ee),
                ae = $.Z,
                re = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, f.p)(ae, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(ne, { transferDirection: t, userId: a }) : r.createElement(_.Z, { to: g.gp });
                },
                oe = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                ce = (e) => r.createElement(c.H, { errorConfig: oe }, r.createElement(re, e)),
                se = r.memo(ce);
            var ie = n(874088),
                le = n(339110),
                ue = n(125363),
                me = n(919022),
                de = n(724983),
                pe = n(114084);
            const ye = de.Z,
                he = ({ onItemClick: e, viewerUserId: t }) => {
                    const n = (0, f.p)(ye, {}),
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
                              { style: Ee.root },
                              r.createElement(u.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  l.Z,
                                  null,
                                  a.map((e) => e && r.createElement(pe.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: o(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                ge = { context: "RECENT_RECEIPIENTS" },
                be = (e) => r.createElement(c.H, { errorConfig: ge }, r.createElement(he, e)),
                Ee = d.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                fe = r.memo(be);
            var _e = n(429371);
            const Ze = (e) => `x.com${g.HM}/${e}`,
                Pe = ({ message: e, screenName: t }) => r.createElement(l.Z, { style: ke.root }, r.createElement(_e.Z, { dimension: 90, link: Ze(t) }), r.createElement(u.ZP, { color: "gray700" }, e)),
                ke = d.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                Ce = r.memo(Pe),
                ve = [le.my.PaymentsUsers],
                we = ({ transferDirection: e }) => {
                    const t = (0, s.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, w.jh)(),
                        c = n.location?.state,
                        m = n.location?.pathname,
                        d = (0, ue.v9)(me.ZP.selectViewerUser),
                        p = d?.id_str,
                        h = d?.screen_name,
                        b = e ? S[e] : {},
                        { scanMessage: E, title: f } = b,
                        _ = r.useCallback((e) => e === p, [p]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: m, state: { ...c, step: i.cX.reviewPane, userId: e } });
                            },
                            [t, n, m, c],
                        ),
                        P = r.useCallback(
                            (e) => {
                                if (e.type === le.El.User) {
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
                            n.push(g.gp);
                        }, [n]);
                    return r.createElement(y.Z, { backButtonType: "close", history: n, onBackClick: C, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: a.container }, r.createElement(u.ZP, { align: "left", size: "title4", style: w.ZP.title, weight: "bold" }, f ?? "Send or Request"), r.createElement(l.Z, { style: w.ZP.content }, r.createElement(ie.default, { alwaysOpen: !0, filter: ve, getItemIsDisabled: (e) => e.type === le.El.User && (_(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => P(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: le._4.Unknown, testID: "typeaheadInput" }), E && h ? r.createElement(Ce, { message: E, screenName: h }) : null, r.createElement(fe, { onItemClick: k, viewerUserId: p }))));
                },
                Ie = r.memo(we),
                xe = a.Z,
                Se = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.z)(),
                        a = (0, o.useParams)().screenName,
                        c = t.location?.state,
                        l = c?.step,
                        u = c?.userId,
                        m = c?.amount,
                        d = e.transferDirection ?? c?.transferDirection;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: l, component: d, action: "impression" });
                        }, [n, l, d]),
                        l === i.cX.fundingPane && u && m ? r.createElement(O, { amount: m, transferDirection: d, userId: u }) : l === i.cX.reviewPane && u ? r.createElement(ne, { amount: m, transferDirection: d, userId: u }) : a ? r.createElement(se, { screenName: a, transferDirection: d }) : r.createElement(Ie, { transferDirection: d })
                    );
                },
                Ae = { context: "PaymentsP2PTransfer" };
            function ze(e) {
                return r.createElement(c.H, { errorConfig: Ae }, r.createElement(Se, e));
            }
            const Me = r.memo(ze);
        },
        327812: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(807896),
                r = n(202784),
                o = n(43429),
                c = n(231509);
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
            const _ = { page: "money", section: "pay-your-bills" },
                Z = "Pay your bills",
                P = `${Z} - Account Details`,
                k = (e) => {
                    const t = (0, f.jh)();
                    return a.createElement(y.Z, null, a.createElement(r.Z, { style: t.container }, a.createElement(r.Z, { style: I.headerContainer }, a.createElement(r.Z, { style: I.iconContainer }, a.createElement(c.Z, { "aria-label": "Pay your bills icon", aspectMode: s.Z.SQUARE, image: d })), a.createElement(r.Z, { style: I.titleContainer }, a.createElement(i.ZP, { color: "text", size: "title1", weight: "bold" }, Z), a.createElement(i.ZP, { color: "gray800", size: "body", weight: "normal" }, "Use the account details below to give to your provider or utility company. You can always disable bill pay from settings."))), a.createElement(r.Z, { style: I.accountDetailsContainer }, a.createElement(b.Z, { ariaLabel: P, variant: "xl" }))));
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
                    return a.createElement(h.H, { errorConfig: C }, a.createElement(p.Z, { backButtonType: "close", bottomBar: a.createElement(v, null), history: t, onBackClick: n, withoutBottomBarMobile: !0 }, a.createElement(g.nO, { namespace: _ }, a.createElement(h.H, { errorConfig: C }, a.createElement(k, e)))));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.f1654f9a.js.map
