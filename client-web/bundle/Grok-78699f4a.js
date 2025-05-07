"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-78699f4a"],
    {
        791786: (e, t, n) => {
            n.d(t, { Z: () => j });
            n(136728);
            var a = n(202784),
                o = n(400752),
                r = n(325686),
                l = n(107267),
                d = n(392237),
                i = n(442730),
                s = n(371344),
                c = n(674132),
                u = n.n(c),
                m = n(666536),
                h = n(403808),
                p = n(420182),
                b = n(952793),
                f = n(246851),
                g = n(782642),
                y = n(725516),
                k = n(125363),
                w = n(389071),
                D = n(958602),
                C = n(100326),
                E = n(309373),
                M = n(327597),
                v = n(620988),
                x = n(305442),
                S = n(962379),
                I = n(623494),
                Z = n(976021),
                A = n(246277),
                R = n(335785),
                B = n(988290),
                P = n(186794),
                T = n(3144),
                _ = n(276411),
                $ = n(454875),
                L = n(928831),
                H = n(795388),
                F = n(40247),
                N = n(454595),
                W = n(690672),
                z = n(492010);
            const O = "new_prompt",
                K = "rweb.grok.prompt";
            const G = u().ef4602ec,
                U = { title: u().c65f7308, subtitle: u().f2a8655e };
            function j({ abortController: e, conversationKey: t, disableFileUploads: n, grokShare: c, hasAccess: u, inputAtBottom: j, inputAtHome: X, insideConversation: Y, isIdle: q, mode: J, onFieldTextInputRef: Q, placeholder: ee, promptSender: te, useDraftPersistence: ne, useMagicWandIcon: ae, useNonExpanded: oe }) {
                const re = (0, k.I0)(),
                    le = (0, y.z)(),
                    de = (0, l.useHistory)(),
                    { clearFilterKey: ie, hasValue: se, isCreateImageEnabled: ce, isFileInputDisabled: ue, isImageEditEnabled: me, isInputCompact: he, isInputFocused: pe, isInputMobile: be, isInputMobileSize: fe, isReasoningEnabled: ge, isResearchEnabled: ye, setFocused: ke, setHasValue: we, setPendingModeButtonFilterKey: De } = (0, L.w)(),
                    { isGrokDrawer: Ce } = (0, B.ZP)(),
                    Ee = (0, w.bD)(t),
                    Me = (0, k.v9)(Ee.selectEditingMessageId);
                let ve = (0, k.v9)(Ee.selectEditingMessage);
                const xe = (0, k.v9)(Ee.selectInputPrefill),
                    Se = a.useRef(null),
                    { showInputEdit: Ie } = (0, z.u)();
                ve = Ie ? ve : void 0;
                const Ze = (0, b.hC)("responsive_web_grok_file_upload_enabled"),
                    Ae = (0, b.hC)("responsive_web_grok_show_citations"),
                    Re = (0, b.hC)("responsive_web_grok_personality_button_enabled"),
                    Be = (0, b.hC)("responsive_web_grok_new_home_layout"),
                    [Pe, Te] = a.useState(!1),
                    { loading: _e } = (0, S.Z)(),
                    $e = a.useRef(_e),
                    Le = a.useRef(null),
                    { clearSelectedFile: He, onFileSelected: Fe, onGrokFileSelected: Ne, selectedFiles: We } = (0, v.ZP)(),
                    ze = a.useMemo(() => Object.keys(We), [We]),
                    Oe = (0, g.p)(),
                    Ke = Object.keys(We).some((e) => We[e]?.isUploading),
                    Ge = Object.keys(We).some((e) => We[e]?.isPendingAutomaticPromptSend),
                    [Ue, je] = a.useState(""),
                    Ve = (0, o.Dv)(p.dd),
                    Xe = 0 === Ue.length,
                    [Ye, qe] = a.useState(null);
                a.useEffect(() => {
                    Ye && le.scribe({ action: "impression", component: "grok-input", element: "degraded-modal", data: { event_info: JSON.stringify(Ye) } });
                }, [le, Ye]);
                const Je = (0, f.Z)(X);
                a.useEffect(() => {
                    !Je && X && me && ie();
                }, [Je, X, me, ie]);
                const Qe = (function (e, t, n) {
                        const r = (0, o.Dv)(p.lZ),
                            l = (0, k.v9)(t.selectConversationId),
                            d = a.useMemo(() => l || (n ? "" : O), [l, n]),
                            i = a.useMemo(
                                () =>
                                    (0, m.Z)((e) => {
                                        d &&
                                            r.get(K).then((t) => {
                                                const n = { ...t };
                                                n?.drafts || (n.drafts = new Map()), n?.drafts && n.drafts.set(d, e), r.set(K, n);
                                            });
                                    }, 500),
                                [r, d],
                            );
                        return (
                            a.useEffect(() => {
                                d &&
                                    r.get(K).then((t) => {
                                        t?.drafts && t.drafts.has(d) && e((e) => e || t.drafts?.get(d) || "");
                                    });
                            }, [r, e, d]),
                            i
                        );
                    })(je, Ee, !ne || !!Me || !!c),
                    et = a.useCallback(
                        (e) => {
                            let t = e.target.value;
                            e.target.value.length > Ue.length + 1 && (t = t.replace(/\r?\n+$/, "")), Qe(t), je(t);
                        },
                        [Qe, Ue],
                    );
                a.useEffect(() => {
                    const e = Ue.length > 0;
                    e !== se && we(e);
                }, [Ue, se, we]);
                const tt = ze.length > 0,
                    nt = a.useMemo(() => Object.values(We).every((e) => e && !e.isUploading), [We]),
                    at = a.useMemo(() => (Ue.trim().length > 0 || tt) && nt && !Ge, [Ue, tt, nt, Ge]),
                    ot = a.useMemo(() => ze.map((e) => We[e]?.remote).filter(Boolean), [ze, We]),
                    rt = a.useMemo(() => ze.map((e) => We[e]?.local).filter(Boolean), [ze, We]),
                    lt = a.useCallback(() => {
                        Le.current?.focus(), ke(!0);
                    }, [ke]),
                    dt = a.useCallback(() => {
                        Le.current?.blur(), ke(!1);
                    }, [ke]),
                    it = (0, x.Z)("grok_input"),
                    st = (function (e, t) {
                        const n = {};
                        return t && e.length ? { promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: e[0].url } } } : n;
                    })(ot, me),
                    ct = (0, h.r)(async () => {
                        try {
                            if (te)
                                te({
                                    text: Ue,
                                    attachments: ot,
                                    mode: J,
                                    returnCitations: Ae,
                                    onStart: () => {
                                        Te(!1),
                                            ze.forEach((e) => {
                                                He(e);
                                            }),
                                            je(""),
                                            Qe(""),
                                            Be && (ce || me) && ie();
                                    },
                                    imageGenerationCount: it,
                                    isReasoning: ge,
                                    isDeepsearch: ye,
                                });
                            else if (c) {
                                const e = await (0, C.X)({ analytics: le, api: Ve, dispatch: re, grokModule: Ee, fromShareId: c });
                                e ? (Te(!1), ze.forEach((e) => He(e)), je(""), de.push(`/i/grok?conversation=${e}&text=${encodeURIComponent(Ue)}`)) : Oe({ text: G });
                            } else
                                Me
                                    ? ve &&
                                      (await re(
                                          (0, E.X)({ analytics: le, conversationKey: t })({
                                              editingMessageId: Me,
                                              text: Ue,
                                              fileAttachments: ot,
                                              returnCitations: Ae,
                                              mode: J,
                                              imageGenerationCount: it,
                                              onStart: () => {
                                                  Te(!1),
                                                      ze.forEach((e) => {
                                                          He(e);
                                                      }),
                                                      je("");
                                              },
                                              isReasoning: ge,
                                              isDeepsearch: ye,
                                          }),
                                      ))
                                    : (Qe(""),
                                      await re(
                                          (0, M.u)({ analytics: le, conversationKey: t })({
                                              text: Ue,
                                              attachments: ot,
                                              mode: J,
                                              returnCitations: Ae,
                                              isGrokDrawer: Ce,
                                              promptMetadata: st.promptMetadata,
                                              onStart: () => {
                                                  Te(!1),
                                                      ze.forEach((e) => {
                                                          He(e);
                                                      }),
                                                      je(""),
                                                      Be && (ce || me) && ie();
                                              },
                                              imageGenerationCount: it,
                                              isReasoning: ge,
                                              isDeepsearch: ye,
                                              isImageGen: ce,
                                          }),
                                      ));
                        } catch (e) {
                            Oe({ text: G });
                        } finally {
                            Te(!1);
                        }
                    });
                a.useEffect(() => {
                    ve || je(""),
                        ve &&
                            (je(ve.message ?? ""),
                            ze.forEach((e) => {
                                He(e);
                            }),
                            ve.fileAttachments &&
                                ve.fileAttachments.length > 0 &&
                                ve.fileAttachments.forEach((e) => {
                                    Ne(e);
                                }),
                            setTimeout(() => {
                                lt();
                            }, 0));
                }, [ve]);
                const ut = a.useCallback(
                    (e) => {
                        e?.preventDefault(), e?.stopPropagation(), Te(!0);
                    },
                    [Te],
                );
                a.useEffect(() => {
                    !Pe || Ke || Ge || ct();
                }, [Pe, Ke, ct, Ge]);
                const mt = a.useCallback(
                        (0, m.Z)(() => {
                            re((0, D.I)({ analytics: le, conversationKey: t })), e && e.abort(), (0, I.DE)(le);
                        }, 50),
                        [Xe, e],
                    ),
                    ht = a.useCallback(
                        (e) => {
                            Ze && (Fe(e[0]), (0, I.dP)(le, "clipboard"));
                        },
                        [Fe, le, Ze],
                    ),
                    pt = a.useCallback(
                        (e) => {
                            be || "Enter" !== e.key || e.shiftKey || (e.preventDefault(), at && ut());
                        },
                        [be, at, ut],
                    ),
                    bt = a.useCallback(
                        (e) => {
                            "Backspace" === e.key && 0 === Ue.length && (ce || me) && ie();
                        },
                        [ie, ce, me, Ue.length],
                    ),
                    ft = a.useCallback(() => {
                        lt();
                    }, [lt]),
                    gt = a.useMemo(() => {
                        if (0 !== ze.length)
                            return a.createElement(
                                r.Z,
                                { style: V.fileAttachments },
                                ze.map((e, t) => {
                                    const n = We[e];
                                    return A.$.includes(n?.local?.type) || A.$.includes(n?.remote?.mimeType)
                                        ? a.createElement(R.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  me && 1 === ze.length && ie(), He(e), ft();
                                              },
                                              selectedFile: n,
                                          })
                                        : a.createElement(R.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  He(e), ft();
                                              },
                                              selectedFile: n,
                                          });
                                }),
                            );
                    }, [We, ze, He, ft, me, ie]),
                    yt = !_e,
                    kt = u && (!fe || !Pe) && !Ge,
                    wt = { color: Ue ? d.default.theme.colors.brandColor : d.default.theme.colors.gray700 };
                a.useEffect(() => {
                    kt || dt();
                }, [kt, dt]);
                const Dt = a.useMemo(() => a.createElement(W.Z, { fadeIn: $e.current, isInProgress: !q, isInputCompact: he, isLoading: Pe || Ge, isSendEnabled: at, onSend: ut, onStop: mt, useMagicWandIcon: ae }), [q, Pe, Ge, at, ut, mt, ae, he]),
                    Ct = a.useMemo(
                        () =>
                            a.createElement(
                                r.Z,
                                { style: V.contentBelowContainer },
                                a.createElement(
                                    r.Z,
                                    { style: Ce || he ? V.contentBelowLeftCompact : V.contentBelowLeft },
                                    yt &&
                                        a.createElement(
                                            a.Fragment,
                                            null,
                                            a.createElement($.Z, { disabled: ue, fadeIn: $e.current, focused: pe, isInputCompact: he, label: "", useButtonsForExpandedInput: !0 }),
                                            a.createElement(H.Z, {
                                                disabled: null !== Ye,
                                                fadeIn: $e.current,
                                                focused: pe,
                                                onClick: () => clearTimeout(Se.current),
                                                onHomeScreen: X,
                                                onShowDegradedModal: (e) => {
                                                    Ye || qe(e || U);
                                                },
                                            }),
                                        ),
                                ),
                                a.createElement(r.Z, { style: Ce || he ? V.contentBelowRightCompact : V.contentBelowRight }, Re && a.createElement(N.t, { conversationKey: t, disabled: Y, fadeIn: $e.current, focused: pe, inputAtBottom: j, inputAtHome: X }), !1, he && !Ce ? (0 === Ue.length && q && !tt ? a.createElement(P.Z, { fadeIn: $e.current, isInputCompact: he }) : Dt) : a.createElement(a.Fragment, null, a.createElement(P.Z, { fadeIn: $e.current, isInputCompact: he }), Dt)),
                            ),
                        [Ce, he, yt, !0, ue, pe, Ye, Re, t, Y, j, X, Ue, Dt, q, tt],
                    );
                return (
                    a.useEffect(() => {
                        rt.length > 0 && lt();
                    }, [lt, rt]),
                    a.useEffect(() => {
                        if ((xe.text.length > 0 && je(xe.text), xe.attachments.length > 0)) for (const e of xe.attachments) Ne(e);
                        xe.modeButtonFilterKey && (De(xe.modeButtonFilterKey), ft()), (xe.text.length > 0 || xe.attachments.length > 0 || xe.modeButtonFilterKey) && re((0, w.Uo)(t, { text: "", attachments: [] }));
                    }, [xe, t, re, Ne, ft, De]),
                    oe
                        ? a.createElement(
                              r.Z,
                              { style: V.deprecatedContainer },
                              a.createElement(
                                  Z.P,
                                  { direction: i.Z.getTextDirection(Ue) },
                                  a.createElement(T.z, null),
                                  a.createElement(
                                      r.Z,
                                      { style: V.inputOuterContainer },
                                      Be && a.createElement(_.Z, null),
                                      a.createElement(s.Z, {
                                          autoFocus: !fe,
                                          contentAbove: gt,
                                          editable: u && (!fe || !Pe) && !Ge,
                                          inputStyle: [V.inputStyle, wt],
                                          leftAligned: !0,
                                          leftContent: n ? void 0 : a.createElement($.Z, { disabled: ue, isInputCompact: he, label: "" }),
                                          maxNumberOfLines: 15,
                                          multiline: !0,
                                          numberOfLines: 1,
                                          onChange: et,
                                          onFilesAdded: ht,
                                          onKeyPress: pt,
                                          placeholder: ee,
                                          ref: (e) => {
                                              (Le.current = e), e && Q?.(e);
                                          },
                                          rightContent: Dt,
                                          style: V.deprecatedInputContainer,
                                          styleType: "selection",
                                          value: Ue,
                                      }),
                                  ),
                              ),
                          )
                        : a.createElement(
                              r.Z,
                              { onClick: ft, style: V.container },
                              a.createElement(
                                  Z.P,
                                  { direction: i.Z.getTextDirection(Ue) },
                                  a.createElement(T.z, null),
                                  a.createElement(
                                      r.Z,
                                      { style: V.inputOuterContainer },
                                      Be && a.createElement(_.Z, null),
                                      a.createElement(s.Z, {
                                          autoFocus: !fe,
                                          contentAbove: gt,
                                          contentBelow: Ct,
                                          editable: kt,
                                          inputStyle: [V.inputStyle, wt],
                                          leftAligned: !0,
                                          maxNumberOfLines: 15,
                                          multiline: !0,
                                          numberOfLines: 1,
                                          onBlur: () => ke(!1),
                                          onChange: et,
                                          onFilesAdded: ht,
                                          onFocus: () => ke(!0),
                                          onKeyDown: bt,
                                          onKeyPress: pt,
                                          placeholder: ee,
                                          ref: (e) => {
                                              (Le.current = e), e && Q?.(e);
                                          },
                                          style: V.inputContainer,
                                          styleType: "selection",
                                          value: Ue,
                                      }),
                                  ),
                              ),
                              Ye && a.createElement(F.Z, { arrowXStart: "50%", onAnimationEnd: () => qe(null), subtitle: Ye.title, title: Ye.subtitle }),
                          )
                );
            }
            const V = d.default.create((e) => ({ container: { width: "100%", borderRadius: e.spaces.space16, backgroundColor: e.colors.gray50, borderStyle: "solid", borderWidth: 1, borderColor: "transparent", transition: "all 0.2s" }, contentBelowContainer: { width: "100%", paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, contentBelowLeft: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: e.spaces.space8, flex: 1 }, contentBelowRight: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space8, paddingStart: e.spaces.space16 }, contentBelowLeftCompact: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: e.spaces.space8, paddingEnd: e.spaces.space8 }, contentBelowRightCompact: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", flex: 1, gap: e.spaces.space8 }, inputOuterContainer: { position: "relative", flex: 1 }, inputStyle: { flex: 1, fontSize: 16, paddingTop: 20, paddingBottom: 20 }, inputContainer: { width: "100%", paddingStart: e.spaces.space4, backgroundColor: e.colors.gray50, borderRadius: e.spaces.space24, height: 300, fontSize: 16, flex: 1, justifyContent: "space-between" }, deprecatedContainer: { width: "100%" }, deprecatedInputContainer: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, width: "100%", borderColor: e.colors.gray50, borderWidth: e.spaces.space1, borderStyle: "solid" }, fileAttachments: { flex: 1, display: "flex", flexDirection: "row", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingTop: 14, paddingBottom: 0, flexWrap: "wrap" } }));
        },
        764326: (e, t, n) => {
            n.d(t, { DP: () => r, Qs: () => l, il: () => a, u$: () => o });
            const a = { borderRadius: 25, padding: 8, paddingStart: 8, paddingEnd: 8, flexDirection: "row", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: 1 },
                o = { padding: 6, paddingStart: 6, paddingEnd: 6 },
                r = { transitionTimingFunction: "ease-out", opacity: 1, animationDuration: "0.4s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                l = { height: 17, width: 16 };
        },
        878264: (e, t, n) => {
            n.d(t, { M: () => d });
            n(136728);
            var a = n(202784),
                o = n(400752),
                r = n(420182);
            const l = "rweb.grok.buttonClicks";
            function d(e) {
                const t = (0, o.Dv)(r.lZ),
                    [n, d] = a.useState(!1);
                a.useEffect(() => {
                    (async () => {
                        try {
                            const n = await t.get(l);
                            d((n?.clicked || []).includes(e));
                        } catch (e) {}
                    })();
                }, [t, e]);
                return {
                    hasClicked: n,
                    markAsClicked: async () => {
                        try {
                            const n = await t.get(l),
                                a = n?.clicked || [];
                            a.includes(e) || (a.push(e), await t.set(l, { clicked: a })), d(!0);
                        } catch (e) {}
                    },
                };
            }
        },
        492010: (e, t, n) => {
            n.d(t, { u: () => r });
            var a = n(537392),
                o = n(392237);
            function r() {
                const e = (0, a.Zx)(({ containerWidth: e }) => e <= o.default.theme.breakpoints.small);
                return { showChatBubbleEdit: !e, showInputEdit: e };
            }
        },
        721270: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => j, default: () => V });
            var a = n(202784),
                o = n(719870),
                r = n(325686),
                l = n(442730),
                d = n(952793),
                i = n(976021),
                s = n(978921),
                c = n(122670),
                u = n(595080),
                m = (n(136728), n(731708)),
                h = n(392237),
                p = n(67369),
                b = n(65469),
                f = n(988290);
            function g({ token: e }) {
                const t = (0, p.Zz)(),
                    { isGrokDrawer: n, isGrokShare: o } = (0, f.ZP)(),
                    { disableCodeBlockStickyHeader: l } = a.useContext(u.$);
                return a.createElement(r.Z, { style: y.codeContainer }, a.createElement(b.Z, { code: e.text, headerBarStyle: l ? void 0 : n || o || t ? y.drawerStickyContainer : y.stickyContainer, language: e.lang }));
            }
            const y = h.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1.25em" } }));
            function k({ token: e }) {
                const { isAnimated: t } = a.useContext(u.$),
                    n = a.useMemo(() => [w.codeSpan, t ? w.animation : null], [t]);
                return a.createElement(m.ZP, { style: n }, e.text);
            }
            const w = h.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: h.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            var D = n(33474);
            function C() {
                return a.createElement("hr", { style: E.horizontalRule });
            }
            const E = h.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var M = n(342430),
                v = n(910594),
                x = n(488684);
            function S({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return a.createElement(x.Z, { screenName: e.handle || "" }, a.createElement(m.ZP, { link: t }, e.text));
            }
            const I = { level: 0 },
                Z = a.createContext(I);
            function A({ token: e }) {
                const { level: t } = a.useContext(Z),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, o) => {
                        n.push(a.createElement(Z.Provider, { key: `li-${o.toString()}`, value: { level: t + 1 } }, a.createElement(R, { isFirst: 0 === o, item: e, level: t })));
                    });
                const o = a.useMemo(
                    () =>
                        [
                            { ...B.list, ...B.level1 },
                            { ...B.list, ...B.level2 },
                            { ...B.list, ...B.level3 },
                        ][t] ?? { ...B.list, ...B.level4 },
                    [t],
                );
                return e.ordered ? a.createElement(Z.Provider, { value: { level: t + 1 } }, a.createElement("ol", { dir: e.direction, start: e.start, style: o }, n)) : a.createElement(Z.Provider, { value: { level: t + 1 } }, a.createElement("ul", { dir: e.direction, style: o }, n));
            }
            const R = ({ isFirst: e, item: t, level: n }) => {
                    const o = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            o.push(a.createElement(z, { key: `token-${t}`, token: e }));
                        });
                    const r = a.useMemo(() => {
                        let t = "0.8em";
                        return 1 === n && (t = "0.4em"), 2 === n && (t = "0.2em"), n >= 3 && (t = "0em"), { marginTop: t, ...(e ? { marginTop: 0 } : {}) };
                    }, [e, n]);
                    return a.createElement("li", { style: { ...B.listItem, ...r } }, o);
                },
                B = h.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.8em" }, firstListItem: { marginTop: 0 } }));
            var P = n(444342);
            function T({ children: e, isRootLevel: t, style: n, token: o }) {
                return a.createElement(i.P, { direction: o.direction }, a.createElement(m.ZP, { style: [t && _.paragraph, n] }, a.createElement(P.Z, { token: o }, e)));
            }
            const _ = h.default.create((e) => ({ paragraph: { display: "block", marginBottom: "1.25em" } }));
            function $({ children: e, isRootLevel: t, token: n }) {
                return a.createElement(r.Z, { style: L.container }, a.createElement(m.ZP, { style: L.quoteText }, e));
            }
            const L = h.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginBottom: "1.25em" }, quoteText: { fontStyle: "italic" } }));
            var H = n(5741);
            function F({ token: e }) {
                const t = e.header
                        ? a.createElement(
                              "tr",
                              { style: N.tableRow },
                              e.header?.map((e, t) =>
                                  a.createElement(
                                      "th",
                                      { style: N.tableHeaderCell },
                                      a.createElement(
                                          r.Z,
                                          { style: N.cellContent },
                                          e.tokens?.map((e, n) => a.createElement(z, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              a.createElement(
                                  "tr",
                                  { style: N.tableRow },
                                  e.map((e, n) =>
                                      a.createElement(
                                          "td",
                                          { style: N.tableCell },
                                          a.createElement(
                                              r.Z,
                                              { style: N.cellContent },
                                              e.tokens?.map((e, o) => a.createElement(z, { key: `td-${t}-${n}-${o}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return a.createElement(r.Z, { style: N.tableContainer }, a.createElement("table", { style: N.table }, t, n));
            }
            const N = h.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } })),
                W = a.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: o } = a.useContext(u.$),
                            r = a.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const o = `${n}`;
                                            e.push(a.createElement(W, { key: o, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            l = a.createElement(T, { isRootLevel: t, style: [O.expandedLineHeight, e ? O.noMarginBottom : void 0], token: n }, r);
                        if (o && !o.includes(n.type)) return a.createElement(m.ZP, { style: O.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return a.createElement(S, { token: n });
                            case "code":
                                return a.createElement(g, { token: n });
                            case "codespan":
                                return a.createElement(k, { token: n });
                            case "list":
                                return a.createElement(A, { token: n });
                            case "blockquote":
                                return a.createElement($, { token: n }, r);
                            case "table":
                                return a.createElement(F, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return a.createElement("br", null);
                            case "hr":
                                return a.createElement(C, null);
                            case "text":
                                return a.createElement(P.Z, { token: n }, r);
                            case "link":
                                return a.createElement(v.Z, { token: n });
                            case "heading":
                                return a.createElement(D.X, { token: n }, r);
                            case "strong":
                                return a.createElement(m.ZP, { style: O.expandedLineHeight, weight: "bold" }, a.createElement(P.Z, { token: n }, r));
                            case "em":
                                return a.createElement(m.ZP, { style: [O.expandedLineHeight, O.italic] }, a.createElement(P.Z, { token: n }, r));
                            case "emStrong":
                                return a.createElement(m.ZP, { style: [O.expandedLineHeight, O.italic], weight: "bold" }, a.createElement(P.Z, { token: n }, r));
                            case "blockLatex":
                                return a.createElement(M.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return a.createElement(M.Z, { content: n.text });
                            default:
                                return l;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                z = W,
                O = h.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: H.Y }, noMarginBottom: { marginBottom: 0 } }));
            function K(e) {
                return e.items && e.items.length ? K(e.items[0]) : e.tokens && e.tokens.length ? K(e.tokens[0]) : e.text || "";
            }
            function G(e) {
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                e.direction = l.Z.getTextDirection(K(e));
                        }
                    }),
                    e
                );
            }
            o.TU.use({ extensions: [c._, ...s.Z] });
            const U = [],
                j = a.memo(({ allowedTokenTypes: e, chatResponseAnnotations: t, citations: n, disableCodeBlockStickyHeader: s, disableLinks: c, isAnimated: m, markdownText: h, style: p }) => {
                    const b = (0, d.hC)("responsive_web_grok_links") && !m,
                        f = a.useMemo(() => {
                            const e = (function (e, t) {
                                if (!t) return e;
                                t.sort((e, t) => e.startIndex - t.startIndex);
                                let n = e,
                                    a = 0;
                                return (
                                    t.forEach(({ endIndex: e, startIndex: t }) => {
                                        const o = n.slice(t + a, e + a),
                                            r = `[${o}](https://x.com/i/grok?text=${encodeURIComponent(o)})`;
                                        (n = n.slice(0, t + a) + r + n.slice(e + a)), (a += r.length - (e - t));
                                    }),
                                    n
                                );
                            })(h, b ? t : void 0);
                            return G(o.TU.lexer(e ?? ""));
                        }, [h, t, b]),
                        g = a.useMemo(() => f.map((e, t) => a.createElement(z, { isLast: t === f.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [f]);
                    return a.createElement(u.Z, { allowedTokenTypes: e, citations: n ?? U, disableCodeBlockStickyHeader: s, disableLinks: c, isAnimated: m }, a.createElement(i.P, { direction: l.Z.getTextDirection(h ?? "") }, a.createElement(r.Z, { style: [{ display: "block" }, p] }, g)));
                }),
                V = j;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => l, Z: () => d });
            var a = n(202784);
            const o = [],
                r = { isAnimated: !1, citations: o, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0 },
                l = a.createContext(r);
            function d({ children: e, disableLinks: t, isAnimated: n, citations: r = o, disableCodeBlockStickyHeader: d, allowedTokenTypes: i }) {
                const s = r.length ? r : o,
                    c = a.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: s, disableCodeBlockStickyHeader: d, allowedTokenTypes: i }), [n, t, s, d, i]);
                return a.createElement(l.Provider, { value: c }, e);
            }
        },
        33474: (e, t, n) => {
            n.d(t, { X: () => i });
            var a = n(202784),
                o = n(67369),
                r = n(731708),
                l = n(976021),
                d = n(444342);
            function i({ children: e, token: t }) {
                const n = (0, o.yu)(),
                    i = a.useMemo(() => {
                        const e = { display: "block" };
                        switch (t.depth) {
                            case 1:
                                return (e.marginBottom = "0.5em"), { weight: "heavy", size: n ? "title2" : "title1", style: e };
                            case 2:
                                return (e.marginTop = "1.6em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "title4", style: e };
                            case 3:
                                return (e.marginTop = "1.3em"), (e.marginBottom = "0.6em"), { weight: "bold", size: "headline1", style: e };
                            default:
                                return { weight: "bold", style: e };
                        }
                    }, [t.depth, n]);
                return a.createElement(l.P, { direction: t.direction }, a.createElement(r.ZP, i, a.createElement(d.Z, { token: t }, e)));
            }
        },
        342430: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                o = n(366929),
                r = n(325686),
                l = n(731708),
                d = n(392237),
                i = n(595080);
            function s({ content: e, isBlock: t = !1 }) {
                const n = a.useRef(null),
                    [d, s] = a.useState(!1),
                    { isAnimated: u } = a.useContext(i.$);
                a.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            (n.current.innerHTML = ""), o.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 });
                            const a = document.createElement("code");
                            (a.className = "language-latex"), (a.innerText = e), (a.style.display = "none"), (a.className = t ? "raw_katex_block" : "raw_katex"), n.current?.appendChild(a), s(!1);
                        } catch {
                            s(!0);
                        }
                }, [e, t, n]);
                const m = a.useMemo(() => [t ? c.block : null, u ? c.animation : null], [t, u]);
                return d ? a.createElement(l.ZP, null, e) : a.createElement(r.Z, { ref: n, style: m });
            }
            const c = d.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        910594: (e, t, n) => {
            n.d(t, { Z: () => N });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(731708),
                r = n(488684),
                l = n(392237),
                d = n(674132),
                i = n.n(d),
                s = n(952793),
                c = n(725516),
                u = n(125363),
                m = n(327597),
                h = n(654917),
                p = n(595080),
                b = n(5741),
                f = n(45843),
                g = n(325686),
                y = n(818199),
                k = n(530732),
                w = n(630715),
                D = n(725405),
                C = n(809311);
            const E = "grok_citation_web_result",
                M = ({ link: e }) => {
                    const { isAnimated: t } = a.useContext(p.$),
                        [n, o] = a.useState(!1),
                        r = (0, D.Z)(),
                        l = a.useCallback(() => {
                            o(!0), r.scribe({ action: "hover", component: E, data: { url: e.url } });
                        }, [o, r, e.url]),
                        d = a.useCallback(() => o(!1), [o]),
                        i = a.useCallback(() => {
                            r.scribe({ action: "click", component: E, data: { url: e.url } });
                        }, [r, e.url]);
                    let s = new URL(e.url).hostname;
                    s.startsWith("www.") && (s = s.slice(4));
                    const c = a.useCallback(() => a.createElement(v, { webResult: e }), [e]);
                    return a.createElement("div", { className: "omit-from-copy", style: x.inlineContainer }, a.createElement(g.Z, { style: [x.inlineContainer, t ? x.animation : null] }, a.createElement(y.Z, { renderContent: c }, a.createElement(k.Z, { link: e.url, onMouseEnter: l, onMouseLeave: d, onPress: i, style: [x.content, e.favicon_base64 ? x.faviconContainer : x.iconContainer, n ? x.containerHovered : void 0], withoutInteractiveStyles: !0 }, e.favicon_base64 ? a.createElement(f.Z, { source: e.favicon_base64, style: x.favicon }) : a.createElement(w.default, { style: x.linkIcon })))));
                },
                v = ({ webResult: e }) => a.createElement(g.Z, { style: x.hoverCardContainer }, a.createElement(C.p, { item: e })),
                x = l.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var S = n(323265),
                I = n(301758),
                Z = n(836255);
            const A = "grok_citation_post",
                R = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: o } = a.useContext(p.$),
                        [r, l] = a.useState(!1),
                        d = (0, D.Z)(),
                        i = a.useCallback(() => {
                            l(!0), d.scribe({ action: "hover", component: A, data: { tweet_id: e } });
                        }, [l, d, e]),
                        s = a.useCallback(() => l(!1), [l]),
                        c = a.useCallback(() => {
                            l(!0), d.scribe({ action: "click", component: A, data: { tweet_id: e } });
                        }, [l, d, e]);
                    a.useEffect(() => {
                        e && n(Z.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = Z.Z.selectHydrated(t.getState(), e),
                        h = a.useCallback(() => a.createElement(B, { postId: e }), [e]);
                    if (!m) return null;
                    const b = m?.user?.profile_image_url_https;
                    return a.createElement("div", { className: "omit-from-copy", style: P.inlineContainer }, a.createElement(g.Z, { style: [P.inlineContainer, o ? P.animation : null] }, a.createElement(y.Z, { renderContent: h }, a.createElement(k.Z, { link: m.permalink, onMouseEnter: i, onMouseLeave: s, onPress: c, style: [P.content, b ? P.avatarContainer : P.iconContainer, r ? P.containerHovered : void 0], withoutInteractiveStyles: !0 }, b ? a.createElement(f.Z, { source: b, style: P.avatar }) : a.createElement(w.default, { style: P.linkIcon })))));
                },
                B = ({ postId: e }) =>
                    a.createElement(
                        g.Z,
                        { style: P.hoverCardContainer },
                        a.createElement(I.Z, {
                            isCondensed: !0,
                            onPress: (e) => {
                                S.ZP.isTwitterApp();
                            },
                            tweetId: e,
                            withBirdwatchPivot: !1,
                            withLink: !0,
                            withUserHoverCard: !1,
                        }),
                    ),
                P = l.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                T = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                _ = { label: i().dc0c8266 },
                $ = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                L = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const H = ["http:", "https:"],
                F = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function N({ token: e }) {
                const { citations: t } = a.useContext(p.$),
                    n = (0, c.z)(),
                    l = (0, u.I0)(),
                    [d, i] = a.useState(!1),
                    b = e.href || "",
                    f = a.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match($);
                                return t ? t[1] : void 0;
                            })(b),
                        [b],
                    ),
                    g = a.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(L);
                                return t ? t[1] : void 0;
                            })(b),
                        [b],
                    ),
                    y = t.find((t) => t.url === e.href),
                    k = (0, s.hC)("responsive_web_grok_show_citations"),
                    w = (0, h.eX)(),
                    D = a.useCallback(
                        (e) => {
                            e.preventDefault(), g && (n.scribe({ element: "annotation_text_link", action: "click" }), l((0, m.u)({ analytics: n, conversationKey: w })({ text: decodeURIComponent(g), returnCitations: k })));
                        },
                        [g, w, n, l, k],
                    );
                let C;
                try {
                    e.href && (C = new URL(e.href));
                } catch (e) {}
                if (!C || !H.includes(C.protocol)) {
                    let t;
                    return (t = e.text === e.href ? e.text : !e.text && e.href && y ? `(${e.href})` : `${e.text} ${e.href ? `(${e.href})` : ""}`), a.createElement(o.ZP, null, t);
                }
                if (!e.text && e.href) {
                    if (y) return a.createElement(M, { link: y });
                    const t = T(e.href);
                    if (t) return a.createElement(R, { postId: t });
                }
                return g ? a.createElement(o.ZP, { hoverLabel: _, link: e.href, onClick: D, onMouseEnter: () => i(!0), onMouseLeave: () => i(!1), style: [W.expandedLineHeight, W.promptLink, d && W.hoverStyle], withInteractiveStyling: !1 }, e.text) : f ? a.createElement(r.Z, { screenName: f }, a.createElement(o.ZP, { link: e.href }, e.text)) : a.createElement(o.ZP, { link: e.href, ref: F }, e.text);
            }
            const W = l.default.create((e) => {
                const t = "light" === l.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: b.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 } };
            });
        },
        444342: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                o = n(731708),
                r = n(392237),
                l = n(595080),
                d = n(5741);
            const i = a.memo(({ style: e, text: t }) => a.createElement(o.ZP, { style: u.text }, t));
            function s({ children: e, token: t }) {
                const { isAnimated: n } = a.useContext(l.$);
                if (e.length) return a.createElement(o.ZP, null, e);
                const r = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return n ? a.createElement(c, { text: r }) : a.createElement(i, { style: u.text, text: r });
            }
            const c = a.memo(
                    ({ style: e, text: t }) => {
                        const n = t.split(" "),
                            r = n.map((e, t) => a.createElement(o.ZP, { key: `markdown_${t}`, style: [u.text, u.animation] }, e, t < n.length - 1 ? " " : void 0));
                        return a.createElement(a.Fragment, null, r);
                    },
                    (e, t) => e.text === t.text,
                ),
                u = r.default.create((e) => ({ text: { lineHeight: d.Y }, animation: { opacity: 1, animationDuration: "1s", transitionTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        5741: (e, t, n) => {
            n.d(t, { Y: () => a });
            const a = "1.5";
        },
        398083: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        n.e("loader.Markdown"),
                    ]).then(n.bind(n, 721270)),
            });
        },
        978921: (e, t, n) => {
            n.d(t, { Z: () => c });
            const a = (e, t, n, a, o) => ({
                    name: e,
                    level: "inline",
                    start(e) {
                        let n = 0;
                        for (; n < e.length; ) {
                            if (((n = e.indexOf(a, n)), -1 === n)) return;
                            if (0 === n || [" ", "(", "\n"].includes(e.charAt(n - 1))) {
                                if (e.substring(n).match(t)) return n;
                            }
                            n += a.length;
                        }
                    },
                    tokenizer(e) {
                        const n = e.match(t);
                        if (n) {
                            const e = n[1].trim();
                            if (/^[A-Za-z]$/.test(e) || /^\d+(,\d+)*(\.\d+)?$/.test(e)) return;
                            return e.includes("\\") || /[\+\-\*\/=^_<>\\]/.test(e) ? { type: o ? "blockLatex" : "inlineLatex", raw: n[0], text: e } : void 0;
                        }
                    },
                }),
                o = a("inlineDollar", /^\$([^$\n]+?)\$(?=[\s?!.,:？！。，：)]|$)/, 0, "$", !1),
                r = a("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, 0, "$$", !0),
                l = a("inlineParen", /^\\\((.*?)\\\)/, 0, "\\(", !1),
                d = a("inlineBracket", /^\\\[([\s\S]*?)\\\]/, 0, "\\[", !0),
                i = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                s = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                c = [
                    o,
                    r,
                    l,
                    d,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(i),
                                n = e.match(s),
                                a = t ?? n ?? null;
                            if (a) return { type: "blockLatex", raw: a[0], text: a[2].trim() };
                        },
                    },
                ];
        },
        122670: (e, t, n) => {
            n.d(t, { _: () => o });
            const a = /^[a-zA-Z0-9]$/;
            const o = {
                name: "x-handle",
                level: "inline",
                start: (e) => e.indexOf("@"),
                tokenizer(e, t) {
                    if (t?.length) {
                        const e = t[t.length - 1];
                        if ("text" === e.type && e.text && ((n = e.text[e.text.length - 1]), a.test(n))) return;
                    }
                    var n;
                    const o = /^@(\w{1,15})\b/.exec(e);
                    if (o) return { type: "x-handle", raw: o[0], text: o[0], handle: o[1] };
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-78699f4a.85400e0a.js.map
