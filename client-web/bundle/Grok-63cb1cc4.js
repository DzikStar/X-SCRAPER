"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-63cb1cc4"],
    {
        69966: (e, t, n) => {
            n.d(t, { C: () => i });
            n(136728);
            var a = n(389071),
                o = n(6157),
                r = n(917799),
                l = n(806528),
                s = n(189953);
            const i =
                ({ analytics: e }) =>
                () =>
                (e, t, { api: n, featureSwitches: i }) => {
                    const c = (0, a.YJ)(t()),
                        p = r._O(e, { request: n.withEndpoint(o.Z).fetchGrokHome, params: {} });
                    if (i.isTrue("responsive_web_grok_location_enabled")) {
                        const n = (0, l.fw)(t());
                        "granted" !== n.permissionStatus || n.position || e((0, l.ZW)());
                    }
                    return p({ actionTypes: s.Yx, context: "FETCH_GROK_HOME", meta: {} }, (e) => {
                        const t = [];
                        if (e) {
                            if ((e.grok_home?.default_grok_mode && t.push(c.setMode("Fun" === e.grok_home.default_grok_mode ? s.IK.FUN : s.IK.REGULAR)), e.grok_home?.default_grok_model_option_id)) {
                                const n = e.grok_home.default_grok_model_option_id,
                                    o = e.grok_home?.grok_model_options ?? [],
                                    r = o.find((e) => e.id === n)?.name ?? "Grok";
                                t.push((0, a.j1)(n, r));
                            }
                            e.grok_home?.ineligible_reasons && t.push((0, a.v0)([...(e.grok_home?.ineligible_reasons ?? [])])), e.grok_home?.free_access_enabled && t.push((0, a.uz)(e.grok_home?.free_access_enabled));
                        }
                        return t;
                    });
                };
        },
        11579: (e, t, n) => {
            n.d(t, { V: () => c });
            n(136728);
            var a = n(506899),
                o = n(6157),
                r = n(171697),
                l = n(917799),
                s = n(56519),
                i = n(189953);
            const c =
                (e) =>
                (t, n, { api: c }) =>
                    l._O(t, { params: { grok_share_id: e }, request: c.withEndpoint(o.Z).fetchGrokShareGraphQL })({ actionTypes: i.dK, context: "FETCH_GROK_SHARE", meta: {} }, (t) => {
                        const n = t?.grokShare;
                        if (n) {
                            const t = [(0, s.dP)({ grokShare: { [e]: n } })];
                            return (
                                n.items.forEach((e) => {
                                    e.post_ids_results?.forEach((e) => {
                                        if ("Tweet" === e.result?.__typename) {
                                            const { entities: n } = (0, a.Fv)(e.result, r.Z);
                                            t.push((0, s.dP)(n));
                                        }
                                    }),
                                        e.media_post_ids_results?.forEach((e) => {
                                            if ("Tweet" === e.result?.__typename) {
                                                const { entities: n } = (0, a.Fv)(e.result, r.Z);
                                                t.push((0, s.dP)(n));
                                            }
                                        });
                                }),
                                t
                            );
                        }
                    });
        },
        53939: (e, t, n) => {
            n.d(t, { U: () => l });
            var a = n(6157),
                o = n(917799),
                r = n(189953);
            const l =
                ({ action_type: e, group_id: t, object_id: n }) =>
                async (l, s, { api: i }) =>
                    o._O(l, { params: { group_id: t, object_id: n, action_type: e }, request: i.withEndpoint(a.Z).logUserEventGrok })({ actionTypes: r.dO, context: "GROK_USER_EVENTS_LOG", meta: {} });
        },
        63250: (e, t, n) => {
            n.d(t, { n: () => i });
            var a = n(202784),
                o = n(744610),
                r = n(214997),
                l = n(325686),
                s = n(537392);
            function i({ children: e, isModal: t, maxHeight: n, sectionCount: i }) {
                const [p, m] = a.useState(0),
                    d = a.useRef(new o.Z.Value(0)).current,
                    { height: u } = (0, s.iv)();
                a.useEffect(() => {
                    o.Z.timing(d, { toValue: p, duration: 160, useNativeDriver: !1 }).start();
                }, [p, d]);
                const f = a.useRef(null);
                a.useEffect(() => {
                    f.current && f.current.scrollTo({ x: 0, y: 0, animated: !0 });
                }, [i, f]);
                const g = a.useCallback(
                    (e, t) => {
                        m(Math.min(t, n));
                    },
                    [n, m],
                );
                return a.createElement(l.Z, { style: c.container }, a.createElement(o.Z.View, { style: { height: t ? d : u - (c.fullContainer.height + 65), overflow: t ? "hidden" : "visible" } }, a.createElement(r.Z, { onContentSizeChange: g, pagingEnabled: !0, ref: f }, e)));
            }
            const c = n(392237).default.create((e) => ({ container: { flex: 1 }, fullContainer: { height: e.componentDimensions.appBarHeightPx } }));
        },
        856626: (e, t, n) => {
            n.r(t), n.d(t, { default: () => le });
            var a = n(202784),
                o = n(565058),
                r = n(400752),
                l = n(325686),
                s = n(107267),
                i = n(386802),
                c = n(392237),
                p = n(111677),
                m = n.n(p),
                d = n(323265),
                u = n(420182),
                f = n(980407),
                g = n(309401),
                h = n(15334),
                y = n(293115),
                _ = n(725405),
                E = n(125363),
                b = n(389071),
                k = n(69966),
                x = n(654917),
                w = n(991985),
                C = n(63250),
                v = n(41805),
                T = n(371344),
                S = n(474761),
                Z = n(988227),
                P = n(647174),
                D = n(917862),
                R = n(154003),
                M = n(731708),
                A = n(797553),
                I = n(143670),
                O = n(487552);
            function z({ active: e, hoverLabel: t, icon: n, isDropdown: o, label: r, onPress: l }) {
                return a.createElement(R.ZP, { "aria-label": r || t, backgroundColor: "gray0", borderColor: e ? "gray700" : "transparent", hoverLabel: t ? { label: t } : void 0, icon: n || void 0, onPress: l, size: "small", style: B.button }, a.createElement(M.ZP, { size: "body", style: B.text, weight: "normal" }, r, o && " "), o && a.createElement(O.default, { style: B.text }));
            }
            const B = c.default.create((e) => ({ button: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, text: { color: c.default.theme.colors.gray1000 } }));
            function L({ icon: e, label: t, menuItems: n }) {
                const [o, r] = a.useState(!1),
                    s = a.useCallback(() => {
                        r(!o);
                    }, [o]);
                return a.createElement(
                    l.Z,
                    null,
                    a.createElement(z, { icon: e, isDropdown: !0, label: t, onPress: s }),
                    o &&
                        a.createElement(
                            A.default,
                            { isFixed: !0, onDismiss: s },
                            n.map((e, n) =>
                                a.createElement(I.Z, {
                                    actionSubText: e.actionSubText,
                                    actionText: e.actionText,
                                    disabled: e.disabled,
                                    isSelected: e.isSelected,
                                    key: `${t}_dropdown_${n}`,
                                    onClick: () => {
                                        s(), e.onClick();
                                    },
                                    selectable: e.selectable,
                                }),
                            ),
                        ),
                );
            }
            var G = n(764877),
                F = (n(585488), n(712696)),
                K = n.n(F);
            const $ = G.Z;
            function j(e) {
                return { imageGen: e?.image_gen, webSearch: e?.web_search, xSearch: e?.x_search, xMediaSearch: e?.x_media_search, trendsSearch: e?.trends_search, xPostAnalyze: e?.x_post_analyze };
            }
            function H(e) {
                switch (e) {
                    case "IconQuoteStroke":
                        return a.createElement(S.default, { style: N.iconColor });
                    case "IconEye":
                        return a.createElement(Z.default, { style: N.iconColor });
                    case "IconMediaCollapse":
                        return a.createElement(P.default, { style: N.iconColor });
                    default:
                        return null;
                }
            }
            function U({ initalText: e, model: t, modelOptions: n, onEnhance: o, onModelSelected: r }) {
                const [s, i] = a.useState(e),
                    c = a.useRef(s),
                    p = a.useRef(!1),
                    m = a.useCallback(
                        (e) => {
                            (c.current = e.target.value), i(e.target.value);
                        },
                        [i],
                    ),
                    d = (function () {
                        const {
                            grok_config: { prompt_revisions: e },
                        } = K()($, {});
                        return e || [];
                    })(),
                    u = a.useMemo(
                        () =>
                            (d &&
                                d.map(function (e) {
                                    if (e.children && e.children.length) {
                                        const t = "{child_prompt}",
                                            n = [...e.children]
                                                .sort((e, t) => e.display_label.localeCompare(t.display_label))
                                                .map(function (n) {
                                                    const a = e.prompt.replace(t, n.prompt);
                                                    return {
                                                        actionText: n.display_label,
                                                        onClick: () => {
                                                            o({ prompt: a, label: n.display_label, postText: c.current, tools: j(n.tool_overrides) });
                                                        },
                                                    };
                                                });
                                        return a.createElement(L, { icon: H(e.icon_name), key: e.display_label, label: e.display_label, menuItems: n });
                                    }
                                    return a.createElement(z, {
                                        icon: H(e.icon_name),
                                        key: e.display_label,
                                        label: e.display_label,
                                        onPress: () => {
                                            o({ prompt: e.prompt, label: e.display_label, postText: c.current, tools: j(e.tool_overrides) });
                                        },
                                    });
                                })) ||
                            null,
                        [d, o],
                    ),
                    f = a.useMemo(() => {
                        const e = n.find((e) => e.id === t);
                        if (!e) return null;
                        const { text: a } = (0, D.n)(e.name);
                        return a;
                    }, [n, t]),
                    g = a.useMemo(() => {
                        if (!f || n.length <= 1) return null;
                        const e = n.map((e, n) => {
                            const { tags: o, text: l } = (0, D.n)(e.name);
                            return { actionText: a.createElement(D.I, { name: l, tags: o }), actionSubText: e.description, disabled: !e.isEnabled, isSelected: e.id === t, onClick: () => r(e.id), selectable: !0 };
                        });
                        return a.createElement(L, { label: f, menuItems: e });
                    }, [n, t, r, f]);
                return (
                    a.useEffect(() => {
                        if (e && d && d.length && t && !p.current) {
                            const t = d[0];
                            o({ prompt: t.prompt, label: t.display_label, postText: e, tools: j(t.tool_overrides), showDiff: !0 }), (p.current = !0);
                        }
                    }, [d, o, e, t]),
                    a.createElement(l.Z, null, a.createElement(T.Z, { appTextSize: "headline1", leftAligned: !0, maxNumberOfLines: 4, multiline: !0, numberOfLines: 1, onChange: m, styleType: "selection", value: s }), a.createElement(l.Z, { style: N.bottomRow }, a.createElement(l.Z, { style: N.toolRow }, u), g))
                );
            }
            const N = c.default.create((e) => ({ bottomRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, flexWrap: "wrap" }, toolRow: { flexDirection: "row", gap: e.spaces.space8 }, iconColor: { color: c.default.theme.colors.gray1000 }, modelDropdown: { minWidth: 280 }, disabledModel: { cursor: "default" } }));
            var V = n(661810),
                W = n(737691),
                q = n(379327),
                X = n(567778),
                Q = n(617288);
            n(136728);
            function Y(e) {
                const t = (function (e) {
                    return e ? e.replace(/[“”]/g, '"').replaceAll("’", "'").trim() : "";
                })(e);
                return t.match(/\w+|[^\w\s]+|\r?\n/g) || [];
            }
            function J(e) {
                let t = e.filter(Boolean).join(" ");
                return (t = t.replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")), (t = t.replace(/\s+([,.:!?;]+)/g, "$1")), t;
            }
            const ee = { Remix: m().ec601934, Insert: m().f9ecd3ba, DiffButtonLabel: m().af652514 };
            function te({ atoms: e, onResample: t, onSelect: n, orginalPostText: o, showDiff: s, title: i }) {
                const [c, p] = a.useState(s || !1),
                    m = (0, r.Dv)(e.message),
                    d = (0, r.Dv)(e.status),
                    u = "complete" === d || "error" === d,
                    f = (0, _.Z)(),
                    g = m && (c || u),
                    h = g ? m : "",
                    y = a.useMemo(
                        () =>
                            g
                                ? (function (e, t) {
                                      const n = Y(e),
                                          a = Y(t),
                                          o = n.length,
                                          r = a.length,
                                          l = Array.from({ length: o + 1 }, () => Array(r + 1).fill(0));
                                      for (let e = 1; e <= o; e++) for (let t = 1; t <= r; t++) n[e - 1] === a[t - 1] ? (l[e][t] = l[e - 1][t - 1] + 1) : (l[e][t] = Math.max(l[e - 1][t], l[e][t - 1]));
                                      let s = o,
                                          i = r;
                                      const c = [];
                                      let p = null,
                                          m = [],
                                          d = [];
                                      function u(e) {
                                          (m.length > 0 || d.length > 0) && (c.push({ type: e, textLeft: m.reverse(), textRight: d.reverse() }), (m = []), (d = []));
                                      }
                                      for (; s > 0 || i > 0; ) s > 0 && i > 0 && n[s - 1] === a[i - 1] ? ("match" !== p && (u(p), (p = "match")), m.push(n[s - 1]), d.push(a[i - 1]), s--, i--) : i > 0 && (0 === s || l[s][i - 1] >= l[s - 1][i]) ? ("diff" !== p && (u(p), (p = "diff")), m.push(""), d.push(a[i - 1]), i--) : ("diff" !== p && (u(p), (p = "diff")), m.push(n[s - 1]), d.push(""), s--);
                                      u(p);
                                      const f = c.reverse(),
                                          g = l[o][r],
                                          h = o + r;
                                      return { segments: f, differencePercentage: +(100 * (0 === h ? 0 : 1 - (2 * g) / h)).toFixed(2) };
                                  })(o, h)
                                : void 0,
                        [g, h, o],
                    ),
                    E = a.useCallback(() => {
                        p(!c);
                    }, [c, p]),
                    b = (0, r.Dv)(e.upsell);
                return a.createElement(
                    l.Z,
                    { style: ne.container },
                    a.createElement(V.Z, null),
                    b && a.createElement(X.w, { upsell: b }),
                    a.createElement(
                        l.Z,
                        { style: ne.innerContainer },
                        a.createElement(
                            l.Z,
                            { style: ne.headerRow },
                            a.createElement(M.ZP, { size: "headline2", style: ne.headerText, weight: "bold" }, i),
                            a.createElement(
                                l.Z,
                                { style: ne.toolRow },
                                y && a.createElement(z, { active: c, hoverLabel: ee.DiffButtonLabel, key: "diff", label: `± ${Math.round(y.differencePercentage).toString()}%`, onPress: E }),
                                a.createElement(z, {
                                    icon: a.createElement(W.default, null),
                                    key: "regen",
                                    onPress: () => {
                                        e.generate({ analytics: f });
                                    },
                                }),
                                t ? a.createElement(z, { key: "resample", label: ee.Remix, onPress: () => t(m) }) : null,
                                a.createElement(z, { icon: a.createElement(q.default, null), key: "select", label: ee.Insert, onPress: () => n(m, i, (y && y.differencePercentage) || 0) }),
                            ),
                        ),
                        c && m.length
                            ? a.createElement(
                                  l.Z,
                                  { key: "diff", style: [ne.matchText, ne.postText] },
                                  y &&
                                      y.segments.map((e, t) => {
                                          const n = J(e.textLeft),
                                              o = J(e.textRight);
                                          return "match" === e.type ? a.createElement(a.Fragment, { key: t }, a.createElement(M.ZP, { key: `match${t}`, size: "headline2", style: ne.matchText }, o, " ")) : a.createElement(a.Fragment, { key: t }, n.length > 0 && a.createElement(M.ZP, { key: `left${t}`, size: "headline2", style: ne.diffTextLeft }, n), n.length > 0 && a.createElement(a.Fragment, null, " "), o.length > 0 && a.createElement(M.ZP, { key: `right${t}`, size: "headline2", style: ne.diffTextRight }, o, " "));
                                      }),
                              )
                            : a.createElement(M.ZP, { key: "nodiff", size: "headline2", style: ne.postText }, !u && !m.length && a.createElement(Q.Z, { query: i }), m),
                    ),
                );
            }
            const ne = c.default.create((e) => ({ diffTextRight: { display: "inline", color: e.colors.green500, animationDuration: "300ms", animationTimingFunction: "ease-in", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { opacity: e.colors.green500 } }] }, diffTextLeft: { display: "inline", textDecorationLine: "line-through", color: e.colors.gray500, animationDuration: "300ms", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { color: e.colors.gray600 } }] }, matchText: { display: "inline", color: e.colors.text }, container: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space4 }, innerContainer: { paddingTop: e.spaces.space8, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, headerText: { flex: 1, color: e.colors.gray1000 }, headerRow: { flexDirection: "row", alignItems: "center" }, postText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, toolRow: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space12 } })),
                ae = m().b85f402a,
                oe = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_post_composer_android" : "grok_post_composer_ios") : "grok_post_composer" },
                re = (0, o.cn)([]);
            function le({ children: e }) {
                const t = (0, E.I0)(),
                    n = (0, _.Z)(),
                    o = (0, s.useHistory)(),
                    { changeModel: c, model: p } = (0, x.ZP)(),
                    { isModal: m } = a.useContext(i.Z),
                    d = a.useCallback(() => o.goBack(), [o]),
                    T = (0, r.Dv)(u.zE),
                    [S, Z] = (0, r.KO)(re),
                    [P, D] = (0, v.P)(),
                    R = a.useRef(P).current,
                    M = (0, w.n)(),
                    A = (0, h.u)(),
                    I = (0, E.v9)(b.vf),
                    O = a.useMemo(() => ({ subscription_level: A, grok_details: { grok_mode: "regular", grok_model: p } }), [A, p]);
                a.useEffect(
                    () => (
                        t((0, k.C)({ analytics: n })()),
                        () => {
                            Z((e) => []);
                        }
                    ),
                    [t, n, Z],
                );
                const z = a.useCallback(
                        ({ label: e, postText: t, prompt: a, showDiff: o, tools: r }) => {
                            n.scribe({ page: oe.page, component: "enhance", action: "submit", data: { message: e } });
                            const l = `${a}\n\n${t}`,
                                s = e,
                                i = r;
                            Z((e) => {
                                const a = new g.T(T);
                                return a.updatePrompt(l || ""), (a.model = p || ""), (a.promptSource = "POST_COMPOSER_TEXT_GEN"), a.generate({ analytics: n, prompt: { toolOverrides: i, returnCitations: !1 } }), [...e, { atoms: a, title: s, postText: t, showDiff: o }];
                            });
                        },
                        [Z, n, T, p],
                    ),
                    B = a.useCallback(
                        (e, t, a) => {
                            n.scribe({ page: oe.page, component: "insert", action: "click", data: { message: t, event_value: a } }), D(e), d();
                        },
                        [d, D, n],
                    ),
                    L = a.useCallback(
                        (e) => {
                            const t = I.find((t) => t.id === e);
                            t && c(e, t.id, n);
                        },
                        [c, I, n],
                    );
                return a.createElement(y.nO, { data: O, namespace: oe }, a.createElement(f.Z, { documentTitle: ae, history: o, onBackClick: d, title: ae }, a.createElement(l.Z, { ref: M, style: se.contentWrapper }, a.createElement(C.n, { isModal: m, maxHeight: 500, sectionCount: S.length }, a.createElement(U, { initalText: R, model: p, modelOptions: I, onEnhance: z, onModelSelected: L }), S.map(({ atoms: e, postText: t, showDiff: n, title: o }, r) => a.createElement(te, { atoms: e, key: r, onSelect: B, orginalPostText: t, showDiff: n, title: o })).reverse()))));
            }
            const se = c.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
        41805: (e, t, n) => {
            n.d(t, { P: () => i });
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
            function i() {
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
            n.r(t), n.d(t, { Presets: () => Ee, default: () => xe });
            n(136728);
            var a = n(202784),
                o = n(565058),
                r = n(400752),
                l = n(325686),
                s = n(107267),
                i = n(726426),
                c = n.n(i),
                p = n(386802),
                m = n(392237),
                d = n(111677),
                u = n.n(d),
                f = n(323265),
                g = n(420182),
                h = n(980407),
                y = n(309401),
                _ = n(15334),
                E = n(293115),
                b = n(725405),
                k = n(125363),
                x = n(389071),
                w = n(69966),
                C = n(756869),
                v = n(433521),
                T = n(783444),
                S = n(410490),
                Z = n(791786),
                P = n(567778),
                D = n(305442),
                R = n(991985),
                M = n(63250),
                A = (n(543673), n(240753), n(128399), n(128225)),
                I = n(716233),
                O = n(270172),
                z = n(497294),
                B = n(632960);
            const L = [],
                G = (e) => {
                    const { tweetComposer: t } = e,
                        n = t?.activeParentKey,
                        a = B.E_(e, n),
                        o = t[n],
                        r = o.composerData[a]?.mediaIds;
                    return Array.isArray(r) ? r : L;
                },
                F = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function K() {
                const e = (0, k.v9)(G),
                    t = (0, k.I0)(),
                    n = (0, b.Z)(),
                    o = a.useCallback(
                        (a) => (
                            n.scribe({ action: "click", element: "grok_composer_attach_image", data: { url: a.url } }),
                            (async function (e, t, n) {
                                try {
                                    const a = await Promise.all(n.map((t) => (t?.url && F.includes(new URL(t.url).hostname) ? (0, A.f)(t.url || "", !0, !0) : e((0, O.X)(t.url || "")).then((e) => new File([e || new Blob()], "grok.jpg", { type: "image/jpeg" }))))),
                                        o = (await e((0, z.rA)(a, { location: I.vC.Tweet }))).map((e) => e.id);
                                    await Promise.all(o.map((t) => e((0, z.C4)(t)))), await e(B.zi({ updates: { mediaIds: o.concat(t) } }));
                                } catch (e) {}
                            })(t, e, [a])
                        ),
                        [e, t, n],
                    );
                return o;
            }
            var $ = n(41805),
                j = n(744610),
                H = n(86657);
            function U({ atoms: e, onSelect: t }) {
                const n = (0, r.Dv)(e.fileAttachments),
                    o = "error" === (0, r.Dv)(e.status) && !n.some((e) => e.url),
                    s = n.length > 1 ? W : V,
                    i = (0, r.Dv)(e.status),
                    c = "complete" !== i && "error" !== i,
                    p = !o && n.length,
                    [m, d] = a.useState({ height: 0 }),
                    u = a.useRef(new j.Z.Value(0)).current;
                return (
                    a.useEffect(() => {
                        j.Z.parallel([j.Z.timing(u, { toValue: m.height, duration: 160, useNativeDriver: !1 })]).start();
                    }, [m, u]),
                    a.createElement(
                        j.Z.View,
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
                            p ? n.map((e, n) => a.createElement(l.Z, { key: `slot_${n}`, style: s.itemStyle }, a.createElement(H.Z, { aspectRatio: s.aspectRatio, file: e, intermediateResults: e.intermediateResults, isImageActionsEnabled: !1, isLoading: !!c, key: `${e.fileName}_${n}`, onClick: () => t(e) }))) : null,
                        ),
                    )
                );
            }
            const N = m.default.create((e) => ({ fileAttachmentContainer: { width: "100%", flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space12 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "98%" } })),
                V = { height: void 0, aspectRatio: 4 / 3, itemStyle: N.fileAttachmentSingleItem, containerStyle: N.fileAttachmentContainer },
                W = { height: 400, aspectRatio: void 0, itemStyle: N.fileAttachmentMultiItem, containerStyle: [N.fileAttachmentContainer, N.fileAttachmentContainerMulti] },
                q = W.height,
                X = a.memo(U);
            var Q = n(731708),
                Y = n(737691),
                J = n(725516),
                ee = n(276522),
                te = n(697403);
            const ne = u().idf94bac;
            function ae({ atoms: e, isLoadingAny: t }) {
                const n = (0, r.Dv)(e.prompt),
                    o = (0, J.z)(),
                    s = (0, r.Dv)(t);
                return a.createElement(
                    l.Z,
                    { style: oe.container },
                    a.createElement(l.Z, { style: oe.textContainer }, a.createElement(te.Z, { foldedHeight: 35, heightBreakpoint: 60 }, a.createElement(Q.ZP, { style: oe.textStyle }, n))),
                    a.createElement(ee.Z, {
                        disabled: s,
                        icon: a.createElement(Y.default, null),
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
                ie = u().g1cb8096,
                ce = u().a5a3df56,
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
                ye = c()();
            function _e({ promptTextSender: e }) {
                const t = a.useCallback(() => {}, []);
                return a.createElement(
                    l.Z,
                    { style: we.presentPromptContainer },
                    a.createElement(S.b, { coverUrl: v, label: se, onClose: t, onSendPrompt: e, prompt: se }),
                    a.createElement(S.b, {
                        coverUrl: T,
                        label: ie,
                        onClose: t,
                        onSendPrompt: () => {
                            const t = me();
                            e(t, t);
                        },
                        prompt: me(),
                    }),
                );
            }
            const Ee = a.memo(_e);
            function be({ promptTextSender: e }) {
                const [t, n] = (0, r.KO)(ue),
                    o = (0, k.v9)(x.SL),
                    l = "loaded" === (0, k.v9)(x.hi);
                a.useEffect(() => {
                    n(o);
                }, [o, n]);
                const s = t.length;
                return !l || s ? null : a.createElement(Ee, { promptTextSender: e });
            }
            const ke = new y.T((0, o.MT)());
            function xe({ children: e }) {
                const t = (0, k.I0)(),
                    n = (0, b.Z)(),
                    o = (0, s.useHistory)(),
                    i = (0, R.n)(),
                    c = (0, D.Z)("composer"),
                    { isModal: m } = a.useContext(p.Z),
                    d = (0, r.Dv)(g.zE),
                    u = (0, r.Dv)(he),
                    [f, v] = (0, r.KO)(de),
                    T = a.useMemo(() => (f.length ? f[f.length - 1] : ke), [f]),
                    S = (0, r.Dv)(T.status),
                    A = (0, r.Dv)(fe),
                    I = "idle" === S,
                    O = (0, r.Dv)(ge),
                    z = (0, k.v9)(x.F9),
                    [B] = (0, $.P)(),
                    L = a.useRef(B).current,
                    G = a.useCallback(
                        (e) => {
                            const t = new y.T(d);
                            v((e) => (e.length && e[e.length - 1].abort(), [...e, t])), t.updatePrompt(e.text || ""), (t.imageGenerationCount = c), (t.model = z || ""), (t.promptSource = "POST_COMPOSER_IMAGE_GEN"), t.generate({ prompt: e, analytics: n });
                        },
                        [n, d, v, z, c],
                    ),
                    F = a.useCallback(
                        (e, t) => {
                            G({ text: t || e, returnCitations: !1 });
                        },
                        [G],
                    );
                a.useEffect(
                    () => (
                        t((0, w.C)({ analytics: n })()),
                        t((0, x.Ki)(ye)),
                        t((0, C._)()),
                        L && F(L, ""),
                        () => {
                            v([]);
                        }
                    ),
                    [t, v, n, L, F],
                );
                const j = a.useCallback(() => o.goBack(), [o]),
                    H = K(),
                    U = a.useCallback(
                        (e) => {
                            H(e).then(j);
                        },
                        [H, j],
                    ),
                    N = (0, _.u)(),
                    V = a.useMemo(() => ({ subscription_level: N, grok_details: { grok_mode: "regular", grok_model: z } }), [N, z]);
                return a.createElement(E.nO, { data: V, namespace: re }, a.createElement(h.Z, { documentTitle: le, history: o, onBackClick: j, title: le }, O ? a.createElement(P.w, { upsell: O }) : null, a.createElement(l.Z, { ref: i, style: we.contentWrapper }, a.createElement(l.Z, { style: we.inputContainer }, !O && z ? a.createElement(Z.Z, { abortController: T.abortController, conversationKey: ye, disableFileUploads: !0, hasAccess: !0, isIdle: !A || I, placeholder: ce, promptSender: G, useMagicWandIcon: !0, useNonExpanded: !0 }) : null), a.createElement(M.n, { isModal: m, maxHeight: 2 * q + 70, sectionCount: f.length }, f.map((e, t) => a.createElement(l.Z, { key: `grokMessages${t}` }, a.createElement(ae, { atoms: e, isLoadingAny: fe, key: `PromptRow${t}` }), a.createElement(X, { atoms: e, key: `InlineAttachmentGallery${t}`, onSelect: U }))).reverse(), a.createElement(be, { promptTextSender: F }), a.createElement(X, { atoms: u, key: "history", onSelect: U })))));
            }
            const we = m.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-63cb1cc4.6215943a.js.map
