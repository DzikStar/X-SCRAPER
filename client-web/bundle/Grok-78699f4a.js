"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-78699f4a"],
    {
        791786: (e, a, t) => {
            t.d(a, { Z: () => W });
            t(136728);
            var n = t(202784),
                d = t(400752),
                o = t(325686),
                r = t(107267),
                l = t(392237),
                s = t(442730),
                i = t(371344),
                u = t(111677),
                c = t.n(u),
                m = t(666536),
                p = t(403808),
                b = t(420182),
                h = t(952793),
                f = t(246851),
                D = t(782642),
                g = t(725516),
                M = t(125363),
                w = t(389071),
                y = t(958602),
                C = t(100326),
                k = t(309373),
                S = t(327597),
                E = t(620988),
                A = t(305442),
                I = t(962379),
                v = t(623494),
                B = t(976021),
                R = t(246277),
                x = t(335785),
                P = t(988290),
                Z = t(186794),
                T = t(3144),
                _ = t(276411),
                F = t(454875),
                N = t(928831),
                K = t(795388),
                G = t(40247),
                O = t(454595),
                L = t(690672),
                z = t(492010);
            const $ = "new_prompt",
                j = "rweb.grok.prompt";
            const H = c().ef4602ec,
                U = { title: c().c65f7308, subtitle: c().f2a8655e };
            function W({ abortController: e, conversationKey: a, disableFileUploads: t, grokShare: u, hasAccess: c, inputAtBottom: W, inputAtHome: X, insideConversation: J, isIdle: Q, mode: q, onFieldTextInputRef: Y, placeholder: ee, promptSender: ae, useDraftPersistence: te, useMagicWandIcon: ne, useNonExpanded: de }) {
                const oe = (0, M.I0)(),
                    re = (0, g.z)(),
                    le = (0, r.useHistory)(),
                    { clearFilterKey: se, hasValue: ie, isCreateImageEnabled: ue, isFileInputDisabled: ce, isImageEditEnabled: me, isInputCompact: pe, isInputFocused: be, isInputMobile: he, isInputMobileSize: fe, isReasoningEnabled: De, isResearchEnabled: ge, setFocused: Me, setHasValue: we, setPendingModeButtonFilterKey: ye } = (0, N.w)(),
                    { isGrokDrawer: Ce } = (0, P.ZP)(),
                    ke = (0, w.bD)(a),
                    Se = (0, M.v9)(ke.selectEditingMessageId);
                let Ee = (0, M.v9)(ke.selectEditingMessage);
                const Ae = (0, M.v9)(ke.selectInputPrefill),
                    Ie = n.useRef(null),
                    { showInputEdit: ve } = (0, z.u)();
                Ee = ve ? Ee : void 0;
                const Be = (0, h.hC)("responsive_web_grok_file_upload_enabled"),
                    Re = (0, h.hC)("responsive_web_grok_show_citations"),
                    xe = (0, h.hC)("responsive_web_grok_personality_button_enabled"),
                    Pe = (0, h.hC)("responsive_web_grok_new_home_layout"),
                    [Ze, Te] = n.useState(!1),
                    { loading: _e } = (0, I.Z)(),
                    Fe = n.useRef(_e),
                    Ne = n.useRef(null),
                    { clearSelectedFile: Ke, onFileSelected: Ge, onGrokFileSelected: Oe, selectedFiles: Le } = (0, E.ZP)(),
                    ze = n.useMemo(() => Object.keys(Le), [Le]),
                    $e = (0, D.p)(),
                    je = Object.keys(Le).some((e) => Le[e]?.isUploading),
                    He = Object.keys(Le).some((e) => Le[e]?.isPendingAutomaticPromptSend),
                    [Ue, We] = n.useState(""),
                    Ve = (0, d.Dv)(b.dd),
                    Xe = 0 === Ue.length,
                    [Je, Qe] = n.useState(null);
                n.useEffect(() => {
                    Je && re.scribe({ action: "impression", component: "grok-input", element: "degraded-modal", data: { event_info: JSON.stringify(Je) } });
                }, [re, Je]);
                const qe = (0, f.Z)(X);
                n.useEffect(() => {
                    !qe && X && me && se();
                }, [qe, X, me, se]);
                const Ye = (function (e, a, t) {
                        const o = (0, d.Dv)(b.lZ),
                            r = (0, M.v9)(a.selectConversationId),
                            l = n.useMemo(() => r || (t ? "" : $), [r, t]),
                            s = n.useMemo(
                                () =>
                                    (0, m.Z)((e) => {
                                        l &&
                                            o.get(j).then((a) => {
                                                const t = { ...a };
                                                t?.drafts || (t.drafts = new Map()), t?.drafts && t.drafts.set(l, e), o.set(j, t);
                                            });
                                    }, 500),
                                [o, l],
                            );
                        return (
                            n.useEffect(() => {
                                l &&
                                    o.get(j).then((a) => {
                                        a?.drafts && a.drafts.has(l) && e((e) => e || a.drafts?.get(l) || "");
                                    });
                            }, [o, e, l]),
                            s
                        );
                    })(We, ke, !te || !!Se || !!u),
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
                    ta = n.useMemo(() => Object.values(Le).every((e) => e && !e.isUploading), [Le]),
                    na = n.useMemo(() => (Ue.trim().length > 0 || aa) && ta && !He, [Ue, aa, ta, He]),
                    da = n.useMemo(() => ze.map((e) => Le[e]?.remote).filter(Boolean), [ze, Le]),
                    oa = n.useMemo(() => ze.map((e) => Le[e]?.local).filter(Boolean), [ze, Le]),
                    ra = n.useCallback(() => {
                        Ne.current?.focus(), Me(!0);
                    }, [Me]),
                    la = n.useCallback(() => {
                        Ne.current?.blur(), Me(!1);
                    }, [Me]),
                    sa = (0, A.Z)("grok_input"),
                    ia = (function (e, a) {
                        const t = {};
                        return a && e.length ? { promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: e[0].url } } } : t;
                    })(da, me),
                    ua = (0, p.r)(async () => {
                        try {
                            if (ae)
                                ae({
                                    text: Ue,
                                    attachments: da,
                                    mode: q,
                                    returnCitations: Re,
                                    onStart: () => {
                                        Te(!1),
                                            ze.forEach((e) => {
                                                Ke(e);
                                            }),
                                            We(""),
                                            Ye(""),
                                            Pe && (ue || me) && se();
                                    },
                                    imageGenerationCount: sa,
                                    isReasoning: De,
                                    isDeepsearch: ge,
                                });
                            else if (u) {
                                const e = await (0, C.X)({ analytics: re, api: Ve, dispatch: oe, grokModule: ke, fromShareId: u });
                                e ? (Te(!1), ze.forEach((e) => Ke(e)), We(""), le.push(`/i/grok?conversation=${e}&text=${encodeURIComponent(Ue)}`)) : $e({ text: H });
                            } else
                                Se
                                    ? Ee &&
                                      (await oe(
                                          (0, k.X)({ analytics: re, conversationKey: a })({
                                              editingMessageId: Se,
                                              text: Ue,
                                              fileAttachments: da,
                                              returnCitations: Re,
                                              mode: q,
                                              imageGenerationCount: sa,
                                              onStart: () => {
                                                  Te(!1),
                                                      ze.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      We("");
                                              },
                                              isReasoning: De,
                                              isDeepsearch: ge,
                                          }),
                                      ))
                                    : (Ye(""),
                                      await oe(
                                          (0, S.u)({ analytics: re, conversationKey: a })({
                                              text: Ue,
                                              attachments: da,
                                              mode: q,
                                              returnCitations: Re,
                                              isGrokDrawer: Ce,
                                              promptMetadata: ia.promptMetadata,
                                              onStart: () => {
                                                  Te(!1),
                                                      ze.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      We(""),
                                                      Pe && (ue || me) && se();
                                              },
                                              imageGenerationCount: sa,
                                              isReasoning: De,
                                              isDeepsearch: ge,
                                              isImageGen: ue,
                                          }),
                                      ));
                        } catch (e) {
                            $e({ text: H });
                        } finally {
                            Te(!1);
                        }
                    });
                n.useEffect(() => {
                    Ee || We(""),
                        Ee &&
                            (We(Ee.message ?? ""),
                            ze.forEach((e) => {
                                Ke(e);
                            }),
                            Ee.fileAttachments &&
                                Ee.fileAttachments.length > 0 &&
                                Ee.fileAttachments.forEach((e) => {
                                    Oe(e);
                                }),
                            setTimeout(() => {
                                ra();
                            }, 0));
                }, [Ee]);
                const ca = n.useCallback(
                    (e) => {
                        e?.preventDefault(), e?.stopPropagation(), Te(!0);
                    },
                    [Te],
                );
                n.useEffect(() => {
                    !Ze || je || He || ua();
                }, [Ze, je, ua, He]);
                const ma = n.useCallback(
                        (0, m.Z)(() => {
                            oe((0, y.I)({ analytics: re, conversationKey: a })), e && e.abort(), (0, v.DE)(re);
                        }, 50),
                        [Xe, e],
                    ),
                    pa = n.useCallback(
                        (e) => {
                            Be && (Ge(e[0]), (0, v.dP)(re, "clipboard"));
                        },
                        [Ge, re, Be],
                    ),
                    ba = n.useCallback(
                        (e) => {
                            he || "Enter" !== e.key || e.shiftKey || (e.preventDefault(), na && ca());
                        },
                        [he, na, ca],
                    ),
                    ha = n.useCallback(
                        (e) => {
                            "Backspace" === e.key && 0 === Ue.length && (ue || me) && se();
                        },
                        [se, ue, me, Ue.length],
                    ),
                    fa = n.useCallback(() => {
                        ra();
                    }, [ra]),
                    Da = n.useMemo(() => {
                        if (0 !== ze.length)
                            return n.createElement(
                                o.Z,
                                { style: V.fileAttachments },
                                ze.map((e, a) => {
                                    const t = Le[e];
                                    return R.$.includes(t?.local?.type) || R.$.includes(t?.remote?.mimeType)
                                        ? n.createElement(x.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  me && 1 === ze.length && se(), Ke(e), fa();
                                              },
                                              selectedFile: t,
                                          })
                                        : n.createElement(x.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  Ke(e), fa();
                                              },
                                              selectedFile: t,
                                          });
                                }),
                            );
                    }, [Le, ze, Ke, fa, me, se]),
                    ga = !_e,
                    Ma = c && (!fe || !Ze) && !He,
                    wa = { color: Ue ? l.default.theme.colors.brandColor : l.default.theme.colors.gray700 };
                n.useEffect(() => {
                    Ma || la();
                }, [Ma, la]);
                const ya = n.useMemo(() => n.createElement(L.Z, { fadeIn: Fe.current, isInProgress: !Q, isInputCompact: pe, isLoading: Ze || He, isSendEnabled: na, onSend: ca, onStop: ma, useMagicWandIcon: ne }), [Q, Ze, He, na, ca, ma, ne, pe]),
                    Ca = n.useMemo(
                        () =>
                            n.createElement(
                                o.Z,
                                { style: V.contentBelowContainer },
                                n.createElement(
                                    o.Z,
                                    { style: [V.contentBelowLeft, (pe || Ce) && V.compactContentBelowLeft] },
                                    ga &&
                                        n.createElement(
                                            n.Fragment,
                                            null,
                                            n.createElement(F.Z, { disabled: ce, fadeIn: Fe.current, focused: be, isInputCompact: pe, label: "", useButtonsForExpandedInput: !0 }),
                                            n.createElement(K.Z, {
                                                disabled: null !== Je,
                                                fadeIn: Fe.current,
                                                focused: be,
                                                onClick: () => clearTimeout(Ie.current),
                                                onHomeScreen: X,
                                                onShowDegradedModal: (e) => {
                                                    Je || Qe(e || U);
                                                },
                                            }),
                                        ),
                                ),
                                n.createElement(o.Z, { style: [V.contentBelowRight, (pe || Ce) && V.compactContentBelowRight] }, xe && n.createElement(O.t, { conversationKey: a, disabled: J, fadeIn: Fe.current, focused: be, inputAtBottom: W, inputAtHome: X }), !1, pe && !Ce ? (0 === Ue.length && Q && !aa ? n.createElement(Z.Z, { fadeIn: Fe.current, isInputCompact: pe }) : ya) : n.createElement(n.Fragment, null, n.createElement(Z.Z, { fadeIn: Fe.current, isInputCompact: pe }), ya)),
                            ),
                        [Ce, pe, ga, !0, ce, be, Je, xe, a, J, W, X, Ue, ya, Q, aa],
                    );
                return (
                    n.useEffect(() => {
                        oa.length > 0 && ra();
                    }, [ra, oa]),
                    n.useEffect(() => {
                        if ((Ae.text.length > 0 && We(Ae.text), Ae.attachments.length > 0)) for (const e of Ae.attachments) Oe(e);
                        Ae.modeButtonFilterKey && (ye(Ae.modeButtonFilterKey), fa()), (Ae.text.length > 0 || Ae.attachments.length > 0 || Ae.modeButtonFilterKey) && oe((0, w.Uo)(a, { text: "", attachments: [] }));
                    }, [Ae, a, oe, Oe, fa, ye]),
                    de
                        ? n.createElement(
                              o.Z,
                              { style: V.outerContainer },
                              Pe && n.createElement(_.Z, null),
                              n.createElement(
                                  o.Z,
                                  { style: V.deprecatedContainer },
                                  n.createElement(
                                      B.P,
                                      { direction: s.Z.getTextDirection(Ue) },
                                      n.createElement(T.z, null),
                                      n.createElement(
                                          o.Z,
                                          { style: V.inputOuterContainer },
                                          n.createElement(i.Z, {
                                              autoFocus: !fe,
                                              contentAbove: Da,
                                              editable: c && (!fe || !Ze) && !He,
                                              inputStyle: [V.inputStyle, wa],
                                              leftAligned: !0,
                                              leftContent: t ? void 0 : n.createElement(F.Z, { disabled: ce, isInputCompact: pe, label: "" }),
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onChange: ea,
                                              onFilesAdded: pa,
                                              onKeyPress: ba,
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
                              o.Z,
                              { style: V.outerContainer },
                              Pe && n.createElement(_.Z, null),
                              n.createElement(
                                  o.Z,
                                  { onClick: fa, style: V.container },
                                  n.createElement(
                                      B.P,
                                      { direction: s.Z.getTextDirection(Ue) },
                                      n.createElement(T.z, null),
                                      n.createElement(
                                          o.Z,
                                          { style: V.inputOuterContainer },
                                          n.createElement(i.Z, {
                                              autoFocus: !fe,
                                              contentAbove: Da,
                                              contentBelow: Ca,
                                              editable: Ma,
                                              inputStyle: [V.inputStyle, wa],
                                              leftAligned: !0,
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onBlur: () => Me(!1),
                                              onChange: ea,
                                              onFilesAdded: pa,
                                              onFocus: () => Me(!0),
                                              onKeyDown: ha,
                                              onKeyPress: ba,
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
        764326: (e, a, t) => {
            t.d(a, { DP: () => o, Qs: () => r, il: () => n, u$: () => d });
            const n = { borderRadius: 25, padding: 8, paddingStart: 8, paddingEnd: 8, flexDirection: "row", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: 1 },
                d = { padding: 6, paddingStart: 6, paddingEnd: 6 },
                o = { transitionTimingFunction: "ease-out", opacity: 1, animationDuration: "0.4s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                r = { height: 17, width: 16 };
        },
        878264: (e, a, t) => {
            t.d(a, { M: () => l });
            t(136728);
            var n = t(202784),
                d = t(400752),
                o = t(420182);
            const r = "rweb.grok.buttonClicks";
            function l(e) {
                const a = (0, d.Dv)(o.lZ),
                    [t, l] = n.useState(!1);
                n.useEffect(() => {
                    (async () => {
                        try {
                            const t = await a.get(r);
                            l((t?.clicked || []).includes(e));
                        } catch (e) {}
                    })();
                }, [a, e]);
                return {
                    hasClicked: t,
                    markAsClicked: async () => {
                        try {
                            const t = await a.get(r),
                                n = t?.clicked || [];
                            n.includes(e) || (n.push(e), await a.set(r, { clicked: n })), l(!0);
                        } catch (e) {}
                    },
                };
            }
        },
        492010: (e, a, t) => {
            t.d(a, { u: () => o });
            var n = t(537392),
                d = t(392237);
            function o() {
                const e = (0, n.Zx)(({ containerWidth: e }) => e <= d.default.theme.breakpoints.small);
                return { showChatBubbleEdit: !e, showInputEdit: e };
            }
        },
        398083: (e, a, t) => {
            t.d(a, { Z: () => n });
            t(202784);
            const n = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("modules.audio-6107ac1a"),
                        t.e("modules.audio-b953418a"),
                        t.e("modules.audio-7c51e6a7"),
                        t.e("modules.audio-04db59e9"),
                        t.e("modules.audio-76583d6c"),
                        t.e("modules.audio-b7a8a5fb"),
                        t.e("modules.audio-51f6e793"),
                        t.e("modules.audio-e019dbda"),
                        t.e("modules.audio-262c94d4"),
                        t.e("modules.audio-c6fe4ea4"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        t.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        t.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        t.e("shared~bundle.Grok~loader.Markdown"),
                        t.e("loader.Markdown"),
                    ]).then(t.bind(t, 721270)),
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-78699f4a.2f55e79a.js.map
