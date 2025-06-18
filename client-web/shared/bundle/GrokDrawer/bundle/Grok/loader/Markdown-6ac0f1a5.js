"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"],
    {
        791786: (e, t, n) => {
            n.d(t, { Z: () => U });
            n(136728);
            var a = n(202784),
                o = n(400752),
                i = n(325686),
                s = n(107267),
                r = n(392237),
                l = n(442730),
                c = n(371344),
                d = n(111677),
                u = n.n(d),
                p = n(666536),
                m = n(403808),
                g = n(420182),
                f = n(952793),
                h = n(246851),
                y = n(782642),
                b = n(725516),
                C = n(125363),
                E = n(389071),
                k = n(958602),
                w = n(100326),
                x = n(309373),
                v = n(327597),
                S = n(620988),
                I = n(305442),
                Z = n(962379),
                _ = n(623494),
                D = n(976021),
                P = n(246277),
                M = n(335785),
                B = n(988290),
                F = n(186794),
                R = n(3144),
                A = n(276411),
                G = n(454875),
                T = n(928831),
                K = n(795388),
                L = n(40247),
                z = n(454595),
                O = n(690672),
                j = n(492010);
            const H = "new_prompt",
                $ = "rweb.grok.prompt";
            const W = u().ef4602ec,
                N = { title: u().c65f7308, subtitle: u().f2a8655e };
            function U({ abortController: e, conversationKey: t, disableFileUploads: n, grokShare: d, hasAccess: u, inputAtBottom: U, inputAtHome: V, insideConversation: Q, isIdle: J, mode: q, onFieldTextInputRef: Y, placeholder: ee, promptSender: te, useDraftPersistence: ne, useMagicWandIcon: ae, useNonExpanded: oe }) {
                const ie = (0, C.I0)(),
                    se = (0, b.z)(),
                    re = (0, s.useHistory)(),
                    { clearFilterKey: le, hasValue: ce, isCreateImageEnabled: de, isFileInputDisabled: ue, isImageEditEnabled: pe, isInputCompact: me, isInputFocused: ge, isInputMobile: fe, isInputMobileSize: he, isReasoningEnabled: ye, isResearchEnabled: be, setFocused: Ce, setHasValue: Ee, setPendingModeButtonFilterKey: ke } = (0, T.w)(),
                    { isGrokDrawer: we } = (0, B.ZP)(),
                    xe = (0, E.bD)(t),
                    ve = (0, C.v9)(xe.selectEditingMessageId);
                let Se = (0, C.v9)(xe.selectEditingMessage);
                const Ie = (0, C.v9)(xe.selectInputPrefill),
                    Ze = a.useRef(null),
                    { showInputEdit: _e } = (0, j.u)();
                Se = _e ? Se : void 0;
                const De = (0, f.hC)("responsive_web_grok_file_upload_enabled"),
                    Pe = (0, f.hC)("responsive_web_grok_show_citations"),
                    Me = (0, f.hC)("responsive_web_grok_personality_button_enabled"),
                    Be = (0, f.hC)("responsive_web_grok_new_home_layout"),
                    [Fe, Re] = a.useState(!1),
                    { loading: Ae } = (0, Z.Z)(),
                    Ge = a.useRef(Ae),
                    Te = a.useRef(null),
                    { clearSelectedFile: Ke, onFileSelected: Le, onGrokFileSelected: ze, selectedFiles: Oe } = (0, S.ZP)(),
                    je = a.useMemo(() => Object.keys(Oe), [Oe]),
                    He = (0, y.p)(),
                    $e = Object.keys(Oe).some((e) => Oe[e]?.isUploading),
                    We = Object.keys(Oe).some((e) => Oe[e]?.isPendingAutomaticPromptSend),
                    [Ne, Ue] = a.useState(""),
                    Xe = (0, o.Dv)(g.dd),
                    Ve = 0 === Ne.length,
                    [Qe, Je] = a.useState(null);
                a.useEffect(() => {
                    Qe && se.scribe({ action: "impression", component: "grok-input", element: "degraded-modal", data: { event_info: JSON.stringify(Qe) } });
                }, [se, Qe]);
                const qe = (0, h.Z)(V);
                a.useEffect(() => {
                    !qe && V && pe && le();
                }, [qe, V, pe, le]);
                const Ye = (function (e, t, n) {
                        const i = (0, o.Dv)(g.lZ),
                            s = (0, C.v9)(t.selectConversationId),
                            r = a.useMemo(() => s || (n ? "" : H), [s, n]),
                            l = a.useMemo(
                                () =>
                                    (0, p.Z)((e) => {
                                        r &&
                                            i.get($).then((t) => {
                                                const n = { ...t };
                                                n?.drafts || (n.drafts = new Map()), n?.drafts && n.drafts.set(r, e), i.set($, n);
                                            });
                                    }, 500),
                                [i, r],
                            );
                        return (
                            a.useEffect(() => {
                                r &&
                                    i.get($).then((t) => {
                                        t?.drafts && t.drafts.has(r) && e((e) => e || t.drafts?.get(r) || "");
                                    });
                            }, [i, e, r]),
                            l
                        );
                    })(Ue, xe, !ne || !!ve || !!d),
                    et = a.useCallback(
                        (e) => {
                            let t = e.target.value;
                            e.target.value.length > Ne.length + 1 && (t = t.replace(/\r?\n+$/, "")), Ye(t), Ue(t);
                        },
                        [Ye, Ne],
                    );
                a.useEffect(() => {
                    const e = Ne.length > 0;
                    e !== ce && Ee(e);
                }, [Ne, ce, Ee]);
                const tt = je.length > 0,
                    nt = a.useMemo(() => Object.values(Oe).every((e) => e && !e.isUploading), [Oe]),
                    at = a.useMemo(() => (Ne.trim().length > 0 || tt) && nt && !We, [Ne, tt, nt, We]),
                    ot = a.useMemo(() => je.map((e) => Oe[e]?.remote).filter(Boolean), [je, Oe]),
                    it = a.useMemo(() => je.map((e) => Oe[e]?.local).filter(Boolean), [je, Oe]),
                    st = a.useCallback(() => {
                        Te.current?.focus(), Ce(!0);
                    }, [Ce]),
                    rt = a.useCallback(() => {
                        Te.current?.blur(), Ce(!1);
                    }, [Ce]),
                    lt = (0, I.Z)("grok_input"),
                    ct = (function (e, t) {
                        const n = {};
                        return t && e.length ? { promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: e[0].url } } } : n;
                    })(ot, pe),
                    dt = (0, m.r)(async () => {
                        try {
                            if (te)
                                te({
                                    text: Ne,
                                    attachments: ot,
                                    mode: q,
                                    returnCitations: Pe,
                                    onStart: () => {
                                        Re(!1),
                                            je.forEach((e) => {
                                                Ke(e);
                                            }),
                                            Ue(""),
                                            Ye(""),
                                            Be && (de || pe) && le();
                                    },
                                    imageGenerationCount: lt,
                                    isReasoning: ye,
                                    isDeepsearch: be,
                                });
                            else if (d) {
                                const e = await (0, w.X)({ analytics: se, api: Xe, dispatch: ie, grokModule: xe, fromShareId: d });
                                e ? (Re(!1), je.forEach((e) => Ke(e)), Ue(""), re.push(`/i/grok?conversation=${e}&text=${encodeURIComponent(Ne)}`)) : He({ text: W });
                            } else
                                ve
                                    ? Se &&
                                      (await ie(
                                          (0, x.X)({ analytics: se, conversationKey: t })({
                                              editingMessageId: ve,
                                              text: Ne,
                                              fileAttachments: ot,
                                              returnCitations: Pe,
                                              mode: q,
                                              imageGenerationCount: lt,
                                              onStart: () => {
                                                  Re(!1),
                                                      je.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      Ue("");
                                              },
                                              isReasoning: ye,
                                              isDeepsearch: be,
                                          }),
                                      ))
                                    : (Ye(""),
                                      await ie(
                                          (0, v.u)({ analytics: se, conversationKey: t })({
                                              text: Ne,
                                              attachments: ot,
                                              mode: q,
                                              returnCitations: Pe,
                                              isGrokDrawer: we,
                                              promptMetadata: ct.promptMetadata,
                                              onStart: () => {
                                                  Re(!1),
                                                      je.forEach((e) => {
                                                          Ke(e);
                                                      }),
                                                      Ue(""),
                                                      Be && (de || pe) && le();
                                              },
                                              imageGenerationCount: lt,
                                              isReasoning: ye,
                                              isDeepsearch: be,
                                              isImageGen: de,
                                          }),
                                      ));
                        } catch (e) {
                            He({ text: W });
                        } finally {
                            Re(!1);
                        }
                    });
                a.useEffect(() => {
                    Se || Ue(""),
                        Se &&
                            (Ue(Se.message ?? ""),
                            je.forEach((e) => {
                                Ke(e);
                            }),
                            Se.fileAttachments &&
                                Se.fileAttachments.length > 0 &&
                                Se.fileAttachments.forEach((e) => {
                                    ze(e);
                                }),
                            setTimeout(() => {
                                st();
                            }, 0));
                }, [Se]);
                const ut = a.useCallback(
                    (e) => {
                        e?.preventDefault(), e?.stopPropagation(), Re(!0);
                    },
                    [Re],
                );
                a.useEffect(() => {
                    !Fe || $e || We || dt();
                }, [Fe, $e, dt, We]);
                const pt = a.useCallback(
                        (0, p.Z)(() => {
                            ie((0, k.I)({ analytics: se, conversationKey: t })), e && e.abort(), (0, _.DE)(se);
                        }, 50),
                        [Ve, e],
                    ),
                    mt = a.useCallback(
                        (e) => {
                            De && (Le(e[0]), (0, _.dP)(se, "clipboard"));
                        },
                        [Le, se, De],
                    ),
                    gt = a.useCallback(
                        (e) => {
                            fe || "Enter" !== e.key || e.shiftKey || (e.preventDefault(), at && ut());
                        },
                        [fe, at, ut],
                    ),
                    ft = a.useCallback(
                        (e) => {
                            "Backspace" === e.key && 0 === Ne.length && (de || pe) && le();
                        },
                        [le, de, pe, Ne.length],
                    ),
                    ht = a.useCallback(() => {
                        st();
                    }, [st]),
                    yt = a.useMemo(() => {
                        if (0 !== je.length)
                            return a.createElement(
                                i.Z,
                                { style: X.fileAttachments },
                                je.map((e, t) => {
                                    const n = Oe[e];
                                    return P.$.includes(n?.local?.type) || P.$.includes(n?.remote?.mimeType)
                                        ? a.createElement(M.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  pe && 1 === je.length && le(), Ke(e), ht();
                                              },
                                              selectedFile: n,
                                          })
                                        : a.createElement(M.L, {
                                              key: `attachment_${e}`,
                                              onRemove: () => {
                                                  Ke(e), ht();
                                              },
                                              selectedFile: n,
                                          });
                                }),
                            );
                    }, [Oe, je, Ke, ht, pe, le]),
                    bt = !Ae,
                    Ct = u && (!he || !Fe) && !We,
                    Et = { color: Ne ? r.default.theme.colors.brandColor : r.default.theme.colors.gray700 };
                a.useEffect(() => {
                    Ct || rt();
                }, [Ct, rt]);
                const kt = a.useMemo(() => a.createElement(O.Z, { fadeIn: Ge.current, isInProgress: !J, isInputCompact: me, isLoading: Fe || We, isSendEnabled: at, onSend: ut, onStop: pt, useMagicWandIcon: ae }), [J, Fe, We, at, ut, pt, ae, me]),
                    wt = a.useMemo(
                        () =>
                            a.createElement(
                                i.Z,
                                { style: X.contentBelowContainer },
                                a.createElement(
                                    i.Z,
                                    { style: [X.contentBelowLeft, (me || we) && X.compactContentBelowLeft] },
                                    bt &&
                                        a.createElement(
                                            a.Fragment,
                                            null,
                                            a.createElement(G.Z, { disabled: ue, fadeIn: Ge.current, focused: ge, isInputCompact: me, label: "", useButtonsForExpandedInput: !0 }),
                                            a.createElement(K.Z, {
                                                disabled: null !== Qe,
                                                fadeIn: Ge.current,
                                                focused: ge,
                                                onClick: () => clearTimeout(Ze.current),
                                                onHomeScreen: V,
                                                onShowDegradedModal: (e) => {
                                                    Qe || Je(e || N);
                                                },
                                            }),
                                        ),
                                ),
                                a.createElement(i.Z, { style: [X.contentBelowRight, (me || we) && X.compactContentBelowRight] }, Me && a.createElement(z.t, { conversationKey: t, disabled: Q, fadeIn: Ge.current, focused: ge, inputAtBottom: U, inputAtHome: V }), !1, me && !we ? (0 === Ne.length && J && !tt ? a.createElement(F.Z, { fadeIn: Ge.current, isInputCompact: me }) : kt) : a.createElement(a.Fragment, null, a.createElement(F.Z, { fadeIn: Ge.current, isInputCompact: me }), kt)),
                            ),
                        [we, me, bt, !0, ue, ge, Qe, Me, t, Q, U, V, Ne, kt, J, tt],
                    );
                return (
                    a.useEffect(() => {
                        it.length > 0 && st();
                    }, [st, it]),
                    a.useEffect(() => {
                        if ((Ie.text.length > 0 && Ue(Ie.text), Ie.attachments.length > 0)) for (const e of Ie.attachments) ze(e);
                        Ie.modeButtonFilterKey && (ke(Ie.modeButtonFilterKey), ht()), (Ie.text.length > 0 || Ie.attachments.length > 0 || Ie.modeButtonFilterKey) && ie((0, E.Uo)(t, { text: "", attachments: [] }));
                    }, [Ie, t, ie, ze, ht, ke]),
                    oe
                        ? a.createElement(
                              i.Z,
                              { style: X.outerContainer },
                              Be && a.createElement(A.Z, null),
                              a.createElement(
                                  i.Z,
                                  { style: X.deprecatedContainer },
                                  a.createElement(
                                      D.P,
                                      { direction: l.Z.getTextDirection(Ne) },
                                      a.createElement(R.z, null),
                                      a.createElement(
                                          i.Z,
                                          { style: X.inputOuterContainer },
                                          a.createElement(c.Z, {
                                              autoFocus: !he,
                                              contentAbove: yt,
                                              editable: u && (!he || !Fe) && !We,
                                              inputStyle: [X.inputStyle, Et],
                                              leftAligned: !0,
                                              leftContent: n ? void 0 : a.createElement(G.Z, { disabled: ue, isInputCompact: me, label: "" }),
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onChange: et,
                                              onFilesAdded: mt,
                                              onKeyPress: gt,
                                              placeholder: ee,
                                              ref: (e) => {
                                                  (Te.current = e), e && Y?.(e);
                                              },
                                              rightContent: kt,
                                              style: X.deprecatedInputContainer,
                                              styleType: "selection",
                                              value: Ne,
                                          }),
                                      ),
                                  ),
                              ),
                          )
                        : a.createElement(
                              i.Z,
                              { style: X.outerContainer },
                              Be && a.createElement(A.Z, null),
                              a.createElement(
                                  i.Z,
                                  { onClick: ht, style: X.container },
                                  a.createElement(
                                      D.P,
                                      { direction: l.Z.getTextDirection(Ne) },
                                      a.createElement(R.z, null),
                                      a.createElement(
                                          i.Z,
                                          { style: X.inputOuterContainer },
                                          a.createElement(c.Z, {
                                              autoFocus: !he,
                                              contentAbove: yt,
                                              contentBelow: wt,
                                              editable: Ct,
                                              inputStyle: [X.inputStyle, Et],
                                              leftAligned: !0,
                                              maxNumberOfLines: 15,
                                              multiline: !0,
                                              numberOfLines: 1,
                                              onBlur: () => Ce(!1),
                                              onChange: et,
                                              onFilesAdded: mt,
                                              onFocus: () => Ce(!0),
                                              onKeyDown: ft,
                                              onKeyPress: gt,
                                              placeholder: ee,
                                              ref: (e) => {
                                                  (Te.current = e), e && Y?.(e);
                                              },
                                              style: X.inputContainer,
                                              styleType: "selection",
                                              value: Ne,
                                          }),
                                      ),
                                  ),
                                  Qe && a.createElement(L.Z, { arrowXStart: "50%", onAnimationEnd: () => Je(null), subtitle: Qe.title, title: Qe.subtitle }),
                              ),
                          )
                );
            }
            const X = r.default.create((e) => ({ outerContainer: { position: "relative", width: "100%" }, container: { width: "100%", borderRadius: e.spaces.space24, backgroundColor: e.colors.gray0, transition: "all 0.2s", boxShadow: `0px 0px 4px 2px ${e.colors.gray0}` }, contentBelowContainer: { width: "100%", paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, contentBelowLeft: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: e.spaces.space8, flex: 1 }, compactContentBelowLeft: { gap: e.spaces.space4 }, contentBelowRight: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space8, paddingStart: e.spaces.space8 }, compactContentBelowRight: { gap: e.spaces.space4 }, inputOuterContainer: { position: "relative", flex: 1 }, inputStyle: { flex: 1, fontSize: 16, paddingTop: 20, paddingBottom: 20, border: "none", outlineStyle: "none" }, inputContainer: { width: "100%", paddingStart: e.spaces.space4, backgroundColor: e.colors.gray0, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, height: 300, fontSize: 16, flex: 1, justifyContent: "space-between" }, deprecatedContainer: { width: "100%" }, deprecatedInputContainer: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, width: "100%", borderColor: e.colors.gray50, borderWidth: e.spaces.space1, borderStyle: "solid", outlineStyle: "none" }, fileAttachments: { flex: 1, display: "flex", flexDirection: "row", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, paddingTop: 14, paddingBottom: 0, flexWrap: "wrap" } }));
        },
        764326: (e, t, n) => {
            n.d(t, { DP: () => i, Qs: () => s, il: () => a, u$: () => o });
            const a = { borderRadius: 25, padding: 8, paddingStart: 8, paddingEnd: 8, flexDirection: "row", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: 1 },
                o = { padding: 6, paddingStart: 6, paddingEnd: 6 },
                i = { transitionTimingFunction: "ease-out", opacity: 1, animationDuration: "0.4s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                s = { height: 17, width: 16 };
        },
        878264: (e, t, n) => {
            n.d(t, { M: () => r });
            n(136728);
            var a = n(202784),
                o = n(400752),
                i = n(420182);
            const s = "rweb.grok.buttonClicks";
            function r(e) {
                const t = (0, o.Dv)(i.lZ),
                    [n, r] = a.useState(!1);
                a.useEffect(() => {
                    (async () => {
                        try {
                            const n = await t.get(s);
                            r((n?.clicked || []).includes(e));
                        } catch (e) {}
                    })();
                }, [t, e]);
                return {
                    hasClicked: n,
                    markAsClicked: async () => {
                        try {
                            const n = await t.get(s),
                                a = n?.clicked || [];
                            a.includes(e) || (a.push(e), await t.set(s, { clicked: a })), r(!0);
                        } catch (e) {}
                    },
                };
            }
        },
        492010: (e, t, n) => {
            n.d(t, { u: () => i });
            var a = n(537392),
                o = n(392237);
            function i() {
                const e = (0, a.Zx)(({ containerWidth: e }) => e <= o.default.theme.breakpoints.small);
                return { showChatBubbleEdit: !e, showInputEdit: e };
            }
        },
        988290: (e, t, n) => {
            n.d(t, { BQ: () => s, ZP: () => r });
            var a = n(202784);
            const o = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                i = a.createContext(o);
            function s({ children: e, isCompactLayout: t, isEditingEnabled: n, isGrokDrawer: o, isGrokShare: s, isPagedScroll: r, isShowButtons: l, isShowCarousel: c, scrollable: d }) {
                return a.createElement(i.Provider, { value: { scrollable: d, isCompactLayout: t, isShowButtons: l, isEditingEnabled: n, isShowCarousel: c, isPagedScroll: r, isGrokShare: s, isGrokDrawer: o } }, e);
            }
            function r() {
                return a.useContext(i);
            }
        },
        796064: (e, t, n) => {
            n.d(t, { ZP: () => Z, y3: () => v, zF: () => S });
            var a = n(807896),
                o = (n(136728), n(202784)),
                i = n(214997),
                s = n(325686),
                r = n(449161),
                l = n(731708),
                c = n(154003),
                d = n(721266),
                u = n(392237),
                p = n(111677),
                m = n.n(p),
                g = n(707187),
                f = n(254944),
                h = n(409600),
                y = n(191796),
                b = n(323265),
                C = n(725405),
                E = n(620988),
                k = n(623494),
                w = n(246277),
                x = n(928831);
            const v = m().acb2baa0,
                S = m().fe9ad897,
                I = m().h30fd372;
            function Z({ focusInput: e, isMobile: t, style: n }) {
                const u = (0, C.Z)(),
                    { setFilterKey: p } = (0, x.w)(),
                    { clearSelectedFile: m, onFileSelected: Z, selectedFiles: D } = (0, E.ZP)(),
                    P = o.useMemo(() => Object.keys(D), [D]),
                    M = [
                        {
                            id: "create-images",
                            text: v,
                            icon: o.createElement(g.default, { style: [_.icon, t ? _.mobileIcon : null] }),
                            onClick: () => {
                                p("CreateImage");
                            },
                            type: "prefill",
                        },
                        {
                            id: "edit-image",
                            text: S({ ttc_grok_preset: "" }),
                            icon: o.createElement(f.default, { style: [_.icon, t ? _.mobileIcon : null] }),
                            onClick: () => {
                                p("ImageEdit");
                            },
                            type: "file-input",
                        },
                    ];
                b.ZP.isAndroid() && M.push({ id: "try-voice-mode", text: I, icon: o.createElement(h.default, { style: [_.icon, t ? _.mobileIcon : null] }), onClick: () => {}, type: "external-link", url: "https://play.google.com/store/apps/details?id=ai.x.grok" });
                const B = o.useCallback(
                        (e) => {
                            if (e.length <= 0) return;
                            P.length > 0 &&
                                P.forEach((e) => {
                                    m(e);
                                });
                            const t = e[0];
                            Z(t).then(() => {
                                p("ImageEdit");
                            }),
                                (0, k.dP)(u, "button");
                        },
                        [Z, u, p, m, P],
                    ),
                    F = o.useCallback(
                        (t, n) => {
                            u.scribe({ element: "grok-home-preset", action: "click", data: { event_info: n.id } }), "external-link" === n.type && n.url ? (window.location.href = n.url) : n.onClick && (n.onClick?.(), t.preventDefault(), e?.());
                        },
                        [e, u],
                    ),
                    R = (e) => ({
                        backgroundColor: "gray0",
                        borderColor: "gray100",
                        key: e.id,
                        onClick: (t) => {
                            F(t, e);
                        },
                        style: t ? _.mobilePreset : _.preset,
                        disabled: "edit-image" === e.id && P.length > 1,
                    });
                return t
                    ? o.createElement(
                          i.Z,
                          { contentContainerStyle: _.mobilePresetContainer, horizontal: !0, showsHorizontalScrollIndicator: !1, style: [_.mobilePresets, n] },
                          M.map((e) => {
                              const t = R(e);
                              return "file-input" === e.type && "edit-image" === e.id && P.length < 1
                                  ? o.createElement(
                                        r.Z,
                                        (0, a.Z)({}, t, {
                                            accept: w.$.join(","),
                                            multiple: !1,
                                            onChange: (e) => {
                                                B(e);
                                            },
                                            onClick: () => {
                                                u.scribe({ element: "grok-home-preset", action: "click", data: { event_info: e.id } });
                                            },
                                        }),
                                        o.createElement(s.Z, { style: _.mobileButtonContent }, e.icon, o.createElement(l.ZP, { style: _.text }, e.text)),
                                    )
                                  : o.createElement(c.ZP, t, o.createElement(s.Z, { style: _.mobileButtonContent }, o.createElement(s.Z, { style: _.mobilePresetHeader }, e.icon, "external-link" === e.type && o.createElement(y.default, { style: _.externalLinkIcon })), o.createElement(l.ZP, { style: _.text }, e.text)));
                          }),
                      )
                    : o.createElement(
                          s.Z,
                          { style: [_.presets, n] },
                          M.map((e) => {
                              const t = R(e);
                              return "file-input" === e.type && "edit-image" === e.id && P.length < 1
                                  ? o.createElement(
                                        r.Z,
                                        (0, a.Z)({}, t, {
                                            accept: w.$.join(","),
                                            multiple: !1,
                                            onChange: (e) => {
                                                B(e);
                                            },
                                            onClick: () => {
                                                u.scribe({ element: "grok-home-preset", action: "click", data: { event_info: e.id } });
                                            },
                                        }),
                                        e.icon,
                                        o.createElement(d.Z, { size: "space4" }),
                                        o.createElement(l.ZP, { style: _.text }, e.text),
                                    )
                                  : o.createElement(c.ZP, t, e.icon, o.createElement(d.Z, { size: "space4" }), o.createElement(l.ZP, { style: _.text }, e.text));
                          }),
                      );
            }
            const _ = u.default.create((e) => ({ mobilePresets: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, mobilePresetContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, mobilePreset: { borderRadius: e.spaces.space16, overflow: "hidden", padding: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mobileButtonContent: { display: "flex", gap: e.spaces.space8, flexDirection: "column" }, mobilePresetHeader: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }, presets: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space12, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, preset: { display: "flex", flexDirection: "row", alignItems: "center", transition: "background-color 0.2s ease", paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, borderRadius: e.spaces.space16 }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, mobileIcon: { width: e.spaces.space20, height: e.spaces.space20 }, text: { fontSize: e.fontSizes.subtext1, fontWeight: e.fontWeights.medium, marginStart: e.spaces.space4, color: e.colors.gray900 }, externalLinkIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.gray400 } }));
        },
        962379: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(952793),
                o = n(87063),
                i = n(125363),
                s = n(389071);
            function r() {
                const e = (0, i.v9)((e) => (0, s.uX)(e)),
                    t = (0, a.hC)("responsive_web_grok_use_new_layout"),
                    n = (0, i.v9)((e) => (0, s.Pt)(e)),
                    r = Boolean(e?.sections.find((e) => "WIDE_TEXT_CARD" === e.section_type));
                return { enabled: t, layout: e, loading: !n || "none" === n || n === o.Z.LOADING, isGrok3LayoutEnabled: r };
            }
        },
        976021: (e, t, n) => {
            n.d(t, { B: () => c, P: () => l });
            var a = n(202784),
                o = n(224162),
                i = n(442730),
                s = n(952793);
            const r = "responsive_web_grok_rtl_detection",
                l = ({ children: e, direction: t }) => {
                    const n = a.useContext(o.RD),
                        i = t || n.direction,
                        l = a.useMemo(() => ({ ...n, direction: i }), [i, n]);
                    return (0, s.hC)(r) ? a.createElement(o.RD.Provider, { value: l }, e) : a.createElement(a.Fragment, null, e);
                },
                c = ({ children: e, text: t }) => {
                    const n = a.useContext(o.RD),
                        l = a.useMemo(() => i.Z.getTextDirection(t || ""), [t]),
                        c = a.useMemo(() => ({ ...n, direction: l }), [l, n]);
                    return (0, s.hC)(r) ? a.createElement(o.RD.Provider, { value: c }, e) : a.createElement(a.Fragment, null, e);
                };
        },
        20716: (e, t, n) => {
            n.d(t, { vN: () => s, wG: () => r });
            var a = n(202784),
                o = n(379848);
            function i(e) {
                const t = [...e];
                for (let e = t.length - 1; e > 0; e--) {
                    const n = Math.floor(Math.random() * (e + 1)),
                        a = t[e];
                    (t[e] = t[n]), (t[n] = a);
                }
                return t;
            }
            function s(e, t) {
                return a.useMemo(() => (t ? i(e).slice(0, t) : i(e)), [e, t]);
            }
            function r(e) {
                try {
                    if (e && o[e]) {
                        const t = o[e];
                        if (a.isValidElement(a.createElement(t, null))) return t;
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5.0bf93a5a.js.map
