"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-78699f4a"],
    {
        791786: (e, a, d) => {
            d.d(a, { Z: () => W });
            d(136728);
            var n = d(202784),
                o = d(400752),
                t = d(325686),
                r = d(107267),
                l = d(392237),
                s = d(442730),
                i = d(371344),
                u = d(674132),
                c = d.n(u),
                h = d(666536),
                m = d(403808),
                p = d(420182),
                b = d(952793),
                D = d(246851),
                f = d(782642),
                M = d(725516),
                g = d(125363),
                w = d(389071),
                y = d(958602),
                k = d(100326),
                C = d(309373),
                A = d(327597),
                I = d(620988),
                E = d(305442),
                S = d(962379),
                v = d(623494),
                P = d(976021),
                B = d(246277),
                R = d(335785),
                x = d(988290),
                Z = d(186794),
                _ = d(3144),
                T = d(276411),
                F = d(454875),
                N = d(928831),
                K = d(795388),
                G = d(40247),
                O = d(454595),
                L = d(690672),
                z = d(492010);
            const $ = "new_prompt",
                j = "rweb.grok.prompt";
            const H = c().ef4602ec,
                U = { title: c().c65f7308, subtitle: c().f2a8655e };
            function W({ abortController: e, conversationKey: a, disableFileUploads: d, grokShare: u, hasAccess: c, inputAtBottom: W, inputAtHome: X, insideConversation: J, isIdle: Q, mode: q, onFieldTextInputRef: Y, placeholder: ee, promptSender: ae, useDraftPersistence: de, useMagicWandIcon: ne, useNonExpanded: oe }) {
                const te = (0, g.I0)(),
                    re = (0, M.z)(),
                    le = (0, r.useHistory)(),
                    { clearFilterKey: se, hasValue: ie, isCreateImageEnabled: ue, isFileInputDisabled: ce, isImageEditEnabled: he, isInputCompact: me, isInputFocused: pe, isInputMobile: be, isInputMobileSize: De, isReasoningEnabled: fe, isResearchEnabled: Me, setFocused: ge, setHasValue: we, setPendingModeButtonFilterKey: ye } = (0, N.w)(),
                    { isGrokDrawer: ke } = (0, x.ZP)(),
                    Ce = (0, w.bD)(a),
                    Ae = (0, g.v9)(Ce.selectEditingMessageId);
                let Ie = (0, g.v9)(Ce.selectEditingMessage);
                const Ee = (0, g.v9)(Ce.selectInputPrefill),
                    Se = n.useRef(null),
                    { showInputEdit: ve } = (0, z.u)();
                Ie = ve ? Ie : void 0;
                const Pe = (0, b.hC)("responsive_web_grok_file_upload_enabled"),
                    Be = (0, b.hC)("responsive_web_grok_show_citations"),
                    Re = (0, b.hC)("responsive_web_grok_personality_button_enabled"),
                    xe = (0, b.hC)("responsive_web_grok_new_home_layout"),
                    [Ze, _e] = n.useState(!1),
                    { loading: Te } = (0, S.Z)(),
                    Fe = n.useRef(Te),
                    Ne = n.useRef(null),
                    { clearSelectedFile: Ke, onFileSelected: Ge, onGrokFileSelected: Oe, selectedFiles: Le } = (0, I.ZP)(),
                    ze = n.useMemo(() => Object.keys(Le), [Le]),
                    $e = (0, f.p)(),
                    je = Object.keys(Le).some((e) => Le[e]?.isUploading),
                    He = Object.keys(Le).some((e) => Le[e]?.isPendingAutomaticPromptSend),
                    [Ue, We] = n.useState(""),
                    Ve = (0, o.Dv)(p.dd),
                    Xe = 0 === Ue.length,
                    [Je, Qe] = n.useState(null);
                n.useEffect(() => {
                    Je && re.scribe({ action: "impression", component: "grok-input", element: "degraded-modal", data: { event_info: JSON.stringify(Je) } });
                }, [re, Je]);
                const qe = (0, D.Z)(X);
                n.useEffect(() => {
                    !qe && X && he && se();
                }, [qe, X, he, se]);
                const Ye = (function (e, a, d) {
                        const t = (0, o.Dv)(p.lZ),
                            r = (0, g.v9)(a.selectConversationId),
                            l = n.useMemo(() => r || (d ? "" : $), [r, d]),
                            s = n.useMemo(
                                () =>
                                    (0, h.Z)((e) => {
                                        l &&
                                            t.get(j).then((a) => {
                                                const d = { ...a };
                                                d?.drafts || (d.drafts = new Map()), d?.drafts && d.drafts.set(l, e), t.set(j, d);
                                            });
                                    }, 500),
                                [t, l],
                            );
                        return (
                            n.useEffect(() => {
                                l &&
                                    t.get(j).then((a) => {
                                        a?.drafts && a.drafts.has(l) && e((e) => e || a.drafts?.get(l) || "");
                                    });
                            }, [t, e, l]),
                            s
                        );
                    })(We, Ce, !de || !!Ae || !!u),
                    ea = n.useCallback(
                        (e) => {
                            let a = e.target.value;
                            e.target.value.length > Ue.length + 1 && (a = a.replace(/\r?\n+$/, "")), Ye(a), We(a);
                        },
                        [Ye, Ue],
                    );
                n.useEffect(() => {
                    const e = Ue.length > 0;
                    e !== ie && we(e);
                }, [Ue, ie, we]);
                const aa = ze.length > 0,
                    da = n.useMemo(() => Object.values(Le).every((e) => e && !e.isUploading), [Le]),
                    na = n.useMemo(() => (Ue.trim().length > 0 || aa) && da && !He, [Ue, aa, da, He]),
                    oa = n.useMemo(() => ze.map((e) => Le[e]?.remote).filter(Boolean), [ze, Le]),
                    ta = n.useMemo(() => ze.map((e) => Le[e]?.local).filter(Boolean), [ze, Le]),
                    ra = n.useCallback(() => {
                        Ne.current?.focus(), ge(!0);
                    }, [ge]),
                    la = n.useCallback(() => {
                        Ne.current?.blur(), ge(!1);
                    }, [ge]),
                    sa = (0, E.Z)("grok_input"),
                    ia = (function (e, a) {
                        const d = {};
                        return a && e.length ? { promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: e[0].url } } } : d;
                    })(oa, he),
                    ua = (0, m.r)(async () => {
                        try {
                            if (ae)
                                ae({
                                    text: Ue,
                                    attachments: oa,
                                    mode: q,
                                    returnCitations: Be,
                                    onStart: () => {
                                        _e(!1),
                                            ze.forEach((e) => {
                                                Ke(e);
                                            }),
                                            We(""),
                                            Ye(""),
                                            xe && (ue || he) && se();
                                    },
                                    imageGenerationCount: sa,
                                    isReasoning: fe,
                                    isDeepsearch: Me,
                                });
                            else if (u) {
                                const e = await (0, k.X)({ analytics: re, api: Ve, dispatch: te, grokModule: Ce, fromShareId: u });
                                e ? (_e(!1), ze.forEach((e) => Ke(e)), We(""), le.push(`/i/grok?conversation=${e}&text=${encodeURIComponent(Ue)}`)) : $e({ text: H });
                            } else
                                Ae
                                    ? Ie &&
                                      (await te(
                                          (0, C.X)({ analytics: re, conversationKey: a })({
                                              editingMessageId: Ae,
                                              text: Ue,
                                              fileAttachments: oa,
                                              returnCitations: Be,
                                              mode: q,
                                              imageGenerationCount: sa,
                                              onStart: () => {
                                                  _e(!1),
                                                      ze.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      We("");
                                              },
                                              isReasoning: fe,
                                              isDeepsearch: Me,
                                          }),
                                      ))
                                    : (Ye(""),
                                      await te(
                                          (0, A.u)({ analytics: re, conversationKey: a })({
                                              text: Ue,
                                              attachments: oa,
                                              mode: q,
                                              returnCitations: Be,
                                              isGrokDrawer: ke,
                                              promptMetadata: ia.promptMetadata,
                                              onStart: () => {
                                                  _e(!1),
                                                      ze.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      We(""),
                                                      xe && (ue || he) && se();
                                              },
                                              imageGenerationCount: sa,
                                              isReasoning: fe,
                                              isDeepsearch: Me,
                                              isImageGen: ue,
                                          }),
                                      ));
                        } catch (e) {
                            $e({ text: H });
                        } finally {
                            _e(!1);
                        }
                    });
                n.useEffect(() => {
                    Ie || We(""),
                        Ie &&
                            (We(Ie.message ?? ""),
                            ze.forEach((e) => {
                                Ke(e);
                            }),
                            Ie.fileAttachments &&
                                Ie.fileAttachments.length > 0 &&
                                Ie.fileAttachments.forEach((e) => {
                                    Oe(e);
                                }),
                            setTimeout(() => {
                                ra();
                            }, 0));
                }, [Ie]);
                const ca = n.useCallback(
                    (e) => {
                        e?.preventDefault(), e?.stopPropagation(), _e(!0);
                    },
                    [_e],
                );
                n.useEffect(() => {
                    !Ze || je || He || ua();
                }, [Ze, je, ua, He]);
                const ha = n.useCallback(
                        (0, h.Z)(() => {
                            te((0, y.I)({ analytics: re, conversationKey: a })), e && e.abort(), (0, v.DE)(re);
                        }, 50),
                        [Xe, e],
                    ),
                    ma = n.useCallback(
                        (e) => {
                            Pe && (Ge(e[0]), (0, v.dP)(re, "clipboard"));
                        },
                        [Ge, re, Pe],
                    ),
                    pa = n.useCallback(
                        (e) => {
                            be || "Enter" !== e.key || e.shiftKey || (e.preventDefault(), na && ca());
                        },
                        [be, na, ca],
                    ),
                    ba = n.useCallback(
                        (e) => {
                            "Backspace" === e.key && 0 === Ue.length && (ue || he) && se();
                        },
                        [se, ue, he, Ue.length],
                    ),
                    Da = n.useCallback(() => {
                        ra();
                    }, [ra]),
                    fa = n.useMemo(() => {
                        if (0 !== ze.length)
                            return n.createElement(
                                t.Z,
                                { style: V.fileAttachments },
                                ze.map((e, a) => {
                                    const d = Le[e];
                                    return B.$.includes(d?.local?.type) || B.$.includes(d?.remote?.mimeType)
                                        ? n.createElement(R.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  he && 1 === ze.length && se(), Ke(e), Da();
                                              },
                                              selectedFile: d,
                                          })
                                        : n.createElement(R.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  Ke(e), Da();
                                              },
                                              selectedFile: d,
                                          });
                                }),
                            );
                    }, [Le, ze, Ke, Da, he, se]),
                    Ma = !Te,
                    ga = c && (!De || !Ze) && !He,
                    wa = { color: Ue ? l.default.theme.colors.brandColor : l.default.theme.colors.gray700 };
                n.useEffect(() => {
                    ga || la();
                }, [ga, la]);
                const ya = n.useMemo(() => n.createElement(L.Z, { fadeIn: Fe.current, isInProgress: !Q, isInputCompact: me, isLoading: Ze || He, isSendEnabled: na, onSend: ca, onStop: ha, useMagicWandIcon: ne }), [Q, Ze, He, na, ca, ha, ne, me]),
                    ka = n.useMemo(
                        () =>
                            n.createElement(
                                t.Z,
                                { style: V.contentBelowContainer },
                                n.createElement(
                                    t.Z,
                                    { style: [V.contentBelowLeft, (me || ke) && V.compactContentBelowLeft] },
                                    Ma &&
                                        n.createElement(
                                            n.Fragment,
                                            null,
                                            n.createElement(F.Z, { disabled: ce, fadeIn: Fe.current, focused: pe, isInputCompact: me, label: "", useButtonsForExpandedInput: !0 }),
                                            n.createElement(K.Z, {
                                                disabled: null !== Je,
                                                fadeIn: Fe.current,
                                                focused: pe,
                                                onClick: () => clearTimeout(Se.current),
                                                onHomeScreen: X,
                                                onShowDegradedModal: (e) => {
                                                    Je || Qe(e || U);
                                                },
                                            }),
                                        ),
                                ),
                                n.createElement(t.Z, { style: [V.contentBelowRight, (me || ke) && V.compactContentBelowRight] }, Re && n.createElement(O.t, { conversationKey: a, disabled: J, fadeIn: Fe.current, focused: pe, inputAtBottom: W, inputAtHome: X }), !1, me && !ke ? (0 === Ue.length && Q && !aa ? n.createElement(Z.Z, { fadeIn: Fe.current, isInputCompact: me }) : ya) : n.createElement(n.Fragment, null, n.createElement(Z.Z, { fadeIn: Fe.current, isInputCompact: me }), ya)),
                            ),
                        [ke, me, Ma, !0, ce, pe, Je, Re, a, J, W, X, Ue, ya, Q, aa],
                    );
                return (
                    n.useEffect(() => {
                        ta.length > 0 && ra();
                    }, [ra, ta]),
                    n.useEffect(() => {
                        if ((Ee.text.length > 0 && We(Ee.text), Ee.attachments.length > 0)) for (const e of Ee.attachments) Oe(e);
                        Ee.modeButtonFilterKey && (ye(Ee.modeButtonFilterKey), Da()), (Ee.text.length > 0 || Ee.attachments.length > 0 || Ee.modeButtonFilterKey) && te((0, w.Uo)(a, { text: "", attachments: [] }));
                    }, [Ee, a, te, Oe, Da, ye]),
                    oe
                        ? n.createElement(
                              t.Z,
                              { style: V.outerContainer },
                              xe && n.createElement(T.Z, null),
                              n.createElement(
                                  t.Z,
                                  { style: V.deprecatedContainer },
                                  n.createElement(
                                      P.P,
                                      { direction: s.Z.getTextDirection(Ue) },
                                      n.createElement(_.z, null),
                                      n.createElement(
                                          t.Z,
                                          { style: V.inputOuterContainer },
                                          n.createElement(i.Z, {
                                              autoFocus: !De,
                                              contentAbove: fa,
                                              editable: c && (!De || !Ze) && !He,
                                              inputStyle: [V.inputStyle, wa],
                                              leftAligned: !0,
                                              leftContent: d ? void 0 : n.createElement(F.Z, { disabled: ce, isInputCompact: me, label: "" }),
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onChange: ea,
                                              onFilesAdded: ma,
                                              onKeyPress: pa,
                                              placeholder: ee,
                                              ref: (e) => {
                                                  (Ne.current = e), e && Y?.(e);
                                              },
                                              rightContent: ya,
                                              style: V.deprecatedInputContainer,
                                              styleType: "selection",
                                              value: Ue,
                                          }),
                                      ),
                                  ),
                              ),
                          )
                        : n.createElement(
                              t.Z,
                              { style: V.outerContainer },
                              xe && n.createElement(T.Z, null),
                              n.createElement(
                                  t.Z,
                                  { onClick: Da, style: V.container },
                                  n.createElement(
                                      P.P,
                                      { direction: s.Z.getTextDirection(Ue) },
                                      n.createElement(_.z, null),
                                      n.createElement(
                                          t.Z,
                                          { style: V.inputOuterContainer },
                                          n.createElement(i.Z, {
                                              autoFocus: !De,
                                              contentAbove: fa,
                                              contentBelow: ka,
                                              editable: ga,
                                              inputStyle: [V.inputStyle, wa],
                                              leftAligned: !0,
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onBlur: () => ge(!1),
                                              onChange: ea,
                                              onFilesAdded: ma,
                                              onFocus: () => ge(!0),
                                              onKeyDown: ba,
                                              onKeyPress: pa,
                                              placeholder: ee,
                                              ref: (e) => {
                                                  (Ne.current = e), e && Y?.(e);
                                              },
                                              style: V.inputContainer,
                                              styleType: "selection",
                                              value: Ue,
                                          }),
                                      ),
                                  ),
                                  Je && n.createElement(G.Z, { arrowXStart: "50%", onAnimationEnd: () => Qe(null), subtitle: Je.title, title: Je.subtitle }),
                              ),
                          )
                );
            }
            const V = l.default.create((e) => ({ outerContainer: { position: "relative", width: "100%" }, container: { width: "100%", borderRadius: e.spaces.space24, backgroundColor: e.colors.gray0, transition: "all 0.2s", boxShadow: `0px 0px 4px 2px ${e.colors.gray0}` }, contentBelowContainer: { width: "100%", paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, contentBelowLeft: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: e.spaces.space8, flex: 1 }, compactContentBelowLeft: { gap: e.spaces.space4 }, contentBelowRight: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space8, paddingStart: e.spaces.space8 }, compactContentBelowRight: { gap: e.spaces.space4 }, inputOuterContainer: { position: "relative", flex: 1 }, inputStyle: { flex: 1, fontSize: 16, paddingTop: 20, paddingBottom: 20 }, inputContainer: { width: "100%", paddingStart: e.spaces.space4, backgroundColor: e.colors.gray0, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, height: 300, fontSize: 16, flex: 1, justifyContent: "space-between" }, deprecatedContainer: { width: "100%" }, deprecatedInputContainer: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, width: "100%", borderColor: e.colors.gray50, borderWidth: e.spaces.space1, borderStyle: "solid" }, fileAttachments: { flex: 1, display: "flex", flexDirection: "row", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingTop: 14, paddingBottom: 0, flexWrap: "wrap" } }));
        },
        764326: (e, a, d) => {
            d.d(a, { DP: () => t, Qs: () => r, il: () => n, u$: () => o });
            const n = { borderRadius: 25, padding: 8, paddingStart: 8, paddingEnd: 8, flexDirection: "row", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: 1 },
                o = { padding: 6, paddingStart: 6, paddingEnd: 6 },
                t = { transitionTimingFunction: "ease-out", opacity: 1, animationDuration: "0.4s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                r = { height: 17, width: 16 };
        },
        878264: (e, a, d) => {
            d.d(a, { M: () => l });
            d(136728);
            var n = d(202784),
                o = d(400752),
                t = d(420182);
            const r = "rweb.grok.buttonClicks";
            function l(e) {
                const a = (0, o.Dv)(t.lZ),
                    [d, l] = n.useState(!1);
                n.useEffect(() => {
                    (async () => {
                        try {
                            const d = await a.get(r);
                            l((d?.clicked || []).includes(e));
                        } catch (e) {}
                    })();
                }, [a, e]);
                return {
                    hasClicked: d,
                    markAsClicked: async () => {
                        try {
                            const d = await a.get(r),
                                n = d?.clicked || [];
                            n.includes(e) || (n.push(e), await a.set(r, { clicked: n })), l(!0);
                        } catch (e) {}
                    },
                };
            }
        },
        492010: (e, a, d) => {
            d.d(a, { u: () => t });
            var n = d(537392),
                o = d(392237);
            function t() {
                const e = (0, n.Zx)(({ containerWidth: e }) => e <= o.default.theme.breakpoints.small);
                return { showChatBubbleEdit: !e, showInputEdit: e };
            }
        },
        398083: (e, a, d) => {
            d.d(a, { Z: () => n });
            d(202784);
            const n = (0, d(523561).Z)({
                loader: () =>
                    Promise.all([
                        d.e("modules.common-e907d115"),
                        d.e("modules.common-e019dbda"),
                        d.e("modules.audio-6107ac1a"),
                        d.e("modules.audio-b953418a"),
                        d.e("modules.audio-7c51e6a7"),
                        d.e("modules.audio-04db59e9"),
                        d.e("modules.audio-76583d6c"),
                        d.e("modules.audio-b7a8a5fb"),
                        d.e("modules.audio-51f6e793"),
                        d.e("modules.audio-e019dbda"),
                        d.e("modules.audio-262c94d4"),
                        d.e("modules.audio-c6fe4ea4"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        d.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        d.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        d.e("shared~bundle.Grok~loader.Markdown"),
                        d.e("loader.Markdown"),
                    ]).then(d.bind(d, 721270)),
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-78699f4a.5ca627ea.js.map
