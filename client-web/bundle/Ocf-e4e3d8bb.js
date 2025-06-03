"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-e4e3d8bb"],
    {
        119754: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = () => r.e("ondemand.qrcode").then(r.t.bind(r, 374061, 19));
        },
        511473: (e, t, r) => {
            r.d(t, { rf: () => l, uJ: () => p });
            var n = r(111677),
                i = r.n(n),
                a = r(71620),
                o = r(389073),
                s = r(615656);
            const c = i().e4ff75aa,
                l = i().e4f6bd9e,
                d = { [o.Z.Offline]: c },
                p = (e, t, r) => {
                    let n;
                    const i = {
                        [s.ZP.AccessDeniedByBouncer]: {
                            customAction: (t) => {
                                (0, a.BJ)(t, { flow: e });
                            },
                        },
                    };
                    if (r) n = { ...i, customErrorHandler: ({ errors: [n] }) => (n.code === s.ZP.AccessDeniedByBouncer ? (0, a.BJ)(n, { flow: e }) : r(t || (n.code && d[n.code]) || l), []) };
                    else if (t) {
                        const e = { toast: { text: t } };
                        n = { [s.ZP.ValidationFailure]: e, [s.ZP.OnboardingFlowRetriableFailure]: e, [s.ZP.OnboardingFlowFailure]: e, defaultToast: { text: t }, showToast: !0, ...i };
                    } else n = { ...i, [o.Z.Offline]: { toast: { text: d[o.Z.Offline] } }, defaultToast: { text: l }, showToast: !0 };
                    return n;
                };
        },
        396987: (e, t, r) => {
            r.d(t, { QF: () => s, Qo: () => c, hZ: () => o });
            var n = r(918621);
            const i = "external_referer",
                a = 604800;
            function o(e) {
                return (0, n.ej)({ cookieName: i, featureSwitches: e });
            }
            function s(e, t) {
                const r = (t && t.encryptedReferralDetails) || "",
                    o = (t && t.encryptedReferer) || "",
                    s = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!r && !o && !s) return;
                const c = `${encodeURIComponent(o)}|${s}|${encodeURIComponent(r)}`;
                (0, n.d8)(i, c, { cookieOptions: { maxAge: a, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = o(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        553093: (e, t, r) => {
            r.d(t, { Sz: () => n });
            const n = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const r = t.join("");
                    return i(r, 0).toString();
                },
                i = (e, t) => {
                    const r = "string" == typeof e ? e : String(e);
                    let n = t;
                    for (let e = 0; e < r.length; e++) {
                        (n = (n << 5) - n + r.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        221973: (e, t, r) => {
            r.d(t, { ZP: () => c });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(875640);
            const n = Object.freeze({ enrollment: "enrollment", verification: "verification" }),
                i = (e) => {
                    const t = new Uint8Array(e);
                    let r = "";
                    return t.forEach((e) => (r += String.fromCharCode(e))), a(btoa(r));
                },
                a = (e) => e.replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, ""),
                o = (e) => {
                    const t = (r = e).replace(/-/g, "+").replace(/_/g, "/") + "====".substring(0, (4 - (r.length % 4)) % 4);
                    var r;
                    const n = window.atob(t);
                    return new Uint8Array(n.length).map((e, t) => n.charCodeAt(t)).buffer;
                },
                s = window.__CHALLENGE_2FA__;
            delete window.__CHALLENGE_2FA__;
            const c = (e, t) => {
                if (s) return Promise.resolve(s);
                const r = ((e, t) => {
                    if (t === n.enrollment) {
                        const t = { publicKey: { challenge: o(e.challenge), rp: e.rp, user: { ...e.user, id: o(e.user.id) }, pubKeyCredParams: e.pubKeyCredParams, attestation: e.attestation, excludeCredentials: e.excludeCredentials.map((e) => ({ ...e, id: o(e.id) })), extensions: e.extensions, timeout: 6e4, authenticatorSelection: { authenticatorAttachment: "cross-platform", userVerification: "discouraged" } } };
                        return () => navigator.credentials?.create(t) || Promise.resolve();
                    }
                    {
                        const { publicKeyCredentialRequestOptions: t } = e,
                            n = { publicKey: { rpId: "twitter.com", extensions: { appid: t.extensions.appid }, challenge: o(t.challenge), userVerification: "discouraged", timeout: 6e4, allowCredentials: ((r = t.allowCredentials), r.map((e) => ({ type: "public-key", id: o(e.id) }))) } };
                        return () => navigator.credentials?.get(n) || Promise.resolve();
                    }
                    var r;
                })(e, t);
                return r().then((e) => {
                    if (e)
                        return ((e, t) => {
                            const { id: r, response: a, type: o } = e;
                            let s;
                            return t === n.enrollment && a.attestationObject ? (s = { id: r, type: o, response: { clientDataJSON: i(a.clientDataJSON), attestationObject: i(a.attestationObject) }, clientExtensionResults: {} }) : t === n.verification && a.authenticatorData && (s = { id: r, type: o, response: { clientDataJSON: i(a.clientDataJSON), authenticatorData: i(a.authenticatorData), signature: i(a.signature), userHandle: "" }, clientExtensionResults: { appid: !0 } }), JSON.stringify(s || "");
                        })(e, t);
                });
            };
        },
        343018: (e, t, r) => {
            r.d(t, { n: () => n });
            const n = Object.freeze({ TopicFollowCount: "topic_follow_count" });
        },
        449850: (e, t, r) => {
            r.d(t, { Zk: () => i, lq: () => n });
            Object.freeze({ icon: "icon", bullet_icon: "bullet_icon", image: "image" });
            const n = Object.freeze({ headerTitle: "header_title", headerSubtitle: "header_subtitle", sectionTitle: "section_title", detailText: "detail" }),
                i = Object.freeze({ TOP: "top", CENTER: "center", BOTTOM: "bottom" });
        },
        730996: (e, t, r) => {
            r.d(t, { W: () => i, g: () => n });
            r(571372);
            const n = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
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
        946108: (e, t, r) => {
            r.d(t, { m: () => n });
            r(202784);
            const n = Object.freeze({ TopicCategory: "topic_category", Topic: "topic" });
        },
        158272: (e, t, r) => {
            r.d(t, { Kh: () => s, OQ: () => d, iW: () => l, xG: () => p, z_: () => c });
            r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(571372);
            var n = r(111677),
                i = r.n(n);
            function a(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    r = atob(t),
                    n = r.length,
                    i = new ArrayBuffer(n),
                    a = new Uint8Array(i);
                for (let e = 0; e < n; e++) a[e] = r.charCodeAt(e);
                return i;
            }
            function o(e) {
                const t = new Uint8Array(e),
                    r = String.fromCharCode(...t);
                return btoa(r).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const s = i().e4f6bd9e,
                c = i().ac966f94;
            function l() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function d(e) {
                const t = JSON.parse(e);
                return (
                    (t.challenge = a(t.challenge)),
                    (t.user.id = a(t.user.id)),
                    t.excludeCredentials.forEach((e) => {
                        e.id = a(e.id);
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
                    (t.challenge = a(t.challenge)),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.get({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: { appid: !0 }, id: e.id, response: { authenticatorData: o(e.response.authenticatorData), clientDataJSON: o(e.response.clientDataJSON), signature: o(e.response.signature), userHandle: o(e.response.userHandle) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
        },
        146361: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(118823),
                i = r(990350);
            const a = (0, n.YW)({ task: (e) => e.withEndpoint(i.Z).task });
        },
        996563: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(118823),
                i = r(447281);
            const a = (0, n.YW)({ task: (e) => e.withEndpoint(i.Z).task });
        },
        508765: (e, t, r) => {
            r.d(t, { C6: () => A, GJ: () => M, HR: () => C, Il: () => N, NJ: () => T, OG: () => H, T_: () => V, Xw: () => y, Ys: () => U, _D: () => O, b4: () => B, ck: () => F, g3: () => v, o8: () => Z, u$: () => I, vW: () => h });
            var n = r(226395),
                i = r(499627),
                a = r(917799),
                o = r(56519),
                s = r(497294);
            const c = `${r(291020).Y}/profile`,
                l = `rweb/${c}`,
                d = a.dg(l, "REMOVE_PROFILE_BANNER"),
                p = a.dg(l, "UPDATE_PROFILE"),
                E = a.dg(l, "UPDATE_PROFILE_AVATAR"),
                u = a.dg(l, "UPDATE_PROFILE_BANNER"),
                f = a.dg(l, "UPLOAD_MEDIA"),
                _ = Object.freeze({ REQUEST: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_FAILURE" }),
                w = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null };
            const A = (e) => e[c].avatarMediaId,
                h = (e) => e[c].bannerMediaId,
                I = (e) => e[c].profileSettings,
                S = "rweb/settings/profile/ADD_AVATAR_MEDIA",
                O = (e) => ({ meta: { mediaId: e }, type: S }),
                b = "rweb/settings/profile/REMOVE_AVATAR_MEDIA",
                y = (e) => ({ meta: { mediaId: e }, type: b }),
                R = "rweb/settings/profile/ADD_BANNER_MEDIA",
                T = (e) => ({ meta: { mediaId: e }, type: R }),
                P = "rweb/settings/profile/REMOVE_BANNER_MEDIA",
                C = (e) => ({ meta: { mediaId: e }, type: P }),
                N =
                    () =>
                    (e, t, { api: r }) =>
                        a._O(e, { request: r.withEndpoint(n.Z).fetchUserProfilePhoneState, params: {} })({ actionTypes: g, context: "ACTION_FETCH_VERIFIED_PHONE_LABEL" }, (e) => {
                            if (e) return e;
                        }),
                L = "rweb/settings/profile/PERSIST_PROFILE_SETTINGS",
                v = (e) => ({ meta: { profileSettings: e }, type: L }),
                D = "rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS",
                U = () => ({ type: D }),
                Z =
                    (e) =>
                    (t, r, { api: i }) =>
                        a._O(t, { params: e, request: i.withEndpoint(n.Z).removeProfileBanner })({ actionTypes: d, context: "ACTION_REMOVE_USER_BANNER" }, (e) => {
                            if (e) return [(0, o.dP)({ users: { [e.id_str]: { ...e, profile_banner_url: null } } })];
                        }),
                F =
                    (e) =>
                    (t, r, { api: i }) =>
                        a._O(t, { params: e, request: i.withEndpoint(n.Z).updateProfile })({ actionTypes: p, context: "ACTION_UPDATE_PROFILE_SETTINGS" }, (e) => {
                            if (e && e.entities) return [(0, o.dP)(e.entities)];
                        }),
                x =
                    (e, t, r) =>
                    (n) =>
                    (i, c, { api: l }) => {
                        i({ type: f.REQUEST });
                        const d = s.$i(n);
                        return i(d).then(
                            ([n]) => {
                                i([{ type: f.SUCCESS }, { type: e.REQUEST }]);
                                return a._O(i, { params: { media_id: n.uploadId }, request: r(l) })({ actionTypes: p, context: t }, (e) => {
                                    if (e) return [(0, o.dP)({ users: { [e.id_str]: e } })];
                                });
                            },
                            (e) => (i({ type: f.FAILURE }), Promise.reject(e)),
                        );
                    },
                B = x(E, "ACTION_UPDATE_USER_AVATAR", (e) => e.withEndpoint(n.Z).updateProfileAvatar),
                V = x(u, "ACTION_UPDATE_USER_BANNER", (e) => e.withEndpoint(n.Z).updateProfileBanner),
                H =
                    () =>
                    (e, t, { api: r }) =>
                        a._O(e, { request: r.withEndpoint(n.Z).enableVerifiedPhoneLabel, params: {} })({ actionTypes: _, context: "ACTION_ENABLE_VERIFIED_PHONE_LABEL" }),
                M =
                    () =>
                    (e, t, { api: r }) =>
                        a._O(e, { request: r.withEndpoint(n.Z).disableVerifiedPhoneLabel, params: {} })({ actionTypes: m, context: "ACTION_DISABLE_VERIFIED_PHONE_LABEL" });
            i.Z.register({
                [c]: function (e = w, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case S:
                            return { ...e, avatarMediaId: t.meta.mediaId };
                        case b:
                            return { ...e, avatarMediaId: null };
                        case R:
                            return { ...e, bannerMediaId: t.meta.mediaId };
                        case P:
                            return { ...e, bannerMediaId: null };
                        case g.SUCCESS:
                            return { ...e, hasVerifiedPhone: t?.payload?.user_phone_state?.has_verified_phone || !1, labelDisplayOptIn: t?.payload?.user_phone_state?.label_display_opt_in || !1 };
                        case L:
                            return { ...e, profileSettings: t.meta.profileSettings };
                        case D:
                            return { ...e, profileSettings: null };
                        case f.REQUEST:
                            return { ...e, isUploading: !0 };
                        case f.FAILURE:
                        case f.SUCCESS:
                            return { ...e, isUploading: !1 };
                        default:
                            return e;
                    }
                },
            });
        },
        383675: (e, t, r) => {
            r.d(t, { R: () => c, Z: () => s });
            var n = r(503768),
                i = r(644829),
                a = r(750085),
                o = r(218951);
            const s = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: r, timelineId: n }) => (0, o.Z)({ timelineId: n, isUserRefreshable: r, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchGeneric, getEndpointParams: ({ count: r, cursor: n }) => ({ ...e, cursor: "string" == typeof n ? n : void 0, count: r, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, o.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: r }) => ({ cursor: "string" == typeof r ? r : void 0, count: t, timelineId: e }) }, formatResponse: a.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        48498: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(644829),
                i = r(218951);
            const a = ({ flow_token: e, subtask_id: t }) => (0, i.Z)({ timelineId: `nux-user-recos-${t}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchNUXUserRecommendations, getEndpointParams: (r) => ({ ...r, subtask_id: t, flow_token: e }) }, context: "FETCH_NUX_USER_RECOS", perfKey: "nux-user-recos" });
        },
        745888: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(360917),
                i = r.n(n),
                a = r(24949),
                o = r(716406),
                s = r(312771),
                c = r(502909),
                l = r(600823);
            const d = (e) => ({ valid: !0 });
            function p(e = {}) {
                const { localValidator: t = d, ...r } = e,
                    n = (0, c.ZP)({ customActions: { clear: { reducer: (e, t) => ({}) } }, ...r });
                (n.clear = () => (e) => e({ type: n.customActionTypes.clear.SUCCESS })),
                    (n.validate = (e, r) => (i) => {
                        const a = t(e, r);
                        return a.valid ? i(n.fetchOneIfNeeded(e, r)) : (i(n.add({ [e]: a })), Promise.resolve());
                    });
                return (
                    (n.selectEntitiesWithFetchStatus = (0, a.P1)(
                        n.selectAll,
                        (e) => n.selectState(e).fetchStatus || i(),
                        (e, t) =>
                            (0, o.Z)(t, (t, r) => {
                                const n = e[r] || {};
                                return { ...n, valid: !!n.valid || t === s.ZP.FAILED, isLoading: t === s.ZP.LOADING };
                            }),
                    )),
                    l.Z.register(n)
                );
            }
        },
        917920: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(251067),
                i = r(111677),
                a = r.n(i),
                o = r(183118),
                s = r(745888);
            const c = new RegExp("^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$"),
                l = a().hc72e1fc,
                d = a().bc0ad88a,
                p = (0, s.Z)({ namespace: "emailValidity", fetchOneContext: "FETCH_EMAIL_VALIDITY", fetchOneEndpoint: (e) => e.withEndpoint(o.Z).isEmailAvailable, fetchOneParams: ([e], t) => ({ email: e, ...t }), localValidator: (e) => (c.test(e) ? (!n.yV && /\+\d+@/.test(e) ? { errorMessage: d, valid: !1 } : { valid: !0 }) : { errorMessage: l, valid: !1 }) });
        },
        878137: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(111677),
                i = r.n(n),
                a = r(183118),
                o = r(71620),
                s = r(623109),
                c = r(745888);
            const l = i().d5568440,
                d = (0, c.Z)({
                    namespace: "passwordValidity",
                    fetchOneContext: "FETCH_PASSWORD_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(a.Z).fetchPasswordStrength,
                    fetchOneParams: ([e], t) => ({ password: e, ...t }),
                    localValidator: (e, t) => {
                        const r = !(!t || !t.username) && e === t.username,
                            n = e.length >= s.l,
                            i = e.length <= s.E;
                        let a = l;
                        return n ? i || (a = o.IM) : (a = o.px), { errorMessage: !r && n && i ? void 0 : a, valid: n && i && !r };
                    },
                });
        },
        580134: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(111677),
                i = r.n(n),
                a = r(183118),
                o = r(745888);
            const s = new RegExp("^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$"),
                c = i().cd24fe60,
                l = (0, o.Z)({
                    namespace: "phoneNumberValidity",
                    fetchOneContext: "FETCH_PHONE_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(a.Z).isPhoneNumberAvailable,
                    fetchOneParams: ([e], t) => ({ raw_phone_number: e, ...t }),
                    localValidator: (e) => {
                        const t = s.test(e);
                        return { errorMessage: c, valid: t };
                    },
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-e4e3d8bb.271cecca.js.map
