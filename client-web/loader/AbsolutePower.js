(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AbsolutePower"],
    {
        555492: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = i(202784).createContext({ heightsReady: !0 });
        },
        590136: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { AbsolutePower: () => we, default: () => Ee, resetIsModalScrollerRendered: () => Ae });
            var s = i(807896),
                o = (i(136728), i(202784)),
                n = i(386802),
                r = i(912021),
                a = i(2138),
                h = i(516951),
                d = i(143778),
                c = i(427266),
                l = i(163390),
                _ = i(768572),
                u = i(933794),
                m = i(719536);
            const p = (e) => (t, i) => i.getTop() - t.getTop() <= e,
                g = (e) => (t, i) => t.getBottom() - i.getBottom() <= e,
                I = (e) => (t, i) => {
                    const s = i.getHeight() * e;
                    return i.getTop() - t.getTop() <= s;
                },
                f = (e) => (t, i) => {
                    const s = i.getHeight() * e;
                    return t.getBottom() - i.getBottom() <= s;
                },
                v = Object.freeze({ INSIDE: "inside", OUTSIDE: "outside" }),
                A = (e, t, i, s) => (((e, t) => !e && t === v.INSIDE)(e, i) ? m.Z.INITIAL_POSITION : ((e, t) => e === v.OUTSIDE && t === v.INSIDE)(e, i) ? m.Z.MOVEMENT : ((e, t) => e === v.INSIDE && t === v.INSIDE)(e, i) && s !== t ? m.Z.LIST_UPDATE : null);
            class w {
                constructor(e) {
                    this._handlers = e.map((e) => ({ zone: e, state: {} }));
                }
                handlePositioningUpdate(e) {
                    this._handlers.forEach(({ state: t, zone: i }) => {
                        const { callback: s, condition: o } = i,
                            { listLength: n, proximity: r } = t,
                            a = ((e, t) => (e(t.getForList(), t.getForViewport()) ? v.INSIDE : v.OUTSIDE))(o, e),
                            h = e.getListLength(),
                            d = A(r, n, a, h);
                        (t.proximity = a), (t.listLength = h), d && s({ triggerCause: d });
                    });
                }
            }
            var T = i(579051),
                E = i(373981);
            const R = Object.freeze({ FocusedItem: "focusedItem", Anchor: "anchor" }),
                y = (e) => ({ anchor: e, type: R.Anchor }),
                S = (e) => ({ itemId: e, type: R.FocusedItem });
            i(901951);
            var b = i(411916),
                N = i.n(b),
                H = i(476984),
                C = i.n(H),
                O = i(67877),
                P = i(666536),
                F = i(459679),
                M = i(730086),
                D = i(184605),
                Z = i(490359),
                k = i(173396),
                V = i(286834),
                L = i(7330),
                x = i(908478),
                B = i(323265),
                U = i(334346),
                W = i(443781),
                z = i(993547);
            const K = new Set(),
                G = new Set();
            let j = !1;
            function Y() {
                if (!j) {
                    const e = ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"];
                    ["webkitfullscreenchange", "mozfullscreenchange", "fullscreenchange", "msfullscreenchange"].forEach((t) => {
                        document.addEventListener(t, () => {
                            const t = e.map((e) => document[e]).filter(Boolean)[0];
                            t ? K.forEach((e) => e(t)) : G.forEach((e) => e());
                        });
                    });
                }
                j = !0;
            }
            var q = i(774717),
                $ = i(503882);
            var J = i(246031),
                X = i(725516),
                Q = i(76601),
                ee = i(325686),
                te = i(666305),
                ie = i(461756);
            const se = o.createContext({ onAnimationStarted: () => {}, onAnimationEnded: () => {}, onHeightChanged: () => {} }),
                oe = () => (window.performance ? window.performance.now() : Date.now()),
                ne = "transform 0.15s linear";
            class re extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._contentsFocusable = !1),
                        (this._perfReported = !1),
                        (this._shouldAnimateTranslate = !1),
                        (this._observeElement = (e) => {
                            te.Z.observe(e, this._handleResize);
                        }),
                        (this._handleResize = (e) => {
                            const { item: t, onHeightChanged: i } = this.props,
                                s = (e && Math.floor(e.contentRect.height)) !== (this._currentHeight && Math.floor(this._currentHeight));
                            e && s && ((this._currentHeight = e.contentRect.height), i(t.id, e.contentRect.height)), this._recordTTFV();
                        }),
                        (this._setRef = (e) => {
                            const { item: t, setAPI: i } = this.props;
                            e ? ((this._element = e), i(t.id, this), this._observeElement(e)) : (i(t.id, void 0), (this._element = void 0));
                        }),
                        (this._setIsItemFocusable = (e) => {
                            this._contentsFocusable = e;
                        }),
                        (this._handleAnimationStarted = (e = ne) => {
                            te.Z.unobserveAll(this._element), this.props.onAnimationStarted(this.props.item.id, e), this._animationTTLTimeoutId && clearTimeout(this._animationTTLTimeoutId), (this._animationTTLTimeoutId = setTimeout(this._handleAnimationEnded, 1e3));
                        }),
                        (this._handleAnimationEnded = () => {
                            this._animationTTLTimeoutId && (clearTimeout(this._animationTTLTimeoutId), (this._animationTTLTimeoutId = null)), this._element && this._observeElement(this._element), this.props.onAnimationEnded(this.props.item.id);
                        }),
                        (this._handleHeightChanged = (e) => {
                            (this._currentHeight = e), this.props.onHeightChanged(this.props.item.id, e);
                        }),
                        (this._animationContext = { onAnimationEnded: this._handleAnimationEnded, onAnimationStarted: this._handleAnimationStarted, onHeightChanged: this._handleHeightChanged }),
                        (this._perfStart = oe());
                }
                shouldComponentUpdate(e) {
                    const { item: t, positioningStyle: i, shouldAnimate: s, visible: o } = this.props,
                        n = !(0, x.Z)(e.positioningStyle, i);
                    return (this._shouldAnimateTranslate = n && e.visible === o), !(0, x.Z)(e.item, t) || n || e.visible !== o || e.shouldAnimate !== s;
                }
                componentWillUnmount() {
                    this._animationTTLTimeoutId && (clearTimeout(this._animationTTLTimeoutId), this.props.onAnimationEnded(this.props.item.id)), te.Z.unobserveAll(this._element);
                }
                componentDidUpdate(e) {
                    const { item: t, setAPI: i } = this.props;
                    e.item.id !== t.id && (i(e.item.id, void 0), i(t.id, this)), this._recordTTFV();
                }
                getElement() {
                    return this._element;
                }
                isFocusable() {
                    return this._contentsFocusable;
                }
                measureHeight() {
                    return this._currentHeight || (this._currentHeight = this._element ? this._element.getBoundingClientRect().height : 0), this._currentHeight;
                }
                render() {
                    const { isAnimationDisabled: e, item: t, shouldAnimate: i, translationTransitionStyle: s, visible: n } = this.props,
                        r = this._shouldAnimateTranslate && !ie.Z.reducedMotionEnabled ? s : "opacity 0.3s ease-out",
                        a = { ...this.props.positioningStyle, position: "absolute", opacity: n ? void 0 : 0.01, width: "100%", transition: i && !e ? r : void 0 };
                    return o.createElement(se.Provider, { value: this._animationContext }, o.createElement(ee.Z, { ref: this._setRef, style: a, testID: "cellInnerDiv" }, t.render(this._setIsItemFocusable)));
                }
                _recordTTFV() {
                    const { item: e, onVisible: t, visible: i } = this.props;
                    void 0 !== this._currentHeight && !this._perfReported && i && (t(e.id, oe() - this._perfStart), (this._perfReported = !0));
                }
            }
            (re.contextType = W.rC), (re.defaultProps = { translationTransitionStyle: ne });
            var ae = i(928316),
                he = i(337637);
            const de = (e) => e.find((e) => e.focusable)?.id;
            class ce {
                constructor({ listLength: e, listRect: t, renderedItems: i, viewportRect: s }) {
                    (this._viewportRect = s), (this._listRect = t), (this._listLength = e), (this._renderedItems = i);
                }
                getForList() {
                    return this._listRect;
                }
                getForViewport() {
                    return this._viewportRect;
                }
                getListLength() {
                    return this._listLength;
                }
                getRenderedItems() {
                    return this._renderedItems;
                }
            }
            var le = i(555492);
            class _e {
                constructor(e, t, i, s, o = 0) {
                    (this.itemId = e), (this.offset = t), (this.visible = i), (this.canBeAnchor = s), (this.height = o);
                }
                getRectInViewport() {
                    return new $.Z(this.offset, this.height);
                }
            }
            const ue = {},
                me = ({ cssPixels: e, dpr: t }) => Math.ceil(e * t) / t;
            class pe extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._areAnchorsInvalidated = !1),
                        (this._cells = new Map()),
                        (this._cellAnimations = new Set()),
                        (this._cellAnimationStyle = ne),
                        (this._currentHeadroom = 0),
                        (this._isFullScreened = !1),
                        (this._isIdle = !0),
                        (this._pendingHeightUpdates = new Map()),
                        (this._previousScrollPosition = 0),
                        (this._renderedItemsStatus = new Set()),
                        (this._rootRef = o.createRef()),
                        (this._slice = { start: 0, end: 0 }),
                        (this._shouldScribeNextScroll = !0),
                        (this._visibilityMeasurements = new Map()),
                        (this._handleScroll = () => {
                            (this._wasPreviouslyAtNewestEnd = this.isAtNewest()), this._isInitialAnchoring || this._viewport.scrollY() < 0 || ((this._isIdle = !1), this._updateScrollEnd(), this._scheduleCriticalUpdateThrottled());
                        }),
                        (this._updateScrollEnd = (0, P.Z)(() => {
                            const { analytics: e, onScrollEnd: t } = this.props,
                                i = this._viewport.scrollY() - this._previousScrollPosition;
                            (this._previousScrollPosition = this._viewport.scrollY()), this._shouldScribeNextScroll && Math.abs(i) > 100 && e.scribe({ action: "scroll", data: { event_value: i } }), (this._shouldScribeNextScroll = !0), (this._isIdle = !0), t(), this._scheduleCriticalUpdate();
                        }, 200)),
                        (this._handleProgrammaticScroll = () => {
                            this._shouldScribeNextScroll = !1;
                        }),
                        (this._handleEnterFullscreen = () => {
                            this._isFullScreened = !0;
                        }),
                        (this._handleExitFullscreen = () => {
                            (this._isFullScreened = !1), this._scheduleCriticalUpdate();
                        }),
                        (this._getPositioningContext = (0, r.Z)((e) => ({ heightsReady: e }))),
                        (this._getFinalRenderedItemsMemoized = (0, r.Z)((e, t) => {
                            const i = this._getItemMapMemoized(e);
                            return (0, F.Z)(t, (e) => {
                                const t = i.get(e.itemId);
                                return t && { item: t, offset: e.offset, visible: e.visible };
                            });
                        })),
                        (this._getItemMapMemoized = (0, r.Z)((e) => {
                            const t = new Map();
                            return (
                                e.forEach((e) => {
                                    t.set(e.id, e);
                                }),
                                t
                            );
                        })),
                        (this._getInitialRenderedItems = () => {
                            const { centerInitialAnchor: e, initialAnchor: t, list: i } = this.props,
                                s = [];
                            if (!t) return s;
                            if (t.type === R.FocusedItem) {
                                let o = 0;
                                if (e) {
                                    const e = this._getDocumentViewportHeight(),
                                        i = this._getHeightForItemId(t.itemId);
                                    o = Math.ceil(e / 2) - i / 2;
                                }
                                const n = (0, M.Z)(i, (e) => (e.id === t.itemId ? new _e(e.id, o, !0, e.canBeAnchor) : void 0));
                                n && s.push(n);
                            } else if (t.type === R.Anchor && (0, D.Z)(t.anchor.distanceToViewportTop)) {
                                const { anchor: e } = t,
                                    o = this._getDocumentViewportHeight(),
                                    n = e.distanceToViewportTop || 0,
                                    r = i.findIndex((t) => t.id === e.id);
                                let a = n,
                                    h = r;
                                for (; h > -1 && h < i.length && a < o; ) {
                                    const e = i[h],
                                        t = this._heights.get(e.id);
                                    if (!(0, D.Z)(t)) break;
                                    s.push(new _e(e.id, a, !0, e.canBeAnchor)), (a += t), (h += 1);
                                }
                                for (a = n, h = r - 1; h > -1 && a > 0; ) {
                                    const e = i[h],
                                        t = this._heights.get(e.id);
                                    if (!(0, D.Z)(t)) break;
                                    (a -= t), s.unshift(new _e(e.id, a, !0, e.canBeAnchor)), (h -= 1);
                                }
                            }
                            return s;
                        }),
                        (this._getViewportOffsetCorrection = () => {
                            const e = this._rootRef.current && this._rootRef.current.getBoundingClientRect();
                            if (!e || !this._viewport) return 0;
                            const t = this._viewport instanceof J.Z ? 0 : this._viewport.getRect().getTop();
                            return me({ cssPixels: e.top - t, dpr: this._devicePixelRatio });
                        }),
                        (this.getAnchors = () => {
                            const e = this._rootRef.current && this._rootRef.current.getBoundingClientRect(),
                                t = this._measureRelativeViewportRect();
                            return e && t
                                ? this._getItemsWithin(t)
                                      .filter((e) => e.item.canBeAnchor)
                                      .map((e) => ({ id: e.item.id, distanceToViewportTop: me({ cssPixels: e.offset + this._getViewportOffsetCorrection(), dpr: this._devicePixelRatio }), wasFocused: this._hasUserChangedFocus && e.item.id === this._activeEntryId }))
                                : [];
                        }),
                        (this._update = () => {
                            const e = this._measureRelativeViewportRect();
                            if (!e) return;
                            if (this._isFullScreened) return;
                            const t = this._getAnchor(e);
                            this._measureHeights(), t && (this._updateRenderedItems(t, e), (this._areAnchorsInvalidated = !1));
                        }),
                        (this._getItemsWithPositions = (e) => {
                            const { list: t } = this.props,
                                i = this._getDistanceFromTop(e.itemId);
                            let s = e.offset - i;
                            const o = [];
                            return (
                                t.forEach((e) => {
                                    const t = this._getHeight(e);
                                    o.push(new _e(e.id, s, this._heights.has(e.id), e.canBeAnchor, t)), (s += t);
                                }),
                                o
                            );
                        }),
                        (this._getSliceForCandidates = (e, t) => {
                            const i = (0, Z.Z)(e),
                                s = (0, k.Z)(e);
                            return { start: i ? t.indexOf(i) : 0, end: s ? t.indexOf(s) + 1 : 0 };
                        }),
                        (this._getRenderCandidates = (e, t) => {
                            const { minimumOffscreenToViewportRatio: i, preferredOffscreenToViewportRatio: s } = this.props,
                                o = fe(t, i),
                                n = fe(t, s),
                                r = this._isIdle && !this._isInitialAnchoring,
                                a = this._getItemsWithPositions(e),
                                h = a.filter((e) => this._getRenderedItemRectInViewport(e).doesIntersectWith(r ? n : o)),
                                d = this._getSliceForCandidates(h, a),
                                c = ((e, t, i) => {
                                    if (i) return t;
                                    if (t.start >= e.start && t.end <= e.end && e.end - e.start <= 50) return e;
                                    if (t.start >= e.end || t.end <= e.start) return t;
                                    {
                                        const i = Math.max(e.start - t.start, t.end - e.end, 0);
                                        return { start: Math.min(e.start + i, t.start), end: Math.max(e.end - i, t.end) };
                                    }
                                })(this._slice, d, r),
                                l = a.slice(c.start, c.end);
                            return { allItemsWithPositions: a, newRenderedItems: l, slice: c, arePreferredItemsRendered: r };
                        }),
                        (this._getIsHeightsReady = (e) => (0, V.Z)(e, ({ itemId: e }) => this._heights.has(e))),
                        (this._getHeightBetweenItems = (e, t) => (e && t ? this._getRenderedItemRectInViewport(t).getBottom() - this._getRenderedItemRectInViewport(e).getTop() : 0)),
                        (this._getRenderedItemRectInViewport = (e) => e.getRectInViewport()),
                        (this._updateRenderedItems = (e, t) => {
                            const { allItemsWithPositions: i, arePreferredItemsRendered: s, newRenderedItems: o, slice: n } = this._getRenderCandidates(e, t),
                                r = 0 !== this._cellAnimations.size,
                                a = this._shouldNormalize(e),
                                h = (0, Z.Z)(i),
                                d = (0, k.Z)(i),
                                c = this._getHeightBetweenItems(h, d),
                                l = c + this._calculateHeadroom(i, t),
                                _ = this._getIsHeightsReady(o),
                                u = !(B.ZP.isSafari() || B.ZP.isIOS()),
                                m = (!r && _ && (this._isIdle || u || l <= t.getHeight())) || (_ && this._isInitialAnchoring);
                            let p = o;
                            if (((this._slice = n), _ && (this._isInitialAnchoring = !1), a && m)) {
                                const { offset: i, renderedItems: s } = this._normalization(e, o);
                                (p = s),
                                    this.setState({ renderedItems: s, listHeightWithHeadroom: l, shouldAnimate: !a }, () => {
                                        let e = t;
                                        0 !== i && (this._viewport.scrollBy(-i), (e = this._measureRelativeViewportRect())), e && this._updatePositioning({ renderedItems: p, relativeViewportRect: e, firstItem: h, newListHeight: c });
                                    });
                            } else
                                this.setState({ renderedItems: o, listHeightWithHeadroom: l, shouldAnimate: !0 }, () => {
                                    (!a && s) || this._scheduleUpdateDebounced(), this._updatePositioning({ renderedItems: p, relativeViewportRect: t, firstItem: h, newListHeight: c });
                                });
                        }),
                        (this._updatePositioning = ({ firstItem: e, newListHeight: t, relativeViewportRect: i, renderedItems: s }) => {
                            const { list: o, onPositionUpdate: n } = this.props;
                            if (this._getIsHeightsReady(s)) {
                                const r = e ? this._getRenderedItemRectInViewport(e).getTop() : 0;
                                n(new ce({ viewportRect: i, listRect: new $.Z(r, t), listLength: o.length, renderedItems: s.map((e) => ({ id: e.itemId, rectangle: new $.Z(e.offset, this._getHeightForItemId(e.itemId)) })) }));
                            }
                        }),
                        (this._shouldNormalize = (e) => (this.props.hasNewContentAtBottom ? this._getListOffset(e) - this._currentHeadroom != 0 : 0 !== this._getListOffset(e))),
                        (this._normalization = (e, t) => {
                            const i = this._getListOffset(e);
                            return { offset: i, renderedItems: t.map((e) => new _e(e.itemId, e.offset - i, e.visible, e.canBeAnchor)) };
                        }),
                        (this._calculateHeadroom = (e, t) => (this.props.withoutHeadroom ? ((this._currentHeadroom = 0), this._currentHeadroom) : this.props.centerInitialAnchor ? this._calculateTopHeadroom(e, t) + this._calculateBottomHeadroom(e, t) : this.props.hasNewContentAtBottom ? this._calculateTopHeadroom(e, t) : this._calculateBottomHeadroom(e, t))),
                        (this._calculateBottomHeadroom = (e, t) => {
                            const i = (0, L.Z)(e, (e) => e.canBeAnchor),
                                s = (0, k.Z)(e);
                            if (!s) return (this._currentHeadroom = 0), this._currentHeadroom;
                            const o = this._getRenderedItemRectInViewport(s),
                                n = o.getBottom() - (i ? this._getRenderedItemRectInViewport(i).getTop() : o.getTop());
                            return (this._currentHeadroom = Math.max(0, t.getHeight() - n + this._viewport.getOffsetBottom())), this._currentHeadroom;
                        }),
                        (this._calculateTopHeadroom = (e, t) => {
                            const i = (0, L.Z)(e, (e) => e.canBeAnchor),
                                s = (0, Z.Z)(e);
                            if (!s) return (this._currentHeadroom = 0), this._currentHeadroom;
                            const o = this._getRenderedItemRectInViewport(s),
                                n = (i ? this._getRenderedItemRectInViewport(i).getBottom() : o.getBottom()) - o.getTop(),
                                r = this._getDocumentViewportHeight() - t.getHeight();
                            return (this._currentHeadroom = Math.max(0, t.getHeight() - n - r)), this._currentHeadroom;
                        }),
                        (this._getListOffset = (e) => {
                            if (!e) return this.props.hasNewContentAtBottom ? this._currentHeadroom : 0;
                            const t = this._getDistanceFromTop(e.itemId);
                            return this.props.hasNewContentAtBottom ? e.offset - t - this._currentHeadroom : e.offset - t;
                        }),
                        (this._getAnchorItemCandidates = () => {
                            const { analytics: e } = this.props,
                                t = this._getFinalRenderedItems(),
                                i = t.filter(({ item: e }) => e.canBeAnchor && (this._isInitialAnchoring || !!this._heights.get(e.id)));
                            if (this._areAnchorsInvalidated) {
                                const i = t.filter(({ item: e }) => {
                                    const t = this._previousItemMap.get(e.id)?.sortIndex;
                                    return t === U.Z || e.sortIndex === U.Z || t === e.sortIndex;
                                });
                                if (i.length !== t.length) return e.scribe({ element: "scroller", action: "hoisted_anchor_invalidation" }), i;
                                e.scribe({ element: "scroller", action: "no_hoisted_anchor_invalidation" });
                            }
                            return i;
                        }),
                        (this._shouldPinToNewest = () => !this._isInitialAnchoring && !!this.props.pinToNewestWhenAtNewest && this.isAtNewest()),
                        (this._getAnchor = (e) => {
                            if (this._shouldPinToNewest() && !this.props.centerInitialAnchor) {
                                if (this.props.hasNewContentAtBottom) {
                                    const e = (0, k.Z)(this.state.renderedItems);
                                    return e ? { itemId: e.itemId, offset: e.offset } : void 0;
                                }
                                {
                                    const e = (0, Z.Z)(this.props.list);
                                    return e ? { itemId: e.id, offset: 0 } : void 0;
                                }
                            }
                            const t = (t) => {
                                    const i = ((s = t), (o = e), Math.max(0, Math.min(s.getBottom(), o.getBottom()) - Math.max(s.getTop(), o.getTop())));
                                    var s, o;
                                    return (t.getHeight() > 0 ? i / t.getHeight() : 0) > 0.01 ? 1 : 0;
                                },
                                i = (t) => t.getBottom() - e.getTop(),
                                s = this._getAnchorItemCandidates(),
                                o = Ie(s, (e, s) => {
                                    const o = new _e(e.item.id, e.offset, e.visible, !0, this._getHeight(e.item)).getRectInViewport(),
                                        n = new _e(s.item.id, s.offset, s.visible, !0, this._getHeight(s.item)).getRectInViewport();
                                    return this.props.hasNewContentAtBottom ? t(o) - t(n) || Math.abs(i(o)) - Math.abs(i(n)) : t(o) - t(n) || Math.abs(i(n)) - Math.abs(i(o));
                                });
                            if (o) return { itemId: o.item.id, offset: o.offset };
                            const n = (0, Z.Z)(s);
                            if (n) return { itemId: n.item.id, offset: n.offset };
                            {
                                const e = (0, Z.Z)(this.props.list);
                                return e ? { itemId: e.id, offset: 0 } : void 0;
                            }
                        }),
                        (this._measureRelativeViewportRect = () => {
                            const e = this._rootRef.current;
                            if (e) return this._viewport.getRect().translateBy(-e.getBoundingClientRect().top);
                        }),
                        (this._getHeight = (e) => this._getHeightForItemId(e.id, e.data?.type)),
                        (this._getHeightForItemId = (e, t = "") => {
                            const { assumedItemHeight: i } = this.props,
                                s = this._heights.get(e),
                                o = (0, D.Z)(s) ? s : "function" == typeof i ? i(t) : i;
                            return me({ cssPixels: o, dpr: this._devicePixelRatio });
                        }),
                        (this._getDistanceFromTop = (e) => {
                            const { list: t } = this.props,
                                i = t.findIndex((t) => t.id === e);
                            return i >= 0 ? t.slice(0, i).reduce((e, t) => this._getHeight(t) + e, 0) : 0;
                        }),
                        (this._getItemsWithin = (e) => this._getFinalRenderedItems().filter(({ item: t, offset: i }) => new $.Z(i, this._getHeight(t)).doesIntersectWith(e))),
                        (this._measureHeights = () => {
                            this._cells.forEach((e, t) => {
                                this._heights.set(t, e.measureHeight());
                            });
                        }),
                        (this._handleAnimationStarted = (e, t) => {
                            this._cellAnimations.add(e), t && (this._cellAnimationStyle = t);
                        }),
                        (this._handleAnimationEnded = (e) => {
                            this._cellAnimations.delete(e), (this._cellAnimationStyle = ne);
                        }),
                        (this._handleItemVisible = (e, t) => {
                            this._visibilityMeasurements.has(e) || this._visibilityMeasurements.set(e, t);
                        }),
                        (this._reportVisibilityMeasurements = () => {
                            if (!this._visibilityMeasurements.size) return;
                            let e = 0;
                            this._visibilityMeasurements.forEach((t) => (e += t));
                            const t = Math.round(e / this._visibilityMeasurements.size),
                                i = B.ZP.isDesktopOS() ? "scroller_v3" : "scroller_v3_mobile";
                            q.IM(`scroller:ttfv:${i}`, { duration_ms: t }), this._visibilityMeasurements.clear();
                        }),
                        (this._updateItemHeight = (e, t) => {
                            this._pendingHeightUpdates.set(e, t);
                            const i = (0, V.Z)(this.state.renderedItems, ({ itemId: e }) => this._heights.has(e) || this._pendingHeightUpdates.has(e));
                            (i || this._pendingHeightUpdates.size > 50) && (this._update(), this._pendingHeightUpdates.clear());
                        }),
                        (this._handleHeightChanged = (e, t, i = !1) => {
                            this._heights.get(e) !== t && (this._cellAnimations.has(e) ? this._scheduleCriticalUpdate() : this._updateItemHeight(e, t));
                        }),
                        (this._setItemRef = (e, t) => {
                            t ? (this._cells.set(e, t), this._renderedItemsStatus.add(e)) : (this._cells.delete(e), this._renderedItemsStatus.delete(e));
                        }),
                        (this._getRenderedItemsWithFocusability = () =>
                            this._getFinalRenderedItems().map(({ item: e, visible: t }) => {
                                const i = this._cells.get(e.id);
                                return { id: e.id, focusable: !(!i || !i.isFocusable()), visible: t };
                            })),
                        (this._findNewestVisibleId = () => {
                            const e = this._measureRelativeViewportRect(),
                                t = e && this._getFinalRenderedItems().find(({ item: t, offset: i }) => new $.Z(i, this._getHeight(t)).doesIntersectWith(e));
                            return t && t.item.id;
                        }),
                        (this.adjustFocusBy = (e) => {
                            this._hasUserChangedFocus = !0;
                            const t = this._getRenderedItemsWithFocusability();
                            let i =
                                this._activeEntryId &&
                                ((e, t, i) => {
                                    const s = e ? (0, he.Z)(i, (t) => t.id === e) : -1;
                                    if (s >= 0) for (let e = s >= 0 ? s + t : 0; e >= 0 && e < i.length; e += t) if (i[e].focusable) return i[e].id;
                                    return s >= 0 ? e : void 0;
                                })(this._activeEntryId, e, t);
                            if (!i) {
                                const e = this._findNewestVisibleId();
                                i = e
                                    ? ((e, t) => {
                                          const i = (0, he.Z)(t, (t) => t.id === e);
                                          let s;
                                          if (i >= 0) {
                                              const e = t.find((e, t) => t >= i && e.focusable);
                                              s = e ? e.id : void 0;
                                          }
                                          return s || de(t);
                                      })(e, t)
                                    : de(t);
                            }
                            i && this._updateFocusToItem(i);
                        }),
                        (this._updateFocusToItem = (e, t) => {
                            if (e !== this._activeEntryId) {
                                const i = this._getRenderedItemsWithFocusability().find((t) => t.visible && t.id === e),
                                    s = this._cells.get(e),
                                    o = s && s.getElement();
                                i &&
                                    ((this._activeEntryId = e),
                                    o &&
                                        ((e, t, i) => {
                                            const s = ae.findDOMNode(e),
                                                o = s && s instanceof window.HTMLElement && s.querySelector("a, [tabindex='0']");
                                            if (o) {
                                                "function" == typeof o.scrollIntoView && o.scrollIntoView(i), o.focus();
                                                const e = (t || J.Z.root()).getRect().getTop();
                                                e > 0 && t?.scrollBy(-1 * e);
                                            }
                                        })(o, this._viewport, t));
                            }
                        }),
                        (this.scrollToNewest = (e) => {
                            (this._hasUserChangedFocus = !0),
                                this.props.hasNewContentAtBottom ? this._viewport.scrollTo(0, this.state.listHeightWithHeadroom) : this._viewport.scrollToTop(),
                                e &&
                                    (this._update(),
                                    N()(() => {
                                        const e = this._getRenderedItemsWithFocusability(),
                                            t = de(e);
                                        t && this._updateFocusToItem(t, { block: "nearest" });
                                    }));
                        }),
                        (this.isAtNewest = () => {
                            const e = this._measureRelativeViewportRect();
                            return !e || (this.props.hasNewContentAtBottom ? e.getBottom() >= this.state.listHeightWithHeadroom - 50 : e.getTop() <= 50);
                        }),
                        (this._viewport = e.viewport),
                        (this._devicePixelRatio = window.devicePixelRatio || 1),
                        (this.state = { renderedItems: [], listHeightWithHeadroom: 0, shouldAnimate: !1 });
                    const { cacheKey: i, initialAnchor: s } = this.props;
                    i && ue.hasOwnProperty(i) ? (this._heights = ue[i]) : ((this._heights = new Map()), (ue[i] = this._heights)),
                        (this._scheduleCriticalUpdate = (0, O.Z)(() => this._update(), window.requestAnimationFrame)),
                        (this._scheduleUpdate = window.requestIdleCallback
                            ? (0, O.Z)(() => {
                                  this._update();
                              }, window.requestIdleCallback)
                            : this._scheduleCriticalUpdate),
                        (this._scheduleCriticalUpdateThrottled = (0, a.Z)(
                            () => {
                                this._scheduleCriticalUpdate();
                            },
                            100,
                            { trailing: !0 },
                        )),
                        (this._scheduleUpdateDebounced = (0, P.Z)(this._scheduleUpdate, 250)),
                        (this._wasPreviouslyAtNewestEnd = !s),
                        (this._removeViewportResizeHandler = this._viewport.addRectChangeListener(this._scheduleCriticalUpdateThrottled)),
                        (this._shouldUseTopPositioning = this.context.featureSwitches.isTrue("responsive_web_scroller_top_positioning_enabled") || (B.ZP.isMobileOS() && B.ZP.isSafari())),
                        (window.scroller = this);
                }
                render() {
                    const { listHeightWithHeadroom: e, renderedItems: t, shouldAnimate: i } = this.state,
                        { featureSwitches: s } = this.context,
                        { role: n } = this.props,
                        r = this._getIsHeightsReady(t),
                        a = this._getFinalRenderedItems();
                    return o.createElement(
                        le.Z.Provider,
                        { value: this._getPositioningContext(r) },
                        o.createElement(
                            "div",
                            { ref: this._rootRef, role: n, style: { position: "relative", minHeight: e } },
                            a.map(({ item: e, offset: t, visible: n }) => {
                                const r = { top: this._shouldUseTopPositioning ? `${t}px` : void 0, transform: this._shouldUseTopPositioning ? void 0 : `translateY(${t}px)` };
                                return o.createElement(re, { isAnimationDisabled: s.isTrue("gryphon_faster_cell_entrance"), item: e, key: e.id, onAnimationEnded: this._handleAnimationEnded, onAnimationStarted: this._handleAnimationStarted, onHeightChanged: this._handleHeightChanged, onVisible: this._handleItemVisible, positioningStyle: r, setAPI: this._setItemRef, shouldAnimate: i, translationTransitionStyle: this._cellAnimationStyle, visible: n });
                            }),
                        ),
                    );
                }
                shouldComponentUpdate(e, t) {
                    return !C()(this.props, e) || !(0, x.Z)(this.state, t);
                }
                componentDidUpdate(e, t) {
                    e.list !== this.props.list &&
                        (this._isInitialAnchoring ||
                            ((this._previousItemMap = new Map()),
                            e.list.forEach((e) => {
                                this._previousItemMap.set(e.id, e);
                            }),
                            (this._areAnchorsInvalidated = !0),
                            this._shouldPinToNewest() && e.list.length !== this.props.list.length && this.props.analytics.scribe({ element: "scroller", action: "pin_to_top_attempt" })),
                        this._scheduleCriticalUpdate()),
                        e.cacheKey !== this.props.cacheKey && (this._hasUserChangedFocus = !1),
                        this._wasPreviouslyAtNewestEnd && this.props.list.find((e) => e.id === Q.ZF) && this._getHeightForItemId(Q.ZF) > 0 && !this.props.centerInitialAnchor && this.scrollToNewest();
                }
                componentDidMount() {
                    var e;
                    (this._removeScrollHandler = this._viewport.addScrollListener(this._handleScroll)), (this._removeProgrammaticScrollHandler = this._viewport.addProgrammaticScrollListener(this._handleProgrammaticScroll)), (this._removeFullscreenEnterHandler = ((e = this._handleEnterFullscreen), j || Y(), K.add(e), () => K.delete(e))), (this._removeFullscreenExitHandler = ((e) => (j || Y(), G.add(e), () => G.delete(e)))(this._handleExitFullscreen));
                    const t = this._getInitialRenderedItems();
                    if ((this.props.isManualScrollRestoration && this._viewport.scrollBy(-1), (this._isInitialAnchoring = !0), t.length > 0)) {
                        const e = this._getDocumentViewportHeight();
                        this.setState({ renderedItems: t, shouldAnimate: !0, listHeightWithHeadroom: e }, () => {
                            const { initialAnchor: e } = this.props;
                            if (e && e.type === R.Anchor) this._viewport.scrollBy(this._getViewportOffsetCorrection()), e.anchor.wasFocused && this._updateFocusToItem(e.anchor.id);
                            else if (e && e.type === R.FocusedItem) {
                                const t = this.props.centerInitialAnchor ? { behavior: "smooth", block: "center" } : void 0;
                                this._updateFocusToItem(e.itemId, t);
                            }
                            window.requestAnimationFrame(() => window.requestAnimationFrame(() => this._scheduleCriticalUpdate()));
                        });
                    } else this._update();
                }
                componentWillUnmount() {
                    this._removeScrollHandler && this._removeScrollHandler(), this._removeProgrammaticScrollHandler && this._removeProgrammaticScrollHandler(), this._removeFullscreenEnterHandler && this._removeFullscreenEnterHandler(), this._removeFullscreenExitHandler && this._removeFullscreenExitHandler(), this._removeViewportResizeHandler && this._removeViewportResizeHandler(), this._reportVisibilityMeasurements();
                }
                _getDocumentViewportHeight() {
                    return document.documentElement?.clientHeight || 0;
                }
                _getFinalRenderedItems() {
                    const { list: e } = this.props,
                        { renderedItems: t } = this.state;
                    return this._getFinalRenderedItemsMemoized(e, t);
                }
            }
            (pe.contextType = W.rC), (pe.defaultProps = { centerInitialAnchor: !1, nearEndProximityRatio: 1.75, nearStartProximityRatio: 0.25, assumedItemHeight: 400, hasNewContentAtBottom: !1, minimumOffscreenToViewportRatio: 0.5, preferredOffscreenToViewportRatio: 2.5 });
            const ge = (0, z.Z)((0, X.Z)(pe)),
                Ie = (e, t) => {
                    if (e.length) return e.reduce((e, i) => (t(i, e) > 0 ? i : e));
                },
                fe = (e, t) => {
                    const i = t * e.getHeight();
                    return new $.Z(e.getTop() - i, e.getHeight() + 2 * i);
                };
            let ve;
            const Ae = () => {
                ve = !1;
            };
            class we extends o.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderer = o.createRef()),
                        (this._isModal = !1),
                        (this._getList = (0, r.Z)((e, t, i, s, o, n, r) => {
                            const a = [];
                            return e && a.push((0, T.f)("$header", "header", () => e, !0)), a.push(...i.map((e) => (0, T.f)(n(e), e, s, !o || o(e), r && r(e)))), t && a.push((0, T.f)("$footer", "footer", () => t, !1)), a;
                        })),
                        (this._render = ({ isModal: e }) => {
                            const { anchoring: t, assumedItemHeight: i, cacheKey: s, canBeAnchorFunction: n, centerInitialAnchor: r, footer: a, hasNewContentAtBottom: h, header: d, identityFunction: c, initialAnchor: _, items: m, renderer: p, role: g, sortIndexFunction: I, withKeyboardShortcuts: f, withoutHeadroom: v } = this.props,
                                A = this._getScrollRestorationAnchor(),
                                w = A ? y(A) : _ ? S(_.id) : void 0;
                            return e && ((this._isModal = !0), (ve = !0)), o.createElement(u.Z, { enabled: f, handlers: { [l.uq.refresh]: this._handleKeyboardRefresh, [l.uq.nextItem]: this._handleKeyboardFocusNext, [l.uq.previousItem]: this._handleKeyboardFocusPrevious } }, o.createElement(ge, { assumedItemHeight: i, cacheKey: s, centerInitialAnchor: r, hasNewContentAtBottom: h, initialAnchor: w, isManualScrollRestoration: window.history && "manual" === window.history.scrollRestoration, key: s, list: this._getList(d, a, m, p, n, c, I), onPositionUpdate: this._handlePositionUpdate, onScrollEnd: this._handleScrollEnd, pinToNewestWhenAtNewest: t.pinToNewestWhenAtNewest, ref: this._renderer, role: g, withoutHeadroom: v }));
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.onScrollEnd && this.props.onScrollEnd();
                        }),
                        (this._handlePositionUpdate = (e) => {
                            const { onItemsRendered: t } = this.props;
                            this._edgeProximity.handlePositioningUpdate(e), t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() }), this._preservePosition(this._customLocation);
                        }),
                        (this._shouldPreventKeyboardShortcuts = () => ve && !this._isModal),
                        (this._handleKeyboardRefresh = (0, a.Z)(() => {
                            const { onKeyboardRefresh: e } = this.props;
                            this._shouldPreventKeyboardShortcuts() || (e && e());
                        }, 1e3)),
                        (this._handleKeyboardFocusNext = () => {
                            !this._shouldPreventKeyboardShortcuts() && this.adjustFocusBy(1);
                        }),
                        (this._handleKeyboardFocusPrevious = () => {
                            !this._shouldPreventKeyboardShortcuts() && this.adjustFocusBy(-1);
                        }),
                        (this.isAtNewest = () => !this._renderer.current || this._renderer.current.isAtNewest());
                    const { cacheKey: i, nearEndProximityRatio: s, nearStartProximityRatio: n } = e;
                    (this._edgeProximity = new w([
                        { condition: p(5), callback: (e) => this.props.onAtStart(e) },
                        { condition: I(n), callback: (e) => this.props.onNearStart(e) },
                        { condition: f(s), callback: (e) => this.props.onNearEnd(e) },
                        { condition: g(5), callback: (e) => this.props.onAtEnd(e) },
                    ])),
                        (this._prevCacheKey = i),
                        this._loadStoredPosition(e, this.context);
                }
                render() {
                    const { items: e, noItemsRenderer: t } = this.props;
                    return e?.length ? o.createElement(n.Z.Consumer, null, this._render) : t();
                }
                componentDidMount() {
                    const { onPositionRestored: e } = this.props;
                    e();
                }
                componentDidUpdate(e) {
                    const { cacheKey: t, onPositionRestored: i } = this.props;
                    t !== e.cacheKey && i();
                }
                componentWillUnmount() {
                    this._isModal && (ve = !1);
                }
                _getScrollRestorationAnchor() {
                    const { cacheKey: e } = this.props;
                    return this._prevCacheKey !== e && (this._loadStoredPosition(this.props, this.context), (this._prevCacheKey = e)), this._scrollRestorationAnchor[e];
                }
                _preservePosition(e) {
                    if (e && this._renderer.current) {
                        const t = this._renderer.current.getAnchors();
                        e.savePosition(t);
                    }
                }
                _loadStoredPosition(e, t) {
                    this._customLocation = t;
                    let i = [];
                    if (this._customLocation) {
                        const e = this._customLocation.getSavedPosition();
                        (i = e && e.length ? e : []), i.length > 0 && this._customLocation && this._customLocation.claimScrollRestoration();
                    }
                    const s = i.find(({ id: t, wasFocused: i }) => i && e.items.some((i) => e.identityFunction(i) === t)) || i.find(({ distanceToViewportTop: t, id: i }) => e.items.some((t) => e.identityFunction(t) === i));
                    this._scrollRestorationAnchor = { [e.cacheKey]: s };
                }
                adjustFocusBy(e) {
                    this._renderer.current && this._renderer.current.adjustFocusBy(e);
                }
                scrollToNewest(e) {
                    this._renderer.current && this._renderer.current.scrollToNewest(e);
                }
            }
            (we.contextType = _.y3), (we.defaultProps = { anchoring: E.Z, centerInitialAnchor: !1, hasNewContentAtBottom: !1, onPositionRestored: h.Z, onAtEnd: h.Z, onAtStart: h.Z, onNearEnd: h.Z, onNearStart: h.Z, onScrollEnd: h.Z, nearEndProximityRatio: 1.75, nearStartProximityRatio: 0.25, noItemsRenderer: d.Z, assumedItemHeight: 400, minimumOffscreenToViewportRatio: 0.5, preferredOffscreenToViewportRatio: 2.5, withoutHeadroom: !1, withKeyboardShortcuts: !1 });
            const Te = o.forwardRef(function (e, t) {
                    return o.createElement(we, (0, s.Z)({ ref: t }, e));
                }),
                Ee = (0, c.dW)(Te);
        },
        579051: (e, t, i) => {
            "use strict";
            i.d(t, { f: () => o });
            i(202784);
            class s {
                constructor(e, t, i, s, o) {
                    (this.id = e), (this._renderer = i), (this.canBeAnchor = s), (this.data = t), (this.sortIndex = o);
                }
                render(e) {
                    const { _renderer: t, data: i } = this;
                    return t(i, e);
                }
            }
            const o = (e, t, i, o, n = "-1") => new s(e, t, i, o, n);
        },
        719536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = Object.freeze({ MOVEMENT: "movement", LIST_UPDATE: "list_update", INITIAL_POSITION: "initial_position" });
        },
        334346: (e, t, i) => {
            "use strict";
            i.d(t, { C: () => h, Z: () => a });
            var s = i(807896),
                o = i(202784),
                n = i(524084),
                r = i(768572);
            const a = "stable_sort_index",
                h = o.forwardRef((e, t) => {
                    const i = e.cacheKey;
                    return o.createElement(r.ZP, { identifier: i }, o.createElement(n.Z, (0, s.Z)({ ref: t }, e)));
                });
        },
        373981: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = { ...i(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            function s(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const o = (e, t, i) => {
                    const s = e(t),
                        o = e(i);
                    return !s && o ? -1 : s && !o ? 1 : 0;
                },
                n = (e, t, i) => r(e(i), e(t)),
                r = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                a = (e, t) => {
                    if (e.length) return e.reduce((e, i) => (t(i, e) > 0 ? i : e));
                },
                h = ({ nextPos: e, prevPos: t }) => {
                    const i = t.getForViewport(),
                        r = (e) => e && e.doesIntersectWith(i),
                        h = (e) => (e ? Math.abs(i.getTop() - e.getTop()) : 1 / 0),
                        d = e.getList().filter(({ id: i }) => !s(i) && t.isRendered(i) && e.isRendered(i)),
                        c =
                            d.length > 0
                                ? a(d, (e, i) => {
                                      const s = t.getForItem(e.id),
                                          a = t.getForItem(i.id);
                                      return o(r, s, a) || n(h, s, a);
                                  })
                                : null;
                    return c && c.id;
                },
                d = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: i, distanceToViewportTop: s, id: o } = t;
                        if ("number" == typeof s) {
                            const t = e.getForViewport().getTop() + s;
                            return e.getForItem(o).getTop() - t;
                        }
                        if ("number" == typeof i) {
                            const t = e.getForViewport().getBottom() + i;
                            return e.getForItem(o).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            i = e.getForViewport().getBottom();
                        return Math.max(0, i - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !s(e))
                            .map(({ id: e, rectangle: i }) => ({ id: e, distanceToViewportTop: i.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const i = h({ prevPos: e, nextPos: t });
                        if (i) {
                            const s = e.getForItem(i).getTop() - e.getForViewport().getTop();
                            return t.getForItem(i).getTop() - t.getForViewport().getTop() - s;
                        }
                        return 0;
                    },
                };
        },
        524084: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            var s = i(202784),
                o = i(523561),
                n = i(195560);
            const r = (0, o.Z)({ loader: () => i.e("loader.AbsolutePower").then(i.bind(i, 590136)), renderPlaceholder: (e, t) => s.createElement(n.Z, { hasError: e, onRetry: t }) });
        },
        163390: (e, t, i) => {
            "use strict";
            i.d(t, { OX: () => _, Od: () => c, PN: () => u, uq: () => d, wR: () => p });
            var s = i(251067),
                o = i(522171),
                n = i(111677),
                r = i.n(n),
                a = i(912021),
                h = i(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, a.Z)((e) => {
                    const t = e ? [{ description: r().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${l} k`, universal: !1 }]), { description: r().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: d.nextItem, universal: !0 }, { description: r().g0048656, keys: d.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: d.refresh, universal: !1 }, { description: r().ha8209bc, keys: d.goHome, universal: !1 }, { description: r().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: r().eb75875e, keys: d.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: r().fa98627a, keys: d.goProfile, universal: !1 }, { description: r().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: r().b0041756, keys: d.goLists, universal: !1 }, { description: r().d4986f86, keys: d.goMessages, universal: !1 }, { description: r().h5860a68, keys: d.goGrok, universal: !1 }, { description: r().bb081ea2, keys: d.goSettings, universal: !1 }, { description: r().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: r().eee2ed92, keys: d.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                l = h.ZP.isMac() ? "⌘" : "CTRL",
                _ = () => [
                    { description: r().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${l} Enter`, universal: !1 },
                    { description: r().e736990a, keys: d.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: d.search, universal: !1 },
                    { description: r().fe731016, keys: o.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: o.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: o.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: o.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: d.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: d.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: d.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: o.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                u = () => [
                    { description: r().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: r().b881560e, keys: d.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = c(e),
                        i = _(),
                        s = u(),
                        o = {};
                    return (
                        [...i, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      o[t] = e;
                                  })
                                : (o[t] = e);
                        }),
                        JSON.stringify(o)
                    );
                }),
                p = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        275365: (e, t, i) => {
            "use strict";
            i.d(t, { BU: () => d, Cr: () => n, To: () => o, UN: () => h, eD: () => s, td: () => r, v1: () => a });
            const s = Object.freeze({ ONE_TO_ONE: "ONE_TO_ONE", GROUP: "GROUP_DM", SECRET_ONE_TO_ONE: "SECRET_ONE_TO_ONE" }),
                o = Object.freeze({ AT_END: "AT_END", HAS_MORE: "HAS_MORE" }),
                n = Object.freeze({ CONVERSATION_AVATAR_UPDATE: "conversation_avatar_update", CONVERSATION_NAME_UPDATE: "conversation_name_update", CONVERSATION_PROFILE_INFO_HEADER: "conversation_profile_info_header", CONVERSATION_READ: "conversation_read", CONVO_METADATA_UPDATE: "convo_metadata_update", DELEGATE_ALERT_BANNER: "delegate_alert_banner", DISABLE_NOTIFICATIONS: "disable_notifications", ENABLE_NOTIFICATIONS: "enable_notifications", END_AV_BROADCAST: "end_av_broadcast", ENCRYPTED_CONVERSATION: "encrypted_conversation", JOIN_CONVERSATION: "join_conversation", LOADING_INDICATOR: "loading_indicator", MARK_ALL_AS_READ: "mark_all_as_read", MENTION_NOTIFICATIONS_UPDATE: "mention_notifications_setting_update", MESSAGE: "message", MESSAGE_DELETE: "message_delete", MESSAGE_MARK_AS_NOT_SPAM: "message_unmark_as_spam", MESSAGE_MARK_AS_SPAM: "message_mark_as_spam", NEW_MESSAGES_DIVIDER: "new_messages_divider", PARTICIPANTS_JOIN: "participants_join", PARTICIPANTS_LEAVE: "participants_leave", REACTION_CREATE: "reaction_create", REACTION_DELETE: "reaction_delete", READ_ONLY_INDICATOR: "read_only_indicator", REMOVE_CONVERSATION: "remove_conversation", TRUST_CONVERSATION: "trust_conversation", TYPING_INDICATOR: "typing_indicator", WELCOME_MESSAGE: "welcome_message_create" }),
                r = Object.freeze({ MISSED: "MISSED", CANCELED: "CANCELED", DECLINED: "DECLINED", HUNG_UP: "HUNG_UP", TIMED_OUT: "TIMED_OUT" }),
                a = Object.freeze({ AUDIO_ONLY: "AUDIO_ONLY", VIDEO: "VIDEO" }),
                h = Object.freeze({ MUTUAL_FRIENDS: "mutual_friends" }),
                d = Object.freeze({ UNINITIATED: "UNINITIATED", EXISTING: "EXISTING", DEVICE_NOT_A_MEMBER: "DEVICE_NOT_A_MEMBER" });
        },
        76601: (e, t, i) => {
            "use strict";
            i.d(t, { V_: () => _, ZF: () => h, aM: () => a, oA: () => r, sV: () => l, tn: () => n, u2: () => d, yW: () => c });
            i(202784);
            var s = i(275365);
            const o = (e, t) => ({ entry: { id: t, time: "", type: e }, isActive: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastPersistedMessage: !1, isLastRapidFire: !1, type: e }),
                n = o(s.Cr.CONVERSATION_PROFILE_INFO_HEADER, "conversationProfileInfoHeader"),
                r = o(s.Cr.ENCRYPTED_CONVERSATION, "encryptedConversation"),
                a = o(s.Cr.DELEGATE_ALERT_BANNER, "delegateAlertBanner"),
                h = "typingIndicator",
                d = o(s.Cr.TYPING_INDICATOR, h),
                c = o(s.Cr.READ_ONLY_INDICATOR, "readOnlyIndicator"),
                l = o(s.Cr.LOADING_INDICATOR, "loadingIndicator"),
                _ = o(s.Cr.NEW_MESSAGES_DIVIDER, "newMessagesDivider");
        },
        67877: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = (e, t) => {
                let i = null;
                const s = () => {
                    (i = null), e();
                };
                return () => (i || (i = t(s)), i);
            };
        },
        666536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            var s = i(936386),
                o = i.n(s);
            const n = (e, t, i) => o()(e, t, i);
        },
        490359: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            const s = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
        936386: (e) => {
            function t(e, t, i) {
                var s, o, n, r, a;
                function h() {
                    var d = Date.now() - r;
                    d < t && d >= 0 ? (s = setTimeout(h, t - d)) : ((s = null), i || ((a = e.apply(n, o)), (n = o = null)));
                }
                null == t && (t = 100);
                var d = function () {
                    (n = this), (o = arguments), (r = Date.now());
                    var d = i && !s;
                    return s || (s = setTimeout(h, t)), d && ((a = e.apply(n, o)), (n = o = null)), a;
                };
                return (
                    (d.clear = function () {
                        s && (clearTimeout(s), (s = null));
                    }),
                    (d.flush = function () {
                        s && ((a = e.apply(n, o)), (n = o = null), clearTimeout(s), (s = null));
                    }),
                    d
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AbsolutePower.dded139a.js.map
