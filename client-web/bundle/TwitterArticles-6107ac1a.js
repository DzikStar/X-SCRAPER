(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "loader.FeedbackSheet"],
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
        37475: (e, t, a) => {
            "use strict";
            a.d(t, { d: () => r });
            const r = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        484636: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => Z });
            var r = a(506899),
                l = a(414742);
            const n = new r.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var i = a(805020),
                o = a.n(i),
                s = a(803386),
                c = a.n(s),
                d = a(322821),
                u = a.n(d),
                p = a(93595),
                m = a.n(p),
                b = a(53605),
                h = a.n(b),
                _ = a(672075),
                f = a.n(_),
                g = a(196969),
                y = a.n(g),
                v = a(553600),
                C = a.n(v),
                w = a(446405),
                E = a.n(w),
                k = a(934309);
            const Z = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: a, title: l } = t;
                    return e.graphQL(u(), { content_state: a, title: l }).then((e) => (0, r.Fv)(e.articleentity_create_draft?.article_entity_results?.result, n));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(h(), { articleEntityId: a }).then((e) => (0, r.Fv)(e.article_result_by_rest_id?.result, n));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(c(), { articleEntityId: a }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: a, content_state: l } = t;
                    return e.graphQL(y(), { content_state: l, article_entity: a }).then((e) => (0, r.Fv)(e.articleentity_update_content_state, n));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: a, mediaCategory: l, mediaId: i } = t;
                    return e.graphQL(C(), { articleEntityId: a, coverMedia: i && l ? { media_id: i, media_category: l } : void 0 }).then((e) => (0, r.Fv)(e.articleentity_update_cover_media, n));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: a, title: l } = t;
                    return e.graphQL(E(), { articleEntityId: a, title: l }).then((e) => (0, r.Fv)(e.articleentity_update_title, n));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: a, conversationControl: l, visibilitySetting: i } = t;
                    return e.graphQL(m(), { articleEntityId: a, visibilitySetting: i, ...(l && { conversationControl: { mode: l } }) }).then((e) => (0, r.Fv)(e.articleentity_publish?.article_entity_results?.result, n));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(f(), { articleEntityId: a }).then((e) => (0, r.Fv)(e.articleentity_unpublish?.article_entity_results?.result, n));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  o(),
                                  t,
                                  (0, l.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: a } = e,
                                              { entities: l, result: i } = (0, r.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [n],
                                              );
                                          return { entities: l, result: i, slice_info: a };
                                      }
                                  }
                                  return k.d;
                              })
                        : Promise.resolve(k.d),
            });
        },
        174647: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, a) => e.get("foundmedia/categories", t, a),
                category(t, a) {
                    const { category: r, ...l } = t;
                    return e.get(`foundmedia/categories/${r}`, l, a);
                },
                search: (t, a) => e.get("foundmedia/search", t, a),
            });
        },
        229333: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => u });
            var r = a(202784),
                l = a(466999),
                n = a(325686),
                i = a(392237),
                o = a(111677);
            const s = a.n(o)().e5b0063d;
            let c = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return r.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), r.createElement(n.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(202784),
                l = a(325686),
                n = a(392237),
                i = a(822228);
            const o = "activeRoute",
                s = n.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...n.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => r.createElement(i.Z, t, (t) => r.createElement(l.Z, { style: t && s.activeRoot, testID: o }, "function" == typeof e ? e(t) : e, t ? r.createElement(l.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        690822: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => Ne });
            var r = a(807896),
                l = a(202784),
                n = a(67369),
                i = a(344175),
                o = a(392237),
                s = a(682474),
                c = a(111677),
                d = a.n(c),
                u = a(473026),
                p = a(594897),
                m = a(850496),
                b = a(751170),
                h = a(715601),
                _ = a(325686),
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
                I = d().abd845fe,
                A = d().ebfd8ac6,
                P = d().h3701ffe,
                S = d().be4a00c2,
                R = d().i3128619,
                T = d().dbb02ec4,
                B = ({ code: e = "", language: t = "", onAddCode: a, onChange: r }) => {
                    const [i, o] = l.useState(e),
                        [s, c] = l.useState(!1),
                        [d, u] = l.useState(t),
                        [p, m] = l.useState((0, k.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        h = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        B = 1e3 * b.getNumberValue(10),
                        L = (0, n.yu)(),
                        M = l.useCallback(
                            (e) => {
                                o(e.currentTarget.value), r(e.currentTarget.value);
                            },
                            [r],
                        ),
                        F = l.useCallback((e) => {
                            u(e);
                        }, []),
                        z = l.useCallback((e) => {
                            m(e || "");
                        }, []),
                        j = l.useCallback((e, t) => {
                            u(e), m(t || "");
                        }, []),
                        G = l.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(i, d));
                        }, [d, a, i]);
                    return l.createElement(_.Z, { style: D.content }, l.createElement(_.Z, { style: L ? D.rowNarrow : D.row }, h ? l.createElement(E.Z, { onChange: z, onEnter: v.Z, onSelect: j, value: p }) : l.createElement(f.ZP, { label: T, onChange: F, options: Z, style: [D.input, D.rowItem], value: d }), l.createElement(_.Z, { style: D.actionButtons }, l.createElement(g.ZP, { disabled: !i.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? I : x), l.createElement(g.ZP, { disabled: !i.trim(), onClick: G, type: "brandFilled" }, e ? P : A))), s ? l.createElement(_.Z, { style: [D.preview, !L && D.maxHeight] }, l.createElement(w.Z, { code: i, language: d })) : l.createElement(y.Z, { autoComplete: "off", errorText: R({ count: B }), label: S, maxLength: B, multiline: !0, name: "code-input", numberOfLines: 15, onChange: M, style: D.input, validLength: B, value: i }));
                },
                D = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                L = l.memo(B);
            var M = a(815858),
                F = a(731708);
            const z = d().e554f642,
                j = d().fa524058,
                G = d().d4ab68e2,
                W = ({ onCancel: e, onConfirm: t }) => l.createElement(_.Z, { style: q.overlay }, l.createElement(_.Z, { style: q.overlayContent }, l.createElement(M.Z, { animateMount: !0, show: !0 }, l.createElement(_.Z, { style: q.actionBar }, l.createElement(F.ZP, { style: q.confirmationLabel, weight: "bold" }, z), l.createElement(_.Z, { style: q.actionBarButtonContainer }, l.createElement(g.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, j), l.createElement(g.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, G))))), l.createElement(_.Z, { style: q.mask })),
                q = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...o.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                H = l.memo(W);
            var Q = a(461756),
                N = a(371344),
                O = a(956272),
                V = a(666536),
                U = a(511985),
                K = a(961817),
                $ = a(992720),
                X = a(278066),
                J = a(223071),
                Y = a(237837),
                ee = a(668214),
                te = a(38562),
                ae = a(659773);
            const re = (e) => (0, te.l4)(e).shouldAutoPlayGif,
                le = (0, ee.Z)().propsFromState(() => ({ isDataSaverEnabled: te.IX, shouldAutoPlayGif: re, effectiveAutoplay: ae.AP })),
                ne = d().a50ba822,
                ie = d().a9ae1e78,
                oe = o.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                se = le((e) => {
                    const { effectiveAutoplay: t, isDataSaverEnabled: a, onAddGif: r, shouldAutoPlayGif: n } = e,
                        [i, o] = l.useState(null),
                        [s, c] = l.useState(""),
                        [d, u] = l.useState(!0),
                        [p, m] = l.useState(""),
                        b = !a,
                        h = t ?? (0, K.i)(),
                        f = (n || (0, $.Z)(h)) && !Q.Z.reducedMotionEnabled,
                        y = (e) => {
                            o(e), m(e.display_name);
                        },
                        v = () => {
                            C(p);
                        },
                        C = l.useCallback((e) => {
                            o(null), c(e);
                        }, []),
                        w = l.useMemo(() => (0, V.Z)(C, U.zH), [C]),
                        E = l.createElement(
                            _.Z,
                            { style: oe.searchContainer },
                            l.createElement(N.Z, {
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
                                placeholder: ne,
                                style: oe.searchInput,
                                value: p,
                                withClearButton: !0,
                            }),
                            b ? null : l.createElement(g.ZP, { "aria-label": ie, disabled: d, onPress: v, size: "small", style: oe.searchButton, type: "brandFilled" }, ie),
                        );
                    let k;
                    return (k = s ? l.createElement(Y.Z, { gifSearchKey: U.AD.NoteComposition, onClickGif: r, query: s, shouldAutoPlayGif: f }) : i ? l.createElement(J.Z, { category: i, gifSearchKey: U.AD.NoteComposition, onClickGif: r, shouldAutoPlayGif: f }) : l.createElement(X.ZP, { gifSearchKey: U.AD.NoteComposition, onClickCategory: y })), l.createElement(_.Z, null, E, k);
                });
            var ce = a(366929),
                de = a(40610),
                ue = a(540985);
            const pe = d().hf6f2914,
                me = d().abd845fe,
                be = d().ebfd8ac6,
                he = d().h3701ffe,
                _e = d().effe1ca6,
                fe = d().i3128619,
                ge = d().c46c3c62,
                ye = ({ onAddLaTeX: e, onChange: t, tex: a = "" }) => {
                    const [r, i] = l.useState(a),
                        [o, s] = l.useState(!1),
                        [c, d] = l.useState(!1),
                        u = (0, n.yu)(),
                        p = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        m = l.useCallback(
                            (e) => {
                                i(e.currentTarget.value), d(!1), t && t(e.currentTarget.value);
                            },
                            [t],
                        ),
                        b = l.useCallback(() => {
                            if (!c)
                                try {
                                    ce.Z.renderToString(r, { ...ue.W, displayMode: !0, throwOnError: !0 }), e(r);
                                } catch {
                                    d(!0);
                                }
                        }, [c, e, r]),
                        h = !r.trim(),
                        f = c || h,
                        v = l.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return l.createElement(_.Z, { style: ve.content }, l.createElement(_.Z, { style: ve.actionButtons }, l.createElement(g.ZP, { disabled: f, onClick: b, type: "brandFilled" }, a ? he : be), l.createElement(g.ZP, { disabled: h, onClick: () => s(!o), size: "small", type: "brandText" }, o ? me : pe)), c ? l.createElement(de.Z.Danger, { text: ge, withIcon: !0 }) : null, o ? l.createElement(_.Z, { style: [ve.preview, !u && ve.maxHeight] }, l.createElement(ue.Z, { displayMode: !0, onError: v, tex: r })) : l.createElement(y.Z, { autoComplete: "off", errorText: fe({ count: p }), label: _e, maxLength: p, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ve.input, validLength: p, value: r }));
                },
                ve = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = l.memo(ye);
            var we = a(161821),
                Ee = a(335923),
                ke = a(507651);
            const Ze = d().c80940f4,
                xe = d().hf6f2914,
                Ie = d().ebfd8ac6,
                Ae = d().h3701ffe,
                Pe = d().i3128619,
                Se = Object.freeze({ MARKDOWN: Ze, PREVIEW: xe }),
                Re = o.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Te = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [r, i] = l.useState(e),
                        [o, s] = l.useState(Se.MARKDOWN),
                        c = (0, n.yu)(),
                        d = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        u = (e) => () => o === e,
                        p = (0, we.Z)(Se).map((e) => ({ key: e, label: e, isActive: u(e), to: location.pathname, onClick: () => s(e) })),
                        m = l.useCallback(
                            (e) => {
                                i(e.currentTarget.value), a && a(e.currentTarget.value);
                            },
                            [a],
                        );
                    return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(ke.Z, { links: p }),
                        (() => {
                            switch (o) {
                                case Se.MARKDOWN:
                                    return l.createElement(y.Z, { autoComplete: "off", errorText: Pe({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Re.input, validLength: d, value: r });
                                case Se.PREVIEW:
                                    return l.createElement(_.Z, { style: [Re.preview, !c && Re.maxHeight] }, l.createElement(Ee.Z, { markdownText: r }));
                                default:
                                    return null;
                            }
                        })(),
                        l.createElement(g.ZP, { disabled: !r.trim(), onClick: () => t(r), type: "brandFilled" }, e ? Ae : Ie),
                    );
                };
            var Be = a(385264);
            const De = d().ebfd8ac6,
                Le = d().d794135c,
                Me = d().e187f906,
                Fe = d().add55c98,
                ze = d().fa4e68ca,
                je = d().c80940f4,
                Ge = d().cfeb3f86,
                We = d().ad9e175c,
                qe = (Be.Q.Media, Be.Q.GIFs, Be.Q.Posts, Be.Q.Markdown, Be.Q.Code, Be.Q.LaTeX, o.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                He = l.createElement(s.Z, { ratio: o.default.theme.aspectRatios.landscape }),
                Qe = l.createElement(u.default, null),
                Ne = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: o, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: u, onAddTweets: _, onClose: f, tex: g } = e,
                        [y, v] = l.useState(!1),
                        [C, w] = l.useState(!1),
                        [E, k] = l.useState(null),
                        Z = (0, n.yu)(),
                        x = t === Be.Q.Markdown || t === Be.Q.LaTeX || t === Be.Q.Code,
                        I = (e) => {
                            k(e);
                        },
                        A = !!E,
                        P = (e) => {
                            w(o !== e);
                        },
                        S = () => {
                            k(null);
                        },
                        R = l.useMemo(() => ({ withKeyboardNavigation: !x, onBackClick: A ? S : void 0 }), [A, x]);
                    return l.createElement(
                        i.Z,
                        (0, r.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    x && C ? v(!0) : f();
                                },
                                style: [qe.sheet, Z && qe.sheetNarrow],
                                title: De,
                            },
                            R,
                        ),
                        l.createElement(
                            h.Z,
                            { style: [qe.container, qe.viewport] },
                            (() => {
                                switch (t) {
                                    case Be.Q.Media:
                                        return l.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: He, description: Le, icon: Qe, maskStyle: qe.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: u, withDragDrop: !0 });
                                    case Be.Q.GIFs:
                                        return l.createElement(se, { onAddGif: s });
                                    case Be.Q.Posts:
                                        return l.createElement(p.ZP, { onAddTweets: _, onBookmarkFolderPress: I, selectedBookmarkFolderId: E });
                                    case Be.Q.Markdown:
                                        return l.createElement(Te, { markdown: o, onAddMarkdown: d, onChange: P });
                                    case Be.Q.Code:
                                        return l.createElement(L, { code: o, language: a, onAddCode: d, onChange: P });
                                    case Be.Q.LaTeX:
                                        return l.createElement(Ce, { onAddLaTeX: c, onChange: P, tex: g });
                                    default:
                                        return null;
                                }
                            })(),
                            y &&
                                l.createElement(H, {
                                    onCancel: () => {
                                        v(!1);
                                    },
                                    onConfirm: f,
                                }),
                        ),
                    );
                };
        },
        774426: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => u });
            a(136728);
            var r = a(202784),
                l = a(811176),
                n = a(190286),
                i = a(111677),
                o = a.n(i),
                s = a(912021);
            const c = o().cfd2f35e;
            class d extends r.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, s.Z)((e, t, a, r) =>
                            e.reduce((e, { Icon: l, confirmation: n, disabled: i, excludeFromActionMenu: o, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: m, withCancelButton: b }, h) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              n ? (n.render ? r({ cancelCallback: n.onCancel, confirmCallback: d, render: n.render }) : r({ cancelCallback: n.onCancel, confirmCallback: d, text: n.text, headline: n.headline, label: n.label, confirmButtonType: n.confirmButtonType, withCancelButton: n.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: i, Icon: l, isEmphasized: s, testID: p, subText: u, text: m, onClick: o, link: c, withBottomBorder: t && t.includes(h) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : r.createElement(l.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: a, label: l, text: i, withCancelButton: o } = e || {};
                        return r.createElement(n.Z, { confirmButtonLabel: l, confirmButtonType: t, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: i, withCancelButton: o });
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
            var r = a(202784),
                l = a(325686),
                n = a(392237);
            class i extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(l.Z, { style: o.root });
                }
            }
            const o = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        789831: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(807896),
                l = a(202784),
                n = a(325686),
                i = a(392237),
                o = a(655352);
            const s = i.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: a, shouldRenderFab: i = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || n.Z,
                        m = i && !(0, o.ZP)();
                    return l.createElement(p, (0, r.Z)({}, u, { style: [m && !d && s.root, c] }), e, m ? a : null);
                };
        },
        850496: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var r = a(202784),
                l = a(325686),
                n = a(731708),
                i = a(15038),
                o = a(154003),
                s = a(682474),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                p = a(293615),
                m = a(837020),
                b = a(219229),
                h = a(373554),
                _ = a(304059),
                f = a(751170);
            const g = u().b87ca51a,
                y = u().eebff22c,
                v = r.createElement(p.default, null);
            class C extends r.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: o, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        h = r.createElement(r.Fragment, null, this._renderPreview(), b ? null : r.createElement(r.Fragment, null, r.createElement(l.Z, { style: [E.mask, o, w[e]] }), r.createElement(l.Z, { style: [E.overlaidContent, a] }, r.createElement(l.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? r.createElement(n.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return r.createElement(l.Z, { style: [E.container, p, w[e]] }, m && c ? r.createElement(i.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, h) : h);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return r.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: r.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return r.createElement(o.ZP, { "aria-label": y, icon: r.createElement(b.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: l, multiple: n, onAddMediaFiles: i, onEdit: s } = this.props;
                    return i ? r.createElement(h.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: l, multiple: n, onChange: i, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : r.createElement(o.ZP, { "aria-label": a, icon: l, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: a, mediaItem: l } = this.props;
                    return l ? r.createElement(s.Z, { ratio: e }, r.createElement(_.Z, { borderRadius: t, enableGif: !1, mediaItem: l, style: E.mediaPreview, withCloseButton: !1 })) : a;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.A.NONE, icon: v };
            const w = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        965245: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(807896),
                l = a(202784),
                n = a(229333),
                i = a(414939),
                o = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = l.createElement(i.Z, null), ...a }) => {
                const s = l.createElement(o.C, (0, r.Z)({}, a, { footer: t }));
                return e ? l.createElement(n.Z, { title: e }, s) : s;
            };
        },
        661810: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i });
            var r = a(202784),
                l = a(325686),
                n = a(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(l.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(202784),
                l = a(154003),
                n = a(392237);
            class i extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: n, href: i, icon: s, label: c, onPress: d, renderMenu: u, style: p, testID: m } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return r.createElement(l.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: n, icon: s, link: i, onPress: d, renderMenu: u, size: "xLarge", style: [o.root, !c && o.iconOnly, p], testID: m }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const o = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = i;
        },
        420412: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(202784),
                l = a(325686),
                n = a(235902),
                i = a(885015),
                o = a(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return a ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(l.Z, { style: c.gapColumn }, r.createElement(l.Z, { style: [c.gap, d] })), r.createElement(l.Z, { style: c.gapText }, a), r.createElement(l.Z, { style: c.gapColumn }, r.createElement(l.Z, { style: [c.gap, d] }))) : r.createElement(l.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(807896),
                l = a(202784),
                n = a(325686),
                i = a(392237);
            class o extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...i } = this.props,
                        o = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return l.createElement(n.Z, (0, r.Z)({ style: [t, s.root, a && s.withGutter] }, i), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
        449479: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => g });
            var r = a(202784),
                l = a(325686),
                n = a(913973),
                i = a(731708),
                o = a(950822),
                s = a(466792),
                c = a(58881),
                d = a(530732),
                u = a(352924),
                p = a(392237);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: u, helpText: m, label: h, name: _, testID: f } = this.props,
                        g = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        v = a ? g : y;
                    return r.createElement(s.Z, { disabled: u }, (s) => r.createElement(l.Z, { role: "label", style: [b.root, !u && b.interactive], testID: f }, r.createElement(l.Z, { style: b.topContainer }, r.createElement(i.ZP, { id: this.labelId }, h), r.createElement(l.Z, { style: b.radioContainer }, r.createElement(d.Z, { interactiveStyles: v, interactivityState: s, style: b.radioBackground }, r.createElement(l.Z, { style: [b.circle, a && b.circleActive, u && b.circleDisabled, a && u && b.circleCheckedAndDisabled] }, a ? r.createElement(n.default, { style: b.checkMark }) : null)), (0, o.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: u, name: _, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), m ? r.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const b = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = m,
                _ = "radioGroup";
            let f = 1;
            class g extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: a, label: n, name: o, options: s, value: c } = this.props;
                    return r.createElement(
                        l.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: a && y.disabled, testID: `${_}${o}` },
                        n ? r.createElement(l.Z, { id: this._labelId, role: "label", style: y.header }, r.createElement(i.ZP, { style: y.label, weight: "bold" }, n), t ? r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(h, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: o, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            g.defaultProps = { disabled: !1 };
            const y = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        76388: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        662678: (e, t, a) => {
            "use strict";
            a.d(t, { G: () => l, Z: () => r });
            a(136728);
            const r = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (a, r, l) => {
                        const n = t ? t(r, l, e) : !!r;
                        return n && a[0].push(r), !n && a[1].push(r), a;
                    },
                    [[], []],
                );
            }
        },
        125568: (e, t, a) => {
            "use strict";
            a.d(t, { t: () => l });
            var r = a(202784);
            function l() {
                const e = r.useRef(!0);
                return (
                    r.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    r.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.285bfeba.js.map
