(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.LottieWeb"],
    {
        548888: (t, e, i) => {
            var s, a;
            "undefined" != typeof navigator &&
                ((a = window || {}),
                void 0 ===
                    (s = function () {
                        return (function (t) {
                            "use strict";
                            var e,
                                i = "http://www.w3.org/2000/svg",
                                s = "",
                                a = -999999,
                                r = !0,
                                n = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent), Math.round, Math.pow),
                                h = Math.sqrt,
                                o = (Math.abs, Math.floor),
                                l = (Math.max, Math.min),
                                p = {};
                            !(function () {
                                var t,
                                    e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                                    i = e.length;
                                for (t = 0; t < i; t += 1) p[e[t]] = Math[e[t]];
                            })(),
                                (p.random = Math.random),
                                (p.abs = function (t) {
                                    if ("object" == typeof t && t.length) {
                                        var e,
                                            i = T(t.length),
                                            s = t.length;
                                        for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                                        return i;
                                    }
                                    return Math.abs(t);
                                });
                            var f = 150,
                                d = Math.PI / 180,
                                m = 0.5519;
                            function c(t) {
                                t && Math.round;
                            }
                            function u(t, e, i, s) {
                                (this.type = t), (this.currentTime = e), (this.totalTime = i), (this.direction = s < 0 ? -1 : 1);
                            }
                            function g(t, e) {
                                (this.type = t), (this.direction = e < 0 ? -1 : 1);
                            }
                            function y(t, e, i, s) {
                                (this.type = t), (this.currentLoop = i), (this.totalLoops = e), (this.direction = s < 0 ? -1 : 1);
                            }
                            function v(t, e, i) {
                                (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
                            }
                            function b(t, e) {
                                (this.type = t), (this.target = e);
                            }
                            function _(t, e) {
                                (this.type = "renderFrameError"), (this.nativeError = t), (this.currentTime = e);
                            }
                            function k(t) {
                                (this.type = "configError"), (this.nativeError = t);
                            }
                            c(!1);
                            var A,
                                M =
                                    ((A = 0),
                                    function () {
                                        return "__lottie_element_" + ++A;
                                    });
                            function C(t, e, i) {
                                var s, a, r, n, h, o, l, p;
                                switch (((o = i * (1 - e)), (l = i * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e)), (p = i * (1 - (1 - h) * e)), n % 6)) {
                                    case 0:
                                        (s = i), (a = p), (r = o);
                                        break;
                                    case 1:
                                        (s = l), (a = i), (r = o);
                                        break;
                                    case 2:
                                        (s = o), (a = i), (r = p);
                                        break;
                                    case 3:
                                        (s = o), (a = l), (r = i);
                                        break;
                                    case 4:
                                        (s = p), (a = o), (r = i);
                                        break;
                                    case 5:
                                        (s = i), (a = o), (r = l);
                                }
                                return [s, a, r];
                            }
                            function P(t, e, i) {
                                var s,
                                    a = Math.max(t, e, i),
                                    r = Math.min(t, e, i),
                                    n = a - r,
                                    h = 0 === a ? 0 : n / a,
                                    o = a / 255;
                                switch (a) {
                                    case r:
                                        s = 0;
                                        break;
                                    case t:
                                        (s = e - i + n * (e < i ? 6 : 0)), (s /= 6 * n);
                                        break;
                                    case e:
                                        (s = i - t + 2 * n), (s /= 6 * n);
                                        break;
                                    case i:
                                        (s = t - e + 4 * n), (s /= 6 * n);
                                }
                                return [s, h, o];
                            }
                            function x(t, e) {
                                var i = P(255 * t[0], 255 * t[1], 255 * t[2]);
                                return (i[1] += e), 1 < i[1] ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0), C(i[0], i[1], i[2]);
                            }
                            function S(t, e) {
                                var i = P(255 * t[0], 255 * t[1], 255 * t[2]);
                                return (i[2] += e), 1 < i[2] ? (i[2] = 1) : i[2] < 0 && (i[2] = 0), C(i[0], i[1], i[2]);
                            }
                            function E(t, e) {
                                var i = P(255 * t[0], 255 * t[1], 255 * t[2]);
                                return (i[0] += e / 360), 1 < i[0] ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1), C(i[0], i[1], i[2]);
                            }
                            var F = (function () {
                                var t,
                                    e,
                                    i = [];
                                for (t = 0; t < 256; t += 1) (e = t.toString(16)), (i[t] = 1 == e.length ? "0" + e : e);
                                return function (t, e, s) {
                                    return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s];
                                };
                            })();
                            function D() {}
                            D.prototype = {
                                triggerEvent: function (t, e) {
                                    if (this._cbs[t]) for (var i = this._cbs[t].length, s = 0; s < i; s++) this._cbs[t][s](e);
                                },
                                addEventListener: function (t, e) {
                                    return (
                                        this._cbs[t] || (this._cbs[t] = []),
                                        this._cbs[t].push(e),
                                        function () {
                                            this.removeEventListener(t, e);
                                        }.bind(this)
                                    );
                                },
                                removeEventListener: function (t, e) {
                                    if (e) {
                                        if (this._cbs[t]) {
                                            for (var i = 0, s = this._cbs[t].length; i < s; ) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), (i -= 1), (s -= 1)), (i += 1);
                                            this._cbs[t].length || (this._cbs[t] = null);
                                        }
                                    } else this._cbs[t] = null;
                                },
                            };
                            var w =
                                "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array
                                    ? function (t, e) {
                                          return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0;
                                      }
                                    : function (t, e) {
                                          var i,
                                              s = 0,
                                              a = [];
                                          switch (t) {
                                              case "int16":
                                              case "uint8c":
                                                  i = 1;
                                                  break;
                                              default:
                                                  i = 1.1;
                                          }
                                          for (s = 0; s < e; s += 1) a.push(i);
                                          return a;
                                      };
                            function T(t) {
                                return Array.apply(null, { length: t });
                            }
                            function I(t) {
                                return document.createElementNS(i, t);
                            }
                            function L(t) {
                                return document.createElement(t);
                            }
                            function R() {}
                            R.prototype = {
                                addDynamicProperty: function (t) {
                                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), (this._isAnimated = !0));
                                },
                                iterateDynamicProperties: function () {
                                    this._mdf = !1;
                                    var t,
                                        e = this.dynamicProperties.length;
                                    for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
                                },
                                initDynamicPropertyContainer: function (t) {
                                    (this.container = t), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
                                },
                            };
                            var z,
                                V =
                                    ((z = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }),
                                    function (t) {
                                        return z[t] || "";
                                    }),
                                N = (function () {
                                    var t = Math.cos,
                                        e = Math.sin,
                                        i = Math.tan,
                                        s = Math.round;
                                    function a() {
                                        return (this.props[0] = 1), (this.props[1] = 0), (this.props[2] = 0), (this.props[3] = 0), (this.props[4] = 0), (this.props[5] = 1), (this.props[6] = 0), (this.props[7] = 0), (this.props[8] = 0), (this.props[9] = 0), (this.props[10] = 1), (this.props[11] = 0), (this.props[12] = 0), (this.props[13] = 0), (this.props[14] = 0), (this.props[15] = 1), this;
                                    }
                                    function r(i) {
                                        if (0 === i) return this;
                                        var s = t(i),
                                            a = e(i);
                                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                                    }
                                    function n(i) {
                                        if (0 === i) return this;
                                        var s = t(i),
                                            a = e(i);
                                        return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1);
                                    }
                                    function h(i) {
                                        if (0 === i) return this;
                                        var s = t(i),
                                            a = e(i);
                                        return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1);
                                    }
                                    function o(i) {
                                        if (0 === i) return this;
                                        var s = t(i),
                                            a = e(i);
                                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                                    }
                                    function l(t, e) {
                                        return this._t(1, e, t, 1, 0, 0);
                                    }
                                    function p(t, e) {
                                        return this.shear(i(t), i(e));
                                    }
                                    function f(s, a) {
                                        var r = t(a),
                                            n = e(a);
                                        return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                                    }
                                    function d(t, e, i) {
                                        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
                                    }
                                    function m(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                                        return (this.props[0] = t), (this.props[1] = e), (this.props[2] = i), (this.props[3] = s), (this.props[4] = a), (this.props[5] = r), (this.props[6] = n), (this.props[7] = h), (this.props[8] = o), (this.props[9] = l), (this.props[10] = p), (this.props[11] = f), (this.props[12] = d), (this.props[13] = m), (this.props[14] = c), (this.props[15] = u), this;
                                    }
                                    function c(t, e, i) {
                                        return (i = i || 0), 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this;
                                    }
                                    function u(t, e, i, s, a, r, n, h, o, l, p, f, d, m, c, u) {
                                        var g = this.props;
                                        if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === h && 0 === o && 0 === l && 1 === p && 0 === f) return (g[12] = g[12] * t + g[15] * d), (g[13] = g[13] * r + g[15] * m), (g[14] = g[14] * p + g[15] * c), (g[15] = g[15] * u), (this._identityCalculated = !1), this;
                                        var y = g[0],
                                            v = g[1],
                                            b = g[2],
                                            _ = g[3],
                                            k = g[4],
                                            A = g[5],
                                            M = g[6],
                                            C = g[7],
                                            P = g[8],
                                            x = g[9],
                                            S = g[10],
                                            E = g[11],
                                            F = g[12],
                                            D = g[13],
                                            w = g[14],
                                            T = g[15];
                                        return (g[0] = y * t + v * a + b * o + _ * d), (g[1] = y * e + v * r + b * l + _ * m), (g[2] = y * i + v * n + b * p + _ * c), (g[3] = y * s + v * h + b * f + _ * u), (g[4] = k * t + A * a + M * o + C * d), (g[5] = k * e + A * r + M * l + C * m), (g[6] = k * i + A * n + M * p + C * c), (g[7] = k * s + A * h + M * f + C * u), (g[8] = P * t + x * a + S * o + E * d), (g[9] = P * e + x * r + S * l + E * m), (g[10] = P * i + x * n + S * p + E * c), (g[11] = P * s + x * h + S * f + E * u), (g[12] = F * t + D * a + w * o + T * d), (g[13] = F * e + D * r + w * l + T * m), (g[14] = F * i + D * n + w * p + T * c), (g[15] = F * s + D * h + w * f + T * u), (this._identityCalculated = !1), this;
                                    }
                                    function g() {
                                        return this._identityCalculated || ((this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15])), (this._identityCalculated = !0)), this._identity;
                                    }
                                    function y(t) {
                                        for (var e = 0; e < 16; ) {
                                            if (t.props[e] !== this.props[e]) return !1;
                                            e += 1;
                                        }
                                        return !0;
                                    }
                                    function v(t) {
                                        var e;
                                        for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                                    }
                                    function b(t) {
                                        var e;
                                        for (e = 0; e < 16; e += 1) this.props[e] = t[e];
                                    }
                                    function _(t, e, i) {
                                        return { x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14] };
                                    }
                                    function k(t, e, i) {
                                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12];
                                    }
                                    function A(t, e, i) {
                                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13];
                                    }
                                    function M(t, e, i) {
                                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14];
                                    }
                                    function C() {
                                        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                            e = this.props[5] / t,
                                            i = -this.props[1] / t,
                                            s = -this.props[4] / t,
                                            a = this.props[0] / t,
                                            r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                            n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                            h = new N();
                                        return (h.props[0] = e), (h.props[1] = i), (h.props[4] = s), (h.props[5] = a), (h.props[12] = r), (h.props[13] = n), h;
                                    }
                                    function P(t) {
                                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
                                    }
                                    function x(t) {
                                        var e,
                                            i = t.length,
                                            s = [];
                                        for (e = 0; e < i; e += 1) s[e] = P(t[e]);
                                        return s;
                                    }
                                    function S(t, e, i) {
                                        var s = w("float32", 6);
                                        if (this.isIdentity()) (s[0] = t[0]), (s[1] = t[1]), (s[2] = e[0]), (s[3] = e[1]), (s[4] = i[0]), (s[5] = i[1]);
                                        else {
                                            var a = this.props[0],
                                                r = this.props[1],
                                                n = this.props[4],
                                                h = this.props[5],
                                                o = this.props[12],
                                                l = this.props[13];
                                            (s[0] = t[0] * a + t[1] * n + o), (s[1] = t[0] * r + t[1] * h + l), (s[2] = e[0] * a + e[1] * n + o), (s[3] = e[0] * r + e[1] * h + l), (s[4] = i[0] * a + i[1] * n + o), (s[5] = i[0] * r + i[1] * h + l);
                                        }
                                        return s;
                                    }
                                    function E(t, e, i) {
                                        return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]];
                                    }
                                    function F(t, e) {
                                        if (this.isIdentity()) return t + "," + e;
                                        var i = this.props;
                                        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100;
                                    }
                                    function D() {
                                        for (var t = 0, e = this.props, i = "matrix3d("; t < 16; ) (i += s(1e4 * e[t]) / 1e4), (i += 15 === t ? ")" : ","), (t += 1);
                                        return i;
                                    }
                                    function T(t) {
                                        return (t < 1e-6 && 0 < t) || (-1e-6 < t && t < 0) ? s(1e4 * t) / 1e4 : t;
                                    }
                                    function I() {
                                        var t = this.props;
                                        return "matrix(" + T(t[0]) + "," + T(t[1]) + "," + T(t[4]) + "," + T(t[5]) + "," + T(t[12]) + "," + T(t[13]) + ")";
                                    }
                                    return function () {
                                        (this.reset = a), (this.rotate = r), (this.rotateX = n), (this.rotateY = h), (this.rotateZ = o), (this.skew = p), (this.skewFromAxis = f), (this.shear = l), (this.scale = d), (this.setTransform = m), (this.translate = c), (this.transform = u), (this.applyToPoint = _), (this.applyToX = k), (this.applyToY = A), (this.applyToZ = M), (this.applyToPointArray = E), (this.applyToTriplePoints = S), (this.applyToPointStringified = F), (this.toCSS = D), (this.to2dCSS = I), (this.clone = v), (this.cloneFromProps = b), (this.equals = y), (this.inversePoints = x), (this.inversePoint = P), (this.getInverseMatrix = C), (this._t = this.transform), (this.isIdentity = g), (this._identity = !0), (this._identityCalculated = !1), (this.props = w("float32", 16)), this.reset();
                                    };
                                })();
                            !(function (t, e) {
                                var i,
                                    s = this,
                                    a = 256,
                                    r = 6,
                                    n = "random",
                                    h = e.pow(a, r),
                                    o = e.pow(2, 52),
                                    l = 2 * o,
                                    p = a - 1;
                                function f(t) {
                                    var e,
                                        i = t.length,
                                        s = this,
                                        r = 0,
                                        n = (s.i = s.j = 0),
                                        h = (s.S = []);
                                    for (i || (t = [i++]); r < a; ) h[r] = r++;
                                    for (r = 0; r < a; r++) (h[r] = h[(n = p & (n + t[r % i] + (e = h[r])))]), (h[n] = e);
                                    s.g = function (t) {
                                        for (var e, i = 0, r = s.i, n = s.j, h = s.S; t--; ) (e = h[(r = p & (r + 1))]), (i = i * a + h[p & ((h[r] = h[(n = p & (n + e))]) + (h[n] = e))]);
                                        return (s.i = r), (s.j = n), i;
                                    };
                                }
                                function d(t, e) {
                                    return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
                                }
                                function m(t, e) {
                                    for (var i, s = t + "", a = 0; a < s.length; ) e[p & a] = p & ((i ^= 19 * e[p & a]) + s.charCodeAt(a++));
                                    return c(e);
                                }
                                function c(t) {
                                    return String.fromCharCode.apply(0, t);
                                }
                                (e["seed" + n] = function (p, u, g) {
                                    var y = [],
                                        v = m(
                                            (function t(e, i) {
                                                var s,
                                                    a = [],
                                                    r = typeof e;
                                                if (i && "object" == r)
                                                    for (s in e)
                                                        try {
                                                            a.push(t(e[s], i - 1));
                                                        } catch (t) {}
                                                return a.length ? a : "string" == r ? e : e + "\0";
                                            })(
                                                (u = !0 === u ? { entropy: !0 } : u || {}).entropy
                                                    ? [p, c(t)]
                                                    : null === p
                                                      ? (function () {
                                                            try {
                                                                if (i) return c(i.randomBytes(a));
                                                                var e = new Uint8Array(a);
                                                                return (s.crypto || s.msCrypto).getRandomValues(e), c(e);
                                                            } catch (e) {
                                                                var r = s.navigator,
                                                                    n = r && r.plugins;
                                                                return [+new Date(), s, n, s.screen, c(t)];
                                                            }
                                                        })()
                                                      : p,
                                                3,
                                            ),
                                            y,
                                        ),
                                        b = new f(y),
                                        _ = function () {
                                            for (var t = b.g(r), e = h, i = 0; t < o; ) (t = (t + i) * a), (e *= a), (i = b.g(1));
                                            for (; l <= t; ) (t /= 2), (e /= 2), (i >>>= 1);
                                            return (t + i) / e;
                                        };
                                    return (
                                        (_.int32 = function () {
                                            return 0 | b.g(4);
                                        }),
                                        (_.quick = function () {
                                            return b.g(4) / 4294967296;
                                        }),
                                        (_.double = _),
                                        m(c(b.S), t),
                                        (
                                            u.pass ||
                                            g ||
                                            function (t, i, s, a) {
                                                return (
                                                    a &&
                                                        (a.S && d(a, b),
                                                        (t.state = function () {
                                                            return d(b, {});
                                                        })),
                                                    s ? ((e[n] = t), i) : t
                                                );
                                            }
                                        )(_, v, "global" in u ? u.global : this == e, u.state)
                                    );
                                }),
                                    m(e.random(), t);
                            })([], p);
                            var O = (function () {
                                var t = {
                                        getBezierEasing: function (t, i, s, a, r) {
                                            var n = r || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                                            if (e[n]) return e[n];
                                            var h = new p([t, i, s, a]);
                                            return (e[n] = h);
                                        },
                                    },
                                    e = {},
                                    i = 11,
                                    s = 1 / (i - 1),
                                    a = "function" == typeof Float32Array;
                                function r(t, e) {
                                    return 1 - 3 * e + 3 * t;
                                }
                                function n(t, e) {
                                    return 3 * e - 6 * t;
                                }
                                function h(t) {
                                    return 3 * t;
                                }
                                function o(t, e, i) {
                                    return ((r(e, i) * t + n(e, i)) * t + h(e)) * t;
                                }
                                function l(t, e, i) {
                                    return 3 * r(e, i) * t * t + 2 * n(e, i) * t + h(e);
                                }
                                function p(t) {
                                    (this._p = t), (this._mSampleValues = a ? new Float32Array(i) : new Array(i)), (this._precomputed = !1), (this.get = this.get.bind(this));
                                }
                                return (
                                    (p.prototype = {
                                        get: function (t) {
                                            var e = this._p[0],
                                                i = this._p[1],
                                                s = this._p[2],
                                                a = this._p[3];
                                            return this._precomputed || this._precompute(), e === i && s === a ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, a);
                                        },
                                        _precompute: function () {
                                            var t = this._p[0],
                                                e = this._p[1],
                                                i = this._p[2],
                                                s = this._p[3];
                                            (this._precomputed = !0), (t === e && i === s) || this._calcSampleValues();
                                        },
                                        _calcSampleValues: function () {
                                            for (var t = this._p[0], e = this._p[2], a = 0; a < i; ++a) this._mSampleValues[a] = o(a * s, t, e);
                                        },
                                        _getTForX: function (t) {
                                            for (var e = this._p[0], a = this._p[2], r = this._mSampleValues, n = 0, h = 1, p = i - 1; h !== p && r[h] <= t; ++h) n += s;
                                            var f = n + ((t - r[--h]) / (r[h + 1] - r[h])) * s,
                                                d = l(f, e, a);
                                            return 0.001 <= d
                                                ? (function (t, e, i, s) {
                                                      for (var a = 0; a < 4; ++a) {
                                                          var r = l(e, i, s);
                                                          if (0 === r) return e;
                                                          e -= (o(e, i, s) - t) / r;
                                                      }
                                                      return e;
                                                  })(t, f, e, a)
                                                : 0 === d
                                                  ? f
                                                  : (function (t, e, i, s, a) {
                                                        for (var r, n, h = 0; 0 < (r = o((n = e + (i - e) / 2), s, a) - t) ? (i = n) : (e = n), 1e-7 < Math.abs(r) && ++h < 10; );
                                                        return n;
                                                    })(t, n, n + s, e, a);
                                        },
                                    }),
                                    t
                                );
                            })();
                            function B(t, e) {
                                var i,
                                    s,
                                    a = t.length;
                                for (i = 0; i < a; i += 1) for (var r in (s = t[i].prototype)) s.hasOwnProperty(r) && (e.prototype[r] = s[r]);
                            }
                            !(function () {
                                for (var e = 0, i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !t.requestAnimationFrame; ++s) (t.requestAnimationFrame = t[i[s] + "RequestAnimationFrame"]), (t.cancelAnimationFrame = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"]);
                                t.requestAnimationFrame ||
                                    (t.requestAnimationFrame = function (t, i) {
                                        var s = new Date().getTime(),
                                            a = Math.max(0, 16 - (s - e)),
                                            r = setTimeout(function () {
                                                t(s + a);
                                            }, a);
                                        return (e = s + a), r;
                                    }),
                                    t.cancelAnimationFrame ||
                                        (t.cancelAnimationFrame = function (t) {
                                            clearTimeout(t);
                                        });
                            })();
                            var q = (function () {
                                    function t(t, e, i, s, a, r) {
                                        var n = t * s + e * a + i * r - a * s - r * t - i * e;
                                        return -0.001 < n && n < 0.001;
                                    }
                                    Math;
                                    var e = function (t, e, i, s) {
                                        var a,
                                            r,
                                            o,
                                            l,
                                            p,
                                            d,
                                            m = f,
                                            c = 0,
                                            u = [],
                                            g = [],
                                            y = St.newElement();
                                        for (o = i.length, a = 0; a < m; a += 1) {
                                            for (p = a / (m - 1), r = d = 0; r < o; r += 1) (l = n(1 - p, 3) * t[r] + 3 * n(1 - p, 2) * p * i[r] + 3 * (1 - p) * n(p, 2) * s[r] + n(p, 3) * e[r]), (u[r] = l), null !== g[r] && (d += n(u[r] - g[r], 2)), (g[r] = u[r]);
                                            d && (c += d = h(d)), (y.percents[a] = p), (y.lengths[a] = c);
                                        }
                                        return (y.addedLength = c), y;
                                    };
                                    function i(t) {
                                        (this.segmentLength = 0), (this.points = new Array(t));
                                    }
                                    function s(t, e) {
                                        (this.partialLength = t), (this.point = e);
                                    }
                                    var a,
                                        r =
                                            ((a = {}),
                                            function (e, r, o, l) {
                                                var p = (e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + o[0] + "_" + o[1] + "_" + l[0] + "_" + l[1]).replace(/\./g, "p");
                                                if (!a[p]) {
                                                    var d,
                                                        m,
                                                        c,
                                                        u,
                                                        g,
                                                        y,
                                                        v,
                                                        b = f,
                                                        _ = 0,
                                                        k = null;
                                                    2 === e.length && (e[0] != r[0] || e[1] != r[1]) && t(e[0], e[1], r[0], r[1], e[0] + o[0], e[1] + o[1]) && t(e[0], e[1], r[0], r[1], r[0] + l[0], r[1] + l[1]) && (b = 2);
                                                    var A = new i(b);
                                                    for (c = o.length, d = 0; d < b; d += 1) {
                                                        for (v = T(c), g = d / (b - 1), m = y = 0; m < c; m += 1) (u = n(1 - g, 3) * e[m] + 3 * n(1 - g, 2) * g * (e[m] + o[m]) + 3 * (1 - g) * n(g, 2) * (r[m] + l[m]) + n(g, 3) * r[m]), (v[m] = u), null !== k && (y += n(v[m] - k[m], 2));
                                                        (_ += y = h(y)), (A.points[d] = new s(y, v)), (k = v);
                                                    }
                                                    (A.segmentLength = _), (a[p] = A);
                                                }
                                                return a[p];
                                            });
                                    function l(t, e) {
                                        var i = e.percents,
                                            s = e.lengths,
                                            a = i.length,
                                            r = o((a - 1) * t),
                                            n = t * e.addedLength,
                                            h = 0;
                                        if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                                        for (var l = s[r] > n ? -1 : 1, p = !0; p; )
                                            if ((s[r] <= n && s[r + 1] > n ? ((h = (n - s[r]) / (s[r + 1] - s[r])), (p = !1)) : (r += l), r < 0 || a - 1 <= r)) {
                                                if (r === a - 1) return i[r];
                                                p = !1;
                                            }
                                        return i[r] + (i[r + 1] - i[r]) * h;
                                    }
                                    var p = w("float32", 8);
                                    return {
                                        getSegmentsLength: function (t) {
                                            var i,
                                                s = xt.newElement(),
                                                a = t.c,
                                                r = t.v,
                                                n = t.o,
                                                h = t.i,
                                                o = t._length,
                                                l = s.lengths,
                                                p = 0;
                                            for (i = 0; i < o - 1; i += 1) (l[i] = e(r[i], r[i + 1], n[i], h[i + 1])), (p += l[i].addedLength);
                                            return a && o && ((l[i] = e(r[i], r[0], n[i], h[0])), (p += l[i].addedLength)), (s.totalLength = p), s;
                                        },
                                        getNewSegment: function (t, e, i, s, a, r, n) {
                                            var h,
                                                o = l((a = a < 0 ? 0 : 1 < a ? 1 : a), n),
                                                f = l((r = 1 < r ? 1 : r), n),
                                                d = t.length,
                                                m = 1 - o,
                                                c = 1 - f,
                                                u = m * m * m,
                                                g = o * m * m * 3,
                                                y = o * o * m * 3,
                                                v = o * o * o,
                                                b = m * m * c,
                                                _ = o * m * c + m * o * c + m * m * f,
                                                k = o * o * c + m * o * f + o * m * f,
                                                A = o * o * f,
                                                M = m * c * c,
                                                C = o * c * c + m * f * c + m * c * f,
                                                P = o * f * c + m * f * f + o * c * f,
                                                x = o * f * f,
                                                S = c * c * c,
                                                E = f * c * c + c * f * c + c * c * f,
                                                F = f * f * c + c * f * f + f * c * f,
                                                D = f * f * f;
                                            for (h = 0; h < d; h += 1) (p[4 * h] = Math.round(1e3 * (u * t[h] + g * i[h] + y * s[h] + v * e[h])) / 1e3), (p[4 * h + 1] = Math.round(1e3 * (b * t[h] + _ * i[h] + k * s[h] + A * e[h])) / 1e3), (p[4 * h + 2] = Math.round(1e3 * (M * t[h] + C * i[h] + P * s[h] + x * e[h])) / 1e3), (p[4 * h + 3] = Math.round(1e3 * (S * t[h] + E * i[h] + F * s[h] + D * e[h])) / 1e3);
                                            return p;
                                        },
                                        getPointInSegment: function (t, e, i, s, a, r) {
                                            var n = l(a, r),
                                                h = 1 - n;
                                            return [Math.round(1e3 * (h * h * h * t[0] + (n * h * h + h * n * h + h * h * n) * i[0] + (n * n * h + h * n * n + n * h * n) * s[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (h * h * h * t[1] + (n * h * h + h * n * h + h * h * n) * i[1] + (n * n * h + h * n * n + n * h * n) * s[1] + n * n * n * e[1])) / 1e3];
                                        },
                                        buildBezierData: r,
                                        pointOnLine2D: t,
                                        pointOnLine3D: function (e, i, s, a, r, n, h, o, l) {
                                            if (0 === s && 0 === n && 0 === l) return t(e, i, a, r, h, o);
                                            var p,
                                                f = Math.sqrt(Math.pow(a - e, 2) + Math.pow(r - i, 2) + Math.pow(n - s, 2)),
                                                d = Math.sqrt(Math.pow(h - e, 2) + Math.pow(o - i, 2) + Math.pow(l - s, 2)),
                                                m = Math.sqrt(Math.pow(h - a, 2) + Math.pow(o - r, 2) + Math.pow(l - n, 2));
                                            return -1e-4 < (p = d < f ? (m < f ? f - d - m : m - d - f) : d < m ? m - d - f : d - f - m) && p < 1e-4;
                                        },
                                    };
                                })(),
                                j = (function () {
                                    function t(a, r, n) {
                                        var h,
                                            o,
                                            l,
                                            p,
                                            f,
                                            d,
                                            m,
                                            c = a.length;
                                        for (o = 0; o < c; o += 1)
                                            if ("ks" in (h = a[o]) && !h.completed) {
                                                if (((h.completed = !0), h.tt && (a[o - 1].td = h.tt), h.hasMask)) {
                                                    var u = h.masksProperties;
                                                    for (p = u.length, l = 0; l < p; l += 1)
                                                        if (u[l].pt.k.i) s(u[l].pt.k);
                                                        else for (d = u[l].pt.k.length, f = 0; f < d; f += 1) u[l].pt.k[f].s && s(u[l].pt.k[f].s[0]), u[l].pt.k[f].e && s(u[l].pt.k[f].e[0]);
                                                }
                                                0 === h.ty ? ((h.layers = e(h.refId, r)), t(h.layers, r, n)) : 4 === h.ty ? i(h.shapes) : 5 == h.ty && (0 !== (m = h).t.a.length || "m" in m.t.p || (m.singleShape = !0));
                                            }
                                    }
                                    function e(t, e) {
                                        for (var i = 0, s = e.length; i < s; ) {
                                            if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : ((e[i].layers.__used = !0), e[i].layers);
                                            i += 1;
                                        }
                                    }
                                    function i(t) {
                                        var e, a, r;
                                        for (e = t.length - 1; 0 <= e; e -= 1)
                                            if ("sh" == t[e].ty)
                                                if (t[e].ks.k.i) s(t[e].ks.k);
                                                else for (r = t[e].ks.k.length, a = 0; a < r; a += 1) t[e].ks.k[a].s && s(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && s(t[e].ks.k[a].e[0]);
                                            else "gr" == t[e].ty && i(t[e].it);
                                    }
                                    function s(t) {
                                        var e,
                                            i = t.i.length;
                                        for (e = 0; e < i; e += 1) (t.i[e][0] += t.v[e][0]), (t.i[e][1] += t.v[e][1]), (t.o[e][0] += t.v[e][0]), (t.o[e][1] += t.v[e][1]);
                                    }
                                    function a(t, e) {
                                        var i = e ? e.split(".") : [100, 100, 100];
                                        return t[0] > i[0] || (!(i[0] > t[0]) && (t[1] > i[1] || (!(i[1] > t[1]) && (t[2] > i[2] || (!(i[2] > t[2]) && void 0)))));
                                    }
                                    var r,
                                        n = (function () {
                                            var t = [4, 4, 14];
                                            function e(t) {
                                                var e,
                                                    i,
                                                    s,
                                                    a = t.length;
                                                for (e = 0; e < a; e += 1) 5 === t[e].ty && ((s = (i = t[e]).t.d), (i.t.d = { k: [{ s, t: 0 }] }));
                                            }
                                            return function (i) {
                                                if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                    var s,
                                                        r = i.assets.length;
                                                    for (s = 0; s < r; s += 1) i.assets[s].layers && e(i.assets[s].layers);
                                                }
                                            };
                                        })(),
                                        h =
                                            ((r = [4, 7, 99]),
                                            function (t) {
                                                if (t.chars && !a(r, t.v)) {
                                                    var e,
                                                        i,
                                                        n,
                                                        h,
                                                        o,
                                                        l = t.chars.length;
                                                    for (e = 0; e < l; e += 1) if (t.chars[e].data && t.chars[e].data.shapes) for (n = (o = t.chars[e].data.shapes[0].it).length, i = 0; i < n; i += 1) (h = o[i].ks.k).__converted || (s(o[i].ks.k), (h.__converted = !0));
                                                }
                                            }),
                                        o = (function () {
                                            var t = [4, 1, 9];
                                            function e(t) {
                                                var i,
                                                    s,
                                                    a,
                                                    r = t.length;
                                                for (i = 0; i < r; i += 1)
                                                    if ("gr" === t[i].ty) e(t[i].it);
                                                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                        if (t[i].c.k && t[i].c.k[0].i) for (a = t[i].c.k.length, s = 0; s < a; s += 1) t[i].c.k[s].s && ((t[i].c.k[s].s[0] /= 255), (t[i].c.k[s].s[1] /= 255), (t[i].c.k[s].s[2] /= 255), (t[i].c.k[s].s[3] /= 255)), t[i].c.k[s].e && ((t[i].c.k[s].e[0] /= 255), (t[i].c.k[s].e[1] /= 255), (t[i].c.k[s].e[2] /= 255), (t[i].c.k[s].e[3] /= 255));
                                                        else (t[i].c.k[0] /= 255), (t[i].c.k[1] /= 255), (t[i].c.k[2] /= 255), (t[i].c.k[3] /= 255);
                                            }
                                            function i(t) {
                                                var i,
                                                    s = t.length;
                                                for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes);
                                            }
                                            return function (e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s,
                                                        r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers);
                                                }
                                            };
                                        })(),
                                        l = (function () {
                                            var t = [4, 4, 18];
                                            function e(t) {
                                                var i, s, a;
                                                for (i = t.length - 1; 0 <= i; i -= 1)
                                                    if ("sh" == t[i].ty)
                                                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                        else for (a = t[i].ks.k.length, s = 0; s < a; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                                    else "gr" == t[i].ty && e(t[i].it);
                                            }
                                            function i(t) {
                                                var i,
                                                    s,
                                                    a,
                                                    r,
                                                    n,
                                                    h,
                                                    o = t.length;
                                                for (s = 0; s < o; s += 1) {
                                                    if ((i = t[s]).hasMask) {
                                                        var l = i.masksProperties;
                                                        for (r = l.length, a = 0; a < r; a += 1)
                                                            if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                                            else for (h = l[a].pt.k.length, n = 0; n < h; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl);
                                                    }
                                                    4 === i.ty && e(i.shapes);
                                                }
                                            }
                                            return function (e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s,
                                                        r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers);
                                                }
                                            };
                                        })(),
                                        p = {
                                            completeData: function (e, i) {
                                                e.__complete || (o(e), n(e), h(e), l(e), t(e.layers, e.assets, i), (e.__complete = !0));
                                            },
                                        };
                                    return (p.checkColors = o), (p.checkChars = h), (p.checkShapes = l), (p.completeLayers = t), p;
                                })(),
                                G = (function () {
                                    var t = { w: 0, size: 0, shapes: [] },
                                        e = [];
                                    function i(t, e) {
                                        var i = L("span");
                                        i.style.fontFamily = e;
                                        var s = L("span");
                                        (s.innerHTML = "giItT1WQy@!-/#"), (i.style.position = "absolute"), (i.style.left = "-10000px"), (i.style.top = "-10000px"), (i.style.fontSize = "300px"), (i.style.fontVariant = "normal"), (i.style.fontStyle = "normal"), (i.style.fontWeight = "normal"), (i.style.letterSpacing = "0"), i.appendChild(s), document.body.appendChild(i);
                                        var a = s.offsetWidth;
                                        return (
                                            (s.style.fontFamily =
                                                (function (t) {
                                                    var e,
                                                        i = t.split(","),
                                                        s = i.length,
                                                        a = [];
                                                    for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                                                    return a.join(",");
                                                })(t) +
                                                ", " +
                                                e),
                                            { node: s, w: a, parent: i }
                                        );
                                    }
                                    e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                                    var s = function () {
                                        (this.fonts = []), (this.chars = null), (this.typekitLoaded = 0), (this.isLoaded = !1), (this.initTime = Date.now()), (this.setIsLoadedBinded = this.setIsLoaded.bind(this)), (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
                                    };
                                    return (
                                        (s.getCombinedCharacterCodes = function () {
                                            return e;
                                        }),
                                        (s.prototype = {
                                            addChars: function (t) {
                                                if (t) {
                                                    this.chars || (this.chars = []);
                                                    var e,
                                                        i,
                                                        s,
                                                        a = t.length,
                                                        r = this.chars.length;
                                                    for (e = 0; e < a; e += 1) {
                                                        for (i = 0, s = !1; i < r; ) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), (i += 1);
                                                        s || (this.chars.push(t[e]), (r += 1));
                                                    }
                                                }
                                            },
                                            addFonts: function (t, e) {
                                                if (t) {
                                                    if (this.chars) return (this.isLoaded = !0), void (this.fonts = t.list);
                                                    var s,
                                                        a,
                                                        r,
                                                        n,
                                                        h = t.list,
                                                        o = h.length,
                                                        l = o;
                                                    for (s = 0; s < o; s += 1) {
                                                        var p,
                                                            f,
                                                            d = !0;
                                                        if (((h[s].loaded = !1), (h[s].monoCase = i(h[s].fFamily, "monospace")), (h[s].sansCase = i(h[s].fFamily, "sans-serif")), h[s].fPath)) {
                                                            if ("p" === h[s].fOrigin || 3 === h[s].origin) {
                                                                if ((0 < (p = document.querySelectorAll('style[f-forigin="p"][f-family="' + h[s].fFamily + '"], style[f-origin="3"][f-family="' + h[s].fFamily + '"]')).length && (d = !1), d)) {
                                                                    var m = L("style");
                                                                    m.setAttribute("f-forigin", h[s].fOrigin), m.setAttribute("f-origin", h[s].origin), m.setAttribute("f-family", h[s].fFamily), (m.type = "text/css"), (m.innerHTML = "@font-face {font-family: " + h[s].fFamily + "; font-style: normal; src: url('" + h[s].fPath + "');}"), e.appendChild(m);
                                                                }
                                                            } else if ("g" === h[s].fOrigin || 1 === h[s].origin) {
                                                                for (p = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), f = 0; f < p.length; f++) -1 !== p[f].href.indexOf(h[s].fPath) && (d = !1);
                                                                if (d) {
                                                                    var c = L("link");
                                                                    c.setAttribute("f-forigin", h[s].fOrigin), c.setAttribute("f-origin", h[s].origin), (c.type = "text/css"), (c.rel = "stylesheet"), (c.href = h[s].fPath), document.body.appendChild(c);
                                                                }
                                                            } else if ("t" === h[s].fOrigin || 2 === h[s].origin) {
                                                                for (p = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), f = 0; f < p.length; f++) h[s].fPath === p[f].src && (d = !1);
                                                                if (d) {
                                                                    var u = L("link");
                                                                    u.setAttribute("f-forigin", h[s].fOrigin), u.setAttribute("f-origin", h[s].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", h[s].fPath), e.appendChild(u);
                                                                }
                                                            }
                                                        } else (h[s].loaded = !0), (l -= 1);
                                                        (h[s].helper = ((a = e), (r = h[s]), (n = void 0), ((n = I("text")).style.fontSize = "100px"), n.setAttribute("font-family", r.fFamily), n.setAttribute("font-style", r.fStyle), n.setAttribute("font-weight", r.fWeight), (n.textContent = "1"), r.fClass ? ((n.style.fontFamily = "inherit"), n.setAttribute("class", r.fClass)) : (n.style.fontFamily = r.fFamily), a.appendChild(n), (L("canvas").getContext("2d").font = r.fWeight + " " + r.fStyle + " 100px " + r.fFamily), n)), (h[s].cache = {}), this.fonts.push(h[s]);
                                                    }
                                                    0 === l ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
                                                } else this.isLoaded = !0;
                                            },
                                            getCharData: function (e, i, s) {
                                                for (var a = 0, r = this.chars.length; a < r; ) {
                                                    if (this.chars[a].ch === e && this.chars[a].style === i && this.chars[a].fFamily === s) return this.chars[a];
                                                    a += 1;
                                                }
                                                return (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) && console && console.warn, t;
                                            },
                                            getFontByName: function (t) {
                                                for (var e = 0, i = this.fonts.length; e < i; ) {
                                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                                    e += 1;
                                                }
                                                return this.fonts[0];
                                            },
                                            measureText: function (t, e, i) {
                                                var s = this.getFontByName(e),
                                                    a = t.charCodeAt(0);
                                                if (!s.cache[a + 1]) {
                                                    var r = s.helper;
                                                    if (" " === t) {
                                                        r.textContent = "|" + t + "|";
                                                        var n = r.getComputedTextLength();
                                                        r.textContent = "||";
                                                        var h = r.getComputedTextLength();
                                                        s.cache[a + 1] = (n - h) / 100;
                                                    } else (r.textContent = t), (s.cache[a + 1] = r.getComputedTextLength() / 100);
                                                }
                                                return s.cache[a + 1] * i;
                                            },
                                            checkLoadedFonts: function () {
                                                var t,
                                                    e,
                                                    i,
                                                    s = this.fonts.length,
                                                    a = s;
                                                for (t = 0; t < s; t += 1) this.fonts[t].loaded ? (a -= 1) : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? (this.fonts[t].loaded = !0) : ((e = this.fonts[t].monoCase.node), (i = this.fonts[t].monoCase.w), e.offsetWidth !== i ? ((a -= 1), (this.fonts[t].loaded = !0)) : ((e = this.fonts[t].sansCase.node), (i = this.fonts[t].sansCase.w), e.offsetWidth !== i && ((a -= 1), (this.fonts[t].loaded = !0))), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                                0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                                            },
                                            setIsLoaded: function () {
                                                this.isLoaded = !0;
                                            },
                                        }),
                                        s
                                    );
                                })(),
                                W = (function () {
                                    var t = a,
                                        e = Math.abs;
                                    function i(t, e) {
                                        var i,
                                            a = this.offsetTime;
                                        "multidimensional" === this.propType && (i = w("float32", this.pv.length));
                                        for (var r, n, h, o, l, p, f, m, c = e.lastIndex, u = c, g = this.keyframes.length - 1, y = !0; y; ) {
                                            if (((r = this.keyframes[u]), (n = this.keyframes[u + 1]), u === g - 1 && t >= n.t - a)) {
                                                r.h && (r = n), (c = 0);
                                                break;
                                            }
                                            if (n.t - a > t) {
                                                c = u;
                                                break;
                                            }
                                            u < g - 1 ? (u += 1) : ((c = 0), (y = !1));
                                        }
                                        var v,
                                            b,
                                            _,
                                            k,
                                            A,
                                            M,
                                            C,
                                            P,
                                            x,
                                            S,
                                            E = n.t - a,
                                            F = r.t - a;
                                        if (r.to) {
                                            r.bezierData || (r.bezierData = q.buildBezierData(r.s, n.s || r.e, r.to, r.ti));
                                            var D = r.bezierData;
                                            if (E <= t || t < F) {
                                                var T = E <= t ? D.points.length - 1 : 0;
                                                for (o = D.points[T].point.length, h = 0; h < o; h += 1) i[h] = D.points[T].point[h];
                                            } else {
                                                r.__fnct ? (m = r.__fnct) : ((m = O.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get), (r.__fnct = m)), (l = m((t - F) / (E - F)));
                                                var I,
                                                    L = D.segmentLength * l,
                                                    R = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
                                                for (f = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, y = !0, p = D.points.length; y; ) {
                                                    if (((R += D.points[f].partialLength), 0 === L || 0 === l || f === D.points.length - 1)) {
                                                        for (o = D.points[f].point.length, h = 0; h < o; h += 1) i[h] = D.points[f].point[h];
                                                        break;
                                                    }
                                                    if (R <= L && L < R + D.points[f + 1].partialLength) {
                                                        for (I = (L - R) / D.points[f + 1].partialLength, o = D.points[f].point.length, h = 0; h < o; h += 1) i[h] = D.points[f].point[h] + (D.points[f + 1].point[h] - D.points[f].point[h]) * I;
                                                        break;
                                                    }
                                                    f < p - 1 ? (f += 1) : (y = !1);
                                                }
                                                (e._lastPoint = f), (e._lastAddedLength = R - D.points[f].partialLength), (e._lastKeyframeIndex = u);
                                            }
                                        } else {
                                            var z, V, N, B, j;
                                            if (((g = r.s.length), (v = n.s || r.e), this.sh && 1 !== r.h))
                                                E <= t
                                                    ? ((i[0] = v[0]), (i[1] = v[1]), (i[2] = v[2]))
                                                    : t <= F
                                                      ? ((i[0] = r.s[0]), (i[1] = r.s[1]), (i[2] = r.s[2]))
                                                      : ((b = i),
                                                        (_ = (function (t, e, i) {
                                                            var s,
                                                                a,
                                                                r,
                                                                n,
                                                                h,
                                                                o = [],
                                                                l = t[0],
                                                                p = t[1],
                                                                f = t[2],
                                                                d = t[3],
                                                                m = e[0],
                                                                c = e[1],
                                                                u = e[2],
                                                                g = e[3];
                                                            return (a = l * m + p * c + f * u + d * g) < 0 && ((a = -a), (m = -m), (c = -c), (u = -u), (g = -g)), (h = 1e-6 < 1 - a ? ((s = Math.acos(a)), (r = Math.sin(s)), (n = Math.sin((1 - i) * s) / r), Math.sin(i * s) / r) : ((n = 1 - i), i)), (o[0] = n * l + h * m), (o[1] = n * p + h * c), (o[2] = n * f + h * u), (o[3] = n * d + h * g), o;
                                                        })(s(r.s), s(v), (t - F) / (E - F))),
                                                        (k = _[0]),
                                                        (A = _[1]),
                                                        (M = _[2]),
                                                        (C = _[3]),
                                                        (P = Math.atan2(2 * A * C - 2 * k * M, 1 - 2 * A * A - 2 * M * M)),
                                                        (x = Math.asin(2 * k * A + 2 * M * C)),
                                                        (S = Math.atan2(2 * k * C - 2 * A * M, 1 - 2 * k * k - 2 * M * M)),
                                                        (b[0] = P / d),
                                                        (b[1] = x / d),
                                                        (b[2] = S / d));
                                            else for (u = 0; u < g; u += 1) 1 !== r.h && (l = E <= t ? 1 : t < F ? 0 : (r.o.x.constructor === Array ? (r.__fnct || (r.__fnct = []), r.__fnct[u] ? (m = r.__fnct[u]) : ((z = void 0 === r.o.x[u] ? r.o.x[0] : r.o.x[u]), (V = void 0 === r.o.y[u] ? r.o.y[0] : r.o.y[u]), (N = void 0 === r.i.x[u] ? r.i.x[0] : r.i.x[u]), (B = void 0 === r.i.y[u] ? r.i.y[0] : r.i.y[u]), (m = O.getBezierEasing(z, V, N, B).get), (r.__fnct[u] = m))) : r.__fnct ? (m = r.__fnct) : ((z = r.o.x), (V = r.o.y), (N = r.i.x), (B = r.i.y), (m = O.getBezierEasing(z, V, N, B).get), (r.__fnct = m)), m((t - F) / (E - F)))), (v = n.s || r.e), (j = 1 === r.h ? r.s[u] : r.s[u] + (v[u] - r.s[u]) * l), "multidimensional" === this.propType ? (i[u] = j) : (i = j);
                                        }
                                        return (e.lastIndex = c), i;
                                    }
                                    function s(t) {
                                        var e = t[0] * d,
                                            i = t[1] * d,
                                            s = t[2] * d,
                                            a = Math.cos(e / 2),
                                            r = Math.cos(i / 2),
                                            n = Math.cos(s / 2),
                                            h = Math.sin(e / 2),
                                            o = Math.sin(i / 2),
                                            l = Math.sin(s / 2);
                                        return [h * o * n + a * r * l, h * r * n + a * o * l, a * o * n - h * r * l, a * r * n - h * o * l];
                                    }
                                    function r() {
                                        var e = this.comp.renderedFrame - this.offsetTime,
                                            i = this.keyframes[0].t - this.offsetTime,
                                            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                        if (!(e === this._caching.lastFrame || (this._caching.lastFrame !== t && ((this._caching.lastFrame >= s && s <= e) || (this._caching.lastFrame < i && e < i))))) {
                                            this._caching.lastFrame >= e && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                                            var a = this.interpolateValue(e, this._caching);
                                            this.pv = a;
                                        }
                                        return (this._caching.lastFrame = e), this.pv;
                                    }
                                    function n(t) {
                                        var i;
                                        if ("unidimensional" === this.propType) (i = t * this.mult), 1e-5 < e(this.v - i) && ((this.v = i), (this._mdf = !0));
                                        else for (var s = 0, a = this.v.length; s < a; ) (i = t[s] * this.mult), 1e-5 < e(this.v[s] - i) && ((this.v[s] = i), (this._mdf = !0)), (s += 1);
                                    }
                                    function h() {
                                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                            if (this.lock) this.setVValue(this.pv);
                                            else {
                                                (this.lock = !0), (this._mdf = this._isFirstFrame);
                                                var t,
                                                    e = this.effectsSequence.length,
                                                    i = this.kf ? this.pv : this.data.k;
                                                for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                                this.setVValue(i), (this._isFirstFrame = !1), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                                            }
                                    }
                                    function o(t) {
                                        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                                    }
                                    function l(t, e, i, s) {
                                        (this.propType = "unidimensional"), (this.mult = i || 1), (this.data = e), (this.v = i ? e.k * i : e.k), (this.pv = e.k), (this._mdf = !1), (this.elem = t), (this.container = s), (this.comp = t.comp), (this.k = !1), (this.kf = !1), (this.vel = 0), (this.effectsSequence = []), (this._isFirstFrame = !0), (this.getValue = h), (this.setVValue = n), (this.addEffect = o);
                                    }
                                    function p(t, e, i, s) {
                                        (this.propType = "multidimensional"), (this.mult = i || 1), (this.data = e), (this._mdf = !1), (this.elem = t), (this.container = s), (this.comp = t.comp), (this.k = !1), (this.kf = !1), (this.frameId = -1);
                                        var a,
                                            r = e.k.length;
                                        for (this.v = w("float32", r), this.pv = w("float32", r), w("float32", r), this.vel = w("float32", r), a = 0; a < r; a += 1) (this.v[a] = e.k[a] * this.mult), (this.pv[a] = e.k[a]);
                                        (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = h), (this.setVValue = n), (this.addEffect = o);
                                    }
                                    function f(e, s, a, l) {
                                        (this.propType = "unidimensional"), (this.keyframes = s.k), (this.offsetTime = e.data.st), (this.frameId = -1), (this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }), (this.k = !0), (this.kf = !0), (this.data = s), (this.mult = a || 1), (this.elem = e), (this.container = l), (this.comp = e.comp), (this.v = t), (this.pv = t), (this._isFirstFrame = !0), (this.getValue = h), (this.setVValue = n), (this.interpolateValue = i), (this.effectsSequence = [r.bind(this)]), (this.addEffect = o);
                                    }
                                    function m(e, s, a, l) {
                                        this.propType = "multidimensional";
                                        var p,
                                            f,
                                            d,
                                            m,
                                            c,
                                            u = s.k.length;
                                        for (p = 0; p < u - 1; p += 1) s.k[p].to && s.k[p].s && s.k[p + 1] && s.k[p + 1].s && ((f = s.k[p].s), (d = s.k[p + 1].s), (m = s.k[p].to), (c = s.k[p].ti), ((2 === f.length && (f[0] !== d[0] || f[1] !== d[1]) && q.pointOnLine2D(f[0], f[1], d[0], d[1], f[0] + m[0], f[1] + m[1]) && q.pointOnLine2D(f[0], f[1], d[0], d[1], d[0] + c[0], d[1] + c[1])) || (3 === f.length && (f[0] !== d[0] || f[1] !== d[1] || f[2] !== d[2]) && q.pointOnLine3D(f[0], f[1], f[2], d[0], d[1], d[2], f[0] + m[0], f[1] + m[1], f[2] + m[2]) && q.pointOnLine3D(f[0], f[1], f[2], d[0], d[1], d[2], d[0] + c[0], d[1] + c[1], d[2] + c[2]))) && ((s.k[p].to = null), (s.k[p].ti = null)), f[0] === d[0] && f[1] === d[1] && 0 === m[0] && 0 === m[1] && 0 === c[0] && 0 === c[1] && (2 === f.length || (f[2] === d[2] && 0 === m[2] && 0 === c[2])) && ((s.k[p].to = null), (s.k[p].ti = null)));
                                        (this.effectsSequence = [r.bind(this)]), (this.keyframes = s.k), (this.offsetTime = e.data.st), (this.k = !0), (this.kf = !0), (this._isFirstFrame = !0), (this.mult = a || 1), (this.elem = e), (this.container = l), (this.comp = e.comp), (this.getValue = h), (this.setVValue = n), (this.interpolateValue = i), (this.frameId = -1);
                                        var g = s.k[0].s.length;
                                        for (this.v = w("float32", g), this.pv = w("float32", g), p = 0; p < g; p += 1) (this.v[p] = t), (this.pv[p] = t);
                                        (this._caching = { lastFrame: t, lastIndex: 0, value: w("float32", g) }), (this.addEffect = o);
                                    }
                                    return {
                                        getProp: function (t, e, i, s, a) {
                                            var r;
                                            if (e.k.length)
                                                if ("number" == typeof e.k[0]) r = new p(t, e, s, a);
                                                else
                                                    switch (i) {
                                                        case 0:
                                                            r = new f(t, e, s, a);
                                                            break;
                                                        case 1:
                                                            r = new m(t, e, s, a);
                                                    }
                                            else r = new l(t, e, s, a);
                                            return r.effectsSequence.length && a.addDynamicProperty(r), r;
                                        },
                                    };
                                })(),
                                X = (function () {
                                    var t = [0, 0];
                                    function e(t, e, i) {
                                        if (((this.elem = t), (this.frameId = -1), (this.propType = "transform"), (this.data = e), (this.v = new N()), (this.pre = new N()), (this.appliedTransformations = 0), this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? ((this.px = W.getProp(t, e.p.x, 0, 0, this)), (this.py = W.getProp(t, e.p.y, 0, 0, this)), e.p.z && (this.pz = W.getProp(t, e.p.z, 0, 0, this))) : (this.p = W.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this)), e.rx)) {
                                            if (((this.rx = W.getProp(t, e.rx, 0, d, this)), (this.ry = W.getProp(t, e.ry, 0, d, this)), (this.rz = W.getProp(t, e.rz, 0, d, this)), e.or.k[0].ti)) {
                                                var s,
                                                    a = e.or.k.length;
                                                for (s = 0; s < a; s += 1) e.or.k[s].to = e.or.k[s].ti = null;
                                            }
                                            (this.or = W.getProp(t, e.or, 1, d, this)), (this.or.sh = !0);
                                        } else this.r = W.getProp(t, e.r || { k: 0 }, 0, d, this);
                                        e.sk && ((this.sk = W.getProp(t, e.sk, 0, d, this)), (this.sa = W.getProp(t, e.sa, 0, d, this))), (this.a = W.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this)), (this.s = W.getProp(t, e.s || { k: [100, 100, 100] }, 1, 0.01, this)), e.o ? (this.o = W.getProp(t, e.o, 0, 0.01, t)) : (this.o = { _mdf: !1, v: 1 }), (this._isDirty = !0), this.dynamicProperties.length || this.getValue(!0);
                                    }
                                    return (
                                        (e.prototype = {
                                            applyToMatrix: function (t) {
                                                var e = this._mdf;
                                                this.iterateDynamicProperties(), (this._mdf = this._mdf || e), this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? (this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0)) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                                            },
                                            getValue: function (e) {
                                                if (this.elem.globalData.frameId !== this.frameId) {
                                                    if ((this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)), this.iterateDynamicProperties(), this._mdf || e)) {
                                                        if ((this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented)) {
                                                            var i,
                                                                s,
                                                                a = this.elem.globalData.frameRate;
                                                            if (this.p && this.p.keyframes && this.p.getValueAtTime) s = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? ((i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / a, 0)), this.p.getValueAtTime(this.p.keyframes[0].t / a, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? ((i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / a, 0)), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / a, 0)) : ((i = this.p.pv), this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / a, this.p.offsetTime));
                                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                                (i = []), (s = []);
                                                                var r = this.px,
                                                                    n = this.py;
                                                                r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? ((i[0] = r.getValueAtTime((r.keyframes[0].t + 0.01) / a, 0)), (i[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / a, 0)), (s[0] = r.getValueAtTime(r.keyframes[0].t / a, 0)), (s[1] = n.getValueAtTime(n.keyframes[0].t / a, 0))) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? ((i[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / a, 0)), (i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / a, 0)), (s[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - 0.01) / a, 0)), (s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / a, 0))) : ((i = [r.pv, n.pv]), (s[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - 0.01) / a, r.offsetTime)), (s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / a, n.offsetTime)));
                                                            } else i = s = t;
                                                            this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                                                        }
                                                        this.data.p && this.data.p.s ? (this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0)) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                                                    }
                                                    this.frameId = this.elem.globalData.frameId;
                                                }
                                            },
                                            precalculateMatrix: function () {
                                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), (this.appliedTransformations = 1), !this.s.effectsSequence.length)) {
                                                    if ((this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2), this.sk)) {
                                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                                                    }
                                                    if (this.r) {
                                                        if (this.r.effectsSequence.length) return;
                                                        this.pre.rotate(-this.r.v), (this.appliedTransformations = 4);
                                                    } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), (this.appliedTransformations = 4));
                                                }
                                            },
                                            autoOrient: function () {},
                                        }),
                                        B([R], e),
                                        (e.prototype.addDynamicProperty = function (t) {
                                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), (this._isDirty = !0);
                                        }),
                                        (e.prototype._addDynamicProperty = R.prototype.addDynamicProperty),
                                        {
                                            getTransformProperty: function (t, i, s) {
                                                return new e(t, i, s);
                                            },
                                        }
                                    );
                                })();
                            function Y() {
                                (this.c = !1), (this._length = 0), (this._maxLength = 8), (this.v = T(this._maxLength)), (this.o = T(this._maxLength)), (this.i = T(this._maxLength));
                            }
                            (Y.prototype.setPathData = function (t, e) {
                                (this.c = t), this.setLength(e);
                                for (var i = 0; i < e; ) (this.v[i] = Mt.newElement()), (this.o[i] = Mt.newElement()), (this.i[i] = Mt.newElement()), (i += 1);
                            }),
                                (Y.prototype.setLength = function (t) {
                                    for (; this._maxLength < t; ) this.doubleArrayLength();
                                    this._length = t;
                                }),
                                (Y.prototype.doubleArrayLength = function () {
                                    (this.v = this.v.concat(T(this._maxLength))), (this.i = this.i.concat(T(this._maxLength))), (this.o = this.o.concat(T(this._maxLength))), (this._maxLength *= 2);
                                }),
                                (Y.prototype.setXYAt = function (t, e, i, s, a) {
                                    var r;
                                    switch (((this._length = Math.max(this._length, s + 1)), this._length >= this._maxLength && this.doubleArrayLength(), i)) {
                                        case "v":
                                            r = this.v;
                                            break;
                                        case "i":
                                            r = this.i;
                                            break;
                                        case "o":
                                            r = this.o;
                                    }
                                    (!r[s] || (r[s] && !a)) && (r[s] = Mt.newElement()), (r[s][0] = t), (r[s][1] = e);
                                }),
                                (Y.prototype.setTripleAt = function (t, e, i, s, a, r, n, h) {
                                    this.setXYAt(t, e, "v", n, h), this.setXYAt(i, s, "o", n, h), this.setXYAt(a, r, "i", n, h);
                                }),
                                (Y.prototype.reverse = function () {
                                    var t = new Y();
                                    t.setPathData(this.c, this._length);
                                    var e = this.v,
                                        i = this.o,
                                        s = this.i,
                                        a = 0;
                                    this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), (a = 1));
                                    var r,
                                        n = this._length - 1,
                                        h = this._length;
                                    for (r = a; r < h; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), (n -= 1);
                                    return t;
                                });
                            var H,
                                K,
                                J = (function () {
                                    var t = -999999;
                                    function e(t, e, i) {
                                        var s,
                                            a,
                                            r,
                                            n,
                                            h,
                                            o,
                                            l,
                                            p,
                                            f,
                                            d = i.lastIndex,
                                            m = this.keyframes;
                                        if (t < m[0].t - this.offsetTime) (s = m[0].s[0]), (r = !0), (d = 0);
                                        else if (t >= m[m.length - 1].t - this.offsetTime) (s = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0]), (r = !0);
                                        else {
                                            for (var c, u, g = d, y = m.length - 1, v = !0; v && ((c = m[g]), !((u = m[g + 1]).t - this.offsetTime > t)); ) g < y - 1 ? (g += 1) : (v = !1);
                                            if (((d = g), !(r = 1 === c.h))) {
                                                if (t >= u.t - this.offsetTime) p = 1;
                                                else if (t < c.t - this.offsetTime) p = 0;
                                                else {
                                                    var b;
                                                    c.__fnct ? (b = c.__fnct) : ((b = O.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get), (c.__fnct = b)), (p = b((t - (c.t - this.offsetTime)) / (u.t - this.offsetTime - (c.t - this.offsetTime))));
                                                }
                                                a = u.s ? u.s[0] : c.e[0];
                                            }
                                            s = c.s[0];
                                        }
                                        for (o = e._length, l = s.i[0].length, i.lastIndex = d, n = 0; n < o; n += 1) for (h = 0; h < l; h += 1) (f = r ? s.i[n][h] : s.i[n][h] + (a.i[n][h] - s.i[n][h]) * p), (e.i[n][h] = f), (f = r ? s.o[n][h] : s.o[n][h] + (a.o[n][h] - s.o[n][h]) * p), (e.o[n][h] = f), (f = r ? s.v[n][h] : s.v[n][h] + (a.v[n][h] - s.v[n][h]) * p), (e.v[n][h] = f);
                                    }
                                    function i() {
                                        this.paths = this.localShapeCollection;
                                    }
                                    function s(t) {
                                        (function (t, e) {
                                            if (t._length !== e._length || t.c !== e.c) return !1;
                                            var i,
                                                s = t._length;
                                            for (i = 0; i < s; i += 1) if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                            return !0;
                                        })(this.v, t) || ((this.v = Ct.clone(t)), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), (this._mdf = !0), (this.paths = this.localShapeCollection));
                                    }
                                    function a() {
                                        if (this.elem.globalData.frameId !== this.frameId)
                                            if (this.effectsSequence.length)
                                                if (this.lock) this.setVValue(this.pv);
                                                else {
                                                    (this.lock = !0), (this._mdf = !1);
                                                    var t,
                                                        e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                                        i = this.effectsSequence.length;
                                                    for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                                                    this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                                                }
                                            else this._mdf = !1;
                                    }
                                    function r(t, e, s) {
                                        (this.propType = "shape"), (this.comp = t.comp), (this.container = t), (this.elem = t), (this.data = e), (this.k = !1), (this.kf = !1), (this._mdf = !1);
                                        var a = 3 === s ? e.pt.k : e.ks.k;
                                        (this.v = Ct.clone(a)), (this.pv = Ct.clone(this.v)), (this.localShapeCollection = Pt.newShapeCollection()), (this.paths = this.localShapeCollection), this.paths.addShape(this.v), (this.reset = i), (this.effectsSequence = []);
                                    }
                                    function n(t) {
                                        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                                    }
                                    function h(e, s, a) {
                                        (this.propType = "shape"), (this.comp = e.comp), (this.elem = e), (this.container = e), (this.offsetTime = e.data.st), (this.keyframes = 3 === a ? s.pt.k : s.ks.k), (this.k = !0), (this.kf = !0);
                                        var r = this.keyframes[0].s[0].i.length;
                                        this.keyframes[0].s[0].i[0].length,
                                            (this.v = Ct.newElement()),
                                            this.v.setPathData(this.keyframes[0].s[0].c, r),
                                            (this.pv = Ct.clone(this.v)),
                                            (this.localShapeCollection = Pt.newShapeCollection()),
                                            (this.paths = this.localShapeCollection),
                                            this.paths.addShape(this.v),
                                            (this.lastFrame = t),
                                            (this.reset = i),
                                            (this._caching = { lastFrame: t, lastIndex: 0 }),
                                            (this.effectsSequence = [
                                                function () {
                                                    var e = this.comp.renderedFrame - this.offsetTime,
                                                        i = this.keyframes[0].t - this.offsetTime,
                                                        s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                                        a = this._caching.lastFrame;
                                                    return (a !== t && ((a < i && e < i) || (s < a && s < e))) || ((this._caching.lastIndex = a < e ? this._caching.lastIndex : 0), this.interpolateShape(e, this.pv, this._caching)), (this._caching.lastFrame = e), this.pv;
                                                }.bind(this),
                                            ]);
                                    }
                                    (r.prototype.interpolateShape = e), (r.prototype.getValue = a), (r.prototype.setVValue = s), (r.prototype.addEffect = n), (h.prototype.getValue = a), (h.prototype.interpolateShape = e), (h.prototype.setVValue = s), (h.prototype.addEffect = n);
                                    var o = (function () {
                                            var t = m;
                                            function e(t, e) {
                                                (this.v = Ct.newElement()), this.v.setPathData(!0, 4), (this.localShapeCollection = Pt.newShapeCollection()), (this.paths = this.localShapeCollection), this.localShapeCollection.addShape(this.v), (this.d = e.d), (this.elem = t), (this.comp = t.comp), (this.frameId = -1), this.initDynamicPropertyContainer(t), (this.p = W.getProp(t, e.p, 1, 0, this)), (this.s = W.getProp(t, e.s, 1, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
                                            }
                                            return (
                                                (e.prototype = {
                                                    reset: i,
                                                    getValue: function () {
                                                        this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                                    },
                                                    convertEllToPath: function () {
                                                        var e = this.p.v[0],
                                                            i = this.p.v[1],
                                                            s = this.s.v[0] / 2,
                                                            a = this.s.v[1] / 2,
                                                            r = 3 !== this.d,
                                                            n = this.v;
                                                        (n.v[0][0] = e), (n.v[0][1] = i - a), (n.v[1][0] = r ? e + s : e - s), (n.v[1][1] = i), (n.v[2][0] = e), (n.v[2][1] = i + a), (n.v[3][0] = r ? e - s : e + s), (n.v[3][1] = i), (n.i[0][0] = r ? e - s * t : e + s * t), (n.i[0][1] = i - a), (n.i[1][0] = r ? e + s : e - s), (n.i[1][1] = i - a * t), (n.i[2][0] = r ? e + s * t : e - s * t), (n.i[2][1] = i + a), (n.i[3][0] = r ? e - s : e + s), (n.i[3][1] = i + a * t), (n.o[0][0] = r ? e + s * t : e - s * t), (n.o[0][1] = i - a), (n.o[1][0] = r ? e + s : e - s), (n.o[1][1] = i + a * t), (n.o[2][0] = r ? e - s * t : e + s * t), (n.o[2][1] = i + a), (n.o[3][0] = r ? e - s : e + s), (n.o[3][1] = i - a * t);
                                                    },
                                                }),
                                                B([R], e),
                                                e
                                            );
                                        })(),
                                        p = (function () {
                                            function t(t, e) {
                                                (this.v = Ct.newElement()), this.v.setPathData(!0, 0), (this.elem = t), (this.comp = t.comp), (this.data = e), (this.frameId = -1), (this.d = e.d), this.initDynamicPropertyContainer(t), 1 === e.sy ? ((this.ir = W.getProp(t, e.ir, 0, 0, this)), (this.is = W.getProp(t, e.is, 0, 0.01, this)), (this.convertToPath = this.convertStarToPath)) : (this.convertToPath = this.convertPolygonToPath), (this.pt = W.getProp(t, e.pt, 0, 0, this)), (this.p = W.getProp(t, e.p, 1, 0, this)), (this.r = W.getProp(t, e.r, 0, d, this)), (this.or = W.getProp(t, e.or, 0, 0, this)), (this.os = W.getProp(t, e.os, 0, 0.01, this)), (this.localShapeCollection = Pt.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
                                            }
                                            return (
                                                (t.prototype = {
                                                    reset: i,
                                                    getValue: function () {
                                                        this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                                                    },
                                                    convertStarToPath: function () {
                                                        var t,
                                                            e,
                                                            i,
                                                            s,
                                                            a = 2 * Math.floor(this.pt.v),
                                                            r = (2 * Math.PI) / a,
                                                            n = !0,
                                                            h = this.or.v,
                                                            o = this.ir.v,
                                                            l = this.os.v,
                                                            p = this.is.v,
                                                            f = (2 * Math.PI * h) / (2 * a),
                                                            d = (2 * Math.PI * o) / (2 * a),
                                                            m = -Math.PI / 2;
                                                        m += this.r.v;
                                                        var c = 3 === this.data.d ? -1 : 1;
                                                        for (t = this.v._length = 0; t < a; t += 1) {
                                                            (i = n ? l : p), (s = n ? f : d);
                                                            var u = (e = n ? h : o) * Math.cos(m),
                                                                g = e * Math.sin(m),
                                                                y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                                v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                                            (u += +this.p.v[0]), (g += +this.p.v[1]), this.v.setTripleAt(u, g, u - y * s * i * c, g - v * s * i * c, u + y * s * i * c, g + v * s * i * c, t, !0), (n = !n), (m += r * c);
                                                        }
                                                    },
                                                    convertPolygonToPath: function () {
                                                        var t,
                                                            e = Math.floor(this.pt.v),
                                                            i = (2 * Math.PI) / e,
                                                            s = this.or.v,
                                                            a = this.os.v,
                                                            r = (2 * Math.PI * s) / (4 * e),
                                                            n = -Math.PI / 2,
                                                            h = 3 === this.data.d ? -1 : 1;
                                                        for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                                            var o = s * Math.cos(n),
                                                                l = s * Math.sin(n),
                                                                p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
                                                                f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l);
                                                            (o += +this.p.v[0]), (l += +this.p.v[1]), this.v.setTripleAt(o, l, o - p * r * a * h, l - f * r * a * h, o + p * r * a * h, l + f * r * a * h, t, !0), (n += i * h);
                                                        }
                                                        (this.paths.length = 0), (this.paths[0] = this.v);
                                                    },
                                                }),
                                                B([R], t),
                                                t
                                            );
                                        })(),
                                        f = (function () {
                                            function t(t, e) {
                                                (this.v = Ct.newElement()), (this.v.c = !0), (this.localShapeCollection = Pt.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), (this.elem = t), (this.comp = t.comp), (this.frameId = -1), (this.d = e.d), this.initDynamicPropertyContainer(t), (this.p = W.getProp(t, e.p, 1, 0, this)), (this.s = W.getProp(t, e.s, 1, 0, this)), (this.r = W.getProp(t, e.r, 0, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
                                            }
                                            return (
                                                (t.prototype = {
                                                    convertRectToPath: function () {
                                                        var t = this.p.v[0],
                                                            e = this.p.v[1],
                                                            i = this.s.v[0] / 2,
                                                            s = this.s.v[1] / 2,
                                                            a = l(i, s, this.r.v),
                                                            r = a * (1 - m);
                                                        (this.v._length = 0), 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)));
                                                    },
                                                    getValue: function (t) {
                                                        this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                                    },
                                                    reset: i,
                                                }),
                                                B([R], t),
                                                t
                                            );
                                        })(),
                                        c = {
                                            getShapeProp: function (t, e, i) {
                                                var s;
                                                return 3 === i || 4 === i ? (s = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new r(t, e, i)) : 5 === i ? (s = new f(t, e)) : 6 === i ? (s = new o(t, e)) : 7 === i && (s = new p(t, e)), s.k && t.addDynamicProperty(s), s;
                                            },
                                            getConstructorFunction: function () {
                                                return r;
                                            },
                                            getKeyframedConstructorFunction: function () {
                                                return h;
                                            },
                                        };
                                    return c;
                                })(),
                                U =
                                    ((K = {}),
                                    ((H = {}).registerModifier = function (t, e) {
                                        K[t] || (K[t] = e);
                                    }),
                                    (H.getModifier = function (t, e, i) {
                                        return new K[t](e, i);
                                    }),
                                    H);
                            function Z() {}
                            function Q() {}
                            function $() {}
                            function tt() {}
                            function et() {
                                (this._length = 0), (this._maxLength = 4), (this.shapes = T(this._maxLength));
                            }
                            function it(t, e, i, s) {
                                (this.elem = t), (this.frameId = -1), (this.dataProps = T(e.length)), (this.renderer = i), (this.k = !1), (this.dashStr = ""), (this.dashArray = w("float32", e.length ? e.length - 1 : 0)), (this.dashoffset = w("float32", 1)), this.initDynamicPropertyContainer(s);
                                var a,
                                    r,
                                    n = e.length || 0;
                                for (a = 0; a < n; a += 1) (r = W.getProp(t, e[a].v, 0, 0, this)), (this.k = r.k || this.k), (this.dataProps[a] = { n: e[a].n, p: r });
                                this.k || this.getValue(!0), (this._isAnimated = this.k);
                            }
                            function st(t, e, i) {
                                (this.data = e), (this.c = w("uint8c", 4 * e.p));
                                var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                                (this.o = w("float32", s)), (this._cmdf = !1), (this._omdf = !1), (this._collapsable = this.checkCollapsable()), (this._hasOpacity = s), this.initDynamicPropertyContainer(i), (this.prop = W.getProp(t, e.k, 1, null, this)), (this.k = this.prop.k), this.getValue(!0);
                            }
                            (Z.prototype.initModifierProperties = function () {}),
                                (Z.prototype.addShapeToModifier = function () {}),
                                (Z.prototype.addShape = function (t) {
                                    if (!this.closed) {
                                        t.sh.container.addDynamicProperty(t.sh);
                                        var e = { shape: t.sh, data: t, localShapeCollection: Pt.newShapeCollection() };
                                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
                                    }
                                }),
                                (Z.prototype.init = function (t, e) {
                                    (this.shapes = []), (this.elem = t), this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), (this.frameId = a), (this.closed = !1), (this.k = !1), this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
                                }),
                                (Z.prototype.processKeys = function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
                                }),
                                B([R], Z),
                                B([Z], Q),
                                (Q.prototype.initModifierProperties = function (t, e) {
                                    (this.s = W.getProp(t, e.s, 0, 0.01, this)), (this.e = W.getProp(t, e.e, 0, 0.01, this)), (this.o = W.getProp(t, e.o, 0, 0, this)), (this.sValue = 0), (this.eValue = 0), (this.getValue = this.processKeys), (this.m = e.m), (this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length);
                                }),
                                (Q.prototype.addShapeToModifier = function (t) {
                                    t.pathsData = [];
                                }),
                                (Q.prototype.calculateShapeEdges = function (t, e, i, s, a) {
                                    var r = [];
                                    e <= 1 ? r.push({ s: t, e }) : 1 <= t ? r.push({ s: t - 1, e: e - 1 }) : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: e - 1 }));
                                    var n,
                                        h,
                                        o = [],
                                        l = r.length;
                                    for (n = 0; n < l; n += 1) {
                                        var p, f;
                                        (h = r[n]).e * a < s || h.s * a > s + i || ((p = h.s * a <= s ? 0 : (h.s * a - s) / i), (f = h.e * a >= s + i ? 1 : (h.e * a - s) / i), o.push([p, f]));
                                    }
                                    return o.length || o.push([0, 0]), o;
                                }),
                                (Q.prototype.releasePathsData = function (t) {
                                    var e,
                                        i = t.length;
                                    for (e = 0; e < i; e += 1) xt.release(t[e]);
                                    return (t.length = 0), t;
                                }),
                                (Q.prototype.processShapes = function (t) {
                                    var e, i, s;
                                    if (this._mdf || t) {
                                        var a = (this.o.v % 360) / 360;
                                        if ((a < 0 && (a += 1), (e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + a), (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + a) < e)) {
                                            var r = e;
                                            (e = i), (i = r);
                                        }
                                        (e = 1e-4 * Math.round(1e4 * e)), (i = 1e-4 * Math.round(1e4 * i)), (this.sValue = e), (this.eValue = i);
                                    } else (e = this.sValue), (i = this.eValue);
                                    var n,
                                        h,
                                        o,
                                        l,
                                        p,
                                        f,
                                        d = this.shapes.length,
                                        m = 0;
                                    if (i === e) for (n = 0; n < d; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), (this.shapes[n].shape._mdf = !0), (this.shapes[n].shape.paths = this.shapes[n].localShapeCollection), this._mdf && (this.shapes[n].pathsData.length = 0);
                                    else if ((1 === i && 0 === e) || (0 === i && 1 === e)) {
                                        if (this._mdf) for (n = 0; n < d; n += 1) (this.shapes[n].pathsData.length = 0), (this.shapes[n].shape._mdf = !0);
                                    } else {
                                        var c,
                                            u,
                                            g = [];
                                        for (n = 0; n < d; n += 1)
                                            if ((c = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                                if (((o = (s = c.shape.paths)._length), (f = 0), !c.shape._mdf && c.pathsData.length)) f = c.totalShapeLength;
                                                else {
                                                    for (l = this.releasePathsData(c.pathsData), h = 0; h < o; h += 1) (p = q.getSegmentsLength(s.shapes[h])), l.push(p), (f += p.totalLength);
                                                    (c.totalShapeLength = f), (c.pathsData = l);
                                                }
                                                (m += f), (c.shape._mdf = !0);
                                            } else c.shape.paths = c.localShapeCollection;
                                        var y,
                                            v = e,
                                            b = i,
                                            _ = 0;
                                        for (n = d - 1; 0 <= n; n -= 1)
                                            if ((c = this.shapes[n]).shape._mdf) {
                                                for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && 1 < d ? ((y = this.calculateShapeEdges(e, i, c.totalShapeLength, _, m)), (_ += c.totalShapeLength)) : (y = [[v, b]]), o = y.length, h = 0; h < o; h += 1) {
                                                    (v = y[h][0]), (b = y[h][1]), (g.length = 0), b <= 1 ? g.push({ s: c.totalShapeLength * v, e: c.totalShapeLength * b }) : 1 <= v ? g.push({ s: c.totalShapeLength * (v - 1), e: c.totalShapeLength * (b - 1) }) : (g.push({ s: c.totalShapeLength * v, e: c.totalShapeLength }), g.push({ s: 0, e: c.totalShapeLength * (b - 1) }));
                                                    var k = this.addShapes(c, g[0]);
                                                    if (g[0].s !== g[0].e) {
                                                        if (1 < g.length)
                                                            if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                                                var A = k.pop();
                                                                this.addPaths(k, u), (k = this.addShapes(c, g[1], A));
                                                            } else this.addPaths(k, u), (k = this.addShapes(c, g[1]));
                                                        this.addPaths(k, u);
                                                    }
                                                }
                                                c.shape.paths = u;
                                            }
                                    }
                                }),
                                (Q.prototype.addPaths = function (t, e) {
                                    var i,
                                        s = t.length;
                                    for (i = 0; i < s; i += 1) e.addShape(t[i]);
                                }),
                                (Q.prototype.addSegment = function (t, e, i, s, a, r, n) {
                                    a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1);
                                }),
                                (Q.prototype.addSegmentFromArray = function (t, e, i, s) {
                                    e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
                                }),
                                (Q.prototype.addShapes = function (t, e, i) {
                                    var s,
                                        a,
                                        r,
                                        n,
                                        h,
                                        o,
                                        l,
                                        p,
                                        f = t.pathsData,
                                        d = t.shape.paths.shapes,
                                        m = t.shape.paths._length,
                                        c = 0,
                                        u = [],
                                        g = !0;
                                    for (p = i ? ((h = i._length), i._length) : ((i = Ct.newElement()), (h = 0)), u.push(i), s = 0; s < m; s += 1) {
                                        for (o = f[s].lengths, i.c = d[s].c, r = d[s].c ? o.length : o.length + 1, a = 1; a < r; a += 1)
                                            if (c + (n = o[a - 1]).addedLength < e.s) (c += n.addedLength), (i.c = !1);
                                            else {
                                                if (c > e.e) {
                                                    i.c = !1;
                                                    break;
                                                }
                                                e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[a], d[s].v[a], i, h, g), (g = !1)) : ((l = q.getNewSegment(d[s].v[a - 1], d[s].v[a], d[s].o[a - 1], d[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, o[a - 1])), this.addSegmentFromArray(l, i, h, g), (g = !1), (i.c = !1)), (c += n.addedLength), (h += 1);
                                            }
                                        if (d[s].c && o.length) {
                                            if (((n = o[a - 1]), c <= e.e)) {
                                                var y = o[a - 1].addedLength;
                                                e.s <= c && e.e >= c + y ? (this.addSegment(d[s].v[a - 1], d[s].o[a - 1], d[s].i[0], d[s].v[0], i, h, g), (g = !1)) : ((l = q.getNewSegment(d[s].v[a - 1], d[s].v[0], d[s].o[a - 1], d[s].i[0], (e.s - c) / y, (e.e - c) / y, o[a - 1])), this.addSegmentFromArray(l, i, h, g), (g = !1), (i.c = !1));
                                            } else i.c = !1;
                                            (c += n.addedLength), (h += 1);
                                        }
                                        if ((i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e)) break;
                                        s < m - 1 && ((i = Ct.newElement()), (g = !0), u.push(i), (h = 0));
                                    }
                                    return u;
                                }),
                                U.registerModifier("tm", Q),
                                B([Z], $),
                                ($.prototype.initModifierProperties = function (t, e) {
                                    (this.getValue = this.processKeys), (this.rd = W.getProp(t, e.r, 0, null, this)), (this._isAnimated = !!this.rd.effectsSequence.length);
                                }),
                                ($.prototype.processPath = function (t, e) {
                                    var i = Ct.newElement();
                                    i.c = t.c;
                                    var s,
                                        a,
                                        r,
                                        n,
                                        h,
                                        o,
                                        l,
                                        p,
                                        f,
                                        d,
                                        c,
                                        u,
                                        g,
                                        y = t._length,
                                        v = 0;
                                    for (s = 0; s < y; s += 1) (a = t.v[s]), (n = t.o[s]), (r = t.i[s]), a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? ((0 !== s && s !== y - 1) || t.c ? ((h = 0 === s ? t.v[y - 1] : t.v[s - 1]), (l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0), (p = u = a[0] + (h[0] - a[0]) * l), (f = g = a[1] - (a[1] - h[1]) * l), (d = p - (p - a[0]) * m), (c = f - (f - a[1]) * m), i.setTripleAt(p, f, d, c, u, g, v), (v += 1), (h = s === y - 1 ? t.v[0] : t.v[s + 1]), (l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0), (p = d = a[0] + (h[0] - a[0]) * l), (f = c = a[1] + (h[1] - a[1]) * l), (u = p - (p - a[0]) * m), (g = f - (f - a[1]) * m), i.setTripleAt(p, f, d, c, u, g, v)) : i.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], v)) : i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], v), (v += 1);
                                    return i;
                                }),
                                ($.prototype.processShapes = function (t) {
                                    var e,
                                        i,
                                        s,
                                        a,
                                        r,
                                        n,
                                        h = this.shapes.length,
                                        o = this.rd.v;
                                    if (0 !== o)
                                        for (i = 0; i < h; i += 1) {
                                            if (((r = this.shapes[i]).shape.paths, (n = r.localShapeCollection), r.shape._mdf || this._mdf || t)) for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(e[s], o));
                                            r.shape.paths = r.localShapeCollection;
                                        }
                                    this.dynamicProperties.length || (this._mdf = !1);
                                }),
                                U.registerModifier("rd", $),
                                B([Z], tt),
                                (tt.prototype.initModifierProperties = function (t, e) {
                                    (this.getValue = this.processKeys), (this.c = W.getProp(t, e.c, 0, null, this)), (this.o = W.getProp(t, e.o, 0, null, this)), (this.tr = X.getTransformProperty(t, e.tr, this)), (this.so = W.getProp(t, e.tr.so, 0, 0.01, this)), (this.eo = W.getProp(t, e.tr.eo, 0, 0.01, this)), (this.data = e), this.dynamicProperties.length || this.getValue(!0), (this._isAnimated = !!this.dynamicProperties.length), (this.pMatrix = new N()), (this.rMatrix = new N()), (this.sMatrix = new N()), (this.tMatrix = new N()), (this.matrix = new N());
                                }),
                                (tt.prototype.applyTransforms = function (t, e, i, s, a, r) {
                                    var n = r ? -1 : 1,
                                        h = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
                                        o = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
                                    t.translate(s.p.v[0] * n * a, s.p.v[1] * n * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(r ? 1 / h : h, r ? 1 / o : o), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
                                }),
                                (tt.prototype.init = function (t, e, i, s) {
                                    for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); 0 < i; ) (i -= 1), this._elements.unshift(e[i]);
                                    this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
                                }),
                                (tt.prototype.resetElements = function (t) {
                                    var e,
                                        i = t.length;
                                    for (e = 0; e < i; e += 1) (t[e]._processed = !1), "gr" === t[e].ty && this.resetElements(t[e].it);
                                }),
                                (tt.prototype.cloneElements = function (t) {
                                    t.length;
                                    var e = JSON.parse(JSON.stringify(t));
                                    return this.resetElements(e), e;
                                }),
                                (tt.prototype.changeGroupRender = function (t, e) {
                                    var i,
                                        s = t.length;
                                    for (i = 0; i < s; i += 1) (t[i]._render = e), "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
                                }),
                                (tt.prototype.processShapes = function (t) {
                                    var e, i, s, a, r;
                                    if (this._mdf || t) {
                                        var n,
                                            h = Math.ceil(this.c.v);
                                        if (this._groups.length < h) {
                                            for (; this._groups.length < h; ) {
                                                var o = { it: this.cloneElements(this._elements), ty: "gr" };
                                                o.it.push({
                                                    a: { a: 0, ix: 1, k: [0, 0] },
                                                    nm: "Transform",
                                                    o: { a: 0, ix: 7, k: 100 },
                                                    p: { a: 0, ix: 2, k: [0, 0] },
                                                    r: {
                                                        a: 1,
                                                        ix: 6,
                                                        k: [
                                                            { s: 0, e: 0, t: 0 },
                                                            { s: 0, e: 0, t: 1 },
                                                        ],
                                                    },
                                                    s: { a: 0, ix: 3, k: [100, 100] },
                                                    sa: { a: 0, ix: 5, k: 0 },
                                                    sk: { a: 0, ix: 4, k: 0 },
                                                    ty: "tr",
                                                }),
                                                    this.arr.splice(0, 0, o),
                                                    this._groups.splice(0, 0, o),
                                                    (this._currentCopies += 1);
                                            }
                                            this.elem.reloadShapes();
                                        }
                                        for (s = r = 0; s <= this._groups.length - 1; s += 1) (n = r < h), (this._groups[s]._render = n), this.changeGroupRender(this._groups[s].it, n), (r += 1);
                                        this._currentCopies = h;
                                        var l = this.o.v,
                                            p = l % 1,
                                            f = 0 < l ? Math.floor(l) : Math.ceil(l),
                                            d = (this.tr.v.props, this.pMatrix.props),
                                            m = this.rMatrix.props,
                                            c = this.sMatrix.props;
                                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                                        var u,
                                            g,
                                            y = 0;
                                        if (0 < l) {
                                            for (; y < f; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (y += 1);
                                            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), (y += p));
                                        } else if (l < 0) {
                                            for (; f < y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (y -= 1);
                                            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), (y -= p));
                                        }
                                        for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r; ) {
                                            if (((g = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length), (e[e.length - 1].transform.mProps._mdf = !0), (e[e.length - 1].transform.op._mdf = !0), (e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1))), 0 !== y)) {
                                                for (((0 !== s && 1 === a) || (s !== this._currentCopies - 1 && -1 === a)) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), u = 0; u < g; u += 1) i[u] = this.matrix.props[u];
                                                this.matrix.reset();
                                            } else for (this.matrix.reset(), u = 0; u < g; u += 1) i[u] = this.matrix.props[u];
                                            (y += 1), (r -= 1), (s += a);
                                        }
                                    } else for (r = this._currentCopies, s = 0, a = 1; r; ) (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props), (e[e.length - 1].transform.mProps._mdf = !1), (e[e.length - 1].transform.op._mdf = !1), (r -= 1), (s += a);
                                }),
                                (tt.prototype.addShape = function () {}),
                                U.registerModifier("rp", tt),
                                (et.prototype.addShape = function (t) {
                                    this._length === this._maxLength && ((this.shapes = this.shapes.concat(T(this._maxLength))), (this._maxLength *= 2)), (this.shapes[this._length] = t), (this._length += 1);
                                }),
                                (et.prototype.releaseShapes = function () {
                                    var t;
                                    for (t = 0; t < this._length; t += 1) Ct.release(this.shapes[t]);
                                    this._length = 0;
                                }),
                                (it.prototype.getValue = function (t) {
                                    if ((this.elem.globalData.frameId !== this.frameId || t) && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), (this._mdf = this._mdf || t), this._mdf)) {
                                        var e = 0,
                                            i = this.dataProps.length;
                                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" != this.dataProps[e].n ? ("svg" === this.renderer ? (this.dashStr += " " + this.dataProps[e].p.v) : (this.dashArray[e] = this.dataProps[e].p.v)) : (this.dashoffset[0] = this.dataProps[e].p.v);
                                    }
                                }),
                                B([R], it),
                                (st.prototype.comparePoints = function (t, e) {
                                    for (var i = 0, s = this.o.length / 2; i < s; ) {
                                        if (0.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
                                        i += 1;
                                    }
                                    return !0;
                                }),
                                (st.prototype.checkCollapsable = function () {
                                    if (this.o.length / 2 != this.c.length / 4) return !1;
                                    if (this.data.k.k[0].s)
                                        for (var t = 0, e = this.data.k.k.length; t < e; ) {
                                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                            t += 1;
                                        }
                                    else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                                    return !0;
                                }),
                                (st.prototype.getValue = function (t) {
                                    if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || t)) {
                                        var e,
                                            i,
                                            s,
                                            a = 4 * this.data.p;
                                        for (e = 0; e < a; e += 1) (i = e % 4 == 0 ? 100 : 255), (s = Math.round(this.prop.v[e] * i)), this.c[e] !== s && ((this.c[e] = s), (this._cmdf = !t));
                                        if (this.o.length) for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) (i = e % 2 == 0 ? 100 : 1), (s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e]), this.o[e - 4 * this.data.p] !== s && ((this.o[e - 4 * this.data.p] = s), (this._omdf = !t));
                                        this._mdf = !t;
                                    }
                                }),
                                B([R], st);
                            var at,
                                rt,
                                nt = function (t, e, i, s) {
                                    if (0 === e) return "";
                                    var a,
                                        r = t.o,
                                        n = t.i,
                                        h = t.v,
                                        o = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                                    for (a = 1; a < e; a += 1) o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(h[a][0], h[a][1]);
                                    return i && e && ((o += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1])), (o += "z")), o;
                                },
                                ht = (function () {
                                    var t = (function () {
                                        var t = L("canvas");
                                        (t.width = 1), (t.height = 1);
                                        var e = t.getContext("2d");
                                        return (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t;
                                    })();
                                    function e() {
                                        (this.loadedAssets += 1), this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                                    }
                                    function i(t, e, i) {
                                        var s = "";
                                        if (t.e) s = t.p;
                                        else if (e) {
                                            var a = t.p;
                                            -1 !== a.indexOf("images/") && (a = a.split("/")[1]), (s = e + a);
                                        } else (s = i), (s += t.u ? t.u : ""), (s += t.p);
                                        return s;
                                    }
                                    function s(t) {
                                        (this._imageLoaded = e.bind(this)), (this.assetsPath = ""), (this.path = ""), (this.totalImages = 0), (this.loadedAssets = 0), (this.imagesLoadedCb = null), (this.images = []);
                                    }
                                    return (
                                        (s.prototype = {
                                            loadAssets: function (t, e) {
                                                this.imagesLoadedCb = e;
                                                var i,
                                                    s = t.length;
                                                for (i = 0; i < s; i += 1) t[i].layers || ((this.totalImages += 1), this.images.push(this._createImageData(t[i])));
                                            },
                                            setAssetsPath: function (t) {
                                                this.assetsPath = t || "";
                                            },
                                            setPath: function (t) {
                                                this.path = t || "";
                                            },
                                            loaded: function () {
                                                return this.totalImages === this.loadedAssets;
                                            },
                                            destroy: function () {
                                                (this.imagesLoadedCb = null), (this.images.length = 0);
                                            },
                                            getImage: function (t) {
                                                for (var e = 0, i = this.images.length; e < i; ) {
                                                    if (this.images[e].assetData === t) return this.images[e].img;
                                                    e += 1;
                                                }
                                            },
                                            createImgData: function (e) {
                                                var s = i(e, this.assetsPath, this.path),
                                                    a = L("img");
                                                (a.crossOrigin = "anonymous"),
                                                    a.addEventListener("load", this._imageLoaded, !1),
                                                    a.addEventListener(
                                                        "error",
                                                        function () {
                                                            (r.img = t), this._imageLoaded();
                                                        }.bind(this),
                                                        !1,
                                                    ),
                                                    (a.src = s);
                                                var r = { img: a, assetData: e };
                                                return r;
                                            },
                                            createImageData: function (e) {
                                                var s = i(e, this.assetsPath, this.path),
                                                    a = I("image");
                                                a.addEventListener("load", this._imageLoaded, !1),
                                                    a.addEventListener(
                                                        "error",
                                                        function () {
                                                            (r.img = t), this._imageLoaded();
                                                        }.bind(this),
                                                        !1,
                                                    ),
                                                    a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s);
                                                var r = { img: a, assetData: e };
                                                return r;
                                            },
                                            imageLoaded: e,
                                            setCacheType: function (t) {
                                                this._createImageData = "svg" === t ? this.createImageData.bind(this) : this.createImgData.bind(this);
                                            },
                                        }),
                                        s
                                    );
                                })(),
                                ot = ((at = { maskType: !0 }), (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (at.maskType = !1), at),
                                lt =
                                    (((rt = {}).createFilter = function (t) {
                                        var e = I("filter");
                                        return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e;
                                    }),
                                    (rt.createAlphaToLuminanceFilter = function () {
                                        var t = I("feColorMatrix");
                                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
                                    }),
                                    rt),
                                pt = (function () {
                                    function t(t) {
                                        return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0;
                                    }
                                    return {
                                        load: function (e, i, s) {
                                            var a,
                                                r = new XMLHttpRequest();
                                            r.open("GET", e, !0);
                                            try {
                                                r.responseType = "json";
                                            } catch (e) {}
                                            r.send(),
                                                (r.onreadystatechange = function () {
                                                    if (4 == r.readyState)
                                                        if (200 == r.status) (a = t(r)), i(a);
                                                        else
                                                            try {
                                                                (a = t(r)), i(a);
                                                            } catch (t) {
                                                                s && s(t);
                                                            }
                                                });
                                        },
                                    };
                                })();
                            function ft(t, e, i) {
                                (this._isFirstFrame = !0), (this._hasMaskedPath = !1), (this._frameId = -1), (this._textData = t), (this._renderType = e), (this._elem = i), (this._animatorsData = T(this._textData.a.length)), (this._pathData = {}), (this._moreOptions = { alignment: {} }), (this.renderedLetters = []), (this.lettersChangedFlag = !1), this.initDynamicPropertyContainer(i);
                            }
                            function dt(t, e, i) {
                                var s = { propType: !1 },
                                    a = W.getProp,
                                    r = e.a;
                                (this.a = { r: r.r ? a(t, r.r, 0, d, i) : s, rx: r.rx ? a(t, r.rx, 0, d, i) : s, ry: r.ry ? a(t, r.ry, 0, d, i) : s, sk: r.sk ? a(t, r.sk, 0, d, i) : s, sa: r.sa ? a(t, r.sa, 0, d, i) : s, s: r.s ? a(t, r.s, 1, 0.01, i) : s, a: r.a ? a(t, r.a, 1, 0, i) : s, o: r.o ? a(t, r.o, 0, 0.01, i) : s, p: r.p ? a(t, r.p, 1, 0, i) : s, sw: r.sw ? a(t, r.sw, 0, 0, i) : s, sc: r.sc ? a(t, r.sc, 1, 0, i) : s, fc: r.fc ? a(t, r.fc, 1, 0, i) : s, fh: r.fh ? a(t, r.fh, 0, 0, i) : s, fs: r.fs ? a(t, r.fs, 0, 0.01, i) : s, fb: r.fb ? a(t, r.fb, 0, 0.01, i) : s, t: r.t ? a(t, r.t, 0, 0, i) : s }), (this.s = _t.getTextSelectorProp(t, e.s, i)), (this.s.t = e.s.t);
                            }
                            function mt(t, e, i, s, a, r) {
                                (this.o = t), (this.sw = e), (this.sc = i), (this.fc = s), (this.m = a), (this.p = r), (this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!s, m: !0, p: !0 });
                            }
                            function ct(t, e) {
                                (this._frameId = a), (this.pv = ""), (this.v = ""), (this.kf = !1), (this._isFirstFrame = !0), (this._mdf = !1), (this.data = e), (this.elem = t), (this.comp = this.elem.comp), (this.keysIndex = 0), (this.canResize = !1), (this.minimumFontSize = 1), (this.effectsSequence = []), (this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }), this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
                            }
                            (ft.prototype.searchProperties = function () {
                                var t,
                                    e,
                                    i = this._textData.a.length,
                                    s = W.getProp;
                                for (t = 0; t < i; t += 1) (e = this._textData.a[t]), (this._animatorsData[t] = new dt(this._elem, e, this));
                                this._textData.p && "m" in this._textData.p ? ((this._pathData = { f: s(this._elem, this._textData.p.f, 0, 0, this), l: s(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }), (this._hasMaskedPath = !0)) : (this._hasMaskedPath = !1), (this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this));
                            }),
                                (ft.prototype.getMeasures = function (t, e) {
                                    if (((this.lettersChangedFlag = e), this._mdf || this._isFirstFrame || e || (this._hasMaskedPath && this._pathData.m._mdf))) {
                                        this._isFirstFrame = !1;
                                        var i,
                                            s,
                                            a,
                                            r,
                                            n,
                                            h,
                                            o,
                                            l,
                                            p,
                                            f,
                                            d,
                                            m,
                                            c,
                                            u,
                                            g,
                                            y,
                                            v,
                                            b,
                                            _,
                                            k = this._moreOptions.alignment.v,
                                            A = this._animatorsData,
                                            M = this._textData,
                                            C = this.mHelper,
                                            P = this._renderType,
                                            F = this.renderedLetters.length,
                                            D = (this.data, t.l);
                                        if (this._hasMaskedPath) {
                                            if (((_ = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                                                var w,
                                                    T = _.v;
                                                for (this._pathData.r && (T = T.reverse()), n = { tLength: 0, segments: [] }, r = T._length - 1, a = y = 0; a < r; a += 1) (w = q.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]])), (n.tLength += w.segmentLength), n.segments.push(w), (y += w.segmentLength);
                                                (a = r), _.v.c && ((w = q.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]])), (n.tLength += w.segmentLength), n.segments.push(w), (y += w.segmentLength)), (this._pathData.pi = n);
                                            }
                                            if (((n = this._pathData.pi), (h = this._pathData.f.v), (f = 1), (p = !(l = d = 0)), (u = n.segments), h < 0 && _.v.c)) for (n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength), f = (c = u[(d = u.length - 1)].points).length - 1; h < 0; ) (h += c[f].partialLength), (f -= 1) < 0 && (f = (c = u[(d -= 1)].points).length - 1);
                                            (m = (c = u[d].points)[f - 1]), (g = (o = c[f]).partialLength);
                                        }
                                        (r = D.length), (s = i = 0);
                                        var I,
                                            L,
                                            R,
                                            z,
                                            V = 1.2 * t.finalSize * 0.714,
                                            N = !0;
                                        R = A.length;
                                        var O,
                                            B,
                                            j,
                                            G,
                                            W,
                                            X,
                                            Y,
                                            H,
                                            K,
                                            J,
                                            U,
                                            Z,
                                            Q,
                                            $ = -1,
                                            tt = h,
                                            et = d,
                                            it = f,
                                            st = -1,
                                            at = "",
                                            rt = this.defaultPropsArray;
                                        if (2 === t.j || 1 === t.j) {
                                            var nt = 0,
                                                ht = 0,
                                                ot = 2 === t.j ? -0.5 : -1,
                                                lt = 0,
                                                pt = !0;
                                            for (a = 0; a < r; a += 1)
                                                if (D[a].n) {
                                                    for (nt && (nt += ht); lt < a; ) (D[lt].animatorJustifyOffset = nt), (lt += 1);
                                                    pt = !(nt = 0);
                                                } else {
                                                    for (L = 0; L < R; L += 1) (I = A[L].a).t.propType && (pt && 2 === t.j && (ht += I.t.v * ot), (O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)).length ? (nt += I.t.v * O[0] * ot) : (nt += I.t.v * O * ot));
                                                    pt = !1;
                                                }
                                            for (nt && (nt += ht); lt < a; ) (D[lt].animatorJustifyOffset = nt), (lt += 1);
                                        }
                                        for (a = 0; a < r; a += 1) {
                                            if ((C.reset(), (W = 1), D[a].n)) (i = 0), (s += t.yOffset), (s += N ? 1 : 0), (h = tt), (N = !1), this._hasMaskedPath && ((f = it), (m = (c = u[(d = et)].points)[f - 1]), (g = (o = c[f]).partialLength), (l = 0)), (Q = J = Z = at = ""), (rt = this.defaultPropsArray);
                                            else {
                                                if (this._hasMaskedPath) {
                                                    if (st !== D[a].line) {
                                                        switch (t.j) {
                                                            case 1:
                                                                h += y - t.lineWidths[D[a].line];
                                                                break;
                                                            case 2:
                                                                h += (y - t.lineWidths[D[a].line]) / 2;
                                                        }
                                                        st = D[a].line;
                                                    }
                                                    $ !== D[a].ind && (D[$] && (h += D[$].extra), (h += D[a].an / 2), ($ = D[a].ind)), (h += (k[0] * D[a].an) / 200);
                                                    var ft = 0;
                                                    for (L = 0; L < R; L += 1) (I = A[L].a).p.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)).length ? (ft += I.p.v[0] * O[0]) : (ft += I.p.v[0] * O)), I.a.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)).length ? (ft += I.a.v[0] * O[0]) : (ft += I.a.v[0] * O));
                                                    for (p = !0; p; ) h + ft <= l + g || !c ? ((v = (h + ft - l) / o.partialLength), (j = m.point[0] + (o.point[0] - m.point[0]) * v), (G = m.point[1] + (o.point[1] - m.point[1]) * v), C.translate((-k[0] * D[a].an) / 200, (-k[1] * V) / 100), (p = !1)) : c && ((l += o.partialLength), (f += 1) >= c.length && ((f = 0), (c = u[(d += 1)] ? u[d].points : _.v.c ? u[(d = f = 0)].points : ((l -= o.partialLength), null))), c && ((m = o), (g = (o = c[f]).partialLength)));
                                                    (B = D[a].an / 2 - D[a].add), C.translate(-B, 0, 0);
                                                } else (B = D[a].an / 2 - D[a].add), C.translate(-B, 0, 0), C.translate((-k[0] * D[a].an) / 200, (-k[1] * V) / 100, 0);
                                                for (D[a].l, L = 0; L < R; L += 1) (I = A[L].a).t.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)), (0 === i && 0 === t.j) || (this._hasMaskedPath ? (O.length ? (h += I.t.v * O[0]) : (h += I.t.v * O)) : O.length ? (i += I.t.v * O[0]) : (i += I.t.v * O)));
                                                for (D[a].l, t.strokeWidthAnim && (Y = t.sw || 0), t.strokeColorAnim && (X = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), L = 0; L < R; L += 1) (I = A[L].a).a.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)).length ? C.translate(-I.a.v[0] * O[0], -I.a.v[1] * O[1], I.a.v[2] * O[2]) : C.translate(-I.a.v[0] * O, -I.a.v[1] * O, I.a.v[2] * O));
                                                for (L = 0; L < R; L += 1) (I = A[L].a).s.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)).length ? C.scale(1 + (I.s.v[0] - 1) * O[0], 1 + (I.s.v[1] - 1) * O[1], 1) : C.scale(1 + (I.s.v[0] - 1) * O, 1 + (I.s.v[1] - 1) * O, 1));
                                                for (L = 0; L < R; L += 1) {
                                                    if (((I = A[L].a), (O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)), I.sk.propType && (O.length ? C.skewFromAxis(-I.sk.v * O[0], I.sa.v * O[1]) : C.skewFromAxis(-I.sk.v * O, I.sa.v * O)), I.r.propType && (O.length ? C.rotateZ(-I.r.v * O[2]) : C.rotateZ(-I.r.v * O)), I.ry.propType && (O.length ? C.rotateY(I.ry.v * O[1]) : C.rotateY(I.ry.v * O)), I.rx.propType && (O.length ? C.rotateX(I.rx.v * O[0]) : C.rotateX(I.rx.v * O)), I.o.propType && (O.length ? (W += (I.o.v * O[0] - W) * O[0]) : (W += (I.o.v * O - W) * O)), t.strokeWidthAnim && I.sw.propType && (O.length ? (Y += I.sw.v * O[0]) : (Y += I.sw.v * O)), t.strokeColorAnim && I.sc.propType)) for (K = 0; K < 3; K += 1) O.length ? (X[K] = X[K] + (I.sc.v[K] - X[K]) * O[0]) : (X[K] = X[K] + (I.sc.v[K] - X[K]) * O);
                                                    if (t.fillColorAnim && t.fc) {
                                                        if (I.fc.propType) for (K = 0; K < 3; K += 1) O.length ? (H[K] = H[K] + (I.fc.v[K] - H[K]) * O[0]) : (H[K] = H[K] + (I.fc.v[K] - H[K]) * O);
                                                        I.fh.propType && (H = O.length ? E(H, I.fh.v * O[0]) : E(H, I.fh.v * O)), I.fs.propType && (H = O.length ? x(H, I.fs.v * O[0]) : x(H, I.fs.v * O)), I.fb.propType && (H = O.length ? S(H, I.fb.v * O[0]) : S(H, I.fb.v * O));
                                                    }
                                                }
                                                for (L = 0; L < R; L += 1) (I = A[L].a).p.propType && ((O = A[L].s.getMult(D[a].anIndexes[L], M.a[L].s.totalChars)), this._hasMaskedPath ? (O.length ? C.translate(0, I.p.v[1] * O[0], -I.p.v[2] * O[1]) : C.translate(0, I.p.v[1] * O, -I.p.v[2] * O)) : O.length ? C.translate(I.p.v[0] * O[0], I.p.v[1] * O[1], -I.p.v[2] * O[2]) : C.translate(I.p.v[0] * O, I.p.v[1] * O, -I.p.v[2] * O));
                                                if ((t.strokeWidthAnim && (J = Y < 0 ? 0 : Y), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath)) {
                                                    if ((C.translate(0, -t.ls), C.translate(0, (k[1] * V) / 100 + s, 0), M.p.p)) {
                                                        b = (o.point[1] - m.point[1]) / (o.point[0] - m.point[0]);
                                                        var dt = (180 * Math.atan(b)) / Math.PI;
                                                        o.point[0] < m.point[0] && (dt += 180), C.rotate((-dt * Math.PI) / 180);
                                                    }
                                                    C.translate(j, G, 0), (h -= (k[0] * D[a].an) / 200), D[a + 1] && $ !== D[a + 1].ind && ((h += D[a].an / 2), (h += (t.tr / 1e3) * t.finalSize));
                                                } else {
                                                    switch ((C.translate(i, s, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j)) {
                                                        case 1:
                                                            C.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]), 0, 0);
                                                            break;
                                                        case 2:
                                                            C.translate(D[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[a].line]) / 2, 0, 0);
                                                    }
                                                    C.translate(0, -t.ls), C.translate(B, 0, 0), C.translate((k[0] * D[a].an) / 200, (k[1] * V) / 100, 0), (i += D[a].l + (t.tr / 1e3) * t.finalSize);
                                                }
                                                "html" === P ? (at = C.toCSS()) : "svg" === P ? (at = C.to2dCSS()) : (rt = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]]), (Q = W);
                                            }
                                            this.lettersChangedFlag = F <= a ? ((z = new mt(Q, J, U, Z, at, rt)), this.renderedLetters.push(z), (F += 1), !0) : (z = this.renderedLetters[a]).update(Q, J, U, Z, at, rt) || this.lettersChangedFlag;
                                        }
                                    }
                                }),
                                (ft.prototype.getValue = function () {
                                    this._elem.globalData.frameId !== this._frameId && ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
                                }),
                                (ft.prototype.mHelper = new N()),
                                (ft.prototype.defaultPropsArray = []),
                                B([R], ft),
                                (mt.prototype.update = function (t, e, i, s, a, r) {
                                    (this._mdf.o = !1), (this._mdf.sw = !1), (this._mdf.sc = !1), (this._mdf.fc = !1), (this._mdf.m = !1);
                                    var n = (this._mdf.p = !1);
                                    return this.o !== t && ((this.o = t), (n = this._mdf.o = !0)), this.sw !== e && ((this.sw = e), (n = this._mdf.sw = !0)), this.sc !== i && ((this.sc = i), (n = this._mdf.sc = !0)), this.fc !== s && ((this.fc = s), (n = this._mdf.fc = !0)), this.m !== a && ((this.m = a), (n = this._mdf.m = !0)), !r.length || (this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13]) || ((this.p = r), (n = this._mdf.p = !0)), n;
                                }),
                                (ct.prototype.defaultBoxWidth = [0, 0]),
                                (ct.prototype.copyData = function (t, e) {
                                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                                    return t;
                                }),
                                (ct.prototype.setCurrentData = function (t) {
                                    t.__complete || this.completeTextData(t), (this.currentData = t), (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth), (this._mdf = !0);
                                }),
                                (ct.prototype.searchProperty = function () {
                                    return this.searchKeyframes();
                                }),
                                (ct.prototype.searchKeyframes = function () {
                                    return (this.kf = 1 < this.data.d.k.length), this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
                                }),
                                (ct.prototype.addEffect = function (t) {
                                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
                                }),
                                (ct.prototype.getValue = function (t) {
                                    if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || t) {
                                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                                        var e = this.currentData,
                                            i = this.keysIndex;
                                        if (this.lock) this.setCurrentData(this.currentData);
                                        else {
                                            (this.lock = !0), (this._mdf = !1);
                                            var s,
                                                a = this.effectsSequence.length,
                                                r = t || this.data.d.k[this.keysIndex].s;
                                            for (s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                                            e !== r && this.setCurrentData(r), (this.pv = this.v = this.currentData), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                                        }
                                    }
                                }),
                                (ct.prototype.getKeyframeValue = function () {
                                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && (t[i].s, !(i === s - 1 || t[i + 1].t > e)); ) i += 1;
                                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
                                }),
                                (ct.prototype.buildFinalText = function (t) {
                                    for (var e, i = G.getCombinedCharacterCodes(), s = [], a = 0, r = t.length; a < r; ) (e = t.charCodeAt(a)), -1 !== i.indexOf(e) ? (s[s.length - 1] += t.charAt(a)) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(a + 1)) && e <= 57343 ? (s.push(t.substr(a, 2)), ++a) : s.push(t.charAt(a)), (a += 1);
                                    return s;
                                }),
                                (ct.prototype.completeTextData = function (t) {
                                    t.__complete = !0;
                                    var e,
                                        i,
                                        s,
                                        a,
                                        r,
                                        n,
                                        h,
                                        o = this.elem.globalData.fontManager,
                                        l = this.data,
                                        p = [],
                                        f = 0,
                                        d = l.m.g,
                                        m = 0,
                                        c = 0,
                                        u = 0,
                                        g = [],
                                        y = 0,
                                        v = 0,
                                        b = o.getFontByName(t.f),
                                        _ = 0,
                                        k = b.fStyle ? b.fStyle.split(" ") : [],
                                        A = "normal",
                                        M = "normal";
                                    for (i = k.length, e = 0; e < i; e += 1)
                                        switch (k[e].toLowerCase()) {
                                            case "italic":
                                                M = "italic";
                                                break;
                                            case "bold":
                                                A = "700";
                                                break;
                                            case "black":
                                                A = "900";
                                                break;
                                            case "medium":
                                                A = "500";
                                                break;
                                            case "regular":
                                            case "normal":
                                                A = "400";
                                                break;
                                            case "light":
                                            case "thin":
                                                A = "200";
                                        }
                                    (t.fWeight = b.fWeight || A), (t.fStyle = M), (t.finalSize = t.s), (t.finalText = this.buildFinalText(t.t)), (i = t.finalText.length), (t.finalLineHeight = t.lh);
                                    var C,
                                        P = (t.tr / 1e3) * t.finalSize;
                                    if (t.sz)
                                        for (var x, S, E = !0, F = t.sz[0], D = t.sz[1]; E; ) {
                                            (y = x = 0), (i = (S = this.buildFinalText(t.t)).length), (P = (t.tr / 1e3) * t.finalSize);
                                            var w = -1;
                                            for (e = 0; e < i; e += 1) (C = S[e].charCodeAt(0)), (s = !1), " " === S[e] ? (w = e) : (13 !== C && 3 !== C) || ((s = !(y = 0)), (x += t.finalLineHeight || 1.2 * t.finalSize)), F < y + (_ = o.chars ? ((h = o.getCharData(S[e], b.fStyle, b.fFamily)), s ? 0 : (h.w * t.finalSize) / 100) : o.measureText(S[e], t.f, t.finalSize)) && " " !== S[e] ? (-1 === w ? (i += 1) : (e = w), (x += t.finalLineHeight || 1.2 * t.finalSize), S.splice(e, w === e ? 1 : 0, "\r"), (w = -1), (y = 0)) : ((y += _), (y += P));
                                            (x += (b.ascent * t.finalSize) / 100), this.canResize && t.finalSize > this.minimumFontSize && D < x ? ((t.finalSize -= 1), (t.finalLineHeight = (t.finalSize * t.lh) / t.s)) : ((t.finalText = S), (i = t.finalText.length), (E = !1));
                                        }
                                    y = -P;
                                    var T,
                                        I = (_ = 0);
                                    for (e = 0; e < i; e += 1)
                                        if (((s = !1), 13 === (C = (T = t.finalText[e]).charCodeAt(0)) || 3 === C ? ((I = 0), g.push(y), (v = v < y ? y : v), (y = -2 * P), (s = !(a = "")), (u += 1)) : (a = T), (_ = o.chars ? ((h = o.getCharData(T, b.fStyle, o.getFontByName(t.f).fFamily)), s ? 0 : (h.w * t.finalSize) / 100) : o.measureText(a, t.f, t.finalSize)), " " === T ? (I += _ + P) : ((y += _ + P + I), (I = 0)), p.push({ l: _, an: _, add: m, n: s, anIndexes: [], val: a, line: u, animatorJustifyOffset: 0 }), 2 == d)) {
                                            if (((m += _), "" === a || " " === a || e === i - 1)) {
                                                for (("" !== a && " " !== a) || (m -= _); c <= e; ) (p[c].an = m), (p[c].ind = f), (p[c].extra = _), (c += 1);
                                                (f += 1), (m = 0);
                                            }
                                        } else if (3 == d) {
                                            if (((m += _), "" === a || e === i - 1)) {
                                                for ("" === a && (m -= _); c <= e; ) (p[c].an = m), (p[c].ind = f), (p[c].extra = _), (c += 1);
                                                (m = 0), (f += 1);
                                            }
                                        } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
                                    if (((t.l = p), (v = v < y ? y : v), g.push(y), t.sz)) (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
                                    else
                                        switch (((t.boxWidth = v), t.j)) {
                                            case 1:
                                                t.justifyOffset = -t.boxWidth;
                                                break;
                                            case 2:
                                                t.justifyOffset = -t.boxWidth / 2;
                                                break;
                                            default:
                                                t.justifyOffset = 0;
                                        }
                                    t.lineWidths = g;
                                    var L,
                                        R,
                                        z = l.a;
                                    n = z.length;
                                    var V,
                                        N,
                                        O = [];
                                    for (r = 0; r < n; r += 1) {
                                        for ((L = z[r]).a.sc && (t.strokeColorAnim = !0), L.a.sw && (t.strokeWidthAnim = !0), (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0), N = 0, V = L.s.b, e = 0; e < i; e += 1) ((R = p[e]).anIndexes[r] = N), ((1 == V && "" !== R.val) || (2 == V && "" !== R.val && " " !== R.val) || (3 == V && (R.n || " " == R.val || e == i - 1)) || (4 == V && (R.n || e == i - 1))) && (1 === L.s.rn && O.push(N), (N += 1));
                                        l.a[r].s.totalChars = N;
                                        var B,
                                            q = -1;
                                        if (1 === L.s.rn) for (e = 0; e < i; e += 1) q != (R = p[e]).anIndexes[r] && ((q = R.anIndexes[r]), (B = O.splice(Math.floor(Math.random() * O.length), 1)[0])), (R.anIndexes[r] = B);
                                    }
                                    (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize), (t.ls = t.ls || 0), (t.ascent = (b.ascent * t.finalSize) / 100);
                                }),
                                (ct.prototype.updateDocumentData = function (t, e) {
                                    e = void 0 === e ? this.keysIndex : e;
                                    var i = this.copyData({}, this.data.d.k[e].s);
                                    (i = this.copyData(i, t)), (this.data.d.k[e].s = i), this.recalculate(e), this.elem.addDynamicProperty(this);
                                }),
                                (ct.prototype.recalculate = function (t) {
                                    var e = this.data.d.k[t].s;
                                    (e.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(e);
                                }),
                                (ct.prototype.canResizeFont = function (t) {
                                    (this.canResize = t), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                                }),
                                (ct.prototype.setMinimumFontSize = function (t) {
                                    (this.minimumFontSize = Math.floor(t) || 1), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                                });
                            var ut,
                                gt,
                                yt,
                                vt,
                                bt,
                                _t = (function () {
                                    var t = Math.max,
                                        e = Math.min,
                                        i = Math.floor;
                                    function s(t, e) {
                                        (this._currentTextLength = -1), (this.k = !1), (this.data = e), (this.elem = t), (this.comp = t.comp), (this.finalS = 0), (this.finalE = 0), this.initDynamicPropertyContainer(t), (this.s = W.getProp(t, e.s || { k: 0 }, 0, 0, this)), (this.e = "e" in e ? W.getProp(t, e.e, 0, 0, this) : { v: 100 }), (this.o = W.getProp(t, e.o || { k: 0 }, 0, 0, this)), (this.xe = W.getProp(t, e.xe || { k: 0 }, 0, 0, this)), (this.ne = W.getProp(t, e.ne || { k: 0 }, 0, 0, this)), (this.a = W.getProp(t, e.a, 0, 0.01, this)), this.dynamicProperties.length || this.getValue();
                                    }
                                    return (
                                        (s.prototype = {
                                            getMult: function (s) {
                                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                                var a = 0,
                                                    r = 0,
                                                    n = 1,
                                                    h = 1;
                                                0 < this.ne.v ? (a = this.ne.v / 100) : (r = -this.ne.v / 100), 0 < this.xe.v ? (n = 1 - this.xe.v / 100) : (h = 1 + this.xe.v / 100);
                                                var o = O.getBezierEasing(a, r, n, h).get,
                                                    l = 0,
                                                    p = this.finalS,
                                                    f = this.finalE,
                                                    d = this.data.sh;
                                                if (2 === d) l = o((l = f === p ? (f <= s ? 1 : 0) : t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))));
                                                else if (3 === d) l = o((l = f === p ? (f <= s ? 0 : 1) : 1 - t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))));
                                                else if (4 === d) f === p ? (l = 0) : (l = t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))) < 0.5 ? (l *= 2) : (l = 1 - 2 * (l - 0.5)), (l = o(l));
                                                else if (5 === d) {
                                                    if (f === p) l = 0;
                                                    else {
                                                        var m = f - p,
                                                            c = -m / 2 + (s = e(t(0, s + 0.5 - p), f - p)),
                                                            u = m / 2;
                                                        l = Math.sqrt(1 - (c * c) / (u * u));
                                                    }
                                                    l = o(l);
                                                } else l = 6 === d ? o((l = f === p ? 0 : ((s = e(t(0, s + 0.5 - p), f - p)), (1 + Math.cos(Math.PI + (2 * Math.PI * s) / (f - p))) / 2))) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1))), o(l));
                                                return l * this.a.v;
                                            },
                                            getValue: function (t) {
                                                this.iterateDynamicProperties(), (this._mdf = t || this._mdf), (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0), t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                                    i = this.o.v / e,
                                                    s = this.s.v / e + i,
                                                    a = this.e.v / e + i;
                                                if (a < s) {
                                                    var r = s;
                                                    (s = a), (a = r);
                                                }
                                                (this.finalS = s), (this.finalE = a);
                                            },
                                        }),
                                        B([R], s),
                                        {
                                            getTextSelectorProp: function (t, e, i) {
                                                return new s(t, e, i);
                                            },
                                        }
                                    );
                                })(),
                                kt = function (t, e, i, s) {
                                    var a = 0,
                                        r = t,
                                        n = T(r);
                                    function h() {
                                        return a ? n[(a -= 1)] : e();
                                    }
                                    return {
                                        newElement: h,
                                        release: function (t) {
                                            a === r && ((n = At.double(n)), (r *= 2)), i && i(t), (n[a] = t), (a += 1);
                                        },
                                    };
                                },
                                At = {
                                    double: function (t) {
                                        return t.concat(T(t.length));
                                    },
                                },
                                Mt = kt(8, function () {
                                    return w("float32", 2);
                                }),
                                Ct =
                                    (((ut = kt(
                                        4,
                                        function () {
                                            return new Y();
                                        },
                                        function (t) {
                                            var e,
                                                i = t._length;
                                            for (e = 0; e < i; e += 1) Mt.release(t.v[e]), Mt.release(t.i[e]), Mt.release(t.o[e]), (t.v[e] = null), (t.i[e] = null), (t.o[e] = null);
                                            (t._length = 0), (t.c = !1);
                                        },
                                    )).clone = function (t) {
                                        var e,
                                            i = ut.newElement(),
                                            s = void 0 === t._length ? t.v.length : t._length;
                                        for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                                        return i;
                                    }),
                                    ut),
                                Pt =
                                    ((gt = {
                                        newShapeCollection: function () {
                                            return yt ? bt[(yt -= 1)] : new et();
                                        },
                                        release: function (t) {
                                            var e,
                                                i = t._length;
                                            for (e = 0; e < i; e += 1) Ct.release(t.shapes[e]);
                                            (t._length = 0), yt === vt && ((bt = At.double(bt)), (vt *= 2)), (bt[yt] = t), (yt += 1);
                                        },
                                    }),
                                    (yt = 0),
                                    (bt = T((vt = 4))),
                                    gt),
                                xt = kt(
                                    8,
                                    function () {
                                        return { lengths: [], totalLength: 0 };
                                    },
                                    function (t) {
                                        var e,
                                            i = t.lengths.length;
                                        for (e = 0; e < i; e += 1) St.release(t.lengths[e]);
                                        t.lengths.length = 0;
                                    },
                                ),
                                St = kt(8, function () {
                                    return { addedLength: 0, percents: w("float32", f), lengths: w("float32", f) };
                                });
                            function Et() {}
                            function Ft(t, e) {
                                (this.animationItem = t), (this.layers = null), (this.renderedFrame = -1), (this.svgElement = I("svg"));
                                var i = "";
                                if (e && e.title) {
                                    var s = I("title"),
                                        a = M();
                                    s.setAttribute("id", a), (s.textContent = e.title), this.svgElement.appendChild(s), (i += a);
                                }
                                if (e && e.description) {
                                    var r = I("desc"),
                                        n = M();
                                    r.setAttribute("id", n), (r.textContent = e.description), this.svgElement.appendChild(r), (i += " " + n);
                                }
                                i && this.svgElement.setAttribute("aria-labelledby", i);
                                var h = I("defs");
                                this.svgElement.appendChild(h);
                                var o = I("g");
                                this.svgElement.appendChild(o), (this.layerElement = o), (this.renderConfig = { preserveAspectRatio: (e && e.preserveAspectRatio) || "xMidYMid meet", imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || "xMidYMid slice", progressiveLoad: (e && e.progressiveLoad) || !1, hideOnTransparent: !e || !1 !== e.hideOnTransparent, viewBoxOnly: (e && e.viewBoxOnly) || !1, viewBoxSize: (e && e.viewBoxSize) || !1, className: (e && e.className) || "", id: (e && e.id) || "", focusable: e && e.focusable, filterSize: { width: (e && e.filterSize && e.filterSize.width) || "100%", height: (e && e.filterSize && e.filterSize.height) || "100%", x: (e && e.filterSize && e.filterSize.x) || "0%", y: (e && e.filterSize && e.filterSize.y) || "0%" } }), (this.globalData = { _mdf: !1, frameNum: -1, defs: h, renderConfig: this.renderConfig }), (this.elements = []), (this.pendingElements = []), (this.destroyed = !1), (this.rendererType = "svg");
                            }
                            function Dt(t, e, i) {
                                (this.data = t), (this.element = e), (this.globalData = i), (this.storedData = []), (this.masksProperties = this.data.masksProperties || []), (this.maskElement = null);
                                var a,
                                    r = this.globalData.defs,
                                    n = this.masksProperties ? this.masksProperties.length : 0;
                                (this.viewData = T(n)), (this.solidPath = "");
                                var h,
                                    o,
                                    l,
                                    p,
                                    f,
                                    d,
                                    m,
                                    c = this.masksProperties,
                                    u = 0,
                                    g = [],
                                    y = M(),
                                    v = "clipPath",
                                    b = "clip-path";
                                for (a = 0; a < n; a++)
                                    if (((("a" !== c[a].mode && "n" !== c[a].mode) || c[a].inv || 100 !== c[a].o.k || c[a].o.x) && (b = v = "mask"), ("s" != c[a].mode && "i" != c[a].mode) || 0 !== u ? (p = null) : ((p = I("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), g.push(p)), (h = I("path")), "n" != c[a].mode)) {
                                        var _;
                                        if (((u += 1), h.setAttribute("fill", "s" === c[a].mode ? "#000000" : "#ffffff"), h.setAttribute("clip-rule", "nonzero"), 0 !== c[a].x.k ? ((b = v = "mask"), (m = W.getProp(this.element, c[a].x, 0, null, this.element)), (_ = M()), (f = I("filter")).setAttribute("id", _), (d = I("feMorphology")).setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), f.appendChild(d), r.appendChild(f), h.setAttribute("stroke", "s" === c[a].mode ? "#000000" : "#ffffff")) : (m = d = null), (this.storedData[a] = { elem: h, x: m, expan: d, lastPath: "", lastOperator: "", filterId: _, lastRadius: 0 }), "i" == c[a].mode)) {
                                            l = g.length;
                                            var k = I("g");
                                            for (o = 0; o < l; o += 1) k.appendChild(g[o]);
                                            var A = I("mask");
                                            A.setAttribute("mask-type", "alpha"), A.setAttribute("id", y + "_" + u), A.appendChild(h), r.appendChild(A), k.setAttribute("mask", "url(" + s + "#" + y + "_" + u + ")"), (g.length = 0), g.push(k);
                                        } else g.push(h);
                                        c[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), (this.viewData[a] = { elem: h, lastPath: "", op: W.getProp(this.element, c[a].o, 0, 0.01, this.element), prop: J.getShapeProp(this.element, c[a], 3), invRect: p }), this.viewData[a].prop.k || this.drawPath(c[a], this.viewData[a].prop.v, this.viewData[a]);
                                    } else (this.viewData[a] = { op: W.getProp(this.element, c[a].o, 0, 0.01, this.element), prop: J.getShapeProp(this.element, c[a], 3), elem: h, lastPath: "" }), r.appendChild(h);
                                for (this.maskElement = I(v), n = g.length, a = 0; a < n; a += 1) this.maskElement.appendChild(g[a]);
                                0 < u && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(b, "url(" + s + "#" + y + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
                            }
                            function wt() {}
                            function Tt() {}
                            function It() {}
                            function Lt() {}
                            function Rt() {}
                            function zt(t, e) {
                                (this.elem = t), (this.pos = e);
                            }
                            function Vt(t, e) {
                                (this.data = t), (this.type = t.ty), (this.d = ""), (this.lvl = e), (this._mdf = !1), (this.closed = !0 === t.hd), (this.pElem = I("path")), (this.msElem = null);
                            }
                            function Nt(t, e, i) {
                                (this.caches = []), (this.styles = []), (this.transformers = t), (this.lStr = ""), (this.sh = i), (this.lvl = e), (this._isAnimated = !!i.k);
                                for (var s = 0, a = t.length; s < a; ) {
                                    if (t[s].mProps.dynamicProperties.length) {
                                        this._isAnimated = !0;
                                        break;
                                    }
                                    s += 1;
                                }
                            }
                            function Ot(t, e, i) {
                                (this.transform = { mProps: t, op: e, container: i }), (this.elements = []), (this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
                            }
                            function Bt(t, e, i) {
                                this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), (this.o = W.getProp(t, e.o, 0, 0.01, this)), (this.w = W.getProp(t, e.w, 0, null, this)), (this.d = new it(t, e.d || {}, "svg", this)), (this.c = W.getProp(t, e.c, 1, 255, this)), (this.style = i), (this._isAnimated = !!this._isAnimated);
                            }
                            function qt(t, e, i) {
                                this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), (this.o = W.getProp(t, e.o, 0, 0.01, this)), (this.c = W.getProp(t, e.c, 1, 255, this)), (this.style = i);
                            }
                            function jt(t, e, i) {
                                this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), this.initGradientData(t, e, i);
                            }
                            function Gt(t, e, i) {
                                this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), (this.w = W.getProp(t, e.w, 0, null, this)), (this.d = new it(t, e.d || {}, "svg", this)), this.initGradientData(t, e, i), (this._isAnimated = !!this._isAnimated);
                            }
                            function Wt() {
                                (this.it = []), (this.prevViewData = []), (this.gr = I("g"));
                            }
                            (Et.prototype.checkLayers = function (t) {
                                var e,
                                    i,
                                    s = this.layers.length;
                                for (this.completeLayers = !0, e = s - 1; 0 <= e; e--) this.elements[e] || ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), (this.completeLayers = !!this.elements[e] && this.completeLayers);
                                this.checkPendingElements();
                            }),
                                (Et.prototype.createItem = function (t) {
                                    switch (t.ty) {
                                        case 2:
                                            return this.createImage(t);
                                        case 0:
                                            return this.createComp(t);
                                        case 1:
                                            return this.createSolid(t);
                                        case 3:
                                            return this.createNull(t);
                                        case 4:
                                            return this.createShape(t);
                                        case 5:
                                            return this.createText(t);
                                        case 13:
                                            return this.createCamera(t);
                                    }
                                    return this.createNull(t);
                                }),
                                (Et.prototype.createCamera = function () {
                                    throw new Error("You're using a 3d camera. Try the html renderer.");
                                }),
                                (Et.prototype.buildAllItems = function () {
                                    var t,
                                        e = this.layers.length;
                                    for (t = 0; t < e; t += 1) this.buildItem(t);
                                    this.checkPendingElements();
                                }),
                                (Et.prototype.includeLayers = function (t) {
                                    this.completeLayers = !1;
                                    var e,
                                        i,
                                        s = t.length,
                                        a = this.layers.length;
                                    for (e = 0; e < s; e += 1)
                                        for (i = 0; i < a; ) {
                                            if (this.layers[i].id == t[e].id) {
                                                this.layers[i] = t[e];
                                                break;
                                            }
                                            i += 1;
                                        }
                                }),
                                (Et.prototype.setProjectInterface = function (t) {
                                    this.globalData.projectInterface = t;
                                }),
                                (Et.prototype.initItems = function () {
                                    this.globalData.progressiveLoad || this.buildAllItems();
                                }),
                                (Et.prototype.buildElementParenting = function (t, e, i) {
                                    for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n; ) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), (r += 1);
                                }),
                                (Et.prototype.addPendingElement = function (t) {
                                    this.pendingElements.push(t);
                                }),
                                (Et.prototype.searchExtraCompositions = function (t) {
                                    var e,
                                        i = t.length;
                                    for (e = 0; e < i; e += 1)
                                        if (t[e].xt) {
                                            var s = this.createComp(t[e]);
                                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
                                        }
                                }),
                                (Et.prototype.setupGlobalData = function (t, e) {
                                    (this.globalData.fontManager = new G()), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), (this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)), (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)), (this.globalData.imageLoader = this.animationItem.imagePreloader), (this.globalData.frameId = 0), (this.globalData.frameRate = t.fr), (this.globalData.nm = t.nm), (this.globalData.compSize = { w: t.w, h: t.h });
                                }),
                                B([Et], Ft),
                                (Ft.prototype.createNull = function (t) {
                                    return new Ht(t, this.globalData, this);
                                }),
                                (Ft.prototype.createShape = function (t) {
                                    return new ie(t, this.globalData, this);
                                }),
                                (Ft.prototype.createText = function (t) {
                                    return new ee(t, this.globalData, this);
                                }),
                                (Ft.prototype.createImage = function (t) {
                                    return new Qt(t, this.globalData, this);
                                }),
                                (Ft.prototype.createComp = function (t) {
                                    return new te(t, this.globalData, this);
                                }),
                                (Ft.prototype.createSolid = function (t) {
                                    return new $t(t, this.globalData, this);
                                }),
                                (Ft.prototype.configAnimation = function (t) {
                                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), (this.svgElement.style.width = "100%"), (this.svgElement.style.height = "100%"), (this.svgElement.style.transform = "translate3d(0,0,0)")), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                                    var e = this.globalData.defs;
                                    this.setupGlobalData(t, e), (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad), (this.data = t);
                                    var i = I("clipPath"),
                                        a = I("rect");
                                    a.setAttribute("width", t.w), a.setAttribute("height", t.h), a.setAttribute("x", 0), a.setAttribute("y", 0);
                                    var r = M();
                                    i.setAttribute("id", r), i.appendChild(a), this.layerElement.setAttribute("clip-path", "url(" + s + "#" + r + ")"), e.appendChild(i), (this.layers = t.layers), (this.elements = T(t.layers.length));
                                }),
                                (Ft.prototype.destroy = function () {
                                    (this.animationItem.wrapper.innerHTML = ""), (this.layerElement = null), (this.globalData.defs = null);
                                    var t,
                                        e = this.layers ? this.layers.length : 0;
                                    for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
                                    (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
                                }),
                                (Ft.prototype.updateContainerSize = function () {}),
                                (Ft.prototype.buildItem = function (t) {
                                    var i = this.elements;
                                    if (!i[t] && 99 != this.layers[t].ty) {
                                        i[t] = !0;
                                        var s = this.createItem(this.layers[t]);
                                        (i[t] = s), e && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? s.setMatte(i[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(s)));
                                    }
                                }),
                                (Ft.prototype.checkPendingElements = function () {
                                    for (; this.pendingElements.length; ) {
                                        var t = this.pendingElements.pop();
                                        if ((t.checkParenting(), t.data.tt))
                                            for (var e = 0, i = this.elements.length; e < i; ) {
                                                if (this.elements[e] === t) {
                                                    t.setMatte(this.elements[e - 1].layerId);
                                                    break;
                                                }
                                                e += 1;
                                            }
                                    }
                                }),
                                (Ft.prototype.renderFrame = function (t) {
                                    if (this.renderedFrame !== t && !this.destroyed) {
                                        null === t ? (t = this.renderedFrame) : (this.renderedFrame = t), (this.globalData.frameNum = t), (this.globalData.frameId += 1), (this.globalData.projectInterface.currentFrame = t), (this.globalData._mdf = !1);
                                        var e,
                                            i = this.layers.length;
                                        for (this.completeLayers || this.checkLayers(t), e = i - 1; 0 <= e; e--) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                                        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                                    }
                                }),
                                (Ft.prototype.appendElementInPos = function (t, e) {
                                    var i = t.getBaseElement();
                                    if (i) {
                                        for (var s, a = 0; a < e; ) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), (a += 1);
                                        s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i);
                                    }
                                }),
                                (Ft.prototype.hide = function () {
                                    this.layerElement.style.display = "none";
                                }),
                                (Ft.prototype.show = function () {
                                    this.layerElement.style.display = "block";
                                }),
                                (Dt.prototype.getMaskProperty = function (t) {
                                    return this.viewData[t].prop;
                                }),
                                (Dt.prototype.renderFrame = function (t) {
                                    var e,
                                        i = this.element.finalTransform.mat,
                                        a = this.masksProperties.length;
                                    for (e = 0; e < a; e++)
                                        if (((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t)))) {
                                            var r = this.storedData[e].expan;
                                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && ((this.storedData[e].lastOperator = "erode"), this.storedData[e].elem.setAttribute("filter", "url(" + s + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && ((this.storedData[e].lastOperator = "dilate"), this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
                                        }
                                }),
                                (Dt.prototype.getMaskelement = function () {
                                    return this.maskElement;
                                }),
                                (Dt.prototype.createLayerSolidPath = function () {
                                    var t = "M0,0 ";
                                    return (t += " h" + this.globalData.compSize.w), (t += " v" + this.globalData.compSize.h), (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " ";
                                }),
                                (Dt.prototype.drawPath = function (t, e, i) {
                                    var s,
                                        a,
                                        r = " M" + e.v[0][0] + "," + e.v[0][1];
                                    for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                                    if ((e.c && 1 < a && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r)) {
                                        var n = "";
                                        i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), (i.lastPath = r);
                                    }
                                }),
                                (Dt.prototype.destroy = function () {
                                    (this.element = null), (this.globalData = null), (this.maskElement = null), (this.data = null), (this.masksProperties = null);
                                }),
                                (wt.prototype = {
                                    initHierarchy: function () {
                                        (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
                                    },
                                    setHierarchy: function (t) {
                                        this.hierarchy = t;
                                    },
                                    setAsParent: function () {
                                        this._isParent = !0;
                                    },
                                    checkParenting: function () {
                                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
                                    },
                                }),
                                (Tt.prototype = {
                                    initFrame: function () {
                                        (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
                                    },
                                    prepareProperties: function (t, e) {
                                        var i,
                                            s = this.dynamicProperties.length;
                                        for (i = 0; i < s; i += 1) (e || (this._isParent && "transform" === this.dynamicProperties[i].propType)) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
                                    },
                                    addDynamicProperty: function (t) {
                                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
                                    },
                                }),
                                (It.prototype = {
                                    initTransform: function () {
                                        (this.finalTransform = { mProp: this.data.ks ? X.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new N() }), this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
                                    },
                                    renderTransform: function () {
                                        if (((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame), (this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame), this.hierarchy)) {
                                            var t,
                                                e = this.finalTransform.mat,
                                                i = 0,
                                                s = this.hierarchy.length;
                                            if (!this.finalTransform._matMdf)
                                                for (; i < s; ) {
                                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                                        this.finalTransform._matMdf = !0;
                                                        break;
                                                    }
                                                    i += 1;
                                                }
                                            if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) (t = this.hierarchy[i].finalTransform.mProp.v.props), e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                                        }
                                    },
                                    globalToLocal: function (t) {
                                        var e = [];
                                        e.push(this.finalTransform);
                                        for (var i = !0, s = this.comp; i; ) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), (s = s.comp)) : (i = !1);
                                        var a,
                                            r,
                                            n = e.length;
                                        for (a = 0; a < n; a += 1) (r = e[a].mat.applyToPointArray(0, 0, 0)), (t = [t[0] - r[0], t[1] - r[1], 0]);
                                        return t;
                                    },
                                    mHelper: new N(),
                                }),
                                (Lt.prototype = {
                                    initRenderable: function () {
                                        (this.isInRange = !1), (this.hidden = !1), (this.isTransparent = !1), (this.renderableComponents = []);
                                    },
                                    addRenderableComponent: function (t) {
                                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
                                    },
                                    removeRenderableComponent: function (t) {
                                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
                                    },
                                    prepareRenderableFrame: function (t) {
                                        this.checkLayerLimits(t);
                                    },
                                    checkTransparency: function () {
                                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && ((this.isTransparent = !0), this.hide()) : this.isTransparent && ((this.isTransparent = !1), this.show());
                                    },
                                    checkLayerLimits: function (t) {
                                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show()) : !1 !== this.isInRange && ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
                                    },
                                    renderRenderable: function () {
                                        var t,
                                            e = this.renderableComponents.length;
                                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame);
                                    },
                                    sourceRectAtTime: function () {
                                        return { top: 0, left: 0, width: 100, height: 100 };
                                    },
                                    getLayerSize: function () {
                                        return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
                                    },
                                }),
                                B(
                                    [
                                        Lt,
                                        (function (t) {
                                            function e() {}
                                            return (e.prototype = t), e;
                                        })({
                                            initElement: function (t, e, i) {
                                                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                                            },
                                            hide: function () {
                                                this.hidden || (this.isInRange && !this.isTransparent) || (((this.baseElement || this.layerElement).style.display = "none"), (this.hidden = !0));
                                            },
                                            show: function () {
                                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), (this.hidden = !1), (this._isFirstFrame = !0));
                                            },
                                            renderFrame: function () {
                                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                                            },
                                            renderInnerContent: function () {},
                                            prepareFrame: function (t) {
                                                (this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
                                            },
                                            destroy: function () {
                                                (this.innerElem = null), this.destroyBaseElement();
                                            },
                                        }),
                                    ],
                                    Rt,
                                ),
                                (Vt.prototype.reset = function () {
                                    (this.d = ""), (this._mdf = !1);
                                }),
                                (Nt.prototype.setAsAnimated = function () {
                                    this._isAnimated = !0;
                                }),
                                B([R], Bt),
                                B([R], qt),
                                (jt.prototype.initGradientData = function (t, e, i) {
                                    (this.o = W.getProp(t, e.o, 0, 0.01, this)), (this.s = W.getProp(t, e.s, 1, null, this)), (this.e = W.getProp(t, e.e, 1, null, this)), (this.h = W.getProp(t, e.h || { k: 0 }, 0, 0.01, this)), (this.a = W.getProp(t, e.a || { k: 0 }, 0, d, this)), (this.g = new st(t, e.g, this)), (this.style = i), (this.stops = []), this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), (this._isAnimated = !!this._isAnimated);
                                }),
                                (jt.prototype.setGradientData = function (t, e) {
                                    var i = M(),
                                        a = I(1 === e.t ? "linearGradient" : "radialGradient");
                                    a.setAttribute("id", i), a.setAttribute("spreadMethod", "pad"), a.setAttribute("gradientUnits", "userSpaceOnUse");
                                    var r,
                                        n,
                                        h,
                                        o = [];
                                    for (h = 4 * e.g.p, n = 0; n < h; n += 4) (r = I("stop")), a.appendChild(r), o.push(r);
                                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + s + "#" + i + ")"), (this.gf = a), (this.cst = o);
                                }),
                                (jt.prototype.setGradientOpacity = function (t, e) {
                                    if (this.g._hasOpacity && !this.g._collapsable) {
                                        var i,
                                            a,
                                            r,
                                            n = I("mask"),
                                            h = I("path");
                                        n.appendChild(h);
                                        var o = M(),
                                            l = M();
                                        n.setAttribute("id", l);
                                        var p = I(1 === t.t ? "linearGradient" : "radialGradient");
                                        p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), (r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                                        var f = this.stops;
                                        for (a = 4 * t.g.p; a < r; a += 2) (i = I("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(i), f.push(i);
                                        h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + s + "#" + o + ")"), (this.of = p), (this.ms = n), (this.ost = f), (this.maskId = l), (e.msElem = h);
                                    }
                                }),
                                B([R], jt),
                                B([jt, R], Gt);
                            var Xt = (function () {
                                var t = new N(),
                                    e = new N();
                                function i(t, e, i) {
                                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
                                }
                                function s(i, s, a) {
                                    var r,
                                        n,
                                        h,
                                        o,
                                        l,
                                        p,
                                        f,
                                        d,
                                        m,
                                        c,
                                        u,
                                        g = s.styles.length,
                                        y = s.lvl;
                                    for (p = 0; p < g; p += 1) {
                                        if (((o = s.sh._mdf || a), s.styles[p].lvl < y)) {
                                            for (d = e.reset(), c = y - s.styles[p].lvl, u = s.transformers.length - 1; !o && 0 < c; ) (o = s.transformers[u].mProps._mdf || o), c--, u--;
                                            if (o) for (c = y - s.styles[p].lvl, u = s.transformers.length - 1; 0 < c; ) (m = s.transformers[u].mProps.v.props), d.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), c--, u--;
                                        } else d = t;
                                        if (((n = (f = s.sh.paths)._length), o)) {
                                            for (h = "", r = 0; r < n; r += 1) (l = f.shapes[r]) && l._length && (h += nt(l, l._length, l.c, d));
                                            s.caches[p] = h;
                                        } else h = s.caches[p];
                                        (s.styles[p].d += !0 === i.hd ? "" : h), (s.styles[p]._mdf = o || s.styles[p]._mdf);
                                    }
                                }
                                function a(t, e, i) {
                                    var s = e.style;
                                    (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + o(e.c.v[0]) + "," + o(e.c.v[1]) + "," + o(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v);
                                }
                                function r(t, e, i) {
                                    n(t, e, i), h(t, e, i);
                                }
                                function n(t, e, i) {
                                    var s,
                                        a,
                                        r,
                                        n,
                                        h,
                                        o = e.gf,
                                        l = e.g._hasOpacity,
                                        p = e.s.v,
                                        f = e.e.v;
                                    if (e.o._mdf || i) {
                                        var d = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                        e.style.pElem.setAttribute(d, e.o.v);
                                    }
                                    if (e.s._mdf || i) {
                                        var m = 1 === t.t ? "x1" : "cx",
                                            c = "x1" === m ? "y1" : "cy";
                                        o.setAttribute(m, p[0]), o.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(c, p[1]));
                                    }
                                    if (e.g._cmdf || i) {
                                        s = e.cst;
                                        var u = e.g.c;
                                        for (r = s.length, a = 0; a < r; a += 1) (n = s[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")");
                                    }
                                    if (l && (e.g._omdf || i)) {
                                        var g = e.g.o;
                                        for (r = (s = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) (n = s[a]), e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1]);
                                    }
                                    if (1 === t.t) (e.e._mdf || i) && (o.setAttribute("x2", f[0]), o.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                                    else if (((e.s._mdf || e.e._mdf || i) && ((h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2))), o.setAttribute("r", h), l && !e.g._collapsable && e.of.setAttribute("r", h)), e.e._mdf || e.h._mdf || e.a._mdf || i)) {
                                        h || (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                        var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                            v = h * (1 <= e.h.v ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                                            b = Math.cos(y + e.a.v) * v + p[0],
                                            _ = Math.sin(y + e.a.v) * v + p[1];
                                        o.setAttribute("fx", b), o.setAttribute("fy", _), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _));
                                    }
                                }
                                function h(t, e, i) {
                                    var s = e.style,
                                        a = e.d;
                                    a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + o(e.c.v[0]) + "," + o(e.c.v[1]) + "," + o(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v));
                                }
                                return {
                                    createRenderFunction: function (t) {
                                        switch ((t.ty, t.ty)) {
                                            case "fl":
                                                return a;
                                            case "gf":
                                                return n;
                                            case "gs":
                                                return r;
                                            case "st":
                                                return h;
                                            case "sh":
                                            case "el":
                                            case "rc":
                                            case "sr":
                                                return s;
                                            case "tr":
                                                return i;
                                        }
                                    },
                                };
                            })();
                            function Yt() {}
                            function Ht(t, e, i) {
                                this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
                            }
                            function Kt() {}
                            function Jt() {}
                            function Ut() {}
                            function Zt() {}
                            function Qt(t, e, i) {
                                (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, i), (this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h });
                            }
                            function $t(t, e, i) {
                                this.initElement(t, e, i);
                            }
                            function te(t, e, i) {
                                (this.layers = t.layers), (this.supports3d = !0), (this.completeLayers = !1), (this.pendingElements = []), (this.elements = this.layers ? T(this.layers.length) : []), this.initElement(t, e, i), (this.tm = t.tm ? W.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 });
                            }
                            function ee(t, e, i) {
                                (this.textSpans = []), (this.renderType = "svg"), this.initElement(t, e, i);
                            }
                            function ie(t, e, i) {
                                (this.shapes = []), (this.shapesData = t.shapes), (this.stylesList = []), (this.shapeModifiers = []), (this.itemsData = []), (this.processedElements = []), (this.animatedContents = []), this.initElement(t, e, i), (this.prevViewData = []);
                            }
                            function se(t, e) {
                                this.filterManager = e;
                                var i = I("feColorMatrix");
                                if ((i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = I("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), (this.matrixFilter = i), 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)) {
                                    var s,
                                        a = I("feMerge");
                                    t.appendChild(a), (s = I("feMergeNode")).setAttribute("in", "SourceGraphic"), a.appendChild(s), (s = I("feMergeNode")).setAttribute("in", "f2"), a.appendChild(s);
                                }
                            }
                            function ae(t, e) {
                                this.filterManager = e;
                                var i = I("feColorMatrix");
                                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), (this.matrixFilter = i);
                            }
                            function re(t, e) {
                                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), (this.filterManager = e);
                                var i = I("feGaussianBlur");
                                t.appendChild(i), (this.feGaussianBlur = i);
                            }
                            function ne(t, e) {
                                (this.initialized = !1), (this.filterManager = e), (this.elem = t), (this.paths = []);
                            }
                            function he(t, e) {
                                this.filterManager = e;
                                var i = I("feColorMatrix");
                                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                                var s = I("feComponentTransfer");
                                s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), (this.matrixFilter = s);
                                var a = I("feFuncR");
                                a.setAttribute("type", "table"), s.appendChild(a), (this.feFuncR = a);
                                var r = I("feFuncG");
                                r.setAttribute("type", "table"), s.appendChild(r), (this.feFuncG = r);
                                var n = I("feFuncB");
                                n.setAttribute("type", "table"), s.appendChild(n), (this.feFuncB = n);
                            }
                            function oe(t, e) {
                                this.filterManager = e;
                                var i = this.filterManager.effectElements,
                                    s = I("feComponentTransfer");
                                (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), (s = I("feComponentTransfer"))), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), (this.feFuncRComposed = this.createFeFunc("feFuncR", s)), (this.feFuncGComposed = this.createFeFunc("feFuncG", s)), (this.feFuncBComposed = this.createFeFunc("feFuncB", s)));
                            }
                            function le(t, e) {
                                var i = e.container.globalData.renderConfig.filterSize;
                                t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), (this.filterManager = e);
                                var s = I("feGaussianBlur");
                                s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", "drop_shadow_1"), s.setAttribute("stdDeviation", "0"), (this.feGaussianBlur = s), t.appendChild(s);
                                var a = I("feOffset");
                                a.setAttribute("dx", "25"), a.setAttribute("dy", "0"), a.setAttribute("in", "drop_shadow_1"), a.setAttribute("result", "drop_shadow_2"), (this.feOffset = a), t.appendChild(a);
                                var r = I("feFlood");
                                r.setAttribute("flood-color", "#00ff00"), r.setAttribute("flood-opacity", "1"), r.setAttribute("result", "drop_shadow_3"), (this.feFlood = r), t.appendChild(r);
                                var n = I("feComposite");
                                n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
                                var h,
                                    o = I("feMerge");
                                t.appendChild(o), (h = I("feMergeNode")), o.appendChild(h), (h = I("feMergeNode")).setAttribute("in", "SourceGraphic"), (this.feMergeNode = h), (this.feMerge = o), (this.originalNodeAdded = !1), o.appendChild(h);
                            }
                            (Yt.prototype = {
                                checkMasks: function () {
                                    if (!this.data.hasMask) return !1;
                                    for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                        t += 1;
                                    }
                                    return !1;
                                },
                                initExpressions: function () {
                                    (this.layerInterface = LayerExpressionInterface(this)), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                                    this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? (this.compInterface = CompExpressionInterface(this)) : 4 === this.data.ty ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface)), (this.layerInterface.content = this.layerInterface.shapeInterface)) : 5 === this.data.ty && ((this.layerInterface.textInterface = TextExpressionInterface(this)), (this.layerInterface.text = this.layerInterface.textInterface));
                                },
                                setBlendMode: function () {
                                    var t = V(this.data.bm);
                                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
                                },
                                initBaseData: function (t, e, i) {
                                    (this.globalData = e), (this.comp = i), (this.data = t), (this.layerId = M()), this.data.sr || (this.data.sr = 1), (this.effectsManager = new ue(this.data, this, this.dynamicProperties));
                                },
                                getType: function () {
                                    return this.type;
                                },
                                sourceRectAtTime: function () {},
                            }),
                                (Ht.prototype.prepareFrame = function (t) {
                                    this.prepareProperties(t, !0);
                                }),
                                (Ht.prototype.renderFrame = function () {}),
                                (Ht.prototype.getBaseElement = function () {
                                    return null;
                                }),
                                (Ht.prototype.destroy = function () {}),
                                (Ht.prototype.sourceRectAtTime = function () {}),
                                (Ht.prototype.hide = function () {}),
                                B([Yt, It, wt, Tt], Ht),
                                (Kt.prototype = {
                                    initRendererElement: function () {
                                        this.layerElement = I("g");
                                    },
                                    createContainerElements: function () {
                                        (this.matteElement = I("g")), (this.transformedElement = this.layerElement), (this.maskedElement = this.layerElement), (this._sizeChanged = !1);
                                        var t,
                                            e,
                                            i,
                                            a = null;
                                        if (this.data.td) {
                                            if (3 == this.data.td || 1 == this.data.td) {
                                                var r = I("mask");
                                                r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), (a = r), this.globalData.defs.appendChild(r), ot.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), (t = M()), (e = lt.createFilter(t)), this.globalData.defs.appendChild(e), e.appendChild(lt.createAlphaToLuminanceFilter()), (i = I("g")).appendChild(this.layerElement), (a = i), r.appendChild(i), i.setAttribute("filter", "url(" + s + "#" + t + ")"));
                                            } else if (2 == this.data.td) {
                                                var n = I("mask");
                                                n.setAttribute("id", this.layerId), n.setAttribute("mask-type", "alpha");
                                                var h = I("g");
                                                n.appendChild(h), (t = M()), (e = lt.createFilter(t));
                                                var o = I("feComponentTransfer");
                                                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                                var l = I("feFuncA");
                                                l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                                var p = I("rect");
                                                p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + s + "#" + t + ")"), h.appendChild(p), h.appendChild(this.layerElement), (a = h), ot.maskType || (n.setAttribute("mask-type", "luminance"), e.appendChild(lt.createAlphaToLuminanceFilter()), (i = I("g")), h.appendChild(p), i.appendChild(this.layerElement), (a = i), h.appendChild(i)), this.globalData.defs.appendChild(n);
                                            }
                                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), (a = this.matteElement), (this.baseElement = this.matteElement)) : (this.baseElement = this.layerElement);
                                        if ((this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd)) {
                                            var f = I("clipPath"),
                                                d = I("path");
                                            d.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                            var m = M();
                                            if ((f.setAttribute("id", m), f.appendChild(d), this.globalData.defs.appendChild(f), this.checkMasks())) {
                                                var c = I("g");
                                                c.setAttribute("clip-path", "url(" + s + "#" + m + ")"), c.appendChild(this.layerElement), (this.transformedElement = c), a ? a.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement);
                                            } else this.layerElement.setAttribute("clip-path", "url(" + s + "#" + m + ")");
                                        }
                                        0 !== this.data.bm && this.setBlendMode();
                                    },
                                    renderElement: function () {
                                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
                                    },
                                    destroyBaseElement: function () {
                                        (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
                                    },
                                    getBaseElement: function () {
                                        return this.data.hd ? null : this.baseElement;
                                    },
                                    createRenderableComponents: function () {
                                        (this.maskManager = new Dt(this.data, this, this.globalData)), (this.renderableEffectsManager = new de(this));
                                    },
                                    setMatte: function (t) {
                                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + s + "#" + t + ")");
                                    },
                                }),
                                (Jt.prototype = {
                                    addShapeToModifiers: function (t) {
                                        var e,
                                            i = this.shapeModifiers.length;
                                        for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
                                    },
                                    isShapeInAnimatedModifiers: function (t) {
                                        for (var e = this.shapeModifiers.length; 0 < e; ) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                                        return !1;
                                    },
                                    renderModifiers: function () {
                                        if (this.shapeModifiers.length) {
                                            var t,
                                                e = this.shapes.length;
                                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                            for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame);
                                        }
                                    },
                                    lcEnum: { 1: "butt", 2: "round", 3: "square" },
                                    ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
                                    searchProcessedElement: function (t) {
                                        for (var e = this.processedElements, i = 0, s = e.length; i < s; ) {
                                            if (e[i].elem === t) return e[i].pos;
                                            i += 1;
                                        }
                                        return 0;
                                    },
                                    addProcessedElement: function (t, e) {
                                        for (var i = this.processedElements, s = i.length; s; ) if (i[(s -= 1)].elem === t) return void (i[s].pos = e);
                                        i.push(new zt(t, e));
                                    },
                                    prepareFrame: function (t) {
                                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
                                    },
                                }),
                                (Ut.prototype.initElement = function (t, e, i) {
                                    (this.lettersChangedFlag = !0), this.initFrame(), this.initBaseData(t, e, i), (this.textProperty = new ct(this, t.t, this.dynamicProperties)), (this.textAnimator = new ft(t.t, this.renderType, this)), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
                                }),
                                (Ut.prototype.prepareFrame = function (t) {
                                    (this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), (this.textProperty._isFirstFrame = !1), (this.textProperty._mdf = !1));
                                }),
                                (Ut.prototype.createPathShape = function (t, e) {
                                    var i,
                                        s,
                                        a = e.length,
                                        r = "";
                                    for (i = 0; i < a; i += 1) (s = e[i].ks.k), (r += nt(s, s.i.length, !0, t));
                                    return r;
                                }),
                                (Ut.prototype.updateDocumentData = function (t, e) {
                                    this.textProperty.updateDocumentData(t, e);
                                }),
                                (Ut.prototype.canResizeFont = function (t) {
                                    this.textProperty.canResizeFont(t);
                                }),
                                (Ut.prototype.setMinimumFontSize = function (t) {
                                    this.textProperty.setMinimumFontSize(t);
                                }),
                                (Ut.prototype.applyTextPropertiesToMatrix = function (t, e, i, s, a) {
                                    switch ((t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j)) {
                                        case 1:
                                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                            break;
                                        case 2:
                                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                                    }
                                    e.translate(s, a, 0);
                                }),
                                (Ut.prototype.buildColor = function (t) {
                                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
                                }),
                                (Ut.prototype.emptyProp = new mt()),
                                (Ut.prototype.destroy = function () {}),
                                B([Yt, It, wt, Tt, Rt], Zt),
                                (Zt.prototype.initElement = function (t, e, i) {
                                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (!this.data.xt && e.progressiveLoad) || this.buildAllItems(), this.hide();
                                }),
                                (Zt.prototype.prepareFrame = function (t) {
                                    if (((this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt)) {
                                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                                        else {
                                            var e = this.tm.v;
                                            e === this.data.op && (e = this.data.op - 1), (this.renderedFrame = e);
                                        }
                                        var i,
                                            s = this.elements.length;
                                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; 0 <= i; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
                                    }
                                }),
                                (Zt.prototype.renderInnerContent = function () {
                                    var t,
                                        e = this.layers.length;
                                    for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
                                }),
                                (Zt.prototype.setElements = function (t) {
                                    this.elements = t;
                                }),
                                (Zt.prototype.getElements = function () {
                                    return this.elements;
                                }),
                                (Zt.prototype.destroyElements = function () {
                                    var t,
                                        e = this.layers.length;
                                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                                }),
                                (Zt.prototype.destroy = function () {
                                    this.destroyElements(), this.destroyBaseElement();
                                }),
                                B([Yt, It, Kt, wt, Tt, Rt], Qt),
                                (Qt.prototype.createContent = function () {
                                    var t = this.globalData.getAssetsPath(this.assetData);
                                    (this.innerElem = I("image")), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
                                }),
                                (Qt.prototype.sourceRectAtTime = function () {
                                    return this.sourceRect;
                                }),
                                B([Qt], $t),
                                ($t.prototype.createContent = function () {
                                    var t = I("rect");
                                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
                                }),
                                B([Ft, Zt, Kt], te),
                                B([Yt, It, Kt, wt, Tt, Rt, Ut], ee),
                                (ee.prototype.createContent = function () {
                                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = I("text"));
                                }),
                                (ee.prototype.buildTextContents = function (t) {
                                    for (var e = 0, i = t.length, s = [], a = ""; e < i; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(a), (a = "")) : (a += t[e]), (e += 1);
                                    return s.push(a), s;
                                }),
                                (ee.prototype.buildNewText = function () {
                                    var t,
                                        e,
                                        i = this.textProperty.currentData;
                                    (this.renderedLetters = T(i ? i.l.length : 0)), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                                    var s = this.globalData.fontManager.getFontByName(i.f);
                                    if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                                    else {
                                        this.layerElement.setAttribute("font-family", s.fFamily);
                                        var a = i.fWeight,
                                            r = i.fStyle;
                                        this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a);
                                    }
                                    this.layerElement.setAttribute("aria-label", i.t);
                                    var n,
                                        h = i.l || [],
                                        o = !!this.globalData.fontManager.chars;
                                    e = h.length;
                                    var l,
                                        p = this.mHelper,
                                        f = "",
                                        d = this.data.singleShape,
                                        m = 0,
                                        c = 0,
                                        u = !0,
                                        g = (i.tr / 1e3) * i.finalSize;
                                    if (!d || o || i.sz) {
                                        var y,
                                            v,
                                            b = this.textSpans.length;
                                        for (t = 0; t < e; t += 1) (o && d && 0 !== t) || ((n = t < b ? this.textSpans[t] : I(o ? "path" : "text")), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), (this.textSpans[t] = n), this.layerElement.appendChild(n)), (n.style.display = "inherit")), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), d && (h[t].n && ((m = -g), (c += i.yOffset), (c += u ? 1 : 0), (u = !1)), this.applyTextPropertiesToMatrix(i, p, h[t].line, m, c), (m += h[t].l || 0), (m += g)), o ? ((l = (y = ((v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data) || {}).shapes ? y.shapes[0].it : []), d ? (f += this.createPathShape(p, l)) : n.setAttribute("d", this.createPathShape(p, l))) : (d && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), (n.textContent = h[t].val), n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                                        d && n && n.setAttribute("d", f);
                                    } else {
                                        var _ = this.textContainer,
                                            k = "start";
                                        switch (i.j) {
                                            case 1:
                                                k = "end";
                                                break;
                                            case 2:
                                                k = "middle";
                                        }
                                        _.setAttribute("text-anchor", k), _.setAttribute("letter-spacing", g);
                                        var A = this.buildTextContents(i.finalText);
                                        for (e = A.length, c = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) ((n = this.textSpans[t] || I("tspan")).textContent = A[t]), n.setAttribute("x", 0), n.setAttribute("y", c), (n.style.display = "inherit"), _.appendChild(n), (this.textSpans[t] = n), (c += i.finalLineHeight);
                                        this.layerElement.appendChild(_);
                                    }
                                    for (; t < this.textSpans.length; ) (this.textSpans[t].style.display = "none"), (t += 1);
                                    this._sizeChanged = !0;
                                }),
                                (ee.prototype.sourceRectAtTime = function (t) {
                                    if ((this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged)) {
                                        this._sizeChanged = !1;
                                        var e = this.layerElement.getBBox();
                                        this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height };
                                    }
                                    return this.bbox;
                                }),
                                (ee.prototype.renderInnerContent = function () {
                                    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                                        var t, e;
                                        this._sizeChanged = !0;
                                        var i,
                                            s,
                                            a = this.textAnimator.renderedLetters,
                                            r = this.textProperty.currentData.l;
                                        for (e = r.length, t = 0; t < e; t += 1) r[t].n || ((i = a[t]), (s = this.textSpans[t]), i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc));
                                    }
                                }),
                                B([Yt, It, Kt, Jt, wt, Tt, Rt], ie),
                                (ie.prototype.initSecondaryElement = function () {}),
                                (ie.prototype.identityMatrix = new N()),
                                (ie.prototype.buildExpressionInterface = function () {}),
                                (ie.prototype.createContent = function () {
                                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
                                }),
                                (ie.prototype.filterUniqueShapes = function () {
                                    var t,
                                        e,
                                        i,
                                        s,
                                        a = this.shapes.length,
                                        r = this.stylesList.length,
                                        n = [],
                                        h = !1;
                                    for (i = 0; i < r; i += 1) {
                                        for (s = this.stylesList[i], h = !1, t = n.length = 0; t < a; t += 1) -1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), (h = e._isAnimated || h));
                                        1 < n.length && h && this.setShapesAsAnimated(n);
                                    }
                                }),
                                (ie.prototype.setShapesAsAnimated = function (t) {
                                    var e,
                                        i = t.length;
                                    for (e = 0; e < i; e += 1) t[e].setAsAnimated();
                                }),
                                (ie.prototype.createStyleElement = function (t, e) {
                                    var i,
                                        a = new Vt(t, e),
                                        r = a.pElem;
                                    return "st" === t.ty ? (i = new Bt(this, t, a)) : "fl" === t.ty ? (i = new qt(this, t, a)) : ("gf" !== t.ty && "gs" !== t.ty) || ((i = new ("gf" === t.ty ? jt : Gt)(this, t, a)), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + s + "#" + i.maskId + ")"))), ("st" !== t.ty && "gs" !== t.ty) || (r.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), r.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = V(t.bm)), this.stylesList.push(a), this.addToAnimatedContents(t, i), i;
                                }),
                                (ie.prototype.createGroupElement = function (t) {
                                    var e = new Wt();
                                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = V(t.bm)), e;
                                }),
                                (ie.prototype.createTransformElement = function (t, e) {
                                    var i = X.getTransformProperty(this, t, this),
                                        s = new Ot(i, i.o, e);
                                    return this.addToAnimatedContents(t, s), s;
                                }),
                                (ie.prototype.createShapeElement = function (t, e, i) {
                                    var s = 4;
                                    "rc" === t.ty ? (s = 5) : "el" === t.ty ? (s = 6) : "sr" === t.ty && (s = 7);
                                    var a = new Nt(e, i, J.getShapeProp(this, t, s, this));
                                    return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
                                }),
                                (ie.prototype.addToAnimatedContents = function (t, e) {
                                    for (var i = 0, s = this.animatedContents.length; i < s; ) {
                                        if (this.animatedContents[i].element === e) return;
                                        i += 1;
                                    }
                                    this.animatedContents.push({ fn: Xt.createRenderFunction(t), element: e, data: t });
                                }),
                                (ie.prototype.setElementStyles = function (t) {
                                    var e,
                                        i = t.styles,
                                        s = this.stylesList.length;
                                    for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e]);
                                }),
                                (ie.prototype.reloadShapes = function () {
                                    this._isFirstFrame = !0;
                                    var t,
                                        e = this.itemsData.length;
                                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                                    this.renderModifiers();
                                }),
                                (ie.prototype.searchShapes = function (t, e, i, s, a, r, n) {
                                    var h,
                                        o,
                                        l,
                                        p,
                                        f,
                                        d,
                                        m = [].concat(r),
                                        c = t.length - 1,
                                        u = [],
                                        g = [];
                                    for (h = c; 0 <= h; h -= 1) {
                                        if (((d = this.searchProcessedElement(t[h])) ? (e[h] = i[d - 1]) : (t[h]._render = n), "fl" == t[h].ty || "st" == t[h].ty || "gf" == t[h].ty || "gs" == t[h].ty)) d ? (e[h].style.closed = !1) : (e[h] = this.createStyleElement(t[h], a)), t[h]._render && s.appendChild(e[h].style.pElem), u.push(e[h].style);
                                        else if ("gr" == t[h].ty) {
                                            if (d) for (l = e[h].it.length, o = 0; o < l; o += 1) e[h].prevViewData[o] = e[h].it[o];
                                            else e[h] = this.createGroupElement(t[h]);
                                            this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, m, n), t[h]._render && s.appendChild(e[h].gr);
                                        } else "tr" == t[h].ty ? (d || (e[h] = this.createTransformElement(t[h], s)), (p = e[h].transform), m.push(p)) : "sh" == t[h].ty || "rc" == t[h].ty || "el" == t[h].ty || "sr" == t[h].ty ? (d || (e[h] = this.createShapeElement(t[h], m, a)), this.setElementStyles(e[h])) : "tm" == t[h].ty || "rd" == t[h].ty || "ms" == t[h].ty ? (d ? ((f = e[h]).closed = !1) : ((f = U.getModifier(t[h].ty)).init(this, t[h]), (e[h] = f), this.shapeModifiers.push(f)), g.push(f)) : "rp" == t[h].ty && (d ? ((f = e[h]).closed = !0) : ((f = U.getModifier(t[h].ty)), (e[h] = f).init(this, t, h, e), this.shapeModifiers.push(f), (n = !1)), g.push(f));
                                        this.addProcessedElement(t[h], h + 1);
                                    }
                                    for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
                                    for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0;
                                }),
                                (ie.prototype.renderInnerContent = function () {
                                    this.renderModifiers();
                                    var t,
                                        e = this.stylesList.length;
                                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                                    for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
                                }),
                                (ie.prototype.renderShape = function () {
                                    var t,
                                        e,
                                        i = this.animatedContents.length;
                                    for (t = 0; t < i; t += 1) (e = this.animatedContents[t]), (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
                                }),
                                (ie.prototype.destroy = function () {
                                    this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
                                }),
                                (se.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        var e = this.filterManager.effectElements[0].p.v,
                                            i = this.filterManager.effectElements[1].p.v,
                                            s = this.filterManager.effectElements[2].p.v / 100;
                                        this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + s + " 0");
                                    }
                                }),
                                (ae.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        var e = this.filterManager.effectElements[2].p.v,
                                            i = this.filterManager.effectElements[6].p.v;
                                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
                                    }
                                }),
                                (re.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        var e = 0.3 * this.filterManager.effectElements[0].p.v,
                                            i = this.filterManager.effectElements[1].p.v,
                                            s = 3 == i ? 0 : e,
                                            a = 2 == i ? 0 : e;
                                        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                                        var r = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                                        this.feGaussianBlur.setAttribute("edgeMode", r);
                                    }
                                }),
                                (ne.prototype.initialize = function () {
                                    var t,
                                        e,
                                        i,
                                        a,
                                        r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                                    for (1 === this.filterManager.effectElements[1].p.v ? ((a = this.elem.maskManager.masksProperties.length), (i = 0)) : (a = 1 + (i = this.filterManager.effectElements[0].p.v - 1)), (e = I("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < a; i += 1) (t = I("path")), e.appendChild(t), this.paths.push({ p: t, m: i });
                                    if (3 === this.filterManager.effectElements[10].p.v) {
                                        var n = I("mask"),
                                            h = M();
                                        n.setAttribute("id", h), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
                                        var o = I("g");
                                        for (o.setAttribute("mask", "url(" + s + "#" + h + ")"); r[0]; ) o.appendChild(r[0]);
                                        this.elem.layerElement.appendChild(o), (this.masker = n), e.setAttribute("stroke", "#fff");
                                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                                        if (2 === this.filterManager.effectElements[10].p.v) for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length; ) this.elem.layerElement.removeChild(r[0]);
                                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
                                    }
                                    (this.initialized = !0), (this.pathMasker = e);
                                }),
                                (ne.prototype.renderFrame = function (t) {
                                    this.initialized || this.initialize();
                                    var e,
                                        i,
                                        s,
                                        a = this.paths.length;
                                    for (e = 0; e < a; e += 1)
                                        if (-1 !== this.paths[e].m && ((i = this.elem.maskManager.viewData[this.paths[e].m]), (s = this.paths[e].p), (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                                            var r;
                                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                                var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                                    h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                                    l = s.getTotalLength();
                                                r = "0 0 0 " + l * n + " ";
                                                var p,
                                                    f = l * (h - n),
                                                    d = 1 + (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) / 100,
                                                    m = Math.floor(f / d);
                                                for (p = 0; p < m; p += 1) r += "1 " + (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) / 100 + " ";
                                                r += "0 " + 10 * l + " 0 0";
                                            } else r = "1 " + (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) / 100;
                                            s.setAttribute("stroke-dasharray", r);
                                        }
                                    if (((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf))) {
                                        var c = this.filterManager.effectElements[3].p.v;
                                        this.pathMasker.setAttribute("stroke", "rgb(" + o(255 * c[0]) + "," + o(255 * c[1]) + "," + o(255 * c[2]) + ")");
                                    }
                                }),
                                (he.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        var e = this.filterManager.effectElements[0].p.v,
                                            i = this.filterManager.effectElements[1].p.v,
                                            s = this.filterManager.effectElements[2].p.v,
                                            a = s[0] + " " + i[0] + " " + e[0],
                                            r = s[1] + " " + i[1] + " " + e[1],
                                            n = s[2] + " " + i[2] + " " + e[2];
                                        this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", r), this.feFuncB.setAttribute("tableValues", n);
                                    }
                                }),
                                (oe.prototype.createFeFunc = function (t, e) {
                                    var i = I(t);
                                    return i.setAttribute("type", "table"), e.appendChild(i), i;
                                }),
                                (oe.prototype.getTableValue = function (t, e, i, s, a) {
                                    for (var r, n, h = 0, o = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), f = 0, d = a - s, m = e - t; h <= 256; ) (n = (r = h / 256) <= o ? (m < 0 ? a : s) : l <= r ? (m < 0 ? s : a) : s + d * Math.pow((r - t) / m, 1 / i)), (p[f++] = n), (h += 256 / 255);
                                    return p.join(" ");
                                }),
                                (oe.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        var e,
                                            i = this.filterManager.effectElements;
                                        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && ((e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v)), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && ((e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v)), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && ((e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v)), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && ((e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v)), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && ((e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v)), this.feFuncA.setAttribute("tableValues", e));
                                    }
                                }),
                                (le.prototype.renderFrame = function (t) {
                                    if (t || this.filterManager._mdf) {
                                        if (((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf)) {
                                            var e = this.filterManager.effectElements[0].p.v;
                                            this.feFlood.setAttribute("flood-color", F(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
                                        }
                                        if (((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf)) {
                                            var i = this.filterManager.effectElements[3].p.v,
                                                s = (this.filterManager.effectElements[2].p.v - 90) * d,
                                                a = i * Math.cos(s),
                                                r = i * Math.sin(s);
                                            this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", r);
                                        }
                                    }
                                });
                            var pe = [];
                            function fe(t, e, i) {
                                (this.initialized = !1), (this.filterManager = e), (this.filterElem = t), ((this.elem = i).matteElement = I("g")), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), (i.baseElement = i.matteElement);
                            }
                            function de(t) {
                                var e,
                                    i,
                                    a = t.data.ef ? t.data.ef.length : 0,
                                    r = M(),
                                    n = lt.createFilter(r),
                                    h = 0;
                                for (this.filters = [], e = 0; e < a; e += 1) (i = null), 20 === t.data.ef[e].ty ? ((h += 1), (i = new se(n, t.effectsManager.effectElements[e]))) : 21 === t.data.ef[e].ty ? ((h += 1), (i = new ae(n, t.effectsManager.effectElements[e]))) : 22 === t.data.ef[e].ty ? (i = new ne(t, t.effectsManager.effectElements[e])) : 23 === t.data.ef[e].ty ? ((h += 1), (i = new he(n, t.effectsManager.effectElements[e]))) : 24 === t.data.ef[e].ty ? ((h += 1), (i = new oe(n, t.effectsManager.effectElements[e]))) : 25 === t.data.ef[e].ty ? ((h += 1), (i = new le(n, t.effectsManager.effectElements[e]))) : 28 === t.data.ef[e].ty ? (i = new fe(n, t.effectsManager.effectElements[e], t)) : 29 === t.data.ef[e].ty && ((h += 1), (i = new re(n, t.effectsManager.effectElements[e]))), i && this.filters.push(i);
                                h && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + s + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this);
                            }
                            (fe.prototype.findSymbol = function (t) {
                                for (var e = 0, i = pe.length; e < i; ) {
                                    if (pe[e] === t) return pe[e];
                                    e += 1;
                                }
                                return null;
                            }),
                                (fe.prototype.replaceInParent = function (t, e) {
                                    var i = t.layerElement.parentNode;
                                    if (i) {
                                        for (var s, a = i.children, r = 0, n = a.length; r < n && a[r] !== t.layerElement; ) r += 1;
                                        r <= n - 2 && (s = a[r + 1]);
                                        var h = I("use");
                                        h.setAttribute("href", "#" + e), s ? i.insertBefore(h, s) : i.appendChild(h);
                                    }
                                }),
                                (fe.prototype.setElementAsMask = function (t, e) {
                                    if (!this.findSymbol(e)) {
                                        var i = M(),
                                            s = I("mask");
                                        s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), pe.push(e);
                                        var a = t.globalData.defs;
                                        a.appendChild(s);
                                        var r = I("symbol");
                                        r.setAttribute("id", i), this.replaceInParent(e, i), r.appendChild(e.layerElement), a.appendChild(r);
                                        var n = I("use");
                                        n.setAttribute("href", "#" + i), s.appendChild(n), (e.data.hd = !1), e.show();
                                    }
                                    t.setMatte(e.layerId);
                                }),
                                (fe.prototype.initialize = function () {
                                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s; ) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), (i += 1);
                                    this.initialized = !0;
                                }),
                                (fe.prototype.renderFrame = function () {
                                    this.initialized || this.initialize();
                                }),
                                (de.prototype.renderFrame = function (t) {
                                    var e,
                                        i = this.filters.length;
                                    for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
                                });
                            var me = (function () {
                                    var e = {},
                                        i = [],
                                        s = 0,
                                        a = 0,
                                        r = 0,
                                        n = !0,
                                        h = !1;
                                    function o(t) {
                                        for (var e = 0, s = t.target; e < a; ) i[e].animation === s && (i.splice(e, 1), (e -= 1), (a -= 1), s.isPaused || f()), (e += 1);
                                    }
                                    function l(t, e) {
                                        if (!t) return null;
                                        for (var s = 0; s < a; ) {
                                            if (i[s].elem == t && null !== i[s].elem) return i[s].animation;
                                            s += 1;
                                        }
                                        var r = new ce();
                                        return d(r, t), r.setData(t, e), r;
                                    }
                                    function p() {
                                        (r += 1), u();
                                    }
                                    function f() {
                                        r -= 1;
                                    }
                                    function d(t, e) {
                                        t.addEventListener("destroy", o), t.addEventListener("_active", p), t.addEventListener("_idle", f), i.push({ elem: e, animation: t }), (a += 1);
                                    }
                                    function m(e) {
                                        var o,
                                            l = e - s;
                                        for (o = 0; o < a; o += 1) i[o].animation.advanceTime(l);
                                        (s = e), r && !h ? t.requestAnimationFrame(m) : (n = !0);
                                    }
                                    function c(e) {
                                        (s = e), t.requestAnimationFrame(m);
                                    }
                                    function u() {
                                        !h && r && n && (t.requestAnimationFrame(c), (n = !1));
                                    }
                                    return (
                                        (e.registerAnimation = l),
                                        (e.loadAnimation = function (t) {
                                            var e = new ce();
                                            return d(e, null), e.setParams(t), e;
                                        }),
                                        (e.setSpeed = function (t, e) {
                                            var s;
                                            for (s = 0; s < a; s += 1) i[s].animation.setSpeed(t, e);
                                        }),
                                        (e.setDirection = function (t, e) {
                                            var s;
                                            for (s = 0; s < a; s += 1) i[s].animation.setDirection(t, e);
                                        }),
                                        (e.play = function (t) {
                                            var e;
                                            for (e = 0; e < a; e += 1) i[e].animation.play(t);
                                        }),
                                        (e.pause = function (t) {
                                            var e;
                                            for (e = 0; e < a; e += 1) i[e].animation.pause(t);
                                        }),
                                        (e.stop = function (t) {
                                            var e;
                                            for (e = 0; e < a; e += 1) i[e].animation.stop(t);
                                        }),
                                        (e.togglePause = function (t) {
                                            var e;
                                            for (e = 0; e < a; e += 1) i[e].animation.togglePause(t);
                                        }),
                                        (e.searchAnimations = function (t, e, i) {
                                            var s,
                                                a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                                r = a.length;
                                            for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), l(a[s], t);
                                            if (e && 0 === r) {
                                                i || (i = "svg");
                                                var n = document.getElementsByTagName("body")[0];
                                                n.innerHTML = "";
                                                var h = L("div");
                                                (h.style.width = "100%"), (h.style.height = "100%"), h.setAttribute("data-bm-type", i), n.appendChild(h), l(h, t);
                                            }
                                        }),
                                        (e.resize = function () {
                                            var t;
                                            for (t = 0; t < a; t += 1) i[t].animation.resize();
                                        }),
                                        (e.goToAndStop = function (t, e, s) {
                                            var r;
                                            for (r = 0; r < a; r += 1) i[r].animation.goToAndStop(t, e, s);
                                        }),
                                        (e.destroy = function (t) {
                                            var e;
                                            for (e = a - 1; 0 <= e; e -= 1) i[e].animation.destroy(t);
                                        }),
                                        (e.freeze = function () {
                                            h = !0;
                                        }),
                                        (e.unfreeze = function () {
                                            (h = !1), u();
                                        }),
                                        (e.getRegisteredAnimations = function () {
                                            var t,
                                                e = i.length,
                                                s = [];
                                            for (t = 0; t < e; t += 1) s.push(i[t].animation);
                                            return s;
                                        }),
                                        e
                                    );
                                })(),
                                ce = function () {
                                    (this._cbs = []), (this.name = ""), (this.path = ""), (this.isLoaded = !1), (this.currentFrame = 0), (this.currentRawFrame = 0), (this.firstFrame = 0), (this.totalFrames = 0), (this.frameRate = 0), (this.frameMult = 0), (this.playSpeed = 1), (this.playDirection = 1), (this.playCount = 0), (this.animationData = {}), (this.assets = []), (this.isPaused = !0), (this.autoplay = !1), (this.loop = !0), (this.renderer = null), (this.animationID = M()), (this.assetsPath = ""), (this.timeCompleted = 0), (this.segmentPos = 0), (this.isSubframeEnabled = r), (this.segments = []), (this._idle = !0), (this._completedLoop = !1), (this.projectInterface = {}), (this.imagePreloader = new ht());
                                };
                            function ue() {}
                            B([D], ce),
                                (ce.prototype.setParams = function (t) {
                                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                                    var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
                                    switch (e) {
                                        case "canvas":
                                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                                            break;
                                        case "svg":
                                            this.renderer = new Ft(this, t.rendererSettings);
                                            break;
                                        default:
                                            this.renderer = new HybridRenderer(this, t.rendererSettings);
                                    }
                                    this.imagePreloader.setCacheType(e),
                                        this.renderer.setProjectInterface(this.projectInterface),
                                        (this.animType = e),
                                        "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? (this.loop = !0) : !1 === t.loop ? (this.loop = !1) : (this.loop = parseInt(t.loop)),
                                        (this.autoplay = !("autoplay" in t) || t.autoplay),
                                        (this.name = t.name ? t.name : ""),
                                        (this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments),
                                        (this.assetsPath = t.assetsPath),
                                        (this.initialSegment = t.initialSegment),
                                        t.animationData
                                            ? this.configAnimation(t.animationData)
                                            : t.path &&
                                              (-1 !== t.path.lastIndexOf("\\") ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1)) : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1)),
                                              (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                                              (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"))),
                                              pt.load(
                                                  t.path,
                                                  this.configAnimation.bind(this),
                                                  function () {
                                                      this.trigger("data_failed");
                                                  }.bind(this),
                                              ));
                                }),
                                (ce.prototype.setData = function (t, e) {
                                    var i = { wrapper: t, animationData: e ? ("object" == typeof e ? e : JSON.parse(e)) : null },
                                        s = t.attributes;
                                    (i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : ""), (i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas");
                                    var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                                    "" === a || (i.loop = "false" !== a && ("true" === a || parseInt(a)));
                                    var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                                    (i.autoplay = "false" !== r), (i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : ""), "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i);
                                }),
                                (ce.prototype.includeLayers = function (t) {
                                    t.op > this.animationData.op && ((this.animationData.op = t.op), (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
                                    var i,
                                        s,
                                        a = this.animationData.layers,
                                        r = a.length,
                                        n = t.layers,
                                        h = n.length;
                                    for (s = 0; s < h; s += 1)
                                        for (i = 0; i < r; ) {
                                            if (a[i].id == n[s].id) {
                                                a[i] = n[s];
                                                break;
                                            }
                                            i += 1;
                                        }
                                    if (((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)) for (r = t.assets.length, i = 0; i < r; i += 1) this.animationData.assets.push(t.assets[i]);
                                    (this.animationData.__complete = !1), j.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), e && e.initExpressions(this), this.loadNextSegment();
                                }),
                                (ce.prototype.loadNextSegment = function () {
                                    var t = this.animationData.segments;
                                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
                                    var e = t.shift();
                                    this.timeCompleted = e.time * this.frameRate;
                                    var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                                    (this.segmentPos += 1),
                                        pt.load(
                                            i,
                                            this.includeLayers.bind(this),
                                            function () {
                                                this.trigger("data_failed");
                                            }.bind(this),
                                        );
                                }),
                                (ce.prototype.loadSegments = function () {
                                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
                                }),
                                (ce.prototype.imagesLoaded = function () {
                                    this.trigger("loaded_images"), this.checkLoaded();
                                }),
                                (ce.prototype.preloadImages = function () {
                                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
                                }),
                                (ce.prototype.configAnimation = function (t) {
                                    if (this.renderer)
                                        try {
                                            (this.animationData = t), this.initialSegment ? ((this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0])), (this.firstFrame = Math.round(this.initialSegment[0]))) : ((this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)), (this.firstFrame = Math.round(this.animationData.ip))), this.renderer.configAnimation(t), t.assets || (t.assets = []), (this.assets = this.animationData.assets), (this.frameRate = this.animationData.fr), (this.frameMult = this.animationData.fr / 1e3), this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded();
                                        } catch (t) {
                                            this.triggerConfigError(t);
                                        }
                                }),
                                (ce.prototype.waitForFontsLoaded = function () {
                                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                                }),
                                (ce.prototype.checkLoaded = function () {
                                    this.isLoaded ||
                                        !this.renderer.globalData.fontManager.isLoaded ||
                                        (!this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType) ||
                                        ((this.isLoaded = !0),
                                        j.completeData(this.animationData, this.renderer.globalData.fontManager),
                                        e && e.initExpressions(this),
                                        this.renderer.initItems(),
                                        setTimeout(
                                            function () {
                                                this.trigger("DOMLoaded");
                                            }.bind(this),
                                            0,
                                        ),
                                        this.gotoFrame(),
                                        this.autoplay && this.play());
                                }),
                                (ce.prototype.resize = function () {
                                    this.renderer.updateContainerSize();
                                }),
                                (ce.prototype.setSubframe = function (t) {
                                    this.isSubframeEnabled = !!t;
                                }),
                                (ce.prototype.gotoFrame = function () {
                                    (this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
                                }),
                                (ce.prototype.renderFrame = function () {
                                    if (!1 !== this.isLoaded)
                                        try {
                                            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                                        } catch (t) {
                                            this.triggerRenderFrameError(t);
                                        }
                                }),
                                (ce.prototype.play = function (t) {
                                    (t && this.name != t) || (!0 === this.isPaused && ((this.isPaused = !1), this._idle && ((this._idle = !1), this.trigger("_active"))));
                                }),
                                (ce.prototype.pause = function (t) {
                                    (t && this.name != t) || (!1 === this.isPaused && ((this.isPaused = !0), (this._idle = !0), this.trigger("_idle")));
                                }),
                                (ce.prototype.togglePause = function (t) {
                                    (t && this.name != t) || (!0 === this.isPaused ? this.play() : this.pause());
                                }),
                                (ce.prototype.stop = function (t) {
                                    (t && this.name != t) || (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
                                }),
                                (ce.prototype.goToAndStop = function (t, e, i) {
                                    (i && this.name != i) || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause());
                                }),
                                (ce.prototype.goToAndPlay = function (t, e, i) {
                                    this.goToAndStop(t, e, i), this.play();
                                }),
                                (ce.prototype.advanceTime = function (t) {
                                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                                        var e = this.currentRawFrame + t * this.frameModifier,
                                            i = !1;
                                        e >= this.totalFrames - 1 && 0 < this.frameModifier ? (this.loop && this.playCount !== this.loop ? (e >= this.totalFrames ? ((this.playCount += 1), this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), (this._completedLoop = !0), this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e)) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || ((i = !0), (e = this.totalFrames - 1))) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop) ? ((i = !0), (e = 0)) : (this.setCurrentRawFrameValue(this.totalFrames + (e % this.totalFrames)), this._completedLoop ? this.trigger("loopComplete") : (this._completedLoop = !0))) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
                                    }
                                }),
                                (ce.prototype.adjustSegment = function (t, e) {
                                    (this.playCount = 0), t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), (this.timeCompleted = this.totalFrames = t[0] - t[1]), (this.firstFrame = t[1]), this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), (this.timeCompleted = this.totalFrames = t[1] - t[0]), (this.firstFrame = t[0]), this.setCurrentRawFrameValue(0.001 + e)), this.trigger("segmentStart");
                                }),
                                (ce.prototype.setSegment = function (t, e) {
                                    var i = -1;
                                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? (i = t) : this.currentRawFrame + this.firstFrame > e && (i = e - t)), (this.firstFrame = t), (this.timeCompleted = this.totalFrames = e - t), -1 !== i && this.goToAndStop(i, !0);
                                }),
                                (ce.prototype.playSegments = function (t, e) {
                                    if ((e && (this.segments.length = 0), "object" == typeof t[0])) {
                                        var i,
                                            s = t.length;
                                        for (i = 0; i < s; i += 1) this.segments.push(t[i]);
                                    } else this.segments.push(t);
                                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
                                }),
                                (ce.prototype.resetSegments = function (t) {
                                    (this.segments.length = 0), this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
                                }),
                                (ce.prototype.checkSegments = function (t) {
                                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
                                }),
                                (ce.prototype.destroy = function (t) {
                                    (t && this.name != t) || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), (this._cbs = null), (this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null), (this.renderer = null));
                                }),
                                (ce.prototype.setCurrentRawFrameValue = function (t) {
                                    (this.currentRawFrame = t), this.gotoFrame();
                                }),
                                (ce.prototype.setSpeed = function (t) {
                                    (this.playSpeed = t), this.updaFrameModifier();
                                }),
                                (ce.prototype.setDirection = function (t) {
                                    (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
                                }),
                                (ce.prototype.updaFrameModifier = function () {
                                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
                                }),
                                (ce.prototype.getPath = function () {
                                    return this.path;
                                }),
                                (ce.prototype.getAssetsPath = function (t) {
                                    var e = "";
                                    if (t.e) e = t.p;
                                    else if (this.assetsPath) {
                                        var i = t.p;
                                        -1 !== i.indexOf("images/") && (i = i.split("/")[1]), (e = this.assetsPath + i);
                                    } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
                                    return e;
                                }),
                                (ce.prototype.getAssetData = function (t) {
                                    for (var e = 0, i = this.assets.length; e < i; ) {
                                        if (t == this.assets[e].id) return this.assets[e];
                                        e += 1;
                                    }
                                }),
                                (ce.prototype.hide = function () {
                                    this.renderer.hide();
                                }),
                                (ce.prototype.show = function () {
                                    this.renderer.show();
                                }),
                                (ce.prototype.getDuration = function (t) {
                                    return t ? this.totalFrames : this.totalFrames / this.frameRate;
                                }),
                                (ce.prototype.trigger = function (t) {
                                    if (this._cbs && this._cbs[t])
                                        switch (t) {
                                            case "enterFrame":
                                                this.triggerEvent(t, new u(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                                break;
                                            case "loopComplete":
                                                this.triggerEvent(t, new y(t, this.loop, this.playCount, this.frameMult));
                                                break;
                                            case "complete":
                                                this.triggerEvent(t, new g(t, this.frameMult));
                                                break;
                                            case "segmentStart":
                                                this.triggerEvent(t, new v(t, this.firstFrame, this.totalFrames));
                                                break;
                                            case "destroy":
                                                this.triggerEvent(t, new b(t, this));
                                                break;
                                            default:
                                                this.triggerEvent(t);
                                        }
                                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new u(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new y(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new g(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new v(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new b(t, this));
                                }),
                                (ce.prototype.triggerRenderFrameError = function (t) {
                                    var e = new _(t, this.currentFrame);
                                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
                                });
                            var ge = {};
                            function ye() {
                                !0 === ve ? me.searchAnimations(be, ve, _e) : me.searchAnimations();
                            }
                            (ce.prototype.triggerConfigError = function (t) {
                                var e = new k(t, this.currentFrame);
                                this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
                            }),
                                (ge.play = me.play),
                                (ge.pause = me.pause),
                                (ge.setLocationHref = function (t) {
                                    s = t;
                                }),
                                (ge.togglePause = me.togglePause),
                                (ge.setSpeed = me.setSpeed),
                                (ge.setDirection = me.setDirection),
                                (ge.stop = me.stop),
                                (ge.searchAnimations = ye),
                                (ge.registerAnimation = me.registerAnimation),
                                (ge.loadAnimation = function (t) {
                                    return !0 === ve && (t.animationData = JSON.parse(be)), me.loadAnimation(t);
                                }),
                                (ge.setSubframeRendering = function (t) {
                                    r = t;
                                }),
                                (ge.resize = me.resize),
                                (ge.goToAndStop = me.goToAndStop),
                                (ge.destroy = me.destroy),
                                (ge.setQuality = function (t) {
                                    if ("string" == typeof t)
                                        switch (t) {
                                            case "high":
                                                f = 200;
                                                break;
                                            case "medium":
                                                f = 50;
                                                break;
                                            case "low":
                                                f = 10;
                                        }
                                    else !isNaN(t) && 1 < t && (f = t);
                                    c(!(50 <= f));
                                }),
                                (ge.inBrowser = function () {
                                    return "undefined" != typeof navigator;
                                }),
                                (ge.installPlugin = function (t, i) {
                                    "expressions" === t && (e = i);
                                }),
                                (ge.freeze = me.freeze),
                                (ge.unfreeze = me.unfreeze),
                                (ge.getRegisteredAnimations = me.getRegisteredAnimations),
                                (ge.__getFactory = function (t) {
                                    switch (t) {
                                        case "propertyFactory":
                                            return W;
                                        case "shapePropertyFactory":
                                            return J;
                                        case "matrix":
                                            return N;
                                    }
                                }),
                                (ge.version = "5.7.0");
                            var ve = "__[STANDALONE]__",
                                be = "__[ANIMATIONDATA]__",
                                _e = "";
                            if (ve) {
                                var ke = document.getElementsByTagName("script"),
                                    Ae = (ke[ke.length - 1] || { src: "" }).src.replace(/^[^\?]+\??/, "");
                                _e = (function (t) {
                                    for (var e = Ae.split("&"), i = 0; i < e.length; i++) {
                                        var s = e[i].split("=");
                                        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1]);
                                    }
                                })("renderer");
                            }
                            var Me = setInterval(function () {
                                "complete" === document.readyState && (clearInterval(Me), ye());
                            }, 100);
                            return ge;
                        })(a);
                    }.call(e, i, e, t)) || (t.exports = s));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.LottieWeb.d05116ea.js.map
