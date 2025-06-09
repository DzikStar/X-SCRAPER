(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-9f4db315", "loader.FeedbackSheet"],
    {
        805020: (e) => {
            e.exports = { queryId: "O0g5XB4pxcFfCH2bB2tQnQ", operationName: "ArticleEntitiesSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        803386: (e) => {
            e.exports = { queryId: "e4lWqB6m2TA8Fn_j9L9xEA", operationName: "ArticleEntityDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        322821: (e) => {
            e.exports = { queryId: "gWMNaKlDbrL4j5oI2DinOw", operationName: "ArticleEntityDraftCreate", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        93595: (e) => {
            e.exports = { queryId: "tUL-yeU5xhRlmamoe_s9YA", operationName: "ArticleEntityPublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        53605: (e) => {
            e.exports = { queryId: "g8lKlPeG-YB3eLsAYbb2tQ", operationName: "ArticleEntityResultByRestId", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        672075: (e) => {
            e.exports = { queryId: "Cwz87LfqenO0OAx3YuWsag", operationName: "ArticleEntityUnpublish", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        196969: (e) => {
            e.exports = { queryId: "YmkYI3pqyX0Gce1NMqkI0Q", operationName: "ArticleEntityUpdateContent", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        553600: (e) => {
            e.exports = { queryId: "Rlmfew2vrkZt1PYSmu5GCA", operationName: "ArticleEntityUpdateCoverMedia", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        446405: (e) => {
            e.exports = { queryId: "mG5MGgW_gMeIcM8KKCQ7nw", operationName: "ArticleEntityUpdateTitle", operationType: "mutation", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
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
                r = a(466999),
                l = a(325686),
                o = a(392237),
                i = a(111677);
            const s = a.n(i)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return n.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, t), n.createElement(l.Z, { "aria-label": a }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                l = a(392237),
                o = a(822228);
            const i = "activeRoute",
                s = l.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...l.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(o.Z, t, (t) => n.createElement(r.Z, { style: t && s.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        690822: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => Oe });
            var n = a(807896),
                r = a(202784),
                l = a(67369),
                o = a(344175),
                i = a(392237),
                s = a(682474),
                c = a(111677),
                d = a.n(c),
                u = a(473026),
                p = a(594897),
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
                P = d().ebfd8ac6,
                M = d().h3701ffe,
                I = d().be4a00c2,
                S = d().i3128619,
                T = d().dbb02ec4,
                B = ({ code: e = "", language: t = "", onAddCode: a, onChange: n }) => {
                    const [o, i] = r.useState(e),
                        [s, c] = r.useState(!1),
                        [d, u] = r.useState(t),
                        [p, m] = r.useState((0, k.Hn)(t)),
                        b = (0, C.D2)("responsive_web_twitter_article_markdown_block_limit"),
                        h = (0, C.D2)("responsive_web_twitter_article_code_language_typeahead_enabled").isTrue(),
                        B = 1e3 * b.getNumberValue(10),
                        R = (0, l.yu)(),
                        L = r.useCallback(
                            (e) => {
                                i(e.currentTarget.value), n(e.currentTarget.value);
                            },
                            [n],
                        ),
                        z = r.useCallback((e) => {
                            u(e);
                        }, []),
                        q = r.useCallback((e) => {
                            m(e || "");
                        }, []),
                        j = r.useCallback((e, t) => {
                            u(e), m(t || "");
                        }, []),
                        F = r.useCallback(() => {
                            a(((e, t) => `\`\`\`${t}\n${e.replaceAll("```", "")}\n\`\`\``)(o, d));
                        }, [d, a, o]);
                    return r.createElement(_.Z, { style: D.content }, r.createElement(_.Z, { style: R ? D.rowNarrow : D.row }, h ? r.createElement(E.Z, { onChange: q, onEnter: v.Z, onSelect: j, value: p }) : r.createElement(g.ZP, { label: T, onChange: z, options: x, style: [D.input, D.rowItem], value: d }), r.createElement(_.Z, { style: D.actionButtons }, r.createElement(f.ZP, { disabled: !o.trim(), onClick: () => c(!s), size: "small", type: "brandText" }, s ? A : Z), r.createElement(f.ZP, { disabled: !o.trim(), onClick: F, type: "brandFilled" }, e ? M : P))), s ? r.createElement(_.Z, { style: [D.preview, !R && D.maxHeight] }, r.createElement(w.Z, { code: o, language: d })) : r.createElement(y.Z, { autoComplete: "off", errorText: S({ count: B }), label: I, maxLength: B, multiline: !0, name: "code-input", numberOfLines: 15, onChange: L, style: D.input, validLength: B, value: o }));
                },
                D = i.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, row: { flexDirection: "row", alignItems: "centre", justifyContent: "space-between", gap: e.spaces.space12, zIndex: 2 }, rowNarrow: { flexDirection: "column-reverse" }, rowItem: { flex: 1 }, actionButtons: { flexDirection: "row", justifyContent: "space-around", paddingVertical: e.spaces.space12, gap: e.spaces.space8 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space8, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                R = r.memo(B);
            var L = a(815858),
                z = a(731708);
            const q = d().e554f642,
                j = d().fa524058,
                F = d().d4ab68e2,
                N = ({ onCancel: e, onConfirm: t }) => r.createElement(_.Z, { style: W.overlay }, r.createElement(_.Z, { style: W.overlayContent }, r.createElement(L.Z, { animateMount: !0, show: !0 }, r.createElement(_.Z, { style: W.actionBar }, r.createElement(z.ZP, { style: W.confirmationLabel, weight: "bold" }, q), r.createElement(_.Z, { style: W.actionBarButtonContainer }, r.createElement(f.ZP, { onClick: e, size: "small", type: "primaryOutlined" }, j), r.createElement(f.ZP, { onClick: t, size: "small", type: "destructiveOutlined" }, F))))), r.createElement(_.Z, { style: W.mask })),
                W = i.default.create((e) => ({ overlay: { ...i.default.absoluteFillObject, height: "100%", zIndex: e.componentZIndices.appBarZIndex + 1 }, mask: { ...i.default.absoluteFillObject, height: "100%", backgroundColor: e.colors.cellBackground, opacity: 0.7 }, overlayContent: { padding: e.spaces.space16, position: "relative", zIndex: e.componentZIndices.appBarZIndex + 2, backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.medium, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, actionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space4 }, actionBarButtonContainer: { gap: e.spaces.space4, flexDirection: "row" }, confirmationLabel: { display: "flex" } })),
                G = r.memo(N);
            var H = a(461756),
                O = a(371344),
                Q = a(956272),
                U = a(666536),
                V = a(511985),
                K = a(961817),
                X = a(992720),
                Y = a(278066),
                $ = a(223071),
                J = a(237837),
                ee = a(668214),
                te = a(38562),
                ae = a(659773);
            const ne = (e) => (0, te.l4)(e).shouldAutoPlayGif,
                re = (0, ee.Z)().propsFromState(() => ({ isDataSaverEnabled: te.IX, shouldAutoPlayGif: ne, effectiveAutoplay: ae.AP })),
                le = d().a50ba822,
                oe = d().a9ae1e78,
                ie = i.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                se = re((e) => {
                    const { effectiveAutoplay: t, isDataSaverEnabled: a, onAddGif: n, shouldAutoPlayGif: l } = e,
                        [o, i] = r.useState(null),
                        [s, c] = r.useState(""),
                        [d, u] = r.useState(!0),
                        [p, m] = r.useState(""),
                        b = !a,
                        h = t ?? (0, K.i)(),
                        g = (l || (0, X.Z)(h)) && !H.Z.reducedMotionEnabled,
                        y = (e) => {
                            i(e), m(e.display_name);
                        },
                        v = () => {
                            C(p);
                        },
                        C = r.useCallback((e) => {
                            i(null), c(e);
                        }, []),
                        w = r.useMemo(() => (0, U.Z)(C, V.zH), [C]),
                        E = r.createElement(
                            _.Z,
                            { style: ie.searchContainer },
                            r.createElement(O.Z, {
                                Icon: Q.default,
                                autoFocus: !0,
                                key: s,
                                onChange: (e) => {
                                    const { value: t } = e.currentTarget;
                                    m(t), b ? w(t) : u(!t);
                                },
                                onClear: () => {
                                    m(""), i(null), c(""), u(!0);
                                },
                                onSubmitEditing: v,
                                placeholder: le,
                                style: ie.searchInput,
                                value: p,
                                withClearButton: !0,
                            }),
                            b ? null : r.createElement(f.ZP, { "aria-label": oe, disabled: d, onPress: v, size: "small", style: ie.searchButton, type: "brandFilled" }, oe),
                        );
                    let k;
                    return (k = s ? r.createElement(J.Z, { gifSearchKey: V.AD.NoteComposition, onClickGif: n, query: s, shouldAutoPlayGif: g }) : o ? r.createElement($.Z, { category: o, gifSearchKey: V.AD.NoteComposition, onClickGif: n, shouldAutoPlayGif: g }) : r.createElement(Y.ZP, { gifSearchKey: V.AD.NoteComposition, onClickCategory: y })), r.createElement(_.Z, null, E, k);
                });
            var ce = a(366929),
                de = a(40610),
                ue = a(540985);
            const pe = d().hf6f2914,
                me = d().abd845fe,
                be = d().ebfd8ac6,
                he = d().h3701ffe,
                _e = d().effe1ca6,
                ge = d().i3128619,
                fe = d().c46c3c62,
                ye = ({ onAddLaTeX: e, onChange: t, tex: a = "" }) => {
                    const [n, o] = r.useState(a),
                        [i, s] = r.useState(!1),
                        [c, d] = r.useState(!1),
                        u = (0, l.yu)(),
                        p = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        m = r.useCallback(
                            (e) => {
                                o(e.currentTarget.value), d(!1), t && t(e.currentTarget.value);
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
                        h = !n.trim(),
                        g = c || h,
                        v = r.useCallback(() => {
                            d(!0);
                        }, [d]);
                    return r.createElement(_.Z, { style: ve.content }, r.createElement(_.Z, { style: ve.actionButtons }, r.createElement(f.ZP, { disabled: g, onClick: b, type: "brandFilled" }, a ? he : be), r.createElement(f.ZP, { disabled: h, onClick: () => s(!i), size: "small", type: "brandText" }, i ? me : pe)), c ? r.createElement(de.Z.Danger, { text: fe, withIcon: !0 }) : null, i ? r.createElement(_.Z, { style: [ve.preview, !u && ve.maxHeight] }, r.createElement(ue.Z, { displayMode: !0, onError: v, tex: n })) : r.createElement(y.Z, { autoComplete: "off", errorText: ge({ count: p }), label: _e, maxLength: p, multiline: !0, name: "tex-input", numberOfLines: 15, onChange: m, style: ve.input, validLength: p, value: n }));
                },
                ve = i.default.create((e) => ({ content: { display: "column", paddingVertical: e.spaces.space4, justifyContent: "space-between" }, actionButtons: { flexDirection: "row-reverse", gap: e.spaces.space12, marginBottom: e.spaces.space4 }, input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto" }, maxHeight: { maxHeight: "45vh" } })),
                Ce = r.memo(ye);
            var we = a(161821),
                Ee = a(335923),
                ke = a(507651);
            const xe = d().c80940f4,
                Ze = d().hf6f2914,
                Ae = d().ebfd8ac6,
                Pe = d().h3701ffe,
                Me = d().i3128619,
                Ie = Object.freeze({ MARKDOWN: xe, PREVIEW: Ze }),
                Se = i.default.create((e) => ({ input: { paddingHorizontal: 0 }, preview: { borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderColor: e.colors.gray100, padding: e.spaces.space12, marginVertical: e.spaces.space12, overflow: "auto", minHeight: "30vh" }, maxHeight: { maxHeight: "48vh" } })),
                Te = ({ markdown: e = "", onAddMarkdown: t, onChange: a }) => {
                    const [n, o] = r.useState(e),
                        [i, s] = r.useState(Ie.MARKDOWN),
                        c = (0, l.yu)(),
                        d = 1e3 * (0, C.D2)("responsive_web_twitter_article_markdown_block_limit").getNumberValue(10),
                        u = (e) => () => i === e,
                        p = (0, we.Z)(Ie).map((e) => ({ key: e, label: e, isActive: u(e), to: location.pathname, onClick: () => s(e) })),
                        m = r.useCallback(
                            (e) => {
                                o(e.currentTarget.value), a && a(e.currentTarget.value);
                            },
                            [a],
                        );
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(ke.Z, { links: p }),
                        (() => {
                            switch (i) {
                                case Ie.MARKDOWN:
                                    return r.createElement(y.Z, { autoComplete: "off", errorText: Me({ count: d }), label: "Add markdown here", maxLength: d, multiline: !0, name: "markdown-input", numberOfLines: 15, onChange: m, style: Se.input, validLength: d, value: n });
                                case Ie.PREVIEW:
                                    return r.createElement(_.Z, { style: [Se.preview, !c && Se.maxHeight] }, r.createElement(Ee.Z, { markdownText: n }));
                                default:
                                    return null;
                            }
                        })(),
                        r.createElement(f.ZP, { disabled: !n.trim(), onClick: () => t(n), type: "brandFilled" }, e ? Pe : Ae),
                    );
                };
            var Be = a(385264);
            const De = d().ebfd8ac6,
                Re = d().d794135c,
                Le = d().e187f906,
                ze = d().add55c98,
                qe = d().fa4e68ca,
                je = d().c80940f4,
                Fe = d().cfeb3f86,
                Ne = d().ad9e175c,
                We = (Be.Q.Media, Be.Q.GIFs, Be.Q.Posts, Be.Q.Markdown, Be.Q.Code, Be.Q.LaTeX, i.default.create((e) => ({ sheet: { minHeight: "40vh", maxHeight: "70vh" }, sheetNarrow: { maxHeight: "100vh" }, container: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16 }, mediaPickerMaskStyle: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium }, tabs: { borderBottomColor: "transparent" }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto" } }))),
                Ge = r.createElement(s.Z, { ratio: i.default.theme.aspectRatios.landscape }),
                He = r.createElement(u.default, null),
                Oe = (e) => {
                    const { attachmentType: t, codeLanguage: a, markdown: i, onAddGif: s, onAddLaTeX: c, onAddMarkdown: d, onAddMedia: u, onAddTweets: _, onClose: g, tex: f } = e,
                        [y, v] = r.useState(!1),
                        [C, w] = r.useState(!1),
                        [E, k] = r.useState(null),
                        x = (0, l.yu)(),
                        Z = t === Be.Q.Markdown || t === Be.Q.LaTeX || t === Be.Q.Code,
                        A = (e) => {
                            k(e);
                        },
                        P = !!E,
                        M = (e) => {
                            w(i !== e);
                        },
                        I = () => {
                            k(null);
                        },
                        S = r.useMemo(() => ({ withKeyboardNavigation: !Z, onBackClick: P ? I : void 0 }), [P, Z]);
                    return r.createElement(
                        o.Z,
                        (0, n.Z)(
                            {
                                enableMaskForDismiss: !0,
                                onClose: () => {
                                    Z && C ? v(!0) : g();
                                },
                                style: [We.sheet, x && We.sheetNarrow],
                                title: De,
                            },
                            S,
                        ),
                        r.createElement(
                            h.Z,
                            { style: [We.container, We.viewport] },
                            (() => {
                                switch (t) {
                                    case Be.Q.Media:
                                        return r.createElement(m.Z, { acceptGifs: !0, acceptVideo: !0, borderRadius: b.A.MEDIUM, currentContent: Ge, description: Re, icon: He, maskStyle: We.mediaPickerMaskStyle, multiple: !0, onAddMediaFiles: u, withDragDrop: !0 });
                                    case Be.Q.GIFs:
                                        return r.createElement(se, { onAddGif: s });
                                    case Be.Q.Posts:
                                        return r.createElement(p.ZP, { onAddTweets: _, onBookmarkFolderPress: A, selectedBookmarkFolderId: E });
                                    case Be.Q.Markdown:
                                        return r.createElement(Te, { markdown: i, onAddMarkdown: d, onChange: M });
                                    case Be.Q.Code:
                                        return r.createElement(R, { code: i, language: a, onAddCode: d, onChange: M });
                                    case Be.Q.LaTeX:
                                        return r.createElement(Ce, { onAddLaTeX: c, onChange: M, tex: f });
                                    default:
                                        return null;
                                }
                            })(),
                            y &&
                                r.createElement(G, {
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
                l = a(392237),
                o = a(530732),
                i = a(992942),
                s = a(731708),
                c = a(154003),
                d = a(725516),
                u = a(111677),
                p = a.n(u);
            const m = a.p + "MarchMadnessBannerDark.42aa2dea.png",
                b = a.p + "MarchMadnessBannerLight.02bf82ca.png",
                h = { header: p().d231a76a, description: p().heaba5d8, legalDisclaimer: p().i57d3ea0, buttonText: p().a0440af6, image: { darkMode: m, lightMode: b } },
                _ = Object.freeze({ MarchMadness: "MarchMadness" }),
                g = ({ buttonOnSameLine: e, link: t, occasion: a, styleOverrides: u, withBackgroundImage: p }) => {
                    const m = (0, d.z)(),
                        b = _[a] || "Occasion",
                        g = p ? `${b}WithBackgroundImage` : b;
                    n.useEffect(() => {
                        m.scribe({ component: g, action: "impression" });
                    }, [m, g]);
                    const y = () => {
                            m.scribe({ component: g, action: "click", element: "card" });
                        },
                        { backgroundcolor: v, buttonSize: C, cardWidth: w, marginbottom: E, textcolor: k } = u ?? {},
                        x = v ? l.default.theme.colors[v] : l.default.theme.colors.gray0,
                        Z = k ? l.default.theme.colors[k] : l.default.theme.colors.gray900,
                        A = E ? l.default.theme.spaces[E] : l.default.theme.spaces.space16,
                        P = { [_.MarchMadness]: { header: h.header, description: h.description, legalDisclaimer: h.legalDisclaimer, buttonText: h.buttonText, image: h.image } }[a];
                    return p ? n.createElement(o.Z, { interactiveStyles: null, link: t, onPress: y, style: f.bannerContainer }, n.createElement(i.Z, { resizeMode: "contain", source: { uri: "light" === l.default.theme.paletteName ? P.image.lightMode : P.image.darkMode }, style: { height: 85 } })) : n.createElement(r.Z, { style: [f.card, { backgroundColor: x }, { maxWidth: w }, { marginBottom: A }], testID: "popupCard" }, n.createElement(r.Z, { style: e ? f.horizontalContent : f.verticalContent }, n.createElement(r.Z, { style: e ? f.textContainer : null }, n.createElement(s.ZP, { size: "headline2", style: [f.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, P.header), n.createElement(s.ZP, { size: "subtext1", style: [f.popupDescription, { color: Z }] }, P.description, " ", e ? null : P.legalDisclaimer)), n.createElement(r.Z, { style: f.buttonContainer }, n.createElement(c.ZP, { backgroundColor: "light" === l.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: y, size: "medium", style: [f.popupButton, { width: C }] }, P.buttonText), e && n.createElement(s.ZP, { size: "subtext3", style: [f.legalDisclaimer, { color: Z }] }, P.legalDisclaimer))));
                },
                f = l.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        774426: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, { default: () => u });
            a(136728);
            var n = a(202784),
                r = a(811176),
                l = a(190286),
                o = a(111677),
                i = a.n(o),
                s = a(912021);
            const c = i().cfd2f35e;
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
                            e.reduce((e, { Icon: r, confirmation: l, disabled: o, excludeFromActionMenu: i, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: m, withCancelButton: b }, h) => {
                                if (!i) {
                                    const i = d
                                        ? () => {
                                              l ? (l.render ? n({ cancelCallback: l.onCancel, confirmCallback: d, render: l.render }) : n({ cancelCallback: l.onCancel, confirmCallback: d, text: l.text, headline: l.headline, label: l.label, confirmButtonType: l.confirmButtonType, withCancelButton: l.withCancelButton })) : (d(), a());
                                          }
                                        : a;
                                    e.push({ disabled: o, Icon: r, isEmphasized: s, testID: p, subText: u, text: m, onClick: i, link: c, withBottomBorder: t && t.includes(h) });
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
                        const { confirmButtonType: t, headline: a, label: r, text: o, withCancelButton: i } = e || {};
                        return n.createElement(l.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: o, withCancelButton: i });
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
                l = a(392237);
            class o extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: i.root });
                }
            }
            const i = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = o;
        },
        789831: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                o = a(392237),
                i = a(655352);
            const s = o.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: a, shouldRenderFab: o = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || l.Z,
                        m = o && !(0, i.ZP)();
                    return r.createElement(p, (0, n.Z)({}, u, { style: [m && !d && s.root, c] }), e, m ? a : null);
                };
        },
        290402: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => b });
            var n = a(807896),
                r = a(202784),
                l = a(182056),
                o = a(879113),
                i = a(392237),
                s = a(111677),
                c = a.n(s),
                d = a(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, a) => {
                    const i = l.Z.isOnline();
                    return r.createElement(o.Z, (0, n.Z)({}, t, { icon: i ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: i ? e : u }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                b = r.forwardRef(p);
        },
        850496: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                o = a(15038),
                i = a(154003),
                s = a(682474),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                p = a(293615),
                m = a(837020),
                b = a(219229),
                h = a(373554),
                _ = a(304059),
                g = a(751170);
            const f = u().b87ca51a,
                y = u().eebff22c,
                v = n.createElement(p.default, null);
            class C extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: a, maskStyle: i, mediaItem: s, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: m } = this.props,
                        b = s && !s.uploader,
                        h = n.createElement(n.Fragment, null, this._renderPreview(), b ? null : n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [E.mask, i, w[e]] }), n.createElement(r.Z, { style: [E.overlaidContent, a] }, n.createElement(r.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? n.createElement(l.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return n.createElement(r.Z, { style: [E.container, p, w[e]] }, m && c ? n.createElement(o.ZP, { onFilesAdded: c, style: [E.dragDropContainer, w[e]] }, h) : h);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(i.ZP, { "aria-label": f, hoverLabel: { label: f }, icon: n.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(i.ZP, { "aria-label": y, icon: n.createElement(b.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: l, onAddMediaFiles: o, onEdit: s } = this.props;
                    return o ? n.createElement(h.Z, { acceptGifs: e, acceptVideo: t, "aria-label": a, icon: r, multiple: l, onChange: o, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(i.ZP, { "aria-label": a, icon: r, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
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
        965245: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                l = a(229333),
                o = a(414939),
                i = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(o.Z, null), ...a }) => {
                const s = r.createElement(i.C, (0, n.Z)({}, a, { footer: t }));
                return e ? r.createElement(l.Z, { title: e }, s) : s;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-9f4db315.a968e17a.js.map
