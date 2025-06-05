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
                l = a(615027),
                i = a(325686),
                d = a(661810),
                m = a(980407),
                u = a(293115),
                p = a(634455),
                h = a(477922),
                y = a(615954),
                k = a(655750),
                g = a(150855),
                b = a(43429),
                E = a(743080),
                f = a(727384),
                C = a(154003),
                Z = a(167630),
                _ = a(436117),
                P = a(782642),
                I = a(445664),
                v = a(413713),
                w = a(626278),
                T = (a(585488), a(351743)),
                S = a.n(T),
                B = a(39431);
            const x = w.Z,
                R = ({ decision: e }) => {
                    const [t, a] = S()(x);
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
                        { permissions: s } = (0, I.Z)({ fetchKey: "Payments" }),
                        l = (0, f.Fs)({ permissions: s, permission: _.d.RespondToThreedsAuthentication }),
                        i = (0, o.z)(),
                        d = (0, P.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    i.scribe({ page: "money", section: "3ds", element: "approve", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You approved the payment of ${e}.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, v.kJ)({ errors: e }).message });
                                        });
                            },
                            [i, r, t, e, a, d],
                        ),
                        u = c || !l;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "primaryFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "Approve");
                },
                z = { context: "PaymentsAcceptPaymentAuth" };
            function D(e) {
                return n.createElement(c.H, { errorConfig: z }, n.createElement(A, e));
            }
            const L = n.memo(D),
                H = ({ amount: e, authenticationId: t, onSuccess: a }) => {
                    const [r, c] = R({ decision: B._.ThreeDsAuthenticationResponseDeny }),
                        { permissions: s } = (0, I.Z)({ fetchKey: "Payments" }),
                        l = (0, f.Fs)({ permissions: s, permission: _.d.RespondToThreedsAuthentication }),
                        i = (0, o.z)(),
                        d = (0, P.p)(),
                        m = n.useCallback(
                            (n) => {
                                n && n.preventDefault(),
                                    i.scribe({ page: "money", section: "3ds", element: "decline", action: "click" }),
                                    r({ authenticationId: t })
                                        .then(() => {
                                            const t = e ? (({ formattedAmount: e }) => `You rejected the ${e} payment.`)({ formattedAmount: e }) : null;
                                            t && d({ text: t }), a?.();
                                        })
                                        .catch((e) => {
                                            d({ text: (0, v.kJ)({ errors: e }).message });
                                        });
                            },
                            [i, r, t, e, a, d],
                        ),
                        u = c || !l;
                    return n.createElement(C.ZP, { disabled: u, onPress: m, size: "medium", type: "destructiveFilled" }, c ? n.createElement(Z.Z, { size: "small" }) : "I did not make this purchase");
                },
                M = { context: "PaymentsRejectPaymentAuth" };
            function W(e) {
                return n.createElement(c.H, { errorConfig: M }, n.createElement(H, e));
            }
            const j = n.memo(W);
            var F = a(461461),
                N = a(712696),
                O = a.n(N);
            const U = F.Z,
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
                    if (!o) return n.createElement(l.Z, { to: s.gp });
                    const { amount: _, merchant_details: P, payment_method: I } = o ?? {},
                        v = (0, f.Ou)(I),
                        w = _ ? (0, f.vw)({ amount: _.local_micro, currency: _.currency }) : null,
                        T = n.createElement(i.Z, { style: t.footer }, n.createElement(i.Z, { style: E.YP.actions }, n.createElement(j, { amount: w, authenticationId: e, key: "RejectPaymentAuth", onSuccess: Z }), n.createElement(L, { amount: w, authenticationId: e, key: "AcceptPaymentAuth", onSuccess: Z })));
                    return n.createElement(u.nO, { namespace: $ }, n.createElement(m.Z, { bottomBar: T, history: C, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(i.Z, { style: t.container }, n.createElement(i.Z, { style: E.YP.content }, P ? n.createElement(i.Z, { style: E.YP.gap }, n.createElement(h.G7, { size: "xJumbo", type: b.wC.card, uri: P.logo }), n.createElement(y.Z, { name: P.name, size: "title4" })) : null, n.createElement(i.Z, { style: [E.YP.gap, E.YP.marginTop] }, _ ? n.createElement(p.Z, { amount: _.local_micro, currency: _.currency, hasCompleted: !1, type: b.NU.debit }) : null), n.createElement(d.Z, { spacing: "space12" }), n.createElement(k.Z, { description: "Verification requested by merchant", title: "Status" }), v && v.issuedCardAccountName ? n.createElement(k.Z, { description: n.createElement(g.Z, { account: v, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, n.createElement(k.Z, { description: "Online", title: "Location" }), n.createElement(k.Z, { description: e, title: "Authentication ID" })))));
                },
                q = { context: "AUTHENTICATE_PANE" },
                K = (e) => n.createElement(c.H, { errorConfig: q }, n.createElement(V, e)),
                G = n.memo(K),
                J = (e) => {
                    const t = (0, o.z)(),
                        a = (0, r.useParams)().authenticationId;
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "authenticate-payment", action: "impression" });
                        }, [t]),
                        a ? n.createElement(G, { authenticationId: a }) : n.createElement(l.Z, { to: s.gp })
                    );
                },
                X = { context: "AuthenticatePayment" };
            function Q(e) {
                return n.createElement(c.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => H, fetchCardStatus: () => x });
            var n = a(807896),
                r = a(655729),
                c = a(202784),
                s = a(400752),
                o = a(325686),
                l = a(10622),
                i = a.n(l),
                d = (a(585488), a(437429)),
                m = a.n(d),
                u = a(107267),
                p = a(731708),
                h = a(167630),
                y = a(392237),
                k = a(605446),
                g = a(622769),
                b = a(420182),
                E = a(736063),
                f = a(782642),
                C = a(514639),
                Z = a(725516),
                _ = a(615027),
                P = a(827309),
                I = a(43429),
                v = a(743080),
                w = a(727384),
                T = a(224058);
            const S = { [k.T.BankCardLinkingSessionRejectionReasonCardAlreadyExists]: "This card already exists.", [k.T.BankCardLinkingSessionRejectionReasonInaccurateCardDetails]: "Please verify the card details entered and try again.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard]: "We were unable to verify the card details entered.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress]: "We were unable to verify the address associated with the card.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName]: "We were unable to verify the name associated with the card.", [k.T.BankCardLinkingSessionRejectionReasonUnsupportedCardType]: "We do not support this card at this time.", [k.T.BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry]: "We do not support this card at this time.", [k.T.BankCardLinkingSessionRejectionReasonUnusableCard]: "We were unable to verify the card details entered." },
                B = r.Z,
                x = ({ cardLinkId: e, environment: t }) =>
                    i()(t, B, { id: e }, { fetchPolicy: "network-only" })
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
                        s = (0, Z.z)(),
                        l = (0, f.p)();
                    c.useEffect(() => {
                        s.scribe({ page: "bank-card-poller", section: "polling", action: "impression" });
                    }, [s]);
                    const i = c.useCallback(
                        (e, r) => {
                            clearInterval(e), l({ text: r ?? "Something went wrong. Please try again later." }), t(), n.replace(a ?? C.gp);
                        },
                        [t, n, a, l],
                    );
                    return (
                        c.useEffect(() => {
                            let c = 0;
                            const o = () => {
                                c >= I.wG
                                    ? (s.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), i(l))
                                    : ((c += 1),
                                      x({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: c, status: s } = e ?? {};
                                              switch (s) {
                                                  case g.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(l), (0, w.ve)(r), t(), n.replace(a ?? C.gp);
                                                      break;
                                                  case g.G.BankCardLinkingSessionStatusRejected:
                                                      i(l, c ? S[c] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              i(l);
                                          }));
                            };
                            o();
                            const l = setInterval(o, I.Ln);
                            return () => clearInterval(l);
                        }, [s, r, i, n, e, a, t]),
                        c.createElement(P.Z, { headline: "Verifying your card", subtext: c.createElement(o.Z, { style: z.container }, c.createElement(p.ZP, null, "This may take a few seconds."), c.createElement(h.Z, { style: v.ZP.poller })) })
                    );
                },
                A = () => {
                    const e = (0, s.Dv)(b.lZ),
                        [t, a] = c.useState();
                    c.useEffect(() => {
                        e.get(T.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = c.useCallback(() => {
                        e.delete(T.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? c.createElement(R, (0, n.Z)({}, t, { onComplete: r })) : c.createElement(_.Z, { to: C.gp })) : c.createElement(h.Z, { style: v.ZP.spinner });
                },
                z = y.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 } })),
                D = { context: "BankCardPoller" },
                L = (e) => c.createElement(E.H, { errorConfig: D }, c.createElement(A, null)),
                H = c.memo(L);
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
                l = a(167630),
                i = a(362075),
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
            const I = f.Z,
                v = { light: _.M.BankCardLinkingSessionThemeLight, dim: _.M.BankCardLinkingSessionThemeDimmed, dark: _.M.BankCardLinkingSessionThemeDark },
                w = () => {
                    const [e] = Z()(I),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: v[(0, P.gh)()] ?? _.M.BankCardLinkingSessionThemeLight },
                                onCompleted: (e, t) => {
                                    const n = e?.create_bank_card_linking_session_v2;
                                    a(n);
                                },
                            });
                        }, [e]),
                        t
                    );
                },
                T = "Add your debit card",
                S = { page: "money", section: "bank-card" },
                B = (e) => {
                    const t = (0, r.Dv)(m.lZ),
                        a = w(),
                        d = (0, s.useHistory)(),
                        [p, f] = n.useState(!1),
                        C = (0, b.jh)(),
                        Z = d.location?.state,
                        _ = Z?.redirectPath,
                        P = (0, h.JY)("payments_crb_iframe_delay_msecs", 0),
                        I = n.useMemo(() => (a?.challenge_id ? { pathname: y.vw, state: { challengeId: a?.challenge_id, challengeInitiator: y.kW.addBankCard, redirectPath: y.UA, redirectState: { redirectPath: _ } } } : null), [_, a?.challenge_id]),
                        v = n.useMemo(() => ({ pathname: y.ac, state: Z ?? {} }), [Z]),
                        B = n.createElement(c.Z, { style: C.footer }, n.createElement(o.ZP, { align: "center", color: "text", link: v }, "Use your bank account")),
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
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: B, history: d, onBackClick: R, withoutBottomBarMobile: !0 }, n.createElement(k.nO, { namespace: S }, n.createElement(c.Z, { style: C.container }, n.createElement(o.ZP, { align: "left", size: "title4", style: b.ZP.title, weight: "bold" }, T), !p && n.createElement(l.Z, { style: b.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(i.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: x, src: a.iframe_url, style: p ? z.iframe : z.hide, title: T }) : I ? n.createElement(g.Z, { to: I }) : null)));
                },
                x = { context: "BANK_CARD" },
                R = (e) => n.createElement(p.H, { errorConfig: x }, n.createElement(B, e)),
                A = n.memo(R),
                z = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", minHeight: 350, flex: 1 }, hide: { display: "none" } }));
        },
        738979: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            var n = a(202784),
                r = a(325686),
                c = a(107267),
                s = a(731708),
                o = a(980407),
                l = a(736063),
                i = a(514639),
                d = a(725516),
                m = a(19804),
                u = a(137882),
                p = a(743080);
            const h = (e) => {
                    const t = (0, d.z)(),
                        a = (0, c.useHistory)(),
                        l = (0, p.jh)(),
                        h = (0, u.b)({}),
                        y = n.useCallback(
                            (e) => () => {
                                t.scribe({ page: "money", component: "card-help", element: e, action: "click" });
                            },
                            [t],
                        ),
                        k = n.useMemo(
                            () => [
                                { key: "CARD_LOST_STOLEN_OR_DAMAGED", label: "Card lost, stolen, or damaged", link: i.zI },
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
                        n.createElement(r.Z, { style: l.container }, n.createElement(s.ZP, { size: "title2", style: p.ZP.title, weight: "heavy" }, "How can we help?"), n.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Powered by Grok 3")),
                        n.createElement(
                            r.Z,
                            { style: l.footer },
                            k.map(({ key: e, label: t, link: a }) => n.createElement(m.Z, { key: e, link: a, onClick: y(e), title: t })),
                        ),
                    );
                },
                y = { context: "CardOnboard" };
            function k(e) {
                return n.createElement(l.H, { errorConfig: y }, n.createElement(h, e));
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
                l = a(514639),
                i = a(725516),
                d = a(160144),
                m = a(727384);
            const u = (e) => {
                    const t = (0, i.z)(),
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
                                    (0, m.uN)(r), a.replace(l.Tb);
                                    break;
                                case d.T.failure:
                                    a.replace(l.D$, { errors: t });
                                    break;
                                case d.T.kyc:
                                    a.replace(l.AU.tier2.verifyIdentityPath, { redirectPath: l.lf, requestedField: l.q3.address, closePath: l.gp });
                                    break;
                                case d.T.stepUpDocv:
                                    a.replace(l.AU.tier3.verifyIdentityPath, { redirectPath: l.lf, closePath: l.gp });
                            }
                        },
                        [r, a],
                    );
                    return n.createElement(d.Z, { additionalParams: o ? [{ key: "skipTerms", value: o }] : void 0, eventCallback: u, linkType: l.P_.cardOnboarding });
                },
                p = { context: "CardOnboard" };
            function h(e) {
                return n.createElement(o.H, { errorConfig: p }, n.createElement(u, e));
            }
            const y = n.memo(h);
        },
        292949: (e, t, a) => {
            a.r(t), a.d(t, { default: () => j });
            var n = a(807896),
                r = a(202784),
                c = a(107267),
                s = a(736063),
                o = a(725516),
                l = (a(136728), a(325686)),
                i = a(731708),
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
                    return r.createElement(d.Z, { backButtonType: "back", history: e, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: t.container }, r.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Which card do you have a problem with?")), r.createElement(l.Z, { style: t.footer }, n?.map(b), s?.map(b)));
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
                I = a(782642),
                v = a(413713),
                w = a(805322),
                T = a(160144),
                S = a(414350),
                B = (a(585488), a(351743)),
                x = a.n(B);
            const R = S.Z,
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
                z = ({ cardId: e, cardType: t, reason: a, ...s }) => {
                    const p = (0, I.p)(),
                        y = (0, h.jh)(),
                        k = (0, c.useHistory)(),
                        g = (0, o.z)(),
                        { defaultReason: b, reasons: E, replaceDescription: f, replaceTitle: C, requireAddressConfirmation: S } = Z[t],
                        [B, x] = r.useState(a),
                        [R, z] = r.useState(),
                        [D, L] = A(),
                        H = r.useMemo(() => ({ pathname: m.f0, state: { field: m.q3.address, closePath: m.Tb, redirectPath: m.zI, redirectState: { cardType: t, cardId: e, reason: B } } }), [e, t, B]),
                        M = r.useCallback(
                            (a) => {
                                g.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    D({ cardId: e, reason: a })
                                        .then(({ challengeId: a }) => {
                                            a ? z(a) : k.push(m.zI, { cardId: e, cardType: t, step: _.successPane });
                                        })
                                        .catch((e) => {
                                            p({ text: (0, v.kJ)({ errors: e }).message });
                                        });
                            },
                            [p, g, e, t, D, k],
                        ),
                        W = r.useCallback(() => {
                            z(null);
                            const e = B ?? b;
                            e && M(e);
                        }, [b, M, B]),
                        j = r.useCallback(
                            (e) => () => {
                                x(e);
                            },
                            [],
                        ),
                        F = r.useCallback(() => {
                            b && (x(b), M(b));
                        }, [b, M]),
                        N = r.useCallback(() => {
                            B && M(B);
                        }, [M, B]),
                        O = r.useCallback(() => {
                            k.goBack();
                        }, [k]);
                    return R ? r.createElement(w.Z, (0, n.Z)({}, s, { challengeId: R, challengeInitiator: m.kW.replaceCard, onSuccess: W })) : r.createElement(d.Z, { backButtonType: "back", history: k, onBackClick: O, withoutBottomBarMobile: !0 }, L ? r.createElement(P.Z, { size: "small", style: h.ZP.spinner, testID: "loading-spinner" }) : S && B ? r.createElement(r.Fragment, null, r.createElement(l.Z, { style: y.container }, r.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, "Confirm this is still your correct address?"), r.createElement(T.Z, { linkType: m.P_.address })), r.createElement(l.Z, { style: y.footer }, r.createElement(u.Z, { link: H, title: "Update my address" }), r.createElement(u.Z, { onClick: N, title: "Ship a replacement card" }))) : r.createElement(r.Fragment, null, r.createElement(l.Z, { style: y.container }, r.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, C), r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, f)), r.createElement(l.Z, { style: y.footer }, E ? E.map(({ key: e, label: t }) => r.createElement(u.Z, { key: e, onClick: j(e), title: t })) : b ? r.createElement(u.Z, { onClick: F, title: "Replace card" }) : null)));
                },
                D = r.memo(z),
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
                        g = r.createElement(l.Z, { style: n.footer }, r.createElement(u.Z, { link: m.Tb, onClick: y, title: "Done" }));
                    return r.createElement(d.Z, { backButtonType: "close", bottomBar: g, history: a, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: n.container }, r.createElement(i.ZP, { size: "title2", style: h.ZP.title, weight: "heavy" }, p), r.createElement(i.ZP, null, s)));
                },
                H = r.memo(L),
                M = { context: "CardReplace" },
                W = (e) => {
                    const t = (0, o.z)(),
                        a = (0, c.useHistory)(),
                        l = a.location?.state,
                        i = l?.step,
                        d = l?.cardId,
                        m = l?.cardType,
                        u = l?.reason;
                    return (
                        r.useEffect(() => {
                            t && t.scribe({ page: "money", component: i, section: "replace-card", action: "impression" });
                        }, [t, i]),
                        r.createElement(s.H, { errorConfig: M }, m && i === _.successPane ? r.createElement(H, { cardType: m }) : m && d ? r.createElement(D, (0, n.Z)({}, e, { cardId: d, cardType: m, reason: u })) : r.createElement(E, null))
                    );
                },
                j = r.memo(W);
        },
        188885: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Ve });
            var n = a(202784),
                r = a(325686),
                c = a(992942),
                s = a(154003),
                o = a(167630),
                l = a(392237),
                i = a(108362),
                d = a(161335),
                m = a(177826),
                u = a(468670),
                p = a(777217),
                h = a(861420),
                y = a(692165),
                k = a(436117),
                g = a(252021),
                b = a(736063),
                E = a(514639),
                f = a(445664),
                C = a(293115),
                Z = a(615027),
                _ = a(370347),
                P = a(575123),
                I = a(19804),
                v = a(452275),
                w = a(226595),
                T = a(24568),
                S = a(743080),
                B = a(727384),
                x = (a(136728), a(107267)),
                R = a(165822),
                A = a(731708),
                z = a(868634),
                D = a(190286),
                L = a(734767),
                H = a(782642),
                M = a(725516),
                W = a(634455),
                j = a(413713),
                F = a(934265),
                N = a(898673),
                O = (a(585488), a(351743)),
                U = a.n(O),
                Y = a(726426),
                $ = a.n(Y);
            const V = N.Z,
                q = () => {
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
                K = "Cash Back",
                G = (e) => `${e} will be transferred to your balance. Keep spending to earn more cash back.`,
                J = ({ cashbackRate: e }) => {
                    const t = (0, M.z)(),
                        a = (0, S.jh)(),
                        c = (0, H.p)(),
                        o = (0, x.useHistory)(),
                        [l, i] = n.useState(!1),
                        { permissions: d, roles: m } = (0, f.Z)({ fetchKey: "Payments" }),
                        u = !(0, B.Fs)({ permissions: d, permission: k.d.RedeemCashback }),
                        [p, h] = q(),
                        { cashback: y } = (0, F.Z)(),
                        g = y?.available_amount_local_micro;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-cashback", action: "impression" });
                    }, [t]);
                    const b = g ? (0, B.vw)({ amount: g, currency: y?.currency }) : "",
                        C = n.useCallback(() => {
                            g &&
                                (t.scribe({ page: "money", section: "card-cashback", element: "redeem", action: "click" }),
                                p({ amount: g })
                                    .then(({ challengeId: e, status: t, transactionId: a }) => {
                                        const n = b ? (({ formattedAmount: e }) => `You redeemed ${e} cash back successfully.`)({ formattedAmount: b }) : null,
                                            r = (0, B.wu)({ status: t, challengeId: e });
                                        r ? o.push(r, { challengeId: e, successMessage: n, challengeInitiator: E.kW.transaction, recordId: a }) : (i(!1), n && c({ text: n }));
                                    })
                                    .catch((e) => {
                                        const t = (0, j.XE)({ errors: e, roles: m });
                                        t ? o.replace(t, { redirectPath: E.Tb, closePath: E.Tb }) : c({ text: (0, j.kJ)({ errors: e }).message });
                                    }));
                        }, [g, t, p, b, o, c, m]),
                        Z = !g || (0, B.gx)(g) <= 0,
                        _ = n.useCallback(() => {
                            i(!0);
                        }, []),
                        P = n.useCallback(() => {
                            i(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, n.createElement(R.Z, { "aria-label": K, containerStyle: a.tile, stackLayoutUpperStyle: S.ZP.upper, upper: n.createElement(r.Z, { style: S.ZP.column }, n.createElement(r.Z, { style: S.ZP.rowSpaceBetween }, n.createElement(A.ZP, { color: "gray700" }, K), e && n.createElement(z.ZP, { background: "white" }, (0, B.fq)({ rate: e }))), g ? n.createElement(W.Z, { amount: g }) : null, Z ? null : n.createElement(s.ZP, { backgroundColor: "gray50", borderColor: "transparent", color: "text", disabled: u, fontWeight: "medium", onClick: _, size: "large" }, "Redeem for cash")), withInteractiveStyling: !1 }), l ? n.createElement(D.Z, { Icon: L.default, cancelButtonLabel: "Not now", confirmButtonDisabled: h, confirmButtonLabel: "Confirm", confirmButtonType: "primary", headline: "Redeem for cash?", iconStyle: S.ZP.alignStart, onCancel: P, onConfirm: C, text: G(b), withCancelButton: !0 }) : null);
                },
                X = { context: "ShippingStatus" };
            function Q(e) {
                return n.createElement(b.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q),
                te = { front: "https://pbs.twimg.com/static/money/card-landscape-front.jpg", back: "https://pbs.twimg.com/static/money/card-landscape-back.jpg" };
            var ae = a(111677),
                ne = a.n(ae),
                re = a(684779),
                ce = a(717160),
                se = a(293723),
                oe = a(633806);
            const le = a(914507).Z,
                ie = () => {
                    const [e, t] = U()(le);
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
                    const a = (0, M.z)(),
                        r = (0, H.p)(),
                        c = (0, x.useHistory)(),
                        s = e.rest_id,
                        [o, l] = ie(),
                        { data: i } = ye({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const d = n.useCallback(() => {
                            a.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                o({ cardId: s })
                                    .then(({ challengeId: e }) => {
                                        e && c.push(E.vw, { challengeId: e, challengeInitiator: E.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        r({ text: (0, j.kJ)({ errors: e }).message });
                                    });
                        }, [a, o, s, c, r]),
                        {
                            Icon: m,
                            action: u,
                            disabled: p,
                            iconStyle: h,
                            link: y,
                            subtitle: k,
                            title: g,
                        } = n.useMemo(() => {
                            const e = i?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis,
                                n = e?.tracking_url,
                                r = a ? new Date(parseInt(a, 10)) : void 0,
                                c = !!r && r < new Date();
                            switch (t) {
                                case oe.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: r ? ((s = ke(r)), `Card arrived on ${s}`) : null, Icon: re.default, action: d, disabled: l };
                                case oe.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: n && !c ? "Track your card’s delivery and activate it once its arrived" : "Activate your card once its arrived", Icon: ce.default, action: c ? d : void 0, link: n && !c ? { pathname: n, external: !0 } : void 0, disabled: l };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: se.default, iconStyle: be.iconCheckmark };
                            }
                            var s;
                        }, [i?.get_payment_method?.shipping, l, d]);
                    return n.createElement(I.Z, { Icon: m, disabled: t || p, iconStyle: h, link: y, onClick: u, subtitle: k, title: g });
                },
                be = l.default.create((e) => ({ iconCheckmark: { color: e.colors.green500 } })),
                Ee = { context: "ShippingStatus" };
            function fe(e) {
                return n.createElement(b.H, { errorConfig: Ee }, n.createElement(ge, e));
            }
            const Ce = n.memo(fe);
            var Ze = a(866432),
                _e = a(497366),
                Pe = a(776588),
                Ie = a(883229),
                ve = a(943914),
                we = a(412450),
                Te = a(529438);
            const Se = a(456221).Z,
                Be = () => {
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
                                            o ? a.push(E.vw, { challengeId: o, challengeInitiator: E.kW.viewCardDetails, closePath: E.gp }) : s ? r(s) : c(n || t);
                                        },
                                        onError: c,
                                    });
                                }),
                            [e, a],
                        ),
                        t,
                    ];
                },
                xe = ({ cardId: e }) => {
                    const t = (0, Ze.useStripe)(),
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
                Re = { type: "CustomRetry", content: () => null },
                Ae = [
                    { domId: "card-number", key: "issuingCardNumberDisplay", label: "Card Number", skeletonWidth: 200, wordPercentWidths: [15, 15, 15, 15] },
                    { key: "name", label: "Cardholder Name" },
                    { domId: "card-expiry", key: "issuingCardExpiryDisplay", label: "EXP", skeletonWidth: 40 },
                    { domId: "card-cvc", label: "CVV", key: "issuingCardCvcDisplay", skeletonWidth: 28 },
                ],
                ze = ({ cardId: e, isLoading: t, refetch: a, setIsLoading: c }) => {
                    const [s, o] = n.useState(!1),
                        i = (0, Ze.useStripe)(),
                        d = n.useMemo(() => i?.elements?.({ fonts: [{ family: "ProtoMono", src: `url(${E.gF})` }] }), [i]),
                        [m] = Be(),
                        u = xe({ cardId: e });
                    n.useEffect(() => {
                        (async () => {
                            if (!u || !d || s) return;
                            const t = await m({ cardId: e, nonce: u });
                            Ae.forEach(({ domId: a, key: n }) => {
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
                    const p = (0, Te.Z)();
                    return n.createElement(
                        r.Z,
                        { style: Le.cardDetails },
                        Ae.map((e) => n.createElement(r.Z, { key: e.key, style: Le.element }, n.createElement(A.ZP, { color: "gray500", size: "subtext2", style: Le.fontFamily }, e.label), e.domId ? n.createElement(n.Fragment, null, t ? n.createElement(Pe.Z, { color: "gray700", lineHeightPx: 20, maxWidthPx: e.skeletonWidth, withBorderRadius: !0, wordHeightPx: 1, wordPercentWidths: e.wordPercentWidths ?? [100], wordSpacingPx: 12 }) : null, n.createElement(r.Z, { id: e.domId, style: t ? Le.hide : null })) : n.createElement(A.ZP, { color: "alwaysBlack", size: "headline2", style: Le.fontFamily }, p))),
                    );
                },
                De = (e) => {
                    const { stripePKey: t } = (0, we.Z)(),
                        a = n.useMemo(() => (0, _e.loadStripe)(t), [t]);
                    return n.createElement(Ze.Elements, { stripe: a }, n.createElement(ze, e));
                },
                Le = l.default.create((e) => ({ cardDetails: { position: "absolute", top: e.spaces.space28, start: e.spaces.space48, end: e.spaces.space16 }, element: { display: "flex", flexDirection: "column", gap: e.spaces.space4, marginBottom: e.spaces.space4 }, hide: { display: "none" }, fontFamily: { fontFamily: "ProtoMono" } })),
                He = { context: "STRIPE_ELEMENTS" },
                Me = (e) => n.createElement(Ie.N, { errorConfig: He, fallback: Re }, n.createElement(ve.B, { fallback: null }, n.createElement(De, e))),
                We = n.memo(Me),
                je = { page: "money", section: "cards" },
                Fe = "Money",
                Ne = "Card",
                Oe = (e) => {
                    const t = (0, S.jh)(),
                        { fetchCount: a, permissions: l } = (0, f.Z)({ fetchKey: "Payments" }),
                        [i, g] = n.useState(!1),
                        [b, C] = n.useState(!1),
                        { activeVirtualCards: P, cards: v, cashbackRate: x, inactivePhysicalCards: R } = (0, w.Z)(),
                        { handleDeferredPreferencesChange: A, isInProgress: z, preferences: D } = (0, T.Z)(),
                        L = n.useCallback(() => {
                            A("enable_card_payments", !1);
                        }, [A]),
                        H = n.useCallback(() => {
                            A("enable_card_payments", !0);
                        }, [A]),
                        M = !(0, B.aY)(l),
                        W = !(0, B.Fs)({ permissions: l, permission: k.d.RequestIssuedCard }),
                        j = !D.enable_card_payments,
                        F = P?.[0]?.core?.details_provider_reference?.id,
                        N = n.useCallback(() => {
                            C(!0), g(!0);
                        }, []),
                        O = n.useCallback(() => {
                            C(!1), g(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, v && v?.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: Ue.imageContainer }, n.createElement(r.Z, { style: [Ue.card, b ? Ue.flipped : null] }, n.createElement(r.Z, { style: b ? Ue.cardBack : null }, n.createElement(c.Z, { ariaLabel: Ne, source: te.front, style: [Ue.image, b ? Ue.hide : null] }), n.createElement(c.Z, { ariaLabel: Ne, source: te.back, style: [Ue.image, b ? null : Ue.hide] }), b && F ? n.createElement(We, { cardId: F, isLoading: i, refetch: a, setIsLoading: g }) : null, F ? n.createElement(s.ZP, { disabled: i, fontWeight: "normal", icon: i ? void 0 : b ? n.createElement(d.default, null) : n.createElement(m.default, null), onClick: b ? O : N, size: "xSmall", style: Ue.showDetailsButton, type: "onMediaWhiteFilled" }, i ? n.createElement(o.Z, { size: "small", style: Ue.loader }) : b ? "Hide card details" : "Show card details") : null))), j ? n.createElement(I.Z, { Icon: u.default, subtitle: "Future transactions would be declined.", title: "Your card is locked" }) : null, R && R?.length > 0 ? n.createElement(Ce, { card: R[0], disabled: W }) : null, n.createElement(ee, { cashbackRate: x }), n.createElement(r.Z, { style: t.pivotTileContainer }, j ? n.createElement(_.Z, { disabled: M, icon: p.default, isLoading: z, onClick: H, text: "Unlock card" }) : n.createElement(_.Z, { disabled: M, icon: u.default, isLoading: z, onClick: L, text: "Lock card" }), n.createElement(_.Z, { disabled: W, icon: h.default, link: W ? void 0 : E.SR, text: "Change pin" }), n.createElement(_.Z, { disabled: W, icon: y.default, link: W ? void 0 : E.dI, text: "Get card help" }))) : n.createElement(Z.Z, { to: E.lf }));
                },
                Ue = l.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, start: e.spaces.space20, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto", perspective: "1000px", perspectiveOrigin: "center" }, card: { position: "relative", transformStyle: "preserve-3d", transition: "transform 0.4s ease-out" }, cardBack: { transform: "rotateX(180deg)", transformStyle: "preserve-3d" }, flipped: { transform: "rotateX(180deg)" }, loader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space2 }, hide: { display: "none" } })),
                Ye = { context: "ACCOUNT_CARDS" },
                $e = (e) => {
                    const { history: t } = e,
                        a = (0, S.jh)(),
                        r = n.useCallback(() => n.createElement(i.Z, { style: a.root, withWideContainer: !0 }, n.createElement(b.H, { errorConfig: Ye }, n.createElement(v.Z, null), n.createElement(b.H, { errorConfig: Ye }, n.createElement(Oe, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(C.nO, { namespace: je }, n.createElement(g.Z, { backLocation: E.gp, documentTitle: Fe, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(P.Z, null), sidebarContent: null, title: Fe }));
                },
                Ve = n.memo($e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.8c9c9d2a.js.map
