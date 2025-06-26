"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-bc6ccf4c", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconBoldCompact-js", "icons/IconCropSquare-js", "icons/IconQuoteStroke-js", "icons/IconStrikethrough-js"],
    {
        13720: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(365712),
                l = n(516951),
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
                    [h, p] = r.useState(m),
                    f = () => d.indexOf(document.activeElement),
                    g = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    b = (t) => {
                        let n = [],
                            r = [t];
                        const o = h?.includes(t);
                        e && (o ? (n = h?.filter((e) => e !== t)) : (r = [...h, t])), p(o ? n : r);
                    },
                    y = r.Children.map(t, (e, t) => {
                        const n = `${u}_${t}`;
                        return r.isValidElement(e) ? r.cloneElement(e, { accordionItemId: n, onToggle: b, isExpanded: h.includes(n) }) : e;
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
                                          e.preventDefault(), (t = d[f() + 1] || d[0]), g(t);
                                          break;
                                      case "ArrowUp":
                                          e.preventDefault(), (t = d[f() - 1] || d[d.length - 1]), g(t);
                                          break;
                                      case "Home":
                                          e.preventDefault(), (t = d[0]), g(t);
                                          break;
                                      case "End":
                                          e.preventDefault(), (t = d[d.length - 1]), g(t);
                                  }
                              }
                            : l.Z,
                        ref: (e) => {
                            if (e && c !== e) {
                                c = e;
                                const t = (0, a.ht)(c);
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
                a = n(487552),
                l = n(461756),
                i = n(731708),
                s = n(58881),
                c = n(530732),
                d = n(392237);
            const u = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                m = ({ accordionItemId: e = "", children: t, headerStyles: n, icon: m, iconColor: h, iconImage: p, iconSide: f, isExpanded: g = !1, onClick: b, onToggle: y, testID: w, title: k, titleColor: D, titleStyles: E }) => {
                    const C = s.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        v = f || "AfterTitle",
                        Z = () =>
                            m
                                ? ((e, t) => {
                                      const n = "BeforeTitle" === t ? u.iconBefore : u.iconAfter;
                                      return r.createElement(e, { style: h ? [n, { color: h }] : [n, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(m, v)
                                : p || void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            c.Z,
                            {
                                "aria-controls": `${e}_content`,
                                "aria-expanded": g,
                                id: `${e}_header`,
                                interactiveStyles: C,
                                onClick: () => {
                                    b && b(), y && y(e);
                                },
                                style: n || u.header,
                                testID: w,
                            },
                            r.createElement(o.Z, { style: u.title }, "BeforeTitle" === v ? Z() : null, r.createElement(i.ZP, { color: D && D, style: E, testID: "title", weight: "bold" }, k), "AfterTitle" === v ? Z() : null),
                            (() => {
                                const e = [u.chevronMargin, g && u.chevronExpanded, !l.Z.reducedMotionEnabled && u.chevronAnimation];
                                return D && !g ? e.push({ color: d.default.theme.colors[D] }) : D || g || e.push({ color: d.default.theme.colors.text }), r.createElement(a.default, { style: e, testID: "accordion-chevron" });
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
                a = n(58399),
                l = n(731708);
            const i = n(392237).default.create((e) => ({ container: { padding: e.spaces.space16, boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large, flexDirection: "column", backgroundColor: e.colors.buttonWhite }, backgroundCursorStyle: { cursor: "pointer" }, description: { marginTop: e.spaces.space4 }, secondaryDescription: { marginTop: e.spaces.space8 }, linkContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, iconChevron: { color: e.colors.blue500 } })),
                s = function (e) {
                    const { description: t, linkLabel: n, onClick: s, secondaryDescription: c } = e,
                        d = n || s ? i.backgroundCursorStyle : null;
                    return r.createElement(o.Z, { onClick: s, style: [i.container, d], testID: "card-info-container" }, r.createElement(l.ZP, { color: "text", role: "label", size: "body", style: i.description, weight: "bold" }, t), c && r.createElement(l.ZP, { color: "gray700", role: "label", size: "body", style: i.secondaryDescription }, c), n && r.createElement(o.Z, { style: i.linkContainer }, r.createElement(l.ZP, { color: "blue500", size: "body", weight: "bold" }, n), r.createElement(a.default, { style: i.iconChevron })));
                };
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(476984),
                a = n.n(o),
                l = n(143778),
                i = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: a, loadingMessage: l, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: g } = this.props;
                    switch (o) {
                        case c:
                            return g ? r.createElement(i.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? r.createElement(s.m, { failureMessage: n }) : p();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                l = n(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return o.createElement(a.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => a, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                a = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => k });
            n(136728);
            var r = n(202784),
                o = n(301503),
                a = n(325686),
                l = n(595088),
                i = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                h = n(202253),
                p = n(786475),
                f = n(392237),
                g = n(135904);
            const b = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, l.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let w = !1;
            const k = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        w || (u.fH(g.c, g.n), (w = !0));
                    }, []);
                    const f = [(0, h.ez)(l, s), h.aF, h.RU];
                    e.disable_entityLinkDecorator || f.push((0, h.NA)(l, s));
                    const b = m.Z.initEditorState(n, { decorators: f });
                    let k = i.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(a.Z, { style: D.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: k, blockStyleFn: (0, c.su)(p.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = f.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => v, Ak: () => I, KJ: () => k, LI: () => Z, P7: () => g, PW: () => C, QF: () => b, Qm: () => w, Tr: () => x, b$: () => f, db: () => P, et: () => E, fR: () => p, iH: () => S, lD: () => y, su: () => D, u4: () => $, wX: () => z });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                l = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                h = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                f = (e) => [
                    { buttonTestId: "btn-bold", Icon: l.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: p.strikethrough, onPress: e(p.strikethrough) },
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
                E = a().d5a48014,
                C = a().b92b6156,
                v = a().ec5ed598,
                Z = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(h.ZP, { extendedWidth: t, size: n, weight: o }, e),
                x = { blockType: g.paragraph, label: v, component: Z({ size: "body", children: v }) },
                S = [{ blockType: g.header1, label: E, component: Z({ size: "title1", extendedWidth: !0, children: E }) }, { blockType: g.header2, label: C, component: Z({ size: "title3", weight: "heavy", children: C }) }, x],
                z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                I = ["delete", "delete-word", "delete-to-start-of-line"],
                $ = "increase-text-size",
                P = "decrease-text-size";
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(191796),
                l = n(58399),
                i = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: m = !1, label: h, link: p, onPress: f, paddingHorizontal: g, renderRightContent: b, role: y = "tab", styleOverride: w, testID: k = "pivot", thumbnail: D, thumbnailSize: E, withoutArrow: C = !1 } = e,
                        v = [u.thumbnailContainer, "medium" === E && u.thumbnailContainerMedium],
                        Z = "string" == typeof h ? r.createElement(i.ZP, null, h) : h,
                        x = "object" == typeof p && p.external && !p.openInSameFrame,
                        S = n ? ("string" == typeof n ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, n) : n) : null,
                        z = r.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? m : null, disabled: d, link: d ? void 0 : p, onPress: f, role: y, style: [u.root, z, d && u.disabled, w], testID: k, withInteractiveStyling: !!p || !!f }, r.createElement(o.Z, { style: u.contentContainer }, D ? r.createElement(o.Z, { style: v }, D) : null, r.createElement(o.Z, { style: u.content }, Z, S), b ? b() : null, (!p && !f) || d || C ? null : x ? r.createElement(a.default, { style: u.icon }) : r.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => l, w3: () => a });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function a(e) {
                l(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    l(
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
            function l(e, t) {
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
                a = n(913973),
                l = n(731708),
                i = n(950822),
                s = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                m = n(392237);
            class h extends r.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: h, label: f, name: g, testID: b } = this.props,
                        y = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        w = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        k = n ? y : w;
                    return r.createElement(s.Z, { disabled: u }, (s) => r.createElement(o.Z, { role: "label", style: [p.root, !u && p.interactive], testID: b }, r.createElement(o.Z, { style: p.topContainer }, r.createElement(l.ZP, { id: this.labelId }, f), r.createElement(o.Z, { style: p.radioContainer }, r.createElement(d.Z, { interactiveStyles: k, interactivityState: s, style: p.radioBackground }, r.createElement(o.Z, { style: [p.circle, n && p.circleActive, u && p.circleDisabled, n && u && p.circleCheckedAndDisabled] }, n ? r.createElement(a.default, { style: p.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [p.nativeControl], type: "radio" }))), h ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: p.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const p = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                f = h,
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
                    const { "aria-label": e, description: t, disabled: n, label: a, name: i, options: s, value: c } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: n && w.disabled, testID: `${g}${i}` },
                        a ? r.createElement(o.Z, { id: this._labelId, role: "label", style: w.header }, r.createElement(l.ZP, { style: w.label, weight: "bold" }, a), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(f, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
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
                a = n(392237);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return r.createElement(o.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        a = i.root;
                    return t && n ? r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const i = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = l;
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(325686);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return r.createElement(o.Z, { style: a.root }, e);
                };
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(449479),
                l = n(392237);
            const i = (e) => r.createElement(o.Z, { style: s.root }, r.createElement(a.Z, e)),
                s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        782947: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(807896),
                o = n(202784),
                a = n(896632),
                l = n(325686),
                i = n(711223),
                s = n(516951),
                c = n(731708),
                d = n(868634),
                u = n(952428),
                m = n(352924),
                h = n(392237);
            const p = h.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                f = { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                g = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: r, dedicatedPillRow: a, description: h, disabled: g, disabledInlineCallout: b, endContent: y, horizontal: w, illustration: k, infoLabel: D, infoLabelType: E, inlineCallout: C, label: v, name: Z, onChange: x, pillText: S, pillType: z, reverseLabels: I, secondaryContent: $, secondaryDescription: P, switchStyle: T, testID: R }) => {
                    const _ = (0, m.b)(),
                        M = (0, m.b)(),
                        H = (0, m.b)(),
                        B = o.createElement(c.ZP, { color: T ? (r ? "text" : "gray800") : "text", id: _, role: "label", size: T ? "body" : "headline2", testID: "headline-label", weight: T ? "normal" : "bold" }, v),
                        F = !!h && o.createElement(c.ZP, { color: "gray700", id: M, size: "subtext1", style: S ? p.descriptionWithPill : p.description, testID: "description-label" }, h),
                        L = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: p.description }, P),
                        W = S ? o.createElement(d.ZP, { style: a ? p.pill : p.inlinePill, type: z }, S) : null,
                        A = o.createElement(o.Fragment, null, a ? W : null, o.createElement(l.Z, { style: [p.row, D && p.marginBottom8] }, I ? F : B, a ? null : W), o.createElement(l.Z, { style: [p.row, I && p.marginTop4] }, I ? B : F), $ || (P ? L : void 0)),
                        j = T ? "unset" : (n ? 100 / n : 100) + "%",
                        V = T ? [p.padding8, p.borderRadiusLarge, r ? p.backgroundDefault : p.backgroundTransparent] : [p.padding16, p.boxShadow, p.borderRadiusLarge, r ? p.checked : null, p.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { disabled: g, style: [p.root, ...V, w ? { maxWidth: j, ...p.grow } : null, 1 === t || w ? null : p.withMarginTop, t !== n && w && !T && p.withMarginEnd, !g && p.interactive], testID: R, withInteractiveStyling: !T }, !!k && o.createElement(l.Z, { style: p.iconContainer, testID: "illustration" }, k), o.createElement(l.Z, { style: [p.labelContainer, T && p.alignCenter] }, !!D && o.createElement(l.Z, { style: p.info }, o.createElement(d.ZP, { background: "green" === E ? "green500" : "red" === E ? "magenta500" : "yellow" === E ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === E ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, D)), "red" !== E && "yellow" !== E && o.createElement(i.default, { style: p.infoIcon, testID: "infoIcon" })), A, r && !!C && o.createElement(l.Z, { style: p.inlineCalloutContainer, testID: "inlineCallout" }, C)), !!y && o.createElement(l.Z, { style: p.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: H, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${M} ${H}`, "aria-label": e, "aria-labelledby": _, "aria-posinset": t, "aria-setsize": n, checked: r, disabled: g, name: Z, onChange: r ? s.Z : x, style: f, type: "radio" })), g && b ? b : null);
                },
                b = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(g, (0, r.Z)({}, t, { key: e })), []);
                    return o.createElement(a.Z, (0, r.Z)({}, e, { renderSelector: t }));
                };
        },
        394123: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        390587: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        76388: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        474761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
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
                        const a = t ? t(r, o, e) : !!r;
                        return a && n[0].push(r), !a && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-bc6ccf4c.adcbbdda.js.map
