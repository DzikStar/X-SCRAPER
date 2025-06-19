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
                y = a(477922),
                h = a(615954),
                k = a(655750),
                b = a(150855),
                g = a(43429),
                E = a(743080),
                f = a(727384),
                C = a(154003),
                Z = a(167630),
                P = a(436117),
                I = a(782642),
                _ = a(445664),
                v = a(413713),
                w = a(626278),
                T = (a(585488), a(351743)),
                S = a.n(T),
                B = a(39431);
            const R = w.Z,
                x = ({ decision: e }) => {
                    const [t, a] = S()(R);
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
                    const [r, c] = x({ decision: B._.ThreeDsAuthenticationResponseAllow }),
                        { permissions: s } = (0, _.Z)({ fetchKey: "Payments" }),
                        l = (0, f.Fs)({ permissions: s, permission: P.d.RespondToThreedsAuthentication }),
                        i = (0, o.z)(),
                        d = (0, I.p)(),
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
                    const [r, c] = x({ decision: B._.ThreeDsAuthenticationResponseDeny }),
                        { permissions: s } = (0, _.Z)({ fetchKey: "Payments" }),
                        l = (0, f.Fs)({ permissions: s, permission: P.d.RespondToThreedsAuthentication }),
                        i = (0, o.z)(),
                        d = (0, I.p)(),
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
                F = { context: "PaymentsRejectPaymentAuth" };
            function M(e) {
                return n.createElement(c.H, { errorConfig: F }, n.createElement(H, e));
            }
            const j = n.memo(M);
            var W = a(461461),
                O = a(712696),
                N = a.n(O);
            const U = W.Z,
                q = () => N()(U, {}, { fetchPolicy: "network-only" }),
                $ = { page: "money", section: "authenticate-payment" },
                Y = ({ authenticationId: e }) => {
                    const t = (0, E.jh)(),
                        a = q(),
                        c = a?.get_active_three_ds_authentications?.three_ds_authentications,
                        o = c?.find((t) => t.id === e),
                        C = (0, r.useHistory)(),
                        Z = n.useCallback(() => {
                            C.goBack();
                        }, [C]);
                    if (!o) return n.createElement(l.Z, { to: s.gp });
                    const { amount: P, merchant_details: I, payment_method: _ } = o ?? {},
                        v = (0, f.Ou)(_),
                        w = P ? (0, f.vw)({ amount: P.local_micro, currency: P.currency }) : null,
                        T = n.createElement(i.Z, { style: t.footer }, n.createElement(i.Z, { style: E.YP.actions }, n.createElement(j, { amount: w, authenticationId: e, key: "RejectPaymentAuth", onSuccess: Z }), n.createElement(L, { amount: w, authenticationId: e, key: "AcceptPaymentAuth", onSuccess: Z })));
                    return n.createElement(u.nO, { namespace: $ }, n.createElement(m.Z, { bottomBar: T, history: C, onBackClick: Z, withoutBottomBarMobile: !0 }, n.createElement(i.Z, { style: t.container }, n.createElement(i.Z, { style: E.YP.content }, I ? n.createElement(i.Z, { style: E.YP.gap }, n.createElement(y.G7, { size: "xJumbo", type: g.wC.card, uri: I.logo }), n.createElement(h.Z, { name: I.name, size: "title4" })) : null, n.createElement(i.Z, { style: [E.YP.gap, E.YP.marginTop] }, P ? n.createElement(p.Z, { amount: P.local_micro, currency: P.currency, hasCompleted: !1, type: g.NU.debit }) : null), n.createElement(d.Z, { spacing: "space12" }), n.createElement(k.Z, { description: "Verification requested by merchant", title: "Status" }), v && v.issuedCardAccountName ? n.createElement(k.Z, { description: n.createElement(b.Z, { account: v, isIssued: !0, testId: "issuedCard" }), title: "Card used" }) : null, n.createElement(k.Z, { description: "Online", title: "Location" }), n.createElement(k.Z, { description: e, title: "Authentication ID" })))));
                },
                V = { context: "AUTHENTICATE_PANE" },
                G = (e) => n.createElement(c.H, { errorConfig: V }, n.createElement(Y, e)),
                K = n.memo(G),
                J = (e) => {
                    const t = (0, o.z)(),
                        a = (0, r.useParams)().authenticationId;
                    return (
                        n.useEffect(() => {
                            t && t.scribe({ page: "money", section: "authenticate-payment", action: "impression" });
                        }, [t]),
                        a ? n.createElement(K, { authenticationId: a }) : n.createElement(l.Z, { to: s.gp })
                    );
                },
                X = { context: "AuthenticatePayment" };
            function Q(e) {
                return n.createElement(c.H, { errorConfig: X }, n.createElement(J, e));
            }
            const ee = n.memo(Q);
        },
        129813: (e, t, a) => {
            a.r(t), a.d(t, { default: () => H, fetchCardStatus: () => R });
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
                y = a(167630),
                h = a(392237),
                k = a(605446),
                b = a(622769),
                g = a(420182),
                E = a(736063),
                f = a(782642),
                C = a(514639),
                Z = a(725516),
                P = a(615027),
                I = a(827309),
                _ = a(43429),
                v = a(743080),
                w = a(727384),
                T = a(224058);
            const S = { [k.T.BankCardLinkingSessionRejectionReasonCardAlreadyExists]: "This card already exists.", [k.T.BankCardLinkingSessionRejectionReasonInaccurateCardDetails]: "Please verify the card details entered and try again.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard]: "We were unable to verify the card details entered.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress]: "We were unable to verify the address associated with the card.", [k.T.BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName]: "We were unable to verify the name associated with the card.", [k.T.BankCardLinkingSessionRejectionReasonUnsupportedCardType]: "We do not support this card at this time.", [k.T.BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry]: "We do not support this card at this time.", [k.T.BankCardLinkingSessionRejectionReasonUnusableCard]: "We were unable to verify the card details entered." },
                B = r.Z,
                R = ({ cardLinkId: e, environment: t }) =>
                    i()(t, B, { id: e }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.get_bank_card_linking_session?.status,
                                a = e?.get_bank_card_linking_session?.rejection_reason;
                            return { status: t, rejectionReason: a };
                        })
                        .catch(() => null),
                x = ({ cardLinkId: e, onComplete: t, redirectPath: a }) => {
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
                                c >= _.wG
                                    ? (s.scribe({ page: "bank-card-poller", section: "polling", action: "failure" }), i(l))
                                    : ((c += 1),
                                      R({ environment: r, cardLinkId: e })
                                          .then((e) => {
                                              const { rejectionReason: c, status: s } = e ?? {};
                                              switch (s) {
                                                  case b.G.BankCardLinkingSessionStatusAuthorized:
                                                      clearInterval(l), (0, w.ve)(r), t(), n.replace(a ?? C.gp);
                                                      break;
                                                  case b.G.BankCardLinkingSessionStatusRejected:
                                                      i(l, c ? S[c] : void 0);
                                              }
                                          })
                                          .catch(() => {
                                              i(l);
                                          }));
                            };
                            o();
                            const l = setInterval(o, _.Ln);
                            return () => clearInterval(l);
                        }, [s, r, i, n, e, a, t]),
                        c.createElement(I.Z, { headline: "Verifying your card", subtext: c.createElement(o.Z, { style: z.container }, c.createElement(p.ZP, null, "This may take a few seconds."), c.createElement(y.Z, { style: v.ZP.poller })) })
                    );
                },
                A = () => {
                    const e = (0, s.Dv)(g.lZ),
                        [t, a] = c.useState();
                    c.useEffect(() => {
                        e.get(T.a).then((e) => {
                            a(e);
                        });
                    }, [e]);
                    const r = c.useCallback(() => {
                        e.delete(T.a);
                    }, [e]);
                    return t ? (t.cardLinkId ? c.createElement(x, (0, n.Z)({}, t, { onComplete: r })) : c.createElement(P.Z, { to: C.gp })) : c.createElement(y.Z, { style: v.ZP.spinner });
                },
                z = h.default.create((e) => ({ container: { width: "100%" }, margin: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, error: { marginTop: e.spaces.space12 } })),
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
                y = a(952793),
                h = a(514639),
                k = a(293115),
                b = a(615027),
                g = a(743080),
                E = a(224058),
                f = a(986092),
                C = (a(585488), a(351743)),
                Z = a.n(C),
                P = a(234107),
                I = a(727384);
            const _ = f.Z,
                v = { light: P.M.BankCardLinkingSessionThemeLight, dim: P.M.BankCardLinkingSessionThemeDimmed, dark: P.M.BankCardLinkingSessionThemeDark },
                w = () => {
                    const [e] = Z()(_),
                        [t, a] = n.useState();
                    return (
                        n.useEffect(() => {
                            e({
                                variables: { theme: v[(0, I.gh)()] ?? P.M.BankCardLinkingSessionThemeLight },
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
                        C = (0, g.jh)(),
                        Z = d.location?.state,
                        P = Z?.redirectPath,
                        I = (0, y.JY)("payments_crb_iframe_delay_msecs", 0),
                        _ = n.useMemo(() => (a?.challenge_id ? { pathname: h.vw, state: { challengeId: a?.challenge_id, challengeInitiator: h.kW.addBankCard, redirectPath: h.UA, redirectState: { redirectPath: P } } } : null), [P, a?.challenge_id]),
                        v = n.useMemo(() => ({ pathname: h.ac, state: Z ?? {} }), [Z]),
                        B = n.createElement(c.Z, { style: C.footer }, n.createElement(o.ZP, { align: "center", color: "text", link: v }, "Use your bank account")),
                        R = n.useCallback(() => {
                            I
                                ? setTimeout(() => {
                                      f(!0);
                                  }, I)
                                : f(!0),
                                a?.id && t.set(E.a, { redirectPath: P, cardLinkId: a.id });
                        }, [I, P, a, t]),
                        x = n.useCallback(() => {
                            P === h.iE.bankAccounts ? d.push(h.iE.bankAccounts) : d.push(h.gp);
                        }, [d, P]);
                    return n.createElement(u.Z, { backButtonType: "close", bottomBar: B, history: d, onBackClick: x, withoutBottomBarMobile: !0 }, n.createElement(k.nO, { namespace: S }, n.createElement(c.Z, { style: C.container }, n.createElement(o.ZP, { align: "left", size: "title4", style: g.ZP.title, weight: "bold" }, T), !p && n.createElement(l.Z, { style: g.ZP.spinner, testID: "loading-spinner" }), a?.iframe_url ? n.createElement(i.Z, { allowForms: !0, allowTopNavigation: !0, onLoad: R, src: a.iframe_url, style: p ? z.iframe : z.hide, title: T }) : _ ? n.createElement(b.Z, { to: _ }) : null)));
                },
                R = { context: "BANK_CARD" },
                x = (e) => n.createElement(p.H, { errorConfig: R }, n.createElement(B, e)),
                A = n.memo(x),
                z = d.default.create((e) => ({ iframe: { width: "100%", paddingTop: "0px", minHeight: 350, flex: 1 }, hide: { display: "none" } }));
        },
        738979: (e, t, a) => {
            a.r(t), a.d(t, { default: () => b });
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
            const y = (e) => {
                    const t = (0, d.z)(),
                        a = (0, c.useHistory)(),
                        l = (0, p.jh)(),
                        y = (0, u.bR)({}),
                        h = n.useCallback(
                            (e) => () => {
                                t.scribe({ page: "money", component: "card-help", element: e, action: "click" });
                            },
                            [t],
                        ),
                        k = n.useMemo(
                            () => [
                                { key: "CARD_LOST_STOLEN_OR_DAMAGED", label: "Card lost, stolen, or damaged", link: i.zI },
                                { key: "DISPUTE_TRANSACTION", label: "Dispute a transaction", link: { pathname: y, openInSameFrame: !1 } },
                                { key: "OTHER", label: "Something else", link: { pathname: y, openInSameFrame: !1 } },
                            ],
                            [y],
                        ),
                        b = n.useCallback(() => {
                            a.goBack();
                        }, [a]);
                    return n.createElement(
                        o.Z,
                        { backButtonType: "close", history: a, onBackClick: b, withoutBottomBarMobile: !0 },
                        n.createElement(r.Z, { style: l.container }, n.createElement(s.ZP, { size: "title2", style: p.ZP.title, weight: "heavy" }, "How can we help?"), n.createElement(s.ZP, { color: "gray700", size: "subtext1" }, "Powered by Grok 3")),
                        n.createElement(
                            r.Z,
                            { style: l.footer },
                            k.map(({ key: e, label: t, link: a }) => n.createElement(m.Z, { key: e, link: a, onClick: h(e), title: t })),
                        ),
                    );
                },
                h = { context: "CardOnboard" };
            function k(e) {
                return n.createElement(l.H, { errorConfig: h }, n.createElement(y, e));
            }
            const b = n.memo(k);
        },
        246682: (e, t, a) => {
            a.r(t), a.d(t, { default: () => b });
            var n = a(202784),
                r = a(437429),
                c = a.n(r),
                s = a(107267),
                o = a(736063),
                l = a(514639),
                i = a(725516),
                d = a(125363),
                m = a(919022),
                u = a(160144),
                p = a(727384);
            const y = (e) => {
                    const t = (0, i.z)(),
                        a = (0, s.useHistory)(),
                        r = c()(),
                        o = (0, d.v9)(m.ZP.selectViewerUser);
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-onboard", action: "impression" });
                    }, [t]);
                    const y = n.useCallback(
                        (e) => {
                            const { errors: t, message: n } = e.data;
                            switch (n) {
                                case u.T.close:
                                    a.replace(l.Tb);
                                    break;
                                case u.T.success:
                                    (0, p.uN)(r), a.replace(l.Tb);
                                    break;
                                case u.T.failure:
                                    a.replace(l.D$, { errors: t });
                                    break;
                                case u.T.kyc:
                                    a.replace(l.AU.tier2.verifyIdentityPath, { redirectPath: l.lf, requestedField: l.q3.address, closePath: l.gp, skipTerms: !0 });
                                    break;
                                case u.T.stepUpDocv:
                                    a.replace(l.AU.tier3.verifyIdentityPath, { redirectPath: l.lf, closePath: l.gp });
                            }
                        },
                        [r, a],
                    );
                    return n.createElement(u.Z, { eventCallback: y, linkType: l.P_.cardOnboarding, payload: { customerHandle: `@${o?.screen_name || ""}` } });
                },
                h = { context: "CardOnboard" };
            function k(e) {
                return n.createElement(o.H, { errorConfig: h }, n.createElement(y, e));
            }
            const b = n.memo(k);
        },
        237567: (e, t, a) => {
            a.r(t), a.d(t, { default: () => D });
            var n = a(202784),
                r = a(325686),
                c = a(731708),
                s = a(708852),
                o = a(530525),
                l = a(439592),
                i = a(154003),
                d = a(392237),
                m = a(108362),
                u = a(14284),
                p = a(734767),
                y = a(436117),
                h = a(252021),
                k = a(736063),
                b = a(514639),
                g = a(445664),
                E = a(293115),
                f = a(43429),
                C = a(920113),
                Z = a(452275),
                P = a(743080),
                I = a(727384),
                _ = a(978684);
            const v = { page: "money", section: "cards" },
                w = "Money",
                T = n.createElement(c.ZP, { color: "text", link: f.Fw, size: "subtext2" }, "Cardholder Terms"),
                S = n.createElement(c.ZP, { color: "gray700", size: "subtext2" }, "By ordering a card, you are agreeing to ", T, ". Cards are issued by Cross River Bank, member FDIC"),
                B = [
                    { label: "Spend anywhere in person or online", Icon: u.default },
                    { label: "Get 1% cash back everywhere", Icon: p.default },
                ],
                R = (e) => {
                    const { permissions: t } = (0, g.Z)({ fetchKey: "Payments" }),
                        a = (0, s.D2)(),
                        d = t?.includes(y.d.RequestIssuedCard),
                        m = (0, I.Gs)(t),
                        u = d ? b.lf : m ? { pathname: b.AU.tier2.verifyIdentityPath, state: { redirectPath: b.lf, requestedField: b.q3.address, closePath: b.gp, skipTerms: !0 } } : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(r.Z, { style: a ? x.illustrationWide : null }, n.createElement(o.Z, { "aria-label": "Card", aspectMode: l.Z.SQUARE, image: _.q.v1.illustration })),
                        B.map(({ Icon: e, label: t }) => n.createElement(r.Z, { key: t, role: "listitem", style: P.ZP.row }, n.createElement(e, null), n.createElement(c.ZP, { weight: "medium" }, t))),
                        n.createElement(i.ZP, { disabled: !u, link: u, type: "primaryFilled" }, "Get my card"),
                        S,
                    );
                },
                x = d.default.create((e) => ({ illustrationWide: { marginHorizontal: e.spaces.space64 } })),
                A = { context: "ACCOUNT_CARDS_ONBOARD_TERMS" },
                z = (e) => {
                    const { history: t } = e,
                        a = (0, P.jh)(),
                        r = n.useCallback(() => n.createElement(m.Z, { style: a.root, withWideContainer: !0 }, n.createElement(k.H, { errorConfig: A }, n.createElement(Z.Z, null), n.createElement(k.H, { errorConfig: A }, n.createElement(R, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(E.nO, { namespace: v }, n.createElement(h.Z, { backLocation: b.gp, documentTitle: w, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(C.Z, null), sidebarContent: null, title: w }));
                },
                D = n.memo(z);
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
                y = a(743080),
                h = a(727384);
            const k = () => {
                    const e = (0, c.useHistory)(),
                        t = (0, y.jh)(),
                        a = (0, o.z)(),
                        { activeCards: n, inactivePhysicalCards: s } = (0, p.Z)(),
                        k = r.useCallback(() => {
                            e.goBack();
                        }, [e]),
                        b = r.useCallback(
                            ({ cardId: t, cardType: n }) =>
                                () => {
                                    a.scribe({ page: "money", component: "card-replace", element: `${n}-${t}`, action: "click" }), e.push(m.zI, { cardId: t, cardType: n });
                                },
                            [a, e],
                        ),
                        g = r.useCallback(
                            (e) => {
                                const t = (0, h.Ou)(e),
                                    a = e.rest_id,
                                    n = e.core?.details?.issued_card_type,
                                    c = t?.issuedCardAccountName;
                                return a && n && c ? r.createElement(u.Z, { key: a, onClick: b({ cardType: n, cardId: a }), title: c }) : null;
                            },
                            [b],
                        );
                    return r.createElement(d.Z, { backButtonType: "back", history: e, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: t.container }, r.createElement(i.ZP, { size: "title2", style: y.ZP.title, weight: "heavy" }, "Which card do you have a problem with?")), r.createElement(l.Z, { style: t.footer }, n?.map(g), s?.map(g)));
                },
                b = { context: "CardOnboard" };
            function g() {
                return r.createElement(s.H, { errorConfig: b }, r.createElement(k, null));
            }
            const E = r.memo(g);
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
                P = Object.freeze({ successPane: "successPane" });
            var I = a(167630),
                _ = a(782642),
                v = a(413713),
                w = a(805322),
                T = a(160144),
                S = a(414350),
                B = (a(585488), a(351743)),
                R = a.n(B);
            const x = S.Z,
                A = () => {
                    const [e, t] = R()(x);
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
                                        updater: h.Ts,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                z = ({ cardId: e, cardType: t, reason: a, ...s }) => {
                    const p = (0, _.p)(),
                        h = (0, y.jh)(),
                        k = (0, c.useHistory)(),
                        b = (0, o.z)(),
                        { defaultReason: g, reasons: E, replaceDescription: f, replaceTitle: C, requireAddressConfirmation: S } = Z[t],
                        [B, R] = r.useState(a),
                        [x, z] = r.useState(),
                        [D, L] = A(),
                        H = r.useMemo(() => ({ pathname: m.f0, state: { field: m.q3.address, closePath: m.Tb, redirectPath: m.zI, redirectState: { cardType: t, cardId: e, reason: B } } }), [e, t, B]),
                        F = r.useCallback(
                            (a) => {
                                b.scribe({ page: "money", section: "confirm-payment", element: "approve", action: "click" }),
                                    D({ cardId: e, reason: a })
                                        .then(({ challengeId: a }) => {
                                            a ? z(a) : k.push(m.zI, { cardId: e, cardType: t, step: P.successPane });
                                        })
                                        .catch((e) => {
                                            p({ text: (0, v.kJ)({ errors: e }).message });
                                        });
                            },
                            [p, b, e, t, D, k],
                        ),
                        M = r.useCallback(() => {
                            z(null);
                            const e = B ?? g;
                            e && F(e);
                        }, [g, F, B]),
                        j = r.useCallback(
                            (e) => () => {
                                R(e);
                            },
                            [],
                        ),
                        W = r.useCallback(() => {
                            g && (R(g), F(g));
                        }, [g, F]),
                        O = r.useCallback(() => {
                            B && F(B);
                        }, [F, B]),
                        N = r.useCallback(() => {
                            k.goBack();
                        }, [k]);
                    return x ? r.createElement(w.Z, (0, n.Z)({}, s, { challengeId: x, challengeInitiator: m.kW.replaceCard, onSuccess: M })) : r.createElement(d.Z, { backButtonType: "back", history: k, onBackClick: N, withoutBottomBarMobile: !0 }, L ? r.createElement(I.Z, { size: "small", style: y.ZP.spinner, testID: "loading-spinner" }) : S && B ? r.createElement(r.Fragment, null, r.createElement(l.Z, { style: h.container }, r.createElement(i.ZP, { size: "title2", style: y.ZP.title, weight: "heavy" }, "Confirm this is still your correct address?"), r.createElement(T.Z, { linkType: m.P_.address })), r.createElement(l.Z, { style: h.footer }, r.createElement(u.Z, { link: H, title: "Update my address" }), r.createElement(u.Z, { onClick: O, title: "Ship a replacement card" }))) : r.createElement(r.Fragment, null, r.createElement(l.Z, { style: h.container }, r.createElement(i.ZP, { size: "title2", style: y.ZP.title, weight: "heavy" }, C), r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, f)), r.createElement(l.Z, { style: h.footer }, E ? E.map(({ key: e, label: t }) => r.createElement(u.Z, { key: e, onClick: j(e), title: t })) : g ? r.createElement(u.Z, { onClick: W, title: "Replace card" }) : null)));
                },
                D = r.memo(z),
                L = ({ cardType: e }) => {
                    const t = (0, o.z)(),
                        a = (0, c.useHistory)(),
                        n = (0, y.jh)(),
                        { successDescription: s, successTitle: p } = Z[e],
                        h = r.useCallback(() => {
                            t.scribe({ page: "money", section: e, component: "replace-success", element: "done", action: "click" });
                        }, [t, e]),
                        k = r.useCallback(() => {
                            a.push(m.Tb);
                        }, [a]),
                        b = r.createElement(l.Z, { style: n.footer }, r.createElement(u.Z, { link: m.Tb, onClick: h, title: "Done" }));
                    return r.createElement(d.Z, { backButtonType: "close", bottomBar: b, history: a, onBackClick: k, withoutBottomBarMobile: !0 }, r.createElement(l.Z, { style: n.container }, r.createElement(i.ZP, { size: "title2", style: y.ZP.title, weight: "heavy" }, p), r.createElement(i.ZP, null, s)));
                },
                H = r.memo(L),
                F = { context: "CardReplace" },
                M = (e) => {
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
                        r.createElement(s.H, { errorConfig: F }, m && i === P.successPane ? r.createElement(H, { cardType: m }) : m && d ? r.createElement(D, (0, n.Z)({}, e, { cardId: d, cardType: m, reason: u })) : r.createElement(E, null))
                    );
                },
                j = r.memo(M);
        },
        978684: (e, t, a) => {
            a.d(t, { j: () => r, q: () => n });
            const n = { v1: { front: "https://pbs.twimg.com/static/money/card-landscape-front.jpg?v=5", back: "https://pbs.twimg.com/static/money/card-landscape-back.jpg?v=5", illustration: "https://pbs.twimg.com/static/money/card-onboarding.png" } },
                r = 800;
        },
        807801: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Ue });
            var n = a(202784),
                r = a(325686),
                c = a(992942),
                s = a(154003),
                o = a(392237),
                l = a(108362),
                i = a(177826),
                d = a(161335),
                m = a(468670),
                u = a(777217),
                p = a(861420),
                y = a(692165),
                h = a(436117),
                k = a(252021),
                b = a(736063),
                g = a(514639),
                E = a(445664),
                f = a(293115),
                C = a(615027),
                Z = a(370347),
                P = a(19804),
                I = a(920113),
                _ = a(452275),
                v = a(226595),
                w = a(24568),
                T = a(743080),
                S = a(727384),
                B = (a(136728), a(107267)),
                R = a(165822),
                x = a(731708),
                A = a(868634),
                z = a(190286),
                D = a(734767),
                L = a(782642),
                H = a(725516),
                F = a(634455),
                M = a(413713),
                j = a(934265),
                W = a(898673),
                O = (a(585488), a(351743)),
                N = a.n(O),
                U = a(726426),
                q = a.n(U);
            const $ = W.Z,
                Y = () => {
                    const e = n.useMemo(() => q()(), []),
                        [t, a] = N()($);
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
                                            (0, S.H_)(e, { status: a, reasonCode: n });
                                        },
                                    });
                                }),
                            [e, t],
                        ),
                        a,
                    ];
                },
                V = "Cash Back",
                G = (e) => `${e} will be transferred to your balance. Keep spending to earn more cash back.`,
                K = ({ cashbackRate: e }) => {
                    const t = (0, H.z)(),
                        a = (0, T.jh)(),
                        c = (0, L.p)(),
                        o = (0, B.useHistory)(),
                        [l, i] = n.useState(!1),
                        { permissions: d, roles: m } = (0, E.Z)({ fetchKey: "Payments" }),
                        u = !(0, S.Fs)({ permissions: d, permission: h.d.RedeemCashback }),
                        [p, y] = Y(),
                        { cashback: k } = (0, j.Z)(),
                        b = k?.available_amount_local_micro;
                    n.useEffect(() => {
                        t && t.scribe({ page: "money", section: "card-cashback", action: "impression" });
                    }, [t]);
                    const f = b ? (0, S.vw)({ amount: b, currency: k?.currency }) : "",
                        C = n.useCallback(() => {
                            b &&
                                (t.scribe({ page: "money", section: "card-cashback", element: "redeem", action: "click" }),
                                p({ amount: b })
                                    .then(({ challengeId: e, status: t, transactionId: a }) => {
                                        const n = f ? (({ formattedAmount: e }) => `You redeemed ${e} cash back successfully.`)({ formattedAmount: f }) : null,
                                            r = (0, S.wu)({ status: t, challengeId: e });
                                        r ? o.push(r, { challengeId: e, successMessage: n, challengeInitiator: g.kW.transaction, recordId: a }) : (i(!1), n && c({ text: n }));
                                    })
                                    .catch((e) => {
                                        const t = (0, M.XE)({ errors: e, roles: m });
                                        t ? o.replace(t, { redirectPath: g.Tb, closePath: g.Tb }) : c({ text: (0, M.kJ)({ errors: e }).message });
                                    }));
                        }, [b, t, p, f, o, c, m]),
                        Z = !b || (0, S.gx)(b) <= 0,
                        P = n.useCallback(() => {
                            i(!0);
                        }, []),
                        I = n.useCallback(() => {
                            i(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, n.createElement(R.Z, { "aria-label": V, containerStyle: a.tile, stackLayoutUpperStyle: T.ZP.upper, upper: n.createElement(r.Z, { style: T.ZP.column }, n.createElement(r.Z, { style: T.ZP.rowSpaceBetween }, n.createElement(x.ZP, { color: "gray700" }, V), e && n.createElement(A.ZP, { background: "white" }, (0, S.fq)({ rate: e }))), b ? n.createElement(F.Z, { amount: b }) : null, Z ? null : n.createElement(s.ZP, { backgroundColor: "gray50", borderColor: "transparent", color: "text", disabled: u, fontWeight: "medium", onClick: P, size: "large" }, "Redeem for cash")), withInteractiveStyling: !1 }), l ? n.createElement(z.Z, { Icon: D.default, cancelButtonLabel: "Not now", confirmButtonDisabled: y, confirmButtonLabel: "Confirm", confirmButtonType: "primary", headline: "Redeem for cash?", iconStyle: T.ZP.alignStart, onCancel: I, onConfirm: C, text: G(f), withCancelButton: !0 }) : null);
                },
                J = { context: "ShippingStatus" };
            function X(e) {
                return n.createElement(b.H, { errorConfig: J }, n.createElement(K, e));
            }
            const Q = n.memo(X);
            var ee = a(978684),
                te = a(111677),
                ae = a.n(te),
                ne = a(684779),
                re = a(717160),
                ce = a(293723),
                se = a(633806),
                oe = a(798350),
                le = a(32403);
            const ie = ae().jade381b,
                de = ({ card: e, disabled: t }) => {
                    const a = (0, H.z)(),
                        r = (0, L.p)(),
                        c = (0, B.useHistory)(),
                        s = e.rest_id,
                        [o, l] = (0, oe.Z)(),
                        { canActivate: i, data: d, isEtaElapsed: m } = (0, le.Z)({ paymentMethodId: e.rest_id });
                    n.useEffect(() => {
                        a && a.scribe({ page: "money", section: "card-shipping", action: "impression" });
                    }, [a]);
                    const u = n.useCallback(() => {
                            a.scribe({ page: "money", section: "activate-card", action: "click" }),
                                o({ cardId: s })
                                    .then(({ challengeId: e }) => {
                                        e && c.push(g.vw, { challengeId: e, challengeInitiator: g.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        r({ text: (0, M.kJ)({ errors: e }).message });
                                    });
                        }, [a, o, s, c, r]),
                        {
                            Icon: p,
                            action: y,
                            disabled: h,
                            iconStyle: k,
                            link: b,
                            subtitle: E,
                            title: f,
                        } = n.useMemo(() => {
                            const e = d?.get_payment_method?.shipping,
                                t = e?.status,
                                a = e?.eta_millis,
                                n = e?.tracking_url,
                                r = a ? new Date(parseInt(a, 10)) : void 0;
                            switch (t) {
                                case se.$.IssuedCardShippingStatusDelivered:
                                    return { title: "Ready to activate", subtitle: r ? ((c = ie(r)), `Card arrived on ${c}`) : null, Icon: ne.default, action: i ? u : void 0, disabled: l };
                                case se.$.IssuedCardShippingStatusShipped:
                                    return { title: "Your card has shipped", subtitle: n && !m ? "Track your card’s delivery and activate it once its arrived" : "Activate your card once its arrived", Icon: re.default, action: i ? u : void 0, link: n && !m ? { pathname: n, external: !0 } : void 0, disabled: l };
                                default:
                                    return { title: "Your card has been ordered", subtitle: "Use it online while you wait.", Icon: ce.default, iconStyle: me.iconCheckmark };
                            }
                            var c;
                        }, [i, d?.get_payment_method?.shipping, l, m, u]);
                    return n.createElement(P.Z, { Icon: p, disabled: t || h, iconStyle: k, link: b, onClick: y, subtitle: E, title: f });
                },
                me = o.default.create((e) => ({ iconCheckmark: { color: e.colors.green500 } })),
                ue = { context: "ShippingStatus" };
            function pe(e) {
                return n.createElement(b.H, { errorConfig: ue }, n.createElement(de, e));
            }
            const ye = n.memo(pe);
            var he = a(866432),
                ke = a(497366),
                be = a(167630),
                ge = a(883229),
                Ee = a(943914),
                fe = a(412450),
                Ce = a(529438);
            const Ze = a(456221).Z,
                Pe = () => {
                    const [e, t] = N()(Ze),
                        a = (0, B.useHistory)();
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
                                            o ? a.push(g.vw, { challengeId: o, challengeInitiator: g.kW.viewCardDetails, closePath: g.gp }) : s ? r(s) : c(n || t);
                                        },
                                        onError: c,
                                    });
                                }),
                            [e, a],
                        ),
                        t,
                    ];
                },
                Ie = ({ cardId: e }) => {
                    const t = (0, he.useStripe)(),
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
                _e = { type: "CustomRetry", content: () => null },
                ve = "card-number-copy",
                we = { domId: "card-number", key: "issuingCardNumberDisplay", fontSize: o.default.theme.fontSizesPx.headline1 },
                Te = { domId: "card-expiry", key: "issuingCardExpiryDisplay", label: "EXP" },
                Se = { domId: "card-cvc", label: "CVV", key: "issuingCardCvcDisplay" },
                Be = [we, Te, Se],
                Re = ({ cardId: e, isLoading: t, refetch: a, setIsLoading: c }) => {
                    const [s, l] = n.useState(!1),
                        i = (0, he.useStripe)(),
                        d = (0, L.p)(),
                        m = n.useMemo(() => i?.elements?.({ fonts: [{ family: "ProtoMono", src: `url(${g.gF})` }] }), [i]),
                        [u] = Pe(),
                        p = Ie({ cardId: e }),
                        y = n.useCallback(() => {
                            d({ text: "Card number copied to clipboard." });
                        }, [d]);
                    n.useEffect(() => {
                        (async () => {
                            if (!p || !m || s) return;
                            const t = await u({ cardId: e, nonce: p });
                            Be.forEach(({ domId: a, fontSize: n, key: r }) => {
                                if (a) {
                                    m.create(r, { issuingCard: e, nonce: p, ephemeralKeySecret: t, style: { base: { color: "#000000", fontFamily: "ProtoMono", fontSize: `${n ?? o.default.theme.fontSizesPx.headline2}px` } } }).mount(`#${a}`);
                                }
                            });
                            const a = m.create("issuingCardCopyButton", { toCopy: "number", style: { base: { padding: `${o.default.theme.spacesPx.space24}px` } } });
                            a.mount(`#${ve}`),
                                a.on("click", y),
                                l(!0),
                                setTimeout(() => {
                                    c(!1);
                                }, ee.j);
                        })();
                    }, [m, e, u, a, p, c, s, y]);
                    const h = (0, Ce.Z)();
                    return n.createElement(r.Z, { style: Ae.cardDetails }, t ? n.createElement(be.Z, { size: "small", style: T.ZP.spinner }) : null, n.createElement(r.Z, { style: t ? Ae.hide : null }, n.createElement(r.Z, { id: we.domId, style: Ae.numberElement }), n.createElement(x.ZP, { color: "alwaysBlack", size: "headline2", style: [Ae.element, Ae.fontFamily] }, h), n.createElement(r.Z, { style: Ae.row }, n.createElement(r.Z, { style: Ae.stripeRow }, n.createElement(x.ZP, { color: "alwaysBlack", size: "headline2", style: Ae.fontFamily }, Se.label), n.createElement(r.Z, { id: Se.domId, style: Ae.stripeElement })), n.createElement(r.Z, { style: Ae.stripeRow }, n.createElement(x.ZP, { color: "alwaysBlack", size: "headline2", style: Ae.fontFamily }, Te.label), n.createElement(r.Z, { id: Te.domId, style: Ae.stripeElement }))), n.createElement(r.Z, { style: Ae.copyButton }, n.createElement(x.ZP, { color: "alwaysBlack" }, "Copy Number"), n.createElement(r.Z, { id: ve, style: Ae.copyButtonInner }))));
                },
                xe = (e) => {
                    const { stripePKey: t } = (0, fe.Z)(),
                        a = n.useMemo(() => (0, ke.loadStripe)(t), [t]);
                    return n.createElement(he.Elements, { stripe: a }, n.createElement(Re, e));
                },
                Ae = o.default.create((e) => ({ cardDetails: { position: "absolute", top: e.spaces.space48, start: e.spaces.space24, end: e.spaces.space24 }, row: { display: "flex", flexDirection: "row" }, stripeRow: { display: "flex", flexDirection: "row", gap: e.spaces.space8, flex: 1 }, copyButton: { marginTop: e.spaces.space32, backgroundColor: e.colors.alwaysDarkGray900, position: "relative", width: "fit-content", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.infinite, cursor: "pointer", overflow: "hidden" }, copyButtonInner: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "grid" }, numberElement: { marginBottom: e.spaces.space24 }, element: { marginBottom: e.spaces.space8 }, stripeElement: { flex: 1 }, hide: { display: "none" }, fontFamily: { fontFamily: "ProtoMono" } })),
                ze = { context: "STRIPE_ELEMENTS" },
                De = (e) => n.createElement(ge.N, { errorConfig: ze, fallback: _e }, n.createElement(Ee.B, { fallback: null }, n.createElement(xe, e))),
                Le = n.memo(De),
                He = { page: "money", section: "cards" },
                Fe = "Money",
                Me = "Card",
                je = (e) => {
                    const t = (0, T.jh)(),
                        { fetchCount: a, permissions: o } = (0, E.Z)({ fetchKey: "Payments" }),
                        [l, k] = n.useState(!1),
                        [b, f] = n.useState(!1),
                        { activeVirtualCards: I, cards: _, cashbackRate: B, inactivePhysicalCards: R } = (0, v.Z)(),
                        { handleDeferredPreferencesChange: x, isInProgress: A, preferences: z } = (0, w.Z)(),
                        D = n.useCallback(() => {
                            x("enable_card_payments", !1);
                        }, [x]),
                        L = n.useCallback(() => {
                            x("enable_card_payments", !0);
                        }, [x]),
                        H = !(0, S.aY)(o),
                        F = !(0, S.Fs)({ permissions: o, permission: h.d.RequestIssuedCard }),
                        M = !z.enable_card_payments,
                        j = I?.[0]?.core?.details_provider_reference?.id,
                        W = n.useCallback(() => {
                            f(!0), k(!0);
                        }, []),
                        O = n.useCallback(() => {
                            f(!1), k(!1);
                        }, []);
                    return n.createElement(n.Fragment, null, _ && _?.length > 0 ? n.createElement(n.Fragment, null, n.createElement(r.Z, { style: We.imageContainer }, n.createElement(r.Z, { style: [We.card, b ? We.flipped : null] }, n.createElement(r.Z, { style: b ? We.cardBack : null }, n.createElement(c.Z, { ariaLabel: Me, source: ee.q.v1.front, style: [We.image, b ? We.hide : null] }), n.createElement(c.Z, { ariaLabel: Me, source: ee.q.v1.back, style: [We.image, b ? null : We.hide] }), b && j ? n.createElement(Le, { cardId: j, isLoading: l, refetch: a, setIsLoading: k }) : null, !j || b || l ? null : n.createElement(s.ZP, { fontWeight: "normal", icon: n.createElement(i.default, null), onClick: W, size: "xSmall", style: We.showDetailsButton, type: "onMediaText" }, "Show card details"))), b && n.createElement(s.ZP, { disabled: l, fontWeight: "normal", icon: n.createElement(d.default, null), onClick: O, type: "secondaryFilled" }, "Hide card details")), M ? n.createElement(P.Z, { Icon: m.default, subtitle: "Future transactions would be declined.", title: "Your card is locked" }) : null, R && R?.length > 0 ? n.createElement(ye, { card: R[0], disabled: H }) : null, n.createElement(Q, { cashbackRate: B }), n.createElement(r.Z, { style: t.pivotTileContainer }, M ? n.createElement(Z.Z, { disabled: H, icon: u.default, isLoading: A, onClick: L, text: "Unlock card" }) : n.createElement(Z.Z, { disabled: H, icon: m.default, isLoading: A, onClick: D, text: "Lock card" }), n.createElement(Z.Z, { disabled: H, icon: p.default, link: F ? void 0 : g.SR, text: "Change pin" }), n.createElement(Z.Z, { disabled: F, icon: y.default, link: F ? void 0 : g.dI, text: "Get card help" }))) : n.createElement(C.Z, { to: g.F7 }));
                },
                We = o.default.create((e) => ({ image: { width: 370 * e.scaleMultiplier, height: 230 * e.scaleMultiplier, marginVertical: e.spaces.space12, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, showDetailsButton: { position: "absolute", bottom: e.spaces.space24, start: e.spaces.space4, marginHorizontal: "auto" }, imageContainer: { marginHorizontal: "auto", perspective: "1000px", perspectiveOrigin: "center" }, card: { position: "relative", transformStyle: "preserve-3d", transition: "transform 0.4s ease-out" }, cardBack: { transform: "rotateX(180deg)", transformStyle: "preserve-3d" }, flipped: { transform: "rotateX(180deg)" }, loader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space2 }, hide: { display: "none" } })),
                Oe = { context: "ACCOUNT_CARDS" },
                Ne = (e) => {
                    const { history: t } = e,
                        a = (0, T.jh)(),
                        r = n.useCallback(() => n.createElement(l.Z, { style: a.root, withWideContainer: !0 }, n.createElement(b.H, { errorConfig: Oe }, n.createElement(_.Z, null), n.createElement(b.H, { errorConfig: Oe }, n.createElement(je, e)))), [a.root, e]),
                        c = n.useCallback(() => t.goBack(), [t]);
                    return n.createElement(f.nO, { namespace: He }, n.createElement(k.Z, { backLocation: g.gp, documentTitle: Fe, history: t, isFullWidth: !0, onBackClick: c, primaryContent: r(), rightControl: n.createElement(I.Z, null), sidebarContent: null, title: Fe }));
                },
                Ue = n.memo(Ne);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-b8e4b837.7032248a.js.map
