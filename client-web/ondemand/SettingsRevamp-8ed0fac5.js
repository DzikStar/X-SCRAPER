"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-8ed0fac5"],
    {
        670094: (e, t, r) => {
            r.d(t, { d: () => E });
            var n = r(332920),
                s = r.n(n),
                a = r(88656),
                i = r(601576),
                c = r(163889);
            const o = s().a5d4fda0,
                E = (e = o, t = !0) => ({
                    customErrorHandler: (r) => {
                        const { context: n } = r;
                        return (!r) instanceof a.Z && (r.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, c.ZP)(r, { extra: { context: n, isStrato: !0 } }), t ? (0, i.mf)({ text: e }) : [];
                    },
                });
        },
        831558: (e, t, r) => {
            r.d(t, { HI: () => E, W1: () => d, oo: () => u, pe: () => o });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            var n = r(468811),
                s = r.n(n),
                a = r(704879);
            const i = new Uint8Array([0, 0, 0, 1]);
            async function c(e, t) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", (0, a.cL)(e, i, t)));
            }
            const o = async (e) => {
                const t = new Uint8Array((0, a.RG)(e)),
                    r = await crypto.subtle.importKey("raw", t.subarray(0, 65), { name: "ECDH", namedCurve: "P-256" }, !0, []),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: r }, S, 256),
                    s = await c(n, await crypto.subtle.exportKey("raw", r)),
                    i = s.slice(0, 16),
                    o = s.slice(16, 32),
                    E = await crypto.subtle.importKey("raw", i, { name: "AES-GCM", length: 128 }, !0, ["decrypt"]);
                return (0, a.Jx)(await crypto.subtle.decrypt({ name: "AES-GCM", iv: o }, E, t.subarray(65)));
            };
            async function E(e, t) {
                const r = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveBits"]),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: t }, r.privateKey, 256),
                    s = await c(n, await crypto.subtle.exportKey("raw", r.publicKey)),
                    i = s.slice(0, 16),
                    o = s.slice(16, 32),
                    E = await crypto.subtle.importKey("raw", i, { name: "AES-GCM", length: 128 }, !1, ["encrypt"]),
                    u = await crypto.subtle.encrypt({ name: "AES-GCM", iv: o }, E, (0, a.cv)(e)),
                    S = await crypto.subtle.exportKey("raw", r.publicKey);
                return (0, a.sM)((0, a.cL)(S, u));
            }
            const u = async (e) => ({ ...(await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, ["deriveBits"])), deviceId: e ?? s().v4(), isRegistered: !1 });
            let S;
            const d = (e) => {
                S = e;
            };
        },
        928233: (e, t, r) => {
            r.d(t, { FM: () => R, eY: () => _, qi: () => d });
            r(571372);
            var n = r(961111),
                s = r.n(n),
                a = r(878636),
                i = r(390387),
                c = r(163889),
                o = r(831558),
                E = r(704879);
            const u = "rweb.dmCryptoKeys";
            function S(e) {
                return u + 1 + e;
            }
            const d = async (e, t, { api: r, devicePersistence: n }) => {
                    try {
                        const c = i.x0(t());
                        if (!c) return;
                        await n.delete(u + "" + c);
                        const d = S(c);
                        let _ = await n.get(d);
                        const R = async () => {
                            const e = (0, E.sM)(await crypto.subtle.exportKey("spki", _.publicKey));
                            await s()(
                                async (t) => {
                                    try {
                                        await n.set(d, _), (await n.get(d)) ? await r.withEndpoint(a.Z).register({ registration_id: Math.round(1e5 * Math.random()), identity_key: e, device_id: _.deviceId }) : t(new Error("Could not set value in IndexedDB. Bailing out."));
                                    } catch (e) {
                                        if ((await n.delete(d), 403 !== e.status)) throw e;
                                        t(e);
                                    }
                                },
                                { minTimeout: 2e3, retries: 2 },
                            ),
                                await n.set(d, { ..._, isRegistered: !0 });
                        };
                        _ || (_ = await (0, o.oo)()), _.isRegistered || (await R()), (0, o.W1)(_.privateKey), e(i.Pv(_.deviceId));
                    } catch (e) {
                        403 !== e.status && (0, c.Hj)(e);
                    }
                },
                _ = async (e, t, { api: r, devicePersistence: n }) => {
                    const s = i.x0(t());
                    if (!s) return;
                    const a = S(s),
                        c = await n.get(a);
                    c && "unregistered" !== c.status && ((c.status = "unregistered"), delete c.privateKey, delete c.publicKey, await n.set(a, c), (0, o.W1)(void 0));
                },
                R = async (e, t, { api: r, devicePersistence: n }) => {
                    const s = i.x0(t());
                    if (!s) return;
                    const a = S(s),
                        c = await n.get(a);
                    if (!c || "unregistered" !== c.status) return;
                    const E = c.deviceId,
                        u = await (0, o.oo)(E);
                    await n.delete(a), await n.set(a, u), await e(d);
                };
        },
        704879: (e, t, r) => {
            r.d(t, { Jx: () => i, RG: () => n, cL: () => c, cv: () => a, sM: () => s });
            r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            function n(e) {
                const t = atob(e),
                    r = t.length,
                    n = new Uint8Array(r);
                for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                return n.buffer;
            }
            function s(e) {
                let t = "";
                const r = new Uint8Array(e),
                    n = r.byteLength;
                for (let e = 0; e < n; e++) t += String.fromCharCode(r[e]);
                return btoa(t);
            }
            const a = (e) => new TextEncoder().encode(e),
                i = (e) => new TextDecoder().decode(e);
            function c(...e) {
                const t = e.map((e) => (e instanceof Uint8Array ? e : new Uint8Array(e))),
                    r = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
                let n = 0;
                for (const e of t) r.set(e, n), (n += e.length);
                return r;
            }
        },
        97882: (e, t, r) => {
            r.d(t, { T: () => a, x: () => i });
            var n = r(332920),
                s = r.n(n);
            const a = { AED: s().d857e44d, ALL: s().cb87e3db, ARS: s().a9d5ffd1, AUD: s().a0e8371d, BAM: s().gcc50dc9, BDT: s().a6a43585, BGN: s().a0cc8f2d, BHD: s().i31c32c5, BRL: s().i7dc69e9, BYR: s().c14a6c03, CAD: s().jaa3d537, CHF: s().a824080b, CLP: s().d9c0bedb, CNY: s().bf8c0613, COP: s().i8163625, CZK: s().adb53ba1, DKK: s().iabf697d, DZD: s().a1a0555b, EGP: s().f266f3d9, EUR: s().a9a8652b, GBP: s().dbf40761, GHS: s().b0d993d9, GTQ: s().ac1308e1, HKD: s().a7889ab3, HRK: s().c614f5cd, HUF: s().i55d57e3, IDR: s().e4b6002b, ILS: s().d28e983b, INR: s().e8c9232d, IQD: s().c8994ae1, ISK: s().f821c2a5, JPY: s().j348b9c9, KES: s().i6f93b9b, KRW: s().c6150bd5, KWD: s().i8921e09, KZT: s().ef239279, LBP: s().hecdb149, MAD: s().fdd039b7, MKD: s().f30c2c37, MXN: s().d9ea7bff, MYR: s().ea3df4b7, NGN: s().jaac21bb, NOK: s().hb435ced, NZD: s().ce699d81, PEN: s().bc56d3d7, PHP: s().f8561913, PKR: s().g6485d53, PLN: s().ff561cc1, QAR: s().b42011d3, RON: s().a6660bcd, RSD: s().f9b80449, RUB: s().gdee4d5d, SAR: s().h36f2103, SEK: s().a19ad037, SGD: s().g713f699, THB: s().ff2e39af, TND: s().be34316d, TRY: s().aef81b75, TWD: s().fcce70a5, TZS: s().jc9d352f, UAH: s().be1cb8c5, UGX: s().j9371501, USD: s().j7d4397d, VEF: s().d61441dd, VND: s().e2a99e97, ZAR: s().f7ce19ab, ZMW: s().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: r = 1e6, removeTrailingZeros: n = !1, strictAmount: s = !1 }) => {
                    const i = s ? e : parseInt(e, 10) / r,
                        o = a[t]?.(i);
                    return n ? c(o) : o;
                },
                c = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        321330: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                s = r(332920),
                a = r.n(s),
                i = r(443781);
            const c = a().f75d1806,
                o = a().j4a7d9a6,
                E = a().hedf9d7c,
                u = () => {
                    const { userClaims: e } = n.useContext(i.rC),
                        t = e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate"),
                        r = { label: c, value: "Premium" };
                    return t || e.hasSubscription("premium_plus") ? { label: E, value: "Premium+" } : e.hasSubscription("premium_standard") ? r : e.hasSubscription("premium_basic") ? { label: o, value: "Basic" } : r;
                };
        },
        199087: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(626593),
                s = r(202784),
                a = (r(585488), r(351743)),
                i = r.n(a);
            const c = n.Z,
                o = () => {
                    const [e, t] = i()(c);
                    return [
                        s.useCallback(
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
            r.d(t, { Ld: () => u, gS: () => E, pB: () => c, yv: () => o });
            var n = r(332920),
                s = r.n(n),
                a = r(337394);
            const i = s().b47d123d,
                c = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === a.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === a.rv.Month),
                        n = r ? 12 * r?.amount_local_micro : 0,
                        s = t ? Math.floor(((t.amount_local_micro - n) / n) * -100) : null;
                    return i({ percentage: s });
                },
                o = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (a.v5.premium[r] === t) return "active";
                    switch (a.v5.premium[r]) {
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
                        s = Date.now(),
                        a = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                a = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > s) {
                                if ("active" === n) return a < s;
                                if ("pending" === n) return a > s;
                            }
                        });
                    return a?.[0];
                },
                u = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            r.d(t, { Gi: () => C, Mk: () => l, ZV: () => b, aU: () => R, d3: () => p, fS: () => O, pt: () => T });
            r(202784);
            var n = r(332920),
                s = r.n(n),
                a = r(336629),
                i = r(862695),
                c = r(97882),
                o = r(337394),
                E = r(548797);
            const u = s().c6614cc0,
                S = s().f8d3b50a,
                d = s().i2c32253,
                _ = s().c41e1023;
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
                return "number" == typeof e?.tax_amount_local_micro ? S : u;
            }
            const T = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function C(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function p(e, t = !1, r, n = !1, s = !0) {
                const u = (0, E.gS)(r, "Discount", { status: n ? "pending" : "active" }),
                    S = (0, c.x)({ amount: R(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return u && e.charge_interval ? (0, i.V)({ selectedInterval: e.charge_interval, duration: u.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, a.T)({ price: e, percentOff: u.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: S, includeDiscountedPrice: !0, includeThenLabel: s }) : e.charge_interval === o.rv.Year ? _({ price: S }) : e.charge_interval === o.rv.Month ? d({ price: S }) : "";
            }
            const l = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                O = (e, t, r) => {
                    if (!t || r) return null;
                    const n = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return n;
                };
        },
        661461: (e, t, r) => {
            r.d(t, { Nr: () => _, ug: () => R, yt: () => b });
            var n = r(759851),
                s = r(689048),
                a = r(499627),
                i = r(917799),
                c = r(312771),
                o = r(390387);
            const E = "availableLanguages",
                u = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                S = { fetchStatus: c.ZP.NONE, languages: [] };
            function d(e = S, t) {
                if (!t) return e;
                switch (t.type) {
                    case u.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case u.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case u.SUCCESS: {
                        const { meta: r, payload: n } = t,
                            s = r?.lang ? r.lang : "en",
                            a = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(s),
                            i = a ? (e, t) => a.compare(e.name, t.name) : void 0;
                        return { ...e, languages: n?.slice().sort(i) || [], fetchStatus: c.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            a.Z.register({ [E]: d });
            const _ = (e) => e[E].languages,
                R = (e, t) => {
                    const r = (0, s.o)(t).toLowerCase(),
                        n = e[E].languages.find((e) => e.code === r);
                    return n?.name;
                },
                b = () => (e, t) => (t()[E].fetchStatus === c.ZP.LOADED ? Promise.resolve() : e(T())),
                T =
                    () =>
                    (e, t, { api: r }) =>
                        i._O(e, { request: r.withEndpoint(n.Z).fetchSupportedLanguages })({ actionTypes: u, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, o.VT)(t()) } });
        },
        576025: (e, t, r) => {
            r.d(t, { Lf: () => E, Po: () => S, _t: () => u });
            r(571372);
            var n = r(499627),
                s = r(312771);
            const a = "countryNames",
                i = { fetchStatus: s.ZP.NONE, countries: {} },
                c = { REQUEST: `${a}_REQUEST`, FAILURE: `${a}_FAILURE`, SUCCESS: `${a}_SUCCESS` },
                o = (e = i, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case c.FAILURE:
                            return { ...e, fetchStatus: s.ZP.NONE };
                        case c.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: s.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            n.Z.register({ [a]: o });
            const E = (e) => e[a].countries,
                u = (e, t) => {
                    const r = t && t.toUpperCase();
                    return e[a].countries[r];
                },
                S = (e) => (t, n) =>
                    n()[a].fetchStatus === s.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: c.REQUEST }),
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
                                  t({ type: c.SUCCESS, payload: n });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: c.FAILURE } : S("en"));
                              }));
        },
        122743: (e, t, r) => {
            r.d(t, { H: () => i });
            var n = r(6157),
                s = r(917799),
                a = r(189953);
            const i =
                () =>
                (e, t, { api: r }) =>
                    s._O(e, { request: r.withEndpoint(n.Z).clearConversations, params: {} })({ actionTypes: a.Dh, context: "CLEAR_CONVERSATIONS", meta: {} });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => ie, A0: () => be, BA: () => re, BS: () => L, CH: () => y, CR: () => q, Cr: () => A, DX: () => Y, Dh: () => C, Dn: () => D, En: () => E, FF: () => M, FV: () => N, Gy: () => w, HF: () => R, IK: () => s, JO: () => V, Jt: () => ne, KH: () => U, L0: () => $, Lc: () => i, OW: () => g, Oj: () => m, P9: () => x, Q_: () => a, Qg: () => k, Qh: () => J, Sv: () => c, TY: () => G, Tv: () => z, UN: () => h, VK: () => o, WK: () => te, Ws: () => u, Xg: () => W, Xi: () => H, Y8: () => S, Yb: () => l, Yf: () => n, Yx: () => d, ZN: () => j, _i: () => oe, ar: () => B, cA: () => Re, cw: () => ae, dK: () => _, dO: () => p, dZ: () => F, dw: () => de, f1: () => Se, fH: () => pe, ip: () => K, j$: () => Te, lQ: () => ee, lh: () => b, lm: () => T, mq: () => Ce, my: () => f, nK: () => P, o$: () => v, px: () => ce, qd: () => Q, ru: () => _e, ub: () => I, vc: () => Z, vi: () => O, wG: () => se, x5: () => X, yB: () => ue, z2: () => Ee });
            const n = "grok",
                s = Object.freeze({ FUN: "fun", REGULAR: "" }),
                a = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                b = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                l = "rweb/grok/DELETE_CONVERSATION",
                O = "rweb/grok/RENAME_CONVERSATION",
                U = "rweb/grok/SET_ABORT_CONTROLLER",
                A = "rweb/grok/CLEAR_CONVERSATION",
                I = "rweb/grok/USER_SEND_MESSAGE",
                f = "rweb/grok/REGENERATE_RESPONSE",
                h = "rweb/grok/GROK_RESPONSE_TYPING",
                m = "rweb/grok/GROK_RESPONSE_POSTS",
                P = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                w = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                g = "rweb/grok/GROK_RESPONSE_METADATA",
                L = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                D = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                y = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                v = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                G = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                k = "rweb/grok/GROK_RESPONSE_UPSELL",
                H = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                Z = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                K = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                M = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                B = "rweb/grok/GROK_WEB_RESULTS",
                Q = "rweb/grok/GROK_CITED_WEB_RESULTS",
                x = "rweb/grok/ABORT_MESSAGE",
                V = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                j = "rweb/grok/FETCH_CONVERSATION_ID_START",
                Y = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                z = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                q = "rweb/grok/EDITING_SET_ID",
                W = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                X = "rweb/grok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                se = "rweb/grok/SET_PREFERRED_PROMPTS",
                ae = "rweb/grok/SET_PROMPT_SOURCE",
                ie = "rweb/grok/NEW_CONVERSATION",
                ce = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                oe = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                Ee = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                ue = "rweb/grok/QUERY_TYPING",
                Se = "rweb/grok/ADD_BANNER_MESSAGE",
                de = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                _e = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Re = "r/web/grok/SET_USING_EXPERIMENT",
                be = "r/web/grok/SET_PREFERRED_RESPONSE",
                Te = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Ce = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                pe = "rweb/grok/SET_REASONING_LAYOUT";
        },
        231817: (e, t, r) => {
            r.d(t, { LJ: () => O, UD: () => A, gQ: () => m, gw: () => I, n2: () => U, zU: () => h });
            var n = r(24949),
                s = r(697926),
                a = r(744531),
                i = r(226395),
                c = r(928233),
                o = r(499627),
                E = r(917799),
                u = r(312771),
                S = r(390387);
            const d = `${r(291020).Y}/dm_registered_devices`,
                _ = `rweb/${d}`,
                R = E.dg(_, "FETCH_REGISTERED_DEVICES"),
                b = E.dg(_, "DEREGISTER_DEVICE"),
                T = { fetchStatus: u.ZP.NONE, devices: {} };
            function C(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: u.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: u.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: u.ZP.LOADED, devices: (0, s.Z)(p(t.payload), (e) => e.registration_token) };
                    case b.SUCCESS:
                        return { ...e, devices: (0, a.Z)(e.devices, t.meta.registration_token) };
                    default:
                        return e;
                }
            }
            o.Z.register({ [d]: C });
            const p = (e) => e?.public_keys || [],
                l = (e) => e[d].devices,
                O = (0, n.P1)(l, (e) => Object.values(e).sort((e, t) => t.registration_ts - e.registration_ts)),
                U = (e, t) => l(e)[t],
                A = (e) => e[d].fetchStatus,
                I = (e) => (t, r) => (A(r()) === u.ZP.LOADED ? Promise.resolve() : t(f(e))),
                f =
                    (e) =>
                    (t, r, { api: n }) =>
                        E._O(t, { params: e, request: n.withEndpoint(i.Z).fetchEncryptedDMsPublicKeysAndDevices })({ actionTypes: R, context: "FETCH_SESSIONS" }),
                h =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { registrationToken: e };
                        return E._O(t, { params: s, request: n.withEndpoint(i.Z).deregisterDevice })({ actionTypes: b, context: "DEREGISTER_DEVICE", meta: { registrationToken: e } }).then(() => {
                            const e = S.x0(r());
                            t(f({ loggedInUserId: e }));
                        });
                    },
                m =
                    (e) =>
                    (e, t, { api: r }) =>
                        e(c.FM).then(() => {
                            const r = S.x0(t());
                            e(f({ loggedInUserId: r }));
                        });
        },
        715684: (e, t, r) => {
            r.d(t, { Fm: () => m, TG: () => O, UD: () => A, _1: () => h, dj: () => I, kz: () => U });
            var n = r(24949),
                s = r(697926),
                a = r(744531),
                i = r(226395),
                c = r(499627),
                o = r(917799),
                E = r(312771);
            const u = `${r(291020).Y}/sessions`,
                S = `rweb/${u}`,
                d = o.dg(S, "FETCH_SESSIONS"),
                _ = o.dg(S, "REVOKE_SESSION"),
                R = o.dg(S, "REVOKE_ALL_SESSIONS"),
                b = { fetchStatus: E.ZP.NONE, sessions: {} };
            function T(e = b, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.REQUEST:
                        return { ...e, fetchStatus: E.ZP.LOADING };
                    case d.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: E.ZP.FAILED };
                    case d.SUCCESS:
                        return { ...e, error: null, fetchStatus: E.ZP.LOADED, sessions: (0, s.Z)(p(t.payload), (e) => e.token) };
                    case _.SUCCESS:
                        return { ...e, sessions: (0, a.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            c.Z.register({ [u]: T });
            function C(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const p = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(C) : []),
                l = (e) => e[u].sessions,
                O = (0, n.P1)(l, (e) => Object.values(e)),
                U = (e, t) => l(e)[t],
                A = (e) => e[u].fetchStatus,
                I = (e) => (t, r) => (A(r()) === E.ZP.LOADED ? Promise.resolve() : t(f(e))),
                f =
                    (e) =>
                    (t, r, { api: n }) =>
                        o._O(t, { params: e, request: n.withEndpoint(i.Z).fetchSessions })({ actionTypes: d, context: "FETCH_SESSIONS" }),
                h =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { hashed_token: e };
                        return o._O(t, { params: s, request: n.withEndpoint(i.Z).revokeSession })({ actionTypes: _, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                m =
                    (e) =>
                    (t, r, { api: n }) =>
                        o
                            ._O(t, { params: e, request: n.withEndpoint(i.Z).revokeAllSessions })({ actionTypes: R, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => f()(t, r, { api: n }));
        },
        948985: (e, t, r) => {
            r.d(t, { $q: () => l, UD: () => O, wz: () => U, zw: () => A });
            var n = r(24949),
                s = r(166852),
                a = r(226395),
                i = r(499627),
                c = r(917799),
                o = r(312771),
                E = r(56519),
                u = r(502909),
                S = r(600823);
            const d = `${r(291020).Y}/applications`,
                _ = `rweb/${d}`,
                R = c.dg(_, "FETCH_APPLICATIONS"),
                b = { fetchStatus: o.ZP.NONE };
            function T(e = b, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: o.ZP.LOADED };
                    default:
                        return e;
                }
            }
            i.Z.register({ [d]: T });
            const C = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === p.customActionTypes.revokeApplication.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: n } = t.meta,
                                    s = e.entities[n];
                                return { ...e, entities: { ...e.entities, [n]: { ...s, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeApplication,
                    },
                    revokeOauth2Token: {
                        reducer: (e, t) => {
                            if (t.type === p.customActionTypes.revokeOauth2Token.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: n } = t.meta,
                                    s = e.entities[n];
                                return { ...e, entities: { ...e.entities, [n]: { ...s, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token_hash: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeOauth2Token,
                    },
                },
                p = (0, u.ZP)({ namespace: "applications", customActions: C });
            (p.selectUniqUnrevokedApps = (0, n.P1)(p.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, s.Z)(t, (e) => e.app_id);
            })),
                (p.selectAppsById = (0, n.P1)(
                    p.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const l = S.Z.register(p),
                O = (e) => e[d].fetchStatus,
                U = (e) => (t, r) => (O(r()) === o.ZP.LOADED ? Promise.resolve() : t(I(e))),
                A =
                    (e, t, r) =>
                    (r, n, { api: s }) => {
                        const a = n();
                        return p.selectAppsById(a, e).length > 0 ? Promise.resolve() : r(I(t));
                    },
                I =
                    (e) =>
                    (t, r, { api: n }) =>
                        c._O(t, { params: e, request: n.withEndpoint(a.Z).fetchApplications })({ actionTypes: R, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, E.dP)(e.entities)];
                        });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => _, xQ: () => R });
            var n = r(226395),
                s = r(499627),
                a = r(917799),
                i = r(312771),
                c = r(390387);
            const o = `${r(291020).Y}/user_preferences`,
                E = `rweb/${o}`,
                u = a.dg(E, "FETCH_USER_PREFERENCES"),
                S = { userPreferences: {}, error: null, fetchStatus: i.ZP.NONE };
            function d(e = S, t) {
                if (!t) return e;
                switch (t.type) {
                    case u.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case u.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case u.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: i.ZP.LOADED };
                    default:
                        return e;
                }
            }
            s.Z.register({ [o]: d });
            const _ = (e) => e[o].userPreferences,
                R = () => (e, t) => (t()[o].fetchStatus === i.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: r }) => {
                        const s = c.x0(t());
                        return a._O(e, { params: { userId: s }, request: r.withEndpoint(n.Z).fetchUserPreferences })({ actionTypes: u, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        365265: (e, t, r) => {
            r.d(t, { $B: () => C, F$: () => p, Ne: () => I, RC: () => A, VR: () => l, dF: () => U, h9: () => T, hu: () => h, pC: () => O, qB: () => f, tF: () => b, v1: () => m, xN: () => P });
            var n = r(372551),
                s = r(147595),
                a = r(499627),
                i = r(917799),
                c = r(312771);
            const o = "subscriptionPayments",
                E = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                u = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                R = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: c.ZP.NONE }, switchTier: { fetchStatus: c.ZP.NONE } };
            const b = (e, t) => {
                    const r = e[o].products[t];
                    return r?.fetchStatus || c.ZP.NONE;
                },
                T = (e, t) => {
                    const r = e[o].products[t];
                    return r?.details;
                },
                C = (e, t) => {
                    const r = e[o].checkoutUrls[t];
                    return r?.fetchStatus || c.ZP.NONE;
                },
                p = (e, t) => {
                    const r = e[o].checkoutUrls[t];
                    return r?.checkoutUrl;
                },
                l = (e) => e[o].productSubscriptions.fetchStatus,
                O = (e) => (e[o].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                U = (e) => {
                    const t = e[o].productSubscriptions.subscriptions || [];
                    return (0, s.R)(t);
                },
                A = (e) => {
                    const t = e[o].switchTier;
                    return t?.fetchStatus || c.ZP.NONE;
                },
                I =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = (0, i._O)(t, { params: { id: e }, request: s.withEndpoint(n.Z).fetchSubscriptionProductDetails }),
                            o = b(r(), e);
                        return o !== c.ZP.NONE && o !== c.ZP.FAILED ? Promise.resolve() : a({ actionTypes: u, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                f =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = (0, i._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: s.withEndpoint(n.Z).fetchSubscriptionProductCheckoutUrl }),
                            o = C(r(), e.id);
                        return o !== c.ZP.NONE && o !== c.ZP.FAILED ? Promise.resolve() : a({ actionTypes: S, context: E, meta: { id: e.id } });
                    },
                h =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = (0, i._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: s.withEndpoint(n.Z).fetchNotABotCheckoutUrl }),
                            o = C(r(), e.id);
                        return o !== c.ZP.NONE && o !== c.ZP.FAILED ? Promise.resolve() : a({ actionTypes: S, context: E, meta: { id: e.id } });
                    },
                m =
                    () =>
                    (e, t, { api: r }) => {
                        const s = (0, i._O)(e, { params: { fetchPrices: !1 }, request: r.withEndpoint(n.Z).fetchProductSubscriptions }),
                            a = l(t());
                        return a !== c.ZP.NONE && a !== c.ZP.FAILED ? Promise.resolve() : s({ actionTypes: d, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                P =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = (0, i._O)(t, { params: { price_id: e }, request: s.withEndpoint(n.Z).switchTier }),
                            o = A(r());
                        return o !== c.ZP.NONE && o !== c.ZP.FAILED ? Promise.resolve() : a({ actionTypes: _, context: "TIER_SWITCH" });
                    };
            a.Z.register({
                [o]: function (e = R, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: c.ZP.LOADING } } };
                        }
                        case u.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: c.ZP.LOADED, details: t.payload } } };
                        }
                        case u.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: c.ZP.FAILED, error: t.payload } } };
                        }
                        case S.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: c.ZP.LOADING } } };
                        }
                        case S.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: c.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case S.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: c.ZP.FAILED, error: t.payload } } };
                        }
                        case d.REQUEST:
                            return { ...e, productSubscriptions: { fetchStatus: c.ZP.LOADING } };
                        case d.SUCCESS:
                            return { ...e, productSubscriptions: { fetchStatus: c.ZP.LOADED, subscriptions: t.payload } };
                        case d.FAILURE:
                            return { ...e, productSubscriptions: { fetchStatus: c.ZP.FAILED, error: t.payload } };
                        case _.REQUEST:
                            return { ...e, switchTier: { fetchStatus: c.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, switchTier: { fetchStatus: c.ZP.LOADED } };
                        case _.FAILURE:
                            return { ...e, switchTier: { fetchStatus: c.ZP.FAILED } };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-8ed0fac5.fd89795a.js.map
