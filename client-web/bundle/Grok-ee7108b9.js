"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-ee7108b9"],
    {
        63250: (e, t, n) => {
            n.d(t, { n: () => c });
            var a = n(202784),
                o = n(744610),
                r = n(214997),
                l = n(325686),
                s = n(537392);
            function c({ children: e, isModal: t, maxHeight: n, sectionCount: c }) {
                const [p, m] = a.useState(0),
                    d = a.useRef(new o.Z.Value(0)).current,
                    { height: u } = (0, s.iv)();
                a.useEffect(() => {
                    o.Z.timing(d, { toValue: p, duration: 160, useNativeDriver: !1 }).start();
                }, [p, d]);
                const f = a.useRef(null);
                a.useEffect(() => {
                    f.current && f.current.scrollTo({ x: 0, y: 0, animated: !0 });
                }, [c, f]);
                const g = a.useCallback(
                    (e, t) => {
                        m(Math.min(t, n));
                    },
                    [n, m],
                );
                return a.createElement(l.Z, { style: i.container }, a.createElement(o.Z.View, { style: { height: t ? d : u - (i.fullContainer.height + 65), overflow: t ? "hidden" : "visible" } }, a.createElement(r.Z, { onContentSizeChange: g, pagingEnabled: !0, ref: f }, e)));
            }
            const i = n(392237).default.create((e) => ({ container: { flex: 1 }, fullContainer: { height: e.componentDimensions.appBarHeightPx } }));
        },
        856626: (e, t, n) => {
            n.r(t), n.d(t, { default: () => oe });
            var a = n(202784),
                o = n(565058),
                r = n(400752),
                l = n(325686),
                s = n(107267),
                c = n(386802),
                i = n(392237),
                p = n(674132),
                m = n.n(p),
                d = n(323265),
                u = n(420182),
                f = n(980407),
                g = n(309401),
                h = n(15334),
                y = n(293115),
                E = n(725405),
                b = n(125363),
                x = n(389071),
                C = n(69966),
                k = n(991985),
                v = n(63250),
                _ = n(41805),
                w = n(371344),
                Z = n(474761),
                T = n(988227),
                S = n(647174),
                P = n(154003),
                D = n(731708),
                R = n(797553),
                A = n(143670),
                M = n(487552);
            function I({ active: e, hoverLabel: t, icon: n, isDropdown: o, label: r, onPress: l }) {
                return a.createElement(P.ZP, { "aria-label": r || t, backgroundColor: "gray0", borderColor: e ? "gray700" : "transparent", hoverLabel: t ? { label: t } : void 0, icon: n || void 0, onPress: l, size: "small", style: B.button }, a.createElement(D.ZP, { size: "body", style: B.text, weight: "normal" }, r, o && " "), o && a.createElement(M.default, { style: B.text }));
            }
            const B = i.default.create((e) => ({ button: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, text: { color: i.default.theme.colors.gray1000 } }));
            function z({ icon: e, label: t, menuItems: n }) {
                const [o, r] = a.useState(!1),
                    s = a.useCallback(() => {
                        r(!o);
                    }, [o]);
                return a.createElement(
                    l.Z,
                    null,
                    a.createElement(I, { icon: e, isDropdown: !0, label: t, onPress: s }),
                    o &&
                        a.createElement(
                            R.default,
                            { isFixed: !0, onDismiss: s },
                            n.map((e) =>
                                a.createElement(A.Z, {
                                    actionText: e.label,
                                    key: e.label,
                                    onClick: () => {
                                        s(), e.onClick();
                                    },
                                }),
                            ),
                        ),
                );
            }
            var L = n(764877),
                O = (n(585488), n(712696)),
                $ = n.n(O);
            const F = L.Z;
            function K(e) {
                return { imageGen: e?.image_gen, webSearch: e?.web_search, xSearch: e?.x_search, xMediaSearch: e?.x_media_search, trendsSearch: e?.trends_search, xPostAnalyze: e?.x_post_analyze };
            }
            function j(e) {
                switch (e) {
                    case "IconQuoteStroke":
                        return a.createElement(Z.default, { style: N.iconColor });
                    case "IconEye":
                        return a.createElement(T.default, { style: N.iconColor });
                    case "IconMediaCollapse":
                        return a.createElement(S.default, { style: N.iconColor });
                    default:
                        return null;
                }
            }
            function G({ initalText: e, model: t, onEnhance: n }) {
                const [o, r] = a.useState(e),
                    s = a.useRef(o),
                    c = a.useCallback(
                        (e) => {
                            (s.current = e.target.value), r(e.target.value);
                        },
                        [r],
                    ),
                    i = (function () {
                        const {
                            grok_config: { prompt_revisions: e },
                        } = $()(F, {});
                        return e || [];
                    })(),
                    p = a.useMemo(
                        () =>
                            (i &&
                                i.map(function (e) {
                                    if (e.children && e.children.length) {
                                        const t = "{child_prompt}",
                                            o = e.children
                                                .map(function (a) {
                                                    const o = e.prompt.replace(t, a.prompt);
                                                    return {
                                                        label: a.display_label,
                                                        onClick: () => {
                                                            n({ prompt: o, label: a.display_label, postText: s.current, tools: K(a.tool_overrides) });
                                                        },
                                                    };
                                                })
                                                .sort((e, t) => e.label.localeCompare(t.label));
                                        return a.createElement(z, { icon: j(e.icon_name), key: e.display_label, label: e.display_label, menuItems: o });
                                    }
                                    return a.createElement(I, {
                                        icon: j(e.icon_name),
                                        key: e.display_label,
                                        label: e.display_label,
                                        onPress: () => {
                                            n({ prompt: e.prompt, label: e.display_label, postText: s.current, tools: K(e.tool_overrides) });
                                        },
                                    });
                                })) ||
                            null,
                        [i, n],
                    );
                return (
                    a.useEffect(() => {
                        if (e && i && i.length && t) {
                            const t = i[0];
                            n({ prompt: t.prompt, label: t.display_label, postText: e, tools: K(t.tool_overrides), showDiff: !0 });
                        }
                    }, [i, n, e, t]),
                    a.createElement(l.Z, null, a.createElement(w.Z, { appTextSize: "headline1", leftAligned: !0, maxNumberOfLines: 4, multiline: !0, numberOfLines: 1, onChange: c, styleType: "selection", value: o }), a.createElement(l.Z, { style: N.toolRow }, p))
                );
            }
            const N = i.default.create((e) => ({ toolRow: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8, flexDirection: "row", gap: e.spaces.space8 }, iconColor: { color: i.default.theme.colors.gray1000 } }));
            var H = n(661810),
                U = n(737691),
                V = n(379327),
                W = n(567778),
                X = n(617288);
            n(136728);
            function q(e) {
                const t = (function (e) {
                    return e ? e.replace(/[“”]/g, '"').replaceAll("’", "'").trim() : "";
                })(e);
                return t.match(/\w+|[^\w\s]+|\r?\n/g) || [];
            }
            function Q(e) {
                let t = e.filter(Boolean).join(" ");
                return (t = t.replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")), (t = t.replace(/\s+([,.:!?;]+)/g, "$1")), t;
            }
            const J = { Remix: m().ec601934, Insert: m().f9ecd3ba, DiffButtonLabel: m().af652514 };
            function Y({ atoms: e, onResample: t, onSelect: n, orginalPostText: o, showDiff: s, title: c }) {
                const [i, p] = a.useState(s || !1),
                    m = (0, r.Dv)(e.message),
                    d = (0, r.Dv)(e.status),
                    u = "complete" === d || "error" === d,
                    f = (0, E.Z)(),
                    g = m && (i || u),
                    h = g ? m : "",
                    y = a.useMemo(
                        () =>
                            g
                                ? (function (e, t) {
                                      const n = q(e),
                                          a = q(t),
                                          o = n.length,
                                          r = a.length,
                                          l = Array.from({ length: o + 1 }, () => Array(r + 1).fill(0));
                                      for (let e = 1; e <= o; e++) for (let t = 1; t <= r; t++) n[e - 1] === a[t - 1] ? (l[e][t] = l[e - 1][t - 1] + 1) : (l[e][t] = Math.max(l[e - 1][t], l[e][t - 1]));
                                      let s = o,
                                          c = r;
                                      const i = [];
                                      let p = null,
                                          m = [],
                                          d = [];
                                      function u(e) {
                                          (m.length > 0 || d.length > 0) && (i.push({ type: e, textLeft: m.reverse(), textRight: d.reverse() }), (m = []), (d = []));
                                      }
                                      for (; s > 0 || c > 0; ) s > 0 && c > 0 && n[s - 1] === a[c - 1] ? ("match" !== p && (u(p), (p = "match")), m.push(n[s - 1]), d.push(a[c - 1]), s--, c--) : c > 0 && (0 === s || l[s][c - 1] >= l[s - 1][c]) ? ("diff" !== p && (u(p), (p = "diff")), m.push(""), d.push(a[c - 1]), c--) : ("diff" !== p && (u(p), (p = "diff")), m.push(n[s - 1]), d.push(""), s--);
                                      u(p);
                                      const f = i.reverse(),
                                          g = l[o][r],
                                          h = o + r;
                                      return { segments: f, differencePercentage: +(100 * (0 === h ? 0 : 1 - (2 * g) / h)).toFixed(2) };
                                  })(o, h)
                                : void 0,
                        [g, h, o],
                    ),
                    b = a.useCallback(() => {
                        p(!i);
                    }, [i, p]),
                    x = (0, r.Dv)(e.upsell);
                return a.createElement(
                    l.Z,
                    { style: ee.container },
                    a.createElement(H.Z, null),
                    x && a.createElement(W.w, { upsell: x }),
                    a.createElement(
                        l.Z,
                        { style: ee.innerContainer },
                        a.createElement(
                            l.Z,
                            { style: ee.headerRow },
                            a.createElement(D.ZP, { size: "headline2", style: ee.headerText, weight: "bold" }, c),
                            a.createElement(
                                l.Z,
                                { style: ee.toolRow },
                                y && a.createElement(I, { active: i, hoverLabel: J.DiffButtonLabel, key: "diff", label: `± ${Math.round(y.differencePercentage).toString()}%`, onPress: b }),
                                a.createElement(I, {
                                    icon: a.createElement(U.default, null),
                                    key: "regen",
                                    onPress: () => {
                                        e.generate({ analytics: f });
                                    },
                                }),
                                t ? a.createElement(I, { key: "resample", label: J.Remix, onPress: () => t(m) }) : null,
                                a.createElement(I, { icon: a.createElement(V.default, null), key: "select", label: J.Insert, onPress: () => n(m, c, (y && y.differencePercentage) || 0) }),
                            ),
                        ),
                        i && m.length
                            ? a.createElement(
                                  l.Z,
                                  { key: "diff", style: [ee.matchText, ee.postText] },
                                  y &&
                                      y.segments.map((e, t) => {
                                          const n = Q(e.textLeft),
                                              o = Q(e.textRight);
                                          return "match" === e.type ? a.createElement(a.Fragment, { key: t }, a.createElement(D.ZP, { key: `match${t}`, size: "headline2", style: ee.matchText }, o, " ")) : a.createElement(a.Fragment, { key: t }, n.length > 0 && a.createElement(D.ZP, { key: `left${t}`, size: "headline2", style: ee.diffTextLeft }, n), n.length > 0 && a.createElement(a.Fragment, null, " "), o.length > 0 && a.createElement(D.ZP, { key: `right${t}`, size: "headline2", style: ee.diffTextRight }, o, " "));
                                      }),
                              )
                            : a.createElement(D.ZP, { key: "nodiff", size: "headline2", style: ee.postText }, !u && !m.length && a.createElement(X.Z, { query: c }), m),
                    ),
                );
            }
            const ee = i.default.create((e) => ({ diffTextRight: { display: "inline", color: e.colors.green500, animationDuration: "300ms", animationTimingFunction: "ease-in", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { opacity: e.colors.green500 } }] }, diffTextLeft: { display: "inline", textDecorationLine: "line-through", color: e.colors.gray500, animationDuration: "300ms", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { color: e.colors.gray600 } }] }, matchText: { display: "inline", color: e.colors.text }, container: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space4 }, innerContainer: { paddingTop: e.spaces.space8, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, headerText: { flex: 1, color: e.colors.gray1000 }, headerRow: { flexDirection: "row", alignItems: "center" }, postText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, toolRow: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space12 } })),
                te = m().b85f402a,
                ne = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_post_composer_android" : "grok_post_composer_ios") : "grok_post_composer" },
                ae = (0, o.cn)([]);
            function oe({ children: e }) {
                const t = (0, b.I0)(),
                    n = (0, E.Z)(),
                    o = (0, s.useHistory)(),
                    { isModal: i } = a.useContext(c.Z),
                    p = a.useCallback(() => o.goBack(), [o]),
                    m = (0, r.Dv)(u.zE),
                    [d, w] = (0, r.KO)(ae),
                    [Z, T] = (0, _.P)(),
                    S = a.useRef(Z).current,
                    P = (0, k.n)(),
                    D = (0, h.u)(),
                    R = (0, b.v9)(x.F9),
                    A = a.useMemo(() => ({ subscription_level: D, grok_details: { grok_mode: "regular", grok_model: R } }), [D, R]);
                a.useEffect(
                    () => (
                        t((0, C.C)({ analytics: n })()),
                        () => {
                            w((e) => []);
                        }
                    ),
                    [t, n, w],
                );
                const M = a.useCallback(
                        ({ label: e, postText: t, prompt: a, showDiff: o, tools: r }) => {
                            n.scribe({ page: ne.page, component: "enhance", action: "submit", data: { message: e } });
                            const l = `${a}\n\n${t}`,
                                s = e,
                                c = r;
                            w((e) => {
                                const a = new g.T(m);
                                return a.updatePrompt(l || ""), (a.model = R || ""), (a.promptSource = "POST_COMPOSER_TEXT_GEN"), a.generate({ analytics: n, prompt: { toolOverrides: c, returnCitations: !1 } }), [...e, { atoms: a, title: s, postText: t, showDiff: o }];
                            });
                        },
                        [w, n, m, R],
                    ),
                    I = a.useCallback(
                        (e, t, a) => {
                            n.scribe({ page: ne.page, component: "insert", action: "click", data: { message: t, event_value: a } }), T(e), p();
                        },
                        [p, T, n],
                    );
                return a.createElement(y.nO, { data: A, namespace: ne }, a.createElement(f.Z, { documentTitle: te, history: o, onBackClick: p, title: te }, a.createElement(l.Z, { ref: P, style: re.contentWrapper }, a.createElement(v.n, { isModal: i, maxHeight: 500, sectionCount: d.length }, a.createElement(G, { initalText: S, model: R, onEnhance: M }), d.map(({ atoms: e, postText: t, showDiff: n, title: o }, r) => a.createElement(Y, { atoms: e, key: r, onSelect: I, orginalPostText: t, showDiff: n, title: o })).reverse()))));
            }
            const re = i.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
        41805: (e, t, n) => {
            n.d(t, { P: () => c });
            var a = n(202784),
                o = n(976006),
                r = n(125363),
                l = n(632960);
            const s = (e) => {
                const { tweetComposer: t } = e,
                    n = t?.activeParentKey,
                    a = l.E_(e, n),
                    o = t[n];
                return o.composerData[a]?.text || "";
            };
            function c() {
                const e = (0, r.I0)(),
                    t = (0, r.v9)(s),
                    n = a.useCallback(
                        (n) => {
                            if (n === t) return;
                            const a = (0, o.eq)(n);
                            a && a.entityMap && (a.entityMap.GROK_EDITED_TEXT = { type: "GROK_EDITED_TEXT", mutability: "IMMUTABLE", data: { text: n } }), e(l.zi({ updates: { editorStateRaw: a, lateUpdateEditorStateRaw: a, text: n } }));
                        },
                        [t, e],
                    );
                return [t, n];
            }
        },
        979521: (e, t, n) => {
            n.r(t), n.d(t, { Presets: () => be, default: () => ke });
            n(136728);
            var a = n(202784),
                o = n(565058),
                r = n(400752),
                l = n(325686),
                s = n(107267),
                c = n(726426),
                i = n.n(c),
                p = n(386802),
                m = n(392237),
                d = n(674132),
                u = n.n(d),
                f = n(323265),
                g = n(420182),
                h = n(980407),
                y = n(309401),
                E = n(15334),
                b = n(293115),
                x = n(725405),
                C = n(125363),
                k = n(389071),
                v = n(69966),
                _ = n(756869),
                w = n(433521),
                Z = n(783444),
                T = n(410490),
                S = n(791786),
                P = n(567778),
                D = n(305442),
                R = n(991985),
                A = n(63250),
                M = (n(543673), n(240753), n(128399), n(128225)),
                I = n(716233),
                B = n(270172),
                z = n(497294),
                L = n(632960);
            const O = [],
                $ = (e) => {
                    const { tweetComposer: t } = e,
                        n = t?.activeParentKey,
                        a = L.E_(e, n),
                        o = t[n],
                        r = o.composerData[a]?.mediaIds;
                    return Array.isArray(r) ? r : O;
                },
                F = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function K() {
                const e = (0, C.v9)($),
                    t = (0, C.I0)(),
                    n = (0, x.Z)(),
                    o = a.useCallback(
                        (a) => (
                            n.scribe({ action: "click", element: "grok_composer_attach_image", data: { url: a.url } }),
                            (async function (e, t, n) {
                                try {
                                    const a = await Promise.all(n.map((t) => (t?.url && F.includes(new URL(t.url).hostname) ? (0, M.f)(t.url || "", !0, !0) : e((0, B.X)(t.url || "")).then((e) => new File([e || new Blob()], "grok.jpg", { type: "image/jpeg" }))))),
                                        o = (await e((0, z.rA)(a, { location: I.vC.Tweet }))).map((e) => e.id);
                                    await Promise.all(o.map((t) => e((0, z.C4)(t)))), await e(L.zi({ updates: { mediaIds: o.concat(t) } }));
                                } catch (e) {}
                            })(t, e, [a])
                        ),
                        [e, t, n],
                    );
                return o;
            }
            var j = n(41805),
                G = n(744610),
                N = n(86657);
            function H({ atoms: e, onSelect: t }) {
                const n = (0, r.Dv)(e.fileAttachments),
                    o = "error" === (0, r.Dv)(e.status) && !n.some((e) => e.url),
                    s = n.length > 1 ? W : V,
                    c = (0, r.Dv)(e.status),
                    i = "complete" !== c && "error" !== c,
                    p = !o && n.length,
                    [m, d] = a.useState({ height: 0 }),
                    u = a.useRef(new G.Z.Value(0)).current;
                return (
                    a.useEffect(() => {
                        G.Z.parallel([G.Z.timing(u, { toValue: m.height, duration: 160, useNativeDriver: !1 })]).start();
                    }, [m, u]),
                    a.createElement(
                        G.Z.View,
                        { style: { height: u, overflow: "hidden" } },
                        a.createElement(
                            l.Z,
                            {
                                onLayout: (e) => {
                                    const { height: t, width: n } = e.nativeEvent.layout;
                                    d({ width: n, height: t });
                                },
                                style: s.containerStyle,
                            },
                            p ? n.map((e, n) => a.createElement(l.Z, { key: `slot_${n}`, style: s.itemStyle }, a.createElement(N.Z, { aspectRatio: s.aspectRatio, file: e, intermediateResults: e.intermediateResults, isImageActionsEnabled: !1, isLoading: !!i, key: `${e.fileName}_${n}`, onClick: () => t(e) }))) : null,
                        ),
                    )
                );
            }
            const U = m.default.create((e) => ({ fileAttachmentContainer: { width: "100%", flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space12 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "98%" } })),
                V = { height: void 0, aspectRatio: 4 / 3, itemStyle: U.fileAttachmentSingleItem, containerStyle: U.fileAttachmentContainer },
                W = { height: 400, aspectRatio: void 0, itemStyle: U.fileAttachmentMultiItem, containerStyle: [U.fileAttachmentContainer, U.fileAttachmentContainerMulti] },
                X = W.height,
                q = a.memo(H);
            var Q = n(731708),
                J = n(737691),
                Y = n(725516),
                ee = n(276522),
                te = n(697403);
            const ne = u().idf94bac;
            function ae({ atoms: e, isLoadingAny: t }) {
                const n = (0, r.Dv)(e.prompt),
                    o = (0, Y.z)(),
                    s = (0, r.Dv)(t);
                return a.createElement(
                    l.Z,
                    { style: oe.container },
                    a.createElement(l.Z, { style: oe.textContainer }, a.createElement(te.Z, { foldedHeight: 35, heightBreakpoint: 60 }, a.createElement(Q.ZP, { style: oe.textStyle }, n))),
                    a.createElement(ee.Z, {
                        disabled: s,
                        icon: a.createElement(J.default, null),
                        label: ne,
                        onPress: () => {
                            e.generate({ analytics: o });
                        },
                    }),
                );
            }
            const oe = m.default.create((e) => ({ container: { flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingBottom: e.spaces.space4 }, textContainer: { flex: 1 }, textStyle: { fontSize: e.fontSizes.headline2 } })),
                re = { page: f.ZP.isTwitterApp() ? (f.ZP.isAndroid() ? "grok_composer_android" : "grok_composer_ios") : "grok_composer" },
                le = u().eb0d91ac,
                se = u().c5a23514,
                ce = u().g1cb8096,
                ie = u().a5a3df56,
                pe = [u().gbb4e90a, u().af21f92e, u().e207cba2, u().b1323f10, u().g6a90174, u().jdc4b66c];
            function me() {
                const e = Math.floor(Math.random() * pe.length);
                return pe[e];
            }
            const de = (0, o.cn)([]),
                ue = (0, o.cn)([]),
                fe = (0, o.cn)((e) =>
                    e(de).some((t) => {
                        const n = e(t.status);
                        return "complete" !== n && "error" !== n;
                    }),
                ),
                ge = (0, o.cn)((e) => {
                    const t = e(de);
                    for (let n = 0; n < t.length; n++) {
                        const a = e(t[n].upsell);
                        if (a) return a;
                    }
                }),
                he = (0, o.cn)((e) => {
                    const t = new y.Z(),
                        n = e(t.fileAttachments);
                    return (
                        e(ue).map((e) => {
                            n.push({ url: e.media_url, fileName: "", mimeType: "image/jpeg" });
                        }),
                        t
                    );
                }),
                ye = i()();
            function Ee({ promptTextSender: e }) {
                const t = a.useCallback(() => {}, []);
                return a.createElement(
                    l.Z,
                    { style: ve.presentPromptContainer },
                    a.createElement(T.b, { coverUrl: w, label: se, onClose: t, onSendPrompt: e, prompt: se }),
                    a.createElement(T.b, {
                        coverUrl: Z,
                        label: ce,
                        onClose: t,
                        onSendPrompt: () => {
                            const t = me();
                            e(t, t);
                        },
                        prompt: me(),
                    }),
                );
            }
            const be = a.memo(Ee);
            function xe({ promptTextSender: e }) {
                const [t, n] = (0, r.KO)(ue),
                    o = (0, C.v9)(k.SL),
                    l = "loaded" === (0, C.v9)(k.hi);
                a.useEffect(() => {
                    n(o);
                }, [o, n]);
                const s = t.length;
                return !l || s ? null : a.createElement(be, { promptTextSender: e });
            }
            const Ce = new y.T((0, o.MT)());
            function ke({ children: e }) {
                const t = (0, C.I0)(),
                    n = (0, x.Z)(),
                    o = (0, s.useHistory)(),
                    c = (0, R.n)(),
                    i = (0, D.Z)("composer"),
                    { isModal: m } = a.useContext(p.Z),
                    d = (0, r.Dv)(g.zE),
                    u = (0, r.Dv)(he),
                    [f, w] = (0, r.KO)(de),
                    Z = a.useMemo(() => (f.length ? f[f.length - 1] : Ce), [f]),
                    T = (0, r.Dv)(Z.status),
                    M = (0, r.Dv)(fe),
                    I = "idle" === T,
                    B = (0, r.Dv)(ge),
                    z = (0, C.v9)(k.F9),
                    [L] = (0, j.P)(),
                    O = a.useRef(L).current,
                    $ = a.useCallback(
                        (e) => {
                            const t = new y.T(d);
                            w((e) => (e.length && e[e.length - 1].abort(), [...e, t])), t.updatePrompt(e.text || ""), (t.imageGenerationCount = i), (t.model = z || ""), (t.promptSource = "POST_COMPOSER_IMAGE_GEN"), t.generate({ prompt: e, analytics: n });
                        },
                        [n, d, w, z, i],
                    ),
                    F = a.useCallback(
                        (e, t) => {
                            $({ text: t || e, returnCitations: !1 });
                        },
                        [$],
                    );
                a.useEffect(
                    () => (
                        t((0, v.C)({ analytics: n })()),
                        t((0, k.Ki)(ye)),
                        t((0, _._)()),
                        O && F(O, ""),
                        () => {
                            w([]);
                        }
                    ),
                    [t, w, n, O, F],
                );
                const G = a.useCallback(() => o.goBack(), [o]),
                    N = K(),
                    H = a.useCallback(
                        (e) => {
                            N(e).then(G);
                        },
                        [N, G],
                    ),
                    U = (0, E.u)(),
                    V = a.useMemo(() => ({ subscription_level: U, grok_details: { grok_mode: "regular", grok_model: z } }), [U, z]);
                return a.createElement(b.nO, { data: V, namespace: re }, a.createElement(h.Z, { documentTitle: le, history: o, onBackClick: G, title: le }, B ? a.createElement(P.w, { upsell: B }) : null, a.createElement(l.Z, { ref: c, style: ve.contentWrapper }, a.createElement(l.Z, { style: ve.inputContainer }, !B && z ? a.createElement(S.Z, { abortController: Z.abortController, conversationKey: ye, disableFileUploads: !0, hasAccess: !0, isIdle: !M || I, placeholder: ie, promptSender: $, useMagicWandIcon: !0, useNonExpanded: !0 }) : null), a.createElement(A.n, { isModal: m, maxHeight: 2 * X + 70, sectionCount: f.length }, f.map((e, t) => a.createElement(l.Z, { key: `grokMessages${t}` }, a.createElement(ae, { atoms: e, isLoadingAny: fe, key: `PromptRow${t}` }), a.createElement(q, { atoms: e, key: `InlineAttachmentGallery${t}`, onSelect: H }))).reverse(), a.createElement(xe, { promptTextSender: F }), a.createElement(q, { atoms: u, key: "history", onSelect: H })))));
            }
            const ve = m.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-ee7108b9.9b02fc2a.js.map
