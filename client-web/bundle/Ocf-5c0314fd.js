"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-5c0314fd"],
    {
        171053: (e, t, s) => {
            s.d(t, { Z: () => c });
            var a = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(401388),
                o = s(221973),
                l = s(280947),
                d = s(975364);
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._supportsWebAuthn = !!window.PublicKeyCredential && "function" == typeof window.PublicKeyCredential && "function" == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable),
                        (this._navigateAndUpdate = (e, t) => {
                            const { onNavigate: s, subtaskId: a, updateFlow: n } = this.props;
                            t && n(a, { challenge_response: t, link: e.link_id }), s(e);
                        });
                }
                componentDidMount() {
                    const {
                        subtask: { action_type: e, challenge: t, fail_link: s, next_link: a, unsupported_link: n },
                    } = this.props;
                    if (this._supportsWebAuthn) {
                        if ((0, r.Z)(this.props.errorDialog)) {
                            const n = JSON.parse(t);
                            if (window.location.hostname.includes("x.com") && "x.com" !== n.rp?.id && "x.com" !== n.publicKeyCredentialRequestOptions?.rpId) {
                                if ("__OCF_2FA_X_CHALLENGE__" in window) {
                                    const e = window.__OCF_2FA_X_CHALLENGE__;
                                    delete window.__OCF_2FA_X_CHALLENGE__, e ? this._navigateAndUpdate(a, e) : this._navigateAndUpdate(s);
                                }
                            } else
                                (0, o.ZP)(JSON.parse(t), e)
                                    .then((e) => {
                                        this._navigateAndUpdate(a, e);
                                    })
                                    .catch(() => {
                                        this._navigateAndUpdate(s);
                                    });
                        }
                    } else n && this._navigateAndUpdate(n);
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: r, subtaskInputs: o } = this.props;
                    return n.createElement(l.Z, (0, a.Z)({}, s, { providePadding: !0 }), e || n.createElement(i.Z, null, this._supportsWebAuthn ? null : n.createElement(d.Z, (0, a.Z)({}, r.unsupported_error_message, { onNavigate: t, subtaskInputs: o }))));
                }
            }
        },
        762851: (e, t, s) => {
            s.d(t, { Z: () => x });
            var a = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(823161),
                o = s(392237),
                l = s(751170),
                d = s(330815),
                c = s(199127),
                u = s(716233),
                p = s(227991),
                h = s(663951),
                _ = s(280947),
                g = s(668214),
                m = s(497294),
                k = s(508765),
                b = s(919022);
            const v = (e, t) => {
                    const s = k.C6(e),
                        [a] = s ? m.m3(e, s) : [];
                    return a;
                },
                S = (0, g.Z)()
                    .propsFromState(() => ({ loggedInUser: b.ZP.selectLoggedInUser, avatarMedia: v }))
                    .propsFromActions(() => ({ addAvatarMedia: k._D, removeAvatarMedia: k.Xw })),
                y = "ocfSelectAvatarSkipForNowButton",
                w = "ocfSelectAvatarNextButton";
            class C extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleCropDone = () => this.setState({ done: !0, showCropper: !1 })),
                        (this._handleCropCancel = () => this._handleCropDone()),
                        (this._handleImageMediaChange = (e) => {
                            const { addAvatarMedia: t } = this.props;
                            t(e[0]), this.setState({ mediaId: e[0], showCropper: !0, done: !0 });
                        }),
                        (this._handleImageMediaFailure = () => {
                            this._handleSkipButtonClick();
                        }),
                        (this._handleImageMediaRemove = () => {
                            const { removeAvatarMedia: e } = this.props;
                            e(), this.setState({ done: !1, showCropper: !1 });
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props;
                            a(s, { link: t.next_link.link_id }), e(t.next_link);
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
                        (this.state = { done: !1, showCropper: !1, mediaId: void 0 });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: r, subtaskInputs: o } = this.props,
                        { next_link: l, primary_text: c, secondary_text: u, skip_link: g } = r;
                    return n.createElement(_.Z, (0, a.Z)({}, s, { footer: n.createElement(p.ZP, { actionDisabled: !g && !this.state.mediaId, actionLabel: this.state.done || !g ? l?.label : void 0, actionTestID: w, onAction: this._handleDoneButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this.state.done ? void 0 : g?.label, secondaryActionTestID: y }), header: n.createElement(h.Z, { onNavigate: t, primaryTextProp: c, secondaryTextProp: u, subtaskInputs: o }), providePadding: !0 }), n.createElement(i.Z, null, this._renderMediaPickerWithPreview()), this.state.showCropper && void 0 !== this.state.mediaId ? n.createElement(d.Z, { circle: !0, defaultAspectRatio: 1, mediaId: this.state.mediaId, onCancel: this._handleCropCancel, onDone: this._handleCropDone }) : null, e);
                }
                _renderMediaPickerWithPreview() {
                    const { avatarMedia: e, loggedInUser: t } = this.props,
                        { done: s } = this.state;
                    return n.createElement(i.Z, { style: f.centerContent }, n.createElement(c.default, { borderRadius: l.A.INFINITE, currentContent: t ? n.createElement(r.default, { size: "custom", uri: t.profile_image_url_https }) : null, location: u.vC.Avatar, mediaItem: e, onChange: this._handleImageMediaChange, onFailure: this._handleImageMediaFailure, onRemove: s ? this._handleImageMediaRemove : void 0, rootStyle: f.avatarContainer }));
                }
            }
            const f = o.default.create((e) => ({ avatarContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.white, borderStyle: "solid", marginTop: e.spaces.space64, marginBottom: e.spaces.space64, width: `calc(${e.spaces.space64} * 3)` }, bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: "9em" }, banner: { height: "100%" }, centerContent: { alignItems: "center", display: "flex", width: "100%" } })),
                x = S(C);
        },
        815478: (e, t, s) => {
            s.d(t, { Z: () => N });
            var a = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(682474),
                o = s(392237),
                l = s(992942),
                d = s(823161),
                c = s(731708),
                u = s(519172),
                p = s(330815),
                h = s(199127),
                _ = s(716233),
                g = s(621389),
                m = s(227991),
                k = s(663951),
                b = s(280947),
                v = s(668214),
                S = s(497294),
                y = s(508765),
                w = s(919022);
            const C = (e, t) => {
                    const s = y.C6(e),
                        [a] = s ? S.m3(e, s) : [];
                    return a;
                },
                f = (e, t) => {
                    const s = y.vW(e),
                        [a] = s ? S.m3(e, s) : [];
                    return a;
                },
                x = (0, v.Z)()
                    .propsFromState(() => ({ loggedInUser: w.ZP.selectLoggedInUser, avatarMedia: C, bannerMedia: f }))
                    .propsFromActions(() => ({ addBannerMedia: y.NJ, removeBannerMedia: y.HR })),
                I = "ocfSelectBannerSkipForNowButton",
                Z = "ocfSelectBannerNextButton";
            class E extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleImageMediaRemove = () => {
                            const { removeBannerMedia: e } = this.props;
                            e(), this.setState({ done: !1, showCropper: !1 });
                        }),
                        (this._handleCropDone = () => this.setState({ done: !0, showCropper: !1 })),
                        (this._handleCropCancel = () => this._handleCropDone()),
                        (this._handleImageMediaChange = (e) => {
                            const { addBannerMedia: t } = this.props;
                            t(e[0]), this.setState({ media_id: e[0], showCropper: !0, done: !0 });
                        }),
                        (this._handleImageMediaFailure = () => {
                            this._handleSkipButtonClick();
                        }),
                        (this._handleDoneButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: s, updateFlow: a } = this.props;
                            a(s, { link: t.next_link.link_id }), e(t.next_link);
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
                        (this.state = { done: void 0, media_id: void 0, showCropper: !1 });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: s, subtask: r, subtaskInputs: o } = this.props,
                        { next_link: l, primary_text: d, secondary_text: c, skip_link: u } = r;
                    return n.createElement(b.Z, (0, a.Z)({}, s, { footer: n.createElement(m.ZP, { actionDisabled: !u && !this.state.media_id, actionLabel: this.state.done || !u ? l?.label : void 0, actionTestID: Z, onAction: this._handleDoneButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this.state.done ? void 0 : u?.label, secondaryActionTestID: I }), header: n.createElement(k.Z, { onNavigate: t, primaryTextProp: d, secondaryTextProp: c, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), n.createElement(i.Z, { style: T.container }, this._renderMediaPickerWithPreview(), n.createElement(i.Z, { style: g.Z.avatarAndButton }, this._renderAvatar()), this._renderNames()), this.state.showCropper && void 0 !== this.state.media_id ? n.createElement(p.Z, { defaultAspectRatio: 3, mediaId: this.state.media_id, onCancel: this._handleCropCancel, onDone: this._handleCropDone }) : null, e);
                }
                _renderMediaPickerWithPreview() {
                    const { bannerMedia: e, loggedInUser: t } = this.props,
                        s = e || (!!t && !!t.profile_banner_url),
                        { done: a } = this.state;
                    return n.createElement(h.default, { aspectRatio: 3, currentContent: n.createElement(r.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, s && t ? n.createElement(l.Z, { source: { uri: t.profile_banner_url }, style: T.banner }) : null), location: _.vC.ProfileBanner, mediaItem: e, onChange: this._handleImageMediaChange, onFailure: this._handleImageMediaFailure, onRemove: a ? this._handleImageMediaRemove : void 0, rootStyle: T.bannerContainer });
                }
                _renderAvatar() {
                    const { avatarMedia: e, loggedInUser: t } = this.props,
                        s = (e && e.mediaFile && e.mediaFile.url) || (t && t.profile_image_url_https);
                    return n.createElement(d.default, { "aria-hidden": !0, borderColor: "white", borderWidth: "medium", focusable: !1, size: "custom", style: g.Z.avatar, uri: s });
                }
                _renderNames() {
                    const { loggedInUser: e } = this.props;
                    if (!e) return null;
                    const t = e.name,
                        s = `@${e.screen_name}`,
                        a = { isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, verifiedType: e.verified_type };
                    return n.createElement(i.Z, { style: T.nameContainer }, n.createElement(c.ZP, { align: "left", style: T.names }, n.createElement(c.ZP, { role: "heading", size: "title4", style: T.displayName, weight: "bold" }, t, n.createElement(c.ZP, { size: "title4", style: T.userBadges }, n.createElement(u.Z, a))), n.createElement(c.ZP, { color: "gray700", style: T.screenName }, s)));
                }
            }
            const T = o.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, avatarContainer: { marginStart: e.spaces.space16, marginTop: "-25%", maxWidth: "calc(${theme.spaces.space16} * 8)", width: "25%" }, bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: "9em" }, banner: { height: "100%" }, nameContainer: { marginStart: e.spaces.space16 }, names: { display: "block", marginBottom: e.spaces.space12 }, displayName: { writingDirection: "ltr", display: "block", marginTop: e.spaces.space4 }, screenName: { writingDirection: "ltr" }, userBadges: { display: "inline-flex", flexDirection: "row", flexShrink: 0 } })),
                N = x(E);
        },
        968997: (e, t, s) => {
            s.d(t, { Z: () => w });
            var a = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(821966),
                o = s(392237),
                l = s(154003),
                d = s(96083),
                c = s(111677),
                u = s.n(c),
                p = s(53140),
                h = s(804027),
                _ = s(380020),
                g = s(813959),
                m = s(975364),
                k = s(217623),
                b = s(738374),
                v = s(305784),
                S = s(153925);
            const y = u().dd4a83a6;
            class w extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleActionClick = () => {
                            const { onNavigate: e, settingValue: t } = this.props,
                                s = t.value_data?.action_data?.link;
                            s && e(s);
                        }),
                        (this._handleButtonNavigation = (e, t) => {
                            const { onNavigate: s, updateFlow: a } = this.props;
                            t === h.ZF.NextButton && a?.(e), s && e && s(e);
                        }),
                        (this._getSettingValueFromSubtaskInputs = (e) => {
                            const { subtaskId: t, subtaskInputs: s } = this.props,
                                { value_identifier: a, value_type: n } = e,
                                i = ((0, S.OG)(s, { key: h.Xb, subtask_id: t }, []) || []).find((e) => e.key === a);
                            let r;
                            return i && (0, S._w)(n) && (r = i.response_data.boolean_data?.result), r;
                        }),
                        (this._handleSettingGroupClick = () => {
                            const { onSettingGroupClick: e, settingValue: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleSettingToggle = () => {
                            const { onSettingToggle: e, settingValue: t } = this.props,
                                { value_identifier: s } = t;
                            s && (this.setState({ ...this.state, [s]: !this.state[s] }), e && e(t));
                        }),
                        (this._handleSettingTextChange = (e) => {
                            const { onSettingTextChanged: t, settingValue: s } = this.props;
                            t?.(s, e);
                        }),
                        (this._handleTextFieldOnEditingSubmit = () => {
                            const { nextLink: e, onNavigate: t, updateFlow: s } = this.props;
                            e && (s?.(e), t(e));
                        }),
                        (this._addToast = (e) => {
                            this.props.addToast && this.props.addToast(e);
                        }),
                        (this._getButtonDisplayType = (e) => {
                            switch (e) {
                                case h.ZF.GoogleSSOButton:
                                    return h.GN.GoogleSSO;
                                case h.ZF.AppleSSOButton:
                                    return h.GN.AppleSSO;
                                default:
                                    return h.GN.Default;
                            }
                        });
                    const { settingValue: t } = e,
                        { value_data: s, value_identifier: a, value_type: n } = t;
                    if (a && (0, S._w)(n)) {
                        let e = this._getSettingValueFromSubtaskInputs(t);
                        void 0 === e && (e = s?.boolean_data?.initial_value), (this.state = { [a]: e });
                    }
                }
                render() {
                    const { primary_text: e, secondary_text: t, toggle_wrapper: s, value_type: a } = this.props.settingValue,
                        o = () => {
                            switch (a) {
                                case h.h0.Action:
                                    return this._renderAction();
                                case h.h0.Boolean:
                                case h.h0.PreciseLocation:
                                    return this._renderSettingOption();
                                case h.h0.SettingsGroup:
                                    return this._renderSettingsGroup();
                                case h.h0.StaticText:
                                    return this._renderStaticText();
                                case h.h0.TextField:
                                    return this._renderTextField();
                                case h.h0.DestructiveAction:
                                    return this._renderDestructiveAction();
                                case h.h0.Separator:
                                    return this._renderSeparator();
                                case h.h0.Button:
                                    return this._renderButton();
                                case h.h0.Tweet:
                                    return this._renderTweet();
                                default:
                                    return null;
                            }
                        };
                    return n.createElement(
                        n.Fragment,
                        null,
                        (e || t) &&
                            (() => {
                                switch (a) {
                                    case h.h0.Action:
                                    case h.h0.TextField:
                                    case h.h0.DestructiveAction:
                                    case h.h0.Separator:
                                    case h.h0.Button:
                                    case h.h0.Tweet:
                                        return this._renderStaticText();
                                    default:
                                        return n.createElement(n.Fragment, null);
                                }
                            })(),
                        s ? n.createElement(i.Z, { style: C.tweetDisclosure }, n.createElement(r.Z, { label: y }, o())) : o(),
                    );
                }
                _renderStaticText() {
                    const { onNavigate: e, settingValue: t, subtaskInputs: s } = this.props,
                        { primary_text: r, secondary_text: o } = t,
                        l = t.value_data?.static_text_data?.primary_text || null;
                    return n.createElement(i.Z, { style: r && !l && C.header }, r && !l ? n.createElement(m.Z, (0, a.Z)({}, r, { onNavigate: e, size: "headline1", subtaskInputs: s, weight: "bold" })) : null, o || l ? n.createElement(m.Z, (0, a.Z)({}, o || l, { color: "gray700", onNavigate: e, size: "body", style: C.secondaryText, subtaskInputs: s })) : null);
                }
                _renderTextField() {
                    const { onNavigate: e, settingValue: t, subtaskInputs: s } = this.props,
                        { value_data: a, value_identifier: i } = t;
                    if (!a?.text_field) return null;
                    const r = i === h.ZF.UserIdentifier;
                    return n.createElement(b.Z, { autoComplete: r ? "username" : void 0, onChange: this._handleSettingTextChange, onNavigate: e, onSubmitEditing: this._handleTextFieldOnEditingSubmit, subtaskInputs: s, textField: a.text_field });
                }
                _renderDestructiveAction() {
                    const { onNavigate: e, removeContacts: t, settingValue: s, subtaskInputs: a } = this.props;
                    return n.createElement(i.Z, { style: { marginBottom: o.default.theme.spaces.space16 } }, n.createElement(g.Z, { addToast: this._addToast, onNavigate: e, removeContacts: t, removeContactsSetting: s, subtaskInputs: a }));
                }
                _renderSeparator() {
                    const { onNavigate: e, settingValue: t, subtaskInputs: s } = this.props,
                        { value_data: a } = t;
                    return n.createElement(k.Z, { label: a?.separator?.label, onNavigate: e, subtaskInputs: s });
                }
                _renderAction() {
                    const { onNavigate: e, settingValue: t, subtaskInputs: s } = this.props,
                        r = t.value_data?.action_data?.link.label;
                    return n.createElement(i.Z, null, n.createElement(m.Z, (0, a.Z)({}, t.primary_text, { onNavigate: e, style: C.header, subtaskInputs: s })), n.createElement(m.Z, (0, a.Z)({}, t.secondary_text, { color: "gray700", onNavigate: e, size: "subtext2", subtaskInputs: s })), r ? n.createElement(i.Z, null, n.createElement(l.ZP, { onPress: this._handleActionClick, type: "primaryText" }, r)) : null);
                }
                _renderButton() {
                    const { settingValue: e, subtaskId: t, subtaskInputs: s } = this.props,
                        { value_data: a, value_identifier: i } = e;
                    if (!a?.button) return null;
                    const { navigation_link: r } = a.button,
                        o = r?.link_type === h.Iq.ChromelessWeb;
                    return n.createElement(_.Z, { button: a.button, displayType: this._getButtonDisplayType(i), link: o && r?.url ? { external: !0, pathname: r.url } : void 0, onNavigate: () => this._handleButtonNavigation(r, i), subtaskId: t, subtaskInputs: s });
                }
                _renderTweet() {
                    const { settingValue: e } = this.props,
                        { value_data: t } = e;
                    return t?.tweet_data?.tweet ? n.createElement(p.Z, { tweet: t.tweet_data?.tweet }) : null;
                }
                _renderSettingOption() {
                    const { onNavigate: e, settingValue: t, showDividers: s, subtaskInputs: r } = this.props,
                        { primary_text: o, secondary_text: l, value_identifier: c } = t;
                    return n.createElement(i.Z, { focusable: !0, role: "label", style: [v.Z.option, s && C.optionDivider] }, n.createElement(i.Z, { style: v.Z.checkboxText }, n.createElement(m.Z, (0, a.Z)({}, o, { onNavigate: e, subtaskInputs: r })), l ? n.createElement(m.Z, (0, a.Z)({}, l, { color: "gray700", onNavigate: e, size: "subtext2", style: C.secondaryText, subtaskInputs: r })) : null), c ? n.createElement(i.Z, null, n.createElement(d.Z, { checked: this.state[c], onChange: this._handleSettingToggle })) : null);
                }
                _renderSettingsGroup() {
                    const { onNavigate: e, settingValue: t, subtaskInputs: s } = this.props,
                        { primary_text: r, secondary_text: o, value_data: l } = t,
                        d = l?.settings_group_data?.settings,
                        c = l?.settings_group_data?.status_text_quantity_pairs;
                    return n.createElement(i.Z, { onClick: this._handleSettingGroupClick, role: "button", style: C.settingGroup }, n.createElement(m.Z, (0, a.Z)({}, r, { onNavigate: e, subtaskInputs: s })), d && c ? this._renderQuantityStatus(d, c) : null, o ? n.createElement(m.Z, (0, a.Z)({}, o, { color: "gray700", onNavigate: e, size: "subtext2", subtaskInputs: s })) : null);
                }
                _renderQuantityStatus(e, t) {
                    const { onNavigate: s, subtaskInputs: i } = this.props,
                        r = e.reduce((e, t) => e + (this._getSettingValueFromSubtaskInputs(t) ? 1 : 0), 0);
                    let o;
                    return (
                        t.forEach((e) => {
                            r >= e.threshold && (o = n.createElement(m.Z, (0, a.Z)({}, e.text, { color: "gray700", onNavigate: s, size: "subtext2", style: C.quantityStatusText, subtaskInputs: i })));
                        }),
                        o
                    );
                }
            }
            const C = o.default.create((e) => ({ header: { marginTop: e.spaces.space20 }, secondaryText: { marginTop: e.spaces.space12 }, quantityStatusText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space12 }, optionDivider: { paddingBottom: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, settingGroup: { marginTop: e.spaces.space12, cursor: "pointer" }, textField: { width: "100%" }, textFieldDetails: { marginBottom: e.spaces.space4 }, tweetDisclosure: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 } }));
        },
        299622: (e, t, s) => {
            s.d(t, { Z: () => E });
            var a = s(807896),
                n = s(202784),
                i = s(928316),
                r = s(325686),
                o = s(731708),
                l = s(242454),
                d = s(392237),
                c = s(595088),
                u = s(2138),
                p = s(993547),
                h = s(182495),
                _ = s(804027),
                g = s(227991),
                m = s(663951),
                k = s(280947),
                b = s(975364),
                v = s(746243),
                S = s(305784),
                y = s(153925),
                w = s(968997);
            const C = "ocfSettingsListNextButton",
                f = "ocfSettingsListSkipButton",
                x = "ocfSettingsListPrimaryText";
            class I extends n.Component {
                constructor(e) {
                    super(e),
                        (this._formatSubtaskInputsForStore = (e) =>
                            (0, c.Z)(e).map((e) => {
                                const [t, { result: s, type: a }] = e;
                                return { key: t, response_data: { [a]: { result: s } } };
                            })),
                        (this._loadSubtaskInputsFromStore = () => {
                            const { subtaskId: e, subtaskInputs: t } = this.props;
                            return ((0, y.OG)(t, { key: _.Xb, subtask_id: e }, []) || []).reduce((e, t) => {
                                const { key: s } = t,
                                    [a] = Object.keys(t.response_data),
                                    n = t.response_data[a].result;
                                return (e[s] = { result: n, type: a }), e;
                            }, {});
                        }),
                        (this._updateFlow = (e) => {
                            const { subtask: t, subtaskId: s, updateFlow: a } = this.props,
                                { next_link: n } = t,
                                { settingsValues: i } = this.state;
                            e ? a(s, { [_.Xb]: this._formatSubtaskInputsForStore(i), link: e.link_id }) : n && a(s, { [_.Xb]: this._formatSubtaskInputsForStore(i), link: n.link_id });
                        }),
                        (this._handleShowMore = () => {
                            this.setState({ showMore: !0 });
                        }),
                        (this._handleNextButtonPress = () => {
                            const { onNavigate: e, subtask: t } = this.props,
                                { next_link: s } = t;
                            this._updateFlow(), s && e(s);
                        }),
                        (this._handleSubListBackClick = () => {
                            this.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }), this._updateFlow();
                        }),
                        (this._handleSettingGroupClick = (e) => {
                            const { primary_text: t, value_data: s, value_type: a } = e,
                                n = s?.settings_group_data?.settings;
                            n && a === _.h0.SettingsGroup && this.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: n, subListHeader: t });
                        }),
                        (this._handleScrollPromptClick = () => {
                            this._viewport && this._viewport.scrollBy(this._viewport.getRect().getHeight());
                        }),
                        (this._handleViewportSet = (e) => {
                            const { subtask: t } = this.props;
                            t.scroll_hint && (this._removeScrollListener && this._removeScrollListener(), (this._viewport = e), this._viewport && (this._removeScrollListener = this._viewport.addScrollListener(this._handleViewportScroll)));
                        }),
                        (this._handleViewportScroll = (0, u.Z)(() => {
                            this.state.lastSettingSeen || this.setState({ lastSettingSeen: this._isLastSettingInViewport() });
                        }, 250)),
                        (this._isLastSettingInViewport = () => {
                            if (this._lastSetting && this._viewport) {
                                const e = this._lastSetting.getBoundingClientRect(),
                                    t = this._viewport?.getRect();
                                if (t) return e.top >= t.getTop() && e.bottom <= t.getBottom();
                            }
                            return !1;
                        }),
                        (this._isPrompt = () => {
                            const { subtask: e } = this.props;
                            return "prompt" === e.style;
                        }),
                        (this._setSettingsRef = (e) => (t) => {
                            const { isSubList: s } = this.state;
                            if (this.props.subtask.scroll_hint && !s && e && void 0 === this._lastSetting) {
                                this._lastSetting = i.findDOMNode(t);
                                const e = this._isLastSettingInViewport();
                                e && !this.state.lastSettingSeen && this.setState({ lastSettingSeen: e });
                            } else this._lastSetting = void 0;
                        }),
                        (this._handleSettingToggle = (e) => {
                            const { value_identifier: t, value_type: s } = e;
                            if (t && (0, y._w)(s)) {
                                const { settingsValues: e } = this.state;
                                this.setState({ settingsValues: { ...e, [t]: { ...e[t], result: !e[t].result } } });
                            }
                        }),
                        (this._handleSettingTextChange = (e, t) => {
                            const { value_identifier: s } = e;
                            if (s) {
                                const { settingsValues: e } = this.state;
                                this.setState({ settingsValues: { ...e, [s]: { ...e[s], result: t } } });
                            }
                        }),
                        (this._handleCancelButtonPress = () => {
                            const { onNavigate: e, subtask: t } = this.props,
                                { cancel_link: s } = t;
                            s && (this._updateFlow(s), e(s));
                        }),
                        (this._getSettingsValueNextLink = () => {
                            const { subtask: e } = this.props;
                            if (e.next_link) return e.next_link;
                            for (const t of e.settings) {
                                const { value_data: e, value_identifier: s } = t,
                                    a = e?.button?.navigation_link;
                                if (s === _.ZF.NextButton && a) return a;
                            }
                        });
                    const { subtask: t } = e,
                        s = this._initializeSettingsState(t.settings);
                    this.state = { isSubList: !1, showDividers: !!t.show_divider, showMoreConfig: t.show_more, showMore: !1, subList: [], subListHeader: null, settingsValues: s, lastSettingSeen: !1 };
                }
                componentDidMount() {
                    const { isModal: e, subtask: t, viewport: s } = this.props;
                    t.scroll_hint && !e && this._isPrompt() && ((this._viewport = s), (this._removeScrollListener = this._viewport.addScrollListener(this._handleViewportScroll))), this._updateFlow();
                }
                componentWillUnmount() {
                    this._removeScrollListener && this._removeScrollListener();
                }
                render() {
                    const { isSubList: e } = this.state;
                    return e ? this._renderSubList() : this._renderMainList();
                }
                _renderMainList() {
                    const { errorDialog: e, isModal: t, onNavigate: s, passthroughOcfScreenProps: i, subtask: l, subtaskId: d, subtaskInputs: c } = this.props,
                        { header: u, primary_text: p, secondary_text: g } = l,
                        { lastSettingSeen: y } = this.state,
                        w = !!!l.scroll_hint || y,
                        C = this._isPrompt(),
                        f = this._renderNavigationButtons(w),
                        I = l.scroll_hint,
                        E = !w && I ? n.createElement(v.Z, { isModal: !!t, label: I, onPress: this._handleScrollPromptClick }) : null,
                        T = (l.horizontal_style ?? _.YI.Normal) === _.YI.Compact,
                        N = d === _.D7;
                    return n.createElement(k.Z, (0, a.Z)({}, i, { footer: C ? void 0 : f, onViewportSet: this._handleViewportSet, providePadding: !C && !T, scrollPrompt: E }), n.createElement(r.Z, { style: [T && S.Z.contentAreaCompact, Z.bottomPadding, C && Z.centeredRoot] }, n.createElement(m.Z, { header: u, onNavigate: s, primaryTextProp: p, primaryTextTestID: x, secondaryTextProp: g, subtaskInputs: c }), this._renderSettingsList(l.settings), N ? n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, h.K2) : null, l.detail_text ? n.createElement(b.Z, (0, a.Z)({}, l.detail_text, { color: "gray700", onNavigate: s, style: Z.detailText, subtaskInputs: c })) : null, C && f ? n.createElement(r.Z, { style: Z.doneButtonContainer }, f) : null), e);
                }
                _renderSubList() {
                    const { onNavigate: e, subtaskInputs: t } = this.props,
                        { subList: s, subListHeader: i } = this.state;
                    return n.createElement(k.Z, { onBackClick: this._handleSubListBackClick }, n.createElement(r.Z, { style: S.Z.contentArea }, n.createElement(b.Z, (0, a.Z)({}, i, { onNavigate: e, size: "title4", style: Z.headline, subtaskInputs: t, weight: "bold" })), this._renderSettingsList(s)));
                }
                _renderSettingsList(e) {
                    const { addToast: t, onNavigate: s, removeContacts: a, subtaskId: i, subtaskInputs: r } = this.props,
                        { showDividers: o, showMore: d, showMoreConfig: c } = this.state,
                        u = this._getSettingsValueNextLink();
                    return n.Children.toArray(
                        e.map((p, h) => {
                            const _ = h === e.length - 1;
                            if (c && !d) {
                                if (h === c.initial_to_show) return n.createElement(l.Z, { color: "primary", label: c.text, onPress: this._handleShowMore });
                                if (h > c.initial_to_show) return null;
                            }
                            return n.createElement(w.Z, { addToast: t, nextLink: u, onNavigate: s, onSettingGroupClick: this._handleSettingGroupClick, onSettingTextChanged: this._handleSettingTextChange, onSettingToggle: this._handleSettingToggle, ref: this._setSettingsRef(_), removeContacts: a, settingValue: p, showDividers: !_ && o, subtaskId: i, subtaskInputs: r, updateFlow: this._updateFlow });
                        }),
                    );
                }
                _renderNavigationButtons(e) {
                    const { subtask: t } = this.props,
                        { cancel_link: s, next_link: a } = t,
                        i = { actionDisabled: !e, actionLabel: a?.label, actionTestID: C, onAction: this._handleNextButtonPress, onSecondaryAction: this._handleCancelButtonPress, secondaryActionLabel: s?.label, secondaryActionTestID: f };
                    return (0, g.Bl)(i) ? n.createElement(g.ZP, i) : null;
                }
                _initializeSettingsState(e) {
                    const t = this._loadSubtaskInputsFromStore();
                    return t && Object.keys(t).length > 0
                        ? t
                        : e.reduce((e, t) => {
                              const { value_data: s, value_identifier: a, value_type: n } = t;
                              if (a && s && (0, y._w)(n)) e[a] = { result: s.boolean_data?.initial_value, type: Object.keys(s)[0] };
                              else if (a && n === _.h0.TextField) e[a] = { result: "", type: "text_data" };
                              else if (n === _.h0.SettingsGroup) {
                                  (s?.settings_group_data?.settings || []).forEach((t) => {
                                      const { value_data: s, value_identifier: a, value_type: n } = t;
                                      a && s && (0, y._w)(n) && (e[a] = { result: s.boolean_data?.initial_value, type: Object.keys(s)[0] });
                                  });
                              }
                              return e;
                          }, {});
                }
            }
            const Z = d.default.create((e) => ({ centeredRoot: { alignItems: "center" }, headline: { marginBottom: e.spaces.space12 }, detailText: { marginTop: e.spaces.space40 }, bottomPadding: { paddingBottom: e.spaces.space48 }, doneButtonContainer: { marginTop: e.spaces.space40 } })),
                E = (0, p.Z)(I);
        },
        672859: (e, t, s) => {
            s.d(t, { Z: () => g });
            var a = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(731708),
                o = s(392237),
                l = s(119754),
                d = s(804027),
                c = s(227991),
                u = s(663951),
                p = s(280947),
                h = s(975364);
            const _ = { nextLink: "ocfShowCodeNextLink", skipLink: "ocfShowCodeSkipLink" };
            function g(e) {
                const {
                        errorDialog: t,
                        onNavigate: s,
                        passthroughOcfScreenProps: o,
                        subtask: { code: g, detail_text: k, header: b, next_link: v, skip_link: S, style: y },
                        subtaskId: w,
                        subtaskInputs: C,
                        updateFlow: f,
                    } = e,
                    x = k ? n.createElement(h.Z, (0, a.Z)({}, k, { onNavigate: s, subtaskInputs: C })) : null;
                return n.createElement(
                    p.Z,
                    (0, a.Z)({}, o, {
                        footer: n.createElement(c.ZP, {
                            actionLabel: v?.label,
                            actionTestID: _.nextLink,
                            onAction: () => {
                                f(w, { link: v.link_id }), s(v);
                            },
                            onSecondaryAction: () => {
                                S && (f(w, { link: S.link_id }), s(S));
                            },
                            secondaryActionLabel: S?.label,
                            secondaryActionTestID: _.skipLink,
                            secondaryActionType: "primaryOutlined",
                        }),
                        header: n.createElement(u.Z, { header: b, onNavigate: s, subtaskInputs: C, withHeaderImage: !0 }),
                        providePadding: !0,
                    }),
                    y === d.C_.Qr
                        ? n.createElement(
                              i.Z,
                              { style: m.qrCode },
                              n.createElement("canvas", {
                                  ref: (t) => {
                                      const { code: s } = e.subtask;
                                      (0, l.Z)().then((e) => {
                                          t && e.toCanvas(t, s, { margin: 5, scale: 5 });
                                      });
                                  },
                              }),
                              n.createElement(i.Z, { style: m.detailText }, x),
                          )
                        : n.createElement(n.Fragment, null, n.createElement(r.ZP, { size: "title4", style: m.code, weight: "bold" }, g), n.createElement(i.Z, { style: m.detailText }, x)),
                    t,
                );
            }
            const m = o.default.create((e) => ({ qrCode: { alignItems: "center", paddingVertical: e.spaces.space16 }, code: { backgroundColor: e.colors.gray0, margin: "auto", padding: 15, width: "100%", textAlign: "center" }, detailText: { paddingTop: e.spaces.space16 }, secondaryButton: { marginTop: e.spaces.space12 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-5c0314fd.4965027a.js.map
