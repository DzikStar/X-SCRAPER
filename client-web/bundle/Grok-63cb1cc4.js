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
            n.d(t, { X: () => c });
            var a = n(323265),
                o = n(389071),
                s = n(623494),
                r = n(958602),
                i = n(250781);
            const c =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: n, editingMessageId: c, fileAttachments: l, mode: p, onStart: d, returnCitations: m, returnSearchResults: u = !0, features: g = { eagerTweets: !0, serverHistory: !0 }, text: h, trendPromptIdStr: f, imageGenerationCount: _, isReasoning: y, isDeepsearch: E, personalityId: v }) =>
                async (p, f, { api: b, featureSwitches: k }) => {
                    const C = !a.ZP.isTwitterApp() && k.isTrue("responsive_web_grok_api_enable_grok_host"),
                        T = (0, o.bD)(t),
                        w = T.selectConversationId(f()),
                        x = a.ZP.isAndroid(),
                        S = a.ZP.isIOS();
                    if (!w) return void (0, s.Uk)(e, "edit function failed to find a conversationId");
                    const I = T.selectMode(f()),
                        R = T.selectMessageIds(f()),
                        Z = T.selectConversationWithLocalMessages(f()),
                        P = (0, o.F9)(f()),
                        D = R.indexOf(c);
                    if (-1 === D) return void (0, s.Uk)(e, "edit function couldn't find an actionable response");
                    const O = Z[D];
                    let A = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === O?.promptMetadata?.promptSource ? (A = { ...O.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === O?.promptMetadata?.promptSource && "IMAGE_GEN" === O?.promptMetadata?.properties?.messageType && (A = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const M = [...Z.slice(0, D).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: O.sender, fileAttachments: l, message: h, isDeepsearch: E, isReasoning: y }],
                        G = (0, o.en)(f());
                    let L = {};
                    G && G.toolOverrides && (L = G.toolOverrides);
                    const K = { responses: M, systemPromptName: I, conversationId: w, grokModelOptionId: P, resampleResponseId: O.userChatItemId, returnSearchResults: u, returnCitations: m, requestFeatures: g, ...(n && 1 === M.length ? { analysisEntityId: n } : void 0), promptMetadata: A, imageGenerationCount: _, enableSideBySide: !x && !S, isDeepsearch: E, isReasoning: y, personalityId: v, toolOverrides: L, deepsearchArgs: E ? G?.deepsearchArgs : void 0 };
                    null != T.selectCurrentResponseMessage(f()) && (await p((0, r.I)({ analytics: e, conversationKey: t }))), h && p(T.commitEditChanges(c, h, l)), (0, s.dd)(e, { conversationLength: M.length, isDeepsearch: K.isDeepsearch || void 0, isReasoning: K.isReasoning || void 0 }), d?.();
                    const N = k.isTrue("responsive_web_grok_enable_add_response_keepalive") && (E || y),
                        B = k.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (0, i.D)({ grokModule: T, requestBody: K, analytics: e, dispatch: p, api: b, eventTag: "rewrite", flags: { enableGrokApiHost: C, enableKeepalive: N, numRetries: B } });
                };
        },
        69966: (e, t, n) => {
            n.d(t, { C: () => c });
            n(136728);
            var a = n(389071),
                o = n(6157),
                s = n(917799),
                r = n(806528),
                i = n(189953);
            const c =
                ({ analytics: e }) =>
                () =>
                (e, t, { api: n, featureSwitches: c }) => {
                    const l = (0, a.YJ)(t()),
                        p = s._O(e, { request: n.withEndpoint(o.Z).fetchGrokHome, params: {} });
                    if (c.isTrue("responsive_web_grok_location_enabled")) {
                        const n = (0, r.fw)(t());
                        "granted" !== n.permissionStatus || n.position || e((0, r.ZW)());
                    }
                    return p({ actionTypes: i.Yx, context: "FETCH_GROK_HOME", meta: {} }, (e) => {
                        const t = [];
                        if (e) {
                            if ((e.grok_home?.default_grok_mode && t.push(l.setMode("Fun" === e.grok_home.default_grok_mode ? i.IK.FUN : i.IK.REGULAR)), e.grok_home?.default_grok_model_option_id)) {
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
            n.d(t, { V: () => l });
            n(136728);
            var a = n(506899),
                o = n(6157),
                s = n(171697),
                r = n(917799),
                i = n(56519),
                c = n(189953);
            const l =
                (e) =>
                (t, n, { api: l }) =>
                    r._O(t, { params: { grok_share_id: e }, request: l.withEndpoint(o.Z).fetchGrokShareGraphQL })({ actionTypes: c.dK, context: "FETCH_GROK_SHARE", meta: {} }, (t) => {
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
                async (r, i, { api: c }) =>
                    o._O(r, { params: { group_id: t, object_id: n, action_type: e }, request: c.withEndpoint(a.Z).logUserEventGrok })({ actionTypes: s.dO, context: "GROK_USER_EVENTS_LOG", meta: {} });
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
            n.d(t, { f: () => p });
            n(574858);
            var a = n(323265),
                o = n(389071),
                s = n(623494),
                r = n(806528),
                i = n(155918),
                c = n(958602),
                l = n(250781);
            const p =
                ({ analytics: e, conversationKey: t, userChatItemId: n }) =>
                ({ analysisEntityId: p, returnCitations: d, returnSearchResults: m = !0, trendPromptIdStr: u, features: g = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: h, toolOverrides: f, personalityId: _ }) =>
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
                            const P = v.isTrue("responsive_web_grok_location_enabled");
                            if (P) {
                                const e = (0, r.fw)(y())?.position;
                                e && (Z = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const D = (0, o.en)(y()),
                                O = { ...f };
                            if (D && D.toolOverrides) {
                                const e = D.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    O[t] = e[t];
                                });
                            }
                            const A = S.isDeepsearch,
                                M = S.isReasoning,
                                G = { responses: R, systemPromptName: C, conversationId: a, grokModelOptionId: w, returnSearchResults: m, returnCitations: d, requestFeatures: g, resampleResponseId: n, imageGenerationCount: h, ...(p && 1 === R.length ? { analysisEntityId: p } : void 0), promptMetadata: I, toolOverrides: O, geoLocation: Z, enableSideBySide: !1, isDeepsearch: A, isReasoning: M, personalityId: _, deepsearchArgs: A ? D?.deepsearchArgs : void 0 };
                            null != k.selectCurrentResponseMessage(y()) && (await u((0, c.I)({ analytics: e, conversationKey: t }))), u(k.regenerateResponse(S));
                            const { mediaIds: L, mediaUrls: K } = (0, i.VU)(S);
                            (0, s.c3)(e, { conversationLength: R.length + 1, isDeepsearch: A || void 0, isReasoning: M || void 0, allMediaIds: L.length > 0 ? L : void 0, allMediaUrls: K.length > 0 ? K : void 0 });
                            const N = v.isTrue("responsive_web_grok_enable_add_response_keepalive") && (A || M),
                                B = v.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, l.D)({ grokModule: k, requestBody: G, analytics: e, dispatch: u, api: E, eventTag: "regenerate", flags: { enableLocation: P, enableGrokApiHost: b, numRetries: B, enableKeepalive: N } });
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
            n.d(t, { n: () => c });
            var a = n(202784),
                o = n(744610),
                s = n(214997),
                r = n(325686),
                i = n(537392);
            function c({ children: e, isModal: t, maxHeight: n, sectionCount: c }) {
                const [p, d] = a.useState(0),
                    m = a.useRef(new o.Z.Value(0)).current,
                    { height: u } = (0, i.iv)();
                a.useEffect(() => {
                    o.Z.timing(m, { toValue: p, duration: 160, useNativeDriver: !1 }).start();
                }, [p, m]);
                const g = a.useRef(null);
                a.useEffect(() => {
                    g.current && g.current.scrollTo({ x: 0, y: 0, animated: !0 });
                }, [c, g]);
                const h = a.useCallback(
                    (e, t) => {
                        d(Math.min(t, n));
                    },
                    [n, d],
                );
                return a.createElement(r.Z, { style: l.container }, a.createElement(o.Z.View, { style: { height: t ? m : u - (l.fullContainer.height + 65), overflow: t ? "hidden" : "visible" } }, a.createElement(s.Z, { onContentSizeChange: h, pagingEnabled: !0, ref: g }, e)));
            }
            const l = n(392237).default.create((e) => ({ container: { flex: 1 }, fullContainer: { height: e.componentDimensions.appBarHeightPx } }));
        },
        856626: (e, t, n) => {
            n.r(t), n.d(t, { default: () => oe });
            var a = n(202784),
                o = n(565058),
                s = n(400752),
                r = n(325686),
                i = n(107267),
                c = n(386802),
                l = n(392237),
                p = n(674132),
                d = n.n(p),
                m = n(323265),
                u = n(420182),
                g = n(980407),
                h = n(309401),
                f = n(15334),
                _ = n(293115),
                y = n(725405),
                E = n(125363),
                v = n(389071),
                b = n(69966),
                k = n(991985),
                C = n(63250),
                T = n(41805),
                w = n(371344),
                x = n(474761),
                S = n(988227),
                I = n(647174),
                R = n(154003),
                Z = n(731708),
                P = n(797553),
                D = n(143670),
                O = n(487552);
            function A({ active: e, hoverLabel: t, icon: n, isDropdown: o, label: s, onPress: r }) {
                return a.createElement(R.ZP, { "aria-label": s || t, backgroundColor: "gray0", borderColor: e ? "gray700" : "transparent", hoverLabel: t ? { label: t } : void 0, icon: n || void 0, onPress: r, size: "small", style: M.button }, a.createElement(Z.ZP, { size: "body", style: M.text, weight: "normal" }, s, o && " "), o && a.createElement(O.default, { style: M.text }));
            }
            const M = l.default.create((e) => ({ button: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8 }, text: { color: l.default.theme.colors.gray1000 } }));
            function G({ icon: e, label: t, menuItems: n }) {
                const [o, s] = a.useState(!1),
                    i = a.useCallback(() => {
                        s(!o);
                    }, [o]);
                return a.createElement(
                    r.Z,
                    null,
                    a.createElement(A, { icon: e, isDropdown: !0, label: t, onPress: i }),
                    o &&
                        a.createElement(
                            P.default,
                            { isFixed: !0, onDismiss: i },
                            n.map((e) =>
                                a.createElement(D.Z, {
                                    actionText: e.label,
                                    key: e.label,
                                    onClick: () => {
                                        i(), e.onClick();
                                    },
                                }),
                            ),
                        ),
                );
            }
            var L = n(764877),
                K = (n(585488), n(712696)),
                N = n.n(K);
            const B = L.Z;
            function F(e) {
                return { imageGen: e?.image_gen, webSearch: e?.web_search, xSearch: e?.x_search, xMediaSearch: e?.x_media_search, trendsSearch: e?.trends_search, xPostAnalyze: e?.x_post_analyze };
            }
            function H(e) {
                switch (e) {
                    case "IconQuoteStroke":
                        return a.createElement(x.default, { style: z.iconColor });
                    case "IconEye":
                        return a.createElement(S.default, { style: z.iconColor });
                    case "IconMediaCollapse":
                        return a.createElement(I.default, { style: z.iconColor });
                    default:
                        return null;
                }
            }
            function U({ initalText: e, model: t, onEnhance: n }) {
                const [o, s] = a.useState(e),
                    i = a.useRef(o),
                    c = a.useCallback(
                        (e) => {
                            (i.current = e.target.value), s(e.target.value);
                        },
                        [s],
                    ),
                    l = (function () {
                        const {
                            grok_config: { prompt_revisions: e },
                        } = N()(B, {});
                        return e || [];
                    })(),
                    p = a.useMemo(
                        () =>
                            (l &&
                                l.map(function (e) {
                                    if (e.children && e.children.length) {
                                        const t = "{child_prompt}",
                                            o = e.children
                                                .map(function (a) {
                                                    const o = e.prompt.replace(t, a.prompt);
                                                    return {
                                                        label: a.display_label,
                                                        onClick: () => {
                                                            n({ prompt: o, label: a.display_label, postText: i.current, tools: F(a.tool_overrides) });
                                                        },
                                                    };
                                                })
                                                .sort((e, t) => e.label.localeCompare(t.label));
                                        return a.createElement(G, { icon: H(e.icon_name), key: e.display_label, label: e.display_label, menuItems: o });
                                    }
                                    return a.createElement(A, {
                                        icon: H(e.icon_name),
                                        key: e.display_label,
                                        label: e.display_label,
                                        onPress: () => {
                                            n({ prompt: e.prompt, label: e.display_label, postText: i.current, tools: F(e.tool_overrides) });
                                        },
                                    });
                                })) ||
                            null,
                        [l, n],
                    );
                return (
                    a.useEffect(() => {
                        if (e && l && l.length && t) {
                            const t = l[0];
                            n({ prompt: t.prompt, label: t.display_label, postText: e, tools: F(t.tool_overrides), showDiff: !0 });
                        }
                    }, [l, n, e, t]),
                    a.createElement(r.Z, null, a.createElement(w.Z, { appTextSize: "headline1", leftAligned: !0, maxNumberOfLines: 4, multiline: !0, numberOfLines: 1, onChange: c, styleType: "selection", value: o }), a.createElement(r.Z, { style: z.toolRow }, p))
                );
            }
            const z = l.default.create((e) => ({ toolRow: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8, flexDirection: "row", gap: e.spaces.space8 }, iconColor: { color: l.default.theme.colors.gray1000 } }));
            var q = n(661810),
                $ = n(737691),
                j = n(379327),
                V = n(567778),
                W = n(617288);
            n(136728);
            function Y(e) {
                const t = (function (e) {
                    return e ? e.replace(/[“”]/g, '"').replaceAll("’", "'").trim() : "";
                })(e);
                return t.match(/\w+|[^\w\s]+|\r?\n/g) || [];
            }
            function X(e) {
                let t = e.filter(Boolean).join(" ");
                return (t = t.replace(/([A-Za-z])\s*'\s*([A-Za-z])/g, "$1'$2")), (t = t.replace(/\s+([,.:!?;]+)/g, "$1")), t;
            }
            const Q = { Remix: d().ec601934, Insert: d().f9ecd3ba, DiffButtonLabel: d().af652514 };
            function J({ atoms: e, onResample: t, onSelect: n, orginalPostText: o, showDiff: i, title: c }) {
                const [l, p] = a.useState(i || !1),
                    d = (0, s.Dv)(e.message),
                    m = (0, s.Dv)(e.status),
                    u = "complete" === m || "error" === m,
                    g = (0, y.Z)(),
                    h = d && (l || u),
                    f = h ? d : "",
                    _ = a.useMemo(
                        () =>
                            h
                                ? (function (e, t) {
                                      const n = Y(e),
                                          a = Y(t),
                                          o = n.length,
                                          s = a.length,
                                          r = Array.from({ length: o + 1 }, () => Array(s + 1).fill(0));
                                      for (let e = 1; e <= o; e++) for (let t = 1; t <= s; t++) n[e - 1] === a[t - 1] ? (r[e][t] = r[e - 1][t - 1] + 1) : (r[e][t] = Math.max(r[e - 1][t], r[e][t - 1]));
                                      let i = o,
                                          c = s;
                                      const l = [];
                                      let p = null,
                                          d = [],
                                          m = [];
                                      function u(e) {
                                          (d.length > 0 || m.length > 0) && (l.push({ type: e, textLeft: d.reverse(), textRight: m.reverse() }), (d = []), (m = []));
                                      }
                                      for (; i > 0 || c > 0; ) i > 0 && c > 0 && n[i - 1] === a[c - 1] ? ("match" !== p && (u(p), (p = "match")), d.push(n[i - 1]), m.push(a[c - 1]), i--, c--) : c > 0 && (0 === i || r[i][c - 1] >= r[i - 1][c]) ? ("diff" !== p && (u(p), (p = "diff")), d.push(""), m.push(a[c - 1]), c--) : ("diff" !== p && (u(p), (p = "diff")), d.push(n[i - 1]), m.push(""), i--);
                                      u(p);
                                      const g = l.reverse(),
                                          h = r[o][s],
                                          f = o + s;
                                      return { segments: g, differencePercentage: +(100 * (0 === f ? 0 : 1 - (2 * h) / f)).toFixed(2) };
                                  })(o, f)
                                : void 0,
                        [h, f, o],
                    ),
                    E = a.useCallback(() => {
                        p(!l);
                    }, [l, p]),
                    v = (0, s.Dv)(e.upsell);
                return a.createElement(
                    r.Z,
                    { style: ee.container },
                    a.createElement(q.Z, null),
                    v && a.createElement(V.w, { upsell: v }),
                    a.createElement(
                        r.Z,
                        { style: ee.innerContainer },
                        a.createElement(
                            r.Z,
                            { style: ee.headerRow },
                            a.createElement(Z.ZP, { size: "headline2", style: ee.headerText, weight: "bold" }, c),
                            a.createElement(
                                r.Z,
                                { style: ee.toolRow },
                                _ && a.createElement(A, { active: l, hoverLabel: Q.DiffButtonLabel, key: "diff", label: `± ${Math.round(_.differencePercentage).toString()}%`, onPress: E }),
                                a.createElement(A, {
                                    icon: a.createElement($.default, null),
                                    key: "regen",
                                    onPress: () => {
                                        e.generate({ analytics: g });
                                    },
                                }),
                                t ? a.createElement(A, { key: "resample", label: Q.Remix, onPress: () => t(d) }) : null,
                                a.createElement(A, { icon: a.createElement(j.default, null), key: "select", label: Q.Insert, onPress: () => n(d, c, (_ && _.differencePercentage) || 0) }),
                            ),
                        ),
                        l && d.length
                            ? a.createElement(
                                  r.Z,
                                  { key: "diff", style: [ee.matchText, ee.postText] },
                                  _ &&
                                      _.segments.map((e, t) => {
                                          const n = X(e.textLeft),
                                              o = X(e.textRight);
                                          return "match" === e.type ? a.createElement(a.Fragment, { key: t }, a.createElement(Z.ZP, { key: `match${t}`, size: "headline2", style: ee.matchText }, o, " ")) : a.createElement(a.Fragment, { key: t }, n.length > 0 && a.createElement(Z.ZP, { key: `left${t}`, size: "headline2", style: ee.diffTextLeft }, n), n.length > 0 && a.createElement(a.Fragment, null, " "), o.length > 0 && a.createElement(Z.ZP, { key: `right${t}`, size: "headline2", style: ee.diffTextRight }, o, " "));
                                      }),
                              )
                            : a.createElement(Z.ZP, { key: "nodiff", size: "headline2", style: ee.postText }, !u && !d.length && a.createElement(W.Z, { query: c }), d),
                    ),
                );
            }
            const ee = l.default.create((e) => ({ diffTextRight: { display: "inline", color: e.colors.green500, animationDuration: "300ms", animationTimingFunction: "ease-in", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { opacity: e.colors.green500 } }] }, diffTextLeft: { display: "inline", textDecorationLine: "line-through", color: e.colors.gray500, animationDuration: "300ms", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { color: e.colors.text }, "100%": { color: e.colors.gray600 } }] }, matchText: { display: "inline", color: e.colors.text }, container: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space4 }, innerContainer: { paddingTop: e.spaces.space8, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, headerText: { flex: 1, color: e.colors.gray1000 }, headerRow: { flexDirection: "row", alignItems: "center" }, postText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, toolRow: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "flex-end", gap: e.spaces.space12 } })),
                te = d().b85f402a,
                ne = { page: m.ZP.isTwitterApp() ? (m.ZP.isAndroid() ? "grok_post_composer_android" : "grok_post_composer_ios") : "grok_post_composer" },
                ae = (0, o.cn)([]);
            function oe({ children: e }) {
                const t = (0, E.I0)(),
                    n = (0, y.Z)(),
                    o = (0, i.useHistory)(),
                    { isModal: l } = a.useContext(c.Z),
                    p = a.useCallback(() => o.goBack(), [o]),
                    d = (0, s.Dv)(u.zE),
                    [m, w] = (0, s.KO)(ae),
                    [x, S] = (0, T.P)(),
                    I = a.useRef(x).current,
                    R = (0, k.n)(),
                    Z = (0, f.u)(),
                    P = (0, E.v9)(v.F9),
                    D = a.useMemo(() => ({ subscription_level: Z, grok_details: { grok_mode: "regular", grok_model: P } }), [Z, P]);
                a.useEffect(
                    () => (
                        t((0, b.C)({ analytics: n })()),
                        () => {
                            w((e) => []);
                        }
                    ),
                    [t, n, w],
                );
                const O = a.useCallback(
                        ({ label: e, postText: t, prompt: a, showDiff: o, tools: s }) => {
                            n.scribe({ page: ne.page, component: "enhance", action: "submit", data: { message: e } });
                            const r = `${a}\n\n${t}`,
                                i = e,
                                c = s;
                            w((e) => {
                                const a = new h.T(d);
                                return a.updatePrompt(r || ""), (a.model = P || ""), (a.promptSource = "POST_COMPOSER_TEXT_GEN"), a.generate({ analytics: n, prompt: { toolOverrides: c, returnCitations: !1 } }), [...e, { atoms: a, title: i, postText: t, showDiff: o }];
                            });
                        },
                        [w, n, d, P],
                    ),
                    A = a.useCallback(
                        (e, t, a) => {
                            n.scribe({ page: ne.page, component: "insert", action: "click", data: { message: t, event_value: a } }), S(e), p();
                        },
                        [p, S, n],
                    );
                return a.createElement(_.nO, { data: D, namespace: ne }, a.createElement(g.Z, { documentTitle: te, history: o, onBackClick: p, title: te }, a.createElement(r.Z, { ref: R, style: se.contentWrapper }, a.createElement(C.n, { isModal: l, maxHeight: 500, sectionCount: m.length }, a.createElement(U, { initalText: I, model: P, onEnhance: O }), m.map(({ atoms: e, postText: t, showDiff: n, title: o }, s) => a.createElement(J, { atoms: e, key: s, onSelect: A, orginalPostText: t, showDiff: n, title: o })).reverse()))));
            }
            const se = l.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
        41805: (e, t, n) => {
            n.d(t, { P: () => c });
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
            function c() {
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
                c = n(726426),
                l = n.n(c),
                p = n(386802),
                d = n(392237),
                m = n(674132),
                u = n.n(m),
                g = n(323265),
                h = n(420182),
                f = n(980407),
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
                P = n(991985),
                D = n(63250),
                O = (n(543673), n(240753), n(128399), n(128225)),
                A = n(716233),
                M = n(270172),
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
                B = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function F() {
                const e = (0, b.v9)(N),
                    t = (0, b.I0)(),
                    n = (0, v.Z)(),
                    o = a.useCallback(
                        (a) => (
                            n.scribe({ action: "click", element: "grok_composer_attach_image", data: { url: a.url } }),
                            (async function (e, t, n) {
                                try {
                                    const a = await Promise.all(n.map((t) => (t?.url && B.includes(new URL(t.url).hostname) ? (0, O.f)(t.url || "", !0, !0) : e((0, M.X)(t.url || "")).then((e) => new File([e || new Blob()], "grok.jpg", { type: "image/jpeg" }))))),
                                        o = (await e((0, G.rA)(a, { location: A.vC.Tweet }))).map((e) => e.id);
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
            function q({ atoms: e, onSelect: t }) {
                const n = (0, s.Dv)(e.fileAttachments),
                    o = "error" === (0, s.Dv)(e.status) && !n.some((e) => e.url),
                    i = n.length > 1 ? V : j,
                    c = (0, s.Dv)(e.status),
                    l = "complete" !== c && "error" !== c,
                    p = !o && n.length,
                    [d, m] = a.useState({ height: 0 }),
                    u = a.useRef(new U.Z.Value(0)).current;
                return (
                    a.useEffect(() => {
                        U.Z.parallel([U.Z.timing(u, { toValue: d.height, duration: 160, useNativeDriver: !1 })]).start();
                    }, [d, u]),
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
                            p ? n.map((e, n) => a.createElement(r.Z, { key: `slot_${n}`, style: i.itemStyle }, a.createElement(z.Z, { aspectRatio: i.aspectRatio, file: e, intermediateResults: e.intermediateResults, isImageActionsEnabled: !1, isLoading: !!l, key: `${e.fileName}_${n}`, onClick: () => t(e) }))) : null,
                        ),
                    )
                );
            }
            const $ = d.default.create((e) => ({ fileAttachmentContainer: { width: "100%", flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space12 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "98%" } })),
                j = { height: void 0, aspectRatio: 4 / 3, itemStyle: $.fileAttachmentSingleItem, containerStyle: $.fileAttachmentContainer },
                V = { height: 400, aspectRatio: void 0, itemStyle: $.fileAttachmentMultiItem, containerStyle: [$.fileAttachmentContainer, $.fileAttachmentContainerMulti] },
                W = V.height,
                Y = a.memo(q);
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
            const oe = d.default.create((e) => ({ container: { flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingBottom: e.spaces.space4 }, textContainer: { flex: 1 }, textStyle: { fontSize: e.fontSizes.headline2 } })),
                se = { page: g.ZP.isTwitterApp() ? (g.ZP.isAndroid() ? "grok_composer_android" : "grok_composer_ios") : "grok_composer" },
                re = u().eb0d91ac,
                ie = u().c5a23514,
                ce = u().g1cb8096,
                le = u().a5a3df56,
                pe = [u().gbb4e90a, u().af21f92e, u().e207cba2, u().b1323f10, u().g6a90174, u().jdc4b66c];
            function de() {
                const e = Math.floor(Math.random() * pe.length);
                return pe[e];
            }
            const me = (0, o.cn)([]),
                ue = (0, o.cn)([]),
                ge = (0, o.cn)((e) =>
                    e(me).some((t) => {
                        const n = e(t.status);
                        return "complete" !== n && "error" !== n;
                    }),
                ),
                he = (0, o.cn)((e) => {
                    const t = e(me);
                    for (let n = 0; n < t.length; n++) {
                        const a = e(t[n].upsell);
                        if (a) return a;
                    }
                }),
                fe = (0, o.cn)((e) => {
                    const t = new _.Z(),
                        n = e(t.fileAttachments);
                    return (
                        e(ue).map((e) => {
                            n.push({ url: e.media_url, fileName: "", mimeType: "image/jpeg" });
                        }),
                        t
                    );
                }),
                _e = l()();
            function ye({ promptTextSender: e }) {
                const t = a.useCallback(() => {}, []);
                return a.createElement(
                    r.Z,
                    { style: Ce.presentPromptContainer },
                    a.createElement(S.b, { coverUrl: w, label: ie, onClose: t, onSendPrompt: e, prompt: ie }),
                    a.createElement(S.b, {
                        coverUrl: x,
                        label: ce,
                        onClose: t,
                        onSendPrompt: () => {
                            const t = de();
                            e(t, t);
                        },
                        prompt: de(),
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
                    c = (0, P.n)(),
                    l = (0, Z.Z)("composer"),
                    { isModal: d } = a.useContext(p.Z),
                    m = (0, s.Dv)(h.zE),
                    u = (0, s.Dv)(fe),
                    [g, w] = (0, s.KO)(me),
                    x = a.useMemo(() => (g.length ? g[g.length - 1] : be), [g]),
                    S = (0, s.Dv)(x.status),
                    O = (0, s.Dv)(ge),
                    A = "idle" === S,
                    M = (0, s.Dv)(he),
                    G = (0, b.v9)(k.F9),
                    [L] = (0, H.P)(),
                    K = a.useRef(L).current,
                    N = a.useCallback(
                        (e) => {
                            const t = new _.T(m);
                            w((e) => (e.length && e[e.length - 1].abort(), [...e, t])), t.updatePrompt(e.text || ""), (t.imageGenerationCount = l), (t.model = G || ""), (t.promptSource = "POST_COMPOSER_IMAGE_GEN"), t.generate({ prompt: e, analytics: n });
                        },
                        [n, m, w, G, l],
                    ),
                    B = a.useCallback(
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
                        K && B(K, ""),
                        () => {
                            w([]);
                        }
                    ),
                    [t, w, n, K, B],
                );
                const U = a.useCallback(() => o.goBack(), [o]),
                    z = F(),
                    q = a.useCallback(
                        (e) => {
                            z(e).then(U);
                        },
                        [z, U],
                    ),
                    $ = (0, y.u)(),
                    j = a.useMemo(() => ({ subscription_level: $, grok_details: { grok_mode: "regular", grok_model: G } }), [$, G]);
                return a.createElement(E.nO, { data: j, namespace: se }, a.createElement(f.Z, { documentTitle: re, history: o, onBackClick: U, title: re }, M ? a.createElement(R.w, { upsell: M }) : null, a.createElement(r.Z, { ref: c, style: Ce.contentWrapper }, a.createElement(r.Z, { style: Ce.inputContainer }, !M && G ? a.createElement(I.Z, { abortController: x.abortController, conversationKey: _e, disableFileUploads: !0, hasAccess: !0, isIdle: !O || A, placeholder: le, promptSender: N, useMagicWandIcon: !0, useNonExpanded: !0 }) : null), a.createElement(D.n, { isModal: d, maxHeight: 2 * W + 70, sectionCount: g.length }, g.map((e, t) => a.createElement(r.Z, { key: `grokMessages${t}` }, a.createElement(ae, { atoms: e, isLoadingAny: ge, key: `PromptRow${t}` }), a.createElement(Y, { atoms: e, key: `InlineAttachmentGallery${t}`, onSelect: q }))).reverse(), a.createElement(ve, { promptTextSender: B }), a.createElement(Y, { atoms: u, key: "history", onSelect: q })))));
            }
            const Ce = d.default.create((e) => ({ inputContainer: { paddingBottom: e.spaces.space12, paddingStart: e.spaces.space2, paddingEnd: e.spaces.space2 }, contentWrapper: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingBottom: e.spaces.space12, flex: 1, backgroundColor: e.colors.cellBackground }, presentPromptContainer: { gap: e.spaces.space32, flexDirection: "row", alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-63cb1cc4.cdcecd6a.js.map
