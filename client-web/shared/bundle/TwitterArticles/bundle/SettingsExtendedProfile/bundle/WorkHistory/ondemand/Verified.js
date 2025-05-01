"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.SettingsExtendedProfile~bundle.WorkHistory~ondemand.Verified"],
    {
        385264: (e, t, o) => {
            o.d(t, { Q: () => n });
            const n = Object.freeze({ Media: "Media", GIFs: "GIFs", Posts: "Posts", Markdown: "Markdown", Divider: "Divider", Code: "Code", LaTeX: "LaTeX" });
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: u, position: p, rightControl: g, secondaryBar: m, style: y, subtitle: f, title: C, titleDomId: S, titleIconCell: b, titleIconCellSize: k, withBackground: x, withWideContainer: _ } = this.props,
                        { isModal: E } = this.context,
                        T = i ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, E, !!m);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: T, middleControl: u, position: h(p, E, r), rightControl: g, style: y, subtitle: f, title: C, titleDomId: S, titleIconCell: b, titleIconCellSize: k, withBackground: B, withWideContainer: _ }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => m, w: () => p });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                h = o(449067),
                u = o(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, rightControl: y, secondaryBar: f, subtitle: C, title: S } = this.props,
                                { isModal: b } = this.context;
                            return n.createElement(r.Z, { style: b ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (b ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !b, hideBackButton: s, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, ref: e, rightControl: y, secondaryBar: f, style: [b && g.appBarModal, t], subtitle: C, title: S, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: m, withoutBottomBarMobile: y } = this.props,
                        { isModal: f } = this.context,
                        C = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(h.Z.Configure, { documentTitle: s, headerless: !0, title: m }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, f && g.rootModal] }, !f && C, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [g.container, f && g.containerModal, a] }, f ? n.createElement(u.Z, { style: g.viewport }, C, o) : o), t ? n.createElement(r.Z, { style: [g.bottomBarModal, !f && !y && g.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const g = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        874111: (e, t, o) => {
            o.d(t, { Ff: () => w, KU: () => T, O7: () => P, QX: () => M, Sc: () => v, Ve: () => _, Vn: () => O, WE: () => Z, WF: () => b, c6: () => k, ci: () => S, eE: () => x, iT: () => C, ii: () => L, jB: () => F, k: () => H, mA: () => I, r_: () => B, wq: () => D });
            o(136728);
            var n = o(301503),
                r = o(674132),
                i = o.n(r),
                a = o(473026),
                s = o(937450),
                l = o(266151),
                c = o(498720),
                d = o(506868),
                h = o(38716),
                u = o(794057),
                p = o(385264);
            const g = (e, t, o) => {
                    const r = f(e, m(e)),
                        i = n.AtomicBlockUtils.insertAtomicBlock(r, t, o),
                        a = y(i, t);
                    if (a) {
                        const e = i.getCurrentContent().getBlockBefore(a),
                            t = i.getCurrentContent().getBlockAfter(a),
                            o = t?.getKey() === i.getCurrentContent().getLastBlock().getKey(),
                            n = e?.getText() ? i : w(i, e?.getKey()),
                            r = o ? n : w(n, t?.getKey()),
                            s = r.getCurrentContent().getBlockAfter(a);
                        return f(r, s);
                    }
                    return i;
                },
                m = (e) => {
                    const t = e.getSelection();
                    return e.getCurrentContent().getBlockForKey(t.getStartKey());
                },
                y = (e, t) => {
                    const o = e
                        .getCurrentContent()
                        .getBlocksAsArray()
                        .find((e) => e.getCharacterList().some((e) => e.getEntity() === t));
                    return o?.getKey();
                },
                f = (e, t) => {
                    if (!t) return e;
                    const o = t.getKey(),
                        r = t.getText().length,
                        i = new n.SelectionState({ anchorKey: o, anchorOffset: r, focusKey: o, focusOffset: r, hasFocus: !0, isBackward: !1 });
                    return n.EditorState.acceptSelection(e, i);
                },
                C = (e) => e.getCurrentContent().getPlainText(),
                S = (e) => e.getPlainText().trim(),
                b = (e) =>
                    C(e)
                        .split(/\s+/)
                        .filter((e) => !!e).length,
                k = (e) => C(e).length,
                x = (e) => e.getCurrentContent().getBlocksAsArray().length,
                _ = (e, t) => t.reduce((e, t) => E(e, t), e),
                E = (e, t) => {
                    const o = e.getCurrentContent().createEntity(u.DC.TWEET, u.pc.IMMUTABLE, { tweetId: t }),
                        r = o.getLastCreatedEntityKey(),
                        i = n.EditorState.set(e, { currentContent: o });
                    return g(i, r, " ");
                },
                T = (e) => (e.mediaFile?.isImage ? u._e.IMAGE : e.mediaFile?.isVideo ? u._e.VIDEO : u._e.GIF),
                B = (e, t) => {
                    const o = e.getCurrentContent(),
                        r = t.map((e) => ({ mediaCategory: T(e), localMediaId: e.id, mediaId: e.uploadId })),
                        i = o.createEntity(u.DC.MEDIA, u.pc.IMMUTABLE, { mediaItems: r }),
                        a = i.getLastCreatedEntityKey(),
                        s = i.mergeEntityData(a, { entityKey: a }),
                        l = n.EditorState.set(e, { currentContent: s });
                    return { newEditorState: g(l, a, " "), entityKey: a };
                },
                v = (e, t, o, r) => {
                    const i = e.getCurrentContent(),
                        a = i.getEntity(t).getData(),
                        { mediaItems: s } = a,
                        l = s.findIndex((e) => e.mediaId === o),
                        c = s[l];
                    if (c) {
                        const o = { ...c, localMediaId: r.id, mediaId: r.uploadId },
                            a = [...s.slice(0, l), o, ...s.slice(l + 1)],
                            d = i.mergeEntityData(t, { mediaItems: a });
                        return n.EditorState.push(e, d, "change-block-data");
                    }
                    return e;
                },
                I = (e, t, o, r) => {
                    const i = e.getCurrentContent(),
                        a = i
                            .getEntity(t)
                            .getData()
                            .mediaItems.filter((e) => !(e.localMediaId === o || r[e.mediaId] === o)),
                        s = i.mergeEntityData(t, { mediaItems: a });
                    return n.EditorState.push(e, s, "change-block-data");
                },
                w = (e, t) => {
                    if (!t) return e;
                    const o = e.getCurrentContent(),
                        r = o.getBlockAfter(t),
                        i = o.getBlockMap().filter((e) => e.getKey() !== t),
                        a = o.merge({ blockMap: i });
                    return f(n.EditorState.push(e, a, "change-block-data"), r);
                },
                L = (e) => {
                    const t = e.getCurrentContent(),
                        o = [];
                    return (
                        t.getBlocksAsArray().forEach((e) => {
                            let t = null;
                            e.findEntityRanges(
                                (e) => null !== e.getEntity() && ((t = e.getEntity()), !0),
                                () => {
                                    t && o.push(t);
                                },
                            );
                        }),
                        o
                    );
                },
                M = (e, t, o) => {
                    const r = e.getCurrentContent().mergeEntityData(t, o),
                        i = n.EditorState.push(e, r, "change-block-data"),
                        a = n.SelectionState.createEmpty(m(e).getKey());
                    return n.EditorState.forceSelection(i, a);
                },
                Z = (e, t, o) => {
                    const n = o.map((e) => t[e.mediaId]).map((t) => e.find((e) => e.id === t) ?? null);
                    return n.some((e) => !e) ? o.map((t) => e.find((e) => e.id === t.localMediaId) ?? null) : n;
                },
                F = (e, t) => {
                    const o = e.getCurrentContent().createEntity(u.DC.MARKDOWN, u.pc.MUTABLE, { markdown: t }),
                        r = o.getLastCreatedEntityKey(),
                        i = n.EditorState.set(e, { currentContent: o });
                    return g(i, r, " ");
                },
                P = (e) => {
                    const t = e.getCurrentContent().createEntity(u.DC.DIVIDER, u.pc.IMMUTABLE),
                        o = t.getLastCreatedEntityKey(),
                        r = n.EditorState.set(e, { currentContent: t });
                    return g(r, o, " ");
                },
                D = (e, t) => {
                    const o = e.getCurrentContent().createEntity(u.DC.LATEX, u.pc.IMMUTABLE),
                        r = o.getLastCreatedEntityKey(),
                        i = n.EditorState.set(e, { currentContent: o });
                    return g(i, r, t);
                },
                O = (e, t, o) => {
                    const r = e.getCurrentContent(),
                        i = r.getBlockForKey(t),
                        a = i.getText().length,
                        s = i.getEntityAt(0),
                        l = n.SelectionState.createEmpty(t).merge({ anchorOffset: 0, focusOffset: a }),
                        c = n.Modifier.replaceText(r, l, o),
                        d = l.merge({ anchorOffset: 0, focusOffset: o.length }),
                        h = n.Modifier.applyEntity(c, d, s);
                    return n.EditorState.set(e, { currentContent: h });
                },
                R = i().add55c98,
                A = i().i0db46e6,
                z = i().fa4e68ca,
                W = i().c80940f4,
                K = i().i89195ea,
                U = i().cfeb3f86,
                V = i().ad9e175c,
                H = [
                    { id: p.Q.Media, text: R, Icon: a.default },
                    { id: p.Q.GIFs, text: A, Icon: s.default },
                    { id: p.Q.Posts, text: z, Icon: l.default },
                    { id: p.Q.Markdown, text: W, Icon: c.default },
                    { id: p.Q.Divider, text: K, Icon: d.default },
                    { id: p.Q.Code, text: U, Icon: c.default },
                    { id: p.Q.LaTeX, text: V, Icon: h.default },
                ];
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== i) || n !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        297256: (e, t, o) => {
            o.d(t, { b: () => j });
            var n = o(807896),
                r = (o(136728), o(202784)),
                i = o(301503),
                a = o(325686),
                s = o(674132),
                l = o.n(s),
                c = o(487552),
                d = o(337637),
                h = o(675320),
                u = o(161821),
                p = o(516951),
                g = o(665285),
                m = o(811176),
                y = o(731708),
                f = o(154003),
                C = o(757483),
                S = o(108362),
                b = o(595088),
                k = o(716406),
                x = o(855488),
                _ = o(344175);
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
                                (0, b.Z)(e).map(([e, o]) => {
                                    const { getErrorText: i, initialValue: a, numberOfLines: s, ...l } = o,
                                        c = i?.(t[e]);
                                    return r.createElement(x.Z, (0, n.Z)({ errorText: c, invalid: !!c, key: e, multiline: !!s && s > 1, name: e, numberOfLines: s, onChange: this._handleFieldChanged(e), value: t[e] || "" }, l));
                                }),
                            );
                        }),
                        (this._handleFieldChanged = (e) => (t) => {
                            const { fieldValues: o } = this.state,
                                n = { ...o, [e]: t.target.value };
                            this.setState({ fieldValues: n });
                        }),
                        (this._handleSave = (e) => {
                            const { onSave: t } = this.props,
                                { fieldValues: o } = this.state;
                            t(o, e);
                        }),
                        (this._isSaveEnabled = () => {
                            const { fields: e, isSaveDisabled: t } = this.props,
                                { fieldValues: o } = this.state,
                                n = (0, b.Z)(o),
                                r = n.some(([t, o]) => o !== e[t].initialValue),
                                i = n.some(([t, o]) => e[t].validLength && o.length > e[t].validLength),
                                a = n.some(([t, o]) => !!e[t].getErrorText?.(o));
                            return r && !i && !a && !(t && t(o));
                        }),
                        (this.state = { fieldValues: (0, k.Z)(e.fields, (e) => e.initialValue) });
                }
                render() {
                    const { buttonLabelOverride: e, onClose: t, sheetTitle: o } = this.props;
                    return r.createElement(_.Z, { onClose: t, primaryButtonConfig: { label: e || E, forceDisabled: !this._isSaveEnabled(), onClick: this._handleSave }, title: o, withKeyboardNavigation: !0 }, this._render());
                }
            }
            var B = o(371344),
                v = o(40610),
                I = o(530732),
                w = o(215337),
                L = o(135904),
                M = o(989272),
                Z = o(855125),
                F = o(202253),
                P = o(392237),
                D = o(779802);
            const O = P.default.create((e) => ({ separator: { borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray200, marginVertical: e.spaces.space8 } })),
                R = ({ style: e }) => r.createElement(a.Z, { style: [O.separator, e] }),
                A = l().a6a3d496,
                z = l().acce6978,
                W = l().f5e8f526,
                K = l().h517e8d8,
                U = l().a30ae58e,
                V = l().da38c958,
                H = l().fee0a8bc,
                G = l().d5d57678,
                Q = l().ec822028,
                N = l().ebc5d2cc,
                $ = { [D.P7.bulleted]: ["-", "*", "+"], [D.P7.numbered]: ["1.", "1)", "1]"], [D.P7.blockquote]: [">", ">>"], [D.P7.header1]: ["#"], [D.P7.header2]: ["##"] };
            class j extends r.Component {
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
                                o = i.KeyBindingUtil.hasCommandModifier(e),
                                n = e.shiftKey && o,
                                r = e.key.toLowerCase();
                            return "k" === r && o ? D.Qm.toLowerCase() : "x" === r && n ? D.fR.strikethrough.toLowerCase() : "7" === r && n ? D.P7.numbered : "8" === r && n ? D.P7.bulleted : "9" === r && n ? D.P7.blockquote : "." === r && n ? D.u4 : "," === r && n ? D.db : t?.(e);
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
                                o = t?.getBlockMap().first().getType(),
                                n = o === D.P7.bulleted || o === D.P7.numbered || o === D.P7.blockquote;
                            return !this._isEditorFocused() && !n;
                        }),
                        (this._getBackspaceAndDeleteCommandHandlers = () => {
                            const {
                                onChange: e,
                                richTextInputContext: { editorState: t },
                            } = this.props;
                            if (t && e) {
                                const o = (o) => {
                                        const n = o(t);
                                        return n ? () => e(n) : void 0;
                                    },
                                    n = (e, t) => (t ? Object.fromEntries(e.map((e) => [e, t])) : {});
                                return { ...n(D.wX, o(i.RichUtils.onBackspace)), ...n(D.Ak, o(i.RichUtils.onDelete)) };
                            }
                            return {};
                        }),
                        (this._getEditorStateWithLinkSelected = (e) => {
                            const t = this._getSelectedEntityWithRange();
                            if (t) {
                                const { end: o, entity: n, start: r } = t,
                                    i = n.getData().url;
                                if (i) return { editorStateWithLinkSelected: this._getEditorStateWithTextSelection(e, r, o), entityUrl: i };
                            }
                            return { editorStateWithLinkSelected: e, entityUrl: void 0 };
                        }),
                        (this._getEditorStateWithTextSelection = (e, t, o) => {
                            const n = e.getSelection(),
                                r = n.merge(n.getIsBackward() ? { anchorOffset: o, focusOffset: t } : { anchorOffset: t, focusOffset: o });
                            return i.EditorState.acceptSelection(e, r);
                        }),
                        (this._getSelectedText = (e) => {
                            const t = e.getSelection(),
                                o = e.getCurrentContent(),
                                n = t.getStartKey();
                            if (n === t.getEndKey()) {
                                const e = o.getBlockForKey(n),
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
                                    o = e.getCurrentContent(),
                                    n = t.getAnchorKey(),
                                    r = o.getBlockForKey(n),
                                    i = r.getEntityAt(t.getAnchorOffset()),
                                    a = r.getEntityAt(t.getFocusOffset());
                                if (i && i === a) {
                                    const e = r.getCharacterList().toArray(),
                                        t = (e) => e?.getEntity() === i;
                                    return { start: (0, d.Z)(e, t), end: (0, h.Z)(e, t) + 1, entity: o.getEntity(i) };
                                }
                            }
                        }),
                        (this._getSelectedTextSize = () => {
                            const {
                                    richTextInputContext: { editorState: e },
                                    textSizesOverride: t,
                                } = this.props,
                                o = e ? i.RichUtils.getCurrentBlockType(e) : void 0;
                            return (t || D.iH).find((e) => e.blockType === o) || D.Tr;
                        }),
                        (this._toggleTextStyle = (e) => {
                            const {
                                onChange: t,
                                richTextInputContext: { editorState: o },
                            } = this.props;
                            return (n) => () => {
                                if (!o || "function" != typeof t) return;
                                const r = e(o, n);
                                t(r);
                            };
                        }),
                        (this._handleChangeTextSize = (e) => {
                            this._toggleTextStyle(i.RichUtils.toggleBlockType)(e.blockType)();
                        }),
                        (this._handleIncreaseTextSize = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                o = this._getSelectedTextSize(),
                                n = t.indexOf(o);
                            if (0 !== n) {
                                const e = t[n - 1];
                                this._handleChangeTextSize(e);
                            }
                        }),
                        (this._handleDecreaseTextSize = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                o = this._getSelectedTextSize(),
                                n = t.indexOf(o);
                            if (n !== t.length - 1) {
                                const e = t[n + 1];
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
                            ({ source: o, text: n }) => {
                                const { onChange: r } = this.props;
                                if (r && o) {
                                    const a = e.getSelection(),
                                        s = t ? i.EditorState.push(e, i.Modifier.replaceText(e.getCurrentContent(), a, n || o), "insert-characters") : e,
                                        l = s.getSelection(),
                                        c = this._getEditorStateWithTextSelection(s, a.getStartOffset(), l.getEndOffset()),
                                        d = c
                                            .getCurrentContent()
                                            .createEntity(D.Qm, "MUTABLE", { url: this._getUrlWithProtocol(o) })
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
                                const { editorStateWithLinkSelected: o } = this._getEditorStateWithLinkSelected(t);
                                e(i.RichUtils.toggleLink(o, o.getSelection(), null));
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
                                onChange: o,
                                richTextInputContext: { editorState: n },
                            } = this.props;
                            if (o && n) {
                                if (i.KeyBindingUtil.isSoftNewlineEvent(e)) {
                                    return o(i.RichUtils.insertSoftNewline(n)), "handled";
                                }
                                const t = n.getSelection(),
                                    r = n.getCurrentContent(),
                                    a = t.getStartKey(),
                                    s = a === t.getEndKey() ? r.getBlockForKey(a) : void 0;
                                if (s?.getType() === D.P7.blockquote && 0 === s?.getLength()) {
                                    return o(i.RichUtils.toggleBlockType(n, D.P7.blockquote)), "handled";
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
                                o = t.getBlockMap(),
                                n = o.map(this._removeInvalidStylesFromContentBlock),
                                r = t.merge({ blockMap: o.merge(n) });
                            return i.EditorState.push(e, r, "change-block-data");
                        }),
                        (this._removeInvalidStylesFromContentBlock = (e) => {
                            const t = [...(0, u.Z)(D.fR), ...(0, u.Z)(D.P7)],
                                o = e.getCharacterList().map((e) =>
                                    e
                                        .getStyle()
                                        .filter((e) => !t?.includes(e))
                                        .reduce((e, t) => i.CharacterMetadata.removeStyle(e, t), e),
                                );
                            return (t?.includes(e.getType()) ? e : e.set("type", "unstyled")).set("characterList", o);
                        }),
                        (this._getUrlWithProtocol = (e) => (e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`)),
                        (this._getSourceInputErrorText = (e) => (e ? ((0, g.Z)(e, !1, !1) ? void 0 : N) : Q)),
                        (this._renderToolbarButtonGroup = (e, t) => {
                            const {
                                    richTextInputContext: { editorState: o },
                                } = this.props,
                                s = o?.getCurrentInlineStyle(),
                                l = o ? i.RichUtils.getCurrentBlockType(o) : void 0;
                            return r.createElement(
                                a.Z,
                                { style: q.buttonGroup },
                                t ? null : r.createElement(R, { style: q.separatorMargin }),
                                e.map((e, t) => {
                                    const { Icon: o, buttonTestId: i, key: a, renderActionMenu: c, ...d } = e,
                                        h = this._isEditorFocused() && s?.contains(a),
                                        u = this._isEditorFocused() && a === l,
                                        p = a === D.Qm && this.isPopoverShown,
                                        g = h || u || p,
                                        m = r.createElement(o, { style: g ? void 0 : q.iconGray });
                                    return r.createElement(r.Fragment, { key: a }, r.createElement(f.ZP, (0, n.Z)({ icon: m, key: a, preventFocusShift: this._isEditorFocused(), size: "small", testID: i, type: g ? "brandText" : "primaryText" }, d)), c && c());
                                }),
                            );
                        }),
                        (this._renderTextSizeMenu = () => {
                            const { textSizesOverride: e } = this.props,
                                t = e || D.iH,
                                o = this._getSelectedTextSize(),
                                n = t.map((e) => ({ isSelected: o === e, onClick: () => this._handleChangeTextSize(e), selectable: !0, text: e.component }));
                            return r.createElement(m.Z, { items: n, onCloseRequested: this._handleHideTextSizeMenu, preventFocusShift: this._isEditorFocused(), shouldCloseOnClick: !0 });
                        }),
                        (this._renderLinkPopoverContent = (e, t) => (o) => {
                            const n = { external: !0, openInSameFrame: !1, pathname: t };
                            return r.createElement(
                                a.Z,
                                { style: q.linkPopoverContent },
                                r.createElement(y.ZP, { numberOfLines: 2, style: q.bottomMargin, weight: "bold" }, e),
                                r.createElement(Z.Z, { link: n, style: q.bottomMargin }, t),
                                r.createElement(
                                    a.Z,
                                    { style: q.linkPopoverButtons },
                                    r.createElement(
                                        f.ZP,
                                        {
                                            onPress: () => {
                                                o(), this._handleToggleLinkSheet();
                                            },
                                            type: "primaryFilled",
                                        },
                                        W,
                                    ),
                                    r.createElement(
                                        f.ZP,
                                        {
                                            onPress: () => {
                                                o(), this._handleRemoveLink();
                                            },
                                            style: q.removeLinkButtonMargin,
                                        },
                                        K,
                                    ),
                                ),
                            );
                        }),
                        (this._renderLinkSheet = () => {
                            const {
                                richTextInputContext: { editorState: e },
                            } = this.props;
                            if (e) {
                                const { editorStateWithLinkSelected: t, entityUrl: o } = this._getEditorStateWithLinkSelected(e),
                                    n = this._getSelectedText(t);
                                return r.createElement(T, { buttonLabelOverride: o ? H : G, fields: { source: { label: V, initialValue: o || "", getErrorText: this._getSourceInputErrorText }, ...(void 0 !== n ? { text: { label: U, initialValue: n } } : {}) }, onClose: this._handleToggleLinkSheet, onSave: this._handleAddLink(t, void 0 !== n), sheetTitle: o ? z : A });
                            }
                        }),
                        (this._handleInTextShortcut = (e) => (t, o, n) => {
                            const r = e.getSelection(),
                                a = i.Modifier.insertText(e.getCurrentContent(), r, n);
                            let s = i.EditorState.push(e, a, "insert-characters");
                            const l = i.Modifier.removeRange(s.getCurrentContent(), s.getSelection().merge({ anchorOffset: 0, focusOffset: o.length + n.length }), "backward"),
                                c = i.Modifier.setBlockType(l, s.getSelection().merge({ anchorOffset: 0, focusOffset: 0 }), t);
                            return (s = i.EditorState.push(s, c, "change-block-type")), this.props.onChange?.(s), "handled";
                        }),
                        (this._handleBeforeInput = (e, t) => {
                            const { allowInTextShortcuts: o } = this.props.richTextInputContext;
                            if (!o || " " !== e) return "not-handled";
                            const n = t.getSelection(),
                                r = t.getCurrentContent().getBlockForKey(n.getStartKey()),
                                i = r.getType(),
                                a = r.getText().slice(0, n.getFocusOffset()),
                                s = this._handleInTextShortcut(t);
                            if ("unstyled" !== i) return "not-handled";
                            for (const [t, o] of Object.entries($)) if (o.includes(a)) return s(t, a, e);
                            return "not-handled";
                        }),
                        (this._setFieldTextInputRef = (e) => {
                            this.fieldTextInput = e;
                        }),
                        (this.state = { showLinkSheet: !1, showTextSizeMenu: !1 });
                    const t = [];
                    e.limitedRichText || (t.push((0, F.U_)(this._renderLinkPopoverContent, this._handleLinkPopoverOpen, this._handleLinkPopoverClose)), t.push((0, F.NA)(p.Z, e.paragraphFontSizeOverride))), t.push(F.aF), t.push(F.RU), (this.decorator = new i.CompositeDecorator(t));
                }
                componentDidMount() {
                    this._setDecorator(), M.fH(L.c, L.n);
                }
                componentDidUpdate() {
                    const {
                        richTextInputContext: { editorState: e },
                    } = this.props;
                    e && e.getDecorator() !== this.decorator && this._setDecorator();
                }
                render() {
                    const { additionalToolbarButtonConfigs: e, emojiPickerButton: t, errorText: o, inputStyle: s, isInputFullWidth: l, keyCommandHandlers: c, limitedRichText: d, middleControl: h, onChange: u, paragraphFontSizeOverride: p, placeholder: g, richTextInputContext: m, showError: b, textSizesOverride: k, toolbarRightControl: x, toolbarStyle: _, withAppBar: E, ...T } = this.props,
                        { showLinkSheet: L, showTextSizeMenu: M } = this.state,
                        Z = (0, D.b$)(this._toggleTextStyle(i.RichUtils.toggleInlineStyle)),
                        F = (0, D.QF)(this._toggleTextStyle(i.RichUtils.toggleBlockType)),
                        O = (0, D.lD)(this._toggleTextStyle(i.RichUtils.toggleBlockType)),
                        A = (0, D.KJ)(this._handleToggleLinkSheet),
                        z = this._getSelectedTextSize(),
                        W = { ...m, blockStyleFn: (0, D.su)(!1, m.blockStyleFn), stripPastedStyles: !1 },
                        K = Object.fromEntries([...Z, ...(d ? [] : A), ...O, ...(d ? [] : F)].map((e) => [e.key.toLowerCase(), e.onPress])),
                        U = { [D.u4]: this._handleIncreaseTextSize, [D.db]: this._handleDecreaseTextSize },
                        V = { ...K, ...(d ? {} : U), ...this._getBackspaceAndDeleteCommandHandlers() },
                        H = c ? { ...V, ...c } : V,
                        G = this._handleOnChange,
                        Q = C.Z.hexToCss(P.default.theme.colors.navigationBackground, 0),
                        N = C.Z.hexToCss(P.default.theme.colors.navigationBackground, 1),
                        $ = [q.toolbar_container, this.props.withAppBar ? q.toolbar_container_with_app_bar : q.toolbar_container_no_padding];
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            a.Z,
                            { style: $ },
                            L ? this._renderLinkSheet() : null,
                            b && o ? r.createElement(v.Z.Danger, { text: o, withIcon: !0 }) : null,
                            r.createElement(
                                a.Z,
                                { style: [q.toolbar, _] },
                                Y,
                                r.createElement(
                                    a.Z,
                                    { id: "toolbar-styling-buttons", style: q.toolbar_styling_buttons },
                                    this._renderToolbarButtonGroup(Z, !0),
                                    d
                                        ? null
                                        : r.createElement(
                                              r.Fragment,
                                              null,
                                              r.createElement(R, { style: q.separatorMargin }),
                                              r.createElement(I.Z, { interactiveStyles: null, onClick: this._handleShowTextSizeMenu, preventFocusShift: this._isEditorFocused(), style: q.textSizeSelection }, (e) => r.createElement(r.Fragment, null, r.createElement(y.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1" }, z.label), r.createElement(f.ZP, { icon: X, interactivityState: e, size: "small", type: "primaryText" }), M ? this._renderTextSizeMenu() : null)),
                                          ),
                                    d ? null : this._renderToolbarButtonGroup(F),
                                    this._renderToolbarButtonGroup(O),
                                    d ? null : this._renderToolbarButtonGroup(A),
                                    t ? t() : null,
                                    e ? this._renderToolbarButtonGroup(e) : null,
                                ),
                                r.createElement(a.Z, { style: q.toolbar_right_control }, x, r.createElement(w.Z, { angle: 90, angleUnit: "deg", colors: [Q, N, N], locations: [0, 0.75, 1], style: q.toolbar_styling_buttons_fadeout_right })),
                            ),
                            r.createElement(w.Z, { angle: 270, angleUnit: "deg", colors: [Q, N, N], locations: [0, 0.75, 1], style: q.toolbar_styling_buttons_fadeout_left }),
                        ),
                        r.createElement(S.Z, { isFullWidth: l, withWideContainer: !0 }, h, r.createElement(B.Z, (0, n.Z)({ handleBeforeInput: this._handleBeforeInput, handleReturn: this._handleReturn, inputStyle: [q.input, s], keyBindingFn: this._keyBindingFn, keyCommandHandlers: H, onChange: G, placeholder: this._shouldShowPlaceholder() ? g : void 0, ref: this._setFieldTextInputRef, richTextInputContext: W }, T))),
                    );
                }
                focus() {
                    this.fieldTextInput?.focus();
                }
                getTextInputHeight() {
                    return this.fieldTextInput?.getTextInputHeight();
                }
            }
            j.defaultProps = { leftAligned: !0, multiline: !0, styleType: "selection" };
            const q = P.default.create((e) => {
                    const t = e.componentZIndices.appBarZIndex,
                        o = { position: "absolute", width: e.spacesPx.space48, height: "100%", pointerEvents: "none" };
                    return { bottomMargin: { marginBottom: e.spaces.space8 }, buttonGroup: { flexDirection: "row" }, iconGray: { color: e.colors.gray700 }, input: { paddingHorizontal: 0, paddingBottom: 0 }, linkPopoverButtons: { flexDirection: "row", marginTop: e.spaces.space8 }, linkPopoverContent: { marginHorizontal: e.spaces.space24, marginVertical: e.spaces.space24 }, removeLinkButtonMargin: { marginStart: e.spaces.space8 }, separatorMargin: { marginHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, textSizeSelection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginStart: e.spaces.space8, marginEnd: e.spaces.space4, width: `calc(${e.spaces.space80} + ${e.spaces.space32})` }, toolbar_container_no_padding: { top: 0 }, toolbar_container_with_app_bar: { top: e.componentDimensions.appBarHeightPx - 0.5 }, toolbar_container: { zIndex: t, position: "sticky", width: "100%", backgroundColor: e.colors.cellBackground, borderBottomWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, toolbar: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space4 }, toolbar_styling_buttons: { flex: 1, flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space48, overflowX: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", alignItems: "center", paddingVertical: e.spaces.space2 }, toolbar_styling_buttons_fadeout_right: { ...o, start: -1 * o.width }, toolbar_styling_buttons_fadeout_left: { ...o, start: 0, width: e.spacesPx.space16, zIndex: t + 1 }, toolbar_right_control: { flexShrink: 1, flexDirection: "row", alignItems: "center", paddingEnd: e.spaces.space16 } };
                }),
                X = r.createElement(c.default, { style: q.iconGray }),
                Y = r.createElement("style", null, "\n    #toolbar-styling-buttons *::-webkit-scrollbar {\n      display: none;\n    }\n  ");
        },
        344175: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(325686),
                i = o(370006),
                a = o(786998),
                s = o(731708),
                l = o(154003),
                c = o(157130),
                d = o(138099);
            const h = o(392237).default.create((e) => ({ sheet: { maxHeight: "100vh" }, appBar: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, buttonContainer: { flexDirection: "row-reverse" }, secondaryButton: { marginEnd: e.spaces.space8 }, content: { flex: 1, overflowY: "auto" }, popoverContent: { padding: e.spaces.space20 } })),
                u = ({ children: e, enableMaskForDismiss: t = !0, onBackClick: o, onClose: u, primaryButtonConfig: p, secondaryButtonConfig: g, style: m, title: y, withKeyboardNavigation: f, withPassthroughEvents: C }) => {
                    const [S, b] = n.useState(!1),
                        k = () => {
                            x(), p?.onClick(x);
                        },
                        x = () => {
                            b((e) => !e);
                        },
                        _ = n.createElement(i.Z, { backButtonType: o ? "back" : "close", onClick: o || u }),
                        E = g
                            ? n.createElement(
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
                        T = n.createElement(
                            r.Z,
                            { style: h.buttonContainer },
                            (() => {
                                if (p) {
                                    const { forceDisabled: t, label: o, popoverMessage: r, type: i } = p,
                                        a = n.createElement(l.ZP, { "aria-label": o, disabled: S || t, onClick: k, size: "small", type: i || "primaryFilled" }, o);
                                    return r ? n.createElement(c.Z, { enableHover: !0, renderContent: ((e = r), () => n.createElement(s.ZP, { style: h.popoverContent }, e)), withArrow: !0 }, a) : a;
                                }
                                return null;
                                var e;
                            })(),
                            E,
                        );
                    return n.createElement(d.Z, { enableMaskForDismiss: t, onMaskClick: u, style: [h.sheet, m], type: "full", withKeyboardNavigation: f, withMask: !0, withPassthroughEvents: C }, n.createElement(a.Z, { leftControl: _, rightControl: T, style: h.appBar, title: y }), n.createElement(r.Z, { style: h.content }, e));
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.SettingsExtendedProfile~bundle.WorkHistory~ondemand.Verified.ee6db97a.js.map
