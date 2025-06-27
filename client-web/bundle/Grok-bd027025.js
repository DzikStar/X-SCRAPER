"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bd027025"],
    {
        468603: (e, t, n) => {
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
                g = n(970205);
            function y({ delay: e = 500, duration: t = 30, endElement: n, holdout: r = 0, style: s, text: o }) {
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
                        const e = Math.max(0, m.current + r - Date.now()),
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
                return a.createElement(l.ZP, { style: s }, a.createElement("span", null, a.createElement("span", null, d), g ? a.createElement("span", { style: { whiteSpace: "nowrap" } }, `${d ? " " : ""}${g}`, " ", n) : void 0));
            }
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
            function Z({ completedTimestamp: e, expanded: t, fromTimestamp: n, hasCardAttachments: s, isCompactLayout: o, isImageResponse: i, isLoading: c, messageStepAccumulator: f, onClick: h, onComplete: Z, reasoningLayout: x, searchQuery: k, shownText: S, shownTrace: P, style: T, useTypingStatus: I }) {
                const M = "UNIFIED" === x,
                    D = (0, m.Z)(f?.state),
                    R = "COMPLETED" === f?.state,
                    L = "ABORTED" === f?.state,
                    O = f?.isPastSummary,
                    A = E(n ?? 0, e ?? 0),
                    V = S && S.length > 0,
                    z = a.useMemo(() => (M ? !((!f && !c) || i) && !(f && !R && !L && c && f.accumulatedSummary.length > 0 && !I) : c && !i && !V && !f && !P && !s), [M, c, i, V, f, f?.debugMessageTagCount, P, s, R, L]);
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
                    F = B[B.length - 1],
                    H = a.useMemo(() => {
                        if (M) {
                            if (I) {
                                if (t) return w;
                                if (F) return F;
                            }
                            return w;
                        }
                        return k ? C : "";
                    }, [M, k, t, F, I]);
                return a.createElement(
                    r.Z,
                    { style: [v.statusContainer, z && { opacity: 1, pointerEvents: "auto" }] },
                    M && (R || L) ? a.createElement(u.default, { style: v.thinkIcon }) : a.createElement(g.Z, { loop: z, style: v.loadingIcon }),
                    (() => {
                        if (M) {
                            const e = f && f.steps.length > 0;
                            if (R || L) return a.createElement(_, { completed: !0, expanded: t, onClick: h, showExpand: e }, a.createElement(r.Z, { style: v.statusLabelContainer }, a.createElement(l.ZP, { style: v.statusLabel }, O || L ? b : A)), e && a.createElement(p.default, { style: [v.chevron, R || L ? v.completedChevron : void 0, t ? v.expandedChevron : void 0] }));
                            if (I) return a.createElement(_, { completed: !1, expanded: t, onClick: h, showExpand: e }, a.createElement(y, { duration: 5, endElement: e ? a.createElement(p.default, { style: [v.chevron, v.typingAnimationChevron, t ? v.expandedChevron : void 0] }) : null, holdout: 45 * H.length, style: v.typingAnimation, text: H }));
                        }
                        return a.createElement(r.Z, { style: v.statusLabelContainer }, a.createElement(y, { duration: 15, holdout: 0, style: v.typingAnimation, text: H }));
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
            n.d(t, { Z: () => N });
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
                k = n(970205),
                S = n(988290),
                P = n(673787),
                T = n(767075),
                I = n(39831),
                M = n(468603),
                D = n(187268),
                R = n(916559),
                L = n(520595),
                O = n(809311),
                A = n(744610);
            const V = n(297689).Z.create({ carousel: { overflow: "hidden", position: "relative" }, carouselItem: { position: "absolute", top: 0, start: 0, end: 0, justifyContent: "center", alignItems: "center" } }),
                z = ({ content: e, easing: t, itemHeight: n, scrollDuration: s = 500 }) => {
                    const o = a.useRef(new A.Z.Value(0)).current,
                        i = a.useRef(new A.Z.Value(1)).current,
                        c = a.useRef(new A.Z.Value(n)).current,
                        [u, p] = a.useState(e),
                        [m, d] = a.useState(null),
                        [g, y] = a.useState(!1),
                        f = a.useRef(e);
                    return (
                        a.useEffect(() => {
                            e === f.current ||
                                g ||
                                (y(!0),
                                d(e),
                                c.setValue(n),
                                A.Z.parallel([A.Z.timing(o, { toValue: -n, duration: s, useNativeDriver: !1, easing: t }), A.Z.timing(i, { toValue: 0, duration: Math.floor(s / 2), useNativeDriver: !1, easing: r.Z.linear }), A.Z.timing(c, { toValue: 0, duration: s, useNativeDriver: !1, easing: t })]).start(() => {
                                    p(e), d(null), y(!1), o.setValue(0), i.setValue(1), c.setValue(n), (f.current = e);
                                }));
                        }, [e, s, g]),
                        a.createElement(l.Z, { style: { ...V.carousel, height: n } }, a.createElement(A.Z.View, { style: [V.carouselItem, { height: n, transform: [{ translateY: o }], opacity: i }] }, u), m && a.createElement(A.Z.View, { style: [V.carouselItem, { height: n, transform: [{ translateY: c }] }] }, m))
                    );
                };
            const B = m.default.create((e) => ({ container: { flex: 1, position: "relative", height: 25 }, content: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, opacity: 1, transition: "opacity 0.2s ease" }, hoveredHeaderContainer: { opacity: 0.8 } })),
                F = function ({ header: e, hovered: t, icon: n, transitionDurationMS: r }) {
                    const o = a.useRef({ header: e, icon: n, hovered: t }),
                        i = a.useRef(!1),
                        [c, u] = a.useState("a"),
                        p = a.useRef(new A.Z.Value(1)).current,
                        m = a.useRef(new A.Z.Value(0)).current,
                        d = a.useCallback(() => a.createElement(l.Z, { style: [B.headerContainer, t && B.hoveredHeaderContainer] }, n, a.createElement(s.ZP, null, e)), [e, t, n]),
                        [g, y] = a.useState(d),
                        [f, h] = a.useState(null);
                    return (
                        a.useEffect(() => {
                            if (!i.current) return (i.current = !0), void (o.current = { header: e, icon: n, hovered: t });
                            const a = e !== o.current.header,
                                l = t !== o.current.hovered;
                            if (((o.current = { header: e, icon: n, hovered: t }), !a && !l)) return;
                            const s = d();
                            if (!a && l) return void ("a" === c ? y(s) : h(s));
                            let g, f, E;
                            const C = "a" === c ? "b" : "a";
                            "a" === c ? ((g = p), (f = m), (E = h)) : ((g = m), (f = p), (E = y)),
                                E(s),
                                u(C),
                                f.setValue(0),
                                g.setValue(1),
                                A.Z.parallel([A.Z.timing(g, { toValue: 0, duration: r, useNativeDriver: !0 }), A.Z.timing(f, { toValue: 1, duration: r, useNativeDriver: !0 })]).start(() => {
                                    "b" === C ? y(null) : h(null);
                                });
                        }, [c, d, e, t, n, r]),
                        a.createElement(l.Z, { style: B.container }, g && a.createElement(A.Z.View, { style: [B.content, { opacity: p }] }, g), f && a.createElement(A.Z.View, { style: [B.content, { opacity: m }] }, f))
                    );
                },
                H = g().h26fa43f,
                $ = !1,
                U = 40,
                q = 1500,
                W = 500;
            function N({ completedTimestamp: e, fromTimestamp: t, isLoading: n, isStatusExpanded: p, messageStepAccumulator: m, onComplete: d }) {
                const { isCompactLayout: g, isGrokDrawer: w } = (0, S.ZP)(),
                    b = g || w,
                    v = (0, Z.Z)(m?.state),
                    x = (0, _.z)(),
                    O = a.useRef(null),
                    [A, V] = a.useState(!1),
                    [B, N] = a.useState(!1),
                    [Y, Q] = a.useState(!1),
                    J = (0, Z.Z)(Y),
                    [ee, te] = a.useState(!1),
                    [ne, ae] = a.useState(null),
                    [re, le] = a.useState(null),
                    [se, oe] = a.useState(null),
                    ie = a.useRef(0),
                    ce = a.useRef(null),
                    { accumulatedTrace: ue, isPastSummary: pe, state: me } = m,
                    de = "COMPLETED" === me,
                    ge = "ABORTED" === me,
                    ye = de || ge,
                    fe = ye && p,
                    [he, Ee] = a.useState(0);
                a.useEffect(() => {
                    (("COMPLETED" !== v && de) || ("ABORTED" !== v && ge)) && (te(!1), d?.());
                }, [v, de, ge, d]),
                    a.useEffect(() => {
                        de && (p && !ee ? te(!0) : !p && ee && te(!1));
                    }, [p, ee, de]);
                const Ce = a.useRef(null);
                a.useEffect(() => {
                    const e = () => {
                        O.current && !A && O.current.scrollToEnd({ animated: !0 });
                    };
                    return pe || (Ce.current = window.setInterval(e, 1e3)), () => window.clearInterval(Ce.current);
                }, [A, pe]),
                    a.useEffect(() => {
                        de && !pe && window.clearInterval(Ce.current);
                    }, [de, A, pe]);
                const we = a.useCallback((e) => a.createElement(l.Z, { style: [G.collapsedContent, { height: U }] }, a.createElement(s.ZP, { numberOfLines: 2, style: [G.summary, b && G.summaryCompact] }, e)), [b]),
                    be = a.useCallback(
                        (e) => {
                            if (!e) return null;
                            let t = null;
                            const n = { ...e.args };
                            if ((delete n.query, e.name === D.ky.WebSearch || e.name === D.ky.WebSearchWithSnippets)) e.args.query && (t = a.createElement(a.Fragment, null, a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query))));
                            else if (e.name === D.ky.XSearch || e.name === D.ky.XKeywordSearch || e.name === D.ky.XSemanticSearch || e.name === D.ky.XUserSearch || e.name === D.ky.GetXUserTimeline) {
                                const r = Object.entries(n);
                                (e.args.query || r.length > 0) &&
                                    (t = a.createElement(
                                        a.Fragment,
                                        null,
                                        e.args.query && a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query)),
                                        r.length > 0 &&
                                            !b &&
                                            a.createElement(
                                                l.Z,
                                                { style: G.argsPillsContainer },
                                                r.map(([e, t]) => a.createElement(l.Z, { key: e, style: G.pill }, a.createElement(s.ZP, { style: G.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, t))),
                                            ),
                                    ));
                            } else if (e.name === D.ky.BrowsePage) {
                                let n = e.args.url || "";
                                try {
                                    n = new URL(n).hostname.replace("www.", "");
                                } catch (e) {}
                                (e.args.query || n) && (t = a.createElement(a.Fragment, null, e.args.query && a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query)), n && !b && a.createElement(l.Z, { style: G.argsPillsContainer }, a.createElement(l.Z, { style: G.pill }, a.createElement(f.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, n)))));
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
                                                { style: G.argsPillsContainer },
                                                r.map(([e, t]) => a.createElement(l.Z, { key: e, style: G.pill }, a.createElement(s.ZP, { style: G.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, t))),
                                            ),
                                    ));
                            }
                            return t ? a.createElement(l.Z, { style: [G.collapsedContent, { height: U }] }, t) : null;
                        },
                        [b],
                    ),
                    Ze = a.useCallback(
                        (e, t) => {
                            if (!t || !e) return null;
                            let n = null;
                            const r = e.name;
                            if ((r === D.ky.WebSearch || r === D.ky.WebSearchWithSnippets) && t.webResults && t.webResults.length > 0) {
                                const r = t.webResults,
                                    c = 2,
                                    u = r.slice(0, c),
                                    p = r.slice(c),
                                    m = 3;
                                n = a.createElement(
                                    a.Fragment,
                                    null,
                                    !b && a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query)),
                                    a.createElement(
                                        l.Z,
                                        { style: G.argsPillsContainer },
                                        u.map((e) => a.createElement(j, { key: e.url, webResult: e })),
                                        p.length > 0 &&
                                            a.createElement(
                                                o.ZP,
                                                {
                                                    backgroundColor: "gray50",
                                                    borderColor: "gray200",
                                                    onPress: () => {
                                                        le(r);
                                                    },
                                                    size: "small",
                                                    style: [G.pill, G.pillButton],
                                                },
                                                a.createElement(
                                                    l.Z,
                                                    { style: G.pillButtonContent },
                                                    a.createElement(
                                                        l.Z,
                                                        { style: G.stackedPillIcons },
                                                        p.slice(0, m).map((e) => (e.favicon ? a.createElement(i.Z, { key: e.url, source: { uri: e.favicon }, style: [G.pillIcon, G.stackedPillIcon] }) : a.createElement(h.default, { key: e.url, style: [G.pillIcon, G.stackedPillIcon] }))),
                                                    ),
                                                    a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText, weight: "normal" }, H({ count: r.length - u.length })),
                                                ),
                                            ),
                                    ),
                                );
                            } else if ((r === D.ky.XSearch || r === D.ky.XKeywordSearch || r === D.ky.XSemanticSearch) && t.xPostIds && t.xPostIds.length > 0) {
                                const r = t.xPostIds,
                                    i = 2,
                                    c = r.slice(0, i),
                                    u = r.slice(i),
                                    p = 3;
                                n = a.createElement(
                                    a.Fragment,
                                    null,
                                    !b && a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query)),
                                    a.createElement(
                                        l.Z,
                                        { style: G.argsPillsContainer },
                                        c.map((e) => a.createElement(K, { key: `x-post-${e}`, xPostId: e })),
                                        u.length > 0 &&
                                            a.createElement(
                                                o.ZP,
                                                {
                                                    backgroundColor: "gray50",
                                                    borderColor: "gray200",
                                                    onPress: () => {
                                                        oe(r);
                                                    },
                                                    size: "small",
                                                    style: [G.pill, G.pillButton],
                                                },
                                                a.createElement(
                                                    l.Z,
                                                    { style: G.pillButtonContent },
                                                    a.createElement(
                                                        l.Z,
                                                        { style: G.stackedPillIcons },
                                                        u.slice(0, p).map((e) => a.createElement(X, { key: `x-post-${e}`, style: G.stackedPillIcon, xPostId: e })),
                                                    ),
                                                    a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText, weight: "normal" }, H({ count: r.length - c.length })),
                                                ),
                                            ),
                                    ),
                                );
                            } else r === D.ky.BrowsePage && (n = a.createElement(a.Fragment, null, e.args.query && !b && a.createElement(l.Z, { style: G.pill }, a.createElement(y.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, e.args.query)), e.args.url && a.createElement(l.Z, { style: G.pill }, a.createElement(f.default, { style: G.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText }, new URL(e.args.url).hostname.replace("www.", "")))));
                            return n ? a.createElement(l.Z, { style: [G.collapsedContent, { height: U }] }, n) : null;
                        },
                        [b],
                    ),
                    _e = a.useMemo(() => {
                        const e = [],
                            t = m?.steps || [];
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n].subSteps || [];
                            for (let t = 0; t < r.length; t++) {
                                const s = r[t].orderedContentToPreview || [];
                                for (let r = 0; r < s.length; r++) {
                                    const o = s[r];
                                    if ("TOOL_USAGE" === o.type) {
                                        const s = be(o.toolUsageCard);
                                        s && e.push({ id: `${n}-${t}-${r}`, header: o.header, icon: a.createElement(l.Z, { style: G.iconContainer }, (0, D.w$)(o.toolUsageCard?.name || "")), previewContent: s });
                                    } else if ("TOOL_USAGE_RESULT" === o.type) {
                                        const s = o.toolUsageCard,
                                            i = o.toolUsageCardResult,
                                            c = Ze(s, i);
                                        c && e.push({ id: `${n}-${t}-${r}`, header: o.header, icon: a.createElement(l.Z, { style: G.iconContainer }, (0, D.w$)(o.toolUsageCard?.name || "")), previewContent: c });
                                    } else if ("SUMMARY" === o.type) {
                                        const s = we(o.summary || "");
                                        s && e.push({ id: `${n}-${t}-${r}`, header: o.header, icon: a.createElement(l.Z, { style: G.iconContainer }, a.createElement(k.Z, null)), previewContent: s });
                                    }
                                }
                            }
                        }
                        return e;
                    }, [m?.debugMessageTagCount]),
                    ve = a.useMemo(() => {
                        const e = { id: "empty-id", header: M.N$, icon: a.createElement(k.Z, null), previewContent: null };
                        if (_e.length <= 0 || Y) return e;
                        const t = _e[_e.length - 1];
                        return { id: t.id, header: t.header, icon: t.icon, previewContent: t.previewContent };
                    }, [_e, Y]);
                a.useEffect(() => {
                    if (!ee) return;
                    if (!ne) return void ae({ id: ve.id, header: ve.header, icon: ve.icon, previewContent: ve.previewContent });
                    if (J !== Y) return ae({ id: ve.id, header: ve.header, icon: ve.icon, previewContent: ve.previewContent }), void (ce.current && clearTimeout(ce.current));
                    const e = Math.max(0, ie.current + q - Date.now());
                    return (
                        (ce.current = setTimeout(() => {
                            (ie.current = Date.now()), ne?.id !== ve.id && ae({ id: ve.id, header: ve.header, icon: ve.icon, previewContent: ve.previewContent });
                        }, e)),
                        () => clearTimeout(ce.current)
                    );
                }, [ve, ee, ne, Y, J]),
                    a.useEffect(() => {
                        !de && n && !ee && _e.length > 0 && te(!0);
                    }, [n, ee, de, _e]);
                const xe = a.useCallback(
                        () =>
                            a.createElement(
                                c.Z,
                                {
                                    onPress: () => {
                                        Q(!Y);
                                    },
                                    style: G.headerContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(a.Fragment, null, a.createElement(F, { header: ne?.header || "", hovered: e, icon: ne?.icon, transitionDurationMS: W }), a.createElement(E.default, { style: [G.chevronIcon, Y && G.openChevronIcon] })),
                            ),
                        [ne, Y, Q],
                    ),
                    ke = a.useCallback(() => a.createElement(u.Z, { childrenOuterStyle: G.collapsedContentContainer, show: !Y, type: "slide" }, a.createElement(z, { content: ne?.previewContent, easing: r.Z.bezier(0.25, 0.46, 0.45, 0.94), itemHeight: U, scrollDuration: W })), [Y, ne]),
                    Se = a.useCallback(
                        () =>
                            a.createElement(
                                u.Z,
                                { childrenOuterStyle: { ...G.messageStepsContentPanelContainer, ...(w ? G.messageStepsDrawerExpandedContainer : g ? G.messageStepsMobileExpandedContainer : {}) }, show: fe || Y, type: "slide" },
                                a.createElement(P.Z, {
                                    isLoading: n,
                                    messageStepAccumulator: m,
                                    onCancelAutoScroll: () => {
                                        V(!0);
                                    },
                                    onRestartAutoScroll: () => {
                                        V(!1);
                                    },
                                    onShowTrace: () => N(!0),
                                    scrollViewRef: O,
                                }),
                            ),
                        [n, m, w, g, fe, Y],
                    );
                a.useCallback(
                    () =>
                        a.createElement(
                            l.Z,
                            { style: G.debugContainer },
                            a.createElement(o.ZP, {
                                disabled: he <= 0,
                                icon: a.createElement(C.default, null),
                                onPress: () => {
                                    if (he > 0) {
                                        const e = he - 1;
                                        Ee(e), ae({ id: _e[e].id, header: _e[e].header, icon: _e[e].icon, previewContent: _e[e].previewContent });
                                    }
                                },
                                size: "small",
                                style: G.debugButton,
                            }),
                            a.createElement(o.ZP, {
                                disabled: he >= _e.length - 1,
                                icon: a.createElement(E.default, null),
                                onPress: () => {
                                    if (he < _e.length - 1) {
                                        const e = he + 1;
                                        Ee(e), ae({ id: _e[e].id, header: _e[e].header, icon: _e[e].icon, previewContent: _e[e].previewContent });
                                    }
                                },
                                size: "small",
                                style: G.debugButton,
                            }),
                        ),
                    [_e, he],
                );
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        u.Z,
                        { childrenOuterStyle: [G.container, ye && G.finishedContainer], show: ee || $, type: "slide" },
                        (!fe || $) && a.createElement(a.Fragment, null, xe(), ke()),
                        Se(),
                        B &&
                            a.createElement(I.Z, {
                                completed: de,
                                isPastSummary: pe,
                                onDismissed: () => {
                                    N(!1), x.scribe({ element: "message-steps-close-trace", action: "click" });
                                },
                                trace: ue,
                            }),
                        a.createElement(T.Z, { completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: m }),
                    ),
                    re ? a.createElement(R.E, { onDrawerDismiss: () => le(null), paginationOptions: { numResultsPerPage: 25 }, webResults: re }) : null,
                    se ? a.createElement(L.a, { onDrawerDismiss: () => oe(null), paginationOptions: { numResultsPerPage: 25 }, postIds: se }) : null,
                    !1,
                );
            }
            const j = a.memo(({ webResult: e }) => {
                    const [t, n] = a.useState(!1),
                        r = e.favicon_base64 || e.favicon,
                        c = a.useCallback(() => a.createElement(l.Z, { style: G.hoverCardContainer }, a.createElement(O.p, { item: e })), [e]);
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
                                style: [G.pill, G.pillButton],
                            },
                            a.createElement(l.Z, { style: G.pillButtonContent }, r && !t ? a.createElement(i.Z, { onError: () => n(!0), source: r, style: G.pillIcon }) : a.createElement(h.default, { style: G.pillIcon }), a.createElement(l.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                K = a.memo(({ xPostId: e }) => {
                    const t = a.useMemo(() => x.Z.createHydratorForTweet(e), [e]),
                        n = a.useCallback(
                            () =>
                                a.createElement(
                                    l.Z,
                                    { style: G.hoverCardContainer },
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
                                      style: [G.pill, G.pillButton],
                                  },
                                  a.createElement(l.Z, { style: G.pillButtonContent }, a.createElement(i.Z, { source: { uri: r.user.profile_image_url_https }, style: G.pillIcon }), a.createElement(l.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: G.pillMonospaceText, weight: "normal" }, `@${r.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                X = a.memo(({ style: e, xPostId: t }) => {
                    const n = a.useMemo(() => x.Z.createHydratorForTweet(t), [t]),
                        r = (0, v.v9)(n);
                    return r ? a.createElement(i.Z, { source: { uri: r.user.profile_image_url_https }, style: [G.pillIcon, e] }) : null;
                }),
                G = m.default.create((e) => ({
                    container: { animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both", overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "all 0.2s ease" },
                    finishedContainer: { marginTop: e.spaces.space32 },
                    collapsedContentContainer: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16 },
                    collapsedContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, width: "100%", overflow: "hidden" },
                    headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space16, paddingBottom: e.spaces.space8 },
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
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? a.createElement(p.e, { button: a.createElement(k, null), text: w, title: E }) : a.createElement(p.e, { button: a.createElement(k, { referringPage: y }), text: b, title: C })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(k, { referringPage: y }), text: b, title: C }) : "free_image_understanding_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(k, null), image: a.createElement(r.Z, { source: { uri: d }, style: { width: 102, height: 85 } }), text: _, title: Z }) : "free_image_generation_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(k, null), image: a.createElement(r.Z, { source: { uri: m }, style: { width: 132, height: 115 } }), text: h, title: f }) : null;
                },
                k = ({ referringPage: e }) => {
                    const t = !!i.ZP.isWebView(),
                        n = (0, u.z)(),
                        r = a.useCallback(() => n.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [n]);
                    return a.createElement(l.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, v);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bd027025.2f9a992a.js.map
