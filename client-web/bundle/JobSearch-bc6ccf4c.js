"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-bc6ccf4c", "loader.AudioContextVoiceMedia", "icons/IconNumberedList-js"],
    {
        420412: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686),
                l = n(235902),
                i = n(885015),
                s = n(392237);
            function a({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: a } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, a() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                l = n(325686),
                i = n(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, a.column, n && a.withGutterColumn] }));
                    return o.createElement(l.Z, (0, r.Z)({ style: [t, a.root, n && a.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const a = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                l = n(111677),
                i = n.n(l),
                s = n(815858),
                a = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                f = i().fc8cd112,
                h = (e) => r.createElement(a.ZP, null, e);
            class p extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: l, userScreenName: i, withFacepile: u } = this.props,
                        f = this._renderMessage();
                    return r.createElement(s.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((h = i), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: s }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(a.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || s) && !!i && g.underline, l] }, e && u ? r.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, f))) : r.createElement(o.Z, { style: g.content }, r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, f)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : f;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
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
            n.d(t, { Z: () => k });
            n(136728);
            var r = n(202784),
                o = n(301503),
                l = n(325686),
                i = n(595088),
                s = n(516951),
                a = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                f = n(202253),
                h = n(786475),
                p = n(392237),
                g = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(a.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(a.ZP, null) } },
                w = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let y = !1;
            const k = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: a } = e;
                    r.useEffect(() => {
                        y || (u.fH(g.c, g.n), (y = !0));
                    }, []);
                    const p = [(0, f.ez)(i, a), f.aF, f.RU];
                    e.disable_entityLinkDecorator || p.push((0, f.NA)(i, a));
                    const b = m.Z.initEditorState(n, { decorators: p });
                    let k = s.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(l.Z, { style: E.fontFamily }, r.createElement(o.Editor, { blockRenderMap: w, blockRendererFn: k, blockStyleFn: (0, c.su)(h.Z.isNarrowScreenWidth(e)), editorState: b, onChange: s.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                E = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => D, Ak: () => P, KJ: () => k, LI: () => S, P7: () => g, PW: () => C, QF: () => b, Qm: () => y, Tr: () => _, b$: () => p, db: () => T, et: () => v, fR: () => h, iH: () => $, lD: () => w, su: () => E, u4: () => x, wX: () => Z });
            var r = n(202784),
                o = n(111677),
                l = n.n(o),
                i = n(394123),
                s = n(856661),
                a = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                f = n(731708);
            const h = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: h.bold, onPress: e(h.bold) },
                    { buttonTestId: "btn-italic", Icon: s.default, key: h.italic, onPress: e(h.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: a.default, key: h.strikethrough, onPress: e(h.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: g.blockquote, onPress: e(g.blockquote) }],
                w = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                y = "LINK",
                k = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: y, onPress: e }],
                E = (e, t) => (n) => {
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
                v = l().d5a48014,
                C = l().b92b6156,
                D = l().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(f.ZP, { extendedWidth: t, size: n, weight: o }, e),
                _ = { blockType: g.paragraph, label: D, component: S({ size: "body", children: D }) },
                $ = [{ blockType: g.header1, label: v, component: S({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: g.header2, label: C, component: S({ size: "title3", weight: "heavy", children: C }) }, _],
                Z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                P = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                T = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => i, w3: () => l });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                i(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    s,
                );
                const t = a(e);
                return (
                    i(
                        (function (e) {
                            const t = a(e);
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
            function i(e, t) {
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
            const s = "draftjs-styles";
            function a(e) {
                const t = (function (e) {
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${s}_${t}`;
            }
            const c = [];
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                l = n(731708),
                i = n(891198),
                s = n(280278),
                a = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(l.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(l.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: i = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: a }) => (e ? r.createElement(s.ZP, { children: t, count: n, size: c, style: o, weight: i }) : r.createElement(l.ZP, { children: t, color: a ? "white" : "text", size: c, style: o, weight: i }))));
            const m = a.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                f = u;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => k });
            var r = n(202784),
                o = n(325686),
                l = n(731708),
                i = n(235902),
                s = n(649846),
                a = n(529509),
                c = n(392237),
                d = n(823161),
                u = n(238406),
                m = n(366635),
                f = n(646797);
            const h = () => !1;
            class p extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: l } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && n) {
                                const { avatarUrls: e, count: t, names: i } = n;
                                return t ? r.createElement(o.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && r.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: l })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(o.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(o.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(o.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: l, userAvatarSize: s, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return r.createElement(o.Z, { style: g.row }, r.createElement(i.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(d.default, { link: n, onClick: t, promotedContent: l, screenName: c, size: s, uri: u ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: l } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(o.Z, { style: g.marginTop8 }, this._renderUserName(), l && this._renderHighlightedUserLabel())) : r.createElement(o.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: o, onScreenNameClick: l, profileLink: i, promotedContent: s, userHighlightedLabel: a, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: f, userWithFollowsYou: h, withNameWrap: p } = this.props,
                        { badges: g, followIndicator: b, fullName: w } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? n : void 0, isVerified: g ? o : void 0, link: i, name: w ? c : d, nameSize: "headline2", onLinkClick: l, promotedContent: s, screenName: d, translatorType: g ? u : void 0, verifiedType: g ? f : void 0, withFollowsYou: b && h, withLink: !0, withNameWrap: p, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(o.Z, { style: g.marginTop4 }, r.createElement(l.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: l, userWithheldDescription: i, userWithheldEntities: s } = this.props,
                        { description: a } = e;
                    return a && t && n && l ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(u.Z, { description: t, entities: n, userId: l, withheldDescription: i, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: l, userFollowersCount: i, userFriendsCount: s, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(f.Z, { followersCount: i, friendsCount: s, onPress: n, screenName: a, subscriptionsCount: l, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            p.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var b = n(807896);
            var w = n(111677);
            const y = n.n(w)().ef633578;
            class k extends r.PureComponent {
                render() {
                    return r.createElement(p, this.props);
                }
            }
            (k.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: o, knownFollowers: l, onAvatarClick: i, onScreenNameClick: s, promotedContent: a, userDescription: c, userId: d, userName: u, userScreenName: m, ...f } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(p, (0, b.Z)({}, f, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: o, knownFollowers: l, onAvatarClick: i, onScreenNameClick: s, promotedContent: a, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: d, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (k.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(p, { errorMessage: y, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: n, userScreenName: n, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(111677),
                l = n.n(o),
                i = n(891198),
                s = n(98538);
            class a extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: o, style: a, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: m, withSubscriptionsCount: f } = this.props,
                        h = `/${o}/verified_followers`;
                    return r.createElement(s.Z.Group, { style: a }, r.createElement(s.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(s.Z.Value, null, l().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), r.createElement(s.Z.Label, null, l().daf8a75f({ count: t })))), r.createElement(s.Z, { count: e, link: u ? h : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(s.Z.Value, null, l().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), r.createElement(s.Z.Label, null, l().ad9b5988({ count: e })))), m && void 0 !== c && r.createElement(s.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(s.Z.Value, null, l().a9980948({ formattedCount: (0, i.wl)(c) })), r.createElement(s.Z.Label, null, l().ce44a35c({ count: c })))), f && d && r.createElement(s.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(l().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(s.Z.Value, null, l().id949f68({ formattedCount: (0, i.wl)(d) })), r.createElement(s.Z.Label, null, l().hb608cfc({ count: d })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => a });
            var r = n(202784),
                o = n(890601),
                l = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const l = t ? t(r, o, e) : !!r;
                        return l && n[0].push(r), !l && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
        125568: (e, t, n) => {
            n.d(t, { t: () => o });
            var r = n(202784);
            function o() {
                const e = r.useRef(!0);
                return (
                    r.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    r.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-bc6ccf4c.3e1e5daa.js.map
