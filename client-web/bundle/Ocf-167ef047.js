"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-167ef047"],
    {
        436488: (e, t, s) => {
            s.d(t, { Z: () => Q });
            var a = s(807896),
                i = s(202784),
                n = s(325686),
                o = s(688715),
                r = s(731708),
                l = s(260706),
                c = s(392237),
                d = s(111677),
                u = s.n(d),
                p = s(38293),
                h = s(700613),
                _ = s(102516),
                m = s(944681),
                b = s(804027),
                k = s(601798),
                g = s(227991),
                f = s(663951),
                y = s(280947),
                w = s(153925),
                I = s(71620),
                x = s(668214),
                v = s(704279),
                Z = s(118823),
                E = s(205253);
            const T = (e) => !E.LP(e).is_eu_country,
                C = (0, I.zr)("OCF_FLOW"),
                S = (0, x.Z)()
                    .propsFromState(() => ({ navigationContext: Z.b, personalizationSettings: E.kQ, shouldPropagateP13nSettings: T }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: C, fetchPreferencesIfNeeded: E.CP, scribeAction: v.n, syncPersonalizationSettings: E.Z$ }));
            var F = s(855488),
                N = s(401388),
                P = s(443781),
                B = s(305784);
            const A = u().d44efc66,
                D = u().b4867a18,
                U = u().d4e220b4;
            class O extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { errorMessage: "", isValid: !0, value: "" }),
                        (this._updateValue = (e) => {
                            const { callback: t } = this.props,
                                s = (0, N.Z)(e.trim()),
                                a = !s && -1 !== e.toLowerCase().indexOf("twitter"),
                                i = !s && !a;
                            let n = "";
                            s ? (n = A) : a && (n = D), this.setState({ errorMessage: n, isValid: i, value: e }), t(e, i);
                        }),
                        (this._handleValueChange = (e) => {
                            const { value: t } = e.target;
                            this._updateValue(t);
                        });
                }
                componentDidMount() {
                    const { defaultValue: e } = this.props;
                    e && this._updateValue(e);
                }
                render() {
                    const { callback: e, defaultValue: t, label: s, ...n } = this.props,
                        { errorMessage: o, isValid: r } = this.state,
                        l = this.context.featureSwitches.getValue("user_display_name_max_limit", 50);
                    return i.createElement(F.Z, (0, a.Z)({}, n, { errorText: o, invalid: !r, label: s || U, maxLength: "number" == typeof l ? l : 50, name: "name", onChange: this._handleValueChange, positionCursorAtEnd: !0, style: B.Z.formTextInput, value: this.state.value }));
                }
            }
            O.contextType = P.rC;
            const V = "ocfSignupNextLink",
                G = u().bec9cff8,
                L = Object.freeze({ Birthday: "birthday", Email: "email", Name: "name", Phone: "phone_number" }),
                M = "select_birthday",
                z = "select_email",
                R = "select_name",
                H = "select_phone",
                j = { page: "onboarding", component: "signup" },
                W = (0, o.ju)("https://x.com/i/js_inst?c_name=ui_metrics");
            class $ extends i.Component {
                constructor(e) {
                    super(e),
                        (this._getDefaultIdentifierField = () => {
                            const {
                                subtask: { allowed_identifiers: e },
                            } = this.props;
                            return e === b.AA.EmailOnly || e === b.AA.EmailThenPhone ? L.Email : L.Phone;
                        }),
                        (this._renderActiveFieldToggle = () => {
                            const {
                                subtask: { allowed_identifiers: e },
                            } = this.props;
                            return e !== b.AA.EmailOnly && e !== b.AA.PhoneOnly ? i.createElement(r.ZP, { align: "right", color: "link", onPress: this._handleActiveTextToggle, withInteractiveStyling: !0 }, this._getToggleActiveTextTitle()) : null;
                        }),
                        (this._renderNameField = () => {
                            const { navigationContext: e, subtask: t, subtaskId: s, subtaskInputs: a } = this.props,
                                n = (0, w.OG)(a, { key: L.Name, subtask_id: s }, ""),
                                o = e.action,
                                r = { autoComplete: "name", autoFocus: !o || o === R, callback: this._updateNameInfo, defaultValue: n, onFocus: this._handleNameFocus, label: t.name_hint };
                            return i.createElement(O, r);
                        }),
                        (this._renderActiveTextField = () => {
                            const { subtask: e } = this.props,
                                { activeTextField: t, defaultActiveText: s } = this.state,
                                a = this._shouldFocusActiveTextField(),
                                n = { autoComplete: t === L.Phone ? "tel" : "email", autoFocus: a, defaultValue: s, name: t === L.Phone ? "phone_number" : "email", label: t === L.Phone ? e.phone_hint : e.email_hint, onRef: this._setInputRef, onValidityChange: this._updateValidity, style: q.phoneEmailTextField };
                            return t === L.Phone ? i.createElement(_.Z, n) : i.createElement(h.Z, n);
                        }),
                        (this._handleDateChange = (e) => {
                            this.setState({ birthdayValue: e, isBirthdayValid: this._isCompleteDate(e) }, this._updateValidity);
                        }),
                        (this._isCompleteDate = (e) => !!(e && e.year && e.month && e.day)),
                        (this._getIdentifierValue = () => this._input && this._input.getValue()),
                        (this._isValid = () => {
                            const { isBirthdayValid: e, isNameValid: t } = this.state,
                                { subtask: s } = this.props,
                                a = s.ignore_birthday || e;
                            return t && a && this._input && this._input.isValid();
                        }),
                        (this._setTimRef = (e) => {
                            this._timInput = e;
                        }),
                        (this._updateValidity = () => {
                            this.setState({ isValid: this._isValid() });
                        }),
                        (this._updateNameInfo = (e, t) => {
                            this.setState({ isNameValid: t, nameValue: e }, this._updateValidity);
                        }),
                        (this._handleFetchPreferences = () => {
                            const { createLocalApiErrorHandler: e, fetchPreferencesIfNeeded: t } = this.props;
                            t().catch(e());
                        }),
                        (this._shouldFocusActiveTextField = () => {
                            const { navigationContext: e } = this.props,
                                { activeTextField: t } = this.state,
                                s = t === L.Phone ? H : z;
                            return !this.state.hasNameFieldBeenAutoFocused && e.action === s;
                        }),
                        (this._handleActiveTextToggle = () => {
                            const { activeTextField: e } = this.state,
                                t = e === L.Phone ? L.Email : L.Phone;
                            this._scribeEvent(t, "choose"), this._input && this._input.clear(), this.setState({ activeTextField: t, defaultActiveText: "" });
                        }),
                        (this._getToggleActiveTextTitle = () => {
                            const { subtask: e } = this.props,
                                { activeTextField: t } = this.state;
                            return t === L.Phone ? e.use_email_text : e.use_phone_text;
                        }),
                        (this._handleNameFocus = () => {
                            this.setState({ hasNameFieldBeenAutoFocused: !0 });
                        }),
                        (this._handleNextButtonClick = () => {
                            const { onNavigate: e, shouldPropagateP13nSettings: t, subtask: s, subtaskId: a, updateFlow: i } = this.props,
                                { activeTextField: n, birthdayValue: o, nameValue: r } = this.state,
                                { allowCookieUse: l, allowDeviceAccess: c, allowPartnerships: d, allowPersonalization: u } = this.props.personalizationSettings || {},
                                p = n === L.Email && s.email_next_link ? s.email_next_link : s.next_link,
                                h = this._timInput && this._timInput.value ? { response: this._timInput.value } : void 0,
                                _ = this._getIdentifierValue() || void 0,
                                m = { js_instrumentation: h, link: p.link_id, name: r };
                            (m[n] = _), !s.ignore_birthday && o && (m.birthday = o), t && (m.personalization_settings = { allow_cookie_use: !!l, allow_device_personalization: !!c, allow_partnerships: !!d, allow_ads_personalization: !!u }), i(a, m), e(p);
                        }),
                        (this._scribeEvent = (e, t) => {
                            const { scribeAction: s } = this.props;
                            s({ ...j, element: e, action: t });
                        }),
                        (this._setInputRef = (e) => {
                            this._input = e;
                        });
                    const { navigationContext: t, subtask: s, subtaskId: a, subtaskInputs: n } = e,
                        o = (0, w.OG)(n, { key: L.Name, subtask_id: a }, ""),
                        l = (0, w.OG)(n, { key: L.Phone, subtask_id: a }, "") || s.phone,
                        c = (0, w.OG)(n, { key: L.Email, subtask_id: a }, "") || s.email,
                        d = { day: void 0, month: void 0, year: void 0 },
                        u = (0, w.OG)(n, { key: L.Birthday, subtask_id: a }, void 0) || d,
                        p = ((e) => {
                            switch (e) {
                                case H:
                                    return { type: L.Phone, value: l };
                                case z:
                                    return { type: L.Email, value: c };
                                default:
                                    return { type: c ? L.Email : this._getDefaultIdentifierField(), value: c || l };
                            }
                        })(t.action);
                    this.state = { activeTextField: p.type, birthdayValue: u, defaultActiveText: p.value, nameValue: o, hasNameFieldBeenAutoFocused: !1, isNameValid: void 0, isBirthdayValid: this._isCompleteDate(u), isValid: void 0 };
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, syncPersonalizationSettings: t } = this.props;
                    k.Z.inject({ scriptId: "jsInstLibrary", src: W }), this._handleFetchPreferences(), t().catch(e());
                }
                componentDidUpdate() {
                    this._shouldFocusActiveTextField() && this._input && this._input.focus();
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: o } = this.props,
                        { next_link: r, primary_text: l, secondary_text: c } = s;
                    return i.createElement(y.Z, (0, a.Z)({}, t, { footer: i.createElement(g.ZP, { actionDisabled: !this.state.isValid, actionLabel: r?.label, actionTestID: V, onAction: this._handleNextButtonClick }), header: i.createElement(f.Z, { onNavigate: e, primaryTextProp: l, secondaryTextProp: c, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), i.createElement(p.Z, { title: G }), i.createElement(n.Z, null, this._renderNameField(), this._renderActiveTextField(), this._renderActiveFieldToggle(), this._renderBirthdayField(), i.createElement("input", { autoComplete: "off", name: "ui_metrics", ref: this._setTimRef, type: "hidden" })));
                }
                _renderBirthdayField() {
                    const { navigationContext: e, subtask: t } = this.props,
                        { birthday_explanation: s, birthday_hint: a, ignore_birthday: o } = t,
                        c = this.state.birthdayValue || {},
                        d = e.action === M;
                    return o ? null : i.createElement(n.Z, { "aria-label": a, role: "group", style: q.section }, i.createElement(r.ZP, { size: "body", style: q.sectionHeading, weight: "bold" }, a), i.createElement(r.ZP, { color: "gray700", size: "subtext1", style: q.sectionSubHeading }, s), i.createElement(l.Z, { autofocus: d, day: c.day, label: t.birthday_hint || "", minSelectableYear: (0, m.Q)(), month: c.month, onChange: this._handleDateChange, year: c.year }));
                }
            }
            const q = c.default.create((e) => ({ section: { marginTop: e.spaces.space20 }, sectionHeading: { marginBottom: e.spaces.space8 }, sectionSubHeading: { marginBottom: e.spaces.space4 }, phoneEmailTextField: { paddingHorizontal: 0 } })),
                Q = S($);
        },
        29066: (e, t, s) => {
            s.r(t), s.d(t, { default: () => m });
            var a = s(807896),
                i = s(202784),
                n = s(107267),
                o = s(111677),
                r = s.n(o),
                l = s(114777),
                c = s(983389),
                d = s(443781),
                u = s(38293),
                p = s(118823);
            const h = r().bec9cff8,
                _ = r().j6d103b8,
                m = (e) => {
                    const t = (0, n.useHistory)(),
                        s = (0, n.useLocation)(),
                        { featureSwitches: o } = (0, d.QZ)(),
                        r = o.isTrue("responsive_web_signup_direct");
                    if (
                        (i.useLayoutEffect(() => {
                            if (r) {
                                const e = "/i/flow/signup" === s.pathname,
                                    a = window.history.state?.state && "/i/flow/signup" !== window.history.state?.state.previousPath;
                                e && a && (t.replace(window.history.state?.state?.previousPath || "/", { previous: !0 }), (window.location.href = s.pathname));
                            }
                        }, [s, t, r]),
                        r)
                    ) {
                        const e = "/i/flow/signup" === s.pathname,
                            t = window.history.state?.state && "/i/flow/signup" !== window.history.state?.state.previousPath;
                        if (e && t) return null;
                    }
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { title: h }), i.createElement(c.Z, { description: _ }), i.createElement(l.Z, (0, a.Z)({}, e, { flowName: "signup", ocfModule: p.qE })));
                };
        },
        991376: (e, t, s) => {
            s.d(t, { Z: () => v });
            var a = s(807896),
                i = s(202784),
                n = s(325686),
                o = s(855488),
                r = s(392237),
                l = s(111677),
                c = s.n(l),
                d = s(227991),
                u = s(663951),
                p = s(280947),
                h = s(305784),
                _ = s(153925);
            const m = "ocfSignupReviewNextLink",
                b = c().a565833e,
                k = c().h3629783,
                g = c().j1c3f4b9,
                f = c().c119dee8,
                y = c().f70cd5ee,
                w = c().a3841918,
                I = c().d4e220b4;
            class x extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSignupButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, subtaskInputs: a, updateFlow: i } = this.props,
                                { email: n, phone_number: o } = t,
                                r = o && o.subtask_data_reference && (0, _.OG)(a, o.subtask_data_reference),
                                l = n && n.subtask_data_reference && (0, _.OG)(a, n.subtask_data_reference);
                            let c;
                            this._isOldEnoughOrIgnored() ? (r ? (c = t.phone_next_link) : l && (c = t.email_next_link)) : (c = t.invalid_birthday_link), c && i(s, { link: c.link_id }), c && e(c);
                        }),
                        (this._handleNavigationClick = (e) => {
                            const { onNavigate: t } = this.props;
                            t(e);
                        }),
                        (this._handleNameEdit = () => {
                            const { subtask: e } = this.props;
                            this._handleNavigationClick(e.name_edit_link);
                        }),
                        (this._handleBirthdayEdit = () => {
                            const { subtask: e } = this.props;
                            this._handleNavigationClick(e.birthday_edit_link);
                        }),
                        (this._handlePhoneEdit = () => {
                            const { subtask: e } = this.props;
                            this._handleNavigationClick(e.phone_edit_link);
                        }),
                        (this._handleEmailEdit = () => {
                            const { subtask: e } = this.props;
                            this._handleNavigationClick(e.email_edit_link);
                        }),
                        (this._handlePrivacyOptionsClick = (e) => (t) => {
                            t.preventDefault(), this._handleNavigationClick(e);
                        }),
                        (this._isOldEnoughOrIgnored = () => {
                            const { birthday: e, birthday_requirement: t, ignore_birthday: s } = this.props.subtask;
                            if (s) return !0;
                            {
                                const s = e && e.subtask_data_reference && (0, _.OG)(this.props.subtaskInputs, e.subtask_data_reference),
                                    a = s && new Date(s.year, s.month - 1, s.day),
                                    { day: i, month: n, year: o } = t || {},
                                    r = o && n && i && new Date(o, n - 1, i);
                                return !a || !r || a <= r;
                            }
                        }),
                        (this._getSignupButtonLabel = () => {
                            const { subtask: e, subtaskInputs: t } = this.props,
                                { email: s, phone_number: a } = e,
                                i = a && (0, _.Ds)(t, a),
                                n = s && (0, _.Ds)(t, s);
                            return i ? e.phone_next_link.label : n ? e.email_next_link.label : b;
                        });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: n, subtaskInputs: o } = this.props,
                        { detail_text: r, primary_text: l, secondary_text: c } = n;
                    return i.createElement(p.Z, (0, a.Z)({}, s, { footer: i.createElement(d.ZP, { actionLabel: this._getSignupButtonLabel(), actionTestID: m, actionType: "brandFilled", detailText: r, onAction: this._handleSignupButtonClick, onNavigate: t, subtaskInputs: o }), header: i.createElement(u.Z, { onNavigate: t, primaryTextProp: l, secondaryTextProp: c, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), this._renderNameField(), this._renderPhoneOrEmailField(), this._maybeRenderBirthdayField(), e);
                }
                _renderNameField() {
                    const { subtask: e, subtaskInputs: t } = this.props,
                        s = e.name && (0, _.Ds)(t, e.name),
                        a = e.name_hint ?? I;
                    return i.createElement(n.Z, { onClick: this._handleNameEdit, testID: "editName" }, i.createElement(o.Z, { defaultValue: s || "", label: a, name: "name", showValidationIcon: !0, style: h.Z.formTextInput }));
                }
                _maybeRenderBirthdayField() {
                    const { subtask: e, subtaskInputs: t } = this.props,
                        s = e.birthday && e.birthday.subtask_data_reference && (0, _.OG)(t, e.birthday.subtask_data_reference),
                        { day: a, month: r, year: l } = s || {},
                        c = a && r && l && k(new Date(l, r - 1, a)),
                        d = e.birthday_hint ?? f;
                    return !e.ignore_birthday && s && c ? i.createElement(n.Z, { "aria-label": g({ birthdate: c }), onClick: this._handleBirthdayEdit, role: "button", style: Z.cursor, testID: "editBirthday" }, i.createElement(o.Z, { defaultValue: c, label: d, name: "birthday", showValidationIcon: !0, style: h.Z.formTextInput })) : null;
                }
                _renderPhoneOrEmailField() {
                    const {
                            subtask: { email: e, email_hint: t, phone_hint: s, phone_number: a },
                            subtaskInputs: r,
                        } = this.props,
                        l = a && a.subtask_data_reference && (0, _.OG)(r, a.subtask_data_reference),
                        c = e && e.subtask_data_reference && (0, _.OG)(r, e.subtask_data_reference),
                        d = s ?? y,
                        u = t ?? w;
                    return l ? i.createElement(n.Z, { onClick: this._handlePhoneEdit, testID: "editPhone" }, i.createElement(o.Z, { defaultValue: l || "", label: d, name: "phone", showValidationIcon: !0, style: h.Z.formTextInput })) : c ? i.createElement(n.Z, { onClick: this._handleEmailEdit, testID: "editEmail" }, i.createElement(o.Z, { defaultValue: c || "", label: u, name: "email", showValidationIcon: !0, style: h.Z.formTextInput })) : null;
                }
            }
            const v = x,
                Z = r.default.create(() => ({ cursor: { cursor: "pointer" } }));
        },
        519864: (e, t, s) => {
            s.d(t, { Z: () => K });
            var a = s(807896),
                i = s(202784),
                n = s(325686),
                o = s(154003),
                r = s(310088),
                l = s(138099),
                c = s(529356),
                d = s(392237),
                u = s(111677),
                p = s.n(u),
                h = s(873990),
                _ = s(942893),
                m = s(227991),
                b = s(663951),
                k = s(280947),
                g = s(975364),
                f = s(909377),
                y = s(970187),
                w = s(530732),
                I = s(815858),
                x = s(452693),
                v = s(379327),
                Z = s(322121),
                E = s(946108);
            const T = p().e854ad27;
            class C extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleFollow = () => {
                            const { id: e, onFollowTopic: t } = this.props;
                            t(e);
                        }),
                        (this._handleUnfollow = () => {
                            const { id: e, onUnfollowTopic: t } = this.props;
                            t(e);
                        });
                }
                render() {
                    const { id: e, onNavigate: t, selectedTopicIds: s, subtaskInputs: o, topicsById: r } = this.props,
                        l = r[e],
                        c = s.includes(this.props.id);
                    return i.createElement(n.Z, { style: F.cell }, i.createElement(f.Z, { Icon: x.default, size: "large", style: F.topicIcon }), i.createElement(n.Z, { style: F.topicInfo }, i.createElement(g.Z, (0, a.Z)({ weight: "bold" }, l.title, { onNavigate: t, subtaskInputs: o })), l.description ? i.createElement(g.Z, (0, a.Z)({ color: "gray700" }, l.description, { onNavigate: t, subtaskInputs: o })) : null), i.createElement(y.Z, { isFollowing: c, onFollow: this._handleFollow, onUnfollow: this._handleUnfollow, showRelationshipChangeConfirmation: !1, size: "small", type: "topic" }));
                }
            }
            class S extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { expanded: !1 }),
                        (this._handleClick = () => {
                            this.setState({ expanded: !this.state.expanded });
                        });
                }
                render() {
                    const { categoriesById: e, id: t, isTopLevel: s, onNavigate: o, subtaskInputs: r } = this.props,
                        { expanded: l } = this.state,
                        c = e[t],
                        d = l ? P : N;
                    return i.createElement(i.Fragment, null, i.createElement(w.Z, { "aria-expanded": l, "aria-label": T({ title: c.title.text }), onClick: this._handleClick, style: F.cell }, i.createElement(g.Z, (0, a.Z)({ color: "primary", size: s ? "headline1" : "body", weight: s ? "heavy" : "bold" }, c.title, { onNavigate: o, subtaskInputs: r })), d), i.createElement(n.Z, { style: F.children }, i.createElement(I.Z, { show: l }, this._renderChildren())));
                }
                _renderChildren() {
                    const { categoriesById: e, id: t, onFollowTopic: s, onNavigate: n, onUnfollowTopic: o, selectedTopicIds: r, subtaskInputs: l, topicsById: c } = this.props,
                        d = e[t],
                        u = { selectedTopicIds: r, onFollowTopic: s, onUnfollowTopic: o, topicsById: c, subtaskInputs: l };
                    return d.children_items.map(({ id: t, type: s }) => (s === E.m.Topic ? i.createElement(C, (0, a.Z)({}, u, { id: t, key: t, onNavigate: n })) : i.createElement(S, (0, a.Z)({}, u, { categoriesById: e, id: t, key: t, onNavigate: n }))));
                }
            }
            const F = d.default.create((e) => ({ cell: { alignItems: "center", flexDirection: "row", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space4, justifyContent: "space-between", borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, topicInfo: { flexGrow: 1, flexShrink: 1, marginEnd: e.spaces.space12 }, topicIcon: { flexShrink: 0, marginEnd: e.spaces.space12 }, plusIcon: { color: e.colors.gray700 }, minusIcon: { color: e.colors.primary }, children: { marginStart: e.spaces.space12 } })),
                N = i.createElement(v.default, { style: F.plusIcon }),
                P = i.createElement(Z.default, { style: F.minusIcon });
            var B = s(668214),
                A = s(118823),
                D = s(153925);
            const U = "selected_search_topic_ids",
                O = "selected_topic_ids",
                V = [],
                G = (e, t) => {
                    const s = (0, A.$B)(e);
                    return (0, D.OG)(s, { key: U, subtask_id: t.subtaskId });
                },
                L = (e, t) => {
                    const s = (0, A.$B)(e);
                    return (0, D.OG)(s, { key: O, subtask_id: t.subtaskId });
                },
                M = (e, t) => (t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : V),
                z = (0, B.Z)()
                    .propsFromState(() => ({ initialSearchTopicIds: G, initialSelectedTopicIds: L, cartTopicIds: M }))
                    .adjustStateProps(({ cartTopicIds: e, initialSearchTopicIds: t, initialSelectedTopicIds: s }) => ({ initialSearchTopicIds: t || V, initialSelectedTopicIds: s || e }))
                    .withAnalytics({ section: "topics_selector" }),
                R = "ocfTopicsSelectorNextLink",
                H = "ocfTopicsSelectorSkipLink",
                j = p().f134915f,
                W = p().h6beb5fb,
                $ = p().b8fb87e0,
                q = i.createElement(h.default, null);
            class Q extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { hideBanner: !1, selectedTopicIds: this.props.initialSelectedTopicIds, showCart: !1 }),
                        (this._renderCartButton = () => {
                            const { selected_topics_cart: e } = this.props.subtask,
                                { selectedTopicIds: t } = this.state;
                            return e && e.title && t.length > 0 ? i.createElement(n.Z, null, i.createElement(o.ZP, { "aria-label": $, icon: q, onPress: this._handleOpenCart, size: "small", type: "brandOutlined" }), i.createElement(r.Z, { count: t.length, truncatedCountFormatter: W, unreadCountLabel: j, withBorder: !0 })) : null;
                        }),
                        (this._renderCart = () => {
                            const { onNavigate: e, subtask: t, subtaskInputs: s } = this.props,
                                { selected_topics_cart: n } = t,
                                r = n && n.done_label ? i.createElement(o.ZP, { key: "button_cancel", onPress: this._handleCloseCart, style: X.cartButton, type: "primaryOutlined" }, n.done_label.text) : null;
                            return i.createElement(l.Z, { onMaskClick: this._handleCloseCart, style: X.cart, type: "bottom", withMask: !0 }, n && n.title ? i.createElement(g.Z, (0, a.Z)({ align: "center", onNavigate: e, size: "headline1", style: X.cartHeader, subtaskInputs: s, weight: "heavy" }, n.title)) : null, this._renderCartItems(), r);
                        }),
                        (this._handleOpenCart = () => {
                            this.setState({ showCart: !0 }), this.props.analytics.scribe({ element: "cart", action: "impression" });
                        }),
                        (this._handleCloseCart = () => {
                            this.setState({ showCart: !1 }), this.props.analytics.scribe({ element: "cart", action: "dismiss" });
                        }),
                        (this._renderBanner = () => {
                            const { banner: e } = this.props.subtask,
                                { hideBanner: t } = this.state;
                            return e && !t ? i.createElement(c.Z, { actionLabel: e.dismiss_label.text, headline: e.title.text, onAction: this._handleBannerDismiss, onClose: this._handleBannerDismiss, subtext: e.subtitle.text }) : null;
                        }),
                        (this._renderCartItems = () => {
                            const { onNavigate: e, subtask: t, subtaskInputs: s } = this.props,
                                { selectedTopicIds: a } = this.state;
                            return a.map((n) => i.createElement(C, { id: n, key: n, onFollowTopic: this._handleFollowTopic, onNavigate: e, onUnfollowTopic: this._handleUnfollowTopic, selectedTopicIds: a, subtaskInputs: s, topicsById: t.topic_by_id_list }));
                        }),
                        (this._renderItems = () => {
                            const { onNavigate: e, subtask: t, subtaskInputs: s } = this.props,
                                { selectedTopicIds: a } = this.state;
                            return t.top_category_ids.map((n) => i.createElement(S, { categoriesById: t.category_by_id_list, id: n, isTopLevel: !0, key: n, onFollowTopic: this._handleFollowTopic, onNavigate: e, onUnfollowTopic: this._handleUnfollowTopic, selectedTopicIds: a, subtaskInputs: s, topicsById: t.topic_by_id_list }));
                        }),
                        (this._handleFollowTopic = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: "topic", action: "follow", data: { items: [_.Z.forTopic(e)] } }), this.setState({ selectedTopicIds: [...this.state.selectedTopicIds, e] });
                        }),
                        (this._handleUnfollowTopic = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: "topic", action: "unfollow", data: { items: [_.Z.forTopic(e)] } }), this.setState({ selectedTopicIds: this.state.selectedTopicIds.filter((t) => t !== e) });
                        }),
                        (this._handleBannerDismiss = () => {
                            this.props.analytics.scribe({ element: "prompt", action: "dismiss" }), this.setState({ hideBanner: !0 });
                        }),
                        (this._handleNextButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props,
                                { selectedTopicIds: i } = this.state;
                            a(s, { link: t.next_link.link_id, selected_topic_ids: i }), e(t.next_link);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props;
                            a(s, { link: t.skip_link.link_id }), e(t.skip_link);
                        });
                }
                componentDidMount() {
                    const { analytics: e, subtask: t } = this.props;
                    t.banner && e.scribe({ element: "prompt", action: "impression" });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: o, subtaskInputs: r } = this.props,
                        { next_link: l, primary_text: c, secondary_text: d, skip_link: u } = o,
                        { showCart: p } = this.state,
                        h = this._renderCartButton();
                    return i.createElement(k.Z, (0, a.Z)({}, s, { footer: i.createElement(m.ZP, { actionLabel: l?.label, actionTestID: R, onAction: this._handleNextButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: u?.label, secondaryActionTestID: H }), header: i.createElement(b.Z, { onNavigate: t, primaryTextProp: c, secondaryTextProp: d, subtaskInputs: r, withHeaderImage: !0 }), leftControl: h, providePadding: !0 }), i.createElement(n.Z, null, this._renderBanner(), this._renderItems()), p ? this._renderCart() : null, e);
                }
            }
            const X = d.default.create((e) => ({ cart: { flexGrow: 1, maxHeight: "80vh", overflow: "auto", padding: e.spaces.space20, paddingBottom: e.spaces.space20 }, cartButton: { marginTop: e.spaces.space12 }, cartHeader: { marginBottom: e.spaces.space12 } })),
                K = z(Q);
        },
        994496: (e, t, s) => {
            s.d(t, { ZP: () => S });
            var a = s(807896),
                i = s(202784),
                n = s(218093),
                o = s(56851),
                r = s(810641),
                l = s(163889),
                c = s(847933),
                d = s(147735),
                u = s(383675),
                p = s(611423),
                h = s(227991),
                _ = s(663951),
                m = s(280947),
                b = s(153925),
                k = s(71620),
                g = s(668214),
                f = s(735313);
            const y = (0, k.zr)("OCF_TWEET_SELECTION_URT"),
                w = (0, g.Z)()
                    .propsFromActions(() => ({ clearTimelineCache: f.Z, createLocalApiErrorHandler: y }))
                    .withAnalytics();
            var I = s(351322),
                x = s(801184),
                v = s(335632),
                Z = s(962741),
                E = s(263863);
            const T = "ocfTweetSelectionURTNextButton",
                C = (e) => {
                    switch (e) {
                        case c.Z.NOT_FOUND:
                            return i.createElement(o.Z, null);
                        case c.Z.NOT_ALLOWED:
                            return i.createElement(n.Z, null);
                        default:
                            return (0, l.ZP)(`Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: ${e}`), null;
                    }
                },
                S = w((e) => {
                    const { errorDialog: t, onNavigate: s, passthroughOcfScreenProps: n, subtask: o, subtaskId: l, subtaskInputs: c, updateFlow: k } = e,
                        { graphql_timeline_query: g, header: f, next_link: y, next_link_options: w, timeline_source: S } = o,
                        F = (0, b.OG)(c, { key: "selected_tweet_ids", subtask_id: l }, []) || [],
                        [N, P] = i.useState(F),
                        B = i.useMemo(() => ((e, t) => (e ? (0, u.R)(e.timeline_key) : (0, p.Z)({ urtUrl: { url: t || "", urlType: d.Z.UrtEndpoint } })))(g, S), [g, S]),
                        A = i.useMemo(
                            () =>
                                ((e, t) => {
                                    if (t) {
                                        const { max_enable_count: s } = t;
                                        if (s) return e < s;
                                    }
                                    return !0;
                                })(N.length, w),
                            [N, w],
                        ),
                        D = i.useMemo(
                            () =>
                                ((e, t) => {
                                    if (t) {
                                        const { max_enable_count: s, min_enable_count: a } = t;
                                        return !((a && e < a) || (s && e > s));
                                    }
                                    return !0;
                                })(N.length, w),
                            [N, w],
                        ),
                        U = i.useCallback(() => {
                            k(l, { link: y.link_id, selected_tweet_ids: N }), s(y);
                        }, [N, s, y, l, k]),
                        O = i.useCallback(
                            (e) => {
                                (N.includes(e) || A) && P((t) => (t.includes(e) ? t.filter((t) => e !== t) : t.concat(e)));
                            },
                            [A, N],
                        ),
                        V = i.useMemo(() => (({ handleTweetClick: e, maxSelection: t, selectedTweetIds: s }) => ({ ...(0, v.G)({}), [Z.ZP.Tombstone]: I.OZ(I.KM()), [Z.ZP.Tweet]: { ...(0, v.G)({})[Z.ZP.Tweet], handlers: { [E.Z.Tweet]: (0, x.d2)({ onClick: e, maxSelection: t, selectedTweetIds: s }), [E.Z.QuotedTweet]: (0, x.d2)({ onClick: e, maxSelection: t, selectedTweetIds: s }) } } }))({ handleTweetClick: O, selectedTweetIds: N, maxSelection: o.next_link_options?.max_enable_count }), [O, N, o.next_link_options?.max_enable_count]);
                    return i.createElement(m.Z, (0, a.Z)({}, n, { footer: i.createElement(h.ZP, { actionDisabled: !D, actionLabel: y?.label, actionTestID: T, onAction: U }), header: i.createElement(_.Z, { header: f, onNavigate: s, subtaskInputs: c, withHeaderImage: !0 }), providePadding: !0 }), i.createElement(r.Z, { entryConfiguration: V, module: B, renderUnavailable: C, title: "" }), t);
                });
        },
        590856: (e, t, s) => {
            s.d(t, { Z: () => x });
            var a = s(807896),
                i = s(202784),
                n = s(325686),
                o = s(823161),
                r = s(973014),
                l = s(392237),
                c = s(111677),
                d = s.n(c),
                u = s(874088),
                p = s(27951),
                h = s(339110),
                _ = s(227991),
                m = s(663951),
                b = s(280947),
                k = s(975364);
            const g = "ocfTypeaheadSearchNextButton",
                f = "ocfTypeaheadSearchSkipForNowButton",
                y = "ocfTypeaheadInput",
                w = d().a9ae1e78,
                I = d().gdb7bc25;
            class x extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderSelectedItem = () => i.createElement(n.Z, { style: v.selectedItem }, this._renderSelectedItemPill())),
                        (this._renderSelectedItemPill = () => {
                            const { withCompactPills: e } = this.props,
                                t = this.state.selected_item;
                            if (!t) return;
                            const s = t.type === h.El.User ? i.createElement(o.default, { "aria-hidden": !0, focusable: !1, size: "custom", uri: t.data.profile_image_url_https }) : void 0;
                            let a;
                            switch (t.type) {
                                case h.El.User:
                                    a = t.data.screen_name;
                                    break;
                                case h.El.Event:
                                case h.El.Topic:
                                case h.El.Hashtag:
                                    a = t.data.topic;
                                    break;
                                case h.El.Setting:
                                case h.El.SettingGroup:
                                case h.El.NoResult:
                                    a = t.data.text;
                                    break;
                                case h.El.DMConversation:
                                    a = t.data.name;
                                    break;
                                default:
                                    a = "";
                            }
                            return i.createElement(r.Z, { "aria-label": I({ name: a }), avatar: s, compact: e, key: t.id, mode: "remove", onClick: this._handleOnRemove, style: v.selectionPill, text: a });
                        }),
                        (this._handleQueryChange = (e) => {
                            const { onQueryChange: t } = this.props;
                            this.setState({ query: e }), t?.(e);
                        }),
                        (this._handleOnSelect = (e) => {
                            this.setState({ selected_item: e });
                        }),
                        (this._handleOnRemove = () => {
                            this.setState({ selected_item: void 0 });
                        }),
                        (this._handleSubmit = () => {
                            this.state.selected_item && this._handleDoneButtonClick();
                        }),
                        (this._handleDoneButtonClick = () => {
                            const {
                                onNavigate: e,
                                subtask: { next_link: t },
                                subtaskId: s,
                                updateFlow: a,
                            } = this.props;
                            a(s, { link: t.link_id, selected_item_id: this.state.selected_item?.id || "" }), e(t);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const {
                                onNavigate: e,
                                subtask: { skip_link: t },
                                subtaskId: s,
                                updateFlow: a,
                            } = this.props;
                            t && a(s, { link: t.link_id, selected_item_id: "" }), t && e(t);
                        }),
                        (this.state = { query: "", selected_item: void 0 });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, renderCallout: o, renderHeader: r, shouldAutoFocus: l, source: c, subtask: d, subtaskInputs: h } = this.props,
                        { detail_text: I, header: x, next_link: v, search_filter_type: Z, skip_link: E } = d;
                    return i.createElement(b.Z, (0, a.Z)({}, s, { footer: i.createElement(_.ZP, { actionDisabled: !E && !this.state.selected_item, actionLabel: this.state.selected_item || !E ? v?.label : void 0, actionTestID: g, onAction: this._handleSubmit, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this.state.selected_item ? void 0 : E?.label, secondaryActionTestID: f }), header: i.createElement(m.Z, { header: x, onNavigate: t, primaryTextProp: x?.primary_text, secondaryTextProp: x?.secondary_text, subtaskInputs: h, withHeaderImage: !0 }), providePadding: !0 }), void 0 === this.state.selected_item ? i.createElement(u.default, { alwaysOpen: !0, disableClearButton: !0, filter: [Z], isModal: !0, onItemClick: this._handleOnSelect, onQueryChange: this._handleQueryChange, placeholder: w, renderCallout: o, renderHeader: r, renderUserDecoration: p.ib, selectedItems: this.state.selected_item, shouldAutoFocus: l, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: c, testID: y, withSectionDivider: !1 }) : i.createElement(n.Z, null, this._renderSelectedItem()), I ? i.createElement(k.Z, (0, a.Z)({}, I, { color: "gray700", onNavigate: t, subtaskInputs: h })) : null, e);
                }
            }
            x.defaultProps = { shouldAutoFocus: !0, withCompactPills: !1 };
            const v = l.default.create((e) => ({ root: { flex: 1 }, selectionPill: { margin: e.spaces.space4, maxWidth: `calc(100% - ${e.spaces.space16})` }, selectedItem: { flexDirection: "row", flexWrap: "wrap", padding: e.spaces.space4 } }));
        },
        376099: (e, t, s) => {
            s.d(t, { Z: () => D });
            var a = s(807896),
                i = s(202784),
                n = s(891198),
                o = s(912021),
                r = s(370751),
                l = s(218093),
                c = s(56851),
                d = s(810641),
                u = s(163889),
                p = s(87063),
                h = s(847933),
                _ = s(48498),
                m = s(227991),
                b = s(663951),
                k = s(280947),
                g = s(668214);
            const f = (e) => (t) => t?.selectInitialFetchStatus(e),
                y = (0, g.Z)()
                    .propsFromState(() => ({ getModuleFetchStatus: f }))
                    .withAnalytics({ page: "onboarding", section: "user_recommendations" });
            var w = s(970187),
                I = s(392237),
                x = s(269011),
                v = s(335632),
                Z = s(962741);
            const E = i.createContext(new Set()),
                T =
                    (e, t) =>
                    ({ promotedContent: s, userId: a, viewerUserId: n }) =>
                        i.createElement(E.Consumer, null, (s) => i.createElement(w.Z, { isFollowing: s.has(a), onFollow: e(a), onUnfollow: t(a), showRelationshipChangeConfirmation: !1, size: "small", style: C.followButton, type: "user" })),
                C = I.default.create((e) => ({ followButton: { alignSelf: "flex-start", marginStart: e.spaces.space12 } })),
                S = (e, t, s) => (a) => {
                    const i = a.user.id_str;
                    s.has(i) ? t(i)() : e(i)();
                },
                F = ({ currentFollows: e, onFollow: t, onUnfollow: s }) => ({ ...(0, v.G)({}), [Z.ZP.User]: (0, x.Z)({ decoration: T(t, s), withLink: !1, shouldScribeProfileClick: !1, onClick: S(t, s, e) }) }),
                N = "ocfURTUserRecommendationsNextButton",
                P = "ocfURTUserRecommendationsSkipButton",
                B = (e) => {
                    switch (e) {
                        case h.Z.NOT_FOUND:
                            return i.createElement(c.Z, null);
                        case h.Z.NOT_ALLOWED:
                            return i.createElement(l.Z, null);
                        default:
                            return (0, u.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                };
            class A extends i.Component {
                constructor(e) {
                    super(e),
                        (this._isBelowMinFollows = () => {
                            const e = this.props.subtask.min_follow_count;
                            return !!e && this.state.selectedUsers.size < e;
                        }),
                        (this._getMemoizedModule = (0, o.Z)((e, t) => (0, _.Z)({ subtask_id: e, flow_token: t || "" }))),
                        (this._getModule = () => {
                            const { flowToken: e, subtaskId: t } = this.props;
                            return this._getMemoizedModule(t, e);
                        }),
                        (this._getModuleFetchStatus = () => {
                            const { getModuleFetchStatus: e } = this.props;
                            return e(this._getModule());
                        }),
                        (this._onFollow = (e) => () => {
                            const t = (0, r.Z)([...this.state.selectedUsers]);
                            t.add(e), this.setState({ selectedUsers: t }), this._handleScribe("follow");
                        }),
                        (this._onUnfollow = (e) => () => {
                            const t = (0, r.Z)([...this.state.selectedUsers]);
                            t.has(e) && t.delete(e), this.setState({ selectedUsers: t }), this._handleScribe("unfollow");
                        }),
                        (this._getFollowText = (e, t, s) => (!e || s < 1 ? t : e.concat(n.ZP.getFormattedCount(s)))),
                        (this._handleFollowButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props;
                            a(s, { link: t.next_link.link_id, selected_user_recommendations: [...this.state.selectedUsers] }), e(t.next_link);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const {
                                onNavigate: e,
                                subtask: { skip_link: t },
                                subtaskId: s,
                                updateFlow: a,
                            } = this.props;
                            t && a(s, { link: t.link_id }), t && e(t);
                        }),
                        (this.state = { selectedUsers: new Set() });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: n } = this.props,
                        { primary_text: o, secondary_text: r, skip_link: l } = s,
                        { selectedUsers: c } = this.state;
                    let u = "";
                    if (s.next_link_threshold_text && s.next_link_threshold_text.length > 0) {
                        const e = s.next_link_threshold_text[0];
                        u = e && e.text && e.text.text;
                    }
                    const h = s.next_link.label,
                        _ = c.size,
                        g = this._getFollowText(u, h, _) ?? void 0,
                        f = Array.from(c).join(",");
                    return i.createElement(k.Z, (0, a.Z)({}, t, { footer: i.createElement(m.ZP, { actionDisabled: this._isBelowMinFollows() && this._getModuleFetchStatus() !== p.Z.FAILED, actionLabel: this._isBelowMinFollows() && l ? void 0 : g, actionTestID: N, onAction: this._handleFollowButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this._isBelowMinFollows() ? l?.label : void 0, secondaryActionTestID: P }), header: i.createElement(b.Z, { onNavigate: e, primaryTextProp: o, secondaryTextProp: r, subtaskInputs: n, withHeaderImage: !0 }), providePadding: !0 }), i.createElement(E.Provider, { value: c }, i.createElement(d.Z, { entryConfiguration: F({ onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: c }), fetchOptions: { follows: f }, module: this._getModule(), renderUnavailable: B, title: "" })), this.props.errorDialog);
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ element: "user", action: e });
                }
            }
            const D = y(A);
        },
        471810: (e, t, s) => {
            s.d(t, { Z: () => _ });
            var a = s(202784),
                i = s(804027),
                n = s(311314),
                o = s(668214),
                r = s(704279),
                l = s(497294),
                c = s(508765);
            const d = (e, t) => {
                    const s = c.C6(e),
                        [a] = s ? l.m3(e, s) : [];
                    return a;
                },
                u = (e, t) => {
                    const s = c.vW(e),
                        [a] = s ? l.m3(e, s) : [];
                    return a;
                },
                p = (0, o.Z)()
                    .propsFromState(() => ({ avatarMedia: d, bannerMedia: u }))
                    .propsFromActions(() => ({ scribeAction: r.n, updateProfileAvatar: c.b4, updateProfileBanner: c.T_ }))
                    .withAnalytics();
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._scribeUploadStart = (e) => {
                            const { analytics: t, flowToken: s, subtaskId: a } = this.props,
                                i = { section: e, element: "upload", action: "start", data: { items: [{ token: s, name: a }] } };
                            t.scribe(i);
                        }),
                        (this._updateMedia = () => {
                            const {
                                avatarMedia: e,
                                bannerMedia: t,
                                subtask: { sources: s },
                                updateProfileAvatar: a,
                                updateProfileBanner: n,
                            } = this.props;
                            return new Promise((o, r) => {
                                try {
                                    s.forEach((s) => {
                                        const { style: o } = s;
                                        o === i.XD.Avatar && e ? (this._scribeUploadStart("select_avatar"), a(e.id)) : o === i.XD.Banner && t && (this._scribeUploadStart("select_banner"), n(t.id));
                                    }),
                                        o();
                                } catch (e) {
                                    r(e);
                                }
                            });
                        });
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskId: s } = this.props;
                    return a.createElement(n.Z, { navigationLink: t.next_link, onNavigate: e, subtaskAction: this._updateMedia, subtaskId: s });
                }
            }
            const _ = p(h);
        },
        328536: (e, t, s) => {
            s.d(t, { Z: () => p });
            var a = s(202784),
                i = s(325686),
                n = s(992942),
                o = s(366635),
                r = s(392237),
                l = s(913973),
                c = s(379327),
                d = s(920030);
            const u = r.default.create((e) => ({ container: { cursor: "pointer" }, content: { padding: e.spaces.space1, position: "absolute", height: "100%", width: "100%", backgroundImage: `linear-gradient(${e.colors.transparent}, ${e.colors.translucentBlack77})` }, userNameContainer: { position: "absolute", bottom: 0, start: 0, padding: e.spaces.space4 }, userName: { marginBottom: e.spaces.space4 }, icon: { height: "auto", width: e.spaces.space24, position: "absolute", end: e.spaces.space12, top: e.spaces.space12, color: e.colors.white, zIndex: 1 }, image: { height: 120 }, checkIcon: { zIndex: 1 } })),
                p = ({ groupId: e, id: t, isBlueVerified: s, isSelected: r, isVerified: p, name: h, onFollow: _, onUnfollow: m, profileImageUrl: b, userName: k }) =>
                    a.createElement(
                        i.Z,
                        {
                            onClick: () => {
                                r ? m([t], e) : _([t], e);
                            },
                            role: "button",
                            style: u.container,
                            testID: d.Z.userTile,
                        },
                        r ? a.createElement(l.default, { style: [u.icon, u.checkIcon], testID: d.Z.iconCheckmark }) : a.createElement(c.default, { style: u.icon, testID: d.Z.iconPlus }),
                        a.createElement(n.Z, { source: b, style: u.image }),
                        a.createElement(i.Z, { style: u.content }, a.createElement(i.Z, { style: u.userNameContainer }, a.createElement(o.Z, { color: "white", isBlueVerified: s, isVerified: p, name: h, nameSize: "subtext2", screenName: k, screenNameSize: "subtext2", style: u.userName, withNameWrap: !0, withStackedLayout: !0 }))),
                    );
        },
        524702: (e, t, s) => {
            s.d(t, { Z: () => d });
            var a = s(202784),
                i = s(325686),
                n = s(823161),
                o = s(366635),
                r = s(970187);
            const l = ({ groupId: e, id: t, isBlueVerified: s, isSelected: l, isVerified: d, name: u, onFollow: p, onUnfollow: h, profileImageUrl: _, style: m, userName: b }) => {
                    const k = a.useCallback(() => {
                            p([t], e);
                        }, [e, t, p]),
                        g = a.useCallback(() => {
                            h([t], e);
                        }, [e, t, h]),
                        f = _.split("_normal").join("");
                    return a.createElement(i.Z, { style: c.container }, a.createElement(i.Z, { style: [c.background, m] }), a.createElement(n.default, { hasAdaptiveImage: !1, size: { width: 100, height: 100 }, style: c.userAvatar, uri: f }), a.createElement(o.Z, { isBlueVerified: s, isVerified: d, name: u, nameSize: "body", screenName: b, screenNameSize: "subtext2", style: c.userName, withStackedLayout: !0 }), a.createElement(r.Z, { isFollowing: l, onFollow: k, onUnfollow: g, showRelationshipChangeConfirmation: !1, type: "user" }));
                },
                c = s(392237).default.create((e) => ({ container: { display: "flex", alignItems: "center", marginBottom: e.spaces.space16, overflow: "visible", paddingStart: e.spaces.space20, paddingEnd: e.spaces.space20 }, background: { opacity: 0.1, transform: "[{ translate3d: ‘0,0,0’ }]", filter: "blur(50px)", height: "calc(100% + 10px)", width: "calc(100% + 10px)", position: "absolute", top: -10, start: 0 }, userAvatar: { marginBottom: e.spaces.space4 }, userName: { marginBottom: e.spaces.space4, display: "flex", alignItems: "center" } })),
                d = a.memo(l);
        },
        903572: (e, t, s) => {
            s.d(t, { Z: () => D });
            var a = s(807896),
                i = (s(136728), s(202784)),
                n = s(984636),
                o = s.n(n),
                r = s(325686),
                l = s(731708),
                c = s(891198),
                d = s(157130),
                u = s(392237),
                p = s(111677),
                h = s.n(p),
                _ = s(435021),
                m = s(370751),
                b = s(908478),
                k = s(479506),
                g = s(227991),
                f = s(663951),
                y = s(280947),
                w = s(607964),
                I = s(153925),
                x = s(668214),
                v = s(118823);
            const Z = (e) => v.cu(e) || "",
                E = (0, x.Z)()
                    .propsFromState(() => ({ flowToken: Z, browsableNuxRecommendations: v.iD }))
                    .propsFromActions(() => ({ fetchBrowsableNuxUserRecommendations: v.Ig }))
                    .withAnalytics({ section: "who_to_follow" });
            var T = s(920030),
                C = s(822399);
            const S = u.default.create((e) => ({ timelineStrengthContainer: { display: "flex", alignItems: "center", justifyContent: "center" }, progressBar: { height: e.spaces.space8, borderRadius: e.spaces.space12 }, progressBarContainer: { backgroundColor: e.colors.gray50, height: e.spaces.space8, width: "100%", marginTop: e.spaces.space4, borderRadius: e.spaces.space12 }, progressBarInner: { backgroundImage: `linear-gradient(270deg, ${e.colors.blue500}, ${e.colors.blue700} 100%)` } })),
                F = ({ progress: e, text: t }) => i.createElement(r.Z, { style: S.timelineStrengthContainer }, i.createElement(l.ZP, { color: "gray1100", weight: "bold" }, t), i.createElement(r.Z, { style: S.progressBarContainer }, i.createElement(C.Z, { progress: e, progressStyle: S.progressBarInner, style: S.progressBar }))),
                N = "selected_user_recommendations",
                P = h().c1df579e;
            class B extends i.Component {
                constructor(e) {
                    super(e),
                        (this._handleNearEnd = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "scroll", data: { items: [{ description: this._scribeDescription }] } }), this._getMoreRecommendations();
                        }),
                        (this._renderPopoverContent = () => {
                            const { subtask: e } = this.props;
                            return i.createElement(r.Z, { style: A.popoverContent }, i.createElement(l.ZP, { weight: "bold" }, e?.gated_next_link_popup_text?.text));
                        }),
                        (this._getPreCheckedUsers = (e = []) =>
                            (0, m.Z)(
                                e.reduce((e, t) => {
                                    const s = t.items.reduce((e, t) => (t.checked_by_default && e.push(t.user_id_str), e), []);
                                    return [...e, ...s];
                                }, []),
                            )),
                        (this._getMoreRecommendations = () => {
                            const { analytics: e, fetchBrowsableNuxUserRecommendations: t, flowToken: s, subtask: a, subtaskId: i } = this.props,
                                { followedGroupIds: n, notFollowedGroupIds: o, selectedUsers: r } = this.state,
                                l = { items: [{ description: this._scribeDescription }] };
                            e.scribe({ element: "request", action: "start", data: l }),
                                t({ flow_token: s, follows: Array.from(r), location: a?.fetch_user_recommendations_location || "append", followed_group_ids: Array.from(n), not_followed_group_ids: Array.from(o), subtask_id: i })
                                    .then((t) => {
                                        e.scribe({ element: "request", action: "success", data: l });
                                    })
                                    .catch(() => {
                                        e.scribe({ element: "request", action: "failure", data: l });
                                    });
                        }),
                        (this._getFollowText = (e, t, s) => (!e || s < 1 ? t : e.concat(c.ZP.getFormattedCount(s)))),
                        (this._handleSelectionChanged = (e) => {
                            this.setState({ selectedUsers: (0, m.Z)(e) });
                        }),
                        (this._getUserNameFromId = (e, t) => {
                            const { groups: s } = this.state;
                            if (t) return s.find((e) => e.group_id === t)?.items.find((t) => t.user_id_str === e)?.user.screen_name;
                            for (const t of s) for (const s of t.items) if (s?.user_id_str === e) return s.user.screen_name;
                        }),
                        (this._getScribeData = (e, t) => ({ items: [{ id: e, item_type: k.Z.ItemType.USER, name: this._getUserNameFromId(e, t), description: this._scribeDescription }] })),
                        (this._handleOnUnfollowSelected = (e, t, s) => {
                            const { analytics: a } = this.props,
                                { followedGroupIds: i, notFollowedGroupIds: n, selectedUsers: o } = this.state;
                            for (const i of e) o.has(i) && (s || a.scribe({ element: "recommendation", action: "deselect", data: this._getScribeData(i, t) }), o.delete(i));
                            t && (i.delete(t), n.add(t)), this.setState({ selectedUsers: o, followedGroupIds: i, notFollowedGroupIds: n });
                        }),
                        (this._handleOnFollowSelected = (e, t, s) => {
                            const { analytics: a } = this.props,
                                { firstSelectedGroupIdx: i, followedGroupIds: n, groups: o, notFollowedGroupIds: r, selectedUsers: l } = this.state;
                            for (const i of e) l.has(i) || s || a.scribe({ element: "recommendation", action: "select", data: this._getScribeData(i, t) }), l.add(i);
                            t && (n.add(t), r.delete(t));
                            const c = i < 0 ? o.findIndex((e) => e.group_id === t) : i;
                            this.setState({ selectedUsers: l, followedGroupIds: n, notFollowedGroupIds: r, firstSelectedGroupIdx: c });
                        }),
                        (this._handleActionButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props;
                            a(s, { link: t.next_link.link_id, selected_user_recommendations: [...this.state.selectedUsers] }), e(t.next_link);
                        });
                    const { browsableNuxRecommendations: t, flowToken: s, subtask: a, subtaskId: n, subtaskInputs: d } = e,
                        u = (0, m.Z)([]),
                        p = (0, I.OG)(d, { key: N, subtask_id: n }, u);
                    (this._scribeDescription = `subtask_id=${n},flow_token=${s}`),
                        (this._recommendedUsers = (0, m.Z)(
                            a.groups
                                .map((e) => e.items.map((e) => (e.user_id ? e.user_id.toString() : "")))
                                .reduce(function (e, t) {
                                    return e.concat(t);
                                }),
                        ));
                    const h = [...a.groups];
                    t && h.concat(t);
                    const _ = h.map((e) => e.group_id || "").filter((e) => !!e.length);
                    this.state = { selectedUsers: p && p.size ? p : this._getPreCheckedUsers(a.groups), followedGroupIds: (0, m.Z)([]), notFollowedGroupIds: (0, m.Z)(_), groups: o()(h, "group_id"), firstSelectedGroupIdx: -1 };
                }
                static getDerivedStateFromProps(e, t) {
                    const { followedGroupIds: s, groups: a, notFollowedGroupIds: i } = t,
                        { browsableNuxRecommendations: n } = e;
                    if ((0, b.Z)(e.browsableNuxRecommendations, t.groups)) return t;
                    {
                        const t = [...a, ...n],
                            r = (0, m.Z)(e.browsableNuxRecommendations.map((e) => e.group_id).filter((e) => !s.has(e)));
                        return { groups: o()(t, "group_id"), notFollowedGroupIds: (0, m.Z)([...r, ...i]) };
                    }
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: n } = this.props,
                        { firstSelectedGroupIdx: o, groups: r, selectedUsers: l } = this.state,
                        c = (((s.next_link_threshold_text || {})[0] || {}).text || {}).text,
                        u = s.next_link.label,
                        p = l.size,
                        h = this._getFollowText(c, u, p),
                        m = null === s.min_follow_count || void 0 === s.min_follow_count ? 1 : s.min_follow_count,
                        b = l.size < 10 ? l.size / 10 : 1,
                        k = s?.user_tooltip_text?.text ? { text: s?.user_tooltip_text?.text, icon: _.default } : void 0,
                        I = l.size < m,
                        x = s?.gated_next_link_popup_text && I ? (e) => i.createElement(d.Z, { preferredVerticalOrientation: "up", renderContent: this._renderPopoverContent, withArrow: !0 }, e) : void 0,
                        v = s?.progress_indicator_text?.text,
                        Z = v ? i.createElement(F, { progress: b, text: v }) : void 0;
                    return i.createElement(y.Z, (0, a.Z)({}, t, { footer: i.createElement(g.ZP, { actionDisabled: I, actionLabel: h || P, actionTestID: T.Z.nextButton, actionWrapper: x, decorator: Z, onAction: this._handleActionButtonClick }), header: i.createElement(f.Z, { onNavigate: e, primaryTextProp: s.primary_text, secondaryTextProp: s.secondary_text, subtaskInputs: n }), providePadding: !0 }), i.createElement(w.Z, { firstSelectedGroupIdx: o, followButtonType: s.follow_button_type, followedUserIds: l, message: k, onFollow: this._handleOnFollowSelected, onNearEnd: this._handleNearEnd, onUnfollow: this._handleOnUnfollowSelected, scribeDescription: this._scribeDescription, styleType: s.style, userGroups: r }), this.props.errorDialog);
                }
            }
            const A = u.default.create((e) => ({ popoverContent: { padding: e.spaces.space16 } })),
                D = E(B);
        },
        920030: (e, t, s) => {
            s.d(t, { Z: () => a });
            const a = { followAll: "followAll", following: "following", iconPlus: "iconPlus", iconCheckmark: "iconCheckmark", nextButton: "nextButton", userTile: "userTile", userSelectList: "userSelectList", userSelectGroup: "userSelectGroup" };
        },
        346784: (e, t, s) => {
            s.d(t, { Z: () => h });
            var a = s(807896),
                i = s(202784),
                n = s(325686),
                o = s(167630),
                r = s(392237),
                l = s(663951),
                c = s(280947),
                d = s(975364);
            const u = "headerPrimaryText",
                p = "detailText";
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInteractive = "interactive" === this.props.subtask.style),
                        (this._navigateAndUpdate = (e) => {
                            const { onNavigate: t, subtask: s, subtaskId: a, updateFlow: i } = this.props;
                            i(a, { link: e.link_id, wait_time_ms: s.wait_time_ms }), t(e, !0);
                        });
                }
                componentWillUnmount() {
                    this._interactiveInterval && clearInterval(this._interactiveInterval), this._interactiveTimeout && clearTimeout(this._interactiveTimeout), this._spinnerTimer && clearTimeout(this._spinnerTimer);
                }
                componentDidMount() {
                    const { pollInteractivePath: e, subtask: t } = this.props;
                    if (this._isInteractive) {
                        const s = t.extension_endpoint;
                        t.extension_polling_interval_ms &&
                            s &&
                            (this._interactiveInterval = setInterval(() => {
                                e(s).then((e) => {
                                    e && this._navigateAndUpdate(t.next_link);
                                });
                            }, t.extension_polling_interval_ms));
                        const a = t.extension_timeout_link;
                        a &&
                            (this._interactiveTimeout = setTimeout(() => {
                                this._navigateAndUpdate(a);
                            }, t.max_extension_time_ms || t.wait_time_ms));
                    } else
                        this._spinnerTimer = setTimeout(() => {
                            this._navigateAndUpdate(t.next_link);
                        }, t.wait_time_ms);
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: r } = this.props,
                        { detail_text: h, header: m } = s;
                    return i.createElement(c.Z, (0, a.Z)({}, t, { header: this._isInteractive && this.props.subtask.header && i.createElement(l.Z, { header: m, onNavigate: e, primaryTextTestID: u, subtaskInputs: r, withHeaderImage: !0 }), providePadding: this._isInteractive }), i.createElement(n.Z, { style: _.indicator, testID: p }, this._isInteractive && this.props.subtask.header ? i.createElement(n.Z, null, h && i.createElement(d.Z, (0, a.Z)({}, h, { onNavigate: e, subtaskInputs: r }))) : i.createElement(o.Z, null)));
                }
            }
            const _ = r.default.create((e) => ({ indicator: { display: "flex", flex: 1, justifyContent: "center" } }));
        },
        918461: (e, t, s) => {
            s.d(t, { Z: () => n });
            var a = s(202784),
                i = s(85779);
            function n(e) {
                const { onNavigate: t, passthroughOcfScreenProps: s, renderDefault: n, subtask: o, subtaskId: r, updateFlow: l } = e;
                return o && -1 !== o.url.indexOf("ocf_arkose_challenge") ? a.createElement(i.Z, { onNavigate: t, passthroughOcfScreenProps: s, subtask: o, subtaskId: r, updateFlow: l }) : n();
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-167ef047.d916edaa.js.map
