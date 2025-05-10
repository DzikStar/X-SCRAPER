"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-8ed0fac5"],
    {
        831558: (e, t, r) => {
            r.d(t, { HI: () => i, W1: () => R, oo: () => c, pe: () => o });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            var n = r(468811),
                E = r.n(n),
                a = r(704879);
            const s = new Uint8Array([0, 0, 0, 1]);
            async function S(e, t) {
                return new Uint8Array(await crypto.subtle.digest("SHA-256", (0, a.cL)(e, s, t)));
            }
            const o = async (e) => {
                const t = new Uint8Array((0, a.RG)(e)),
                    r = await crypto.subtle.importKey("raw", t.subarray(0, 65), { name: "ECDH", namedCurve: "P-256" }, !0, []),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: r }, d, 256),
                    E = await S(n, await crypto.subtle.exportKey("raw", r)),
                    s = E.slice(0, 16),
                    o = E.slice(16, 32),
                    i = await crypto.subtle.importKey("raw", s, { name: "AES-GCM", length: 128 }, !0, ["decrypt"]);
                return (0, a.Jx)(await crypto.subtle.decrypt({ name: "AES-GCM", iv: o }, i, t.subarray(65)));
            };
            async function i(e, t) {
                const r = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveBits"]),
                    n = await crypto.subtle.deriveBits({ name: "ECDH", public: t }, r.privateKey, 256),
                    E = await S(n, await crypto.subtle.exportKey("raw", r.publicKey)),
                    s = E.slice(0, 16),
                    o = E.slice(16, 32),
                    i = await crypto.subtle.importKey("raw", s, { name: "AES-GCM", length: 128 }, !1, ["encrypt"]),
                    c = await crypto.subtle.encrypt({ name: "AES-GCM", iv: o }, i, (0, a.cv)(e)),
                    d = await crypto.subtle.exportKey("raw", r.publicKey);
                return (0, a.sM)((0, a.cL)(d, c));
            }
            const c = async (e) => ({ ...(await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, ["deriveBits"])), deviceId: e ?? E().v4(), isRegistered: !1 });
            let d;
            const R = (e) => {
                d = e;
            };
        },
        928233: (e, t, r) => {
            r.d(t, { FM: () => _, eY: () => u, qi: () => R });
            r(571372);
            var n = r(961111),
                E = r.n(n),
                a = r(878636),
                s = r(390387),
                S = r(163889),
                o = r(831558),
                i = r(704879);
            const c = "rweb.dmCryptoKeys";
            function d(e) {
                return c + 1 + e;
            }
            const R = async (e, t, { api: r, devicePersistence: n }) => {
                    try {
                        const S = s.x0(t());
                        if (!S) return;
                        await n.delete(c + "" + S);
                        const R = d(S);
                        let u = await n.get(R);
                        const _ = async () => {
                            const e = (0, i.sM)(await crypto.subtle.exportKey("spki", u.publicKey));
                            await E()(
                                async (t) => {
                                    try {
                                        await n.set(R, u), (await n.get(R)) ? await r.withEndpoint(a.Z).register({ registration_id: Math.round(1e5 * Math.random()), identity_key: e, device_id: u.deviceId }) : t(new Error("Could not set value in IndexedDB. Bailing out."));
                                    } catch (e) {
                                        if ((await n.delete(R), 403 !== e.status)) throw e;
                                        t(e);
                                    }
                                },
                                { minTimeout: 2e3, retries: 2 },
                            ),
                                await n.set(R, { ...u, isRegistered: !0 });
                        };
                        u || (u = await (0, o.oo)()), u.isRegistered || (await _()), (0, o.W1)(u.privateKey), e(s.Pv(u.deviceId));
                    } catch (e) {
                        403 !== e.status && (0, S.Hj)(e);
                    }
                },
                u = async (e, t, { api: r, devicePersistence: n }) => {
                    const E = s.x0(t());
                    if (!E) return;
                    const a = d(E),
                        S = await n.get(a);
                    S && "unregistered" !== S.status && ((S.status = "unregistered"), delete S.privateKey, delete S.publicKey, await n.set(a, S), (0, o.W1)(void 0));
                },
                _ = async (e, t, { api: r, devicePersistence: n }) => {
                    const E = s.x0(t());
                    if (!E) return;
                    const a = d(E),
                        S = await n.get(a);
                    if (!S || "unregistered" !== S.status) return;
                    const i = S.deviceId,
                        c = await (0, o.oo)(i);
                    await n.delete(a), await n.set(a, c), await e(R);
                };
        },
        704879: (e, t, r) => {
            r.d(t, { Jx: () => s, RG: () => n, cL: () => S, cv: () => a, sM: () => E });
            r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            function n(e) {
                const t = atob(e),
                    r = t.length,
                    n = new Uint8Array(r);
                for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                return n.buffer;
            }
            function E(e) {
                let t = "";
                const r = new Uint8Array(e),
                    n = r.byteLength;
                for (let e = 0; e < n; e++) t += String.fromCharCode(r[e]);
                return btoa(t);
            }
            const a = (e) => new TextEncoder().encode(e),
                s = (e) => new TextDecoder().decode(e);
            function S(...e) {
                const t = e.map((e) => (e instanceof Uint8Array ? e : new Uint8Array(e))),
                    r = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
                let n = 0;
                for (const e of t) r.set(e, n), (n += e.length);
                return r;
            }
        },
        199087: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(626593),
                E = r(202784),
                a = (r(585488), r(351743)),
                s = r.n(a);
            const S = n.Z,
                o = () => {
                    const [e, t] = s()(S);
                    return [
                        E.useCallback(
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
            r.d(t, { Nr: () => u, ug: () => _, yt: () => b });
            var n = r(759851),
                E = r(689048),
                a = r(499627),
                s = r(917799),
                S = r(312771),
                o = r(390387);
            const i = "availableLanguages",
                c = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                d = { fetchStatus: S.ZP.NONE, languages: [] };
            function R(e = d, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: S.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: S.ZP.FAILED };
                    case c.SUCCESS: {
                        const { meta: r, payload: n } = t,
                            E = r?.lang ? r.lang : "en",
                            a = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(E),
                            s = a ? (e, t) => a.compare(e.name, t.name) : void 0;
                        return { ...e, languages: n?.slice().sort(s) || [], fetchStatus: S.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            a.Z.register({ [i]: R });
            const u = (e) => e[i].languages,
                _ = (e, t) => {
                    const r = (0, E.o)(t).toLowerCase(),
                        n = e[i].languages.find((e) => e.code === r);
                    return n?.name;
                },
                b = () => (e, t) => (t()[i].fetchStatus === S.ZP.LOADED ? Promise.resolve() : e(O())),
                O =
                    () =>
                    (e, t, { api: r }) =>
                        s._O(e, { request: r.withEndpoint(n.Z).fetchSupportedLanguages })({ actionTypes: c, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, o.VT)(t()) } });
        },
        576025: (e, t, r) => {
            r.d(t, { Lf: () => i, Po: () => d, _t: () => c });
            r(571372);
            var n = r(499627),
                E = r(312771);
            const a = "countryNames",
                s = { fetchStatus: E.ZP.NONE, countries: {} },
                S = { REQUEST: `${a}_REQUEST`, FAILURE: `${a}_FAILURE`, SUCCESS: `${a}_SUCCESS` },
                o = (e = s, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case S.REQUEST:
                            return { ...e, fetchStatus: E.ZP.LOADING };
                        case S.FAILURE:
                            return { ...e, fetchStatus: E.ZP.NONE };
                        case S.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: E.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            n.Z.register({ [a]: o });
            const i = (e) => e[a].countries,
                c = (e, t) => {
                    const r = t && t.toUpperCase();
                    return e[a].countries[r];
                },
                d = (e) => (t, n) =>
                    n()[a].fetchStatus === E.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: S.REQUEST }),
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
                                  t({ type: S.SUCCESS, payload: n });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: S.FAILURE } : d("en"));
                              }));
        },
        122743: (e, t, r) => {
            r.d(t, { H: () => s });
            var n = r(6157),
                E = r(917799),
                a = r(189953);
            const s =
                () =>
                (e, t, { api: r }) =>
                    E._O(e, { request: r.withEndpoint(n.Z).clearConversations, params: {} })({ actionTypes: a.Dh, context: "CLEAR_CONVERSATIONS", meta: {} });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => se, A0: () => be, BA: () => re, BS: () => P, CH: () => y, CR: () => W, Cr: () => U, DX: () => z, Dh: () => T, Dn: () => f, En: () => i, FF: () => Q, FV: () => m, Gy: () => G, HF: () => _, IK: () => E, JO: () => x, Jt: () => ne, KH: () => I, L0: () => q, Lc: () => s, OW: () => p, Oj: () => l, P9: () => Y, Q_: () => a, Qg: () => k, Qh: () => X, Sv: () => S, TY: () => K, Tv: () => B, UN: () => h, VK: () => o, WK: () => te, Ws: () => c, Xg: () => $, Xi: () => H, Y8: () => d, Yb: () => A, Yf: () => n, Yx: () => R, ZN: () => j, _i: () => oe, ar: () => V, cA: () => _e, cw: () => ae, dK: () => u, dO: () => C, dZ: () => D, dw: () => Re, f1: () => de, fH: () => Ce, ip: () => M, j$: () => Oe, lQ: () => ee, lh: () => b, lm: () => O, mq: () => Te, my: () => g, nK: () => L, o$: () => F, px: () => Se, qd: () => Z, ru: () => ue, ub: () => N, vc: () => v, vi: () => w, wG: () => Ee, x5: () => J, yB: () => ce, z2: () => ie });
            const n = "grok",
                E = Object.freeze({ FUN: "fun", REGULAR: "" }),
                a = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                s = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                b = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                A = "rweb/grok/DELETE_CONVERSATION",
                w = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                U = "rweb/grok/CLEAR_CONVERSATION",
                N = "rweb/grok/USER_SEND_MESSAGE",
                g = "rweb/grok/REGENERATE_RESPONSE",
                h = "rweb/grok/GROK_RESPONSE_TYPING",
                l = "rweb/grok/GROK_RESPONSE_POSTS",
                L = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                G = "rweb/grok/GROK_RESPONSE_COMPLETE",
                m = "rweb/grok/GROK_RESPONSE_ERROR",
                p = "rweb/grok/GROK_RESPONSE_METADATA",
                P = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                f = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                y = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                K = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                k = "rweb/grok/GROK_RESPONSE_UPSELL",
                H = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                v = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                M = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                V = "rweb/grok/GROK_WEB_RESULTS",
                Z = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Y = "rweb/grok/ABORT_MESSAGE",
                x = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                j = "rweb/grok/FETCH_CONVERSATION_ID_START",
                z = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                B = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                W = "rweb/grok/EDITING_SET_ID",
                $ = "rweb/grok/EDITING_CLEAR",
                q = "rweb/grok/EDITING_COMMIT",
                J = "rweb/grok/RETRY_MESSAGE",
                X = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                Ee = "rweb/grok/SET_PREFERRED_PROMPTS",
                ae = "rweb/grok/SET_PROMPT_SOURCE",
                se = "rweb/grok/NEW_CONVERSATION",
                Se = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                oe = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                ie = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                ce = "rweb/grok/QUERY_TYPING",
                de = "rweb/grok/ADD_BANNER_MESSAGE",
                Re = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                ue = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                _e = "r/web/grok/SET_USING_EXPERIMENT",
                be = "r/web/grok/SET_PREFERRED_RESPONSE",
                Oe = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Te = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Ce = "rweb/grok/SET_REASONING_LAYOUT";
        },
        231817: (e, t, r) => {
            r.d(t, { LJ: () => w, UD: () => U, gQ: () => l, gw: () => N, n2: () => I, zU: () => h });
            var n = r(24949),
                E = r(697926),
                a = r(744531),
                s = r(226395),
                S = r(928233),
                o = r(499627),
                i = r(917799),
                c = r(312771),
                d = r(390387);
            const R = `${r(291020).Y}/dm_registered_devices`,
                u = `rweb/${R}`,
                _ = i.dg(u, "FETCH_REGISTERED_DEVICES"),
                b = i.dg(u, "DEREGISTER_DEVICE"),
                O = { fetchStatus: c.ZP.NONE, devices: {} };
            function T(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case _.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case _.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case _.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED, devices: (0, E.Z)(C(t.payload), (e) => e.registration_token) };
                    case b.SUCCESS:
                        return { ...e, devices: (0, a.Z)(e.devices, t.meta.registration_token) };
                    default:
                        return e;
                }
            }
            o.Z.register({ [R]: T });
            const C = (e) => e?.public_keys || [],
                A = (e) => e[R].devices,
                w = (0, n.P1)(A, (e) => Object.values(e).sort((e, t) => t.registration_ts - e.registration_ts)),
                I = (e, t) => A(e)[t],
                U = (e) => e[R].fetchStatus,
                N = (e) => (t, r) => (U(r()) === c.ZP.LOADED ? Promise.resolve() : t(g(e))),
                g =
                    (e) =>
                    (t, r, { api: n }) =>
                        i._O(t, { params: e, request: n.withEndpoint(s.Z).fetchEncryptedDMsPublicKeysAndDevices })({ actionTypes: _, context: "FETCH_SESSIONS" }),
                h =
                    (e) =>
                    (t, r, { api: n }) => {
                        const E = { registrationToken: e };
                        return i
                            ._O(t, { params: E, request: n.withEndpoint(s.Z).deregisterDevice })({ actionTypes: b, context: "DEREGISTER_DEVICE", meta: { registrationToken: e } })
                            .then(() => {
                                const e = d.x0(r());
                                t(g({ loggedInUserId: e }));
                            });
                    },
                l =
                    (e) =>
                    (e, t, { api: r }) =>
                        e(S.FM).then(() => {
                            const r = d.x0(t());
                            e(g({ loggedInUserId: r }));
                        });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => u, xQ: () => _ });
            var n = r(226395),
                E = r(499627),
                a = r(917799),
                s = r(312771),
                S = r(390387);
            const o = `${r(291020).Y}/user_preferences`,
                i = `rweb/${o}`,
                c = a.dg(i, "FETCH_USER_PREFERENCES"),
                d = { userPreferences: {}, error: null, fetchStatus: s.ZP.NONE };
            function R(e = d, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.REQUEST:
                        return { ...e, fetchStatus: s.ZP.LOADING };
                    case c.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                    case c.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: s.ZP.LOADED };
                    default:
                        return e;
                }
            }
            E.Z.register({ [o]: R });
            const u = (e) => e[o].userPreferences,
                _ = () => (e, t) => (t()[o].fetchStatus === s.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: r }) => {
                        const E = S.x0(t());
                        return a._O(e, { params: { userId: E }, request: r.withEndpoint(n.Z).fetchUserPreferences })({ actionTypes: c, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        643242: (e, t, r) => {
            r.d(t, { H: () => n });
            const n = r(667218).n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-8ed0fac5.1bb9eaaa.js.map
