"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile"],
    {
        163015: (e, t, l) => {
            l.d(t, { Z: () => s });
            var n,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "sectionId" },
                            { defaultValue: null, kind: "LocalArgument", name: "visibility" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "VisibilityDropdown_updateSectionVisibilityMutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: r },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            a.hash = "8915833d692c94a47b0fcb2939731579";
            const s = a;
        },
        96702: (e, t, l) => {
            l.d(t, { Z: () => U });
            var n = l(202784),
                r = l(325686),
                a = l(392237),
                s = l(520385),
                i = l(991617),
                o = l(516951),
                c = l(381335),
                u = l(154003),
                d = l(885724);
            const m = n.createElement(d.default, null),
                p = a.default.create((e) => ({ editButton: { height: "auto" } })),
                g = () => {
                    const { blockId: e } = (0, i._L)();
                    return e ? n.createElement(r.Z, { style: p.editButton }, n.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var y = l(301503),
                k = l(989272),
                f = l(524496),
                b = l(925873),
                E = l(731708),
                _ = l(757483),
                h = l(187669),
                Z = l(478414),
                F = l(949626);
            const v = ({ content: e }) => (
                    (0, h.q)(() => {
                        (0, k.fH)((0, Z.yW)(Z.Hx, Z.K), Z.Hx);
                    }),
                    n.createElement(n.Fragment, null, e && e.hasText() && n.createElement(F.Z, { className: Z.Hx }, n.createElement(r.Z, { style: x.richText }, n.createElement(f.Z, { contentState: (0, y.convertToRaw)(e) }))))
                ),
                x = a.default.create((e) => {
                    const t = _.Z.hexToCss(e.colors.gray0, 0),
                        l = _.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${l})` } };
                }),
                I = ({ content: e, previewHeight: t, shouldTruncate: l = !0 }) => {
                    const [a, s] = n.useState(0),
                        [i, o] = n.useState(0),
                        [c, u] = n.useState(!l),
                        d = n.useRef(null);
                    n.useEffect(() => {
                        d.current && 0 === a && s(d.current.offsetHeight);
                    }, [a]);
                    const m = n.useMemo(() => {
                            const t = b.Z.getContentStateFromRaw(e);
                            return t ? (0, y.convertFromRaw)(t) : null;
                        }, [e]),
                        p = n.useMemo(() => l && a > t, [l, t, a]);
                    return m && m.hasText()
                        ? n.createElement(
                              r.Z,
                              { style: { flex: 1 } },
                              n.createElement(
                                  r.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== i && o(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...x.previewContainer, maxHeight: t } : void 0,
                                  },
                                  n.createElement(v, { content: m }),
                                  p && !c ? n.createElement(r.Z, { style: x.fade }) : null,
                              ),
                              p && n.createElement(E.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: x.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                S = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                w = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: l, sectionType: a } = (0, i.eF)(),
                        u = e.result?.content,
                        d = n.useMemo(() => a === s.NB.ABOUT && l, [l, a]);
                    return n.createElement(r.Z, { style: { ...S.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(I, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? n.createElement(r.Z, { style: S.row }, n.createElement(g, null), n.createElement(c.Z, { onCompleted: o.Z, useIconButton: !0 })) : null);
                };
            var P = l(470397),
                C = l(823161),
                T = l(111677),
                B = l.n(T),
                N = l(873302);
            const R = B().a2f2faab,
                K = ({ endMonth: e, endYear: t, isCurrent: l, startMonth: r, startYear: a }) => {
                    const s = (0, N.ZU)(r, a),
                        i = (0, N.ZU)(e, t);
                    return s ? n.createElement(P.Z, null, n.createElement(B().I18NFormatMessage, { $i18n: "bab4ce51", start: R(s), end: l ? "Present" : i ? R(i) : "" }), n.createElement(E.ZP, null, (0, N.HM)(s, i || new Date()))) : null;
                },
                L = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                M = ({ block: e, isEditing: t }) => {
                    const l = e?.result?.content,
                        a = l?.company_profile_results?.result;
                    return l ? n.createElement(r.Z, { style: { ...L.row, ...(t ? { justifyContent: "space-between" } : {}) } }, n.createElement(r.Z, { style: { ...L.row, flex: 1 } }, n.createElement(C.default, { shape: "square", size: "large", uri: a?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(r.Z, { style: L.workInfo }, n.createElement(E.ZP, { size: "subtext1", weight: "bold" }, l.title), n.createElement(P.Z, null, a?.core?.name || l.company_profile_name ? n.createElement(E.ZP, { color: "gray700", size: "subtext1" }, a?.core?.name || l.company_profile_name) : null, l.location_text ? n.createElement(E.ZP, { color: "gray700", size: "subtext1" }, l.location_text) : null), n.createElement(E.ZP, { color: "gray700", size: "subtext1" }, n.createElement(K, { endMonth: l.end_month, endYear: l.end_year, isCurrent: !!l.active_role, startMonth: l.start_month, startYear: l.start_year })), n.createElement(I, { content: l.description, previewHeight: 120, shouldTruncate: !0 }))), t ? n.createElement(r.Z, { style: L.row }, n.createElement(g, null), n.createElement(c.Z, { onCompleted: o.Z, useIconButton: !0 })) : null) : null;
                },
                D = ({ block: e, blockId: t, isEditing: l = !1 }) => {
                    const r = n.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case s.Mp.RICHTEXT:
                                return n.createElement(w, { block: e, isEditing: l });
                            case s.Mp.WORK_HISTORY:
                                return n.createElement(M, { block: e, isEditing: l });
                            default:
                                return null;
                        }
                    }, [e, l]);
                    return e ? n.createElement(i.Vo.Provider, { value: { ...i.dq, blockId: t, blockQueryId: e.__id } }, r()) : null;
                },
                H = a.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                U = ({ blocks: e, isEditing: t }) =>
                    e
                        ? n.createElement(
                              r.Z,
                              null,
                              e.map((l, a) => {
                                  if (!l) return null;
                                  const s = l.rest_id.block_id;
                                  if (!s || !l?.result?.core) return null;
                                  return n.createElement(
                                      r.Z,
                                      { key: s, style: H.blockGroup },
                                      n.createElement(
                                          r.Z,
                                          {
                                              style: (() => {
                                                  const t = H.block;
                                                  return 1 === e.length ? t : 0 === a ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a > 0 && a < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          n.createElement(D, { block: l, blockId: s, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        381335: (e, t, l) => {
            l.d(t, { Z: () => k });
            var n = l(202784),
                r = l(325686),
                a = l(154003),
                s = l(392237),
                i = l(111677),
                o = l.n(i),
                c = l(607127),
                u = l(991617),
                d = l(128586);
            const m = o().h6a724ac,
                p = o().f94aacae,
                g = o().d96cf7ce,
                y = s.default.create((e) => ({ iconButton: { height: "auto" } })),
                k = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: l, sectionQueryId: s } = (0, u.eF)(),
                        { blockId: i, blockQueryId: o } = (0, u._L)(),
                        { userId: k, userQueryId: f } = (0, u.se)(),
                        [b, E] = n.useState(!1),
                        _ = n.useCallback(() => {
                            E(!1);
                        }, []),
                        h = n.useCallback(() => {
                            E(!0);
                        }, []);
                    return n.createElement(n.Fragment, null, t ? n.createElement(r.Z, { style: y.iconButton }, n.createElement(a.ZP, { disabled: !i || !k, icon: n.createElement(c.default, null), onClick: h, size: "xSmall", type: "destructiveText" })) : n.createElement(a.ZP, { disabled: !i || !k, onClick: h, size: "large", type: "destructiveText" }, g), b && i && k ? n.createElement(d.Z, { blockId: i, headline: m, onClose: _, onCompleted: e, queryId: l > 1 ? o : s || f, subtext: p, userId: k }) : null);
                };
        },
        485822: (e, t, l) => {
            l.d(t, { Z: () => x });
            l(136728);
            var n = l(202784),
                r = l(325686),
                a = l(277660),
                s = l.n(a),
                i = l(107267),
                o = l(58881),
                c = l(392237),
                u = l(731708),
                d = l(530732),
                m = l(111677),
                p = l.n(m),
                g = l(982866),
                y = l(952793),
                k = l(462166),
                f = l(873302),
                b = l(96702),
                E = l(991617),
                _ = l(736993);
            const h = p().b721eb38,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: l, sectionVisibility: a } = (0, E.eF)(),
                        { userId: s, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        Z = n.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        v = (0, y.hC)("xprofile_section_visibility_enabled"),
                        x = o.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        S = (0, f.Kh)(e?.slice(), k.GL);
                    return n.createElement(r.Z, { style: F.root }, n.createElement(r.Z, { style: F.header }, n.createElement(u.ZP, { size: "title4", weight: "bold" }, h), v && I && n.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(a) } }, n.createElement(_.K3, { style: F.visibilityIcon, visibility: a })), v && t && n.createElement(_.ZP, { currentVisibility: a, sectionId: l })), n.createElement(r.Z, null, e?.length ? n.createElement(b.Z, { blocks: S, isEditing: t }) : n.createElement(n.Fragment, null, t ? n.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: F.container }, n.createElement(u.ZP, null, "Tell us about yourself"), n.createElement(g.default, null)) : null)));
                },
                F = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                v = ({ isEditing: e = !1, section: t }) => {
                    const l = s()(k.C_, t),
                        r = l?.result?.profile_blocks?.items_results;
                    return l?.result?.id ? n.createElement(Z, { blocks: r, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(v, { isEditing: e, section: t }) : n.createElement(Z, { isEditing: e }));
        },
        164349: (e, t, l) => {
            l.d(t, { Z: () => x });
            l(136728);
            var n = l(202784),
                r = l(325686),
                a = l(277660),
                s = l.n(a),
                i = l(107267),
                o = l(58881),
                c = l(392237),
                u = l(731708),
                d = l(530732),
                m = l(111677),
                p = l.n(m),
                g = l(982866),
                y = l(952793),
                k = l(462166),
                f = l(873302),
                b = l(96702),
                E = l(991617),
                _ = l(736993);
            const h = p().a622dfcc,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: l, sectionVisibility: a } = (0, E.eF)(),
                        { userId: s, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        Z = n.useCallback(() => {
                            l ? p.push(`/settings/bio/new/${l}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, l]),
                        v = (0, y.hC)("xprofile_section_visibility_enabled"),
                        x = o.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        S = (0, f.Kh)(e?.slice(), k.lw),
                        w = (0, f.s1)(S);
                    return n.createElement(r.Z, { style: F.root }, n.createElement(r.Z, { style: F.headerSection }, n.createElement(u.ZP, { size: "title4", weight: "bold" }, h), v && I && n.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(a) } }, n.createElement(_.K3, { style: F.visibilityIcon, visibility: a })), v && t && n.createElement(_.ZP, { currentVisibility: a, sectionId: l })), n.createElement(r.Z, { style: F.blocksList }, w && w.length > 0 ? n.createElement(b.Z, { blocks: w, isEditing: t }) : null, n.createElement(n.Fragment, null, t ? n.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: F.container }, n.createElement(u.ZP, null, "Add experience"), n.createElement(g.default, null)) : null)));
                },
                F = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                v = ({ isEditing: e = !1, section: t }) => {
                    const l = s()(k.C_, t),
                        r = l?.result?.profile_blocks?.items_results;
                    return l?.result?.id ? n.createElement(Z, { blocks: r, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? n.createElement(v, { isEditing: e, section: t }) : n.createElement(Z, { isEditing: e }));
        },
        736993: (e, t, l) => {
            l.d(t, { K3: () => _, Q: () => F, ZP: () => v });
            var n = l(163015),
                r = l(202784),
                a = l(400752),
                s = l(325686),
                i = (l(585488), l(351743)),
                o = l.n(i),
                c = l(731708),
                u = l(797553),
                d = l(143670),
                m = l(392237),
                p = l(111677),
                g = l.n(p),
                y = l(14284),
                k = l(468670),
                f = l(520385),
                b = l(991617);
            const E = n.Z,
                _ = ({ style: e, visibility: t }) => (t === f.pR.PUBLIC ? r.createElement(y.default, { style: e }) : t === f.pR.PRIVATE ? r.createElement(k.default, { style: e }) : void r.Fragment),
                h = g().baffe39a,
                Z = g().je07e266,
                F = (e) => (e === f.pR.PUBLIC ? h : e === f.pR.PRIVATE ? Z : ""),
                v = ({ currentVisibility: e, sectionId: t }) => {
                    const l = (0, a.b9)(b.j7),
                        [n, i] = r.useState(e ?? f.pR.PUBLIC),
                        [m, p] = r.useState(!1),
                        [h] = o()(E),
                        Z = r.useCallback(
                            (e) => {
                                t &&
                                    (i(e),
                                    p(!1),
                                    h({
                                        variables: { sectionId: t, visibility: e },
                                        onCompleted: () => {
                                            l(!0);
                                        },
                                    }));
                            },
                            [h, t, l],
                        );
                    return r.createElement(s.Z, null, r.createElement(s.Z, { onClick: () => p(!0), style: x.target }, r.createElement(_, { style: x.icon, visibility: n }), r.createElement(c.ZP, { style: x.targetText }, F(n))), m && r.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, r.createElement(d.Z, { Icon: y.default, actionText: g().baffe39a, onClick: () => Z(f.pR.PUBLIC) }), r.createElement(d.Z, { Icon: k.default, actionText: g().je07e266, onClick: () => Z(f.pR.PRIVATE) })));
                },
                x = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, l) => {
            l.d(t, { Fo: () => s, Vo: () => m, Y_: () => o, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => g, se: () => i, w: () => a });
            var n = l(202784),
                r = l(565058);
            const a = { userId: null, userQueryId: null },
                s = n.createContext(a),
                i = () => n.useContext(s),
                o = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = n.createContext(o),
                u = () => n.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = n.createContext(d),
                p = () => n.useContext(m),
                g = (0, r.cn)(!1);
        },
        238225: (e, t, l) => {
            l.d(t, { kI: () => k, vF: () => y, m1: () => g });
            var n,
                r,
                a,
                s,
                i = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "useFetchProfileBlocks_profileExistsQuery",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "InlineFragment", selections: [a, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Z2BA99jFw6TxaJM5v7Irmg", metadata: {}, name: "useFetchProfileBlocks_profileExistsQuery", operationKind: "query", text: null },
                };
            i.hash = "159e51b19a254333fecf6035bc3245b7";
            var o = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    t = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    l = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileBlocks_profileQuery",
                        selections: [
                            {
                                alias: null,
                                args: t,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    l,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: t, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [l, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            o.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = o;
            var u = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    n = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l], storageKey: null }, n], storageKey: null }, n], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, n], storageKey: null }, n, a], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                    params: { id: "vRz7Yom7hObecKwzBRUBiQ", metadata: {}, name: "useFetchProfileBlocks_settingsQuery", operationKind: "query", text: null },
                };
            })();
            u.hash = "cb1d5a0879773e36614622dd4379b34e";
            const d = u;
            var m = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useFetchProfileBlocks_profileBlocksSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ProfileBlock",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null },
                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ProfileBlocksSlice",
                abstractKey: null,
                hash: "cfa3efa58699d441f9f70469bb096ba6",
            };
            const p = m;
            l(585488);
            const g = p,
                y = d,
                k = c;
        },
        873302: (e, t, l) => {
            l.d(t, { HM: () => g, Kh: () => m, ZU: () => d, hW: () => k, s1: () => p, uR: () => y });
            var n = l(990242),
                r = l.n(n),
                a = l(111677),
                s = l.n(a),
                i = l(520385),
                o = l(462166);
            const c = s().eb7710f1,
                u = s().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const l = e?.filter((e) => e);
                    return l
                        ? l.map((e) => {
                              const l = { ...e },
                                  n = r()(o.wJ, l),
                                  a = r()(t, n.result?.content);
                              return { __id: l.__id, id: l.id, rest_id: l.rest_id, result: { ...n.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const l = e.result?.content,
                                n = t.result?.content,
                                r = (l?.active_role ? new Date() : d(l?.end_month, l?.end_year)) ?? new Date(0),
                                a = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0);
                            if (r.getFullYear() !== a.getFullYear()) return a.getFullYear() - r.getFullYear();
                            if (r.getMonth() !== a.getMonth()) return a.getMonth() - r.getMonth();
                            const s = d(l?.start_month, l?.start_year) ?? new Date(0),
                                i = d(n?.start_month, n?.start_year) ?? new Date(0);
                            return s.getFullYear() !== i.getFullYear() ? i.getFullYear() - s.getFullYear() : i.getMonth() - s.getMonth();
                        });
                },
                g = (e, t) => {
                    let l = t.getMonth() - e.getMonth() + 1,
                        n = t.getFullYear() - e.getFullYear();
                    return l < 0 && (n--, (l += 12)), n && l ? `${c({ years: n })} ${u({ months: l })}` : n ? c({ years: n }) : l ? u({ months: l }) : "";
                },
                y = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === i.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === i.Mp.RICHTEXT)) : void 0),
                k = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        990229: (e, t, l) => {
            l.d(t, { Z: () => E });
            l(136728);
            var n = l(202784),
                r = l(107267),
                a = l(811176),
                s = l(154003),
                i = l(111677),
                o = l.n(i),
                c = l(149170),
                u = l(415506),
                d = l(443781),
                m = l(395067),
                p = l(725516);
            const g = o().j7bb1a43,
                y = o().h63a5c3c,
                k = n.createElement(c.default, null),
                f = ({ onClose: e, user: t }) => {
                    const l = (0, p.z)(),
                        s = (0, r.useHistory)(),
                        { featureSwitches: i } = (0, d.QZ)(),
                        o = () => ({
                            Icon: u.default,
                            text: g({ screenName: t.screen_name }),
                            onClick: () => {
                                e(),
                                    (() => {
                                        const e = m.C2.User;
                                        if ((0, m.Yw)(i, e)) {
                                            const n = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: t.id_str, scribeNamespace: l.contextualScribeNamespace });
                                            s.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } });
                                        } else s.push({ pathname: `/i/report/user/${t.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: l.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return n.createElement(a.Z, { items: [o()], onCloseRequested: e });
                },
                b = ({ user: e }) => {
                    const t = n.useCallback((t) => n.createElement(f, { onClose: t, user: e }), [e]),
                        l = n.useMemo(() => ({ label: y }), []);
                    return n.createElement(s.ZP, { "aria-label": y, hoverLabel: l, icon: k, renderMenu: t, type: "primaryOutlined" });
                },
                E = n.memo(b);
        },
        695431: (e, t, l) => {
            l.d(t, { Z: () => m });
            var n = l(71620),
                r = l(668214),
                a = l(390387),
                s = l(919022);
            const i = (e, t) => t.match.params.screenName || "",
                o = (e, t) => s.ZP.selectIsUserNotFound(e, i(0, t)),
                c = (e, t) => s.ZP.selectIsUserSuspended(e, i(0, t)),
                u = (e, t) => s.ZP.selectUserSuspendMessage(e, i(0, t)),
                d = (e, t) => s.ZP.selectByScreenName(e, i(0, t)),
                m = (0, r.Z)()
                    .propsFromState(() => ({ isNotFound: o, isSuspended: c, suspendMessage: u, screenName: i, user: d, viewerUserId: a._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, n.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: s.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, t, l) => {
            l.r(t), l.d(t, { default: () => U });
            var n = l(807896),
                r = l(202784),
                a = l(107267),
                s = l(154003),
                i = l(718e3),
                o = l(785813),
                c = l(825495),
                u = l(252021),
                d = l(736063),
                m = l(666670),
                p = l(72130),
                g = l(238225),
                y = l(535338),
                k = l(416699),
                f = l(484163),
                b = l(972796),
                E = l(21437),
                _ = l(220544),
                h = l(695431),
                Z = l(990229),
                F = (l(571372), l(301503)),
                v = l(325686),
                x = l(277660),
                I = l.n(x),
                S = l(989272),
                w = l(524496),
                P = l(392237),
                C = l(187669),
                T = l(949626),
                B = l(478414),
                N = l(520385);
            const R = ({ profileBlocksRef: e }) => {
                    const t = I()(g.m1, e),
                        l = t?.items?.find((e) => e?.block_type === N.Mp.RICHTEXT),
                        n = l?.data?.value || "",
                        a = r.useMemo(() => {
                            try {
                                const e = JSON.parse(n);
                                if (!e.entityMap || !e.blocks) throw new Error("Malformed RawDraftContentState");
                                return e;
                            } catch (e) {}
                        }, [n]);
                    return (
                        (0, C.q)(() => {
                            (0, S.fH)((0, B.yW)(B.Hx, B.K), B.Hx);
                        }),
                        r.createElement(v.Z, { style: K.root }, a && (0, F.convertFromRaw)(a).hasText() ? r.createElement(T.Z, { className: B.Hx }, r.createElement(v.Z, { style: K.richText }, r.createElement(w.Z, { contentState: a, paragraphFontSizeOverride: B.K.paragraphFontSize }))) : null)
                    );
                },
                K = P.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                L = r.memo(R),
                M = ({ analytics: e, hasProfileBlocks: t, profileBlocksRef: l, screenName: n, user: d, viewerUserId: m }) => {
                    const g = (0, a.useHistory)();
                    r.useEffect(() => {
                        d?.id_str && e.scribe({ ...(0, p.Zi)(d?.id_str, { version: 1 }) });
                    }, [e, d?.id_str]);
                    const y = r.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return r.createElement(u.Z, { backLocation: `/${n}`, history: g, primaryContent: d ? (t ? r.createElement(L, { profileBlocksRef: l }) : r.createElement(k.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: n })) : null, rightControl: d?.id_str === m ? r.createElement(s.ZP, { link: "/settings/bio", onClick: y, size: "xSmall", type: "primaryOutlined" }, "Edit") : d ? r.createElement(Z.Z, { user: d }) : null, sidebarContent: r.createElement(i.Z, null), subtitle: `@${n}`, title: (0, o.Z)(d), titleIconCell: (0, c.Z)(d) });
                },
                D = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: l } = (0, y.p)(g.kI, { screenName: t }),
                        a = l?.result?.profile_blocks,
                        s = !!l?.result?.has_profile_blocks;
                    return t && a ? r.createElement(M, (0, n.Z)({ hasProfileBlocks: s, profileBlocksRef: a }, e)) : null;
                },
                H = { context: "EXTENDED_USER_PROFILE" },
                U = (0, h.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: l, isNotFound: n, isSuspended: a, screenName: s, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        r.useEffect(() => {
                            s && l(s).catch(t(m.F));
                        }, [t, l, s]),
                        s && o ? (a ? r.createElement(_.i, { screenName: s, suspendMessage: i }) : o.blocked_by ? r.createElement(b.T, { screenName: s }) : !o.protected || (o && c === o.id_str) || o.following ? (n ? r.createElement(f.Y, { screenName: s }) : r.createElement(d.H, { errorConfig: H }, r.createElement(D, e))) : r.createElement(E.X, { screenName: s })) : null
                    );
                });
        },
        806208: (e, t, l) => {
            l.r(t), l.d(t, { default: () => L });
            var n = l(807896),
                r = l(202784),
                a = l(325686),
                s = l(277660),
                i = l.n(s),
                o = l(154003),
                c = l(392237),
                u = l(718e3),
                d = l(991617),
                m = l(785813),
                p = l(825495),
                g = l(485822),
                y = l(164349),
                k = l(252021),
                f = l(736063),
                b = l(666670),
                E = l(72130),
                _ = l(520385),
                h = l(462166),
                Z = l(873302),
                F = l(535338),
                v = l(416699),
                x = l(484163),
                I = l(972796),
                S = l(21437),
                w = l(220544),
                P = l(695431),
                C = l(990229);
            const T = ({ analytics: e, expandedProfile: t, hasProfileBlocks: l, history: n, screenName: s, user: i, viewerUserId: c }) => {
                    r.useEffect(() => {
                        i?.id_str && e.scribe({ ...(0, E.Zi)(i?.id_str, { version: 2 }) });
                    }, [e, i?.id_str]);
                    const f = t?.result?.profile_sections?.items_results,
                        b = (0, Z.uR)(f, _.NB.ABOUT),
                        h = (0, Z.uR)(f, _.NB.WORK_EXPERIENCE),
                        F = (0, Z.hW)(b),
                        x = (0, Z.hW)(h),
                        I = r.useCallback(() => {
                            e.scribe({ ...(0, E.he)({ version: 2 }) });
                        }, [e]);
                    return r.createElement(k.Z, { backLocation: `/${s}`, history: n, primaryContent: i ? (l ? r.createElement(a.Z, { style: B.root }, r.createElement(d.Fo.Provider, { value: { userId: c, userQueryId: i.id_str } }, r.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: F, hasWorkHistorySection: x, sectionId: b?.rest_id?.section_id, sectionType: _.NB.ABOUT, blockCount: b?.result?.profile_blocks?.total_count || 0, sectionQueryId: b?.id, sectionVisibility: b?.result?.core?.visibility } }, r.createElement(g.Z, { isEditing: !1, section: b })), r.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: F, hasWorkHistorySection: x, sectionId: h?.rest_id?.section_id, sectionType: _.NB.WORK_EXPERIENCE, blockCount: h?.result?.profile_blocks?.total_count || 0, sectionQueryId: h?.id, sectionVisibility: h?.result?.core?.visibility } }, r.createElement(y.Z, { isEditing: !1, section: h })))) : r.createElement(v.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: s })) : null, rightControl: i?.id_str === c ? r.createElement(o.ZP, { link: "/settings/bio", onClick: I, size: "xSmall", type: "primaryOutlined" }, "Edit") : i ? r.createElement(C.Z, { user: i }) : null, sidebarContent: r.createElement(u.Z, null), subtitle: `@${s}`, title: (0, m.Z)(i), titleIconCell: (0, p.Z)(i) });
                },
                B = c.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                N = ({ expandedProfile: e, hasProfileBlocks: t, ...l }) => {
                    const a = i()(h.cH, e);
                    return a ? r.createElement(T, (0, n.Z)({ expandedProfile: a, hasProfileBlocks: t }, l)) : null;
                },
                R = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: l } = (0, F.p)(h.Sp, { screenName: t }),
                        a = !!l?.result?.has_profile_blocks,
                        s = l?.result?.expanded_profile_results;
                    return t && s ? r.createElement(N, (0, n.Z)({ expandedProfile: s, hasProfileBlocks: a }, e)) : null;
                },
                K = { context: "EXTENDED_USER_PROFILE_V2" },
                L = (0, P.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: l, isNotFound: n, isSuspended: a, screenName: s, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        r.useEffect(() => {
                            s && l(s).catch(t(b.F));
                        }, [t, l, s]),
                        s && o ? (a ? r.createElement(w.i, { screenName: s, suspendMessage: i }) : o.blocked_by ? r.createElement(I.T, { screenName: s }) : !o.protected || (o && c === o.id_str) || o.following ? (n ? r.createElement(x.Y, { screenName: s }) : r.createElement(f.H, { errorConfig: K }, r.createElement(R, e))) : r.createElement(S.X, { screenName: s })) : null
                    );
                });
        },
        416699: (e, t, l) => {
            l.d(t, { Z: () => g });
            var n = l(807896),
                r = l(202784),
                a = l(457311),
                s = l(392237),
                i = l(668214),
                o = l(919022);
            const c = (e, t) => !!t.screenName && o.ZP.selectIsUserSuspended(e, t.screenName),
                u = (e, t) => {
                    const l = t.screenName ? o.ZP.selectByScreenName(e, t.screenName) : void 0;
                    return l?.blocking;
                },
                d = (0, i.Z)().propsFromState(() => ({ isBlocking: u, isSuspended: c })),
                m = (e) => {
                    const { isBlocking: t, isSuspended: l, screenName: s, ...i } = e;
                    return r.createElement(r.Fragment, null, null, r.createElement(a.Z, (0, n.Z)({}, i, { style: [p.root, p.verticalPadding] })));
                },
                p = s.default.create((e) => ({ root: { backgroundColor: s.default.theme.colors.cellBackground, paddingHorizontal: s.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: s.default.theme.spaces.space40 } })),
                g = d(r.memo(m));
        },
        484163: (e, t, l) => {
            l.d(t, { Y: () => c, Z: () => u });
            var n = l(202784),
                r = l(111677),
                a = l.n(r),
                s = l(416699);
            const i = a().c9a1cb5e,
                o = a().e7b201de,
                c = (e) => {
                    const { screenName: t } = e;
                    return n.createElement(s.Z, { header: i, message: o, screenName: t });
                },
                u = n.memo(c);
        },
        972796: (e, t, l) => {
            l.d(t, { T: () => d, Z: () => m });
            var n = l(202784),
                r = l(688715),
                a = l(731708),
                s = l(111677),
                i = l.n(s),
                o = l(416699);
            const c = i().ica87fde,
                u = (0, r.ju)("https://support.x.com/articles/20172060"),
                d = (e) => {
                    const { screenName: t } = e,
                        l = n.useMemo(() => n.createElement(i().I18NFormatMessage, { $i18n: "e6264621", screenName: t }, n.createElement(a.ZP, { link: u }, i().c7ec6faf)), [t]);
                    return n.createElement(o.Z, { header: c, message: l, screenName: t });
                },
                m = n.memo(d);
        },
        21437: (e, t, l) => {
            l.d(t, { X: () => d, Z: () => m });
            var n = l(202784),
                r = l(688715),
                a = l(731708),
                s = l(111677),
                i = l.n(s),
                o = l(416699);
            const c = i().bd598c70,
                u = (0, r.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: t } = e,
                        l = n.useMemo(() => n.createElement(i().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, n.createElement(a.ZP, { link: u }, i().e617164b)), [t]);
                    return n.createElement(o.Z, { header: c, message: l, screenName: t });
                },
                m = n.memo(d);
        },
        220544: (e, t, l) => {
            l.d(t, { Z: () => m, i: () => d });
            var n = l(202784),
                r = l(731708),
                a = l(111677),
                s = l.n(a),
                i = l(686689),
                o = l(416699);
            const c = s().g8475f82,
                u = n.createElement(s().I18NFormatMessage, { $i18n: "da9d52d7" }, n.createElement(r.ZP, { link: "https://support.x.com/articles/18311" }, s().j5e1cf59)),
                d = (e) => {
                    const { screenName: t, suspendHeader: l, suspendMessage: r } = e,
                        a = l ? n.createElement(i.Z, { entities: l.entities, rtl: l.rtl, text: l.text }) : c,
                        s = r ? n.createElement(i.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : u;
                    return n.createElement(o.Z, { header: a, message: s, screenName: t });
                },
                m = n.memo(d);
        },
        524496: (e, t, l) => {
            l.d(t, { Z: () => _ });
            l(136728);
            var n = l(202784),
                r = l(301503),
                a = l(325686),
                s = l(595088),
                i = l(516951),
                o = l(731708),
                c = l(779802),
                u = l(537392),
                d = l(989272),
                m = l(925873),
                p = l(202253),
                g = l(786475),
                y = l(392237),
                k = l(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: n.createElement(o.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: n.createElement(o.ZP, null) } },
                b = (0, s.Z)(f).reduce((e, [t, l]) => e.set(t, l), r.DefaultDraftBlockRenderMap);
            let E = !1;
            const _ = n.memo(function (e) {
                    const { componentByType: t, contentState: l, onScribeEvent: s, paragraphFontSizeOverride: o } = e;
                    n.useEffect(() => {
                        E || (d.fH(k.c, k.n), (E = !0));
                    }, []);
                    const y = [(0, p.ez)(s, o), p.aF, p.RU];
                    e.disable_entityLinkDecorator || y.push((0, p.NA)(s, o));
                    const f = m.Z.initEditorState(l, { decorators: y });
                    let _ = i.Z;
                    return (
                        t &&
                            (_ = (e) => {
                                const l = e.getType();
                                return t[l] || null;
                            }),
                        n.createElement(u.ZP, null, ({ containerWidth: e }) => n.createElement(a.Z, { style: h.fontFamily }, n.createElement(r.Editor, { blockRenderMap: b, blockRendererFn: _, blockStyleFn: (0, c.su)(g.Z.isNarrowScreenWidth(e)), editorState: f, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                h = y.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.0240f02a.js.map
