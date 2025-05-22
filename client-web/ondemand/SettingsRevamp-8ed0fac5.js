"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-8ed0fac5"],
    {
        670094: (e, t, r) => {
            r.d(t, { d: () => S });
            var n = r(332920),
                s = r.n(n),
                E = r(88656),
                a = r(601576),
                o = r(163889);
            const i = s().a5d4fda0,
                S = (e = i, t = !0) => ({
                    customErrorHandler: (r) => {
                        const { context: n } = r;
                        return (!r) instanceof E.Z && (r.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, o.ZP)(r, { extra: { context: n, isStrato: !0 } }), t ? (0, a.mf)({ text: e }) : [];
                    },
                });
        },
        831558: (e, t, r) => {
            r.d(t, { HI: () => S, W1: () => d, oo: () => c, pe: () => i });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            var n = r(468811),
                s = r.n(n),
                E = r(704879);
            const a = new Uint8Array([0, 0, 0, 1]);
            async function o(e, t) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", (0, E.cL)(e, a, t)));
            }
            const i = async (e) => {
                const t = new Uint8Array((0, E.RG)(e)),
                    r = await crypto.subtle.importKey("raw", t.subarray(0, 65), { name: "ECDH", namedCurve: "P-256" }, !0, []),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: r }, u, 256),
                    s = await o(n, await crypto.subtle.exportKey("raw", r)),
                    a = s.slice(0, 16),
                    i = s.slice(16, 32),
                    S = await crypto.subtle.importKey("raw", a, { name: "AES-GCM", length: 128 }, !0, ["decrypt"]);
                return (0, E.Jx)(await crypto.subtle.decrypt({ name: "AES-GCM", iv: i }, S, t.subarray(65)));
            };
            async function S(e, t) {
                const r = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveBits"]),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: t }, r.privateKey, 256),
                    s = await o(n, await crypto.subtle.exportKey("raw", r.publicKey)),
                    a = s.slice(0, 16),
                    i = s.slice(16, 32),
                    S = await crypto.subtle.importKey("raw", a, { name: "AES-GCM", length: 128 }, !1, ["encrypt"]),
                    c = await crypto.subtle.encrypt({ name: "AES-GCM", iv: i }, S, (0, E.cv)(e)),
                    u = await crypto.subtle.exportKey("raw", r.publicKey);
                return (0, E.sM)((0, E.cL)(u, c));
            }
            const c = async (e) => ({ ...(await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, ["deriveBits"])), deviceId: e ?? s().v4(), isRegistered: !1 });
            let u;
            const d = (e) => {
                u = e;
            };
        },
        928233: (e, t, r) => {
            r.d(t, { FM: () => R, eY: () => _, qi: () => d });
            r(571372);
            var n = r(961111),
                s = r.n(n),
                E = r(878636),
                a = r(390387),
                o = r(163889),
                i = r(831558),
                S = r(704879);
            const c = "rweb.dmCryptoKeys";
            function u(e) {
                return c + 1 + e;
            }
            const d = async (e, t, { api: r, devicePersistence: n }) => {
                    try {
                        const o = a.x0(t());
                        if (!o) return;
                        await n.delete(c + "" + o);
                        const d = u(o);
                        let _ = await n.get(d);
                        const R = async () => {
                            const e = (0, S.sM)(await crypto.subtle.exportKey("spki", _.publicKey));
                            await s()(
                                async (t) => {
                                    try {
                                        await n.set(d, _), (await n.get(d)) ? await r.withEndpoint(E.Z).register({ registration_id: Math.round(1e5 * Math.random()), identity_key: e, device_id: _.deviceId }) : t(new Error("Could not set value in IndexedDB. Bailing out."));
                                    } catch (e) {
                                        if ((await n.delete(d), 403 !== e.status)) throw e;
                                        t(e);
                                    }
                                },
                                { minTimeout: 2e3, retries: 2 },
                            ),
                                await n.set(d, { ..._, isRegistered: !0 });
                        };
                        _ || (_ = await (0, i.oo)()), _.isRegistered || (await R()), (0, i.W1)(_.privateKey), e(a.Pv(_.deviceId));
                    } catch (e) {
                        403 !== e.status && (0, o.Hj)(e);
                    }
                },
                _ = async (e, t, { api: r, devicePersistence: n }) => {
                    const s = a.x0(t());
                    if (!s) return;
                    const E = u(s),
                        o = await n.get(E);
                    o && "unregistered" !== o.status && ((o.status = "unregistered"), delete o.privateKey, delete o.publicKey, await n.set(E, o), (0, i.W1)(void 0));
                },
                R = async (e, t, { api: r, devicePersistence: n }) => {
                    const s = a.x0(t());
                    if (!s) return;
                    const E = u(s),
                        o = await n.get(E);
                    if (!o || "unregistered" !== o.status) return;
                    const S = o.deviceId,
                        c = await (0, i.oo)(S);
                    await n.delete(E), await n.set(E, c), await e(d);
                };
        },
        704879: (e, t, r) => {
            r.d(t, { Jx: () => a, RG: () => n, cL: () => o, cv: () => E, sM: () => s });
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
            const E = (e) => new TextEncoder().encode(e),
                a = (e) => new TextDecoder().decode(e);
            function o(...e) {
                const t = e.map((e) => (e instanceof Uint8Array ? e : new Uint8Array(e))),
                    r = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
                let n = 0;
                for (const e of t) r.set(e, n), (n += e.length);
                return r;
            }
        },
        199087: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(626593),
                s = r(202784),
                E = (r(585488), r(351743)),
                a = r.n(E);
            const o = n.Z,
                i = () => {
                    const [e, t] = a()(o);
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
        661461: (e, t, r) => {
            r.d(t, { Nr: () => _, ug: () => R, yt: () => O });
            var n = r(759851),
                s = r(689048),
                E = r(499627),
                a = r(917799),
                o = r(312771),
                i = r(390387);
            const S = "availableLanguages",
                c = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                u = { fetchStatus: o.ZP.NONE, languages: [] };
            function d(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case c.SUCCESS: {
                        const { meta: r, payload: n } = t,
                            s = r?.lang ? r.lang : "en",
                            E = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(s),
                            a = E ? (e, t) => E.compare(e.name, t.name) : void 0;
                        return { ...e, languages: n?.slice().sort(a) || [], fetchStatus: o.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            E.Z.register({ [S]: d });
            const _ = (e) => e[S].languages,
                R = (e, t) => {
                    const r = (0, s.o)(t).toLowerCase(),
                        n = e[S].languages.find((e) => e.code === r);
                    return n?.name;
                },
                O = () => (e, t) => (t()[S].fetchStatus === o.ZP.LOADED ? Promise.resolve() : e(T())),
                T =
                    () =>
                    (e, t, { api: r }) =>
                        a._O(e, { request: r.withEndpoint(n.Z).fetchSupportedLanguages })({ actionTypes: c, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, i.VT)(t()) } });
        },
        576025: (e, t, r) => {
            r.d(t, { Lf: () => S, Po: () => u, _t: () => c });
            r(571372);
            var n = r(499627),
                s = r(312771);
            const E = "countryNames",
                a = { fetchStatus: s.ZP.NONE, countries: {} },
                o = { REQUEST: `${E}_REQUEST`, FAILURE: `${E}_FAILURE`, SUCCESS: `${E}_SUCCESS` },
                i = (e = a, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case o.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case o.FAILURE:
                            return { ...e, fetchStatus: s.ZP.NONE };
                        case o.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: s.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            n.Z.register({ [E]: i });
            const S = (e) => e[E].countries,
                c = (e, t) => {
                    const r = t && t.toUpperCase();
                    return e[E].countries[r];
                },
                u = (e) => (t, n) =>
                    n()[E].fetchStatus === s.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: o.REQUEST }),
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
                                  t({ type: o.SUCCESS, payload: n });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: o.FAILURE } : u("en"));
                              }));
        },
        122743: (e, t, r) => {
            r.d(t, { H: () => a });
            var n = r(6157),
                s = r(917799),
                E = r(189953);
            const a =
                () =>
                (e, t, { api: r }) =>
                    s._O(e, { request: r.withEndpoint(n.Z).clearConversations, params: {} })({ actionTypes: E.Dh, context: "CLEAR_CONVERSATIONS", meta: {} });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => ae, A0: () => Oe, BA: () => re, BS: () => f, CH: () => G, CR: () => $, Cr: () => U, DX: () => z, Dh: () => C, Dn: () => y, En: () => S, FF: () => M, FV: () => L, Gy: () => m, HF: () => R, IK: () => s, JO: () => Y, Jt: () => ne, KH: () => I, L0: () => W, Lc: () => a, OW: () => P, Oj: () => h, P9: () => x, Q_: () => E, Qg: () => v, Qh: () => X, Sv: () => o, TY: () => F, Tv: () => B, UN: () => p, VK: () => i, WK: () => te, Ws: () => c, Xg: () => q, Xi: () => K, Y8: () => u, Yb: () => A, Yf: () => n, Yx: () => d, ZN: () => j, _i: () => ie, ar: () => Q, cA: () => Re, cw: () => Ee, dK: () => _, dO: () => b, dZ: () => k, dw: () => de, f1: () => ue, fH: () => be, ip: () => Z, j$: () => Te, lQ: () => ee, lh: () => O, lm: () => T, mq: () => Ce, my: () => N, nK: () => g, o$: () => D, px: () => oe, qd: () => V, ru: () => _e, ub: () => l, vc: () => H, vi: () => w, wG: () => se, x5: () => J, yB: () => ce, z2: () => Se });
            const n = "grok",
                s = Object.freeze({ FUN: "fun", REGULAR: "" }),
                E = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                b = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                A = "rweb/grok/DELETE_CONVERSATION",
                w = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                U = "rweb/grok/CLEAR_CONVERSATION",
                l = "rweb/grok/USER_SEND_MESSAGE",
                N = "rweb/grok/REGENERATE_RESPONSE",
                p = "rweb/grok/GROK_RESPONSE_TYPING",
                h = "rweb/grok/GROK_RESPONSE_POSTS",
                g = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                m = "rweb/grok/GROK_RESPONSE_COMPLETE",
                L = "rweb/grok/GROK_RESPONSE_ERROR",
                P = "rweb/grok/GROK_RESPONSE_METADATA",
                f = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                y = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                G = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                k = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                F = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                H = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                Z = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                M = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                Q = "rweb/grok/GROK_WEB_RESULTS",
                V = "rweb/grok/GROK_CITED_WEB_RESULTS",
                x = "rweb/grok/ABORT_MESSAGE",
                Y = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                j = "rweb/grok/FETCH_CONVERSATION_ID_START",
                z = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                B = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                $ = "rweb/grok/EDITING_SET_ID",
                q = "rweb/grok/EDITING_CLEAR",
                W = "rweb/grok/EDITING_COMMIT",
                J = "rweb/grok/RETRY_MESSAGE",
                X = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                se = "rweb/grok/SET_PREFERRED_PROMPTS",
                Ee = "rweb/grok/SET_PROMPT_SOURCE",
                ae = "rweb/grok/NEW_CONVERSATION",
                oe = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ie = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                Se = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                ce = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                de = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                _e = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Re = "r/web/grok/SET_USING_EXPERIMENT",
                Oe = "r/web/grok/SET_PREFERRED_RESPONSE",
                Te = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Ce = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                be = "rweb/grok/SET_REASONING_LAYOUT";
        },
        231817: (e, t, r) => {
            r.d(t, { LJ: () => w, UD: () => U, gQ: () => h, gw: () => l, n2: () => I, zU: () => p });
            var n = r(24949),
                s = r(697926),
                E = r(744531),
                a = r(226395),
                o = r(928233),
                i = r(499627),
                S = r(917799),
                c = r(312771),
                u = r(390387);
            const d = `${r(291020).Y}/dm_registered_devices`,
                _ = `rweb/${d}`,
                R = S.dg(_, "FETCH_REGISTERED_DEVICES"),
                O = S.dg(_, "DEREGISTER_DEVICE"),
                T = { fetchStatus: c.ZP.NONE, devices: {} };
            function C(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED, devices: (0, s.Z)(b(t.payload), (e) => e.registration_token) };
                    case O.SUCCESS:
                        return { ...e, devices: (0, E.Z)(e.devices, t.meta.registration_token) };
                    default:
                        return e;
                }
            }
            i.Z.register({ [d]: C });
            const b = (e) => e?.public_keys || [],
                A = (e) => e[d].devices,
                w = (0, n.P1)(A, (e) => Object.values(e).sort((e, t) => t.registration_ts - e.registration_ts)),
                I = (e, t) => A(e)[t],
                U = (e) => e[d].fetchStatus,
                l = (e) => (t, r) => (U(r()) === c.ZP.LOADED ? Promise.resolve() : t(N(e))),
                N =
                    (e) =>
                    (t, r, { api: n }) =>
                        S._O(t, { params: e, request: n.withEndpoint(a.Z).fetchEncryptedDMsPublicKeysAndDevices })({ actionTypes: R, context: "FETCH_SESSIONS" }),
                p =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { registrationToken: e };
                        return S._O(t, { params: s, request: n.withEndpoint(a.Z).deregisterDevice })({ actionTypes: O, context: "DEREGISTER_DEVICE", meta: { registrationToken: e } }).then(() => {
                            const e = u.x0(r());
                            t(N({ loggedInUserId: e }));
                        });
                    },
                h =
                    (e) =>
                    (e, t, { api: r }) =>
                        e(o.FM).then(() => {
                            const r = u.x0(t());
                            e(N({ loggedInUserId: r }));
                        });
        },
        715684: (e, t, r) => {
            r.d(t, { Fm: () => h, TG: () => w, UD: () => U, _1: () => p, dj: () => l, kz: () => I });
            var n = r(24949),
                s = r(697926),
                E = r(744531),
                a = r(226395),
                o = r(499627),
                i = r(917799),
                S = r(312771);
            const c = `${r(291020).Y}/sessions`,
                u = `rweb/${c}`,
                d = i.dg(u, "FETCH_SESSIONS"),
                _ = i.dg(u, "REVOKE_SESSION"),
                R = i.dg(u, "REVOKE_ALL_SESSIONS"),
                O = { fetchStatus: S.ZP.NONE, sessions: {} };
            function T(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.REQUEST:
                        return { ...e, fetchStatus: S.ZP.LOADING };
                    case d.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: S.ZP.FAILED };
                    case d.SUCCESS:
                        return { ...e, error: null, fetchStatus: S.ZP.LOADED, sessions: (0, s.Z)(b(t.payload), (e) => e.token) };
                    case _.SUCCESS:
                        return { ...e, sessions: (0, E.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            o.Z.register({ [c]: T });
            function C(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const b = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(C) : []),
                A = (e) => e[c].sessions,
                w = (0, n.P1)(A, (e) => Object.values(e)),
                I = (e, t) => A(e)[t],
                U = (e) => e[c].fetchStatus,
                l = (e) => (t, r) => (U(r()) === S.ZP.LOADED ? Promise.resolve() : t(N(e))),
                N =
                    (e) =>
                    (t, r, { api: n }) =>
                        i._O(t, { params: e, request: n.withEndpoint(a.Z).fetchSessions })({ actionTypes: d, context: "FETCH_SESSIONS" }),
                p =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { hashed_token: e };
                        return i._O(t, { params: s, request: n.withEndpoint(a.Z).revokeSession })({ actionTypes: _, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                h =
                    (e) =>
                    (t, r, { api: n }) =>
                        i
                            ._O(t, { params: e, request: n.withEndpoint(a.Z).revokeAllSessions })({ actionTypes: R, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => N()(t, r, { api: n }));
        },
        948985: (e, t, r) => {
            r.d(t, { $q: () => A, UD: () => w, wz: () => I, zw: () => U });
            var n = r(24949),
                s = r(166852),
                E = r(226395),
                a = r(499627),
                o = r(917799),
                i = r(312771),
                S = r(56519),
                c = r(502909),
                u = r(600823);
            const d = `${r(291020).Y}/applications`,
                _ = `rweb/${d}`,
                R = o.dg(_, "FETCH_APPLICATIONS"),
                O = { fetchStatus: i.ZP.NONE };
            function T(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: i.ZP.LOADED };
                    default:
                        return e;
                }
            }
            a.Z.register({ [d]: T });
            const C = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === b.customActionTypes.revokeApplication.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: n } = t.meta,
                                    s = e.entities[n];
                                return { ...e, entities: { ...e.entities, [n]: { ...s, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token: e }),
                        getApiMethod: (e) => e.withEndpoint(E.Z).revokeApplication,
                    },
                    revokeOauth2Token: {
                        reducer: (e, t) => {
                            if (t.type === b.customActionTypes.revokeOauth2Token.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: n } = t.meta,
                                    s = e.entities[n];
                                return { ...e, entities: { ...e.entities, [n]: { ...s, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token_hash: e }),
                        getApiMethod: (e) => e.withEndpoint(E.Z).revokeOauth2Token,
                    },
                },
                b = (0, c.ZP)({ namespace: "applications", customActions: C });
            (b.selectUniqUnrevokedApps = (0, n.P1)(b.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, s.Z)(t, (e) => e.app_id);
            })),
                (b.selectAppsById = (0, n.P1)(
                    b.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const A = u.Z.register(b),
                w = (e) => e[d].fetchStatus,
                I = (e) => (t, r) => (w(r()) === i.ZP.LOADED ? Promise.resolve() : t(l(e))),
                U =
                    (e, t, r) =>
                    (r, n, { api: s }) => {
                        const E = n();
                        return b.selectAppsById(E, e).length > 0 ? Promise.resolve() : r(l(t));
                    },
                l =
                    (e) =>
                    (t, r, { api: n }) =>
                        o._O(t, { params: e, request: n.withEndpoint(E.Z).fetchApplications })({ actionTypes: R, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, S.dP)(e.entities)];
                        });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => _, xQ: () => R });
            var n = r(226395),
                s = r(499627),
                E = r(917799),
                a = r(312771),
                o = r(390387);
            const i = `${r(291020).Y}/user_preferences`,
                S = `rweb/${i}`,
                c = E.dg(S, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: a.ZP.NONE };
            function d(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: a.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: a.ZP.FAILED };
                    case c.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: a.ZP.LOADED };
                    default:
                        return e;
                }
            }
            s.Z.register({ [i]: d });
            const _ = (e) => e[i].userPreferences,
                R = () => (e, t) => (t()[i].fetchStatus === a.ZP.LOADED ? Promise.resolve() : e(O())),
                O =
                    () =>
                    (e, t, { api: r }) => {
                        const s = o.x0(t());
                        return E._O(e, { params: { userId: s }, request: r.withEndpoint(n.Z).fetchUserPreferences })({ actionTypes: c, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        643242: (e, t, r) => {
            r.d(t, { H: () => n });
            const n = r(667218).n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-8ed0fac5.cfd33f8a.js.map
