(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.LoggedOutNotifications"],
    {
        474804: (e) => {
            e.exports = { queryId: "BqIHKmwZKtiUBPi07jKctg", operationName: "EnableLoggedOutWebNotifications", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        6613: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => p });
            var s = o(163889),
                r = o(414742),
                i = o(474804),
                n = o.n(i),
                a = o(503768);
            const c = (e, t) => {
                    const o = t?.enable_logged_out_web_notifications;
                    return o || (0, s.ZP)("GQL LoggedOutNotifications: Failed to execute EnableLoggedOutWebNotifications", { extra: (0, a.dL)(e) }), (0, r.jB)(e);
                },
                p = ({ apiClient: e, featureSwitches: t }) => ({ enableLoggedOutWebNotifications: (t) => e.graphQL(n(), t, c) });
        },
        922481: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { PromptStatus: () => g, SET_PROMPT_STATUS: () => m, default: () => y, fetchLoggedOutNotificationsDataTypes: () => f, loadLoggedOutNotificationData: () => I, pushSubscribeLoggedOut: () => K, resetLoggedOutNotificationState: () => v, selectArkosePromptStatus: () => w, selectBrowserPromptStatus: () => h, selectFetchStatus: () => k, selectInAppPromptStatus: () => N, selectIsEligibleForPushPrompt: () => U, selectLastSeenTimeStamp: () => A, selectPushNotificationsPromptIsSeen: () => L, setLastSeenTimeStamp: () => _, setPromptStatus: () => P, updatePromptStatus: () => C, verifyArkoseTokenAndSavePushToken: () => R, verifyArkoseTokenAndSavePushTokenActionTypes: () => T });
            o(571372);
            var s = o(6613),
                r = o(689048),
                i = o(258427),
                n = o(499627),
                a = o(917799),
                c = o(312771),
                p = o(390387),
                u = (o(543673), o(240753), o(128399), o(688715));
            const S = (0, u.ju)("https://x.com");
            const E = "loggedOutNotifications",
                l = "rweb.loggedOutNotifications",
                m = "rweb/loggedOutNotifications/SET_PROMPT_STATUS",
                d = "rweb/loggedOutNotifications/SET_LAST_SEEN_TIMESTAMP",
                g = Object.freeze({ DISMISSED: "dismissed", APPROVED: "approved", NOT_SEEN: "not_seen", SEEN: "seen" }),
                f = Object.freeze({ REQUEST: "rweb/loggedOutNotifications/FETCH_REQUEST", SUCCESS: "rweb/loggedOutNotifications/FETCH_SUCCESS", FAILURE: "rweb/loggedOutNotifications/FETCH_FAILURE" }),
                T = Object.freeze({ REQUEST: "rweb/loggedOutNotifications/SAVE_PUSH_TOKEN_REQUEST", SUCCESS: "rweb/loggedOutNotifications/SAVE_PUSH_TOKEN_SUCCESS", FAILURE: "rweb/loggedOutNotifications/SAVE_PUSH_TOKEN_FAILURE" }),
                P = (e, t) => ({ type: m, payload: { promptType: e, promptStatus: t } }),
                _ = () => ({ type: d }),
                b = { inAppPrompt: g.NOT_SEEN, browserPrompt: g.NOT_SEEN, arkosePrompt: g.NOT_SEEN, fetchStatus: c.ZP.NONE };
            function y(e = b, t) {
                if (!t) return e;
                switch (t.type) {
                    case f.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case f.FAILURE:
                        return { ...e, fetchStatus: c.ZP.FAILED };
                    case f.SUCCESS:
                        return { ...e, ...t.payload, fetchStatus: c.ZP.LOADED };
                    case m:
                        if (t.payload) return { ...e, [t.payload.promptType]: t.payload.promptStatus };
                        break;
                    case d:
                        return { ...e, lastSeenTimestamp: Date.now() };
                    default:
                        return e;
                }
                return e;
            }
            const O = (e) => ({ type: f.SUCCESS, payload: e }),
                N = (e) => e[E].inAppPrompt,
                h = (e) => e[E].browserPrompt,
                w = (e) => e[E].arkosePrompt,
                A = (e) => e[E].lastSeenTimestamp,
                k = (e) => e[E].fetchStatus,
                L = (e) => N(e) !== g.NOT_SEEN,
                U = (e) => !L(e),
                I =
                    () =>
                    (e, t, { devicePersistence: o, featureSwitches: s }) =>
                        k(t()) === c.ZP.LOADED
                            ? Promise.resolve()
                            : (e({ type: f.REQUEST }),
                              o
                                  .get(l)
                                  .then((t) =>
                                      t?.lastSeenTimestamp &&
                                      (function ({ browserPrompt: e, featureSwitches: t, lastSeenTimestamp: o }) {
                                          if (e !== g.APPROVED && "denied" !== i.qO()) {
                                              const e = t.getNumberValue("responsive_web_logged_out_notifications_fatigue_days_count", 7);
                                              return Date.now() - o > 864e5 * e;
                                          }
                                          return !1;
                                      })({ featureSwitches: s, lastSeenTimestamp: t.lastSeenTimestamp, browserPrompt: t.browserPrompt })
                                          ? e(O(b))
                                          : e(O(t)),
                                  )
                                  .catch(() => e({ type: f.FAILURE }))),
                v = () => (e, t) => e(O(b)),
                C =
                    (e, t) =>
                    (o, s, { devicePersistence: r }) => {
                        const i = { ...s()[E], [e]: t };
                        return r.set(l, i).then(() => {
                            "inAppPrompt" === e && t === g.SEEN && o(_()), o(P(e, t));
                        });
                    },
                K =
                    () =>
                    (e, t, { api: o, featureSwitches: s, scribe: r }) => {
                        const n = "default" === i.qO(),
                            a = { page: "app", section: "permissions", component: "lo_notifications" },
                            c = (e) => {
                                n && r.log({ ...a, action: e });
                            };
                        return (
                            c("impression"),
                            i.pI(!0).then(
                                (t) => (c("permissions_granted"), e(C("browserPrompt", g.APPROVED)), Promise.resolve(!0)),
                                (t) => ("denied" === i.qO() ? (c("permissions_denied"), e(C("browserPrompt", g.DISMISSED)), Promise.resolve(!1)) : (c("permissions_error"), e(C("browserPrompt", g.SEEN)), Promise.resolve(!1))),
                            )
                        );
                    },
                R =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { accessToken: c, publicKey: u } = (function (e) {
                            const t = new URL(e, S).searchParams.get("access_token")?.split("|");
                            if (!t) return {};
                            const o = (t.filter((e) => e.match("pk="))[0] || "").slice(3),
                                s = t.filter((e) => e.match("r="))[0] || "";
                            return { accessToken: s ? `${t[0]}|${s}` : t[0], publicKey: o };
                        })(e);
                        if (!c || !u) return Promise.reject(new Error("loggedOutNotifications#verifyArkoseTokenAndSavePushToken: unable to decode arkose link"));
                        return i.pI(!1).then(
                            (e) => {
                                const S = o(),
                                    E = (0, p.VT)(S),
                                    l = (0, r.o)(E),
                                    { os_version: m = "" } = i.lX(),
                                    {
                                        encryptionKey1: d,
                                        encryptionKey2: g,
                                        pushFcmToken: f,
                                    } = (function (e) {
                                        const t = { pushFcmToken: e.endpoint, encryptionKey1: "", encryptionKey2: "" };
                                        return e.keys && ((t.encryptionKey1 = e.keys.p256dh), (t.encryptionKey2 = e.keys.auth)), t;
                                    })(e),
                                    P = { locale: l, accessToken: c, publicKey: u, language: E, osVersion: m, encryptionKey1: d, encryptionKey2: g, pushFcmToken: f };
                                return a.AB(t, { params: P, request: n.withEndpoint(s.Z).enableLoggedOutWebNotifications })({ actionTypes: T, context: "SAVE_PUSH_TOKEN", meta: P });
                            },
                            (e) => Promise.reject(e),
                        );
                    };
            n.Z.register({ [E]: y });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.LoggedOutNotifications.b605cc7a.js.map
