(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-059be3de"],
    {
        167326: (t, e, r) => {
            var n = r(645386),
                o = r(238333),
                s = r(834893),
                i = r(759950),
                a = r(178803),
                h = r(16909);
            t.exports = function (t, e, r) {
                var c = -1,
                    p = o,
                    l = t.length,
                    u = !0,
                    d = [],
                    f = d;
                if (r) (u = !1), (p = s);
                else if (l >= 200) {
                    var m = e ? null : a(t);
                    if (m) return h(m);
                    (u = !1), (p = i), (f = new n());
                } else f = e ? [] : d;
                t: for (; ++c < l; ) {
                    var v = t[c],
                        g = e ? e(v) : v;
                    if (((v = r || 0 !== v ? v : 0), u && g == g)) {
                        for (var y = f.length; y--; ) if (f[y] === g) continue t;
                        e && f.push(g), d.push(v);
                    } else p(f, g, r) || (f !== d && f.push(g), d.push(v));
                }
                return d;
            };
        },
        178803: (t, e, r) => {
            var n = r(302143),
                o = r(334291),
                s = r(16909),
                i =
                    n && 1 / s(new n([, -0]))[1] == 1 / 0
                        ? function (t) {
                              return new n(t);
                          }
                        : o;
            t.exports = i;
        },
        984636: (t, e, r) => {
            var n = r(668286),
                o = r(167326);
            t.exports = function (t, e) {
                return t && t.length ? o(t, n(e, 2)) : [];
            };
        },
        637786: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => w });
            var n = r(202784),
                o = r(213980),
                s = r.n(o);
            function i() {
                return (
                    (i =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    i.apply(this, arguments)
                );
            }
            function a(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            var h = (function (t) {
                var e, r;
                function o() {
                    var e;
                    return ((e = t.call(this) || this).handleExpired = e.handleExpired.bind(a(e))), (e.handleErrored = e.handleErrored.bind(a(e))), (e.handleRecaptchaRef = e.handleRecaptchaRef.bind(a(e))), e;
                }
                (r = t), ((e = o).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r);
                var s = o.prototype;
                return (
                    (s.getValue = function () {
                        return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null;
                    }),
                    (s.getWidgetId = function () {
                        return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null;
                    }),
                    (s.execute = function () {
                        var t = this.props.grecaptcha;
                        if (t && void 0 !== this._widgetId) return t.execute(this._widgetId);
                        this._executeRequested = !0;
                    }),
                    (s.reset = function () {
                        this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId);
                    }),
                    (s.handleExpired = function () {
                        this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null);
                    }),
                    (s.handleErrored = function () {
                        this.props.onErrored && this.props.onErrored();
                    }),
                    (s.explicitRender = function () {
                        if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
                            var t = document.createElement("div");
                            (this._widgetId = this.props.grecaptcha.render(t, { sitekey: this.props.sitekey, callback: this.props.onChange, theme: this.props.theme, type: this.props.type, tabindex: this.props.tabindex, "expired-callback": this.handleExpired, "error-callback": this.handleErrored, size: this.props.size, stoken: this.props.stoken, hl: this.props.hl, badge: this.props.badge })), this.captcha.appendChild(t);
                        }
                        this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && ((this._executeRequested = !1), this.execute());
                    }),
                    (s.componentDidMount = function () {
                        this.explicitRender();
                    }),
                    (s.componentDidUpdate = function () {
                        this.explicitRender();
                    }),
                    (s.componentWillUnmount = function () {
                        void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset());
                    }),
                    (s.delayOfCaptchaIframeRemoving = function () {
                        var t = document.createElement("div");
                        for (document.body.appendChild(t), t.style.display = "none"; this.captcha.firstChild; ) t.appendChild(this.captcha.firstChild);
                        setTimeout(function () {
                            document.body.removeChild(t);
                        }, 5e3);
                    }),
                    (s.handleRecaptchaRef = function (t) {
                        this.captcha = t;
                    }),
                    (s.render = function () {
                        var t = this.props,
                            e =
                                (t.sitekey,
                                t.onChange,
                                t.theme,
                                t.type,
                                t.tabindex,
                                t.onExpired,
                                t.onErrored,
                                t.size,
                                t.stoken,
                                t.grecaptcha,
                                t.badge,
                                t.hl,
                                (function (t, e) {
                                    if (null == t) return {};
                                    var r,
                                        n,
                                        o = {},
                                        s = Object.keys(t);
                                    for (n = 0; n < s.length; n++) (r = s[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                                    return o;
                                })(t, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
                        return n.createElement("div", i({}, e, { ref: this.handleRecaptchaRef }));
                    }),
                    o
                );
            })(n.Component);
            (h.displayName = "ReCAPTCHA"), (h.propTypes = { sitekey: s().string.isRequired, onChange: s().func, grecaptcha: s().object, theme: s().oneOf(["dark", "light"]), type: s().oneOf(["image", "audio"]), tabindex: s().number, onExpired: s().func, onErrored: s().func, size: s().oneOf(["compact", "normal", "invisible"]), stoken: s().string, hl: s().string, badge: s().oneOf(["bottomright", "bottomleft", "inline"]) }), (h.defaultProps = { onChange: function () {}, theme: "light", type: "image", tabindex: 0, size: "normal", badge: "bottomright" });
            var c = r(373463),
                p = r.n(c);
            function l() {
                return (
                    (l =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    l.apply(this, arguments)
                );
            }
            var u = {},
                d = 0;
            function f() {
                return ("undefined" != typeof window && window.recaptchaOptions) || {};
            }
            var m = "onloadcallback",
                v = f();
            const g = ((y = function () {
                var t = f(),
                    e = t.lang ? "&hl=" + t.lang : "";
                return "https://" + (t.useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + m + "&render=explicit" + e;
            }),
            (b = (b = { callbackName: m, globalName: "grecaptcha", removeOnUnmount: v.removeOnUnmount || !1 }) || {}),
            function (t) {
                var e = t.displayName || t.name || "Component",
                    r = (function (e) {
                        var r, o;
                        function s(t, r) {
                            var n;
                            return ((n = e.call(this, t, r) || this).state = {}), (n.__scriptURL = ""), n;
                        }
                        (o = e), ((r = s).prototype = Object.create(o.prototype)), (r.prototype.constructor = r), (r.__proto__ = o);
                        var i = s.prototype;
                        return (
                            (i.asyncScriptLoaderGetScriptLoaderID = function () {
                                return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + d++), this.__scriptLoaderID;
                            }),
                            (i.setupScriptURL = function () {
                                return (this.__scriptURL = "function" == typeof y ? y() : y), this.__scriptURL;
                            }),
                            (i.asyncScriptLoaderHandleLoad = function (t) {
                                var e = this;
                                this.setState(t, function () {
                                    return e.props.asyncScriptOnLoad && e.props.asyncScriptOnLoad(e.state);
                                });
                            }),
                            (i.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                                var t = u[this.__scriptURL];
                                if (!t || !t.loaded) throw new Error("Script is not loaded.");
                                for (var e in t.observers) t.observers[e](t);
                                delete window[b.callbackName];
                            }),
                            (i.componentDidMount = function () {
                                var t = this,
                                    e = this.setupScriptURL(),
                                    r = this.asyncScriptLoaderGetScriptLoaderID(),
                                    n = b,
                                    o = n.globalName,
                                    s = n.callbackName,
                                    i = n.scriptId;
                                if ((o && void 0 !== window[o] && (u[e] = { loaded: !0, observers: {} }), u[e])) {
                                    var a = u[e];
                                    return a && (a.loaded || a.errored)
                                        ? void this.asyncScriptLoaderHandleLoad(a)
                                        : void (a.observers[r] = function (e) {
                                              return t.asyncScriptLoaderHandleLoad(e);
                                          });
                                }
                                var h = {};
                                (h[r] = function (e) {
                                    return t.asyncScriptLoaderHandleLoad(e);
                                }),
                                    (u[e] = { loaded: !1, observers: h });
                                var c = document.createElement("script");
                                (c.src = e), (c.async = !0), i && (c.id = i);
                                var p = function (t) {
                                    if (u[e]) {
                                        var r = u[e].observers;
                                        for (var n in r) t(r[n]) && delete r[n];
                                    }
                                };
                                s &&
                                    "undefined" != typeof window &&
                                    (window[s] = function () {
                                        return t.asyncScriptLoaderTriggerOnScriptLoaded();
                                    }),
                                    (c.onload = function () {
                                        var t = u[e];
                                        t &&
                                            ((t.loaded = !0),
                                            p(function (e) {
                                                return !s && (e(t), !0);
                                            }));
                                    }),
                                    (c.onerror = function () {
                                        var t = u[e];
                                        t &&
                                            ((t.errored = !0),
                                            p(function (e) {
                                                return e(t), !0;
                                            }));
                                    }),
                                    document.body.appendChild(c);
                            }),
                            (i.componentWillUnmount = function () {
                                var t = this.__scriptURL;
                                if (!0 === b.removeOnUnmount) for (var e = document.getElementsByTagName("script"), r = 0; r < e.length; r += 1) e[r].src.indexOf(t) > -1 && e[r].parentNode && e[r].parentNode.removeChild(e[r]);
                                var n = u[t];
                                n && (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === b.removeOnUnmount && delete u[t]);
                            }),
                            (i.render = function () {
                                var e = b.globalName,
                                    r = this.props,
                                    o = (r.asyncScriptOnLoad, r.forwardedRef),
                                    s = (function (t, e) {
                                        if (null == t) return {};
                                        var r,
                                            n,
                                            o = {},
                                            s = Object.keys(t);
                                        for (n = 0; n < s.length; n++) (r = s[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                                        return o;
                                    })(r, ["asyncScriptOnLoad", "forwardedRef"]);
                                return e && "undefined" != typeof window && (s[e] = void 0 !== window[e] ? window[e] : void 0), (s.ref = o), (0, n.createElement)(t, s);
                            }),
                            s
                        );
                    })(n.Component),
                    o = (0, n.forwardRef)(function (t, e) {
                        return (0, n.createElement)(r, l({}, t, { forwardedRef: e }));
                    });
                return (o.displayName = "AsyncScriptLoader(" + e + ")"), (o.propTypes = { asyncScriptOnLoad: s().func }), p()(o, t);
            })(h);
            var y, b;
            const w = g;
        },
        359639: function (t, e, r) {
            var n;
            /*! https://mths.be/punycode v1.3.2 by @mathias */ (t = r.nmd(t)),
                (function () {
                    e && e.nodeType, t && t.nodeType;
                    var o = "object" == typeof r.g && r.g;
                    o.global !== o && o.window !== o && o.self;
                    var s,
                        i = 2147483647,
                        a = 36,
                        h = /^xn--/,
                        c = /[^\x20-\x7E]/,
                        p = /[\x2E\u3002\uFF0E\uFF61]/g,
                        l = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                        u = Math.floor,
                        d = String.fromCharCode;
                    function f(t) {
                        throw RangeError(l[t]);
                    }
                    function m(t, e) {
                        for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
                        return n;
                    }
                    function v(t, e) {
                        var r = t.split("@"),
                            n = "";
                        return r.length > 1 && ((n = r[0] + "@"), (t = r[1])), n + m((t = t.replace(p, ".")).split("."), e).join(".");
                    }
                    function g(t) {
                        for (var e, r, n = [], o = 0, s = t.length; o < s; ) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < s ? (56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--)) : n.push(e);
                        return n;
                    }
                    function y(t) {
                        return m(t, function (t) {
                            var e = "";
                            return t > 65535 && ((e += d((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (e += d(t));
                        }).join("");
                    }
                    function b(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                    }
                    function w(t, e, r) {
                        var n = 0;
                        for (t = r ? u(t / 700) : t >> 1, t += u(t / e); t > 455; n += a) t = u(t / 35);
                        return u(n + (36 * t) / (t + 38));
                    }
                    function x(t) {
                        var e,
                            r,
                            n,
                            o,
                            s,
                            h,
                            c,
                            p,
                            l,
                            d,
                            m,
                            v = [],
                            g = t.length,
                            b = 0,
                            x = 128,
                            O = 72;
                        for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) t.charCodeAt(n) >= 128 && f("not-basic"), v.push(t.charCodeAt(n));
                        for (o = r > 0 ? r + 1 : 0; o < g; ) {
                            for (s = b, h = 1, c = a; o >= g && f("invalid-input"), ((p = (m = t.charCodeAt(o++)) - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : a) >= a || p > u((i - b) / h)) && f("overflow"), (b += p * h), !(p < (l = c <= O ? 1 : c >= O + 26 ? 26 : c - O)); c += a) h > u(i / (d = a - l)) && f("overflow"), (h *= d);
                            (O = w(b - s, (e = v.length + 1), 0 == s)), u(b / e) > i - x && f("overflow"), (x += u(b / e)), (b %= e), v.splice(b++, 0, x);
                        }
                        return y(v);
                    }
                    function O(t) {
                        var e,
                            r,
                            n,
                            o,
                            s,
                            h,
                            c,
                            p,
                            l,
                            m,
                            v,
                            y,
                            x,
                            O,
                            _,
                            C = [];
                        for (y = (t = g(t)).length, e = 128, r = 0, s = 72, h = 0; h < y; ++h) (v = t[h]) < 128 && C.push(d(v));
                        for (n = o = C.length, o && C.push("-"); n < y; ) {
                            for (c = i, h = 0; h < y; ++h) (v = t[h]) >= e && v < c && (c = v);
                            for (c - e > u((i - r) / (x = n + 1)) && f("overflow"), r += (c - e) * x, e = c, h = 0; h < y; ++h)
                                if (((v = t[h]) < e && ++r > i && f("overflow"), v == e)) {
                                    for (p = r, l = a; !(p < (m = l <= s ? 1 : l >= s + 26 ? 26 : l - s)); l += a) (_ = p - m), (O = a - m), C.push(d(b(m + (_ % O), 0))), (p = u(_ / O));
                                    C.push(d(b(p, 0))), (s = w(r, x, n == o)), (r = 0), ++n;
                                }
                            ++r, ++e;
                        }
                        return C.join("");
                    }
                    (s = {
                        version: "1.3.2",
                        ucs2: { decode: g, encode: y },
                        decode: x,
                        encode: O,
                        toASCII: function (t) {
                            return v(t, function (t) {
                                return c.test(t) ? "xn--" + O(t) : t;
                            });
                        },
                        toUnicode: function (t) {
                            return v(t, function (t) {
                                return h.test(t) ? x(t.slice(4).toLowerCase()) : t;
                            });
                        },
                    }),
                        void 0 ===
                            (n = function () {
                                return s;
                            }.call(e, r, e, t)) || (t.exports = n);
                })();
        },
        900883: (t, e, r) => {
            "use strict";
            var n = r(359639),
                o = r(225225);
            function s() {
                (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
            }
            e.Qc = b;
            var i = /^([a-z0-9.+-]+:)/i,
                a = /:[0-9]*$/,
                h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                p = ["'"].concat(c),
                l = ["%", "/", "?", ";", "#"].concat(p),
                u = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                m = { javascript: !0, "javascript:": !0 },
                v = { javascript: !0, "javascript:": !0 },
                g = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                y = r(856642);
            function b(t, e, r) {
                if (t && o.isObject(t) && t instanceof s) return t;
                var n = new s();
                return n.parse(t, e, r), n;
            }
            (s.prototype.parse = function (t, e, r) {
                if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var s = t.indexOf("?"),
                    a = -1 !== s && s < t.indexOf("#") ? "?" : "#",
                    c = t.split(a);
                c[0] = c[0].replace(/\\/g, "/");
                var b = (t = c.join(a));
                if (((b = b.trim()), !r && 1 === t.split("#").length)) {
                    var w = h.exec(b);
                    if (w) return (this.path = b), (this.href = b), (this.pathname = w[1]), w[2] ? ((this.search = w[2]), (this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1))) : e && ((this.search = ""), (this.query = {})), this;
                }
                var x = i.exec(b);
                if (x) {
                    var O = (x = x[0]).toLowerCase();
                    (this.protocol = O), (b = b.substr(x.length));
                }
                if (r || x || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var _ = "//" === b.substr(0, 2);
                    !_ || (x && v[x]) || ((b = b.substr(2)), (this.slashes = !0));
                }
                if (!v[x] && (_ || (x && !g[x]))) {
                    for (var C, L, R = -1, j = 0; j < u.length; j++) {
                        -1 !== (I = b.indexOf(u[j])) && (-1 === R || I < R) && (R = I);
                    }
                    -1 !== (L = -1 === R ? b.lastIndexOf("@") : b.lastIndexOf("@", R)) && ((C = b.slice(0, L)), (b = b.slice(L + 1)), (this.auth = decodeURIComponent(C))), (R = -1);
                    for (j = 0; j < l.length; j++) {
                        var I;
                        -1 !== (I = b.indexOf(l[j])) && (-1 === R || I < R) && (R = I);
                    }
                    -1 === R && (R = b.length), (this.host = b.slice(0, R)), (b = b.slice(R)), this.parseHost(), (this.hostname = this.hostname || "");
                    var E = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!E)
                        for (var S = this.hostname.split(/\./), k = ((j = 0), S.length); j < k; j++) {
                            var q = S[j];
                            if (q && !q.match(d)) {
                                for (var A = "", U = 0, N = q.length; U < N; U++) q.charCodeAt(U) > 127 ? (A += "x") : (A += q[U]);
                                if (!A.match(d)) {
                                    var T = S.slice(0, j),
                                        z = S.slice(j + 1),
                                        D = q.match(f);
                                    D && (T.push(D[1]), z.unshift(D[2])), z.length && (b = "/" + z.join(".") + b), (this.hostname = T.join("."));
                                    break;
                                }
                            }
                        }
                    this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()), E || (this.hostname = n.toASCII(this.hostname));
                    var H = this.port ? ":" + this.port : "",
                        P = this.hostname || "";
                    (this.host = P + H), (this.href += this.host), E && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== b[0] && (b = "/" + b));
                }
                if (!m[O])
                    for (j = 0, k = p.length; j < k; j++) {
                        var F = p[j];
                        if (-1 !== b.indexOf(F)) {
                            var $ = encodeURIComponent(F);
                            $ === F && ($ = escape(F)), (b = b.split(F).join($));
                        }
                    }
                var G = b.indexOf("#");
                -1 !== G && ((this.hash = b.substr(G)), (b = b.slice(0, G)));
                var M = b.indexOf("?");
                if ((-1 !== M ? ((this.search = b.substr(M)), (this.query = b.substr(M + 1)), e && (this.query = y.parse(this.query)), (b = b.slice(0, M))) : e && ((this.search = ""), (this.query = {})), b && (this.pathname = b), g[O] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search)) {
                    H = this.pathname || "";
                    var W = this.search || "";
                    this.path = H + W;
                }
                return (this.href = this.format()), this;
            }),
                (s.prototype.format = function () {
                    var t = this.auth || "";
                    t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
                    var e = this.protocol || "",
                        r = this.pathname || "",
                        n = this.hash || "",
                        s = !1,
                        i = "";
                    this.host ? (s = t + this.host) : this.hostname && ((s = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")), this.port && (s += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (i = y.stringify(this.query));
                    var a = this.search || (i && "?" + i) || "";
                    return (
                        e && ":" !== e.substr(-1) && (e += ":"),
                        this.slashes || ((!e || g[e]) && !1 !== s) ? ((s = "//" + (s || "")), r && "/" !== r.charAt(0) && (r = "/" + r)) : s || (s = ""),
                        n && "#" !== n.charAt(0) && (n = "#" + n),
                        a && "?" !== a.charAt(0) && (a = "?" + a),
                        e +
                            s +
                            (r = r.replace(/[?#]/g, function (t) {
                                return encodeURIComponent(t);
                            })) +
                            (a = a.replace("#", "%23")) +
                            n
                    );
                }),
                (s.prototype.resolve = function (t) {
                    return this.resolveObject(b(t, !1, !0)).format();
                }),
                (s.prototype.resolveObject = function (t) {
                    if (o.isString(t)) {
                        var e = new s();
                        e.parse(t, !1, !0), (t = e);
                    }
                    for (var r = new s(), n = Object.keys(this), i = 0; i < n.length; i++) {
                        var a = n[i];
                        r[a] = this[a];
                    }
                    if (((r.hash = t.hash), "" === t.href)) return (r.href = r.format()), r;
                    if (t.slashes && !t.protocol) {
                        for (var h = Object.keys(t), c = 0; c < h.length; c++) {
                            var p = h[c];
                            "protocol" !== p && (r[p] = t[p]);
                        }
                        return g[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), (r.href = r.format()), r;
                    }
                    if (t.protocol && t.protocol !== r.protocol) {
                        if (!g[t.protocol]) {
                            for (var l = Object.keys(t), u = 0; u < l.length; u++) {
                                var d = l[u];
                                r[d] = t[d];
                            }
                            return (r.href = r.format()), r;
                        }
                        if (((r.protocol = t.protocol), t.host || v[t.protocol])) r.pathname = t.pathname;
                        else {
                            for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()); );
                            t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), (r.pathname = f.join("/"));
                        }
                        if (((r.search = t.search), (r.query = t.query), (r.host = t.host || ""), (r.auth = t.auth), (r.hostname = t.hostname || t.host), (r.port = t.port), r.pathname || r.search)) {
                            var m = r.pathname || "",
                                y = r.search || "";
                            r.path = m + y;
                        }
                        return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
                    }
                    var b = r.pathname && "/" === r.pathname.charAt(0),
                        w = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
                        x = w || b || (r.host && t.pathname),
                        O = x,
                        _ = (r.pathname && r.pathname.split("/")) || [],
                        C = ((f = (t.pathname && t.pathname.split("/")) || []), r.protocol && !g[r.protocol]);
                    if ((C && ((r.hostname = ""), (r.port = null), r.host && ("" === _[0] ? (_[0] = r.host) : _.unshift(r.host)), (r.host = ""), t.protocol && ((t.hostname = null), (t.port = null), t.host && ("" === f[0] ? (f[0] = t.host) : f.unshift(t.host)), (t.host = null)), (x = x && ("" === f[0] || "" === _[0]))), w)) (r.host = t.host || "" === t.host ? t.host : r.host), (r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname), (r.search = t.search), (r.query = t.query), (_ = f);
                    else if (f.length) _ || (_ = []), _.pop(), (_ = _.concat(f)), (r.search = t.search), (r.query = t.query);
                    else if (!o.isNullOrUndefined(t.search)) {
                        if (C) (r.hostname = r.host = _.shift()), (E = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && ((r.auth = E.shift()), (r.host = r.hostname = E.shift()));
                        return (r.search = t.search), (r.query = t.query), (o.isNull(r.pathname) && o.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), (r.href = r.format()), r;
                    }
                    if (!_.length) return (r.pathname = null), r.search ? (r.path = "/" + r.search) : (r.path = null), (r.href = r.format()), r;
                    for (var L = _.slice(-1)[0], R = ((r.host || t.host || _.length > 1) && ("." === L || ".." === L)) || "" === L, j = 0, I = _.length; I >= 0; I--) "." === (L = _[I]) ? _.splice(I, 1) : ".." === L ? (_.splice(I, 1), j++) : j && (_.splice(I, 1), j--);
                    if (!x && !O) for (; j--; j) _.unshift("..");
                    !x || "" === _[0] || (_[0] && "/" === _[0].charAt(0)) || _.unshift(""), R && "/" !== _.join("/").substr(-1) && _.push("");
                    var E,
                        S = "" === _[0] || (_[0] && "/" === _[0].charAt(0));
                    C && ((r.hostname = r.host = S ? "" : _.length ? _.shift() : ""), (E = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && ((r.auth = E.shift()), (r.host = r.hostname = E.shift())));
                    return (x = x || (r.host && _.length)) && !S && _.unshift(""), _.length ? (r.pathname = _.join("/")) : ((r.pathname = null), (r.path = null)), (o.isNull(r.pathname) && o.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), (r.auth = t.auth || r.auth), (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
                }),
                (s.prototype.parseHost = function () {
                    var t = this.host,
                        e = a.exec(t);
                    e && (":" !== (e = e[0]) && (this.port = e.substr(1)), (t = t.substr(0, t.length - e.length))), t && (this.hostname = t);
                });
        },
        225225: (t) => {
            "use strict";
            t.exports = {
                isString: function (t) {
                    return "string" == typeof t;
                },
                isObject: function (t) {
                    return "object" == typeof t && null !== t;
                },
                isNull: function (t) {
                    return null === t;
                },
                isNullOrUndefined: function (t) {
                    return null == t;
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-059be3de.8b25bf4a.js.map
