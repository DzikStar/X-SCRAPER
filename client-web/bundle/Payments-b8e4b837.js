"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-b8e4b837"],
    {
        244170: (e, t, a) => {
            a.r(t), a.d(t, { AuthenticatePayment: () => J, default: () => ee });
            var n = a(202784),
                r = a(107267),
                c = a(736063),
                s = a(514639),
                o = a(725516),
                i = a(615027),
                l = a(325686),
                d = a(661810),
                m = a(980407),
                u = a(293115),
                p = a(634455),
                h = a(477922),
                y = a(615954),
                k = a(655750),
                g = a(847211),
                b = a(43429),
                E = a(743080),
                f = a(727384),
                C = a(154003),
                Z = a(167630),
                _ = a(436117),
                P = a(782642),
                v = a(445664),
                I = a(413713),
                w = a(626278),
                S = (a(585488), a(351743)),
                T = a.n(S),
                B = a(39431);
            const x = w.Z,
                R = ({ decision: e }) => {
                    const [t, a] = T()(x);
                    return [
                        n.useCallback(
                            ({ authenticationId: a }) =>
                                new Promise((n, r) => {
                                    t({
                                        variables: { authentication_id: a, decision: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.respond_to_three_ds_authentication?.errors;
                                            a ? r(a) : n();
                                        },
                                        onError: r,
                                    });
                                }),
                            [t, e],
                        ),
                        a,
                    ];
                },
                A = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, c] = R({ decision: B._.ThreeDsAuthenticationResponseAllow }),
                        { permissions: s } = (0, v.Z)({ fetchKey: "Payments" }),
                        i = (0, f.Fs)({ permissions: s, permission: _.d.RespondToThreedsAuthentication }),
                        l = (0, o.z)(),
                        d = (0, P.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    l.scribe({ page: "money", section: "3ds", element: "approve", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [l, r, t, e, a, d],
                        ),
                        u = c || !i;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "primaryFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "Approve");
                },
                D = { context: "PaymentsAcceptPaymentAuth" };
            function z(e) {
                return n.createElement(c.H, { errorConfig: D }, n.createElement(A, e));
            }
            const L = n.memo(z),
                M = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, c] = R({ decision: B._.ThreeDsAuthenticationResponseDeny }),
                        { permissions: s } = (0, v.Z)({ fetchKey: "Payments" }),
                        i = (0, f.Fs)({ permissions: s, permission: _.d.RespondToThreedsAuthentication }),
                        l = (0, o.z)(),
                        d = (0, P.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    l.scribe({ page: "money", section: "3ds", element: "decline", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [l, r, t, e, a, d],
                        ),
                        u = c || !i;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "destructiveFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "I did not make this purchase");
                },
                H = { context: "PaymentsRejectPaymentAuth" };
            function j(e) {
                return n.createElement(c.H, { errorConfig: H }, n.createElement(M, e));
            }
            const F = n.memo(j);
            var W = a(461461),
                N = a(712696),
                O = a.n(N);
            const U = W.Z,
                Y = () => O()(U, {}, { fetchPolicy: "network-only" }),
                $ = { page: "money", section: "authenticate-payment" },
                V = ({ authenticationId: e }) => {
                    const t = (0, E.jh)(),
                        a = Y(),
                        c = a?.get_active_three_ds_authentications?.three_ds_authentications,
                        o = c?.find((t) => t.id === e),
                        C = (0, r.useHistory)(),
                        Z = n.useCallback(() => {
                            C.goBack();
                        }, [C]);
                    if (!c && !o) return n.createElement(i.Z, { to: s.gp });
                    const { amount: _, merchant_details: P, payment_method: v } = o ?? {},
                        I = (0, f.Ou)(v),
                        w = _ ? (0, f.vw)({ amount: _.local_micro, currency: _.currency }) : null,
                        S = n.createElement(l.Z, { style: t.footer }, n.createElement(l.Z, { style: E.YP.actions }, n.createElement(F, { amount: w, authenticationId: e, key: "RejectPaymentAuth", onSuccess: Z }), n.createElement(L, { amount: w, authenticationId: e, key: "AcceptPaymentAuth", onSuccess: Z })));
                    return n.createElement(u.nO, { namespace: $ }, n.createElement(m.Z, { bottomBar: S, history: C, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(l.Z, { style: t.container }, n.createElement(l.Z, { style: E.YP.content }, P ? n.createElement(l.Z, { style: E.YP.gap }, n.createElement(h.G7, { size: "xJumbo", type: b.wC.card, uri: P.logo }), n.createElement(y.Z, { name: P.name, size: "title4" })) : null, n.createElement(l.Z, { style: [E.YP.gap, E.YP.marginTop] }, _ ? n.createElement(p.Z, { amount: _.local_micro, currency: _.currency, hasCompleted: !1, type: b.NU.debit }) : null), n.createElement(d.Z, { spacing: "space12" }), n.createElement(k.Z, { description: "Verification requested by merchant", title: "Status" }), I && I.issuedCardAccountName ? n.createElement(k.Z, { description: n.createElement(g.Z, { account: I, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, n.createElement(k.Z, { description: "Online", title: "Location" }), n.createElement(k.Z, { description: e, title: "Authentication ID" })))));
                },
                K = { context: "AUTHENTICATE_PANE" },
                q = (e) => n.createElement(c.H, { errorConfig: K }, n.createElement(V, e)),
                G = n.memo(q),
                J = (e) => {
                    const t = (0, o.z)(),
                        a = (0, r.useParams)().authenticationId;
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "authenticate-payment", action: "impression" });
                        }, [t]),
                        a ? n.createElement(G, { authenticationId: a }) : n.createElement(i.Z, { to: s.gp })
                    );
                },
                X = { context: "AuthenticatePayment" };
            function Q(e) {
                return n.createElement(c.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => M, fetchCardStatus: () => x });
            var n = a(807896),
                r = a(655729),
                c = a(202784),
                s = a(400752),
                o = a(325686),
                i = a(10622),
                l = a.n(i),
                d = (a(585488), a(437429)),
                m = a.n(d),
                u = a(107267),
                p = a(529356),
                h = a(731708),
                y = a(167630),
                k = a(392237),
                g = a(605446),
                b = a(622769),
                E = a(420182),
                f = a(736063),
                C = a(782642),
                Z = a(514639),
                _ = a(725516),
                P = a(615027),
                v = a(43429),
                I = a(743080),
                w = a(727384),
                S = a(224058);
            const T = { [g.T.BankCardLinkingSessionRejectionReasonCardAlreadyExists]: "This card already exists.", [g.T.BankCardLinkingSessionRejectionReasonInaccurateCardDetails]: "Please verify the card details entered and try again.", [g.T.BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard]: "We were unable to verify the card details entered.", [g.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress]: "We were unable to verify the address associated with the card.", [g.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName]: "We were unable to verify the name associated with the card.", [g.T.BankCardLinkingSessionRejectionReasonUnsupportedCardType]: "We do not support this card at this time.", [g.T.BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry]: "We do not support this card at this time.", [g.T.BankCardLinkingSessionRejectionReasonUnusableCard]: "We were unable to verify the card details entered." },
                B = r.Z,
                x = ({ cardLinkId: e, environment: t }) =>
                    l()(t, B, { id: e }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.get_bank_card_linking_session?.status,
                                a = e?.get_bank_card_linking_session?.rejection_reason;
                            return { status: t, rejectionReason: a };
                        })
                        .catch(() => null),
                R = ({ cardLinkId: e, onComplete: t, redirectPath: a }) => {
                    const n = (0, u.useHistory)(),
                        r = m()(),
                        s = (0, _.z)(),
                        i = (0, C.p)();
                    c.useEffect(() => {
                        s.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [s]);
                    const l = c.useCallback(
                        (e, r) => {
                            clearInterval(e), i({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? Z.gp);
                        },
                        [t, n, a, i],
                    );
                    return (
                        c.useEffect(() => {
                            let c = 0;
                            const o = () => {
                                c >= v.wG
                                    ? (s.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), l(i))
                                    : ((c += 1),
                                      x({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: c, status: s } = e ?? {};
                                              switch (s) {
                                                  case b.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(i), (0, w.ve)(r), t(), n.replace(a ?? Z.gp);
                                                      break;
                                                  case b.G.BankCardLinkingSessionStatusRejected:
                                                      l(i, c ? T[c] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              l(i);
                                          }));
                            };
                            o();
                            const i = setInterval(o, v.Ln);
                            return () => clearInterval(i);
                        }, [s, r, l, n, e, a, t]),
                        c.createElement(p.Z, { graphicDisplayMode: "illustration", graphicStyle: I.ir, headline: "Verifying your card", onAction: () => {}, subtext: c.createElement(o.Z, { style: D.container }, c.createElement(h.ZP, null, "This may take a few seconds."), c.createElement(y.Z, { style: D.activityIndicator })) })
                    );
                },
                A = () => {
                    const e = (0, s.Dv)(E.lZ),
                        [t, a] = c.useState();
                    c.useEffect(() => {
                        e.get(S.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = c.useCallback(() => {
                        e.delete(S.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? c.createElement(R, (0, n.Z)({}, t, { onComplete: r })) : c.createElement(P.Z, { to: Z.gp })) : c.createElement(y.Z, { style: D.activityIndicator });
                },
                D = k.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                z = { context: "BankCardPoller" },
                L = (e) => c.createElement(f.H, { errorConfig: z }, c.createElement(A, null)),
                M = c.memo(L);
        },
        224058: (e, t, a) => {
            a.d(t, { a: () => n });
            const n = "rweb.money.bankCardPolling";
        },
        578453: (e, t, a) => {
            a.r(t), a.d(t, { default: () => A });
            a(136728);
            var n = a(202784),
                r = a(400752),
                c = a(325686),
                s = a(107267),
                o = a(731708),
                i = a(167630),
                l = a(362075),
                d = a(392237),
                m = a(420182),
                u = a(980407),
                p = a(736063),
                h = a(952793),
                y = a(514639),
                k = a(293115),
                g = a(615027),
                b = a(743080),
                E = a(224058),
                f = a(986092),
                C = (a(585488), a(351743)),
                Z = a.n(C),
                _ = a(234107),
                P = a(727384);
            const v = f.Z,
                I = { light: _.M.BankCardLinkingSessionThemeLight, dim: _.M.BankCardLinkingSessionThemeDimmed, dark: _.M.BankCardLinkingSessionThemeDark },
                w = () => {
                    const [e] = Z()(v),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: I[(0, P.gh)()] ?? _.M.BankCardLinkingSessionThemeLight },
                                onCompleted: (e, t) => {
                                    const n = e?.create_bank_card_linking_session_v2;
                                    a(n);
                                },
                            });
                        }, [e]),
                        t
                    );
                },
                S = "Add a debit card",
                T = { page: "money", section: "bank-card" },
                B = (e) => {
                    const t = (0, r.Dv)(m.lZ),
                        a = w(),
                        d = (0, s.useHistory)(),
                        [p, f] = n.useState(!1),
                        C = (0, b.jh)(),
                        Z = d.location?.state,
                        _ = Z?.redirectPath,
                        P = (0, h.JY)("payments_crb_iframe_delay_msecs", 0),
                        v = n.useMemo(() => (a?.challenge_id ? { pathname: y.vw, state: { challengeId: a?.challenge_id, challengeInitiator: y.kW.addBankCard, redirectPath: y.UA, redirectState: { redirectPath: _ } } } : null), [_, a?.challenge_id]),
                        I = n.useMemo(() => ({ pathname: y.ac, state: Z ?? {} }), [Z]),
                        B = n.createElement(c.Z, { style: C.footer }, n.createElement(o.ZP, { align: "center", color: "text", link: I }, "Use a bank account")),
                        x = n.useCallback(() => {
                            P
                                ? setTimeout(() => {
                                      f(!0);
                                  }, P)
                                : f(!0),
                                a?.id && t.set(E.a, { redirectPath: _, cardLinkId: a.id });
                        }, [P, _, a, t]),
                        R = n.useCallback(() => {
                            _ === y.iE.bankAccounts ? d.push(y.iE.bankAccounts) : d.push(y.gp);
                        }, [d, _]);
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: B, history: d, onBackClick: R, withoutBottomBarMobile: !0 }, n.createElement(k.nO, { namespace: T }, n.createElement(c.Z, { style: C.container }, n.createElement(o.ZP, { align: "center", size: "title2", style: b.ZP.title, weight: "heavy" }, S), !p && n.createElement(i.Z, { style: b.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(l.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: x, src: a.iframe_url, style: p ? D.iframe : D.hide, title: S }) : v ? n.createElement(g.Z, { to: v }) : null)));
                },
                x = { context: "BANK_CARD" },
                R = (e) => n.createElement(p.H, { errorConfig: x }, n.createElement(B, e)),
                A = n.memo(R),
                D = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", flex: 1 }, hide: { display: "none" } }));
        },
        738979: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            var n = a(202784),
                r = a(325686),
                c = a(107267),
                s = a(731708),
                o = a(980407),
                i = a(736063),
                l = a(514639),
                d = a(725516),
                m = a(19804),
                u = a(137882),
                p = a(743080);
            const h = (e) => {
                    const t = (0, d.z)(),
                        a = (0, c.useHistory)(),
                        i = (0, p.jh)(),
                        h = (0, u.b)({}),
                        y = n.useCallback(
                            (e) => () => {
                                t.scribe({ page: "money", component: "card-help", element: e, action: "click" });
                            },
                            [t],
                        ),
                        k = n.useMemo(
                            () => [
                                { key: "CARD_LOST_STOLEN_OR_DAMAGED", label: "Card lost, stolen, or damaged", link: l.zI },
                                { key: "DISPUTE_TRANSACTION", label: "Dispute a transaction", link: { pathname: h, openInSameFrame: !1 } },
                                { key: "OTHER", label: "Something else", link: { pathname: h, openInSameFrame: !1 } },
                            ],
                            [h],
                        ),
                        g = n.useCallback(() => {
                            a.goBack();
                        }, [a]);
                    return n.createElement(
                        o.Z,
                        { backButtonType: "close", history: a, onBackClick: g, withoutBottomBarMobile: !0 },
                        n.createElement(r.Z, { style: i.container }, n.createElement(s.ZP, { size: "title2", style: p.ZP.title, weight: "heavy" }, "How can we help?"), n.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Powered by Grok 3")),
                        n.createElement(
                            r.Z,
                            { style: i.footer },
                            k.map(({ key: e, label: t, link: a }) => n.createElement(m.Z, { key: e, link: a, onClick: y(e), title: t })),
                        ),
                    );
                },
                y = { context: "CardOnboard" };
            function k(e) {
                return n.createElement(i.H, { errorConfig: y }, n.createElement(h, e));
            }
            const g = n.memo(k);
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => y });
            var n = a(202784),
                r = a(437429),
                c = a.n(r),
                s = a(107267),
                o = a(736063),
                i = a(514639),
                l = a(725516),
                d = a(160144),
                m = a(727384);
            const u = (e) => {
                    const t = (0, l.z)(),
                        a = (0, s.useHistory)(),
                        r = c()(),
                        o = a.location?.state?.skipTerms;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-onboard", action: "impression" });
                    }, [t]);
                    const u = n.useCallback(
                        (e) => {
                            const { errors: t, message: n } = e.data;
                            switch (n) {
                                case d.T.success:
                                    (0, m.uN)(r), a.replace(i.Tb);
                                    break;
                                case d.T.failure:
                                    a.replace(i.D$, { errors: t });
                                    break;
                                case d.T.kyc:
                                    a.replace(i.AU.tier2.verifyIdentityPath, { redirectPath: i.lf, requestedField: i.q3.address, closePath: i.gp });
                                    break;
                                case d.T.stepUpDocv:
                                    a.replace(i.AU.tier3.verifyIdentityPath, { redirectPath: i.lf, closePath: i.gp });
                            }
                        },
                        [r, a],
                    );
                    return n.createElement(d.Z, { additionalParams: o ? [{ key: "skipTerms", value: o }] : void 0, eventCallback: u, linkType: i.P_.cardOnboarding });
                },
                p = { context: "CardOnboard" };
            function h(e) {
                return n.createElement(o.H, { errorConfig: p }, n.createElement(u, e));
            }
            const y = n.memo(h);
        },
        292949: (e, t, a) => {
            a.r(t), a.d(t, { default: () => F });
            var n = a(807896),
                r = a(202784),
                c = a(107267),
                s = a(736063),
                o = a(725516),
                i = (a(136728), a(325686)),
                l = a(731708),
                d = a(980407),
                m = a(514639),
                u = a(19804),
                p = a(226595),
                h = a(743080),
                y = a(727384);
            const k = () => {
                    const e = (0, c.useHistory)(),
                        t = (0, h.jh)(),
                        a = (0, o.z)(),
                        { activeCards: n, inactivePhysicalCards: s } = (0, p.Z)(),
                        k = r.useCallback(() => {
                            e.goBack();
                        }, [e]),
                        g = r.useCallback(
                            ({ cardId: t, cardType: n }) =>
                                () => {
                                    a.scribe({ page: "money", component: "card-replace", element: `${n}-${t}`, action: "click" }), e.push(m.zI, { cardId: t, cardType: n });
                                },
                            [a, e],
                        ),
                        b = r.useCallback(
                            (e) => {
                                const t = (0, y.Ou)(e),
                                    a = e.rest_id,
                                    n = e.core?.details?.issued_card_type,
                                    c = t?.issuedCardAccountName;
                                return a && n && c ? r.createElement(u.Z, { key: a, onClick: g({ cardType: n, cardId: a }), title: c }) : null;
                            },
                            [g],
                        );
                    return r.createElement(d.Z, { backButtonType: "back", history: e, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(i.Z, { style: t.container }, r.createElement(l.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Which card do you have a problem with?")), r.createElement(i.Z, { style: t.footer }, n?.map(b), s?.map(b)));
                },
                g = { context: "CardOnboard" };
            function b() {
                return r.createElement(s.H, { errorConfig: g }, r.createElement(k, null));
            }
            const E = r.memo(b);
            var f = a(776826),
                C = a(642004);
            const Z = Object.freeze({
                    [C.W.IssuedCardTypePhysical]: {
                        successTitle: "Your replacement card is on the way.",
                        successDescription: "We paused your current card in the meantime for security purposes. Existing online transactions will continue to work.",
                        reasons: [
                            { key: f.k.IssuedCardReplacementReasonDamaged, label: "My card was damaged" },
                            { key: f.k.IssuedCardReplacementReasonLost, label: "My card was lost" },
                            { key: f.k.IssuedCardReplacementReasonStolen, label: "My card was stolen" },
                        ],
                        replaceTitle: "Tell us a bit more. What happened?",
                        replaceDescription: "Depending on what happened, we’ll send you a replacement card, or create a brand new one.",
                        requireAddressConfirmation: !0,
                    },
                    [C.W.IssuedCardTypeVirtual]: { successTitle: "We’ve replaced your Virtual Card", successDescription: "It’s now ready to use. Your existing subscriptions and recurring payments will continue to work.", defaultReason: f.k.IssuedCardReplacementReasonStolen, replaceTitle: "Replace your card", replaceDescription: "We’ll deactivate your current card, and create a new virtual card for you to use for online purchases.", requireAddressConfirmation: !1 },
                }),
                _ = Object.freeze({ successPane: "successPane" });
            var P = a(167630),
                v = a(782642),
                I = a(413713),
                w = a(805322),
                S = a(160144),
                T = a(414350),
                B = (a(585488), a(351743)),
                x = a.n(B);
            const R = T.Z,
                A = () => {
                    const [e, t] = x()(R);
                    return [
                        r.useCallback(
                            ({ cardId: t, reason: a }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { payment_method_id: t, reason: a },
                                        onCompleted: (e, t) => {
                                            const a = e?.replace_issued_card?.errors,
                                                c = e?.replace_issued_card?.challenge_id;
                                            c ? n({ challengeId: c }) : a ? r(a) : n({});
                                        },
                                        onError: r,
                                        updater: y.Ts,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                D = ({ cardId: e, cardType: t, reason: a, ...s }) => {
                    const p = (0, v.p)(),
                        y = (0, h.jh)(),
                        k = (0, c.useHistory)(),
                        g = (0, o.z)(),
                        { defaultReason: b, reasons: E, replaceDescription: f, replaceTitle: C, requireAddressConfirmation: T } = Z[t],
                        [B, x] = r.useState(a),
                        [R, D] = r.useState(),
                        [z, L] = A(),
                        M = r.useMemo(() => ({ pathname: m.f0, state: { field: m.q3.address, closePath: m.Tb, redirectPath: m.zI, redirectState: { cardType: t, cardId: e, reason: B } } }), [e, t, B]),
                        H = r.useCallback(
                            (a) => {
                                g.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    z({ cardId: e, reason: a })
                                        .then(({ challengeId: a }) => {
                                            a ? D(a) : k.push(m.zI, { cardId: e, cardType: t, step: _.successPane });
                                        })
                                        .catch((e) => {
                                            p({ text: (0, I.kJ)({ errors: e }).message });
                                        });
                            },
                            [p, g, e, t, z, k],
                        ),
                        j = r.useCallback(() => {
                            D(null);
                            const e = B ?? b;
                            e && H(e);
                        }, [b, H, B]),
                        F = r.useCallback(
                            (e) => () => {
                                x(e);
                            },
                            [],
                        ),
                        W = r.useCallback(() => {
                            b && (x(b), H(b));
                        }, [b, H]),
                        N = r.useCallback(() => {
                            B && H(B);
                        }, [H, B]),
                        O = r.useCallback(() => {
                            k.goBack();
                        }, [k]);
                    return R ? r.createElement(w.Z, (0, n.Z)({}, s, { challengeId: R, challengeInitiator: m.kW.replaceCard, onSuccess: j })) : r.createElement(d.Z, { backButtonType: "back", history: k, onBackClick: O, withoutBottomBarMobile: !0 }, L ? r.createElement(P.Z, { size: "small", style: h.ZP.spinner, testID: "loading-spinner" }) : T && B ? r.createElement(r.Fragment, null, r.createElement(i.Z, { style: y.container }, r.createElement(l.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Confirm this is still your correct address?"), r.createElement(S.Z, { linkType: m.P_.address })), r.createElement(i.Z, { style: y.footer }, r.createElement(u.Z, { link: M, title: "Update my address" }), r.createElement(u.Z, { onClick: N, title: "Ship a replacement card" }))) : r.createElement(r.Fragment, null, r.createElement(i.Z, { style: y.container }, r.createElement(l.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, C), r.createElement(l.ZP, { color: "gray700", size: "subtext1" }, f)), r.createElement(i.Z, { style: y.footer }, E ? E.map(({ key: e, label: t }) => r.createElement(u.Z, { key: e, onClick: F(e), title: t })) : b ? r.createElement(u.Z, { onClick: W, title: "Replace card" }) : null)));
                },
                z = r.memo(D),
                L = ({ cardType: e }) => {
                    const t = (0, o.z)(),
                        a = (0, c.useHistory)(),
                        n = (0, h.jh)(),
                        { successDescription: s, successTitle: p } = Z[e],
                        y = r.useCallback(() => {
                            t.scribe({ page: "money", section: e, component: "replace-success", element: "done", action: "click" });
                        }, [t, e]),
                        k = r.useCallback(() => {
                            a.push(m.Tb);
                        }, [a]),
                        g = r.createElement(i.Z, { style: n.footer }, r.createElement(u.Z, { link: m.Tb, onClick: y, title: "Done" }));
                    return r.createElement(d.Z, { backButtonType: "close", bottomBar: g, history: a, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(i.Z, { style: n.container }, r.createElement(l.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, p), r.createElement(l.ZP, null, s)));
                },
                M = r.memo(L),
                H = { context: "CardReplace" },
                j = (e) => {
                    const t = (0, o.z)(),
                        a = (0, c.useHistory)(),
                        i = a.location?.state,
                        l = i?.step,
                        d = i?.cardId,
                        m = i?.cardType,
                        u = i?.reason;
                    return (
                        r.useEffect(() => {
                            t && t.scribe({ page: "money", component: l, section: "replace-card", action: "impression" });
                        }, [t, l]),
                        r.createElement(s.H, { errorConfig: H }, m && l === _.successPane ? r.createElement(M, { cardType: m }) : m && d ? r.createElement(z, (0, n.Z)({}, e, { cardId: d, cardType: m, reason: u })) : r.createElement(E, null))
                    );
                },
                F = r.memo(j);
        },
        188885: (e, t, a) => {
            a.r(t), a.d(t, { default: () => $e });
            var n = a(202784),
                r = a(325686),
                c = a(992942),
                s = a(154003),
                o = a(167630),
                i = a(953035),
                l = a(392237),
                d = a(108362),
                m = a(161335),
                u = a(177826),
                p = a(468670),
                h = a(777217),
                y = a(861420),
                k = a(692165),
                g = a(436117),
                b = a(252021),
                E = a(736063),
                f = a(514639),
                C = a(445664),
                Z = a(293115),
                _ = a(615027),
                P = a(575123),
                v = a(19804),
                I = a(452275),
                w = a(226595),
                S = a(24568),
                T = a(743080),
                B = a(727384),
                x = (a(136728), a(107267)),
                R = a(165822),
                A = a(731708),
                D = a(868634),
                z = a(190286),
                L = a(734767),
                M = a(782642),
                H = a(725516),
                j = a(634455),
                F = a(413713),
                W = a(934265),
                N = a(898673),
                O = (a(585488), a(351743)),
                U = a.n(O),
                Y = a(726426),
                $ = a.n(Y);
            const V = N.Z,
                K = () => {
                    const e = n.useMemo(() => $()(), []),
                        [t, a] = U()(V);
                    return [
                        n.useCallback(
                            ({ amount: a }) =>
                                new Promise((n, r) => {
                                    t({
                                        variables: { amount_local_micro: a, idempotency_key: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.redeem_cashback?.transaction?.id,
                                                c = e?.redeem_cashback?.transaction?.transaction_status,
                                                s = e?.redeem_cashback?.transaction?.challenge_id,
                                                o = e?.redeem_cashback?.errors;
                                            a && c ? n({ transactionId: a, status: c, challengeId: s }) : r(o || t);
                                        },
                                        onError: r,
                                        updater: (e, t) => {
                                            const a = t?.redeem_cashback?.transaction?.transaction_status,
                                                n = t?.redeem_cashback?.transaction?.reason_code;
                                            (0, B.H_)(e, { status: a, reasonCode: n });
                                        },
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                q = "Cash Back",
                G = (e) => `${e} will be transferred to your balance. Keep spending to earn more cash back.`,
                J = ({ cashbackRate: e }) => {
                    const t = (0, H.z)(),
                        a = (0, T.jh)(),
                        c = (0, M.p)(),
                        o = (0, x.useHistory)(),
                        [i, l] = n.useState(!1),
                        { permissions: d, roles: m } = (0, C.Z)({ fetchKey: "Payments" }),
                        u = !(0, B.Fs)({ permissions: d, permission: g.d.RedeemCashback }),
                        [p, h] = K(),
                        { cashback: y } = (0, W.Z)(),
                        k = y?.available_amount_local_micro;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-cashback", action: "impression" });
                    }, [t]);
                    const b = k ? (0, B.vw)({ amount: k, currency: y?.currency }) : "",
                        E = n.useCallback(() => {
                            k &&
                                (t.scribe({ page: "money", section: "card-cashback", element: "redeem", action: "click" }),
                                p({ amount: k })
                                    .then(({ challengeId: e, status: t, transactionId: a }) => {
                                        const n = b ? (({ formattedAmount: e }) => `You redeemed ${e} cash back successfully.`)({ formattedAmount: b }) : null,
                                            r = (0, B.wu)({ status: t, challengeId: e });
                                        r ? o.push(r, { challengeId: e, successMessage: n, challengeInitiator: f.kW.transaction, recordId: a }) : (l(!1), n && c({ text: n }));
                                    })
                                    .catch((e) => {
                                        const t = (0, F.XE)({ errors: e, roles: m });
                                        t ? o.replace(t, { redirectPath: f.Tb, closePath: f.Tb }) : c({ text: (0, F.kJ)({ errors: e }).message });
                                    }));
                        }, [k, t, p, b, o, c, m]),
                        Z = !k || (0, B.gx)(k) <= 0,
                        _ = n.useCallback(() => {
                            l(!0);
                        }, []),
                        P = n.useCallback(() => {
                            l(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, n.createElement(R.Z, { "aria-label": q, containerStyle: a.tile, stackLayoutUpperStyle: T.ZP.upper, upper: n.createElement(r.Z, { style: T.ZP.column }, n.createElement(r.Z, { style: T.ZP.rowSpaceBetween }, n.createElement(A.ZP, { color: "gray700" }, q), e && n.createElement(D.ZP, { background: "white" }, (0, B.fq)({ rate: e }))), k ? n.createElement(j.Z, { amount: k }) : null, Z ? null : n.createElement(s.ZP, { disabled: u, onClick: _, type: "primaryOutlined" }, "Redeem for cash")), withInteractiveStyling: !1 }), i ? n.createElement(z.Z, { Icon: L.default, cancelButtonLabel: "Not now", confirmButtonDisabled: h, confirmButtonLabel: "Confirm", confirmButtonType: "primary", headline: "Redeem for cash?", iconStyle: T.ZP.alignStart, onCancel: P, onConfirm: E, text: G(b), withCancelButton: !0 }) : null);
                },
                X = { context: "ShippingStatus" };
            function Q(e) {
                return n.createElement(E.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q),
                te = { front: "https://pbs.twimg.com/static/money/mock-card-landscape-front.jpg", back: "https://pbs.twimg.com/static/money/mock-card-landscape-back.jpg" };
            var ae = a(674132),
                ne = a.n(ae),
                re = a(684779),
                ce = a(717160),
                se = a(711223),
                oe = a(633806);
            const ie = a(914507).Z,
                le = () => {
                    const [e, t] = U()(ie);
                    return [
                        n.useCallback(
                            ({ cardId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.activate_issued_card?.errors,
                                                c = e?.activate_issued_card?.challenge_id;
                                            c ? a({ challengeId: c }) : n(r || t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            var de = a(526274),
                me = a(353391),
                ue = a.n(me),
                pe = a(482924);
            const he = de.Z,
                ye = ({ paymentMethodId: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, pe.A)(he, { payment_method_id: e }),
                        r = t?.get_payment_method?.__id ?? "get_payment_method";
                    return (
                        ue()([r], () => {
                            a();
                        }),
                        { data: t, refetchStatus: n }
                    );
                },
                ke = ne().jade381b,
                ge = ({ card: e, disabled: t }) => {
                    const a = (0, H.z)(),
                        r = (0, M.p)(),
                        c = (0, x.useHistory)(),
                        s = e.rest_id,
                        [o, i] = le(),
                        { data: l } = ye({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const d = n.useCallback(() => {
                            a.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                o({ cardId: s })
                                    .then(({ challengeId: e }) => {
                                        e && c.push(f.vw, { challengeId: e, challengeInitiator: f.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        r({ text: (0, F.kJ)({ errors: e }).message });
                                    });
                        }, [a, o, s, c, r]),
                        {
                            Icon: m,
                            action: u,
                            disabled: p,
                            subtitle: h,
                            title: y,
                        } = n.useMemo(() => {
                            const e = l?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis,
                                n = a ? new Date(parseInt(a, 10)) : void 0,
                                r = !!n && n < new Date();
                            switch (t) {
                                case oe.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: n ? ((c = ke(n)), `Card arrived on ${c}`) : null, Icon: re.default, action: d, disabled: i };
                                case oe.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: "Activate your card once its arrived", Icon: ce.default, action: r ? d : void 0, disabled: i };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: se.default };
                            }
                            var c;
                        }, [l?.get_payment_method?.shipping, i, d]);
                    return n.createElement(v.Z, { Icon: m, disabled: t || p, onClick: u, subtitle: h, title: y });
                },
                be = { context: "ShippingStatus" };
            function Ee(e) {
                return n.createElement(E.H, { errorConfig: be }, n.createElement(ge, e));
            }
            const fe = n.memo(Ee);
            var Ce = a(866432),
                Ze = a(497366),
                _e = a(776588),
                Pe = a(883229),
                ve = a(943914),
                Ie = a(412450),
                we = a(529438);
            const Se = a(456221).Z,
                Te = () => {
                    const [e, t] = U()(Se),
                        a = (0, x.useHistory)();
                    return [
                        n.useCallback(
                            ({ cardId: t, nonce: n }) =>
                                new Promise((r, c) => {
                                    e({
                                        variables: { cardId: t, nonce: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.create_payment_method_session?.errors,
                                                s = e?.create_payment_method_session?.session?.provider_token,
                                                o = e?.create_payment_method_session?.challenge_id;
                                            o ? a.push(f.vw, { challengeId: o, challengeInitiator: f.kW.viewCardDetails, closePath: f.gp }) : s ? r(s) : c(n || t);
                                        },
                                        onError: c,
                                    });
                                }),
                            [e, a],
                        ),
                        t,
                    ];
                },
                Be = ({ cardId: e }) => {
                    const t = (0, Ce.useStripe)(),
                        [a, r] = n.useState();
                    return (
                        n.useEffect(() => {
                            t &&
                                t.createEphemeralKeyNonce({ issuingCard: e }).then(({ nonce: e }) => {
                                    r(e);
                                });
                        }, [e, t]),
                        a
                    );
                },
                xe = { type: "CustomRetry", content: () => null },
                Re = [
                    { domId: "card-number", key: "issuingCardNumberDisplay", label: "Card Number", skeletonWidth: 200, wordPercentWidths: [15, 15, 15, 15] },
                    { key: "name", label: "Cardholder Name" },
                    { domId: "card-expiry", key: "issuingCardExpiryDisplay", label: "EXP", skeletonWidth: 40 },
                    { domId: "card-cvc", label: "CVV", key: "issuingCardCvcDisplay", skeletonWidth: 28 },
                ],
                Ae = ({ cardId: e, isLoading: t, refetch: a, setIsLoading: c }) => {
                    const [s, o] = n.useState(!1),
                        i = (0, Ce.useStripe)(),
                        d = n.useMemo(() => i?.elements?.({ fonts: [{ family: "ProtoMono", src: `url(${f.gF})` }] }), [i]),
                        [m] = Te(),
                        u = Be({ cardId: e });
                    n.useEffect(() => {
                        (async () => {
                            if (!u || !d || s) return;
                            const t = await m({ cardId: e, nonce: u });
                            Re.forEach(({ domId: a, key: n }) => {
                                if (a) {
                                    d.create(n, { issuingCard: e, nonce: u, ephemeralKeySecret: t, style: { base: { color: "#000000", fontFamily: "ProtoMono", fontSize: `${l.default.theme.fontSizesPx.headline2}px` } } }).mount(`#${a}`);
                                }
                            }),
                                o(!0),
                                setTimeout(() => {
                                    c(!1);
                                }, 800);
                        })();
                    }, [d, e, m, a, u, c, s]);
                    const p = (0, we.Z)();
                    return n.createElement(
                        r.Z,
                        { style: ze.cardDetails },
                        Re.map((e) => n.createElement(r.Z, { key: e.key, style: ze.element }, n.createElement(A.ZP, { color: "gray500", size: "subtext2", style: ze.fontFamily }, e.label), e.domId ? n.createElement(n.Fragment, null, t ? n.createElement(_e.Z, { color: "gray700", lineHeightPx: 20, maxWidthPx: e.skeletonWidth, withBorderRadius: !0, wordHeightPx: 1, wordPercentWidths: e.wordPercentWidths ?? [100], wordSpacingPx: 12 }) : null, n.createElement(r.Z, { id: e.domId, style: t ? ze.hide : null })) : n.createElement(A.ZP, { color: "alwaysBlack", size: "headline2", style: ze.fontFamily }, p))),
                    );
                },
                De = (e) => {
                    const { stripePKey: t } = (0, Ie.Z)(),
                        a = n.useMemo(() => (0, Ze.loadStripe)(t), [t]);
                    return n.createElement(Ce.Elements, { stripe: a }, n.createElement(Ae, e));
                },
                ze = l.default.create((e) => ({ cardDetails: { position: "absolute", top: e.spaces.space32, start: e.spaces.space16, end: e.spaces.space16 }, element: { display: "flex", flexDirection: "column", gap: e.spaces.space4, marginBottom: e.spaces.space8 }, hide: { display: "none" }, fontFamily: { fontFamily: "ProtoMono" } })),
                Le = { context: "STRIPE_ELEMENTS" },
                Me = (e) => n.createElement(Pe.N, { errorConfig: Le, fallback: xe }, n.createElement(ve.B, { fallback: null }, n.createElement(De, e))),
                He = n.memo(Me),
                je = { page: "money", section: "cards" },
                Fe = "Money",
                We = "Card",
                Ne = (e) => {
                    const t = (0, T.jh)(),
                        { fetchCount: a, permissions: l } = (0, C.Z)({ fetchKey: "Payments" }),
                        [d, b] = n.useState(!1),
                        [E, Z] = n.useState(!1),
                        { activeVirtualCards: P, cards: I, cashbackRate: x, inactivePhysicalCards: R } = (0, w.Z)(),
                        { handleDeferredPreferencesChange: A, isInProgress: D, preferences: z } = (0, S.Z)(),
                        L = n.useCallback(() => {
                            A("enable_card_payments", !1);
                        }, [A]),
                        M = n.useCallback(() => {
                            A("enable_card_payments", !0);
                        }, [A]),
                        H = !(0, B.aY)(l),
                        j = !(0, B.Fs)({ permissions: l, permission: g.d.RequestIssuedCard }),
                        F = !z.enable_card_payments,
                        W = P?.[0]?.core?.details_provider_reference?.id,
                        N = n.useCallback(() => {
                            Z(!0), b(!0);
                        }, []),
                        O = n.useCallback(() => {
                            Z(!1), b(!1);
                        }, []);
                    return n.createElement(
                        n.Fragment,
                        null,
                        I && I?.length > 0
                            ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: Oe.imageContainer }, n.createElement(r.Z, { style: [Oe.card, E ? Oe.flipped : null] }, n.createElement(r.Z, { style: E ? Oe.cardBack : null }, n.createElement(c.Z, { ariaLabel: We, source: te.front, style: [Oe.image, E ? Oe.hide : null] }), n.createElement(c.Z, { ariaLabel: We, source: te.back, style: [Oe.image, E ? null : Oe.hide] }), E && W ? n.createElement(He, { cardId: W, isLoading: d, refetch: a, setIsLoading: b }) : null, W ? n.createElement(s.ZP, { disabled: d, fontWeight: "normal", icon: d ? void 0 : E ? n.createElement(m.default, null) : n.createElement(u.default, null), onClick: E ? O : N, size: "xSmall", style: Oe.showDetailsButton, type: "onMediaWhiteFilled" }, d ? n.createElement(o.Z, { size: "small", style: Oe.loader }) : E ? "Hide card details" : "Show card details") : null))), R && R?.length > 0 ? n.createElement(fe, { card: R[0], disabled: j }) : null, n.createElement(ee, { cashbackRate: x }), F ? n.createElement(v.Z, { Icon: p.default, subtitle: "Future transactions would be declined.", title: "Your card is locked" }) : null, n.createElement(r.Z, { style: t.pivotTileContainer }, F ? n.createElement(i.Z, { containerStyle: t.pivotTile, disabled: H, icon: h.default, iconColor: "text", isCompact: !0, isLoading: D, onClick: M, text: "Unlock card", withInteractiveStyling: !0 }) : n.createElement(i.Z, { containerStyle: t.pivotTile, disabled: H, icon: p.default, iconColor: "text", isCompact: !0, isLoading: D, onClick: L, text: "Lock card", withInteractiveStyling: !0 }), n.createElement(i.Z, { containerStyle: t.pivotTile, disabled: j, icon: y.default, iconColor: "text", isCompact: !0, link: j ? void 0 : f.SR, text: "Change pin", withInteractiveStyling: !0 }), n.createElement(i.Z, { containerStyle: t.pivotTile, disabled: j, icon: k.default, iconColor: "text", isCompact: !0, link: j ? void 0 : f.dI, text: "Get card help", withInteractiveStyling: !0 })))
                            : n.createElement(_.Z, { to: f.lf }),
                    );
                },
                Oe = l.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, end: e.spaces.space8, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto", perspective: "1000px", perspectiveOrigin: "center" }, card: { position: "relative", transformStyle: "preserve-3d", transition: "transform 0.4s ease-out" }, cardBack: { transform: "rotateX(180deg)", transformStyle: "preserve-3d" }, flipped: { transform: "rotateX(180deg)" }, loader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space2 }, hide: { display: "none" } })),
                Ue = { context: "ACCOUNT_CARDS" },
                Ye = (e) => {
                    const { history: t } = e,
                        a = (0, T.jh)(),
                        r = n.useCallback(() => n.createElement(d.Z, { style: a.root, withWideContainer: !0 }, n.createElement(E.H, { errorConfig: Ue }, n.createElement(I.Z, null), n.createElement(E.H, { errorConfig: Ue }, n.createElement(Ne, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(Z.nO, { namespace: je }, n.createElement(b.Z, { backLocation: f.gp, documentTitle: Fe, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(P.Z, null), sidebarContent: null, title: Fe }));
                },
                $e = n.memo(Ye);
        },
        67356: (e, t, a) => {
            a.r(t), a.d(t, { default: () => f });
            var n = a(807896),
                r = a(202784),
                c = a(107267),
                s = a(529356),
                o = a(674132),
                i = a.n(o),
                l = a(883229),
                d = a(943914),
                m = a(514639),
                u = a(445664),
                p = a(743080);
            const h = i().j24c37b2,
                y = { "customer-20": "It appears you are using a VPN. Please turn it off and try again.", "customer-18": "Invalid ZIP code. Please try again.", "customer-13": "Invalid phone number. Please check and try again.", "customer-3": "Please check the information entered and try again.", "customer-9": "Please check the information entered and try again." },
                k = ({ headline: e = "Something went wrong", subtext: t = "An error occurred. Please try again later.", isActive: a }) => {
                    const n = (0, c.useHistory)(),
                        o = n.location?.state?.errors,
                        i = o?.[0]?.id,
                        l = i ? y[i] : null,
                        d = r.useCallback(() => {
                            n.replace(a ? m.gp : "/");
                        }, [n, a]);
                    return r.createElement(s.Z, { actionLabel: h, enableMaskForDismiss: !0, graphicDisplayMode: "illustration", graphicStyle: p.ir, headline: e, isFullHeightOnMobile: !0, onAction: d, onClose: d, subtext: l ?? t, supportUrl: m.N6 });
                },
                g = (e) => {
                    const { isActive: t } = (0, u.Z)({ fetchKey: "Payments" });
                    return r.createElement(k, (0, n.Z)({}, e, { isActive: t }));
                },
                b = { context: "PAYMENTS_ERROR" },
                E = (e) => {
                    const t = r.useMemo(() => ({ type: "CustomRetry", content: () => r.createElement(k, (0, n.Z)({}, e, { isActive: !1 })) }), [e]);
                    return r.createElement(l.N, { errorConfig: b, fallback: t }, r.createElement(d.B, null, r.createElement(g, e)));
                },
                f = r.memo(E);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.085c2afa.js.map
