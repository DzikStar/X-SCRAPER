"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var a = n(202784),
                r = n(325686),
                o = n(952428),
                i = n(731708),
                l = n(868634),
                c = n(167630),
                s = n(165822),
                u = n(953035),
                m = n(392237),
                d = n(108362),
                p = n(58399),
                y = n(2840),
                b = n(913408),
                g = n(72591),
                E = n(297896),
                h = n(436117),
                f = n(252021),
                k = n(736063),
                Z = n(514639),
                C = n(445664),
                v = n(698478),
                P = n(293115),
                _ = n(312771),
                w = n(847347),
                x = n(634455),
                I = n(575123),
                T = n(452275),
                S = n(412100),
                A = n(934265),
                M = n(57335),
                z = n(743080),
                D = n(727384);
            const q = { page: "money", section: "balance" },
                N = "Money",
                H = "Balance",
                R = (e) => {
                    const { balance: t, refetchStatus: n } = (0, A.Z)(),
                        m = (0, z.jh)(),
                        { permissions: d } = (0, C.Z)({ fetchKey: "Payments" }),
                        { data: f, fetchNext: k, hasNotices: P } = (0, S.Z)(),
                        { interest: I } = (0, M.Z)(),
                        T = (0, D.Gs)(d),
                        q = (0, v.nK)(d),
                        N = T || d?.includes(h.d.CreateDeposit),
                        R = T || d?.includes(h.d.CreateWithdrawal),
                        B = a.createElement(o.Z, { link: Z.l_, style: F.overview, testID: "account-balance" }, a.createElement(r.Z, { style: F.row }, a.createElement(i.ZP, { color: "gray700" }, H), I?.apy && a.createElement(l.ZP, { type: "bestValue" }, (0, D.Bj)({ apy: I.apy }))), n === _.iF.LOADING ? a.createElement(c.Z, { style: F.balanceLoader }) : t ? a.createElement(x.Z, { amount: t.available_amount_local_micro }) : null, a.createElement(i.ZP, null, "Account & Routing Number", a.createElement(p.default, { style: F.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": H, containerStyle: m.tile, stackLayoutUpperStyle: z.ZP.upper, upper: B, withInteractiveStyling: !1 }), P ? a.createElement(w.Z, { data: f, fetchNext: k, type: "notice" }) : null, a.createElement(r.Z, { style: m.pivotTileContainer }, a.createElement(u.Z, { containerStyle: m.pivotTile, disabled: !q, icon: y.default, iconColor: "text", isCompact: !0, link: q ? Z.HM : void 0, text: "Send", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: m.pivotTile, disabled: !q, icon: b.default, iconColor: "text", isCompact: !0, link: q ? Z.Jv : void 0, text: "Request", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: m.pivotTile, disabled: !N, icon: g.default, iconColor: "text", isCompact: !0, link: N ? Z.IN : void 0, text: "Deposit", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: m.pivotTile, disabled: !R, icon: E.default, iconColor: "text", isCompact: !0, link: R ? Z.r0 : void 0, text: "Withdraw", withInteractiveStyling: !0 })));
                },
                B = { context: "ACCOUNT_BALANCE" },
                F = m.default.create((e) => ({ overview: { flexDirection: "column", gap: e.spaces.space12 }, balanceLoader: { marginVertical: e.spaces.space8 }, padding: { padding: e.spaces.space8 }, row: { flexDirection: "row", gap: e.spaces.space16, justifyContent: "space-between" }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0 } })),
                O = (e) => {
                    const { history: t } = e,
                        n = (0, z.jh)(),
                        r = a.useCallback(() => a.createElement(d.Z, { style: n.root, withWideContainer: !0 }, a.createElement(k.H, { errorConfig: B }, a.createElement(T.Z, null), a.createElement(k.H, { errorConfig: B }, a.createElement(R, e)))), [n.root, e]),
                        o = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(P.nO, { namespace: q }, a.createElement(f.Z, { documentTitle: N, history: t, isFullWidth: !0, onBackClick: o, primaryContent: r(), rightControl: a.createElement(I.Z, null), sidebarContent: null, title: N }));
                },
                U = a.memo(O);
        },
        135099: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => I, default: () => A });
            var a = n(202784),
                r = n(107267),
                o = n(736063),
                i = n(725516),
                l = n(43429),
                c = n(167630),
                s = n(392237),
                u = n(782642),
                m = n(514639),
                d = n(413713),
                p = n(59815),
                y = (n(585488), n(351743)),
                b = n.n(y);
            const g = p.Z,
                E = () => {
                    const [e, t] = b()(g);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth" },
                                        onCompleted: (e) => {
                                            const a = e?.create_financial_institution_linking_session?.linking_token?.token,
                                                r = e?.create_financial_institution_linking_session?.provider,
                                                o = e?.create_financial_institution_linking_session?.errors;
                                            a && r ? t({ token: a, provider: r }) : n(o);
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
                        t = (0, u.p)(),
                        n = (0, r.useHistory)(),
                        o = n.location?.state,
                        l = o?.redirectPath,
                        [s] = E(),
                        p = a.useMemo(() => (l === m.iE.bankAccounts ? m.iE.bankAccounts : m.gp), [l]);
                    return (
                        a.useEffect(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                s()
                                    .then(({ provider: t, token: a }) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                        const r = { ...o, token: a, provider: t, linkType: m.P_.linkExternalAccount, closePath: p };
                                        n.replace(m.MW, r);
                                    })
                                    .catch((a) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: a ? (0, d.kJ)({ errors: a }).message : "Something went wrong. Please try again later." }), n.replace(p);
                                    });
                        }, [t, e, p, o, s, n, l]),
                        a.createElement(c.Z, { style: f.loadingStyle })
                    );
                },
                f = s.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                k = a.memo(h);
            n(136728);
            var Z = n(325686),
                C = n(731708),
                v = n(154003),
                P = n(980407),
                _ = n(743080);
            const w = () => {
                    const e = (0, i.z)(),
                        t = (0, u.p)(),
                        n = (0, r.useHistory)(),
                        o = (0, _.jh)(),
                        s = n.location?.state,
                        p = s?.redirectPath,
                        [y, b] = E(),
                        g = a.useCallback(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                y()
                                    .then(({ provider: t, token: a }) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                        const r = { ...s, token: a, provider: t, linkType: m.P_.linkExternalAccount };
                                        n.push(m.MW, r);
                                    })
                                    .catch((n) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: n ? (0, d.kJ)({ errors: n }).message : "Something went wrong. Please try again later." });
                                    });
                        }, [t, e, s, y, n]),
                        h = a.useCallback(() => {
                            p === m.iE.bankAccounts ? n.push(m.iE.bankAccounts) : n.push(m.gp);
                        }, [n, p]);
                    return a.createElement(P.Z, { backButtonType: "close", history: n, onBackClick: h }, a.createElement(Z.Z, { style: [o.container, _.ZP.paddingNarrow] }, a.createElement(C.ZP, { size: "title2", style: _.ZP.title, weight: "heavy" }, "Link a bank account"), a.createElement(C.ZP, null, "You need to link your bank account before you can continue.")), a.createElement(Z.Z, { style: [o.footer, _.ZP.paddingNarrow] }, a.createElement(C.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(C.ZP, { color: "text", link: l.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(v.ZP, { disabled: b, onPress: g, size: "large", type: "primaryFilled" }, b ? a.createElement(c.Z, null) : "Continue")));
                },
                x = a.memo(w),
                I = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, i.z)(),
                        o = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: o, action: "impression" });
                        }, [n, o]),
                        o === l.Vq.termsPane ? a.createElement(x, null) : a.createElement(k, null)
                    );
                },
                T = { context: "LinkAccount" };
            function S(e) {
                return a.createElement(o.H, { errorConfig: T }, a.createElement(I, e));
            }
            const A = a.memo(S);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(992942),
                i = n(529356),
                l = n(674132),
                c = n.n(l),
                s = n(198433);
            const u = c().j24c37b2,
                m = (e) => {
                    const t = (0, r.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        l = a.useCallback(({ style: e }) => a.createElement(o.Z, { "aria-label": "", source: s, style: e }), []);
                    return a.createElement(i.Z, { actionLabel: u, enableMaskForDismiss: !0, graphic: l, graphicDisplayMode: "illustration", headline: "Access denied", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                d = a.memo(m);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var a = n(202784),
                r = n(107267),
                o = n(992942),
                i = n(529356),
                l = n(198433),
                c = n(736063),
                s = n(137882);
            const u = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.b)({}),
                        c = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        u = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        m = a.useCallback(({ style: e }) => a.createElement(o.Z, { "aria-label": "", source: l, style: e }), []);
                    return a.createElement(i.Z, { actionLabel: "Contact support", enableMaskForDismiss: !0, graphic: m, graphicDisplayMode: "illustration", headline: "We cannot open your account at this time", isFullHeightOnMobile: !0, onAction: c, onClose: u, subtext: "Please reach out to customer support for further assistance." });
                },
                m = { context: "PAYMENTS_NOT_AVAILABLE" },
                d = (e) => a.createElement(c.H, { errorConfig: m }, a.createElement(u, e)),
                p = a.memo(d);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            n(875640);
            var a = n(202784),
                r = n(325686),
                o = n(107267),
                i = n(529356),
                l = n(731708),
                c = n(124964),
                s = n(392237),
                u = n(674132),
                m = n.n(u),
                d = n(293723),
                p = n(263272),
                y = n(171463),
                b = n(514639),
                g = n(743080);
            const E = m().j24c37b2,
                h = { [y.a.Age]: { description: "Be at least 18 years old" }, [y.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [y.a.Geography]: { description: "Be a resident of the United States of America" }, [y.a.TwoFactorAuth]: { description: "Security key or Authentication app enabled", cta: { label: "Setup", destination: { pathname: "/i/money/setup-two-factor-auth", state: { setupTwoFactorAuthReturnPath: b.Cz } } } }, [y.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [y.a.Safety]: { description: "Your X account is in good standing" }, [y.a.Allowlist]: { description: "Your account is allowed" } },
                f = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        s = t.location?.state?.requirements;
                    return a.createElement(
                        i.Z,
                        { actionLabel: E, enableMaskForDismiss: !0, graphicDisplayMode: s ? "none" : "illustration", graphicStyle: g.ir, headline: "You’re not yet eligible", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: b.N6 },
                        s
                            ? a.createElement(
                                  r.Z,
                                  { style: k.requirements },
                                  s?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          o = h[n];
                                      return o ? a.createElement(r.Z, { key: n, style: k.item }, a.createElement(l.ZP, { style: k.label, weight: "bold" }, o.description, o.cta && !t ? a.createElement(a.Fragment, null, a.createElement(c.Z, { style: k.middot }), a.createElement(l.ZP, { link: o.cta.destination }, o.cta.label)) : null), t ? a.createElement(d.default, { style: k.iconChecked }) : a.createElement(p.default, { style: k.iconUnchecked })) : null;
                                  }),
                              )
                            : null,
                    );
                },
                k = s.default.create((e) => ({ requirements: { gap: e.spaces.space24, marginBottom: e.spaces.space32 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, middot: { color: e.colors.text } })),
                Z = a.memo(f);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Ce });
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
            const E = Object.freeze({ default: "default", invite: "invite", autoclaim: "autoclaim" }),
                h = "Continue",
                f = a.createElement(b.ZP, { color: "text", link: g.uc, size: "subtext2" }, "Terms & Conditions"),
                k = a.createElement(b.ZP, { color: "text", link: g.hv, size: "subtext2" }, "Privacy Policy"),
                Z = a.createElement(b.ZP, { color: "text", link: g.DH, size: "subtext2" }, "Short Form Disclosure"),
                C = a.createElement(b.ZP, { color: "gray700", size: "subtext2" }, "By clicking '", h, "', you agree to the ", f, ", ", k, " ", "and ", Z, "."),
                v = Object.freeze({ [E.default]: { redirectPath: () => s.gp, buttonText: h, disclaimer: C }, [E.autoclaim]: { redirectPath: () => s.gp, buttonText: h, disclaimer: C }, [E.invite]: { redirectPath: ({ inviteTransactionId: e }) => (e ? `${s.bR}/${e}` : s.gp), buttonText: h, disclaimer: C } });
            n(136728);
            var P = n(300583),
                _ = n(325686),
                w = (n(585488), n(351743)),
                x = n.n(w),
                I = n(154003),
                T = n(760286),
                S = n(980407),
                A = n(743080),
                M = n(691533),
                z = n(429371),
                D = n(125363),
                q = n(390387),
                N = n(919022);
            const H = "Continue before the payment expires.",
                R = ({ invitationCount: e }) => !!e && e > 1,
                B = ({ invitationCount: e }) => (R({ invitationCount: e }) ? "Continue before the payments expire." : H),
                F = (e) => {
                    const t = `x.com${s.sM}`;
                    return e ? `${t}?user_id=${e}` : t;
                },
                O = () => {
                    const e = (0, D.v9)(N.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                U = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const r = (0, D.v9)(q._h),
                        o = (0, c.hC)("payments_qr_onboarding_enabled");
                    return a.createElement(a.Fragment, null, a.createElement(b.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(b.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(M.Z, null, a.createElement(_.Z, { style: L.qrcode }, a.createElement(z.Z, { dimension: 200, link: F(r) }))) : null);
                },
                L = i.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                j = a.memo(U);
            var $ = n(883229),
                W = n(943914),
                Y = n(329923);
            const V = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                X = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                J = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, Y.Z)();
                    return e ? a.createElement(j, { description: B({ invitationCount: t }), title: V({ formattedAmount: e }) }) : a.createElement(j, null);
                },
                Q = { context: "PaymentsPendingBalance" },
                G = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(j, null), type: "CustomRetry" }), []);
                    return a.createElement($.N, { errorConfig: Q, fallback: e }, a.createElement(W.B, null, a.createElement(J, null)));
                },
                K = a.memo(G);
            var ee = n(807896),
                te = n(190940);
            const ne = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ae = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, r] = (0, te.Z)(e);
                    return n && r
                        ? a.createElement(
                              j,
                              (0, ee.Z)(
                                  { description: H, title: ne(r) },
                                  t
                                      ? (() => {
                                            const { formattedAmount: e, invitationCount: t } = (0, Y.Z)(),
                                                n = R({ invitationCount: t });
                                            return { subtitle: e && n ? a.createElement(b.ZP, { color: "gray700", size: "body" }, X({ formattedAmount: e })) : void 0, description: B({ invitationCount: t }) };
                                        })()
                                      : void 0,
                              ),
                          )
                        : t
                          ? a.createElement(K, null)
                          : a.createElement(j, null);
                },
                re = { context: "PaymentsTransactionInvite" },
                oe = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(j, null), type: "CustomRetry" }), []);
                    return a.createElement($.N, { errorConfig: re, fallback: t }, a.createElement(W.B, null, a.createElement(ae, e)));
                },
                ie = a.memo(oe),
                le = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === E.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(ie, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(K, null) : a.createElement(j, null));
                },
                ce = a.memo(le),
                se = P.Z,
                ue = "setupPayments",
                me = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const i = (0, r.useHistory)(),
                        l = (0, u.z)(),
                        c = (0, A.jh)(),
                        s = v[t],
                        [m, d] = x()(se),
                        p = i.location?.state,
                        y = s.buttonText,
                        b = s.disclaimer,
                        g = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: ue }, query: i?.location?.query }), [p, i?.location?.query]),
                        E = a.useCallback(() => {
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
                        h = a.useCallback(() => {
                            i.push("/");
                        }, [i]),
                        f = d,
                        k = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(I.ZP, { disabled: f, onPress: E, size: "large", type: "primaryFilled" }, f ? a.createElement(o.Z, null) : y)), [f, E, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: i, onBackClick: h }, a.createElement(_.Z, { style: [c.container, A.ZP.paddingNarrow] }, a.createElement(T.default, { style: de.illustration }), a.createElement(ce, { inviteTransactionId: e, onboardingType: t })), a.createElement(_.Z, { style: [c.footer, A.ZP.paddingNarrow] }, a.createElement(_.Z, { style: de.row }, b), k));
                },
                de = i.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space16 }, illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text } })),
                pe = a.memo(me);
            var ye = n(529356);
            const be = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, r.useHistory)(),
                        o = (0, A.jh)(),
                        i = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(ye.Z, { contentStyle: ge.content, enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "", isFullHeightOnMobile: !0, onAction: () => {}, onClose: i, subtext: "" }, a.createElement(_.Z, { style: [o.container, ge.qrPadding] }, a.createElement(ce, { inviteTransactionId: e, onboardingType: t })));
                },
                ge = i.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { paddingHorizontal: 0, paddingTop: 0, minHeight: 420 } })),
                Ee = a.memo(be),
                he = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: i, isEligible: l, paymentsRedirectPath: b, requirements: g, roles: h } = (0, p.Z)(),
                        f = (0, c.hC)("payments_qr_onboarding_enabled"),
                        k = t.location?.state,
                        Z = k?.step,
                        C = k?.inviteTransactionId,
                        P = (0, y.jm)({ roles: h }),
                        _ = (0, y.So)({ roles: h }),
                        w = P ? E.autoclaim : C ? E.invite : E.default,
                        x = v[w].redirectPath({ inviteTransactionId: C }),
                        I = a.useMemo(() => !(g && !_) || g.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [g, _]),
                        T = { pathname: s.Js, state: { requirements: _ ? null : g } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: Z, action: "impression" });
                    }, [n, Z]);
                    const S = b === s.Js ? T : b;
                    return i ? (S ? a.createElement(m.Z, { to: S }) : l || (f && !I) ? (Z === ue ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: x }) : f ? a.createElement(Ee, { inviteTransactionId: C, onboardingType: w }) : a.createElement(pe, { inviteTransactionId: C, onboardingType: w, redirectPath: x })) : a.createElement(m.Z, { to: T })) : a.createElement(o.Z, { style: Ze.loadingStyle });
                },
                fe = { context: "PaymentsOnboarding" };
            function ke(e) {
                return a.createElement(l.H, { errorConfig: fe }, a.createElement(he, e));
            }
            const Ze = i.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                Ce = a.memo(ke);
        },
        207162: (e, t, n) => {
            n.r(t), n.d(t, { PaymentsP2PTransfer: () => be, default: () => he, participantQuery: () => ye });
            var a = n(120721),
                r = n(202784),
                o = (n(585488), n(107267)),
                i = n(736063),
                l = n(725516),
                c = n(43429),
                s = n(73863),
                u = n(514639),
                m = n(535338),
                d = n(615027),
                p = (n(136728), n(325686)),
                y = n(154003),
                b = n(167630),
                g = n(731708),
                E = n(855488),
                h = n(392237),
                f = n(980407),
                k = n(782642),
                Z = n(445664),
                C = n(984067),
                v = n(413713),
                P = n(749286),
                _ = n(934265),
                w = n(743080),
                x = n(727384),
                I = n(436117);
            const T = Object.freeze({ [c.Rz.debit]: { label: "Send", title: "Send", successMessage: ({ formattedAmount: e }) => `Your payment of ${e} has been initiated!` }, [c.Rz.credit]: { label: "Request", title: "Request", successMessage: ({ formattedAmount: e }) => `Your request for ${e} has been sent!`, scanMessage: "Let others scan your QR Code to pay you." } }),
                S = Object.freeze({ [c.Rz.debit]: I.d.CreateTransfer, [c.Rz.credit]: I.d.RequestTransfer });
            var A = n(181234),
                M = n(351743),
                z = n.n(M),
                D = n(726426),
                q = n.n(D);
            const N = A.Z,
                H = () => {
                    const e = r.useMemo(() => q()(), []),
                        [t, n] = z()(N);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, i) => {
                                    t({
                                        variables: { amount_local_micro: n, sender_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.request_transfer?.id,
                                                a = e?.request_transfer?.transaction_status,
                                                r = e?.request_transfer?.challenge_id,
                                                l = e?.request_transfer?.errors;
                                            n ? o({ transactionId: n, challengeId: r, status: a }) : i(l || t);
                                        },
                                        updater: x.qQ,
                                        onError: i,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                };
            const R = n(787560).Z,
                B = () => {
                    const e = r.useMemo(() => q()(), []),
                        [t, n] = z()(R);
                    return [
                        r.useCallback(
                            ({ amount: n, description: a, userId: r }) =>
                                new Promise((o, i) => {
                                    t({
                                        variables: { amount_local_micro: n, receiver_twitter_user_id: r, description: a, currency: "Usd", idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_transfer?.id,
                                                a = e?.create_transfer?.transaction_status,
                                                r = e?.create_transfer?.challenge_id,
                                                l = e?.create_transfer?.errors;
                                            n ? o({ transactionId: n, status: a, challengeId: r }) : i(l || t);
                                        },
                                        updater: x.qQ,
                                        onError: i,
                                    });
                                }),
                            [e, t],
                        ),
                        n,
                    ];
                },
                F = ({ amount: e, transferDirection: t, userId: n }) => {
                    const a = (0, l.z)(),
                        i = (0, o.useHistory)(),
                        s = (0, w.jh)(),
                        h = (0, m.p)(ye, { user_id: n }).user.result,
                        { balance: I } = (0, _.Z)(),
                        { permissions: A, roles: M } = (0, Z.Z)({ fetchKey: "Payments" }),
                        z = (0, x.MO)({ permissions: A }),
                        D = "User" === h?.__typename,
                        q = i.location?.state,
                        N = i.location.pathname,
                        [R, F] = r.useState(e ?? ""),
                        [U, L] = r.useState(!0),
                        [j, $] = r.useState(""),
                        [W, Y] = r.useState(null),
                        [V, X] = B(),
                        [J, Q] = H(),
                        G = r.useMemo(() => ({ ...q, userId: n, step: c.cX.reviewPane, amount: R }), [R, q, n]),
                        K = (0, k.p)(),
                        ee = r.useCallback(() => {
                            Y(null);
                        }, []),
                        te = r.useMemo(() => ({ closePath: u.gp, redirectPath: N, redirectState: { userId: n, amount: R, step: c.cX.reviewPane, transferDirection: t } }), [N, n, R, t]),
                        ne = r.useCallback((e) => {
                            $(e.target.value);
                        }, []),
                        ae = r.useCallback(
                            (e) => () => {
                                const t = S[e],
                                    r = (0, x.DO)({ roles: M, permissions: A, actionPermission: t }),
                                    o = { ...G, transferDirection: e };
                                if ((a.scribe({ page: "money", section: "p2p-transfer", component: e, action: "click" }), r)) i.push(r, { redirectPath: N, redirectState: o, closePath: u.gp });
                                else {
                                    ee();
                                    const t = (0, x.Dc)(R),
                                        a = (0, x.p2)({ amount: t }),
                                        { successMessage: r } = T[e],
                                        o = r({ formattedAmount: a });
                                    (e === c.Rz.credit ? J : V)({ amount: t.toString(), description: j, userId: n })
                                        .then((e) => {
                                            const { challengeId: t, status: n, transactionId: a } = e,
                                                r = a ? `${u.bR}/${a}` : u.bR;
                                            (0, x.i7)({ status: n }) ? t && i.push(u.vw, { challengeId: t, redirectPath: r, closePath: u.gp, successMessage: o, challengeInitiator: u.kW.transaction }) : (K({ text: o }), i.replace(r));
                                        })
                                        .catch((e) => {
                                            const t = (0, v.XE)({ errors: e, roles: M });
                                            t ? i.replace(t, te) : Y(e);
                                        });
                                }
                            },
                            [M, A, G, a, i, N, ee, R, J, V, j, n, K, te],
                        ),
                        re = X || Q || !R || !U,
                        oe = !I?.available_amount_local_micro || !R || (0, x.UV)({ balanceAmountMicro: I.available_amount_local_micro, amount: R }),
                        ie = re || !z,
                        le = re || !oe,
                        ce = r.useCallback(() => {
                            a.scribe({ page: "money", section: "p2p-transfer", element: "cancel", action: "click" });
                        }, [a]),
                        se = t ? T[t]?.title : null,
                        ue = t === c.Rz.debit,
                        me = r.createElement(y.ZP, { disabled: ie, onPress: ae(c.Rz.credit), size: "large", style: w.ZP.button, type: "primaryFilled" }, Q ? r.createElement(b.Z, null) : "Request"),
                        de = r.createElement(y.ZP, { disabled: le, onPress: ae(c.Rz.debit), size: "large", style: w.ZP.button, type: "primaryFilled" }, X ? r.createElement(b.Z, null) : "Send"),
                        pe = r.createElement(p.Z, { style: s.footer }, W ? r.createElement(v.ZP, { errors: W, linkState: te, roles: M }) : null, r.createElement(p.Z, { style: w.ZP.actionButtons }, t ? r.createElement(r.Fragment, null, r.createElement(y.ZP, { link: u.gp, onPress: ce, size: "large", style: w.ZP.button, type: "primaryOutlined" }, "Cancel"), ue ? de : t === c.Rz.credit ? me : null) : r.createElement(r.Fragment, null, me, de)));
                    return D ? r.createElement(f.Z, { backButtonType: "back", bottomBar: pe, history: i, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: s.container }, r.createElement(g.ZP, { align: "center", size: "title2", style: w.ZP.title, weight: "heavy" }, se ?? "Send or Request"), h && r.createElement(P.Z, { user: h, withCenterAlign: !0 }), r.createElement(C.Z, { amount: R, balance: I, isValid: U, label: "Enter amount", name: "amount", setAmount: F, setIsValid: L, validateBalance: ue }), r.createElement(E.Z, { label: "Optionally add a note", maxLength: c.w8, name: "description", onChange: ne, style: O.input, testID: "description", value: j }))) : r.createElement(d.Z, { to: u.gp });
                },
                O = h.default.create((e) => ({ input: { paddingHorizontal: "0" } })),
                U = r.memo(F),
                L = s.Z,
                j = ({ screenName: e, transferDirection: t }) => {
                    const n = (0, m.p)(L, { screenName: e }),
                        a = n?.user_result_by_screen_name?.result?.rest_id;
                    return a ? r.createElement(U, { transferDirection: t, userId: a }) : r.createElement(d.Z, { to: u.gp });
                },
                $ = { context: "MONEY_SCREEN_NAME_VALIDATION" },
                W = (e) => r.createElement(i.H, { errorConfig: $ }, r.createElement(j, e)),
                Y = r.memo(W);
            var V = n(874088),
                X = n(339110),
                J = n(125363),
                Q = n(919022),
                G = n(724983),
                K = n(114084);
            const ee = G.Z,
                te = ({ onItemClick: e, viewerUserId: t }) => {
                    const n = (0, m.p)(ee, {}),
                        a = n?.get_payments_recent_participants?.slice(0, 5),
                        o = r.useCallback(
                            (t, n) => () => {
                                e(t, n);
                            },
                            [e],
                        );
                    return a && a.length > 0
                        ? r.createElement(
                              p.Z,
                              { style: re.root },
                              r.createElement(g.ZP, { weight: "bold" }, "Recent"),
                              r.createElement(
                                  p.Z,
                                  null,
                                  a.map((e) => e && r.createElement(K.Z, { displayMode: "UserCompact", key: e.rest_id, onCellClick: o(e, e.rest_id), user: e, withLink: !1 })),
                              ),
                          )
                        : null;
                },
                ne = { context: "RECENT_RECEIPIENTS" },
                ae = (e) => r.createElement(i.H, { errorConfig: ne }, r.createElement(te, e)),
                re = h.default.create((e) => ({ root: { flexDirection: "column", gap: e.spaces.space8 } })),
                oe = r.memo(ae);
            var ie = n(429371);
            const le = (e) => `x.com${u.HM}/${e}`,
                ce = ({ message: e, screenName: t }) => r.createElement(p.Z, { style: se.root }, r.createElement(ie.Z, { dimension: 90, link: le(t) }), r.createElement(g.ZP, { color: "gray700" }, e)),
                se = h.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", gap: e.spaces.space16, alignItems: "center" } })),
                ue = r.memo(ce),
                me = [X.my.PaymentsUsers],
                de = ({ transferDirection: e }) => {
                    const t = (0, l.z)(),
                        n = (0, o.useHistory)(),
                        a = (0, w.jh)(),
                        i = n.location?.state,
                        s = n.location?.pathname,
                        m = (0, J.v9)(Q.ZP.selectViewerUser),
                        d = m?.id_str,
                        y = m?.screen_name,
                        b = e ? T[e] : {},
                        { scanMessage: E, title: h } = b,
                        k = r.useCallback((e) => e === d, [d]),
                        Z = r.useCallback(
                            (e) => {
                                t.scribe({ page: "money", section: "select-participant", element: "next", action: "click" }), n.push({ pathname: s, state: { ...i, step: c.cX.reviewPane, userId: e } });
                            },
                            [t, n, s, i],
                        ),
                        C = r.useCallback(
                            (e) => {
                                if (e.type === X.El.User) {
                                    const t = e.data;
                                    Z(t.id_str);
                                }
                            },
                            [Z],
                        ),
                        v = r.useCallback(
                            (e, t) => {
                                Z(t);
                            },
                            [Z],
                        ),
                        P = r.useCallback(() => {
                            n.push(u.gp);
                        }, [n]);
                    return r.createElement(f.Z, { backButtonType: "close", history: n, onBackClick: P, withoutBottomBarMobile: !0 }, r.createElement(p.Z, { style: a.container }, r.createElement(g.ZP, { align: "center", size: "title2", style: w.ZP.title, weight: "heavy" }, h ?? "Send or Request"), r.createElement(p.Z, { style: w.ZP.content }, r.createElement(V.default, { alwaysOpen: !0, filter: me, getItemIsDisabled: (e) => e.type === X.El.User && (k(e.id) || !e.data?.can_pay), isModal: !0, onItemClick: (e) => C(e), placeholder: "Search for someone", rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: X._4.Unknown, testID: "typeaheadInput" }), E && y ? r.createElement(ue, { message: E, screenName: y }) : null, r.createElement(oe, { onItemClick: v, viewerUserId: d }))));
                },
                pe = r.memo(de),
                ye = a.Z,
                be = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, l.z)(),
                        a = (0, o.useParams)().screenName,
                        i = t.location?.state,
                        s = i?.step,
                        u = i?.userId,
                        m = i?.amount,
                        d = e.transferDirection ?? i?.transferDirection;
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "p2p-transfer", element: s, component: d, action: "impression" });
                        }, [n, s, d]),
                        s === c.cX.reviewPane && u ? r.createElement(U, { amount: m, transferDirection: d, userId: u }) : a ? r.createElement(Y, { screenName: a, transferDirection: d }) : r.createElement(pe, { transferDirection: d })
                    );
                },
                ge = { context: "PaymentsP2PTransfer" };
            function Ee(e) {
                return r.createElement(i.H, { errorConfig: ge }, r.createElement(be, e));
            }
            const he = r.memo(Ee);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.e935adba.js.map
