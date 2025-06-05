"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                r,
                o,
                s,
                l,
                i = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [a, s, r, o], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: l },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            i.hash = "5369f2707d565366752d07f461b21f70";
            const c = i;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => s });
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
            const s = o;
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(925873),
                o = n(392237),
                s = n(913670);
            const l = o.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                i = ({ editorState: e, onChange: t }) => {
                    const n = a.useCallback(
                        (n) => {
                            const a = r.Z.insertTextAtCursor(e, n.text);
                            t(a);
                        },
                        [e, t],
                    );
                    return a.createElement(s.Z, { iconStyle: l.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var a = n(202784),
                r = n(301503),
                o = n(597496),
                s = n(339110),
                l = n(456910),
                i = n(230295),
                c = n(267446);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = a.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: r, isInlineReply: l, onTypeaheadStateChange: i, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                m = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return a.createElement(o.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: l, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: i, query: m, ref: this._genericWrapperRef, source: c || s._4.Compose }, e(this._handleInputChange));
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
                            if (!(0, i.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    a = this._getPlaintextFromCurrentBlock(e),
                                    { end: r, start: o, word: s } = l.si(this._getCaret(e), a),
                                    i = l.bR(s || "", "compose");
                                if (i?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === o)) this._setQueryContext(void 0);
                                else if (i) {
                                    const { q: t, result_type: n } = i;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: o, endIndex: r });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: a, startIndex: o } = t,
                        s = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: o, focusOffset: a }),
                        l = r.Modifier.replaceText(n.getCurrentContent(), s, e),
                        i = r.EditorState.push(n, l, "insert-characters"),
                        c = o + e.length,
                        u = i.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return r.EditorState.forceSelection(i, u);
                }
            }
            const d = u;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => s, DC: () => a, _e: () => o, iN: () => c, kd: () => l, pc: () => r });
            const a = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                r = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                o = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                s = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                l = { content_state: { blocks: [], entity_map: [] } },
                i = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: i.DRAFT, PUBLISHED: i.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var a = n(202784),
                r = n(437429),
                o = n.n(r),
                s = n(57074),
                l = n.n(s),
                i = n(10622),
                c = n.n(i),
                u = n(71620),
                d = n(312771),
                m = n(535338);
            function p(e, t, n) {
                const r = l()(t),
                    s = l()(n),
                    i = o()(),
                    p = (0, u.po)(),
                    [f, h] = a.useState(null),
                    [b, k] = a.useState(!1),
                    _ = a.useCallback(() => {
                        b ||
                            (k(!0),
                            c()(i, e, r, { networkCacheConfig: s?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    k(!1);
                                },
                                error: (e) => {
                                    p(e), k(!1), h(e);
                                },
                            }));
                    }, [i, p, e, b, r, s]),
                    g = (0, m.p)(e, t, n);
                return a.useMemo(() => (f ? { data: g, refetch: _, refetchStatus: d.ZP.FAILED, refetchError: f } : { data: g, refetch: _, refetchStatus: b ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [g, f, b, _]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(202784),
                r = n(301503),
                o = n(614983),
                s = n.n(o),
                l = n(154003),
                i = n(111677),
                c = n.n(i),
                u = n(952793),
                d = n(72130),
                m = n(520385),
                p = n(725405),
                f = n(681488),
                h = (n(585488), n(351743)),
                b = n.n(h);
            const k = f.Z,
                _ = () => {
                    const [e, t] = b()(k);
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
            const g = n(163956).Z,
                C = () => {
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
                },
                E = c().a9cc8f96,
                y = c().i2209530,
                x = ({ blockId: e, characterCount: t, disabled: n, editorState: o, onSave: i, queryId: c, sectionId: f, sectionType: h, setDirty: b, setError: k, setSaving: g, userId: x }) => {
                    const I = (0, u.hC)("xprofile_work_history_enabled"),
                        v = (0, p.Z)(),
                        [S] = _(),
                        [T] = C(),
                        Z = a.useCallback(() => {
                            g(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(t, "error", { version: I ? 2 : 1 }) });
                        }, [v, e, I, g]),
                        w = a.useCallback(() => {
                            b(!1), g(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(t, "success", { version: I ? 2 : 1 }) }), i();
                        }, [v, e, I, i, b, g]),
                        R = a.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, r.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(o);
                            if (!n) return;
                            if (t > m.j3) return void k(E);
                            g(!0);
                            const a = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(a, "click", {}) }),
                                e && x
                                    ? T({
                                          variables: { richtextValue: n, blockId: e, userId: x },
                                          onCompleted: w,
                                          onError: Z,
                                          updater: (e, t) => {
                                              if ((s()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (I) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : x &&
                                      S(
                                          {
                                              variables: { richtextValue: n, userId: x, sectionId: f, sectionType: h },
                                              onCompleted: w,
                                              updater: (e, t) => {
                                                  if ((s()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [o, t, g, e, v, k, T, x, w, Z, c, I, S, f, h]);
                    return a.createElement(l.ZP, { disabled: n, onClick: R, size: "large", type: "brandFilled" }, y);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var a = n(202784),
                r = n(301503),
                o = n(925873),
                s = n(989272),
                l = n(977952),
                i = n(297256),
                c = n(392237),
                u = n(187669),
                d = n(949626),
                m = n(980407),
                p = n(478414);
            const f = (e) => {
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
                h = () => null,
                b = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                k = ({ history: e }) => {
                    const [t, n] = a.useState(f(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, s.fH)((0, p.yW)(p.kg, p.gv), p.kg);
                    }),
                        a.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = a.useMemo(() => ({ editorState: t, element: l.Z, stripPastedStyles: !0 }), [t]),
                        k = a.useCallback((e) => {
                            const t = o.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        _ = a.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, r.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        g = a.useCallback((e) => {
                            n(f(e));
                        }, []);
                    a.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: _, __setContents__: g }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [_, g],
                    );
                    const C = a.useMemo(() => a.createElement(d.Z, { className: p.kg }, a.createElement(i.b, { autoFocus: !0, inputStyle: b.container, isInputFullWidth: !0, onChange: k, richTextInputContext: c, textSizesOverride: (0, p.bb)(p.gv), withAppBar: !1 })), [k, c]);
                    return a.createElement(m.Z, { children: C, hideBackButton: !0, history: e, renderHeader: h });
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
            n.r(t), n.d(t, { default: () => Be });
            var a,
                r,
                o = n(807896),
                s = (n(136728), n(202784)),
                l = n(325686),
                i = n(277660),
                c = n.n(i),
                u = n(811176),
                d = n(247056),
                m = n(392237),
                p = n(111677),
                f = n.n(p),
                h = n(607127),
                b = n(149170),
                k = n(718e3),
                _ = n(785813),
                g = n(825495),
                C = n(252021),
                E = n(736063),
                y = n(782642),
                x = n(520385),
                I = n(238225),
                v = n(482924),
                S = n(600193),
                T = {
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
            T.hash = "aa72fdb65006a205db978375998ebfe6";
            const Z = T;
            var w = n(614983),
                R = n.n(w),
                D = (n(585488), n(351743)),
                L = n.n(D),
                B = n(731708),
                M = n(593866),
                A = n(154003),
                O = n(40610),
                P = n(715417);
            const V = Z,
                F = f().h367e724,
                N = f().ea5928d4,
                q = f().h7ef9dc8,
                H = f().c04ba4b4,
                z = f().d7666008,
                j = f().cb24ee16,
                K = f().c3d89aca,
                U = f().a1c93d74,
                W = m.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                G = s.createElement(P.default, { style: W.icon }),
                Q = ({ queryId: e }) => {
                    const [t, n] = s.useState(""),
                        a = s.useMemo(
                            () => [
                                { label: H, decoration: G },
                                { label: z, decoration: G },
                                { label: j, decoration: G },
                            ],
                            [],
                        ),
                        [r, o] = L()(V),
                        i = s.useCallback(() => {
                            n(""),
                                r({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(U);
                                    },
                                    onError: (e) => {
                                        n(U);
                                    },
                                    updater: (t, n) => {
                                        R()(e, "userId must be specified");
                                        const a = t.get(e);
                                        a && n?.update_xprofile_consent?.success && a.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [r, e]);
                    return s.createElement(l.Z, { style: W.consentRoot }, s.createElement(B.ZP, { size: "title3", weight: "bold" }, F), s.createElement(B.ZP, { size: "body" }, N), s.createElement(B.ZP, { weight: "bold" }, q), s.createElement(M.Z, { items: a }), s.createElement(A.ZP, { disabled: o, onClick: i, size: "large", type: "brandFilled" }, K), t ? s.createElement(O.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                X = s.memo(Q);
            var $ = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                ae = n(167630),
                re = n(67369),
                oe = n(297256),
                se = n(751475),
                le = n(908478),
                ie = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(512547),
                me = n(313433),
                pe = n(874111),
                fe = n(536790),
                he = n(952793),
                be = n(655352),
                ke = n(478414),
                _e = n(72130),
                ge = n(339110),
                Ce = n(725516),
                Ee = n(242470);
            const ye = f().b956c04a,
                xe = f().ifb23caa,
                Ie = f().c2333081,
                ve = m.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Se = (0, Ce.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: a, initialState: r = "", onSave: o, refetch: i, showConfirmDelete: c, userId: u }) => {
                    const d = (0, he.hC)("xprofile_emojis_enabled"),
                        m = (0, J.useHistory)(),
                        [p, f] = s.useState(""),
                        [h, b] = s.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(r),
                        ),
                        [k, _] = s.useState(!1),
                        [g, C] = s.useState(!1),
                        E = s.useCallback((e, t) => g && !k, [g, k]),
                        y = s.useCallback(() => {
                            C(!1), _(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, ke.yW)(ke.Hx, ke.K), ke.Hx);
                    });
                    const I = s.useCallback(() => {
                            a(), C(!1), _(!1), e.scribe({ ...(0, _e.MA)("delete_block_btn", "success") }), b(Y.Z.initEditorState("")), i();
                        }, [e, a, i]),
                        v = (0, pe.c6)(h);
                    let S = v;
                    v > 1 && (S = te.ZP.getFormattedCount(v));
                    const T = s.useMemo(() => h?.getCurrentContent()?.hasText(), [h]),
                        Z = s.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                g || (0, le.Z)((0, $.convertToRaw)(t.getCurrentContent()), (0, $.convertToRaw)(h.getCurrentContent())) || C(!0), b(t);
                            },
                            [h, g],
                        ),
                        w = s.useMemo(() => ({ editorState: h, element: ne.Z, stripPastedStyles: !0 }), [h]),
                        R = s.useMemo(() => {
                            if (k) return s.createElement(l.Z, { style: ve.flexRow }, s.createElement(ae.Z, { size: "small" }), s.createElement(B.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!x.j3 && v > x.j3;
                            return s.createElement(l.Z, null, s.createElement(B.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: ve.textCountLabel }, Ie({ count: S })));
                        }, [v, S, k]),
                        D = (0, re.Zz)(),
                        L = s.useMemo(() => {
                            const e = [ve.stickyButton];
                            return D && !(0, be.ZP)() ? e.push(ve.mobileButton) : e.push(ve.desktopButton), e;
                        }, [D]),
                        M = s.useCallback(() => (d ? s.createElement(me.Z, { editorState: h, onChange: Z }) : null), [h, d, Z]),
                        A = s.useCallback(
                            () => (e) =>
                                s.createElement(oe.b, {
                                    emojiPickerButton: M,
                                    inputStyle: ve.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), Z(t);
                                    },
                                    richTextInputContext: w,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, ke.bb)(ke.K),
                                    toolbarRightControl: R,
                                }),
                            [Z, M, w, R],
                        );
                    return s.createElement(l.Z, null, p ? s.createElement(l.Z, { style: ve.error }, s.createElement(O.Z.Danger, { text: p, withIcon: !0 })) : null, s.createElement(se.Z, { fallbackBackPath: "/", history: m, onNavigation: y, shouldBlockNavigation: E, shouldBlockUnload: g }, s.createElement(ue.Z, { className: ke.Hx }, s.createElement(fe.Z, { contextText: (0, pe.iT)(h), isInline: !0, onTextUpdated: Z, onTypeaheadStateChange: ie.Z, source: ge._4.LongformComposer }, A()))), s.createElement(l.Z, { style: L }, s.createElement(Ee.Z, { blockId: t, characterCount: v, disabled: k || !g || !T || v > x.j3, editorState: h, onSave: o, queryId: n, setDirty: C, setError: f, setSaving: _, userId: u })), c && t ? s.createElement(de.Z, { blockId: t, headline: ye, onClose: a, onCompleted: I, queryId: n, subtext: xe, userId: u }) : null);
                }),
                Te = f().a765e936,
                Ze = f().d4d68e44,
                we = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: a, refetch: r, viewerUser: o }) => {
                    const i = (0, y.p)(),
                        [m, p] = s.useState(!1),
                        f = c()(I.m1, n),
                        E = f?.items?.find((e) => e?.block_type === x.Mp.RICHTEXT),
                        v = E?.data?.value,
                        S = E?.block_id,
                        T = s.useCallback(() => {
                            p(!1);
                        }, []),
                        Z = s.useCallback(
                            (e) => [
                                {
                                    text: Te,
                                    Icon: h.default,
                                    disabled: !S,
                                    onClick: () => {
                                        p(!0), e();
                                    },
                                },
                            ],
                            [S],
                        ),
                        w = s.useCallback((e) => s.createElement(u.Z, { cancelButtonLabel: "Cancel", items: Z(e), onCloseRequested: e }), [Z]);
                    return o
                        ? s.createElement(C.Z, {
                              backLocation: `/${o.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!o || !f) return null;
                                  if (!e) return s.createElement(l.Z, { style: Re.root }, s.createElement(X, { queryId: a }));
                                  return s.createElement(
                                      l.Z,
                                      { style: Re.root },
                                      s.createElement(Se, {
                                          blockId: S,
                                          blocksQueryId: a,
                                          closeConfirm: T,
                                          initialState: v,
                                          onSave: () => {
                                              i({ text: Ze }), t.push(`/${o.screen_name}/bio`);
                                          },
                                          refetch: r,
                                          showConfirmDelete: m,
                                          userId: o.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? s.createElement(l.Z, null, s.createElement(d.Z, { Icon: b.default, renderActionMenu: w })) : null,
                              sidebarContent: s.createElement(k.Z, null),
                              subtitle: `@${o.screen_name}`,
                              title: (0, _.Z)(o),
                              titleIconCell: (0, g.Z)(o),
                          })
                        : null;
                },
                Re = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                De = (e) => {
                    const { data: t, refetch: n } = (0, v.A)(I.vF, {}),
                        a = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        r = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !a) return null;
                    const l = r ? a.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return s.createElement(we, (0, o.Z)({ hasConsented: r, profileBlocksRef: a, queryId: l, refetch: n }, e));
                },
                Le = { context: "EXTENDED_PROFILE_SETTINGS" },
                Be = (0, S.Z)((e) => s.createElement(E.H, { errorConfig: Le }, s.createElement(De, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                s = n(190286);
            const l = o().b15c0a18,
                i = o().aebf81c8,
                c = o().aa744c1e,
                u = o().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: n, history: r, onNavigation: o, shouldBlockNavigation: d, shouldBlockUnload: m } = e,
                        [p, f] = a.useState(void 0);
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
                    const h = a.useCallback((e, t) => !(!p && d(e, t)) || (f({ nextLocation: e, action: t }), !1), [p, d]);
                    a.useEffect(() => {
                        const e = r.block(h);
                        return () => e();
                    }, [h, r]);
                    const b = a.useCallback(() => {
                            f(void 0);
                        }, [f]),
                        k = a.useCallback(() => {
                            o?.(),
                                f((e) => {
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
                    return a.createElement(a.Fragment, null, t, p ? a.createElement(s.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: l, onCancel: b, onConfirm: k, text: i }) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.821aabea.js.map
