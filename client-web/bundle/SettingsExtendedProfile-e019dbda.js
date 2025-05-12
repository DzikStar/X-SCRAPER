"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsExtendedProfile-e019dbda"],
    {
        949626: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            var o = n(950822);
            const r = (e) => (0, o.Z)("div", e);
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(190286),
                a = n(674132),
                i = n.n(a),
                l = n(782642),
                s = n(72130),
                c = n(725516),
                d = n(876242),
                u = (n(585488), n(351743)),
                m = n.n(u);
            const f = d.Z,
                p = () => {
                    const [e, t] = m()(f);
                    return [
                        o.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                h = i().g9677c6e,
                b = i().a2b8c54c,
                g = ({ blockId: e, headline: t, onClose: n, onCompleted: a, queryId: i, subtext: d, userId: u }) => {
                    const m = (0, l.p)(),
                        f = (0, c.z)(),
                        [g, _] = p(),
                        C = o.useCallback(() => {
                            n();
                        }, [n]),
                        y = o.useCallback(() => {
                            f.scribe({ ...(0, s.MA)("delete_block_btn", "click") }),
                                g({
                                    variables: { blockId: e, userId: u },
                                    updater: (e, t) => {
                                        i && e.delete(i);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: b }), n(), a && a());
                                    },
                                });
                        }, [m, f, e, g, n, a, i, u]);
                    return o.createElement(r.Z, { confirmButtonDisabled: _, confirmButtonLabel: h, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: C, onConfirm: y, text: d });
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(366635);
            const a = (e) => (e ? o.createElement(r.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(823161);
            const a = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return o.createElement(r.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        313433: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(925873),
                a = n(392237),
                i = n(913670);
            const l = a.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                s = ({ editorState: e, onChange: t }) => {
                    const n = o.useCallback(
                        (n) => {
                            const o = r.Z.insertTextAtCursor(e, n.text);
                            t(o);
                        },
                        [e, t],
                    );
                    return o.createElement(i.Z, { iconStyle: l.iconGray, key: "emoji-picker", onEmojiSelect: n, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(571372), n(136728);
            var o = n(202784),
                r = n(301503),
                a = n(597496),
                i = n(339110),
                l = n(456910),
                s = n(230295),
                c = n(267446);
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = o.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: r, isInlineReply: l, onTypeaheadStateChange: s, source: c } = this.props,
                                { canShowTypeahead: d, queryContext: u } = this.state,
                                m = d && u ? { word: u.word, resultType: u.resultType } : void 0;
                            return o.createElement(a.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: l, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: s, query: m, ref: this._genericWrapperRef, source: c || i._4.Compose }, e(this._handleInputChange));
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
                                const o = (0, c.k)(e, n.resultType);
                                t(this._replaceToken(o, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, s.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    o = this._getPlaintextFromCurrentBlock(e),
                                    { end: r, start: a, word: i } = l.si(this._getCaret(e), o),
                                    s = l.bR(i || "", "compose");
                                if (s?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === a)) this._setQueryContext(void 0);
                                else if (s) {
                                    const { q: t, result_type: n } = s;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: a, endIndex: r });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: o, startIndex: a } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: a, focusOffset: o }),
                        l = r.Modifier.replaceText(n.getCurrentContent(), i, e),
                        s = r.EditorState.push(n, l, "insert-characters"),
                        c = a + e.length,
                        d = s.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return r.EditorState.forceSelection(s, d);
                }
            }
            const u = d;
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => s, K: () => a, bb: () => l, gv: () => i, kg: () => c, yW: () => d });
            var o = n(779802),
                r = n(392237);
            const a = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                i = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                l = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: t, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: n, children: o.$u }) },
                ],
                s = "extended-profile",
                c = "extended-profile-mobile-webview",
                d = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[n]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => l, MA: () => i, Rz: () => o, Zi: () => a, he: () => r });
            const o = () => ({ component: "extended_profile_settings", action: "click" }),
                r = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                a = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                i = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                l = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => r, NB: () => a, P2: () => i, j3: () => o, pR: () => l });
            const o = 5e4,
                r = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                a = (r.RICHTEXT, r.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: a.ABOUT, work_experience: a.WORK_EXPERIENCE },
                l = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        666259: (e, t, n) => {
            n.d(t, { kI: () => s, m1: () => i, vF: () => l });
            n(523841);
            var o = n(796627),
                r = n(579724),
                a = n(899212);
            n(585488);
            const i = a.Z,
                l = r.Z,
                s = o.Z;
        },
        794057: (e, t, n) => {
            n.d(t, { C0: () => i, DC: () => o, _e: () => a, iN: () => c, kd: () => l, pc: () => r });
            const o = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                r = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                a = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                i = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                l = { content_state: { blocks: [], entity_map: [] } },
                s = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                c = Object.freeze({ DRAFT: s.DRAFT, PUBLISHED: s.PUBLISHED });
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => f });
            var o = n(202784),
                r = n(437429),
                a = n.n(r),
                i = n(57074),
                l = n.n(i),
                s = n(10622),
                c = n.n(s),
                d = n(71620),
                u = n(312771),
                m = n(535338);
            function f(e, t, n) {
                const r = l()(t),
                    i = l()(n),
                    s = a()(),
                    f = (0, d.po)(),
                    [p, h] = o.useState(null),
                    [b, g] = o.useState(!1),
                    _ = o.useCallback(() => {
                        b ||
                            (g(!0),
                            c()(s, e, r, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    g(!1);
                                },
                                error: (e) => {
                                    f(e), g(!1), h(e);
                                },
                            }));
                    }, [s, f, e, b, r, i]),
                    C = (0, m.p)(e, t, n);
                return o.useMemo(() => (p ? { data: C, refetch: _, refetchStatus: u.ZP.FAILED, refetchError: p } : { data: C, refetch: _, refetchStatus: b ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [C, p, b, _]);
            }
        },
        242470: (e, t, n) => {
            n.d(t, { Z: () => S });
            var o = n(202784),
                r = n(301503),
                a = n(614983),
                i = n.n(a),
                l = n(154003),
                s = n(674132),
                c = n.n(s),
                d = n(952793),
                u = n(72130),
                m = n(520385),
                f = n(725405),
                p = n(681488),
                h = (n(585488), n(351743)),
                b = n.n(h);
            const g = p.Z,
                _ = () => {
                    const [e, t] = b()(g);
                    return [
                        o.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                };
            const C = n(163956).Z,
                y = () => {
                    const [e, t] = b()(C);
                    return [
                        o.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                E = c().a9cc8f96,
                k = c().i2209530,
                S = ({ blockId: e, characterCount: t, disabled: n, editorState: a, onSave: s, queryId: c, sectionId: p, sectionType: h, setDirty: b, setError: g, setSaving: C, userId: S }) => {
                    const x = (0, d.hC)("xprofile_work_history_enabled"),
                        I = (0, f.Z)(),
                        [T] = _(),
                        [w] = y(),
                        v = o.useCallback(() => {
                            C(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, u.MA)(t, "error", { version: x ? 2 : 1 }) });
                        }, [I, e, x, C]),
                        Z = o.useCallback(() => {
                            b(!1), C(!1);
                            const t = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, u.MA)(t, "success", { version: x ? 2 : 1 }) }), s();
                        }, [I, e, x, s, b, C]),
                        $ = o.useCallback(() => {
                            const n = ((e) => {
                                if (!e) return;
                                const t = e.getCurrentContent(),
                                    n = (0, r.convertToRaw)(t);
                                return JSON.stringify(n);
                            })(a);
                            if (!n) return;
                            if (t > m.j3) return void g(E);
                            C(!0);
                            const o = e ? "update_block_btn" : "save_block_btn";
                            I.scribe({ ...(0, u.MA)(o, "click", {}) }),
                                e && S
                                    ? w({
                                          variables: { richtextValue: n, blockId: e, userId: S },
                                          onCompleted: Z,
                                          onError: v,
                                          updater: (e, t) => {
                                              if ((i()(c, "queryId must exist"), t?.update_richtext_profile_block?.success))
                                                  if (x) {
                                                      const t = e.get(`client:${c}:content`);
                                                      t && t.setValue(n, "value");
                                                  } else {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                          },
                                      })
                                    : S &&
                                      T(
                                          {
                                              variables: { richtextValue: n, userId: S, sectionId: p, sectionType: h },
                                              onCompleted: Z,
                                              updater: (e, t) => {
                                                  if ((i()(c, "queryId must exist"), t?.create_richtext_profile_block?.block_id)) {
                                                      const t = e.get(c);
                                                      t && t.invalidateRecord();
                                                  }
                                              },
                                          },
                                          c,
                                      );
                        }, [a, t, C, e, I, g, w, S, Z, v, c, x, T, p, h]);
                    return o.createElement(l.ZP, { disabled: n, onClick: $, size: "large", type: "brandFilled" }, k);
                };
        },
        371879: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var o = n(202784),
                r = n(301503),
                a = n(925873),
                i = n(989272),
                l = n(977952),
                s = n(297256),
                c = n(392237),
                d = n(187669),
                u = n(949626),
                m = n(980407),
                f = n(478414);
            const p = (e) => {
                    const t = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        n = a.Z.initEditorState(t);
                    return a.Z.convertEmojiToEntities(n);
                },
                h = () => null,
                b = c.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 } })),
                g = ({ history: e }) => {
                    const [t, n] = o.useState(p(window?.__iOSDraftAdapterInitialContents__));
                    (0, d.q)(() => {
                        (0, i.fH)((0, f.yW)(f.kg, f.gv), f.kg);
                    }),
                        o.useEffect(() => {
                            const e = window.webkit?.messageHandlers?.draftEditorReady;
                            e && e.postMessage(!0);
                        }, []);
                    const c = o.useMemo(() => ({ editorState: t, element: l.Z, stripPastedStyles: !0 }), [t]),
                        g = o.useCallback((e) => {
                            const t = a.Z.convertEmojiToEntities(e);
                            n(t);
                        }, []),
                        _ = o.useCallback(
                            () =>
                                ((e) => {
                                    if (!e) return;
                                    const t = e.getCurrentContent(),
                                        n = (0, r.convertToRaw)(t);
                                    return JSON.stringify(n);
                                })(t),
                            [t],
                        ),
                        C = o.useCallback((e) => {
                            n(p(e));
                        }, []);
                    o.useEffect(
                        () => (
                            (window.__iOSDraftAdapter__ = { __getContents__: _, __setContents__: C }),
                            () => {
                                delete window.__iOSDraftAdapter__;
                            }
                        ),
                        [_, C],
                    );
                    const y = o.useMemo(() => o.createElement(u.Z, { className: f.kg }, o.createElement(s.b, { autoFocus: !0, inputStyle: b.container, isInputFullWidth: !0, onChange: g, richTextInputContext: c, textSizesOverride: (0, f.bb)(f.gv), withAppBar: !1 })), [g, c]);
                    return o.createElement(m.Z, { children: y, hideBackButton: !0, history: e, renderHeader: h });
                };
        },
        600193: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(668214),
                r = n(919022);
            const a = (0, o.Z)()
                .propsFromState(() => ({ viewerUser: r.ZP.selectViewerUser }))
                .withAnalytics({ page: "settings", section: "extendedprofile" });
        },
        349566: (e, t, n) => {
            n.r(t), n.d(t, { default: () => $e });
            var o = n(807896),
                r = (n(136728), n(202784)),
                a = n(325686),
                i = n(277660),
                l = n.n(i),
                s = n(811176),
                c = n(247056),
                d = n(392237),
                u = n(674132),
                m = n.n(u),
                f = n(607127),
                p = n(149170),
                h = n(718e3),
                b = n(785813),
                g = n(825495),
                _ = n(252021),
                C = n(736063),
                y = n(782642),
                E = n(520385),
                k = n(666259),
                S = n(482924),
                x = n(600193),
                I = n(491939),
                T = n(614983),
                w = n.n(T),
                v = (n(585488), n(351743)),
                Z = n.n(v),
                $ = n(731708),
                D = n(593866),
                R = n(154003),
                z = n(40610),
                O = n(715417);
            const A = I.Z,
                P = m().h367e724,
                B = m().ea5928d4,
                F = m().h7ef9dc8,
                M = m().c04ba4b4,
                L = m().d7666008,
                W = m().cb24ee16,
                q = m().c3d89aca,
                H = m().a1c93d74,
                j = d.default.create((e) => ({ consentRoot: { maxWidth: `calc(6 * ${e.spaces.space80})`, paddingHorizontal: e.spaces.space20, marginVertical: e.spaces.space32, marginHorizontal: "auto", alignSelf: "center", width: "100%", gap: e.spaces.space20 }, icon: { height: e.spaces.space20, width: e.spaces.space20, color: e.colors.text, marginEnd: e.spaces.space16 } })),
                N = r.createElement(O.default, { style: j.icon }),
                U = ({ queryId: e }) => {
                    const [t, n] = r.useState(""),
                        o = r.useMemo(
                            () => [
                                { label: M, decoration: N },
                                { label: L, decoration: N },
                                { label: W, decoration: N },
                            ],
                            [],
                        ),
                        [i, l] = Z()(A),
                        s = r.useCallback(() => {
                            n(""),
                                i({
                                    variables: { consented: !0 },
                                    onCompleted: (e) => {
                                        e?.update_xprofile_consent?.success || n(H);
                                    },
                                    onError: (e) => {
                                        n(H);
                                    },
                                    updater: (t, n) => {
                                        w()(e, "userId must be specified");
                                        const o = t.get(e);
                                        o && n?.update_xprofile_consent?.success && o.setValue(!0, "has_xprofile_consent");
                                    },
                                });
                        }, [i, e]);
                    return r.createElement(a.Z, { style: j.consentRoot }, r.createElement($.ZP, { size: "title3", weight: "bold" }, P), r.createElement($.ZP, { size: "body" }, B), r.createElement($.ZP, { weight: "bold" }, F), r.createElement(D.Z, { items: o }), r.createElement(R.ZP, { disabled: l, onClick: s, size: "large", type: "brandFilled" }, q), t ? r.createElement(z.Z.Danger, { text: t, withIcon: !0 }) : null);
                },
                V = r.memo(U);
            var K = n(301503),
                G = n(107267),
                X = n(925873),
                Q = n(989272),
                J = n(891198),
                Y = n(977952),
                ee = n(167630),
                te = n(67369),
                ne = n(297256),
                oe = n(751475),
                re = n(908478),
                ae = n(516951),
                ie = n(187669),
                le = n(949626),
                se = n(512547),
                ce = n(313433),
                de = n(874111),
                ue = n(536790),
                me = n(952793),
                fe = n(655352),
                pe = n(478414),
                he = n(72130),
                be = n(339110),
                ge = n(725516),
                _e = n(242470);
            const Ce = m().b956c04a,
                ye = m().ifb23caa,
                Ee = m().c2333081,
                ke = d.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, flexRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, stickyButton: { position: "sticky", start: 0, end: 0, padding: e.spaces.space16 }, desktopButton: { bottom: 0 }, mobileButton: { bottom: e.componentDimensions.appBarHeight }, v2Button: { padding: e.spaces.space16, justifyContent: "space-between", bottom: 0 }, error: { padding: e.spaces.space16 }, textCountLabel: { flexDirection: "row", alignSelf: "center" } })),
                Se = (0, ge.Z)(({ analytics: e, blockId: t, blocksQueryId: n, closeConfirm: o, initialState: i = "", onSave: l, refetch: s, showConfirmDelete: c, userId: d }) => {
                    const u = (0, me.hC)("xprofile_emojis_enabled"),
                        m = (0, G.useHistory)(),
                        [f, p] = r.useState(""),
                        [h, b] = r.useState(
                            ((e) => {
                                const t = X.Z.getContentStateFromRaw(e),
                                    n = X.Z.initEditorState(t);
                                return X.Z.convertEmojiToEntities(n);
                            })(i),
                        ),
                        [g, _] = r.useState(!1),
                        [C, y] = r.useState(!1),
                        k = r.useCallback((e, t) => C && !g, [C, g]),
                        S = r.useCallback(() => {
                            y(!1), _(!1);
                        }, []);
                    (0, ie.q)(() => {
                        (0, Q.fH)((0, pe.yW)(pe.Hx, pe.K), pe.Hx);
                    });
                    const x = r.useCallback(() => {
                            o(), y(!1), _(!1), e.scribe({ ...(0, he.MA)("delete_block_btn", "success") }), b(X.Z.initEditorState("")), s();
                        }, [e, o, s]),
                        I = (0, de.c6)(h);
                    let T = I;
                    I > 1 && (T = J.ZP.getFormattedCount(I));
                    const w = r.useMemo(() => h?.getCurrentContent()?.hasText(), [h]),
                        v = r.useCallback(
                            (e) => {
                                const t = X.Z.convertMentionsToEntities(X.Z.convertEmojiToEntities(e));
                                C || (0, re.Z)((0, K.convertToRaw)(t.getCurrentContent()), (0, K.convertToRaw)(h.getCurrentContent())) || y(!0), b(t);
                            },
                            [h, C],
                        ),
                        Z = r.useMemo(() => ({ editorState: h, element: Y.Z, stripPastedStyles: !0 }), [h]),
                        D = r.useMemo(() => {
                            if (g) return r.createElement(a.Z, { style: ke.flexRow }, r.createElement(ee.Z, { size: "small" }), r.createElement($.ZP, { size: "subtext1" }, "Saving"));
                            const e = !!E.j3 && I > E.j3;
                            return r.createElement(a.Z, null, r.createElement($.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: ke.textCountLabel }, Ee({ count: T })));
                        }, [I, T, g]),
                        R = (0, te.Zz)(),
                        O = r.useMemo(() => {
                            const e = [ke.stickyButton];
                            return R && !(0, fe.ZP)() ? e.push(ke.mobileButton) : e.push(ke.desktopButton), e;
                        }, [R]),
                        A = r.useCallback(() => (u ? r.createElement(ce.Z, { editorState: h, onChange: v }) : null), [h, u, v]),
                        P = r.useCallback(
                            () => (e) =>
                                r.createElement(ne.b, {
                                    emojiPickerButton: A,
                                    inputStyle: ke.root,
                                    maxNumberOfLines: 100,
                                    numberOfLines: 30,
                                    onChange: (t) => {
                                        e(t), v(t);
                                    },
                                    richTextInputContext: Z,
                                    testID: "xprofile-composer",
                                    textSizesOverride: (0, pe.bb)(pe.K),
                                    toolbarRightControl: D,
                                }),
                            [v, A, Z, D],
                        );
                    return r.createElement(a.Z, null, f ? r.createElement(a.Z, { style: ke.error }, r.createElement(z.Z.Danger, { text: f, withIcon: !0 })) : null, r.createElement(oe.Z, { fallbackBackPath: "/", history: m, onNavigation: S, shouldBlockNavigation: k, shouldBlockUnload: C }, r.createElement(le.Z, { className: pe.Hx }, r.createElement(ue.Z, { contextText: (0, de.iT)(h), isInline: !0, onTextUpdated: v, onTypeaheadStateChange: ae.Z, source: be._4.LongformComposer }, P()))), r.createElement(a.Z, { style: O }, r.createElement(_e.Z, { blockId: t, characterCount: I, disabled: g || !C || !w || I > E.j3, editorState: h, onSave: l, queryId: n, setDirty: y, setError: p, setSaving: _, userId: d })), c && t ? r.createElement(se.Z, { blockId: t, headline: Ce, onClose: o, onCompleted: x, queryId: n, subtext: ye, userId: d }) : null);
                }),
                xe = m().a765e936,
                Ie = m().d4d68e44,
                Te = ({ hasConsented: e, history: t, profileBlocksRef: n, queryId: o, refetch: i, viewerUser: d }) => {
                    const u = (0, y.p)(),
                        [m, C] = r.useState(!1),
                        S = l()(k.m1, n),
                        x = S?.items?.find((e) => e?.block_type === E.Mp.RICHTEXT),
                        I = x?.data?.value,
                        T = x?.block_id,
                        w = r.useCallback(() => {
                            C(!1);
                        }, []),
                        v = r.useCallback(
                            (e) => [
                                {
                                    text: xe,
                                    Icon: f.default,
                                    disabled: !T,
                                    onClick: () => {
                                        C(!0), e();
                                    },
                                },
                            ],
                            [T],
                        ),
                        Z = r.useCallback((e) => r.createElement(s.Z, { cancelButtonLabel: "Cancel", items: v(e), onCloseRequested: e }), [v]);
                    return d
                        ? r.createElement(_.Z, {
                              backLocation: `/${d.screen_name}`,
                              history: t,
                              primaryContent: (() => {
                                  if (!d || !S) return null;
                                  if (!e) return r.createElement(a.Z, { style: we.root }, r.createElement(V, { queryId: o }));
                                  return r.createElement(
                                      a.Z,
                                      { style: we.root },
                                      r.createElement(Se, {
                                          blockId: T,
                                          blocksQueryId: o,
                                          closeConfirm: w,
                                          initialState: I,
                                          onSave: () => {
                                              u({ text: Ie }), t.push(`/${d.screen_name}/bio`);
                                          },
                                          refetch: i,
                                          showConfirmDelete: m,
                                          userId: d.id_str,
                                      }),
                                  );
                              })(),
                              rightControl: e ? r.createElement(a.Z, null, r.createElement(c.Z, { Icon: p.default, renderActionMenu: Z })) : null,
                              sidebarContent: r.createElement(h.Z, null),
                              subtitle: `@${d.screen_name}`,
                              title: (0, b.Z)(d),
                              titleIconCell: (0, g.Z)(d),
                          })
                        : null;
                },
                we = d.default.create((e) => ({ root: { paddingVertical: e.spaces.space20, height: "100%" }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 } })),
                ve = (e) => {
                    const { data: t, refetch: n } = (0, S.A)(k.vF, {}),
                        a = t?.viewer_v2?.user_results?.result?.profile_blocks,
                        i = Boolean(t?.viewer_v2?.user_results?.result?.has_xprofile_consent);
                    if (!e.viewerUser || !a) return null;
                    const l = i ? a.__id : t?.viewer_v2?.user_results?.result?.__id;
                    return r.createElement(Te, (0, o.Z)({ hasConsented: i, profileBlocksRef: a, queryId: l, refetch: n }, e));
                },
                Ze = { context: "EXTENDED_PROFILE_SETTINGS" },
                $e = (0, x.Z)((e) => r.createElement(C.H, { errorConfig: Ze }, r.createElement(ve, e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsExtendedProfile-e019dbda.52d6cb8a.js.map
