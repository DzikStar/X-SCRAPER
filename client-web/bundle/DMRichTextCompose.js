"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DMRichTextCompose", "ondemand.RichText", "icons/IconTicket-js"],
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
                i = n(111677),
                s = n.n(i),
                a = n(711223);
            const l = s().h810143c,
                c = ({ "aria-label": e, conversationId: t, link: n, style: i }) => {
                    const s = o.createElement(a.default, null);
                    return o.createElement(r.ZP, { "aria-label": e || l, hoverLabel: { label: l }, icon: s, key: t, link: n, pullRight: !0, style: i, type: "primaryText" });
                };
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: s, isLarge: c, leftControl: d, middleControl: u, position: p, rightControl: m, secondaryBar: f, style: g, subtitle: y, title: C, titleDomId: b, titleIconCell: x, titleIconCellSize: v, withBackground: w, withWideContainer: _ } = this.props,
                        { isModal: S } = this.context,
                        k = i ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, S, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: k, middleControl: u, position: h(p, S, r), rightControl: m, style: g, subtitle: y, title: C, titleDomId: b, titleIconCell: x, titleIconCellSize: v, withBackground: T, withWideContainer: _ }), f || null);
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
        222718: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                r = n(325686),
                i = n(537392),
                s = n(10656),
                a = n(655352),
                l = n(555079),
                c = n(500002),
                d = n(625661),
                h = n(449067),
                u = n(655543),
                p = n(715601),
                m = n(392237);
            const f = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(r.Z, { style: f.fill }, o.createElement(p.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: i, showSubtitleOnRoot: s, showSubtitleOnWideDetail: l, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: u, ...p } = this.props;
                    return o.createElement(o.Fragment, null, (0, a.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(h.Z.Configure, p), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: i, backLocation: s, documentTitle: a, headerless: c, history: u, leftControl: p, middleControl: m, onBackClick: g, rightControl: y, screenType: C, searchBoxOptions: b, secondaryBar: x, showBackButtonOnRoot: v, showSubtitleOnRoot: w, showSubtitleOnWideDetail: _, showTitleOnRoot: S, subtitle: k, title: T, titleIconCell: E, titleIconCellSize: Z, withDetailOpen: B, withSearchBox: I, withTweetButton: F, withWideContainer: P } = this.props,
                        L = "root" === C,
                        D = "secondaryRoot" === C,
                        R = "primaryDetail" === C,
                        O = (R && _) || (L && w),
                        M = (L && !v) || (R && e),
                        W = (L && !S) || (R && e && !S),
                        z = L ? l.ey : R ? l.vX : void 0,
                        A = o.createElement(r.Z, { style: f.appBarContainer }, o.createElement(d.ZP, { backLocation: s, fixed: !1, hideBackButton: M, history: u, leftControl: p, middleControl: m, onBackClick: g, rightControl: y, secondaryBar: x, style: i, subtitle: O ? k : void 0, title: W ? void 0 : T, titleDomId: z, titleIconCell: E, titleIconCellSize: Z, withWideContainer: P })),
                        K = L || (D && B) ? null : o.createElement(h.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: s, documentTitle: a, headerless: c, middleControl: m, onBackClick: g, rightControl: y, searchBoxOptions: b, subtitle: k, title: T, withSearchBox: I, withTweetButton: F });
                    return o.createElement(o.Fragment, null, K, A);
                }
            }
            (g.contextType = u.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const y = (0, c.ZP)(g);
        },
        496364: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(107267),
                i = n(791632),
                s = n(222718);
            const a = (e) => {
                const t = (0, r.useHistory)();
                return (0, i.HD)(t) ? e.children || null : o.createElement(s.Z, e);
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
                                u = d && h ? { word: h.word, resultType: h.resultType } : void 0;
                            return o.createElement(i.H1, { composeCommunityId: t, contextText: n, isInline: r, isInlineReply: a, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: u, ref: this._genericWrapperRef, source: c || s._4.Compose }, e(this._handleInputChange));
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
                u = n(296196),
                p = n(798538),
                m = n(997174),
                f = n(390387),
                g = n(5849),
                y = n(919022),
                C = n(593953);
            const b = (e, t) => t.match.params.conversationId,
                x = (e, t) => u.selectConversation(e, b(0, t)),
                v = (e, t) => p.q9(e, b(0, t)),
                w = (e, t) => p.W8(e, b(0, t)),
                _ = (0, h.Z)()
                    .propsFromState(() => ({ conversation: x, entries: u.selectEntries, conversationId: b, isNewGroupConversation: C.rR, perspective: f._h, newConversationParticipants: C.bZ, tweetAttachment: C.Ss, users: y.ZP.selectAll, isUploading: v, media: w }))
                    .adjustStateProps(({ conversation: e, conversationId: t, entries: n, isNewGroupConversation: o, isUploading: r, media: i, newConversationParticipants: s, perspective: a, tweetAttachment: l, users: c }) => {
                        const h = e?.data;
                        return { conversation: (h && (0, d.lk)(h, n, c)) || void 0, conversationId: t, isNewGroupConversation: o, isUploading: r, media: i, newConversationParticipants: s, perspective: a };
                    })
                    .propsFromActions(
                        ({
                            match: {
                                params: { conversationId: e },
                            },
                        }) => ({ cancelUpload: (0, C.Ly)(e), removeMedia: (0, C.Xx)(e), setLastViewedDmInboxPath: g.EA, updateTweetDetailNav: m.NH }),
                    )
                    .withAnalytics({ page: "messages", section: "thread" });
            n(136728);
            var S = n(325686),
                k = n(107267),
                T = n(642153),
                E = n(537392),
                Z = n(731708),
                B = n(154003),
                I = n(392237),
                F = n(111677),
                P = n.n(F),
                L = n(913313),
                D = n(201787),
                R = n(496364),
                O = n(952793),
                M = n(10656),
                W = n(198506),
                z = n(275365),
                A = n(503115),
                K = n(356738),
                N = n(255534),
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
                    r = (0, O.hC)("responsive_web_dm_label_enabled"),
                    { conversation: i, conversationId: s, newConversationParticipants: a, perspective: l } = e,
                    c = (e) => {
                        i?.trusted ? t.push({ pathname: "/messages", state: n.state }) : e();
                    },
                    d = (e, t) => {
                        const n = e.map(({ user: e }) => e.profile_image_url_https).slice(0, t);
                        return o.createElement(S.Z, { style: X.facePile }, o.createElement(T.Z, { userAvatarSize: "large", userAvatarUrls: n }));
                    },
                    h = (e) => {
                        const t = i && i.participants.length ? (0, N.E)({ conversation: i, perspective: l }) : a ? (0, N.E)({ newConversationParticipants: a, perspective: l }) : U,
                            n = i?.participants.length ? o.createElement(N.Z, { conversation: i, perspective: l, textSize: "headline2", withScreenName: !1 }) : a ? o.createElement(N.Z, { newConversationParticipants: a, perspective: l, textSize: "headline2", withScreenName: !1 }) : o.createElement(Z.ZP, { size: "headline2" }, U),
                            r = i && l ? (0, W.Z)(i, l) : void 0,
                            c = (0, C.NL)(s);
                        let h = "large",
                            u = l ? o.createElement(A.Z, { conversation: i, perspective: l, size: h, withLock: c }) : void 0;
                        return r && i?.type === z.eD.GROUP && void 0 === i?.avatar && ((u = ((e) => o.createElement(E.ZP, null, ({ containerWidth: t }) => (M.Z.isTwoColumnLayout(t) ? d(e, G) : d(e, Q))))(r)), (h = "custom")), { ...(e && { titleIconCell: u, titleIconCellSize: h }), title: n, documentTitle: t };
                    },
                    u = () => {
                        const e = i?.type === z.eD.GROUP,
                            t = n?.state?.position || 0;
                        return s ? o.createElement(S.Z, { style: X.rightControlStyles }, o.createElement(V.fK, { conversationId: s }), r && o.createElement(H.Z, { conversationId: s }, o.createElement(B.ZP, { "aria-haspopup": "menu", "aria-label": J, hoverLabel: { label: J }, icon: o.createElement(L.default, null), size: "small", style: X.infoButton, type: "primaryText" })), o.createElement(D.Z, { "aria-label": e ? j : q, conversationId: s, link: { pathname: `/messages/${s}/info`, state: { position: t } }, style: X.infoButton })) : void 0;
                    };
                return o.createElement(
                    R.Z,
                    (() => {
                        const t = h(e.showTitle);
                        return { backLocation: "/messages", onBackClick: c, rightControl: u(), screenType: "primaryDetail", withBottomTabBar: !1, headerless: !1, secondaryBar: r ? o.createElement(K.Z, null) : void 0, ...t };
                    })(),
                    e.children,
                );
            }
            const X = I.default.create((e) => ({ infoButton: { marginEnd: e.spaces.space4 }, rightControlStyles: { flexDirection: "row" }, facePile: { display: "flex", flexDirection: "row" } }));
            function Y({ conversationId: e, history: t, location: n, isNewGroupConversation: d = !1, conversation: h, newConversationParticipants: u, perspective: p, richTextInputContext: m, setLastViewedDmInboxPath: f, typeaheadWrapper: g = i.Z }) {
                const y = (0, a.Z)(e),
                    [C, b] = o.useState(!1),
                    x = (0, l.N)();
                e || d || n.pathname !== window.location.pathname || t.replace({ pathname: "/messages" });
                o.useEffect(() => {
                    e !== y && f(n.pathname);
                }, [e, n.pathname, y, f]);
                const v = "string" == typeof n.query.text ? n.query.text : void 0,
                    w = (0, r.Y4)();
                return o.createElement(
                    s.Z,
                    null,
                    o.createElement(
                        $,
                        { conversation: h, conversationId: e, newConversationParticipants: u, perspective: p, showTitle: !C },
                        o.createElement(c.Z, {
                            conversationId: e,
                            history: t,
                            isWide: w,
                            location: n,
                            onConversationProfileVisibilityChange: (e) => {
                                C !== e && b(e);
                            },
                            prefillText: v,
                            richTextInputContext: m,
                            typeaheadWrapper: g,
                            typingNotifier: x,
                        }),
                    ),
                );
            }
            const ee = _(Y);
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
                c = n(111677);
            const d = n.n(c)().ca9af866;
            function h(e) {
                const t = [],
                    n = i.Z.getBackgroundStyles();
                return t.length > 0
                    ? o.createElement(
                          r.Z,
                          { style: [u.container, n] },
                          o.createElement(r.Z, { style: u.label }, o.createElement(s.ZP, { size: "subtext2", weight: "heavy" }, d)),
                          o.createElement(
                              r.Z,
                              { style: u.row },
                              t.map((e) => o.createElement(a.ZP, { background: "gray700", fontSize: "subtext2", style: u.selectionPill }, e)),
                          ),
                      )
                    : null;
            }
            const u = l.default.create((e) => ({ container: { paddingStart: e.spaces.space16, paddingBottom: e.spaces.space8, display: "flex", alignItems: "center", flexDirection: "row" }, row: { flexDirection: "row", alignItems: "center" }, label: { marginEnd: e.spaces.space4 }, selectionPill: { margin: e.spaces.space2 }, selector: { display: "flex", paddingEnd: e.spaces.space16 } }));
        },
        276032: (e, t, n) => {
            n.d(t, { Z: () => B });
            var o = n(202784),
                r = n(325686),
                i = n(952428),
                s = n(731708),
                a = n(30899),
                l = n(392237),
                c = n(468032),
                d = (n(585488), n(351743)),
                h = n.n(d),
                u = n(457311),
                p = n(682830),
                m = n(965245),
                f = n(736063),
                g = n(725516),
                y = n(792098),
                C = n(96083);
            const b = ({ checked: e, label: t, onToggleCheck: n, refetch: a }) => {
                    const l = o.useCallback(() => {
                        n(t.id);
                    }, [n, t.id]);
                    return t ? o.createElement(r.Z, { role: "listitem" }, o.createElement(i.Z, { onClick: l, style: v.root }, o.createElement(C.Z, { checked: e }), o.createElement(s.ZP, { size: "subtext2" }, t.name))) : null;
                },
                x = o.memo(b),
                v = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, gap: e.spaces.space4 } })),
                w = { buttonLink: "/setting/labels", buttonText: "Manage Labels", buttonType: "brandOutlined" },
                _ = c.Z;
            function S(e) {
                return e.id;
            }
            function k({ conversationId: e, footer: t }) {
                const n = (0, g.z)();
                o.useEffect(() => {
                    n.scribe({ action: "impression" });
                }, [n]);
                const [r, i, s] = (0, y.Z)(),
                    [a] = h()(_),
                    l = r.viewer.user_results.result,
                    c = o.useCallback(
                        (t) => {
                            e && a({ variables: { conversation_id: e, labeled_convo_collection_id: t } });
                        },
                        [e, a],
                    ),
                    d = o.useCallback((e) => o.createElement(x, { checked: !1, label: e, onToggleCheck: c, refetch: s }), [s, c]);
                if ("User" !== l.__typename) return null;
                const p = l.labeled_conversation_collection_slice?.items;
                return p ? (p.length ? o.createElement(m.Z, { assumedItemHeight: 64, cacheKey: "dmLabelsList", footer: t, identityFunction: S, items: p, onNearEnd: i, renderer: d, withoutHeadroom: !0 }) : o.createElement(u.Z, w)) : null;
            }
            const T = { context: "DMLabelsList" };
            function E(e) {
                return o.createElement(f.H, { errorConfig: T, suspenseFallback: o.createElement(p.J, null) }, o.createElement(k, e));
            }
            const Z = o.memo(E);
            function B({ children: e, conversationId: t, onDismiss: n }) {
                const l = o.useCallback(() => {
                        n?.();
                    }, [n]),
                    c = o.useMemo(() => o.createElement(r.Z, { style: I.footer }, o.createElement(i.Z, { style: I.footerButton }, o.createElement(s.ZP, { align: "center", size: "subtext1" }, "Create Label")), o.createElement(i.Z, { style: I.footerButton }, o.createElement(s.ZP, { align: "center", size: "subtext1" }, "Manage Labels"))), []),
                    d = o.useCallback(() => o.createElement(Z, { conversationId: t, footer: c }), [c, t]);
                return o.createElement(a.Z, { contentStyle: I.content, onDismiss: l, preferredVerticalOrientation: "down", renderContent: d, withArrow: !0, withFixedPosition: !0 }, e);
            }
            const I = l.default.create((e) => ({ footer: { borderColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, content: { maxHeight: "250px" }, footerButton: { paddingVertical: e.spaces.space8 } }));
        },
        977952: (e, t, n) => {
            n.d(t, { Z: () => B });
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
                                            a = v(s, w.start_newline),
                                            l = v(s, w.end_newline);
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
                    r = e.longformRichTextTransform ? x : b;
                for (const t of n) !e.stripPastedStyles && r.has(t.style) && o.push(t);
                return (t.inlineStyleRanges = o), t;
            }
            const C = [m.DraftJS.Bold, m.DraftJS.Italic],
                b = (0, u.Z)(C),
                x = (0, u.Z)([...b, m.DraftJS.Strikethrough]);
            function v(e, t) {
                const n = e.match(t);
                if (!n) return 0;
                const [o] = n;
                return o.length - 1;
            }
            const w = { newline: /[\n\r]/, start_newline: /^[\n\r]+/, end_newline: /[\n\r]+$/ };
            function _() {
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
                            let c = g({ text: e, html: t, editorState: n, stripPastedStyles: l, allowExtendedPasteStyles: s, longformRichTextTransform: a });
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
                B = r.forwardRef((e, t) =>
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
        913313: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                s = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.77 6.34l-.7.71c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12l.7-.71L13.76.33.33 13.77l3.89 3.89.7-.71c.59-.59 1.54-.59 2.13 0 .58.59.58 1.54 0 2.12l-.71.71 3.89 3.89 13.43-13.44-3.89-3.89zM6.34 9.88l1.42-1.41 1.76 1.76-1.41 1.42-1.77-1.77zm3 3l1.42-1.41 1.77 1.77-1.42 1.41-1.77-1.77zm4.78 4.78l-1.77-1.77 1.42-1.41 1.76 1.77-1.41 1.41z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => r, Z: () => o });
            n(136728);
            const o = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (n, o, r) => {
                        const i = t ? t(o, r, e) : !!o;
                        return i && n[0].push(o), !i && n[1].push(o), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DMRichTextCompose.96c4335a.js.map
