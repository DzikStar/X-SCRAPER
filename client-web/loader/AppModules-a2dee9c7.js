(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-a2dee9c7"],
    {
        790925: (e) => {
            e.exports = { queryId: "TYpVV9QioZfViHqEqRZxJA", operationName: "BrowseSpaceTopics", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        380890: (e) => {
            e.exports = { queryId: "BqIHKmwZKtiUBPi07jKctg", operationName: "EnableLoggedOutWebNotifications", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        376920: (e) => {
            e.exports = { queryId: "V8-RP7SxlI4qzRmpCmEqgw", operationName: "ListProductSubscriptions", operationType: "query", metadata: { featureSwitches: ["subscriptions_management_fetch_next_billing_time", "subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        722687: (e) => {
            e.exports = { queryId: "RM4x9h3tF8bCn69VV3-gRg", operationName: "NotABotCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        433261: (e) => {
            e.exports = { queryId: "Sxn4YOlaAwEKjnjWV0h7Mw", operationName: "SubscribeToScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        758526: (e) => {
            e.exports = { queryId: "-kH-xt82ZhKnAMTXv1Fuzg", operationName: "SubscriptionCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        284360: (e) => {
            e.exports = { queryId: "yIGOH-WMQSU-AdbfVRZm9A", operationName: "SubscriptionProductDetails", operationType: "query", metadata: { featureSwitches: ["subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        936961: (e) => {
            e.exports = { queryId: "NEMw3cw4v0-Oo-nTMI8reQ", operationName: "SwitchTier", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        359215: (e) => {
            e.exports = { queryId: "Zevhh76Msw574ZSs2NQHGQ", operationName: "UnsubscribeFromScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        326439: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var s,
                a,
                i,
                o,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (s = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (o = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: s,
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
                                                    a,
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
                                                                    o,
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
            var s,
                a,
                i,
                o,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (s = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                            (o = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [s, { alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [o, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            l.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const c = l;
        },
        882127: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var s = {
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
            const a = s;
        },
        446914: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            const s = ({ apiClient: e, featureSwitches: t }) => ({
                updateSubscriptions(t, n) {
                    const { sessionId: s, toSubscribe: a, toUnsubscribe: i } = t,
                        o = { sub_topics: a.join(","), unsub_topics: i.join(",") },
                        r = { ...n, "LivePipeline-Session": s };
                    return e.post("live_pipeline/update_subscriptions", o, {}, r, "");
                },
            });
        },
        6613: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var s = n(163889),
                a = n(414742),
                i = n(380890),
                o = n.n(i),
                r = n(503768);
            const l = (e, t) => {
                    const n = t?.enable_logged_out_web_notifications;
                    return n || (0, s.ZP)("GQL LoggedOutNotifications: Failed to execute EnableLoggedOutWebNotifications", { extra: (0, r.dL)(e) }), (0, a.jB)(e);
                },
                c = ({ apiClient: e, featureSwitches: t }) => ({ enableLoggedOutWebNotifications: (t) => e.graphQL(o(), t, l) });
        },
        904940: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            const s = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, n) => e.post("media/metadata/create", t, {}, { ...n, "content-type": "application/json" }), attachSubtitles: (t, n) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...n, "content-type": "application/json" }) });
        },
        372551: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var s = n(376920),
                a = n.n(s),
                i = n(722687),
                o = n.n(i),
                r = n(758526),
                l = n.n(r),
                c = n(284360),
                u = n.n(c),
                d = n(936961),
                p = n.n(d);
            const m = ({ apiClient: e, featureSwitches: t }) => ({ fetchSubscriptionProductDetails: (t) => e.graphQL(u(), t).then((e) => e.web_subscription_product_details), fetchSubscriptionProductCheckoutUrl: (t) => e.graphQL(l(), t).then((e) => e.subscriptioncheckoutsession_create_for_blue?.session_url), fetchNotABotCheckoutUrl: (t) => e.graphQL(o(), t).then((e) => e.subscriptioncheckoutsession_create_for_not_a_bot?.session_url), fetchProductSubscriptions: (t) => e.graphQL(a(), t).then((e) => e.viewer_v2?.list_product_subscriptions), switchTier: (t) => e.graphQL(p(), t).then((e) => e) });
        },
        708482: (e, t, n) => {
            "use strict";
            n.d(t, { s: () => i });
            var s = n(10622),
                a = n.n(s);
            function i(e, t, n, s) {
                return a()(e, t, n, s ? { networkCacheConfig: { metadata: { isFatalError: s } } } : void 0).toPromise();
            }
        },
        32399: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var s = n(202784),
                a = n(323265),
                i = n(170542),
                o = n(500002),
                r = n(443781),
                l = n(369241),
                c = n(668214);
            const u = (e, t) => t.location.pathname.includes("/intent/"),
                d = (e, t) => t.location.pathname.includes("/login"),
                p = (e, t) => t.location.pathname.includes("/ocf_arkose_challenge"),
                m = (0, c.Z)()
                    .propsFromState(() => ({ isIntentRoute: u, isLoginRoute: d, isArkoseRoute: p }))
                    .adjustStateProps(({ isArkoseRoute: e, isIntentRoute: t, isLoginRoute: n }) => ({ hideAppPrompt: t || n || e }));
            class g extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._isStandaloneApp = i.Z.isStandaloneApp()),
                        (this._isWebView = !!a.ZP.getTwitterAppVersion()),
                        (this.state = { showPrompt: !this.props.hideAppPrompt && !this.context.loggedInUserId && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_use_app_prompt_enabled") && !this.context.featureSwitches.isTrue("responsive_web_open_in_app_prompt_enabled") && !this._isWebView }),
                        (this._handleClose = () => {
                            this.setState({ showPrompt: !1 });
                        });
                }
                render() {
                    const e = this.props.location.pathname.includes("/i/flow/signup") || this.props.location.pathname.includes("i/flow/login");
                    if (this.state.showPrompt) {
                        return !(e && this.context.featureSwitches.isTrue("responsive_web_suppress_app_button_banner_suppressed")) && s.createElement(l.ZP, { onClose: this._handleClose, onlyShowOnce: !0, useBottomBanner: !0 });
                    }
                    return null;
                }
            }
            g.contextType = r.rC;
            const h = (0, o.ZP)(m(g));
        },
        105019: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var s = n(202784),
                a = n(107267),
                i = n(31667),
                o = n(952793),
                r = n(964814),
                l = n(885824);
            function c(e) {
                return !["/i/flow/login"].includes(e);
            }
            const u = (0, r.Z)(function (e = { hideCookieBannerPicker: !1 }) {
                const t = (function () {
                        const e = (0, a.useLocation)(),
                            [t, n] = s.useState(() => c(e.pathname));
                        return (
                            s.useEffect(() => {
                                n(c(e.pathname));
                            }, [n, e]),
                            t
                        );
                    })(),
                    n = (0, o.hC)("rweb_conf_only_enabled");
                return e.hideCookieBannerPicker || !t || n ? null : s.createElement(i.Z, null, s.createElement(l.Z, null));
            });
        },
        885824: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => A });
            var s = n(202784),
                a = n(666305),
                i = n(2138),
                o = n(443781),
                r = n(325686),
                l = n(688715),
                c = n(731708),
                u = n(67369),
                d = n(154003),
                p = n(392237),
                m = n(111677),
                g = n.n(m),
                h = n(725516),
                b = n(421023),
                f = n(6116);
            const y = g().d8817e36,
                _ = g().b9288ee6,
                k = g().i1390ec2,
                w = (0, l.ju)("https://help.x.com/rules-and-policies/twitter-cookies");
            function S() {
                const e = s.createElement(g().I18NFormatMessage, { $i18n: "e4af7661" }, s.createElement(c.ZP, { color: "buttonWhite", link: w, withUnderline: !0 }, g().ga3121d5));
                return s.createElement(P, { body: e, title: k });
            }
            function v(e) {
                const t = s.createElement(g().I18NFormatMessage, { $i18n: "a268632b" }, s.createElement(c.ZP, { color: "buttonWhite", onClick: e.onExpand, role: "button", withUnderline: !0 }, g().g482c949));
                return s.createElement(P, { body: t, title: k });
            }
            function P(e) {
                return s.createElement(r.Z, { style: E.cookieComplianceMessageWrap }, s.createElement(c.ZP, { color: "buttonWhite", size: "headline2", weight: "medium" }, e.title), s.createElement(c.ZP, { color: "buttonWhite", size: "subtext2", style: E.cookieComplianceExpandedDetails }, e.body));
            }
            const C = s.forwardRef(function (e, t) {
                    const n = (0, h.z)(),
                        { expand: a, isExpanded: i } = (function () {
                            const [e, t] = s.useState(!1),
                                n = (0, h.z)();
                            return {
                                isExpanded: e,
                                expand: () => {
                                    n.scribe({ ...b.A, action: "click", element: "expand_message" }), t(!0);
                                },
                            };
                        })(),
                        { acceptAllCookies: o, isBannerOpen: l, refuseNonEssentialCookies: c } = (0, f.O)();
                    s.useEffect(() => {
                        l && n.scribe({ ...b.A, action: "impression" });
                    }, [n, l]);
                    const m = (0, u.pj)();
                    return l ? s.createElement(r.Z, { ref: t, style: [E.root, m && E.rootNarrow] }, i ? s.createElement(S, null) : s.createElement(v, { onExpand: a }), s.createElement(r.Z, { style: [E.buttonContainer, m && E.buttonContainerNarrow] }, s.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: o, size: "medium", style: [E.ctaButton, m && E.ctaButtonNarrow], type: p.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, y), s.createElement(d.ZP, { dominantColor: "alwaysBaseGray1100", onPress: c, size: "medium", style: [E.ctaButton, m && E.ctaButtonNarrow], type: p.default.isDarkMode() ? "onMediaDominantColorFilled" : "onMediaWhiteFilled" }, _))) : null;
                }),
                E = p.default.create((e) => ({ root: { alignItems: "center", boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", justifyContent: "space-evenly", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal, backgroundColor: e.colors.buttonBlack }, rootNarrow: { flexDirection: "column", paddingVertical: e.componentDimensions.gutterVertical, paddingTop: e.spaces.space20, backgroundColor: e.colors.buttonBlack }, buttonContainer: { flexDirection: "column", marginVertical: e.spaces.space16, marginStart: e.spaces.space20 }, buttonContainerNarrow: { width: "100%", maxWidth: 550, marginStart: 0, flexDirection: "column", flexWrap: "wrap" }, ctaButton: { height: e.spaces.space40, marginBottom: e.spaces.space8, width: 420, flexGrow: 0, flexShrink: 0 }, ctaButtonNarrow: { marginStart: 0, width: "100%" }, cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 }, cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, background: { backgroundColor: e.colors.buttonBlack } }));
            function T(e, t = 100) {
                return (function (e, t = 100) {
                    const n = s.useMemo(
                        () =>
                            (0, i.Z)((t) => {
                                if (!e) return;
                                if (!t) return void e(null);
                                const n = t.getBoundingClientRect();
                                n && e(n);
                            }, t),
                        [e, t],
                    );
                    return s.useCallback(
                        (t) => {
                            const s = t;
                            if ("function" != typeof e) return;
                            const i = n.bind(null, s);
                            return (
                                i(),
                                window.addEventListener("resize", i),
                                s && a.Z.observe(s, i),
                                () => {
                                    window.removeEventListener("resize", i), a.Z.unobserveAll(s), n.cancel();
                                }
                            );
                        },
                        [e, n],
                    );
                })(
                    s.useMemo(
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
            function A(e) {
                const { featureSwitches: t } = s.useContext(o.rC),
                    n = T(e.onHeightChange);
                return t.isTrue("responsive_web_cookie_compliance_banner_enabled") ? s.createElement(C, { ref: n }) : null;
            }
        },
        664918: (e, t, n) => {
            "use strict";
            n.d(t, { D0: () => l, c$: () => u, fD: () => r, iB: () => m, jk: () => c });
            var s = n(366097),
                a = n(163889);
            const i = 2,
                o = 1e3,
                r = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, s.bL)(e);
                return t ? (d(t) ? (p(t) ? (t[1] ? r.AcceptAllCookies : t[2] ? r.RefuseNonEssentialCookies : ((0, a.ZP)("Invalid consent signal state"), r.Invalid)) : r.NotSet) : r.Invalid) : r.NotSet;
            }
            function c(e) {
                (0, s.kA)({ consent_version: i, text_version: o, 1: !0 }, e);
            }
            function u(e) {
                (0, s.kA)({ consent_version: i, text_version: o, 2: !0 }, e);
            }
            function d(e) {
                return !(e[1] && e[2]);
            }
            function p(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, s.bL)(e);
                return !t || !d(t) || !p(t) || t.consent_version < i || t.text_version < o;
            }
        },
        421023: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => s });
            const s = { page: "cookie_compliance_banner" };
        },
        6116: (e, t, n) => {
            "use strict";
            n.d(t, { O: () => c });
            var s = n(202784),
                a = n(323265),
                i = n(725516),
                o = n(443781),
                r = n(664918),
                l = n(421023);
            function c() {
                const e = (0, i.z)(),
                    { featureSwitches: t } = s.useContext(o.rC),
                    n = !!a.ZP.getTwitterAppVersion(),
                    [c, u] = s.useState(() => r.iB(t) && !n);
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
            n.d(t, { Z: () => y });
            n(543673), n(240753), n(128399);
            var s = n(202784),
                a = n(154003),
                i = n(108362),
                o = n(731708),
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
                g = "dTabHide",
                h = "dTabInfo";
            class b extends s.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderButtons = () => s.createElement(s.Fragment, null, s.createElement(a.ZP, { onClick: this._handleInfo, size: "xSmall", style: f.dtabBarButton, testID: h, type: "onMediaWhiteFilled" }, "ⓘ Info"), s.createElement(a.ZP, { onClick: this._handleClose, size: "xSmall", style: f.dtabBarButton, testID: g, type: "onMediaWhiteFilled" }, "↓ Hide"), s.createElement(a.ZP, { onClick: this._handleClear, size: "xSmall", style: f.dtabBarButton, testID: m, type: "destructiveFilled" }, "↺ Clear"))),
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
                            const { dtabAll: e, dtabRweb: t, setDtabBarInfo: n, ttsToken: s } = this.props;
                            this.setState({ show: !1 }), n({ dtabAll: e, dtabRweb: t, ttsToken: s, hide: !0 });
                        }),
                        (this._shouldShow = () => {
                            const { dtabAll: e, hide: t, ttsToken: n } = this.props;
                            return !(t || (!e && !n));
                        }),
                        (this.state = { show: this._shouldShow() });
                }
                render() {
                    const { dtabAll: e, ttsToken: t } = this.props,
                        n = t || e ? s.createElement(l.Z, { style: f.root }, s.createElement(i.Z, { isLarge: !0, style: f.container, withGutter: !0 }, s.createElement(o.ZP, { color: "whiteOnColor", numberOfLines: 1, size: "subtext2", style: f.text }, "Staging override is active"), this._renderButtons())) : null;
                    return this.state.show ? n : null;
                }
            }
            b.defaultProps = { hide: !1 };
            const f = r.default.create((e) => ({ root: { backgroundColor: e.colors.primary }, container: { alignItems: "center", flexDirection: "row", height: e.spaces.space40, justifyContent: "space-between" }, dtabBarButton: { margin: e.spaces.space8 }, text: { width: "100%" } })),
                y = p(b);
        },
        80309: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => F, UJ: () => T });
            var s = n(807896),
                a = (n(136728), n(202784)),
                i = n(251067),
                o = n(325686),
                r = n(392237),
                l = n(731708),
                c = n(111677),
                u = n.n(c),
                d = n(752624),
                p = n(516951),
                m = n(874627),
                g = n(994775),
                h = n(536387),
                b = n(163390),
                f = n(113840),
                y = n(500002),
                _ = n(443781),
                k = n(668214),
                w = n(919022);
            const S = (0, k.Z)()
                .propsFromState(() => ({ viewerUser: w.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const v = [...n(122758).M],
                P = u().b47e760e,
                C = u().fd2c7b44,
                E = new d.Z(),
                T = (e) => E.subscribe(e).unsubscribe;
            class A extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._bindKeyboardShortcuts = () => {
                            const { history: e, jotaiStore: t, viewerUserScreenName: n } = this.props,
                                s = (t, n = {}) => e.push({ pathname: t, state: { ...n, source: "keyboard_shortcut" } }),
                                a = (e) => (t) => {
                                    t.preventDefault(), E.getListeners().length ? E.notify(e) : s("/explore", { searchFocused: !0, searchPrefill: e });
                                },
                                o = { [b.uq.labs.openCommandCenter]: p.Z, [b.uq.search]: a(), [b.uq.goToUser]: a("@"), [b.uq.openKeyboardShortcuts]: () => s("/i/keyboard_shortcuts"), [b.uq.goExplore]: () => s("/explore"), [b.uq.goSettings]: () => s("/settings") },
                                r = (e) => ({ [b.uq.goProfile]: () => s(`/${e}`), [b.uq.goLikes]: () => s(`/${e}/likes`), [b.uq.goLists]: () => s(`/${e}/lists`) }),
                                l = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                c = n && l ? { ...r(n), [b.uq.goTopArticles]: () => s("/i/articles") } : n ? r(n) : {},
                                u = { ...o, ...c, [b.uq.toggleCommandCenter]: (0, i.fH)(i.vw.prod) ? p.Z : () => t.set(m._K), [b.uq.goHome]: () => s("/home"), [b.uq.goDisplay]: () => s("/i/display"), [b.uq.goNotifications]: () => s("/notifications"), [b.uq.goMentions]: () => s("/notifications/mentions"), [b.uq.goMessages]: () => s("/messages"), [b.uq.goGrok]: () => s("/i/grok"), [b.uq.newMessage]: () => s("/messages/compose"), [b.uq.newTweet]: () => s("/compose/post"), [b.uq.goBookmarks]: () => s("/i/bookmarks"), [b.uq.goToDrafts]: () => s("/compose/post/unsent/drafts"), [b.uq.goToScheduled]: () => s("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? u : o;
                            this._unbindKeyboardShortcuts = (0, g.Z)(d);
                        });
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts();
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts();
                }
                render() {
                    return this.props.viewerUserScreenName ? a.createElement(o.Z, { "aria-level": 2, role: "heading", style: r.default.visuallyHidden }, a.createElement(m.lk, null), a.createElement(l.ZP, null, P), a.createElement(l.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, C)) : null;
                }
            }
            A.contextType = _.rC;
            const Z = S(function (e) {
                    const t = (0, h.xO)();
                    return e.disabled ? null : a.createElement(A, (0, s.Z)({}, e, { jotaiStore: t }));
                }),
                F = (0, f.g)((0, y.ZP)(Z), v);
        },
        642028: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var s = n(202784),
                a = n(523561),
                i = n(125363),
                o = n(257166),
                r = n(390387),
                l = n(365265),
                c = n(312771),
                u = n(443781),
                d = n(736063);
            const p = { context: "intercom_stater" };
            function m() {
                const { featureSwitches: e, userClaims: t } = (0, u.QZ)(),
                    n = (0, i.v9)(r.Qb),
                    a = (0, i.v9)(o.selectFirstEmail),
                    m = (0, i.v9)(r.Lz),
                    h = (0, i.I0)(),
                    b = (0, i.v9)(l.VR) === c.ZP.LOADED,
                    f = (0, i.v9)(o.selectFetchStatus) === c.ZP.LOADED,
                    y = e.isTrue("responsive_web_verified_organizations_intercom_enabled") && t.isVerifiedOrg(),
                    _ = e.isTrue("responsive_web_intercom_support_capture_premium_enabled") && t.isAnyPremiumSubscriber(),
                    k = !y && _,
                    w = !m && !f,
                    S = y || _,
                    v = !w && (!k || b);
                return (
                    s.useEffect(() => {
                        n && S && (w && h((0, o.fetchDevicesIfNeeded)()), k && h((0, l.v1)()));
                    }, [h, S, n, k, w]),
                    S && v ? s.createElement(d.H, { errorConfig: p, suspenseFallback: null }, s.createElement(g, { email: a })) : null
                );
            }
            const g = (0, a.Z)({ loader: () => n.e("ondemand.Intercom").then(n.bind(n, 653934)) }),
                h = s.memo(m);
        },
        634518: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var s = n(202784),
                a = n(108362),
                i = n(731708),
                o = n(154003),
                r = n(392237),
                l = n(31667),
                c = n(355335);
            const u = (e) => {
                    const [t, n] = s.useState(!1),
                        { disableDev: r, isDev: u } = (0, c.Z)();
                    if (
                        (s.useEffect(() => {
                            n(u);
                        }, [u]),
                        t)
                    )
                        return s.createElement(l.Z, { style: d.root }, s.createElement(a.Z, { isLarge: !0, style: d.container, withGutter: !0 }, s.createElement(i.ZP, { "aria-label": "jetfuel dev bar", color: "whiteOnColor", numberOfLines: 1, size: "subtext2", style: d.text, withoutTwemojiAndHashflags: !0 }, s.createElement("span", { "aria-label": "rocket", role: "img" }, "🚀🚀🚀"), " Jetfuel Local Dev Mode"), s.createElement(o.ZP, { onClick: () => n(!1), size: "xSmall", style: d.dtabBarButton, type: "onMediaWhiteFilled" }, "↓ Hide"), s.createElement(o.ZP, { onClick: r, size: "xSmall", style: d.dtabBarButton, type: "destructiveFilled" }, "↺ Clear")));
                },
                d = r.default.create((e) => ({ root: { backgroundColor: e.colors.primary }, container: { alignItems: "center", flexDirection: "row", height: e.spaces.space40, justifyContent: "space-between" }, dtabBarButton: { margin: e.spaces.space8 }, text: { width: "100%" } }));
        },
        316391: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var s = n(202784),
                a = n(323265),
                i = n(668214),
                o = n(24546);
            const r = (0, i.Z)()
                .propsFromState(() => ({ previews: o.W }))
                .adjustStateProps(({ previews: e }) => ({ userHasUnsentTweets: Object.keys(e).length > 0 }))
                .propsFromActions(() => ({ sendAllPreviews: o.MH }))(
                ({ sendAllPreviews: e, userHasUnsentTweets: t }) => (
                    s.useEffect(() => {
                        const n = a.ZP.isMobileOS() ? "visibilitychange" : "beforeunload",
                            s = a.ZP.isMobileOS() ? document : window;
                        t ? s.addEventListener(n, e) : s.removeEventListener(n, e);
                    }, [e, t]),
                    null
                ),
            );
        },
        551415: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => B });
            var s = n(202784),
                a = n(107267),
                i = n(952793),
                o = n(529356),
                r = n(111677),
                l = n.n(r),
                c = n(684869),
                u = n(516951),
                d = n(725516),
                p = n(668214),
                m = n(922481);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ promptAllowed: m.selectIsEligibleForPushPrompt }))
                    .propsFromActions(() => ({ updatePromptStatus: m.updatePromptStatus, pushSubscribeLoggedOut: m.pushSubscribeLoggedOut }))
                    .withAnalytics({ component: "lo_notifications", element: "in_app_prompt" }),
                h = l().e5d26f84,
                b = l().e71e09ec,
                f = b,
                y = b,
                _ = l().hd50e064,
                k = (e) => {
                    const { promptAllowed: t, pushSubscribeLoggedOut: n, updatePromptStatus: a } = e,
                        [i, r] = s.useState(t),
                        l = (0, d.z)(),
                        u = s.useCallback(
                            (e) => {
                                l.scribeAction(e);
                            },
                            [l],
                        ),
                        p = s.useCallback(() => {
                            u("primary_cta"), a("inAppPrompt", "approved"), r(!1), n();
                        }, [n, u, a]),
                        m = s.useCallback(() => {
                            const { onDismiss: t } = e;
                            a("inAppPrompt", "dismissed"), r(!1), u("dismiss"), t();
                        }, [e, u, a]);
                    return (
                        s.useEffect(() => {
                            t && (u("impression"), r(!0), a("inAppPrompt", "seen"));
                        }, [a, t, u]),
                        t || i ? s.createElement(o.Z, { actionLabel: y, graphic: c.default, headline: f, onAction: p, onClose: m, onTertiaryAction: m, subtext: h, tertiaryActionLabel: _ }) : null
                    );
                };
            k.defaultProps = { message: h, onDismiss: u.Z };
            const w = g(s.memo(k));
            n(543673), n(240753), n(128399);
            var S = n(138099),
                v = n(711535),
                P = n(71620),
                C = n(601576);
            const E = (0, p.Z)()
                    .propsFromState(() => ({ browserPromptStatus: m.selectBrowserPromptStatus, arkosePromptStatus: m.selectArkosePromptStatus }))
                    .adjustStateProps(({ arkosePromptStatus: e, browserPromptStatus: t }) => ({ shouldShowPrompt: t === m.PromptStatus.APPROVED && e === m.PromptStatus.NOT_SEEN }))
                    .propsFromActions(() => ({ verifyArkoseTokenAndSavePushToken: m.verifyArkoseTokenAndSavePushToken, addToast: C.fz, updatePromptStatus: m.updatePromptStatus, createLocalApiErrorHandler: (0, P.zr)("arkose_challenge_logged_out_notifications") }))
                    .withAnalytics({ component: "lo_notifications", element: "arkose" }),
                T = l().g4850f44,
                A = (e) => {
                    const { addToast: t, analytics: n, createLocalApiErrorHandler: a, shouldShowPrompt: i, updatePromptStatus: o, verifyArkoseTokenAndSavePushToken: r } = e,
                        [l, c] = s.useState(i);
                    s.useEffect(() => {
                        i && (c(!0), o("arkosePrompt", m.PromptStatus.SEEN), n.scribeAction("show"));
                    }, [i, o, n]);
                    const u = s.useCallback(
                            (e) => {
                                n.scribeAction("complete"),
                                    r(e)
                                        .then(() => {
                                            o("arkosePrompt", m.PromptStatus.APPROVED), t({ text: T });
                                        })
                                        .catch(() => {
                                            a({});
                                        })
                                        .finally(() => {
                                            c(!1);
                                        });
                            },
                            [t, a, o, n, r],
                        ),
                        d = s.useCallback(() => {
                            n.scribeAction("fail"), o("arkosePrompt", m.PromptStatus.DISMISSED), c(!1);
                        }, [o, n]);
                    if (!i && !l) return null;
                    const p = new URLSearchParams(window.location.search).get("data") || void 0;
                    return s.createElement(S.Z, { enableMaskForDismiss: !1, type: "full", withMask: !0 }, s.createElement(v.default, { data: p, mobileKey: "arkose_challenge_lo_web_notification_mobile_prod", onChallengeCompleted: u, onChallengeFailed: d, webKey: "arkose_challenge_lo_web_notification_prod" }));
                },
                Z = E(s.memo(A));
            var F = n(997174),
                x = n(312771);
            const L = ["profile", "guide", "tweet", "topic_landing", "spheres_list", "live_event_timeline", "search"],
                D = (e) => {
                    const t = (0, F.wZ)(e);
                    return !!t && ((e) => -1 !== L.indexOf(e))(t);
                },
                K = (e) => (0, m.selectFetchStatus)(e) === x.ZP.LOADED,
                I = (e) => {
                    const { isPersistedDataLoaded: t, isSupportedNavPath: n } = e,
                        o = (0, a.useLocation)(),
                        r = (0, i.D2)("responsive_web_logged_out_notifications_enabled"),
                        l = s.useMemo(
                            () =>
                                ((e) => {
                                    const { pathname: t, query: n } = e;
                                    return ((e) => "/" === e)(t) || ((e) => !!e?.logout)(n) || ((e) => e.includes("/i/flow"))(t);
                                })(o),
                            [o],
                        );
                    if (!t || !n || l) return null;
                    return r.isTrue() && s.createElement(s.Fragment, null, s.createElement(w, null), s.createElement(Z, null));
                },
                B = (0, p.Z)()
                    .propsFromState(() => ({ isSupportedNavPath: D, isPersistedDataLoaded: K }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("LOGGED_OUT_NOTIFICATIONS") }))(s.memo(I));
        },
        331879: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var s = n(202784),
                a = n(292627),
                i = n(557707),
                o = n(392237),
                r = n(774654),
                l = n(292484),
                c = n(668214),
                u = n(601576);
            const d = (0, c.Z)()
                    .propsFromState(() => ({ toast: u.Sb }))
                    .propsFromActions(() => ({ onClose: u.RS })),
                p = "toast",
                m = o.default.create((e) => ({ toastStaysAboveSafeArea: { top: `calc(${o.default.iPhoneOffsetBottom} - ${r.ZM.getAppBarHeight()})` } })),
                g = d(({ onClose: e, toast: t }) => {
                    const n = (0, l.$h)(),
                        o = r.ZM.useCollapsibleNavBars(),
                        c = [...r.Ah({ elementPosition: "bottom" }), o && m.toastStaysAboveSafeArea];
                    if (!t) return null;
                    const u = n ? a.Z.ModalToasts : a.Z.Toasts;
                    return s.createElement(i.ZP, { LayerComponent: u, action: t.action, ariaOnly: t.ariaOnly, autoDismissDelay: t.autoDismissDelay, key: t.id, onClose: e, style: c, testID: p, text: t.text, variant: t.variant, withAutoDismiss: t.withAutoDismiss, withClearButton: t.withClearButton });
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-a2dee9c7.b2dec8ba.js.map
