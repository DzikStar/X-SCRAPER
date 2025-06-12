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
            a.d(t, { Z: () => x });
            var n = a(506899),
                r = a(414742);
            const i = new n.fK.Entity("articleEntities", {}, { idAttribute: "rest_id" });
            var l = a(805020),
                o = a.n(l),
                s = a(803386),
                c = a.n(s),
                d = a(322821),
                p = a.n(d),
                u = a(93595),
                m = a.n(u),
                b = a(53605),
                h = a.n(b),
                _ = a(672075),
                g = a.n(_),
                f = a(196969),
                y = a.n(f),
                v = a(553600),
                C = a.n(v),
                w = a(446405),
                E = a.n(w),
                k = a(934309);
            const x = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: a, title: r } = t;
                    return e.graphQL(p(), { content_state: a, title: r }).then((e) => (0, n.Fv)(e.articleentity_create_draft?.article_entity_results?.result, i));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: a } = t;
                    return e.graphQL(h(), { articleEntityId: a }).then((e) => (0, n.Fv)(e.article_result_by_rest_id?.result, i));
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
                    return e.graphQL(g(), { articleEntityId: a }).then((e) => (0, n.Fv)(e.articleentity_unpublish?.article_entity_results?.result, i));
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
                p = a(473026),
                u = a(594897),
                m = a(850496),
                b = a(751170),
                h = a(715601),
                _ = a(325686),
                g = a(466818),
                f = a(154003),
                y = a(855488),
                v = a(516951),
                C = a(952793),
                w = a(65469),
                E = a(518426),
                k = a(611478);
            const x = [
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
                Z = d().hf6f2914,
                A = d().abd845fe,
                I = d().ebfd8ac6,
                S = d().h3701ffe,
                P = d().be4a00c2,
                T = d().i3128619,
                B = d().dbb02ec4,
                M = ({ code: e = "", language: t = "", onAddCode: a, onChange: n }) => {
                    const [l, o] = r.useState(e),
                        [s, c] = r.useState(!1),
                        [d, p] = r.useState(t),
                        [u, m] = r.useState((0, k.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        h = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        M = 1e3 * b.getNumberValue(10),
                        R = (0, i.yu)(),
                        L = r.useCallback(
                            (e) => {
                                o(e.currentTarget.value), n(e.currentTarget.value);
                            },
                            [n],
                        ),
                        F = r.useCallback((e) => {
                            p(e);
                        }, []),
                        j = r.useCallback((e) => {
                            m(e || "");
                        }, []),
                        z = r.useCallback((e, t) => {
                            p(e), m(t || "");
                        }, []),
                        G = r.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(l, d));
                        }, [d, a, l]);
                    return r.createElement(_.Z, { style: D.content }, r.createElement(_.Z, { style: R ? D.rowNarrow : D.row }, h ? r.createElement(E.Z, { onChange: j, onEnter: v.Z, onSelect: z, value: u }) : r.createElement(g.ZP, { label: B, onChange: F, options: x, style: [D.input, D.rowItem], value: d }), r.createElement(_.Z, { style: D.actionButtons }, r.createElement(f.ZP, { disabled: !l.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? A : Z), r.createElement(f.ZP, { disabled: !l.trim(), onClick: G, type: "brandFilled" }, e ? S : I))), s ? r.createElement(_.Z, { style: [D.preview, !R && D.maxHeight] }, r.createElement(w.Z, { code: l, language: d })) : r.createElement(y.Z, { autoComplete: "off", errorText: T({ count: M }), label: P, maxLength: M, multiline: !0, name: "code-input", numberOfLines: 15, onChange: L, style: D.input, validLength: M, value: l }));
                },
                D = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                R = r.memo(M);
            var L = a(815858),
                F = a(731708);
            const j = d().e554f642,
                z = d().fa524058,
                G = d().d4ab68e2,
                q = ({ onCancel: e, onConfirm: t }) => r.createElement(_.Z, { style: N.overlay }, r.createElement(_.Z, { style: N.overlayContent }, r.createElement(L.Z, { animateMount: !0, show: !0 }, r.createElement(_.Z, { style: N.actionBar }, r.createElement(F.ZP, { style: N.confirmationLabel, weight: "bold" }, j), r.createElement(_.Z, { style: N.actionBarButtonContainer }, r.createElement(f.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, z), r.createElement(f.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, G))))), r.createElement(_.Z, { style: N.mask })),
                N = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...o.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                Q = r.memo(q);
            var W = a(461756),
                H = a(371344),
                O = a(956272),
                V = a(666536),
                U = a(511985),
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
                        [d, p] = r.useState(!0),
                        [u, m] = r.useState(""),
                        b = !a,
                        h = t ?? (0, K.i)(),
                        g = (i || (0, X.Z)(h)) && !W.Z.reducedMotionEnabled,
                        y = (e) => {
                            o(e), m(e.display_name);
                        },
                        v = () => {
                            C(u);
                        },
                        C = r.useCallback((e) => {
                            o(null), c(e);
                        }, []),
                        w = r.useMemo(() => (0, V.Z)(C, U.zH), [C]),
                        E = r.createElement(
                            _.Z,
                            { style: oe.searchContainer },
                            r.createElement(H.Z, {
                                Icon: O.default,
                                autoFocus: !0,
                                key: s,
                                onChange: (e) => {
                                    const { value: t } = e.currentTarget;
                                    m(t), b ? w(t) : p(!t);
                                },
                                onClear: () => {
                                    m(""), o(null), c(""), p(!0);
                                },
                                onSubmitEditing: v,
                                placeholder: ie,
                                style: oe.searchInput,
                                value: u,
                                withClearButton: !0,
                            }),
                            b ? null : r.createElement(f.ZP, { "aria-label": le, disabled: d, onPress: v, size: "small", style: oe.searchButton, type: "brandFilled" }, le),
                        );
                    let k;
                    return (k = s ? r.createElement(Y.Z, { gifSearchKey: U.AD.NoteComposition, onClickGif: n, query: s, shouldAutoPlayGif: g }) : l ? r.createElement($.Z, { category: l, gifSearchKey: U.AD.NoteComposition, onClickGif: n, shouldAutoPlayGif: g }) : r.createElement(J.ZP, { gifSearchKey: U.AD.NoteComposition, onClickCategory: y })), r.createElement(_.Z, null, E, k);
                });
            var ce = a(366929),
                de = a(40610),
                pe = a(540985);
            const ue = d().hf6f2914,
                me = d().abd845fe,
                be = d().ebfd8ac6,
                he = d().h3701ffe,
                _e = d().effe1ca6,
                ge = d().i3128619,
                fe = d().c46c3c62,
                ye = ({ onAddLaTeX: e, onChange: t, tex: a = "" }) => {
                    const [n, l] = r.useState(a),
                        [o, s] = r.useState(!1),
                        [c, d] = r.useState(!1),
                        p = (0, i.yu)(),
                        u = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        m = r.useCallback(
                            (e) => {
                                l(e.currentTarget.value), d(!1), t && t(e.currentTarget.value);
                            },
                            [t],
                        ),
                        b = r.useCallback(() => {
                            if (!c)
                                try {
                                    ce.Z.renderToString(n, { ...pe.W, displayMode: !0, throwOnError: !0 }), e(n);
                                } catch {
                                    d(!0);
                                }
                        }, [c, e, n]),
                        h = !n.trim(),
                        g = c || h,
                        v = r.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return r.createElement(_.Z, { style: ve.content }, r.createElement(_.Z, { style: ve.actionButtons }, r.createElement(f.ZP, { disabled: g, onClick: b, type: "brandFilled" }, a ? he : be), r.createElement(f.ZP, { disabled: h, onClick: () => s(!o), size: "small", type: "brandText" }, o ? me : ue)), c ? r.createElement(de.Z.Danger, { text: fe, withIcon: !0 }) : null, o ? r.createElement(_.Z, { style: [ve.preview, !p && ve.maxHeight] }, r.createElement(pe.Z, { displayMode: !0, onError: v, tex: n })) : r.createElement(y.Z, { autoComplete: "off", errorText: ge({ count: u }), label: _e, maxLength: u, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ve.input, validLength: u, value: n }));
                },
                ve = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = r.memo(ye);
            var we = a(161821),
                Ee = a(335923),
                ke = a(507651);
            const xe = d().c80940f4,
                Ze = d().hf6f2914,
                Ae = d().ebfd8ac6,
                Ie = d().h3701ffe,
                Se = d().i3128619,
                Pe = Object.freeze({ MARKDOWN: xe, PREVIEW: Ze }),
                Te = o.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Be = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [n, l] = r.useState(e),
                        [o, s] = r.useState(Pe.MARKDOWN),
                        c = (0, i.yu)(),
                        d = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        p = (e) => () => o === e,
                        u = (0, we.Z)(Pe).map((e) => ({ key: e, label: e, isActive: p(e), to: location.pathname, onClick: () => s(e) })),
                        m = r.useCallback(
                            (e) => {
                                l(e.currentTarget.value), a && a(e.currentTarget.value);
                            },
                            [a],
                        );
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(ke.Z, { links: u }),
                        (() => {
                            switch (o) {
                                case Pe.MARKDOWN:
                                    return r.createElement(y.Z, { autoComplete: "off", errorText: Se({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Te.input, validLength: d, value: n });
                                case Pe.PREVIEW:
                                    return r.createElement(_.Z, { style: [Te.preview, !c && Te.maxHeight] }, r.createElement(Ee.Z, { markdownText: n }));
                                default:
                                    return null;
                            }
                        })(),
                        r.createElement(f.ZP, { disabled: !n.trim(), onClick: () => t(n), type: "brandFilled" }, e ? Ie : Ae),
                    );
                };
            var Me = a(385264);
            const De = d().ebfd8ac6,
                Re = d().d794135c,
                Le = d().e187f906,
                Fe = d().add55c98,
                je = d().fa4e68ca,
                ze = d().c80940f4,
                Ge = d().cfeb3f86,
                qe = d().ad9e175c,
                Ne = (Me.Q.Media, Me.Q.GIFs, Me.Q.Posts, Me.Q.Markdown, Me.Q.Code, Me.Q.LaTeX, o.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                Qe = r.createElement(s.Z, { ratio: o.default.theme.aspectRatios.landscape }),
                We = r.createElement(p.default, null),
                He = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: o, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: p, onAddTweets: _, onClose: g, tex: f } = e,
                        [y, v] = r.useState(!1),
                        [C, w] = r.useState(!1),
                        [E, k] = r.useState(null),
                        x = (0, i.yu)(),
                        Z = t === Me.Q.Markdown || t === Me.Q.LaTeX || t === Me.Q.Code,
                        A = (e) => {
                            k(e);
                        },
                        I = !!E,
                        S = (e) => {
                            w(o !== e);
                        },
                        P = () => {
                            k(null);
                        },
                        T = r.useMemo(() => ({ withKeyboardNavigation: !Z, onBackClick: I ? P : void 0 }), [I, Z]);
                    return r.createElement(
                        l.Z,
                        (0, n.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    Z && C ? v(!0) : g();
                                },
                                style: [Ne.sheet, x && Ne.sheetNarrow],
                                title: De,
                            },
                            T,
                        ),
                        r.createElement(
                            h.Z,
                            { style: [Ne.container, Ne.viewport] },
                            (() => {
                                switch (t) {
                                    case Me.Q.Media:
                                        return r.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: Qe, description: Re, icon: We, maskStyle: Ne.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: p, withDragDrop: !0 });
                                    case Me.Q.GIFs:
                                        return r.createElement(se, { onAddGif: s });
                                    case Me.Q.Posts:
                                        return r.createElement(u.ZP, { onAddTweets: _, onBookmarkFolderPress: A, selectedBookmarkFolderId: E });
                                    case Me.Q.Markdown:
                                        return r.createElement(Be, { markdown: o, onAddMarkdown: d, onChange: S });
                                    case Me.Q.Code:
                                        return r.createElement(R, { code: o, language: a, onAddCode: d, onChange: S });
                                    case Me.Q.LaTeX:
                                        return r.createElement(Ce, { onAddLaTeX: c, onChange: S, tex: f });
                                    default:
                                        return null;
                                }
                            })(),
                            y &&
                                r.createElement(Q, {
                                    onCancel: () => {
                                        v(!1);
                                    },
                                    onConfirm: g,
                                }),
                        ),
                    );
                };
        },
        169576: (e, t, a) => {
            "use strict";
            a.d(t, { c: () => _, Z: () => g });
            var n = a(202784),
                r = a(325686),
                i = a(392237),
                l = a(530732),
                o = a(992942),
                s = a(731708),
                c = a(154003),
                d = a(725516),
                p = a(111677),
                u = a.n(p);
            const m = a.p + "MarchMadnessBannerDark.42aa2dea.png",
                b = a.p + "MarchMadnessBannerLight.02bf82ca.png",
                h = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: m, lightMode: b } },
                _ = Object.freeze({ MarchMadness: "MarchMadness" }),
                g = ({ buttonOnSameLine: e, link: t, occasion: a, styleOverrides: p, withBackgroundImage: u }) => {
                    const m = (0, d.z)(),
                        b = _[a] || "Occasion",
                        g = u ? `${b}WithBackgroundImage` : b;
                    n.useEffect(() => {
                        m.scribe({ component: g, action: "impression" });
                    }, [m, g]);
                    const y = () => {
                            m.scribe({ component: g, action: "click", element: "card" });
                        },
                        { backgroundcolor: v, buttonSize: C, cardWidth: w, marginbottom: E, textcolor: k } = p ?? {},
                        x = v ? i.default.theme.colors[v] : i.default.theme.colors.gray0,
                        Z = k ? i.default.theme.colors[k] : i.default.theme.colors.gray900,
                        A = E ? i.default.theme.spaces[E] : i.default.theme.spaces.space16,
                        I = { [_.MarchMadness]: { header: h.header, description: h.description, legalDisclaimer: h.legalDisclaimer, buttonText: h.buttonText, image: h.image } }[a];
                    return u ? n.createElement(l.Z, { interactiveStyles: null, link: t, onPress: y, style: f.bannerContainer }, n.createElement(o.Z, { resizeMode: "contain", source: { uri: "light" === i.default.theme.paletteName ? I.image.lightMode : I.image.darkMode }, style: { height: 85 } })) : n.createElement(r.Z, { style: [f.card, { backgroundColor: x }, { maxWidth: w }, { marginBottom: A }], testID: "popupCard" }, n.createElement(r.Z, { style: e ? f.horizontalContent : f.verticalContent }, n.createElement(r.Z, { style: e ? f.textContainer : null }, n.createElement(s.ZP, { size: "headline2", style: [f.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, I.header), n.createElement(s.ZP, { size: "subtext1", style: [f.popupDescription, { color: Z }] }, I.description, " ", e ? null : I.legalDisclaimer)), n.createElement(r.Z, { style: f.buttonContainer }, n.createElement(c.ZP, { backgroundColor: "light" === i.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: y, size: "medium", style: [f.popupButton, { width: C }] }, I.buttonText), e && n.createElement(s.ZP, { size: "subtext3", style: [f.legalDisclaimer, { color: Z }] }, I.legalDisclaimer))));
                },
                f = i.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        774426: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => p });
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
                            e.reduce((e, { Icon: r, confirmation: i, disabled: l, excludeFromActionMenu: o, isEmphasized: s, link: c, onClick: d, subText: p, testID: u, text: m, withCancelButton: b }, h) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              i ? (i.render ? n({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : n({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: l, Icon: r, isEmphasized: s, testID: u, subText: p, text: m, onClick: o, link: c, withBottomBorder: t && t.includes(h) });
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
            const p = d;
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
                c = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: c, withoutBottomPadding: d, ...p }) => {
                    const u = t || i.Z,
                        m = l && !(0, o.ZP)();
                    return r.createElement(u, (0, n.Z)({}, p, { style: [m && !d && s.root, c] }), e, m ? a : null);
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
                p = a.n(d),
                u = a(293615),
                m = a(837020),
                b = a(219229),
                h = a(373554),
                _ = a(304059),
                g = a(751170);
            const f = p().b87ca51a,
                y = p().eebff22c,
                v = n.createElement(u.default, null);
            class C extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: o, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: p, rootStyle: u, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        h = n.createElement(n.Fragment, null, this._renderPreview(), b ? null : n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [E.mask, o, w[e]] }), n.createElement(r.Z, { style: [E.overlaidContent, a] }, n.createElement(r.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? n.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return n.createElement(r.Z, { style: [E.container, u, w[e]] }, m && c ? n.createElement(l.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, h) : h);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": f, hoverLabel: { label: f }, icon: n.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": y, icon: n.createElement(b.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: i, onAddMediaFiles: l, onEdit: s } = this.props;
                    return l ? n.createElement(h.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: i, onChange: l, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(o.ZP, { "aria-label": a, icon: r, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: a, mediaItem: r } = this.props;
                    return r ? n.createElement(s.Z, { ratio: e }, n.createElement(_.Z, { borderRadius: t, enableGif: !1, mediaItem: r, style: E.mediaPreview, withCloseButton: !1 })) : a;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: v };
            const w = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        873637: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => _ });
            var n = a(807896),
                r = a(202784),
                i = a(325686),
                l = a(167630),
                o = a(548485),
                s = a(392237),
                c = a(111677),
                d = a.n(c),
                p = a(205074),
                u = a(653843);
            const m = d().gff1f69e;
            class b extends r.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof p.ZP &&
                        (0, u.ZP)(t).then((e) =>
                            new p.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : r.createElement(l.Z, { "aria-label": m, style: h.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: n, withAspectRatioOptions: l, withZoomControl: s } = this.props,
                        { orientedImage: c } = this.state,
                        { cropData: d, originalMediaFile: p = {} } = n || {};
                    return c ? r.createElement(i.Z, { style: h.cropper }, r.createElement(o.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: a || d, image: { src: c.url, width: p.width, height: p.height }, ref: e, withAspectRatioOptions: l, withZoomControl: s })) : null;
                }
            }
            const h = s.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                _ = r.forwardRef((e, t) => r.createElement(b, (0, n.Z)({}, e, { cropperRef: t })));
        },
        902856: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                i = a(392237),
                l = a(167630);
            const o = i.default.create((e) => ({ overlay: { backgroundColor: e.colors.cellBackground, height: "100%", opacity: 0.7, paddingVertical: e.spaces.space20 } })),
                s = (e) => {
                    const { activityIndicatorStyle: t, style: a } = e;
                    return n.createElement(r.Z, { style: [i.default.absoluteFill, o.overlay, a] }, n.createElement(l.Z, { style: t }));
                };
        },
        313433: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(925873),
                i = a(392237),
                l = a(913670);
            const o = i.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const a = n.useCallback(
                        (a) => {
                            const n = r.Z.insertTextAtCursor(e, a.text);
                            t(n);
                        },
                        [e, t],
                    );
                    return n.createElement(l.Z, { iconStyle: o.iconGray, key: "emoji-picker", onEmojiSelect: a, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        741049: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                i = a(879891),
                l = a(779610),
                o = a(731708),
                s = a(415725);
            const c = (e) => {
                const { direction: t } = (0, i.Z)();
                return r.createElement(s.Z, { exact: !0, path: e.link }, (a) => {
                    const i = t;
                    return r.createElement(l.Z, (0, n.Z)({ isActive: a }, e, { label: r.createElement(o.ZP, { dir: i, testID: "rtl" === i ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-9f4db315.35dfe86a.js.map
