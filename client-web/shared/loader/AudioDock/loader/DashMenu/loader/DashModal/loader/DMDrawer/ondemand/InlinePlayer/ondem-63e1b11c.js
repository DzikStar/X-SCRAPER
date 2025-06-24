"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c", "bundle.GrokDrawer-8caf98f2"],
    {
        661841: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = {
                centroidDimension: function (e, t, n, o) {
                    var i = e.touchBank,
                        a = 0,
                        s = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > t && ((a += o && n ? l.currentPageX : o && !n ? l.currentPageY : !o && n ? l.previousPageX : l.previousPageY), (s = 1));
                    else
                        for (var c = 0; c < i.length; c++) {
                            var u = i[c];
                            if (null != u && u.touchActive && u.currentTimeStamp >= t) {
                                (a += o && n ? u.currentPageX : o && !n ? u.currentPageY : !o && n ? u.previousPageX : u.previousPageY), s++;
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
            const o = r;
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
            n.d(t, { Z: () => o });
            var r = n(202784);
            function o() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, r.useCallback)(
                    (e) => {
                        for (var n = 0, r = t; n < r.length; n++) {
                            var o = r[n];
                            null != o && ("function" == typeof o ? o(e) : (o.current = e));
                        }
                    },
                    [...t],
                );
            }
        },
        920863: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784);
            function o(e) {
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
                o = n(77325),
                i = n(231461),
                a = n(133028),
                s = n(325686),
                l = n(703185),
                c = n(280652),
                u = n(614983),
                p = n.n(u),
                d = n(202784),
                h = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
            class m extends d.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._keyExtractor = (e, t) => {
                            var n = this._subExtractor(t);
                            return (n && n.key) || String(t);
                        }),
                        (this._convertViewable = (e) => {
                            var t;
                            p()(null != e.index, "Received a broken ViewToken");
                            var n = this._subExtractor(e.index);
                            if (!n) return null;
                            var r = n.section.keyExtractor,
                                o = this.props.keyExtractor || c.jn,
                                i = null != r ? r(e.item, n.index) : o(e.item, null !== (t = n.index) && void 0 !== t ? t : 0);
                            return (0, a.Z)((0, a.Z)({}, e), {}, { index: n.index, key: i, section: n.section });
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
                                o = this._subExtractor(r);
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
                            var c = o.section.renderItem || this.props.renderItem,
                                u = this._getSeparatorComponent(r, o, e);
                            return p()(c, "no renderItem!"), d.createElement(g, { SeparatorComponent: u, LeadingSeparatorComponent: 0 === i ? this.props.SectionSeparatorComponent : void 0, cellKey: o.key, index: i, item: n, leadingItem: o.leadingItem, leadingSection: o.leadingSection, prevCellKey: (this._subExtractor(r - 1) || {}).key, setSelfHighlightCallback: this._setUpdateHighlightFor, setSelfUpdatePropsCallback: this._setUpdatePropsFor, updateHighlightFor: this._updateHighlightFor, updatePropsFor: this._updatePropsFor, renderItem: c, section: o.section, trailingItem: o.trailingItem, trailingSection: o.trailingSection, inverted: !!this.props.inverted });
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
                        var o = (0, a.Z)((0, a.Z)({}, e), {}, { viewOffset: r, index: t });
                        this._listRef.scrollToIndex(o);
                    }
                }
                getListRef() {
                    return this._listRef;
                }
                render() {
                    for (var e, t = this.props, n = (t.ItemSeparatorComponent, t.SectionSeparatorComponent, t.renderItem, t.renderSectionFooter, t.renderSectionHeader, t.sections, t.stickySectionHeadersEnabled, (0, i.Z)(t, h)), a = this.props.ListHeaderComponent ? 1 : 0, s = this.props.stickySectionHeadersEnabled ? [] : void 0, c = 0, u = (0, o.Z)(this.props.sections); !(e = u()).done; ) {
                        var p = e.value;
                        null != s && s.push(c + a), (c += 2), (c += this.props.getItemCount(p.data));
                    }
                    var m = this._renderItem(c);
                    return d.createElement(l.Z, (0, r.Z)({}, n, { keyExtractor: this._keyExtractor, stickyHeaderIndices: s, renderItem: m, data: this.props.sections, getItem: (e, t) => this._getItem(this.props, e, t), getItemCount: () => c, onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0, ref: this._captureRef }));
                }
                _getItem(e, t, n) {
                    if (!t) return null;
                    for (var r = n - 1, o = 0; o < t.length; o++) {
                        var i = t[o],
                            a = i.data,
                            s = e.getItemCount(a);
                        if (-1 === r || r === s) return i;
                        if (r < s) return e.getItem(a, r);
                        r -= s + 2;
                    }
                    return null;
                }
                _subExtractor(e) {
                    for (var t = e, n = this.props, r = n.getItem, o = n.getItemCount, i = n.keyExtractor, a = n.sections, s = 0; s < a.length; s++) {
                        var l = a[s],
                            u = l.data,
                            p = l.key || String(s);
                        if (!((t -= 1) >= o(u) + 1)) return -1 === t ? { section: l, key: p + ":header", index: null, header: !0, trailingSection: a[s + 1] } : t === o(u) ? { section: l, key: p + ":footer", index: null, header: !1, trailingSection: a[s + 1] } : { section: l, key: p + ":" + (l.keyExtractor || i || c.jn)(r(u, t), t), index: t, leadingItem: r(u, t - 1), leadingSection: a[s - 1], trailingItem: r(u, t + 1), trailingSection: a[s + 1] };
                        t -= o(u) + 1;
                    }
                }
                _getSeparatorComponent(e, t, n) {
                    if (!(t = t || this._subExtractor(e))) return null;
                    var r = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
                        o = this.props.SectionSeparatorComponent,
                        i = e === n - 1,
                        a = t.index === this.props.getItemCount(t.section.data) - 1;
                    return o && a ? o : !r || a || i ? null : r;
                }
            }
            function g(e) {
                var t = e.LeadingSeparatorComponent,
                    n = e.SeparatorComponent,
                    o = e.cellKey,
                    i = e.prevCellKey,
                    l = e.setSelfHighlightCallback,
                    c = e.updateHighlightFor,
                    u = e.setSelfUpdatePropsCallback,
                    p = e.updatePropsFor,
                    h = e.item,
                    m = e.index,
                    g = e.section,
                    f = e.inverted,
                    v = d.useState(!1),
                    P = v[0],
                    S = v[1],
                    _ = d.useState(!1),
                    C = _[0],
                    I = _[1],
                    y = d.useState({ leadingItem: e.leadingItem, leadingSection: e.leadingSection, section: e.section, trailingItem: e.item, trailingSection: e.trailingSection }),
                    b = y[0],
                    w = y[1],
                    x = d.useState({ leadingItem: e.item, leadingSection: e.leadingSection, section: e.section, trailingItem: e.trailingItem, trailingSection: e.trailingSection }),
                    k = x[0],
                    E = x[1];
                d.useEffect(
                    () => (
                        l(o, I),
                        u(o, E),
                        () => {
                            u(o, null), l(o, null);
                        }
                    ),
                    [o, l, E, u],
                );
                var Z = {
                        highlight: () => {
                            S(!0), I(!0), null != i && c(i, !0);
                        },
                        unhighlight: () => {
                            S(!1), I(!1), null != i && c(i, !1);
                        },
                        updateProps: (e, r) => {
                            "leading" === e ? (null != t ? w((0, a.Z)((0, a.Z)({}, b), r)) : null != i && p(i, (0, a.Z)((0, a.Z)({}, b), r))) : "trailing" === e && null != n && E((0, a.Z)((0, a.Z)({}, k), r));
                        },
                    },
                    H = e.renderItem({ item: h, index: m, section: g, separators: Z }),
                    D = null != t && d.createElement(t, (0, r.Z)({ highlighted: P }, b)),
                    N = null != n && d.createElement(n, (0, r.Z)({ highlighted: C }, k));
                return D || N ? d.createElement(s.Z, null, !1 === f ? D : N, H, !1 === f ? N : D) : H;
            }
            const f = m;
        },
        702239: (e, t, n) => {
            n.d(t, { Nq: () => u, oD: () => d, t0: () => p });
            var r,
                o = n(202784),
                i = n(928316),
                a =
                    ((r = function (e, t) {
                        return (
                            (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }),
                            r(e, t)
                        );
                    }),
                    function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        function n() {
                            this.constructor = e;
                        }
                        r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                    }),
                s = "html",
                l = "svg",
                c = function (e, t) {
                    var n,
                        r,
                        o,
                        i = {};
                    if (e === s) o = document.createElement("div");
                    else {
                        if (e !== l) throw new Error('Invalid element type "'.concat(e, '" for createPortalNode: must be "html" or "svg".'));
                        o = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    }
                    if (t && "object" == typeof t)
                        for (var a = 0, c = Object.entries(t.attributes); a < c.length; a++) {
                            var u = c[a],
                                p = u[0],
                                d = u[1];
                            o.setAttribute(p, d);
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
                            if (o !== r) {
                                if (
                                    (h.unmount(),
                                    t !== n &&
                                        !(function (e, t) {
                                            var n,
                                                r,
                                                o,
                                                i = null !== (n = e.ownerDocument) && void 0 !== n ? n : document,
                                                a = null !== (o = null !== (r = i.defaultView) && void 0 !== r ? r : i.parentWindow) && void 0 !== o ? o : window;
                                            if (t === s) return e instanceof a.HTMLElement;
                                            if (t === l) return e instanceof a.SVGElement;
                                            throw new Error('Unrecognized element type "'.concat(t, '" for validateElementType.'));
                                        })(t, e))
                                )
                                    throw new Error('Invalid element type for portal: "'.concat(e, '" portalNodes must be used with ').concat(e, " elements, but OutPortal is within <").concat(t.tagName, ">."));
                                t.replaceChild(h.element, o), (n = t), (r = o);
                            }
                        },
                        unmount: function (e) {
                            (e && e !== r) || (n && r && (n.replaceChild(r, h.element), (n = void 0), (r = void 0)));
                        },
                    };
                    return h;
                },
                u = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            (n.addPropsChannel = function () {
                                Object.assign(n.props.node, {
                                    setPortalProps: function (e) {
                                        n.setState({ nodeProps: e });
                                    },
                                });
                            }),
                            (n.state = { nodeProps: n.props.node.getInitialPortalProps() }),
                            n
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
                                n = t.children,
                                r = t.node;
                            return i.createPortal(
                                o.Children.map(n, function (t) {
                                    return o.isValidElement(t) ? o.cloneElement(t, e.state.nodeProps) : t;
                                }),
                                r.element,
                            );
                        }),
                        t
                    );
                })(o.PureComponent),
                p = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (n.placeholderNode = o.createRef()), n.passPropsThroughPortal(), n;
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
                                n = t.parentNode;
                            e.mount(n, t), this.passPropsThroughPortal();
                        }),
                        (t.prototype.componentDidUpdate = function () {
                            var e = this.props.node;
                            this.currentPortalNode && e !== this.currentPortalNode && (this.currentPortalNode.unmount(this.placeholderNode.current), this.currentPortalNode.setPortalProps({}), (this.currentPortalNode = e));
                            var t = this.placeholderNode.current,
                                n = t.parentNode;
                            e.mount(n, t), this.passPropsThroughPortal();
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
                d = c.bind(null, s);
            c.bind(null, l);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c.821aa58a.js.map
