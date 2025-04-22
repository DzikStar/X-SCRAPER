"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-5fa231a1"],
    {
        665436: (e, t, s) => {
            s.d(t, { Z: () => d });
            var n = s(807896),
                o = s(202784),
                i = s(811176),
                a = s(392237),
                r = s(516951),
                c = s(555079),
                l = s(975364);
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._makeNavFunction = (e) => () => {
                            const { onNavigate: t, subtaskId: s, updateFlow: n } = this.props;
                            n(s, { link: e.link_id }), t(e);
                        }),
                        (this._itemFromNavLink = (e) => ({ text: e.label || "", onClick: this._makeNavFunction(e) }));
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskInputs: s } = this.props;
                    return o.createElement(i.Z, { cancelButtonLabel: t.cancel_link && t.cancel_link.text, description: t.primary_text ? o.createElement(l.Z, (0, n.Z)({}, t.primary_text, { id: c.Q_, onNavigate: e, style: { padding: a.default.theme.spacesPx.space16 }, subtaskInputs: s })) : null, items: t.primary_action_links.map(this._itemFromNavLink), onCloseRequested: t.cancel_link ? this._makeNavFunction(t.cancel_link) : r.Z });
                }
            }
        },
        335672: (e, t, s) => {
            s.d(t, { Z: () => P });
            var n = s(202784),
                o = s(516951),
                i = s(615656),
                a = s(163889),
                r = s(312771),
                c = s(71620),
                l = s(668214),
                d = s(257166);
            const p = (e) => d.selectBrowserPushStatus(e),
                u = (0, l.Z)()
                    .propsFromState(() => ({ promptAllowed: d.selectShouldPromptBrowserPush, pushSettingsStatus: p }))
                    .adjustStateProps(({ promptAllowed: e, pushSettingsStatus: t }) => ({ promptAllowed: e, pushSettingsFetchStatus: t.fetchStatus, subscribed: t.subscribed }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("NOTIFICATIONS_PERMISSIONS_PROMPT"), dismissPushNotificationsPrompt: d.dismissPushNotificationsPrompt, fetchPushSettingsIfNeeded: d.fetchPushSettingsIfNeeded, loadPushPromptSettingsIfNeeded: d.loadPushPromptSettingsIfNeeded, pushSubscribe: d.pushSubscribe }))
                    .withAnalytics();
            var _ = s(802745);
            const h = function (e) {
                const { componentCollection: t, onPrimaryAction: s, onSecondaryAction: o } = e;
                return n.createElement(_.Z, { componentCollection: t, onPrimaryAction: s, onSecondaryAction: o });
            };
            var m = s(807896),
                b = s(946847),
                k = s(684869),
                f = s(555079),
                g = s(280947),
                v = s(975364);
            const y = function (e) {
                const { handleConfirm: t, handleSkip: s, onNavigate: o, passthroughOcfScreenProps: i, subtask: a, subtaskInputs: r } = e,
                    c = a.primary_text ? n.createElement(v.Z, (0, m.Z)({}, a.primary_text, { id: f.Q_, onNavigate: o, subtaskInputs: r })) : null,
                    l = a.secondary_text ? n.createElement(v.Z, (0, m.Z)({}, a.secondary_text, { onNavigate: o, subtaskInputs: r })) : null;
                return a.granted_link.label ? n.createElement(g.Z, (0, m.Z)({ hideLogo: !0 }, i), n.createElement(b.Z, { actionLabel: a.granted_link.label, graphic: k.default, graphicDisplayMode: a.auto_prompt ? "none" : void 0, headline: c, onAction: a.auto_prompt ? s : t, onClose: s, onSecondaryAction: s, secondaryActionLabel: a.auto_prompt ? void 0 : a.denied_link.label, subtext: l, withCloseButton: !1 })) : null;
            };
            function S(e, t) {
                e.granted_link.label || (0, a.ZP)("Invalid notification permission prompt subtask: granted_link does not have a label", { extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id } });
            }
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._actionClicked = (e) => {
                            const { onNavigate: t, subtaskId: s, updateFlow: n } = this.props;
                            n(s, { link: e.link_id }), t(e);
                        }),
                        (this._handleSkip = () => {
                            const { dismissPushNotificationsPrompt: e } = this.props;
                            e();
                        }),
                        (this._legacyHandleSkip = () => {
                            const { dismissPushNotificationsPrompt: e, subtask: t } = this.props;
                            e(), this._actionClicked(t.denied_link);
                        }),
                        (this._handleConfirm = () => {
                            const { pushSubscribe: e } = this.props;
                            return e().then(() => !1);
                        }),
                        (this._legacyHandleConfirm = () => {
                            const { pushSubscribe: e, subtask: t } = this.props;
                            e().then(() => {
                                this._actionClicked(t.granted_link);
                            });
                        }),
                        (this._skipIfPushPromptNotAllowed = () => {
                            const { promptAllowed: e, subscribed: t, subtask: s } = this.props;
                            e || this._actionClicked(t ? s.granted_link : s.denied_link);
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchPushSettingsIfNeeded: t, pushSettingsFetchStatus: s, pushSubscribe: n, subtask: a, subtaskId: c } = this.props;
                    S(a, c),
                        t().catch(e({ [i.ZP.AppInReadOnlyMode]: { customAction: o.Z } })),
                        s === r.ZP.LOADED && this._skipIfPushPromptNotAllowed(),
                        a.auto_prompt &&
                            n().then((e) => {
                                this._actionClicked(e ? a.granted_link : a.denied_link);
                            });
                }
                componentDidUpdate(e) {
                    const { pushSettingsFetchStatus: t, subtask: s } = this.props;
                    t === r.ZP.LOADED && e.pushSettingsFetchStatus === r.ZP.NONE && this._skipIfPushPromptNotAllowed(), s !== e.subtask && S(s, this.props.subtaskId);
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: o } = this.props;
                    return s.component_collection ? n.createElement(h, { componentCollection: s.component_collection, onPrimaryAction: this._handleConfirm, onSecondaryAction: this._handleSkip }) : n.createElement(y, { handleConfirm: this._legacyHandleConfirm, handleSkip: this._legacyHandleSkip, onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: o });
                }
            }
            const P = u(Z);
        },
        819410: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            var n = s(807896),
                o = s(202784),
                i = s(114777),
                a = s(118823);
            const r = (e) => o.createElement(i.Z, (0, n.Z)({}, e, { ocfModule: a.qE }));
        },
        201596: (e, t, s) => {
            s.d(t, { Z: () => u });
            var n = s(202784),
                o = s(516951),
                i = s(511473),
                a = s(311314),
                r = s(71620),
                c = s(668214),
                l = s(118823);
            const d = (0, c.Z)().propsFromActions(() => ({ callOnboardingPath: l.R2, createLocalApiErrorHandler: (0, r.zr)("OCF_OPEN_LINK") }));
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._hitCallbackPath = () => {
                            const {
                                callOnboardingPath: e,
                                createLocalApiErrorHandler: t,
                                flowName: s,
                                subtask: { onboarding_callback_path: n },
                            } = this.props;
                            return n ? e(n).catch(t((0, i.uJ)(s, void 0, o.Z))) : Promise.resolve();
                        });
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskId: s } = this.props;
                    return n.createElement(a.Z, { navigationLink: t.link, onNavigate: e, subtaskAction: this._hitCallbackPath, subtaskId: s });
                }
            }
            const u = d(p);
        },
        990031: (e, t, s) => {
            s.d(t, { V: () => p });
            var n = s(807896),
                o = s(202784),
                i = s(167630),
                a = s(731708),
                r = s(782642),
                c = s(804027),
                l = s(158272),
                d = s(280947);
            function p({ errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: p, subtaskId: u, subtaskInputs: _, updateFlow: h }) {
                const m = (0, r.p)();
                return (
                    o.useEffect(() => {
                        function e() {
                            m({ text: l.Kh }), t({ ...p.fail_link, link_type: c.Iq.Abort });
                        }
                        function s(e) {
                            h(u, { challenge_response: e, link: p.next_link.link_id }), t(p.next_link);
                        }
                        "authentication" !== p.mode ? ("registration" !== p.mode ? e() : (0, l.OQ)(p.challenge).then(s).catch(e)) : (0, l.xG)(p.challenge).then(s).catch(e);
                    }, [m, t, p.challenge, p.fail_link, p.mode, p.next_link, u, h]),
                    o.createElement(d.Z, (0, n.Z)({}, s, { providePadding: !0 }), e || ((0, l.iW)() ? o.createElement(i.Z, null) : o.createElement(a.ZP, { align: "center" }, l.z_)))
                );
            }
        },
        202527: (e, t, s) => {
            s.d(t, { Z: () => I });
            var n = s(807896),
                o = s(202784),
                i = s(855488),
                a = s(392237),
                r = s(912021),
                c = s(443781),
                l = s(511473),
                d = s(804027),
                p = s(227991),
                u = s(663951),
                _ = s(280947),
                h = s(975364),
                m = s(305784),
                b = s(153925),
                k = s(71620),
                f = s(668214),
                g = s(118823);
            const v = (0, f.Z)()
                    .propsFromState(() => ({ navigationContext: g.b, verificationSendFailureMessage: g.aR }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("OCF_FLOW_PHONE_VERIFICATION"), verifyIdentifier: g.if }))
                    .withAnalytics({ component: "phone_verification" }),
                y = "ocfPhoneVerificationNextLink",
                S = "normalized_phone";
            class Z extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._sendSmsVerificationRequest = () => {
                            const { createLocalApiErrorHandler: e, navigationContext: t, onNavigate: s, subtask: n, subtaskInputs: o, verifyIdentifier: i } = this.props,
                                a = n.phone_number && (0, b.Ds)(o, n.phone_number),
                                r = n.phone_country_code && (0, b.Ds)(o, n.phone_country_code),
                                c = t && t.action ? t.action === d.vY.ResendVoice : !!n.send_via_voice;
                            this._isSmsAutoVerifyEnabled && this._autoVerifySmsCode();
                            return i({ phone: a, use_voice: c, sim_country_code: r, send_auto_verify_hash: this._isSmsAutoVerifyEnabled || (this._isSmsAutoVerifySupported && this.context.featureSwitches.isTrue("responsive_web_ocf_sms_autoverify_darkwrite")) })
                                .then((e) => {
                                    const t = e.normalized_phone_number;
                                    t && this.setState({ normalized_phone: t });
                                })
                                .catch((t) => {
                                    const { flowName: o, verificationSendFailureMessage: i } = this.props;
                                    e((0, l.uJ)(o, i || l.rf))(t), s(n.fail_link);
                                });
                        }),
                        (this._getCodePattern = (0, r.Z)((e) => ("number" == typeof e && Number.isSafeInteger(e) && e > 0 ? new RegExp(`^\\d{${e}}$`) : new RegExp("^\\d{6}$")))),
                        (this._handleCodeUpdated = (e) => {
                            this.setState({ code: e.target.value });
                        }),
                        (this._autoVerifySmsCode = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "auto", action: "attempt" }),
                                window.navigator.credentials
                                    .get({ otp: { transport: ["sms"] }, signal: this._smsAutoVerifyAbortController?.signal })
                                    .then(({ code: t }) => {
                                        t
                                            ? ((this._smsAutoVerifyAbortController = void 0),
                                              this.setState({ code: t }, () => {
                                                  e.scribe({ element: "auto", action: "success" }), this._handleDoneButtonClick();
                                              }))
                                            : e.scribe({ element: "auto", action: "missing" });
                                    })
                                    .catch(() => {
                                        e.scribe({ element: "auto", action: "failure" });
                                    });
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: n } = this.props,
                                { code: o, normalized_phone: i } = this.state;
                            n(s, { code: o, link: t.next_link.link_id, normalized_phone: i, by_voice: !!t.send_via_voice }), e(t.next_link);
                        });
                    const { subtaskId: s, subtaskInputs: n } = e,
                        o = (0, b.OG)(n, { key: S, subtask_id: s }, "") || "";
                    (this.state = { code: "", normalized_phone: o, showSmsResendDialog: !1 }), (this._isSmsAutoVerifySupported = "OTPCredential" in window), (this._isSmsAutoVerifyEnabled = this._isSmsAutoVerifySupported && this.context.featureSwitches.isTrue("responsive_web_ocf_sms_autoverify_enabled")), this._isSmsAutoVerifyEnabled && (this._smsAutoVerifyAbortController = new AbortController());
                }
                componentDidMount() {
                    return this._sendSmsVerificationRequest();
                }
                componentWillUnmount() {
                    this._smsAutoVerifyAbortController && (this._smsAutoVerifyAbortController.abort(), this.props.analytics.scribe({ element: "auto", action: "abort" }));
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: a } = this.props,
                        { code_length: r, next_link: c, primary_text: l, secondary_text: d } = s,
                        { code: b } = this.state,
                        k = o.createElement(h.Z, (0, n.Z)({}, s.detail_text, { color: "link", onNavigate: e, style: P.detailLink, subtaskInputs: a }));
                    return o.createElement(_.Z, (0, n.Z)({}, t, { footer: o.createElement(p.ZP, { actionDisabled: 0 === b.length, actionLabel: c?.label, actionTestID: y, onAction: this._handleDoneButtonClick }), header: o.createElement(u.Z, { onNavigate: e, primaryTextProp: l, secondaryTextProp: d, subtaskInputs: a, withHeaderImage: !0 }), providePadding: !0 }), o.createElement(i.Z, { autoComplete: "one-time-code", autoFocus: !0, helperText: k, inputMode: "numeric", label: s.hint_text, name: "verfication_code", onChange: this._handleCodeUpdated, pattern: this._getCodePattern(r).source, style: m.Z.formTextInput, value: b }), this.props.errorDialog);
                }
            }
            Z.contextType = c.rC;
            const P = a.default.create((e) => ({ detailLink: { marginTop: e.spaces.space16 } })),
                I = v(Z);
        },
        367003: (e, t, s) => {
            s.d(t, { Z: () => b });
            var n = s(807896),
                o = s(202784),
                i = s(325686),
                a = s(731708),
                r = s(96083),
                c = s(227991),
                l = s(663951),
                d = s(280947),
                p = s(975364),
                u = s(305784),
                _ = s(153925);
            const h = "discoverable_by_email",
                m = "discoverable_by_phone";
            class b extends o.Component {
                constructor(e) {
                    super(e),
                        (this._formatSubtaskInputsForRedux = (e) => ({ link: this.props.subtask.next_link, discoverable_by_email: e.discoverable_by_email ? 1 : 0, discoverable_by_phone: e.discoverable_by_phone ? 1 : 0 })),
                        (this._getInitialSubtaskInputs = () => {
                            const { subtaskId: e, subtaskInputs: t } = this.props;
                            return { discoverable_by_email: 0 !== (0, _.OG)(t, { key: h, subtask_id: e }), discoverable_by_phone: 0 !== (0, _.OG)(t, { key: m, subtask_id: e }) };
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: n } = this.props;
                            n(s, this._formatSubtaskInputsForRedux(this.state)), e(t.next_link);
                        }),
                        (this._handleDiscoverableByEmailToggle = (e) => {
                            this.setState({ discoverable_by_email: e });
                        }),
                        (this._handleDiscoverableByPhoneToggle = (e) => {
                            this.setState({ discoverable_by_phone: e });
                        });
                    const t = this._getInitialSubtaskInputs();
                    this.state = { ...t };
                }
                render() {
                    const { discoverable_by_email: e, discoverable_by_phone: t } = this.state,
                        { onNavigate: s, passthroughOcfScreenProps: _, subtask: h, subtaskInputs: m } = this.props,
                        { next_link: b, primary_text: k, secondary_text: f } = h;
                    return o.createElement(d.Z, (0, n.Z)({}, _, { footer: o.createElement(c.ZP, { actionLabel: b?.label, onAction: this._handleDoneButtonClick }), header: o.createElement(l.Z, { onNavigate: s, primaryTextProp: f || k, subtaskInputs: m, withHeaderImage: !0 }), providePadding: !0 }), o.createElement(i.Z, { role: "label", style: u.Z.option }, o.createElement(i.Z, { style: u.Z.checkboxText }, o.createElement(a.ZP, null, h.discoverable_by_email_label), o.createElement(p.Z, (0, n.Z)({}, h.discoverable_by_email_detail_text, { color: "gray700", onNavigate: s, size: "subtext2", subtaskInputs: m }))), o.createElement(r.Z, { checked: e, onChange: this._handleDiscoverableByEmailToggle })), o.createElement(i.Z, { role: "label", style: u.Z.option }, o.createElement(i.Z, { style: u.Z.checkboxText }, o.createElement(a.ZP, null, h.discoverable_by_phone_label), o.createElement(p.Z, (0, n.Z)({}, h.discoverable_by_phone_detail_text, { color: "gray700", onNavigate: s, size: "subtext2", subtaskInputs: m }))), o.createElement(r.Z, { checked: t, onChange: this._handleDiscoverableByPhoneToggle })));
                }
            }
        },
        583638: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            var n = s(807896),
                o = s(202784),
                i = s(114777),
                a = s(118823);
            const r = (e) => o.createElement(i.Z, (0, n.Z)({}, e, { flowName: "convert_to_professional", ocfModule: a.qE }));
        },
        149345: (e, t, s) => {
            s.r(t), s.d(t, { default: () => r });
            var n = s(807896),
                o = s(202784),
                i = s(114777),
                a = s(118823);
            const r = (e) => o.createElement(i.Z, (0, n.Z)({}, e, { flowName: "make_more_connections", ocfModule: a.qE }));
        },
        465404: (e, t, s) => {
            s.r(t), s.d(t, { default: () => h });
            var n = s(807896),
                o = s(202784),
                i = s(114777),
                a = s(163889),
                r = s(2430),
                c = s(730996),
                l = s(996563),
                d = s(615027);
            const p = (e, t) => (0, r.BX)(e[t]),
                u = (e, t) => {
                    switch (p(e, t)) {
                        case "1":
                        case "true":
                            return !0;
                        default:
                            return !1;
                    }
                },
                _ = (e) => {
                    const t = (0, c.W)(p(e, "source") || "");
                    return { client_app_id: p(e, "client_app_id"), client_location: p(e, "client_location"), client_referer: p(e, "client_referer"), community_id: p(e, "community_id"), conversation_section: p(e, "conversation_section"), impression_id: p(e, "impression_id"), is_media: u(e, "is_media"), is_promoted: u(e, "is_promoted"), report_flow_id: p(e, "report_flow_id"), report_referrer: p(e, "report_referrer"), reported_broadcast_id: p(e, "reported_broadcast_id"), reported_direct_message_conversation_id: p(e, "reported_direct_message_conversation_id"), reported_direct_message_id: p(e, "reported_direct_message_id"), reported_list_id: p(e, "reported_list_id"), reported_moment_id: p(e, "reported_moment_id"), reported_tweet_id: p(e, "reported_tweet_id"), reported_user_id: p(e, "reported_user_id"), reported_user_label: p(e, "reported_user_label"), source: t };
                };
            function h(e) {
                const {
                    history: t,
                    location: { query: s, state: r },
                } = e;
                if (!!!s?.input_flow_data && !r?.input?.requested_variant)
                    try {
                        return t.replace(location.pathname, { input: { requested_variant: JSON.stringify(_(s)) } }), null;
                    } catch (e) {
                        return (0, a.ZP)(e), o.createElement(d.Z, { to: "/home" });
                    }
                return o.createElement(i.Z, (0, n.Z)({}, e, { flowName: "report-flow", ocfModule: l.Z }));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-5fa231a1.0765326a.js.map
