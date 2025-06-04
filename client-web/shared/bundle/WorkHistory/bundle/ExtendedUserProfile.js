"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.WorkHistory~bundle.ExtendedUserProfile"],
    {
        96702: (e, t, n) => {
            n.d(t, { Z: () => Q });
            var r = n(202784),
                l = n(325686),
                o = n(392237),
                i = n(520385),
                a = n(991617),
                s = n(516951),
                c = n(381335),
                u = n(154003),
                d = n(885724);
            const m = r.createElement(d.default, null),
                b = o.default.create((e) => ({ editButton: { height: "auto" } })),
                p = () => {
                    const { blockId: e } = (0, a._L)();
                    return e ? r.createElement(l.Z, { style: b.editButton }, r.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var g = n(301503),
                y = n(989272),
                E = n(524496),
                f = n(925873),
                h = n(731708),
                k = n(757483),
                Z = n(187669),
                _ = n(478414),
                w = n(949626);
            const I = ({ content: e }) => (
                    (0, Z.q)(() => {
                        (0, y.fH)((0, _.yW)(_.Hx, _.K), _.Hx);
                    }),
                    r.createElement(r.Fragment, null, e && e.hasText() && r.createElement(w.Z, { className: _.Hx }, r.createElement(l.Z, { style: v.richText }, r.createElement(E.Z, { contentState: (0, g.convertToRaw)(e) }))))
                ),
                v = o.default.create((e) => {
                    const t = k.Z.hexToCss(e.colors.gray0, 0),
                        n = k.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                C = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [o, i] = r.useState(0),
                        [a, s] = r.useState(0),
                        [c, u] = r.useState(!n),
                        d = r.useRef(null);
                    r.useEffect(() => {
                        d.current && 0 === o && i(d.current.offsetHeight);
                    }, [o]);
                    const m = r.useMemo(() => {
                            const t = f.Z.getContentStateFromRaw(e);
                            return t ? (0, g.convertFromRaw)(t) : null;
                        }, [e]),
                        b = r.useMemo(() => n && o > t, [n, t, o]);
                    return m && m.hasText()
                        ? r.createElement(
                              l.Z,
                              { style: { flex: 1 } },
                              r.createElement(
                                  l.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== a && s(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: b && !c ? { ...v.previewContainer, maxHeight: t } : void 0,
                                  },
                                  r.createElement(I, { content: m }),
                                  b && !c ? r.createElement(l.Z, { style: v.fade }) : null,
                              ),
                              b && r.createElement(h.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: v.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                x = o.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                R = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: o } = (0, a.eF)(),
                        u = e.result?.content,
                        d = r.useMemo(() => o === i.NB.ABOUT && n, [n, o]);
                    return r.createElement(l.Z, { style: { ...x.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(C, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? r.createElement(l.Z, { style: x.row }, r.createElement(p, null), r.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null);
                };
            var T = n(470397),
                S = n(823161),
                F = n(111677),
                P = n.n(F),
                B = n(873302);
            const M = P().a2f2faab,
                D = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: l, startYear: o }) => {
                    const i = (0, B.ZU)(l, o),
                        a = (0, B.ZU)(e, t);
                    return i ? r.createElement(T.Z, null, r.createElement(P().I18NFormatMessage, { $i18n: "bab4ce51", start: M(i), end: n ? "Present" : a ? M(a) : "" }), r.createElement(h.ZP, null, (0, B.HM)(i, a || new Date()))) : null;
                },
                H = o.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                V = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        o = n?.company_profile_results?.result;
                    return n ? r.createElement(l.Z, { style: { ...H.row, ...(t ? { justifyContent: "space-between" } : {}) } }, r.createElement(l.Z, { style: { ...H.row, flex: 1 } }, r.createElement(S.default, { shape: "square", size: "large", uri: o?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(l.Z, { style: H.workInfo }, r.createElement(h.ZP, { size: "subtext1", weight: "bold" }, n.title), r.createElement(T.Z, null, o?.core?.name || n.company_profile_name ? r.createElement(h.ZP, { color: "gray700", size: "subtext1" }, o?.core?.name || n.company_profile_name) : null, n.location_text ? r.createElement(h.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), r.createElement(h.ZP, { color: "gray700", size: "subtext1" }, r.createElement(D, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), r.createElement(C, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? r.createElement(l.Z, { style: H.row }, r.createElement(p, null), r.createElement(c.Z, { onCompleted: s.Z, useIconButton: !0 })) : null) : null;
                },
                L = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const l = r.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case i.Mp.RICHTEXT:
                                return r.createElement(R, { block: e, isEditing: n });
                            case i.Mp.WORK_HISTORY:
                                return r.createElement(V, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? r.createElement(a.Vo.Provider, { value: { ...a.dq, blockId: t, blockQueryId: e.__id } }, l()) : null;
                },
                Y = o.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                Q = ({ blocks: e, isEditing: t }) =>
                    e
                        ? r.createElement(
                              l.Z,
                              null,
                              e.map((n, o) => {
                                  if (!n) return null;
                                  const i = n.rest_id.block_id;
                                  if (!i || !n?.result?.core) return null;
                                  return r.createElement(
                                      l.Z,
                                      { key: i, style: Y.blockGroup },
                                      r.createElement(
                                          l.Z,
                                          {
                                              style: (() => {
                                                  const t = Y.block;
                                                  return 1 === e.length ? t : 0 === o ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : o > 0 && o < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : o === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          r.createElement(L, { block: n, blockId: i, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                l = n(325686),
                o = n(154003),
                i = n(392237),
                a = n(111677),
                s = n.n(a),
                c = n(607127),
                u = n(991617),
                d = n(128586);
            const m = s().h6a724ac,
                b = s().f94aacae,
                p = s().d96cf7ce,
                g = i.default.create((e) => ({ iconButton: { height: "auto" } })),
                y = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: i } = (0, u.eF)(),
                        { blockId: a, blockQueryId: s } = (0, u._L)(),
                        { userId: y, userQueryId: E } = (0, u.se)(),
                        [f, h] = r.useState(!1),
                        k = r.useCallback(() => {
                            h(!1);
                        }, []),
                        Z = r.useCallback(() => {
                            h(!0);
                        }, []);
                    return r.createElement(r.Fragment, null, t ? r.createElement(l.Z, { style: g.iconButton }, r.createElement(o.ZP, { disabled: !a || !y, icon: r.createElement(c.default, null), onClick: Z, size: "xSmall", type: "destructiveText" })) : r.createElement(o.ZP, { disabled: !a || !y, onClick: Z, size: "large", type: "destructiveText" }, p), f && a && y ? r.createElement(d.Z, { blockId: a, headline: m, onClose: k, onCompleted: e, queryId: n > 1 ? s : i || E, subtext: b, userId: y }) : null);
                };
        },
        485822: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var r = n(202784),
                l = n(325686),
                o = n(277660),
                i = n.n(o),
                a = n(107267),
                s = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                b = n.n(m),
                p = n(982866),
                g = n(952793),
                y = n(462166),
                E = n(873302),
                f = n(96702),
                h = n(991617),
                k = n(732368);
            const Z = b().b721eb38,
                _ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: o } = (0, h.eF)(),
                        { userId: i, userQueryId: m } = (0, h.se)(),
                        b = (0, a.useHistory)(),
                        _ = r.useCallback(() => {
                            b.push("/settings/bio/new/about");
                        }, [b]),
                        I = (0, g.hC)("xprofile_section_visibility_enabled"),
                        v = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const C = i === m,
                        x = (0, E.Kh)(e?.slice(), y.GL);
                    return r.createElement(l.Z, { style: w.root }, r.createElement(l.Z, { style: w.header }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, Z), I && C && r.createElement(u.ZP, { hoverLabel: { label: (0, k.Q)(o) } }, r.createElement(k.K3, { style: w.visibilityIcon, visibility: o })), I && t && r.createElement(k.ZP, { currentVisibility: o, sectionId: n })), r.createElement(l.Z, null, e?.length ? r.createElement(f.Z, { blocks: x, isEditing: t }) : r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: v, onClick: _, style: w.container }, r.createElement(u.ZP, null, "Tell us about yourself"), r.createElement(p.default, null)) : null)));
                },
                w = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = i()(y.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(_, { blocks: l, isEditing: e }) : null;
                },
                v = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(_, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var r = n(202784),
                l = n(325686),
                o = n(277660),
                i = n.n(o),
                a = n(107267),
                s = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(111677),
                b = n.n(m),
                p = n(982866),
                g = n(952793),
                y = n(462166),
                E = n(873302),
                f = n(96702),
                h = n(991617),
                k = n(732368);
            const Z = b().a622dfcc,
                _ = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: o } = (0, h.eF)(),
                        { userId: i, userQueryId: m } = (0, h.se)(),
                        b = (0, a.useHistory)(),
                        _ = r.useCallback(() => {
                            n ? b.push(`/settings/bio/new/${n}/work_experience`) : b.push("/settings/bio/new/work_experience");
                        }, [b, n]),
                        I = (0, g.hC)("xprofile_section_visibility_enabled"),
                        v = s.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const C = i === m,
                        x = (0, E.Kh)(e?.slice(), y.lw),
                        R = (0, E.s1)(x);
                    return r.createElement(l.Z, { style: w.root }, r.createElement(l.Z, { style: w.headerSection }, r.createElement(u.ZP, { size: "title4", weight: "bold" }, Z), I && C && r.createElement(u.ZP, { hoverLabel: { label: (0, k.Q)(o) } }, r.createElement(k.K3, { style: w.visibilityIcon, visibility: o })), I && t && r.createElement(k.ZP, { currentVisibility: o, sectionId: n })), r.createElement(l.Z, { style: w.blocksList }, R && R.length > 0 ? r.createElement(f.Z, { blocks: R, isEditing: t }) : null, r.createElement(r.Fragment, null, t ? r.createElement(d.Z, { interactiveStyles: v, onClick: _, style: w.container }, r.createElement(u.ZP, null, "Add experience"), r.createElement(p.default, null)) : null)));
                },
                w = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                I = ({ isEditing: e = !1, section: t }) => {
                    const n = i()(y.C_, t),
                        l = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? r.createElement(_, { blocks: l, isEditing: e }) : null;
                },
                v = ({ isEditing: e = !1, section: t }) => (t && t.id ? r.createElement(I, { isEditing: e, section: t }) : r.createElement(_, { isEditing: e }));
        },
        732368: (e, t, n) => {
            n.d(t, { K3: () => w, ZP: () => x, Q: () => C });
            var r,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: (r = [
                            { defaultValue: null, kind: "LocalArgument", name: "sectionId" },
                            { defaultValue: null, kind: "LocalArgument", name: "visibility" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "VisibilityDropdown_updateSectionVisibilityMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "visibility", variableName: "visibility" },
                                ],
                                kind: "ScalarField",
                                name: "update_expanded_profile_section_visibility",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: l },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            o.hash = "8915833d692c94a47b0fcb2939731579";
            const i = o;
            var a = n(202784),
                s = n(400752),
                c = n(325686),
                u = (n(585488), n(351743)),
                d = n.n(u),
                m = n(731708),
                b = n(797553),
                p = n(143670),
                g = n(392237),
                y = n(111677),
                E = n.n(y),
                f = n(14284),
                h = n(468670),
                k = n(520385),
                Z = n(991617);
            const _ = i,
                w = ({ style: e, visibility: t }) => (t === k.pR.PUBLIC ? a.createElement(f.default, { style: e }) : t === k.pR.PRIVATE ? a.createElement(h.default, { style: e }) : void a.Fragment),
                I = E().baffe39a,
                v = E().je07e266,
                C = (e) => (e === k.pR.PUBLIC ? I : e === k.pR.PRIVATE ? v : ""),
                x = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, s.b9)(Z.j7),
                        [r, l] = a.useState(e ?? k.pR.PUBLIC),
                        [o, i] = a.useState(!1),
                        [u] = d()(_),
                        g = a.useCallback(
                            (e) => {
                                t &&
                                    (l(e),
                                    i(!1),
                                    u({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            n(!0);
                                        },
                                    }));
                            },
                            [u, t, n],
                        );
                    return a.createElement(c.Z, null, a.createElement(c.Z, { onClick: () => i(!0), style: R.target }, a.createElement(w, { style: R.icon, visibility: r }), a.createElement(m.ZP, { style: R.targetText }, C(r))), o && a.createElement(b.default, { isFixed: !0, onDismiss: () => i(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, a.createElement(p.Z, { Icon: f.default, actionText: E().baffe39a, onClick: () => g(k.pR.PUBLIC) }), a.createElement(p.Z, { Icon: h.default, actionText: E().je07e266, onClick: () => g(k.pR.PRIVATE) })));
                },
                R = g.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => i, Vo: () => m, Y_: () => s, _L: () => b, bQ: () => c, dq: () => d, eF: () => u, j7: () => p, se: () => a, w: () => o });
            var r = n(202784),
                l = n(565058);
            const o = { userId: null, userQueryId: null },
                i = r.createContext(o),
                a = () => r.useContext(i),
                s = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = r.createContext(s),
                u = () => r.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = r.createContext(d),
                b = () => r.useContext(m),
                p = (0, l.cn)(!1);
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => p, Kh: () => m, ZU: () => d, hW: () => y, s1: () => b, uR: () => g });
            var r = n(990242),
                l = n.n(r),
                o = n(111677),
                i = n.n(o),
                a = n(520385),
                s = n(462166);
            const c = i().eb7710f1,
                u = i().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  r = l()(s.wJ, n),
                                  o = l()(t, r.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...r.result, content: o } };
                          })
                        : [];
                },
                b = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                r = t.result?.content,
                                l = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0),
                                o = (r?.active_role ? new Date() : d(r?.end_month, r?.end_year)) ?? new Date(0);
                            if (l.getFullYear() !== o.getFullYear()) return o.getFullYear() - l.getFullYear();
                            if (l.getMonth() !== o.getMonth()) return o.getMonth() - l.getMonth();
                            const i = d(n?.start_month, n?.start_year) ?? new Date(0),
                                a = d(r?.start_month, r?.start_year) ?? new Date(0);
                            return i.getFullYear() !== a.getFullYear() ? a.getFullYear() - i.getFullYear() : a.getMonth() - i.getMonth();
                        });
                },
                p = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        r = t.getFullYear() - e.getFullYear();
                    return n < 0 && (r--, (n += 12)), r && n ? `${c({ years: r })} ${u({ months: n })}` : r ? c({ years: r }) : n ? u({ months: n }) : "";
                },
                g = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === a.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === a.Mp.RICHTEXT)) : void 0),
                y = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => k });
            n(136728);
            var r = n(202784),
                l = n(301503),
                o = n(325686),
                i = n(595088),
                a = n(516951),
                s = n(731708),
                c = n(779802),
                u = n(537392),
                d = n(989272),
                m = n(925873),
                b = n(202253),
                p = n(786475),
                g = n(392237),
                y = n(135904);
            const E = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                f = (0, i.Z)(E).reduce((e, [t, n]) => e.set(t, n), l.DefaultDraftBlockRenderMap);
            let h = !1;
            const k = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        h || (d.fH(y.c, y.n), (h = !0));
                    }, []);
                    const g = [(0, b.ez)(i, s), b.aF, b.RU];
                    e.disable_entityLinkDecorator || g.push((0, b.NA)(i, s));
                    const E = m.Z.initEditorState(n, { decorators: g });
                    let k = a.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(u.ZP, null, ({ containerWidth: e }) => r.createElement(o.Z, { style: Z.fontFamily }, r.createElement(l.Editor, { blockRenderMap: f, blockRendererFn: k, blockStyleFn: (0, c.su)(p.Z.isNarrowScreenWidth(e)), editorState: E, onChange: a.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                Z = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.WorkHistory~bundle.ExtendedUserProfile.284717aa.js.map
