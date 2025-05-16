"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.RichText"],
    {
        536790: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(571372), n(136728);
            var s = n(202784),
                o = n(301503),
                r = n(597496),
                i = n(339110),
                a = n(456910),
                l = n(230295),
                h = n(267446);
            class c extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = s.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: o, isInlineReply: a, onTypeaheadStateChange: l, source: h } = this.props,
                                { canShowTypeahead: c, queryContext: d } = this.state,
                                p = c && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return s.createElement(r.H1, { composeCommunityId: t, contextText: n, isInline: o, isInlineReply: a, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: p, ref: this._genericWrapperRef, source: h || i._4.Compose }, e(this._handleInputChange));
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
                                const s = (0, h.k)(e, n.resultType);
                                t(this._replaceToken(s, n));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    s = this._getPlaintextFromCurrentBlock(e),
                                    { end: o, start: r, word: i } = a.si(this._getCaret(e), s),
                                    l = a.bR(i || "", "compose");
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
                    const { editorState: n, endIndex: s, startIndex: r } = t,
                        i = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: s }),
                        a = o.Modifier.replaceText(n.getCurrentContent(), i, e),
                        l = o.EditorState.push(n, a, "insert-characters"),
                        h = r + e.length,
                        c = l.getSelection().merge({ anchorOffset: h, focusOffset: h });
                    return o.EditorState.forceSelection(l, c);
                }
            }
            const d = c;
        },
        687184: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            n(202784);
            var s = n(925873),
                o = n(977952),
                r = n(536790);
            function i(e) {
                const t = { convertEmojiToEntities: s.Z.convertEmojiToEntities, element: o.Z, initEditorState: s.Z.initEditorState, insertTextAtCursor: s.Z.insertTextAtCursor };
                return e.children({ richTextInputContext: t, typeaheadWrapper: r.Z });
            }
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => I });
            var s = n(807896),
                o = n(202784),
                r = (n(136728), n(301503)),
                i = n(516951),
                a = n(950822),
                l = n(233184),
                h = n(745153),
                c = n(392237),
                d = n(989272),
                p = (n(571372), n(370751)),
                u = n(122375),
                f = n(835305),
                m = n(899492);
            function g(e) {
                let t;
                if (e.html)
                    try {
                        t = (function (e) {
                            if (!e.html) return null;
                            if (
                                ((function (e) {
                                    const t = e.html;
                                    if (!t) return;
                                    const n = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${m.S()}[^>]*>`, "g");
                                    let s,
                                        o = t;
                                    for (; (s = n.exec(t)); ) {
                                        const e = s.groups?.emoji;
                                        if (!e) continue;
                                        const t = s.index,
                                            r = n.lastIndex;
                                        o = [o.substring(0, t), e, o.substring(r, o.length)].join("");
                                    }
                                    e.html = o;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, r.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const n = r.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let s = (0, r.convertToRaw)(n);
                            e.longformRichTextTransform ||
                                (s.blocks = (function (e, t) {
                                    const n = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let s;
                                    const o = [];
                                    for (; (s = n.exec(e.text)); ) {
                                        const t = s.index,
                                            r = n.lastIndex,
                                            i = e.text.substring(t, r),
                                            a = _(i, T.start_newline),
                                            l = _(i, T.end_newline);
                                        o.push([a, l]);
                                    }
                                    const i = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, s] = o[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && s && s++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, r.genKey)(),
                                                t = { ...w(), key: e };
                                            i.push(t);
                                        }
                                        i.push(t.blocks[e]);
                                        for (let e = 0; e < s; e++) {
                                            const e = (0, r.genKey)(),
                                                t = { ...w(), key: e };
                                            i.push(t);
                                        }
                                    }
                                    return i;
                                })(e, s));
                            s = (function (e, t) {
                                const n = [];
                                for (const s of t.blocks)
                                    switch (s.type) {
                                        case u.Wo:
                                            n.push(y(e, s));
                                            break;
                                        case u.p8:
                                        case u.r$:
                                        case u.Mm:
                                        case u.Z4:
                                        case u.Re:
                                            if (e.allowExtendedPasteStyles) n.push(y(e, s));
                                            else {
                                                const t = { ...s, type: u.Wo };
                                                n.push(y(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...s, type: u.Wo };
                                            n.push(y(e, t));
                                        }
                                    }
                                return { blocks: n, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, s);
                            const o = (0, r.convertFromRaw)(s);
                            return o;
                        })(e);
                    } catch (t) {
                        const n = "warning",
                            { html: s, text: o } = e,
                            r = { extra: { text: o, html: s, error: t }, level: n };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), r);
                    }
                return !t && e.text && (t = r.ContentState.createFromText(e.text)), t || null;
            }
            function y(e, t) {
                const n = t.inlineStyleRanges || [],
                    s = [],
                    o = e.longformRichTextTransform ? C : x;
                for (const t of n) !e.stripPastedStyles && o.has(t.style) && s.push(t);
                return (t.inlineStyleRanges = s), t;
            }
            const S = [f.DraftJS.Bold, f.DraftJS.Italic],
                x = (0, p.Z)(S),
                C = (0, p.Z)([...x, f.DraftJS.Strikethrough]);
            function _(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [s] = n;
                return s.length - 1;
            }
            const T = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function w() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class k extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { containerClass: void 0 }),
                        (this.focus = () => {
                            this._editor && this._editor.focus();
                        }),
                        (this.blur = () => {
                            this._editor && this._editor.blur();
                        }),
                        (this.getValue = () => this.props.editorState.getCurrentContent().getPlainText()),
                        (this.getOffsetHeight = () => {
                            const { editor: e } = this._editor || {};
                            return (e && e.offsetHeight) || 0;
                        }),
                        (this.clear = () => {}),
                        (this._setSelectionToStart = () => {
                            const { editorState: e } = this.props,
                                t = e.getCurrentContent().getFirstBlock().getKey();
                            return r.EditorState.acceptSelection(e, new r.SelectionState({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1 }));
                        }),
                        (this._setFocusToStart = () => {
                            const e = this._setSelectionToStart();
                            return r.EditorState.forceSelection(e, e.getSelection());
                        }),
                        (this._setFocusToEnd = () => {
                            const { autoFocus: e, editorState: t, onChange: n } = this.props;
                            n?.(e ? r.EditorState.moveFocusToEnd(t) : r.EditorState.moveSelectionToEnd(t));
                        }),
                        (this._setDraftJsStyle = () => {
                            const { contentHorizontalPadding: e, placeholderTextColor: t } = this.props,
                                n = (0, d.w3)({ placeholderTextColor: t, contentHorizontalPadding: e });
                            this.setState({ containerClass: n });
                        }),
                        (this._setEditorRef = (e) => {
                            this._editor = e;
                        }),
                        (this._handleViewClick = () => this.focus()),
                        (this._handleFiles = (e) => {
                            const { onFilesAdded: t } = this.props,
                                n = [];
                            if (
                                (e.forEach((e) => {
                                    e instanceof File && n.push(e);
                                }),
                                n.length)
                            ) {
                                const e = t?.(n);
                                return e ? "handled" : "not-handled";
                            }
                            return "not-handled";
                        }),
                        (this._onPastedFiles = (e) => this._handleFiles(e)),
                        (this._onDroppedFiles = (e, t) => this._handleFiles(t)),
                        (this._onPastedText = (e, t, n) => {
                            const { multiline: s, onChange: o } = this.props;
                            if (!o) return "not-handled";
                            const { allowExtendedPasteStyles: i, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let h = g({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: i, longformRichTextTransform: a });
                            if (!h) return "not-handled";
                            if (!s) {
                                const e = (function (e) {
                                    return e.replace(R.all_newlines, " ");
                                })(h.getPlainText());
                                h = r.ContentState.createFromText(e);
                            }
                            return (h = r.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h.getBlockMap())), o(r.EditorState.push(n, h, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: s } = this.props,
                                { hasCommandModifier: o } = r.KeyBindingUtil;
                            return e.keyCode === b.enter && o(e) ? s : e.keyCode === b.esc ? t : n?.(e) || (0, r.getDefaultKeyBinding)(e);
                        }),
                        (this._onKeyCommand = (e) => {
                            const { keyCommandHandlers: t } = this.props,
                                n = t && t[e];
                            return n ? (n(), "handled") : "not-handled";
                        }),
                        (this._onSingleLineReturn = (e, t) => {
                            const { handleReturn: n } = this.props;
                            return n?.(e, t), "handled";
                        }),
                        (this._getContainerStyle = () => {
                            const e = E[this.props.appTextSize],
                                t = c.default.theme.lineHeightsPx[e];
                            let n = 1,
                                s = 1;
                            this.props.multiline && (this.props.numberOfLines && (n = this.props.numberOfLines), this.props.maxNumberOfLines && (s = this.props.maxNumberOfLines));
                            const o = n * t,
                                r = s * t;
                            return this.props.withMaxHeight ? { minHeight: o, maxHeight: r, overflowX: "hidden", overflowY: "auto" } : { minHeight: o, height: "100%" };
                        });
                }
                componentDidMount() {
                    const { onChange: e, positionCursorAtBeginning: t, positionCursorAtEnd: n } = this.props;
                    n ? this._setFocusToEnd() : t ? e?.(this._setFocusToStart()) : this.props.autoFocus && this.focus(), this._setDraftJsStyle();
                }
                static getDerivedStateFromError() {
                    return {};
                }
                componentDidCatch(e) {
                    l.Z.report(e, { tags: { userVisible: !0, draftJs: !0 } });
                }
                render() {
                    const { multiline: e, onKeyPress: t, onKeyUp: n, testID: s } = this.props;
                    return o.createElement(F, { className: [!e && d._i.single_line, this.state.containerClass, this.props.withFormatInline && d._i.format_inline].join(" ") }, o.createElement(F, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: s ? `${s}RichTextInputContainer` : void 0 }, o.createElement(r.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [h.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: c.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: s }), this.props.dragPlaceholder));
                }
            }
            k.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: i.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const F = (e) => (0, a.Z)("div", e),
                b = { enter: 13, esc: 27 };
            const R = { all_newlines: /[\r\n]/g },
                E = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                I = o.forwardRef((e, t) =>
                    o.createElement(
                        k,
                        (0, s.Z)({}, e, {
                            onFocus: function (t) {
                                e.onFocus && e.onFocus(t);
                            },
                            ref: t,
                        }),
                    ),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.RichText.b5cf115a.js.map
