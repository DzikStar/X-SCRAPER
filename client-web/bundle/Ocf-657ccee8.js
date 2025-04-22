"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-657ccee8"],
    {
        142189: (e, t, s) => {
            s.d(t, { Z: () => x });
            var n = s(807896),
                a = s(202784),
                i = s(325686),
                o = s(439592),
                r = s(530525),
                c = s(537392),
                l = s(392237),
                h = s(138099),
                d = s(946847),
                u = s(516951),
                p = s(323265),
                _ = s(555079),
                m = s(804027),
                k = s(280947),
                C = s(975364),
                b = s(900069),
                y = s(153925);
            const g = "OCF_CallToAction_Button";
            class x extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getCtaButtonProps = () => {
                            const { subtask: e } = this.props,
                                [{ navigation_link: t, style: s } = {}, { navigation_link: n, style: a } = {}, { navigation_link: i, style: o } = {}] = e.buttons || [],
                                r = t || e.primary_action_link,
                                c = s || e.primary_action_style,
                                l = { actionLabel: r.label || "", actionType: c && (0, y.$1)(c), onAction: r && this._handleCtaClick(r) },
                                h = n || e.secondary_action_link,
                                d = a || e.secondary_action_style;
                            return { ...l, ...{ secondaryActionLabel: h ? h.label : void 0, secondaryActionType: d && (0, y.$1)(d), onSecondaryAction: h && this._handleCtaClick(h) }, ...{ tertiaryActionLabel: (i || {}).label, tertiaryActionType: o && (0, y.$1)(o), onTertiaryAction: i && this._handleCtaClick(i) } };
                        }),
                        (this._getCtaText = () => {
                            const {
                                onNavigate: e,
                                subtask: { detail_text: t, header: s, primary_text: i, secondary_text: o },
                                subtaskInputs: r,
                            } = this.props;
                            return { primaryText: a.createElement(C.Z, (0, n.Z)({}, (s && s.primary_text) || i, { id: _.Q_, onNavigate: e, subtaskInputs: r })), secondaryText: s || o ? a.createElement(C.Z, (0, n.Z)({}, (s && s.secondary_text) || o, { onNavigate: e, subtaskInputs: r })) : null, detailText: t ? a.createElement(C.Z, (0, n.Z)({}, t, { onNavigate: e, subtaskInputs: r })) : null };
                        }),
                        (this._handleCtaClick = (e) => () => {
                            const { onNavigate: t, subtaskId: s, updateFlow: n } = this.props;
                            n(s, { link: e.link_id }), t(e);
                        });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: _ } = this.props,
                        { onBackClick: C } = t,
                        { detailText: y, primaryText: x, secondaryText: v } = this._getCtaText(),
                        S = p.ZP.isDesktopOS(),
                        Z = s.style === m.aD.HalfCover;
                    let f, I;
                    const w = (s.header && s.header.header_image) || s.header_image;
                    if (w) {
                        const e = w.image.image_info,
                            t = w.image_type === m.__.FullBleedTop,
                            s = S && t ? o.Z.exact(e.width / e.height) : void 0,
                            n = { url: e.url, height: e.height, width: e.width };
                        (f = ({ style: t }) => a.createElement(i.Z, { style: t }, a.createElement(r.Z, { "aria-label": e.alt_text || "", aspectMode: s, image: n }))), (I = t ? "illustrationFullWidth" : "illustration");
                    } else Z && (I = "none");
                    const T = !("illustrationFullWidth" === I && S),
                        E = { children: a.createElement(b.Z, { onNavigate: e, subtaskInputs: _, user: s.header?.user }), footer: y, graphic: f, graphicDisplayMode: I, headline: x, onClose: u.Z, primaryButtonTestID: g, subtext: v, withBottomPadding: T, withCloseButton: !1, ...this._getCtaButtonProps() };
                    return Z
                        ? a.createElement(c.ZP, null, ({ windowWidth: e }) => {
                              const t = e > l.default.theme.breakpoints.medium;
                              return a.createElement(h.Z, { type: t ? "center" : "bottom", withMask: !0 }, a.createElement(d.Z, E));
                          })
                        : a.createElement(k.Z, (0, n.Z)({ hideAppBar: !C, hideLogo: !0 }, t), a.createElement(d.Z, E), this.props.errorDialog);
                }
            }
        },
        514735: (e, t, s) => {
            s.d(t, { Z: () => p });
            var n = s(202784),
                a = s(290402),
                i = s(443781),
                o = s(311314),
                r = s(71620),
                c = s(668214),
                l = s(454319),
                h = s(312771);
            const d = (0, c.Z)()
                .propsFromState(() => ({ fetchStatus: l.UD, multiAccountUsers: l.pc }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerMultiListFetch: (0, r.zr)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"), fetchMultiAccountListIfNeeded: l.s2 }))
                .adjustStateProps(({ fetchStatus: e, multiAccountUsers: t }) => ({ fetchStatus: e === h.ZP.NONE ? h.ZP.LOADING : e, multiAccountUsers: t }));
            class u extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { multiAccountUsers: e, onNavigate: t, subtask: s, subtaskId: a, updateFlow: i } = this.props,
                                { false_link: r, true_link: c, user_id: l } = s,
                                h = e.filter((e) => e.user_id === l).length > 0;
                            return n.createElement(o.Z, { navigationLink: h ? c : r, onNavigate: t, subtaskAction: () => (i(a, { link: h ? c.link_id : r.link_id }), Promise.resolve()), subtaskId: a });
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandlerMultiListFetch: e, fetchMultiAccountListIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    const { loggedInUserId: e } = this.context;
                    e && this._handleFetch();
                }
                render() {
                    const { errorDialog: e, fetchStatus: t } = this.props,
                        { loggedInUserId: s } = this.context;
                    return e || (s ? n.createElement(a.Z, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }) : this._render());
                }
            }
            u.contextType = i.rC;
            const p = d(u);
        },
        848055: (e, t, s) => {
            s.d(t, { Z: () => N });
            var n = s(807896),
                a = s(202784),
                i = s(325686),
                o = s(242454),
                r = s(371344),
                c = s(96083),
                l = s(97272),
                h = s(525754),
                d = s(392237),
                u = s(956272),
                p = s(370751),
                _ = s(227991),
                m = s(663951),
                k = s(280947),
                C = s(975364),
                b = s(153925),
                y = s(674132),
                g = s.n(y),
                x = s(804027),
                v = s(263578),
                S = s(876401),
                Z = s(394526);
            const f = g().c3d89aca;
            const I = d.default.create((e) => ({ radioContainer: { paddingHorizontal: 0 } })),
                w = function (e) {
                    const { choices: t, header: s, nextLink: n, onDismiss: i, onSelect: o } = e,
                        [r, c] = a.useState(t[0]?.id),
                        l = a.useMemo(() => ({ header_components: (0, Z.b)(s), footer_components: [(0, S.gu)("primary_select_next", { button_label: { text: n?.label ?? f }, link: n, button_appearance: { style: x.ZJ.Primary, preferred_size: x.qE.Large } })], primary_next_identifier: "primary_select_next" }), [n, s]),
                        d = a.useCallback(() => (o(r), !0), [o, r]);
                    return a.createElement(v.Z, { componentCollection: l, coverType: "half", onBackPress: i, onPrimaryAction: d }, a.createElement(h.Z, { name: "primary-selection", onChange: (e, t) => c(t), options: t.map(({ id: e, subtext: t, text: s }) => ({ label: s.text, value: e, description: t?.text, containerStyle: I.radioContainer })), value: r }));
                },
                T = "ChoiceSelectionInput",
                E = "ChoiceSelectionNextButton",
                A = "ChoiceSelectionSkipButton";
            class N extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { selectedChoices: (0, b.OG)(this.props.subtaskInputs, { key: "selected_choices", subtask_id: this.props.subtaskId }) ?? this.props.subtask.selected_choices ?? [], prevSubtaskId: this.props.subtaskId, searchText: "", numToShow: this.props.subtask.show_more?.initial_to_show, displayPrimarySelection: !1, primaryChoice: void 0 }),
                        (this._handlePrimarySelection = (e) => {
                            this.setState({ primaryChoice: e, displayPrimarySelection: !1 }, this._handleNextButtonClick);
                        }),
                        (this._handleCancelButtonClick = () => {
                            const {
                                onNavigate: e,
                                subtask: { skip_link: t },
                                subtaskId: s,
                                updateFlow: n,
                            } = this.props;
                            t && (n(s, { link: t.link_id }), e(t));
                        }),
                        (this._handleNextButtonClick = () => {
                            const {
                                    onNavigate: e,
                                    subtask: { next_link: t, primary_selection: s },
                                    subtaskId: n,
                                    updateFlow: a,
                                } = this.props,
                                { primaryChoice: i, selectedChoices: o } = this.state;
                            void 0 !== s && void 0 === i && o.length > 1 ? this.setState({ displayPrimarySelection: !0 }) : t && (a(n, { link: t.link_id, selected_choices: o, primary_choice: void 0 !== s ? (i ?? o[0]) : void 0 }), e(t));
                        }),
                        (this._renderShowMore = (e) => {
                            const { show_more: t } = this.props.subtask,
                                { numToShow: s } = this.state;
                            return void 0 === t || void 0 === s || s >= e.length ? null : a.createElement(o.Z, { color: "primary", label: t.text, onPress: this._handleShowMore });
                        }),
                        (this._handleShowMore = () => {
                            const { numToShow: e } = this.state,
                                { show_more: t } = this.props.subtask;
                            void 0 !== t && void 0 !== e && this.setState({ numToShow: e + t.extra_to_show });
                        }),
                        (this._handleRadioChange = (e, t) => {
                            this.setState({ selectedChoices: [t] });
                        }),
                        (this._handleSearchTextChange = (e) => {
                            this.setState({ searchText: e.target.value });
                        }),
                        (this._handleSearchTextClear = () => {
                            this.setState({ searchText: "" });
                        }),
                        (this._onCheckboxChange = (e) => (t) => {
                            this._handleMultiSelection(e, t);
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    return e.subtaskId !== t.prevSubtaskId ? { selectedChoices: [], prevSubtaskId: e.subtaskId } : null;
                }
                render() {
                    const {
                            onNavigate: e,
                            passthroughOcfScreenProps: t,
                            subtask: { choices: s, detail_text: o, header: c, next_link: l, primary_selection: h, primary_text: d, search: p, secondary_text: b, skip_link: y },
                            subtaskInputs: g,
                        } = this.props,
                        { displayPrimarySelection: x, searchText: v, selectedChoices: S } = this.state;
                    return a.createElement(k.Z, (0, n.Z)({}, t, { footer: a.createElement(_.ZP, { actionDisabled: !this._verifyBothTypesValidity(), actionLabel: l?.label, actionTestID: E, onAction: this._handleNextButtonClick, onSecondaryAction: this._handleCancelButtonClick, secondaryActionLabel: y?.label, secondaryActionTestID: A }), header: a.createElement(m.Z, { header: c, onNavigate: e, primaryTextProp: d, secondaryTextProp: b, subtaskInputs: g, withHeaderImage: !0 }), providePadding: !0 }), p && a.createElement(r.Z, { Icon: u.default, autoFocus: p.is_focused, isCompact: !0, onChange: this._handleSearchTextChange, onClear: this._handleSearchTextClear, placeholder: p.hint_text, style: B.searchBox, testID: T, value: v, withClearButton: !0 }), a.createElement(i.Z, { style: B.choicesContainer }, this._renderChoices()), o && a.createElement(C.Z, (0, n.Z)({}, o, { onNavigate: e, subtaskInputs: g })), x && h ? a.createElement(w, { choices: s?.filter(({ id: e }) => S.includes(e)), header: h.header, nextLink: l, onDismiss: () => this.setState({ displayPrimarySelection: !1 }), onNavigate: e, onSelect: this._handlePrimarySelection, subtaskInputs: g }) : null);
                }
                _renderCheckboxQuestion(e) {
                    const { onNavigate: t, subtaskInputs: s } = this.props,
                        { selectedChoices: o } = this.state,
                        r = o.indexOf(e.id) > -1,
                        l = e.text ? a.createElement(C.Z, (0, n.Z)({}, e.text, { onNavigate: t, subtaskInputs: s, weight: "bold" })) : null,
                        h = e.subtext ? a.createElement(C.Z, (0, n.Z)({}, e.subtext, { subtaskInputs: s })) : null;
                    return e.text ? a.createElement(i.Z, { key: e.id, style: B.checkboxRow }, a.createElement(c.Z, { checked: r, helpText: h, label: l, onChange: this._onCheckboxChange(e.id) })) : null;
                }
                _renderChoices() {
                    const { onNavigate: e, subtask: t, subtaskInputs: s } = this.props,
                        { search: o, selection_type: r, style: c } = t,
                        { numToShow: d, searchText: u } = this.state,
                        { choices: _ } = (function (e, t) {
                            const { choices: s, search: n, sections: a } = e;
                            if (n && a && a.length && !t) {
                                const e = a.flatMap((e) => e.item_ids).filter((e) => "string" == typeof e);
                                if (e.length) {
                                    const t = (0, p.Z)(e);
                                    return { choices: s.filter((e) => t.has(e.id)), hasMore: !0 };
                                }
                            }
                            if (n && t)
                                return (function (e, t) {
                                    const s = P(t),
                                        n = e.filter((e) => P(e.text.text).includes(s));
                                    if (n.length > 50) return { choices: n.slice(0, 50), hasMore: !0 };
                                    return { choices: n, hasMore: !1 };
                                })(s, t);
                            return { choices: s, hasMore: !1 };
                        })(t, u),
                        m = void 0 === d ? _ : _.slice(0, d),
                        k = this._renderShowMore(_);
                    if (0 === m.length && o) return a.createElement(C.Z, (0, n.Z)({}, o.no_results_text, { onNavigate: e, subtaskInputs: s }));
                    if ("boxed" === c) return "single_select" === r ? a.createElement(i.Z, { style: B.tileContainer }, a.createElement(l.Z, { name: "single-choice", onChange: this._handleRadioChange, options: m.map(({ id: e, subtext: t, text: i }) => ({ value: e, label: i.text, helpText: a.createElement(C.Z, (0, n.Z)({}, t, { subtaskInputs: s })) })), value: this.state.selectedChoices[0] }), k) : null;
                    switch (r) {
                        case "multi_select":
                            return a.createElement(
                                a.Fragment,
                                null,
                                m.map((e) => this._renderCheckboxQuestion(e)),
                                k,
                            );
                        case "single_select":
                            return a.createElement(a.Fragment, null, a.createElement(h.Z, { name: "single-choice", onChange: this._handleRadioChange, options: m.map(({ id: e, subtext: t, text: s }) => ({ label: s.text, value: e, description: t?.text, containerStyle: B.radioRow })), value: this.state.selectedChoices[0] }), k);
                        default:
                            return null;
                    }
                }
                _verifyBothTypesValidity() {
                    const { subtask: e } = this.props,
                        { selection_type: t } = e,
                        { selectedChoices: s } = this.state;
                    if (e && t) {
                        if ("multi_select" === t) return this._verifyMultiChoiceValidity(s);
                        if ("single_select" === t) return 1 === s.length;
                    }
                }
                _verifyMultiChoiceValidity(e) {
                    const { subtask: t } = this.props,
                        { next_link_options: s } = t;
                    if (s) {
                        const { max_enable_count: t, min_enable_count: n } = s,
                            a = e.length;
                        return !(n && a < n) && !(t && a > t);
                    }
                    return !1;
                }
                _handleMultiSelection(e, t) {
                    const { selectedChoices: s } = this.state;
                    let n;
                    (n = s && s.includes(e) ? s.filter((t) => t !== e) : s.concat([e])), this.setState({ selectedChoices: n });
                }
            }
            function P(e) {
                return e.toLowerCase().normalize("NFD");
            }
            const B = d.default.create((e) => ({ searchBox: { marginBottom: e.spaces.space16 }, checkboxRow: { paddingVertical: e.spaces.space12 }, choicesContainer: { marginBottom: e.spaces.space16 }, cursor: { cursor: "pointer" }, tileContainer: { marginTop: e.spaces.space12 }, radioRow: { paddingStart: 0, paddingBottom: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
        },
        77976: (e, t, s) => {
            s.d(t, { Z: () => C });
            var n = s(807896),
                a = s(202784),
                i = s(946847),
                o = s(516951),
                r = s(163889),
                c = s(725516),
                l = s(280947),
                h = s(975364),
                d = s(871176),
                u = s(71620),
                p = s(668214);
            const _ =
                    (e) =>
                    (t, s, { api: n }) =>
                        n.withEndpoint(d.Z).uploadAddressBook(e),
                m = (0, p.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("CONTACTS_SYNC"), uploadAddressBook: _ }));
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleCtaClick = (e) => {
                            const { onNavigate: t, subtaskId: s, updateFlow: n } = this.props;
                            n(s, { link: e.link_id }), t(e);
                        }),
                        (this._handlePrimaryActionClick = () => {
                            try {
                                window.navigator.contacts.select(["name", "email", "tel"], { multiple: !0 }).then(this._handleContactResults);
                            } catch (e) {
                                (0, r.ZP)(e), this._handleSecondaryActionClick();
                            }
                        }),
                        (this._handleContactResults = (e) => {
                            const { analytics: t, createLocalApiErrorHandler: s, uploadAddressBook: n } = this.props,
                                a = e.map(({ email: e, name: t, tel: s }) => ({ name: t[0] || "", email_addresses: e, phone_numbers: s }));
                            if (0 === a.length) return t.scribeAction("cancel");
                            t.scribe({ action: "success", data: { event_value: a.length } }), n({ contacts: a }).catch(s()), this._handleCtaClick(this.props.subtask.next_link);
                        }),
                        (this._handleSecondaryActionClick = () => {
                            const {
                                subtask: { skip_link: e },
                            } = this.props;
                            e && this._handleCtaClick(e);
                        });
                }
                componentDidMount() {
                    ("contacts" in navigator && "ContactsManager" in window) || this._handleSecondaryActionClick();
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: s, subtaskInputs: r } = this.props,
                        c = s.detail_text ? a.createElement(h.Z, (0, n.Z)({}, s.detail_text, { onNavigate: e, subtaskInputs: r })) : null;
                    return a.createElement(l.Z, (0, n.Z)({ hideLogo: !0 }, t), a.createElement(i.Z, { actionLabel: s.next_link.label || "", footer: c, headline: s.primary_text || "", onAction: this._handlePrimaryActionClick, onClose: o.Z, onTertiaryAction: this._handleSecondaryActionClick, subtext: "", tertiaryActionLabel: (s.skip_link || {}).label, withCloseButton: !1 }));
                }
            }
            const C = (0, c.Z)(m(k), { element: "contacts_sync" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-657ccee8.0585edaa.js.map
