"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"],
    {
        326439: (e, n, t) => {
            t.d(n, { Z: () => d });
            var l,
                a,
                i,
                r,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (r = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: l,
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
                                                    a,
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
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
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
        498510: (e, n, t) => {
            t.d(n, { Z: () => d });
            var l,
                a,
                i,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (l = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                            (r = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [l, { alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [r, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, n, t) => {
            t.d(n, { Z: () => a });
            var l = {
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
            const a = l;
        },
        337925: (e, n, t) => {
            t.d(n, { U: () => l });
            t(614983);
            function l(e) {
                return null;
            }
        },
        874028: (e, n, t) => {
            t.d(n, { Z: () => l });
            const l = t(33229).Z;
        },
        881806: (e, n, t) => {
            t.d(n, { Z: () => a });
            var l = t(202784);
            function a() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return (0, l.useCallback)(
                    (e) => {
                        for (var t = 0, l = n; t < l.length; t++) {
                            var a = l[t];
                            null != a && ("function" == typeof a ? a(e) : (a.current = e));
                        }
                    },
                    [...n],
                );
            }
        },
        920863: (e, n, t) => {
            t.d(n, { Z: () => a });
            var l = t(202784);
            function a(e) {
                var n = (0, l.useRef)(void 0);
                return (0, l.useCallback)(
                    (t) => {
                        n.current && (n.current(), (n.current = void 0)), null != t && (n.current = e(t));
                    },
                    [e],
                );
            }
        },
        582975: (e, n, t) => {
            t.d(n, { Z: () => y });
            var l = t(807896),
                a = t(77325),
                i = t(231461),
                r = t(133028),
                s = t(325686),
                o = t(703185),
                d = t(280652),
                u = t(614983),
                c = t.n(u),
                g = t(202784),
                p = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class m extends g.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, n) => {
                            var t = this._subExtractor(n);
                            return (t && t.key) || String(n);
                        }),
                        (this._convertViewable = (e) => {
                            var n;
                            c()(null != e.index, "Received a broken ViewToken");
                            var t = this._subExtractor(e.index);
                            if (!t) return null;
                            var l = t.section.keyExtractor,
                                a = this.props.keyExtractor || d.jn,
                                i = null != l ? l(e.item, t.index) : a(e.item, null !== (n = t.index) && void 0 !== n ? n : 0);
                            return (0, r.Z)((0, r.Z)({}, e), {}, { index: t.index, key: i, section: t.section });
                        }),
                        (this._onViewableItemsChanged = (e) => {
                            var n = e.viewableItems,
                                t = e.changed,
                                l = this.props.onViewableItemsChanged;
                            null != l && l({ viewableItems: n.map(this._convertViewable, this).filter(Boolean), changed: t.map(this._convertViewable, this).filter(Boolean) });
                        }),
                        (this._renderItem = (e) => (n) => {
                            var t = n.item,
                                l = n.index,
                                a = this._subExtractor(l);
                            if (!a) return null;
                            var i = a.index;
                            if (null == i) {
                                var r = a.section;
                                if (!0 === a.header) {
                                    var s = this.props.renderSectionHeader;
                                    return s ? s({ section: r }) : null;
                                }
                                var o = this.props.renderSectionFooter;
                                return o ? o({ section: r }) : null;
                            }
                            var d = a.section.renderItem || this.props.renderItem,
                                u = this._getSeparatorComponent(l, a, e);
                            return c()(d, "no renderItem!"), g.createElement(h, { SeparatorComponent: u, LeadingSeparatorComponent: 0 === i ? this.props.SectionSeparatorComponent : void 0, cellKey: a.key, index: i, item: t, leadingItem: a.leadingItem, leadingSection: a.leadingSection, prevCellKey: (this._subExtractor(l - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: d, section: a.section, trailingItem: a.trailingItem, trailingSection: a.trailingSection, inverted: !!this.props.inverted });
                        }),
                        (this._updatePropsFor = (e, n) => {
                            var t = this._updatePropsMap[e];
                            null != t && t(n);
                        }),
                        (this._updateHighlightFor = (e, n) => {
                            var t = this._updateHighlightMap[e];
                            null != t && t(n);
                        }),
                        (this._setUpdateHighlightFor = (e, n) => {
                            null != n ? (this._updateHighlightMap[e] = n) : delete this._updateHighlightFor[e];
                        }),
                        (this._setUpdatePropsFor = (e, n) => {
                            null != n ? (this._updatePropsMap[e] = n) : delete this._updatePropsMap[e];
                        }),
                        (this._updateHighlightMap = {}),
                        (this._updatePropsMap = {}),
                        (this._captureRef = (e) => {
                            this._listRef = e;
                        });
                }
                scrollToLocation(e) {
                    for (var n = e.itemIndex, t = 0; t < e.sectionIndex; t++) n += this.props.getItemCount(this.props.sections[t].data) + 2;
                    var l = e.viewOffset || 0;
                    if (null != this._listRef) {
                        if (e.itemIndex > 0 && this.props.stickySectionHeadersEnabled) l += this._listRef.__getFrameMetricsApprox(n - e.itemIndex, this._listRef.props).length;
                        var a = (0, r.Z)((0, r.Z)({}, e), {}, { viewOffset: l, index: n });
                        this._listRef.scrollToIndex(a);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, n = this.props, t = (n.ItemSeparatorComponent, n.SectionSeparatorComponent, n.renderItem, n.renderSectionFooter, n.renderSectionHeader, n.sections, n.stickySectionHeadersEnabled, (0, i.Z)(n, p)), r = this.props.ListHeaderComponent ? 1 : 0, s = this.props.stickySectionHeadersEnabled ? [] : void 0, d = 0, u = (0, a.Z)(this.props.sections); !(e = u()).done; ) {
                        var c = e.value;
                        null != s && s.push(d + r), (d += 2), (d += this.props.getItemCount(c.data));
                    }
                    var m = this._renderItem(d);
                    return g.createElement(o.Z, (0, l.Z)({}, t, { keyExtractor: this._keyExtractor, stickyHeaderIndices: s, renderItem: m, data: this.props.sections, getItem: (e, n) => this._getItem(this.props, e, n), getItemCount: () => d, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
                }
                _getItem(e, n, t) {
                    if (!n) return null;
                    for (var l = t - 1, a = 0; a < n.length; a++) {
                        var i = n[a],
                            r = i.data,
                            s = e.getItemCount(r);
                        if (-1 === l || l === s) return i;
                        if (l < s) return e.getItem(r, l);
                        l -= s + 2;
                    }
                    return null;
                }
                _subExtractor(e) {
                    for (var n = e, t = this.props, l = t.getItem, a = t.getItemCount, i = t.keyExtractor, r = t.sections, s = 0; s < r.length; s++) {
                        var o = r[s],
                            u = o.data,
                            c = o.key || String(s);
                        if (!((n -= 1) >= a(u) + 1)) return -1 === n ? { section: o, key: c + ":header", index: null, header: !0, trailingSection: r[s + 1] } : n === a(u) ? { section: o, key: c + ":footer", index: null, header: !1, trailingSection: r[s + 1] } : { section: o, key: c + ":" + (o.keyExtractor || i || d.jn)(l(u, n), n), index: n, leadingItem: l(u, n - 1), leadingSection: r[s - 1], trailingItem: l(u, n + 1), trailingSection: r[s + 1] };
                        n -= a(u) + 1;
                    }
                }
                _getSeparatorComponent(e, n, t) {
                    if (!(n = n || this._subExtractor(e))) return null;
                    var l = n.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
                        a = this.props.SectionSeparatorComponent,
                        i = e === t - 1,
                        r = n.index === this.props.getItemCount(n.section.data) - 1;
                    return a && r ? a : !l || r || i ? null : l;
                }
            }
            function h(e) {
                var n = e.LeadingSeparatorComponent,
                    t = e.SeparatorComponent,
                    a = e.cellKey,
                    i = e.prevCellKey,
                    o = e.setSelfHighlightCallback,
                    d = e.updateHighlightFor,
                    u = e.setSelfUpdatePropsCallback,
                    c = e.updatePropsFor,
                    p = e.item,
                    m = e.index,
                    h = e.section,
                    y = e.inverted,
                    k = g.useState(!1),
                    v = k[0],
                    _ = k[1],
                    S = g.useState(!1),
                    f = S[0],
                    F = S[1],
                    I = g.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    w = I[0],
                    K = I[1],
                    b = g.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    x = b[0],
                    C = b[1];
                g.useEffect(
                    () => (
                        o(a, F),
                        u(a, C),
                        () => {
                            u(a, null), o(a, null);
                        }
                    ),
                    [a, o, C, u],
                );
                var L = {
                        highlight: () => {
                            _(!0), F(!0), null != i && d(i, !0);
                        },
                        unhighlight: () => {
                            _(!1), F(!1), null != i && d(i, !1);
                        },
                        updateProps: (e, l) => {
                            "leading" === e ? (null != n ? K((0, r.Z)((0, r.Z)({}, w), l)) : null != i && c(i, (0, r.Z)((0, r.Z)({}, w), l))) : "trailing" === e && null != t && C((0, r.Z)((0, r.Z)({}, x), l));
                        },
                    },
                    E = e.renderItem({ item: p, index: m, section: h, separators: L }),
                    T = null != n && g.createElement(n, (0, l.Z)({ highlighted: v }, w)),
                    Z = null != t && g.createElement(t, (0, l.Z)({ highlighted: f }, x));
                return T || Z ? g.createElement(s.Z, null, !1 === y ? T : Z, E, !1 === y ? Z : T) : E;
            }
            const y = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b.4e64f54a.js.map
