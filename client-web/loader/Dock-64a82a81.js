"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock-64a82a81"],
    {
        975064: (e, t, r) => {
            r.d(t, { Z: () => p });
            var i = r(807896),
                n = r(231461),
                o = r(33229),
                a = r(202784),
                s = r(582975),
                l = ["stickySectionHeadersEnabled"];
            class p extends a.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._captureRef = (e) => {
                            this._wrapperListRef = e;
                        });
                }
                scrollToLocation(e) {
                    null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(e);
                }
                recordInteraction() {
                    var e = this._wrapperListRef && this._wrapperListRef.getListRef();
                    e && e.recordInteraction();
                }
                flashScrollIndicators() {
                    var e = this._wrapperListRef && this._wrapperListRef.getListRef();
                    e && e.flashScrollIndicators();
                }
                getScrollResponder() {
                    var e = this._wrapperListRef && this._wrapperListRef.getListRef();
                    if (e) return e.getScrollResponder();
                }
                getScrollableNode() {
                    var e = this._wrapperListRef && this._wrapperListRef.getListRef();
                    if (e) return e.getScrollableNode();
                }
                render() {
                    var e = this.props,
                        t = e.stickySectionHeadersEnabled,
                        r = (0, n.Z)(e, l),
                        p = null != t ? t : "ios" === o.Z.OS;
                    return a.createElement(s.Z, (0, i.Z)({}, r, { stickySectionHeadersEnabled: p, ref: this._captureRef, getItemCount: (e) => e.length, getItem: (e, t) => e[t] }));
                }
            }
        },
        337925: (e, t, r) => {
            r.d(t, { U: () => i });
            r(614983);
            function i(e) {
                return null;
            }
        },
        874028: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = r(33229).Z;
        },
        881806: (e, t, r) => {
            r.d(t, { Z: () => n });
            var i = r(202784);
            function n() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, i.useCallback)(
                    (e) => {
                        for (var r = 0, i = t; r < i.length; r++) {
                            var n = i[r];
                            null != n && ("function" == typeof n ? n(e) : (n.current = e));
                        }
                    },
                    [...t],
                );
            }
        },
        920863: (e, t, r) => {
            r.d(t, { Z: () => n });
            var i = r(202784);
            function n(e) {
                var t = (0, i.useRef)(void 0);
                return (0, i.useCallback)(
                    (r) => {
                        t.current && (t.current(), (t.current = void 0)), null != r && (t.current = e(r));
                    },
                    [e],
                );
            }
        },
        582975: (e, t, r) => {
            r.d(t, { Z: () => f });
            var i = r(807896),
                n = r(77325),
                o = r(231461),
                a = r(133028),
                s = r(325686),
                l = r(703185),
                p = r(280652),
                c = r(614983),
                d = r.n(c),
                h = r(202784),
                u = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class g extends h.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, t) => {
                            var r = this._subExtractor(t);
                            return (r && r.key) || String(t);
                        }),
                        (this._convertViewable = (e) => {
                            var t;
                            d()(null != e.index, "Received a broken ViewToken");
                            var r = this._subExtractor(e.index);
                            if (!r) return null;
                            var i = r.section.keyExtractor,
                                n = this.props.keyExtractor || p.jn,
                                o = null != i ? i(e.item, r.index) : n(e.item, null !== (t = r.index) && void 0 !== t ? t : 0);
                            return (0, a.Z)((0, a.Z)({}, e), {}, { index: r.index, key: o, section: r.section });
                        }),
                        (this._onViewableItemsChanged = (e) => {
                            var t = e.viewableItems,
                                r = e.changed,
                                i = this.props.onViewableItemsChanged;
                            null != i && i({ viewableItems: t.map(this._convertViewable, this).filter(Boolean), changed: r.map(this._convertViewable, this).filter(Boolean) });
                        }),
                        (this._renderItem = (e) => (t) => {
                            var r = t.item,
                                i = t.index,
                                n = this._subExtractor(i);
                            if (!n) return null;
                            var o = n.index;
                            if (null == o) {
                                var a = n.section;
                                if (!0 === n.header) {
                                    var s = this.props.renderSectionHeader;
                                    return s ? s({ section: a }) : null;
                                }
                                var l = this.props.renderSectionFooter;
                                return l ? l({ section: a }) : null;
                            }
                            var p = n.section.renderItem || this.props.renderItem,
                                c = this._getSeparatorComponent(i, n, e);
                            return d()(p, "no renderItem!"), h.createElement(m, { SeparatorComponent: c, LeadingSeparatorComponent: 0 === o ? this.props.SectionSeparatorComponent : void 0, cellKey: n.key, index: o, item: r, leadingItem: n.leadingItem, leadingSection: n.leadingSection, prevCellKey: (this._subExtractor(i - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: p, section: n.section, trailingItem: n.trailingItem, trailingSection: n.trailingSection, inverted: !!this.props.inverted });
                        }),
                        (this._updatePropsFor = (e, t) => {
                            var r = this._updatePropsMap[e];
                            null != r && r(t);
                        }),
                        (this._updateHighlightFor = (e, t) => {
                            var r = this._updateHighlightMap[e];
                            null != r && r(t);
                        }),
                        (this._setUpdateHighlightFor = (e, t) => {
                            null != t ? (this._updateHighlightMap[e] = t) : delete this._updateHighlightFor[e];
                        }),
                        (this._setUpdatePropsFor = (e, t) => {
                            null != t ? (this._updatePropsMap[e] = t) : delete this._updatePropsMap[e];
                        }),
                        (this._updateHighlightMap = {}),
                        (this._updatePropsMap = {}),
                        (this._captureRef = (e) => {
                            this._listRef = e;
                        });
                }
                scrollToLocation(e) {
                    for (var t = e.itemIndex, r = 0; r < e.sectionIndex; r++) t += this.props.getItemCount(this.props.sections[r].data) + 2;
                    var i = e.viewOffset || 0;
                    if (null != this._listRef) {
                        if (e.itemIndex > 0 && this.props.stickySectionHeadersEnabled) i += this._listRef.__getFrameMetricsApprox(t - e.itemIndex, this._listRef.props).length;
                        var n = (0, a.Z)((0, a.Z)({}, e), {}, { viewOffset: i, index: t });
                        this._listRef.scrollToIndex(n);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, t = this.props, r = (t.ItemSeparatorComponent, t.SectionSeparatorComponent, t.renderItem, t.renderSectionFooter, t.renderSectionHeader, t.sections, t.stickySectionHeadersEnabled, (0, o.Z)(t, u)), a = this.props.ListHeaderComponent ? 1 : 0, s = this.props.stickySectionHeadersEnabled ? [] : void 0, p = 0, c = (0, n.Z)(this.props.sections); !(e = c()).done; ) {
                        var d = e.value;
                        null != s && s.push(p + a), (p += 2), (p += this.props.getItemCount(d.data));
                    }
                    var g = this._renderItem(p);
                    return h.createElement(l.Z, (0, i.Z)({}, r, { keyExtractor: this._keyExtractor, stickyHeaderIndices: s, renderItem: g, data: this.props.sections, getItem: (e, t) => this._getItem(this.props, e, t), getItemCount: () => p, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
                }
                _getItem(e, t, r) {
                    if (!t) return null;
                    for (var i = r - 1, n = 0; n < t.length; n++) {
                        var o = t[n],
                            a = o.data,
                            s = e.getItemCount(a);
                        if (-1 === i || i === s) return o;
                        if (i < s) return e.getItem(a, i);
                        i -= s + 2;
                    }
                    return null;
                }
                _subExtractor(e) {
                    for (var t = e, r = this.props, i = r.getItem, n = r.getItemCount, o = r.keyExtractor, a = r.sections, s = 0; s < a.length; s++) {
                        var l = a[s],
                            c = l.data,
                            d = l.key || String(s);
                        if (!((t -= 1) >= n(c) + 1)) return -1 === t ? { section: l, key: d + ":header", index: null, header: !0, trailingSection: a[s + 1] } : t === n(c) ? { section: l, key: d + ":footer", index: null, header: !1, trailingSection: a[s + 1] } : { section: l, key: d + ":" + (l.keyExtractor || o || p.jn)(i(c, t), t), index: t, leadingItem: i(c, t - 1), leadingSection: a[s - 1], trailingItem: i(c, t + 1), trailingSection: a[s + 1] };
                        t -= n(c) + 1;
                    }
                }
                _getSeparatorComponent(e, t, r) {
                    if (!(t = t || this._subExtractor(e))) return null;
                    var i = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
                        n = this.props.SectionSeparatorComponent,
                        o = e === r - 1,
                        a = t.index === this.props.getItemCount(t.section.data) - 1;
                    return n && a ? n : !i || a || o ? null : i;
                }
            }
            function m(e) {
                var t = e.LeadingSeparatorComponent,
                    r = e.SeparatorComponent,
                    n = e.cellKey,
                    o = e.prevCellKey,
                    l = e.setSelfHighlightCallback,
                    p = e.updateHighlightFor,
                    c = e.setSelfUpdatePropsCallback,
                    d = e.updatePropsFor,
                    u = e.item,
                    g = e.index,
                    m = e.section,
                    f = e.inverted,
                    S = h.useState(!1),
                    _ = S[0],
                    v = S[1],
                    I = h.useState(!1),
                    C = I[0],
                    x = I[1],
                    b = h.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    k = b[0],
                    w = b[1],
                    R = h.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    y = R[0],
                    E = R[1];
                h.useEffect(
                    () => (
                        l(n, x),
                        c(n, E),
                        () => {
                            c(n, null), l(n, null);
                        }
                    ),
                    [n, l, E, c],
                );
                var Z = {
                        highlight: () => {
                            v(!0), x(!0), null != o && p(o, !0);
                        },
                        unhighlight: () => {
                            v(!1), x(!1), null != o && p(o, !1);
                        },
                        updateProps: (e, i) => {
                            "leading" === e ? (null != t ? w((0, a.Z)((0, a.Z)({}, k), i)) : null != o && d(o, (0, a.Z)((0, a.Z)({}, k), i))) : "trailing" === e && null != r && E((0, a.Z)((0, a.Z)({}, y), i));
                        },
                    },
                    H = e.renderItem({ item: u, index: g, section: m, separators: Z }),
                    L = null != t && h.createElement(t, (0, i.Z)({ highlighted: _ }, k)),
                    F = null != r && h.createElement(r, (0, i.Z)({ highlighted: C }, y));
                return L || F ? h.createElement(s.Z, null, !1 === f ? L : F, H, !1 === f ? F : L) : H;
            }
            const f = g;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock-64a82a81.211bfd2a.js.map
