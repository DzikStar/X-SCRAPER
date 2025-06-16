"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile"],
    {
        163015: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n,
                l,
                s = {
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
            s.hash = "8915833d692c94a47b0fcb2939731579";
            const a = s;
        },
        96702: (e, t, r) => {
            r.d(t, { Z: () => O });
            var n = r(202784),
                l = r(325686),
                s = r(392237),
                a = r(520385),
                o = r(991617),
                i = r(516951),
                c = r(381335),
                u = r(154003),
                d = r(885724);
            const m = n.createElement(d.default, null),
                p = s.default.create((e) => ({ editButton: { height: "auto" } })),
                b = () => {
                    const { blockId: e } = (0, o._L)();
                    return e ? n.createElement(l.Z, { style: p.editButton }, n.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var E = r(301503),
                f = r(989272),
                g = r(524496),
                y = r(925873),
                h = r(731708),
                _ = r(757483),
                Z = r(187669),
                k = r(478414),
                v = r(949626);
            const x = ({ content: e }) => (
                    (0, Z.q)(() => {
                        (0, f.fH)((0, k.yW)(k.Hx, k.K), k.Hx);
                    }),
                    n.createElement(n.Fragment, null, e && e.hasText() && n.createElement(v.Z, { className: k.Hx }, n.createElement(l.Z, { style: I.richText }, n.createElement(g.Z, { contentState: (0, E.convertToRaw)(e) }))))
                ),
                I = s.default.create((e) => {
                    const t = _.Z.hexToCss(e.colors.gray0, 0),
                        r = _.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${r})` } };
                }),
                w = ({ content: e, previewHeight: t, shouldTruncate: r = !0 }) => {
                    const [s, a] = n.useState(0),
                        [o, i] = n.useState(0),
                        [c, u] = n.useState(!r),
                        d = n.useRef(null);
                    n.useEffect(() => {
                        d.current && 0 === s && a(d.current.offsetHeight);
                    }, [s]);
                    const m = n.useMemo(() => {
                            const t = y.Z.getContentStateFromRaw(e);
                            return t ? (0, E.convertFromRaw)(t) : null;
                        }, [e]),
                        p = n.useMemo(() => r && s > t, [r, t, s]);
                    return m && m.hasText()
                        ? n.createElement(
                              l.Z,
                              { style: { flex: 1 } },
                              n.createElement(
                                  l.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== o && i(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...I.previewContainer, maxHeight: t } : void 0,
                                  },
                                  n.createElement(x, { content: m }),
                                  p && !c ? n.createElement(l.Z, { style: I.fade }) : null,
                              ),
                              p && n.createElement(h.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: I.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                C = s.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                N = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: r, sectionType: s } = (0, o.eF)(),
                        u = e.result?.content,
                        d = n.useMemo(() => s === a.NB.ABOUT && r, [r, s]);
                    return n.createElement(l.Z, { style: { ...C.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(w, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? n.createElement(l.Z, { style: C.row }, n.createElement(b, null), n.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null);
                };
            var S = r(470397),
                P = r(823161),
                R = r(111677),
                T = r.n(R),
                F = r(873302);
            const B = T().a2f2faab,
                M = ({ endMonth: e, endYear: t, isCurrent: r, startMonth: l, startYear: s }) => {
                    const a = (0, F.ZU)(l, s),
                        o = (0, F.ZU)(e, t);
                    return a ? n.createElement(S.Z, null, n.createElement(T().I18NFormatMessage, { $i18n: "bab4ce51", start: B(a), end: r ? "Present" : o ? B(o) : "" }), n.createElement(h.ZP, null, (0, F.HM)(a, o || new Date()))) : null;
                },
                H = s.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                D = ({ block: e, isEditing: t }) => {
                    const r = e?.result?.content,
                        s = r?.company_profile_results?.result;
                    return r ? n.createElement(l.Z, { style: { ...H.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(l.Z, { style: { ...H.row, flex: 1 } }, n.createElement(P.default, { shape: "square", size: "large", uri: s?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(l.Z, { style: H.workInfo }, n.createElement(h.ZP, { size: "subtext1", weight: "bold" }, r.title), n.createElement(S.Z, null, s?.core?.name || r.company_profile_name ? n.createElement(h.ZP, { color: "gray700", size: "subtext1" }, s?.core?.name || r.company_profile_name) : null, r.location_text ? n.createElement(h.ZP, { color: "gray700", size: "subtext1" }, r.location_text) : null), n.createElement(h.ZP, { color: "gray700", size: "subtext1" }, n.createElement(M, { endMonth: r.end_month, endYear: r.end_year, isCurrent: !!r.active_role, startMonth: r.start_month, startYear: r.start_year })), n.createElement(w, { content: r.description, previewHeight: 120, shouldTruncate: !0 }))), t ? n.createElement(l.Z, { style: H.row }, n.createElement(b, null), n.createElement(c.Z, { onCompleted: i.Z, useIconButton: !0 })) : null) : null;
                },
                U = ({ block: e, blockId: t, isEditing: r = !1 }) => {
                    const l = n.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case a.Mp.RICHTEXT:
                                return n.createElement(N, { block: e, isEditing: r });
                            case a.Mp.WORK_HISTORY:
                                return n.createElement(D, { block: e, isEditing: r });
                            default:
                                return null;
                        }
                    }, [e, r]);
                    return e ? n.createElement(o.Vo.Provider, { value: { ...o.dq, blockId: t, blockQueryId: e.__id } }, l()) : null;
                },
                V = s.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                O = ({ blocks: e, isEditing: t }) =>
                    e
                        ? n.createElement(
                              l.Z,
                              null,
                              e.map((r, s) => {
                                  if (!r) return null;
                                  const a = r.rest_id.block_id;
                                  if (!a || !r?.result?.core) return null;
                                  return n.createElement(
                                      l.Z,
                                      { key: a, style: V.blockGroup },
                                      n.createElement(
                                          l.Z,
                                          {
                                              style: (() => {
                                                  const t = V.block;
                                                  return 1 === e.length ? t : 0 === s ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : s > 0 && s < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : s === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          n.createElement(U, { block: r, blockId: a, isEditing: t }),
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
                s = r(154003),
                a = r(392237),
                o = r(111677),
                i = r.n(o),
                c = r(607127),
                u = r(991617),
                d = r(512547);
            const m = i().h6a724ac,
                p = i().f94aacae,
                b = i().d96cf7ce,
                E = a.default.create((e) => ({ iconButton: { height: "auto" } })),
                f = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: r, sectionQueryId: a } = (0, u.eF)(),
                        { blockId: o, blockQueryId: i } = (0, u._L)(),
                        { userId: f, userQueryId: g } = (0, u.se)(),
                        [y, h] = n.useState(!1),
                        _ = n.useCallback(() => {
                            h(!1);
                        }, []),
                        Z = n.useCallback(() => {
                            h(!0);
                        }, []);
                    return n.createElement(n.Fragment, null, t ? n.createElement(l.Z, { style: E.iconButton }, n.createElement(s.ZP, { disabled: !o || !f, icon: n.createElement(c.default, null), onClick: Z, size: "xSmall", type: "destructiveText" })) : n.createElement(s.ZP, { disabled: !o || !f, onClick: Z, size: "large", type: "destructiveText" }, b), y && o && f ? n.createElement(d.Z, { blockId: o, headline: m, onClose: _, onCompleted: e, queryId: r > 1 ? i : a || g, subtext: p, userId: f }) : null);
                };
        },
        485822: (e, t, r) => {
            r.d(t, { Z: () => I });
            r(136728);
            var n = r(202784),
                l = r(325686),
                s = r(277660),
                a = r.n(s),
                o = r(107267),
                i = r(58881),
                c = r(392237),
                u = r(731708),
                d = r(530732),
                m = r(111677),
                p = r.n(m),
                b = r(982866),
                E = r(952793),
                f = r(462166),
                g = r(873302),
                y = r(96702),
                h = r(991617),
                _ = r(736993);
            const Z = p().b721eb38,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: r, sectionVisibility: s } = (0, h.eF)(),
                        { userId: a, userQueryId: m } = (0, h.se)(),
                        p = (0, o.useHistory)(),
                        k = n.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        x = (0, E.hC)("xprofile_section_visibility_enabled"),
                        I = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const w = a === m,
                        C = (0, g.Kh)(e?.slice(), f.GL);
                    return n.createElement(l.Z, { style: v.root }, n.createElement(l.Z, { style: v.header }, n.createElement(u.ZP, { size: "title4", weight: "bold" }, Z), x && w && n.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(s) } }, n.createElement(_.K3, { style: v.visibilityIcon, visibility: s })), x && t && n.createElement(_.ZP, { currentVisibility: s, sectionId: r })), n.createElement(l.Z, null, e?.length ? n.createElement(y.Z, { blocks: C, isEditing: t }) : n.createElement(n.Fragment, null, t ? n.createElement(d.Z, { interactiveStyles: I, onClick: k, style: v.container }, n.createElement(u.ZP, null, "Tell us about yourself"), n.createElement(b.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                x = ({ isEditing: e = !1, section: t }) => {
                    const r = a()(f.C_, t),
                        l = r?.result?.profile_blocks?.items_results;
                    return r?.result?.id ? n.createElement(k, { blocks: l, isEditing: e }) : null;
                },
                I = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(x, { isEditing: e, section: t }) : n.createElement(k, { isEditing: e }));
        },
        164349: (e, t, r) => {
            r.d(t, { Z: () => I });
            r(136728);
            var n = r(202784),
                l = r(325686),
                s = r(277660),
                a = r.n(s),
                o = r(107267),
                i = r(58881),
                c = r(392237),
                u = r(731708),
                d = r(530732),
                m = r(111677),
                p = r.n(m),
                b = r(982866),
                E = r(952793),
                f = r(462166),
                g = r(873302),
                y = r(96702),
                h = r(991617),
                _ = r(736993);
            const Z = p().a622dfcc,
                k = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: r, sectionVisibility: s } = (0, h.eF)(),
                        { userId: a, userQueryId: m } = (0, h.se)(),
                        p = (0, o.useHistory)(),
                        k = n.useCallback(() => {
                            r ? p.push(`/settings/bio/new/${r}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, r]),
                        x = (0, E.hC)("xprofile_section_visibility_enabled"),
                        I = i.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const w = a === m,
                        C = (0, g.Kh)(e?.slice(), f.lw),
                        N = (0, g.s1)(C);
                    return n.createElement(l.Z, { style: v.root }, n.createElement(l.Z, { style: v.headerSection }, n.createElement(u.ZP, { size: "title4", weight: "bold" }, Z), x && w && n.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(s) } }, n.createElement(_.K3, { style: v.visibilityIcon, visibility: s })), x && t && n.createElement(_.ZP, { currentVisibility: s, sectionId: r })), n.createElement(l.Z, { style: v.blocksList }, N && N.length > 0 ? n.createElement(y.Z, { blocks: N, isEditing: t }) : null, n.createElement(n.Fragment, null, t ? n.createElement(d.Z, { interactiveStyles: I, onClick: k, style: v.container }, n.createElement(u.ZP, null, "Add experience"), n.createElement(b.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                x = ({ isEditing: e = !1, section: t }) => {
                    const r = a()(f.C_, t),
                        l = r?.result?.profile_blocks?.items_results;
                    return r?.result?.id ? n.createElement(k, { blocks: l, isEditing: e }) : null;
                },
                I = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(x, { isEditing: e, section: t }) : n.createElement(k, { isEditing: e }));
        },
        736993: (e, t, r) => {
            r.d(t, { K3: () => _, Q: () => v, ZP: () => x });
            var n = r(163015),
                l = r(202784),
                s = r(400752),
                a = r(325686),
                o = (r(585488), r(351743)),
                i = r.n(o),
                c = r(731708),
                u = r(797553),
                d = r(143670),
                m = r(392237),
                p = r(111677),
                b = r.n(p),
                E = r(14284),
                f = r(468670),
                g = r(520385),
                y = r(991617);
            const h = n.Z,
                _ = ({ style: e, visibility: t }) => (t === g.pR.PUBLIC ? l.createElement(E.default, { style: e }) : t === g.pR.PRIVATE ? l.createElement(f.default, { style: e }) : void l.Fragment),
                Z = b().baffe39a,
                k = b().je07e266,
                v = (e) => (e === g.pR.PUBLIC ? Z : e === g.pR.PRIVATE ? k : ""),
                x = ({ currentVisibility: e, sectionId: t }) => {
                    const r = (0, s.b9)(y.j7),
                        [n, o] = l.useState(e ?? g.pR.PUBLIC),
                        [m, p] = l.useState(!1),
                        [Z] = i()(h),
                        k = l.useCallback(
                            (e) => {
                                t &&
                                    (o(e),
                                    p(!1),
                                    Z({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            r(!0);
                                        },
                                    }));
                            },
                            [Z, t, r],
                        );
                    return l.createElement(a.Z, null, l.createElement(a.Z, { onClick: () => p(!0), style: I.target }, l.createElement(_, { style: I.icon, visibility: n }), l.createElement(c.ZP, { style: I.targetText }, v(n))), m && l.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, l.createElement(d.Z, { Icon: E.default, actionText: b().baffe39a, onClick: () => k(g.pR.PUBLIC) }), l.createElement(d.Z, { Icon: f.default, actionText: b().je07e266, onClick: () => k(g.pR.PRIVATE) })));
                },
                I = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, r) => {
            r.d(t, { Fo: () => a, Vo: () => m, Y_: () => i, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => b, se: () => o, w: () => s });
            var n = r(202784),
                l = r(565058);
            const s = { userId: null, userQueryId: null },
                a = n.createContext(s),
                o = () => n.useContext(a),
                i = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = n.createContext(i),
                u = () => n.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = n.createContext(d),
                p = () => n.useContext(m),
                b = (0, l.cn)(!1);
        },
        873302: (e, t, r) => {
            r.d(t, { HM: () => b, Kh: () => m, ZU: () => d, hW: () => f, s1: () => p, uR: () => E });
            var n = r(990242),
                l = r.n(n),
                s = r(111677),
                a = r.n(s),
                o = r(520385),
                i = r(462166);
            const c = a().eb7710f1,
                u = a().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const r = e?.filter((e) => e);
                    return r
                        ? r.map((e) => {
                              const r = { ...e },
                                  n = l()(i.wJ, r),
                                  s = l()(t, n.result?.content);
                              return { __id: r.__id, id: r.id, rest_id: r.rest_id, result: { ...n.result, content: s } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const r = e.result?.content,
                                n = t.result?.content,
                                l = (r?.active_role ? new Date() : d(r?.end_month, r?.end_year)) ?? new Date(0),
                                s = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0);
                            if (l.getFullYear() !== s.getFullYear()) return s.getFullYear() - l.getFullYear();
                            if (l.getMonth() !== s.getMonth()) return s.getMonth() - l.getMonth();
                            const a = d(r?.start_month, r?.start_year) ?? new Date(0),
                                o = d(n?.start_month, n?.start_year) ?? new Date(0);
                            return a.getFullYear() !== o.getFullYear() ? o.getFullYear() - a.getFullYear() : o.getMonth() - a.getMonth();
                        });
                },
                b = (e, t) => {
                    let r = t.getMonth() - e.getMonth() + 1,
                        n = t.getFullYear() - e.getFullYear();
                    return r < 0 && (n--, (r += 12)), n && r ? `${c({ years: n })} ${u({ months: r })}` : n ? c({ years: n }) : r ? u({ months: r }) : "";
                },
                E = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === o.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === o.Mp.RICHTEXT)) : void 0),
                f = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        990229: (e, t, r) => {
            r.d(t, { Z: () => h });
            r(136728);
            var n = r(202784),
                l = r(107267),
                s = r(811176),
                a = r(154003),
                o = r(111677),
                i = r.n(o),
                c = r(149170),
                u = r(415506),
                d = r(443781),
                m = r(395067),
                p = r(725516);
            const b = i().j7bb1a43,
                E = i().h63a5c3c,
                f = n.createElement(c.default, null),
                g = ({ onClose: e, user: t }) => {
                    const r = (0, p.z)(),
                        a = (0, l.useHistory)(),
                        { featureSwitches: o } = (0, d.QZ)(),
                        i = () => ({
                            Icon: u.default,
                            text: b({ screenName: t.screen_name }),
                            onClick: () => {
                                e(),
                                    (() => {
                                        const e = m.C2.User;
                                        if ((0, m.Yw)(o, e)) {
                                            const n = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: t.id_str, scribeNamespace: r.contextualScribeNamespace });
                                            a.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } });
                                        } else a.push({ pathname: `/i/report/user/${t.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: r.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return n.createElement(s.Z, { items: [i()], onCloseRequested: e });
                },
                y = ({ user: e }) => {
                    const t = n.useCallback((t) => n.createElement(g, { onClose: t, user: e }), [e]),
                        r = n.useMemo(() => ({ label: E }), []);
                    return n.createElement(a.ZP, { "aria-label": E, hoverLabel: r, icon: f, renderMenu: t, type: "primaryOutlined" });
                },
                h = n.memo(y);
        },
        695431: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(71620),
                l = r(668214),
                s = r(390387),
                a = r(919022);
            const o = (e, t) => t.match.params.screenName || "",
                i = (e, t) => a.ZP.selectIsUserNotFound(e, o(0, t)),
                c = (e, t) => a.ZP.selectIsUserSuspended(e, o(0, t)),
                u = (e, t) => a.ZP.selectUserSuspendMessage(e, o(0, t)),
                d = (e, t) => a.ZP.selectByScreenName(e, o(0, t)),
                m = (0, l.Z)()
                    .propsFromState(() => ({ isNotFound: i, isSuspended: c, suspendMessage: u, screenName: o, user: d, viewerUserId: s._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, n.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: a.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, t, r) => {
            r.r(t), r.d(t, { default: () => O });
            var n = r(807896),
                l = r(202784),
                s = r(107267),
                a = r(154003),
                o = r(718e3),
                i = r(785813),
                c = r(825495),
                u = r(252021),
                d = r(736063),
                m = r(666670),
                p = r(72130),
                b = r(238225),
                E = r(535338),
                f = r(416699),
                g = r(484163),
                y = r(972796),
                h = r(21437),
                _ = r(220544),
                Z = r(695431),
                k = r(990229),
                v = (r(571372), r(301503)),
                x = r(325686),
                I = r(277660),
                w = r.n(I),
                C = r(989272),
                N = r(524496),
                S = r(392237),
                P = r(187669),
                R = r(949626),
                T = r(478414),
                F = r(520385);
            const B = ({ profileBlocksRef: e }) => {
                    const t = w()(b.m1, e),
                        r = t?.items?.find((e) => e?.block_type === F.Mp.RICHTEXT),
                        n = r?.data?.value || "",
                        s = l.useMemo(() => {
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
                        l.createElement(x.Z, { style: M.root }, s && (0, v.convertFromRaw)(s).hasText() ? l.createElement(R.Z, { className: T.Hx }, l.createElement(x.Z, { style: M.richText }, l.createElement(N.Z, { contentState: s, paragraphFontSizeOverride: T.K.paragraphFontSize }))) : null)
                    );
                },
                M = S.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                H = l.memo(B),
                D = ({ analytics: e, hasProfileBlocks: t, profileBlocksRef: r, screenName: n, user: d, viewerUserId: m }) => {
                    const b = (0, s.useHistory)();
                    l.useEffect(() => {
                        d?.id_str && e.scribe({ ...(0, p.Zi)(d?.id_str, { version: 1 }) });
                    }, [e, d?.id_str]);
                    const E = l.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return l.createElement(u.Z, { backLocation: `/${n}`, history: b, primaryContent: d ? (t ? l.createElement(H, { profileBlocksRef: r }) : l.createElement(f.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: n })) : null, rightControl: d?.id_str === m ? l.createElement(a.ZP, { link: "/settings/bio", onClick: E, size: "xSmall", type: "primaryOutlined" }, "Edit") : d ? l.createElement(k.Z, { user: d }) : null, sidebarContent: l.createElement(o.Z, null), subtitle: `@${n}`, title: (0, i.Z)(d), titleIconCell: (0, c.Z)(d) });
                },
                U = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: r } = (0, E.p)(b.kI, { screenName: t }),
                        s = r?.result?.profile_blocks,
                        a = !!r?.result?.has_profile_blocks;
                    return t && s ? l.createElement(D, (0, n.Z)({ hasProfileBlocks: a, profileBlocksRef: s }, e)) : null;
                },
                V = { context: "EXTENDED_USER_PROFILE" },
                O = (0, Z.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: r, isNotFound: n, isSuspended: s, screenName: a, suspendMessage: o, user: i, viewerUserId: c } = e;
                    return (
                        l.useEffect(() => {
                            a && r(a).catch(t(m.F));
                        }, [t, r, a]),
                        a && i ? (s ? l.createElement(_.i, { screenName: a, suspendMessage: o }) : i.blocked_by ? l.createElement(y.T, { screenName: a }) : !i.protected || (i && c === i.id_str) || i.following ? (n ? l.createElement(g.Y, { screenName: a }) : l.createElement(d.H, { errorConfig: V }, l.createElement(U, e))) : l.createElement(h.X, { screenName: a })) : null
                    );
                });
        },
        806208: (e, t, r) => {
            r.r(t), r.d(t, { default: () => H });
            var n = r(807896),
                l = r(202784),
                s = r(325686),
                a = r(277660),
                o = r.n(a),
                i = r(154003),
                c = r(392237),
                u = r(718e3),
                d = r(991617),
                m = r(785813),
                p = r(825495),
                b = r(485822),
                E = r(164349),
                f = r(252021),
                g = r(736063),
                y = r(666670),
                h = r(72130),
                _ = r(520385),
                Z = r(462166),
                k = r(873302),
                v = r(535338),
                x = r(416699),
                I = r(484163),
                w = r(972796),
                C = r(21437),
                N = r(220544),
                S = r(695431),
                P = r(990229);
            const R = ({ analytics: e, expandedProfile: t, hasProfileBlocks: r, history: n, screenName: a, user: o, viewerUserId: c }) => {
                    l.useEffect(() => {
                        o?.id_str && e.scribe({ ...(0, h.Zi)(o?.id_str, { version: 2 }) });
                    }, [e, o?.id_str]);
                    const g = t?.result?.profile_sections?.items_results,
                        y = (0, k.uR)(g, _.NB.ABOUT),
                        Z = (0, k.uR)(g, _.NB.WORK_EXPERIENCE),
                        v = (0, k.hW)(y),
                        I = (0, k.hW)(Z),
                        w = l.useCallback(() => {
                            e.scribe({ ...(0, h.he)({ version: 2 }) });
                        }, [e]);
                    return l.createElement(f.Z, { backLocation: `/${a}`, history: n, primaryContent: o ? (r ? l.createElement(s.Z, { style: T.root }, l.createElement(d.Fo.Provider, { value: { userId: c, userQueryId: o.id_str } }, l.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: v, hasWorkHistorySection: I, sectionId: y?.rest_id?.section_id, sectionType: _.NB.ABOUT, blockCount: y?.result?.profile_blocks?.total_count || 0, sectionQueryId: y?.id, sectionVisibility: y?.result?.core?.visibility } }, l.createElement(b.Z, { isEditing: !1, section: y })), l.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: v, hasWorkHistorySection: I, sectionId: Z?.rest_id?.section_id, sectionType: _.NB.WORK_EXPERIENCE, blockCount: Z?.result?.profile_blocks?.total_count || 0, sectionQueryId: Z?.id, sectionVisibility: Z?.result?.core?.visibility } }, l.createElement(E.Z, { isEditing: !1, section: Z })))) : l.createElement(x.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: a })) : null, rightControl: o?.id_str === c ? l.createElement(i.ZP, { link: "/settings/bio", onClick: w, size: "xSmall", type: "primaryOutlined" }, "Edit") : o ? l.createElement(P.Z, { user: o }) : null, sidebarContent: l.createElement(u.Z, null), subtitle: `@${a}`, title: (0, m.Z)(o), titleIconCell: (0, p.Z)(o) });
                },
                T = c.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                F = ({ expandedProfile: e, hasProfileBlocks: t, ...r }) => {
                    const s = o()(Z.cH, e);
                    return s ? l.createElement(R, (0, n.Z)({ expandedProfile: s, hasProfileBlocks: t }, r)) : null;
                },
                B = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: r } = (0, v.p)(Z.Sp, { screenName: t }),
                        s = !!r?.result?.has_profile_blocks,
                        a = r?.result?.expanded_profile_results;
                    return t && a ? l.createElement(F, (0, n.Z)({ expandedProfile: a, hasProfileBlocks: s }, e)) : null;
                },
                M = { context: "EXTENDED_USER_PROFILE_V2" },
                H = (0, S.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: r, isNotFound: n, isSuspended: s, screenName: a, suspendMessage: o, user: i, viewerUserId: c } = e;
                    return (
                        l.useEffect(() => {
                            a && r(a).catch(t(y.F));
                        }, [t, r, a]),
                        a && i ? (s ? l.createElement(N.i, { screenName: a, suspendMessage: o }) : i.blocked_by ? l.createElement(w.T, { screenName: a }) : !i.protected || (i && c === i.id_str) || i.following ? (n ? l.createElement(I.Y, { screenName: a }) : l.createElement(g.H, { errorConfig: M }, l.createElement(B, e))) : l.createElement(C.X, { screenName: a })) : null
                    );
                });
        },
        416699: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(807896),
                l = r(202784),
                s = r(457311),
                a = r(392237),
                o = r(668214),
                i = r(919022);
            const c = (e, t) => !!t.screenName && i.ZP.selectIsUserSuspended(e, t.screenName),
                u = (e, t) => {
                    const r = t.screenName ? i.ZP.selectByScreenName(e, t.screenName) : void 0;
                    return r?.blocking;
                },
                d = (0, o.Z)().propsFromState(() => ({ isBlocking: u, isSuspended: c })),
                m = (e) => {
                    const { isBlocking: t, isSuspended: r, screenName: a, ...o } = e;
                    return l.createElement(l.Fragment, null, null, l.createElement(s.Z, (0, n.Z)({}, o, { style: [p.root, p.verticalPadding] })));
                },
                p = a.default.create((e) => ({ root: { backgroundColor: a.default.theme.colors.cellBackground, paddingHorizontal: a.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: a.default.theme.spaces.space40 } })),
                b = d(l.memo(m));
        },
        484163: (e, t, r) => {
            r.d(t, { Y: () => c, Z: () => u });
            var n = r(202784),
                l = r(111677),
                s = r.n(l),
                a = r(416699);
            const o = s().c9a1cb5e,
                i = s().e7b201de,
                c = (e) => {
                    const { screenName: t } = e;
                    return n.createElement(a.Z, { header: o, message: i, screenName: t });
                },
                u = n.memo(c);
        },
        972796: (e, t, r) => {
            r.d(t, { T: () => d, Z: () => m });
            var n = r(202784),
                l = r(688715),
                s = r(731708),
                a = r(111677),
                o = r.n(a),
                i = r(416699);
            const c = o().ica87fde,
                u = (0, l.ju)("https://support.x.com/articles/20172060"),
                d = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(o().I18NFormatMessage, { $i18n: "e6264621", screenName: t }, n.createElement(s.ZP, { link: u }, o().c7ec6faf)), [t]);
                    return n.createElement(i.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(d);
        },
        21437: (e, t, r) => {
            r.d(t, { X: () => d, Z: () => m });
            var n = r(202784),
                l = r(688715),
                s = r(731708),
                a = r(111677),
                o = r.n(a),
                i = r(416699);
            const c = o().bd598c70,
                u = (0, l.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(o().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, n.createElement(s.ZP, { link: u }, o().e617164b)), [t]);
                    return n.createElement(i.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(d);
        },
        220544: (e, t, r) => {
            r.d(t, { Z: () => m, i: () => d });
            var n = r(202784),
                l = r(731708),
                s = r(111677),
                a = r.n(s),
                o = r(686689),
                i = r(416699);
            const c = a().g8475f82,
                u = n.createElement(a().I18NFormatMessage, { $i18n: "da9d52d7" }, n.createElement(l.ZP, { link: "https://support.x.com/articles/18311" }, a().j5e1cf59)),
                d = (e) => {
                    const { screenName: t, suspendHeader: r, suspendMessage: l } = e,
                        s = r ? n.createElement(o.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : c,
                        a = l ? n.createElement(o.Z, { entities: l.entities, rtl: l.rtl, text: l.text }) : u;
                    return n.createElement(i.Z, { header: s, message: a, screenName: t });
                },
                m = n.memo(d);
        },
        524496: (e, t, r) => {
            r.d(t, { Z: () => _ });
            r(136728);
            var n = r(202784),
                l = r(301503),
                s = r(325686),
                a = r(595088),
                o = r(516951),
                i = r(731708),
                c = r(779802),
                u = r(537392),
                d = r(989272),
                m = r(925873),
                p = r(202253),
                b = r(786475),
                E = r(392237),
                f = r(135904);
            const g = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: n.createElement(i.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: n.createElement(i.ZP, null) } },
                y = (0, a.Z)(g).reduce((e, [t, r]) => e.set(t, r), l.DefaultDraftBlockRenderMap);
            let h = !1;
            const _ = n.memo(function (e) {
                    const { componentByType: t, contentState: r, onScribeEvent: a, paragraphFontSizeOverride: i } = e;
                    n.useEffect(() => {
                        h || (d.fH(f.c, f.n), (h = !0));
                    }, []);
                    const E = [(0, p.ez)(a, i), p.aF, p.RU];
                    e.disable_entityLinkDecorator || E.push((0, p.NA)(a, i));
                    const g = m.Z.initEditorState(r, { decorators: E });
                    let _ = o.Z;
                    return (
                        t &&
                            (_ = (e) => {
                                const r = e.getType();
                                return t[r] || null;
                            }),
                        n.createElement(u.ZP, null, ({ containerWidth: e }) => n.createElement(s.Z, { style: Z.fontFamily }, n.createElement(l.Editor, { blockRenderMap: y, blockRendererFn: _, blockStyleFn: (0, c.su)(b.Z.isNarrowScreenWidth(e)), editorState: g, onChange: o.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                Z = E.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.7b41697a.js.map
