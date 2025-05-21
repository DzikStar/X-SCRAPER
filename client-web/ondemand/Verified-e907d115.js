"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-e907d115"],
    {
        13720: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                l = n(365712),
                a = n(516951),
                i = n(352924);
            const s = ({ allowMultipleToggles: e, children: t, testID: n, withKeyboardNavigation: s = !1 }) => {
                let c, d;
                const u = (0, i.b)(),
                    m = r.useMemo(() => {
                        let n = [];
                        return (
                            r.Children.map(t, (t, r) => {
                                const o = `${u}_${r}`;
                                t.props?.isExpanded && (n = e ? [...n, o] : 1 === n.length ? n : [o]);
                            }),
                            n
                        );
                    }, [u, e, t]),
                    [p, f] = r.useState(m),
                    h = () => d.indexOf(document.activeElement),
                    g = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    b = (t) => {
                        let n = [],
                            r = [t];
                        const o = p?.includes(t);
                        e && (o ? (n = p?.filter((e) => e !== t)) : (r = [...p, t])), f(o ? n : r);
                    },
                    y = r.Children.map(t, (e, t) => {
                        const n = `${u}_${t}`;
                        return r.isValidElement(e) ? r.cloneElement(e, { accordionItemId: n, onToggle: b, isExpanded: p.includes(n) }) : e;
                    });
                return r.createElement(
                    o.Z,
                    {
                        onKeyDown: s
                            ? (e) => {
                                  if (!d.includes(e.target)) return;
                                  let t;
                                  switch (e.key) {
                                      case "ArrowDown":
                                          e.preventDefault(), (t = d[h() + 1] || d[0]), g(t);
                                          break;
                                      case "ArrowUp":
                                          e.preventDefault(), (t = d[h() - 1] || d[d.length - 1]), g(t);
                                          break;
                                      case "Home":
                                          e.preventDefault(), (t = d[0]), g(t);
                                          break;
                                      case "End":
                                          e.preventDefault(), (t = d[d.length - 1]), g(t);
                                  }
                              }
                            : a.Z,
                        ref: (e) => {
                            if (e && c !== e) {
                                c = e;
                                const t = (0, l.ht)(c);
                                d = t.filter((e) => e.id.includes("header"));
                            }
                        },
                        testID: n,
                    },
                    y,
                );
            };
        },
        108837: (e, t, n) => {
            n.d(t, { Z: () => m });
            n(136728);
            var r = n(202784),
                o = n(325686),
                l = n(487552),
                a = n(461756),
                i = n(731708),
                s = n(58881),
                c = n(530732),
                d = n(392237);
            const u = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                m = ({ accordionItemId: e = "", children: t, headerStyles: n, icon: m, iconColor: p, iconImage: f, iconSide: h, isExpanded: g = !1, onClick: b, onToggle: y, testID: w, title: k, titleColor: D, titleStyles: C }) => {
                    const E = s.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        x = h || "AfterTitle",
                        Z = () =>
                            m
                                ? ((e, t) => {
                                      const n = "BeforeTitle" === t ? u.iconBefore : u.iconAfter;
                                      return r.createElement(e, { style: p ? [n, { color: p }] : [n, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(m, x)
                                : f || void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            c.Z,
                            {
                                "aria-controls": `${e}_content`,
                                "aria-expanded": g,
                                id: `${e}_header`,
                                interactiveStyles: E,
                                onClick: () => {
                                    b && b(), y && y(e);
                                },
                                style: n || u.header,
                                testID: w,
                            },
                            r.createElement(o.Z, { style: u.title }, "BeforeTitle" === x ? Z() : null, r.createElement(i.ZP, { color: D && D, style: C, testID: "title", weight: "bold" }, k), "AfterTitle" === x ? Z() : null),
                            (() => {
                                const e = [u.chevronMargin, g && u.chevronExpanded, !a.Z.reducedMotionEnabled && u.chevronAnimation];
                                return D && !g ? e.push({ color: d.default.theme.colors[D] }) : D || g || e.push({ color: d.default.theme.colors.text }), r.createElement(l.default, { style: e, testID: "accordion-chevron" });
                            })(),
                        ),
                        g && r.createElement(o.Z, { "aria-hidden": !g, "aria-labelledby": `${e}_header`, id: `${e}_content}`, role: "region" }, t),
                    );
                };
        },
        507151: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                l = n(58399),
                a = n(731708);
            const i = n(392237).default.create((e) => ({ container: { padding: e.spaces.space16, boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large, flexDirection: "column", backgroundColor: e.colors.buttonWhite }, backgroundCursorStyle: { cursor: "pointer" }, description: { marginTop: e.spaces.space4 }, secondaryDescription: { marginTop: e.spaces.space8 }, linkContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, iconChevron: { color: e.colors.blue500 } })),
                s = function (e) {
                    const { description: t, linkLabel: n, onClick: s, secondaryDescription: c } = e,
                        d = n || s ? i.backgroundCursorStyle : null;
                    return r.createElement(o.Z, { onClick: s, style: [i.container, d], testID: "card-info-container" }, r.createElement(a.ZP, { color: "text", role: "label", size: "body", style: i.description, weight: "bold" }, t), c && r.createElement(a.ZP, { color: "gray700", role: "label", size: "body", style: i.secondaryDescription }, c), n && r.createElement(o.Z, { style: i.linkContainer }, r.createElement(a.ZP, { color: "blue500", size: "body", weight: "bold" }, n), r.createElement(l.default, { style: i.iconChevron })));
                };
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
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
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
                c = i;
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
                a = n(595088),
                i = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                p = n(202253),
                f = n(786475),
                h = n(392237),
                g = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, a.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let w = !1;
            const k = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: a, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        w || (u.fH(g.c, g.n), (w = !0));
                    }, []);
                    const h = [(0, p.ez)(a, s), p.aF, p.RU];
                    e.disable_entityLinkDecorator || h.push((0, p.NA)(a, s));
                    const b = m.Z.initEditorState(n, { decorators: h });
                    let k = i.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(l.Z, { style: D.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: k, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => x, Ak: () => I, KJ: () => k, LI: () => Z, P7: () => g, PW: () => E, QF: () => b, Qm: () => w, Tr: () => v, b$: () => h, db: () => P, et: () => C, fR: () => f, iH: () => $, lD: () => y, su: () => D, u4: () => z, wX: () => S });
            var r = n(202784),
                o = n(332920),
                l = n.n(o),
                a = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                p = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: a.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                w = "LINK",
                k = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: w, onPress: e }],
                D = (e, t) => (n) => {
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
                C = l().d5a48014,
                E = l().b92b6156,
                x = l().ec5ed598,
                Z = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(p.ZP, { extendedWidth: t, size: n, weight: o }, e),
                v = { blockType: g.paragraph, label: x, component: Z({ size: "body", children: x }) },
                $ = [{ blockType: g.header1, label: C, component: Z({ size: "title1", extendedWidth: !0, children: C }) }, { blockType: g.header2, label: E, component: Z({ size: "title3", weight: "heavy", children: E }) }, v],
                S = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                I = ["delete", "delete-word", "delete-to-start-of-line"],
                z = "increase-text-size",
                P = "decrease-text-size";
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                l = n(191796),
                a = n(58399),
                i = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: m = !1, label: p, link: f, onPress: h, paddingHorizontal: g, renderRightContent: b, role: y = "tab", styleOverride: w, testID: k = "pivot", thumbnail: D, thumbnailSize: C, withoutArrow: E = !1 } = e,
                        x = [u.thumbnailContainer, "medium" === C && u.thumbnailContainerMedium],
                        Z = "string" == typeof p ? r.createElement(i.ZP, null, p) : p,
                        v = "object" == typeof f && f.external && !f.openInSameFrame,
                        $ = n ? ("string" == typeof n ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, n) : n) : null,
                        S = r.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? m : null, disabled: d, link: d ? void 0 : f, onPress: h, role: y, style: [u.root, S, d && u.disabled, w], testID: k, withInteractiveStyling: !!f || !!h }, r.createElement(o.Z, { style: u.contentContainer }, D ? r.createElement(o.Z, { style: x }, D) : null, r.createElement(o.Z, { style: u.content }, Z, $), b ? b() : null, (!f && !h) || d || E ? null : v ? r.createElement(l.default, { style: u.icon }) : r.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
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
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const c = [];
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                o = n(325686),
                l = n(913973),
                a = n(731708),
                i = n(950822),
                s = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                m = n(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: p, label: h, name: g, testID: b } = this.props,
                        y = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        w = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        k = n ? y : w;
                    return r.createElement(s.Z, { disabled: u }, (s) => r.createElement(o.Z, { role: "label", style: [f.root, !u && f.interactive], testID: b }, r.createElement(o.Z, { style: f.topContainer }, r.createElement(a.ZP, { id: this.labelId }, h), r.createElement(o.Z, { style: f.radioContainer }, r.createElement(d.Z, { interactiveStyles: k, interactivityState: s, style: f.radioBackground }, r.createElement(o.Z, { style: [f.circle, n && f.circleActive, u && f.circleDisabled, n && u && f.circleCheckedAndDisabled] }, n ? r.createElement(l.default, { style: f.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [f.nativeControl], type: "radio" }))), p ? r.createElement(a.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: f.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const f = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = p,
                g = "radioGroup";
            let b = 1;
            class y extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${b}_LABEL`),
                        (b += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: l, name: i, options: s, value: c } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: n && w.disabled, testID: `${g}${i}` },
                        l ? r.createElement(o.Z, { id: this._labelId, role: "label", style: w.header }, r.createElement(a.ZP, { style: w.label, weight: "bold" }, l), t ? r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(h, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const w = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(731708),
                l = n(392237);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return r.createElement(o.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        l = i.root;
                    return t && n ? r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: l }, e, " ", this._renderLearnMore()) : r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: l }, e);
                }
            }
            const i = l.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = a;
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686);
            const l = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                a = function ({ children: e }) {
                    return r.createElement(o.Z, { style: l.root }, e);
                };
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                l = n(449479),
                a = n(392237);
            const i = (e) => r.createElement(o.Z, { style: s.root }, r.createElement(l.Z, e)),
                s = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        782947: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(807896),
                o = n(202784),
                l = n(896632),
                a = n(325686),
                i = n(711223),
                s = n(516951),
                c = n(731708),
                d = n(868634),
                u = n(952428),
                m = n(352924),
                p = n(392237);
            const f = p.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                g = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: r, dedicatedPillRow: l, description: p, disabled: g, disabledInlineCallout: b, endContent: y, horizontal: w, illustration: k, infoLabel: D, infoLabelType: C, inlineCallout: E, label: x, name: Z, onChange: v, pillText: $, pillType: S, reverseLabels: I, secondaryContent: z, secondaryDescription: P, switchStyle: T, testID: R }) => {
                    const _ = (0, m.b)(),
                        H = (0, m.b)(),
                        B = (0, m.b)(),
                        F = o.createElement(c.ZP, { color: "text", id: _, role: "label", size: T ? "body" : "headline2", testID: "headline-label", weight: T ? "normal" : "bold" }, x),
                        M = !!p && o.createElement(c.ZP, { color: "gray700", id: H, size: "subtext1", style: $ ? f.descriptionWithPill : f.description, testID: "description-label" }, p),
                        W = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: f.description }, P),
                        L = $ ? o.createElement(d.ZP, { style: l ? f.pill : f.inlinePill, type: S }, $) : null,
                        A = o.createElement(o.Fragment, null, l ? L : null, o.createElement(a.Z, { style: [f.row, D && f.marginBottom8] }, I ? M : F, l ? null : L), o.createElement(a.Z, { style: [f.row, I && f.marginTop4] }, I ? F : M), z || (P ? W : void 0)),
                        j = T ? "unset" : (n ? 100 / n : 100) + "%",
                        G = T ? [f.padding8, f.borderRadiusInfinite, r ? f.backgroundDefault : f.backgroundTransparent] : [f.padding16, f.boxShadow, f.borderRadiusLarge, r ? f.checked : null, f.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { disabled: g, style: [f.root, ...G, w ? { maxWidth: j, ...f.grow } : null, 1 === t || w ? null : f.withMarginTop, t !== n && w && !T && f.withMarginEnd, !g && f.interactive], testID: R, withInteractiveStyling: !T }, !!k && o.createElement(a.Z, { style: f.iconContainer, testID: "illustration" }, k), o.createElement(a.Z, { style: [f.labelContainer, T && f.alignCenter] }, !!D && o.createElement(a.Z, { style: f.info }, o.createElement(d.ZP, { background: "green" === C ? "green500" : "red" === C ? "magenta500" : "yellow" === C ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === C ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, D)), "red" !== C && "yellow" !== C && o.createElement(i.default, { style: f.infoIcon, testID: "infoIcon" })), A, r && !!E && o.createElement(a.Z, { style: f.inlineCalloutContainer, testID: "inlineCallout" }, E)), !!y && o.createElement(a.Z, { style: f.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: B, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${H} ${B}`, "aria-label": e, "aria-labelledby": _, "aria-posinset": t, "aria-setsize": n, checked: r, disabled: g, name: Z, onChange: r ? s.Z : v, style: h, type: "radio" })), g && b ? b : null);
                },
                b = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(g, (0, r.Z)({}, t, { key: e })), []);
                    return o.createElement(l.Z, (0, r.Z)({}, e, { renderSelector: t }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-e907d115.920311aa.js.map
