"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bd027025"],
    {
        468603: (e, t, n) => {
            n.d(t, { ZP: () => Z, N$: () => w });
            n(136728);
            var a = n(202784),
                l = n(325686),
                r = n(731708),
                s = n(530732),
                o = n(392237),
                i = n(111677),
                c = n.n(i),
                u = n(408814),
                p = n(487552),
                m = n(246851),
                d = n(397159),
                g = n(970205);
            function y({ delay: e = 500, duration: t = 30, endElement: n, holdout: l = 0, style: s, text: o }) {
                const [i, c] = a.useState(""),
                    [u, p] = a.useState(""),
                    m = a.useRef(0);
                a.useEffect(() => {
                    let n,
                        a = u;
                    const l = (e) => {
                        i !== a && (i.startsWith(a) ? ((a = i.substring(0, e)), (n = setTimeout(() => l(e + 1), t))) : ((a = a.substring(0, Math.max(0, a.length - 2))), (n = setTimeout(() => l(e), t))), p(a));
                    };
                    return (n = setTimeout(() => l(1), e)), () => clearTimeout(n);
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
            function Z({ completedTimestamp: e, expanded: t, fromTimestamp: n, hasCardAttachments: s, isCompactLayout: o, isImageResponse: i, isLoading: c, messageStepAccumulator: f, onClick: h, onComplete: Z, reasoningLayout: v, searchQuery: P, shownText: k, shownTrace: S, style: T, useTypingStatus: I }) {
                const M = "UNIFIED" === v,
                    D = (0, m.Z)(f?.state),
                    L = "COMPLETED" === f?.state,
                    R = "ABORTED" === f?.state,
                    O = f?.isPastSummary,
                    A = E(n ?? 0, e ?? 0),
                    B = k && k.length > 0,
                    V = a.useMemo(() => (M ? !((!f && !c) || i) && !(f && !L && !R && c && f.accumulatedSummary.length > 0 && !I) : c && !i && !B && !f && !S && !s), [M, c, i, B, f, f?.debugMessageTagCount, S, s, L, R]);
                a.useEffect(() => {
                    "COMPLETED" !== D && L && Z?.();
                }, [D, L, Z]);
                const F = a.useMemo(() => {
                        const e = [],
                            t = f?.steps || [];
                        for (const n of t) {
                            n.header && e.push(n.header);
                            const t = n.subSteps || [];
                            for (const n of t) n.messageTag === d.iS.SUMMARY ? e.push(...(n.statusHeaders || [])) : n.messageTag === d.iS.DECISION && e.push(n.actionSummary || "");
                        }
                        return e;
                    }, [f?.debugMessageTagCount]),
                    z = F[F.length - 1],
                    $ = a.useMemo(() => {
                        if (M) {
                            if (I) {
                                if (t) return w;
                                if (z) return z;
                            }
                            return w;
                        }
                        return P ? C : "";
                    }, [M, P, t, z, I]);
                return a.createElement(
                    l.Z,
                    { style: [x.statusContainer, M && (I || L || R) && x.unifiedLayoutStatusContainer, V && { opacity: 1, pointerEvents: "auto" }] },
                    M && (L || R) ? a.createElement(u.default, { style: x.thinkIcon }) : a.createElement(g.Z, { loop: V, style: x.loadingIcon }),
                    (() => {
                        if (M) {
                            const e = f && f.steps.length > 0;
                            if (L || R) return a.createElement(_, { completed: !0, expanded: t, onClick: h, showExpand: e }, a.createElement(l.Z, { style: x.statusLabelContainer }, a.createElement(r.ZP, { style: x.statusLabel }, O || R ? b : A)), e && a.createElement(p.default, { style: [x.chevron, L || R ? x.completedChevron : void 0, t ? x.expandedChevron : void 0] }));
                            if (I) return a.createElement(_, { completed: !1, expanded: t, onClick: h, showExpand: e }, a.createElement(y, { duration: 5, endElement: e ? a.createElement(p.default, { style: [x.chevron, x.typingAnimationChevron, t ? x.expandedChevron : void 0] }) : null, holdout: 45 * $.length, style: x.typingAnimation, text: $ }));
                        }
                        return a.createElement(l.Z, { style: x.statusLabelContainer }, a.createElement(y, { duration: 15, holdout: 0, style: x.typingAnimation, text: $ }));
                    })(),
                );
            }
            function _({ children: e, completed: t, expanded: n, onClick: l, showExpand: r }) {
                return a.createElement(
                    s.Z,
                    {
                        onClick: () => {
                            r && l();
                        },
                        style: x.expandableStatusContainer,
                        withoutInteractiveStyles: !0,
                    },
                    e,
                );
            }
            const x = o.default.create((e) => ({ statusContainer: { display: "flex", flexDirection: "row", color: "light" === e.paletteName ? e.colors.gray700 : e.colors.gray900, opacity: 0, pointerEvents: "none", transition: "opacity 0.2s ease", marginHorizontal: e.spaces.space12, gap: e.spaces.space4, position: "absolute", top: 0, start: 0 }, unifiedLayoutStatusContainer: { position: "unset", top: "unset", start: "unset", marginBottom: e.spaces.space12 }, loadingIcon: { position: "relative", top: 1 }, thinkIcon: { color: "inherit" }, statusLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.2s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusLabel: { color: "inherit" }, expandableStatusContainer: { display: "flex", flexDirection: "row", marginStart: e.spaces.space4, flex: 1 }, chevron: { transition: "all 0.2s ease", transform: "rotate(0deg)", color: "inherit", width: e.spaces.space16, height: e.spaces.space16, animationDuration: "0.2s", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, completedChevron: { color: "inherit", top: e.spaces.space2, marginStart: e.spaces.space4 }, expandedChevron: { transform: "rotate(-180deg)" }, typingAnimation: { color: "inherit", flex: 1, display: "flex", paddingTop: 3 }, typingAnimationChevron: { top: -1 } }));
        },
        159210: (e, t, n) => {
            n.d(t, { Z: () => K });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                l = n(137937),
                r = n(325686),
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
                h = n(976898),
                E = n(630715),
                C = n(58399),
                w = n(97301),
                b = n(323265),
                Z = n(301758),
                _ = n(246851),
                x = n(725516),
                v = n(125363),
                P = n(836255),
                k = n(970205),
                S = n(988290),
                T = n(673787),
                I = n(767075),
                M = n(39831),
                D = n(468603),
                L = n(187268),
                R = n(916559),
                O = n(520595),
                A = n(809311),
                B = n(744610);
            const V = n(297689).Z.create({ carousel: { overflow: "hidden", position: "relative" }, carouselItem: { position: "absolute", top: 0, start: 0, end: 0, justifyContent: "center", alignItems: "center" } }),
                F = ({ content: e, easing: t, itemHeight: n, scrollDuration: s = 500 }) => {
                    const o = a.useRef(new B.Z.Value(0)).current,
                        i = a.useRef(new B.Z.Value(1)).current,
                        c = a.useRef(new B.Z.Value(n)).current,
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
                                B.Z.parallel([B.Z.timing(o, { toValue: -n, duration: s, useNativeDriver: !1, easing: t }), B.Z.timing(i, { toValue: 0, duration: Math.floor(s / 2), useNativeDriver: !1, easing: l.Z.linear }), B.Z.timing(c, { toValue: 0, duration: s, useNativeDriver: !1, easing: t })]).start(() => {
                                    p(e), d(null), y(!1), o.setValue(0), i.setValue(1), c.setValue(n), (f.current = e);
                                }));
                        }, [e, s, g]),
                        a.createElement(r.Z, { style: { ...V.carousel, height: n } }, a.createElement(B.Z.View, { style: [V.carouselItem, { height: n, transform: [{ translateY: o }], opacity: i }] }, u), m && a.createElement(B.Z.View, { style: [V.carouselItem, { height: n, transform: [{ translateY: c }] }] }, m))
                    );
                };
            const z = m.default.create((e) => ({ container: { flex: 1, position: "relative", height: 25 }, content: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, opacity: 1, transition: "opacity 0.2s ease" }, hoveredHeaderContainer: { opacity: 0.8 } })),
                $ = function ({ header: e, hovered: t, icon: n, transitionDurationMS: l }) {
                    const [o, i] = a.useState({ icon: n, header: e }),
                        [c, u] = a.useState(null),
                        p = a.useRef(new B.Z.Value(0)).current,
                        m = a.useRef(new B.Z.Value(0)).current;
                    a.useEffect(() => {
                        e !== o.header &&
                            (u(o),
                            i({ icon: n, header: e }),
                            p.setValue(0),
                            m.setValue(1),
                            B.Z.parallel([B.Z.timing(m, { toValue: 0, duration: l, useNativeDriver: !0 }), B.Z.timing(p, { toValue: 1, duration: l, useNativeDriver: !0 })]).start(() => {
                                u(null);
                            }));
                    }, [n, e, l, o, p, m]);
                    const d = c ? a.createElement(r.Z, { style: [z.headerContainer, t && z.hoveredHeaderContainer] }, c?.icon, a.createElement(s.ZP, null, c?.header)) : null,
                        g = a.createElement(r.Z, { style: [z.headerContainer, t && z.hoveredHeaderContainer] }, o?.icon, a.createElement(s.ZP, null, o?.header));
                    return a.createElement(r.Z, { style: z.container }, c && a.createElement(B.Z.View, { style: [z.content, { opacity: m }] }, d), a.createElement(B.Z.View, { style: [z.content, { opacity: c ? p : 1 }] }, g));
                },
                H = g().f26fc748,
                U = g().h26fa43f,
                q = !1,
                W = 75,
                N = 1500,
                j = 350;
            function K({ completedTimestamp: e, fromTimestamp: t, isLoading: n, isStatusExpanded: p, messageStepAccumulator: m, onComplete: d }) {
                const { isCompactLayout: g, isGrokDrawer: b } = (0, S.ZP)(),
                    Z = (0, _.Z)(m?.state),
                    v = (0, x.z)(),
                    P = a.useRef(null),
                    [A, B] = a.useState(!1),
                    [V, z] = a.useState(!1),
                    [K, J] = a.useState(!1),
                    [ee, te] = a.useState(!1),
                    [ne, ae] = a.useState(null),
                    [le, re] = a.useState(null),
                    [se, oe] = a.useState(null),
                    ie = a.useRef(0),
                    { accumulatedTrace: ce, isPastSummary: ue, state: pe } = m,
                    me = "COMPLETED" === pe,
                    de = "ABORTED" === pe,
                    ge = (me || de) && p,
                    [ye, fe] = a.useState(0);
                a.useEffect(() => {
                    (("COMPLETED" !== Z && me) || ("ABORTED" !== Z && de)) && (te(!1), d?.());
                }, [Z, me, de, d]),
                    a.useEffect(() => {
                        me && (p && !ee ? te(!0) : !p && ee && te(!1));
                    }, [p, ee, me]);
                const he = a.useRef(null);
                a.useEffect(() => {
                    const e = () => {
                        P.current && !A && P.current.scrollToEnd({ animated: !0 });
                    };
                    return ue || (he.current = window.setInterval(e, 1e3)), () => window.clearInterval(he.current);
                }, [A, ue]),
                    a.useEffect(() => {
                        me && !ue && window.clearInterval(he.current);
                    }, [me, A, ue]);
                const Ee = a.useCallback((e) => a.createElement(r.Z, { style: [Q.collapsedContent, { height: W }] }, a.createElement(s.ZP, { numberOfLines: 2, style: Q.summary }, e)), []),
                    Ce = a.useCallback((e) => {
                        if (!e) return null;
                        let t = null;
                        const n = { ...e.args };
                        if ((delete n.query, e.name === L.ky.WebSearch || e.name === L.ky.WebSearchWithSnippets)) e.args.query && (t = a.createElement(a.Fragment, null, a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query))));
                        else if (e.name === L.ky.XSearch || e.name === L.ky.XKeywordSearch || e.name === L.ky.XSemanticSearch || e.name === L.ky.XUserSearch || e.name === L.ky.GetXUserTimeline) {
                            const l = Object.entries(n);
                            (e.args.query || l.length > 0) &&
                                (t = a.createElement(
                                    a.Fragment,
                                    null,
                                    e.args.query && a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query)),
                                    l.length > 0 &&
                                        a.createElement(
                                            r.Z,
                                            { style: Q.argsPillsContainer },
                                            l.map(([e, t]) => a.createElement(r.Z, { key: e, style: Q.pill }, a.createElement(s.ZP, { style: Q.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, t))),
                                        ),
                                ));
                        } else if (e.name === L.ky.BrowsePage) {
                            let n = e.args.url || "";
                            try {
                                n = new URL(n).hostname.replace("www.", "");
                            } catch (e) {}
                            (e.args.query || n) && (t = a.createElement(a.Fragment, null, e.args.query && a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query)), n && a.createElement(r.Z, { style: Q.argsPillsContainer }, a.createElement(r.Z, { style: Q.pill }, a.createElement(f.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, n)))));
                        } else if (e.name === L.ky.CodeExecution) {
                            const n = { ...e.args };
                            delete n.language;
                            const l = Object.entries(n);
                            (e.args.language || l.length > 0) &&
                                (t = a.createElement(
                                    a.Fragment,
                                    null,
                                    a.createElement(r.Z, { style: Q.pill }, a.createElement(h.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.language || H)),
                                    l.length > 0 &&
                                        a.createElement(
                                            r.Z,
                                            { style: Q.argsPillsContainer },
                                            l.map(([e, t]) => a.createElement(r.Z, { key: e, style: Q.pill }, a.createElement(s.ZP, { style: Q.pillArgKey }, e, ":"), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, t))),
                                        ),
                                ));
                        }
                        return t ? a.createElement(r.Z, { style: [Q.collapsedContent, { height: W }] }, t) : null;
                    }, []),
                    we = a.useCallback((e, t) => {
                        if (!t || !e) return null;
                        let n = null;
                        const l = e.name;
                        if ((l === L.ky.WebSearch || l === L.ky.WebSearchWithSnippets) && t.webResults && t.webResults.length > 0) {
                            const l = t.webResults,
                                c = 3,
                                u = l.slice(0, c),
                                p = l.slice(c),
                                m = 3;
                            n = a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query)),
                                a.createElement(
                                    r.Z,
                                    { style: Q.argsPillsContainer },
                                    u.map((e) => a.createElement(X, { key: e.url, webResult: e })),
                                    p.length > 0 &&
                                        a.createElement(
                                            o.ZP,
                                            {
                                                backgroundColor: "gray50",
                                                borderColor: "gray200",
                                                onPress: () => {
                                                    re(l);
                                                },
                                                size: "small",
                                                style: [Q.pill, Q.pillButton],
                                            },
                                            a.createElement(
                                                r.Z,
                                                { style: Q.pillButtonContent },
                                                a.createElement(
                                                    r.Z,
                                                    { style: Q.stackedPillIcons },
                                                    p.slice(0, m).map((e) => (e.favicon ? a.createElement(i.Z, { key: e.url, source: { uri: e.favicon }, style: [Q.pillIcon, Q.stackedPillIcon] }) : a.createElement(E.default, { key: e.url, style: [Q.pillIcon, Q.stackedPillIcon] }))),
                                                ),
                                                a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText, weight: "normal" }, U({ count: l.length - u.length })),
                                            ),
                                        ),
                                ),
                            );
                        } else if ((l === L.ky.XSearch || l === L.ky.XKeywordSearch || l === L.ky.XSemanticSearch) && t.xPostIds && t.xPostIds.length > 0) {
                            const l = t.xPostIds,
                                i = 3,
                                c = l.slice(0, i),
                                u = l.slice(i),
                                p = 3;
                            n = a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query)),
                                a.createElement(
                                    r.Z,
                                    { style: Q.argsPillsContainer },
                                    c.map((e) => a.createElement(G, { key: `x-post-${e}`, xPostId: e })),
                                    u.length > 0 &&
                                        a.createElement(
                                            o.ZP,
                                            {
                                                backgroundColor: "gray50",
                                                borderColor: "gray200",
                                                onPress: () => {
                                                    oe(l);
                                                },
                                                size: "small",
                                                style: [Q.pill, Q.pillButton],
                                            },
                                            a.createElement(
                                                r.Z,
                                                { style: Q.pillButtonContent },
                                                a.createElement(
                                                    r.Z,
                                                    { style: Q.stackedPillIcons },
                                                    u.slice(0, p).map((e) => a.createElement(Y, { key: `x-post-${e}`, style: Q.stackedPillIcon, xPostId: e })),
                                                ),
                                                a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText, weight: "normal" }, U({ count: l.length - c.length })),
                                            ),
                                        ),
                                ),
                            );
                        } else l === L.ky.BrowsePage && (n = a.createElement(a.Fragment, null, e.args.query && a.createElement(r.Z, { style: Q.pill }, a.createElement(y.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, e.args.query)), e.args.url && a.createElement(r.Z, { style: Q.pill }, a.createElement(f.default, { style: Q.pillIcon }), a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText }, new URL(e.args.url).hostname.replace("www.", "")))));
                        return n ? a.createElement(r.Z, { style: [Q.collapsedContent, { height: W }] }, n) : null;
                    }, []),
                    be = a.useMemo(() => {
                        const e = [],
                            t = m?.steps || [];
                        for (let n = 0; n < t.length; n++) {
                            const l = t[n].subSteps || [];
                            for (let t = 0; t < l.length; t++) {
                                const s = l[t].orderedContentToPreview || [];
                                for (let l = 0; l < s.length; l++) {
                                    const o = s[l];
                                    if ("TOOL_USAGE" === o.type) {
                                        const s = Ce(o.toolUsageCard);
                                        s && e.push({ id: `${n}-${t}-${l}`, header: o.header, icon: a.createElement(r.Z, { style: Q.iconContainer }, (0, L.w$)(o.toolUsageCard?.name || "")), previewContent: s });
                                    } else if ("TOOL_USAGE_RESULT" === o.type) {
                                        const s = o.toolUsageCard,
                                            i = o.toolUsageCardResult,
                                            c = we(s, i);
                                        c && e.push({ id: `${n}-${t}-${l}`, header: o.header, icon: a.createElement(r.Z, { style: Q.iconContainer }, (0, L.w$)(o.toolUsageCard?.name || "")), previewContent: c });
                                    } else if ("SUMMARY" === o.type) {
                                        const s = Ee(o.summary || "");
                                        s && e.push({ id: `${n}-${t}-${l}`, header: o.header, icon: a.createElement(r.Z, { style: Q.iconContainer }, a.createElement(k.Z, null)), previewContent: s });
                                    }
                                }
                            }
                        }
                        return e;
                    }, [m?.debugMessageTagCount]),
                    Ze = a.useMemo(() => {
                        const e = { id: "empty-id", header: D.N$, icon: a.createElement(k.Z, null), previewContent: null };
                        if (be.length <= 0 || K) return e;
                        const t = be[be.length - 1];
                        return { id: t.id, header: t.header, icon: t.icon, previewContent: t.previewContent };
                    }, [be, K]);
                a.useEffect(() => {
                    if (!ee) return;
                    if (!ne) return void ae({ id: Ze.id, header: Ze.header, icon: Ze.icon, previewContent: Ze.previewContent });
                    const e = Math.max(0, ie.current + N - Date.now()),
                        t = setTimeout(() => {
                            (ie.current = Date.now()), ne?.id !== Ze.id && ae({ id: Ze.id, header: Ze.header, icon: Ze.icon, previewContent: Ze.previewContent });
                        }, e);
                    return () => clearTimeout(t);
                }, [Ze, ee, ne]),
                    a.useEffect(() => {
                        !me && n && !ee && be.length > 0 && te(!0);
                    }, [n, ee, me, be]);
                const _e = a.useCallback(
                        () =>
                            a.createElement(
                                c.Z,
                                {
                                    onPress: () => {
                                        J(!K);
                                    },
                                    style: Q.headerContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(a.Fragment, null, a.createElement($, { header: ne?.header || "", hovered: e, icon: ne?.icon, transitionDurationMS: j }), a.createElement(C.default, { style: [Q.chevronIcon, K && Q.openChevronIcon] })),
                            ),
                        [ne, K, J],
                    ),
                    xe = a.useCallback(() => a.createElement(u.Z, { childrenOuterStyle: Q.collapsedContentContainer, show: !K, type: "slide" }, a.createElement(F, { content: ne?.previewContent, easing: l.Z.bezier(0.25, 0.46, 0.45, 0.94), itemHeight: W, scrollDuration: j })), [K, ne]),
                    ve = a.useCallback(
                        () =>
                            a.createElement(
                                u.Z,
                                { childrenOuterStyle: { ...Q.messageStepsContentPanelContainer, ...(b ? Q.messageStepsDrawerExpandedContainer : g ? Q.messageStepsMobileExpandedContainer : {}) }, show: ge || K, type: "slide" },
                                a.createElement(T.Z, {
                                    isLoading: n,
                                    messageStepAccumulator: m,
                                    onCancelAutoScroll: () => {
                                        B(!0);
                                    },
                                    onRestartAutoScroll: () => {
                                        B(!1);
                                    },
                                    onShowTrace: () => z(!0),
                                    scrollViewRef: P,
                                }),
                            ),
                        [n, m, b, g, ge, K],
                    );
                a.useCallback(
                    () =>
                        a.createElement(
                            r.Z,
                            { style: Q.debugContainer },
                            a.createElement(o.ZP, {
                                disabled: ye <= 0,
                                icon: a.createElement(w.default, null),
                                onPress: () => {
                                    if (ye > 0) {
                                        const e = ye - 1;
                                        fe(e), ae({ id: be[e].id, header: be[e].header, icon: be[e].icon, previewContent: be[e].previewContent });
                                    }
                                },
                                size: "small",
                                style: Q.debugButton,
                            }),
                            a.createElement(o.ZP, {
                                disabled: ye >= be.length - 1,
                                icon: a.createElement(C.default, null),
                                onPress: () => {
                                    if (ye < be.length - 1) {
                                        const e = ye + 1;
                                        fe(e), ae({ id: be[e].id, header: be[e].header, icon: be[e].icon, previewContent: be[e].previewContent });
                                    }
                                },
                                size: "small",
                                style: Q.debugButton,
                            }),
                        ),
                    [be, ye],
                );
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        u.Z,
                        { childrenOuterStyle: Q.container, show: ee || q, type: "slide" },
                        (!ge || q) && a.createElement(a.Fragment, null, _e(), xe()),
                        ve(),
                        V &&
                            a.createElement(M.Z, {
                                completed: me,
                                isPastSummary: ue,
                                onDismissed: () => {
                                    z(!1), v.scribe({ element: "message-steps-close-trace", action: "click" });
                                },
                                trace: ce,
                            }),
                        a.createElement(I.Z, { completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: m }),
                    ),
                    le ? a.createElement(R.E, { onDrawerDismiss: () => re(null), paginationOptions: { numResultsPerPage: 25 }, webResults: le }) : null,
                    se ? a.createElement(O.a, { onDrawerDismiss: () => oe(null), paginationOptions: { numResultsPerPage: 25 }, postIds: se }) : null,
                    !1,
                );
            }
            const X = a.memo(({ webResult: e }) => {
                    const [t, n] = a.useState(!1),
                        l = e.favicon_base64 || e.favicon,
                        c = a.useCallback(() => a.createElement(r.Z, { style: Q.hoverCardContainer }, a.createElement(A.p, { item: e })), [e]);
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
                                style: [Q.pill, Q.pillButton],
                            },
                            a.createElement(r.Z, { style: Q.pillButtonContent }, l && !t ? a.createElement(i.Z, { onError: () => n(!0), source: l, style: Q.pillIcon }) : a.createElement(E.default, { style: Q.pillIcon }), a.createElement(r.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                G = a.memo(({ xPostId: e }) => {
                    const t = a.useMemo(() => P.Z.createHydratorForTweet(e), [e]),
                        n = a.useCallback(
                            () =>
                                a.createElement(
                                    r.Z,
                                    { style: Q.hoverCardContainer },
                                    a.createElement(Z.Z, {
                                        isCondensed: !0,
                                        onPress: (e) => {
                                            b.ZP.isTwitterApp();
                                        },
                                        tweetId: e,
                                        withBirdwatchPivot: !1,
                                        withLink: !0,
                                        withUserHoverCard: !1,
                                    }),
                                ),
                            [e],
                        ),
                        l = (0, v.v9)(t);
                    return l
                        ? a.createElement(
                              p.Z,
                              { renderContent: n },
                              a.createElement(
                                  o.ZP,
                                  {
                                      backgroundColor: "gray50",
                                      borderColor: "gray200",
                                      onPress: () => {
                                          window.open(l.permalink, "_blank");
                                      },
                                      size: "small",
                                      style: [Q.pill, Q.pillButton],
                                  },
                                  a.createElement(r.Z, { style: Q.pillButtonContent }, a.createElement(i.Z, { source: { uri: l.user.profile_image_url_https }, style: Q.pillIcon }), a.createElement(r.Z, null, a.createElement(s.ZP, { numberOfLines: 1, style: Q.pillMonospaceText, weight: "normal" }, `@${l.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                Y = a.memo(({ style: e, xPostId: t }) => {
                    const n = a.useMemo(() => P.Z.createHydratorForTweet(t), [t]),
                        l = (0, v.v9)(n);
                    return l ? a.createElement(i.Z, { source: { uri: l.user.profile_image_url_https }, style: [Q.pillIcon, e] }) : null;
                }),
                Q = m.default.create((e) => ({
                    container: { marginBottom: e.spaces.space16, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both", overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "all 0.2s ease" },
                    collapsedContentContainer: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16 },
                    collapsedContent: { display: "flex", flexDirection: "column", justifyContent: "center", gap: e.spaces.space8, width: "100%" },
                    headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space16, paddingBottom: e.spaces.space8 },
                    leftHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, transition: "opacity 0.2s ease" },
                    leftHeaderContainerHovered: { opacity: 0.8 },
                    chevronIcon: { width: e.spaces.space16, height: e.spaces.space16, transform: [{ rotate: "0deg" }], transition: "transform 0.2s ease", color: e.colors.gray900 },
                    openChevronIcon: { transform: [{ rotate: "90deg" }] },
                    messageStepsContentPanelContainer: { height: 450 },
                    messageStepsDrawerExpandedContainer: { height: 180 },
                    messageStepsMobileExpandedContainer: { height: 300 },
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
                }));
        },
        567778: (e, t, n) => {
            n.d(t, { w: () => v });
            var a = n(202784),
                l = n(992942),
                r = n(154003),
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
                x = o().cdace6d2,
                v = ({ upsell: e }) => {
                    (0, u.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? a.createElement(p.e, { button: a.createElement(P, null), text: w, title: E }) : a.createElement(p.e, { button: a.createElement(P, { referringPage: y }), text: b, title: C })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(P, { referringPage: y }), text: b, title: C }) : "free_image_understanding_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(P, null), image: a.createElement(l.Z, { source: { uri: d }, style: { width: 102, height: 85 } }), text: _, title: Z }) : "free_image_generation_feature" === e.upsellType ? a.createElement(p.e, { button: a.createElement(P, null), image: a.createElement(l.Z, { source: { uri: m }, style: { width: 132, height: 115 } }), text: h, title: f }) : null;
                },
                P = ({ referringPage: e }) => {
                    const t = !!i.ZP.isWebView(),
                        n = (0, u.z)(),
                        l = a.useCallback(() => n.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [n]);
                    return a.createElement(r.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: l, size: "small", type: "primaryFilled" }, x);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bd027025.f03015ba.js.map
