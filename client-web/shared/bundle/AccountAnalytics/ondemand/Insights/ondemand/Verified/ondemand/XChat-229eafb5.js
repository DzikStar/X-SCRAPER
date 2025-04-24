"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-229eafb5"],
    {
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
            o.d(r, { m6: () => D });
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
                                l(o, t, e, r);
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
                                    if (s.test(e)) {
                                        const r = s.exec(e)[1],
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
                    s = t ? n(e.slice(1), t) : void 0;
                if (s) return s;
                if (0 === r.validators.length) return;
                const l = e.join("-");
                return r.validators.find(({ validator: e }) => e(l))?.classGroupId;
            }
            const s = /^\[(.+)\]$/;
            function l(e, r, o, t) {
                e.forEach((e) => {
                    if ("string" != typeof e) {
                        if ("function" == typeof e) return e.isThemeGetter ? void l(e(t), r, o, t) : void r.validators.push({ validator: e, classGroupId: o });
                        Object.entries(e).forEach(([e, n]) => {
                            l(n, i(r, e), o, t);
                        });
                    } else {
                        ("" === e ? r : i(r, e)).classGroupId = o;
                    }
                });
            }
            function i(e, r) {
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
                function n(n, s) {
                    o.set(n, s), r++, r > e && ((r = 0), (t = o), (o = new Map()));
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
                    s = r.length;
                function l(e) {
                    const o = [];
                    let l,
                        i = 0,
                        a = 0;
                    for (let c = 0; c < e.length; c++) {
                        let d = e[c];
                        if (0 === i) {
                            if (d === n && (t || e.slice(c, c + s) === r)) {
                                o.push(e.slice(a, c)), (a = c + s);
                                continue;
                            }
                            if ("/" === d) {
                                l = c;
                                continue;
                            }
                        }
                        "[" === d ? i++ : "]" === d && i--;
                    }
                    const c = 0 === o.length ? e : e.substring(a),
                        d = c.startsWith("!");
                    return { modifiers: o, hasImportantModifier: d, baseClassName: d ? c.substring(1) : c, maybePostfixModifierPosition: l && l > a ? l - a : void 0 };
                }
                return o
                    ? function (e) {
                          return o({ className: e, parseClassName: l });
                      }
                    : l;
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
            function b(e, ...r) {
                let o,
                    n,
                    s,
                    l = function (d) {
                        const u = r.reduce((e, r) => r(e), e());
                        return (
                            (o = (function (e) {
                                return { cache: a(e.cacheSize), parseClassName: c(e), ...t(e) };
                            })(u)),
                            (n = o.cache.get),
                            (s = o.cache.set),
                            (l = i),
                            i(d)
                        );
                    };
                function i(e) {
                    const r = n(e);
                    if (r) return r;
                    const t = (function (e, r) {
                        const { parseClassName: o, getClassGroupId: t, getConflictingClassGroupIds: n } = r,
                            s = new Set();
                        return e
                            .trim()
                            .split(d)
                            .map((e) => {
                                const { modifiers: r, hasImportantModifier: n, baseClassName: s, maybePostfixModifierPosition: l } = o(e);
                                let i = Boolean(l),
                                    a = t(i ? s.substring(0, l) : s);
                                if (!a) {
                                    if (!i) return { isTailwindClass: !1, originalClassName: e };
                                    if (((a = t(s)), !a)) return { isTailwindClass: !1, originalClassName: e };
                                    i = !1;
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
                                return { isTailwindClass: !0, modifierId: n ? c + "!" : c, classGroupId: a, originalClassName: e, hasPostfixModifier: i };
                            })
                            .reverse()
                            .filter((e) => {
                                if (!e.isTailwindClass) return !0;
                                const { modifierId: r, classGroupId: o, hasPostfixModifier: t } = e,
                                    l = r + o;
                                return !s.has(l) && (s.add(l), n(o, t).forEach((e) => s.add(r + e)), !0);
                            })
                            .reverse()
                            .map((e) => e.originalClassName)
                            .join(" ");
                    })(e, o);
                    return s(e, t), t;
                }
                return function () {
                    return l(u.apply(null, arguments));
                };
            }
            function f(e) {
                const r = (r) => r[e] || [];
                return (r.isThemeGetter = !0), r;
            }
            const m = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                g = /^\d+\/\d+$/,
                h = new Set(["px", "full", "screen"]),
                w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                v = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                x = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                y = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
            function z(e) {
                return j(e) || h.has(e) || g.test(e);
            }
            function C(e) {
                return W(e, "length", B);
            }
            function j(e) {
                return Boolean(e) && !Number.isNaN(Number(e));
            }
            function G(e) {
                return W(e, "number", j);
            }
            function N(e) {
                return Boolean(e) && Number.isInteger(Number(e));
            }
            function I(e) {
                return e.endsWith("%") && j(e.slice(0, -1));
            }
            function P(e) {
                return m.test(e);
            }
            function S(e) {
                return w.test(e);
            }
            const _ = new Set(["length", "size", "percentage"]);
            function M(e) {
                return W(e, _, q);
            }
            function E(e) {
                return W(e, "position", q);
            }
            const T = new Set(["image", "url"]);
            function $(e) {
                return W(e, T, V);
            }
            function O(e) {
                return W(e, "", A);
            }
            function R() {
                return !0;
            }
            function W(e, r, o) {
                const t = m.exec(e);
                return !!t && (t[1] ? ("string" == typeof r ? t[1] === r : r.has(t[1])) : o(t[2]));
            }
            function B(e) {
                return v.test(e) && !x.test(e);
            }
            function q() {
                return !1;
            }
            function A(e) {
                return y.test(e);
            }
            function V(e) {
                return k.test(e);
            }
            Symbol.toStringTag;
            function X() {
                const e = f("colors"),
                    r = f("spacing"),
                    o = f("blur"),
                    t = f("brightness"),
                    n = f("borderColor"),
                    s = f("borderRadius"),
                    l = f("borderSpacing"),
                    i = f("borderWidth"),
                    a = f("contrast"),
                    c = f("grayscale"),
                    d = f("hueRotate"),
                    u = f("invert"),
                    p = f("gap"),
                    b = f("gradientColorStops"),
                    m = f("gradientColorStopPositions"),
                    g = f("inset"),
                    h = f("margin"),
                    w = f("opacity"),
                    v = f("padding"),
                    x = f("saturate"),
                    y = f("scale"),
                    k = f("sepia"),
                    _ = f("skew"),
                    T = f("space"),
                    W = f("translate"),
                    B = () => ["auto", P, r],
                    q = () => [P, r],
                    A = () => ["", z, C],
                    V = () => ["auto", j, P],
                    X = () => ["", "0", P],
                    D = () => [j, G],
                    F = () => [j, P];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: { colors: [R], spacing: [z, C], blur: ["none", "", S, P], brightness: D(), borderColor: [e], borderRadius: ["none", "", "full", S, P], borderSpacing: q(), borderWidth: A(), contrast: D(), grayscale: X(), hueRotate: F(), invert: X(), gap: q(), gradientColorStops: [e], gradientColorStopPositions: [I, C], inset: B(), margin: B(), opacity: D(), padding: q(), saturate: D(), scale: D(), sepia: X(), skew: F(), space: q(), translate: q() },
                    classGroups: {
                        aspect: [{ aspect: ["auto", "square", "video", P] }],
                        container: ["container"],
                        columns: [{ columns: [S] }],
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
                        "object-position": [{ object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", P] }],
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
                        z: [{ z: ["auto", N, P] }],
                        basis: [{ basis: B() }],
                        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                        flex: [{ flex: ["1", "auto", "initial", "none", P] }],
                        grow: [{ grow: X() }],
                        shrink: [{ shrink: X() }],
                        order: [{ order: ["first", "last", "none", N, P] }],
                        "grid-cols": [{ "grid-cols": [R] }],
                        "col-start-end": [{ col: ["auto", { span: ["full", N, P] }, P] }],
                        "col-start": [{ "col-start": V() }],
                        "col-end": [{ "col-end": V() }],
                        "grid-rows": [{ "grid-rows": [R] }],
                        "row-start-end": [{ row: ["auto", { span: [N, P] }, P] }],
                        "row-start": [{ "row-start": V() }],
                        "row-end": [{ "row-end": V() }],
                        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", P] }],
                        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", P] }],
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
                        p: [{ p: [v] }],
                        px: [{ px: [v] }],
                        py: [{ py: [v] }],
                        ps: [{ ps: [v] }],
                        pe: [{ pe: [v] }],
                        pt: [{ pt: [v] }],
                        pr: [{ pr: [v] }],
                        pb: [{ pb: [v] }],
                        pl: [{ pl: [v] }],
                        m: [{ m: [h] }],
                        mx: [{ mx: [h] }],
                        my: [{ my: [h] }],
                        ms: [{ ms: [h] }],
                        me: [{ me: [h] }],
                        mt: [{ mt: [h] }],
                        mr: [{ mr: [h] }],
                        mb: [{ mb: [h] }],
                        ml: [{ ml: [h] }],
                        "space-x": [{ "space-x": [T] }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{ "space-y": [T] }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, r] }],
                        "min-w": [{ "min-w": [P, r, "min", "max", "fit"] }],
                        "max-w": [{ "max-w": [P, r, "none", "full", "min", "max", "fit", "prose", { screen: [S] }, S] }],
                        h: [{ h: [P, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "min-h": [{ "min-h": [P, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "max-h": [{ "max-h": [P, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        size: [{ size: [P, r, "auto", "min", "max", "fit"] }],
                        "font-size": [{ text: ["base", S, C] }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", G] }],
                        "font-family": [{ font: [R] }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P] }],
                        "line-clamp": [{ "line-clamp": ["none", j, G] }],
                        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, P] }],
                        "list-image": [{ "list-image": ["none", P] }],
                        "list-style-type": [{ list: ["none", "disc", "decimal", P] }],
                        "list-style-position": [{ list: ["inside", "outside"] }],
                        "placeholder-color": [{ placeholder: [e] }],
                        "placeholder-opacity": [{ "placeholder-opacity": [w] }],
                        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                        "text-color": [{ text: [e] }],
                        "text-opacity": [{ "text-opacity": [w] }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{ decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"] }],
                        "text-decoration-thickness": [{ decoration: ["auto", "from-font", z, C] }],
                        "underline-offset": [{ "underline-offset": ["auto", z, P] }],
                        "text-decoration-color": [{ decoration: [e] }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                        indent: [{ indent: q() }],
                        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P] }],
                        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                        break: [{ break: ["normal", "words", "all", "keep"] }],
                        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                        content: [{ content: ["none", P] }],
                        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                        "bg-opacity": [{ "bg-opacity": [w] }],
                        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                        "bg-position": [{ bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", E] }],
                        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                        "bg-size": [{ bg: ["auto", "cover", "contain", M] }],
                        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, $] }],
                        "bg-color": [{ bg: [e] }],
                        "gradient-from-pos": [{ from: [m] }],
                        "gradient-via-pos": [{ via: [m] }],
                        "gradient-to-pos": [{ to: [m] }],
                        "gradient-from": [{ from: [b] }],
                        "gradient-via": [{ via: [b] }],
                        "gradient-to": [{ to: [b] }],
                        rounded: [{ rounded: [s] }],
                        "rounded-s": [{ "rounded-s": [s] }],
                        "rounded-e": [{ "rounded-e": [s] }],
                        "rounded-t": [{ "rounded-t": [s] }],
                        "rounded-r": [{ "rounded-r": [s] }],
                        "rounded-b": [{ "rounded-b": [s] }],
                        "rounded-l": [{ "rounded-l": [s] }],
                        "rounded-ss": [{ "rounded-ss": [s] }],
                        "rounded-se": [{ "rounded-se": [s] }],
                        "rounded-ee": [{ "rounded-ee": [s] }],
                        "rounded-es": [{ "rounded-es": [s] }],
                        "rounded-tl": [{ "rounded-tl": [s] }],
                        "rounded-tr": [{ "rounded-tr": [s] }],
                        "rounded-br": [{ "rounded-br": [s] }],
                        "rounded-bl": [{ "rounded-bl": [s] }],
                        "border-w": [{ border: [i] }],
                        "border-w-x": [{ "border-x": [i] }],
                        "border-w-y": [{ "border-y": [i] }],
                        "border-w-s": [{ "border-s": [i] }],
                        "border-w-e": [{ "border-e": [i] }],
                        "border-w-t": [{ "border-t": [i] }],
                        "border-w-r": [{ "border-r": [i] }],
                        "border-w-b": [{ "border-b": [i] }],
                        "border-w-l": [{ "border-l": [i] }],
                        "border-opacity": [{ "border-opacity": [w] }],
                        "border-style": [{ border: ["solid", "dashed", "dotted", "double", "none", "hidden"] }],
                        "divide-x": [{ "divide-x": [i] }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{ "divide-y": [i] }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{ "divide-opacity": [w] }],
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
                        "outline-offset": [{ "outline-offset": [z, P] }],
                        "outline-w": [{ outline: [z, C] }],
                        "outline-color": [{ outline: [e] }],
                        "ring-w": [{ ring: A() }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{ ring: [e] }],
                        "ring-opacity": [{ "ring-opacity": [w] }],
                        "ring-offset-w": [{ "ring-offset": [z, C] }],
                        "ring-offset-color": [{ "ring-offset": [e] }],
                        shadow: [{ shadow: ["", "inner", "none", S, O] }],
                        "shadow-color": [{ shadow: [R] }],
                        opacity: [{ opacity: [w] }],
                        "mix-blend": [{ "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"] }],
                        "bg-blend": [{ "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"] }],
                        filter: [{ filter: ["", "none"] }],
                        blur: [{ blur: [o] }],
                        brightness: [{ brightness: [t] }],
                        contrast: [{ contrast: [a] }],
                        "drop-shadow": [{ "drop-shadow": ["", "none", S, P] }],
                        grayscale: [{ grayscale: [c] }],
                        "hue-rotate": [{ "hue-rotate": [d] }],
                        invert: [{ invert: [u] }],
                        saturate: [{ saturate: [x] }],
                        sepia: [{ sepia: [k] }],
                        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                        "backdrop-blur": [{ "backdrop-blur": [o] }],
                        "backdrop-brightness": [{ "backdrop-brightness": [t] }],
                        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
                        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
                        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
                        "backdrop-invert": [{ "backdrop-invert": [u] }],
                        "backdrop-opacity": [{ "backdrop-opacity": [w] }],
                        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
                        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
                        "border-collapse": [{ border: ["collapse", "separate"] }],
                        "border-spacing": [{ "border-spacing": [l] }],
                        "border-spacing-x": [{ "border-spacing-x": [l] }],
                        "border-spacing-y": [{ "border-spacing-y": [l] }],
                        "table-layout": [{ table: ["auto", "fixed"] }],
                        caption: [{ caption: ["top", "bottom"] }],
                        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P] }],
                        duration: [{ duration: F() }],
                        ease: [{ ease: ["linear", "in", "out", "in-out", P] }],
                        delay: [{ delay: F() }],
                        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", P] }],
                        transform: [{ transform: ["", "gpu", "none"] }],
                        scale: [{ scale: [y] }],
                        "scale-x": [{ "scale-x": [y] }],
                        "scale-y": [{ "scale-y": [y] }],
                        rotate: [{ rotate: [N, P] }],
                        "translate-x": [{ "translate-x": [W] }],
                        "translate-y": [{ "translate-y": [W] }],
                        "skew-x": [{ "skew-x": [_] }],
                        "skew-y": [{ "skew-y": [_] }],
                        "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P] }],
                        accent: [{ accent: ["auto", e] }],
                        appearance: [{ appearance: ["none", "auto"] }],
                        cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P] }],
                        "caret-color": [{ caret: [e] }],
                        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                        resize: [{ resize: ["none", "y", "x", ""] }],
                        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                        "scroll-m": [{ "scroll-m": q() }],
                        "scroll-mx": [{ "scroll-mx": q() }],
                        "scroll-my": [{ "scroll-my": q() }],
                        "scroll-ms": [{ "scroll-ms": q() }],
                        "scroll-me": [{ "scroll-me": q() }],
                        "scroll-mt": [{ "scroll-mt": q() }],
                        "scroll-mr": [{ "scroll-mr": q() }],
                        "scroll-mb": [{ "scroll-mb": q() }],
                        "scroll-ml": [{ "scroll-ml": q() }],
                        "scroll-p": [{ "scroll-p": q() }],
                        "scroll-px": [{ "scroll-px": q() }],
                        "scroll-py": [{ "scroll-py": q() }],
                        "scroll-ps": [{ "scroll-ps": q() }],
                        "scroll-pe": [{ "scroll-pe": q() }],
                        "scroll-pt": [{ "scroll-pt": q() }],
                        "scroll-pr": [{ "scroll-pr": q() }],
                        "scroll-pb": [{ "scroll-pb": q() }],
                        "scroll-pl": [{ "scroll-pl": q() }],
                        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                        "snap-stop": [{ snap: ["normal", "always"] }],
                        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                        touch: [{ touch: ["auto", "none", "manipulation"] }],
                        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{ select: ["none", "text", "all", "auto"] }],
                        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", P] }],
                        fill: [{ fill: [e, "none"] }],
                        "stroke-w": [{ stroke: [z, C, G] }],
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
            const D = b(X);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-229eafb5.7e9c567a.js.map
