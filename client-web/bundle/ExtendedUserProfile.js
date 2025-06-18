"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile", "icons/IconItalic-js", "icons/IconNumberedList-js"],
    {
        163015: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n,
                l,
                a = {
                    fragment: {
                        argumentDefinitions: (n = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: l },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            a.hash = "8915833d692c94a47b0fcb2939731579";
            const s = a;
        },
        96702: (e, t, r) => {
            r.d(t, { Z: () => L });
            var n = r(202784),
                l = r(325686),
                a = r(392237),
                s = r(520385),
                o = r(991617),
                i = r(516951),
                c = r(381335),
                d = r(154003),
                u = r(885724);
            const m = n.createElement(u.default, null),
                p = a.default.create((e) => ({ editButton: { height: "auto" } })),
                b = () => {
                    const { blockId: e } = (0, o._L)();
                    return e ? n.createElement(l.Z, { style: p.editButton }, n.createElement(d.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var E = r(301503),
                f = r(989272),
                g = r(524496),
                h = r(925873),
                y = r(731708),
                Z = r(757483),
                _ = r(187669),
                k = r(478414),
                v = r(949626);
            const x = ({ content: e }) => (
                    (0, _.q)(() => {
                        (0, f.fH)((0, k.yW)(k.Hx, k.K), k.Hx);
                    }),
                    n.createElement(n.Fragment, null, e && e.hasText() && n.createElement(v.Z, { className: k.Hx }, n.createElement(l.Z, { style: w.richText }, n.createElement(g.Z, { contentState: (0, E.convertToRaw)(e) }))))
                ),
                w = a.default.create((e) => {
                    const t = Z.Z.hexToCss(e.colors.gray0, 0),
                        r = Z.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${r})` } };
                }),
                I = ({ content: e, previewHeight: t, shouldTruncate: r = !0 }) => {
                    const [a, s] = n.useState(0),
                        [o, i] = n.useState(0),
                        [c, d] = n.useState(!r),
                        u = n.useRef(null);
                    n.useEffect(() => {
                        u.current && 0 === a && s(u.current.offsetHeight);
                    }, [a]);
                    const m = n.useMemo(() => {
                            const t = h.Z.getContentStateFromRaw(e);
                            return t ? (0, E.convertFromRaw)(t) : null;
                        }, [e]),
                        p = n.useMemo(() => r && a > t, [r, t, a]);
                    return m && m.hasText()
                        ? n.createElement(
                              l.Z,
                              { style: { flex: 1 } },
                              n.createElement(
                                  l.Z,
                                  {
                                      onLayout: () => {
                                          u.current && u.current.offsetHeight !== o && i(u.current.offsetHeight);
                                      },
                                      ref: u,
                                      style: p && !c ? { ...w.previewContainer, maxHeight: t } : void 0,
                                  },
                                  n.createElement(x, { content: m }),
                                  p && !c ? n.createElement(l.Z, { style: w.fade }) : null,
                              ),
                              p && n.createElement(y.ZP, { color: "link", onPress: () => d(!c), size: "subtext1", style: w.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                C = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                N = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: r, sectionType: a } = (0, o.eF)(),
                        d = e.result?.content,
                        u = n.useMemo(() => a === s.NB.ABOUT && r, [r, a]);
                    return n.createElement(l.Z, { style: { ...C.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(I, { content: d?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: u }), t ? n.createElement(l.Z, { style: C.row }, n.createElement(b, null), n.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null);
                };
            var S = r(470397),
                P = r(823161),
                R = r(111677),
                T = r.n(R),
                B = r(873302);
            const F = T().a2f2faab,
                H = ({ endMonth: e, endYear: t, isCurrent: r, startMonth: l, startYear: a }) => {
                    const s = (0, B.ZU)(l, a),
                        o = (0, B.ZU)(e, t);
                    return s ? n.createElement(S.Z, null, n.createElement(T().I18NFormatMessage, { $i18n: "bab4ce51", start: F(s), end: r ? "Present" : o ? F(o) : "" }), n.createElement(y.ZP, null, (0, B.HM)(s, o || new Date()))) : null;
                },
                M = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                D = ({ block: e, isEditing: t }) => {
                    const r = e?.result?.content,
                        a = r?.company_profile_results?.result;
                    return r ? n.createElement(l.Z, { style: { ...M.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(l.Z, { style: { ...M.row, flex: 1 } }, n.createElement(P.default, { shape: "square", size: "large", uri: a?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(l.Z, { style: M.workInfo }, n.createElement(y.ZP, { size: "subtext1", weight: "bold" }, r.title), n.createElement(S.Z, null, a?.core?.name || r.company_profile_name ? n.createElement(y.ZP, { color: "gray700", size: "subtext1" }, a?.core?.name || r.company_profile_name) : null, r.location_text ? n.createElement(y.ZP, { color: "gray700", size: "subtext1" }, r.location_text) : null), n.createElement(y.ZP, { color: "gray700", size: "subtext1" }, n.createElement(H, { endMonth: r.end_month, endYear: r.end_year, isCurrent: !!r.active_role, startMonth: r.start_month, startYear: r.start_year })), n.createElement(I, { content: r.description, previewHeight: 120, shouldTruncate: !0 }))), t ? n.createElement(l.Z, { style: M.row }, n.createElement(b, null), n.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null) : null;
                },
                V = ({ block: e, blockId: t, isEditing: r = !1 }) => {
                    const l = n.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case s.Mp.RICHTEXT:
                                return n.createElement(N, { block: e, isEditing: r });
                            case s.Mp.WORK_HISTORY:
                                return n.createElement(D, { block: e, isEditing: r });
                            default:
                                return null;
                        }
                    }, [e, r]);
                    return e ? n.createElement(o.Vo.Provider, { value: { ...o.dq, blockId: t, blockQueryId: e.__id } }, l()) : null;
                },
                U = a.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                L = ({ blocks: e, isEditing: t }) =>
                    e
                        ? n.createElement(
                              l.Z,
                              null,
                              e.map((r, a) => {
                                  if (!r) return null;
                                  const s = r.rest_id.block_id;
                                  if (!s || !r?.result?.core) return null;
                                  return n.createElement(
                                      l.Z,
                                      { key: s, style: U.blockGroup },
                                      n.createElement(
                                          l.Z,
                                          {
                                              style: (() => {
                                                  const t = U.block;
                                                  return 1 === e.length ? t : 0 === a ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a > 0 && a < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          n.createElement(V, { block: r, blockId: s, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        381335: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                l = r(325686),
                a = r(154003),
                s = r(392237),
                o = r(111677),
                i = r.n(o),
                c = r(607127),
                d = r(991617),
                u = r(512547);
            const m = i().h6a724ac,
                p = i().f94aacae,
                b = i().d96cf7ce,
                E = s.default.create((e) => ({ iconButton: { height: "auto" } })),
                f = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: r, sectionQueryId: s } = (0, d.eF)(),
                        { blockId: o, blockQueryId: i } = (0, d._L)(),
                        { userId: f, userQueryId: g } = (0, d.se)(),
                        [h, y] = n.useState(!1),
                        Z = n.useCallback(() => {
                            y(!1);
                        }, []),
                        _ = n.useCallback(() => {
                            y(!0);
                        }, []);
                    return n.createElement(n.Fragment, null, t ? n.createElement(l.Z, { style: E.iconButton }, n.createElement(a.ZP, { disabled: !o || !f, icon: n.createElement(c.default, null), onClick: _, size: "xSmall", type: "destructiveText" })) : n.createElement(a.ZP, { disabled: !o || !f, onClick: _, size: "large", type: "destructiveText" }, b), h && o && f ? n.createElement(u.Z, { blockId: o, headline: m, onClose: Z, onCompleted: e, queryId: r > 1 ? i : s || g, subtext: p, userId: f }) : null);
                };
        },
        485822: (e, t, r) => {
            r.d(t, { Z: () => w });
            r(136728);
            var n = r(202784),
                l = r(325686),
                a = r(277660),
                s = r.n(a),
                o = r(107267),
                i = r(58881),
                c = r(392237),
                d = r(731708),
                u = r(530732),
                m = r(111677),
                p = r.n(m),
                b = r(982866),
                E = r(952793),
                f = r(462166),
                g = r(873302),
                h = r(96702),
                y = r(991617),
                Z = r(736993);
            const _ = p().b721eb38,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: r, sectionVisibility: a } = (0, y.eF)(),
                        { userId: s, userQueryId: m } = (0, y.se)(),
                        p = (0, o.useHistory)(),
                        k = n.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        x = (0, E.hC)("xprofile_section_visibility_enabled"),
                        w = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        C = (0, g.Kh)(e?.slice(), f.GL);
                    return n.createElement(l.Z, { style: v.root }, n.createElement(l.Z, { style: v.header }, n.createElement(d.ZP, { size: "title4", weight: "bold" }, _), x && I && n.createElement(d.ZP, { hoverLabel: { label: (0, Z.Q)(a) } }, n.createElement(Z.K3, { style: v.visibilityIcon, visibility: a })), x && t && n.createElement(Z.ZP, { currentVisibility: a, sectionId: r })), n.createElement(l.Z, null, e?.length ? n.createElement(h.Z, { blocks: C, isEditing: t }) : n.createElement(n.Fragment, null, t ? n.createElement(u.Z, { interactiveStyles: w, onClick: k, style: v.container }, n.createElement(d.ZP, null, "Tell us about yourself"), n.createElement(b.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                x = ({ isEditing: e = !1, section: t }) => {
                    const r = s()(f.C_, t),
                        l = r?.result?.profile_blocks?.items_results;
                    return r?.result?.id ? n.createElement(k, { blocks: l, isEditing: e }) : null;
                },
                w = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(x, { isEditing: e, section: t }) : n.createElement(k, { isEditing: e }));
        },
        164349: (e, t, r) => {
            r.d(t, { Z: () => w });
            r(136728);
            var n = r(202784),
                l = r(325686),
                a = r(277660),
                s = r.n(a),
                o = r(107267),
                i = r(58881),
                c = r(392237),
                d = r(731708),
                u = r(530732),
                m = r(111677),
                p = r.n(m),
                b = r(982866),
                E = r(952793),
                f = r(462166),
                g = r(873302),
                h = r(96702),
                y = r(991617),
                Z = r(736993);
            const _ = p().a622dfcc,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: r, sectionVisibility: a } = (0, y.eF)(),
                        { userId: s, userQueryId: m } = (0, y.se)(),
                        p = (0, o.useHistory)(),
                        k = n.useCallback(() => {
                            r ? p.push(`/settings/bio/new/${r}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, r]),
                        x = (0, E.hC)("xprofile_section_visibility_enabled"),
                        w = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        C = (0, g.Kh)(e?.slice(), f.lw),
                        N = (0, g.s1)(C);
                    return n.createElement(l.Z, { style: v.root }, n.createElement(l.Z, { style: v.headerSection }, n.createElement(d.ZP, { size: "title4", weight: "bold" }, _), x && I && n.createElement(d.ZP, { hoverLabel: { label: (0, Z.Q)(a) } }, n.createElement(Z.K3, { style: v.visibilityIcon, visibility: a })), x && t && n.createElement(Z.ZP, { currentVisibility: a, sectionId: r })), n.createElement(l.Z, { style: v.blocksList }, N && N.length > 0 ? n.createElement(h.Z, { blocks: N, isEditing: t }) : null, n.createElement(n.Fragment, null, t ? n.createElement(u.Z, { interactiveStyles: w, onClick: k, style: v.container }, n.createElement(d.ZP, null, "Add experience"), n.createElement(b.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                x = ({ isEditing: e = !1, section: t }) => {
                    const r = s()(f.C_, t),
                        l = r?.result?.profile_blocks?.items_results;
                    return r?.result?.id ? n.createElement(k, { blocks: l, isEditing: e }) : null;
                },
                w = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(x, { isEditing: e, section: t }) : n.createElement(k, { isEditing: e }));
        },
        736993: (e, t, r) => {
            r.d(t, { K3: () => Z, Q: () => v, ZP: () => x });
            var n = r(163015),
                l = r(202784),
                a = r(400752),
                s = r(325686),
                o = (r(585488), r(351743)),
                i = r.n(o),
                c = r(731708),
                d = r(797553),
                u = r(143670),
                m = r(392237),
                p = r(111677),
                b = r.n(p),
                E = r(14284),
                f = r(468670),
                g = r(520385),
                h = r(991617);
            const y = n.Z,
                Z = ({ style: e, visibility: t }) => (t === g.pR.PUBLIC ? l.createElement(E.default, { style: e }) : t === g.pR.PRIVATE ? l.createElement(f.default, { style: e }) : void l.Fragment),
                _ = b().baffe39a,
                k = b().je07e266,
                v = (e) => (e === g.pR.PUBLIC ? _ : e === g.pR.PRIVATE ? k : ""),
                x = ({ currentVisibility: e, sectionId: t }) => {
                    const r = (0, a.b9)(h.j7),
                        [n, o] = l.useState(e ?? g.pR.PUBLIC),
                        [m, p] = l.useState(!1),
                        [_] = i()(y),
                        k = l.useCallback(
                            (e) => {
                                t &&
                                    (o(e),
                                    p(!1),
                                    _({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            r(!0);
                                        },
                                    }));
                            },
                            [_, t, r],
                        );
                    return l.createElement(s.Z, null, l.createElement(s.Z, { onClick: () => p(!0), style: w.target }, l.createElement(Z, { style: w.icon, visibility: n }), l.createElement(c.ZP, { style: w.targetText }, v(n))), m && l.createElement(d.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, l.createElement(u.Z, { Icon: E.default, actionText: b().baffe39a, onClick: () => k(g.pR.PUBLIC) }), l.createElement(u.Z, { Icon: f.default, actionText: b().je07e266, onClick: () => k(g.pR.PRIVATE) })));
                },
                w = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, r) => {
            r.d(t, { Fo: () => s, Vo: () => m, Y_: () => i, _L: () => p, bQ: () => c, dq: () => u, eF: () => d, j7: () => b, se: () => o, w: () => a });
            var n = r(202784),
                l = r(565058);
            const a = { userId: null, userQueryId: null },
                s = n.createContext(a),
                o = () => n.useContext(s),
                i = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = n.createContext(i),
                d = () => n.useContext(c),
                u = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = n.createContext(u),
                p = () => n.useContext(m),
                b = (0, l.cn)(!1);
        },
        873302: (e, t, r) => {
            r.d(t, { HM: () => b, Kh: () => m, ZU: () => u, hW: () => f, s1: () => p, uR: () => E });
            var n = r(990242),
                l = r.n(n),
                a = r(111677),
                s = r.n(a),
                o = r(520385),
                i = r(462166);
            const c = s().eb7710f1,
                d = s().bfc38bb5,
                u = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const r = e?.filter((e) => e);
                    return r
                        ? r.map((e) => {
                              const r = { ...e },
                                  n = l()(i.wJ, r),
                                  a = l()(t, n.result?.content);
                              return { __id: r.__id, id: r.id, rest_id: r.rest_id, result: { ...n.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const r = e.result?.content,
                                n = t.result?.content,
                                l = (r?.active_role ? new Date() : u(r?.end_month, r?.end_year)) ?? new Date(0),
                                a = (n?.active_role ? new Date() : u(n?.end_month, n?.end_year)) ?? new Date(0);
                            if (l.getFullYear() !== a.getFullYear()) return a.getFullYear() - l.getFullYear();
                            if (l.getMonth() !== a.getMonth()) return a.getMonth() - l.getMonth();
                            const s = u(r?.start_month, r?.start_year) ?? new Date(0),
                                o = u(n?.start_month, n?.start_year) ?? new Date(0);
                            return s.getFullYear() !== o.getFullYear() ? o.getFullYear() - s.getFullYear() : o.getMonth() - s.getMonth();
                        });
                },
                b = (e, t) => {
                    let r = t.getMonth() - e.getMonth() + 1,
                        n = t.getFullYear() - e.getFullYear();
                    return r < 0 && (n--, (r += 12)), n && r ? `${c({ years: n })} ${d({ months: r })}` : n ? c({ years: n }) : r ? d({ months: r }) : "";
                },
                E = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === o.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === o.Mp.RICHTEXT)) : void 0),
                f = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        990229: (e, t, r) => {
            r.d(t, { Z: () => y });
            r(136728);
            var n = r(202784),
                l = r(107267),
                a = r(811176),
                s = r(154003),
                o = r(111677),
                i = r.n(o),
                c = r(149170),
                d = r(415506),
                u = r(443781),
                m = r(395067),
                p = r(725516);
            const b = i().j7bb1a43,
                E = i().h63a5c3c,
                f = n.createElement(c.default, null),
                g = ({ onClose: e, user: t }) => {
                    const r = (0, p.z)(),
                        s = (0, l.useHistory)(),
                        { featureSwitches: o } = (0, u.QZ)(),
                        i = () => ({
                            Icon: d.default,
                            text: b({ screenName: t.screen_name }),
                            onClick: () => {
                                e(),
                                    (() => {
                                        const e = m.C2.User;
                                        if ((0, m.Yw)(o, e)) {
                                            const n = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: t.id_str, scribeNamespace: r.contextualScribeNamespace });
                                            s.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } });
                                        } else s.push({ pathname: `/i/report/user/${t.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: r.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return n.createElement(a.Z, { items: [i()], onCloseRequested: e });
                },
                h = ({ user: e }) => {
                    const t = n.useCallback((t) => n.createElement(g, { onClose: t, user: e }), [e]),
                        r = n.useMemo(() => ({ label: E }), []);
                    return n.createElement(s.ZP, { "aria-label": E, hoverLabel: r, icon: f, renderMenu: t, type: "primaryOutlined" });
                },
                y = n.memo(h);
        },
        695431: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(71620),
                l = r(668214),
                a = r(390387),
                s = r(919022);
            const o = (e, t) => t.match.params.screenName || "",
                i = (e, t) => s.ZP.selectIsUserNotFound(e, o(0, t)),
                c = (e, t) => s.ZP.selectIsUserSuspended(e, o(0, t)),
                d = (e, t) => s.ZP.selectUserSuspendMessage(e, o(0, t)),
                u = (e, t) => s.ZP.selectByScreenName(e, o(0, t)),
                m = (0, l.Z)()
                    .propsFromState(() => ({ isNotFound: i, isSuspended: c, suspendMessage: d, screenName: o, user: u, viewerUserId: a._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, n.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: s.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, t, r) => {
            r.r(t), r.d(t, { default: () => L });
            var n = r(807896),
                l = r(202784),
                a = r(107267),
                s = r(154003),
                o = r(718e3),
                i = r(785813),
                c = r(825495),
                d = r(252021),
                u = r(736063),
                m = r(666670),
                p = r(72130),
                b = r(238225),
                E = r(535338),
                f = r(416699),
                g = r(484163),
                h = r(972796),
                y = r(21437),
                Z = r(220544),
                _ = r(695431),
                k = r(990229),
                v = (r(571372), r(301503)),
                x = r(325686),
                w = r(277660),
                I = r.n(w),
                C = r(989272),
                N = r(524496),
                S = r(392237),
                P = r(187669),
                R = r(949626),
                T = r(478414),
                B = r(520385);
            const F = ({ profileBlocksRef: e }) => {
                    const t = I()(b.m1, e),
                        r = t?.items?.find((e) => e?.block_type === B.Mp.RICHTEXT),
                        n = r?.data?.value || "",
                        a = l.useMemo(() => {
                            try {
                                const e = JSON.parse(n);
                                if (!e.entityMap || !e.blocks) throw new Error("Malformed RawDraftContentState");
                                return e;
                            } catch (e) {}
                        }, [n]);
                    return (
                        (0, P.q)(() => {
                            (0, C.fH)((0, T.yW)(T.Hx, T.K), T.Hx);
                        }),
                        l.createElement(x.Z, { style: H.root }, a && (0, v.convertFromRaw)(a).hasText() ? l.createElement(R.Z, { className: T.Hx }, l.createElement(x.Z, { style: H.richText }, l.createElement(N.Z, { contentState: a, paragraphFontSizeOverride: T.K.paragraphFontSize }))) : null)
                    );
                },
                H = S.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                M = l.memo(F),
                D = ({ analytics: e, hasProfileBlocks: t, profileBlocksRef: r, screenName: n, user: u, viewerUserId: m }) => {
                    const b = (0, a.useHistory)();
                    l.useEffect(() => {
                        u?.id_str && e.scribe({ ...(0, p.Zi)(u?.id_str, { version: 1 }) });
                    }, [e, u?.id_str]);
                    const E = l.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return l.createElement(d.Z, { backLocation: `/${n}`, history: b, primaryContent: u ? (t ? l.createElement(M, { profileBlocksRef: r }) : l.createElement(f.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: n })) : null, rightControl: u?.id_str === m ? l.createElement(s.ZP, { link: "/settings/bio", onClick: E, size: "xSmall", type: "primaryOutlined" }, "Edit") : u ? l.createElement(k.Z, { user: u }) : null, sidebarContent: l.createElement(o.Z, null), subtitle: `@${n}`, title: (0, i.Z)(u), titleIconCell: (0, c.Z)(u) });
                },
                V = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: r } = (0, E.p)(b.kI, { screenName: t }),
                        a = r?.result?.profile_blocks,
                        s = !!r?.result?.has_profile_blocks;
                    return t && a ? l.createElement(D, (0, n.Z)({ hasProfileBlocks: s, profileBlocksRef: a }, e)) : null;
                },
                U = { context: "EXTENDED_USER_PROFILE" },
                L = (0, _.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: r, isNotFound: n, isSuspended: a, screenName: s, suspendMessage: o, user: i, viewerUserId: c } = e;
                    return (
                        l.useEffect(() => {
                            s && r(s).catch(t(m.F));
                        }, [t, r, s]),
                        s && i ? (a ? l.createElement(Z.i, { screenName: s, suspendMessage: o }) : i.blocked_by ? l.createElement(h.T, { screenName: s }) : !i.protected || (i && c === i.id_str) || i.following ? (n ? l.createElement(g.Y, { screenName: s }) : l.createElement(u.H, { errorConfig: U }, l.createElement(V, e))) : l.createElement(y.X, { screenName: s })) : null
                    );
                });
        },
        806208: (e, t, r) => {
            r.r(t), r.d(t, { default: () => M });
            var n = r(807896),
                l = r(202784),
                a = r(325686),
                s = r(277660),
                o = r.n(s),
                i = r(154003),
                c = r(392237),
                d = r(718e3),
                u = r(991617),
                m = r(785813),
                p = r(825495),
                b = r(485822),
                E = r(164349),
                f = r(252021),
                g = r(736063),
                h = r(666670),
                y = r(72130),
                Z = r(520385),
                _ = r(462166),
                k = r(873302),
                v = r(535338),
                x = r(416699),
                w = r(484163),
                I = r(972796),
                C = r(21437),
                N = r(220544),
                S = r(695431),
                P = r(990229);
            const R = ({ analytics: e, expandedProfile: t, hasProfileBlocks: r, history: n, screenName: s, user: o, viewerUserId: c }) => {
                    l.useEffect(() => {
                        o?.id_str && e.scribe({ ...(0, y.Zi)(o?.id_str, { version: 2 }) });
                    }, [e, o?.id_str]);
                    const g = t?.result?.profile_sections?.items_results,
                        h = (0, k.uR)(g, Z.NB.ABOUT),
                        _ = (0, k.uR)(g, Z.NB.WORK_EXPERIENCE),
                        v = (0, k.hW)(h),
                        w = (0, k.hW)(_),
                        I = l.useCallback(() => {
                            e.scribe({ ...(0, y.he)({ version: 2 }) });
                        }, [e]);
                    return l.createElement(f.Z, { backLocation: `/${s}`, history: n, primaryContent: o ? (r ? l.createElement(a.Z, { style: T.root }, l.createElement(u.Fo.Provider, { value: { userId: c, userQueryId: o.id_str } }, l.createElement(u.bQ.Provider, { value: { ...u.Y_, hasAboutSection: v, hasWorkHistorySection: w, sectionId: h?.rest_id?.section_id, sectionType: Z.NB.ABOUT, blockCount: h?.result?.profile_blocks?.total_count || 0, sectionQueryId: h?.id, sectionVisibility: h?.result?.core?.visibility } }, l.createElement(b.Z, { isEditing: !1, section: h })), l.createElement(u.bQ.Provider, { value: { ...u.Y_, hasAboutSection: v, hasWorkHistorySection: w, sectionId: _?.rest_id?.section_id, sectionType: Z.NB.WORK_EXPERIENCE, blockCount: _?.result?.profile_blocks?.total_count || 0, sectionQueryId: _?.id, sectionVisibility: _?.result?.core?.visibility } }, l.createElement(E.Z, { isEditing: !1, section: _ })))) : l.createElement(x.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: s })) : null, rightControl: o?.id_str === c ? l.createElement(i.ZP, { link: "/settings/bio", onClick: I, size: "xSmall", type: "primaryOutlined" }, "Edit") : o ? l.createElement(P.Z, { user: o }) : null, sidebarContent: l.createElement(d.Z, null), subtitle: `@${s}`, title: (0, m.Z)(o), titleIconCell: (0, p.Z)(o) });
                },
                T = c.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                B = ({ expandedProfile: e, hasProfileBlocks: t, ...r }) => {
                    const a = o()(_.cH, e);
                    return a ? l.createElement(R, (0, n.Z)({ expandedProfile: a, hasProfileBlocks: t }, r)) : null;
                },
                F = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: r } = (0, v.p)(_.Sp, { screenName: t }),
                        a = !!r?.result?.has_profile_blocks,
                        s = r?.result?.expanded_profile_results;
                    return t && s ? l.createElement(B, (0, n.Z)({ expandedProfile: s, hasProfileBlocks: a }, e)) : null;
                },
                H = { context: "EXTENDED_USER_PROFILE_V2" },
                M = (0, S.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: r, isNotFound: n, isSuspended: a, screenName: s, suspendMessage: o, user: i, viewerUserId: c } = e;
                    return (
                        l.useEffect(() => {
                            s && r(s).catch(t(h.F));
                        }, [t, r, s]),
                        s && i ? (a ? l.createElement(N.i, { screenName: s, suspendMessage: o }) : i.blocked_by ? l.createElement(I.T, { screenName: s }) : !i.protected || (i && c === i.id_str) || i.following ? (n ? l.createElement(w.Y, { screenName: s }) : l.createElement(g.H, { errorConfig: H }, l.createElement(F, e))) : l.createElement(C.X, { screenName: s })) : null
                    );
                });
        },
        416699: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(807896),
                l = r(202784),
                a = r(457311),
                s = r(392237),
                o = r(668214),
                i = r(919022);
            const c = (e, t) => !!t.screenName && i.ZP.selectIsUserSuspended(e, t.screenName),
                d = (e, t) => {
                    const r = t.screenName ? i.ZP.selectByScreenName(e, t.screenName) : void 0;
                    return r?.blocking;
                },
                u = (0, o.Z)().propsFromState(() => ({ isBlocking: d, isSuspended: c })),
                m = (e) => {
                    const { isBlocking: t, isSuspended: r, screenName: s, ...o } = e;
                    return l.createElement(l.Fragment, null, null, l.createElement(a.Z, (0, n.Z)({}, o, { style: [p.root, p.verticalPadding] })));
                },
                p = s.default.create((e) => ({ root: { backgroundColor: s.default.theme.colors.cellBackground, paddingHorizontal: s.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: s.default.theme.spaces.space40 } })),
                b = u(l.memo(m));
        },
        484163: (e, t, r) => {
            r.d(t, { Y: () => c, Z: () => d });
            var n = r(202784),
                l = r(111677),
                a = r.n(l),
                s = r(416699);
            const o = a().c9a1cb5e,
                i = a().e7b201de,
                c = (e) => {
                    const { screenName: t } = e;
                    return n.createElement(s.Z, { header: o, message: i, screenName: t });
                },
                d = n.memo(c);
        },
        972796: (e, t, r) => {
            r.d(t, { T: () => u, Z: () => m });
            var n = r(202784),
                l = r(688715),
                a = r(731708),
                s = r(111677),
                o = r.n(s),
                i = r(416699);
            const c = o().ica87fde,
                d = (0, l.ju)("https://support.x.com/articles/20172060"),
                u = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(o().I18NFormatMessage, { $i18n: "e6264621", screenName: t }, n.createElement(a.ZP, { link: d }, o().c7ec6faf)), [t]);
                    return n.createElement(i.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(u);
        },
        21437: (e, t, r) => {
            r.d(t, { X: () => u, Z: () => m });
            var n = r(202784),
                l = r(688715),
                a = r(731708),
                s = r(111677),
                o = r.n(s),
                i = r(416699);
            const c = o().bd598c70,
                d = (0, l.ju)("https://support.x.com/articles/14016"),
                u = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(o().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, n.createElement(a.ZP, { link: d }, o().e617164b)), [t]);
                    return n.createElement(i.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(u);
        },
        220544: (e, t, r) => {
            r.d(t, { Z: () => m, i: () => u });
            var n = r(202784),
                l = r(731708),
                a = r(111677),
                s = r.n(a),
                o = r(686689),
                i = r(416699);
            const c = s().g8475f82,
                d = n.createElement(s().I18NFormatMessage, { $i18n: "da9d52d7" }, n.createElement(l.ZP, { link: "https://support.x.com/articles/18311" }, s().j5e1cf59)),
                u = (e) => {
                    const { screenName: t, suspendHeader: r, suspendMessage: l } = e,
                        a = r ? n.createElement(o.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : c,
                        s = l ? n.createElement(o.Z, { entities: l.entities, rtl: l.rtl, text: l.text }) : d;
                    return n.createElement(i.Z, { header: a, message: s, screenName: t });
                },
                m = n.memo(u);
        },
        524496: (e, t, r) => {
            r.d(t, { Z: () => Z });
            r(136728);
            var n = r(202784),
                l = r(301503),
                a = r(325686),
                s = r(595088),
                o = r(516951),
                i = r(731708),
                c = r(779802),
                d = r(537392),
                u = r(989272),
                m = r(925873),
                p = r(202253),
                b = r(786475),
                E = r(392237),
                f = r(135904);
            const g = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: n.createElement(i.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: n.createElement(i.ZP, null) } },
                h = (0, s.Z)(g).reduce((e, [t, r]) => e.set(t, r), l.DefaultDraftBlockRenderMap);
            let y = !1;
            const Z = n.memo(function (e) {
                    const { componentByType: t, contentState: r, onScribeEvent: s, paragraphFontSizeOverride: i } = e;
                    n.useEffect(() => {
                        y || (u.fH(f.c, f.n), (y = !0));
                    }, []);
                    const E = [(0, p.ez)(s, i), p.aF, p.RU];
                    e.disable_entityLinkDecorator || E.push((0, p.NA)(s, i));
                    const g = m.Z.initEditorState(r, { decorators: E });
                    let Z = o.Z;
                    return (
                        t &&
                            (Z = (e) => {
                                const r = e.getType();
                                return t[r] || null;
                            }),
                        n.createElement(d.ZP, null, ({ containerWidth: e }) => n.createElement(a.Z, { style: _.fontFamily }, n.createElement(l.Editor, { blockRenderMap: h, blockRendererFn: Z, blockStyleFn: (0, c.su)(b.Z.isNarrowScreenWidth(e)), editorState: g, onChange: o.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                _ = E.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        856661: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                l = r(890601),
                a = r(783427),
                s = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
        },
        89085: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                l = r(890601),
                a = r(783427),
                s = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const i = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.a118af7a.js.map
