"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-baea4da5"],
    {
        114777: (e, t, s) => {
            s.d(t, { Z: () => Ae });
            var a = s(807896),
                n = (s(875640), s(202784)),
                i = s(325686),
                r = s(900883),
                o = s(731708),
                l = s(190286),
                c = s(386802),
                u = s(392237),
                p = s(674132),
                _ = s.n(p),
                d = s(516951),
                h = s(290402),
                b = s(443781),
                k = s(511473),
                m = s(614317),
                g = s(208115),
                f = s(163889),
                w = s(396987),
                v = s(782826),
                Z = s(804027),
                I = s(528840),
                y = s(620482),
                E = s(339110),
                S = s(118823),
                F = s(312771),
                A = s(699398),
                D = s(110092),
                N = s(125167),
                T = s(142189),
                C = s(514735),
                P = s(848055),
                x = s(280947),
                L = s(922105),
                B = s(77976),
                q = s(75820),
                O = s(347882),
                W = s(709969),
                H = s(633529),
                M = s(349590),
                U = s(957457),
                R = s(790174),
                z = s(263470),
                j = s(304944),
                V = s(990401),
                $ = s(317891),
                G = s(311314),
                J = s(858729),
                Q = s(832517),
                K = s(454473),
                X = s(665436),
                Y = s(335672),
                ee = s(201596),
                te = s(990031),
                se = s(202527),
                ae = s(367003),
                ne = s(171053),
                ie = s(762851),
                re = s(815478),
                oe = s(299622),
                le = s(672859),
                ce = s(436488),
                ue = s(991376),
                pe = s(689048),
                _e = s(668214),
                de = s(390387);
            const he = (0, _e.Z)().propsFromActions(() => ({ setLanguage: de.m0 }))(function (e) {
                const { onNavigate: t, setLanguage: s, subtask: a, subtaskId: i } = e,
                    { locale: r, next_link: o } = a,
                    { country_code: l, language_code: c } = r,
                    u = n.useCallback(() => {
                        const e = pe.k1.reduce((e, t) => ({ ...e, [t.toLowerCase()]: t }), {}),
                            t = l ? `${c}-${l}` : c,
                            a = (0, pe.Qb)(t, pe.k1, e) ?? pe.al;
                        return Promise.resolve(s(a));
                    }, [l, c, s]);
                return n.createElement(G.Z, { navigationLink: o, onNavigate: t, subtaskAction: u, subtaskId: i });
            });
            var be = s(519864),
                ke = s(994496),
                me = s(590856),
                ge = s(471810),
                fe = s(376099),
                we = s(903572),
                ve = s(153925),
                Ze = s(346784),
                Ie = s(918461);
            const ye = _().c20aaf3e,
                Ee = _().a219e218;
            class Se extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleBackAttempt = (e, t) => {
                            const { currentSubtask: s } = this.props,
                                a = !s || !s.subtask_back_navigation || s.subtask_back_navigation !== Z.bc.Disallow,
                                n = !(s?.subtask_back_navigation !== Z.bc.CancelFlow),
                                i = !this.currentPreviousNavigableSubtaskId && (this._onFirstTaskSinceStart || n) && a;
                            if ("POP" !== t || i) return !0;
                            return this.currentPreviousNavigableSubtaskId && a && this._navigateToPreviousSubtask(), !1;
                        }),
                        (this._startFlow = (e) => {
                            const { countryCode: t, createLocalApiErrorHandler: s, debugOverrides: a, flowName: n, inputFlowData: i, location: r, startFlow: o, startLocation: l, targetUserId: c, testCountryCode: u } = e,
                                { fromApp: p, gatedAction: _ } = r.state || {},
                                d = { flow_context: { debug_overrides: a, gated_action: _, ...(Object.keys(l || {}).length ? { start_location: l } : { start_location: { location: p ? "unknown" : "manual_link" } }) } },
                                h = { ...i, country_code: t || i.country_code, target_user_id: c || i.target_user_id, ...d };
                            (this._onFirstTaskSinceStart = !0), o({ additional_query_params: r.query, flow_name: n, input_flow_data: h, subtask_versions: ve.OA, test_country_code: u }).catch(s((0, k.uJ)(n, null, this._displayFailureMessage)));
                        }),
                        (this._handleFlowRestart = () => {
                            this._startFlow(this.props);
                        }),
                        (this._handleAbortFlow = (e) => {
                            const { clearFlow: t, currentSubtask: s, flowName: a, history: n, location: i, loginReturnPath: r, onAbort: o, referringPage: l, returnPath: c } = this.props;
                            t({ clearPersistence: !0 });
                            const u = s && (0, ve.uL)(s),
                                { subtask_back_navigation_link: p } = s || {};
                            if (o) o();
                            else {
                                if (c) n.replace({ pathname: c, query: { ...(l ? { referring_page: l } : null), flow_status: e }, state: { cameFromOCF: !0 } });
                                else if (u === Z.Ti.OpenHomeTimeline)
                                    if ("login" === a && r) v.ZP.navigateTo(r);
                                    else {
                                        const e = i.query.redirect_after_login;
                                        "string" == typeof e ? v.ZP.navigateTo(e) : v.ZP.navigateTo("/home");
                                    }
                                else if (p) this._handleNavigate(p);
                                else {
                                    const { loggedInUserId: e } = this.context,
                                        t = !!e;
                                    this._unblockHistory && this._unblockHistory(), (0, g.q)({}, { location: i }) ? n.goBack() : t ? (r ? n.replace(r) : n.replace("/home")) : n.replace("/");
                                }
                                this.props.language !== _().language && (n.location.pathname.startsWith("/i/flow/") ? n.listen(() => window.location.reload()) : window.location.reload());
                            }
                        }),
                        (this._handleDeepLink = (e) => {
                            const { flowName: t, history: s, loginReturnPath: a } = this.props;
                            if (e) {
                                const n = v.ZP.parseInternalUrl(e),
                                    i = n && !!r.Qc(n)?.query;
                                if ((0, I.z)(e) && void 0 !== n && !i)
                                    if (!a || ("login" !== t && "signup" !== t)) s.replace(n);
                                    else {
                                        const e = { requested_variant: btoa(JSON.stringify({ redirect_url: `${a}` })) },
                                            t = JSON.stringify(e);
                                        s.replace({ pathname: n, query: { input_flow_data: t } });
                                    }
                                else ["twitter://", "https://"].find((t) => e.startsWith(t)) ? v.ZP.navigateTo(e) : s.replace(e);
                            }
                        }),
                        (this._displayFailureMessage = (e) => {
                            this.setState({ alertFailureMessage: e });
                        }),
                        (this._submitFlow = ({ isTaskNavigation: e } = {}) => {
                            const { createLocalApiErrorHandler: t, flowName: s, submitFlow: a } = this.props;
                            return a({ isTaskNavigation: e }).then(
                                (e) => ((this._onFirstTaskSinceStart = !1), e),
                                (e) => {
                                    const { failureMessage: a, shouldAbort: n } = this.props;
                                    return t((0, k.uJ)(s, a, n ? this._displayFailureMessage : void 0))(e);
                                },
                            );
                        }),
                        (this._handleNavigate = (e, t = !1) => {
                            const { navigateSubtask: s, submitFlow: a } = this.props,
                                { is_destructive: n, subtask_id: i, subtask_navigation_context: r } = e;
                            switch ((e.suppress_client_events || this._scribeSubtaskNavigate(e), e.callbacks && this._handleCallbacks(e.callbacks, Z.ho.Click), e.link_type)) {
                                case Z.Iq.Abort:
                                    a().catch(d.Z), this._handleAbortFlow();
                                    break;
                                case Z.Iq.Subtask:
                                    s({ subtaskId: i, navigationContext: r, destructive: n, fromHiddenSubtask: t });
                                    break;
                                case Z.Iq.Finish:
                                case Z.Iq.Task:
                                    this._submitFlow({ isTaskNavigation: !0 });
                                    break;
                                case Z.Iq.Deeplink:
                                    this._submitFlow(), this._handleDeepLink(e.url);
                                    break;
                                case Z.Iq.DeeplinkAndAbort:
                                    a().catch(d.Z), this._handleDeepLink(e.url);
                                    break;
                                case Z.Iq.WeblinkAndAbort:
                                    a().catch(d.Z), window.open(e.url, "_blank"), this._handleAbortFlow();
                                    break;
                                case Z.Iq.Web:
                                    v.ZP.navigateTo(e.url);
                                    break;
                                case Z.Iq.ChromelessWeb:
                                    window.open(e.url, "_blank");
                                    break;
                                case Z.Iq.DeeplinkInPlace:
                                    break;
                                default:
                                    (0, f.ZP)(`Unknown Navigation Link Type ${e.link_type}`), this._handleAbortFlow();
                            }
                        }),
                        (this._scribeSubtaskNavigate = (e) => {
                            const { analytics: t, currentSubtask: s, flowToken: a } = this.props;
                            if (s && s.subtask_id) {
                                const { link_id: n } = e;
                                t.scribe({ element: "link", action: "click", data: { items: [{ token: a, name: s.subtask_id, description: n }] } });
                            }
                        }),
                        (this._navigateToSubtask = (e) => () => {
                            this._handleNavigate({ link_id: "", link_type: Z.Iq.Subtask, subtask_id: e });
                        }),
                        (this._endFlowSubtaskAction = (e, t) => {
                            const { submitFlow: s } = this.props;
                            switch (t) {
                                case Z.Iq.Abort:
                                    s()
                                        .catch(d.Z)
                                        .then(() => this._handleAbortFlow(e));
                                    break;
                                case Z.Iq.Finish:
                                    this._submitFlow().then(() => this._handleAbortFlow(e));
                                    break;
                                default:
                                    (0, f.ZP)(`Unknown End Flow Type ${t}`), this._handleAbortFlow();
                            }
                        }),
                        (this._render = () => {
                            const { currentSubtask: e, previousNavigableSubtaskId: t, subtaskInputs: s, subtasks: a, updateFlow: i } = this.props;
                            if (!e) return null;
                            let r, o;
                            if ((0, S.Lw)(e)) {
                                (o = a.find((e) => e.subtask_id === t)), (r = e);
                            } else o = e;
                            return n.createElement(n.Fragment, null, r && n.createElement(V.CU, { onNavigate: this._handleNavigate, subtask: r, subtaskId: e.subtask_id, subtaskInputs: s, updateFlow: i }, this._renderSubtask(r)), o && n.createElement(V.CU, { onNavigate: this._handleNavigate, subtask: o, subtaskId: e.subtask_id, subtaskInputs: s, updateFlow: i }, this._renderSubtask(o)));
                        }),
                        (this._renderDefault = () => {
                            const { currentSubtask: e, flowToken: t, history: s, subtasks: a } = this.props,
                                r = a.map((e) => n.createElement(o.ZP, { key: e.subtask_id, onClick: this._navigateToSubtask(e.subtask_id) }, e.subtask_id));
                            return n.createElement(x.Z, { history: s }, n.createElement(i.Z, { style: { margin: 5 } }, n.createElement(o.ZP, null, t), n.createElement(o.ZP, null, `Current Subtask: ${e ? e.subtask_id : ""}`), r));
                        }),
                        (this._handleAbortFlowOnConfirm = () => {
                            this._handleAbortFlow();
                        }),
                        (this._onNoopInvisibleSubtask = () => Promise.resolve()),
                        (this._navigateToPreviousSubtask = () => {
                            const { navigateSubtask: e, previousNavigableSubtaskId: t } = this.props;
                            e({ subtaskId: t, destructive: !0 });
                        }),
                        (this._renderErrorDialog = () => {
                            const { failureMessage: e, history: t } = this.props;
                            return n.createElement(x.Z, { hideBackButton: !0, history: t }, n.createElement(l.Z, { confirmButtonLabel: Ee, headline: ye, onConfirm: this._handleAbortFlowOnConfirm, text: e || k.rf, withCancelButton: !1 }));
                        }),
                        (this._renderSubtask = (e) => {
                            const { addToast: t, callInteractiveSpinnerPath: s, fetchTemporaryPassword: i, flowName: r, flowToken: o, history: u, location: p, previouslySubmittedSubtaskId: _, removeContacts: d, shouldAbort: h, startLocation: b, submitFailed: k, subtaskInputs: m, updateFlow: g } = this.props,
                                { progress_indication: f, subtask_back_navigation: w, subtask_id: v } = e,
                                I = h ? n.createElement(l.Z, { confirmButtonLabel: Ee, headline: ye, onConfirm: this._handleAbortFlowOnConfirm, text: this.state.alertFailureMessage, withCancelButton: !1 }) : null,
                                y = { onNavigate: this._handleNavigate, passthroughOcfScreenProps: { backButtonType: w === Z.bc.CancelFlow ? "close" : "back", history: u, onBackClick: this._getBackNavigation(e), progressIndication: f }, subtaskId: v, updateFlow: g };
                            if (e.end_flow) return this._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), this._renderDefault();
                            if (e.action_list) return n.createElement(A.Z, (0, a.Z)({ subtask: e.action_list, subtaskInputs: m }, y));
                            if (e.fetch_temporary_password) return n.createElement(G.Z, { navigationLink: e.fetch_temporary_password.next_link, onNavigate: this._handleNavigate, subtaskAction: this._handleInvisibleSubtask(v, e.fetch_temporary_password, i), subtaskId: v });
                            if (e.cta) return n.createElement(T.Z, (0, a.Z)({ errorDialog: I, subtask: e.cta, subtaskInputs: m }, y));
                            if (e.app_download_cta) return n.createElement(N.Z, (0, a.Z)({ errorDialog: I, startLocation: b, subtask: e.app_download_cta, subtaskInputs: m }, y));
                            if (e.app_locale_update) return n.createElement(he, (0, a.Z)({ subtask: e.app_locale_update }, y));
                            if (e.alert_dialog) return n.createElement(D.Z, (0, a.Z)({ subtask: e.alert_dialog, subtaskInputs: m }, y));
                            if (e.alert_dialog_suppress_client_events) return n.createElement(D.Z, (0, a.Z)({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: m }, y));
                            if (e.menu_dialog) return n.createElement(X.Z, (0, a.Z)({ subtask: e.menu_dialog, subtaskInputs: m }, y));
                            if (e.open_account) return n.createElement(G.Z, { navigationLink: e.open_account.next_link, onNavigate: this._handleNavigate, subtaskAction: this._openAccountAction(e.open_account), subtaskId: v });
                            if (e.in_app_notification) return n.createElement(J.Z, (0, a.Z)({ addToast: t, onNavigate: this._handleNavigate, subtask: e.in_app_notification, subtaskId: v }, y));
                            if (e.show_code) return n.createElement(le.Z, (0, a.Z)({ errorDialog: I, subtask: e.show_code, subtaskInputs: m }, y));
                            if (e.sign_up) return n.createElement(ce.Z, (0, a.Z)({ subtask: e.sign_up, subtaskInputs: m }, y));
                            if (e.sign_up_review) return n.createElement(ue.Z, (0, a.Z)({ errorDialog: I, subtask: e.sign_up_review, subtaskInputs: m }, y));
                            if (e.js_instrumentation) return n.createElement(K.Z, (0, a.Z)({ subtask: e.js_instrumentation }, y));
                            if (e.phone_verification) return n.createElement(se.Z, (0, a.Z)({ errorDialog: I, flowName: r, submitFailed: k, subtask: e.phone_verification, subtaskInputs: m }, y));
                            if (e.recaptcha) return n.createElement(R.Z, (0, a.Z)({ errorDialog: I, subtask: e.recaptcha, subtaskInputs: m }, y));
                            if (e.privacy_options) return n.createElement(ae.Z, (0, a.Z)({ subtask: e.privacy_options, subtaskInputs: m }, y));
                            if (e.generic_urt) return n.createElement($.Z, (0, a.Z)({ errorDialog: I, subtask: e.generic_urt, subtaskInputs: m }, y));
                            if (e.interest_picker) return n.createElement(Q.Z, (0, a.Z)({ errorDialog: I, subtask: e.interest_picker, subtaskInputs: m }, y));
                            if (e.topics_selector) return n.createElement(be.Z, (0, a.Z)({ errorDialog: I, subtask: e.topics_selector, subtaskInputs: m }, y));
                            if (e.notifications_permission_prompt) return n.createElement(Y.Z, (0, a.Z)({ subtask: e.notifications_permission_prompt, subtaskInputs: m }, y));
                            if (e.open_home_timeline) return n.createElement(G.Z, { navigationLink: e.open_home_timeline.next_link, onNavigate: this._handleNavigate, subtaskAction: this._onNoopInvisibleSubtask, subtaskId: v });
                            if (e.open_link) return _ === v ? null : n.createElement(ee.Z, { flowName: r, onNavigate: this._handleNavigate, subtask: e.open_link, subtaskId: v });
                            if (e.upload_media) return n.createElement(ge.Z, { flowToken: o, onNavigate: this._handleNavigate, subtask: e.upload_media, subtaskId: v });
                            if (e.user_recommendations_list) return n.createElement(we.Z, (0, a.Z)({ errorDialog: I, subtask: e.user_recommendations_list, subtaskInputs: m }, y));
                            if (e.user_recommendations_urt) return n.createElement(fe.Z, (0, a.Z)({ errorDialog: I, flowToken: o, subtask: e.user_recommendations_urt, subtaskInputs: m }, y));
                            if (e.update_users) return n.createElement(G.Z, { navigationLink: e.update_users.next_link, onNavigate: this._handleNavigate, subtaskAction: this._handleInvisibleSubtask(v, e.update_users, this._updateUsersAction), subtaskId: v });
                            if (e.enter_password) return n.createElement(M.Z, (0, a.Z)({ errorDialog: I, subtask: e.enter_password, subtaskInputs: m }, y));
                            if (e.settings_list) {
                                const { settings_list: s } = e;
                                return n.createElement(c.Z.Consumer, null, ({ isModal: e }) => n.createElement(oe.Z, (0, a.Z)({ addToast: t, errorDialog: I, isModal: e, removeContacts: d, subtask: s, subtaskInputs: m }, y)));
                            }
                            return e.email_contacts_sync
                                ? n.createElement(q.ZP, (0, a.Z)({ errorDialog: I, location: p, subtask: e.email_contacts_sync, subtaskInputs: m }, y))
                                : e.select_avatar
                                  ? n.createElement(ie.Z, (0, a.Z)({ errorDialog: I, subtask: e.select_avatar, subtaskInputs: m }, y))
                                  : e.select_banner
                                    ? n.createElement(re.Z, (0, a.Z)({ errorDialog: I, subtask: e.select_banner, subtaskInputs: m }, y))
                                    : e.passkey
                                      ? n.createElement(te.V, (0, a.Z)({ errorDialog: I, subtask: e.passkey, subtaskInputs: m }, y))
                                      : e.security_key
                                        ? n.createElement(ne.Z, (0, a.Z)({ errorDialog: I, subtask: e.security_key, subtaskInputs: m }, y))
                                        : e.enter_date
                                          ? n.createElement(W.Z, (0, a.Z)({ errorDialog: I, subtask: e.enter_date, subtaskInputs: m }, y))
                                          : e.enter_text
                                            ? n.createElement(z.Z, (0, a.Z)({ errorDialog: I, key: v, subtask: e.enter_text, subtaskInputs: m }, y))
                                            : e.email_verification
                                              ? n.createElement(O.Z, (0, a.Z)({ errorDialog: I, flowName: r, submitFailed: k, subtask: e.email_verification, subtaskInputs: m }, y))
                                              : e.enter_username
                                                ? n.createElement(j.Z, (0, a.Z)({ errorDialog: I, subtask: e.enter_username, subtaskInputs: m }, y))
                                                : e.enter_email
                                                  ? n.createElement(H.Z, (0, a.Z)({ errorDialog: I, subtask: e.enter_email, subtaskInputs: m }, y))
                                                  : e.enter_phone
                                                    ? n.createElement(U.Z, (0, a.Z)({ errorDialog: I, subtask: e.enter_phone, subtaskInputs: m }, y))
                                                    : e.choice_selection
                                                      ? n.createElement(P.Z, (0, a.Z)({ key: v, subtask: e.choice_selection, subtaskInputs: m }, y))
                                                      : e.contacts_live_sync_permission_prompt
                                                        ? n.createElement(B.Z, (0, a.Z)({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: m }, y))
                                                        : e.wait_spinner
                                                          ? n.createElement(Ze.Z, (0, a.Z)({ pollInteractivePath: s, subtask: e.wait_spinner, subtaskInputs: m }, y))
                                                          : e.check_logged_in_account
                                                            ? n.createElement(C.Z, (0, a.Z)({ errorDialog: I, onNavigate: this._handleNavigate, subtask: e.check_logged_in_account, subtaskId: v }, y))
                                                            : e.tweet_selection_urt
                                                              ? n.createElement(ke.ZP, (0, a.Z)({ errorDialog: I, subtask: e.tweet_selection_urt, subtaskInputs: m }, y))
                                                              : e.typeahead_search
                                                                ? n.createElement(me.Z, (0, a.Z)({ errorDialog: I, key: v, source: E._4.OcfTypeaheadSearch, subtask: e.typeahead_search, subtaskInputs: m }, y))
                                                                : e.web_modal
                                                                  ? n.createElement(Ie.Z, (0, a.Z)({ renderDefault: this._renderDefault.bind(this), subtask: e.web_modal }, y))
                                                                  : this._renderDefault();
                        }),
                        (this._getBackNavigation = (e) => {
                            const { subtask_back_navigation: t = Z.bc.Allow } = e;
                            return t === Z.bc.CancelFlow ? () => this._handleAbortFlow() : this.currentPreviousNavigableSubtaskId && t === Z.bc.Allow ? this._navigateToPreviousSubtask : void 0;
                        }),
                        (this._scribeSubtaskView = () => {
                            const { analytics: e, currentSubtask: t, flowToken: s } = this.props;
                            t && t.subtask_id && !(0, ve.Di)(t) && e.scribe({ element: "view", action: "impression", data: { items: [{ token: s, name: t.subtask_id }] } });
                        }),
                        (this._handleCallbacks = (e, t) => {
                            const { analytics: s, callOnboardingPath: a } = this.props;
                            e.forEach((e) => {
                                if (e.trigger === t) {
                                    const t = e.scribe_config;
                                    t?.action && s.scribe({ ...t, action: t.action }), e.endpoint && a(e.endpoint, { timestampMs: Date.now() });
                                }
                            });
                        }),
                        (this._openAccountAction = (e) => () => {
                            const { loggedInUserId: t } = this.context,
                                { analytics: s, location: a, returnPath: n, verifyCredentials: i } = this.props,
                                {
                                    attribution_event: r,
                                    user: { id_str: o },
                                } = e,
                                { encryptedReferer: l, encryptedReferralDetails: c } = (0, w.Qo)(this.context.featureSwitches) || {};
                            if ((y.Z.flushHTMLCache(), t && o !== t)) {
                                const e = a.query.redirect_after_login;
                                return "string" != typeof e || n ? v.ZP.navigateTo(n || "/home") : v.ZP.navigateTo(e), new Promise(() => {});
                            }
                            return i().then(() => {
                                this._maybeScribeAppInstallBanner(), "signup" === r && s.scribe({ page: "signup", action: "success", data: { referer: l, external_referer: c } });
                            });
                        }),
                        (this._updateUsersAction = (e, t) => {
                            const { createLocalApiErrorHandler: s, fetchUsers: a } = this.props,
                                n = t?.users;
                            n && n.length && a(n.map((e) => e.id_str)).catch(s({ showToast: !0 }));
                        }),
                        (this._maybeScribeAppInstallBanner = () => {
                            const { analytics: e } = this.props;
                            m.Z.hasPromptWaiting() && e.scribe({ page: "signup", component: "install_banner", action: "waiting" });
                        }),
                        (this.state = { alertFailureMessage: "" });
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.flowName !== e.flowName && this._startFlow(e);
                }
                componentDidUpdate(e) {
                    const { currentSubtask: t } = e,
                        { currentSubtask: s } = this.props,
                        a = t && t.subtask_id;
                    s && s.subtask_id !== a && (this._scribeSubtaskView(), s.callbacks && this._handleCallbacks(s.callbacks, Z.ho.Impression));
                }
                UNSAFE_componentWillMount() {
                    "__OCF_INITIAL_STATE__" in window ? delete window.__OCF_INITIAL_STATE__ : this._startFlow(this.props);
                }
                componentDidMount() {
                    const { analytics: e, history: t } = this.props;
                    e.scribePageImpression(), (this._unblockHistory = t.block(this._handleBackAttempt));
                }
                componentWillUnmount() {
                    this._unblockHistory && this._unblockHistory(), this.props.clearFlow();
                }
                render() {
                    const { currentSubtask: e, shouldEndFlow: t } = this.props;
                    t && this._handleAbortFlow();
                    let s = this.props.fetchStatus;
                    return s === F.ZP.FAILED || e || (s = F.ZP.LOADING), n.createElement(i.Z, { style: Fe.root }, n.createElement(h.Z, { fetchStatus: s, onRequestRetry: this._handleFlowRestart, render: this._render, renderFailure: this._renderErrorDialog, retryable: !this.props.shouldAbort }));
                }
                _handleInvisibleSubtask(e, t, s) {
                    return () =>
                        new Promise((a, n) => {
                            a(s(e, t));
                        });
                }
                get currentPreviousNavigableSubtaskId() {
                    return this.props.previousNavigableSubtaskId;
                }
            }
            (Se.contextType = b.rC), (Se.defaultProps = { inputFlowData: {} });
            const Fe = u.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } })),
                Ae = (0, L.Z)(Se);
        },
        305784: (e, t, s) => {
            s.d(t, { Z: () => i });
            var a = s(392237),
                n = s(911318);
            const i = a.default.create((e) => ({ header: { marginBottom: e.spaces.space12 }, centerText: { textAlign: "center" }, contentArea: { marginHorizontal: e.spaces.space80 }, contentAreaCompact: { paddingHorizontal: e.spaces.space32, margin: "auto", minWidth: n.fI + 64, maxWidth: n.fI + 64 }, checkboxText: { flexShrink: 1, paddingEnd: e.spaces.space12, width: "100%" }, option: { marginTop: e.spaces.space12, flexDirection: "row", justifyContent: "space-between" }, primaryButton: { marginTop: e.spaces.space16 }, formTextInput: { paddingHorizontal: 0 }, button: { width: "100%", margin: "auto", marginVertical: e.spaces.space12 }, ssoButton: { width: n.fI, height: e.spaces.space40 } }));
        },
        621389: (e, t, s) => {
            s.d(t, { Z: () => a });
            const a = s(392237).default.create((e) => {
                const t = { width: "25%", minWidth: e.spaces.space48 };
                return { avatar: { ...t, height: "auto", marginTop: "-15%", marginBottom: e.spaces.space12 }, avatarSize: t, avatarAndButton: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }, buttonAffordance: { height: e.spacesPx.space36 }, content: { paddingTop: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, withheld: { paddingBottom: e.spaces.space12 }, banner: { backgroundColor: e.colors.gray200 }, menuSheetButton: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, names: { marginTop: e.spaces.space4, marginBottom: e.spaces.space12, flexDirection: "row", flexWrap: "wrap" }, namesInner: { flexDirection: "column", marginEnd: e.spaces.space8, flexShrink: 1 }, longNameButtons: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space4 } };
            });
        },
        736989: (e, t, s) => {
            s.r(t), s.d(t, { VerificationLanding: () => y, default: () => S });
            var a = s(202784),
                n = s(325686),
                i = s(946847),
                r = s(392237),
                o = s(674132),
                l = s.n(o),
                c = s(516951),
                u = s(290402),
                p = s(312771),
                _ = s(280947),
                d = s(2430),
                h = s(668214),
                b = s(118823);
            const k = (0, d.cI)("user_identifier"),
                m = (0, d.cI)("phone"),
                g = (0, d.cI)("email"),
                f = (0, d.cI)("pin_code"),
                w = (0, h.Z)()
                    .propsFromState(() => ({ email: g, identifier: k, phone: m, pinCode: f }))
                    .propsFromActions(() => ({ verificationLink: b.d7 })),
                v = l().b5474bd2,
                Z = l().ab4b970a,
                I = l().j24c37b2;
            class y extends a.Component {
                constructor(e) {
                    super(e),
                        (this._render = () => a.createElement(i.Z, { actionLabel: I, headline: this.state.title || "", onAction: this._handleCloseWindow, onClose: this._handleCloseWindow, subtext: this.state.message || "", withCloseButton: !1 })),
                        (this._handleCloseWindow = () => {
                            window && window.close(), this.props.history.replace("/");
                        }),
                        (this.state = { title: void 0, message: void 0, fetchStatus: p.ZP.LOADING });
                }
                componentDidMount() {
                    const { email: e, history: t, identifier: s, location: a, phone: n, pinCode: i, verificationLink: r } = this.props;
                    return (
                        t.replace(a.pathname),
                        r({ user_identifier: s, email: e, phone: n, pin_code: i })
                            .then((e) => this.setState({ fetchStatus: e.success ? p.ZP.LOADED : p.ZP.FAILED, title: e.title, message: e.message }))
                            .catch(() => this.setState({ title: v, message: Z, fetchStatus: p.ZP.FAILED }))
                    );
                }
                render() {
                    const { history: e } = this.props;
                    return a.createElement(_.Z, { hideLogo: !0, history: e }, a.createElement(n.Z, { style: E.root }, a.createElement(u.Z, { fetchStatus: this.state.fetchStatus, onRequestRetry: c.Z, render: this._render, renderFailure: this._render, retryable: !1 })));
                }
            }
            const E = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } })),
                S = w(y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-baea4da5.eefb180a.js.map
