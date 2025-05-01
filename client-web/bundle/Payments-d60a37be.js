"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-d60a37be"],
    {
        43429: (e, t, n) => {
            n.d(t, { $W: () => a, DH: () => f, Ln: () => m, Ms: () => b, NU: () => y, Rz: () => o, Vq: () => i, ah: () => c, cX: () => l, dX: () => u, hv: () => h, ic: () => r, q9: () => g, uc: () => _, w8: () => s, wC: () => d, wG: () => p });
            n(202784);
            const r = 25,
                a = "xpayments-preset-all",
                s = (Object.freeze({ onboarding: "onboarding", upgradeToKycDocumentsVerified: "upgradeToKycDocumentsVerified" }), 280),
                o = Object.freeze({ credit: "credit", debit: "debit" }),
                c = (Object.freeze({ XPayments: "XPayments" }), Object.freeze({ reviewPane: "reviewPane", amountPane: "amountPane", successPane: "successPane" })),
                i = Object.freeze({ termsPane: "termsPane" }),
                l = Object.freeze({ reviewPane: "reviewPane", participantPane: "participantPane" }),
                d = Object.freeze({ bankDeposit: "bankDeposit", bankWithdraw: "bankWithdraw", card: "card", atm: "atm" }),
                u = Object.freeze({ bank: "bank", card: "card", x: "x" }),
                m = 4e3,
                p = 4,
                _ = "https://money.x.com/articles/terms-and-conditions",
                h = "https://money.x.com/articles/privacy-policy",
                f = "https://money.x.com/articles/short-form-disclosure",
                g = Object.freeze({ initiate: "initiate-challenge", complete2fa: "2fa-complete-challenge", completeKyc: "kyc-complete-challenge", completeDocv: "docv-complete-challenge", completeSelfie: "selfie-complete-challenge" }),
                y = Object.freeze({ balance: "balance", credit: "credit", debit: "debit" }),
                b = Object.freeze({ interest: "interest", deposit: "deposit", withdraw: "withdraw", atm: "atm" });
        },
        452275: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                a = n(107267),
                s = n(507651),
                o = n(952793),
                c = n(514639),
                i = n(412100);
            const l = () => {
                    const e = (0, a.useLocation)(),
                        { hasPendingTransactions: t } = (0, i.Z)(),
                        n = (0, o.hC)("payments_card_spend_enabled"),
                        l = r.useMemo(() => [{ to: { pathname: c.gp }, key: c.gp, label: "Account", isActive: () => e.pathname === c.gp }, n ? { to: { pathname: c.Tb }, key: c.Tb, label: "Card", isActive: () => e.pathname === c.Tb } : null, { to: { pathname: c.bR }, key: c.bR, label: "Activity", isActive: () => e.pathname === c.bR, badgePip: t }], [n, t, e.pathname]);
                    return r.createElement(s.Z, { isPillLink: !0, links: l });
                },
                d = r.memo(l);
        },
        193364: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var r = n(202784),
                a = n(437429),
                s = n.n(a),
                o = n(107267),
                c = n(413722),
                i = n(980407),
                l = n(736063),
                d = n(782642),
                u = n(725516),
                m = n(727384),
                p = n(56495),
                _ = n(10622),
                h = n.n(_);
            n(585488);
            const f = p.Z,
                g = ({ challengeId: e, challengeResponse: t, environment: n, loginRequestId: r }) =>
                    h()(n, f, { challengeId: e, challengeResponse: t, loginRequestId: r }, { fetchPolicy: "network-only" })
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
                        [a, s] = r.useState(""),
                        [o, c] = r.useState(!1),
                        i = (0, C.jh)(),
                        l = r.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: a }).finally(() => {
                                    c(!1);
                                });
                        }, [t, a]),
                        d = r.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-app", action: "impression" });
                        }, [n]),
                        r.createElement(r.Fragment, null, r.createElement(y.Z, { style: i.container }, r.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter the code from your authenticator app"), r.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: a })), r.createElement(y.Z, { style: i.footer }, r.createElement(w.ZP, { disabled: !a || o, onPress: l, size: "large", type: "primaryFilled" }, o ? r.createElement(P.Z, null) : "Next")))
                    );
                },
                I = { context: "TwoFactorAppCode" };
            function E(e) {
                return r.createElement(l.H, { errorConfig: I }, r.createElement(Z, e));
            }
            const k = r.memo(E),
                S = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, u.z)(),
                        [a, s] = r.useState(""),
                        [o, c] = r.useState(!1),
                        i = (0, C.jh)(),
                        l = r.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: a }).finally(() => {
                                    c(!1);
                                });
                        }, [t, a]),
                        d = r.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-backup", action: "impression" });
                        }, [n]),
                        r.createElement(r.Fragment, null, r.createElement(y.Z, { style: i.container }, r.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter your backup code"), r.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: a })), r.createElement(y.Z, { style: i.footer }, r.createElement(w.ZP, { disabled: !a || o, onPress: l, size: "large", type: "primaryFilled" }, o ? r.createElement(P.Z, null) : "Next")))
                    );
                },
                F = { context: "TwoFactorBackupCode" };
            function T(e) {
                return r.createElement(l.H, { errorConfig: F }, r.createElement(S, e));
            }
            const q = r.memo(T),
                A = ({ error: e, onClose: t }) => {
                    const n = (0, u.z)(),
                        a = (0, C.jh)();
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-notsupported", action: "impression" });
                        }, [n]),
                        r.createElement(r.Fragment, null, r.createElement(y.Z, { style: a.container }, r.createElement(b.ZP, { size: "title3", weight: "bold" }, "We were unable to verify you"), r.createElement(b.ZP, { color: "gray700" }, e)))
                    );
                },
                x = { context: "TwoFactorNotSupported" };
            function R(e) {
                return r.createElement(l.H, { errorConfig: x }, r.createElement(A, e));
            }
            const z = r.memo(R);
            var H = n(158272);
            function D({ challenge: e, onClose: t, onSubmit: n }) {
                const a = (0, d.p)(),
                    s = (0, u.z)();
                return (
                    r.useEffect(() => {
                        s.scribe({ page: "money", section: "money-2fa-passkey", action: "impression" });
                    }, [s]),
                    r.useEffect(() => {
                        (0, H.xG)(e)
                            .then((e) => {
                                n({ challengeResponse: e });
                            })
                            .catch(() => {
                                a({ text: H.Kh }), t();
                            });
                    }, [a, e, t, n]),
                    (0, H.iW)() ? r.createElement(P.Z, null) : r.createElement(b.ZP, { align: "center" }, H.z_)
                );
            }
            const N = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, u.z)(),
                        [a, s] = r.useState(""),
                        [o, c] = r.useState(!1),
                        i = (0, C.jh)(),
                        l = r.useCallback(() => {
                            c(!0),
                                t({ challengeResponse: a }).finally(() => {
                                    c(!1);
                                });
                        }, [t, a]),
                        d = r.useCallback((e) => {
                            s(e.target.value);
                        }, []);
                    return (
                        r.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-sms", action: "impression" });
                        }, [n]),
                        r.createElement(r.Fragment, null, r.createElement(y.Z, { style: i.container }, r.createElement(b.ZP, { size: "title3", weight: "bold" }, "Enter the code we sent to your phone"), r.createElement(v.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: C.ZP.paddingNone, testID: "code", type: "password", value: a })), r.createElement(y.Z, { style: i.footer }, r.createElement(w.ZP, { disabled: !a || o, onPress: l, size: "large", type: "primaryFilled" }, o ? r.createElement(P.Z, null) : "Next")))
                    );
                },
                O = { context: "TwoFactorSms" };
            function M(e) {
                return r.createElement(l.H, { errorConfig: O }, r.createElement(N, e));
            }
            const L = r.memo(M);
            var U = n(800697),
                j = n(482924);
            const V = U.Z,
                W = ({ challengeId: e }) => {
                    const { data: t } = (0, j.A)(V, { challengeId: e }, { fetchPolicy: "network-only" }),
                        n = t?.viewer_v2?.xp_start_two_factor_auth_challenge;
                    if (!n) return {};
                    const { error: r, login_request: a } = n;
                    return { error: r, ...(a && { challenge: a.challenge, loginRequestId: a.id, twoFactor: { id: a.two_factor_auth_method.id, type: a.two_factor_auth_method.two_factor_type }, verified: !!a.verified }) };
                },
                $ = "Please try again later or contact support team.",
                B = "The request expired, try again.",
                G = "The 2FA method on your account has an issue. Go to the app Settings, verify it, and try again.",
                X = "Too many attempts, try again later.",
                K = { DuplicatedRenameTwoFactorMethodDisplayName: G, ExpiredLoginVerification: B, FailureSmsCarrierDisabled: "We were not able to send an SMS to this carrier.", IneligibleFor2faAfterModification: G, InvalidRenameTwoFactorMethodDisplayName: G, LoginVerificationUserReactivationRequired: G, NoSecretForUser: G, NoTwoFactorAuthMethod: G, NotAllowed: G, NotValidForTokenExchange: G, NotYetApprovedLoginVerification: G, OfflineCodeSync: G, OverLoginVerificationAttemptLimit: X, OverLoginVerificationConvertLimit: X, OverResendLimit: X, SmsOverPerUserLimit: X, TwoFactorAuthMethodExpired: B, FailureSendingLoginVerificationRequest: $, OverLoginVerificationStartLimit: X, SmsVerPerUserLimit: X, TwoFactorAuthMethodDoesNotExist: G },
                Q = ({ challengeId: e, isNonModalScreen: t, onSuccess: n }) => {
                    const { challenge: a, error: l, loginRequestId: p, twoFactor: _ } = W({ challengeId: e }),
                        h = (0, o.useHistory)(),
                        f = (0, d.p)(),
                        y = h.location?.state,
                        b = s()(),
                        v = (0, u.z)();
                    r.useEffect(() => {
                        v && v.scribe({ page: "money", section: "money-two-factor-auth", action: "impression" });
                    }, [v]);
                    const w = r.useCallback(
                            ({ challengeResponse: t }) =>
                                p
                                    ? g({ environment: b, challengeId: e, loginRequestId: p, challengeResponse: t })
                                          .then((e) => {
                                              const { error: t, id: r, verified: a } = e;
                                              return r === p && a ? n({ loginRequestId: p }) : t && f({ text: K[t] ?? $ }), e;
                                          })
                                          .catch(() => {
                                              f({ text: $ });
                                          })
                                    : Promise.resolve(),
                            [p, b, e, n, f],
                        ),
                        { challengeInitiator: P, closePath: C } = y ?? {},
                        Z = r.useCallback(() => {
                            (0, m.qc)({ environment: b, closePath: C, challengeInitiator: P, history: h });
                        }, [P, C, b, h]),
                        I = r.useMemo(() => (_?.type === c.O.BackupCode ? r.createElement(q, { onClose: Z, onSubmit: w }) : a && _?.type === c.O.Passkey ? r.createElement(D, { challenge: a, onClose: Z, onSubmit: w }) : _?.type === c.O.Sms ? r.createElement(L, { onClose: Z, onSubmit: w }) : _?.type === c.O.Totp ? r.createElement(k, { onClose: Z, onSubmit: w }) : r.createElement(z, { error: l ? (K[l] ?? $) : $, onClose: Z })), [a, l, Z, w, _?.type]);
                    return r.createElement(i.Z, { backButtonType: "close", history: h, isFullWidth: t, onBackClick: Z }, I);
                },
                J = { context: "VerifyTwoFactorAuth" };
            function Y(e) {
                return r.createElement(l.H, { errorConfig: J }, r.createElement(Q, e));
            }
            const ee = r.memo(Y);
        },
        160144: (e, t, n) => {
            n.d(t, { T: () => C, Z: () => S });
            n(543673), n(240753), n(128399), n(136728);
            var r = n(202784),
                a = n(325686),
                s = n(437429),
                o = n.n(s),
                c = n(107267),
                i = n(167630),
                l = n(362075),
                d = n(392237),
                u = n(980407),
                m = n(943914),
                p = n(655352),
                _ = n(163889),
                h = n(514639),
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
                    const { isInlineFrame: n } = h.QU[e];
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
                    const a = r.useCallback(
                        (n) => {
                            n.origin === e && t(n);
                        },
                        [t, e],
                    );
                    r.useEffect(() => (w.addHandler(n, a), () => w.removeHandler(n, a)), [n, a]);
                },
                C = Object.freeze({ changePhone: "change-phone", success: "success", failure: "failure", ineligible: "ineligible", pendingReview: "pending-review", redirect: "redirect", close: "close", ready: "ready", initPorts: "initPorts", invalidChallenge: "invalid-challenge", docvChallenge: "challenge-docv-required", kycChallenge: "challenge-kyc-required", selfieChallenge: "challenge-selfie-required", twoFactorChallenge: "challenge-2fa-required", accountNumbercopiedToClipboard: "account-number-copied-to-clipboard", routingNumbercopiedToClipboard: "routing-number-copied-to-clipboard", edit: "edit", forgotPin: "forgot-pin", kyc: "kyc", stepUpDocv: "stepUpDocv" }),
                Z = (0, v.bI)(),
                I = ({ allowClipboardWrite: e, iframeUrl: t, isBackgroundHidden: n, isInlineFrame: s, isNonModalScreen: o }) => {
                    const d = (0, c.useHistory)(),
                        [m, h] = r.useState(!1),
                        f = (0, p.ZP)() ? F.paddingSmall : null,
                        g = r.useCallback(() => {
                            h(!0);
                        }, []),
                        y = r.createElement(a.Z, { style: n ? F.hide : F.modal }, t && r.createElement(r.Fragment, null, !m && r.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" }), r.createElement(l.Z, { allowClipboardWrite: e, allowForms: !0, onLoad: g, reportError: _.ZP, src: t, style: m ? [F.idvIframe, s ? void 0 : f] : F.hide, title: "Money" })));
                    return o || s || n ? y : r.createElement(u.Z, { history: d, renderHeader: () => null }, y);
                },
                E = (e) => {
                    const { additionalParams: t, linkType: n = h.P_.onboarding, redirectPath: a, errorPath: s, redirectState: i, closePath: l, eventCallback: d, payload: u, isNonModalScreen: m, isBackgroundHidden: p, challengeInitiator: _, challengeId: b } = e,
                        w = (0, c.useHistory)(),
                        { paymentsOrigin: E } = (0, f.Z)(),
                        k = g.Z.getSession(),
                        S = g.Z.getProviderToken(),
                        F = (0, v.gh)(),
                        [T, q] = r.useState(!1),
                        A = o()(),
                        { allowClipboardWrite: x, defaultClosePath: R, isInlineFrame: z, path: H, redirectOnCompletion: D } = h.QU[n],
                        N = r.useCallback(
                            (e) => {
                                const { errors: t, message: n, url: r } = e.data;
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
                                        D && w.replace(s ?? h.D$, { errors: t });
                                        break;
                                    case C.ineligible:
                                        (0, v.J$)(A), w.replace(h.H0);
                                        break;
                                    case C.pendingReview:
                                        (0, v.J$)(A), w.replace(h.vr);
                                        break;
                                    case C.redirect:
                                        Z && (window.location.href = r);
                                        break;
                                    case C.close:
                                        (0, v.J$)(A), w.replace(l ?? R);
                                }
                                d?.(e);
                            },
                            [d, w, D, A, l, R, u, s],
                        );
                    P({ allowedOrigin: E, handler: N, linkType: n });
                    const O = r.useMemo(() => {
                        if (!k || !E || !S) return;
                        const e = new Map();
                        return (
                            t?.forEach(({ key: t, value: n }) => {
                                e.set(t, n);
                            }),
                            Z &&
                                e.set(
                                    "redirectUrl",
                                    (({ challengeId: e, challengeInitiator: t }) => {
                                        const n = new URL(`https://${window.location.host}${h.$l}`);
                                        return e && n.searchParams.set("challengeId", e), t && n.searchParams.set("challengeInitiator", t), n.href;
                                    })({ challengeId: b, challengeInitiator: _ }),
                                ),
                            (0, v.uG)({ basePath: `/${H}`, xPaymentsSession: k, theme: F, paymentsOrigin: E, moreSearchParams: e, providerToken: S })
                        );
                    }, [k, E, S, t, H, F, b, _]);
                    return T ? r.createElement(y.default, { challengeId: b, challengeInitiator: _, linkType: n, redirectPath: a, redirectState: i }) : r.createElement(I, { allowClipboardWrite: x, iframeUrl: O, isBackgroundHidden: p, isInlineFrame: z, isNonModalScreen: m });
                },
                k = (e) => {
                    const t = r.createElement(i.Z, { size: "small", style: b.ZP.spinner, testID: "loading-spinner" });
                    return r.createElement(m.B, { fallback: t }, r.createElement(E, e));
                },
                S = r.memo(k),
                F = d.default.create((e) => ({ idvIframe: { width: "100%", height: "100%", paddingTop: "0px" }, paddingSmall: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, hide: { display: "none" }, modal: { width: "100%", height: "100%" } }));
        },
        412100: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(297679),
                a = (n(585488), n(353391)),
                s = n.n(a),
                o = n(312771),
                c = n(127218),
                i = n(43429);
            const l = r.Z,
                d = () => {
                    const { data: e, fetchNext: t, refetch: n, subsequentFetchStatus: r } = (0, c.C)(l, { count: i.ic }),
                        a = e?.get_payments_customer_actions?.__id ?? "useActionableItemsQuery_TransactionActions_slice";
                    return (
                        s()([a], () => {
                            n();
                        }),
                        { data: e, refetch: n, isRefreshing: r === o.ZP.LOADING, fetchNext: t, hasNotices: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsCustomerNotice" === e?.__typename), hasPendingTransactions: !!e?.get_payments_customer_actions?.items?.some((e) => "XPaymentsTransaction" === e?.__typename) }
                    );
                };
        },
        500386: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(663090),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(727384);
            const i = r.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        a.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((r, a) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_transfer?.id,
                                                s = e?.cancel_transfer?.challenge_id,
                                                o = e?.cancel_transfer?.transaction_status,
                                                c = e?.cancel_transfer?.errors;
                                            n && o ? r({ transactionId: n, status: o, challengeId: s }) : a(c || t);
                                        },
                                        updater: (e, n) => {
                                            const r = n?.cancel_transfer?.transaction_status,
                                                a = n?.cancel_transfer?.reason_code;
                                            (0, c.H_)(e, { status: r, recordId: t, reasonCode: a });
                                        },
                                        onError: a,
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
            var r = n(597785),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(727384);
            const i = r.Z,
                l = () => {
                    const [e, t] = o()(i);
                    return [
                        a.useCallback(
                            ({ recordId: t, transactionId: n }) =>
                                new Promise((r, a) => {
                                    e({
                                        variables: { transfer_id: n },
                                        onCompleted: (e, t) => {
                                            const n = e?.cancel_request_transfer?.id,
                                                s = e?.cancel_request_transfer?.transaction_status,
                                                o = e?.cancel_request_transfer?.challenge_id,
                                                c = e?.cancel_request_transfer?.errors;
                                            n && s ? r({ transactionId: n, status: s, challengeId: o }) : a(c || t);
                                        },
                                        updater: (e, n) => {
                                            const r = n?.cancel_request_transfer?.transaction_status,
                                                a = n?.cancel_request_transfer?.reason_code;
                                            (0, c.H_)(e, { status: r, recordId: t, reasonCode: a });
                                        },
                                        onError: a,
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
            var r = n(990563),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(402229),
                i = n(727384);
            const l = r.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        a.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((a, s) => {
                                    t({
                                        variables: { transfer_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.claim_transfer?.id,
                                                r = e?.claim_transfer?.transaction_status,
                                                o = e?.claim_transfer?.challenge_id,
                                                c = e?.claim_transfer?.errors;
                                            n && r ? a({ transactionId: n, status: r, challengeId: o }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.claim_transfer?.transaction_status,
                                                a = t?.claim_transfer?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: n, reasonCode: a });
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
            var r = n(708154),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(402311),
                i = n(727384);
            const l = r.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        a.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((a, s) => {
                                    t({
                                        variables: { transaction_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.confirm_unrecognized_payment?.transaction,
                                                r = n?.id,
                                                o = n?.transaction_status,
                                                c = e?.confirm_unrecognized_payment?.errors,
                                                i = e?.confirm_unrecognized_payment?.challenge_id;
                                            r && o ? a({ transactionId: r, status: o, challengeId: i }) : s(c || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.confirm_unrecognized_payment?.transaction,
                                                a = r?.transaction_status,
                                                s = r?.reason_code;
                                            (0, i.H_)(e, { status: a, recordId: n, reasonCode: s });
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
            var r = n(125363),
                a = n(390387);
            const s = ({ senderId: e }) => (0, r.v9)(a._h) === e;
        },
        226595: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(642004),
                a = n(87877),
                s = n(922281),
                o = n(226332);
            const c = () => {
                const { paymentMethods: e } = (0, o.Z)(a.U.PaymentMethodFilterSpending),
                    t = e?.filter((e) => e.core?.details?.issued_card_type === r.W.IssuedCardTypePhysical);
                return { cards: e, activeVirtualCards: e?.filter((e) => e.core?.details?.issued_card_type === r.W.IssuedCardTypeVirtual && e.core?.details?.status === s.D.Active), physicalCards: t, inactivePhysicalCards: t?.filter((e) => e.core?.details?.status === s.D.Inactive) };
            };
        },
        629015: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(40969),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(952793),
                i = n(441484),
                l = n(698478);
            const d = r.Z,
                u = () => {
                    const e = (0, c.hC)("payments_enabled"),
                        [t, n] = a.useState(),
                        [r, s] = a.useState(!1),
                        [u, m] = o()(d);
                    a.useEffect(() => {
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
                        _ = !!p?.eligible,
                        { permissions: h, requirements: f, roles: g } = p ?? {};
                    return { isEligible: e && _, hasLoaded: !m && (!!t || r), requirements: f, roles: g, permissions: h, paymentsRedirectPath: (0, l.rW)({ roles: g, permissions: h }) };
                };
        },
        934265: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(183276),
                a = (n(585488), n(353391)),
                s = n.n(a),
                o = n(940211),
                c = n(482924);
            const i = r.Z,
                l = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, c.A)(i, {}, { fetchPolicy: "store-and-network" }),
                        r = e.get_accounts?.find((e) => e.identifier === o.b.UserMain),
                        a = r?.__id ?? "get_accounts";
                    return (
                        s()([a], () => {
                            t();
                        }),
                        { balance: r?.balance, refetch: t, refetchStatus: n }
                    );
                };
        },
        348340: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(576751),
                a = (n(585488), n(482924));
            const s = r.Z,
                o = ({ type: e }) => {
                    const { data: t } = (0, a.A)(s, { document_type: e }),
                        n = t?.get_payments_documents;
                    return { documents: n };
                };
        },
        137882: (e, t, n) => {
            n.d(t, { b: () => a, v: () => s });
            n(543673), n(240753), n(128399);
            var r = n(412450);
            const a = ({ txId: e }) => {
                    const { supportUrl: t } = (0, r.Z)(),
                        n = new URL(t);
                    return e && n.searchParams.set("tx_id", e), n.href;
                },
                s = ({ reportedHandle: e, txId: t }) => {
                    const { reportUrl: n } = (0, r.Z)(),
                        a = new URL(n);
                    return t && a.searchParams.set("tx_id", t), e && a.searchParams.set("tx_reported_handle", `@${e}`), a.href;
                };
        },
        57335: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(710555),
                a = (n(585488), n(940211)),
                s = n(482924);
            const o = r.Z,
                c = () => {
                    const { data: e } = (0, s.A)(o, {}, { fetchPolicy: "store-and-network" }),
                        t = e.get_accounts?.find((e) => e.identifier === a.b.UserInterest);
                    return { id: t?.id, interest: t?.interest_details };
                };
        },
        329923: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(204133),
                a = (n(585488), n(712696)),
                s = n.n(a),
                o = n(727384);
            const c = r.Z,
                i = () => {
                    const e = s()(c, {}),
                        t = e?.get_payments_invitation_details,
                        n = t?.invitation_amount_local_micro,
                        r = t?.currency,
                        a = t?.invitation_count,
                        i = n ? (0, o.vw)({ amount: n, currency: r }) : null;
                    return { invitationCount: a ? parseInt(a, 10) : null, formattedAmount: i };
                };
        },
        889738: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(924592),
                a = (n(585488), n(482924));
            const s = r.Z,
                o = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, a.A)(s, {}),
                        r = e?.get_customer?.limits;
                    return { limits: r, refetch: t, refetchStatus: n };
                };
        },
        226332: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(703325),
                a = (n(585488), n(353391)),
                s = n.n(a),
                o = n(87877),
                c = n(922281),
                i = n(482924);
            const l = r.Z,
                d = (e) => {
                    const { data: t, refetch: n, refetchStatus: r } = (0, i.A)(l, { filter: e ?? o.U.PaymentMethodFilterFunding, withIssuedSpend: e === o.U.PaymentMethodFilterSpending }),
                        a = t?.get_payment_methods_v2,
                        d = a?.filter((e) => e.core?.details?.status === c.D.Active),
                        u = a?.filter((e) => e.core?.details?.status === c.D.Active || e.core?.details?.status === c.D.LoginRequired),
                        m = a?.[0]?.__id ?? t?.__id;
                    return (
                        s()([m], () => {
                            n();
                        }),
                        { paymentMethods: a, activePaymentMethods: d, usablePaymentMethods: u, refetchStatus: r }
                    );
                };
        },
        529438: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(264462),
                a = (n(585488), n(482924));
            const s = r.Z,
                o = () => {
                    const { data: e } = (0, a.A)(s, {}),
                        t = e?.get_customer?.name;
                    return t;
                };
        },
        24568: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var r = n(215285),
                a = n(202784),
                s = (n(585488), n(353391)),
                o = n.n(s),
                c = n(107267),
                i = n(782642),
                l = n(514639),
                d = n(312771),
                u = n(482924),
                m = n(746523),
                p = n(351743),
                _ = n.n(p),
                h = n(727384);
            const f = m.Z,
                g = () => {
                    const [e, t] = _()(f);
                    return [
                        a.useCallback(
                            ({ preferences: t }) =>
                                new Promise((n, r) => {
                                    e({
                                        variables: { preferences: t },
                                        onCompleted: (e, t) => {
                                            const a = e?.update_customer_preferences?.errors,
                                                s = e?.update_customer_preferences?.challenge_id;
                                            a ? r(a) : n({ challengeId: s });
                                        },
                                        updater: h.Oc,
                                        onError: r,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                },
                y = "Your setting has been successfully updated!",
                b = r.Z,
                v = () => {
                    const { data: e, refetch: t, refetchStatus: n } = (0, u.A)(b, {}),
                        r = (0, c.useHistory)(),
                        s = (0, i.p)(),
                        m = e?.get_customer?.preferences,
                        p = a.useMemo(() => ({ require_pin_to_create_transactions: !!m?.require_pin_to_create_transactions, require_pin_to_unlock: !!m?.require_pin_to_unlock, enable_bill_pay: !!m?.enable_bill_pay, require_pin_to_link_payment_method: !!m?.require_pin_to_link_payment_method, only_receive_transfer_from_following: !!m?.only_receive_transfer_from_following, only_allow_request_from_following: !!m?.only_allow_request_from_following, enable_card_payments: !!m?.enable_card_payments }), [m]),
                        [_, h] = a.useState(p),
                        [f, v] = g(),
                        w = a.useCallback(
                            (e, t) => {
                                f({ preferences: { ..._, [e]: t } })
                                    .then(({ challengeId: e }) => {
                                        e ? r.push(l.vw, { challengeId: e, successMessage: y, challengeInitiator: l.kW.preference }) : s({ text: y });
                                    })
                                    .catch(() => {
                                        s({ text: "Something went wrong. Please try again later." }), h((n) => ({ ...n, [e]: !t }));
                                    });
                            },
                            [s, f, r, _],
                        ),
                        P = a.useCallback(
                            (e, t) => {
                                h((n) => ({ ...n, [e]: t })), w(e, t);
                            },
                            [w],
                        ),
                        C = a.useCallback(
                            (e, t) => {
                                w(e, t);
                            },
                            [w],
                        ),
                        Z = e?.get_customer?.__id ?? "get_customer";
                    return (
                        a.useEffect(() => {
                            n !== d.iF.LOADING && h(p);
                        }, [p, n]),
                        o()([Z], () => {
                            t();
                        }),
                        { preferences: _, refetch: t, refetchStatus: n, handlePreferencesChange: P, handleDeferredPreferencesChange: C, isInProgress: v }
                    );
                };
        },
        557159: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(177405),
                a = (n(585488), n(482924));
            const s = r.Z,
                o = () => {
                    const { data: e } = (0, a.A)(s, {}),
                        t = e?.get_customer?.region;
                    return t;
                };
        },
        464978: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(192828),
                a = (n(585488), n(353391)),
                s = n.n(a),
                o = n(482924);
            const c = r.Z,
                i = (e) => {
                    const { data: t, refetch: n } = (0, o.A)(c, { transaction_id: e }),
                        r = t.get_transaction_by_id?.__id ?? "get_transaction_by_id";
                    return (
                        s()([r], () => {
                            n();
                        }),
                        t
                    );
                };
        },
        190940: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(727384),
                a = n(467734),
                s = n(464978);
            const o = (e) => {
                const { get_transaction_by_id: t } = (0, s.Z)(e),
                    { amount_local_micro: n, currency: o, details: c, transaction_status: i, transaction_type: l } = t ?? {},
                    d = c?.sender_results?.result,
                    u = d?.legacy?.name ?? "",
                    m = parseFloat(n),
                    p = n ? (0, r.p2)({ amount: m, currency: o }) : null,
                    _ = (0, a.Z)({ senderId: d?.rest_id });
                return [(0, r.M9)({ status: i, transactionType: l, isViewerSender: _ }), u && p ? { name: u, formattedAmount: p } : null];
            };
        },
        825941: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(258074),
                a = (n(585488), n(353391)),
                s = n.n(a),
                o = n(127218),
                c = n(43429);
            const i = r.Z,
                l = (e) => {
                    const t = { count: c.ic };
                    e?.searchFilterId && (t.search_filter_id = e?.searchFilterId);
                    const { data: n, fetchNext: r, refetch: a } = (0, o.C)(i, t, { fetchPolicy: "store-and-network" }),
                        l = n?.get_transactions?.__id ?? "usePaymentsTransactionsListQuery_TransactionList_slice";
                    return (
                        s()([l], () => {
                            a();
                        }),
                        { data: n, fetchNext: r, refetch: a }
                    );
                };
        },
        891414: (e, t, n) => {
            n.d(t, { C7: () => m, iP: () => u });
            var r = n(922524),
                a = n(202784),
                s = (n(585488), n(351743)),
                o = n.n(s),
                c = n(364539),
                i = n(727384);
            const l = r.Z,
                d = ({ decision: e }) => {
                    const [t, n] = o()(l);
                    return [
                        a.useCallback(
                            ({ recordId: n, transactionId: r }) =>
                                new Promise((a, s) => {
                                    t({
                                        variables: { transfer_id: r, decision: e },
                                        onCompleted: (e, t) => {
                                            const n = e?.respond_to_request_transfer?.id,
                                                r = e?.respond_to_request_transfer?.transaction_status,
                                                o = e?.respond_to_request_transfer?.errors,
                                                c = e?.respond_to_request_transfer?.challenge_id;
                                            n && r ? a({ transactionId: n, status: r, challengeId: c }) : s(o || t);
                                        },
                                        updater: (e, t) => {
                                            const r = t?.respond_to_request_transfer?.transaction_status,
                                                a = t?.respond_to_request_transfer?.reason_code;
                                            (0, i.H_)(e, { status: r, recordId: n, reasonCode: a });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-d60a37be.7b277aba.js.map
