"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-acb640be"],
    {
        661461: (e, t, r) => {
            r.d(t, { Nr: () => d, ug: () => R, yt: () => O });
            var n = r(759851),
                s = r(689048),
                E = r(499627),
                S = r(917799),
                o = r(312771),
                c = r(390387);
            const a = "availableLanguages",
                i = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                u = { fetchStatus: o.ZP.NONE, languages: [] };
            function _(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case i.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case i.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case i.SUCCESS: {
                        const { meta: r, payload: n } = t,
                            s = r?.lang ? r.lang : "en",
                            E = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(s),
                            S = E ? (e, t) => E.compare(e.name, t.name) : void 0;
                        return { ...e, languages: n?.slice().sort(S) || [], fetchStatus: o.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            E.Z.register({ [a]: _ });
            const d = (e) => e[a].languages,
                R = (e, t) => {
                    const r = (0, s.o)(t).toLowerCase(),
                        n = e[a].languages.find((e) => e.code === r);
                    return n?.name;
                },
                O = () => (e, t) => (t()[a].fetchStatus === o.ZP.LOADED ? Promise.resolve() : e(T())),
                T =
                    () =>
                    (e, t, { api: r }) =>
                        S._O(e, { request: r.withEndpoint(n.Z).fetchSupportedLanguages })({ actionTypes: i, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, c.VT)(t()) } });
        },
        576025: (e, t, r) => {
            r.d(t, { Lf: () => a, Po: () => u, _t: () => i });
            r(571372);
            var n = r(499627),
                s = r(312771);
            const E = "countryNames",
                S = { fetchStatus: s.ZP.NONE, countries: {} },
                o = { REQUEST: `${E}_REQUEST`, FAILURE: `${E}_FAILURE`, SUCCESS: `${E}_SUCCESS` },
                c = (e = S, t) => {
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
            n.Z.register({ [E]: c });
            const a = (e) => e[E].countries,
                i = (e, t) => {
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
            r.d(t, { H: () => S });
            var n = r(6157),
                s = r(917799),
                E = r(189953);
            const S =
                () =>
                (e, t, { api: r }) =>
                    s._O(e, { request: r.withEndpoint(n.Z).clearConversations, params: {} })({ actionTypes: E.Dh, context: "CLEAR_CONVERSATIONS", meta: {} });
        },
        189953: (e, t, r) => {
            r.d(t, { $t: () => Se, A0: () => Oe, BA: () => re, BS: () => D, CH: () => g, CR: () => q, Cr: () => N, DX: () => z, Dh: () => C, Dn: () => f, En: () => a, FF: () => Q, FV: () => m, Gy: () => w, HF: () => R, IK: () => s, JO: () => x, Jt: () => ne, KH: () => b, L0: () => W, Lc: () => S, OW: () => F, Oj: () => l, P9: () => B, Q_: () => E, Qg: () => H, Qh: () => J, Sv: () => o, TY: () => Z, Tv: () => Y, UN: () => P, VK: () => c, WK: () => te, Ws: () => i, Xg: () => $, Xi: () => y, Y8: () => u, Yb: () => I, Yf: () => n, Yx: () => _, ZN: () => j, _i: () => ce, ar: () => M, cA: () => Re, cw: () => Ee, dK: () => d, dO: () => U, dZ: () => G, dw: () => _e, f1: () => ue, fH: () => Ue, ip: () => v, j$: () => Te, lQ: () => ee, lh: () => O, lm: () => T, mq: () => Ce, my: () => h, nK: () => L, o$: () => k, px: () => oe, qd: () => V, ru: () => de, ub: () => p, vc: () => K, vi: () => A, wG: () => se, x5: () => X, yB: () => ie, z2: () => ae });
            const n = "grok",
                s = Object.freeze({ FUN: "fun", REGULAR: "" }),
                E = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                S = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                U = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                I = "rweb/grok/DELETE_CONVERSATION",
                A = "rweb/grok/RENAME_CONVERSATION",
                b = "rweb/grok/SET_ABORT_CONTROLLER",
                N = "rweb/grok/CLEAR_CONVERSATION",
                p = "rweb/grok/USER_SEND_MESSAGE",
                h = "rweb/grok/REGENERATE_RESPONSE",
                P = "rweb/grok/GROK_RESPONSE_TYPING",
                l = "rweb/grok/GROK_RESPONSE_POSTS",
                L = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                w = "rweb/grok/GROK_RESPONSE_COMPLETE",
                m = "rweb/grok/GROK_RESPONSE_ERROR",
                F = "rweb/grok/GROK_RESPONSE_METADATA",
                D = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                f = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                g = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                k = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                Z = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                H = "rweb/grok/GROK_RESPONSE_UPSELL",
                y = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                v = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                M = "rweb/grok/GROK_WEB_RESULTS",
                V = "rweb/grok/GROK_CITED_WEB_RESULTS",
                B = "rweb/grok/ABORT_MESSAGE",
                x = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                j = "rweb/grok/FETCH_CONVERSATION_ID_START",
                z = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                Y = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                q = "rweb/grok/EDITING_SET_ID",
                $ = "rweb/grok/EDITING_CLEAR",
                W = "rweb/grok/EDITING_COMMIT",
                X = "rweb/gqrok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                re = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                se = "rweb/grok/SET_PREFERRED_PROMPTS",
                Ee = "rweb/grok/SET_PROMPT_SOURCE",
                Se = "rweb/grok/NEW_CONVERSATION",
                oe = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                ae = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                ie = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                _e = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                de = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Re = "r/web/grok/SET_USING_EXPERIMENT",
                Oe = "r/web/grok/SET_PREFERRED_RESPONSE",
                Te = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Ce = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Ue = "rweb/grok/SET_REASONING_LAYOUT";
        },
        231817: (e, t, r) => {
            r.d(t, { LJ: () => A, UD: () => N, gQ: () => l, gw: () => p, n2: () => b, zU: () => P });
            var n = r(24949),
                s = r(697926),
                E = r(744531),
                S = r(226395),
                o = r(928233),
                c = r(499627),
                a = r(917799),
                i = r(312771),
                u = r(390387);
            const _ = `${r(291020).Y}/dm_registered_devices`,
                d = `rweb/${_}`,
                R = a.dg(d, "FETCH_REGISTERED_DEVICES"),
                O = a.dg(d, "DEREGISTER_DEVICE"),
                T = { fetchStatus: i.ZP.NONE, devices: {} };
            function C(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: i.ZP.LOADED, devices: (0, s.Z)(U(t.payload), (e) => e.registration_token) };
                    case O.SUCCESS:
                        return { ...e, devices: (0, E.Z)(e.devices, t.meta.registration_token) };
                    default:
                        return e;
                }
            }
            c.Z.register({ [_]: C });
            const U = (e) => e?.public_keys || [],
                I = (e) => e[_].devices,
                A = (0, n.P1)(I, (e) => Object.values(e).sort((e, t) => t.registration_ts - e.registration_ts)),
                b = (e, t) => I(e)[t],
                N = (e) => e[_].fetchStatus,
                p = (e) => (t, r) => (N(r()) === i.ZP.LOADED ? Promise.resolve() : t(h(e))),
                h =
                    (e) =>
                    (t, r, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(S.Z).fetchEncryptedDMsPublicKeysAndDevices })({ actionTypes: R, context: "FETCH_SESSIONS" }),
                P =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { registrationToken: e };
                        return a
                            ._O(t, { params: s, request: n.withEndpoint(S.Z).deregisterDevice })({ actionTypes: O, context: "DEREGISTER_DEVICE", meta: { registrationToken: e } })
                            .then(() => {
                                const e = u.x0(r());
                                t(h({ loggedInUserId: e }));
                            });
                    },
                l =
                    (e) =>
                    (e, t, { api: r }) =>
                        e(o.FM).then(() => {
                            const r = u.x0(t());
                            e(h({ loggedInUserId: r }));
                        });
        },
        715684: (e, t, r) => {
            r.d(t, { Fm: () => l, TG: () => A, UD: () => N, _1: () => P, dj: () => p, kz: () => b });
            var n = r(24949),
                s = r(697926),
                E = r(744531),
                S = r(226395),
                o = r(499627),
                c = r(917799),
                a = r(312771);
            const i = `${r(291020).Y}/sessions`,
                u = `rweb/${i}`,
                _ = c.dg(u, "FETCH_SESSIONS"),
                d = c.dg(u, "REVOKE_SESSION"),
                R = c.dg(u, "REVOKE_ALL_SESSIONS"),
                O = { fetchStatus: a.ZP.NONE, sessions: {} };
            function T(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case _.REQUEST:
                        return { ...e, fetchStatus: a.ZP.LOADING };
                    case _.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: a.ZP.FAILED };
                    case _.SUCCESS:
                        return { ...e, error: null, fetchStatus: a.ZP.LOADED, sessions: (0, s.Z)(U(t.payload), (e) => e.token) };
                    case d.SUCCESS:
                        return { ...e, sessions: (0, E.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            o.Z.register({ [i]: T });
            function C(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const U = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(C) : []),
                I = (e) => e[i].sessions,
                A = (0, n.P1)(I, (e) => Object.values(e)),
                b = (e, t) => I(e)[t],
                N = (e) => e[i].fetchStatus,
                p = (e) => (t, r) => (N(r()) === a.ZP.LOADED ? Promise.resolve() : t(h(e))),
                h =
                    (e) =>
                    (t, r, { api: n }) =>
                        c._O(t, { params: e, request: n.withEndpoint(S.Z).fetchSessions })({ actionTypes: _, context: "FETCH_SESSIONS" }),
                P =
                    (e) =>
                    (t, r, { api: n }) => {
                        const s = { hashed_token: e };
                        return c._O(t, { params: s, request: n.withEndpoint(S.Z).revokeSession })({ actionTypes: d, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                l =
                    (e) =>
                    (t, r, { api: n }) =>
                        c
                            ._O(t, { params: e, request: n.withEndpoint(S.Z).revokeAllSessions })({ actionTypes: R, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => h()(t, r, { api: n }));
        },
        948985: (e, t, r) => {
            r.d(t, { $q: () => I, UD: () => A, wz: () => b, zw: () => N });
            var n = r(24949),
                s = r(166852),
                E = r(226395),
                S = r(499627),
                o = r(917799),
                c = r(312771),
                a = r(56519),
                i = r(502909),
                u = r(600823);
            const _ = `${r(291020).Y}/applications`,
                d = `rweb/${_}`,
                R = o.dg(d, "FETCH_APPLICATIONS"),
                O = { fetchStatus: c.ZP.NONE };
            function T(e = O, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case R.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case R.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED };
                    default:
                        return e;
                }
            }
            S.Z.register({ [_]: T });
            const C = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === U.customActionTypes.revokeApplication.SUCCESS) {
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
                            if (t.type === U.customActionTypes.revokeOauth2Token.SUCCESS) {
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
                U = (0, i.ZP)({ namespace: "applications", customActions: C });
            (U.selectUniqUnrevokedApps = (0, n.P1)(U.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, s.Z)(t, (e) => e.app_id);
            })),
                (U.selectAppsById = (0, n.P1)(
                    U.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const I = u.Z.register(U),
                A = (e) => e[_].fetchStatus,
                b = (e) => (t, r) => (A(r()) === c.ZP.LOADED ? Promise.resolve() : t(p(e))),
                N =
                    (e, t, r) =>
                    (r, n, { api: s }) => {
                        const E = n();
                        return U.selectAppsById(E, e).length > 0 ? Promise.resolve() : r(p(t));
                    },
                p =
                    (e) =>
                    (t, r, { api: n }) =>
                        o._O(t, { params: e, request: n.withEndpoint(E.Z).fetchApplications })({ actionTypes: R, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, a.dP)(e.entities)];
                        });
        },
        818581: (e, t, r) => {
            r.d(t, { kQ: () => d, xQ: () => R });
            var n = r(226395),
                s = r(499627),
                E = r(917799),
                S = r(312771),
                o = r(390387);
            const c = `${r(291020).Y}/user_preferences`,
                a = `rweb/${c}`,
                i = E.dg(a, "FETCH_USER_PREFERENCES"),
                u = { userPreferences: {}, error: null, fetchStatus: S.ZP.NONE };
            function _(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case i.REQUEST:
                        return { ...e, fetchStatus: S.ZP.LOADING };
                    case i.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: S.ZP.FAILED };
                    case i.SUCCESS:
                        return { ...e, userPreferences: t.payload.user_preferences, error: null, fetchStatus: S.ZP.LOADED };
                    default:
                        return e;
                }
            }
            s.Z.register({ [c]: _ });
            const d = (e) => e[c].userPreferences,
                R = () => (e, t) => (t()[c].fetchStatus === S.ZP.LOADED ? Promise.resolve() : e(O())),
                O =
                    () =>
                    (e, t, { api: r }) => {
                        const s = o.x0(t());
                        return E._O(e, { params: { userId: s }, request: r.withEndpoint(n.Z).fetchUserPreferences })({ actionTypes: i, context: "FETCH_USER_PREFERENCES" });
                    };
        },
        365265: (e, t, r) => {
            r.d(t, { $B: () => C, F$: () => U, Ne: () => p, RC: () => N, VR: () => I, dF: () => b, h9: () => T, hu: () => P, pC: () => A, qB: () => h, tF: () => O, v1: () => l, xN: () => L });
            var n = r(372551),
                s = r(147595),
                E = r(499627),
                S = r(917799),
                o = r(312771);
            const c = "subscriptionPayments",
                a = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                i = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                R = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: o.ZP.NONE }, switchTier: { fetchStatus: o.ZP.NONE } };
            const O = (e, t) => {
                    const r = e[c].products[t];
                    return r?.fetchStatus || o.ZP.NONE;
                },
                T = (e, t) => {
                    const r = e[c].products[t];
                    return r?.details;
                },
                C = (e, t) => {
                    const r = e[c].checkoutUrls[t];
                    return r?.fetchStatus || o.ZP.NONE;
                },
                U = (e, t) => {
                    const r = e[c].checkoutUrls[t];
                    return r?.checkoutUrl;
                },
                I = (e) => e[c].productSubscriptions.fetchStatus,
                A = (e) => (e[c].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                b = (e) => {
                    const t = e[c].productSubscriptions.subscriptions || [];
                    return (0, s.R)(t);
                },
                N = (e) => {
                    const t = e[c].switchTier;
                    return t?.fetchStatus || o.ZP.NONE;
                },
                p =
                    (e) =>
                    (t, r, { api: s }) => {
                        const E = (0, S._O)(t, { params: { id: e }, request: s.withEndpoint(n.Z).fetchSubscriptionProductDetails }),
                            c = O(r(), e);
                        return c !== o.ZP.NONE && c !== o.ZP.FAILED ? Promise.resolve() : E({ actionTypes: i, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                h =
                    (e) =>
                    (t, r, { api: s }) => {
                        const E = (0, S._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: s.withEndpoint(n.Z).fetchSubscriptionProductCheckoutUrl }),
                            c = C(r(), e.id);
                        return c !== o.ZP.NONE && c !== o.ZP.FAILED ? Promise.resolve() : E({ actionTypes: u, context: a, meta: { id: e.id } });
                    },
                P =
                    (e) =>
                    (t, r, { api: s }) => {
                        const E = (0, S._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: s.withEndpoint(n.Z).fetchNotABotCheckoutUrl }),
                            c = C(r(), e.id);
                        return c !== o.ZP.NONE && c !== o.ZP.FAILED ? Promise.resolve() : E({ actionTypes: u, context: a, meta: { id: e.id } });
                    },
                l =
                    () =>
                    (e, t, { api: r }) => {
                        const s = (0, S._O)(e, { params: { fetchPrices: !1 }, request: r.withEndpoint(n.Z).fetchProductSubscriptions }),
                            E = I(t());
                        return E !== o.ZP.NONE && E !== o.ZP.FAILED ? Promise.resolve() : s({ actionTypes: _, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                L =
                    (e) =>
                    (t, r, { api: s }) => {
                        const E = (0, S._O)(t, { params: { price_id: e }, request: s.withEndpoint(n.Z).switchTier }),
                            c = N(r());
                        return c !== o.ZP.NONE && c !== o.ZP.FAILED ? Promise.resolve() : E({ actionTypes: d, context: "TIER_SWITCH" });
                    };
            E.Z.register({
                [c]: function (e = R, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.LOADING } } };
                        }
                        case i.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.LOADED, details: t.payload } } };
                        }
                        case i.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.FAILED, error: t.payload } } };
                        }
                        case u.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.LOADING } } };
                        }
                        case u.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case u.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.FAILED, error: t.payload } } };
                        }
                        case _.REQUEST:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.LOADED, subscriptions: t.payload } };
                        case _.FAILURE:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.FAILED, error: t.payload } };
                        case d.REQUEST:
                            return { ...e, switchTier: { fetchStatus: o.ZP.LOADING } };
                        case d.SUCCESS:
                            return { ...e, switchTier: { fetchStatus: o.ZP.LOADED } };
                        case d.FAILURE:
                            return { ...e, switchTier: { fetchStatus: o.ZP.FAILED } };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-acb640be.dd68a20a.js.map
