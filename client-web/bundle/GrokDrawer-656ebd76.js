"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-656ebd76", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"],
    {
        454479: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(18198),
                r = o(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                s = r.Z.currentCentroidYOfTouchesChangedAfter,
                i = r.Z.previousCentroidXOfTouchesChangedAfter,
                u = r.Z.previousCentroidYOfTouchesChangedAfter,
                d = r.Z.currentCentroidX,
                c = r.Z.currentCentroidY,
                l = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = s(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            n = i(t, o),
                            r = a(t, o),
                            d = u(t, o),
                            c = s(t, o),
                            l = e.dx + (r - n),
                            p = e.dy + (c - d),
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (l - e.dx) / h), (e.vy = (p - e.dy) / h), (e.dx = l), (e.dy = p), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            o = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, o),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, o),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && l._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var n = t.touchHistory;
                                    return o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (l._updateGestureStateOnMove(o, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = n.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = d(r.touchHistory)),
                                    (o.y0 = c(r.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, o)
                                ),
                                onResponderReject(n) {
                                    p(t, e.onPanResponderReject, n, o);
                                },
                                onResponderRelease(n) {
                                    p(t, e.onPanResponderRelease, n, o), h(t), l._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var n = t.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var n = t.touchHistory;
                                    o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (l._updateGestureStateOnMove(o, n), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(n) {
                                    var r = n.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), p(t, e.onPanResponderEnd, n, o);
                                },
                                onResponderTerminate(n) {
                                    p(t, e.onPanResponderTerminate, n, o), h(t), l._initializeGestureState(o);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, o),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function p(e, t, o, r) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, r);
            }
            function h(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const v = l;
        },
        472822: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = { isLayoutAnimationEnabled: () => !0, shouldEmitW3CPointerEvents: () => !1, shouldPressibilityUseW3CPointerEventsForHover: () => !1, animatedShouldDebounceQueueFlush: () => !1, animatedShouldUseSingleOp: () => !1 };
        },
        975064: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                r = o(231461),
                a = o(33229),
                s = o(202784),
                i = o(582975),
                u = ["stickySectionHeadersEnabled"];
            class d extends s.PureComponent {
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
                        o = (0, r.Z)(e, u),
                        d = null != t ? t : "ios" === a.Z.OS;
                    return s.createElement(i.Z, (0, n.Z)({}, o, { stickySectionHeadersEnabled: d, ref: this._captureRef, getItemCount: (e) => e.length, getItem: (e, t) => e[t] }));
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-656ebd76.4ddc7c2a.js.map
