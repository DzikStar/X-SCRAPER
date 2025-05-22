"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => j });
            var a = n(202784),
                i = n(325686),
                o = n(952428),
                r = n(731708),
                l = n(868634),
                c = n(167630),
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
                x = n(293115),
                w = n(312771),
                _ = n(847347),
                T = n(634455),
                A = n(819404),
                S = n(575123),
                I = n(452275),
                M = n(412100),
                z = n(934265),
                H = n(743080),
                B = n(727384);
            const q = { page: "money", section: "balance" },
                F = "Money",
                N = "Balance",
                D = (e) => {
                    const { balance: t, interest: n, refetchStatus: m } = (0, z.Z)(),
                        d = (0, v.hC)("payments_tasks_carousel_enabled"),
                        k = (0, H.jh)(),
                        { permissions: f } = (0, C.Z)({ fetchKey: "Payments" }),
                        { data: x, fetchNext: S, hasNotices: I } = (0, M.Z)(),
                        q = (0, B.Gs)(f),
                        F = (0, P.nK)(f),
                        D = q || f?.includes(E.d.CreateDeposit),
                        L = q || f?.includes(E.d.CreateWithdrawal),
                        W = a.createElement(o.Z, { link: Z.l_, style: H.ZP.column, testID: "account-balance" }, a.createElement(i.Z, { style: H.ZP.rowSpaceBetween }, a.createElement(r.ZP, { color: "gray700" }, N), n?.apy && a.createElement(l.ZP, { background: "green0", style: O.apyLabel, type: "bestValue" }, a.createElement(r.ZP, { color: "green500", size: "subtext1", weight: "medium" }, (0, B.Bj)({ apy: n.apy })))), m === w.iF.LOADING ? a.createElement(c.Z, { style: O.balanceLoader }) : t ? a.createElement(T.Z, { amount: t.available_amount_local_micro, size: "title1", style: O.veritcalPadding }) : null, a.createElement(i.Z, { style: O.centeredRow }, a.createElement(r.ZP, { size: "subtext2", weight: "medium" }, "Account & Routing Number"), a.createElement(p.default, { style: O.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": N, containerStyle: k.tile, stackLayoutUpperStyle: H.ZP.upper, upper: W, withInteractiveStyling: !1 }), I ? a.createElement(_.Z, { data: x, fetchNext: S, type: "notice", withTile: !0 }) : null, a.createElement(i.Z, { style: k.pivotTileContainer }, a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !F, icon: y.default, iconColor: "text", isCompact: !0, link: F ? Z.HM : void 0, text: "Send", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !F, icon: g.default, iconColor: "text", isCompact: !0, link: F ? Z.Jv : void 0, text: "Request", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !D, icon: h.default, iconColor: "text", isCompact: !0, link: D ? Z.IN : void 0, text: "Deposit", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !L, icon: b.default, iconColor: "text", isCompact: !0, link: L ? Z.r0 : void 0, text: "Withdraw", withInteractiveStyling: !0 })), d && a.createElement(A.Z, null));
                },
                L = { context: "ACCOUNT_BALANCE" },
                O = m.default.create((e) => ({ balanceLoader: { marginVertical: e.spaces.space8 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16 }, centeredRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, apyLabel: { paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8 }, veritcalPadding: { paddingVertical: e.spaces.space16 } })),
                W = (e) => {
                    const { history: t } = e,
                        n = (0, H.jh)(),
                        i = a.useCallback(() => a.createElement(d.Z, { style: n.root, withWideContainer: !0 }, a.createElement(f.H, { errorConfig: L }, a.createElement(I.Z, null), a.createElement(f.H, { errorConfig: L }, a.createElement(D, e)))), [n.root, e]),
                        o = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(x.nO, { namespace: q }, a.createElement(k.Z, { documentTitle: F, history: t, isFullWidth: !0, onBackClick: o, primaryContent: i(), rightControl: a.createElement(S.Z, null), sidebarContent: null, title: F }));
                },
                j = a.memo(W);
        },
        135099: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => T, default: () => I });
            var a = n(202784),
                i = n(107267),
                o = n(736063),
                r = n(725516),
                l = n(43429),
                c = n(167630),
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
                                                i = e?.create_financial_institution_linking_session?.provider,
                                                o = e?.create_financial_institution_linking_session?.errors,
                                                r = e?.create_financial_institution_linking_session?.challenge_id;
                                            r ? t({ challengeId: r }) : a && i ? t({ token: a, provider: i }) : n(o);
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
                        n = (0, i.useHistory)(),
                        o = n.location?.state,
                        l = o?.redirectPath,
                        [s] = b(),
                        p = a.useMemo(() => (l === m.iE.bankAccounts ? m.iE.bankAccounts : m.gp), [l]);
                    return (
                        a.useEffect(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                s()
                                    .then(({ challengeId: t, provider: a, token: i }) => {
                                        if (t) n.replace(m.vw, { closePath: p, challengeId: t, challengeInitiator: m.kW.addBankAccount, redirectPath: m.ac, redirectState: o });
                                        else if (a && i) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...o, token: i, provider: a, linkType: m.P_.linkExternalAccount, closePath: p };
                                            n.replace(m.MW, t);
                                        }
                                    })
                                    .catch((a) => {
                                        e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "error" }), t({ text: a ? (0, d.kJ)({ errors: a }).message : "Something went wrong. Please try again later." }), n.replace(p);
                                    });
                        }, [t, e, p, o, s, n, l]),
                        a.createElement(c.Z, { style: k.loadingStyle })
                    );
                },
                k = s.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                f = a.memo(E);
            n(136728);
            var v = n(325686),
                Z = n(731708),
                C = n(154003),
                P = n(980407),
                x = n(743080);
            const w = () => {
                    const e = (0, r.z)(),
                        t = (0, u.p)(),
                        n = (0, i.useHistory)(),
                        o = (0, x.jh)(),
                        s = n.location?.state,
                        p = s?.redirectPath,
                        [y, g] = b(),
                        h = a.useCallback(() => {
                            e.scribe({ page: "money", section: "link-account", element: "agreeTerms", action: "click" }),
                                y()
                                    .then(({ challengeId: t, provider: a, token: i }) => {
                                        if (t) n.replace(m.vw, { challengeId: t, challengeInitiator: m.kW.addBankAccount, redirectPath: m.ac, redirectState: { ...s } });
                                        else if (a && i) {
                                            e.scribe({ page: "money", section: "link-account", element: "linkExternalAccount", action: "success" });
                                            const t = { ...s, token: i, provider: a, linkType: m.P_.linkExternalAccount };
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
                    return a.createElement(P.Z, { backButtonType: "close", history: n, onBackClick: E }, a.createElement(v.Z, { style: [o.container, x.ZP.paddingNarrow] }, a.createElement(Z.ZP, { size: "title2", style: x.ZP.title, weight: "heavy" }, "Link a bank account"), a.createElement(Z.ZP, null, "You need to link your bank account before you can continue.")), a.createElement(v.Z, { style: [o.footer, x.ZP.paddingNarrow] }, a.createElement(Z.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(Z.ZP, { color: "text", link: l.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(C.ZP, { disabled: g, onPress: h, size: "large", type: "primaryFilled" }, g ? a.createElement(c.Z, null) : "Continue")));
                },
                _ = a.memo(w),
                T = (e) => {
                    const t = (0, i.useHistory)(),
                        n = (0, r.z)(),
                        o = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: o, action: "impression" });
                        }, [n, o]),
                        o === l.Vq.termsPane ? a.createElement(_, null) : a.createElement(f, null)
                    );
                },
                A = { context: "LinkAccount" };
            function S(e) {
                return a.createElement(o.H, { errorConfig: A }, a.createElement(T, e));
            }
            const I = a.memo(S);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                i = n(107267),
                o = n(992942),
                r = n(529356),
                l = n(332920),
                c = n.n(l),
                s = n(198433);
            const u = c().j24c37b2,
                m = (e) => {
                    const t = (0, i.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        l = a.useCallback(({ style: e }) => a.createElement(o.Z, { "aria-label": "", source: s, style: e }), []);
                    return a.createElement(r.Z, { actionLabel: u, enableMaskForDismiss: !0, graphic: l, graphicDisplayMode: "illustration", headline: "Access denied", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                d = a.memo(m);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var a = n(202784),
                i = n(107267),
                o = n(992942),
                r = n(529356),
                l = n(198433),
                c = n(736063),
                s = n(137882);
            const u = (e) => {
                    const t = (0, i.useHistory)(),
                        n = (0, s.b)({}),
                        c = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        u = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        m = a.useCallback(({ style: e }) => a.createElement(o.Z, { "aria-label": "", source: l, style: e }), []);
                    return a.createElement(r.Z, { actionLabel: "Contact support", enableMaskForDismiss: !0, graphic: m, graphicDisplayMode: "illustration", headline: "We cannot open your account at this time", isFullHeightOnMobile: !0, onAction: c, onClose: u, subtext: "Please reach out to customer support for further assistance." });
                },
                m = { context: "PAYMENTS_NOT_AVAILABLE" },
                d = (e) => a.createElement(c.H, { errorConfig: m }, a.createElement(u, e)),
                p = a.memo(d);
        },
        101049: (e, t, n) => {
            n.r(t), n.d(t, { default: () => v });
            n(875640);
            var a = n(202784),
                i = n(325686),
                o = n(107267),
                r = n(529356),
                l = n(731708),
                c = n(124964),
                s = n(392237),
                u = n(332920),
                m = n.n(u),
                d = n(293723),
                p = n(263272),
                y = n(171463),
                g = n(514639),
                h = n(743080);
            const b = m().j24c37b2,
                E = { [y.a.Age]: { description: "Be at least 18 years old" }, [y.a.BirthDate]: { description: "Have a birth date on your profile", cta: { label: "Setup", destination: { pathname: "/settings/profile" } } }, [y.a.Geography]: { description: "Be a resident of the United States of America" }, [y.a.TwoFactorAuth]: { description: "Security key or Authentication app enabled", cta: { label: "Setup", destination: { pathname: "/i/money/setup-two-factor-auth", state: { setupTwoFactorAuthReturnPath: g.Cz } } } }, [y.a.PhoneNumber]: { description: "Have a verified US phone number", cta: { label: "Setup", destination: { pathname: "/i/flow/add_phone", query: { input_flow_data: JSON.stringify({ requested_variant: btoa(JSON.stringify({ redirect_url: "/i/money" })) }) } } } }, [y.a.Safety]: { description: "Your X account is in good standing" }, [y.a.Allowlist]: { description: "Your account is allowed" } },
                k = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        s = t.location?.state?.requirements;
                    return a.createElement(
                        r.Z,
                        { actionLabel: b, enableMaskForDismiss: !0, graphicDisplayMode: s ? "none" : "illustration", graphicStyle: h.ir, headline: "You’re not yet eligible", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: g.N6 },
                        s
                            ? a.createElement(
                                  i.Z,
                                  { style: f.requirements },
                                  s?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          o = E[n];
                                      return o ? a.createElement(i.Z, { key: n, style: f.item }, a.createElement(l.ZP, { style: f.label, weight: "bold" }, o.description, o.cta && !t ? a.createElement(a.Fragment, null, a.createElement(c.Z, { style: f.middot }), a.createElement(l.ZP, { link: o.cta.destination }, o.cta.label)) : null), t ? a.createElement(d.default, { style: f.iconChecked }) : a.createElement(p.default, { style: f.iconUnchecked })) : null;
                                  }),
                              )
                            : null,
                    );
                },
                f = s.default.create((e) => ({ requirements: { gap: e.spaces.space24, marginBottom: e.spaces.space32 }, item: { flexDirection: "row" }, label: { flex: 1 }, iconChecked: { color: e.colors.green500 }, iconUnchecked: { color: e.colors.gray200 }, middot: { color: e.colors.text } })),
                v = a.memo(k);
        },
        306389: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Ze });
            var a = n(202784),
                i = n(107267),
                o = n(167630),
                r = n(392237),
                l = n(736063),
                c = n(952793),
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
                x = n(325686),
                w = (n(585488), n(351743)),
                _ = n.n(w),
                T = n(154003),
                A = n(760286),
                S = n(980407),
                I = n(743080),
                M = n(691533),
                z = n(429371),
                H = n(125363),
                B = n(390387),
                q = n(919022);
            const F = "Continue before the payment expires.",
                N = ({ invitationCount: e }) => !!e && e > 1,
                D = ({ invitationCount: e }) => (N({ invitationCount: e }) ? "Continue before the payments expire." : F),
                L = (e) => {
                    const t = `x.com${s.sM}`;
                    return e ? `${t}?user_id=${e}` : t;
                },
                O = () => {
                    const e = (0, H.v9)(q.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                W = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const i = (0, H.v9)(B._h),
                        o = (0, c.hC)("payments_qr_onboarding_enabled");
                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(g.ZP, { color: "gray700", size: "body" }, o ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), o ? a.createElement(M.Z, null, a.createElement(x.Z, { style: j.qrcode }, a.createElement(z.Z, { dimension: 200, link: L(i) }))) : null);
                },
                j = r.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                R = a.memo(W);
            var U = n(883229),
                $ = n(943914),
                Y = n(329923);
            const J = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                V = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                X = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, Y.Z)();
                    return e ? a.createElement(R, { description: D({ invitationCount: t }), title: J({ formattedAmount: e }) }) : a.createElement(R, null);
                },
                G = { context: "PaymentsPendingBalance" },
                K = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(R, null), type: "CustomRetry" }), []);
                    return a.createElement(U.N, { errorConfig: G, fallback: e }, a.createElement($.B, null, a.createElement(X, null)));
                },
                Q = a.memo(K);
            var ee = n(807896),
                te = n(190940);
            const ne = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ae = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, i] = (0, te.Z)(e);
                    return n && i
                        ? a.createElement(
                              R,
                              (0, ee.Z)(
                                  { description: F, title: ne(i) },
                                  t
                                      ? (() => {
                                            const { formattedAmount: e, invitationCount: t } = (0, Y.Z)(),
                                                n = N({ invitationCount: t });
                                            return { subtitle: e && n ? a.createElement(g.ZP, { color: "gray700", size: "body" }, V({ formattedAmount: e })) : void 0, description: D({ invitationCount: t }) };
                                        })()
                                      : void 0,
                              ),
                          )
                        : t
                          ? a.createElement(Q, null)
                          : a.createElement(R, null);
                },
                ie = { context: "PaymentsTransactionInvite" },
                oe = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(R, null), type: "CustomRetry" }), []);
                    return a.createElement(U.N, { errorConfig: ie, fallback: t }, a.createElement($.B, null, a.createElement(ae, e)));
                },
                re = a.memo(oe),
                le = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === b.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(re, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(Q, null) : a.createElement(R, null));
                },
                ce = a.memo(le),
                se = P.Z,
                ue = "setupPayments",
                me = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const r = (0, i.useHistory)(),
                        l = (0, u.z)(),
                        c = (0, I.jh)(),
                        s = C[t],
                        [m, d] = _()(se),
                        p = r.location?.state,
                        y = s.buttonText,
                        g = s.disclaimer,
                        h = a.useCallback(() => ({ pathname: "/i/money/onboarding", state: { ...p, step: ue }, query: r?.location?.query }), [p, r?.location?.query]),
                        b = a.useCallback(() => {
                            l.scribe({ page: "money", section: "onboarding", element: "agreeTerms", action: "click" }),
                                m({
                                    variables: {},
                                    onCompleted: () => {
                                        r.push(h());
                                    },
                                    onError: () => {
                                        r.push(h());
                                    },
                                });
                        }, [l, m, r, h]),
                        E = a.useCallback(() => {
                            r.push("/");
                        }, [r]),
                        k = d,
                        f = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(T.ZP, { disabled: k, onPress: b, size: "large", type: "primaryFilled" }, k ? a.createElement(o.Z, null) : y)), [k, b, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: r, onBackClick: E }, a.createElement(x.Z, { style: [c.container, I.ZP.paddingNarrow] }, a.createElement(A.default, { style: de.illustration }), a.createElement(ce, { inviteTransactionId: e, onboardingType: t })), a.createElement(x.Z, { style: [c.footer, I.ZP.paddingNarrow] }, a.createElement(x.Z, { style: de.row }, g), f));
                },
                de = r.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space16 }, illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text } })),
                pe = a.memo(me);
            var ye = n(529356);
            const ge = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, i.useHistory)(),
                        o = (0, I.jh)(),
                        r = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(ye.Z, { contentStyle: he.content, enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "", isFullHeightOnMobile: !0, onAction: () => {}, onClose: r, subtext: "" }, a.createElement(x.Z, { style: [o.container, he.qrPadding] }, a.createElement(ce, { inviteTransactionId: e, onboardingType: t })));
                },
                he = r.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { paddingHorizontal: 0, paddingTop: 0, minHeight: 420 } })),
                be = a.memo(ge),
                Ee = (e) => {
                    const t = (0, i.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: r, isEligible: l, paymentsRedirectPath: g, requirements: h, roles: E } = (0, p.Z)(),
                        k = (0, c.hC)("payments_qr_onboarding_enabled"),
                        f = t.location?.state,
                        v = f?.step,
                        Z = f?.inviteTransactionId,
                        P = (0, y.jm)({ roles: E }),
                        x = (0, y.So)({ roles: E }),
                        w = P ? b.autoclaim : Z ? b.invite : b.default,
                        _ = C[w].redirectPath({ inviteTransactionId: Z }),
                        T = a.useMemo(() => !(h && !x) || h.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [h, x]),
                        A = { pathname: s.Js, state: { requirements: x ? null : h } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: v, action: "impression" });
                    }, [n, v]);
                    const S = g === s.Js ? A : g;
                    return r ? (S ? a.createElement(m.Z, { to: S }) : l || (k && !T) ? (v === ue ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: _ }) : k ? a.createElement(be, { inviteTransactionId: Z, onboardingType: w }) : a.createElement(pe, { inviteTransactionId: Z, onboardingType: w, redirectPath: _ })) : a.createElement(m.Z, { to: A })) : a.createElement(o.Z, { style: ve.loadingStyle });
                },
                ke = { context: "PaymentsOnboarding" };
            function fe(e) {
                return a.createElement(l.H, { errorConfig: ke }, a.createElement(Ee, e));
            }
            const ve = r.default.create((e) => ({ loadingStyle: { margin: "auto" } })),
                Ze = a.memo(fe);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.4771455a.js.map
