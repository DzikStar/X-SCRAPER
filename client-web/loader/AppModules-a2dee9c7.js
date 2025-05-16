(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-a2dee9c7"],
    {
        396355: (e) => {
            e.exports = { queryId: "TYpVV9QioZfViHqEqRZxJA", operationName: "BrowseSpaceTopics", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        328777: (e) => {
            e.exports = { queryId: "BqIHKmwZKtiUBPi07jKctg", operationName: "EnableLoggedOutWebNotifications", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        110669: (e) => {
            e.exports = { queryId: "V8-RP7SxlI4qzRmpCmEqgw", operationName: "ListProductSubscriptions", operationType: "query", metadata: { featureSwitches: ["subscriptions_management_fetch_next_billing_time", "subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        551445: (e) => {
            e.exports = { queryId: "RM4x9h3tF8bCn69VV3-gRg", operationName: "NotABotCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        587719: (e) => {
            e.exports = { queryId: "Sxn4YOlaAwEKjnjWV0h7Mw", operationName: "SubscribeToScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        525552: (e) => {
            e.exports = { queryId: "-kH-xt82ZhKnAMTXv1Fuzg", operationName: "SubscriptionCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        57068: (e) => {
            e.exports = { queryId: "yIGOH-WMQSU-AdbfVRZm9A", operationName: "SubscriptionProductDetails", operationType: "query", metadata: { featureSwitches: ["subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        554034: (e) => {
            e.exports = { queryId: "NEMw3cw4v0-Oo-nTMI8reQ", operationName: "SwitchTier", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        336271: (e) => {
            e.exports = { queryId: "Zevhh76Msw574ZSs2NQHGQ", operationName: "UnsubscribeFromScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        326439: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o,
                s,
                i,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (o = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (a = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: o,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    s,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            i,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    a,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            l.hash = "47444c8ec7640b723fc59a35b0544d70";
            const c = l;
        },
        498510: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o,
                s,
                i,
                a,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (o = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (s = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (a = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [o, { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            l.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const c = l;
        },
        882127: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var o = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const s = o;
        },
        446914: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                updateSubscriptions(t, n) {
                    const { sessionId: o, toSubscribe: s, toUnsubscribe: i } = t,
                        a = { sub_topics: s.join(","), unsub_topics: i.join(",") },
                        r = { ...n, "LivePipeline-Session": o };
                    return e.post("live_pipeline/update_subscriptions", a, {}, r, "");
                },
            });
        },
        6613: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var o = n(163889),
                s = n(414742),
                i = n(328777),
                a = n.n(i),
                r = n(503768);
            const l = (e, t) => {
                    const n = t?.enable_logged_out_web_notifications;
                    return n || (0, o.ZP)("GQL LoggedOutNotifications: Failed to execute EnableLoggedOutWebNotifications", { extra: (0, r.dL)(e) }), (0, s.jB)(e);
                },
                c = ({ apiClient: e, featureSwitches: t }) => ({ enableLoggedOutWebNotifications: (t) => e.graphQL(a(), t, l) });
        },
        904940: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, n) => e.post("media/metadata/create", t, {}, { ...n, "content-type": "application/json" }), attachSubtitles: (t, n) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...n, "content-type": "application/json" }) });
        },
        372551: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var o = n(110669),
                s = n.n(o),
                i = n(551445),
                a = n.n(i),
                r = n(525552),
                l = n.n(r),
                c = n(57068),
                u = n.n(c),
                d = n(554034),
                p = n.n(d);
            const m = ({ apiClient: e, featureSwitches: t }) => ({ fetchSubscriptionProductDetails: (t) => e.graphQL(u(), t).then((e) => e.web_subscription_product_details), fetchSubscriptionProductCheckoutUrl: (t) => e.graphQL(l(), t).then((e) => e.subscriptioncheckoutsession_create_for_blue?.session_url), fetchNotABotCheckoutUrl: (t) => e.graphQL(a(), t).then((e) => e.subscriptioncheckoutsession_create_for_not_a_bot?.session_url), fetchProductSubscriptions: (t) => e.graphQL(s(), t).then((e) => e.viewer_v2?.list_product_subscriptions), switchTier: (t) => e.graphQL(p(), t).then((e) => e) });
        },
        708482: (e, t, n) => {
            "use strict";
            n.d(t, { s: () => i });
            var o = n(10622),
                s = n.n(o);
            function i(e, t, n, o) {
                return s()(e, t, n, o ? { networkCacheConfig: { metadata: { isFatalError: o } } } : void 0).toPromise();
            }
        },
        142324: (e, t, n) => {
            "use strict";
            n.d(t, { q: () => P });
            var o = n(202784),
                s = n(154003),
                i = n(522450),
                a = n(666536),
                r = n(443781),
                l = n(325686),
                c = n(370006),
                u = n(138099),
                d = n(786998),
                p = n(143670),
                m = n(392237),
                h = n(939419),
                g = n(466818),
                b = n(855488),
                f = n(242454),
                _ = n(40610),
                w = n(323265),
                y = n(782642),
                S = n(125363);
            const k = [
                { label: "New bug / triage", value: "new_bug" },
                { label: "QA regression", value: "qa_regression" },
                { label: "Ads", value: "ads" },
                { label: "Security", value: "security" },
                { label: "Timelines", value: "timelines" },
                { label: "UI", value: "ui" },
                { label: "Video", value: "video" },
                { label: "Other", value: "other" },
            ];
            function v({ onClose: e }) {
                const { featureSwitches: t, viewerUserId: n } = o.useContext(r.rC),
                    s = (0, S.oR)(),
                    i = (0, y.p)(),
                    [a, l] = o.useState(k[0]),
                    [c, u] = o.useState(""),
                    [d, p] = o.useState(""),
                    [m, h] = o.useState(""),
                    v = w.ZP.browserString(),
                    E = w.ZP.getBrowserTagVersion(v),
                    A = w.ZP.osString(),
                    P = w.ZP.userAgent,
                    C = `${v}, ${E}. ${A} \n\n${P}.`;
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(g.ZP, { label: "Where did we go wrong?", onChange: (e, t) => l(k[t]), options: k, value: a.value }),
                    o.createElement(b.Z, { label: "Summary", multiline: !0, name: "summary", onChange: (e) => u(e.target.value), style: x.formTextInput, value: c }),
                    o.createElement(b.Z, { label: "Expected result (optional)", multiline: !0, name: "expected", onChange: (e) => p(e.target.value), style: x.formTextInput, value: d }),
                    o.createElement(b.Z, { label: "Actual result (optional)", multiline: !0, name: "actual", onChange: (e) => h(e.target.value), style: x.formTextInput, value: m }),
                    o.createElement(f.Z, {
                        color: "primary",
                        disabled: !c.length,
                        label: "Submit",
                        onPress: function () {
                            const o = `Bug report: ${a.label}`;
                            let r = `Summary:%0A${c}%0A%0A`;
                            d.length && (r += `Expected:%0A${d}%0A%0A`), m.length && (r += `Actual:%0A${m}%0A%0A`), (r += `User agent:%0A${P}%0A%0A`);
                            const l = s.getState(),
                                u = JSON.stringify({ entities: l.entities, featureSwitch: { customOverrides: { ...l.featureSwitch.customOverrides }, user: { ...l.featureSwitch.user } }, multiAccount: l.multiAccount, ocf: l.ocf, pinnedTimelines: l.pinnedTimelines, tweetComposer: l.tweetComposer, urt: l.urt }),
                                p = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-${Date.now()}.json`;
                            fetch(p, { body: u, credentials: "include", method: "POST" })
                                .then(() => {
                                    const n = t.getStringValue("rweb_debugger_bug_report_email", "");
                                    (r += `Application state:%0A${p}`), window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${n}&su=${o}&body=${r}`, "_blank"), e();
                                })
                                .catch(() => {
                                    i({ text: "Failed to upload data. Please try again" });
                                });
                        },
                    }),
                    o.createElement(_.Z.Primary, { headline: "Device information", text: C, withIcon: !0 }),
                );
            }
            const x = m.default.create((e) => ({ formTextInput: { paddingHorizontal: 0, paddingVertical: 0 } }));
            function E({ onClose: e }) {
                const [t, n] = o.useState("home"),
                    s = "home" === t ? "Debug" : "Report a bug",
                    i =
                        "home" === t
                            ? o.createElement(c.Z, {
                                  backButtonType: "close",
                                  onClick: function () {
                                      e(), n("home");
                                  },
                              })
                            : o.createElement(c.Z, {
                                  backButtonType: "back",
                                  onClick: function () {
                                      n("home");
                                  },
                              });
                return o.createElement(u.Z, { onMaskClick: e, type: "bottom", withMask: !0, withNativeMaskColor: !0 }, o.createElement(d.Z, { leftControl: i, title: s, withGutter: !0 }), o.createElement(l.Z, { style: A.container }, "home" === t && o.createElement(p.Z, { Icon: h.default, actionText: "Report a bug", onClick: () => n("report-bug") }), "report-bug" === t && o.createElement(v, { onClose: e })));
            }
            const A = m.default.create((e) => ({ container: { padding: e.spaces.space16, gap: e.spaces.space8 } }));
            function P({ initialX: e = 8, initialY: t = 200 }) {
                const { featureSwitches: n } = o.useContext(r.rC),
                    [l, c] = o.useState(!1),
                    [u, d] = o.useState(!1),
                    p = o.useRef(null),
                    m = o.useRef({ offsetX: e, offsetY: t, startX: e, startY: t }),
                    h = o.useRef({ x: e, y: t });
                return (
                    o.useEffect(() => {
                        const e = p.current;
                        if (!e) return;
                        function t(t, n) {
                            if (!e) return;
                            const { height: o, width: s } = e.getBoundingClientRect();
                            let i = t - m.current.offsetX,
                                a = n - m.current.offsetY;
                            (i = Math.max(0, Math.min(i, window.innerWidth - s))), (a = Math.max(0, Math.min(a, window.innerHeight - o))), (h.current = { x: i, y: a }), (e.style.left = `${i}px`), (e.style.top = `${a}px`);
                        }
                        function n(e) {
                            t(e.clientX, e.clientY);
                        }
                        function o(e) {
                            t(e.touches[0].clientX, e.touches[0].clientY);
                        }
                        function s(e, t) {
                            c(!1);
                            Math.abs(e - m.current.startX) < 5 && Math.abs(t - m.current.startY) < 5 && d(!0);
                        }
                        function i(e) {
                            s(e.clientX, e.clientY), window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", i);
                        }
                        function r(e) {
                            s(e.changedTouches[0].clientX, e.changedTouches[0].clientY), window.removeEventListener("touchmove", o), window.removeEventListener("touchend", r);
                        }
                        function l(e, t) {
                            (m.current = { offsetX: e - h.current.x, offsetY: t - h.current.y, startX: e, startY: t }), c(!0);
                        }
                        function u(e) {
                            e.preventDefault(), l(e.clientX, e.clientY), window.addEventListener("mousemove", n), window.addEventListener("mouseup", i);
                        }
                        const g = (0, a.Z)(function () {
                            if (!e) return;
                            const { height: t, width: n } = e.getBoundingClientRect(),
                                o = Math.max(0, Math.min(h.current.x, window.innerWidth - n)),
                                s = Math.max(0, Math.min(h.current.y, window.innerHeight - t));
                            (h.current = { x: o, y: s }), (e.style.left = `${o}px`), (e.style.top = `${s}px`);
                        }, 500);
                        return (
                            e.addEventListener("mousedown", u),
                            e.addEventListener("touchstart", function (e) {
                                e.preventDefault(), l(e.touches[0].clientX, e.touches[0].clientY), window.addEventListener("touchmove", o), window.addEventListener("touchend", r);
                            }),
                            window.addEventListener("resize", g),
                            () => {
                                e.removeEventListener("mousedown", u), window.removeEventListener("resize", g);
                            }
                        );
                    }, []),
                    n.isTrue("rweb_debugger_enabled")
                        ? o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(s.ZP, { "aria-label": "debugger", borderColor: "buttonWhite", icon: o.createElement(i.default, null), ref: p, style: { position: "fixed", start: e, top: t, transition: "transform 0.2s", transform: `scale(${l ? "1.2" : "1"})` }, type: "primaryFilled" }),
                              u &&
                                  o.createElement(E, {
                                      onClose: function () {
                                          d(!1);
                                      },
                                  }),
                          )
                        : null
                );
            }
        },
        32399: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var o = n(202784),
                s = n(323265),
                i = n(170542),
                a = n(500002),
                r = n(443781),
                l = n(369241),
                c = n(668214);
            const u = (e, t) => t.location.pathname.includes("/intent/"),
                d = (e, t) => t.location.pathname.includes("/login"),
                p = (e, t) => t.location.pathname.includes("/ocf_arkose_challenge"),
                m = (0, c.Z)()
                    .propsFromState(() => ({ isIntentRoute: u, isLoginRoute: d, isArkoseRoute: p }))
                    .adjustStateProps(({ isArkoseRoute: e, isIntentRoute: t, isLoginRoute: n }) => ({ hideAppPrompt: t || n || e }));
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._isStandaloneApp = i.Z.isStandaloneApp()),
                        (this._isWebView = !!s.ZP.getTwitterAppVersion()),
                        (this.state = { showPrompt: !this.props.hideAppPrompt && !this.context.loggedInUserId && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_use_app_prompt_enabled") && !this.context.featureSwitches.isTrue("responsive_web_open_in_app_prompt_enabled") && !this._isWebView }),
                        (this._handleClose = () => {
                            this.setState({ showPrompt: !1 });
                        });
                }
                render() {
                    const e = this.props.location.pathname.includes("/i/flow/signup") || this.props.location.pathname.includes("i/flow/login");
                    if (this.state.showPrompt) {
                        return !(e && this.context.featureSwitches.isTrue("responsive_web_suppress_app_button_banner_suppressed")) && o.createElement(l.ZP, { onClose: this._handleClose, onlyShowOnce: !0, useBottomBanner: !0 });
                    }
                    return null;
                }
            }
            h.contextType = r.rC;
            const g = (0, a.ZP)(m(h));
        },
        105019: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var o = n(202784),
                s = n(107267),
                i = n(31667),
                a = n(952793),
                r = n(964814),
                l = n(885824);
            function c(e) {
                return !["/i/flow/login"].includes(e);
            }
            const u = (0, r.Z)(function (e = { hideCookieBannerPicker: !1 }) {
                const t = (function () {
                        const e = (0, s.useLocation)(),
                            [t, n] = o.useState(() => c(e.pathname));
                        return (
                            o.useEffect(() => {
                                n(c(e.pathname));
                            }, [n, e]),
                            t
                        );
                    })(),
                    n = (0, a.hC)("rweb_conf_only_enabled");
                return e.hideCookieBannerPicker || !t || n ? null : o.createElement(i.Z, null, o.createElement(l.Z, null));
            });
        },
        885824: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var o = n(202784),
                s = n(666305),
                i = n(2138),
                a = n(443781),
                r = n(325686),
                l = n(688715),
                c = n(731708),
                u = n(67369),
                d = n(154003),
                p = n(392237),
                m = n(332920),
                h = n.n(m),
                g = n(725516),
                b = n(421023),
                f = n(6116);
            const _ = h().d8817e36,
                w = h().b9288ee6,
                y = h().i1390ec2,
                S = (0, l.ju)("https://help.x.com/rules-and-policies/twitter-cookies");
            function k() {
                const e = o.createElement(h().I18NFormatMessage, { $i18n: "e4af7661" }, o.createElement(c.ZP, { color: "buttonWhite", link: S, withUnderline: !0 }, h().ga3121d5));
                return o.createElement(x, { body: e, title: y });
            }
            function v(e) {
                const t = o.createElement(h().I18NFormatMessage, { $i18n: "a268632b" }, o.createElement(c.ZP, { color: "buttonWhite", onClick: e.onExpand, role: "button", withUnderline: !0 }, h().g482c949));
                return o.createElement(x, { body: t, title: y });
            }
            function x(e) {
                return o.createElement(r.Z, { style: A.cookieComplianceMessageWrap }, o.createElement(c.ZP, { color: "buttonWhite", size: "headline2", weight: "medium" }, e.title), o.createElement(c.ZP, { color: "buttonWhite", size: "subtext2", style: A.cookieComplianceExpandedDetails }, e.body));
            }
            const E = o.forwardRef(function (e, t) {
                    const n = (0, g.z)(),
                        { expand: s, isExpanded: i } = (function () {
                            const [e, t] = o.useState(!1),
                                n = (0, g.z)();
                            return {
                                isExpanded: e,
                                expand: () => {
                                    n.scribe({ ...b.A, action: "click", element: "expand_message" }), t(!0);
                                },
                            };
                        })(),
                        { acceptAllCookies: a, isBannerOpen: l, refuseNonEssentialCookies: c } = (0, f.O)();
                    o.useEffect(() => {
                        l && n.scribe({ ...b.A, action: "impression" });
                    }, [n, l]);
                    const m = (0, u.pj)();
                    return l ? o.createElement(r.Z, { ref: t, style: [A.root, m && A.rootNarrow] }, i ? o.createElement(k, null) : o.createElement(v, { onExpand: s }), o.createElement(r.Z, { style: [A.buttonContainer, m && A.buttonContainerNarrow] }, o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: a, size: "medium", style: [A.ctaButton, m && A.ctaButtonNarrow], type: p.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, _), o.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: c, size: "medium", style: [A.ctaButton, m && A.ctaButtonNarrow], type: p.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, w))) : null;
                }),
                A = p.default.create((e) => ({ root: { alignItems: "center", boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", justifyContent: "space-evenly", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal, backgroundColor: e.colors.buttonBlack }, rootNarrow: { flexDirection: "column", paddingVertical: e.componentDimensions.gutterVertical, paddingTop: e.spaces.space20, backgroundColor: e.colors.buttonBlack }, buttonContainer: { flexDirection: "column", marginVertical: e.spaces.space16, marginStart: e.spaces.space20 }, buttonContainerNarrow: { width: "100%", maxWidth: 550, marginStart: 0, flexDirection: "column", flexWrap: "wrap" }, ctaButton: { height: e.spaces.space40, marginBottom: e.spaces.space8, width: 420, flexGrow: 0, flexShrink: 0 }, ctaButtonNarrow: { marginStart: 0, width: "100%" }, cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 }, cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, background: { backgroundColor: e.colors.buttonBlack } }));
            function P(e, t = 100) {
                return (function (e, t = 100) {
                    const n = o.useMemo(
                        () =>
                            (0, i.Z)((t) => {
                                if (!e) return;
                                if (!t) return void e(null);
                                const n = t.getBoundingClientRect();
                                n && e(n);
                            }, t),
                        [e, t],
                    );
                    return o.useCallback(
                        (t) => {
                            const o = t;
                            if ("function" != typeof e) return;
                            const i = n.bind(null, o);
                            return (
                                i(),
                                window.addEventListener("resize", i),
                                o && s.Z.observe(o, i),
                                () => {
                                    window.removeEventListener("resize", i), s.Z.unobserveAll(o), n.cancel();
                                }
                            );
                        },
                        [e, n],
                    );
                })(
                    o.useMemo(
                        () =>
                            "function" == typeof e
                                ? (t) => {
                                      e(t ? t.height : null);
                                  }
                                : void 0,
                        [e],
                    ),
                );
            }
            function C(e) {
                const { featureSwitches: t } = o.useContext(a.rC),
                    n = P(e.onHeightChange);
                return t.isTrue("responsive_web_cookie_compliance_banner_enabled") ? o.createElement(E, { ref: n }) : null;
            }
        },
        664918: (e, t, n) => {
            "use strict";
            n.d(t, { D0: () => l, c$: () => u, fD: () => r, iB: () => m, jk: () => c });
            var o = n(366097),
                s = n(163889);
            const i = 2,
                a = 1e3,
                r = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, o.bL)(e);
                return t ? (d(t) ? (p(t) ? (t[1] ? r.AcceptAllCookies : t[2] ? r.RefuseNonEssentialCookies : ((0, s.ZP)("Invalid consent signal state"), r.Invalid)) : r.NotSet) : r.Invalid) : r.NotSet;
            }
            function c(e) {
                (0, o.kA)({ consent_version: i, text_version: a, 1: !0 }, e);
            }
            function u(e) {
                (0, o.kA)({ consent_version: i, text_version: a, 2: !0 }, e);
            }
            function d(e) {
                return !(e[1] && e[2]);
            }
            function p(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, o.bL)(e);
                return !t || !d(t) || !p(t) || t.consent_version < i || t.text_version < a;
            }
        },
        421023: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => o });
            const o = { page: "cookie_compliance_banner" };
        },
        6116: (e, t, n) => {
            "use strict";
            n.d(t, { O: () => c });
            var o = n(202784),
                s = n(323265),
                i = n(725516),
                a = n(443781),
                r = n(664918),
                l = n(421023);
            function c() {
                const e = (0, i.z)(),
                    { featureSwitches: t } = o.useContext(a.rC),
                    n = !!s.ZP.getTwitterAppVersion(),
                    [c, u] = o.useState(() => r.iB(t) && !n);
                return {
                    isBannerOpen: c,
                    acceptAllCookies() {
                        e.scribe({ ...l.A, action: "click", element: "accept_all" }), r.jk(t), u(!1);
                    },
                    refuseNonEssentialCookies() {
                        e.scribe({ ...l.A, action: "click", element: "refuse_non_essential" }), r.c$(t), u(!1);
                    },
                };
            }
        },
        223543: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                s = n(154003),
                i = n(108362),
                a = n(731708),
                r = n(392237),
                l = n(31667),
                c = n(782826),
                u = n(668214),
                d = n(289405);
            const p = (0, u.Z)()
                    .propsFromState(() => ({ dtabBarInfo: d.U6 }))
                    .adjustStateProps(({ dtabBarInfo: e }) => ({ dtabAll: e && e.dtabAll, dtabRweb: e && e.dtabRweb, hide: e && e.hide, ttsToken: e && e.ttsToken }))
                    .propsFromActions(() => ({ setDtabBarInfo: d.wn })),
                m = "dTabClear",
                h = "dTabHide",
                g = "dTabInfo";
            class b extends o.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderButtons = () => o.createElement(o.Fragment, null, o.createElement(s.ZP, { onClick: this._handleInfo, size: "xSmall", style: f.dtabBarButton, testID: g, type: "onMediaWhiteFilled" }, "ⓘ Info"), o.createElement(s.ZP, { onClick: this._handleClose, size: "xSmall", style: f.dtabBarButton, testID: h, type: "onMediaWhiteFilled" }, "↓ Hide"), o.createElement(s.ZP, { onClick: this._handleClear, size: "xSmall", style: f.dtabBarButton, testID: m, type: "destructiveFilled" }, "↺ Clear"))),
                        (this._handleInfo = () => {
                            const e = this._getOverrides();
                            window.prompt(e.join("\n"), window.encodeURIComponent(e.join(";")));
                        }),
                        (this._getOverrides = () => {
                            const { dtabAll: e, ttsToken: t } = this.props;
                            let n = [];
                            return e && !t ? (n = e) : t && (n = [`tts_token=${t}`]), n.filter((e) => !!e);
                        }),
                        (this._handleClear = () => {
                            const e = `OK to clear overrides?\n${this._getOverrides().join("\n")}`;
                            if (window.confirm(e)) {
                                const e = new URL(c.ZP.get());
                                e.searchParams.set("dtab_local", ""), e.searchParams.set("tts_token", ""), c.ZP.navigateTo(e.toString());
                            }
                        }),
                        (this._handleClose = () => {
                            const { dtabAll: e, dtabRweb: t, setDtabBarInfo: n, ttsToken: o } = this.props;
                            this.setState({ show: !1 }), n({ dtabAll: e, dtabRweb: t, ttsToken: o, hide: !0 });
                        }),
                        (this._shouldShow = () => {
                            const { dtabAll: e, hide: t, ttsToken: n } = this.props;
                            return !(t || (!e && !n));
                        }),
                        (this.state = { show: this._shouldShow() });
                }
                render() {
                    const { dtabAll: e, ttsToken: t } = this.props,
                        n = t || e ? o.createElement(l.Z, { style: f.root }, o.createElement(i.Z, { isLarge: !0, style: f.container, withGutter: !0 }, o.createElement(a.ZP, { color: "whiteOnColor", numberOfLines: 1, size: "subtext2", style: f.text }, "Staging override is active"), this._renderButtons())) : null;
                    return this.state.show ? n : null;
                }
            }
            b.defaultProps = { hide: !1 };
            const f = r.default.create((e) => ({ root: { backgroundColor: e.colors.primary }, container: { alignItems: "center", flexDirection: "row", height: e.spaces.space40, justifyContent: "space-between" }, dtabBarButton: { margin: e.spaces.space8 }, text: { width: "100%" } })),
                _ = p(b);
        },
        80309: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => Z, UJ: () => P });
            var o = n(807896),
                s = (n(136728), n(202784)),
                i = n(251067),
                a = n(325686),
                r = n(392237),
                l = n(731708),
                c = n(332920),
                u = n.n(c),
                d = n(752624),
                p = n(516951),
                m = n(874627),
                h = n(994775),
                g = n(536387),
                b = n(163390),
                f = n(113840),
                _ = n(500002),
                w = n(443781),
                y = n(668214),
                S = n(919022);
            const k = (0, y.Z)()
                .propsFromState(() => ({ viewerUser: S.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const v = [...n(122758).M],
                x = u().b47e760e,
                E = u().fd2c7b44,
                A = new d.Z(),
                P = (e) => A.subscribe(e).unsubscribe;
            class C extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._bindKeyboardShortcuts = () => {
                            const { history: e, jotaiStore: t, viewerUserScreenName: n } = this.props,
                                o = (t, n = {}) => e.push({ pathname: t, state: { ...n, source: "keyboard_shortcut" } }),
                                s = (e) => (t) => {
                                    t.preventDefault(), A.getListeners().length ? A.notify(e) : o("/explore", { searchFocused: !0, searchPrefill: e });
                                },
                                a = { [b.uq.labs.openCommandCenter]: p.Z, [b.uq.search]: s(), [b.uq.goToUser]: s("@"), [b.uq.openKeyboardShortcuts]: () => o("/i/keyboard_shortcuts"), [b.uq.goExplore]: () => o("/explore"), [b.uq.goSettings]: () => o("/settings") },
                                r = (e) => ({ [b.uq.goProfile]: () => o(`/${e}`), [b.uq.goLikes]: () => o(`/${e}/likes`), [b.uq.goLists]: () => o(`/${e}/lists`) }),
                                l = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                c = n && l ? { ...r(n), [b.uq.goTopArticles]: () => o("/i/articles") } : n ? r(n) : {},
                                u = { ...a, ...c, [b.uq.toggleCommandCenter]: (0, i.fH)(i.vw.prod) ? p.Z : () => t.set(m._K), [b.uq.goHome]: () => o("/home"), [b.uq.goDisplay]: () => o("/i/display"), [b.uq.goNotifications]: () => o("/notifications"), [b.uq.goMentions]: () => o("/notifications/mentions"), [b.uq.goMessages]: () => o("/messages"), [b.uq.goGrok]: () => o("/i/grok"), [b.uq.newMessage]: () => o("/messages/compose"), [b.uq.newTweet]: () => o("/compose/post"), [b.uq.goBookmarks]: () => o("/i/bookmarks"), [b.uq.goToDrafts]: () => o("/compose/post/unsent/drafts"), [b.uq.goToScheduled]: () => o("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? u : a;
                            this._unbindKeyboardShortcuts = (0, h.Z)(d);
                        });
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts();
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts();
                }
                render() {
                    return this.props.viewerUserScreenName ? s.createElement(a.Z, { "aria-level": 2, role: "heading", style: r.default.visuallyHidden }, s.createElement(m.lk, null), s.createElement(l.ZP, null, x), s.createElement(l.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, E)) : null;
                }
            }
            C.contextType = w.rC;
            const T = k(function (e) {
                    const t = (0, g.xO)();
                    return e.disabled ? null : s.createElement(C, (0, o.Z)({}, e, { jotaiStore: t }));
                }),
                Z = (0, f.g)((0, _.ZP)(T), v);
        },
        642028: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var o = n(202784),
                s = n(523561),
                i = n(125363),
                a = n(257166),
                r = n(390387),
                l = n(365265),
                c = n(312771),
                u = n(443781),
                d = n(736063);
            const p = { context: "intercom_stater" };
            function m() {
                const { featureSwitches: e, userClaims: t } = (0, u.QZ)(),
                    n = (0, i.v9)(r.Qb),
                    s = (0, i.v9)(a.selectFirstEmail),
                    m = (0, i.v9)(r.Lz),
                    g = (0, i.I0)(),
                    b = (0, i.v9)(l.VR) === c.ZP.LOADED,
                    f = (0, i.v9)(a.selectFetchStatus) === c.ZP.LOADED,
                    _ = e.isTrue("responsive_web_verified_organizations_intercom_enabled") && t.isVerifiedOrg(),
                    w = e.isTrue("responsive_web_intercom_support_capture_premium_enabled") && t.isAnyPremiumSubscriber(),
                    y = !_ && w,
                    S = !m && !f,
                    k = _ || w,
                    v = !S && (!y || b);
                return (
                    o.useEffect(() => {
                        n && k && (S && g((0, a.fetchDevicesIfNeeded)()), y && g((0, l.v1)()));
                    }, [g, k, n, y, S]),
                    k && v ? o.createElement(d.H, { errorConfig: p, suspenseFallback: null }, o.createElement(h, { email: s })) : null
                );
            }
            const h = (0, s.Z)({ loader: () => n.e("ondemand.Intercom").then(n.bind(n, 653934)) }),
                g = o.memo(m);
        },
        634518: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var o = n(202784),
                s = n(108362),
                i = n(731708),
                a = n(154003),
                r = n(392237),
                l = n(31667),
                c = n(355335);
            const u = (e) => {
                    const [t, n] = o.useState(!1),
                        { disableDev: r, isDev: u } = (0, c.Z)();
                    if (
                        (o.useEffect(() => {
                            n(u);
                        }, [u]),
                        t)
                    )
                        return o.createElement(l.Z, { style: d.root }, o.createElement(s.Z, { isLarge: !0, style: d.container, withGutter: !0 }, o.createElement(i.ZP, { "aria-label": "jetfuel dev bar", color: "whiteOnColor", numberOfLines: 1, size: "subtext2", style: d.text, withoutTwemojiAndHashflags: !0 }, o.createElement("span", { "aria-label": "rocket", role: "img" }, "🚀🚀🚀"), " Jetfuel Local Dev Mode"), o.createElement(a.ZP, { onClick: () => n(!1), size: "xSmall", style: d.dtabBarButton, type: "onMediaWhiteFilled" }, "↓ Hide"), o.createElement(a.ZP, { onClick: r, size: "xSmall", style: d.dtabBarButton, type: "destructiveFilled" }, "↺ Clear")));
                },
                d = r.default.create((e) => ({ root: { backgroundColor: e.colors.primary }, container: { alignItems: "center", flexDirection: "row", height: e.spaces.space40, justifyContent: "space-between" }, dtabBarButton: { margin: e.spaces.space8 }, text: { width: "100%" } }));
        },
        316391: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var o = n(202784),
                s = n(323265),
                i = n(668214),
                a = n(24546);
            const r = (0, i.Z)()
                .propsFromState(() => ({ previews: a.W }))
                .adjustStateProps(({ previews: e }) => ({ userHasUnsentTweets: Object.keys(e).length > 0 }))
                .propsFromActions(() => ({ sendAllPreviews: a.MH }))(
                ({ sendAllPreviews: e, userHasUnsentTweets: t }) => (
                    o.useEffect(() => {
                        const n = s.ZP.isMobileOS() ? "visibilitychange" : "beforeunload",
                            o = s.ZP.isMobileOS() ? document : window;
                        t ? o.addEventListener(n, e) : o.removeEventListener(n, e);
                    }, [e, t]),
                    null
                ),
            );
        },
        551415: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => D });
            var o = n(202784),
                s = n(107267),
                i = n(952793),
                a = n(529356),
                r = n(332920),
                l = n.n(r),
                c = n(684869),
                u = n(516951),
                d = n(725516),
                p = n(668214),
                m = n(922481);
            const h = (0, p.Z)()
                    .propsFromState(() => ({ promptAllowed: m.selectIsEligibleForPushPrompt }))
                    .propsFromActions(() => ({ updatePromptStatus: m.updatePromptStatus, pushSubscribeLoggedOut: m.pushSubscribeLoggedOut }))
                    .withAnalytics({ component: "lo_notifications", element: "in_app_prompt" }),
                g = l().e5d26f84,
                b = l().e71e09ec,
                f = b,
                _ = b,
                w = l().hd50e064,
                y = (e) => {
                    const { promptAllowed: t, pushSubscribeLoggedOut: n, updatePromptStatus: s } = e,
                        [i, r] = o.useState(t),
                        l = (0, d.z)(),
                        u = o.useCallback(
                            (e) => {
                                l.scribeAction(e);
                            },
                            [l],
                        ),
                        p = o.useCallback(() => {
                            u("primary_cta"), s("inAppPrompt", "approved"), r(!1), n();
                        }, [n, u, s]),
                        m = o.useCallback(() => {
                            const { onDismiss: t } = e;
                            s("inAppPrompt", "dismissed"), r(!1), u("dismiss"), t();
                        }, [e, u, s]);
                    return (
                        o.useEffect(() => {
                            t && (u("impression"), r(!0), s("inAppPrompt", "seen"));
                        }, [s, t, u]),
                        t || i ? o.createElement(a.Z, { actionLabel: _, graphic: c.default, headline: f, onAction: p, onClose: m, onTertiaryAction: m, subtext: g, tertiaryActionLabel: w }) : null
                    );
                };
            y.defaultProps = { message: g, onDismiss: u.Z };
            const S = h(o.memo(y));
            n(543673), n(240753), n(128399);
            var k = n(138099),
                v = n(711535),
                x = n(71620),
                E = n(601576);
            const A = (0, p.Z)()
                    .propsFromState(() => ({ browserPromptStatus: m.selectBrowserPromptStatus, arkosePromptStatus: m.selectArkosePromptStatus }))
                    .adjustStateProps(({ arkosePromptStatus: e, browserPromptStatus: t }) => ({ shouldShowPrompt: t === m.PromptStatus.APPROVED && e === m.PromptStatus.NOT_SEEN }))
                    .propsFromActions(() => ({ verifyArkoseTokenAndSavePushToken: m.verifyArkoseTokenAndSavePushToken, addToast: E.fz, updatePromptStatus: m.updatePromptStatus, createLocalApiErrorHandler: (0, x.zr)("arkose_challenge_logged_out_notifications") }))
                    .withAnalytics({ component: "lo_notifications", element: "arkose" }),
                P = l().g4850f44,
                C = (e) => {
                    const { addToast: t, analytics: n, createLocalApiErrorHandler: s, shouldShowPrompt: i, updatePromptStatus: a, verifyArkoseTokenAndSavePushToken: r } = e,
                        [l, c] = o.useState(i);
                    o.useEffect(() => {
                        i && (c(!0), a("arkosePrompt", m.PromptStatus.SEEN), n.scribeAction("show"));
                    }, [i, a, n]);
                    const u = o.useCallback(
                            (e) => {
                                n.scribeAction("complete"),
                                    r(e)
                                        .then(() => {
                                            a("arkosePrompt", m.PromptStatus.APPROVED), t({ text: P });
                                        })
                                        .catch(() => {
                                            s({});
                                        })
                                        .finally(() => {
                                            c(!1);
                                        });
                            },
                            [t, s, a, n, r],
                        ),
                        d = o.useCallback(() => {
                            n.scribeAction("fail"), a("arkosePrompt", m.PromptStatus.DISMISSED), c(!1);
                        }, [a, n]);
                    if (!i && !l) return null;
                    const p = new URLSearchParams(window.location.search).get("data") || void 0;
                    return o.createElement(k.Z, { enableMaskForDismiss: !1, type: "full", withMask: !0 }, o.createElement(v.default, { data: p, mobileKey: "arkose_challenge_lo_web_notification_mobile_prod", onChallengeCompleted: u, onChallengeFailed: d, webKey: "arkose_challenge_lo_web_notification_prod" }));
                },
                T = A(o.memo(C));
            var Z = n(997174),
                L = n(312771);
            const F = ["profile", "guide", "tweet", "topic_landing", "spheres_list", "live_event_timeline", "search"],
                B = (e) => {
                    const t = (0, Z.wZ)(e);
                    return !!t && ((e) => -1 !== F.indexOf(e))(t);
                },
                I = (e) => (0, m.selectFetchStatus)(e) === L.ZP.LOADED,
                M = (e) => {
                    const { isPersistedDataLoaded: t, isSupportedNavPath: n } = e,
                        a = (0, s.useLocation)(),
                        r = (0, i.D2)("responsive_web_logged_out_notifications_enabled"),
                        l = o.useMemo(
                            () =>
                                ((e) => {
                                    const { pathname: t, query: n } = e;
                                    return ((e) => "/" === e)(t) || ((e) => !!e?.logout)(n) || ((e) => e.includes("/i/flow"))(t);
                                })(a),
                            [a],
                        );
                    if (!t || !n || l) return null;
                    return r.isTrue() && o.createElement(o.Fragment, null, o.createElement(S, null), o.createElement(T, null));
                },
                D = (0, p.Z)()
                    .propsFromState(() => ({ isSupportedNavPath: B, isPersistedDataLoaded: I }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("LOGGED_OUT_NOTIFICATIONS") }))(o.memo(M));
        },
        233391: (e, t, n) => {
            "use strict";
            n.d(t, { BH: () => U, Qj: () => j, Wc: () => q, sI: () => H });
            var o = n(202784),
                s = n(731708),
                i = n(392237),
                a = n(332920),
                r = n.n(a),
                l = n(911373),
                c = n(761744),
                u = n(98440),
                d = n(720600),
                p = n(125966),
                m = n(544367),
                h = n(452693),
                g = n(971657),
                b = n(956272),
                f = n(520913);
            const _ = r().a17a75da,
                w = r().e7342ed4,
                y = r().b6a43e78,
                S = r().b469e406,
                k = r().b8505290,
                v = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "e1a49407" }, o.createElement(s.ZP, null, e)) : void 0),
                x = r().ae8b0564,
                E = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "be54ed41" }, o.createElement(s.ZP, null, e)) : void 0),
                A = r().f2adab0e,
                P = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "jb19eb17" }, o.createElement(s.ZP, null, e)) : void 0),
                C = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "bbfee611" }, o.createElement(s.ZP, null, e)) : void 0),
                T = r().b7821a74,
                Z = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "af104f2b" }, o.createElement(s.ZP, null, e)) : void 0),
                L = ({ customText: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "ccc1f303" }, o.createElement(s.ZP, null, e)) : void 0),
                F = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "ce02fabf" }, o.createElement(s.ZP, null, e)) : void 0),
                B = r().e6d43d06,
                I = ({ customText: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "a85608a7" }, o.createElement(s.ZP, null, e)) : void 0),
                M = r().ic848090,
                D = r().f9ebe066,
                N = ({ userFullName: e }) => (e ? o.createElement(r().I18NFormatMessage, { $i18n: "c76865b7" }, o.createElement(s.ZP, null, e)) : void 0),
                O = r().je3d93e2,
                K = r().ea88ce2e,
                R = r().je3d93e2,
                U = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                q = (e, t) => {
                    switch (t) {
                        case U.follow:
                            return { icon: l.default, text: C, subtext: T, iconStyle: $.iconOther };
                        case U.like:
                            return { icon: c.default, text: A, subtext: P, iconStyle: $.iconLike };
                        case U.reply:
                            return { icon: u.default, text: k, subtext: v, iconStyle: $.iconOther };
                        case U.retweet:
                            return { icon: d.default, text: x, subtext: E, iconStyle: $.iconRetweet };
                        case U.dmshare:
                            return { icon: p.default, text: Z, iconStyle: $.iconOther };
                        case U.subscribe:
                            return { icon: m.default, text: L, subtext: F, iconStyle: $.iconOther };
                        case U.topic:
                            return { icon: h.default, text: B, subtext: I, iconStyle: $.iconTopics };
                        case U.community:
                            return { icon: g.default, text: M, subtext: D, iconStyle: $.iconOther };
                        case U.search:
                            return { icon: b.default, text: N, subtext: O, iconStyle: $.iconOther };
                        default:
                            return { icon: f.default, text: K, subtext: R, iconStyle: $.iconTwitter };
                    }
                },
                H = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? _ : y),
                j = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? w : S),
                $ = i.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, n) => {
            "use strict";
            n.d(t, { BH: () => P.BH, ZP: () => M });
            n(875640);
            var o = n(202784),
                s = n(529356),
                i = n(332920),
                a = n.n(i),
                r = n(323265),
                l = n(170542),
                c = n(951790),
                u = n(804027),
                d = n(443781),
                p = n(325686),
                m = n(292627),
                h = n(731708),
                g = n(154003),
                b = n(392237);
            class f extends o.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: n, primaryText: s, secondaryButtonLabel: i, secondaryText: a } = this.props;
                    return o.createElement(m.Z.HalfSheet, null, o.createElement(p.Z, { style: _.sheetContent }, o.createElement(p.Z, { style: _.content }, o.createElement(p.Z, { style: _.header }, o.createElement(h.ZP, { color: "white", size: "headline1", weight: "bold" }, s)), o.createElement(h.ZP, { color: "white", style: _.secondaryText }, a)), o.createElement(p.Z, { style: _.footer }, o.createElement(g.ZP, { onPress: t, size: "medium", style: _.button, type: "onMediaOutlined" }, o.createElement(h.ZP, { numberOfLines: 1 }, i)), o.createElement(g.ZP, { onPress: e, size: "medium", style: _.button, type: "onMediaWhiteFilled" }, o.createElement(h.ZP, { numberOfLines: 1 }, n)))));
                }
            }
            const _ = b.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: b.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                w = f;
            var y = n(668214),
                S = n(558369),
                k = n(118823),
                v = n(390387),
                x = n(38562),
                E = n(936572);
            const A = (0, y.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: S.ur, loginPromptShown: x.fj, loginPromptLastShown: E.ne, startLocation: k.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: x.Af, setLoginReturnPath: v.Jm, updateSettings: x.VP }))
                .withAnalytics();
            var P = n(233391);
            n(920099), n(856642), n(782826), n(903019);
            const C = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                T = a().j607bf02,
                Z = a().j49fd4e8,
                L = a().hd50e064,
                F = a().a565833e,
                B = a().e919c3bc;
            class I extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = P.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = P.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = P.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = l.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: n, useBottomBanner: o } = this.props,
                                { displayInterval: s } = this.state;
                            if (o && !this._hasMobileAppStore()) return !1;
                            if (n) {
                                if (t) return !1;
                                if (s && Date.now() - e < s) return !1;
                            }
                            return !0;
                        }),
                        (this._handleClose = () => {
                            this._scribeAction("dismiss"), this.props.onClose();
                        }),
                        (this._handleNotNow = () => {
                            this._scribeAction("not_now"), this.props.onClose();
                        }),
                        (this._handleSubmit = (e) => {
                            const { onClose: t, postLoginPath: n, setLoginReturnPath: o } = this.props;
                            this._scribeAction("login"), n && o(n), t();
                        }),
                        (this._handleSignupButtonClick = (e) => {
                            this._scribeAction("signup"), this.props.onClose();
                        }),
                        (this._handleAppInstallButtonClick = (e) => {
                            e.preventDefault(), this._scribeAction("download"), c.Z.goToAppStore("loggedoutprompt");
                        }),
                        (this._getSignupState = () => {
                            const { displayMode: e, tweetId: t, userId: n } = this.props;
                            switch (e) {
                                case P.BH.follow:
                                    return { gatedAction: { action: u.qJ.Follow, user_id: n } };
                                case P.BH.like:
                                    return { gatedAction: { action: u.qJ.Favorite, tweet_id: t, user_id: n } };
                                case P.BH.reply:
                                    return { gatedAction: { action: u.qJ.Reply, tweet_id: t, user_id: n } };
                                case P.BH.retweet:
                                    return { gatedAction: { action: u.qJ.Retweet, tweet_id: t, user_id: n } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => r.ZP.isIOS() || r.ZP.isAndroid());
                    const { useBottomBanner: n } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const o = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        s = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: n ? 864e5 * o : 0, switchToAppLink: C[s] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: n, updateSettings: o } = this.props;
                    !e && t && (n(!0), o({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: n, hideSignUp: i, isFullHeightOnMobile: a, loginLabel: r, useBottomBanner: l, userFullName: c } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: u, iconStyle: d, subtext: p, text: m } = this._getFullSheetDisplayElements(n),
                        h = "function" == typeof m ? m({ customText: t, userFullName: c }) : m,
                        g = "function" == typeof p ? p({ customText: t, userFullName: c }) : p,
                        b = i ? "" : this.props.signupLabel,
                        f = { pathname: "/i/flow/login", state: this._getLoginState() },
                        _ = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return l ? o.createElement(w, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: Z, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: L, secondaryText: this._getHalfSheetSecondaryText() }) : o.createElement(s.Z, { actionLabel: r, actionLink: f, allowBackNavigation: e, graphic: u, graphicStyle: d, headline: h || "", isFullHeightOnMobile: a, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: b, secondaryActionLink: _, subtext: g || "", tertiaryActionLabel: this._showTertiaryCTA ? T : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: n, useBottomBanner: o } = this.props,
                        s = o ? "half_sheet" : n;
                    t.scribe({ component: "login_signup_sheet", element: s, action: e });
                }
            }
            (I.defaultProps = { displayMode: P.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: B, signupLabel: F, onlyShowOnce: !1 }), (I.displayMode = P.BH), (I.contextType = d.rC);
            const M = A(I);
        },
        331879: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var o = n(202784),
                s = n(292627),
                i = n(557707),
                a = n(392237),
                r = n(774654),
                l = n(292484),
                c = n(668214),
                u = n(601576);
            const d = (0, c.Z)()
                    .propsFromState(() => ({ toast: u.Sb }))
                    .propsFromActions(() => ({ onClose: u.RS })),
                p = "toast",
                m = a.default.create((e) => ({ toastStaysAboveSafeArea: { top: `calc(${a.default.iPhoneOffsetBottom} - ${r.ZM.getAppBarHeight()})` } })),
                h = d(({ onClose: e, toast: t }) => {
                    const n = (0, l.$h)(),
                        a = r.ZM.useCollapsibleNavBars(),
                        c = [...r.Ah({ elementPosition: "bottom" }), a && m.toastStaysAboveSafeArea];
                    if (!t) return null;
                    const u = n ? s.Z.ModalToasts : s.Z.Toasts;
                    return o.createElement(i.ZP, { LayerComponent: u, action: t.action, ariaOnly: t.ariaOnly, autoDismissDelay: t.autoDismissDelay, key: t.id, onClose: e, style: c, testID: p, text: t.text, variant: t.variant, withAutoDismiss: t.withAutoDismiss, withClearButton: t.withClearButton });
                });
        },
        782642: (e, t, n) => {
            "use strict";
            n.d(t, { p: () => a });
            var o = n(202784),
                s = n(125363),
                i = n(601576);
            const a = () => {
                    const e = (0, s.I0)(),
                        t = r(),
                        n = o.useRef(null);
                    return (
                        o.useEffect(() => () => clearTimeout(n.current), [t]),
                        o.useCallback(
                            (o) => {
                                e((0, i.fz)(o)), (n.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                r = () => {
                    const e = (0, s.I0)();
                    return o.useCallback(() => e((0, i.RS)()), [e]);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-a2dee9c7.740d538a.js.map
