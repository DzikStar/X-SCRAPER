"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-5b3c9a00"],
    {
        790174: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(807896),
                a = n(202784),
                i = n(977995),
                o = n(227991),
                r = n(663951),
                l = n(280947);
            const c = "ocfEnterRecaptchaSkipButton";
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleRecaptchaStateChange = (e) => {
                            const { onNavigate: t, subtask: n, subtaskId: s, updateFlow: a } = this.props,
                                { next_link: i } = n;
                            e && (a(s, { link: i.link_id, recaptcha_response: e }), t(i));
                        }),
                        (this._handleSkipButtonClick = () => {
                            const {
                                onNavigate: e,
                                subtask: { skip_link: t },
                                subtaskId: n,
                                updateFlow: s,
                            } = this.props;
                            t && (s(n, { link: t.link_id }), e(t));
                        });
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: n, subtask: d, subtaskInputs: u } = this.props,
                        { primary_text: p, secondary_text: m, skip_link: h } = d;
                    return a.createElement(l.Z, (0, s.Z)({}, n, { footer: a.createElement(o.ZP, { onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: h?.label, secondaryActionTestID: c }), header: a.createElement(r.Z, { onNavigate: t, primaryTextProp: p, secondaryTextProp: m, subtaskInputs: u, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(i.Z, { nextButtonDisabled: !1, onChange: this._handleRecaptchaStateChange, withConsentForm: !1 }), e);
                }
            }
        },
        263470: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var s = n(807896),
                a = n(202784),
                i = n(167630),
                o = n(731708),
                r = n(855488),
                l = n(782642),
                c = n(804027),
                d = n(158272),
                u = n(500002),
                p = n(227991),
                m = n(663951),
                h = n(280947),
                _ = n(975364),
                k = n(305784),
                g = n(153925);
            const b = "ocfEnterTextNextButton",
                y = "ocfEnterTextSkipForNowButton",
                f = "ocfEnterTextTextInput";
            function x(e) {
                switch (e) {
                    case c.RA.Email:
                        return "email";
                    case c.RA.Telephone:
                        return "tel";
                    default:
                        return;
                }
            }
            function I(e) {
                switch (e) {
                    case c.RA.Email:
                        return "email";
                    case c.RA.Number:
                        return "numeric";
                    case c.RA.Telephone:
                        return "tel";
                    default:
                        return "text";
                }
            }
            function v(e) {
                switch (e) {
                    case c.RA.Email:
                        return "email";
                    case c.RA.Password:
                        return "password";
                    case c.RA.Telephone:
                        return "tel";
                    default:
                        return "text";
                }
            }
            const Z = (0, u.ZP)(function ({ errorDialog: e, onNavigate: t, passthroughOcfScreenProps: n, subtask: u, subtaskId: Z, subtaskInputs: C = {}, updateFlow: E }) {
                const w = (0, l.p)(),
                    S = (0, g.OG)(C, { key: "text", subtask_id: Z }, u.default_text),
                    [T, B] = a.useState(S ?? "");
                function F() {
                    E(Z, { link: u.next_link.link_id, text: T }), t(u.next_link);
                }
                return (
                    a.useEffect(() => {
                        u.passkey_challenge &&
                            (0, d.xG)(u.passkey_challenge)
                                .then((e) => {
                                    E(Z, { challenge_response: e, link: u.next_link.link_id }), t(u.next_link);
                                })
                                .catch(() => {
                                    w({ text: d.Kh }), E(Z, { challenge_response: "", link: u.next_link.link_id }), t(u.next_link);
                                });
                    }, [u.passkey_challenge, u.fail_link, w, t, u.next_link, E, Z]),
                    u.passkey_challenge
                        ? (0, d.iW)()
                            ? a.createElement(i.Z, null)
                            : a.createElement(o.ZP, { align: "center" }, d.z_)
                        : a.createElement(
                              h.Z,
                              (0, s.Z)({}, n, {
                                  footer: a.createElement(p.ZP, {
                                      actionDisabled: !u.skip_link && !T,
                                      actionLabel: T || !u.skip_link ? u.next_link?.label : void 0,
                                      actionTestID: b,
                                      onAction: F,
                                      onSecondaryAction: function () {
                                          const e = u.skip_link;
                                          e && (E(Z, { link: e.link_id }), t(e));
                                      },
                                      secondaryActionLabel: T ? void 0 : u.skip_link?.label,
                                      secondaryActionTestID: y,
                                  }),
                                  header: a.createElement(m.Z, { header: u.header, onNavigate: t, primaryTextProp: u.primary_text, secondaryTextProp: u.secondary_text, subtaskInputs: C, withHeaderImage: !0 }),
                                  providePadding: !0,
                              }),
                              a.createElement(r.Z, {
                                  autoCapitalize: u.auto_capitalization_type || "sentences",
                                  autoComplete: u.os_content_type === c.Dk.Username ? u.os_content_type : x(u.keyboard_type),
                                  autoCorrect: u.auto_correction_enabled,
                                  autoFocus: !0,
                                  inputMode: I(u.keyboard_type),
                                  label: u.hint_text ?? "",
                                  maxLength: u.max_length,
                                  multiline: u.multiline,
                                  name: u.os_content_type || c.Dk.Text,
                                  onChange: function (e) {
                                      B(e.target.value);
                                  },
                                  onSubmitEditing: function () {
                                      T && F();
                                  },
                                  positionCursorAtEnd: !0,
                                  spellCheck: u.auto_correction_enabled ? "true" : "false",
                                  style: k.Z.formTextInput,
                                  testID: f,
                                  type: v(u.keyboard_type),
                                  value: T,
                              }),
                              u.detail_text ? a.createElement(_.Z, (0, s.Z)({}, u.detail_text, { color: "gray700", onNavigate: t, subtaskInputs: C })) : null,
                              e,
                          )
                );
            });
        },
        304944: (e, t, n) => {
            n.d(t, { Z: () => w });
            var s = n(807896),
                a = n(202784),
                i = n(855488),
                o = n(392237),
                r = n(111677),
                l = n.n(r),
                c = n(916910),
                d = n(666536),
                u = n(227991),
                p = n(663951),
                m = n(280947),
                h = n(975364),
                _ = n(305784),
                k = n(153925),
                g = n(668214),
                b = n(118823),
                y = n(395042),
                f = n(919022);
            const x = (0, g.Z)()
                    .propsFromState(() => ({ loggedInUser: f.ZP.selectLoggedInUser, navigationContext: b.b, userNameAvailabilityData: y.El }))
                    .adjustStateProps(({ userNameAvailabilityData: e, ...t }) => ({ isUsernameValid: e.valid, validationError: e.desc, ...t }))
                    .propsFromActions(() => ({ fetchUsernameAvailability: y.HR }))
                    .withAnalytics({ section: "enter_username" }),
                I = "ocfEnterUsernameNextButton",
                v = "ocfEnterUsernameSkipButton",
                Z = l().d1f6d336;
            class C extends a.Component {
                constructor(e) {
                    super(e),
                        (this._maybeRenderDetailTexts = () => {
                            const { subtask: e, subtaskInputs: t } = this.props,
                                { currentDetailTextIndex: n } = this.state;
                            return e.detail_texts && e.detail_texts.length ? a.createElement(h.Z, (0, s.Z)({}, e.detail_texts[n], { color: "link", onNavigate: this._handleDetailTextClick, style: E.detailLink, subtaskInputs: t })) : void 0;
                        }),
                        (this._handleDetailTextClick = (e) => {
                            const { analytics: t, onNavigate: n } = this.props;
                            "show_more_usernames" === e.link_id ? (this._updateCurrentDetailTextIndex(), t.scribe({ element: "show_more", action: "click" })) : (this._selectUsername(e.link_id, this._fetchUsernameStatus), t.scribe({ element: "suggestion", action: "click" })), n(e);
                        }),
                        (this._handleUsernameUpdated = (e) => {
                            const t = e.target.value;
                            this._selectUsername(t, this._fetchUsernameStatusDebounced);
                        }),
                        (this._selectUsername = (e, t) => {
                            this.setState({ username: e }), t(e);
                        }),
                        (this._handleNextButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: n, updateFlow: s } = this.props,
                                { username: a } = this.state;
                            t.next_link && (s(n, { username: a, link: t.next_link.link_id }), e(t.next_link));
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: n, updateFlow: s } = this.props,
                                a = t.skip_link;
                            a && (s(n, { link: a.link_id }), e(a));
                        }),
                        (this._fetchUsernameStatus = (e) => {
                            const { analytics: t, fetchUsernameAvailability: n, loggedInUser: s } = this.props;
                            s &&
                                n({ email: s.email && s.email[0] && s.email[0].address, full_name: s.name, suggest: !1, username: e }).then((e) => {
                                    e && !e.valid && "taken" === e.reason && t.scribe({ element: "username", action: "taken" });
                                });
                        }),
                        (this._updateCurrentDetailTextIndex = () => {
                            this.setState({ currentDetailTextIndex: this.state.currentDetailTextIndex + 1 });
                        });
                    const { loggedInUser: t, subtaskId: n, subtaskInputs: i } = e,
                        o = (0, k.OG)(i, { key: "username", subtask_id: n }, "") || (t ? t.screen_name : "");
                    (this.state = { currentDetailTextIndex: 0, username: o }), (this._fetchUsernameStatusDebounced = (0, d.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { action: e, text: t } = this.props.navigationContext || {};
                    "set_text" === e && t && this._selectUsername(t, this._fetchUsernameStatus);
                }
                render() {
                    const { isUsernameValid: e, loggedInUser: t, onNavigate: n, passthroughOcfScreenProps: o, subtask: r, subtaskInputs: l, validationError: d } = this.props,
                        { next_link: h, primary_text: k, secondary_text: g, skip_link: b } = r,
                        { username: y } = this.state,
                        f = (t && t.screen_name && t.screen_name.toLowerCase()) === (y && y.toLowerCase());
                    return a.createElement(m.Z, (0, s.Z)({}, o, { footer: a.createElement(u.ZP, { actionDisabled: !e, actionLabel: y && !f ? h?.label : void 0, actionTestID: I, onAction: this._handleNextButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: !y || f ? b?.label : void 0, secondaryActionTestID: v }), header: a.createElement(p.Z, { onNavigate: n, primaryTextProp: k, secondaryTextProp: g, subtaskInputs: l, withHeaderImage: !0 }), providePadding: !0 }), a.createElement(i.Z, { Icon: c.default, autoComplete: "off", autoCorrect: !1, autoFocus: !0, errorText: d, invalid: !!y && !f && !e, label: r.hint || Z, name: "username", onChange: this._handleUsernameUpdated, showValidationIcon: !!y, spellCheck: "false", style: _.Z.formTextInput, value: y }), this._maybeRenderDetailTexts(), this.props.errorDialog);
                }
            }
            const E = o.default.create((e) => ({ detailLink: { marginTop: e.spaces.space16 } })),
                w = x(C);
        },
        593698: (e, t, n) => {
            n.d(t, { Z: () => o, r: () => i });
            var s = n(202784),
                a = n(516951);
            const i = s.createContext({ settings: {}, subtask: { subtask_id: "" }, subtaskId: "", subtaskInputs: {}, callbacks: {}, registerCallback: a.Z, removeCallback: a.Z, setSettings: a.Z, updateFlow: a.Z, onNavigate: a.Z });
            function o() {
                return s.useContext(i);
            }
        },
        990401: (e, t, n) => {
            n.d(t, { CU: () => M, kU: () => z, ZG: () => s.Z, yu: () => U });
            var s = n(593698),
                a = n(202784),
                i = n(595088),
                o = n(807896),
                r = n(779610),
                l = n(975364);
            const c = {
                render: (e) => {
                    const { onNavigate: t, subtaskId: n, subtaskInputs: i, updateFlow: c } = (0, s.Z)(),
                        { value_data: d, value_identifier: u } = e,
                        { action_data: p } = d,
                        { link: m, primary_text: h, secondary_text: _ } = p,
                        k = z(u, () => {
                            c(n, { link: m }), t && m?.link_id && t(m);
                        }),
                        g = a.useMemo(() => a.createElement(l.Z, (0, o.Z)({}, h, { onNavigate: t, size: "headline2", subtaskInputs: i })), [h, t, i]),
                        b = a.useMemo(() => a.createElement(l.Z, (0, o.Z)({}, _, { color: "gray700", onNavigate: t, size: "subtext2", subtaskInputs: i })), [_, t, i]),
                        y = a.useMemo(() => (void 0 !== m ? (m.url ?? "#") : void 0), [m]);
                    return p ? a.createElement(r.Z, { description: b, label: g, link: y, onPress: k, paddingHorizontal: "space0", role: void 0 === m ? null : "link" }) : null;
                },
            };
            var d = n(96083);
            const u = {
                render: function (e) {
                    const { value_data: t, value_identifier: n, value_type: i } = e,
                        { boolean_data: r } = t,
                        { primary_text: c, secondary_text: u } = r,
                        { onNavigate: p, subtaskInputs: m } = (0, s.Z)(),
                        [h, _] = U(n, i, r?.initial_value ?? !1),
                        k = c ? a.createElement(l.Z, (0, o.Z)({}, c, { onNavigate: p, subtaskInputs: m })) : null,
                        g = u ? a.createElement(l.Z, (0, o.Z)({}, u, { onNavigate: p, subtaskInputs: m })) : null;
                    return a.createElement(d.Z, { checked: Boolean(h), helpText: g, label: k, onChange: _ });
                },
            };
            var p = n(154003),
                m = n(305784),
                h = n(153925);
            const _ = {
                render: (e) => {
                    const { onNavigate: t, subtaskId: n, updateFlow: i } = (0, s.Z)(),
                        { value_data: o, value_identifier: r } = e,
                        { button_data: l } = o,
                        { button_appearance: c, button_label: d, link: u } = l,
                        _ = z(r, () => {
                            i(n, { link: u }), t && u?.link_id && t(u);
                        });
                    return l ? a.createElement(p.ZP, { onPress: _, size: c.preferred_size ? (0, h.Yr)(c.preferred_size) : "medium", style: m.Z.button, type: c.style ? (0, h.$1)(c.style) : "brandFilled" }, d.text) : null;
                },
            };
            const k = class {
                constructor(e) {
                    this.registry = e;
                }
                hasConfig(e) {
                    return e in this.registry;
                }
                getConfig(e) {
                    return this.hasConfig(e) ? this.registry[e] : null;
                }
            };
            var g = n(325686),
                b = n(386802),
                y = n(439592),
                f = n(392237),
                x = n(530525),
                I = n(804027);
            const v = f.default.create((e) => ({ fullBleedTop: { marginHorizontal: `-${e.spaces.space32}`, height: "initial", width: "initial", marginBottom: e.spaces.space20 }, fullWidth: { marginHorizontal: 0, height: "initial", width: "initial", marginBottom: e.spaces.space20 }, modalFullBleedTop: { marginHorizontal: `-${e.spaces.space80}`, height: "initial", width: "initial", marginBottom: e.spaces.space20 } })),
                Z = {
                    render: (e) => {
                        const { value_data: t } = e,
                            { image_data: n } = t,
                            { isModal: s } = a.useContext(b.Z),
                            { image: i, image_type: o } = n,
                            { image_info: r } = i,
                            { alt_text: l, height: c, width: d } = r,
                            u = y.Z.exact(d / c),
                            p = a.useMemo(() => {
                                let e, t;
                                switch (o) {
                                    case I.__.Icon:
                                        return (e = 10 * f.default.theme.lineHeightsPx.body), (t = (e * d) / c), { marginHorizontal: "auto", height: e, width: t };
                                    case I.__.FullBleedTop:
                                        return s ? v.modalFullBleedTop : v.fullBleedTop;
                                    default:
                                        return v.fullWidth;
                                }
                            }, [s, o, c, d]);
                        return a.createElement(g.Z, { style: p }, a.createElement(x.Z, { "aria-label": l || "", aspectMode: u, image: r }));
                    },
                };
            var C = n(992942),
                E = n(593866),
                w = n(497625);
            const S = f.default.create((e) => ({ infoItemContainerStyle: { paddingHorizontal: 0 }, image: { display: "flex", flexDirection: "row" }, text: { display: "flex", flexDirection: "column" }, icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text }, decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 }, imageDecorationContainer: { marginEnd: e.spaces.space20 } })),
                T = {
                    render: (e) => {
                        const { value_data: t } = e,
                            { info_item_data: n } = t,
                            { primary_text: s, secondary_text: i } = n,
                            { icon: o, image: r } = n,
                            l = a.useMemo(() => [S.icon, S.decorationContainer], []);
                        let c, d;
                        if (r) {
                            const e = (0, h.cR)(r);
                            c = a.createElement(C.Z, { "aria-label": "ocf-info-item-image", source: e, style: S.imageDecorationContainer });
                        }
                        o && (d = a.createElement(w.Z, { icon: o.icon, style: l }));
                        const u = o ? d : r ? c : null,
                            p = o ? "ocf-info-item-with-icon" : r ? "ocf-info-item-with-image" : "ocf-info-item",
                            m = a.useMemo(() => [{ label: s.text, description: i?.text, decoration: u }], [u, s, i]);
                        return a.createElement(g.Z, { style: r ? S.image : null }, a.createElement(E.Z, { "aria-label": p, containerStyle: S.infoItemContainerStyle, items: m }));
                    },
                };
            var B = n(449850);
            const F = f.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } })),
                N = {
                    render: function (e) {
                        const { onNavigate: t, subtaskInputs: n } = (0, s.Z)();
                        if (void 0 === e.value_data?.static_text_data?.primary_text) return null;
                        const { static_text_data: i } = e.value_data,
                            { primary_text: r, style: c } = i;
                        return a.createElement(
                            l.Z,
                            (0, o.Z)(
                                {},
                                r,
                                { onNavigate: t, subtaskInputs: n },
                                (function (e) {
                                    switch (e) {
                                        case B.lq.headerTitle:
                                            return { size: "title2", weight: "bold", style: F.marginBottom };
                                        case B.lq.headerSubtitle:
                                            return { color: "gray700", style: F.marginBottom };
                                        case B.lq.sectionTitle:
                                            return { size: "headline1", weight: "bold", style: F.marginBottom };
                                        case B.lq.detailText:
                                            return { size: "subtext2", color: "gray700", style: F.marginBottom };
                                        default:
                                            return { size: "body", style: F.marginBottom };
                                    }
                                })(c),
                            ),
                        );
                    },
                };
            var P = n(995145);
            const A = new k({
                    action: c,
                    static_text: N,
                    boolean: u,
                    button: _,
                    tweet: {
                        render: (e) => {
                            const { value_data: t } = e,
                                { tweet_data: n } = t;
                            return a.createElement(P.Z, { tweet: n.tweet });
                        },
                    },
                    info_item: T,
                    image: Z,
                }),
                D = (e) =>
                    (0, i.Z)(e).map((e) => {
                        const [t, { type: n, value: s }] = e;
                        return { key: t, response_data: { [n]: { result: s } } };
                    });
            function M(e) {
                const { children: t, onNavigate: n, subtaskId: i, subtaskInputs: o, updateFlow: r } = e,
                    [l, c] = a.useState({}),
                    [d, u] = a.useState({});
                a.useLayoutEffect(() => {
                    c({}), u({});
                }, [i]);
                const p = a.useCallback(
                        (e, t = {}, n = {}) => {
                            r(e, { ...t, component_responses: D(l) }, n);
                        },
                        [r, l],
                    ),
                    m = a.useCallback((e, t) => {
                        u((n) => ({ ...n, [e]: t }));
                    }, []),
                    h = a.useCallback((e) => {
                        u(({ [e]: t, ...n }) => ({ ...n }));
                    }, []),
                    _ = a.useMemo(() => ({ componentRegistry: A, settings: l, subtaskId: i, callbacks: d, registerCallback: m, removeCallback: h, setSettings: c, subtaskInputs: o, updateFlow: p, onNavigate: n }), [l, i, o, d, m, h, p, n]);
                return a.createElement(s.r.Provider, { value: _ }, t);
            }
            function z(e, t) {
                const { callbacks: n } = a.useContext(s.r),
                    i = n[e];
                return a.useCallback(
                    (...e) => {
                        Promise.resolve(i?.() ?? !1)
                            .then((n) => {
                                n || t(...e);
                            })
                            .catch(() => t(...e));
                    },
                    [i, t],
                );
            }
            function U(e, t, n) {
                const { setSettings: i, settings: o } = a.useContext(s.r),
                    r = a.useCallback((n) => i((s) => ({ ...s, [e]: { type: t, value: n } })), [i, e, t]);
                return (
                    a.useEffect(() => {
                        r(n);
                    }, [n, r]),
                    [o[e]?.value, r]
                );
            }
        },
        802745: (e, t, n) => {
            n.d(t, { Z: () => v });
            var s = n(202784),
                a = n(325686),
                i = n(386802),
                o = n(392237),
                r = n(804027),
                l = n(449850),
                c = n(833853),
                d = n(990401);
            const u = function (e) {
                const { componentRegistry: t } = (0, d.ZG)(),
                    { components: n, style: i } = e;
                return void 0 === n || n.length < 1
                    ? null
                    : s.createElement(
                          a.Z,
                          { style: i },
                          n.map((e, n) => {
                              const a = t?.getConfig(e.value_type);
                              return a ? s.createElement(s.Fragment, { key: n }, a.render(e)) : null;
                          }),
                      );
            };
            var p = n(593698),
                m = n(370006),
                h = n(786998),
                _ = n(111677),
                k = n.n(_),
                g = n(520913);
            const b = k().c39b0e24;
            const y = o.default.create((e) => ({ iconContainer: { alignItems: "center", alignSelf: "stretch", display: "flex", flexGrow: 1, justifyContent: "center", minWidth: e.spaces.space32 }, icon: { color: e.colors.brandColor, flexGrow: 1, height: "1.75rem" } })),
                f = function (e) {
                    const { backButtonType: t, componentCollection: n, hideBackButton: i, hideLogo: o, onBackPress: l } = e,
                        { center_navbar_components: c, header_components: d, left_navbar_components: p, right_navbar_components: _ } = n,
                        k = s.useMemo(() => {
                            const e = d?.[0];
                            return "image" === e?.value_type && e?.value_data.image_data.image_type === r.__.FullBleedTop;
                        }, [d]),
                        f = s.useMemo(() => i || !l || (void 0 !== p && p.length > 0), [i, p, l]),
                        x = s.useMemo(() => (p && p.length > 0 ? s.createElement(u, { components: p }) : f || !l ? void 0 : s.createElement(m.Z, { backButtonType: t, onClick: l, onMedia: k })), [p, f, l, t, k]),
                        I = s.useMemo(() => (c && c.length > 0 ? s.createElement(u, { components: c }) : null), [c]),
                        v = s.useMemo(() => s.createElement(u, { components: _ }), [_]),
                        Z = s.useMemo(() => {
                            if (!o && !k && null === I) return s.createElement(a.Z, { style: y.iconContainer }, s.createElement(g.default, { "aria-label": b, style: y.icon }));
                        }, [o, k, I]);
                    return s.createElement(h.Z, { centeredLogo: Z, leftControl: x, middleControl: I, position: k ? "absolute" : void 0, rightControl: v, withBackground: !1 });
                };
            const x = o.default.create((e) => ({ padding: { paddingHorizontal: e.spaces.space80, paddingBottom: e.spaces.space20 }, paddingCompact: { paddingHorizontal: e.spaces.space32, paddingBottom: e.spaces.space20 }, marginTop: { marginTop: e.spaces.space20 }, container: { display: "flex", flexGrow: 2, flexShrink: 1, flexBasis: "100%", maxWidth: "600px" }, contentContainer: { flexGrow: 1, display: "flex" }, contentContainerMargin: { marginVertical: e.spaces.space16 }, alignTop: { justifyContent: "flex-start" }, alignCenter: { justifyContent: "center" }, alignBottom: { justifyContent: "flex-end" }, shadowTop: { boxShadow: e.boxShadows.xSmall }, root: { flexGrow: 1 } })),
                I = { [l.Zk.TOP]: x.alignTop, [l.Zk.CENTER]: x.alignCenter, [l.Zk.BOTTOM]: x.alignBottom },
                v = function (e) {
                    const { isModal: t } = s.useContext(i.Z),
                        { registerCallback: n, removeCallback: o } = s.useContext(p.r),
                        { children: d, componentCollection: m, onPrimaryAction: h, onSecondaryAction: _ } = e,
                        { backButtonType: k, hideAppBar: g, hideBackButton: b, hideLogo: y, onBackPress: v } = e,
                        {
                            hasHiddenContent: Z,
                            onScroll: C,
                            onViewportSet: E,
                        } = (() => {
                            const [e, t] = s.useState(),
                                [n, a] = s.useState(!1),
                                i = s.useCallback(
                                    (e) => {
                                        if (e instanceof HTMLElement) {
                                            const t = Math.abs(e.scrollHeight - e.scrollTop - e.clientHeight) < 2;
                                            a(!t);
                                        }
                                    },
                                    [a],
                                ),
                                o = s.useCallback((e) => i(e.currentTarget), [i]);
                            return (
                                s.useEffect(
                                    () => (
                                        i(e?.getViewport()),
                                        e?.addRectChangeListener(() => {
                                            const t = e?.getViewport();
                                            i(t);
                                        })
                                    ),
                                    [e, i],
                                ),
                                { hasHiddenContent: n, onViewportSet: t, onScroll: o }
                            );
                        })(),
                        { content_vertical_alignment: w = l.Zk.TOP } = m,
                        S = t ? x.padding : x.paddingCompact,
                        T = s.useMemo(() => {
                            const e = m.header_components?.[0],
                                t = "image" === e?.value_type && e?.value_data.image_data.image_type === r.__.FullBleedTop;
                            return [x.container, S, !t && x.marginTop];
                        }, [m, S]),
                        B = d || m.content_header_components || m.content_footer_components,
                        F = s.useMemo(() => [x.contentContainer, I[w], !!B && x.contentContainerMargin], [B, w]),
                        N = s.useMemo(() => [S, Z && x.shadowTop], [S, Z]),
                        P = s.useMemo(() => s.createElement(u, { components: m.pinned_footer_components, style: N }), [N, m.pinned_footer_components]);
                    return (
                        s.useEffect(
                            () => (
                                m.primary_next_identifier && h && n(m.primary_next_identifier, h),
                                m.primary_skip_identifier && _ && n(m.primary_skip_identifier, _),
                                () => {
                                    m.primary_next_identifier && o(m.primary_next_identifier), m.primary_skip_identifier && o(m.primary_skip_identifier);
                                }
                            ),
                            [n, o, h, _, m],
                        ),
                        s.createElement(a.Z, { style: x.root }, g ? void 0 : s.createElement(f, { backButtonType: k, componentCollection: m, hideBackButton: b, hideLogo: y, onBackPress: v }), s.createElement(c.l, { control: P, onScroll: C, onViewportSet: E }, s.createElement(a.Z, { style: T }, s.createElement(u, { components: m.header_components }), s.createElement(a.Z, { style: F }, s.createElement(u, { components: m.content_header_components }), d, s.createElement(u, { components: m.content_footer_components })), s.createElement(u, { components: m.footer_components }))))
                    );
                };
        },
        394526: (e, t, n) => {
            n.d(t, { b: () => i });
            n(136728);
            var s = n(449850),
                a = n(876401);
            function i(e) {
                const { header_image: t, primary_text: n, secondary_text: i } = e,
                    o = [];
                return t && o.push((0, a.s1)("header-image", t.image, t.image_type)), o.push((0, a.$A)("heading", n.text, s.lq.headerTitle)), i && o.push((0, a.$A)("subheading", i.text, s.lq.headerSubtitle)), o;
            }
        },
        876401: (e, t, n) => {
            n.d(t, { $A: () => o, gu: () => r, s1: () => i });
            var s = n(804027),
                a = n(449850);
            const i = (e, t, n = s.__.FullWidth) => ({ value_identifier: e, value_type: "image", value_data: { image_data: { image: t, image_type: n } } }),
                o = (e, t, n = a.lq.headerTitle) => ({ value_identifier: e, value_type: "static_text", value_data: { static_text_data: { primary_text: { text: t }, style: n } } }),
                r = (e, t) => ({ value_identifier: e, value_type: "button", value_data: { button_data: t } });
        },
        324688: (e, t, n) => {
            n.d(t, { m: () => s });
            const s = n(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 });
        },
        317891: (e, t, n) => {
            n.d(t, { Z: () => L });
            var s = n(807896),
                a = n(202784),
                i = n(325686),
                o = n(731708),
                r = n(891198),
                l = n(154003),
                c = n(537392),
                d = n(392237),
                u = n(912021),
                p = n(370751),
                m = n(516951),
                h = n(218093),
                _ = n(56851),
                k = n(810641),
                g = n(163889),
                b = n(343018),
                y = n(293115),
                f = n(87063),
                x = n(847933),
                I = n(147735),
                v = n(383675),
                Z = n(611423),
                C = n(663951),
                E = n(280947),
                w = n(975364),
                S = n(71620),
                T = n(668214),
                B = n(735313);
            const F = (e) => (t) => t?.selectInitialFetchStatus(e),
                N = (0, T.Z)()
                    .propsFromState(() => ({ getModuleFetchStatus: F }))
                    .propsFromActions(() => ({ clearTimelineCache: B.Z, createLocalApiErrorHandler: (0, S.zr)("OCF_GENERIC_URT") }))
                    .withAnalytics();
            var P = n(929482),
                A = n(335632);
            var D = n(324688);
            const M = (e) => {
                    switch (e) {
                        case x.Z.NOT_FOUND:
                            return a.createElement(_.Z, null);
                        case x.Z.NOT_ALLOWED:
                            return a.createElement(h.Z, null);
                        default:
                            return (0, g.ZP)(`Unhandled timeline unavailable reason in Ocf GenericURT screen: ${e}`), null;
                    }
                },
                z = (0, u.Z)((e) => ((e) => ({ ...(0, A.G)({}), ...(0, P.Z)({ isWide: e }) }))(e));
            class U extends a.Component {
                constructor(e) {
                    super(e),
                        (this._isNextButtonEnabled = () => {
                            const { topicsFollowed: e } = this.state,
                                { subtask: t } = this.props,
                                { navigation_link_options: { max_enable_count: n, min_enable_count: s } = {} } = t,
                                a = t.navigation_link_options?.count_subtask_data_reference?.key === b.n.TopicFollowCount;
                            return this._getModuleFetchStatus() === f.Z.FAILED || (s && n ? a && e.size >= s && e.size <= n : s && !n ? a && e.size >= s : !s && n ? a && e.size <= n : (!s && !n) || void 0);
                        }),
                        (this._renderThresholdDetailText = (e, t) => {
                            const { onNavigate: n, subtaskInputs: l } = this.props;
                            let c,
                                d = -1;
                            for (let n = 0; n < e?.length; n++) {
                                const { text: s, threshold: a } = e[n];
                                a > d && a <= t && ((d = a), (c = s));
                            }
                            const u = this._isNextButtonEnabled() ? "gray1100" : "gray700",
                                p = this._isNextButtonEnabled() ? "bold" : "normal";
                            return this.state.initialized && c ? a.createElement(i.Z, { style: R.detailText }, a.createElement(o.ZP, { color: u, size: "subtext2", weight: p }, this._isNextButtonEnabled() ? null : r.ZP.getFormattedCount(t), a.createElement(w.Z, (0, s.Z)({}, c, { color: u, onNavigate: n, subtaskInputs: l, weight: p })))) : a.createElement(i.Z, null);
                        }),
                        (this._getModule = (0, u.Z)((e) => {
                            const { graphql_timeline_query: t, timeline_source: n } = this.props.subtask;
                            return t ? (0, v.R)(t.timeline_key) : (0, Z.Z)({ urtUrl: { url: n || "", urlType: I.Z.UrtEndpoint } });
                        })),
                        (this._getModuleFetchStatus = () => {
                            const { getModuleFetchStatus: e, subtaskId: t } = this.props;
                            return e(this._getModule(t));
                        }),
                        (this._resetState = () => {
                            this.setState({ topicsFollowed: new Set(), initialized: !1 });
                        }),
                        (this._handleOnTopicInitialize = (e, t) => {
                            this.setState((n) => {
                                const s = (0, p.Z)(Array.from(n.topicsFollowed));
                                return t ? s.add(e) : s.delete(e), { initialized: !0, topicsFollowed: s };
                            });
                        }),
                        (this._handleOnTopicFollow = (e) => {
                            const t = (0, p.Z)(Array.from(this.state.topicsFollowed));
                            t.add(e), this.setState({ topicsFollowed: t });
                        }),
                        (this._handleOnTopicUnfollow = (e) => {
                            const t = (0, p.Z)(Array.from(this.state.topicsFollowed));
                            t.delete(e), this.setState({ topicsFollowed: t });
                        }),
                        (this._handleNextButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: n, updateFlow: s } = this.props;
                            s(n, { link: t.next_link.link_id }), e(t.next_link);
                        }),
                        (this._clearTimelineCache = () => {
                            const {
                                clearTimelineCache: e,
                                createLocalApiErrorHandler: t,
                                subtask: { graphql_timeline_query: n },
                            } = this.props;
                            n && e((0, v.R)(n.timeline_key)).catch(t());
                        }),
                        (this.state = { topicsFollowed: new Set(), initialized: !1 });
                }
                componentDidMount() {
                    const { analytics: e, subtask: t } = this.props;
                    e.scribe({ ...t.scribe_config, action: "impression" });
                }
                componentDidUpdate(e) {
                    const { analytics: t, subtask: n, subtaskId: s } = this.props;
                    e.subtaskId !== s && (this._resetState(), this._clearTimelineCache(), t.scribe({ ...n.scribe_config, action: "impression" }));
                }
                render() {
                    const { errorDialog: e, onNavigate: t, passthroughOcfScreenProps: n, subtask: o, subtaskId: r, subtaskInputs: u } = this.props,
                        { topicsFollowed: p } = this.state,
                        { header: h, detail_rich_text_options: { label_conditional_text: _ } = {} } = o,
                        g = o.navigation_link_options?.count_subtask_data_reference?.key === b.n.TopicFollowCount,
                        x = a.createElement(l.ZP, { disabled: !this._isNextButtonEnabled(), onPress: this._handleNextButtonClick, size: "xLarge", type: "primaryFilled" }, o.navigation_link_options?.label_conditional_text || o.next_link.label),
                        I = o.detail_rich_text_options?.count_subtask_data_reference?.key === b.n.TopicFollowCount && this._getModuleFetchStatus() !== f.Z.FAILED && _ ? a.createElement(i.Z, { style: R.spaceBetween }, this._renderThresholdDetailText(_, p.size), x) : x,
                        v = a.createElement(
                            E.Z,
                            (0, s.Z)({}, n, { footer: a.createElement(i.Z, { style: R.footer }, I), header: a.createElement(C.Z, { header: h, onNavigate: t, subtaskInputs: u, withHeaderImage: !0 }), providePadding: !0 }),
                            a.createElement(
                                i.Z,
                                null,
                                o.graphql_timeline_query || o.timeline_source
                                    ? a.createElement(c.ZP, null, ({ containerWidth: e }) => {
                                          const t = e >= d.default.theme.breakpoints.small;
                                          return a.createElement(D.m.Provider, { value: { onInitialize: g ? this._handleOnTopicInitialize : m.Z, onFollow: g ? this._handleOnTopicFollow : m.Z, onUnfollow: g ? this._handleOnTopicUnfollow : m.Z } }, a.createElement(k.Z, { entryConfiguration: z(t), module: this._getModule(r), renderUnavailable: M, title: "", withoutHeadroom: !0 }));
                                      })
                                    : null,
                            ),
                            e,
                        );
                    return o.scribe_config ? a.createElement(y.nO, { namespace: o.scribe_config }, v) : v;
                }
            }
            const R = d.default.create((e) => ({ detailText: { justifyContent: "center" }, spaceBetween: { flexDirection: "row", justifyContent: "space-between" }, footer: { marginVertical: e.spaces.space24 } })),
                L = N(U);
        },
        311314: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(202784),
                a = n(516951);
            class i extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._executeSubtaskAction = () => {
                            const { navigationLink: e, onError: t, onNavigate: n, subtaskAction: s } = this.props;
                            try {
                                s()
                                    .then(() => n(e, !0))
                                    .catch(t);
                            } catch (e) {
                                t(e);
                            }
                        });
                }
                componentDidMount() {
                    this._executeSubtaskAction();
                }
                componentDidUpdate(e) {
                    const { subtaskId: t } = this.props;
                    t !== e.subtaskId && this._executeSubtaskAction();
                }
                render() {
                    return null;
                }
            }
            i.defaultProps = { onError: a.Z };
        },
        858729: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(202784),
                a = n(311314);
            const i = (e) => {
                const { addToast: t, onNavigate: n, subtask: i, subtaskId: o } = e || {};
                return s.createElement(a.Z, {
                    navigationLink: i.next_link,
                    onNavigate: n,
                    subtaskAction: () =>
                        new Promise((e, n) => {
                            e(
                                (() => {
                                    if (i?.message) {
                                        const {
                                            message: { text: e },
                                        } = i;
                                        t({ text: e });
                                    }
                                })(),
                            );
                        }),
                    subtaskId: o,
                });
            };
        },
        832517: (e, t, n) => {
            n.d(t, { Z: () => B });
            var s = n(807896),
                a = (n(136728), n(202784)),
                i = n(325686),
                o = n(731708),
                r = n(973014),
                l = n(392237),
                c = n(370751),
                d = n(597496),
                u = n(339110),
                p = n(227991),
                m = n(663951),
                h = n(280947),
                _ = n(24949),
                k = n(668214),
                g = n(118823),
                b = n(153925);
            const y = "selected_custom_interests",
                f = "selected_interest_ids",
                x = (e, t) => t.subtaskId,
                I = () => (0, _.P1)(g.$B, x, (e, t) => ((0, b.OG)(e, { key: y, subtask_id: t }, []) || []).map((e) => ({ topic: e.custom_interest, ttt_token: e.ttt_token }))),
                v = (e, t) => {
                    const n = (0, g.$B)(e);
                    return (0, b.OG)(n, { key: f, subtask_id: t.subtaskId }, []) || void 0;
                },
                Z = (0, k.Z)().propsFromState(() => ({ initialCustomInterests: I(), initialCustomInterestIds: (0, _.P1)(I(), (e) => e.map((e) => e.topic)), initialSelectedInterestIds: v })),
                C = "ocfInterestPickerNextLink",
                E = "ocfInterestPickerSkipLink",
                w = [u.my.Topics];
            class S extends a.Component {
                constructor(e) {
                    super(e),
                        (this._maybeRenderCustomInterests = () => {
                            const { subtask: e } = this.props,
                                { custom_interests_header: t } = e,
                                { customInterests: n, shouldRenderCustomInterests: s } = this.state;
                            if (s)
                                return a.createElement(
                                    i.Z,
                                    null,
                                    a.createElement(
                                        i.Z,
                                        { style: T.group, testID: "custom" },
                                        a.createElement(o.ZP, { size: "headline1", style: T.groupHeader, weight: "bold" }, t),
                                        a.createElement(
                                            i.Z,
                                            { style: T.pillsContainer },
                                            n.map((e) => this._renderCustomInterest(e.topic)),
                                        ),
                                    ),
                                );
                        }),
                        (this._renderGroup = (e) => {
                            let t;
                            if (e.show_more) {
                                const n = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0);
                                t = e.items.slice(0, n);
                            } else t = e.items;
                            return a.createElement(i.Z, { key: `group_${e.header}`, style: T.group, testID: "group" }, a.createElement(o.ZP, { size: "headline1", style: T.groupHeader, weight: "bold" }, e.header), a.createElement(i.Z, { style: T.pillsContainer }, t.map(this._renderSelectionPill), this._maybeRenderShowMoreButton(e)));
                        }),
                        (this._maybeRenderShowMoreButton = (e) => {
                            const t = e.show_more;
                            return t && e.items.length > t.initial_to_show && !e.expanded ? a.createElement(r.Z, { compact: !0, key: `showMore_${e.header}`, mode: "expand", onClick: this._handleShowMore(e), style: T.selectionPillStyles, text: t.text }) : null;
                        }),
                        (this._renderCustomInterest = (e) => {
                            const { selectedCustomInterestIds: t } = this.state;
                            return a.createElement(r.Z, { compact: !0, key: `selectionPill_${e}`, onClick: this._handleToggleCustomInterest(e), selected: t.has(e), style: T.selectionPillStyles, text: e });
                        }),
                        (this._renderSelectionPill = (e) => {
                            const t = this.state.selectedInterestIds.has(e.id),
                                n = this._handleToggleInterest(e.id, t);
                            return a.createElement(r.Z, { compact: !0, key: `selectionPill_${e.id}`, onClick: n, selected: t, style: T.selectionPillStyles, text: e.name });
                        }),
                        (this._shouldShowSkipInstead = () => {
                            const { selectedCustomInterestIds: e, selectedInterestIds: t } = this.state,
                                { subtask: n } = this.props;
                            return n.skip_link && 0 === t.size && 0 === e.size;
                        }),
                        (this._handleSuggestionSelected = (e) => {
                            const { customInterestIds: t, selectedCustomInterestIds: n } = this.state;
                            if (e.type !== u.El.Topic && e.type !== u.El.Hashtag) return;
                            const s = e.data.topic,
                                a = { topic: s, ttt_token: void 0 };
                            t.has(s) || this.setState({ customInterests: this.state.customInterests.concat([a]), customInterestIds: (0, c.Z)([...t]).add(s), selectedCustomInterestIds: (0, c.Z)([...n]).add(s), shouldRenderCustomInterests: !0 });
                        }),
                        (this._handleShowMore = (e) => () => {
                            const t = this.state.groups,
                                n = t.find((t) => t.header === e.header);
                            n && (n.expanded = !0), this.setState({ groups: t });
                        }),
                        (this._handleToggleCustomInterest = (e) => () => {
                            const t = (0, c.Z)([...this.state.selectedCustomInterestIds]);
                            t.has(e) ? (t.delete(e), this.setState({ selectedCustomInterestIds: t })) : this.setState({ selectedCustomInterestIds: t.add(e) });
                        }),
                        (this._handleToggleInterest = (e, t) => () => {
                            const n = (0, c.Z)([...this.state.selectedInterestIds]);
                            t ? (n.delete(e), this.setState({ selectedInterestIds: n })) : this.setState({ selectedInterestIds: n.add(e) });
                        }),
                        (this._handleNextButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: n, updateFlow: s } = this.props,
                                { customInterests: a, selectedCustomInterestIds: i } = this.state,
                                o = a.reduce((e, t) => (i.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e), []);
                            s(n, { link: t.next_link.link_id, selected_interest_ids: Array.from(this.state.selectedInterestIds), selected_custom_interests: o }), e(t.next_link);
                        }),
                        (this._handleSkipButtonClick = () => {
                            const { onNavigate: e, subtask: t, subtaskId: n, updateFlow: s } = this.props;
                            t.skip_link && s(n, { link: t.skip_link.link_id }), t.skip_link && e(t.skip_link);
                        });
                    const { initialCustomInterestIds: t, initialCustomInterests: n, initialSelectedInterestIds: s } = e,
                        { selected_items: l } = e.subtask;
                    this.state = { groups: e.subtask.groups || [], customInterests: [...n], customInterestIds: (0, c.Z)(t), selectedCustomInterestIds: (0, c.Z)(t), selectedInterestIds: s && s.length > 0 ? (0, c.Z)(s) : (0, c.Z)(l || []), shouldRenderCustomInterests: n.length > 0 };
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: n, subtaskInputs: o } = this.props,
                        { next_link: r, primary_text: l, secondary_text: c, skip_link: _ } = n,
                        { groups: k } = this.state;
                    return a.createElement(h.Z, (0, s.Z)({}, t, { footer: a.createElement(p.ZP, { actionLabel: this._shouldShowSkipInstead() ? void 0 : r?.label, actionTestID: C, onAction: this._handleNextButtonClick, onSecondaryAction: this._handleSkipButtonClick, secondaryActionLabel: this._shouldShowSkipInstead() ? _?.label : void 0, secondaryActionTestID: E }), header: a.createElement(m.Z, { onNavigate: e, primaryTextProp: l, secondaryTextProp: c, subtaskInputs: o, withHeaderImage: !0 }), providePadding: !0 }), n.hide_search ? null : a.createElement(i.Z, { style: T.searchContainer }, a.createElement(d.R7, { filter: w, maxTopics: 8, onItemClick: this._handleSuggestionSelected, placeholder: n.hint, rounded: !0, shouldAutoFocus: !0, shouldClearOnSelect: !0, source: u._4.WelcomeFlow, withFocusStyling: !0 })), this._maybeRenderCustomInterests(), a.createElement(i.Z, null, k.map(this._renderGroup)), this.props.errorDialog);
                }
            }
            const T = l.default.create((e) => ({ searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 }, selectionPillStyles: { margin: e.spaces.space4 }, pillsContainer: { flexDirection: "row", flexWrap: "wrap" }, groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, group: { marginBottom: e.spaces.space12 } })),
                B = Z(S);
        },
        454473: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(202784),
                a = n(167630),
                i = n(392237),
                o = n(601798);
            let r = 0;
            const l = (e) => {
                    const [t, n] = s.useState(!1),
                        i = s.useRef(null),
                        {
                            onNavigate: l,
                            subtask: { next_link: d, timeout_ms: u = 2e3, url: p },
                            subtaskId: m,
                            updateFlow: h,
                        } = e || {},
                        _ = s.useCallback(() => {
                            const e = Math.min(100, u);
                            let t = 0;
                            const n = setInterval(() => {
                                const s = i.current && i.current.value ? { response: i.current.value } : void 0;
                                (t += e), ((s && r++ % 20 == 0) || t >= u) && (clearInterval(n), h(m, { ...s, link: d.link_id }), l(d));
                            }, e);
                            return n;
                        }, [d, l, h, m, u]);
                    return (
                        s.useEffect(() => {
                            let e;
                            return (
                                n(!1),
                                o.Z.replace({
                                    callback: () => {
                                        n(!0), (e = _());
                                    },
                                    scriptId: "jsInstLibrary",
                                    src: p,
                                }),
                                () => clearInterval(e)
                            );
                        }, [_, p]),
                        s.createElement(s.Fragment, null, s.createElement("input", { autoComplete: "off", "data-testid": "tim_input", id: "tim_input", name: "ui_metrics", ref: i, type: "hidden" }), t ? null : s.createElement(a.Z, { style: c.activityIndicator }))
                    );
                },
                c = i.default.create((e) => ({ activityIndicator: { height: "100%" } }));
        },
        159180: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var s = n(807896),
                a = n(202784),
                i = n(111677),
                o = n.n(i),
                r = n(114777),
                l = n(983389),
                c = n(38293),
                d = n(118823);
            const u = o().ca042c78,
                p = o().ff869362,
                m = (e) => a.createElement(a.Fragment, null, a.createElement(c.Z, { title: u }), a.createElement(l.Z, { description: p }), a.createElement(r.Z, (0, s.Z)({}, e, { flowName: "login", ocfModule: d.qE })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-5b3c9a00.48816a9a.js.map
