"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-3c1f9d32"],
    {
        380020: (e, t, a) => {
            a.d(t, { Z: () => g });
            var o = a(807896),
                n = a(202784),
                r = a(154003),
                s = a(3196),
                l = a(487659),
                i = a(911318),
                c = a(182495),
                d = a(804027),
                u = a(305784),
                p = a(153925),
                m = a(50439),
                h = a(217623);
            const g = ({ button: e, displayType: t = d.GN.Default, onNavigate: a, style: g, subtaskId: b, subtaskInputs: f, ...y }) => {
                const { icon: w, navigation_link: C, preferred_size: v, separator: _ } = e,
                    Z = b === d.D7 ? c.yX.SignUp : c.yX.LogIn,
                    E = n.useCallback(
                        (e) => {
                            a(C);
                        },
                        [C, a],
                    );
                return n.createElement(
                    n.Fragment,
                    null,
                    (() => {
                        switch (t) {
                            case d.GN.GoogleSSO:
                                return n.createElement(l.Z, { buttonSize: v ? (0, p.Yr)(v) : "medium", buttonState: Z, displayType: i.qv.Button, style: [u.Z.button, u.Z.ssoButton] });
                            case d.GN.AppleSSO:
                                return n.createElement(s.Z, { buttonSize: v ? (0, p.Yr)(v) : "medium", buttonState: Z, style: [u.Z.button, u.Z.ssoButton] });
                            default:
                                return n.createElement(r.ZP, (0, o.Z)({}, y, { icon: w && n.createElement(m.Z, { icon: w.icon }), onPress: E, size: v ? (0, p.Yr)(v) : "medium", style: [u.Z.button, g], type: e.style ? (0, p.$1)(e.style) : "brandFilled" }), C.label);
                        }
                    })(),
                    _ ? n.createElement(h.Z, { label: _.label, onNavigate: a, subtaskInputs: f }) : null,
                );
            };
        },
        227991: (e, t, a) => {
            a.d(t, { Bl: () => d, ZP: () => p });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(154003),
                l = a(392237),
                i = a(975364);
            const c = ({ children: e, condition: t, wrapper: a }) => (t && a ? a(e) : e);
            function d({ actionLabel: e, secondaryActionLabel: t }) {
                return Boolean(e || t);
            }
            const u = l.default.create((e) => ({ spaceBetween: { marginBottom: e.spaces.space16 }, detailText: { marginTop: e.spaces.space16 }, actionContainer: { marginVertical: e.spaces.space24 }, columnView: { display: "flex", flexDirection: "row", justifyContent: "space-between" } })),
                p = function (e) {
                    const { actionDisabled: t, actionLabel: a, actionTestID: l, actionType: p, actionWrapper: m, buttonSize: h, decorator: g, detailText: b, onAction: f, onNavigate: y, onSecondaryAction: w, secondaryActionDisabled: C, secondaryActionLabel: v, secondaryActionTestID: _, secondaryActionType: Z, secondaryActionWrapper: E, subtaskInputs: x } = e;
                    if (!d(e)) return null;
                    const S = "primaryText" === Z,
                        k = [
                            { disabled: t, onPress: f, size: h ?? "xLarge", testID: l, type: p ?? "primaryFilled", label: a, wrapper: m },
                            { disabled: C, onPress: w, size: h ?? "xLarge", testID: _, type: Z ?? "primaryOutlined", label: v, wrapper: E },
                        ].filter(({ label: e }) => null != e);
                    return (
                        S && k.reverse(),
                        n.createElement(
                            r.Z,
                            { style: !!g && u.columnView },
                            g || null,
                            n.createElement(
                                r.Z,
                                null,
                                b?.text && x && n.createElement(i.Z, (0, o.Z)({}, b, { color: "gray700", onNavigate: y, size: "subtext2", style: u.detailText, subtaskInputs: x })),
                                n.createElement(
                                    r.Z,
                                    { style: u.actionContainer },
                                    k.map(({ label: e, wrapper: t, ...a }, r) => n.createElement(c, { condition: !!t, key: e, wrapper: t }, n.createElement(s.ZP, (0, o.Z)({ key: e, style: k.length > 1 && r < k.length - 1 ? u.spaceBetween : void 0 }, a), e))),
                                ),
                            ),
                        )
                    );
                };
        },
        663951: (e, t, a) => {
            a.d(t, { Z: () => b });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(386802),
                l = a(392237),
                i = a(530525),
                c = a(439592),
                d = a(673510),
                u = a(555079),
                p = a(804027),
                m = a(380020),
                h = a(975364);
            const g = l.default.create((e) => ({ buttonRightAligned: { marginHorizontal: `-${e.spaces.space8}`, marginVertical: 0 }, containerRightAlignedButton: { marginStart: e.spaces.space20 }, secondaryTextRightAlignedButton: { flexBasis: 0, flexGrow: 1 }, subHeaderRightAlignedButton: { flexDirection: "row", flexWrap: "wrap" }, headingContainer: { marginVertical: e.spaces.space20 }, subHeader: { marginTop: e.spaces.space8 } })),
                b = (e) => {
                    const { header: t, onNavigate: a, primaryTextProp: b, primaryTextTestID: f, secondaryTextProp: y, subtaskInputs: w, userInfo: C, withHeaderImage: v } = e,
                        _ = t?.header_button && !!(Z = t.header_button).icon && Z.style === p.ZJ.Text && !Z.navigation_link?.label;
                    var Z;
                    let E, x, S, k, I, B, T;
                    const { isModal: P } = n.useContext(s.Z);
                    return t ? ((S = t.user), (k = t.header_image), (E = t.primary_text), (x = t.secondary_text), (I = 10 * l.default.theme.lineHeightsPx.body), (B = k ? (I * k.image.image_info.width) / k.image.image_info.height : "initial"), (T = v && k && "icon" === k.image_type)) : ((E = "string" == typeof b ? { text: b } : b), (x = "string" == typeof y ? { text: y } : y)), k || E?.text || x?.text || S ? n.createElement(r.Z, null, v && k ? n.createElement(r.Z, { style: { marginHorizontal: "full_width" === k.image_type || "full_bleed_top" === k.image_type ? `-${P ? l.default.theme.spaces.space80 : l.default.theme.spaces.space32}` : "auto", height: T ? I : "initial", width: T ? B : "initial" } }, n.createElement(i.Z, { "aria-label": k.image.image_info.alt_text || "", aspectMode: c.Z.exact(k.image.image_info.width / k.image.image_info.height), image: k.image.image_info })) : null, n.createElement(r.Z, { style: g.headingContainer }, E ? n.createElement(h.Z, (0, o.Z)({}, E, { "aria-level": 1, id: u.Q_, onNavigate: a, role: "heading", size: P ? "title2" : "title3", subtaskInputs: w, testID: f, weight: "bold" })) : null, x || t?.header_button ? n.createElement(r.Z, { style: [g.subHeader, _ && g.subHeaderRightAlignedButton] }, n.createElement(r.Z, { style: _ && g.secondaryTextRightAlignedButton }, x ? n.createElement(h.Z, (0, o.Z)({}, x, { color: "gray700", onNavigate: a, subtaskInputs: w })) : null), t?.header_button ? n.createElement(r.Z, { style: _ && g.containerRightAlignedButton }, n.createElement(m.Z, { button: t.header_button, onNavigate: a, style: _ && g.buttonRightAligned, subtaskInputs: w })) : null) : null, S ? (C ?? n.createElement(d.ZP, { avatarUri: S.profile_image_url_https, displayMode: "UserCompact", name: S.name, screenName: S.screen_name, userId: S.id_str })) : null)) : null;
                };
        },
        50439: (e, t, a) => {
            a.d(t, { Z: () => c });
            var o = a(202784),
                n = a(804027),
                r = a(325686),
                s = a(731708);
            function l({ number: e }) {
                return o.createElement(r.Z, { style: i.badge }, o.createElement(s.ZP, { color: "buttonWhite", weight: "bold" }, e));
            }
            const i = a(392237).default.create((e) => ({ badge: { backgroundColor: e.colors.buttonBlack, borderRadius: e.borderRadii.infinite, height: e.spaces.space28, width: e.spaces.space28, marginEnd: e.spaces.space20, justifyContent: "center", alignItems: "center", overflow: "hidden" } })),
                c = ({ icon: e, style: t }) => {
                    !(e in n.q0) &&
                        e.startsWith("number_") &&
                        (n.q0[e] = ((e) => {
                            if (!e.startsWith("number_")) return () => null;
                            const [, t] = e.split("number_");
                            return () => o.createElement(l, { number: t });
                        })(e));
                    const a = n.q0[e];
                    return a ? o.createElement(a, { style: t, testID: "ocf-icon" }) : null;
                };
        },
        263578: (e, t, a) => {
            a.d(t, { Z: () => d });
            var o = a(202784),
                n = a(386802),
                r = a(138099),
                s = a(392237),
                l = a(757700),
                i = a(802745);
            const c = s.default.create((e) => ({ root: { minHeight: `calc(${e.spaces.space64} * 4)`, paddingBottom: s.default.iPhoneOffsetBottom } })),
                d = function (e) {
                    const { isModal: t } = o.useContext(n.Z),
                        { children: a, componentCollection: s, coverType: d, hideAppBar: u, onBackPress: p, onPrimaryAction: m, onSecondaryAction: h } = e,
                        g = o.useMemo(() => (t ? l.CA[l.Cg.fixed] : c.root), [t]),
                        b = o.useMemo(() => ("half" === d ? "bottom" : "full"), [d]),
                        f = !t && "bottom" === b;
                    return o.createElement(r.Z, { enableMaskForDismiss: f, onMaskClick: p, style: g, type: b, withMask: !0 }, o.createElement(i.Z, { backButtonType: "back", componentCollection: s, hideAppBar: u || f, onBackPress: p, onPrimaryAction: m, onSecondaryAction: h }, a));
                };
        },
        495161: (e, t, a) => {
            a.d(t, { Z: () => f });
            var o = a(202784),
                n = a(325686),
                r = a(855488),
                s = a(332920),
                l = a.n(s),
                i = a(666536),
                c = a(516951),
                d = a(305784),
                u = a(71620),
                p = a(668214),
                m = a(878137);
            const h = (0, p.Z)()
                    .propsFromState(() => ({ validityMap: m.Z.selectEntitiesWithFetchStatus }))
                    .propsFromActions(() => ({ clearPasswordValidity: m.Z.clear, createLocalApiErrorHandler: (0, u.zr)("PASSWORD_FIELD_CONTEXT"), validator: m.Z.validate }))
                    .withAnalytics({ page: "onboarding", component: "password_entry" }),
                g = l().dec3c9b8;
            class b extends o.Component {
                constructor(e) {
                    super(e),
                        (this._validate = (e, t) => {
                            this.props.validator(e, t).catch(this.props.createLocalApiErrorHandler()).then(this._onValidationUpdated(e));
                        }),
                        (this._validateDebounced = (0, i.Z)(this._validate, 500)),
                        (this._onValidationUpdated = (e) => () => {
                            const { analytics: t, customValidator: a, onPasswordValidated: o, validityMap: n } = this.props;
                            let { valid: r = !1 } = e && n[e] ? n[e] : {};
                            a && "string" == typeof e && 0 === e.length && (r = a().valid), this.setState({ valid: r }), t.scribe({ element: "entered_password", action: r ? "valid" : "invalid" }), o(r);
                        }),
                        (this._renderFormTextInput = () => {
                            const { autoComplete: e, autoFocus: t, customValidator: a, helperText: n, label: s, onSubmitEditing: l, validityMap: i } = this.props,
                                { password: c, revealed: u } = this.state;
                            let { valid: p } = this.state,
                                { errorMessage: m = "" } = i[c] || {};
                            return a && 0 === m.length && ((m = a().errorMessage), (p = a().valid)), o.createElement(r.Z, { autoComplete: e, autoFocus: t, errorText: m, helperText: n, invalid: !p, label: s || g, name: "password", onChange: this._handlePasswordUpdated, onSubmitEditing: p ? l : void 0, showPasswordVisibilityIcon: !0, style: d.Z.formTextInput, type: u ? "text" : "password", value: c });
                        }),
                        (this._handleVisibilityToggle = () => {
                            this.setState({ revealed: !this.state.revealed });
                        }),
                        (this._handlePasswordUpdated = (e) => {
                            const { onPasswordChange: t, skipPasswordValidation: a, userIdentifier: o } = this.props,
                                n = e.target.value;
                            a || this._validateDebounced(n, { username: o }), this.setState({ password: n }), t(n);
                        });
                    const { defaultValue: t } = e;
                    this.state = { revealed: !1, password: t || "", valid: !0 };
                }
                componentWillUnmount() {
                    this.props.clearPasswordValidity(), this._validateDebounced.clear();
                }
                render() {
                    const { style: e, userIdentifier: t } = this.props;
                    return o.createElement(n.Z, { style: [d.Z.formTextInput, e] }, t ? o.createElement("input", { name: "username", type: "hidden", value: t }) : null, this._renderFormTextInput());
                }
            }
            b.defaultProps = { autoComplete: "on", onPasswordChange: c.Z, onPasswordValidated: c.Z, skipPasswordValidation: !1 };
            const f = h(b);
        },
        813959: (e, t, a) => {
            a.d(t, { Z: () => v });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(154003),
                l = a(190286),
                i = a(392237),
                c = a(332920),
                d = a.n(c),
                u = a(975364);
            const p = d().c52be452,
                m = d().cfd2f35e,
                h = d().gea6cc1a,
                g = d().bcb388a0,
                b = d().ec129eb6,
                f = d().f1b5048a,
                y = d().deaf5b16;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showRemoveContactsDialog: !1, disableRemoveContactsButton: !1 }),
                        (this._handleRemoveContactsClick = () => {
                            this.setState({ showRemoveContactsDialog: !0 });
                        }),
                        (this._handleRemoveContactsConfirm = () => {
                            this.setState({ showRemoveContactsDialog: !1 }), this._handleRemoveContacts();
                        }),
                        (this._handleRemoveContacts = () => {
                            const { addToast: e, removeContacts: t } = this.props;
                            t &&
                                t()
                                    .then(() => {
                                        this.setState({ disableRemoveContactsButton: !0 }), e({ text: b, withClearButton: !0 });
                                    })
                                    .catch(() => {
                                        e({ action: { label: y, onAction: this._handleRemoveContacts }, text: f, withAutoDismiss: !0 });
                                    });
                        }),
                        (this._handleRemoveContactsCancel = () => {
                            this.setState({ showRemoveContactsDialog: !1 });
                        });
                }
                render() {
                    const { onNavigate: e, removeContactsSetting: t, subtaskInputs: a } = this.props,
                        { disableRemoveContactsButton: l } = this.state;
                    return n.createElement(r.Z, null, n.createElement(u.Z, (0, o.Z)({}, t.primary_text, { onNavigate: e, style: C.header, subtaskInputs: a })), n.createElement(u.Z, (0, o.Z)({}, t.secondary_text, { color: "gray700", onNavigate: e, size: "subtext2", style: C.subtext, subtaskInputs: a })), n.createElement(r.Z, null, t.value_data?.action_data ? n.createElement(s.ZP, { disabled: l, onPress: this._handleRemoveContactsClick, type: "destructiveText" }, t.value_data.action_data.link.label) : null, this._maybeRenderRemoveContactsDialog()));
                }
                _maybeRenderRemoveContactsDialog() {
                    return this.state.showRemoveContactsDialog ? n.createElement(l.Z, { cancelButtonLabel: m, confirmButtonLabel: p, headline: h, onCancel: this._handleRemoveContactsCancel, onConfirm: this._handleRemoveContactsConfirm, onMaskClick: this._handleRemoveContactsCancel, text: g }) : null;
                }
            }
            const C = i.default.create((e) => ({ header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, subtext: { marginBottom: e.spaces.space20 } })),
                v = w;
        },
        280947: (e, t, a) => {
            a.d(t, { Z: () => v });
            var o = a(202784),
                n = a(325686),
                r = a(745153),
                s = a(108362),
                l = a(822399),
                i = a(386802),
                c = a(392237),
                d = a(332920),
                u = a.n(d),
                p = a(520913),
                m = a(323265),
                h = a(625661),
                g = a(715601),
                b = a(833853);
            const f = u().c39b0e24,
                y = u().hdf040dd;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { contentScrollable: !1, scrollReachedBottom: !1 }),
                        (this._handleScroll = (e) => {
                            const t = e.currentTarget;
                            if (t instanceof HTMLElement) {
                                const e = Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 2;
                                e !== this.state.scrollReachedBottom && this.setState({ scrollReachedBottom: e });
                            }
                        }),
                        (this._handleViewportSet = (e) => {
                            const { onViewportSet: t } = this.props;
                            (this._viewport = e), t && t(e), this.viewportRectChangeListener?.(), (this.viewportRectChangeListener = e?.addRectChangeListener(() => this._handleResize()));
                        }),
                        (this._handleResize = () => {
                            const e = this._viewport?.getViewport();
                            if (e) {
                                const t = e.scrollHeight > e.clientHeight;
                                t !== this.state.contentScrollable && this.setState({ contentScrollable: t });
                            }
                        });
                }
                componentWillUnmount() {
                    this.viewportRectChangeListener?.();
                }
                render() {
                    const { children: e, footer: t, header: a, hideAppBar: l, providePadding: i = !1, rightControl: c, scrollPrompt: d } = this.props,
                        { isModal: u } = this.context,
                        { contentScrollable: p, scrollReachedBottom: h } = this.state,
                        f = t || c,
                        y = o.createElement(o.Fragment, null, a, e),
                        w = u ? C.contentArea : C.compactContentArea;
                    return o.createElement(r.Z, { style: [C.root, u && C.rootModal] }, l ? null : this._renderAppBar(), o.createElement(s.Z, { style: [C.container, u && C.containerModal] }, u ? o.createElement(o.Fragment, null, o.createElement(g.Z, { onScroll: this._handleScroll, onViewportSet: this._handleViewportSet, style: [C.viewport, m.ZP.isIE() && C.viewportIE] }, o.createElement(n.Z, { onLayout: this._handleResize, onPageScroll: this._handleScroll, style: i && w }, y)), f && o.createElement(n.Z, { style: [w, p && !h && C.footerShadow] }, f)) : f ? o.createElement(b.l, { control: o.createElement(n.Z, { style: [i && w, p && !h && C.footerShadow] }, f), onViewportSet: this._handleViewportSet }, o.createElement(n.Z, { style: i && w }, y)) : i ? o.createElement(n.Z, { style: w }, y) : y, u ? null : d), u ? d : null);
                }
                _renderAppBar() {
                    const { appBarPosition: e, appBarWithBackground: t, backButtonType: a, backLocation: r, hideBackButton: s, hideLogo: i, history: c, leftControl: d, onBackClick: u, progressIndication: m } = this.props,
                        g = m || i ? void 0 : o.createElement(n.Z, { style: C.iconContainer }, o.createElement(p.default, { "aria-label": f, style: C.icon })),
                        b = m?.text?.text,
                        w = m?.percentage_complete,
                        v = w ? w / 100 : void 0,
                        _ = y({ percentage: w }),
                        Z = v ? o.createElement(l.Z, { "aria-label": _, ariaValueText: _, progress: v }) : void 0;
                    return o.createElement(h.ZP, { backButtonType: a, backLocation: r, centeredLogo: g, hideBackButton: s || !u, history: c, leftControl: d, onBackClick: u, position: e, secondaryBar: Z, title: b, withBackground: t });
                }
            }
            w.contextType = i.Z;
            const C = c.default.create((e) => ({ root: { display: "flex", flexGrow: 1 }, rootModal: { backgroundColor: e.colors.cellBackground, flexShrink: 1 }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, iconContainer: { alignItems: "center", alignSelf: "stretch", display: "flex", flexGrow: 1, justifyContent: "center", minWidth: e.spaces.space32 }, icon: { color: e.colors.brandColor, flexGrow: 1, height: "1.75rem" }, viewport: { flexGrow: 1, flexShrink: 1, overflow: "auto" }, viewportIE: { flexBasis: "0%" }, footerShadow: { boxShadow: e.boxShadows.xSmall }, contentArea: { paddingHorizontal: e.spaces.space80 }, compactContentArea: { paddingHorizontal: e.spaces.space32 } })),
                v = w;
        },
        833853: (e, t, a) => {
            a.d(t, { l: () => c });
            var o = a(202784),
                n = a(325686),
                r = a(392237),
                s = a(323265),
                l = a(715601);
            const i = "controlView",
                c = ({ children: e, control: t, onScroll: a, onViewportSet: c }) => {
                    const p = o.useRef(null),
                        m = o.useRef(0),
                        [h, g] = o.useState(null);
                    d(() => {
                        const e = window.visualViewport;
                        if ((document.documentElement?.clientHeight || window.innerHeight) - e.height > 100) {
                            const t = p.current || 75,
                                a = t + (m.current || 75) + r.default.theme.componentDimensions.appBarHeightPx;
                            window.visualViewport.height < a ? g(a) : g(e.height + e.offsetTop - t);
                        } else g(null);
                    });
                    const b = [u.fixed, ...(s.ZP.isIOS() && h ? [u.visualViewport, { top: h }] : [])];
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                            l.Z,
                            { onScroll: a, onViewportSet: c, style: u.flexViewport },
                            o.createElement(
                                n.Z,
                                {
                                    ref: (e) => {
                                        e && !m.current && (m.current = e.getBoundingClientRect().height);
                                    },
                                    style: u.fullHeight,
                                },
                                e,
                            ),
                        ),
                        o.createElement(
                            n.Z,
                            {
                                ref: (e) => {
                                    e && !p.current && (p.current = e.getBoundingClientRect().height);
                                },
                                style: b,
                                testID: i,
                            },
                            t,
                        ),
                        o.createElement(n.Z, { style: u.invisible }, t),
                    );
                },
                d = (e) => {
                    const t = window.visualViewport;
                    o.useEffect(() => {
                        if (t)
                            return (
                                t.addEventListener("resize", e),
                                t.addEventListener("scroll", e),
                                () => {
                                    t.removeEventListener("resize", e), t.removeEventListener("scroll", e);
                                }
                            );
                    });
                },
                u = r.default.create((e) => ({ fixed: { backgroundColor: e.colors.navigationBackground, position: "fixed", bottom: 0, start: 0, end: 0 }, invisible: { visibility: "hidden" }, flexViewport: { flexGrow: 1, flexShrink: 1, flexBasis: "100%", overflow: "auto" }, fullHeight: { height: "100%" }, visualViewport: { position: "absolute", start: 0, end: 0, marginTop: `-${e.componentDimensions.appBarHeight}` } }));
        },
        746243: (e, t, a) => {
            a.d(t, { Z: () => u });
            var o = a(202784),
                n = a(325686),
                r = a(154003),
                s = a(731708),
                l = a(392237),
                i = a(212145);
            const c = "Ocf_Scroll_Prompt_Container",
                d = l.default.create((e) => ({ icon: { height: "1.5em", width: "1.5em" }, pillContainer: { bottom: e.spaces.space16, alignItems: "center", start: "0", end: "0", margin: "auto", zIndex: 1 }, pillContainerNarrow: { position: "fixed" }, pillContainerModal: { position: "absolute" } })),
                u = ({ isModal: e, label: t, onPress: a }) => {
                    const l = [d.pillContainer, e ? d.pillContainerModal : d.pillContainerNarrow];
                    return o.createElement(n.Z, { style: l, testID: c }, o.createElement(r.ZP, { icon: o.createElement(i.default, { style: d.icon }), onPress: a, type: "primaryFilled" }, o.createElement(s.ZP, { size: "body", weight: "normal" }, t)));
                };
        },
        217623: (e, t, a) => {
            a.d(t, { Z: () => d });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(885015),
                l = a(392237),
                i = a(975364);
            const c = l.default.create((e) => ({ separatorContainer: { width: "100%" }, separatorColumn: { flex: 1, justifyContent: "center" }, separator: { width: "100%", height: "1px", backgroundColor: e.colors.gray200, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, separatorText: { "flex-basis": "auto" } })),
                d = ({ label: e, onNavigate: t, subtaskInputs: a }) => (e ? n.createElement(s.Z, { style: c.separatorContainer, withGutter: !0 }, n.createElement(r.Z, { style: c.separatorColumn }, n.createElement(r.Z, { style: c.separator })), n.createElement(i.Z, (0, o.Z)({ style: c.separatorText }, e, { onNavigate: t, size: "headline2", subtaskInputs: a })), n.createElement(r.Z, { style: c.separatorColumn }, n.createElement(r.Z, { style: c.separator }))) : n.createElement(r.Z, { style: c.separator }));
        },
        738374: (e, t, a) => {
            a.d(t, { Z: () => m });
            var o = a(807896),
                n = a(202784),
                r = a(855488),
                s = a(392237),
                l = a(516951),
                i = a(804027),
                c = a(305784),
                d = a(495161),
                u = a(975364);
            const p = s.default.create((e) => ({ textField: { width: "100%" }, textFieldDetails: { marginBottom: e.spaces.space4 } })),
                m = ({ autoComplete: e, autoFocus: t = !1, onChange: a, onNavigate: s, onSubmitEditing: m, passwordProps: h, style: g, subtaskInputs: b, textField: f }) => {
                    const y = n.useCallback((e) => a(e.target.value), [a]);
                    if (!f) return null;
                    const { content_type: w, detail_text: C, hint_text: v } = f,
                        _ = C ? n.createElement(u.Z, (0, o.Z)({}, C, { color: "gray700", onNavigate: s, style: p.textFieldDetails, subtaskInputs: b })) : null;
                    return w === i.Ae.Password || w === i.Ae.NewPassword ? n.createElement(d.Z, (0, o.Z)({}, h, { autoComplete: e || (w === i.Ae.Password ? "current-password" : "new-password"), autoFocus: t, helperText: _, label: v || "", onPasswordChange: a, onPasswordValidated: h?.onPasswordValidated ?? l.Z, onSubmitEditing: m, style: [c.Z.formTextInput, p.textField, g] })) : n.createElement(r.Z, { autoComplete: e ?? "on", autoFocus: t, helperText: _, label: v || "", name: "text", onChange: y, onSubmitEditing: m, style: [c.Z.formTextInput, p.textField, g] });
                };
        },
        900069: (e, t, a) => {
            a.d(t, { Z: () => m });
            var o = a(807896),
                n = a(202784),
                r = a(325686),
                s = a(823161),
                l = a(366635),
                i = a(872405),
                c = a(392237),
                d = a(804027),
                u = a(975364);
            const p = c.default.create((e) => ({ userContainerStacked: { alignItems: "center", marginTop: e.spaces.space8, marginBottom: e.spaces.space16 }, userAvatarStacked: { marginBottom: e.spaces.space8 }, userNameStacked: { alignItems: "center" }, avatarColumnCentered: { justifyContent: "center" } })),
                m = (e) => {
                    const { displayType: t = d.CE.stacked, user: a, userCaption: c } = e;
                    if (!a) return null;
                    const m = (e) => n.createElement(s.default, { "aria-hidden": !0, focusable: !1, size: s.default.defaultSize, style: e, uri: a.profile_image_url_https }),
                        h = (t) => {
                            const { onNavigate: r, subtaskInputs: s } = e;
                            return n.createElement(n.Fragment, null, n.createElement(l.Z, { isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: c ? void 0 : a.screen_name, withStackedLayout: !0 }), c ? n.createElement(u.Z, (0, o.Z)({}, c, { color: "gray700", onNavigate: r, subtaskInputs: s })) : null);
                        };
                    switch (t) {
                        case d.CE.stacked:
                            return n.createElement(r.Z, { style: p.userContainerStacked }, m(p.userAvatarStacked), h(p.userNameStacked));
                        case d.CE.compact:
                            return n.createElement(i.Z, { avatarCell: m(), avatarCellStyle: p.avatarColumnCentered, cellStyle: p.avatarColumnCentered, testID: "ocf-userinfo-avatar-row" }, h());
                        default:
                            return null;
                    }
                };
        },
        607964: (e, t, a) => {
            a.d(t, { Z: () => H });
            var o = a(202784),
                n = a(614983),
                r = a.n(n),
                s = a(325686),
                l = a(731708),
                i = a(224162),
                c = a(154003),
                d = a(96083),
                u = a(392237),
                p = a(332920),
                m = a.n(p),
                h = a(143778),
                g = a(516951),
                b = a(337069),
                f = a(965245),
                y = a(443781),
                w = a(804027),
                C = a(725516),
                v = a(920030),
                _ = a(970187);
            const Z = u.default.create((e) => ({ followButton: { alignSelf: "flex-start", marginStart: e.spaces.space12 } })),
                E = ({ isCheckboxFollowButton: e, isFollowed: t, screenName: a, updateFollowedItems: n, userId: r }) => {
                    const s = (e) => () => n(r, e);
                    return e ? o.createElement(d.Z, { checked: t, onChange: () => n(r, !t) }) : o.createElement(_.Z, { isFollowing: t, name: a, onFollow: s(!0), onUnfollow: s(!1), showRelationshipChangeConfirmation: !1, size: "small", style: Z.followButton, type: "user" });
                };
            var x = a(626820);
            const S = u.default.create((e) => ({ groupHeader: { flexDirection: "row", justifyContent: "space-between" }, tileGroup: { borderRadius: e.spaces.space12, boxShadow: e.boxShadows.small, marginBottom: e.spaces.space20, overflow: "hidden" }, tileFollowGroup: { boxShadow: "none", backgroundColor: e.colors.gray0 }, tileGroupHeader: { margin: e.spaces.space12 }, tileFollowGroupHeader: { zIndex: 1, backgroundColor: "transparent" }, listGroupHeader: { alignItems: "center", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space12 }, tooltip: { marginBottom: e.spaces.space20 } })),
                k = function ({ children: e, header: t, message: a, styleType: n }) {
                    const [r, l] = o.useState(!0),
                        i = n === w.lS.List,
                        c = n === w.lS.TileFollowButton;
                    return o.createElement(s.Z, { testID: v.Z.userSelectGroup }, o.createElement(s.Z, { style: [!i && S.tileGroup, c && S.tileFollowGroup] }, o.createElement(s.Z, { style: [S.groupHeader, i && S.listGroupHeader, !i && S.tileGroupHeader, c && S.tileFollowGroupHeader] }, t), e), a?.text && r && o.createElement(s.Z, { style: S.tooltip }, o.createElement(x.Z, { backgroundColor: "primary", icon: a?.icon, onClose: () => l(!1), text: a?.text })));
                };
            var I = a(673510),
                B = a(788993),
                T = a(409438),
                P = a(328536),
                F = a(524702);
            const R = u.default.create((e) => ({ userCellListItem: { paddingHorizontal: e.spaces.space20 }, userCellListItemWrapper: { display: "flex", flexDirection: "column", justifyContent: "center" } })),
                V = ({ decorator: e, description: t, groupId: a, id: n, isFollowing: r, isVerified: l, isBlueVerified: i, name: c, onCellClick: d, onFollow: u = () => {}, onUnfollow: p = () => {}, profileImageUrl: m, screenName: h, socialText: g, styleType: b, style: f }) => {
                    const y = o.useMemo(() => {
                        if (g) return { contextType: B.Z.Follow, text: g };
                    }, [g]);
                    return o.createElement(
                        s.Z,
                        { role: "label", style: R.userCellListItemWrapper },
                        ((s) => {
                            switch (s) {
                                case w.lS.TileFollowButton:
                                    return o.createElement(F.Z, { groupId: a || "", id: n, isBlueVerified: i, isSelected: !!r, isVerified: l, name: c, onFollow: u, onUnfollow: p, profileImageUrl: m, style: f, updateIndividualSelectedProfile: d, userName: h });
                                case w.lS.Tile:
                                    return o.createElement(P.Z, { groupId: a || "", id: n, isBlueVerified: i, isSelected: !!r, isVerified: l, name: c, onFollow: u, onUnfollow: p, profileImageUrl: m, socialContext: y, updateIndividualSelectedProfile: d, userName: h });
                                default:
                                    return o.createElement(I.ZP, { avatarUri: m, decoration: e, description: t, displayMode: T.Z.UserDetailed, isBlueVerified: i, isVerified: l, name: c, onCellClick: d, promotedItemType: "users", screenName: h, socialContext: y, style: R.userCellListItem, userId: n, withLink: !1 });
                            }
                        })(b),
                    );
                },
                A = m().j231d352,
                D = m().d960b55c,
                L = (e) => e.items.map((e) => e.user_id_str).join("-"),
                N = h.Z,
                z = u.default.create((e) => ({ noBottomMargin: { marginBottom: 0 }, noRightMargin: { marginEnd: 0 }, container: { overflow: "hidden", width: "calc(100%/3 - 1px)", marginEnd: e.spaces.space1, marginBottom: e.spaces.space1, cursor: "pointer" }, tileFollowContainer: { overflow: "visible", marginEnd: 0, marginBottom: 0 }, listItemsContainer: { flexWrap: "wrap", justifyContent: "spaceBetween", flexDirection: "row" }, subheader: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, headerContainer: { flex: 1 } })),
                H = ({ userGroups: e, onNearEnd: t = g.Z, followedUserIds: a, onFollow: n, onUnfollow: u, message: p, firstSelectedGroupIdx: m = -1, scribeDescription: h = "", followButtonType: _, styleType: Z = w.lS.List }) => {
                    const { loggedInUserId: x } = o.useContext(y.rC);
                    r()(!!x, "loggedInUserId must be defined");
                    const S = (0, C.z)(),
                        I = Z === w.lS.List,
                        B = Z === w.lS.TileFollowButton,
                        T = _ === w.TT.Checkbox,
                        P = o.useCallback(
                            (e, t, a = "", o) => {
                                t ? n(e, a, o) : u(e, a, o);
                            },
                            [n, u],
                        ),
                        F = o.useCallback(
                            (e, t, a) => {
                                P([e], t, a);
                            },
                            [P],
                        ),
                        R = o.useCallback(
                            (e, t) => () => {
                                const a = e.items.map(({ user_id_str: e }) => e);
                                P(a, !t, e.group_id || "", !0);
                                const o = t ? "deselect" : "select",
                                    n = { items: [{ name: e.group_id, description: h }] };
                                S.scribe({ element: "category", action: o, data: n });
                            },
                            [P, S, h],
                        ),
                        H = o.useCallback(
                            (e) => {
                                S.scribe({ element: "category", action: "impression", data: { items: [{ name: e, description: h }] } });
                            },
                            [S, h],
                        ),
                        M = o.useCallback((e, t) => o.createElement(o.Fragment, null, (e?.header || e?.subheader) && o.createElement(s.Z, { style: z.headerContainer }, e?.header && o.createElement(l.ZP, { color: "gray700" }, e.header), e?.subheader && o.createElement(i.RD.Consumer, null, ({ direction: t }) => o.createElement(l.ZP, { dir: t, size: "headline2", style: z.subheader, weight: "bold" }, e.subheader))), t ? o.createElement(c.ZP, { onPress: R(e, t), type: "primaryOutlined" }, D) : o.createElement(c.ZP, { onPress: R(e, t), type: "primaryFilled" }, A)), [R]),
                        U = o.useCallback((e, t) => o.createElement(o.Fragment, null, o.createElement(l.ZP, { size: "headline1", weight: "bold" }, e.header), T && o.createElement(d.Z, { checked: t, onChange: R(e, t) })), [R, T]),
                        G = o.useCallback((e, t) => (Z === w.lS.List ? o.createElement(E, { isCheckboxFollowButton: T, isFollowed: t, screenName: e.screen_name, updateFollowedItems: F, userId: e.id_str }) : void 0), [F, T, Z]),
                        W = o.useCallback(
                            (t) => {
                                const r = t.items.every((e) => a.has(e.user_id_str)),
                                    l = m >= 0 && t.group_id === e[m]?.group_id,
                                    i = (e) => () => F(e, !r, t.group_id);
                                return o.createElement(
                                    b.Z,
                                    { onImpression: () => H(t.group_id) },
                                    o.createElement(
                                        k,
                                        { header: I ? U(t, r) : M(t, r), message: l ? p : void 0, scribeDescription: h, styleType: Z },
                                        o.createElement(
                                            s.Z,
                                            { style: !I && z.listItemsContainer },
                                            t.items.map(({ social_text: e, user: r }, l) => {
                                                const c = a.has(r.id_str),
                                                    d = r?.profile_image_extensions_media_color?.palette[0],
                                                    p = { backgroundColor: d ? ((m = d), `rgb(${m.rgb.red}, ${m.rgb.green}, ${m.rgb.blue})`) : "none" };
                                                var m;
                                                return o.createElement(s.Z, { key: r.id_str, style: [!I && z.container, !I && l + 1 > 3 && z.noBottomMargin, !I && l + 1 === 0 && z.noRightMargin, B && z.tileFollowContainer] }, o.createElement(V, { decorator: G(r, c), description: r.description, groupId: t.group_id, id: r.id_str, isBlueVerified: r.is_blue_verified, isFollowing: c, isVerified: r.verified, key: r.id_str, name: r.name, onCellClick: i(r.id_str), onFollow: n, onUnfollow: u, profileImageUrl: r.profile_image_url_https, screenName: r.screen_name, socialText: e, style: p, styleType: Z }));
                                            }),
                                        ),
                                    ),
                                );
                            },
                            [m, e, I, M, U, p, h, Z, a, H, F, B, G, n, u],
                        );
                    return o.createElement(s.Z, { testID: v.Z.userSelectList }, o.createElement(f.Z, { cacheKey: `userSelectList/${x}`, identityFunction: L, items: e, nearEndProximityRatio: 1.15, noItemsRenderer: N, onNearEnd: t, renderer: W }));
                };
        },
        922105: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var o = a(24949),
                n = a(71620),
                r = a(668214),
                s = a(118823),
                l = a(390387),
                i = a(601576),
                c = a(919022),
                d = a(153925);
            const u = (e) => (t, a) => {
                    if ("single_sign_on" === p(t, a)) return;
                    const o = a.location.query[e];
                    return Array.isArray(o) ? o[0] : o;
                },
                p = (e, t) => {
                    const a = t.flowName || t.location.pathname.slice(t.match.path.length);
                    return "premium_signup_nux_flow" === a ? "twitter_blue_signup_nux_flow" : a;
                },
                m = u("country_code"),
                h = (0, o.P1)(((g = "input"), (b = {}), (e, t) => (t.location.state && t.location.state[g]) || b), u("input_flow_data"), d.Rs);
            var g, b;
            const f = u("return_path"),
                y = u("referring_page"),
                w = u("is_native"),
                C = u("test_country_code"),
                v = u("target_user_id"),
                _ = (0, o.P1)(
                    (e, t) => u("overrides")(e, t),
                    (e) => (0, d.jb)(e),
                ),
                Z = (0, r.Z)()
                    .propsFromState(() => ({ currentSubtask: s.jv, previouslySubmittedSubtaskId: s.zj, countryCode: m, debugOverrides: _, isNative: w, testCountryCode: C, flowName: p, inputFlowData: h, returnPath: f, referringPage: y, subtasks: s.B7, flowToken: s.cu, fetchStatus: s.UD, previousNavigableSubtaskId: s.Du, subtaskInputs: s.$B, failureMessage: s.or, shouldAbort: s.W2, shouldEndFlow: s.uz, startLocation: s.Lg, submitFailed: s.li, targetUserId: v, loginReturnPath: l.V_, language: l.VT }))
                    .propsFromActions(({ ocfModule: e }) => ({ addToast: i.fz, callInteractiveSpinnerPath: s.WP, callOnboardingPath: s.R2, clearFlow: e.clearFlow, createLocalApiErrorHandler: (0, n.zr)("OCF_FLOW"), removeContacts: s.tY, fetchTemporaryPassword: s.n8, fetchUsers: c.ZP.fetchMany, navigateSubtask: s.z_, startFlow: e.startFlow, submitFlow: e.submitFlow, updateFlow: e.updateFlow, verifyCredentials: l.TK }))
                    .withAnalytics({ page: "onboarding" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-3c1f9d32.1026df7a.js.map
