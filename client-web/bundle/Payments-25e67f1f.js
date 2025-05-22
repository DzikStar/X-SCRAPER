"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-25e67f1f"],
    {
        897340: (e, t, n) => {
            n.r(t), n.d(t, { default: () => j });
            var a = n(202784),
                o = n(325686),
                i = n(952428),
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
                _ = n(312771),
                w = n(847347),
                T = n(634455),
                A = n(819404),
                S = n(575123),
                I = n(452275),
                M = n(412100),
                B = n(934265),
                H = n(743080),
                q = n(727384);
            const F = { page: "money", section: "balance" },
                z = "Money",
                N = "Balance",
                D = (e) => {
                    const { balance: t, interest: n, refetchStatus: m } = (0, B.Z)(),
                        d = (0, v.hC)("payments_tasks_carousel_enabled"),
                        k = (0, H.jh)(),
                        { permissions: f } = (0, C.Z)({ fetchKey: "Payments" }),
                        { data: x, fetchNext: S, hasNotices: I } = (0, M.Z)(),
                        F = (0, q.Gs)(f),
                        z = (0, P.nK)(f),
                        D = F || f?.includes(E.d.CreateDeposit),
                        L = F || f?.includes(E.d.CreateWithdrawal),
                        W = a.createElement(i.Z, { link: Z.l_, style: H.ZP.column, testID: "account-balance" }, a.createElement(o.Z, { style: H.ZP.rowSpaceBetween }, a.createElement(r.ZP, { color: "gray700" }, N), n?.apy && a.createElement(l.ZP, { type: "bestValue" }, (0, q.Bj)({ apy: n.apy }))), m === _.iF.LOADING ? a.createElement(c.Z, { style: O.balanceLoader }) : t ? a.createElement(T.Z, { amount: t.available_amount_local_micro }) : null, a.createElement(r.ZP, null, "Account & Routing Number", a.createElement(p.default, { style: O.icon })));
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": N, containerStyle: k.tile, stackLayoutUpperStyle: H.ZP.upper, upper: W, withInteractiveStyling: !1 }), I ? a.createElement(w.Z, { data: x, fetchNext: S, type: "notice", withTile: !0 }) : null, a.createElement(o.Z, { style: k.pivotTileContainer }, a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !z, icon: y.default, iconColor: "text", isCompact: !0, link: z ? Z.HM : void 0, text: "Send", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !z, icon: g.default, iconColor: "text", isCompact: !0, link: z ? Z.Jv : void 0, text: "Request", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !D, icon: h.default, iconColor: "text", isCompact: !0, link: D ? Z.IN : void 0, text: "Deposit", withInteractiveStyling: !0 }), a.createElement(u.Z, { containerStyle: k.pivotTile, disabled: !L, icon: b.default, iconColor: "text", isCompact: !0, link: L ? Z.r0 : void 0, text: "Withdraw", withInteractiveStyling: !0 })), d && a.createElement(A.Z, null));
                },
                L = { context: "ACCOUNT_BALANCE" },
                O = m.default.create((e) => ({ balanceLoader: { marginVertical: e.spaces.space8 }, padding: { padding: e.spaces.space8 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space8, flexShrink: 0 } })),
                W = (e) => {
                    const { history: t } = e,
                        n = (0, H.jh)(),
                        o = a.useCallback(() => a.createElement(d.Z, { style: [n.root, { paddingBottom: "200px" }], withWideContainer: !0 }, a.createElement(f.H, { errorConfig: L }, a.createElement(I.Z, null), a.createElement(f.H, { errorConfig: L }, a.createElement(D, e)))), [n.root, e]),
                        i = a.useCallback(() => t.goBack(), [t]);
                    return a.createElement(x.nO, { namespace: F }, a.createElement(k.Z, { documentTitle: z, history: t, isFullWidth: !0, onBackClick: i, primaryContent: o(), rightControl: a.createElement(S.Z, null), sidebarContent: null, title: z }));
                },
                j = a.memo(W);
        },
        135099: (e, t, n) => {
            n.r(t), n.d(t, { LinkAccount: () => T, default: () => I });
            var a = n(202784),
                o = n(107267),
                i = n(736063),
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
                        l = i?.redirectPath,
                        [s] = b(),
                        p = a.useMemo(() => (l === m.iE.bankAccounts ? m.iE.bankAccounts : m.gp), [l]);
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
                        }, [t, e, p, i, s, n, l]),
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
            const _ = () => {
                    const e = (0, r.z)(),
                        t = (0, u.p)(),
                        n = (0, o.useHistory)(),
                        i = (0, x.jh)(),
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
                    return a.createElement(P.Z, { backButtonType: "close", history: n, onBackClick: E }, a.createElement(v.Z, { style: [i.container, x.ZP.paddingNarrow] }, a.createElement(Z.ZP, { size: "title2", style: x.ZP.title, weight: "heavy" }, "Link a bank account"), a.createElement(Z.ZP, null, "You need to link your bank account before you can continue.")), a.createElement(v.Z, { style: [i.footer, x.ZP.paddingNarrow] }, a.createElement(Z.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(Z.ZP, { color: "text", link: l.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(C.ZP, { disabled: g, onPress: h, size: "large", type: "primaryFilled" }, g ? a.createElement(c.Z, null) : "Continue")));
                },
                w = a.memo(_),
                T = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, r.z)(),
                        i = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "link-account", component: i, action: "impression" });
                        }, [n, i]),
                        i === l.Vq.termsPane ? a.createElement(w, null) : a.createElement(f, null)
                    );
                },
                A = { context: "LinkAccount" };
            function S(e) {
                return a.createElement(i.H, { errorConfig: A }, a.createElement(T, e));
            }
            const I = a.memo(S);
        },
        587139: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                o = n(107267),
                i = n(992942),
                r = n(529356),
                l = n(332920),
                c = n.n(l),
                s = n(198433);
            const u = c().j24c37b2,
                m = (e) => {
                    const t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        l = a.useCallback(({ style: e }) => a.createElement(i.Z, { "aria-label": "", source: s, style: e }), []);
                    return a.createElement(r.Z, { actionLabel: u, enableMaskForDismiss: !0, graphic: l, graphicDisplayMode: "illustration", headline: "Access denied", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "You are not allowed to perform this action at this time." });
                },
                d = a.memo(m);
        },
        865089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var a = n(202784),
                o = n(107267),
                i = n(992942),
                r = n(529356),
                l = n(198433),
                c = n(736063),
                s = n(137882);
            const u = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, s.b)({}),
                        c = a.useCallback(() => {
                            window.open(n, "_blank");
                        }, [n]),
                        u = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        m = a.useCallback(({ style: e }) => a.createElement(i.Z, { "aria-label": "", source: l, style: e }), []);
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
                o = n(325686),
                i = n(107267),
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
                    const t = (0, i.useHistory)(),
                        n = a.useCallback(() => {
                            t.replace("/");
                        }, [t]),
                        s = t.location?.state?.requirements;
                    return a.createElement(
                        r.Z,
                        { actionLabel: b, enableMaskForDismiss: !0, graphicDisplayMode: s ? "none" : "illustration", graphicStyle: h.ir, headline: "You’re not yet eligible", isFullHeightOnMobile: !0, onAction: n, onClose: n, subtext: "Unfortunately, you are not eligible at this time.", supportUrl: g.N6 },
                        s
                            ? a.createElement(
                                  o.Z,
                                  { style: f.requirements },
                                  s?.map((e) => {
                                      const { passes_requirement: t, requirement_type: n } = e || {},
                                          i = E[n];
                                      return i ? a.createElement(o.Z, { key: n, style: f.item }, a.createElement(l.ZP, { style: f.label, weight: "bold" }, i.description, i.cta && !t ? a.createElement(a.Fragment, null, a.createElement(c.Z, { style: f.middot }), a.createElement(l.ZP, { link: i.cta.destination }, i.cta.label)) : null), t ? a.createElement(d.default, { style: f.iconChecked }) : a.createElement(p.default, { style: f.iconUnchecked })) : null;
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
                o = n(107267),
                i = n(167630),
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
                _ = (n(585488), n(351743)),
                w = n.n(_),
                T = n(154003),
                A = n(760286),
                S = n(980407),
                I = n(743080),
                M = n(691533),
                B = n(429371),
                H = n(125363),
                q = n(390387),
                F = n(919022);
            const z = "Continue before the payment expires.",
                N = ({ invitationCount: e }) => !!e && e > 1,
                D = ({ invitationCount: e }) => (N({ invitationCount: e }) ? "Continue before the payments expire." : z),
                L = (e) => {
                    const t = `x.com${s.sM}`;
                    return e ? `${t}?user_id=${e}` : t;
                },
                O = () => {
                    const e = (0, H.v9)(F.ZP.selectViewerUser);
                    return e ? `Welcome to X Money, ${e.name}` : "Welcome to X Money";
                },
                W = ({ title: e, description: t = "Money is currently exclusive to users in the United States.", subtitle: n }) => {
                    const o = (0, H.v9)(q._h),
                        i = (0, c.hC)("payments_qr_onboarding_enabled");
                    return a.createElement(a.Fragment, null, a.createElement(g.ZP, { size: "title4", weight: "heavy" }, e ?? a.createElement(O, null)), n, a.createElement(g.ZP, { color: "gray700", size: "body" }, i ? "Scan this QR code directly on your mobile device’s camera to continue in the X app." : t), i ? a.createElement(M.Z, null, a.createElement(x.Z, { style: j.qrcode }, a.createElement(B.Z, { dimension: 200, link: L(o) }))) : null);
                },
                j = r.default.create((e) => ({ qrcode: { margin: "auto", marginTop: e.spaces.space48, width: 200 * e.scaleMultiplier + "px" } })),
                U = a.memo(W);
            var $ = n(883229),
                R = n(943914),
                Y = n(329923);
            const J = ({ formattedAmount: e }) => `You have ${e} waiting for you`,
                V = ({ formattedAmount: e }) => `You have a total of ${e} waiting for you.`,
                X = () => {
                    const { formattedAmount: e, invitationCount: t } = (0, Y.Z)();
                    return e ? a.createElement(U, { description: D({ invitationCount: t }), title: J({ formattedAmount: e }) }) : a.createElement(U, null);
                },
                G = { context: "PaymentsPendingBalance" },
                K = () => {
                    const e = a.useMemo(() => ({ content: () => a.createElement(U, null), type: "CustomRetry" }), []);
                    return a.createElement($.N, { errorConfig: G, fallback: e }, a.createElement(R.B, null, a.createElement(X, null)));
                },
                Q = a.memo(K);
            var ee = n(807896),
                te = n(190940);
            const ne = ({ formattedAmount: e, name: t }) => `${t} sent you ${e}`,
                ae = ({ inviteTransactionId: e, isAutoClaimFlow: t }) => {
                    const [n, o] = (0, te.Z)(e);
                    return n && o
                        ? a.createElement(
                              U,
                              (0, ee.Z)(
                                  { description: z, title: ne(o) },
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
                          : a.createElement(U, null);
                },
                oe = { context: "PaymentsTransactionInvite" },
                ie = (e) => {
                    const t = a.useMemo(() => ({ content: () => a.createElement(U, null), type: "CustomRetry" }), []);
                    return a.createElement($.N, { errorConfig: oe, fallback: t }, a.createElement(R.B, null, a.createElement(ae, e)));
                },
                re = a.memo(ie),
                le = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = t === b.autoclaim;
                    return a.createElement(a.Fragment, null, e ? a.createElement(re, { inviteTransactionId: e, isAutoClaimFlow: n }) : n ? a.createElement(Q, null) : a.createElement(U, null));
                },
                ce = a.memo(le),
                se = P.Z,
                ue = "setupPayments",
                me = ({ inviteTransactionId: e, onboardingType: t, redirectPath: n }) => {
                    const r = (0, o.useHistory)(),
                        l = (0, u.z)(),
                        c = (0, I.jh)(),
                        s = C[t],
                        [m, d] = w()(se),
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
                        f = a.useMemo(() => a.createElement(a.Fragment, null, a.createElement(T.ZP, { disabled: k, onPress: b, size: "large", type: "primaryFilled" }, k ? a.createElement(i.Z, null) : y)), [k, b, y]);
                    return a.createElement(S.Z, { backButtonType: "close", history: r, onBackClick: E }, a.createElement(x.Z, { style: [c.container, I.ZP.paddingNarrow] }, a.createElement(A.default, { style: de.illustration }), a.createElement(ce, { inviteTransactionId: e, onboardingType: t })), a.createElement(x.Z, { style: [c.footer, I.ZP.paddingNarrow] }, a.createElement(x.Z, { style: de.row }, g), f));
                },
                de = r.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space16 }, illustration: { alignSelf: "flex-start", height: e.spaces.space48, marginBottom: e.spaces.space16, color: e.colors.text } })),
                pe = a.memo(me);
            var ye = n(529356);
            const ge = ({ inviteTransactionId: e, onboardingType: t }) => {
                    const n = (0, o.useHistory)(),
                        i = (0, I.jh)(),
                        r = a.useCallback(() => {
                            n.push("/");
                        }, [n]);
                    return a.createElement(ye.Z, { contentStyle: he.content, enableMaskForDismiss: !0, graphicDisplayMode: "none", headline: "", isFullHeightOnMobile: !0, onAction: () => {}, onClose: r, subtext: "" }, a.createElement(x.Z, { style: [i.container, he.qrPadding] }, a.createElement(ce, { inviteTransactionId: e, onboardingType: t })));
                },
                he = r.default.create((e) => ({ content: { minWidth: 0 }, qrPadding: { paddingHorizontal: 0, paddingTop: 0, minHeight: 420 } })),
                be = a.memo(ge),
                Ee = (e) => {
                    const t = (0, o.useHistory)(),
                        n = (0, u.z)(),
                        { hasLoaded: r, isEligible: l, paymentsRedirectPath: g, requirements: h, roles: E } = (0, p.Z)(),
                        k = (0, c.hC)("payments_qr_onboarding_enabled"),
                        f = t.location?.state,
                        v = f?.step,
                        Z = f?.inviteTransactionId,
                        P = (0, y.jm)({ roles: E }),
                        x = (0, y.So)({ roles: E }),
                        _ = P ? b.autoclaim : Z ? b.invite : b.default,
                        w = C[_].redirectPath({ inviteTransactionId: Z }),
                        T = a.useMemo(() => !(h && !x) || h.some((e) => !e.passes_requirement && "PhoneNumber" !== e.requirement_type), [h, x]),
                        A = { pathname: s.Js, state: { requirements: x ? null : h } };
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "onboarding", component: v, action: "impression" });
                    }, [n, v]);
                    const S = g === s.Js ? A : g;
                    return r ? (S ? a.createElement(m.Z, { to: S }) : l || (k && !T) ? (v === ue ? a.createElement(d.Z, { errorPath: s.EA, linkType: s.P_.onboarding, redirectPath: w }) : k ? a.createElement(be, { inviteTransactionId: Z, onboardingType: _ }) : a.createElement(pe, { inviteTransactionId: Z, onboardingType: _, redirectPath: w })) : a.createElement(m.Z, { to: A })) : a.createElement(i.Z, { style: ve.loadingStyle });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-25e67f1f.dae9ebca.js.map
