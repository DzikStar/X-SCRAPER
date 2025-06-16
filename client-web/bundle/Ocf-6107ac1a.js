(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-6107ac1a"],
    {
        990350: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => n });
            const n = ({ apiClient: t, featureSwitches: e }) => ({
                task(e, r) {
                    const { flow_name: n, test_country_code: s, ...o } = e;
                    return t.post("onboarding/bounce", o, { flow_name: n, test_country_code: s }, { ...r, "content-type": "application/json" });
                },
            });
        },
        871176: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => i });
            r(136728);
            var n = r(506899),
                s = r(121363);
            const o = { count: 100 },
                i = ({ apiClient: t, featureSwitches: e }) => ({
                    fetchAddressBook: (e, r = {}) => t.get("contacts/addressbook", { ...o, ...e }, r).then((t) => (0, n.Fv)(t, { contacts: [s.Z] })),
                    uploadAddressBook(e, r) {
                        const { contacts: n, ...s } = e,
                            o = [];
                        for (let t = 0; t < n.length; t += 100) o.push(n.slice(t, t + 100));
                        return Promise.all(o.map((e) => t.post("contacts/upload_v2", { ...s, contacts: e }, {}, { ...r, "content-type": "application/json" })));
                    },
                });
        },
        447281: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => n });
            const n = ({ apiClient: t, featureSwitches: e }) => ({
                task(e, r) {
                    const { flow_name: n, test_country_code: s, ...o } = e;
                    return t.post("report/flow", o, { flow_name: n, test_country_code: s }, { ...r, "content-type": "application/json" });
                },
            });
        },
        335149: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => o });
            var n = r(506899),
                s = r(273919);
            const o = ({ apiClient: t, featureSwitches: e }) => ({ fetchPasswordStrength: (e, r) => t.post("account/password_strength", e, {}, r ?? {}).then((t) => ((t) => (0, n.Fv)(t, s.OY))({ ...t, id: e.password })), isPhoneNumberAvailable: (e, r) => t.get("users/phone_number_available", e, r ?? {}).then((t) => ((t) => (0, n.Fv)(t, s.z1))({ ...t, id: e.raw_phone_number })), isEmailAvailable: (e, r) => t.getI("users/email_available", e, r ?? {}).then((t) => ((t) => (0, n.Fv)(t, s.aw))({ ...t, id: e.email })) });
        },
        662678: (t, e, r) => {
            "use strict";
            r.d(e, { G: () => s, Z: () => n });
            r(136728);
            const n = function (t, e) {
                return s(t, e);
            };
            function s(t, e) {
                return t.reduce(
                    (r, n, s) => {
                        const o = e ? e(n, s, t) : !!n;
                        return o && r[0].push(n), !o && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
        949874: (t) => {
            t.exports = function (t, e, r) {
                if (((t = t.replace(/\r?\n/g, "")), null != e && e < 5)) throw new Error("Maximum length must not be less than 5");
                if (((e = null != e ? e : 78), t.length <= e)) return t;
                e -= 4;
                var n = [],
                    s = t.length,
                    o = 0,
                    i = 0;
                if (!r) for (; ~(o = t.lastIndexOf(" ", e + i)) && !(o <= i); ) t.slice(i).length > e ? (n.push((i ? " " : "") + t.slice(i, o)), (i = o + 1)) : (n.push((i ? " " : "") + t.slice(i)), (i = s));
                for (e++; i < s; ) n.push(t.slice(i, (i += e)));
                return n.join("\r\n ");
            };
        },
        167326: (t, e, r) => {
            var n = r(645386),
                s = r(238333),
                o = r(834893),
                i = r(759950),
                a = r(178803),
                h = r(16909);
            t.exports = function (t, e, r) {
                var c = -1,
                    p = s,
                    u = t.length,
                    l = !0,
                    d = [],
                    f = d;
                if (r) (l = !1), (p = o);
                else if (u >= 200) {
                    var v = e ? null : a(t);
                    if (v) return h(v);
                    (l = !1), (p = i), (f = new n());
                } else f = e ? [] : d;
                t: for (; ++c < u; ) {
                    var m = t[c],
                        g = e ? e(m) : m;
                    if (((m = r || 0 !== m ? m : 0), l && g == g)) {
                        for (var y = f.length; y--; ) if (f[y] === g) continue t;
                        e && f.push(g), d.push(m);
                    } else p(f, g, r) || (f !== d && f.push(g), d.push(m));
                }
                return d;
            };
        },
        178803: (t, e, r) => {
            var n = r(302143),
                s = r(334291),
                o = r(16909),
                i =
                    n && 1 / o(new n([, -0]))[1] == 1 / 0
                        ? function (t) {
                              return new n(t);
                          }
                        : s;
            t.exports = i;
        },
        984636: (t, e, r) => {
            var n = r(668286),
                s = r(167326);
            t.exports = function (t, e) {
                return t && t.length ? s(t, n(e, 2)) : [];
            };
        },
        637786: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => b });
            var n = r(202784),
                s = r(213980),
                o = r.n(s);
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
                function s() {
                    var e;
                    return ((e = t.call(this) || this).handleExpired = e.handleExpired.bind(a(e))), (e.handleErrored = e.handleErrored.bind(a(e))), (e.handleRecaptchaRef = e.handleRecaptchaRef.bind(a(e))), e;
                }
                (r = t), ((e = s).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r);
                var o = s.prototype;
                return (
                    (o.getValue = function () {
                        return this.props.grecaptcha && void 0 !== this._widgetId ? this.props.grecaptcha.getResponse(this._widgetId) : null;
                    }),
                    (o.getWidgetId = function () {
                        return this.props.grecaptcha && void 0 !== this._widgetId ? this._widgetId : null;
                    }),
                    (o.execute = function () {
                        var t = this.props.grecaptcha;
                        if (t && void 0 !== this._widgetId) return t.execute(this._widgetId);
                        this._executeRequested = !0;
                    }),
                    (o.reset = function () {
                        this.props.grecaptcha && void 0 !== this._widgetId && this.props.grecaptcha.reset(this._widgetId);
                    }),
                    (o.handleExpired = function () {
                        this.props.onExpired ? this.props.onExpired() : this.props.onChange && this.props.onChange(null);
                    }),
                    (o.handleErrored = function () {
                        this.props.onErrored && this.props.onErrored();
                    }),
                    (o.explicitRender = function () {
                        if (this.props.grecaptcha && this.props.grecaptcha.render && void 0 === this._widgetId) {
                            var t = document.createElement("div");
                            (this._widgetId = this.props.grecaptcha.render(t, { sitekey: this.props.sitekey, callback: this.props.onChange, theme: this.props.theme, type: this.props.type, tabindex: this.props.tabindex, "expired-callback": this.handleExpired, "error-callback": this.handleErrored, size: this.props.size, stoken: this.props.stoken, hl: this.props.hl, badge: this.props.badge })), this.captcha.appendChild(t);
                        }
                        this._executeRequested && this.props.grecaptcha && void 0 !== this._widgetId && ((this._executeRequested = !1), this.execute());
                    }),
                    (o.componentDidMount = function () {
                        this.explicitRender();
                    }),
                    (o.componentDidUpdate = function () {
                        this.explicitRender();
                    }),
                    (o.componentWillUnmount = function () {
                        void 0 !== this._widgetId && (this.delayOfCaptchaIframeRemoving(), this.reset());
                    }),
                    (o.delayOfCaptchaIframeRemoving = function () {
                        var t = document.createElement("div");
                        for (document.body.appendChild(t), t.style.display = "none"; this.captcha.firstChild; ) t.appendChild(this.captcha.firstChild);
                        setTimeout(function () {
                            document.body.removeChild(t);
                        }, 5e3);
                    }),
                    (o.handleRecaptchaRef = function (t) {
                        this.captcha = t;
                    }),
                    (o.render = function () {
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
                                        s = {},
                                        o = Object.keys(t);
                                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (s[r] = t[r]);
                                    return s;
                                })(t, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]));
                        return n.createElement("div", i({}, e, { ref: this.handleRecaptchaRef }));
                    }),
                    s
                );
            })(n.Component);
            (h.displayName = "ReCAPTCHA"), (h.propTypes = { sitekey: o().string.isRequired, onChange: o().func, grecaptcha: o().object, theme: o().oneOf(["dark", "light"]), type: o().oneOf(["image", "audio"]), tabindex: o().number, onExpired: o().func, onErrored: o().func, size: o().oneOf(["compact", "normal", "invisible"]), stoken: o().string, hl: o().string, badge: o().oneOf(["bottomright", "bottomleft", "inline"]) }), (h.defaultProps = { onChange: function () {}, theme: "light", type: "image", tabindex: 0, size: "normal", badge: "bottomright" });
            var c = r(373463),
                p = r.n(c);
            function u() {
                return (
                    (u =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                            }
                            return t;
                        }),
                    u.apply(this, arguments)
                );
            }
            var l = {},
                d = 0;
            function f() {
                return ("undefined" != typeof window && window.recaptchaOptions) || {};
            }
            var v = "onloadcallback",
                m = f();
            const g = ((y = function () {
                var t = f(),
                    e = t.lang ? "&hl=" + t.lang : "";
                return "https://" + (t.useRecaptchaNet ? "recaptcha.net" : "www.google.com") + "/recaptcha/api.js?onload=" + v + "&render=explicit" + e;
            }),
            (w = (w = { callbackName: v, globalName: "grecaptcha", removeOnUnmount: m.removeOnUnmount || !1 }) || {}),
            function (t) {
                var e = t.displayName || t.name || "Component",
                    r = (function (e) {
                        var r, s;
                        function o(t, r) {
                            var n;
                            return ((n = e.call(this, t, r) || this).state = {}), (n.__scriptURL = ""), n;
                        }
                        (s = e), ((r = o).prototype = Object.create(s.prototype)), (r.prototype.constructor = r), (r.__proto__ = s);
                        var i = o.prototype;
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
                                var t = l[this.__scriptURL];
                                if (!t || !t.loaded) throw new Error("Script is not loaded.");
                                for (var e in t.observers) t.observers[e](t);
                                delete window[w.callbackName];
                            }),
                            (i.componentDidMount = function () {
                                var t = this,
                                    e = this.setupScriptURL(),
                                    r = this.asyncScriptLoaderGetScriptLoaderID(),
                                    n = w,
                                    s = n.globalName,
                                    o = n.callbackName,
                                    i = n.scriptId;
                                if ((s && void 0 !== window[s] && (l[e] = { loaded: !0, observers: {} }), l[e])) {
                                    var a = l[e];
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
                                    (l[e] = { loaded: !1, observers: h });
                                var c = document.createElement("script");
                                (c.src = e), (c.async = !0), i && (c.id = i);
                                var p = function (t) {
                                    if (l[e]) {
                                        var r = l[e].observers;
                                        for (var n in r) t(r[n]) && delete r[n];
                                    }
                                };
                                o &&
                                    "undefined" != typeof window &&
                                    (window[o] = function () {
                                        return t.asyncScriptLoaderTriggerOnScriptLoaded();
                                    }),
                                    (c.onload = function () {
                                        var t = l[e];
                                        t &&
                                            ((t.loaded = !0),
                                            p(function (e) {
                                                return !o && (e(t), !0);
                                            }));
                                    }),
                                    (c.onerror = function () {
                                        var t = l[e];
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
                                if (!0 === w.removeOnUnmount) for (var e = document.getElementsByTagName("script"), r = 0; r < e.length; r += 1) e[r].src.indexOf(t) > -1 && e[r].parentNode && e[r].parentNode.removeChild(e[r]);
                                var n = l[t];
                                n && (delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()], !0 === w.removeOnUnmount && delete l[t]);
                            }),
                            (i.render = function () {
                                var e = w.globalName,
                                    r = this.props,
                                    s = (r.asyncScriptOnLoad, r.forwardedRef),
                                    o = (function (t, e) {
                                        if (null == t) return {};
                                        var r,
                                            n,
                                            s = {},
                                            o = Object.keys(t);
                                        for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (s[r] = t[r]);
                                        return s;
                                    })(r, ["asyncScriptOnLoad", "forwardedRef"]);
                                return e && "undefined" != typeof window && (o[e] = void 0 !== window[e] ? window[e] : void 0), (o.ref = s), (0, n.createElement)(t, o);
                            }),
                            o
                        );
                    })(n.Component),
                    s = (0, n.forwardRef)(function (t, e) {
                        return (0, n.createElement)(r, u({}, t, { forwardedRef: e }));
                    });
                return (s.displayName = "AsyncScriptLoader(" + e + ")"), (s.propTypes = { asyncScriptOnLoad: o().func }), p()(s, t);
            })(h);
            var y, w;
            const b = g;
        },
        359639: function (t, e, r) {
            var n;
            /*! https://mths.be/punycode v1.3.2 by @mathias */ (t = r.nmd(t)),
                (function () {
                    e && e.nodeType, t && t.nodeType;
                    var s = "object" == typeof r.g && r.g;
                    s.global !== s && s.window !== s && s.self;
                    var o,
                        i = 2147483647,
                        a = 36,
                        h = /^xn--/,
                        c = /[^\x20-\x7E]/,
                        p = /[\x2E\u3002\uFF0E\uFF61]/g,
                        u = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                        l = Math.floor,
                        d = String.fromCharCode;
                    function f(t) {
                        throw RangeError(u[t]);
                    }
                    function v(t, e) {
                        for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
                        return n;
                    }
                    function m(t, e) {
                        var r = t.split("@"),
                            n = "";
                        return r.length > 1 && ((n = r[0] + "@"), (t = r[1])), n + v((t = t.replace(p, ".")).split("."), e).join(".");
                    }
                    function g(t) {
                        for (var e, r, n = [], s = 0, o = t.length; s < o; ) (e = t.charCodeAt(s++)) >= 55296 && e <= 56319 && s < o ? (56320 == (64512 & (r = t.charCodeAt(s++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), s--)) : n.push(e);
                        return n;
                    }
                    function y(t) {
                        return v(t, function (t) {
                            var e = "";
                            return t > 65535 && ((e += d((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (e += d(t));
                        }).join("");
                    }
                    function w(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                    }
                    function b(t, e, r) {
                        var n = 0;
                        for (t = r ? l(t / 700) : t >> 1, t += l(t / e); t > 455; n += a) t = l(t / 35);
                        return l(n + (36 * t) / (t + 38));
                    }
                    function _(t) {
                        var e,
                            r,
                            n,
                            s,
                            o,
                            h,
                            c,
                            p,
                            u,
                            d,
                            v,
                            m = [],
                            g = t.length,
                            w = 0,
                            _ = 128,
                            O = 72;
                        for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) t.charCodeAt(n) >= 128 && f("not-basic"), m.push(t.charCodeAt(n));
                        for (s = r > 0 ? r + 1 : 0; s < g; ) {
                            for (o = w, h = 1, c = a; s >= g && f("invalid-input"), ((p = (v = t.charCodeAt(s++)) - 48 < 10 ? v - 22 : v - 65 < 26 ? v - 65 : v - 97 < 26 ? v - 97 : a) >= a || p > l((i - w) / h)) && f("overflow"), (w += p * h), !(p < (u = c <= O ? 1 : c >= O + 26 ? 26 : c - O)); c += a) h > l(i / (d = a - u)) && f("overflow"), (h *= d);
                            (O = b(w - o, (e = m.length + 1), 0 == o)), l(w / e) > i - _ && f("overflow"), (_ += l(w / e)), (w %= e), m.splice(w++, 0, _);
                        }
                        return y(m);
                    }
                    function O(t) {
                        var e,
                            r,
                            n,
                            s,
                            o,
                            h,
                            c,
                            p,
                            u,
                            v,
                            m,
                            y,
                            _,
                            O,
                            x,
                            C = [];
                        for (y = (t = g(t)).length, e = 128, r = 0, o = 72, h = 0; h < y; ++h) (m = t[h]) < 128 && C.push(d(m));
                        for (n = s = C.length, s && C.push("-"); n < y; ) {
                            for (c = i, h = 0; h < y; ++h) (m = t[h]) >= e && m < c && (c = m);
                            for (c - e > l((i - r) / (_ = n + 1)) && f("overflow"), r += (c - e) * _, e = c, h = 0; h < y; ++h)
                                if (((m = t[h]) < e && ++r > i && f("overflow"), m == e)) {
                                    for (p = r, u = a; !(p < (v = u <= o ? 1 : u >= o + 26 ? 26 : u - o)); u += a) (x = p - v), (O = a - v), C.push(d(w(v + (x % O), 0))), (p = l(x / O));
                                    C.push(d(w(p, 0))), (o = b(r, _, n == s)), (r = 0), ++n;
                                }
                            ++r, ++e;
                        }
                        return C.join("");
                    }
                    (o = {
                        version: "1.3.2",
                        ucs2: { decode: g, encode: y },
                        decode: _,
                        encode: O,
                        toASCII: function (t) {
                            return m(t, function (t) {
                                return c.test(t) ? "xn--" + O(t) : t;
                            });
                        },
                        toUnicode: function (t) {
                            return m(t, function (t) {
                                return h.test(t) ? _(t.slice(4).toLowerCase()) : t;
                            });
                        },
                    }),
                        void 0 ===
                            (n = function () {
                                return o;
                            }.call(e, r, e, t)) || (t.exports = n);
                })();
        },
        900883: (t, e, r) => {
            "use strict";
            var n = r(359639),
                s = r(225225);
            function o() {
                (this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
            }
            e.Qc = w;
            var i = /^([a-z0-9.+-]+:)/i,
                a = /:[0-9]*$/,
                h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                p = ["'"].concat(c),
                u = ["%", "/", "?", ";", "#"].concat(p),
                l = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                v = { javascript: !0, "javascript:": !0 },
                m = { javascript: !0, "javascript:": !0 },
                g = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                y = r(856642);
            function w(t, e, r) {
                if (t && s.isObject(t) && t instanceof o) return t;
                var n = new o();
                return n.parse(t, e, r), n;
            }
            (o.prototype.parse = function (t, e, r) {
                if (!s.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var o = t.indexOf("?"),
                    a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
                    c = t.split(a);
                c[0] = c[0].replace(/\\/g, "/");
                var w = (t = c.join(a));
                if (((w = w.trim()), !r && 1 === t.split("#").length)) {
                    var b = h.exec(w);
                    if (b) return (this.path = w), (this.href = w), (this.pathname = b[1]), b[2] ? ((this.search = b[2]), (this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1))) : e && ((this.search = ""), (this.query = {})), this;
                }
                var _ = i.exec(w);
                if (_) {
                    var O = (_ = _[0]).toLowerCase();
                    (this.protocol = O), (w = w.substr(_.length));
                }
                if (r || _ || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var x = "//" === w.substr(0, 2);
                    !x || (_ && m[_]) || ((w = w.substr(2)), (this.slashes = !0));
                }
                if (!m[_] && (x || (_ && !g[_]))) {
                    for (var C, E, S = -1, j = 0; j < l.length; j++) {
                        -1 !== (A = w.indexOf(l[j])) && (-1 === S || A < S) && (S = A);
                    }
                    -1 !== (E = -1 === S ? w.lastIndexOf("@") : w.lastIndexOf("@", S)) && ((C = w.slice(0, E)), (w = w.slice(E + 1)), (this.auth = decodeURIComponent(C))), (S = -1);
                    for (j = 0; j < u.length; j++) {
                        var A;
                        -1 !== (A = w.indexOf(u[j])) && (-1 === S || A < S) && (S = A);
                    }
                    -1 === S && (S = w.length), (this.host = w.slice(0, S)), (w = w.slice(S)), this.parseHost(), (this.hostname = this.hostname || "");
                    var L = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!L)
                        for (var I = this.hostname.split(/\./), R = ((j = 0), I.length); j < R; j++) {
                            var k = I[j];
                            if (k && !k.match(d)) {
                                for (var N = "", U = 0, q = k.length; U < q; U++) k.charCodeAt(U) > 127 ? (N += "x") : (N += k[U]);
                                if (!N.match(d)) {
                                    var D = I.slice(0, j),
                                        P = I.slice(j + 1),
                                        z = k.match(f);
                                    z && (D.push(z[1]), P.unshift(z[2])), P.length && (w = "/" + P.join(".") + w), (this.hostname = D.join("."));
                                    break;
                                }
                            }
                        }
                    this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()), L || (this.hostname = n.toASCII(this.hostname));
                    var $ = this.port ? ":" + this.port : "",
                        T = this.hostname || "";
                    (this.host = T + $), (this.href += this.host), L && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== w[0] && (w = "/" + w));
                }
                if (!v[O])
                    for (j = 0, R = p.length; j < R; j++) {
                        var V = p[j];
                        if (-1 !== w.indexOf(V)) {
                            var Z = encodeURIComponent(V);
                            Z === V && (Z = escape(V)), (w = w.split(V).join(Z));
                        }
                    }
                var J = w.indexOf("#");
                -1 !== J && ((this.hash = w.substr(J)), (w = w.slice(0, J)));
                var F = w.indexOf("?");
                if ((-1 !== F ? ((this.search = w.substr(F)), (this.query = w.substr(F + 1)), e && (this.query = y.parse(this.query)), (w = w.slice(0, F))) : e && ((this.search = ""), (this.query = {})), w && (this.pathname = w), g[O] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search)) {
                    $ = this.pathname || "";
                    var G = this.search || "";
                    this.path = $ + G;
                }
                return (this.href = this.format()), this;
            }),
                (o.prototype.format = function () {
                    var t = this.auth || "";
                    t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
                    var e = this.protocol || "",
                        r = this.pathname || "",
                        n = this.hash || "",
                        o = !1,
                        i = "";
                    this.host ? (o = t + this.host) : this.hostname && ((o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")), this.port && (o += ":" + this.port)), this.query && s.isObject(this.query) && Object.keys(this.query).length && (i = y.stringify(this.query));
                    var a = this.search || (i && "?" + i) || "";
                    return (
                        e && ":" !== e.substr(-1) && (e += ":"),
                        this.slashes || ((!e || g[e]) && !1 !== o) ? ((o = "//" + (o || "")), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""),
                        n && "#" !== n.charAt(0) && (n = "#" + n),
                        a && "?" !== a.charAt(0) && (a = "?" + a),
                        e +
                            o +
                            (r = r.replace(/[?#]/g, function (t) {
                                return encodeURIComponent(t);
                            })) +
                            (a = a.replace("#", "%23")) +
                            n
                    );
                }),
                (o.prototype.resolve = function (t) {
                    return this.resolveObject(w(t, !1, !0)).format();
                }),
                (o.prototype.resolveObject = function (t) {
                    if (s.isString(t)) {
                        var e = new o();
                        e.parse(t, !1, !0), (t = e);
                    }
                    for (var r = new o(), n = Object.keys(this), i = 0; i < n.length; i++) {
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
                            for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                                var d = u[l];
                                r[d] = t[d];
                            }
                            return (r.href = r.format()), r;
                        }
                        if (((r.protocol = t.protocol), t.host || m[t.protocol])) r.pathname = t.pathname;
                        else {
                            for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()); );
                            t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), (r.pathname = f.join("/"));
                        }
                        if (((r.search = t.search), (r.query = t.query), (r.host = t.host || ""), (r.auth = t.auth), (r.hostname = t.hostname || t.host), (r.port = t.port), r.pathname || r.search)) {
                            var v = r.pathname || "",
                                y = r.search || "";
                            r.path = v + y;
                        }
                        return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
                    }
                    var w = r.pathname && "/" === r.pathname.charAt(0),
                        b = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
                        _ = b || w || (r.host && t.pathname),
                        O = _,
                        x = (r.pathname && r.pathname.split("/")) || [],
                        C = ((f = (t.pathname && t.pathname.split("/")) || []), r.protocol && !g[r.protocol]);
                    if ((C && ((r.hostname = ""), (r.port = null), r.host && ("" === x[0] ? (x[0] = r.host) : x.unshift(r.host)), (r.host = ""), t.protocol && ((t.hostname = null), (t.port = null), t.host && ("" === f[0] ? (f[0] = t.host) : f.unshift(t.host)), (t.host = null)), (_ = _ && ("" === f[0] || "" === x[0]))), b)) (r.host = t.host || "" === t.host ? t.host : r.host), (r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname), (r.search = t.search), (r.query = t.query), (x = f);
                    else if (f.length) x || (x = []), x.pop(), (x = x.concat(f)), (r.search = t.search), (r.query = t.query);
                    else if (!s.isNullOrUndefined(t.search)) {
                        if (C) (r.hostname = r.host = x.shift()), (L = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && ((r.auth = L.shift()), (r.host = r.hostname = L.shift()));
                        return (r.search = t.search), (r.query = t.query), (s.isNull(r.pathname) && s.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), (r.href = r.format()), r;
                    }
                    if (!x.length) return (r.pathname = null), r.search ? (r.path = "/" + r.search) : (r.path = null), (r.href = r.format()), r;
                    for (var E = x.slice(-1)[0], S = ((r.host || t.host || x.length > 1) && ("." === E || ".." === E)) || "" === E, j = 0, A = x.length; A >= 0; A--) "." === (E = x[A]) ? x.splice(A, 1) : ".." === E ? (x.splice(A, 1), j++) : j && (x.splice(A, 1), j--);
                    if (!_ && !O) for (; j--; j) x.unshift("..");
                    !_ || "" === x[0] || (x[0] && "/" === x[0].charAt(0)) || x.unshift(""), S && "/" !== x.join("/").substr(-1) && x.push("");
                    var L,
                        I = "" === x[0] || (x[0] && "/" === x[0].charAt(0));
                    C && ((r.hostname = r.host = I ? "" : x.length ? x.shift() : ""), (L = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && ((r.auth = L.shift()), (r.host = r.hostname = L.shift())));
                    return (_ = _ || (r.host && x.length)) && !I && x.unshift(""), x.length ? (r.pathname = x.join("/")) : ((r.pathname = null), (r.path = null)), (s.isNull(r.pathname) && s.isNull(r.search)) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), (r.auth = t.auth || r.auth), (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
                }),
                (o.prototype.parseHost = function () {
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
        819858: (t, e, r) => {
            var n = r(691925),
                s = r(21681);
            function o(t, e, r) {
                Array.isArray(t[e]) ? t[e].push(r) : null != t[e] ? (t[e] = [t[e], r]) : (t[e] = r);
            }
            function i(t, e) {
                var r = e.split("="),
                    s = n(r[0]),
                    i = r[1];
                return (
                    (null != i && "" !== i) || ((i = r[0]), (s = "type")),
                    "type" === s
                        ? (i
                              .toLowerCase()
                              .split(",")
                              .forEach(function (e) {
                                  o(t, s, e);
                              }),
                          t)
                        : (o(t, s, i), t)
                );
            }
            t.exports = function (t) {
                for (var e = {}, r = null, a = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, h = t.length - 1, c = 1; c < h; c++) {
                    r = t[c];
                    var p = a.exec(r);
                    if (p) {
                        var u = p[1].split("."),
                            l = u.pop(),
                            d = u.pop(),
                            f = p[3],
                            v = (p[2] ? p[2].replace(/^;|;$/g, "").split(";") : []).reduce(i, d ? { group: d } : {}),
                            m = n(l);
                        o(e, m, new s(m, f, v));
                    }
                }
                return e;
            };
        },
        21681: (t) => {
            function e(t, r, n) {
                if (!(this instanceof e)) return new e(r);
                null != n && Object.assign(this, n), (this._field = t), (this._data = r), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function r(t) {
                return t.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (e.fromJSON = function (t) {
                var r = t[0],
                    n = t[1];
                return /text/i.test(t[2]) || (n.value = t[2]), new e(r, Array.isArray(t[3]) ? t[3].join(";") : t[3], n);
            }),
                (e.prototype = {
                    constructor: e,
                    is: function (t) {
                        return (t = (t + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(t) : this.type === t;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new e(this._field, this._data, this);
                    },
                    toString: function (t) {
                        for (var e = (this.group ? this.group + "." : "") + r(this._field), n = Object.keys(this), s = [], o = 0; o < n.length; o++) "group" !== n[o] && s.push(r(n[o]) + "=" + this[n[o]]);
                        return e + (s.length ? ";" + s.join(";") : s) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var t = Object.assign({}, this);
                        "text" === t.value && ((t.value = void 0), delete t.value);
                        var e = [this._field, t, this.value || "text"];
                        switch (this._field) {
                            default:
                                e.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                e.push(this._data.split(";"));
                        }
                        return e;
                    },
                }),
                (t.exports = e);
        },
        588960: (t, e, r) => {
            function n() {
                if (!(this instanceof n)) return new n();
                (this.version = n.versions[n.versions.length - 1]), (this.data = {});
            }
            (n.mimeType = "text/vcard"),
                (n.extension = ".vcf"),
                (n.versions = ["2.1", "3.0", "4.0"]),
                (n.foldLine = r(949874)),
                (n.normalize = function (t) {
                    return (t + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (n.isSupported = function (t) {
                    return /^\d\.\d$/.test(t) && -1 !== n.versions.indexOf(t);
                }),
                (n.parse = function (t) {
                    for (var e = (t + "").split(/(?=BEGIN\:VCARD)/gi), r = [], s = 0; s < e.length; s++) r.push(new n().parse(e[s]));
                    return r;
                }),
                (n.parseLines = r(819858)),
                (n.fromJSON = function (t) {
                    if (null == (t = "string" == typeof t ? JSON.parse(t) : t) || !Array.isArray(t)) return new n();
                    if (!/vcard/i.test(t[0])) throw new Error("Object not in jCard format");
                    var e = new n();
                    return (
                        t[1].forEach(function (t) {
                            e.addProperty(n.Property.fromJSON(t));
                        }),
                        e
                    );
                }),
                (n.format = function (t, e) {
                    if (((e = e || t.version || n.versions[n.versions.length - 1]), !n.isSupported(e))) throw new Error('Unsupported vCard version "' + e + '"');
                    var r = [];
                    r.push("BEGIN:VCARD"), r.push("VERSION:" + e);
                    for (var s = Object.keys(t.data), o = "", i = 0; i < s.length; i++)
                        if ("version" !== s[i])
                            if (((o = t.data[s[i]]), Array.isArray(o))) for (var a = 0; a < o.length; a++) o[a].isEmpty() || r.push(n.foldLine(o[a].toString(e), 75));
                            else o.isEmpty() || r.push(n.foldLine(o.toString(e), 75));
                    return r.push("END:VCARD"), r.join("\n");
                }),
                (n.Property = r(21681)),
                (n.prototype = {
                    constructor: n,
                    get: function (t) {
                        return null == this.data[t]
                            ? this.data[t]
                            : Array.isArray(this.data[t])
                              ? this.data[t].map(function (t) {
                                    return t.clone();
                                })
                              : this.data[t].clone();
                    },
                    set: function (t, e, r) {
                        return this.setProperty(new n.Property(t, e, r));
                    },
                    add: function (t, e, r) {
                        var s = new n.Property(t, e, r);
                        return this.addProperty(s), this;
                    },
                    setProperty: function (t) {
                        return (this.data[t._field] = t), this;
                    },
                    addProperty: function (t) {
                        var e = t._field;
                        return Array.isArray(this.data[e]) ? this.data[e].push(t) : null != this.data[e] ? (this.data[e] = [this.data[e], t]) : (this.data[e] = t), this;
                    },
                    parse: function (t) {
                        var e = n.normalize(t).split(/\r?\n/g),
                            r = e[0],
                            s = e[1],
                            o = e[e.length - 1];
                        if (!/BEGIN:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + r + '"');
                        if (!/END:VCARD/i.test(o)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + o + '"');
                        if (!/VERSION:\d\.\d/i.test(s)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + s + '"');
                        if (((this.version = s.substring(8, 11)), !n.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = n.parseLines(e)), this;
                    },
                    toString: function (t, e) {
                        return (t = t || this.version), n.format(this, t);
                    },
                    toJCard: function (t) {
                        t = t || "4.0";
                        for (var e = Object.keys(this.data), r = [["version", {}, "text", t]], n = null, s = 0; s < e.length; s++)
                            if ("version" !== e[s])
                                if (((n = this.data[e[s]]), Array.isArray(n))) for (var o = 0; o < n.length; o++) r.push(n[o].toJSON());
                                else r.push(n.toJSON());
                        return ["vcard", r];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (t.exports = n);
        },
        691925: (t) => {
            "use strict";
            t.exports = function () {
                var t = [].map
                    .call(arguments, function (t) {
                        return t.trim();
                    })
                    .filter(function (t) {
                        return t.length;
                    })
                    .join("-");
                return t.length
                    ? 1 === t.length
                        ? t.toLowerCase()
                        : /[_.\- ]+/.test(t)
                          ? (t = (function (t) {
                                for (var e = !1, r = 0; r < t.length; r++) {
                                    var n = t.charAt(r);
                                    e && /[a-zA-Z]/.test(n) && n.toUpperCase() === n ? ((t = t.substr(0, r) + "-" + t.substr(r)), (e = !1), r++) : (e = n.toLowerCase() === n);
                                }
                                return t;
                            })(t))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (t, e) {
                                    return e.toUpperCase();
                                })
                          : t === t.toUpperCase()
                            ? t.toLowerCase()
                            : t[0] !== t[0].toLowerCase()
                              ? t[0].toLowerCase() + t.slice(1)
                              : t
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-6107ac1a.d741796a.js.map
