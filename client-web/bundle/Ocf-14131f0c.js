"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-14131f0c"],
    {
        75820: (t, e, s) => {
            s.d(e, { ZP: () => V });
            var i = s(807896),
                a = s(202784),
                n = s(946847),
                o = s(392237),
                r = s(111677),
                l = s.n(r),
                d = s(520913),
                h = s(516951),
                u = s(143778),
                c = s(290402),
                p = s(555079),
                _ = s(782826),
                m = s(804027),
                k = s(312771),
                g = s(280947),
                b = s(975364),
                v = s(71620),
                f = s(668214),
                y = s(704279),
                w = s(118823);
            const C = (t, e) => (Array.isArray(e.location.query.error) ? e.location.query.error[0] : e.location.query.error),
                I = (t, e) => !!e.location.query.state,
                x = (0, f.Z)()
                    .propsFromState(() => ({ importError: C, startImport: I }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("EMAIL_CONTACTS_SYNC"), importStatus: w.YU, scribeAction: y.n, syncContacts: w.Wl })),
                S = l().cea71014;
            class E extends a.Component {
                constructor(t) {
                    super(t),
                        (this._startContactImports = (t) => {
                            this._scribeOAuthAction("accepted");
                            const { createLocalApiErrorHandler: e, syncContacts: s } = this.props;
                            s(t)
                                .then((t) => this._pollImportStatus())
                                .catch((t) => {
                                    e()(t), this.setState({ importFinished: !0 });
                                });
                        }),
                        (this._handlePrimaryActionClick = () => {
                            const {
                                subtask: { authorization_url: t, open_in_new_tab: e },
                            } = this.props;
                            if (e) {
                                const e = `width=500,height=500,top=0,left=${window.innerWidth - 500},toolbar=no,location=yes`;
                                window.open(t, "twitter_oauth", e).focus();
                            } else _.ZP.navigateTo(t);
                        }),
                        (this._handleTertiaryActionClick = () => {
                            const { onNavigate: t, subtask: e, subtaskId: s, updateFlow: i } = this.props,
                                { skip_link: a } = e;
                            i(s, { link: a.link_id }), t(a);
                        }),
                        (this._scribeOAuthAction = (t) => {
                            const { scribeAction: e } = this.props;
                            e({ page: "onboarding", section: "email_contacts_sync", component: "oauth_prompt", element: "permission", action: t });
                        }),
                        (this._handleEvent = (t) => {
                            if (t.origin === `https://${window.location.hostname}`) {
                                const e = { callback_url: `https://${window.location.hostname}${window.location.pathname}`, ...t.data };
                                !e.error && e.state && this._startContactImports(e);
                            }
                        }),
                        (this._pollImportStatus = (t = 1) => {
                            if (t > 10) this.setState({ importFinished: !0 });
                            else {
                                const { createLocalApiErrorHandler: e, importStatus: s } = this.props;
                                this._timer = setTimeout(() => {
                                    s()
                                        .then((e) => {
                                            switch (e.status) {
                                                case m.$T.Success:
                                                    this.setState({ importFinished: !0 });
                                                    break;
                                                case m.$T.NotFound:
                                                    this._pollImportStatus(t + 1);
                                                    break;
                                                default:
                                                    this.setState({ importFinished: !0 });
                                            }
                                        })
                                        .catch((t) => {
                                            e()(t), this.setState({ importFinished: !0 });
                                        });
                                }, 1e3);
                            }
                        }),
                        (this.state = { importFinished: void 0 }),
                        (this._navigating = !1),
                        window.addEventListener("message", this._handleEvent, !1);
                }
                componentDidMount() {
                    const {
                        importError: t,
                        location: e,
                        onNavigate: s,
                        passthroughOcfScreenProps: { history: i },
                        startImport: a,
                        subtask: n,
                        subtaskId: o,
                        updateFlow: r,
                    } = this.props;
                    this._showLoadingSpinner = a;
                    const { decline_link: l } = n;
                    if ("access_denied" === t) this._scribeOAuthAction("declined"), l && (r(o, { link: l.link_id }), s(l));
                    else if (a) {
                        const { error: t, state: s } = e.query,
                            a = { callback_url: `https://${window.location.hostname}${e.pathname}` };
                        t && "string" == typeof t && (a.error = t), s && "string" == typeof s && (a.state = s), i && i.replace(e.pathname), this._startContactImports(a);
                    }
                }
                componentWillUnmount() {
                    this._timer && clearTimeout(this._timer), window.removeEventListener("message", this._handleEvent, !1);
                }
                componentDidUpdate() {
                    const { onNavigate: t, subtask: e, subtaskId: s, updateFlow: i } = this.props,
                        { importFinished: a } = this.state,
                        { next_link: n } = e;
                    !this._navigating && a && ((this._navigating = !0), i(s, { link: n.link_id }), t(n));
                }
                render() {
                    const { errorDialog: t, onNavigate: e, passthroughOcfScreenProps: s, subtask: o, subtaskInputs: r } = this.props,
                        { accept_text: l, detail_text: _, primary_text: m, secondary_text: v, skip_link: f } = o,
                        y = a.createElement(b.Z, (0, i.Z)({}, m, { id: p.Q_, onNavigate: e, subtaskInputs: r })),
                        w = v ? a.createElement(b.Z, (0, i.Z)({}, v, { onNavigate: e, subtaskInputs: r })) : null,
                        C = _ ? a.createElement(b.Z, (0, i.Z)({}, _, { onNavigate: e, subtaskInputs: r })) : null;
                    return this._showLoadingSpinner ? a.createElement(c.Z, { fetchStatus: k.ZP.LOADING, loadingMessage: S, onRequestRetry: h.Z, render: u.Z, retryable: !1 }) : a.createElement(g.Z, (0, i.Z)({ hideLogo: !0 }, s), a.createElement(n.Z, { actionLabel: l, footer: C, graphic: d.default, graphicStyle: P.twitterIcon, headline: y, onAction: this._handlePrimaryActionClick, onClose: h.Z, onTertiaryAction: this._handleTertiaryActionClick, subtext: w, tertiaryActionLabel: f.label, withCloseButton: !1 }), t);
                }
            }
            const P = o.default.create((t) => ({ twitterIcon: { color: t.colors.brandColor } })),
                V = x(E);
        },
        347882: (t, e, s) => {
            s.d(e, { Z: () => y });
            var i = s(807896),
                a = s(202784),
                n = s(855488),
                o = s(392237),
                r = s(511473),
                l = s(227991),
                d = s(663951),
                h = s(280947),
                u = s(975364),
                c = s(305784),
                p = s(153925),
                _ = s(71620),
                m = s(668214),
                k = s(118823);
            const g = (0, m.Z)()
                    .propsFromState(() => ({ navigationContext: k.b, verificationSendFailureMessage: k.aR }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("OCF_FLOW_EMAIL_VERIFICATION"), getVerificationStatus: k.Ai, verifyIdentifier: k.if })),
                b = "email";
            class v extends a.Component {
                constructor(t) {
                    super(t),
                        (this._sendEmailVerificationRequest = () => {
                            const { createLocalApiErrorHandler: t, onNavigate: e, subtask: s, subtaskInputs: i, verifyIdentifier: a } = this.props,
                                n = (s.email && (0, p.Ds)(i, s.email)) || void 0,
                                o = (s.name && (0, p.Ds)(i, s.name)) || void 0;
                            return a({ email: n, display_name: o })
                                .then((t) => {
                                    this.setState({ email: n });
                                })
                                .catch((i) => {
                                    const { flowName: a, verificationSendFailureMessage: n } = this.props;
                                    t((0, r.uJ)(a, n || r.rf))(i), e(s.fail_link);
                                });
                        }),
                        (this._handleCodeUpdated = (t) => {
                            this.setState({ pinCode: t.target.value });
                        }),
                        (this._startStatusPolling = () => {
                            const { createLocalApiErrorHandler: t, getVerificationStatus: e, subtask: s, subtaskInputs: i } = this.props,
                                a = s.email.subtask_data_reference,
                                n = a ? i[a.subtask_id][a.key] : void 0;
                            this._timer = setTimeout(() => {
                                e({ email: n })
                                    .then((t) => {
                                        t.verified ? (this.setState({ pinCode: t.pin_code }), this._clearTimer(), this._handleDoneButtonClick({ pinCode: t.pin_code })) : (this._clearTimer(), this._startStatusPolling());
                                    })
                                    .catch((e) => {
                                        t()(e), this._clearTimer(), this._startStatusPolling();
                                    });
                            }, 1e3);
                        }),
                        (this._clearTimer = () => {
                            this._timer && clearTimeout(this._timer);
                        }),
                        (this._handleDoneButtonClick = (t = {}) => {
                            const { onNavigate: e, subtask: s, subtaskId: i, updateFlow: a } = this.props,
                                { email: n } = this.state;
                            a(i, { code: t.pinCode ?? this.state.pinCode, email: n, link: s.next_link.link_id }), e(s.next_link);
                        });
                    const { subtaskId: e, subtaskInputs: s } = t,
                        i = (0, p.OG)(s, { key: b, subtask_id: e }, "") || "";
                    this.state = { email: i, pinCode: "" };
                }
                componentDidMount() {
                    const {
                        subtask: { verification_status_polling_enabled: t },
                    } = this.props;
                    return t && this._startStatusPolling(), this._sendEmailVerificationRequest();
                }
                componentWillUnmount() {
                    this._clearTimer();
                }
                render() {
                    const { onNavigate: t, passthroughOcfScreenProps: e, subtask: s, subtaskInputs: o } = this.props,
                        { next_link: r, primary_text: p, secondary_text: _ } = s,
                        m = a.createElement(u.Z, (0, i.Z)({}, s.detail_text, { color: "link", onNavigate: t, style: f.detailLink, subtaskInputs: o }));
                    return a.createElement(h.Z, (0, i.Z)({}, e, { footer: a.createElement(l.ZP, { actionDisabled: !this.state.pinCode, actionLabel: r?.label, onAction: this._handleDoneButtonClick }), header: a.createElement(d.Z, { onNavigate: t, primaryTextProp: p, secondaryTextProp: _, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(n.Z, { autoFocus: !0, helperText: s.detail_text && m, label: s.hint_text, name: "verfication_code", onChange: this._handleCodeUpdated, style: c.Z.formTextInput, value: this.state.pinCode }), this.props.errorDialog);
                }
            }
            const f = o.default.create((t) => ({ detailLink: { marginTop: t.spaces.space16 } })),
                y = g(v);
        },
        709969: (t, e, s) => {
            s.d(e, { Z: () => m });
            var i = s(807896),
                a = s(202784),
                n = s(260706),
                o = s(908478),
                r = s(227991),
                l = s(663951),
                d = s(280947),
                h = s(975364),
                u = s(153925);
            const c = "ocfEnterDateNextLink",
                p = "ocfEnterDateSkipLink",
                _ = { day: void 0, month: void 0, year: void 0 };
            class m extends a.Component {
                constructor(t) {
                    super(t),
                        (this._handleDateChange = (t) => {
                            this.setState({ date: t });
                        }),
                        (this._isCompleteDate = (t) => !!(t && t.year && t.month && t.day)),
                        (this._isDateEmpty = () => {
                            const { date: t } = this.state;
                            return (0, o.Z)(t, _);
                        }),
                        (this._meetsMinYearRequirement = (t) => {
                            const {
                                subtask: { valid_interval: e },
                            } = this.props;
                            return !(e?.min?.year && !(t.year && t.year >= e?.min?.year));
                        }),
                        (this._meetsMaxYearRequirement = (t) => {
                            const {
                                subtask: { valid_interval: e },
                            } = this.props;
                            return !(e?.max?.year && !(t.year && t.year <= e?.max?.year));
                        }),
                        (this._isDateValid = () => {
                            const { date: t } = this.state;
                            return this._isCompleteDate(t) && this._meetsMinYearRequirement(t) && this._meetsMaxYearRequirement(t);
                        }),
                        (this._dateErrorMessage = () => {
                            const { date: t } = this.state;
                            if (!this._isCompleteDate(t)) return;
                            const {
                                    subtask: { max_date_error: e, min_date_error: s },
                                } = this.props,
                                i = this._meetsMinYearRequirement(t);
                            return this._meetsMaxYearRequirement(t) ? (i ? void 0 : s?.text) : e?.text;
                        }),
                        (this._handleDoneButtonClick = () => {
                            const {
                                    onNavigate: t,
                                    subtask: { next_link: e },
                                    subtaskId: s,
                                    updateFlow: i,
                                } = this.props,
                                { date: a } = this.state;
                            a && this._isDateValid() && (i(s, { date: a, link: e.link_id }), t(e));
                        }),
                        (this._handleSkipButtonClick = () => {
                            const {
                                onNavigate: t,
                                subtask: { skip_link: e },
                                subtaskId: s,
                                updateFlow: i,
                            } = this.props;
                            e && i(s, { link: e.link_id }), e && t(e);
                        });
                    const { subtaskId: e, subtaskInputs: s } = this.props,
                        i = (0, u.OG)(s, { key: "date", subtask_id: e }, void 0) || _;
                    this.state = { date: i };
                }
                render() {
                    const { errorDialog: t, onNavigate: e, passthroughOcfScreenProps: s, subtask: o, subtaskInputs: u } = this.props,
                        { detail_text: _, hint_text: m, next_link: k, selectable_interval: g, skip_link: b } = o,
                        { date: v = {} } = this.state;
                    return a.createElement(d.Z, (0, i.Z)({}, s, { footer: a.createElement(r.ZP, { actionDisabled: !this._isDateValid(), actionLabel: b && this._isDateEmpty() ? void 0 : k?.label, actionTestID: c, onAction: this._handleDoneButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: b && this._isDateEmpty() ? b?.label : void 0, secondaryActionTestID: p }), header: a.createElement(l.Z, { header: o.header, onNavigate: e, subtaskInputs: u, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(n.Z, { autofocus: !0, day: v.day, errorMessage: this._dateErrorMessage(), label: m, maxSelectableYear: g?.max?.year, minSelectableYear: g?.min?.year, month: v.month, onChange: this._handleDateChange, year: v.year }), _ ? a.createElement(h.Z, (0, i.Z)({}, _, { color: "gray700", onNavigate: e, subtaskInputs: u })) : null, t);
                }
            }
        },
        633529: (t, e, s) => {
            s.d(e, { Z: () => m });
            var i = s(807896),
                a = s(202784),
                n = s(325686),
                o = s(392237),
                r = s(700613),
                l = s(227991),
                d = s(663951),
                h = s(280947),
                u = s(968997),
                c = s(153925);
            const p = "ocfEnterEmailNextLink",
                _ = "ocfEnterEmailSkipLink";
            class m extends a.Component {
                constructor(t) {
                    super(t),
                        (this._renderEmailTextField = () => a.createElement(r.Z, { autoComplete: "email", autoFocus: !0, defaultValue: this.state.email, label: this.props.subtask.hint_text, name: "email", onRef: this._handleSetInputRef, onValidityChange: this._handleUpdateValidity, style: k.emailTextField })),
                        (this._getInitialSettingValues = (t, e, s) =>
                            t.settings?.map((t) => {
                                const i = t.value_identifier;
                                if (void 0 === i) return {};
                                const a = t.value_data?.boolean_data?.initial_value ?? !1;
                                return { valueIdentifier: i, value: (0, c.OG)(s, { key: i, subtask_id: e }, void 0) ?? a };
                            })),
                        (this._toggleSettingValue = (t) => {
                            const { settingValues: e } = this.state,
                                s = e?.map((e) => (e.valueIdentifier === t ? { valueIdentifier: t, value: !e.value } : e));
                            this.setState({ settingValues: s });
                        }),
                        (this._renderSettings = () => {
                            const { onNavigate: t, subtask: e, subtaskId: s, subtaskInputs: i } = this.props;
                            return (
                                e.settings?.map((e) => {
                                    const n = e.value_identifier;
                                    return void 0 === n ? null : a.createElement(u.Z, { key: n, onNavigate: t, onSettingToggle: () => this._toggleSettingValue(n), settingValue: e, subtaskId: s, subtaskInputs: i });
                                }) ?? null
                            );
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { subtask: t } = this.props,
                                { settingValues: e } = this.state,
                                s = e?.map(({ value: t, valueIdentifier: e }) => ({ key: e, response_data: { boolean_data: { result: t } } })),
                                i = { setting_responses: s, email: this._getIdentifierValue(), link: t.next_link.link_id };
                            this._handleButtonClick(t.next_link, i);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { subtask: t } = this.props;
                            t.skip_link && this._handleButtonClick(t.skip_link, { link: t.skip_link.link_id });
                        }),
                        (this._handleButtonClick = (t, e) => {
                            const { onNavigate: s, subtaskId: i, updateFlow: a } = this.props;
                            a(i, e), s(t);
                        }),
                        (this._handleSetInputRef = (t) => {
                            this._input = t;
                        }),
                        (this._handleUpdateValidity = () => {
                            const t = this._input && this._input.isValid();
                            this.setState({ isValid: !!t });
                        }),
                        (this._getIdentifierValue = () => (this._input && this._input.getValue()) || void 0);
                    const { subtask: e, subtaskId: s, subtaskInputs: i } = t,
                        n = (0, c.OG)(i, { key: "email", subtask_id: s }, "") || void 0,
                        o = this._getInitialSettingValues(e, s, i);
                    this.state = { email: n, isValid: !!n, settingValues: o };
                }
                render() {
                    const { onNavigate: t, passthroughOcfScreenProps: e, subtask: s, subtaskInputs: o } = this.props,
                        { next_link: r, primary_text: u, secondary_text: c, skip_link: m } = s;
                    return a.createElement(h.Z, (0, i.Z)({}, e, { footer: a.createElement(l.ZP, { actionDisabled: !this.state.isValid, actionLabel: this.state.isValid || !m ? r?.label : void 0, actionTestID: p, onAction: this._handleDoneButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this.state.isValid ? void 0 : m?.label, secondaryActionTestID: _, secondaryActionType: "primaryOutlined" }), header: a.createElement(d.Z, { onNavigate: t, primaryTextProp: u, secondaryTextProp: c, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(n.Z, { style: k.textFieldArea }, this._renderEmailTextField()), this._renderSettings(), this.props.errorDialog);
                }
            }
            const k = o.default.create((t) => ({ textFieldArea: { marginTop: t.spaces.space20 }, emailTextField: { paddingHorizontal: 0, paddingVertical: t.spaces.space16 } }));
        },
        349590: (t, e, s) => {
            s.d(e, { Z: () => O });
            var i = s(807896),
                a = s(202784),
                n = s(325686),
                o = s(855488),
                r = s(420412),
                l = s(731708),
                d = s(392237),
                h = s(111677),
                u = s.n(h),
                c = s(516951),
                p = s(443781),
                _ = s(911318),
                m = s(804027),
                k = s(380020),
                g = s(227991),
                b = s(663951),
                v = s(495161),
                f = s(280947),
                y = s(975364),
                w = s(738374),
                C = s(900069),
                I = s(305784),
                x = s(153925),
                S = s(668214),
                E = s(24546);
            const P = (0, S.Z)()
                    .propsFromActions(() => ({ sendAllPreviews: E.MH }))
                    .withAnalytics(),
                V = "LoginForm_Login_Button",
                Z = "LoginForm_Skip_Button",
                T = "LoginForm_Footer_Container",
                A = u().d1f6d336,
                F = u().a3841918,
                N = u().f70cd5ee,
                D = u().ca86b62c;
            class L extends a.Component {
                constructor(...t) {
                    super(...t),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this.state = {}),
                        (this._renderIdentifier = () => {
                            const { subtask: t } = this.props,
                                { email: e, phone_number: s, user_identifier_display_type: i, username: n } = t;
                            let r, l;
                            return "phone_number" === i ? ((r = s), (l = N)) : "username" === i ? ((r = n), (l = A)) : "email" === i && ((r = e), (l = F)), r && l && i ? a.createElement(o.Z, { editable: !1, label: l, name: i, onChange: c.Z, style: I.Z.formTextInput, value: r }) : null;
                        }),
                        (this._renderPasswordFields = () => {
                            const { onNavigate: t, subtask: e, subtaskInputs: s } = this.props,
                                { show_password_confirmation: n } = e;
                            if (e.password_field || e.new_password_field || e.confirm_password_field) {
                                const n = { onNavigate: t, onSubmitEditing: this._handleTextSubmit, subtaskInputs: s },
                                    o = e.password_field ?? e.new_password_field;
                                return a.createElement(a.Fragment, null, o ? a.createElement(w.Z, (0, i.Z)({}, n, { autoFocus: !0, onChange: this._handlePasswordChange, passwordProps: { onPasswordValidated: this._handleValidationChange, skipPasswordValidation: e.skip_password_validation }, textField: o })) : null, e.confirm_password_field ? a.createElement(w.Z, (0, i.Z)({}, n, { onChange: this._handlePasswordConfirmationChange, passwordProps: { onPasswordValidated: this._handleValidationChange, customValidator: this._validatePasswordConfirmation }, textField: e.confirm_password_field })) : null);
                            }
                            return a.createElement(a.Fragment, null, a.createElement(v.Z, { autoComplete: this._getPasswordAutoCompleteValue(), autoFocus: !0, label: e.hint, onPasswordChange: this._handlePasswordChange, onPasswordValidated: this._handleValidationChange, onSubmitEditing: this._handleTextSubmit, skipPasswordValidation: e.skip_password_validation, userIdentifier: e.username }), n ? a.createElement(v.Z, { autoComplete: this._getPasswordAutoCompleteValue(), customValidator: this._validatePasswordConfirmation, label: e.password_confirmation_hint, onPasswordChange: this._handlePasswordConfirmationChange, onPasswordValidated: this._handleValidationChange, onSubmitEditing: this._handleTextSubmit, userIdentifier: e.username }) : null);
                        }),
                        (this._renderFooter = () => {
                            const { onNavigate: t, subtask: e, subtaskInputs: s } = this.props,
                                { footer: o, next_link: d, skip_link: h } = e,
                                u = this._isPasswordValid(),
                                c = this._passwordlessSsoEnabled ? e.action_buttons?.map((e, i) => a.createElement(k.Z, { button: e, displayType: (0, x.sI)(e.navigation_link.link_id), key: i, onNavigate: t, subtaskInputs: s })) : [],
                                p = e.footer?.footnote_text ? a.createElement(y.Z, (0, i.Z)({}, e.footer.footnote_text, { color: "gray700", onNavigate: t, style: B.footnoteText, subtaskInputs: s })) : null,
                                _ = a.createElement(g.ZP, { actionDisabled: !u, actionLabel: u || !h ? d?.label : void 0, actionTestID: V, buttonSize: o?.style === m.$b.Floating ? "medium" : void 0, detailText: o?.detail_text, onAction: this._handleDoneButtonClick, onNavigate: t, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: u ? void 0 : h?.label, secondaryActionTestID: Z, subtaskInputs: s });
                            return a.createElement(n.Z, { testID: T }, _, c?.length ? a.createElement(r.Z, { label: a.createElement(l.ZP, null, D) }) : null, c, p);
                        }),
                        (this._validatePasswordConfirmation = () => {
                            const { subtask: t } = this.props,
                                { password_confirmation_mismatch_message: e } = t,
                                s = t.confirm_password_field?.validation_messages?.find((t) => t.message_type === m.IN.Mismatch);
                            let i;
                            if ((s ? (i = s.text.text) : e?.text && (i = e?.text), i)) {
                                const { password: t, passwordConfirmation: e } = this.state;
                                if (t !== e) return { valid: !1, errorMessage: i };
                            }
                            return { valid: !0, errorMessage: void 0 };
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { onNavigate: t, sendAllPreviews: e, subtask: s, subtaskId: i, updateFlow: a } = this.props;
                            e().finally(() => {
                                this._saveCredentialsIfNeeded()
                                    .then(() => {
                                        a(i, { password: this.state.password, link: s.next_link.link_id }), t(s.next_link);
                                    })
                                    .catch(() => {
                                        a(i, { password: this.state.password, link: s.next_link.link_id }), t(s.next_link);
                                    });
                            });
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { onNavigate: t, subtask: e, subtaskId: s, updateFlow: i } = this.props,
                                a = e.skip_link;
                            a && (i(s, { link: a.link_id }), t(a));
                        }),
                        (this._handlePasswordChange = (t) => {
                            this.setState({ password: t });
                        }),
                        (this._handlePasswordConfirmationChange = (t) => {
                            this.setState({ passwordConfirmation: t });
                        }),
                        (this._handleValidationChange = (t) => {
                            const { subtask: e } = this.props,
                                { show_password_confirmation: s } = e;
                            if (e.confirm_password_field || s) {
                                const e = this._validatePasswordConfirmation().valid;
                                this.setState({ isPasswordValid: t && e });
                            } else this.setState({ isPasswordValid: t });
                        }),
                        (this._isPasswordValid = () => {
                            const { subtask: t } = this.props,
                                { isPasswordValid: e, password: s } = this.state,
                                i = !(s && s.length);
                            return e || (t.skip_password_validation && !i);
                        }),
                        (this._handleTextSubmit = () => {
                            this._isPasswordValid() && this._handleDoneButtonClick();
                        }),
                        (this._saveCredentialsIfNeeded = () => {
                            const { subtask: t } = this.props,
                                { email: e, phone: s, skip_password_validation: i, username: a } = t,
                                { password: n } = this.state,
                                o = !!window.PasswordCredential,
                                r = a || e || s;
                            if (r && o && !i && navigator.credentials) {
                                const t = new window.PasswordCredential({ id: r, password: n });
                                return navigator.credentials.store(t);
                            }
                            return Promise.resolve();
                        }),
                        (this._getPasswordAutoCompleteValue = () => {
                            const { subtask: t } = this.props;
                            switch (t.os_content_type) {
                                case m.Dk.Password:
                                    return "current-password";
                                case m.Dk.NewPassword:
                                    return "new-password";
                                default:
                                    return "on";
                            }
                        }),
                        (this._hasSSOButtons = () => {
                            const { subtask: t } = this.props;
                            return !!t.action_buttons?.find((t) => {
                                const e = (0, x.sI)(t.navigation_link.link_id);
                                return e === m.GN.GoogleSSO || e === m.GN.AppleSSO;
                            });
                        });
                }
                render() {
                    const { errorDialog: t, onNavigate: e, passthroughOcfScreenProps: s, subtask: o, subtaskInputs: r } = this.props,
                        l = o.footer?.style ?? m.$b.Fixed,
                        d = this._passwordlessSsoEnabled && o.action_buttons?.length;
                    return a.createElement(f.Z, (0, i.Z)({}, s, { footer: l === m.$b.Fixed ? this._renderFooter() : null, providePadding: !0 }), a.createElement(n.Z, { style: !!d && B.compact }, a.createElement(b.Z, { header: o.header, onNavigate: e, primaryTextProp: o.primary_text, secondaryTextProp: o.secondary_text, subtaskInputs: r, userInfo: this._passwordlessSsoEnabled ? a.createElement(C.Z, { displayType: m.CE.compact, onNavigate: e, subtaskInputs: r, user: o.header?.user, userCaption: o.header?.user_caption }) : void 0 }), this._renderIdentifier(), this._renderPasswordFields(), l === m.$b.Floating || l === m.$b.FloatingLarge ? this._renderFooter() : null), t);
                }
            }
            L.contextType = p.rC;
            const B = d.default.create((t) => ({ footnoteText: { marginBottom: t.spaces.space24 }, detailText: { marginBottom: t.spaces.space40 }, compact: { margin: "auto", minWidth: _.fI + 64, maxWidth: _.fI + 64 } })),
                O = P(L);
        },
        957457: (t, e, s) => {
            s.d(e, { Z: () => v });
            var i = s(807896),
                a = s(202784),
                n = s(325686),
                o = s(466818),
                r = s(392237),
                l = s(111677),
                d = s.n(l),
                h = s(102516),
                u = s(227991),
                c = s(663951),
                p = s(280947),
                _ = s(968997),
                m = s(153925);
            const k = "ocfEnterPhoneNextLink",
                g = "ocfEnterPhoneSkipLink",
                b = d().gf8388fe;
            class v extends a.Component {
                constructor(t) {
                    super(t),
                        (this._renderCountryCodes = () => {
                            const { country_codes: t } = this.props.subtask;
                            if (t && t.length) {
                                const e = t.map((t) => ({ label: t.text.text, value: t.id }));
                                return a.createElement(o.ZP, { helperText: void 0, label: b, onChange: this._handleCountryChange, options: e, value: this.state.countryCode || "" });
                            }
                            return null;
                        }),
                        (this._handleCountryChange = (t) => {
                            this.setState({ countryCode: t });
                        }),
                        (this._renderPhoneTextField = () => a.createElement(h.Z, { autoComplete: "tel", countryCode: this.state.countryCode, defaultValue: this.state.phoneNumber, label: this.props.subtask.hint_text, name: "phone_number", onRef: this._handleSetInputRef, onValidityChange: this._handleUpdateValidity, style: f.phoneTextField })),
                        (this._getInitialSettingValues = (t, e, s) =>
                            t.settings?.map((t) => {
                                const i = t.value_identifier;
                                if (void 0 === i) return {};
                                const a = t.value_data?.boolean_data?.initial_value ?? !1;
                                return { valueIdentifier: i, value: (0, m.OG)(s, { key: i, subtask_id: e }, void 0) ?? a };
                            })),
                        (this._toggleSettingValue = (t) => {
                            const { settingValues: e } = this.state,
                                s = e?.map((e) => (e.valueIdentifier === t ? { valueIdentifier: t, value: !e.value } : e));
                            this.setState({ settingValues: s });
                        }),
                        (this._renderSettings = () => {
                            const { onNavigate: t, subtask: e, subtaskId: s, subtaskInputs: i } = this.props;
                            return (
                                e.settings?.map((e) => {
                                    const n = e.value_identifier;
                                    return void 0 === n ? null : a.createElement(_.Z, { key: n, onNavigate: t, onSettingToggle: () => this._toggleSettingValue(n), settingValue: e, subtaskId: s, subtaskInputs: i });
                                }) ?? null
                            );
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { subtask: t } = this.props,
                                { countryCode: e, settingValues: s } = this.state,
                                i = s?.map(({ value: t, valueIdentifier: e }) => ({ key: e, response_data: { boolean_data: { result: t } } })),
                                a = { country_code: e, phone_number: this._getIdentifierValue(), setting_responses: i, link: t.next_link.link_id };
                            this._handleButtonClick(t.next_link, a);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { subtask: t } = this.props;
                            t.skip_link && this._handleButtonClick(t.skip_link, { link: t.skip_link.link_id });
                        }),
                        (this._handleButtonClick = (t, e) => {
                            const { onNavigate: s, subtaskId: i, updateFlow: a } = this.props;
                            a(i, e), s(t);
                        }),
                        (this._handleSetInputRef = (t) => {
                            this._input = t;
                        }),
                        (this._handleUpdateValidity = () => {
                            const t = this._input && this._input.isValid();
                            this.setState({ isValid: !!t });
                        }),
                        (this._getIdentifierValue = () => (this._input && this._input.getValue()) || void 0);
                    const { subtask: e, subtaskId: s, subtaskInputs: i } = t,
                        n = (0, m.OG)(i, { key: "country_code", subtask_id: s }, e.default_country_code) || void 0,
                        r = (0, m.OG)(i, { key: "phone_number", subtask_id: s }, "") || void 0,
                        l = this._getInitialSettingValues(e, s, i);
                    this.state = { countryCode: n, phoneNumber: r, isValid: !!r, settingValues: l };
                }
                render() {
                    const { onNavigate: t, passthroughOcfScreenProps: e, subtask: s, subtaskInputs: o } = this.props,
                        { next_link: r, primary_text: l, secondary_text: d, skip_link: h } = s;
                    return a.createElement(p.Z, (0, i.Z)({}, e, { footer: a.createElement(u.ZP, { actionDisabled: !this.state.isValid, actionLabel: this.state.isValid || !h ? r?.label : void 0, actionTestID: k, onAction: this._handleDoneButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this.state.isValid ? void 0 : h?.label, secondaryActionTestID: g, secondaryActionType: "primaryOutlined" }), header: a.createElement(c.Z, { onNavigate: t, primaryTextProp: l, secondaryTextProp: d, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(n.Z, { style: f.textFieldArea }, this._renderCountryCodes(), this._renderPhoneTextField()), this._renderSettings(), this.props.errorDialog);
                }
            }
            const f = r.default.create((t) => ({ textFieldArea: { marginTop: t.spaces.space20 }, phoneTextField: { paddingHorizontal: 0, paddingVertical: t.spaces.space16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-14131f0c.8a3594fa.js.map
