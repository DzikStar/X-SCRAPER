(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-9f4db315", "loader.FeedbackSheet"],
    {
        805020: (e) => {
            e.exports = { queryId: "TUo5Hk_nQNjxM9UEIasNag", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        803386: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        322821: (e) => {
            e.exports = { queryId: "GtkE_fIvGpfhl6AgAxI4ag", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        93595: (e) => {
            e.exports = { queryId: "YIVDdGK-jx-6WJjoytT5GQ", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        53605: (e) => {
            e.exports = { queryId: "lDef0ufkHdz6a5MV7hBegQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        672075: (e) => {
            e.exports = { queryId: "Wbm699yiDT-Yiki66kr26w", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        196969: (e) => {
            e.exports = { queryId: "WL1nCv0GSF54wa0upBzF1g", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        553600: (e) => {
            e.exports = { queryId: "wZ8nA4roHl8gXGBkP4kO0w", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        446405: (e) => {
            e.exports = { queryId: "K6BUpfz4QdzQ8lJ0OjXW-w", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        484636: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => Z });
            var n = a(506899),
                r = a(414742);
            const i = new n.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var l = a(805020),
                o = a.n(l),
                s = a(803386),
                c = a.n(s),
                d = a(322821),
                u = a.n(d),
                p = a(93595),
                m = a.n(p),
                b = a(53605),
                _ = a.n(b),
                h = a(672075),
                f = a.n(h),
                g = a(196969),
                y = a.n(g),
                v = a(553600),
                C = a.n(v),
                w = a(446405),
                E = a.n(w),
                k = a(934309);
            const Z = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: a, title: r } = t;
                    return e.graphQL(u(), { content_state: a, title: r }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, i));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(_(), { articleEntityId: a }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, i));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(c(), { articleEntityId: a }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: a, content_state: r } = t;
                    return e.graphQL(y(), { content_state: r, article_entity: a }).then((e) => (0, n.Fv)(e.articleentity_update_content_state, i));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: a, mediaCategory: r, mediaId: l } = t;
                    return e.graphQL(C(), { articleEntityId: a, coverMedia: l && r ? { media_id: l, media_category: r } : void 0 }).then((e) => (0, n.Fv)(e.articleentity_update_cover_media, i));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: a, title: r } = t;
                    return e.graphQL(E(), { articleEntityId: a, title: r }).then((e) => (0, n.Fv)(e.articleentity_update_title, i));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: a, conversationControl: r, visibilitySetting: l } = t;
                    return e.graphQL(m(), { articleEntityId: a, visibilitySetting: l, ...(r && { conversationControl: { mode: r } }) }).then((e) => (0, n.Fv)(e.articleentity_publish?.article_entity_results?.result, i));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(f(), { articleEntityId: a }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, i));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  o(),
                                  t,
                                  (0, r.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: a } = e,
                                              { entities: r, result: l } = (0, n.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [i],
                                              );
                                          return { entities: r, result: l, slice_info: a };
                                      }
                                  }
                                  return k.d;
                              })
                        : Promise.resolve(k.d),
            });
        },
        174647: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, a) => e.get("foundmedia/categories", t, a),
                category(t, a) {
                    const { category: n, ...r } = t;
                    return e.get(`foundmedia/categories/${n}`, r, a);
                },
                search: (t, a) => e.get("foundmedia/search", t, a),
            });
        },
        229333: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(466999),
                i = a(325686),
                l = a(392237),
                o = a(111677);
            const s = a.n(o)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return n.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), n.createElement(i.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                i = a(392237),
                l = a(822228);
            const o = "activeRoute",
                s = i.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...i.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(l.Z, t, (t) => n.createElement(r.Z, { style: t && s.activeRoot, testID: o }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        690822: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => He });
            var n = a(807896),
                r = a(202784),
                i = a(67369),
                l = a(344175),
                o = a(392237),
                s = a(682474),
                c = a(111677),
                d = a.n(c),
                u = a(473026),
                p = a(594897),
                m = a(850496),
                b = a(751170),
                _ = a(715601),
                h = a(325686),
                f = a(466818),
                g = a(154003),
                y = a(855488),
                v = a(516951),
                C = a(952793),
                w = a(65469),
                E = a(518426),
                k = a(611478);
            const Z = [
                    { label: "Plain text", value: "" },
                    { label: "C", value: "c" },
                    { label: "C#", value: "csharp" },
                    { label: "C++", value: "cpp" },
                    { label: "Clojure", value: "clojure" },
                    { label: "Dart", value: "dart" },
                    { label: "Elixir", value: "elixir" },
                    { label: "F#", value: "fsharp" },
                    { label: "Fortran", value: "fortran" },
                    { label: "Go", value: "go" },
                    { label: "Groovy", value: "groovy" },
                    { label: "Haskell", value: "haskell" },
                    { label: "Java", value: "java" },
                    { label: "Javascript", value: "javascript" },
                    { label: "JSON", value: "json" },
                    { label: "Julia", value: "julia" },
                    { label: "Kotlin", value: "kotlin" },
                    { label: "Lua", value: "lua" },
                    { label: "MATLAB", value: "matlab" },
                    { label: "Objective C", value: "objectivec" },
                    { label: "Perl", value: "perl" },
                    { label: "PHP", value: "php" },
                    { label: "Powershell", value: "powershell" },
                    { label: "Python", value: "python" },
                    { label: "R", value: "r" },
                    { label: "Ruby", value: "ruby" },
                    { label: "Rust", value: "rust" },
                    { label: "Scala", value: "scala" },
                    { label: "Shell", value: "shell" },
                    { label: "Swift", value: "swift" },
                    { label: "Typescript", value: "typescript" },
                ],
                x = d().hf6f2914,
                A = d().abd845fe,
                I = d().ebfd8ac6,
                B = d().h3701ffe,
                S = d().be4a00c2,
                P = d().i3128619,
                T = d().dbb02ec4,
                L = ({ code: e = "", language: t = "", onAddCode: a, onChange: n }) => {
                    const [l, o] = r.useState(e),
                        [s, c] = r.useState(!1),
                        [d, u] = r.useState(t),
                        [p, m] = r.useState((0, k.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        _ = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        L = 1e3 * b.getNumberValue(10),
                        D = (0, i.yu)(),
                        M = r.useCallback(
                            (e) => {
                                o(e.currentTarget.value), n(e.currentTarget.value);
                            },
                            [n],
                        ),
                        F = r.useCallback((e) => {
                            u(e);
                        }, []),
                        j = r.useCallback((e) => {
                            m(e || "");
                        }, []),
                        q = r.useCallback((e, t) => {
                            u(e), m(t || "");
                        }, []),
                        z = r.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(l, d));
                        }, [d, a, l]);
                    return r.createElement(h.Z, { style: R.content }, r.createElement(h.Z, { style: D ? R.rowNarrow : R.row }, _ ? r.createElement(E.Z, { onChange: j, onEnter: v.Z, onSelect: q, value: p }) : r.createElement(f.ZP, { label: T, onChange: F, options: Z, style: [R.input, R.rowItem], value: d }), r.createElement(h.Z, { style: R.actionButtons }, r.createElement(g.ZP, { disabled: !l.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? A : x), r.createElement(g.ZP, { disabled: !l.trim(), onClick: z, type: "brandFilled" }, e ? B : I))), s ? r.createElement(h.Z, { style: [R.preview, !D && R.maxHeight] }, r.createElement(w.Z, { code: l, language: d })) : r.createElement(y.Z, { autoComplete: "off", errorText: P({ count: L }), label: S, maxLength: L, multiline: !0, name: "code-input", numberOfLines: 15, onChange: M, style: R.input, validLength: L, value: l }));
                },
                R = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                D = r.memo(L);
            var M = a(815858),
                F = a(731708);
            const j = d().e554f642,
                q = d().fa524058,
                z = d().d4ab68e2,
                Q = ({ onCancel: e, onConfirm: t }) => r.createElement(h.Z, { style: G.overlay }, r.createElement(h.Z, { style: G.overlayContent }, r.createElement(M.Z, { animateMount: !0, show: !0 }, r.createElement(h.Z, { style: G.actionBar }, r.createElement(F.ZP, { style: G.confirmationLabel, weight: "bold" }, j), r.createElement(h.Z, { style: G.actionBarButtonContainer }, r.createElement(g.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, q), r.createElement(g.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, z))))), r.createElement(h.Z, { style: G.mask })),
                G = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...o.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                N = r.memo(Q);
            var W = a(461756),
                H = a(371344),
                O = a(956272),
                U = a(666536),
                V = a(511985),
                K = a(961817),
                X = a(992720),
                J = a(278066),
                $ = a(223071),
                Y = a(237837),
                ee = a(668214),
                te = a(38562),
                ae = a(659773);
            const ne = (e) => (0, te.l4)(e).shouldAutoPlayGif,
                re = (0, ee.Z)().propsFromState(() => ({ isDataSaverEnabled: te.IX, shouldAutoPlayGif: ne, effectiveAutoplay: ae.AP })),
                ie = d().a50ba822,
                le = d().a9ae1e78,
                oe = o.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                se = re((e) => {
                    const { effectiveAutoplay: t, isDataSaverEnabled: a, onAddGif: n, shouldAutoPlayGif: i } = e,
                        [l, o] = r.useState(null),
                        [s, c] = r.useState(""),
                        [d, u] = r.useState(!0),
                        [p, m] = r.useState(""),
                        b = !a,
                        _ = t ?? (0, K.i)(),
                        f = (i || (0, X.Z)(_)) && !W.Z.reducedMotionEnabled,
                        y = (e) => {
                            o(e), m(e.display_name);
                        },
                        v = () => {
                            C(p);
                        },
                        C = r.useCallback((e) => {
                            o(null), c(e);
                        }, []),
                        w = r.useMemo(() => (0, U.Z)(C, V.zH), [C]),
                        E = r.createElement(
                            h.Z,
                            { style: oe.searchContainer },
                            r.createElement(H.Z, {
                                Icon: O.default,
                                autoFocus: !0,
                                key: s,
                                onChange: (e) => {
                                    const { value: t } = e.currentTarget;
                                    m(t), b ? w(t) : u(!t);
                                },
                                onClear: () => {
                                    m(""), o(null), c(""), u(!0);
                                },
                                onSubmitEditing: v,
                                placeholder: ie,
                                style: oe.searchInput,
                                value: p,
                                withClearButton: !0,
                            }),
                            b ? null : r.createElement(g.ZP, { "aria-label": le, disabled: d, onPress: v, size: "small", style: oe.searchButton, type: "brandFilled" }, le),
                        );
                    let k;
                    return (k = s ? r.createElement(Y.Z, { gifSearchKey: V.AD.NoteComposition, onClickGif: n, query: s, shouldAutoPlayGif: f }) : l ? r.createElement($.Z, { category: l, gifSearchKey: V.AD.NoteComposition, onClickGif: n, shouldAutoPlayGif: f }) : r.createElement(J.ZP, { gifSearchKey: V.AD.NoteComposition, onClickCategory: y })), r.createElement(h.Z, null, E, k);
                });
            var ce = a(366929),
                de = a(40610),
                ue = a(540985);
            const pe = d().hf6f2914,
                me = d().abd845fe,
                be = d().ebfd8ac6,
                _e = d().h3701ffe,
                he = d().effe1ca6,
                fe = d().i3128619,
                ge = d().c46c3c62,
                ye = ({ onAddLaTeX: e, onChange: t, tex: a = "" }) => {
                    const [n, l] = r.useState(a),
                        [o, s] = r.useState(!1),
                        [c, d] = r.useState(!1),
                        u = (0, i.yu)(),
                        p = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        m = r.useCallback(
                            (e) => {
                                l(e.currentTarget.value), d(!1), t && t(e.currentTarget.value);
                            },
                            [t],
                        ),
                        b = r.useCallback(() => {
                            if (!c)
                                try {
                                    ce.Z.renderToString(n, { ...ue.W, displayMode: !0, throwOnError: !0 }), e(n);
                                } catch {
                                    d(!0);
                                }
                        }, [c, e, n]),
                        _ = !n.trim(),
                        f = c || _,
                        v = r.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return r.createElement(h.Z, { style: ve.content }, r.createElement(h.Z, { style: ve.actionButtons }, r.createElement(g.ZP, { disabled: f, onClick: b, type: "brandFilled" }, a ? _e : be), r.createElement(g.ZP, { disabled: _, onClick: () => s(!o), size: "small", type: "brandText" }, o ? me : pe)), c ? r.createElement(de.Z.Danger, { text: ge, withIcon: !0 }) : null, o ? r.createElement(h.Z, { style: [ve.preview, !u && ve.maxHeight] }, r.createElement(ue.Z, { displayMode: !0, onError: v, tex: n })) : r.createElement(y.Z, { autoComplete: "off", errorText: fe({ count: p }), label: he, maxLength: p, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ve.input, validLength: p, value: n }));
                },
                ve = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = r.memo(ye);
            var we = a(161821),
                Ee = a(335923),
                ke = a(507651);
            const Ze = d().c80940f4,
                xe = d().hf6f2914,
                Ae = d().ebfd8ac6,
                Ie = d().h3701ffe,
                Be = d().i3128619,
                Se = Object.freeze({ MARKDOWN: Ze, PREVIEW: xe }),
                Pe = o.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Te = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [n, l] = r.useState(e),
                        [o, s] = r.useState(Se.MARKDOWN),
                        c = (0, i.yu)(),
                        d = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        u = (e) => () => o === e,
                        p = (0, we.Z)(Se).map((e) => ({ key: e, label: e, isActive: u(e), to: location.pathname, onClick: () => s(e) })),
                        m = r.useCallback(
                            (e) => {
                                l(e.currentTarget.value), a && a(e.currentTarget.value);
                            },
                            [a],
                        );
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(ke.Z, { links: p }),
                        (() => {
                            switch (o) {
                                case Se.MARKDOWN:
                                    return r.createElement(y.Z, { autoComplete: "off", errorText: Be({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Pe.input, validLength: d, value: n });
                                case Se.PREVIEW:
                                    return r.createElement(h.Z, { style: [Pe.preview, !c && Pe.maxHeight] }, r.createElement(Ee.Z, { markdownText: n }));
                                default:
                                    return null;
                            }
                        })(),
                        r.createElement(g.ZP, { disabled: !n.trim(), onClick: () => t(n), type: "brandFilled" }, e ? Ie : Ae),
                    );
                };
            var Le = a(385264);
            const Re = d().ebfd8ac6,
                De = d().d794135c,
                Me = d().e187f906,
                Fe = d().add55c98,
                je = d().fa4e68ca,
                qe = d().c80940f4,
                ze = d().cfeb3f86,
                Qe = d().ad9e175c,
                Ge = (Le.Q.Media, Le.Q.GIFs, Le.Q.Posts, Le.Q.Markdown, Le.Q.Code, Le.Q.LaTeX, o.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                Ne = r.createElement(s.Z, { ratio: o.default.theme.aspectRatios.landscape }),
                We = r.createElement(u.default, null),
                He = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: o, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: u, onAddTweets: h, onClose: f, tex: g } = e,
                        [y, v] = r.useState(!1),
                        [C, w] = r.useState(!1),
                        [E, k] = r.useState(null),
                        Z = (0, i.yu)(),
                        x = t === Le.Q.Markdown || t === Le.Q.LaTeX || t === Le.Q.Code,
                        A = (e) => {
                            k(e);
                        },
                        I = !!E,
                        B = (e) => {
                            w(o !== e);
                        },
                        S = () => {
                            k(null);
                        },
                        P = r.useMemo(() => ({ withKeyboardNavigation: !x, onBackClick: I ? S : void 0 }), [I, x]);
                    return r.createElement(
                        l.Z,
                        (0, n.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    x && C ? v(!0) : f();
                                },
                                style: [Ge.sheet, Z && Ge.sheetNarrow],
                                title: Re,
                            },
                            P,
                        ),
                        r.createElement(
                            _.Z,
                            { style: [Ge.container, Ge.viewport] },
                            (() => {
                                switch (t) {
                                    case Le.Q.Media:
                                        return r.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: Ne, description: De, icon: We, maskStyle: Ge.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: u, withDragDrop: !0 });
                                    case Le.Q.GIFs:
                                        return r.createElement(se, { onAddGif: s });
                                    case Le.Q.Posts:
                                        return r.createElement(p.ZP, { onAddTweets: h, onBookmarkFolderPress: A, selectedBookmarkFolderId: E });
                                    case Le.Q.Markdown:
                                        return r.createElement(Te, { markdown: o, onAddMarkdown: d, onChange: B });
                                    case Le.Q.Code:
                                        return r.createElement(D, { code: o, language: a, onAddCode: d, onChange: B });
                                    case Le.Q.LaTeX:
                                        return r.createElement(Ce, { onAddLaTeX: c, onChange: B, tex: g });
                                    default:
                                        return null;
                                }
                            })(),
                            y &&
                                r.createElement(N, {
                                    onCancel: () => {
                                        v(!1);
                                    },
                                    onConfirm: f,
                                }),
                        ),
                    );
                };
        },
        625661: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => p });
            var n = a(202784),
                r = a(614983),
                i = a.n(r),
                l = a(325686),
                o = a(370006),
                s = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: i, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: b, secondaryBar: _, style: h, subtitle: f, title: g, titleDomId: y, titleIconCell: v, titleIconCellSize: C, withBackground: w, withWideContainer: E } = this.props,
                        { isModal: k } = this.context,
                        Z = i ? d : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!w, k, !!_);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: l, isLarge: c, leftControl: Z, middleControl: p, position: u(m, k, r), rightControl: b, style: h, subtitle: f, title: g, titleDomId: y, titleIconCell: v, titleIconCellSize: C, withBackground: x, withWideContainer: E }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => u });
            a(136728);
            var n = a(202784),
                r = a(811176),
                i = a(190286),
                l = a(111677),
                o = a.n(l),
                s = a(912021);
            const c = o().cfd2f35e;
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, s.Z)((e, t, a, n) =>
                            e.reduce((e, { Icon: r, confirmation: i, disabled: l, excludeFromActionMenu: o, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: m, withCancelButton: b }, _) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              i ? (i.render ? n({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : n({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: l, Icon: r, isEmphasized: s, testID: p, subText: u, text: m, onClick: o, link: c, withBottomBorder: t && t.includes(_) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: a, label: r, text: l, withCancelButton: o } = e || {};
                        return n.createElement(i.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: l, withCancelButton: o });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: a } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, a, this._handleConfirm);
                }
            }
            const u = d;
        },
        414939: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                i = a(392237);
            class l extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: o.root });
                }
            }
            const o = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        789831: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                i = a(325686),
                l = a(392237),
                o = a(655352);
            const s = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || i.Z,
                        m = l && !(0, o.ZP)();
                    return r.createElement(p, (0, n.Z)({}, u, { style: [m && !d && s.root, c] }), e, m ? a : null);
                };
        },
        850496: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                l = a(15038),
                o = a(154003),
                s = a(682474),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                p = a(293615),
                m = a(837020),
                b = a(219229),
                _ = a(373554),
                h = a(304059),
                f = a(751170);
            const g = u().b87ca51a,
                y = u().eebff22c,
                v = n.createElement(p.default, null);
            class C extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: o, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        _ = n.createElement(n.Fragment, null, this._renderPreview(), b ? null : n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [E.mask, o, w[e]] }), n.createElement(r.Z, { style: [E.overlaidContent, a] }, n.createElement(r.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? n.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return n.createElement(r.Z, { style: [E.container, p, w[e]] }, m && c ? n.createElement(l.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, _) : _);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: n.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": y, icon: n.createElement(b.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: i, onAddMediaFiles: l, onEdit: s } = this.props;
                    return l ? n.createElement(_.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: i, onChange: l, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(o.ZP, { "aria-label": a, icon: r, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: a, mediaItem: r } = this.props;
                    return r ? n.createElement(s.Z, { ratio: e }, n.createElement(h.Z, { borderRadius: t, enableGif: !1, mediaItem: r, style: E.mediaPreview, withCloseButton: !1 })) : a;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.A.NONE, icon: v };
            const w = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        873637: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => h });
            var n = a(807896),
                r = a(202784),
                i = a(325686),
                l = a(167630),
                o = a(548485),
                s = a(392237),
                c = a(111677),
                d = a.n(c),
                u = a(205074),
                p = a(653843);
            const m = d().gff1f69e;
            class b extends r.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof u.ZP &&
                        (0, p.ZP)(t).then((e) =>
                            new u.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : r.createElement(l.Z, { "aria-label": m, style: _.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: n, withAspectRatioOptions: l, withZoomControl: s } = this.props,
                        { orientedImage: c } = this.state,
                        { cropData: d, originalMediaFile: u = {} } = n || {};
                    return c ? r.createElement(i.Z, { style: _.cropper }, r.createElement(o.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: a || d, image: { src: c.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: l, withZoomControl: s })) : null;
                }
            }
            const _ = s.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                h = r.forwardRef((e, t) => r.createElement(b, (0, n.Z)({}, e, { cropperRef: t })));
        },
        965245: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                i = a(229333),
                l = a(414939),
                o = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(l.Z, null), ...a }) => {
                const s = r.createElement(o.C, (0, n.Z)({}, a, { footer: t }));
                return e ? r.createElement(i.Z, { title: e }, s) : s;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-9f4db315.5044c70a.js.map
