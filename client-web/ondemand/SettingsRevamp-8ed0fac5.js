"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-8ed0fac5"],
    {
        831558: (e, t, r) => {
            r.d(t, { HI: () => E, W1: () => d, oo: () => S, pe: () => o });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            var n = r(468811),
                a = r.n(n),
                s = r(704879);
            const c = new Uint8Array([0, 0, 0, 1]);
            async function i(e, t) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", (0, s.cL)(e, c, t)));
            }
            const o = async (e) => {
                const t = new Uint8Array((0, s.RG)(e)),
                    r = await crypto.subtle.importKey("raw", t.subarray(0, 65), { name: "ECDH", namedCurve: "P-256" }, !0, []),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: r }, u, 256),
                    a = await i(n, await crypto.subtle.exportKey("raw", r)),
                    c = a.slice(0, 16),
                    o = a.slice(16, 32),
                    E = await crypto.subtle.importKey("raw", c, { name: "AES-GCM", length: 128 }, !0, ["decrypt"]);
                return (0, s.Jx)(await crypto.subtle.decrypt({ name: "AES-GCM", iv: o }, E, t.subarray(65)));
            };
            async function E(e, t) {
                const r = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveBits"]),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: t }, r.privateKey, 256),
                    a = await i(n, await crypto.subtle.exportKey("raw", r.publicKey)),
                    c = a.slice(0, 16),
                    o = a.slice(16, 32),
                    E = await crypto.subtle.importKey("raw", c, { name: "AES-GCM", length: 128 }, !1, ["encrypt"]),
                    S = await crypto.subtle.encrypt({ name: "AES-GCM", iv: o }, E, (0, s.cv)(e)),
                    u = await crypto.subtle.exportKey("raw", r.publicKey);
                return (0, s.sM)((0, s.cL)(u, S));
            }
            const S = async (e) => ({ ...(await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, ["deriveBits"])), deviceId: e ?? a().v4(), isRegistered: !1 });
            let u;
            const d = (e) => {
                u = e;
            };
        },
        928233: (e, t, r) => {
            r.d(t, { FM: () => R, eY: () => _, qi: () => d });
            r(571372);
            var n = r(961111),
                a = r.n(n),
                s = r(878636),
                c = r(390387),
                i = r(163889),
                o = r(831558),
                E = r(704879);
            const S = "rweb.dmCryptoKeys";
            function u(e) {
                return S + 1 + e;
            }
            const d = async (e, t, { api: r, devicePersistence: n }) => {
                    try {
                        const i = c.x0(t());
                        if (!i) return;
                        await n.delete(S + "" + i);
                        const d = u(i);
                        let _ = await n.get(d);
                        const R = async () => {
                            const e = (0, E.sM)(await crypto.subtle.exportKey("spki", _.publicKey));
                            await a()(
                                async (t) => {
                                    try {
                                        await n.set(d, _), (await n.get(d)) ? await r.withEndpoint(s.Z).register({ registration_id: Math.round(1e5 * Math.random()), identity_key: e, device_id: _.deviceId }) : t(new Error("Could not set value in IndexedDB. Bailing out."));
                                    } catch (e) {
                                        if ((await n.delete(d), 403 !== e.status)) throw e;
                                        t(e);
                                    }
                                },
                                { minTimeout: 2e3, retries: 2 },
                            ),
                                await n.set(d, { ..._, isRegistered: !0 });
                        };
                        _ || (_ = await (0, o.oo)()), _.isRegistered || (await R()), (0, o.W1)(_.privateKey), e(c.Pv(_.deviceId));
                    } catch (e) {
                        403 !== e.status && (0, i.Hj)(e);
                    }
                },
                _ = async (e, t, { api: r, devicePersistence: n }) => {
                    const a = c.x0(t());
                    if (!a) return;
                    const s = u(a),
                        i = await n.get(s);
                    i && "unregistered" !== i.status && ((i.status = "unregistered"), delete i.privateKey, delete i.publicKey, await n.set(s, i), (0, o.W1)(void 0));
                },
                R = async (e, t, { api: r, devicePersistence: n }) => {
                    const a = c.x0(t());
                    if (!a) return;
                    const s = u(a),
                        i = await n.get(s);
                    if (!i || "unregistered" !== i.status) return;
                    const E = i.deviceId,
                        S = await (0, o.oo)(E);
                    await n.delete(s), await n.set(s, S), await e(d);
                };
        },
        704879: (e, t, r) => {
            r.d(t, { Jx: () => c, RG: () => n, cL: () => i, cv: () => s, sM: () => a });
            r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            function n(e) {
                const t = atob(e),
                    r = t.length,
                    n = new Uint8Array(r);
                for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                return n.buffer;
            }
            function a(e) {
                let t = "";
                const r = new Uint8Array(e),
                    n = r.byteLength;
                for (let e = 0; e < n; e++) t += String.fromCharCode(r[e]);
                return btoa(t);
            }
            const s = (e) => new TextEncoder().encode(e),
                c = (e) => new TextDecoder().decode(e);
            function i(...e) {
                const t = e.map((e) => (e instanceof Uint8Array ? e : new Uint8Array(e))),
                    r = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
                let n = 0;
                for (const e of t) r.set(e, n), (n += e.length);
                return r;
            }
        },
        97882: (e, t, r) => {
            r.d(t, { T: () => s, x: () => c });
            var n = r(674132),
                a = r.n(n);
            const s = { AED: a().d857e44d, ALL: a().cb87e3db, ARS: a().a9d5ffd1, AUD: a().a0e8371d, BAM: a().gcc50dc9, BDT: a().a6a43585, BGN: a().a0cc8f2d, BHD: a().i31c32c5, BRL: a().i7dc69e9, BYR: a().c14a6c03, CAD: a().jaa3d537, CHF: a().a824080b, CLP: a().d9c0bedb, CNY: a().bf8c0613, COP: a().i8163625, CZK: a().adb53ba1, DKK: a().iabf697d, DZD: a().a1a0555b, EGP: a().f266f3d9, EUR: a().a9a8652b, GBP: a().dbf40761, GHS: a().b0d993d9, GTQ: a().ac1308e1, HKD: a().a7889ab3, HRK: a().c614f5cd, HUF: a().i55d57e3, IDR: a().e4b6002b, ILS: a().d28e983b, INR: a().e8c9232d, IQD: a().c8994ae1, ISK: a().f821c2a5, JPY: a().j348b9c9, KES: a().i6f93b9b, KRW: a().c6150bd5, KWD: a().i8921e09, KZT: a().ef239279, LBP: a().hecdb149, MAD: a().fdd039b7, MKD: a().f30c2c37, MXN: a().d9ea7bff, MYR: a().ea3df4b7, NGN: a().jaac21bb, NOK: a().hb435ced, NZD: a().ce699d81, PEN: a().bc56d3d7, PHP: a().f8561913, PKR: a().g6485d53, PLN: a().ff561cc1, QAR: a().b42011d3, RON: a().a6660bcd, RSD: a().f9b80449, RUB: a().gdee4d5d, SAR: a().h36f2103, SEK: a().a19ad037, SGD: a().g713f699, THB: a().ff2e39af, TND: a().be34316d, TRY: a().aef81b75, TWD: a().fcce70a5, TZS: a().jc9d352f, UAH: a().be1cb8c5, UGX: a().j9371501, USD: a().j7d4397d, VEF: a().d61441dd, VND: a().e2a99e97, ZAR: a().f7ce19ab, ZMW: a().b2a0213f },
                c = ({ amount: e, currencyCode: t = "USD", formatter: r = 1e6, removeTrailingZeros: n = !1, strictAmount: a = !1 }) => {
                    const c = a ? e : parseInt(e, 10) / r,
                        o = s[t]?.(c);
                    return n ? i(o) : o;
                },
                i = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        321330: (e, t, r) => {
            r.d(t, { Z: () => S });
            var n = r(202784),
                a = r(674132),
                s = r.n(a),
                c = r(443781);
            const i = s().f75d1806,
                o = s().j4a7d9a6,
                E = s().hedf9d7c,
                S = () => {
                    const { userClaims: e } = n.useContext(c.rC),
                        t = e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate"),
                        r = { label: i, value: "Premium" };
                    return t || e.hasSubscription("premium_plus") ? { label: E, value: "Premium+" } : e.hasSubscription("premium_standard") ? r : e.hasSubscription("premium_basic") ? { label: o, value: "Basic" } : r;
                };
        },
        199087: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(626593),
                a = r(202784),
                s = (r(585488), r(351743)),
                c = r.n(s);
            const i = n.Z,
                o = () => {
                    const [e, t] = c()(i);
                    return [
                        a.useCallback(
                            (t) =>
                                new Promise((r, n) => {
                                    e({ variables: t, onCompleted: (e, t) => r(e), onError: n });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
        },
        548797: (e, t, r) => {
            r.d(t, { Ld: () => S, gS: () => E, pB: () => i, yv: () => o });
            var n = r(674132),
                a = r.n(n),
                s = r(337394);
            const c = a().b47d123d,
                i = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === s.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === s.rv.Month),
                        n = r ? 12 * r?.amount_local_micro : 0,
                        a = t ? Math.floor(((t.amount_local_micro - n) / n) * -100) : null;
                    return c({ percentage: a });
                },
                o = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (s.v5.premium[r] === t) return "active";
                    switch (s.v5.premium[r]) {
                        case "PremiumBasic":
                            if ("BlueVerified" === t || "BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerified":
                            if ("PremiumBasic" === t) return "downgrade";
                            if ("BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerifiedPlus":
                            if ("BlueVerified" === t || "PremiumBasic" === t) return "downgrade";
                            break;
                        default:
                            return "invalid";
                    }
                    return "invalid";
                },
                E = (e, t, r) => {
                    const { status: n } = r,
                        a = Date.now(),
                        s = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                s = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > a) {
                                if ("active" === n) return s < a;
                                if ("pending" === n) return s > a;
                            }
                        });
                    return s?.[0];
                },
                S = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            r.d(t, { Gi: () => C, Mk: () => U, ZV: () => b, aU: () => R, d3: () => O, fS: () => l, pt: () => T });
            r(202784);
            var n = r(674132),
                a = r.n(n),
                s = r(336629),
                c = r(862695),
                i = r(97882),
                o = r(337394),
                E = r(548797);
            const S = a().c6614cc0,
                u = a().f8d3b50a,
                d = a().i2c32253,
                _ = a().c41e1023;
            function R(e, t = !0, r) {
                let n = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (n += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    r)
                ) {
                    n -= n * (r / 100);
                }
                return n;
            }
            function b(e) {
                return "number" == typeof e?.tax_amount_local_micro ? u : S;
            }
            const T = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function C(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function O(e, t = !1, r, n = !1, a = !0) {
                const S = (0, E.gS)(r, "Discount", { status: n ? "pending" : "active" }),
                    u = (0, i.x)({ amount: R(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return S && e.charge_interval ? (0, c.V)({ selectedInterval: e.charge_interval, duration: S.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, s.T)({ price: e, percentOff: S.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: u, includeDiscountedPrice: !0, includeThenLabel: a }) : e.charge_interval === o.rv.Year ? _({ price: u }) : e.charge_interval === o.rv.Month ? d({ price: u }) : "";
            }
            const U = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                l = (e, t, r) => {
                    if (!t || r) return null;
                    const n = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return n;
                };
        },
        661461: (e, t, r) => {
            r.d(t, { Nr: () => _, ug: () => R, yt: () => b });
            var n = r(759851),
                a = r(689048),
                s = r(499627),
                c = r(917799),
                i = r(312771),
                o = r(390387);
            const E = "availableLanguages",
                S = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                u = { fetchStatus: i.ZP.NONE, languages: [] };
            function d(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case S.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case S.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case S.SUCCESS: {
                        const { meta: r, payload: n } = t,
                            a = r?.lang ? r.lang : "en",
                            s = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(a),
                            c = s ? (e, t) => s.compare(e.name, t.name) : void 0;
                        return { ...e, languages: n?.slice().sort(c) || [], fetchStatus: i.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            s.Z.register({ [E]: d });
            const _ = (e) => e[E].languages,
                R = (e, t) => {
                    const r = (0, a.o)(t).toLowerCase(),
                        n = e[E].languages.find((e) => e.code === r);
                    return n?.name;
                },
                b = () => (e, t) => (t()[E].fetchStatus === i.ZP.LOADED ? Promise.resolve() : e(T())),
                T =
                    () =>
                    (e, t, { api: r }) =>
                        c._O(e, { request: r.withEndpoint(n.Z).fetchSupportedLanguages })({ actionTypes: S, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, o.VT)(t()) } });
        },
        576025: (e, t, r) => {
            r.d(t, { Lf: () => E, Po: () => u, _t: () => S });
            r(571372);
            var n = r(499627),
                a = r(312771);
            const s = "countryNames",
                c = { fetchStatus: a.ZP.NONE, countries: {} },
                i = { REQUEST: `${s}_REQUEST`, FAILURE: `${s}_FAILURE`, SUCCESS: `${s}_SUCCESS` },
                o = (e = c, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST:
                            return { ...e, fetchStatus: a.ZP.LOADING };
                        case i.FAILURE:
                            return { ...e, fetchStatus: a.ZP.NONE };
                        case i.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: a.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            n.Z.register({ [s]: o });
            const E = (e) => e[s].countries,
                S = (e, t) => {
                    const r = t && t.toUpperCase();
                    return e[s].countries[r];
                },
                u = (e) => (t, n) =>
                    n()[s].fetchStatus === a.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: i.REQUEST }),
                          ((e) => {
                              switch (e) {
                                  case "ar":
                                      return r.e("ondemand.countries-ar").then(r.t.bind(r, 855927, 19));
                                  case "bg":
                                      return r.e("ondemand.countries-bg").then(r.t.bind(r, 725159, 19));
                                  case "bn":
                                      return r.e("ondemand.countries-bn").then(r.t.bind(r, 322302, 19));
                                  case "ca":
                                      return r.e("ondemand.countries-ca").then(r.t.bind(r, 520516, 19));
                                  case "cs":
                                      return r.e("ondemand.countries-cs").then(r.t.bind(r, 829454, 19));
                                  case "da":
                                      return r.e("ondemand.countries-da").then(r.t.bind(r, 150661, 19));
                                  case "de":
                                      return r.e("ondemand.countries-de").then(r.t.bind(r, 565614, 19));
                                  case "el":
                                      return r.e("ondemand.countries-el").then(r.t.bind(r, 295816, 19));
                                  case "en-GB":
                                      return r.e("ondemand.countries-en-GB").then(r.t.bind(r, 397465, 19));
                                  case "en":
                                      return r.e("ondemand.countries-en").then(r.t.bind(r, 219973, 19));
                                  case "es":
                                      return r.e("ondemand.countries-es").then(r.t.bind(r, 690515, 19));
                                  case "eu":
                                      return r.e("ondemand.countries-eu").then(r.t.bind(r, 594549, 19));
                                  case "fa":
                                      return r.e("ondemand.countries-fa").then(r.t.bind(r, 548404, 19));
                                  case "fi":
                                      return r.e("ondemand.countries-fi").then(r.t.bind(r, 526226, 19));
                                  case "fil":
                                      return r.e("ondemand.countries-fil").then(r.t.bind(r, 387630, 19));
                                  case "fr":
                                      return r.e("ondemand.countries-fr").then(r.t.bind(r, 580700, 19));
                                  case "ga":
                                      return r.e("ondemand.countries-ga").then(r.t.bind(r, 434359, 19));
                                  case "gl":
                                      return r.e("ondemand.countries-gl").then(r.t.bind(r, 765077, 19));
                                  case "gu":
                                      return r.e("ondemand.countries-gu").then(r.t.bind(r, 826129, 19));
                                  case "ha":
                                      return r.e("ondemand.countries-he").then(r.t.bind(r, 712756, 19));
                                  case "he":
                                      return r.e("ondemand.countries-he").then(r.t.bind(r, 834185, 19));
                                  case "hi":
                                      return r.e("ondemand.countries-hi").then(r.t.bind(r, 555595, 19));
                                  case "hr":
                                      return r.e("ondemand.countries-hr").then(r.t.bind(r, 549581, 19));
                                  case "hu":
                                      return r.e("ondemand.countries-hu").then(r.t.bind(r, 624086, 19));
                                  case "id":
                                      return r.e("ondemand.countries-id").then(r.t.bind(r, 499075, 19));
                                  case "ig":
                                      return r.e("ondemand.countries-ig").then(r.t.bind(r, 424665, 19));
                                  case "it":
                                      return r.e("ondemand.countries-it").then(r.t.bind(r, 231383, 19));
                                  case "ja":
                                      return r.e("ondemand.countries-ja").then(r.t.bind(r, 848543, 19));
                                  case "kn":
                                      return r.e("ondemand.countries-kn").then(r.t.bind(r, 4504, 19));
                                  case "ko":
                                      return r.e("ondemand.countries-ko").then(r.t.bind(r, 496320, 19));
                                  case "mr":
                                      return r.e("ondemand.countries-mr").then(r.t.bind(r, 939202, 19));
                                  case "ms":
                                      return r.e("ondemand.countries-ms").then(r.t.bind(r, 655815, 19));
                                  case "nb":
                                      return r.e("ondemand.countries-nb").then(r.t.bind(r, 835579, 19));
                                  case "nl":
                                      return r.e("ondemand.countries-nl").then(r.t.bind(r, 572887, 19));
                                  case "pl":
                                      return r.e("ondemand.countries-pl").then(r.t.bind(r, 171124, 19));
                                  case "pt":
                                      return r.e("ondemand.countries-pt").then(r.t.bind(r, 64727, 19));
                                  case "ro":
                                      return r.e("ondemand.countries-ro").then(r.t.bind(r, 503059, 19));
                                  case "ru":
                                      return r.e("ondemand.countries-ru").then(r.t.bind(r, 948482, 19));
                                  case "sk":
                                      return r.e("ondemand.countries-sk").then(r.t.bind(r, 299502, 19));
                                  case "sr":
                                      return r.e("ondemand.countries-sr").then(r.t.bind(r, 360381, 19));
                                  case "sv":
                                      return r.e("ondemand.countries-sv").then(r.t.bind(r, 361571, 19));
                                  case "ta":
                                      return r.e("ondemand.countries-ta").then(r.t.bind(r, 393529, 19));
                                  case "th":
                                      return r.e("ondemand.countries-th").then(r.t.bind(r, 92457, 19));
                                  case "tr":
                                      return r.e("ondemand.countries-tr").then(r.t.bind(r, 798398, 19));
                                  case "uk":
                                      return r.e("ondemand.countries-uk").then(r.t.bind(r, 291715, 19));
                                  case "ur":
                                      return r.e("ondemand.countries-ur").then(r.t.bind(r, 768312, 19));
                                  case "yo":
                                      return r.e("ondemand.countries-yo").then(r.t.bind(r, 802732, 19));
                                  case "zh-Hant":
                                      return r.e("ondemand.countries-zh-Hant").then(r.t.bind(r, 39068, 19));
                                  case "zh":
                                      return r.e("ondemand.countries-zh").then(r.t.bind(r, 34845, 19));
                                  default:
                                      return Promise.reject(new Error(`Tried to import country names for unknown language key: ${e}`));
                              }
                          })(e)
                              .then((r) => {
                                  const n = r.main[e].localeDisplayNames.territories;
                                  t({ type: i.SUCCESS, payload: n });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: i.FAILURE } : u("en"));
                              }));
        },
        122743: (e, t, r) => {
            r.d(t, { H: () => c });
            var n = r(6157),
                a = r(917799),
                s = r(189953);
            const c =
                () =>
                (e, t, { api: r }) =>
                    a._O(e, { request: r.withEndpoint(n.Z).clearConversations, params: {} })({ actionTypes: s.Dh, context: "CLEAR_CONVERSATIONS", meta: {} });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => ce, A0: () => be, BA: () => re, BS: () => L, CH: () => y, CR: () => W, Cr: () => I, DX: () => Y, Dh: () => C, Dn: () => D, En: () => E, FF: () => M, FV: () => P, Gy: () => h, HF: () => R, IK: () => a, JO: () => x, Jt: () => ne, KH: () => p, L0: () => $, Lc: () => c, OW: () => g, Oj: () => w, P9: () => V, Q_: () => s, Qg: () => H, Qh: () => J, Sv: () => i, TY: () => v, Tv: () => z, UN: () => m, VK: () => o, WK: () => te, Ws: () => S, Xg: () => q, Xi: () => K, Y8: () => u, Yb: () => U, Yf: () => n, Yx: () => d, ZN: () => j, _i: () => oe, ar: () => B, cA: () => Re, cw: () => se, dK: () => _, dO: () => O, dZ: () => G, dw: () => de, f1: () => ue, fH: () => Oe, ip: () => Z, j$: () => Te, lQ: () => ee, lh: () => b, lm: () => T, mq: () => Ce, my: () => f, nK: () => N, o$: () => F, px: () => ie, qd: () => Q, ru: () => _e, ub: () => A, vc: () => k, vi: () => l, wG: () => ae, x5: () => X, yB: () => Se, z2: () => Ee });
            const n = "grok",
                a = Object.freeze({ FUN: "fun", REGULAR: "" }),
                s = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                b = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                U = "rweb/grok/DELETE_CONVERSATION",
                l = "rweb/grok/RENAME_CONVERSATION",
                p = "rweb/grok/SET_ABORT_CONTROLLER",
                I = "rweb/grok/CLEAR_CONVERSATION",
                A = "rweb/grok/USER_SEND_MESSAGE",
                f = "rweb/grok/REGENERATE_RESPONSE",
                m = "rweb/grok/GROK_RESPONSE_TYPING",
                w = "rweb/grok/GROK_RESPONSE_POSTS",
                N = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                h = "rweb/grok/GROK_RESPONSE_COMPLETE",
                P = "rweb/grok/GROK_RESPONSE_ERROR",
                g = "rweb/grok/GROK_RESPONSE_METADATA",
                L = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                D = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                y = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                v = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                H = "rweb/grok/GROK_RESPONSE_UPSELL",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                k = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                Z = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                M = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                B = "rweb/grok/GROK_WEB_RESULTS",
                Q = "rweb/grok/GROK_CITED_WEB_RESULTS",
                V = "rweb/grok/ABORT_MESSAGE",
                x = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                j = "rweb/grok/FETCH_CONVERSATION_ID_START",
                Y = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                z = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                W = "rweb/grok/EDITING_SET_ID",
                q = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                X = "rweb/grok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                ae = "rweb/grok/SET_PREFERRED_PROMPTS",
                se = "rweb/grok/SET_PROMPT_SOURCE",
                ce = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                oe = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                Ee = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                Se = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                de = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                _e = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Re = "r/web/grok/SET_USING_EXPERIMENT",
                be = "r/web/grok/SET_PREFERRED_RESPONSE",
                Te = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Ce = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Oe = "rweb/grok/SET_REASONING_LAYOUT";
        },
        231817: (e, t, r) => {
            r.d(t, { LJ: () => l, UD: () => I, gQ: () => w, gw: () => A, n2: () => p, zU: () => m });
            var n = r(24949),
                a = r(697926),
                s = r(744531),
                c = r(226395),
                i = r(928233),
                o = r(499627),
                E = r(917799),
                S = r(312771),
                u = r(390387);
            const d = `${r(291020).Y}/dm_registered_devices`,
                _ = `rweb/${d}`,
                R = E.dg(_, "FETCH_REGISTERED_DEVICES"),
                b = E.dg(_, "DEREGISTER_DEVICE"),
                T = { fetchStatus: S.ZP.NONE, devices: {} };
            function C(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: S.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: S.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: S.ZP.LOADED, devices: (0, a.Z)(O(t.payload), (e) => e.registration_token) };
                    case b.SUCCESS:
                        return { ...e, devices: (0, s.Z)(e.devices, t.meta.registration_token) };
                    default:
                        return e;
                }
            }
            o.Z.register({ [d]: C });
            const O = (e) => e?.public_keys || [],
                U = (e) => e[d].devices,
                l = (0, n.P1)(U, (e) => Object.values(e).sort((e, t) => t.registration_ts - e.registration_ts)),
                p = (e, t) => U(e)[t],
                I = (e) => e[d].fetchStatus,
                A = (e) => (t, r) => (I(r()) === S.ZP.LOADED ? Promise.resolve() : t(f(e))),
                f =
                    (e) =>
                    (t, r, { api: n }) =>
                        E._O(t, { params: e, request: n.withEndpoint(c.Z).fetchEncryptedDMsPublicKeysAndDevices })({ actionTypes: R, context: "FETCH_SESSIONS" }),
                m =
                    (e) =>
                    (t, r, { api: n }) => {
                        const a = { registrationToken: e };
                        return E._O(t, { params: a, request: n.withEndpoint(c.Z).deregisterDevice })({ actionTypes: b, context: "DEREGISTER_DEVICE", meta: { registrationToken: e } }).then(() => {
                            const e = u.x0(r());
                            t(f({ loggedInUserId: e }));
                        });
                    },
                w =
                    (e) =>
                    (e, t, { api: r }) =>
                        e(i.FM).then(() => {
                            const r = u.x0(t());
                            e(f({ loggedInUserId: r }));
                        });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => _, xQ: () => R });
            var n = r(226395),
                a = r(499627),
                s = r(917799),
                c = r(312771),
                i = r(390387);
            const o = `${r(291020).Y}/user_preferences`,
                E = `rweb/${o}`,
                S = s.dg(E, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: c.ZP.NONE };
            function d(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case S.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case S.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case S.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: c.ZP.LOADED };
                    default:
                        return e;
                }
            }
            a.Z.register({ [o]: d });
            const _ = (e) => e[o].userPreferences,
                R = () => (e, t) => (t()[o].fetchStatus === c.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: r }) => {
                        const a = i.x0(t());
                        return s._O(e, { params: { userId: a }, request: r.withEndpoint(n.Z).fetchUserPreferences })({ actionTypes: S, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        365265: (e, t, r) => {
            r.d(t, { $B: () => C, F$: () => O, Ne: () => A, RC: () => I, VR: () => U, dF: () => p, h9: () => T, hu: () => m, pC: () => l, qB: () => f, tF: () => b, v1: () => w, xN: () => N });
            var n = r(372551),
                a = r(147595),
                s = r(499627),
                c = r(917799),
                i = r(312771);
            const o = "subscriptionPayments",
                E = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                S = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                R = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: i.ZP.NONE }, switchTier: { fetchStatus: i.ZP.NONE } };
            const b = (e, t) => {
                    const r = e[o].products[t];
                    return r?.fetchStatus || i.ZP.NONE;
                },
                T = (e, t) => {
                    const r = e[o].products[t];
                    return r?.details;
                },
                C = (e, t) => {
                    const r = e[o].checkoutUrls[t];
                    return r?.fetchStatus || i.ZP.NONE;
                },
                O = (e, t) => {
                    const r = e[o].checkoutUrls[t];
                    return r?.checkoutUrl;
                },
                U = (e) => e[o].productSubscriptions.fetchStatus,
                l = (e) => (e[o].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                p = (e) => {
                    const t = e[o].productSubscriptions.subscriptions || [];
                    return (0, a.R)(t);
                },
                I = (e) => {
                    const t = e[o].switchTier;
                    return t?.fetchStatus || i.ZP.NONE;
                },
                A =
                    (e) =>
                    (t, r, { api: a }) => {
                        const s = (0, c._O)(t, { params: { id: e }, request: a.withEndpoint(n.Z).fetchSubscriptionProductDetails }),
                            o = b(r(), e);
                        return o !== i.ZP.NONE && o !== i.ZP.FAILED ? Promise.resolve() : s({ actionTypes: S, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                f =
                    (e) =>
                    (t, r, { api: a }) => {
                        const s = (0, c._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: a.withEndpoint(n.Z).fetchSubscriptionProductCheckoutUrl }),
                            o = C(r(), e.id);
                        return o !== i.ZP.NONE && o !== i.ZP.FAILED ? Promise.resolve() : s({ actionTypes: u, context: E, meta: { id: e.id } });
                    },
                m =
                    (e) =>
                    (t, r, { api: a }) => {
                        const s = (0, c._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: a.withEndpoint(n.Z).fetchNotABotCheckoutUrl }),
                            o = C(r(), e.id);
                        return o !== i.ZP.NONE && o !== i.ZP.FAILED ? Promise.resolve() : s({ actionTypes: u, context: E, meta: { id: e.id } });
                    },
                w =
                    () =>
                    (e, t, { api: r }) => {
                        const a = (0, c._O)(e, { params: { fetchPrices: !1 }, request: r.withEndpoint(n.Z).fetchProductSubscriptions }),
                            s = U(t());
                        return s !== i.ZP.NONE && s !== i.ZP.FAILED ? Promise.resolve() : a({ actionTypes: d, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                N =
                    (e) =>
                    (t, r, { api: a }) => {
                        const s = (0, c._O)(t, { params: { price_id: e }, request: a.withEndpoint(n.Z).switchTier }),
                            o = I(r());
                        return o !== i.ZP.NONE && o !== i.ZP.FAILED ? Promise.resolve() : s({ actionTypes: _, context: "TIER_SWITCH" });
                    };
            s.Z.register({
                [o]: function (e = R, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case S.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: i.ZP.LOADING } } };
                        }
                        case S.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: i.ZP.LOADED, details: t.payload } } };
                        }
                        case S.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: i.ZP.FAILED, error: t.payload } } };
                        }
                        case u.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: i.ZP.LOADING } } };
                        }
                        case u.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: i.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case u.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: i.ZP.FAILED, error: t.payload } } };
                        }
                        case d.REQUEST:
                            return { ...e, productSubscriptions: { fetchStatus: i.ZP.LOADING } };
                        case d.SUCCESS:
                            return { ...e, productSubscriptions: { fetchStatus: i.ZP.LOADED, subscriptions: t.payload } };
                        case d.FAILURE:
                            return { ...e, productSubscriptions: { fetchStatus: i.ZP.FAILED, error: t.payload } };
                        case _.REQUEST:
                            return { ...e, switchTier: { fetchStatus: i.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, switchTier: { fetchStatus: i.ZP.LOADED } };
                        case _.FAILURE:
                            return { ...e, switchTier: { fetchStatus: i.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
        },
        643242: (e, t, r) => {
            r.d(t, { H: () => n });
            const n = r(667218).n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-8ed0fac5.6b9ee00a.js.map
