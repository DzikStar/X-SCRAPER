"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-71f7a682"],
    {
        452275: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(107267),
                o = n(507651),
                i = n(952793),
                l = n(514639),
                s = n(412100);
            const c = () => {
                    const e = (0, r.useLocation)(),
                        { hasPendingTransactions: t } = (0, s.Z)(),
                        n = (0, i.hC)("payments_card_spend_enabled"),
                        c = a.useMemo(() => [{ to: { pathname: l.gp }, key: l.gp, label: "Account", isActive: () => e.pathname === l.gp }, n ? { to: { pathname: l.Tb }, key: l.Tb, label: "Card", isActive: () => e.pathname === l.Tb } : null, { to: { pathname: l.bR }, key: l.bR, label: "Activity", isActive: () => e.pathname === l.bR, badgePip: t }], [n, t, e.pathname]);
                    return a.createElement(o.Z, { isPillLink: !0, links: c });
                },
                d = a.memo(c);
        },
        193364: (e, t, n) => {
            n.d(t, { Z: () => ee });
            var a = n(202784),
                r = n(437429),
                o = n.n(r),
                i = n(107267),
                l = n(413722),
                s = n(980407),
                c = n(736063),
                d = n(782642),
                m = n(725516),
                u = n(727384),
                p = n(56495),
                h = n(10622),
                g = n.n(h);
            n(585488);
            const y = p.Z,
                f = ({ challengeId: e, challengeResponse: t, environment: n, loginRequestId: a }) =>
                    g()(n, y, { challengeId: e, challengeResponse: t, loginRequestId: a }, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const t = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.login_request,
                                n = e?.viewer_v2?.xp_finish_two_factor_auth_challenge?.error;
                            return { id: t?.id, error: n, verified: !!t?.verified };
                        });
            var b = n(325686),
                v = n(731708),
                E = n(855488),
                w = n(154003),
                C = n(167630),
                P = n(743080);
            const k = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, o] = a.useState(""),
                        [i, l] = a.useState(!1),
                        s = (0, P.jh)(),
                        c = a.useCallback(() => {
                            l(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    l(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            o(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-app", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(b.Z, { style: s.container }, a.createElement(v.ZP, { size: "title3", weight: "bold" }, "Enter the code from your authenticator app"), a.createElement(E.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: P.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(b.Z, { style: s.footer }, a.createElement(w.ZP, { disabled: !r || i, onPress: c, size: "large", type: "primaryFilled" }, i ? a.createElement(C.Z, null) : "Next")))
                    );
                },
                Z = { context: "TwoFactorAppCode" };
            function S(e) {
                return a.createElement(c.H, { errorConfig: Z }, a.createElement(k, e));
            }
            const _ = a.memo(S),
                F = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, o] = a.useState(""),
                        [i, l] = a.useState(!1),
                        s = (0, P.jh)(),
                        c = a.useCallback(() => {
                            l(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    l(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            o(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-backup", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(b.Z, { style: s.container }, a.createElement(v.ZP, { size: "title3", weight: "bold" }, "Enter your backup code"), a.createElement(E.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: P.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(b.Z, { style: s.footer }, a.createElement(w.ZP, { disabled: !r || i, onPress: c, size: "large", type: "primaryFilled" }, i ? a.createElement(C.Z, null) : "Next")))
                    );
                },
                I = { context: "TwoFactorBackupCode" };
            function T(e) {
                return a.createElement(c.H, { errorConfig: I }, a.createElement(F, e));
            }
            const H = a.memo(T),
                R = ({ error: e, onClose: t }) => {
                    const n = (0, m.z)(),
                        r = (0, P.jh)();
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-notsupported", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(b.Z, { style: r.container }, a.createElement(v.ZP, { size: "title3", weight: "bold" }, "We were unable to verify you"), a.createElement(v.ZP, { color: "gray700" }, e)))
                    );
                },
                x = { context: "TwoFactorNotSupported" };
            function N(e) {
                return a.createElement(c.H, { errorConfig: x }, a.createElement(R, e));
            }
            const A = a.memo(N);
            var z = n(158272);
            function L({ challenge: e, onClose: t, onSubmit: n }) {
                const r = (0, d.p)(),
                    o = (0, m.z)();
                return (
                    a.useEffect(() => {
                        o.scribe({ page: "money", section: "money-2fa-passkey", action: "impression" });
                    }, [o]),
                    a.useEffect(() => {
                        (0, z.xG)(e)
                            .then((e) => {
                                n({ challengeResponse: e });
                            })
                            .catch(() => {
                                r({ text: z.Kh }), t();
                            });
                    }, [r, e, t, n]),
                    (0, z.iW)() ? a.createElement(C.Z, null) : a.createElement(v.ZP, { align: "center" }, z.z_)
                );
            }
            const M = ({ onClose: e, onSubmit: t }) => {
                    const n = (0, m.z)(),
                        [r, o] = a.useState(""),
                        [i, l] = a.useState(!1),
                        s = (0, P.jh)(),
                        c = a.useCallback(() => {
                            l(!0),
                                t({ challengeResponse: r }).finally(() => {
                                    l(!1);
                                });
                        }, [t, r]),
                        d = a.useCallback((e) => {
                            o(e.target.value);
                        }, []);
                    return (
                        a.useEffect(() => {
                            n && n.scribe({ page: "money", section: "money-2fa-sms", action: "impression" });
                        }, [n]),
                        a.createElement(a.Fragment, null, a.createElement(b.Z, { style: s.container }, a.createElement(v.ZP, { size: "title3", weight: "bold" }, "Enter the code we sent to your phone"), a.createElement(E.Z, { autoFocus: !0, label: "Code", name: "code", onChange: d, showPasswordVisibilityIcon: !0, style: P.ZP.paddingNone, testID: "code", type: "password", value: r })), a.createElement(b.Z, { style: s.footer }, a.createElement(w.ZP, { disabled: !r || i, onPress: c, size: "large", type: "primaryFilled" }, i ? a.createElement(C.Z, null) : "Next")))
                    );
                },
                q = { context: "TwoFactorSms" };
            function O(e) {
                return a.createElement(c.H, { errorConfig: q }, a.createElement(M, e));
            }
            const V = a.memo(O);
            var D = n(800697),
                U = n(482924);
            const W = D.Z,
                $ = ({ challengeId: e }) => {
                    const { data: t } = (0, U.A)(W, { challengeId: e }, { fetchPolicy: "network-only" }),
                        n = t?.viewer_v2?.xp_start_two_factor_auth_challenge;
                    if (!n) return {};
                    const { error: a, login_request: r } = n;
                    return { error: a, ...(r && { challenge: r.challenge, loginRequestId: r.id, twoFactor: { id: r.two_factor_auth_method.id, type: r.two_factor_auth_method.two_factor_type }, verified: !!r.verified }) };
                },
                j = "Please try again later or contact support team.",
                B = "The request expired, try again.",
                G = "The 2FA method on your account has an issue. Go to the app Settings, verify it, and try again.",
                J = "Too many attempts, try again later.",
                Q = { DuplicatedRenameTwoFactorMethodDisplayName: G, ExpiredLoginVerification: B, FailureSmsCarrierDisabled: "We were not able to send an SMS to this carrier.", IneligibleFor2faAfterModification: G, InvalidRenameTwoFactorMethodDisplayName: G, LoginVerificationUserReactivationRequired: G, NoSecretForUser: G, NoTwoFactorAuthMethod: G, NotAllowed: G, NotValidForTokenExchange: G, NotYetApprovedLoginVerification: G, OfflineCodeSync: G, OverLoginVerificationAttemptLimit: J, OverLoginVerificationConvertLimit: J, OverResendLimit: J, SmsOverPerUserLimit: J, TwoFactorAuthMethodExpired: B, FailureSendingLoginVerificationRequest: j, OverLoginVerificationStartLimit: J, SmsVerPerUserLimit: J, TwoFactorAuthMethodDoesNotExist: G },
                K = ({ challengeId: e, isNonModalScreen: t, onSuccess: n }) => {
                    const { challenge: r, error: c, loginRequestId: p, twoFactor: h } = $({ challengeId: e }),
                        g = (0, i.useHistory)(),
                        y = (0, d.p)(),
                        b = g.location?.state,
                        v = o()(),
                        E = (0, m.z)();
                    a.useEffect(() => {
                        E && E.scribe({ page: "money", section: "money-two-factor-auth", action: "impression" });
                    }, [E]);
                    const w = a.useCallback(
                            ({ challengeResponse: t }) =>
                                p
                                    ? f({ environment: v, challengeId: e, loginRequestId: p, challengeResponse: t })
                                          .then((e) => {
                                              const { error: t, id: a, verified: r } = e;
                                              return a === p && r ? n({ loginRequestId: p }) : t && y({ text: Q[t] ?? j }), e;
                                          })
                                          .catch(() => {
                                              y({ text: j });
                                          })
                                    : Promise.resolve(),
                            [p, v, e, n, y],
                        ),
                        { challengeInitiator: C, closePath: P } = b ?? {},
                        k = a.useCallback(() => {
                            (0, u.qc)({ environment: v, closePath: P, challengeInitiator: C, history: g });
                        }, [C, P, v, g]),
                        Z = a.useMemo(() => (h?.type === l.O.BackupCode ? a.createElement(H, { onClose: k, onSubmit: w }) : r && h?.type === l.O.Passkey ? a.createElement(L, { challenge: r, onClose: k, onSubmit: w }) : h?.type === l.O.Sms ? a.createElement(V, { onClose: k, onSubmit: w }) : h?.type === l.O.Totp ? a.createElement(_, { onClose: k, onSubmit: w }) : a.createElement(A, { error: c ? (Q[c] ?? j) : j, onClose: k })), [r, c, k, w, h?.type]);
                    return a.createElement(s.Z, { backButtonType: "close", history: g, isFullWidth: t, onBackClick: k }, Z);
                },
                Y = { context: "VerifyTwoFactorAuth" };
            function X(e) {
                return a.createElement(c.H, { errorConfig: Y }, a.createElement(K, e));
            }
            const ee = a.memo(X);
        },
        160144: (e, t, n) => {
            n.d(t, { T: () => P, Z: () => F });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(437429),
                i = n.n(o),
                l = n(107267),
                s = n(167630),
                c = n(362075),
                d = n(392237),
                m = n(980407),
                u = n(943914),
                p = n(655352),
                h = n(163889),
                g = n(514639),
                y = n(412450),
                f = n(441484),
                b = n(99387),
                v = n(743080),
                E = n(727384);
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
                    const { isInlineFrame: n } = g.QU[e];
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
            const C = ({ allowedOrigin: e, handler: t, linkType: n }) => {
                    const r = a.useCallback(
                        (n) => {
                            n.origin === e && t(n);
                        },
                        [t, e],
                    );
                    a.useEffect(() => (w.addHandler(n, r), () => w.removeHandler(n, r)), [n, r]);
                },
                P = Object.freeze({ changePhone: "change-phone", success: "success", failure: "failure", ineligible: "ineligible", pendingReview: "pending-review", redirect: "redirect", close: "close", ready: "ready", initPorts: "initPorts", invalidChallenge: "invalid-challenge", docvChallenge: "challenge-docv-required", kycChallenge: "challenge-kyc-required", selfieChallenge: "challenge-selfie-required", twoFactorChallenge: "challenge-2fa-required", accountNumbercopiedToClipboard: "account-number-copied-to-clipboard", routingNumbercopiedToClipboard: "routing-number-copied-to-clipboard", edit: "edit", forgotPin: "forgot-pin" }),
                k = (0, E.bI)(),
                Z = ({ allowClipboardWrite: e, iframeUrl: t, isInlineFrame: n, isNonModalScreen: o }) => {
                    const i = (0, l.useHistory)(),
                        [d, u] = a.useState(!1),
                        g = (0, p.ZP)() ? I.paddingSmall : null,
                        y = a.useCallback(() => {
                            u(!0);
                        }, []),
                        f = a.createElement(r.Z, { style: I.modal }, t && a.createElement(a.Fragment, null, !d && a.createElement(s.Z, { size: "small", style: v.ZP.spinner, testID: "loading-spinner" }), a.createElement(c.Z, { allowClipboardWrite: e, allowForms: !0, onLoad: y, reportError: h.ZP, src: t, style: d ? [I.idvIframe, n ? void 0 : g] : I.hide, title: "Money" })));
                    return o || n ? f : a.createElement(m.Z, { history: i, renderHeader: () => null }, f);
                },
                S = (e) => {
                    const { additionalParams: t, linkType: n = g.P_.onboarding, redirectPath: r, errorPath: o, redirectState: s, closePath: c, eventCallback: d, payload: m, isNonModalScreen: u, challengeInitiator: p, challengeId: h } = e,
                        v = (0, l.useHistory)(),
                        { paymentsOrigin: w } = (0, y.Z)(),
                        S = f.Z.getSession(),
                        _ = f.Z.getProviderToken(),
                        F = (0, E.gh)(),
                        [I, T] = a.useState(!1),
                        H = i()(),
                        { allowClipboardWrite: R, defaultClosePath: x, isInlineFrame: N, path: A, redirectOnCompletion: z } = g.QU[n],
                        L = a.useCallback(
                            (e) => {
                                const { errors: t, message: n, url: a } = e.data;
                                switch (n) {
                                    case P.initPorts: {
                                        const t = e.ports?.[0];
                                        t && (m && t.postMessage(m), (t.onmessage = d));
                                        break;
                                    }
                                    case P.changePhone:
                                        v.push("/settings/phone");
                                        break;
                                    case P.success:
                                        z && T(!0);
                                        break;
                                    case P.failure:
                                        z && v.replace(o ?? g.D$, { errors: t });
                                        break;
                                    case P.ineligible:
                                        (0, E.J$)(H), v.replace(g.H0);
                                        break;
                                    case P.pendingReview:
                                        (0, E.J$)(H), v.replace(g.vr);
                                        break;
                                    case P.redirect:
                                        k && (window.location.href = a);
                                        break;
                                    case P.close:
                                        (0, E.J$)(H), v.replace(c ?? x);
                                }
                                d?.(e);
                            },
                            [d, v, z, H, c, x, m, o],
                        );
                    C({ allowedOrigin: w, handler: L, linkType: n });
                    const M = a.useMemo(() => {
                        if (!S || !w || !_) return;
                        const e = new Map();
                        return (
                            t?.forEach(({ key: t, value: n }) => {
                                e.set(t, n);
                            }),
                            k && e.set("redirectUrl", `https://${window.location.host}${g.$l}`),
                            (0, E.uG)({ basePath: `/${A}`, xPaymentsSession: S, theme: F, paymentsOrigin: w, moreSearchParams: e, providerToken: _ })
                        );
                    }, [S, w, _, t, A, F]);
                    return I ? a.createElement(b.default, { challengeId: h, challengeInitiator: p, linkType: n, redirectPath: r, redirectState: s }) : a.createElement(Z, { allowClipboardWrite: R, iframeUrl: M, isInlineFrame: N, isNonModalScreen: u });
                },
                _ = (e) => {
                    const t = a.createElement(s.Z, { size: "small", style: v.ZP.spinner, testID: "loading-spinner" });
                    return a.createElement(u.B, { fallback: t }, a.createElement(S, e));
                },
                F = a.memo(_),
                I = d.default.create((e) => ({ idvIframe: { width: "100%", height: "100%", paddingTop: "0px" }, paddingSmall: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, hide: { display: "none" }, modal: { width: "100%", height: "100%" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-71f7a682.19e19e2a.js.map
