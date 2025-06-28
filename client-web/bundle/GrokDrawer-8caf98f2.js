"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-8caf98f2"],
    {
        661841: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = {
                centroidDimension: function (e, t, n, i) {
                    var o = e.touchBank,
                        a = 0,
                        s = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > t && ((a += i && n ? l.currentPageX : i && !n ? l.currentPageY : !i && n ? l.previousPageX : l.previousPageY), (s = 1));
                    else
                        for (var c = 0; c < o.length; c++) {
                            var u = o[c];
                            if (null != u && u.touchActive && u.currentTimeStamp >= t) {
                                (a += i && n ? u.currentPageX : i && !n ? u.currentPageY : !i && n ? u.previousPageX : u.previousPageY), s++;
                            }
                        }
                    return s > 0 ? a / s : r.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return r.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return r.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const i = r;
        },
        337925: (e, t, n) => {
            n.d(t, { U: () => r });
            n(614983);
            function r(e) {
                return null;
            }
        },
        874028: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(33229).Z;
        },
        881806: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784);
            function i() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.useCallback)(
                    (e) => {
                        for (var n = 0, r = t; n < r.length; n++) {
                            var i = r[n];
                            null != i && ("function" == typeof i ? i(e) : (i.current = e));
                        }
                    },
                    [...t],
                );
            }
        },
        920863: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784);
            function i(e) {
                var t = (0, r.useRef)(void 0);
                return (0, r.useCallback)(
                    (n) => {
                        t.current && (t.current(), (t.current = void 0)), null != n && (t.current = e(n));
                    },
                    [e],
                );
            }
        },
        582975: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(807896),
                i = n(77325),
                o = n(231461),
                a = n(133028),
                s = n(325686),
                l = n(703185),
                c = n(280652),
                u = n(614983),
                d = n.n(u),
                p = n(202784),
                h = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class g extends p.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, t) => {
                            var n = this._subExtractor(t);
                            return (n && n.key) || String(t);
                        }),
                        (this._convertViewable = (e) => {
                            var t;
                            d()(null != e.index, "Received a broken ViewToken");
                            var n = this._subExtractor(e.index);
                            if (!n) return null;
                            var r = n.section.keyExtractor,
                                i = this.props.keyExtractor || c.jn,
                                o = null != r ? r(e.item, n.index) : i(e.item, null !== (t = n.index) && void 0 !== t ? t : 0);
                            return (0, a.Z)((0, a.Z)({}, e), {}, { index: n.index, key: o, section: n.section });
                        }),
                        (this._onViewableItemsChanged = (e) => {
                            var t = e.viewableItems,
                                n = e.changed,
                                r = this.props.onViewableItemsChanged;
                            null != r && r({ viewableItems: t.map(this._convertViewable, this).filter(Boolean), changed: n.map(this._convertViewable, this).filter(Boolean) });
                        }),
                        (this._renderItem = (e) => (t) => {
                            var n = t.item,
                                r = t.index,
                                i = this._subExtractor(r);
                            if (!i) return null;
                            var o = i.index;
                            if (null == o) {
                                var a = i.section;
                                if (!0 === i.header) {
                                    var s = this.props.renderSectionHeader;
                                    return s ? s({ section: a }) : null;
                                }
                                var l = this.props.renderSectionFooter;
                                return l ? l({ section: a }) : null;
                            }
                            var c = i.section.renderItem || this.props.renderItem,
                                u = this._getSeparatorComponent(r, i, e);
                            return d()(c, "no renderItem!"), p.createElement(m, { SeparatorComponent: u, LeadingSeparatorComponent: 0 === o ? this.props.SectionSeparatorComponent : void 0, cellKey: i.key, index: o, item: n, leadingItem: i.leadingItem, leadingSection: i.leadingSection, prevCellKey: (this._subExtractor(r - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: c, section: i.section, trailingItem: i.trailingItem, trailingSection: i.trailingSection, inverted: !!this.props.inverted });
                        }),
                        (this._updatePropsFor = (e, t) => {
                            var n = this._updatePropsMap[e];
                            null != n && n(t);
                        }),
                        (this._updateHighlightFor = (e, t) => {
                            var n = this._updateHighlightMap[e];
                            null != n && n(t);
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
                    for (var t = e.itemIndex, n = 0; n < e.sectionIndex; n++) t += this.props.getItemCount(this.props.sections[n].data) + 2;
                    var r = e.viewOffset || 0;
                    if (null != this._listRef) {
                        if (e.itemIndex > 0 && this.props.stickySectionHeadersEnabled) r += this._listRef.__getFrameMetricsApprox(t - e.itemIndex, this._listRef.props).length;
                        var i = (0, a.Z)((0, a.Z)({}, e), {}, { viewOffset: r, index: t });
                        this._listRef.scrollToIndex(i);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, t = this.props, n = (t.ItemSeparatorComponent, t.SectionSeparatorComponent, t.renderItem, t.renderSectionFooter, t.renderSectionHeader, t.sections, t.stickySectionHeadersEnabled, (0, o.Z)(t, h)), a = this.props.ListHeaderComponent ? 1 : 0, s = this.props.stickySectionHeadersEnabled ? [] : void 0, c = 0, u = (0, i.Z)(this.props.sections); !(e = u()).done; ) {
                        var d = e.value;
                        null != s && s.push(c + a), (c += 2), (c += this.props.getItemCount(d.data));
                    }
                    var g = this._renderItem(c);
                    return p.createElement(l.Z, (0, r.Z)({}, n, { keyExtractor: this._keyExtractor, stickyHeaderIndices: s, renderItem: g, data: this.props.sections, getItem: (e, t) => this._getItem(this.props, e, t), getItemCount: () => c, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
                }
                _getItem(e, t, n) {
                    if (!t) return null;
                    for (var r = n - 1, i = 0; i < t.length; i++) {
                        var o = t[i],
                            a = o.data,
                            s = e.getItemCount(a);
                        if (-1 === r || r === s) return o;
                        if (r < s) return e.getItem(a, r);
                        r -= s + 2;
                    }
                    return null;
                }
                _subExtractor(e) {
                    for (var t = e, n = this.props, r = n.getItem, i = n.getItemCount, o = n.keyExtractor, a = n.sections, s = 0; s < a.length; s++) {
                        var l = a[s],
                            u = l.data,
                            d = l.key || String(s);
                        if (!((t -= 1) >= i(u) + 1)) return -1 === t ? { section: l, key: d + ":header", index: null, header: !0, trailingSection: a[s + 1] } : t === i(u) ? { section: l, key: d + ":footer", index: null, header: !1, trailingSection: a[s + 1] } : { section: l, key: d + ":" + (l.keyExtractor || o || c.jn)(r(u, t), t), index: t, leadingItem: r(u, t - 1), leadingSection: a[s - 1], trailingItem: r(u, t + 1), trailingSection: a[s + 1] };
                        t -= i(u) + 1;
                    }
                }
                _getSeparatorComponent(e, t, n) {
                    if (!(t = t || this._subExtractor(e))) return null;
                    var r = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
                        i = this.props.SectionSeparatorComponent,
                        o = e === n - 1,
                        a = t.index === this.props.getItemCount(t.section.data) - 1;
                    return i && a ? i : !r || a || o ? null : r;
                }
            }
            function m(e) {
                var t = e.LeadingSeparatorComponent,
                    n = e.SeparatorComponent,
                    i = e.cellKey,
                    o = e.prevCellKey,
                    l = e.setSelfHighlightCallback,
                    c = e.updateHighlightFor,
                    u = e.setSelfUpdatePropsCallback,
                    d = e.updatePropsFor,
                    h = e.item,
                    g = e.index,
                    m = e.section,
                    f = e.inverted,
                    v = p.useState(!1),
                    S = v[0],
                    _ = v[1],
                    I = p.useState(!1),
                    C = I[0],
                    x = I[1],
                    k = p.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    b = k[0],
                    y = k[1],
                    E = p.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    Z = E[0],
                    P = E[1];
                p.useEffect(
                    () => (
                        l(i, x),
                        u(i, P),
                        () => {
                            u(i, null), l(i, null);
                        }
                    ),
                    [i, l, P, u],
                );
                var w = {
                        highlight: () => {
                            _(!0), x(!0), null != o && c(o, !0);
                        },
                        unhighlight: () => {
                            _(!1), x(!1), null != o && c(o, !1);
                        },
                        updateProps: (e, r) => {
                            "leading" === e ? (null != t ? y((0, a.Z)((0, a.Z)({}, b), r)) : null != o && d(o, (0, a.Z)((0, a.Z)({}, b), r))) : "trailing" === e && null != n && P((0, a.Z)((0, a.Z)({}, Z), r));
                        },
                    },
                    H = e.renderItem({ item: h, index: g, section: m, separators: w }),
                    F = null != t && p.createElement(t, (0, r.Z)({ highlighted: S }, b)),
                    R = null != n && p.createElement(n, (0, r.Z)({ highlighted: C }, Z));
                return F || R ? p.createElement(s.Z, null, !1 === f ? F : R, H, !1 === f ? R : F) : H;
            }
            const f = g;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-8caf98f2.6534c6fa.js.map
