"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DMRichTextCompose", "ondemand.RichText"],
    {
        468032: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversation_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "labeled_convo_collection_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMLabelsListToggleLabelMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversation_id" },
                                    { kind: "Variable", name: "labeled_convo_collection_id", variableName: "labeled_convo_collection_id" },
                                ],
                                kind: "ScalarField",
                                name: "labeled_conversation_collection_entries_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "DMLabelsListToggleLabelMutation", selections: r },
                    params: { id: "BkE8C-TCIBC6p6zLq1J9sA", metadata: {}, name: "DMLabelsListToggleLabelMutation", operationKind: "mutation", text: null },
                };
            i.hash = "fc3b4d1f6a44ca8897470dbd3fe37b52";
            const s = i;
        },
        201787: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(154003),
                i = n(674132),
                s = n.n(i),
                a = n(711223);
            const l = s().h810143c,
                c = ({ "aria-label": e, conversationId: t, link: n, style: i }) => {
                    const s = o.createElement(a.default, null);
                    return o.createElement(r.ZP, { "aria-label": e || l, hoverLabel: { label: l }, icon: s, key: t, link: n, pullRight: !0, style: i, type: "primaryText" });
                };
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
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
            class p extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: s, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: f, style: y, subtitle: g, title: C, titleDomId: b, titleIconCell: x, titleIconCellSize: v, withBackground: _, withWideContainer: w } = this.props,
                        { isModal: S } = this.context,
                        k = i ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!_, S, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: k, middleControl: p, position: h(u, S, r), rightControl: m, style: y, subtitle: g, title: C, titleDomId: b, titleIconCell: x, titleIconCellSize: v, withBackground: T, withWideContainer: w }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => x });
            var o = n(202784),
                r = n(107267),
                i = n(791632),
                s = n(325686),
                a = n(537392),
                l = n(10656),
                c = n(655352),
                d = n(555079),
                h = n(500002),
                p = n(625661),
                u = n(449067),
                m = n(655543),
                f = n(715601),
                y = n(392237);
            const g = y.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...y.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(s.Z, { style: g.fill }, o.createElement(f.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(a.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: i, showSubtitleOnWideDetail: s, withBottomBorder: a, withDetailOpen: l, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: i, documentTitle: a, headerless: l, history: c, leftControl: h, middleControl: m, onBackClick: f, rightControl: y, screenType: C, searchBoxOptions: b, secondaryBar: x, showSubtitleOnRoot: v, showSubtitleOnWideDetail: _, subtitle: w, title: S, titleIconCell: k, titleIconCellSize: T, withDetailOpen: E, withSearchBox: Z, withTweetButton: I, withWideContainer: B } = this.props,
                        F = "root" === C,
                        P = "secondaryRoot" === C,
                        L = "primaryDetail" === C,
                        D = (L && _) || (F && v),
                        R = F || (L && e),
                        M = F ? d.ey : L ? d.vX : void 0,
                        O = o.createElement(s.Z, { style: g.appBarContainer }, o.createElement(p.ZP, { backLocation: i, fixed: !1, hideBackButton: R, history: c, leftControl: h, middleControl: m, onBackClick: f, rightControl: y, secondaryBar: x, style: r, subtitle: D ? w : void 0, title: S, titleDomId: M, titleIconCell: k, titleIconCellSize: T, withWideContainer: B })),
                        W = F || (P && E) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: i, documentTitle: a, headerless: l, middleControl: m, onBackClick: f, rightControl: y, searchBoxOptions: b, subtitle: w, title: S, withSearchBox: Z, withTweetButton: I });
                    return o.createElement(o.Fragment, null, W, O);
                }
            }
            (C.contextType = m.Z), (C.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const b = (0, h.ZP)(C),
                x = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : o.createElement(b, e);
                };
        },
        536790: (e, t, n) => {
            n.d(t, { Z: () => h });
            n(571372), n(136728);
            var o = n(202784),
                r = n(301503),
                i = n(597496),
                s = n(339110),
                a = n(456910),
                l = n(230295),
                c = n(267446);
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = o.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: n, isInline: r, isInlineReply: a, onTypeaheadStateChange: l, source: c } = this.props,
                                { canShowTypeahead: d, queryContext: h } = this.state,
                                p = d && h ? { word: h.word, resultType: h.resultType } : void 0;
                            return o.createElement(i.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: a, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: p, ref: this._genericWrapperRef, source: c || s._4.Compose }, e(this._handleInputChange));
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
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    n = t && t.word,
                                    o = this._getPlaintextFromCurrentBlock(e),
                                    { end: r, start: i, word: s } = a.si(this._getCaret(e), o),
                                    l = a.bR(s || "", "compose");
                                if (l?.q === n) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === i)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: n } = l;
                                    this._setQueryContext({ word: t, resultType: n, editorState: e, startIndex: i, endIndex: r });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: n, endIndex: o, startIndex: i } = t,
                        s = n.getSelection().merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: i, focusOffset: o }),
                        a = r.Modifier.replaceText(n.getCurrentContent(), s, e),
                        l = r.EditorState.push(n, a, "insert-characters"),
                        c = i + e.length,
                        d = l.getSelection().merge({ anchorOffset: c, focusOffset: c });
                    return r.EditorState.forceSelection(l, d);
                }
            }
            const h = d;
        },
        175853: (e, t, n) => {
            n.r(t), n.d(t, { DMConversationScreen: () => Y, default: () => ee });
            var o = n(202784),
                r = n(708852),
                i = n(794731),
                s = n(652904),
                a = n(246851),
                l = n(441790),
                c = n(587521),
                d = n(297436),
                h = n(668214),
                p = n(296196),
                u = n(798538),
                m = n(997174),
                f = n(390387),
                y = n(5849),
                g = n(919022),
                C = n(593953);
            const b = (e, t) => t.match.params.conversationId,
                x = (e, t) => p.selectConversation(e, b(0, t)),
                v = (e, t) => u.q9(e, b(0, t)),
                _ = (e, t) => u.W8(e, b(0, t)),
                w = (0, h.Z)()
                    .propsFromState(() => ({ conversation: x, entries: p.selectEntries, conversationId: b, isNewGroupConversation: C.rR, perspective: f._h, newConversationParticipants: C.bZ, tweetAttachment: C.Ss, users: g.ZP.selectAll, isUploading: v, media: _ }))
                    .adjustStateProps(({ conversation: e, conversationId: t, entries: n, isNewGroupConversation: o, isUploading: r, media: i, newConversationParticipants: s, perspective: a, tweetAttachment: l, users: c }) => {
                        const h = e?.data;
                        return { conversation: (h && (0, d.lk)(h, n, c)) || void 0, conversationId: t, isNewGroupConversation: o, isUploading: r, media: i, newConversationParticipants: s, perspective: a };
                    })
                    .propsFromActions(
                        ({
                            match: {
                                params: { conversationId: e },
                            },
                        }) => ({ cancelUpload: (0, C.Ly)(e), removeMedia: (0, C.Xx)(e), setLastViewedDmInboxPath: y.EA, updateTweetDetailNav: m.NH }),
                    )
                    .withAnalytics({ page: "messages", section: "thread" });
            n(136728);
            var S = n(325686),
                k = n(107267),
                T = n(642153),
                E = n(537392),
                Z = n(731708),
                I = n(154003),
                B = n(392237),
                F = n(674132),
                P = n.n(F),
                L = n(913313),
                D = n(201787),
                R = n(253493),
                M = n(952793),
                O = n(10656),
                W = n(198506),
                A = n(275365),
                K = n(503115),
                N = n(356738),
                z = n(255534),
                H = n(276032),
                V = n(164383);
            const U = P().d4986f86,
                q = P().e3e58b6e,
                j = P().a9ddbb94,
                J = P().dd4779a0,
                G = 8,
                Q = 3;
            function $(e) {
                const t = (0, k.useHistory)(),
                    n = (0, k.useLocation)(),
                    r = (0, M.hC)("responsive_web_dm_label_enabled"),
                    { conversation: i, conversationId: s, newConversationParticipants: a, perspective: l } = e,
                    c = (e) => {
                        i?.trusted ? t.push({ pathname: "/messages", state: n.state }) : e();
                    },
                    d = (e, t) => {
                        const n = e.map(({ user: e }) => e.profile_image_url_https).slice(0, t);
                        return o.createElement(S.Z, { style: X.facePile }, o.createElement(T.Z, { userAvatarSize: "large", userAvatarUrls: n }));
                    },
                    h = (e) => {
                        const t = i && i.participants.length ? (0, z.E)({ conversation: i, perspective: l }) : a ? (0, z.E)({ newConversationParticipants: a, perspective: l }) : U,
                            n = i?.participants.length ? o.createElement(z.Z, { conversation: i, perspective: l, textSize: "headline2", withScreenName: !1 }) : a ? o.createElement(z.Z, { newConversationParticipants: a, perspective: l, textSize: "headline2", withScreenName: !1 }) : o.createElement(Z.ZP, { size: "headline2" }, U),
                            r = i && l ? (0, W.Z)(i, l) : void 0,
                            c = (0, C.NL)(s);
                        let h = "large",
                            p = l ? o.createElement(K.Z, { conversation: i, perspective: l, size: h, withLock: c }) : void 0;
                        return r && i?.type === A.eD.GROUP && void 0 === i?.avatar && ((p = ((e) => o.createElement(E.ZP, null, ({ containerWidth: t }) => (O.Z.isTwoColumnLayout(t) ? d(e, G) : d(e, Q))))(r)), (h = "custom")), { ...(e && { titleIconCell: p, titleIconCellSize: h }), title: n, documentTitle: t };
                    },
                    p = () => {
                        const e = i?.type === A.eD.GROUP,
                            t = n?.state?.position || 0;
                        return s ? o.createElement(S.Z, { style: X.rightControlStyles }, o.createElement(V.fK, { conversationId: s }), r && o.createElement(H.Z, { conversationId: s }, o.createElement(I.ZP, { "aria-haspopup": "menu", "aria-label": J, hoverLabel: { label: J }, icon: o.createElement(L.default, null), size: "small", style: X.infoButton, type: "primaryText" })), o.createElement(D.Z, { "aria-label": e ? j : q, conversationId: s, link: { pathname: `/messages/${s}/info`, state: { position: t } }, style: X.infoButton })) : void 0;
                    };
                return o.createElement(
                    R.Z,
                    (() => {
                        const t = h(e.showTitle);
                        return { backLocation: "/messages", onBackClick: c, rightControl: p(), screenType: "primaryDetail", withBottomTabBar: !1, headerless: !1, secondaryBar: r ? o.createElement(N.Z, null) : void 0, ...t };
                    })(),
                    e.children,
                );
            }
            const X = B.default.create((e) => ({ infoButton: { marginEnd: e.spaces.space4 }, rightControlStyles: { flexDirection: "row" }, facePile: { display: "flex", flexDirection: "row" } }));
            function Y({ conversationId: e, history: t, location: n, isNewGroupConversation: d = !1, conversation: h, newConversationParticipants: p, perspective: u, richTextInputContext: m, setLastViewedDmInboxPath: f, typeaheadWrapper: y = i.Z }) {
                const g = (0, a.Z)(e),
                    [C, b] = o.useState(!1),
                    x = (0, l.N)();
                e || d || n.pathname !== window.location.pathname || t.replace({ pathname: "/messages" });
                o.useEffect(() => {
                    e !== g && f(n.pathname);
                }, [e, n.pathname, g, f]);
                const v = "string" == typeof n.query.text ? n.query.text : void 0,
                    _ = (0, r.Y4)();
                return o.createElement(
                    s.Z,
                    null,
                    o.createElement(
                        $,
                        { conversation: h, conversationId: e, newConversationParticipants: p, perspective: u, showTitle: !C },
                        o.createElement(c.Z, {
                            conversationId: e,
                            history: t,
                            isWide: _,
                            location: n,
                            onConversationProfileVisibilityChange: (e) => {
                                C !== e && b(e);
                            },
                            prefillText: v,
                            richTextInputContext: m,
                            typeaheadWrapper: y,
                            typingNotifier: x,
                        }),
                    ),
                );
            }
            const ee = w(Y);
        },
        446766: (e, t, n) => {
            n.r(t), n.d(t, { DMConversationScreenWithRichText: () => l, default: () => c });
            var o = n(807896),
                r = n(202784),
                i = n(175853),
                s = n(536790),
                a = n(687184);
            const l = (e) => r.createElement(a.default, null, ({ richTextInputContext: t, typeaheadWrapper: n }) => r.createElement(i.default, (0, o.Z)({}, e, { richTextInputContext: t, typeaheadWrapper: s.Z }))),
                c = l;
        },
        687184: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            n(202784);
            var o = n(925873),
                r = n(977952),
                i = n(536790);
            function s(e) {
                const t = { convertEmojiToEntities: o.Z.convertEmojiToEntities, element: r.Z, initEditorState: o.Z.initEditorState, insertTextAtCursor: o.Z.insertTextAtCursor };
                return e.children({ richTextInputContext: t, typeaheadWrapper: i.Z });
            }
        },
        356738: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                i = n(929028),
                s = n(731708),
                a = n(868634),
                l = n(392237),
                c = n(674132);
            const d = n.n(c)().ca9af866;
            function h(e) {
                const t = [],
                    n = i.Z.getBackgroundStyles();
                return t.length > 0
                    ? o.createElement(
                          r.Z,
                          { style: [p.container, n] },
                          o.createElement(r.Z, { style: p.label }, o.createElement(s.ZP, { size: "subtext2", weight: "heavy" }, d)),
                          o.createElement(
                              r.Z,
                              { style: p.row },
                              t.map((e) => o.createElement(a.ZP, { background: "gray700", fontSize: "subtext2", style: p.selectionPill }, e)),
                          ),
                      )
                    : null;
            }
            const p = l.default.create((e) => ({ container: { paddingStart: e.spaces.space16, paddingBottom: e.spaces.space8, display: "flex", alignItems: "center", flexDirection: "row" }, row: { flexDirection: "row", alignItems: "center" }, label: { marginEnd: e.spaces.space4 }, selectionPill: { margin: e.spaces.space2 }, selector: { display: "flex", paddingEnd: e.spaces.space16 } }));
        },
        276032: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(202784),
                r = n(325686),
                i = n(952428),
                s = n(731708),
                a = n(30899),
                l = n(392237),
                c = n(468032),
                d = (n(585488), n(351743)),
                h = n.n(d),
                p = n(457311),
                u = n(682830),
                m = n(965245),
                f = n(736063),
                y = n(725516),
                g = n(792098),
                C = n(96083);
            const b = ({ checked: e, label: t, onToggleCheck: n, refetch: a }) => {
                    const l = o.useCallback(() => {
                        n(t.id);
                    }, [n, t.id]);
                    return t ? o.createElement(r.Z, { role: "listitem" }, o.createElement(i.Z, { onClick: l, style: v.root }, o.createElement(C.Z, { checked: e }), o.createElement(s.ZP, { size: "subtext2" }, t.name))) : null;
                },
                x = o.memo(b),
                v = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, gap: e.spaces.space4 } })),
                _ = { buttonLink: "/setting/labels", buttonText: "Manage Labels", buttonType: "brandOutlined" },
                w = c.Z;
            function S(e) {
                return e.id;
            }
            function k({ conversationId: e, footer: t }) {
                const n = (0, y.z)();
                o.useEffect(() => {
                    n.scribe({ action: "impression" });
                }, [n]);
                const [r, i, s] = (0, g.Z)(),
                    [a] = h()(w),
                    l = r.viewer.user_results.result,
                    c = o.useCallback(
                        (t) => {
                            e && a({ variables: { conversation_id: e, labeled_convo_collection_id: t } });
                        },
                        [e, a],
                    ),
                    d = o.useCallback((e) => o.createElement(x, { checked: !1, label: e, onToggleCheck: c, refetch: s }), [s, c]);
                if ("User" !== l.__typename) return null;
                const u = l.labeled_conversation_collection_slice?.items;
                return u ? (u.length ? o.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "dmLabelsList", footer: t, identityFunction: S, items: u, onNearEnd: i, renderer: d, withoutHeadroom: !0 }) : o.createElement(p.Z, _)) : null;
            }
            const T = { context: "DMLabelsList" };
            function E(e) {
                return o.createElement(f.H, { errorConfig: T, suspenseFallback: o.createElement(u.J, null) }, o.createElement(k, e));
            }
            const Z = o.memo(E);
            function I({ children: e, conversationId: t, onDismiss: n }) {
                const l = o.useCallback(() => {
                        n?.();
                    }, [n]),
                    c = o.useMemo(() => o.createElement(r.Z, { style: B.footer }, o.createElement(i.Z, { style: B.footerButton }, o.createElement(s.ZP, { align: "center", size: "subtext1" }, "Create Label")), o.createElement(i.Z, { style: B.footerButton }, o.createElement(s.ZP, { align: "center", size: "subtext1" }, "Manage Labels"))), []),
                    d = o.useCallback(() => o.createElement(Z, { conversationId: t, footer: c }), [c, t]);
                return o.createElement(a.Z, { contentStyle: B.content, onDismiss: l, preferredVerticalOrientation: "down", renderContent: d, withArrow: !0, withFixedPosition: !0 }, e);
            }
            const B = l.default.create((e) => ({ footer: { borderColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, content: { maxHeight: "250px" }, footerButton: { paddingVertical: e.spaces.space8 } }));
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
                p = (n(571372), n(370751)),
                u = n(122375),
                m = n(835305),
                f = n(899492);
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
                                    const n = RegExp(`<img alt="(?<emoji>[^"]+)" .*? src="${f.S()}[^>]*>`, "g");
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
                                            a = v(s, _.start_newline),
                                            l = v(s, _.end_newline);
                                        r.push([a, l]);
                                    }
                                    const s = [];
                                    for (let e = 0; e < t.blocks.length; e++) {
                                        let [n, o] = r[e];
                                        0 === e && n && n++, e === t.blocks.length - 1 && o && o++;
                                        for (let e = 0; e < n; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ...w(), key: e };
                                            s.push(t);
                                        }
                                        s.push(t.blocks[e]);
                                        for (let e = 0; e < o; e++) {
                                            const e = (0, i.genKey)(),
                                                t = { ...w(), key: e };
                                            s.push(t);
                                        }
                                    }
                                    return s;
                                })(e, o));
                            o = (function (e, t) {
                                const n = [];
                                for (const o of t.blocks)
                                    switch (o.type) {
                                        case u.Wo:
                                            n.push(g(e, o));
                                            break;
                                        case u.p8:
                                        case u.r$:
                                        case u.Mm:
                                        case u.Z4:
                                        case u.Re:
                                            if (e.allowExtendedPasteStyles) n.push(g(e, o));
                                            else {
                                                const t = { ...o, type: u.Wo };
                                                n.push(g(e, t));
                                            }
                                            break;
                                        default: {
                                            const t = { ...o, type: u.Wo };
                                            n.push(g(e, t));
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
            function g(e, t) {
                const n = t.inlineStyleRanges || [],
                    o = [],
                    r = e.longformRichTextTransform ? x : b;
                for (const t of n) !e.stripPastedStyles && r.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const C = [m.DraftJS.Bold, m.DraftJS.Italic],
                b = (0, p.Z)(C),
                x = (0, p.Z)([...b, m.DraftJS.Strikethrough]);
            function v(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [o] = n;
                return o.length - 1;
            }
            const _ = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function w() {
                return { key: "", type: "unstyled", text: "", depth: void 0, inlineStyleRanges: [], entityRanges: [] };
            }
            class S extends r.Component {
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
                            let c = y({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: s, longformRichTextTransform: a });
                            if (!c) return "not-handled";
                            if (!o) {
                                const e = (function (e) {
                                    return e.replace(E.all_newlines, " ");
                                })(c.getPlainText());
                                c = i.ContentState.createFromText(e);
                            }
                            return (c = i.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), c.getBlockMap())), r(i.EditorState.push(n, c, "insert-fragment")), "handled";
                        }),
                        (this._myKeyBindingFn = (e) => {
                            const { dismissComposerCommandName: t, keyBindingFn: n, sendTweetCommandName: o } = this.props,
                                { hasCommandModifier: r } = i.KeyBindingUtil;
                            return e.keyCode === T.enter && r(e) ? o : e.keyCode === T.esc ? t : n?.(e) || (0, i.getDefaultKeyBinding)(e);
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
                            const e = Z[this.props.appTextSize],
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
                    return r.createElement(k, { className: [!e && h._i.single_line, this.state.containerClass, this.props.withFormatInline && h._i.format_inline].join(" ") }, r.createElement(k, { onClick: this._handleViewClick, style: [this._getContainerStyle(), this.props.style], testID: o ? `${o}RichTextInputContainer` : void 0 }, r.createElement(i.Editor, { ariaActiveDescendantID: this.props.ariaActiveDescendant, ariaAutoComplete: this.props.ariaAutocomplete, ariaControls: this.props.ariaControls, ariaLabel: this.props.ariaLabel, ariaMultiline: e, blockRenderMap: this.props.blockRenderMap, blockRendererFn: this.props.blockRendererFn, blockStyleFn: this.props.blockStyleFn, customAttrs: { [c.Z.NO_REFOCUS_ATTRIBUTE]: "true", onKeyPress: t, onKeyUp: n }, customStyleMap: { overflow: { backgroundColor: d.default.theme.colors.red200 } }, editorState: this.props.editorState, handleBeforeInput: this.props.handleBeforeInput, handleDroppedFiles: this._onDroppedFiles, handleKeyCommand: this._onKeyCommand, handlePastedFiles: this._onPastedFiles, handlePastedText: this._onPastedText, handleReturn: e ? this.props.handleReturn : this._onSingleLineReturn, keyBindingFn: this._myKeyBindingFn, onChange: this.props.onChange, onFocus: this.props.onFocus, onKeyDown: this.props.onKeyDown, placeholder: this.props.placeholder, ref: this._setEditorRef, spellCheck: "false" !== this.props.spellCheck, stripPastedStyles: this.props.stripPastedStyles, tabIndex: 0, webDriverTestID: o }), this.props.dragPlaceholder));
                }
            }
            S.defaultProps = { allowExtendedPasteStyles: !1, appTextSize: "body", autoFocus: !1, keyCommandHandlers: {}, maxNumberOfLines: 30, multiline: !0, numberOfLines: 6, onFocus: s.Z, positionCursorAtEnd: !1, spellCheck: "true", stripPastedStyles: !0, withMaxHeight: !0, longformRichTextTransform: !1 };
            const k = (e) => (0, a.Z)("div", e),
                T = { enter: 13, esc: 27 };
            const E = { all_newlines: /[\r\n]/g },
                Z = { small: "subtext2", normal: "body", large: "headline1", subtext2: "subtext2", body: "body", headline1: "headline1", title4: "title4" },
                I = r.forwardRef((e, t) =>
                    r.createElement(
                        S,
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DMRichTextCompose.cf33599a.js.map
