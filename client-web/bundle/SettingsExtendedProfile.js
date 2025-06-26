"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                r,
                o,
                i,
                s,
                l = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "section_type", variableName: "sectionType" },
                                    { kind: "Literal", name: "surface", value: "ExtendedProfile" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateRichtextProfileBlockResult",
                                kind: "LinkedField",
                                name: "create_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, i, r, o], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            l.hash = "5369f2707d565366752d07f461b21f70";
            const c = l;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a,
                r,
                o = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "update_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: r },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            o.hash = "96b616d665932ca695bc2d75fe26a33c";
            const i = o;
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(925873),
                o = n(392237),
                i = n(913670);
            const s = o.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                l = ({ editorState: e, onChange: t }) => {
                    const n = a.useCallback(
                        (n) => {
                            const a = r.Z.insertTextAtCursor(e, n.text);
                            t(a);
                        },
                        [e, t],
                    );
                    return a.createElement(i.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var a = n(202784),
                r = n(301503),
                o = n(597496),
                i = n(339110),
                s = n(456910),
                l = n(230295),
                c = n(267446);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = a.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: r, isInlineReply: s, onTypeaheadStateChange: l, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return a.createElement(o.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: m, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: n } = this.state;
                            if (n) {
                                const a = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(a, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    a = this._getPlaintextFromCurrentBlock(e),
                                    { end: r, start: o, word: i } = s.si(this._getCaret(e), a),
                                    l = s.bR(i || "", "compose");
                                if (l?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === o)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: n } = l;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: o, endIndex: r });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: a, startIndex: o } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: o, focusOffset: a }),
                        s = r.Modifier.replaceText(n.getCurrentContent(), i, e),
                        l = r.EditorState.push(n, s, "insert-characters"),
                        c = o + e.length,
                        u = l.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return r.EditorState.forceSelection(l, u);
                }
            }
            const d = u;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => a, _e: () => o, iN: () => c, kd: () => s, pc: () => r });
            const a = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                r = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                o = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                l = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: l.DRAFT, PUBLISHED: l.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var a = n(202784),
                r = n(437429),
                o = n.n(r),
                i = n(57074),
                s = n.n(i),
                l = n(10622),
                c = n.n(l),
                u = n(71620),
                d = n(312771),
                m = n(535338);
            function p(e, t, n) {
                const r = s()(t),
                    i = s()(n),
                    l = o()(),
                    p = (0, u.po)(),
                    [h, f] = a.useState(null),
                    [b, g] = a.useState(!1),
                    k = a.useCallback(() => {
                        b ||
                            (g(!0),
                            c()(l, e, r, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    g(!1);
                                },
                                error: (e) => {
                                    p(e), g(!1), f(e);
                                },
                            }));
                    }, [l, p, e, b, r, i]),
                    E = (0, m.p)(e, t, n);
                return a.useMemo(() => (h ? { data: E, refetch: k, refetchStatus: d.ZP.FAILED, refetchError: h } : { data: E, refetch: k, refetchStatus: b ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [E, h, b, k]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(202784),
                r = n(301503),
                o = n(614983),
                i = n.n(o),
                s = n(154003),
                l = n(111677),
                c = n.n(l),
                u = n(952793),
                d = n(72130),
                m = n(520385),
                p = n(725405),
                h = n(681488),
                f = (n(585488), n(351743)),
                b = n.n(f);
            const g = h.Z,
                k = () => {
                    const [e, t] = b()(g);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const E = n(163956).Z,
                C = () => {
                    const [e, t] = b()(E);
                    return [
                        a.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                y = c().a9cc8f96,
                _ = c().i2209530,
                x = ({ blockId: e, characterCount: t, disabled: n, editorState: o, onSave: l, queryId: c, sectionId: h, sectionType: f, setDirty: b, setError: g, setSaving: E, userId: x }) => {
                    const v = (0, u.hC)("xprofile_work_history_enabled"),
                        S = (0, p.Z)(),
                        [T] = k(),
                        [I] = C(),
                        Z = a.useCallback(() => {
                            E(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "error", { version: v ? 2 : 1 }) });
                        }, [S, e, v, E]),
                        w = a.useCallback(() => {
                            b(!1), E(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(t, "success", { version: v ? 2 : 1 }) }), l();
                        }, [S, e, v, l, b, E]),
                        P = a.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, r.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(o);
                            if (!n) return;
                            if (t > m.j3) return void g(y);
                            E(!0);
                            const a = e ? "update_block_btn" : "save_block_btn";
                            S.scribe({ ...(0, d.MA)(a, "click", {}) }),
                                e && x
                                    ? I({
                                          variables: { richtextValue: n, blockId: e, userId: x },
                                          onCompleted: w,
                                          onError: Z,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (v) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : x &&
                                      T(
                                          {
                                              variables: { richtextValue: n, userId: x, sectionId: h, sectionType: f },
                                              onCompleted: w,
                                              updater: (e, t) => {
                                                  if ((i()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [o, t, E, e, S, g, I, x, w, Z, c, v, T, h, f]);
                    return a.createElement(s.ZP, { disabled: n, onClick: P, size: "large", type: "brandFilled" }, _);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var a = n(202784),
                r = n(301503),
                o = n(925873),
                i = n(989272),
                s = n(977952),
                l = n(297256),
                c = n(392237),
                u = n(187669),
                d = n(949626),
                m = n(980407),
                p = n(478414);
            const h = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = o.Z.initEditorState(t);
                    return o.Z.convertEmojiToEntities(n);
                },
                f = () => null,
                b = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                g = ({ history: e }) => {
                    const [t, n] = a.useState(h(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, i.fH)((0, p.yW)(p.kg, p.gv), p.kg);
                    }),
                        a.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = a.useMemo(() => ({ editorState: t, element: s.Z, stripPastedStyles: !0 }), [t]),
                        g = a.useCallback((e) => {
                            const t = o.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        k = a.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, r.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        E = a.useCallback((e) => {
                            n(h(e));
                        }, []);
                    a.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: k, __setContents__: E }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [k, E],
                    );
                    const C = a.useMemo(() => a.createElement(d.Z, { className: p.kg }, a.createElement(l.b, { autoFocus: !0, inputStyle: b.container, isInputFullWidth: !0, onChange: g, richTextInputContext: c, textSizesOverride: (0, p.bb)(p.gv), withAppBar: !1 })), [g, c]);
                    return a.createElement(m.Z, { children: C, hideBackButton: !0, history: e, renderHeader: f });
                };
        },
        600193: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(668214),
                r = n(919022);
            const o = (0, a.Z)()
                .propsFromState(() => ({ viewerUser: r.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        992915: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Ae });
            var a,
                r,
                o = n(807896),
                i = (n(136728), n(202784)),
                s = n(325686),
                l = n(277660),
                c = n.n(l),
                u = n(811176),
                d = n(247056),
                m = n(392237),
                p = n(111677),
                h = n.n(p),
                f = n(607127),
                b = n(149170),
                g = n(718e3),
                k = n(785813),
                E = n(825495),
                C = n(252021),
                y = n(736063),
                _ = n(782642),
                x = n(520385),
                v = n(238225),
                S = n(482924),
                T = n(600193),
                I = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "consented" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConsentScreen_xprofileMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "consented", variableName: "consented" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "UpdateXprofileConsentResult",
                                kind: "LinkedField",
                                name: "update_xprofile_consent",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "ConsentScreen_xprofileMutation", selections: r },
                    params: { id: "4RvEtxr03YPi6jxZZ_PkoQ", metadata: {}, name: "ConsentScreen_xprofileMutation", operationKind: "mutation", text: null },
                };
            I.hash = "aa72fdb65006a205db978375998ebfe6";
            const Z = I;
            var w = n(614983),
                P = n.n(w),
                D = (n(585488), n(351743)),
                R = n.n(D),
                A = n(731708),
                B = n(593866),
                L = n(154003),
                M = n(40610),
                F = n(715417);
            const O = Z,
                V = h().h367e724,
                N = h().ea5928d4,
                j = h().h7ef9dc8,
                z = h().c04ba4b4,
                H = h().d7666008,
                W = h().cb24ee16,
                q = h().c3d89aca,
                K = h().a1c93d74,
                U = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                $ = i.createElement(F.default, { style: U.icon }),
                G = ({ queryId: e }) => {
                    const [t, n] = i.useState(""),
                        a = i.useMemo(
                            () => [
                                { label: z, decoration: $ },
                                { label: H, decoration: $ },
                                { label: W, decoration: $ },
                            ],
                            [],
                        ),
                        [r, o] = R()(O),
                        l = i.useCallback(() => {
                            n(""),
                                r({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(K);
                                    },
                                    onError: (e) => {
                                        n(K);
                                    },
                                    updater: (t, n) => {
                                        P()(e, "userId must be specified");
                                        const a = t.get(e);
                                        a && n?.update_xprofile_consent?.success && a.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [r, e]);
                    return i.createElement(s.Z, { style: U.consentRoot }, i.createElement(A.ZP, { size: "title3", weight: "bold" }, V), i.createElement(A.ZP, { size: "body" }, N), i.createElement(A.ZP, { weight: "bold" }, j), i.createElement(B.Z, { items: a }), i.createElement(L.ZP, { disabled: o, onClick: l, size: "large", type: "brandFilled" }, q), t ? i.createElement(M.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                Q = i.memo(G);
            var X = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                ae = n(167630),
                re = n(67369),
                oe = n(297256),
                ie = n(751475),
                se = n(908478),
                le = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(512547),
                me = n(313433),
                pe = n(874111),
                he = n(536790),
                fe = n(952793),
                be = n(655352),
                ge = n(478414),
                ke = n(72130),
                Ee = n(339110),
                Ce = n(725516),
                ye = n(242470);
            const _e = h().b956c04a,
                xe = h().ifb23caa,
                ve = h().c2333081,
                Se = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Te = (0, Ce.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: a, initialState: r = "", onSave: o, refetch: l, showConfirmDelete: c, userId: u }) => {
                    const d = (0, fe.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [p, h] = i.useState(""),
                        [f, b] = i.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(r),
                        ),
                        [g, k] = i.useState(!1),
                        [E, C] = i.useState(!1),
                        y = i.useCallback((e, t) => E && !g, [E, g]),
                        _ = i.useCallback(() => {
                            C(!1), k(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, ge.yW)(ge.Hx, ge.K), ge.Hx);
                    });
                    const v = i.useCallback(() => {
                            a(), C(!1), k(!1), e.scribe({ ...(0, ke.MA)("delete_block_btn", "success") }), b(Y.Z.initEditorState("")), l();
                        }, [e, a, l]),
                        S = (0, pe.c6)(f);
                    let T = S;
                    S > 1 && (T = te.ZP.getFormattedCount(S));
                    const I = i.useMemo(() => f?.getCurrentContent()?.hasText(), [f]),
                        Z = i.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                E || (0, se.Z)((0, X.convertToRaw)(t.getCurrentContent()), (0, X.convertToRaw)(f.getCurrentContent())) || C(!0), b(t);
                            },
                            [f, E],
                        ),
                        w = i.useMemo(() => ({ editorState: f, element: ne.Z, stripPastedStyles: !0 }), [f]),
                        P = i.useMemo(() => {
                            if (g) return i.createElement(s.Z, { style: Se.flexRow }, i.createElement(ae.Z, { size: "small" }), i.createElement(A.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!x.j3 && S > x.j3;
                            return i.createElement(s.Z, null, i.createElement(A.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: Se.textCountLabel }, ve({ count: T })));
                        }, [S, T, g]),
                        D = (0, re.Zz)(),
                        R = i.useMemo(() => {
                            const e = [Se.stickyButton];
                            return D && !(0, be.ZP)() ? e.push(Se.mobileButton) : e.push(Se.desktopButton), e;
                        }, [D]),
                        B = i.useCallback(() => (d ? i.createElement(me.Z, { editorState: f, onChange: Z }) : null), [f, d, Z]),
                        L = i.useCallback(
                            () => (e) =>
                                i.createElement(oe.b, {
                                    emojiPickerButton: B,
                                    inputStyle: Se.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), Z(t);
                                    },
                                    richTextInputContext: w,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, ge.bb)(ge.K),
                                    toolbarRightControl: P,
                                }),
                            [Z, B, w, P],
                        );
                    return i.createElement(s.Z, null, p ? i.createElement(s.Z, { style: Se.error }, i.createElement(M.Z.Danger, { text: p, withIcon: !0 })) : null, i.createElement(ie.Z, { fallbackBackPath: "/", history: m, onNavigation: _, shouldBlockNavigation: y, shouldBlockUnload: E }, i.createElement(ue.Z, { className: ge.Hx }, i.createElement(he.Z, { contextText: (0, pe.iT)(f), isInline: !0, onTextUpdated: Z, onTypeaheadStateChange: le.Z, source: Ee._4.LongformComposer }, L()))), i.createElement(s.Z, { style: R }, i.createElement(ye.Z, { blockId: t, characterCount: S, disabled: g || !E || !I || S > x.j3, editorState: f, onSave: o, queryId: n, setDirty: C, setError: h, setSaving: k, userId: u })), c && t ? i.createElement(de.Z, { blockId: t, headline: _e, onClose: a, onCompleted: v, queryId: n, subtext: xe, userId: u }) : null);
                }),
                Ie = h().a765e936,
                Ze = h().d4d68e44,
                we = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: a, refetch: r, viewerUser: o }) => {
                    const l = (0, _.p)(),
                        [m, p] = i.useState(!1),
                        h = c()(v.m1, n),
                        y = h?.items?.find((e) => e?.block_type === x.Mp.RICHTEXT),
                        S = y?.data?.value,
                        T = y?.block_id,
                        I = i.useCallback(() => {
                            p(!1);
                        }, []),
                        Z = i.useCallback(
                            (e) => [
                                {
                                    text: Ie,
                                    Icon: f.default,
                                    disabled: !T,
                                    onClick: () => {
                                        p(!0), e();
                                    },
                                },
                            ],
                            [T],
                        ),
                        w = i.useCallback((e) => i.createElement(u.Z, { cancelButtonLabel: "Cancel", items: Z(e), onCloseRequested: e }), [Z]);
                    return o
                        ? i.createElement(C.Z, {
                              backLocation: `/${o.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!o || !h) return null;
                                  if (!e) return i.createElement(s.Z, { style: Pe.root }, i.createElement(Q, { queryId: a }));
                                  return i.createElement(
                                      s.Z,
                                      { style: Pe.root },
                                      i.createElement(Te, {
                                          blockId: T,
                                          blocksQueryId: a,
                                          closeConfirm: I,
                                          initialState: S,
                                          onSave: () => {
                                              l({ text: Ze }), t.push(`/${o.screen_name}/bio`);
                                          },
                                          refetch: r,
                                          showConfirmDelete: m,
                                          userId: o.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? i.createElement(s.Z, null, i.createElement(d.Z, { Icon: b.default, renderActionMenu: w })) : null,
                              sidebarContent: i.createElement(g.Z, null),
                              subtitle: `@${o.screen_name}`,
                              title: (0, k.Z)(o),
                              titleIconCell: (0, E.Z)(o),
                          })
                        : null;
                },
                Pe = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                De = (e) => {
                    const { data: t, refetch: n } = (0, S.A)(v.vF, {}),
                        a = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        r = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !a) return null;
                    const s = r ? a.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return i.createElement(we, (0, o.Z)({ hasConsented: r, profileBlocksRef: a, queryId: s, refetch: n }, e));
                },
                Re = { context: "EXTENDED_PROFILE_SETTINGS" },
                Ae = (0, T.Z)((e) => i.createElement(y.H, { errorConfig: Re }, i.createElement(De, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                i = n(190286);
            const s = o().b15c0a18,
                l = o().aebf81c8,
                c = o().aa744c1e,
                u = o().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: n, history: r, onNavigation: o, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
                        [p, h] = a.useState(void 0);
                    a.useEffect(() => {
                        const e = (e) => {
                            m && (e.preventDefault(), (e.returnValue = ""));
                        };
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [m]);
                    const f = a.useCallback((e, t) => !(!p && d(e, t)) || (h({ nextLocation: e, action: t }), !1), [p, d]);
                    a.useEffect(() => {
                        const e = r.block(f);
                        return () => e();
                    }, [f, r]);
                    const b = a.useCallback(() => {
                            h(void 0);
                        }, [h]),
                        g = a.useCallback(() => {
                            o?.(),
                                h((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: a } = e;
                                    switch (t) {
                                        case "PUSH":
                                            r.push(a);
                                            break;
                                        case "REPLACE":
                                            r.replace(a);
                                            break;
                                        case "POP":
                                            r.goBackThroughModals({ fallbackPath: n });
                                    }
                                });
                        }, [n, r, o]);
                    return a.createElement(a.Fragment, null, t, p ? a.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: s, onCancel: b, onConfirm: g, text: l }) : null);
                };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => a });
            class a {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new a();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => b });
            n(571372);
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                i = n(111677),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                u = n(731708),
                d = n(154003),
                m = n(173739);
            const p = s().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, o] = a.useState(t),
                    [i, s] = a.useState(0);
                return (
                    a.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    a.createElement(
                        r.Z,
                        { style: f.container },
                        a.createElement(d.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? a.createElement(l.default, null) : a.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        a.createElement(u.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        a.createElement(
                            r.Z,
                            { style: f.slider },
                            a.createElement(m.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: o, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = a.useRef(void 0),
                    u = a.useRef({ animationLoaded: !1 }),
                    d = a.useRef(null),
                    [m, p] = a.useState(!1);
                return (
                    a.useEffect(() => {
                        function a(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = u.current;
                        r ||
                            ((u.current.animationLoaded = !0),
                            g.load().then((r) => {
                                if (r && d.current) {
                                    const o = { container: d.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(o);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new k(e);
                                            "function" == typeof s && s(t), a(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            a(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, o, i, s, l]),
                    a.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    a.createElement(r.Z, null, a.createElement(r.Z, { style: [e.animationContainerStyle, E.centerAnimation] }, a.createElement("div", { ref: d, style: e.animationStyle }), l && c.current && m && a.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    a.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class k extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, k), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const E = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                i = n(149170),
                s = n(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: u, renderActionMenu: d, style: m, testID: p, withDarkBackground: h = !1 }) {
                const f = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    b = a.useMemo(() => ({ label: t }), [t]);
                return a.createElement(s.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: b, iconSize: r, isDisabled: o, onPress: f, preventFocusShift: u, renderMenu: d, style: m, testID: p });
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var a = n(202784),
                r = n(325686),
                o = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const a = (0, o.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...u } = e,
                        [f, b] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        g = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (g.current)
                                if (i.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, o.Z)(e.count) && f.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, b));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            g.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, b));
                        }, [f.animating, f.oldText]),
                        a.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                o = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return a.createElement(
                                r.Z,
                                { style: [h.root, n] },
                                t ? a.createElement("span", { style: l }, a.createElement(s.ZP, u, f.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, b),
                                        style: c,
                                    },
                                    a.createElement(s.ZP, u, f.text),
                                ),
                            );
                        }, [n, u, f, g, b])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var a = n(202784),
                r = n(325686),
                o = n(461756),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(224162),
                u = n(491915),
                d = n(392237),
                m = n(551611),
                p = n(111677),
                h = n.n(p),
                f = n(891198),
                b = n(537392),
                g = n(280278);
            const k = h().e8d93005,
                E = d.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return a.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return a.createElement(g.ZP, { color: e, count: t, size: "subtext2", style: [E.count, ((o = r), o < d.default.theme.breakpoints.small && E.narrowCount)] }, t > 0 ? (((e) => e < d.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? k(t) : n) : void 0);
                        var o;
                    });
                };
            class y extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: o, decoration: s } = this.props;
                            return a.createElement(c.ZP.Consumer, null, ({ direction: l }) => a.createElement(i.ZP, { color: e ? n : o, dir: l, style: [v.inner, e && "blue500" === n && v.blue500] }, a.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: o, isActive: i, isDisabled: c, showBackgroundWhenActive: u } = this.props,
                                m = s.Z.generate({ backgroundColor: d.default.theme.colors[n], color: d.default.theme.colors[t], insetFocusRing: !0 }),
                                p = u && i && !e?.isHovered;
                            return a.createElement(l.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [d.default.absoluteFill, x[p ? "haloBackground" : n], !c && v.iconBackground, "small" === o && v.iconSmallBoundingBox, p && v.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: p, transitionAnimationUrl: h } = this.props;
                            if (!d.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && p) return a.createElement(u.ZP, { animation: h || m.Bf, animationContainerStyle: _[t], animationStyle: T, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const o = n && e ? e : this.props.Icon;
                                return a.createElement(o, { style: [_[t], !r && i && v.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? a.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: m, link: p, preventFocusShift: h, renderMenu: f, renderWrapper: b = a.Fragment, style: g, testID: k } = this.props,
                        E = !d.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return a.createElement(
                        r.Z,
                        { style: [v.root, g] },
                        a.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(i)
                                : a.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: p, onClick: this._handlePress, preventFocusShift: h, renderMenu: f, style: [v.triggerAreaRoot, v.outlineNone], testID: k }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: a } = e,
                                          r = i || n || a || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        E ? a.createElement(u.ZP.Prepare, null) : null,
                    );
                }
            }
            y.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const _ = d.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                x = d.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                v = d.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                S = "224.5%",
                T = { width: S, height: S };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var a = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class o extends a.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new o();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.a91bc4aa.js.map
