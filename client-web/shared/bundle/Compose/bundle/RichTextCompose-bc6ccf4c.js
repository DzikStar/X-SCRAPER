"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c", "icons/IconAccessibilityCircle-js", "icons/IconBarChartHorizontalStroke-js"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(807896),
                o = n(202784),
                s = n(325686),
                i = n(731708),
                a = n(58881),
                l = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: n, ...h }) => {
                    const p = a.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(s.Z, { style: d.container }, o.createElement(l.Z, (0, r.Z)({}, h, { interactiveStyles: p, style: d.root }), o.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        345128: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(815858),
                s = (n(136728), n(337637));
            const i = Object.freeze({ in: "in", out: "out", static: "static" });
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isAnimating: !1, renderChildren: r.Children.toArray(this.props.children).map((e) => ({ status: i.static, child: e })) }),
                        (this._handleEachAnimateComplete = () => {
                            const { isAnimating: e } = this.state,
                                { children: t, onAnimateComplete: n } = this.props;
                            e && (n && n(), this.setState({ renderChildren: r.Children.toArray(t).map((e) => ({ status: i.static, child: e })), isAnimating: !1 }));
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    const n = ((e, t) => {
                        let n = 0,
                            r = 0;
                        const o = [];
                        for (; r < e.length; ) {
                            if (n >= t.length) {
                                o.push(...e.slice(r).map((e) => ({ child: e, status: i.out })));
                                break;
                            }
                            const a = t[n],
                                l = e[r];
                            if (a.key === l.key) o.push({ child: a, status: i.static }), (n += 1);
                            else {
                                const e = (0, s.Z)(t, (e) => e.key === l.key);
                                e >= 0 ? (o.push(...t.slice(n, e).map((e) => ({ child: e, status: i.in })), { child: t[e], status: i.static }), (n = e + 1)) : o.push({ child: l, status: i.out });
                            }
                            r += 1;
                        }
                        return n < t.length && o.push(...t.slice(n).map((e) => ({ child: e, status: i.in }))), o;
                    })(
                        t.renderChildren.map((e) => e.child),
                        r.Children.toArray(e.children),
                    );
                    return { renderChildren: n, isAnimating: !n.every((e) => e.status === i.static) };
                }
                render() {
                    const { renderChildren: e } = this.state;
                    return e.map(({ child: e, status: t }) => r.createElement(o.Z, { animateMount: t !== i.static, key: e.key, onAnimateComplete: this._handleEachAnimateComplete, show: t !== i.out }, e));
                }
            }
            const l = a;
        },
        425376: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(325686),
                s = n(494394),
                i = n(530525),
                a = n(731708),
                l = n(439592),
                c = n(154003),
                d = n(769281),
                h = n(30899),
                p = n(138099),
                u = n(392237);
            const m = u.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: n, headline: g, icon: y, iconColor: f, image: C, onDismiss: x, shouldDisplay: b, text: w, withMask: E = !0 }) => {
                    const [S, Z] = r.useState(!1),
                        v = (e) => r.createElement(h.Z, { onDismiss: R, renderContent: () => _(R), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: s.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: E }, e),
                        k = () => r.createElement(p.Z, { onMaskClick: () => R(), type: "center", withMask: !0 }, _(R)),
                        _ = (n) => r.createElement(o.Z, { style: [m.root, C && m.rootWithImage] }, T(), r.createElement(o.Z, { style: m.container }, F(), D(), P({ action: e, dismiss: n, type: t && "primaryFilled" }), P({ action: t, dismiss: n }))),
                        T = () => {
                            let e = y && r.createElement(y, { style: f ? [m.icon, { color: u.default.theme.colors[f] }] : m.icon });
                            return C && !d.Z.isEnabled && (e = r.createElement(i.Z, { "aria-label": "", aspectMode: l.Z.exact(2), image: C })), e && r.createElement(o.Z, { style: m.graphic }, e);
                        },
                        F = () => r.createElement(a.ZP, { size: "title3", weight: "heavy" }, g),
                        D = () => r.createElement(a.ZP, { color: "gray700", style: m.description }, w),
                        P = ({ action: e, dismiss: t, type: n }) => e && r.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: m.actionButton, type: n }, e.text),
                        R = () => {
                            x && x(), Z(!0);
                        };
                    return b && !S ? (n ? v(n) : k()) : n || null;
                };
        },
        130304: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(466999),
                s = n(325686),
                i = n(111677),
                a = n.n(i),
                l = n(408369),
                c = n(764503),
                d = n(392237);
            const h = a().c2fc878d,
                p = a().db11b27f,
                u = (e) => e,
                m = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 } })),
                g = (e) => {
                    const { count: t, maxCount: n, formatNumber: i = u, warningCount: a } = e,
                        g = n - t,
                        y = g >= 0 ? p({ count: i(g) }) : h({ count: i(t - n) }),
                        f = t >= a ? r.createElement(o.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, y) : null,
                        C = (0, l.Z)(g, n),
                        x = t >= n ? "red500" : t >= a ? "yellow500" : "primary",
                        b = r.createElement(c.Z, { color: x, progress: C, size: t >= a ? 30 : 20, style: [m.progressCircle, g <= -10 && m.hide] }),
                        w = t >= a ? r.createElement(o.Z, { style: [m.text, g > 0 ? m.gray700 : m.red500] }, i(g)) : null;
                    return r.createElement(s.Z, { style: [m.root, m.center], testID: "countdown-circle" }, f, b, r.createElement(s.Z, { style: [d.default.absoluteFill, m.center] }, w));
                };
        },
        991789: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(466999),
                s = n(325686),
                i = n(111677),
                a = n.n(i),
                l = n(408369),
                c = n(764503),
                d = n(392237);
            const h = (e) => e;
            function p(e) {
                const { count: t, finalMaxCount: n, finalWarningCount: i, initialMaxCount: a, formatNumber: p = h, initialWarningCount: g } = e,
                    y = a - t,
                    f = n - t;
                let C;
                C = y >= 0 ? m.charactersRemainingInStandardTweetAndTotalMessage({ standardTweetCount: p(y), totalCount: p(f) }) : f >= 0 ? m.charactersRemainingMessage({ count: p(f) }) : m.characterOverLimitMessage({ count: p(t - n) });
                let x = null;
                t >= g && (x = r.createElement(o.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, C));
                const b = (0, l.Z)(y, a),
                    w = y > 0 || f < 0 ? 0 : (0, l.Z)(f, n);
                let E = "primary";
                t >= n ? (E = "red500") : t >= i && (E = "yellow500");
                const S = r.createElement(c.Z, { color: E, colorInner: E, progress: b, progressInner: w, size: t >= g ? 30 : 20, style: [u.progressCircle, f <= -10 && u.hide] });
                let Z = null;
                return t >= g && t < a ? (Z = r.createElement(o.Z, { style: [u.text, u.gray700], testID: "dual-phase-countdown-circle-text" }, p(y))) : t >= i && (Z = r.createElement(o.Z, { style: [u.text, t > n ? u.red500 : u.white], testID: "dual-phase-countdown-circle-text" }, p(f))), r.createElement(s.Z, { style: [u.root, u.center], testID: "dual-phase-countdown-circle" }, x, S, r.createElement(s.Z, { style: [d.default.absoluteFill, u.center] }, Z));
            }
            const u = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 }, white: { color: e.white } })),
                m = { characterOverLimitMessage: a().c2fc878d, charactersRemainingInStandardTweetAndTotalMessage: a().f06ae5d3, charactersRemainingMessage: a().db11b27f };
        },
        626820: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(202784),
                o = n(325686),
                s = n(111677),
                i = n.n(s),
                a = n(797681),
                l = n(837020),
                c = n(530525),
                d = n(731708),
                h = n(439592),
                p = n(154003),
                u = n(879891),
                m = n(352924),
                g = n(392237);
            const y = g.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "row", flex: 1 }, contentTextContainer: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, dismissButton: { paddingStart: e.spaces.space12 }, icon: { color: e.colors.text, marginEnd: e.spaces.space8 }, illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 }, arrow: { borderStyle: "none" }, arrowContainer: { display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 }, arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 }, arrowDown: { transform: "rotate(180deg)" }, hidden: { opacity: 0 } })),
                f = g.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, purple: { backgroundColor: e.colors.purple0 }, plum: { backgroundColor: e.colors.plum0 } })),
                C = g.default.create((e) => ({ primary: { color: e.colors.primary0 }, purple: { color: e.colors.purple0 }, plum: { color: e.colors.plum0 } })),
                x = ({ backgroundColor: e = "primary", containerRef: t, icon: n, illustration: s, onClose: g, text: x }) => {
                    const b = i().af8fa2ae,
                        w = (0, m.b)(),
                        { direction: E } = (0, u.Z)(),
                        [S, Z] = r.useState(Number.MIN_SAFE_INTEGER),
                        [v, k] = r.useState(Number.MIN_SAFE_INTEGER),
                        _ = "rtl" === E,
                        T = (e) => {
                            const { top: t } = e.getBoundingClientRect();
                            return v > t;
                        };
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            o.Z,
                            {
                                onLayout: (e) => {
                                    const {
                                        nativeEvent: {
                                            layout: { left: t, top: n, width: r },
                                        },
                                    } = e;
                                    k(n);
                                    Z(t + r / 2);
                                },
                            },
                            (() => {
                                const i = !(!t || (v >= 0 && S >= 0)),
                                    u = t?.current ? ((m = t.current), T(m) ? { flexDirection: "column" } : { flexDirection: "column-reverse" }) : void 0;
                                var m;
                                const E = !t?.current || T(t.current),
                                    Z = t?.current
                                        ? ((e) => {
                                              const { left: t, width: n } = e.getBoundingClientRect(),
                                                  r = t + n / 2 - S;
                                              return { start: _ ? void 0 : r, end: _ ? r : void 0 };
                                          })(t.current)
                                        : void 0,
                                    k = t ? ((t, n) => r.createElement(o.Z, { style: [y.arrowContainer, n, t ? y.arrowDirectionUp : y.arrowDirectionDown], testID: "tooltip-arrow" }, r.createElement(a.default, { style: [y.arrow, C[e], !t && y.arrowDown] })))(E, Z) : void 0,
                                    F = [u, i && y.hidden];
                                return r.createElement(o.Z, { style: F, testID: "tooltip-content" }, k, r.createElement(o.Z, { style: [y.root, f[e]] }, r.createElement(o.Z, { style: y.contentContainer }, n && !s ? ((P = n), r.createElement(P, { style: [y.icon, { alignItem: "flex-start" }], testID: "tooltip-icon" })) : null, s && !n ? ((D = s), r.createElement(o.Z, { style: y.illustration, testID: "tooltip-illustration" }, r.createElement(c.Z, { "aria-label": "", aspectMode: h.Z.SQUARE, image: D }))) : null, r.createElement(o.Z, { style: y.contentTextContainer }, r.createElement(d.ZP, { id: w }, x))), g && r.createElement(o.Z, { style: y.dismissButton }, r.createElement(p.ZP, { "aria-describedby": w, "aria-label": b, icon: r.createElement(l.default, { testID: "tooltip-close-icon" }), onPress: g, size: "xSmall", type: "primaryText" }))));
                                var D, P;
                            })(),
                        ),
                    );
                };
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => F });
            var r = n(807896),
                o = n(202784),
                s = (n(136728), n(301503)),
                i = n(516951),
                a = n(950822),
                l = n(233184),
                c = n(745153),
                d = n(392237),
                h = n(989272),
                p = (n(571372), n(370751)),
                u = n(122375),
                m = n(835305),
                g = n(899492);
            function y(e) {
                let t;
                if (e.html)
                    try {
                        t = (function (e) {
                            if (!e.html) return null;
                            if (
                                ((function (e) {
                                    const t = e.html;
                                    if (!t) return;
                                    const n = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${g.S()}[^>]*>`, "g");
                                    let r,
                                        o = t;
                                    for (; (r = n.exec(t)); ) {
                                        const e = r.groups?.emoji;
                                        if (!e) continue;
                                        const t = r.index,
                                            s = n.lastIndex;
                                        o = [o.substring(0, t), e, o.substring(s, o.length)].join("");
                                    }
                                    e.html = o;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, s.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const n = s.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let r = (0, s.convertToRaw)(n);
                            e.longformRichTextTransform ||
                                (r.blocks = (function (e, t) {
                                    const n = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let r;
                                    const o = [];
                                    for (; (r = n.exec(e.text)); ) {
                                        const t = r.index,
                                            s = n.lastIndex,
                                            i = e.text.substring(t, s),
                                            a = w(i, E.start_newline),
                                            l = w(i, E.end_newline);
                                        o.push([a, l]);
                                    }
                                    const i = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, r] = o[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && r && r++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...S(), key: e };
                                            i.push(t);
                                        }
                                        i.push(t.blocks[e]);
                                        for (let e = 0; e < r; e++) {
                                            const e = (0, s.genKey)(),
                                                t = { ...S(), key: e };
                                            i.push(t);
                                        }
                                    }
                                    return i;
                                })(e, r));
                            r = (function (e, t) {
                                const n = [];
                                for (const r of t.blocks)
                                    switch (r.type) {
                                        case u.Wo:
                                            n.push(f(e, r));
                                            break;
                                        case u.p8:
                                        case u.r$:
                                        case u.Mm:
                                        case u.Z4:
                                        case u.Re:
                                            if (e.allowExtendedPasteStyles) n.push(f(e, r));
                                            else {
                                                const t = { ...r, type: u.Wo };
                                                n.push(f(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...r, type: u.Wo };
                                            n.push(f(e, t));
                                        }
                                    }
                                return { blocks: n, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, r);
                            const o = (0, s.convertFromRaw)(r);
                            return o;
                        })(e);
                    } catch (t) {
                        const n = "warning",
                            { html: r, text: o } = e,
                            s = { extra: { text: o, html: r, error: t }, level: n };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), s);
                    }
                return !t && e.text && (t = s.ContentState.createFromText(e.text)), t || null;
            }
            function f(e, t) {
                const n = t.inlineStyleRanges || [],
                    r = [],
                    o = e.longformRichTextTransform ? b : x;
                for (const t of n) !e.stripPastedStyles && o.has(t.style) && r.push(t);
                return (t.inlineStyleRanges = r), t;
            }
            const C = [m.DraftJS.Bold, m.DraftJS.Italic],
                x = (0, p.Z)(C),
                b = (0, p.Z)([...x, m.DraftJS.Strikethrough]);
            function w(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [r] = n;
                return r.length - 1;
            }
            const E = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function S() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class Z extends o.Component {
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
                                n = (0, h.w3)({ placeholderTextColor: t, contentHorizontalPadding: e });
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
                            const { multiline: r, onChange: o } = this.props;
                            if (!o) return "not-handled";
                            const { allowExtendedPasteStyles: i, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let c = y({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: i, longformRichTextTransform: a });
                            if (!c) return "not-handled";
                            if (!r) {
                                const e = (function (e) {
                                    return e.replace(_.all_newlines, " ");
                                })(c.getPlainText());
                                c = s.ContentState.createFromText(e);
                            }
                            return (c = s.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), c.getBlockMap())), o(s.EditorState.push(n, c, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: r } = this.props,
                                { hasCommandModifier: o } = s.KeyBindingUtil;
                            return e.keyCode === k.enter && o(e) ? r : e.keyCode === k.esc ? t : n?.(e) || (0, s.getDefaultKeyBinding)(e);
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
                            const e = T[this.props.appTextSize],
                                t = d.default.theme.lineHeightsPx[e];
                            let n = 1,
                                r = 1;
                            this.props.multiline && (this.props.numberOfLines && (n = this.props.numberOfLines), this.props.maxNumberOfLines && (r = this.props.maxNumberOfLines));
                            const o = n * t,
                                s = r * t;
                            return this.props.withMaxHeight ? { minHeight: o, maxHeight: s, overflowX: "hidden", overflowY: "auto" } : { minHeight: o, height: "100%" };
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
                    const { multiline: e, onKeyPress: t, onKeyUp: n, testID: r } = this.props;
                    return o.createElement(v, { className: [!e && h._i.single_line, this.state.containerClass, this.props.withFormatInline && h._i.format_inline].join(" ") }, o.createElement(v, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: r ? `${r}RichTextInputContainer` : void 0 }, o.createElement(s.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [c.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: d.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: r }), this.props.dragPlaceholder));
                }
            }
            Z.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: i.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const v = (e) => (0, a.Z)("div", e),
                k = { enter: 13, esc: 27 };
            const _ = { all_newlines: /[\r\n]/g },
                T = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                F = o.forwardRef((e, t) =>
                    o.createElement(
                        Z,
                        (0, r.Z)({}, e, {
                            onFocus: function (t) {
                                e.onFocus && e.onFocus(t);
                            },
                            ref: t,
                        }),
                    ),
                );
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        408369: (e, t, n) => {
            function r(e, t) {
                return Math.min(1, 1 - e / t);
            }
            n.d(t, { Z: () => r });
        },
        689107: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        853485: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        156474: (e, t, n) => {
            n.d(t, { l: () => r });
            n(202784);
            function r(e) {
                const t = e.store.useState((e) => e),
                    n = e.store.useActions();
                return e.children({ state: t, actions: n });
            }
        },
        685780: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(973710);
            const o = (e, ...t) => (0, r.Z)(e, t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c.64f0f75a.js.map
