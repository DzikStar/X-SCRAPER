"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-a2dee9c7"],
    {
        326439: (e, t, s) => {
            s.d(t, { Z: () => d });
            var n,
                l,
                i,
                a,
                r,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (a = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    l,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            i,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    a,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            o.hash = "47444c8ec7640b723fc59a35b0544d70";
            const d = o;
        },
        498510: (e, t, s) => {
            s.d(t, { Z: () => d });
            var n,
                l,
                i,
                a,
                r,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (n = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (a = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const l = n;
        },
        904940: (e, t, s) => {
            s.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, s) => e.post("media/metadata/create", t, {}, { ...s, "content-type": "application/json" }), attachSubtitles: (t, s) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...s, "content-type": "application/json" }) });
        },
        58687: (e, t, s) => {
            s.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, s = {}) => e.get("saved_searches/list", t, s), create: (t, s = {}) => e.post("saved_searches/create", t, {}, s), destroy: (t, s = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, s) });
        },
        708482: (e, t, s) => {
            s.d(t, { s: () => i });
            var n = s(10622),
                l = s.n(n);
            function i(e, t, s, n) {
                return l()(e, t, s, n ? { networkCacheConfig: { metadata: { isFatalError: n } } } : void 0).toPromise();
            }
        },
        290402: (e, t, s) => {
            s.d(t, { Z: () => m });
            var n = s(807896),
                l = s(202784),
                i = s(182056),
                a = s(879113),
                r = s(392237),
                o = s(332920),
                d = s.n(o),
                c = s(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, s) => {
                    const r = i.Z.isOnline();
                    return l.createElement(a.Z, (0, n.Z)({}, t, { icon: r ? void 0 : l.createElement(c.default, { style: p.icon }), retryMessage: r ? e : u }));
                },
                p = r.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = l.forwardRef(h);
        },
        649872: (e, t, s) => {
            s.d(t, { Z: () => i });
            s(202784);
            var n = s(950822),
                l = s(392237);
            const i = (e) => {
                const { style: t, ...s } = e;
                return (0, n.Z)("form", { ...s, action: "#", style: [l.default.view, t] });
            };
        },
        43402: (e, t, s) => {
            s.r(t), s.d(t, { GenericTypeaheadComposeWrapper: () => k, default: () => v });
            var n = s(202784),
                l = s(928316),
                i = s(325686),
                a = s(392237),
                r = s(292627),
                o = s(424028),
                d = s(386802),
                c = s(912021),
                u = s(131364),
                h = s(110548),
                p = s(339110),
                m = s(456910),
                g = s(725516);
            const y = [p.my.Users],
                _ = [p.my.Topics],
                f = 50 * a.default.theme.scaleMultiplier,
                w = 30 * a.default.theme.scaleMultiplier;
            let I = 0;
            class k extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._typeaheadActive = !1),
                        (this._renderTypeaheadDropdown = (e) => {
                            const { composeCommunityId: t, contextText: s, isInlineReply: l, isRichText: a, onSelectItem: o, source: d } = this.props,
                                { isModal: c } = this.context,
                                h = e.resultType === p.my.Topics ? "hashtag" : void 0,
                                m = t ? p._4.CommunityHashtagsSuggested : d || p._4.Compose,
                                g = n.createElement(u.Z, { ariaDescendantId: this.state.ariaDescendantId, communityId: t, contextText: s, domId: this._dropdownDomId, filter: this._getFilter(e.resultType), maxTopics: 8, onItemClick: o, onItemFocusChanged: this._handleItemFocusChanged, query: e.word, ref: this._handleTypeaheadRef, source: m, style: this._calcStyle(), topicType: h, withItemAlwaysSelected: !0 });
                            return c || l || (a && m !== p._4.ComposeMessage) ? n.createElement(r.Z.HalfSheet, null, n.createElement(n.Fragment, null, n.createElement(i.Z, { onClick: this._handleDismiss, style: S.mask }), g)) : n.createElement(n.Fragment, null, n.createElement(i.Z, { onClick: this._handleDismiss, style: S.mask }), g);
                        }),
                        (this.render = () => {
                            const { children: e, query: t } = this.props,
                                s = n.cloneElement(e, {
                                    ariaAutocomplete: "list",
                                    ariaControls: this._dropdownDomId,
                                    ariaActiveDescendant: this.state.ariaDescendantId,
                                    ref: (t) => {
                                        (this._textInputNode = l.findDOMNode(t)), (this._textInputRef = t);
                                        const { ref: s } = e;
                                        s && s(t);
                                    },
                                });
                            return n.createElement(i.Z, { style: S.inputContainer }, n.createElement(o.Z, { onKeyDown: this._handleKeyDown }, s, this._textInputNode && t ? this._renderTypeaheadDropdown(t) : null));
                        }),
                        (this._getFilter = (e) => ("users" === e ? y : _)),
                        (this._calcStyle = () => {
                            const { isModal: e } = this.context,
                                { isInline: t, isInlineReply: s, source: n } = this.props,
                                l = this._textInputNode,
                                i = window.innerHeight,
                                a = window.innerWidth,
                                r = (this._textInputRef && this._textInputRef.getTextInputHeight()) || 20;
                            if (l instanceof window.HTMLElement) {
                                const o = n === p._4.LongformComposer,
                                    d = o && (this._getWindowSelectionY() || this._windowSelectionY);
                                if (o && d) {
                                    const e = l.getBoundingClientRect();
                                    return [this._getLongformDropdownPositioningStyle(i, a, d, 60, e.left), S.dropdownStyle];
                                }
                                if (e || t) {
                                    const t = l.getBoundingClientRect();
                                    return [this._getDropdownPositioningStyle(i, a, t.top, t.top + r, t.left, e, !!s), S.dropdownStyle];
                                }
                                return [this._getModalFullViewportStyle(r), S.modalFullViewportStyle];
                            }
                            return [this._getDropdownPositioningStyle(r, a, 0, 0, 0, e, !!s), S.dropdownStyle];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { selectedItem: t } = this.state,
                                { onSelectItem: s, query: n } = this.props,
                                { key: l } = e;
                            m.kE(e) && n && ("ArrowDown" === l ? (this._typeaheadRef && this._typeaheadRef.focusNext(), e.preventDefault()) : "ArrowUp" === l ? (this._typeaheadRef && this._typeaheadRef.focusPrevious(), e.preventDefault()) : "Enter" === l || "Tab" === l ? t && (s(t), e.preventDefault()) : "Escape" === l && (this._handleDismiss(), e.preventDefault()));
                        }),
                        (this._handleItemFocusChanged = (e) => this.setState({ ariaDescendantId: m.A1(), selectedItem: e })),
                        (this._handleTypeaheadRef = (e) => {
                            this._typeaheadRef = e;
                        }),
                        (this._handleDismiss = () => {
                            this._textInputRef && this._textInputRef.focus(), this.props.onDismiss();
                        }),
                        (this._getDropdownHeight = (0, c.Z)((e, t) => {
                            const s = (50 * e) / 100;
                            return s > t ? t : s;
                        })),
                        (this._getModalOrInlineReplyDropdownStyles = (0, c.Z)((e, t, s) => (e ? { bottom: `${s}px` } : { top: `${t}px` }))),
                        (this._getWindowSelectionY = () => {
                            const e = window.getSelection().rangeCount > 0 ? Array.from(window.getSelection().getRangeAt(0).getClientRects()) : [];
                            return e?.[0]?.y;
                        }),
                        (this._getLongformDropdownPositioningStyle = (0, c.Z)((e, t, s, n, l) => {
                            const { maxWidth: i, minWidth: a } = this._getDropdownMinMaxWidth(t, l),
                                r = s > (e - n) / 2 + n,
                                o = this._getDropdownHeight(e, (e - 3 * n) / 2);
                            return { height: `${o}px`, maxWidth: `${i}px`, minWidth: `${a}px`, position: "fixed", top: `${r ? s - w - o : s + f}px`, start: `${l}px`, userSelect: "none" };
                        })),
                        (this._getDropdownPositioningStyle = (0, c.Z)((e, t, s = 0, n = 0, l = 0, i = !1, a = !1) => {
                            const { maxWidth: r, minWidth: o } = this._getDropdownMinMaxWidth(t, l),
                                d = e - n,
                                c = s,
                                u = d / e < 0.5 && c > d,
                                h = { maxWidth: `${r}px`, minWidth: `${o}px`, maxHeight: `${u ? this._getDropdownHeight(e, c - 10) : this._getDropdownHeight(e, d - 10)}px` };
                            return i || a ? { ...h, position: "fixed", start: `${l}px`, ...this._getModalOrInlineReplyDropdownStyles(u, n, e - s) } : u ? { ...h, bottom: "100%", position: "absolute" } : { ...h, top: "100%", position: "absolute" };
                        })),
                        (this._getDropdownMinMaxWidth = (e, t) => {
                            const s = e - t - 10;
                            return { maxWidth: s, minWidth: Math.min(s, 380) };
                        }),
                        (this._getModalFullViewportStyle = (0, c.Z)((e) => ({ position: "absolute", top: `${e || 0}px`, overflowX: "hidden", overflowY: "auto" }))),
                        (this.state = { ariaDescendantId: m.A1() }),
                        (this._dropdownDomId = `typeaheadDropdownWrapped-${I}`),
                        (I += 1);
                }
                componentDidUpdate() {
                    const { onTypeaheadStateChange: e, query: t } = this.props,
                        s = !(!this._textInputNode || !t);
                    if (s !== this._typeaheadActive) {
                        (this._typeaheadActive = s), e && e(s);
                        const t = this._getWindowSelectionY();
                        t && t !== this._windowSelectionY && (this._windowSelectionY = t);
                    }
                }
                resetSelectedItem() {
                    this.setState({ selectedItem: void 0 });
                }
            }
            (k.contextType = d.Z), (k.defaultProps = { source: p._4.Compose });
            const S = a.default.create((e) => ({ dropdownStyle: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.small, boxShadow: e.boxShadows.medium, minHeight: 100, overflowX: "hidden", overflowY: "auto" }, mask: { ...a.default.absoluteFillObject, position: "fixed" }, modalFullViewportStyle: { backgroundColor: e.colors.cellBackground, end: 0, start: 0, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, minHeight: 100 }, inputContainer: { flexGrow: 1, position: "relative", width: "100%", zIndex: h.po } })),
                v = (0, g.Z)(k, { component: "compose" });
        },
        524110: (e, t, s) => {
            s.d(t, { Z: () => w });
            var n = s(202784),
                l = s(928316),
                i = s(325686),
                a = s(420412),
                r = s(912021),
                o = s(817480),
                d = s(27951),
                c = s(602427),
                u = s(822399),
                h = s(392237),
                p = s(332920),
                m = s.n(p),
                g = s(575211);
            const y = m().f2b3fe06,
                _ = h.default.create((e) => ({ hidden: { visibility: "hidden" } })),
                f = ({ isLoading: e }) => {
                    const [t, s] = n.useState(!1);
                    return (
                        n.useEffect(() => {
                            let t;
                            return e ? (t = setTimeout(() => s(!0), g.n)) : s(!1), () => clearTimeout(t);
                        }, [e]),
                        n.createElement(u.Z, { ariaValueText: t ? y : "", indeterminate: t, style: !t && _.hidden })
                    );
                };
            class w extends n.Component {
                constructor(e, t) {
                    super(e),
                        (this._setFocusedItemRef = (e) => {
                            this._shouldScrollToFocusedItem && e && ((0, c.up)(this._getScrollParent(), e), (this._shouldScrollToFocusedItem = !1));
                        }),
                        (this._resetScroll = () => {
                            const e = this._getScrollParent();
                            e && (e.scrollTop = 0);
                        }),
                        (this._getFlattenedItems = (0, r.Z)((e) => (0, o.Z)(e))),
                        (this._handleItemClick = (e, t) => {
                            const { items: s, onItemClick: n } = this.props,
                                l = this._getFlattenedItems(s).indexOf(e);
                            e && !t && !this._shouldBlockInteractivity && n(e, l), this._resetFocus();
                        }),
                        (this._getResultCount = () => {
                            const { items: e } = this.props;
                            return this._getFlattenedItems(e).length;
                        }),
                        (this._setFocusIndex = (e, t) => {
                            const { items: s, onItemFocusChanged: n } = this.props;
                            (this._shouldScrollToFocusedItem = t), this.setState({ focusIndex: e }), n && n(this._getFlattenedItems(s)[e]);
                        }),
                        (this._resetFocus = () => {
                            this._setFocusIndex(this.props.withItemAlwaysSelected ? 0 : -1);
                        }),
                        (this.focusNext = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            if (0 === t) return;
                            const s = e + 1 >= t ? 0 : e + 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.focusPrevious = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            if (0 === t) return;
                            const s = e - 1 < 0 ? t - 1 : e - 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.hasFocusedItem = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            return e >= 0 && t > e;
                        }),
                        (this.selectFocusedItem = () => {
                            const { focusIndex: e } = this.state,
                                { getItemIsDisabled: t, items: s } = this.props;
                            if (this.hasFocusedItem()) {
                                const n = this._getFlattenedItems(s)[e],
                                    l = !!t && t(n, n.data);
                                this._handleItemClick(n, l);
                            }
                        }),
                        (this.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 });
                }
                componentDidMount() {
                    this._resetFocus();
                }
                componentWillUnmount() {
                    clearTimeout(this._interactivityTimeout);
                }
                componentDidUpdate(e) {
                    e.items !== this.props.items &&
                        (this._resetFocus(),
                        this._resetScroll(),
                        this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                        (this._shouldBlockInteractivity = !0),
                        (this._interactivityTimeout = setTimeout(() => {
                            this._shouldBlockInteractivity = !1;
                        }, 500)));
                }
                render() {
                    const { domId: e, isLoading: t, items: s, renderCallout: l, renderFooter: a, renderHeader: r, renderNoResultsState: o, selectedItems: d, shouldAlwaysRender: c, style: u } = this.props,
                        h = !!(t || s.length || c);
                    let p = 0;
                    const m = !!d;
                    return h
                        ? n.createElement(
                              i.Z,
                              { "aria-multiselectable": m, id: e, role: "listbox", style: u },
                              l ? l() : null,
                              n.createElement(f, { isLoading: !!t }),
                              r ? r() : null,
                              s.length
                                  ? s.map((e, t) => {
                                        const n = !Array.isArray(s[t - 1]) && t > 0,
                                            l = t < s.length - 1,
                                            i = Array.isArray(e) ? this._renderTypeaheadGroup(e, p, n, l) : this._renderTypeaheadItem(e, p);
                                        return (p += Array.isArray(e) ? e.length : 1), i;
                                    })
                                  : null,
                              a ? a() : null,
                          )
                        : o
                          ? o({ style: u })
                          : null;
                }
                _renderTypeaheadGroup(e, t, s, l) {
                    const { withSectionDivider: i } = this.props;
                    return n.createElement(
                        n.Fragment,
                        { key: `typeaheadGroup-${t}` },
                        i && s ? n.createElement(a.Z, { key: `typeaheadDividerTop-${t}` }) : null,
                        e.map((e, s) => this._renderTypeaheadItem(e, t + s)),
                        i && l ? n.createElement(a.Z, { key: `typeaheadDividerBottom-${t}` }) : null,
                    );
                }
                _renderTypeaheadItem(e, t) {
                    const { ariaDescendantId: s, getItemDisabledMessage: l, getItemIsDisabled: i, getUserDisplayNameLabel: a, getUserDisplayNameType: r, query: o, renderAvatarDecoration: c, renderUserDecoration: u, selectedItems: h, source: p, withUserHoverCard: m } = this.props,
                        { focusIndex: g } = this.state,
                        y = !(!h || !e.id) && h.indexOf(e.id) >= 0,
                        _ = !!h,
                        f = g === t,
                        w = i && i(e, e.data),
                        I = l && l(e, e.data);
                    return n.createElement(d.ZP, { disabledMessage: I, domId: f ? s : void 0, getUserDisplayNameLabel: a, getUserDisplayNameType: r, isDisabled: w, isFocused: f, isInMultiSelect: _, isSelected: y, item: e, key: `typeaheadItem-${t}-${e.id || ""}`, onClick: this._handleItemClick, onRef: f ? this._setFocusedItemRef : void 0, query: o, renderAvatarDecoration: c, renderUserDecoration: u, source: p, withUserHoverCard: m });
                }
                _getScrollParent() {
                    if (!this._scrollParent) {
                        const e = (0, c.rP)(l.findDOMNode(this));
                        this._scrollParent = e === window ? null : e;
                    }
                    return this._scrollParent;
                }
            }
        },
        7339: (e, t, s) => {
            s.r(t), s.d(t, { UserPicker: () => _, default: () => S, finalGetItemIsDisabled: () => w, getFinalItemDisabledMessage: () => I });
            var n = s(202784),
                l = s(325686),
                i = s(823161),
                a = s(973014),
                r = s(392237),
                o = s(332920),
                d = s.n(o),
                c = s(874088),
                u = s(27951),
                h = s(339110);
            const p = "searchPeople",
                m = [h.my.Users],
                g = d().fc9dd578,
                y = d().gdb7bc25;
            class _ extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderSelectedUsersList = () => {
                            const { selectedUsers: e } = this.props;
                            return n.createElement(l.Z, { style: k.selectedUsersList }, e.map(this._renderSelectedUserPill));
                        }),
                        (this._renderSelectedUserPill = (e) => {
                            const { withCompactPills: t } = this.props,
                                s = this.props.onRemove.bind(this, e),
                                l = e.type === h.El.User ? n.createElement(i.default, { "aria-hidden": !0, focusable: !1, size: "custom", uri: e.data.profile_image_url_https }) : void 0;
                            return n.createElement(a.Z, { "aria-label": y({ name: e.data.name }), avatar: l, compact: t, key: e.id, mode: "remove", onClick: s, style: k.selectionPill, text: e.data.name });
                        }),
                        (this._getItemIsDisabled = (e) => {
                            const { getItemIsDisabled: t, preselectedUsers: s } = this.props;
                            return w(e, t, s);
                        }),
                        (this._getItemDisabledMessage = (e) => {
                            const { getItemDisabledMessage: t, preselectedUsers: s } = this.props;
                            return I(e, t, s);
                        }),
                        (this._handleQueryChange = (e) => {
                            const { onQueryChange: t } = this.props;
                            this.setState({ query: e }), t && t(e);
                        }),
                        (this._handleOnSelect = (e) => {
                            const { onSelect: t } = this.props;
                            t && t(e);
                        }),
                        (this.state = { query: "" });
                }
                render() {
                    const { injections: e, preselectedUsers: t, renderAvatarDecoration: s, renderCallout: i, renderHeader: a, renderNoResultsState: r, selectedUsers: o, shouldAutoFocus: d, source: h } = this.props,
                        y = o.map(({ id: e }) => e).concat(t);
                    return n.createElement(l.Z, { style: k.root }, n.createElement(c.default, { alwaysOpen: !0, disableClearButton: !0, filter: m, getItemDisabledMessage: this._getItemDisabledMessage, getItemIsDisabled: this._getItemIsDisabled, injectedItems: e, isModal: !0, onItemClick: this._handleOnSelect, onQueryChange: this._handleQueryChange, placeholder: g, renderAvatarDecoration: s, renderCallout: i, renderHeader: a, renderInSearchField: o.length ? this._renderSelectedUsersList : void 0, renderNoResultsState: r, renderUserDecoration: u.ib, selectedItems: y, shouldAutoFocus: d, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: h, testID: p, withSectionDivider: !1 }));
                }
            }
            _.defaultProps = { preselectedUsers: [], shouldAutoFocus: !0, withCompactPills: !1 };
            const f = (e, t) => t.indexOf(e) >= 0,
                w = (e, t, s) => f(e.id, s) || !(!t || !t(e)),
                I = (e, t, s) => {
                    if (!f(e.id, s) && t) return t(e);
                },
                k = r.default.create((e) => ({ root: { flex: 1 }, selectionPill: { margin: e.spaces.space4, maxWidth: `calc(100% - ${e.spaces.space16})` }, selectedUsersList: { flexDirection: "row", flexWrap: "wrap", padding: e.spaces.space4 } })),
                S = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-a2dee9c7.22b50d2a.js.map
