(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"],
    {
        804027: (e, t, r) => {
            "use strict";
            r.d(t, { $T: () => B, $b: () => G, AA: () => v, Ae: () => z, CE: () => V, C_: () => L, D7: () => C, Dk: () => W, GN: () => J, Hm: () => U, IN: () => H, Iq: () => E, J$: () => N, QS: () => S, R8: () => m, RA: () => Y, TT: () => x, Ti: () => R, WZ: () => O, XD: () => D, Xb: () => P, YI: () => Z, ZF: () => k, ZJ: () => b, __: () => A, aD: () => y, bc: () => w, h0: () => I, ho: () => q, lS: () => M, q0: () => Q, qE: () => T, qJ: () => F, vY: () => j });
            var n = r(261214),
                o = r(956056),
                i = r(41065),
                a = r(53674),
                s = r(748138),
                u = r(487606),
                c = r(873990),
                l = r(435021),
                f = r(175564),
                h = r(711223),
                p = r(42635),
                d = r(964193),
                _ = r(916910),
                g = r(370751);
            const E = Object.freeze({ Abort: "abort", ChromelessWeb: "chromeless_web_link", Deeplink: "deep_link", DeeplinkAndAbort: "deep_link_and_abort", DeeplinkInPlace: "deep_link_in_place", Finish: "finish", Subtask: "subtask", Task: "task", Web: "web_link", WeblinkAndAbort: "web_link_and_abort" }),
                w = Object.freeze({ Allow: "allow", CancelFlow: "cancel_flow", HideExplicitCta: "hide_explicit_cta", Disallow: "disallow" }),
                m = Object.freeze({ Default: "default", BulletList: "bullet_list" }),
                b = Object.freeze({ DestructiveSecondary: "destructive_secondary", Primary: "primary", Secondary: "secondary", Text: "text", Brand: "brand", TwitterBrand: "twitter_brand" }),
                T = Object.freeze({ Small: "small", NormalCompact: "normal_compact", Normal: "normal", LargeCompact: "large_compact", Large: "large" }),
                y = (Object.freeze({ CheckmarkAndClose: "checkmark", Text: "text", ThumbsUpAndDown: "thumbs" }), Object.freeze({ Toolbar: "toolbar" }), Object.freeze({ Scrollable: "scrollable", Centered: "centered", CenteredHeader: "centered_header", HalfCover: "half_cover" })),
                S = Object.freeze({ Success: "success", Failure: "failure", Cancel: "cancel" }),
                A = Object.freeze({ Icon: "icon", FullWidth: "full_width", FullBleedTop: "full_bleed_top" }),
                v = Object.freeze({ PhoneOnly: "phone_only", EmailOnly: "email_only", PhoneThenEmail: "phone_then_email", EmailThenPhone: "email_then_phone" }),
                R = Object.freeze({ ActionList: "ACTION_LIST", AlertDialog: "ALERT_DIALOG", AlertDialogSupressClientEvents: "ALERT_DIALOG_SUPRESS_CLIENT_EVENTS", AppDownloadCTA: "APP_DOWNLOAD_CTA", AppLocaleUpdate: "APP_LOCALE_UPDATE", BrowsableNux: "BROWSABLE_NUX", CallToAction: "CALL_TO_ACTION", CheckLoggedInAccount: "CHECK_LOGGED_IN_ACCOUNT", ChoiceSelection: "CHOICE_SELECTION", ContactsLiveSyncPermissionPrompt: "CONTACTS_LIVE_SYNC_PERMISSION_PROMPT", EmailContactsSync: "EMAIL_CONTACTS_SYNC", EmailVerification: "EMAIL_VERIFICATION", EndFlow: "END_FLOW", EnterDate: "ENTER_DATE", EnterEmail: "ENTER_EMAIL", EnterPassword: "ENTER_PASSWORD", EnterPhone: "ENTER_PHONE", EnterRecaptcha: "ENTER_RECAPTCHA", EnterText: "ENTER_TEXT", EnterUsername: "ENTER_USERNAME", FetchPassword: "FETCH_PASSWORD", GenericURT: "GENERIC_URT", InAppNotification: "IN_APP_NOTIFICATION", InterestPicker: "INTEREST_PICKER", JsInstrumentation: "JS_INSTRUMENTATION", MenuDialog: "MENU_DIALOG", NotificationsPermissionPrompt: "NOTIFICATIONS_PERMISSION_PROMPT", OpenAccount: "OPEN_ACCOUNT", OpenHomeTimeline: "OPEN_HOME_TIMELINE", OpenLink: "OPEN_LINK", Passkey: "PASSKEY", PhoneVerification: "PHONE_VERIFICATION", PrivacyOptions: "PRIVACY_OPTIONS", Recaptcha: "RECAPTCHA", SecurityKey: "SECURITY_KEY", SelectAvatar: "SELECT_AVATAR", SelectBanner: "SELECT_BANNER", SettingsList: "SETTINGS_LIST", ShowCode: "SHOW_CODE", Signup: "SIGNUP", SignupReview: "SIGNUP_REVIEW", TopicsSelector: "TOPICS_SELECTOR", TweetSelectionURT: "TWEET_SELECTION_URT", TypeaheadSearch: "TYPEAHEAD_SEARCH", UpdateUsers: "UPDATE_USERS", UploadMedia: "UPLOAD_MEDIA", UserRecommendations: "USER_RECOMMENDATIONS_LIST", UserRecommendationsURT: "USER_RECOMMENDATIONS_URT", WaitSpinner: "WAIT_SPINNER", WebModal: "WEB_MODAL" }),
                O = (Object.freeze({ Centered: "centered", Left: "left" }), (0, g.Z)([R.EndFlow, R.FetchPassword, R.CheckLoggedInAccount, R.OpenAccount, R.OpenHomeTimeline, R.OpenLink, R.NotificationsPermissionPrompt, R.UploadMedia, R.WaitSpinner])),
                I = Object.freeze({ Action: "action", Boolean: "boolean", DestructiveAction: "destructive_action", PreciseLocation: "precise_location", SettingsGroup: "settings_group", StaticText: "static_text", Separator: "separator", TextField: "text_field", Button: "button", Tweet: "tweet" }),
                P = "setting_responses",
                C = "SignupSSOSubtask",
                k = Object.freeze({ AppleSSOButton: "apple_sso_button", GoogleSSOButton: "google_sso_button", NextButton: "next_button", UserIdentifier: "user_identifier" }),
                U = Object.freeze({ DEPRECATED_UnorderedList: "UnorderedList", DEPRECATED_ListItem: "ListItem", UnorderedList: "unordered_list", ListItem: "list_item" }),
                N = Object.freeze({ Normal: "Normal", Bold: "Bold" }),
                L = (Object.freeze({ Small: "Small", Normal: "Normal", Large: "Large", XLarge: "XLarge", Jumbo: "Jumbo" }), Object.freeze({ Qr: "qr", Text: "text" })),
                D = Object.freeze({ Avatar: "avatar", Banner: "banner" }),
                B = Object.freeze({ Success: "success", NotFound: "not_found", Error: "error" }),
                F = Object.freeze({ Favorite: "favorite", Follow: "follow", Reply: "reply", Retweet: "retweet" }),
                x = Object.freeze({ Checkbox: "checkbox", Follow: "follow" }),
                M = Object.freeze({ Tile: "tile", List: "list", TileFollowButton: "tile_follow_btn" }),
                Y = (Object.freeze({ Always: "always", Never: "never", Preprompt: "preprompt" }), Object.freeze({ Email: "email", Number: "number", Password: "password", Telephone: "telephone", Text: "text" })),
                j = Object.freeze({ ResendSms: "resend_sms", ResendVoice: "resend_voice", ResendEmail: "resend_email" }),
                z = Object.freeze({ Password: "password", NewPassword: "new_password", Text: "text" }),
                Z = Object.freeze({ Normal: "normal", Compact: "compact" }),
                W = Object.freeze({ Username: "username", Password: "password", NewPassword: "new_password", Text: "text" }),
                H = Object.freeze({ Mismatch: "mismatch" }),
                V = Object.freeze({ compact: "compact", stacked: "stacked" }),
                G = Object.freeze({ Fixed: "fixed", Floating: "floating", FloatingLarge: "floating_large" }),
                J = Object.freeze({ Default: "default", GoogleSSO: "google_sso", AppleSSO: "apple_sso" }),
                q = Object.freeze({ Impression: "impression", Click: "click" }),
                Q = (Object.freeze({ HeaderTitle: "header_title", HeaderSubtitle: "header_subtitle", SectionTitle: "section_title", Detail: "detail" }), Object.freeze({ All: "all", Users: "users", Topics: "topics", Events: "events" }), { logo_apple: n.default, logo_google_g_color: o.default, people_stroke: i.default, bar_chart: a.default, money: s.default, sparkle_stroke: u.default, topics_stroke: c.default, photo_person_stroke: l.default, promoted_pill_stroke: f.default, information_circle: h.default, pin_circle_fill: p.default, safety_mode_stroke: d.default, at: _.default });
        },
        118823: (e, t, r) => {
            "use strict";
            r.d(t, { WP: () => ne, R2: () => re, YW: () => J, Ig: () => ee, n8: () => $, YU: () => ae, Ai: () => se, Lw: () => H, z_: () => Q, qE: () => q, tY: () => oe, iD: () => G, jv: () => M, or: () => L, UD: () => N, cu: () => k, b: () => z, Du: () => V, zj: () => Y, W2: () => B, uz: () => F, Lg: () => D, li: () => x, $B: () => j, B7: () => U, aR: () => Z, Wl: () => ie, YF: () => te, d7: () => ue, if: () => K });
            r(543673), r(240753), r(128399);
            var n = r(695003),
                o = r.n(n),
                i = r(370751),
                a = r(31326);
            var s = r(389073),
                u = r(615656),
                c = r(163889),
                l = r(804027),
                f = r(153925),
                h = r(499627),
                p = r(917799),
                d = r(312771);
            const _ = "ocf",
                g = "rweb.ocf",
                E = "success",
                w = Object.freeze({ REQUEST: "rweb/ocf/FETCH_REQUEST", SUCCESS: "rweb/ocf/FETCH_SUCCESS", FAILURE: "rweb/ocf/FETCH_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/ocf/START_REQUEST", SUCCESS: "rweb/ocf/START_SUCCESS", FAILURE: "rweb/ocf/START_FAILURE" }),
                b = "rweb/ocf/CLEAR",
                T = "rweb/ocf/UPDATE",
                y = "rweb/ocf/NAVIGATE",
                S = "rweb/ocf/RESUME",
                A = "rweb/ocf/ATTRIBUTE",
                v = Object.freeze({ REQUEST: "rweb/ocf/VERIFY_IDENTIFIER_REQUEST", SUCCESS: "rweb/ocf/VERIFY_IDENTIFIER_SUCCESS", FAILURE: "rweb/ocf/VERIFY_IDENTIFIER_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/ocf/FETCH_BROWSABLE_NUX_RECOMMENDATIONS_REQUEST", SUCCESS: "rweb/ocf/FETCH_BROWSABLE_NUX_RECOMMENDATIONS_SUCCESS", FAILURE: "rweb/ocf/FETCH_BROWSABLE_NUX_RECOMMENDATIONS_FAILURE" }),
                O = (0, i.Z)(["signup"]),
                I = { currentSubtask: void 0, previouslySubmittedSubtaskId: void 0, failureMessage: "", fetchStatus: d.ZP.NONE, flowName: void 0, flowToken: void 0, shouldAbort: !1, shouldEndFlow: !1, submitFailed: !1, startLocation: void 0, subtasks: [], subtaskInputs: {}, navigationContext: { action: "", link: "" }, navigationStack: [], flowData: {}, sendPinCode: !1, browsableNuxRecommendations: [] },
                P = (e) => {
                    const t = e && (0, f.uL)(e);
                    return t === l.Ti.EmailVerification || t === l.Ti.PhoneVerification;
                },
                C = (e) => e === u.ZP.ValidationFailure || e === u.ZP.OnboardingFlowFailure || e === u.ZP.OnboardingFlowRetriableFailure;
            h.Z.register({
                [_]: function (e = I, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case m.REQUEST:
                            return { ...I, fetchStatus: d.ZP.LOADING, flowName: t.meta?.flowName, startLocation: e.startLocation };
                        case w.REQUEST:
                            return { ...e, fetchStatus: d.ZP.LOADING, submitFailed: !1 };
                        case y: {
                            const { navigationContext: r, navigationStack: n, sendPinCode: o, subtaskInputs: i } = t.payload ?? {},
                                a = { ...e.subtaskInputs };
                            for (const e in a) i[e] && delete a[e];
                            return { ...e, currentSubtask: e.subtasks.find((e) => e.subtask_id === t.payload?.subtaskId), navigationContext: r, subtaskInputs: a, submitFailed: !1, navigationStack: n, sendPinCode: o };
                        }
                        case A:
                            return { ...e, startLocation: t.payload };
                        case T: {
                            const { flowData: r, subtaskInputs: n } = t.payload ?? {};
                            return { ...e, subtaskInputs: { ...e.subtaskInputs, ...n }, flowData: { ...e.flowData, ...r } };
                        }
                        case m.FAILURE: {
                            const r = t.payload?.errors[0].code,
                                n = t.payload?.errors[0].message,
                                o = r !== s.Z.Offline,
                                i = C(r) ? n : void 0;
                            return { ...e, fetchStatus: d.ZP.FAILED, failureMessage: i, shouldAbort: o };
                        }
                        case w.FAILURE: {
                            "/i/conferences-room" === new URLSearchParams(window.location.search).get("redirect_after_login") &&
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1e4);
                            const r = t.payload?.errors[0].code,
                                n = t.payload?.errors[0].message,
                                o = C(r) ? n : void 0,
                                i = !((e, t) => {
                                    const r = void 0 !== e && (e === s.Z.Offline || e === u.ZP.ValidationFailure || e === u.ZP.OnboardingFlowRetriableFailure),
                                        n = t && (0, f.uL)(t),
                                        o = !!n && !l.WZ.has(n);
                                    return r && o;
                                })(r, e.currentSubtask);
                            return { ...e, previouslySubmittedSubtaskId: e.currentSubtask?.subtask_id, fetchStatus: d.ZP.LOADED, failureMessage: o, shouldAbort: i, submitFailed: !0 };
                        }
                        case v.FAILURE: {
                            const r = t.payload?.errors[0].code,
                                n = t.payload?.errors[0].message,
                                o = C(r) ? n : void 0;
                            return { ...e, verificationSendFailureMessage: o, sendPinCode: !1 };
                        }
                        case m.SUCCESS:
                        case w.SUCCESS: {
                            const { flow_token: r, subtasks: n } = t.payload ?? {},
                                { isTaskNavigation: o } = t.meta ?? {},
                                i = n && n.length ? n[0] : void 0,
                                a = P(i),
                                s = !!o && !i;
                            return { ...e, previouslySubmittedSubtaskId: e.currentSubtask?.subtask_id, currentSubtask: i, fetchStatus: d.ZP.LOADED, flowToken: r, sendPinCode: a, shouldEndFlow: s, submitFailed: !1, subtasks: n, subtaskInputs: {}, navigationStack: i ? [i.subtask_id] : [], shouldAbort: !1 };
                        }
                        case b:
                            return { ...I };
                        case S:
                            return t.payload ?? e;
                        case v.REQUEST:
                            return { ...e, verificationSendFailureMessage: void 0, sendPinCode: !1 };
                        case R.REQUEST:
                            return { ...e };
                        case R.SUCCESS: {
                            const { flow_token: r } = t.payload;
                            return { ...e, browsableNuxRecommendations: [...e.browsableNuxRecommendations, ...t.payload.user_recommendations], ...(r && { flowToken: r }), fetchStatus: d.ZP.LOADED };
                        }
                        case R.FAILURE:
                            return { ...e, fetchStatus: d.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const k = (e) => e[_].flowToken,
                U = (e) => e[_].subtasks,
                N = (e) => e[_].fetchStatus,
                L = (e) => e[_].failureMessage,
                D = (e) => e[_].startLocation,
                B = (e) => e[_].shouldAbort,
                F = (e) => e[_].shouldEndFlow,
                x = (e) => e[_].submitFailed,
                M = (e) => e[_].currentSubtask,
                Y = (e) => e[_].previouslySubmittedSubtaskId,
                j = (e) => e[_].subtaskInputs,
                z = (e) => e[_].navigationContext,
                Z = (e) => e[_].verificationSendFailureMessage,
                W = (e) => e[_].navigationStack,
                H = (e) => !!e.alert_dialog || !!e.menu_dialog || e?.cta?.style === l.aD.HalfCover,
                V = (e) => {
                    const t = W(e),
                        r = U(e);
                    return t
                        .slice(0, -1)
                        .reverse()
                        .find((e) => {
                            const t = r.find((t) => t.subtask_id === e);
                            return t && !H(t);
                        });
                },
                G = (e) => e[_].browsableNuxRecommendations,
                J = (e) => {
                    const t =
                        (t = {}) =>
                        (r, n, { api: o, userPersistence: i }) => {
                            const { flow_name: a } = t;
                            return (0, p._O)(r, { params: t, request: e.task(o) })({ actionTypes: m, context: "START_FLOW", meta: { flowName: a } }).then((e) => (a && O.has(a) && e.statusText === E && i.set(g, { [a]: n()[_] }), e));
                        };
                    return {
                        clearFlow:
                            ({ clearPersistence: e } = {}) =>
                            (t, r, { userPersistence: n }) => {
                                e && n.set(g, {}), t({ type: b });
                            },
                        startFlow:
                            (e = {}) =>
                            (r, n, { api: o, userPersistence: i }) => {
                                const { flow_name: a } = e;
                                return (O.has(a) || "__OCF_2FA_X_CHALLENGE__" in window ? i.get(g, 36e5) : Promise.resolve(void 0)).then((n) => (a && n && n[a] ? r({ payload: n[a], type: S }) : r(t(e))));
                            },
                        submitFlow:
                            ({ isTaskNavigation: t, ...r } = {}) =>
                            (n, o, { api: i, userPersistence: a }) => {
                                const s = o(),
                                    u = k(s),
                                    c = U(s),
                                    l = j(s),
                                    f = X(c, l),
                                    h = { ...r, flow_token: u, subtask_inputs: f };
                                return (0, p._O)(n, { params: h, request: e.task(i) })({ actionTypes: w, context: "SUBMIT_FLOW", meta: { isTaskNavigation: t } }).then((e) => {
                                    const t = o()[_];
                                    if (t.flowName) {
                                        const r = t.subtasks?.find(({ security_key: e }) => e)?.security_key,
                                            n = a.set(g, { [t.flowName]: t.subtasks.length && (e.statusText === E || r) ? t : void 0 });
                                        if (r) {
                                            const t = JSON.parse(r.challenge);
                                            if (window.location.host.includes("x.com") && "x.com" !== t.rp?.id && "x.com" !== t.publicKeyCredentialRequestOptions?.rpId)
                                                return n.then(
                                                    () => (
                                                        ((e) => {
                                                            const t = document.createElement("form");
                                                            t.setAttribute("action", window.location.href), t.setAttribute("method", "post"), t.setAttribute("name", "f");
                                                            const r = document.createElement("input");
                                                            r.setAttribute("type", "hidden"), r.setAttribute("name", "payload"), r.setAttribute("value", encodeURIComponent(e)), t.appendChild(r), document.body.appendChild(t), t.submit();
                                                        })(JSON.stringify({ action: r.action_type, challenge: JSON.parse(r.challenge), timeout: 6e4 })),
                                                        e
                                                    ),
                                                );
                                        }
                                    }
                                    return e;
                                });
                            },
                        updateFlow:
                            (e, t = {}, r = {}) =>
                            (n, o) => {
                                n({ type: T, payload: { subtaskId: e, subtaskInputs: { [e]: t }, flowData: r } });
                            },
                    };
                },
                q = J({ task: (e) => e.withEndpoint(a.Z).task }),
                Q =
                    ({ destructive: e, fromHiddenSubtask: t, navigationContext: r, subtaskId: n }) =>
                    (o, i) => {
                        const a = i(),
                            s = W(a),
                            u = s.indexOf(n);
                        let c = [],
                            f = {};
                        if (t && s.length) c = s.slice(0, -1).concat([n]);
                        else if (-1 === u) c = s.concat([n]);
                        else {
                            const t = u + 1;
                            (c = s.slice(0, t)), e && (f = s.slice(t, s.length).reduce((e, t) => ({ ...e, [t]: {} }), {}));
                        }
                        const h = (
                                (e) => (t) =>
                                    e[_].subtasks.find((e) => e.subtask_id === t)
                            )(a)(n || ""),
                            p = r && r.action,
                            d = p === l.vY.ResendSms || p === l.vY.ResendVoice || p === l.vY.ResendEmail;
                        "clear" === p && n && (f[n] = {});
                        const g = P(h) && (!p || d);
                        o({ type: y, payload: { navigationContext: { action: "", ...r }, sendPinCode: g, subtaskId: n, subtaskInputs: f, navigationStack: c } });
                    },
                X = (e, t) =>
                    Object.keys(t)
                        .map((r) => {
                            const n = e.find((e) => e.subtask_id === r);
                            if (!n) {
                                const t = e.map((e) => e.subtask_id).join(",");
                                return (0, c.ZP)(`Missing subtask for input: ${r}`, { extra: { subtaskIds: t } }), null;
                            }
                            const o = (0, f.JJ)(n);
                            return o ? { subtask_id: n.subtask_id, [o]: t[r] } : { subtask_id: n.subtask_id };
                        })
                        .filter(Boolean);
            const $ = (e, t) => (r, n, i) => {
                    const { next_link: a, should_generate: s } = t,
                        { flowData: u } = n()[_],
                        c = s ? o()(Math.ceil(10)).toString("hex").slice(0, 20) : u.OCF_GENERATED_PASSWORD;
                    q.updateFlow(e, { password: c, link: a.link_id }, { OCF_GENERATED_PASSWORD: c })(r, n, i);
                },
                K =
                    (e) =>
                    (t, r, { api: n }) => {
                        if (r()[_].sendPinCode || void 0 !== e.arkose_access_token) {
                            const o = e.flow_token ?? k(r()),
                                i = { ...e, flow_token: o };
                            return (0, p._O)(t, { params: i, request: n.withEndpoint(a.Z).verifyUserIdentifier })({ actionTypes: v, context: "VERIFY_IDENTIFIER" });
                        }
                        return Promise.resolve({ normalized_phone_number: void 0 });
                    },
                ee =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, p._O)(t, { params: e, request: n.withEndpoint(a.Z).getBrowsableNuxRecommendations })({ actionTypes: R, context: "FETCH_BROWSABLE_NUX_RECOMMENDATIONS" }),
                te = (e, t) => (r, n) => {
                    const { page: o } = e || {},
                        { event_id: i, profile_id: a, search_details: s, tweet_id: u } = t || {};
                    let c;
                    "front" === o ? (c = { location: "splash_screen" }) : "login" === o ? (c = { location: "login" }) : "home" === o ? (c = { location: "home" }) : "settings" === o ? (c = { location: "settings" }) : a ? (c = { location: "profile", profile: { profile_id: a } }) : s ? (c = { location: "search", search: s }) : u ? (c = { location: "tweet", tweet: { tweet_id: u } }) : i && (c = { location: "event", event: { event_id: i } }), c && r({ type: A, payload: c });
                },
                re =
                    (e, t = {}) =>
                    (r, n, { api: o }) =>
                        o.withEndpoint(a.Z).callOnboardingPath(e, t),
                ne =
                    (e) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).callInteractiveSpinnerPath(e),
                oe =
                    (e = {}) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).removeContacts(e),
                ie =
                    (e) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).syncContacts(e),
                ae =
                    (e = {}) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).getContactsImportStatus(e),
                se =
                    (e) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).getVerificationStatus(e),
                ue =
                    (e) =>
                    (t, r, { api: n }) =>
                        n.withEndpoint(a.Z).verificationLink(e);
        },
        153925: (e, t, r) => {
            "use strict";
            r.d(t, { $1: () => l, Di: () => m, Ds: () => s, JJ: () => E, OA: () => _, OG: () => a, Rs: () => c, Yr: () => f, _w: () => b, cR: () => T, eU: () => h, jb: () => u, sI: () => p, uL: () => w });
            r(202784);
            var n = r(370751),
                o = r(163889),
                i = r(804027);
            function a(e, t, r) {
                const { key: n, subtask_id: o } = t,
                    i = e[o] && e[o][n];
                return void 0 === i ? r : i;
            }
            function s(e, t, r) {
                return t.string ? t.string : t.subtask_data_reference ? a(e, t.subtask_data_reference, r) : r;
            }
            const u = (e) =>
                    (e ? e.split(",") : []).reduce((e, t) => {
                        const [r, n] = t.split(":", 2);
                        return r && n && (e[r] = n), e;
                    }, {}),
                c = (e, t) => ({ ...e, ...(t ? JSON.parse(t) : {}) }),
                l = (e) => {
                    switch (e) {
                        case i.ZJ.Primary:
                            return "primaryFilled";
                        case i.ZJ.Secondary:
                            return "primaryOutlined";
                        case i.ZJ.Text:
                            return "primaryText";
                        case i.ZJ.DestructiveSecondary:
                            return "destructiveOutlined";
                        case i.ZJ.Brand:
                            return "brandText";
                        default:
                            return (0, o.ZP)(`Unknown Button Style ${e}`), "brandFilled";
                    }
                },
                f = (e) => {
                    switch (e) {
                        case i.qE.Small:
                            return "xSmall";
                        case i.qE.NormalCompact:
                            return "small";
                        case i.qE.LargeCompact:
                        case i.qE.Large:
                            return "xLarge";
                        case i.qE.Normal:
                            return "medium";
                        default:
                            return (0, o.ZP)(`Unknown Button Size ${e}`), "medium";
                    }
                },
                h = (e) => {
                    switch (e) {
                        case i.J$.Normal:
                            return "normal";
                        case i.J$.Bold:
                            return "bold";
                        default:
                            return;
                    }
                },
                p = (e) => {
                    switch (e) {
                        case "google_sso":
                            return i.GN.GoogleSSO;
                        case "apple_id":
                            return i.GN.AppleSSO;
                        default:
                            return i.GN.Default;
                    }
                },
                d = {
                    action_list: i.Ti.ActionList,
                    alert_dialog: i.Ti.AlertDialog,
                    alert_dialog_suppress_client_events: i.Ti.AlertDialogSupressClientEvents,
                    app_download_cta: i.Ti.AppDownloadCTA,
                    app_locale_update: i.Ti.AppLocaleUpdate,
                    browsable_nux: i.Ti.BrowsableNux,
                    callbacks: null,
                    check_logged_in_account: i.Ti.CheckLoggedInAccount,
                    choice_selection: i.Ti.ChoiceSelection,
                    contacts_live_sync_permission_prompt: i.Ti.ContactsLiveSyncPermissionPrompt,
                    cta: i.Ti.CallToAction,
                    email_contacts_sync: i.Ti.EmailContactsSync,
                    email_verification: i.Ti.EmailVerification,
                    end_flow: i.Ti.EndFlow,
                    enter_date: i.Ti.EnterDate,
                    enter_email: i.Ti.EnterEmail,
                    enter_password: i.Ti.EnterPassword,
                    enter_phone: i.Ti.EnterPhone,
                    enter_recaptcha: i.Ti.EnterRecaptcha,
                    enter_text: i.Ti.EnterText,
                    enter_username: i.Ti.EnterUsername,
                    fetch_temporary_password: i.Ti.FetchPassword,
                    generic_urt: i.Ti.GenericURT,
                    in_app_notification: i.Ti.InAppNotification,
                    interest_picker: i.Ti.InterestPicker,
                    js_instrumentation: i.Ti.JsInstrumentation,
                    menu_dialog: i.Ti.MenuDialog,
                    notifications_permission_prompt: i.Ti.NotificationsPermissionPrompt,
                    open_account: i.Ti.OpenAccount,
                    open_home_timeline: i.Ti.OpenHomeTimeline,
                    open_link: i.Ti.OpenLink,
                    passkey: i.Ti.Passkey,
                    phone_verification: i.Ti.PhoneVerification,
                    privacy_options: i.Ti.PrivacyOptions,
                    progress_indication: null,
                    recaptcha: i.Ti.Recaptcha,
                    security_key: i.Ti.SecurityKey,
                    select_avatar: i.Ti.SelectAvatar,
                    select_banner: i.Ti.SelectBanner,
                    settings_list: i.Ti.SettingsList,
                    show_code: i.Ti.ShowCode,
                    sign_up: i.Ti.Signup,
                    sign_up_review: i.Ti.SignupReview,
                    subtask_back_navigation: null,
                    subtask_back_navigation_link: null,
                    subtask_id: null,
                    topics_selector: i.Ti.TopicsSelector,
                    tweet_selection_urt: i.Ti.TweetSelectionURT,
                    typeahead_search: i.Ti.TypeaheadSearch,
                    update_users: i.Ti.UpdateUsers,
                    upload_media: i.Ti.UploadMedia,
                    user_recommendations_list: i.Ti.UserRecommendations,
                    user_recommendations_urt: i.Ti.UserRecommendationsURT,
                    wait_spinner: i.Ti.WaitSpinner,
                    web_modal: i.Ti.WebModal,
                },
                _ = { action_list: 2, alert_dialog: 1, app_download_cta: 1, check_logged_in_account: 1, choice_selection: 3, contacts_live_sync_permission_prompt: "contacts" in navigator && "ContactsManager" in window ? 1 : 0, cta: 7, email_verification: 2, end_flow: 1, enter_date: 1, enter_email: 2, enter_password: 5, enter_phone: 2, enter_recaptcha: 1, enter_text: 5, enter_username: 2, generic_urt: 3, in_app_notification: 1, interest_picker: 3, js_instrumentation: 1, menu_dialog: 1, notifications_permission_prompt: 2, open_account: 2, open_home_timeline: 1, open_link: 1, phone_verification: 4, privacy_options: 1, security_key: 3, select_avatar: 4, select_banner: 2, settings_list: 7, show_code: 1, sign_up: 2, sign_up_review: 4, tweet_selection_urt: 1, update_users: 1, upload_media: 1, user_recommendations_list: 4, user_recommendations_urt: 1, wait_spinner: 3, web_modal: 1 },
                g = (0, n.Z)([i.Ti.AlertDialogSupressClientEvents]),
                E = (e) => (e && Object.keys(e).find((e) => d[e])) || null,
                w = (e) => {
                    const t = E(e);
                    return t ? d[t] : null;
                },
                m = (e) => {
                    const t = w(e);
                    return !!t && g.has(t);
                },
                b = (e) => e === i.h0.Boolean || e === i.h0.PreciseLocation,
                T = (e) => ({ uri: e.image_info.url, width: e.image_info.width, height: e.image_info.height });
        },
        595766: (e, t) => {
            "use strict";
            (t.byteLength = function (e) {
                var t = s(e),
                    r = t[0],
                    n = t[1];
                return (3 * (r + n)) / 4 - n;
            }),
                (t.toByteArray = function (e) {
                    var t,
                        r,
                        i = s(e),
                        a = i[0],
                        u = i[1],
                        c = new o(
                            (function (e, t, r) {
                                return (3 * (t + r)) / 4 - r;
                            })(0, a, u),
                        ),
                        l = 0,
                        f = u > 0 ? a - 4 : a;
                    for (r = 0; r < f; r += 4) (t = (n[e.charCodeAt(r)] << 18) | (n[e.charCodeAt(r + 1)] << 12) | (n[e.charCodeAt(r + 2)] << 6) | n[e.charCodeAt(r + 3)]), (c[l++] = (t >> 16) & 255), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t);
                    2 === u && ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)), (c[l++] = 255 & t));
                    1 === u && ((t = (n[e.charCodeAt(r)] << 10) | (n[e.charCodeAt(r + 1)] << 4) | (n[e.charCodeAt(r + 2)] >> 2)), (c[l++] = (t >> 8) & 255), (c[l++] = 255 & t));
                    return c;
                }),
                (t.fromByteArray = function (e) {
                    for (var t, n = e.length, o = n % 3, i = [], a = 16383, s = 0, c = n - o; s < c; s += a) i.push(u(e, s, s + a > c ? c : s + a));
                    1 === o ? ((t = e[n - 1]), i.push(r[t >> 2] + r[(t << 4) & 63] + "==")) : 2 === o && ((t = (e[n - 2] << 8) + e[n - 1]), i.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
                    return i.join("");
                });
            for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a) (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
            function s(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
            }
            function u(e, t, n) {
                for (var o, i, a = [], s = t; s < n; s += 3) (o = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])), a.push(r[((i = o) >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]);
                return a.join("");
            }
            (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        348834: (e, t, r) => {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */ var n = r(595766),
                o = r(462333),
                i = r(77906);
            function a() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = u.prototype) : (null === e && (e = new u(t)), (e.length = t)), e;
            }
            function u(e, t, r) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return f(this, e);
                }
                return c(this, e, t, r);
            }
            function c(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                    ? (function (e, t, r, n) {
                          if ((t.byteLength, r < 0 || t.byteLength < r)) throw new RangeError("'offset' is out of bounds");
                          if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                          t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                          u.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = u.prototype) : (e = h(e, t));
                          return e;
                      })(e, t, r, n)
                    : "string" == typeof t
                      ? (function (e, t, r) {
                            ("string" == typeof r && "" !== r) || (r = "utf8");
                            if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                            var n = 0 | d(t, r);
                            e = s(e, n);
                            var o = e.write(t, r);
                            o !== n && (e = e.slice(0, o));
                            return e;
                        })(e, t, r)
                      : (function (e, t) {
                            if (u.isBuffer(t)) {
                                var r = 0 | p(t.length);
                                return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e;
                            }
                            if (t) {
                                if (("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : h(e, t);
                                if ("Buffer" === t.type && i(t.data)) return h(e, t.data);
                            }
                            var n;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                        })(e, t);
            }
            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative');
            }
            function f(e, t) {
                if ((l(t), (e = s(e, t < 0 ? 0 : 0 | p(t))), !u.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < t; ++r) e[r] = 0;
                return e;
            }
            function h(e, t) {
                var r = t.length < 0 ? 0 : 0 | p(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e;
            }
            function p(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e;
            }
            function d(e, t) {
                if (u.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1; ; )
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return j(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return z(e).length;
                        default:
                            if (n) return j(e).length;
                            (t = ("" + t).toLowerCase()), (n = !0);
                    }
            }
            function _(e, t, r) {
                var n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
                if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                    switch (e) {
                        case "hex":
                            return C(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return R(this, t, r);
                        case "ascii":
                            return I(this, t, r);
                        case "latin1":
                        case "binary":
                            return P(this, t, r);
                        case "base64":
                            return v(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (n = !0);
                    }
            }
            function g(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
            }
            function E(e, t, r, n, o) {
                if (0 === e.length) return -1;
                if (("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), (r = +r), isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)) {
                    if (o) return -1;
                    r = e.length - 1;
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0;
                }
                if (("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t))) return 0 === t.length ? -1 : w(e, t, r, n, o);
                if ("number" == typeof t) return (t &= 255), u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r)) : w(e, [t], r, n, o);
                throw new TypeError("val must be string, number or Buffer");
            }
            function w(e, t, r, n, o) {
                var i,
                    a = 1,
                    s = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    (a = 2), (s /= 2), (u /= 2), (r /= 2);
                }
                function c(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (o) {
                    var l = -1;
                    for (i = r; i < s; i++)
                        if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                            if ((-1 === l && (l = i), i - l + 1 === u)) return l * a;
                        } else -1 !== l && (i -= i - l), (l = -1);
                } else
                    for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
                        for (var f = !0, h = 0; h < u; h++)
                            if (c(e, i + h) !== c(t, h)) {
                                f = !1;
                                break;
                            }
                        if (f) return i;
                    }
                return -1;
            }
            function m(e, t, r, n) {
                r = Number(r) || 0;
                var o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : (n = o);
                var i = t.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                n > i / 2 && (n = i / 2);
                for (var a = 0; a < n; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[r + a] = s;
                }
                return a;
            }
            function b(e, t, r, n) {
                return Z(j(t, e.length - r), e, r, n);
            }
            function T(e, t, r, n) {
                return Z(
                    (function (e) {
                        for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t;
                    })(t),
                    e,
                    r,
                    n,
                );
            }
            function y(e, t, r, n) {
                return T(e, t, r, n);
            }
            function S(e, t, r, n) {
                return Z(z(t), e, r, n);
            }
            function A(e, t, r, n) {
                return Z(
                    (function (e, t) {
                        for (var r, n, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) (n = (r = e.charCodeAt(a)) >> 8), (o = r % 256), i.push(o), i.push(n);
                        return i;
                    })(t, e.length - r),
                    e,
                    r,
                    n,
                );
            }
            function v(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
            }
            function R(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r; ) {
                    var i,
                        a,
                        s,
                        u,
                        c = e[o],
                        l = null,
                        f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + f <= r)
                        switch (f) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 == (192 & (i = e[o + 1])) && (u = ((31 & c) << 6) | (63 & i)) > 127 && (l = u);
                                break;
                            case 3:
                                (i = e[o + 1]), (a = e[o + 2]), 128 == (192 & i) && 128 == (192 & a) && (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                (i = e[o + 1]), (a = e[o + 2]), (s = e[o + 3]), 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 && u < 1114112 && (l = u);
                        }
                    null === l ? ((l = 65533), (f = 1)) : l > 65535 && ((l -= 65536), n.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))), n.push(l), (o += f);
                }
                return (function (e) {
                    var t = e.length;
                    if (t <= O) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += O)));
                    return r;
                })(n);
            }
            (t.Buffer = u),
                (t.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return u.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (u.TYPED_ARRAY_SUPPORT =
                    void 0 !== r.g.TYPED_ARRAY_SUPPORT
                        ? r.g.TYPED_ARRAY_SUPPORT
                        : (function () {
                              try {
                                  var e = new Uint8Array(1);
                                  return (
                                      (e.__proto__ = {
                                          __proto__: Uint8Array.prototype,
                                          foo: function () {
                                              return 42;
                                          },
                                      }),
                                      42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                                  );
                              } catch (e) {
                                  return !1;
                              }
                          })()),
                (t.kMaxLength = a()),
                (u.poolSize = 8192),
                (u._augment = function (e) {
                    return (e.__proto__ = u.prototype), e;
                }),
                (u.from = function (e, t, r) {
                    return c(null, e, t, r);
                }),
                u.TYPED_ARRAY_SUPPORT && ((u.prototype.__proto__ = Uint8Array.prototype), (u.__proto__ = Uint8Array), "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })),
                (u.alloc = function (e, t, r) {
                    return (function (e, t, r, n) {
                        return l(t), t <= 0 ? s(e, t) : void 0 !== r ? ("string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r)) : s(e, t);
                    })(null, e, t, r);
                }),
                (u.allocUnsafe = function (e) {
                    return f(null, e);
                }),
                (u.allocUnsafeSlow = function (e) {
                    return f(null, e);
                }),
                (u.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer);
                }),
                (u.compare = function (e, t) {
                    if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                        if (e[o] !== t[o]) {
                            (r = e[o]), (n = t[o]);
                            break;
                        }
                    return r < n ? -1 : n < r ? 1 : 0;
                }),
                (u.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1;
                    }
                }),
                (u.concat = function (e, t) {
                    if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return u.alloc(0);
                    var r;
                    if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                    var n = u.allocUnsafe(t),
                        o = 0;
                    for (r = 0; r < e.length; ++r) {
                        var a = e[r];
                        if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(n, o), (o += a.length);
                    }
                    return n;
                }),
                (u.byteLength = d),
                (u.prototype._isBuffer = !0),
                (u.prototype.swap16 = function () {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                    return this;
                }),
                (u.prototype.swap32 = function () {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                    return this;
                }),
                (u.prototype.swap64 = function () {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                    return this;
                }),
                (u.prototype.toString = function () {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : _.apply(this, arguments);
                }),
                (u.prototype.equals = function (e) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e);
                }),
                (u.prototype.inspect = function () {
                    var e = "",
                        r = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (e += " ... ")), "<Buffer " + e + ">";
                }),
                (u.prototype.compare = function (e, t, r, n, o) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if ((void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length)) throw new RangeError("out of range index");
                    if (n >= o && t >= r) return 0;
                    if (n >= o) return -1;
                    if (t >= r) return 1;
                    if (this === e) return 0;
                    for (var i = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(i, a), c = this.slice(n, o), l = e.slice(t, r), f = 0; f < s; ++f)
                        if (c[f] !== l[f]) {
                            (i = c[f]), (a = l[f]);
                            break;
                        }
                    return i < a ? -1 : a < i ? 1 : 0;
                }),
                (u.prototype.includes = function (e, t, r) {
                    return -1 !== this.indexOf(e, t, r);
                }),
                (u.prototype.indexOf = function (e, t, r) {
                    return E(this, e, t, r, !0);
                }),
                (u.prototype.lastIndexOf = function (e, t, r) {
                    return E(this, e, t, r, !1);
                }),
                (u.prototype.write = function (e, t, r, n) {
                    if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                    else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        (t |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                    }
                    var o = this.length - t;
                    if (((void 0 === r || r > o) && (r = o), (e.length > 0 && (r < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var i = !1; ; )
                        switch (n) {
                            case "hex":
                                return m(this, e, t, r);
                            case "utf8":
                            case "utf-8":
                                return b(this, e, t, r);
                            case "ascii":
                                return T(this, e, t, r);
                            case "latin1":
                            case "binary":
                                return y(this, e, t, r);
                            case "base64":
                                return S(this, e, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return A(this, e, t, r);
                            default:
                                if (i) throw new TypeError("Unknown encoding: " + n);
                                (n = ("" + n).toLowerCase()), (i = !0);
                        }
                }),
                (u.prototype.toJSON = function () {
                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                });
            var O = 4096;
            function I(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                return n;
            }
            function P(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n;
            }
            function C(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = t; i < r; ++i) o += Y(e[i]);
                return o;
            }
            function k(e, t, r) {
                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o;
            }
            function U(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
            }
            function N(e, t, r, n, o, i) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range");
            }
            function L(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
            }
            function D(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = (t >>> (8 * (n ? o : 3 - o))) & 255;
            }
            function B(e, t, r, n, o, i) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range");
            }
            function F(e, t, r, n, i) {
                return i || B(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4;
            }
            function x(e, t, r, n, i) {
                return i || B(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8;
            }
            (u.prototype.slice = function (e, t) {
                var r,
                    n = this.length;
                if (((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)) (r = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var o = t - e;
                    r = new u(o, void 0);
                    for (var i = 0; i < o; ++i) r[i] = this[i + e];
                }
                return r;
            }),
                (u.prototype.readUIntLE = function (e, t, r) {
                    (e |= 0), (t |= 0), r || U(e, t, this.length);
                    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) n += this[e + i] * o;
                    return n;
                }),
                (u.prototype.readUIntBE = function (e, t, r) {
                    (e |= 0), (t |= 0), r || U(e, t, this.length);
                    for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); ) n += this[e + --t] * o;
                    return n;
                }),
                (u.prototype.readUInt8 = function (e, t) {
                    return t || U(e, 1, this.length), this[e];
                }),
                (u.prototype.readUInt16LE = function (e, t) {
                    return t || U(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (u.prototype.readUInt16BE = function (e, t) {
                    return t || U(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (u.prototype.readUInt32LE = function (e, t) {
                    return t || U(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                }),
                (u.prototype.readUInt32BE = function (e, t) {
                    return t || U(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                }),
                (u.prototype.readIntLE = function (e, t, r) {
                    (e |= 0), (t |= 0), r || U(e, t, this.length);
                    for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) n += this[e + i] * o;
                    return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (u.prototype.readIntBE = function (e, t, r) {
                    (e |= 0), (t |= 0), r || U(e, t, this.length);
                    for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256); ) i += this[e + --n] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
                }),
                (u.prototype.readInt8 = function (e, t) {
                    return t || U(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }),
                (u.prototype.readInt16LE = function (e, t) {
                    t || U(e, 2, this.length);
                    var r = this[e] | (this[e + 1] << 8);
                    return 32768 & r ? 4294901760 | r : r;
                }),
                (u.prototype.readInt16BE = function (e, t) {
                    t || U(e, 2, this.length);
                    var r = this[e + 1] | (this[e] << 8);
                    return 32768 & r ? 4294901760 | r : r;
                }),
                (u.prototype.readInt32LE = function (e, t) {
                    return t || U(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                }),
                (u.prototype.readInt32BE = function (e, t) {
                    return t || U(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                }),
                (u.prototype.readFloatLE = function (e, t) {
                    return t || U(e, 4, this.length), o.read(this, e, !0, 23, 4);
                }),
                (u.prototype.readFloatBE = function (e, t) {
                    return t || U(e, 4, this.length), o.read(this, e, !1, 23, 4);
                }),
                (u.prototype.readDoubleLE = function (e, t) {
                    return t || U(e, 8, this.length), o.read(this, e, !0, 52, 8);
                }),
                (u.prototype.readDoubleBE = function (e, t) {
                    return t || U(e, 8, this.length), o.read(this, e, !1, 52, 8);
                }),
                (u.prototype.writeUIntLE = function (e, t, r, n) {
                    ((e = +e), (t |= 0), (r |= 0), n) || N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var o = 1,
                        i = 0;
                    for (this[t] = 255 & e; ++i < r && (o *= 256); ) this[t + i] = (e / o) & 255;
                    return t + r;
                }),
                (u.prototype.writeUIntBE = function (e, t, r, n) {
                    ((e = +e), (t |= 0), (r |= 0), n) || N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var o = r - 1,
                        i = 1;
                    for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = (e / i) & 255;
                    return t + r;
                }),
                (u.prototype.writeUInt8 = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & e), t + 1;
                }),
                (u.prototype.writeUInt16LE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : L(this, e, t, !0), t + 2;
                }),
                (u.prototype.writeUInt16BE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : L(this, e, t, !1), t + 2;
                }),
                (u.prototype.writeUInt32LE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e)) : D(this, e, t, !0), t + 4;
                }),
                (u.prototype.writeUInt32BE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : D(this, e, t, !1), t + 4;
                }),
                (u.prototype.writeIntLE = function (e, t, r, n) {
                    if (((e = +e), (t |= 0), !n)) {
                        var o = Math.pow(2, 8 * r - 1);
                        N(this, e, t, r, o - 1, -o);
                    }
                    var i = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++i < r && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), (this[t + i] = (((e / a) | 0) - s) & 255);
                    return t + r;
                }),
                (u.prototype.writeIntBE = function (e, t, r, n) {
                    if (((e = +e), (t |= 0), !n)) {
                        var o = Math.pow(2, 8 * r - 1);
                        N(this, e, t, r, o - 1, -o);
                    }
                    var i = r - 1,
                        a = 1,
                        s = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), (this[t + i] = (((e / a) | 0) - s) & 255);
                    return t + r;
                }),
                (u.prototype.writeInt8 = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
                }),
                (u.prototype.writeInt16LE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : L(this, e, t, !0), t + 2;
                }),
                (u.prototype.writeInt16BE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : L(this, e, t, !1), t + 2;
                }),
                (u.prototype.writeInt32LE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24)) : D(this, e, t, !0), t + 4;
                }),
                (u.prototype.writeInt32BE = function (e, t, r) {
                    return (e = +e), (t |= 0), r || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : D(this, e, t, !1), t + 4;
                }),
                (u.prototype.writeFloatLE = function (e, t, r) {
                    return F(this, e, t, !0, r);
                }),
                (u.prototype.writeFloatBE = function (e, t, r) {
                    return F(this, e, t, !1, r);
                }),
                (u.prototype.writeDoubleLE = function (e, t, r) {
                    return x(this, e, t, !0, r);
                }),
                (u.prototype.writeDoubleBE = function (e, t, r) {
                    return x(this, e, t, !1, r);
                }),
                (u.prototype.copy = function (e, t, r, n) {
                    if ((r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r)) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    var o,
                        i = n - r;
                    if (this === e && r < t && t < n) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                    else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
                    return i;
                }),
                (u.prototype.fill = function (e, t, r, n) {
                    if ("string" == typeof e) {
                        if (("string" == typeof t ? ((n = t), (t = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), 1 === e.length)) {
                            var o = e.charCodeAt(0);
                            o < 256 && (e = o);
                        }
                        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                    if (r <= t) return this;
                    var i;
                    if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), e || (e = 0), "number" == typeof e)) for (i = t; i < r; ++i) this[i] = e;
                    else {
                        var a = u.isBuffer(e) ? e : j(new u(e, n).toString()),
                            s = a.length;
                        for (i = 0; i < r - t; ++i) this[i + t] = a[i % s];
                    }
                    return this;
                });
            var M = /[^+\/0-9A-Za-z-_]/g;
            function Y(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }
            function j(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue;
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue;
                            }
                            o = r;
                            continue;
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
                            continue;
                        }
                        r = 65536 + (((o - 55296) << 10) | (r - 56320));
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (((o = null), r < 128)) {
                        if ((t -= 1) < 0) break;
                        i.push(r);
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push((r >> 6) | 192, (63 & r) | 128);
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                    }
                }
                return i;
            }
            function z(e) {
                return n.toByteArray(
                    (function (e) {
                        if (
                            (e = (function (e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                            })(e).replace(M, "")).length < 2
                        )
                            return "";
                        for (; e.length % 4 != 0; ) e += "=";
                        return e;
                    })(e),
                );
            }
            function Z(e, t, r, n) {
                for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                return o;
            }
        },
        462333: (e, t) => {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            (t.read = function (e, t, r, n, o) {
                var i,
                    a,
                    s = 8 * o - n - 1,
                    u = (1 << s) - 1,
                    c = u >> 1,
                    l = -7,
                    f = r ? o - 1 : 0,
                    h = r ? -1 : 1,
                    p = e[t + f];
                for (f += h, i = p & ((1 << -l) - 1), p >>= -l, l += s; l > 0; i = 256 * i + e[t + f], f += h, l -= 8);
                for (a = i & ((1 << -l) - 1), i >>= -l, l += n; l > 0; a = 256 * a + e[t + f], f += h, l -= 8);
                if (0 === i) i = 1 - c;
                else {
                    if (i === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
                    (a += Math.pow(2, n)), (i -= c);
                }
                return (p ? -1 : 1) * a * Math.pow(2, i - n);
            }),
                (t.write = function (e, t, r, n, o, i) {
                    var a,
                        s,
                        u,
                        c = 8 * i - o - 1,
                        l = (1 << c) - 1,
                        f = l >> 1,
                        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        p = n ? 0 : i - 1,
                        d = n ? 1 : -1,
                        _ = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? ((s = isNaN(t) ? 1 : 0), (a = l)) : ((a = Math.floor(Math.log(t) / Math.LN2)), t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)), (t += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (a++, (u /= 2)), a + f >= l ? ((s = 0), (a = l)) : a + f >= 1 ? ((s = (t * u - 1) * Math.pow(2, o)), (a += f)) : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0))); o >= 8; e[r + p] = 255 & s, p += d, s /= 256, o -= 8);
                    for (a = (a << o) | s, c += o; c > 0; e[r + p] = 255 & a, p += d, a /= 256, c -= 8);
                    e[r + p - d] |= 128 * _;
                });
        },
        77906: (e) => {
            var t = {}.toString;
            e.exports =
                Array.isArray ||
                function (e) {
                    return "[object Array]" == t.call(e);
                };
        },
        695003: (e, t, r) => {
            "use strict";
            var n = r(834406),
                o = 65536,
                i = 4294967295;
            var a = r(577834).Buffer,
                s = r.g.crypto || r.g.msCrypto;
            s && s.getRandomValues
                ? (e.exports = function (e, t) {
                      if (e > i) throw new RangeError("requested too many random bytes");
                      var r = a.allocUnsafe(e);
                      if (e > 0)
                          if (e > o) for (var u = 0; u < e; u += o) s.getRandomValues(r.slice(u, u + o));
                          else s.getRandomValues(r);
                      if ("function" == typeof t)
                          return n.nextTick(function () {
                              t(null, r);
                          });
                      return r;
                  })
                : (e.exports = function () {
                      throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
                  });
        },
        577834: (e, t, r) => {
            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var n = r(348834),
                o = n.Buffer;
            function i(e, t) {
                for (var r in e) t[r] = e[r];
            }
            function a(e, t, r) {
                return o(e, t, r);
            }
            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? (e.exports = n) : (i(n, t), (t.Buffer = a)),
                (a.prototype = Object.create(o.prototype)),
                i(o, a),
                (a.from = function (e, t, r) {
                    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                    return o(e, t, r);
                }),
                (a.alloc = function (e, t, r) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    var n = o(e);
                    return void 0 !== t ? ("string" == typeof r ? n.fill(t, r) : n.fill(t)) : n.fill(0), n;
                }),
                (a.allocUnsafe = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return o(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return n.SlowBuffer(e);
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh.c23037aa.js.map
