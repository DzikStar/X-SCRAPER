"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-e4e3d8bb"],
    {
        119754: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = () => n.e("ondemand.qrcode").then(n.t.bind(n, 374061, 19));
        },
        511473: (e, t, n) => {
            n.d(t, { rf: () => l, uJ: () => p });
            var r = n(674132),
                a = n.n(r),
                i = n(71620),
                o = n(389073),
                s = n(615656);
            const c = a().e4ff75aa,
                l = a().e4f6bd9e,
                d = { [o.Z.Offline]: c },
                p = (e, t, n) => {
                    let r;
                    const a = {
                        [s.ZP.AccessDeniedByBouncer]: {
                            customAction: (t) => {
                                (0, i.BJ)(t, { flow: e });
                            },
                        },
                    };
                    if (n) r = { ...a, customErrorHandler: ({ errors: [r] }) => (r.code === s.ZP.AccessDeniedByBouncer ? (0, i.BJ)(r, { flow: e }) : n(t || (r.code && d[r.code]) || l), []) };
                    else if (t) {
                        const e = { toast: { text: t } };
                        r = { [s.ZP.ValidationFailure]: e, [s.ZP.OnboardingFlowRetriableFailure]: e, [s.ZP.OnboardingFlowFailure]: e, defaultToast: { text: t }, showToast: !0, ...a };
                    } else r = { ...a, [o.Z.Offline]: { toast: { text: d[o.Z.Offline] } }, defaultToast: { text: l }, showToast: !0 };
                    return r;
                };
        },
        396987: (e, t, n) => {
            n.d(t, { QF: () => s, Qo: () => c, hZ: () => o });
            var r = n(918621);
            const a = "external_referer",
                i = 604800;
            function o(e) {
                return (0, r.ej)({ cookieName: a, featureSwitches: e });
            }
            function s(e, t) {
                const n = (t && t.encryptedReferralDetails) || "",
                    o = (t && t.encryptedReferer) || "",
                    s = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!n && !o && !s) return;
                const c = `${encodeURIComponent(o)}|${s}|${encodeURIComponent(n)}`;
                (0, r.d8)(a, c, { cookieOptions: { maxAge: i, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = o(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        553093: (e, t, n) => {
            n.d(t, { Sz: () => r });
            const r = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const n = t.join("");
                    return a(n, 0).toString();
                },
                a = (e, t) => {
                    const n = "string" == typeof e ? e : String(e);
                    let r = t;
                    for (let e = 0; e < n.length; e++) {
                        (r = (r << 5) - r + n.charCodeAt(e)), (r |= 0);
                    }
                    return r;
                };
        },
        221973: (e, t, n) => {
            n.d(t, { ZP: () => c });
            n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(875640);
            const r = Object.freeze({ enrollment: "enrollment", verification: "verification" }),
                a = (e) => {
                    const t = new Uint8Array(e);
                    let n = "";
                    return t.forEach((e) => (n += String.fromCharCode(e))), i(btoa(n));
                },
                i = (e) => e.replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, ""),
                o = (e) => {
                    const t = (n = e).replace(/-/g, "+").replace(/_/g, "/") + "====".substring(0, (4 - (n.length % 4)) % 4);
                    var n;
                    const r = window.atob(t);
                    return new Uint8Array(r.length).map((e, t) => r.charCodeAt(t)).buffer;
                },
                s = window.__CHALLENGE_2FA__;
            delete window.__CHALLENGE_2FA__;
            const c = (e, t) => {
                if (s) return Promise.resolve(s);
                const n = ((e, t) => {
                    if (t === r.enrollment) {
                        const t = { publicKey: { challenge: o(e.challenge), rp: e.rp, user: { ...e.user, id: o(e.user.id) }, pubKeyCredParams: e.pubKeyCredParams, attestation: e.attestation, excludeCredentials: e.excludeCredentials.map((e) => ({ ...e, id: o(e.id) })), extensions: e.extensions, timeout: 6e4, authenticatorSelection: { authenticatorAttachment: "cross-platform", userVerification: "discouraged" } } };
                        return () => navigator.credentials?.create(t) || Promise.resolve();
                    }
                    {
                        const { publicKeyCredentialRequestOptions: t } = e,
                            r = { publicKey: { rpId: "twitter.com", extensions: { appid: t.extensions.appid }, challenge: o(t.challenge), userVerification: "discouraged", timeout: 6e4, allowCredentials: ((n = t.allowCredentials), n.map((e) => ({ type: "public-key", id: o(e.id) }))) } };
                        return () => navigator.credentials?.get(r) || Promise.resolve();
                    }
                    var n;
                })(e, t);
                return n().then((e) => {
                    if (e)
                        return ((e, t) => {
                            const { id: n, response: i, type: o } = e;
                            let s;
                            return t === r.enrollment && i.attestationObject ? (s = { id: n, type: o, response: { clientDataJSON: a(i.clientDataJSON), attestationObject: a(i.attestationObject) }, clientExtensionResults: {} }) : t === r.verification && i.authenticatorData && (s = { id: n, type: o, response: { clientDataJSON: a(i.clientDataJSON), authenticatorData: a(i.authenticatorData), signature: a(i.signature), userHandle: "" }, clientExtensionResults: { appid: !0 } }), JSON.stringify(s || "");
                        })(e, t);
                });
            };
        },
        343018: (e, t, n) => {
            n.d(t, { n: () => r });
            const r = Object.freeze({ TopicFollowCount: "topic_follow_count" });
        },
        449850: (e, t, n) => {
            n.d(t, { Zk: () => a, lq: () => r });
            Object.freeze({ icon: "icon", bullet_icon: "bullet_icon", image: "image" });
            const r = Object.freeze({ headerTitle: "header_title", headerSubtitle: "header_subtitle", sectionTitle: "section_title", detailText: "detail" }),
                a = Object.freeze({ TOP: "top", CENTER: "center", BOTTOM: "bottom" });
        },
        730996: (e, t, n) => {
            n.d(t, { W: () => a, g: () => r });
            n(571372);
            const r = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function a(e) {
                switch (e) {
                    case "appealtweet":
                    case "limiteddiscoveryappealtweet":
                    case "profileonlydiscoveryappealtweet":
                    case "reportdmconversation":
                    case "hidetweet":
                    case "reportmoment":
                    case "removecommunitymember":
                    case "reporttweet":
                    case "reportlist":
                    case "reportprofile":
                    case "reportspace":
                    case "appealsuspension":
                    case "notification":
                        return e;
                    default:
                        throw new Error(`unexpected source ${e}`);
                }
            }
        },
        946108: (e, t, n) => {
            n.d(t, { m: () => r });
            n(202784);
            const r = Object.freeze({ TopicCategory: "topic_category", Topic: "topic" });
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => s, OQ: () => d, iW: () => l, xG: () => p, z_: () => c });
            n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(571372);
            var r = n(674132),
                a = n.n(r);
            function i(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = atob(t),
                    r = n.length,
                    a = new ArrayBuffer(r),
                    i = new Uint8Array(a);
                for (let e = 0; e < r; e++) i[e] = n.charCodeAt(e);
                return a;
            }
            function o(e) {
                const t = new Uint8Array(e),
                    n = String.fromCharCode(...t);
                return btoa(n).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const s = a().e4f6bd9e,
                c = a().ac966f94;
            function l() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function d(e) {
                const t = JSON.parse(e);
                return (
                    (t.challenge = i(t.challenge)),
                    (t.user.id = i(t.user.id)),
                    t.excludeCredentials.forEach((e) => {
                        e.id = i(e.id);
                    }),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.create({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: {}, id: e.id, response: { attestationObject: o(e.response.attestationObject), clientDataJSON: o(e.response.clientDataJSON) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
            function p(e) {
                const t = JSON.parse(e).publicKeyCredentialRequestOptions;
                return (
                    (t.challenge = i(t.challenge)),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.get({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: { appid: !0 }, id: e.id, response: { authenticatorData: o(e.response.authenticatorData), clientDataJSON: o(e.response.clientDataJSON), signature: o(e.response.signature), userHandle: o(e.response.userHandle) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
        },
        146361: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(118823),
                a = n(990350);
            const i = (0, r.YW)({ task: (e) => e.withEndpoint(a.Z).task });
        },
        996563: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(118823),
                a = n(447281);
            const i = (0, r.YW)({ task: (e) => e.withEndpoint(a.Z).task });
        },
        395042: (e, t, n) => {
            n.d(t, { El: () => d, HR: () => p, Zc: () => u });
            var r = n(226395),
                a = n(499627),
                i = n(917799);
            const o = "settings/usernames",
                s = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                c = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                l = { isLoaded: !1 };
            const d = (e) => e[o],
                p =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, i._O)(t, { params: e, request: a.withEndpoint(r.Z).usernameAvailable })({ actionTypes: c, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                u = (e) => ({ type: s, meta: e });
            a.Z.register({
                [o]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, isLoading: !0 };
                        case c.FAILURE:
                            return { ...e, isLoading: !1 };
                        case c.SUCCESS:
                            return { ...e, ...t.payload, username: t.meta.username, isLoading: !1 };
                        case s:
                            return { isLoading: !1, suggestions: t.meta?.persistSuggestions ? e.suggestions : void 0 };
                        default:
                            return e;
                    }
                },
            });
        },
        48498: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(644829),
                a = n(218951);
            const i = ({ flow_token: e, subtask_id: t }) => (0, a.Z)({ timelineId: `nux-user-recos-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchNUXUserRecommendations, getEndpointParams: (n) => ({ ...n, subtask_id: t, flow_token: e }) }, context: "FETCH_NUX_USER_RECOS", perfKey: "nux-user-recos" });
        },
        745888: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(360917),
                a = n.n(r),
                i = n(24949),
                o = n(716406),
                s = n(312771),
                c = n(502909),
                l = n(600823);
            const d = (e) => ({ valid: !0 });
            function p(e = {}) {
                const { localValidator: t = d, ...n } = e,
                    r = (0, c.ZP)({ customActions: { clear: { reducer: (e, t) => ({}) } }, ...n });
                (r.clear = () => (e) => e({ type: r.customActionTypes.clear.SUCCESS })),
                    (r.validate = (e, n) => (a) => {
                        const i = t(e, n);
                        return i.valid ? a(r.fetchOneIfNeeded(e, n)) : (a(r.add({ [e]: i })), Promise.resolve());
                    });
                return (
                    (r.selectEntitiesWithFetchStatus = (0, i.P1)(
                        r.selectAll,
                        (e) => r.selectState(e).fetchStatus || a(),
                        (e, t) =>
                            (0, o.Z)(t, (t, n) => {
                                const r = e[n] || {};
                                return { ...r, valid: !!r.valid || t === s.ZP.FAILED, isLoading: t === s.ZP.LOADING };
                            }),
                    )),
                    l.Z.register(r)
                );
            }
        },
        917920: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(251067),
                a = n(674132),
                i = n.n(a),
                o = n(335149),
                s = n(745888);
            const c = new RegExp("^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$"),
                l = i().hc72e1fc,
                d = i().bc0ad88a,
                p = (0, s.Z)({ namespace: "emailValidity", fetchOneContext: "FETCH_EMAIL_VALIDITY", fetchOneEndpoint: (e) => e.withEndpoint(o.Z).isEmailAvailable, fetchOneParams: ([e], t) => ({ email: e, ...t }), localValidator: (e) => (c.test(e) ? (!r.yV && /\+\d+@/.test(e) ? { errorMessage: d, valid: !1 } : { valid: !0 }) : { errorMessage: l, valid: !1 }) });
        },
        878137: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(674132),
                a = n.n(r),
                i = n(335149),
                o = n(71620),
                s = n(623109),
                c = n(745888);
            const l = a().d5568440,
                d = (0, c.Z)({
                    namespace: "passwordValidity",
                    fetchOneContext: "FETCH_PASSWORD_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(i.Z).fetchPasswordStrength,
                    fetchOneParams: ([e], t) => ({ password: e, ...t }),
                    localValidator: (e, t) => {
                        const n = !(!t || !t.username) && e === t.username,
                            r = e.length >= s.l,
                            a = e.length <= s.E;
                        let i = l;
                        return r ? a || (i = o.IM) : (i = o.px), { errorMessage: !n && r && a ? void 0 : i, valid: r && a && !n };
                    },
                });
        },
        580134: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(674132),
                a = n.n(r),
                i = n(335149),
                o = n(745888);
            const s = new RegExp("^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$"),
                c = a().cd24fe60,
                l = (0, o.Z)({
                    namespace: "phoneNumberValidity",
                    fetchOneContext: "FETCH_PHONE_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(i.Z).isPhoneNumberAvailable,
                    fetchOneParams: ([e], t) => ({ raw_phone_number: e, ...t }),
                    localValidator: (e) => {
                        const t = s.test(e);
                        return { errorMessage: c, valid: t };
                    },
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(553093),
                a = n(383675);
            const i = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: i } = t,
                    { cacheId: o, requestParams: s, timeline: c } = i || {};
                return c?.id ? (0, a.R)(c.id) : (0, a.Z)({ timelineId: o || `${e}${(0, r.Sz)(t)}`, endpointUrl: n, endpointParams: s || {} });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-e4e3d8bb.f850651a.js.map
