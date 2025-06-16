"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d60a37be"],
    {
        43429: (e, t, n) => {
            n.d(t, { $W: () => s, DH: () => g, Fw: () => y, Ln: () => m, Ms: () => P, NU: () => v, Rj: () => f, Rz: () => c, a7: () => a, ah: () => i, cX: () => l, dX: () => u, hv: () => p, ic: () => r, q9: () => b, uc: () => _, w8: () => o, wC: () => d, wG: () => h });
            n(202784);
            const a = "Usd",
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
                _ = "https://money.x.com/articles/terms-and-conditions",
                p = "https://money.x.com/articles/privacy-policy",
                g = "https://money.x.com/articles/short-form-disclosure",
                f = "https://money.x.com/articles/usa-patriot-act",
                y = "https://money.x.com/articles/cardholder-agreement",
                b = Object.freeze({ initiate: "initiate-challenge", complete2fa: "2fa-complete-challenge", completeKyc: "kyc-complete-challenge", completeDocv: "docv-complete-challenge", completeSelfie: "selfie-complete-challenge" }),
                v = Object.freeze({ balance: "balance", credit: "credit", debit: "debit" }),
                P = Object.freeze({ interest: "interest", cashback: "cashback", deposit: "deposit", withdraw: "withdraw", atm: "atm" });
        },
        920113: (e, t, n) => {
            n.d(t, { Z: () => w });
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                o = n(829110),
                c = n(692165),
                i = n(19197),
                l = n(883229),
                d = n(952793),
                u = n(514639),
                m = n(137882),
                h = n(743080);
            const _ = "Help Center",
                p = "Settings",
                g = "Chat",
                f = { pathname: u.N6, external: !0, openInSameFrame: !1 },
                y = () => {
                    const e = (0, m.ig)({});
                    return e ? a.createElement(s.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: a.createElement(o.default, null), link: e, pullRight: !0, type: "primaryText" }) : null;
                },
                b = { type: "CustomRetry", content: () => null },
                v = { context: "MONEY_HEADER_ACTIONS" },
                P = () => (0, d.hC)("rweb_xchat_enabled") && a.createElement(l.N, { errorConfig: v, fallback: b }, a.createElement(a.Suspense, { fallback: null }, a.createElement(y, null))),
                C = () => a.createElement(r.Z, { style: h.ZP.actionButtons }, a.createElement(P, null), a.createElement(s.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: a.createElement(c.default, null), link: f, pullRight: !0, type: "primaryText" }), a.createElement(s.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: a.createElement(i.default, null), link: u.Sr, pullRight: !0, type: "primaryText" })),
                w = a.memo(C);
        },
        452275: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(107267),
                s = n(507651),
                o = n(952793),
                c = n(514639),
                i = n(412100);
            const l = () => {
                    const e = (0, r.useLocation)(),
                        { hasPendingTransactions: t } = (0, i.Z)(),
                        n = (0, o.hC)("payments_card_spend_enabled"),
                        l = a.useMemo(() => [{ to: { pathname: c.gp }, key: c.gp, label: "Account", isActive: () => e.pathname === c.gp }, n ? { to: { pathname: c.Tb }, key: c.Tb, label: "Card", isActive: () => e.pathname === c.Tb || e.pathname === c.F7 } : null, { to: { pathname: c.bR }, key: c.bR, label: "Activity", isActive: () => e.pathname === c.bR, badgePip: t }], [n, t, e.pathname]);
                    return a.createElement(s.Z, { isPillLink: !0, links: l });
                },
                d = a.memo(l);
        },
        805322: (e, t, n) => {
            n.d(t, { Z: () => me });
            n(136728);
            var a = n(202784),
                r = n(437429),
                s = n.n(r),
                o = n(107267),
                c = n(555950),
                i = n(736063),
                l = n(782642),
                d = n(514639),
                u = n(441484),
                m = n(725516),
                h = n(43429),
                _ = n(727384),
                p = n(413722),
                g = n(980407),
                f = n(56495),
                y = n(10622),
                b = n.n(y);
            n(585488);
            const v = f.Z,
                P = ({ challengeId: e, challengeResponse: t, environment: n, loginRequestId: a }) =>
                    b()(n, v, { challengeId: e, challengeResponse: t, loginRequestId: a }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.login_request,
                                n = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.error;
                            return { id: t?.id, error: n, verified: !!t?.verified };
                        });
            var C = n(325686),
                w = n(731708),
                k = n(855488),
                I = n(154003),
                E = n(167630),
                Z = n(743080);
            const S = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, Z.jh)(),
                        l = a.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-app", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(C.Z, { style: i.container }, a.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter the code from your authenticator app"), a.createElement(k.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: Z.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(C.Z, { style: i.footer }, a.createElement(I.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(E.Z, null) : "Next")))
                    );
                },
                T = { context: "TwoFactorAppCode" };
            function F(e) {
                return a.createElement(i.H, { errorConfig: T }, a.createElement(S, e));
            }
            const A = a.memo(F),
                R = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, Z.jh)(),
                        l = a.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-backup", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(C.Z, { style: i.container }, a.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter your backup code"), a.createElement(k.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: Z.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(C.Z, { style: i.footer }, a.createElement(I.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(E.Z, null) : "Next")))
                    );
                },
                x = { context: "TwoFactorBackupCode" };
            function q(e) {
                return a.createElement(i.H, { errorConfig: x }, a.createElement(R, e));
            }
            const N = a.memo(q),
                M = ({ error: e, onClose: t }) => {
                    const n = (0, m.z)(),
                        r = (0, Z.jh)();
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-notsupported", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(C.Z, { style: r.container }, a.createElement(w.ZP, { size: "title3", weight: "bold" }, "We were unable to verify you"), a.createElement(w.ZP, { color: "gray700" }, e)))
                    );
                },
                H = { context: "TwoFactorNotSupported" };
            function z(e) {
                return a.createElement(i.H, { errorConfig: H }, a.createElement(M, e));
            }
            const D = a.memo(z);
            var O = n(158272);
            function L({ challenge: e, onClose: t, onSubmit: n }) {
                const r = (0, l.p)(),
                    s = (0, m.z)();
                return (
                    a.useEffect(() => {
                        s.scribe({ page: "money", section: "money-2fa-passkey", action: "impression" });
                    }, [s]),
                    a.useEffect(() => {
                        (0, O.xG)(e)
                            .then((e) => {
                                n({ challengeResponse: e });
                            })
                            .catch(() => {
                                r({ text: O.Kh }), t();
                            });
                    }, [r, e, t, n]),
                    (0, O.iW)() ? a.createElement(E.Z, null) : a.createElement(w.ZP, { align: "center" }, O.z_)
                );
            }
            const U = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, Z.jh)(),
                        l = a.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    c(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-sms", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(C.Z, { style: i.container }, a.createElement(w.ZP, { size: "title3", weight: "bold" }, "Enter the code we sent to your phone"), a.createElement(k.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: Z.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(C.Z, { style: i.footer }, a.createElement(I.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(E.Z, null) : "Next")))
                    );
                },
                W = { context: "TwoFactorSms" };
            function j(e) {
                return a.createElement(i.H, { errorConfig: W }, a.createElement(U, e));
            }
            const V = a.memo(j);
            var $ = n(800697),
                B = n(482924);
            const Q = $.Z,
                Y = ({ challengeId: e }) => {
                    const { data: t } = (0, B.A)(Q, { challengeId: e }, { fetchPolicy: "network-only" }),
                        n = t?.viewer_v2?.xp_start_two_factor_auth_challenge;
                    if (!n) return {};
                    const { error: a, login_request: r } = n;
                    return { error: a, ...(r && { challenge: r.challenge, loginRequestId: r.id, twoFactor: { id: r.two_factor_auth_method.id, type: r.two_factor_auth_method.two_factor_type }, verified: !!r.verified }) };
                },
                G = "Please try again later or contact support team.",
                X = "The request expired, try again.",
                K = "The 2FA method on your account has an issue. Go to the app Settings, verify it, and try again.",
                J = "Too many attempts, try again later.",
                ee = { DuplicatedRenameTwoFactorMethodDisplayName: K, ExpiredLoginVerification: X, FailureSmsCarrierDisabled: "We were not able to send an SMS to this carrier.", IneligibleFor2faAfterModification: K, InvalidRenameTwoFactorMethodDisplayName: K, LoginVerificationUserReactivationRequired: K, NoSecretForUser: K, NoTwoFactorAuthMethod: K, NotAllowed: K, NotValidForTokenExchange: K, NotYetApprovedLoginVerification: K, OfflineCodeSync: K, OverLoginVerificationAttemptLimit: J, OverLoginVerificationConvertLimit: J, OverResendLimit: J, SmsOverPerUserLimit: J, TwoFactorAuthMethodExpired: X, FailureSendingLoginVerificationRequest: G, OverLoginVerificationStartLimit: J, SmsVerPerUserLimit: J, TwoFactorAuthMethodDoesNotExist: K },
                te = ({ challengeId: e, isNonModalScreen: t, onSuccess: n }) => {
                    const { challenge: r, error: c, loginRequestId: i, twoFactor: d } = Y({ challengeId: e }),
                        u = (0, o.useHistory)(),
                        h = (0, l.p)(),
                        f = u.location?.state,
                        y = s()(),
                        b = (0, m.z)();
                    a.useEffect(() => {
                        b && b.scribe({ page: "money", section: "money-two-factor-auth", action: "impression" });
                    }, [b]);
                    const v = a.useCallback(
                            ({ challengeResponse: t }) =>
                                i
                                    ? P({ environment: y, challengeId: e, loginRequestId: i, challengeResponse: t })
                                          .then((e) => {
                                              const { error: t, id: a, verified: r } = e;
                                              return a === i && r ? n({ loginRequestId: i }) : t && h({ text: ee[t] ?? G }), e;
                                          })
                                          .catch(() => {
                                              h({ text: G });
                                          })
                                    : Promise.resolve(),
                            [i, y, e, n, h],
                        ),
                        { challengeInitiator: C, closePath: w } = f ?? {},
                        k = a.useCallback(() => {
                            (0, _.qc)({ environment: y, closePath: w, challengeInitiator: C, history: u });
                        }, [C, w, y, u]),
                        I = a.useMemo(() => (d?.type === p.O.BackupCode ? a.createElement(N, { onClose: k, onSubmit: v }) : r && d?.type === p.O.Passkey ? a.createElement(L, { challenge: r, onClose: k, onSubmit: v }) : d?.type === p.O.Sms ? a.createElement(V, { onClose: k, onSubmit: v }) : d?.type === p.O.Totp ? a.createElement(A, { onClose: k, onSubmit: v }) : a.createElement(D, { error: c ? (ee[c] ?? G) : G, onClose: k })), [r, c, k, v, d?.type]);
                    return a.createElement(g.Z, { backButtonType: "close", history: u, isFullWidth: t, onBackClick: k }, I);
                },
                ne = { context: "VerifyTwoFactorAuth" };
            function ae(e) {
                return a.createElement(i.H, { errorConfig: ne }, a.createElement(te, e));
            }
            const re = a.memo(ae);
            var se = n(160144);
            const oe = { [d.kW.forgotPin]: "You PIN has been successfuly changed.", [d.kW.changeCardPin]: "You PIN has been successfuly changed." },
                ce = { [d.kW.forgotPin]: d.P_.forgotPin, [d.kW.changeCardPin]: d.P_.changeCardPin },
                ie = [d.kW.forgotPin, d.kW.changeCardPin],
                le = ({ challengeId: e, challengeInitiator: t, onSuccess: n }) => {
                    const r = (0, o.useHistory)(),
                        i = (0, m.z)(),
                        p = (0, l.p)(),
                        g = r.location?.state,
                        { challengeId: f, challengeInitiator: y, closePath: b, message: v, recordId: P, redirectPath: C, redirectState: w, successMessage: k } = g ?? {},
                        [I, E] = a.useState(e ?? f),
                        Z = t ?? y,
                        [S, T] = a.useState(v ?? h.q9.initiate),
                        [F, A] = a.useState(),
                        [R, x] = a.useState(!1),
                        q = s()(),
                        N = Z === d.kW.auth,
                        M = (Z ? ce[Z] : void 0) ?? d.P_.challenge,
                        H = ie.includes(Z),
                        z = (Z ? oe[Z] : void 0) ?? k,
                        D = a.useCallback((e) => {
                            A(e.loginRequestId), T(h.q9.complete2fa), x(!1);
                        }, []),
                        O = a.useCallback(
                            (e) => {
                                const { authStatus: t, challengeId: a, message: s } = e.data;
                                switch (s) {
                                    case se.T.success:
                                        N && 1 === t && u.Z.updateSessionStatus(c.c.Active), P ? (0, _.Se)(q, P) : Z === d.kW.activateCard ? (0, _.uN)(q) : (0, _.J$)(q), C ? r.replace(C, w) : n ? n() : r.goBack(), z && p({ text: z });
                                        break;
                                    case se.T.docvChallenge:
                                        r.replace(d.AU.tier3.verifyIdentityPath, { ...g, challengeInitiator: Z });
                                        break;
                                    case se.T.kycChallenge:
                                        r.replace(d.AU.tier2.verifyIdentityPath, { ...g, challengeInitiator: Z });
                                        break;
                                    case se.T.selfieChallenge:
                                        r.replace(d.AU.selfie.verifyIdentityPath, { ...g, challengeInitiator: Z });
                                        break;
                                    case se.T.twoFactorChallenge:
                                        E(a), x(!0);
                                        break;
                                    case se.T.forgotPin:
                                        r.push(d.jR, { challengeInitiator: d.kW.forgotPin });
                                        break;
                                    case se.T.invalidChallenge:
                                        N && u.Z.fetchNewSession();
                                        break;
                                    case se.T.close:
                                        (0, _.qc)({ environment: q, closePath: b, challengeInitiator: Z, history: r });
                                }
                            },
                            [N, P, Z, C, n, z, r, g, q, b, w, p],
                        );
                    a.useEffect(() => {
                        i && i.scribe({ page: "money", section: "verify-challenge", action: "impression" });
                    }, [i]),
                        a.useEffect(
                            () => (
                                Z === d.kW.auth && u.Z.loadChallenge(),
                                () => {
                                    Z === d.kW.auth && u.Z.closeChallenge();
                                }
                            ),
                            [Z],
                        );
                    const L = N;
                    return a.createElement(a.Fragment, null, I && R ? a.createElement(re, { challengeId: I, isNonModalScreen: L, onSuccess: D }) : null, I || H ? a.createElement(se.Z, { closePath: b, eventCallback: O, isBackgroundHidden: R, isNonModalScreen: L, linkType: M, payload: { challengeId: I, loginRequestId: F, message: S }, redirectPath: C, redirectState: w }) : null);
                },
                de = { context: "VerifyChallenge" };
            function ue(e) {
                return a.createElement(i.H, { errorConfig: de }, a.createElement(le, e));
            }
            const me = a.memo(ue);
        },
        160144: (e, t, n) => {
            n.d(t, { T: () => w, Z: () => S });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(325686),
                s = n(437429),
                o = n.n(s),
                c = n(107267),
                i = n(167630),
                l = n(362075),
                d = n(392237),
                u = n(980407),
                m = n(943914),
                h = n(655352),
                _ = n(163889),
                p = n(514639),
                g = n(412450),
                f = n(441484),
                y = n(99387),
                b = n(743080),
                v = n(727384);
            n(571372);
            class P {
                constructor() {
                    if (P.instance) throw new Error("Please avoid instantiating this singleton.");
                }
                static _updateActiveHandler(e, t) {
                    t !== P.activeHandler && (P.activeHandler && (window.removeEventListener("message", P.activeHandler), (P.activeHandler = void 0)), t && (window.addEventListener("message", t), (P.activeHandler = t)));
                }
                static addHandler(e, t) {
                    P.handlers.add(t);
                    const { isInlineFrame: n } = p.QU[e];
                    (P.activeHandler && n) || P._updateActiveHandler(e, t);
                }
                static removeHandler(e, t) {
                    if ((P.handlers.delete(t), P.activeHandler === t)) {
                        const t = P.handlers.values().next().value;
                        P._updateActiveHandler(e, t);
                    }
                }
            }
            P.handlers = new Set();
            const C = ({ allowedOrigin: e, handler: t, linkType: n }) => {
                    const r = a.useCallback(
                        (n) => {
                            n.origin === e && t(n);
                        },
                        [t, e],
                    );
                    a.useEffect(() => (P.addHandler(n, r), () => P.removeHandler(n, r)), [n, r]);
                },
                w = Object.freeze({ changePhone: "change-phone", success: "success", failure: "failure", ineligible: "ineligible", pendingReview: "pending-review", redirect: "redirect", close: "close", ready: "ready", initPorts: "initPorts", invalidChallenge: "invalid-challenge", docvChallenge: "challenge-docv-required", kycChallenge: "challenge-kyc-required", selfieChallenge: "challenge-selfie-required", twoFactorChallenge: "challenge-2fa-required", accountNumbercopiedToClipboard: "account-number-copied-to-clipboard", routingNumbercopiedToClipboard: "routing-number-copied-to-clipboard", edit: "edit", forgotPin: "forgot-pin", kyc: "kyc", stepUpDocv: "stepUpDocv" }),
                k = (0, v.bI)(),
                I = ({ allowClipboardWrite: e, iframeUrl: t, isBackgroundHidden: n, isInlineFrame: s, isNonModalScreen: o }) => {
                    const d = (0, c.useHistory)(),
                        [m, p] = a.useState(!1),
                        g = (0, h.ZP)(),
                        f = g ? T.paddingSmall : null,
                        y = a.useCallback(() => {
                            p(!0);
                        }, []),
                        v = a.createElement(r.Z, { style: n ? T.hide : T.modal }, t && a.createElement(a.Fragment, null, !m && a.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" }), a.createElement(l.Z, { allowClipboardWrite: e, allowForms: !0, onLoad: y, reportError: _.ZP, src: t, style: m ? [T.idvIframe, s ? void 0 : f] : T.hide, title: "Money" })));
                    return o || s || n ? v : a.createElement(u.Z, { history: d, renderHeader: () => null }, a.createElement(r.Z, { style: g ? T.modalContainer : T.modalContainerNarrow }, v));
                },
                E = (e) => {
                    const { additionalParams: t, linkType: n = p.P_.onboarding, redirectPath: r, errorPath: s, redirectState: i, closePath: l, eventCallback: d, payload: u, isNonModalScreen: m, isBackgroundHidden: h, challengeInitiator: _, challengeId: b } = e,
                        P = (0, c.useHistory)(),
                        { paymentsOrigin: E } = (0, g.Z)(),
                        Z = f.Z.getSession(),
                        S = f.Z.getProviderToken(),
                        T = (0, v.gh)(),
                        [F, A] = a.useState(!1),
                        R = o()(),
                        { allowClipboardWrite: x, defaultClosePath: q, invalidateOnClose: N, isInlineFrame: M, path: H, redirectOnCompletion: z } = p.QU[n],
                        D = a.useCallback(
                            (e) => {
                                const { errors: t, message: n, url: a } = e.data;
                                switch (n) {
                                    case w.initPorts: {
                                        const t = e.ports?.[0];
                                        t && (u && t.postMessage(u), (t.onmessage = d));
                                        break;
                                    }
                                    case w.changePhone:
                                        P.push("/settings/phone");
                                        break;
                                    case w.success:
                                        z && A(!0);
                                        break;
                                    case w.failure:
                                        z && P.replace(s ?? p.D$, { errors: t });
                                        break;
                                    case w.ineligible:
                                        (0, v.J$)(R), P.replace(p.R);
                                        break;
                                    case w.pendingReview:
                                        (0, v.J$)(R), P.replace(p.vr);
                                        break;
                                    case w.redirect:
                                        k && (window.location.href = a);
                                        break;
                                    case w.close:
                                        N && (0, v.J$)(R), P.replace(l ?? q);
                                }
                                d?.(e);
                            },
                            [d, P, z, R, N, l, q, u, s],
                        );
                    C({ allowedOrigin: E, handler: D, linkType: n });
                    const O = a.useMemo(() => {
                        if (!Z || !E || !S) return;
                        const e = new Map();
                        return (
                            t?.forEach(({ key: t, value: n }) => {
                                e.set(t, n);
                            }),
                            k &&
                                e.set(
                                    "redirectUrl",
                                    (({ challengeId: e, challengeInitiator: t }) => {
                                        const n = new URL(`https://${window.location.host}${p.$l}`);
                                        return e && n.searchParams.set("challengeId", e), t && n.searchParams.set("challengeInitiator", t), n.href;
                                    })({ challengeId: b, challengeInitiator: _ }),
                                ),
                            (0, v.uG)({ basePath: `/${H}`, xPaymentsSession: Z, theme: T, paymentsOrigin: E, moreSearchParams: e, providerToken: S })
                        );
                    }, [Z, E, S, t, H, T, b, _]);
                    return F ? a.createElement(y.default, { challengeId: b, challengeInitiator: _, linkType: n, redirectPath: r, redirectState: i }) : a.createElement(I, { allowClipboardWrite: x, iframeUrl: O, isBackgroundHidden: h, isInlineFrame: M, isNonModalScreen: m });
                },
                Z = (e) => {
                    const t = a.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" });
                    return a.createElement(m.B, { fallback: t }, a.createElement(E, e));
                },
                S = a.memo(Z),
                T = d.default.create((e) => ({ idvIframe: { width: "100%", height: "100%", paddingTop: "0px", overflow: "hidden" }, paddingSmall: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, hide: { display: "none" }, modal: { width: "100%", height: "100%" }, modalContainer: { width: 500, height: 600 }, modalContainerNarrow: { width: "100%", height: "100%" } }));
        },
        412100: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(297679),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(312771),
                c = n(127218),
                i = n(43429);
            const l = a.Z,
                d = () => {
                    const { data: e, fetchNext: t, refetch: n, subsequentFetchStatus: a } = (0, c.C)(l, { count: i.ic }),
                        r = e?.get_payments_customer_actions?.__id ?? "useActionableItemsQuery_TransactionActions_slice";
                    return (
                        s()([r], () => {
                            n();
                        }),
                        { data: e, refetch: n, isRefreshing: a === o.ZP.LOADING, fetchNext: t, hasNotices: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsCustomerNotice" === e?.__typename), hasPendingTransactions: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsTransaction" === e?.__typename) }
                    );
                };
        },
        423475: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(666536),
                s = n(43429),
                o = n(727384),
                c = n(458254),
                i = (n(585488), n(351743)),
                l = n.n(i);
            const d = c.Z,
                u = () => {
                    const [e, t] = l()(d);
                    return [
                        a.useCallback(
                            ({ amount: t, creditMethod: n, currency: a, debitMethod: r }) =>
                                new Promise((s, o) => {
                                    e({
                                        variables: { base_amount: { currency: a, local_micro: t }, transfer_method_type: { pull_transfer_method_type: n, push_transfer_method_type: r } },
                                        onCompleted: (e, n) => {
                                            const r = e?.calculate_transaction_fees?.errors,
                                                c = e?.calculate_transaction_fees,
                                                i = c?.base_amount?.local_micro,
                                                l = c?.amount?.local_micro,
                                                d = c?.total_fees?.local_micro,
                                                u = c?.base_amount?.currency;
                                            c ? s({ baseAmount: i ?? t, totalAmount: l, currency: u ?? a, feeAmount: d }) : r && o(r);
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
                        [n, c] = a.useState({ baseAmount: "", currency: s.a7 }),
                        [i, l] = a.useState(!0),
                        d = a.useCallback(
                            ({ newAccount: n, newAmount: a }) => {
                                if (n && a) {
                                    const r = (0, o.Dc)(a),
                                        i = (0, o.V9)(n),
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
                        m = a.useMemo(() => (0, r.Z)((e) => d(e), 500), [d]);
                    return { amountWithFees: n, feeCalcInProgress: i, calculateFee: d, debouncedCalculateFee: m };
                };
        },
        500386: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(663090),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(727384);
            const i = a.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        r.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((a, r) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_transfer?.id,
                                                s = e?.cancel_transfer?.challenge_id,
                                                o = e?.cancel_transfer?.transaction_status,
                                                c = e?.cancel_transfer?.errors;
                                            n && o ? a({ transactionId: n, status: o, challengeId: s }) : r(c || t);
                                        },
                                        updater: (e, n) => {
                                            const a = n?.cancel_transfer?.transaction_status,
                                                r = n?.cancel_transfer?.reason_code;
                                            (0, c.H_)(e, { status: a, recordId: t, reasonCode: r });
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
        604347: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(597785),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(727384);
            const i = a.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        r.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((a, r) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_request_transfer?.id,
                                                s = e?.cancel_request_transfer?.transaction_status,
                                                o = e?.cancel_request_transfer?.challenge_id,
                                                c = e?.cancel_request_transfer?.errors;
                                            n && s ? a({ transactionId: n, status: s, challengeId: o }) : r(c || t);
                                        },
                                        updater: (e, n) => {
                                            const a = n?.cancel_request_transfer?.transaction_status,
                                                r = n?.cancel_request_transfer?.reason_code;
                                            (0, c.H_)(e, { status: a, recordId: t, reasonCode: r });
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
        607929: (e, t, n) => {
            n.d(t, { C7: () => m, bf: () => u });
            var a = n(990563),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(402229),
                i = n(727384);
            const l = a.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: n, transactionId: a }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transfer_id: a, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.claim_transfer?.id,
                                                a = e?.claim_transfer?.transaction_status,
                                                o = e?.claim_transfer?.challenge_id,
                                                c = e?.claim_transfer?.errors;
                                            n && a ? r({ transactionId: n, status: a, challengeId: o }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const a = t?.claim_transfer?.transaction_status,
                                                r = t?.claim_transfer?.reason_code;
                                            (0, i.H_)(e, { status: a, recordId: n, reasonCode: r });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                u = () => d({ decision: c.R.ClaimTransferDecisionAccept }),
                m = () => d({ decision: c.R.ClaimTransferDecisionReject });
        },
        202241: (e, t, n) => {
            n.d(t, { F8: () => m, yA: () => u });
            var a = n(708154),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(402311),
                i = n(727384);
            const l = a.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: n, transactionId: a }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transaction_id: a, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.confirm_unrecognized_payment?.transaction,
                                                a = n?.id,
                                                o = n?.transaction_status,
                                                c = e?.confirm_unrecognized_payment?.errors,
                                                i = e?.confirm_unrecognized_payment?.challenge_id;
                                            a && o ? r({ transactionId: a, status: o, challengeId: i }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const a = t?.confirm_unrecognized_payment?.transaction,
                                                r = a?.transaction_status,
                                                s = a?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: n, reasonCode: s });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                u = () => d({ decision: c.n.UnrecognizedPaymentDecisionAccept }),
                m = () => d({ decision: c.n.UnrecognizedPaymentDecisionReject });
        },
        856228: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(942512),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(482924);
            const c = a.Z,
                i = () => {
                    const { data: e, refetch: t } = (0, o.A)(c, {}, { fetchKey: "money-customer-tasks" }),
                        n = ((e) => (e.get_payments_customer_tasks ? e.get_payments_customer_tasks : null))(e),
                        a = e?.get_payments_customer_tasks?.__id ?? "useCustomerTasksCarouselQuery_customer_tasks";
                    return (
                        s()([a], () => {
                            t();
                        }),
                        { data: n, refetch: t }
                    );
                };
        },
        467734: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(125363),
                r = n(390387);
            const s = ({ senderId: e }) => (0, a.v9)(r._h) === e;
        },
        226595: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(642004),
                r = n(87877),
                s = n(922281),
                o = n(226332);
            const c = () => {
                const { activePaymentMethods: e, paymentMethods: t } = (0, o.Z)(r.U.PaymentMethodFilterSpending),
                    n = e?.filter((e) => e.core?.details?.issued_card_type === a.W.IssuedCardTypeVirtual);
                return { cards: t, activeVirtualCards: n, activeCards: e, inactivePhysicalCards: t?.filter((e) => e.core?.details?.status === s.D.Inactive && e.core?.details?.issued_card_type === a.W.IssuedCardTypePhysical), cashbackRate: n?.[0]?.core?.details?.cashback?.rate };
            };
        },
        629015: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(40969),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(952793),
                i = n(441484),
                l = n(698478);
            const d = a.Z,
                u = () => {
                    const e = (0, c.hC)("payments_enabled"),
                        [t, n] = r.useState(),
                        [a, s] = r.useState(!1),
                        [u, m] = o()(d);
                    r.useEffect(() => {
                        u({
                            variables: {},
                            onCompleted: (e) => {
                                !!e?.check_transfers_eligibility?.eligible && i.Z.fetchNewSession
                                    ? i.Z.fetchNewSession().finally(() => {
                                          n(e);
                                      })
                                    : n(e);
                            },
                            onError: () => {
                                s(!0);
                            },
                        });
                    }, [u]);
                    const h = t?.check_transfers_eligibility,
                        _ = !!h?.eligible,
                        { permissions: p, requirements: g, roles: f } = h ?? {};
                    return { isEligible: e && _, hasLoaded: !m && (!!t || a), requirements: g, roles: f, permissions: p, paymentsRedirectPath: (0, l.rW)({ roles: f, permissions: p }) };
                };
        },
        934265: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(183276),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(940211),
                c = n(482924);
            const i = a.Z,
                l = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, c.A)(i, {}, { fetchPolicy: "store-and-network" }),
                        a = e.get_accounts?.find((e) => e.identifier === o.b.UserMain),
                        r = e.get_accounts?.find((e) => e.identifier === o.b.Cashback),
                        l = e.get_accounts?.find((e) => e.identifier === o.b.UserInterest),
                        d = a?.__id ?? "get_accounts";
                    return (
                        s()([d], () => {
                            t();
                        }),
                        { balance: a?.balance, refetch: t, refetchStatus: n, cashback: r?.balance, interest: l?.interest_details }
                    );
                };
        },
        348340: (e, t, n) => {
            n.d(t, { Z: () => l, b: () => c });
            n(901951);
            var a = n(576751),
                r = (n(585488), n(698478)),
                s = n(930196),
                o = n(727384);
            const c = (e) => (t) => {
                    const n = t?.get_payments_documents?.find((t) => {
                            const n = (0, o.Qu)(t.start_date),
                                a = `${n.getFullYear()}-${n.getMonth()}`;
                            return e && a && a === e;
                        }),
                        { url: a, url_expiry_time_millis: s } = n ?? {};
                    (a && s && !(0, r.x5)(s)) || window.open(a, "_blank");
                },
                i = a.Z,
                l = ({ type: e }) => {
                    const { data: t, refetch: n, refetchStatus: a } = (0, s.d)(i, { document_type: e }),
                        r = t?.get_payments_documents;
                    return {
                        formattedDocuments: r?.reduce((e, t) => {
                            const n = `${(0, o.Qu)(t.start_date).getFullYear()}`;
                            let a = e.find((e) => e.year === n);
                            return a || ((a = { year: n, documents: [] }), e.unshift(a)), a.documents.unshift(t), e;
                        }, []),
                        refetch: n,
                        refetchStatus: a,
                    };
                };
        },
        137882: (e, t, n) => {
            n.d(t, { bR: () => c, ig: () => o, vN: () => i });
            n(543673), n(240753), n(128399);
            var a = n(412450),
                r = n(125363),
                s = n(390387);
            const o = (e) => {
                    const { supportUserId: t } = (0, a.Z)(),
                        n = (0, r.v9)(s._h);
                    return t && n ? `/i/chat/${n}-${t}` : null;
                },
                c = ({ txId: e }) => {
                    const { supportUrl: t } = (0, a.Z)(),
                        n = new URL(t);
                    return e && n.searchParams.set("tx_id", e), n.href;
                },
                i = ({ reportedHandle: e, txId: t }) => {
                    const { reportUrl: n } = (0, a.Z)(),
                        r = new URL(n);
                    return t && r.searchParams.set("tx_id", t), e && r.searchParams.set("tx_reported_handle", `@${e}`), r.href;
                };
        },
        329923: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(204133),
                r = (n(585488), n(712696)),
                s = n.n(r),
                o = n(727384);
            const c = a.Z,
                i = () => {
                    const e = s()(c, {}),
                        t = e?.get_payments_invitation_details,
                        n = t?.invitation_amount_local_micro,
                        a = t?.currency,
                        r = t?.invitation_count,
                        i = n ? (0, o.vw)({ amount: n, currency: a }) : null;
                    return { invitationCount: r ? parseInt(r, 10) : null, formattedAmount: i };
                };
        },
        889738: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(924592),
                r = (n(585488), n(482924));
            const s = a.Z,
                o = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, r.A)(s, {}),
                        a = e?.get_customer?.limits;
                    return { limits: a, refetch: t, refetchStatus: n };
                };
        },
        226332: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(703325),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(87877),
                c = n(922281),
                i = n(482924);
            const l = a.Z,
                d = (e) => {
                    const { data: t, refetch: n, refetchStatus: a } = (0, i.A)(l, { filter: e ?? o.U.PaymentMethodFilterFunding, withIssuedSpend: e === o.U.PaymentMethodFilterSpending }),
                        r = t?.get_payment_methods_v2,
                        d = r?.filter((e) => e.core?.details?.status === c.D.Active),
                        u = r?.filter((e) => e.core?.details?.status === c.D.Active || e.core?.details?.status === c.D.LoginRequired),
                        m = r?.[0]?.__id ?? t?.__id;
                    return (
                        s()([m], () => {
                            n();
                        }),
                        { paymentMethods: r, activePaymentMethods: d, usablePaymentMethods: u, refetchStatus: a }
                    );
                };
        },
        529438: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(264462),
                r = (n(585488), n(482924));
            const s = a.Z,
                o = () => {
                    const { data: e } = (0, r.A)(s, {}),
                        t = e?.get_customer?.name;
                    return t;
                };
        },
        24568: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var a = n(215285),
                r = n(202784),
                s = (n(585488), n(353391)),
                o = n.n(s),
                c = n(107267),
                i = n(782642),
                l = n(514639),
                d = n(312771),
                u = n(482924),
                m = n(746523),
                h = n(351743),
                _ = n.n(h),
                p = n(727384);
            const g = m.Z,
                f = () => {
                    const [e, t] = _()(g);
                    return [
                        r.useCallback(
                            ({ preferences: t }) =>
                                new Promise((n, a) => {
                                    e({
                                        variables: { preferences: t },
                                        onCompleted: (e, t) => {
                                            const r = e?.update_customer_preferences?.errors,
                                                s = e?.update_customer_preferences?.challenge_id;
                                            r ? a(r) : n({ challengeId: s });
                                        },
                                        updater: p.Oc,
                                        onError: a,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                y = "Your setting has been successfully updated!",
                b = a.Z,
                v = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, u.A)(b, {}),
                        a = (0, c.useHistory)(),
                        s = (0, i.p)(),
                        m = e?.get_customer?.preferences,
                        h = r.useMemo(() => ({ require_pin_to_create_transactions: !!m?.require_pin_to_create_transactions, require_pin_to_unlock: !!m?.require_pin_to_unlock, enable_bill_pay: !!m?.enable_bill_pay, require_pin_to_link_payment_method: !!m?.require_pin_to_link_payment_method, only_receive_transfer_from_following: !!m?.only_receive_transfer_from_following, only_allow_request_from_following: !!m?.only_allow_request_from_following, enable_card_payments: !!m?.enable_card_payments }), [m]),
                        [_, p] = r.useState(h),
                        [g, v] = f(),
                        P = r.useCallback(
                            (e, t) => {
                                g({ preferences: { ..._, [e]: t } })
                                    .then(({ challengeId: e }) => {
                                        e ? a.push(l.vw, { challengeId: e, successMessage: y, challengeInitiator: l.kW.preference }) : s({ text: y });
                                    })
                                    .catch(() => {
                                        s({ text: "Something went wrong. Please try again later." }), p((n) => ({ ...n, [e]: !t }));
                                    });
                            },
                            [s, g, a, _],
                        ),
                        C = r.useCallback(
                            (e, t) => {
                                p((n) => ({ ...n, [e]: t })), P(e, t);
                            },
                            [P],
                        ),
                        w = r.useCallback(
                            (e, t) => {
                                P(e, t);
                            },
                            [P],
                        ),
                        k = e?.get_customer?.__id ?? "get_customer";
                    return (
                        r.useEffect(() => {
                            n !== d.iF.LOADING && p(h);
                        }, [h, n]),
                        o()([k], () => {
                            t();
                        }),
                        { preferences: _, refetch: t, refetchStatus: n, handlePreferencesChange: C, handleDeferredPreferencesChange: w, isInProgress: v }
                    );
                };
        },
        557159: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(177405),
                r = (n(585488), n(482924));
            const s = a.Z,
                o = () => {
                    const { data: e } = (0, r.A)(s, {}),
                        t = e?.get_customer?.region;
                    return t;
                };
        },
        464978: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(192828),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(482924);
            const c = a.Z,
                i = (e) => {
                    const { data: t, refetch: n } = (0, o.A)(c, { transaction_id: e }),
                        a = t.get_transaction_by_id?.__id ?? "get_transaction_by_id";
                    return (
                        s()([a], () => {
                            n();
                        }),
                        t
                    );
                };
        },
        190940: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(727384),
                r = n(467734),
                s = n(464978);
            const o = (e) => {
                const { get_transaction_by_id: t } = (0, s.Z)(e),
                    { amount_local_micro: n, currency: o, details: c, transaction_status: i, transaction_type: l } = t ?? {},
                    d = c?.sender_results?.result,
                    u = d?.core?.name ?? "",
                    m = n ? (0, a.vw)({ amount: n, currency: o }) : null,
                    h = (0, r.Z)({ senderId: d?.rest_id });
                return [(0, a.M9)({ status: i, transactionType: l, isViewerSender: h }), u && m ? { name: u, formattedAmount: m } : null];
            };
        },
        825941: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(258074),
                r = (n(585488), n(353391)),
                s = n.n(r),
                o = n(127218),
                c = n(43429);
            const i = a.Z,
                l = (e) => {
                    const t = { count: c.ic };
                    e?.searchFilterId && (t.search_filter_id = e?.searchFilterId);
                    const { data: n, fetchNext: a, refetch: r } = (0, o.C)(i, t, { fetchPolicy: "store-and-network" }),
                        l = n?.get_transactions?.__id ?? "usePaymentsTransactionsListQuery_TransactionList_slice";
                    return (
                        s()([l], () => {
                            r();
                        }),
                        { data: n, fetchNext: a, refetch: r }
                    );
                };
        },
        891414: (e, t, n) => {
            n.d(t, { C7: () => m, iP: () => u });
            var a = n(922524),
                r = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(364539),
                i = n(727384);
            const l = a.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        r.useCallback(
                            ({ recordId: n, transactionId: a }) =>
                                new Promise((r, s) => {
                                    t({
                                        variables: { transfer_id: a, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.respond_to_request_transfer?.id,
                                                a = e?.respond_to_request_transfer?.transaction_status,
                                                o = e?.respond_to_request_transfer?.errors,
                                                c = e?.respond_to_request_transfer?.challenge_id;
                                            n && a ? r({ transactionId: n, status: a, challengeId: c }) : s(o || t);
                                        },
                                        updater: (e, t) => {
                                            const a = t?.respond_to_request_transfer?.transaction_status,
                                                r = t?.respond_to_request_transfer?.reason_code;
                                            (0, i.H_)(e, { status: a, recordId: n, reasonCode: r });
                                        },
                                        onError: s,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                },
                u = () => d({ decision: c.m.RequestTransferDecisionAccept }),
                m = () => d({ decision: c.m.RequestTransferDecisionReject });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d60a37be.6ff746ba.js.map
