"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d60a37be"],
    {
        43429: (e, t, a) => {
            a.d(t, { $W: () => s, DH: () => g, Fw: () => y, Ln: () => m, Ms: () => C, NU: () => v, Rj: () => f, Rz: () => c, a7: () => n, ah: () => i, cX: () => l, dX: () => u, hv: () => _, ic: () => r, q9: () => b, uc: () => p, w8: () => o, wC: () => d, wG: () => h });
            a(202784);
            const n = "Usd",
                r = 25,
                s = "xpayments-preset-all",
                o = (Object.freeze({ onboarding: "onboarding", upgradeToKycDocumentsVerified: "upgradeToKycDocumentsVerified" }), 280),
                c = Object.freeze({ credit: "credit", debit: "debit" }),
                i = (Object.freeze({ XPayments: "XPayments" }), Object.freeze({ reviewPane: "reviewPane", amountPane: "amountPane", successPane: "successPane" })),
                l = Object.freeze({ reviewPane: "reviewPane", participantPane: "participantPane", fundingPane: "fundingPane", statusPane: "statusPane" }),
                d = Object.freeze({ bankDeposit: "bankDeposit", bankWithdraw: "bankWithdraw", card: "card", atm: "atm" }),
                u = Object.freeze({ bank: "bank", card: "card", x: "x" }),
                m = 4e3,
                h = 4,
                p = "https://money.x.com/articles/terms-and-conditions",
                _ = "https://money.x.com/articles/privacy-policy",
                g = "https://money.x.com/articles/short-form-disclosure",
                f = "https://money.x.com/articles/usa-patriot-act",
                y = "https://money.x.com/articles/cardholder-agreement",
                b = Object.freeze({ initiate: "initiate-challenge", complete2fa: "2fa-complete-challenge", completeKyc: "kyc-complete-challenge", completeDocv: "docv-complete-challenge", completeSelfie: "selfie-complete-challenge" }),
                v = Object.freeze({ balance: "balance", credit: "credit", debit: "debit" }),
                C = Object.freeze({ interest: "interest", cashback: "cashback", deposit: "deposit", withdraw: "withdraw", atm: "atm" });
        },
        236086: (e, t, a) => {
            a.d(t, { Z: () => v });
            a(136728);
            var n = a(202784),
                r = a(107267),
                s = a(154003),
                o = a(167630),
                c = a(883229),
                i = a(782642),
                l = a(514639),
                d = a(445664),
                u = a(725516),
                m = a(413713),
                h = a(798350),
                p = a(32403),
                _ = a(727384);
            const g = ({ cardId: e, fromFailedTransaction: t }) => {
                    const a = (0, u.z)(),
                        c = (0, i.p)(),
                        g = (0, r.useHistory)(),
                        { permissions: f } = (0, d.Z)({ fetchKey: "Payments" }),
                        { canActivate: y } = (0, p.Z)({ paymentMethodId: e, fromFailedTransaction: t }),
                        [b, v] = (0, h.Z)(),
                        C = !(0, _.aY)(f),
                        P = n.useCallback(() => {
                            a.scribe({ page: "money", section: "activate-card", action: "click" }),
                                b({ cardId: e })
                                    .then(({ challengeId: e }) => {
                                        e && g.push(l.vw, { challengeId: e, challengeInitiator: l.kW.activateCard });
                                    })
                                    .catch((e) => {
                                        c({ text: (0, m.kJ)({ errors: e }).message });
                                    });
                        }, [a, b, e, g, c]);
                    return y ? n.createElement(s.ZP, { disabled: C || v, onPress: P, size: "medium", type: "primaryFilled" }, v ? n.createElement(o.Z, { size: "small" }) : "Activate card") : null;
                },
                f = { type: "CustomRetry", content: () => null },
                y = { context: "ACTIVATE_CARD" },
                b = (e) => n.createElement(c.N, { errorConfig: y, fallback: f }, n.createElement(n.Suspense, { fallback: null }, n.createElement(g, e))),
                v = n.memo(b);
        },
        920113: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(202784),
                r = a(325686),
                s = a(154003),
                o = a(829110),
                c = a(692165),
                i = a(19197),
                l = a(883229),
                d = a(952793),
                u = a(514639),
                m = a(137882),
                h = a(743080);
            const p = "Help Center",
                _ = "Settings",
                g = "Chat",
                f = { pathname: u.N6, external: !0, openInSameFrame: !1 },
                y = () => {
                    const e = (0, m.ig)({});
                    return e ? n.createElement(s.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: n.createElement(o.default, null), link: e, pullRight: !0, type: "primaryText" }) : null;
                },
                b = { type: "CustomRetry", content: () => null },
                v = { context: "MONEY_HEADER_ACTIONS" },
                C = () => (0, d.hC)("rweb_xchat_enabled") && n.createElement(l.N, { errorConfig: v, fallback: b }, n.createElement(n.Suspense, { fallback: null }, n.createElement(y, null))),
                P = () => n.createElement(r.Z, { style: h.ZP.actionButtons }, n.createElement(C, null), n.createElement(s.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: n.createElement(c.default, null), link: f, pullRight: !0, type: "primaryText" }), n.createElement(s.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: n.createElement(i.default, null), link: u.Sr, pullRight: !0, type: "primaryText" })),
                k = n.memo(P);
        },
        452275: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(107267),
                s = a(507651),
                o = a(952793),
                c = a(514639),
                i = a(412100);
            const l = () => {
                    const e = (0, r.useLocation)(),
                        { hasPendingTransactions: t } = (0, i.Z)(),
                        a = (0, o.hC)("payments_card_spend_enabled"),
                        l = n.useMemo(() => [{ to: { pathname: c.gp }, key: c.gp, label: "Account", isActive: () => e.pathname === c.gp }, a ? { to: { pathname: c.Tb }, key: c.Tb, label: "Card", isActive: () => e.pathname === c.Tb || e.pathname === c.F7 } : null, { to: { pathname: c.bR }, key: c.bR, label: "Activity", isActive: () => e.pathname === c.bR, badgePip: t }], [a, t, e.pathname]);
                    return n.createElement(s.Z, { isPillLink: !0, links: l });
                },
                d = n.memo(l);
        },
        805322: (e, t, a) => {
            a.d(t, { Z: () => me });
            a(136728);
            var n = a(202784),
                r = a(437429),
                s = a.n(r),
                o = a(107267),
                c = a(555950),
                i = a(736063),
                l = a(782642),
                d = a(514639),
                u = a(441484),
                m = a(725516),
                h = a(43429),
                p = a(727384),
                _ = a(325686),
                g = a(413722),
                f = a(980407),
                y = a(743080),
                b = a(56495),
                v = a(10622),
                C = a.n(v);
            a(585488);
            const P = b.Z,
                k = ({ challengeId: e, challengeResponse: t, environment: a, loginRequestId: n }) =>
                    C()(a, P, { challengeId: e, challengeResponse: t, loginRequestId: n }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.login_request,
                                a = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.error;
                            return { id: t?.id, error: a, verified: !!t?.verified };
                        });
            var w = a(731708),
                I = a(855488),
                Z = a(154003),
                E = a(167630);
            const S = ({ onClose: e, onSubmit: t }) => {
                    const a = (0, m.z)(),
                        [r, s] = n.useState(""),
                        [o, c] = n.useState(!1),
                        i = (0, y.jh)(),
                        l = n.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = n.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "money-2fa-app", action: "impression" });
                        }, [a]),
                        n.createElement(n.Fragment, null, n.createElement(_.Z, { style: i.container }, n.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter the code from your authenticator app"), n.createElement(I.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: y.ZP.paddingNone, testID: "code", type: "password", value: r })), n.createElement(_.Z, { style: i.footer }, n.createElement(Z.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? n.createElement(E.Z, null) : "Next")))
                    );
                },
                T = { context: "TwoFactorAppCode" };
            function A(e) {
                return n.createElement(i.H, { errorConfig: T }, n.createElement(S, e));
            }
            const F = n.memo(A),
                R = ({ onClose: e, onSubmit: t }) => {
                    const a = (0, m.z)(),
                        [r, s] = n.useState(""),
                        [o, c] = n.useState(!1),
                        i = (0, y.jh)(),
                        l = n.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = n.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "money-2fa-backup", action: "impression" });
                        }, [a]),
                        n.createElement(n.Fragment, null, n.createElement(_.Z, { style: i.container }, n.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter your backup code"), n.createElement(I.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: y.ZP.paddingNone, testID: "code", type: "password", value: r })), n.createElement(_.Z, { style: i.footer }, n.createElement(Z.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? n.createElement(E.Z, null) : "Next")))
                    );
                },
                x = { context: "TwoFactorBackupCode" };
            function M(e) {
                return n.createElement(i.H, { errorConfig: x }, n.createElement(R, e));
            }
            const q = n.memo(M),
                N = ({ error: e, onClose: t }) => {
                    const a = (0, m.z)(),
                        r = (0, y.jh)();
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "money-2fa-notsupported", action: "impression" });
                        }, [a]),
                        n.createElement(_.Z, { style: r.container }, n.createElement(w.ZP, { size: "title3", weight: "bold" }, "We were unable to verify you"), n.createElement(w.ZP, { color: "gray700" }, e))
                    );
                },
                z = { context: "TwoFactorNotSupported" };
            function H(e) {
                return n.createElement(i.H, { errorConfig: z }, n.createElement(N, e));
            }
            const D = n.memo(H);
            var L = a(158272);
            function O({ challenge: e, onClose: t, onSubmit: a }) {
                const r = (0, l.p)(),
                    s = (0, m.z)(),
                    o = (0, y.jh)();
                return (
                    n.useEffect(() => {
                        s.scribe({ page: "money", section: "money-2fa-passkey", action: "impression" });
                    }, [s]),
                    n.useEffect(() => {
                        (0, L.xG)(e)
                            .then((e) => {
                                a({ challengeResponse: e });
                            })
                            .catch(() => {
                                r({ text: L.Kh }), t();
                            });
                    }, [r, e, t, a]),
                    n.createElement(_.Z, { style: o.container }, n.createElement(w.ZP, { size: "title3", weight: "bold" }, (0, L.iW)() ? "Looks like you have a passkey enabled. Let’s use it to secure your Money." : L.z_))
                );
            }
            const U = ({ onClose: e, onSubmit: t }) => {
                    const a = (0, m.z)(),
                        [r, s] = n.useState(""),
                        [o, c] = n.useState(!1),
                        i = (0, y.jh)(),
                        l = n.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = n.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        n.useEffect(() => {
                            a && a.scribe({ page: "money", section: "money-2fa-sms", action: "impression" });
                        }, [a]),
                        n.createElement(n.Fragment, null, n.createElement(_.Z, { style: i.container }, n.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter the code we sent to your phone"), n.createElement(I.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: y.ZP.paddingNone, testID: "code", type: "password", value: r })), n.createElement(_.Z, { style: i.footer }, n.createElement(Z.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? n.createElement(E.Z, null) : "Next")))
                    );
                },
                W = { context: "TwoFactorSms" };
            function j(e) {
                return n.createElement(i.H, { errorConfig: W }, n.createElement(U, e));
            }
            const V = n.memo(j);
            var $ = a(800697),
                B = a(482924);
            const Y = $.Z,
                G = ({ challengeId: e }) => {
                    const { data: t } = (0, B.A)(Y, { challengeId: e }, { fetchPolicy: "network-only" }),
                        a = t?.viewer_v2?.xp_start_two_factor_auth_challenge;
                    if (!a) return {};
                    const { error: n, login_request: r } = a;
                    return { error: n, ...(r && { challenge: r.challenge, loginRequestId: r.id, twoFactor: { id: r.two_factor_auth_method.id, type: r.two_factor_auth_method.two_factor_type }, verified: !!r.verified }) };
                },
                Q = "Please try again later or contact support team.",
                X = "The request expired, try again.",
                J = "The 2FA method on your account has an issue. Go to the app Settings, verify it, and try again.",
                K = "Too many attempts, try again later.",
                ee = { DuplicatedRenameTwoFactorMethodDisplayName: J, ExpiredLoginVerification: X, FailureSmsCarrierDisabled: "We were not able to send an SMS to this carrier.", IneligibleFor2faAfterModification: J, InvalidRenameTwoFactorMethodDisplayName: J, LoginVerificationUserReactivationRequired: J, NoSecretForUser: J, NoTwoFactorAuthMethod: J, NotAllowed: J, NotValidForTokenExchange: J, NotYetApprovedLoginVerification: J, OfflineCodeSync: J, OverLoginVerificationAttemptLimit: K, OverLoginVerificationConvertLimit: K, OverResendLimit: K, SmsOverPerUserLimit: K, TwoFactorAuthMethodExpired: X, FailureSendingLoginVerificationRequest: Q, OverLoginVerificationStartLimit: K, SmsVerPerUserLimit: K, TwoFactorAuthMethodDoesNotExist: J },
                te = ({ challengeId: e, isNonModalScreen: t, onSuccess: a }) => {
                    const { challenge: r, error: c, loginRequestId: i, twoFactor: d } = G({ challengeId: e }),
                        u = (0, o.useHistory)(),
                        h = (0, l.p)(),
                        b = u.location?.state,
                        v = s()(),
                        C = (0, m.z)();
                    n.useEffect(() => {
                        C && C.scribe({ page: "money", section: "money-two-factor-auth", action: "impression" });
                    }, [C]);
                    const P = n.useCallback(
                            ({ challengeResponse: t }) =>
                                i
                                    ? k({ environment: v, challengeId: e, loginRequestId: i, challengeResponse: t })
                                          .then((e) => {
                                              const { error: t, id: n, verified: r } = e;
                                              return n === i && r ? a({ loginRequestId: i }) : t && h({ text: ee[t] ?? Q }), e;
                                          })
                                          .catch(() => {
                                              h({ text: Q });
                                          })
                                    : Promise.resolve(),
                            [i, v, e, a, h],
                        ),
                        { challengeInitiator: w, closePath: I } = b ?? {},
                        Z = n.useCallback(() => {
                            (0, p.qc)({ environment: v, closePath: I, challengeInitiator: w, history: u });
                        }, [w, I, v, u]),
                        E = n.useMemo(() => (d?.type === g.O.BackupCode ? n.createElement(q, { onClose: Z, onSubmit: P }) : r && d?.type === g.O.Passkey ? n.createElement(O, { challenge: r, onClose: Z, onSubmit: P }) : d?.type === g.O.Sms ? n.createElement(V, { onClose: Z, onSubmit: P }) : d?.type === g.O.Totp ? n.createElement(F, { onClose: Z, onSubmit: P }) : n.createElement(D, { error: c ? (ee[c] ?? Q) : Q, onClose: Z })), [r, c, Z, P, d?.type]);
                    return t ? n.createElement(_.Z, { style: y.ZP.nonModalMargin }, E) : n.createElement(f.Z, { backButtonType: "close", history: u, onBackClick: Z }, E);
                },
                ae = { context: "VerifyTwoFactorAuth" };
            function ne(e) {
                return n.createElement(i.H, { errorConfig: ae }, n.createElement(te, e));
            }
            const re = n.memo(ne);
            var se = a(160144);
            const oe = { [d.kW.forgotPin]: "You PIN has been successfuly changed.", [d.kW.changeCardPin]: "You PIN has been successfuly changed." },
                ce = { [d.kW.forgotPin]: d.P_.forgotPin, [d.kW.changeCardPin]: d.P_.changeCardPin },
                ie = [d.kW.forgotPin, d.kW.changeCardPin],
                le = ({ challengeId: e, challengeInitiator: t, onSuccess: a }) => {
                    const r = (0, o.useHistory)(),
                        i = (0, m.z)(),
                        _ = (0, l.p)(),
                        g = r.location?.state,
                        { challengeId: f, challengeInitiator: y, closePath: b, message: v, recordId: C, redirectPath: P, redirectState: k, successMessage: w } = g ?? {},
                        [I, Z] = n.useState(e ?? f),
                        E = t ?? y,
                        [S, T] = n.useState(v ?? h.q9.initiate),
                        [A, F] = n.useState(),
                        [R, x] = n.useState(!1),
                        M = s()(),
                        q = E === d.kW.auth,
                        N = (E ? ce[E] : void 0) ?? d.P_.challenge,
                        z = ie.includes(E),
                        H = (E ? oe[E] : void 0) ?? w,
                        D = q,
                        L = n.useCallback((e) => {
                            F(e.loginRequestId), T(h.q9.complete2fa), x(!1);
                        }, []),
                        O = n.useCallback(
                            (e) => {
                                const { authStatus: t, challengeId: n, message: s } = e.data;
                                switch (s) {
                                    case se.T.success:
                                        q && 1 === t && u.Z.updateSessionStatus(c.c.Active), C ? (0, p.Se)(M, C) : E === d.kW.activateCard ? (0, p.uN)(M) : (0, p.J$)(M), P ? r.replace(P, k) : a ? a() : r.goBack(), H && _({ text: H });
                                        break;
                                    case se.T.docvChallenge:
                                        r.replace(d.AU.tier3.verifyIdentityPath, { ...g, challengeId: I ?? n, challengeInitiator: E });
                                        break;
                                    case se.T.kycChallenge:
                                        r.replace(d.AU.tier2.verifyIdentityPath, { ...g, challengeId: I ?? n, challengeInitiator: E });
                                        break;
                                    case se.T.selfieChallenge:
                                        r.replace(d.AU.selfie.verifyIdentityPath, { ...g, challengeId: I ?? n, challengeInitiator: E });
                                        break;
                                    case se.T.twoFactorChallenge:
                                        Z(n), x(!0);
                                        break;
                                    case se.T.forgotPin:
                                        r.push(d.jR, { challengeInitiator: d.kW.forgotPin });
                                        break;
                                    case se.T.invalidChallenge:
                                        q && u.Z.fetchNewSession();
                                        break;
                                    case se.T.close:
                                        (0, p.qc)({ environment: M, closePath: b, challengeInitiator: E, history: r });
                                }
                            },
                            [q, C, E, P, a, H, r, g, I, M, b, k, _],
                        );
                    return (
                        n.useEffect(() => {
                            i && i.scribe({ page: "money", section: "verify-challenge", action: "impression" });
                        }, [i]),
                        n.useEffect(
                            () => (
                                E === d.kW.auth && u.Z.loadChallenge(),
                                () => {
                                    E === d.kW.auth && u.Z.closeChallenge();
                                }
                            ),
                            [E],
                        ),
                        n.createElement(n.Fragment, null, I && R ? n.createElement(re, { challengeId: I, isNonModalScreen: D, onSuccess: L }) : null, I || z ? n.createElement(se.Z, { closePath: b, eventCallback: O, isBackgroundHidden: R, isNonModalScreen: D, linkType: N, payload: { challengeId: I, loginRequestId: A, message: S, embeddedFlow: D }, redirectPath: P, redirectState: k }) : null)
                    );
                },
                de = { context: "VerifyChallenge" };
            function ue(e) {
                return n.createElement(i.H, { errorConfig: de }, n.createElement(le, e));
            }
            const me = n.memo(ue);
        },
        160144: (e, t, a) => {
            a.d(t, { T: () => k, Z: () => S });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                r = a(325686),
                s = a(437429),
                o = a.n(s),
                c = a(107267),
                i = a(167630),
                l = a(362075),
                d = a(392237),
                u = a(980407),
                m = a(943914),
                h = a(655352),
                p = a(163889),
                _ = a(514639),
                g = a(412450),
                f = a(441484),
                y = a(99387),
                b = a(743080),
                v = a(727384);
            a(571372);
            class C {
                constructor() {
                    if (C.instance) throw new Error("Please avoid instantiating this singleton.");
                }
                static _updateActiveHandler(e, t) {
                    t !== C.activeHandler && (C.activeHandler && (window.removeEventListener("message", C.activeHandler), (C.activeHandler = void 0)), t && (window.addEventListener("message", t), (C.activeHandler = t)));
                }
                static addHandler(e, t) {
                    C.handlers.add(t);
                    const { isInlineFrame: a } = _.QU[e];
                    (C.activeHandler && a) || C._updateActiveHandler(e, t);
                }
                static removeHandler(e, t) {
                    if ((C.handlers.delete(t), C.activeHandler === t)) {
                        const t = C.handlers.values().next().value;
                        C._updateActiveHandler(e, t);
                    }
                }
            }
            C.handlers = new Set();
            const P = ({ allowedOrigin: e, handler: t, linkType: a }) => {
                    const r = n.useCallback(
                        (a) => {
                            a.origin === e && t(a);
                        },
                        [t, e],
                    );
                    n.useEffect(() => (C.addHandler(a, r), () => C.removeHandler(a, r)), [a, r]);
                },
                k = Object.freeze({ changePhone: "change-phone", success: "success", failure: "failure", ineligible: "ineligible", pendingReview: "pending-review", redirect: "redirect", close: "close", ready: "ready", initPorts: "initPorts", invalidChallenge: "invalid-challenge", docvChallenge: "challenge-docv-required", kycChallenge: "challenge-kyc-required", selfieChallenge: "challenge-selfie-required", twoFactorChallenge: "challenge-2fa-required", accountNumbercopiedToClipboard: "account-number-copied-to-clipboard", routingNumbercopiedToClipboard: "routing-number-copied-to-clipboard", edit: "edit", forgotPin: "forgot-pin", kyc: "kyc", stepUpDocv: "stepUpDocv" }),
                w = (0, v.bI)(),
                I = ({ allowClipboardWrite: e, iframeUrl: t, isBackgroundHidden: a, isInlineFrame: s, isNonModalScreen: o }) => {
                    const d = (0, c.useHistory)(),
                        [m, _] = n.useState(!1),
                        g = (0, h.ZP)(),
                        f = g ? T.paddingSmall : null,
                        y = n.useCallback(() => {
                            _(!0);
                        }, []),
                        v = n.createElement(r.Z, { style: a ? T.hide : o ? [b.ZP.nonModalMargin, T.nonModal] : T.modal }, t && n.createElement(n.Fragment, null, !m && n.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" }), n.createElement(l.Z, { allowClipboardWrite: e, allowForms: !0, onLoad: y, reportError: p.ZP, src: t, style: m ? [T.idvIframe, s ? void 0 : f] : T.hide, title: "Money" })));
                    return o || s || a ? v : n.createElement(u.Z, { history: d, renderHeader: () => null }, n.createElement(r.Z, { style: g ? T.modalContainer : T.modalContainerNarrow }, v));
                },
                Z = (e) => {
                    const { additionalParams: t, linkType: a = _.P_.onboarding, redirectPath: r, errorPath: s, redirectState: i, closePath: l, eventCallback: d, payload: u, isNonModalScreen: m, isBackgroundHidden: h, challengeInitiator: p, challengeId: b, setPort: C } = e,
                        Z = (0, c.useHistory)(),
                        { paymentsOrigin: E } = (0, g.Z)(),
                        S = f.Z.getSession(),
                        T = f.Z.getProviderToken(),
                        A = (0, v.gh)(),
                        [F, R] = n.useState(!1),
                        x = o()(),
                        { allowClipboardWrite: M, defaultClosePath: q, invalidateOnClose: N, isInlineFrame: z, path: H, redirectOnCompletion: D } = _.QU[a],
                        L = n.useCallback(
                            (e) => {
                                const { errors: t, message: a, url: n } = e.data;
                                switch (a) {
                                    case k.changePhone:
                                        Z.push("/settings/phone");
                                        break;
                                    case k.success:
                                        D && R(!0);
                                        break;
                                    case k.failure:
                                        D && Z.replace(s ?? _.D$, { errors: t });
                                        break;
                                    case k.ineligible:
                                        (0, v.J$)(x), Z.replace(_.R);
                                        break;
                                    case k.pendingReview:
                                        (0, v.J$)(x), Z.replace(_.vr);
                                        break;
                                    case k.redirect:
                                        w && (window.location.href = n);
                                        break;
                                    case k.close:
                                        N && (0, v.J$)(x), Z.replace(l ?? q);
                                }
                                d?.(e);
                            },
                            [d, Z, D, x, N, l, q, s],
                        ),
                        O = n.useCallback(
                            (e) => {
                                const { message: t } = e.data;
                                switch (t) {
                                    case k.initPorts: {
                                        const t = e.ports?.[0];
                                        t && (C?.(t), u && t.postMessage(u), (t.onmessage = d ?? L));
                                        break;
                                    }
                                }
                                L(e);
                            },
                            [L, d, u, C],
                        );
                    P({ allowedOrigin: E, handler: O, linkType: a });
                    const U = n.useMemo(() => {
                        if (!S || !E || !T) return;
                        const e = new Map();
                        return (
                            t?.forEach(({ key: t, value: a }) => {
                                e.set(t, a);
                            }),
                            w &&
                                e.set(
                                    "redirectUrl",
                                    (({ challengeId: e, challengeInitiator: t }) => {
                                        const a = new URL(`https://${window.location.host}${_.$l}`);
                                        return e && a.searchParams.set("challengeId", e), t && a.searchParams.set("challengeInitiator", t), a.href;
                                    })({ challengeId: b, challengeInitiator: p }),
                                ),
                            (0, v.uG)({ basePath: `/${H}`, xPaymentsSession: S, theme: A, paymentsOrigin: E, moreSearchParams: e, providerToken: T })
                        );
                    }, [S, E, T, t, H, A, b, p]);
                    return F ? n.createElement(y.default, { challengeId: b, challengeInitiator: p, linkType: a, redirectPath: r, redirectState: i }) : n.createElement(I, { allowClipboardWrite: M, iframeUrl: U, isBackgroundHidden: h, isInlineFrame: z, isNonModalScreen: m });
                },
                E = (e) => {
                    const t = n.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" });
                    return n.createElement(m.B, { fallback: t }, n.createElement(Z, e));
                },
                S = n.memo(E),
                T = d.default.create((e) => ({ idvIframe: { width: "100%", height: "100%", paddingTop: "0px", overflow: "hidden" }, paddingSmall: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, hide: { display: "none" }, modal: { width: "100%", height: "100%" }, modalContainer: { width: 500, height: 600 }, modalContainerNarrow: { width: "100%", height: "100%" }, nonModal: { minHeight: 350 } }));
        },
        412100: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(297679),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(312771),
                c = a(127218),
                i = a(43429);
            const l = n.Z,
                d = () => {
                    const { data: e, fetchNext: t, refetch: a, subsequentFetchStatus: n } = (0, c.C)(l, { count: i.ic }),
                        r = e?.get_payments_customer_actions?.__id ?? "useActionableItemsQuery_TransactionActions_slice";
                    return (
                        s()([r], () => {
                            a();
                        }),
                        { data: e, refetch: a, isRefreshing: n === o.ZP.LOADING, fetchNext: t, hasNotices: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsCustomerNotice" === e?.__typename), hasPendingTransactions: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsTransaction" === e?.__typename) }
                    );
                };
        },
        798350: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(914507),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s);
            const c = n.Z,
                i = () => {
                    const [e, t] = o()(c);
                    return [
                        r.useCallback(
                            ({ cardId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { payment_method_id: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.activate_issued_card?.errors,
                                                s = e?.activate_issued_card?.challenge_id;
                                            s ? a({ challengeId: s }) : n(r || t);
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        423475: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(666536),
                s = a(43429),
                o = a(727384),
                c = a(458254),
                i = (a(585488), a(351743)),
                l = a.n(i);
            const d = c.Z,
                u = () => {
                    const [e, t] = l()(d);
                    return [
                        n.useCallback(
                            ({ amount: t, creditMethod: a, currency: n, debitMethod: r }) =>
                                new Promise((s, o) => {
                                    e({
                                        variables: { base_amount: { currency: n, local_micro: t }, transfer_method_type: { pull_transfer_method_type: a, push_transfer_method_type: r } },
                                        onCompleted: (e, a) => {
                                            const r = e?.calculate_transaction_fees?.errors,
                                                c = e?.calculate_transaction_fees,
                                                i = c?.base_amount?.local_micro,
                                                l = c?.amount?.local_micro,
                                                d = c?.total_fees?.local_micro,
                                                u = c?.base_amount?.currency;
                                            c ? s({ baseAmount: i ?? t, totalAmount: l, currency: u ?? n, feeAmount: d }) : r && o(r);
                                        },
                                        onError: o,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                m = (e) => {
                    const [t] = u(),
                        [a, c] = n.useState({ baseAmount: "", currency: s.a7 }),
                        [i, l] = n.useState(!0),
                        d = n.useCallback(
                            ({ newAccount: a, newAmount: n }) => {
                                if (a && n) {
                                    const r = (0, o.Dc)(n),
                                        i = (0, o.V9)(a),
                                        d = r.toString(),
                                        u = e === s.Rz.debit ? i.debitMethod : void 0,
                                        m = e === s.Rz.credit ? i.creditMethod : void 0;
                                    m || u
                                        ? t({ amount: d, currency: s.a7, debitMethod: u, creditMethod: m })
                                              .then((e) => {
                                                  c(e);
                                              })
                                              .catch(() => {
                                                  c({ baseAmount: d, currency: s.a7 });
                                              })
                                              .finally(() => {
                                                  l(!1);
                                              })
                                        : (c({ baseAmount: d, currency: s.a7 }), l(!1));
                                }
                            },
                            [t, e],
                        ),
                        m = n.useMemo(() => (0, r.Z)((e) => d(e), 500), [d]);
                    return { amountWithFees: a, feeCalcInProgress: i, calculateFee: d, debouncedCalculateFee: m };
                };
        },
        500386: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(663090),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(727384);
            const i = n.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        r.useCallback(
                            ({ recordId: t, transactionId: a }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { transfer_id: a },
                                        onCompleted: (e, t) => {
                                            const a = e?.cancel_transfer?.id,
                                                s = e?.cancel_transfer?.challenge_id,
                                                o = e?.cancel_transfer?.transaction_status,
                                                c = e?.cancel_transfer?.errors;
                                            a && o ? n({ transactionId: a, status: o, challengeId: s }) : r(c || t);
                                        },
                                        updater: (e, a) => {
                                            const n = a?.cancel_transfer?.transaction_status,
                                                r = a?.cancel_transfer?.reason_code;
                                            (0, c.H_)(e, { status: n, recordId: t, reasonCode: r });
                                        },
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        604347: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(597785),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(727384);
            const i = n.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        r.useCallback(
                            ({ recordId: t, transactionId: a }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { transfer_id: a },
                                        onCompleted: (e, t) => {
                                            const a = e?.cancel_request_transfer?.id,
                                                s = e?.cancel_request_transfer?.transaction_status,
                                                o = e?.cancel_request_transfer?.challenge_id,
                                                c = e?.cancel_request_transfer?.errors;
                                            a && s ? n({ transactionId: a, status: s, challengeId: o }) : r(c || t);
                                        },
                                        updater: (e, a) => {
                                            const n = a?.cancel_request_transfer?.transaction_status,
                                                r = a?.cancel_request_transfer?.reason_code;
                                            (0, c.H_)(e, { status: n, recordId: t, reasonCode: r });
                                        },
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        607929: (e, t, a) => {
            a.d(t, { C7: () => m, bf: () => u });
            var n = a(990563),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(402229),
                i = a(727384);
            const l = n.Z,
                d = ({ decision: e }) => {
                    const [t, a] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: a, transactionId: n }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transfer_id: n, decision: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.claim_transfer?.id,
                                                n = e?.claim_transfer?.transaction_status,
                                                o = e?.claim_transfer?.challenge_id,
                                                c = e?.claim_transfer?.errors;
                                            a && n ? r({ transactionId: a, status: n, challengeId: o }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const n = t?.claim_transfer?.transaction_status,
                                                r = t?.claim_transfer?.reason_code;
                                            (0, i.H_)(e, { status: n, recordId: a, reasonCode: r });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        a,
                    ];
                },
                u = () => d({ decision: c.R.ClaimTransferDecisionAccept }),
                m = () => d({ decision: c.R.ClaimTransferDecisionReject });
        },
        202241: (e, t, a) => {
            a.d(t, { F8: () => m, yA: () => u });
            var n = a(708154),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(402311),
                i = a(727384);
            const l = n.Z,
                d = ({ decision: e }) => {
                    const [t, a] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: a, transactionId: n }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transaction_id: n, decision: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.confirm_unrecognized_payment?.transaction,
                                                n = a?.id,
                                                o = a?.transaction_status,
                                                c = e?.confirm_unrecognized_payment?.errors,
                                                i = e?.confirm_unrecognized_payment?.challenge_id;
                                            n && o ? r({ transactionId: n, status: o, challengeId: i }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const n = t?.confirm_unrecognized_payment?.transaction,
                                                r = n?.transaction_status,
                                                s = n?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: a, reasonCode: s });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        a,
                    ];
                },
                u = () => d({ decision: c.n.UnrecognizedPaymentDecisionAccept }),
                m = () => d({ decision: c.n.UnrecognizedPaymentDecisionReject });
        },
        856228: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(942512),
                r = a(202784),
                s = (a(585488), a(353391)),
                o = a.n(s),
                c = a(312771),
                i = a(482924);
            const l = n.Z,
                d = () => {
                    const { data: e, refetch: t, refetchStatus: a } = (0, i.A)(l, {}),
                        n = r.useMemo(() => ((e) => (e.get_payments_customer_tasks && e.get_payments_customer_tasks?.items) || [])(e), [e]),
                        [s, d] = r.useState(n),
                        u = e?.get_payments_customer_tasks?.__id ?? "useCustomerTasksCarouselQuery_customer_tasks";
                    return (
                        r.useEffect(() => {
                            a !== c.iF.LOADING && d(n);
                        }, [n, a]),
                        o()([u], () => {
                            t();
                        }),
                        { customerTasks: s, refetch: t, setCustomerTasks: d }
                    );
                };
        },
        467734: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(125363),
                r = a(390387);
            const s = ({ senderId: e }) => (0, n.v9)(r._h) === e;
        },
        226595: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(642004),
                r = a(87877),
                s = a(922281),
                o = a(226332);
            const c = () => {
                const { activePaymentMethods: e, paymentMethods: t } = (0, o.Z)(r.U.PaymentMethodFilterSpending),
                    a = e?.filter((e) => e.core?.details?.issued_card_type === n.W.IssuedCardTypeVirtual);
                return { cards: t, activeVirtualCards: a, activeCards: e, inactivePhysicalCards: t?.filter((e) => e.core?.details?.status === s.D.Inactive && e.core?.details?.issued_card_type === n.W.IssuedCardTypePhysical), cashbackRate: a?.[0]?.core?.details?.cashback?.rate };
            };
        },
        629015: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(40969),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(952793),
                i = a(441484),
                l = a(698478);
            const d = n.Z,
                u = () => {
                    const e = (0, c.hC)("payments_enabled"),
                        [t, a] = r.useState(),
                        [n, s] = r.useState(!1),
                        [u, m] = o()(d);
                    r.useEffect(() => {
                        u({
                            variables: {},
                            onCompleted: (e) => {
                                !!e?.check_transfers_eligibility?.eligible && i.Z.fetchNewSession
                                    ? i.Z.fetchNewSession().finally(() => {
                                          a(e);
                                      })
                                    : a(e);
                            },
                            onError: () => {
                                s(!0);
                            },
                        });
                    }, [u]);
                    const h = t?.check_transfers_eligibility,
                        p = !!h?.eligible,
                        { permissions: _, requirements: g, roles: f } = h ?? {};
                    return { isEligible: e && p, hasLoaded: !m && (!!t || n), requirements: g, roles: f, permissions: _, paymentsRedirectPath: (0, l.rW)({ roles: f, permissions: _ }) };
                };
        },
        934265: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(183276),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(940211),
                c = a(482924);
            const i = n.Z,
                l = () => {
                    const { data: e, refetch: t, refetchStatus: a } = (0, c.A)(i, {}, { fetchPolicy: "store-and-network" }),
                        n = e.get_accounts?.find((e) => e.identifier === o.b.UserMain),
                        r = e.get_accounts?.find((e) => e.identifier === o.b.Cashback),
                        l = e.get_accounts?.find((e) => e.identifier === o.b.UserInterest),
                        d = n?.__id ?? "get_accounts";
                    return (
                        s()([d], () => {
                            t();
                        }),
                        { balance: n?.balance, refetch: t, refetchStatus: a, cashback: r?.balance, interest: l?.interest_details }
                    );
                };
        },
        348340: (e, t, a) => {
            a.d(t, { Z: () => l, b: () => c });
            a(901951);
            var n = a(576751),
                r = (a(585488), a(698478)),
                s = a(930196),
                o = a(727384);
            const c = (e) => (t) => {
                    const a = t?.get_payments_documents?.find((t) => {
                            const a = (0, o.Qu)(t.start_date),
                                n = `${a.getFullYear()}-${a.getMonth()}`;
                            return e && n && n === e;
                        }),
                        { url: n, url_expiry_time_millis: s } = a ?? {};
                    (n && s && !(0, r.x5)(s)) || window.open(n, "_blank");
                },
                i = n.Z,
                l = ({ type: e }) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, s.d)(i, { document_type: e }),
                        r = t?.get_payments_documents;
                    return {
                        formattedDocuments: r?.reduce((e, t) => {
                            const a = `${(0, o.Qu)(t.start_date).getFullYear()}`;
                            let n = e.find((e) => e.year === a);
                            return n || ((n = { year: a, documents: [] }), e.unshift(n)), n.documents.unshift(t), e;
                        }, []),
                        refetch: a,
                        refetchStatus: n,
                    };
                };
        },
        137882: (e, t, a) => {
            a.d(t, { bR: () => c, ig: () => o, vN: () => i });
            a(543673), a(240753), a(128399);
            var n = a(412450),
                r = a(125363),
                s = a(390387);
            const o = (e) => {
                    const { supportUserId: t } = (0, n.Z)(),
                        a = (0, r.v9)(s._h);
                    return t && a ? `/i/chat/${a}-${t}` : null;
                },
                c = ({ txId: e }) => {
                    const { supportUrl: t } = (0, n.Z)(),
                        a = new URL(t);
                    return e && a.searchParams.set("tx_id", e), a.href;
                },
                i = ({ reportedHandle: e, txId: t }) => {
                    const { reportUrl: a } = (0, n.Z)(),
                        r = new URL(a);
                    return t && r.searchParams.set("tx_id", t), e && r.searchParams.set("tx_reported_handle", `@${e}`), r.href;
                };
        },
        329923: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(204133),
                r = (a(585488), a(712696)),
                s = a.n(r),
                o = a(727384);
            const c = n.Z,
                i = () => {
                    const e = s()(c, {}),
                        t = e?.get_payments_invitation_details,
                        a = t?.invitation_amount_local_micro,
                        n = t?.currency,
                        r = t?.invitation_count,
                        i = a ? (0, o.vw)({ amount: a, currency: n }) : null;
                    return { invitationCount: r ? parseInt(r, 10) : null, formattedAmount: i };
                };
        },
        889738: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(924592),
                r = (a(585488), a(482924));
            const s = n.Z,
                o = () => {
                    const { data: e, refetch: t, refetchStatus: a } = (0, r.A)(s, {}),
                        n = e?.get_customer?.limits;
                    return { limits: n, refetch: t, refetchStatus: a };
                };
        },
        226332: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(703325),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(87877),
                c = a(922281),
                i = a(482924);
            const l = n.Z,
                d = (e) => {
                    const { data: t, refetch: a, refetchStatus: n } = (0, i.A)(l, { filter: e ?? o.U.PaymentMethodFilterFunding, withIssuedSpend: e === o.U.PaymentMethodFilterSpending }),
                        r = t?.get_payment_methods_v2,
                        d = r?.filter((e) => e.core?.details?.status === c.D.Active),
                        u = r?.filter((e) => e.core?.details?.status === c.D.Active || e.core?.details?.status === c.D.LoginRequired),
                        m = r?.[0]?.__id ?? t?.__id;
                    return (
                        s()([m], () => {
                            a();
                        }),
                        { paymentMethods: r, activePaymentMethods: d, usablePaymentMethods: u, refetchStatus: n }
                    );
                };
        },
        529438: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(264462),
                r = (a(585488), a(482924));
            const s = n.Z,
                o = () => {
                    const { data: e } = (0, r.A)(s, {}),
                        t = e?.get_customer?.name;
                    return t;
                };
        },
        24568: (e, t, a) => {
            a.d(t, { Z: () => v });
            a(136728);
            var n = a(215285),
                r = a(202784),
                s = (a(585488), a(353391)),
                o = a.n(s),
                c = a(107267),
                i = a(782642),
                l = a(514639),
                d = a(312771),
                u = a(482924),
                m = a(746523),
                h = a(351743),
                p = a.n(h),
                _ = a(727384);
            const g = m.Z,
                f = () => {
                    const [e, t] = p()(g);
                    return [
                        r.useCallback(
                            ({ preferences: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { preferences: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.update_customer_preferences?.errors,
                                                s = e?.update_customer_preferences?.challenge_id;
                                            r ? n(r) : a({ challengeId: s });
                                        },
                                        updater: _.Oc,
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                y = "Your setting has been successfully updated!",
                b = n.Z,
                v = () => {
                    const { data: e, refetch: t, refetchStatus: a } = (0, u.A)(b, {}),
                        n = (0, c.useHistory)(),
                        s = (0, i.p)(),
                        m = e?.get_customer?.preferences,
                        h = r.useMemo(() => ({ require_pin_to_create_transactions: !!m?.require_pin_to_create_transactions, require_pin_to_unlock: !!m?.require_pin_to_unlock, enable_bill_pay: !!m?.enable_bill_pay, require_pin_to_link_payment_method: !!m?.require_pin_to_link_payment_method, only_receive_transfer_from_following: !!m?.only_receive_transfer_from_following, only_allow_request_from_following: !!m?.only_allow_request_from_following, enable_card_payments: !!m?.enable_card_payments }), [m]),
                        [p, _] = r.useState(h),
                        [g, v] = f(),
                        C = r.useCallback(
                            (e, t) => {
                                g({ preferences: { ...p, [e]: t } })
                                    .then(({ challengeId: e }) => {
                                        e ? n.push(l.vw, { challengeId: e, successMessage: y, challengeInitiator: l.kW.preference }) : s({ text: y });
                                    })
                                    .catch(() => {
                                        s({ text: "Something went wrong. Please try again later." }), _((a) => ({ ...a, [e]: !t }));
                                    });
                            },
                            [s, g, n, p],
                        ),
                        P = r.useCallback(
                            (e, t) => {
                                _((a) => ({ ...a, [e]: t })), C(e, t);
                            },
                            [C],
                        ),
                        k = r.useCallback(
                            (e, t) => {
                                C(e, t);
                            },
                            [C],
                        ),
                        w = e?.get_customer?.__id ?? "get_customer";
                    return (
                        r.useEffect(() => {
                            a !== d.iF.LOADING && _(h);
                        }, [h, a]),
                        o()([w], () => {
                            t();
                        }),
                        { preferences: p, refetch: t, refetchStatus: a, handlePreferencesChange: P, handleDeferredPreferencesChange: k, isInProgress: v }
                    );
                };
        },
        557159: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(177405),
                r = (a(585488), a(482924));
            const s = n.Z,
                o = () => {
                    const { data: e } = (0, r.A)(s, {}),
                        t = e?.get_customer?.region;
                    return t;
                };
        },
        464978: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(192828),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(482924);
            const c = n.Z,
                i = (e) => {
                    const { data: t, refetch: a } = (0, o.A)(c, { transaction_id: e }),
                        n = t.get_transaction_by_id?.__id ?? "get_transaction_by_id";
                    return (
                        s()([n], () => {
                            a();
                        }),
                        t
                    );
                };
        },
        190940: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(727384),
                r = a(467734),
                s = a(464978);
            const o = (e) => {
                const { get_transaction_by_id: t } = (0, s.Z)(e),
                    { amount_local_micro: a, currency: o, details: c, transaction_status: i, transaction_type: l } = t ?? {},
                    d = c?.sender_results?.result,
                    u = d?.core?.name ?? "",
                    m = a ? (0, n.vw)({ amount: a, currency: o }) : null,
                    h = (0, r.Z)({ senderId: d?.rest_id });
                return [(0, n.M9)({ status: i, transactionType: l, isViewerSender: h }), u && m ? { name: u, formattedAmount: m } : null];
            };
        },
        825941: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(258074),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(127218),
                c = a(43429);
            const i = n.Z,
                l = (e) => {
                    const t = { count: c.ic };
                    e?.searchFilterId && (t.search_filter_id = e?.searchFilterId);
                    const { data: a, fetchNext: n, refetch: r } = (0, o.C)(i, t, { fetchPolicy: "store-and-network" }),
                        l = a?.get_transactions?.__id ?? "usePaymentsTransactionsListQuery_TransactionList_slice";
                    return (
                        s()([l], () => {
                            r();
                        }),
                        { data: a, fetchNext: n, refetch: r }
                    );
                };
        },
        32403: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(526274),
                r = (a(585488), a(353391)),
                s = a.n(r),
                o = a(633806),
                c = a(642004),
                i = a(922281),
                l = a(482924);
            const d = n.Z,
                u = ({ fromFailedTransaction: e, paymentMethodId: t }) => {
                    const { data: a, refetch: n, refetchStatus: r } = (0, l.A)(d, { payment_method_id: t }),
                        u = a?.get_payment_method,
                        m = u?.__id ?? "get_payment_method";
                    s()([m], () => {
                        n();
                    });
                    const h = u?.shipping,
                        p = h?.status,
                        _ = h?.eta_millis,
                        g = _ ? new Date(parseInt(_, 10)) : void 0,
                        f = !!g && g < new Date();
                    return { data: a, refetchStatus: r, canActivate: u?.core?.details?.status === i.D.Inactive && u?.core?.details?.issued_card_type === c.W.IssuedCardTypePhysical && (p === o.$.IssuedCardShippingStatusDelivered || (p === o.$.IssuedCardShippingStatusShipped && (e || f))), isEtaElapsed: f };
                };
        },
        891414: (e, t, a) => {
            a.d(t, { C7: () => m, iP: () => u });
            var n = a(922524),
                r = a(202784),
                s = (a(585488), a(351743)),
                o = a.n(s),
                c = a(364539),
                i = a(727384);
            const l = n.Z,
                d = ({ decision: e }) => {
                    const [t, a] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: a, transactionId: n }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transfer_id: n, decision: e },
                                        onCompleted: (e, t) => {
                                            const a = e?.respond_to_request_transfer?.id,
                                                n = e?.respond_to_request_transfer?.transaction_status,
                                                o = e?.respond_to_request_transfer?.errors,
                                                c = e?.respond_to_request_transfer?.challenge_id;
                                            a && n ? r({ transactionId: a, status: n, challengeId: c }) : s(o || t);
                                        },
                                        updater: (e, t) => {
                                            const n = t?.respond_to_request_transfer?.transaction_status,
                                                r = t?.respond_to_request_transfer?.reason_code;
                                            (0, i.H_)(e, { status: n, recordId: a, reasonCode: r });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        a,
                    ];
                },
                u = () => d({ decision: c.m.RequestTransferDecisionAccept }),
                m = () => d({ decision: c.m.RequestTransferDecisionReject });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d60a37be.34d62a5a.js.map
