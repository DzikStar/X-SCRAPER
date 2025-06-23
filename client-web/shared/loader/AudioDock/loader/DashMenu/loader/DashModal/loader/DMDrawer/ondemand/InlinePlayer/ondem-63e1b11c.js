"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"],
    {
        337925: (e, t, r) => {
            r.d(t, { U: () => n });
            r(614983);
            function n(e) {
                return null;
            }
        },
        874028: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(33229).Z;
        },
        881806: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784);
            function o() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, n.useCallback)(
                    (e) => {
                        for (var r = 0, n = t; r < n.length; r++) {
                            var o = n[r];
                            null != o && ("function" == typeof o ? o(e) : (o.current = e));
                        }
                    },
                    [...t],
                );
            }
        },
        920863: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784);
            function o(e) {
                var t = (0, n.useRef)(void 0);
                return (0, n.useCallback)(
                    (r) => {
                        t.current && (t.current(), (t.current = void 0)), null != r && (t.current = e(r));
                    },
                    [e],
                );
            }
        },
        582975: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(807896),
                o = r(77325),
                i = r(231461),
                a = r(133028),
                s = r(325686),
                l = r(703185),
                p = r(280652),
                d = r(614983),
                c = r.n(d),
                u = r(202784),
                h = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class m extends u.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, t) => {
                            var r = this._subExtractor(t);
                            return (r && r.key) || String(t);
                        }),
                        (this._convertViewable = (e) => {
                            var t;
                            c()(null != e.index, "Received a broken ViewToken");
                            var r = this._subExtractor(e.index);
                            if (!r) return null;
                            var n = r.section.keyExtractor,
                                o = this.props.keyExtractor || p.jn,
                                i = null != n ? n(e.item, r.index) : o(e.item, null !== (t = r.index) && void 0 !== t ? t : 0);
                            return (0, a.Z)((0, a.Z)({}, e), {}, { index: r.index, key: i, section: r.section });
                        }),
                        (this._onViewableItemsChanged = (e) => {
                            var t = e.viewableItems,
                                r = e.changed,
                                n = this.props.onViewableItemsChanged;
                            null != n && n({ viewableItems: t.map(this._convertViewable, this).filter(Boolean), changed: r.map(this._convertViewable, this).filter(Boolean) });
                        }),
                        (this._renderItem = (e) => (t) => {
                            var r = t.item,
                                n = t.index,
                                o = this._subExtractor(n);
                            if (!o) return null;
                            var i = o.index;
                            if (null == i) {
                                var a = o.section;
                                if (!0 === o.header) {
                                    var s = this.props.renderSectionHeader;
                                    return s ? s({ section: a }) : null;
                                }
                                var l = this.props.renderSectionFooter;
                                return l ? l({ section: a }) : null;
                            }
                            var p = o.section.renderItem || this.props.renderItem,
                                d = this._getSeparatorComponent(n, o, e);
                            return c()(p, "no renderItem!"), u.createElement(g, { SeparatorComponent: d, LeadingSeparatorComponent: 0 === i ? this.props.SectionSeparatorComponent : void 0, cellKey: o.key, index: i, item: r, leadingItem: o.leadingItem, leadingSection: o.leadingSection, prevCellKey: (this._subExtractor(n - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: p, section: o.section, trailingItem: o.trailingItem, trailingSection: o.trailingSection, inverted: !!this.props.inverted });
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
                    var n = e.viewOffset || 0;
                    if (null != this._listRef) {
                        if (e.itemIndex > 0 && this.props.stickySectionHeadersEnabled) n += this._listRef.__getFrameMetricsApprox(t - e.itemIndex, this._listRef.props).length;
                        var o = (0, a.Z)((0, a.Z)({}, e), {}, { viewOffset: n, index: t });
                        this._listRef.scrollToIndex(o);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, t = this.props, r = (t.ItemSeparatorComponent, t.SectionSeparatorComponent, t.renderItem, t.renderSectionFooter, t.renderSectionHeader, t.sections, t.stickySectionHeadersEnabled, (0, i.Z)(t, h)), a = this.props.ListHeaderComponent ? 1 : 0, s = this.props.stickySectionHeadersEnabled ? [] : void 0, p = 0, d = (0, o.Z)(this.props.sections); !(e = d()).done; ) {
                        var c = e.value;
                        null != s && s.push(p + a), (p += 2), (p += this.props.getItemCount(c.data));
                    }
                    var m = this._renderItem(p);
                    return u.createElement(l.Z, (0, n.Z)({}, r, { keyExtractor: this._keyExtractor, stickyHeaderIndices: s, renderItem: m, data: this.props.sections, getItem: (e, t) => this._getItem(this.props, e, t), getItemCount: () => p, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
                }
                _getItem(e, t, r) {
                    if (!t) return null;
                    for (var n = r - 1, o = 0; o < t.length; o++) {
                        var i = t[o],
                            a = i.data,
                            s = e.getItemCount(a);
                        if (-1 === n || n === s) return i;
                        if (n < s) return e.getItem(a, n);
                        n -= s + 2;
                    }
                    return null;
                }
                _subExtractor(e) {
                    for (var t = e, r = this.props, n = r.getItem, o = r.getItemCount, i = r.keyExtractor, a = r.sections, s = 0; s < a.length; s++) {
                        var l = a[s],
                            d = l.data,
                            c = l.key || String(s);
                        if (!((t -= 1) >= o(d) + 1)) return -1 === t ? { section: l, key: c + ":header", index: null, header: !0, trailingSection: a[s + 1] } : t === o(d) ? { section: l, key: c + ":footer", index: null, header: !1, trailingSection: a[s + 1] } : { section: l, key: c + ":" + (l.keyExtractor || i || p.jn)(n(d, t), t), index: t, leadingItem: n(d, t - 1), leadingSection: a[s - 1], trailingItem: n(d, t + 1), trailingSection: a[s + 1] };
                        t -= o(d) + 1;
                    }
                }
                _getSeparatorComponent(e, t, r) {
                    if (!(t = t || this._subExtractor(e))) return null;
                    var n = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
                        o = this.props.SectionSeparatorComponent,
                        i = e === r - 1,
                        a = t.index === this.props.getItemCount(t.section.data) - 1;
                    return o && a ? o : !n || a || i ? null : n;
                }
            }
            function g(e) {
                var t = e.LeadingSeparatorComponent,
                    r = e.SeparatorComponent,
                    o = e.cellKey,
                    i = e.prevCellKey,
                    l = e.setSelfHighlightCallback,
                    p = e.updateHighlightFor,
                    d = e.setSelfUpdatePropsCallback,
                    c = e.updatePropsFor,
                    h = e.item,
                    m = e.index,
                    g = e.section,
                    f = e.inverted,
                    v = u.useState(!1),
                    _ = v[0],
                    S = v[1],
                    P = u.useState(!1),
                    I = P[0],
                    y = P[1],
                    b = u.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    C = b[0],
                    w = b[1],
                    x = u.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    E = x[0],
                    k = x[1];
                u.useEffect(
                    () => (
                        l(o, y),
                        d(o, k),
                        () => {
                            d(o, null), l(o, null);
                        }
                    ),
                    [o, l, k, d],
                );
                var H = {
                        highlight: () => {
                            S(!0), y(!0), null != i && p(i, !0);
                        },
                        unhighlight: () => {
                            S(!1), y(!1), null != i && p(i, !1);
                        },
                        updateProps: (e, n) => {
                            "leading" === e ? (null != t ? w((0, a.Z)((0, a.Z)({}, C), n)) : null != i && c(i, (0, a.Z)((0, a.Z)({}, C), n))) : "trailing" === e && null != r && k((0, a.Z)((0, a.Z)({}, E), n));
                        },
                    },
                    Z = e.renderItem({ item: h, index: m, section: g, separators: H }),
                    N = null != t && u.createElement(t, (0, n.Z)({ highlighted: _ }, C)),
                    F = null != r && u.createElement(r, (0, n.Z)({ highlighted: I }, E));
                return N || F ? u.createElement(s.Z, null, !1 === f ? N : F, Z, !1 === f ? F : N) : Z;
            }
            const f = m;
        },
        702239: (e, t, r) => {
            r.d(t, { Nq: () => d, oD: () => u, t0: () => c });
            var n,
                o = r(202784),
                i = r(928316),
                a =
                    ((n = function (e, t) {
                        return (
                            (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }),
                            n(e, t)
                        );
                    }),
                    function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        function r() {
                            this.constructor = e;
                        }
                        n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    }),
                s = "html",
                l = "svg",
                p = function (e, t) {
                    var r,
                        n,
                        o,
                        i = {};
                    if (e === s) o = document.createElement("div");
                    else {
                        if (e !== l) throw new Error('Invalid element type "'.concat(e, '" for createPortalNode: must be "html" or "svg".'));
                        o = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    }
                    if (t && "object" == typeof t)
                        for (var a = 0, p = Object.entries(t.attributes); a < p.length; a++) {
                            var d = p[a],
                                c = d[0],
                                u = d[1];
                            o.setAttribute(c, u);
                        }
                    var h = {
                        element: o,
                        elementType: e,
                        setPortalProps: function (e) {
                            i = e;
                        },
                        getInitialPortalProps: function () {
                            return i;
                        },
                        mount: function (t, o) {
                            if (o !== n) {
                                if (
                                    (h.unmount(),
                                    t !== r &&
                                        !(function (e, t) {
                                            var r,
                                                n,
                                                o,
                                                i = null !== (r = e.ownerDocument) && void 0 !== r ? r : document,
                                                a = null !== (o = null !== (n = i.defaultView) && void 0 !== n ? n : i.parentWindow) && void 0 !== o ? o : window;
                                            if (t === s) return e instanceof a.HTMLElement;
                                            if (t === l) return e instanceof a.SVGElement;
                                            throw new Error('Unrecognized element type "'.concat(t, '" for validateElementType.'));
                                        })(t, e))
                                )
                                    throw new Error('Invalid element type for portal: "'.concat(e, '" portalNodes must be used with ').concat(e, " elements, but OutPortal is within <").concat(t.tagName, ">."));
                                t.replaceChild(h.element, o), (r = t), (n = o);
                            }
                        },
                        unmount: function (e) {
                            (e && e !== n) || (r && n && (r.replaceChild(n, h.element), (r = void 0), (n = void 0)));
                        },
                    };
                    return h;
                },
                d = (function (e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return (
                            (r.addPropsChannel = function () {
                                Object.assign(r.props.node, {
                                    setPortalProps: function (e) {
                                        r.setState({ nodeProps: e });
                                    },
                                });
                            }),
                            (r.state = { nodeProps: r.props.node.getInitialPortalProps() }),
                            r
                        );
                    }
                    return (
                        a(t, e),
                        (t.prototype.componentDidMount = function () {
                            this.addPropsChannel();
                        }),
                        (t.prototype.componentDidUpdate = function () {
                            this.addPropsChannel();
                        }),
                        (t.prototype.render = function () {
                            var e = this,
                                t = this.props,
                                r = t.children,
                                n = t.node;
                            return i.createPortal(
                                o.Children.map(r, function (t) {
                                    return o.isValidElement(t) ? o.cloneElement(t, e.state.nodeProps) : t;
                                }),
                                n.element,
                            );
                        }),
                        t
                    );
                })(o.PureComponent),
                c = (function (e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return (r.placeholderNode = o.createRef()), r.passPropsThroughPortal(), r;
                    }
                    return (
                        a(t, e),
                        (t.prototype.passPropsThroughPortal = function () {
                            var e = Object.assign({}, this.props, { node: void 0 });
                            this.props.node.setPortalProps(e);
                        }),
                        (t.prototype.componentDidMount = function () {
                            var e = this.props.node;
                            this.currentPortalNode = e;
                            var t = this.placeholderNode.current,
                                r = t.parentNode;
                            e.mount(r, t), this.passPropsThroughPortal();
                        }),
                        (t.prototype.componentDidUpdate = function () {
                            var e = this.props.node;
                            this.currentPortalNode && e !== this.currentPortalNode && (this.currentPortalNode.unmount(this.placeholderNode.current), this.currentPortalNode.setPortalProps({}), (this.currentPortalNode = e));
                            var t = this.placeholderNode.current,
                                r = t.parentNode;
                            e.mount(r, t), this.passPropsThroughPortal();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            var e = this.props.node;
                            e.unmount(this.placeholderNode.current), e.setPortalProps({});
                        }),
                        (t.prototype.render = function () {
                            return o.createElement("div", { ref: this.placeholderNode });
                        }),
                        t
                    );
                })(o.PureComponent),
                u = p.bind(null, s);
            p.bind(null, l);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c.7fe6ecaa.js.map
