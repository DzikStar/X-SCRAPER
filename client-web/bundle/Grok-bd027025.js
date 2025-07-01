"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bd027025"],
    {
        861589: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(731708);
            function l({ delay: e = 500, duration: t = 30, endElement: n, holdout: l = 0, style: s, text: o }) {
                const [i, c] = a.useState(""),
                    [u, p] = a.useState(""),
                    m = a.useRef(0);
                a.useEffect(() => {
                    let n,
                        a = u;
                    const r = (e) => {
                        i !== a && (i.startsWith(a) ? ((a = i.substring(0, e)), (n = setTimeout(() => r(e + 1), t))) : ((a = a.substring(0, Math.max(0, a.length - 2))), (n = setTimeout(() => r(e), t))), p(a));
                    };
                    return (n = setTimeout(() => r(1), e)), () => clearTimeout(n);
                }, [i, t, e]),
                    a.useEffect(() => {
                        const e = Math.max(0, m.current + l - Date.now()),
                            t = setTimeout(() => {
                                (m.current = Date.now()), c(o);
                            }, e);
                        return () => clearTimeout(t);
                    }, [o]);
                let d = u,
                    g = "";
                if (i === u) {
                    const e = u.split(" ");
                    e.length > 0 && ((g = e[e.length - 1]), (d = e.slice(void 0, -1).join(" ")));
                }
                return a.createElement(r.ZP, { style: s }, a.createElement("span", null, a.createElement("span", null, d), g ? a.createElement("span", { style: { whiteSpace: "nowrap" } }, `${d ? " " : ""}${g}`, " ", n) : void 0));
            }
        },
        136202: (e, t, n) => {
            n.d(t, { ZP: () => Z, N$: () => w });
            n(136728);
            var a = n(202784),
                r = n(325686),
                l = n(731708),
                s = n(530732),
                o = n(392237),
                i = n(111677),
                c = n.n(i),
                u = n(408814),
                p = n(487552),
                m = n(246851),
                d = n(397159),
                g = n(970205),
                y = n(861589);
            const f = c().ib1c5475,
                h = c().a15d62db,
                E = (e, t) =>
                    a.useMemo(() => {
                        if (!e || !t) return "";
                        const n = Math.floor((t - e) / 1e3);
                        return n < 60 ? h({ seconds: n }) : f({ minutes: Math.floor(n / 60), seconds: n % 60 });
                    }, [e, t]),
                C = c().e6d51c62,
                w = c().c3f04d9c,
                b = c().a4d9dbfa;
            function Z({ completedTimestamp: e, expanded: t, fromTimestamp: n, hasCardAttachments: s, isCompactLayout: o, isImageResponse: i, isLoading: c, messageStepAccumulator: f, onClick: h, onComplete: Z, reasoningLayout: x, searchQuery: S, shownText: k, shownTrace: T, style: P, useTypingStatus: I }) {
                const M = "UNIFIED" === x,
                    D = (0, m.Z)(f?.state),
                    R = "COMPLETED" === f?.state,
                    L = "ABORTED" === f?.state,
                    O = f?.isPastSummary,
                    A = E(n ?? 0, e ?? 0),
                    U = k && k.length > 0,
                    z = a.useMemo(() => (M ? !((!f && !c) || i) && !(f && !R && !L && c && !I) : c && !i && !U && !f && !T && !s), [M, c, i, U, f, T, s, R, L]);
                a.useEffect(() => {
                    "COMPLETED" !== D && R && Z?.();
                }, [D, R, Z]);
                const B = a.useMemo(() => {
                        const e = [],
                            t = f?.steps || [];
                        for (const n of t) {
                            n.header && e.push(n.header);
                            const t = n.subSteps || [];
                            for (const n of t) n.messageTag === d.iS.SUMMARY ? e.push(...(n.statusHeaders || [])) : n.messageTag === d.iS.DECISION && e.push(n.actionSummary || "");
                        }
                        return e;
                    }, [f?.debugMessageTagCount]),
                    V = B[B.length - 1],
                    F = a.useMemo(() => {
                        if (M) {
                            if (I) {
                                if (t) return w;
                                if (V) return V;
                            }
                            return "";
                        }
                        return S ? C : "";
                    }, [M, S, t, V, I]);
                return a.createElement(
                    r.Z,
                    { style: [v.statusContainer, z && { opacity: 1, pointerEvents: "auto" }] },
                    M && (R || L) ? a.createElement(u.default, { style: v.thinkIcon }) : a.createElement(g.Z, { loop: z, style: v.loadingIcon }),
                    (() => {
                        if (M) {
                            const e = f && f.steps.length > 0;
                            if (R || L) return a.createElement(_, { completed: !0, expanded: t, onClick: h, showExpand: e }, a.createElement(r.Z, { style: v.statusLabelContainer }, a.createElement(l.ZP, { style: v.statusLabel }, O || L ? b : A)), e && a.createElement(p.default, { style: [v.chevron, R || L ? v.completedChevron : void 0, t ? v.expandedChevron : void 0] }));
                            if (I) return a.createElement(_, { completed: !1, expanded: t, onClick: h, showExpand: e }, a.createElement(y.Z, { duration: 5, endElement: e ? a.createElement(p.default, { style: [v.chevron, v.typingAnimationChevron, t ? v.expandedChevron : void 0] }) : null, holdout: 45 * F.length, style: v.typingAnimation, text: F }));
                        }
                        return a.createElement(r.Z, { style: v.statusLabelContainer }, a.createElement(y.Z, { duration: 15, holdout: 0, style: v.typingAnimation, text: F }));
                    })(),
                );
            }
            function _({ children: e, completed: t, expanded: n, onClick: r, showExpand: l }) {
                return a.createElement(
                    s.Z,
                    {
                        onClick: () => {
                            l && r();
                        },
                        style: v.expandableStatusContainer,
                        withoutInteractiveStyles: !0,
                    },
                    e,
                );
            }
            const v = o.default.create((e) => ({ statusContainer: { display: "flex", flexDirection: "row", color: "light" === e.paletteName ? e.colors.gray700 : e.colors.gray900, opacity: 0, pointerEvents: "none", transition: "opacity 0.2s ease", marginHorizontal: e.spaces.space12, gap: e.spaces.space4, position: "absolute", top: 0, start: 0 }, loadingIcon: { position: "relative", top: 1 }, thinkIcon: { color: "inherit" }, statusLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.2s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusLabel: { color: "inherit" }, expandableStatusContainer: { display: "flex", flexDirection: "row", marginStart: e.spaces.space4, flex: 1 }, chevron: { transition: "all 0.2s ease", transform: "rotate(0deg)", color: "inherit", width: e.spaces.space16, height: e.spaces.space16, animationDuration: "0.2s", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, completedChevron: { color: "inherit", top: e.spaces.space2, marginStart: e.spaces.space4 }, expandedChevron: { transform: "rotate(-180deg)" }, typingAnimation: { color: "inherit", flex: 1, display: "flex", paddingTop: 3 }, typingAnimationChevron: { top: -1 } }));
        },
        159210: (e, t, n) => {
            n.d(t, { Z: () => G });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                r = n(137937),
                l = n(325686),
                s = n(731708),
                o = n(154003),
                i = n(992942),
                c = n(530732),
                u = n(815858),
                p = n(818199),
                m = n(392237),
                d = n(111677),
                g = n.n(d),
                y = n(956272),
                f = n(14284),
                h = n(630715),
                E = n(58399),
                C = n(97301),
                w = n(323265),
                b = n(301758),
                Z = n(246851),
                _ = n(725516),
                v = n(125363),
                x = n(836255),
                S = n(970205),
                k = n(988290),
                T = n(673787),
                P = n(767075),
                I = n(39831),
                M = n(136202),
                D = n(187268),
                R = n(916559),
                L = n(520595),
                O = n(809311),
                A = n(744610);
            const U = n(297689).Z.create({ carousel: { overflow: "hidden", position: "relative" }, carouselItem: { position: "absolute", top: 0, start: 0, end: 0, justifyContent: "center", alignItems: "center" } }),
                z = ({ content: e, easing: t, itemHeight: n, scrollDuration: s = 500 }) => {
                    const o = a.useRef(new A.Z.Value(0)).current,
                        i = a.useRef(new A.Z.Value(1)).current,
                        c = a.useRef(new A.Z.Value(0)).current,
                        u = a.useRef(new A.Z.Value(1)).current,
                        [p, m] = a.useState("A"),
                        [d, g] = a.useState(e),
                        [y, f] = a.useState(null),
                        [h, E] = a.useState(!1),
                        C = a.useRef(e);
                    return (
                        a.useEffect(() => {
                            if (e !== C.current && !h) {
                                E(!0);
                                const a = "A" === p ? "B" : "A";
                                "B" === a ? f(e) : g(e);
                                const l = "A" === a ? o : c,
                                    d = "A" === a ? i : u;
                                l.setValue(n), d.setValue(1);
                                const y = "A" === p ? o : c,
                                    h = "A" === p ? i : u;
                                A.Z.parallel([A.Z.timing(y, { toValue: -n, duration: s, useNativeDriver: !1, easing: t }), A.Z.timing(h, { toValue: 0, duration: Math.floor(s / 2), useNativeDriver: !1, easing: r.Z.linear }), A.Z.timing(l, { toValue: 0, duration: s, useNativeDriver: !1, easing: t })]).start(() => {
                                    E(!1), m(a), (C.current = e);
                                });
                            }
                        }, [e, s, h, p]),
                        a.createElement(l.Z, { style: { ...U.carousel, height: n } }, a.createElement(A.Z.View, { style: [U.carouselItem, { height: n, transform: [{ translateY: o }], opacity: i }] }, d), a.createElement(A.Z.View, { style: [U.carouselItem, { height: n, transform: [{ translateY: c }], opacity: u }] }, y))
                    );
                };
            var B = n(861589);
            const V = m.default.create((e) => ({ container: { flex: 1, position: "relative", height: 25 }, content: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, opacity: 1, transition: "opacity 0.2s ease" }, hoveredHeaderContainer: { opacity: 0.8 }, typingAnimation: { flex: 1, display: "flex", fontWeight: e.fontWeights.medium, marginStart: e.spaces.space28, paddingTop: 1 } })),
                F = function ({ header: e, hovered: t, icon: n, transitionDurationMS: r }) {
                    const s = a.useRef({ header: e, icon: n, hovered: t }),
                        o = a.useRef(!1),
                        [i, c] = a.useState("a"),
                        u = a.useRef(new A.Z.Value(1)).current,
                        p = a.useRef(new A.Z.Value(0)).current,
                        m = a.useCallback(() => a.createElement(l.Z, { style: [V.headerContainer, t && V.hoveredHeaderContainer] }, n), [t, n]),
                        [d, g] = a.useState(m),
                        [y, f] = a.useState(null);
                    return (
                        a.useEffect(() => {
                            if (!o.current) return (o.current = !0), void (s.current = { header: e, icon: n, hovered: t });
                            const a = e !== s.current.header,
                                l = t !== s.current.hovered;
                            if (((s.current = { header: e, icon: n, hovered: t }), !a && !l)) return;
                            const d = m();
                            if (!a && l) return void ("a" === i ? g(d) : f(d));
                            let y, h, E;
                            const C = "a" === i ? "b" : "a";
                            "a" === i ? ((y = u), (h = p), (E = f)) : ((y = p), (h = u), (E = g)),
                                E(d),
                                c(C),
                                h.setValue(0),
                                y.setValue(1),
                                A.Z.parallel([A.Z.timing(y, { toValue: 0, duration: r, useNativeDriver: !0 }), A.Z.timing(h, { toValue: 1, duration: r, useNativeDriver: !0 })]).start(() => {
                                    "b" === C ? g(null) : f(null);
                                });
                        }, [i, m, e, t, n, r]),
                        a.createElement(l.Z, { style: V.container }, d && a.createElement(A.Z.View, { style: [V.content, { opacity: u }] }, d), y && a.createElement(A.Z.View, { style: [V.content, { opacity: p }] }, y), a.createElement(B.Z, { duration: 10, style: V.typingAnimation, text: e }))
                    );
                },
                H = g().h26fa43f,
                $ = !1,
                W = 40,
                q = 1500,
                N = 500;
            function G({ completedTimestamp: e, fromTimestamp: t, isLoading: n, isStatusExpanded: p, messageStepAccumulator: m, onComplete: d }) {
                const { isCompactLayout: g, isGrokDrawer: w } = (0, k.ZP)(),
                    b = g || w,
                    v = (0, Z.Z)(m?.state),
                    x = (0, _.z)(),
                    O = a.useRef(null),
                    [A, U] = a.useState(!1),
                    [B, V] = a.useState(!1),
                    [G, Q] = a.useState(!1),
                    J = (0, Z.Z)(G),
                    [ee, te] = a.useState(!1),
                    [ne, ae] = a.useState(null),
                    [re, le] = a.useState(null),
                    [se, oe] = a.useState(null),
                    [ie, ce] = a.useState({}),
                    ue = a.useRef(0),
                    pe = a.useRef(null),
                    { accumulatedTrace: me, isPastSummary: de, state: ge } = m,
                    ye = "COMPLETED" === ge,
                    fe = "ABORTED" === ge,
                    he = ye || fe,
                    Ee = he && p,
                    [Ce, we] = a.useState(0);
                a.useEffect(() => {
                    (("COMPLETED" !== v && ye) || ("ABORTED" !== v && fe)) && (te(!1), d?.());
                }, [v, ye, fe, d]),
                    a.useEffect(() => {
                        ye && (p && !ee ? te(!0) : !p && ee && te(!1));
                    }, [p, ee, ye]);
                const be = a.useRef(null);
                a.useEffect(() => {
                    const e = () => {
                        O.current && !A && O.current.scrollToEnd({ animated: !0 });
                    };
                    return de || (be.current = window.setInterval(e, 1e3)), () => window.clearInterval(be.current);
                }, [A, de]),
                    a.useEffect(() => {
                        ye && !de && window.clearInterval(be.current);
                    }, [ye, A, de]);
                const Ze = a.useCallback((e) => a.createElement(l.Z, { style: [Y.collapsedContent, { height: W }] }, a.createElement(s.ZP, { numberOfLines: 2, style: [Y.summary, b && Y.summaryCompact] }, e)), [b]),
                    _e = a.useCallback(
                        (e) => {
                            if (!e) return null;
                            let t = null;
                            const n = { ...e.args };
                            if ((delete n.query, e.name === D.ky.WebSearch || e.name === D.ky.WebSearchWithSnippets)) e.args.query && (t = a.createElement(a.Fragment, null, a.createElement(l.Z, { style: Y.pill }, a.createElement(y.default, { style: Y.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, e.args.query))));
                            else if (e.name === D.ky.XSearch || e.name === D.ky.XKeywordSearch || e.name === D.ky.XSemanticSearch || e.name === D.ky.XUserSearch || e.name === D.ky.GetXUserTimeline) {
                                const r = Object.entries(n);
                                (e.args.query || r.length > 0) &&
                                    (t = a.createElement(
                                        a.Fragment,
                                        null,
                                        e.args.query && a.createElement(l.Z, { style: Y.pill }, a.createElement(y.default, { style: Y.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, e.args.query)),
                                        r.length > 0 &&
                                            !b &&
                                            a.createElement(
                                                l.Z,
                                                { style: Y.argsPillsContainer },
                                                r.map(([e, t]) => a.createElement(l.Z, { key: e, style: Y.pill }, a.createElement(s.ZP, { style: Y.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, t))),
                                            ),
                                    ));
                            } else if (e.name === D.ky.BrowsePage) {
                                let n = e.args.url || "";
                                try {
                                    n = new URL(n).hostname.replace("www.", "");
                                } catch (e) {}
                                (e.args.query || n) && (t = a.createElement(a.Fragment, null, e.args.query && a.createElement(l.Z, { style: Y.pill }, a.createElement(y.default, { style: Y.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, e.args.query)), n && !b && a.createElement(l.Z, { style: Y.argsPillsContainer }, a.createElement(l.Z, { style: Y.pill }, a.createElement(f.default, { style: Y.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, n)))));
                            } else if (e.name === D.ky.CodeExecution) {
                                const n = { ...e.args };
                                delete n.language;
                                const r = Object.entries(n);
                                (e.args.language || r.length > 0) &&
                                    (t = a.createElement(
                                        a.Fragment,
                                        null,
                                        r.length > 0 &&
                                            !b &&
                                            a.createElement(
                                                l.Z,
                                                { style: Y.argsPillsContainer },
                                                r.map(([e, t]) => a.createElement(l.Z, { key: e, style: Y.pill }, a.createElement(s.ZP, { style: Y.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, t))),
                                            ),
                                    ));
                            }
                            return t ? a.createElement(l.Z, { style: [Y.collapsedContent, { height: W }] }, t) : null;
                        },
                        [b],
                    ),
                    ve = a.useCallback(
                        (e, t) => {
                            if (!t || !e) return null;
                            let n = null;
                            const r = e.name;
                            if ((r === D.ky.WebSearch || r === D.ky.WebSearchWithSnippets) && t.webResults && t.webResults.length > 0) {
                                const e = t.webResults,
                                    r = b ? 2 : 4,
                                    c = e.slice(0, r),
                                    u = e.slice(r),
                                    p = 3;
                                n = a.createElement(
                                    a.Fragment,
                                    null,
                                    a.createElement(
                                        l.Z,
                                        { style: Y.argsPillsContainer },
                                        c.map((e) => a.createElement(j, { key: e.url, webResult: e })),
                                        u.length > 0 &&
                                            a.createElement(
                                                o.ZP,
                                                {
                                                    backgroundColor: "gray50",
                                                    borderColor: "gray200",
                                                    onPress: () => {
                                                        le(e);
                                                    },
                                                    size: "small",
                                                    style: [Y.pill, Y.pillButton],
                                                },
                                                a.createElement(
                                                    l.Z,
                                                    { style: Y.pillButtonContent },
                                                    a.createElement(
                                                        l.Z,
                                                        { style: Y.stackedPillIcons },
                                                        u.slice(0, p).map((e) => (e.favicon ? a.createElement(i.Z, { key: e.url, source: { uri: e.favicon }, style: [Y.pillIcon, Y.stackedPillIcon] }) : a.createElement(h.default, { key: e.url, style: [Y.pillIcon, Y.stackedPillIcon] }))),
                                                    ),
                                                    a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText, weight: "normal" }, H({ count: e.length - c.length })),
                                                ),
                                            ),
                                    ),
                                );
                            } else if ((r === D.ky.XSearch || r === D.ky.XKeywordSearch || r === D.ky.XSemanticSearch) && t.xPostIds && t.xPostIds.length > 0) {
                                const e = t.xPostIds,
                                    r = b ? 2 : 4,
                                    i = e.slice(0, r),
                                    c = e.slice(r),
                                    u = 3;
                                n = a.createElement(
                                    a.Fragment,
                                    null,
                                    a.createElement(
                                        l.Z,
                                        { style: Y.argsPillsContainer },
                                        i.map((e) => a.createElement(K, { key: `x-post-${e}`, xPostId: e })),
                                        c.length > 0 &&
                                            a.createElement(
                                                o.ZP,
                                                {
                                                    backgroundColor: "gray50",
                                                    borderColor: "gray200",
                                                    onPress: () => {
                                                        oe(e);
                                                    },
                                                    size: "small",
                                                    style: [Y.pill, Y.pillButton],
                                                },
                                                a.createElement(
                                                    l.Z,
                                                    { style: Y.pillButtonContent },
                                                    a.createElement(
                                                        l.Z,
                                                        { style: Y.stackedPillIcons },
                                                        c.slice(0, u).map((e) => a.createElement(X, { key: `x-post-${e}`, style: Y.stackedPillIcon, xPostId: e })),
                                                    ),
                                                    a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText, weight: "normal" }, H({ count: e.length - i.length })),
                                                ),
                                            ),
                                    ),
                                );
                            } else r === D.ky.BrowsePage && (n = a.createElement(a.Fragment, null, e.args.url && a.createElement(l.Z, { style: Y.pill }, a.createElement(f.default, { style: Y.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText }, new URL(e.args.url).hostname.replace("www.", "")))));
                            return n ? a.createElement(l.Z, { style: [Y.collapsedContent, { height: W }] }, n) : null;
                        },
                        [b],
                    ),
                    xe = a.useMemo(() => {
                        const e = [],
                            t = m?.steps || [];
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n].subSteps || [];
                            for (let t = 0; t < r.length; t++) {
                                const s = r[t].orderedContentToPreview || [];
                                for (let r = 0; r < s.length; r++) {
                                    const o = s[r];
                                    if ("TOOL_USAGE" === o.type) {
                                        const s = _e(o.toolUsageCard);
                                        if (s) {
                                            const i = `${n}-${t}-${r}`;
                                            if ((e.push({ id: i, header: o.header, icon: a.createElement(l.Z, { style: Y.iconContainer }, (0, D.w$)(o.toolUsageCard?.name || "")), previewContent: s, type: "TOOL_USAGE" }), !ie[i])) return e;
                                        }
                                    } else if ("TOOL_USAGE_RESULT" === o.type) {
                                        const s = o.toolUsageCard,
                                            i = o.toolUsageCardResult,
                                            c = ve(s, i);
                                        if (c) {
                                            const s = `${n}-${t}-${r}`;
                                            if ((e.push({ id: s, header: o.header, icon: a.createElement(l.Z, { style: Y.iconContainer }, (0, D.w$)(o.toolUsageCard?.name || "")), previewContent: c, type: "TOOL_USAGE_RESULT" }), !ie[s])) return e;
                                        }
                                    } else if ("SUMMARY" === o.type) {
                                        const s = Ze(o.summary || "");
                                        s && e.push({ id: `${n}-${t}-${r}`, header: o.header, icon: a.createElement(l.Z, { style: Y.iconContainer }, a.createElement(S.Z, null)), previewContent: s, type: "SUMMARY" });
                                    }
                                }
                            }
                        }
                        return e;
                    }, [m?.debugMessageTagCount]),
                    Se = a.useMemo(() => {
                        const e = { id: "empty-id", header: M.N$, icon: a.createElement(S.Z, null), previewContent: null, type: "SUMMARY" };
                        if (xe.length <= 0 || G) return e;
                        const t = xe[xe.length - 1];
                        return { id: t.id, header: t.header, icon: t.icon, previewContent: t.previewContent, type: t.type };
                    }, [xe, G]),
                    ke = a.useMemo(() => !!ne && "empty-id" !== ne.id, [ne]);
                a.useEffect(() => {
                    if (!ee) return;
                    if (!ne) return void ae({ id: Se.id, header: Se.header, icon: Se.icon, previewContent: Se.previewContent, type: Se.type });
                    if (J !== G) return ae({ id: Se.id, header: Se.header, icon: Se.icon, previewContent: Se.previewContent, type: Se.type }), void (pe.current && clearTimeout(pe.current));
                    const e = Math.max(0, ue.current + q - Date.now());
                    return (
                        (pe.current = setTimeout(() => {
                            (ue.current = Date.now()), ne?.id !== Se.id && ae({ id: Se.id, header: Se.header, icon: Se.icon, previewContent: Se.previewContent, type: Se.type });
                        }, e)),
                        () => clearTimeout(pe.current)
                    );
                }, [Se, ee, ne, G, J]),
                    a.useEffect(() => {
                        !ne || ("TOOL_USAGE" !== ne.type && "TOOL_USAGE_RESULT" !== ne.type) || ce((e) => ({ ...e, [ne.id]: !0 }));
                    }, [ne]),
                    a.useEffect(() => {
                        ye || !n || ee || te(!0);
                    }, [n, ee, ye]);
                const Te = a.useCallback(
                        () =>
                            a.createElement(
                                c.Z,
                                {
                                    onPress: () => {
                                        Q(!G);
                                    },
                                    style: [Y.headerContainer, ke && Y.headerContainerWithContent],
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(a.Fragment, null, a.createElement(F, { header: ne?.header || "", hovered: e, icon: ne?.icon, transitionDurationMS: N }), a.createElement(E.default, { style: [Y.chevronIcon, G && Y.openChevronIcon] })),
                            ),
                        [ne, G, Q, ke],
                    ),
                    Pe = a.useCallback(() => a.createElement(u.Z, { childrenOuterStyle: Y.collapsedContentContainer, show: !G && ke, type: "slide" }, a.createElement(z, { content: ne?.previewContent, easing: r.Z.bezier(0.25, 0.46, 0.45, 0.94), itemHeight: W, scrollDuration: N })), [G, ne, ke]),
                    Ie = a.useCallback(
                        () =>
                            a.createElement(
                                u.Z,
                                { childrenOuterStyle: { ...Y.messageStepsContentPanelContainer, ...(w ? Y.messageStepsDrawerExpandedContainer : g ? Y.messageStepsMobileExpandedContainer : {}) }, show: Ee || G, type: "slide" },
                                a.createElement(T.Z, {
                                    isLoading: n,
                                    messageStepAccumulator: m,
                                    onCancelAutoScroll: () => {
                                        U(!0);
                                    },
                                    onRestartAutoScroll: () => {
                                        U(!1);
                                    },
                                    onShowTrace: () => V(!0),
                                    scrollViewRef: O,
                                }),
                            ),
                        [n, m, w, g, Ee, G],
                    );
                a.useCallback(
                    () =>
                        a.createElement(
                            l.Z,
                            { style: Y.debugContainer },
                            a.createElement(o.ZP, {
                                disabled: Ce <= 0,
                                icon: a.createElement(C.default, null),
                                onPress: () => {
                                    if (Ce > 0) {
                                        const e = Ce - 1;
                                        we(e), ae({ id: xe[e].id, header: xe[e].header, icon: xe[e].icon, previewContent: xe[e].previewContent, type: xe[e].type });
                                    }
                                },
                                size: "small",
                                style: Y.debugButton,
                            }),
                            a.createElement(o.ZP, {
                                disabled: Ce >= xe.length - 1,
                                icon: a.createElement(E.default, null),
                                onPress: () => {
                                    if (Ce < xe.length - 1) {
                                        const e = Ce + 1;
                                        we(e), ae({ id: xe[e].id, header: xe[e].header, icon: xe[e].icon, previewContent: xe[e].previewContent, type: xe[e].type });
                                    }
                                },
                                size: "small",
                                style: Y.debugButton,
                            }),
                        ),
                    [xe, Ce],
                );
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        u.Z,
                        { childrenOuterStyle: [Y.container, he && Y.finishedContainer], show: ee || $, type: "slide" },
                        (!Ee || $) && a.createElement(a.Fragment, null, Te(), Pe()),
                        Ie(),
                        B &&
                            a.createElement(I.Z, {
                                completed: ye,
                                isPastSummary: de,
                                onDismissed: () => {
                                    V(!1), x.scribe({ element: "message-steps-close-trace", action: "click" });
                                },
                                trace: me,
                            }),
                        a.createElement(P.Z, { completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: m }),
                    ),
                    re ? a.createElement(R.E, { onDrawerDismiss: () => le(null), paginationOptions: { numResultsPerPage: 25 }, webResults: re }) : null,
                    se ? a.createElement(L.a, { onDrawerDismiss: () => oe(null), paginationOptions: { numResultsPerPage: 25 }, postIds: se }) : null,
                    !1,
                );
            }
            const j = a.memo(({ webResult: e }) => {
                    const [t, n] = a.useState(!1),
                        r = e.favicon_base64 || e.favicon,
                        c = a.useCallback(() => a.createElement(l.Z, { style: Y.hoverCardContainer }, a.createElement(O.p, { item: e })), [e]);
                    return a.createElement(
                        p.Z,
                        { renderContent: c },
                        a.createElement(
                            o.ZP,
                            {
                                backgroundColor: "gray50",
                                borderColor: "gray200",
                                onPress: () => {
                                    window.open(e.url, "_blank");
                                },
                                size: "small",
                                style: [Y.pill, Y.pillButton],
                            },
                            a.createElement(l.Z, { style: Y.pillButtonContent }, r && !t ? a.createElement(i.Z, { onError: () => n(!0), source: r, style: Y.pillIcon }) : a.createElement(h.default, { style: Y.pillIcon }), a.createElement(l.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                K = a.memo(({ xPostId: e }) => {
                    const t = a.useMemo(() => x.Z.createHydratorForTweet(e), [e]),
                        n = a.useCallback(
                            () =>
                                a.createElement(
                                    l.Z,
                                    { style: Y.hoverCardContainer },
                                    a.createElement(b.Z, {
                                        isCondensed: !0,
                                        onPress: (e) => {
                                            w.ZP.isTwitterApp();
                                        },
                                        tweetId: e,
                                        withBirdwatchPivot: !1,
                                        withLink: !0,
                                        withUserHoverCard: !1,
                                    }),
                                ),
                            [e],
                        ),
                        r = (0, v.v9)(t);
                    return r
                        ? a.createElement(
                              p.Z,
                              { renderContent: n },
                              a.createElement(
                                  o.ZP,
                                  {
                                      backgroundColor: "gray50",
                                      borderColor: "gray200",
                                      onPress: () => {
                                          window.open(r.permalink, "_blank");
                                      },
                                      size: "small",
                                      style: [Y.pill, Y.pillButton],
                                  },
                                  a.createElement(l.Z, { style: Y.pillButtonContent }, r.user.profile_image_url_https && a.createElement(i.Z, { resizeMode: "cover", source: r.user.profile_image_url_https, style: Y.pillIcon }), a.createElement(l.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: Y.pillMonospaceText, weight: "normal" }, `@${r.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                X = a.memo(({ style: e, xPostId: t }) => {
                    const n = a.useMemo(() => x.Z.createHydratorForTweet(t), [t]),
                        r = (0, v.v9)(n);
                    return r && r.user.profile_image_url_https ? a.createElement(i.Z, { resizeMode: "cover", source: r.user.profile_image_url_https, style: [Y.pillIcon, e] }) : null;
                }),
                Y = m.default.create((e) => ({
                    container: { animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both", overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "all 0.2s ease" },
                    finishedContainer: { marginTop: e.spaces.space32 },
                    collapsedContentContainer: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16 },
                    collapsedContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, width: "100%", overflow: "hidden" },
                    headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space16 },
                    headerContainerWithContent: { paddingBottom: e.spaces.space8 },
                    leftHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, transition: "opacity 0.2s ease" },
                    leftHeaderContainerHovered: { opacity: 0.8 },
                    chevronIcon: { width: e.spaces.space16, height: e.spaces.space16, transform: [{ rotate: "0deg" }], transition: "transform 0.2s ease", color: e.colors.gray900 },
                    openChevronIcon: { transform: [{ rotate: "90deg" }] },
                    messageStepsContentPanelContainer: { maxHeight: 450 },
                    messageStepsDrawerExpandedContainer: { maxHeight: 180 },
                    messageStepsMobileExpandedContainer: { maxHeight: 300 },
                    iconContainer: { display: "flex", alignItems: "center", justifyContent: "center", width: m.default.theme.spaces.space24, height: m.default.theme.spaces.space24, overflow: "hidden" },
                    pill: { width: "max-content", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, backgroundColor: e.colors.gray50, borderColor: e.colors.gray200, borderWidth: 1, borderStyle: "solid", borderRadius: e.borderRadii.infinite, maxWidth: "100%" },
                    pillButton: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 },
                    pillButtonContent: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space4 },
                    pillIcon: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.infinite, color: e.colors.gray900 },
                    pillMonospaceText: { fontFamily: "monospace", fontSize: e.fontSizes.subtext3, color: e.colors.gray900, flex: 1 },
                    argsPillsContainer: { width: "100%", display: "flex", flexDirection: "row", overflow: "hidden", gap: e.spaces.space8 },
                    pillArgKey: { fontFamily: "monospace", color: e.colors.gray700, fontSize: e.fontSizes.subtext3 },
                    stackedPillIcons: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spacesPx.space4 },
                    stackedPillIcon: { position: "relative", marginEnd: -e.spacesPx.space4 },
                    hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" },
                    debugContainer: { marginTop: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space8 },
                    debugButton: { width: e.spaces.space16, height: e.spaces.space16 },
                    summary: { color: e.colors.gray900 },
                    summaryCompact: { fontSize: e.fontSizes.subtext1 },
                }));
        },
        567778: (e, t, n) => {
            n.d(t, { w: () => x });
            var a = n(202784),
                r = n(992942),
                l = n(154003),
                s = n(111677),
                o = n.n(s),
                i = n(323265),
                c = n(952793),
                u = n(725516),
                p = n(226247),
                m = n(464279),
                d = n(560619);
            const g = "grok",
                y = "grok_3",
                f = o().ha8fbe22,
                h = o().d95c232a,
                E = o().h2671312,
                C = o().a1bb9c8a,
                w = o().b08ef3ae,
                b = o().jf9363b8,
                Z = o().ef018bf6,
                _ = o().d95c232a,
                v = o().cdace6d2,
                x = ({ upsell: e }) => {
                    (0, u.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? a.createElement(p.e, { button: a.createElement(S, null), text: w, title: E }) : a.createElement(p.e, { button: a.createElement(S, { referringPage: y }), text: b, title: C })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(S, { referringPage: y }), text: b, title: C }) : "free_image_understanding_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(S, null), image: a.createElement(r.Z, { source: { uri: d }, style: { width: 102, height: 85 } }), text: _, title: Z }) : "free_image_generation_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(S, null), image: a.createElement(r.Z, { source: { uri: m }, style: { width: 132, height: 115 } }), text: h, title: f }) : null;
                },
                S = ({ referringPage: e }) => {
                    const t = !!i.ZP.isWebView(),
                        n = (0, u.z)(),
                        r = a.useCallback(() => n.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [n]);
                    return a.createElement(l.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, v);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bd027025.8dff880a.js.map
