(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TV~bundle.Account-6107ac1a", "icons/IconChevronRight-js"],
    {
        396342: function (t, e, o) {
            var n, s, i, r, a, u, c, l, d, f, h, p;
            t.exports =
                ((n = o(254073)),
                (s = o(317335)),
                (i = o(190882)),
                (r = o(609439)),
                (a = o(753237)),
                (u = o(859756)),
                (c = o(115253)),
                (l = o(334291)),
                (d = o(900829)),
                (f = o(912436)),
                (h = o(774930)),
                (p = o(202784)),
                (function () {
                    "use strict";
                    var t = {
                            654: function (t, e, o) {
                                var n,
                                    s =
                                        (this && this.__assign) ||
                                        function () {
                                            return (
                                                (s =
                                                    Object.assign ||
                                                    function (t) {
                                                        for (var e, o = 1, n = arguments.length; o < n; o++) for (var s in (e = arguments[o])) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
                                                        return t;
                                                    }),
                                                s.apply(this, arguments)
                                            );
                                        },
                                    i =
                                        (this && this.__createBinding) ||
                                        (Object.create
                                            ? function (t, e, o, n) {
                                                  void 0 === n && (n = o);
                                                  var s = Object.getOwnPropertyDescriptor(e, o);
                                                  (s && !("get" in s ? !e.__esModule : s.writable || s.configurable)) ||
                                                      (s = {
                                                          enumerable: !0,
                                                          get: function () {
                                                              return e[o];
                                                          },
                                                      }),
                                                      Object.defineProperty(t, n, s);
                                              }
                                            : function (t, e, o, n) {
                                                  void 0 === n && (n = o), (t[n] = e[o]);
                                              }),
                                    r =
                                        (this && this.__setModuleDefault) ||
                                        (Object.create
                                            ? function (t, e) {
                                                  Object.defineProperty(t, "default", { enumerable: !0, value: e });
                                              }
                                            : function (t, e) {
                                                  t.default = e;
                                              }),
                                    a =
                                        (this && this.__importStar) ||
                                        function (t) {
                                            if (t && t.__esModule) return t;
                                            var e = {};
                                            if (null != t) for (var o in t) "default" !== o && Object.prototype.hasOwnProperty.call(t, o) && i(e, t, o);
                                            return r(e, t), e;
                                        },
                                    u =
                                        (this && this.__spreadArray,
                                        (this && this.__importDefault) ||
                                            function (t) {
                                                return t && t.__esModule ? t : { default: t };
                                            });
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.doesFocusableExist = e.getCurrentFocusKey = e.updateAllLayouts = e.resume = e.pause = e.navigateByDirection = e.setFocus = e.setKeyMap = e.destroy = e.setThrottle = e.init = e.SpatialNavigation = e.ROOT_FOCUS_KEY = void 0);
                                var c = u(o(150)),
                                    l = u(o(117)),
                                    d = u(o(747)),
                                    f = u(o(23)),
                                    h = u(o(842)),
                                    p = u(o(682)),
                                    y = u(o(784)),
                                    v = u(o(432)),
                                    g = u(o(67)),
                                    b = u(o(35)),
                                    C = u(o(119)),
                                    F = a(o(964)),
                                    m = "left",
                                    x = "right",
                                    K = "up",
                                    w = "down",
                                    D = "enter",
                                    E = (((n = {}).left = [37, "ArrowLeft"]), (n.up = [38, "ArrowUp"]), (n.right = [39, "ArrowRight"]), (n.down = [40, "ArrowDown"]), (n.enter = [13, "Enter"]), n);
                                e.ROOT_FOCUS_KEY = "SN:ROOT";
                                var P = { leading: !0, trailing: !1 },
                                    L = (function () {
                                        function t() {
                                            (this.focusableComponents = {}), (this.focusKey = null), (this.parentsHavingFocusedChild = []), (this.enabled = !1), (this.nativeMode = !1), (this.throttle = 0), (this.throttleKeypresses = !1), (this.useGetBoundingClientRect = !1), (this.shouldFocusDOMNode = !1), (this.shouldUseNativeEvents = !1), (this.writingDirection = C.default.LTR), (this.pressedKeys = {}), (this.paused = !1), (this.keyDownEventListener = null), (this.keyUpEventListener = null), (this.keyMap = E), (this.onKeyEvent = this.onKeyEvent.bind(this)), (this.pause = this.pause.bind(this)), (this.resume = this.resume.bind(this)), (this.setFocus = this.setFocus.bind(this)), (this.updateAllLayouts = this.updateAllLayouts.bind(this)), (this.navigateByDirection = this.navigateByDirection.bind(this)), (this.init = this.init.bind(this)), (this.setThrottle = this.setThrottle.bind(this)), (this.destroy = this.destroy.bind(this)), (this.setKeyMap = this.setKeyMap.bind(this)), (this.getCurrentFocusKey = this.getCurrentFocusKey.bind(this)), (this.doesFocusableExist = this.doesFocusableExist.bind(this)), (this.setFocusDebounced = (0, c.default)(this.setFocus, 300, { leading: !1, trailing: !0 })), (this.debug = !1), (this.visualDebugger = null), (this.logIndex = 0);
                                        }
                                        return (
                                            (t.getCutoffCoordinate = function (t, e, o, n, s) {
                                                var i = t ? n.top : s === C.default.LTR ? n.left : n.right,
                                                    r = t ? n.bottom : s === C.default.LTR ? n.right : n.left;
                                                return e ? (o ? i : r) : o ? r : i;
                                            }),
                                            (t.getRefCorners = function (t, e, o) {
                                                var n = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } };
                                                switch (t) {
                                                    case K:
                                                        var s = e ? o.bottom : o.top;
                                                        (n.a = { x: o.left, y: s }), (n.b = { x: o.right, y: s });
                                                        break;
                                                    case w:
                                                        (s = e ? o.top : o.bottom), (n.a = { x: o.left, y: s }), (n.b = { x: o.right, y: s });
                                                        break;
                                                    case m:
                                                        var i = e ? o.right : o.left;
                                                        (n.a = { x: i, y: o.top }), (n.b = { x: i, y: o.bottom });
                                                        break;
                                                    case x:
                                                        (i = e ? o.left : o.right), (n.a = { x: i, y: o.top }), (n.b = { x: i, y: o.bottom });
                                                }
                                                return n;
                                            }),
                                            (t.isAdjacentSlice = function (t, e, o) {
                                                var n = t.a,
                                                    s = t.b,
                                                    i = e.a,
                                                    r = e.b,
                                                    a = o ? "x" : "y",
                                                    u = n[a],
                                                    c = s[a],
                                                    l = i[a],
                                                    d = r[a],
                                                    f = 0.2 * (c - u);
                                                return Math.max(0, Math.min(c, d) - Math.max(u, l)) >= f;
                                            }),
                                            (t.getPrimaryAxisDistance = function (t, e, o) {
                                                var n = t.a,
                                                    s = e.a,
                                                    i = o ? "y" : "x";
                                                return Math.abs(s[i] - n[i]);
                                            }),
                                            (t.getSecondaryAxisDistance = function (t, e, o) {
                                                var n = t.a,
                                                    s = t.b,
                                                    i = e.a,
                                                    r = e.b,
                                                    a = o ? "x" : "y",
                                                    u = n[a],
                                                    c = s[a],
                                                    l = i[a],
                                                    d = r[a],
                                                    f = [];
                                                return f.push(Math.abs(l - u)), f.push(Math.abs(l - c)), f.push(Math.abs(d - u)), f.push(Math.abs(d - c)), Math.min.apply(Math, f);
                                            }),
                                            (t.prototype.sortSiblingsByPriority = function (e, o, n, s) {
                                                var i = this,
                                                    r = n === w || n === K,
                                                    a = t.getRefCorners(n, !1, o);
                                                return (0, v.default)(e, function (e) {
                                                    var o = t.getRefCorners(n, !0, e.layout),
                                                        u = t.isAdjacentSlice(a, o, r),
                                                        c = u ? t.getPrimaryAxisDistance : t.getSecondaryAxisDistance,
                                                        l = u ? t.getSecondaryAxisDistance : t.getPrimaryAxisDistance,
                                                        d = c(a, o, r),
                                                        f = l(a, o, r),
                                                        h = 5 * d + f,
                                                        p = (h + 1) / (u ? 5 : 1);
                                                    return i.log("smartNavigate", "distance (primary, secondary, total weighted) for ".concat(e.focusKey, " relative to ").concat(s, " is"), d, f, h), i.log("smartNavigate", "priority for ".concat(e.focusKey, " relative to ").concat(s, " is"), p), i.visualDebugger && (i.visualDebugger.drawPoint(o.a.x, o.a.y, "yellow", 6), i.visualDebugger.drawPoint(o.b.x, o.b.y, "yellow", 6)), p;
                                                });
                                            }),
                                            (t.prototype.init = function (t) {
                                                var e = void 0 === t ? {} : t,
                                                    o = e.debug,
                                                    n = void 0 !== o && o,
                                                    s = e.visualDebug,
                                                    i = void 0 !== s && s,
                                                    r = e.nativeMode,
                                                    a = void 0 !== r && r,
                                                    u = e.throttle,
                                                    c = void 0 === u ? 0 : u,
                                                    l = e.throttleKeypresses,
                                                    d = void 0 !== l && l,
                                                    f = e.useGetBoundingClientRect,
                                                    h = void 0 !== f && f,
                                                    p = e.shouldFocusDOMNode,
                                                    y = void 0 !== p && p,
                                                    v = e.shouldUseNativeEvents,
                                                    g = void 0 !== v && v,
                                                    F = e.rtl,
                                                    m = void 0 !== F && F;
                                                this.enabled || ((this.enabled = !0), (this.nativeMode = a), (this.throttleKeypresses = d), (this.useGetBoundingClientRect = h), (this.shouldFocusDOMNode = y && !a), (this.shouldUseNativeEvents = g), (this.writingDirection = m ? C.default.RTL : C.default.LTR), (this.debug = n), this.nativeMode || (Number.isInteger(c) && c > 0 && (this.throttle = c), this.bindEventHandlers(), i && ((this.visualDebugger = new b.default(this.writingDirection)), this.startDrawLayouts())));
                                            }),
                                            (t.prototype.setThrottle = function (t) {
                                                var e = void 0 === t ? {} : t,
                                                    o = e.throttle,
                                                    n = void 0 === o ? 0 : o,
                                                    s = e.throttleKeypresses,
                                                    i = void 0 !== s && s;
                                                (this.throttleKeypresses = i), this.nativeMode || (this.unbindEventHandlers(), Number.isInteger(n) && (this.throttle = n), this.bindEventHandlers());
                                            }),
                                            (t.prototype.startDrawLayouts = function () {
                                                var t = this,
                                                    e = function () {
                                                        requestAnimationFrame(function () {
                                                            t.visualDebugger.clearLayouts(),
                                                                (0, y.default)(t.focusableComponents, function (e, o) {
                                                                    t.visualDebugger.drawLayout(e.layout, o, e.parentFocusKey);
                                                                }),
                                                                e();
                                                        });
                                                    };
                                                e();
                                            }),
                                            (t.prototype.destroy = function () {
                                                this.enabled && ((this.enabled = !1), (this.nativeMode = !1), (this.throttle = 0), (this.throttleKeypresses = !1), (this.focusKey = null), (this.parentsHavingFocusedChild = []), (this.focusableComponents = {}), (this.paused = !1), (this.keyMap = E), this.unbindEventHandlers());
                                            }),
                                            (t.prototype.getEventType = function (t) {
                                                return (0, f.default)(this.getKeyMap(), function (e) {
                                                    return e.includes(t);
                                                });
                                            }),
                                            (t.getKeyCode = function (t) {
                                                return t.keyCode || t.code;
                                            }),
                                            (t.prototype.bindEventHandlers = function () {
                                                var e = this;
                                                "undefined" != typeof window &&
                                                    window.addEventListener &&
                                                    ((this.keyDownEventListener = function (o) {
                                                        if (!0 !== e.paused) {
                                                            e.debug && (e.logIndex += 1);
                                                            var n = t.getKeyCode(o),
                                                                s = e.getEventType(n);
                                                            if (s) {
                                                                (e.pressedKeys[s] = e.pressedKeys[s] ? e.pressedKeys[s] + 1 : 1), e.shouldUseNativeEvents || (o.preventDefault(), o.stopPropagation());
                                                                var i = { pressedKeys: e.pressedKeys };
                                                                s === D && e.focusKey ? e.onEnterPress(i) : !1 === e.onArrowPress(s, i) ? (e.log("keyDownEventListener", "default navigation prevented"), e.visualDebugger && e.visualDebugger.clear()) : e.onKeyEvent(o);
                                                            }
                                                        }
                                                    }),
                                                    this.throttle && (this.keyDownEventListenerThrottled = (0, g.default)(this.keyDownEventListener.bind(this), this.throttle, P)),
                                                    (this.keyUpEventListener = function (o) {
                                                        var n = t.getKeyCode(o),
                                                            s = e.getEventType(n);
                                                        delete e.pressedKeys[s], e.throttle && !e.throttleKeypresses && e.keyDownEventListenerThrottled.cancel(), s === D && e.focusKey && e.onEnterRelease();
                                                    }),
                                                    window.addEventListener("keyup", this.keyUpEventListener),
                                                    window.addEventListener("keydown", this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener));
                                            }),
                                            (t.prototype.unbindEventHandlers = function () {
                                                if ("undefined" != typeof window && window.removeEventListener) {
                                                    window.removeEventListener("keyup", this.keyUpEventListener), (this.keyUpEventListener = null);
                                                    var t = this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener;
                                                    window.removeEventListener("keydown", t), (this.keyDownEventListener = null);
                                                }
                                            }),
                                            (t.prototype.onEnterPress = function (t) {
                                                var e = this.focusableComponents[this.focusKey];
                                                e ? (e.focusable ? e.onEnterPress && e.onEnterPress(t) : this.log("onEnterPress", "componentNotFocusable")) : this.log("onEnterPress", "noComponent");
                                            }),
                                            (t.prototype.onEnterRelease = function () {
                                                var t = this.focusableComponents[this.focusKey];
                                                t ? (t.focusable ? t.onEnterRelease && t.onEnterRelease() : this.log("onEnterRelease", "componentNotFocusable")) : this.log("onEnterRelease", "noComponent");
                                            }),
                                            (t.prototype.onArrowPress = function (t, e) {
                                                var o = this.focusableComponents[this.focusKey];
                                                if (o) return o && o.onArrowPress && o.onArrowPress(t, e);
                                                this.log("onArrowPress", "noComponent");
                                            }),
                                            (t.prototype.navigateByDirection = function (t, e) {
                                                if (!0 !== this.paused && this.enabled && !this.nativeMode) {
                                                    var o = [w, K, m, x];
                                                    o.includes(t) ? (this.log("navigateByDirection", "direction", t), this.smartNavigate(t, null, e)) : this.log("navigateByDirection", "Invalid direction. You passed: `".concat(t, "`, but you can use only these: "), o);
                                                }
                                            }),
                                            (t.prototype.onKeyEvent = function (e) {
                                                this.visualDebugger && this.visualDebugger.clear();
                                                var o = t.getKeyCode(e),
                                                    n = (0, f.default)(this.getKeyMap(), function (t) {
                                                        return t.includes(o);
                                                    });
                                                this.smartNavigate(n, null, { event: e });
                                            }),
                                            (t.prototype.smartNavigate = function (e, o, n) {
                                                var s = this;
                                                if (!this.nativeMode) {
                                                    var i = e === w || e === K,
                                                        r = e === w || (this.writingDirection === C.default.LTR ? e === x : e === m);
                                                    this.log("smartNavigate", "direction", e),
                                                        this.log("smartNavigate", "fromParentFocusKey", o),
                                                        this.log("smartNavigate", "this.focusKey", this.focusKey),
                                                        o ||
                                                            (0, y.default)(this.focusableComponents, function (t) {
                                                                t.layoutUpdated = !1;
                                                            });
                                                    var a = this.focusableComponents[o || this.focusKey];
                                                    if (o || a) {
                                                        if ((this.log("smartNavigate", "currentComponent", a ? a.focusKey : void 0, a ? a.node : void 0, a), a)) {
                                                            this.updateLayout(a.focusKey);
                                                            var u = a.parentFocusKey,
                                                                c = a.focusKey,
                                                                l = a.layout,
                                                                f = t.getCutoffCoordinate(i, r, !1, l, this.writingDirection),
                                                                p = (0, d.default)(this.focusableComponents, function (e) {
                                                                    if (e.parentFocusKey === u && e.focusable) {
                                                                        s.updateLayout(e.focusKey);
                                                                        var o = t.getCutoffCoordinate(i, r, !0, e.layout, s.writingDirection);
                                                                        return i || s.writingDirection === C.default.LTR ? (r ? o >= f : o <= f) : r ? o <= f : o >= f;
                                                                    }
                                                                    return !1;
                                                                });
                                                            if (
                                                                (this.debug &&
                                                                    (this.log("smartNavigate", "currentCutoffCoordinate", f),
                                                                    this.log(
                                                                        "smartNavigate",
                                                                        "siblings",
                                                                        "".concat(p.length, " elements:"),
                                                                        p
                                                                            .map(function (t) {
                                                                                return t.focusKey;
                                                                            })
                                                                            .join(", "),
                                                                        p.map(function (t) {
                                                                            return t.node;
                                                                        }),
                                                                        p.map(function (t) {
                                                                            return t;
                                                                        }),
                                                                    )),
                                                                this.visualDebugger)
                                                            ) {
                                                                var v = t.getRefCorners(e, !1, l);
                                                                this.visualDebugger.drawPoint(v.a.x, v.a.y), this.visualDebugger.drawPoint(v.b.x, v.b.y);
                                                            }
                                                            var g = this.sortSiblingsByPriority(p, l, e, c),
                                                                b = (0, h.default)(g);
                                                            if ((this.log("smartNavigate", "nextComponent", b ? b.focusKey : void 0, b ? b.node : void 0, b), b)) this.setFocus(b.focusKey, n);
                                                            else {
                                                                var F = this.focusableComponents[u],
                                                                    D = (null == F ? void 0 : F.isFocusBoundary) ? F.focusBoundaryDirections || [e] : [];
                                                                (F && D.includes(e)) || this.smartNavigate(e, u, n);
                                                            }
                                                        }
                                                    } else this.setFocus(this.getForcedFocusKey());
                                                }
                                            }),
                                            (t.prototype.saveLastFocusedChildKey = function (t, e) {
                                                t && (this.log("saveLastFocusedChildKey", "".concat(t.focusKey, " lastFocusedChildKey set"), e), (t.lastFocusedChildKey = e));
                                            }),
                                            (t.prototype.log = function (t, e) {
                                                for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                                                this.debug;
                                            }),
                                            (t.prototype.getCurrentFocusKey = function () {
                                                return this.focusKey;
                                            }),
                                            (t.prototype.getForcedFocusKey = function () {
                                                var t,
                                                    o = (0, d.default)(this.focusableComponents, function (t) {
                                                        return t.focusable && t.forceFocus;
                                                    }),
                                                    n = this.sortSiblingsByPriority(o, { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, node: null }, "down", e.ROOT_FOCUS_KEY);
                                                return null === (t = (0, h.default)(n)) || void 0 === t ? void 0 : t.focusKey;
                                            }),
                                            (t.prototype.getNextFocusKey = function (t) {
                                                var e = this,
                                                    o = this.focusableComponents[t];
                                                if (!o || this.nativeMode) return t;
                                                var n = (0, d.default)(this.focusableComponents, function (e) {
                                                    return e.parentFocusKey === t && e.focusable;
                                                });
                                                if (n.length > 0) {
                                                    var s = o.lastFocusedChildKey,
                                                        i = o.preferredChildFocusKey;
                                                    if ((this.log("getNextFocusKey", "lastFocusedChildKey is", s), this.log("getNextFocusKey", "preferredChildFocusKey is", i), s && o.saveLastFocusedChild && this.isParticipatingFocusableComponent(s))) return this.log("getNextFocusKey", "lastFocusedChildKey will be focused", s), this.getNextFocusKey(s);
                                                    if (i && this.isParticipatingFocusableComponent(i)) return this.log("getNextFocusKey", "preferredChildFocusKey will be focused", i), this.getNextFocusKey(i);
                                                    n.forEach(function (t) {
                                                        return e.updateLayout(t.focusKey);
                                                    });
                                                    var r = (function (t, e) {
                                                        var o =
                                                                e === C.default.LTR
                                                                    ? function (t) {
                                                                          var e = t.layout;
                                                                          return Math.abs(e.left) + Math.abs(e.top);
                                                                      }
                                                                    : function (t) {
                                                                          var e = t.layout;
                                                                          return Math.abs(window.innerWidth - e.right) + Math.abs(e.top);
                                                                      },
                                                            n = (0, v.default)(t, o);
                                                        return (0, h.default)(n);
                                                    })(n, this.writingDirection).focusKey;
                                                    return this.log("getNextFocusKey", "childKey will be focused", r), this.getNextFocusKey(r);
                                                }
                                                return this.log("getNextFocusKey", "targetFocusKey", t), t;
                                            }),
                                            (t.prototype.addFocusable = function (t) {
                                                var e = t.focusKey,
                                                    o = t.node,
                                                    n = t.parentFocusKey,
                                                    s = t.onEnterPress,
                                                    i = t.onEnterRelease,
                                                    r = t.onArrowPress,
                                                    a = t.onFocus,
                                                    u = t.onBlur,
                                                    c = t.saveLastFocusedChild,
                                                    l = t.trackChildren,
                                                    d = t.onUpdateFocus,
                                                    f = t.onUpdateHasFocusedChild,
                                                    h = t.preferredChildFocusKey,
                                                    p = t.autoRestoreFocus,
                                                    y = t.forceFocus,
                                                    v = t.focusable,
                                                    g = t.isFocusBoundary,
                                                    b = t.focusBoundaryDirections;
                                                if (((this.focusableComponents[e] = { focusKey: e, node: o, parentFocusKey: n, onEnterPress: s, onEnterRelease: i, onArrowPress: r, onFocus: a, onBlur: u, onUpdateFocus: d, onUpdateHasFocusedChild: f, saveLastFocusedChild: c, trackChildren: l, preferredChildFocusKey: h, focusable: v, isFocusBoundary: g, focusBoundaryDirections: b, autoRestoreFocus: p, forceFocus: y, lastFocusedChildKey: null, layout: { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, node: o }, layoutUpdated: !1 }), !this.nativeMode)) {
                                                    this.updateLayout(e), this.log("addFocusable", "Component added: ", this.focusableComponents[e]), e === this.focusKey && this.setFocus(h || e);
                                                    for (var C = this.focusableComponents[this.focusKey]; C; ) {
                                                        if (C.parentFocusKey === e) {
                                                            this.updateParentsHasFocusedChild(this.focusKey, {}), this.updateParentsLastFocusedChild(this.focusKey);
                                                            break;
                                                        }
                                                        C = this.focusableComponents[C.parentFocusKey];
                                                    }
                                                }
                                            }),
                                            (t.prototype.removeFocusable = function (t) {
                                                var e = t.focusKey,
                                                    o = this.focusableComponents[e];
                                                if (o) {
                                                    var n = o.parentFocusKey;
                                                    (0, o.onUpdateFocus)(!1), this.log("removeFocusable", "Component removed: ", o), delete this.focusableComponents[e];
                                                    var s = this.parentsHavingFocusedChild.includes(e);
                                                    this.parentsHavingFocusedChild = this.parentsHavingFocusedChild.filter(function (t) {
                                                        return t !== e;
                                                    });
                                                    var i = this.focusableComponents[n],
                                                        r = e === this.focusKey;
                                                    if ((i && i.lastFocusedChildKey === e && (i.lastFocusedChildKey = null), this.nativeMode)) return;
                                                    (r || s) && i && i.autoRestoreFocus && (this.log("removeFocusable", "Component removed: ", r ? "Leaf component" : "Container component", "Auto restoring focus to: ", n), this.setFocusDebounced(n));
                                                }
                                            }),
                                            (t.prototype.getNodeLayoutByFocusKey = function (t) {
                                                var e = this.focusableComponents[t];
                                                return e ? (this.updateLayout(e.focusKey), e.layout) : null;
                                            }),
                                            (t.prototype.setCurrentFocusedKey = function (t, e) {
                                                if (this.isFocusableComponent(this.focusKey) && t !== this.focusKey) {
                                                    var o = this.focusableComponents[this.focusKey];
                                                    o.onUpdateFocus(!1), o.onBlur(this.getNodeLayoutByFocusKey(this.focusKey), e), this.log("setCurrentFocusedKey", "onBlur", o);
                                                }
                                                if (((this.focusKey = t), this.isFocusableComponent(this.focusKey))) {
                                                    var n = this.focusableComponents[this.focusKey];
                                                    this.shouldFocusDOMNode && n.node && n.node.focus(), n.onUpdateFocus(!0), n.onFocus(this.getNodeLayoutByFocusKey(this.focusKey), e), this.log("setCurrentFocusedKey", "onFocus", n);
                                                }
                                            }),
                                            (t.prototype.updateParentsHasFocusedChild = function (t, e) {
                                                for (var o = this, n = [], s = this.focusableComponents[t]; s; ) {
                                                    var i = s.parentFocusKey,
                                                        r = this.focusableComponents[i];
                                                    if (r) {
                                                        var a = r.focusKey;
                                                        n.push(a);
                                                    }
                                                    s = r;
                                                }
                                                var u = (0, l.default)(this.parentsHavingFocusedChild, n),
                                                    c = (0, l.default)(n, this.parentsHavingFocusedChild);
                                                (0, p.default)(u, function (t) {
                                                    var n = o.focusableComponents[t];
                                                    n && n.trackChildren && n.onUpdateHasFocusedChild(!1), o.onIntermediateNodeBecameBlurred(t, e);
                                                }),
                                                    (0, p.default)(c, function (t) {
                                                        var n = o.focusableComponents[t];
                                                        n && n.trackChildren && n.onUpdateHasFocusedChild(!0), o.onIntermediateNodeBecameFocused(t, e);
                                                    }),
                                                    (this.parentsHavingFocusedChild = n);
                                            }),
                                            (t.prototype.updateParentsLastFocusedChild = function (t) {
                                                for (var e = this.focusableComponents[t]; e; ) {
                                                    var o = e.parentFocusKey,
                                                        n = this.focusableComponents[o];
                                                    n && this.saveLastFocusedChildKey(n, e.focusKey), (e = n);
                                                }
                                            }),
                                            (t.prototype.getKeyMap = function () {
                                                return this.keyMap;
                                            }),
                                            (t.prototype.setKeyMap = function (t) {
                                                this.keyMap = s(
                                                    s({}, this.getKeyMap()),
                                                    (function (t) {
                                                        var e = {};
                                                        return (
                                                            Object.entries(t).forEach(function (t) {
                                                                var o = t[0],
                                                                    n = t[1];
                                                                e[o] = Array.isArray(n) ? n : [n];
                                                            }),
                                                            e
                                                        );
                                                    })(t),
                                                );
                                            }),
                                            (t.prototype.isFocusableComponent = function (t) {
                                                return !!this.focusableComponents[t];
                                            }),
                                            (t.prototype.isParticipatingFocusableComponent = function (t) {
                                                return this.isFocusableComponent(t) && this.focusableComponents[t].focusable;
                                            }),
                                            (t.prototype.onIntermediateNodeBecameFocused = function (t, e) {
                                                this.isParticipatingFocusableComponent(t) && this.focusableComponents[t].onFocus(this.getNodeLayoutByFocusKey(t), e);
                                            }),
                                            (t.prototype.onIntermediateNodeBecameBlurred = function (t, e) {
                                                this.isParticipatingFocusableComponent(t) && this.focusableComponents[t].onBlur(this.getNodeLayoutByFocusKey(t), e);
                                            }),
                                            (t.prototype.pause = function () {
                                                this.paused = !0;
                                            }),
                                            (t.prototype.resume = function () {
                                                this.paused = !1;
                                            }),
                                            (t.prototype.setFocus = function (t, o) {
                                                if ((void 0 === o && (o = {}), this.setFocusDebounced.cancel(), this.enabled && !this.nativeMode)) {
                                                    this.log("setFocus", "focusKey", t), (t && t !== e.ROOT_FOCUS_KEY) || (t = this.getForcedFocusKey());
                                                    var n = this.getNextFocusKey(t);
                                                    this.log("setFocus", "newFocusKey", n), this.setCurrentFocusedKey(n, o), this.updateParentsHasFocusedChild(n, o), this.updateParentsLastFocusedChild(n);
                                                }
                                            }),
                                            (t.prototype.updateAllLayouts = function () {
                                                var t = this;
                                                this.enabled &&
                                                    !this.nativeMode &&
                                                    (0, y.default)(this.focusableComponents, function (e, o) {
                                                        t.updateLayout(o);
                                                    });
                                            }),
                                            (t.prototype.updateLayout = function (t) {
                                                var e = this.focusableComponents[t];
                                                if (e && !this.nativeMode && !e.layoutUpdated) {
                                                    var o = e.node,
                                                        n = this.useGetBoundingClientRect ? (0, F.getBoundingClientRect)(o) : (0, F.default)(o);
                                                    e.layout = s(s({}, n), { node: o });
                                                }
                                            }),
                                            (t.prototype.updateFocusable = function (t, e) {
                                                var o = e.node,
                                                    n = e.preferredChildFocusKey,
                                                    s = e.focusable,
                                                    i = e.isFocusBoundary,
                                                    r = e.focusBoundaryDirections,
                                                    a = e.onEnterPress,
                                                    u = e.onEnterRelease,
                                                    c = e.onArrowPress,
                                                    l = e.onFocus,
                                                    d = e.onBlur;
                                                if (!this.nativeMode) {
                                                    var f = this.focusableComponents[t];
                                                    f && ((f.preferredChildFocusKey = n), (f.focusable = s), (f.isFocusBoundary = i), (f.focusBoundaryDirections = r), (f.onEnterPress = a), (f.onEnterRelease = u), (f.onArrowPress = c), (f.onFocus = l), (f.onBlur = d), o && (f.node = o));
                                                }
                                            }),
                                            (t.prototype.isNativeMode = function () {
                                                return this.nativeMode;
                                            }),
                                            (t.prototype.doesFocusableExist = function (t) {
                                                return !!this.focusableComponents[t];
                                            }),
                                            t
                                        );
                                    })();
                                (e.SpatialNavigation = new L()), (e.init = e.SpatialNavigation.init), (e.setThrottle = e.SpatialNavigation.setThrottle), (e.destroy = e.SpatialNavigation.destroy), (e.setKeyMap = e.SpatialNavigation.setKeyMap), (e.setFocus = e.SpatialNavigation.setFocus), (e.navigateByDirection = e.SpatialNavigation.navigateByDirection), (e.pause = e.SpatialNavigation.pause), (e.resume = e.SpatialNavigation.resume), (e.updateAllLayouts = e.SpatialNavigation.updateAllLayouts), (e.getCurrentFocusKey = e.SpatialNavigation.getCurrentFocusKey), (e.doesFocusableExist = e.SpatialNavigation.doesFocusableExist);
                            },
                            35: function (t, e, o) {
                                var n =
                                    (this && this.__importDefault) ||
                                    function (t) {
                                        return t && t.__esModule ? t : { default: t };
                                    };
                                Object.defineProperty(e, "__esModule", { value: !0 });
                                var s = n(o(119)),
                                    i = "undefined" != typeof window && window.document,
                                    r = i ? window.innerWidth : 0,
                                    a = i ? window.innerHeight : 0,
                                    u = (function () {
                                        function t(e) {
                                            i && ((this.debugCtx = t.createCanvas("sn-debug", "1010", e)), (this.layoutsCtx = t.createCanvas("sn-layouts", "1000", e)), (this.writingDirection = e));
                                        }
                                        return (
                                            (t.createCanvas = function (t, e, o) {
                                                var n = document.querySelector("#".concat(t)) || document.createElement("canvas");
                                                n.setAttribute("id", t), n.setAttribute("dir", o === s.default.LTR ? "ltr" : "rtl");
                                                var i = n.getContext("2d");
                                                return (n.style.zIndex = e), (n.style.position = "fixed"), (n.style.top = "0"), (n.style.left = "0"), document.body.appendChild(n), (n.width = r), (n.height = a), i;
                                            }),
                                            (t.prototype.clear = function () {
                                                i && this.debugCtx.clearRect(0, 0, r, a);
                                            }),
                                            (t.prototype.clearLayouts = function () {
                                                i && this.layoutsCtx.clearRect(0, 0, r, a);
                                            }),
                                            (t.prototype.drawLayout = function (t, e, o) {
                                                if (i) {
                                                    (this.layoutsCtx.strokeStyle = "green"), this.layoutsCtx.strokeRect(t.left, t.top, t.width, t.height), (this.layoutsCtx.font = "8px monospace"), (this.layoutsCtx.fillStyle = "red");
                                                    var n = this.writingDirection === s.default.LTR ? "left" : "right",
                                                        r = t[n];
                                                    this.layoutsCtx.fillText(e, r, t.top + 10), this.layoutsCtx.fillText(o, r, t.top + 25), this.layoutsCtx.fillText("".concat(n, ": ").concat(r), r, t.top + 40), this.layoutsCtx.fillText("top: ".concat(t.top), r, t.top + 55);
                                                }
                                            }),
                                            (t.prototype.drawPoint = function (t, e, o, n) {
                                                void 0 === o && (o = "blue"), void 0 === n && (n = 10), i && ((this.debugCtx.strokeStyle = o), (this.debugCtx.lineWidth = 3), this.debugCtx.strokeRect(t - n / 2, e - n / 2, n, n));
                                            }),
                                            t
                                        );
                                    })();
                                e.default = u;
                            },
                            119: function (t, e) {
                                var o;
                                Object.defineProperty(e, "__esModule", { value: !0 }),
                                    (function (t) {
                                        (t[(t.LTR = 0)] = "LTR"), (t[(t.RTL = 1)] = "RTL");
                                    })(o || (o = {})),
                                    (e.default = o);
                            },
                            607: function (t, e, o) {
                                var n =
                                        (this && this.__createBinding) ||
                                        (Object.create
                                            ? function (t, e, o, n) {
                                                  void 0 === n && (n = o);
                                                  var s = Object.getOwnPropertyDescriptor(e, o);
                                                  (s && !("get" in s ? !e.__esModule : s.writable || s.configurable)) ||
                                                      (s = {
                                                          enumerable: !0,
                                                          get: function () {
                                                              return e[o];
                                                          },
                                                      }),
                                                      Object.defineProperty(t, n, s);
                                              }
                                            : function (t, e, o, n) {
                                                  void 0 === n && (n = o), (t[n] = e[o]);
                                              }),
                                    s =
                                        (this && this.__exportStar) ||
                                        function (t, e) {
                                            for (var o in t) "default" === o || Object.prototype.hasOwnProperty.call(e, o) || n(e, t, o);
                                        };
                                Object.defineProperty(e, "__esModule", { value: !0 }), s(o(79), e), s(o(445), e), s(o(654), e);
                            },
                            964: function (t, e) {
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.getBoundingClientRect = void 0);
                                var o = function (t) {
                                    for (var e = t.offsetParent, o = t.offsetHeight, n = t.offsetWidth, s = t.offsetLeft, i = t.offsetTop; e && 1 === e.nodeType; ) (s += e.offsetLeft - e.scrollLeft), (i += e.offsetTop - e.scrollTop), (e = e.offsetParent);
                                    return { height: o, left: s, top: i, width: n };
                                };
                                (e.default = function (t) {
                                    var e = t && t.parentElement;
                                    if (t && e) {
                                        var n = o(e),
                                            s = o(t),
                                            i = s.height,
                                            r = s.left,
                                            a = s.top,
                                            u = s.width;
                                        return {
                                            x: r - n.left,
                                            y: a - n.top,
                                            width: u,
                                            height: i,
                                            left: r,
                                            top: a,
                                            get right() {
                                                return this.left + this.width;
                                            },
                                            get bottom() {
                                                return this.top + this.height;
                                            },
                                        };
                                    }
                                    return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
                                }),
                                    (e.getBoundingClientRect = function (t) {
                                        if (t && t.getBoundingClientRect) {
                                            var e = t.getBoundingClientRect();
                                            return {
                                                x: e.x,
                                                y: e.y,
                                                width: e.width,
                                                height: e.height,
                                                left: e.left,
                                                top: e.top,
                                                get right() {
                                                    return this.left + this.width;
                                                },
                                                get bottom() {
                                                    return this.top + this.height;
                                                },
                                            };
                                        }
                                        return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
                                    });
                            },
                            445: function (t, e, o) {
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.useFocusContext = e.FocusContext = void 0);
                                var n = o(156),
                                    s = o(654);
                                (e.FocusContext = (0, n.createContext)(s.ROOT_FOCUS_KEY)),
                                    (e.FocusContext.displayName = "FocusContext"),
                                    (e.useFocusContext = function () {
                                        return (0, n.useContext)(e.FocusContext);
                                    });
                            },
                            79: function (t, e, o) {
                                var n =
                                    (this && this.__importDefault) ||
                                    function (t) {
                                        return t && t.__esModule ? t : { default: t };
                                    };
                                Object.defineProperty(e, "__esModule", { value: !0 }), (e.useFocusable = void 0);
                                var s = o(156),
                                    i = n(o(604)),
                                    r = n(o(461)),
                                    a = o(654),
                                    u = o(445);
                                e.useFocusable = function (t) {
                                    var e = void 0 === t ? {} : t,
                                        o = e.focusable,
                                        n = void 0 === o || o,
                                        c = e.saveLastFocusedChild,
                                        l = void 0 === c || c,
                                        d = e.trackChildren,
                                        f = void 0 !== d && d,
                                        h = e.autoRestoreFocus,
                                        p = void 0 === h || h,
                                        y = e.forceFocus,
                                        v = void 0 !== y && y,
                                        g = e.isFocusBoundary,
                                        b = void 0 !== g && g,
                                        C = e.focusBoundaryDirections,
                                        F = e.focusKey,
                                        m = e.preferredChildFocusKey,
                                        x = e.onEnterPress,
                                        K = void 0 === x ? i.default : x,
                                        w = e.onEnterRelease,
                                        D = void 0 === w ? i.default : w,
                                        E = e.onArrowPress,
                                        P =
                                            void 0 === E
                                                ? function () {
                                                      return !0;
                                                  }
                                                : E,
                                        L = e.onFocus,
                                        M = void 0 === L ? i.default : L,
                                        N = e.onBlur,
                                        T = void 0 === N ? i.default : N,
                                        R = e.extraProps,
                                        _ = (0, s.useCallback)(
                                            function (t) {
                                                K(R, t);
                                            },
                                            [K, R],
                                        ),
                                        O = (0, s.useCallback)(
                                            function () {
                                                D(R);
                                            },
                                            [D, R],
                                        ),
                                        B = (0, s.useCallback)(
                                            function (t, e) {
                                                return P(t, R, e);
                                            },
                                            [R, P],
                                        ),
                                        k = (0, s.useCallback)(
                                            function (t, e) {
                                                M(t, R, e);
                                            },
                                            [R, M],
                                        ),
                                        S = (0, s.useCallback)(
                                            function (t, e) {
                                                T(t, R, e);
                                            },
                                            [R, T],
                                        ),
                                        A = (0, s.useRef)(null),
                                        U = (0, s.useState)(!1),
                                        j = U[0],
                                        H = U[1],
                                        I = (0, s.useState)(!1),
                                        Z = I[0],
                                        Y = I[1],
                                        W = (0, u.useFocusContext)(),
                                        G = (0, s.useMemo)(
                                            function () {
                                                return F || (0, r.default)("sn:focusable-item-");
                                            },
                                            [F],
                                        ),
                                        $ = (0, s.useCallback)(
                                            function (t) {
                                                void 0 === t && (t = {}), a.SpatialNavigation.setFocus(G, t);
                                            },
                                            [G],
                                        );
                                    return (
                                        (0, s.useEffect)(function () {
                                            var t = A.current;
                                            return (
                                                a.SpatialNavigation.addFocusable({
                                                    focusKey: G,
                                                    node: t,
                                                    parentFocusKey: W,
                                                    preferredChildFocusKey: m,
                                                    onEnterPress: _,
                                                    onEnterRelease: O,
                                                    onArrowPress: B,
                                                    onFocus: k,
                                                    onBlur: S,
                                                    onUpdateFocus: function (t) {
                                                        return void 0 === t && (t = !1), H(t);
                                                    },
                                                    onUpdateHasFocusedChild: function (t) {
                                                        return void 0 === t && (t = !1), Y(t);
                                                    },
                                                    saveLastFocusedChild: l,
                                                    trackChildren: f,
                                                    isFocusBoundary: b,
                                                    focusBoundaryDirections: C,
                                                    autoRestoreFocus: p,
                                                    forceFocus: v,
                                                    focusable: n,
                                                }),
                                                function () {
                                                    a.SpatialNavigation.removeFocusable({ focusKey: G });
                                                }
                                            );
                                        }, []),
                                        (0, s.useEffect)(
                                            function () {
                                                var t = A.current;
                                                a.SpatialNavigation.updateFocusable(G, { node: t, preferredChildFocusKey: m, focusable: n, isFocusBoundary: b, focusBoundaryDirections: C, onEnterPress: _, onEnterRelease: O, onArrowPress: B, onFocus: k, onBlur: S });
                                            },
                                            [G, m, n, b, C, _, O, B, k, S],
                                        ),
                                        { ref: A, focusSelf: $, focused: j, hasFocusedChild: Z, focusKey: G }
                                    );
                                };
                            },
                            150: function (t) {
                                t.exports = n;
                            },
                            117: function (t) {
                                t.exports = s;
                            },
                            747: function (t) {
                                t.exports = i;
                            },
                            23: function (t) {
                                t.exports = r;
                            },
                            842: function (t) {
                                t.exports = a;
                            },
                            682: function (t) {
                                t.exports = u;
                            },
                            784: function (t) {
                                t.exports = c;
                            },
                            604: function (t) {
                                t.exports = l;
                            },
                            432: function (t) {
                                t.exports = d;
                            },
                            67: function (t) {
                                t.exports = f;
                            },
                            461: function (t) {
                                t.exports = h;
                            },
                            156: function (t) {
                                t.exports = p;
                            },
                        },
                        e = {};
                    return (function o(n) {
                        var s = e[n];
                        if (void 0 !== s) return s.exports;
                        var i = (e[n] = { exports: {} });
                        return t[n].call(i.exports, i, i.exports, o), i.exports;
                    })(607);
                })());
        },
        978053: (t, e, o) => {
            "use strict";
            o.d(e, { default: () => y });
            var n = o(111677),
                s = o.n(n);
            const i = s().e3098e07,
                r = s().fea16a51,
                a = s().a4f2d94d,
                u = s().hf9bc787,
                c = s().efcd5885,
                l = s().c37228b5,
                d = 2592e3,
                f = 604800,
                h = 86400,
                p = 3600,
                y = {
                    formatTimeSinceDate: (t, e) => {
                        const o = ((e || new Date()).getTime() - t.getTime()) / 1e3;
                        if (o >= 31104e3) {
                            const t = Math.max(1, Math.round(o / 31536e3));
                            return l({ years: t });
                        }
                        if (o >= d) {
                            const t = Math.max(1, Math.floor(o / d));
                            return c({ months: t });
                        }
                        if (o >= 561600) {
                            const t = Math.max(1, Math.round(o / f));
                            return u({ weeks: t });
                        }
                        if (o >= 84600) {
                            const t = Math.max(1, Math.round(o / h));
                            return a({ days: t });
                        }
                        if (o >= 3570) {
                            const t = Math.max(1, Math.round(o / p));
                            return r({ hours: t });
                        }
                        {
                            const t = Math.max(1, Math.round(o / 60));
                            return i({ minutes: t });
                        }
                    },
                    formatWeekRange: (t) => {
                        const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())),
                            o = e.getUTCDay(),
                            n = new Date(e);
                        n.setUTCDate(n.getUTCDate() - o);
                        const s = new Date(n);
                        s.setUTCDate(s.getUTCDate() + 6);
                        const i = new Date(Date.UTC(n.getUTCFullYear(), 0, 4)),
                            r = Math.floor((n.getTime() - i.getTime()) / 6048e5 + 1),
                            a = new Date(),
                            u = s > a ? a : s,
                            c = `${n.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${u.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [n.getUTCFullYear(), r, c];
                    },
                };
        },
        58399: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, { default: () => c });
            var n = o(202784),
                s = o(890601),
                i = o(783427),
                r = o(717683),
                a = o(347101);
            const u = (t = {}) => {
                const e = n.useContext(r.Z),
                    { direction: o } = (0, i.Z)();
                return (0, s.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [a.Z.root, t.style, e && a.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            u.metadata = { width: 24, height: 24 };
            const c = u;
        },
        730895: (t, e, o) => {
            "use strict";
            var n = o(821176);
            t.exports = function () {
                var t = n(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        149432: (t) => {
            t.exports = function (t, e, o) {
                switch (o.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, o[0]);
                    case 2:
                        return t.call(e, o[0], o[1]);
                    case 3:
                        return t.call(e, o[0], o[1], o[2]);
                }
                return t.apply(e, o);
            };
        },
        172517: (t) => {
            t.exports = function (t, e) {
                for (var o = -1, n = null == t ? 0 : t.length; ++o < n && !1 !== e(t[o], o, t); );
                return t;
            };
        },
        585246: (t, e, o) => {
            var n = o(645386),
                s = o(238333),
                i = o(834893),
                r = o(150343),
                a = o(947826),
                u = o(759950);
            t.exports = function (t, e, o, c) {
                var l = -1,
                    d = s,
                    f = !0,
                    h = t.length,
                    p = [],
                    y = e.length;
                if (!h) return p;
                o && (e = r(e, a(o))), c ? ((d = i), (f = !1)) : e.length >= 200 && ((d = u), (f = !1), (e = new n(e)));
                t: for (; ++l < h; ) {
                    var v = t[l],
                        g = null == o ? v : o(v);
                    if (((v = c || 0 !== v ? v : 0), f && g == g)) {
                        for (var b = y; b--; ) if (e[b] === g) continue t;
                        p.push(v);
                    } else d(e, g, c) || p.push(v);
                }
                return p;
            };
        },
        224303: (t, e, o) => {
            var n = o(626548),
                s = o(692019)(n);
            t.exports = s;
        },
        298043: (t, e, o) => {
            var n = o(224303);
            t.exports = function (t, e) {
                var o = [];
                return (
                    n(t, function (t, n, s) {
                        e(t, n, s) && o.push(t);
                    }),
                    o
                );
            };
        },
        944122: (t) => {
            t.exports = function (t, e, o) {
                var n;
                return (
                    o(t, function (t, o, s) {
                        if (e(t, o, s)) return (n = o), !1;
                    }),
                    n
                );
            };
        },
        62034: (t, e, o) => {
            var n = o(265067),
                s = o(295882);
            t.exports = function t(e, o, i, r, a) {
                var u = -1,
                    c = e.length;
                for (i || (i = s), a || (a = []); ++u < c; ) {
                    var l = e[u];
                    o > 0 && i(l) ? (o > 1 ? t(l, o - 1, i, r, a) : n(a, l)) : r || (a[a.length] = l);
                }
                return a;
            };
        },
        915308: (t, e, o) => {
            var n = o(355463)();
            t.exports = n;
        },
        626548: (t, e, o) => {
            var n = o(915308),
                s = o(690249);
            t.exports = function (t, e) {
                return t && n(t, e, s);
            };
        },
        393401: (t, e, o) => {
            var n = o(224303),
                s = o(867878);
            t.exports = function (t, e) {
                var o = -1,
                    i = s(t) ? Array(t.length) : [];
                return (
                    n(t, function (t, n, s) {
                        i[++o] = e(t, n, s);
                    }),
                    i
                );
            };
        },
        923813: (t, e, o) => {
            var n = o(150343),
                s = o(513324),
                i = o(668286),
                r = o(393401),
                a = o(327095),
                u = o(947826),
                c = o(918477),
                l = o(223059),
                d = o(986152);
            t.exports = function (t, e, o) {
                e = e.length
                    ? n(e, function (t) {
                          return d(t)
                              ? function (e) {
                                    return s(e, 1 === t.length ? t[0] : t);
                                }
                              : t;
                      })
                    : [l];
                var f = -1;
                e = n(e, u(i));
                var h = r(t, function (t, o, s) {
                    return {
                        criteria: n(e, function (e) {
                            return e(t);
                        }),
                        index: ++f,
                        value: t,
                    };
                });
                return a(h, function (t, e) {
                    return c(t, e, o);
                });
            };
        },
        636060: (t, e, o) => {
            var n = o(223059),
                s = o(43114),
                i = o(475251);
            t.exports = function (t, e) {
                return i(s(t, e, n), t + "");
            };
        },
        86532: (t, e, o) => {
            var n = o(86874),
                s = o(883043),
                i = o(223059),
                r = s
                    ? function (t, e) {
                          return s(t, "toString", { configurable: !0, enumerable: !1, value: n(e), writable: !0 });
                      }
                    : i;
            t.exports = r;
        },
        327095: (t) => {
            t.exports = function (t, e) {
                var o = t.length;
                for (t.sort(e); o--; ) t[o] = t[o].value;
                return t;
            };
        },
        251704: (t, e, o) => {
            var n = o(252153),
                s = /^\s+/;
            t.exports = function (t) {
                return t ? t.slice(0, n(t) + 1).replace(s, "") : t;
            };
        },
        989419: (t, e, o) => {
            var n = o(223059);
            t.exports = function (t) {
                return "function" == typeof t ? t : n;
            };
        },
        827520: (t, e, o) => {
            var n = o(4795);
            t.exports = function (t, e) {
                if (t !== e) {
                    var o = void 0 !== t,
                        s = null === t,
                        i = t == t,
                        r = n(t),
                        a = void 0 !== e,
                        u = null === e,
                        c = e == e,
                        l = n(e);
                    if ((!u && !l && !r && t > e) || (r && a && c && !u && !l) || (s && a && c) || (!o && c) || !i) return 1;
                    if ((!s && !r && !l && t < e) || (l && o && i && !s && !r) || (u && o && i) || (!a && i) || !c) return -1;
                }
                return 0;
            };
        },
        918477: (t, e, o) => {
            var n = o(827520);
            t.exports = function (t, e, o) {
                for (var s = -1, i = t.criteria, r = e.criteria, a = i.length, u = o.length; ++s < a; ) {
                    var c = n(i[s], r[s]);
                    if (c) return s >= u ? c : c * ("desc" == o[s] ? -1 : 1);
                }
                return t.index - e.index;
            };
        },
        692019: (t, e, o) => {
            var n = o(867878);
            t.exports = function (t, e) {
                return function (o, s) {
                    if (null == o) return o;
                    if (!n(o)) return t(o, s);
                    for (var i = o.length, r = e ? i : -1, a = Object(o); (e ? r-- : ++r < i) && !1 !== s(a[r], r, a); );
                    return o;
                };
            };
        },
        355463: (t) => {
            t.exports = function (t) {
                return function (e, o, n) {
                    for (var s = -1, i = Object(e), r = n(e), a = r.length; a--; ) {
                        var u = r[t ? a : ++s];
                        if (!1 === o(i[u], u, i)) break;
                    }
                    return e;
                };
            };
        },
        883043: (t, e, o) => {
            var n = o(638761),
                s = (function () {
                    try {
                        var t = n(Object, "defineProperty");
                        return t({}, "", {}), t;
                    } catch (t) {}
                })();
            t.exports = s;
        },
        295882: (t, e, o) => {
            var n = o(750857),
                s = o(379631),
                i = o(986152),
                r = n ? n.isConcatSpreadable : void 0;
            t.exports = function (t) {
                return i(t) || s(t) || !!(r && t && t[r]);
            };
        },
        182406: (t, e, o) => {
            var n = o(641225),
                s = o(867878),
                i = o(239045),
                r = o(429259);
            t.exports = function (t, e, o) {
                if (!r(o)) return !1;
                var a = typeof e;
                return !!("number" == a ? s(o) && i(e, o.length) : "string" == a && e in o) && n(o[e], t);
            };
        },
        43114: (t, e, o) => {
            var n = o(149432),
                s = Math.max;
            t.exports = function (t, e, o) {
                return (
                    (e = s(void 0 === e ? t.length - 1 : e, 0)),
                    function () {
                        for (var i = arguments, r = -1, a = s(i.length - e, 0), u = Array(a); ++r < a; ) u[r] = i[e + r];
                        r = -1;
                        for (var c = Array(e + 1); ++r < e; ) c[r] = i[r];
                        return (c[e] = o(u)), n(t, this, c);
                    }
                );
            };
        },
        475251: (t, e, o) => {
            var n = o(86532),
                s = o(197787)(n);
            t.exports = s;
        },
        197787: (t) => {
            var e = Date.now;
            t.exports = function (t) {
                var o = 0,
                    n = 0;
                return function () {
                    var s = e(),
                        i = 16 - (s - n);
                    if (((n = s), i > 0)) {
                        if (++o >= 800) return arguments[0];
                    } else o = 0;
                    return t.apply(void 0, arguments);
                };
            };
        },
        252153: (t) => {
            var e = /\s/;
            t.exports = function (t) {
                for (var o = t.length; o-- && e.test(t.charAt(o)); );
                return o;
            };
        },
        86874: (t) => {
            t.exports = function (t) {
                return function () {
                    return t;
                };
            };
        },
        254073: (t, e, o) => {
            var n = o(429259),
                s = o(161100),
                i = o(707642),
                r = Math.max,
                a = Math.min;
            t.exports = function (t, e, o) {
                var u,
                    c,
                    l,
                    d,
                    f,
                    h,
                    p = 0,
                    y = !1,
                    v = !1,
                    g = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                function b(e) {
                    var o = u,
                        n = c;
                    return (u = c = void 0), (p = e), (d = t.apply(n, o));
                }
                function C(t) {
                    var o = t - h;
                    return void 0 === h || o >= e || o < 0 || (v && t - p >= l);
                }
                function F() {
                    var t = s();
                    if (C(t)) return m(t);
                    f = setTimeout(
                        F,
                        (function (t) {
                            var o = e - (t - h);
                            return v ? a(o, l - (t - p)) : o;
                        })(t),
                    );
                }
                function m(t) {
                    return (f = void 0), g && u ? b(t) : ((u = c = void 0), d);
                }
                function x() {
                    var t = s(),
                        o = C(t);
                    if (((u = arguments), (c = this), (h = t), o)) {
                        if (void 0 === f)
                            return (function (t) {
                                return (p = t), (f = setTimeout(F, e)), y ? b(t) : d;
                            })(h);
                        if (v) return clearTimeout(f), (f = setTimeout(F, e)), b(h);
                    }
                    return void 0 === f && (f = setTimeout(F, e)), d;
                }
                return (
                    (e = i(e) || 0),
                    n(o) && ((y = !!o.leading), (l = (v = "maxWait" in o) ? r(i(o.maxWait) || 0, e) : l), (g = "trailing" in o ? !!o.trailing : g)),
                    (x.cancel = function () {
                        void 0 !== f && clearTimeout(f), (p = 0), (u = h = c = f = void 0);
                    }),
                    (x.flush = function () {
                        return void 0 === f ? d : m(s());
                    }),
                    x
                );
            };
        },
        317335: (t, e, o) => {
            var n = o(585246),
                s = o(62034),
                i = o(636060),
                r = o(93746),
                a = i(function (t, e) {
                    return r(t) ? n(t, s(e, 1, r, !0)) : [];
                });
            t.exports = a;
        },
        190882: (t, e, o) => {
            var n = o(867552),
                s = o(298043),
                i = o(668286),
                r = o(986152);
            t.exports = function (t, e) {
                return (r(t) ? n : s)(t, i(e, 3));
            };
        },
        609439: (t, e, o) => {
            var n = o(944122),
                s = o(626548),
                i = o(668286);
            t.exports = function (t, e) {
                return n(t, i(e, 3), s);
            };
        },
        753237: (t, e, o) => {
            t.exports = o(31092);
        },
        859756: (t, e, o) => {
            var n = o(172517),
                s = o(224303),
                i = o(989419),
                r = o(986152);
            t.exports = function (t, e) {
                return (r(t) ? n : s)(t, i(e));
            };
        },
        115253: (t, e, o) => {
            var n = o(626548),
                s = o(989419);
            t.exports = function (t, e) {
                return t && n(t, s(e));
            };
        },
        31092: (t) => {
            t.exports = function (t) {
                return t && t.length ? t[0] : void 0;
            };
        },
        93746: (t, e, o) => {
            var n = o(867878),
                s = o(315125);
            t.exports = function (t) {
                return s(t) && n(t);
            };
        },
        161100: (t, e, o) => {
            var n = o(137772);
            t.exports = function () {
                return n.Date.now();
            };
        },
        900829: (t, e, o) => {
            var n = o(62034),
                s = o(923813),
                i = o(636060),
                r = o(182406),
                a = i(function (t, e) {
                    if (null == t) return [];
                    var o = e.length;
                    return o > 1 && r(t, e[0], e[1]) ? (e = []) : o > 2 && r(e[0], e[1], e[2]) && (e = [e[0]]), s(t, n(e, 1), []);
                });
            t.exports = a;
        },
        912436: (t, e, o) => {
            var n = o(254073),
                s = o(429259);
            t.exports = function (t, e, o) {
                var i = !0,
                    r = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return s(o) && ((i = "leading" in o ? !!o.leading : i), (r = "trailing" in o ? !!o.trailing : r)), n(t, e, { leading: i, maxWait: e, trailing: r });
            };
        },
        707642: (t, e, o) => {
            var n = o(251704),
                s = o(429259),
                i = o(4795),
                r = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt;
            t.exports = function (t) {
                if ("number" == typeof t) return t;
                if (i(t)) return NaN;
                if (s(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = s(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var o = a.test(t);
                return o || u.test(t) ? c(t.slice(2), o ? 2 : 8) : r.test(t) ? NaN : +t;
            };
        },
        774930: (t, e, o) => {
            var n = o(466188),
                s = 0;
            t.exports = function (t) {
                var e = ++s;
                return n(t) + e;
            };
        },
        706307: (t, e, o) => {
            "use strict";
            o.d(e, { Z: () => y });
            var n = o(807896),
                s = o(231461),
                i = o(202784),
                r = o(752778),
                a = o(748803),
                u = o(297689),
                c = o(325686),
                l = o(180612),
                d = ["activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"];
            function f(t, e) {
                (0, l.O)("TouchableOpacity", "TouchableOpacity is deprecated. Please use Pressable.");
                var o = t.activeOpacity,
                    u = t.delayPressIn,
                    f = t.delayPressOut,
                    p = t.delayLongPress,
                    y = t.disabled,
                    v = t.focusable,
                    g = t.onLongPress,
                    b = t.onPress,
                    C = t.onPressIn,
                    F = t.onPressOut,
                    m = t.rejectResponderTermination,
                    x = t.style,
                    K = (0, s.Z)(t, d),
                    w = (0, i.useRef)(null),
                    D = (0, r.Z)(e, w),
                    E = (0, i.useState)("0s"),
                    P = E[0],
                    L = E[1],
                    M = (0, i.useState)(null),
                    N = M[0],
                    T = M[1],
                    R = (0, i.useCallback)(
                        (t, e) => {
                            T(t), L(e ? e / 1e3 + "s" : "0s");
                        },
                        [T, L],
                    ),
                    _ = (0, i.useCallback)(
                        (t) => {
                            R(null != o ? o : 0.2, t);
                        },
                        [o, R],
                    ),
                    O = (0, i.useCallback)(
                        (t) => {
                            R(null, t);
                        },
                        [R],
                    ),
                    B = (0, i.useMemo)(
                        () => ({
                            cancelable: !m,
                            disabled: y,
                            delayLongPress: p,
                            delayPressStart: u,
                            delayPressEnd: f,
                            onLongPress: g,
                            onPress: b,
                            onPressStart(t) {
                                var e = null != t.dispatchConfig ? "onResponderGrant" === t.dispatchConfig.registrationName : "keydown" === t.type;
                                _(e ? 0 : 150), null != C && C(t);
                            },
                            onPressEnd(t) {
                                O(250), null != F && F(t);
                            },
                        }),
                        [p, u, f, y, g, b, C, F, m, _, O],
                    ),
                    k = (0, a.Z)(w, B);
                return i.createElement(c.Z, (0, n.Z)({}, K, k, { accessibilityDisabled: y, focusable: !y && !1 !== v, pointerEvents: y ? "box-none" : void 0, ref: D, style: [h.root, !y && h.actionable, x, null != N && { opacity: N }, { transitionDuration: P }] }));
            }
            var h = u.Z.create({ root: { transitionProperty: "opacity", transitionDuration: "0.15s", userSelect: "none" }, actionable: { cursor: "pointer", touchAction: "manipulation" } }),
                p = i.memo(i.forwardRef(f));
            p.displayName = "TouchableOpacity";
            const y = p;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TV~bundle.Account-6107ac1a.1d17d53a.js.map
