"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-e019dbda"],
    {
        131364: (e, t, s) => {
            s.d(t, { Z: () => H });
            var i = s(807896),
                o = s(202784),
                n = s(817480),
                r = s(666536),
                a = s(524110),
                l = s(735e3),
                d = s(942893),
                c = s(339110),
                h = s(575211),
                p = s(962741),
                u = s(312771),
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
                D = s(919022);
            const b = [c.my.Users],
                E = (e) => {
                    const { communityId: t, filter: s, query: i, source: o, trustedFriendsId: n } = e;
                    return (0, I.Ol)({ q: i, result_type: (s || b).join(","), src: o }, { communityId: t, trustedFriendsId: n });
                },
                R = (e, t) => {
                    const s = E(t);
                    return (0, I.uD)(e, s);
                },
                Z = (e, t) => {
                    const s = E(t);
                    return (0, I.YN)(e, s);
                },
                S = (e, t) => {
                    const s = E(t);
                    return (0, I.T5)(e, s);
                },
                T = (e, t) => {
                    const s = E(t);
                    return (0, I.dV)(e, s);
                };
            function P(e, t) {
                const s = E(t);
                return (0, I.PG)(e, s);
            }
            const N = (e, t) => (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0);
            const L = () =>
                    (0, f.P1)(
                        Z,
                        (0, f.P1)(
                            (e, t) => t.query,
                            (e, t) => t.filter,
                            x.Sc,
                            x.sM,
                            (e, t, s, i) => {
                                if (!e || !t || t.indexOf(c.my.Users) < 0) return (0, l.o)();
                                const o = (0, x.UA)(s, e);
                                return (0, c.It)(
                                    o
                                        .map((e) => i[e])
                                        .sort(N)
                                        .slice(0, 10),
                                );
                            },
                        ),
                        R,
                        (e, t) => t.injectedItems,
                        (e, t) => t.query,
                        (e, t) => t.getUserExactMatch,
                        (e, t) => t.userLimit,
                        (e, t, s, i, o, n, r) => {
                            const a = (0, _.Z)(i || [], (e) => (e.type === c.El.User ? e.data.id_str : void 0)),
                                d = t.filter((e) => a.indexOf(e.id) < 0),
                                h = e.filter((e) => a.indexOf(e.id) < 0),
                                p = (0, w.sY)(d, h).slice(0, r || 10),
                                m = s === u.ZP.LOADED,
                                f = n && n({ query: o, hasResults: !!e.length, isLoaded: m, remoteUsers: e }),
                                g = f ? [...p, f] : p;
                            return { users: g.length ? g : (0, l.o)(), userExactMatch: f, filteredPrefetchUsers: d, filteredRemoteUsers: h };
                        },
                    ),
                U = () =>
                    (0, f.P1)(
                        (0, f.P1)(
                            T,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxEvents,
                            (e, t) => t.filter,
                            (e, t, s, i, o) => {
                                const n = s && o && o.indexOf(c.my.Events) >= 0,
                                    r = e.slice(0, i || 1);
                                return r.length && n ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            P,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxLists,
                            (e, t) => t.filter,
                            (e, t, s, i, o) => {
                                const n = s && o && o.indexOf(c.my.Lists) >= 0,
                                    r = e.slice(0, i || 5);
                                return r.length && n ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            S,
                            R,
                            (e, t) => t.query,
                            (e, t) => t.maxTopics,
                            (e, t) => t.getTopicExactMatch,
                            (e, t, s, i, o) => {
                                const n = t === u.ZP.LOADED,
                                    r = o && o({ query: s, hasResults: !!e.length, isLoaded: n }),
                                    a = e.slice(0, i || 3);
                                return r && a.push(r), a.length ? a : (0, l.o)();
                            },
                        ),
                        L(),
                        (e, t) => t.injectedItems,
                        (e, t, s, i, o) => {
                            const { users: n } = i,
                                r = o && o.length ? o : null;
                            return e.length || t.length || s.length || n.length ? (0, g.Z)([r, e.length ? e : void 0, s.length ? s : void 0, n.length ? n : void 0, t.length ? t : void 0]) : r ? [r] : (0, l.o)();
                        },
                    ),
                F = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: R, items: U() }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT"), fetchTypeaheadIfNeeded: I.o4, fetchUsersIfNeeded: D.ZP.fetchManyIfNeeded, fetchUsersPresenceIfNeeded: C.ZP.fetchManyIfNeeded, prefetchTypeaheadUsersIfNeeded: x.zP }))
                    .withAnalytics({ element: "typeahead" });
            class k extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchUsersIfNeeded = (e = []) => {
                            const { fetchUsersIfNeeded: t, items: s, source: i } = this.props;
                            if (this.context.featureSwitches.isTrue("follow_nudge_search_enabled") && this.context.loggedInUserId && i === c._4.SearchBox) {
                                const i = (0, n.Z)(e)
                                        .filter((e) => e.type === p.ZP.User)
                                        .map((e) => e.id),
                                    o = (0, n.Z)(s)
                                        .filter((e) => e.type === p.ZP.User)
                                        .filter((e) => !i.includes(e.id))
                                        .map((e) => e.id);
                                o?.length && t(o);
                            }
                        }),
                        (this._fetchTypeaheadResultsIfNeeded = (e) => {
                            const t = this.context.featureSwitches.isTrue("c9s_community_composer_hashtag_suggestions_enabled");
                            e.query && e.fetchTypeaheadIfNeeded({ q: e.query, src: e.source, result_type: e.filter.join(","), context_text: e.contextText, topic_type: e.topicType, context_community_id: t ? e.communityId : void 0 }, { communityId: e.communityId, trustedFriendsId: e.trustedFriendsId }).catch(e.createLocalApiErrorHandler({}));
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { analytics: s, onItemClick: i, query: o } = this.props;
                            i(e, t);
                            const n = d.Z.forTypeaheadResult(e, t),
                                r = n ? [n] : void 0;
                            s.scribe({ action: "click", data: { search_details: { query: o }, targets: r } });
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
                    const { createLocalApiErrorHandler: t, domId: s, fetchUsersPresenceIfNeeded: i, filter: o, items: r, onItemsChanged: a, query: l, shouldDeferPrefetch: d, source: c } = this.props,
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
                                .filter((e) => e.type === p.ZP.User)
                                .map((e) => e.id);
                            e && i(e).catch(t({}));
                        }
                        this._fetchUsersIfNeeded(e.items);
                    }
                    e.fetchStatus === u.ZP.LOADED && (this._previouslyLoadedResults = e.items),
                        (l === f && o === m && c === _) ||
                            (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                            d &&
                                (clearTimeout(this._prefetchResultsTimer),
                                this.setState({ shouldShowPrefetchResults: !1 }),
                                (this._prefetchResultsTimer = setTimeout(() => {
                                    this.props.query && this.props.fetchStatus !== u.ZP.LOADED && this.setState({ shouldShowPrefetchResults: !0 });
                                }, h.n))));
                }
                render() {
                    const { analytics: e, communityId: t, contextText: s, createLocalApiErrorHandler: n, dropdownRef: r, fetchStatus: l, fetchTypeaheadIfNeeded: d, fetchUsersIfNeeded: c, fetchUsersPresenceIfNeeded: h, filter: p, getTopicExactMatch: m, getUserExactMatch: f, injectedItems: _, items: g, maxEvents: y, maxLists: w, maxTopics: v, onItemClick: I, onItemsChanged: x, prefetchTypeaheadUsersIfNeeded: C, query: D, shouldDeferPrefetch: b, topicType: E, trustedFriendsId: R, userLimit: Z, ...S } = this.props,
                        T = D && l !== u.ZP.LOADED;
                    let P;
                    return (P = T ? (this.state.shouldShowPrefetchResults && g.length ? g : this._previouslyLoadedResults) : g), o.createElement(a.Z, (0, i.Z)({}, S, { isLoading: !!T, items: P, onItemClick: this._handleItemClick, query: D, ref: r }));
                }
            }
            (k.contextType = m.rC), (k.defaultProps = { filter: [c.my.Users], injectedItems: [], maxEvents: 3, maxLists: 3, maxTopics: 1 });
            const O = o.forwardRef((e, t) => o.createElement(k, (0, i.Z)({}, e, { dropdownRef: t }))),
                H = F.forwardRef(O);
        },
        874088: (e, t, s) => {
            s.r(t), s.d(t, { TypeaheadInput: () => b, default: () => R, styles: () => E });
            var i = s(807896),
                o = s(202784),
                n = s(325686),
                r = s(424028),
                a = s(371344),
                l = s(392237),
                d = s(567447),
                c = s(537392),
                h = s(674132),
                p = s.n(h),
                u = s(956272),
                m = s(323265),
                f = s(649872),
                _ = s(110548),
                g = s(655352),
                y = s(530745),
                w = s(339110),
                v = s(456910),
                I = s(443781),
                x = s(131364);
            const C = p().f065ba8c;
            let D = 1;
            class b extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = ({ containerWidth: e }) => {
                            const { alwaysOpen: t, disableClearButton: s, inputStyle: l, isCompact: d, isOnHomepage: c, placeholder: h, renderCustomInput: p, renderInSearchField: m, rounded: _, shouldAutoFocus: g, shouldFocusOnClear: y, style: w, testID: v } = this.props,
                                I = this.state.showTypeaheadDropdown || t,
                                x = { Icon: u.default, ariaActiveDescendant: this.state.ariaDescendantId, ariaAutocomplete: "list", ariaExpanded: I, ariaLabel: C, ariaOwns: this._dropdownDomId, ariaRole: "combobox", autoComplete: "off", autoCorrect: !1, autoFocus: g, contentBelow: m && m(), focusOnClear: y, isCompact: d, leftAligned: c, onBlur: this._handleInputBlur, onChange: this._handleInputChange, onClear: this._handleInputClear, onFocus: this._handleInputFocus, onLayout: this._handleInputLayoutChanged, placeholder: h, returnKeyType: "search", spellCheck: "false", styleType: _ ? "pill" : "selection", testID: v, value: this.state.query, withClearButton: !s && this.state.showTypeaheadDropdown };
                            return o.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setRootContainerNode, style: [E.root, w] }, o.createElement(r.Z, { onKeyDown: this._handleKeyDown, style: E.keydownInputListener }, o.createElement(f.Z, { "aria-label": h, onSubmit: this._handleFormSubmit, role: "search", style: E.wrapper }, o.createElement(n.Z, { ref: this._setInputContainerNode, style: l }, p ? p({ ...x, handleReturn: this._handleRichTextInputReturn }) : o.createElement(a.Z, (0, i.Z)({}, x, { ref: this._setInputRef }))), o.createElement(n.Z, { style: [E.typeaheadContainer, !_ && E.topBorder] }, I ? this._renderDropdown(e) : null))));
                        }),
                        (this._renderDropdown = (e) => {
                            const { communityId: t, filter: s, getItemDisabledMessage: i, getItemIsDisabled: n, getTopicExactMatch: r, getUserDisplayNameLabel: a, getUserDisplayNameType: d, getUserExactMatch: c, injectedItems: h, isModal: p, isOnHomepage: u, maxEvents: m, maxLists: f, maxTopics: _, onItemsChanged: y, renderAvatarDecoration: w, renderCallout: I, renderCustomDropdown: C, renderEmptyState: D, renderHeader: b, renderNoResultsState: R, renderUserDecoration: Z, selectedItems: S, shouldDeferPrefetch: T, source: P, trustedFriendsId: N, userLimit: L, withFixedPositioning: U, withSectionDivider: F, withUserHoverCard: k } = this.props,
                                O = e >= l.default.theme.breakpoints.medium || (0, g.ZP)(),
                                { dropdownOffset: H, query: M } = this.state,
                                A = p ? E.modalDropdown : [E.dropdown, !O && U && H ? [(0, v.xX)(H), { height: `calc(100vh - ${H}px)` }] : null, (O || u) && E.wideModeDropdown, u && E.shortModeDropdown, !O && u && E.shortModeDropdownMobile],
                                B = { ariaDescendantId: this.state.ariaDescendantId, domId: this._dropdownDomId, onDismiss: this._handleOnEmptyStateDismiss, onItemFocusChanged: this._handleItemFocusChanged, ref: this._handleDropdownRef, style: A },
                                q = { ariaDescendantId: this.state.ariaDescendantId, communityId: t, domId: this._dropdownDomId, filter: s, getItemDisabledMessage: i, getItemIsDisabled: n, getTopicExactMatch: r, getUserDisplayNameType: d, getUserDisplayNameLabel: a, getUserExactMatch: c, injectedItems: h, maxEvents: m, maxLists: f, maxTopics: _, onItemClick: this._handleItemClick, onItemFocusChanged: this._handleItemFocusChanged, onItemsChanged: y, query: M, ref: this._handleDropdownRef, renderAvatarDecoration: w, renderCallout: I, renderHeader: b, renderNoResultsState: R, renderUserDecoration: Z, selectedItems: S, shouldDeferPrefetch: T, source: P, style: A, trustedFriendsId: N, userLimit: L, withSectionDivider: F, withUserHoverCard: k };
                            return D && !M ? D(B) : C ? C(q) : o.createElement(x.Z, q);
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
                                { alwaysOpen: i } = this.props,
                                { showTypeaheadDropdown: o } = this.state;
                            if ((0, v.kE)(e))
                                if (t !== y.Dd) {
                                    if (this.state.inputHasFocus) return t === y.WX ? (this._focusNext(), void e.preventDefault()) : t === y.kl ? (this._focusPrevious(), void e.preventDefault()) : t === y.nQ && !i && o ? (this._dismissDropdown(), void e.preventDefault()) : t === y.NW && this._hasFocusedItem() ? (this._selectFocusedItem(), void e.preventDefault()) : void ((t !== y.jF && t !== y.Ci) || !this._deleteFocusedItem() ? o || this.setState({ showTypeaheadDropdown: !0 }) : e.preventDefault());
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
                            const { onDismiss: s, onItemClick: i, shouldClearOnSelect: o, shouldFocusOnClear: n } = this.props,
                                r = o ? "" : this.state.query;
                            this.setState({ showTypeaheadDropdown: !1 }), this._inputRef && (o && n ? this._inputRef.focus() : this._inputRef.blur()), this.setQuery(r), s && s(), i && i(e, t);
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
                        (this._dropdownDomId = `typeaheadDropdown-${D}`),
                        (D += 1);
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
                    return o.createElement(c.ZP, null, this._render);
                }
                focus() {
                    this._activeChildRef && this._activeChildRef.focus();
                }
                setQuery(e) {
                    this.setState({ query: e }), this.props.onQueryChange && this.props.onQueryChange(e);
                }
            }
            (b.defaultProps = { disableClearButton: !1, filter: [w.my.Users, w.my.Topics], initialValue: "", withSectionDivider: !0, withUserHoverCard: !1 }), (b.contextType = I.rC);
            const E = l.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative", zIndex: _.R0 + 1 }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1, width: "100%" }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: m.ZP.isIOS() ? "auto" : "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, shortModeDropdown: { minHeight: 100, maxHeight: "35vh", paddingBottom: "0" }, shortModeDropdownMobile: { position: "absolute", height: "40vh", top: 0 }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small } })),
                R = b;
        },
        120428: (e, t, s) => {
            s.d(t, { Z: () => l });
            var i = s(202784),
                o = s(325686),
                n = s(530525),
                r = s(439592),
                a = s(731708);
            function l(e) {
                const { image: t, style: s, supportText: l, title: c } = e;
                return i.createElement(o.Z, { style: [d.root, s] }, i.createElement(o.Z, { style: [d.coverContainer, d.cellThumbnail] }, t ? i.createElement(n.Z, { "aria-label": "", aspectMode: r.Z.SQUARE, image: t }) : null), i.createElement(o.Z, { style: d.bodyColumn }, l ? i.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, l) : null, i.createElement(a.ZP, { numberOfLines: 2, weight: "bold" }, c)));
            }
            const d = s(392237).default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1, flexGrow: 1 }, bodyColumn: { justifyContent: "center", flexDirection: "column", marginEnd: e.spaces.space4, marginStart: e.spaces.space12, flexShrink: 1 }, coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 } }));
        },
        27951: (e, t, s) => {
            s.d(t, { ib: () => re, ZP: () => ie });
            var i = s(202784),
                o = s(325686),
                n = s(952428),
                r = s(731708),
                a = s(392237),
                l = s(58399),
                d = s(913973),
                c = s(339110),
                h = s(443781),
                p = s(823161);
            const u = a.default.create((e) => ({ container: { flexDirection: "row", padding: e.spaces.space8, gap: 4, alignItems: "center" }, name: { flexDirection: "row", alignItems: "center" } })),
                m = ({ name: e, query: t, url: s }) => {
                    const n = i.useCallback(() => {
                        const s = e.split(new RegExp(`(${t})`, "gi"));
                        return i.createElement(
                            i.Fragment,
                            null,
                            s.map((e, s) => i.createElement(r.ZP, { key: s, size: "subtext1", weight: e?.toLowerCase() === t?.toLowerCase() ? "bold" : "normal" }, e)),
                        );
                    }, [e, t]);
                    return i.createElement(o.Z, { style: u.container }, i.createElement(p.default, { shape: "square", size: "medium", uri: s || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), i.createElement(o.Z, { style: u.name }, n()));
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
                D = (0, w.Z)()
                    .propsFromState(() => ({ conversationId: x, conversation: C, users: I.ZP.selectAll }))
                    .adjustStateProps(({ conversation: e, conversationId: t, users: s }) => {
                        const i = { conversation: void 0 };
                        return e?.data && (i.conversation = (0, y.E5)(e.data, void 0, s)), i;
                    }),
                b = a.default.create((e) => ({ root: { cursor: "pointer", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: "32px" }, bodyColumn: { flexGrow: 7, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 } })),
                E = D(({ conversation: e, isDisabled: t, isSelected: s, perspective: o }) => (e ? i.createElement(f.Z, { avatarCell: i.createElement(_.Z, { conversation: e, perspective: o, size: "xLarge" }), avatarCellStyle: b.avatarColumn, avatarSize: "xLarge", cellStyle: b.bodyColumn, style: [b.root, !s && t && b.disabled] }, i.createElement(g.Z, { conversation: e, perspective: o, withParticipantsCount: !0 }), re({ isSelected: s })) : null));
            var R = s(120428),
                Z = s(530525),
                S = s(439592),
                T = s(470397),
                P = s(642153);
            function N(e) {
                return i.createElement(o.Z, { style: L.container }, i.createElement(o.Z, { style: L.imageContainer }, i.createElement(Z.Z, { "aria-label": "", aspectMode: S.Z.SQUARE, image: e.image })), i.createElement(o.Z, { style: L.bodyContainer }, i.createElement(T.Z, null, i.createElement(r.ZP, { numberOfLines: 1, size: "body", weight: "bold" }, e.name), i.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.secondaryContext)), i.createElement(o.Z, { style: L.row }, i.createElement(P.Z, { style: L.facepile, userAvatarSize: "small", userAvatarUrls: e.facepileUrls, withIncreasedSpacing: !0 }), i.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.primaryContext))));
            }
            const L = a.default.create((e) => ({ bodyContainer: { flexShrink: 1 }, container: { flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, facepile: { marginEnd: e.spaces.space4 }, imageContainer: { borderRadius: e.borderRadii.medium, height: e.spaces.space40, marginEnd: e.spaces.space12, overflow: "hidden", width: e.spaces.space40 }, row: { flexDirection: "row" } }));
            var U = s(354149),
                F = s(909377),
                k = s(452693),
                O = s(264398),
                H = (s(136728), s(925885));
            const M = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, context: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.primary, height: e.fontSizes.subtext2, paddingEnd: e.spaces.space4, width: e.fontSizes.subtext2 }, disabled: { backgroundColor: e.colors.gray0 }, searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: "none" }, searchIconCell: { flexDirection: "row", alignItems: "center" }, wrapperCellStyle: { justifyContent: "center" } })),
                A = function (e) {
                    const { isDisabled: t, query: s, resultContext: n, showIcon: a, style: l, topic: d } = e,
                        c = (function (e, t) {
                            const s = (0, H.Z)(e),
                                i = e.toLowerCase().indexOf(t.toLowerCase()),
                                o = i + t.length;
                            let n;
                            if (0 === s.length) {
                                const t = [i > 0 ? [0, i] : void 0, [o, e.length]].filter(Boolean);
                                n = [{ highlights: -1 !== i ? t : void 0, text: e, entityType: "text", prefix: "", indices: [0, e.length] }];
                            } else {
                                const t = s.flatMap(({ indices: t }, s, i) => {
                                    const o = 0 === s ? 0 : i[s - 1].indices[1],
                                        n = s === i.length - 1,
                                        r = [];
                                    return o !== t[0] && r.push(e.slice(o, t[0])), r.push(e.substring(t[0], t[1])), n && e.length !== t[1] && r.push(e.slice(t[1])), r;
                                });
                                let r = 0;
                                const a = t.map((e, t, s) => {
                                    r += t > 0 ? s[t - 1].length : 0;
                                    const n = e.length;
                                    return { runningTotal: r, containsQuery: -1 !== i && r + n >= i && r < o };
                                });
                                n = t.map((e, t) => {
                                    const { containsQuery: s, runningTotal: n } = a[t],
                                        r = e.includes("#");
                                    let l, d;
                                    if (s) {
                                        if (s) {
                                            let t = n < i ? i - n : 0,
                                                s = n + e.length < o ? e.length : o - n;
                                            r && ((t -= 1), (s -= 1)), (l = []), t > 0 && l.push([0, t]), s !== e.length - 1 && l.push([s, e.length]);
                                        }
                                    } else l = [[0, e.length]];
                                    return l?.length && (d = l), r ? { highlights: d, text: `${e?.replace("#", "")}`, entityType: "hashtag", prefix: "#", indices: [n, n + e.length] } : { highlights: d, text: e, entityType: "text", prefix: "", indices: [n, n + e.length] };
                                });
                            }
                            return n;
                        })(d, s),
                        h = i.createElement(
                            r.ZP,
                            null,
                            c.map((e, t) => i.createElement(U.ZP, { key: `${e.text}${t}`, part: e })),
                        ),
                        p = "xLarge",
                        u = i.createElement(i.Fragment, null, h, n ? i.createElement(o.Z, { style: M.context }, n && n.types[0] && "followable_topic" === n.types[0].type ? i.createElement(k.default, { style: M.icon }) : null, i.createElement(r.ZP, { color: "gray700" }, n.display_string || " ")) : null);
                    return i.createElement(
                        o.Z,
                        { style: [M.root, t && M.disabled, l] },
                        a
                            ? ((e) => {
                                  const t = i.createElement(F.Z, { Icon: O.default, color: "neutral", size: p, style: M.searchIcon });
                                  return i.createElement(f.Z, { avatarCell: t, avatarCellStyle: M.searchIconCell, avatarSize: p, cellStyle: M.wrapperCellStyle }, e);
                              })(u)
                            : u,
                    );
                };
            var B = s(673510),
                q = s(674132),
                z = s.n(q),
                V = s(788993),
                j = s(624479);
            const Q = (e, t) => (0, j.cY)(e, t.userId),
                G = (0, w.Z)().propsFromState(() => ({ userSpace: Q })),
                W = "TypeaheadUser",
                Y = z().ae2205d2,
                $ = z().d960b55c,
                K = z().fd06b02f,
                X = Object.freeze({ num_of_followers: V.Z.Follow, bio: V.Z.TextOnly, location: V.Z.Location, num_tweets: V.Z.NewTweets, follow_relationship: V.Z.Follow, followers_follow: V.Z.Follow, social_proof: V.Z.SocialProof, follow_relationship_mutual_follow: V.Z.FollowMutual, follow_relationship_followed: V.Z.FollowFollowed, follow_relationship_following: V.Z.FollowFollowing, highlighted_label: "HighlightedIcon" });
            class J extends i.PureComponent {
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
                    const { affiliateBadgeInfo: e, avatarDecoration: t, avatarUri: s, decoration: o, disabledMessage: n, displayNameLabel: r, displayNameType: a, isBlueVerified: l, isDisabled: d, isProtected: h, isVerified: p, name: u, screenName: m, source: f, userId: _, userSpace: g, verifiedType: y, withHoverCard: w } = this.props,
                        { featureSwitches: v } = this.context,
                        { context: I, highlightedLabel: x } = this._getItemContext(),
                        C = f === c._4.SearchBox,
                        D = g && v.isTrue("voice_rooms_typeahead_audiospace_ring_enabled") ? g : void 0;
                    return D && (D["aria-label"] = K({ screenName: m })), i.createElement(B.ZP, { affiliateBadgeInfo: e, avatarDecoration: t, avatarSize: "xLarge", avatarUri: s, decoration: o, disabledMessage: d ? n : void 0, displayMode: "UserCompact", displayNameLabel: r, displayNameLabelType: a, highlightedLabel: x, isBlueVerified: l, isDisabled: d, isProtected: h, isVerified: p, name: u, onAvatarClick: this._handleAvatarClick, onCellClick: this._handleClick, onScreenNameClick: this._handleClick, presenceIndicator: C ? D : void 0, screenName: m, socialContext: I, testID: W, userId: _, verifiedType: y, withBottomSocialContext: !0, withInteractiveStyling: !1, withLink: w });
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
                    const { display_string: t, icon_url: s, types: i } = e,
                        o = i.length ? i[0].type : void 0,
                        n = o && o in X ? X[o] : V.Z.TextOnly;
                    return { contextType: n, text: t, highlightedLabel: n === X.highlighted_label && s ? { badge: { url: s }, description: t } : void 0 };
                }
            }
            (J.contextType = h.rC), (J.defaultProps = { withHoverCard: !1 });
            const ee = G.forwardRef(J),
                te = "typeaheadResult",
                se = ({ children: e }) => e;
            function ie(e) {
                return i.createElement(se, { item: e.item }, i.createElement(oe, e));
            }
            class oe extends i.Component {
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
                        p = r ? "checkbox" : h ? "none" : "button";
                    return i.createElement(o.Z, { "aria-checked": !(!r || !a) || void 0, "aria-selected": t ? void 0 : (r && a) || (!r && !!s), id: e, role: "option", testID: te }, i.createElement(n.Z, { actAsButtonRole: "none" === p, disabled: t, focusable: !0, onPress: this._handleClick, role: p, style: [s && ne.focused, ne.transitionStyles, this._loaded && ne.loaded, d], viewRef: this._onViewRef }, this._renderResult()));
                }
                _renderResult() {
                    const { disabledMessage: e, getUserDisplayNameLabel: t, getUserDisplayNameType: s, isDisabled: n, isSelected: a, item: d, onClick: h, renderAvatarDecoration: p, renderUserDecoration: u, source: f, withUserHoverCard: _ } = this.props;
                    switch (d.type) {
                        case c.El.CompanyProfile: {
                            const { data: e } = d;
                            return i.createElement(m, { name: d.name, query: e.query, url: e.logoUrl });
                        }
                        case c.El.DMConversation:
                            return !!this.context.viewerUserId && i.createElement(E, { conversationId: d.id, isDisabled: n, isSelected: a, perspective: this.context.viewerUserId });
                        case c.El.Event: {
                            const { data: e } = d;
                            return i.createElement(R.Z, { image: e.primary_image && e.primary_image.original_info, style: ne.itemPadding, supportText: e.supporting_text, title: e.topic });
                        }
                        case c.El.Hashtag:
                        case c.El.Topic: {
                            const { query: e } = this.props,
                                { data: t } = d,
                                s = f === c._4.SearchBox;
                            return i.createElement(A, { isDisabled: n, query: e || "", resultContext: t.result_context, showIcon: s, style: s ? ne.itemPadding : void 0, topic: t.topic });
                        }
                        case c.El.List: {
                            const e = d.data.facepile_urls,
                                t = d.data.primary_image.original_info,
                                s = d.data.topic,
                                o = d.data.result_contexts[0].result_context.display_string,
                                n = d.data.result_contexts[1].result_context.display_string;
                            return i.createElement(N, { facepileUrls: e, image: t, name: s, primaryContext: o, secondaryContext: n });
                        }
                        case c.El.SettingGroup: {
                            const { text: e } = d.data;
                            return i.createElement(o.Z, { style: ne.navigationLink }, i.createElement(r.ZP, { style: ne.content, weight: "bold" }, e), i.createElement(l.default, { style: ne.icon }));
                        }
                        case c.El.Setting: {
                            const { text: e } = d.data;
                            return i.createElement(o.Z, { style: ne.navigationLink }, i.createElement(r.ZP, { style: ne.content }, e), i.createElement(l.default, { style: ne.icon }));
                        }
                        case c.El.NoResult: {
                            const { data: e } = d,
                                { text: t } = e;
                            return i.createElement(r.ZP, { style: ne.noResult }, t);
                        }
                        case c.El.User: {
                            const { data: o } = d,
                                r = p?.(),
                                l = u ? u({ userId: o.id_str, user: o, isSelected: a }) : void 0,
                                c = s ? s(d, o) : void 0,
                                m = t ? t(d, o) : void 0;
                            return i.createElement(ee, { affiliateBadgeInfo: o.highlightedLabel, avatarDecoration: r || void 0, avatarUri: o.profile_image_url_https, canDm: !!o.can_dm, canMediaTag: !!o.can_media_tag, decoration: l || void 0, disabledMessage: e, displayNameLabel: m, displayNameType: c, isBlueVerified: o.is_blue_verified, isDisabled: n, isProtected: !!o.protected, isVerified: !!o.verified, item: d, name: o.name, onItemClick: h, resultContext: o.result_context, screenName: o.screen_name, socialContext: o.social_context, source: f, userId: o.id_str, verifiedType: o.verified_type, withHoverCard: _ });
                        }
                        case c.El.JobLocation:
                            return i.createElement(o.Z, { style: ne.navigationLink }, i.createElement(r.ZP, { style: ne.content, weight: "bold" }, d.name));
                        default:
                            return null;
                    }
                }
                get isDisabled() {
                    return !!this.props.isDisabled;
                }
            }
            oe.contextType = h.rC;
            const ne = a.default.create((e) => ({ checkIcon: { color: e.colors.primary }, navigationLink: { alignItems: "center", flexDirection: "row", flexGrow: 1, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, itemPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, loaded: { opacity: 1 }, focused: { backgroundColor: e.colors.gray0 }, transitionStyles: { transitionProperty: "opacity", transitionDuration: "250ms", opacity: 0 } })),
                re = ({ isSelected: e }) => (e ? i.createElement(d.default, { "aria-hidden": !0, style: ne.checkIcon }) : null);
        },
        879596: (e, t, s) => {
            s.d(t, { D: () => o });
            var i = s(674132);
            const o = { defaultToast: { text: s.n(i)().ca96fe6e }, showToast: !0 };
        },
        944681: (e, t, s) => {
            s.d(t, { k: () => o, Q: () => n });
            const i = (e, t, s) => {
                    const i = new Date();
                    let o = i.getFullYear() - e;
                    const n = i.getMonth() + 1 - t;
                    if (n < 0) o -= 1;
                    else if (0 === n) {
                        i.getDate() - s < 0 && (o -= 1);
                    }
                    return o;
                },
                o = (e, t, s, o = !1) => (e && t && s ? i(e, t, s) < 18 : o),
                n = () => new Date().getFullYear() - 120;
        },
        297436: (e, t, s) => {
            s.d(t, { E5: () => d, lk: () => c });
            var i = s(450681),
                o = s(275365),
                n = s(162664);
            const r = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
                a = (e = [], t = {}) => e.map((e) => ({ ...e, user: (0, n.b)(t[e.user_id]) || { created_at: "", description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id: parseInt(e.user_id, 10), id_str: e.user_id, name: "", profile_image_url_https: "", protected: !1, screen_name: "", verified: !1 } }));
            function l(e, t) {
                const { entries: s, entryIdsByConversationId: i } = t;
                return (i[e] || []).map((e) => s[e] && s[e].data).filter(Boolean);
            }
            const d = (e, t = r, s) => {
                    const { conversation_id: i, participants: o, ...n } = e;
                    return { conversation_id: i, ...n, entries: t.entryIdsByConversationId[i] || [], participants: a(o, s) };
                },
                c = (e, t, s) => {
                    const { conversation_id: r, participants: d, social_proof: c, ...h } = e,
                        p = { conversation_id: r, ...h, entries: l(r, t), participants: a(d, s), social_proof: void 0 };
                    return (
                        c &&
                            (p.social_proof = ((e = [], t = {}) =>
                                e.map((e) => {
                                    if (e.proof_type === o.UN.MUTUAL_FRIENDS) {
                                        const { users: s, ...o } = e;
                                        return { ...o, users: (0, i.Z)(s.map((e) => (0, n.b)(t[e]))) };
                                    }
                                    return e;
                                }))(c, s)),
                        p
                    );
                };
        },
        234296: (e, t, s) => {
            s.d(t, { Z: () => r, l: () => n });
            var i = s(147143),
                o = s(856674);
            const n = (e, t) => {
                    const s = e.data?.labels?.find((e) => e.label_type === i.w1.PINNED)?.timestamp,
                        o = t.data?.labels?.find((e) => e.label_type === i.w1.PINNED)?.timestamp;
                    return s ? (o ? s - o : -1) : 1;
                },
                r = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, o.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, s) => {
            s.d(t, { Z: () => d, R: () => c });
            var i = s(662678),
                o = s(275365),
                n = s(856674);
            const r = (e = 0) => new Date(Number(e)),
                a = (e, t) => r(e.join_time) - r(t.join_time),
                l = ({ user: e }, { user: t }) => (0, n.ZP)(e.id_str, t.id_str),
                d = (e, t) => {
                    const { created_by_user_id: s, participants: n, type: r } = e,
                        [d, c] = (0, i.Z)(n, ({ user: e }) => e.id_str === t);
                    return c.length
                        ? r === o.eD.GROUP && 1 === c.length
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
            s.d(t, { ZP: () => p, e7: () => u });
            var i = s(976145),
                o = s(674132),
                n = s.n(o),
                r = s(275365),
                a = s(198506);
            const l = n().b5b7fb94,
                d = n().g755fcde,
                c = n().f6b1ff81,
                h = n().j652293d,
                p = (e, t, s, i) => {
                    const { type: o, name: n, participants: d = {} } = e;
                    if (o === r.eD.GROUP && n) return n;
                    if (!d.length) return;
                    if (o === r.eD.GROUP && s) return l;
                    const c = (0, a.Z)(e, t).map(({ user: e }) => e);
                    return u(c, t, o, i);
                },
                u = (e = [], t, s = r.eD.GROUP, o) => {
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
                                t = o ? n.slice(0, o) : n,
                                s = (0, i.Z)(t, e),
                                r = o ? Math.max(n.length - o, 0) : 0;
                            return r > 0 ? h({ listOfParticipants: s, count: r }) : s;
                        }
                    }
                };
        },
        735e3: (e, t, s) => {
            s.d(t, { o: () => o });
            var i = s(459643);
            const o = (0, i.Z)([]);
            (0, i.Z)({});
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-e019dbda.d952279a.js.map
