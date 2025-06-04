"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-e019dbda"],
    {
        131364: (e, t, s) => {
            s.d(t, { Z: () => H });
            var o = s(807896),
                i = s(202784),
                n = s(817480),
                r = s(666536),
                a = s(524110),
                l = s(735e3),
                d = s(942893),
                c = s(339110),
                h = s(575211),
                u = s(962741),
                p = s(312771),
                m = s(443781),
                f = (s(136728), s(24949)),
                _ = s(459679),
                g = s(450681),
                y = s(71620),
                w = s(456910),
                v = s(668214),
                I = s(828186),
                x = s(104140),
                C = s(624479),
                b = s(919022);
            const D = [c.my.Users],
                E = (e) => {
                    const { communityId: t, filter: s, query: o, source: i, trustedFriendsId: n } = e;
                    return (0, I.Ol)({ q: o, result_type: (s || D).join(","), src: i }, { communityId: t, trustedFriendsId: n });
                },
                R = (e, t) => {
                    const s = E(t);
                    return (0, I.uD)(e, s);
                },
                Z = (e, t) => {
                    const s = E(t);
                    return (0, I.YN)(e, s);
                },
                P = (e, t) => {
                    const s = E(t);
                    return (0, I.T5)(e, s);
                },
                S = (e, t) => {
                    const s = E(t);
                    return (0, I.dV)(e, s);
                };
            function T(e, t) {
                const s = E(t);
                return (0, I.PG)(e, s);
            }
            const F = (e, t) => (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0);
            const U = () =>
                    (0, f.P1)(
                        Z,
                        (0, f.P1)(
                            (e, t) => t.query,
                            (e, t) => t.filter,
                            x.Sc,
                            x.sM,
                            (e, t, s, o) => {
                                if (!e || !t || t.indexOf(c.my.Users) < 0) return (0, l.o)();
                                const i = (0, x.UA)(s, e);
                                return (0, c.It)(
                                    i
                                        .map((e) => o[e])
                                        .sort(F)
                                        .slice(0, 10),
                                );
                            },
                        ),
                        R,
                        (e, t) => t.injectedItems,
                        (e, t) => t.query,
                        (e, t) => t.getUserExactMatch,
                        (e, t) => t.userLimit,
                        (e, t, s, o, i, n, r) => {
                            const a = (0, _.Z)(o || [], (e) => (e.type === c.El.User ? e.data.id_str : void 0)),
                                d = t.filter((e) => a.indexOf(e.id) < 0),
                                h = e.filter((e) => a.indexOf(e.id) < 0),
                                u = (0, w.sY)(d, h).slice(0, r || 10),
                                m = s === p.ZP.LOADED,
                                f = n && n({ query: i, hasResults: !!e.length, isLoaded: m, remoteUsers: e }),
                                g = f ? [...u, f] : u;
                            return { users: g.length ? g : (0, l.o)(), userExactMatch: f, filteredPrefetchUsers: d, filteredRemoteUsers: h };
                        },
                    ),
                N = () =>
                    (0, f.P1)(
                        (0, f.P1)(
                            S,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxEvents,
                            (e, t) => t.filter,
                            (e, t, s, o, i) => {
                                const n = s && i && i.indexOf(c.my.Events) >= 0,
                                    r = e.slice(0, o || 1);
                                return r.length && n ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            T,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxLists,
                            (e, t) => t.filter,
                            (e, t, s, o, i) => {
                                const n = s && i && i.indexOf(c.my.Lists) >= 0,
                                    r = e.slice(0, o || 5);
                                return r.length && n ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            P,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxTopics,
                            (e, t) => t.getTopicExactMatch,
                            (e, t, s, o, i) => {
                                const n = t === p.ZP.LOADED,
                                    r = i && i({ query: s, hasResults: !!e.length, isLoaded: n }),
                                    a = e.slice(0, o || 3);
                                return r && a.push(r), a.length ? a : (0, l.o)();
                            },
                        ),
                        U(),
                        (e, t) => t.injectedItems,
                        (e, t, s, o, i) => {
                            const { users: n } = o,
                                r = i && i.length ? i : null;
                            return e.length || t.length || s.length || n.length ? (0, g.Z)([r, e.length ? e : void 0, s.length ? s : void 0, n.length ? n : void 0, t.length ? t : void 0]) : r ? [r] : (0, l.o)();
                        },
                    ),
                L = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: R, items: N() }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT"), fetchTypeaheadIfNeeded: I.o4, fetchUsersIfNeeded: b.ZP.fetchManyIfNeeded, fetchUsersPresenceIfNeeded: C.ZP.fetchManyIfNeeded, prefetchTypeaheadUsersIfNeeded: x.zP }))
                    .withAnalytics({ element: "typeahead" });
            class k extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchUsersIfNeeded = (e = []) => {
                            const { fetchUsersIfNeeded: t, items: s, source: o } = this.props;
                            if (this.context.featureSwitches.isTrue("follow_nudge_search_enabled") && this.context.loggedInUserId && o === c._4.SearchBox) {
                                const o = (0, n.Z)(e)
                                        .filter((e) => e.type === u.ZP.User)
                                        .map((e) => e.id),
                                    i = (0, n.Z)(s)
                                        .filter((e) => e.type === u.ZP.User)
                                        .filter((e) => !o.includes(e.id))
                                        .map((e) => e.id);
                                i?.length && t(i);
                            }
                        }),
                        (this._fetchTypeaheadResultsIfNeeded = (e) => {
                            const t = this.context.featureSwitches.isTrue("c9s_community_composer_hashtag_suggestions_enabled");
                            e.query && e.fetchTypeaheadIfNeeded({ q: e.query, src: e.source, result_type: e.filter.join(","), context_text: e.contextText, topic_type: e.topicType, context_community_id: t ? e.communityId : void 0 }, { communityId: e.communityId, trustedFriendsId: e.trustedFriendsId }).catch(e.createLocalApiErrorHandler({}));
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { analytics: s, onItemClick: o, query: i } = this.props;
                            o(e, t);
                            const n = d.Z.forTypeaheadResult(e, t),
                                r = n ? [n] : void 0;
                            s.scribe({ action: "click", data: { search_details: { query: i }, targets: r } });
                        }),
                        (this._scribeResults = () => {
                            const { analytics: e, items: t, query: s } = this.props;
                            e.scribe({ action: "impression", data: { items: d.Z.forTypeaheadResults(t), search_details: { query: s } } });
                        }),
                        (this._debouncedFetchTypeaheadResultsIfNeeded = (0, r.Z)(this._fetchTypeaheadResultsIfNeeded, 250)),
                        (this.state = { shouldShowPrefetchResults: !0 }),
                        (this._previouslyLoadedResults = (0, l.o)());
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, prefetchTypeaheadUsersIfNeeded: t } = this.props;
                    this._debouncedFetchTypeaheadResultsIfNeeded(this.props), t().catch(e({})), this._fetchUsersIfNeeded();
                }
                componentWillUnmount() {
                    clearTimeout(this._prefetchResultsTimer);
                }
                componentDidUpdate(e) {
                    const { createLocalApiErrorHandler: t, domId: s, fetchUsersPresenceIfNeeded: o, filter: i, items: r, onItemsChanged: a, query: l, shouldDeferPrefetch: d, source: c } = this.props,
                        { filter: m, query: f, source: _ } = e,
                        { loggedInUserId: g } = this.context,
                        y = this.context.featureSwitches.isTrue("voice_rooms_typeahead_audiospace_ring_enabled") && g;
                    if (r?.length && r !== e.items) {
                        if ((this._scribeResults(), a)) {
                            let e = !1;
                            const t = s ? document.getElementById(s) : null;
                            t && t.scrollHeight > t.offsetHeight && (e = !0), a(r, e);
                        }
                        if (y) {
                            const e = (0, n.Z)(r)
                                .filter((e) => e.type === u.ZP.User)
                                .map((e) => e.id);
                            e && o(e).catch(t({}));
                        }
                        this._fetchUsersIfNeeded(e.items);
                    }
                    e.fetchStatus === p.ZP.LOADED && (this._previouslyLoadedResults = e.items),
                        (l === f && i === m && c === _) ||
                            (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                            d &&
                                (clearTimeout(this._prefetchResultsTimer),
                                this.setState({ shouldShowPrefetchResults: !1 }),
                                (this._prefetchResultsTimer = setTimeout(() => {
                                    this.props.query && this.props.fetchStatus !== p.ZP.LOADED && this.setState({ shouldShowPrefetchResults: !0 });
                                }, h.n))));
                }
                render() {
                    const { analytics: e, communityId: t, contextText: s, createLocalApiErrorHandler: n, dropdownRef: r, fetchStatus: l, fetchTypeaheadIfNeeded: d, fetchUsersIfNeeded: c, fetchUsersPresenceIfNeeded: h, filter: u, getTopicExactMatch: m, getUserExactMatch: f, injectedItems: _, items: g, maxEvents: y, maxLists: w, maxTopics: v, onItemClick: I, onItemsChanged: x, prefetchTypeaheadUsersIfNeeded: C, query: b, shouldDeferPrefetch: D, topicType: E, trustedFriendsId: R, userLimit: Z, ...P } = this.props,
                        S = b && l !== p.ZP.LOADED;
                    let T;
                    return (T = S ? (this.state.shouldShowPrefetchResults && g.length ? g : this._previouslyLoadedResults) : g), i.createElement(a.Z, (0, o.Z)({}, P, { isLoading: !!S, items: T, onItemClick: this._handleItemClick, query: b, ref: r }));
                }
            }
            (k.contextType = m.rC), (k.defaultProps = { filter: [c.my.Users], injectedItems: [], maxEvents: 3, maxLists: 3, maxTopics: 1 });
            const O = i.forwardRef((e, t) => i.createElement(k, (0, o.Z)({}, e, { dropdownRef: t }))),
                H = L.forwardRef(O);
        },
        874088: (e, t, s) => {
            s.r(t), s.d(t, { TypeaheadInput: () => D, default: () => R, styles: () => E });
            var o = s(807896),
                i = s(202784),
                n = s(325686),
                r = s(424028),
                a = s(371344),
                l = s(392237),
                d = s(567447),
                c = s(537392),
                h = s(111677),
                u = s.n(h),
                p = s(956272),
                m = s(323265),
                f = s(649872),
                _ = s(110548),
                g = s(655352),
                y = s(530745),
                w = s(339110),
                v = s(456910),
                I = s(443781),
                x = s(131364);
            const C = u().f065ba8c;
            let b = 1;
            class D extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = ({ containerWidth: e }) => {
                            const { alwaysOpen: t, disableClearButton: s, inputStyle: l, isCompact: d, isOnHomepage: c, placeholder: h, renderCustomInput: u, renderInSearchField: m, rounded: _, shouldAutoFocus: g, shouldFocusOnClear: y, style: w, testID: v } = this.props,
                                I = this.state.showTypeaheadDropdown || t,
                                x = { Icon: p.default, ariaActiveDescendant: this.state.ariaDescendantId, ariaAutocomplete: "list", ariaExpanded: I, ariaLabel: C, ariaOwns: this._dropdownDomId, ariaRole: "combobox", autoComplete: "off", autoCorrect: !1, autoFocus: g, contentBelow: m && m(), focusOnClear: y, isCompact: d, leftAligned: c, onBlur: this._handleInputBlur, onChange: this._handleInputChange, onClear: this._handleInputClear, onFocus: this._handleInputFocus, onLayout: this._handleInputLayoutChanged, placeholder: h, returnKeyType: "search", spellCheck: "false", styleType: _ ? "pill" : "selection", testID: v, value: this.state.query, withClearButton: !s && this.state.showTypeaheadDropdown };
                            return i.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setRootContainerNode, style: [E.root, w] }, i.createElement(r.Z, { onKeyDown: this._handleKeyDown, style: E.keydownInputListener }, i.createElement(f.Z, { "aria-label": h, onSubmit: this._handleFormSubmit, role: "search", style: E.wrapper }, i.createElement(n.Z, { ref: this._setInputContainerNode, style: l }, u ? u({ ...x, handleReturn: this._handleRichTextInputReturn }) : i.createElement(a.Z, (0, o.Z)({}, x, { ref: this._setInputRef }))), i.createElement(n.Z, { style: [E.typeaheadContainer, !_ && E.topBorder] }, I ? this._renderDropdown(e) : null))));
                        }),
                        (this._renderDropdown = (e) => {
                            const { communityId: t, filter: s, getItemDisabledMessage: o, getItemIsDisabled: n, getTopicExactMatch: r, getUserDisplayNameLabel: a, getUserDisplayNameType: d, getUserExactMatch: c, injectedItems: h, isModal: u, isOnHomepage: p, maxEvents: m, maxLists: f, maxTopics: _, onItemsChanged: y, renderAvatarDecoration: w, renderCallout: I, renderCustomDropdown: C, renderEmptyState: b, renderHeader: D, renderNoResultsState: R, renderUserDecoration: Z, selectedItems: P, shouldDeferPrefetch: S, source: T, trustedFriendsId: F, userLimit: U, withFixedPositioning: N, withSectionDivider: L, withUserHoverCard: k } = this.props,
                                O = e >= l.default.theme.breakpoints.medium || (0, g.ZP)(),
                                { dropdownOffset: H, query: A } = this.state,
                                M = u ? E.modalDropdown : [E.dropdown, !O && N && H ? [(0, v.xX)(H), { height: `calc(100vh - ${H}px)` }] : null, (O || p) && E.wideModeDropdown, p && E.shortModeDropdown, !O && p && E.shortModeDropdownMobile],
                                B = { ariaDescendantId: this.state.ariaDescendantId, domId: this._dropdownDomId, onDismiss: this._handleOnEmptyStateDismiss, onItemFocusChanged: this._handleItemFocusChanged, ref: this._handleDropdownRef, style: M },
                                q = { ariaDescendantId: this.state.ariaDescendantId, communityId: t, domId: this._dropdownDomId, filter: s, getItemDisabledMessage: o, getItemIsDisabled: n, getTopicExactMatch: r, getUserDisplayNameType: d, getUserDisplayNameLabel: a, getUserExactMatch: c, injectedItems: h, maxEvents: m, maxLists: f, maxTopics: _, onItemClick: this._handleItemClick, onItemFocusChanged: this._handleItemFocusChanged, onItemsChanged: y, query: A, ref: this._handleDropdownRef, renderAvatarDecoration: w, renderCallout: I, renderHeader: D, renderNoResultsState: R, renderUserDecoration: Z, selectedItems: P, shouldDeferPrefetch: S, source: T, style: M, trustedFriendsId: F, userLimit: U, withSectionDivider: L, withUserHoverCard: k };
                            return b && !A ? b(B) : C ? C(q) : i.createElement(x.Z, q);
                        }),
                        (this._dismissDropdown = () => {
                            this.setState({ showTypeaheadDropdown: !1 }), this.props.onDismiss && this.props.onDismiss();
                        }),
                        (this._handleOnEmptyStateDismiss = () => {
                            this._dismissDropdown(), this._inputRef && this._inputRef.blur();
                        }),
                        (this._handleLayout = () => {
                            this._updatePosition();
                        }),
                        (this._handleInputLayoutChanged = () => {
                            this._updatePosition();
                        }),
                        (this._updatePosition = () => {
                            if (!this._inputContainerNode) return;
                            const { bottom: e } = this._inputContainerNode.getBoundingClientRect();
                            e !== this.state.dropdownOffset && this.setState({ dropdownOffset: e });
                        }),
                        (this._handleDropdownRef = (e) => {
                            this._dropdownRef = e;
                        }),
                        (this._setRootContainerNode = (e) => {
                            this._rootContainerNode = e || null;
                        }),
                        (this._setInputRef = (e) => {
                            (this._inputRef = e), this._activeChildRef || (this._activeChildRef = e);
                        }),
                        (this._setInputContainerNode = (e) => {
                            (this._inputContainerNode = e || null), this._inputContainerNode && this._updatePosition();
                        }),
                        (this._handleFocusChange = (e) => {
                            const t = 0 + (this.props.isInModal ? 1 : 0),
                                s = d.Z.getCount() > t;
                            (this._rootContainerNode && this._rootContainerNode.contains(e.target)) || s || (this.state.showTypeaheadDropdown && this._dismissDropdown());
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t, shiftKey: s } = e,
                                { alwaysOpen: o } = this.props,
                                { showTypeaheadDropdown: i } = this.state;
                            if ((0, v.kE)(e))
                                if (t !== y.Dd) {
                                    if (this.state.inputHasFocus) return t === y.WX ? (this._focusNext(), void e.preventDefault()) : t === y.kl ? (this._focusPrevious(), void e.preventDefault()) : t === y.nQ && !o && i ? (this._dismissDropdown(), void e.preventDefault()) : t === y.NW && this._hasFocusedItem() ? (this._selectFocusedItem(), void e.preventDefault()) : void ((t !== y.jF && t !== y.Ci) || !this._deleteFocusedItem() ? i || this.setState({ showTypeaheadDropdown: !0 }) : e.preventDefault());
                                } else {
                                    const t = (s && this._navigatePrevious()) || (!s && this._navigateNext());
                                    t ? ((this._activeChildRef = t), e.preventDefault(), t.focus()) : this._dismissDropdown();
                                }
                        }),
                        (this._handleItemFocusChanged = () => {
                            this.setState({ ariaDescendantId: (0, v.A1)() });
                        }),
                        (this._handleInputClear = () => {
                            this.setQuery("");
                        }),
                        (this._handleInputBlur = () => {
                            this.setState({ inputHasFocus: !1 }), this.props.onBlur && this.props.onBlur();
                        }),
                        (this._handleInputFocus = () => {
                            (this._activeChildRef = this._inputRef), this.setState({ inputHasFocus: !0, showTypeaheadDropdown: !0 }), this._updatePosition(), this.props.onFocus && this.props.onFocus();
                        }),
                        (this._handleRichTextInputReturn = (e) => (e.shiftKey ? "not-handled" : (this._hasFocusedItem() || this._handleFormSubmit(e), "handled"))),
                        (this._handleInputChange = (e) => {
                            this.setQuery(e.target.value), this._updatePosition();
                        }),
                        (this._handleFormSubmit = (e) => {
                            e.preventDefault(), e.stopPropagation(), this._inputRef && this._inputRef.blur(), this.setState({ showTypeaheadDropdown: !1 }), this.props.onDismiss && this.props.onDismiss(), this.props.onSubmit && this.props.onSubmit();
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { onDismiss: s, onItemClick: o, shouldClearOnSelect: i, shouldFocusOnClear: n } = this.props,
                                r = i ? "" : this.state.query;
                            this.setState({ showTypeaheadDropdown: !1 }), this._inputRef && (i && n ? this._inputRef.focus() : this._inputRef.blur()), this.setQuery(r), s && s(), o && o(e, t);
                        }),
                        (this._hasFocusedItem = () => this._dropdownRef && this._dropdownRef.hasFocusedItem()),
                        (this._deleteFocusedItem = () => !!(this._dropdownRef && this._dropdownRef.deleteFocusedItem && this._dropdownRef.hasFocusedItem() && this._dropdownRef.deleteFocusedItem())),
                        (this._selectFocusedItem = () => {
                            this._dropdownRef && this._dropdownRef.selectFocusedItem();
                        }),
                        (this._focusNext = () => {
                            this._dropdownRef && this._dropdownRef.focusNext();
                        }),
                        (this._focusPrevious = () => {
                            this._dropdownRef && this._dropdownRef.focusPrevious();
                        }),
                        (this._navigateNext = () => {
                            if (this._dropdownRef && this._dropdownRef.navigateNext) return this._dropdownRef.navigateNext();
                        }),
                        (this._navigatePrevious = () => {
                            if (!this.state.inputHasFocus && this._dropdownRef && this._dropdownRef.navigatePrevious) return this._dropdownRef.navigatePrevious() || this._inputRef;
                        }),
                        (this.state = { ariaDescendantId: (0, v.A1)(), inputHasFocus: !1, query: e.initialValue, showTypeaheadDropdown: !1 }),
                        (this._dropdownDomId = `typeaheadDropdown-${b}`),
                        (b += 1);
                }
                componentDidUpdate(e) {
                    this.props.initialValue !== e.initialValue && this.setQuery(this.props.initialValue);
                }
                componentDidMount() {
                    window.document.addEventListener("click", this._handleFocusChange, !0);
                }
                componentWillUnmount() {
                    window.document.removeEventListener("click", this._handleFocusChange, !0);
                }
                render() {
                    return i.createElement(c.ZP, null, this._render);
                }
                focus() {
                    this._activeChildRef && this._activeChildRef.focus();
                }
                setQuery(e) {
                    this.setState({ query: e }), this.props.onQueryChange && this.props.onQueryChange(e);
                }
            }
            (D.defaultProps = { disableClearButton: !1, filter: [w.my.Users, w.my.Topics], initialValue: "", withSectionDivider: !0, withUserHoverCard: !1 }), (D.contextType = I.rC);
            const E = l.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative", zIndex: _.R0 + 1 }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1, width: "100%" }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: m.ZP.isIOS() ? "auto" : "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, shortModeDropdown: { minHeight: 100, maxHeight: "35vh", paddingBottom: "0" }, shortModeDropdownMobile: { position: "absolute", height: "40vh", top: 0 }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small } })),
                R = D;
        },
        120428: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                i = s(325686),
                n = s(530525),
                r = s(439592),
                a = s(731708);
            function l(e) {
                const { image: t, style: s, supportText: l, title: c } = e;
                return o.createElement(i.Z, { style: [d.root, s] }, o.createElement(i.Z, { style: [d.coverContainer, d.cellThumbnail] }, t ? o.createElement(n.Z, { "aria-label": "", aspectMode: r.Z.SQUARE, image: t }) : null), o.createElement(i.Z, { style: d.bodyColumn }, l ? o.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, l) : null, o.createElement(a.ZP, { numberOfLines: 2, weight: "bold" }, c)));
            }
            const d = s(392237).default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1, flexGrow: 1 }, bodyColumn: { justifyContent: "center", flexDirection: "column", marginEnd: e.spaces.space4, marginStart: e.spaces.space12, flexShrink: 1 }, coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 } }));
        },
        27951: (e, t, s) => {
            s.d(t, { ib: () => re, ZP: () => oe });
            var o = s(202784),
                i = s(325686),
                n = s(952428),
                r = s(731708),
                a = s(392237),
                l = s(58399),
                d = s(913973),
                c = s(339110),
                h = s(443781),
                u = s(823161);
            const p = a.default.create((e) => ({ container: { flexDirection: "row", padding: e.spaces.space8, gap: 4, alignItems: "center" }, name: { flexDirection: "row", alignItems: "center" } })),
                m = ({ name: e, query: t, url: s }) => {
                    const n = o.useCallback(() => {
                        const s = e.split(new RegExp(`(${t})`, "gi"));
                        return o.createElement(
                            o.Fragment,
                            null,
                            s.map((e, s) => o.createElement(r.ZP, { key: s, size: "subtext1", weight: e?.toLowerCase() === t?.toLowerCase() ? "bold" : "normal" }, e)),
                        );
                    }, [e, t]);
                    return o.createElement(i.Z, { style: p.container }, o.createElement(u.default, { shape: "square", size: "medium", uri: s || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), o.createElement(i.Z, { style: p.name }, n()));
                };
            var f = s(872405),
                _ = s(503115),
                g = s(255534),
                y = s(297436),
                w = s(668214),
                v = s(182991),
                I = s(919022);
            const x = (e, t) => t.conversationId,
                C = (e, t) => (0, v.x)(e, x(0, t)),
                b = (0, w.Z)()
                    .propsFromState(() => ({ conversationId: x, conversation: C, users: I.ZP.selectAll }))
                    .adjustStateProps(({ conversation: e, conversationId: t, users: s }) => {
                        const o = { conversation: void 0 };
                        return e?.data && (o.conversation = (0, y.E5)(e.data, void 0, s)), o;
                    }),
                D = a.default.create((e) => ({ root: { cursor: "pointer", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: "32px" }, bodyColumn: { flexGrow: 7, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 } })),
                E = b(({ conversation: e, isDisabled: t, isSelected: s, perspective: i }) => (e ? o.createElement(f.Z, { avatarCell: o.createElement(_.Z, { conversation: e, perspective: i, size: "xLarge" }), avatarCellStyle: D.avatarColumn, avatarSize: "xLarge", cellStyle: D.bodyColumn, style: [D.root, !s && t && D.disabled] }, o.createElement(g.Z, { conversation: e, perspective: i, withParticipantsCount: !0 }), re({ isSelected: s })) : null));
            var R = s(120428),
                Z = s(530525),
                P = s(439592),
                S = s(470397),
                T = s(642153);
            function F(e) {
                return o.createElement(i.Z, { style: U.container }, o.createElement(i.Z, { style: U.imageContainer }, o.createElement(Z.Z, { "aria-label": "", aspectMode: P.Z.SQUARE, image: e.image })), o.createElement(i.Z, { style: U.bodyContainer }, o.createElement(S.Z, null, o.createElement(r.ZP, { numberOfLines: 1, size: "body", weight: "bold" }, e.name), o.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.secondaryContext)), o.createElement(i.Z, { style: U.row }, o.createElement(T.Z, { style: U.facepile, userAvatarSize: "small", userAvatarUrls: e.facepileUrls, withIncreasedSpacing: !0 }), o.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.primaryContext))));
            }
            const U = a.default.create((e) => ({ bodyContainer: { flexShrink: 1 }, container: { flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, facepile: { marginEnd: e.spaces.space4 }, imageContainer: { borderRadius: e.borderRadii.medium, height: e.spaces.space40, marginEnd: e.spaces.space12, overflow: "hidden", width: e.spaces.space40 }, row: { flexDirection: "row" } }));
            var N = s(354149),
                L = s(909377),
                k = s(452693),
                O = s(264398),
                H = (s(136728), s(925885));
            const A = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, context: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.primary, height: e.fontSizes.subtext2, paddingEnd: e.spaces.space4, width: e.fontSizes.subtext2 }, disabled: { backgroundColor: e.colors.gray0 }, searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: "none" }, searchIconCell: { flexDirection: "row", alignItems: "center" }, wrapperCellStyle: { justifyContent: "center" } })),
                M = function (e) {
                    const { isDisabled: t, query: s, resultContext: n, showIcon: a, style: l, topic: d } = e,
                        c = (function (e, t) {
                            const s = (0, H.Z)(e),
                                o = e.toLowerCase().indexOf(t.toLowerCase()),
                                i = o + t.length;
                            let n;
                            if (0 === s.length) {
                                const t = [o > 0 ? [0, o] : void 0, [i, e.length]].filter(Boolean);
                                n = [{ highlights: -1 !== o ? t : void 0, text: e, entityType: "text", prefix: "", indices: [0, e.length] }];
                            } else {
                                const t = s.flatMap(({ indices: t }, s, o) => {
                                    const i = 0 === s ? 0 : o[s - 1].indices[1],
                                        n = s === o.length - 1,
                                        r = [];
                                    return i !== t[0] && r.push(e.slice(i, t[0])), r.push(e.substring(t[0], t[1])), n && e.length !== t[1] && r.push(e.slice(t[1])), r;
                                });
                                let r = 0;
                                const a = t.map((e, t, s) => {
                                    r += t > 0 ? s[t - 1].length : 0;
                                    const n = e.length;
                                    return { runningTotal: r, containsQuery: -1 !== o && r + n >= o && r < i };
                                });
                                n = t.map((e, t) => {
                                    const { containsQuery: s, runningTotal: n } = a[t],
                                        r = e.includes("#");
                                    let l, d;
                                    if (s) {
                                        if (s) {
                                            let t = n < o ? o - n : 0,
                                                s = n + e.length < i ? e.length : i - n;
                                            r && ((t -= 1), (s -= 1)), (l = []), t > 0 && l.push([0, t]), s !== e.length - 1 && l.push([s, e.length]);
                                        }
                                    } else l = [[0, e.length]];
                                    return l?.length && (d = l), r ? { highlights: d, text: `${e?.replace("#", "")}`, entityType: "hashtag", prefix: "#", indices: [n, n + e.length] } : { highlights: d, text: e, entityType: "text", prefix: "", indices: [n, n + e.length] };
                                });
                            }
                            return n;
                        })(d, s),
                        h = o.createElement(
                            r.ZP,
                            null,
                            c.map((e, t) => o.createElement(N.ZP, { key: `${e.text}${t}`, part: e })),
                        ),
                        u = "xLarge",
                        p = o.createElement(o.Fragment, null, h, n ? o.createElement(i.Z, { style: A.context }, n && n.types[0] && "followable_topic" === n.types[0].type ? o.createElement(k.default, { style: A.icon }) : null, o.createElement(r.ZP, { color: "gray700" }, n.display_string || " ")) : null);
                    return o.createElement(
                        i.Z,
                        { style: [A.root, t && A.disabled, l] },
                        a
                            ? ((e) => {
                                  const t = o.createElement(L.Z, { Icon: O.default, color: "neutral", size: u, style: A.searchIcon });
                                  return o.createElement(f.Z, { avatarCell: t, avatarCellStyle: A.searchIconCell, avatarSize: u, cellStyle: A.wrapperCellStyle }, e);
                              })(p)
                            : p,
                    );
                };
            var B = s(673510),
                q = s(111677),
                z = s.n(q),
                V = s(788993),
                j = s(624479);
            const G = (e, t) => (0, j.cY)(e, t.userId),
                Q = (0, w.Z)().propsFromState(() => ({ userSpace: G })),
                W = "TypeaheadUser",
                Y = z().ae2205d2,
                $ = z().d960b55c,
                K = z().fd06b02f,
                X = Object.freeze({ num_of_followers: V.Z.Follow, bio: V.Z.TextOnly, location: V.Z.Location, num_tweets: V.Z.NewTweets, follow_relationship: V.Z.Follow, followers_follow: V.Z.Follow, social_proof: V.Z.SocialProof, follow_relationship_mutual_follow: V.Z.FollowMutual, follow_relationship_followed: V.Z.FollowFollowed, follow_relationship_following: V.Z.FollowFollowing, highlighted_label: "HighlightedIcon" });
            class J extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleAvatarClick = () => {
                            const { userSpace: e } = this.props;
                            e || this._handleClick();
                        }),
                        (this._handleClick = () => {
                            const { isDisabled: e, item: t, onItemClick: s } = this.props;
                            s && s(t, !!e);
                        });
                }
                render() {
                    const { affiliateBadgeInfo: e, avatarDecoration: t, avatarUri: s, decoration: i, disabledMessage: n, displayNameLabel: r, displayNameType: a, isBlueVerified: l, isDisabled: d, isProtected: h, isVerified: u, name: p, screenName: m, source: f, userId: _, userSpace: g, verifiedType: y, withHoverCard: w } = this.props,
                        { featureSwitches: v } = this.context,
                        { context: I, highlightedLabel: x } = this._getItemContext(),
                        C = f === c._4.SearchBox,
                        b = g && v.isTrue("voice_rooms_typeahead_audiospace_ring_enabled") ? g : void 0;
                    return b && (b["aria-label"] = K({ screenName: m })), o.createElement(B.ZP, { affiliateBadgeInfo: e, avatarDecoration: t, avatarSize: "xLarge", avatarUri: s, decoration: i, disabledMessage: d ? n : void 0, displayMode: "UserCompact", displayNameLabel: r, displayNameLabelType: a, highlightedLabel: x, isBlueVerified: l, isDisabled: d, isProtected: h, isVerified: u, name: p, onAvatarClick: this._handleAvatarClick, onCellClick: this._handleClick, onScreenNameClick: this._handleClick, presenceIndicator: C ? b : void 0, screenName: m, socialContext: I, testID: W, userId: _, verifiedType: y, withBottomSocialContext: !0, withInteractiveStyling: !1, withLink: w });
                }
                _getItemContext() {
                    const e = this._getResultContext();
                    return { highlightedLabel: e?.highlightedLabel, context: e?.highlightedLabel ? void 0 : e || this._getSocialContext() };
                }
                _getSocialContext() {
                    const { socialContext: e } = this.props;
                    if (!e || !e.following) return;
                    const t = e.followed_by ? Y : $;
                    return { contextType: V.Z.Follow, text: t };
                }
                _getResultContext() {
                    const { resultContext: e } = this.props;
                    if (!e || !e.display_string || !e.types) return;
                    const { display_string: t, icon_url: s, types: o } = e,
                        i = o.length ? o[0].type : void 0,
                        n = i && i in X ? X[i] : V.Z.TextOnly;
                    return { contextType: n, text: t, highlightedLabel: n === X.highlighted_label && s ? { badge: { url: s }, description: t } : void 0 };
                }
            }
            (J.contextType = h.rC), (J.defaultProps = { withHoverCard: !1 });
            const ee = Q.forwardRef(J),
                te = "typeaheadResult",
                se = ({ children: e }) => e;
            function oe(e) {
                return o.createElement(se, { item: e.item }, o.createElement(ie, e));
            }
            class ie extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._onViewRef = (e) => {
                            this._viewRef = e;
                            const { onRef: t } = this.props;
                            t && t(e);
                        }),
                        (this._handleClick = () => {
                            const { item: e } = this.props;
                            e.type !== c.El.User && this.props.onClick && this.props.onClick(e, this.isDisabled);
                        });
                }
                componentDidMount() {
                    (this._loaded = !0),
                        this._viewRef &&
                            (this._rafId = window.requestAnimationFrame(() => {
                                this._viewRef && (this._viewRef.style.opacity = "1");
                            }));
                }
                componentDidUpdate(e) {
                    const { onRef: t } = this.props;
                    t && t !== e.onRef && this._viewRef && t(this._viewRef);
                }
                componentWillUnmount() {
                    this._rafId && window.cancelAnimationFrame(this._rafId);
                }
                render() {
                    const { domId: e, isDisabled: t, isFocused: s, isInMultiSelect: r, isSelected: a, item: l, style: d } = this.props,
                        h = l.type === c.El.User,
                        u = r ? "checkbox" : h ? "none" : "button";
                    return o.createElement(i.Z, { "aria-checked": !(!r || !a) || void 0, "aria-selected": t ? void 0 : (r && a) || (!r && !!s), id: e, role: "option", testID: te }, o.createElement(n.Z, { actAsButtonRole: "none" === u, disabled: t, focusable: !0, onPress: this._handleClick, role: u, style: [s && ne.focused, ne.transitionStyles, this._loaded && ne.loaded, d], viewRef: this._onViewRef }, this._renderResult()));
                }
                _renderResult() {
                    const { disabledMessage: e, getUserDisplayNameLabel: t, getUserDisplayNameType: s, isDisabled: n, isSelected: a, item: d, onClick: h, renderAvatarDecoration: u, renderUserDecoration: p, source: f, withUserHoverCard: _ } = this.props;
                    switch (d.type) {
                        case c.El.CompanyProfile: {
                            const { data: e } = d;
                            return o.createElement(m, { name: d.name, query: e.query, url: e.logoUrl });
                        }
                        case c.El.DMConversation:
                            return !!this.context.viewerUserId && o.createElement(E, { conversationId: d.id, isDisabled: n, isSelected: a, perspective: this.context.viewerUserId });
                        case c.El.Event: {
                            const { data: e } = d;
                            return o.createElement(R.Z, { image: e.primary_image && e.primary_image.original_info, style: ne.itemPadding, supportText: e.supporting_text, title: e.topic });
                        }
                        case c.El.Hashtag:
                        case c.El.Topic: {
                            const { query: e } = this.props,
                                { data: t } = d,
                                s = f === c._4.SearchBox;
                            return o.createElement(M, { isDisabled: n, query: e || "", resultContext: t.result_context, showIcon: s, style: s ? ne.itemPadding : void 0, topic: t.topic });
                        }
                        case c.El.List: {
                            const e = d.data.facepile_urls,
                                t = d.data.primary_image.original_info,
                                s = d.data.topic,
                                i = d.data.result_contexts[0].result_context.display_string,
                                n = d.data.result_contexts[1].result_context.display_string;
                            return o.createElement(F, { facepileUrls: e, image: t, name: s, primaryContext: i, secondaryContext: n });
                        }
                        case c.El.SettingGroup: {
                            const { text: e } = d.data;
                            return o.createElement(i.Z, { style: ne.navigationLink }, o.createElement(r.ZP, { style: ne.content, weight: "bold" }, e), o.createElement(l.default, { style: ne.icon }));
                        }
                        case c.El.Setting: {
                            const { text: e } = d.data;
                            return o.createElement(i.Z, { style: ne.navigationLink }, o.createElement(r.ZP, { style: ne.content }, e), o.createElement(l.default, { style: ne.icon }));
                        }
                        case c.El.NoResult: {
                            const { data: e } = d,
                                { text: t } = e;
                            return o.createElement(r.ZP, { style: ne.noResult }, t);
                        }
                        case c.El.User: {
                            const { data: i } = d,
                                r = u?.(),
                                l = p ? p({ userId: i.id_str, user: i, isSelected: a }) : void 0,
                                c = s ? s(d, i) : void 0,
                                m = t ? t(d, i) : void 0;
                            return o.createElement(ee, { affiliateBadgeInfo: i.highlightedLabel, avatarDecoration: r || void 0, avatarUri: i.profile_image_url_https, canDm: !!i.can_dm, canMediaTag: !!i.can_media_tag, decoration: l || void 0, disabledMessage: e, displayNameLabel: m, displayNameType: c, isBlueVerified: i.is_blue_verified, isDisabled: n, isProtected: !!i.protected, isVerified: !!i.verified, item: d, name: i.name, onItemClick: h, resultContext: i.result_context, screenName: i.screen_name, socialContext: i.social_context, source: f, userId: i.id_str, verifiedType: i.verified_type, withHoverCard: _ });
                        }
                        case c.El.JobLocation:
                            return o.createElement(i.Z, { style: ne.navigationLink }, o.createElement(r.ZP, { style: ne.content, weight: "bold" }, d.name));
                        default:
                            return null;
                    }
                }
                get isDisabled() {
                    return !!this.props.isDisabled;
                }
            }
            ie.contextType = h.rC;
            const ne = a.default.create((e) => ({ checkIcon: { color: e.colors.primary }, navigationLink: { alignItems: "center", flexDirection: "row", flexGrow: 1, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, itemPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, loaded: { opacity: 1 }, focused: { backgroundColor: e.colors.gray0 }, transitionStyles: { transitionProperty: "opacity", transitionDuration: "250ms", opacity: 0 } })),
                re = ({ isSelected: e }) => (e ? o.createElement(d.default, { "aria-hidden": !0, style: ne.checkIcon }) : null);
        },
        666670: (e, t, s) => {
            s.d(t, { F: () => r });
            var o = s(516951),
                i = s(615656),
                n = s(51525);
            const r = { [i.ZP.AddressBookLookupNotFound]: { customAction: n.vv }, [i.ZP.GenericUserNotFound]: { customAction: o.Z }, [i.ZP.OtherUserSuspended]: { customAction: o.Z }, showToast: !0 };
        },
        757953: (e, t, s) => {
            s.d(t, { H: () => m });
            var o = s(111677),
                i = s.n(o),
                n = s(516951),
                r = s(615656),
                a = s(51525);
            const l = i().j4292c24,
                d = i().a0ba5842,
                c = i().i859a9d4,
                h = i().a5202b82,
                u = i().f8cbf714,
                p = i().f2e66452,
                m = { defaultToast: { text: h }, [r.ZP.CurrentUserSuspended]: { toast: { text: p, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [r.ZP.DuplicateFollowRequest]: { customAction: n.Z }, [r.ZP.FollowBlockedUserError]: { toast: { text: l } }, [r.ZP.FollowError]: { customAction: a.w1 }, [r.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [r.ZP.TargetUserNotFound]: { toast: { text: u } } };
        },
        879596: (e, t, s) => {
            s.d(t, { D: () => i });
            var o = s(111677);
            const i = { defaultToast: { text: s.n(o)().ca96fe6e }, showToast: !0 };
        },
        323683: (e, t, s) => {
            s.d(t, { X: () => i });
            var o = s(111677);
            const i = { defaultToast: { text: s.n(o)().e1a0aaca }, showToast: !0 };
        },
        944681: (e, t, s) => {
            s.d(t, { k: () => i, Q: () => n });
            const o = (e, t, s) => {
                    const o = new Date();
                    let i = o.getFullYear() - e;
                    const n = o.getMonth() + 1 - t;
                    if (n < 0) i -= 1;
                    else if (0 === n) {
                        o.getDate() - s < 0 && (i -= 1);
                    }
                    return i;
                },
                i = (e, t, s, i = !1) => (e && t && s ? o(e, t, s) < 18 : i),
                n = () => new Date().getFullYear() - 120;
        },
        297436: (e, t, s) => {
            s.d(t, { E5: () => d, lk: () => c });
            var o = s(450681),
                i = s(275365),
                n = s(162664);
            const r = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
                a = (e = [], t = {}) => e.map((e) => ({ ...e, user: (0, n.b)(t[e.user_id]) || { created_at: "", description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id: parseInt(e.user_id, 10), id_str: e.user_id, name: "", profile_image_url_https: "", protected: !1, screen_name: "", verified: !1 } }));
            function l(e, t) {
                const { entries: s, entryIdsByConversationId: o } = t;
                return (o[e] || []).map((e) => s[e] && s[e].data).filter(Boolean);
            }
            const d = (e, t = r, s) => {
                    const { conversation_id: o, participants: i, ...n } = e;
                    return { conversation_id: o, ...n, entries: t.entryIdsByConversationId[o] || [], participants: a(i, s) };
                },
                c = (e, t, s) => {
                    const { conversation_id: r, participants: d, social_proof: c, ...h } = e,
                        u = { conversation_id: r, ...h, entries: l(r, t), participants: a(d, s), social_proof: void 0 };
                    return (
                        c &&
                            (u.social_proof = ((e = [], t = {}) =>
                                e.map((e) => {
                                    if (e.proof_type === i.UN.MUTUAL_FRIENDS) {
                                        const { users: s, ...i } = e;
                                        return { ...i, users: (0, o.Z)(s.map((e) => (0, n.b)(t[e]))) };
                                    }
                                    return e;
                                }))(c, s)),
                        u
                    );
                };
        },
        234296: (e, t, s) => {
            s.d(t, { Z: () => r, l: () => n });
            var o = s(147143),
                i = s(856674);
            const n = (e, t) => {
                    const s = e.data?.labels?.find((e) => e.label_type === o.w1.PINNED)?.timestamp,
                        i = t.data?.labels?.find((e) => e.label_type === o.w1.PINNED)?.timestamp;
                    return s ? (i ? s - i : -1) : 1;
                },
                r = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, i.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, s) => {
            s.d(t, { Z: () => d, R: () => c });
            var o = s(662678),
                i = s(275365),
                n = s(856674);
            const r = (e = 0) => new Date(Number(e)),
                a = (e, t) => r(e.join_time) - r(t.join_time),
                l = ({ user: e }, { user: t }) => (0, n.ZP)(e.id_str, t.id_str),
                d = (e, t) => {
                    const { created_by_user_id: s, participants: n, type: r } = e,
                        [d, c] = (0, o.Z)(n, ({ user: e }) => e.id_str === t);
                    return c.length
                        ? r === i.eD.GROUP && 1 === c.length
                            ? [...d, ...c]
                            : s
                              ? c.sort(
                                    (
                                        (...e) =>
                                        (t, s) =>
                                            e.map((e) => e(t, s)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: t }, { user: s }) => {
                                                switch (e) {
                                                    case t.id_str:
                                                        return -1;
                                                    case s.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(s),
                                        a,
                                        l,
                                    ),
                                )
                              : c
                        : d;
                },
                c = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        66242: (e, t, s) => {
            s.d(t, { ZP: () => u, e7: () => p });
            var o = s(976145),
                i = s(111677),
                n = s.n(i),
                r = s(275365),
                a = s(198506);
            const l = n().b5b7fb94,
                d = n().g755fcde,
                c = n().f6b1ff81,
                h = n().j652293d,
                u = (e, t, s, o) => {
                    const { type: i, name: n, participants: d = {} } = e;
                    if (i === r.eD.GROUP && n) return n;
                    if (!d.length) return;
                    if (i === r.eD.GROUP && s) return l;
                    const c = (0, a.Z)(e, t).map(({ user: e }) => e);
                    return p(c, t, i, o);
                },
                p = (e = [], t, s = r.eD.GROUP, i) => {
                    const n = e.filter((e) => e.id_str !== t).map((e) => e.name);
                    switch (n.length) {
                        case 0:
                            return d;
                        case 1: {
                            const [e] = n;
                            return s === r.eD.GROUP ? c({ name: e }) : e;
                        }
                        default: {
                            const e = !0,
                                t = i ? n.slice(0, i) : n,
                                s = (0, o.Z)(t, e),
                                r = i ? Math.max(n.length - i, 0) : 0;
                            return r > 0 ? h({ listOfParticipants: s, count: r }) : s;
                        }
                    }
                };
        },
        735e3: (e, t, s) => {
            s.d(t, { o: () => i });
            var o = s(459643);
            const i = (0, o.Z)([]);
            (0, o.Z)({});
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-e019dbda.4313699a.js.map
