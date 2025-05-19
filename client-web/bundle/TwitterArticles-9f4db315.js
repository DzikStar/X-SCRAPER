(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-9f4db315", "loader.FeedbackSheet"],
    {
        390088: (e) => {
            e.exports = { queryId: "N6VKjJGDJXidNq_C_bprQQ", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        311661: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        908662: (e) => {
            e.exports = { queryId: "ym53QtxVk9_Gh23SjIRvAg", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        16162: (e) => {
            e.exports = { queryId: "5Dh-Ie3fDlI9I7Z5GrYk2A", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        280045: (e) => {
            e.exports = { queryId: "YvtlyUZdzdGCVPX31_E5zw", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        221234: (e) => {
            e.exports = { queryId: "e4pxCWYVeNF5_naLloarvA", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        607696: (e) => {
            e.exports = { queryId: "MNExWdAw4C7WqAK3AFVsqw", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        40577: (e) => {
            e.exports = { queryId: "er-2aGJuxZTxCJslm3a90Q", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        244016: (e) => {
            e.exports = { queryId: "z-3XUxqY0ZFx4E2D_lP2Ig", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        679129: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            const n = new (a(506899).fK.Entity)("articleEntities", {}, { idAttribute: "rest_id" });
        },
        229333: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => u });
            var n = a(202784),
                l = a(466999),
                r = a(325686),
                i = a(392237),
                o = a(332920);
            const s = a.n(o)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return n.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), n.createElement(r.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(202784),
                l = a(325686),
                r = a(392237),
                i = a(822228);
            const o = "activeRoute",
                s = r.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...r.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(i.Z, t, (t) => n.createElement(l.Z, { style: t && s.activeRoot, testID: o }, "function" == typeof e ? e(t) : e, t ? n.createElement(l.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        690822: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => Ve });
            var n = a(807896),
                l = a(202784),
                r = a(67369),
                i = a(344175),
                o = a(392237),
                s = a(682474),
                c = a(332920),
                d = a.n(c),
                u = a(473026),
                p = a(594897),
                m = a(850496),
                b = a(751170),
                _ = a(715601),
                h = a(325686),
                f = a(466818),
                g = a(154003),
                v = a(855488),
                y = a(516951),
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
                P = d().ebfd8ac6,
                I = d().h3701ffe,
                S = d().be4a00c2,
                T = d().i3128619,
                B = d().dbb02ec4,
                D = ({ code: e = "", language: t = "", onAddCode: a, onChange: n }) => {
                    const [i, o] = l.useState(e),
                        [s, c] = l.useState(!1),
                        [d, u] = l.useState(t),
                        [p, m] = l.useState((0, k.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        _ = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        D = 1e3 * b.getNumberValue(10),
                        M = (0, r.yu)(),
                        L = l.useCallback(
                            (e) => {
                                o(e.currentTarget.value), n(e.currentTarget.value);
                            },
                            [n],
                        ),
                        q = l.useCallback((e) => {
                            u(e);
                        }, []),
                        F = l.useCallback((e) => {
                            m(e || "");
                        }, []),
                        j = l.useCallback((e, t) => {
                            u(e), m(t || "");
                        }, []),
                        N = l.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(i, d));
                        }, [d, a, i]);
                    return l.createElement(h.Z, { style: R.content }, l.createElement(h.Z, { style: M ? R.rowNarrow : R.row }, _ ? l.createElement(E.Z, { onChange: F, onEnter: y.Z, onSelect: j, value: p }) : l.createElement(f.ZP, { label: B, onChange: q, options: x, style: [R.input, R.rowItem], value: d }), l.createElement(h.Z, { style: R.actionButtons }, l.createElement(g.ZP, { disabled: !i.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? A : Z), l.createElement(g.ZP, { disabled: !i.trim(), onClick: N, type: "brandFilled" }, e ? I : P))), s ? l.createElement(h.Z, { style: [R.preview, !M && R.maxHeight] }, l.createElement(w.Z, { code: i, language: d })) : l.createElement(v.Z, { autoComplete: "off", errorText: T({ count: D }), label: S, maxLength: D, multiline: !0, name: "code-input", numberOfLines: 15, onChange: L, style: R.input, validLength: D, value: i }));
                },
                R = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                M = l.memo(D);
            var L = a(815858),
                q = a(731708);
            const F = d().e554f642,
                j = d().fa524058,
                N = d().d4ab68e2,
                z = ({ onCancel: e, onConfirm: t }) => l.createElement(h.Z, { style: G.overlay }, l.createElement(h.Z, { style: G.overlayContent }, l.createElement(L.Z, { animateMount: !0, show: !0 }, l.createElement(h.Z, { style: G.actionBar }, l.createElement(q.ZP, { style: G.confirmationLabel, weight: "bold" }, F), l.createElement(h.Z, { style: G.actionBarButtonContainer }, l.createElement(g.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, j), l.createElement(g.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, N))))), l.createElement(h.Z, { style: G.mask })),
                G = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...o.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                H = l.memo(z);
            var W = a(461756),
                V = a(371344),
                Q = a(956272),
                O = a(666536),
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
                le = (0, ee.Z)().propsFromState(() => ({ isDataSaverEnabled: te.IX, shouldAutoPlayGif: ne, effectiveAutoplay: ae.AP })),
                re = d().a50ba822,
                ie = d().a9ae1e78,
                oe = o.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                se = le((e) => {
                    const { effectiveAutoplay: t, isDataSaverEnabled: a, onAddGif: n, shouldAutoPlayGif: r } = e,
                        [i, o] = l.useState(null),
                        [s, c] = l.useState(""),
                        [d, u] = l.useState(!0),
                        [p, m] = l.useState(""),
                        b = !a,
                        _ = t ?? (0, K.i)(),
                        f = (r || (0, X.Z)(_)) && !W.Z.reducedMotionEnabled,
                        v = (e) => {
                            o(e), m(e.display_name);
                        },
                        y = () => {
                            C(p);
                        },
                        C = l.useCallback((e) => {
                            o(null), c(e);
                        }, []),
                        w = l.useMemo(() => (0, O.Z)(C, U.zH), [C]),
                        E = l.createElement(
                            h.Z,
                            { style: oe.searchContainer },
                            l.createElement(V.Z, {
                                Icon: Q.default,
                                autoFocus: !0,
                                key: s,
                                onChange: (e) => {
                                    const { value: t } = e.currentTarget;
                                    m(t), b ? w(t) : u(!t);
                                },
                                onClear: () => {
                                    m(""), o(null), c(""), u(!0);
                                },
                                onSubmitEditing: y,
                                placeholder: re,
                                style: oe.searchInput,
                                value: p,
                                withClearButton: !0,
                            }),
                            b ? null : l.createElement(g.ZP, { "aria-label": ie, disabled: d, onPress: y, size: "small", style: oe.searchButton, type: "brandFilled" }, ie),
                        );
                    let k;
                    return (k = s ? l.createElement(Y.Z, { gifSearchKey: U.AD.NoteComposition, onClickGif: n, query: s, shouldAutoPlayGif: f }) : i ? l.createElement($.Z, { category: i, gifSearchKey: U.AD.NoteComposition, onClickGif: n, shouldAutoPlayGif: f }) : l.createElement(J.ZP, { gifSearchKey: U.AD.NoteComposition, onClickCategory: v })), l.createElement(h.Z, null, E, k);
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
                ve = ({ onAddLaTeX: e, onChange: t, tex: a = "" }) => {
                    const [n, i] = l.useState(a),
                        [o, s] = l.useState(!1),
                        [c, d] = l.useState(!1),
                        u = (0, r.yu)(),
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
                                    ce.Z.renderToString(n, { ...ue.W, displayMode: !0, throwOnError: !0 }), e(n);
                                } catch {
                                    d(!0);
                                }
                        }, [c, e, n]),
                        _ = !n.trim(),
                        f = c || _,
                        y = l.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return l.createElement(h.Z, { style: ye.content }, l.createElement(h.Z, { style: ye.actionButtons }, l.createElement(g.ZP, { disabled: f, onClick: b, type: "brandFilled" }, a ? _e : be), l.createElement(g.ZP, { disabled: _, onClick: () => s(!o), size: "small", type: "brandText" }, o ? me : pe)), c ? l.createElement(de.Z.Danger, { text: ge, withIcon: !0 }) : null, o ? l.createElement(h.Z, { style: [ye.preview, !u && ye.maxHeight] }, l.createElement(ue.Z, { displayMode: !0, onError: y, tex: n })) : l.createElement(v.Z, { autoComplete: "off", errorText: fe({ count: p }), label: he, maxLength: p, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ye.input, validLength: p, value: n }));
                },
                ye = o.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = l.memo(ve);
            var we = a(161821),
                Ee = a(335923),
                ke = a(507651);
            const xe = d().c80940f4,
                Ze = d().hf6f2914,
                Ae = d().ebfd8ac6,
                Pe = d().h3701ffe,
                Ie = d().i3128619,
                Se = Object.freeze({ MARKDOWN: xe, PREVIEW: Ze }),
                Te = o.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Be = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [n, i] = l.useState(e),
                        [o, s] = l.useState(Se.MARKDOWN),
                        c = (0, r.yu)(),
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
                                    return l.createElement(v.Z, { autoComplete: "off", errorText: Ie({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Te.input, validLength: d, value: n });
                                case Se.PREVIEW:
                                    return l.createElement(h.Z, { style: [Te.preview, !c && Te.maxHeight] }, l.createElement(Ee.Z, { markdownText: n }));
                                default:
                                    return null;
                            }
                        })(),
                        l.createElement(g.ZP, { disabled: !n.trim(), onClick: () => t(n), type: "brandFilled" }, e ? Pe : Ae),
                    );
                };
            var De = a(385264);
            const Re = d().ebfd8ac6,
                Me = d().d794135c,
                Le = d().e187f906,
                qe = d().add55c98,
                Fe = d().fa4e68ca,
                je = d().c80940f4,
                Ne = d().cfeb3f86,
                ze = d().ad9e175c,
                Ge = (De.Q.Media, De.Q.GIFs, De.Q.Posts, De.Q.Markdown, De.Q.Code, De.Q.LaTeX, o.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                He = l.createElement(s.Z, { ratio: o.default.theme.aspectRatios.landscape }),
                We = l.createElement(u.default, null),
                Ve = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: o, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: u, onAddTweets: h, onClose: f, tex: g } = e,
                        [v, y] = l.useState(!1),
                        [C, w] = l.useState(!1),
                        [E, k] = l.useState(null),
                        x = (0, r.yu)(),
                        Z = t === De.Q.Markdown || t === De.Q.LaTeX || t === De.Q.Code,
                        A = (e) => {
                            k(e);
                        },
                        P = !!E,
                        I = (e) => {
                            w(o !== e);
                        },
                        S = () => {
                            k(null);
                        },
                        T = l.useMemo(() => ({ withKeyboardNavigation: !Z, onBackClick: P ? S : void 0 }), [P, Z]);
                    return l.createElement(
                        i.Z,
                        (0, n.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    Z && C ? y(!0) : f();
                                },
                                style: [Ge.sheet, x && Ge.sheetNarrow],
                                title: Re,
                            },
                            T,
                        ),
                        l.createElement(
                            _.Z,
                            { style: [Ge.container, Ge.viewport] },
                            (() => {
                                switch (t) {
                                    case De.Q.Media:
                                        return l.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: He, description: Me, icon: We, maskStyle: Ge.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: u, withDragDrop: !0 });
                                    case De.Q.GIFs:
                                        return l.createElement(se, { onAddGif: s });
                                    case De.Q.Posts:
                                        return l.createElement(p.ZP, { onAddTweets: h, onBookmarkFolderPress: A, selectedBookmarkFolderId: E });
                                    case De.Q.Markdown:
                                        return l.createElement(Be, { markdown: o, onAddMarkdown: d, onChange: I });
                                    case De.Q.Code:
                                        return l.createElement(M, { code: o, language: a, onAddCode: d, onChange: I });
                                    case De.Q.LaTeX:
                                        return l.createElement(Ce, { onAddLaTeX: c, onChange: I, tex: g });
                                    default:
                                        return null;
                                }
                            })(),
                            v &&
                                l.createElement(H, {
                                    onCancel: () => {
                                        y(!1);
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
            var n = a(202784),
                l = a(811176),
                r = a(190286),
                i = a(332920),
                o = a.n(i),
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
                            e.reduce((e, { Icon: l, confirmation: r, disabled: i, excludeFromActionMenu: o, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: m, withCancelButton: b }, _) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              r ? (r.render ? n({ cancelCallback: r.onCancel, confirmCallback: d, render: r.render }) : n({ cancelCallback: r.onCancel, confirmCallback: d, text: r.text, headline: r.headline, label: r.label, confirmButtonType: r.confirmButtonType, withCancelButton: r.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: i, Icon: l, isEmphasized: s, testID: p, subText: u, text: m, onClick: o, link: c, withBottomBorder: t && t.includes(_) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(l.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: a, label: l, text: i, withCancelButton: o } = e || {};
                        return n.createElement(r.Z, { confirmButtonLabel: l, confirmButtonType: t, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: i, withCancelButton: o });
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
                l = a(325686),
                r = a(392237);
            class i extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(l.Z, { style: o.root });
                }
            }
            const o = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        789831: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(807896),
                l = a(202784),
                r = a(325686),
                i = a(392237),
                o = a(655352);
            const s = i.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: a, shouldRenderFab: i = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || r.Z,
                        m = i && !(0, o.ZP)();
                    return l.createElement(p, (0, n.Z)({}, u, { style: [m && !d && s.root, c] }), e, m ? a : null);
                };
        },
        850496: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var n = a(202784),
                l = a(325686),
                r = a(731708),
                i = a(15038),
                o = a(154003),
                s = a(682474),
                c = a(392237),
                d = a(332920),
                u = a.n(d),
                p = a(293615),
                m = a(837020),
                b = a(219229),
                _ = a(373554),
                h = a(304059),
                f = a(751170);
            const g = u().b87ca51a,
                v = u().eebff22c,
                y = n.createElement(p.default, null);
            class C extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: o, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        _ = n.createElement(n.Fragment, null, this._renderPreview(), b ? null : n.createElement(n.Fragment, null, n.createElement(l.Z, { style: [E.mask, o, w[e]] }), n.createElement(l.Z, { style: [E.overlaidContent, a] }, n.createElement(l.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? n.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return n.createElement(l.Z, { style: [E.container, p, w[e]] }, m && c ? n.createElement(i.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, _) : _);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: n.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": v, icon: n.createElement(b.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: l, multiple: r, onAddMediaFiles: i, onEdit: s } = this.props;
                    return i ? n.createElement(_.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: l, multiple: r, onChange: i, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(o.ZP, { "aria-label": a, icon: l, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: a, mediaItem: l } = this.props;
                    return l ? n.createElement(s.Z, { ratio: e }, n.createElement(h.Z, { borderRadius: t, enableGif: !1, mediaItem: l, style: E.mediaPreview, withCloseButton: !1 })) : a;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.A.NONE, icon: y };
            const w = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        965245: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(807896),
                l = a(202784),
                r = a(229333),
                i = a(414939),
                o = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = l.createElement(i.Z, null), ...a }) => {
                const s = l.createElement(o.C, (0, n.Z)({}, a, { footer: t }));
                return e ? l.createElement(r.Z, { title: e }, s) : s;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-9f4db315.9472f91a.js.map
