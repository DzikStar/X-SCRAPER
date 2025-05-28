"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfile", "loader.MediaPickerWithPreview"],
    {
        850496: (e, t, i) => {
            i.d(t, { Z: () => S });
            var a = i(202784),
                n = i(325686),
                r = i(731708),
                o = i(15038),
                s = i(154003),
                l = i(682474),
                d = i(392237),
                c = i(111677),
                h = i.n(c),
                p = i(293615),
                u = i(837020),
                _ = i(219229),
                m = i(373554),
                f = i(304059),
                E = i(751170);
            const g = h().b87ca51a,
                b = h().eebff22c,
                C = a.createElement(p.default, null);
            class S extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: h, rootStyle: p, withDragDrop: u } = this.props,
                        _ = l && !l.uploader,
                        m = a.createElement(a.Fragment, null, this._renderPreview(), _ ? null : a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [y.mask, s, P[e]] }), a.createElement(n.Z, { style: [y.overlaidContent, i] }, a.createElement(n.Z, { style: y.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, h ? this._renderMediaRemove() : null), t ? a.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: y.description }, t) : null)));
                    return a.createElement(n.Z, { style: [y.container, p, P[e]] }, u && d ? a.createElement(o.ZP, { onFilesAdded: d, style: [y.dragDropContainer, P[e]] }, m) : m);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: a.createElement(u.default, null), onPress: e, size: "large", style: y.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(s.ZP, { "aria-label": b, icon: a.createElement(_.default, null), onPress: e, size: "large", style: y.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onAddMediaFiles: o, onEdit: l } = this.props;
                    return o ? a.createElement(m.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: n, multiple: r, onChange: o, size: "large", style: y.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(s.ZP, { "aria-label": i, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: n } = this.props;
                    return n ? a.createElement(l.Z, { ratio: e }, a.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: y.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            S.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: E.A.NONE, icon: C };
            const P = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                y = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        160664: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                n = i(111677),
                r = i.n(n);
            const o = (e, t, i) => new Date(e, t, i),
                s = r().a46f80ab,
                l = r().c7905f89,
                d = r().ba2e82a1,
                c = r().da44942d,
                h = r().d7d71245;
            function p({ birthdate: e, withBornPrefixText: t }) {
                const { day: i, month: a, year: n } = e,
                    r = !!n,
                    p = !!a,
                    u = !!i,
                    _ = !r && p && u,
                    m = r && (!p || !u),
                    f =
                        r && p && u
                            ? (function (e, t, i, a) {
                                  const n = o(e, t - 1, i);
                                  return a ? s({ birthdate: d(n) }) : d(n);
                              })(Number(n), Number(a), Number(i), t)
                            : _
                              ? (function (e, t, i) {
                                    const a = o(0, e - 1, t);
                                    return i ? s({ birthdate: c(a) }) : c(a);
                                })(Number(a), Number(i), t)
                              : m
                                ? (function (e, t) {
                                      const i = o(e, 0, 1);
                                      return t ? l({ year: h(i) }) : h(i);
                                  })(Number(n), t)
                                : null;
                return f;
            }
            const u = a.memo(p);
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => B });
            var a = i(202784),
                n = i(392237),
                r = i(154003),
                o = i(111677),
                s = i.n(o),
                l = i(184605),
                d = i(980407),
                c = i(873637),
                h = i(668214),
                p = i(497294);
            const u = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                _ = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                m = (0, h.Z)()
                    .propsFromState(() => ({ media: u, mediaId: _ }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                E = s().gd80afba,
                g = s().a753a870;
            class b extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(r.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, g);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: a, mediaId: n, onDone: r, processMedia: o, updateMediaUpload: s } = this.props;
                                this.setState({ isProcessing: !0 });
                                const d = t.getCropData(),
                                    { originalMediaFile: c } = a || {},
                                    h = !c || (0 === d.top && 0 === d.left && d.width === c.width && d.height === c.height);
                                (0, l.Z)(n) &&
                                    (e
                                        ? (e(d), r())
                                        : (s({ id: n, cropData: h ? void 0 : d }),
                                          o(n).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), r();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: n, withZoomControl: r } = this.props,
                        o = this._getMedia();
                    return a.createElement(d.Z, { backButtonType: "back", containerStyle: C.root, documentTitle: i || E, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || E }, a.createElement(c.Z, { defaultAspectRatio: e, media: o, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: r }));
                }
            }
            const C = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                S = m(b);
            var P = i(757700);
            const y = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                B = (e) => a.createElement(P.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: y.modal }, a.createElement(S, e));
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var a = i(202784),
                n = i(850496),
                r = i(373554),
                o = i(668214),
                s = i(497294);
            const l = (0, o.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: a, onFailure: n, processMultipleMedia: r } = this.props,
                                o = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => o.includes(e.type));
                            s &&
                                t([s], { location: i }).then((e) => {
                                    a && a(e.map((e) => e.id)), r(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, r.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onCrop: p, onRemove: u, rootStyle: _ } = this.props;
                    return a.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: r, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: h, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: u, rootStyle: _, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
        747576: (e, t, i) => {
            i.d(t, { m: () => a });
            const a = Object.freeze({ SELF: "self", MUTUAL_FOLLOW: "mutualfollow", FOLLOWING: "following", FOLLOWERS: "followers", PUBLIC: "public" });
        },
        72130: (e, t, i) => {
            i.d(t, { Ak: () => s, MA: () => o, Rz: () => a, Zi: () => r, he: () => n });
            const a = () => ({ component: "extended_profile_settings", action: "click" }),
                n = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                o = (e, t, i) => ({ component: "rich_text_editor", element: e, action: t, data: i }),
                s = (e, t, i) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...i } });
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
            function o() {
                return { component: "professional_settings", action: "click" };
            }
            i.d(t, { Lr: () => r, _L: () => a, ti: () => o, yL: () => n });
        },
        508765: (e, t, i) => {
            i.d(t, { C6: () => b, GJ: () => V, HR: () => M, Il: () => I, NJ: () => R, OG: () => O, T_: () => k, Xw: () => v, Ys: () => U, _D: () => y, b4: () => x, ck: () => N, g3: () => T, o8: () => F, u$: () => S, vW: () => C });
            var a = i(226395),
                n = i(499627),
                r = i(917799),
                o = i(56519),
                s = i(497294);
            const l = `${i(291020).Y}/profile`,
                d = `rweb/${l}`,
                c = r.dg(d, "REMOVE_PROFILE_BANNER"),
                h = r.dg(d, "UPDATE_PROFILE"),
                p = r.dg(d, "UPDATE_PROFILE_AVATAR"),
                u = r.dg(d, "UPDATE_PROFILE_BANNER"),
                _ = r.dg(d, "UPLOAD_MEDIA"),
                m = Object.freeze({ REQUEST: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                f = Object.freeze({ REQUEST: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_FAILURE" }),
                g = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null };
            const b = (e) => e[l].avatarMediaId,
                C = (e) => e[l].bannerMediaId,
                S = (e) => e[l].profileSettings,
                P = "rweb/settings/profile/ADD_AVATAR_MEDIA",
                y = (e) => ({ meta: { mediaId: e }, type: P }),
                B = "rweb/settings/profile/REMOVE_AVATAR_MEDIA",
                v = (e) => ({ meta: { mediaId: e }, type: B }),
                w = "rweb/settings/profile/ADD_BANNER_MEDIA",
                R = (e) => ({ meta: { mediaId: e }, type: w }),
                A = "rweb/settings/profile/REMOVE_BANNER_MEDIA",
                M = (e) => ({ meta: { mediaId: e }, type: A }),
                I =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).fetchUserProfilePhoneState, params: {} })({ actionTypes: E, context: "ACTION_FETCH_VERIFIED_PHONE_LABEL" }, (e) => {
                            if (e) return e;
                        }),
                L = "rweb/settings/profile/PERSIST_PROFILE_SETTINGS",
                T = (e) => ({ meta: { profileSettings: e }, type: L }),
                D = "rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS",
                U = () => ({ type: D }),
                F =
                    (e) =>
                    (t, i, { api: n }) =>
                        r._O(t, { params: e, request: n.withEndpoint(a.Z).removeProfileBanner })({ actionTypes: c, context: "ACTION_REMOVE_USER_BANNER" }, (e) => {
                            if (e) return [(0, o.dP)({ users: { [e.id_str]: { ...e, profile_banner_url: null } } })];
                        }),
                N =
                    (e) =>
                    (t, i, { api: n }) =>
                        r._O(t, { params: e, request: n.withEndpoint(a.Z).updateProfile })({ actionTypes: h, context: "ACTION_UPDATE_PROFILE_SETTINGS" }, (e) => {
                            if (e && e.entities) return [(0, o.dP)(e.entities)];
                        }),
                Z =
                    (e, t, i) =>
                    (a) =>
                    (n, l, { api: d }) => {
                        n({ type: _.REQUEST });
                        const c = s.$i(a);
                        return n(c).then(
                            ([a]) => {
                                n([{ type: _.SUCCESS }, { type: e.REQUEST }]);
                                return r._O(n, { params: { media_id: a.uploadId }, request: i(d) })({ actionTypes: h, context: t }, (e) => {
                                    if (e) return [(0, o.dP)({ users: { [e.id_str]: e } })];
                                });
                            },
                            (e) => (n({ type: _.FAILURE }), Promise.reject(e)),
                        );
                    },
                x = Z(p, "ACTION_UPDATE_USER_AVATAR", (e) => e.withEndpoint(a.Z).updateProfileAvatar),
                k = Z(u, "ACTION_UPDATE_USER_BANNER", (e) => e.withEndpoint(a.Z).updateProfileBanner),
                O =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).enableVerifiedPhoneLabel, params: {} })({ actionTypes: m, context: "ACTION_ENABLE_VERIFIED_PHONE_LABEL" }),
                V =
                    () =>
                    (e, t, { api: i }) =>
                        r._O(e, { request: i.withEndpoint(a.Z).disableVerifiedPhoneLabel, params: {} })({ actionTypes: f, context: "ACTION_DISABLE_VERIFIED_PHONE_LABEL" });
            n.Z.register({
                [l]: function (e = g, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case P:
                            return { ...e, avatarMediaId: t.meta.mediaId };
                        case B:
                            return { ...e, avatarMediaId: null };
                        case w:
                            return { ...e, bannerMediaId: t.meta.mediaId };
                        case A:
                            return { ...e, bannerMediaId: null };
                        case E.SUCCESS:
                            return { ...e, hasVerifiedPhone: t?.payload?.user_phone_state?.has_verified_phone || !1, labelDisplayOptIn: t?.payload?.user_phone_state?.label_display_opt_in || !1 };
                        case L:
                            return { ...e, profileSettings: t.meta.profileSettings };
                        case D:
                            return { ...e, profileSettings: null };
                        case _.REQUEST:
                            return { ...e, isUploading: !0 };
                        case _.FAILURE:
                        case _.SUCCESS:
                            return { ...e, isUploading: !1 };
                        default:
                            return e;
                    }
                },
            });
        },
        947947: (e, t, i) => {
            i.r(t), i.d(t, { DEFAULT_BIRTHDAY: () => He, ProfileScreen: () => Ge, default: () => $e, stylizedCharHelperText: () => We });
            i(136728);
            var a,
                n,
                r = i(202784),
                o = i(325686),
                s = i(823161),
                l = i(682474),
                d = i(392237),
                c = i(992942),
                h = i(733357),
                p = i(154003),
                u = i(855488),
                _ = i(190286),
                m = i(720283),
                f = i(310452),
                E = i(731708),
                g = i(779610),
                b = i(111677),
                C = i.n(b),
                S = i(908478),
                P = i(323265),
                y = i(88656),
                B = i(980407),
                v = i(751170),
                w = i(160664),
                R = i(443781),
                A = i(330815),
                M = i(199127),
                I = i(96206),
                L = i(747576),
                T = i(716233),
                D = i(166677),
                U = i(656520),
                F = i(620482),
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
            var x = i(712696),
                k = i.n(x),
                O = i(40610);
            const V = Z,
                H = ({ onCancel: e, onConfirm: t, showBadgeRemovalWarning: i = !1 }) => {
                    const { blue_profile_edit_warning_message_config: a } = k()(V, {}),
                        { label: n, link: o, text: s } = a?.callout || {},
                        { cancel_button_label: l, confirm_button_label: d, headline: c, text: h } = a?.confirmation || {};
                    return i && !c && t(), a ? r.createElement(r.Fragment, null, n && o && s && r.createElement(O.Z.Primary, { action: { label: n, link: o }, text: s }), i && c && r.createElement(_.Z, { cancelButtonLabel: l, confirmButtonLabel: d, headline: c, onCancel: e, onConfirm: t, text: h })) : null;
                };
            var z = i(184605),
                W = i(71620),
                G = i(668214),
                j = i(497294),
                $ = i(508765),
                K = i(601576),
                Q = i(919022);
            const q = (e, t) => {
                    const i = $.C6(e);
                    if ((0, z.Z)(i)) return j.m3(e, i)?.[0];
                },
                Y = (e, t) => {
                    const i = $.vW(e);
                    if ((0, z.Z)(i)) return j.m3(e, i)?.[0];
                },
                J = (0, G.Z)()
                    .propsFromState(() => ({ viewerUser: Q.ZP.selectViewerUser, avatarMedia: q, bannerMedia: Y, persistedProfileSettings: $.u$ }))
                    .propsFromActions(() => ({ addAvatarMedia: $._D, addBannerMedia: $.NJ, enableVerifiedPhoneLabel: $.OG, disableVerifiedPhoneLabel: $.GJ, fetchUserProfilePhoneState: $.Il, addToast: K.fz, createLocalApiErrorHandler: (0, W.zr)("SETTINGS_PROFILE_SCREEN"), persistProfileSettings: $.g3, removeAvatarMedia: $.Xw, removeBannerMedia: $.HR, removeMediaUpload: j.WU, resetPersistedProfileSettings: $.Ys, removeProfileBanner: $.o8, updateProfile: $.ck, updateProfileAvatar: $.b4, updateProfileBanner: $.T_ }))
                    .withAnalytics({ page: "settings", section: "profile" });
            var X = i(72130),
                ee = i(462166),
                te = i(535338),
                ie = i(529048);
            const ae = C().bfe8d1a2,
                ne = C().e1ec926e,
                re = ({ analytics: e, hasProfileBlocks: t }) => {
                    const i = r.useCallback(() => {
                            e.scribe({ ...(0, X.Rz)() });
                        }, [e]),
                        a = r.useMemo(() => r.createElement(E.ZP, { size: "headline1" }, t ? ae : ne), [t]);
                    return r.createElement(g.Z, { label: a, link: "/settings/bio", onPress: i, testID: ie.Z.editExtendedProfile });
                },
                oe = (e) => {
                    const { user_result_by_screen_name: t } = (0, te.p)(ee.NG, { screenName: e.screenName }),
                        i = t?.result,
                        a = (i?.expanded_profile_results?.result?.profile_sections?.total_count ?? 0) > 0;
                    return i ? r.createElement(re, { analytics: e.analytics, hasProfileBlocks: a }) : null;
                };
            var se = i(124964),
                le = i(523561),
                de = i(195560);
            const ce = (0, le.Z)({ loader: () => Promise.all([i.e("icons.28"), i.e("ondemand.EditBirthdate")]).then(i.bind(i, 416482)), renderPlaceholder: (e, t) => r.createElement(de.Z, { hasError: e, onRetry: t }) }),
                he = C().c119dee8,
                pe = C().cfd2f35e,
                ue = C().bbf0afc8,
                _e = { headline: C().f98d367e, text: C().d3f43300, confirmButtonLabel: C().abd845fe };
            class me extends r.Component {
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
                        { birthdate: i, errors: a, onChange: n, showBirthdateRemoveButton: s } = this.props,
                        l = i.month && i.day && i.year;
                    return e ? r.createElement(o.Z, { style: fe.root }, r.createElement(o.Z, { style: fe.container }, r.createElement(E.ZP, { weight: "bold" }, he), r.createElement(se.Z, null), r.createElement(E.ZP, { color: "link", onPress: this._handleCancelEditPress, role: "button", withInteractiveStyling: !0 }, pe)), r.createElement(ce, { birthdate: i, errors: a, onChange: n, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: s })) : r.createElement(r.Fragment, null, r.createElement(g.Z, { description: l ? r.createElement(w.Z, { birthdate: i }) : ue, label: he, onPress: this._handleEditPress, role: "button" }), t ? r.createElement(_.Z, { confirmButtonLabel: _e.confirmButtonLabel, headline: _e.headline, onCancel: this._handleModalCancel, onConfirm: this._handleModalConfirmed, text: _e.text, withForwardFocusOnConfirm: !0 }) : null);
                }
            }
            const fe = d.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, container: { flexDirection: "row" }, containerItem: { marginStart: e.spaces.space4 } }));
            var Ee = i(954110),
                ge = i(688715);
            const be = C().e9603d88,
                Ce = C().ada99498;
            const Se = function (e) {
                const { onChange: t, verifiedPhoneStatus: i } = e;
                return r.createElement(Ee.Z, { checked: i, helpText: Ce, label: be, learnMoreLink: (0, ge.ju)("https://help.x.com/rules-and-policies/twitter-india"), name: "verified_phone_status_toggle", onChange: t, testID: "Verified_Phone_Status", type: "switch" });
            };
            var Pe = i(161821);
            const ye = Object.freeze({ SUPERSCRIPT_AND_SUBSCRIPT: "superscript_and_subscript", CURRENCY: "currency", LETTER_LIKE: "letter_like", NUMBER_FORMS: "number_forms", ARROWS: "arrows", MATHEMATICAL: "mathematical", GENERAL_PUNCTUATION: "general_punctuation", ENCLOSED_ALPHANUMERICS: "enclosed_alphanumerics", BOX: "box", GEOMETRIC: "geometric", SPACING_MODIFIER: "spacing_modifier", PUNCTUATION: "punctuation", MISC: "miscellaneous" }),
                Be = (0, Pe.Z)(ye),
                ve = { [ye.SUPERSCRIPT_AND_SUBSCRIPT]: { base: "[⁰-ⁱ]|[⁴-₎]|[ₐ-ₜ]", specialChars: {} }, [ye.CURRENCY]: { base: "[₠-₿]", specialChars: { $: "[$]" } }, [ye.LETTER_LIKE]: { base: "[℀-⅏]", specialChars: {} }, [ye.NUMBER_FORMS]: { base: "[⅐-↋]", specialChars: {} }, [ye.ARROWS]: { base: "[←-⇿]", specialChars: {} }, [ye.MATHEMATICAL]: { base: "[∀-⋿]|[⊓-⊕]|[⨀-⫿]|[⟀-⟯]|[⦀-⧿]", specialChars: {} }, [ye.GENERAL_PUNCTUATION]: { base: "[ -⁯]|[⸀-⹿]", specialChars: {} }, [ye.ENCLOSED_ALPHANUMERICS]: { base: "[①-⓿]", specialChars: {} }, [ye.BOX]: { base: "[─-╿]|[▀-▟]", specialChars: {} }, [ye.GEOMETRIC]: { base: "[■-▩]|[▬-▵]|[▷-▿]|[◁-◺]|[◿]", specialChars: {} }, [ye.SPACING_MODIFIER]: { base: "[ʰ-˿]", specialChars: {} }, [ye.PUNCTUATION]: { base: "[ -⁯]", specialChars: {} }, [ye.MISC]: { base: "[⌀-⌙]|[⌜-⌧]|[〈-⏎]|[⏐-⏨]|[⏴-⏷]|[⏻-⏿]|[★-☐]|[☒-☓]|[☖-☗]|[☙-☜]|[☞-☟]|[☡]|[☤-☥]|[☧-☩]|[☫-☭]|[☰-☷]|[☻-☿]|[♁]|[♃-♇]|[♔-♞]|[♡-♢]|[♤]|[♧]|[♩-♺]|[♼-♽]|[⚀-⚑]|[⚘]|[⚚]|[⚝-⚟]|[⚢-⚦]|[⚨-⚩]|[⚬-⚯]|[⚲-⚼]|[⚿-⛃]|[⛆-⛇]|[⛉-⛍]|[⛐]|[⛒]|[⛕-⛨]|[⛫-⛯]|[⛶]|[⛻-⛼]|[⛾-⛿]", specialChars: {} } },
                we = ({ text: e, keys: t = Be, includeSpecialChars: i = !0 }) => {
                    const a = t
                        .map((e) =>
                            ((e, t = !0) => {
                                const i = ve[e];
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
                Re = C().g7088266,
                Ae = C().d4e220b4,
                Me = C().d9d293b8,
                Ie = C().a990900c,
                Le = C().jaaa8984,
                Te = C().i2209530,
                De = C().cb469ff6,
                Ue = C().e784846c,
                Fe = C().g511f468,
                Ne = C().ec3a116e,
                Ze = C().j94599ec,
                xe = C().df31d76a,
                ke = { confirmButtonLabel: C().g9677c6e, headline: C().c01a0e1a },
                Oe = { switchToProfessionalLabel: C().df2c469a, editProfessionalProfileLabel: C().e1f76978 },
                Ve = { headline: C().e554f642, text: C().ic04a6f6, confirmLabel: C().d4ab68e2 },
                He = { visibility: L.m.MUTUAL_FOLLOW, year_visibility: L.m.SELF },
                ze = { birthdate: He, description: void 0, location: void 0, name: void 0, shouldDeleteBanner: !1, url: void 0, user_phone_state: { has_verified_phone: !1, label_display_opt_in: !1 } },
                We = C().addbe8e8;
            class Ge extends r.Component {
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
                                e !== He &&
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
                                a = (e && e.birthdate) || He,
                                n = !(0, S.Z)(a, t);
                            return i && n;
                        }),
                        (this._shouldShowDiscardConfirmation = () => {
                            const { profileSettings: e } = this.state;
                            return !(0, S.Z)(e, this._initialProfileSettings);
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
                            this.setState({ profileSettings: { ...e, birthdate: t || He }, errors: {} });
                        }),
                        (this._handleRemoveBirthdate = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, updateProfile: i } = this.props,
                                { profileSettings: a } = this.state;
                            e.scribe({ component: "birthdate", action: "remove" }),
                                i({ birthdate_day: 0, birthdate_month: 0, birthdate_year: 0 })
                                    .then(() => {
                                        this.setState({ profileSettings: { ...a, birthdate: He }, errors: {} });
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
                                o = (0, D.$r)(i);
                            if (o) {
                                const e = (0, D.ZP)(o, t);
                                e && a(e);
                            } else i instanceof y.Z && i.errors && "Denied by user validation." === i.errors[0]?.message && "ACTION_UPDATE_USER_AVATAR" === i.context?.action && this._isBlueVerifiedEditProfileErrorMessageEnabled ? a({ text: Ue }) : n({ showToast: !0 })(i);
                            r(e.id);
                        }),
                        (this._renderInputHelperText = () => (this.state.isStylizedUnicodeDisplayName ? We : null)),
                        (this._handleChangeDisplayName = (e) => {
                            const { profileSettings: t } = this.state,
                                {
                                    currentTarget: { value: i },
                                } = e,
                                a = we({ text: i });
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
                                { description: r, location: o, name: s, url: l } = this._initialProfileSettings,
                                d = "edit";
                            t !== r && e.scribe({ component: "bio", action: d }), i !== o && e.scribe({ component: "location", action: d }), a !== s && e.scribe({ component: "name", action: d }), n !== l && e.scribe({ component: "url", action: d });
                        });
                    const { persistedProfileSettings: i, viewerUser: a } = e;
                    (this._initialProfileSettings = (a && this._getInitialProfileSettings(a)) || ze), (this._isProfessionalHomeEnabled = this.context.featureSwitches.isTrue("professional_launchpad_m1_enabled")), (this._isExtendedProfileEnabled = this.context.featureSwitches.isTrue("xprofile_editing_enabled") && !P.ZP.isTwitterApp()), (this._isVerifiedPhoneLabelEnabled = this.context.featureSwitches.isTrue("verified_phone_label_enabled")), (this._isBlueVerifiedEditProfileErrorMessageEnabled = this.context.featureSwitches.isTrue("subscriptions_blue_verified_edit_profile_error_message_enabled"));
                    const n = i || this._initialProfileSettings;
                    this.state = { displayNameMaxLength: this.context.featureSwitches.getNumberValue("user_display_name_max_limit", 20), profileSettings: n, showBirthdateConfirmationModal: !1, errors: {}, showAvatarCropper: !1, showBannerCropper: !1, showDiscardConfirmation: !1, showBadgeRemovalWarning: !1, isStylizedUnicodeDisplayName: !1 };
                }
                componentDidMount() {
                    const { fetchUserProfilePhoneState: e, history: t, viewerUser: i } = this.props;
                    if (i) {
                        if (((this._unlockReload = I.Z.acquire()), this._isVerifiedPhoneLabelEnabled)) {
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
                    (0, S.Z)(n, a) || i(a);
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
                            errors: m,
                            profileSettings: { description: f, location: E, name: g, shouldDeleteBanner: b, url: C },
                            showAvatarCropper: S,
                            showBadgeRemovalWarning: P,
                            showBannerCropper: y,
                            showDiscardConfirmation: w,
                        } = this.state,
                        R = r.createElement(s.default, { size: "custom", uri: e.profile_image_url_https }),
                        I = i || (e.profile_banner_url && !b),
                        L = r.createElement(l.Z, { ratio: d.default.theme.aspectRatios.profileBanner }, I ? r.createElement(c.Z, { source: { uri: e.profile_banner_url }, style: je.banner }) : null),
                        D = void 0 !== g && (0, h.Z)(g),
                        U = !!((t && !t.uploader) || (i && !i.uploader)) || !!Object.keys(m).length || D,
                        F = r.createElement(p.ZP, { disabled: U, onPress: this._handleSubmit, size: "small", testID: ie.Z.save, type: "primaryFilled" }, Te);
                    return r.createElement(
                        B.Z,
                        { history: a, onBackClick: this._handleCancel, rightControl: F, title: Re },
                        r.createElement(o.Z, { style: je.container }, r.createElement(M.default, { "aria-label": xe, aspectRatio: 3, currentContent: L, location: T.vC.ProfileBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: I ? this._handleBannerMediaRemove : void 0, rootStyle: je.bannerContainer }), r.createElement(M.default, { "aria-label": Ze, borderRadius: v.A.INFINITE, currentContent: R, location: T.vC.Avatar, mediaItem: t, onChange: this._handleAvatarMediaChange, onFailure: this._handleAvatarMediaFailure, rootStyle: je.avatarContainer }), r.createElement(u.Z, { autoComplete: "off", defaultValue: g, errorText: De, helperText: this._renderInputHelperText(), invalid: D, label: Ae, maxLength: n, name: "displayName", onChange: this._handleChangeDisplayName }), r.createElement(H, { onCancel: this._handleCancelBadgeRemovalWarning, onConfirm: this._handleBlueVerifiedSaveConfirmation, showBadgeRemovalWarning: P }), r.createElement(u.Z, { defaultValue: f, label: Ie, maxLength: 160, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleChangeDescription }), r.createElement(u.Z, { defaultValue: E, label: Le, maxLength: 30, name: "location", onChange: this._handleChangeLocation }), r.createElement(u.Z, { defaultValue: C || "", label: Me, maxLength: 100, name: "url", onChange: this._handleChangeURL }), this._renderProfileBirthdate(), this._renderBirthdateConfirmationModal(), this._isExtendedProfileEnabled ? this._renderEditExtendedProfilesButton() : null, this._renderProfessionalProfilesButton(), this._isVerifiedPhoneLabelEnabled && this.state.profileSettings.user_phone_state?.has_verified_phone ? this._renderEditPhoneStatus() : null),
                        S ? r.createElement(A.Z, { circle: !0, defaultAspectRatio: 1, media: t, onCancel: this._handleAvatarCropCancel, onDone: this._handleAvatarCropDone }) : null,
                        y ? r.createElement(A.Z, { defaultAspectRatio: 3, media: i, onCancel: this._handleBannerCropCancel, onDone: this._handleBannerCropDone }) : null,
                        w ? r.createElement(_.Z, { confirmButtonLabel: Ve.confirmLabel, confirmButtonType: "destructiveFilled", headline: Ve.headline, onCancel: this._handleCancelDiscardSettings, onConfirm: this._handleConfirmDiscardSettings, text: Ve.text }) : null,
                        this.props.__dangerousTestProp && this.state.profileSettings.user_phone_state ? r.createElement("div", { "data-testid": "didFetchPhoneState", style: { display: "none" } }) : null,
                    );
                }
                _getInitialProfileSettings(e) {
                    const { description: t, entities: i } = m.H({ description: e.description, entities: e.entities, withheldDescription: e.withheld_description, withheldEntities: e.withheld_entities });
                    let a = t;
                    if (null !== a) {
                        f.ZP.descriptionTextParts(a, i).forEach((e) => {
                            "url" === e.entityType && (a = a.replace(e.url, e.expandedUrl));
                        });
                    }
                    const n = e.entities.url,
                        r = n?.urls?.[0].expanded_url;
                    return { birthdate: e.birthdate || He, description: a, location: e.location, name: e.name, shouldDeleteBanner: !1, url: r };
                }
                _renderProfileBirthdate() {
                    const {
                            errors: e,
                            profileSettings: { birthdate: t },
                        } = this.state,
                        { viewerUser: i } = this.props;
                    return r.createElement(me, { birthdate: t, errors: e, onCancelEditBirthdate: this._handleResetBirthdate, onChange: this._handleBirthdateChange, onRemoveBirthdate: this._handleRemoveBirthdate, showBirthdateRemoveButton: !(!i || !i.birthdate) });
                }
                _renderBirthdateConfirmationModal() {
                    return this.state.showBirthdateConfirmationModal ? r.createElement(_.Z, { confirmButtonLabel: ke.confirmButtonLabel, headline: ke.headline, onCancel: this._handleBirthdateModalCancel, onConfirm: this._handleBirthdateModalConfirm, text: this._getBirthdateConfirmationModalText() }) : null;
                }
                _getBirthdateConfirmationModalText() {
                    const { day: e, month: t, year: i } = this.state.profileSettings.birthdate;
                    return r.createElement(C().I18NFormatMessage, { $i18n: "e9dec56f" }, r.createElement(w.Z, { birthdate: { day: e, month: t, year: i } }));
                }
                _renderEditPhoneStatus() {
                    return r.createElement(Se, { onChange: this._handlePhoneStatusChange, verifiedPhoneStatus: Boolean(this.state.profileSettings.user_phone_state?.label_display_opt_in) });
                }
                _renderProfessionalProfilesButton() {
                    const { viewerUser: e } = this.props;
                    return e?.professional ? this._renderEditProfessionalProfileButton() : this._renderSwitchToProfessionalButton();
                }
                _renderSwitchToProfessionalButton() {
                    const e = r.createElement(E.ZP, { size: "headline1" }, Oe.switchToProfessionalLabel),
                        t = "editprofile" + (this._isProfessionalHomeEnabled ? "-professionalHomeEnabled" : "");
                    return r.createElement(g.Z, { label: e, link: { pathname: "/i/flow/convert_to_professional", state: { input: { requested_variant: t } }, method: "push" }, onPress: this._handleProfessionalConversionClick, testID: ie.Z.switchToProfessional });
                }
                _renderEditProfessionalProfileButton() {
                    const e = r.createElement(E.ZP, { size: "headline1" }, Oe.editProfessionalProfileLabel);
                    return r.createElement(g.Z, { label: e, link: "/settings/professional_profile", onPress: this._handleProfessionalSettingsClick, testID: ie.Z.editProfessionalProfile });
                }
                _renderEditExtendedProfilesButton() {
                    const { analytics: e, viewerUser: t } = this.props;
                    return t?.screen_name ? r.createElement(oe, { analytics: e, screenName: t?.screen_name }) : null;
                }
                _saveChanges() {
                    const { analytics: e, avatarMedia: t, bannerMedia: i, createLocalApiErrorHandler: a, disableVerifiedPhoneLabel: n, enableVerifiedPhoneLabel: r, removeMediaUpload: o, removeProfileBanner: s, updateProfile: l, updateProfileAvatar: d, updateProfileBanner: c } = this.props;
                    if (t) {
                        const i = t.id;
                        d(i).then(
                            () => {
                                e.scribe({ component: "avatar", action: "edit" }), o(i);
                            },
                            this._handleMediaUpdateFailureFactory(t, Fe),
                        );
                    }
                    i
                        ? c(i.id).then(
                              () => {
                                  e.scribe({ component: "banner", action: "edit" }), o(i.id);
                              },
                              this._handleMediaUpdateFailureFactory(i, Ne),
                          )
                        : this.state.profileSettings.shouldDeleteBanner &&
                          s()
                              .then(() => e.scribe({ component: "banner", action: "remove" }))
                              .catch(a({ showToast: !0 }));
                    const h = this._initialProfileSettings.user_phone_state,
                        p = this.state.profileSettings.user_phone_state?.label_display_opt_in;
                    h?.label_display_opt_in !== p &&
                        (p
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
                            this._scribeEditedFields(), F.Z.refreshHTMLCache(), this._handleDismiss();
                        })
                        .catch(a({ showToast: !0 }));
                }
                _getFormattedState() {
                    const {
                            displayNameMaxLength: e,
                            profileSettings: { birthdate: t, description: i, location: a, name: n, url: r, user_phone_state: o },
                        } = this.state,
                        { day: s, month: l, visibility: d, year: c, year_visibility: h } = t;
                    return { ...(s && l && c ? { birthdate_day: s, birthdate_month: l, birthdate_year: c, birthdate_visibility: d, birthdate_year_visibility: h } : {}), displayNameMaxLength: e, url: r, name: n, description: i, location: a, user_phone_state: o };
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
            Ge.contextType = R.rC;
            const je = d.default.create((e) => ({ avatarContainer: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.medium, borderColor: e.colors.cellBackground, borderStyle: "solid", marginStart: "1rem", marginTop: "-3rem", maxWidth: "8rem", width: "25%" }, banner: { height: "100%" }, bannerContainer: { maxHeight: "200px" }, container: { paddingBottom: e.spaces.space64 }, blueVerifiedCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                $e = J(Ge);
        },
        529048: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = { birthdate: "ProfileBirthdate", cancel: "ProfileBirthdate_Cancel_Button", dayMonthVisibility: "ProfileBirthdate_Day_Month_Visibility", daySelector: "ProfileBirthdate_Day_Selector", edit: "ProfileBirthdate_Edit_Button", editProfessionalProfile: "ProfessionalButton_Edit_Professional_Profile", editExtendedProfile: "ExtendedButton_Edit_Extended_Profile", missingBirthdate: "ProfileBirthdate_Missing_Birthdate", monthSelector: "ProfileBirthdate_Month_Selector", remove: "ProfileBirthdate_Remove_Button", save: "Profile_Save_Button", bio: "Profile_Bio", switchToProfessional: "ProfessionalButton_Switch_To_Professional", yearSelector: "ProfileBirthdate_Year_Selector", yearVisibility: "ProfileBirthdate_Year_Visibility" };
        },
        779610: (e, t, i) => {
            i.d(t, { Z: () => c });
            var a = i(202784),
                n = i(325686),
                r = i(191796),
                o = i(58399),
                s = i(731708),
                l = i(952428),
                d = i(392237);
            const c = (e) => {
                    const { decoration: t, description: i, disabled: c = !1, isActive: p = !1, label: u, link: _, onPress: m, paddingHorizontal: f, renderRightContent: E, role: g = "tab", styleOverride: b, testID: C = "pivot", thumbnail: S, thumbnailSize: P, withoutArrow: y = !1 } = e,
                        B = [h.thumbnailContainer, "medium" === P && h.thumbnailContainerMedium],
                        v = "string" == typeof u ? a.createElement(s.ZP, null, u) : u,
                        w = "object" == typeof _ && _.external && !_.openInSameFrame,
                        R = i ? ("string" == typeof i ? a.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, i) : i) : null,
                        A = a.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? d.default.theme.spaces[f] : d.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return a.createElement(l.Z, { "aria-selected": "tab" === g ? p : null, disabled: c, link: c ? void 0 : _, onPress: m, role: g, style: [h.root, A, c && h.disabled, b], testID: C, withInteractiveStyling: !!_ || !!m }, a.createElement(n.Z, { style: h.contentContainer }, S ? a.createElement(n.Z, { style: B }, S) : null, a.createElement(n.Z, { style: h.content }, v, R), E ? E() : null, (!_ && !m) || c || y ? null : w ? a.createElement(r.default, { style: h.icon }) : a.createElement(o.default, { style: h.icon })), t);
                },
                h = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfile.945502ea.js.map
