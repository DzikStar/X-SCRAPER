(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-536eaa00"],
    {
        936386: (e) => {
            function t(e, t, n) {
                var r, o, a, i, c;
                function l() {
                    var u = Date.now() - i;
                    u < t && u >= 0 ? (r = setTimeout(l, t - u)) : ((r = null), n || ((c = e.apply(a, o)), (a = o = null)));
                }
                null == t && (t = 100);
                var u = function () {
                    (a = this), (o = arguments), (i = Date.now());
                    var u = n && !r;
                    return r || (r = setTimeout(l, t)), u && ((c = e.apply(a, o)), (a = o = null)), c;
                };
                return (
                    (u.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (u.flush = function () {
                        r && ((c = e.apply(a, o)), (a = o = null), clearTimeout(r), (r = null));
                    }),
                    u
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        427495: (e, t, n) => {
            var r;
            !(function (o, a) {
                if (o) {
                    for (var i, c = { 8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "ins", 46: "del", 91: "meta", 93: "meta", 224: "meta" }, l = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, u = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" }, s = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" }, p = 1; p < 20; ++p) c[111 + p] = "f" + p;
                    for (p = 0; p <= 9; ++p) c[p + 96] = p.toString();
                    (k.prototype.bind = function (e, t, n) {
                        var r = this;
                        return (e = e instanceof Array ? e : [e]), r._bindMultiple.call(r, e, t, n), r;
                    }),
                        (k.prototype.unbind = function (e, t) {
                            return this.bind.call(this, e, function () {}, t);
                        }),
                        (k.prototype.trigger = function (e, t) {
                            var n = this;
                            return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e), n;
                        }),
                        (k.prototype.reset = function () {
                            var e = this;
                            return (e._callbacks = {}), (e._directMap = {}), e;
                        }),
                        (k.prototype.stopCallback = function (e, t) {
                            if ((" " + t.className + " ").indexOf(" mousetrap ") > -1) return !1;
                            if (v(t, this.target)) return !1;
                            if ("composedPath" in e && "function" == typeof e.composedPath) {
                                var n = e.composedPath()[0];
                                n !== e.target && (t = n);
                            }
                            return "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable;
                        }),
                        (k.prototype.handleKey = function () {
                            return this._handleKey.apply(this, arguments);
                        }),
                        (k.addKeycodes = function (e) {
                            for (var t in e) e.hasOwnProperty(t) && (c[t] = e[t]);
                            i = null;
                        }),
                        (k.init = function () {
                            var e = k(a);
                            for (var t in e)
                                "_" !== t.charAt(0) &&
                                    (k[t] = (function (t) {
                                        return function () {
                                            return e[t].apply(e, arguments);
                                        };
                                    })(t));
                        }),
                        k.init(),
                        (o.Mousetrap = k),
                        e.exports && (e.exports = k),
                        void 0 ===
                            (r = function () {
                                return k;
                            }.call(t, n, t, e)) || (e.exports = r);
                }
                function f(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n);
                }
                function h(e) {
                    if ("keypress" == e.type) {
                        var t = String.fromCharCode(e.which);
                        return e.shiftKey || (t = t.toLowerCase()), t;
                    }
                    return c[e.which] ? c[e.which] : l[e.which] ? l[e.which] : String.fromCharCode(e.which).toLowerCase();
                }
                function d(e) {
                    return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e;
                }
                function y(e, t, n) {
                    return (
                        n ||
                            (n = (function () {
                                if (!i) for (var e in ((i = {}), c)) (e > 95 && e < 112) || (c.hasOwnProperty(e) && (i[c[e]] = e));
                                return i;
                            })()[e]
                                ? "keydown"
                                : "keypress"),
                        "keypress" == n && t.length && (n = "keydown"),
                        n
                    );
                }
                function m(e, t) {
                    var n,
                        r,
                        o,
                        a = [];
                    for (
                        n = (function (e) {
                            return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus")).split("+");
                        })(e),
                            o = 0;
                        o < n.length;
                        ++o
                    )
                        (r = n[o]), s[r] && (r = s[r]), t && "keypress" != t && u[r] && ((r = u[r]), a.push("shift")), d(r) && a.push(r);
                    return { key: r, modifiers: a, action: (t = y(r, a, t)) };
                }
                function v(e, t) {
                    return null !== e && e !== a && (e === t || v(e.parentNode, t));
                }
                function k(e) {
                    var t = this;
                    if (((e = e || a), !(t instanceof k))) return new k(e);
                    (t.target = e), (t._callbacks = {}), (t._directMap = {});
                    var n,
                        r = {},
                        o = !1,
                        i = !1,
                        c = !1;
                    function l(e) {
                        e = e || {};
                        var t,
                            n = !1;
                        for (t in r) e[t] ? (n = !0) : (r[t] = 0);
                        n || (c = !1);
                    }
                    function u(e, n, o, a, i, c) {
                        var l,
                            u,
                            s,
                            p,
                            f = [],
                            h = o.type;
                        if (!t._callbacks[e]) return [];
                        for ("keyup" == h && d(e) && (n = [e]), l = 0; l < t._callbacks[e].length; ++l)
                            if (((u = t._callbacks[e][l]), (a || !u.seq || r[u.seq] == u.level) && h == u.action && (("keypress" == h && !o.metaKey && !o.ctrlKey) || ((s = n), (p = u.modifiers), s.sort().join(",") === p.sort().join(","))))) {
                                var y = !a && u.combo == i,
                                    m = a && u.seq == a && u.level == c;
                                (y || m) && t._callbacks[e].splice(l, 1), f.push(u);
                            }
                        return f;
                    }
                    function s(e, n, r, o) {
                        t.stopCallback(n, n.target || n.srcElement, r, o) ||
                            (!1 === e(n, r) &&
                                ((function (e) {
                                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                                })(n),
                                (function (e) {
                                    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                                })(n)));
                    }
                    function p(e) {
                        "number" != typeof e.which && (e.which = e.keyCode);
                        var n = h(e);
                        n &&
                            ("keyup" != e.type || o !== n
                                ? t.handleKey(
                                      n,
                                      (function (e) {
                                          var t = [];
                                          return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t;
                                      })(e),
                                      e,
                                  )
                                : (o = !1));
                    }
                    function y(e, t, a, i) {
                        function u(t) {
                            return function () {
                                (c = t), ++r[e], clearTimeout(n), (n = setTimeout(l, 1e3));
                            };
                        }
                        function p(t) {
                            s(a, t, e), "keyup" !== i && (o = h(t)), setTimeout(l, 10);
                        }
                        r[e] = 0;
                        for (var f = 0; f < t.length; ++f) {
                            var d = f + 1 === t.length ? p : u(i || m(t[f + 1]).action);
                            v(t[f], d, i, e, f);
                        }
                    }
                    function v(e, n, r, o, a) {
                        t._directMap[e + ":" + r] = n;
                        var i,
                            c = (e = e.replace(/\s+/g, " ")).split(" ");
                        c.length > 1 ? y(e, c, n, r) : ((i = m(e, r)), (t._callbacks[i.key] = t._callbacks[i.key] || []), u(i.key, i.modifiers, { type: i.action }, o, e, a), t._callbacks[i.key][o ? "unshift" : "push"]({ callback: n, modifiers: i.modifiers, action: i.action, seq: o, level: a, combo: e }));
                    }
                    (t._handleKey = function (e, t, n) {
                        var r,
                            o = u(e, t, n),
                            a = {},
                            p = 0,
                            f = !1;
                        for (r = 0; r < o.length; ++r) o[r].seq && (p = Math.max(p, o[r].level));
                        for (r = 0; r < o.length; ++r)
                            if (o[r].seq) {
                                if (o[r].level != p) continue;
                                (f = !0), (a[o[r].seq] = 1), s(o[r].callback, n, o[r].combo, o[r].seq);
                            } else f || s(o[r].callback, n, o[r].combo);
                        var h = "keypress" == n.type && i;
                        n.type != c || d(e) || h || l(a), (i = f && "keydown" == n.type);
                    }),
                        (t._bindMultiple = function (e, t, n) {
                            for (var r = 0; r < e.length; ++r) v(e[r], t, n);
                        }),
                        f(e, "keypress", p),
                        f(e, "keydown", p),
                        f(e, "keyup", p);
                }
            })("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-536eaa00.692a17da.js.map
