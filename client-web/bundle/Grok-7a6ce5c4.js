"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7a6ce5c4"],
    {
        228283: (e, t, n) => {
            n.d(t, { R: () => g });
            n(136728);
            var a = n(202784),
                s = n(325686),
                r = n(392237),
                i = n(674132),
                o = n.n(i),
                l = n(166852),
                c = n(916559),
                u = n(520595),
                d = n(94135),
                m = n(649328);
            const p = o().a3186bff,
                h = o().f9b2d343,
                g = a.memo(({ isAnimated: e, postIds: t, webResults: n }) => {
                    const [r, i] = a.useState(!1),
                        [o, g] = a.useState(!1),
                        y = a.useCallback(() => {
                            i(!0);
                        }, []),
                        b = a.useCallback(() => {
                            i(!1);
                        }, []),
                        x = a.useCallback(() => {
                            g(!0);
                        }, []),
                        w = a.useCallback(() => {
                            g(!1);
                        }, []),
                        E = (0, m.x)({ postIds: t }),
                        k = a.useMemo(() => (0, l.Z)(n.map((e) => e.favicon_base64).filter(Boolean)), [n]),
                        v = a.useRef([]),
                        C = "postIds",
                        S = "webResults";
                    return (
                        t.length > 0 && !v.current.includes(C) && v.current.push(C),
                        n.length > 0 && !v.current.includes(S) && v.current.push(S),
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                s.Z,
                                { style: f.container },
                                v.current.map((s) => (s === C ? a.createElement(d.a, { images: E, key: "post_ids_button", label: h({ count: t.length }), onClick: y, withAnimation: e }) : s === S ? a.createElement(d.a, { images: k, key: "web_results_button", label: p({ count: n.length }), onClick: x, withAnimation: e }) : void 0)),
                            ),
                            r ? a.createElement(u.a, { onDrawerDismiss: b, paginationOptions: { numResultsPerPage: 15 }, postIds: t }) : null,
                            o ? a.createElement(c.E, { onDrawerDismiss: w, paginationOptions: { numResultsPerPage: 25 }, webResults: n }) : null,
                        )
                    );
                }),
                f = r.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap" } }));
        },
        617568: (e, t, n) => {
            n.d(t, { w: () => y });
            n(136728), n(901951);
            var a = n(202784),
                s = n(719870),
                r = n(325686),
                i = n(731708),
                o = n(392237),
                l = n(187669),
                c = n(33474),
                u = n(342430),
                d = n(910594),
                m = n(978921),
                p = n(122670);
            function h({ children: e, token: t }) {
                if (e && e.length) return a.createElement(i.ZP, { color: "gray900", size: "subtext2", style: b.text }, e);
                const n = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return a.createElement(i.ZP, { color: "gray900", size: "subtext2", style: b.text }, n);
            }
            function g({ token: e }) {
                const t = a.useMemo(() => {
                    const t = [];
                    return (
                        e.tokens?.length &&
                            e.tokens.forEach((e, n) => {
                                const s = `${n}`;
                                t.push(a.createElement(g, { key: s, token: e }));
                            }),
                        t
                    );
                }, [e.tokens]);
                switch (e.type) {
                    case "link":
                        return a.createElement(d.Z, { token: e });
                    case "heading":
                        return a.createElement(c.X, { token: e }, t);
                    case "strong":
                        return a.createElement(i.ZP, { color: "gray900", size: "subtext2", weight: "bold" }, a.createElement(h, { token: e }, t));
                    case "blockLatex":
                        return a.createElement(u.Z, { content: e.text, isBlock: !0 });
                    case "inlineLatex":
                        return a.createElement(u.Z, { content: e.text });
                    default:
                        return a.createElement(h, { token: e }, t);
                }
            }
            function f({ blockSizes: e, index: t, last: n, setBlockHeight: i, text: o }) {
                const [l, c] = a.useState(-1),
                    u = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const n = e.layout.height;
                            n !== l && (c(n), i(t, n));
                        },
                        [t, c, i, l],
                    ),
                    d = a.useMemo(() => {
                        let n = 0;
                        for (let a = 0; a < t; a++) (n += e[a] || 0), (n += 10);
                        return n;
                    }, [t, e]),
                    m = a.useMemo(() => {
                        return s.TU.lexer(((e = o), /^\s*[-*+]\s+/.test(e) ? e.replace(/^(\s*)[-*+]\s+/, "$1• ") : /^\s*\d+.\s+/.test(e) ? e.replace(/^(\s*)(\d+).\s+/, "$1$2 ") : e)).map((e, t) => a.createElement(g, { key: `parsedToken-${t}`, token: e }));
                        var e;
                    }, [o]);
                return a.createElement(r.Z, { onLayout: u, style: { width: "100%", top: d, position: "absolute", opacity: l >= 0 ? 1 : 0.1 } }, m);
            }
            function y({ charLimit: e, text: t }) {
                const n = a.useRef(0);
                (0, l.q)(() => {
                    n.current = Math.max(0, t.split("\n\n").length - 4);
                });
                const s = a.createRef(),
                    [i, o] = a.useState([]),
                    c = a.useRef({ curr: 0, currSmoothed: 0, target: 0, alpha: 0.01, beta: 0, velocity: 0, lastTimestamp: 0 }),
                    [u, d] = a.useState(0),
                    m = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const t = e.layout.height;
                            d(t), c.current.currSmoothed || (c.current.currSmoothed = 0.5 * t);
                        },
                        [d],
                    ),
                    p = a.useCallback(
                        (e, t) => {
                            o((n) => {
                                const a = [...n];
                                return (a[e] = t), a;
                            });
                        },
                        [o],
                    ),
                    h = a.useMemo(
                        () =>
                            t
                                .split("\n\n")
                                .slice(n.current)
                                .map((e, t) => ({ idx: t, blockText: e })),
                        [t],
                    ),
                    g = a.useMemo(() => {
                        const t = [];
                        let n = e || 1200,
                            a = h.length - 1;
                        const s = (function (e) {
                            const t = e.findIndex((e) => void 0 === e);
                            return -1 === t ? e.length : t;
                        })(i);
                        for (; a >= 0 && (n >= 0 || a >= s); ) t.unshift(h[a]), (n -= h[a].blockText.length), a--;
                        return t;
                    }, [h, i, e]),
                    y = t.length > 0;
                return (
                    a.useEffect(() => {
                        y && i.length && h.length && (c.current.target = i.reduce((e, t) => (e || 0) + (t || 0), 0) + 10 * h.length);
                    }, [h, y, i]),
                    a.useEffect(
                        (e) => {
                            let t,
                                n = !0;
                            return (
                                (t = requestAnimationFrame(function e(a) {
                                    const r = c.current;
                                    0 === r.lastTimestamp && (r.lastTimestamp = a);
                                    let i = Math.min(a - r.lastTimestamp, 100);
                                    i < 0.001 && (i = 0.001), (r.lastTimestamp = a);
                                    const o = r.curr + r.velocity * i,
                                        l = r.target - o;
                                    (r.curr = o + r.alpha * l), (r.velocity = r.velocity + (r.beta * l) / i);
                                    let d = Math.floor(-r.curr + 0.95 * u);
                                    const m = u ? Math.max(0, d / u) : 1;
                                    (d -= m * u * 0.7),
                                        (r.currSmoothed += (d - r.currSmoothed) / 30),
                                        s.current &&
                                            ((s.current.style.top = `${r.currSmoothed}px`),
                                            (s.current.style.filter = `blur(${2 * m}px)`),
                                            (s.current.style.opacity =
                                                "" +
                                                (1 -
                                                    (function (e, t, n) {
                                                        let a = Math.max(e, Math.min(t, n));
                                                        return (a = (a - e) / (t - e)), a * a * (3 - 2 * a);
                                                    })(0.5, 1, m)))),
                                        n && (t = requestAnimationFrame(e));
                                })),
                                () => {
                                    cancelAnimationFrame(t), (n = !1);
                                }
                            );
                        },
                        [s, u],
                    ),
                    a.createElement(r.Z, { onLayout: m, style: { flex: 1, overflow: "hidden" } }, a.createElement(r.Z, { ref: s, style: { paddingEnd: 12, position: "absolute", width: "95%" } }, g && g.map((e, t) => a.createElement(f, { blockSizes: i, index: e.idx, key: `block${e.idx}`, last: !1, setBlockHeight: p, text: e.blockText }))))
                );
            }
            s.TU.use({ extensions: [p._, ...m.Z] });
            const b = o.default.create((e) => ({ text: { lineHeight: e.lineHeights.subtext2 } }));
        },
        813107: (e, t, n) => {
            n.d(t, { I: () => c });
            var a = n(202784),
                s = n(325686),
                r = n(366635),
                i = n(392237),
                o = n(125363),
                l = n(919022);
            const c = ({ screenName: e }) => {
                    const t = (0, o.I0)(),
                        n = (0, o.v9)((t) => l.ZP.selectByScreenName(t, e));
                    return (
                        a.useEffect(() => {
                            t(l.ZP.fetchOneByScreenNameIfNeeded(e));
                        }, [t, e]),
                        n ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: u.container }, a.createElement(r.Z, { isVerified: n.is_blue_verified, name: n.name, profileImageUrl: n.profile_image_url_https, screenName: n.screen_name, withStackedLayout: !0 }))) : null
                    );
                },
                u = i.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor }, header: { fontSize: e.fontSizes.body } }));
        },
        917270: (e, t, n) => {
            n.d(t, { O: () => y });
            var a = n(202784),
                s = n(325686),
                r = n(525271),
                i = n(721266),
                o = n(392237),
                l = n(674132),
                c = n.n(l),
                u = n(323265),
                d = n(725516),
                m = n(54957),
                p = n(739070),
                h = n(884058),
                g = n(302176);
            const f = c().b61ad410,
                y = ({ onDrawerDismiss: e }) => a.createElement(r.Z, { align: "right", buttonType: "primaryText", onDismissed: e, style: x.drawer, title: f, withBackgroundBlur: !0 }, a.createElement(b, { onDrawerDismiss: e })),
                b = ({ onDrawerDismiss: e }) => {
                    const t = (0, d.z)(),
                        [n, r] = a.useState(g.G.all),
                        [o, l] = a.useState(Math.random()),
                        [c, f] = a.useState(void 0),
                        y = a.useCallback(
                            (e) => {
                                t.scribe({ element: "grok_search", action: "submit" }), f(encodeURIComponent(e)), l(Math.random());
                            },
                            [t],
                        ),
                        b = a.useMemo(() => (n === g.G.images ? a.createElement(h.v, null) : n === g.G.pins ? a.createElement(p.s, null) : a.createElement(m.c, { onHistoryLinkClicked: e, onSearchSubmit: y, searchKey: o, searchValue: c ?? "" })), [c, o, n, e, y]);
                    return a.createElement(s.Z, { style: x.container }, u.ZP.isWebView() ? a.createElement(i.Z, { size: "space56" }) : null, a.createElement(s.Z, { style: x.headerContainer }, a.createElement(s.Z, { style: x.contentContainer }, a.createElement(s.Z, { style: x.staticContentContainer }, a.createElement(g.k, { onTabChange: r, selectedTab: n })))), a.createElement(s.Z, { style: x.scrollSection }, a.createElement(s.Z, { style: x.innerContentContainer }, b)));
                },
                x = o.default.create((e) => ({ container: { width: "100%", height: "100%", flexDirection: "column", position: "relative" }, headerContainer: { width: "100%" }, mainContainer: { flex: 1, display: "flex", flexDirection: "column", height: "100%" }, contentContainer: { flex: 1 }, staticContentContainer: { width: "100%", maxWidth: 500, flexShrink: 0 }, drawer: { width: 440 }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, scrollView: { flex: 1, width: "100%", marginTop: 0 }, innerContentContainer: { paddingTop: 0, height: "100%" }, scrollSection: { flex: 1, position: "relative" }, searchSection: { flexShrink: 0, width: "100%" } }));
        },
        916559: (e, t, n) => {
            n.d(t, { E: () => m });
            var a = n(202784),
                s = n(325686),
                r = n(525271),
                i = n(392237),
                o = n(674132),
                l = n.n(o),
                c = n(809311),
                u = n(193285);
            const d = l().d7cb5408,
                m = ({ onDrawerDismiss: e, paginationOptions: t, webResults: n }) => {
                    const [i, o] = a.useState(0),
                        [l, m] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        h = t && n.length > t.numResultsPerPage,
                        g = a.useCallback(
                            (e) => {
                                if ((o(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        s = a + t.numResultsPerPage;
                                    m(n.slice(a, s));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, title: d },
                        a.createElement(
                            s.Z,
                            { style: p.container },
                            h && a.createElement(u.Z, { currentPageIdx: i, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: g, total: n.length }),
                            l.map((e, t) => a.createElement(c.p, { item: e, key: `web_result_${t}`, number: h ? void 0 : t + 1 })),
                        ),
                    );
                },
                p = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, gap: e.spaces.space12, marginBottom: e.spaces.space32, paddingHorizontal: e.spaces.space16 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(136728);
            var a = n(202784),
                s = n(325686),
                r = n(154003),
                i = n(392237),
                o = n(97301),
                l = n(58399);
            const c = 5;
            function u({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: i, total: u }) {
                const m = t > 0 ? Math.ceil(u / t) : 1,
                    p = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < m; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [m, e]),
                    h = a.useCallback(() => {
                        e < m - 1 && n(e + 1);
                    }, [e, n, m]),
                    g = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    f = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(m - 1, n + c - 1);
                        a === m - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(p[e]);
                        return t;
                    }, [p, e, m]);
                return a.createElement(
                    s.Z,
                    { style: [d.container, i] },
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(o.default, { style: d.chevron }), onClick: g, size: "small", style: d.button }),
                    a.createElement(
                        s.Z,
                        { style: d.pageNumContainer },
                        f.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: d.button }, e.text)),
                    ),
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= m - 1, icon: a.createElement(l.default, { style: d.chevron }), onClick: h, size: "small", style: d.button }),
                );
            }
            const d = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => h });
            var a = n(202784),
                s = n(325686),
                r = n(525271),
                i = n(392237),
                o = n(674132),
                l = n.n(o),
                c = n(400196),
                u = n(306677),
                d = n(725405),
                m = n(193285);
            const p = l().b58d2bd2,
                h = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, topBarStyle: o, withTransparentMask: l }) => {
                    const [c, u] = a.useState(0),
                        [d, h] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        y = t && n.length > t.numResultsPerPage,
                        b = a.useCallback(
                            (e) => {
                                if ((u(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        s = a + t.numResultsPerPage;
                                    h(n.slice(a, s));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: p, topBarStyle: o, withTransparentMask: l },
                        a.createElement(
                            s.Z,
                            { style: f.container },
                            y && a.createElement(m.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            d.map((e) => a.createElement(g, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                g = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, d.Z)(),
                        r = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(s.Z, { key: `post_${e}`, style: f.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(u.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                f = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        30827: (e, t, n) => {
            n.d(t, { U: () => S });
            var a = n(202784),
                s = n(325686),
                r = n(392237),
                i = n(952793),
                o = n(988290);
            n(543673), n(240753), n(128399), n(136728);
            const l = /^(https?:\/\/)(?:www\.)?(x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/([0-9]+)/;
            function c(e, t, n, a) {
                const { allowXPostEmbeds: s, allowYoutubeEmbeds: r } = a,
                    i = (function (e) {
                        const t = /\[.*?\]\((.*?)\)/g,
                            n = e.matchAll(t);
                        return Array.from(n, (e) => e[1]).filter((e) => {
                            try {
                                return new URL(e), !0;
                            } catch (e) {
                                return !1;
                            }
                        });
                    })(e),
                    o = [];
                if (r) {
                    i.filter((e) => {
                        const t = new URL(e);
                        return "www.youtube.com" === t.hostname && t.searchParams.get("v");
                    }).forEach((e) => {
                        const n = new URL(e),
                            a = n.searchParams.get("v"),
                            s = t.find((t) => t.url === e);
                        "www.youtube.com" === n.hostname && a && s && o.push(`https://www.youtube.com/embed/${a}`);
                    });
                }
                const c = [];
                if (s) {
                    i.filter((e) => l.test(e)).forEach((e) => {
                        const t = (function (e) {
                            try {
                                const t = e.match(l);
                                return t ? t[4] : null;
                            } catch (e) {
                                return null;
                            }
                        })(e);
                        t && n.includes(t) && !c.includes(t) && c.push(t);
                    });
                }
                return { embeddedYoutubeVideoURLs: o.slice(0, 1), embeddedPostIds: c.slice(0, 3) };
            }
            var u = n(530732),
                d = n(823161),
                m = n(366635),
                p = n(966886),
                h = n(650028),
                g = n(451051),
                f = n(103737),
                y = n(125363),
                b = n(836255);
            function x({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: i, postId: o, style: l, tweetTextStyle: c }) {
                const x = a.useMemo(() => b.Z.createHydratorForTweet(o), [o]),
                    E = (0, y.v9)(x);
                if (!E) return null;
                const { created_at: k, text: v, user: C } = E;
                return a.createElement(
                    u.Z,
                    {
                        onClick: () => {
                            i && i(), window.open(`https://x.com${E.permalink}`, "_blank");
                        },
                        style: [w.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        a.createElement(
                            s.Z,
                            { style: [w.container, e ? w.hoveredContainer : void 0, l] },
                            a.createElement(s.Z, { style: w.headerContainer }, a.createElement(s.Z, { style: w.nameContainer }, a.createElement(d.default, { "aria-label": C.name, borderColor: "gray700", borderWidth: "small", screenName: C.screen_name, size: t ? "medium" : "large", uri: C.profile_image_url_https, withHoverCard: !0, withLink: !0 }), a.createElement(m.Z, { affiliateBadgeInfo: C.highlightedLabel, isBlueVerified: C.is_blue_verified, isVerified: C.verified, name: C.name, nameSize: t ? "subtext2" : "subtext1", screenName: C.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: w.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: C.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), a.createElement(p.Z, { humanReadable: !1, style: [w.timestamp, { fontSize: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2, lineHeight: t ? r.default.theme.fontSizes.subtext3 : r.default.theme.fontSizes.subtext2 }], timestamp: k })),
                            E.in_reply_to_screen_name && a.createElement(h.ZP, { displayTextRange: E.display_text_range, inReplyToName: E.in_reply_to_name, inReplyToScreenName: E.in_reply_to_screen_name, inReplyToUserIdStr: E.in_reply_to_user_id_str, linkType: h.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: E.permalink }),
                            a.createElement(g.Z, { displayTextRange: E.display_text_range, entities: E.entities, isCondensed: t, numberOfLines: n, style: [w.tweetText, c], text: v }),
                            (!t || !v) &&
                                (E.extended_entities?.media ?? []).map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return a.createElement(f.Z, { displayMediaTags: !1, hasSensitiveMedia: E.possibly_sensitive, isCondensed: t, key: `media_${E.id_str}_${e.id_str}`, mediaContentStyles: w.media, mediaDetails: [n], mediaVisibilityResults: E.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: E.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                        ),
                );
            }
            const w = r.default.create((e) => ({ interactiveContainer: { height: "100%", flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray100 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2 }, media: {} })),
                E = ({ numberOfLines: e, postIds: t, style: n }) =>
                    a.createElement(
                        s.Z,
                        { style: [k.container, n] },
                        t.map((t, n) => a.createElement(x, { containerStyle: k.postContainer, isPreview: !0, key: t, numberOfLines: e || 5, postId: t, style: [k.post, { animationDelay: 0.1 * n + "s" }], tweetTextStyle: k.postText })),
                    ),
                k = r.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", flex: 1, gap: e.spaces.space12 }, postContainer: { flex: 1 }, post: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, postText: { fontSize: e.fontSizes.subtext1 } })),
                v = ({ style: e, url: t }) => a.createElement(s.Z, { style: C.embeddedYoutubeVideoContainer }, a.createElement("iframe", { allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: !0, height: "100%", referrerPolicy: "strict-origin-when-cross-origin", src: t, style: C.embeddedYoutubeVideo, title: "YouTube video player", width: "100%" })),
                C = r.default.create((e) => ({ embeddedYoutubeVideoContainer: { width: "100%", aspectRatio: 16 / 9, borderRadius: e.borderRadii.medium, overflow: "hidden" }, embeddedYoutubeVideo: { border: "none" } })),
                S = ({ postIds: e, response: t, style: n, webResults: r }) => {
                    const { isCompactLayout: l, isGrokDrawer: u } = (0, o.ZP)(),
                        d = (0, i.hC)("responsive_web_grok_allow_youtube_embeds"),
                        m = (0, i.hC)("responsive_web_grok_allow_x_post_embeds"),
                        p = a.useMemo(() => c(t, r, e, { allowXPostEmbeds: m, allowYoutubeEmbeds: d }), [t, r, e, m, d]);
                    return 0 === p.embeddedPostIds.length && 0 === p.embeddedYoutubeVideoURLs.length ? null : a.createElement(s.Z, { style: [_.container, n] }, m && p.embeddedPostIds.length > 0 && a.createElement(E, { numberOfLines: u || l ? 3 : void 0, postIds: p.embeddedPostIds, style: _.embeddedXPosts }), d && p.embeddedYoutubeVideoURLs.map((e) => a.createElement(v, { key: e, url: e })));
                },
                _ = r.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, embeddedXPosts: { width: "100%" } }));
        },
        263160: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                s = n(392237),
                r = n(370751),
                i = n(725516),
                o = n(623494);
            function l() {
                const e = a.useRef((0, r.Z)([])),
                    t = (0, i.z)();
                return a.useMemo(
                    () => ({
                        buttonsContainerStyle: c.buttonsContainer,
                        navButtonStyle: c.navButtons,
                        onVisibleRangeChange: ({ index: n, intersectionRatio: a }) => {
                            if (1 !== a) return;
                            if (0 === n) return;
                            const s = e.current;
                            s.has(n) || ((0, o.hf)(t, n), s.add(n));
                        },
                    }),
                    [t],
                );
            }
            const c = s.default.create((e) => ({ buttonsContainer: {}, navButtons: {} }));
        },
        988290: (e, t, n) => {
            n.d(t, { BQ: () => i, ZP: () => o });
            var a = n(202784);
            const s = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                r = a.createContext(s);
            function i({ children: e, isCompactLayout: t, isEditingEnabled: n, isGrokDrawer: s, isGrokShare: i, isPagedScroll: o, isShowButtons: l, isShowCarousel: c, scrollable: u }) {
                return a.createElement(r.Provider, { value: { scrollable: u, isCompactLayout: t, isShowButtons: l, isEditingEnabled: n, isShowCarousel: c, isPagedScroll: o, isGrokShare: i, isGrokDrawer: s } }, e);
            }
            function o() {
                return a.useContext(r);
            }
        },
        466385: (e, t, n) => {
            n.d(t, { X: () => c });
            var a = n(202784),
                s = n(984636),
                r = n.n(s),
                i = n(166852),
                o = n(125363),
                l = n(836255);
            function c({ mediaIds: e }) {
                const t = (0, o.oR)(),
                    n = e.map((e) => l.Z.selectHydrated(t.getState(), e)).filter(Boolean);
                function s(e) {
                    return e?.entities?.media ? e.entities.media.filter((e) => "photo" === e.type) : [];
                }
                const c = (0, i.Z)(n)
                        .map((e) => ({ tweet: e, photos: s(e) }))
                        .filter((e) => e.photos.length > 0)
                        .sort((e, t) => t.tweet.favorite_count - e.tweet.favorite_count)
                        .slice(0, 5)
                        .flatMap((e) => e.photos)
                        .filter(Boolean),
                    u = r()(c, "media_url_https").slice(0, 5),
                    d = u.map((e) => e.media_key).filter(Boolean);
                return a.useMemo(() => u, [d.join(",")]);
            }
        },
        819102: (e, t, n) => {
            n.d(t, { u: () => r });
            var a = n(202784);
            const s = 2;
            function r(e, t) {
                const n = a.useRef(),
                    [r, o] = a.useState(!1);
                let l = e;
                if (t && r) {
                    const t = i(e);
                    t > -1 && (l = e.substring(0, t));
                }
                return (
                    a.useEffect(() => {
                        t &&
                            (o(!0),
                            n.current && clearTimeout(n.current),
                            (n.current = window.setTimeout(() => {
                                o(!1);
                            }, 1e3 * s)));
                    }, [t, l]),
                    l
                );
            }
            const i = (e) => {
                let t = -1;
                (e.match(/\*\*/g) ?? []).length % 2 == 1 && (t = e.lastIndexOf("**"));
                let n = -1;
                const a = e.lastIndexOf("[](");
                a > e.lastIndexOf(")") && (n = a);
                let s = -1;
                const r = e.lastIndexOf("\\[");
                r > e.lastIndexOf("]") && (s = r);
                let i = -1;
                const o = e.lastIndexOf("\\(");
                o > e.lastIndexOf("\\)") && (i = o);
                let l = -1;
                const c = e.lastIndexOf("\n"),
                    u = e.substring(c).trim();
                (u.startsWith("-") || 0 === u.length) && (l = c);
                let d = -1;
                /^\d+\.?/.test(u) && (d = c);
                const m = [t, s, i, l, d, n].filter((t) => -1 !== t && t > e.length - 100);
                return 0 === m.length ? e.length : Math.min(...m);
            };
        },
        413145: (e, t, n) => {
            n.d(t, { y: () => C });
            var a = n(202784),
                s = n(325686),
                r = n(721266),
                i = n(392237),
                o = n(323265),
                l = n(125363),
                c = n(389071),
                u = n(189953),
                d = n(654917),
                m = n(730372),
                p = n(293115),
                h = n(725405),
                g = n(155918),
                f = n(919022),
                y = n(464023),
                b = n(22463),
                x = n(667945),
                w = n(848957);
            const E = i.default.create((e) => ({ container: { width: "100%", alignItems: "center" } })),
                k = function ({ analysisEntityId: e, containerRef: t, conversationKey: n, id: r, isLastResponse: i, isLoading: o, onLayout: u }) {
                    const d = (0, c.bD)(n),
                        m = (0, h.Z)(),
                        k = (0, l.v9)((e) => d?.selectUsingExperiment(e)),
                        v = (0, l.v9)((e) => d?.selectExperiments(e)),
                        C = (0, l.v9)((e) => d.selectMessageById(e, r, !1)),
                        S = (0, l.v9)((e) => d?.selectConversationId(e)) ?? "",
                        _ = (0, l.v9)((e) => d.selectMessageById(e, r, !0)),
                        I = (0, l.v9)((e) => d.selectPromptSourceForMessageId(e, r)),
                        P = (0, l.v9)(f.ZP.selectViewerUser),
                        R = (0, l.v9)((e) => f.ZP.select(e, y.c0)),
                        Z = C?.sender === g.CI.ASSISTANT,
                        T = Z ? R : P,
                        M = a.useMemo(() => C?.bannerMessages ?? [], [C?.bannerMessages]),
                        D = a.useMemo(() => ({ grok_details: { ...(m.contextualScribeData.grok_details ?? {}), chat_item_id: C?.agentChatItemId } }), [m, C?.agentChatItemId]);
                    return P && C && T ? (k && Z && (C?.message === (v[0]?.message ?? null) || null == r) ? a.createElement(s.Z, { onLayout: u, ref: t, style: E.container }, a.createElement(p.nO, { data: D }, a.createElement(w.Z, { conversationId: S, grokModule: d, isLoading: o, message1: v[0] ?? C, message2: v[1] ?? _ }))) : a.createElement(s.Z, { onLayout: u, ref: t, style: E.container }, Z ? a.createElement(p.nO, { data: D }, a.createElement(x.Z, { analysisEntityId: e, bannerMessages: M, cardAttachments: C.cardAttachments, chatItemId: C.agentChatItemId, chatResponseAnnotations: C.chatResponseAnnotations, citedWebResults: C.citedWebResults, conversationKey: n, deepSearchSummaryAccumulator: C.deepSearchSummaryAccumulator, disclaimer: C.disclaimer, expectedImageAspectRatio: C.expectedImageAspectRatio, fileAttachments: C.fileAttachments, followUpSuggestedMode: C.followUpSuggestedMode, id: r, intermediateImageResults: C.intermediateImageResults, isAborted: C.isAborted, isDeleted: C.isDeleted, isLastResponse: i, isLoading: o, isPastThinkingTrace: C.isPastThinkingTrace, mediaTweetIds: C.xMediaPostIds, memoryReferences: C.memoryReferences, performanceMetrics: C.performanceMetrics, promptSource: I, query: C.query, sender: C.sender, text: C.message, trace: C.thinkingTrace, tweetIds: C.postIds, upsell: C.upsell, userChatItemId: C.userChatItemId || "", webResults: C.webResults })) : a.createElement(b.Z, { bannerMessages: M, conversationKey: n, fileAttachments: C.fileAttachments, hideAttachments: C.hideAttachments, id: r, isDeepsearch: C.isDeepsearch, isReasoning: C.isReasoning, text: C.message, user: { profile_image_shape: T.profile_image_shape, profile_image_url_https: T.profile_image_url_https } }))) : null;
                };
            var v = n(988290);
            const C = ({ contentPadding: e }) => {
                    const { analysisEntityId: t, conversationKey: n, messageIds: i, status: p } = (0, d.ZP)(),
                        { isPagedScroll: h, scrollable: g } = (0, v.ZP)(),
                        f = (0, c.bD)(n),
                        y = (0, l.v9)(f.selectEditingMessage);
                    (0, m.$E)();
                    const b = a.useMemo(() => (p !== u.Q_.IDLE ? [...i, null] : i), [p, i]),
                        x = o.ZP.isWebView(),
                        w = a.useRef(0);
                    a.useEffect(() => {
                        const e = () => {
                            const e = g ? (g === window ? window.innerHeight : g.scrollHeight) : 0;
                            w.current = Math.max(e, w.current);
                        };
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
                    }, [g]);
                    const E = p === u.Q_.IDLE ? void 0 : b[b.length - 2],
                        C = a.useRef(),
                        [_, I] = a.useState(!1),
                        [P, R] = a.useState(0);
                    a.useLayoutEffect(() => {
                        if (!_ || (!y && E && h && P > 0)) {
                            I(!0);
                            const e = g === window ? document.body.scrollHeight : g?.scrollHeight;
                            g?.scroll({ top: e, behavior: "smooth" });
                        }
                    }, [E, y, _, h, P, g]);
                    const Z = a.useCallback(
                            (t) => {
                                const n = t.nativeEvent.layout.height;
                                let a = g === window ? g.innerHeight : (g?.clientHeight ?? 0);
                                x && (a = Math.max(w.current, a));
                                const s = n > 0.6 * a ? Math.max(0, a - e - 50) : Math.max(0, a - n - e);
                                R(s);
                            },
                            [g, x, e],
                        ),
                        T = a.useMemo(() => ({ minHeight: h ? P : 0 }), [P, h]),
                        M = a.useCallback(
                            ({ index: e, item: r }) => {
                                const i = b.length,
                                    o = r === E;
                                return o || e < i - 1 ? a.createElement(s.Z, { key: `message_${e}` }, a.createElement(k, { analysisEntityId: t, conversationKey: n, id: r, onLayout: o ? Z : void 0 })) : a.createElement(s.Z, { key: `message_${e}`, style: [S.lastResponse, T] }, a.createElement(k, { analysisEntityId: t, conversationKey: n, id: r, isLastResponse: !0, isLoading: p === u.Q_.TYPING || p === u.Q_.WAITING }));
                            },
                            [E, n, T, t, Z, p, b],
                        );
                    return a.createElement(
                        s.Z,
                        { ref: C, style: [S.content, h ? void 0 : S.bottomScroll] },
                        a.createElement(r.Z, { size: "space8" }),
                        a.createElement(
                            s.Z,
                            { style: { flexDirection: "column" } },
                            a.createElement(r.Z, { size: "space12" }),
                            b.map((e, t) => M({ item: e, index: t })),
                        ),
                    );
                },
                S = i.default.create((e) => ({ lastResponse: { width: "100%" }, content: { flexGrow: "1" }, bottomScroll: { overflow: "auto", flexDirection: "column-reverse", height: "fit-content", maxHeight: "100%", borderWidth: 15, borderColor: "green" } }));
        },
        378471: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784);
            function s({ style: e }) {
                return a.createElement(
                    "div",
                    { className: "flex gap-1 items-center", style: e },
                    a.createElement(
                        "svg",
                        { className: "text-secondary", height: "24", shapeRendering: "crispEdges", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "5", y: "16" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "6;10;10;16;16" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;5;5;16;16" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "11", y: "6" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "11;16;16;6;6" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "7;15;15;16;16" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "17", y: "16" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1; 0 0.8 0.8 1; 0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;4;4;11;11" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1; 0 0.8 0.8 1; 0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;15;15;7;7" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                    ),
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7a6ce5c4.df55a75a.js.map
