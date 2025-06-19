"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfile"],
    {
        160664: (e, t, i) => {
            i.d(t, { Z: () => p });
            var a = i(202784),
                n = i(111677),
                r = i.n(n);
            const s = (e, t, i) => new Date(e, t, i),
                o = r().a46f80ab,
                l = r().c7905f89,
                d = r().ba2e82a1,
                h = r().da44942d,
                c = r().d7d71245;
            function _({ birthdate: e, withBornPrefixText: t }) {
                const { day: i, month: a, year: n } = e,
                    r = !!n,
                    _ = !!a,
                    p = !!i,
                    u = !r && _ && p,
                    f = r && (!_ || !p),
                    m =
                        r && _ && p
                            ? (function (e, t, i, a) {
                                  const n = s(e, t - 1, i);
                                  return a ? o({ birthdate: d(n) }) : d(n);
                              })(Number(n), Number(a), Number(i), t)
                            : u
                              ? (function (e, t, i) {
                                    const a = s(0, e - 1, t);
                                    return i ? o({ birthdate: h(a) }) : h(a);
                                })(Number(a), Number(i), t)
                              : f
                                ? (function (e, t) {
                                      const i = s(e, 0, 1);
                                      return t ? l({ year: c(i) }) : c(i);
                                  })(Number(n), t)
                                : null;
                return m;
            }
            const p = a.memo(_);
        },
        747576: (e, t, i) => {
            i.d(t, { m: () => a });
            const a = Object.freeze({ SELF: "self", MUTUAL_FOLLOW: "mutualfollow", FOLLOWING: "following", FOLLOWERS: "followers", PUBLIC: "public" });
        },
        72130: (e, t, i) => {
            i.d(t, { Ak: () => o, MA: () => s, Rz: () => a, Zi: () => r, he: () => n });
            const a = () => ({ component: "extended_profile_settings", action: "click" }),
                n = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                s = (e, t, i) => ({ component: "rich_text_editor", element: e, action: t, data: i }),
                o = (e, t, i) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...i } });
        },
        656520: (e, t, i) => {
            function a() {
                return { section: "category_label", action: "impression" };
            }
            function n() {
                return { section: "category_label", action: "click" };
            }
            function r() {
                return { component: "professional_conversion", action: "click" };
            }
            function s() {
                return { component: "professional_settings", action: "click" };
            }
            i.d(t, { Lr: () => r, _L: () => a, ti: () => s, yL: () => n });
        },
        947947: (e, t, i) => {
            i.r(t), i.d(t, { DEFAULT_BIRTHDAY: () => We, ProfileScreen: () => Ke, default: () => $e, stylizedCharHelperText: () => ze });
            i(136728);
            var a,
                n,
                r = i(202784),
                s = i(325686),
                o = i(823161),
                l = i(682474),
                d = i(392237),
                h = i(992942),
                c = i(733357),
                _ = i(154003),
                p = i(855488),
                u = i(190286),
                f = i(720283),
                m = i(310452),
                b = i(731708),
                g = i(779610),
                C = i(111677),
                S = i.n(C),
                B = i(908478),
                P = i(323265),
                v = i(88656),
                E = i(980407),
                y = i(751170),
                M = i(160664),
                w = i(443781),
                T = i(330815),
                L = i(199127),
                R = i(96206),
                D = i(747576),
                x = i(716233),
                A = i(166677),
                U = i(656520),
                k = i(620482),
                N = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "BlueVerifiedProfileEditCalloutQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: null,
                                concreteType: "TwitterBlueProfileEditWarningMessageConfig",
                                kind: "LinkedField",
                                name: "blue_profile_edit_warning_message_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TwitterBlueProfileChangeCallout", kind: "LinkedField", name: "callout", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link", storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })], storageKey: null },
                                    { alias: null, args: null, concreteType: "TwitterBlueProfileChangeConfirmation", kind: "LinkedField", name: "confirmation", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "cancel_button_label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "confirm_button_label", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "headline", storageKey: null }, a], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "BlueVerifiedProfileEditCalloutQuery", selections: n },
                    params: { id: "myAwUDICwB5gFdJhNB7xsg", metadata: {}, name: "BlueVerifiedProfileEditCalloutQuery", operationKind: "query", text: null },
                };
            N.hash = "451e17c2bc1e752adf2af7cb2591f649";
            const Z = N;
            i(585488);
            var F = i(712696),
                I = i.n(F),
                O = i(40610);
            const V = Z,
                W = ({ onCancel: e, onConfirm: t, showBadgeRemovalWarning: i = !1 }) => {
                    const { blue_profile_edit_warning_message_config: a } = I()(V, {}),
                        { label: n, link: s, text: o } = a?.callout || {},
                        { cancel_button_label: l, confirm_button_label: d, headline: h, text: c } = a?.confirmation || {};
                    return i && !h && t(), a ? r.createElement(r.Fragment, null, n && s && o && r.createElement(O.Z.Primary, { action: { label: n, link: s }, text: o }), i && h && r.createElement(u.Z, { cancelButtonLabel: l, confirmButtonLabel: d, headline: h, onCancel: e, onConfirm: t, text: c })) : null;
                };
            var H = i(184605),
                z = i(71620),
                K = i(668214),
                G = i(497294),
                $ = i(508765),
                j = i(601576),
                Y = i(919022);
            const q = (e, t) => {
                    const i = $.C6(e);
                    if ((0, H.Z)(i)) return G.m3(e, i)?.[0];
                },
                Q = (e, t) => {
                    const i = $.vW(e);
                    if ((0, H.Z)(i)) return G.m3(e, i)?.[0];
                },
                J = (0, K.Z)()
                    .propsFromState(() => ({ viewerUser: Y.ZP.selectViewerUser, avatarMedia: q, bannerMedia: Q, persistedProfileSettings: $.u$ }))
                    .propsFromActions(() => ({ addAvatarMedia: $._D, addBannerMedia: $.NJ, enableVerifiedPhoneLabel: $.OG, disableVerifiedPhoneLabel: $.GJ, fetchUserProfilePhoneState: $.Il, addToast: j.fz, createLocalApiErrorHandler: (0, z.zr)("SETTINGS_PROFILE_SCREEN"), persistProfileSettings: $.g3, removeAvatarMedia: $.Xw, removeBannerMedia: $.HR, removeMediaUpload: G.WU, resetPersistedProfileSettings: $.Ys, removeProfileBanner: $.o8, updateProfile: $.ck, updateProfileAvatar: $.b4, updateProfileBanner: $.T_ }))
                    .withAnalytics({ page: "settings", section: "profile" });
            var X = i(72130),
                ee = i(462166),
                te = i(535338),
                ie = i(529048);
            const ae = S().bfe8d1a2,
                ne = S().e1ec926e,
                re = ({ analytics: e, hasProfileBlocks: t }) => {
                    const i = r.useCallback(() => {
                            e.scribe({ ...(0, X.Rz)() });
                        }, [e]),
                        a = r.useMemo(() => r.createElement(b.ZP, { size: "headline1" }, t ? ae : ne), [t]);
                    return r.createElement(g.Z, { label: a, link: "/settings/bio", onPress: i, testID: ie.Z.editExtendedProfile });
                },
                se = (e) => {
                    const { user_result_by_screen_name: t } = (0, te.p)(ee.NG, { screenName: e.screenName }),
                        i = t?.result,
                        a = (i?.expanded_profile_results?.result?.profile_sections?.total_count ?? 0) > 0;
                    return i ? r.createElement(re, { analytics: e.analytics, hasProfileBlocks: a }) : null;
                };
            var oe = i(124964),
                le = i(523561),
                de = i(195560);
            const he = (0, le.Z)({ loader: () => Promise.all([i.e("icons.24"), i.e("ondemand.EditBirthdate")]).then(i.bind(i, 416482)), renderPlaceholder: (e, t) => r.createElement(de.Z, { hasError: e, onRetry: t }) }),
                ce = S().c119dee8,
                _e = S().cfd2f35e,
                pe = S().bbf0afc8,
                ue = { headline: S().f98d367e, text: S().d3f43300, confirmButtonLabel: S().abd845fe };
            class fe extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleModalCancel = () => {
                            this.setState({ showConfirmationModal: !1 });
                        }),
                        (this._handleModalConfirmed = () => {
                            this.setState({ isEditing: !0, showConfirmationModal: !1 });
                        }),
                        (this._handleEditPress = () => {
                            this.setState({ showConfirmationModal: !0 });
                        }),
                        (this._handleRemoveBirthdate = () => {
                            const { onRemoveBirthdate: e } = this.props;
                            this.setState({ isEditing: !1 }), e();
                        }),
                        (this._handleCancelEditPress = () => {
                            this.props.onCancelEditBirthdate(), this.setState({ isEditing: !1 });
                        }),
                        (this.state = { isEditing: !1, showConfirmationModal: !1 });
                }
                render() {
                    const { isEditing: e, showConfirmationModal: t } = this.state,
                        { birthdate: i, errors: a, onChange: n, showBirthdateRemoveButton: o } = this.props,
                        l = i.month && i.day && i.year;
                    return e ? r.createElement(s.Z, { style: me.root }, r.createElement(s.Z, { style: me.container }, r.createElement(b.ZP, { weight: "bold" }, ce), r.createElement(oe.Z, null), r.createElement(b.ZP, { color: "link", onPress: this._handleCancelEditPress, role: "button", withInteractiveStyling: !0 }, _e)), r.createElement(he, { birthdate: i, errors: a, onChange: n, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: o })) : r.createElement(r.Fragment, null, r.createElement(g.Z, { description: l ? r.createElement(M.Z, { birthdate: i }) : pe, label: ce, onPress: this._handleEditPress, role: "button" }), t ? r.createElement(u.Z, { confirmButtonLabel: ue.confirmButtonLabel, headline: ue.headline, onCancel: this._handleModalCancel, onConfirm: this._handleModalConfirmed, text: ue.text, withForwardFocusOnConfirm: !0 }) : null);
                }
            }
            const me = d.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, container: { flexDirection: "row" }, containerItem: { marginStart: e.spaces.space4 } }));
            var be = i(954110),
                ge = i(688715);
            const Ce = S().e9603d88,
                Se = S().ada99498;
            const Be = function (e) {
                const { onChange: t, verifiedPhoneStatus: i } = e;
                return r.createElement(be.Z, { checked: i, helpText: Se, label: Ce, learnMoreLink: (0, ge.ju)("https://help.x.com/rules-and-policies/twitter-india"), name: "verified_phone_status_toggle", onChange: t, testID: "Verified_Phone_Status", type: "switch" });
            };
            var Pe = i(161821);
            const ve = Object.freeze({ SUPERSCRIPT_AND_SUBSCRIPT: "superscript_and_subscript", CURRENCY: "currency", LETTER_LIKE: "letter_like", NUMBER_FORMS: "number_forms", ARROWS: "arrows", MATHEMATICAL: "mathematical", GENERAL_PUNCTUATION: "general_punctuation", ENCLOSED_ALPHANUMERICS: "enclosed_alphanumerics", BOX: "box", GEOMETRIC: "geometric", SPACING_MODIFIER: "spacing_modifier", PUNCTUATION: "punctuation", MISC: "miscellaneous" }),
                Ee = (0, Pe.Z)(ve),
                ye = { [ve.SUPERSCRIPT_AND_SUBSCRIPT]: { base: "[⁰-ⁱ]|[⁴-₎]|[ₐ-ₜ]", specialChars: {} }, [ve.CURRENCY]: { base: "[₠-₿]", specialChars: { $: "[$]" } }, [ve.LETTER_LIKE]: { base: "[℀-⅏]", specialChars: {} }, [ve.NUMBER_FORMS]: { base: "[⅐-↋]", specialChars: {} }, [ve.ARROWS]: { base: "[←-⇿]", specialChars: {} }, [ve.MATHEMATICAL]: { base: "[∀-⋿]|[⊓-⊕]|[⨀-⫿]|[⟀-⟯]|[⦀-⧿]", specialChars: {} }, [ve.GENERAL_PUNCTUATION]: { base: "[ -⁯]|[⸀-⹿]", specialChars: {} }, [ve.ENCLOSED_ALPHANUMERICS]: { base: "[①-⓿]", specialChars: {} }, [ve.BOX]: { base: "[─-╿]|[▀-▟]", specialChars: {} }, [ve.GEOMETRIC]: { base: "[■-▩]|[▬-▵]|[▷-▿]|[◁-◺]|[◿]", specialChars: {} }, [ve.SPACING_MODIFIER]: { base: "[ʰ-˿]", specialChars: {} }, [ve.PUNCTUATION]: { base: "[ -⁯]", specialChars: {} }, [ve.MISC]: { base: "[⌀-⌙]|[⌜-⌧]|[〈-⏎]|[⏐-⏨]|[⏴-⏷]|[⏻-⏿]|[★-☐]|[☒-☓]|[☖-☗]|[☙-☜]|[☞-☟]|[☡]|[☤-☥]|[☧-☩]|[☫-☭]|[☰-☷]|[☻-☿]|[♁]|[♃-♇]|[♔-♞]|[♡-♢]|[♤]|[♧]|[♩-♺]|[♼-♽]|[⚀-⚑]|[⚘]|[⚚]|[⚝-⚟]|[⚢-⚦]|[⚨-⚩]|[⚬-⚯]|[⚲-⚼]|[⚿-⛃]|[⛆-⛇]|[⛉-⛍]|[⛐]|[⛒]|[⛕-⛨]|[⛫-⛯]|[⛶]|[⛻-⛼]|[⛾-⛿]", specialChars: {} } },
                Me = ({ text: e, keys: t = Ee, includeSpecialChars: i = !0 }) => {
                    const a = t
                        .map((e) =>
                            ((e, t = !0) => {
                                const i = ye[e];
                                let a = `${i.base}`;
                                if (t) {
                                    const { specialChars: e } = i;
                                    for (const t in e) a += `|${e[t]}`;
                                }
                                return a;
                            })(e, i),
                        )
                        .reduce((e, t) => `${e}|${t}`);
                    return new RegExp(a, "g").test(e);
                },
                we = S().g7088266,
                Te = S().d4e220b4,
                Le = S().d9d293b8,
                Re = S().a990900c,
                De = S().jaaa8984,
                xe = S().i2209530,
                Ae = S().cb469ff6,
                Ue = S().e784846c,
                ke = S().g511f468,
                Ne = S().ec3a116e,
                Ze = S().j94599ec,
                Fe = S().df31d76a,
                Ie = { confirmButtonLabel: S().g9677c6e, headline: S().c01a0e1a },
                Oe = { switchToProfessionalLabel: S().df2c469a, editProfessionalProfileLabel: S().e1f76978 },
                Ve = { headline: S().e554f642, text: S().ic04a6f6, confirmLabel: S().d4ab68e2 },
                We = { visibility: D.m.MUTUAL_FOLLOW, year_visibility: D.m.SELF },
                He = { birthdate: We, description: void 0, location: void 0, name: void 0, shouldDeleteBanner: !1, url: void 0, user_phone_state: { has_verified_phone: !1, label_display_opt_in: !1 } },
                ze = S().addbe8e8;
            class Ke extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handlePhoneStatusChange = (e, t) => {
                            this.setState((e) => (e.profileSettings.user_phone_state ? { ...e, profileSettings: { ...e.profileSettings, user_phone_state: { ...e.profileSettings.user_phone_state, label_display_opt_in: t } } } : e));
                        }),
                        (this._firstUnicodeCharDetected = !1),
                        (this._unicodeDetectionScribed = !1),
                        (this._handleDismiss = () => {
                            const { history: e, resetPersistedProfileSettings: t, viewerUser: i } = this.props;
                            t(), i || e.goBack({ backLocation: "/login" }), e.goBackThroughModals();
                        }),
                        (this._handleCancel = () => {
                            this._shouldShowDiscardConfirmation() ? this.setState({ showDiscardConfirmation: !0 }) : this._handleDismiss();
                        }),
                        (this._handleSubmit = () => {
                            const e = this._getBirthdateErrors();
                            Object.keys(e).length ? this.setState({ errors: e }) : this._shouldShowBirthdateConfirmationModal() ? this.setState({ showBirthdateConfirmationModal: !0 }) : this._shouldShowBadgeRemovalWarning() ? this.setState({ showBadgeRemovalWarning: !0 }) : (this._saveChanges(), this._displayNameUnicodeScribingOnSave());
                        }),
                        (this._handleBlueVerifiedSaveConfirmation = () => {
                            this.setState({ showBadgeRemovalWarning: !1 }), this._saveChanges(), this._displayNameUnicodeScribingOnSave();
                        }),
                        (this._handleConfirmDiscardSettings = () => {
                            this.setState({ showDiscardConfirmation: !1 }), this._handleDismiss();
                        }),
                        (this._handleCancelDiscardSettings = () => {
                            this.setState({ showDiscardConfirmation: !1 });
                        }),
                        (this._handleCancelBadgeRemovalWarning = () => {
                            this.setState({ showBadgeRemovalWarning: !1 });
                        }),
                        (this._handleProfessionalConversionClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...U.Lr() });
                        }),
                        (this._handleProfessionalSettingsClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...U.ti() });
                        }),
                        (this._displayNameUnicodeScribingOnSave = () => {
                            const { analytics: e } = this.props;
                            if (this._firstUnicodeCharDetected) {
                                const t = this.state.isStylizedUnicodeDisplayName ? "contains_unicode_symbols" : "no_unicode_symbols";
                                e.scribe({ component: "unicode_detector", element: t, action: "save" });
                            }
                        }),
                        (this._getBirthdateErrors = () => {
                            const { birthdate: e } = this.state.profileSettings,
                                t = {};
                            return (
                                e !== We &&
                                    ["day", "month", "year"].forEach((i) => {
                                        e[i] || (t[i] = !0);
                                    }),
                                t
                            );
                        }),
                        (this._shouldShowBirthdateConfirmationModal = () => {
                            const { viewerUser: e } = this.props,
                                { birthdate: t } = this.state.profileSettings,
                                i = ["day", "month", "year"].every((e) => !!t[e]),
                                a = (e && e.birthdate) || We,
                                n = !(0, B.Z)(a, t);
                            return i && n;
                        }),
                        (this._shouldShowDiscardConfirmation = () => {
                            const { profileSettings: e } = this.state;
                            return !(0, B.Z)(e, this._initialProfileSettings);
                        }),
                        (this._shouldShowBadgeRemovalWarning = () => {
                            const { avatarMedia: e, viewerUser: t } = this.props,
                                i = t?.is_blue_verified,
                                a = this._initialProfileSettings.name !== this.state.profileSettings.name;
                            return !!i && (!!e || a);
                        }),
                        (this._handleBirthdateModalCancel = () => {
                            this.setState({ showBirthdateConfirmationModal: !1 });
                        }),
                        (this._handleBirthdateModalConfirm = () => {
                            this.setState({ showBirthdateConfirmationModal: !1 }), this._scribeBirthdateAddOrEdit(), this._saveChanges();
                        }),
                        (this._handleBirthdateChange = (e) => {
                            const { errors: t, profileSettings: i } = this.state,
                                a = { ...t };
                            Object.keys(t).forEach((i) => {
                                e[i] && t[i] && delete a[i];
                            }),
                                this.setState({ profileSettings: { ...i, birthdate: { ...i.birthdate, ...e } }, errors: a });
                        }),
                        (this._handleResetBirthdate = () => {
                            const { profileSettings: e } = this.state,
                                t = this.props.viewerUser && this.props.viewerUser.birthdate;
                            this.setState({ profileSettings: { ...e, birthdate: t || We }, errors: {} });
                        }),
                        (this._handleRemoveBirthdate = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, updateProfile: i } = this.props,
                                { profileSettings: a } = this.state;
                            e.scribe({ component: "birthdate", action: "remove" }),
                                i({ birthdate_day: 0, birthdate_month: 0, birthdate_year: 0 })
                                    .then(() => {
                                        this.setState({ profileSettings: { ...a, birthdate: We }, errors: {} });
                                    })
                                    .catch(t({ showToast: !0 }));
                        }),
                        (this._handleAvatarMediaChange = ([e]) => {
                            const { addAvatarMedia: t, avatarMedia: i } = this.props;
                            i && this._clearAvatarMedia(i.id), t(e), this.setState({ showAvatarCropper: !0 });
                        }),
                        (this._handleAvatarCropDone = () => this.setState({ showAvatarCropper: !1 })),
                        (this._handleAvatarCropCancel = () => this._handleAvatarCropDone()),
                        (this._handleBannerMediaChange = ([e]) => {
                            const { addBannerMedia: t, bannerMedia: i } = this.props;
                            i && this._clearBannerMedia(i.id), t(e), this.setState({ showBannerCropper: !0 });
                        }),
                        (this._handleBannerCropDone = () => this.setState({ showBannerCropper: !1 })),
                        (this._handleBannerCropCancel = () => this._handleBannerCropDone()),
                        (this._handleBannerMediaRemove = () => {
                            const { bannerMedia: e } = this.props,
                                { profileSettings: t } = this.state;
                            e ? this._clearBannerMedia(e.id) : this.setState({ profileSettings: { ...t, shouldDeleteBanner: !0 } });
                        }),
                        (this._handleAvatarMediaFailure = (e) => {
                            this._clearAvatarMedia(e);
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._handleMediaUpdateFailureFactory = (e, t) => (i) => {
                            const { addToast: a, createLocalApiErrorHandler: n, removeMediaUpload: r } = this.props,
                                s = (0, A.$r)(i);
                            if (s) {
                                const e = (0, A.ZP)(s, t);
                                e && a(e);
                            } else i instanceof v.Z && i.errors && "Denied by user validation." === i.errors[0]?.message && "ACTION_UPDATE_USER_AVATAR" === i.context?.action && this._isBlueVerifiedEditProfileErrorMessageEnabled ? a({ text: Ue }) : n({ showToast: !0 })(i);
                            r(e.id);
                        }),
                        (this._renderInputHelperText = () => (this.state.isStylizedUnicodeDisplayName ? ze : null)),
                        (this._handleChangeDisplayName = (e) => {
                            const { profileSettings: t } = this.state,
                                {
                                    currentTarget: { value: i },
                                } = e,
                                a = Me({ text: i });
                            if (((this._firstUnicodeCharDetected = this._firstUnicodeCharDetected || a), this.setState({ profileSettings: { ...t, name: i }, isStylizedUnicodeDisplayName: a }), this._firstUnicodeCharDetected && !this._unicodeDetectionScribed)) {
                                this._unicodeDetectionScribed = !0;
                                const { analytics: e } = this.props;
                                e.scribe({ component: "unicode_detector", action: "unicode_detected" });
                            }
                        }),
                        (this._handleChangeDescription = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, description: e.currentTarget.value } });
                        }),
                        (this._handleChangeLocation = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, location: e.currentTarget.value } });
                        }),
                        (this._handleChangeURL = (e) => {
                            const { profileSettings: t } = this.state;
                            this.setState({ profileSettings: { ...t, url: e.currentTarget.value } });
                        }),
                        (this._scribeEditedFields = () => {
                            const { analytics: e } = this.props,
                                { description: t, location: i, name: a, url: n } = this.state.profileSettings,
                                { description: r, location: s, name: o, url: l } = this._initialProfileSettings,
                                d = "edit";
                            t !== r && e.scribe({ component: "bio", action: d }), i !== s && e.scribe({ component: "location", action: d }), a !== o && e.scribe({ component: "name", action: d }), n !== l && e.scribe({ component: "url", action: d });
                        });
                    const { persistedProfileSettings: i, viewerUser: a } = e;
                    (this._initialProfileSettings = (a && this._getInitialProfileSettings(a)) || He), (this._isProfessionalHomeEnabled = this.context.featureSwitches.isTrue("professional_launchpad_m1_enabled")), (this._isExtendedProfileEnabled = this.context.featureSwitches.isTrue("xprofile_editing_enabled") && !P.ZP.isTwitterApp()), (this._isVerifiedPhoneLabelEnabled = this.context.featureSwitches.isTrue("verified_phone_label_enabled")), (this._isBlueVerifiedEditProfileErrorMessageEnabled = this.context.featureSwitches.isTrue("subscriptions_blue_verified_edit_profile_error_message_enabled"));
                    const n = i || this._initialProfileSettings;
                    this.state = { displayNameMaxLength: this.context.featureSwitches.getNumberValue("user_display_name_max_limit", 20), profileSettings: n, showBirthdateConfirmationModal: !1, errors: {}, showAvatarCropper: !1, showBannerCropper: !1, showDiscardConfirmation: !1, showBadgeRemovalWarning: !1, isStylizedUnicodeDisplayName: !1 };
                }
                componentDidMount() {
                    const { fetchUserProfilePhoneState: e, history: t, viewerUser: i } = this.props;
                    if (i) {
                        if (((this._unlockReload = R.Z.acquire()), this._isVerifiedPhoneLabelEnabled)) {
                            const { profileSettings: t } = this.state;
                            e().then((e) => {
                                const i = e?.user_phone_state;
                                (this._initialProfileSettings.user_phone_state = i), this.setState({ profileSettings: { ...t, user_phone_state: i } });
                            });
                        }
                    } else t.push("/login");
                }
                componentDidUpdate(e, t) {
                    const { persistProfileSettings: i } = this.props,
                        { profileSettings: a } = this.state,
                        { profileSettings: n } = t;
                    (0, B.Z)(n, a) || i(a);
                }
                componentWillUnmount() {
                    const { avatarMedia: e, bannerMedia: t } = this.props;
                    e && this._clearAvatarMedia(e.id), t && this._clearBannerMedia(t.id), this._unlockReload();
                }
                render() {
                    const { viewerUser: e } = this.props;
                    return e ? this._render(e) : null;
                }
                _render(e) {
                    const { avatarMedia: t, bannerMedia: i, history: a } = this.props,
                        {
                            displayNameMaxLength: n,
                            errors: f,
                            profileSettings: { description: m, location: b, name: g, shouldDeleteBanner: C, url: S },
                            showAvatarCropper: B,
                            showBadgeRemovalWarning: P,
                            showBannerCropper: v,
                            showDiscardConfirmation: M,
                        } = this.state,
                        w = r.createElement(o.default, { size: "custom", uri: e.profile_image_url_https }),
                        R = i || (e.profile_banner_url && !C),
                        D = r.createElement(l.Z, { ratio: d.default.theme.aspectRatios.profileBanner }, R ? r.createElement(h.Z, { source: { uri: e.profile_banner_url }, style: Ge.banner }) : null),
                        A = void 0 !== g && (0, c.Z)(g),
                        U = !!((t && !t.uploader) || (i && !i.uploader)) || !!Object.keys(f).length || A,
                        k = r.createElement(_.ZP, { disabled: U, onPress: this._handleSubmit, size: "small", testID: ie.Z.save, type: "primaryFilled" }, xe);
                    return r.createElement(
                        E.Z,
                        { history: a, onBackClick: this._handleCancel, rightControl: k, title: we },
                        r.createElement(s.Z, { style: Ge.container }, r.createElement(L.default, { "aria-label": Fe, aspectRatio: 3, currentContent: D, location: x.vC.ProfileBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: R ? this._handleBannerMediaRemove : void 0, rootStyle: Ge.bannerContainer }), r.createElement(L.default, { "aria-label": Ze, borderRadius: y.A.INFINITE, currentContent: w, location: x.vC.Avatar, mediaItem: t, onChange: this._handleAvatarMediaChange, onFailure: this._handleAvatarMediaFailure, rootStyle: Ge.avatarContainer }), r.createElement(p.Z, { autoComplete: "off", defaultValue: g, errorText: Ae, helperText: this._renderInputHelperText(), invalid: A, label: Te, maxLength: n, name: "displayName", onChange: this._handleChangeDisplayName }), r.createElement(W, { onCancel: this._handleCancelBadgeRemovalWarning, onConfirm: this._handleBlueVerifiedSaveConfirmation, showBadgeRemovalWarning: P }), r.createElement(p.Z, { defaultValue: m, label: Re, maxLength: 160, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleChangeDescription }), r.createElement(p.Z, { defaultValue: b, label: De, maxLength: 30, name: "location", onChange: this._handleChangeLocation }), r.createElement(p.Z, { defaultValue: S || "", label: Le, maxLength: 100, name: "url", onChange: this._handleChangeURL }), this._renderProfileBirthdate(), this._renderBirthdateConfirmationModal(), this._isExtendedProfileEnabled ? this._renderEditExtendedProfilesButton() : null, this._renderProfessionalProfilesButton(), this._isVerifiedPhoneLabelEnabled && this.state.profileSettings.user_phone_state?.has_verified_phone ? this._renderEditPhoneStatus() : null),
                        B ? r.createElement(T.Z, { circle: !0, defaultAspectRatio: 1, media: t, onCancel: this._handleAvatarCropCancel, onDone: this._handleAvatarCropDone }) : null,
                        v ? r.createElement(T.Z, { defaultAspectRatio: 3, media: i, onCancel: this._handleBannerCropCancel, onDone: this._handleBannerCropDone }) : null,
                        M ? r.createElement(u.Z, { confirmButtonLabel: Ve.confirmLabel, confirmButtonType: "destructiveFilled", headline: Ve.headline, onCancel: this._handleCancelDiscardSettings, onConfirm: this._handleConfirmDiscardSettings, text: Ve.text }) : null,
                        this.props.__dangerousTestProp && this.state.profileSettings.user_phone_state ? r.createElement("div", { "data-testid": "didFetchPhoneState", style: { display: "none" } }) : null,
                    );
                }
                _getInitialProfileSettings(e) {
                    const { description: t, entities: i } = f.H({ description: e.description, entities: e.entities, withheldDescription: e.withheld_description, withheldEntities: e.withheld_entities });
                    let a = t;
                    if (null !== a) {
                        m.ZP.descriptionTextParts(a, i).forEach((e) => {
                            "url" === e.entityType && (a = a.replace(e.url, e.expandedUrl));
                        });
                    }
                    const n = e.entities.url,
                        r = n?.urls?.[0].expanded_url;
                    return { birthdate: e.birthdate || We, description: a, location: e.location, name: e.name, shouldDeleteBanner: !1, url: r };
                }
                _renderProfileBirthdate() {
                    const {
                            errors: e,
                            profileSettings: { birthdate: t },
                        } = this.state,
                        { viewerUser: i } = this.props;
                    return r.createElement(fe, { birthdate: t, errors: e, onCancelEditBirthdate: this._handleResetBirthdate, onChange: this._handleBirthdateChange, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: !(!i || !i.birthdate) });
                }
                _renderBirthdateConfirmationModal() {
                    return this.state.showBirthdateConfirmationModal ? r.createElement(u.Z, { confirmButtonLabel: Ie.confirmButtonLabel, headline: Ie.headline, onCancel: this._handleBirthdateModalCancel, onConfirm: this._handleBirthdateModalConfirm, text: this._getBirthdateConfirmationModalText() }) : null;
                }
                _getBirthdateConfirmationModalText() {
                    const { day: e, month: t, year: i } = this.state.profileSettings.birthdate;
                    return r.createElement(S().I18NFormatMessage, { $i18n: "e9dec56f" }, r.createElement(M.Z, { birthdate: { day: e, month: t, year: i } }));
                }
                _renderEditPhoneStatus() {
                    return r.createElement(Be, { onChange: this._handlePhoneStatusChange, verifiedPhoneStatus: Boolean(this.state.profileSettings.user_phone_state?.label_display_opt_in) });
                }
                _renderProfessionalProfilesButton() {
                    const { viewerUser: e } = this.props;
                    return e?.professional ? this._renderEditProfessionalProfileButton() : this._renderSwitchToProfessionalButton();
                }
                _renderSwitchToProfessionalButton() {
                    const e = r.createElement(b.ZP, { size: "headline1" }, Oe.switchToProfessionalLabel),
                        t = "editprofile" + (this._isProfessionalHomeEnabled ? "-professionalHomeEnabled" : "");
                    return r.createElement(g.Z, { label: e, link: { pathname: "/i/flow/convert_to_professional", state: { input: { requested_variant: t } }, method: "push" }, onPress: this._handleProfessionalConversionClick, testID: ie.Z.switchToProfessional });
                }
                _renderEditProfessionalProfileButton() {
                    const e = r.createElement(b.ZP, { size: "headline1" }, Oe.editProfessionalProfileLabel);
                    return r.createElement(g.Z, { label: e, link: "/settings/professional_profile", onPress: this._handleProfessionalSettingsClick, testID: ie.Z.editProfessionalProfile });
                }
                _renderEditExtendedProfilesButton() {
                    const { analytics: e, viewerUser: t } = this.props;
                    return t?.screen_name ? r.createElement(se, { analytics: e, screenName: t?.screen_name }) : null;
                }
                _saveChanges() {
                    const { analytics: e, avatarMedia: t, bannerMedia: i, createLocalApiErrorHandler: a, disableVerifiedPhoneLabel: n, enableVerifiedPhoneLabel: r, removeMediaUpload: s, removeProfileBanner: o, updateProfile: l, updateProfileAvatar: d, updateProfileBanner: h } = this.props;
                    if (t) {
                        const i = t.id;
                        d(i).then(
                            () => {
                                e.scribe({ component: "avatar", action: "edit" }), s(i);
                            },
                            this._handleMediaUpdateFailureFactory(t, ke),
                        );
                    }
                    i
                        ? h(i.id).then(
                              () => {
                                  e.scribe({ component: "banner", action: "edit" }), s(i.id);
                              },
                              this._handleMediaUpdateFailureFactory(i, Ne),
                          )
                        : this.state.profileSettings.shouldDeleteBanner &&
                          o()
                              .then(() => e.scribe({ component: "banner", action: "remove" }))
                              .catch(a({ showToast: !0 }));
                    const c = this._initialProfileSettings.user_phone_state,
                        _ = this.state.profileSettings.user_phone_state?.label_display_opt_in;
                    c?.label_display_opt_in !== _ &&
                        (_
                            ? r()
                                  .then(() => {
                                      e.scribe({ component: "profile_verified_phone_label", action: "add" });
                                  })
                                  .catch(a({ showToast: !0 }))
                            : n()
                                  .then(() => {
                                      e.scribe({ component: "profile_verified_phone_label", action: "remove" });
                                  })
                                  .catch(a({ showToast: !0 })));
                    l(this._getFormattedState())
                        .then(() => {
                            this._scribeEditedFields(), k.Z.refreshHTMLCache(), this._handleDismiss();
                        })
                        .catch(a({ showToast: !0 }));
                }
                _getFormattedState() {
                    const {
                            displayNameMaxLength: e,
                            profileSettings: { birthdate: t, description: i, location: a, name: n, url: r, user_phone_state: s },
                        } = this.state,
                        { day: o, month: l, visibility: d, year: h, year_visibility: c } = t;
                    return { ...(o && l && h ? { birthdate_day: o, birthdate_month: l, birthdate_year: h, birthdate_visibility: d, birthdate_year_visibility: c } : {}), displayNameMaxLength: e, url: r, name: n, description: i, location: a, user_phone_state: s };
                }
                _scribeBirthdateAddOrEdit() {
                    const { analytics: e, viewerUser: t } = this.props,
                        i = t && t.birthdate,
                        a = i && i.month && i.day && i.year ? "edit" : "add";
                    e.scribe({ component: "birthdate", action: a });
                }
                _clearAvatarMedia(e) {
                    const { avatarMedia: t, removeAvatarMedia: i, removeMediaUpload: a } = this.props;
                    (t && t.uploading) || a(e), i(e);
                }
                _clearBannerMedia(e) {
                    const { bannerMedia: t, removeBannerMedia: i, removeMediaUpload: a } = this.props;
                    (t && t.uploading) || a(e), i(e);
                }
            }
            Ke.contextType = w.rC;
            const Ge = d.default.create((e) => ({ avatarContainer: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.medium, borderColor: e.colors.cellBackground, borderStyle: "solid", marginStart: "1rem", marginTop: "-3rem", maxWidth: "8rem", width: "25%" }, banner: { height: "100%" }, bannerContainer: { maxHeight: "200px" }, container: { paddingBottom: e.spaces.space64 }, blueVerifiedCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                $e = J(Ke);
        },
        529048: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = { birthdate: "ProfileBirthdate", cancel: "ProfileBirthdate_Cancel_Button", dayMonthVisibility: "ProfileBirthdate_Day_Month_Visibility", daySelector: "ProfileBirthdate_Day_Selector", edit: "ProfileBirthdate_Edit_Button", editProfessionalProfile: "ProfessionalButton_Edit_Professional_Profile", editExtendedProfile: "ExtendedButton_Edit_Extended_Profile", missingBirthdate: "ProfileBirthdate_Missing_Birthdate", monthSelector: "ProfileBirthdate_Month_Selector", remove: "ProfileBirthdate_Remove_Button", save: "Profile_Save_Button", bio: "Profile_Bio", switchToProfessional: "ProfessionalButton_Switch_To_Professional", yearSelector: "ProfileBirthdate_Year_Selector", yearVisibility: "ProfileBirthdate_Year_Visibility" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfile.7f256f1a.js.map
