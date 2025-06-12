"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-63cb1cc4"],
    {
        934098: (e, t, n) => {
            n.d(t, { $: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                ({ chatItemId: e, conversationId: t }) =>
                async (n, r, { api: i }) =>
                    o._O(n, { params: { conversation_id: t, chat_item_id: e }, request: i.withEndpoint(a.Z).deleteMessage })({ actionTypes: s.VK, context: "DELETE_GROK_MESSAGE", meta: {} });
        },
        270172: (e, t, n) => {
            n.d(t, { X: () => o });
            var a = n(692518);
            const o =
                (e) =>
                (t, n, { api: o }) => {
                    const s = (0, a.j)(e);
                    return o.fetchClient.dispatch(s, { method: "GET", credentials: "include" }).then((e) => e.blob());
                };
        },
        309373: (e, t, n) => {
            n.d(t, { X: () => l });
            var a = n(323265),
                o = n(389071),
                s = n(623494),
                r = n(958602),
                i = n(250781);
            const l =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: n, editingMessageId: l, fileAttachments: c, mode: d, onStart: p, returnCitations: m, returnSearchResults: u = !0, features: g = { eagerTweets: !0, serverHistory: !0 }, text: f, trendPromptIdStr: h, imageGenerationCount: _, isReasoning: y, isDeepsearch: E, personalityId: v }) =>
                async (d, h, { api: b, featureSwitches: k }) => {
                    const C = !a.ZP.isTwitterApp() && k.isTrue("responsive_web_grok_api_enable_grok_host"),
                        T = (0, o.bD)(t),
                        w = T.selectConversationId(h()),
                        x = a.ZP.isAndroid(),
                        S = a.ZP.isIOS();
                    if (!w) return void (0, s.Uk)(e, "edit function failed to find a conversationId");
                    const I = T.selectMode(h()),
                        R = T.selectMessageIds(h()),
                        Z = T.selectConversationWithLocalMessages(h()),
                        M = (0, o.F9)(h()),
                        P = R.indexOf(l);
                    if (-1 === P) return void (0, s.Uk)(e, "edit function couldn't find an actionable response");
                    const D = Z[P];
                    let O = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === D?.promptMetadata?.promptSource ? (O = { ...D.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === D?.promptMetadata?.promptSource && "IMAGE_GEN" === D?.promptMetadata?.properties?.messageType && (O = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const A = [...Z.slice(0, P).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: D.sender, fileAttachments: c, message: f, isDeepsearch: E, isReasoning: y }],
                        G = (0, o.en)(h());
                    let L = {};
                    G && G.toolOverrides && (L = G.toolOverrides);
                    const K = { responses: A, systemPromptName: I, conversationId: w, grokModelOptionId: M, resampleResponseId: D.userChatItemId, returnSearchResults: u, returnCitations: m, requestFeatures: g, ...(n && 1 === A.length ? { analysisEntityId: n } : void 0), promptMetadata: O, imageGenerationCount: _, enableSideBySide: !x && !S, isDeepsearch: E, isReasoning: y, personalityId: v, toolOverrides: L, deepsearchArgs: E ? G?.deepsearchArgs : void 0 };
                    null != T.selectCurrentResponseMessage(h()) && (await d((0, r.I)({ analytics: e, conversationKey: t }))), f && d(T.commitEditChanges(l, f, c)), (0, s.dd)(e, { conversationLength: A.length, isDeepsearch: K.isDeepsearch || void 0, isReasoning: K.isReasoning || void 0 }), p?.();
                    const N = k.isTrue("responsive_web_grok_enable_add_response_keepalive") && (E || y),
                        F = k.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (0, i.D)({ grokModule: T, requestBody: K, analytics: e, dispatch: d, api: b, eventTag: "rewrite", flags: { enableGrokApiHost: C, enableKeepalive: N, numRetries: F } });
                };
        },
        69966: (e, t, n) => {
            n.d(t, { C: () => l });
            n(136728);
            var a = n(389071),
                o = n(6157),
                s = n(917799),
                r = n(806528),
                i = n(189953);
            const l =
                ({ analytics: e }) =>
                () =>
                (e, t, { api: n, featureSwitches: l }) => {
                    const c = (0, a.YJ)(t()),
                        d = s._O(e, { request: n.withEndpoint(o.Z).fetchGrokHome, params: {} });
                    if (l.isTrue("responsive_web_grok_location_enabled")) {
                        const n = (0, r.fw)(t());
                        "granted" !== n.permissionStatus || n.position || e((0, r.ZW)());
                    }
                    return d({ actionTypes: i.Yx, context: "FETCH_GROK_HOME", meta: {} }, (e) => {
                        const t = [];
                        if (e) {
                            if ((e.grok_home?.default_grok_mode && t.push(c.setMode("Fun" === e.grok_home.default_grok_mode ? i.IK.FUN : i.IK.REGULAR)), e.grok_home?.default_grok_model_option_id)) {
                                const n = e.grok_home.default_grok_model_option_id,
                                    o = e.grok_home?.grok_model_options ?? [],
                                    s = o.find((e) => e.id === n)?.name ?? "Grok";
                                t.push((0, a.j1)(n, s));
                            }
                            e.grok_home?.ineligible_reasons && t.push((0, a.v0)([...(e.grok_home?.ineligible_reasons ?? [])])), e.grok_home?.free_access_enabled && t.push((0, a.uz)(e.grok_home?.free_access_enabled));
                        }
                        return t;
                    });
                };
        },
        931292: (e, t, n) => {
            n.d(t, { A: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                (e) =>
                (t, n, { api: r }) =>
                    o._O(t, { params: { cursor: e }, request: r.withEndpoint(a.Z).fetchHistory })({ actionTypes: s.Sv, context: "FETCH_GROK_HISTORY", meta: {} });
        },
        756869: (e, t, n) => {
            n.d(t, { _: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                (e) =>
                (t, n, { api: r }) =>
                    o._O(t, { params: { cursor: e }, request: r.withEndpoint(a.Z).fetchMediaHistory })({ actionTypes: s.Ws, context: "FETCH_GROK_MEDIA_HISTORY", meta: {} });
        },
        816870: (e, t, n) => {
            n.d(t, { d: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                (e) =>
                (t, n, { api: r }) =>
                    o._O(t, { params: { cursor: e }, request: r.withEndpoint(a.Z).fetchPinnedConversations })({ actionTypes: s.En, context: "FETCH_GROK_PINNED_CONVERSATIONS", meta: {} });
        },
        11579: (e, t, n) => {
            n.d(t, { V: () => c });
            n(136728);
            var a = n(506899),
                o = n(6157),
                s = n(171697),
                r = n(917799),
                i = n(56519),
                l = n(189953);
            const c =
                (e) =>
                (t, n, { api: c }) =>
                    r._O(t, { params: { grok_share_id: e }, request: c.withEndpoint(o.Z).fetchGrokShareGraphQL })({ actionTypes: l.dK, context: "FETCH_GROK_SHARE", meta: {} }, (t) => {
                        const n = t?.grokShare;
                        if (n) {
                            const t = [(0, i.dP)({ grokShare: { [e]: n } })];
                            return (
                                n.items.forEach((e) => {
                                    e.post_ids_results?.forEach((e) => {
                                        if ("Tweet" === e.result?.__typename) {
                                            const { entities: n } = (0, a.Fv)(e.result, s.Z);
                                            t.push((0, i.dP)(n));
                                        }
                                    }),
                                        e.media_post_ids_results?.forEach((e) => {
                                            if ("Tweet" === e.result?.__typename) {
                                                const { entities: n } = (0, a.Fv)(e.result, s.Z);
                                                t.push((0, i.dP)(n));
                                            }
                                        });
                                }),
                                t
                            );
                        }
                    });
        },
        53939: (e, t, n) => {
            n.d(t, { U: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                ({ action_type: e, group_id: t, object_id: n }) =>
                async (r, i, { api: l }) =>
                    o._O(r, { params: { group_id: t, object_id: n, action_type: e }, request: l.withEndpoint(a.Z).logUserEventGrok })({ actionTypes: s.dO, context: "GROK_USER_EVENTS_LOG", meta: {} });
        },
        576466: (e, t, n) => {
            n.d(t, { v: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                (e) =>
                (t, n, { api: r }) =>
                    o._O(t, { params: { conversationId: e }, request: r.withEndpoint(a.Z).grokPinConversation })({ actionTypes: s.lh, context: "PIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
        530326: (e, t, n) => {
            n.d(t, { f: () => d });
            n(574858);
            var a = n(323265),
                o = n(389071),
                s = n(623494),
                r = n(806528),
                i = n(155918),
                l = n(958602),
                c = n(250781);
            const d =
                ({ analytics: e, conversationKey: t, userChatItemId: n }) =>
                ({ analysisEntityId: d, returnCitations: p, returnSearchResults: m = !0, trendPromptIdStr: u, features: g = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: f, toolOverrides: h, personalityId: _ }) =>
                (u, y, { api: E, featureSwitches: v }) => {
                    const b = !a.ZP.isTwitterApp() && v.isTrue("responsive_web_grok_api_enable_grok_host"),
                        k = (0, o.bD)(t),
                        C = k.selectConversationId(y());
                    return new Promise((t) => {
                        C || (0, s.Uk)(e, "regenerate function failed to find a conversationId"), t(C);
                    }).then(async (a) => {
                        if ("string" == typeof a) {
                            const C = k.selectMode(y()),
                                T = k.selectConversationWithLocalMessages(y()),
                                w = (0, o.F9)(y()),
                                x = T.findLastIndex((e) => e.sender === i.CI.ASSISTANT && e.userChatItemId === n);
                            if (-1 === x) return void (0, s.Uk)(e, "regenerate function couldn't find an actionable response");
                            const S = T[x],
                                I = S.promptMetadata ? { ...S.promptMetadata, action: "REGENERATE" } : void 0,
                                R = T.slice(0, x).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let Z;
                            const M = v.isTrue("responsive_web_grok_location_enabled");
                            if (M) {
                                const e = (0, r.fw)(y())?.position;
                                e && (Z = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const P = (0, o.en)(y()),
                                D = { ...h };
                            if (P && P.toolOverrides) {
                                const e = P.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    D[t] = e[t];
                                });
                            }
                            const O = S.isDeepsearch,
                                A = S.isReasoning,
                                G = { responses: R, systemPromptName: C, conversationId: a, grokModelOptionId: w, returnSearchResults: m, returnCitations: p, requestFeatures: g, resampleResponseId: n, imageGenerationCount: f, ...(d && 1 === R.length ? { analysisEntityId: d } : void 0), promptMetadata: I, toolOverrides: D, geoLocation: Z, enableSideBySide: !1, isDeepsearch: O, isReasoning: A, personalityId: _, deepsearchArgs: O ? P?.deepsearchArgs : void 0 };
                            null != k.selectCurrentResponseMessage(y()) && (await u((0, l.I)({ analytics: e, conversationKey: t }))), u(k.regenerateResponse(S));
                            const { mediaIds: L, mediaUrls: K } = (0, i.VU)(S);
                            (0, s.c3)(e, { conversationLength: R.length + 1, isDeepsearch: O || void 0, isReasoning: A || void 0, allMediaIds: L.length > 0 ? L : void 0, allMediaUrls: K.length > 0 ? K : void 0 });
                            const N = v.isTrue("responsive_web_grok_enable_add_response_keepalive") && (O || A),
                                F = v.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, c.D)({ grokModule: k, requestBody: G, analytics: e, dispatch: u, api: E, eventTag: "regenerate", flags: { enableLocation: M, enableGrokApiHost: b, numRetries: F, enableKeepalive: N } });
                        }
                    });
                };
        },
        931266: (e, t, n) => {
            n.d(t, { l: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                ({ keyword: e }) =>
                async (t, n, { api: r }) =>
                    o._O(t, { params: { keyword: e }, request: r.withEndpoint(a.Z).searchConversations })({ actionTypes: s.Y8, context: "SEARCH_GROK_HISTORY", meta: {} });
        },
        281030: (e, t, n) => {
            n.d(t, { l: () => r });
            var a = n(6157),
                o = n(917799),
                s = n(189953);
            const r =
                (e) =>
                (t, n, { api: r }) =>
                    o._O(t, { params: { conversationId: e }, request: r.withEndpoint(a.Z).grokUnpinConversation })({ actionTypes: s.lm, context: "UNPIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
        63250: (e, t, n) => {
            n.d(t, { n: () => l });
            var a = n(202784),
                o = n(744610),
                s = n(214997),
                r = n(325686),
                i = n(537392);
            function l({ children: e, isModal: t, maxHeight: n, sectionCount: l }) {
                const [d, p] = a.useState(0),
                    m = a.useRef(new o.Z.Value(0)).current,
                    { height: u } = (0, i.iv)();
                a.useEffect(() => {
                    o.Z.timing(m, { toValue: d, duration: 160, useNativeDriver: !1 }).start();
                }, [d, m]);
                const g = a.useRef(null);
                a.useEffect(() => {
                    g.current && g.current.scrollTo({ x: 0, y: 0, animated: !0 });
                }, [l, g]);
                const f = a.useCallback(
                    (e, t) => {
                        p(Math.min(t, n));
                    },
                    [n, p],
                );
                return a.createElement(r.Z, { style: c.container }, a.createElement(o.Z.View, { style: { height: t ? m : u - (c.fullContainer.height + 65), overflow: t ? "hidden" : "visible" } }, a.createElement(s.Z, { onContentSizeChange: f, pagingEnabled: !0, ref: g }, e)));
            }
            const c = n(392237).default.create((e) => ({ container: { flex: 1 }, fullContainer: { height: e.componentDimensions.appBarHeightPx } }));
        },
        856626: (e, t, n) => {
            n.r(t), n.d(t, { default: () => re });
            var a = n(202784),
                o = n(565058),
                s = n(400752),
                r = n(325686),
                i = n(107267),
                l = n(386802),
                c = n(392237),
                d = n(111677),
                p = n.n(d),
                m = n(323265),
                u = n(420182),
                g = n(980407),
                f = n(309401),
                h = n(15334),
                _ = n(293115),
                y = n(725405),
                E = n(125363),
                v = n(389071),
                b = n(69966),
                k = n(654917),
                C = n(991985),
                T = n(63250),
                w = n(41805),
                x = n(371344),
                S = n(474761),
                I = n(988227),
                R = n(647174),
                Z = n(917862),
                M = n(154003),
                P = n(731708),
                D = n(797553),
                O = n(143670),
                A = n(487552);
            function G({ active: e, hoverLabel: t, icon: n, isDropdown: o, label: s, onPress: r }) {
                return a.createElement(M.ZP, { "aria-label": s || t, backgroundColor: "gray0", borderColor: e ? "gray700" : "transparent", hoverLabel: t ? { label: t } : void 0, icon: n || void 0, onPress: r, size: "small", style: L.button }, a.createElement(P.ZP, { size: "body", style: L.text, weight: "normal" }, s, o && " "), o && a.createElement(A.default, { style: L.text }));
            }
            const L = c.default.create((e) => ({ button: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, text: { color: c.default.theme.colors.gray1000 } }));
            function K({ icon: e, label: t, menuItems: n }) {
                const [o, s] = a.useState(!1),
                    i = a.useCallback(() => {
                        s(!o);
                    }, [o]);
                return a.createElement(
                    r.Z,
                    null,
                    a.createElement(G, { icon: e, isDropdown: !0, label: t, onPress: i }),
                    o &&
                        a.createElement(
                            D.default,
                            { isFixed: !0, onDismiss: i },
                            n.map((e, n) =>
                                a.createElement(O.Z, {
                                    actionSubText: e.actionSubText,
                                    actionText: e.actionText,
                                    disabled: e.disabled,
                                    isSelected: e.isSelected,
                                    key: `${t}_dropdown_${n}`,
                                    onClick: () => {
                                        i(), e.onClick();
                                    },
                                    selectable: e.selectable,
                                }),
                            ),
                        ),
                );
            }
            var N = n(764877),
                F = (n(585488), n(712696)),
                B = n.n(F);
            const H = N.Z;
            function U(e) {
                return { imageGen: e?.image_gen, webSearch: e?.web_search, xSearch: e?.x_search, xMediaSearch: e?.x_media_search, trendsSearch: e?.trends_search, xPostAnalyze: e?.x_post_analyze };
            }
            function z(e) {
                switch (e) {
                    case "IconQuoteStroke":
                        return a.createElement(S.default, { style: j.iconColor });
                    case "IconEye":
                        return a.createElement(I.default, { style: j.iconColor });
                    case "IconMediaCollapse":
                        return a.createElement(R.default, { style: j.iconColor });
                    default:
                        return null;
                }
            }
            function $({ initalText: e, model: t, modelOptions: n, onEnhance: o, onModelSelected: s }) {
                const [i, l] = a.useState(e),
                    c = a.useRef(i),
                    d = a.useRef(!1),
                    p = a.useCallback(
                        (e) => {
                            (c.current = e.target.value), l(e.target.value);
                        },
                        [l],
                    ),
                    m = (function () {
                        const {
                            grok_config: { prompt_revisions: e },
                        } = B()(H, {});
                        return e || [];
                    })(),
                    u = a.useMemo(
                        () =>
                            (m &&
                                m.map(function (e) {
                                    if (e.children && e.children.length) {
                                        const t = "{child_prompt}",
                                            n = [...e.children]
                                                .sort((e, t) => e.display_label.localeCompare(t.display_label))
                                                .map(function (n) {
                                                    const a = e.prompt.replace(t, n.prompt);
                                                    return {
                                                        actionText: n.display_label,
                                                        onClick: () => {
                                                            o({ prompt: a, label: n.display_label, postText: c.current, tools: U(n.tool_overrides) });
                                                        },
                                                    };
                                                });
                                        return a.createElement(K, { icon: z(e.icon_name), key: e.display_label, label: e.display_label, menuItems: n });
                                    }
                                    return a.createElement(G, {
                                        icon: z(e.icon_name),
                                        key: e.display_label,
                                        label: e.display_label,
                                        onPress: () => {
                                            o({ prompt: e.prompt, label: e.display_label, postText: c.current, tools: U(e.tool_overrides) });
                                        },
                                    });
                                })) ||
                            null,
                        [m, o],
                    ),
                    g = a.useMemo(() => {
                        const e = n.find((e) => e.id === t);
                        if (!e) return null;
                        const { text: a } = (0, Z.n)(e.name);
                        return a;
                    }, [n, t]),
                    f = a.useMemo(() => {
                        if (!g || n.length <= 1) return null;
                        const e = n.map((e, n) => {
                            const { tags: o, text: r } = (0, Z.n)(e.name);
                            return { actionText: a.createElement(Z.I, { name: r, tags: o }), actionSubText: e.description, disabled: !e.isEnabled, isSelected: e.id === t, onClick: () => s(e.id), selectable: !0 };
                        });
                        return a.createElement(K, { label: g, menuItems: e });
                    }, [n, t, s, g]);
                return (
                    a.useEffect(() => {
                        if (e && m && m.length && t && !d.current) {
                            const t = m[0];
                            o({ prompt: t.prompt, label: t.display_label, postText: e, tools: U(t.tool_overrides), showDiff: !0 }), (d.current = !0);
                        }
                    }, [m, o, e, t]),
                    a.createElement(r.Z, null, a.createElement(x.Z, { appTextSize: "headline1", leftAligned: !0, maxNumberOfLines: 4, multiline: !0, numberOfLines: 1, onChange: p, styleType: "selection", value: i }), a.createElement(r.Z, { style: j.bottomRow }, a.createElement(r.Z, { style: j.toolRow }, u), f))
                );
            }
            const j = c.default.create((e) => ({ bottomRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, flexWrap: "wrap" }, toolRow: { flexDirection: "row", gap: e.spaces.space8 }, iconColor: { color: c.default.theme.colors.gray1000 }, modelDropdown: { minWidth: 280 }, disabledModel: { cursor: "default" } }));
            var q = n(661810),
                V = n(737691),
                W = n(379327),
                Y = n(567778),
                X = n(617288);
            n(136728);
            function Q(e) {
                const t = (function (e) {
                    return e ? e.replace(/[“”]/g, '"').replaceAll("’", "'").trim() : "";
                })(e);
                return t.match(/\w+|[^\w\s]+|\r?\n/g) || [];
            }
            function J(e) {
                let t = e.filter(Boolean).join(" ");
                return (t = t.replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")), (t = t.replace(/\s+([,.:!?;]+)/g, "$1")), t;
            }
            const ee = { Remix: p().ec601934, Insert: p().f9ecd3ba, DiffButtonLabel: p().af652514 };
            function te({ atoms: e, onResample: t, onSelect: n, orginalPostText: o, showDiff: i, title: l }) {
                const [c, d] = a.useState(i || !1),
                    p = (0, s.Dv)(e.message),
                    m = (0, s.Dv)(e.status),
                    u = "complete" === m || "error" === m,
                    g = (0, y.Z)(),
                    f = p && (c || u),
                    h = f ? p : "",
                    _ = a.useMemo(
                        () =>
                            f
                                ? (function (e, t) {
                                      const n = Q(e),
                                          a = Q(t),
                                          o = n.length,
                                          s = a.length,
                                          r = Array.from({ length: o + 1 }, () => Array(s + 1).fill(0));
                                      for (let e = 1; e <= o; e++) for (let t = 1; t <= s; t++) n[e - 1] === a[t - 1] ? (r[e][t] = r[e - 1][t - 1] + 1) : (r[e][t] = Math.max(r[e - 1][t], r[e][t - 1]));
                                      let i = o,
                                          l = s;
                                      const c = [];
                                      let d = null,
                                          p = [],
                                          m = [];
                                      function u(e) {
                                          (p.length > 0 || m.length > 0) && (c.push({ type: e, textLeft: p.reverse(), textRight: m.reverse() }), (p = []), (m = []));
                                      }
                                      for (; i > 0 || l > 0; ) i > 0 && l > 0 && n[i - 1] === a[l - 1] ? ("match" !== d && (u(d), (d = "match")), p.push(n[i - 1]), m.push(a[l - 1]), i--, l--) : l > 0 && (0 === i || r[i][l - 1] >= r[i - 1][l]) ? ("diff" !== d && (u(d), (d = "diff")), p.push(""), m.push(a[l - 1]), l--) : ("diff" !== d && (u(d), (d = "diff")), p.push(n[i - 1]), m.push(""), i--);
                                      u(d);
                                      const g = c.reverse(),
                                          f = r[o][s],
                                          h = o + s;
                                      return { segments: g, differencePercentage: +(100 * (0 === h ? 0 : 1 - (2 * f) / h)).toFixed(2) };
                                  })(o, h)
                                : void 0,
                        [f, h, o],
                    ),
                    E = a.useCallback(() => {
                        d(!c);
                    }, [c, d]),
                    v = (0, s.Dv)(e.upsell);
                return a.createElement(
                    r.Z,
                    { style: ne.container },
                    a.createElement(q.Z, null),
                    v && a.createElement(Y.w, { upsell: v }),
                    a.createElement(
                        r.Z,
                        { style: ne.innerContainer },
                        a.createElement(
                            r.Z,
                            { style: ne.headerRow },
                            a.createElement(P.ZP, { size: "headline2", style: ne.headerText, weight: "bold" }, l),
                            a.createElement(
                                r.Z,
                                { style: ne.toolRow },
                                _ && a.createElement(G, { active: c, hoverLabel: ee.DiffButtonLabel, key: "diff", label: `± ${Math.round(_.differencePercentage).toString()}%`, onPress: E }),
                                a.createElement(G, {
                                    icon: a.createElement(V.default, null),
                                    key: "regen",
                                    onPress: () => {
                                        e.generate({ analytics: g });
                                    },
                                }),
                                t ? a.createElement(G, { key: "resample", label: ee.Remix, onPress: () => t(p) }) : null,
                                a.createElement(G, { icon: a.createElement(W.default, null), key: "select", label: ee.Insert, onPress: () => n(p, l, (_ && _.differencePercentage) || 0) }),
                            ),
                        ),
                        c && p.length
                            ? a.createElement(
                                  r.Z,
                                  { key: "diff", style: [ne.matchText, ne.postText] },
                                  _ &&
                                      _.segments.map((e, t) => {
                                          const n = J(e.textLeft),
                                              o = J(e.textRight);
                                          return "match" === e.type ? a.createElement(a.Fragment, { key: t }, a.createElement(P.ZP, { key: `match${t}`, size: "headline2", style: ne.matchText }, o, " ")) : a.createElement(a.Fragment, { key: t }, n.length > 0 && a.createElement(P.ZP, { key: `left${t}`, size: "headline2", style: ne.diffTextLeft }, n), n.length > 0 && a.createElement(a.Fragment, null, " "), o.length > 0 && a.createElement(P.ZP, { key: `right${t}`, size: "headline2", style: ne.diffTextRight }, o, " "));
                                      }),
                              )
                            : a.createElement(P.ZP, { key: "nodiff", size: "headline2", style: ne.postText }, !u && !p.length && a.createElement(X.Z, { query: l }), p),
                    ),
                );
            }
            const ne = c.default.create((e) => ({ diffTextRight: { display: "inline", color: e.colors.green500, animationDuration: "300ms", animationTimingFunction: "ease-in", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { opacity: e.colors.green500 } }] }, diffTextLeft: { display: "inline", textDecorationLine: "line-through", color: e.colors.gray500, animationDuration: "300ms", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { color: e.colors.gray600 } }] }, matchText: { display: "inline", color: e.colors.text }, container: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space4 }, innerContainer: { paddingTop: e.spaces.space8, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, headerText: { flex: 1, color: e.colors.gray1000 }, headerRow: { flexDirection: "row", alignItems: "center" }, postText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, toolRow: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space12 } })),
                ae = p().b85f402a,
                oe = { page: m.ZP.isTwitterApp() ? (m.ZP.isAndroid() ? "grok_post_composer_android" : "grok_post_composer_ios") : "grok_post_composer" },
                se = (0, o.cn)([]);
            function re({ children: e }) {
                const t = (0, E.I0)(),
                    n = (0, y.Z)(),
                    o = (0, i.useHistory)(),
                    { changeModel: c, model: d } = (0, k.ZP)(),
                    { isModal: p } = a.useContext(l.Z),
                    m = a.useCallback(() => o.goBack(), [o]),
                    x = (0, s.Dv)(u.zE),
                    [S, I] = (0, s.KO)(se),
                    [R, Z] = (0, w.P)(),
                    M = a.useRef(R).current,
                    P = (0, C.n)(),
                    D = (0, h.u)(),
                    O = (0, E.v9)(v.vf),
                    A = a.useMemo(() => ({ subscription_level: D, grok_details: { grok_mode: "regular", grok_model: d } }), [D, d]);
                a.useEffect(
                    () => (
                        t((0, b.C)({ analytics: n })()),
                        () => {
                            I((e) => []);
                        }
                    ),
                    [t, n, I],
                );
                const G = a.useCallback(
                        ({ label: e, postText: t, prompt: a, showDiff: o, tools: s }) => {
                            n.scribe({ page: oe.page, component: "enhance", action: "submit", data: { message: e } });
                            const r = `${a}\n\n${t}`,
                                i = e,
                                l = s;
                            I((e) => {
                                const a = new f.T(x);
                                return a.updatePrompt(r || ""), (a.model = d || ""), (a.promptSource = "POST_COMPOSER_TEXT_GEN"), a.generate({ analytics: n, prompt: { toolOverrides: l, returnCitations: !1 } }), [...e, { atoms: a, title: i, postText: t, showDiff: o }];
                            });
                        },
                        [I, n, x, d],
                    ),
                    L = a.useCallback(
                        (e, t, a) => {
                            n.scribe({ page: oe.page, component: "insert", action: "click", data: { message: t, event_value: a } }), Z(e), m();
                        },
                        [m, Z, n],
                    ),
                    K = a.useCallback(
                        (e) => {
                            const t = O.find((t) => t.id === e);
                            t && c(e, t.id, n);
                        },
                        [c, O, n],
                    );
                return a.createElement(_.nO, { data: A, namespace: oe }, a.createElement(g.Z, { documentTitle: ae, history: o, onBackClick: m, title: ae }, a.createElement(r.Z, { ref: P, style: ie.contentWrapper }, a.createElement(T.n, { isModal: p, maxHeight: 500, sectionCount: S.length }, a.createElement($, { initalText: M, model: d, modelOptions: O, onEnhance: G, onModelSelected: K }), S.map(({ atoms: e, postText: t, showDiff: n, title: o }, s) => a.createElement(te, { atoms: e, key: s, onSelect: L, orginalPostText: t, showDiff: n, title: o })).reverse()))));
            }
            const ie = c.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
        41805: (e, t, n) => {
            n.d(t, { P: () => l });
            var a = n(202784),
                o = n(976006),
                s = n(125363),
                r = n(632960);
            const i = (e) => {
                const { tweetComposer: t } = e,
                    n = t?.activeParentKey,
                    a = r.E_(e, n),
                    o = t[n];
                return o.composerData[a]?.text || "";
            };
            function l() {
                const e = (0, s.I0)(),
                    t = (0, s.v9)(i),
                    n = a.useCallback(
                        (n) => {
                            if (n === t) return;
                            const a = (0, o.eq)(n);
                            a && a.entityMap && (a.entityMap.GROK_EDITED_TEXT = { type: "GROK_EDITED_TEXT", mutability: "IMMUTABLE", data: { text: n } }), e(r.zi({ updates: { editorStateRaw: a, lateUpdateEditorStateRaw: a, text: n } }));
                        },
                        [t, e],
                    );
                return [t, n];
            }
        },
        979521: (e, t, n) => {
            n.r(t), n.d(t, { Presets: () => Ee, default: () => ke });
            n(136728);
            var a = n(202784),
                o = n(565058),
                s = n(400752),
                r = n(325686),
                i = n(107267),
                l = n(726426),
                c = n.n(l),
                d = n(386802),
                p = n(392237),
                m = n(111677),
                u = n.n(m),
                g = n(323265),
                f = n(420182),
                h = n(980407),
                _ = n(309401),
                y = n(15334),
                E = n(293115),
                v = n(725405),
                b = n(125363),
                k = n(389071),
                C = n(69966),
                T = n(756869),
                w = n(433521),
                x = n(783444),
                S = n(410490),
                I = n(791786),
                R = n(567778),
                Z = n(305442),
                M = n(991985),
                P = n(63250),
                D = (n(543673), n(240753), n(128399), n(128225)),
                O = n(716233),
                A = n(270172),
                G = n(497294),
                L = n(632960);
            const K = [],
                N = (e) => {
                    const { tweetComposer: t } = e,
                        n = t?.activeParentKey,
                        a = L.E_(e, n),
                        o = t[n],
                        s = o.composerData[a]?.mediaIds;
                    return Array.isArray(s) ? s : K;
                },
                F = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function B() {
                const e = (0, b.v9)(N),
                    t = (0, b.I0)(),
                    n = (0, v.Z)(),
                    o = a.useCallback(
                        (a) => (
                            n.scribe({ action: "click", element: "grok_composer_attach_image", data: { url: a.url } }),
                            (async function (e, t, n) {
                                try {
                                    const a = await Promise.all(n.map((t) => (t?.url && F.includes(new URL(t.url).hostname) ? (0, D.f)(t.url || "", !0, !0) : e((0, A.X)(t.url || "")).then((e) => new File([e || new Blob()], "grok.jpg", { type: "image/jpeg" }))))),
                                        o = (await e((0, G.rA)(a, { location: O.vC.Tweet }))).map((e) => e.id);
                                    await Promise.all(o.map((t) => e((0, G.C4)(t)))), await e(L.zi({ updates: { mediaIds: o.concat(t) } }));
                                } catch (e) {}
                            })(t, e, [a])
                        ),
                        [e, t, n],
                    );
                return o;
            }
            var H = n(41805),
                U = n(744610),
                z = n(86657);
            function $({ atoms: e, onSelect: t }) {
                const n = (0, s.Dv)(e.fileAttachments),
                    o = "error" === (0, s.Dv)(e.status) && !n.some((e) => e.url),
                    i = n.length > 1 ? V : q,
                    l = (0, s.Dv)(e.status),
                    c = "complete" !== l && "error" !== l,
                    d = !o && n.length,
                    [p, m] = a.useState({ height: 0 }),
                    u = a.useRef(new U.Z.Value(0)).current;
                return (
                    a.useEffect(() => {
                        U.Z.parallel([U.Z.timing(u, { toValue: p.height, duration: 160, useNativeDriver: !1 })]).start();
                    }, [p, u]),
                    a.createElement(
                        U.Z.View,
                        { style: { height: u, overflow: "hidden" } },
                        a.createElement(
                            r.Z,
                            {
                                onLayout: (e) => {
                                    const { height: t, width: n } = e.nativeEvent.layout;
                                    m({ width: n, height: t });
                                },
                                style: i.containerStyle,
                            },
                            d ? n.map((e, n) => a.createElement(r.Z, { key: `slot_${n}`, style: i.itemStyle }, a.createElement(z.Z, { aspectRatio: i.aspectRatio, file: e, intermediateResults: e.intermediateResults, isImageActionsEnabled: !1, isLoading: !!c, key: `${e.fileName}_${n}`, onClick: () => t(e) }))) : null,
                        ),
                    )
                );
            }
            const j = p.default.create((e) => ({ fileAttachmentContainer: { width: "100%", flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space12 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "98%" } })),
                q = { height: void 0, aspectRatio: 4 / 3, itemStyle: j.fileAttachmentSingleItem, containerStyle: j.fileAttachmentContainer },
                V = { height: 400, aspectRatio: void 0, itemStyle: j.fileAttachmentMultiItem, containerStyle: [j.fileAttachmentContainer, j.fileAttachmentContainerMulti] },
                W = V.height,
                Y = a.memo($);
            var X = n(731708),
                Q = n(737691),
                J = n(725516),
                ee = n(276522),
                te = n(697403);
            const ne = u().idf94bac;
            function ae({ atoms: e, isLoadingAny: t }) {
                const n = (0, s.Dv)(e.prompt),
                    o = (0, J.z)(),
                    i = (0, s.Dv)(t);
                return a.createElement(
                    r.Z,
                    { style: oe.container },
                    a.createElement(r.Z, { style: oe.textContainer }, a.createElement(te.Z, { foldedHeight: 35, heightBreakpoint: 60 }, a.createElement(X.ZP, { style: oe.textStyle }, n))),
                    a.createElement(ee.Z, {
                        disabled: i,
                        icon: a.createElement(Q.default, null),
                        label: ne,
                        onPress: () => {
                            e.generate({ analytics: o });
                        },
                    }),
                );
            }
            const oe = p.default.create((e) => ({ container: { flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingBottom: e.spaces.space4 }, textContainer: { flex: 1 }, textStyle: { fontSize: e.fontSizes.headline2 } })),
                se = { page: g.ZP.isTwitterApp() ? (g.ZP.isAndroid() ? "grok_composer_android" : "grok_composer_ios") : "grok_composer" },
                re = u().eb0d91ac,
                ie = u().c5a23514,
                le = u().g1cb8096,
                ce = u().a5a3df56,
                de = [u().gbb4e90a, u().af21f92e, u().e207cba2, u().b1323f10, u().g6a90174, u().jdc4b66c];
            function pe() {
                const e = Math.floor(Math.random() * de.length);
                return de[e];
            }
            const me = (0, o.cn)([]),
                ue = (0, o.cn)([]),
                ge = (0, o.cn)((e) =>
                    e(me).some((t) => {
                        const n = e(t.status);
                        return "complete" !== n && "error" !== n;
                    }),
                ),
                fe = (0, o.cn)((e) => {
                    const t = e(me);
                    for (let n = 0; n < t.length; n++) {
                        const a = e(t[n].upsell);
                        if (a) return a;
                    }
                }),
                he = (0, o.cn)((e) => {
                    const t = new _.Z(),
                        n = e(t.fileAttachments);
                    return (
                        e(ue).map((e) => {
                            n.push({ url: e.media_url, fileName: "", mimeType: "image/jpeg" });
                        }),
                        t
                    );
                }),
                _e = c()();
            function ye({ promptTextSender: e }) {
                const t = a.useCallback(() => {}, []);
                return a.createElement(
                    r.Z,
                    { style: Ce.presentPromptContainer },
                    a.createElement(S.b, { coverUrl: w, label: ie, onClose: t, onSendPrompt: e, prompt: ie }),
                    a.createElement(S.b, {
                        coverUrl: x,
                        label: le,
                        onClose: t,
                        onSendPrompt: () => {
                            const t = pe();
                            e(t, t);
                        },
                        prompt: pe(),
                    }),
                );
            }
            const Ee = a.memo(ye);
            function ve({ promptTextSender: e }) {
                const [t, n] = (0, s.KO)(ue),
                    o = (0, b.v9)(k.SL),
                    r = "loaded" === (0, b.v9)(k.hi);
                a.useEffect(() => {
                    n(o);
                }, [o, n]);
                const i = t.length;
                return !r || i ? null : a.createElement(Ee, { promptTextSender: e });
            }
            const be = new _.T((0, o.MT)());
            function ke({ children: e }) {
                const t = (0, b.I0)(),
                    n = (0, v.Z)(),
                    o = (0, i.useHistory)(),
                    l = (0, M.n)(),
                    c = (0, Z.Z)("composer"),
                    { isModal: p } = a.useContext(d.Z),
                    m = (0, s.Dv)(f.zE),
                    u = (0, s.Dv)(he),
                    [g, w] = (0, s.KO)(me),
                    x = a.useMemo(() => (g.length ? g[g.length - 1] : be), [g]),
                    S = (0, s.Dv)(x.status),
                    D = (0, s.Dv)(ge),
                    O = "idle" === S,
                    A = (0, s.Dv)(fe),
                    G = (0, b.v9)(k.F9),
                    [L] = (0, H.P)(),
                    K = a.useRef(L).current,
                    N = a.useCallback(
                        (e) => {
                            const t = new _.T(m);
                            w((e) => (e.length && e[e.length - 1].abort(), [...e, t])), t.updatePrompt(e.text || ""), (t.imageGenerationCount = c), (t.model = G || ""), (t.promptSource = "POST_COMPOSER_IMAGE_GEN"), t.generate({ prompt: e, analytics: n });
                        },
                        [n, m, w, G, c],
                    ),
                    F = a.useCallback(
                        (e, t) => {
                            N({ text: t || e, returnCitations: !1 });
                        },
                        [N],
                    );
                a.useEffect(
                    () => (
                        t((0, C.C)({ analytics: n })()),
                        t((0, k.Ki)(_e)),
                        t((0, T._)()),
                        K && F(K, ""),
                        () => {
                            w([]);
                        }
                    ),
                    [t, w, n, K, F],
                );
                const U = a.useCallback(() => o.goBack(), [o]),
                    z = B(),
                    $ = a.useCallback(
                        (e) => {
                            z(e).then(U);
                        },
                        [z, U],
                    ),
                    j = (0, y.u)(),
                    q = a.useMemo(() => ({ subscription_level: j, grok_details: { grok_mode: "regular", grok_model: G } }), [j, G]);
                return a.createElement(E.nO, { data: q, namespace: se }, a.createElement(h.Z, { documentTitle: re, history: o, onBackClick: U, title: re }, A ? a.createElement(R.w, { upsell: A }) : null, a.createElement(r.Z, { ref: l, style: Ce.contentWrapper }, a.createElement(r.Z, { style: Ce.inputContainer }, !A && G ? a.createElement(I.Z, { abortController: x.abortController, conversationKey: _e, disableFileUploads: !0, hasAccess: !0, isIdle: !D || O, placeholder: ce, promptSender: N, useMagicWandIcon: !0, useNonExpanded: !0 }) : null), a.createElement(P.n, { isModal: p, maxHeight: 2 * W + 70, sectionCount: g.length }, g.map((e, t) => a.createElement(r.Z, { key: `grokMessages${t}` }, a.createElement(ae, { atoms: e, isLoadingAny: ge, key: `PromptRow${t}` }), a.createElement(Y, { atoms: e, key: `InlineAttachmentGallery${t}`, onSelect: $ }))).reverse(), a.createElement(ve, { promptTextSender: F }), a.createElement(Y, { atoms: u, key: "history", onSelect: $ })))));
            }
            const Ce = p.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-63cb1cc4.9091bc9a.js.map
