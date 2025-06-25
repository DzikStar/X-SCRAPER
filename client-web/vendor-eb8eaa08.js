window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-eb8eaa08"],
        {
            139229: (e, t, r) => {
                r.d(t, { Z: () => s });
                const s = function (e, t, r) {
                    return t < e ? e : t > r ? r : t;
                };
            },
            633044: (e, t, r) => {
                r.d(t, { Z: () => o });
                var s = r(133028),
                    i = r(77325),
                    n = r(614983),
                    a = r.n(n);
                function l(e, t, r, s, i, n) {
                    if (
                        (function (e, t, r) {
                            return e >= 0 && t <= r && t > e;
                        })(r, s, i)
                    )
                        return !0;
                    var a = (function (e, t, r) {
                        var s = Math.min(t, r) - Math.max(e, 0);
                        return Math.max(0, s);
                    })(r, s, i);
                    return 100 * (e ? a / i : a / n) >= t;
                }
                const o = class {
                    constructor(e) {
                        void 0 === e && (e = { viewAreaCoveragePercentThreshold: 0 }), (this._hasInteracted = !1), (this._timers = new Set()), (this._viewableIndices = []), (this._viewableItems = new Map()), (this._config = e);
                    }
                    dispose() {
                        this._timers.forEach(clearTimeout);
                    }
                    computeViewableItems(e, t, r, s, i) {
                        var n = e.getItemCount(e.data),
                            o = this._config,
                            h = o.itemVisiblePercentThreshold,
                            c = o.viewAreaCoveragePercentThreshold,
                            d = null != c,
                            u = d ? c : h;
                        a()(null != u && (null != h) != (null != c), "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
                        var p = [];
                        if (0 === n) return p;
                        var f = -1,
                            v = i || { first: 0, last: n - 1 },
                            m = v.first,
                            _ = v.last;
                        if (_ >= n) return [];
                        for (var g = m; g <= _; g++) {
                            var y = s(g, e);
                            if (y) {
                                var C = y.offset - t,
                                    w = C + y.length;
                                if (C < r && w > 0) (f = g), l(d, u, C, w, r, y.length) && p.push(g);
                                else if (f >= 0) break;
                            }
                        }
                        return p;
                    }
                    onUpdate(e, t, r, s, i, n, a) {
                        var l = e.getItemCount(e.data);
                        if ((!this._config.waitForInteraction || this._hasInteracted) && 0 !== l && s(0, e)) {
                            var o = [];
                            if ((l && (o = this.computeViewableItems(e, t, r, s, a)), this._viewableIndices.length !== o.length || !this._viewableIndices.every((e, t) => e === o[t])))
                                if (((this._viewableIndices = o), this._config.minimumViewTime)) {
                                    var h = setTimeout(() => {
                                        this._timers.delete(h), this._onUpdateSync(e, o, n, i);
                                    }, this._config.minimumViewTime);
                                    this._timers.add(h);
                                } else this._onUpdateSync(e, o, n, i);
                        }
                    }
                    resetViewableIndices() {
                        this._viewableIndices = [];
                    }
                    recordInteraction() {
                        this._hasInteracted = !0;
                    }
                    _onUpdateSync(e, t, r, n) {
                        t = t.filter((e) => this._viewableIndices.includes(e));
                        for (
                            var a,
                                l = this._viewableItems,
                                o = new Map(
                                    t.map((t) => {
                                        var r = n(t, !0, e);
                                        return [r.key, r];
                                    }),
                                ),
                                h = [],
                                c = (0, i.Z)(o);
                            !(a = c()).done;

                        ) {
                            var d = a.value,
                                u = d[0],
                                p = d[1];
                            l.has(u) || h.push(p);
                        }
                        for (var f, v = (0, i.Z)(l); !(f = v()).done; ) {
                            var m = f.value,
                                _ = m[0],
                                g = m[1];
                            o.has(_) || h.push((0, s.Z)((0, s.Z)({}, g), {}, { isViewable: !1 }));
                        }
                        h.length > 0 && ((this._viewableItems = o), r({ viewableItems: Array.from(o.values()), changed: h, viewabilityConfig: this._config }));
                    }
                };
            },
            280652: (e, t, r) => {
                function s(e, t, r, s, i, n) {
                    var a = e.getItemCount(e.data);
                    if (0 === a) return { first: 0, last: -1 };
                    var l = n.offset,
                        o = n.velocity,
                        h = n.visibleLength,
                        c = n.zoomScale,
                        d = void 0 === c ? 1 : c,
                        u = Math.max(0, l),
                        p = u + h,
                        f = (r - 1) * h,
                        v = o > 1 ? "after" : o < -1 ? "before" : "none",
                        m = Math.max(0, u - 0.5 * f),
                        _ = Math.max(0, p + 0.5 * f);
                    if (i(a - 1, e).offset * d < m) return { first: Math.max(0, a - 1 - t), last: a - 1 };
                    var g = (function (e, t, r, s) {
                            void 0 === s && (s = 1);
                            for (var i = t.getItemCount(t.data), n = [], a = 0; a < e.length; a++)
                                for (var l = e[a], o = 0, h = i - 1; o <= h; ) {
                                    var c = o + ((h - o) >>> 1),
                                        d = r(c, t),
                                        u = d.offset * s,
                                        p = (d.offset + d.length) * s;
                                    if ((0 === c && l < u) || (0 !== c && l <= u)) h = c - 1;
                                    else {
                                        if (!(l > p)) {
                                            n[a] = c;
                                            break;
                                        }
                                        o = c + 1;
                                    }
                                }
                            return n;
                        })([m, u, p, _], e, i, d),
                        y = g[0],
                        C = g[1],
                        w = g[2],
                        S = g[3];
                    (y = null == y ? 0 : y), (S = null == S ? a - 1 : S);
                    for (
                        var b = { first: (C = null == C ? Math.max(0, y) : C), last: (w = null == w ? Math.min(S, C + t - 1) : w) },
                            I = (function (e, t) {
                                return t.last - t.first + 1 - Math.max(0, 1 + Math.min(t.last, e.last) - Math.max(t.first, e.first));
                            })(s, b);
                        !(C <= y && w >= S);

                    ) {
                        var K = I >= t,
                            T = C <= s.first || C > s.last,
                            M = C > y && (!K || !T),
                            Z = w >= s.last || w < s.first,
                            P = w < S && (!K || !Z);
                        if (K && !M && !P) break;
                        !M || ("after" === v && P && Z) || (T && I++, C--), !P || ("before" === v && M && T) || (Z && I++, w++);
                    }
                    if (!(w >= C && C >= 0 && w < a && C >= y && w <= S && C <= b.first && w >= b.last)) throw new Error("Bad window calculation " + JSON.stringify({ first: C, last: w, itemCount: a, overscanFirst: y, overscanLast: S, visible: b }));
                    return { first: C, last: w };
                }
                function i(e, t) {
                    return "object" == typeof e && null != (null == e ? void 0 : e.key) ? e.key : "object" == typeof e && null != (null == e ? void 0 : e.id) ? e.id : String(t);
                }
                r.d(t, { EF: () => s, jn: () => i });
            },
            270679: (e, t, r) => {
                r.d(t, { Y: () => a });
                var s = r(133028),
                    i = r(614983),
                    n = r.n(i);
                class a {
                    constructor(e) {
                        n()(e >= 0, "CellRenderMask must contain a non-negative number os cells"), (this._numCells = e), (this._regions = 0 === e ? [] : [{ first: 0, last: e - 1, isSpacer: !0 }]);
                    }
                    enumerateRegions() {
                        return this._regions;
                    }
                    addCells(e) {
                        if ((n()(e.first >= 0 && e.first < this._numCells && e.last >= -1 && e.last < this._numCells && e.last >= e.first - 1, "CellRenderMask.addCells called with invalid cell range"), !(e.last < e.first))) {
                            var t = this._findRegion(e.first),
                                r = t[0],
                                i = t[1],
                                a = this._findRegion(e.last),
                                l = a[0],
                                o = a[1];
                            if (i !== o || r.isSpacer) {
                                var h = [],
                                    c = [],
                                    d = (0, s.Z)((0, s.Z)({}, e), {}, { isSpacer: !1 });
                                r.first < d.first && (r.isSpacer ? h.push({ first: r.first, last: d.first - 1, isSpacer: !0 }) : (d.first = r.first)), l.last > d.last && (l.isSpacer ? c.push({ first: d.last + 1, last: l.last, isSpacer: !0 }) : (d.last = l.last));
                                var u = [...h, d, ...c],
                                    p = o - i + 1;
                                this._regions.splice(i, p, ...u);
                            }
                        }
                    }
                    numCells() {
                        return this._numCells;
                    }
                    equals(e) {
                        return this._numCells === e._numCells && this._regions.length === e._regions.length && this._regions.every((t, r) => t.first === e._regions[r].first && t.last === e._regions[r].last && t.isSpacer === e._regions[r].isSpacer);
                    }
                    _findRegion(e) {
                        for (var t = 0, r = this._regions.length - 1; t <= r; ) {
                            var s = Math.floor((t + r) / 2),
                                i = this._regions[s];
                            if (e >= i.first && e <= i.last) return [i, s];
                            e < i.first ? (r = s - 1) : e > i.last && (t = s + 1);
                        }
                        n()(!1, "A region was not found containing cellIdx " + e);
                    }
                }
            },
            69868: (e, t, r) => {
                r.d(t, { Z: () => a });
                var s = r(77325),
                    i = r(614983),
                    n = r.n(i);
                class a {
                    constructor() {
                        (this._cellKeyToChildren = new Map()), (this._childrenToCellKey = new Map());
                    }
                    add(e, t) {
                        var r;
                        n()(!this._childrenToCellKey.has(e), "Trying to add already present child list");
                        var s = null !== (r = this._cellKeyToChildren.get(t)) && void 0 !== r ? r : new Set();
                        s.add(e), this._cellKeyToChildren.set(t, s), this._childrenToCellKey.set(e, t);
                    }
                    remove(e) {
                        var t = this._childrenToCellKey.get(e);
                        n()(null != t, "Trying to remove non-present child list"), this._childrenToCellKey.delete(e);
                        var r = this._cellKeyToChildren.get(t);
                        n()(r, "_cellKeyToChildren should contain cellKey"), r.delete(e), 0 === r.size && this._cellKeyToChildren.delete(t);
                    }
                    forEach(e) {
                        for (var t, r = (0, s.Z)(this._cellKeyToChildren.values()); !(t = r()).done; )
                            for (var i, n = t.value, a = (0, s.Z)(n); !(i = a()).done; ) {
                                e(i.value);
                            }
                    }
                    forEachInCell(e, t) {
                        for (var r, i, n = null !== (r = this._cellKeyToChildren.get(e)) && void 0 !== r ? r : [], a = (0, s.Z)(n); !(i = a()).done; ) {
                            t(i.value);
                        }
                    }
                    anyInCell(e, t) {
                        for (var r, i, n = null !== (r = this._cellKeyToChildren.get(e)) && void 0 !== r ? r : [], a = (0, s.Z)(n); !(i = a()).done; ) {
                            if (t(i.value)) return !0;
                        }
                        return !1;
                    }
                    size() {
                        return this._childrenToCellKey.size;
                    }
                }
            },
            640673: (e, t, r) => {
                r.d(t, { Z: () => a });
                var s = r(614983),
                    i = r.n(s),
                    n = r(202784);
                class a extends n.PureComponent {
                    constructor(e) {
                        super(e), (this._inAsyncStateUpdate = !1), this._installSetStateHooks();
                    }
                    setState(e, t) {
                        "function" == typeof e
                            ? super.setState((t, r) => {
                                  var s;
                                  this._inAsyncStateUpdate = !0;
                                  try {
                                      s = e(t, r);
                                  } catch (e) {
                                      throw e;
                                  } finally {
                                      this._inAsyncStateUpdate = !1;
                                  }
                                  return s;
                              }, t)
                            : super.setState(e, t);
                    }
                    _installSetStateHooks() {
                        var e = this,
                            t = this.props,
                            r = this.state;
                        Object.defineProperty(this, "props", {
                            get: () => (i()(!e._inAsyncStateUpdate, '"this.props" should not be accessed during state updates'), t),
                            set(e) {
                                t = e;
                            },
                        }),
                            Object.defineProperty(this, "state", {
                                get: () => (i()(!e._inAsyncStateUpdate, '"this.state" should not be acceessed during state updates'), r),
                                set(e) {
                                    r = e;
                                },
                            });
                    }
                }
            },
            989795: (e, t, r) => {
                r.d(t, { Z: () => d });
                var s = r(807896),
                    i = r(133028),
                    n = r(325686),
                    a = r(297689),
                    l = r(399308),
                    o = r(614983),
                    h = r.n(o),
                    c = r(202784);
                class d extends c.Component {
                    constructor() {
                        super(...arguments),
                            (this.state = { separatorProps: { highlighted: !1, leadingItem: this.props.item } }),
                            (this._separators = {
                                highlight: () => {
                                    var e = this.props,
                                        t = e.cellKey,
                                        r = e.prevCellKey;
                                    this.props.onUpdateSeparators([t, r], { highlighted: !0 });
                                },
                                unhighlight: () => {
                                    var e = this.props,
                                        t = e.cellKey,
                                        r = e.prevCellKey;
                                    this.props.onUpdateSeparators([t, r], { highlighted: !1 });
                                },
                                updateProps: (e, t) => {
                                    var r = this.props,
                                        s = r.cellKey,
                                        i = r.prevCellKey;
                                    this.props.onUpdateSeparators(["leading" === e ? i : s], t);
                                },
                            }),
                            (this._onLayout = (e) => {
                                this.props.onCellLayout && this.props.onCellLayout(e, this.props.cellKey, this.props.index);
                            });
                    }
                    static getDerivedStateFromProps(e, t) {
                        return { separatorProps: (0, i.Z)((0, i.Z)({}, t.separatorProps), {}, { leadingItem: e.item }) };
                    }
                    updateSeparatorProps(e) {
                        this.setState((t) => ({ separatorProps: (0, i.Z)((0, i.Z)({}, t.separatorProps), e) }));
                    }
                    componentWillUnmount() {
                        this.props.onUnmount(this.props.cellKey);
                    }
                    _renderElement(e, t, r, s) {
                        return t ? c.createElement(t, { item: r, index: s, separators: this._separators }) : e ? e({ item: r, index: s, separators: this._separators }) : void h()(!1, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
                    }
                    render() {
                        var e = this.props,
                            t = e.CellRendererComponent,
                            r = e.ItemSeparatorComponent,
                            i = e.ListItemComponent,
                            a = e.cellKey,
                            o = e.horizontal,
                            h = e.item,
                            d = e.index,
                            p = e.inversionStyle,
                            f = e.onCellFocusCapture,
                            v = e.onCellLayout,
                            m = e.renderItem,
                            _ = this._renderElement(m, i, h, d),
                            g = c.isValidElement(r) ? r : r && c.createElement(r, this.state.separatorProps),
                            y = p ? (o ? [u.rowReverse, p] : [u.columnReverse, p]) : o ? [u.row, p] : p,
                            C = t ? c.createElement(t, (0, s.Z)({ cellKey: a, index: d, item: h, style: y, onFocusCapture: f }, v && { onLayout: this._onLayout }), _, g) : c.createElement(n.Z, (0, s.Z)({ style: y, onFocusCapture: f }, v && { onLayout: this._onLayout }), _, g);
                        return c.createElement(l.tG, { cellKey: this.props.cellKey }, C);
                    }
                }
                var u = a.Z.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });
            },
            399308: (e, t, r) => {
                r.d(t, { IO: () => n, tG: () => l, wv: () => a });
                var s = r(133028),
                    i = r(202784),
                    n = i.createContext(null);
                function a(e) {
                    var t = e.children,
                        r = e.value,
                        s = (0, i.useMemo)(() => ({ cellKey: null, getScrollMetrics: r.getScrollMetrics, horizontal: r.horizontal, getOutermostParentListRef: r.getOutermostParentListRef, registerAsNestedChild: r.registerAsNestedChild, unregisterAsNestedChild: r.unregisterAsNestedChild }), [r.getScrollMetrics, r.horizontal, r.getOutermostParentListRef, r.registerAsNestedChild, r.unregisterAsNestedChild]);
                    return i.createElement(n.Provider, { value: s }, t);
                }
                function l(e) {
                    var t = e.cellKey,
                        r = e.children,
                        a = (0, i.useContext)(n),
                        l = (0, i.useMemo)(() => (null == a ? null : (0, s.Z)((0, s.Z)({}, a), {}, { cellKey: t })), [a, t]);
                    return i.createElement(n.Provider, { value: l }, r);
                }
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-eb8eaa08.b1c15f8a.js.map
