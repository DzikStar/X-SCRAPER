"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d60a37be"],
    {
        43429: (e, t, n) => {
            n.d(t, { $W: () => r, DH: () => f, Ln: () => m, Ms: () => b, NU: () => y, Rz: () => o, Vq: () => i, ah: () => c, cX: () => l, dX: () => u, hv: () => _, ic: () => a, q9: () => g, uc: () => h, w8: () => s, wC: () => d, wG: () => p });
            n(202784);
            const a = 25,
                r = "xpayments-preset-all",
                s = (Object.freeze({ onboarding: "onboarding", upgradeToKycDocumentsVerified: "upgradeToKycDocumentsVerified" }), 280),
                o = Object.freeze({ credit: "credit", debit: "debit" }),
                c = (Object.freeze({ XPayments: "XPayments" }), Object.freeze({ reviewPane: "reviewPane", amountPane: "amountPane", successPane: "successPane" })),
                i = Object.freeze({ termsPane: "termsPane" }),
                l = Object.freeze({ reviewPane: "reviewPane", participantPane: "participantPane" }),
                d = Object.freeze({ bankDeposit: "bankDeposit", bankWithdraw: "bankWithdraw", card: "card", atm: "atm" }),
                u = Object.freeze({ bank: "bank", card: "card", x: "x" }),
                m = 4e3,
                p = 4,
                h = "https://money.x.com/articles/terms-and-conditions",
                _ = "https://money.x.com/articles/privacy-policy",
                f = "https://money.x.com/articles/short-form-disclosure",
                g = Object.freeze({ initiate: "initiate-challenge", complete2fa: "2fa-complete-challenge", completeKyc: "kyc-complete-challenge", completeDocv: "docv-complete-challenge", completeSelfie: "selfie-complete-challenge" }),
                y = Object.freeze({ balance: "balance", credit: "credit", debit: "debit" }),
                b = Object.freeze({ interest: "interest", cashback: "cashback", deposit: "deposit", withdraw: "withdraw", atm: "atm" });
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
                        l = a.useMemo(() => [{ to: { pathname: c.gp }, key: c.gp, label: "Account", isActive: () => e.pathname === c.gp }, n ? { to: { pathname: c.Tb }, key: c.Tb, label: "Card", isActive: () => e.pathname === c.Tb } : null, { to: { pathname: c.bR }, key: c.bR, label: "Activity", isActive: () => e.pathname === c.bR, badgePip: t }], [n, t, e.pathname]);
                    return a.createElement(s.Z, { isPillLink: !0, links: l });
                },
                d = a.memo(l);
        },
        193364: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var a = n(202784),
                r = n(437429),
                s = n.n(r),
                o = n(107267),
                c = n(413722),
                i = n(980407),
                l = n(736063),
                d = n(782642),
                u = n(725516),
                m = n(727384),
                p = n(56495),
                h = n(10622),
                _ = n.n(h);
            n(585488);
            const f = p.Z,
                g = ({ challengeId: e, challengeResponse: t, environment: n, loginRequestId: a }) =>
                    _()(n, f, { challengeId: e, challengeResponse: t, loginRequestId: a }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.login_request,
                                n = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.error;
                            return { id: t?.id, error: n, verified: !!t?.verified };
                        });
            var y = n(325686),
                b = n(731708),
                v = n(855488),
                w = n(154003),
                P = n(167630),
                C = n(743080);
            const Z = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, u.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, C.jh)(),
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
                        a.createElement(a.Fragment, null, a.createElement(y.Z, { style: i.container }, a.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter the code from your authenticator app"), a.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(y.Z, { style: i.footer }, a.createElement(w.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(P.Z, null) : "Next")))
                    );
                },
                I = { context: "TwoFactorAppCode" };
            function k(e) {
                return a.createElement(l.H, { errorConfig: I }, a.createElement(Z, e));
            }
            const E = a.memo(k),
                S = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, u.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, C.jh)(),
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
                        a.createElement(a.Fragment, null, a.createElement(y.Z, { style: i.container }, a.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter your backup code"), a.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(y.Z, { style: i.footer }, a.createElement(w.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(P.Z, null) : "Next")))
                    );
                },
                F = { context: "TwoFactorBackupCode" };
            function T(e) {
                return a.createElement(l.H, { errorConfig: F }, a.createElement(S, e));
            }
            const q = a.memo(T),
                x = ({ error: e, onClose: t }) => {
                    const n = (0, u.z)(),
                        r = (0, C.jh)();
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-notsupported", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(y.Z, { style: r.container }, a.createElement(b.ZP, { size: "title3", weight: "bold" }, "We were unable to verify you"), a.createElement(b.ZP, { color: "gray700" }, e)))
                    );
                },
                A = { context: "TwoFactorNotSupported" };
            function R(e) {
                return a.createElement(l.H, { errorConfig: A }, a.createElement(x, e));
            }
            const z = a.memo(R);
            var H = n(158272);
            function D({ challenge: e, onClose: t, onSubmit: n }) {
                const r = (0, d.p)(),
                    s = (0, u.z)();
                return (
                    a.useEffect(() => {
                        s.scribe({ page: "money", section: "money-2fa-passkey", action: "impression" });
                    }, [s]),
                    a.useEffect(() => {
                        (0, H.xG)(e)
                            .then((e) => {
                                n({ challengeResponse: e });
                            })
                            .catch(() => {
                                r({ text: H.Kh }), t();
                            });
                    }, [r, e, t, n]),
                    (0, H.iW)() ? a.createElement(P.Z, null) : a.createElement(b.ZP, { align: "center" }, H.z_)
                );
            }
            const N = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, u.z)(),
                        [r, s] = a.useState(""),
                        [o, c] = a.useState(!1),
                        i = (0, C.jh)(),
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
                        a.createElement(a.Fragment, null, a.createElement(y.Z, { style: i.container }, a.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter the code we sent to your phone"), a.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(y.Z, { style: i.footer }, a.createElement(w.ZP, { disabled: !r || o, onPress: l, size: "large", type: "primaryFilled" }, o ? a.createElement(P.Z, null) : "Next")))
                    );
                },
                O = { context: "TwoFactorSms" };
            function M(e) {
                return a.createElement(l.H, { errorConfig: O }, a.createElement(N, e));
            }
            const L = a.memo(M);
            var U = n(800697),
                j = n(482924);
            const V = U.Z,
                W = ({ challengeId: e }) => {
                    const { data: t } = (0, j.A)(V, { challengeId: e }, { fetchPolicy: "network-only" }),
                        n = t?.viewer_v2?.xp_start_two_factor_auth_challenge;
                    if (!n) return {};
                    const { error: a, login_request: r } = n;
                    return { error: a, ...(r && { challenge: r.challenge, loginRequestId: r.id, twoFactor: { id: r.two_factor_auth_method.id, type: r.two_factor_auth_method.two_factor_type }, verified: !!r.verified }) };
                },
                $ = "Please try again later or contact support team.",
                B = "The request expired, try again.",
                G = "The 2FA method on your account has an issue. Go to the app Settings, verify it, and try again.",
                X = "Too many attempts, try again later.",
                K = { DuplicatedRenameTwoFactorMethodDisplayName: G, ExpiredLoginVerification: B, FailureSmsCarrierDisabled: "We were not able to send an SMS to this carrier.", IneligibleFor2faAfterModification: G, InvalidRenameTwoFactorMethodDisplayName: G, LoginVerificationUserReactivationRequired: G, NoSecretForUser: G, NoTwoFactorAuthMethod: G, NotAllowed: G, NotValidForTokenExchange: G, NotYetApprovedLoginVerification: G, OfflineCodeSync: G, OverLoginVerificationAttemptLimit: X, OverLoginVerificationConvertLimit: X, OverResendLimit: X, SmsOverPerUserLimit: X, TwoFactorAuthMethodExpired: B, FailureSendingLoginVerificationRequest: $, OverLoginVerificationStartLimit: X, SmsVerPerUserLimit: X, TwoFactorAuthMethodDoesNotExist: G },
                Q = ({ challengeId: e, isNonModalScreen: t, onSuccess: n }) => {
                    const { challenge: r, error: l, loginRequestId: p, twoFactor: h } = W({ challengeId: e }),
                        _ = (0, o.useHistory)(),
                        f = (0, d.p)(),
                        y = _.location?.state,
                        b = s()(),
                        v = (0, u.z)();
                    a.useEffect(() => {
                        v && v.scribe({ page: "money", section: "money-two-factor-auth", action: "impression" });
                    }, [v]);
                    const w = a.useCallback(
                            ({ challengeResponse: t }) =>
                                p
                                    ? g({ environment: b, challengeId: e, loginRequestId: p, challengeResponse: t })
                                          .then((e) => {
                                              const { error: t, id: a, verified: r } = e;
                                              return a === p && r ? n({ loginRequestId: p }) : t && f({ text: K[t] ?? $ }), e;
                                          })
                                          .catch(() => {
                                              f({ text: $ });
                                          })
                                    : Promise.resolve(),
                            [p, b, e, n, f],
                        ),
                        { challengeInitiator: P, closePath: C } = y ?? {},
                        Z = a.useCallback(() => {
                            (0, m.qc)({ environment: b, closePath: C, challengeInitiator: P, history: _ });
                        }, [P, C, b, _]),
                        I = a.useMemo(() => (h?.type === c.O.BackupCode ? a.createElement(q, { onClose: Z, onSubmit: w }) : r && h?.type === c.O.Passkey ? a.createElement(D, { challenge: r, onClose: Z, onSubmit: w }) : h?.type === c.O.Sms ? a.createElement(L, { onClose: Z, onSubmit: w }) : h?.type === c.O.Totp ? a.createElement(E, { onClose: Z, onSubmit: w }) : a.createElement(z, { error: l ? (K[l] ?? $) : $, onClose: Z })), [r, l, Z, w, h?.type]);
                    return a.createElement(i.Z, { backButtonType: "close", history: _, isFullWidth: t, onBackClick: Z }, I);
                },
                J = { context: "VerifyTwoFactorAuth" };
            function Y(e) {
                return a.createElement(l.H, { errorConfig: J }, a.createElement(Q, e));
            }
            const ee = a.memo(Y);
        },
        160144: (e, t, n) => {
            n.d(t, { T: () => C, Z: () => S });
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
                p = n(655352),
                h = n(163889),
                _ = n(514639),
                f = n(412450),
                g = n(441484),
                y = n(99387),
                b = n(743080),
                v = n(727384);
            n(571372);
            class w {
                constructor() {
                    if (w.instance) throw new Error("Please avoid instantiating this singleton.");
                }
                static _updateActiveHandler(e, t) {
                    t !== w.activeHandler && (w.activeHandler && (window.removeEventListener("message", w.activeHandler), (w.activeHandler = void 0)), t && (window.addEventListener("message", t), (w.activeHandler = t)));
                }
                static addHandler(e, t) {
                    w.handlers.add(t);
                    const { isInlineFrame: n } = _.QU[e];
                    (w.activeHandler && n) || w._updateActiveHandler(e, t);
                }
                static removeHandler(e, t) {
                    if ((w.handlers.delete(t), w.activeHandler === t)) {
                        const t = w.handlers.values().next().value;
                        w._updateActiveHandler(e, t);
                    }
                }
            }
            w.handlers = new Set();
            const P = ({ allowedOrigin: e, handler: t, linkType: n }) => {
                    const r = a.useCallback(
                        (n) => {
                            n.origin === e && t(n);
                        },
                        [t, e],
                    );
                    a.useEffect(() => (w.addHandler(n, r), () => w.removeHandler(n, r)), [n, r]);
                },
                C = Object.freeze({ changePhone: "change-phone", success: "success", failure: "failure", ineligible: "ineligible", pendingReview: "pending-review", redirect: "redirect", close: "close", ready: "ready", initPorts: "initPorts", invalidChallenge: "invalid-challenge", docvChallenge: "challenge-docv-required", kycChallenge: "challenge-kyc-required", selfieChallenge: "challenge-selfie-required", twoFactorChallenge: "challenge-2fa-required", accountNumbercopiedToClipboard: "account-number-copied-to-clipboard", routingNumbercopiedToClipboard: "routing-number-copied-to-clipboard", edit: "edit", forgotPin: "forgot-pin", kyc: "kyc", stepUpDocv: "stepUpDocv" }),
                Z = (0, v.bI)(),
                I = ({ allowClipboardWrite: e, iframeUrl: t, isBackgroundHidden: n, isInlineFrame: s, isNonModalScreen: o }) => {
                    const d = (0, c.useHistory)(),
                        [m, _] = a.useState(!1),
                        f = (0, p.ZP)() ? F.paddingSmall : null,
                        g = a.useCallback(() => {
                            _(!0);
                        }, []),
                        y = a.createElement(r.Z, { style: n ? F.hide : F.modal }, t && a.createElement(a.Fragment, null, !m && a.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" }), a.createElement(l.Z, { allowClipboardWrite: e, allowForms: !0, onLoad: g, reportError: h.ZP, src: t, style: m ? [F.idvIframe, s ? void 0 : f] : F.hide, title: "Money" })));
                    return o || s || n ? y : a.createElement(u.Z, { history: d, renderHeader: () => null }, y);
                },
                k = (e) => {
                    const { additionalParams: t, linkType: n = _.P_.onboarding, redirectPath: r, errorPath: s, redirectState: i, closePath: l, eventCallback: d, payload: u, isNonModalScreen: m, isBackgroundHidden: p, challengeInitiator: h, challengeId: b } = e,
                        w = (0, c.useHistory)(),
                        { paymentsOrigin: k } = (0, f.Z)(),
                        E = g.Z.getSession(),
                        S = g.Z.getProviderToken(),
                        F = (0, v.gh)(),
                        [T, q] = a.useState(!1),
                        x = o()(),
                        { allowClipboardWrite: A, defaultClosePath: R, isInlineFrame: z, path: H, redirectOnCompletion: D } = _.QU[n],
                        N = a.useCallback(
                            (e) => {
                                const { errors: t, message: n, url: a } = e.data;
                                switch (n) {
                                    case C.initPorts: {
                                        const t = e.ports?.[0];
                                        t && (u && t.postMessage(u), (t.onmessage = d));
                                        break;
                                    }
                                    case C.changePhone:
                                        w.push("/settings/phone");
                                        break;
                                    case C.success:
                                        D && q(!0);
                                        break;
                                    case C.failure:
                                        D && w.replace(s ?? _.D$, { errors: t });
                                        break;
                                    case C.ineligible:
                                        (0, v.J$)(x), w.replace(_.H0);
                                        break;
                                    case C.pendingReview:
                                        (0, v.J$)(x), w.replace(_.vr);
                                        break;
                                    case C.redirect:
                                        Z && (window.location.href = a);
                                        break;
                                    case C.close:
                                        (0, v.J$)(x), w.replace(l ?? R);
                                }
                                d?.(e);
                            },
                            [d, w, D, x, l, R, u, s],
                        );
                    P({ allowedOrigin: k, handler: N, linkType: n });
                    const O = a.useMemo(() => {
                        if (!E || !k || !S) return;
                        const e = new Map();
                        return (
                            t?.forEach(({ key: t, value: n }) => {
                                e.set(t, n);
                            }),
                            Z &&
                                e.set(
                                    "redirectUrl",
                                    (({ challengeId: e, challengeInitiator: t }) => {
                                        const n = new URL(`https://${window.location.host}${_.$l}`);
                                        return e && n.searchParams.set("challengeId", e), t && n.searchParams.set("challengeInitiator", t), n.href;
                                    })({ challengeId: b, challengeInitiator: h }),
                                ),
                            (0, v.uG)({ basePath: `/${H}`, xPaymentsSession: E, theme: F, paymentsOrigin: k, moreSearchParams: e, providerToken: S })
                        );
                    }, [E, k, S, t, H, F, b, h]);
                    return T ? a.createElement(y.default, { challengeId: b, challengeInitiator: h, linkType: n, redirectPath: r, redirectState: i }) : a.createElement(I, { allowClipboardWrite: A, iframeUrl: O, isBackgroundHidden: p, isInlineFrame: z, isNonModalScreen: m });
                },
                E = (e) => {
                    const t = a.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" });
                    return a.createElement(m.B, { fallback: t }, a.createElement(k, e));
                },
                S = a.memo(E),
                F = d.default.create((e) => ({ idvIframe: { width: "100%", height: "100%", paddingTop: "0px" }, paddingSmall: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, hide: { display: "none" }, modal: { width: "100%", height: "100%" } }));
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
                const { paymentMethods: e } = (0, o.Z)(r.U.PaymentMethodFilterSpending),
                    t = e?.filter((e) => e.core?.details?.issued_card_type === a.W.IssuedCardTypePhysical),
                    n = e?.filter((e) => e.core?.details?.issued_card_type === a.W.IssuedCardTypeVirtual && e.core?.details?.status === s.D.Active);
                return { cards: e, activeVirtualCards: n, physicalCards: t, inactivePhysicalCards: t?.filter((e) => e.core?.details?.status === s.D.Inactive), cashbackRate: n?.[0]?.core?.details?.cashback?.rate };
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
                    const p = t?.check_transfers_eligibility,
                        h = !!p?.eligible,
                        { permissions: _, requirements: f, roles: g } = p ?? {};
                    return { isEligible: e && h, hasLoaded: !m && (!!t || a), requirements: f, roles: g, permissions: _, paymentsRedirectPath: (0, l.rW)({ roles: g, permissions: _ }) };
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
            n.d(t, { Z: () => o });
            var a = n(576751),
                r = (n(585488), n(482924));
            const s = a.Z,
                o = ({ type: e }) => {
                    const { data: t } = (0, r.A)(s, { document_type: e }),
                        n = t?.get_payments_documents;
                    return { documents: n };
                };
        },
        137882: (e, t, n) => {
            n.d(t, { b: () => r, v: () => s });
            n(543673), n(240753), n(128399);
            var a = n(412450);
            const r = ({ txId: e }) => {
                    const { supportUrl: t } = (0, a.Z)(),
                        n = new URL(t);
                    return e && n.searchParams.set("tx_id", e), n.href;
                },
                s = ({ reportedHandle: e, txId: t }) => {
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
                p = n(351743),
                h = n.n(p),
                _ = n(727384);
            const f = m.Z,
                g = () => {
                    const [e, t] = h()(f);
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
                                        updater: _.Oc,
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
                        p = r.useMemo(() => ({ require_pin_to_create_transactions: !!m?.require_pin_to_create_transactions, require_pin_to_unlock: !!m?.require_pin_to_unlock, enable_bill_pay: !!m?.enable_bill_pay, require_pin_to_link_payment_method: !!m?.require_pin_to_link_payment_method, only_receive_transfer_from_following: !!m?.only_receive_transfer_from_following, only_allow_request_from_following: !!m?.only_allow_request_from_following, enable_card_payments: !!m?.enable_card_payments }), [m]),
                        [h, _] = r.useState(p),
                        [f, v] = g(),
                        w = r.useCallback(
                            (e, t) => {
                                f({ preferences: { ...h, [e]: t } })
                                    .then(({ challengeId: e }) => {
                                        e ? a.push(l.vw, { challengeId: e, successMessage: y, challengeInitiator: l.kW.preference }) : s({ text: y });
                                    })
                                    .catch(() => {
                                        s({ text: "Something went wrong. Please try again later." }), _((n) => ({ ...n, [e]: !t }));
                                    });
                            },
                            [s, f, a, h],
                        ),
                        P = r.useCallback(
                            (e, t) => {
                                _((n) => ({ ...n, [e]: t })), w(e, t);
                            },
                            [w],
                        ),
                        C = r.useCallback(
                            (e, t) => {
                                w(e, t);
                            },
                            [w],
                        ),
                        Z = e?.get_customer?.__id ?? "get_customer";
                    return (
                        r.useEffect(() => {
                            n !== d.iF.LOADING && _(p);
                        }, [p, n]),
                        o()([Z], () => {
                            t();
                        }),
                        { preferences: h, refetch: t, refetchStatus: n, handlePreferencesChange: P, handleDeferredPreferencesChange: C, isInProgress: v }
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
                    u = d?.legacy?.name ?? "",
                    m = parseFloat(n),
                    p = n ? (0, a.p2)({ amount: m, currency: o }) : null,
                    h = (0, r.Z)({ senderId: d?.rest_id });
                return [(0, a.M9)({ status: i, transactionType: l, isViewerSender: h }), u && p ? { name: u, formattedAmount: p } : null];
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d60a37be.ebb27eea.js.map
