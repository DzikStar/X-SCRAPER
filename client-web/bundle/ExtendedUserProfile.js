"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ExtendedUserProfile"],
    {
        163015: (e, t, n) => {
            n.d(t, { Z: () => s });
            var l,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (l = [
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: r },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            a.hash = "8915833d692c94a47b0fcb2939731579";
            const s = a;
        },
        876242: (e, t, n) => {
            n.d(t, { Z: () => s });
            var l,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteProfileBlockMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "delete_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: r },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            a.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const s = a;
        },
        96702: (e, t, n) => {
            n.d(t, { Z: () => U });
            var l = n(202784),
                r = n(325686),
                a = n(392237),
                s = n(520385),
                i = n(991617),
                o = n(516951),
                c = n(381335),
                u = n(154003),
                d = n(885724);
            const m = l.createElement(d.default, null),
                p = a.default.create((e) => ({ editButton: { height: "auto" } })),
                g = () => {
                    const { blockId: e } = (0, i._L)();
                    return e ? l.createElement(r.Z, { style: p.editButton }, l.createElement(u.ZP, { icon: m, link: `/settings/bio/edit/${e}`, size: "xSmall", type: "primaryText" })) : null;
                };
            var y = n(301503),
                k = n(989272),
                f = n(524496),
                b = n(925873),
                E = n(731708),
                _ = n(757483),
                h = n(187669),
                Z = n(478414),
                v = n(949626);
            const F = ({ content: e }) => (
                    (0, h.q)(() => {
                        (0, k.fH)((0, Z.yW)(Z.Hx, Z.K), Z.Hx);
                    }),
                    l.createElement(l.Fragment, null, e && e.hasText() && l.createElement(v.Z, { className: Z.Hx }, l.createElement(r.Z, { style: x.richText }, l.createElement(f.Z, { contentState: (0, y.convertToRaw)(e) }))))
                ),
                x = a.default.create((e) => {
                    const t = _.Z.hexToCss(e.colors.gray0, 0),
                        n = _.Z.hexToCss(e.colors.gray0, 0.9);
                    return { richText: { color: e.colors.text }, link: { cursor: "pointer", marginTop: e.spaces.space8 }, previewContainer: { overflow: "hidden" }, fade: { position: "absolute", top: "50%", bottom: 0, start: `-${e.spaces.space16}`, end: `-${e.spaces.space16}`, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` } };
                }),
                I = ({ content: e, previewHeight: t, shouldTruncate: n = !0 }) => {
                    const [a, s] = l.useState(0),
                        [i, o] = l.useState(0),
                        [c, u] = l.useState(!n),
                        d = l.useRef(null);
                    l.useEffect(() => {
                        d.current && 0 === a && s(d.current.offsetHeight);
                    }, [a]);
                    const m = l.useMemo(() => {
                            const t = b.Z.getContentStateFromRaw(e);
                            return t ? (0, y.convertFromRaw)(t) : null;
                        }, [e]),
                        p = l.useMemo(() => n && a > t, [n, t, a]);
                    return m && m.hasText()
                        ? l.createElement(
                              r.Z,
                              { style: { flex: 1 } },
                              l.createElement(
                                  r.Z,
                                  {
                                      onLayout: () => {
                                          d.current && d.current.offsetHeight !== i && o(d.current.offsetHeight);
                                      },
                                      ref: d,
                                      style: p && !c ? { ...x.previewContainer, maxHeight: t } : void 0,
                                  },
                                  l.createElement(F, { content: m }),
                                  p && !c ? l.createElement(r.Z, { style: x.fade }) : null,
                              ),
                              p && l.createElement(E.ZP, { color: "link", onPress: () => u(!c), size: "subtext1", style: x.link, withInteractiveStyling: !0 }, c ? "Show less" : "Show more"),
                          )
                        : null;
                },
                S = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 } })),
                P = ({ block: e, isEditing: t }) => {
                    const { hasWorkHistorySection: n, sectionType: a } = (0, i.eF)(),
                        u = e.result?.content,
                        d = l.useMemo(() => a === s.NB.ABOUT && n, [n, a]);
                    return l.createElement(r.Z, { style: { ...S.row, ...(t ? { justifyContent: "space-between" } : {}) } }, l.createElement(I, { content: u?.value, previewHeight: 0.4 * window.innerHeight, shouldTruncate: d }), t ? l.createElement(r.Z, { style: S.row }, l.createElement(g, null), l.createElement(c.Z, { onCompleted: o.Z, useIconButton: !0 })) : null);
                };
            var C = n(470397),
                w = n(823161),
                T = n(332920),
                B = n.n(T),
                R = n(873302);
            const N = B().a2f2faab,
                K = ({ endMonth: e, endYear: t, isCurrent: n, startMonth: r, startYear: a }) => {
                    const s = (0, R.ZU)(r, a),
                        i = (0, R.ZU)(e, t);
                    return s ? l.createElement(C.Z, null, l.createElement(B().I18NFormatMessage, { $i18n: "bab4ce51", start: N(s), end: n ? "Present" : i ? N(i) : "" }), l.createElement(E.ZP, null, (0, R.HM)(s, i || new Date()))) : null;
                },
                L = a.default.create((e) => ({ row: { flexDirection: "row", gap: e.spaces.space8 }, workInfo: { gap: e.spaces.space4, flex: 1 } })),
                M = ({ block: e, isEditing: t }) => {
                    const n = e?.result?.content,
                        a = n?.company_profile_results?.result;
                    return n ? l.createElement(r.Z, { style: { ...L.row, ...(t ? { justifyContent: "space-between" } : {}) } }, l.createElement(r.Z, { style: { ...L.row, flex: 1 } }, l.createElement(w.default, { shape: "square", size: "large", uri: a?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), l.createElement(r.Z, { style: L.workInfo }, l.createElement(E.ZP, { size: "subtext1", weight: "bold" }, n.title), l.createElement(C.Z, null, a?.core?.name || n.company_profile_name ? l.createElement(E.ZP, { color: "gray700", size: "subtext1" }, a?.core?.name || n.company_profile_name) : null, n.location_text ? l.createElement(E.ZP, { color: "gray700", size: "subtext1" }, n.location_text) : null), l.createElement(E.ZP, { color: "gray700", size: "subtext1" }, l.createElement(K, { endMonth: n.end_month, endYear: n.end_year, isCurrent: !!n.active_role, startMonth: n.start_month, startYear: n.start_year })), l.createElement(I, { content: n.description, previewHeight: 120, shouldTruncate: !0 }))), t ? l.createElement(r.Z, { style: L.row }, l.createElement(g, null), l.createElement(c.Z, { onCompleted: o.Z, useIconButton: !0 })) : null) : null;
                },
                D = ({ block: e, blockId: t, isEditing: n = !1 }) => {
                    const r = l.useCallback(() => {
                        switch (e?.result?.core?.block_type) {
                            case s.Mp.RICHTEXT:
                                return l.createElement(P, { block: e, isEditing: n });
                            case s.Mp.WORK_HISTORY:
                                return l.createElement(M, { block: e, isEditing: n });
                            default:
                                return null;
                        }
                    }, [e, n]);
                    return e ? l.createElement(i.Vo.Provider, { value: { ...i.dq, blockId: t, blockQueryId: e.__id } }, r()) : null;
                },
                H = a.default.create((e) => ({ blockGroup: { flexDirection: "row" }, block: { flex: 1, padding: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.navigationBackground, borderBottomStyle: "solid", backgroundColor: e.colors.gray0, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                U = ({ blocks: e, isEditing: t }) =>
                    e
                        ? l.createElement(
                              r.Z,
                              null,
                              e.map((n, a) => {
                                  if (!n) return null;
                                  const s = n.rest_id.block_id;
                                  if (!s || !n?.result?.core) return null;
                                  return l.createElement(
                                      r.Z,
                                      { key: s, style: H.blockGroup },
                                      l.createElement(
                                          r.Z,
                                          {
                                              style: (() => {
                                                  const t = H.block;
                                                  return 1 === e.length ? t : 0 === a ? { ...t, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a > 0 && a < e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0, borderBottomStartRadius: 0, borderBottomEndRadius: 0 } : a === e.length - 1 ? { ...t, borderTopStartRadius: 0, borderTopEndRadius: 0 } : t;
                                              })(),
                                          },
                                          l.createElement(D, { block: n, blockId: s, isEditing: t }),
                                      ),
                                  );
                              }),
                          )
                        : null;
        },
        512547: (e, t, n) => {
            n.d(t, { Z: () => f });
            var l = n(202784),
                r = n(190286),
                a = n(332920),
                s = n.n(a),
                i = n(782642),
                o = n(72130),
                c = n(725516),
                u = n(876242),
                d = (n(585488), n(351743)),
                m = n.n(d);
            const p = u.Z,
                g = () => {
                    const [e, t] = m()(p);
                    return [
                        l.useCallback(
                            (t) => {
                                e(t);
                            },
                            [e],
                        ),
                        t,
                    ];
                },
                y = s().g9677c6e,
                k = s().a2b8c54c,
                f = ({ blockId: e, headline: t, onClose: n, onCompleted: a, queryId: s, subtext: u, userId: d }) => {
                    const m = (0, i.p)(),
                        p = (0, c.z)(),
                        [f, b] = g(),
                        E = l.useCallback(() => {
                            n();
                        }, [n]),
                        _ = l.useCallback(() => {
                            p.scribe({ ...(0, o.MA)("delete_block_btn", "click") }),
                                f({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, t) => {
                                        s && e.delete(s);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: k }), n(), a && a());
                                    },
                                });
                        }, [m, p, e, f, n, a, s, d]);
                    return l.createElement(r.Z, { confirmButtonDisabled: b, confirmButtonLabel: y, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: t, onCancel: E, onConfirm: _, text: u });
                };
        },
        381335: (e, t, n) => {
            n.d(t, { Z: () => k });
            var l = n(202784),
                r = n(325686),
                a = n(154003),
                s = n(392237),
                i = n(332920),
                o = n.n(i),
                c = n(607127),
                u = n(991617),
                d = n(512547);
            const m = o().h6a724ac,
                p = o().f94aacae,
                g = o().d96cf7ce,
                y = s.default.create((e) => ({ iconButton: { height: "auto" } })),
                k = ({ onCompleted: e, useIconButton: t }) => {
                    const { blockCount: n, sectionQueryId: s } = (0, u.eF)(),
                        { blockId: i, blockQueryId: o } = (0, u._L)(),
                        { userId: k, userQueryId: f } = (0, u.se)(),
                        [b, E] = l.useState(!1),
                        _ = l.useCallback(() => {
                            E(!1);
                        }, []),
                        h = l.useCallback(() => {
                            E(!0);
                        }, []);
                    return l.createElement(l.Fragment, null, t ? l.createElement(r.Z, { style: y.iconButton }, l.createElement(a.ZP, { disabled: !i || !k, icon: l.createElement(c.default, null), onClick: h, size: "xSmall", type: "destructiveText" })) : l.createElement(a.ZP, { disabled: !i || !k, onClick: h, size: "large", type: "destructiveText" }, g), b && i && k ? l.createElement(d.Z, { blockId: i, headline: m, onClose: _, onCompleted: e, queryId: n > 1 ? o : s || f, subtext: p, userId: k }) : null);
                };
        },
        785813: (e, t, n) => {
            n.d(t, { Z: () => a });
            var l = n(202784),
                r = n(366635);
            const a = (e) => (e ? l.createElement(r.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, t, n) => {
            n.d(t, { Z: () => a });
            var l = n(202784),
                r = n(823161);
            const a = (e) => {
                if (!e) return null;
                const t = "Square" === e?.profile_image_shape ? "square" : "circle";
                return l.createElement(r.default, { shape: t, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        485822: (e, t, n) => {
            n.d(t, { Z: () => x });
            n(136728);
            var l = n(202784),
                r = n(325686),
                a = n(277660),
                s = n.n(a),
                i = n(107267),
                o = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(332920),
                p = n.n(m),
                g = n(982866),
                y = n(952793),
                k = n(462166),
                f = n(873302),
                b = n(96702),
                E = n(991617),
                _ = n(736993);
            const h = p().b721eb38,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, E.eF)(),
                        { userId: s, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        Z = l.useCallback(() => {
                            p.push("/settings/bio/new/about");
                        }, [p]),
                        F = (0, y.hC)("xprofile_section_visibility_enabled"),
                        x = o.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        S = (0, f.Kh)(e?.slice(), k.GL);
                    return l.createElement(r.Z, { style: v.root }, l.createElement(r.Z, { style: v.header }, l.createElement(u.ZP, { size: "title4", weight: "bold" }, h), F && I && l.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(a) } }, l.createElement(_.K3, { style: v.visibilityIcon, visibility: a })), F && t && l.createElement(_.ZP, { currentVisibility: a, sectionId: n })), l.createElement(r.Z, null, e?.length ? l.createElement(b.Z, { blocks: S, isEditing: t }) : l.createElement(l.Fragment, null, t ? l.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: v.container }, l.createElement(u.ZP, null, "Tell us about yourself"), l.createElement(g.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, visibilityIcon: { color: e.colors.gray600 } })),
                F = ({ isEditing: e = !1, section: t }) => {
                    const n = s()(k.C_, t),
                        r = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? l.createElement(Z, { blocks: r, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? l.createElement(F, { isEditing: e, section: t }) : l.createElement(Z, { isEditing: e }));
        },
        164349: (e, t, n) => {
            n.d(t, { Z: () => x });
            n(136728);
            var l = n(202784),
                r = n(325686),
                a = n(277660),
                s = n.n(a),
                i = n(107267),
                o = n(58881),
                c = n(392237),
                u = n(731708),
                d = n(530732),
                m = n(332920),
                p = n.n(m),
                g = n(982866),
                y = n(952793),
                k = n(462166),
                f = n(873302),
                b = n(96702),
                E = n(991617),
                _ = n(736993);
            const h = p().a622dfcc,
                Z = ({ blocks: e, isEditing: t = !1 }) => {
                    const { sectionId: n, sectionVisibility: a } = (0, E.eF)(),
                        { userId: s, userQueryId: m } = (0, E.se)(),
                        p = (0, i.useHistory)(),
                        Z = l.useCallback(() => {
                            n ? p.push(`/settings/bio/new/${n}/work_experience`) : p.push("/settings/bio/new/work_experience");
                        }, [p, n]),
                        F = (0, y.hC)("xprofile_section_visibility_enabled"),
                        x = o.Z.generate({ backgroundColor: "transparent", color: c.default.theme.colors.text });
                    if (!t && !e?.length) return null;
                    const I = s === m,
                        S = (0, f.Kh)(e?.slice(), k.lw),
                        P = (0, f.s1)(S);
                    return l.createElement(r.Z, { style: v.root }, l.createElement(r.Z, { style: v.headerSection }, l.createElement(u.ZP, { size: "title4", weight: "bold" }, h), F && I && l.createElement(u.ZP, { hoverLabel: { label: (0, _.Q)(a) } }, l.createElement(_.K3, { style: v.visibilityIcon, visibility: a })), F && t && l.createElement(_.ZP, { currentVisibility: a, sectionId: n })), l.createElement(r.Z, { style: v.blocksList }, P && P.length > 0 ? l.createElement(b.Z, { blocks: P, isEditing: t }) : null, l.createElement(l.Fragment, null, t ? l.createElement(d.Z, { interactiveStyles: x, onClick: Z, style: v.container }, l.createElement(u.ZP, null, "Add experience"), l.createElement(g.default, null)) : null)));
                },
                v = c.default.create((e) => ({ root: { padding: e.spaces.space16, gap: e.spaces.space8 }, container: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, blocksList: { gap: e.spaces.space8 }, visibilityIcon: { color: e.colors.gray600 } })),
                F = ({ isEditing: e = !1, section: t }) => {
                    const n = s()(k.C_, t),
                        r = n?.result?.profile_blocks?.items_results;
                    return n?.result?.id ? l.createElement(Z, { blocks: r, isEditing: e }) : null;
                },
                x = ({ isEditing: e = !1, section: t }) => (t && t.id ? l.createElement(F, { isEditing: e, section: t }) : l.createElement(Z, { isEditing: e }));
        },
        736993: (e, t, n) => {
            n.d(t, { K3: () => _, Q: () => v, ZP: () => F });
            var l = n(163015),
                r = n(202784),
                a = n(400752),
                s = n(325686),
                i = (n(585488), n(351743)),
                o = n.n(i),
                c = n(731708),
                u = n(797553),
                d = n(143670),
                m = n(392237),
                p = n(332920),
                g = n.n(p),
                y = n(14284),
                k = n(468670),
                f = n(520385),
                b = n(991617);
            const E = l.Z,
                _ = ({ style: e, visibility: t }) => (t === f.pR.PUBLIC ? r.createElement(y.default, { style: e }) : t === f.pR.PRIVATE ? r.createElement(k.default, { style: e }) : void r.Fragment),
                h = g().baffe39a,
                Z = g().je07e266,
                v = (e) => (e === f.pR.PUBLIC ? h : e === f.pR.PRIVATE ? Z : ""),
                F = ({ currentVisibility: e, sectionId: t }) => {
                    const n = (0, a.b9)(b.j7),
                        [l, i] = r.useState(e ?? f.pR.PUBLIC),
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
                                            n(!0);
                                        },
                                    }));
                            },
                            [h, t, n],
                        );
                    return r.createElement(s.Z, null, r.createElement(s.Z, { onClick: () => p(!0), style: x.target }, r.createElement(_, { style: x.icon, visibility: l }), r.createElement(c.ZP, { style: x.targetText }, v(l))), m && r.createElement(u.default, { isFixed: !0, onDismiss: () => p(!1), preferredHorizontalOrientation: "right", preferredVerticalOrientation: "down" }, r.createElement(d.Z, { Icon: y.default, actionText: g().baffe39a, onClick: () => Z(f.pR.PUBLIC) }), r.createElement(d.Z, { Icon: k.default, actionText: g().je07e266, onClick: () => Z(f.pR.PRIVATE) })));
                },
                x = m.default.create((e) => ({ target: { flex: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space4, cursor: "pointer" }, targetText: { marginStart: e.spaces.space2, marginEnd: e.spaces.space8, color: e.colors.link }, icon: { color: e.colors.link } }));
        },
        991617: (e, t, n) => {
            n.d(t, { Fo: () => s, Vo: () => m, Y_: () => o, _L: () => p, bQ: () => c, dq: () => d, eF: () => u, j7: () => g, se: () => i, w: () => a });
            var l = n(202784),
                r = n(565058);
            const a = { userId: null, userQueryId: null },
                s = l.createContext(a),
                i = () => l.useContext(s),
                o = { blockCount: 0, hasAboutSection: !1, hasWorkHistorySection: !1, sectionId: null, sectionType: null, sectionQueryId: null, sectionVisibility: null },
                c = l.createContext(o),
                u = () => l.useContext(c),
                d = { blockId: null, blockQueryId: null, blocksQueryId: null },
                m = l.createContext(d),
                p = () => l.useContext(m),
                g = (0, r.cn)(!1);
        },
        72130: (e, t, n) => {
            n.d(t, { Ak: () => i, MA: () => s, Rz: () => l, Zi: () => a, he: () => r });
            const l = () => ({ component: "extended_profile_settings", action: "click" }),
                r = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                a = (e, t) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...t } }),
                s = (e, t, n) => ({ component: "rich_text_editor", element: e, action: t, data: n }),
                i = (e, t, n) => ({ component: "work_history_editor", element: e, action: t, data: { version: 2, ...n } });
        },
        520385: (e, t, n) => {
            n.d(t, { Mp: () => r, NB: () => a, P2: () => s, j3: () => l, pR: () => i });
            const l = 5e4,
                r = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                a = (r.RICHTEXT, r.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                s = { about: a.ABOUT, work_experience: a.WORK_EXPERIENCE },
                i = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        238225: (e, t, n) => {
            n.d(t, { kI: () => k, vF: () => y, m1: () => g });
            var l,
                r,
                a,
                s,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
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
                        argumentDefinitions: l,
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
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
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
                                                    n,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ProfileBlocksSlice",
                                                        kind: "LinkedField",
                                                        name: "profile_blocks",
                                                        plural: !1,
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" },
                                                            { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l], storageKey: null },
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
                    operation: { argumentDefinitions: e, kind: "Operation", name: "useFetchProfileBlocks_profileQuery", selections: [{ alias: null, args: t, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [l, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }] },
                    params: { id: "Azv1m7WiLnbn36nNCk7l0Q", metadata: {}, name: "useFetchProfileBlocks_profileQuery", operationKind: "query", text: null },
                };
            })();
            o.hash = "16584b716a8d455d79eefb53731f55ee";
            const c = o;
            var u = (function () {
                var e = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null },
                    l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileBlocks_profileBlocksSlice" }, { alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n], storageKey: null }, l], storageKey: null }, l], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useFetchProfileBlocks_settingsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ProfileBlocksSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [{ alias: null, args: null, concreteType: "ProfileBlock", kind: "LinkedField", name: "items", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "data", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], storageKey: null }], storageKey: null }, l], storageKey: null }, l, a], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
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
            n(585488);
            const g = p,
                y = d,
                k = c;
        },
        873302: (e, t, n) => {
            n.d(t, { HM: () => g, Kh: () => m, ZU: () => d, hW: () => k, s1: () => p, uR: () => y });
            var l = n(990242),
                r = n.n(l),
                a = n(332920),
                s = n.n(a),
                i = n(520385),
                o = n(462166);
            const c = s().eb7710f1,
                u = s().bfc38bb5,
                d = (e, t) => (e && t ? new Date(t, e - 1) : null),
                m = (e, t) => {
                    if (!e) return [];
                    const n = e?.filter((e) => e);
                    return n
                        ? n.map((e) => {
                              const n = { ...e },
                                  l = r()(o.wJ, n),
                                  a = r()(t, l.result?.content);
                              return { __id: n.__id, id: n.id, rest_id: n.rest_id, result: { ...l.result, content: a } };
                          })
                        : [];
                },
                p = (e) => {
                    if (e)
                        return e.sort((e, t) => {
                            const n = e.result?.content,
                                l = t.result?.content,
                                r = (n?.active_role ? new Date() : d(n?.end_month, n?.end_year)) ?? new Date(0),
                                a = (l?.active_role ? new Date() : d(l?.end_month, l?.end_year)) ?? new Date(0);
                            if (r.getFullYear() !== a.getFullYear()) return a.getFullYear() - r.getFullYear();
                            if (r.getMonth() !== a.getMonth()) return a.getMonth() - r.getMonth();
                            const s = d(n?.start_month, n?.start_year) ?? new Date(0),
                                i = d(l?.start_month, l?.start_year) ?? new Date(0);
                            return s.getFullYear() !== i.getFullYear() ? i.getFullYear() - s.getFullYear() : i.getMonth() - s.getMonth();
                        });
                },
                g = (e, t) => {
                    let n = t.getMonth() - e.getMonth() + 1,
                        l = t.getFullYear() - e.getFullYear();
                    return n < 0 && (l--, (n += 12)), l && n ? `${c({ years: l })} ${u({ months: n })}` : l ? c({ years: l }) : n ? u({ months: n }) : "";
                },
                y = (e, t) => e?.find((e) => e?.result?.core?.section_type === t) || (t === i.NB.ABOUT ? e?.find((e) => !!(e?.result?.profile_blocks?.items_results || []).find((e) => e?.result?.core?.block_type === i.Mp.RICHTEXT)) : void 0),
                k = (e) => !!e?.result?.profile_blocks?.total_count;
        },
        990229: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var l = n(202784),
                r = n(107267),
                a = n(811176),
                s = n(154003),
                i = n(332920),
                o = n.n(i),
                c = n(149170),
                u = n(415506),
                d = n(443781),
                m = n(395067),
                p = n(725516);
            const g = o().j7bb1a43,
                y = o().h63a5c3c,
                k = l.createElement(c.default, null),
                f = ({ onClose: e, user: t }) => {
                    const n = (0, p.z)(),
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
                                            const l = (0, m.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: e, reportedUser: t.id_str, scribeNamespace: n.contextualScribeNamespace });
                                            s.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(l) } } });
                                        } else s.push({ pathname: `/i/report/user/${t.id_str}`, state: { clientReferer: window.location.pathname, scribeNamespace: n.contextualScribeNamespace } });
                                    })();
                            },
                        });
                    return l.createElement(a.Z, { items: [o()], onCloseRequested: e });
                },
                b = ({ user: e }) => {
                    const t = l.useCallback((t) => l.createElement(f, { onClose: t, user: e }), [e]),
                        n = l.useMemo(() => ({ label: y }), []);
                    return l.createElement(s.ZP, { "aria-label": y, hoverLabel: n, icon: k, renderMenu: t, type: "primaryOutlined" });
                },
                E = l.memo(b);
        },
        695431: (e, t, n) => {
            n.d(t, { Z: () => m });
            var l = n(71620),
                r = n(668214),
                a = n(390387),
                s = n(919022);
            const i = (e, t) => t.match.params.screenName || "",
                o = (e, t) => s.ZP.selectIsUserNotFound(e, i(0, t)),
                c = (e, t) => s.ZP.selectIsUserSuspended(e, i(0, t)),
                u = (e, t) => s.ZP.selectUserSuspendMessage(e, i(0, t)),
                d = (e, t) => s.ZP.selectByScreenName(e, i(0, t)),
                m = (0, r.Z)()
                    .propsFromState(() => ({ isNotFound: o, isSuspended: c, suspendMessage: u, screenName: i, user: d, viewerUserId: a._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, l.zr)("EXTENDED_USER_PROFILE"), fetchOneUserByScreenNameIfNeeded: s.ZP.fetchOneByScreenNameIfNeeded }))
                    .withAnalytics({ page: "user_profile_extended_profile", component: "extended_profile" });
        },
        728441: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var l = n(807896),
                r = n(202784),
                a = n(107267),
                s = n(154003),
                i = n(718e3),
                o = n(785813),
                c = n(825495),
                u = n(252021),
                d = n(736063),
                m = n(666670),
                p = n(72130),
                g = n(238225),
                y = n(535338),
                k = n(416699),
                f = n(484163),
                b = n(972796),
                E = n(21437),
                _ = n(220544),
                h = n(695431),
                Z = n(990229),
                v = (n(571372), n(301503)),
                F = n(325686),
                x = n(277660),
                I = n.n(x),
                S = n(989272),
                P = n(524496),
                C = n(392237),
                w = n(187669),
                T = n(949626),
                B = n(478414),
                R = n(520385);
            const N = ({ profileBlocksRef: e }) => {
                    const t = I()(g.m1, e),
                        n = t?.items?.find((e) => e?.block_type === R.Mp.RICHTEXT),
                        l = n?.data?.value || "",
                        a = r.useMemo(() => {
                            try {
                                const e = JSON.parse(l);
                                if (!e.entityMap || !e.blocks) throw new Error("Malformed RawDraftContentState");
                                return e;
                            } catch (e) {}
                        }, [l]);
                    return (
                        (0, w.q)(() => {
                            (0, S.fH)((0, B.yW)(B.Hx, B.K), B.Hx);
                        }),
                        r.createElement(F.Z, { style: K.root }, a && (0, v.convertFromRaw)(a).hasText() ? r.createElement(T.Z, { className: B.Hx }, r.createElement(F.Z, { style: K.richText }, r.createElement(P.Z, { contentState: a, paragraphFontSizeOverride: B.K.paragraphFontSize }))) : null)
                    );
                },
                K = C.default.create((e) => ({ root: { paddingVertical: e.spaces.space20 }, flexRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, flexCol: { display: "flex", flexDirection: "column" }, flexOne: { flex: 1 }, avatar: { width: 90, height: 90 }, richText: { color: e.colors.text, padding: e.spaces.space16 } })),
                L = r.memo(N),
                M = ({ analytics: e, hasProfileBlocks: t, profileBlocksRef: n, screenName: l, user: d, viewerUserId: m }) => {
                    const g = (0, a.useHistory)();
                    r.useEffect(() => {
                        d?.id_str && e.scribe({ ...(0, p.Zi)(d?.id_str, { version: 1 }) });
                    }, [e, d?.id_str]);
                    const y = r.useCallback(() => {
                        e.scribe({ ...(0, p.he)({ version: 1 }) });
                    }, [e]);
                    return r.createElement(u.Z, { backLocation: `/${l}`, history: g, primaryContent: d ? (t ? r.createElement(L, { profileBlocksRef: n }) : r.createElement(k.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: l })) : null, rightControl: d?.id_str === m ? r.createElement(s.ZP, { link: "/settings/bio", onClick: y, size: "xSmall", type: "primaryOutlined" }, "Edit") : d ? r.createElement(Z.Z, { user: d }) : null, sidebarContent: r.createElement(i.Z, null), subtitle: `@${l}`, title: (0, o.Z)(d), titleIconCell: (0, c.Z)(d) });
                },
                D = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: n } = (0, y.p)(g.kI, { screenName: t }),
                        a = n?.result?.profile_blocks,
                        s = !!n?.result?.has_profile_blocks;
                    return t && a ? r.createElement(M, (0, l.Z)({ hasProfileBlocks: s, profileBlocksRef: a }, e)) : null;
                },
                H = { context: "EXTENDED_USER_PROFILE" },
                U = (0, h.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: n, isNotFound: l, isSuspended: a, screenName: s, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        r.useEffect(() => {
                            s && n(s).catch(t(m.F));
                        }, [t, n, s]),
                        s && o ? (a ? r.createElement(_.i, { screenName: s, suspendMessage: i }) : o.blocked_by ? r.createElement(b.T, { screenName: s }) : !o.protected || (o && c === o.id_str) || o.following ? (l ? r.createElement(f.Y, { screenName: s }) : r.createElement(d.H, { errorConfig: H }, r.createElement(D, e))) : r.createElement(E.X, { screenName: s })) : null
                    );
                });
        },
        806208: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var l = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(277660),
                i = n.n(s),
                o = n(154003),
                c = n(392237),
                u = n(718e3),
                d = n(991617),
                m = n(785813),
                p = n(825495),
                g = n(485822),
                y = n(164349),
                k = n(252021),
                f = n(736063),
                b = n(666670),
                E = n(72130),
                _ = n(520385),
                h = n(462166),
                Z = n(873302),
                v = n(535338),
                F = n(416699),
                x = n(484163),
                I = n(972796),
                S = n(21437),
                P = n(220544),
                C = n(695431),
                w = n(990229);
            const T = ({ analytics: e, expandedProfile: t, hasProfileBlocks: n, history: l, screenName: s, user: i, viewerUserId: c }) => {
                    r.useEffect(() => {
                        i?.id_str && e.scribe({ ...(0, E.Zi)(i?.id_str, { version: 2 }) });
                    }, [e, i?.id_str]);
                    const f = t?.result?.profile_sections?.items_results,
                        b = (0, Z.uR)(f, _.NB.ABOUT),
                        h = (0, Z.uR)(f, _.NB.WORK_EXPERIENCE),
                        v = (0, Z.hW)(b),
                        x = (0, Z.hW)(h),
                        I = r.useCallback(() => {
                            e.scribe({ ...(0, E.he)({ version: 2 }) });
                        }, [e]);
                    return r.createElement(k.Z, { backLocation: `/${s}`, history: l, primaryContent: i ? (n ? r.createElement(a.Z, { style: B.root }, r.createElement(d.Fo.Provider, { value: { userId: c, userQueryId: i.id_str } }, r.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: v, hasWorkHistorySection: x, sectionId: b?.rest_id?.section_id, sectionType: _.NB.ABOUT, blockCount: b?.result?.profile_blocks?.total_count || 0, sectionQueryId: b?.id, sectionVisibility: b?.result?.core?.visibility } }, r.createElement(g.Z, { isEditing: !1, section: b })), r.createElement(d.bQ.Provider, { value: { ...d.Y_, hasAboutSection: v, hasWorkHistorySection: x, sectionId: h?.rest_id?.section_id, sectionType: _.NB.WORK_EXPERIENCE, blockCount: h?.result?.profile_blocks?.total_count || 0, sectionQueryId: h?.id, sectionVisibility: h?.result?.core?.visibility } }, r.createElement(y.Z, { isEditing: !1, section: h })))) : r.createElement(F.Z, { header: "This user does not have an expanded bio", message: "Try searching for another.", screenName: s })) : null, rightControl: i?.id_str === c ? r.createElement(o.ZP, { link: "/settings/bio", onClick: I, size: "xSmall", type: "primaryOutlined" }, "Edit") : i ? r.createElement(w.Z, { user: i }) : null, sidebarContent: r.createElement(u.Z, null), subtitle: `@${s}`, title: (0, m.Z)(i), titleIconCell: (0, p.Z)(i) });
                },
                B = c.default.create((e) => ({ root: { marginBottom: e.componentDimensions.appBarHeightPx } })),
                R = ({ expandedProfile: e, hasProfileBlocks: t, ...n }) => {
                    const a = i()(h.cH, e);
                    return a ? r.createElement(T, (0, l.Z)({ expandedProfile: a, hasProfileBlocks: t }, n)) : null;
                },
                N = (e) => {
                    const { screenName: t } = e,
                        { user_result_by_screen_name: n } = (0, v.p)(h.Sp, { screenName: t }),
                        a = !!n?.result?.has_profile_blocks,
                        s = n?.result?.expanded_profile_results;
                    return t && s ? r.createElement(R, (0, l.Z)({ expandedProfile: s, hasProfileBlocks: a }, e)) : null;
                },
                K = { context: "EXTENDED_USER_PROFILE_V2" },
                L = (0, C.Z)((e) => {
                    const { createLocalApiErrorHandler: t, fetchOneUserByScreenNameIfNeeded: n, isNotFound: l, isSuspended: a, screenName: s, suspendMessage: i, user: o, viewerUserId: c } = e;
                    return (
                        r.useEffect(() => {
                            s && n(s).catch(t(b.F));
                        }, [t, n, s]),
                        s && o ? (a ? r.createElement(P.i, { screenName: s, suspendMessage: i }) : o.blocked_by ? r.createElement(I.T, { screenName: s }) : !o.protected || (o && c === o.id_str) || o.following ? (l ? r.createElement(x.Y, { screenName: s }) : r.createElement(f.H, { errorConfig: K }, r.createElement(N, e))) : r.createElement(S.X, { screenName: s })) : null
                    );
                });
        },
        416699: (e, t, n) => {
            n.d(t, { Z: () => g });
            var l = n(807896),
                r = n(202784),
                a = n(457311),
                s = n(392237),
                i = n(668214),
                o = n(919022);
            const c = (e, t) => !!t.screenName && o.ZP.selectIsUserSuspended(e, t.screenName),
                u = (e, t) => {
                    const n = t.screenName ? o.ZP.selectByScreenName(e, t.screenName) : void 0;
                    return n?.blocking;
                },
                d = (0, i.Z)().propsFromState(() => ({ isBlocking: u, isSuspended: c })),
                m = (e) => {
                    const { isBlocking: t, isSuspended: n, screenName: s, ...i } = e;
                    return r.createElement(r.Fragment, null, null, r.createElement(a.Z, (0, l.Z)({}, i, { style: [p.root, p.verticalPadding] })));
                },
                p = s.default.create((e) => ({ root: { backgroundColor: s.default.theme.colors.cellBackground, paddingHorizontal: s.default.theme.spaces.space20 }, verticalPadding: { paddingVertical: s.default.theme.spaces.space40 } })),
                g = d(r.memo(m));
        },
        484163: (e, t, n) => {
            n.d(t, { Y: () => c, Z: () => u });
            var l = n(202784),
                r = n(332920),
                a = n.n(r),
                s = n(416699);
            const i = a().c9a1cb5e,
                o = a().e7b201de,
                c = (e) => {
                    const { screenName: t } = e;
                    return l.createElement(s.Z, { header: i, message: o, screenName: t });
                },
                u = l.memo(c);
        },
        972796: (e, t, n) => {
            n.d(t, { T: () => d, Z: () => m });
            var l = n(202784),
                r = n(688715),
                a = n(731708),
                s = n(332920),
                i = n.n(s),
                o = n(416699);
            const c = i().ica87fde,
                u = (0, r.ju)("https://support.x.com/articles/20172060"),
                d = (e) => {
                    const { screenName: t } = e,
                        n = l.useMemo(() => l.createElement(i().I18NFormatMessage, { $i18n: "e6264621", screenName: t }, l.createElement(a.ZP, { link: u }, i().c7ec6faf)), [t]);
                    return l.createElement(o.Z, { header: c, message: n, screenName: t });
                },
                m = l.memo(d);
        },
        21437: (e, t, n) => {
            n.d(t, { X: () => d, Z: () => m });
            var l = n(202784),
                r = n(688715),
                a = n(731708),
                s = n(332920),
                i = n.n(s),
                o = n(416699);
            const c = i().bd598c70,
                u = (0, r.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: t } = e,
                        n = l.useMemo(() => l.createElement(i().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, l.createElement(a.ZP, { link: u }, i().e617164b)), [t]);
                    return l.createElement(o.Z, { header: c, message: n, screenName: t });
                },
                m = l.memo(d);
        },
        220544: (e, t, n) => {
            n.d(t, { Z: () => m, i: () => d });
            var l = n(202784),
                r = n(731708),
                a = n(332920),
                s = n.n(a),
                i = n(686689),
                o = n(416699);
            const c = s().g8475f82,
                u = l.createElement(s().I18NFormatMessage, { $i18n: "da9d52d7" }, l.createElement(r.ZP, { link: "https://support.x.com/articles/18311" }, s().j5e1cf59)),
                d = (e) => {
                    const { screenName: t, suspendHeader: n, suspendMessage: r } = e,
                        a = n ? l.createElement(i.Z, { entities: n.entities, rtl: n.rtl, text: n.text }) : c,
                        s = r ? l.createElement(i.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : u;
                    return l.createElement(o.Z, { header: a, message: s, screenName: t });
                },
                m = l.memo(d);
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => _ });
            n(136728);
            var l = n(202784),
                r = n(301503),
                a = n(325686),
                s = n(595088),
                i = n(516951),
                o = n(731708),
                c = n(779802),
                u = n(537392),
                d = n(989272),
                m = n(925873),
                p = n(202253),
                g = n(786475),
                y = n(392237),
                k = n(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: l.createElement(o.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: l.createElement(o.ZP, null) } },
                b = (0, s.Z)(f).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let E = !1;
            const _ = l.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: s, paragraphFontSizeOverride: o } = e;
                    l.useEffect(() => {
                        E || (d.fH(k.c, k.n), (E = !0));
                    }, []);
                    const y = [(0, p.ez)(s, o), p.aF, p.RU];
                    e.disable_entityLinkDecorator || y.push((0, p.NA)(s, o));
                    const f = m.Z.initEditorState(n, { decorators: y });
                    let _ = i.Z;
                    return (
                        t &&
                            (_ = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        l.createElement(u.ZP, null, ({ containerWidth: e }) => l.createElement(a.Z, { style: h.fontFamily }, l.createElement(r.Editor, { blockRenderMap: b, blockRendererFn: _, blockStyleFn: (0, c.su)(g.Z.isNarrowScreenWidth(e)), editorState: f, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                h = y.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ExtendedUserProfile.6134d54a.js.map
