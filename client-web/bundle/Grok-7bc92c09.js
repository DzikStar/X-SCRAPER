"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7bc92c09"],
    {
        22463: (e, t, a) => {
            a.d(t, { Z: () => B });
            var n = a(202784),
                s = a(325686),
                o = a(371344),
                r = a(154003),
                i = a(815858),
                c = a(731708),
                l = a(392237),
                d = a(674132),
                p = a.n(d),
                m = a(386594),
                u = a(711223),
                g = a(323265),
                h = a(335923),
                y = a(301758),
                f = a(952793),
                b = a(725516),
                C = a(125363),
                E = a(389071),
                w = a(309373),
                x = a(836255),
                T = a(464023),
                S = a(305442),
                k = a(246277),
                v = a(523253),
                Z = a(86657),
                I = a(928831),
                _ = a(492010),
                z = a(721270),
                D = a(988290),
                R = a(813107);
            const P = /https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/,
                A = /^@([A-Za-z0-9_]{1,15})$/,
                H = p().cfd2f35e,
                W = p().e3275464,
                L = p().fb3b9776;
            function B({ bannerMessages: e, conversationKey: t, fileAttachments: a, hasCustomization: l, hideAttachments: d, id: p, isDeepsearch: T, isReasoning: B, mode: F, text: M, user: O }) {
                const $ = (0, C.I0)(),
                    V = (0, E.bD)(t),
                    [K, G] = n.useState(!1),
                    [j, U] = n.useState(!1),
                    [q, X] = n.useState(M),
                    { clearFilterKey: Y, filterKey: J, isReasoningEnabled: Q, isResearchEnabled: ee, selectDeepsearchFilterKey: te, selectReasoningFilterKey: ae } = (0, I.w)(),
                    [ne, se] = n.useState(!1),
                    { isEditingEnabled: oe, isGrokShare: re } = (0, D.ZP)(),
                    ie = (0, f.hC)("responsive_web_grok_prompt_edit_enabled"),
                    ce = (0, f.hC)("responsive_web_grok_show_citations"),
                    le = !(0, f.hC)("responsive_web_grok_url_trim_disable"),
                    { isInputCompact: de } = (0, I.w)(),
                    pe = (0, b.z)();
                let me,
                    ue,
                    ge = M;
                if (ge) {
                    const e = P.exec(M ?? "");
                    me = e?.[1];
                    const t = A.exec(M ?? "");
                    ue = t?.[1];
                    const a = e?.[0],
                        n = a && ge.trim().endsWith(a);
                    le && n && a && (ge = ge.replace(a, "")), ue && (ge = ""), (ge = ge.trim());
                }
                const { showChatBubbleEdit: he } = (0, _.u)();
                n.useEffect(() => {
                    me && $(x.Z.fetchOneIfNeeded(me));
                }, [me, $]);
                const ye = n.useCallback(() => G(!0), []),
                    fe = n.useCallback(() => G(!1), []),
                    be = n.useCallback(() => {
                        ie && null != p && ($(V.setEditingMessage(p)), he && U(!0), T && !J ? (te(), se(!0)) : B && !J && (ae(), se(!0)));
                    }, [ie, p, $, V, he, T, B, te, ae, J]),
                    Ce = n.useCallback(() => {
                        $(V.clearEditing()), U(!1), X(M), ne && (Y(), se(!1));
                    }, [$, V, M, ne, Y]),
                    Ee = (0, S.Z)("chatbox_edit"),
                    we = n.useCallback(async () => {
                        p && q && q.trim().length > 0 && (await $((0, w.X)({ analytics: pe, conversationKey: t })({ editingMessageId: p, text: q, fileAttachments: a ?? [], returnCitations: ce, mode: F, imageGenerationCount: Ee, isReasoning: Q, isDeepsearch: ee })), U(!1), se(!1));
                    }, [p, q, $, pe, t, a, ce, F, Ee, Q, ee]),
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
                                onChange: (e) => X(e.target.value),
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
                                  else if (!k.$.includes(e.mimeType)) return n.createElement(Z.Z, { allFiles: a, file: e, isLoading: !1, key: `${e.fileName}_${t}`, messageId: p, width: 200 });
                              })
                            : [],
                    Se = !d && a ? a.map((e, t) => (e instanceof File ? n.createElement(v.Z, { file: e, key: `${e.name}_${t}`, width: 180 }) : k.$.includes(e.mimeType) ? n.createElement(Z.Z, { file: e, index: t, isImageActionsEnabled: !re, isLoading: !1, key: `${e.fileName}_${t}`, messageId: p, width: 180, withMediaCarousel: !re }) : void 0)) : [];
                return n.createElement(
                    s.Z,
                    { onMouseEnter: ye, onMouseLeave: fe, style: N.wrapper },
                    Te.length > 0 && n.createElement(s.Z, { style: N.fileAttachmentContainer }, Te),
                    Se.length > 0 && n.createElement(s.Z, { style: N.imageAttachmentsContainer }, Se),
                    me
                        ? n.createElement(
                              s.Z,
                              { style: [N.quoteTweetContainer, de ? N.quoteTweetContainerCompact : null] },
                              n.createElement(y.Z, {
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
                    ue ? n.createElement(s.Z, { style: N.userCardContainer }, n.createElement(R.I, { screenName: ue })) : null,
                    j ? xe : ge ? n.createElement(s.Z, { style: N.container }, n.createElement(i.Z, { duration: "long", show: K && ie && oe, type: "fade" }, n.createElement(s.Z, { style: N.editButtonContainer }, n.createElement(r.ZP, { borderColor: "transparent", icon: n.createElement(m.default, { style: N.editIcon }), onClick: be, size: "small", style: { borderRadius: 16 } }))), n.createElement(s.Z, { style: N.chatBubble }, n.createElement(c.ZP, { style: N.textContent }, n.createElement(z.default, { allowedTokenTypes: ["code", "codespan", "list", "text", "space", "paragraph"], disableLinks: g.ZP.isWebView(), isAnimated: !1, markdownText: ge })))) : null,
                    l && n.createElement(c.ZP, { color: "gray700", size: "subtext2" }, L),
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
                editBubble: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray50, alignItems: "center", width: "100%", maxWidth: "100%", gap: e.spaces.space4 },
                chatBubble: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray100, maxWidth: "70%", alignItems: "center", gap: e.spaces.space12 },
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
                editButtons: { borderRadius: e.spaces.space12, paddingVertical: e.spaces.space8 },
                imageAttachmentsContainer: { flexDirection: "row", flexWrap: "wrap", maxWidth: "100%", justifyContent: "flex-end" },
                fileAttachmentsContainer: { maxWidth: "100%", gap: e.spaces.space8, alignItems: "stretch" },
                editIcon: { fill: "none", height: e.spaces.space20, width: e.spaces.space20 },
            }));
        },
        908118: (e, t, a) => {
            a.d(t, { Z: () => w });
            var n = a(202784),
                s = a(811176),
                o = a(674132),
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
                y = a(125363),
                f = a(390387);
            const b = { id: "TELL_US_MORE", labelEn: "Tell us more", icon: "reply" },
                C = { DIDNT_WANT_IMAGE: r().ja8d189e, WANTED_IMAGE: r().e951f04e, WANTED_DIFFERENT_IMAGE: r().c503b35e, CODE_INCORRECT: r().d4371c92, WANTED_DIFFERENT_CODE: r().dbe8586e, DIDNT_WANT_CODE: r().e360eb4a, MATH_INCORRECT: r().a18657ca, DIDNT_WANT_MATH: r().b8b86300, INCORRECT_ANSWER: r().e4c34788, WANTED_SOMETHING_ELSE: r().b220a8c8, BIASED_ANSWER: r().b115fd18, BAD_STYLE_TONE: r().dc637214, WANTED_POST_SEARCH: r().f02e6d42, BAD_POST_RESULTS: r().bbec6bba, DIDNT_WANT_POSTS: r().b494d088, DOESNT_UNDERSTAND_IMAGE: r().a44974f2, [b.id]: r().bd44a8a8 },
                E = { image: i.default, code: c.default, search: l.default, math: d.default, style: p.default, bias: m.default, incorrect: u.default, generic: g.default, reply: h.default };
            function w({ feedbackLabels: e, onClose: t, onSelect: a, onSelectOtherOption: o }) {
                const r = (0, y.v9)(f.VT).startsWith("en"),
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
                m = a(674132),
                u = a.n(m),
                g = a(837020),
                h = a(125363),
                y = a(393261),
                f = a(975617);
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
                    [k] = r()(y.Z),
                    v = n.useCallback(() => {
                        "" !== p &&
                            k({
                                variables: { contextualFeedback: { comment: p }, conversationId: e, conversationItemId: t, modelVersion: a },
                                onCompleted: (e) => {
                                    e.create_grok_conversation_feedback?.grok_feedback_error ? (0, f.J)(T) : (o(), (0, f.P)(T));
                                },
                            });
                    }, [p, e, t, a, T, k, o]);
                return n.createElement(i.Z, { onMaskClick: o, style: S.sheet, type: "bottom", withMask: !0 }, n.createElement(s.Z, { style: S.header }, n.createElement(c.ZP, { size: "headline1" }, b)), n.createElement(l.ZP, { "aria-label": w, hoverLabel: x, icon: n.createElement(g.default, null), onPress: o, style: S.close, type: "primaryText" }), n.createElement(d.Z, { autoComplete: "off", autoFocus: !0, label: C, name: "grokFeedback", onChange: u, onSubmitEditing: v, value: p }), n.createElement(l.ZP, { disabled: "" === p, onPress: v, size: "large", style: S.button, type: "primaryFilled" }, E));
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
            var n = a(674132),
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
                c = a(674132);
            const l = a.n(c)().d228a9a0;
            function d({ children: e, disableShowMore: t, foldedHeight: a, heightBreakpoint: c, onOpen: d }) {
                const [m, u] = n.useState(),
                    [g, h] = n.useState(!1),
                    [y, f] = n.useState(a),
                    b = n.useCallback(
                        (e) => {
                            const t = e.nativeEvent.layout.height;
                            t < c ? (f(t), u(!1)) : (f(a), u(!0));
                        },
                        [c, a, f],
                    ),
                    C = n.useMemo(() => [p.contentContainer, g || (!m && void 0 !== m) ? void 0 : { maxHeight: y }], [y, g, m]),
                    E = n.useCallback(() => {
                        h(!0), d?.();
                    }, [h, d]),
                    w = !g && m && !t;
                return n.createElement(s.Z, { style: p.container }, n.createElement(s.Z, { style: C }, n.createElement(s.Z, { onLayout: b, style: p.contentWrapper }, e), w ? n.createElement(s.Z, { style: p.seeMoreContainer }, n.createElement(o.Z, { colors: [r.default.theme.colors.transparent, r.default.theme.colors.cellBackground], style: p.foldShadow }), n.createElement(i.ZP, { color: "link", onPress: E, style: p.seeMoreLabel, withInteractiveStyling: !0 }, l)) : null));
            }
            const p = r.default.create((e) => ({ container: { width: "100%", maxWidth: "100%" }, contentContainer: { width: "100%", maxWidth: "100%", overflow: "hidden" }, contentWrapper: { width: "100%", maxWidth: "100%", position: "relative" }, foldShadow: { position: "absolute", zIndex: 100, bottom: "100%", start: 0, width: "100%", maxWidth: "100%", height: e.spaces.space36 }, seeMoreLabel: { marginTop: e.spaces.space8, marginBottom: e.spaces.space12, cursor: "pointer" }, seeMoreContainer: { position: "absolute", width: "100%", bottom: 0, backgroundColor: e.colors.cellBackground, overflow: "visible", zIndex: 100 } }));
        },
        667945: (e, t, a) => {
            a.d(t, { Z: () => Ze });
            var n = a(202784),
                s = a(325686),
                o = a(731708),
                r = a(392237),
                i = a(674132),
                c = a.n(i),
                l = a(711223),
                d = a(323265),
                p = a(952793),
                m = a(125363),
                u = a(919022),
                g = a(464023),
                h = a(721270),
                y = a(378471),
                f = a(603416),
                b = a(204162),
                C = a(811085),
                E = a(736716),
                w = a(530732),
                x = a(721266),
                T = a(58399),
                S = a(187669),
                k = a(246851),
                v = a(725516),
                Z = a(988290),
                I = a(311826),
                _ = a(161648),
                z = a(961609),
                D = a(757483),
                R = a(215337),
                P = a(841972),
                A = a(617568),
                H = a(214997),
                W = a(525271),
                L = a(465086);
            const B = c().a4d9dbfa;
            function N({ completed: e, gradientColor: t, onDismissed: a, style: o, trace: i }) {
                const [c, l] = n.useState(null),
                    [p] = (0, L.h)({ scrollingFrame: c?.getScrollableNode(), enabled: !0, autoStart: !0 });
                return (
                    (0, S.q)(() => {
                        const e = "deep-search-summary-card-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n    .deep-search-summary-card-sub-step-markdown-text li {\n      margin-top: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text ul {\n      margin-bottom: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text span {\n      font-size: ${r.default.theme.fontSizes.subtext2} !important;\n      color: ${r.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n\n    .deep-search-summary-card-trace-preview-markdown-text span {\n      font-size: ${r.default.theme.fontSizes.subtext2} !important;\n      color: ${r.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n  `);
                        const a = document.head;
                        return (
                            a && a.appendChild(t),
                            () => {
                                const t = document.getElementById(e);
                                t && t.remove();
                            }
                        );
                    }),
                    n.createElement(W.Z, { align: "right", buttonType: "primaryText", onDismissed: a, title: B }, n.createElement(s.Z, { style: F.traceScrollViewContainer }, n.createElement(H.Z, { automaticallyAdjustKeyboardInsets: !0, contentContainerStyle: F.traceScrollViewContentContainer, ref: l, style: F.traceScrollView }, n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(h.default, { disableLinks: d.ZP.isWebView(), isAnimated: !1, markdownText: i })), n.createElement(s.Z, { ref: p, style: { position: "relative", top: -250, width: 100, height: 1 } }), n.createElement(s.Z, { style: { position: "relative", width: 100, height: 300 } }))))
                );
            }
            const F = r.default.create((e) => ({ thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, traceScrollViewContainer: { flex: 1, width: "100%", maxWidth: 500, position: "relative" }, traceScrollView: { flex: 1, width: "100%" }, traceScrollViewContentContainer: { flexGrow: 1, padding: e.spaces.space16 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 }, interactivePinButton: { backgroundColor: "transparent" }, pinButtonContainer: { position: "absolute", bottom: e.spaces.space16, start: "50%", transform: "translateX(-50%)" }, pinButton: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.borderRadii.xLarge, backgroundColor: "transparent", transition: "background-color 0.2s ease", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hoveredPinButton: { backgroundColor: e.colors.gray0 }, pinIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, pinText: { fontSize: e.fontSizes.subtext1, color: e.colors.gray900 } })),
                M = n.memo(N);
            function O({ disableExpand: e, gradientColor: t, previewHeight: a, style: o, trace: i }) {
                const c = n.useRef(null),
                    [l, d] = n.useState(!1);
                n.useEffect(() => {
                    c.current && !l && c.current.scrollToEnd({ animated: !1 });
                }, [i, l]);
                const p = n.useCallback(() => [D.Z.hexToCss(t || r.default.theme.colors.gray50, 0), D.Z.hexToCss(t || r.default.theme.colors.gray50, 0.8), D.Z.hexToCss(t || r.default.theme.colors.gray50, 1)], [t]);
                return n.createElement(
                    s.Z,
                    { style: [$.tracePreviewContainer, o] },
                    n.createElement(
                        s.Z,
                        { style: [$.collapsedTracePreviewTextGradientContainer, $.expandedTracePreviewTextGradientContainer, a ? { height: a } : void 0] },
                        n.createElement(w.Z, { disabled: e, interactiveStyles: $.interactiveTracePreviewHeaderContainer, onClick: () => d(!0) }, ({ isHovered: t }) => n.createElement(s.Z, { style: $.tracePreviewTextGradientContainer }, n.createElement(s.Z, { style: $.tracePreviewScrollerContainer }, n.createElement(A.w, { charLimit: 1500, text: i })), n.createElement(R.Z, { angle: 0, colors: p(), style: $.traceGradientTop }), n.createElement(R.Z, { colors: p(), style: $.traceGradientBottom }), !e && n.createElement(P.default, { style: [$.expandThinkingTraceIcon, t ? $.hoveredExpandThinkingTraceIcon : void 0] }))),
                    ),
                    l && n.createElement(M, { onDismissed: () => d(!1), trace: i }),
                );
            }
            const $ = r.default.create((e) => ({ tracePreviewContainer: { backgroundColor: e.colors.gray50, display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: e.borderRadii.medium }, tracePreviewHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: e.spaces.space12, cursor: "pointer", transition: "background-color 0.2s ease", backgroundColor: e.colors.gray50 }, interactiveTracePreviewHeaderContainer: { backgroundColor: "transparent" }, hoveredTracePreviewHeaderContainer: { backgroundColor: e.colors.gray100 }, thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, expandThinkingTraceIcon: { position: "absolute", top: e.spaces.space12, end: e.spaces.space12, color: e.colors.gray800, width: 14, height: 14, transition: "transform 0.2s ease" }, hoveredExpandThinkingTraceIcon: { transform: "scale(1.2)" }, collapsedTracePreviewTextGradientContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease" }, expandedTracePreviewTextGradientContainer: { gridTemplateRows: "1fr" }, tracePreviewTextGradientContainer: { height: 150, positon: "relative" }, tracePreviewScrollerContainer: { paddingHorizontal: e.spaces.space16, width: "100%", height: "100%" }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, tracePreviewText: { color: e.colors.gray800 }, traceGradientTop: { position: "absolute", width: "100%", height: "20%", top: 0 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 } })),
                V = n.memo(O),
                K = c().j1ab5f40,
                G = c().ee000b0d;
            function j({ aborted: e, completed: t, completedTimestamp: a, expanded: i, fromTimestamp: c, isDeeperMode: l, isPastSummary: d, numSources: p, onClick: m, showTrace: u, style: g, trace: h }) {
                const { isCompactLayout: y } = (0, Z.ZP)(),
                    f = 0 !== c,
                    b = n.useCallback(() => n.createElement(s.Z, { style: U.researchLabelContainer }, n.createElement(o.ZP, { style: U.researchLabel, weight: "bold" }, (0, _.Y)(t, !0, l)), !d && !i && f && n.createElement(z.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: c })), [i, d, t, e, c, a, f, l]),
                    C = n.useCallback(() => (i ? n.createElement(s.Z, { style: U.subHeaderContainer }, !d && f ? n.createElement(n.Fragment, null, n.createElement(z.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: c, style: U.subheaderElapsedSeconds }), n.createElement(s.Z, { style: U.dot }), n.createElement(o.ZP, { style: U.sourcesText }, G({ numSources: p }))) : p > 0 && n.createElement(o.ZP, { style: U.sourcesText }, G({ numSources: p }))) : n.createElement(s.Z, { style: U.subHeaderContainer }, n.createElement(o.ZP, { style: U.subHeaderText }, K), p > 0 && n.createElement(n.Fragment, null, n.createElement(s.Z, { style: U.dot }), n.createElement(o.ZP, { style: U.sourcesText }, G({ numSources: p }))))), [i, d, t, e, p, c, a, f]);
                return n.createElement(
                    s.Z,
                    { style: U.container },
                    n.createElement(w.Z, { interactiveStyles: U.interactiveHeaderContainer, onClick: m }, ({ isHovered: e }) => n.createElement(s.Z, { style: [U.headerContainer, y ? U.compactHeaderContainer : void 0, !i && e ? U.hoveredHeaderContainer : void 0] }, n.createElement(s.Z, { style: U.infoContainer }, b(), C()), n.createElement(T.default, { style: [U.caretIcon, i ? U.expandedCaretIcon : void 0] }))),
                    !i && !t && !e && u && n.createElement(V, { disableExpand: !0, gradientColor: r.default.theme.colors.gray0, previewHeight: 50, style: U.tracePreview, trace: h }),
                );
            }
            const U = r.default.create((e) => ({ container: { width: "100%" }, interactiveHeaderContainer: { backgroundColor: "transparent", cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", width: "100%" }, compactHeaderContainer: { paddingHorizontal: e.spaces.space12 }, hoveredHeaderContainer: { backgroundColor: e.colors.gray100 }, infoContainer: { display: "flex", flexDirection: "column" }, subHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, subHeaderText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, dot: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray800 }, subheaderElapsedSeconds: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, sourcesText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext2 }, researchLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, researchLabel: {}, caretIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800, transform: "rotate(0deg)", transition: "transform 0.2s ease" }, expandedCaretIcon: { transform: "rotate(90deg)" }, tracePreview: { backgroundColor: e.colors.gray0 } }));
            var q = a(25825),
                X = a(293723),
                Y = a(227674),
                J = a(303157),
                Q = a(956272),
                ee = a(20716),
                te = a(868489),
                ae = a(5323),
                ne = a(916559);
            function se({ subStep: e }) {
                const [t, a] = n.useState(null),
                    o = (0, p.hC)("responsive_web_grok_animated_text_enabled"),
                    r = n.useCallback(() => {
                        if (e.summary) {
                            const t = e.summary;
                            return n.createElement(s.Z, { style: [oe.section, oe.summarySection] }, n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(h.default, { disableLinks: d.ZP.isWebView(), isAnimated: o, markdownText: t })));
                        }
                        return null;
                    }, [o, e.summary]),
                    i = n.useCallback(() => {
                        const r = e.actionSummary || "";
                        if (r) {
                            const i = e.actionIcon,
                                c = (i && (0, ee.wG)(i)) || Q.default;
                            return n.createElement(s.Z, null, n.createElement(s.Z, { style: oe.actionContainer }, n.createElement(c, { style: oe.actionIcon }), n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(h.default, { disableLinks: d.ZP.isWebView(), isAnimated: o, markdownText: r }))), e.webResults && e.webResults.length > 0 && n.createElement(s.Z, { style: oe.actionContainer }, n.createElement(s.Z, { style: oe.actionIcon }), n.createElement(te.Z, { style: oe.results, webResults: e.webResults })), e.xPostIds && e.xPostIds.length > 0 && n.createElement(s.Z, { style: oe.actionContainer }, n.createElement(s.Z, { style: oe.actionIcon }), n.createElement(ae.Z, { style: oe.results, xPostIds: e.xPostIds })), t ? n.createElement(ne.E, { onDrawerDismiss: () => a(null), webResults: [t] }) : null);
                        }
                    }, [e.actionSummary, e.webResults, e.xPostIds, e.actionIcon, t, o]);
                return e.messageTag === J.iS.SUMMARY ? r() : e.messageTag === J.iS.DECISION || e.messageTag === J.iS.RAW_FUNCTION_RESULT ? i() : null;
            }
            const oe = r.default.create((e) => ({ section: { display: "flex", flexDirection: "column" }, summarySection: { position: "relative", start: -11 }, results: { marginTop: e.spaces.space8, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, actionContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, actionWebResultInteractiveContainer: { backgroundColor: "transparent", height: "100%" }, actionWebResultContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, cursor: "pointer", transition: "background-color 0.2s ease", height: "100%" }, hoveredActionWebResultContainer: { backgroundColor: e.colors.gray100 }, acitonSummaryContainer: { backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "flex", flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.medium, gap: e.spaces.space8, flex: 1 }, actionIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, actionWebResultFavicon: { width: e.spaces.space12, height: e.spaces.space12, borderRadii: e.borderRadii.medium }, actionWebResultUrl: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 }, loader: { opacity: 0, display: "none", transition: "opacity 0.2s ease", position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)" }, startedLoader: { opacity: 1, display: "visible" } })),
                re = n.memo(se),
                ie = c().c2745fa4;
            function ce({ completed: e, isFirstStep: t, isLastStep: a, step: i }) {
                const c = (0, v.z)(),
                    [l, d] = n.useState(!1),
                    [p, m] = n.useState(!0),
                    u = (0, k.Z)(e),
                    g = (0, k.Z)(i.state),
                    h = i.state === J.Fi.IN_PROGRESS,
                    y = i.state === J.Fi.COMPLETED,
                    f = i.state === J.Fi.FAILED;
                return (
                    n.useEffect(() => {
                        (g === J.Fi.IN_PROGRESS && y) || (f && !l) ? m(!1) : e && !u && m(!0);
                    }, [e, u, g, y, f, l]),
                    n.createElement(
                        s.Z,
                        { key: i.id, style: le.container },
                        n.createElement(
                            w.Z,
                            {
                                interactiveStyles: le.interactiveTitleContainer,
                                onClick: () => {
                                    m(!p), d(!0), c.scribe({ component: "grok-deepsearch-header-click", action: "click", element: i.header || "" });
                                },
                                style: [le.titleContainer, t ? { paddingTop: 0 } : void 0],
                            },
                            ({ isHovered: e }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: le.statusTitleContainer }, n.createElement(s.Z, { style: le.statusIconContainer }, n.createElement(q.Z, { color: r.default.theme.colors.gray900, size: "small", style: [le.statusIcon, h ? le.statusIconVisible : void 0, h ? void 0 : le.statusIconHide] }), n.createElement(X.default, { style: [le.statusIcon, le.completeFailedIcon, y ? le.completeFailedIconVisible : void 0] }), n.createElement(Y.default, { style: [le.statusIcon, le.completeFailedIcon, f ? le.completeFailedIconVisible : void 0] })), f ? n.createElement(o.ZP, { style: le.title }, ie) : n.createElement(o.ZP, { style: [le.title, y ? le.completedTitle : void 0, e ? le.hoveredTitle : void 0] }, i.header)), i.subSteps.length > 0 && n.createElement(T.default, { style: [le.caret, p ? le.expandedCaret : void 0] })),
                        ),
                        n.createElement(
                            s.Z,
                            { style: [le.outerContentContainer, p && i.subSteps.length > 0 ? le.expandedOuterContentContainer : void 0] },
                            n.createElement(
                                s.Z,
                                { style: le.contentContainer },
                                i.subSteps.map((e, t) => n.createElement(re, { key: `step-${i.id}-substep-${t}`, subStep: e })),
                            ),
                        ),
                    )
                );
            }
            const le = r.default.create((e) => ({
                    container: { position: "relative" },
                    interactiveTitleContainer: { backgroundColor: "transparent" },
                    titleContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: e.spaces.space8, cursor: "pointer" },
                    statusTitleContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                    statusIconContainer: { position: "relative", width: e.spaces.space20, height: e.spaces.space20, backgroundColor: e.colors.gray0 },
                    statusIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)", opacity: 0, width: "100%", height: "100%" },
                    statusIconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                    statusIconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] },
                    completeFailedIcon: { color: e.colors.gray900, width: e.spaces.space16, height: e.spaces.space16 },
                    completeFailedIconVisible: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.8)" }, "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" }, "75%": { opacity: 0.9, transform: "translate(-50%, -50%) scale(0.95)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] },
                    title: { fontSize: e.fontSizes.subtext1, color: e.colors.brandColor, transition: "color 0.2s ease" },
                    completedTitle: { color: e.colors.gray900 },
                    hoveredTitle: { color: e.colors.brandColor },
                    caret: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray200, transform: "rotate(0deg)", transition: "transform 0.2s ease" },
                    expandedCaret: { transform: "rotate(90deg)" },
                    outerContentContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease" },
                    expandedOuterContentContainer: { gridTemplateRows: "1fr" },
                    contentContainer: { overflow: "hidden", display: "flex", flexDirection: "column", paddingStart: e.spaces.space28, gap: e.spaces.space8 },
                })),
                de = (e, t) => e.step.id === t.step.id && e.step.header === t.step.header && e.step.subSteps === t.step.subSteps && e.step.state === t.step.state && e.isFirstStep === t.isFirstStep && e.isLastStep === t.isLastStep && e.completed === t.completed,
                pe = n.memo(ce, de),
                me = c().eaf55eb4;
            function ue({ completedTimestamp: e, deepSearchSummaryAccumulator: t, fromTimestamp: a }) {
                const i = (0, v.z)(),
                    { isCompactLayout: c } = (0, Z.ZP)(),
                    { accumulatedTrace: l, deepsearchArgs: d, isPastSummary: p, state: m, steps: u, traceEnabled: g } = t,
                    h = "COMPLETED" === m,
                    y = "ABORTED" === m,
                    [f, b] = n.useState(!1),
                    [C, E] = n.useState(!h),
                    _ = (0, k.Z)(h),
                    z = !!d && "deeper" === d.mode;
                return (
                    (0, S.q)(() => {
                        const e = "deep-search-summary-card-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n      .deep-search-summary-card-sub-step-markdown-text {\n        flex: 1;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text li {\n        margin-top: 0px !important;\n        padding-left: 5px !important;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text ul {\n        margin-bottom: 0px !important;\n      }\n\n      .deep-search-summary-card-sub-step-markdown-text span {\n        font-size: ${r.default.theme.fontSizes.subtext2} !important;\n        color: ${r.default.theme.colors.gray900} !important;\n        line-height: 24px;\n      }\n\n      .deep-search-summary-card-trace-preview-markdown-text span {\n        font-size: ${r.default.theme.fontSizes.subtext2} !important;\n        color: ${r.default.theme.colors.gray900} !important;\n        line-height: 24px;\n      }\n    `);
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
                        !_ && h && E(!1);
                    }, [h, _]),
                    n.createElement(
                        s.Z,
                        { style: [ge.container, c ? ge.compactContainer : void 0] },
                        n.createElement(j, {
                            aborted: y,
                            completed: h,
                            completedTimestamp: e,
                            expanded: C,
                            fromTimestamp: a,
                            isDeeperMode: z,
                            isPastSummary: p,
                            numSources: t.getNumSources(),
                            onClick: () => {
                                i.scribe({ element: "grok-deepsearch-compact-card-" + (C ? "collapse" : "expand"), action: "click" }), E(!C);
                            },
                            showTrace: g && !p,
                            trace: l,
                        }),
                        u.length > 0 &&
                            n.createElement(
                                s.Z,
                                { style: [ge.collapsedStepsContainer, c ? ge.compactCollapsedStepsContainer : void 0, C ? ge.expandedStepsContainer : void 0] },
                                n.createElement(
                                    s.Z,
                                    { style: ge.stepsOuterContainer },
                                    g &&
                                        n.createElement(
                                            w.Z,
                                            {
                                                interactiveStyles: ge.interactiveShowThinkingContainer,
                                                onPress: () => {
                                                    b(!0), i.scribe({ element: "grok-deepsearch-open-trace", action: "click" });
                                                },
                                                style: ge.showThinkingContainer,
                                            },
                                            ({ isHovered: e }) => n.createElement(n.Fragment, null, n.createElement(o.ZP, { style: [ge.showThinkingText, e ? ge.hoveredShowThinkingText : void 0] }, me), n.createElement(T.default, { style: ge.showThinkingCaret })),
                                        ),
                                    n.createElement(
                                        s.Z,
                                        null,
                                        n.createElement(s.Z, { style: ge.lineContainer }, n.createElement(s.Z, { style: ge.line })),
                                        n.createElement(
                                            s.Z,
                                            { style: ge.stepsContainer },
                                            u.map((e, t) => n.createElement(pe, { completed: h, isFirstStep: 0 === t, isLastStep: t === u.length - 1, key: e.id, step: e })),
                                        ),
                                    ),
                                    n.createElement(x.Z, { size: c ? "space12" : "space16" }),
                                ),
                            ),
                        f &&
                            n.createElement(M, {
                                completed: h,
                                onDismissed: () => {
                                    b(!1), i.scribe({ element: "grok-deepsearch-close-trace", action: "click" });
                                },
                                trace: l,
                            }),
                        n.createElement(I.Z, { completedTimestamp: e, deepSearchSummaryAccumulator: t, fromTimestamp: a }),
                    )
                );
            }
            const ge = r.default.create((e) => ({ container: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space16, borderRadius: e.borderRadii.medium, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden" }, compactContainer: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, collapsedStepsContainer: { flex: 1, display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease", marginHorizontal: e.spaces.space16, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, compactCollapsedStepsContainer: { marginHorizontal: e.spaces.space12 }, expandedStepsContainer: { gridTemplateRows: "1fr" }, stepsOuterContainer: { display: "flex", flexDirection: "column", flex: 1, height: "100%", position: "relative" }, lineContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: e.spaces.space20, position: "absolute", start: 0, top: 0, height: "100%" }, line: { width: 1, height: `calc(100% - ${e.spaces.space16})`, backgroundColor: e.colors.gray200 }, stepsContainer: { display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }, showThinkingContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer", paddingBottom: e.spaces.space16, width: "max-content", opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, interactiveShowThinkingContainer: { backgroundColor: "transparent" }, showThinkingText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1, transition: "all 0.2s ease" }, hoveredShowThinkingText: { color: e.colors.gray900 }, showThinkingCaret: { color: e.colors.gray700, width: e.spaces.space16, height: e.spaces.space16 } }));
            var he = a(819102),
                ye = a(299399),
                fe = a(545519),
                be = a(567778),
                Ce = a(986274),
                Ee = a(30827),
                we = a(618770),
                xe = a(993441),
                Te = a(228283);
            const Se = c().b327c12a,
                ke = c().ca93f2ee,
                ve = c().b52484b6;
            function Ze({ analysisEntityId: e, bannerMessages: t, conversationKey: a, fileAttachments: r, id: i, isDeleted: c, isLoading: w, isAborted: x, query: T, sender: S, text: k, trace: v, tweetIds: I = [], upsell: z, webResults: D = [], citedWebResults: R = [], intermediateImageResults: P = [], promptSource: A, cardAttachments: H, followUpSuggestedMode: W, performanceMetrics: L, userChatItemId: B, mediaTweetIds: N, chatResponseAnnotations: F, isLastResponse: M, deepSearchSummaryAccumulator: O, isPastThinkingTrace: $, disclaimer: V, chatItemId: K, expectedImageAspectRatio: G, memoryReferences: j }) {
                const U = (0, p.hC)("responsive_web_grok_animated_text_enabled"),
                    q = (0, p.hC)("responsive_web_grok_analyze_helpful_feedback"),
                    X = (0, p.hC)("responsive_web_grok_show_grok_performance_metrics"),
                    Y = (0, p.hC)("responsive_web_grok_show_grok_tweet_media"),
                    { isCompactLayout: J, isShowButtons: Q } = (0, Z.ZP)(),
                    [ee, te] = n.useState(!1),
                    ae = U && !!w,
                    ne = (0, he.u)(k || "", ae),
                    se = (0, he.u)(v ?? "", ae),
                    oe = (0, m.v9)((e) => u.ZP.select(e, g.c0)),
                    { completedTimestamp: re, fromTimestamp: ie } = (0, fe.V)(a, K ?? "", L),
                    ce = n.useRef(null),
                    le = q && "analyze_post" === A,
                    de = n.useMemo(() => [...D, ...R], [D, R]);
                if (!oe) return null;
                const pe = r && r.length > 0 && r[0].mimeType.startsWith("image"),
                    me = V ? [...t, V] : t,
                    ge = I.length > 0 || D.length > 0,
                    Ze = W && !J && !ee,
                    _e = "" === se && "" === ne && !O;
                return n.createElement(
                    s.Z,
                    { style: [Ie.container, J ? Ie.compactContainer : void 0] },
                    n.createElement(
                        s.Z,
                        { style: Ie.content },
                        O && "PENDING" !== O.state && (J ? n.createElement(ue, { completedTimestamp: re, deepSearchSummaryAccumulator: O, fromTimestamp: ie }) : n.createElement(_.Z, { completedTimestamp: re, deepSearchSummaryAccumulator: O, fromTimestamp: ie, isLoading: w })),
                        "" !== se && n.createElement(s.Z, null, n.createElement(ye.Z, { completed: !("" !== se && "" === ne && w), endStreamTimestamp: re, fromTimestamp: ie, hasResponseText: !!k, id: i ?? "", isPastThinkingTrace: $, performanceMetrics: L ?? {}, shownTrace: se })),
                        pe ? n.createElement(s.Z, { style: [Ie.textContainer, ae ? Ie.animation : null] }, n.createElement(o.ZP, { color: "gray700", size: "subtext1" }, Se)) : null,
                        n.createElement(we.K, { expectedImageAspectRatio: G, fileAttachments: r, intermediateImageResults: P, isAborted: x, isLoading: w, messageId: i }),
                        H &&
                            H.length > 0 &&
                            n.createElement(
                                s.Z,
                                { style: Ie.cards },
                                H.map((t) => n.createElement(E.Z, { analysisEntityId: e, cardAttachment: t, conversationKey: a, isAnimated: ae, key: `${t.cardType}-${t.variant || ""}-${t.created_at || ""}`, userChatItemId: B })),
                            ),
                        me.length > 0
                            ? n.createElement(
                                  s.Z,
                                  { style: Ie.bannerMessages },
                                  me.map((e) => n.createElement(s.Z, { key: e, style: Ie.banner }, n.createElement(l.default, { style: Ie.bannerIcon }), n.createElement(o.ZP, { style: Ie.bannerText }, e))),
                              )
                            : null,
                        N?.length && Y ? n.createElement(xe.e, { isAnimated: ae, mediaIds: N }) : null,
                        n.createElement(s.Z, { ref: ce, style: Ie.textContainer }, pe ? null : c ? n.createElement(o.ZP, { style: Ie.deletedText }, ke) : "" !== ne && void 0 !== ne ? n.createElement(h.default, { chatResponseAnnotations: F, citations: de, disableLinks: d.ZP.isWebView(), isAnimated: ae, key: "normal-answer", markdownText: ne }) : w && _e ? n.createElement(s.Z, { style: Ie.spinnerContainer }, n.createElement(y.Z, null), !!T && n.createElement(s.Z, { style: Ie.searchingLabelContainer }, n.createElement(o.ZP, { style: Ie.searchingLabel }, n.createElement("span", null, ve)))) : null),
                    ),
                    !w && n.createElement(Ee.U, { postIds: I ?? [], style: Ie.embeddedContent, webResults: D ?? [] }),
                    (!ge && !Ze) || w
                        ? null
                        : n.createElement(
                              s.Z,
                              { style: Ie.searchButtonsContainer },
                              n.createElement(Te.R, { isAnimated: !0, postIds: I ?? [], webResults: D ?? [] }),
                              W &&
                                  Ze &&
                                  n.createElement(b.Z, {
                                      conversationKey: a,
                                      isAnimated: !0,
                                      isCompactLayout: J,
                                      onClick: () => {
                                          te(!0);
                                      },
                                      suggestion: W,
                                  }),
                          ),
                    Q && !z ? n.createElement(s.Z, { style: le ? Ie.helpfulFooterContainer : Ie.footerContainer }, n.createElement(s.Z, { style: Ie.messageButtonsContainer }, le ? n.createElement(C.W, { conversationKey: a, messageId: i }) : n.createElement(f.Z, { analysisEntityId: e, conversationKey: a, customLeftContent: !w && X && L ? n.createElement(Ce.E, { performanceMetrics: L, userChatItemId: B }) : null, messageId: i, promptSource: A, showPostButton: M, textContainer: ce }))) : null,
                    z ? n.createElement(s.Z, { style: Ie.upsellContainer }, n.createElement(be.w, { upsell: z })) : null,
                );
            }
            const Ie = r.default.create((e) => ({
                container: { width: "100%", alignItems: "center", marginBottom: e.spaces.space48 },
                compactContainer: {},
                textContainer: { paddingHorizontal: e.spaces.space16 },
                searchButtonsContainer: { width: "100%", maxWidth: g.vf, marginTop: e.spaces.space12, paddingHorizontal: e.spaces.space16, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                bannerMessages: { flexShrink: 1, width: "100%", maxWidth: g.vf, gap: e.spaces.space12, paddingHorizontal: e.spaces.space12, marginBottom: e.spaces.space8 },
                animation: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                banner: { width: "100%", gap: e.spaces.space12, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", position: "relative" },
                bannerIcon: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 },
                bannerText: { flex: 1, maxWidth: "100%", fontSize: e.fontSizes.subtext1, color: e.colors.gray900 },
                deletedText: { fontStyle: "italic" },
                searchingLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                searchingLabel: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] },
                content: { flexShrink: 1, width: "100%", maxWidth: g.vf },
                preventPointerEvents: { pointerEvents: "none" },
                tweets: { marginTop: e.spaces.space12 },
                tweet: { width: `calc(100% - ${e.spaces.space72} - ${e.spaces.space32})` },
                userNameRow: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
                upsellContainer: { marginTop: e.spaces.space12, width: "100%", maxWidth: 620, paddingHorizontal: e.spaces.space16 },
                footerContainer: { width: "100%", maxWidth: g.vf, marginTop: e.spaces.space12, paddingHorizontal: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", position: "relative", overflow: "hidden" },
                helpfulFooterContainer: { width: "100%", maxWidth: g.vf, marginTop: e.spaces.space8, paddingHorizontal: e.spaces.space16, justifyContent: "space-between", overflow: "hidden" },
                messageButtonsContainer: { alignItems: "flex-start", justifyContent: "flex-start" },
                followUpSuggestionModeContainer: { width: "10%", height: 50, backgroundColor: e.colors.gray0 },
                debugText: { color: e.colors.gray500, width: "100%", alignSelf: "flex-start" },
                cards: { display: "flex", flexDirection: "column", gap: e.spaces.space12, width: "100%" },
                spinnerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 },
                embeddedContent: { width: "100%", maxWidth: g.vf, marginTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7bc92c09.c9dc654a.js.map
