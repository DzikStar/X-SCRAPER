window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-de539588"],
        {
            496599: (e, t, n) => {
                n.d(t, { Z: () => m });
                var r = n(535970),
                    o = n(762204),
                    a = n(219629),
                    i = n(509270),
                    u = n(469528),
                    s = n(610876),
                    l = n(214819),
                    c = n(538572),
                    d = n(270300),
                    h = n(63132),
                    p = ["Webkit"],
                    v = ["Webkit", "ms"];
                const g = { plugins: [o.Z, a.Z, i.Z, u.Z, s.Z, l.Z, c.Z, d.Z, h.Z], prefixMap: { appearance: ["Webkit", "Moz", "ms"], userSelect: ["Webkit", "Moz"], textEmphasisPosition: v, textEmphasis: v, textEmphasisStyle: v, textEmphasisColor: v, boxDecorationBreak: v, clipPath: p, maskImage: v, maskMode: v, maskRepeat: v, maskPosition: v, maskClip: v, maskOrigin: v, maskSize: v, maskComposite: v, mask: v, maskBorderSource: v, maskBorderMode: v, maskBorderSlice: v, maskBorderWidth: v, maskBorderOutset: v, maskBorderRepeat: v, maskBorder: v, maskType: v, textDecorationStyle: p, textDecorationSkip: p, textDecorationLine: p, textDecorationColor: p, filter: p, breakAfter: p, breakBefore: p, breakInside: p, columnCount: p, columnFill: p, columnGap: p, columnRule: p, columnRuleColor: p, columnRuleStyle: p, columnRuleWidth: p, columns: p, columnSpan: p, columnWidth: p, backdropFilter: p, hyphens: p, flowInto: p, flowFrom: p, regionFragment: p, textOrientation: p, tabSize: ["Moz"], fontKerning: p, textSizeAdjust: p } };
                const m = (0, r.Z)(g);
            },
            302649: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(19017).Z && void 0 !== window.requestIdleCallback,
                    o = r
                        ? window.requestIdleCallback
                        : function (e, t) {
                              return setTimeout(() => {
                                  var t = Date.now();
                                  e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
                              }, 1);
                          };
                r && window.cancelIdleCallback;
                const a = o;
            },
            908757: (e, t, n) => {
                n.d(t, { Z: () => u });
                var r = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, flex: !0, flexGrow: !0, flexOrder: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, fontWeight: !0, gridRow: !0, gridRowEnd: !0, gridRowGap: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnGap: !0, gridColumnStart: !0, lineClamp: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0, scale: !0, scaleX: !0, scaleY: !0, scaleZ: !0, shadowOpacity: !0 },
                    o = ["ms", "Moz", "O", "Webkit"];
                Object.keys(r).forEach((e) => {
                    o.forEach((t) => {
                        r[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(t, e)] = r[e];
                    });
                });
                const a = r;
                const i = function (e, t, n) {
                    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || (a.hasOwnProperty(e) && a[e]) ? ("" + t).trim() : t + "px";
                };
                const u = function (e, t) {
                    var n = e.style;
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var o = 0 === r.indexOf("--"),
                                a = i(r, t[r], o);
                            "float" === r && (r = "cssFloat"), o ? n.setProperty(r, a) : (n[r] = a);
                        }
                };
            },
            317709: (e, t, n) => {
                n.d(t, { Z: () => s });
                var r = n(156905),
                    o = n(386308),
                    a = n(19017),
                    i = "__reactLayoutHandler",
                    u = (a.Z, null);
                function s(e, t) {
                    var n =
                        (a.Z &&
                            void 0 !== window.ResizeObserver &&
                            null == u &&
                            (u = new window.ResizeObserver(function (e) {
                                e.forEach((e) => {
                                    var t = e.target,
                                        n = t[i];
                                    "function" == typeof n &&
                                        o.Z.measure(t, (t, r, o, a, i, u) => {
                                            var s = { nativeEvent: { layout: { x: t, y: r, width: o, height: a, left: i, top: u } }, timeStamp: Date.now() };
                                            Object.defineProperty(s.nativeEvent, "target", { enumerable: !0, get: () => e.target }), n(s);
                                        });
                                });
                            })),
                        u);
                    (0, r.Z)(() => {
                        var n = e.current;
                        null != n && (n[i] = t);
                    }, [e, t]),
                        (0, r.Z)(() => {
                            var t = e.current;
                            return (
                                null != t && null != n && ("function" == typeof t[i] ? n.observe(t) : n.unobserve(t)),
                                () => {
                                    null != t && null != n && n.unobserve(t);
                                }
                            );
                        }, [e, n]);
                }
            },
            435208: (e, t, n) => {
                n.d(t, { Z: () => g });
                var r = n(808094),
                    o = n(452869),
                    a = n(156905),
                    i = n(309121);
                function u(e, t) {
                    var n = (0, i.Z)(() => new Map()),
                        r = (0, i.Z)(() => (r, a) => {
                            var i = n.get(r);
                            null != i && i(), null == a && (n.delete(r), (a = () => {}));
                            var u = (0, o.O)(r, e, a, t);
                            return n.set(r, u), u;
                        });
                    return (
                        (0, a.Z)(
                            () => () => {
                                n.forEach((e) => {
                                    e();
                                }),
                                    n.clear();
                            },
                            [n],
                        ),
                        r
                    );
                }
                var s = {},
                    l = { passive: !0 },
                    c = "react-gui:hover:lock",
                    d = "react-gui:hover:unlock",
                    h = () => !("undefined" == typeof window || null == window.PointerEvent);
                function p(e, t, n) {
                    var r = document.createEvent("CustomEvent"),
                        o = n || s,
                        a = o.bubbles,
                        i = void 0 === a || a,
                        u = o.cancelable,
                        l = void 0 === u || u,
                        c = o.detail;
                    r.initCustomEvent(t, i, l, c), e.dispatchEvent(r);
                }
                function v(e) {
                    var t = e.pointerType;
                    return null != t ? t : (0, r.CH)();
                }
                function g(e, t) {
                    var n = t.contain,
                        r = t.disabled,
                        o = t.onHoverStart,
                        i = t.onHoverChange,
                        s = t.onHoverUpdate,
                        g = t.onHoverEnd,
                        m = h(),
                        f = u(m ? "pointermove" : "mousemove", l),
                        E = u(m ? "pointerenter" : "mouseenter", l),
                        S = u(m ? "pointerleave" : "mouseleave", l),
                        R = u(c, l),
                        _ = u(d, l);
                    (0, a.Z)(() => {
                        var t = e.current;
                        if (null !== t) {
                            var a = function (e) {
                                    null != g && g(e), null != i && i(!1), f(t, null), S(t, null);
                                },
                                u = function (t) {
                                    var r = e.current;
                                    null != r && "touch" !== v(t) && (n && p(r, d), a(t));
                                },
                                l = function (e) {
                                    "touch" !== v(e) && null != s && (null == e.x && (e.x = e.clientX), null == e.y && (e.y = e.clientY), s(e));
                                },
                                h = function (e) {
                                    null != o && o(e), null != i && i(!0), null != s && f(t, r ? null : l), S(t, r ? null : u);
                                };
                            E(
                                t,
                                r
                                    ? null
                                    : function (t) {
                                          var o = e.current;
                                          if (null != o && "touch" !== v(t)) {
                                              n && p(o, c), h(t);
                                              R(
                                                  o,
                                                  r
                                                      ? null
                                                      : function (e) {
                                                            e.target !== o && a(t);
                                                        },
                                              ),
                                                  _(
                                                      o,
                                                      r
                                                          ? null
                                                          : function (e) {
                                                                e.target !== o && h(t);
                                                            },
                                                  );
                                          }
                                      },
                            );
                        }
                    }, [E, f, S, R, _, n, r, o, i, s, g, e]);
                }
            },
            156905: (e, t, n) => {
                n.d(t, { Z: () => o });
                var r = n(202784);
                const o = n(19017).Z ? r.useLayoutEffect : r.useEffect;
            },
            981040: (e, t, n) => {
                n.d(t, { Iw: () => c, w1: () => l, PE: () => d });
                var r = n(202784),
                    o = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
                    a = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "far", "glk", "he", "iw", "khw", "ks", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]),
                    i = new Map();
                var u = { direction: "ltr", locale: "en-US" },
                    s = (0, r.createContext)(u);
                function l(e) {
                    return (function (e) {
                        var t = i.get(e);
                        if (t) return t;
                        var n = !1;
                        if (Intl.Locale) {
                            var r = new Intl.Locale(e).maximize().script;
                            n = o.has(r);
                        } else {
                            var u = e.split("-")[0];
                            n = a.has(u);
                        }
                        return i.set(e, n), n;
                    })(e)
                        ? "rtl"
                        : "ltr";
                }
                function c(e) {
                    var t = e.direction,
                        n = e.locale,
                        o = e.children;
                    return t || n ? r.createElement(s.Provider, { children: o, value: { direction: n ? l(n) : t, locale: n } }) : o;
                }
                function d() {
                    return (0, r.useContext)(s);
                }
            },
            752778: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(202784),
                    o = n(188212);
                function a() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return r.useMemo(() => (0, o.Z)(...t), [...t]);
                }
            },
            805719: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(386308),
                    o = n(309121);
                function a(e) {
                    e.pointerEvents, e.style;
                    return (0, o.Z)(() => (e) => {
                        null != e && ((e.measure = (t) => r.Z.measure(e, t)), (e.measureLayout = (t, n, o) => r.Z.measureLayout(e, t, o, n)), (e.measureInWindow = (t) => r.Z.measureInWindow(e, t)));
                    });
                }
            },
            748803: (e, t, n) => {
                n.d(t, { Z: () => P });
                var r = "DELAY",
                    o = "ERROR",
                    a = "LONG_PRESS_DETECTED",
                    i = "NOT_RESPONDER",
                    u = "RESPONDER_ACTIVE_LONG_PRESS_START",
                    s = "RESPONDER_ACTIVE_PRESS_START",
                    l = "RESPONDER_INACTIVE_PRESS_START",
                    c = "RESPONDER_RELEASE",
                    d = "RESPONDER_TERMINATED",
                    h = Object.freeze({ NOT_RESPONDER: { DELAY: o, RESPONDER_GRANT: l, RESPONDER_RELEASE: o, RESPONDER_TERMINATED: o, LONG_PRESS_DETECTED: o }, RESPONDER_INACTIVE_PRESS_START: { DELAY: s, RESPONDER_GRANT: o, RESPONDER_RELEASE: i, RESPONDER_TERMINATED: i, LONG_PRESS_DETECTED: o }, RESPONDER_ACTIVE_PRESS_START: { DELAY: o, RESPONDER_GRANT: o, RESPONDER_RELEASE: i, RESPONDER_TERMINATED: i, LONG_PRESS_DETECTED: u }, RESPONDER_ACTIVE_LONG_PRESS_START: { DELAY: o, RESPONDER_GRANT: o, RESPONDER_RELEASE: i, RESPONDER_TERMINATED: i, LONG_PRESS_DETECTED: u }, ERROR: { DELAY: i, RESPONDER_GRANT: l, RESPONDER_RELEASE: i, RESPONDER_TERMINATED: i, LONG_PRESS_DETECTED: i } }),
                    p = (e) => e.getAttribute("role"),
                    v = (e) => e.tagName.toLowerCase(),
                    g = (e) => e === s || e === u,
                    m = (e) => "button" === p(e),
                    f = (e) => e === l || e === s || e === u,
                    E = (e) => {
                        var t = e.key,
                            n = e.target,
                            r = " " === t || "Spacebar" === t,
                            o = "button" === v(n) || m(n);
                        return "Enter" === t || (r && o);
                    };
                class S {
                    constructor(e) {
                        (this._eventHandlers = null), (this._isPointerTouch = !1), (this._longPressDelayTimeout = null), (this._longPressDispatched = !1), (this._pressDelayTimeout = null), (this._pressOutDelayTimeout = null), (this._touchState = i), (this._responderElement = null), this.configure(e);
                    }
                    configure(e) {
                        this._config = e;
                    }
                    reset() {
                        this._cancelLongPressDelayTimeout(), this._cancelPressDelayTimeout(), this._cancelPressOutDelayTimeout();
                    }
                    getEventHandlers() {
                        return null == this._eventHandlers && (this._eventHandlers = this._createEventHandlers()), this._eventHandlers;
                    }
                    _createEventHandlers() {
                        var e = (e, t) => {
                                e.persist(), this._cancelPressOutDelayTimeout(), (this._longPressDispatched = !1), (this._selectionTerminated = !1), (this._touchState = i), (this._isPointerTouch = "touchstart" === e.nativeEvent.type), this._receiveSignal("RESPONDER_GRANT", e);
                                var n = R(this._config.delayPressStart, 0, 50);
                                !1 !== t && n > 0
                                    ? (this._pressDelayTimeout = setTimeout(() => {
                                          this._receiveSignal(r, e);
                                      }, n))
                                    : this._receiveSignal(r, e);
                                var o = R(this._config.delayLongPress, 10, 450);
                                this._longPressDelayTimeout = setTimeout(() => {
                                    this._handleLongPress(e);
                                }, o + n);
                            },
                            t = (e) => {
                                this._receiveSignal(c, e);
                            },
                            n = (e) => {
                                var r = this._config.onPress,
                                    o = e.target;
                                if (this._touchState !== i && E(e)) {
                                    t(e), document.removeEventListener("keyup", n);
                                    var a = o.getAttribute("role"),
                                        u = v(o),
                                        s = "link" === a || "a" === u || "button" === u || "input" === u || "select" === u || "textarea" === u,
                                        l = this._responderElement === o;
                                    null != r && !s && l && r(e), (this._responderElement = null);
                                }
                            };
                        return {
                            onStartShouldSetResponder: (e) => {
                                var t = this._config.disabled;
                                return t && m(e.currentTarget) && e.stopPropagation(), null == t || !t;
                            },
                            onKeyDown: (t) => {
                                var r = this._config.disabled,
                                    o = t.key,
                                    a = t.target;
                                if (!r && E(t)) {
                                    this._touchState === i && (e(t, !1), (this._responderElement = a), document.addEventListener("keyup", n));
                                    var u = " " === o || "Spacebar" === o,
                                        s = p(a);
                                    u && ("button" === s || "menuitem" === s) && "button" !== v(a) && t.preventDefault(), t.stopPropagation();
                                }
                            },
                            onResponderGrant: (t) => e(t),
                            onResponderMove: (e) => {
                                null != this._config.onPressMove && this._config.onPressMove(e);
                                var t = _(e);
                                if (null != this._touchActivatePosition) {
                                    var n = this._touchActivatePosition.pageX - t.pageX,
                                        r = this._touchActivatePosition.pageY - t.pageY;
                                    Math.hypot(n, r) > 10 && this._cancelLongPressDelayTimeout();
                                }
                            },
                            onResponderRelease: (e) => t(e),
                            onResponderTerminate: (e) => {
                                "selectionchange" === e.nativeEvent.type && (this._selectionTerminated = !0), this._receiveSignal(d, e);
                            },
                            onResponderTerminationRequest: (e) => {
                                var t = this._config,
                                    n = t.cancelable,
                                    r = t.disabled,
                                    o = t.onLongPress;
                                return !(!r && null != o && this._isPointerTouch && "contextmenu" === e.nativeEvent.type) && (null == n || n);
                            },
                            onClick: (e) => {
                                var t = this._config,
                                    n = t.disabled,
                                    r = t.onPress;
                                n ? m(e.currentTarget) && e.stopPropagation() : (e.stopPropagation(), this._longPressDispatched || this._selectionTerminated ? e.preventDefault() : null != r && !1 === e.altKey && r(e));
                            },
                            onContextMenu: (e) => {
                                var t = this._config,
                                    n = t.disabled,
                                    r = t.onLongPress;
                                n ? m(e.currentTarget) && e.stopPropagation() : null != r && this._isPointerTouch && !e.defaultPrevented && (e.preventDefault(), e.stopPropagation());
                            },
                        };
                    }
                    _receiveSignal(e, t) {
                        var n = this._touchState,
                            r = null;
                        null != h[n] && (r = h[n][e]), (this._touchState === i && e === c) || null == r || r === o || (n !== r && (this._performTransitionSideEffects(n, r, e, t), (this._touchState = r)));
                    }
                    _performTransitionSideEffects(e, t, n, r) {
                        if (
                            (((e) => e === d || e === c)(n) &&
                                (setTimeout(() => {
                                    this._isPointerTouch = !1;
                                }, 0),
                                (this._touchActivatePosition = null),
                                this._cancelLongPressDelayTimeout()),
                            f(e) && n === a)
                        ) {
                            var o = this._config.onLongPress;
                            null != o && null == r.nativeEvent.key && (o(r), (this._longPressDispatched = !0));
                        }
                        var i = g(e),
                            s = g(t);
                        if ((!i && s ? this._activate(r) : i && !s && this._deactivate(r), f(e) && n === c)) {
                            var l = this._config,
                                h = l.onLongPress;
                            if (null != l.onPress) (null != h && e === u) || s || i || (this._activate(r), this._deactivate(r));
                        }
                        this._cancelPressDelayTimeout();
                    }
                    _activate(e) {
                        var t = this._config,
                            n = t.onPressChange,
                            r = t.onPressStart,
                            o = _(e);
                        (this._touchActivatePosition = { pageX: o.pageX, pageY: o.pageY }), null != r && r(e), null != n && n(!0);
                    }
                    _deactivate(e) {
                        var t = this._config,
                            n = t.onPressChange,
                            r = t.onPressEnd;
                        function o() {
                            null != r && r(e), null != n && n(!1);
                        }
                        var a = R(this._config.delayPressEnd);
                        a > 0
                            ? (this._pressOutDelayTimeout = setTimeout(() => {
                                  o();
                              }, a))
                            : o();
                    }
                    _handleLongPress(e) {
                        (this._touchState !== s && this._touchState !== u) || this._receiveSignal(a, e);
                    }
                    _cancelLongPressDelayTimeout() {
                        null != this._longPressDelayTimeout && (clearTimeout(this._longPressDelayTimeout), (this._longPressDelayTimeout = null));
                    }
                    _cancelPressDelayTimeout() {
                        null != this._pressDelayTimeout && (clearTimeout(this._pressDelayTimeout), (this._pressDelayTimeout = null));
                    }
                    _cancelPressOutDelayTimeout() {
                        null != this._pressOutDelayTimeout && (clearTimeout(this._pressOutDelayTimeout), (this._pressOutDelayTimeout = null));
                    }
                }
                function R(e, t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = 0), Math.max(t, null != e ? e : n);
                }
                function _(e) {
                    var t = e.nativeEvent,
                        n = t.changedTouches,
                        r = t.touches;
                    return null != r && r.length > 0 ? r[0] : null != n && n.length > 0 ? n[0] : e.nativeEvent;
                }
                var T = n(202784);
                function P(e, t) {
                    var n = (0, T.useRef)(null);
                    null == n.current && (n.current = new S(t));
                    var r = n.current;
                    return (
                        (0, T.useEffect)(() => {
                            r.configure(t);
                        }, [t, r]),
                        (0, T.useEffect)(
                            () => () => {
                                r.reset();
                            },
                            [r],
                        ),
                        (0, T.useDebugValue)(t),
                        r.getEventHandlers()
                    );
                }
            },
            111453: (e, t, n) => {
                n.d(t, { Z: () => $ });
                var r = n(202784),
                    o = n(747351),
                    a = () => {},
                    i = {},
                    u = [];
                function s(e) {
                    return e > 20 ? e % 20 : e;
                }
                function l(e, t) {
                    var n,
                        r,
                        l,
                        c = !1,
                        d = e.changedTouches,
                        h = e.type,
                        p = !0 === e.metaKey,
                        v = !0 === e.shiftKey,
                        g = (d && d[0].force) || 0,
                        m = s((d && d[0].identifier) || 0),
                        f = (d && d[0].clientX) || e.clientX,
                        E = (d && d[0].clientY) || e.clientY,
                        S = (d && d[0].pageX) || e.pageX,
                        R = (d && d[0].pageY) || e.pageY,
                        _ = "function" == typeof e.preventDefault ? e.preventDefault.bind(e) : a,
                        T = e.timeStamp;
                    function P(e) {
                        return Array.prototype.slice.call(e).map((e) => ({
                            force: e.force,
                            identifier: s(e.identifier),
                            get locationX() {
                                return D(e.clientX);
                            },
                            get locationY() {
                                return O(e.clientY);
                            },
                            pageX: e.pageX,
                            pageY: e.pageY,
                            target: e.target,
                            timestamp: T,
                        }));
                    }
                    if (null != d) (r = P(d)), (l = P(e.touches));
                    else {
                        var b = [
                            {
                                force: g,
                                identifier: m,
                                get locationX() {
                                    return D(f);
                                },
                                get locationY() {
                                    return O(E);
                                },
                                pageX: S,
                                pageY: R,
                                target: e.target,
                                timestamp: T,
                            },
                        ];
                        (r = b), (l = "mouseup" === h || "dragstart" === h ? u : b);
                    }
                    var y = {
                        bubbles: !0,
                        cancelable: !0,
                        currentTarget: null,
                        defaultPrevented: e.defaultPrevented,
                        dispatchConfig: i,
                        eventPhase: e.eventPhase,
                        isDefaultPrevented: () => e.defaultPrevented,
                        isPropagationStopped: () => c,
                        isTrusted: e.isTrusted,
                        nativeEvent: {
                            altKey: !1,
                            ctrlKey: !1,
                            metaKey: p,
                            shiftKey: v,
                            changedTouches: r,
                            force: g,
                            identifier: m,
                            get locationX() {
                                return D(f);
                            },
                            get locationY() {
                                return O(E);
                            },
                            pageX: S,
                            pageY: R,
                            target: e.target,
                            timestamp: T,
                            touches: l,
                            type: h,
                        },
                        persist: a,
                        preventDefault: _,
                        stopPropagation() {
                            c = !0;
                        },
                        target: e.target,
                        timeStamp: T,
                        touchHistory: t.touchHistory,
                    };
                    function D(e) {
                        if ((n = n || (0, o.Z)(y.currentTarget))) return e - n.left;
                    }
                    function O(e) {
                        if ((n = n || (0, o.Z)(y.currentTarget))) return e - n.top;
                    }
                    return y;
                }
                var c = "mousedown",
                    d = "mousemove",
                    h = "mouseup",
                    p = "dragstart",
                    v = "touchstart",
                    g = "touchmove",
                    m = "touchend",
                    f = "touchcancel",
                    E = "scroll",
                    S = "select",
                    R = "selectionchange";
                function _(e) {
                    return e === v || e === c;
                }
                function T(e) {
                    return e === g || e === d;
                }
                function P(e) {
                    return e === m || e === h || b(e);
                }
                function b(e) {
                    return e === f || e === p;
                }
                var y = n(860944),
                    D = "__reactResponderId";
                function O(e) {
                    for (var t = []; null != e && e !== document.body; ) t.push(e), (e = e.parentNode);
                    return t;
                }
                function w(e) {
                    return null != e ? e[D] : null;
                }
                function A(e) {
                    for (
                        var t = [],
                            n = [],
                            r = (function (e) {
                                return "selectionchange" === e.type ? O(window.getSelection().anchorNode) : null != e.composedPath ? e.composedPath() : O(e.target);
                            })(e),
                            o = 0;
                        o < r.length;
                        o++
                    ) {
                        var a = r[o],
                            i = w(a);
                        null != i && (t.push(i), n.push(a));
                    }
                    return { idPath: t, nodePath: n };
                }
                function k(e) {
                    return e.timeStamp || e.timestamp;
                }
                function N(e) {
                    var t = e.identifier;
                    return t;
                }
                function C(e, t) {
                    var n = N(e),
                        r = t.touchBank[n];
                    r
                        ? (function (e, t) {
                              (e.touchActive = !0), (e.startPageX = t.pageX), (e.startPageY = t.pageY), (e.startTimeStamp = k(t)), (e.currentPageX = t.pageX), (e.currentPageY = t.pageY), (e.currentTimeStamp = k(t)), (e.previousPageX = t.pageX), (e.previousPageY = t.pageY), (e.previousTimeStamp = k(t));
                          })(r, e)
                        : (t.touchBank[n] = (function (e) {
                              return { touchActive: !0, startPageX: e.pageX, startPageY: e.pageY, startTimeStamp: k(e), currentPageX: e.pageX, currentPageY: e.pageY, currentTimeStamp: k(e), previousPageX: e.pageX, previousPageY: e.pageY, previousTimeStamp: k(e) };
                          })(e)),
                        (t.mostRecentTimeStamp = k(e));
                }
                var L = n(19017),
                    x = {},
                    Y = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", { bubbles: !0 }],
                    Z = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", { bubbles: !0 }],
                    X = { touchstart: Y, mousedown: Y, touchmove: Z, mousemove: Z, scroll: ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", { bubbles: !1 }] },
                    I = { id: null, idPath: null, node: null },
                    M = new Map(),
                    G = !1,
                    H = 0,
                    z = { id: null, node: null, idPath: null },
                    B = new (class {
                        constructor() {
                            this._touchHistory = { touchBank: [], numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };
                        }
                        recordTouchTrack(e, t) {
                            var n = this._touchHistory;
                            if (T(e))
                                t.changedTouches.forEach((e) =>
                                    (function (e, t) {
                                        var n = t.touchBank[N(e)];
                                        n && ((n.touchActive = !0), (n.previousPageX = n.currentPageX), (n.previousPageY = n.currentPageY), (n.previousTimeStamp = n.currentTimeStamp), (n.currentPageX = e.pageX), (n.currentPageY = e.pageY), (n.currentTimeStamp = k(e)), (t.mostRecentTimeStamp = k(e)));
                                    })(e, n),
                                );
                            else if (_(e)) t.changedTouches.forEach((e) => C(e, n)), (n.numberActiveTouches = t.touches.length), 1 === n.numberActiveTouches && (n.indexOfSingleActiveTouch = t.touches[0].identifier);
                            else if (
                                P(e) &&
                                (t.changedTouches.forEach((e) =>
                                    (function (e, t) {
                                        var n = t.touchBank[N(e)];
                                        n && ((n.touchActive = !1), (n.previousPageX = n.currentPageX), (n.previousPageY = n.currentPageY), (n.previousTimeStamp = n.currentTimeStamp), (n.currentPageX = e.pageX), (n.currentPageY = e.pageY), (n.currentTimeStamp = k(e)), (t.mostRecentTimeStamp = k(e)));
                                    })(e, n),
                                ),
                                (n.numberActiveTouches = t.touches.length),
                                1 === n.numberActiveTouches)
                            )
                                for (var r = n.touchBank, o = 0; o < r.length; o++) {
                                    var a = r[o];
                                    if (null != a && a.touchActive) {
                                        n.indexOfSingleActiveTouch = o;
                                        break;
                                    }
                                }
                        }
                        get touchHistory() {
                            return this._touchHistory;
                        }
                    })();
                function W(e) {
                    z = e;
                }
                function K(e) {
                    var t = M.get(e);
                    return null != t ? t : x;
                }
                function q(e) {
                    var t = e.type,
                        n = e.target;
                    if (("touchstart" === t && (G = !0), ("touchmove" === t || H > 1) && (G = !1), !(("mousedown" === t && G) || ("mousemove" === t && G) || ("mousemove" === t && H < 1))))
                        if (G && "mouseup" === t) 0 === H && (G = !1);
                        else {
                            var r =
                                    _(t) &&
                                    (function (e) {
                                        var t = e.altKey,
                                            n = e.button,
                                            r = e.buttons,
                                            o = e.ctrlKey,
                                            a = e.type,
                                            i = !1 === t && !1 === o;
                                        return !!("touchstart" === a || "touchmove" === a || ("mousedown" === a && (0 === n || 1 === r) && i) || ("mousemove" === a && 1 === r && i));
                                    })(e),
                                o = T(t),
                                a = P(t),
                                i = (function (e) {
                                    return e === E;
                                })(t),
                                u = (function (e) {
                                    return e === S || e === R;
                                })(t),
                                s = l(e, B);
                            (r || o || a) && (e.touches ? (H = e.touches.length) : r ? (H = 1) : a && (H = 0), B.recordTouchTrack(t, s.nativeEvent));
                            var c,
                                d = A(e),
                                h = !1;
                            if (r || o || (i && H > 0)) {
                                var p = z.idPath,
                                    v = d.idPath;
                                if (null != p && null != v) {
                                    var g = (function (e, t) {
                                        var n = e.length,
                                            r = t.length;
                                        if (0 === n || 0 === r || e[n - 1] !== t[r - 1]) return null;
                                        var o = e[0],
                                            a = 0,
                                            i = t[0],
                                            u = 0;
                                        n - r > 0 && ((o = e[(a = n - r)]), (n = r)), r - n > 0 && ((i = t[(u = r - n)]), (r = n));
                                        for (var s = n; s--; ) {
                                            if (o === i) return o;
                                            (o = e[a++]), (i = t[u++]);
                                        }
                                        return null;
                                    })(p, v);
                                    if (null != g) {
                                        var m = v.indexOf(g) + (g === z.id ? 1 : 0);
                                        d = { idPath: v.slice(m), nodePath: d.nodePath.slice(m) };
                                    } else d = null;
                                }
                                null != d &&
                                    ((c = (function (e, t, n) {
                                        var r = X[t.type];
                                        if (null != r) {
                                            for (
                                                var o = e.idPath,
                                                    a = e.nodePath,
                                                    i = r[0],
                                                    u = r[1],
                                                    s = r[2].bubbles,
                                                    l = function (e, t, r) {
                                                        var a = K(e)[r];
                                                        if (null != a && ((n.currentTarget = t), !0 === a(n))) return { id: e, node: t, idPath: o.slice(o.indexOf(e)) };
                                                    },
                                                    c = o.length - 1;
                                                c >= 0;
                                                c--
                                            ) {
                                                var d = l(o[c], a[c], i);
                                                if (null != d) return d;
                                                if (!0 === n.isPropagationStopped()) return;
                                            }
                                            if (s)
                                                for (var h = 0; h < o.length; h++) {
                                                    var p = l(o[h], a[h], u);
                                                    if (null != p) return p;
                                                    if (!0 === n.isPropagationStopped()) return;
                                                }
                                            else {
                                                var v = o[0],
                                                    g = a[0];
                                                if (t.target === g) return l(v, g, u);
                                            }
                                        }
                                    })(d, e, s)),
                                    null != c &&
                                        (!(function (e, t) {
                                            var n = z,
                                                r = n.id,
                                                o = n.node,
                                                a = t.id,
                                                i = t.node,
                                                u = K(a),
                                                s = u.onResponderGrant,
                                                l = u.onResponderReject;
                                            if (((e.bubbles = !1), (e.cancelable = !1), (e.currentTarget = i), null == r)) null != s && ((e.currentTarget = i), (e.dispatchConfig.registrationName = "onResponderGrant"), s(e)), W(t);
                                            else {
                                                var c = K(r),
                                                    d = c.onResponderTerminate,
                                                    h = c.onResponderTerminationRequest,
                                                    p = !0;
                                                null != h && ((e.currentTarget = o), (e.dispatchConfig.registrationName = "onResponderTerminationRequest"), !1 === h(e) && (p = !1)), p ? (null != d && ((e.currentTarget = o), (e.dispatchConfig.registrationName = "onResponderTerminate"), d(e)), null != s && ((e.currentTarget = i), (e.dispatchConfig.registrationName = "onResponderGrant"), s(e)), W(t)) : null != l && ((e.currentTarget = i), (e.dispatchConfig.registrationName = "onResponderReject"), l(e));
                                            }
                                        })(s, c),
                                        (h = !0)));
                            }
                            if (null != z.id && null != z.node) {
                                var f = z,
                                    D = f.id,
                                    O = f.node,
                                    w = K(D),
                                    k = w.onResponderStart,
                                    N = w.onResponderMove,
                                    C = w.onResponderEnd,
                                    L = w.onResponderRelease,
                                    x = w.onResponderTerminate,
                                    Y = w.onResponderTerminationRequest;
                                if (((s.bubbles = !1), (s.cancelable = !1), (s.currentTarget = O), r)) null != k && ((s.dispatchConfig.registrationName = "onResponderStart"), k(s));
                                else if (o) null != N && ((s.dispatchConfig.registrationName = "onResponderMove"), N(s));
                                else {
                                    var Z =
                                            b(t) ||
                                            "contextmenu" === t ||
                                            ("blur" === t && n === window) ||
                                            ("blur" === t && n.contains(O) && e.relatedTarget !== O) ||
                                            (i && 0 === H) ||
                                            (i && n.contains(O) && n !== O) ||
                                            (u &&
                                                (function (e) {
                                                    return "selectionchange" === e.type ? (0, y.Z)() : "select" === e.type;
                                                })(e)),
                                        M =
                                            a &&
                                            !Z &&
                                            !(function (e, t) {
                                                if (!t || 0 === t.length) return !1;
                                                for (var n = 0; n < t.length; n++) {
                                                    var r = t[n].target;
                                                    if (null != r && e.contains(r)) return !0;
                                                }
                                                return !1;
                                            })(O, e.touches);
                                    if ((a && null != C && ((s.dispatchConfig.registrationName = "onResponderEnd"), C(s)), M && (null != L && ((s.dispatchConfig.registrationName = "onResponderRelease"), L(s)), W(I)), Z)) {
                                        var q = !0;
                                        ("contextmenu" !== t && "scroll" !== t && "selectionchange" !== t) || (h ? (q = !1) : null != Y && ((s.dispatchConfig.registrationName = "onResponderTerminationRequest"), !1 === Y(s) && (q = !1))), q && (null != x && ((s.dispatchConfig.registrationName = "onResponderTerminate"), x(s)), W(I), (G = !1), (H = 0));
                                    }
                                }
                            }
                        }
                }
                var V = ["blur", "scroll"],
                    j = ["mousedown", "mousemove", "mouseup", "dragstart", "touchstart", "touchmove", "touchend", "touchcancel", "contextmenu", "select", "selectionchange"];
                function F(e, t, n) {
                    !(function (e, t) {
                        null != e && (e[D] = t);
                    })(t, e),
                        M.set(e, n);
                }
                function U(e) {
                    z.id === e &&
                        (function () {
                            var e = z,
                                t = e.id,
                                n = e.node;
                            if (null != t && null != n) {
                                var r = K(t).onResponderTerminate;
                                if (null != r) {
                                    var o = l({}, B);
                                    (o.currentTarget = n), r(o);
                                }
                                W(I);
                            }
                            (G = !1), (H = 0);
                        })(),
                        M.has(e) && M.delete(e);
                }
                var J = {},
                    Q = 0;
                function $(e, t) {
                    void 0 === t && (t = J);
                    var n,
                        o,
                        a = ((n = () => Q++), null == (o = r.useRef(null)).current && (o.current = n()), o.current),
                        i = r.useRef(!1);
                    r.useEffect(
                        () => (
                            L.Z &&
                                null == window.__reactResponderSystemActive &&
                                (window.addEventListener("blur", q),
                                j.forEach((e) => {
                                    document.addEventListener(e, q);
                                }),
                                V.forEach((e) => {
                                    document.addEventListener(e, q, !0);
                                }),
                                (window.__reactResponderSystemActive = !0)),
                            () => {
                                U(a);
                            }
                        ),
                        [a],
                    ),
                        r.useEffect(() => {
                            var n = t,
                                r = n.onMoveShouldSetResponder,
                                o = n.onMoveShouldSetResponderCapture,
                                u = n.onScrollShouldSetResponder,
                                s = n.onScrollShouldSetResponderCapture,
                                l = n.onSelectionChangeShouldSetResponder,
                                c = n.onSelectionChangeShouldSetResponderCapture,
                                d = n.onStartShouldSetResponder,
                                h = n.onStartShouldSetResponderCapture,
                                p = null != r || null != o || null != u || null != s || null != l || null != c || null != d || null != h,
                                v = e.current;
                            p ? (F(a, v, t), (i.current = !0)) : i.current && (U(a), (i.current = !1));
                        }, [t, e, a]),
                        r.useDebugValue({ isResponder: e.current === z.node }),
                        r.useDebugValue(t);
                }
            },
            309121: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(202784),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : Object.freeze({});
                function a(e) {
                    var t = r.useRef(o);
                    return t.current === o && (t.current = e()), t.current;
                }
            },
            180612: (e, t, n) => {
                function r(e, t) {
                    0;
                }
                n.d(t, { O: () => r });
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-de539588.506ca6aa.js.map
