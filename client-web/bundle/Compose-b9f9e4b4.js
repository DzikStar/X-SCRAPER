"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose-b9f9e4b4"],
    {
        15038: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(325686),
                s = n(950822),
                i = n(392237);
            const a = (e) => (0, s.Z)("div", e);
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: n, style: s } = this.props,
                        { active: i } = this.state,
                        l = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return o.createElement(a, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, s, i && l, i && e] }, o.createElement(r.Z, { style: d.inner }, "function" == typeof n ? n(i) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const d = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                h = l;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                s = n(674132),
                i = n.n(s),
                a = n(154003),
                l = n(950822),
                d = n(392237);
            const h = i().i5450bec,
                c = i().f7432494;
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                o = n.files;
                            o.length && t && t(o), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: s, testID: i, ...d } = this.props,
                        p = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(a.ZP, (0, o.Z)({ hoverLabel: e ? { label: p ? c : h } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            p.defaultProps = { disabled: !1, multiple: !1 };
            const u = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = p;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                s = n(235902),
                i = n(885015),
                a = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return n ? o.createElement(i.Z, { style: !t && d.root, withGutter: !0 }, o.createElement(r.Z, { style: d.gapColumn }, o.createElement(r.Z, { style: [d.gap, h] })), o.createElement(r.Z, { style: d.gapText }, n), o.createElement(r.Z, { style: d.gapColumn }, o.createElement(r.Z, { style: [d.gap, h] }))) : o.createElement(r.Z, { style: [!t && d.root, l() && d.rootRedesign, d.gap, h] });
            }
            const d = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(807896),
                r = n(202784),
                s = n(325686),
                i = n(392237);
            class a extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        a = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return r.createElement(s.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, i), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = a;
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => T });
            var o = n(807896),
                r = n(202784),
                s = (n(136728), n(301503)),
                i = n(516951),
                a = n(950822),
                l = n(233184),
                d = n(745153),
                h = n(392237),
                c = n(989272),
                p = (n(571372), n(370751)),
                u = n(122375),
                m = n(835305),
                f = n(899492);
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
                                    const n = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${f.S()}[^>]*>`, "g");
                                    let o,
                                        r = t;
                                    for (; (o = n.exec(t)); ) {
                                        const e = o.groups?.emoji;
                                        if (!e) continue;
                                        const t = o.index,
                                            s = n.lastIndex;
                                        r = [r.substring(0, t), e, r.substring(s, r.length)].join("");
                                    }
                                    e.html = r;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, s.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const n = s.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let o = (0, s.convertToRaw)(n);
                            e.longformRichTextTransform ||
                                (o.blocks = (function (e, t) {
                                    const n = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let o;
                                    const r = [];
                                    for (; (o = n.exec(e.text)); ) {
                                        const t = o.index,
                                            s = n.lastIndex,
                                            i = e.text.substring(t, s),
                                            a = x(i, S.start_newline),
                                            l = x(i, S.end_newline);
                                        r.push([a, l]);
                                    }
                                    const i = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, o] = r[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && o && o++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...D(), key: e };
                                            i.push(t);
                                        }
                                        i.push(t.blocks[e]);
                                        for (let e = 0; e < o; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...D(), key: e };
                                            i.push(t);
                                        }
                                    }
                                    return i;
                                })(e, o));
                            o = (function (e, t) {
                                const n = [];
                                for (const o of t.blocks)
                                    switch (o.type) {
                                        case u.Wo:
                                            n.push(y(e, o));
                                            break;
                                        case u.p8:
                                        case u.r$:
                                        case u.Mm:
                                        case u.Z4:
                                        case u.Re:
                                            if (e.allowExtendedPasteStyles) n.push(y(e, o));
                                            else {
                                                const t = { ...o, type: u.Wo };
                                                n.push(y(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...o, type: u.Wo };
                                            n.push(y(e, t));
                                        }
                                    }
                                return { blocks: n, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, o);
                            const r = (0, s.convertFromRaw)(o);
                            return r;
                        })(e);
                    } catch (t) {
                        const n = "warning",
                            { html: o, text: r } = e,
                            s = { extra: { text: r, html: o, error: t }, level: n };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), s);
                    }
                return !t && e.text && (t = s.ContentState.createFromText(e.text)), t || null;
            }
            function y(e, t) {
                const n = t.inlineStyleRanges || [],
                    o = [],
                    r = e.longformRichTextTransform ? b : _;
                for (const t of n) !e.stripPastedStyles && r.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const C = [m.DraftJS.Bold, m.DraftJS.Italic],
                _ = (0, p.Z)(C),
                b = (0, p.Z)([..._, m.DraftJS.Strikethrough]);
            function x(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [o] = n;
                return o.length - 1;
            }
            const S = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function D() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class w extends r.Component {
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
                            return s.EditorState.acceptSelection(e, new s.SelectionState({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1 }));
                        }),
                        (this._setFocusToStart = () => {
                            const e = this._setSelectionToStart();
                            return s.EditorState.forceSelection(e, e.getSelection());
                        }),
                        (this._setFocusToEnd = () => {
                            const { autoFocus: e, editorState: t, onChange: n } = this.props;
                            n?.(e ? s.EditorState.moveFocusToEnd(t) : s.EditorState.moveSelectionToEnd(t));
                        }),
                        (this._setDraftJsStyle = () => {
                            const { contentHorizontalPadding: e, placeholderTextColor: t } = this.props,
                                n = (0, c.w3)({ placeholderTextColor: t, contentHorizontalPadding: e });
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
                            const { multiline: o, onChange: r } = this.props;
                            if (!r) return "not-handled";
                            const { allowExtendedPasteStyles: i, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let d = g({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: i, longformRichTextTransform: a });
                            if (!d) return "not-handled";
                            if (!o) {
                                const e = (function (e) {
                                    return e.replace(F.all_newlines, " ");
                                })(d.getPlainText());
                                d = s.ContentState.createFromText(e);
                            }
                            return (d = s.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), d.getBlockMap())), r(s.EditorState.push(n, d, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: o } = this.props,
                                { hasCommandModifier: r } = s.KeyBindingUtil;
                            return e.keyCode === v.enter && r(e) ? o : e.keyCode === v.esc ? t : n?.(e) || (0, s.getDefaultKeyBinding)(e);
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
                            const e = k[this.props.appTextSize],
                                t = h.default.theme.lineHeightsPx[e];
                            let n = 1,
                                o = 1;
                            this.props.multiline && (this.props.numberOfLines && (n = this.props.numberOfLines), this.props.maxNumberOfLines && (o = this.props.maxNumberOfLines));
                            const r = n * t,
                                s = o * t;
                            return this.props.withMaxHeight ? { minHeight: r, maxHeight: s, overflowX: "hidden", overflowY: "auto" } : { minHeight: r, height: "100%" };
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
                    const { multiline: e, onKeyPress: t, onKeyUp: n, testID: o } = this.props;
                    return r.createElement(E, { className: [!e && c._i.single_line, this.state.containerClass, this.props.withFormatInline && c._i.format_inline].join(" ") }, r.createElement(E, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: o ? `${o}RichTextInputContainer` : void 0 }, r.createElement(s.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [d.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: h.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: o }), this.props.dragPlaceholder));
                }
            }
            w.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: i.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const E = (e) => (0, a.Z)("div", e),
                v = { enter: 13, esc: 27 };
            const F = { all_newlines: /[\r\n]/g },
                k = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                T = r.forwardRef((e, t) =>
                    r.createElement(
                        w,
                        (0, o.Z)({}, e, {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose-b9f9e4b4.b90c308a.js.map
