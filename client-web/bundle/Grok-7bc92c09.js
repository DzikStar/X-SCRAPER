"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7bc92c09"],
    {
        22463: (e, t, a) => {
            a.d(t, { Z: () => L });
            var n = a(202784),
                s = a(325686),
                o = a(371344),
                r = a(154003),
                i = a(815858),
                c = a(731708),
                l = a(392237),
                d = a(111677),
                p = a.n(d),
                m = a(386594),
                u = a(711223),
                g = a(323265),
                h = a(335923),
                f = a(301758),
                y = a(952793),
                b = a(725516),
                C = a(125363),
                E = a(389071),
                w = a(309373),
                x = a(836255),
                T = a(464023),
                S = a(305442),
                v = a(246277),
                k = a(523253),
                I = a(86657),
                Z = a(928831),
                _ = a(492010),
                z = a(207683),
                R = a(988290),
                D = a(813107);
            const P = /https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/,
                A = /^@([A-Za-z0-9_]{1,15})$/,
                H = p().cfd2f35e,
                W = p().e3275464,
                B = p().fb3b9776;
            function L({ bannerMessages: e, conversationKey: t, fileAttachments: a, hasCustomization: l, hideAttachments: d, id: p, isDeepsearch: T, isReasoning: L, mode: M, text: F, user: O }) {
                const $ = (0, C.I0)(),
                    V = (0, E.bD)(t),
                    [G, K] = n.useState(!1),
                    [j, U] = n.useState(!1),
                    [q, J] = n.useState(F),
                    { clearFilterKey: Y, filterKey: X, isReasoningEnabled: Q, isResearchEnabled: ee, selectDeepsearchFilterKey: te, selectReasoningFilterKey: ae } = (0, Z.w)(),
                    [ne, se] = n.useState(!1),
                    { isEditingEnabled: oe, isGrokShare: re } = (0, R.ZP)(),
                    ie = (0, y.hC)("responsive_web_grok_prompt_edit_enabled"),
                    ce = (0, y.hC)("responsive_web_grok_show_citations"),
                    le = !(0, y.hC)("responsive_web_grok_url_trim_disable"),
                    { isInputCompact: de } = (0, Z.w)(),
                    pe = (0, b.z)();
                let me,
                    ue,
                    ge = F;
                if (ge) {
                    const e = P.exec(F ?? "");
                    me = e?.[1];
                    const t = A.exec(F ?? "");
                    ue = t?.[1];
                    const a = e?.[0],
                        n = a && ge.trim().endsWith(a);
                    le && n && a && (ge = ge.replace(a, "")), ue && (ge = ""), (ge = ge.trim());
                }
                const { showChatBubbleEdit: he } = (0, _.u)();
                n.useEffect(() => {
                    me && $(x.Z.fetchOneIfNeeded(me));
                }, [me, $]);
                const fe = n.useCallback(() => K(!0), []),
                    ye = n.useCallback(() => K(!1), []),
                    be = n.useCallback(() => {
                        ie && null != p && ($(V.setEditingMessage(p)), he && U(!0), T && !X ? (te(), se(!0)) : L && !X && (ae(), se(!0)));
                    }, [ie, p, $, V, he, T, L, te, ae, X]),
                    Ce = n.useCallback(() => {
                        $(V.clearEditing()), U(!1), J(F), ne && (Y(), se(!1));
                    }, [$, V, F, ne, Y]),
                    Ee = (0, S.Z)("chatbox_edit"),
                    we = n.useCallback(async () => {
                        p && q && q.trim().length > 0 && (await $((0, w.X)({ analytics: pe, conversationKey: t })({ editingMessageId: p, text: q, fileAttachments: a ?? [], returnCitations: ce, mode: M, imageGenerationCount: Ee, isReasoning: Q, isDeepsearch: ee })), U(!1), se(!1));
                    }, [p, q, $, pe, t, a, ce, M, Ee, Q, ee]),
                    xe = n.createElement(
                        s.Z,
                        { style: N.wrapper },
                        n.createElement(
                            s.Z,
                            { style: N.editBubble },
                            n.createElement(o.Z, {
                                appTextSize: "headline1",
                                autoFocus: !0,
                                maxNumberOfLines: 20,
                                multiline: !0,
                                numberOfLines: 1,
                                onChange: (e) => J(e.target.value),
                                onKeyDown: (e) => {
                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), we());
                                },
                                positionCursorAtEnd: !0,
                                style: N.editInput,
                                value: q,
                            }),
                            n.createElement(
                                s.Z,
                                { style: N.editButtonRow },
                                n.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", onClick: Ce, size: "small", style: N.editButtons, textSizeOverride: "body" }, H),
                                n.createElement(
                                    r.ZP,
                                    {
                                        borderColor: "transparent",
                                        onClick: () => {
                                            we();
                                        },
                                        size: "small",
                                        style: N.editButtons,
                                        textSizeOverride: "body",
                                        type: "primaryFilled",
                                    },
                                    W,
                                ),
                            ),
                        ),
                    ),
                    Te =
                        !d && a
                            ? a.map((e, t) => {
                                  if (e instanceof File);
                                  else if (!v.$.includes(e.mimeType)) return n.createElement(I.Z, { allFiles: a, file: e, isLoading: !1, key: `${e.fileName}_${t}`, messageId: p, width: 200 });
                              })
                            : [],
                    Se = !d && a ? a.map((e, t) => (e instanceof File ? n.createElement(k.Z, { file: e, key: `${e.name}_${t}`, width: 180 }) : v.$.includes(e.mimeType) ? n.createElement(I.Z, { file: e, index: t, isImageActionsEnabled: !re, isLoading: !1, key: `${e.fileName}_${t}`, messageId: p, width: 180, withMediaCarousel: !re }) : void 0)) : [];
                return n.createElement(
                    s.Z,
                    { onMouseEnter: fe, onMouseLeave: ye, style: N.wrapper },
                    Te.length > 0 && n.createElement(s.Z, { style: N.fileAttachmentContainer }, Te),
                    Se.length > 0 && n.createElement(s.Z, { style: N.imageAttachmentsContainer }, Se),
                    me
                        ? n.createElement(
                              s.Z,
                              { style: [N.quoteTweetContainer, de ? N.quoteTweetContainerCompact : null] },
                              n.createElement(f.Z, {
                                  isCondensed: !0,
                                  onPress: (e) => {
                                      g.ZP.isTwitterApp();
                                  },
                                  shouldShowBorder: !0,
                                  tweetId: me,
                                  withBirdwatchPivot: !1,
                                  withLink: !0,
                                  withUserHoverCard: !1,
                              }),
                          )
                        : null,
                    ue ? n.createElement(s.Z, { style: N.userCardContainer }, n.createElement(D.I, { screenName: ue })) : null,
                    j ? xe : ge ? n.createElement(s.Z, { style: N.container }, n.createElement(i.Z, { duration: "long", show: G && ie && oe, type: "fade" }, n.createElement(s.Z, { style: N.editButtonContainer }, n.createElement(r.ZP, { borderColor: "transparent", icon: n.createElement(m.default, { style: N.editIcon }), onClick: be, size: "small", style: { borderRadius: 16 } }))), n.createElement(s.Z, { style: N.chatBubble }, n.createElement(c.ZP, { style: N.textContent }, n.createElement(z.default, { allowedTokenTypes: ["code", "codespan", "list", "text", "space", "paragraph"], disableLinks: g.ZP.isWebView(), isAnimated: !1, markdownText: ge })))) : null,
                    l && n.createElement(c.ZP, { color: "gray700", size: "subtext2" }, B),
                    e && e.length > 0
                        ? n.createElement(
                              s.Z,
                              { style: N.bannerMessages },
                              e.map((e) => n.createElement(s.Z, { key: e, style: N.banner }, n.createElement(u.default, { style: N.bannerIcon }), n.createElement(s.Z, { style: N.bannerTextContainer }, n.createElement(h.Z, { markdownText: e, style: N.bannerText })))),
                          )
                        : null,
                );
            }
            const N = l.default.create((e) => ({
                container: { flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", width: "100%", gap: e.spaces.space4 },
                wrapper: { width: "100%", alignItems: "flex-end", paddingBottom: e.spaces.space24, paddingHorizontal: e.spaces.space16, maxWidth: T.vf, gap: e.spaces.space8 },
                editButtonContainer: { paddingTop: e.spaces.space4 },
                EditIcon: { height: 18, width: 18 },
                editBubble: { paddingHorizontal: 0, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray50, alignItems: "center", width: "100%", maxWidth: "100%", gap: e.spaces.space4 },
                chatBubble: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderRadius: e.spaces.space16, borderWidth: 1, borderColor: e.colors.borderColor, borderStyle: "solid", backgroundColor: e.colors.gray50, maxWidth: "70%", alignItems: "center", gap: e.spaces.space12 },
                textContent: { maxWidth: "100%", lineHeight: 27 },
                editInput: { backgroundColor: "transparent", borderColor: "transparent", width: "100%", lineHeight: 27 },
                fileAttachmentContainer: { maxWidth: "100%", marginBottom: e.spaces.space4, flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap", gap: e.spaces.space8, justifyContent: "end" },
                quoteTweetContainer: { marginTop: e.spaces.space8, flexShrink: 1 },
                quoteTweetContainerCompact: { alignSelf: "stretch" },
                userCardContainer: {},
                bannerMessages: { width: "100%", gap: e.spaces.space8 },
                banner: { padding: e.spaces.space12, borderRadius: e.borderRadii.medium, gap: e.spaces.space12, flexDirection: "row", justifyContent: "flex-end", position: "relative" },
                bannerIcon: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 },
                bannerTextContainer: {},
                bannerText: { maxWidth: "100%" },
                editButtonRow: { width: "100%", alignItems: "center", justifyContent: "flex-end", flexDirection: "row", gap: e.spaces.space4 },
                editButtons: { borderRadius: e.spaces.space12, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
                imageAttachmentsContainer: { flexDirection: "row", flexWrap: "wrap", maxWidth: "100%", justifyContent: "flex-end" },
                fileAttachmentsContainer: { maxWidth: "100%", gap: e.spaces.space8, alignItems: "stretch" },
                editIcon: { fill: "none", height: e.spaces.space20, width: e.spaces.space20 },
            }));
        },
        908118: (e, t, a) => {
            a.d(t, { Z: () => w });
            var n = a(202784),
                s = a(811176),
                o = a(111677),
                r = a.n(o),
                i = a(473026),
                c = a(498720),
                l = a(956272),
                d = a(38716),
                p = a(254944),
                m = a(474761),
                u = a(530813),
                g = a(517330),
                h = a(194661),
                f = a(125363),
                y = a(390387);
            const b = { id: "TELL_US_MORE", labelEn: "Tell us more", icon: "reply" },
                C = { DIDNT_WANT_IMAGE: r().ja8d189e, WANTED_IMAGE: r().e951f04e, WANTED_DIFFERENT_IMAGE: r().c503b35e, CODE_INCORRECT: r().d4371c92, WANTED_DIFFERENT_CODE: r().dbe8586e, DIDNT_WANT_CODE: r().e360eb4a, MATH_INCORRECT: r().a18657ca, DIDNT_WANT_MATH: r().b8b86300, INCORRECT_ANSWER: r().e4c34788, WANTED_SOMETHING_ELSE: r().b220a8c8, BIASED_ANSWER: r().b115fd18, BAD_STYLE_TONE: r().dc637214, WANTED_POST_SEARCH: r().f02e6d42, BAD_POST_RESULTS: r().bbec6bba, DIDNT_WANT_POSTS: r().b494d088, DOESNT_UNDERSTAND_IMAGE: r().a44974f2, [b.id]: r().bd44a8a8 },
                E = { image: i.default, code: c.default, search: l.default, math: d.default, style: p.default, bias: m.default, incorrect: u.default, generic: g.default, reply: h.default };
            function w({ feedbackLabels: e, onClose: t, onSelect: a, onSelectOtherOption: o }) {
                const r = (0, f.v9)(y.VT).startsWith("en"),
                    i = e ? [...e, b] : [b],
                    c = n.useCallback(
                        (e) => {
                            e === b.id ? o() : a(e);
                        },
                        [a, o],
                    ),
                    l = i.filter((e) => e.id in C || r).map((e) => ({ text: C[e.id] || e.labelEn, Icon: E[e.icon] || E.generic, onClick: () => c(e.id) }));
                return n.createElement(s.Z, { items: l, onCloseRequested: t, preferredHorizontalOrientation: "right" });
            }
        },
        430506: (e, t, a) => {
            a.d(t, { Z: () => T });
            var n = a(202784),
                s = a(325686),
                o = a(351743),
                r = a.n(o),
                i = a(138099),
                c = a(731708),
                l = a(154003),
                d = a(855488),
                p = a(392237),
                m = a(111677),
                u = a.n(m),
                g = a(837020),
                h = a(125363),
                f = a(393261),
                y = a(975617);
            const b = u().fcdbe764,
                C = u().bb6adb22,
                E = u().a91bb144,
                w = u().ia5e7488,
                x = { label: w };
            function T({ conversationId: e, conversationItemId: t, modelVersion: a, onClose: o }) {
                const [p, m] = n.useState(""),
                    u = n.useCallback((e) => {
                        m(e.target.value);
                    }, []),
                    T = (0, h.I0)(),
                    [v] = r()(f.Z),
                    k = n.useCallback(() => {
                        "" !== p &&
                            v({
                                variables: { contextualFeedback: { comment: p }, conversationId: e, conversationItemId: t, modelVersion: a },
                                onCompleted: (e) => {
                                    e.create_grok_conversation_feedback?.grok_feedback_error ? (0, y.J)(T) : (o(), (0, y.P)(T));
                                },
                            });
                    }, [p, e, t, a, T, v, o]);
                return n.createElement(i.Z, { onMaskClick: o, style: S.sheet, type: "bottom", withMask: !0 }, n.createElement(s.Z, { style: S.header }, n.createElement(c.ZP, { size: "headline1" }, b)), n.createElement(l.ZP, { "aria-label": w, hoverLabel: x, icon: n.createElement(g.default, null), onPress: o, style: S.close, type: "primaryText" }), n.createElement(d.Z, { autoComplete: "off", autoFocus: !0, label: C, name: "grokFeedback", onChange: u, onSubmitEditing: k, value: p }), n.createElement(l.ZP, { disabled: "" === p, onPress: k, size: "large", style: S.button, type: "primaryFilled" }, E));
            }
            const S = p.default.create((e) => ({ close: { position: "absolute", end: e.spaces.space16, top: e.spaces.space16 }, button: { marginHorizontal: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 }, header: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
        },
        393261: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(550523);
            a(585488);
            const s = n.Z;
        },
        975617: (e, t, a) => {
            a.d(t, { J: () => l, P: () => c });
            var n = a(111677),
                s = a.n(n),
                o = a(601576);
            const r = s().h0fa15f2,
                i = s().ef4602ec;
            function c(e) {
                e((0, o.fz)({ text: r }));
            }
            function l(e) {
                e((0, o.fz)({ text: i }));
            }
        },
        697403: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                s = a(325686),
                o = a(215337),
                r = a(392237),
                i = a(731708),
                c = a(111677);
            const l = a.n(c)().d228a9a0;
            function d({ children: e, disableShowMore: t, foldedHeight: a, heightBreakpoint: c, onOpen: d }) {
                const [m, u] = n.useState(),
                    [g, h] = n.useState(!1),
                    [f, y] = n.useState(a),
                    b = n.useCallback(
                        (e) => {
                            const t = e.nativeEvent.layout.height;
                            t < c ? (y(t), u(!1)) : (y(a), u(!0));
                        },
                        [c, a, y],
                    ),
                    C = n.useMemo(() => [p.contentContainer, g || (!m && void 0 !== m) ? void 0 : { maxHeight: f }], [f, g, m]),
                    E = n.useCallback(() => {
                        h(!0), d?.();
                    }, [h, d]),
                    w = !g && m && !t;
                return n.createElement(s.Z, { style: p.container }, n.createElement(s.Z, { style: C }, n.createElement(s.Z, { onLayout: b, style: p.contentWrapper }, e), w ? n.createElement(s.Z, { style: p.seeMoreContainer }, n.createElement(o.Z, { colors: [r.default.theme.colors.transparent, r.default.theme.colors.cellBackground], style: p.foldShadow }), n.createElement(i.ZP, { color: "link", onPress: E, style: p.seeMoreLabel, withInteractiveStyling: !0 }, l)) : null));
            }
            const p = r.default.create((e) => ({ container: { width: "100%", maxWidth: "100%" }, contentContainer: { width: "100%", maxWidth: "100%", overflow: "hidden" }, contentWrapper: { width: "100%", maxWidth: "100%", position: "relative" }, foldShadow: { position: "absolute", zIndex: 100, bottom: "100%", start: 0, width: "100%", maxWidth: "100%", height: e.spaces.space36 }, seeMoreLabel: { marginTop: e.spaces.space8, marginBottom: e.spaces.space12, cursor: "pointer" }, seeMoreContainer: { position: "absolute", width: "100%", bottom: 0, backgroundColor: e.colors.cellBackground, overflow: "visible", zIndex: 100 } }));
        },
        667945: (e, t, a) => {
            a.d(t, { Z: () => Ie });
            var n = a(202784),
                s = a(325686),
                o = a(731708),
                r = a(815858),
                i = a(392237),
                c = a(111677),
                l = a.n(c),
                d = a(711223),
                p = a(323265),
                m = a(952793),
                u = a(125363),
                g = a(919022),
                h = a(464023),
                f = a(207683),
                y = a(603416),
                b = a(583429),
                C = a(983650),
                E = a(530732),
                w = a(721266),
                x = a(58399),
                T = a(187669),
                S = a(246851),
                v = a(725516),
                k = a(988290),
                I = a(767075),
                Z = a(194167),
                _ = a(235493),
                z = a(757483),
                R = a(215337),
                D = a(841972),
                P = a(617568),
                A = a(214997),
                H = a(525271),
                W = a(465086);
            const B = l().a4d9dbfa;
            function L({ completed: e, gradientColor: t, onDismissed: a, style: o, trace: r }) {
                const [c, l] = n.useState(null),
                    [d] = (0, W.h)({ scrollingFrame: c?.getScrollableNode(), enabled: !0, autoStart: !0 });
                return (
                    (0, T.q)(() => {
                        const e = "deep-search-summary-card-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n    .deep-search-summary-card-sub-step-markdown-text li {\n      margin-top: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text ul {\n      margin-bottom: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text span {\n      font-size: ${i.default.theme.fontSizes.subtext2} !important;\n      color: ${i.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n\n    .deep-search-summary-card-trace-preview-markdown-text span {\n      font-size: ${i.default.theme.fontSizes.subtext2} !important;\n      color: ${i.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n  `);
                        const a = document.head;
                        return (
                            a && a.appendChild(t),
                            () => {
                                const t = document.getElementById(e);
                                t && t.remove();
                            }
                        );
                    }),
                    n.createElement(H.Z, { align: "right", buttonType: "primaryText", onDismissed: a, title: B }, n.createElement(s.Z, { style: N.traceScrollViewContainer }, n.createElement(A.Z, { automaticallyAdjustKeyboardInsets: !0, contentContainerStyle: N.traceScrollViewContentContainer, ref: l, style: N.traceScrollView }, n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(f.default, { disableLinks: p.ZP.isWebView(), isAnimated: !1, markdownText: r })), n.createElement(s.Z, { ref: d, style: { position: "relative", top: -250, width: 100, height: 1 } }), n.createElement(s.Z, { style: { position: "relative", width: 100, height: 300 } }))))
                );
            }
            const N = i.default.create((e) => ({ thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, traceScrollViewContainer: { flex: 1, width: "100%", maxWidth: 500, position: "relative" }, traceScrollView: { flex: 1, width: "100%" }, traceScrollViewContentContainer: { flexGrow: 1, padding: e.spaces.space16 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 }, interactivePinButton: { backgroundColor: "transparent" }, pinButtonContainer: { position: "absolute", bottom: e.spaces.space16, start: "50%", transform: "translateX(-50%)" }, pinButton: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.borderRadii.xLarge, backgroundColor: "transparent", transition: "background-color 0.2s ease", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hoveredPinButton: { backgroundColor: e.colors.gray0 }, pinIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, pinText: { fontSize: e.fontSizes.subtext1, color: e.colors.gray900 } })),
                M = n.memo(L);
            function F({ disableExpand: e, gradientColor: t, previewHeight: a, style: o, trace: r }) {
                const c = n.useRef(null),
                    [l, d] = n.useState(!1);
                n.useEffect(() => {
                    c.current && !l && c.current.scrollToEnd({ animated: !1 });
                }, [r, l]);
                const p = n.useCallback(() => [z.Z.hexToCss(t || i.default.theme.colors.gray50, 0), z.Z.hexToCss(t || i.default.theme.colors.gray50, 0.8), z.Z.hexToCss(t || i.default.theme.colors.gray50, 1)], [t]);
                return n.createElement(
                    s.Z,
                    { style: [O.tracePreviewContainer, o] },
                    n.createElement(
                        s.Z,
                        { style: [O.collapsedTracePreviewTextGradientContainer, O.expandedTracePreviewTextGradientContainer, a ? { height: a } : void 0] },
                        n.createElement(E.Z, { disabled: e, interactiveStyles: O.interactiveTracePreviewHeaderContainer, onClick: () => d(!0) }, ({ isHovered: t }) => n.createElement(s.Z, { style: O.tracePreviewTextGradientContainer }, n.createElement(s.Z, { style: O.tracePreviewScrollerContainer }, n.createElement(P.w, { charLimit: 1500, text: r })), n.createElement(R.Z, { angle: 0, colors: p(), style: O.traceGradientTop }), n.createElement(R.Z, { colors: p(), style: O.traceGradientBottom }), !e && n.createElement(D.default, { style: [O.expandThinkingTraceIcon, t ? O.hoveredExpandThinkingTraceIcon : void 0] }))),
                    ),
                    l && n.createElement(M, { onDismissed: () => d(!1), trace: r }),
                );
            }
            const O = i.default.create((e) => ({ tracePreviewContainer: { backgroundColor: e.colors.gray50, display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: e.borderRadii.medium }, tracePreviewHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space12, cursor: "pointer", transition: "background-color 0.2s ease", backgroundColor: e.colors.gray50 }, interactiveTracePreviewHeaderContainer: { backgroundColor: "transparent" }, hoveredTracePreviewHeaderContainer: { backgroundColor: e.colors.gray100 }, thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, expandThinkingTraceIcon: { position: "absolute", top: e.spaces.space12, end: e.spaces.space12, color: e.colors.gray800, width: 14, height: 14, transition: "transform 0.2s ease" }, hoveredExpandThinkingTraceIcon: { transform: "scale(1.2)" }, collapsedTracePreviewTextGradientContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease" }, expandedTracePreviewTextGradientContainer: { gridTemplateRows: "1fr" }, tracePreviewTextGradientContainer: { height: 150, positon: "relative" }, tracePreviewScrollerContainer: { paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, tracePreviewText: { color: e.colors.gray800 }, traceGradientTop: { position: "absolute", width: "100%", height: "20%", top: 0 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 } })),
                $ = n.memo(F),
                V = l().j1ab5f40,
                G = l().ee000b0d;
            function K({ aborted: e, completed: t, completedTimestamp: a, expanded: r, fromTimestamp: c, isDeeperMode: l, isPastSummary: d, numSources: p, onClick: m, showTrace: u, style: g, trace: h }) {
                const { isCompactLayout: f } = (0, k.ZP)(),
                    y = 0 !== c,
                    b = n.useCallback(() => n.createElement(s.Z, { style: j.researchLabelContainer }, n.createElement(o.ZP, { style: j.researchLabel, weight: "bold" }, (0, Z.YM)(t, !0, l)), !d && !r && y && n.createElement(_.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: c })), [r, d, t, e, c, a, y, l]),
                    C = n.useCallback(() => (r ? n.createElement(s.Z, { style: j.subHeaderContainer }, !d && y ? n.createElement(n.Fragment, null, n.createElement(_.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: c, style: j.subheaderElapsedSeconds }), n.createElement(s.Z, { style: j.dot }), n.createElement(o.ZP, { style: j.sourcesText }, G({ numSources: p }))) : p > 0 && n.createElement(o.ZP, { style: j.sourcesText }, G({ numSources: p }))) : n.createElement(s.Z, { style: j.subHeaderContainer }, n.createElement(o.ZP, { style: j.subHeaderText }, V), p > 0 && n.createElement(n.Fragment, null, n.createElement(s.Z, { style: j.dot }), n.createElement(o.ZP, { style: j.sourcesText }, G({ numSources: p }))))), [r, d, t, e, p, c, a, y]);
                return n.createElement(
                    s.Z,
                    { style: j.container },
                    n.createElement(E.Z, { interactiveStyles: j.interactiveHeaderContainer, onClick: m }, ({ isHovered: e }) => n.createElement(s.Z, { style: [j.headerContainer, f ? j.compactHeaderContainer : void 0, !r && e ? j.hoveredHeaderContainer : void 0] }, n.createElement(s.Z, { style: j.infoContainer }, b(), C()), n.createElement(x.default, { style: [j.caretIcon, r ? j.expandedCaretIcon : void 0] }))),
                    !r && !t && !e && u && n.createElement($, { disableExpand: !0, gradientColor: i.default.theme.colors.gray0, previewHeight: 50, style: j.tracePreview, trace: h }),
                );
            }
            const j = i.default.create((e) => ({ container: { width: "100%" }, interactiveHeaderContainer: { backgroundColor: "transparent", cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", width: "100%" }, compactHeaderContainer: { paddingHorizontal: e.spaces.space12 }, hoveredHeaderContainer: { backgroundColor: e.colors.gray100 }, infoContainer: { display: "flex", flexDirection: "column" }, subHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, subHeaderText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, dot: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray800 }, subheaderElapsedSeconds: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, sourcesText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, researchLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, researchLabel: {}, caretIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800, transform: "rotate(0deg)", transition: "transform 0.2s ease" }, expandedCaretIcon: { transform: "rotate(90deg)" }, tracePreview: { backgroundColor: e.colors.gray0 } }));
            var U = a(25825),
                q = a(293723),
                J = a(227674),
                Y = a(397159),
                X = a(956272),
                Q = a(20716),
                ee = a(791278),
                te = a(229177),
                ae = a(916559);
            function ne({ subStep: e }) {
                const [t, a] = n.useState(null),
                    o = (0, m.hC)("responsive_web_grok_animated_text_enabled"),
                    r = n.useCallback(() => {
                        if (e.summary) {
                            const t = e.summary;
                            return n.createElement(s.Z, { style: [se.section, se.summarySection] }, n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(f.default, { disableLinks: p.ZP.isWebView(), isAnimated: o, markdownText: t })));
                        }
                        return null;
                    }, [o, e.summary]),
                    i = n.useCallback(() => {
                        const r = e.actionSummary || "";
                        if (r) {
                            const i = e.actionIcon,
                                c = (i && (0, Q.wG)(i)) || X.default;
                            return n.createElement(s.Z, null, n.createElement(s.Z, { style: se.actionContainer }, n.createElement(c, { style: se.actionIcon }), n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(f.default, { disableLinks: p.ZP.isWebView(), isAnimated: o, markdownText: r }))), e.webResults && e.webResults.length > 0 && n.createElement(s.Z, { style: se.actionContainer }, n.createElement(s.Z, { style: se.actionIcon }), n.createElement(ee.Z, { style: se.results, webResults: e.webResults })), e.xPostIds && e.xPostIds.length > 0 && n.createElement(s.Z, { style: se.actionContainer }, n.createElement(s.Z, { style: se.actionIcon }), n.createElement(te.Z, { style: se.results, xPostIds: e.xPostIds })), t ? n.createElement(ae.E, { onDrawerDismiss: () => a(null), webResults: [t] }) : null);
                        }
                    }, [e.actionSummary, e.webResults, e.xPostIds, e.actionIcon, t, o]);
                return e.messageTag === Y.iS.SUMMARY ? r() : e.messageTag === Y.iS.DECISION || e.messageTag === Y.iS.RAW_FUNCTION_RESULT ? i() : null;
            }
            const se = i.default.create((e) => ({ section: { display: "flex", flexDirection: "column" }, summarySection: { position: "relative", start: -11 }, results: { marginTop: e.spaces.space8, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, actionContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, actionWebResultInteractiveContainer: { backgroundColor: "transparent", height: "100%" }, actionWebResultContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, cursor: "pointer", transition: "background-color 0.2s ease", height: "100%" }, hoveredActionWebResultContainer: { backgroundColor: e.colors.gray100 }, acitonSummaryContainer: { backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "flex", flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.medium, gap: e.spaces.space8, flex: 1 }, actionIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, actionWebResultFavicon: { width: e.spaces.space12, height: e.spaces.space12, borderRadii: e.borderRadii.medium }, actionWebResultUrl: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 }, loader: { opacity: 0, display: "none", transition: "opacity 0.2s ease", position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)" }, startedLoader: { opacity: 1, display: "visible" } })),
                oe = n.memo(ne),
                re = l().c2745fa4;
            function ie({ completed: e, isFirstStep: t, isLastStep: a, statusIconBackgroundColor: r, step: c }) {
                const l = (0, v.z)(),
                    [d, p] = n.useState(!1),
                    [m, u] = n.useState(!0),
                    g = (0, S.Z)(e),
                    h = (0, S.Z)(c.state),
                    f = c.state === Y.Fi.IN_PROGRESS,
                    y = c.state === Y.Fi.COMPLETED,
                    b = c.state === Y.Fi.FAILED;
                return (
                    n.useEffect(() => {
                        (h === Y.Fi.IN_PROGRESS && y) || (b && !d) ? u(!1) : e && !g && u(!0);
                    }, [e, g, h, y, b, d]),
                    n.createElement(
                        s.Z,
                        { key: c.id, style: ce.container },
                        n.createElement(
                            E.Z,
                            {
                                interactiveStyles: ce.interactiveTitleContainer,
                                onClick: () => {
                                    u(!m), p(!0), l.scribe({ component: `${Z.nJ}-header-click`, action: "click", element: c.header || "" });
                                },
                                style: [ce.titleContainer, t ? { paddingTop: 0 } : void 0],
                            },
                            ({ isHovered: e }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: ce.statusTitleContainer }, n.createElement(s.Z, { style: [ce.statusIconContainer, r ? { backgroundColor: r } : void 0] }, n.createElement(U.Z, { color: i.default.theme.colors.gray900, size: "small", style: [ce.statusIcon, f ? ce.statusIconVisible : void 0, f ? void 0 : ce.statusIconHide] }), n.createElement(q.default, { style: [ce.statusIcon, ce.completeFailedIcon, y ? ce.completeFailedIconVisible : void 0] }), n.createElement(J.default, { style: [ce.statusIcon, ce.completeFailedIcon, b ? ce.completeFailedIconVisible : void 0] })), b ? n.createElement(o.ZP, { style: ce.title }, re) : n.createElement(o.ZP, { style: [ce.title, e ? ce.hoveredTitle : void 0] }, c.header)), c.subSteps.length > 0 && n.createElement(x.default, { style: [ce.caret, m ? ce.expandedCaret : void 0] })),
                        ),
                        n.createElement(
                            s.Z,
                            { style: [ce.outerContentContainer, m && c.subSteps.length > 0 ? ce.expandedOuterContentContainer : void 0] },
                            n.createElement(
                                s.Z,
                                { style: ce.contentContainer },
                                c.subSteps.map((e, t) => n.createElement(oe, { key: `step-${c.id}-substep-${t}`, subStep: e })),
                            ),
                        ),
                    )
                );
            }
            const ce = i.default.create((e) => ({
                    container: { position: "relative" },
                    interactiveTitleContainer: { backgroundColor: "transparent" },
                    titleContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space8, cursor: "pointer", gap: e.spaces.space8 },
                    statusTitleContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                    statusIconContainer: { position: "relative", width: e.spaces.space20, height: e.spaces.space20, backgroundColor: "transparent" },
                    statusIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)", opacity: 0, width: "100%", height: "100%" },
                    statusIconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                    statusIconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] },
                    completeFailedIcon: { color: e.colors.gray900, width: e.spaces.space20, height: e.spaces.space20 },
                    completeFailedIconVisible: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.8)" }, "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" }, "75%": { opacity: 0.9, transform: "translate(-50%, -50%) scale(0.95)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] },
                    title: { fontSize: e.fontSizes.body, color: e.colors.brandColor, transition: "color 0.2s ease" },
                    hoveredTitle: { color: e.colors.brandColor },
                    caret: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.brandColor, transform: "rotate(0deg)", transition: "transform 0.2s ease" },
                    expandedCaret: { transform: "rotate(90deg)" },
                    outerContentContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease" },
                    expandedOuterContentContainer: { gridTemplateRows: "1fr" },
                    contentContainer: { overflow: "hidden", display: "flex", flexDirection: "column", paddingStart: e.spaces.space28, gap: e.spaces.space8 },
                })),
                le = (e, t) => e.step.id === t.step.id && e.step.header === t.step.header && e.step.subSteps === t.step.subSteps && e.step.state === t.step.state && e.isFirstStep === t.isFirstStep && e.isLastStep === t.isLastStep && e.completed === t.completed,
                de = n.memo(ie, le),
                pe = l().eaf55eb4;
            function me({ completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: a }) {
                const r = (0, v.z)(),
                    { isCompactLayout: c } = (0, k.ZP)(),
                    { accumulatedTrace: l, deepsearchArgs: d, isPastSummary: p, state: m, steps: u, traceEnabled: g } = a,
                    h = "COMPLETED" === m,
                    f = "ABORTED" === m,
                    [y, b] = n.useState(!1),
                    [C, _] = n.useState(!h),
                    z = (0, S.Z)(h),
                    R = !!d && "deeper" === d.mode;
                return (
                    (0, T.q)(() => {
                        const e = "deep-search-summary-card-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n      .deep-search-summary-card-sub-step-markdown-text {\n        flex: 1;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text li {\n        margin-top: 0px !important;\n        padding-left: 5px !important;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text ul {\n        margin-bottom: 0px !important;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text span {\n        font-size: ${i.default.theme.fontSizes.subtext2} !important;\n        color: ${i.default.theme.colors.gray900} !important;\n        line-height: 24px;\n      }\n\n      .deep-search-summary-card-trace-preview-markdown-text span {\n        font-size: ${i.default.theme.fontSizes.subtext2} !important;\n        color: ${i.default.theme.colors.gray900} !important;\n        line-height: 24px;\n      }\n    `);
                        const a = document.head;
                        return (
                            a && a.appendChild(t),
                            () => {
                                const t = document.getElementById(e);
                                t && t.remove();
                            }
                        );
                    }),
                    n.useEffect(() => {
                        !z && h && _(!1);
                    }, [h, z]),
                    n.createElement(
                        s.Z,
                        { style: [ue.container, c ? ue.compactContainer : void 0] },
                        n.createElement(K, {
                            aborted: f,
                            completed: h,
                            completedTimestamp: e,
                            expanded: C,
                            fromTimestamp: t,
                            isDeeperMode: R,
                            isPastSummary: p,
                            numSources: a.getNumSources(),
                            onClick: () => {
                                r.scribe({ element: `${Z.nJ}-compact-card-${C ? "collapse" : "expand"}`, action: "click" }), _(!C);
                            },
                            showTrace: g && !p,
                            trace: l,
                        }),
                        u.length > 0 &&
                            n.createElement(
                                s.Z,
                                { style: [ue.collapsedStepsContainer, c ? ue.compactCollapsedStepsContainer : void 0, C ? ue.expandedStepsContainer : void 0] },
                                n.createElement(
                                    s.Z,
                                    { style: ue.stepsOuterContainer },
                                    g &&
                                        n.createElement(
                                            E.Z,
                                            {
                                                interactiveStyles: ue.interactiveShowThinkingContainer,
                                                onPress: () => {
                                                    b(!0), r.scribe({ element: `${Z.nJ}-open-trace`, action: "click" });
                                                },
                                                style: ue.showThinkingContainer,
                                            },
                                            ({ isHovered: e }) => n.createElement(n.Fragment, null, n.createElement(o.ZP, { style: [ue.showThinkingText, e ? ue.hoveredShowThinkingText : void 0] }, pe), n.createElement(x.default, { style: ue.showThinkingCaret })),
                                        ),
                                    n.createElement(
                                        s.Z,
                                        null,
                                        n.createElement(s.Z, { style: ue.lineContainer }, n.createElement(s.Z, { style: ue.line })),
                                        n.createElement(
                                            s.Z,
                                            { style: ue.stepsContainer },
                                            u.map((e, t) => n.createElement(de, { completed: h, isFirstStep: 0 === t, isLastStep: t === u.length - 1, key: e.id, statusIconBackgroundColor: i.default.theme.colors.gray0, step: e })),
                                        ),
                                    ),
                                    n.createElement(w.Z, { size: c ? "space12" : "space16" }),
                                ),
                            ),
                        y &&
                            n.createElement(M, {
                                completed: h,
                                onDismissed: () => {
                                    b(!1), r.scribe({ element: `${Z.nJ}-close-trace`, action: "click" });
                                },
                                trace: l,
                            }),
                        n.createElement(I.Z, { analyticsMetricPrefix: Z.nJ, completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: a }),
                    )
                );
            }
            const ue = i.default.create((e) => ({ container: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space16, borderRadius: e.borderRadii.medium, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden" }, compactContainer: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, collapsedStepsContainer: { flex: 1, display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease", marginHorizontal: e.spaces.space16, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, compactCollapsedStepsContainer: { marginHorizontal: e.spaces.space12 }, expandedStepsContainer: { gridTemplateRows: "1fr" }, stepsOuterContainer: { display: "flex", flexDirection: "column", flex: 1, height: "100%", position: "relative" }, lineContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: e.spaces.space20, position: "absolute", start: 0, top: 0, height: "100%" }, line: { width: 1, height: `calc(100% - ${e.spaces.space16})`, backgroundColor: e.colors.gray200 }, stepsContainer: { display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }, showThinkingContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer", paddingBottom: e.spaces.space16, width: "max-content", opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, interactiveShowThinkingContainer: { backgroundColor: "transparent" }, showThinkingText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1, transition: "all 0.2s ease" }, hoveredShowThinkingText: { color: e.colors.gray900 }, showThinkingCaret: { color: e.colors.gray700, width: e.spaces.space16, height: e.spaces.space16 } }));
            var ge = a(819102),
                he = a(694456),
                fe = a(299399),
                ye = a(545519),
                be = a(468603),
                Ce = a(567778),
                Ee = a(986274),
                we = a(915066),
                xe = a(618770),
                Te = a(917118),
                Se = a(674756);
            const ve = l().b327c12a,
                ke = l().ca93f2ee;
            function Ie({ analysisEntityId: e, bannerMessages: t, conversationKey: a, fileAttachments: i, id: c, isDeleted: l, isLoading: E, isAborted: w, query: x, sender: T, text: S, trace: v, tweetIds: I = [], upsell: _, webResults: z = [], citedWebResults: R = [], intermediateImageResults: D = [], promptSource: P, cardAttachments: A, followUpSuggestedMode: H, performanceMetrics: W, userChatItemId: B, mediaTweetIds: L, chatResponseAnnotations: N, isLastResponse: M, messageStepAccumulator: F, isPastThinkingTrace: O, disclaimer: $, chatItemId: V, expectedImageAspectRatio: G, memoryReferences: K, reasoningLayout: j }) {
                const U = (0, m.hC)("responsive_web_grok_animated_text_enabled"),
                    q = (0, m.hC)("responsive_web_grok_analyze_helpful_feedback"),
                    J = (0, m.hC)("responsive_web_grok_show_grok_performance_metrics"),
                    Y = (0, m.hC)("responsive_web_grok_show_grok_tweet_media"),
                    { isCompactLayout: X, isShowButtons: Q } = (0, k.ZP)(),
                    [ee, te] = n.useState(!1),
                    ae = U && !!E,
                    ne = (0, ge.u)(S || "", ae),
                    se = (0, ge.u)(v || "", ae),
                    oe = (0, u.v9)((e) => g.ZP.select(e, h.c0)),
                    re = "UNIFIED" === j,
                    { completedTimestamp: ie, fromTimestamp: ce } = (0, ye.V)(a, V ?? "", W),
                    le = n.useRef(null),
                    de = q && "analyze_post" === P,
                    pe = n.useMemo(() => [...z, ...R], [z, R]),
                    ue = n.useMemo(() => (A || []).filter((e) => !e.id), [A]);
                if (!oe) return null;
                const Ie = i && i.length > 0 && i[0].mimeType.startsWith("image"),
                    _e = $ ? [...t, $] : t,
                    ze = I.length > 0 || z.length > 0;
                return n.createElement(
                    s.Z,
                    { style: [Ze.container, X ? Ze.compactContainer : void 0] },
                    n.createElement(
                        s.Z,
                        { style: Ze.content },
                        n.createElement(be.ZP, {
                            completedTimestamp: ie,
                            expanded: ee,
                            fromTimestamp: ce,
                            hasCardAttachments: A && A.length > 0,
                            isImageResponse: Ie,
                            isLoading: E,
                            messageStepAccumulator: F,
                            onClick: () => {
                                te(!ee);
                            },
                            onComplete: () => te(!1),
                            reasoningLayout: j,
                            searchQuery: x,
                            shownText: ne,
                            shownTrace: se,
                            style: Ze.status,
                        }),
                        F && re && n.createElement(r.Z, { show: ee, type: "slide" }, n.createElement(he.Z, { completedTimestamp: ie, fromTimestamp: ce, hideSidePanel: !0, isLoading: E, messageStepAccumulator: F })),
                        F && !re && "PENDING" !== F.state && (X ? n.createElement(me, { completedTimestamp: ie, fromTimestamp: ce, messageStepAccumulator: F }) : n.createElement(Z.ZP, { completedTimestamp: ie, fromTimestamp: ce, isLoading: E, messageStepAccumulator: F })),
                        "" !== se && !re && n.createElement(fe.Z, { completed: !("" !== se && "" === ne && E), endStreamTimestamp: ie, fromTimestamp: ce, hasResponseText: !!S, id: c ?? "", isPastThinkingTrace: O, performanceMetrics: W ?? {}, shownTrace: se }),
                        Ie ? n.createElement(s.Z, { style: [Ze.textContainer, ae ? Ze.animation : null] }, n.createElement(o.ZP, { color: "gray700", size: "subtext1" }, ve)) : null,
                        n.createElement(xe.K, { expectedImageAspectRatio: G, fileAttachments: i, intermediateImageResults: D, isAborted: w, isLoading: E, messageId: c }),
                        ue.length > 0 &&
                            n.createElement(
                                s.Z,
                                { style: Ze.cards },
                                ue.map((t) => n.createElement(C.Z, { analysisEntityId: e, cardAttachment: t, conversationKey: a, isAnimated: ae, key: `${t.cardType}-${t.variant || ""}-${t.created_at || ""}`, userChatItemId: B })),
                            ),
                        _e.length > 0
                            ? n.createElement(
                                  s.Z,
                                  { style: Ze.bannerMessages },
                                  _e.map((e) => n.createElement(s.Z, { key: e, style: Ze.banner }, n.createElement(d.default, { style: Ze.bannerIcon }), n.createElement(o.ZP, { style: Ze.bannerText }, e))),
                              )
                            : null,
                        L?.length && Y ? n.createElement(Te.e, { isAnimated: ae, mediaIds: L }) : null,
                        n.createElement(s.Z, { ref: le, style: Ze.textContainer }, Ie ? null : l ? n.createElement(o.ZP, { style: Ze.deletedText }, ke) : n.createElement(f.default, { cardAttachments: A, chatResponseAnnotations: N, citations: pe, disableLinks: p.ZP.isWebView(), isAborted: w, isAnimated: ae, isStreaming: E, key: "normal-answer", markdownText: ne, messageId: c || "" })),
                    ),
                    !E && n.createElement(we.U, { postIds: I ?? [], response: ne, style: Ze.embeddedContent, webResults: z ?? [] }),
                    ze && !E ? n.createElement(s.Z, { style: Ze.searchButtonsContainer }, n.createElement(Se.R, { isAnimated: !0, postIds: I ?? [], webResults: z ?? [] })) : null,
                    Q && !_ ? n.createElement(s.Z, { style: de ? Ze.helpfulFooterContainer : Ze.footerContainer }, n.createElement(s.Z, { style: Ze.messageButtonsContainer }, de ? n.createElement(b.W, { conversationKey: a, messageId: c }) : n.createElement(y.Z, { analysisEntityId: e, conversationKey: a, customLeftContent: !E && J && W ? n.createElement(Ee.E, { performanceMetrics: W, userChatItemId: B }) : null, messageId: c, promptSource: P, showPostButton: M, textContainer: le }))) : null,
                    _ ? n.createElement(s.Z, { style: Ze.upsellContainer }, n.createElement(Ce.w, { upsell: _ })) : null,
                );
            }
            const Ze = i.default.create((e) => ({
                container: { width: "100%", alignItems: "center", marginBottom: e.spaces.space48 },
                compactContainer: {},
                textContainer: { paddingHorizontal: e.spaces.space16 },
                searchButtonsContainer: { width: "100%", maxWidth: h.vf, marginTop: e.spaces.space16, paddingHorizontal: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                bannerMessages: { flexShrink: 1, width: "100%", maxWidth: h.vf, gap: e.spaces.space12, paddingHorizontal: e.spaces.space12, marginBottom: e.spaces.space8 },
                animation: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                banner: { width: "100%", gap: e.spaces.space12, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", position: "relative" },
                bannerIcon: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 },
                bannerText: { flex: 1, maxWidth: "100%", fontSize: e.fontSizes.subtext1, color: e.colors.gray900 },
                deletedText: { fontStyle: "italic" },
                content: { flexShrink: 1, width: "100%", maxWidth: h.vf, position: "relative" },
                status: { width: "100%", maxWidth: h.vf, paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
                preventPointerEvents: { pointerEvents: "none" },
                tweets: { marginTop: e.spaces.space12 },
                tweet: { width: `calc(100% - ${e.spaces.space72} - ${e.spaces.space32})` },
                userNameRow: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
                upsellContainer: { marginTop: e.spaces.space12, width: "100%", maxWidth: 620, paddingHorizontal: e.spaces.space16 },
                footerContainer: { width: "100%", maxWidth: h.vf, marginTop: e.spaces.space12, paddingHorizontal: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", position: "relative", overflow: "hidden" },
                helpfulFooterContainer: { width: "100%", maxWidth: h.vf, marginTop: e.spaces.space8, paddingHorizontal: e.spaces.space16, justifyContent: "space-between", overflow: "hidden" },
                messageButtonsContainer: { alignItems: "flex-start", justifyContent: "flex-start" },
                followUpSuggestionModeContainer: { width: "10%", height: 50, backgroundColor: e.colors.gray0 },
                debugText: { color: e.colors.gray500, width: "100%", alignSelf: "flex-start" },
                cards: { display: "flex", flexDirection: "column", gap: e.spaces.space12, width: "100%" },
                embeddedContent: { width: "100%", maxWidth: h.vf, marginTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7bc92c09.593b029a.js.map
