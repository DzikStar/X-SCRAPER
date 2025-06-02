"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.SettingsExtendedProfile~bundle.WorkHistory~ondemand.Verified", "icons/IconDrafts-js", "icons/IconEye-js"],
    {
        385264: (e, t, n) => {
            n.d(t, { Q: () => o });
            const o = Object.freeze({ Media: "Media", GIFs: "GIFs", Posts: "Posts", Markdown: "Markdown", Divider: "Divider", Code: "Code", LaTeX: "LaTeX" });
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => u });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                s = n(325686),
                a = n(370006),
                l = n(786998),
                c = n(929028),
                d = n(386802);
            function h(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: s, isLarge: c, leftControl: d, middleControl: u, position: p, rightControl: g, secondaryBar: m, style: f, subtitle: y, title: C, titleDomId: S, titleIconCell: b, titleIconCellSize: x, withBackground: k, withWideContainer: _ } = this.props,
                        { isModal: E } = this.context,
                        T = i ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, E, !!m);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: T, middleControl: u, position: h(p, E, r), rightControl: g, style: f, subtitle: y, title: C, titleDomId: S, titleIconCell: b, titleIconCellSize: x, withBackground: B, withWideContainer: _ }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => m, w: () => p });
            var o = n(202784),
                r = n(325686),
                i = n(108362),
                s = n(386802),
                a = n(392237),
                l = n(652904),
                c = n(555079),
                d = n(625661),
                h = n(449067),
                u = n(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: i, centerTitle: s, hideBackButton: a, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, rightControl: f, secondaryBar: y, subtitle: C, title: S } = this.props,
                                { isModal: b } = this.context;
                            return o.createElement(r.Z, { style: b ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (b ? "close" : "back"), backLocation: i, centerTitle: s, fixed: !b, hideBackButton: a, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, ref: e, rightControl: f, secondaryBar: y, style: [b && g.appBarModal, t], subtitle: C, title: S, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: s, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: p, title: m, withoutBottomBarMobile: f } = this.props,
                        { isModal: y } = this.context,
                        C = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(h.Z.Configure, { documentTitle: a, headerless: !0, title: m }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, y && g.rootModal] }, !y && C, o.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [g.container, y && g.containerModal, s] }, y ? o.createElement(u.Z, { style: g.viewport }, C, n) : n), t ? o.createElement(r.Z, { style: [g.bottomBarModal, !y && !f && g.bottomBarMobile] }, o.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const g = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        874111: (e, t, n) => {
            n.d(t, { Ff: () => I, KU: () => T, O7: () => P, QX: () => L, Sc: () => v, Ve: () => _, Vn: () => R, WE: () => M, WF: () => b, c6: () => x, ci: () => S, eE: () => k, iT: () => C, ii: () => F, jB: () => Z, k: () => V, mA: () => w, r_: () => B, wq: () => D });
            n(136728);
            var o = n(301503),
                r = n(111677),
                i = n.n(r),
                s = n(473026),
                a = n(937450),
                l = n(266151),
                c = n(498720),
                d = n(506868),
                h = n(38716),
                u = n(794057),
                p = n(385264);
            const g = (e, t, n) => {
                    const r = y(e, m(e)),
                        i = o.AtomicBlockUtils.insertAtomicBlock(r, t, n),
                        s = f(i, t);
                    if (s) {
                        const e = i.getCurrentContent().getBlockBefore(s),
                            t = i.getCurrentContent().getBlockAfter(s),
                            n = t?.getKey() === i.getCurrentContent().getLastBlock().getKey(),
                            o = e?.getText() ? i : I(i, e?.getKey()),
                            r = n ? o : I(o, t?.getKey()),
                            a = r.getCurrentContent().getBlockAfter(s);
                        return y(r, a);
                    }
                    return i;
                },
                m = (e) => {
                    const t = e.getSelection();
                    return e.getCurrentContent().getBlockForKey(t.getStartKey());
                },
                f = (e, t) => {
                    const n = e
                        .getCurrentContent()
                        .getBlocksAsArray()
                        .find((e) => e.getCharacterList().some((e) => e.getEntity() === t));
                    return n?.getKey();
                },
                y = (e, t) => {
                    if (!t) return e;
                    const n = t.getKey(),
                        r = t.getText().length,
                        i = new o.SelectionState({ anchorKey: n, anchorOffset: r, focusKey: n, focusOffset: r, hasFocus: !0, isBackward: !1 });
                    return o.EditorState.acceptSelection(e, i);
                },
                C = (e) => e.getCurrentContent().getPlainText(),
                S = (e) => e.getPlainText().trim(),
                b = (e) =>
                    C(e)
                        .split(/\s+/)
                        .filter((e) => !!e).length,
                x = (e) => C(e).length,
                k = (e) => e.getCurrentContent().getBlocksAsArray().length,
                _ = (e, t) => t.reduce((e, t) => E(e, t), e),
                E = (e, t) => {
                    const n = e.getCurrentContent().createEntity(u.DC.TWEET, u.pc.IMMUTABLE, { tweetId: t }),
                        r = n.getLastCreatedEntityKey(),
                        i = o.EditorState.set(e, { currentContent: n });
                    return g(i, r, " ");
                },
                T = (e) => (e.mediaFile?.isImage ? u._e.IMAGE : e.mediaFile?.isVideo ? u._e.VIDEO : u._e.GIF),
                B = (e, t) => {
                    const n = e.getCurrentContent(),
                        r = t.map((e) => ({ mediaCategory: T(e), localMediaId: e.id, mediaId: e.uploadId })),
                        i = n.createEntity(u.DC.MEDIA, u.pc.IMMUTABLE, { mediaItems: r }),
                        s = i.getLastCreatedEntityKey(),
                        a = i.mergeEntityData(s, { entityKey: s }),
                        l = o.EditorState.set(e, { currentContent: a });
                    return { newEditorState: g(l, s, " "), entityKey: s };
                },
                v = (e, t, n, r) => {
                    const i = e.getCurrentContent(),
                        s = i.getEntity(t).getData(),
                        { mediaItems: a } = s,
                        l = a.findIndex((e) => e.mediaId === n),
                        c = a[l];
                    if (c) {
                        const n = { ...c, localMediaId: r.id, mediaId: r.uploadId },
                            s = [...a.slice(0, l), n, ...a.slice(l + 1)],
                            d = i.mergeEntityData(t, { mediaItems: s });
                        return o.EditorState.push(e, d, "change-block-data");
                    }
                    return e;
                },
                w = (e, t, n, r) => {
                    const i = e.getCurrentContent(),
                        s = i
                            .getEntity(t)
                            .getData()
                            .mediaItems.filter((e) => !(e.localMediaId === n || r[e.mediaId] === n)),
                        a = i.mergeEntityData(t, { mediaItems: s });
                    return o.EditorState.push(e, a, "change-block-data");
                },
                I = (e, t) => {
                    if (!t) return e;
                    const n = e.getCurrentContent(),
                        r = n.getBlockAfter(t),
                        i = n.getBlockMap().filter((e) => e.getKey() !== t),
                        s = n.merge({ blockMap: i });
                    return y(o.EditorState.push(e, s, "change-block-data"), r);
                },
                F = (e) => {
                    const t = e.getCurrentContent(),
                        n = [];
                    return (
                        t.getBlocksAsArray().forEach((e) => {
                            let t = null;
                            e.findEntityRanges(
                                (e) => null !== e.getEntity() && ((t = e.getEntity()), !0),
                                () => {
                                    t && n.push(t);
                                },
                            );
                        }),
                        n
                    );
                },
                L = (e, t, n) => {
                    const r = e.getCurrentContent().mergeEntityData(t, n),
                        i = o.EditorState.push(e, r, "change-block-data"),
                        s = o.SelectionState.createEmpty(m(e).getKey());
                    return o.EditorState.forceSelection(i, s);
                },
                M = (e, t, n) => {
                    const o = n.map((e) => t[e.mediaId]).map((t) => e.find((e) => e.id === t) ?? null);
                    return o.some((e) => !e) ? n.map((t) => e.find((e) => e.id === t.localMediaId) ?? null) : o;
                },
                Z = (e, t) => {
                    const n = e.getCurrentContent().createEntity(u.DC.MARKDOWN, u.pc.MUTABLE, { markdown: t }),
                        r = n.getLastCreatedEntityKey(),
                        i = o.EditorState.set(e, { currentContent: n });
                    return g(i, r, " ");
                },
                P = (e) => {
                    const t = e.getCurrentContent().createEntity(u.DC.DIVIDER, u.pc.IMMUTABLE),
                        n = t.getLastCreatedEntityKey(),
                        r = o.EditorState.set(e, { currentContent: t });
                    return g(r, n, " ");
                },
                D = (e, t) => {
                    const n = e.getCurrentContent().createEntity(u.DC.LATEX, u.pc.IMMUTABLE),
                        r = n.getLastCreatedEntityKey(),
                        i = o.EditorState.set(e, { currentContent: n });
                    return g(i, r, t);
                },
                R = (e, t, n) => {
                    const r = e.getCurrentContent(),
                        i = r.getBlockForKey(t),
                        s = i.getText().length,
                        a = i.getEntityAt(0),
                        l = o.SelectionState.createEmpty(t).merge({ anchorOffset: 0, focusOffset: s }),
                        c = o.Modifier.replaceText(r, l, n),
                        d = l.merge({ anchorOffset: 0, focusOffset: n.length }),
                        h = o.Modifier.applyEntity(c, d, a);
                    return o.EditorState.set(e, { currentContent: h });
                },
                z = i().add55c98,
                O = i().i0db46e6,
                A = i().fa4e68ca,
                K = i().c80940f4,
                W = i().i89195ea,
                H = i().cfeb3f86,
                U = i().ad9e175c,
                V = [
                    { id: p.Q.Media, text: z, Icon: s.default },
                    { id: p.Q.GIFs, text: O, Icon: a.default },
                    { id: p.Q.Posts, text: A, Icon: l.default },
                    { id: p.Q.Markdown, text: K, Icon: c.default },
                    { id: p.Q.Divider, text: W, Icon: d.default },
                    { id: p.Q.Code, text: H, Icon: c.default },
                    { id: p.Q.LaTeX, text: U, Icon: h.default },
                ];
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                i = n(668214),
                s = n(997174),
                a = n(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: s },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = r || a;
                    ((c && r !== a) || (!c && n !== i) || o !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        297256: (e, t, n) => {
            n.d(t, { b: () => $ });
            var o = n(807896),
                r = (n(136728), n(202784)),
                i = n(301503),
                s = n(325686),
                a = n(111677),
                l = n.n(a),
                c = n(487552),
                d = n(337637),
                h = n(675320),
                u = n(161821),
                p = n(516951),
                g = n(665285),
                m = n(811176),
                f = n(731708),
                y = n(154003),
                C = n(757483),
                S = n(108362),
                b = n(595088),
                x = n(716406),
                k = n(855488),
                _ = n(344175);
            const E = l().fee0a8bc;
            class T extends r.Component {
                constructor(e) {
                    super(e),
                        (this._render = () => {
                            const { fields: e } = this.props,
                                { fieldValues: t } = this.state;
                            return r.createElement(
                                r.Fragment,
                                null,
                                (0, b.Z)(e).map(([e, n]) => {
                                    const { getErrorText: i, initialValue: s, numberOfLines: a, ...l } = n,
                                        c = i?.(t[e]);
                                    return r.createElement(k.Z, (0, o.Z)({ errorText: c, invalid: !!c, key: e, multiline: !!a && a > 1, name: e, numberOfLines: a, onChange: this._handleFieldChanged(e), value: t[e] || "" }, l));
                                }),
                            );
                        }),
                        (this._handleFieldChanged = (e) => (t) => {
                            const { fieldValues: n } = this.state,
                                o = { ...n, [e]: t.target.value };
                            this.setState({ fieldValues: o });
                        }),
                        (this._handleSave = (e) => {
                            const { onSave: t } = this.props,
                                { fieldValues: n } = this.state;
                            t(n, e);
                        }),
                        (this._isSaveEnabled = () => {
                            const { fields: e, isSaveDisabled: t } = this.props,
                                { fieldValues: n } = this.state,
                                o = (0, b.Z)(n),
                                r = o.some(([t, n]) => n !== e[t].initialValue),
                                i = o.some(([t, n]) => e[t].validLength && n.length > e[t].validLength),
                                s = o.some(([t, n]) => !!e[t].getErrorText?.(n));
                            return r && !i && !s && !(t && t(n));
                        }),
                        (this.state = { fieldValues: (0, x.Z)(e.fields, (e) => e.initialValue) });
                }
                render() {
                    const { buttonLabelOverride: e, onClose: t, sheetTitle: n } = this.props;
                    return r.createElement(_.Z, { onClose: t, primaryButtonConfig: { label: e || E, forceDisabled: !this._isSaveEnabled(), onClick: this._handleSave }, title: n, withKeyboardNavigation: !0 }, this._render());
                }
            }
            var B = n(371344),
                v = n(40610),
                w = n(530732),
                I = n(215337),
                F = n(135904),
                L = n(989272),
                M = n(855125),
                Z = n(202253),
                P = n(392237),
                D = n(779802);
            const R = P.default.create((e) => ({ separator: { borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray200, marginVertical: e.spaces.space8 } })),
                z = ({ style: e }) => r.createElement(s.Z, { style: [R.separator, e] }),
                O = l().a6a3d496,
                A = l().acce6978,
                K = l().f5e8f526,
                W = l().h517e8d8,
                H = l().a30ae58e,
                U = l().da38c958,
                V = l().fee0a8bc,
                G = l().d5d57678,
                N = l().ec822028,
                j = l().ebc5d2cc,
                Q = { [D.P7.bulleted]: ["-", "*", "+"], [D.P7.numbered]: ["1.", "1)", "1]"], [D.P7.blockquote]: [">", ">>"], [D.P7.header1]: ["#"], [D.P7.header2]: ["##"] };
            class $ extends r.Component {
                constructor(e) {
                    super(e),
                        (this.isPopoverShown = !1),
                        (this._setDecorator = () => {
                            const {
                                onChange: e,
                                richTextInputContext: { editorState: t },
                            } = this.props;
                            if (e && t) {
                                e(i.EditorState.set(t, { decorator: this.decorator }));
                            }
                        }),
                        (this._keyBindingFn = (e) => {
                            const { keyBindingFn: t } = this.props,
                                n = i.KeyBindingUtil.hasCommandModifier(e),
                                o = e.shiftKey && n,
                                r = e.key.toLowerCase();
                            return "k" === r && n ? D.Qm.toLowerCase() : "x" === r && o ? D.fR.strikethrough.toLowerCase() : "7" === r && o ? D.P7.numbered : "8" === r && o ? D.P7.bulleted : "9" === r && o ? D.P7.blockquote : "." === r && o ? D.u4 : "," === r && o ? D.db : t?.(e);
                        }),
                        (this._isEditorFocused = () => {
                            const {
                                richTextInputContext: { editorState: e },
                            } = this.props;
                            return e?.getSelection().getHasFocus();
                        }),
                        (this._shouldShowPlaceholder = () => {
                            const {
                                    richTextInputContext: { editorState: e },
                                } = this.props,
                                t = e?.getCurrentContent(),
                                n = t?.getBlockMap().first().getType(),
                                o = n === D.P7.bulleted || n === D.P7.numbered || n === D.P7.blockquote;
                            return !this._isEditorFocused() && !o;
                        }),
                        (this._getBackspaceAndDeleteCommandHandlers = () => {
                            const {
                                onChange: e,
                                richTextInputContext: { editorState: t },
                            } = this.props;
                            if (t && e) {
                                const n = (n) => {
                                        const o = n(t);
                                        return o ? () => e(o) : void 0;
                                    },
                                    o = (e, t) => (t ? Object.fromEntries(e.map((e) => [e, t])) : {});
                                return { ...o(D.wX, n(i.RichUtils.onBackspace)), ...o(D.Ak, n(i.RichUtils.onDelete)) };
                            }
                            return {};
                        }),
                        (this._getEditorStateWithLinkSelected = (e) => {
                            const t = this._getSelectedEntityWithRange();
                            if (t) {
                                const { end: n, entity: o, start: r } = t,
                                    i = o.getData().url;
                                if (i) return { editorStateWithLinkSelected: this._getEditorStateWithTextSelection(e, r, n), entityUrl: i };
                            }
                            return { editorStateWithLinkSelected: e, entityUrl: void 0 };
                        }),
                        (this._getEditorStateWithTextSelection = (e, t, n) => {
                            const o = e.getSelection(),
                                r = o.merge(o.getIsBackward() ? { anchorOffset: n, focusOffset: t } : { anchorOffset: t, focusOffset: n });
                            return i.EditorState.acceptSelection(e, r);
                        }),
                        (this._getSelectedText = (e) => {
                            const t = e.getSelection(),
                                n = e.getCurrentContent(),
                                o = t.getStartKey();
                            if (o === t.getEndKey()) {
                                const e = n.getBlockForKey(o),
                                    r = t.getStartOffset(),
                                    i = t.getEndOffset();
                                return e.getText().slice(r, i) || "";
                            }
                        }),
                        (this._getSelectedEntityWithRange = () => {
                            const {
                                richTextInputContext: { editorState: e },
                            } = this.props;
                            if (e) {
                                const t = e.getSelection(),
                                    n = e.getCurrentContent(),
                                    o = t.getAnchorKey(),
                                    r = n.getBlockForKey(o),
                                    i = r.getEntityAt(t.getAnchorOffset()),
                                    s = r.getEntityAt(t.getFocusOffset());
                                if (i && i === s) {
                                    const e = r.getCharacterList().toArray(),
                                        t = (e) => e?.getEntity() === i;
                                    return { start: (0, d.Z)(e, t), end: (0, h.Z)(e, t) + 1, entity: n.getEntity(i) };
                                }
                            }
                        }),
                        (this._getSelectedTextSize = () => {
                            const {
                                    richTextInputContext: { editorState: e },
                                    textSizesOverride: t,
                                } = this.props,
                                n = e ? i.RichUtils.getCurrentBlockType(e) : void 0;
                            return (t || D.iH).find((e) => e.blockType === n) || D.Tr;
                        }),
                        (this._toggleTextStyle = (e) => {
                            const {
                                onChange: t,
                                richTextInputContext: { editorState: n },
                            } = this.props;
                            return (o) => () => {
                                if (!n || "function" != typeof t) return;
                                const r = e(n, o);
                                t(r);
                            };
                        }),
                        (this._handleChangeTextSize = (e) => {
                            this._toggleTextStyle(i.RichUtils.toggleBlockType)(e.blockType)();
                        }),
                        (this._handleIncreaseTextSize = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                n = this._getSelectedTextSize(),
                                o = t.indexOf(n);
                            if (0 !== o) {
                                const e = t[o - 1];
                                this._handleChangeTextSize(e);
                            }
                        }),
                        (this._handleDecreaseTextSize = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                n = this._getSelectedTextSize(),
                                o = t.indexOf(n);
                            if (o !== t.length - 1) {
                                const e = t[o + 1];
                                this._handleChangeTextSize(e);
                            }
                        }),
                        (this._handleHideTextSizeMenu = () => {
                            this.setState({ showTextSizeMenu: !1 });
                        }),
                        (this._handleShowTextSizeMenu = () => {
                            this.setState({ showTextSizeMenu: !0 });
                        }),
                        (this._handleToggleLinkSheet = () => {
                            const { showLinkSheet: e } = this.state;
                            this.setState({ showLinkSheet: !e });
                        }),
                        (this._handleAddLink =
                            (e, t) =>
                            ({ source: n, text: o }) => {
                                const { onChange: r } = this.props;
                                if (r && n) {
                                    const s = e.getSelection(),
                                        a = t ? i.EditorState.push(e, i.Modifier.replaceText(e.getCurrentContent(), s, o || n), "insert-characters") : e,
                                        l = a.getSelection(),
                                        c = this._getEditorStateWithTextSelection(a, s.getStartOffset(), l.getEndOffset()),
                                        d = c
                                            .getCurrentContent()
                                            .createEntity(D.Qm, "MUTABLE", { url: this._getUrlWithProtocol(n) })
                                            .getLastCreatedEntityKey();
                                    r(i.EditorState.forceSelection(i.RichUtils.toggleLink(c, c.getSelection(), d), l));
                                }
                                this._handleToggleLinkSheet();
                            }),
                        (this._handleRemoveLink = () => {
                            const {
                                onChange: e,
                                richTextInputContext: { editorState: t },
                            } = this.props;
                            if (e && t) {
                                const { editorStateWithLinkSelected: n } = this._getEditorStateWithLinkSelected(t);
                                e(i.RichUtils.toggleLink(n, n.getSelection(), null));
                            }
                        }),
                        (this._handleLinkPopoverOpen = () => {
                            this.isPopoverShown = !0;
                        }),
                        (this._handleLinkPopoverClose = () => {
                            this.isPopoverShown = !1;
                        }),
                        (this._handleReturn = (e) => {
                            const {
                                handleReturn: t,
                                onChange: n,
                                richTextInputContext: { editorState: o },
                            } = this.props;
                            if (n && o) {
                                if (i.KeyBindingUtil.isSoftNewlineEvent(e)) {
                                    return n(i.RichUtils.insertSoftNewline(o)), "handled";
                                }
                                const t = o.getSelection(),
                                    r = o.getCurrentContent(),
                                    s = t.getStartKey(),
                                    a = s === t.getEndKey() ? r.getBlockForKey(s) : void 0;
                                if (a?.getType() === D.P7.blockquote && 0 === a?.getLength()) {
                                    return n(i.RichUtils.toggleBlockType(o, D.P7.blockquote)), "handled";
                                }
                            }
                            return t?.(e) || "not-handled";
                        }),
                        (this._handleOnChange = (e) => {
                            const { onChange: t } = this.props;
                            if (t) {
                                t("insert-fragment" === e.getLastChangeType() ? this._removeInvalidStyles(e) : e);
                            }
                        }),
                        (this._removeInvalidStyles = (e) => {
                            const t = e.getCurrentContent(),
                                n = t.getBlockMap(),
                                o = n.map(this._removeInvalidStylesFromContentBlock),
                                r = t.merge({ blockMap: n.merge(o) });
                            return i.EditorState.push(e, r, "change-block-data");
                        }),
                        (this._removeInvalidStylesFromContentBlock = (e) => {
                            const t = [...(0, u.Z)(D.fR), ...(0, u.Z)(D.P7)],
                                n = e.getCharacterList().map((e) =>
                                    e
                                        .getStyle()
                                        .filter((e) => !t?.includes(e))
                                        .reduce((e, t) => i.CharacterMetadata.removeStyle(e, t), e),
                                );
                            return (t?.includes(e.getType()) ? e : e.set("type", "unstyled")).set("characterList", n);
                        }),
                        (this._getUrlWithProtocol = (e) => (e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`)),
                        (this._getSourceInputErrorText = (e) => (e ? ((0, g.Z)(e, !1, !1) ? void 0 : j) : N)),
                        (this._renderToolbarButtonGroup = (e, t) => {
                            const {
                                    richTextInputContext: { editorState: n },
                                } = this.props,
                                a = n?.getCurrentInlineStyle(),
                                l = n ? i.RichUtils.getCurrentBlockType(n) : void 0;
                            return r.createElement(
                                s.Z,
                                { style: q.buttonGroup },
                                t ? null : r.createElement(z, { style: q.separatorMargin }),
                                e.map((e, t) => {
                                    const { Icon: n, buttonTestId: i, key: s, renderActionMenu: c, ...d } = e,
                                        h = this._isEditorFocused() && a?.contains(s),
                                        u = this._isEditorFocused() && s === l,
                                        p = s === D.Qm && this.isPopoverShown,
                                        g = h || u || p,
                                        m = r.createElement(n, { style: g ? void 0 : q.iconGray });
                                    return r.createElement(r.Fragment, { key: s }, r.createElement(y.ZP, (0, o.Z)({ icon: m, key: s, preventFocusShift: this._isEditorFocused(), size: "small", testID: i, type: g ? "brandText" : "primaryText" }, d)), c && c());
                                }),
                            );
                        }),
                        (this._renderTextSizeMenu = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                n = this._getSelectedTextSize(),
                                o = t.map((e) => ({ isSelected: n === e, onClick: () => this._handleChangeTextSize(e), selectable: !0, text: e.component }));
                            return r.createElement(m.Z, { items: o, onCloseRequested: this._handleHideTextSizeMenu, preventFocusShift: this._isEditorFocused(), shouldCloseOnClick: !0 });
                        }),
                        (this._renderLinkPopoverContent = (e, t) => (n) => {
                            const o = { external: !0, openInSameFrame: !1, pathname: t };
                            return r.createElement(
                                s.Z,
                                { style: q.linkPopoverContent },
                                r.createElement(f.ZP, { numberOfLines: 2, style: q.bottomMargin, weight: "bold" }, e),
                                r.createElement(M.Z, { link: o, style: q.bottomMargin }, t),
                                r.createElement(
                                    s.Z,
                                    { style: q.linkPopoverButtons },
                                    r.createElement(
                                        y.ZP,
                                        {
                                            onPress: () => {
                                                n(), this._handleToggleLinkSheet();
                                            },
                                            type: "primaryFilled",
                                        },
                                        K,
                                    ),
                                    r.createElement(
                                        y.ZP,
                                        {
                                            onPress: () => {
                                                n(), this._handleRemoveLink();
                                            },
                                            style: q.removeLinkButtonMargin,
                                        },
                                        W,
                                    ),
                                ),
                            );
                        }),
                        (this._renderLinkSheet = () => {
                            const {
                                richTextInputContext: { editorState: e },
                            } = this.props;
                            if (e) {
                                const { editorStateWithLinkSelected: t, entityUrl: n } = this._getEditorStateWithLinkSelected(e),
                                    o = this._getSelectedText(t);
                                return r.createElement(T, { buttonLabelOverride: n ? V : G, fields: { source: { label: U, initialValue: n || "", getErrorText: this._getSourceInputErrorText }, ...(void 0 !== o ? { text: { label: H, initialValue: o } } : {}) }, onClose: this._handleToggleLinkSheet, onSave: this._handleAddLink(t, void 0 !== o), sheetTitle: n ? A : O });
                            }
                        }),
                        (this._handleInTextShortcut = (e) => (t, n, o) => {
                            const r = e.getSelection(),
                                s = i.Modifier.insertText(e.getCurrentContent(), r, o);
                            let a = i.EditorState.push(e, s, "insert-characters");
                            const l = i.Modifier.removeRange(a.getCurrentContent(), a.getSelection().merge({ anchorOffset: 0, focusOffset: n.length + o.length }), "backward"),
                                c = i.Modifier.setBlockType(l, a.getSelection().merge({ anchorOffset: 0, focusOffset: 0 }), t);
                            return (a = i.EditorState.push(a, c, "change-block-type")), this.props.onChange?.(a), "handled";
                        }),
                        (this._handleBeforeInput = (e, t) => {
                            const { allowInTextShortcuts: n } = this.props.richTextInputContext;
                            if (!n || " " !== e) return "not-handled";
                            const o = t.getSelection(),
                                r = t.getCurrentContent().getBlockForKey(o.getStartKey()),
                                i = r.getType(),
                                s = r.getText().slice(0, o.getFocusOffset()),
                                a = this._handleInTextShortcut(t);
                            if ("unstyled" !== i) return "not-handled";
                            for (const [t, n] of Object.entries(Q)) if (n.includes(s)) return a(t, s, e);
                            return "not-handled";
                        }),
                        (this._setFieldTextInputRef = (e) => {
                            this.fieldTextInput = e;
                        }),
                        (this.state = { showLinkSheet: !1, showTextSizeMenu: !1 });
                    const t = [];
                    e.limitedRichText || (t.push((0, Z.U_)(this._renderLinkPopoverContent, this._handleLinkPopoverOpen, this._handleLinkPopoverClose)), t.push((0, Z.NA)(p.Z, e.paragraphFontSizeOverride))), t.push(Z.aF), t.push(Z.RU), (this.decorator = new i.CompositeDecorator(t));
                }
                componentDidMount() {
                    this._setDecorator(), L.fH(F.c, F.n);
                }
                componentDidUpdate() {
                    const {
                        richTextInputContext: { editorState: e },
                    } = this.props;
                    e && e.getDecorator() !== this.decorator && this._setDecorator();
                }
                render() {
                    const { additionalToolbarButtonConfigs: e, emojiPickerButton: t, errorText: n, inputStyle: a, isInputFullWidth: l, keyCommandHandlers: c, limitedRichText: d, middleControl: h, onChange: u, paragraphFontSizeOverride: p, placeholder: g, richTextInputContext: m, showError: b, textSizesOverride: x, toolbarRightControl: k, toolbarStyle: _, withAppBar: E, ...T } = this.props,
                        { showLinkSheet: F, showTextSizeMenu: L } = this.state,
                        M = (0, D.b$)(this._toggleTextStyle(i.RichUtils.toggleInlineStyle)),
                        Z = (0, D.QF)(this._toggleTextStyle(i.RichUtils.toggleBlockType)),
                        R = (0, D.lD)(this._toggleTextStyle(i.RichUtils.toggleBlockType)),
                        O = (0, D.KJ)(this._handleToggleLinkSheet),
                        A = this._getSelectedTextSize(),
                        K = { ...m, blockStyleFn: (0, D.su)(!1, m.blockStyleFn), stripPastedStyles: !1 },
                        W = Object.fromEntries([...M, ...(d ? [] : O), ...R, ...(d ? [] : Z)].map((e) => [e.key.toLowerCase(), e.onPress])),
                        H = { [D.u4]: this._handleIncreaseTextSize, [D.db]: this._handleDecreaseTextSize },
                        U = { ...W, ...(d ? {} : H), ...this._getBackspaceAndDeleteCommandHandlers() },
                        V = c ? { ...U, ...c } : U,
                        G = this._handleOnChange,
                        N = C.Z.hexToCss(P.default.theme.colors.navigationBackground, 0),
                        j = C.Z.hexToCss(P.default.theme.colors.navigationBackground, 1),
                        Q = [q.toolbar_container, this.props.withAppBar ? q.toolbar_container_with_app_bar : q.toolbar_container_no_padding];
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            s.Z,
                            { style: Q },
                            F ? this._renderLinkSheet() : null,
                            b && n ? r.createElement(v.Z.Danger, { text: n, withIcon: !0 }) : null,
                            r.createElement(
                                s.Z,
                                { style: [q.toolbar, _] },
                                J,
                                r.createElement(
                                    s.Z,
                                    { id: "toolbar-styling-buttons", style: q.toolbar_styling_buttons },
                                    this._renderToolbarButtonGroup(M, !0),
                                    d
                                        ? null
                                        : r.createElement(
                                              r.Fragment,
                                              null,
                                              r.createElement(z, { style: q.separatorMargin }),
                                              r.createElement(w.Z, { interactiveStyles: null, onClick: this._handleShowTextSizeMenu, preventFocusShift: this._isEditorFocused(), style: q.textSizeSelection }, (e) => r.createElement(r.Fragment, null, r.createElement(f.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1" }, A.label), r.createElement(y.ZP, { icon: X, interactivityState: e, size: "small", type: "primaryText" }), L ? this._renderTextSizeMenu() : null)),
                                          ),
                                    d ? null : this._renderToolbarButtonGroup(Z),
                                    this._renderToolbarButtonGroup(R),
                                    d ? null : this._renderToolbarButtonGroup(O),
                                    t ? t() : null,
                                    e ? this._renderToolbarButtonGroup(e) : null,
                                ),
                                r.createElement(s.Z, { style: q.toolbar_right_control }, k, r.createElement(I.Z, { angle: 90, angleUnit: "deg", colors: [N, j, j], locations: [0, 0.75, 1], style: q.toolbar_styling_buttons_fadeout_right })),
                            ),
                            r.createElement(I.Z, { angle: 270, angleUnit: "deg", colors: [N, j, j], locations: [0, 0.75, 1], style: q.toolbar_styling_buttons_fadeout_left }),
                        ),
                        r.createElement(S.Z, { isFullWidth: l, withWideContainer: !0 }, h, r.createElement(B.Z, (0, o.Z)({ handleBeforeInput: this._handleBeforeInput, handleReturn: this._handleReturn, inputStyle: [q.input, a], keyBindingFn: this._keyBindingFn, keyCommandHandlers: V, onChange: G, placeholder: this._shouldShowPlaceholder() ? g : void 0, ref: this._setFieldTextInputRef, richTextInputContext: K }, T))),
                    );
                }
                focus() {
                    this.fieldTextInput?.focus();
                }
                getTextInputHeight() {
                    return this.fieldTextInput?.getTextInputHeight();
                }
            }
            $.defaultProps = { leftAligned: !0, multiline: !0, styleType: "selection" };
            const q = P.default.create((e) => {
                    const t = e.componentZIndices.appBarZIndex,
                        n = { position: "absolute", width: e.spacesPx.space48, height: "100%", pointerEvents: "none" };
                    return { bottomMargin: { marginBottom: e.spaces.space8 }, buttonGroup: { flexDirection: "row" }, iconGray: { color: e.colors.gray700 }, input: { paddingHorizontal: 0, paddingBottom: 0 }, linkPopoverButtons: { flexDirection: "row", marginTop: e.spaces.space8 }, linkPopoverContent: { marginHorizontal: e.spaces.space24, marginVertical: e.spaces.space24 }, removeLinkButtonMargin: { marginStart: e.spaces.space8 }, separatorMargin: { marginHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, textSizeSelection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginStart: e.spaces.space8, marginEnd: e.spaces.space4, width: `calc(${e.spaces.space80} + ${e.spaces.space32})` }, toolbar_container_no_padding: { top: 0 }, toolbar_container_with_app_bar: { top: e.componentDimensions.appBarHeightPx - 0.5 }, toolbar_container: { zIndex: t, position: "sticky", width: "100%", backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, toolbar: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space4 }, toolbar_styling_buttons: { flex: 1, flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space48, overflowX: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", alignItems: "center", paddingVertical: e.spaces.space2 }, toolbar_styling_buttons_fadeout_right: { ...n, start: -1 * n.width }, toolbar_styling_buttons_fadeout_left: { ...n, start: 0, width: e.spacesPx.space16, zIndex: t + 1 }, toolbar_right_control: { flexShrink: 1, flexDirection: "row", alignItems: "center", paddingEnd: e.spaces.space16 } };
                }),
                X = r.createElement(c.default, { style: q.iconGray }),
                J = r.createElement("style", null, "\n    #toolbar-styling-buttons *::-webkit-scrollbar {\n      display: none;\n    }\n  ");
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(807896),
                r = n(202784),
                i = (n(136728), n(301503)),
                s = n(516951),
                a = n(950822),
                l = n(233184),
                c = n(745153),
                d = n(392237),
                h = n(989272),
                u = (n(571372), n(370751)),
                p = n(122375),
                g = n(835305),
                m = n(899492);
            function f(e) {
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
                                    let o,
                                        r = t;
                                    for (; (o = n.exec(t)); ) {
                                        const e = o.groups?.emoji;
                                        if (!e) continue;
                                        const t = o.index,
                                            i = n.lastIndex;
                                        r = [r.substring(0, t), e, r.substring(i, r.length)].join("");
                                    }
                                    e.html = r;
                                })(e),
                                !e.html)
                            )
                                return null;
                            const t = (0, i.convertFromHTML)(e.html);
                            if (!t || !Array.isArray(t.contentBlocks)) return null;
                            const n = i.ContentState.createFromBlockArray(t.contentBlocks, t.entityMap);
                            let o = (0, i.convertToRaw)(n);
                            e.longformRichTextTransform ||
                                (o.blocks = (function (e, t) {
                                    const n = /[\n|\r]*?[^\n|^\r]+(?:[\n|\r]+)?/g;
                                    let o;
                                    const r = [];
                                    for (; (o = n.exec(e.text)); ) {
                                        const t = o.index,
                                            i = n.lastIndex,
                                            s = e.text.substring(t, i),
                                            a = x(s, k.start_newline),
                                            l = x(s, k.end_newline);
                                        r.push([a, l]);
                                    }
                                    const s = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, o] = r[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && o && o++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ..._(), key: e };
                                            s.push(t);
                                        }
                                        s.push(t.blocks[e]);
                                        for (let e = 0; e < o; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ..._(), key: e };
                                            s.push(t);
                                        }
                                    }
                                    return s;
                                })(e, o));
                            o = (function (e, t) {
                                const n = [];
                                for (const o of t.blocks)
                                    switch (o.type) {
                                        case p.Wo:
                                            n.push(y(e, o));
                                            break;
                                        case p.p8:
                                        case p.r$:
                                        case p.Mm:
                                        case p.Z4:
                                        case p.Re:
                                            if (e.allowExtendedPasteStyles) n.push(y(e, o));
                                            else {
                                                const t = { ...o, type: p.Wo };
                                                n.push(y(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...o, type: p.Wo };
                                            n.push(y(e, t));
                                        }
                                    }
                                return { blocks: n, entityMap: e.longformRichTextTransform ? t.entityMap : {} };
                            })(e, o);
                            const r = (0, i.convertFromRaw)(o);
                            return r;
                        })(e);
                    } catch (t) {
                        const n = "warning",
                            { html: o, text: r } = e,
                            i = { extra: { text: r, html: o, error: t }, level: n };
                        l.Z.report(new Error("[RichTextInput::handle_paste] html error"), i);
                    }
                return !t && e.text && (t = i.ContentState.createFromText(e.text)), t || null;
            }
            function y(e, t) {
                const n = t.inlineStyleRanges || [],
                    o = [],
                    r = e.longformRichTextTransform ? b : S;
                for (const t of n) !e.stripPastedStyles && r.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const C = [g.DraftJS.Bold, g.DraftJS.Italic],
                S = (0, u.Z)(C),
                b = (0, u.Z)([...S, g.DraftJS.Strikethrough]);
            function x(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [o] = n;
                return o.length - 1;
            }
            const k = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function _() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class E extends r.Component {
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
                            return i.EditorState.acceptSelection(e, new i.SelectionState({ anchorKey: t, anchorOffset: 0, focusKey: t, focusOffset: 0, isBackward: !1 }));
                        }),
                        (this._setFocusToStart = () => {
                            const e = this._setSelectionToStart();
                            return i.EditorState.forceSelection(e, e.getSelection());
                        }),
                        (this._setFocusToEnd = () => {
                            const { autoFocus: e, editorState: t, onChange: n } = this.props;
                            n?.(e ? i.EditorState.moveFocusToEnd(t) : i.EditorState.moveSelectionToEnd(t));
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
                            const { multiline: o, onChange: r } = this.props;
                            if (!r) return "not-handled";
                            const { allowExtendedPasteStyles: s, longformRichTextTransform: a, stripPastedStyles: l } = this.props;
                            let c = f({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: s, longformRichTextTransform: a });
                            if (!c) return "not-handled";
                            if (!o) {
                                const e = (function (e) {
                                    return e.replace(v.all_newlines, " ");
                                })(c.getPlainText());
                                c = i.ContentState.createFromText(e);
                            }
                            return (c = i.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), c.getBlockMap())), r(i.EditorState.push(n, c, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: o } = this.props,
                                { hasCommandModifier: r } = i.KeyBindingUtil;
                            return e.keyCode === B.enter && r(e) ? o : e.keyCode === B.esc ? t : n?.(e) || (0, i.getDefaultKeyBinding)(e);
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
                            const e = w[this.props.appTextSize],
                                t = d.default.theme.lineHeightsPx[e];
                            let n = 1,
                                o = 1;
                            this.props.multiline && (this.props.numberOfLines && (n = this.props.numberOfLines), this.props.maxNumberOfLines && (o = this.props.maxNumberOfLines));
                            const r = n * t,
                                i = o * t;
                            return this.props.withMaxHeight ? { minHeight: r, maxHeight: i, overflowX: "hidden", overflowY: "auto" } : { minHeight: r, height: "100%" };
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
                    return r.createElement(T, { className: [!e && h._i.single_line, this.state.containerClass, this.props.withFormatInline && h._i.format_inline].join(" ") }, r.createElement(T, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: o ? `${o}RichTextInputContainer` : void 0 }, r.createElement(i.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [c.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: d.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: o }), this.props.dragPlaceholder));
                }
            }
            E.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: s.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const T = (e) => (0, a.Z)("div", e),
                B = { enter: 13, esc: 27 };
            const v = { all_newlines: /[\r\n]/g },
                w = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                I = r.forwardRef((e, t) =>
                    r.createElement(
                        E,
                        (0, o.Z)({}, e, {
                            onFocus: function (t) {
                                e.onFocus && e.onFocus(t);
                            },
                            ref: t,
                        }),
                    ),
                );
        },
        344175: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(325686),
                i = n(370006),
                s = n(786998),
                a = n(731708),
                l = n(154003),
                c = n(157130),
                d = n(138099);
            const h = n(392237).default.create((e) => ({ sheet: { maxHeight: "100vh" }, appBar: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, buttonContainer: { flexDirection: "row-reverse" }, secondaryButton: { marginEnd: e.spaces.space8 }, content: { flex: 1, overflowY: "auto" }, popoverContent: { padding: e.spaces.space20 } })),
                u = ({ children: e, enableMaskForDismiss: t = !0, onBackClick: n, onClose: u, primaryButtonConfig: p, secondaryButtonConfig: g, style: m, title: f, withKeyboardNavigation: y, withPassthroughEvents: C }) => {
                    const [S, b] = o.useState(!1),
                        x = () => {
                            k(), p?.onClick(k);
                        },
                        k = () => {
                            b((e) => !e);
                        },
                        _ = o.createElement(i.Z, { backButtonType: n ? "back" : "close", onClick: n || u }),
                        E = g
                            ? o.createElement(
                                  l.ZP,
                                  {
                                      "aria-label": g.label,
                                      onClick: () => {
                                          g?.onClick();
                                      },
                                      size: "small",
                                      style: h.secondaryButton,
                                      type: g.type || "primaryOutlined",
                                  },
                                  g.label,
                              )
                            : null,
                        T = o.createElement(
                            r.Z,
                            { style: h.buttonContainer },
                            (() => {
                                if (p) {
                                    const { forceDisabled: t, label: n, popoverMessage: r, type: i } = p,
                                        s = o.createElement(l.ZP, { "aria-label": n, disabled: S || t, onClick: x, size: "small", type: i || "primaryFilled" }, n);
                                    return r ? o.createElement(c.Z, { enableHover: !0, renderContent: ((e = r), () => o.createElement(a.ZP, { style: h.popoverContent }, e)), withArrow: !0 }, s) : s;
                                }
                                return null;
                                var e;
                            })(),
                            E,
                        );
                    return o.createElement(d.Z, { enableMaskForDismiss: t, onMaskClick: u, style: [h.sheet, m], type: "full", withKeyboardNavigation: y, withMask: !0, withPassthroughEvents: C }, o.createElement(s.Z, { leftControl: _, rightControl: T, style: h.appBar, title: f }), o.createElement(r.Z, { style: h.content }, e));
                };
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        266151: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.SettingsExtendedProfile~bundle.WorkHistory~ondemand.Verified.fcc9f11a.js.map
