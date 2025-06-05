"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TV-e019dbda"],
    {
        664918: (e, t, r) => {
            r.d(t, { D0: () => i, c$: () => u, fD: () => o, iB: () => h, jk: () => l });
            var a = r(366097),
                s = r(163889);
            const c = 2,
                n = 1e3,
                o = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function i(e) {
                const t = (0, a.bL)(e);
                return t ? (d(t) ? (p(t) ? (t[1] ? o.AcceptAllCookies : t[2] ? o.RefuseNonEssentialCookies : ((0, s.ZP)("Invalid consent signal state"), o.Invalid)) : o.NotSet) : o.Invalid) : o.NotSet;
            }
            function l(e) {
                (0, a.kA)({ consent_version: c, text_version: n, 1: !0 }, e);
            }
            function u(e) {
                (0, a.kA)({ consent_version: c, text_version: n, 2: !0 }, e);
            }
            function d(e) {
                return !(e[1] && e[2]);
            }
            function p(e) {
                return e[1] || e[2];
            }
            function h(e) {
                const t = (0, a.bL)(e);
                return !t || !d(t) || !p(t) || t.consent_version < c || t.text_version < n;
            }
        },
        421023: (e, t, r) => {
            r.d(t, { A: () => a });
            const a = { page: "cookie_compliance_banner" };
        },
        6116: (e, t, r) => {
            r.d(t, { O: () => l });
            var a = r(202784),
                s = r(323265),
                c = r(725516),
                n = r(443781),
                o = r(664918),
                i = r(421023);
            function l() {
                const e = (0, c.z)(),
                    { featureSwitches: t } = a.useContext(n.rC),
                    r = !!s.ZP.getTwitterAppVersion(),
                    [l, u] = a.useState(() => o.iB(t) && !r);
                return {
                    isBannerOpen: l,
                    acceptAllCookies() {
                        e.scribe({ ...i.A, action: "click", element: "accept_all" }), o.jk(t), u(!1);
                    },
                    refuseNonEssentialCookies() {
                        e.scribe({ ...i.A, action: "click", element: "refuse_non_essential" }), o.c$(t), u(!1);
                    },
                };
            }
        },
        301410: (e, t, r) => {
            r.d(t, { i: () => m.ZP, z: () => k });
            var a = r(202784),
                s = r(928123),
                c = r.n(s),
                n = r(72845),
                o = r.n(n),
                i = r(57074),
                l = r.n(i),
                u = r(516951),
                d = r(88656),
                p = r(71620),
                h = r(163889),
                m = r(312771);
            const y = ({ render: e }) => e({ fetchStatus: m.ZP.LOADING, data: null, error: null, retry: u.Z });
            class f extends a.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, h.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const g = ({ query: e, queryRef: t, render: r }) => {
                    const a = c()(e, t);
                    return r({ fetchStatus: m.ZP.LOADED, data: a, error: null, retry: u.Z });
                },
                k = (e, t) =>
                    function ({ fetchPolicy: r = "store-or-network", render: s, variables: c }) {
                        const [n, i] = o()(e),
                            u = (0, p.n7)(t.errorConfig.context),
                            d = l()(c),
                            h = a.useCallback(() => {
                                i(d, { fetchPolicy: "network-only" });
                            }, [i, d]);
                        return (
                            a.useLayoutEffect(() => {
                                i(d, { fetchPolicy: r });
                            }, [r, i, d]),
                            n
                                ? a.createElement(
                                      a.Suspense,
                                      { fallback: a.createElement(y, { render: s }) },
                                      a.createElement(f, { errorHandler: u(t.errorConfig.options || {}), key: n.fetchKey, retry: h }, (t, r) => (t ? s({ fetchStatus: m.ZP.FAILED, error: t, data: null, retry: r }) : a.createElement(g, { query: e, queryRef: n, render: s }))),
                                  )
                                : null
                        );
                    };
        },
        942046: (e, t, r) => {
            r.r(t), r.d(t, { TVSearch: () => ee, default: () => re });
            r(136728), r(543673), r(240753), r(128399);
            var a = r(202784),
                s = r(396342),
                c = r(325686),
                n = r(879891),
                o = r(420412),
                i = r(392237),
                l = r(111677),
                u = r.n(l),
                d = r(2138),
                p = r(187669),
                h = r(363047),
                m = r(902641),
                y = r(273413),
                f = r(602737),
                g = r(91946),
                k = r(686010),
                b = r(787557),
                v = r(734261),
                S = r(815846),
                C = r(721152),
                _ = r(479890),
                w = r(183822),
                E = r(575626),
                R = r(898063),
                Z = r(602070),
                T = r(883432),
                P = r(125363),
                q = r(903558),
                x = r(919022),
                $ = r(673932),
                A = r(708411),
                L = r(283512),
                V = r(668214),
                N = r(250901),
                D = r(682461);
            const O = (0, V.Z)()
                .propsFromState(() => ({ search: N.IF }))
                .adjustStateProps(({ search: e }) => ({ typeaheadResults: e?.typeaheadResults }))
                .propsFromActions(() => ({ fetchTVSearchTypeaheadResults: D.H7, tvSearchStart: q.eX.tvSearchStart }))
                .withAnalytics({ page: "tv-search" });
            var B = r(366635),
                F = r(949626),
                z = r(965612),
                H = r(467537),
                I = r(752475),
                M = r(382880);
            var Q = r(725516);
            const U = { behavior: "smooth", block: "end", inline: "nearest" },
                X = (e) => {
                    const t = "topic" === e?.type ? e?.topic : void 0,
                        r = "user" === e?.type ? e?.id_str : void 0;
                    return { profile_id: r, search_details: { query: t || r } };
                },
                j = ({ isSelected: e, name: t, onSelect: r, result: s }) => {
                    const n = a.useRef(null),
                        o = (0, Q.z)();
                    (({ intersectionObserverOptions: e, onVisibleOnce: t, targetRef: r }) => {
                        const s = a.useMemo(
                            () =>
                                (0, M.Z)(() => {
                                    t();
                                }),
                            [t],
                        );
                        a.useEffect(() => {
                            if ("IntersectionObserver" in window) {
                                const t = new IntersectionObserver((e) => {
                                        e[0].intersectionRatio >= 0.5 && s();
                                    }, e),
                                    a = r.current;
                                return (
                                    null != a && t.observe(a),
                                    () => {
                                        t.disconnect();
                                    }
                                );
                            }
                        }, [s, e, r]);
                    })({
                        targetRef: n,
                        intersectionObserverOptions: { threshold: [0.5] },
                        onVisibleOnce: a.useCallback(() => {
                            o.scribe({ element: "typeahead", action: "impression", data: X(s) });
                        }, [o, s]),
                    });
                    const i = a.useCallback(() => {
                            o.scribe({ element: "typeahead", action: "focus", data: X(s) });
                        }, [o, s]),
                        l = a.useCallback(() => {
                            o.scribe({ element: "typeahead", action: "click", data: X(s) }), r?.(s);
                        }, [o, r, s]);
                    let u;
                    return "user" === s?.type ? (u = a.createElement(H.C, { "aria-label": void 0, name: t, onFocus: i, onPress: l, role: "link", scrollOptions: U, style: [K.root, e && K.selected], withBackgroundStyle: !0, withBorderStyle: !1 }, a.createElement(z.Z, { placeholder: a.createElement(F.Z, { style: K.placeholder }) }, s?.profile_image_url_https ? a.createElement(I.Z, { source: s?.profile_image_url_https, style: K.avatar, verifiedType: s.verified_type }) : null, a.createElement(c.Z, { style: K.userDetails }, a.createElement(B.Z, { affiliateBadgeInfo: s.highlightedLabel, badgeContext: "content", isBlueVerified: s.is_blue_verified, isProtected: s.is_protected, isVerified: s.verified, name: s.name, nameSize: "subtext1", screenName: s.screen_name, screenNameSize: "subtext2", verifiedType: s.verified_type, withLink: !1, withNameWrap: !0, withStackedLayout: !0 }))))) : "topic" === s?.type && (u = a.createElement(H.C, { "aria-label": void 0, name: t, onFocus: i, onPress: () => r?.(s), role: "link", style: [K.root, K.topicResult], withBackgroundStyle: !0, withBorderStyle: !1 }, a.createElement(z.Z, { placeholder: a.createElement(F.Z, { style: K.placeholder }) }, a.createElement(g.Kh, { size: "subtext1" }, s?.topic)))), a.createElement(c.Z, { ref: n }, u);
                },
                K = i.default.create((e) => ({ root: { alignItems: "center", borderRadius: e.borderRadii.small, color: e.colors.text, display: "flex", flexDirection: "row", gap: e.spaces.space8, marginVertical: e.spaces.space4, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space8, scrollMargin: e.spaces.space8, width: "100%" }, placeholder: { height: e.spaces.space48, width: 100 * e.scaleMultiplier }, topicResult: { paddingVertical: e.spaces.space12 }, selected: { backgroundColor: e.colors.gray200 }, avatar: { minWidth: e.spaces.space48, height: e.spaces.space48, width: e.spaces.space48 }, userAvatar: { borderRadius: e.borderRadii.infinite }, businessAvatar: { borderRadius: e.borderRadii.small }, userDetails: { flexDirection: "column" } })),
                W = u().b86c2e12,
                G = u().e5b0e544,
                J = /https:\/\/(?:www\.)?(?:x|twitter)\.com\/i\/tv\/trending\/([0-9]*)/,
                Y = ({ history: e }) =>
                    a.createElement(
                        c.Z,
                        { style: te.loggedOutSearchPrompt },
                        a.createElement(g.Kh, { size: "headline2" }, W),
                        a.createElement(
                            f.K,
                            {
                                autoFocus: !0,
                                name: "search-login-button",
                                onPress: () => {
                                    e.push(h.C2);
                                },
                            },
                            G,
                        ),
                    ),
                ee = ({ fetchTVSearchTypeaheadResults: e, history: t, tvSearchStart: r, typeaheadResults: i = { topics: [], users: [], size: 0 } }) => {
                    const l = (0, P.v9)(x.ZP.selectViewerUser),
                        [u, f] = a.useState(""),
                        g = (0, P.I0)(),
                        { direction: V } = (0, n.Z)(),
                        N = "rtl" === V,
                        D = a.useRef({ id: 0, lastEventTimeMs: 0, query: "" }),
                        O = new URLSearchParams(t.location.search).get("q"),
                        [B, F] = a.useState(O || ""),
                        z = a.useRef(B),
                        [H, I] = a.useState(!1),
                        M = a.useCallback(
                            (e) => {
                                F(e), (z.current = e);
                            },
                            [F],
                        ),
                        Q = a.useMemo(
                            () =>
                                (0, d.Z)(
                                    (t, r) => {
                                        e(t, r);
                                    },
                                    250,
                                    { leading: !1, trailing: !0 },
                                ),
                            [e],
                        );
                    (0, p.q)(() => {
                        Q({ q: B }, z);
                    });
                    const U = a.useCallback(
                            (e) => {
                                M(e), f(""), t.replace(`${t.location.pathname}?q=${e}`), Q({ q: e }, z);
                            },
                            [t, M, Q],
                        ),
                        X = a.useCallback(
                            (e) => {
                                switch ((I(!1), e.value)) {
                                    case "Backspace":
                                        return void U(z.current.substring(0, z.current.length - 1));
                                    case " ":
                                        return void U(`${z.current} `);
                                    case "Clear":
                                        return U(""), void g(q.eX.tvSearchResultsClear("search"));
                                    default:
                                        return void U(`${z.current}${e.value}`);
                                }
                            },
                            [g, U],
                        ),
                        K = a.useCallback(
                            (e) => {
                                let t;
                                return (0, s.setFocus)(`${E.sN}.${$.rQ}.${_.U}`), (t = "Backspace" === e.code || "Delete" === e.code ? { displayName: "Backspace", value: "Backspace" } : "Space" === e.code ? { displayName: "Space", value: " " } : { displayName: S.y[e.key[0].toLowerCase()] || "", value: S.y[e.key[0].toLowerCase()] || "" }), X(t), !0;
                            },
                            [X],
                        ),
                        W = a.useCallback((e) => ("Backspace" === e.code || 8 === e.keyCode) && (K(e), !0), [K]);
                    (0, R.ZP)("AlphaNumeric", K, `${E.sN}.${$.rQ}`), (0, R.ZP)("Space", K, `${E.sN}.${$.rQ}`), (0, R.ZP)("Backspace", K, `${E.sN}.${$.rQ}`), (0, R.ZP)("Delete", K, `${E.sN}.${$.rQ}`);
                    const G = a.useCallback(
                        (e) => {
                            if ("user" === e.type) t.push((0, A.dX)(e.screen_name.toLowerCase()));
                            else if ("topic" === e.type) {
                                f("");
                                const r = e?.result_context?.redirect_url_tv || "",
                                    a = J.exec(r),
                                    s = a?.[1] || "";
                                s ? t.push((0, $.Lc)(s)) : (M(e.topic), Q({ q: e.topic }, z), I(!0));
                            }
                        },
                        [t, M, Q],
                    );
                    a.useEffect(() => {
                        const a = "string" == typeof t?.location?.query?.q ? t?.location?.query?.q : "";
                        r(a), a ? M(a) : t?.location?.pathname?.includes(h.sH) && e({ q: "" });
                    }, [e, t?.location?.pathname, t?.location?.query?.q, M, r]),
                        (0, Z.ZP)();
                    const { clearVoiceHandlers: ee, registerVoiceHandlers: re } = (0, m.B)();
                    a.useEffect(
                        () => (
                            re({ onupdatestate: () => y.E.Search }),
                            function () {
                                ee();
                            }
                        ),
                        [ee, re],
                    );
                    const ae = a.useMemo(() => i.topics.map((e, t) => a.createElement(j, { key: `typeaheadResult-${t}`, name: `typeaheadResult-${t}`, onSelect: G, result: e })), [G, i.topics]),
                        se = a.useMemo(
                            () =>
                                i.users.map((e, t) => {
                                    const r = i.topics.length + t;
                                    return a.createElement(j, { isSelected: u === e.screen_name, key: `typeaheadResult-${r}`, name: `typeaheadResult-${r}`, onSelect: G, result: e });
                                }),
                            [G, u, i.topics.length, i.users],
                        ),
                        ce = a.useCallback(() => {
                            D.current = { id: D.current.id + 1, lastEventTimeMs: Date.now(), query: z.current };
                        }, []),
                        ne = a.useCallback(
                            (e) => {
                                let t = !1;
                                return ((!N && "ArrowLeft" === e.key) || (N && "ArrowRight" === e.key)) && ((0, s.setFocus)(`${E.sN}.${$.rQ}.${v.o}`), (t = !0)), t;
                            },
                            [N],
                        );
                    return a.createElement(w.Z, { preferredChildName: "keyboard" }, a.createElement(c.Z, { style: te.root }, a.createElement(C.o, { focusable: !0, onEscapeOrBack: W, showValue: !0, value: B }), a.createElement(c.Z, { style: te.searchPageLayout }, a.createElement(c.Z, { style: te.searchSideBar }, a.createElement(b.Z, { disabled: !l, onArrowPress: ce, onKeyPress: X }), a.createElement(k.Z, { "aria-label": void 0, focusable: !!l, name: "typeahead-results", role: "list", style: te.searchTypeaheadResults }, ae, i.topics.length > 0 && i.users.length > 0 ? a.createElement(o.Z, null) : null, se)), a.createElement(c.Z, { style: te.resultsGridContainer }, l ? a.createElement(L.Z, { autoFocus: H, debounceStateRef: D, name: "search-content", onArrowPress: ne, product: "Videos", query: B, queryRef: z, querySource: T.Z.TVSearch, searchTab: "search", style: te.content, width: 4, withCategories: !0 }) : a.createElement(Y, { history: t })))));
                },
                te = i.default.create((e) => ({ root: { height: "100%", paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space24, overflow: "hidden" }, searchSideBar: { height: "100%", paddingTop: e.spaces.space20, paddingEnd: e.spaces.space36 }, searchTypeaheadResults: { display: "flex", flexDirection: "column", flex: 1, overflowY: "auto", paddingHorizontal: e.spaces.space2, paddingVertical: e.spaces.space16, width: "100%" }, searchPageLayout: { display: "grid", flex: 1, gridTemplateColumns: 300 * e.scaleMultiplier + "px 3fr", maxHeight: "100%", paddingTop: e.spaces.space4 }, resultsGridContainer: { height: "100%", overflow: "hidden", paddingTop: e.spaces.space20 }, content: { paddingHorizontal: e.spacesPx.space8 + e.borderWidthsPx.medium }, loggedOutSearchPrompt: { display: "flex", flexDirection: "column", gap: e.spaces.space16, alignItems: "center", paddingTop: "20%" } })),
                re = O(ee);
        },
        283512: (e, t, r) => {
            r.d(t, { Z: () => k });
            var a = r(807896),
                s = (r(136728), r(202784)),
                c = r(107267),
                n = r(516951),
                o = r(187669),
                i = r(290402),
                l = r(650093),
                u = r(305332),
                d = r(725516),
                p = r(125363),
                h = r(903558),
                m = r(250901),
                y = r(682461),
                f = r(673932),
                g = r(301410);
            const k = function ({ autoFocus: e = !0, debounceStateRef: t, name: r, onArrowPress: k, product: b, query: v, queryRef: S, querySource: C, searchTab: _, withCategories: w, ...E }) {
                const R = (0, c.useHistory)(),
                    Z = (0, p.I0)(),
                    T = (0, d.z)(),
                    P = (0, p.v9)((0, m.bW)(_)),
                    q = P?.cursor,
                    x = P?.lastCompletedQuery,
                    $ = P?.results,
                    A = P?.searchFetchStatus,
                    L = s.useCallback(
                        (e) => {
                            Z(h.eX.playerOpen(e)), R.push((0, f.X5)(e));
                        },
                        [Z, R],
                    ),
                    V = s.useCallback(
                        (e) => {
                            T.scribe({ element: "tv-search", action: "search", data: { search_details: { query: e.query } } }), Z((0, y.i6)(e));
                        },
                        [T, Z],
                    ),
                    N = s.useMemo(
                        () => (e) => {
                            let r = t.current.id;
                            !(function a(s) {
                                s <= 0 ||
                                    setTimeout(() => {
                                        if (r === t.current.id) return V({ ...e, query: S.current });
                                        if (v === S.current) {
                                            r = t.current.id;
                                            a(2e3 - (t.current.lastEventTimeMs ? Date.now() - t.current.lastEventTimeMs : 0));
                                        }
                                    }, s);
                            })(2e3);
                        },
                        [V, t, v, S],
                    ),
                    D = s.useCallback(() => {
                        N({ query: v, cursor: q, product: b, querySource: C, searchTab: _, withCategories: w });
                    }, [q, N, b, v, C, _, w]),
                    O = s.useCallback((t = $) => (t ? s.createElement(l.Z, (0, a.Z)({}, E, { autoFocus: e, content: v ? t : void 0, name: r, onNearEnd: D, onSelectVideo: L, returnToFirstElementOnEscape: !0 })) : null), [e, D, r, L, v, E, $]),
                    B = s.useCallback(() => (1 === $?.length && $[0].content ? O($[0].content) : s.createElement(u.Z, { autoFocus: e, categories: v && $ ? $ : [], name: r, onArrowPress: k, onSelectVideo: L, returnToFirstElementOnEscape: !0 })), [e, r, k, L, v, O, $]);
                return (
                    s.useEffect(() => {
                        void 0 !== t.current.id && v !== x && N({ cursor: q, query: v, product: b, querySource: C, searchTab: _, withCategories: w });
                    }, [v, b, C, w, N, Z, x, q, t, _]),
                    (0, o.q)(() => {
                        x && v !== x && Z(h.eX.tvSearchResultsClear(_));
                    }),
                    s.createElement(i.Z, { fetchStatus: q ? g.i.LOADED : A, onRequestRetry: n.Z, render: !$ || ("Carousel" !== $[0]?.displayType && "CompactCarousel" !== $[0]?.displayType && "TVCarousel" !== $[0]?.displayType && "TVShortCarousel" !== $[0]?.displayType) ? O : B, retryable: !1 })
                );
            };
        },
        943052: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                s = r(107267);
            const c = () => {
                const e = (0, s.useLocation)(),
                    t = (0, s.useHistory)(),
                    [r, c] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    c(new URLSearchParams(e.search));
                }, [e.search]);
                const n = a.useCallback(
                        (a, s) => {
                            const c = new URLSearchParams(r);
                            c.set(a, s), t.push(`${e.pathname}?${c.toString()}`);
                        },
                        [t, e.pathname, r],
                    ),
                    o = a.useCallback(
                        (a) => {
                            const s = new URLSearchParams(r);
                            for (const e in a) a[e] ? s.set(e, a[e]) : s.delete(e);
                            t.push(`${e.pathname}?${s.toString()}`);
                        },
                        [t, e.pathname, r],
                    );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), n, o];
            };
        },
        134609: (e, t, r) => {
            r.d(t, { J: () => c });
            var a = r(202784),
                s = r(725516);
            const c = () => {
                const e = (0, s.z)(),
                    t = a.useCallback(() => {
                        e.scribe({ ...e.contextualScribeNamespace, action: "become_active", data: e.contextualScribeData });
                    }, [e]),
                    r = a.useCallback(() => {
                        e.scribe({ ...e.contextualScribeNamespace, action: "become_inactive", data: e.contextualScribeData });
                    }, [e]),
                    c = a.useCallback(() => {
                        document.hidden ? r() : t();
                    }, [r, t]);
                a.useEffect(
                    () => (
                        document.addEventListener("visibilitychange", c),
                        function () {
                            document.removeEventListener("visibilitychange", c);
                        }
                    ),
                    [c],
                );
            };
        },
        883432: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TV-e019dbda.7f5b8a3a.js.map
