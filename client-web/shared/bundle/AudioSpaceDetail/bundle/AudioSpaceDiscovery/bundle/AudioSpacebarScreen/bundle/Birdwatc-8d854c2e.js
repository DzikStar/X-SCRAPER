"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"],
    {
        46062: (e, t, n) => {
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                i = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];
            function c(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function l(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                        l = t.base ? i[0] + t.base : i[0],
                        s = n[l] || 0,
                        u = "".concat(l, " ").concat(s);
                    n[l] = s + 1;
                    var f = c(u),
                        d = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({ identifier: u, updater: h(d, t), references: 1 }), r.push(u);
                }
                return r;
            }
            function s(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = i(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var u,
                f =
                    ((u = []),
                    function (e, t) {
                        return (u[e] = t), u.filter(Boolean).join("\n");
                    });
            function d(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = f(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function p(e, t, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var v = null,
                b = 0;
            function h(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = b++;
                    (n = v || (v = s(t))), (r = d.bind(null, n, i, !1)), (o = d.bind(null, n, i, !0));
                } else
                    (n = s(t)),
                        (r = p.bind(null, n, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = l((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = c(n[r]);
                            a[o].references--;
                        }
                        for (var i = l(e, t), s = 0; s < n.length; s++) {
                            var u = c(n[s]);
                            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        305163: (e, t, n) => {
            n.d(t, { _T: () => o, ev: () => i, pi: () => r });
            var r = function () {
                return (
                    (r =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }),
                    r.apply(this, arguments)
                );
            };
            function o(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                }
                return n;
            }
            Object.create;
            function i(e, t, n) {
                if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            Object.create;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e.9d489e9a.js.map
