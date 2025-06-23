"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"],
    {
        553615: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(807896),
                s = i(202784),
                r = i(555874),
                n = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(r.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const h = (0, n.Z)(_);
        },
        408839: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(45843);
            const s = (0, i(409140).Z)(a.Z);
        },
        59335: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(807896),
                s = i(202784),
                r = i(214997),
                n = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(r.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const h = (0, n.Z)(_);
        },
        349887: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(807896),
                s = i(202784),
                r = i(472302),
                n = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(r.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const h = (0, n.Z)(_);
        },
        101443: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(466999);
            const s = (0, i(409140).Z)(a.Z);
        },
        89554: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(325686);
            const s = (0, i(409140).Z)(a.Z);
        },
        409140: (t, e, i) => {
            i.d(e, { Z: () => L });
            var a = i(807896),
                s = i(231461),
                r = i(133028),
                n = i(265937),
                _ = i(211804),
                h = i(354877),
                o = i(889441);
            class l extends h.Z {
                constructor(t) {
                    super(), (this._transforms = t);
                }
                __makeNative() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__makeNative();
                        }
                    }),
                        super.__makeNative();
                }
                __getValue() {
                    return this._transforms.map((t) => {
                        var e = {};
                        for (var i in t) {
                            var a = t[i];
                            a instanceof _.Z ? (e[i] = a.__getValue()) : (e[i] = a);
                        }
                        return e;
                    });
                }
                __getAnimatedValue() {
                    return this._transforms.map((t) => {
                        var e = {};
                        for (var i in t) {
                            var a = t[i];
                            a instanceof _.Z ? (e[i] = a.__getAnimatedValue()) : (e[i] = a);
                        }
                        return e;
                    });
                }
                __attach() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__addChild(this);
                        }
                    });
                }
                __detach() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__removeChild(this);
                        }
                    }),
                        super.__detach();
                }
                __getNativeConfig() {
                    var t = [];
                    return (
                        this._transforms.forEach((e) => {
                            for (var i in e) {
                                var a = e[i];
                                a instanceof _.Z ? t.push({ type: "animated", property: i, nodeTag: a.__getNativeTag() }) : t.push({ type: "static", property: i, value: o.ZP.transformDataType(a) });
                            }
                        }),
                        o.ZP.validateTransform(t),
                        { type: "transform", transforms: t }
                    );
                }
            }
            const u = l;
            var v = i(297689).Z.flatten;
            function d(t) {
                var e = v(t),
                    i = {};
                for (var a in e) {
                    var s = e[a];
                    "transform" === a && Array.isArray(s) ? (i[a] = new u(s)) : s instanceof _.Z ? (i[a] = s) : s && !Array.isArray(s) && "object" == typeof s && (i[a] = d(s));
                }
                return i;
            }
            class f extends h.Z {
                constructor(t) {
                    super(), (this._inputStyle = t), (this._style = d(t));
                }
                _walkStyleAndGetValues(t) {
                    var e = {};
                    for (var i in t) {
                        var a = t[i];
                        a instanceof _.Z ? a.__isNative || (e[i] = a.__getValue()) : a && !Array.isArray(a) && "object" == typeof a ? (e[i] = this._walkStyleAndGetValues(a)) : (e[i] = a);
                    }
                    return e;
                }
                __getValue() {
                    return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
                }
                _walkStyleAndGetAnimatedValues(t) {
                    var e = {};
                    for (var i in t) {
                        var a = t[i];
                        a instanceof _.Z ? (e[i] = a.__getAnimatedValue()) : a && !Array.isArray(a) && "object" == typeof a && (e[i] = this._walkStyleAndGetAnimatedValues(a));
                    }
                    return e;
                }
                __getAnimatedValue() {
                    return this._walkStyleAndGetAnimatedValues(this._style);
                }
                __attach() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__addChild(this);
                    }
                }
                __detach() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__removeChild(this);
                    }
                    super.__detach();
                }
                __makeNative() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__makeNative();
                    }
                    super.__makeNative();
                }
                __getNativeConfig() {
                    var t = {};
                    for (var e in this._style)
                        if (this._style[e] instanceof _.Z) {
                            var i = this._style[e];
                            i.__makeNative(), (t[e] = i.__getNativeTag());
                        }
                    return o.ZP.validateStyles(t), { type: "style", style: t };
                }
            }
            const c = f;
            var g = i(614983),
                m = i.n(g);
            class p extends _.Z {
                constructor(t, e) {
                    super(), t.style && (t = (0, r.Z)((0, r.Z)({}, t), {}, { style: new c(t.style) })), (this._props = t), (this._callback = e), this.__attach();
                }
                __getValue() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z ? (!i.__isNative || i instanceof c) && (t[e] = i.__getValue()) : i instanceof n.Q ? (t[e] = i.__getHandler()) : (t[e] = i);
                    }
                    return t;
                }
                __getAnimatedValue() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z && (t[e] = i.__getAnimatedValue());
                    }
                    return t;
                }
                __attach() {
                    for (var t in this._props) {
                        var e = this._props[t];
                        e instanceof _.Z && e.__addChild(this);
                    }
                }
                __detach() {
                    for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
                        var e = this._props[t];
                        e instanceof _.Z && e.__removeChild(this);
                    }
                    super.__detach();
                }
                update() {
                    this._callback();
                }
                __makeNative() {
                    if (!this.__isNative) {
                        for (var t in ((this.__isNative = !0), this._props)) {
                            var e = this._props[t];
                            e instanceof _.Z && e.__makeNative();
                        }
                        this._animatedView && this.__connectAnimatedView();
                    }
                }
                setNativeView(t) {
                    this._animatedView !== t && ((this._animatedView = t), this.__isNative && this.__connectAnimatedView());
                }
                __connectAnimatedView() {
                    m()(this.__isNative, 'Expected node to be marked as "native"');
                    var t = this._animatedView;
                    m()(null != t, "Unable to locate attached view in the native tree"), o.ZP.API.connectAnimatedNodeToView(this.__getNativeTag(), t);
                }
                __disconnectAnimatedView() {
                    m()(this.__isNative, 'Expected node to be marked as "native"');
                    var t = this._animatedView;
                    m()(null != t, "Unable to locate attached view in the native tree"), o.ZP.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t);
                }
                __restoreDefaultValues() {
                    this.__isNative && o.ZP.API.restoreDefaultValues(this.__getNativeTag());
                }
                __getNativeConfig() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z && (i.__makeNative(), (t[e] = i.__getNativeTag()));
                    }
                    return { type: "props", props: t };
                }
            }
            const N = p;
            var Z = i(920863),
                V = i(202784),
                y = i(156905);
            function b(t) {
                var e = (0, V.useReducer)((t) => t + 1, 0)[1],
                    i = (0, V.useRef)(null),
                    a = (0, V.useMemo)(() => new N(t, () => (null == i.current ? void 0 : i.current())), [t]);
                !(function (t) {
                    var e = (0, V.useRef)(null),
                        i = (0, V.useRef)(!1);
                    (0, V.useEffect)(() => {
                        o.ZP.API.flushQueue();
                    }),
                        (0, y.Z)(
                            () => (
                                (i.current = !1),
                                () => {
                                    i.current = !0;
                                }
                            ),
                            [],
                        ),
                        (0, y.Z)(() => {
                            if ((t.__attach(), null != e.current)) {
                                var a = e.current;
                                a.__restoreDefaultValues(), a.__detach(), (e.current = null);
                            }
                            return () => {
                                i.current ? t.__detach() : (e.current = t);
                            };
                        }, [t]);
                })(a);
                var s = (0, V.useCallback)(
                        (s) => {
                            a.setNativeView(s),
                                (i.current = () => {
                                    e();
                                });
                            var r = (function (t) {
                                    return "object" == typeof t && "function" == typeof (null == t ? void 0 : t.getScrollableNode) ? t.getScrollableNode() : t;
                                })(s),
                                _ = [];
                            for (var h in t) {
                                var o = t[h];
                                o instanceof n.Q && o.__isNative && (o.__attach(r, h), _.push([h, o]));
                            }
                            return () => {
                                i.current = null;
                                for (var t = 0, e = _; t < e.length; t++) {
                                    var a = e[t],
                                        s = a[0];
                                    a[1].__detach(r, s);
                                }
                            };
                        },
                        [t, a],
                    ),
                    r = (0, Z.Z)(s);
                return [A(a), r];
            }
            function A(t) {
                return (0, r.Z)((0, r.Z)({}, t.__getValue()), {}, { collapsable: !1 });
            }
            var C = i(881806),
                w = ["style"];
            function L(t) {
                return V.forwardRef((e, i) => {
                    var r = b(e),
                        n = r[0],
                        _ = r[1],
                        h = (0, C.Z)(_, i),
                        o = n.passthroughAnimatedPropExplicitValues,
                        l = n.style,
                        u = null != o ? o : {},
                        v = u.style,
                        d = (0, s.Z)(u, w),
                        f = [l, v];
                    return V.createElement(t, (0, a.Z)({}, n, d, { style: f, ref: h }));
                });
            }
        },
        978735: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                r = i(354877);
            class n extends r.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() + this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "addition", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = n;
        },
        411193: (t, e, i) => {
            i.d(e, { Z: () => v });
            var a = i(588016),
                s = i(354877),
                r = i(437349),
                n = i.n(r),
                _ = i(889441).ZP.API,
                h = { r: 0, g: 0, b: 0, a: 1 },
                o = 1;
            function l(t) {
                if (null == t) return null;
                if (u(t)) return t;
                var e = n()(t);
                if (null == e) return null;
                if ("object" == typeof e) {
                    if (null != e) return e;
                } else if ("number" == typeof e) {
                    return { r: (4278190080 & e) >>> 24, g: (16711680 & e) >>> 16, b: (65280 & e) >>> 8, a: (255 & e) / 255 };
                }
                return null;
            }
            function u(t) {
                return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b && "number" == typeof t.a;
            }
            class v extends s.Z {
                constructor(t, e) {
                    super(), (this._listeners = {});
                    var i = null != t ? t : h;
                    if (
                        (function (t) {
                            return t && t.r instanceof a.Z && t.g instanceof a.Z && t.b instanceof a.Z && t.a instanceof a.Z;
                        })(i)
                    ) {
                        var s = i;
                        (this.r = s.r), (this.g = s.g), (this.b = s.b), (this.a = s.a);
                    } else {
                        var r,
                            n = null !== (r = l(i)) && void 0 !== r ? r : h,
                            _ = h;
                        u(n) ? (_ = n) : (this.nativeColor = n), (this.r = new a.Z(_.r)), (this.g = new a.Z(_.g)), (this.b = new a.Z(_.b)), (this.a = new a.Z(_.a));
                    }
                    (this.nativeColor || (e && e.useNativeDriver)) && this.__makeNative();
                }
                setValue(t) {
                    var e,
                        i = !1;
                    if (this.__isNative) {
                        var a = this.__getNativeTag();
                        _.setWaitingForIdentifier(a.toString());
                    }
                    var s = null !== (e = l(t)) && void 0 !== e ? e : h;
                    if (u(s)) {
                        var r = s;
                        this.r.setValue(r.r), this.g.setValue(r.g), this.b.setValue(r.b), this.a.setValue(r.a), null != this.nativeColor && ((this.nativeColor = null), (i = !0));
                    } else {
                        var n = s;
                        this.nativeColor !== n && ((this.nativeColor = n), (i = !0));
                    }
                    if (this.__isNative) {
                        var o = this.__getNativeTag();
                        i && _.updateAnimatedNodeConfig(o, this.__getNativeConfig()), _.unsetWaitingForIdentifier(o.toString());
                    }
                }
                setOffset(t) {
                    this.r.setOffset(t.r), this.g.setOffset(t.g), this.b.setOffset(t.b), this.a.setOffset(t.a);
                }
                flattenOffset() {
                    this.r.flattenOffset(), this.g.flattenOffset(), this.b.flattenOffset(), this.a.flattenOffset();
                }
                extractOffset() {
                    this.r.extractOffset(), this.g.extractOffset(), this.b.extractOffset(), this.a.extractOffset();
                }
                addListener(t) {
                    var e = String(o++),
                        i = (e) => {
                            e.value;
                            t(this.__getValue());
                        };
                    return (this._listeners[e] = { r: this.r.addListener(i), g: this.g.addListener(i), b: this.b.addListener(i), a: this.a.addListener(i) }), e;
                }
                removeListener(t) {
                    this.r.removeListener(this._listeners[t].r), this.g.removeListener(this._listeners[t].g), this.b.removeListener(this._listeners[t].b), this.a.removeListener(this._listeners[t].a), delete this._listeners[t];
                }
                removeAllListeners() {
                    this.r.removeAllListeners(), this.g.removeAllListeners(), this.b.removeAllListeners(), this.a.removeAllListeners(), (this._listeners = {});
                }
                stopAnimation(t) {
                    this.r.stopAnimation(), this.g.stopAnimation(), this.b.stopAnimation(), this.a.stopAnimation(), t && t(this.__getValue());
                }
                resetAnimation(t) {
                    this.r.resetAnimation(), this.g.resetAnimation(), this.b.resetAnimation(), this.a.resetAnimation(), t && t(this.__getValue());
                }
                __getValue() {
                    return null != this.nativeColor ? this.nativeColor : "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
                }
                __attach() {
                    this.r.__addChild(this), this.g.__addChild(this), this.b.__addChild(this), this.a.__addChild(this), super.__attach();
                }
                __detach() {
                    this.r.__removeChild(this), this.g.__removeChild(this), this.b.__removeChild(this), this.a.__removeChild(this), super.__detach();
                }
                __makeNative(t) {
                    this.r.__makeNative(t), this.g.__makeNative(t), this.b.__makeNative(t), this.a.__makeNative(t), super.__makeNative(t);
                }
                __getNativeConfig() {
                    return { type: "color", r: this.r.__getNativeTag(), g: this.g.__getNativeTag(), b: this.b.__getNativeTag(), a: this.a.__getNativeTag(), nativeColor: this.nativeColor };
                }
            }
        },
        419534: (t, e, i) => {
            i.d(e, { Z: () => n });
            var a = i(138280),
                s = i(354877);
            class r extends s.Z {
                constructor(t, e, i) {
                    super(), (this._a = t), (this._min = e), (this._max = i), (this._value = this._lastValue = this._a.__getValue());
                }
                __makeNative(t) {
                    this._a.__makeNative(t), super.__makeNative(t);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __getValue() {
                    var t = this._a.__getValue(),
                        e = t - this._lastValue;
                    return (this._lastValue = t), (this._value = Math.min(Math.max(this._value + e, this._min), this._max)), this._value;
                }
                __attach() {
                    this._a.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "diffclamp", input: this._a.__getNativeTag(), min: this._min, max: this._max };
                }
            }
            const n = r;
        },
        225266: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(138280),
                s = i(211804),
                r = i(588016),
                n = i(354877);
            class _ extends n.Z {
                constructor(t, e) {
                    super(), (this._warnedAboutDivideByZero = !1), 0 === e || (e instanceof s.Z && e.__getValue()), (this._a = "number" == typeof t ? new r.Z(t) : t), (this._b = "number" == typeof e ? new r.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    var t = this._a.__getValue(),
                        e = this._b.__getValue();
                    return 0 === e ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0) : ((this._warnedAboutDivideByZero = !1), t / e);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "division", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const h = _;
        },
        138280: (t, e, i) => {
            i.d(e, { Z: () => c });
            var a = i(133028),
                s = i(354877),
                r = i(889441),
                n = i(614983),
                _ = i.n(n),
                h = i(437349),
                o = i.n(h),
                l = (t) => t;
            function u(t) {
                if (t.outputRange && "string" == typeof t.outputRange[0])
                    return (function (t) {
                        var e = t.outputRange;
                        _()(e.length >= 2, "Bad output range"),
                            (e = e.map(v)),
                            (function (t) {
                                for (var e = t[0].replace(d, ""), i = 1; i < t.length; ++i) _()(e === t[i].replace(d, ""), "invalid pattern " + t[0] + " and " + t[i]);
                            })(e);
                        var i = e[0].match(d).map(() => []);
                        e.forEach((t) => {
                            t.match(d).forEach((t, e) => {
                                i[e].push(+t);
                            });
                        });
                        var s = e[0].match(d).map((e, s) => u((0, a.Z)((0, a.Z)({}, t), {}, { outputRange: i[s] }))),
                            r = ((n = e[0]), "string" == typeof n && n.startsWith("rgb"));
                        var n;
                        return (t) => {
                            var i = 0;
                            return e[0].replace(d, () => {
                                var e = +s[i++](t);
                                return r && (e = i < 4 ? Math.round(e) : Math.round(1e3 * e) / 1e3), String(e);
                            });
                        };
                    })(t);
                var e = t.outputRange,
                    i = t.inputRange;
                var s = t.easing || l,
                    r = "extend";
                void 0 !== t.extrapolateLeft ? (r = t.extrapolateLeft) : void 0 !== t.extrapolate && (r = t.extrapolate);
                var n = "extend";
                return (
                    void 0 !== t.extrapolateRight ? (n = t.extrapolateRight) : void 0 !== t.extrapolate && (n = t.extrapolate),
                    (t) => {
                        _()("number" == typeof t, "Cannot interpolation an input which is not a number");
                        var a = (function (t, e) {
                            var i;
                            for (i = 1; i < e.length - 1 && !(e[i] >= t); ++i);
                            return i - 1;
                        })(t, i);
                        return (function (t, e, i, a, s, r, n, _) {
                            var h = t;
                            if (h < e) {
                                if ("identity" === n) return h;
                                "clamp" === n && (h = e);
                            }
                            if (h > i) {
                                if ("identity" === _) return h;
                                "clamp" === _ && (h = i);
                            }
                            if (a === s) return a;
                            if (e === i) return t <= e ? a : s;
                            e === -1 / 0 ? (h = -h) : i === 1 / 0 ? (h -= e) : (h = (h - e) / (i - e));
                            (h = r(h)), a === -1 / 0 ? (h = -h) : s === 1 / 0 ? (h += a) : (h = h * (s - a) + a);
                            return h;
                        })(t, i[a], i[a + 1], e[a], e[a + 1], s, r, n);
                    }
                );
            }
            function v(t) {
                var e = o()(t);
                return null === e || "number" != typeof e ? t : "rgba(" + ((4278190080 & (e = e || 0)) >>> 24) + ", " + ((16711680 & e) >>> 16) + ", " + ((65280 & e) >>> 8) + ", " + (255 & e) / 255 + ")";
            }
            var d = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
            class f extends s.Z {
                constructor(t, e) {
                    super(), (this._parent = t), (this._config = e), (this._interpolation = u(e));
                }
                __makeNative(t) {
                    this._parent.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    var t = this._parent.__getValue();
                    return _()("number" == typeof t, "Cannot interpolate an input which is not a number."), this._interpolation(t);
                }
                interpolate(t) {
                    return new f(this, t);
                }
                __attach() {
                    this._parent.__addChild(this);
                }
                __detach() {
                    this._parent.__removeChild(this), super.__detach();
                }
                __transformDataType(t) {
                    return t.map(r.ZP.transformDataType);
                }
                __getNativeConfig() {
                    return { inputRange: this._config.inputRange, outputRange: this.__transformDataType(this._config.outputRange), extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend", extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend", type: "interpolation" };
                }
            }
            f.__createInterpolation = u;
            const c = f;
        },
        668637: (t, e, i) => {
            i.d(e, { Z: () => n });
            var a = i(138280),
                s = i(354877);
            class r extends s.Z {
                constructor(t, e) {
                    super(), (this._a = t), (this._modulus = e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus;
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "modulus", input: this._a.__getNativeTag(), modulus: this._modulus };
                }
            }
            const n = r;
        },
        64650: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                r = i(354877);
            class n extends r.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() * this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "multiplication", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = n;
        },
        211804: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(889441),
                s = i(614983),
                r = i.n(s),
                n = a.ZP.API,
                _ = 1;
            const h = class {
                __attach() {}
                __detach() {
                    this.__isNative && null != this.__nativeTag && (a.ZP.API.dropAnimatedNode(this.__nativeTag), (this.__nativeTag = void 0));
                }
                __getValue() {}
                __getAnimatedValue() {
                    return this.__getValue();
                }
                __addChild(t) {}
                __removeChild(t) {}
                __getChildren() {
                    return [];
                }
                constructor() {
                    this._listeners = {};
                }
                __makeNative(t) {
                    if (!this.__isNative) throw new Error('This node cannot be made a "native" animated node');
                    (this._platformConfig = t), this.hasListeners() && this._startListeningToNativeValueUpdates();
                }
                addListener(t) {
                    var e = String(_++);
                    return (this._listeners[e] = t), this.__isNative && this._startListeningToNativeValueUpdates(), e;
                }
                removeListener(t) {
                    delete this._listeners[t], this.__isNative && !this.hasListeners() && this._stopListeningForNativeValueUpdates();
                }
                removeAllListeners() {
                    (this._listeners = {}), this.__isNative && this._stopListeningForNativeValueUpdates();
                }
                hasListeners() {
                    return !!Object.keys(this._listeners).length;
                }
                _startListeningToNativeValueUpdates() {
                    (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) ||
                        (this.__shouldUpdateListenersForNewNativeTag && ((this.__shouldUpdateListenersForNewNativeTag = !1), this._stopListeningForNativeValueUpdates()),
                        n.startListeningToAnimatedNodeValue(this.__getNativeTag()),
                        (this.__nativeAnimatedValueListener = a.ZP.nativeEventEmitter.addListener("onAnimatedValueUpdate", (t) => {
                            t.tag === this.__getNativeTag() && this.__onAnimatedValueUpdateReceived(t.value);
                        })));
                }
                __onAnimatedValueUpdateReceived(t) {
                    this.__callListeners(t);
                }
                __callListeners(t) {
                    for (var e in this._listeners) this._listeners[e]({ value: t });
                }
                _stopListeningForNativeValueUpdates() {
                    this.__nativeAnimatedValueListener && (this.__nativeAnimatedValueListener.remove(), (this.__nativeAnimatedValueListener = null), n.stopListeningToAnimatedNodeValue(this.__getNativeTag()));
                }
                __getNativeTag() {
                    var t;
                    a.ZP.assertNativeAnimatedModule(), r()(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
                    var e = null !== (t = this.__nativeTag) && void 0 !== t ? t : a.ZP.generateNewNodeTag();
                    if (null == this.__nativeTag) {
                        this.__nativeTag = e;
                        var i = this.__getNativeConfig();
                        this._platformConfig && (i.platformConfig = this._platformConfig), a.ZP.API.createAnimatedNode(e, i), (this.__shouldUpdateListenersForNewNativeTag = !0);
                    }
                    return e;
                }
                __getNativeConfig() {
                    throw new Error("This JS animated node type cannot be used as native animated node");
                }
                toJSON() {
                    return this.__getValue();
                }
                __getPlatformConfig() {
                    return this._platformConfig;
                }
                __setPlatformConfig(t) {
                    this._platformConfig = t;
                }
            };
        },
        104377: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                r = i(354877);
            class n extends r.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() - this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "subtraction", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = n;
        },
        794167: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(133028),
                s = i(211804),
                r = i(889441);
            class n extends s.Z {
                constructor(t, e, i, a, s) {
                    super(), (this._value = t), (this._parent = e), (this._animationClass = i), (this._animationConfig = a), (this._useNativeDriver = (0, r.lH)(a)), (this._callback = s), this.__attach();
                }
                __makeNative() {
                    (this.__isNative = !0), this._parent.__makeNative(), super.__makeNative(), this._value.__makeNative();
                }
                __getValue() {
                    return this._parent.__getValue();
                }
                __attach() {
                    this._parent.__addChild(this), this._useNativeDriver && this.__makeNative();
                }
                __detach() {
                    this._parent.__removeChild(this), super.__detach();
                }
                update() {
                    this._value.animate(new this._animationClass((0, a.Z)((0, a.Z)({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() })), this._callback);
                }
                __getNativeConfig() {
                    var t = new this._animationClass((0, a.Z)((0, a.Z)({}, this._animationConfig), {}, { toValue: void 0 })).__getNativeAnimationConfig();
                    return { type: "tracking", animationId: (0, r.p1)(), animationConfig: t, toValue: this._parent.__getNativeTag(), value: this._value.__getNativeTag() };
                }
            }
            const _ = n;
        },
        588016: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(138280),
                s = i(354877),
                r = i(18198),
                n = i(889441).ZP.API;
            class _ extends s.Z {
                constructor(t, e) {
                    if ((super(), "number" != typeof t)) throw new Error("AnimatedValue: Attempting to set value to undefined");
                    (this._startingValue = this._value = t), (this._offset = 0), (this._animation = null), e && e.useNativeDriver && this.__makeNative();
                }
                __detach() {
                    this.__isNative &&
                        n.getValue(this.__getNativeTag(), (t) => {
                            this._value = t - this._offset;
                        }),
                        this.stopAnimation(),
                        super.__detach();
                }
                __getValue() {
                    return this._value + this._offset;
                }
                setValue(t) {
                    var e, i;
                    this._animation && (this._animation.stop(), (this._animation = null)), this._updateValue(t, !this.__isNative), this.__isNative && ((e = this.__getNativeTag().toString()), (i = () => n.setAnimatedNodeValue(this.__getNativeTag(), t)), n.setWaitingForIdentifier(e), i(), n.unsetWaitingForIdentifier(e));
                }
                setOffset(t) {
                    (this._offset = t), this.__isNative && n.setAnimatedNodeOffset(this.__getNativeTag(), t);
                }
                flattenOffset() {
                    (this._value += this._offset), (this._offset = 0), this.__isNative && n.flattenAnimatedNodeOffset(this.__getNativeTag());
                }
                extractOffset() {
                    (this._offset += this._value), (this._value = 0), this.__isNative && n.extractAnimatedNodeOffset(this.__getNativeTag());
                }
                stopAnimation(t) {
                    this.stopTracking(), this._animation && this._animation.stop(), (this._animation = null), t && (this.__isNative ? n.getValue(this.__getNativeTag(), t) : t(this.__getValue()));
                }
                resetAnimation(t) {
                    this.stopAnimation(t), (this._value = this._startingValue), this.__isNative && n.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
                }
                __onAnimatedValueUpdateReceived(t) {
                    this._updateValue(t, !1);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                animate(t, e) {
                    var i = null;
                    t.__isInteraction && (i = r.Z.createInteractionHandle());
                    var a = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = t),
                        t.start(
                            this._value,
                            (t) => {
                                this._updateValue(t, !0);
                            },
                            (t) => {
                                (this._animation = null), null !== i && r.Z.clearInteractionHandle(i), e && e(t);
                            },
                            a,
                            this,
                        );
                }
                stopTracking() {
                    this._tracking && this._tracking.__detach(), (this._tracking = null);
                }
                track(t) {
                    this.stopTracking(), (this._tracking = t), this._tracking && this._tracking.update();
                }
                _updateValue(t, e) {
                    if (void 0 === t) throw new Error("AnimatedValue: Attempting to set value to undefined");
                    var i, a;
                    (this._value = t),
                        e &&
                            ((i = this),
                            (a = new Set()),
                            (function t(e) {
                                "function" == typeof e.update ? a.add(e) : e.__getChildren().forEach(t);
                            })(i),
                            a.forEach((t) => t.update())),
                        super.__callListeners(this.__getValue());
                }
                __getNativeConfig() {
                    return { type: "value", value: this._value, offset: this._offset };
                }
            }
            const h = _;
        },
        377715: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(588016),
                s = i(354877),
                r = i(614983),
                n = i.n(r),
                _ = 1;
            class h extends s.Z {
                constructor(t) {
                    super();
                    var e = t || { x: 0, y: 0 };
                    "number" == typeof e.x && "number" == typeof e.y ? ((this.x = new a.Z(e.x)), (this.y = new a.Z(e.y))) : (n()(e.x instanceof a.Z && e.y instanceof a.Z, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues."), (this.x = e.x), (this.y = e.y)), (this._listeners = {});
                }
                setValue(t) {
                    this.x.setValue(t.x), this.y.setValue(t.y);
                }
                setOffset(t) {
                    this.x.setOffset(t.x), this.y.setOffset(t.y);
                }
                flattenOffset() {
                    this.x.flattenOffset(), this.y.flattenOffset();
                }
                extractOffset() {
                    this.x.extractOffset(), this.y.extractOffset();
                }
                __getValue() {
                    return { x: this.x.__getValue(), y: this.y.__getValue() };
                }
                resetAnimation(t) {
                    this.x.resetAnimation(), this.y.resetAnimation(), t && t(this.__getValue());
                }
                stopAnimation(t) {
                    this.x.stopAnimation(), this.y.stopAnimation(), t && t(this.__getValue());
                }
                addListener(t) {
                    var e = String(_++),
                        i = (e) => {
                            e.value;
                            t(this.__getValue());
                        };
                    return (this._listeners[e] = { x: this.x.addListener(i), y: this.y.addListener(i) }), e;
                }
                removeListener(t) {
                    this.x.removeListener(this._listeners[t].x), this.y.removeListener(this._listeners[t].y), delete this._listeners[t];
                }
                removeAllListeners() {
                    this.x.removeAllListeners(), this.y.removeAllListeners(), (this._listeners = {});
                }
                getLayout() {
                    return { left: this.x, top: this.y };
                }
                getTranslateTransform() {
                    return [{ translateX: this.x }, { translateY: this.y }];
                }
            }
            const o = h;
        },
        354877: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(77325),
                s = i(211804),
                r = i(889441);
            class n extends s.Z {
                constructor() {
                    super(), (this._children = []);
                }
                __makeNative(t) {
                    if (!this.__isNative) {
                        this.__isNative = !0;
                        for (var e, i = (0, a.Z)(this._children); !(e = i()).done; ) {
                            var s = e.value;
                            s.__makeNative(t), r.ZP.API.connectAnimatedNodes(this.__getNativeTag(), s.__getNativeTag());
                        }
                    }
                    super.__makeNative(t);
                }
                __addChild(t) {
                    0 === this._children.length && this.__attach(), this._children.push(t), this.__isNative && (t.__makeNative(this.__getPlatformConfig()), r.ZP.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()));
                }
                __removeChild(t) {
                    var e = this._children.indexOf(t);
                    -1 !== e && (this.__isNative && t.__isNative && r.ZP.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()), this._children.splice(e, 1), 0 === this._children.length && this.__detach());
                }
                __getChildren() {
                    return this._children;
                }
                __callListeners(t) {
                    if ((super.__callListeners(t), !this.__isNative))
                        for (var e, i = (0, a.Z)(this._children); !(e = i()).done; ) {
                            var s = e.value;
                            s.__getValue && s.__callListeners(s.__getValue());
                        }
                }
            }
            const _ = n;
        },
        951113: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(33229);
            const s = new (i(28604).Z)();
            var r = i(614983),
                n = i.n(r);
            class _ {
                constructor(t) {
                    "ios" === a.Z.OS && (n()(null != t, "`new NativeEventEmitter()` requires a non-null argument."), (this._nativeModule = t));
                }
                addListener(t, e, i) {
                    var a;
                    null == (a = this._nativeModule) || a.addListener(t);
                    var r = s.addListener(t, e, i);
                    return {
                        remove: () => {
                            var t;
                            null != r && (null == (t = this._nativeModule) || t.removeListeners(1), r.remove(), (r = null));
                        },
                    };
                }
                removeListener(t, e) {
                    var i;
                    null == (i = this._nativeModule) || i.removeListeners(1), s.removeListener(t, e);
                }
                emit(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
                    s.emit(t, ...i);
                }
                removeAllListeners(t) {
                    var e;
                    n()(null != t, "`NativeEventEmitter.removeAllListener()` requires a non-null argument."), null == (e = this._nativeModule) || e.removeListeners(this.listenerCount(t)), s.removeAllListeners(t);
                }
                listenerCount(t) {
                    return s.listenerCount(t);
                }
            }
        },
        472822: (t, e, i) => {
            i.d(e, { Z: () => a });
            const a = { isLayoutAnimationEnabled: () => !0, shouldEmitW3CPointerEvents: () => !1, shouldPressibilityUseW3CPointerEventsForHover: () => !1, animatedShouldDebounceQueueFlush: () => !1, animatedShouldUseSingleOp: () => !1 };
        },
        975064: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(807896),
                s = i(231461),
                r = i(33229),
                n = i(202784),
                _ = i(582975),
                h = ["stickySectionHeadersEnabled"];
            class o extends n.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._captureRef = (t) => {
                            this._wrapperListRef = t;
                        });
                }
                scrollToLocation(t) {
                    null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(t);
                }
                recordInteraction() {
                    var t = this._wrapperListRef && this._wrapperListRef.getListRef();
                    t && t.recordInteraction();
                }
                flashScrollIndicators() {
                    var t = this._wrapperListRef && this._wrapperListRef.getListRef();
                    t && t.flashScrollIndicators();
                }
                getScrollResponder() {
                    var t = this._wrapperListRef && this._wrapperListRef.getListRef();
                    if (t) return t.getScrollResponder();
                }
                getScrollableNode() {
                    var t = this._wrapperListRef && this._wrapperListRef.getListRef();
                    if (t) return t.getScrollableNode();
                }
                render() {
                    var t = this.props,
                        e = t.stickySectionHeadersEnabled,
                        i = (0, s.Z)(t, h),
                        o = null != e ? e : "ios" === r.Z.OS;
                    return n.createElement(_.Z, (0, a.Z)({}, i, { stickySectionHeadersEnabled: o, ref: this._captureRef, getItemCount: (t) => t.length, getItem: (t, e) => t[e] }));
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a.dedf56aa.js.map
