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
            var r = n(111677),
                i = n.n(r),
                o = n(71620),
                a = n(389073),
                s = n(615656);
            const c = i().e4ff75aa,
                l = i().e4f6bd9e,
                d = { [a.Z.Offline]: c },
                p = (e, t, n) => {
                    let r;
                    const i = {
                        [s.ZP.AccessDeniedByBouncer]: {
                            customAction: (t) => {
                                (0, o.BJ)(t, { flow: e });
                            },
                        },
                    };
                    if (n) r = { ...i, customErrorHandler: ({ errors: [r] }) => (r.code === s.ZP.AccessDeniedByBouncer ? (0, o.BJ)(r, { flow: e }) : n(t || (r.code && d[r.code]) || l), []) };
                    else if (t) {
                        const e = { toast: { text: t } };
                        r = { [s.ZP.ValidationFailure]: e, [s.ZP.OnboardingFlowRetriableFailure]: e, [s.ZP.OnboardingFlowFailure]: e, defaultToast: { text: t }, showToast: !0, ...i };
                    } else r = { ...i, [a.Z.Offline]: { toast: { text: d[a.Z.Offline] } }, defaultToast: { text: l }, showToast: !0 };
                    return r;
                };
        },
        396987: (e, t, n) => {
            n.d(t, { QF: () => s, Qo: () => c, hZ: () => a });
            var r = n(918621);
            const i = "external_referer",
                o = 604800;
            function a(e) {
                return (0, r.ej)({ cookieName: i, featureSwitches: e });
            }
            function s(e, t) {
                const n = (t && t.encryptedReferralDetails) || "",
                    a = (t && t.encryptedReferer) || "",
                    s = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!n && !a && !s) return;
                const c = `${encodeURIComponent(a)}|${s}|${encodeURIComponent(n)}`;
                (0, r.d8)(i, c, { cookieOptions: { maxAge: o, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = a(e);
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
                    return i(n, 0).toString();
                },
                i = (e, t) => {
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
                i = (e) => {
                    const t = new Uint8Array(e);
                    let n = "";
                    return t.forEach((e) => (n += String.fromCharCode(e))), o(btoa(n));
                },
                o = (e) => e.replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, ""),
                a = (e) => {
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
                        const t = { publicKey: { challenge: a(e.challenge), rp: e.rp, user: { ...e.user, id: a(e.user.id) }, pubKeyCredParams: e.pubKeyCredParams, attestation: e.attestation, excludeCredentials: e.excludeCredentials.map((e) => ({ ...e, id: a(e.id) })), extensions: e.extensions, timeout: 6e4, authenticatorSelection: { authenticatorAttachment: "cross-platform", userVerification: "discouraged" } } };
                        return () => navigator.credentials?.create(t) || Promise.resolve();
                    }
                    {
                        const { publicKeyCredentialRequestOptions: t } = e,
                            r = { publicKey: { rpId: t.rpId, extensions: { appid: t.extensions.appid }, challenge: a(t.challenge), userVerification: "discouraged", timeout: 6e4, allowCredentials: ((n = t.allowCredentials), n.map((e) => ({ type: "public-key", id: a(e.id) }))) } };
                        return () => navigator.credentials?.get(r) || Promise.resolve();
                    }
                    var n;
                })(e, t);
                return n().then((e) => {
                    if (e)
                        return ((e, t) => {
                            const { id: n, response: o, type: a } = e;
                            let s;
                            return t === r.enrollment && o.attestationObject ? (s = { id: n, type: a, response: { clientDataJSON: i(o.clientDataJSON), attestationObject: i(o.attestationObject) }, clientExtensionResults: {} }) : t === r.verification && o.authenticatorData && (s = { id: n, type: a, response: { clientDataJSON: i(o.clientDataJSON), authenticatorData: i(o.authenticatorData), signature: i(o.signature), userHandle: "" }, clientExtensionResults: { appid: !0 } }), JSON.stringify(s || "");
                        })(e, t);
                });
            };
        },
        343018: (e, t, n) => {
            n.d(t, { n: () => r });
            const r = Object.freeze({ TopicFollowCount: "topic_follow_count" });
        },
        449850: (e, t, n) => {
            n.d(t, { Zk: () => i, lq: () => r });
            Object.freeze({ icon: "icon", bullet_icon: "bullet_icon", image: "image" });
            const r = Object.freeze({ headerTitle: "header_title", headerSubtitle: "header_subtitle", sectionTitle: "section_title", detailText: "detail" }),
                i = Object.freeze({ TOP: "top", CENTER: "center", BOTTOM: "bottom" });
        },
        730996: (e, t, n) => {
            n.d(t, { W: () => i, g: () => r });
            n(571372);
            const r = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function i(e) {
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
            var r = n(111677),
                i = n.n(r);
            function o(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = atob(t),
                    r = n.length,
                    i = new ArrayBuffer(r),
                    o = new Uint8Array(i);
                for (let e = 0; e < r; e++) o[e] = n.charCodeAt(e);
                return i;
            }
            function a(e) {
                const t = new Uint8Array(e),
                    n = String.fromCharCode(...t);
                return btoa(n).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const s = i().e4f6bd9e,
                c = i().ac966f94;
            function l() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function d(e) {
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
            function p(e) {
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
        146361: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(118823),
                i = n(990350);
            const o = (0, r.YW)({ task: (e) => e.withEndpoint(i.Z).task });
        },
        996563: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(118823),
                i = n(447281);
            const o = (0, r.YW)({ task: (e) => e.withEndpoint(i.Z).task });
        },
        395042: (e, t, n) => {
            n.d(t, { El: () => d, HR: () => p, Zc: () => u });
            var r = n(226395),
                i = n(499627),
                o = n(917799);
            const a = "settings/usernames",
                s = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                c = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                l = { isLoaded: !1 };
            const d = (e) => e[a],
                p =
                    (e) =>
                    (t, n, { api: i }) =>
                        (0, o._O)(t, { params: e, request: i.withEndpoint(r.Z).usernameAvailable })({ actionTypes: c, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                u = (e) => ({ type: s, meta: e });
            i.Z.register({
                [a]: function (e = l, t) {
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
        383675: (e, t, n) => {
            n.d(t, { R: () => c, Z: () => s });
            var r = n(503768),
                i = n(644829),
                o = n(750085),
                a = n(218951);
            const s = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: r }) => (0, a.Z)({ timelineId: r, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: r }) => ({ ...e, cursor: "string" == typeof r ? r : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, a.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: o.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        48498: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(644829),
                i = n(218951);
            const o = ({ flow_token: e, subtask_id: t }) => (0, i.Z)({ timelineId: `nux-user-recos-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchNUXUserRecommendations, getEndpointParams: (n) => ({ ...n, subtask_id: t, flow_token: e }) }, context: "FETCH_NUX_USER_RECOS", perfKey: "nux-user-recos" });
        },
        745888: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(360917),
                i = n.n(r),
                o = n(24949),
                a = n(716406),
                s = n(312771),
                c = n(502909),
                l = n(600823);
            const d = (e) => ({ valid: !0 });
            function p(e = {}) {
                const { localValidator: t = d, ...n } = e,
                    r = (0, c.ZP)({ customActions: { clear: { reducer: (e, t) => ({}) } }, ...n });
                (r.clear = () => (e) => e({ type: r.customActionTypes.clear.SUCCESS })),
                    (r.validate = (e, n) => (i) => {
                        const o = t(e, n);
                        return o.valid ? i(r.fetchOneIfNeeded(e, n)) : (i(r.add({ [e]: o })), Promise.resolve());
                    });
                return (
                    (r.selectEntitiesWithFetchStatus = (0, o.P1)(
                        r.selectAll,
                        (e) => r.selectState(e).fetchStatus || i(),
                        (e, t) =>
                            (0, a.Z)(t, (t, n) => {
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
                i = n(111677),
                o = n.n(i),
                a = n(335149),
                s = n(745888);
            const c = new RegExp("^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$"),
                l = o().hc72e1fc,
                d = o().bc0ad88a,
                p = (0, s.Z)({ namespace: "emailValidity", fetchOneContext: "FETCH_EMAIL_VALIDITY", fetchOneEndpoint: (e) => e.withEndpoint(a.Z).isEmailAvailable, fetchOneParams: ([e], t) => ({ email: e, ...t }), localValidator: (e) => (c.test(e) ? (!r.yV && /\+\d+@/.test(e) ? { errorMessage: d, valid: !1 } : { valid: !0 }) : { errorMessage: l, valid: !1 }) });
        },
        878137: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(111677),
                i = n.n(r),
                o = n(335149),
                a = n(71620),
                s = n(623109),
                c = n(745888);
            const l = i().d5568440,
                d = (0, c.Z)({
                    namespace: "passwordValidity",
                    fetchOneContext: "FETCH_PASSWORD_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(o.Z).fetchPasswordStrength,
                    fetchOneParams: ([e], t) => ({ password: e, ...t }),
                    localValidator: (e, t) => {
                        const n = !(!t || !t.username) && e === t.username,
                            r = e.length >= s.l,
                            i = e.length <= s.E;
                        let o = l;
                        return r ? i || (o = a.IM) : (o = a.px), { errorMessage: !n && r && i ? void 0 : o, valid: r && i && !n };
                    },
                });
        },
        580134: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(111677),
                i = n.n(r),
                o = n(335149),
                a = n(745888);
            const s = new RegExp("^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$"),
                c = i().cd24fe60,
                l = (0, a.Z)({
                    namespace: "phoneNumberValidity",
                    fetchOneContext: "FETCH_PHONE_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(o.Z).isPhoneNumberAvailable,
                    fetchOneParams: ([e], t) => ({ raw_phone_number: e, ...t }),
                    localValidator: (e) => {
                        const t = s.test(e);
                        return { errorMessage: c, valid: t };
                    },
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(553093),
                i = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: a, requestParams: s, timeline: c } = o || {};
                return c?.id ? (0, i.R)(c.id) : (0, i.Z)({ timelineId: a || `${e}${(0, r.Sz)(t)}`, endpointUrl: n, endpointParams: s || {} });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-e4e3d8bb.3bf64f0a.js.map
