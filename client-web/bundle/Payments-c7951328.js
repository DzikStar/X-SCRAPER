"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-c7951328"],
    {
        217882: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            var a = n(202784),
                r = n(107267),
                c = n(992942),
                s = n(529356),
                o = n(674132),
                i = n.n(o),
                l = n(198433),
                m = n(736063),
                u = n(514639),
                d = n(445664);
            const y = i().j24c37b2,
                p = (e) => {
                    const t = (0, r.useHistory)(),
                        { isActive: n } = (0, d.Z)({ fetchKey: "Payments" }),
                        o = a.useCallback(() => {
                            t.replace(n ? u.gp : "/");
                        }, [t, n]),
                        i = a.useCallback(({ style: e }) => a.createElement(c.Z, { "aria-label": "", source: l, style: e }), []);
                    return a.createElement(s.Z, { actionLabel: y, enableMaskForDismiss: !0, graphic: i, graphicDisplayMode: "illustration", headline: "Your account is under review", isFullHeightOnMobile: !0, onAction: o, onClose: o, subtext: "We are reviewing your account. Please check back later.", supportUrl: u.N6 });
                },
                h = { context: "PAYMENTS_REVIEW" },
                g = (e) => a.createElement(m.H, { errorConfig: h }, a.createElement(p, e)),
                f = a.memo(g);
        },
        923509: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            n(136728);
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(782642),
                o = n(514639),
                i = n(725516),
                l = n(160144);
            const m = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, i.z)(),
                        c = (0, s.p)();
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "update-pin", action: "impression" });
                    }, [n]);
                    const m = a.useCallback(
                        (e) => {
                            const { message: n } = e.data;
                            switch (n) {
                                case l.T.success:
                                    t.replace(o.iE.securityPrivacy), c({ text: "You PIN has been successfuly changed." });
                                    break;
                                case l.T.forgotPin:
                                    t.push(o.jR, { challengeInitiator: o.kW.forgotPin });
                            }
                        },
                        [t, c],
                    );
                    return a.createElement(l.Z, { eventCallback: m, linkType: o.P_.updatePin });
                },
                u = { context: "UpdatePin" };
            function d(e) {
                return a.createElement(c.H, { errorConfig: u }, a.createElement(m, e));
            }
            const y = a.memo(d);
        },
        162827: (e, t, n) => {
            n.r(t), n.d(t, { default: () => P });
            n(136728);
            var a = n(202784),
                r = n(437429),
                c = n.n(r),
                s = n(107267),
                o = n(555950),
                i = n(736063),
                l = n(782642),
                m = n(514639),
                u = n(441484),
                d = n(725516),
                y = n(43429),
                p = n(193364),
                h = n(160144),
                g = n(727384);
            const f = { 1: m.kW.forgotPin, 2: m.kW.preference, 3: m.kW.transaction, 4: m.kW.auth, 5: m.kW.activateCard },
                k = { [m.kW.forgotPin]: "You PIN has been successfuly changed." },
                I = (e) => {
                    const t = (0, s.useHistory)(),
                        n = (0, d.z)(),
                        r = (0, l.p)(),
                        i = t.location?.state,
                        { challengeId: I, challengeInitiator: E, closePath: b, message: P, recordId: v, redirectPath: Z, redirectState: C, successMessage: S } = i ?? {},
                        [x, w] = a.useState(I),
                        [z, A] = a.useState(E),
                        [T, _] = a.useState(P ?? y.q9.initiate),
                        [R, N] = a.useState(),
                        [D, $] = a.useState(!1),
                        M = c()(),
                        F = z === m.kW.auth,
                        V = z === m.kW.forgotPin || t.location.pathname === m.jR,
                        H = V ? m.P_.forgotPin : m.P_.challenge,
                        L = (z ? k[z] : void 0) ?? S,
                        q = a.useCallback((e) => {
                            N(e.loginRequestId), _(y.q9.complete2fa), $(!1);
                        }, []),
                        W = a.useCallback(
                            (e) => {
                                const { authStatus: n, challengeId: a, message: c, origin: s } = e.data,
                                    l = s ? f[`${s}`] : null;
                                switch (c) {
                                    case h.T.success:
                                        F && 1 === n && u.Z.updateSessionStatus(o.c.Active), v ? (0, g.Se)(M, v) : z === m.kW.activateCard ? (0, g.uN)(M) : (0, g.J$)(M), Z ? t.replace(Z, C) : t.goBack(), L && r({ text: L });
                                        break;
                                    case h.T.docvChallenge:
                                        t.replace(m.AU.tier3.verifyIdentityPath, { ...i, challengeInitiator: l ?? z });
                                        break;
                                    case h.T.kycChallenge:
                                        t.replace(m.AU.tier2.verifyIdentityPath, { ...i, challengeInitiator: l ?? z });
                                        break;
                                    case h.T.selfieChallenge:
                                        t.replace(m.AU.selfie.verifyIdentityPath, { ...i, challengeInitiator: l ?? z });
                                        break;
                                    case h.T.twoFactorChallenge:
                                        w(a), A(l ?? z), $(!0);
                                        break;
                                    case h.T.forgotPin:
                                        t.push(m.jR, { challengeInitiator: m.kW.forgotPin });
                                        break;
                                    case h.T.invalidChallenge:
                                        F && u.Z.fetchNewSession();
                                        break;
                                    case h.T.close:
                                        (0, g.qc)({ environment: M, closePath: b, challengeInitiator: z, history: t });
                                }
                            },
                            [F, v, Z, L, t, i, M, z, b, C, r],
                        );
                    a.useEffect(() => {
                        n && n.scribe({ page: "money", section: "verify-challenge", action: "impression" });
                    }, [n]),
                        a.useEffect(
                            () => (
                                z === m.kW.auth && u.Z.loadChallenge(),
                                () => {
                                    z === m.kW.auth && u.Z.closeChallenge();
                                }
                            ),
                            [z],
                        );
                    const K = F;
                    return x && D ? a.createElement(p.Z, { challengeId: x, isNonModalScreen: K, onSuccess: q }) : x || V ? a.createElement(h.Z, { closePath: b, eventCallback: W, isNonModalScreen: K, linkType: H, payload: { challengeId: x, loginRequestId: R, message: T }, redirectPath: Z, redirectState: C }) : null;
                },
                E = { context: "VerifyChallenge" };
            function b(e) {
                return a.createElement(i.H, { errorConfig: E }, a.createElement(I, e));
            }
            const P = a.memo(b);
        },
        516813: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(514639),
                o = n(725516),
                i = n(160144);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, o.z)(),
                        c = (0, r.useParams)(),
                        l = s.Kc[c.tier ?? s.Kc.tier2],
                        m = t.location?.state,
                        u = m?.redirectPath,
                        d = m?.closePath,
                        y = m?.redirectState,
                        p = m?.requestedField,
                        h = m?.challengeId,
                        g = m?.challengeInitiator,
                        { linkType: f } = s.AU[l];
                    return (
                        a.useEffect(() => {
                            n && l && n.scribe({ page: "money", section: "verify-identity", component: l, action: "impression" });
                        }, [n, l]),
                        a.createElement(i.Z, { additionalParams: p ? [{ key: "requestedField", value: p }] : void 0, challengeId: h, challengeInitiator: g, closePath: d, linkType: f, redirectPath: u, redirectState: y })
                    );
                },
                m = { context: "VerifyIdentity" };
            function u(e) {
                return a.createElement(c.H, { errorConfig: m }, a.createElement(l, e));
            }
            const d = a.memo(u);
        },
        891053: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var a = n(202784),
                r = n(107267),
                c = n(736063),
                s = n(725516),
                o = (n(136728), n(325686)),
                i = n(731708),
                l = n(154003),
                m = n(167630),
                u = n(980407),
                d = n(782642),
                y = n(514639),
                p = n(43429),
                h = n(743080),
                g = n(388768),
                f = (n(585488), n(351743)),
                k = n.n(f);
            const I = g.Z,
                E = () => {
                    const [e, t] = k()(I);
                    return [
                        a.useCallback(
                            ({ paymentMethodId: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { redirect_url: "https://x.com/i/money/link-oauth", payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.create_item_update_session?.linking_token?.token,
                                                c = e?.create_item_update_session?.provider;
                                            r ? n({ token: r, provider: c }) : a(t);
                                        },
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                b = () => {
                    const e = (0, s.z)(),
                        t = (0, d.p)(),
                        n = (0, r.useHistory)(),
                        c = (0, h.jh)(),
                        g = n.location?.state?.redirectPath,
                        f = n.location?.state?.paymentMethodId,
                        [k, I] = E(),
                        b = a.useCallback(() => {
                            e.scribe({ page: "money", section: "verify-payment-method", element: "agreeTerms", action: "click" }),
                                f &&
                                    k({ paymentMethodId: f })
                                        .then(({ provider: t, token: a }) => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "success" });
                                            const r = { token: a, provider: t, linkType: y.P_.verifyPaymentMethod, redirectPath: g, paymentMethodId: f };
                                            n.push(y.MW, r);
                                        })
                                        .catch(() => {
                                            e.scribe({ page: "money", section: "verify-payment-method", element: "VerifyPaymentMethod", action: "error" }), t({ text: "Something went wrong. Please try again later." });
                                        });
                        }, [t, e, k, n, f, g]),
                        P = a.useCallback(() => {
                            n.push(g ?? y.gp);
                        }, [n, g]),
                        v = a.createElement(o.Z, { style: c.footer }, a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, 'By clicking "Continue", you agree to the', " ", a.createElement(i.ZP, { color: "text", link: p.uc, size: "subtext2" }, "Terms & Conditions")), a.createElement(l.ZP, { disabled: I, onPress: b, size: "large", type: "primaryFilled" }, I ? a.createElement(m.Z, null) : "Continue"));
                    return a.createElement(u.Z, { backButtonType: "close", bottomBar: v, history: n, onBackClick: P, withoutBottomBarMobile: !0 }, a.createElement(o.Z, { style: c.container }, a.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Verify your bank account"), a.createElement(i.ZP, null, "You need to login to verify your bank account before you can proceed.")));
                },
                P = a.memo(b),
                v = (e) => {
                    const t = (0, r.useHistory)(),
                        n = (0, s.z)(),
                        c = t.location?.state?.step;
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "verify-payment-method", component: c, action: "impression" });
                        }, [n, c]),
                        a.createElement(P, null)
                    );
                },
                Z = { context: "VerifyPaymentMethod" };
            function C(e) {
                return a.createElement(c.H, { errorConfig: Z }, a.createElement(v, e));
            }
            const S = a.memo(C);
        },
        392046: (e, t, n) => {
            n.d(t, { Z: () => b });
            var a = n(807896),
                r = n(202784),
                c = n(325686),
                s = n(952428),
                o = n(823161),
                i = n(731708),
                l = n(366635),
                m = n(868634),
                u = n(154003),
                d = n(392237),
                y = n(293723),
                p = n(607127),
                h = n(487552),
                g = n(43429),
                f = n(477922);
            const k = "Remove linked account",
                I = ({ account: e, handleRemove: t, isDisabled: n, isSelected: d, onClick: I, withChevron: b, withInteractiveStyling: P }) => {
                    const v = e.id,
                        Z = !n && (P ?? !!I),
                        C = r.useCallback(() => {
                            v && !n && I?.(v);
                        }, [v, I, n]),
                        S = r.useCallback(
                            (e) => {
                                e && e.stopPropagation(), t?.();
                            },
                            [t],
                        );
                    return r.createElement(s.Z, { onClick: Z ? C : void 0, withInteractiveStyling: Z }, r.createElement(c.Z, { style: E.account }, e.type === g.dX.x ? r.createElement(o.default, (0, a.Z)({ size: "xxxLarge" }, e.avatar)) : r.createElement(f.qn, { size: "xxxLarge", type: e.type, uri: e.avatar?.uri }), r.createElement(c.Z, { style: E.accountName }, r.createElement(i.ZP, { color: "gray700" }, e.accountType), e.type === g.dX.x ? r.createElement(l.Z, e.accountName) : r.createElement(i.ZP, null, e.accountName.name)), e.label ? r.createElement(m.ZP, { style: E.decoration, type: "warning" }, e.label) : null, d ? r.createElement(y.default, { style: [E.decoration, E.selected] }) : null, t ? r.createElement(u.ZP, { "aria-label": k, hoverLabel: { label: k }, icon: r.createElement(p.default, null), onClick: S, size: "small", style: E.decoration, testID: "btn-remove", type: "destructiveText" }) : null, b ? r.createElement(h.default, { style: E.decoration }) : null));
                },
                E = d.default.create((e) => ({ account: { flexDirection: "row", gap: e.spaces.space8, display: "flex" }, accountName: { flexDirection: "column", gap: e.spaces.space4, justifyContent: "center", flex: 1 }, decoration: { alignSelf: "center", marginStart: "auto", marginEnd: e.spaces.space4, flexShrink: 0 }, selected: { color: e.colors.green500 } })),
                b = r.memo(I);
        },
        803263: (e, t, n) => {
            n.d(t, { Z: () => M });
            var a = n(932525),
                r = n(202784),
                c = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                i = n(731708),
                l = n(165822),
                m = n(965245),
                u = n(137882),
                d = n(743080),
                y = n(882956),
                p = n(952428),
                h = n(909377),
                g = n(154003),
                f = n(211971),
                k = n(711223),
                I = n(642317),
                E = n(80361),
                b = n(976352),
                P = n(988291),
                v = n(829464),
                Z = n(316732),
                C = n(514639);
            const S = "Verify",
                x = y.Z,
                w = Object.freeze({ [P.S.Alert]: "danger", [P.S.Info]: "primary", [P.S.Warning]: "warning" }),
                z = Object.freeze({ [P.S.Alert]: f.default, [P.S.Info]: k.default, [P.S.Warning]: f.default }),
                A = ({ itemRef: e, supportLink: t }) => {
                    const n = o()(x, e),
                        a = n.topics?.includes(v.h.Premium),
                        s = n.topics?.includes(v.h.Interest),
                        l = n.level === P.S.Info,
                        m = (({ action: e, supportLink: t, url: n }) => {
                            switch (e) {
                                case b.C.ContactSupport:
                                    return { label: "Contact support", link: n ?? t };
                                case b.C.LearnMore:
                                    return { label: "Learn More", link: n ?? C.N6 };
                                case b.C.KycVerification:
                                    return { label: S, link: { pathname: C.AU.tier2.verifyIdentityPath, state: { closePath: C.gp } } };
                                case b.C.KycDocumentUpload:
                                    return { label: S, link: { pathname: C.AU.tier3.verifyIdentityPath, state: { closePath: C.gp } } };
                                case b.C.SelfieVerification:
                                    return { label: S, link: { pathname: C.AU.selfie.verifyIdentityPath, state: { closePath: C.gp } } };
                                case b.C.Deposit:
                                    return { label: "Add money", link: C.IN };
                                default:
                                    return;
                            }
                        })({ action: n.call_to_action, supportLink: t, url: n.call_to_action_url }),
                        u = (l ? (a ? "primary" : s ? "success" : void 0) : void 0) ?? w[n.level],
                        y = a ? I.default : s ? E.default : z[n.level];
                    return r.createElement(p.Z, { key: n.title, style: d.dE.listItem, withInteractiveStyling: !1 }, r.createElement(h.Z, { Icon: y, color: u, size: "xLarge" }), r.createElement(c.Z, { style: d.dE.listItemFlex }, r.createElement(c.Z, { style: d.dE.listItemContent }, r.createElement(c.Z, { style: d.dE.listItemFlex }, r.createElement(i.ZP, null, n.title), r.createElement(i.ZP, { color: "gray700" }, n.subtitle)), a ? r.createElement(Z.Z, { variant: "MoneyInterest" }) : m ? r.createElement(g.ZP, { link: m.link, size: "small", type: "secondaryFilled" }, m.label) : null)));
                },
                T = r.memo(A);
            var _ = n(266362);
            const R = a.Z,
                N = "Action needed",
                D = ({ __id: e }) => e,
                $ = ({ data: e, fetchNext: t, type: n }) => {
                    const a = (0, d.jh)(),
                        s = (({ supportLink: e, type: t }) => r.useCallback((n) => ("transaction" === t && "XPaymentsTransaction" === n.__typename ? r.createElement(_.Z, { itemRef: n, key: n.__id }) : "notice" === t && "XPaymentsCustomerNotice" === n.__typename ? r.createElement(T, { itemRef: n, key: n.__id, supportLink: e }) : null), [e, t]))({ supportLink: (0, u.b)({}), type: n }),
                        y = e?.get_payments_customer_actions,
                        { items: p } = o()(R, y) ?? { items: [] },
                        h = r.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "actionNeededList", footer: null, identityFunction: D, items: p, onNearEnd: t, renderer: s, role: "list", withoutHeadroom: !0 });
                    return p.length > 0 ? r.createElement(c.Z, null, "transaction" === n ? r.createElement(c.Z, { style: d.ZP.header }, r.createElement(i.ZP, { size: "headline2", weight: "bold" }, N)) : null, r.createElement(l.Z, { "aria-label": N, containerStyle: a.tile, stackLayoutUpperStyle: d.ZP.upper, upper: h, withInteractiveStyling: !1 })) : null;
                },
                M = r.memo($);
        },
        984067: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(807896),
                r = n(202784),
                c = n(325686),
                s = n(731708),
                o = n(855488),
                i = n(392237),
                l = n(97882),
                m = n(727384);
            const u = ({ amount: e }) => `Your available balance: ${e}`,
                d = () => {
                    const e = (0, l.x)({ amount: 0, removeTrailingZeros: !0 }).replace(/\d/g, "").trim();
                    return r.createElement(c.Z, { style: h.currency }, r.createElement(s.ZP, null, e));
                };
            function y({ amount: e, balance: t, isValid: n, max: c = "9999999", min: s = "0", setAmount: i, setIsValid: l, validateBalance: y, ...p }) {
                const { available_amount_local_micro: g, currency: f } = t ?? {},
                    k = parseFloat(g),
                    I = g ? (0, m.p2)({ amount: k, currency: f }) : null,
                    E = (0, m.dN)({ amount: k }),
                    b = r.useCallback(
                        (e) => {
                            const t = parseFloat(e),
                                n = parseFloat(s),
                                a = parseFloat(c);
                            return /^\d*(\.\d{1,2})?$/.test(e) && t > 0 && t >= n && t <= a && (!y || t <= E);
                        },
                        [E, c, s, y],
                    ),
                    P = r.useCallback(
                        (e) => {
                            const t = e.replace(/^(\d*\.\d{2}).*$/, "$1");
                            (parseFloat(t) >= 0 || "" === t) && (i(t), l(b(t)));
                        },
                        [i, l, b],
                    ),
                    v = r.useCallback(
                        ({ target: e }) => {
                            P(e.value);
                        },
                        [P],
                    ),
                    Z = r.useCallback(
                        (e) => {
                            e.preventDefault();
                            const t = (e.clipboardData || window.clipboardData).getData("text/plain");
                            P(t);
                        },
                        [P],
                    ),
                    C = !n && y && parseFloat(e) > E ? "Your balance is insufficient for this transfer." : void 0;
                return r.createElement(
                    o.Z,
                    (0, a.Z)(
                        {
                            Icon: d,
                            autoFocus: !0,
                            errorText: C,
                            helperText: I ? u({ amount: I }) : void 0,
                            invalid: !n,
                            max: c,
                            min: s,
                            onChange: v,
                            onKeyPress: (e) => {
                                ("-" !== e.key && "e" !== e.key && "E" !== e.key) || e.preventDefault();
                            },
                            onPaste: Z,
                            style: h.amountInput,
                            testID: "amount",
                            type: "number",
                            value: e,
                        },
                        p,
                    ),
                );
            }
            const p = r.memo(y),
                h = i.default.create((e) => ({ currency: { marginEnd: e.spaces.space4 }, amountInput: { paddingHorizontal: "0" } }));
        },
        575123: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                c = n(154003),
                s = n(692165),
                o = n(698891),
                i = n(514639),
                l = n(743080);
            const m = "Help Center",
                u = "Settings",
                d = { pathname: i.N6, external: !0, openInSameFrame: !1 },
                y = () => a.createElement(r.Z, { style: l.ZP.actionButtons }, a.createElement(c.ZP, { "aria-label": m, hoverLabel: { label: m }, icon: a.createElement(s.default, null), link: d, pullRight: !0, type: "primaryText" }), a.createElement(c.ZP, { "aria-label": u, hoverLabel: { label: u }, icon: a.createElement(o.default, null), link: i.Sr, pullRight: !0, type: "primaryText" })),
                p = a.memo(y);
        },
        749122: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(731708);
            const c = ({ account: e, size: t, weight: n }) => a.createElement(r.ZP, { size: t, style: s.name, weight: n }, e.issuedCardAccountName),
                s = n(392237).default.create((e) => ({ name: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(c);
        },
        671738: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                c = n(154003),
                s = n(30899),
                o = n(392237),
                i = n(379327),
                l = n(727384),
                m = n(392046);
            const u = ({ accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: s, onSelectAccountId: o, paymentMethods: u }) => {
                    const d = a.useCallback(
                        (e) => () => {
                            o(e), s();
                        },
                        [s, o],
                    );
                    return a.createElement(
                        r.Z,
                        { style: y.popoverContent },
                        u?.map((t) => {
                            const n = (0, l.Ou)(t);
                            return n && n.id ? a.createElement(m.Z, { account: n, isSelected: e === n.id, key: n.id, onClick: d(n.id) }) : null;
                        }),
                        a.createElement(c.ZP, { icon: a.createElement(i.default, null), link: t }, "Add bank account"),
                        n ? a.createElement(c.ZP, { icon: a.createElement(i.default, null), link: n }, "Add card") : null,
                    );
                },
                d = ({ accountId: e, addAccountLink: t, addBankCardLink: n, onSelectAccountId: r, paymentMethods: c, selectedAccount: o }) => {
                    const i = a.useCallback((s) => a.createElement(u, { accountId: e, addAccountLink: t, addBankCardLink: n, handleDismiss: s, onSelectAccountId: r, paymentMethods: c }), [e, t, n, r, c]);
                    return a.createElement(s.Z, { renderContent: i, withArrow: !0 }, a.createElement(m.Z, { account: o, withChevron: !0, withInteractiveStyling: !0 }));
                },
                y = o.default.create((e) => ({ popoverContent: { margin: e.spaces.space16, flexDirection: "column", gap: e.spaces.space16, maxHeight: "280px" } })),
                p = a.memo(d);
        },
        413713: (e, t, n) => {
            n.d(t, { XE: () => d, ZP: () => h, kJ: () => y });
            var a = n(202784),
                r = n(40610),
                c = n(514639),
                s = n(727384);
            const o = "Review limits",
                i = ({ type: e }) => `This action would exceed your ${e} limits. We need to verify your identify to continue.`,
                l = ({ type: e }) => `This action would exceed your ${e} limits. Please review your limits and try again later.`,
                m = Object.freeze({
                    InsufficientFunds: { message: "Your account balance is insufficient to make this transfer. Please fund your account and then try again.", action: { link: c.IN, label: "Deposit" } },
                    InvalidReceiver: { message: "You cannot transfer to this account at this time. Please try again later." },
                    InvalidSender: { message: "You cannot request from this account at this time. Please try again later." },
                    IdempotencyKeyConflict: { message: "You might be attempting a duplicate payment. Please check before trying again!", action: { link: c.gp, label: "View account" } },
                    BankIssue: { message: "There was an issue with your bank while processing your transfer. Please try again." },
                    LoginRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: c.VN, label: "Verify" } },
                    PaymentMethodLinkRequired: { message: "You need to login to verify your bank account before you can proceed.", action: { link: c.VN, label: "Verify" } },
                    InsufficientBalance: { message: "Your bank account balance is insufficient. Please check your balance and try again." },
                    TwoFactorAuthRequired: { message: "You need to setup two-factor authentication before you can proceed.", action: { link: c.z$, label: "Setup" } },
                    VolumeLimitExceeded7DaySend: { message: l({ type: "weekly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded30DaySend: { message: l({ type: "monthly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded7Day: { message: l({ type: "weekly" }), action: { link: c.iE.limits, label: o } },
                    VolumeLimitExceeded30Day: { message: l({ type: "monthly" }), action: { link: c.iE.limits, label: o } },
                    AdditionalKycRequiredVolumeLimitExceeded7DaySend: { message: i({ type: "weekly" }), action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredVolumeLimitExceeded30DaySend: { message: i({ type: "monthly" }), action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    AdditionalKycRequiredTotalVolumeLimitExceeded: { message: "This action would exceed your limits. We need to verify your identify to continue.", action: { link: c.AU.tier2.verifyIdentityPath, label: "Verify your identity" } },
                    Velocity: { message: "You have temporarily exceeded your limits. Please try again later." },
                    Default: { message: "Something went wrong. Please try again later." },
                }),
                u = ["AdditionalKycRequiredVolumeLimitExceeded7DaySend", "AdditionalKycRequiredVolumeLimitExceeded30DaySend", "AdditionalKycRequiredTotalVolumeLimitExceeded"],
                d = ({ errors: e, roles: t }) => (!!e?.find((e) => u.includes(e.error_code)) ? (0, s.FW)({ roles: t }) : null),
                y = ({ errors: e }) => {
                    const t = e.find((e) => ((e) => !!m[e])(e.error_code));
                    return m[t?.error_code ?? "Default"];
                },
                p = ({ errors: e, linkState: t, roles: n }) => {
                    const c = y({ errors: e }),
                        s = c?.action,
                        o = d({ errors: e, roles: n }) ?? s?.link,
                        i = s && o ? { ...s, link: { pathname: o, state: t } } : void 0;
                    return a.createElement(r.Z.Danger, { action: i, text: c.message, withIcon: !0 });
                },
                h = a.memo(p);
        },
        845584: (e, t, n) => {
            n.d(t, { Z: () => I });
            var a = n(202784),
                r = n(247056),
                c = n(149170),
                s = n(774426),
                o = n(736063),
                i = n(725516),
                l = n(137882),
                m = n(692165);
            const u = ({ link: e, scribeAction: t, transactionId: n }) => ({
                text: "Get support",
                onClick: () => {
                    t({ element: "get-support", action: "click" });
                },
                Icon: m.default,
                link: e,
            });
            var d = n(415506);
            const y = ({ link: e, scribeAction: t, transactionId: n }) => ({
                Icon: d.default,
                text: "Report payment",
                onClick: () => {
                    t({ element: "report-payment", action: "click" });
                },
                link: e,
            });
            var p = n(284310);
            const h = ({ scribeAction: e, transactionId: t }) => ({
                    text: "Receipt",
                    onClick: () => {
                        e({ element: "view-reciept", action: "click" });
                    },
                    Icon: p.default,
                }),
                g = { context: "PaymentsActionMenu" },
                f = ({ onOpen: e, reportedHandle: t, transactionId: n, withViewReceipt: o = !1 }) => {
                    const m = (0, i.z)(),
                        d = (0, l.b)({ txId: n }),
                        p = (0, l.v)({ txId: n, reportedHandle: t }),
                        g = a.useCallback(
                            ({ action: e, element: t }) => {
                                m.scribe({ element: t, action: e });
                            },
                            [m],
                        ),
                        f = a.useMemo(() => [...(o ? [h({ transactionId: n, scribeAction: g })] : []), y({ transactionId: n, scribeAction: g, link: p }), u({ transactionId: n, scribeAction: g, link: d })], [p, g, d, n, o]),
                        k = a.useCallback((e) => a.createElement(s.default, { actionItems: f, onClose: e }), [f]);
                    return a.createElement(r.Z, { Icon: c.default, onClick: e, renderActionMenu: k, testID: "transaction-action-menu" });
                };
            function k(e) {
                return a.createElement(o.H, { errorConfig: g }, a.createElement(f, e));
            }
            const I = a.memo(k);
        },
        448518: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(202784),
                r = n(727384),
                c = (n(136728), n(107267)),
                s = n(154003),
                o = n(167630),
                i = n(436117),
                l = n(736063),
                m = n(782642),
                u = n(514639),
                d = n(445664),
                y = n(725516),
                p = n(607929),
                h = n(413713);
            const g = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: f, type: k }) => {
                    const [I, E] = (0, p.bf)(),
                        { permissions: b, roles: P } = (0, d.Z)({ fetchKey: "Payments" }),
                        v = (0, r.Fs)({ permissions: b, permission: i.d.ClaimTransfer }),
                        Z = (0, y.z)(),
                        C = (0, c.useHistory)(),
                        S = (0, m.p)(),
                        x = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    Z.scribe({ page: "money", section: "claim-transaction", element: "accept", action: "click" }),
                                    I({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You accepted ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? C.push(i, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: n }) : (o && S({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: P });
                                            t ? C.replace(t, { redirectPath: `${u.bR}/${f}`, closePath: u.gp }) : S({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [S, e, Z, I, C, t, n, P, l, f],
                        ),
                        w = E || !v;
                    return a.createElement(s.ZP, { disabled: w, onPress: x, size: g ?? "medium", type: k }, E ? a.createElement(o.Z, { size: "small" }) : "Accept");
                },
                f = { context: "PaymentsAcceptTransfer" };
            function k(e) {
                return a.createElement(l.H, { errorConfig: f }, a.createElement(g, e));
            }
            const I = a.memo(k);
            var E = n(202241);
            const b = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: g }) => {
                    const [f, k] = (0, E.yA)(),
                        { permissions: I, roles: b } = (0, d.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: I, permission: i.d.ConfirmUnrecognizedPayment }),
                        v = (0, y.z)(),
                        Z = (0, c.useHistory)(),
                        C = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && C({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: b });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${p}`, closePath: u.gp }) : C({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, f, p, n, e, t, C, b, Z],
                        ),
                        x = k || !P;
                    return a.createElement(s.ZP, { disabled: x, onPress: S, size: l ?? "medium", type: g }, k ? a.createElement(o.Z, { size: "small" }) : "Approve");
                },
                P = { context: "PaymentsPayRequest" };
            function v(e) {
                return a.createElement(l.H, { errorConfig: P }, a.createElement(b, e));
            }
            const Z = a.memo(v);
            var C = n(604347);
            const S = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: g }) => {
                    const [f, k] = (0, C.Z)(),
                        { permissions: I, roles: E } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: I, permission: i.d.CancelRequestTransfer }),
                        P = (0, y.z)(),
                        v = (0, c.useHistory)(),
                        Z = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-request", element: "cancel", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You canceled the ${e} request to @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? v.push(i, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: n }) : (o && Z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: E });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${p}`, closePath: u.gp }) : Z({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, p, n, e, g, t, Z, E, v],
                        ),
                        x = k || !b;
                    return a.createElement(s.ZP, { disabled: x, onPress: S, size: l ?? "medium", type: "primaryOutlined" }, k ? a.createElement(o.Z, { size: "small" }) : "Cancel request");
                },
                x = { context: "PaymentsCancelRequest" };
            function w(e) {
                return a.createElement(l.H, { errorConfig: x }, a.createElement(S, e));
            }
            const z = a.memo(w);
            var A = n(500386);
            const T = ({ amount: e, onSuccess: t, receiverScreenName: n, recordId: l, size: p, transactionId: g }) => {
                    const [f, k] = (0, A.Z)(),
                        { permissions: I, roles: E } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: I, permission: i.d.CancelTransfer }),
                        P = (0, y.z)(),
                        v = (0, c.useHistory)(),
                        Z = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "cancel-transaction", element: "cancel", action: "click" }),
                                    f({ transactionId: g, recordId: l })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && n ? (({ formattedAmount: e, receiverScreenName: t }) => `You canceled the ${e} transfer to @${t}.`)({ formattedAmount: e, receiverScreenName: n }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? v.push(i, { challengeId: a, successMessage: o, challengeInitiator: u.kW.transaction, recordId: l }) : (o && Z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: E });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${g}`, closePath: u.gp }) : Z({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [Z, e, P, f, v, t, l, E, n, g],
                        ),
                        S = k || !b;
                    return a.createElement(s.ZP, { disabled: S, onPress: C, size: p ?? "medium", type: "primaryOutlined" }, k ? a.createElement(o.Z, { size: "small" }) : "Cancel transaction");
                },
                _ = { context: "PaymentsCancelTransfer" };
            function R(e) {
                return a.createElement(l.H, { errorConfig: _ }, a.createElement(T, e));
            }
            const N = a.memo(R);
            var D = n(891414);
            const $ = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, userScreenName: g }) => {
                    const [f, k] = (0, D.C7)(),
                        { permissions: I, roles: E } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: I, permission: i.d.RespondToRequestTransfer }),
                        P = (0, y.z)(),
                        v = (0, c.useHistory)(),
                        Z = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    f({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && g ? (({ formattedAmount: e, userScreenName: t }) => `You declined the ${e} request from @${t}.`)({ formattedAmount: e, userScreenName: g }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? v.push(i, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && Z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: E });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${p}`, closePath: u.gp }) : Z({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, f, p, n, e, g, t, Z, E, v],
                        ),
                        S = k || !b;
                    return a.createElement(s.ZP, { disabled: S, onPress: C, size: l ?? "medium", type: "primaryOutlined" }, k ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                M = { context: "PaymentsDeclineRequest" };
            function F(e) {
                return a.createElement(l.H, { errorConfig: M }, a.createElement($, e));
            }
            const V = a.memo(F),
                H = ({ amount: e, onSuccess: t, recordId: n, senderScreenName: l, size: g, transactionId: f }) => {
                    const [k, I] = (0, p.C7)(),
                        E = (0, y.z)(),
                        b = (0, c.useHistory)(),
                        P = (0, m.p)(),
                        { permissions: v, roles: Z } = (0, d.Z)({ fetchKey: "Payments" }),
                        C = (0, r.Fs)({ permissions: v, permission: i.d.ClaimTransfer }),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    E.scribe({ page: "money", section: "claim-transaction", element: "decline", action: "click" }),
                                    k({ transactionId: f, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && l ? (({ formattedAmount: e, senderScreenName: t }) => `You declined ${e} from @${t}.`)({ formattedAmount: e, senderScreenName: l }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? b.push(i, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && P({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: Z });
                                            t ? b.replace(t, { redirectPath: `${u.bR}/${f}`, closePath: u.gp }) : P({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, e, E, k, b, t, n, Z, l, f],
                        ),
                        x = I || !C;
                    return a.createElement(s.ZP, { disabled: x, onPress: S, size: g ?? "medium", type: "primaryOutlined" }, I ? a.createElement(o.Z, { size: "small" }) : "Decline");
                },
                L = { context: "PaymentsDeclineTransfer" };
            function q(e) {
                return a.createElement(l.H, { errorConfig: L }, a.createElement(H, e));
            }
            const W = a.memo(q),
                K = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p, type: g, userScreenName: f }) => {
                    const [k, I] = (0, D.iP)(),
                        { permissions: E, roles: b } = (0, d.Z)({ fetchKey: "Payments" }),
                        P = (0, r.Fs)({ permissions: E, permission: i.d.RespondToRequestTransfer }),
                        v = (0, y.z)(),
                        Z = (0, c.useHistory)(),
                        C = (0, m.p)(),
                        S = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    v.scribe({ page: "money", section: "review-request", element: "pay", action: "click" }),
                                    k({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e && f ? (({ formattedAmount: e, userScreenName: t }) => `You sent ${e} to @${t}.`)({ formattedAmount: e, userScreenName: f }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? Z.push(i, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && C({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: b });
                                            t ? Z.replace(t, { redirectPath: `${u.bR}/${p}`, closePath: u.gp }) : C({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [v, k, p, n, e, f, t, C, b, Z],
                        ),
                        x = I || !P;
                    return a.createElement(s.ZP, { disabled: x, onPress: S, size: l ?? "medium", type: g }, I ? a.createElement(o.Z, { size: "small" }) : "Pay");
                },
                Y = { context: "PaymentsPayRequest" };
            function U(e) {
                return a.createElement(l.H, { errorConfig: Y }, a.createElement(K, e));
            }
            const B = a.memo(U),
                O = ({ amount: e, onSuccess: t, recordId: n, size: l, transactionId: p }) => {
                    const [g, f] = (0, E.F8)(),
                        { permissions: k, roles: I } = (0, d.Z)({ fetchKey: "Payments" }),
                        b = (0, r.Fs)({ permissions: k, permission: i.d.ConfirmUnrecognizedPayment }),
                        P = (0, y.z)(),
                        v = (0, c.useHistory)(),
                        Z = (0, m.p)(),
                        C = a.useCallback(
                            (a) => {
                                a && a.preventDefault(),
                                    P.scribe({ page: "money", section: "review-request", element: "decline", action: "click" }),
                                    g({ transactionId: p, recordId: n })
                                        .then(({ challengeId: a, status: c, transactionId: s }) => {
                                            const o = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null,
                                                i = (0, r.wu)({ status: c, challengeId: a });
                                            i ? v.push(i, { challengeId: a, challengeInitiator: u.kW.transaction, successMessage: o, recordId: n }) : (o && Z({ text: o }), t?.());
                                        })
                                        .catch((e) => {
                                            const t = (0, h.XE)({ errors: e, roles: I });
                                            t ? v.replace(t, { redirectPath: `${u.bR}/${p}`, closePath: u.gp }) : Z({ text: (0, h.kJ)({ errors: e }).message });
                                        });
                            },
                            [P, g, p, n, e, t, Z, I, v],
                        ),
                        S = f || !b;
                    return a.createElement(s.ZP, { disabled: S, onPress: C, size: l ?? "medium", type: "destructiveFilled" }, f ? a.createElement(o.Z, { size: "small" }) : "I did not make this purchase");
                },
                j = { context: "PaymentsRejectPayment" };
            function X(e) {
                return a.createElement(l.H, { errorConfig: j }, a.createElement(O, e));
            }
            const J = a.memo(X),
                G = ({ size: e, transactionId: t, type: n }) => {
                    const { permissions: c } = (0, d.Z)({ fetchKey: "Payments" }),
                        o = !(0, r.Fs)({ permissions: c, permission: i.d.ConfirmUnrecognizedPayment });
                    return a.createElement(s.ZP, { disabled: o, link: o ? void 0 : `${u.bR}/${t}`, size: e ?? "medium", type: n }, "Review");
                },
                Q = { context: "PaymentsReviewButton" };
            function ee(e) {
                return a.createElement(l.H, { errorConfig: Q }, a.createElement(G, e));
            }
            const te = a.memo(ee);
            function ne({ amount: e, challengeId: t, currency: n, isViewerSender: c, onSuccess: s, receiverScreenName: o, recordId: i, senderScreenName: l, status: m, transactionId: u, transactionType: d, withPrimaryOnly: y }) {
                const p = e ? (0, r.vw)({ amount: e, currency: n }) : null,
                    h = (0, r.BR)({ status: m, transactionType: d, isViewerSender: c }),
                    g = (0, r.Tp)({ status: m, transactionType: d, isViewerSender: c }),
                    f = (0, r.UM)({ status: m, transactionType: d, isViewerSender: c }),
                    k = (0, r.T3)({ status: m, transactionType: d, isViewerSender: c }),
                    E = (0, r.BC)({ status: m }),
                    b = a.useMemo(() => (g ? a.createElement(N, { amount: p, key: "CancelTransfer", onSuccess: s, receiverScreenName: o, recordId: i, transactionId: u }) : null), [g, p, s, o, i, u]),
                    P = a.useMemo(() => (k ? a.createElement(z, { amount: p, key: "CancelRequest", recordId: i, transactionId: u, userScreenName: l }) : null), [k, p, i, l, u]),
                    v = a.useMemo(() => (f ? a.createElement(B, { amount: p, key: "PayRequest", onSuccess: s, recordId: i, size: y ? "small" : "medium", transactionId: u, type: y ? "secondaryFilled" : "primaryFilled", userScreenName: o }) : null), [f, p, s, o, i, u, y]),
                    C = a.useMemo(() => (f ? a.createElement(V, { amount: p, key: "DeclineRequest", recordId: i, transactionId: u, userScreenName: o }) : null), [f, p, o, i, u]),
                    S = a.useMemo(() => (h ? a.createElement(I, { amount: p, key: "AcceptTransfer", onSuccess: s, recordId: i, senderScreenName: l, size: y ? "small" : "medium", transactionId: u, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [h, p, s, i, l, u, y]),
                    x = a.useMemo(() => (h ? a.createElement(W, { amount: p, key: "DeclineTransfer", recordId: i, senderScreenName: l, transactionId: u }) : null), [h, p, i, l, u]),
                    w = a.useMemo(() => (E ? a.createElement(Z, { amount: p, key: "ApprovePayment", onSuccess: s, recordId: i, size: y ? "small" : "medium", transactionId: u, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [E, p, s, i, u, y]),
                    A = a.useMemo(() => (E ? a.createElement(J, { amount: p, key: "RejectPayment", onSuccess: s, recordId: i, transactionId: u }) : null), [E, p, s, i, u]),
                    T = a.useMemo(() => (E ? a.createElement(te, { key: "ReviewPayment", size: y ? "small" : "medium", transactionId: u, type: y ? "secondaryFilled" : "primaryFilled" }) : null), [E, u, y]),
                    _ = a.useMemo(() => [...(y ? [v, S, T] : [b, P, v, C, S, x, A, w])], [S, w, P, b, C, x, v, A, T, y]);
                return a.createElement(a.Fragment, null, _);
            }
            const ae = a.memo(ne);
        },
        266362: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(515207),
                r = n(202784),
                c = n(325686),
                s = (n(585488), n(277660)),
                o = n.n(s),
                i = n(952428),
                l = n(823161),
                m = n(731708),
                u = n(966886),
                d = n(880428),
                y = n(357818),
                p = n(514639),
                h = n(412876),
                g = n(553660),
                f = n(467734),
                k = n(743080),
                I = n(727384),
                E = n(634455),
                b = n(477922),
                P = n(615954),
                v = n(86320),
                Z = n(448518),
                C = n(392237);
            function S({ color: e, shouldCenterAlign: t = !1, showAll: n = !1, status: a }) {
                const s = n || (0, I.Gl)({ status: a });
                return a && s ? r.createElement(c.Z, { style: t && w.alignCenter, testID: "TransactionStatus" }, r.createElement(m.ZP, { color: e }, (0, I.lD)({ status: a }))) : null;
            }
            const x = r.memo(S),
                w = C.default.create((e) => ({ alignCenter: { alignItems: "center", textAlign: "center", wordBreak: "break-word" } }));
            var z = n(972758);
            const A = a.Z,
                T = ({ itemRef: e }) => {
                    const t = o()(A, e),
                        { __id: n, amount_local_micro: a, challenge_id: s, created_at: C, currency: S, description: w, details: T, id: _, product_code: R, transaction_status: N, transaction_type: D } = t,
                        $ = R === d.x.Interest,
                        M = T.receiver_results?.result,
                        F = T.sender_results?.result,
                        V = T.payment_method,
                        H = T.merchant_details,
                        L = (0, f.Z)({ senderId: F?.rest_id }),
                        q = (0, I.GU)({ transactionType: D, isViewerSender: L }),
                        W = $ || "User" !== M?.__typename || "User" !== F?.__typename ? null : L ? M : F,
                        K = (0, I.zK)({ transactionType: D, productCode: R, merchantDetails: H, amountType: q }),
                        Y = D === y.x.Deposit || D === y.x.Withdraw ? (0, I.Ou)(V) : null,
                        U = (0, I.qK)({ transactionType: D, description: w, productCode: R, accountName: Y ? (Y.accountType ? `${Y.accountType} ${Y.accountName.name}` : `${Y.accountName.name}`) : "", createdAt: C }),
                        B = (0, I.Bl)({ status: N }),
                        O = (0, I._T)({ status: N }),
                        j = F?.legacy?.screen_name,
                        X = M?.legacy?.screen_name,
                        J = (0, I.DK)({ isViewerSender: L, status: N, transactionType: D }),
                        G = (0, I.pQ)({ productCode: R, transactionType: D });
                    return r.createElement(i.Z, { key: _, link: `${p.bR}/${_}`, style: k.dE.listItem }, W ? r.createElement(h.Z, { size: "xLarge", user: W }) : G ? r.createElement(b.KR, { size: "xLarge", type: G.iconType }) : K ? r.createElement(b.G7, { size: "xLarge", type: K.type, uri: K.logo }) : r.createElement(l.default, { size: "xLarge" }), r.createElement(c.Z, { style: k.dE.listItemFlex, testID: `transaction-item-${_}` }, r.createElement(c.Z, { style: k.dE.listItemContent }, r.createElement(c.Z, { style: k.dE.listItemFlex }, W ? r.createElement(g.Z, { user: W, weight: "medium" }) : G ? r.createElement(z.Z, { title: G.title }) : K ? r.createElement(P.Z, { name: K.name, website: K.website }) : Y ? r.createElement(v.Z, { account: Y }) : r.createElement(m.ZP, null, "This account is unavailable"), J && a ? r.createElement(m.ZP, { color: "gray700" }, (0, I.lw)({ status: N, description: w, amount: a, currency: S })) : B ? r.createElement(x, { color: "gray700", status: N }) : U ? r.createElement(m.ZP, { color: "gray700" }, U) : null), J ? r.createElement(Z.Z, { amount: a, challengeId: s, currency: S, isViewerSender: L, receiverScreenName: X, recordId: n, senderScreenName: j, status: N, transactionId: _, transactionType: D, withPrimaryOnly: !0 }) : r.createElement(c.Z, { style: k.dE.alignEnd }, r.createElement(E.Z, { amount: a, currency: S, hasCompleted: O, showGreenCredit: !0, size: "body", type: q, weight: "normal" }), r.createElement(u.Z, { style: k.dE.alignEnd, timestamp: parseInt(C, 10) })))));
                },
                _ = r.memo(T);
        },
        578719: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(860648),
                r = n(202784),
                c = (n(585488), n(277660)),
                s = n.n(c),
                o = n(731708),
                i = n(392237),
                l = n(965245),
                m = n(266362);
            const u = a.Z,
                d = ({ id: e }) => e,
                y = ({ emptyStateDescription: e, fetchNext: t, slice: n }) => {
                    const { items: a } = s()(u, n),
                        c = r.useCallback((e) => r.createElement(m.Z, { itemRef: e, key: e.id }), []);
                    return a && a.length ? r.createElement(l.Z, { assumedItemHeight: 64, cacheKey: "transactionsList", footer: null, identityFunction: d, items: a, onNearEnd: t, renderer: c, role: "list", withoutHeadroom: !0 }) : r.createElement(o.ZP, { align: "center", color: "gray700", size: "body", style: p.emptyState }, e);
                },
                p = i.default.create((e) => ({ emptyState: { marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space32 } })),
                h = r.memo(y);
        },
        972758: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(731708);
            const c = ({ size: e, title: t }) => a.createElement(r.ZP, { size: e, style: s.title, weight: "medium" }, t),
                s = n(392237).default.create((e) => ({ title: { display: "flex", overflow: "hidden", textOverflow: "clip" } })),
                o = a.memo(c);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-c7951328.4da5f07a.js.map
