"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-8ed0fac5"],
    {
        97882: (e, t, n) => {
            n.d(t, { T: () => o, x: () => a });
            var r = n(674132),
                s = n.n(r);
            const o = { AED: s().d857e44d, ALL: s().cb87e3db, ARS: s().a9d5ffd1, AUD: s().a0e8371d, BAM: s().gcc50dc9, BDT: s().a6a43585, BGN: s().a0cc8f2d, BHD: s().i31c32c5, BRL: s().i7dc69e9, BYR: s().c14a6c03, CAD: s().jaa3d537, CHF: s().a824080b, CLP: s().d9c0bedb, CNY: s().bf8c0613, COP: s().i8163625, CZK: s().adb53ba1, DKK: s().iabf697d, DZD: s().a1a0555b, EGP: s().f266f3d9, EUR: s().a9a8652b, GBP: s().dbf40761, GHS: s().b0d993d9, GTQ: s().ac1308e1, HKD: s().a7889ab3, HRK: s().c614f5cd, HUF: s().i55d57e3, IDR: s().e4b6002b, ILS: s().d28e983b, INR: s().e8c9232d, IQD: s().c8994ae1, ISK: s().f821c2a5, JPY: s().j348b9c9, KES: s().i6f93b9b, KRW: s().c6150bd5, KWD: s().i8921e09, KZT: s().ef239279, LBP: s().hecdb149, MAD: s().fdd039b7, MKD: s().f30c2c37, MXN: s().d9ea7bff, MYR: s().ea3df4b7, NGN: s().jaac21bb, NOK: s().hb435ced, NZD: s().ce699d81, PEN: s().bc56d3d7, PHP: s().f8561913, PKR: s().g6485d53, PLN: s().ff561cc1, QAR: s().b42011d3, RON: s().a6660bcd, RSD: s().f9b80449, RUB: s().gdee4d5d, SAR: s().h36f2103, SEK: s().a19ad037, SGD: s().g713f699, THB: s().ff2e39af, TND: s().be34316d, TRY: s().aef81b75, TWD: s().fcce70a5, TZS: s().jc9d352f, UAH: s().be1cb8c5, UGX: s().j9371501, USD: s().j7d4397d, VEF: s().d61441dd, VND: s().e2a99e97, ZAR: s().f7ce19ab, ZMW: s().b2a0213f },
                a = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: r = !1, strictAmount: s = !1 }) => {
                    const a = s ? e : parseInt(e, 10) / n,
                        c = o[t]?.(a);
                    return r ? i(c) : c;
                },
                i = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => i, OQ: () => l, iW: () => d, xG: () => u, z_: () => c });
            n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(571372);
            var r = n(674132),
                s = n.n(r);
            function o(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = atob(t),
                    r = n.length,
                    s = new ArrayBuffer(r),
                    o = new Uint8Array(s);
                for (let e = 0; e < r; e++) o[e] = n.charCodeAt(e);
                return s;
            }
            function a(e) {
                const t = new Uint8Array(e),
                    n = String.fromCharCode(...t);
                return btoa(n).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const i = s().e4f6bd9e,
                c = s().ac966f94;
            function d() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function l(e) {
                const t = JSON.parse(e);
                return (
                    (t.challenge = o(t.challenge)),
                    (t.user.id = o(t.user.id)),
                    t.excludeCredentials.forEach((e) => {
                        e.id = o(e.id);
                    }),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.create({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: {}, id: e.id, response: { attestationObject: a(e.response.attestationObject), clientDataJSON: a(e.response.clientDataJSON) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
            function u(e) {
                const t = JSON.parse(e).publicKeyCredentialRequestOptions;
                return (
                    (t.challenge = o(t.challenge)),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.get({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: { appid: !0 }, id: e.id, response: { authenticatorData: a(e.response.authenticatorData), clientDataJSON: a(e.response.clientDataJSON), signature: a(e.response.signature), userHandle: a(e.response.userHandle) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
        },
        445664: (e, t, n) => {
            n.d(t, { Z: () => f, v: () => p });
            var r = n(217995),
                s = n(202784),
                o = n(10622),
                a = n.n(o),
                i = (n(585488), n(353391)),
                c = n.n(i),
                d = n(482924),
                l = n(698478);
            const u = r.Z,
                p = ({ environment: e }) =>
                    a()(e, u, {}, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const { permissions: t, roles: n } = e?.get_customer || {};
                            return { permissions: t, roles: n };
                        })
                        .catch(() => null),
                f = (e) => {
                    const t = e?.fetchKey,
                        [n, r] = s.useState(1),
                        { data: o, refetch: a, refetchStatus: i } = (0, d.A)(u, {}, { fetchKey: t }),
                        p = o?.get_customer ?? {},
                        { __id: f = "get_customer", id: h, permissions: m, roles: b } = p;
                    return (
                        c()([f], () => {
                            a(), r((e) => e + 1);
                        }),
                        { ...(0, l.S9)({ roles: b, permissions: m }), id: h, permissions: m, roles: b, fetchCount: n, refetchStatus: i }
                    );
                };
        },
        412450: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(990312),
                s = (n(585488), n(712696)),
                o = n.n(s),
                a = n(68290),
                i = n(848739),
                c = n(514639);
            const d = r.Z,
                l = { "payments-dev.x.com": c.Re.development, "money-dev.x.com": c.Re.development, "payments-staging.x.com": c.Re.staging, "money-staging.x.com": c.Re.staging, "money.x.com": c.Re.production, "payments-prod.x.com": c.Re.production },
                u = () => {
                    const e = o()(d, {}),
                        t = e?.get_payments_client_config,
                        n = t?.payments_web_host,
                        r = t?.sardine_api_subdomain,
                        s = n ? l[n] : null,
                        u = "https://",
                        p = new Map(),
                        f = new Map(),
                        h = e?.get_transfer_methods_config?.transfer_methods_config;
                    return (
                        h?.forEach(({ fees: e, processing_time: t, transfer_method_type: n }) => {
                            const r = t?.processing_time_type === i.l.RealTime,
                                s = t?.max_duration_in_business_days ?? c.UJ,
                                o = { settleTimeMessage: r ? "Instant" : (({ count: e }) => `Up to ${e} business days`)({ count: s }), Icon: r ? a.default : void 0, processingTime: t, fees: e },
                                d = n?.pull_transfer_method_type,
                                l = n?.push_transfer_method_type;
                            d && f.set(d, o), l && p.set(l, o);
                        }),
                        { environment: s ?? c.Re.production, paymentsOrigin: n ? `${u}${n}` : null, sardineClientID: t?.sardine_client_id, sardineSdkUrl: r ? `https://${r}/assets/loader.min.js` : null, sardineEnvironment: t?.sardine_environment, sardinePixelSubdomain: t?.sardine_pixel_subdomain, sardineApiSubdomain: r, reportUrl: t?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: t?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: t?.socure_public_key, forwardWithSdkUrl: n ? `${u}${n}/${c.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: t?.stripe_issuing_publishable_key, methodConfigs: { debitMethodConfigs: p, creditMethodConfigs: f } }
                    );
                };
        },
        983304: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var r = n(708419),
                s = n(202784),
                o = n(400752),
                a = (n(585488), n(351743)),
                i = n.n(a),
                c = n(107267),
                d = n(187669),
                l = n(420182),
                u = n(952793),
                p = n(514639),
                f = n(441484),
                h = n(412450),
                m = n(443781);
            const b = () => {
                    const { featureSwitches: e, history: t } = s.useContext(m.rC),
                        n = e.isTrue("payments_enabled");
                    s.useEffect(() => {
                        if (!n) return;
                        const { remove: e } = t.addInterceptor(
                            (function ({ history: e }) {
                                return {
                                    shouldProceed: (e, t) => (
                                        (function ({ location: e }) {
                                            return e.pathname.startsWith(p.sM);
                                        })({ location: e }) || f.Z.unbind(),
                                        !0
                                    ),
                                };
                            })({ history: t }),
                        );
                        return () => {
                            e();
                        };
                    }, [t, n]);
                },
                _ = r.Z,
                g = ({ allowLockedSession: e }) => {
                    const { environment: t, forwardWithSdkUrl: n, sardineApiSubdomain: r, sardineClientID: a, sardineEnvironment: m, sardinePixelSubdomain: g, sardineSdkUrl: y, socurePublicKey: S } = (0, h.Z)(),
                        v = (0, c.useLocation)(),
                        w = (0, c.useHistory)(),
                        P = v.pathname,
                        C = (0, o.Dv)(l.lZ),
                        D = (0, u.hC)("payments_forward_with_enabled"),
                        [N, A] = s.useState(!1),
                        [E] = i()(_),
                        x = s.useCallback(
                            ({ challengeId: e }) => {
                                const t = { challengeId: e, closePath: "/", challengeInitiator: p.kW.auth };
                                w?.location?.pathname !== p.CM ? w.push(p.CM, t) : w.replace(p.CM, t);
                            },
                            [w],
                        ),
                        R = s.useCallback(() => {
                            w.replace(p.D$);
                        }, [w]),
                        k = s.useCallback(
                            (e) =>
                                new Promise((t, n) => {
                                    E({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, r) => {
                                            const s = e?.create_x_payments_auth_session_v2,
                                                o = s?.session_id,
                                                a = s?.customer_id,
                                                i = s?.challenge_id,
                                                c = s?.expiry_time_millis,
                                                d = s?.status;
                                            o && c ? t({ sessionId: o, expiresAtMsec: c, paymentsUserId: a, status: d, challengeId: i }) : n(s?.errors ?? r);
                                        },
                                        onError: n,
                                    });
                                }),
                            [E],
                        );
                    return (
                        b(),
                        (0, d.q)(() => {
                            f.Z.initialize({ environment: t, sardineApiSubdomain: r, sardineClientID: a, sardineEnvironment: m, sardinePixelSubdomain: g, sardineSdkUrl: y, forwardWithSdkUrl: D ? n : null, socurePublicKey: S, flow: P, fetchAuthSession: k, userPersistence: C, redirectToChallenge: x, errorHandler: R, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || A(!0);
                                })
                                .catch(() => {
                                    A(!0);
                                });
                        }),
                        s.useEffect(() => {
                            f.Z.bind(), f.Z.updateFlow(P);
                        }, [P]),
                        [N]
                    );
                };
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => f });
            var r = n(202784),
                s = n(437429),
                o = n.n(s),
                a = n(57074),
                i = n.n(a),
                c = n(10622),
                d = n.n(c),
                l = n(71620),
                u = n(312771),
                p = n(535338);
            function f(e, t, n) {
                const s = i()(t),
                    a = i()(n),
                    c = o()(),
                    f = (0, l.po)(),
                    [h, m] = r.useState(null),
                    [b, _] = r.useState(!1),
                    g = r.useCallback(() => {
                        b ||
                            (_(!0),
                            d()(c, e, s, { networkCacheConfig: a?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    _(!1);
                                },
                                error: (e) => {
                                    f(e), _(!1), m(e);
                                },
                            }));
                    }, [c, f, e, b, s, a]),
                    y = (0, p.p)(e, t, n);
                return r.useMemo(() => (h ? { data: y, refetch: g, refetchStatus: u.ZP.FAILED, refetchError: h } : { data: y, refetch: g, refetchStatus: b ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [y, h, b, g]);
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => _ });
            var r = n(202784),
                s = n(614983),
                o = n.n(s),
                a = n(437429),
                i = n.n(a),
                c = n(57074),
                d = n.n(c),
                l = n(10622),
                u = n.n(l),
                p = n(585488),
                f = n(71620),
                h = n(163889),
                m = n(312771),
                b = n(535338);
            function _(e, t, n) {
                const [s, a] = r.useState(!1),
                    [c, l] = r.useState(null),
                    _ = i()(),
                    g = d()(t),
                    y = (0, f.po)(),
                    S = (0, b.p)(e, g, n);
                return r.useMemo(() => {
                    const t = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    o()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: r } =
                            (function (e, t) {
                                try {
                                    o()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) o()(!!n, "The provided path is invalid."), o()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(S, t) || {},
                        i = (t) => {
                            s ||
                                (a(!0),
                                u()(_, e, { ...g, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), l(e), y(e);
                                    },
                                }));
                        },
                        d = () => {
                            n && i(n);
                        },
                        f = () => {
                            r && i(r);
                        },
                        b = () => {
                            i(void 0);
                        };
                    return c ? { subsequentFetchStatus: m.ZP.FAILED, error: c, fetchNext: d, fetchPrevious: f, refetch: b, data: S, hasNext: Boolean(n), hasPrevious: Boolean(r) } : { subsequentFetchStatus: s ? m.ZP.LOADING : m.ZP.NONE, error: void 0, fetchNext: d, fetchPrevious: f, refetch: b, data: S, hasNext: Boolean(n), hasPrevious: Boolean(r) };
                }, [e, S, s, c, _, g, y]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-8ed0fac5.2b821a6a.js.map
