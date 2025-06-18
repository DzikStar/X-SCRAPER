"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"],
    {
        782642: (e, t, r) => {
            r.d(t, { p: () => a });
            var i = r(202784),
                n = r(125363),
                o = r(601576);
            const a = () => {
                    const e = (0, n.I0)(),
                        t = s(),
                        r = i.useRef(null);
                    return (
                        i.useEffect(() => () => clearTimeout(r.current), [t]),
                        i.useCallback(
                            (i) => {
                                e((0, o.fz)(i)), (r.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                s = () => {
                    const e = (0, n.I0)();
                    return i.useCallback(() => e((0, o.RS)()), [e]);
                };
        },
        409209: (e, t, r) => {
            r.d(t, { Z: () => v });
            var i = r(807896),
                n = r(231461),
                o = r(33229),
                a = r(202784),
                s = r(77325),
                l = r(133028),
                p = r(325686),
                c = r(703185),
                d = r(280652),
                h = r(614983),
                u = r.n(h),
                g = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class m extends a.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, t) => {
                            var r = this._subExtractor(t);
                            return (r && r.key) || String(t);
                        }),
                        (this._convertViewable = (e) => {
                            var t;
                            u()(null != e.index, "Received a broken ViewToken");
                            var r = this._subExtractor(e.index);
                            if (!r) return null;
                            var i = r.section.keyExtractor,
                                n = this.props.keyExtractor || d.jn,
                                o = null != i ? i(e.item, r.index) : n(e.item, null !== (t = r.index) && void 0 !== t ? t : 0);
                            return (0, l.Z)((0, l.Z)({}, e), {}, { index: r.index, key: o, section: r.section });
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
                                var s = n.section;
                                if (!0 === n.header) {
                                    var l = this.props.renderSectionHeader;
                                    return l ? l({ section: s }) : null;
                                }
                                var p = this.props.renderSectionFooter;
                                return p ? p({ section: s }) : null;
                            }
                            var c = n.section.renderItem || this.props.renderItem,
                                d = this._getSeparatorComponent(i, n, e);
                            return u()(c, "no renderItem!"), a.createElement(f, { SeparatorComponent: d, LeadingSeparatorComponent: 0 === o ? this.props.SectionSeparatorComponent : void 0, cellKey: n.key, index: o, item: r, leadingItem: n.leadingItem, leadingSection: n.leadingSection, prevCellKey: (this._subExtractor(i - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: c, section: n.section, trailingItem: n.trailingItem, trailingSection: n.trailingSection, inverted: !!this.props.inverted });
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
                        var n = (0, l.Z)((0, l.Z)({}, e), {}, { viewOffset: i, index: t });
                        this._listRef.scrollToIndex(n);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, t = this.props, r = (t.ItemSeparatorComponent, t.SectionSeparatorComponent, t.renderItem, t.renderSectionFooter, t.renderSectionHeader, t.sections, t.stickySectionHeadersEnabled, (0, n.Z)(t, g)), o = this.props.ListHeaderComponent ? 1 : 0, l = this.props.stickySectionHeadersEnabled ? [] : void 0, p = 0, d = (0, s.Z)(this.props.sections); !(e = d()).done; ) {
                        var h = e.value;
                        null != l && l.push(p + o), (p += 2), (p += this.props.getItemCount(h.data));
                    }
                    var u = this._renderItem(p);
                    return a.createElement(c.Z, (0, i.Z)({}, r, { keyExtractor: this._keyExtractor, stickyHeaderIndices: l, renderItem: u, data: this.props.sections, getItem: (e, t) => this._getItem(this.props, e, t), getItemCount: () => p, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
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
                            p = l.data,
                            c = l.key || String(s);
                        if (!((t -= 1) >= n(p) + 1)) return -1 === t ? { section: l, key: c + ":header", index: null, header: !0, trailingSection: a[s + 1] } : t === n(p) ? { section: l, key: c + ":footer", index: null, header: !1, trailingSection: a[s + 1] } : { section: l, key: c + ":" + (l.keyExtractor || o || d.jn)(i(p, t), t), index: t, leadingItem: i(p, t - 1), leadingSection: a[s - 1], trailingItem: i(p, t + 1), trailingSection: a[s + 1] };
                        t -= n(p) + 1;
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
            function f(e) {
                var t = e.LeadingSeparatorComponent,
                    r = e.SeparatorComponent,
                    n = e.cellKey,
                    o = e.prevCellKey,
                    s = e.setSelfHighlightCallback,
                    c = e.updateHighlightFor,
                    d = e.setSelfUpdatePropsCallback,
                    h = e.updatePropsFor,
                    u = e.item,
                    g = e.index,
                    m = e.section,
                    f = e.inverted,
                    S = a.useState(!1),
                    _ = S[0],
                    v = S[1],
                    I = a.useState(!1),
                    C = I[0],
                    k = I[1],
                    b = a.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    x = b[0],
                    w = b[1],
                    R = a.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    y = R[0],
                    E = R[1];
                a.useEffect(
                    () => (
                        s(n, k),
                        d(n, E),
                        () => {
                            d(n, null), s(n, null);
                        }
                    ),
                    [n, s, E, d],
                );
                var Z = {
                        highlight: () => {
                            v(!0), k(!0), null != o && c(o, !0);
                        },
                        unhighlight: () => {
                            v(!1), k(!1), null != o && c(o, !1);
                        },
                        updateProps: (e, i) => {
                            "leading" === e ? (null != t ? w((0, l.Z)((0, l.Z)({}, x), i)) : null != o && h(o, (0, l.Z)((0, l.Z)({}, x), i))) : "trailing" === e && null != r && E((0, l.Z)((0, l.Z)({}, y), i));
                        },
                    },
                    H = e.renderItem({ item: u, index: g, section: m, separators: Z }),
                    L = null != t && a.createElement(t, (0, i.Z)({ highlighted: _ }, x)),
                    F = null != r && a.createElement(r, (0, i.Z)({ highlighted: C }, y));
                return L || F ? a.createElement(p.Z, null, !1 === f ? L : F, H, !1 === f ? F : L) : H;
            }
            const S = m;
            var _ = ["stickySectionHeadersEnabled"];
            class v extends a.PureComponent {
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
                        r = (0, n.Z)(e, _),
                        s = null != t ? t : "ios" === o.Z.OS;
                    return a.createElement(S, (0, i.Z)({}, r, { stickySectionHeadersEnabled: s, ref: this._captureRef, getItemCount: (e) => e.length, getItem: (e, t) => e[t] }));
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9.d2cdeb1a.js.map
