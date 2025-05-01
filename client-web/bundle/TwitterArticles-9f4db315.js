(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-9f4db315", "loader.FeedbackSheet"],
    {
        594771: (e) => {
            e.exports = { queryId: "Zg6ZAVdkp7sQWJTM-pypDw", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        551e3: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        486962: (e) => {
            e.exports = { queryId: "cKRlBOgG_REpVBm84PJRaQ", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        207318: (e) => {
            e.exports = { queryId: "GZWIyQjGzTUq3ocPhSpT8w", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        244275: (e) => {
            e.exports = { queryId: "kWTYMn1muc5CqOSfv7_yPQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        51864: (e) => {
            e.exports = { queryId: "9Tt6LuMCO7J9FQJZEAcxkw", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        118869: (e) => {
            e.exports = { queryId: "CWhW-YeUL_K1-LKTwDGw2g", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        342454: (e) => {
            e.exports = { queryId: "PaE_-9SZZOvOqWJBJ8ZKGg", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        433579: (e) => {
            e.exports = { queryId: "9LgfubNkcFRC-sO_bWQlsQ", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        484636: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => k });
            var r = a(506899),
                n = a(414742);
            const i = new r.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var l = a(594771),
                o = a.n(l),
                s = a(551e3),
                c = a.n(s),
                d = a(486962),
                u = a.n(d),
                p = a(207318),
                m = a.n(p),
                b = a(244275),
                _ = a.n(b),
                h = a(51864),
                f = a.n(h),
                g = a(118869),
                y = a.n(g),
                v = a(342454),
                C = a.n(v),
                w = a(433579),
                E = a.n(w),
                Z = a(934309);
            const k = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: a, title: n } = t;
                    return e.graphQL(u(), { content_state: a, title: n }).then((e) => (0, r.Fv)(e.articleentity_create_draft?.article_entity_results?.result, i));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(_(), { articleEntityId: a }).then((e) => (0, r.Fv)(e.article_result_by_rest_id?.result, i));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(c(), { articleEntityId: a }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: a, content_state: n } = t;
                    return e.graphQL(y(), { content_state: n, article_entity: a }).then((e) => (0, r.Fv)(e.articleentity_update_content_state, i));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: a, mediaCategory: n, mediaId: l } = t;
                    return e.graphQL(C(), { articleEntityId: a, coverMedia: l && n ? { media_id: l, media_category: n } : void 0 }).then((e) => (0, r.Fv)(e.articleentity_update_cover_media, i));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: a, title: n } = t;
                    return e.graphQL(E(), { articleEntityId: a, title: n }).then((e) => (0, r.Fv)(e.articleentity_update_title, i));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: a, conversationControl: n, visibilitySetting: l } = t;
                    return e.graphQL(m(), { articleEntityId: a, visibilitySetting: l, ...(n && { conversationControl: { mode: n } }) }).then((e) => (0, r.Fv)(e.articleentity_publish?.article_entity_results?.result, i));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(f(), { articleEntityId: a }).then((e) => (0, r.Fv)(e.articleentity_unpublish?.article_entity_results?.result, i));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  o(),
                                  t,
                                  (0, n.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: a } = e,
                                              { entities: n, result: l } = (0, r.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [i],
                                              );
                                          return { entities: n, result: l, slice_info: a };
                                      }
                                  }
                                  return Z.d;
                              })
                        : Promise.resolve(Z.d),
            });
        },
        174647: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, a) => e.get("foundmedia/categories", t, a),
                category(t, a) {
                    const { category: r, ...n } = t;
                    return e.get(`foundmedia/categories/${r}`, n, a);
                },
                search: (t, a) => e.get("foundmedia/search", t, a),
            });
        },
        229333: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => u });
            var r = a(202784),
                n = a(466999),
                i = a(325686),
                l = a(392237),
                o = a(674132);
            const s = a.n(o)().e5b0063d;
            let c = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return r.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), r.createElement(i.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(325686),
                i = a(392237),
                l = a(822228);
            const o = "activeRoute",
                s = i.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...i.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => r.createElement(l.Z, t, (t) => r.createElement(n.Z, { style: t && s.activeRoot, testID: o }, "function" == typeof e ? e(t) : e, t ? r.createElement(n.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        690822: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => Oe });
            var r = a(807896),
                n = a(202784),
                i = a(67369),
                l = a(344175),
                o = a(392237),
                s = a(682474),
                c = a(674132),
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
                Z = a(611478);
            const k = [
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
                P = d().h3701ffe,
                S = d().be4a00c2,
                T = d().i3128619,
                R = d().dbb02ec4,
                B = ({ code: e = "", language: t = "", onAddCode: a, onChange: r }) => {
                    const [l, o] = n.useState(e),
                        [s, c] = n.useState(!1),
                        [d, u] = n.useState(t),
                        [p, m] = n.useState((0, Z.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        _ = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        B = 1e3 * b.getNumberValue(10),
                        D = (0, i.yu)(),
                        M = n.useCallback(
                            (e) => {
                                o(e.currentTarget.value), r(e.currentTarget.value);
                            },
                            [r],
                        ),
                        F = n.useCallback((e) => {
                            u(e);
                        }, []),
                        q = n.useCallback((e) => {
                            m(e || "");
                        }, []),
                        Q = n.useCallback((e, t) => {
                            u(e), m(t || "");
                        }, []),
                        j = n.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(l, d));
                        }, [d, a, l]);
                    return n.createElement(h.Z, { style: L.content }, n.createElement(h.Z, { style: D ? L.rowNarrow : L.row }, _ ? n.createElement(E.Z, { onChange: q, onEnter: v.Z, onSelect: Q, value: p }) : n.createElement(f.ZP, { label: R, onChange: F, options: k, style: [L.input, L.rowItem], value: d }), n.createElement(h.Z, { style: L.actionButtons }, n.createElement(g.ZP, { disabled: !l.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? A : x), n.createElement(g.ZP, { disabled: !l.trim(), onClick: j, type: "brandFilled" }, e ? P : I))), s ? n.createElement(h.Z, { style: [L.preview, !D && L.maxHeight] }, n.createElement(w.Z, { code: l, language: d })) : n.createElement(y.Z, { autoComplete: "off", errorText: T({ count: B }), label: S, maxLength: B, multiline: !0, name: "code-input", numberOfLines: 15, onChange: M, style: L.input, validLength: B, value: l }));
                },
                L = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                D = n.memo(B);
            var M = a(815858),
                F = a(731708);
            const q = d().e554f642,
                Q = d().fa524058,
                j = d().d4ab68e2,
                G = ({ onCancel: e, onConfirm: t }) => n.createElement(h.Z, { style: N.overlay }, n.createElement(h.Z, { style: N.overlayContent }, n.createElement(M.Z, { animateMount: !0, show: !0 }, n.createElement(h.Z, { style: N.actionBar }, n.createElement(F.ZP, { style: N.confirmationLabel, weight: "bold" }, q), n.createElement(h.Z, { style: N.actionBarButtonContainer }, n.createElement(g.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, Q), n.createElement(g.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, j))))), n.createElement(h.Z, { style: N.mask })),
                N = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...o.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                W = n.memo(G);
            var z = a(461756),
                O = a(371344),
                H = a(956272),
                V = a(666536),
                U = a(511985),
                K = a(961817),
                J = a(992720),
                X = a(278066),
                $ = a(223071),
                Y = a(237837),
                ee = a(668214),
                te = a(38562),
                ae = a(659773);
            const re = (e) => (0, te.l4)(e).shouldAutoPlayGif,
                ne = (0, ee.Z)().propsFromState(() => ({ isDataSaverEnabled: te.IX, shouldAutoPlayGif: re, effectiveAutoplay: ae.AP })),
                ie = d().a50ba822,
                le = d().a9ae1e78,
                oe = o.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                se = ne((e) => {
                    const { effectiveAutoplay: t, isDataSaverEnabled: a, onAddGif: r, shouldAutoPlayGif: i } = e,
                        [l, o] = n.useState(null),
                        [s, c] = n.useState(""),
                        [d, u] = n.useState(!0),
                        [p, m] = n.useState(""),
                        b = !a,
                        _ = t ?? (0, K.i)(),
                        f = (i || (0, J.Z)(_)) && !z.Z.reducedMotionEnabled,
                        y = (e) => {
                            o(e), m(e.display_name);
                        },
                        v = () => {
                            C(p);
                        },
                        C = n.useCallback((e) => {
                            o(null), c(e);
                        }, []),
                        w = n.useMemo(() => (0, V.Z)(C, U.zH), [C]),
                        E = n.createElement(
                            h.Z,
                            { style: oe.searchContainer },
                            n.createElement(O.Z, {
                                Icon: H.default,
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
                            b ? null : n.createElement(g.ZP, { "aria-label": le, disabled: d, onPress: v, size: "small", style: oe.searchButton, type: "brandFilled" }, le),
                        );
                    let Z;
                    return (Z = s ? n.createElement(Y.Z, { gifSearchKey: U.AD.NoteComposition, onClickGif: r, query: s, shouldAutoPlayGif: f }) : l ? n.createElement($.Z, { category: l, gifSearchKey: U.AD.NoteComposition, onClickGif: r, shouldAutoPlayGif: f }) : n.createElement(X.ZP, { gifSearchKey: U.AD.NoteComposition, onClickCategory: y })), n.createElement(h.Z, null, E, Z);
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
                    const [r, l] = n.useState(a),
                        [o, s] = n.useState(!1),
                        [c, d] = n.useState(!1),
                        u = (0, i.yu)(),
                        p = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        m = n.useCallback(
                            (e) => {
                                l(e.currentTarget.value), d(!1), t && t(e.currentTarget.value);
                            },
                            [t],
                        ),
                        b = n.useCallback(() => {
                            if (!c)
                                try {
                                    ce.Z.renderToString(r, { ...ue.W, displayMode: !0, throwOnError: !0 }), e(r);
                                } catch {
                                    d(!0);
                                }
                        }, [c, e, r]),
                        _ = !r.trim(),
                        f = c || _,
                        v = n.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return n.createElement(h.Z, { style: ve.content }, n.createElement(h.Z, { style: ve.actionButtons }, n.createElement(g.ZP, { disabled: f, onClick: b, type: "brandFilled" }, a ? _e : be), n.createElement(g.ZP, { disabled: _, onClick: () => s(!o), size: "small", type: "brandText" }, o ? me : pe)), c ? n.createElement(de.Z.Danger, { text: ge, withIcon: !0 }) : null, o ? n.createElement(h.Z, { style: [ve.preview, !u && ve.maxHeight] }, n.createElement(ue.Z, { displayMode: !0, onError: v, tex: r })) : n.createElement(y.Z, { autoComplete: "off", errorText: fe({ count: p }), label: he, maxLength: p, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ve.input, validLength: p, value: r }));
                },
                ve = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = n.memo(ye);
            var we = a(161821),
                Ee = a(335923),
                Ze = a(507651);
            const ke = d().c80940f4,
                xe = d().hf6f2914,
                Ae = d().ebfd8ac6,
                Ie = d().h3701ffe,
                Pe = d().i3128619,
                Se = Object.freeze({ MARKDOWN: ke, PREVIEW: xe }),
                Te = o.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Re = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [r, l] = n.useState(e),
                        [o, s] = n.useState(Se.MARKDOWN),
                        c = (0, i.yu)(),
                        d = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        u = (e) => () => o === e,
                        p = (0, we.Z)(Se).map((e) => ({ key: e, label: e, isActive: u(e), to: location.pathname, onClick: () => s(e) })),
                        m = n.useCallback(
                            (e) => {
                                l(e.currentTarget.value), a && a(e.currentTarget.value);
                            },
                            [a],
                        );
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(Ze.Z, { links: p }),
                        (() => {
                            switch (o) {
                                case Se.MARKDOWN:
                                    return n.createElement(y.Z, { autoComplete: "off", errorText: Pe({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Te.input, validLength: d, value: r });
                                case Se.PREVIEW:
                                    return n.createElement(h.Z, { style: [Te.preview, !c && Te.maxHeight] }, n.createElement(Ee.Z, { markdownText: r }));
                                default:
                                    return null;
                            }
                        })(),
                        n.createElement(g.ZP, { disabled: !r.trim(), onClick: () => t(r), type: "brandFilled" }, e ? Ie : Ae),
                    );
                };
            var Be = a(385264);
            const Le = d().ebfd8ac6,
                De = d().d794135c,
                Me = d().e187f906,
                Fe = d().add55c98,
                qe = d().fa4e68ca,
                Qe = d().c80940f4,
                je = d().cfeb3f86,
                Ge = d().ad9e175c,
                Ne = (Be.Q.Media, Be.Q.GIFs, Be.Q.Posts, Be.Q.Markdown, Be.Q.Code, Be.Q.LaTeX, o.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                We = n.createElement(s.Z, { ratio: o.default.theme.aspectRatios.landscape }),
                ze = n.createElement(u.default, null),
                Oe = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: o, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: u, onAddTweets: h, onClose: f, tex: g } = e,
                        [y, v] = n.useState(!1),
                        [C, w] = n.useState(!1),
                        [E, Z] = n.useState(null),
                        k = (0, i.yu)(),
                        x = t === Be.Q.Markdown || t === Be.Q.LaTeX || t === Be.Q.Code,
                        A = (e) => {
                            Z(e);
                        },
                        I = !!E,
                        P = (e) => {
                            w(o !== e);
                        },
                        S = () => {
                            Z(null);
                        },
                        T = n.useMemo(() => ({ withKeyboardNavigation: !x, onBackClick: I ? S : void 0 }), [I, x]);
                    return n.createElement(
                        l.Z,
                        (0, r.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    x && C ? v(!0) : f();
                                },
                                style: [Ne.sheet, k && Ne.sheetNarrow],
                                title: Le,
                            },
                            T,
                        ),
                        n.createElement(
                            _.Z,
                            { style: [Ne.container, Ne.viewport] },
                            (() => {
                                switch (t) {
                                    case Be.Q.Media:
                                        return n.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: We, description: De, icon: ze, maskStyle: Ne.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: u, withDragDrop: !0 });
                                    case Be.Q.GIFs:
                                        return n.createElement(se, { onAddGif: s });
                                    case Be.Q.Posts:
                                        return n.createElement(p.ZP, { onAddTweets: h, onBookmarkFolderPress: A, selectedBookmarkFolderId: E });
                                    case Be.Q.Markdown:
                                        return n.createElement(Re, { markdown: o, onAddMarkdown: d, onChange: P });
                                    case Be.Q.Code:
                                        return n.createElement(D, { code: o, language: a, onAddCode: d, onChange: P });
                                    case Be.Q.LaTeX:
                                        return n.createElement(Ce, { onAddLaTeX: c, onChange: P, tex: g });
                                    default:
                                        return null;
                                }
                            })(),
                            y &&
                                n.createElement(W, {
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
                n = a(811176),
                i = a(190286),
                l = a(674132),
                o = a.n(l),
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
                            e.reduce((e, { Icon: n, confirmation: i, disabled: l, excludeFromActionMenu: o, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: m, withCancelButton: b }, _) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              i ? (i.render ? r({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : r({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: l, Icon: n, isEmphasized: s, testID: p, subText: u, text: m, onClick: o, link: c, withBottomBorder: t && t.includes(_) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : r.createElement(n.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: a, label: n, text: l, withCancelButton: o } = e || {};
                        return r.createElement(i.Z, { confirmButtonLabel: n, confirmButtonType: t, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: l, withCancelButton: o });
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
                n = a(325686),
                i = a(392237);
            class l extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: o.root });
                }
            }
            const o = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        789831: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                l = a(392237),
                o = a(655352);
            const s = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || i.Z,
                        m = l && !(0, o.ZP)();
                    return n.createElement(p, (0, r.Z)({}, u, { style: [m && !d && s.root, c] }), e, m ? a : null);
                };
        },
        850496: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var r = a(202784),
                n = a(325686),
                i = a(731708),
                l = a(15038),
                o = a(154003),
                s = a(682474),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                p = a(293615),
                m = a(837020),
                b = a(219229),
                _ = a(373554),
                h = a(304059),
                f = a(751170);
            const g = u().b87ca51a,
                y = u().eebff22c,
                v = r.createElement(p.default, null);
            class C extends r.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: o, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        _ = r.createElement(r.Fragment, null, this._renderPreview(), b ? null : r.createElement(r.Fragment, null, r.createElement(n.Z, { style: [E.mask, o, w[e]] }), r.createElement(n.Z, { style: [E.overlaidContent, a] }, r.createElement(n.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return r.createElement(n.Z, { style: [E.container, p, w[e]] }, m && c ? r.createElement(l.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, _) : _);
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
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: n, multiple: i, onAddMediaFiles: l, onEdit: s } = this.props;
                    return l ? r.createElement(_.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: n, multiple: i, onChange: l, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : r.createElement(o.ZP, { "aria-label": a, icon: n, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: a, mediaItem: n } = this.props;
                    return n ? r.createElement(s.Z, { ratio: e }, r.createElement(h.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: E.mediaPreview, withCloseButton: !1 })) : a;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.A.NONE, icon: v };
            const w = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        873637: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => h });
            var r = a(807896),
                n = a(202784),
                i = a(325686),
                l = a(167630),
                o = a(548485),
                s = a(392237),
                c = a(674132),
                d = a.n(c),
                u = a(205074),
                p = a(653843);
            const m = d().gff1f69e;
            class b extends n.Component {
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
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(l.Z, { "aria-label": m, style: _.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: r, withAspectRatioOptions: l, withZoomControl: s } = this.props,
                        { orientedImage: c } = this.state,
                        { cropData: d, originalMediaFile: u = {} } = r || {};
                    return c ? n.createElement(i.Z, { style: _.cropper }, n.createElement(o.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: a || d, image: { src: c.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: l, withZoomControl: s })) : null;
                }
            }
            const _ = s.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                h = n.forwardRef((e, t) => n.createElement(b, (0, r.Z)({}, e, { cropperRef: t })));
        },
        965245: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(807896),
                n = a(202784),
                i = a(229333),
                l = a(414939),
                o = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = n.createElement(l.Z, null), ...a }) => {
                const s = n.createElement(o.C, (0, r.Z)({}, a, { footer: t }));
                return e ? n.createElement(i.Z, { title: e }, s) : s;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-9f4db315.d919fcaa.js.map
