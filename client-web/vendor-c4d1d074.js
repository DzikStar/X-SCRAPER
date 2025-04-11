window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-c4d1d074"],
        {
            466999: (e, n, o) => {
                o.d(n, { Z: () => m });
                var t = o(133028),
                    r = o(231461),
                    l = o(202784),
                    a = o(890601),
                    s = o(730464),
                    d = o(389641),
                    i = o(317709),
                    p = o(752778),
                    u = o(805719),
                    S = o(111453),
                    c = o(297689),
                    R = o(494210),
                    h = o(981040),
                    f = o(180612),
                    v = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"],
                    C = Object.assign({}, s.lG, s.LO, s._T, s.YB, s.Uy, s.hJ, s.E5, s.vr, { href: !0, lang: !0, pointerEvents: !0 }),
                    w = l.forwardRef((e, n) => {
                        var o = e.hrefAttrs,
                            t = e.numberOfLines,
                            s = e.onClick,
                            c = e.onLayout,
                            w = e.onPress,
                            b = e.onMoveShouldSetResponder,
                            m = e.onMoveShouldSetResponderCapture,
                            x = e.onResponderEnd,
                            Z = e.onResponderGrant,
                            y = e.onResponderMove,
                            T = e.onResponderReject,
                            E = e.onResponderRelease,
                            A = e.onResponderStart,
                            L = e.onResponderTerminate,
                            _ = e.onResponderTerminationRequest,
                            k = e.onScrollShouldSetResponder,
                            M = e.onScrollShouldSetResponderCapture,
                            O = e.onSelectionChangeShouldSetResponder,
                            P = e.onSelectionChangeShouldSetResponderCapture,
                            D = e.onStartShouldSetResponder,
                            W = e.onStartShouldSetResponderCapture,
                            j = e.selectable,
                            I = (0, r.Z)(e, v);
                        null != j && (0, f.O)("selectable", "selectable prop is deprecated. Use styles.userSelect.");
                        var G = l.useContext(R.Z),
                            N = l.useRef(null),
                            q = (0, h.PE)().direction;
                        (0, i.Z)(N, c), (0, S.Z)(N, { onMoveShouldSetResponder: b, onMoveShouldSetResponderCapture: m, onResponderEnd: x, onResponderGrant: Z, onResponderMove: y, onResponderReject: T, onResponderRelease: E, onResponderStart: A, onResponderTerminate: L, onResponderTerminationRequest: _, onScrollShouldSetResponder: k, onScrollShouldSetResponderCapture: M, onSelectionChangeShouldSetResponder: O, onSelectionChangeShouldSetResponderCapture: P, onStartShouldSetResponder: D, onStartShouldSetResponderCapture: W });
                        var B = l.useCallback(
                                (e) => {
                                    null != s ? s(e) : null != w && (e.stopPropagation(), w(e));
                                },
                                [s, w],
                            ),
                            $ = G ? "span" : "div",
                            Y = null != e.lang ? (0, h.w1)(e.lang) : null,
                            H = e.dir || Y,
                            U = H || q,
                            z = ((e) => (0, d.Z)(e, C))(I);
                        if (((z.dir = H), G || (z.dir = null != H ? H : "auto"), (s || w) && (z.onClick = B), (z.style = [null != t && t > 1 && { WebkitLineClamp: t }, !0 === G ? g.textHasAncestor$raw : g.text$raw, 1 === t && g.textOneLine, null != t && t > 1 && g.textMultiLine, e.style, !0 === j && g.selectable, !1 === j && g.notSelectable, w && g.pressable]), null != e.href && (($ = "a"), null != o))) {
                            var J = o.download,
                                V = o.rel,
                                X = o.target;
                            null != J && (z.download = J), null != V && (z.rel = V), "string" == typeof X && (z.target = "_" !== X.charAt(0) ? "_" + X : X);
                        }
                        var F = (0, u.Z)(z),
                            K = (0, p.Z)(N, F, n);
                        z.ref = K;
                        var Q = (0, a.Z)($, z, { writingDirection: U });
                        return G ? Q : l.createElement(R.Z.Provider, { value: !0 }, Q);
                    });
                w.displayName = "Text";
                var b = { backgroundColor: "transparent", border: "0 solid black", boxSizing: "border-box", color: "black", display: "inline", font: "14px System", listStyle: "none", margin: 0, padding: 0, position: "relative", textAlign: "start", textDecoration: "none", whiteSpace: "pre-wrap", wordWrap: "break-word" },
                    g = c.Z.create({ text$raw: b, textHasAncestor$raw: (0, t.Z)((0, t.Z)({}, b), {}, { color: "inherit", font: "inherit", textAlign: "inherit", whiteSpace: "inherit" }), textOneLine: { maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", wordWrap: "normal" }, textMultiLine: { display: "-webkit-box", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", WebkitBoxOrient: "vertical" }, notSelectable: { userSelect: "none" }, selectable: { userSelect: "text" }, pressable: { cursor: "pointer" } });
                const m = w;
            },
            386308: (e, n, o) => {
                o.d(n, { Z: () => d });
                var t = o(747351),
                    r = o(908757),
                    l = (e) => {
                        var n = e.offsetHeight,
                            o = e.offsetWidth,
                            t = e.offsetLeft,
                            r = e.offsetTop;
                        for (e = e.offsetParent; e && 1 === e.nodeType; ) (t += e.offsetLeft + e.clientLeft - e.scrollLeft), (r += e.offsetTop + e.clientTop - e.scrollTop), (e = e.offsetParent);
                        return { width: o, height: n, top: (r -= window.scrollY), left: (t -= window.scrollX) };
                    },
                    a = (e, n, o) => {
                        var t = n || (e && e.parentNode);
                        e &&
                            t &&
                            setTimeout(() => {
                                if (e.isConnected && t.isConnected) {
                                    var n = l(t),
                                        r = l(e),
                                        a = r.height,
                                        s = r.left,
                                        d = r.top,
                                        i = r.width,
                                        p = s - n.left,
                                        u = d - n.top;
                                    o(p, u, i, a, s, d);
                                }
                            }, 0);
                    },
                    s = { A: !0, BODY: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0 };
                const d = {
                    blur(e) {
                        try {
                            e.blur();
                        } catch (e) {}
                    },
                    focus(e) {
                        try {
                            var n = e.nodeName;
                            null == e.getAttribute("tabIndex") && !0 !== e.isContentEditable && null == s[n] && e.setAttribute("tabIndex", "-1"), e.focus();
                        } catch (e) {}
                    },
                    measure(e, n) {
                        a(e, null, n);
                    },
                    measureInWindow(e, n) {
                        e &&
                            setTimeout(() => {
                                var o = (0, t.Z)(e),
                                    r = o.height,
                                    l = o.left,
                                    a = o.top,
                                    s = o.width;
                                n(l, a, s, r);
                            }, 0);
                    },
                    measureLayout(e, n, o, t) {
                        a(e, n, t);
                    },
                    updateView(e, n) {
                        for (var o in n)
                            if (Object.prototype.hasOwnProperty.call(n, o)) {
                                var t = n[o];
                                switch (o) {
                                    case "style":
                                        (0, r.Z)(e, t);
                                        break;
                                    case "class":
                                    case "className":
                                        e.setAttribute("class", t);
                                        break;
                                    case "text":
                                    case "value":
                                        e.value = t;
                                        break;
                                    default:
                                        e.setAttribute(o, t);
                                }
                            }
                    },
                    configureNextLayoutAnimation(e, n) {
                        n();
                    },
                    setLayoutAnimationEnabledExperimental() {},
                };
            },
            325686: (e, n, o) => {
                o.d(n, { Z: () => w });
                var t = o(231461),
                    r = o(202784),
                    l = o(890601),
                    a = o(730464),
                    s = o(389641),
                    d = o(317709),
                    i = o(752778),
                    p = o(805719),
                    u = o(111453),
                    S = o(297689),
                    c = o(494210),
                    R = o(981040),
                    h = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"],
                    f = Object.assign({}, a.lG, a.LO, a._T, a.YB, a.Uy, a.hJ, a.E5, a.vr, { href: !0, lang: !0, onScroll: !0, onWheel: !0, pointerEvents: !0 }),
                    v = r.forwardRef((e, n) => {
                        var o = e.hrefAttrs,
                            a = e.onLayout,
                            S = e.onMoveShouldSetResponder,
                            v = e.onMoveShouldSetResponderCapture,
                            w = e.onResponderEnd,
                            b = e.onResponderGrant,
                            g = e.onResponderMove,
                            m = e.onResponderReject,
                            x = e.onResponderRelease,
                            Z = e.onResponderStart,
                            y = e.onResponderTerminate,
                            T = e.onResponderTerminationRequest,
                            E = e.onScrollShouldSetResponder,
                            A = e.onScrollShouldSetResponderCapture,
                            L = e.onSelectionChangeShouldSetResponder,
                            _ = e.onSelectionChangeShouldSetResponderCapture,
                            k = e.onStartShouldSetResponder,
                            M = e.onStartShouldSetResponderCapture,
                            O = (0, t.Z)(e, h);
                        var P = r.useContext(c.Z),
                            D = r.useRef(null),
                            W = (0, R.PE)().direction;
                        (0, d.Z)(D, a), (0, u.Z)(D, { onMoveShouldSetResponder: S, onMoveShouldSetResponderCapture: v, onResponderEnd: w, onResponderGrant: b, onResponderMove: g, onResponderReject: m, onResponderRelease: x, onResponderStart: Z, onResponderTerminate: y, onResponderTerminationRequest: T, onScrollShouldSetResponder: E, onScrollShouldSetResponderCapture: A, onSelectionChangeShouldSetResponder: L, onSelectionChangeShouldSetResponderCapture: _, onStartShouldSetResponder: k, onStartShouldSetResponderCapture: M });
                        var j = "div",
                            I = null != e.lang ? (0, R.w1)(e.lang) : null,
                            G = e.dir || I,
                            N = G || W,
                            q = ((e) => (0, s.Z)(e, f))(O);
                        if (((q.dir = G), (q.style = [C.view$raw, P && C.inline, e.style]), null != e.href && ((j = "a"), null != o))) {
                            var B = o.download,
                                $ = o.rel,
                                Y = o.target;
                            null != B && (q.download = B), null != $ && (q.rel = $), "string" == typeof Y && (q.target = "_" !== Y.charAt(0) ? "_" + Y : Y);
                        }
                        var H = (0, p.Z)(q),
                            U = (0, i.Z)(D, H, n);
                        return (q.ref = U), (0, l.Z)(j, q, { writingDirection: N });
                    });
                v.displayName = "View";
                var C = S.Z.create({ view$raw: { alignItems: "stretch", backgroundColor: "transparent", border: "0 solid black", boxSizing: "border-box", display: "flex", flexBasis: "auto", flexDirection: "column", flexShrink: 0, listStyle: "none", margin: 0, minHeight: 0, minWidth: 0, padding: 0, position: "relative", textDecoration: "none", zIndex: 0 }, inline: { display: "inline-flex" } });
                const w = v;
            },
            890601: (e, n, o) => {
                o.d(n, { Z: () => s });
                var t = o(364615),
                    r = o(645747),
                    l = o(202784),
                    a = o(981040);
                const s = (e, n, o) => {
                    var s;
                    e && e.constructor === String && (s = t.Z.propsToAccessibilityComponent(n));
                    var d = s || e,
                        i = (0, r.Z)(d, n, o),
                        p = l.createElement(d, i);
                    return i.dir ? l.createElement(a.Iw, { children: p, direction: i.dir, locale: i.lang }) : p;
                };
            },
            998091: (e, n, o) => {
                o.d(n, { Z: () => l });
                var t = o(437349),
                    r = o.n(t);
                const l = (e) => {
                    if (null == e) return e;
                    var n = r()(e);
                    return null != n ? (n = ((n << 24) | (n >>> 8)) >>> 0) : void 0;
                };
            },
            800525: (e, n, o) => {
                o.d(n, { ZB: () => s, ZP: () => p, hS: () => i, sY: () => d });
                var t = o(928316),
                    r = o(117029),
                    l = o(440770),
                    a = o(76250);
                function s(e, n) {
                    return (0, a.S)(n), (0, r.a)(n, e);
                }
                function d(e, n) {
                    (0, a.S)(n);
                    var o = (0, r.s)(n);
                    return o.render(e), o;
                }
                function i(e, n, o) {
                    return (
                        (0, a.S)(n),
                        (0, t.hydrate)(e, n, o),
                        {
                            unmount: function () {
                                return (0, l.Z)(n);
                            },
                        }
                    );
                }
                function p(e, n, o) {
                    return (
                        (0, a.S)(n),
                        (0, t.render)(e, n, o),
                        {
                            unmount: function () {
                                return (0, l.Z)(n);
                            },
                        }
                    );
                }
            },
            440770: (e, n, o) => {
                o.d(n, { Z: () => t });
                const t = o(928316).unmountComponentAtNode;
            },
            783427: (e, n, o) => {
                o.d(n, { Z: () => t });
                const t = o(981040).PE;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-c4d1d074.d21e962a.js.map
