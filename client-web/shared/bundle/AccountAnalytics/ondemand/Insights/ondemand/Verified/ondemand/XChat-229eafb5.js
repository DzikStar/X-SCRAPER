"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-229eafb5"],
    {
        46062: (e, r, o) => {
            var t,
                n = function () {
                    return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t;
                },
                i = (function () {
                    var e = {};
                    return function (r) {
                        if (void 0 === e[r]) {
                            var o = document.querySelector(r);
                            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                                try {
                                    o = o.contentDocument.head;
                                } catch (e) {
                                    o = null;
                                }
                            e[r] = o;
                        }
                        return e[r];
                    };
                })(),
                s = [];
            function l(e) {
                for (var r = -1, o = 0; o < s.length; o++)
                    if (s[o].identifier === e) {
                        r = o;
                        break;
                    }
                return r;
            }
            function a(e, r) {
                for (var o = {}, t = [], n = 0; n < e.length; n++) {
                    var i = e[n],
                        a = r.base ? i[0] + r.base : i[0],
                        c = o[a] || 0,
                        d = "".concat(a, " ").concat(c);
                    o[a] = c + 1;
                    var u = l(d),
                        p = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== u ? (s[u].references++, s[u].updater(p)) : s.push({ identifier: d, updater: g(p, r), references: 1 }), t.push(d);
                }
                return t;
            }
            function c(e) {
                var r = document.createElement("style"),
                    t = e.attributes || {};
                if (void 0 === t.nonce) {
                    var n = o.nc;
                    n && (t.nonce = n);
                }
                if (
                    (Object.keys(t).forEach(function (e) {
                        r.setAttribute(e, t[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(r);
                else {
                    var s = i(e.insert || "head");
                    if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    s.appendChild(r);
                }
                return r;
            }
            var d,
                u =
                    ((d = []),
                    function (e, r) {
                        return (d[e] = r), d.filter(Boolean).join("\n");
                    });
            function p(e, r, o, t) {
                var n = o ? "" : t.media ? "@media ".concat(t.media, " {").concat(t.css, "}") : t.css;
                if (e.styleSheet) e.styleSheet.cssText = u(r, n);
                else {
                    var i = document.createTextNode(n),
                        s = e.childNodes;
                    s[r] && e.removeChild(s[r]), s.length ? e.insertBefore(i, s[r]) : e.appendChild(i);
                }
            }
            function f(e, r, o) {
                var t = o.css,
                    n = o.media,
                    i = o.sourceMap;
                if ((n ? e.setAttribute("media", n) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet)) e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t));
                }
            }
            var b = null,
                m = 0;
            function g(e, r) {
                var o, t, n;
                if (r.singleton) {
                    var i = m++;
                    (o = b || (b = c(r))), (t = p.bind(null, o, i, !1)), (n = p.bind(null, o, i, !0));
                } else
                    (o = c(r)),
                        (t = f.bind(null, o, r)),
                        (n = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(o);
                        });
                return (
                    t(e),
                    function (r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                            t((e = r));
                        } else n();
                    }
                );
            }
            e.exports = function (e, r) {
                (r = r || {}).singleton || "boolean" == typeof r.singleton || (r.singleton = n());
                var o = a((e = e || []), r);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var t = 0; t < o.length; t++) {
                            var n = l(o[t]);
                            s[n].references--;
                        }
                        for (var i = a(e, r), c = 0; c < o.length; c++) {
                            var d = l(o[c]);
                            0 === s[d].references && (s[d].updater(), s.splice(d, 1));
                        }
                        o = i;
                    }
                };
            };
        },
        50859: (e, r, o) => {
            function t(e, r, o) {
                if (!r.has(e)) throw new TypeError("attempted to " + o + " private field on non-instance");
                return r.get(e);
            }
            o.d(r, { _: () => t });
        },
        588412: (e, r, o) => {
            o.d(r, { _: () => n });
            var t = o(50859);
            function n(e, r) {
                return (function (e, r) {
                    return r.get ? r.get.call(e) : r.value;
                })(e, (0, t._)(e, r, "get"));
            }
        },
        650629: (e, r, o) => {
            function t(e, r, o) {
                !(function (e, r) {
                    if (r.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
                })(e, r),
                    r.set(e, o);
            }
            o.d(r, { _: () => t });
        },
        280956: (e, r, o) => {
            o.d(r, { _: () => n });
            var t = o(50859);
            function n(e, r, o) {
                return (
                    (function (e, r, o) {
                        if (r.set) r.set.call(e, o);
                        else {
                            if (!r.writable) throw new TypeError("attempted to set read only private field");
                            r.value = o;
                        }
                    })(e, (0, t._)(e, r, "set"), o),
                    o
                );
            }
        },
        320324: (e, r, o) => {
            o.d(r, { m6: () => H });
            function t(e) {
                const r = (function (e) {
                        const { theme: r, prefix: o } = e,
                            t = { nextPart: new Map(), validators: [] },
                            n = (function (e, r) {
                                if (!r) return e;
                                return e.map(([e, o]) => [e, o.map((e) => ("string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, o]) => [r + e, o])) : e))]);
                            })(Object.entries(e.classGroups), o);
                        return (
                            n.forEach(([e, o]) => {
                                s(o, t, e, r);
                            }),
                            t
                        );
                    })(e),
                    { conflictingClassGroups: o, conflictingClassGroupModifiers: t } = e;
                return {
                    getClassGroupId: function (e) {
                        const o = e.split("-");
                        return (
                            "" === o[0] && 1 !== o.length && o.shift(),
                            n(o, r) ||
                                (function (e) {
                                    if (i.test(e)) {
                                        const r = i.exec(e)[1],
                                            o = r?.substring(0, r.indexOf(":"));
                                        if (o) return "arbitrary.." + o;
                                    }
                                })(e)
                        );
                    },
                    getConflictingClassGroupIds: function (e, r) {
                        const n = o[e] || [];
                        return r && t[e] ? [...n, ...t[e]] : n;
                    },
                };
            }
            function n(e, r) {
                if (0 === e.length) return r.classGroupId;
                const o = e[0],
                    t = r.nextPart.get(o),
                    i = t ? n(e.slice(1), t) : void 0;
                if (i) return i;
                if (0 === r.validators.length) return;
                const s = e.join("-");
                return r.validators.find(({ validator: e }) => e(s))?.classGroupId;
            }
            const i = /^\[(.+)\]$/;
            function s(e, r, o, t) {
                e.forEach((e) => {
                    if ("string" != typeof e) {
                        if ("function" == typeof e) return e.isThemeGetter ? void s(e(t), r, o, t) : void r.validators.push({ validator: e, classGroupId: o });
                        Object.entries(e).forEach(([e, n]) => {
                            s(n, l(r, e), o, t);
                        });
                    } else {
                        ("" === e ? r : l(r, e)).classGroupId = o;
                    }
                });
            }
            function l(e, r) {
                let o = e;
                return (
                    r.split("-").forEach((e) => {
                        o.nextPart.has(e) || o.nextPart.set(e, { nextPart: new Map(), validators: [] }), (o = o.nextPart.get(e));
                    }),
                    o
                );
            }
            function a(e) {
                if (e < 1) return { get: () => {}, set: () => {} };
                let r = 0,
                    o = new Map(),
                    t = new Map();
                function n(n, i) {
                    o.set(n, i), r++, r > e && ((r = 0), (t = o), (o = new Map()));
                }
                return {
                    get(e) {
                        let r = o.get(e);
                        return void 0 !== r ? r : void 0 !== (r = t.get(e)) ? (n(e, r), r) : void 0;
                    },
                    set(e, r) {
                        o.has(e) ? o.set(e, r) : n(e, r);
                    },
                };
            }
            function c(e) {
                const { separator: r, experimentalParseClassName: o } = e,
                    t = 1 === r.length,
                    n = r[0],
                    i = r.length;
                function s(e) {
                    const o = [];
                    let s,
                        l = 0,
                        a = 0;
                    for (let c = 0; c < e.length; c++) {
                        let d = e[c];
                        if (0 === l) {
                            if (d === n && (t || e.slice(c, c + i) === r)) {
                                o.push(e.slice(a, c)), (a = c + i);
                                continue;
                            }
                            if ("/" === d) {
                                s = c;
                                continue;
                            }
                        }
                        "[" === d ? l++ : "]" === d && l--;
                    }
                    const c = 0 === o.length ? e : e.substring(a),
                        d = c.startsWith("!");
                    return { modifiers: o, hasImportantModifier: d, baseClassName: d ? c.substring(1) : c, maybePostfixModifierPosition: s && s > a ? s - a : void 0 };
                }
                return o
                    ? function (e) {
                          return o({ className: e, parseClassName: s });
                      }
                    : s;
            }
            const d = /\s+/;
            function u() {
                let e,
                    r,
                    o = 0,
                    t = "";
                for (; o < arguments.length; ) (e = arguments[o++]) && (r = p(e)) && (t && (t += " "), (t += r));
                return t;
            }
            function p(e) {
                if ("string" == typeof e) return e;
                let r,
                    o = "";
                for (let t = 0; t < e.length; t++) e[t] && (r = p(e[t])) && (o && (o += " "), (o += r));
                return o;
            }
            function f(e, ...r) {
                let o,
                    n,
                    i,
                    s = function (d) {
                        const u = r.reduce((e, r) => r(e), e());
                        return (
                            (o = (function (e) {
                                return { cache: a(e.cacheSize), parseClassName: c(e), ...t(e) };
                            })(u)),
                            (n = o.cache.get),
                            (i = o.cache.set),
                            (s = l),
                            l(d)
                        );
                    };
                function l(e) {
                    const r = n(e);
                    if (r) return r;
                    const t = (function (e, r) {
                        const { parseClassName: o, getClassGroupId: t, getConflictingClassGroupIds: n } = r,
                            i = new Set();
                        return e
                            .trim()
                            .split(d)
                            .map((e) => {
                                const { modifiers: r, hasImportantModifier: n, baseClassName: i, maybePostfixModifierPosition: s } = o(e);
                                let l = Boolean(s),
                                    a = t(l ? i.substring(0, s) : i);
                                if (!a) {
                                    if (!l) return { isTailwindClass: !1, originalClassName: e };
                                    if (((a = t(i)), !a)) return { isTailwindClass: !1, originalClassName: e };
                                    l = !1;
                                }
                                const c = (function (e) {
                                    if (e.length <= 1) return e;
                                    const r = [];
                                    let o = [];
                                    return (
                                        e.forEach((e) => {
                                            "[" === e[0] ? (r.push(...o.sort(), e), (o = [])) : o.push(e);
                                        }),
                                        r.push(...o.sort()),
                                        r
                                    );
                                })(r).join(":");
                                return { isTailwindClass: !0, modifierId: n ? c + "!" : c, classGroupId: a, originalClassName: e, hasPostfixModifier: l };
                            })
                            .reverse()
                            .filter((e) => {
                                if (!e.isTailwindClass) return !0;
                                const { modifierId: r, classGroupId: o, hasPostfixModifier: t } = e,
                                    s = r + o;
                                return !i.has(s) && (i.add(s), n(o, t).forEach((e) => i.add(r + e)), !0);
                            })
                            .reverse()
                            .map((e) => e.originalClassName)
                            .join(" ");
                    })(e, o);
                    return i(e, t), t;
                }
                return function () {
                    return s(u.apply(null, arguments));
                };
            }
            function b(e) {
                const r = (r) => r[e] || [];
                return (r.isThemeGetter = !0), r;
            }
            const m = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                g = /^\d+\/\d+$/,
                h = new Set(["px", "full", "screen"]),
                v = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                w = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                x = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
            function C(e) {
                return j(e) || h.has(e) || g.test(e);
            }
            function z(e) {
                return B(e, "length", R);
            }
            function j(e) {
                return Boolean(e) && !Number.isNaN(Number(e));
            }
            function N(e) {
                return B(e, "number", j);
            }
            function S(e) {
                return Boolean(e) && Number.isInteger(Number(e));
            }
            function M(e) {
                return e.endsWith("%") && j(e.slice(0, -1));
            }
            function I(e) {
                return m.test(e);
            }
            function G(e) {
                return v.test(e);
            }
            const T = new Set(["length", "size", "percentage"]);
            function E(e) {
                return B(e, T, W);
            }
            function P(e) {
                return B(e, "position", W);
            }
            const _ = new Set(["image", "url"]);
            function O(e) {
                return B(e, _, L);
            }
            function $(e) {
                return B(e, "", q);
            }
            function A() {
                return !0;
            }
            function B(e, r, o) {
                const t = m.exec(e);
                return !!t && (t[1] ? ("string" == typeof r ? t[1] === r : r.has(t[1])) : o(t[2]));
            }
            function R(e) {
                return y.test(e) && !w.test(e);
            }
            function W() {
                return !1;
            }
            function q(e) {
                return x.test(e);
            }
            function L(e) {
                return k.test(e);
            }
            Symbol.toStringTag;
            function F() {
                const e = b("colors"),
                    r = b("spacing"),
                    o = b("blur"),
                    t = b("brightness"),
                    n = b("borderColor"),
                    i = b("borderRadius"),
                    s = b("borderSpacing"),
                    l = b("borderWidth"),
                    a = b("contrast"),
                    c = b("grayscale"),
                    d = b("hueRotate"),
                    u = b("invert"),
                    p = b("gap"),
                    f = b("gradientColorStops"),
                    m = b("gradientColorStopPositions"),
                    g = b("inset"),
                    h = b("margin"),
                    v = b("opacity"),
                    y = b("padding"),
                    w = b("saturate"),
                    x = b("scale"),
                    k = b("sepia"),
                    T = b("skew"),
                    _ = b("space"),
                    B = b("translate"),
                    R = () => ["auto", I, r],
                    W = () => [I, r],
                    q = () => ["", C, z],
                    L = () => ["auto", j, I],
                    F = () => ["", "0", I],
                    H = () => [j, N],
                    U = () => [j, I];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: { colors: [A], spacing: [C, z], blur: ["none", "", G, I], brightness: H(), borderColor: [e], borderRadius: ["none", "", "full", G, I], borderSpacing: W(), borderWidth: q(), contrast: H(), grayscale: F(), hueRotate: U(), invert: F(), gap: W(), gradientColorStops: [e], gradientColorStopPositions: [M, z], inset: R(), margin: R(), opacity: H(), padding: W(), saturate: H(), scale: H(), sepia: F(), skew: U(), space: W(), translate: W() },
                    classGroups: {
                        aspect: [{ aspect: ["auto", "square", "video", I] }],
                        container: ["container"],
                        columns: [{ columns: [G] }],
                        "break-after": [{ "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }],
                        "break-before": [{ "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"] }],
                        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                        box: [{ box: ["border", "content"] }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{ float: ["right", "left", "none", "start", "end"] }],
                        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                        "object-position": [{ object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", I] }],
                        overflow: [{ overflow: ["auto", "hidden", "clip", "visible", "scroll"] }],
                        "overflow-x": [{ "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] }],
                        "overflow-y": [{ "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] }],
                        overscroll: [{ overscroll: ["auto", "contain", "none"] }],
                        "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
                        "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{ inset: [g] }],
                        "inset-x": [{ "inset-x": [g] }],
                        "inset-y": [{ "inset-y": [g] }],
                        start: [{ start: [g] }],
                        end: [{ end: [g] }],
                        top: [{ top: [g] }],
                        right: [{ right: [g] }],
                        bottom: [{ bottom: [g] }],
                        left: [{ left: [g] }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{ z: ["auto", S, I] }],
                        basis: [{ basis: R() }],
                        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
                        grow: [{ grow: F() }],
                        shrink: [{ shrink: F() }],
                        order: [{ order: ["first", "last", "none", S, I] }],
                        "grid-cols": [{ "grid-cols": [A] }],
                        "col-start-end": [{ col: ["auto", { span: ["full", S, I] }, I] }],
                        "col-start": [{ "col-start": L() }],
                        "col-end": [{ "col-end": L() }],
                        "grid-rows": [{ "grid-rows": [A] }],
                        "row-start-end": [{ row: ["auto", { span: [S, I] }, I] }],
                        "row-start": [{ "row-start": L() }],
                        "row-end": [{ "row-end": L() }],
                        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
                        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
                        gap: [{ gap: [p] }],
                        "gap-x": [{ "gap-x": [p] }],
                        "gap-y": [{ "gap-y": [p] }],
                        "justify-content": [{ justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"] }],
                        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                        "align-content": [{ content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"] }],
                        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                        "place-content": [{ "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"] }],
                        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                        p: [{ p: [y] }],
                        px: [{ px: [y] }],
                        py: [{ py: [y] }],
                        ps: [{ ps: [y] }],
                        pe: [{ pe: [y] }],
                        pt: [{ pt: [y] }],
                        pr: [{ pr: [y] }],
                        pb: [{ pb: [y] }],
                        pl: [{ pl: [y] }],
                        m: [{ m: [h] }],
                        mx: [{ mx: [h] }],
                        my: [{ my: [h] }],
                        ms: [{ ms: [h] }],
                        me: [{ me: [h] }],
                        mt: [{ mt: [h] }],
                        mr: [{ mr: [h] }],
                        mb: [{ mb: [h] }],
                        ml: [{ ml: [h] }],
                        "space-x": [{ "space-x": [_] }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{ "space-y": [_] }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, r] }],
                        "min-w": [{ "min-w": [I, r, "min", "max", "fit"] }],
                        "max-w": [{ "max-w": [I, r, "none", "full", "min", "max", "fit", "prose", { screen: [G] }, G] }],
                        h: [{ h: [I, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "min-h": [{ "min-h": [I, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "max-h": [{ "max-h": [I, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        size: [{ size: [I, r, "auto", "min", "max", "fit"] }],
                        "font-size": [{ text: ["base", G, z] }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", N] }],
                        "font-family": [{ font: [A] }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I] }],
                        "line-clamp": [{ "line-clamp": ["none", j, N] }],
                        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, I] }],
                        "list-image": [{ "list-image": ["none", I] }],
                        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
                        "list-style-position": [{ list: ["inside", "outside"] }],
                        "placeholder-color": [{ placeholder: [e] }],
                        "placeholder-opacity": [{ "placeholder-opacity": [v] }],
                        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                        "text-color": [{ text: [e] }],
                        "text-opacity": [{ "text-opacity": [v] }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{ decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"] }],
                        "text-decoration-thickness": [{ decoration: ["auto", "from-font", C, z] }],
                        "underline-offset": [{ "underline-offset": ["auto", C, I] }],
                        "text-decoration-color": [{ decoration: [e] }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                        indent: [{ indent: W() }],
                        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I] }],
                        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                        break: [{ break: ["normal", "words", "all", "keep"] }],
                        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                        content: [{ content: ["none", I] }],
                        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                        "bg-opacity": [{ "bg-opacity": [v] }],
                        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                        "bg-position": [{ bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", P] }],
                        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                        "bg-size": [{ bg: ["auto", "cover", "contain", E] }],
                        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, O] }],
                        "bg-color": [{ bg: [e] }],
                        "gradient-from-pos": [{ from: [m] }],
                        "gradient-via-pos": [{ via: [m] }],
                        "gradient-to-pos": [{ to: [m] }],
                        "gradient-from": [{ from: [f] }],
                        "gradient-via": [{ via: [f] }],
                        "gradient-to": [{ to: [f] }],
                        rounded: [{ rounded: [i] }],
                        "rounded-s": [{ "rounded-s": [i] }],
                        "rounded-e": [{ "rounded-e": [i] }],
                        "rounded-t": [{ "rounded-t": [i] }],
                        "rounded-r": [{ "rounded-r": [i] }],
                        "rounded-b": [{ "rounded-b": [i] }],
                        "rounded-l": [{ "rounded-l": [i] }],
                        "rounded-ss": [{ "rounded-ss": [i] }],
                        "rounded-se": [{ "rounded-se": [i] }],
                        "rounded-ee": [{ "rounded-ee": [i] }],
                        "rounded-es": [{ "rounded-es": [i] }],
                        "rounded-tl": [{ "rounded-tl": [i] }],
                        "rounded-tr": [{ "rounded-tr": [i] }],
                        "rounded-br": [{ "rounded-br": [i] }],
                        "rounded-bl": [{ "rounded-bl": [i] }],
                        "border-w": [{ border: [l] }],
                        "border-w-x": [{ "border-x": [l] }],
                        "border-w-y": [{ "border-y": [l] }],
                        "border-w-s": [{ "border-s": [l] }],
                        "border-w-e": [{ "border-e": [l] }],
                        "border-w-t": [{ "border-t": [l] }],
                        "border-w-r": [{ "border-r": [l] }],
                        "border-w-b": [{ "border-b": [l] }],
                        "border-w-l": [{ "border-l": [l] }],
                        "border-opacity": [{ "border-opacity": [v] }],
                        "border-style": [{ border: ["solid", "dashed", "dotted", "double", "none", "hidden"] }],
                        "divide-x": [{ "divide-x": [l] }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{ "divide-y": [l] }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{ "divide-opacity": [v] }],
                        "divide-style": [{ divide: ["solid", "dashed", "dotted", "double", "none"] }],
                        "border-color": [{ border: [n] }],
                        "border-color-x": [{ "border-x": [n] }],
                        "border-color-y": [{ "border-y": [n] }],
                        "border-color-t": [{ "border-t": [n] }],
                        "border-color-r": [{ "border-r": [n] }],
                        "border-color-b": [{ "border-b": [n] }],
                        "border-color-l": [{ "border-l": [n] }],
                        "divide-color": [{ divide: [n] }],
                        "outline-style": [{ outline: ["", "solid", "dashed", "dotted", "double", "none"] }],
                        "outline-offset": [{ "outline-offset": [C, I] }],
                        "outline-w": [{ outline: [C, z] }],
                        "outline-color": [{ outline: [e] }],
                        "ring-w": [{ ring: q() }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{ ring: [e] }],
                        "ring-opacity": [{ "ring-opacity": [v] }],
                        "ring-offset-w": [{ "ring-offset": [C, z] }],
                        "ring-offset-color": [{ "ring-offset": [e] }],
                        shadow: [{ shadow: ["", "inner", "none", G, $] }],
                        "shadow-color": [{ shadow: [A] }],
                        opacity: [{ opacity: [v] }],
                        "mix-blend": [{ "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"] }],
                        "bg-blend": [{ "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"] }],
                        filter: [{ filter: ["", "none"] }],
                        blur: [{ blur: [o] }],
                        brightness: [{ brightness: [t] }],
                        contrast: [{ contrast: [a] }],
                        "drop-shadow": [{ "drop-shadow": ["", "none", G, I] }],
                        grayscale: [{ grayscale: [c] }],
                        "hue-rotate": [{ "hue-rotate": [d] }],
                        invert: [{ invert: [u] }],
                        saturate: [{ saturate: [w] }],
                        sepia: [{ sepia: [k] }],
                        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                        "backdrop-blur": [{ "backdrop-blur": [o] }],
                        "backdrop-brightness": [{ "backdrop-brightness": [t] }],
                        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
                        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
                        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                        "backdrop-invert": [{ "backdrop-invert": [u] }],
                        "backdrop-opacity": [{ "backdrop-opacity": [v] }],
                        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
                        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
                        "border-collapse": [{ border: ["collapse", "separate"] }],
                        "border-spacing": [{ "border-spacing": [s] }],
                        "border-spacing-x": [{ "border-spacing-x": [s] }],
                        "border-spacing-y": [{ "border-spacing-y": [s] }],
                        "table-layout": [{ table: ["auto", "fixed"] }],
                        caption: [{ caption: ["top", "bottom"] }],
                        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I] }],
                        duration: [{ duration: U() }],
                        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
                        delay: [{ delay: U() }],
                        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
                        transform: [{ transform: ["", "gpu", "none"] }],
                        scale: [{ scale: [x] }],
                        "scale-x": [{ "scale-x": [x] }],
                        "scale-y": [{ "scale-y": [x] }],
                        rotate: [{ rotate: [S, I] }],
                        "translate-x": [{ "translate-x": [B] }],
                        "translate-y": [{ "translate-y": [B] }],
                        "skew-x": [{ "skew-x": [T] }],
                        "skew-y": [{ "skew-y": [T] }],
                        "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I] }],
                        accent: [{ accent: ["auto", e] }],
                        appearance: [{ appearance: ["none", "auto"] }],
                        cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I] }],
                        "caret-color": [{ caret: [e] }],
                        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                        resize: [{ resize: ["none", "y", "x", ""] }],
                        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                        "scroll-m": [{ "scroll-m": W() }],
                        "scroll-mx": [{ "scroll-mx": W() }],
                        "scroll-my": [{ "scroll-my": W() }],
                        "scroll-ms": [{ "scroll-ms": W() }],
                        "scroll-me": [{ "scroll-me": W() }],
                        "scroll-mt": [{ "scroll-mt": W() }],
                        "scroll-mr": [{ "scroll-mr": W() }],
                        "scroll-mb": [{ "scroll-mb": W() }],
                        "scroll-ml": [{ "scroll-ml": W() }],
                        "scroll-p": [{ "scroll-p": W() }],
                        "scroll-px": [{ "scroll-px": W() }],
                        "scroll-py": [{ "scroll-py": W() }],
                        "scroll-ps": [{ "scroll-ps": W() }],
                        "scroll-pe": [{ "scroll-pe": W() }],
                        "scroll-pt": [{ "scroll-pt": W() }],
                        "scroll-pr": [{ "scroll-pr": W() }],
                        "scroll-pb": [{ "scroll-pb": W() }],
                        "scroll-pl": [{ "scroll-pl": W() }],
                        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                        "snap-stop": [{ snap: ["normal", "always"] }],
                        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                        touch: [{ touch: ["auto", "none", "manipulation"] }],
                        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{ select: ["none", "text", "all", "auto"] }],
                        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", I] }],
                        fill: [{ fill: [e, "none"] }],
                        "stroke-w": [{ stroke: [C, z, N] }],
                        stroke: [{ stroke: [e, "none"] }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"],
                    },
                    conflictingClassGroupModifiers: { "font-size": ["leading"] },
                };
            }
            const H = f(F);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-229eafb5.4bcd403a.js.map
