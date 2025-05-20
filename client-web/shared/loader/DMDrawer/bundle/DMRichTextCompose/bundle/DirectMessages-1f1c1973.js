"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1f1c1973"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                l = n(325686),
                a = n(731708),
                i = n(58881),
                s = n(530732),
                d = n(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const f = i.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(l.Z, { style: c.container }, o.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: f, style: c.root }), o.createElement(a.ZP, { align: e, color: t }, n)));
                };
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var r = n(202784),
                o = n(325686),
                l = n(950822),
                a = n(392237);
            const i = (e) => (0, l.Z)("div", e);
            class s extends r.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: n, style: l } = this.props,
                        { active: a } = this.state,
                        s = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return r.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, l, a && s, a && e] }, r.createElement(o.Z, { style: d.inner }, "function" == typeof n ? n(a) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const d = a.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(807896),
                o = n(202784),
                l = n(332920),
                a = n.n(l),
                i = n(154003),
                s = n(950822),
                d = n(392237);
            const c = a().i5450bec,
                u = a().f7432494;
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: l, testID: a, ...d } = this.props,
                        f = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(i.ZP, (0, r.Z)({ hoverLabel: e ? { label: f ? u : c } : void 0 }, d, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: a, type: "file" }));
                }
            }
            f.defaultProps = { disabled: !1, multiple: !1 };
            const h = d.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = f;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                l = n(235902),
                a = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(a.Z, { style: !t && d.root, withGutter: !0 }, r.createElement(o.Z, { style: d.gapColumn }, r.createElement(o.Z, { style: [d.gap, c] })), r.createElement(o.Z, { style: d.gapText }, n), r.createElement(o.Z, { style: d.gapColumn }, r.createElement(o.Z, { style: [d.gap, c] }))) : r.createElement(o.Z, { style: [!t && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(807896),
                o = n(202784),
                l = n(325686),
                a = n(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...a } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return o.createElement(l.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, a), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = i;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                l = n(332920),
                a = n.n(l),
                i = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const f = a().a35a5b10,
                h = a().fc8cd112,
                m = (e) => r.createElement(s.ZP, null, e);
            class p extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: l, userScreenName: a, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return r.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(c.Z, { "aria-label": f, interactiveStyles: null, link: a ? ((m = a), `/${m}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(d.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || i) && !!a && g.underline, l] }, e && u ? r.createElement(d.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, h))) : r.createElement(o.Z, { style: g.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var m;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "c9e6167d" }, m(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "ha91d1eb" }, m(e[0]), m(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "f1069f9b" }, m(e[0]), m(e[1]), m(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(a().I18NFormatMessage, { $i18n: "e8404c1f" }, m(e[0]), m(e[1]), n);
                }
            }
            p.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => w });
            n(136728);
            var r = n(202784),
                o = n(301503),
                l = n(325686),
                a = n(595088),
                i = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                f = n(925873),
                h = n(202253),
                m = n(786475),
                p = n(392237),
                g = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, a.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let D = !1;
            const w = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: a, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        D || (u.fH(g.c, g.n), (D = !0));
                    }, []);
                    const p = [(0, h.ez)(a, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || p.push((0, h.NA)(a, s));
                    const b = f.Z.initEditorState(n, { decorators: p });
                    let w = i.Z;
                    return (
                        t &&
                            (w = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(c.ZP, null, ({ containerWidth: e }) => r.createElement(l.Z, { style: k.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: w, blockStyleFn: (0, d.su)(m.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => v, Ak: () => Z, KJ: () => w, LI: () => C, P7: () => g, PW: () => $, QF: () => b, Qm: () => D, Tr: () => S, b$: () => p, db: () => P, et: () => E, fR: () => m, iH: () => _, lD: () => y, su: () => k, u4: () => z, wX: () => x });
            var r = n(202784),
                o = n(332920),
                l = n.n(o),
                a = n(394123),
                i = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                f = n(630715),
                h = n(731708);
            const m = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: a.default, key: m.bold, onPress: e(m.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: m.italic, onPress: e(m.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: m.strikethrough, onPress: e(m.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                D = "LINK",
                w = (e) => [{ buttonTestId: "btn-link", Icon: f.default, key: D, onPress: e }],
                k = (e, t) => (n) => {
                    const r = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case g.bulleted:
                            return r("longform-unordered-list-item");
                        case g.blockquote:
                            return r("longform-blockquote");
                        case g.header1:
                            return r("longform-header-one");
                        case g.header2:
                            return r("longform-header-two");
                        case g.numbered:
                            return r("longform-ordered-list-item");
                        case g.paragraph:
                            return r("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                E = l().d5a48014,
                $ = l().b92b6156,
                v = l().ec5ed598,
                C = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(h.ZP, { extendedWidth: t, size: n, weight: o }, e),
                S = { blockType: g.paragraph, label: v, component: C({ size: "body", children: v }) },
                _ = [{ blockType: g.header1, label: E, component: C({ size: "title1", extendedWidth: !0, children: E }) }, { blockType: g.header2, label: $, component: C({ size: "title3", weight: "heavy", children: $ }) }, S],
                x = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                z = "increase-text-size",
                P = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => a, w3: () => l });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                a(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    a(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const o = e.contentHorizontalPadding;
                            n || (n = r.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${o ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${o};\n          padding-right: ${o};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function a(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const r = document.head;
                    r && r.insertBefore(n, r.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const d = [];
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1f1c1973.9c3a0a0a.js.map
