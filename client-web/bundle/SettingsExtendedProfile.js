"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile"],
    {
        681488: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a,
                o,
                r,
                i,
                s,
                l = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (o = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [a, i, o, r], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            l.hash = "5369f2707d565366752d07f461b21f70";
            const c = l;
        },
        163956: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a,
                o,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (o = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: o },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            r.hash = "96b616d665932ca695bc2d75fe26a33c";
            const i = r;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var a = n(202784),
                o = n(614983),
                r = n.n(o),
                i = n(325686),
                s = n(370006),
                l = n(786998),
                c = n(929028),
                u = n(386802);
            function d(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: o, hideBackButton: r, isFullWidth: i, isLarge: c, leftControl: u, middleControl: p, position: m, rightControl: h, secondaryBar: f, style: b, subtitle: k, title: g, titleDomId: C, titleIconCell: _, titleIconCellSize: y, withBackground: E, withWideContainer: x } = this.props,
                        { isModal: I } = this.context,
                        v = r ? u : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        S = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!E, I, !!f);
                    return a.createElement(a.Fragment, null, a.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: c, leftControl: v, middleControl: p, position: d(m, I, o), rightControl: h, style: b, subtitle: k, title: g, titleDomId: C, titleIconCell: _, titleIconCellSize: y, withBackground: S, withWideContainer: x }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? a.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = u.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                o = n(925873),
                r = n(392237),
                i = n(913670);
            const s = r.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                l = ({ editorState: e, onChange: t }) => {
                    const n = a.useCallback(
                        (n) => {
                            const a = o.Z.insertTextAtCursor(e, n.text);
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
                o = n(301503),
                r = n(597496),
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
                            const { children: e, composeCommunityId: t, contextText: n, isInline: o, isInlineReply: s, onTypeaheadStateChange: l, source: c } = this.props,
                                { canShowTypeahead: u, queryContext: d } = this.state,
                                p = u && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return a.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: o, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: p, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
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
                                    { end: o, start: r, word: i } = s.si(this._getCaret(e), a),
                                    l = s.bR(i || "", "compose");
                                if (l?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === r)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: n } = l;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: r, endIndex: o });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: a, startIndex: r } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                        s = o.Modifier.replaceText(n.getCurrentContent(), i, e),
                        l = o.EditorState.push(n, s, "insert-characters"),
                        c = r + e.length,
                        u = l.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return o.EditorState.forceSelection(l, u);
                }
            }
            const d = u;
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(500002),
                r = n(668214),
                i = n(997174),
                s = n(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = o || s;
                    ((c && o !== s) || (!c && n !== r) || a !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const u = (0, o.ZP)(l(c));
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => a, _e: () => r, iN: () => c, kd: () => s, pc: () => o });
            const a = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                o = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                r = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                l = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: l.DRAFT, PUBLISHED: l.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => m });
            var a = n(202784),
                o = n(437429),
                r = n.n(o),
                i = n(57074),
                s = n.n(i),
                l = n(10622),
                c = n.n(l),
                u = n(71620),
                d = n(312771),
                p = n(535338);
            function m(e, t, n) {
                const o = s()(t),
                    i = s()(n),
                    l = r()(),
                    m = (0, u.po)(),
                    [h, f] = a.useState(null),
                    [b, k] = a.useState(!1),
                    g = a.useCallback(() => {
                        b ||
                            (k(!0),
                            c()(l, e, o, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    k(!1);
                                },
                                error: (e) => {
                                    m(e), k(!1), f(e);
                                },
                            }));
                    }, [l, m, e, b, o, i]),
                    C = (0, p.p)(e, t, n);
                return a.useMemo(() => (h ? { data: C, refetch: g, refetchStatus: d.ZP.FAILED, refetchError: h } : { data: C, refetch: g, refetchStatus: b ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [C, h, b, g]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(202784),
                o = n(301503),
                r = n(614983),
                i = n.n(r),
                s = n(154003),
                l = n(111677),
                c = n.n(l),
                u = n(952793),
                d = n(72130),
                p = n(520385),
                m = n(725405),
                h = n(681488),
                f = (n(585488), n(351743)),
                b = n.n(f);
            const k = h.Z,
                g = () => {
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
            const C = n(163956).Z,
                _ = () => {
                    const [e, t] = b()(C);
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
                E = c().i2209530,
                x = ({ blockId: e, characterCount: t, disabled: n, editorState: r, onSave: l, queryId: c, sectionId: h, sectionType: f, setDirty: b, setError: k, setSaving: C, userId: x }) => {
                    const I = (0, u.hC)("xprofile_work_history_enabled"),
                        v = (0, m.Z)(),
                        [S] = g(),
                        [T] = _(),
                        Z = a.useCallback(() => {
                            C(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(t, "error", { version: I ? 2 : 1 }) });
                        }, [v, e, I, C]),
                        w = a.useCallback(() => {
                            b(!1), C(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(t, "success", { version: I ? 2 : 1 }) }), l();
                        }, [v, e, I, l, b, C]),
                        B = a.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, o.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(r);
                            if (!n) return;
                            if (t > p.j3) return void k(y);
                            C(!0);
                            const a = e ? "update_block_btn" : "save_block_btn";
                            v.scribe({ ...(0, d.MA)(a, "click", {}) }),
                                e && x
                                    ? T({
                                          variables: { richtextValue: n, blockId: e, userId: x },
                                          onCompleted: w,
                                          onError: Z,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
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
                        }, [r, t, C, e, v, k, T, x, w, Z, c, I, S, h, f]);
                    return a.createElement(s.ZP, { disabled: n, onClick: B, size: "large", type: "brandFilled" }, E);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var a = n(202784),
                o = n(301503),
                r = n(925873),
                i = n(989272),
                s = n(977952),
                l = n(297256),
                c = n(392237),
                u = n(187669),
                d = n(949626),
                p = n(980407),
                m = n(478414);
            const h = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = r.Z.initEditorState(t);
                    return r.Z.convertEmojiToEntities(n);
                },
                f = () => null,
                b = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                k = ({ history: e }) => {
                    const [t, n] = a.useState(h(window?.__iOSDraftAdapterInitialContents__));
                    (0, u.q)(() => {
                        (0, i.fH)((0, m.yW)(m.kg, m.gv), m.kg);
                    }),
                        a.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = a.useMemo(() => ({ editorState: t, element: s.Z, stripPastedStyles: !0 }), [t]),
                        k = a.useCallback((e) => {
                            const t = r.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        g = a.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, o.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        C = a.useCallback((e) => {
                            n(h(e));
                        }, []);
                    a.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: g, __setContents__: C }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [g, C],
                    );
                    const _ = a.useMemo(() => a.createElement(d.Z, { className: m.kg }, a.createElement(l.b, { autoFocus: !0, inputStyle: b.container, isInputFullWidth: !0, onChange: k, richTextInputContext: c, textSizesOverride: (0, m.bb)(m.gv), withAppBar: !1 })), [k, c]);
                    return a.createElement(p.Z, { children: _, hideBackButton: !0, history: e, renderHeader: f });
                };
        },
        600193: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(668214),
                o = n(919022);
            const r = (0, a.Z)()
                .propsFromState(() => ({ viewerUser: o.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        992915: (e, t, n) => {
            n.r(t), n.d(t, { default: () => De });
            var a,
                o,
                r = n(807896),
                i = (n(136728), n(202784)),
                s = n(325686),
                l = n(277660),
                c = n.n(l),
                u = n(811176),
                d = n(247056),
                p = n(392237),
                m = n(111677),
                h = n.n(m),
                f = n(607127),
                b = n(149170),
                k = n(718e3),
                g = n(785813),
                C = n(825495),
                _ = n(252021),
                y = n(736063),
                E = n(782642),
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
                        selections: (o = [
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "ConsentScreen_xprofileMutation", selections: o },
                    params: { id: "4RvEtxr03YPi6jxZZ_PkoQ", metadata: {}, name: "ConsentScreen_xprofileMutation", operationKind: "mutation", text: null },
                };
            T.hash = "aa72fdb65006a205db978375998ebfe6";
            const Z = T;
            var w = n(614983),
                B = n.n(w),
                R = (n(585488), n(351743)),
                L = n.n(R),
                D = n(731708),
                M = n(593866),
                P = n(154003),
                A = n(40610),
                O = n(715417);
            const F = Z,
                V = h().h367e724,
                N = h().ea5928d4,
                U = h().h7ef9dc8,
                W = h().c04ba4b4,
                q = h().d7666008,
                z = h().cb24ee16,
                H = h().c3d89aca,
                K = h().a1c93d74,
                j = p.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                G = i.createElement(O.default, { style: j.icon }),
                Q = ({ queryId: e }) => {
                    const [t, n] = i.useState(""),
                        a = i.useMemo(
                            () => [
                                { label: W, decoration: G },
                                { label: q, decoration: G },
                                { label: z, decoration: G },
                            ],
                            [],
                        ),
                        [o, r] = L()(F),
                        l = i.useCallback(() => {
                            n(""),
                                o({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(K);
                                    },
                                    onError: (e) => {
                                        n(K);
                                    },
                                    updater: (t, n) => {
                                        B()(e, "userId must be specified");
                                        const a = t.get(e);
                                        a && n?.update_xprofile_consent?.success && a.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [o, e]);
                    return i.createElement(s.Z, { style: j.consentRoot }, i.createElement(D.ZP, { size: "title3", weight: "bold" }, V), i.createElement(D.ZP, { size: "body" }, N), i.createElement(D.ZP, { weight: "bold" }, U), i.createElement(M.Z, { items: a }), i.createElement(P.ZP, { disabled: r, onClick: l, size: "large", type: "brandFilled" }, H), t ? i.createElement(A.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                X = i.memo(Q);
            var $ = n(301503),
                J = n(107267),
                Y = n(925873),
                ee = n(989272),
                te = n(891198),
                ne = n(977952),
                ae = n(167630),
                oe = n(67369),
                re = n(297256),
                ie = n(751475),
                se = n(908478),
                le = n(516951),
                ce = n(187669),
                ue = n(949626),
                de = n(512547),
                pe = n(313433),
                me = n(874111),
                he = n(536790),
                fe = n(952793),
                be = n(655352),
                ke = n(478414),
                ge = n(72130),
                Ce = n(339110),
                _e = n(725516),
                ye = n(242470);
            const Ee = h().b956c04a,
                xe = h().ifb23caa,
                Ie = h().c2333081,
                ve = p.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Se = (0, _e.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: a, initialState: o = "", onSave: r, refetch: l, showConfirmDelete: c, userId: u }) => {
                    const d = (0, fe.hC)("xprofile_emojis_enabled"),
                        p = (0, J.useHistory)(),
                        [m, h] = i.useState(""),
                        [f, b] = i.useState(
                            ((e) => {
                                const t = Y.Z.getContentStateFromRaw(e),
                                    n = Y.Z.initEditorState(t);
                                return Y.Z.convertEmojiToEntities(n);
                            })(o),
                        ),
                        [k, g] = i.useState(!1),
                        [C, _] = i.useState(!1),
                        y = i.useCallback((e, t) => C && !k, [C, k]),
                        E = i.useCallback(() => {
                            _(!1), g(!1);
                        }, []);
                    (0, ce.q)(() => {
                        (0, ee.fH)((0, ke.yW)(ke.Hx, ke.K), ke.Hx);
                    });
                    const I = i.useCallback(() => {
                            a(), _(!1), g(!1), e.scribe({ ...(0, ge.MA)("delete_block_btn", "success") }), b(Y.Z.initEditorState("")), l();
                        }, [e, a, l]),
                        v = (0, me.c6)(f);
                    let S = v;
                    v > 1 && (S = te.ZP.getFormattedCount(v));
                    const T = i.useMemo(() => f?.getCurrentContent()?.hasText(), [f]),
                        Z = i.useCallback(
                            (e) => {
                                const t = Y.Z.convertMentionsToEntities(Y.Z.convertEmojiToEntities(e));
                                C || (0, se.Z)((0, $.convertToRaw)(t.getCurrentContent()), (0, $.convertToRaw)(f.getCurrentContent())) || _(!0), b(t);
                            },
                            [f, C],
                        ),
                        w = i.useMemo(() => ({ editorState: f, element: ne.Z, stripPastedStyles: !0 }), [f]),
                        B = i.useMemo(() => {
                            if (k) return i.createElement(s.Z, { style: ve.flexRow }, i.createElement(ae.Z, { size: "small" }), i.createElement(D.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!x.j3 && v > x.j3;
                            return i.createElement(s.Z, null, i.createElement(D.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: ve.textCountLabel }, Ie({ count: S })));
                        }, [v, S, k]),
                        R = (0, oe.Zz)(),
                        L = i.useMemo(() => {
                            const e = [ve.stickyButton];
                            return R && !(0, be.ZP)() ? e.push(ve.mobileButton) : e.push(ve.desktopButton), e;
                        }, [R]),
                        M = i.useCallback(() => (d ? i.createElement(pe.Z, { editorState: f, onChange: Z }) : null), [f, d, Z]),
                        P = i.useCallback(
                            () => (e) =>
                                i.createElement(re.b, {
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
                                    toolbarRightControl: B,
                                }),
                            [Z, M, w, B],
                        );
                    return i.createElement(s.Z, null, m ? i.createElement(s.Z, { style: ve.error }, i.createElement(A.Z.Danger, { text: m, withIcon: !0 })) : null, i.createElement(ie.Z, { fallbackBackPath: "/", history: p, onNavigation: E, shouldBlockNavigation: y, shouldBlockUnload: C }, i.createElement(ue.Z, { className: ke.Hx }, i.createElement(he.Z, { contextText: (0, me.iT)(f), isInline: !0, onTextUpdated: Z, onTypeaheadStateChange: le.Z, source: Ce._4.LongformComposer }, P()))), i.createElement(s.Z, { style: L }, i.createElement(ye.Z, { blockId: t, characterCount: v, disabled: k || !C || !T || v > x.j3, editorState: f, onSave: r, queryId: n, setDirty: _, setError: h, setSaving: g, userId: u })), c && t ? i.createElement(de.Z, { blockId: t, headline: Ee, onClose: a, onCompleted: I, queryId: n, subtext: xe, userId: u }) : null);
                }),
                Te = h().a765e936,
                Ze = h().d4d68e44,
                we = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: a, refetch: o, viewerUser: r }) => {
                    const l = (0, E.p)(),
                        [p, m] = i.useState(!1),
                        h = c()(I.m1, n),
                        y = h?.items?.find((e) => e?.block_type === x.Mp.RICHTEXT),
                        v = y?.data?.value,
                        S = y?.block_id,
                        T = i.useCallback(() => {
                            m(!1);
                        }, []),
                        Z = i.useCallback(
                            (e) => [
                                {
                                    text: Te,
                                    Icon: f.default,
                                    disabled: !S,
                                    onClick: () => {
                                        m(!0), e();
                                    },
                                },
                            ],
                            [S],
                        ),
                        w = i.useCallback((e) => i.createElement(u.Z, { cancelButtonLabel: "Cancel", items: Z(e), onCloseRequested: e }), [Z]);
                    return r
                        ? i.createElement(_.Z, {
                              backLocation: `/${r.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!r || !h) return null;
                                  if (!e) return i.createElement(s.Z, { style: Be.root }, i.createElement(X, { queryId: a }));
                                  return i.createElement(
                                      s.Z,
                                      { style: Be.root },
                                      i.createElement(Se, {
                                          blockId: S,
                                          blocksQueryId: a,
                                          closeConfirm: T,
                                          initialState: v,
                                          onSave: () => {
                                              l({ text: Ze }), t.push(`/${r.screen_name}/bio`);
                                          },
                                          refetch: o,
                                          showConfirmDelete: p,
                                          userId: r.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? i.createElement(s.Z, null, i.createElement(d.Z, { Icon: b.default, renderActionMenu: w })) : null,
                              sidebarContent: i.createElement(k.Z, null),
                              subtitle: `@${r.screen_name}`,
                              title: (0, g.Z)(r),
                              titleIconCell: (0, C.Z)(r),
                          })
                        : null;
                },
                Be = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                Re = (e) => {
                    const { data: t, refetch: n } = (0, v.A)(I.vF, {}),
                        a = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        o = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !a) return null;
                    const s = o ? a.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return i.createElement(we, (0, r.Z)({ hasConsented: o, profileBlocksRef: a, queryId: s, refetch: n }, e));
                },
                Le = { context: "EXTENDED_PROFILE_SETTINGS" },
                De = (0, S.Z)((e) => i.createElement(y.H, { errorConfig: Le }, i.createElement(Re, e)));
        },
        751475: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                o = n(111677),
                r = n.n(o),
                i = n(190286);
            const s = r().b15c0a18,
                l = r().aebf81c8,
                c = r().aa744c1e,
                u = r().fe04d89a,
                d = (e) => {
                    const { children: t, fallbackBackPath: n, history: o, onNavigation: r, shouldBlockNavigation: d, shouldBlockUnload: p } = e,
                        [m, h] = a.useState(void 0);
                    a.useEffect(() => {
                        const e = (e) => {
                            p && (e.preventDefault(), (e.returnValue = ""));
                        };
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [p]);
                    const f = a.useCallback((e, t) => !(!m && d(e, t)) || (h({ nextLocation: e, action: t }), !1), [m, d]);
                    a.useEffect(() => {
                        const e = o.block(f);
                        return () => e();
                    }, [f, o]);
                    const b = a.useCallback(() => {
                            h(void 0);
                        }, [h]),
                        k = a.useCallback(() => {
                            r?.(),
                                h((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: a } = e;
                                    switch (t) {
                                        case "PUSH":
                                            o.push(a);
                                            break;
                                        case "REPLACE":
                                            o.replace(a);
                                            break;
                                        case "POP":
                                            o.goBackThroughModals({ fallbackPath: n });
                                    }
                                });
                        }, [n, o, r]);
                    return a.createElement(a.Fragment, null, t, m ? a.createElement(i.Z, { cancelButtonLabel: c, confirmButtonLabel: u, confirmButtonType: "destructiveFilled", headline: s, onCancel: b, onConfirm: k, text: l }) : null);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile.abc9243a.js.map
